# LksNodeDataAttributes

## Example Usage

```typescript
import { LksNodeDataAttributes } from "latitudesh-typescript-sdk/models";

let value: LksNodeDataAttributes = {
  name: "lksc-cd85490c6ee940-lksnp-d25a5b77339c45-cc286-42kpp",
  status: "ready",
  reason: "NodeUnreachable",
  server: {
    id: "sv_9dQKr1pRMLyd",
    status: "on",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | The Kubernetes node name, as shown by `kubectl get nodes`                       | lksc-cd85490c6ee940-lksnp-d25a5b77339c45-cc286-42kpp                            |
| `status`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Open set: pending, ready, not_ready, deleting                                   | ready                                                                           |
| `reason`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Machine-readable status reason (open enum); empty or null when none is reported | NodeUnreachable                                                                 |
| `message`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | Human-readable detail of the status                                             |                                                                                 |
| `server`                                                                        | [models.LksNodeDataServer](../models/lksnodedataserver.md)                      | :heavy_minus_sign:                                                              | The server the node runs on; null until the node is bound to one                |                                                                                 |
| `joinedAt`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `createdAt`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `updatedAt`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |