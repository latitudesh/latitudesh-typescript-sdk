# PatchStorageBucketLifecycleRuleRequestBody

## Example Usage

```typescript
import { PatchStorageBucketLifecycleRuleRequestBody } from "latitudesh-typescript-sdk/models/operations";

let value: PatchStorageBucketLifecycleRuleRequestBody = {
  data: {
    type: "lifecycle_rules",
    attributes: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                           | [operations.PatchStorageBucketLifecycleRuleData](../../models/operations/patchstoragebucketlifecycleruledata.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |