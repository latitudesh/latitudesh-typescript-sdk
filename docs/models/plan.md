# Plan

## Example Usage

```typescript
import { Plan } from "latitudesh-typescript-sdk/models";

let value: Plan = {
  data: {
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
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `data`                                   | [models.PlanData](../models/plandata.md) | :heavy_minus_sign:                       | N/A                                      |
| `meta`                                   | [models.PlanMeta](../models/planmeta.md) | :heavy_minus_sign:                       | N/A                                      |