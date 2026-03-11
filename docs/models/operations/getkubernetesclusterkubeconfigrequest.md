# GetKubernetesClusterKubeconfigRequest

## Example Usage

```typescript
import { GetKubernetesClusterKubeconfigRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetKubernetesClusterKubeconfigRequest = {
  kubernetesClusterId: "<id>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `kubernetesClusterId`                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The cluster ID (format: kc_<hash>) or cluster name. Both formats are accepted for backward compatibility. |