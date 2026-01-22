// test-crud.ts - Testes CRUD que criam e deletam recursos
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

async function runCrudTests() {
  console.log("🔧 Running CRUD Tests...\n");

  // ==================== API Keys CRUD ====================
  let apiKeyId: string | undefined;
  
  await test("API Keys - Create", async () => {
    const response = await client.apiKeys.create({
      data: {
        type: "api_keys",
        attributes: { name: `SDK Test Key ${Date.now()}` },
      },
    });
    apiKeyId = response.data?.id;
    return !!apiKeyId;
  });

  await test("API Keys - Update", async () => {
    if (!apiKeyId) return false;
    await client.apiKeys.updateApiKey({
      apiKeyId,
      updateApiKey: {
        data: {
          id: apiKeyId,
          type: "api_keys",
          attributes: { name: `Updated SDK Key ${Date.now()}` },
        },
      },
    });
    return true;
  });

  await test("API Keys - Delete", async () => {
    if (!apiKeyId) return false;
    await client.apiKeys.delete({ apiKeyId });
    apiKeyId = undefined;
    return true;
  });

  // ==================== Tags CRUD ====================
  let tagId: string | undefined;
  
  await test("Tags - Create", async () => {
    const response = await client.tags.create({
      data: {
        type: "tags",
        attributes: {
          name: `sdk-test-${Date.now()}`,
          color: "#FF5733",
          description: "SDK Integration Test",
        },
      },
    });
    tagId = response.data?.id;
    return !!tagId;
  });

  await test("Tags - Update", async () => {
    if (!tagId) return false;
    await client.tags.update({
      tagId,
      requestBody: {
        data: { type: "tags", attributes: { name: `sdk-updated-${Date.now()}`, color: "#33FF57" } },
      },
    });
    return true;
  });

  await test("Tags - Delete", async () => {
    if (!tagId) return false;
    await client.tags.delete({ tagId });
    tagId = undefined;
    return true;
  });

  // ==================== SSH Keys CRUD ====================
  let sshKeyId: string | undefined;
  const fakePublicKey = `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC${Buffer.from(String(Date.now())).toString("base64").slice(0, 20)}AAAA sdk-test@latitude`;
  
  await test("SSH Keys - Create", async () => {
    const response = await client.sshKeys.create({
      data: {
        type: "ssh_keys",
        attributes: { name: `SDK Test Key ${Date.now()}`, publicKey: fakePublicKey },
      },
    });
    sshKeyId = response.data?.id;
    return !!sshKeyId;
  });

  await test("SSH Keys - Get", async () => {
    if (!sshKeyId) return false;
    const response = await client.sshKeys.retrieve({ sshKeyId });
    return !!response.data?.id;
  });

  await test("SSH Keys - Update", async () => {
    if (!sshKeyId) return false;
    await client.sshKeys.update({
      sshKeyId,
      requestBody: {
        data: { type: "ssh_keys", attributes: { name: `Updated SDK Key ${Date.now()}` } },
      },
    });
    return true;
  });

  await test("SSH Keys - Delete", async () => {
    if (!sshKeyId) return false;
    await client.sshKeys.delete({ sshKeyId });
    sshKeyId = undefined;
    return true;
  });

  // ==================== User Data CRUD ====================
  let userDataId: string | undefined;
  
  await test("User Data - Create", async () => {
    const response = await client.userData.createNew({
      data: { type: "user_data", attributes: { description: `SDK Test ${Date.now()}`, content: "#!/bin/bash\necho 'SDK Integration Test'" } },
    });
    userDataId = response.data?.id;
    return !!userDataId;
  });

  await test("User Data - Get", async () => {
    if (!userDataId) return false;
    const response = await client.userData.retrieve({ userDataId });
    return !!response.data?.id;
  });

  await test("User Data - Update", async () => {
    if (!userDataId) return false;
    await client.userData.update({
      userDataId,
      requestBody: {
        data: { id: userDataId, type: "user_data", attributes: { description: `Updated SDK Test ${Date.now()}`, content: "#!/bin/bash\necho 'Updated SDK Test'" } },
      },
    });
    return true;
  });

  await test("User Data - Delete", async () => {
    if (!userDataId) return false;
    await client.userData.delete({ userDataId });
    userDataId = undefined;
    return true;
  });

  // ==================== Projects CRUD ====================
  let projectId: string | undefined;
  
  await test("Projects - Create", async () => {
    const response = await client.projects.create({
      data: {
        type: "projects",
        attributes: {
          name: `SDK Test Project ${Date.now()}`,
          description: "Created by SDK integration tests",
          environment: "Development",
          provisioningType: "reserved"
        }
      },
    });
    projectId = response.data?.id;
    return !!projectId;
  });

  await test("Projects - Update", async () => {
    if (!projectId) return false;
    await client.projects.update({
      projectId,
      requestBody: {
        data: { id: projectId, type: "projects", attributes: { name: `Updated SDK Project ${Date.now()}`, description: "Updated by SDK tests", environment: "Development" } },
      },
    });
    return true;
  });

  await test("Projects - Delete", async () => {
    if (!projectId) return false;
    await client.projects.delete({ projectId });
    projectId = undefined;
    return true;
  });

  // Cleanup any remaining resources
  if (apiKeyId) {
    try { await client.apiKeys.delete({ apiKeyId }); } catch {}
  }
  if (tagId) {
    try { await client.tags.delete({ tagId }); } catch {}
  }
  if (sshKeyId) {
    try { await client.sshKeys.delete({ sshKeyId }); } catch {}
  }
  if (userDataId) {
    try { await client.userData.delete({ userDataId }); } catch {}
  }
  if (projectId) {
    try { await client.projects.delete({ projectId }); } catch {}
  }

  return results;
}

// Export for run-tests.ts
export { runCrudTests, results as crudResults };

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runCrudTests().then((results) => {
    console.log("\n========== CRUD Test Results ==========\n");
    
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