# TrafficRegion

## Example Usage

```typescript
import { TrafficRegion } from "latitudesh-typescript-sdk/models";

let value: TrafficRegion = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `regionSlug`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `totalInboundGb`                                                         | *number*                                                                 | :heavy_minus_sign:                                                       | Value in GB                                                              |
| `totalOutboundGb`                                                        | *number*                                                                 | :heavy_minus_sign:                                                       | Value in GB                                                              |
| `totalInbound95thPercentileMbps`                                         | *number*                                                                 | :heavy_minus_sign:                                                       | The 95th percentile of inbound bandwidth for this region. Value in Mbps  |
| `totalOutbound95thPercentileMbps`                                        | *number*                                                                 | :heavy_minus_sign:                                                       | The 95th percentile of outbound bandwidth for this region. Value in Mbps |
| `data`                                                                   | [models.AttributesData](../models/attributesdata.md)[]                   | :heavy_minus_sign:                                                       | N/A                                                                      |