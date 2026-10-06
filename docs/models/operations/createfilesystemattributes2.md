# CreateFilesystemAttributes2

## Example Usage

```typescript
import { CreateFilesystemAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateFilesystemAttributes2 = {
  project: "<value>",
  name: "<value>",
  region: "<value>",
  protocols: [
    "nfs4",
  ],
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project`                                                                                                                                            | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Project ID or slug                                                                                                                                   |
| `name`                                                                                                                                               | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Filesystem name. "block" is reserved and cannot be used.                                                                                             |
| `region`                                                                                                                                             | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Region (site) slug where the filesystem is provisioned. Required for high performance file storage; an unknown slug is rejected with INVALID_REGION. |
| `sizeInGb`                                                                                                                                           | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | Size in GB (not required, default is 1500)                                                                                                           |
| `protocols`                                                                                                                                          | [operations.CreateFilesystemProtocol2](../../models/operations/createfilesystemprotocol2.md)[]                                                       | :heavy_check_mark:                                                                                                                                   | NFS protocol version(s) to mount the filesystem with. Case-insensitive. Pass both nfs3 and nfs4 to allow either protocol.                            |