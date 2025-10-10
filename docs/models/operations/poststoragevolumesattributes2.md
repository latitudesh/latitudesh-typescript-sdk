# PostStorageVolumesAttributes2

## Example Usage

```typescript
import { PostStorageVolumesAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageVolumesAttributes2 = {
  project: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `project`                                  | *string*                                   | :heavy_check_mark:                         | Project ID or slug                         |
| `name`                                     | *string*                                   | :heavy_check_mark:                         | Storage name                               |
| `sizeInGb`                                 | *number*                                   | :heavy_minus_sign:                         | Size in GB (not required, default is 1500) |