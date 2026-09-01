# PlanData

## Example Usage

```typescript
import { PlanData } from "latitudesh-typescript-sdk/models";

let value: PlanData = {
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | [models.TypePlans](../models/typeplans.md)                   | :heavy_minus_sign:                                           | N/A                                                          |
| `attributes`                                                 | [models.PlanDataAttributes](../models/plandataattributes.md) | :heavy_minus_sign:                                           | N/A                                                          |