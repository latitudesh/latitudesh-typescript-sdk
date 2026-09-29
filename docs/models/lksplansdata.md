# LksPlansData

## Example Usage

```typescript
import { LksPlansData } from "latitudesh-typescript-sdk/models";

let value: LksPlansData = {
  attributes: {
    regions: [
      {
        locations: {
          inStockCount: {
            "DAL2": 4,
          },
        },
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | The ID of the plan                                           |
| `type`                                                       | [models.LksPlansType](../models/lksplanstype.md)             | :heavy_minus_sign:                                           | The type of the resource                                     |
| `attributes`                                                 | [models.LksPlansAttributes](../models/lksplansattributes.md) | :heavy_minus_sign:                                           | N/A                                                          |