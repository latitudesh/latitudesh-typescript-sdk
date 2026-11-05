# ClusterNodeGroup

## Example Usage

```typescript
import { ClusterNodeGroup } from "latitudesh-typescript-sdk/models";

let value: ClusterNodeGroup = {
  data: {
    id: "7",
    attributes: {
      name: "gpu-workers",
      kind: "gpu",
      plan: "g4-b300-large",
      planName: "g4.b300.large",
      serverCount: 16,
      os: "ubuntu_24_04_x64_lts",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [models.ClusterNodeGroupData](../models/clusternodegroupdata.md) | :heavy_minus_sign:                                               | N/A                                                              |