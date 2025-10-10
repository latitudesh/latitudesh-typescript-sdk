# TrafficAttributes

## Example Usage

```typescript
import { TrafficAttributes } from "latitudesh-typescript-sdk/models";

let value: TrafficAttributes = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `fromDate`                                           | *number*                                             | :heavy_minus_sign:                                   | The start timestamp. Must be a unix timestamp        |
| `toDate`                                             | *number*                                             | :heavy_minus_sign:                                   | The end timestamp. Must be a unix timestamp          |
| `regions`                                            | [models.TrafficRegion](../models/trafficregion.md)[] | :heavy_minus_sign:                                   | N/A                                                  |
| `totalInboundGb`                                     | *number*                                             | :heavy_minus_sign:                                   | Value in GB                                          |
| `totalOutboundGb`                                    | *number*                                             | :heavy_minus_sign:                                   | Value in GB                                          |
| `totalInbound95thPercentileMbps`                     | *number*                                             | :heavy_minus_sign:                                   | Value in MBps                                        |
| `totalOutbound95thPercentileMbps`                    | *number*                                             | :heavy_minus_sign:                                   | Value in MBps                                        |