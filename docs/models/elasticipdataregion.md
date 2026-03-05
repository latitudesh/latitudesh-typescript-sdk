# ElasticIpDataRegion

The region where this Elastic IP is located

## Example Usage

```typescript
import { ElasticIpDataRegion } from "latitudesh-typescript-sdk/models";

let value: ElasticIpDataRegion = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | The region ID                                                      |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The region name                                                    |
| `location`                                                         | [models.ElasticIpDataLocation](../models/elasticipdatalocation.md) | :heavy_minus_sign:                                                 | The site/location within the region                                |