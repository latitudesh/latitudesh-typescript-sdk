# InferenceModels

## Example Usage

```typescript
import { InferenceModels } from "latitudesh-typescript-sdk/models";

let value: InferenceModels = {
  data: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | [models.InferenceModel](../models/inferencemodel.md)[] | :heavy_minus_sign:                                     | N/A                                                    |