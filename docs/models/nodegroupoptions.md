# NodeGroupOptions

What a node group can be set to; null while the requirements are a draft

## Example Usage

```typescript
import { NodeGroupOptions } from "latitudesh-typescript-sdk/models";

let value: NodeGroupOptions = {
  maxServerCount: 1024,
  plans: [
    {
      slug: "g4-b300-large",
      name: "g4.b300.large",
      osOptions: [
        {
          slug: "ubuntu_24_04_x64_lts",
          name: "Ubuntu 24.04",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `kinds`                                                                          | [models.NodeGroupOptionsKind](../models/nodegroupoptionskind.md)[]               | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `maxServerCount`                                                                 | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 1024                                                                             |
| `plans`                                                                          | [models.ClusterRequirementsDataPlan](../models/clusterrequirementsdataplan.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |