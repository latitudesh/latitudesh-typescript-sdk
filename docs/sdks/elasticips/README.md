# ElasticIps

## Overview

### Available Operations

* [listElasticIps](#listelasticips) - List Elastic IPs
* [createElasticIp](#createelasticip) - Create an Elastic IP
* [getElasticIp](#getelasticip) - Retrieve an Elastic IP
* [deleteElasticIp](#deleteelasticip) - Release an Elastic IP
* [updateElasticIp](#updateelasticip) - Move an Elastic IP

## listElasticIps

List all Elastic IPs for the authenticated team. Elastic IPs are static public IP addresses that can be assigned to servers and moved between servers within the same project.

**Note:** This feature requires the `elastic_ips` feature flag to be enabled for your team. When the flag is disabled, the endpoint returns an empty list.


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

Creates a new Elastic IP and assigns it to the specified server. The IP is provisioned asynchronously—the response will show status `configuring` and the `id` will be `null` until provisioning completes.

**Note:** This feature requires the `elastic_ips` feature flag to be enabled for your team. Currently only IPv4 /32 addresses in routed mode are supported.


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
      attributes: {
        projectId: "<id>",
        serverId: "<id>",
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
        projectId: "<id>",
        serverId: "<id>",
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
        projectId: "proj_AoW6vRnwkvLn0",
        serverId: "sv_2GmAlJ6BXlK1a",
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
        projectId: "proj_AoW6vRnwkvLn0",
        serverId: "sv_2GmAlJ6BXlK1a",
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
        projectId: "<id>",
        serverId: "<id>",
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
        projectId: "<id>",
        serverId: "<id>",
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
| errors.ErrorObject            | 403, 422                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getElasticIp

Returns a single Elastic IP by its ID.

**Note:** This feature requires the `elastic_ips` feature flag to be enabled for your team.


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
| errors.ErrorObject            | 403, 404                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## deleteElasticIp

Releases an Elastic IP, returning it to the available pool. The IP will transition to `releasing` status before being fully removed.

**Note:** This feature requires the `elastic_ips` feature flag to be enabled for your team. Only Elastic IPs with status `active` or `error` can be released.


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
| errors.ErrorObject            | 403, 404, 422                 | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## updateElasticIp

Moves an Elastic IP to a different server within the same project. The reassignment is performed asynchronously.

**Note:** This feature requires the `elastic_ips` feature flag to be enabled for your team. The Elastic IP must be in `active` status and the target server must belong to the same project.


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
| errors.ErrorObject            | 403, 404, 422                 | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |