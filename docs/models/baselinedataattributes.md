# BaselineDataAttributes

## Example Usage

```typescript
import { BaselineDataAttributes } from "latitudesh-typescript-sdk/models";

let value: BaselineDataAttributes = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `name`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | Name of the baseline                                                                    |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | Description of the baseline                                                             |
| `targetType`                                                                            | [models.TargetType](../models/targettype.md)                                            | :heavy_minus_sign:                                                                      | Target of the baseline: all servers, a custom set (plan unknown), or specific platforms |
| `operatingSystem`                                                                       | *string*                                                                                | :heavy_minus_sign:                                                                      | Slug of the operating system the baseline expects the server to run                     |
| `platforms`                                                                             | [models.Platform](../models/platform.md)[]                                              | :heavy_minus_sign:                                                                      | The plans this baseline applies to (only populated when target_type is "platforms")     |
| `sshKeys`                                                                               | [models.BaselineDataSshKey](../models/baselinedatasshkey.md)[]                          | :heavy_minus_sign:                                                                      | SSH keys the baseline expects on the server                                             |
| `userData`                                                                              | [models.BaselineDataUserData](../models/baselinedatauserdata.md)                        | :heavy_minus_sign:                                                                      | User data the baseline expects to run on first boot                                     |
| `diskLayout`                                                                            | [models.BaselineDiskLayoutGroup](../models/baselinedisklayoutgroup.md)[]                | :heavy_minus_sign:                                                                      | Expected disk layout                                                                    |
| `bios`                                                                                  | [models.Bios](../models/bios.md)                                                        | :heavy_minus_sign:                                                                      | Expected BIOS settings, keyed by setting id                                             |
| `createdAt`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | Date the baseline was created                                                           |