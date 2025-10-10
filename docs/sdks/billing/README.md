# Billing
(*billing*)

## Overview

### Available Operations

* [listUsage](#listusage) - List Billing Usage

## listUsage

Returns the billing usage of a project


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-billing-usage" method="get" path="/billing/usage" -->
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.billing.listUsage({
    filterProducts: [
      "si_lvdub7r3",
      "si_utp5nfrf",
    ],
    filterPlan: "plan.name",
    filterProject: "proj_6059EqYkOQj8p",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LatitudeshCore } from "latitudesh-typescript-sdk/core.js";
import { billingListUsage } from "latitudesh-typescript-sdk/funcs/billingListUsage.js";

// Use `LatitudeshCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const latitudesh = new LatitudeshCore({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const res = await billingListUsage(latitudesh, {
    filterProducts: [
      "si_lvdub7r3",
      "si_utp5nfrf",
    ],
    filterPlan: "plan.name",
    filterProject: "proj_6059EqYkOQj8p",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingListUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBillingUsageRequest](../../models/operations/getbillingusagerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BillingUsage](../../models/billingusage.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LatitudeshDefaultError | 4XX, 5XX                      | \*/\*                         |