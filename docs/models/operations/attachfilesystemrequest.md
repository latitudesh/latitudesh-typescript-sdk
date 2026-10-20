# AttachFilesystemRequest

## Example Usage

```typescript
import { AttachFilesystemRequest } from "latitudesh-typescript-sdk/models/operations";

let value: AttachFilesystemRequest = {
  filesystemId: "<id>",
  requestBody: {
    data: {
      type: "filesystems",
      attributes: {
        serverId: "sv_abcd1234",
      },
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `filesystemId`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | Filesystem ID                                                                                      |
| `requestBody`                                                                                      | [operations.AttachFilesystemRequestBody2](../../models/operations/attachfilesystemrequestbody2.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |