# KubernetesClusterSummaryData

Summary representation of a cluster (used in list responses)

## Example Usage

```typescript
import { KubernetesClusterSummaryData } from "latitudesh-typescript-sdk/models";

let value: KubernetesClusterSummaryData = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The cluster ID in hashed format (kc_<hash>)                                                          |
| `type`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `attributes`                                                                                         | [models.KubernetesClusterSummaryDataAttributes](../models/kubernetesclustersummarydataattributes.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |