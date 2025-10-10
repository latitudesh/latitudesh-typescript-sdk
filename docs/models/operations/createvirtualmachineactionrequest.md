# CreateVirtualMachineActionRequest

## Example Usage

```typescript
import { CreateVirtualMachineActionRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateVirtualMachineActionRequest = {
  virtualMachineId: "<id>",
  requestBody: {
    id: "<id>",
    type: "virtual_machines",
    attributes: {
      action: "power_on",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `virtualMachineId`                                                                                                     | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `requestBody`                                                                                                          | [operations.CreateVirtualMachineActionRequestBody2](../../models/operations/createvirtualmachineactionrequestbody2.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |