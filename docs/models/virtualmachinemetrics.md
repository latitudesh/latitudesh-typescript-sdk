# VirtualMachineMetrics

## Example Usage

```typescript
import { VirtualMachineMetrics } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineMetrics = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `metric`                                                                   | [models.Metric](../models/metric.md)                                       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `range`                                                                    | [models.Range](../models/range.md)                                         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `step`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Sampling interval between adjacent points (e.g. "15s", "1m")               |
| `unit`                                                                     | [models.VirtualMachineMetricsUnit](../models/virtualmachinemetricsunit.md) | :heavy_minus_sign:                                                         | Unit applied to every point value                                          |
| `points`                                                                   | [models.Point](../models/point.md)[]                                       | :heavy_minus_sign:                                                         | N/A                                                                        |