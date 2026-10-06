# UpdateFilesystemRequest

## Example Usage

```typescript
import { UpdateFilesystemRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateFilesystemRequest = {
  filesystemId: "<id>",
  requestBody: {
    data: {
      type: "filesystems",
      attributes: {
        sizeInGb: 851796,
      },
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `filesystemId`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `requestBody`                                                                                      | [operations.UpdateFilesystemRequestBody2](../../models/operations/updatefilesystemrequestbody2.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |