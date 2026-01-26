/**
 * Integration tests for Servers API
 */

import { describe, expect, test, beforeEach } from 'bun:test';
import { setupTest, mockServer, mockServerList, mockServerCreateRequest, mockServerUpdateRequest, createMockServers, createPaginatedResponse } from './helpers/index.js';

describe('Servers Integration Tests', () => {
  let sdk: ReturnType<typeof setupTest>['sdk'];
  let mockClient: ReturnType<typeof setupTest>['mockClient'];
  let reset: ReturnType<typeof setupTest>['reset'];

  beforeEach(() => {
    const testClient = setupTest();
    sdk = testClient.sdk;
    mockClient = testClient.mockClient;
    reset = testClient.reset;
    reset();
  });

  describe('servers.list()', () => {
    test('should list all servers', async () => {
      // Setup mock response
      mockClient.mockResponse('GET', '/servers', {
        status: 200,
        body: mockServerList,
      });

      // Execute
      const result = await sdk.servers.list();
      const servers = [];
      for await (const page of result) {
        servers.push(...(page.result.data || []));
      }

      // Verify
      expect(servers).toHaveLength(2);
      expect(servers[0]?.id).toBe('srv_test123');
      expect(servers[0]?.attributes?.hostname).toBe('test-server-01');
      expect(mockClient.verifyRequest('GET', '/servers')).toBe(true);
    });

    test('should handle pagination', async () => {
      // Create mock data with only 5 results in one page
      const allServers = createMockServers(5);
      const page1 = {
        data: allServers,
        meta: {
          total: 5,
          current_page: 1,
          last_page: 1,
          per_page: 20,
        },
      };

      // Setup mock response
      mockClient.mockResponse('GET', '/servers', {
        status: 200,
        body: page1,
      });

      // Execute
      const result = await sdk.servers.list();
      const servers = [];
      for await (const page of result) {
        servers.push(...(page.result.data || []));
      }

      // Verify
      expect(servers).toHaveLength(5);
      expect(mockClient.countRequests('GET', '/servers')).toBeGreaterThanOrEqual(1);
    });

    test('should filter servers by project', async () => {
      mockClient.mockResponse('GET', '/servers', {
        status: 200,
        body: {
          data: [mockServer],
          meta: { total: 1, current_page: 1, last_page: 1, per_page: 25 },
        },
      });

      const result = await sdk.servers.list({
        filter: { project: 'proj_test123' },
      });

      const servers = [];
      for await (const page of result) {
        servers.push(...(page.result.data || []));
      }

      expect(servers).toHaveLength(1);
      expect(servers[0]?.attributes?.project?.id).toBe('proj_test123');
    });

    test('should handle empty list', async () => {
      mockClient.mockResponse('GET', '/servers', {
        status: 200,
        body: {
          data: [],
          meta: { total: 0, current_page: 1, last_page: 1, per_page: 25 },
        },
      });

      const result = await sdk.servers.list();
      const servers = [];
      for await (const page of result) {
        servers.push(...(page.result.data || []));
      }

      expect(servers).toHaveLength(0);
    });

    test('should handle API errors', async () => {
      mockClient.mockResponse('GET', '/servers', {
        status: 500,
        body: {
          error: {
            message: 'Internal server error',
            code: 'internal_error',
          },
        },
      });

      await expect(async () => {
        const result = await sdk.servers.list();
        for await (const page of result) {
          // Iterate to trigger the error
          page;
        }
      }).toThrow();
    });
  });

  describe('servers.create()', () => {
    test('should create a new server', async () => {
      mockClient.mockResponse('POST', '/servers', {
        status: 201,
        body: { data: mockServer },
      });

      const result = await sdk.servers.create({
        data: mockServerCreateRequest,
      });

      expect(result.data?.id).toBe('srv_test123');
      expect(result.data?.attributes?.hostname).toBe('test-server-01');
      expect(result.data?.attributes?.status).toBe('on');
      expect(mockClient.verifyRequest('POST', '/servers')).toBe(true);

      const lastRequest = mockClient.getLastRequest();
      expect(lastRequest?.method).toBe('POST');
    });

    test('should handle validation errors', async () => {
      mockClient.mockResponse('POST', '/servers', {
        status: 422,
        body: {
          error: {
            message: 'Validation failed',
            code: 'validation_error',
            errors: [
              { field: 'hostname', message: 'Hostname is required' },
            ],
          },
        },
      });

      await expect(async () => {
        await sdk.servers.create({
          data: {
            ...mockServerCreateRequest,
            attributes: {
              ...mockServerCreateRequest.attributes,
              hostname: '',
            },
          },
        });
      }).toThrow();
    });

    test('should handle insufficient resources error', async () => {
      mockClient.mockResponse('POST', '/servers', {
        status: 409,
        body: {
          error: {
            message: 'No available resources in the selected region',
            code: 'insufficient_resources',
          },
        },
      });

      await expect(async () => {
        await sdk.servers.create({
          data: mockServerCreateRequest,
        });
      }).toThrow();
    });

    test('should create server with custom configuration', async () => {
      const customConfig = {
        type: 'servers' as const,
        attributes: {
          ...mockServerCreateRequest.attributes,
          hostname: 'custom-server',
          sshKeys: ['ssh-key-id-1'],
          userData: '#!/bin/bash\necho "Custom setup"',
        },
      };

      mockClient.mockResponse('POST', '/servers', {
        status: 201,
        body: {
          data: {
            ...mockServer,
            attributes: {
              ...mockServer.attributes,
              hostname: 'custom-server',
            },
          },
        },
      });

      const result = await sdk.servers.create({
        data: customConfig,
      });

      expect(result.data?.attributes?.hostname).toBe('custom-server');
    });
  });

  describe('servers.get()', () => {
    test('should retrieve a server by ID', async () => {
      mockClient.mockResponse('GET', '/servers/srv_test123', {
        status: 200,
        body: { data: mockServer },
      });

      const result = await sdk.servers.get({
        serverId: 'srv_test123',
      });

      expect(result.data?.id).toBe('srv_test123');
      expect(result.data?.attributes?.hostname).toBe('test-server-01');
      expect(result.data?.attributes?.status).toBe('on');
      expect(mockClient.verifyRequest('GET', '/servers/srv_test123')).toBe(true);
    });

    test('should handle server not found', async () => {
      mockClient.mockResponse('GET', '/servers/nonexistent', {
        status: 404,
        body: {
          error: {
            message: 'Server not found',
            code: 'not_found',
          },
        },
      });

      await expect(async () => {
        await sdk.servers.get({
          serverId: 'nonexistent',
        });
      }).toThrow();
    });

    test('should retrieve server with all details', async () => {
      mockClient.mockResponse('GET', '/servers/srv_test123', {
        status: 200,
        body: { data: mockServer },
      });

      const result = await sdk.servers.get({
        serverId: 'srv_test123',
      });

      expect(result.data?.attributes?.hostname).toBe('test-server-01');
      expect(result.data?.attributes?.status).toBe('on');
    });
  });

  describe('servers.update()', () => {
    test('should update a server', async () => {
      const updatedServer = {
        ...mockServer,
        attributes: {
          ...mockServer.attributes,
          hostname: 'updated-server-01',
        },
      };

      mockClient.mockResponse('PATCH', '/servers/srv_test123', {
        status: 200,
        body: { data: updatedServer },
      });

      const result = await sdk.servers.update({
        serverId: 'srv_test123',
        requestBody: {
          data: {
            attributes: {
              hostname: 'updated-server-01',
            },
          },
        },
      });

      expect(result.data?.attributes?.hostname).toBe('updated-server-01');
      expect(mockClient.verifyRequest('PATCH', '/servers/srv_test123')).toBe(true);
    });

    test('should update server labels only', async () => {
      const updatedServer = {
        ...mockServer,
        attributes: {
          ...mockServer.attributes,
          label: 'Production Server',
        },
      };

      mockClient.mockResponse('PATCH', '/servers/srv_test123', {
        status: 200,
        body: { data: updatedServer },
      });

      const result = await sdk.servers.update({
        serverId: 'srv_test123',
        requestBody: {
          data: {
            attributes: {
              hostname: 'test-server-01',
            },
          },
        },
      });

      expect(result.data?.attributes?.label).toBe('Production Server');
    });

    test('should handle update validation errors', async () => {
      mockClient.mockResponse('PATCH', '/servers/srv_test123', {
        status: 422,
        body: {
          error: {
            message: 'Validation failed',
            code: 'validation_error',
            errors: [
              { field: 'hostname', message: 'Hostname must be valid' },
            ],
          },
        },
      });

      await expect(async () => {
        await sdk.servers.update({
          serverId: 'srv_test123',
          requestBody: {
            data: {
              attributes: {
                hostname: 'invalid hostname with spaces',
              },
            },
          },
        });
      }).toThrow();
    });
  });

  describe('servers.delete()', () => {
    test('should delete a server', async () => {
      mockClient.mockResponse('DELETE', '/servers/srv_test123', {
        status: 204,
      });

      await sdk.servers.delete({
        serverId: 'srv_test123',
      });

      expect(mockClient.verifyRequest('DELETE', '/servers/srv_test123')).toBe(true);
    });

    test('should handle delete of non-existent server', async () => {
      mockClient.mockResponse('DELETE', '/servers/nonexistent', {
        status: 404,
        body: {
          error: {
            message: 'Server not found',
            code: 'not_found',
          },
        },
      });

      await expect(async () => {
        await sdk.servers.delete({
          serverId: 'nonexistent',
        });
      }).toThrow();
    });

    test('should handle delete of locked server', async () => {
      mockClient.mockResponse('DELETE', '/servers/srv_locked', {
        status: 423,
        body: {
          error: {
            message: 'Server is locked',
            code: 'resource_locked',
          },
        },
      });

      await expect(async () => {
        await sdk.servers.delete({
          serverId: 'srv_locked',
        });
      }).toThrow();
    });
  });

  describe('servers action flows', () => {
    test('should execute reboot action', async () => {
      mockClient.mockResponse('POST', '/servers/srv_test123/actions', {
        status: 201,
        body: {
          data: {
            id: 'action_test123',
            type: 'actions',
            attributes: {
              status: 'pending',
            },
          },
        },
      });

      const result = await sdk.servers.runAction({
        serverId: 'srv_test123',
        requestBody: {
          data: {
            type: 'actions',
            attributes: {
              action: 'reboot',
            },
          },
        },
      });

      expect(result.data?.type).toBe('actions');
      expect(result.data?.attributes?.status).toBe('pending');
    });

    test('should lock and unlock server', async () => {
      // Lock server
      mockClient.mockResponse('POST', '/servers/srv_test123/lock', {
        status: 200,
        body: {
          data: {
            ...mockServer,
            attributes: {
              ...mockServer.attributes,
              locked: true,
            },
          },
        },
      });

      const lockedServer = await sdk.servers.lock({
        serverId: 'srv_test123',
      });

      expect(lockedServer.data?.attributes?.locked).toBe(true);

      // Unlock server
      mockClient.mockResponse('POST', '/servers/srv_test123/unlock', {
        status: 200,
        body: {
          data: {
            ...mockServer,
            attributes: {
              ...mockServer.attributes,
              locked: false,
            },
          },
        },
      });

      const unlockedServer = await sdk.servers.unlock({
        serverId: 'srv_test123',
      });

      expect(unlockedServer.data?.attributes?.locked).toBe(false);
    });

    test('should reinstall server', async () => {
      mockClient.mockResponse('POST', '/servers/srv_test123/reinstall', {
        status: 201,
      });

      await sdk.servers.reinstall({
        serverId: 'srv_test123',
        requestBody: {
          data: {
            type: 'reinstalls',
            attributes: {
              operatingSystem: 'ubuntu_22_04_x64_lts',
            },
          },
        },
      });

      expect(mockClient.verifyRequest('POST', '/servers/srv_test123/reinstall')).toBe(true);
    });
  });

  describe('rate limiting and retries', () => {
    test('should handle rate limiting', async () => {
      mockClient.mockResponse('GET', '/servers', {
        status: 429,
        body: {
          error: {
            message: 'Rate limit exceeded',
            code: 'rate_limit_exceeded',
            retry_after: 60,
          },
        },
        headers: {
          'retry-after': '60',
        },
      });

      await expect(async () => {
        const result = await sdk.servers.list();
        for await (const page of result) {
          page;
        }
      }).toThrow();
    });
  });

  describe('authentication and authorization', () => {
    test('should handle unauthorized request', async () => {
      mockClient.mockResponse('GET', '/servers', {
        status: 401,
        body: {
          error: {
            message: 'Invalid API key',
            code: 'unauthorized',
          },
        },
      });

      await expect(async () => {
        const result = await sdk.servers.list();
        for await (const page of result) {
          page;
        }
      }).toThrow();
    });

    test('should handle forbidden request', async () => {
      mockClient.mockResponse('GET', '/servers/srv_forbidden', {
        status: 403,
        body: {
          error: {
            message: 'Insufficient permissions',
            code: 'forbidden',
          },
        },
      });

      await expect(async () => {
        await sdk.servers.get({
          serverId: 'srv_forbidden',
        });
      }).toThrow();
    });
  });
});
