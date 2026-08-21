# PutStorageBucketLifecycleRuleRequest

## Example Usage

```typescript
import { PutStorageBucketLifecycleRuleRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PutStorageBucketLifecycleRuleRequest = {
  bucketId: "<id>",
  id: "<id>",
  requestBody: {
    data: {
      type: "lifecycle_rules",
      attributes: {
        name: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `bucketId`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The object storage bucket ID                                                                                               |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The lifecycle rule ID                                                                                                      |
| `requestBody`                                                                                                              | [operations.PutStorageBucketLifecycleRuleRequestBody](../../models/operations/putstoragebucketlifecyclerulerequestbody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |