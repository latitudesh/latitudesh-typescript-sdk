# GetRegionsResponse

## Example Usage

```typescript
import { GetRegionsResponse } from "latitudesh-typescript-sdk/models/operations";

let value: GetRegionsResponse = {
  result: {
    data: [
      {
        attributes: {
          country: {
            slug: "US",
            name: "United States",
          },
          features: [
            "public_network",
          ],
        },
      },
    ],
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `result`                                  | [models.Regions](../../models/regions.md) | :heavy_check_mark:                        | N/A                                       |