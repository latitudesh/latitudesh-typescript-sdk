# GetTrafficConsumptionRequest

## Example Usage

```typescript
import { GetTrafficConsumptionRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetTrafficConsumptionRequest = {
  filterDateGte: "<value>",
  filterDateLte: "<value>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `filterServer`                                                                                                                   | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The server id to filter by                                                                                                       |
| `filterProject`                                                                                                                  | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The project id to filter by                                                                                                      |
| `filterDateGte`                                                                                                                  | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The start timestamp to retrieve the traffic. You must provide in ISO8601 format. Example: filter[date][gte]=2024-04-01T00:00:00Z |
| `filterDateLte`                                                                                                                  | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The end timestamp to retrieve the traffic. You must provide in ISO8601 format. Example: filter[date][gte]=2024-04-31T23:59:59Z   |