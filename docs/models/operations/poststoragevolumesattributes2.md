# PostStorageVolumesAttributes2

## Example Usage

```typescript
import { PostStorageVolumesAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageVolumesAttributes2 = {
  project: "<value>",
  name: "<value>",
  region: "<value>",
  sizeInGb: 923022,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `project`                                          | *string*                                           | :heavy_check_mark:                                 | Project ID or slug                                 |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Volume name                                        |
| `region`                                           | *string*                                           | :heavy_check_mark:                                 | Region (site) slug where the volume is provisioned |
| `sizeInGb`                                         | *number*                                           | :heavy_check_mark:                                 | Size in GB                                         |