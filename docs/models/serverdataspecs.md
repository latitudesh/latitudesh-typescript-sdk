# ServerDataSpecs

## Example Usage

```typescript
import { ServerDataSpecs } from "latitudesh-typescript-sdk/models";

let value: ServerDataSpecs = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `cpu`                                         | *string*                                      | :heavy_minus_sign:                            | CPU model                                     |
| `disk`                                        | *string*                                      | :heavy_minus_sign:                            | Disk quantity and size in GB (e.g. 2 x 500GB) |
| `ram`                                         | *string*                                      | :heavy_minus_sign:                            | RAM size in GB                                |
| `nic`                                         | *string*                                      | :heavy_minus_sign:                            | NIC quantity and speed                        |
| `gpu`                                         | *string*                                      | :heavy_minus_sign:                            | GPU model and quantity, if present            |