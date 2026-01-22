// test-readonly.ts - Tests that do not modify data
import { Latitudesh } from "latitudesh-typescript-sdk";

const client = new Latitudesh({
  bearer: process.env.LATITUDE_API_KEY,
  serverURL: process.env.SERVER_URL,
});

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  duration?: number;
}

const results: TestResult[] = [];

async function test(name: string, fn: () => Promise<boolean>) {
  const start = Date.now();
  try {
    const passed = await fn();
    results.push({ name, passed, duration: Date.now() - start });
  } catch (e: any) {
    results.push({ name, passed: false, error: e.message, duration: Date.now() - start });
  }
}

async function runReadonlyTests() {
  console.log("🔍 Running Readonly Tests...\n");

  // Plans
  await test("Plans - List", async () => {
    const response = await client.plans.list();
    return (response.data?.length ?? 0) > 0;
  });

  await test("Plans - Get Single", async () => {
    const listResponse = await client.plans.list();
    if (!listResponse.data?.[0]?.id) return false;
    const plan = await client.plans.get({ planId: listResponse.data[0].id });
    return !!plan.data?.id;
  });

  await test("Plans - Bandwidth Plans", async () => {
    const iterator = await client.plans.getBandwidth();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) >= 0;
    }
    return true;
  });

  await test("Plans - Storage Plans", async () => {
    const response = await client.plans.listStorage();
    return !!response.data;
  });

  await test("Plans - VM Plans", async () => {
    const response = await client.plans.list();
    return !!response.data;
  });

  // Regions
  await test("Regions - List", async () => {
    const iterator = await client.regions.get();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) > 0;
    }
    return false;
  });

  await test("Regions - Get Single", async () => {
    const iterator = await client.regions.get();
    for await (const page of iterator) {
      if (page.result.data?.[0]?.id) {
        const region = await client.regions.fetch({ regionId: page.result.data[0].id! });
        return !!region.data?.id;
      }
    }
    return false;
  });

  // Operating Systems
  await test("Operating Systems - List", async () => {
    const iterator = await client.operatingSystems.listPlans();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) > 0;
    }
    return false;
  });

  // Teams
  await test("Teams - Get Current", async () => {
    const response = await client.teams.get();
    return !!response.data?.[0]?.id;
  });

  // Team Members
  await test("Team Members - List", async () => {
    const iterator = await client.teams.members.getTeamMembers();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) > 0;
    }
    return false;
  });

  // User Profile
  await test("User Profile - Get", async () => {
    const response = await client.userProfile.get();
    return !!response.data;
  });

  await test("User Profile - Get Teams", async () => {
    const response = await client.userProfile.listTeams();
    return !!response.data;
  });

  // Roles
  await test("Roles - List", async () => {
    const iterator = await client.roles.list();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) > 0;
    }
    return false;
  });

  // Projects
  await test("Projects - List", async () => {
    const iterator = await client.projects.list();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) >= 0;
    }
    return true;
  });

  // API Keys
  await test("API Keys - List", async () => {
    const response = await client.apiKeys.list();
    return (response.data?.length ?? 0) >= 0;
  });

  // SSH Keys
  await test("SSH Keys - List", async () => {
    const response = await client.sshKeys.listAll();
    return (response.data?.length ?? 0) >= 0;
  });

  // User Data
  await test("User Data - List", async () => {
    const response = await client.userData.list();
    return (response.data?.length ?? 0) >= 0;
  });

  // Tags
  await test("Tags - List", async () => {
    const response = await client.tags.list();
    return (response.data?.length ?? 0) >= 0;
  });

  // Events
  await test("Events - List", async () => {
    const iterator = await client.events.list();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) >= 0;
    }
    return true;
  });

  // Traffic
  await test("Traffic - Get Quota", async () => {
    const response = await client.traffic.getQuota();
    return !!response.data;
  });

  // IP Addresses
  await test("IP Addresses - List", async () => {
    const iterator = await client.ipAddresses.list();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) >= 0;
    }
    return true;
  });

  // Servers
  await test("Servers - List", async () => {
    const iterator = await client.servers.list();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) >= 0;
    }
    return true;
  });

  // Firewalls
  await test("Firewalls - List", async () => {
    const iterator = await client.firewalls.list();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) >= 0;
    }
    return true;
  });

  // Virtual Networks
  await test("Virtual Networks - List", async () => {
    const iterator = await client.privateNetworks.list();
    for await (const page of iterator) {
      return (page.result.data?.length ?? 0) >= 0;
    }
    return true;
  });

  // VPN Sessions
  await test("VPN Sessions - List", async () => {
    const response = await client.vpnSessions.list();
    return (response.data?.length ?? 0) >= 0;
  });

  return results;
}

// Export for run-tests.ts
export { runReadonlyTests, results as readonlyResults };

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runReadonlyTests().then((results) => {
    console.log("\n========== Readonly Test Results ==========\n");
    
    let passed = 0;
    let failed = 0;
    
    for (const result of results) {
      const status = result.passed ? "✅" : "❌";
      const duration = result.duration ? ` (${result.duration}ms)` : "";
      const error = result.error ? ` - ${result.error}` : "";
      console.log(`${status} ${result.name}${duration}${error}`);
      
      if (result.passed) passed++;
      else failed++;
    }

    console.log(`\n========== Summary ==========`);
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📊 Total:  ${results.length}`);

    process.exit(failed > 0 ? 1 : 0);
  }).catch((e) => {
    console.error("Fatal error:", e);
    process.exit(1);
  });
}
