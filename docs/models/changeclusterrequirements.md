# ChangeClusterRequirements

## Example Usage

```typescript
import { ChangeClusterRequirements } from "latitudesh-typescript-sdk/models";

let value: ChangeClusterRequirements = {
  data: {
    type: "cluster_requirements",
    attributes: {
      add: "storage_fs",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [models.ChangeClusterRequirementsData](../models/changeclusterrequirementsdata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |