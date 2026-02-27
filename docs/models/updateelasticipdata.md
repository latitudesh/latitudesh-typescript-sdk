# UpdateElasticIpData

## Example Usage

```typescript
import { UpdateElasticIpData } from "latitudesh-typescript-sdk/models";

let value: UpdateElasticIpData = {
  type: "elastic_ips",
  attributes: {
    serverId: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [models.UpdateElasticIpType](../models/updateelasticiptype.md)             | :heavy_check_mark:                                                         | N/A                                                                        |
| `attributes`                                                               | [models.UpdateElasticIpAttributes](../models/updateelasticipattributes.md) | :heavy_check_mark:                                                         | N/A                                                                        |