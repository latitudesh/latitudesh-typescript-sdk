# UpdateVolumeAttributes2

## Example Usage

```typescript
import { UpdateVolumeAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateVolumeAttributes2 = {
  sizeInGb: 993930,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `sizeInGb`                                            | *number*                                              | :heavy_check_mark:                                    | New size in GB. Must be larger than the current size. |