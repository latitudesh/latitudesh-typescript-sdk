# ClusterNodeGroupData

## Example Usage

```typescript
import { ClusterNodeGroupData } from "latitudesh-typescript-sdk/models";

let value: ClusterNodeGroupData = {
  id: "7",
  attributes: {
    name: "gpu-workers",
    kind: "gpu",
    plan: "g4-b300-large",
    planName: "g4.b300.large",
    serverCount: 16,
    os: "ubuntu_24_04_x64_lts",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The node group id                                                                    | 7                                                                                    |
| `type`                                                                               | [models.ClusterNodeGroupDataType](../models/clusternodegroupdatatype.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `attributes`                                                                         | [models.ClusterNodeGroupDataAttributes](../models/clusternodegroupdataattributes.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |