# ProjectAttributes

## Example Usage

```typescript
import { ProjectAttributes } from "latitudesh-typescript-sdk/models";

let value: ProjectAttributes = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `name`                                               | *string*                                             | :heavy_minus_sign:                                   | The project name                                     |
| `slug`                                               | *string*                                             | :heavy_minus_sign:                                   | A unique project identifier                          |
| `description`                                        | *string*                                             | :heavy_minus_sign:                                   | The project description                              |
| `billingType`                                        | [models.BillingType](../models/billingtype.md)       | :heavy_minus_sign:                                   | N/A                                                  |
| `billingMethod`                                      | [models.BillingMethod](../models/billingmethod.md)   | :heavy_minus_sign:                                   | N/A                                                  |
| `cost`                                               | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `environment`                                        | [models.Environment](../models/environment.md)       | :heavy_minus_sign:                                   | N/A                                                  |
| `stats`                                              | [models.ProjectStats](../models/projectstats.md)     | :heavy_minus_sign:                                   | N/A                                                  |
| `billing`                                            | [models.ProjectBilling](../models/projectbilling.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `team`                                               | [models.TeamInclude](../models/teaminclude.md)       | :heavy_minus_sign:                                   | N/A                                                  |
| `createdAt`                                          | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `updatedAt`                                          | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |