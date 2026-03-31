# UpdateKubernetesClusterAttributes

Exactly one of worker_count or control_plane_count must be provided. These parameters are mutually exclusive.

## Example Usage

```typescript
import { UpdateKubernetesClusterAttributes } from "latitudesh-typescript-sdk/models";

let value: UpdateKubernetesClusterAttributes = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `workerCount`                                                                                                  | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Desired number of worker nodes. Must be between 0 and 10. Mutually exclusive with control_plane_count.         |
| `controlPlaneCount`                                                                                            | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Desired number of control plane nodes. Minimum 1. Mutually exclusive with worker_count.                        |
| `workerPlan`                                                                                                   | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Plan slug for worker nodes. Required when scaling from 0 workers. Ignored when scaling an existing deployment. |