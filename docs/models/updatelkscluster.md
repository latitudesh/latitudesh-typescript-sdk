# UpdateLksCluster

## Example Usage

```typescript
import { UpdateLksCluster } from "latitudesh-typescript-sdk/models";

let value: UpdateLksCluster = {
  data: {
    type: "lks_clusters",
    attributes: {
      kubernetesVersion: "1.37.2",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [models.UpdateLksClusterData](../models/updatelksclusterdata.md) | :heavy_check_mark:                                               | N/A                                                              |