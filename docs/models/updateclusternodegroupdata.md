# UpdateClusterNodeGroupData

## Example Usage

```typescript
import { UpdateClusterNodeGroupData } from "latitudesh-typescript-sdk/models";

let value: UpdateClusterNodeGroupData = {
  type: "cluster_node_groups",
  attributes: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [models.UpdateClusterNodeGroupType](../models/updateclusternodegrouptype.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `attributes`                                                                             | [models.UpdateClusterNodeGroupAttributes](../models/updateclusternodegroupattributes.md) | :heavy_check_mark:                                                                       | At least one attribute. Only the attributes sent change.                                 |