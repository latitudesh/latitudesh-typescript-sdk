# InferenceModel

## Example Usage

```typescript
import { InferenceModel } from "latitudesh-typescript-sdk/models";

let value: InferenceModel = {
  attributes: {
    inputPricePerMillionTokens: "0.0375",
    outputPricePerMillionTokens: "0.0375",
    capabilities: [
      "chat",
    ],
    regions: [
      "dallas",
    ],
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | Canonical model ID — the exact value to send as "model" in inference requests |
| `type`                                                                        | [models.InferenceModelType](../models/inferencemodeltype.md)                  | :heavy_minus_sign:                                                            | N/A                                                                           |
| `attributes`                                                                  | [models.InferenceModelAttributes](../models/inferencemodelattributes.md)      | :heavy_minus_sign:                                                            | N/A                                                                           |