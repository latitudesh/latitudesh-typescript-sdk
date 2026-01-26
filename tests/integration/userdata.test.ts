/**
 * Integration tests for User Data resource
 * Tests CRUD operations: list, create, retrieve, update, delete
 * Note: Focuses on non-deprecated methods (team-level operations)
 */

import { describe, expect, test, beforeEach } from 'bun:test';
import { setupTest } from './helpers';
import { mockUserData, mockUserDataList } from './helpers/mock-data';

describe('User Data - Core Operations', () => {
  let sdk, mockClient, reset;

  beforeEach(() => {
    const testClient = setupTest();
    sdk = testClient.sdk;
    mockClient = testClient.mockClient;
    reset = testClient.reset;
    reset();
  });

  describe('List Operations', () => {
    test('should list all user data scripts', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data', {
        status: 200,
        body: mockUserDataList,
      });

      // Act
      const result = await sdk.userData.list();

      // Assert
      expect(result.data).toBeDefined();
      expect(result.data.length).toBe(2);
      expect(result.data[0].data?.id).toBe('userdata_test123');
      expect(result.data[0].data?.type).toBe('user_data');
      expect(result.data[0].data?.attributes?.description).toBe('Test User Data Script');
    });

    test('should handle empty user data list', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data', {
        status: 200,
        body: {
          data: [],
          meta: {},
        },
      });

      // Act
      const result = await sdk.userData.list();

      // Assert
      expect(result.data).toBeDefined();
      expect(result.data.length).toBe(0);
    });

    test('should include script content', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data', {
        status: 200,
        body: mockUserDataList,
      });

      // Act
      const result = await sdk.userData.list();

      // Assert
      const userData = result.data[0];
      expect(userData.data?.attributes?.content).toBeDefined();
      expect(userData.data?.attributes?.content).toContain('#!/bin/bash');
      expect(userData.data?.attributes?.content).toContain('apt-get update');
    });

    test('should include associated project', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data', {
        status: 200,
        body: mockUserDataList,
      });

      // Act
      const result = await sdk.userData.list();

      // Assert
      const userData = result.data[0];
      expect(userData.data?.attributes?.project).toBeDefined();
      expect(userData.data?.attributes?.project?.id).toBe('proj_test123');
      expect(userData.data?.attributes?.project?.name).toBe('Test Project');
      expect(userData.data?.attributes?.project?.slug).toBe('test-project');
    });

    test('should include timestamps', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data', {
        status: 200,
        body: mockUserDataList,
      });

      // Act
      const result = await sdk.userData.list();

      // Assert
      const userData = result.data[0];
      expect(userData.data?.attributes?.createdAt).toBeDefined();
      expect(userData.data?.attributes?.updatedAt).toBeDefined();
      expect(userData.data?.attributes?.createdAt).toBe('2024-01-01T00:00:00Z');
    });
  });

  describe('Create Operations', () => {
    test('should create a new user data script', async () => {
      // Arrange
      const newUserData = {
        data: {
          id: 'userdata_new123',
          type: 'user_data',
          attributes: {
            description: 'New Setup Script',
            content: '#!/bin/bash\necho "New script"',
            project: {
              id: 'proj_test123',
              name: 'Test Project',
              slug: 'test-project',
            },
            created_at: '2024-01-03T00:00:00Z',
            updated_at: '2024-01-03T00:00:00Z',
          },
        },
        meta: {},
      };

      mockClient.mockResponse('POST', '/user_data', {
        status: 201,
        body: newUserData,
      });

      // Act
      const result = await sdk.userData.createNew({
        data: {
          type: 'user_data',
          attributes: {
            description: 'New Setup Script',
            content: '#!/bin/bash\necho "New script"',
          },
        },
      });

      // Assert
      expect(result.data.id).toBe('userdata_new123');
      expect(result.data.attributes.description).toBe('New Setup Script');
      expect(result.data.attributes.content).toContain('New script');
    });

    test('should create user data with minimal fields', async () => {
      // Arrange
      const minimalUserData = {
        data: {
          id: 'userdata_min123',
          type: 'user_data',
          attributes: {
            description: 'Minimal Script',
            content: '#!/bin/bash\necho "minimal"',
            created_at: '2024-01-03T00:00:00Z',
            updated_at: '2024-01-03T00:00:00Z',
          },
        },
        meta: {},
      };

      mockClient.mockResponse('POST', '/user_data', {
        status: 201,
        body: minimalUserData,
      });

      // Act
      const result = await sdk.userData.createNew({
        data: {
          type: 'user_data',
          attributes: {
            description: 'Minimal Script',
            content: '#!/bin/bash\necho "minimal"',
          },
        },
      });

      // Assert
      expect(result.data.id).toBe('userdata_min123');
      expect(result.data.attributes.description).toBe('Minimal Script');
    });

    test('should handle validation error on create', async () => {
      // Arrange
      mockClient.mockResponse('POST', '/user_data', {
        status: 422,
        body: {
          errors: [
            {
              status: '422',
              title: 'Validation Error',
              detail: 'Content is required',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.userData.createNew({
          data: {
            type: 'user_data',
            attributes: {
              description: 'Invalid',
              content: '',
            },
          },
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('Retrieve Operations', () => {
    test('should retrieve a specific user data by ID', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data/userdata_test123', {
        status: 200,
        body: mockUserData,
      });

      // Act
      const result = await sdk.userData.retrieve({
        userDataId: 'userdata_test123',
      });

      // Assert
      expect(result.data.id).toBe('userdata_test123');
      expect(result.data.attributes.description).toBe('Test User Data Script');
      expect(result.data.attributes.content).toBeDefined();
    });

    test('should include complete script content', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data/userdata_test123', {
        status: 200,
        body: mockUserData,
      });

      // Act
      const result = await sdk.userData.retrieve({
        userDataId: 'userdata_test123',
      });

      // Assert
      const content = result.data.attributes.content;
      expect(content).toContain('#!/bin/bash');
      expect(content).toContain('echo "Hello World"');
      expect(content).toContain('apt-get update');
      expect(content).toContain('apt-get install -y nginx');
    });

    test('should handle not found error', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data/userdata_nonexistent', {
        status: 404,
        body: {
          errors: [
            {
              status: '404',
              title: 'Not Found',
              detail: 'User Data not found',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.userData.retrieve({
          userDataId: 'userdata_nonexistent',
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('Update Operations', () => {
    test('should update user data description', async () => {
      // Arrange
      const updatedUserData = {
        data: {
          id: 'userdata_test123',
          type: 'user_data',
          attributes: {
            description: 'Updated Description',
            content: '#!/bin/bash\necho "Hello World"\napt-get update\napt-get install -y nginx',
            project: {
              id: 'proj_test123',
              name: 'Test Project',
              slug: 'test-project',
            },
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-05T00:00:00Z',
          },
        },
        meta: {},
      };

      mockClient.mockResponse('PATCH', '/user_data/userdata_test123', {
        status: 200,
        body: updatedUserData,
      });

      // Act
      const result = await sdk.userData.update({
        userDataId: 'userdata_test123',
        requestBody: {
          data: {
            id: 'userdata_test123',
            type: 'user_data',
            attributes: {
              description: 'Updated Description',
            },
          },
        },
      });

      // Assert
      expect(result.data.id).toBe('userdata_test123');
      expect(result.data.attributes.description).toBe('Updated Description');
    });

    test('should update user data content', async () => {
      // Arrange
      const updatedUserData = {
        data: {
          id: 'userdata_test123',
          type: 'user_data',
          attributes: {
            description: 'Test User Data Script',
            content: '#!/bin/bash\necho "Updated script"\ndocker --version',
            project: {
              id: 'proj_test123',
              name: 'Test Project',
              slug: 'test-project',
            },
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-05T00:00:00Z',
          },
        },
        meta: {},
      };

      mockClient.mockResponse('PATCH', '/user_data/userdata_test123', {
        status: 200,
        body: updatedUserData,
      });

      // Act
      const result = await sdk.userData.update({
        userDataId: 'userdata_test123',
        requestBody: {
          data: {
            id: 'userdata_test123',
            type: 'user_data',
            attributes: {
              content: '#!/bin/bash\necho "Updated script"\ndocker --version',
            },
          },
        },
      });

      // Assert
      expect(result.data.attributes.content).toContain('Updated script');
      expect(result.data.attributes.content).toContain('docker --version');
    });

    test('should update both description and content', async () => {
      // Arrange
      const updatedUserData = {
        data: {
          id: 'userdata_test123',
          type: 'user_data',
          attributes: {
            description: 'Complete Update',
            content: '#!/bin/bash\necho "Both updated"',
            project: {
              id: 'proj_test123',
              name: 'Test Project',
              slug: 'test-project',
            },
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-05T00:00:00Z',
          },
        },
        meta: {},
      };

      mockClient.mockResponse('PATCH', '/user_data/userdata_test123', {
        status: 200,
        body: updatedUserData,
      });

      // Act
      const result = await sdk.userData.update({
        userDataId: 'userdata_test123',
        requestBody: {
          data: {
            id: 'userdata_test123',
            type: 'user_data',
            attributes: {
              description: 'Complete Update',
              content: '#!/bin/bash\necho "Both updated"',
            },
          },
        },
      });

      // Assert
      expect(result.data.attributes.description).toBe('Complete Update');
      expect(result.data.attributes.content).toContain('Both updated');
    });

    test('should handle not found error on update', async () => {
      // Arrange
      mockClient.mockResponse('PATCH', '/user_data/userdata_nonexistent', {
        status: 404,
        body: {
          errors: [
            {
              status: '404',
              title: 'Not Found',
              detail: 'User Data not found',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.userData.update({
          userDataId: 'userdata_nonexistent',
          requestBody: {
            data: {
              id: 'userdata_nonexistent',
              type: 'user_data',
              attributes: {
                description: 'Updated',
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

  describe('Delete Operations', () => {
    test('should delete a user data script', async () => {
      // Arrange
      mockClient.mockResponse('DELETE', '/user_data/userdata_test123', {
        status: 204,
        body: null,
      });

      // Act
      await sdk.userData.delete({ userDataId: 'userdata_test123' });

      // Assert: Verify request was made
      expect(mockClient.verifyRequest('DELETE', '/user_data/userdata_test123')).toBe(true);
    });

    test('should handle not found error on delete', async () => {
      // Arrange
      mockClient.mockResponse('DELETE', '/user_data/userdata_nonexistent', {
        status: 404,
        body: {
          errors: [
            {
              status: '404',
              title: 'Not Found',
              detail: 'User Data not found',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.userData.delete({ userDataId: 'userdata_nonexistent' });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    test('should handle forbidden error when script is in use', async () => {
      // Arrange
      mockClient.mockResponse('DELETE', '/user_data/userdata_test123', {
        status: 403,
        body: {
          errors: [
            {
              status: '403',
              title: 'Forbidden',
              detail: 'Cannot delete user data that is currently in use by servers',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.userData.delete({ userDataId: 'userdata_test123' });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('Script Content Validation', () => {
    test('should handle bash scripts', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data', {
        status: 200,
        body: mockUserDataList,
      });

      // Act
      const result = await sdk.userData.list();

      // Assert
      const bashScript = result.data[0];
      expect(bashScript.data?.attributes?.content).toContain('#!/bin/bash');
    });

    test('should handle multi-line scripts', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data', {
        status: 200,
        body: mockUserDataList,
      });

      // Act
      const result = await sdk.userData.list();

      // Assert
      const script = result.data[0];
      const content = script.data?.attributes?.content || '';
      const lines = content.split('\n');
      expect(lines.length).toBeGreaterThan(1);
      expect(lines[0]).toBe('#!/bin/bash');
    });

    test('should handle scripts with special characters', async () => {
      // Arrange
      const specialScript = {
        data: {
          id: 'userdata_special',
          type: 'user_data',
          attributes: {
            description: 'Special Characters Script',
            content: '#!/bin/bash\necho "Test with $VAR and quotes"',
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z',
          },
        },
        meta: {},
      };

      mockClient.mockResponse('GET', '/user_data/userdata_special', {
        status: 200,
        body: specialScript,
      });

      // Act
      const result = await sdk.userData.retrieve({
        userDataId: 'userdata_special',
      });

      // Assert
      expect(result.data.attributes.content).toContain('$VAR');
      expect(result.data.attributes.content).toContain('quotes');
    });
  });

  describe('Project Association', () => {
    test('should show different projects for different scripts', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data', {
        status: 200,
        body: mockUserDataList,
      });

      // Act
      const result = await sdk.userData.list();

      // Assert
      expect(result.data[0].data?.attributes?.project?.id).toBe('proj_test123');
      expect(result.data[1].data?.attributes?.project?.id).toBe('proj_test456');
    });

    test('should include project slug', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/user_data', {
        status: 200,
        body: mockUserDataList,
      });

      // Act
      const result = await sdk.userData.list();

      // Assert
      const userData = result.data[0];
      expect(userData.data?.attributes?.project?.slug).toBe('test-project');
    });
  });
});
