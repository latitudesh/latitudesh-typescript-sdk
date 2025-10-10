# ServerDataPlan

## Example Usage

```typescript
import { ServerDataPlan } from "latitudesh-typescript-sdk/models";

let value: ServerDataPlan = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | The plan ID                                                                            |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | The plan name                                                                          |
| `slug`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | The plan slug                                                                          |
| `billing`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | hourly/monthly pricing. Defaults to `hourly`. Appliable for `on_demand` projects only. |