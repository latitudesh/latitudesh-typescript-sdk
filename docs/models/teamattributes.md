# TeamAttributes

## Example Usage

```typescript
import { TeamAttributes } from "latitudesh-typescript-sdk/models";

let value: TeamAttributes = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `name`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `slug`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `address`                                              | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `currency`                                             | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `createdAt`                                            | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `updatedAt`                                            | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `enforceMfa`                                           | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `users`                                                | [models.UserInclude](../models/userinclude.md)[]       | :heavy_minus_sign:                                     | N/A                                                    |
| `projects`                                             | [models.ProjectInclude](../models/projectinclude.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
| `owner`                                                | [models.UserInclude](../models/userinclude.md)         | :heavy_minus_sign:                                     | N/A                                                    |
| `billing`                                              | [models.TeamBilling](../models/teambilling.md)         | :heavy_minus_sign:                                     | N/A                                                    |
| `featureFlags`                                         | *string*[]                                             | :heavy_minus_sign:                                     | N/A                                                    |