# CreateFilesystemData2

## Example Usage

```typescript
import { CreateFilesystemData2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateFilesystemData2 = {
  type: "filesystems",
  attributes: {
    project: "<value>",
    name: "<value>",
    region: "<value>",
    protocols: [
      "nfs3",
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [operations.CreateFilesystemType2](../../models/operations/createfilesystemtype2.md)             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `attributes`                                                                                     | [operations.CreateFilesystemAttributes2](../../models/operations/createfilesystemattributes2.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |