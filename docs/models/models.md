# Models

## Example Usage

```typescript
import { Models } from "latitudesh-typescript-sdk/models";

let value: Models = {
  estimatedCost: "0.000599",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `requests`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `estimatedCost`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | Estimated USD at current model prices; null when the model has no price | 0.000599                                                                |