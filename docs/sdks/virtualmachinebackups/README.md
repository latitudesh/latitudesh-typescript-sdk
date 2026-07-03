# VirtualMachineBackups

## Overview

### Available Operations

* [listForVirtualMachine](#listforvirtualmachine) - List a VM's backups
* [createForVirtualMachine](#createforvirtualmachine) - Create VM backup
* [list](#list) - List all VM backups
* [create](#create) - Create VM backup (top-level)
* [get](#get) - Get VM backup
* [delete](#delete) - Delete VM backup

## listForVirtualMachine

Lists the backups of the given Virtual Machine.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-virtual-machine-scoped-backups" method="get" path="/virtual_machines/{virtual_machine_id}/backups" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.virtualMachineBackups.listForVirtualMachine({
    virtualMachineId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { virtualMachineBackupsListForVirtualMachine } from "latitudesh-typescript-sdk/funcs/virtualMachineBackupsListForVirtualMachine.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachineBackupsListForVirtualMachine(latitudesh, {
    virtualMachineId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualMachineBackupsListForVirtualMachine failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListVirtualMachineScopedBackupsRequest](../../models/operations/listvirtualmachinescopedbackupsrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VirtualMachineBackups](../../models/virtualmachinebackups.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## createForVirtualMachine

Triggers a backup of the given Virtual Machine.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-virtual-machine-backup" method="post" path="/virtual_machines/{virtual_machine_id}/backups" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.virtualMachineBackups.createForVirtualMachine({
    virtualMachineId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { virtualMachineBackupsCreateForVirtualMachine } from "latitudesh-typescript-sdk/funcs/virtualMachineBackupsCreateForVirtualMachine.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachineBackupsCreateForVirtualMachine(latitudesh, {
    virtualMachineId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualMachineBackupsCreateForVirtualMachine failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateVirtualMachineBackupRequest](../../models/operations/createvirtualmachinebackuprequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VirtualMachineBackup](../../models/virtualmachinebackup.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## list

Lists every backup that belongs to the authenticated team.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-virtual-machine-backups" method="get" path="/virtual_machine_backups" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.virtualMachineBackups.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { virtualMachineBackupsList } from "latitudesh-typescript-sdk/funcs/virtualMachineBackupsList.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachineBackupsList(latitudesh);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualMachineBackupsList failed:", res.error);
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

**Promise\<[models.VirtualMachineBackups](../../models/virtualmachinebackups.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## create

Triggers a backup of the Virtual Machine referenced in the body.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-virtual-machine-backup-top-level" method="post" path="/virtual_machine_backups" example="FeatureNotEnabled" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.virtualMachineBackups.create({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { virtualMachineBackupsCreate } from "latitudesh-typescript-sdk/funcs/virtualMachineBackupsCreate.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachineBackupsCreate(latitudesh, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualMachineBackupsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.VirtualMachineBackupPayload](../../models/virtualmachinebackuppayload.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VirtualMachineBackup](../../models/virtualmachinebackup.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## get

Get VM backup

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-virtual-machine-backup" method="get" path="/virtual_machine_backups/{id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.virtualMachineBackups.get({
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
import { virtualMachineBackupsGet } from "latitudesh-typescript-sdk/funcs/virtualMachineBackupsGet.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachineBackupsGet(latitudesh, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualMachineBackupsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetVirtualMachineBackupRequest](../../models/operations/getvirtualmachinebackuprequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VirtualMachineBackup](../../models/virtualmachinebackup.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete

Archives and deletes a Virtual Machine backup. Work runs asynchronously and returns 202 Accepted. Only `Ready` or `Failed` backups can be deleted, and not while a restore from the backup is in progress.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-virtual-machine-backup" method="delete" path="/virtual_machine_backups/{id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.virtualMachineBackups.delete({
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
import { virtualMachineBackupsDelete } from "latitudesh-typescript-sdk/funcs/virtualMachineBackupsDelete.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachineBackupsDelete(latitudesh, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualMachineBackupsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteVirtualMachineBackupRequest](../../models/operations/deletevirtualmachinebackuprequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VirtualMachineBackup](../../models/virtualmachinebackup.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.ErrorObject            | 403                           | application/vnd.api+json      |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |