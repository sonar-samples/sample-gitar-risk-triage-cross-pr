import { charge, type ChargeReceipt } from "./charge.ts";

/**
 * Charge a checkout total stored in integer cents.
 * @example
 * checkout(4900); // => { amountCents: 4900, currency: "USD" }
 */
export function checkout(totalCents: number): ChargeReceipt {
  if (!Number.isSafeInteger(totalCents) || totalCents < 0) {
    throw new RangeError("totalCents must be a non-negative safe integer");
  }

  return charge(totalCents);
}
