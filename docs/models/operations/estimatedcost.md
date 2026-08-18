# EstimatedCost

Estimated cost for the current billing period

## Example Usage

```typescript
import { EstimatedCost } from "latitudesh-typescript-sdk/models/operations";

let value: EstimatedCost = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `amount`                       | *number*                       | :heavy_minus_sign:             | Estimated cost amount          |
| `currency`                     | *string*                       | :heavy_minus_sign:             | Currency code (e.g., USD, BRL) |