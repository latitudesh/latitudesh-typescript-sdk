# PostStorageBucketLifecycleRulesRequest

## Example Usage

```typescript
import { PostStorageBucketLifecycleRulesRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageBucketLifecycleRulesRequest = {
  bucketId: "<id>",
  requestBody: {
    data: {
      type: "lifecycle_rules",
      attributes: {
        name: "<value>",
        expirationDays: 759107,
      },
    },
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `bucketId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The object storage bucket ID                                                                                                   |
| `requestBody`                                                                                                                  | [operations.PostStorageBucketLifecycleRulesRequestBody](../../models/operations/poststoragebucketlifecyclerulesrequestbody.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |