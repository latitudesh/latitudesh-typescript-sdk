// run-tests.ts - Main script that runs all tests
import { runReadonlyTests } from "./test-readonly.js";
import { runCrudTests } from "./test-crud.js";

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  duration?: number;
}

async function main() {
  console.log("🚀 Starting SDK Integration Tests\n");
  console.log("=".repeat(50));

  const allResults: TestResult[] = [];

  // Run readonly tests first
  console.log("\n📖 READONLY TESTS\n");
  const readonlyResults = await runReadonlyTests();
  allResults.push(...readonlyResults);

  // Run CRUD tests (skip if SKIP_CRUD_TESTS is set)
  if (process.env.SKIP_CRUD_TESTS !== "true") {
    console.log("\n📝 CRUD TESTS\n");
    const crudResults = await runCrudTests();
    allResults.push(...crudResults);
  } else {
    console.log("\n⏭️  Skipping CRUD tests (SKIP_CRUD_TESTS=true)\n");
  }

  // Print final summary
  console.log("\n" + "=".repeat(50));
  console.log("📊 FINAL SUMMARY");
  console.log("=".repeat(50) + "\n");

  let passed = 0;
  let failed = 0;
  const failedTests: TestResult[] = [];

  for (const result of allResults) {
    if (result.passed) {
      passed++;
    } else {
      failed++;
      failedTests.push(result);
    }
  }

  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Total:  ${allResults.length}`);
  console.log(`⏱️  Success Rate: ${((passed / allResults.length) * 100).toFixed(1)}%`);

  if (failedTests.length > 0) {
    console.log("\n❌ Failed Tests:");
    for (const test of failedTests) {
      console.log(`   - ${test.name}: ${test.error || "Unknown error"}`);
    }
  }

  console.log("\n" + "=".repeat(50));

  process.exit(failed > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});