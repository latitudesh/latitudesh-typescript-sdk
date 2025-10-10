# BillingUsageData

## Example Usage

```typescript
import { BillingUsageData } from "latitudesh-typescript-sdk/models";

let value: BillingUsageData = {
  attributes: {
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
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `attributes`                                                         | [models.BillingUsageAttributes](../models/billingusageattributes.md) | :heavy_minus_sign:                                                   | N/A                                                                  |