# ChangeClusterRequirementsData

## Example Usage

```typescript
import { ChangeClusterRequirementsData } from "latitudesh-typescript-sdk/models";

let value: ChangeClusterRequirementsData = {
  type: "cluster_requirements",
  attributes: {
    add: "storage_fs",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [models.ChangeClusterRequirementsType](../models/changeclusterrequirementstype.md)                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `attributes`                                                                                         | [models.ChangeClusterRequirementsAttributes](../models/changeclusterrequirementsattributes.md)       | :heavy_check_mark:                                                                                   | Exactly one of add, add_checks, remove, remove_checks or set. expected and note go with add and set. |