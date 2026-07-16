const { clean, envEnabled, missingEnv, redactSecrets } = require("./providers/providerUtils");
const { missingConfigForConnector } = require("./nexusCapabilityRegistry");

const CONNECTOR_FLAGS = {
  medical_provider_api: "NEXUS_MEDICAL_LIVE_EXECUTION_ENABLED",
  telehealth_video: "NEXUS_MEDICAL_LIVE_EXECUTION_ENABLED",
  mobile_clinic_operator_api: "NEXUS_MEDICAL_LIVE_EXECUTION_ENABLED",
  pharmacy_partner_api: "NEXUS_MEDICAL_LIVE_EXECUTION_ENABLED",
  patient_support_api: "NEXUS_MEDICAL_LIVE_EXECUTION_ENABLED",
  twilio_sms: "NEXUS_COMMUNICATIONS_LIVE_EXECUTION_ENABLED",
  twilio_whatsapp: "NEXUS_COMMUNICATIONS_LIVE_EXECUTION_ENABLED",
  twilio_voice: "NEXUS_COMMUNICATIONS_LIVE_EXECUTION_ENABLED",
  email_provider_api: "NEXUS_COMMUNICATIONS_LIVE_EXECUTION_ENABLED",
  marketplace_partner_api: "NEXUS_MARKETPLACE_LIVE_EXECUTION_ENABLED",
  maps_provider: "NEXUS_LIVE_EXECUTION_ENABLED",
  drone_provider_api: "NEXUS_LIVE_EXECUTION_ENABLED",
  moodle_lms: "NEXUS_LIVE_EXECUTION_ENABLED",
  stripe_payments: "NEXUS_PAYMENT_LIVE_EXECUTION_ENABLED"
};

const CONNECTOR_URL_KEYS = {
  medical_provider_api: "NEXUS_MEDICAL_PROVIDER_API_URL",
  telehealth_video: "NEXUS_VIDEO_PROVIDER_API_URL",
  mobile_clinic_operator_api: "NEXUS_MOBILE_CLINIC_PROVIDER_API_URL",
  pharmacy_partner_api: "NEXUS_PHARMACY_PROVIDER_API_URL",
  patient_support_api: "NEXUS_PATIENT_SUPPORT_PROVIDER_API_URL",
  email_provider_api: "NEXUS_EMAIL_PROVIDER_API_URL",
  marketplace_partner_api: "NEXUS_MARKETPLACE_PROVIDER_API_URL",
  drone_provider_api: "NEXUS_DRONE_PROVIDER_API_URL"
};

const CONNECTOR_API_KEY_KEYS = {
  medical_provider_api: "NEXUS_MEDICAL_PROVIDER_API_KEY",
  telehealth_video: "NEXUS_VIDEO_PROVIDER_API_KEY",
  mobile_clinic_operator_api: "NEXUS_MOBILE_CLINIC_PROVIDER_API_KEY",
  pharmacy_partner_api: "NEXUS_PHARMACY_PROVIDER_API_KEY",
  patient_support_api: "NEXUS_PATIENT_SUPPORT_PROVIDER_API_KEY",
  email_provider_api: "NEXUS_EMAIL_PROVIDER_API_KEY",
  marketplace_partner_api: "NEXUS_MARKETPLACE_PROVIDER_API_KEY",
  drone_provider_api: "NEXUS_DRONE_PROVIDER_API_KEY"
};

function runtimeEnabled(env = process.env) {
  return envEnabled("NEXUS_PRODUCTION_RUNTIME_ENABLED", env, true);
}

function liveExecutionEnabled(env = process.env) {
  return envEnabled("NEXUS_LIVE_EXECUTION_ENABLED", env, false);
}

function connectorLiveEnabled(connectorKey, env = process.env) {
  const flag = CONNECTOR_FLAGS[connectorKey];
  if (!flag) return false;
  return liveExecutionEnabled(env) && envEnabled(flag, env, false);
}

function getReadiness(connectorKey = "none", env = process.env) {
  if (!connectorKey || connectorKey === "none") {
    return { connectorKey: "none", status: "not_applicable", executionEnabled: false, missingConfig: [] };
  }
  if (connectorKey.startsWith("local_") || connectorKey === "agriculture_source_registry" || connectorKey === "learning_provider_bridge" || connectorKey === "public_weather_open_meteo") {
    return { connectorKey, status: "local_only", executionEnabled: true, missingConfig: [], liveExecutionEnabled: false };
  }
  if (connectorKey === "live_knowledge_provider") {
    const provider = clean(env.NEXUS_LIVE_KNOWLEDGE_PROVIDER || "auto").toLowerCase();
    const configured = Boolean(
      clean(env.TAVILY_API_KEY)
      || clean(env.BRAVE_SEARCH_API_KEY)
      || clean(env.EXA_API_KEY)
      || (clean(env.NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT) && (provider === "generic" || provider === "auto"))
    );
    return {
      connectorKey,
      status: configured ? "ready" : "missing_config",
      executionEnabled: configured,
      liveExecutionEnabled: configured,
      missingConfig: configured ? [] : ["TAVILY_API_KEY", "BRAVE_SEARCH_API_KEY", "EXA_API_KEY", "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT"],
      requiredFlag: "NEXUS_LIVE_KNOWLEDGE_ENABLED"
    };
  }
  const missingConfig = missingConfigForConnector(connectorKey, env);
  const liveEnabled = connectorLiveEnabled(connectorKey, env);
  const executionEnabled = liveEnabled && missingConfig.length === 0;
  return {
    connectorKey,
    status: executionEnabled ? "ready" : liveEnabled && missingConfig.length ? "missing_config" : "disabled",
    executionEnabled,
    liveExecutionEnabled: liveEnabled,
    missingConfig,
    requiredFlag: CONNECTOR_FLAGS[connectorKey] || "NEXUS_LIVE_EXECUTION_ENABLED"
  };
}

function getSafeStatus(env = process.env) {
  const keys = [...new Set([...Object.keys(CONNECTOR_FLAGS), "local_reminders", "local_offline_queue", "local_audit_log"])];
  return Object.fromEntries(keys.map(key => [key, getReadiness(key, env)]));
}

function buildPayload(capability = {}, context = {}) {
  return {
    capabilityId: capability.id,
    domain: capability.domain,
    intent: context.intent || capability.supportedIntents?.[0] || "unknown",
    userGoal: clean(context.userGoal),
    summary: clean(context.summary || context.userGoal).slice(0, 500),
    language: clean(context.language || "en"),
    createdAt: new Date().toISOString(),
    noSilentExecution: true
  };
}

async function execute(capability = {}, payload = {}, confirmation = {}, env = process.env) {
  const connectorKey = capability.connectorKey || "none";
  const readiness = getReadiness(connectorKey, env);
  if (confirmation.confirmed !== true && capability.requiresConfirmation) {
    return { ok: false, status: "blocked_confirmation_required", blockedReason: "blocked_confirmation_required", readiness };
  }
  if (!runtimeEnabled(env)) {
    return { ok: false, status: "blocked_live_execution_disabled", blockedReason: "blocked_live_execution_disabled", readiness };
  }
  if (!capability.liveExecutionSupported || connectorKey.startsWith("local_")) {
    return {
      ok: true,
      status: "local_fallback",
      referenceId: `local-${Date.now()}`,
      message: `${capability.id} completed through local fallback behavior.`,
      readiness,
      payload: redactSecrets(payload)
    };
  }
  if (!readiness.executionEnabled) {
    const blockedReason = readiness.status === "missing_config" ? "blocked_connector_not_configured" : "blocked_live_execution_disabled";
    return {
      ok: false,
      status: blockedReason,
      blockedReason,
      readiness,
      fallback: {
        mode: "local_fallback",
        message: "Live connector is not ready. Nexus can prepare a copyable summary, reminder, or offline follow-up instead."
      }
    };
  }
  const urlKey = CONNECTOR_URL_KEYS[connectorKey];
  const apiKey = CONNECTOR_API_KEY_KEYS[connectorKey];
  const url = clean(env[urlKey]);
  if (!url) {
    return { ok: false, status: "blocked_connector_not_configured", blockedReason: "blocked_connector_not_configured", readiness };
  }
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "authorization": apiKey && env[apiKey] ? `Bearer ${env[apiKey]}` : ""
    },
    body: JSON.stringify(payload)
  });
  const body = await response.text();
  return {
    ok: response.ok,
    status: response.ok ? "configured_execution" : "failed",
    referenceId: response.headers.get("x-reference-id") || `provider-${Date.now()}`,
    providerStatus: response.status,
    message: response.ok ? "Configured provider accepted the action." : "Configured provider returned a failure.",
    bodyPreview: body.slice(0, 300),
    readiness
  };
}

function verify(referenceId = "", connectorKey = "none", env = process.env) {
  const cleanReference = clean(referenceId);
  if (!cleanReference) {
    return { ok: false, status: "no_reference_id", message: "No reference ID was provided.", referenceId: "" };
  }
  const readiness = getReadiness(connectorKey, env);
  if (readiness.status === "local_only") {
    return { ok: true, status: "verified_queued", message: "Local reference exists in Nexus activity history.", referenceId: cleanReference };
  }
  if (!readiness.executionEnabled) {
    return { ok: false, status: readiness.status === "missing_config" ? "not_configured" : "verification_unavailable", message: "Provider verification is unavailable until the connector is configured.", referenceId: cleanReference, readiness };
  }
  return { ok: true, status: "verification_pending", message: "Provider verification hook is configured but no provider-specific verifier has reported final status yet.", referenceId: cleanReference, readiness };
}

module.exports = {
  runtimeEnabled,
  liveExecutionEnabled,
  getReadiness,
  getSafeStatus,
  buildPayload,
  execute,
  verify
};
