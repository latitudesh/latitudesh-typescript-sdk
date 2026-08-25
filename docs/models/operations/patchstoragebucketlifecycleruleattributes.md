# PatchStorageBucketLifecycleRuleAttributes

## Example Usage

```typescript
import { PatchStorageBucketLifecycleRuleAttributes } from "latitudesh-typescript-sdk/models/operations";

let value: PatchStorageBucketLifecycleRuleAttributes = {
  name: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | Name of the lifecycle rule                                            |
| `enabled`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | Whether the rule is active                                            |
| `prefix`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | Object key prefix to filter which objects the rule applies to         |
| `expirationDays`                                                      | *number*                                                              | :heavy_minus_sign:                                                    | Number of days after object creation when the object expires          |
| `noncurrentDays`                                                      | *number*                                                              | :heavy_minus_sign:                                                    | Number of days after which noncurrent object versions expire          |
| `abortMpuDaysAfterInitiation`                                         | *number*                                                              | :heavy_minus_sign:                                                    | Number of days after initiation to abort incomplete multipart uploads |