# InferenceUsage

## Example Usage

```typescript
import { InferenceUsage } from "latitudesh-typescript-sdk/models";

let value: InferenceUsage = {
  totalEstimatedCost: "0.88",
  byModel: [
    {
      model: "qwen3-30b-a3b-fp8",
      estimatedCost: "0.000599",
    },
  ],
  series: [
    {
      models: {
        "key": {
          estimatedCost: "0.000599",
        },
      },
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `totalEstimatedCost`                     | *string*                                 | :heavy_minus_sign:                       | Estimated USD across priced models       | 0.88                                     |
| `totalRequests`                          | *number*                                 | :heavy_minus_sign:                       | N/A                                      |                                          |
| `totalTokens`                            | *number*                                 | :heavy_minus_sign:                       | N/A                                      |                                          |
| `byModel`                                | [models.ByModel](../models/bymodel.md)[] | :heavy_minus_sign:                       | N/A                                      |                                          |
| `series`                                 | [models.Series](../models/series.md)[]   | :heavy_minus_sign:                       | N/A                                      |                                          |