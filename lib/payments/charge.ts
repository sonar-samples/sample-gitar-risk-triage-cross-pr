const CENTS_PER_DOLLAR = 100;

export interface ChargeReceipt {
  amountCents: number;
  currency: "USD";
}

/**
 * Prepare a USD charge from an amount in dollars.
 * This demo returns the provider payload without sending a real payment.
 * @example
 * charge(49); // => { amountCents: 4900, currency: "USD" }
 */
export function charge(amount: number): ChargeReceipt {
  if (!Number.isFinite(amount) || amount < 0) {
    throw new RangeError("amount must be finite and non-negative");
  }

  const amountCents = Math.round(amount * CENTS_PER_DOLLAR);
  if (!Number.isSafeInteger(amountCents)) {
    throw new RangeError("charge must fit in a safe integer number of cents");
  }

  return { amountCents, currency: "USD" };
}
