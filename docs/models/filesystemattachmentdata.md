# FilesystemAttachmentData

## Example Usage

```typescript
import { FilesystemAttachmentData } from "latitudesh-typescript-sdk/models";

let value: FilesystemAttachmentData = {
  id: "fs_abcd1234_sv_efgh5678",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | ID of the attachment: the filesystem ID and the server ID joined by "_".                     | fs_abcd1234_sv_efgh5678                                                                      |
| `type`                                                                                       | [models.FilesystemAttachmentDataType](../models/filesystemattachmentdatatype.md)             | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `attributes`                                                                                 | [models.FilesystemAttachmentDataAttributes](../models/filesystemattachmentdataattributes.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |