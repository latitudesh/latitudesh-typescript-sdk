/**
 * Integration tests for Plans resource
 * Tests read-only operations: list, get, filter
 */

import { describe, expect, test, beforeEach } from 'bun:test';
import { setupTest } from './helpers';
import { mockPlan, mockPlanList } from './helpers/mock-data';

describe('Plans - Read-Only Operations', () => {
  let sdk, mockClient, reset;

  beforeEach(() => {
    const testClient = setupTest();
    sdk = testClient.sdk;
    mockClient = testClient.mockClient;
    reset = testClient.reset;
    reset();
  });

  describe('List Operations', () => {
    test('should list all plans', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      expect(result.data).toBeDefined();
      expect(result.data.length).toBe(2);
      expect(result.data[0].id).toBe('c3.small.x86');
      expect(result.data[0].attributes.name).toBe('c3.small.x86');
      expect(result.data[0].attributes.slug).toBe('c3-small-x86');
      expect(result.data[1].id).toBe('c3.large.x86');
    });

    test('should handle empty plans list', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: {
          data: [],
        },
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      expect(result.data).toBeDefined();
      expect(result.data.length).toBe(0);
    });

    test('should include plan specifications', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      const plan = result.data[0];
      expect(plan.attributes.specs).toBeDefined();
      expect(plan.attributes.specs.cpu).toBeDefined();
      expect(plan.attributes.specs.cpu.cores).toBe(4);
      expect(plan.attributes.specs.memory).toBeDefined();
      expect(plan.attributes.specs.memory.total).toBe(16);
      expect(plan.attributes.specs.drives).toBeDefined();
      expect(plan.attributes.specs.drives.length).toBeGreaterThan(0);
    });

    test('should include regional availability', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      const plan = result.data[0];
      expect(plan.attributes.regions).toBeDefined();
      expect(plan.attributes.regions.length).toBe(2);
      expect(plan.attributes.regions[0].name).toBe('São Paulo');
      expect(plan.attributes.regions[0].locations.available).toContain('sao-paulo-1');
      expect(plan.attributes.regions[0].stockLevel).toBe('high');
    });

    test('should include plan features', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      const plan = result.data[0];
      expect(plan.attributes.features).toBeDefined();
      expect(plan.attributes.features).toContain('ssh');
      expect(plan.attributes.features).toContain('raid');

      const advancedPlan = result.data[1];
      expect(advancedPlan.attributes.features).toContain('sev');
    });
  });

  describe('Filter Operations', () => {
    test('should filter plans by name', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: {
          data: [mockPlan],
        },
      });

      // Act
      const result = await sdk.plans.list({
        filterName: 'c3.small.x86',
      });

      // Assert
      expect(result.data.length).toBe(1);
      expect(result.data[0].attributes.name).toBe('c3.small.x86');
    });

    test('should filter plans by slug', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: {
          data: [mockPlan],
        },
      });

      // Act
      const result = await sdk.plans.list({
        filterSlug: 'c3-small-x86',
      });

      // Assert
      expect(result.data.length).toBe(1);
      expect(result.data[0].attributes.slug).toBe('c3-small-x86');
    });

    test('should filter plans by stock level', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: {
          data: [mockPlan],
        },
      });

      // Act
      const result = await sdk.plans.list({
        filterStockLevel: 'high',
      });

      // Assert
      expect(result.data.length).toBe(1);
      expect(result.data[0].attributes.regions[0].stockLevel).toBe('high');
    });

    test('should filter plans with in stock flag', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list({
        filterInStock: true,
      });

      // Assert
      expect(result.data.length).toBe(2);
      // Both plans have locations with inStock entries
    });

    test('should filter plans by GPU availability', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: {
          data: [mockPlanList.data[1]], // Only the GPU plan
        },
      });

      // Act
      const result = await sdk.plans.list({
        filterGpu: true,
      });

      // Assert
      expect(result.data.length).toBe(1);
      expect(result.data[0].attributes.specs.gpu).toBeDefined();
      expect(result.data[0].attributes.specs.gpu.type).toBe('NVIDIA RTX 4090');
    });

    test('should filter plans by RAM size', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: {
          data: [mockPlan],
        },
      });

      // Act
      const result = await sdk.plans.list({
        filterRam: 16,
      });

      // Assert
      expect(result.data.length).toBe(1);
      expect(result.data[0].attributes.specs.memory.total).toBe(16);
    });
  });

  describe('Get Single Plan', () => {
    test('should retrieve a specific plan by ID', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans/c3.small.x86', {
        status: 200,
        body: {
          data: mockPlan,
        },
      });

      // Act
      const result = await sdk.plans.get({
        planId: 'c3.small.x86',
      });

      // Assert
      expect(result.data.id).toBe('c3.small.x86');
      expect(result.data.attributes.name).toBe('c3.small.x86');
      expect(result.data.attributes.slug).toBe('c3-small-x86');
    });

    test('should include complete specifications for single plan', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans/c3.small.x86', {
        status: 200,
        body: {
          data: mockPlan,
        },
      });

      // Act
      const result = await sdk.plans.get({
        planId: 'c3.small.x86',
      });

      // Assert
      const specs = result.data.attributes.specs;
      expect(specs.cpu.type).toBe('Intel Xeon E3');
      expect(specs.cpu.clock).toBe(3.4);
      expect(specs.cpu.cores).toBe(4);
      expect(specs.memory.total).toBe(16);
      expect(specs.nics).toBeDefined();
      expect(specs.nics.length).toBeGreaterThan(0);
      expect(specs.drives).toBeDefined();
      expect(specs.drives.length).toBeGreaterThan(0);
    });

    test('should handle not found error', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans/nonexistent', {
        status: 404,
        body: {
          errors: [
            {
              status: '404',
              title: 'Not Found',
              detail: 'Plan not found',
            },
          ],
        },
      });

      // Act & Assert
      try {
        await sdk.plans.get({
          planId: 'nonexistent',
        });
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('Plan Specifications', () => {
    test('should parse CPU specifications correctly', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      const smallPlan = result.data[0];
      expect(smallPlan.attributes.specs.cpu.type).toBe('Intel Xeon E3');
      expect(smallPlan.attributes.specs.cpu.cores).toBe(4);
      expect(smallPlan.attributes.specs.cpu.count).toBe(1);

      const largePlan = result.data[1];
      expect(largePlan.attributes.specs.cpu.cores).toBe(8);
      expect(largePlan.attributes.specs.cpu.count).toBe(2);
    });

    test('should parse storage specifications correctly', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      const smallPlan = result.data[0];
      expect(smallPlan.attributes.specs.drives[0].type).toBe('SSD');
      expect(smallPlan.attributes.specs.drives[0].size).toBe('480 GB');
      expect(smallPlan.attributes.specs.drives[0].count).toBe(2);

      const largePlan = result.data[1];
      expect(largePlan.attributes.specs.drives[0].type).toBe('NVME');
      expect(largePlan.attributes.specs.drives[0].size).toBe('1920 GB');
    });

    test('should parse network specifications correctly', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      const smallPlan = result.data[0];
      expect(smallPlan.attributes.specs.nics[0].type).toBe('1Gbps');
      expect(smallPlan.attributes.specs.nics[0].count).toBe(2);

      const largePlan = result.data[1];
      expect(largePlan.attributes.specs.nics[0].type).toBe('10Gbps');
    });

    test('should handle plans with and without GPU', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      const smallPlan = result.data[0];
      expect(smallPlan.attributes.specs.gpu).toBeUndefined();

      const largePlan = result.data[1];
      expect(largePlan.attributes.specs.gpu).toBeDefined();
      expect(largePlan.attributes.specs.gpu.type).toBe('NVIDIA RTX 4090');
      expect(largePlan.attributes.specs.gpu.count).toBe(2);
    });
  });

  describe('Regional Availability', () => {
    test('should show availability per location', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      const plan = result.data[0];
      const saoPauloRegion = plan.attributes.regions.find((r: any) => r.name === 'São Paulo');
      expect(saoPauloRegion).toBeDefined();
      expect(saoPauloRegion.locations.available).toContain('sao-paulo-1');
      expect(saoPauloRegion.deploysInstantly).toContain('sao-paulo-1');
    });

    test('should show stock levels per region', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      const smallPlan = result.data[0];
      expect(smallPlan.attributes.regions[0].stockLevel).toBe('high');

      const largePlan = result.data[1];
      expect(largePlan.attributes.regions[0].stockLevel).toBe('low');
    });

    test('should list all regions where plan is available', async () => {
      // Arrange
      mockClient.mockResponse('GET', '/plans', {
        status: 200,
        body: mockPlanList,
      });

      // Act
      const result = await sdk.plans.list();

      // Assert
      const plan = result.data[0];
      expect(plan.attributes.regions.length).toBe(2);

      const regionNames = plan.attributes.regions.map((r: any) => r.name);
      expect(regionNames).toContain('São Paulo');
      expect(regionNames).toContain('Santiago');
    });
  });
});
