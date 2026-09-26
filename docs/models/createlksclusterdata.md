# CreateLksClusterData

## Example Usage

```typescript
import { CreateLksClusterData } from "latitudesh-typescript-sdk/models";

let value: CreateLksClusterData = {
  type: "lks_clusters",
  attributes: {
    name: "<value>",
    projectId: "<id>",
    site: "<value>",
    kubernetesVersion: "1.36.3",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [models.CreateLksClusterType](../models/createlksclustertype.md)             | :heavy_check_mark:                                                           | N/A                                                                          |
| `attributes`                                                                 | [models.CreateLksClusterAttributes](../models/createlksclusterattributes.md) | :heavy_check_mark:                                                           | N/A                                                                          |