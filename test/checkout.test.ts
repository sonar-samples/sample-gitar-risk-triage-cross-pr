import { test } from "node:test";
import assert from "node:assert/strict";
import { checkout } from "../lib/payments/checkout.ts";

test("checkout charges the stored cent total", () => {
  assert.deepEqual(checkout(4900), { amountCents: 4900, currency: "USD" });
});
