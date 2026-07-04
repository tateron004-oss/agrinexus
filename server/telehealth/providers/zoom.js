"use strict";

function clean(value) {
  return String(value || "").trim();
}

function present(env, name) {
  const value = clean(env?.[name]);
  return Boolean(value) && !/^<.*>$/.test(value) && !/\b(replace|changeme|todo|example|test_key)\b/i.test(value);
}

function status(env = process.env) {
  const missingEnv = ["ZOOM_ACCOUNT_ID", "ZOOM_CLIENT_ID", "ZOOM_CLIENT_SECRET"].filter(name => !present(env, name));
  return {
    provider: "zoom",
    providerName: "Zoom",
    configured: missingEnv.length === 0,
    missingEnv,
    videoCreationAllowed: false,
    implementationStatus: missingEnv.length ? "missing_config" : "configured_execution_gated",
    requiresConfirmation: true,
    requiresConsent: true,
    noSecretValuesReturned: true
  };
}

function createRoomGate(env = process.env) {
  const providerStatus = status(env);
  return {
    ok: true,
    status: providerStatus.configured ? "provider_execution_gated" : "missing_config",
    provider: "zoom",
    missingEnv: providerStatus.missingEnv,
    roomCreated: false,
    noFakeVideoClaim: true,
    message: providerStatus.configured
      ? "Zoom credentials are configured, but live Zoom meeting creation remains gated until the Zoom execution adapter passes provider QA."
      : "Zoom meeting creation needs configured Zoom account, client, and secret environment variables."
  };
}

module.exports = {
  status,
  createRoomGate
};
