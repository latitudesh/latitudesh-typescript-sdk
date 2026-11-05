# CreateProjectClusterNodeGroupRequest

## Example Usage

```typescript
import { CreateProjectClusterNodeGroupRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateProjectClusterNodeGroupRequest = {
  projectId: "<id>",
  createClusterNodeGroup: {
    data: {
      type: "cluster_node_groups",
      attributes: {
        name: "<value>",
        kind: "gpu",
        plan: "<value>",
        serverCount: 704364,
      },
    },
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `projectId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | The ID or slug of a project that has a GPU cluster                      |
| `createClusterNodeGroup`                                                | [models.CreateClusterNodeGroup](../../models/createclusternodegroup.md) | :heavy_check_mark:                                                      | N/A                                                                     |