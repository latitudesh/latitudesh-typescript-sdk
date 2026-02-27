# CreateElasticIp

## Example Usage

```typescript
import { CreateElasticIp } from "latitudesh-typescript-sdk/models";

let value: CreateElasticIp = {
  data: {
    type: "elastic_ips",
    attributes: {
      projectId: "<id>",
      serverId: "<id>",
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `data`                                                         | [models.CreateElasticIpData](../models/createelasticipdata.md) | :heavy_check_mark:                                             | N/A                                                            |