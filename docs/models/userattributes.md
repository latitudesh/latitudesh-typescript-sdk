# UserAttributes

## Example Usage

```typescript
import { UserAttributes } from "latitudesh-typescript-sdk/models";

let value: UserAttributes = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `firstName`                                      | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `lastName`                                       | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `email`                                          | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `authenticationFactorId`                         | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `role`                                           | [models.UserRole](../models/userrole.md)         | :heavy_minus_sign:                               | N/A                                              |
| `teams`                                          | [models.TeamInclude](../models/teaminclude.md)[] | :heavy_minus_sign:                               | N/A                                              |