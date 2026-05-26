# RetentionMode

Object lock retention mode. Requires `locking` to be true when not `NONE`.

## Example Usage

```typescript
import { RetentionMode } from "latitudesh-typescript-sdk/models/operations";

let value: RetentionMode = "COMPLIANCE";
```

## Values

```typescript
"NONE" | "COMPLIANCE" | "GOVERNANCE"
```