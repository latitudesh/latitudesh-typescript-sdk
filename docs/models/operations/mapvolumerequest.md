# MapVolumeRequest

## Example Usage

```typescript
import { MapVolumeRequest } from "latitudesh-typescript-sdk/models/operations";

let value: MapVolumeRequest = {
  id: "<id>",
  requestBody: {
    data: {
      type: "volumes",
      attributes: {
        serverId: "sv_abcd1234",
      },
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Volume ID                                                                            |
| `requestBody`                                                                        | [operations.MapVolumeRequestBody2](../../models/operations/mapvolumerequestbody2.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |