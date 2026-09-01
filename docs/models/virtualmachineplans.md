# VirtualMachinePlans

## Example Usage

```typescript
import { VirtualMachinePlans } from "latitudesh-typescript-sdk/models";

let value: VirtualMachinePlans = {
  data: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [models.VirtualMachinePlansData](../models/virtualmachineplansdata.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |