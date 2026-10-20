# LksAllocatableServers

## Example Usage

```typescript
import { LksAllocatableServers } from "latitudesh-typescript-sdk/models";

let value: LksAllocatableServers = {
  data: [
    {
      id: "sv_9dQKr1pRMLyd",
      attributes: {
        hostname: "gpu-box-1",
        plan: {
          slug: "g3-large-x86",
          name: "g3.large.x86",
        },
        status: "on",
        reasons: [
          "SERVER_LOCKED_ERROR",
        ],
        nodePoolId: "lksnp_9dQKr1pRMLyd",
        clusterId: "lksc_9dQKr1pRMLyd",
      },
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [models.LksAllocatableServerData](../models/lksallocatableserverdata.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |
| `meta`                                                                     | [models.LksAllocatableServersMeta](../models/lksallocatableserversmeta.md) | :heavy_minus_sign:                                                         | N/A                                                                        |