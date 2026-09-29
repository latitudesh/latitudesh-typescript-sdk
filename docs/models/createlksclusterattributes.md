# CreateLksClusterAttributes

## Example Usage

```typescript
import { CreateLksClusterAttributes } from "latitudesh-typescript-sdk/models";

let value: CreateLksClusterAttributes = {
  name: "<value>",
  projectId: "<id>",
  site: "<value>",
  kubernetesVersion: "1.36.3",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Display name for the cluster                                           |                                                                        |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The project ID                                                         |                                                                        |
| `site`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Site slug (single site per cluster)                                    |                                                                        |
| `kubernetesVersion`                                                    | *string*                                                               | :heavy_check_mark:                                                     | Kubernetes patch, exactly as listed by /lks/available_versions         | 1.36.3                                                                 |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Optional customer description                                          |                                                                        |
| `network`                                                              | [models.CreateLksClusterNetwork](../models/createlksclusternetwork.md) | :heavy_minus_sign:                                                     | Optional network overrides; platform defaults used if omitted          |                                                                        |