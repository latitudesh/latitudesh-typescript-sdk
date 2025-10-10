# GetVirtualNetworksAssignmentsRequest

## Example Usage

```typescript
import { GetVirtualNetworksAssignmentsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetVirtualNetworksAssignmentsRequest = {};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `filterServer`                      | *string*                            | :heavy_minus_sign:                  | The server ID to filter by          |
| `filterVid`                         | *string*                            | :heavy_minus_sign:                  | The vlan ID to filter by            |
| `filterVirtualNetworkId`            | *string*                            | :heavy_minus_sign:                  | The virtual network ID to filter by |
| `pageSize`                          | *number*                            | :heavy_minus_sign:                  | Number of items to return per page  |
| `pageNumber`                        | *number*                            | :heavy_minus_sign:                  | Page number to return (starts at 1) |