import { test } from "node:test";
import assert from "node:assert/strict";
import { renewSubscription } from "../lib/payments/renewals.ts";

test("renewal charges the invoice total in cents", () => {
  assert.deepEqual(renewSubscription({ totalDollars: 49 }), {
    amountCents: 4900,
    currency: "USD",
  });
});
