"use strict";

function clean(value) {
  return String(value || "").trim();
}

function present(env, name) {
  const value = clean(env?.[name]);
  return Boolean(value) && !/^<.*>$/.test(value) && !/\b(replace|changeme|todo|example)\b/i.test(value);
}

function status(env = process.env) {
  const missingEnv = present(env, "NEXUS_TELEHEALTH_INTAKE_URL") ? [] : ["NEXUS_TELEHEALTH_INTAKE_URL"];
  return {
    provider: "external_url",
    providerName: clean(env.NEXUS_TELEHEALTH_PROVIDER_NAME) || "External telehealth intake",
    configured: missingEnv.length === 0,
    missingEnv,
    externalHandoffAvailable: missingEnv.length === 0,
    videoCreationAllowed: false,
    requiresConfirmation: true,
    requiresConsent: true,
    noSecretValuesReturned: true
  };
}

function createHandoff(encounter = {}, env = process.env) {
  const providerStatus = status(env);
  if (!providerStatus.configured) {
    return {
      ok: true,
      status: "missing_config",
      provider: "external_url",
      missingEnv: providerStatus.missingEnv,
      handoffPrepared: false,
      noVisitCreatedClaim: true
    };
  }

  return {
    ok: true,
    status: "handoff_prepared",
    provider: "external_url",
    providerName: providerStatus.providerName,
    intakeUrl: clean(env.NEXUS_TELEHEALTH_INTAKE_URL),
    encounterId: encounter.id || "",
    handoffPrepared: true,
    visitCreated: false,
    noVisitCreatedClaim: true,
    noSecretValuesReturned: true
  };
}

module.exports = {
  status,
  createHandoff
};
