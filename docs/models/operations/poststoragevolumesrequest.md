# PostStorageVolumesRequest

## Example Usage

```typescript
import { PostStorageVolumesRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageVolumesRequest = {
  data: {
    type: "volumes",
    attributes: {
      project: "<value>",
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [operations.PostStorageVolumesData2](../../models/operations/poststoragevolumesdata2.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |