# PostStorageObjectsAttributes

## Example Usage

```typescript
import { PostStorageObjectsAttributes } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageObjectsAttributes = {
  project: "<value>",
  name: "<value>",
  region: "<value>",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                       | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Project ID or slug                                                                                                              |
| `name`                                                                                                                          | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Object storage name. Cannot contain special characters or spaces.                                                               |
| `region`                                                                                                                        | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Site slug representing the region (e.g., DAL, SAO2)                                                                             |
| `scoped`                                                                                                                        | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Whether to create a scoped storage bucket. When true, the bucket is isolated to a specific customer context. Defaults to false. |
| `customer`                                                                                                                      | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Customer identifier for scoped storage. Used when `scoped` is true to create customer-specific bucket isolation.                |