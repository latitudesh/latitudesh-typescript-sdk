# ClusterNodeGroupDataAttributes

## Example Usage

```typescript
import { ClusterNodeGroupDataAttributes } from "latitudesh-typescript-sdk/models";

let value: ClusterNodeGroupDataAttributes = {
  name: "gpu-workers",
  kind: "gpu",
  plan: "g4-b300-large",
  planName: "g4.b300.large",
  serverCount: 16,
  os: "ubuntu_24_04_x64_lts",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | gpu-workers                                                              |
| `kind`                                                                   | [models.ClusterNodeGroupDataKind](../models/clusternodegroupdatakind.md) | :heavy_minus_sign:                                                       | N/A                                                                      | gpu                                                                      |
| `plan`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The plan slug; null while no plan is set                                 | g4-b300-large                                                            |
| `planName`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | g4.b300.large                                                            |
| `serverCount`                                                            | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 16                                                                       |
| `os`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | The operating system slug; null while none is set                        | ubuntu_24_04_x64_lts                                                     |