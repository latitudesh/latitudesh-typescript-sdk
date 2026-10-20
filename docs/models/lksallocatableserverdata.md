# LksAllocatableServerData

## Example Usage

```typescript
import { LksAllocatableServerData } from "latitudesh-typescript-sdk/models";

let value: LksAllocatableServerData = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | Server id — pass it in `server_ids`                                                          | sv_9dQKr1pRMLyd                                                                              |
| `type`                                                                                       | [models.LksAllocatableServerDataType](../models/lksallocatableserverdatatype.md)             | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `attributes`                                                                                 | [models.LksAllocatableServerDataAttributes](../models/lksallocatableserverdataattributes.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |