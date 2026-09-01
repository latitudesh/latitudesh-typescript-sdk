# GetPlansResponse

Success

## Example Usage

```typescript
import { GetPlansResponse } from "latitudesh-typescript-sdk/models/operations";

let value: GetPlansResponse = {
  data: [
    {
      attributes: {
        regions: [
          {
            pricing: {
              "USD": {
                hour: 2.18,
                month: 796,
                year: 6686,
              },
              "BRL": {
                hour: 11.99,
                month: 4376,
                year: 36758,
              },
            },
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `data`                                        | [models.PlanData](../../models/plandata.md)[] | :heavy_minus_sign:                            | N/A                                           |