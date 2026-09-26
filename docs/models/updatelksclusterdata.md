# UpdateLksClusterData

## Example Usage

```typescript
import { UpdateLksClusterData } from "latitudesh-typescript-sdk/models";

let value: UpdateLksClusterData = {
  type: "lks_clusters",
  attributes: {
    kubernetesVersion: "1.37.2",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [models.UpdateLksClusterType](../models/updatelksclustertype.md)             | :heavy_check_mark:                                                           | N/A                                                                          |
| `attributes`                                                                 | [models.UpdateLksClusterAttributes](../models/updatelksclusterattributes.md) | :heavy_minus_sign:                                                           | At least one of name, description or kubernetes_version must be provided.    |