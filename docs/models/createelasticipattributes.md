# CreateElasticIpAttributes

## Example Usage

```typescript
import { CreateElasticIpAttributes } from "latitudesh-typescript-sdk/models";

let value: CreateElasticIpAttributes = {
  projectId: "<id>",
  serverId: "<id>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `projectId`                               | *string*                                  | :heavy_check_mark:                        | The project ID or slug                    |
| `serverId`                                | *string*                                  | :heavy_check_mark:                        | The server ID to assign the Elastic IP to |