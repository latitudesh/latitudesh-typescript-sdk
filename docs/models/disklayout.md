# DiskLayout

## Example Usage

```typescript
import { DiskLayout } from "latitudesh-typescript-sdk/models";

let value: DiskLayout = {
  count: 687411,
  role: "storage",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `role`                                                   | [models.DeployConfigRole](../models/deployconfigrole.md) | :heavy_check_mark:                                       | N/A                                                      |
| `raidLevel`                                              | [models.RaidLevel](../models/raidlevel.md)               | :heavy_minus_sign:                                       | N/A                                                      |
| `filesystem`                                             | [models.Filesystem](../models/filesystem.md)             | :heavy_minus_sign:                                       | N/A                                                      |
| `mountPoint`                                             | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |