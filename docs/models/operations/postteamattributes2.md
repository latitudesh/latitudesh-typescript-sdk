# PostTeamAttributes2

## Example Usage

```typescript
import { PostTeamAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: PostTeamAttributes2 = {
  name: "<value>",
  currency: "BRL",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `currency`                                                                   | [operations.PostTeamCurrency2](../../models/operations/postteamcurrency2.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `address`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `referredCode`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | Supported only for first team creation                                       |