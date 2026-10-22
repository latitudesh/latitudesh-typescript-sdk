# CreateServerRaid2

RAID mode for the server. Set to 'raid-0' for RAID 0, 'raid-1' for RAID 1, 'raid-10' for RAID 10 on the data disks (only at locations with the `raid_ten` feature), or omit/null for no RAID configuration

## Example Usage

```typescript
import { CreateServerRaid2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateServerRaid2 = "raid-10";
```

## Values

```typescript
"raid-0" | "raid-1" | "raid-10"
```