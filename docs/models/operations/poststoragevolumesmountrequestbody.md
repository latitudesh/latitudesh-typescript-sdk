# PostStorageVolumesMountRequestBody

## Example Usage

```typescript
import { PostStorageVolumesMountRequestBody } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageVolumesMountRequestBody = {
  data: {
    type: "volumes",
    attributes: {
      nqn: "nqn.2024-01.com.example:server01",
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [operations.PostStorageVolumesMountData](../../models/operations/poststoragevolumesmountdata.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |