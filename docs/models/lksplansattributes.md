# LksPlansAttributes

## Example Usage

```typescript
import { LksPlansAttributes } from "latitudesh-typescript-sdk/models";

let value: LksPlansAttributes = {
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
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `name`                                                 | *string*                                               | :heavy_minus_sign:                                     | The name of the plan                                   |
| `slug`                                                 | *string*                                               | :heavy_minus_sign:                                     | The slug of the plan, used as the node pool plan       |
| `specs`                                                | [models.LksPlansSpecs](../models/lksplansspecs.md)     | :heavy_minus_sign:                                     | N/A                                                    |
| `regions`                                              | [models.LksPlansRegion](../models/lksplansregion.md)[] | :heavy_minus_sign:                                     | N/A                                                    |