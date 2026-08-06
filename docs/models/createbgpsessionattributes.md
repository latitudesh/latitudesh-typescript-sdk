# CreateBgpSessionAttributes

## Example Usage

```typescript
import { CreateBgpSessionAttributes } from "latitudesh-typescript-sdk/models";

let value: CreateBgpSessionAttributes = {
  serverId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `serverId`                                                  | *string*                                                    | :heavy_check_mark:                                          | The server that will announce the elastic IP over BGP       |
| `requestorId`                                               | *string*                                                    | :heavy_minus_sign:                                          | Optional identifier of the requestor, recorded for auditing |