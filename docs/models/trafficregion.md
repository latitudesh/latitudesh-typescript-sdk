# TrafficRegion

## Example Usage

```typescript
import { TrafficRegion } from "latitudesh-typescript-sdk/models";

let value: TrafficRegion = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `regionSlug`                                           | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `totalInboundGb`                                       | *number*                                               | :heavy_minus_sign:                                     | Value in GB                                            |
| `totalOutboundGb`                                      | *number*                                               | :heavy_minus_sign:                                     | Value in GB                                            |
| `totalInbound95thPercentileMbps`                       | *number*                                               | :heavy_minus_sign:                                     | Value in MBps                                          |
| `totalOutbound95thPercentileMbps`                      | *number*                                               | :heavy_minus_sign:                                     | Value in MBps                                          |
| `data`                                                 | [models.AttributesData](../models/attributesdata.md)[] | :heavy_minus_sign:                                     | N/A                                                    |