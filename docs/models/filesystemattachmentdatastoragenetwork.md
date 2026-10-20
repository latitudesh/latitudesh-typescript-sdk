# FilesystemAttachmentDataStorageNetwork

Storage network to configure on the server before mounting the filesystem. Null until the status is "attached".

## Example Usage

```typescript
import { FilesystemAttachmentDataStorageNetwork } from "latitudesh-typescript-sdk/models";

let value: FilesystemAttachmentDataStorageNetwork = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `vid`                                                      | *number*                                                   | :heavy_minus_sign:                                         | VLAN ID of the storage VLAN.                               |
| `hostCidr`                                                 | *string*                                                   | :heavy_minus_sign:                                         | Storage IP of the server, in CIDR notation.                |
| `gateway`                                                  | *string*                                                   | :heavy_minus_sign:                                         | Gateway of the storage network, used for the routes below. |
| `routes`                                                   | *string*[]                                                 | :heavy_minus_sign:                                         | Storage infrastructure prefixes to route via the gateway.  |