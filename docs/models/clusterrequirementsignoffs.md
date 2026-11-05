# ClusterRequirementSignoffs

## Example Usage

```typescript
import { ClusterRequirementSignoffs } from "latitudesh-typescript-sdk/models";

let value: ClusterRequirementSignoffs = {
  data: [
    {
      id: "2",
      attributes: {
        userEmail: "ana@example.com",
        signedAt: "2026-11-04T12:00:00Z",
      },
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [models.ClusterRequirementSignoffsData](../models/clusterrequirementsignoffsdata.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `meta`                                                                                 | [models.ClusterRequirementSignoffsMeta](../models/clusterrequirementsignoffsmeta.md)   | :heavy_minus_sign:                                                                     | N/A                                                                                    |