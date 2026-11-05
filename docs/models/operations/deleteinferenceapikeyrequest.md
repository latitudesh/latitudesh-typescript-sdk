# DeleteInferenceApiKeyRequest

## Example Usage

```typescript
import { DeleteInferenceApiKeyRequest } from "latitudesh-typescript-sdk/models/operations";

let value: DeleteInferenceApiKeyRequest = {
  projectId: "<id>",
  apiKeyId: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `projectId`          | *string*             | :heavy_check_mark:   | Project ID or Slug   |
| `apiKeyId`           | *string*             | :heavy_check_mark:   | Inference API key ID |