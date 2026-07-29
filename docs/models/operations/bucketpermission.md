# BucketPermission

## Example Usage

```typescript
import { BucketPermission } from "latitudesh-typescript-sdk/models/operations";

let value: BucketPermission = {
  bucketId: "<id>",
  permission: "rw",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `bucketId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | Bucket (object storage) ID to grant access to.                         |
| `permission`                                                           | [operations.Permission](../../models/operations/permission.md)         | :heavy_check_mark:                                                     | `readonly` grants read-only access; `rw` grants read and write access. |