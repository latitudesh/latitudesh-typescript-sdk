# ClusterRequirements

## Example Usage

```typescript
import { ClusterRequirements } from "latitudesh-typescript-sdk/models";
import { RFCDate } from "latitudesh-typescript-sdk/types";

let value: ClusterRequirements = {
  data: {
    id: "proj_lxWpD699qm6rk",
    attributes: {
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
      nodeGroupOptions: null,
      signoff: {
        userEmail: "ana@example.com",
        signedAt: "2026-11-04T12:00:00Z",
      },
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [models.ClusterRequirementsData](../models/clusterrequirementsdata.md) | :heavy_minus_sign:                                                     | N/A                                                                    |