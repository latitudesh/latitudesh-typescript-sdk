# PostStorageBucketLifecycleRulesRequestBody

## Example Usage

```typescript
import { PostStorageBucketLifecycleRulesRequestBody } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageBucketLifecycleRulesRequestBody = {
  data: {
    type: "lifecycle_rules",
    attributes: {
      name: "<value>",
      expirationDays: 759107,
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                           | [operations.PostStorageBucketLifecycleRulesData](../../models/operations/poststoragebucketlifecyclerulesdata.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |