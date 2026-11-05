# CreateClusterNodeGroupData

## Example Usage

```typescript
import { CreateClusterNodeGroupData } from "latitudesh-typescript-sdk/models";

let value: CreateClusterNodeGroupData = {
  type: "cluster_node_groups",
  attributes: {
    name: "<value>",
    kind: "gpu",
    plan: "<value>",
    serverCount: 704364,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [models.CreateClusterNodeGroupType](../models/createclusternodegrouptype.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `attributes`                                                                             | [models.CreateClusterNodeGroupAttributes](../models/createclusternodegroupattributes.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |