# UpdateFilesystemData2

## Example Usage

```typescript
import { UpdateFilesystemData2 } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateFilesystemData2 = {
  type: "filesystems",
  attributes: {
    sizeInGb: 851796,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | Filesystem ID                                                                                    |
| `type`                                                                                           | [operations.UpdateFilesystemType2](../../models/operations/updatefilesystemtype2.md)             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `attributes`                                                                                     | [operations.UpdateFilesystemAttributes2](../../models/operations/updatefilesystemattributes2.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |