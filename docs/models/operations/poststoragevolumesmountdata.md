# PostStorageVolumesMountData

## Example Usage

```typescript
import { PostStorageVolumesMountData } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageVolumesMountData = {
  type: "volumes",
  attributes: {
    nqn: "nqn.2024-01.com.example:server01",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.PostStorageVolumesMountType](../../models/operations/poststoragevolumesmounttype.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `attributes`                                                                                                 | [operations.PostStorageVolumesMountAttributes](../../models/operations/poststoragevolumesmountattributes.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |