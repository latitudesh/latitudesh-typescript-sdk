# DeleteLksNodePoolRequest

## Example Usage

```typescript
import { DeleteLksNodePoolRequest } from "latitudesh-typescript-sdk/models/operations";

let value: DeleteLksNodePoolRequest = {
  clusterId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `clusterId`                                | *string*                                   | :heavy_check_mark:                         | The cluster ID (format: `lksc_<hash>`).    |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | The node pool ID (format: `lksnp_<hash>`). |