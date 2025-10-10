# PatchStorageFilesystemsRequest

## Example Usage

```typescript
import { PatchStorageFilesystemsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PatchStorageFilesystemsRequest = {
  filesystemId: "<id>",
  requestBody: {
    data: {
      id: "<id>",
      type: "filesystems",
      attributes: {},
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `filesystemId`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `requestBody`                                                                                                    | [operations.PatchStorageFilesystemsRequestBody2](../../models/operations/patchstoragefilesystemsrequestbody2.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |