# RetentionMode

Object Lock retention mode applied to new objects. `GOVERNANCE` allows privileged users to override the retention; `COMPLIANCE` cannot be overridden by anyone. Only applies when `locking` is `true`.

## Example Usage

```typescript
import { RetentionMode } from "latitudesh-typescript-sdk/models/operations";

let value: RetentionMode = "COMPLIANCE";
```

## Values

```typescript
"NONE" | "COMPLIANCE" | "GOVERNANCE"
```