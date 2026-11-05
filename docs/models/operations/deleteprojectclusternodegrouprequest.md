# DeleteProjectClusterNodeGroupRequest

## Example Usage

```typescript
import { DeleteProjectClusterNodeGroupRequest } from "latitudesh-typescript-sdk/models/operations";

let value: DeleteProjectClusterNodeGroupRequest = {
  projectId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `projectId`                                        | *string*                                           | :heavy_check_mark:                                 | The ID or slug of a project that has a GPU cluster |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | The node group ID                                  |