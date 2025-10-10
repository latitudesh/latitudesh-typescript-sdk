# Product

## Example Usage

```typescript
import { Product } from "latitudesh-typescript-sdk/models";

let value: Product = {
  discounts: [
    {
      description: "Monthly Discount - Accelerate",
      type: "percent",
      value: 5,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `resource`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `proration`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `discounts`                                                                                   | [models.Discount](../models/discount.md)[]                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `discountable`                                                                                | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `amountWithoutDiscount`                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `unit`                                                                                        | [models.BillingUsageUnit](../models/billingusageunit.md)                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `unitPrice`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | The unit price of the product in cents                                                        |
| `usageType`                                                                                   | [models.UsageType](../models/usagetype.md)                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `price`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total usage price of the product in cents                                                 |
| `metadata`                                                                                    | [models.Metadata](../models/metadata.md)                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |