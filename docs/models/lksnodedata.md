# LksNodeData

## Example Usage

```typescript
import { LksNodeData } from "latitudesh-typescript-sdk/models";

let value: LksNodeData = {
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | lksno_3f9a2c71d0e84b                                               |
| `type`                                                             | [models.LksNodeDataType](../models/lksnodedatatype.md)             | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `attributes`                                                       | [models.LksNodeDataAttributes](../models/lksnodedataattributes.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |