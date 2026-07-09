# GetRolesRequest

## Example Usage

```typescript
import { GetRolesRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetRolesRequest = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                                                            | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Number of items to return per page                                                                                                    |
| `pageNumber`                                                                                                                          | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Page number to return (starts at 1)                                                                                                   |
| `statsTotal`                                                                                                                          | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Request aggregate stats in the response `meta`. Use `count` to get the total number of records, returned as `meta.stats.total.count`. |