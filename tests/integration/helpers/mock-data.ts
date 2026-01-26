/**
 * Mock data for integration tests
 */

export const mockServer = {
  id: 'srv_test123',
  type: 'servers',
  attributes: {
    hostname: 'test-server-01',
    label: 'Test Server',
    status: 'on',
    role: 'Bare Metal',
    site: 'sao-paulo',
    locked: false,
    rescue: false,
    primary_ipv4: '192.0.2.1',
    primary_ipv6: '2001:db8::1',
    created_at: '2024-01-01T00:00:00Z',
    scheduled_deletion_at: null,
    plan: {
      id: 'c3.small.x86',
      name: 'c3.small.x86',
      slug: 'c3-small-x86',
    },
    operating_system: {
      name: 'Ubuntu 22.04 LTS x64',
      slug: 'ubuntu_22_04_x64_lts',
      version: '22.04',
    },
    region: {
      city: 'São Paulo',
      country: 'BR',
      site: {
        id: 'site_sao_paulo',
        name: 'São Paulo',
        slug: 'sao-paulo',
        facility: 'Facility A',
        rack_id: 'rack-01',
      },
    },
    specs: {
      cpu: '4 cores',
      disk: '480 GB',
      ram: '16 GB',
      nic: '1 Gbps',
      gpu: null,
    },
    project: {
      id: 'proj_test123',
      name: 'Test Project',
      slug: 'test-project',
    },
  },
};

export const mockServerList = {
  data: [
    mockServer,
    {
      ...mockServer,
      id: 'srv_test456',
      attributes: {
        ...mockServer.attributes,
        hostname: 'test-server-02',
        label: 'Test Server 2',
        primary_ipv4: '192.0.2.2',
      },
    },
  ],
  meta: {
    total: 2,
    current_page: 1,
    last_page: 1,
    per_page: 25,
  },
};

export const mockServerCreateRequest = {
  type: 'servers' as const,
  attributes: {
    project: 'proj_test123',
    plan: 'c3-small-x86' as const,
    operatingSystem: 'ubuntu_22_04_x64_lts' as const,
    hostname: 'test-server-01',
    site: 'SAO' as const,
  },
};

export const mockServerUpdateRequest = {
  id: 'srv_test123',
  requestBody: {
    hostname: 'updated-server-01',
    description: 'Updated description',
  },
};

export const mockServerDeployConfig = {
  id: 'deploy_config_test123',
  type: 'deploy_config',
  attributes: {
    ssh_keys: ['ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCtest'],
    user_data: '#!/bin/bash\necho "Hello World"',
    raid: 'raid1',
  },
};

export const mockActionResponse = {
  id: 'action_test123',
  type: 'reboot',
  status: 'pending',
  created_at: '2024-01-01T00:00:00Z',
};

export const mockIPMISession = {
  url: 'https://ipmi.example.com/session/test123',
  username: 'admin',
  password: 'test-password',
  expires_at: '2024-01-01T01:00:00Z',
};

export const mockOutOfBandConnection = {
  url: 'wss://console.example.com/test123',
  token: 'test-token-123',
  expires_at: '2024-01-01T01:00:00Z',
};

// Projects - JSON:API format
export const mockProject = {
  id: 'proj_test123',
  type: 'projects',
  attributes: {
    name: 'Test Project',
    slug: 'test-project',
    description: 'A test project for integration tests',
    billing_type: 'Monthly',
    billing_method: 'Normal',
    cost: '0.00',
    environment: 'Development',
    stats: {
      ip_addresses: 2,
      prefixes: 0,
      servers: 1,
      containers: 0,
      vlans: 1,
    },
    billing: {
      subscription_id: 'sub_test123',
      type: 'monthly',
      method: 'normal',
    },
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
};

export const mockProjectList = {
  data: [
    mockProject,
    {
      id: 'proj_test456',
      type: 'projects',
      attributes: {
        name: 'Production Project',
        slug: 'production-project',
        description: 'Production environment project',
        billing_type: 'Monthly',
        billing_method: 'Normal',
        cost: '150.00',
        environment: 'Production',
        stats: {
          ip_addresses: 10,
          prefixes: 1,
          servers: 5,
          containers: 2,
          vlans: 3,
        },
        billing: {
          subscription_id: 'sub_test456',
          type: 'monthly',
          method: 'normal',
        },
        created_at: '2024-01-02T00:00:00Z',
        updated_at: '2024-01-15T00:00:00Z',
      },
    },
  ],
  meta: {
    total: 2,
    current_page: 1,
    last_page: 1,
    per_page: 25,
  },
};

// API Keys - JSON:API format
export const mockApiKey = {
  id: 'apikey_test123',
  type: 'api_keys',
  attributes: {
    name: 'Test API Key',
    api_version: 'v1',
    token_last_slice: 'abc12',
    read_only: false,
    allowed_ips: ['192.168.1.1', '10.0.0.0/24'],
    last_used_at: '2024-01-15T10:30:00Z',
    user: {
      id: 'user_test123',
      email: 'test@example.com',
    },
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
};

export const mockApiKeyList = {
  data: [
    mockApiKey,
    {
      id: 'apikey_test456',
      type: 'api_keys',
      attributes: {
        name: 'Production API Key',
        api_version: 'v1',
        token_last_slice: 'xyz78',
        read_only: true,
        allowed_ips: null,
        last_used_at: '2024-01-20T14:45:00Z',
        user: {
          id: 'user_test456',
          email: 'prod@example.com',
        },
        created_at: '2024-01-10T00:00:00Z',
        updated_at: '2024-01-20T00:00:00Z',
      },
    },
  ],
};

// Plans - JSON:API format
export const mockPlan = {
  id: 'c3.small.x86',
  type: 'plans',
  attributes: {
    slug: 'c3-small-x86',
    name: 'c3.small.x86',
    features: ['ssh', 'raid', 'user_data'],
    specs: {
      cpu: {
        type: 'Intel Xeon E3',
        clock: 3.4,
        cores: 4,
        count: 1,
      },
      memory: {
        total: 16,
      },
      nics: [
        {
          type: '1Gbps',
          count: 2,
        },
      ],
      drives: [
        {
          type: 'SSD',
          size: '480 GB',
          count: 2,
        },
      ],
    },
    regions: [
      {
        name: 'São Paulo',
        deploys_instantly: ['sao-paulo-1', 'sao-paulo-2'],
        locations: {
          available: ['sao-paulo-1', 'sao-paulo-2'],
          in_stock: ['sao-paulo-1'],
        },
        stock_level: 'high',
      },
      {
        name: 'Santiago',
        deploys_instantly: ['santiago-1'],
        locations: {
          available: ['santiago-1'],
          in_stock: ['santiago-1'],
        },
        stock_level: 'medium',
      },
    ],
  },
};

export const mockPlanList = {
  data: [
    mockPlan,
    {
      id: 'c3.large.x86',
      type: 'plans',
      attributes: {
        slug: 'c3-large-x86',
        name: 'c3.large.x86',
        features: ['ssh', 'raid', 'user_data', 'sev'],
        specs: {
          cpu: {
            type: 'Intel Xeon E5',
            clock: 3.6,
            cores: 8,
            count: 2,
          },
          memory: {
            total: 128,
          },
          nics: [
            {
              type: '10Gbps',
              count: 2,
            },
          ],
          drives: [
            {
              type: 'NVME',
              size: '1920 GB',
              count: 4,
            },
          ],
          gpu: {
            type: 'NVIDIA RTX 4090',
            count: 2,
          },
        },
        regions: [
          {
            name: 'São Paulo',
            deploys_instantly: ['sao-paulo-1'],
            locations: {
              available: ['sao-paulo-1'],
              in_stock: [],
            },
            stock_level: 'low',
          },
        ],
      },
    },
  ],
};

export const mockTeam = {
  id: 'team_test123',
  attributes: {
    name: 'Test Team',
    slug: 'test-team',
    description: 'A test team for integration tests',
    address: '123 Test Street, Test City',
    currency: 'USD',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    enforce_mfa: false,
    users: [
      {
        id: 'user_test123',
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User',
        role: {
          id: 'role_admin',
          name: 'admin',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
        },
      },
    ],
    projects: [
      {
        id: 'proj_test123',
        name: 'Test Project',
        slug: 'test-project',
      },
    ],
    owner: {
      id: 'user_test123',
      email: 'test@example.com',
      first_name: 'Test',
      last_name: 'User',
      role: {
        id: 'role_owner',
        name: 'owner',
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z',
      },
    },
    billing: {
      id: 'billing_test123',
      customer_billing_id: 'cus_test123',
    },
    feature_flags: ['feature_1', 'feature_2'],
  },
};

export const mockTeamList = {
  data: [
    mockTeam,
    {
      id: 'team_test456',
      attributes: {
        name: 'Production Team',
        slug: 'production-team',
        description: null,
        address: null,
        currency: 'BRL',
        created_at: '2024-01-02T00:00:00Z',
        updated_at: '2024-01-02T00:00:00Z',
        enforce_mfa: true,
        users: [
          {
            id: 'user_test456',
            email: 'prod@example.com',
            first_name: 'Prod',
            last_name: 'User',
            role: {
              id: 'role_member',
              name: 'member',
              created_at: '2024-01-02T00:00:00Z',
              updated_at: '2024-01-02T00:00:00Z',
            },
          },
        ],
        projects: [],
        owner: {
          id: 'user_test456',
          email: 'prod@example.com',
          first_name: 'Prod',
          last_name: 'User',
          role: {
            id: 'role_owner2',
            name: 'owner',
            created_at: '2024-01-02T00:00:00Z',
            updated_at: '2024-01-02T00:00:00Z',
          },
        },
        billing: {
          id: 'billing_test456',
          customer_billing_id: 'cus_test456',
        },
        feature_flags: [],
      },
    },
  ],
  meta: {},
};

export const mockUserData = {
  data: {
    id: 'userdata_test123',
    type: 'user_data',
    attributes: {
      description: 'Test User Data Script',
      content: '#!/bin/bash\necho "Hello World"\napt-get update\napt-get install -y nginx',
      project: {
        id: 'proj_test123',
        name: 'Test Project',
        slug: 'test-project',
      },
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z',
    },
  },
  meta: {},
};

export const mockUserDataList = {
  data: [
    {
      data: {
        id: 'userdata_test123',
        type: 'user_data',
        attributes: {
          description: 'Test User Data Script',
          content: '#!/bin/bash\necho "Hello World"\napt-get update\napt-get install -y nginx',
          project: {
            id: 'proj_test123',
            name: 'Test Project',
            slug: 'test-project',
          },
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
        },
      },
      meta: {},
    },
    {
      data: {
        id: 'userdata_test456',
        type: 'user_data',
        attributes: {
          description: 'Docker Setup Script',
          content: '#!/bin/bash\ncurl -fsSL https://get.docker.com -o get-docker.sh\nsh get-docker.sh',
          project: {
            id: 'proj_test456',
            name: 'Production Project',
            slug: 'production-project',
          },
          created_at: '2024-01-02T00:00:00Z',
          updated_at: '2024-01-02T00:00:00Z',
        },
      },
      meta: {},
    },
  ],
  meta: {},
};

export const mockOperatingSystem = {
  id: 'ubuntu_22_04_x64_lts',
  name: 'Ubuntu 22.04 LTS x64',
  slug: 'ubuntu-22-04-x64-lts',
  version: '22.04',
  distro: 'ubuntu',
};

export const mockError = {
  error: {
    message: 'Resource not found',
    code: 'not_found',
  },
};

export const mockValidationError = {
  error: {
    message: 'Validation failed',
    code: 'validation_error',
    errors: [
      {
        field: 'hostname',
        message: 'Hostname is required',
      },
    ],
  },
};

export const mockRateLimitError = {
  error: {
    message: 'Rate limit exceeded',
    code: 'rate_limit_exceeded',
    retry_after: 60,
  },
};

export function createMockServers(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    ...mockServer,
    id: `srv_test${i + 1}`,
    attributes: {
      ...mockServer.attributes,
      hostname: `test-server-${String(i + 1).padStart(2, '0')}`,
      label: `Test Server ${i + 1}`,
      primary_ipv4: `192.0.2.${i + 1}`,
    },
  }));
}

export function createPaginatedResponse<T>(data: T[], page = 1, perPage = 25) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageData = data.slice(start, end);

  return {
    data: pageData,
    meta: {
      total: data.length,
      current_page: page,
      last_page: Math.ceil(data.length / perPage),
      per_page: perPage,
    },
  };
}
