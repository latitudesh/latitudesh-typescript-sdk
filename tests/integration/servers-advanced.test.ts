/**
 * Advanced integration tests for Servers API
 *
 * These tests demonstrate more complex scenarios and workflows
 */

import { describe, expect, test, beforeEach } from 'bun:test';
import { setupTest, mockServer, mockIPMISession, mockOutOfBandConnection, mockActionResponse, mockServerDeployConfig } from './helpers/index.js';

describe('Servers Advanced Integration Tests', () => {
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

  describe('server provisioning workflow', () => {
    test('should complete full provisioning workflow', async () => {
      // Step 1: Create server
      mockClient.mockResponse('POST', '/servers', {
        status: 201,
        body: {
          data: {
            ...mockServer,
            attributes: {
              ...mockServer.attributes,
              status: 'deploying',
            },
          },
        },
      });

      const newServer = await sdk.servers.create({
        data: {
          type: 'servers',
          attributes: {
            project: 'proj_test123',
            plan: 'c3-small-x86',
            operatingSystem: 'ubuntu_22_04_x64_lts',
            hostname: 'new-server',
            site: 'SAO',
          },
        },
      });

      expect(newServer.data?.attributes?.status).toBe('deploying');

      // Step 2: Poll server until active
      mockClient.mockResponse('GET', '/servers/srv_test123', {
        status: 200,
        body: {
          data: {
            ...mockServer,
            attributes: {
              ...mockServer.attributes,
              status: 'on',
            },
          },
        },
      });

      const activeServer = await sdk.servers.get({
        serverId: newServer.data?.id || 'srv_test123',
      });

      expect(activeServer.data?.attributes?.status).toBe('on');

      // Step 3: Configure server
      mockClient.mockResponse('PATCH', '/servers/srv_test123', {
        status: 200,
        body: {
          data: {
            ...mockServer,
            attributes: {
              ...mockServer.attributes,
              status: 'on',
            },
          },
        },
      });

      const configuredServer = await sdk.servers.update({
        serverId: newServer.data?.id || 'srv_test123',
        requestBody: {
          data: {
            attributes: {
              hostname: 'new-server',
            },
          },
        },
      });

      expect(configuredServer.data?.attributes?.status).toBe('on');
    });
  });

  describe('server deploy configuration', () => {
    test('should get deploy configuration', async () => {
      mockClient.mockResponse('GET', '/servers/srv_test123/deploy_config', {
        status: 200,
        body: { data: mockServerDeployConfig },
      });

      const config = await sdk.servers.getDeployConfig({
        serverId: 'srv_test123',
      });

      expect(config.data?.attributes?.raid).toBe('raid1');
      expect(config.data?.attributes?.sshKeys).toHaveLength(1);
    });

    test('should update deploy configuration', async () => {
      const updatedConfig = {
        ...mockServerDeployConfig,
        attributes: {
          ...mockServerDeployConfig.attributes,
          raid: 'raid5',
          userData: '#!/bin/bash\necho "Updated"',
        },
      };

      mockClient.mockResponse('PATCH', '/servers/srv_test123/deploy_config', {
        status: 200,
        body: { data: updatedConfig },
      });

      const result = await sdk.servers.updateDeployConfig({
        serverId: 'srv_test123',
        requestBody: {
          type: 'deploy_config',
          attributes: {
            raid: 'raid-1',
            userData: '#!/bin/bash\necho "Updated"',
          },
        },
      });

      expect(result.data?.attributes?.raid).toBe('raid5');
    });
  });

  describe('server remote access', () => {
    test('should create IPMI session', async () => {
      mockClient.mockResponse('POST', '/servers/srv_test123/remote_access', {
        status: 201,
        body: {
          data: {
            id: 'ipmi_session_test123',
            type: 'ipmi_sessions',
            attributes: {
              ipmi_address: '10.0.0.1',
              ipmi_username: 'admin',
              ipmi_password: 'test-password',
            },
          },
        },
      });

      const session = await sdk.servers.createIpmiSession({
        serverId: 'srv_test123',
      });

      expect(session.data?.attributes?.ipmiAddress).toBeDefined();
      expect(session.data?.attributes?.ipmiUsername).toBe('admin');
      expect(mockClient.verifyRequest('POST', '/servers/srv_test123/remote_access')).toBe(true);
    });

    test('should get out_of_band information', async () => {
      mockClient.mockResponse('GET', '/servers/srv_test123/out_of_band', {
        status: 200,
        body: {
          data: {
            id: 'oob_test123',
            type: 'out_of_band',
            attributes: {
              username: 'admin',
            },
          },
        },
      });

      const oob = await sdk.servers.getOutOfBand({
        serverId: 'srv_test123',
      });

      expect(oob.data?.attributes?.username).toBe('admin');
    });

    test('should start out_of_band connection', async () => {
      mockClient.mockResponse('POST', '/servers/srv_test123/out_of_band_connection', {
        status: 201,
        body: {
          data: {
            id: 'oob_conn_test123',
            type: 'out_of_band',
            attributes: {
              username: 'admin',
            },
          },
        },
      });

      const connection = await sdk.servers.startOutOfBandConnection({
        serverId: 'srv_test123',
        requestBody: {
          data: {
            type: 'out_of_band',
          },
        },
      });

      expect(connection.data?.attributes?.username).toBeDefined();
    });
  });

  describe('server rescue mode', () => {
    test('should enter and exit rescue mode', async () => {
      // Enter rescue mode
      mockClient.mockResponse('POST', '/servers/srv_test123/rescue_mode', {
        status: 201,
        body: {
          meta: {},
        },
      });

      const rescueServer = await sdk.servers.startRescueMode({
        serverId: 'srv_test123',
      });

      expect(rescueServer.meta).toBeDefined();

      // Exit rescue mode
      mockClient.mockResponse('POST', '/servers/srv_test123/exit_rescue_mode', {
        status: 200,
        body: {
          meta: {},
        },
      });

      const normalServer = await sdk.servers.exitRescueMode({
        serverId: 'srv_test123',
      });

      expect(normalServer.meta).toBeDefined();
    });
  });

  describe('server lifecycle management', () => {
    test('should schedule and unschedule deletion', async () => {
      // Schedule deletion
      mockClient.mockResponse('POST', '/servers/srv_test123/schedule_deletion', {
        status: 201,
        body: {
          data: {
            id: 'schedule_test123',
            type: 'schedule_deletion',
            attributes: {
              scheduled_deletion_at: '2024-12-31T23:59:59Z',
            },
          },
        },
      });

      const scheduledServer = await sdk.servers.scheduleDeletion({
        serverId: 'srv_test123',
      });

      expect(scheduledServer.data?.attributes?.scheduledDeletionAt).toBe('2024-12-31T23:59:59Z');

      // Unschedule deletion
      mockClient.mockResponse('DELETE', '/servers/srv_test123/schedule_deletion', {
        status: 204,
      });

      await sdk.servers.unscheduleDeletion({
        serverId: 'srv_test123',
      });

      expect(mockClient.verifyRequest('DELETE', '/servers/srv_test123/schedule_deletion')).toBe(true);
    });
  });

  describe('server actions', () => {
    test('should execute power cycle action', async () => {
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

      const action = await sdk.servers.runAction({
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

      expect(action.data?.type).toBe('actions');
      expect(action.data?.attributes?.status).toBe('pending');
    });

    test('should execute shutdown action with force', async () => {
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

      const action = await sdk.servers.runAction({
        serverId: 'srv_test123',
        requestBody: {
          data: {
            type: 'actions',
            attributes: {
              action: 'power_off',
            },
          },
        },
      });

      expect(action.data?.type).toBe('actions');
      expect(action.data?.attributes?.status).toBe('pending');
    });
  });

  describe('concurrent operations', () => {
    test('should handle multiple concurrent requests', async () => {
      // Mock responses for multiple servers
      mockClient.mockResponse('GET', '/servers/srv_1', {
        status: 200,
        body: { data: { ...mockServer, id: 'srv_1' } },
      });

      mockClient.mockResponse('GET', '/servers/srv_2', {
        status: 200,
        body: { data: { ...mockServer, id: 'srv_2' } },
      });

      mockClient.mockResponse('GET', '/servers/srv_3', {
        status: 200,
        body: { data: { ...mockServer, id: 'srv_3' } },
      });

      // Execute concurrent requests
      const [server1, server2, server3] = await Promise.all([
        sdk.servers.get({ serverId: 'srv_1' }),
        sdk.servers.get({ serverId: 'srv_2' }),
        sdk.servers.get({ serverId: 'srv_3' }),
      ]);

      expect(server1.data?.id).toBe('srv_1');
      expect(server2.data?.id).toBe('srv_2');
      expect(server3.data?.id).toBe('srv_3');
      expect(mockClient.countRequests('GET')).toBe(3);
    });
  });

  describe('error recovery scenarios', () => {
    test('should handle transient network errors', async () => {
      // First request fails
      mockClient.mockResponse('GET', '/servers/srv_test123', {
        status: 503,
        body: {
          error: {
            message: 'Service temporarily unavailable',
            code: 'service_unavailable',
          },
        },
      });

      // Second request succeeds
      mockClient.mockResponse('GET', '/servers/srv_test123', {
        status: 200,
        body: { data: mockServer },
      });

      // First attempt should fail
      await expect(async () => {
        await sdk.servers.get({ serverId: 'srv_test123' });
      }).toThrow();

      // Retry should succeed
      const server = await sdk.servers.get({ serverId: 'srv_test123' });
      expect(server.data?.id).toBe('srv_test123');
    });

    test('should handle conflict errors gracefully', async () => {
      mockClient.mockResponse('POST', '/servers/srv_test123/actions', {
        status: 409,
        body: {
          error: {
            message: 'Server is already performing an action',
            code: 'conflict',
          },
        },
      });

      await expect(async () => {
        await sdk.servers.runAction({
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
      }).toThrow();

      expect(mockClient.verifyRequest('POST', '/servers/srv_test123/actions')).toBe(true);
    });
  });

  describe('edge cases', () => {
    test('should handle server with minimal data', async () => {
      const minimalServer = {
        id: 'srv_minimal',
        type: 'servers',
        attributes: {
          hostname: 'minimal',
          status: 'on',
        },
      };

      mockClient.mockResponse('GET', '/servers/srv_minimal', {
        status: 200,
        body: { data: minimalServer },
      });

      const server = await sdk.servers.get({ serverId: 'srv_minimal' });
      expect(server.data?.id).toBe('srv_minimal');
      expect(server.data?.attributes?.hostname).toBe('minimal');
    });

    test('should handle server with all optional fields', async () => {
      const fullServer = {
        ...mockServer,
      };

      mockClient.mockResponse('GET', '/servers/srv_full', {
        status: 200,
        body: { data: fullServer },
      });

      const server = await sdk.servers.get({ serverId: 'srv_full' });
      expect(server.data?.id).toBeDefined();
      expect(server.data?.attributes?.hostname).toBeDefined();
    });

    test('should handle large hostname', async () => {
      const longHostname = 'a'.repeat(63); // Max DNS label length

      mockClient.mockResponse('POST', '/servers', {
        status: 201,
        body: {
          data: {
            ...mockServer,
            attributes: {
              ...mockServer.attributes,
              hostname: longHostname,
            },
          },
        },
      });

      const server = await sdk.servers.create({
        data: {
          type: 'servers',
          attributes: {
            project: 'proj_test123',
            plan: 'c3-small-x86',
            operatingSystem: 'ubuntu_22_04_x64_lts',
            hostname: longHostname,
            site: 'SAO',
          },
        },
      });

      expect(server.data?.attributes?.hostname).toBe(longHostname);
      expect(server.data?.attributes?.hostname).toHaveLength(63);
    });
  });
});
