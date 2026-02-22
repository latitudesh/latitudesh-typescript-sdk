# Vcpu

Detailed vCPU specifications

## Example Usage

```typescript
import { Vcpu } from "latitudesh-typescript-sdk/models";

let value: Vcpu = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `count`                    | *number*                   | :heavy_minus_sign:         | The number of virtual CPUs |
| `clock`                    | *number*                   | :heavy_minus_sign:         | The CPU clock speed in GHz |
| `type`                     | *string*                   | :heavy_minus_sign:         | The CPU type/model         |