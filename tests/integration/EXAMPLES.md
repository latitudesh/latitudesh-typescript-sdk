# Test Usage Examples

This document contains practical examples of how to use integration tests and how patterns can be applied in real code.

## Basic Test Structure

```typescript
import { describe, expect, test, beforeEach } from 'bun:test';
import { setupTest, mockServer } from './helpers';

describe('My Resource Tests', () => {
  let sdk, mockClient, reset;

  beforeEach(() => {
    const testClient = setupTest();
    sdk = testClient.sdk;
    mockClient = testClient.mockClient;
    reset = testClient.reset;
    reset(); // Clear state between tests
  });

  test('should do something', async () => {
    // Arrange: Configure mocks
    mockClient.mockResponse('GET', '/resource', {
      status: 200,
      body: { data: { id: '123', name: 'Test' } }
    });

    // Act: Execute action
    const result = await sdk.resource.get({ id: '123' });

    // Assert: Verify result
    expect(result.id).toBe('123');
    expect(mockClient.verifyRequest('GET', '/resource')).toBe(true);
  });
});
```

## Testing Pagination

```typescript
test('should handle pagination correctly', async () => {
  const servers = createMockServers(75); // 75 servers

  // Page 1
  mockClient.mockResponse('GET', '/servers', {
    status: 200,
    body: createPaginatedResponse(servers, 1, 25)
  });

  // Page 2
  mockClient.mockResponse('GET', '/servers', {
    status: 200,
    body: createPaginatedResponse(servers, 2, 25)
  });

  // Page 3
  mockClient.mockResponse('GET', '/servers', {
    status: 200,
    body: createPaginatedResponse(servers, 3, 25)
  });

  const result = await sdk.servers.list();
  const allServers = [];

  for await (const page of result) {
    allServers.push(...page.data);
  }

  expect(allServers).toHaveLength(75);
  expect(mockClient.countRequests('GET', '/servers')).toBe(3);
});
```

## Testing Complex Flows

### Provisioning Workflow

```typescript
test('should complete server provisioning workflow', async () => {
  // 1. Create server
  mockClient.mockResponse('POST', '/servers', {
    status: 201,
    body: { data: { ...mockServer, status: 'provisioning' } }
  });

  const server = await sdk.servers.create({
    requestBody: {
      project: 'proj_123',
      plan: 'c3.small.x86',
      operating_system: 'ubuntu_22_04_x64_lts',
      hostname: 'api-server-01',
      site: 'sao-paulo'
    }
  });

  expect(server.status).toBe('provisioning');

  // 2. Wait for activation (simulated)
  mockClient.mockResponse('GET', `/servers/${server.id}`, {
    status: 200,
    body: { data: { ...server, status: 'active' } }
  });

  const activeServer = await sdk.servers.get({ id: server.id });
  expect(activeServer.status).toBe('active');

  // 3. Configure server
  mockClient.mockResponse('PATCH', `/servers/${server.id}`, {
    status: 200,
    body: {
      data: {
        ...activeServer,
        description: 'API Production Server',
        tags: ['production', 'api']
      }
    }
  });

  const configured = await sdk.servers.update({
    id: server.id,
    requestBody: {
      description: 'API Production Server',
      tags: ['production', 'api']
    }
  });

  expect(configured.description).toBe('API Production Server');
  expect(configured.tags).toContain('production');
});
```

### Maintenance Window

```typescript
test('should handle server maintenance workflow', async () => {
  const serverId = 'srv_123';

  // 1. Lock server
  mockClient.mockResponse('POST', `/servers/${serverId}/lock`, {
    status: 200,
    body: { data: { ...mockServer, locked: true } }
  });

  await sdk.servers.lock({ id: serverId });

  // 2. Enter rescue mode
  mockClient.mockResponse('POST', `/servers/${serverId}/rescue-mode`, {
    status: 200,
    body: {
      data: {
        ...mockServer,
        status: 'rescue_mode',
        rescue_password: 'temp-123'
      }
    }
  });

  const rescue = await sdk.servers.startRescueMode({ id: serverId });
  expect(rescue.status).toBe('rescue_mode');

  // 3. Perform maintenance (simulated)
  // ... maintenance operations ...

  // 4. Exit rescue mode
  mockClient.mockResponse('DELETE', `/servers/${serverId}/rescue-mode`, {
    status: 200,
    body: { data: { ...mockServer, status: 'active' } }
  });

  await sdk.servers.exitRescueMode({ id: serverId });

  // 5. Unlock server
  mockClient.mockResponse('DELETE', `/servers/${serverId}/lock`, {
    status: 200,
    body: { data: { ...mockServer, locked: false } }
  });

  const unlocked = await sdk.servers.unlock({ id: serverId });
  expect(unlocked.locked).toBe(false);
});
```

## Testing Error Cases

### Validation Errors

```typescript
test('should handle validation errors with details', async () => {
  mockClient.mockResponse('POST', '/servers', {
    status: 422,
    body: {
      error: {
        message: 'Validation failed',
        code: 'validation_error',
        errors: [
          { field: 'hostname', message: 'Hostname cannot contain spaces' },
          { field: 'plan', message: 'Plan is not available in this region' }
        ]
      }
    }
  });

  try {
    await sdk.servers.create({
      requestBody: {
        project: 'proj_123',
        plan: 'invalid_plan',
        operating_system: 'ubuntu_22_04_x64_lts',
        hostname: 'my server', // Invalid
        site: 'sao-paulo'
      }
    });

    fail('Should have thrown an error');
  } catch (error) {
    expect(error.message).toContain('Validation failed');
    // You can verify error details here
  }
});
```

### Rate Limiting

```typescript
test('should handle rate limiting gracefully', async () => {
  mockClient.mockResponse('GET', '/servers', {
    status: 429,
    headers: {
      'retry-after': '60',
      'x-ratelimit-limit': '100',
      'x-ratelimit-remaining': '0',
      'x-ratelimit-reset': '1640000000'
    },
    body: {
      error: {
        message: 'Rate limit exceeded',
        code: 'rate_limit_exceeded',
        retry_after: 60
      }
    }
  });

  try {
    const result = await sdk.servers.list();
    for await (const page of result) {
      page;
    }
    fail('Should have thrown an error');
  } catch (error) {
    expect(error.message).toContain('Rate limit');
    // In production, you would implement retry with backoff
  }
});
```

### Transient Network Errors

```typescript
test('should retry on transient errors', async () => {
  let attempts = 0;

  // First attempt fails
  mockClient.mockResponse('GET', '/servers/srv_123', {
    status: 503,
    body: {
      error: {
        message: 'Service temporarily unavailable',
        code: 'service_unavailable'
      }
    }
  });

  // Second attempt succeeds
  mockClient.mockResponse('GET', '/servers/srv_123', {
    status: 200,
    body: { data: mockServer }
  });

  // First attempt
  try {
    await sdk.servers.get({ id: 'srv_123' });
    fail('Should have thrown');
  } catch (error) {
    attempts++;
  }

  // Retry (second attempt)
  const server = await sdk.servers.get({ id: 'srv_123' });
  attempts++;

  expect(attempts).toBe(2);
  expect(server.id).toBe('srv_123');
});
```

## Testing Concurrent Operations

```typescript
test('should handle concurrent server operations', async () => {
  const serverIds = ['srv_1', 'srv_2', 'srv_3', 'srv_4', 'srv_5'];

  // Configure mocks for each server
  serverIds.forEach(id => {
    mockClient.mockResponse('GET', `/servers/${id}`, {
      status: 200,
      body: { data: { ...mockServer, id } }
    });
  });

  // Fetch all simultaneously
  const servers = await Promise.all(
    serverIds.map(id => sdk.servers.get({ id }))
  );

  expect(servers).toHaveLength(5);
  servers.forEach((server, index) => {
    expect(server.id).toBe(serverIds[index]);
  });

  // Verify all requests were made
  expect(mockClient.countRequests('GET')).toBe(5);
});
```

## Testing with Dynamic Data

```typescript
test('should handle dynamic server creation', async () => {
  const serverConfigs = [
    { hostname: 'web-01', tags: ['web', 'frontend'] },
    { hostname: 'api-01', tags: ['api', 'backend'] },
    { hostname: 'db-01', tags: ['database', 'postgres'] }
  ];

  for (const config of serverConfigs) {
    mockClient.mockResponse('POST', '/servers', {
      status: 201,
      body: {
        data: {
          ...mockServer,
          hostname: config.hostname,
          tags: config.tags
        }
      }
    });

    const server = await sdk.servers.create({
      requestBody: {
        project: 'proj_123',
        plan: 'c3.small.x86',
        operating_system: 'ubuntu_22_04_x64_lts',
        hostname: config.hostname,
        site: 'sao-paulo',
        tags: config.tags
      }
    });

    expect(server.hostname).toBe(config.hostname);
    expect(server.tags).toEqual(config.tags);
  }

  expect(mockClient.countRequests('POST', '/servers')).toBe(3);
});
```

## Verifying Request Headers and Body

```typescript
test('should send correct authentication header', async () => {
  mockClient.mockResponse('GET', '/servers', {
    status: 200,
    body: { data: [], meta: { total: 0 } }
  });

  await sdk.servers.list();

  const lastRequest = mockClient.getLastRequest();

  expect(lastRequest?.headers?.['authorization']).toBeDefined();
  expect(lastRequest?.headers?.['content-type']).toBe('application/json');
});

test('should send correct request body', async () => {
  mockClient.mockResponse('POST', '/servers', {
    status: 201,
    body: { data: mockServer }
  });

  await sdk.servers.create({
    requestBody: {
      project: 'proj_123',
      plan: 'c3.small.x86',
      operating_system: 'ubuntu_22_04_x64_lts',
      hostname: 'test-server',
      site: 'sao-paulo'
    }
  });

  const lastRequest = mockClient.getLastRequest();
  const body = JSON.parse(lastRequest?.body as string);

  expect(body.hostname).toBe('test-server');
  expect(body.project).toBe('proj_123');
});
```

## Integrating with CI/CD

### GitHub Actions Example

```yaml
name: Run Integration Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install

      - name: Run integration tests
        run: bun test:integration

      - name: Generate coverage report
        run: bun test:coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
```

## Advanced Tips

### 1. Create Custom Helpers

```typescript
// tests/integration/helpers/server-helpers.ts
export async function createAndWaitForActive(
  sdk: Latitudesh,
  mockClient: MockHTTPClient,
  config: ServerCreateConfig
) {
  // Creation mock
  mockClient.mockResponse('POST', '/servers', {
    status: 201,
    body: { data: { ...mockServer, status: 'provisioning' } }
  });

  const server = await sdk.servers.create({ requestBody: config });

  // Polling mock until active
  mockClient.mockResponse('GET', `/servers/${server.id}`, {
    status: 200,
    body: { data: { ...server, status: 'active' } }
  });

  return await sdk.servers.get({ id: server.id });
}
```

### 2. Shared Fixtures

```typescript
// tests/integration/fixtures/servers.ts
export const productionServerConfig = {
  project: 'proj_prod',
  plan: 'c3.large.x86',
  operating_system: 'ubuntu_22_04_x64_lts',
  site: 'sao-paulo',
  tags: ['production']
};

export const developmentServerConfig = {
  ...productionServerConfig,
  plan: 'c3.small.x86',
  tags: ['development']
};
```

### 3. Custom Matchers

```typescript
expect.extend({
  toBeActiveServer(received) {
    const pass = received.status === 'active' && received.primary_ipv4;
    return {
      pass,
      message: () => `Expected server to be active with IP`
    };
  }
});

// Usage
expect(server).toBeActiveServer();
```

## Conclusion

These examples demonstrate common patterns and best practices for integration tests. Use them as a reference when writing your own tests.
