# ShowVirtualMachineMetricsRequest

## Example Usage

```typescript
import { ShowVirtualMachineMetricsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: ShowVirtualMachineMetricsRequest = {
  virtualMachineId: "<id>",
  metric: "disk",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `virtualMachineId`                                     | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `metric`                                               | [operations.Metric](../../models/operations/metric.md) | :heavy_check_mark:                                     | N/A                                                    |
| `range`                                                | [operations.Range](../../models/operations/range.md)   | :heavy_minus_sign:                                     | N/A                                                    |
| `forceRefresh`                                         | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |