# ClusterRequirementsDataAttributes

## Example Usage

```typescript
import { ClusterRequirementsDataAttributes } from "latitudesh-typescript-sdk/models";
import { RFCDate } from "latitudesh-typescript-sdk/types";

let value: ClusterRequirementsDataAttributes = {
  requirementsDueDate: new RFCDate("2026-11-20"),
  requirements: {
    items: [
      {
        id: "bios_smt",
        label: "BIOS: multithreading",
        category: "bios",
        check: "bios_smt",
      },
    ],
    values: {
      "key": {
        expected: "Disabled",
        note: "HPC jobs",
      },
    },
  },
  nodeGroups: [
    {
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
    },
  ],
  nodeGroupOptions: {
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
  },
  signoff: {
    userEmail: "ana@example.com",
    signedAt: "2026-11-04T12:00:00Z",
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        | Example                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `requirementsState`                                                                                                                                                | [models.RequirementsState](../models/requirementsstate.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                 | draft while they're being prepared; awaiting_signature to review and sign; signed once an owner or administrator signs. Any later change asks for a new signature. |                                                                                                                                                                    |
| `requirementsDueDate`                                                                                                                                              | [RFCDate](../types/rfcdate.md)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                | 2026-11-20                                                                                                                                                         |
| `requirements`                                                                                                                                                     | [models.Requirements](../models/requirements.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                 | The cluster's requirements, and what is expected of each                                                                                                           |                                                                                                                                                                    |
| `nodeGroups`                                                                                                                                                       | [models.NodeGroup](../models/nodegroup.md)[]                                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Empty while the requirements are a draft                                                                                                                           |                                                                                                                                                                    |
| `nodeGroupOptions`                                                                                                                                                 | [models.NodeGroupOptions](../models/nodegroupoptions.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | What a node group can be set to; null while the requirements are a draft                                                                                           |                                                                                                                                                                    |
| `requirementsVersion`                                                                                                                                              | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | Identifies the requirements shown; signing needs the version the signer was shown                                                                                  |                                                                                                                                                                    |
| `signoff`                                                                                                                                                          | [models.Signoff](../models/signoff.md)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                 | The latest signature while the requirements are signed                                                                                                             |                                                                                                                                                                    |