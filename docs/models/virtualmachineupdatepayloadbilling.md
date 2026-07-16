# VirtualMachineUpdatePayloadBilling

Target billing cycle. Upgrades only (hourly → monthly → yearly); downgrades and reserved-project changes return 422.

## Example Usage

```typescript
import { VirtualMachineUpdatePayloadBilling } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineUpdatePayloadBilling = "monthly";
```

## Values

```typescript
"hourly" | "monthly" | "yearly"
```