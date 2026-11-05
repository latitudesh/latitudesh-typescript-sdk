# Clusters

## Overview

Projects that have a GPU cluster only. Every operation answers 404 PROJECT_NOT_A_CLUSTER for a project without one.

### Available Operations

* [getProjectClusterRequirements](#getprojectclusterrequirements) - Get cluster requirements
* [updateProjectClusterRequirements](#updateprojectclusterrequirements) - Change cluster requirements
* [signProjectClusterRequirements](#signprojectclusterrequirements) - Sign cluster requirements
* [getProjectClusterRequirementSignoffs](#getprojectclusterrequirementsignoffs) - List cluster requirement sign-offs
* [getProjectClusterNodeGroups](#getprojectclusternodegroups) - List cluster node groups
* [createProjectClusterNodeGroup](#createprojectclusternodegroup) - Create a cluster node group
* [deleteProjectClusterNodeGroup](#deleteprojectclusternodegroup) - Delete a cluster node group
* [updateProjectClusterNodeGroup](#updateprojectclusternodegroup) - Update a cluster node group

## getProjectClusterRequirements

Shows your cluster's requirements for review: the requirements and what is expected of each, the node groups, the version to sign and who signed. Only available for projects that have a GPU cluster; any other project answers 404 PROJECT_NOT_A_CLUSTER. While the requirements are a draft, their content is empty.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-project-cluster-requirements" method="get" path="/projects/{project_id}/cluster/requirements" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.clusters.getProjectClusterRequirements({
    projectId: "proj_lxWpD699qm6rk",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { clustersGetProjectClusterRequirements } from "latitudesh-typescript-sdk/funcs/clustersGetProjectClusterRequirements.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await clustersGetProjectClusterRequirements(latitudesh, {
    projectId: "proj_lxWpD699qm6rk",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clustersGetProjectClusterRequirements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProjectClusterRequirementsRequest](../../models/operations/getprojectclusterrequirementsrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClusterRequirements](../../models/clusterrequirements.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## updateProjectClusterRequirements

Applies one change to your requirements: add or remove a requirement or the checks of a block, or set what a requirement expects. Signed requirements need to be signed again. Only available for projects that have a GPU cluster; any other project answers 404 PROJECT_NOT_A_CLUSTER. Needs an owner, administrator or collaborator.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-project-cluster-requirements" method="patch" path="/projects/{project_id}/cluster/requirements" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.clusters.updateProjectClusterRequirements({
    projectId: "proj_lxWpD699qm6rk",
    changeClusterRequirements: {
      data: {
        type: "cluster_requirements",
        attributes: {
          add: "storage_fs",
          expected: "xfs",
          note: "Scratch",
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { clustersUpdateProjectClusterRequirements } from "latitudesh-typescript-sdk/funcs/clustersUpdateProjectClusterRequirements.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await clustersUpdateProjectClusterRequirements(latitudesh, {
    projectId: "proj_lxWpD699qm6rk",
    changeClusterRequirements: {
      data: {
        type: "cluster_requirements",
        attributes: {
          add: "storage_fs",
          expected: "xfs",
          note: "Scratch",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clustersUpdateProjectClusterRequirements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateProjectClusterRequirementsRequest](../../models/operations/updateprojectclusterrequirementsrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClusterRequirements](../../models/clusterrequirements.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## signProjectClusterRequirements

Signs the requirements as you, for the requirements_version you were shown. A version that no longer matches the requirements is refused. Only available for projects that have a GPU cluster; any other project answers 404 PROJECT_NOT_A_CLUSTER. Needs an owner or administrator.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="sign-project-cluster-requirements" method="post" path="/projects/{project_id}/cluster/requirements/sign" example="Created" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.clusters.signProjectClusterRequirements({
    projectId: "proj_lxWpD699qm6rk",
    signClusterRequirements: {
      data: {
        type: "cluster_requirements",
        attributes: {
          requirementsVersion: "3f1c9b2e7a4d8c06b5e9f2a1d7c3e8b04a6f9d2c1b7e5a3f8d0c4b6e2a9f7d1c",
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { clustersSignProjectClusterRequirements } from "latitudesh-typescript-sdk/funcs/clustersSignProjectClusterRequirements.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await clustersSignProjectClusterRequirements(latitudesh, {
    projectId: "proj_lxWpD699qm6rk",
    signClusterRequirements: {
      data: {
        type: "cluster_requirements",
        attributes: {
          requirementsVersion: "3f1c9b2e7a4d8c06b5e9f2a1d7c3e8b04a6f9d2c1b7e5a3f8d0c4b6e2a9f7d1c",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clustersSignProjectClusterRequirements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SignProjectClusterRequirementsRequest](../../models/operations/signprojectclusterrequirementsrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClusterRequirements](../../models/clusterrequirements.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getProjectClusterRequirementSignoffs

Lists who signed the requirements and when, newest first. Only available for projects that have a GPU cluster; any other project answers 404 PROJECT_NOT_A_CLUSTER.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-project-cluster-requirement-signoffs" method="get" path="/projects/{project_id}/cluster/requirements/signoffs" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.clusters.getProjectClusterRequirementSignoffs({
    projectId: "proj_lxWpD699qm6rk",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { clustersGetProjectClusterRequirementSignoffs } from "latitudesh-typescript-sdk/funcs/clustersGetProjectClusterRequirementSignoffs.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await clustersGetProjectClusterRequirementSignoffs(latitudesh, {
    projectId: "proj_lxWpD699qm6rk",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clustersGetProjectClusterRequirementSignoffs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProjectClusterRequirementSignoffsRequest](../../models/operations/getprojectclusterrequirementsignoffsrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClusterRequirementSignoffs](../../models/clusterrequirementsignoffs.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getProjectClusterNodeGroups

Lists your cluster's node groups. Only available for projects that have a GPU cluster; any other project answers 404 PROJECT_NOT_A_CLUSTER. While the requirements are a draft, the list is empty.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-project-cluster-node-groups" method="get" path="/projects/{project_id}/cluster/node_groups" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.clusters.getProjectClusterNodeGroups({
    projectId: "proj_lxWpD699qm6rk",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { clustersGetProjectClusterNodeGroups } from "latitudesh-typescript-sdk/funcs/clustersGetProjectClusterNodeGroups.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await clustersGetProjectClusterNodeGroups(latitudesh, {
    projectId: "proj_lxWpD699qm6rk",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clustersGetProjectClusterNodeGroups failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProjectClusterNodeGroupsRequest](../../models/operations/getprojectclusternodegroupsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClusterNodeGroups](../../models/clusternodegroups.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## createProjectClusterNodeGroup

Adds a node group to your cluster. Only available for projects that have a GPU cluster; any other project answers 404 PROJECT_NOT_A_CLUSTER. Signed requirements need to be signed again. Needs an owner, administrator or collaborator.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-project-cluster-node-group" method="post" path="/projects/{project_id}/cluster/node_groups" example="Created" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.clusters.createProjectClusterNodeGroup({
    projectId: "proj_lxWpD699qm6rk",
    createClusterNodeGroup: {
      data: {
        type: "cluster_node_groups",
        attributes: {
          name: "login",
          kind: "cpu",
          plan: "g4-b300-large",
          serverCount: 2,
          os: "rocky_9_x64",
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { clustersCreateProjectClusterNodeGroup } from "latitudesh-typescript-sdk/funcs/clustersCreateProjectClusterNodeGroup.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await clustersCreateProjectClusterNodeGroup(latitudesh, {
    projectId: "proj_lxWpD699qm6rk",
    createClusterNodeGroup: {
      data: {
        type: "cluster_node_groups",
        attributes: {
          name: "login",
          kind: "cpu",
          plan: "g4-b300-large",
          serverCount: 2,
          os: "rocky_9_x64",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clustersCreateProjectClusterNodeGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateProjectClusterNodeGroupRequest](../../models/operations/createprojectclusternodegrouprequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClusterNodeGroup](../../models/clusternodegroup.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## deleteProjectClusterNodeGroup

Removes one of your cluster's node groups. Only available for projects that have a GPU cluster; any other project answers 404 PROJECT_NOT_A_CLUSTER. Signed requirements need to be signed again. Needs an owner, administrator or collaborator.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-project-cluster-node-group" method="delete" path="/projects/{project_id}/cluster/node_groups/{id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.clusters.deleteProjectClusterNodeGroup({
    projectId: "proj_lxWpD699qm6rk",
    id: "7",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { clustersDeleteProjectClusterNodeGroup } from "latitudesh-typescript-sdk/funcs/clustersDeleteProjectClusterNodeGroup.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await clustersDeleteProjectClusterNodeGroup(latitudesh, {
    projectId: "proj_lxWpD699qm6rk",
    id: "7",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("clustersDeleteProjectClusterNodeGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteProjectClusterNodeGroupRequest](../../models/operations/deleteprojectclusternodegrouprequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## updateProjectClusterNodeGroup

Changes the attributes sent of one of your cluster's node groups. Only available for projects that have a GPU cluster; any other project answers 404 PROJECT_NOT_A_CLUSTER. Signed requirements need to be signed again. Needs an owner, administrator or collaborator.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-project-cluster-node-group" method="patch" path="/projects/{project_id}/cluster/node_groups/{id}" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.clusters.updateProjectClusterNodeGroup({
    projectId: "proj_lxWpD699qm6rk",
    id: "7",
    updateClusterNodeGroup: {
      data: {
        type: "cluster_node_groups",
        attributes: {
          serverCount: 32,
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { clustersUpdateProjectClusterNodeGroup } from "latitudesh-typescript-sdk/funcs/clustersUpdateProjectClusterNodeGroup.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await clustersUpdateProjectClusterNodeGroup(latitudesh, {
    projectId: "proj_lxWpD699qm6rk",
    id: "7",
    updateClusterNodeGroup: {
      data: {
        type: "cluster_node_groups",
        attributes: {
          serverCount: 32,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clustersUpdateProjectClusterNodeGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateProjectClusterNodeGroupRequest](../../models/operations/updateprojectclusternodegrouprequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClusterNodeGroup](../../models/clusternodegroup.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |