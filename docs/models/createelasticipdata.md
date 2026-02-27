# CreateElasticIpData

## Example Usage

```typescript
import { CreateElasticIpData } from "latitudesh-typescript-sdk/models";

let value: CreateElasticIpData = {
  type: "elastic_ips",
  attributes: {
    projectId: "<id>",
    serverId: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [models.CreateElasticIpType](../models/createelasticiptype.md)             | :heavy_check_mark:                                                         | N/A                                                                        |
| `attributes`                                                               | [models.CreateElasticIpAttributes](../models/createelasticipattributes.md) | :heavy_check_mark:                                                         | N/A                                                                        |