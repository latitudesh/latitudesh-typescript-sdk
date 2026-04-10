# KubernetesAvailableVersionsData

## Example Usage

```typescript
import { KubernetesAvailableVersionsData } from "latitudesh-typescript-sdk/models";

let value: KubernetesAvailableVersionsData = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `latest`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | The latest full Kubernetes version string for this minor version (e.g., v1.35.3+rke2r1) |
| `minor`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | The minor version number (e.g., 1.35)                                                   |