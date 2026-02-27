# CreateKubernetesClusterData

## Example Usage

```typescript
import { CreateKubernetesClusterData } from "latitudesh-typescript-sdk/models";

let value: CreateKubernetesClusterData = {
  type: "kubernetes_clusters",
  attributes: {
    name: "<value>",
    projectId: "<id>",
    site: "<value>",
    plan: "<value>",
    sshKeyId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [models.CreateKubernetesClusterType](../models/createkubernetesclustertype.md)             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `attributes`                                                                               | [models.CreateKubernetesClusterAttributes](../models/createkubernetesclusterattributes.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |