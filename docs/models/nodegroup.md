# NodeGroup

## Example Usage

```typescript
import { NodeGroup } from "latitudesh-typescript-sdk/models";

let value: NodeGroup = {
  id: "7",
  name: "gpu-workers",
  kind: "gpu",
  plan: "g4-b300-large",
  planName: "g4.b300.large",
  serverCount: 16,
  os: "ubuntu_24_04_x64_lts",
  osOptions: [
    {
      slug: "ubuntu_24_04_x64_lts",
      name: "Ubuntu 24.04",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_minus_sign:                                       | The node group ID                                        | 7                                                        |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | gpu-workers                                              |
| `kind`                                                   | [models.NodeGroupKind](../models/nodegroupkind.md)       | :heavy_minus_sign:                                       | N/A                                                      | gpu                                                      |
| `plan`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The plan slug                                            | g4-b300-large                                            |
| `planName`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | g4.b300.large                                            |
| `serverCount`                                            | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      | 16                                                       |
| `os`                                                     | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | ubuntu_24_04_x64_lts                                     |
| `osOptions`                                              | [models.ClusterOsOption](../models/clusterosoption.md)[] | :heavy_minus_sign:                                       | The operating systems this node group can run            |                                                          |