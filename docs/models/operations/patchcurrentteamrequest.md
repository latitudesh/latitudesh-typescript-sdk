# PatchCurrentTeamRequest

## Example Usage

```typescript
import { PatchCurrentTeamRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PatchCurrentTeamRequest = {
  teamId: "<id>",
  requestBody: {
    data: {
      id: "<id>",
      type: "teams",
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `requestBody`                                                                                      | [operations.PatchCurrentTeamRequestBody2](../../models/operations/patchcurrentteamrequestbody2.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |