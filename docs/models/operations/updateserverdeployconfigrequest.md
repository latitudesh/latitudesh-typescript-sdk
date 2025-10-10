# UpdateServerDeployConfigRequest

## Example Usage

```typescript
import { UpdateServerDeployConfigRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateServerDeployConfigRequest = {
  serverId: "<id>",
  requestBody: {
    type: "deploy_config",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `serverId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The Server ID                                                                                                      |
| `requestBody`                                                                                                      | [operations.UpdateServerDeployConfigRequestBody2](../../models/operations/updateserverdeployconfigrequestbody2.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |