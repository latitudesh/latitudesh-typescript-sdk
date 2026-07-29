# DeleteStorageAccessKeysUsernameRequest

## Example Usage

```typescript
import { DeleteStorageAccessKeysUsernameRequest } from "latitudesh-typescript-sdk/models/operations";

let value: DeleteStorageAccessKeysUsernameRequest = {
  username: "Michele_Simonis",
  storageClass: "standard",
  project: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `username`                                                                                                                                       | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Name of the access key to delete.                                                                                                                |
| `storageClass`                                                                                                                                   | [operations.DeleteStorageAccessKeysUsernameStorageClass](../../models/operations/deletestorageaccesskeysusernamestorageclass.md)                 | :heavy_check_mark:                                                                                                                               | Backend storage tier of the access key. `standard` targets Wasabi; `high_performance` targets VAST.                                              |
| `project`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Project ID or slug the access key belongs to.                                                                                                    |
| `region`                                                                                                                                         | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Region slug (e.g., `DAL`, `SAO2`). Required for `high_performance` (VAST) keys to select the VAST cluster; ignored for `standard` (Wasabi) keys. |