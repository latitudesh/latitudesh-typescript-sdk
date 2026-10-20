# DetachFilesystemRequest

## Example Usage

```typescript
import { DetachFilesystemRequest } from "latitudesh-typescript-sdk/models/operations";

let value: DetachFilesystemRequest = {
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
| `requestBody`                                                                                      | [operations.DetachFilesystemRequestBody2](../../models/operations/detachfilesystemrequestbody2.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |