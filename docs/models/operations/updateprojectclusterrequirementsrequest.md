# UpdateProjectClusterRequirementsRequest

## Example Usage

```typescript
import { UpdateProjectClusterRequirementsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateProjectClusterRequirementsRequest = {
  projectId: "<id>",
  changeClusterRequirements: {
    data: {
      type: "cluster_requirements",
      attributes: {
        add: "storage_fs",
      },
    },
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | The ID or slug of a project that has a GPU cluster                            |
| `changeClusterRequirements`                                                   | [models.ChangeClusterRequirements](../../models/changeclusterrequirements.md) | :heavy_check_mark:                                                            | N/A                                                                           |