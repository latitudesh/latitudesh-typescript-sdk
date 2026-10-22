# CreateBaselineRaid2

RAID level for the default disk layout. With 4 or more disks (or a hardware RAID boot disk) the OS stays on the boot disk or a RAID 1 mirror and the remaining disks form the data array at /data at this level; with 2-3 disks the level applies to the OS across all disks. 'raid-10' is data-only, needs at least 4 data disks and is applied only at locations with the `raid_ten` feature. Mutually exclusive with disk_layout

## Example Usage

```typescript
import { CreateBaselineRaid2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateBaselineRaid2 = "raid-10";
```

## Values

```typescript
"raid-0" | "raid-1" | "raid-10"
```