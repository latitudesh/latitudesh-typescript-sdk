# OperatingSystem

## Example Usage

```typescript
import { OperatingSystem } from "latitudesh-typescript-sdk/models";

let value: OperatingSystem = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | The OS name                                                  |
| `slug`                                                       | *string*                                                     | :heavy_minus_sign:                                           | The OS slug                                                  |
| `version`                                                    | *string*                                                     | :heavy_minus_sign:                                           | The OS description                                           |
| `features`                                                   | [models.ServerDataFeatures](../models/serverdatafeatures.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `distro`                                                     | [models.Distro](../models/distro.md)                         | :heavy_minus_sign:                                           | N/A                                                          |