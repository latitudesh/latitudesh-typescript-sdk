# Integration Tests - Latitude SDK

This directory contains integration tests for the Latitude TypeScript SDK.

## Structure

```
tests/
├── integration/
│   ├── helpers/
│   │   ├── index.ts              # Helper exports
│   │   ├── mock-http-client.ts   # Mocked HTTP client
│   │   ├── mock-data.ts          # Test data
│   │   └── test-client.ts        # Utilities to create test client
│   └── servers.test.ts           # Integration tests for Servers
└── README.md
```

## Running Tests

### Run all tests

```bash
bun test
```

### Run integration tests only

```bash
bun test:integration
```

### Run tests in watch mode

```bash
bun test:watch
```

### Run tests with coverage

```bash
bun test:coverage
```

## Test Architecture

### Mock HTTP Client

Tests use a mocked HTTP client (`MockHTTPClient`) that intercepts requests and returns predefined responses. This allows testing SDK flows without making real API calls.

**Usage example:**

```typescript
import { setupTest } from './helpers';

const { sdk, mockClient } = setupTest();

// Configure mock response
mockClient.mockResponse('GET', '/servers', {
  status: 200,
  body: { data: [...] }
});

// Execute operation
const result = await sdk.servers.list();

// Verify request
expect(mockClient.verifyRequest('GET', '/servers')).toBe(true);
```

### Test Data

The `mock-data.ts` file contains reusable test data for different scenarios:

- `mockServer` - Example server
- `mockServerList` - List of servers
- `mockServerCreateRequest` - Creation request
- `createMockServers(count)` - Generates multiple servers
- `createPaginatedResponse(data, page, perPage)` - Creates paginated response

## Test Coverage

### Servers API

Tests cover the following scenarios:

#### `servers.list()`

- ✅ List all servers
- ✅ Pagination
- ✅ Project filters
- ✅ Empty list
- ✅ API errors

#### `servers.create()`

- ✅ Create new server
- ✅ Validation errors
- ✅ Insufficient resources
- ✅ Custom configuration

#### `servers.get()`

- ✅ Retrieve server by ID
- ✅ Server not found
- ✅ Complete details

#### `servers.update()`

- ✅ Update server
- ✅ Update labels only
- ✅ Validation errors

#### `servers.delete()`

- ✅ Delete server
- ✅ Server not found
- ✅ Locked server

#### Action Flows

- ✅ Restart server
- ✅ Lock/unlock
- ✅ Reinstall

#### Rate Limiting and Auth

- ✅ Rate limiting
- ✅ Unauthorized requests
- ✅ Forbidden requests

## Adding New Tests

### 1. Create test file

```typescript
// tests/integration/new-resource.test.ts
import { describe, expect, test, beforeEach } from 'bun:test';
import { setupTest } from './helpers';

describe('New Resource Tests', () => {
  let sdk, mockClient, reset;

  beforeEach(() => {
    const testClient = setupTest();
    sdk = testClient.sdk;
    mockClient = testClient.mockClient;
    reset = testClient.reset;
    reset();
  });

  test('should do something', async () => {
    mockClient.mockResponse('GET', '/resource', {
      status: 200,
      body: { data: {...} }
    });

    const result = await sdk.resource.get();
    expect(result).toBeDefined();
  });
});
```

### 2. Add mock data (if needed)

```typescript
// tests/integration/helpers/mock-data.ts
export const mockNewResource = {
  id: 'resource_123',
  name: 'Test Resource',
  // ...
};
```

### 3. Run the tests

```bash
bun test tests/integration/new-resource.test.ts
```

## Best Practices

1. **Always use mocks** - Never make real API calls in integration tests
2. **Reset between tests** - Use `reset()` in `beforeEach` to clear state
3. **Test error cases** - Include tests for 4xx and 5xx errors
4. **Verify requests** - Use `verifyRequest()` to ensure the request was made correctly
5. **Realistic data** - Use mock data that reflects real API responses
6. **Test pagination** - For endpoints with pagination, test multiple pages
7. **Document scenarios** - Use descriptive test names

## Troubleshooting

### "No mock response configured"

Make sure you've configured a mock response before executing the operation:

```typescript
mockClient.mockResponse('GET', '/endpoint', {
  status: 200,
  body: { data: {...} }
});
```

### Tests failing intermittently

Check if you're using `reset()` in `beforeEach` to clear state between tests.

### Test timeout

Increase Bun's timeout if necessary:

```typescript
test('long running test', async () => {
  // test code
}, { timeout: 10000 }); // 10 seconds
```

## Contributing

When adding new tests:

1. Follow existing structure
2. Add tests for both success and error cases
3. Document complex scenarios
4. Keep mocks up to date with the real API
5. Run all tests before committing
