import { charge, type ChargeReceipt } from "./charge.ts";

export interface RenewalInvoice {
  totalDollars: number;
}

/**
 * Run a subscription renewal using the stored invoice total in dollars.
 * @example
 * renewSubscription({ totalDollars: 49 }); // => { amountCents: 4900, currency: "USD" }
 */
export function renewSubscription(invoice: RenewalInvoice): ChargeReceipt {
  if (!Number.isFinite(invoice.totalDollars) || invoice.totalDollars < 0) {
    throw new RangeError("invoice total must be finite and non-negative");
  }

  return charge(invoice.totalDollars);
}
