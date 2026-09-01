# VirtualMachinePlansData

## Example Usage

```typescript
import { VirtualMachinePlansData } from "latitudesh-typescript-sdk/models";

let value: VirtualMachinePlansData = {
  attributes: {
    regions: [
      {
        pricing: {
          "USD": {
            hour: 2.18,
            month: 796,
            year: 6686,
          },
          "BRL": {
            hour: 11.99,
            month: 4376,
            year: 36758,
          },
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of the plan                                                                 |
| `type`                                                                             | [models.VirtualMachinePlansType](../models/virtualmachineplanstype.md)             | :heavy_minus_sign:                                                                 | The type of the resource                                                           |
| `attributes`                                                                       | [models.VirtualMachinePlansAttributes](../models/virtualmachineplansattributes.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |