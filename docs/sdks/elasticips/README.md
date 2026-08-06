# ElasticIps

## Overview

### Available Operations

* [listElasticIps](#listelasticips) - List Elastic IPs
* [createElasticIp](#createelasticip) - Create an Elastic IP
* [getElasticIp](#getelasticip) - Retrieve an Elastic IP
* [deleteElasticIp](#deleteelasticip) - Release an Elastic IP
* [updateElasticIp](#updateelasticip) - Move an Elastic IP
* [listElasticIpBgpSessions](#listelasticipbgpsessions) - List BGP sessions
* [createElasticIpBgpSession](#createelasticipbgpsession) - Create a BGP session
* [getElasticIpBgpSession](#getelasticipbgpsession) - Retrieve a BGP session
* [deleteElasticIpBgpSession](#deleteelasticipbgpsession) - Delete a BGP session

## listElasticIps

List all Elastic IPs for the authenticated team. Elastic IPs are static public IP addresses that can be assigned to servers and moved between servers within the same project.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-elastic-ips" method="get" path="/elastic_ips" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.listElasticIps({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { elasticIpsListElasticIps } from "latitudesh-typescript-sdk/funcs/elasticIpsListElasticIps.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsListElasticIps(latitudesh, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("elasticIpsListElasticIps failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListElasticIpsRequest](../../models/operations/listelasticipsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListElasticIpsResponse](../../models/operations/listelasticipsresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## createElasticIp

Creates a new Elastic IP and assigns it to the specified server. The IP is provisioned asynchronously—the response will show status `configuring` and the `id` will be `null` until provisioning completes. Currently only IPv4 /32 addresses in routed mode are supported.


### Example Usage: Accepted

<!-- UsageSnippet language="typescript" operationID="create-elastic-ip" method="post" path="/elastic_ips" example="Accepted" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.createElasticIp({
    data: {
      type: "elastic_ips",
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
import { elasticIpsCreateElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsCreateElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsCreateElasticIp(latitudesh, {
    data: {
      type: "elastic_ips",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsCreateElasticIp failed:", res.error);
  }
}

run();
```
### Example Usage: Create

<!-- UsageSnippet language="typescript" operationID="create-elastic-ip" method="post" path="/elastic_ips" example="Create" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.createElasticIp({
    data: {
      type: "elastic_ips",
      attributes: {
        serverId: "sv_2GmAlJ6BXlK1a",
        projectId: "proj_AoW6vRnwkvLn0",
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
import { elasticIpsCreateElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsCreateElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsCreateElasticIp(latitudesh, {
    data: {
      type: "elastic_ips",
      attributes: {
        serverId: "sv_2GmAlJ6BXlK1a",
        projectId: "proj_AoW6vRnwkvLn0",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsCreateElasticIp failed:", res.error);
  }
}

run();
```
### Example Usage: FeatureNotEnabled

<!-- UsageSnippet language="typescript" operationID="create-elastic-ip" method="post" path="/elastic_ips" example="FeatureNotEnabled" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.createElasticIp({
    data: {
      type: "elastic_ips",
      attributes: {
        serverId: "<id>",
        projectId: "<id>",
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
import { elasticIpsCreateElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsCreateElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsCreateElasticIp(latitudesh, {
    data: {
      type: "elastic_ips",
      attributes: {
        serverId: "<id>",
        projectId: "<id>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsCreateElasticIp failed:", res.error);
  }
}

run();
```
### Example Usage: IpAllocationFailed

<!-- UsageSnippet language="typescript" operationID="create-elastic-ip" method="post" path="/elastic_ips" example="IpAllocationFailed" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.createElasticIp({
    data: {
      type: "elastic_ips",
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
import { elasticIpsCreateElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsCreateElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsCreateElasticIp(latitudesh, {
    data: {
      type: "elastic_ips",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsCreateElasticIp failed:", res.error);
  }
}

run();
```
### Example Usage: ServerNetworkIncompatible

<!-- UsageSnippet language="typescript" operationID="create-elastic-ip" method="post" path="/elastic_ips" example="ServerNetworkIncompatible" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.createElasticIp({
    data: {
      type: "elastic_ips",
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
import { elasticIpsCreateElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsCreateElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsCreateElasticIp(latitudesh, {
    data: {
      type: "elastic_ips",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsCreateElasticIp failed:", res.error);
  }
}

run();
```
### Example Usage: ServerNotInProject

<!-- UsageSnippet language="typescript" operationID="create-elastic-ip" method="post" path="/elastic_ips" example="ServerNotInProject" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.createElasticIp({
    data: {
      type: "elastic_ips",
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
import { elasticIpsCreateElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsCreateElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsCreateElasticIp(latitudesh, {
    data: {
      type: "elastic_ips",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsCreateElasticIp failed:", res.error);
  }
}

run();
```
### Example Usage: SiteNotSupported

<!-- UsageSnippet language="typescript" operationID="create-elastic-ip" method="post" path="/elastic_ips" example="SiteNotSupported" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.createElasticIp({
    data: {
      type: "elastic_ips",
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
import { elasticIpsCreateElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsCreateElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsCreateElasticIp(latitudesh, {
    data: {
      type: "elastic_ips",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsCreateElasticIp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateElasticIp](../../models/createelasticip.md)                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ElasticIp](../../models/elasticip.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 422                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getElasticIp

Returns a single Elastic IP by its ID.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-elastic-ip" method="get" path="/elastic_ips/{elastic_ip_id}" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.getElasticIp({
    elasticIpId: "eip_KeQbB4BoO6x10",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { elasticIpsGetElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsGetElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsGetElasticIp(latitudesh, {
    elasticIpId: "eip_KeQbB4BoO6x10",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsGetElasticIp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetElasticIpRequest](../../models/operations/getelasticiprequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ElasticIp](../../models/elasticip.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 404                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## deleteElasticIp

Releases an Elastic IP, returning it to the available pool. The IP will transition to `releasing` status before being fully removed. Only Elastic IPs with status `active` or `error` can be released.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-elastic-ip" method="delete" path="/elastic_ips/{elastic_ip_id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.elasticIps.deleteElasticIp({
    elasticIpId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { elasticIpsDeleteElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsDeleteElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsDeleteElasticIp(latitudesh, {
    elasticIpId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("elasticIpsDeleteElasticIp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteElasticIpRequest](../../models/operations/deleteelasticiprequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 404, 422                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## updateElasticIp

Moves an Elastic IP to a different server within the same project and site. The reassignment is performed asynchronously. The Elastic IP must be in `active` status, the target server must belong to the same project, and the target server must be in the same site as the currently assigned server.


### Example Usage: FeatureNotEnabled

<!-- UsageSnippet language="typescript" operationID="update-elastic-ip" method="patch" path="/elastic_ips/{elastic_ip_id}" example="FeatureNotEnabled" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.updateElasticIp({
    elasticIpId: "<id>",
    updateElasticIp: {
      data: {
        type: "elastic_ips",
        attributes: {
          serverId: "<id>",
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
import { elasticIpsUpdateElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsUpdateElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsUpdateElasticIp(latitudesh, {
    elasticIpId: "<id>",
    updateElasticIp: {
      data: {
        type: "elastic_ips",
        attributes: {
          serverId: "<id>",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsUpdateElasticIp failed:", res.error);
  }
}

run();
```
### Example Usage: Move

<!-- UsageSnippet language="typescript" operationID="update-elastic-ip" method="patch" path="/elastic_ips/{elastic_ip_id}" example="Move" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.updateElasticIp({
    elasticIpId: "<id>",
    updateElasticIp: {
      data: {
        type: "elastic_ips",
        attributes: {
          serverId: "sv_oDEBlwBGRO2me",
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
import { elasticIpsUpdateElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsUpdateElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsUpdateElasticIp(latitudesh, {
    elasticIpId: "<id>",
    updateElasticIp: {
      data: {
        type: "elastic_ips",
        attributes: {
          serverId: "sv_oDEBlwBGRO2me",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsUpdateElasticIp failed:", res.error);
  }
}

run();
```
### Example Usage: Success

<!-- UsageSnippet language="typescript" operationID="update-elastic-ip" method="patch" path="/elastic_ips/{elastic_ip_id}" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.updateElasticIp({
    elasticIpId: "eip_KeQbB4BoO6x10",
    updateElasticIp: {
      data: {
        type: "elastic_ips",
        attributes: {
          serverId: "<id>",
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
import { elasticIpsUpdateElasticIp } from "latitudesh-typescript-sdk/funcs/elasticIpsUpdateElasticIp.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsUpdateElasticIp(latitudesh, {
    elasticIpId: "eip_KeQbB4BoO6x10",
    updateElasticIp: {
      data: {
        type: "elastic_ips",
        attributes: {
          serverId: "<id>",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsUpdateElasticIp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateElasticIpRequest](../../models/operations/updateelasticiprequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ElasticIp](../../models/elasticip.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 404, 422                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## listElasticIpBgpSessions

List the BGP sessions announcing an elastic IP

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-elastic-ip-bgp-sessions" method="get" path="/elastic_ips/{elastic_ip_id}/bgp_sessions" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.listElasticIpBgpSessions({
    elasticIpId: "ueip_v9BVDaGvdRm1W",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { elasticIpsListElasticIpBgpSessions } from "latitudesh-typescript-sdk/funcs/elasticIpsListElasticIpBgpSessions.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsListElasticIpBgpSessions(latitudesh, {
    elasticIpId: "ueip_v9BVDaGvdRm1W",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsListElasticIpBgpSessions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListElasticIpBgpSessionsRequest](../../models/operations/listelasticipbgpsessionsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BgpSessions](../../models/bgpsessions.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## createElasticIpBgpSession

Announce an elastic IP from a server over BGP

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-elastic-ip-bgp-session" method="post" path="/elastic_ips/{elastic_ip_id}/bgp_sessions" example="Accepted" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.createElasticIpBgpSession({
    elasticIpId: "ueip_059EqY7kOQj8p",
    createBgpSession: {
      data: {
        type: "bgp_sessions",
        attributes: {
          serverId: "sv_A05EdQp4OvKYQ",
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
import { elasticIpsCreateElasticIpBgpSession } from "latitudesh-typescript-sdk/funcs/elasticIpsCreateElasticIpBgpSession.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsCreateElasticIpBgpSession(latitudesh, {
    elasticIpId: "ueip_059EqY7kOQj8p",
    createBgpSession: {
      data: {
        type: "bgp_sessions",
        attributes: {
          serverId: "sv_A05EdQp4OvKYQ",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsCreateElasticIpBgpSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateElasticIpBgpSessionRequest](../../models/operations/createelasticipbgpsessionrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BgpSession](../../models/bgpsession.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getElasticIpBgpSession

Retrieve a BGP session announcing an elastic IP

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-elastic-ip-bgp-session" method="get" path="/elastic_ips/{elastic_ip_id}/bgp_sessions/{id}" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.elasticIps.getElasticIpBgpSession({
    elasticIpId: "ueip_e8pKq015DWAob",
    id: "bgps_w49QDB9PqagKb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { elasticIpsGetElasticIpBgpSession } from "latitudesh-typescript-sdk/funcs/elasticIpsGetElasticIpBgpSession.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsGetElasticIpBgpSession(latitudesh, {
    elasticIpId: "ueip_e8pKq015DWAob",
    id: "bgps_w49QDB9PqagKb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("elasticIpsGetElasticIpBgpSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetElasticIpBgpSessionRequest](../../models/operations/getelasticipbgpsessionrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BgpSession](../../models/bgpsession.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## deleteElasticIpBgpSession

Stop announcing an elastic IP from a server

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-elastic-ip-bgp-session" method="delete" path="/elastic_ips/{elastic_ip_id}/bgp_sessions/{id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.elasticIps.deleteElasticIpBgpSession({
    elasticIpId: "<id>",
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { elasticIpsDeleteElasticIpBgpSession } from "latitudesh-typescript-sdk/funcs/elasticIpsDeleteElasticIpBgpSession.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await elasticIpsDeleteElasticIpBgpSession(latitudesh, {
    elasticIpId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("elasticIpsDeleteElasticIpBgpSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteElasticIpBgpSessionRequest](../../models/operations/deleteelasticipbgpsessionrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |