# VirtualMachinePayloadBilling

The billing type for the virtual machine. Accepts `hourly` and `monthly` for on demand projects and `yearly` for reserved projects. Defaults to `monthly` for on demand projects and `yearly` for reserved projects.

## Example Usage

```typescript
import { VirtualMachinePayloadBilling } from "latitudesh-typescript-sdk/models";

let value: VirtualMachinePayloadBilling = "yearly";
```

## Values

```typescript
"hourly" | "monthly" | "yearly"
```