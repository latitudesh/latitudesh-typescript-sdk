# BaselineDataAttributes

## Example Usage

```typescript
import { BaselineDataAttributes } from "latitudesh-typescript-sdk/models";

let value: BaselineDataAttributes = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Name of the baseline                                                     |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | Description of the baseline                                              |
| `plan`                                                                   | [models.BaselineDataPlan](../models/baselinedataplan.md)                 | :heavy_minus_sign:                                                       | The plan this baseline applies to                                        |
| `sshKeys`                                                                | [models.BaselineDataSshKey](../models/baselinedatasshkey.md)[]           | :heavy_minus_sign:                                                       | SSH keys the baseline expects on the server                              |
| `userData`                                                               | [models.BaselineDataUserData](../models/baselinedatauserdata.md)         | :heavy_minus_sign:                                                       | User data the baseline expects to run on first boot                      |
| `diskLayout`                                                             | [models.BaselineDiskLayoutGroup](../models/baselinedisklayoutgroup.md)[] | :heavy_minus_sign:                                                       | Expected disk layout                                                     |
| `bios`                                                                   | [models.Bios](../models/bios.md)                                         | :heavy_minus_sign:                                                       | Expected BIOS settings, keyed by setting id                              |
| `createdAt`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | Date the baseline was created                                            |