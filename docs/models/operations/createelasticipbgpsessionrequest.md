# CreateElasticIpBgpSessionRequest

## Example Usage

```typescript
import { CreateElasticIpBgpSessionRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateElasticIpBgpSessionRequest = {
  elasticIpId: "<id>",
  createBgpSession: {
    data: {
      type: "bgp_sessions",
    },
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `elasticIpId`                                               | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `createBgpSession`                                          | [models.CreateBgpSession](../../models/createbgpsession.md) | :heavy_check_mark:                                          | N/A                                                         |