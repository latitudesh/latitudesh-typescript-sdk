# ListLksNodesRequest

## Example Usage

```typescript
import { ListLksNodesRequest } from "latitudesh-typescript-sdk/models/operations";

let value: ListLksNodesRequest = {
  clusterId: "<id>",
  nodePoolId: "<id>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `clusterId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | The cluster ID (format: `lksc_<hash>`).                                           |
| `nodePoolId`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | The node pool ID (format: `lksnp_<hash>`).                                        |
| `filterStatus`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Only return nodes in this status: `pending`, `ready`, `not_ready`, or `deleting`. |