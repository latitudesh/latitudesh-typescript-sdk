# VirtualMachineUpdatePayload

## Example Usage

```typescript
import { VirtualMachineUpdatePayload } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineUpdatePayload = {
  data: {
    type: "virtual_machines",
    attributes: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [models.VirtualMachineUpdatePayloadData](../models/virtualmachineupdatepayloaddata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |