# CreateBaselineAttributes2

## Example Usage

```typescript
import { CreateBaselineAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateBaselineAttributes2 = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `name`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | Name of the baseline                                                        |
| `description`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Description of the baseline                                                 |
| `plan`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | Slug of the plan this baseline applies to                                   |
| `sshKeyIds`                                                                 | *string*[]                                                                  | :heavy_minus_sign:                                                          | SSH keys the baseline expects on the server                                 |
| `userDataId`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | User data the baseline expects to run on first boot                         |
| `diskLayout`                                                                | [models.BaselineDiskLayoutGroup](../../models/baselinedisklayoutgroup.md)[] | :heavy_minus_sign:                                                          | Expected disk layout                                                        |
| `bios`                                                                      | [operations.Bios2](../../models/operations/bios2.md)                        | :heavy_minus_sign:                                                          | Expected BIOS settings, keyed by setting id                                 |