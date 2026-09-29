# Region

## Example Usage

```typescript
import { Region } from "latitudesh-typescript-sdk/models";

let value: Region = {
  data: {
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
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `data`                                         | [models.DataRegions](../models/dataregions.md) | :heavy_minus_sign:                             | N/A                                            |