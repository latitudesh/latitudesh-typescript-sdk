# CreateServerDiskLayout2

## Example Usage

```typescript
import { CreateServerDiskLayout2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateServerDiskLayout2 = {
  count: 243954,
  role: "storage",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `count`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `role`                                                                                   | [operations.CreateServerRole2](../../models/operations/createserverrole2.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `raidLevel`                                                                              | [operations.CreateServerRaidLevel2](../../models/operations/createserverraidlevel2.md)   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `filesystem`                                                                             | [operations.CreateServerFilesystem2](../../models/operations/createserverfilesystem2.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `mountPoint`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |