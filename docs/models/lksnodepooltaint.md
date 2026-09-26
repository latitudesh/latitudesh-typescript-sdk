# LksNodePoolTaint

## Example Usage

```typescript
import { LksNodePoolTaint } from "latitudesh-typescript-sdk/models";

let value: LksNodePoolTaint = {
  key: "dedicated",
  value: "gpu",
  effect: "NoSchedule",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `key`                                                                       | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         | dedicated                                                                   |
| `value`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | May be empty; max 63 chars. Absent or null when the taint carries no value. | gpu                                                                         |
| `effect`                                                                    | [models.Effect](../models/effect.md)                                        | :heavy_check_mark:                                                          | N/A                                                                         | NoSchedule                                                                  |