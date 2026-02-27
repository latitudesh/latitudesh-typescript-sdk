# KubernetesClusterCreateResponseAttributes

## Example Usage

```typescript
import { KubernetesClusterCreateResponseAttributes } from "latitudesh-typescript-sdk/models";

let value: KubernetesClusterCreateResponseAttributes = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `name`                                                 | *string*                                               | :heavy_minus_sign:                                     | The cluster name                                       |
| `status`                                               | *string*                                               | :heavy_minus_sign:                                     | The cluster status (always 'provisioning' on creation) |
| `controlPlaneEndpoint`                                 | *string*                                               | :heavy_minus_sign:                                     | The URL endpoint for the Kubernetes API server         |