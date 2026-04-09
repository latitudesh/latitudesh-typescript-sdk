# KubernetesAvailableVersionsData

## Example Usage

```typescript
import { KubernetesAvailableVersionsData } from "latitudesh-typescript-sdk/models";

let value: KubernetesAvailableVersionsData = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `version`                                                 | *string*                                                  | :heavy_minus_sign:                                        | The full Kubernetes version string (e.g., v1.35.3+rke2r1) |
| `minor`                                                   | *string*                                                  | :heavy_minus_sign:                                        | The minor version number (e.g., 1.35)                     |