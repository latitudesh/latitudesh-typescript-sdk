# GetBillingUsageRequest

## Example Usage

```typescript
import { GetBillingUsageRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetBillingUsageRequest = {
  filterProject: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `filterProducts`                                                                               | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | Allows to filter the billing usage for specific products. It accepts an array of product ids.<br/> |
| `filterPlan`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | Accepts a plan name and allows to filter the usage for that plan.<br/>                         |
| `filterProject`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |