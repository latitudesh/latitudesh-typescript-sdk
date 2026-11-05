# ByModel

## Example Usage

```typescript
import { ByModel } from "latitudesh-typescript-sdk/models";

let value: ByModel = {
  model: "qwen3-30b-a3b-fp8",
  estimatedCost: "0.000599",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `model`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | qwen3-30b-a3b-fp8                                                       |
| `requests`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `inputTokens`                                                           | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `outputTokens`                                                          | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `estimatedCost`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | Estimated USD at current model prices; null when the model has no price | 0.000599                                                                |