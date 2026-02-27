# UpdateElasticIpRequest

## Example Usage

```typescript
import { UpdateElasticIpRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateElasticIpRequest = {
  elasticIpId: "<id>",
  updateElasticIp: {
    data: {
      type: "elastic_ips",
      attributes: {
        serverId: "<id>",
      },
    },
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `elasticIpId`                                             | *string*                                                  | :heavy_check_mark:                                        | The Elastic IP ID                                         |
| `updateElasticIp`                                         | [models.UpdateElasticIp](../../models/updateelasticip.md) | :heavy_check_mark:                                        | N/A                                                       |