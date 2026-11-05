# Series

## Example Usage

```typescript
import { Series } from "latitudesh-typescript-sdk/models";

let value: Series = {
  models: {
    "key": {
      estimatedCost: "0.000599",
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start of the bucket (UTC)                                                                     |
| `models`                                                                                      | Record<string, [models.Models](../models/models.md)>                                          | :heavy_minus_sign:                                                                            | Usage in the bucket keyed by model ID                                                         |