# PostStorageVolumesMapRequest

## Example Usage

```typescript
import { PostStorageVolumesMapRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageVolumesMapRequest = {
  id: "<id>",
  requestBody: {
    data: {
      type: "volumes",
      attributes: {
        serverId: "sv_abcd1234",
      },
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Volume ID                                                                                                    |
| `requestBody`                                                                                                | [operations.PostStorageVolumesMapRequestBody2](../../models/operations/poststoragevolumesmaprequestbody2.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |