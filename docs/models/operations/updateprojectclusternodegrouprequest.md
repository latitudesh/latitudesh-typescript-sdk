# UpdateProjectClusterNodeGroupRequest

## Example Usage

```typescript
import { UpdateProjectClusterNodeGroupRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateProjectClusterNodeGroupRequest = {
  projectId: "<id>",
  id: "<id>",
  updateClusterNodeGroup: {
    data: {
      type: "cluster_node_groups",
      attributes: {},
    },
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `projectId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | The ID or slug of a project that has a GPU cluster                      |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | The node group ID                                                       |
| `updateClusterNodeGroup`                                                | [models.UpdateClusterNodeGroup](../../models/updateclusternodegroup.md) | :heavy_check_mark:                                                      | N/A                                                                     |