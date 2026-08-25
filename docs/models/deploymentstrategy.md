# DeploymentStrategy

How the app is delivered: cloud-init install on a stock OS image (user_data) or a pre-built disk image (image)

## Example Usage

```typescript
import { DeploymentStrategy } from "latitudesh-typescript-sdk/models";

let value: DeploymentStrategy = "image";
```

## Values

```typescript
"user_data" | "image"
```