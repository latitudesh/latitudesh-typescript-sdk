# BillingUsage

## Example Usage

```typescript
import { BillingUsage } from "latitudesh-typescript-sdk/models";

let value: BillingUsage = {
  data: {
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
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [models.BillingUsageData](../models/billingusagedata.md) | :heavy_minus_sign:                                       | N/A                                                      |