# CreateLksCluster

## Example Usage

```typescript
import { CreateLksCluster } from "latitudesh-typescript-sdk/models";

let value: CreateLksCluster = {
  data: {
    type: "lks_clusters",
    attributes: {
      name: "<value>",
      projectId: "<id>",
      site: "<value>",
      kubernetesVersion: "1.36.3",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [models.CreateLksClusterData](../models/createlksclusterdata.md) | :heavy_check_mark:                                               | N/A                                                              |