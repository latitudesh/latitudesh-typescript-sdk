# PlanDataAttributes

## Example Usage

```typescript
import { PlanDataAttributes } from "latitudesh-typescript-sdk/models";

let value: PlanDataAttributes = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `slug`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `features`                                             | [models.Feature](../models/feature.md)[]               | :heavy_minus_sign:                                     | List of available features for the plan                |
| `specs`                                                | [models.PlanDataSpecs](../models/plandataspecs.md)     | :heavy_minus_sign:                                     | N/A                                                    |
| `regions`                                              | [models.PlanDataRegion](../models/plandataregion.md)[] | :heavy_minus_sign:                                     | N/A                                                    |