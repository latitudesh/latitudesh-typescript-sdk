/**
 * Integration tests for API Keys resource
 * Tests CRUD operations: list, create, update, rotate, delete
 */

import { describe, expect, test, beforeEach } from 'bun:test';
import { setupTest } from './helpers';
import { mockApiKey, mockApiKeyList } from './helpers/mock-data';

describe('API Keys - Core Operations', () => {
  let sdk, mockClient, reset;

  beforeEach(() => {
    const testClient = setupTest();
    sdk = testClient.sdk;
    mockClient = testClient.mockClient;
    reset = testClient.reset;
    reset();
  });

  describe('List Operations', () => {
    test('should list all API keys', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/api_keys', {
        status: 200,
        body: mockApiKeyList,
      });

      // Act
      const result = await sdk.apiKeys.list();

      // Assert
      expect(result.data).toBeDefined();
      expect(result.data.length).toBe(2);
      expect(result.data[0].id).toBe('apikey_test123');
      expect(result.data[0].attributes.name).toBe('Test API Key');
      expect(result.data[0].attributes.readOnly).toBe(false);
      expect(result.data[1].id).toBe('apikey_test456');
      expect(result.data[1].attributes.readOnly).toBe(true);
    });

    test('should handle empty API keys list', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/api_keys', {
        status: 200,
        body: {
          data: [],
        },
      });

      // Act
      const result = await sdk.apiKeys.list();

      // Assert
      expect(result.data).toBeDefined();
      expect(result.data.length).toBe(0);
    });

    test('should include user information in API keys', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/api_keys', {
        status: 200,
        body: mockApiKeyList,
      });

      // Act
      const result = await sdk.apiKeys.list();

      // Assert
      const apiKey = result.data[0];
      expect(apiKey.attributes.user).toBeDefined();
      expect(apiKey.attributes.user.id).toBe('user_test123');
      expect(apiKey.attributes.user.email).toBe('test@example.com');
    });
  });

  describe('Create Operations', () => {
    test('should create a new API key', async () => {
      // Arrange
      const newApiKey = {
        id: 'apikey_new123',
        type: 'api_keys',
        attributes: {
          name: 'New API Key',
          api_version: 'v1',
          token_last_slice: 'new12',
          read_only: false,
          allowed_ips: ['192.168.1.100'],
          last_used_at: null,
          user: {
            id: 'user_test123',
            email: 'test@example.com',
          },
          created_at: '2024-01-25T00:00:00Z',
          updated_at: '2024-01-25T00:00:00Z',
        },
      };

      mockClient.mockResponse('POST', '/api_keys', {
        status: 201,
        body: {
          data: newApiKey,
        },
      });

      // Act
      const result = await sdk.apiKeys.create({
        data: {
          type: 'api_keys',
          attributes: {
            name: 'New API Key',
            readOnly: false,
            allowedIps: ['192.168.1.100'],
          },
        },
      });

      // Assert
      expect(result.data.id).toBe('apikey_new123');
      expect(result.data.attributes.name).toBe('New API Key');
      expect(result.data.attributes.readOnly).toBe(false);
      expect(result.data.attributes.allowedIps).toEqual(['192.168.1.100']);
    });

    test('should create read-only API key', async () => {
      // Arrange
      const readOnlyKey = {
        id: 'apikey_readonly123',
        type: 'api_keys',
        attributes: {
          name: 'Read Only Key',
          api_version: 'v1',
          token_last_slice: 'ro123',
          read_only: true,
          allowed_ips: null,
          last_used_at: null,
          user: {
            id: 'user_test123',
            email: 'test@example.com',
          },
          created_at: '2024-01-25T00:00:00Z',
          updated_at: '2024-01-25T00:00:00Z',
        },
      };

      mockClient.mockResponse('POST', '/api_keys', {
        status: 201,
        body: {
          data: readOnlyKey,
        },
      });

      // Act
      const result = await sdk.apiKeys.create({
        data: {
          type: 'api_keys',
          attributes: {
            name: 'Read Only Key',
            readOnly: true,
          },
        },
      });

      // Assert
      expect(result.data.attributes.readOnly).toBe(true);
      expect(result.data.attributes.allowedIps).toBeNull();
    });

    test('should create API key with IP restrictions', async () => {
      // Arrange
      const restrictedKey = {
        id: 'apikey_restricted123',
        type: 'api_keys',
        attributes: {
          name: 'Restricted Key',
          api_version: 'v1',
          token_last_slice: 'res12',
          read_only: false,
          allowed_ips: ['10.0.0.0/8', '192.168.1.0/24'],
          last_used_at: null,
          user: {
            id: 'user_test123',
            email: 'test@example.com',
          },
          created_at: '2024-01-25T00:00:00Z',
          updated_at: '2024-01-25T00:00:00Z',
        },
      };

      mockClient.mockResponse('POST', '/api_keys', {
        status: 201,
        body: {
          data: restrictedKey,
        },
      });

      // Act
      const result = await sdk.apiKeys.create({
        data: {
          type: 'api_keys',
          attributes: {
            name: 'Restricted Key',
            allowedIps: ['10.0.0.0/8', '192.168.1.0/24'],
          },
        },
      });

      // Assert
      expect(result.data.attributes.allowedIps).toHaveLength(2);
      expect(result.data.attributes.allowedIps).toContain('10.0.0.0/8');
    });

    test('should handle validation error on create', async () => {
      // Arrange
      mockClient.mockResponse('POST', '/api_keys', {
        status: 422,
        body: {
          errors: [
            {
              status: '422',
              title: 'Validation Error',
              detail: 'Name is required',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.apiKeys.create({
          data: {
            type: 'api_keys',
            attributes: {
              name: '',
            },
          },
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('Update Operations', () => {
    test('should update API key settings without rotating token', async () => {
      // Arrange
      const updatedKey = {
        ...mockApiKey,
        attributes: {
          ...mockApiKey.attributes,
          name: 'Updated API Key Name',
          read_only: true,
          updated_at: '2024-01-26T00:00:00Z',
        },
      };

      mockClient.mockResponse('PATCH', '/api_keys/apikey_test123', {
        status: 200,
        body: {
          data: updatedKey,
        },
      });

      // Act: updateApiKey uses PATCH and doesn't rotate the token
      const result = await sdk.apiKeys.updateApiKey({
        apiKeyId: 'apikey_test123',
        updateApiKey: {
          data: {
            type: 'api_keys',
            attributes: {
              name: 'Updated API Key Name',
              readOnly: true,
            },
          },
        },
      });

      // Assert
      expect(result.data.attributes.name).toBe('Updated API Key Name');
      expect(result.data.attributes.readOnly).toBe(true);
      expect(result.data.attributes.tokenLastSlice).toBe('abc12'); // Token unchanged
    });

    test('should update allowed IPs', async () => {
      // Arrange
      const updatedKey = {
        ...mockApiKey,
        attributes: {
          ...mockApiKey.attributes,
          allowed_ips: ['10.10.10.10'],
          updated_at: '2024-01-26T00:00:00Z',
        },
      };

      mockClient.mockResponse('PATCH', '/api_keys/apikey_test123', {
        status: 200,
        body: {
          data: updatedKey,
        },
      });

      // Act
      const result = await sdk.apiKeys.updateApiKey({
        apiKeyId: 'apikey_test123',
        updateApiKey: {
          data: {
            type: 'api_keys',
            attributes: {
              allowedIps: ['10.10.10.10'],
            },
          },
        },
      });

      // Assert
      expect(result.data.attributes.allowedIps).toEqual(['10.10.10.10']);
    });

    test('should handle not found error on update', async () => {
      // Arrange
      mockClient.mockResponse('PATCH', '/api_keys/apikey_nonexistent', {
        status: 404,
        body: {
          errors: [
            {
              status: '404',
              title: 'Not Found',
              detail: 'API Key not found',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.apiKeys.updateApiKey({
          apiKeyId: 'apikey_nonexistent',
          updateApiKey: {
            data: {
              type: 'api_keys',
              attributes: {
                name: 'Updated Name',
              },
            },
          },
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('Rotate Operations', () => {
    test('should rotate API key token', async () => {
      // Arrange: Rotating generates a new token (new tokenLastSlice)
      const rotatedKey = {
        ...mockApiKey,
        attributes: {
          ...mockApiKey.attributes,
          token_last_slice: 'new99', // New token slice
          updated_at: '2024-01-26T00:00:00Z',
        },
      };

      mockClient.mockResponse('PUT', '/api_keys/apikey_test123', {
        status: 200,
        body: {
          data: rotatedKey,
        },
      });

      // Act: update (PUT) rotates the token
      const result = await sdk.apiKeys.update({
        apiKeyId: 'apikey_test123',
        updateApiKey: {
          data: {
            type: 'api_keys',
            attributes: {},
          },
        },
      });

      // Assert: Token was rotated
      expect(result.data.attributes.tokenLastSlice).toBe('new99');
      expect(result.data.attributes.tokenLastSlice).not.toBe('abc12');
    });

    test('should rotate and update settings simultaneously', async () => {
      // Arrange
      const rotatedKey = {
        ...mockApiKey,
        attributes: {
          ...mockApiKey.attributes,
          name: 'Rotated and Renamed',
          token_last_slice: 'rot99',
          read_only: true,
          updated_at: '2024-01-26T00:00:00Z',
        },
      };

      mockClient.mockResponse('PUT', '/api_keys/apikey_test123', {
        status: 200,
        body: {
          data: rotatedKey,
        },
      });

      // Act
      const result = await sdk.apiKeys.update({
        apiKeyId: 'apikey_test123',
        updateApiKey: {
          data: {
            type: 'api_keys',
            attributes: {
              name: 'Rotated and Renamed',
              readOnly: true,
            },
          },
        },
      });

      // Assert
      expect(result.data.attributes.name).toBe('Rotated and Renamed');
      expect(result.data.attributes.readOnly).toBe(true);
      expect(result.data.attributes.tokenLastSlice).toBe('rot99');
    });
  });

  describe('Delete Operations', () => {
    test('should delete an API key', async () => {
      // Arrange: SDK expects status 200, not 204
      mockClient.mockResponse('DELETE', '/api_keys/apikey_test123', {
        status: 200,
        body: null,
      });

      // Act
      await sdk.apiKeys.delete({ apiKeyId: 'apikey_test123' });

      // Assert: Verify request was made
      expect(mockClient.verifyRequest('DELETE', '/api_keys/apikey_test123')).toBe(true);
    });

    test('should handle not found error on delete', async () => {
      // Arrange
      mockClient.mockResponse('DELETE', '/api_keys/apikey_nonexistent', {
        status: 404,
        body: {
          errors: [
            {
              status: '404',
              title: 'Not Found',
              detail: 'API Key not found',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.apiKeys.delete({ apiKeyId: 'apikey_nonexistent' });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    test('should handle unauthorized error on delete', async () => {
      // Arrange
      mockClient.mockResponse('DELETE', '/api_keys/apikey_test123', {
        status: 403,
        body: {
          errors: [
            {
              status: '403',
              title: 'Forbidden',
              detail: 'You do not have permission to delete this API key',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.apiKeys.delete({ apiKeyId: 'apikey_test123' });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('API Key Security Features', () => {
    test('should verify last used timestamp is tracked', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/api_keys', {
        status: 200,
        body: mockApiKeyList,
      });

      // Act
      const result = await sdk.apiKeys.list();

      // Assert
      const usedKey = result.data[0];
      expect(usedKey.attributes.lastUsedAt).toBeDefined();
    });

    test('should show token last slice for identification', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/api_keys', {
        status: 200,
        body: mockApiKeyList,
      });

      // Act
      const result = await sdk.apiKeys.list();

      // Assert
      const key = result.data[0];
      expect(key.attributes.tokenLastSlice).toBeDefined();
      expect(key.attributes.tokenLastSlice).toBe('abc12');
    });

    test('should support IP allowlisting with CIDR notation', async () => {
      // Arrange
      const keyWithCIDR = {
        ...mockApiKey,
        attributes: {
          ...mockApiKey.attributes,
          allowed_ips: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16'],
        },
      };

      mockClient.mockResponse('GET', '/api_keys', {
        status: 200,
        body: {
          data: [keyWithCIDR],
        },
      });

      // Act
      const result = await sdk.apiKeys.list();

      // Assert
      const key = result.data[0];
      expect(key.attributes.allowedIps).toContain('10.0.0.0/8');
      expect(key.attributes.allowedIps).toContain('172.16.0.0/12');
      expect(key.attributes.allowedIps).toContain('192.168.0.0/16');
    });
  });
});
