# ObjectStorage

## Overview

### Available Operations

* [getStorageUsage](#getstorageusage) - List storage usage
* [postStorageAccessKeys](#poststorageaccesskeys) - Create access key
* [getStorageAccessKeys](#getstorageaccesskeys) - List access keys
* [deleteStorageAccessKeysUsername](#deletestorageaccesskeysusername) - Delete access key
* [getStorageBucketAccessKeys](#getstoragebucketaccesskeys) - List bucket access keys
* [getStorageBuckets](#getstoragebuckets) - List buckets
* [postStorageBuckets](#poststoragebuckets) - Create bucket
* [getStorageBucket](#getstoragebucket) - Retrieve bucket
* [deleteStorageBuckets](#deletestoragebuckets) - Delete bucket
* [getStorageBucketMetrics](#getstoragebucketmetrics) - Retrieve bucket metrics

## getStorageUsage

Returns daily object storage usage for a project. Each row reports the canonical usage in bytes for a single storage on a given day, plus the provider-reported raw value.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-storage-usage" method="get" path="/storage/usage" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.getStorageUsage({
    filterProject: "proj_5AEmq7wMqBkWX",
    filterStorageId: "bkt_6VE1Wd37dXnZJ",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { objectStorageGetStorageUsage } from "latitudesh-typescript-sdk/funcs/objectStorageGetStorageUsage.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStorageGetStorageUsage(latitudesh, {
    filterProject: "proj_5AEmq7wMqBkWX",
    filterStorageId: "bkt_6VE1Wd37dXnZJ",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStorageGetStorageUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStorageUsageRequest](../../models/operations/getstorageusagerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.StorageUsage](../../models/storageusage.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## postStorageAccessKeys

Creates an object storage IAM access key for a project. The secret is returned only once, in this response, and cannot be retrieved again. The provider is selected by `storage_class`: `standard` provisions the key on Wasabi and `high_performance` provisions it on VAST.

### Example Usage: Created

<!-- UsageSnippet language="typescript" operationID="post-storage-access-keys" method="post" path="/storage/access_keys" example="Created" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.postStorageAccessKeys({
    data: {
      type: "access_keys",
      attributes: {
        project: "<value>",
        accessKeyStorageClass: "high_performance",
        name: "<value>",
        accessScope: "limited_access",
        region: "<value>",
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
import { objectStoragePostStorageAccessKeys } from "latitudesh-typescript-sdk/funcs/objectStoragePostStorageAccessKeys.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStoragePostStorageAccessKeys(latitudesh, {
    data: {
      type: "access_keys",
      attributes: {
        project: "<value>",
        accessKeyStorageClass: "high_performance",
        name: "<value>",
        accessScope: "limited_access",
        region: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStoragePostStorageAccessKeys failed:", res.error);
  }
}

run();
```
### Example Usage: FullAccess

<!-- UsageSnippet language="typescript" operationID="post-storage-access-keys" method="post" path="/storage/access_keys" example="FullAccess" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.postStorageAccessKeys({
    data: {
      type: "access_keys",
      attributes: {
        project: "proj_6059EqYkOQj8p",
        accessKeyStorageClass: "standard",
        name: "my-access-key",
        accessScope: "fullaccess",
        region: "DAL",
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
import { objectStoragePostStorageAccessKeys } from "latitudesh-typescript-sdk/funcs/objectStoragePostStorageAccessKeys.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStoragePostStorageAccessKeys(latitudesh, {
    data: {
      type: "access_keys",
      attributes: {
        project: "proj_6059EqYkOQj8p",
        accessKeyStorageClass: "standard",
        name: "my-access-key",
        accessScope: "fullaccess",
        region: "DAL",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStoragePostStorageAccessKeys failed:", res.error);
  }
}

run();
```
### Example Usage: LimitedAccess

<!-- UsageSnippet language="typescript" operationID="post-storage-access-keys" method="post" path="/storage/access_keys" example="LimitedAccess" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.postStorageAccessKeys({
    data: {
      type: "access_keys",
      attributes: {
        project: "proj_6059EqYkOQj8p",
        accessKeyStorageClass: "standard",
        name: "my-limited-key",
        accessScope: "limited_access",
        region: "DAL",
        bucketPermissions: [
          {
            bucketId: "bucket_6VE1Wd37dXnZJ",
            permission: "readonly",
          },
          {
            bucketId: "bucket_7WF2Xe48eYoAK",
            permission: "rw",
          },
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
import { objectStoragePostStorageAccessKeys } from "latitudesh-typescript-sdk/funcs/objectStoragePostStorageAccessKeys.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStoragePostStorageAccessKeys(latitudesh, {
    data: {
      type: "access_keys",
      attributes: {
        project: "proj_6059EqYkOQj8p",
        accessKeyStorageClass: "standard",
        name: "my-limited-key",
        accessScope: "limited_access",
        region: "DAL",
        bucketPermissions: [
          {
            bucketId: "bucket_6VE1Wd37dXnZJ",
            permission: "readonly",
          },
          {
            bucketId: "bucket_7WF2Xe48eYoAK",
            permission: "rw",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStoragePostStorageAccessKeys failed:", res.error);
  }
}

run();
```
### Example Usage: Unauthorized

<!-- UsageSnippet language="typescript" operationID="post-storage-access-keys" method="post" path="/storage/access_keys" example="Unauthorized" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.postStorageAccessKeys({
    data: {
      type: "access_keys",
      attributes: {
        project: "<value>",
        accessKeyStorageClass: "high_performance",
        name: "<value>",
        accessScope: "limited_access",
        region: "<value>",
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
import { objectStoragePostStorageAccessKeys } from "latitudesh-typescript-sdk/funcs/objectStoragePostStorageAccessKeys.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStoragePostStorageAccessKeys(latitudesh, {
    data: {
      type: "access_keys",
      attributes: {
        project: "<value>",
        accessKeyStorageClass: "high_performance",
        name: "<value>",
        accessScope: "limited_access",
        region: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStoragePostStorageAccessKeys failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostStorageAccessKeysRequest](../../models/operations/poststorageaccesskeysrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostStorageAccessKeysResponse](../../models/operations/poststorageaccesskeysresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404, 422                 | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getStorageAccessKeys

Lists object storage access keys for a project, grouped by storage class. Secrets are never returned by this endpoint.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-storage-access-keys" method="get" path="/storage/access_keys" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.getStorageAccessKeys({
    project: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { objectStorageGetStorageAccessKeys } from "latitudesh-typescript-sdk/funcs/objectStorageGetStorageAccessKeys.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStorageGetStorageAccessKeys(latitudesh, {
    project: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStorageGetStorageAccessKeys failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStorageAccessKeysRequest](../../models/operations/getstorageaccesskeysrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStorageAccessKeysResponse](../../models/operations/getstorageaccesskeysresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## deleteStorageAccessKeysUsername

Permanently deletes an object storage access key and its associated provider-side credentials. Deletion cannot be undone: it revokes the key's credentials and removes the key from the storage provider. For `standard` (Wasabi) keys, the IAM user is removed from each of the project's bucket policies, all of the user's access keys are revoked, and the IAM user is deleted. For `high_performance` (VAST) keys, the VAST user's S3 keys are revoked, its attached S3 policies are deleted, and the VAST user is removed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-storage-access-keys-username" method="delete" path="/storage/access_keys/{username}/{storage_class}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.objectStorage.deleteStorageAccessKeysUsername({
    username: "Earline_Dooley27",
    storageClass: "high_performance",
    project: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { objectStorageDeleteStorageAccessKeysUsername } from "latitudesh-typescript-sdk/funcs/objectStorageDeleteStorageAccessKeysUsername.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStorageDeleteStorageAccessKeysUsername(latitudesh, {
    username: "Earline_Dooley27",
    storageClass: "high_performance",
    project: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("objectStorageDeleteStorageAccessKeysUsername failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteStorageAccessKeysUsernameRequest](../../models/operations/deletestorageaccesskeysusernamerequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getStorageBucketAccessKeys

Lists IAM access keys associated with an object storage bucket. Secrets are never returned by this endpoint.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-storage-bucket-access-keys" method="get" path="/storage/buckets/{id}/access_keys" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.getStorageBucketAccessKeys({
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
import { objectStorageGetStorageBucketAccessKeys } from "latitudesh-typescript-sdk/funcs/objectStorageGetStorageBucketAccessKeys.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStorageGetStorageBucketAccessKeys(latitudesh, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStorageGetStorageBucketAccessKeys failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStorageBucketAccessKeysRequest](../../models/operations/getstoragebucketaccesskeysrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStorageBucketAccessKeysResponse](../../models/operations/getstoragebucketaccesskeysresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getStorageBuckets

Lists all object storages from a team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-storage-buckets" method="get" path="/storage/buckets" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.getStorageBuckets();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { objectStorageGetStorageBuckets } from "latitudesh-typescript-sdk/funcs/objectStorageGetStorageBuckets.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStorageGetStorageBuckets(latitudesh);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStorageGetStorageBuckets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStorageBucketsRequest](../../models/operations/getstoragebucketsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ObjectStorages](../../models/objectstorages.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## postStorageBuckets

Creates a new object storage bucket for a project.

### Example Usage: Create

<!-- UsageSnippet language="typescript" operationID="post-storage-buckets" method="post" path="/storage/buckets" example="Create" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.postStorageBuckets({
    data: {
      type: "objects",
      attributes: {
        project: "proj_6059EqYkOQj8p",
        name: "my-bucket",
        region: "DAL",
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
import { objectStoragePostStorageBuckets } from "latitudesh-typescript-sdk/funcs/objectStoragePostStorageBuckets.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStoragePostStorageBuckets(latitudesh, {
    data: {
      type: "objects",
      attributes: {
        project: "proj_6059EqYkOQj8p",
        name: "my-bucket",
        region: "DAL",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStoragePostStorageBuckets failed:", res.error);
  }
}

run();
```
### Example Usage: CreateScoped

<!-- UsageSnippet language="typescript" operationID="post-storage-buckets" method="post" path="/storage/buckets" example="CreateScoped" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.postStorageBuckets({
    data: {
      type: "objects",
      attributes: {
        project: "proj_6059EqYkOQj8p",
        name: "customer-bucket",
        region: "DAL",
        scoped: true,
        customer: "acme-corp",
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
import { objectStoragePostStorageBuckets } from "latitudesh-typescript-sdk/funcs/objectStoragePostStorageBuckets.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStoragePostStorageBuckets(latitudesh, {
    data: {
      type: "objects",
      attributes: {
        project: "proj_6059EqYkOQj8p",
        name: "customer-bucket",
        region: "DAL",
        scoped: true,
        customer: "acme-corp",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStoragePostStorageBuckets failed:", res.error);
  }
}

run();
```
### Example Usage: Created

<!-- UsageSnippet language="typescript" operationID="post-storage-buckets" method="post" path="/storage/buckets" example="Created" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.postStorageBuckets({
    data: {
      type: "objects",
      attributes: {
        project: "<value>",
        name: "<value>",
        region: "<value>",
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
import { objectStoragePostStorageBuckets } from "latitudesh-typescript-sdk/funcs/objectStoragePostStorageBuckets.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStoragePostStorageBuckets(latitudesh, {
    data: {
      type: "objects",
      attributes: {
        project: "<value>",
        name: "<value>",
        region: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStoragePostStorageBuckets failed:", res.error);
  }
}

run();
```
### Example Usage: FeatureNotEnabled

<!-- UsageSnippet language="typescript" operationID="post-storage-buckets" method="post" path="/storage/buckets" example="FeatureNotEnabled" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.postStorageBuckets({
    data: {
      type: "objects",
      attributes: {
        project: "<value>",
        name: "<value>",
        region: "<value>",
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
import { objectStoragePostStorageBuckets } from "latitudesh-typescript-sdk/funcs/objectStoragePostStorageBuckets.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStoragePostStorageBuckets(latitudesh, {
    data: {
      type: "objects",
      attributes: {
        project: "<value>",
        name: "<value>",
        region: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStoragePostStorageBuckets failed:", res.error);
  }
}

run();
```
### Example Usage: InsufficientPermissions

<!-- UsageSnippet language="typescript" operationID="post-storage-buckets" method="post" path="/storage/buckets" example="InsufficientPermissions" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.postStorageBuckets({
    data: {
      type: "objects",
      attributes: {
        project: "<value>",
        name: "<value>",
        region: "<value>",
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
import { objectStoragePostStorageBuckets } from "latitudesh-typescript-sdk/funcs/objectStoragePostStorageBuckets.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStoragePostStorageBuckets(latitudesh, {
    data: {
      type: "objects",
      attributes: {
        project: "<value>",
        name: "<value>",
        region: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStoragePostStorageBuckets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostStorageBucketsRequest](../../models/operations/poststoragebucketsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostStorageBucketsResponse](../../models/operations/poststoragebucketsresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404, 409, 422            | application/vnd.api+json      |
| errors.ErrorObject            | 500                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getStorageBucket

Shows details of a specific object storage.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-storage-bucket" method="get" path="/storage/buckets/{id}" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.getStorageBucket({
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
import { objectStorageGetStorageBucket } from "latitudesh-typescript-sdk/funcs/objectStorageGetStorageBucket.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStorageGetStorageBucket(latitudesh, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStorageGetStorageBucket failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStorageBucketRequest](../../models/operations/getstoragebucketrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStorageBucketResponse](../../models/operations/getstoragebucketresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## deleteStorageBuckets

Allows you to remove an object storage from a project.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-storage-buckets" method="delete" path="/storage/buckets/{id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.objectStorage.deleteStorageBuckets({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { objectStorageDeleteStorageBuckets } from "latitudesh-typescript-sdk/funcs/objectStorageDeleteStorageBuckets.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStorageDeleteStorageBuckets(latitudesh, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("objectStorageDeleteStorageBuckets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteStorageBucketsRequest](../../models/operations/deletestoragebucketsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404, 409                 | application/vnd.api+json      |
| errors.ErrorObject            | 500                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## getStorageBucketMetrics

Retrieves usage metrics for a specific object storage bucket, including storage consumption and estimated cost for the current billing period.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-storage-bucket-metrics" method="get" path="/storage/buckets/{bucket_id}/metrics" example="Success" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.objectStorage.getStorageBucketMetrics({
    bucketId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { objectStorageGetStorageBucketMetrics } from "latitudesh-typescript-sdk/funcs/objectStorageGetStorageBucketMetrics.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await objectStorageGetStorageBucketMetrics(latitudesh, {
    bucketId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("objectStorageGetStorageBucketMetrics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStorageBucketMetricsRequest](../../models/operations/getstoragebucketmetricsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStorageBucketMetricsResponse](../../models/operations/getstoragebucketmetricsresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403, 404                      | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |