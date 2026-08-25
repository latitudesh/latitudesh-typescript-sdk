# PatchStorageBucketLifecycleRuleRequest

## Example Usage

```typescript
import { PatchStorageBucketLifecycleRuleRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PatchStorageBucketLifecycleRuleRequest = {
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `bucketId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The object storage bucket ID                                                                                                   |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The lifecycle rule ID                                                                                                          |
| `requestBody`                                                                                                                  | [operations.PatchStorageBucketLifecycleRuleRequestBody](../../models/operations/patchstoragebucketlifecyclerulerequestbody.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |