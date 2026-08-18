# CreateBaselineAttributes2

## Example Usage

```typescript
import { CreateBaselineAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateBaselineAttributes2 = {
  name: "<value>",
  targetType: "custom",
  operatingSystem: "Linux",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Name of the baseline                                                                  |
| `description`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | Description of the baseline                                                           |
| `targetType`                                                                          | [operations.TargetType2](../../models/operations/targettype2.md)                      | :heavy_check_mark:                                                                    | Baseline target: all servers, a custom set (plan unknown), or specific platforms      |
| `operatingSystem`                                                                     | *string*                                                                              | :heavy_check_mark:                                                                    | Slug of the operating system the baseline expects the server to run (required)        |
| `platforms`                                                                           | *string*[]                                                                            | :heavy_minus_sign:                                                                    | Slugs of the plans this baseline applies to. Required when target_type is "platforms" |
| `sshKeyIds`                                                                           | *string*[]                                                                            | :heavy_minus_sign:                                                                    | SSH keys the baseline expects on the server                                           |
| `userDataId`                                                                          | *string*                                                                              | :heavy_minus_sign:                                                                    | User data the baseline expects to run on first boot                                   |
| `diskLayout`                                                                          | [models.BaselineDiskLayoutGroup](../../models/baselinedisklayoutgroup.md)[]           | :heavy_minus_sign:                                                                    | Expected disk layout                                                                  |
| `bios`                                                                                | [operations.Bios2](../../models/operations/bios2.md)                                  | :heavy_minus_sign:                                                                    | Expected BIOS settings, keyed by setting id                                           |