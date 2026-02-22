# UpdateVirtualMachineRequest

## Example Usage

```typescript
import { UpdateVirtualMachineRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateVirtualMachineRequest = {
  virtualMachineId: "<id>",
  virtualMachineUpdatePayload: {
    data: {
      type: "virtual_machines",
      attributes: {
        name: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `virtualMachineId`                                                                | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `virtualMachineUpdatePayload`                                                     | [models.VirtualMachineUpdatePayload](../../models/virtualmachineupdatepayload.md) | :heavy_check_mark:                                                                | N/A                                                                               |