# GetStorageUsageRequest

## Example Usage

```typescript
import { GetStorageUsageRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetStorageUsageRequest = {
  filterProject: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `filterProject`                                                        | *string*                                                               | :heavy_check_mark:                                                     | Project ID or Slug                                                     |
| `filterStorageId`                                                      | *string*                                                               | :heavy_minus_sign:                                                     | Restrict the result to a single storage. Accepts the storage/bucket ID |
| `filterStartDate`                                                      | [RFCDate](../../types/rfcdate.md)                                      | :heavy_minus_sign:                                                     | Defaults to yesterday                                                  |
| `filterEndDate`                                                        | [RFCDate](../../types/rfcdate.md)                                      | :heavy_minus_sign:                                                     | Defaults to today; clamped to today when a future date is given        |