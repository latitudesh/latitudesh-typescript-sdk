# AccessKeyStorageClass

Backend storage tier. `standard` provisions the key on Wasabi; `high_performance` provisions it on VAST.

## Example Usage

```typescript
import { AccessKeyStorageClass } from "latitudesh-typescript-sdk/models/operations";

let value: AccessKeyStorageClass = "standard";
```

## Values

```typescript
"standard" | "high_performance"
```