# ShowManagedDatabaseMetricsResponse

OK

## Example Usage

```typescript
import { ShowManagedDatabaseMetricsResponse } from "latitudesh-typescript-sdk/models/operations";

let value: ShowManagedDatabaseMetricsResponse = {
  from: new Date("2026-09-08T22:16:01.144Z"),
  to: new Date("2026-02-20T03:28:57.771Z"),
  metrics: {
    "key": {
      unit: "ratio",
      current: 0.0041,
      points: [
        {
          timestamp: new Date("2026-03-22T10:31:16.031Z"),
          value: 2776.12,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metrics`                                                                                     | Record<string, [operations.Metrics](../../models/operations/metrics.md)>                      | :heavy_check_mark:                                                                            | N/A                                                                                           |