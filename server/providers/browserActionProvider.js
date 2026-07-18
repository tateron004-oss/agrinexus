const {
  clean,
  envEnabled,
  missingEnv,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  requireConfirmation,
  blockedResponse,
  failedResponse,
  safeJson
} = require("./providerUtils");

function status(env = process.env) {
  return {
    provider: "nexus-browser-action-connector",
    enabled: envEnabled("NEXUS_BROWSER_ACTIONS_ENABLED", env),
    missingConfig: missingEnv(["NEXUS_BROWSER_ACTIONS_ENDPOINT", "NEXUS_BROWSER_ACTIONS_API_KEY"], env),
    requiresActiveSession: true
  };
}

async function run(body = {}, env = process.env) {
  const provider = "nexus-browser-action-connector";
  const action = "browser.action";
  if (!envEnabled("NEXUS_BROWSER_ACTIONS_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_BROWSER_ACTIONS_ENABLED");
  const missing = missingEnv(["NEXUS_BROWSER_ACTIONS_ENDPOINT", "NEXUS_BROWSER_ACTIONS_API_KEY"], env);
  if (missing.length) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const task = clean(body.task || body.command);
  if (!task) return blockedResponse(provider, action, "A browser action task is required.");
  try {
    const response = await fetch(clean(env.NEXUS_BROWSER_ACTIONS_ENDPOINT), {
      method: "POST",
      headers: { authorization: `Bearer ${env.NEXUS_BROWSER_ACTIONS_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({
        task,
        url: clean(body.url),
        requireVerification: true,
        noSecretExposure: true,
        source: "nexus-openai-native"
      })
    });
    const payload = await safeJson(response);
    if (!response.ok) throw new Error(payload.message || payload.error || response.statusText);
    return providerResponse({
      provider,
      action,
      status: payload.verified === false ? "provider_unverified" : "completed",
      message: "Browser action connector returned a provider result after explicit confirmation.",
      data: {
        task,
        url: clean(body.url),
        outcome: payload.outcome || payload.status || "",
        evidence: payload.evidence || payload.receipt || null,
        providerVerified: payload.verified !== false
      }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

module.exports = { status, run };
