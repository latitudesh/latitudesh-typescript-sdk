# Metrics

## Example Usage

```typescript
import { Metrics } from "latitudesh-typescript-sdk/models/operations";

let value: Metrics = {
  unit: "ratio",
  current: 0.0041,
  points: [
    {
      timestamp: new Date("2026-03-22T10:31:16.031Z"),
      value: 2776.12,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `unit`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    | ratio                                                  |
| `current`                                              | *number*                                               | :heavy_check_mark:                                     | N/A                                                    | 0.0041                                                 |
| `points`                                               | [operations.Point](../../models/operations/point.md)[] | :heavy_check_mark:                                     | N/A                                                    |                                                        |