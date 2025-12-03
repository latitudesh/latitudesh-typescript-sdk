# BillingUsageAttributes

## Example Usage

```typescript
import { BillingUsageAttributes } from "latitudesh-typescript-sdk/models";

let value: BillingUsageAttributes = {
  products: [
    {
      discounts: [
        {
          description: "Monthly Discount - Accelerate",
          type: "percent",
          value: 5,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `project`                                                      | [models.BillingUsageProject](../models/billingusageproject.md) | :heavy_minus_sign:                                             | The project in which the returned usage belongs to             |
| `period`                                                       | [models.Period](../models/period.md)                           | :heavy_minus_sign:                                             | The period from the returned billing cycle                     |
| `availableCreditBalance`                                       | *number*                                                       | :heavy_minus_sign:                                             | The available credit balance in cents                          |
| `price`                                                        | *number*                                                       | :heavy_minus_sign:                                             | The total usage price in cents                                 |
| `threshold`                                                    | *number*                                                       | :heavy_minus_sign:                                             | The threshold which we use to charge your usage, in cents      |
| `products`                                                     | [models.Product](../models/product.md)[]                       | :heavy_minus_sign:                                             | N/A                                                            |