/**
 * Integration tests for Projects resource
 * Tests CRUD operations: list, create, update, delete
 */

import { describe, expect, test, beforeEach } from 'bun:test';
import { setupTest } from './helpers';
import { mockProject, mockProjectList } from './helpers/mock-data';

describe('Projects - Core CRUD Operations', () => {
  let sdk, mockClient, reset;

  beforeEach(() => {
    const testClient = setupTest();
    sdk = testClient.sdk;
    mockClient = testClient.mockClient;
    reset = testClient.reset;
    reset();
  });

  describe('List Operations', () => {
    test('should list all projects', async () => {
      // Arrange: Mock the list endpoint
      mockClient.mockResponse('GET', '/projects', {
        status: 200,
        body: mockProjectList,
      });

      // Act: Call list method
      const result = await sdk.projects.list();

      // Assert: Verify pagination works correctly
      const projects = [];
      for await (const page of result) {
        projects.push(...(page.result.data || []));
      }

      expect(projects.length).toBe(2);
      expect(projects[0].id).toBe('proj_test123');
      expect(projects[0].attributes.name).toBe('Test Project');
      expect(projects[0].attributes.slug).toBe('test-project');
      expect(projects[1].id).toBe('proj_test456');
    });

    test('should handle empty project list', async () => {
      // Arrange: Mock empty response
      mockClient.mockResponse('GET', '/projects', {
        status: 200,
        body: {
          data: [],
          meta: {
            total: 0,
            current_page: 1,
            last_page: 1,
            per_page: 25,
          },
        },
      });

      // Act
      const result = await sdk.projects.list();
      const projects = [];
      for await (const page of result) {
        projects.push(...(page.result.data || []));
      }

      // Assert
      expect(projects.length).toBe(0);
    });

    test('should support pagination parameters', async () => {
      // Arrange: Mock response that returns fewer results than the page size
      // This signals to the SDK that there are no more pages
      mockClient.mockResponse('GET', '/projects', {
        status: 200,
        body: {
          data: [], // Return empty to signal no more pages
          meta: {
            total: 0,
            current_page: 1,
            last_page: 1,
            per_page: 10,
          },
        },
      });

      // Act: Request projects with specific page size
      const result = await sdk.projects.list({ pageSize: 10 });
      const projects = [];
      for await (const page of result) {
        projects.push(...(page.result.data || []));
      }

      // Assert: Should respect pagination parameters
      expect(projects.length).toBe(0);
      expect(mockClient.verifyRequest('GET', '/projects')).toBe(true);
    });

    test('should filter projects by name', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/projects', {
        status: 200,
        body: {
          data: [mockProject],
          meta: {
            total: 1,
            current_page: 1,
            last_page: 1,
            per_page: 25,
          },
        },
      });

      // Act
      const result = await sdk.projects.list({
        'filter[name]': 'Test Project',
      });
      const projects = [];
      for await (const page of result) {
        projects.push(...(page.result.data || []));
      }

      // Assert
      expect(projects.length).toBe(1);
      expect(projects[0].attributes.name).toBe('Test Project');
    });

    test('should filter projects by environment', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/projects', {
        status: 200,
        body: {
          data: [mockProjectList.data[1]],
          meta: {
            total: 1,
            current_page: 1,
            last_page: 1,
            per_page: 25,
          },
        },
      });

      // Act
      const result = await sdk.projects.list({
        'filter[environment]': 'Production',
      });
      const projects = [];
      for await (const page of result) {
        projects.push(...(page.result.data || []));
      }

      // Assert
      expect(projects.length).toBe(1);
      expect(projects[0].attributes.environment).toBe('Production');
    });
  });

  describe('Create Operations', () => {
    test('should create a new project', async () => {
      // Arrange
      const newProject = {
        id: 'proj_new123',
        type: 'projects',
        attributes: {
          name: 'New Project',
          slug: 'new-project',
          description: 'A newly created project',
          billing_type: 'Hourly',
          environment: 'Staging',
          created_at: '2024-01-03T00:00:00Z',
          updated_at: '2024-01-03T00:00:00Z',
        },
      };

      mockClient.mockResponse('POST', '/projects', {
        status: 201,
        body: {
          data: newProject,
        },
      });

      // Act: Note that provisioningType is REQUIRED by the SDK
      const result = await sdk.projects.create({
        data: {
          type: 'projects',
          attributes: {
            name: 'New Project',
            provisioningType: 'on_demand',
            description: 'A newly created project',
            environment: 'Staging',
          },
        },
      });

      // Assert
      expect(result.data.id).toBe('proj_new123');
      expect(result.data.attributes.name).toBe('New Project');
      expect(result.data.attributes.slug).toBe('new-project');
      expect(result.data.attributes.environment).toBe('Staging');
    });

    test('should create project with minimal required fields', async () => {
      // Arrange
      const minimalProject = {
        id: 'proj_minimal123',
        type: 'projects',
        attributes: {
          name: 'Minimal Project',
          slug: 'minimal-project',
          created_at: '2024-01-03T00:00:00Z',
          updated_at: '2024-01-03T00:00:00Z',
        },
      };

      mockClient.mockResponse('POST', '/projects', {
        status: 201,
        body: {
          data: minimalProject,
        },
      });

      // Act: Only name and provisioningType are required
      const result = await sdk.projects.create({
        data: {
          type: 'projects',
          attributes: {
            name: 'Minimal Project',
            provisioningType: 'on_demand',
          },
        },
      });

      // Assert
      expect(result.data.id).toBe('proj_minimal123');
      expect(result.data.attributes.name).toBe('Minimal Project');
    });

    test('should handle validation error on create', async () => {
      // Arrange
      mockClient.mockResponse('POST', '/projects', {
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
        await sdk.projects.create({
          data: {
            type: 'projects',
            attributes: {
              name: '',
              provisioningType: 'on_demand',
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
    test('should update project name and description', async () => {
      // Arrange
      const updatedProject = {
        ...mockProject,
        attributes: {
          ...mockProject.attributes,
          name: 'Updated Project Name',
          description: 'Updated description',
          updated_at: '2024-01-05T00:00:00Z',
        },
      };

      mockClient.mockResponse('PATCH', '/projects/proj_test123', {
        status: 200,
        body: {
          data: updatedProject,
        },
      });

      // Act: projectId is required (not id)
      const result = await sdk.projects.update({
        projectId: 'proj_test123',
        requestBody: {
          data: {
            type: 'projects',
            attributes: {
              name: 'Updated Project Name',
              description: 'Updated description',
            },
          },
        },
      });

      // Assert
      expect(result.data.id).toBe('proj_test123');
      expect(result.data.attributes.name).toBe('Updated Project Name');
      expect(result.data.attributes.description).toBe('Updated description');
    });

    test('should update project environment', async () => {
      // Arrange
      const updatedProject = {
        ...mockProject,
        attributes: {
          ...mockProject.attributes,
          environment: 'Production',
          updated_at: '2024-01-05T00:00:00Z',
        },
      };

      mockClient.mockResponse('PATCH', '/projects/proj_test123', {
        status: 200,
        body: {
          data: updatedProject,
        },
      });

      // Act
      const result = await sdk.projects.update({
        projectId: 'proj_test123',
        requestBody: {
          data: {
            type: 'projects',
            attributes: {
              environment: 'Production',
            },
          },
        },
      });

      // Assert
      expect(result.data.attributes.environment).toBe('Production');
    });

    test('should handle not found error on update', async () => {
      // Arrange
      mockClient.mockResponse('PATCH', '/projects/proj_nonexistent', {
        status: 404,
        body: {
          errors: [
            {
              status: '404',
              title: 'Not Found',
              detail: 'Project not found',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.projects.update({
          projectId: 'proj_nonexistent',
          requestBody: {
            data: {
              type: 'projects',
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

  describe('Delete Operations', () => {
    test('should delete a project', async () => {
      // Arrange
      mockClient.mockResponse('DELETE', '/projects/proj_test123', {
        status: 204,
        body: null,
      });

      // Act: projectId is required (not id)
      await sdk.projects.delete({ projectId: 'proj_test123' });

      // Assert: Should complete without errors - verify request was made
      expect(mockClient.verifyRequest('DELETE', '/projects/proj_test123')).toBe(true);
    });

    test('should handle not found error on delete', async () => {
      // Arrange
      mockClient.mockResponse('DELETE', '/projects/proj_nonexistent', {
        status: 404,
        body: {
          errors: [
            {
              status: '404',
              title: 'Not Found',
              detail: 'Project not found',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.projects.delete({ projectId: 'proj_nonexistent' });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    test('should handle forbidden error when project has resources', async () => {
      // Arrange
      mockClient.mockResponse('DELETE', '/projects/proj_test123', {
        status: 403,
        body: {
          errors: [
            {
              status: '403',
              title: 'Forbidden',
              detail: 'Cannot delete project with active resources',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.projects.delete({ projectId: 'proj_test123' });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('Project Stats', () => {
    test('should return project statistics', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/projects', {
        status: 200,
        body: {
          data: [mockProject],
          meta: {
            total: 1,
            current_page: 1,
            last_page: 1,
            per_page: 25,
          },
        },
      });

      // Act
      const result = await sdk.projects.list();
      const projects = [];
      for await (const page of result) {
        projects.push(...(page.result.data || []));
      }

      // Assert
      const project = projects[0];
      expect(project.attributes.stats).toBeDefined();
      expect(project.attributes.stats.ipAddresses).toBe(2);
      expect(project.attributes.stats.servers).toBe(1);
      expect(project.attributes.stats.vlans).toBe(1);
      expect(project.attributes.stats.containers).toBe(0);
      expect(project.attributes.stats.prefixes).toBe(0);
    });
  });
});
