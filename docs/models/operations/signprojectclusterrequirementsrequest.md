# SignProjectClusterRequirementsRequest

## Example Usage

```typescript
import { SignProjectClusterRequirementsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: SignProjectClusterRequirementsRequest = {
  projectId: "<id>",
  signClusterRequirements: {
    data: {
      type: "cluster_requirements",
      attributes: {
        requirementsVersion: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `projectId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | The ID or slug of a project that has a GPU cluster                        |
| `signClusterRequirements`                                                 | [models.SignClusterRequirements](../../models/signclusterrequirements.md) | :heavy_check_mark:                                                        | N/A                                                                       |