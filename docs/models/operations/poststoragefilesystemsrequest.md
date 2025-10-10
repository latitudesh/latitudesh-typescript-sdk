# PostStorageFilesystemsRequest

## Example Usage

```typescript
import { PostStorageFilesystemsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageFilesystemsRequest = {
  data: {
    type: "filesystems",
    attributes: {
      project: "<value>",
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [operations.PostStorageFilesystemsData2](../../models/operations/poststoragefilesystemsdata2.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |