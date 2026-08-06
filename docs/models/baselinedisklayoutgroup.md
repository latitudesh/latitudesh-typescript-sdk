# BaselineDiskLayoutGroup

## Example Usage

```typescript
import { BaselineDiskLayoutGroup } from "latitudesh-typescript-sdk/models";

let value: BaselineDiskLayoutGroup = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `role`                                                                                     | [models.BaselineDiskLayoutGroupRole](../models/baselinedisklayoutgrouprole.md)             | :heavy_minus_sign:                                                                         | Purpose of the disk group                                                                  |
| `count`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | Number of disks in the group                                                               |
| `raidLevel`                                                                                | [models.BaselineDiskLayoutGroupRaidLevel](../models/baselinedisklayoutgroupraidlevel.md)   | :heavy_minus_sign:                                                                         | RAID level for the group. Only valid for the 'os' and 'storage' roles                      |
| `filesystem`                                                                               | [models.BaselineDiskLayoutGroupFilesystem](../models/baselinedisklayoutgroupfilesystem.md) | :heavy_minus_sign:                                                                         | Filesystem to format the group with. Only valid for the 'storage' role                     |
| `mountPoint`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | Where the group is mounted. Required for the 'storage' role                                |