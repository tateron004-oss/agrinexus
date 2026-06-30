const crypto = require("node:crypto");

function clean(value = "") {
  return String(value || "").trim();
}

function envEnabled(name, env = process.env, defaultValue = false) {
  const raw = env[name];
  if (raw === undefined || raw === "") return defaultValue;
  return String(raw).toLowerCase() === "true";
}

function configuredEnv(keys = [], env = process.env) {
  return keys.filter(key => clean(env[key]) && !clean(env[key]).includes("replace-with"));
}

function missingEnv(keys = [], env = process.env) {
  const configured = new Set(configuredEnv(keys, env));
  return keys.filter(key => !configured.has(key));
}

function providerAuditEvent(provider, action, status, details = {}) {
  return {
    auditId: crypto.randomUUID(),
    provider,
    action,
    status,
    noHiddenExecution: true,
    noSecretExposure: true,
    createdAt: new Date().toISOString(),
    details
  };
}

function providerResponse({
  ok = true,
  provider,
  action,
  status = "completed",
  message = "",
  data = {},
  requiresConfirmation = false,
  missingConfig = [],
  disabled = false,
  httpStatus = 200,
  details = {}
}) {
  return {
    httpStatus,
    body: {
      ok,
      provider,
      action,
      status,
      message,
      data,
      requiresConfirmation,
      missingConfig,
      disabled,
      auditEvent: providerAuditEvent(provider, action, status, details)
    }
  };
}

function disabledResponse(provider, action, flagName) {
  return providerResponse({
    ok: false,
    provider,
    action,
    status: "disabled",
    disabled: true,
    message: `${provider} ${action} is disabled. Enable ${flagName}=true for controlled testing.`,
    details: { flagName }
  });
}

function missingConfigResponse(provider, action, missingConfig) {
  return providerResponse({
    ok: false,
    provider,
    action,
    status: "missing_config",
    missingConfig,
    message: `${provider} ${action} is not configured. Add the required environment variables before live testing.`
  });
}

function confirmationRequiredResponse(provider, action) {
  return providerResponse({
    ok: false,
    provider,
    action,
    status: "confirmation_required",
    requiresConfirmation: true,
    message: `${provider} ${action} requires explicit confirmed: true before controlled testing can run.`
  });
}

function blockedResponse(provider, action, message, data = {}) {
  return providerResponse({
    ok: false,
    provider,
    action,
    status: "blocked",
    message,
    data
  });
}

function failedResponse(provider, action, error) {
  return providerResponse({
    ok: false,
    provider,
    action,
    status: "failed",
    message: error?.message || String(error || "Provider request failed."),
    data: { providerError: true }
  });
}

function requireConfirmation(body = {}, provider, action) {
  return body.confirmed === true ? null : confirmationRequiredResponse(provider, action);
}

function validateText(value, label, { min = 1, max = 2000, pattern = null } = {}) {
  const text = clean(value);
  if (text.length < min) return `${label} is required.`;
  if (text.length > max) return `${label} must be ${max} characters or fewer.`;
  if (pattern && !pattern.test(text)) return `${label} is not valid.`;
  return "";
}

function redactSecrets(source = {}) {
  const redacted = {};
  for (const [key, value] of Object.entries(source || {})) {
    redacted[key] = /secret|token|key|sid|password|auth/i.test(key) && value ? "[redacted]" : value;
  }
  return redacted;
}

async function safeJson(response) {
  const text = await response.text();
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return { raw: text.slice(0, 500) };
  }
}

module.exports = {
  clean,
  envEnabled,
  configuredEnv,
  missingEnv,
  providerAuditEvent,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  confirmationRequiredResponse,
  blockedResponse,
  failedResponse,
  requireConfirmation,
  validateText,
  redactSecrets,
  safeJson
};
