# CreateServerReinstallDiskLayout2

## Example Usage

```typescript
import { CreateServerReinstallDiskLayout2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateServerReinstallDiskLayout2 = {
  count: 343689,
  role: "storage",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `role`                                                                                                     | [operations.CreateServerReinstallRole2](../../models/operations/createserverreinstallrole2.md)             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `raidLevel`                                                                                                | [operations.CreateServerReinstallRaidLevel2](../../models/operations/createserverreinstallraidlevel2.md)   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `filesystem`                                                                                               | [operations.CreateServerReinstallFilesystem2](../../models/operations/createserverreinstallfilesystem2.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `mountPoint`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |