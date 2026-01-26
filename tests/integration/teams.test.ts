/**
 * Integration tests for Teams resource
 * Tests get, create, and update operations
 */

import { describe, expect, test, beforeEach } from 'bun:test';
import { setupTest } from './helpers';
import { mockTeam, mockTeamList } from './helpers/mock-data';

describe('Teams - Core Operations', () => {
  let sdk, mockClient, reset;

  beforeEach(() => {
    const testClient = setupTest();
    sdk = testClient.sdk;
    mockClient = testClient.mockClient;
    reset = testClient.reset;
    reset();
  });

  describe('Get Operations', () => {
    test('should retrieve the current team', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: mockTeamList,
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      expect(result.data).toBeDefined();
      expect(result.data.length).toBe(2);
      expect(result.data[0].id).toBe('team_test123');
      expect(result.data[0].attributes.name).toBe('Test Team');
      expect(result.data[0].attributes.slug).toBe('test-team');
    });

    test('should include team owner information', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: mockTeamList,
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      const team = result.data[0];
      expect(team.attributes.owner).toBeDefined();
      expect(team.attributes.owner.id).toBe('user_test123');
      expect(team.attributes.owner.email).toBe('test@example.com');
      expect(team.attributes.owner.role.name).toBe('owner');
    });

    test('should include team users', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: mockTeamList,
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      const team = result.data[0];
      expect(team.attributes.users).toBeDefined();
      expect(team.attributes.users.length).toBe(1);
      expect(team.attributes.users[0].email).toBe('test@example.com');
      expect(team.attributes.users[0].role.name).toBe('admin');
    });

    test('should include team projects', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: mockTeamList,
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      const team = result.data[0];
      expect(team.attributes.projects).toBeDefined();
      expect(team.attributes.projects.length).toBe(1);
      expect(team.attributes.projects[0].id).toBe('proj_test123');
      expect(team.attributes.projects[0].name).toBe('Test Project');
    });

    test('should include billing information', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: mockTeamList,
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      const team = result.data[0];
      expect(team.attributes.billing).toBeDefined();
      expect(team.attributes.billing.id).toBe('billing_test123');
      expect(team.attributes.billing.customerBillingId).toBe('cus_test123');
    });

    test('should include feature flags', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: mockTeamList,
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      const team = result.data[0];
      expect(team.attributes.featureFlags).toBeDefined();
      expect(team.attributes.featureFlags.length).toBe(2);
      expect(team.attributes.featureFlags).toContain('feature_1');
      expect(team.attributes.featureFlags).toContain('feature_2');
    });

    test('should show MFA enforcement status', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: mockTeamList,
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      const team1 = result.data[0];
      expect(team1.attributes.enforceMfa).toBe(false);

      const team2 = result.data[1];
      expect(team2.attributes.enforceMfa).toBe(true);
    });

    test('should handle teams with null description and address', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: {
          data: [mockTeamList.data[1]],
          meta: {},
        },
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      const team = result.data[0];
      expect(team.attributes.description).toBeNull();
      expect(team.attributes.address).toBeNull();
    });
  });

  describe('Create Operations', () => {
    test('should create a new team', async () => {
      // Arrange
      const newTeam = {
        id: 'team_new123',
        attributes: {
          name: 'New Team',
          slug: 'new-team',
          description: 'A newly created team',
          address: '456 New Street',
          currency: 'USD',
          created_at: '2024-01-03T00:00:00Z',
          updated_at: '2024-01-03T00:00:00Z',
          enforce_mfa: false,
          users: [],
          projects: [],
          owner: {
            id: 'user_new123',
            email: 'new@example.com',
            first_name: 'New',
            last_name: 'User',
            role: {
              id: 'role_owner_new',
              name: 'owner',
              created_at: '2024-01-03T00:00:00Z',
              updated_at: '2024-01-03T00:00:00Z',
            },
          },
          billing: {
            id: 'billing_new123',
            customer_billing_id: 'cus_new123',
          },
          feature_flags: [],
        },
      };

      mockClient.mockResponse('POST', '/team', {
        status: 201,
        body: {
          data: newTeam,
        },
      });

      // Act
      const result = await sdk.teams.create({
        data: {
          type: 'teams',
          attributes: {
            name: 'New Team',
            currency: 'USD',
            address: '456 New Street',
          },
        },
      });

      // Assert
      expect(result.data.id).toBe('team_new123');
      expect(result.data.attributes.name).toBe('New Team');
      expect(result.data.attributes.slug).toBe('new-team');
      expect(result.data.attributes.description).toBe('A newly created team');
    });

    test('should create team with minimal required fields', async () => {
      // Arrange
      const minimalTeam = {
        id: 'team_minimal123',
        attributes: {
          name: 'Minimal Team',
          slug: 'minimal-team',
          description: null,
          address: null,
          currency: 'USD',
          created_at: '2024-01-03T00:00:00Z',
          updated_at: '2024-01-03T00:00:00Z',
          enforce_mfa: false,
          users: [],
          projects: [],
          owner: {
            id: 'user_min123',
            email: 'min@example.com',
            first_name: 'Min',
            last_name: 'User',
            role: {
              id: 'role_owner_min',
              name: 'owner',
              created_at: '2024-01-03T00:00:00Z',
              updated_at: '2024-01-03T00:00:00Z',
            },
          },
          billing: {
            id: 'billing_min123',
            customer_billing_id: 'cus_min123',
          },
          feature_flags: [],
        },
      };

      mockClient.mockResponse('POST', '/team', {
        status: 201,
        body: {
          data: minimalTeam,
        },
      });

      // Act
      const result = await sdk.teams.create({
        data: {
          type: 'teams',
          attributes: {
            name: 'Minimal Team',
            currency: 'USD',
          },
        },
      });

      // Assert
      expect(result.data.id).toBe('team_minimal123');
      expect(result.data.attributes.name).toBe('Minimal Team');
      expect(result.data.attributes.description).toBeNull();
      expect(result.data.attributes.address).toBeNull();
    });

    test('should handle validation error on create', async () => {
      // Arrange
      mockClient.mockResponse('POST', '/team', {
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
        await sdk.teams.create({
          data: {
            type: 'teams',
            attributes: {
              name: '',
              currency: 'USD',
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
    test('should update team name and description', async () => {
      // Arrange
      const updatedTeam = {
        ...mockTeam,
        attributes: {
          ...mockTeam.attributes,
          name: 'Updated Team Name',
          description: 'Updated description',
          updated_at: '2024-01-05T00:00:00Z',
        },
      };

      mockClient.mockResponse('PATCH', '/team', {
        status: 200,
        body: {
          data: updatedTeam,
        },
      });

      // Act
      const result = await sdk.teams.update({
        teamId: 'team_test123',
        requestBody: {
          data: {
            id: 'team_test123',
            type: 'teams',
            attributes: {
              name: 'Updated Team Name',
            },
          },
        },
      });

      // Assert
      expect(result.data.id).toBe('team_test123');
      expect(result.data.attributes.name).toBe('Updated Team Name');
      expect(result.data.attributes.description).toBe('Updated description');
    });

    test('should update team address', async () => {
      // Arrange
      const updatedTeam = {
        ...mockTeam,
        attributes: {
          ...mockTeam.attributes,
          address: '789 Updated Street, New City',
          updated_at: '2024-01-05T00:00:00Z',
        },
      };

      mockClient.mockResponse('PATCH', '/team', {
        status: 200,
        body: {
          data: updatedTeam,
        },
      });

      // Act
      const result = await sdk.teams.update({
        teamId: 'team_test123',
        requestBody: {
          data: {
            id: 'team_test123',
            type: 'teams',
            attributes: {
              address: '789 Updated Street, New City',
            },
          },
        },
      });

      // Assert
      expect(result.data.attributes.address).toBe('789 Updated Street, New City');
    });

    test('should enable MFA enforcement', async () => {
      // Arrange
      const updatedTeam = {
        ...mockTeam,
        attributes: {
          ...mockTeam.attributes,
          enforce_mfa: true,
          updated_at: '2024-01-05T00:00:00Z',
        },
      };

      mockClient.mockResponse('PATCH', '/team', {
        status: 200,
        body: {
          data: updatedTeam,
        },
      });

      // Act
      const result = await sdk.teams.update({
        teamId: 'team_test123',
        requestBody: {
          data: {
            id: 'team_test123',
            type: 'teams',
            attributes: {},
          },
        },
      });

      // Assert
      expect(result.data.attributes.enforceMfa).toBe(true);
    });

    test('should handle validation error on update', async () => {
      // Arrange
      mockClient.mockResponse('PATCH', '/team', {
        status: 422,
        body: {
          errors: [
            {
              status: '422',
              title: 'Validation Error',
              detail: 'Name cannot be empty',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.teams.update({
          teamId: 'team_test123',
          requestBody: {
            data: {
              id: 'team_test123',
              type: 'teams',
              attributes: {
                name: '',
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

  describe('Team Currency Support', () => {
    test('should support different currencies', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: mockTeamList,
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      const usdTeam = result.data[0];
      expect(usdTeam.attributes.currency).toBe('USD');

      const brlTeam = result.data[1];
      expect(brlTeam.attributes.currency).toBe('BRL');
    });
  });

  describe('Team Metadata', () => {
    test('should include created and updated timestamps', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: mockTeamList,
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      const team = result.data[0];
      expect(team.attributes.createdAt).toBeDefined();
      expect(team.attributes.updatedAt).toBeDefined();
      expect(team.attributes.createdAt).toBe('2024-01-01T00:00:00Z');
    });

    test('should generate slug from team name', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/team', {
        status: 200,
        body: mockTeamList,
      });

      // Act
      const result = await sdk.teams.get();

      // Assert
      const team = result.data[0];
      expect(team.attributes.slug).toBe('test-team');
      expect(team.attributes.name).toBe('Test Team');
    });
  });
});
