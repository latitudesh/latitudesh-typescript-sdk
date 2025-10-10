# DestroyServerRequest

## Example Usage

```typescript
import { DestroyServerRequest } from "latitudesh-typescript-sdk/models/operations";

let value: DestroyServerRequest = {
  serverId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `serverId`                         | *string*                           | :heavy_check_mark:                 | The server ID                      |
| `reason`                           | *string*                           | :heavy_minus_sign:                 | The reason for deleting the server |