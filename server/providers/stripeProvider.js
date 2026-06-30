const {
  envEnabled,
  missingEnv,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  requireConfirmation
} = require("./providerUtils");

function status(env = process.env) {
  return {
    provider: "stripe",
    enabled: envEnabled("NEXUS_MARKETPLACE_PAYMENTS_ENABLED", env),
    missingConfig: missingEnv(["STRIPE_SECRET_KEY"], env),
    paymentsBlockedByDefault: true
  };
}

function paymentIntent(body = {}, env = process.env) {
  const provider = "stripe";
  const action = "marketplace.payment_intent";
  if (!envEnabled("NEXUS_MARKETPLACE_PAYMENTS_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_MARKETPLACE_PAYMENTS_ENABLED");
  const missing = missingEnv(["STRIPE_SECRET_KEY"], env);
  if (missing.length) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  return providerResponse({
    ok: false,
    provider,
    action,
    status: "blocked",
    message: "Stripe key is configured, but marketplace payment execution remains blocked until Stripe Connect sandbox, compliance, and checkout approval are completed.",
    data: { paymentsEnabled: false, connectRequired: true }
  });
}

module.exports = { status, paymentIntent };
