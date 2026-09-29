# GetLksNodePoolRequest

## Example Usage

```typescript
import { GetLksNodePoolRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetLksNodePoolRequest = {
  clusterId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `clusterId`                                | *string*                                   | :heavy_check_mark:                         | The cluster ID (format: `lksc_<hash>`).    |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | The node pool ID (format: `lksnp_<hash>`). |