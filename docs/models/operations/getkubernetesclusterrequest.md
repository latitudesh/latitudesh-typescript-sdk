# GetKubernetesClusterRequest

## Example Usage

```typescript
import { GetKubernetesClusterRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetKubernetesClusterRequest = {
  kubernetesClusterId: "<id>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `kubernetesClusterId`                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The cluster ID (format: kc_<hash>) or cluster name. Both formats are accepted for backward compatibility. |