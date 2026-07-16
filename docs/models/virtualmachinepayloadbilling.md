# VirtualMachinePayloadBilling

Billing cycle for the VM. The supported set is validated per-project (on_demand vs reserved). Defaults to the project's default billing when omitted.

## Example Usage

```typescript
import { VirtualMachinePayloadBilling } from "latitudesh-typescript-sdk/models";

let value: VirtualMachinePayloadBilling = "yearly";
```

## Values

```typescript
"hourly" | "monthly" | "yearly"
```