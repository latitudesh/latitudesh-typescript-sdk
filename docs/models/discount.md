# Discount

## Example Usage

```typescript
import { Discount } from "latitudesh-typescript-sdk/models";

let value: Discount = {
  description: "Monthly Discount - Accelerate",
  type: "amount",
  value: 5,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `description`                                            | *string*                                                 | :heavy_check_mark:                                       | Description of the discount                              | Monthly Discount - Accelerate                            |
| `type`                                                   | [models.BillingUsageType](../models/billingusagetype.md) | :heavy_check_mark:                                       | Type of discount (percentage or fixed amount)            |                                                          |
| `value`                                                  | *number*                                                 | :heavy_check_mark:                                       | Value of the discount (percentage or amount)             | 5                                                        |