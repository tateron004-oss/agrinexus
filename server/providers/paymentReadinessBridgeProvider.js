const { clean, envEnabled, providerResponse, disabledResponse, requireConfirmation, blockedResponse } = require("./providerUtils");
const stripeProvider = require("./stripeProvider");

function status(env = process.env) {
  const stripe = stripeProvider.status(env);
  return { provider: "nexus-payment-readiness-bridge", enabled: envEnabled("NEXUS_PAYMENT_READINESS_BRIDGE_ENABLED", env, true), stripe, sandboxOnly: true, productionPaymentsEnabled: false, checkoutUiEnabled: false, escrowEnabled: false };
}

function readinessCheck(body = {}, env = process.env) {
  const provider = "nexus-payment-readiness-bridge";
  const action = "payments.readiness_check";
  if (!envEnabled("NEXUS_PAYMENT_READINESS_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_PAYMENT_READINESS_BRIDGE_ENABLED");
  const stripe = stripeProvider.status(env);
  const amount = Number(body.amount || 0);
  const currency = clean(body.currency || "usd").toLowerCase();
  return providerResponse({
    provider,
    action,
    status: stripe.enabled && !stripe.missingConfig.length ? "sandbox_ready_but_blocked" : "disabled_or_missing_config",
    missingConfig: stripe.missingConfig,
    message: "Payment readiness checked. Checkout and money movement remain disabled unless sandbox flag, Stripe config, explicit confirmation, and approval gates are satisfied.",
    data: { amount, currency, sandboxOnly: true, checkoutUiEnabled: false, escrowEnabled: false, moneyMovementAuthorized: false }
  });
}

function paymentIntent(body = {}, env = process.env) {
  const provider = "nexus-payment-readiness-bridge";
  const action = "payments.stripe.payment_intent";
  if (!envEnabled("NEXUS_PAYMENT_READINESS_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_PAYMENT_READINESS_BRIDGE_ENABLED");
  if (!envEnabled("NEXUS_MARKETPLACE_PAYMENTS_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_PAYMENTS_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const amount = Number(body.amount || 0);
  if (!amount || amount < 50) return blockedResponse(provider, action, "Valid sandbox amount is required before payment readiness can proceed.");
  return stripeProvider.paymentIntent(body, env);
}

module.exports = { status, readinessCheck, paymentIntent };
