# VirtualMachines

## Overview

### Available Operations

* [list](#list) - Get Teams Virtual Machines
* [create](#create) - Create a Virtual Machine
* [get](#get) - Get a Virtual Machine
* [delete](#delete) - Destroy a Virtual Machine
* [createVirtualMachineAction](#createvirtualmachineaction) - Run Virtual Machine Action

## list

Show all Team's Virtual Machines.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="index-virtual-machine" method="get" path="/virtual_machines" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.virtualMachines.list({
    extraFieldsVirtualMachines: "credentials",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { virtualMachinesList } from "latitudesh-typescript-sdk/funcs/virtualMachinesList.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachinesList(latitudesh, {
    extraFieldsVirtualMachines: "credentials",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("virtualMachinesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IndexVirtualMachineRequest](../../models/operations/indexvirtualmachinerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## create

Creates a new Virtual Machine.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-virtual-machine" method="post" path="/virtual_machines" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.virtualMachines.create({
    data: {
      type: "virtual_machines",
      attributes: {
        name: "my-new-vm",
        project: "lightweight-leather-lamp",
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
import { virtualMachinesCreate } from "latitudesh-typescript-sdk/funcs/virtualMachinesCreate.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachinesCreate(latitudesh, {
    data: {
      type: "virtual_machines",
      attributes: {
        name: "my-new-vm",
        project: "lightweight-leather-lamp",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualMachinesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.VirtualMachinePayload](../../models/virtualmachinepayload.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VirtualMachine](../../models/virtualmachine.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## get

Show a Virtual Machine.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="show-virtual-machine" method="get" path="/virtual_machines/{virtual_machine_id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.virtualMachines.get({
    virtualMachineId: "vm_7vYAZqGBdMQ94",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { virtualMachinesGet } from "latitudesh-typescript-sdk/funcs/virtualMachinesGet.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachinesGet(latitudesh, {
    virtualMachineId: "vm_7vYAZqGBdMQ94",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("virtualMachinesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ShowVirtualMachineRequest](../../models/operations/showvirtualmachinerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete

Destroys a Virtual Machine.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="destroy-virtual-machine" method="delete" path="/virtual_machines/{virtual_machine_id}" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.virtualMachines.delete({
    virtualMachineId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { virtualMachinesDelete } from "latitudesh-typescript-sdk/funcs/virtualMachinesDelete.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachinesDelete(latitudesh, {
    virtualMachineId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("virtualMachinesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DestroyVirtualMachineRequest](../../models/operations/destroyvirtualmachinerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |

## createVirtualMachineAction

Performs a power action on a given virtual machine:
- `power_on` - Starts the virtual machine
- `power_off` - Stops the virtual machine
- `reboot` - Restarts the virtual machine


### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-virtual-machine-action" method="post" path="/virtual_machines/{virtual_machine_id}/actions" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  await latitudesh.virtualMachines.createVirtualMachineAction({
    virtualMachineId: "vm_5LA73qkjdaJ2o",
    requestBody: {
      id: "vm_5LA73qkjdaJ2o",
      type: "virtual_machines",
      attributes: {
        action: "reboot",
      },
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { virtualMachinesCreateVirtualMachineAction } from "latitudesh-typescript-sdk/funcs/virtualMachinesCreateVirtualMachineAction.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await virtualMachinesCreateVirtualMachineAction(latitudesh, {
    virtualMachineId: "vm_5LA73qkjdaJ2o",
    requestBody: {
      id: "vm_5LA73qkjdaJ2o",
      type: "virtual_machines",
      attributes: {
        action: "reboot",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("virtualMachinesCreateVirtualMachineAction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateVirtualMachineActionRequest](../../models/operations/createvirtualmachineactionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |