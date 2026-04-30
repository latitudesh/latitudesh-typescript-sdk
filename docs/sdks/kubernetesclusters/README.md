# KubernetesClusters

## Overview

### Available Operations

* [listKubernetesClusters](#listkubernetesclusters) - List Kubernetes Clusters
* [createKubernetesCluster](#createkubernetescluster) - Create a Kubernetes Cluster
* [listKubernetesAvailableVersions](#listkubernetesavailableversions) - List Available Kubernetes Versions
* [getKubernetesCluster](#getkubernetescluster) - Get a Kubernetes Cluster
* [deleteKubernetesCluster](#deletekubernetescluster) - Delete a Kubernetes Cluster
* [updateKubernetesCluster](#updatekubernetescluster) - Update Kubernetes Cluster
* [getKubernetesClusterKubeconfig](#getkubernetesclusterkubeconfig) - Get Kubernetes Cluster Kubeconfig

## listKubernetesClusters

Lists all Kubernetes clusters for a project.


### Example Usage: EmptyList

<!-- UsageSnippet language="typescript" operationID="list-kubernetes-clusters" method="get" path="/kubernetes_clusters" example="EmptyList" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.listKubernetesClusters({
    projectId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { kubernetesClustersListKubernetesClusters } from "latitudesh-typescript-sdk/funcs/kubernetesClustersListKubernetesClusters.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersListKubernetesClusters(latitudesh, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersListKubernetesClusters failed:", res.error);
  }
}

run();
```
### Example Usage: Success

<!-- UsageSnippet language="typescript" operationID="list-kubernetes-clusters" method="get" path="/kubernetes_clusters" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.listKubernetesClusters({
    projectId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { kubernetesClustersListKubernetesClusters } from "latitudesh-typescript-sdk/funcs/kubernetesClustersListKubernetesClusters.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersListKubernetesClusters(latitudesh, {
    projectId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersListKubernetesClusters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListKubernetesClustersRequest](../../models/operations/listkubernetesclustersrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.KubernetesClusters](../../models/kubernetesclusters.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 400, 401                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## createKubernetesCluster

Creates a new managed Kubernetes cluster. Maximum of 1 cluster per project.

Cluster names must follow Kubernetes naming rules: lowercase alphanumeric characters or hyphens, must start and end with an alphanumeric character, and be at most 63 characters long.


### Example Usage: Created

<!-- UsageSnippet language="typescript" operationID="create-kubernetes-cluster" method="post" path="/kubernetes_clusters" example="Created" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.createKubernetesCluster({
    data: {
      type: "kubernetes_clusters",
      attributes: {
        name: "my-cluster",
        projectId: "proj_6059EqYkOQj8p",
        site: "SAN3",
        plan: "c2-small-x86",
        sshKeys: [
          "ssh_VkE1DwV37dnZJ",
        ],
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
import { kubernetesClustersCreateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersCreateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersCreateKubernetesCluster(latitudesh, {
    data: {
      type: "kubernetes_clusters",
      attributes: {
        name: "my-cluster",
        projectId: "proj_6059EqYkOQj8p",
        site: "SAN3",
        plan: "c2-small-x86",
        sshKeys: [
          "ssh_VkE1DwV37dnZJ",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersCreateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: InvalidSshKeys

<!-- UsageSnippet language="typescript" operationID="create-kubernetes-cluster" method="post" path="/kubernetes_clusters" example="InvalidSshKeys" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.createKubernetesCluster({
    data: {
      type: "kubernetes_clusters",
      attributes: {
        projectId: "<id>",
        site: "<value>",
        plan: "<value>",
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
import { kubernetesClustersCreateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersCreateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersCreateKubernetesCluster(latitudesh, {
    data: {
      type: "kubernetes_clusters",
      attributes: {
        projectId: "<id>",
        site: "<value>",
        plan: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersCreateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: ValidationError

<!-- UsageSnippet language="typescript" operationID="create-kubernetes-cluster" method="post" path="/kubernetes_clusters" example="ValidationError" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.createKubernetesCluster({
    data: {
      type: "kubernetes_clusters",
      attributes: {
        projectId: "<id>",
        site: "<value>",
        plan: "<value>",
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
import { kubernetesClustersCreateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersCreateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersCreateKubernetesCluster(latitudesh, {
    data: {
      type: "kubernetes_clusters",
      attributes: {
        projectId: "<id>",
        site: "<value>",
        plan: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersCreateKubernetesCluster failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateKubernetesCluster](../../models/createkubernetescluster.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.KubernetesClusterCreateResponse](../../models/kubernetesclustercreateresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 400, 422                      | application/vnd.api+json      |
| errors.ErrorObject            | 503                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## listKubernetesAvailableVersions

Returns the list of available Kubernetes versions for cluster creation and upgrades. Versions are sourced from the RKE2 release channels and cached for 24 hours.

Each version object includes:
- `latest`: The full version string (e.g., `v1.35.3+rke2r1`)
- `minor`: The minor version number (e.g., `1.35`)

The API returns the latest 5 supported minor versions. When upgrading clusters, you can only upgrade one minor version at a time (e.g., from 1.34 to 1.35).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-kubernetes-available-versions" method="get" path="/kubernetes_clusters/available_versions" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.listKubernetesAvailableVersions();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { kubernetesClustersListKubernetesAvailableVersions } from "latitudesh-typescript-sdk/funcs/kubernetesClustersListKubernetesAvailableVersions.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersListKubernetesAvailableVersions(latitudesh);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersListKubernetesAvailableVersions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.KubernetesAvailableVersions](../../models/kubernetesavailableversions.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 401                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getKubernetesCluster

Retrieves detailed information about a Kubernetes cluster including its status, control plane, worker node details, and individual node information.


### Example Usage: Provisioning

<!-- UsageSnippet language="typescript" operationID="get-kubernetes-cluster" method="get" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="Provisioning" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.getKubernetesCluster({
    kubernetesClusterId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { kubernetesClustersGetKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersGetKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersGetKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersGetKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: Success

<!-- UsageSnippet language="typescript" operationID="get-kubernetes-cluster" method="get" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.getKubernetesCluster({
    kubernetesClusterId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { kubernetesClustersGetKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersGetKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersGetKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersGetKubernetesCluster failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetKubernetesClusterRequest](../../models/operations/getkubernetesclusterrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.KubernetesCluster](../../models/kubernetescluster.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 401, 404                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## deleteKubernetesCluster

Deletes a Kubernetes cluster. This action is irreversible and will destroy all cluster resources.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-kubernetes-cluster" method="delete" path="/kubernetes_clusters/{kubernetes_cluster_id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.kubernetesClusters.deleteKubernetesCluster({
    kubernetesClusterId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { kubernetesClustersDeleteKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersDeleteKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersDeleteKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("kubernetesClustersDeleteKubernetesCluster failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteKubernetesClusterRequest](../../models/operations/deletekubernetesclusterrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 401, 404, 422                 | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## updateKubernetesCluster

Updates a Kubernetes cluster by scaling nodes or upgrading the Kubernetes version. The cluster must be in `Provisioned` phase to accept updates.

## Scaling Operations

Exactly one of `worker_count` or `control_plane_count` must be provided per request. You cannot scale workers and control plane nodes in the same request.

When scaling up, the API validates that sufficient server stock is available for the requested delta (e.g., scaling from 2 to 5 workers checks for 3 available servers).

When scaling from 0 workers, you must provide a `worker_plan` since there is no existing configuration to inherit the plan from.

Control plane scaling has a minimum of 1 node. You cannot scale control plane nodes to zero.

## Version Upgrades

Provide a `kubernetes_version` parameter to upgrade the cluster to a new Kubernetes version. Version upgrades follow these rules:

- **No downgrades**: You cannot downgrade to a lower version than currently installed
- **One minor version at a time**: You can only upgrade one minor version at a time (e.g., from 1.34 to 1.35, not from 1.34 to 1.36)
- **Mutually exclusive**: Version upgrades cannot be combined with scaling operations in the same request
- **Available versions only**: The target version must be in the list returned by `GET /kubernetes_clusters/available_versions`

Returns 202 Accepted when an update operation is triggered. Poll the GET endpoint to monitor progress. Returns 200 OK if no change is needed (no-op).


### Example Usage: ControlPlaneUnchanged

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="ControlPlaneUnchanged" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: InvalidControlPlaneCountType

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="InvalidControlPlaneCountType" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: InvalidWorkerCountType

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="InvalidWorkerCountType" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: MissingParameter

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="MissingParameter" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: MissingScalingParameter

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="MissingScalingParameter" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: MutualExclusionViolation

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="MutualExclusionViolation" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: ScaleControlPlaneDown

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="ScaleControlPlaneDown" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          controlPlaneCount: 1,
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          controlPlaneCount: 1,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: ScaleControlPlaneUp

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="ScaleControlPlaneUp" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          controlPlaneCount: 3,
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          controlPlaneCount: 3,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: ScaleWorkersDown

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="ScaleWorkersDown" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          workerCount: 2,
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          workerCount: 2,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: ScaleWorkersFromZero

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="ScaleWorkersFromZero" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          workerCount: 3,
          workerPlan: "c3-small-x86",
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          workerCount: 3,
          workerPlan: "c3-small-x86",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: ScaleWorkersToZero

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="ScaleWorkersToZero" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          workerCount: 0,
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          workerCount: 0,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: ScaleWorkersUp

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="ScaleWorkersUp" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          workerCount: 5,
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          workerCount: 5,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: ScalingMutualExclusion

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="ScalingMutualExclusion" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: UpgradeVersion

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="UpgradeVersion" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          kubernetesVersion: "v1.35.0+rke2r1",
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {
          kubernetesVersion: "v1.35.0+rke2r1",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: VersionWithScaling

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="VersionWithScaling" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```
### Example Usage: WorkersUnchanged

<!-- UsageSnippet language="typescript" operationID="update-kubernetes-cluster" method="patch" path="/kubernetes_clusters/{kubernetes_cluster_id}" example="WorkersUnchanged" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.updateKubernetesCluster({
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
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
import { kubernetesClustersUpdateKubernetesCluster } from "latitudesh-typescript-sdk/funcs/kubernetesClustersUpdateKubernetesCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersUpdateKubernetesCluster(latitudesh, {
    kubernetesClusterId: "<id>",
    updateKubernetesCluster: {
      data: {
        type: "kubernetes_clusters",
        attributes: {},
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersUpdateKubernetesCluster failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateKubernetesClusterRequest](../../models/operations/updatekubernetesclusterrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.KubernetesClusterUpdateResponse](../../models/kubernetesclusterupdateresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 400, 403, 404, 422            | application/vnd.api+json      |
| errors.ErrorObject            | 503                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getKubernetesClusterKubeconfig

Retrieves the kubeconfig file for a Kubernetes cluster. The kubeconfig is only available once the cluster is fully provisioned.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-kubernetes-cluster-kubeconfig" method="get" path="/kubernetes_clusters/{kubernetes_cluster_id}/kubeconfig" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.kubernetesClusters.getKubernetesClusterKubeconfig({
    kubernetesClusterId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { kubernetesClustersGetKubernetesClusterKubeconfig } from "latitudesh-typescript-sdk/funcs/kubernetesClustersGetKubernetesClusterKubeconfig.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await kubernetesClustersGetKubernetesClusterKubeconfig(latitudesh, {
    kubernetesClusterId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kubernetesClustersGetKubernetesClusterKubeconfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetKubernetesClusterKubeconfigRequest](../../models/operations/getkubernetesclusterkubeconfigrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.KubernetesClusterKubeconfig](../../models/kubernetesclusterkubeconfig.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 401, 404                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |