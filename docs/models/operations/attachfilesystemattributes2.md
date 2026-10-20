# AttachFilesystemAttributes2

## Example Usage

```typescript
import { AttachFilesystemAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: AttachFilesystemAttributes2 = {
  serverId: "sv_abcd1234",
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   | Example                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serverId`                                                                                                                                                    | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | ID of the server that will mount the filesystem. The server must belong to the same project and location as the filesystem, and must be eligible for bonding. | sv_abcd1234                                                                                                                                                   |