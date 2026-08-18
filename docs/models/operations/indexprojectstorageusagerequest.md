# IndexProjectStorageUsageRequest

## Example Usage

```typescript
import { IndexProjectStorageUsageRequest } from "latitudesh-typescript-sdk/models/operations";

let value: IndexProjectStorageUsageRequest = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Project ID or Slug                                                     |
| `storageId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | Restrict the result to a single storage. Accepts the storage/bucket ID |
| `startDate`                                                            | [RFCDate](../../types/rfcdate.md)                                      | :heavy_minus_sign:                                                     | Defaults to yesterday                                                  |
| `endDate`                                                              | [RFCDate](../../types/rfcdate.md)                                      | :heavy_minus_sign:                                                     | Defaults to today; clamped to today when a future date is given        |