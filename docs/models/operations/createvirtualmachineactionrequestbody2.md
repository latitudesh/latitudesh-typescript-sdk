# CreateVirtualMachineActionRequestBody2

## Example Usage

```typescript
import { CreateVirtualMachineActionRequestBody2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateVirtualMachineActionRequestBody2 = {
  id: "<id>",
  type: "virtual_machines",
  attributes: {
    action: "power_on",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [operations.CreateVirtualMachineActionType2](../../models/operations/createvirtualmachineactiontype2.md)             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `attributes`                                                                                                         | [operations.CreateVirtualMachineActionAttributes2](../../models/operations/createvirtualmachineactionattributes2.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |