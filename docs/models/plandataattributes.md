# PlanDataAttributes

## Example Usage

```typescript
import { PlanDataAttributes } from "latitudesh-typescript-sdk/models";

let value: PlanDataAttributes = {
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
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `slug`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `features`                                             | [models.Feature](../models/feature.md)[]               | :heavy_minus_sign:                                     | List of available features for the plan                |
| `specs`                                                | [models.PlanDataSpecs](../models/plandataspecs.md)     | :heavy_minus_sign:                                     | N/A                                                    |
| `regions`                                              | [models.PlanDataRegion](../models/plandataregion.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
| `availableOperatingSystems`                            | *string*[]                                             | :heavy_minus_sign:                                     | N/A                                                    |