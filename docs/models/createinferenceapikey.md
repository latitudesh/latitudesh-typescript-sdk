# CreateInferenceApiKey

## Example Usage

```typescript
import { CreateInferenceApiKey } from "latitudesh-typescript-sdk/models";

let value: CreateInferenceApiKey = {
  data: {
    type: "inference_api_keys",
    attributes: {
      projectId: "<id>",
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [models.CreateInferenceApiKeyData](../models/createinferenceapikeydata.md) | :heavy_check_mark:                                                         | N/A                                                                        |