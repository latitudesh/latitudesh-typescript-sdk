# CreateKubernetesCluster

## Example Usage

```typescript
import { CreateKubernetesCluster } from "latitudesh-typescript-sdk/models";

let value: CreateKubernetesCluster = {
  data: {
    type: "kubernetes_clusters",
    attributes: {
      name: "<value>",
      projectId: "<id>",
      site: "<value>",
      plan: "<value>",
      sshKeyId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [models.CreateKubernetesClusterData](../models/createkubernetesclusterdata.md) | :heavy_check_mark:                                                             | N/A                                                                            |