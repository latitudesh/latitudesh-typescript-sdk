# CreateInferenceApiKeyAttributes

## Example Usage

```typescript
import { CreateInferenceApiKeyAttributes } from "latitudesh-typescript-sdk/models";

let value: CreateInferenceApiKeyAttributes = {
  projectId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Project ID or Slug                                                             |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | Name of the inference API key. Must be unique among the project's active keys. |