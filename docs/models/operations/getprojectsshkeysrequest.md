# GetProjectSshKeysRequest

## Example Usage

```typescript
import { GetProjectSshKeysRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetProjectSshKeysRequest = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Project ID or Slug                                                                                                          |
| `filterTags`                                                                                                                | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The tags ids to filter by, separated by comma, e.g. `filter[tags]=tag_1,tag_2`will return ssh keys with `tag_1` AND `tag_2` |