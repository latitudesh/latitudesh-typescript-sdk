# PostStorageVolumesMapAttributes

## Example Usage

```typescript
import { PostStorageVolumesMapAttributes } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageVolumesMapAttributes = {
  serverId: "sv_abcd1234",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `serverId`                                                                                                                                             | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | ID of the server that will access the volume. The server must belong to the same project and location as the volume, and must be eligible for bonding. | sv_abcd1234                                                                                                                                            |