# PutStorageBucketLifecycleRuleRequestBody

## Example Usage

```typescript
import { PutStorageBucketLifecycleRuleRequestBody } from "latitudesh-typescript-sdk/models/operations";

let value: PutStorageBucketLifecycleRuleRequestBody = {
  data: {
    type: "lifecycle_rules",
    attributes: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [operations.PutStorageBucketLifecycleRuleData](../../models/operations/putstoragebucketlifecycleruledata.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |