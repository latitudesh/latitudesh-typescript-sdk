# UpdateElasticIp

## Example Usage

```typescript
import { UpdateElasticIp } from "latitudesh-typescript-sdk/models";

let value: UpdateElasticIp = {
  data: {
    type: "elastic_ips",
    attributes: {
      serverId: "<id>",
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `data`                                                         | [models.UpdateElasticIpData](../models/updateelasticipdata.md) | :heavy_check_mark:                                             | N/A                                                            |