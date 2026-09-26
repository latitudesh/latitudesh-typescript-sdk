# LksPlans

## Example Usage

```typescript
import { LksPlans } from "latitudesh-typescript-sdk/models";

let value: LksPlans = {
  data: [
    {
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
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [models.LksPlansData](../models/lksplansdata.md)[] | :heavy_minus_sign:                                 | N/A                                                |