# Lks

## Overview

### Available Operations

* [listLksClusters](#listlksclusters) - List LKS clusters
* [createLksCluster](#createlkscluster) - Create an LKS cluster
* [getLksCluster](#getlkscluster) - Get an LKS cluster
* [deleteLksCluster](#deletelkscluster) - Delete an LKS cluster
* [updateLksCluster](#updatelkscluster) - Update an LKS cluster
* [getLksClusterKubeconfig](#getlksclusterkubeconfig) - Get the cluster kubeconfig
* [listLksNodePools](#listlksnodepools) - List node pools
* [createLksNodePool](#createlksnodepool) - Create a node pool
* [getLksNodePool](#getlksnodepool) - Get a node pool
* [deleteLksNodePool](#deletelksnodepool) - Delete a node pool
* [updateLksNodePool](#updatelksnodepool) - Update a node pool
* [listLksAvailableVersions](#listlksavailableversions) - List available Kubernetes versions
* [listLksSites](#listlkssites) - List sites available for LKS

## listLksClusters

Lists every LKS cluster of a project. The response is not paginated; `meta.total` is the number of clusters returned.


### Example Usage: Empty

<!-- UsageSnippet language="typescript" operationID="list-lks-clusters" method="get" path="/lks/clusters" example="Empty" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.listLksClusters({
    projectId: "proj_6059EqYkOQj8p",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksListLKSClusters } from "latitudesh-typescript-sdk/funcs/lksListLKSClusters.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksListLKSClusters(latitudesh, {
    projectId: "proj_6059EqYkOQj8p",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksListLKSClusters failed:", res.error);
  }
}

run();
```
### Example Usage: OneCluster

<!-- UsageSnippet language="typescript" operationID="list-lks-clusters" method="get" path="/lks/clusters" example="OneCluster" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.listLksClusters({
    projectId: "proj_6059EqYkOQj8p",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksListLKSClusters } from "latitudesh-typescript-sdk/funcs/lksListLKSClusters.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksListLKSClusters(latitudesh, {
    projectId: "proj_6059EqYkOQj8p",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksListLKSClusters failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLksClustersRequest](../../models/operations/listlksclustersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LksClusters](../../models/lksclusters.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404                      | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## createLksCluster

Creates an LKS cluster. The cluster is the control plane only — worker capacity is added separately through node pools (`POST /lks/clusters/{cluster_id}/nodepools`).

`site` must be one of the slugs returned by `GET /lks/sites`, and `kubernetes_version` must be a patch listed by `GET /lks/available_versions` with `available_for_creation: true`.

The cluster is returned immediately with `status: "provisioning"`. Poll `GET /lks/clusters/{id}` until `status` is `ready`, then fetch the kubeconfig.


### Example Usage: InsufficientPermissions

<!-- UsageSnippet language="typescript" operationID="create-lks-cluster" method="post" path="/lks/clusters" example="InsufficientPermissions" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.createLksCluster({
    data: {
      type: "lks_clusters",
      attributes: {
        name: "<value>",
        projectId: "<id>",
        site: "<value>",
        kubernetesVersion: "1.36.3",
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
import { lksCreateLKSCluster } from "latitudesh-typescript-sdk/funcs/lksCreateLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksCreateLKSCluster(latitudesh, {
    data: {
      type: "lks_clusters",
      attributes: {
        name: "<value>",
        projectId: "<id>",
        site: "<value>",
        kubernetesVersion: "1.36.3",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksCreateLKSCluster failed:", res.error);
  }
}

run();
```
### Example Usage: Minimal

<!-- UsageSnippet language="typescript" operationID="create-lks-cluster" method="post" path="/lks/clusters" example="Minimal" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.createLksCluster({
    data: {
      type: "lks_clusters",
      attributes: {
        name: "production",
        projectId: "proj_6059EqYkOQj8p",
        site: "DAL2",
        kubernetesVersion: "1.36.3",
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
import { lksCreateLKSCluster } from "latitudesh-typescript-sdk/funcs/lksCreateLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksCreateLKSCluster(latitudesh, {
    data: {
      type: "lks_clusters",
      attributes: {
        name: "production",
        projectId: "proj_6059EqYkOQj8p",
        site: "DAL2",
        kubernetesVersion: "1.36.3",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksCreateLKSCluster failed:", res.error);
  }
}

run();
```
### Example Usage: Provisioning

<!-- UsageSnippet language="typescript" operationID="create-lks-cluster" method="post" path="/lks/clusters" example="Provisioning" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.createLksCluster({
    data: {
      type: "lks_clusters",
      attributes: {
        name: "<value>",
        projectId: "<id>",
        site: "<value>",
        kubernetesVersion: "1.36.3",
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
import { lksCreateLKSCluster } from "latitudesh-typescript-sdk/funcs/lksCreateLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksCreateLKSCluster(latitudesh, {
    data: {
      type: "lks_clusters",
      attributes: {
        name: "<value>",
        projectId: "<id>",
        site: "<value>",
        kubernetesVersion: "1.36.3",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksCreateLKSCluster failed:", res.error);
  }
}

run();
```
### Example Usage: WithNetworkOverrides

<!-- UsageSnippet language="typescript" operationID="create-lks-cluster" method="post" path="/lks/clusters" example="WithNetworkOverrides" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.createLksCluster({
    data: {
      type: "lks_clusters",
      attributes: {
        name: "production",
        projectId: "proj_6059EqYkOQj8p",
        site: "DAL2",
        kubernetesVersion: "1.36.3",
        description: "Main production cluster",
        network: {
          podCidrs: [
            "10.70.0.0/16",
          ],
          serviceCidrs: [
            "10.71.0.0/16",
          ],
          nodeCidrs: [
            "10.72.0.0/24",
          ],
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
import { lksCreateLKSCluster } from "latitudesh-typescript-sdk/funcs/lksCreateLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksCreateLKSCluster(latitudesh, {
    data: {
      type: "lks_clusters",
      attributes: {
        name: "production",
        projectId: "proj_6059EqYkOQj8p",
        site: "DAL2",
        kubernetesVersion: "1.36.3",
        description: "Main production cluster",
        network: {
          podCidrs: [
            "10.70.0.0/16",
          ],
          serviceCidrs: [
            "10.71.0.0/16",
          ],
          nodeCidrs: [
            "10.72.0.0/24",
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksCreateLKSCluster failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateLksCluster](../../models/createlkscluster.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LksCluster](../../models/lkscluster.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404, 422                 | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getLksCluster

Retrieves a single LKS cluster.

`status` is an open enum sourced from the platform controller — `provisioning`, `ready`, `updating`, `scaling`, `upgrading`, `paused`, `deleting` and `deleted` are the values in use today, and new ones may appear without notice. `reason` and `message` carry the machine-readable and human-readable detail behind the current `status`.


### Example Usage: Provisioning

<!-- UsageSnippet language="typescript" operationID="get-lks-cluster" method="get" path="/lks/clusters/{id}" example="Provisioning" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.getLksCluster({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksGetLKSCluster } from "latitudesh-typescript-sdk/funcs/lksGetLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksGetLKSCluster(latitudesh, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksGetLKSCluster failed:", res.error);
  }
}

run();
```
### Example Usage: Ready

<!-- UsageSnippet language="typescript" operationID="get-lks-cluster" method="get" path="/lks/clusters/{id}" example="Ready" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.getLksCluster({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksGetLKSCluster } from "latitudesh-typescript-sdk/funcs/lksGetLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksGetLKSCluster(latitudesh, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksGetLKSCluster failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLksClusterRequest](../../models/operations/getlksclusterrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LksCluster](../../models/lkscluster.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404                      | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## deleteLksCluster

Marks the cluster for deletion. The call returns as soon as the tombstone is written; the platform then tears the cluster and its node pools down asynchronously. A cluster that is already deleted, or that is paused, rejects the request.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-lks-cluster" method="delete" path="/lks/clusters/{id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.lks.deleteLksCluster({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksDeleteLKSCluster } from "latitudesh-typescript-sdk/funcs/lksDeleteLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksDeleteLKSCluster(latitudesh, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("lksDeleteLKSCluster failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteLksClusterRequest](../../models/operations/deletelksclusterrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404, 409                 | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## updateLksCluster

Renames a cluster, edits its description, or upgrades the control plane. At least one of `name`, `description` or `kubernetes_version` must be provided.

Setting a newer `kubernetes_version` consents to a control-plane upgrade; the value must be a patch listed by `GET /lks/available_versions` with `available_for_upgrade: true` and must not be lower than the current one. Node pools are upgraded separately and must never run a patch newer than the control plane.

The cluster must be idle: a cluster that is provisioning, updating, scaling, upgrading, paused or deleting rejects the request with 409.


### Example Usage: InsufficientPermissions

<!-- UsageSnippet language="typescript" operationID="update-lks-cluster" method="patch" path="/lks/clusters/{id}" example="InsufficientPermissions" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.updateLksCluster({
    id: "<id>",
    updateLksCluster: {
      data: {
        type: "lks_clusters",
        attributes: {
          kubernetesVersion: "1.37.2",
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
import { lksUpdateLKSCluster } from "latitudesh-typescript-sdk/funcs/lksUpdateLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksUpdateLKSCluster(latitudesh, {
    id: "<id>",
    updateLksCluster: {
      data: {
        type: "lks_clusters",
        attributes: {
          kubernetesVersion: "1.37.2",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksUpdateLKSCluster failed:", res.error);
  }
}

run();
```
### Example Usage: Rename

<!-- UsageSnippet language="typescript" operationID="update-lks-cluster" method="patch" path="/lks/clusters/{id}" example="Rename" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.updateLksCluster({
    id: "<id>",
    updateLksCluster: {
      data: {
        type: "lks_clusters",
        attributes: {
          name: "production-eu",
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
import { lksUpdateLKSCluster } from "latitudesh-typescript-sdk/funcs/lksUpdateLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksUpdateLKSCluster(latitudesh, {
    id: "<id>",
    updateLksCluster: {
      data: {
        type: "lks_clusters",
        attributes: {
          name: "production-eu",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksUpdateLKSCluster failed:", res.error);
  }
}

run();
```
### Example Usage: UpgradeControlPlane

<!-- UsageSnippet language="typescript" operationID="update-lks-cluster" method="patch" path="/lks/clusters/{id}" example="UpgradeControlPlane" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.updateLksCluster({
    id: "<id>",
    updateLksCluster: {
      data: {
        type: "lks_clusters",
        attributes: {
          kubernetesVersion: "1.37.2",
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
import { lksUpdateLKSCluster } from "latitudesh-typescript-sdk/funcs/lksUpdateLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksUpdateLKSCluster(latitudesh, {
    id: "<id>",
    updateLksCluster: {
      data: {
        type: "lks_clusters",
        attributes: {
          kubernetesVersion: "1.37.2",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksUpdateLKSCluster failed:", res.error);
  }
}

run();
```
### Example Usage: Upgrading

<!-- UsageSnippet language="typescript" operationID="update-lks-cluster" method="patch" path="/lks/clusters/{id}" example="Upgrading" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.updateLksCluster({
    id: "<id>",
    updateLksCluster: {
      data: {
        type: "lks_clusters",
        attributes: {
          kubernetesVersion: "1.37.2",
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
import { lksUpdateLKSCluster } from "latitudesh-typescript-sdk/funcs/lksUpdateLKSCluster.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksUpdateLKSCluster(latitudesh, {
    id: "<id>",
    updateLksCluster: {
      data: {
        type: "lks_clusters",
        attributes: {
          kubernetesVersion: "1.37.2",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksUpdateLKSCluster failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLksClusterRequest](../../models/operations/updatelksclusterrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LksCluster](../../models/lkscluster.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404, 409, 422            | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getLksClusterKubeconfig

Returns the kubeconfig for the cluster. It only exists once the control plane is up, so this endpoint answers 409 `NOT_READY` while the cluster is still provisioning — poll `GET /lks/clusters/{id}` until `kubeconfig_url` is set.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-lks-cluster-kubeconfig" method="get" path="/lks/clusters/{id}/kubeconfig" example="Ready" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.getLksClusterKubeconfig({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksGetLKSClusterKubeconfig } from "latitudesh-typescript-sdk/funcs/lksGetLKSClusterKubeconfig.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksGetLKSClusterKubeconfig(latitudesh, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksGetLKSClusterKubeconfig failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLksClusterKubeconfigRequest](../../models/operations/getlksclusterkubeconfigrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LksClusterKubeconfig](../../models/lksclusterkubeconfig.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404, 409                 | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## listLksNodePools

Lists every node pool of an LKS cluster. The response is not paginated; `meta.total` is the number of node pools returned.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-lks-node-pools" method="get" path="/lks/clusters/{cluster_id}/nodepools" example="OnePool" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.listLksNodePools({
    clusterId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksListLKSNodePools } from "latitudesh-typescript-sdk/funcs/lksListLKSNodePools.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksListLKSNodePools(latitudesh, {
    clusterId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksListLKSNodePools failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLksNodePoolsRequest](../../models/operations/listlksnodepoolsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LksNodePools](../../models/lksnodepools.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404                      | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## createLksNodePool

Adds a node pool to an LKS cluster. The platform provisions `count` servers of `plan` from stock, so both fields are required.

`kubernetes_version` defaults to the control-plane patch and may never be newer than it. `max_pods_per_node` is set once, here — it cannot be changed later.


### Example Usage: InsufficientPermissions

<!-- UsageSnippet language="typescript" operationID="create-lks-node-pool" method="post" path="/lks/clusters/{cluster_id}/nodepools" example="InsufficientPermissions" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.createLksNodePool({
    clusterId: "<id>",
    createLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          plan: "<value>",
          count: 973849,
          kubernetesVersion: "1.36.3",
          maxPodsPerNode: 110,
          taints: [
            {
              key: "dedicated",
              value: "gpu",
              effect: "NoSchedule",
            },
          ],
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
import { lksCreateLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksCreateLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksCreateLKSNodePool(latitudesh, {
    clusterId: "<id>",
    createLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          plan: "<value>",
          count: 973849,
          kubernetesVersion: "1.36.3",
          maxPodsPerNode: 110,
          taints: [
            {
              key: "dedicated",
              value: "gpu",
              effect: "NoSchedule",
            },
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksCreateLKSNodePool failed:", res.error);
  }
}

run();
```
### Example Usage: OnDemand

<!-- UsageSnippet language="typescript" operationID="create-lks-node-pool" method="post" path="/lks/clusters/{cluster_id}/nodepools" example="OnDemand" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.createLksNodePool({
    clusterId: "<id>",
    createLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          plan: "c2-small-x86",
          count: 2,
          name: "pool-a",
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
import { lksCreateLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksCreateLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksCreateLKSNodePool(latitudesh, {
    clusterId: "<id>",
    createLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          plan: "c2-small-x86",
          count: 2,
          name: "pool-a",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksCreateLKSNodePool failed:", res.error);
  }
}

run();
```
### Example Usage: Provisioning

<!-- UsageSnippet language="typescript" operationID="create-lks-node-pool" method="post" path="/lks/clusters/{cluster_id}/nodepools" example="Provisioning" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.createLksNodePool({
    clusterId: "<id>",
    createLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          plan: "<value>",
          count: 973849,
          kubernetesVersion: "1.36.3",
          maxPodsPerNode: 110,
          taints: [
            {
              key: "dedicated",
              value: "gpu",
              effect: "NoSchedule",
            },
          ],
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
import { lksCreateLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksCreateLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksCreateLKSNodePool(latitudesh, {
    clusterId: "<id>",
    createLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          plan: "<value>",
          count: 973849,
          kubernetesVersion: "1.36.3",
          maxPodsPerNode: 110,
          taints: [
            {
              key: "dedicated",
              value: "gpu",
              effect: "NoSchedule",
            },
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksCreateLKSNodePool failed:", res.error);
  }
}

run();
```
### Example Usage: WithLabelsAndTaints

<!-- UsageSnippet language="typescript" operationID="create-lks-node-pool" method="post" path="/lks/clusters/{cluster_id}/nodepools" example="WithLabelsAndTaints" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.createLksNodePool({
    clusterId: "<id>",
    createLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          plan: "g3-xlarge-x86",
          count: 3,
          maxPodsPerNode: 250,
          name: "gpu",
          labels: {
            "workload": "training",
          },
          taints: [
            {
              key: "dedicated",
              value: "gpu",
              effect: "NoSchedule",
            },
          ],
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
import { lksCreateLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksCreateLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksCreateLKSNodePool(latitudesh, {
    clusterId: "<id>",
    createLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          plan: "g3-xlarge-x86",
          count: 3,
          maxPodsPerNode: 250,
          name: "gpu",
          labels: {
            "workload": "training",
          },
          taints: [
            {
              key: "dedicated",
              value: "gpu",
              effect: "NoSchedule",
            },
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksCreateLKSNodePool failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLksNodePoolRequest](../../models/operations/createlksnodepoolrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LksNodePool](../../models/lksnodepool.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404, 422                 | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getLksNodePool

Retrieves a single node pool of an LKS cluster. `ready_nodes` reports how many of the pool's `count` nodes have joined the cluster.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-lks-node-pool" method="get" path="/lks/clusters/{cluster_id}/nodepools/{id}" example="Ready" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.getLksNodePool({
    clusterId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksGetLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksGetLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksGetLKSNodePool(latitudesh, {
    clusterId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksGetLKSNodePool failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLksNodePoolRequest](../../models/operations/getlksnodepoolrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LksNodePool](../../models/lksnodepool.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404                      | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## deleteLksNodePool

Marks the node pool for deletion. The call returns as soon as the tombstone is written; the platform then drains and releases the nodes asynchronously.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-lks-node-pool" method="delete" path="/lks/clusters/{cluster_id}/nodepools/{id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.lks.deleteLksNodePool({
    clusterId: "<id>",
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksDeleteLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksDeleteLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksDeleteLKSNodePool(latitudesh, {
    clusterId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("lksDeleteLKSNodePool failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteLksNodePoolRequest](../../models/operations/deletelksnodepoolrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404, 409                 | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## updateLksNodePool

Scales, renames, upgrades or re-labels a node pool. At least one attribute must be provided.

`labels` and `taints` are declarative replacements, not merges: omit the field to leave it untouched, send the whole map/list to replace it, or send `{}` / `[]` to clear it.

A newer `kubernetes_version` rolls a node-recreating upgrade; it must not be lower than the pool's current patch nor newer than the control-plane patch. `max_pods_per_node` is immutable — a PATCH that carries it is rejected with 422 even if the value is unchanged.

The node pool must be idle: one that is provisioning, updating, scaling, upgrading, paused or deleting rejects the request with 409.


### Example Usage: ClearTaints

<!-- UsageSnippet language="typescript" operationID="update-lks-node-pool" method="patch" path="/lks/clusters/{cluster_id}/nodepools/{id}" example="ClearTaints" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.updateLksNodePool({
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          taints: [],
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
import { lksUpdateLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksUpdateLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksUpdateLKSNodePool(latitudesh, {
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          taints: [],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksUpdateLKSNodePool failed:", res.error);
  }
}

run();
```
### Example Usage: InsufficientPermissions

<!-- UsageSnippet language="typescript" operationID="update-lks-node-pool" method="patch" path="/lks/clusters/{cluster_id}/nodepools/{id}" example="InsufficientPermissions" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.updateLksNodePool({
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          taints: [
            {
              key: "dedicated",
              value: "gpu",
              effect: "NoSchedule",
            },
          ],
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
import { lksUpdateLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksUpdateLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksUpdateLKSNodePool(latitudesh, {
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          taints: [
            {
              key: "dedicated",
              value: "gpu",
              effect: "NoSchedule",
            },
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksUpdateLKSNodePool failed:", res.error);
  }
}

run();
```
### Example Usage: ReplaceLabels

<!-- UsageSnippet language="typescript" operationID="update-lks-node-pool" method="patch" path="/lks/clusters/{cluster_id}/nodepools/{id}" example="ReplaceLabels" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.updateLksNodePool({
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          labels: {
            "env": "prod",
          },
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
import { lksUpdateLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksUpdateLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksUpdateLKSNodePool(latitudesh, {
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          labels: {
            "env": "prod",
          },
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksUpdateLKSNodePool failed:", res.error);
  }
}

run();
```
### Example Usage: Scale

<!-- UsageSnippet language="typescript" operationID="update-lks-node-pool" method="patch" path="/lks/clusters/{cluster_id}/nodepools/{id}" example="Scale" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.updateLksNodePool({
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          count: 4,
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
import { lksUpdateLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksUpdateLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksUpdateLKSNodePool(latitudesh, {
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          count: 4,
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksUpdateLKSNodePool failed:", res.error);
  }
}

run();
```
### Example Usage: Scaling

<!-- UsageSnippet language="typescript" operationID="update-lks-node-pool" method="patch" path="/lks/clusters/{cluster_id}/nodepools/{id}" example="Scaling" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.updateLksNodePool({
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          taints: [
            {
              key: "dedicated",
              value: "gpu",
              effect: "NoSchedule",
            },
          ],
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
import { lksUpdateLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksUpdateLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksUpdateLKSNodePool(latitudesh, {
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          taints: [
            {
              key: "dedicated",
              value: "gpu",
              effect: "NoSchedule",
            },
          ],
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksUpdateLKSNodePool failed:", res.error);
  }
}

run();
```
### Example Usage: Upgrade

<!-- UsageSnippet language="typescript" operationID="update-lks-node-pool" method="patch" path="/lks/clusters/{cluster_id}/nodepools/{id}" example="Upgrade" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.updateLksNodePool({
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          kubernetesVersion: "1.36.3",
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
import { lksUpdateLKSNodePool } from "latitudesh-typescript-sdk/funcs/lksUpdateLKSNodePool.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksUpdateLKSNodePool(latitudesh, {
    clusterId: "<id>",
    id: "<id>",
    updateLksNodePool: {
      data: {
        type: "lks_node_pools",
        attributes: {
          kubernetesVersion: "1.36.3",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksUpdateLKSNodePool failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLksNodePoolRequest](../../models/operations/updatelksnodepoolrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LksNodePool](../../models/lksnodepool.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404, 409, 422            | application/vnd.api+json      |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## listLksAvailableVersions

Lists the Kubernetes patches the platform offers, with their lifecycle flags. Use a version with `available_for_creation: true` when creating a cluster or a node pool, and one with `available_for_upgrade: true` when upgrading. Exactly one entry has `default: true`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-lks-available-versions" method="get" path="/lks/available_versions" example="TwoVersions" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.listLksAvailableVersions();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksListLKSAvailableVersions } from "latitudesh-typescript-sdk/funcs/lksListLKSAvailableVersions.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksListLKSAvailableVersions(latitudesh);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksListLKSAvailableVersions failed:", res.error);
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

**Promise\<[models.LksKubernetesVersions](../../models/lkskubernetesversions.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## listLksSites

Lists the sites that can host an LKS cluster, one entry per site. Pass an entry's `id` (the site slug) as `site` when creating a cluster. `country` is null when the underlying site has no region assigned.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-lks-sites" method="get" path="/lks/sites" example="TwoSites" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.lks.listLksSites();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { lksListLKSSites } from "latitudesh-typescript-sdk/funcs/lksListLKSSites.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await lksListLKSSites(latitudesh);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("lksListLKSSites failed:", res.error);
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

**Promise\<[models.LksSites](../../models/lkssites.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 502                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |