# CreateClusterNodeGroup

## Example Usage

```typescript
import { CreateClusterNodeGroup } from "latitudesh-typescript-sdk/models";

let value: CreateClusterNodeGroup = {
  data: {
    type: "cluster_node_groups",
    attributes: {
      name: "<value>",
      kind: "gpu",
      plan: "<value>",
      serverCount: 704364,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [models.CreateClusterNodeGroupData](../models/createclusternodegroupdata.md) | :heavy_check_mark:                                                           | N/A                                                                          |