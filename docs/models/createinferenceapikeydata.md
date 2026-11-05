# CreateInferenceApiKeyData

## Example Usage

```typescript
import { CreateInferenceApiKeyData } from "latitudesh-typescript-sdk/models";

let value: CreateInferenceApiKeyData = {
  type: "inference_api_keys",
  attributes: {
    projectId: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.CreateInferenceApiKeyType](../models/createinferenceapikeytype.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `attributes`                                                                           | [models.CreateInferenceApiKeyAttributes](../models/createinferenceapikeyattributes.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |