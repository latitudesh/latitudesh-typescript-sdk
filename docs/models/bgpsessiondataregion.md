# BgpSessionDataRegion

The region where this Elastic IP is located

## Example Usage

```typescript
import { BgpSessionDataRegion } from "latitudesh-typescript-sdk/models";

let value: BgpSessionDataRegion = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | The region ID                                                        |
| `name`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | The region name                                                      |
| `location`                                                           | [models.BgpSessionDataLocation](../models/bgpsessiondatalocation.md) | :heavy_minus_sign:                                                   | The site/location within the region                                  |