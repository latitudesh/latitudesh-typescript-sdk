# CreateKubernetesClusterData

## Example Usage

```typescript
import { CreateKubernetesClusterData } from "latitudesh-typescript-sdk/models";

let value: CreateKubernetesClusterData = {
  type: "kubernetes_clusters",
  attributes: {
    projectId: "<id>",
    site: "<value>",
    plan: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [models.CreateKubernetesClusterType](../models/createkubernetesclustertype.md)             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `attributes`                                                                               | [models.CreateKubernetesClusterAttributes](../models/createkubernetesclusterattributes.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |