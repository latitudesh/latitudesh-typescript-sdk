# Raid

Expected RAID level with the default disk layout (data array on 4+ disk servers, the OS on 2-3 disk servers). Mutually exclusive with disk_layout

## Example Usage

```typescript
import { Raid } from "latitudesh-typescript-sdk/models";

let value: Raid = "raid-1";
```

## Values

```typescript
"raid-0" | "raid-1" | "raid-10"
```