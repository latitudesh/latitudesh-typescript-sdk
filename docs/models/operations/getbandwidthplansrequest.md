# GetBandwidthPlansRequest

## Example Usage

```typescript
import { GetBandwidthPlansRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetBandwidthPlansRequest = {};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `apiVersion`                        | *string*                            | :heavy_minus_sign:                  | N/A                                 |
| `filterId`                          | *string*                            | :heavy_minus_sign:                  | The plan ID to filter by            |
| `pageSize`                          | *number*                            | :heavy_minus_sign:                  | Number of items to return per page  |
| `pageNumber`                        | *number*                            | :heavy_minus_sign:                  | Page number to return (starts at 1) |