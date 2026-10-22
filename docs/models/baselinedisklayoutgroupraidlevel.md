# BaselineDiskLayoutGroupRaidLevel

RAID level for the group. Only valid for the 'os' and 'storage' roles; 'raid-10' is storage-only, needs at least 4 disks, and is applied only at locations with the `raid_ten` feature

## Example Usage

```typescript
import { BaselineDiskLayoutGroupRaidLevel } from "latitudesh-typescript-sdk/models";

let value: BaselineDiskLayoutGroupRaidLevel = "raid-10";
```

## Values

```typescript
"raid-0" | "raid-1" | "raid-10"
```