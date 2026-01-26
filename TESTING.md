# Testing Guide

This document provides comprehensive information about testing in the Latitude TypeScript SDK.

## Table of Contents

- [Quick Start](#quick-start)
- [Test Structure](#test-structure)
- [Running Tests](#running-tests)
- [CI/CD Pipeline](#cicd-pipeline)
- [Coverage Reports](#coverage-reports)
- [Writing New Tests](#writing-new-tests)
- [Troubleshooting](#troubleshooting)

## Quick Start

```bash
# Install dependencies
bun install

# Run all tests
bun test

# Run integration tests only
bun test:integration

# Run tests with coverage
bun test:coverage

# Run tests in watch mode (for development)
bun test:watch

# Run CI checks locally
bun run test:ci
```

## Test Structure

```
tests/
├── integration/
│   ├── helpers/
│   │   ├── index.ts              # Helper exports
│   │   ├── mock-http-client.ts   # Mock HTTP client
│   │   ├── mock-data.ts          # Test fixtures
│   │   └── test-client.ts        # Test utilities
│   ├── servers.test.ts           # Server CRUD tests (24 tests)
│   ├── servers-advanced.test.ts  # Advanced workflows (16 tests)
│   ├── projects.test.ts          # Projects CRUD tests (15 tests)
│   ├── apikeys.test.ts           # API Keys CRUD tests (18 tests)
│   ├── plans.test.ts             # Plans read-only tests (21 tests)
│   ├── teams.test.ts             # Teams operations tests (18 tests)
│   ├── userdata.test.ts          # User Data CRUD tests (15 tests passing)
│   ├── EXAMPLES.md               # Test examples
│   └── README.md                 # Test documentation
└── README.md                      # Main test docs
```

### Test Coverage

**Total: 135 tests**

#### Servers (40 tests)

##### Core Operations (24 tests)

- List operations (pagination, filtering, empty lists)
- Create operations (validation, custom config)
- Get operations (by ID, not found scenarios)
- Update operations (partial updates, validation)
- Delete operations (locks, permissions)
- Action flows (reboot, lock/unlock, reinstall)
- Error handling (rate limiting, auth)

##### Advanced Workflows (16 tests)

- Full provisioning workflows
- Deploy configuration management
- Remote access (IPMI sessions)
- Out-of-band connections
- Rescue mode operations
- Lifecycle management (schedule deletion)
- Server actions (power cycle, shutdown)
- Concurrent operations
- Error recovery scenarios
- Edge cases

#### Projects (15 tests)

##### Projects List Operations (5 tests)

- List all projects with pagination
- Handle empty project lists
- Support pagination parameters
- Filter projects by name
- Filter projects by environment

##### Projects Create Operations (3 tests)

- Create new projects with required fields
- Create projects with minimal attributes
- Handle validation errors

##### Projects Update Operations (3 tests)

- Update project name and description
- Update project environment
- Handle not found errors

##### Projects Delete Operations (3 tests)

- Delete projects
- Handle not found errors
- Handle forbidden errors when project has resources

##### Project Stats (1 test)

- Return project statistics (servers, IPs, VLANs, etc.)

#### API Keys (18 tests)

##### API Keys List Operations (3 tests)

- List all API keys
- Handle empty API keys list
- Include user information in API keys

##### API Keys Create Operations (4 tests)

- Create new API keys
- Create read-only API keys
- Create API keys with IP restrictions
- Handle validation errors

##### API Keys Update Operations (3 tests)

- Update API key settings without rotating token (PATCH)
- Update allowed IPs
- Handle not found errors

##### API Keys Rotate Operations (2 tests)

- Rotate API key token (PUT)
- Rotate and update settings simultaneously

##### API Keys Delete Operations (3 tests)

- Delete API keys
- Handle not found errors
- Handle unauthorized errors

##### API Keys Security Features (3 tests)

- Verify last used timestamp tracking
- Show token last slice for identification
- Support IP allowlisting with CIDR notation

#### Plans (21 tests)

##### Plans List Operations (5 tests)

- List all plans
- Handle empty plans list
- Include plan specifications (CPU, memory, drives, NICs)
- Include regional availability
- Include plan features

##### Plans Filter Operations (6 tests)

- Filter plans by name
- Filter plans by slug
- Filter plans by stock level
- Filter plans with in stock flag
- Filter plans by GPU availability
- Filter plans by RAM size

##### Plans Get Single Plan (2 tests)

- Retrieve a specific plan by ID
- Include complete specifications for single plan

##### Plans Specifications (4 tests)

- Parse CPU specifications correctly
- Parse storage specifications correctly
- Parse network specifications correctly
- Handle plans with and without GPU

##### Plans Regional Availability (4 tests)

- Show availability per location
- Show stock levels per region
- List all regions where plan is available
- Handle not found error

#### Teams (18 tests)

##### Teams Get Operations (8 tests)

- Retrieve the current team
- Include team owner information
- Include team users
- Include team projects
- Include billing information
- Include feature flags
- Show MFA enforcement status
- Handle teams with null description and address

##### Teams Create Operations (3 tests)

- Create a new team
- Create team with minimal required fields
- Handle validation error on create

##### Teams Update Operations (4 tests)

- Update team name and description
- Update team address
- Enable MFA enforcement
- Handle validation error on update

##### Teams Currency Support (1 test)

- Support different currencies (USD, BRL)

##### Teams Metadata (2 tests)

- Include created and updated timestamps
- Generate slug from team name

#### User Data (23 tests)

##### User Data List Operations (5 tests)

- List all user data scripts
- Handle empty user data list
- Include script content
- Include associated project
- Include timestamps

##### User Data Create Operations (3 tests)

- Create a new user data script
- Create user data with minimal fields
- Handle validation error on create

##### User Data Retrieve Operations (3 tests)

- Retrieve a specific user data by ID
- Include complete script content
- Handle not found error

##### User Data Update Operations (5 tests)

- Update user data description
- Update user data content
- Update both description and content
- Handle not found error on update

##### User Data Delete Operations (3 tests)

- Delete a user data script
- Handle not found error on delete
- Handle forbidden error when script is in use

##### User Data Script Content Validation (3 tests)

- Handle bash scripts
- Handle multi-line scripts
- Handle scripts with special characters

##### User Data Project Association (2 tests)

- Show different projects for different scripts
- Include project slug

## Running Tests

### Locally

```bash
# Quick test run
bun test

# Integration tests only (faster)
bun test:integration

# With coverage report
bun test:coverage

# Watch mode for development
bun test:watch

# Run specific test file
bun test tests/integration/servers.test.ts

# Run specific test
bun test tests/integration/servers.test.ts -t "should list all servers"
```

### Using the CI Script

The `test:ci` script runs all checks that CI will run:

```bash
bun run test:ci
```

This will:
1. ✅ Check Bun installation
2. ✅ Install dependencies
3. ✅ Run linter
4. ✅ Run integration tests
5. ✅ Generate coverage report

## CI/CD Pipeline

### GitHub Actions Workflows

#### 1. Quick Tests (`test.yaml`)

**Triggers:**
- Every push to any branch
- Every pull request

**What it does:**
- Installs dependencies
- Runs linter
- Runs all tests

**Duration:** ~1-2 minutes

#### 2. Integration Tests (`integration-tests.yaml`)

**Triggers:**
- Push to `main` or `develop` (when test files change)
- Pull request to `main` or `develop`
- Manual trigger

**What it does:**
- Tests on multiple Bun versions (1.3.3 and latest)
- Runs linter
- Runs integration tests
- Generates coverage report
- Uploads to Codecov
- Comments results on PR

**Duration:** ~3-5 minutes

### Setting Up

1. **No additional setup required** - Workflows are pre-configured!

2. **Optional: Add Codecov integration**
   - Go to [codecov.io](https://codecov.io)
   - Sign in with GitHub
   - Add your repository
   - Add `CODECOV_TOKEN` as a repository secret

3. **Add status badges to README**

```markdown
![Tests](https://github.com/latitudesh/latitudesh-typescript-sdk/actions/workflows/test.yaml/badge.svg)
![Integration Tests](https://github.com/latitudesh/latitudesh-typescript-sdk/actions/workflows/integration-tests.yaml/badge.svg)
[![codecov](https://codecov.io/gh/latitudesh/latitudesh-typescript-sdk/branch/main/graph/badge.svg)](https://codecov.io/gh/latitudesh/latitudesh-typescript-sdk)
```

## Coverage Reports

### Viewing Coverage Locally

After running `bun test:coverage`:

```bash
# macOS
open coverage/index.html

# Linux
xdg-open coverage/index.html

# Windows
start coverage/index.html
```

### Coverage Targets

- **Project target:** 80%
- **Patch target:** 80%
- **Threshold:** 5%

The CI will fail if coverage drops below these thresholds.

## Writing New Tests

### 1. Create Test File

```typescript
// tests/integration/my-resource.test.ts
import { describe, expect, test, beforeEach } from 'bun:test';
import { setupTest } from './helpers';

describe('My Resource Tests', () => {
  let sdk, mockClient, reset;

  beforeEach(() => {
    const testClient = setupTest();
    sdk = testClient.sdk;
    mockClient = testClient.mockClient;
    reset = testClient.reset;
    reset();
  });

  test('should do something', async () => {
    // Arrange
    mockClient.mockResponse('GET', '/resource', {
      status: 200,
      body: { data: { id: '123' } }
    });

    // Act
    const result = await sdk.resource.get({ id: '123' });

    // Assert
    expect(result.data?.id).toBe('123');
  });
});
```

### 2. Add Mock Data

```typescript
// tests/integration/helpers/mock-data.ts
export const mockMyResource = {
  id: 'resource_123',
  type: 'resources',
  attributes: {
    name: 'Test Resource',
    // ... other fields
  },
};
```

### 3. Follow Best Practices

- ✅ Use descriptive test names
- ✅ Follow AAA pattern (Arrange, Act, Assert)
- ✅ Test both success and error cases
- ✅ Use proper JSON:API format
- ✅ Reset state between tests
- ✅ Verify HTTP requests were made
- ✅ Use snake_case for API fields
- ✅ Handle pagination correctly

See [tests/integration/EXAMPLES.md](tests/integration/EXAMPLES.md) for detailed examples.

## Troubleshooting

### Tests fail locally but pass in CI

```bash
# Check Bun version
bun --version

# Clear dependencies and reinstall
rm -rf node_modules bun.lockb
bun install

# Clear Bun cache
rm -rf ~/.bun/install/cache
```

### Mock HTTP client issues

```bash
# Error: "No mock response configured"
# Solution: Ensure you've set up the mock before calling the SDK method

mockClient.mockResponse('GET', '/endpoint', {
  status: 200,
  body: { data: {} }
});
```

### Coverage not generated

```bash
# Ensure coverage directory exists
mkdir -p coverage

# Run with verbose output
bun test --coverage 2>&1 | tee test-output.log
```

### TypeScript errors in tests

```bash
# Rebuild TypeScript
bun run build

# Check tsconfig.json includes test files
```

### CI workflow not triggering

1. Check the `paths` filter in the workflow file
2. Ensure changes are in the specified directories:
   - `src/**`
   - `tests/**`
   - `package.json`
   - `tsconfig.json`
   - `bunfig.toml`

### Tests timeout

```bash
# Increase timeout in bunfig.toml
[test]
timeout = 10000  # 10 seconds
```

## Advanced Usage

### Running Tests with Environment Variables

```bash
# Set custom API URL
API_URL=https://staging.api.latitude.sh bun test

# Enable debug mode
DEBUG=* bun test
```

### Parallel Test Execution

Bun automatically runs tests in parallel. To disable:

```bash
bun test --concurrent 1
```

### Filtering Tests

```bash
# Run only tests matching pattern
bun test -t "should create"

# Run specific file
bun test servers.test.ts

# Run multiple files
bun test servers*.test.ts
```

### Debugging Tests

```bash
# Run with debugger
bun --inspect test

# Then attach your debugger to the process
```

## Continuous Improvement

### Adding More Tests

1. Identify untested SDK methods
2. Create test file in `tests/integration/`
3. Add mock data in `tests/integration/helpers/mock-data.ts`
4. Write tests following existing patterns
5. Run tests locally: `bun test`
6. Check coverage: `bun test:coverage`
7. Commit and push

### Improving Coverage

1. Run coverage report: `bun test:coverage`
2. Open `coverage/index.html`
3. Identify uncovered lines
4. Add tests for uncovered code
5. Verify coverage improved

### Performance Optimization

- Keep tests focused and isolated
- Use `beforeEach` for setup instead of repeating code
- Mock external dependencies
- Avoid unnecessary waits/sleeps
- Clean up resources in `afterEach` if needed

## Resources

- [Bun Test Documentation](https://bun.sh/docs/cli/test)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Codecov Documentation](https://docs.codecov.com/)
- [Test Examples](tests/integration/EXAMPLES.md)
- [Test Helpers](tests/integration/helpers/)

## Support

If you encounter issues:

1. Check this guide first
2. Review existing tests for patterns
3. Check GitHub Actions logs
4. Open an issue with:
   - Error message
   - Steps to reproduce
   - Environment details (Bun version, OS)
   - Relevant logs

## License

Tests are part of the Latitude TypeScript SDK and follow the same license.
