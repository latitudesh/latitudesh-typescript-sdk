# ClusterRequirementsDataPlan

## Example Usage

```typescript
import { ClusterRequirementsDataPlan } from "latitudesh-typescript-sdk/models";

let value: ClusterRequirementsDataPlan = {
  slug: "g4-b300-large",
  name: "g4.b300.large",
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
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | g4-b300-large                                            |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | g4.b300.large                                            |
| `osOptions`                                              | [models.ClusterOsOption](../models/clusterosoption.md)[] | :heavy_minus_sign:                                       | N/A                                                      |                                                          |