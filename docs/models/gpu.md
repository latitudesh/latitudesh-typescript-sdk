# Gpu

## Example Usage

```typescript
import { Gpu } from "latitudesh-typescript-sdk/models";

let value: Gpu = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `count`                                       | *number*                                      | :heavy_minus_sign:                            | N/A                                           |
| `type`                                        | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `vramPerGpu`                                  | *number*                                      | :heavy_minus_sign:                            | VRAM per GPU in GB                            |
| `interconnect`                                | *string*                                      | :heavy_minus_sign:                            | GPU interconnection type (e.g., NVLink, PCIe) |