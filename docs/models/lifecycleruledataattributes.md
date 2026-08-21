# LifecycleRuleDataAttributes

## Example Usage

```typescript
import { LifecycleRuleDataAttributes } from "latitudesh-typescript-sdk/models";

let value: LifecycleRuleDataAttributes = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Name of the lifecycle rule                                                                              |
| `enabled`                                                                                               | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | Whether the rule is currently active                                                                    |
| `prefix`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Object key prefix filter. When set, the rule only applies to objects whose keys start with this prefix. |
| `expirationDays`                                                                                        | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Number of days after object creation when the object expires and is automatically deleted               |
| `noncurrentDays`                                                                                        | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Number of days after which noncurrent object versions expire (for versioned buckets)                    |
| `abortMpuDaysAfterInitiation`                                                                           | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Number of days after initiation to abort incomplete multipart uploads                                   |