# UpdateLksClusterAttributes

At least one of name, description or kubernetes_version must be provided.

## Example Usage

```typescript
import { UpdateLksClusterAttributes } from "latitudesh-typescript-sdk/models";

let value: UpdateLksClusterAttributes = {
  kubernetesVersion: "1.37.2",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                          | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `description`                                                                                                                   | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `kubernetesVersion`                                                                                                             | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Setting a newer patch consents to a control-plane upgrade. Must not be lower than the current patch (422 DOWNGRADE_NOT_ALLOWED) | 1.37.2                                                                                                                          |