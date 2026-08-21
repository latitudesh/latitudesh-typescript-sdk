# PostStorageVolumesAttributes2

## Example Usage

```typescript
import { PostStorageVolumesAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageVolumesAttributes2 = {
  project: "<value>",
  name: "<value>",
  region: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `project`                                          | *string*                                           | :heavy_check_mark:                                 | Project ID or slug                                 |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Volume name                                        |
| `region`                                           | *string*                                           | :heavy_check_mark:                                 | Region (site) slug where the volume is provisioned |
| `sizeInGb`                                         | *number*                                           | :heavy_minus_sign:                                 | Size in GB (not required, default is 1500)         |