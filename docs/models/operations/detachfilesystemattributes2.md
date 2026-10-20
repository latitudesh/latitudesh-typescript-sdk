# DetachFilesystemAttributes2

## Example Usage

```typescript
import { DetachFilesystemAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: DetachFilesystemAttributes2 = {
  serverId: "sv_abcd1234",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `serverId`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | ID of the server to detach. The server must belong to the same project and location as the filesystem. | sv_abcd1234                                                                                            |