# LksNodes

## Example Usage

```typescript
import { LksNodes } from "latitudesh-typescript-sdk/models";

let value: LksNodes = {
  data: [
    {
      id: "lksno_3f9a2c71d0e84b",
      attributes: {
        name: "lksc-cd85490c6ee940-lksnp-d25a5b77339c45-cc286-42kpp",
        status: "ready",
        reason: "NodeUnreachable",
        server: {
          id: "sv_9dQKr1pRMLyd",
          status: "on",
        },
      },
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `data`                                           | [models.LksNodeData](../models/lksnodedata.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `meta`                                           | [models.LksNodesMeta](../models/lksnodesmeta.md) | :heavy_minus_sign:                               | N/A                                              |