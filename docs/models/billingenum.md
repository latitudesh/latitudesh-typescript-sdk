# BillingEnum

Target billing cycle. Upgrades only (hourly → monthly → yearly); downgrades and reserved-project changes return 422.

## Example Usage

```typescript
import { BillingEnum } from "latitudesh-typescript-sdk/models";

let value: BillingEnum = "yearly";
```

## Values

```typescript
"hourly" | "monthly" | "yearly"
```