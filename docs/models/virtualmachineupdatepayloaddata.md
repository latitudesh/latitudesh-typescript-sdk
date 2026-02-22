# VirtualMachineUpdatePayloadData

## Example Usage

```typescript
import { VirtualMachineUpdatePayloadData } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineUpdatePayloadData = {
  type: "virtual_machines",
  attributes: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [models.VirtualMachineUpdatePayloadType](../models/virtualmachineupdatepayloadtype.md)             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `attributes`                                                                                       | [models.VirtualMachineUpdatePayloadAttributes](../models/virtualmachineupdatepayloadattributes.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |