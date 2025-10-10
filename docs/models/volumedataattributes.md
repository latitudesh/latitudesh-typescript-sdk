# VolumeDataAttributes

## Example Usage

```typescript
import { VolumeDataAttributes } from "latitudesh-typescript-sdk/models";

let value: VolumeDataAttributes = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sizeInGb`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `namespaceId`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `connectorId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `initiators`                                                                                  | [models.Initiator](../models/initiator.md)[]                                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `project`                                                                                     | [models.ProjectInclude](../models/projectinclude.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `team`                                                                                        | [models.TeamInclude](../models/teaminclude.md)                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |