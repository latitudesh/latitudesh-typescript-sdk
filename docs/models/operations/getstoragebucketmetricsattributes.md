# GetStorageBucketMetricsAttributes

## Example Usage

```typescript
import { GetStorageBucketMetricsAttributes } from "latitudesh-typescript-sdk/models/operations";

let value: GetStorageBucketMetricsAttributes = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `period`                                                             | [operations.Period](../../models/operations/period.md)               | :heavy_minus_sign:                                                   | The current billing period                                           |
| `storage`                                                            | [operations.Storage](../../models/operations/storage.md)             | :heavy_minus_sign:                                                   | Storage consumption metrics                                          |
| `estimatedCost`                                                      | [operations.EstimatedCost](../../models/operations/estimatedcost.md) | :heavy_minus_sign:                                                   | Estimated cost for the current billing period                        |