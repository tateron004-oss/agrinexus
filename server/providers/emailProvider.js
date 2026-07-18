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

function provider(env = process.env) {
  return clean(env.NEXUS_EMAIL_PROVIDER || (env.RESEND_API_KEY ? "resend" : env.SENDGRID_API_KEY ? "sendgrid" : "generic"));
}

function status(env = process.env) {
  const selected = provider(env);
  const enabled = envEnabled("NEXUS_EMAIL_ENABLED", env) || envEnabled("NEXUS_MESSAGES_ENABLED", env);
  const missingByProvider = {
    resend: missingEnv(["RESEND_API_KEY", "NEXUS_EMAIL_FROM"], env),
    sendgrid: missingEnv(["SENDGRID_API_KEY", "NEXUS_EMAIL_FROM"], env),
    generic: missingEnv(["NEXUS_EMAIL_PROVIDER_ENDPOINT", "NEXUS_EMAIL_PROVIDER_API_KEY", "NEXUS_EMAIL_FROM"], env)
  };
  return {
    provider: selected,
    enabled,
    missingConfig: missingByProvider[selected] || missingByProvider.generic,
    supportsRead: false,
    supportsDraft: true,
    supportsSend: true,
    oauthRequiredForInboxRead: true
  };
}

async function send(body = {}, env = process.env) {
  const selected = provider(env);
  const action = "email.send";
  if (!(envEnabled("NEXUS_EMAIL_ENABLED", env) || envEnabled("NEXUS_MESSAGES_ENABLED", env))) {
    return disabledResponse(selected, action, "NEXUS_EMAIL_ENABLED");
  }
  const readiness = status(env);
  if (readiness.missingConfig.length) return missingConfigResponse(selected, action, readiness.missingConfig);
  const confirmation = requireConfirmation(body, selected, action);
  if (confirmation) return confirmation;
  const to = clean(body.to || body.recipient);
  const subject = clean(body.subject || "Nexus message");
  const text = clean(body.text || body.message || body.body);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) return blockedResponse(selected, action, "A valid recipient email address is required.");
  if (!text) return blockedResponse(selected, action, "Email message text is required.");
  try {
    let response;
    if (selected === "resend") {
      response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({ from: clean(env.NEXUS_EMAIL_FROM), to: [to], subject, text })
      });
    } else if (selected === "sendgrid") {
      response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: { authorization: `Bearer ${env.SENDGRID_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: clean(env.NEXUS_EMAIL_FROM) },
          subject,
          content: [{ type: "text/plain", value: text }]
        })
      });
    } else {
      response = await fetch(clean(env.NEXUS_EMAIL_PROVIDER_ENDPOINT), {
        method: "POST",
        headers: { authorization: `Bearer ${env.NEXUS_EMAIL_PROVIDER_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({ to, from: clean(env.NEXUS_EMAIL_FROM), subject, text, metadata: { source: "nexus-openai-native" } })
      });
    }
    const payload = await safeJson(response);
    if (!response.ok) throw new Error(payload.message || payload.error || response.statusText);
    return providerResponse({
      provider: selected,
      action,
      status: "completed",
      message: "Email sent by the configured provider after explicit confirmation.",
      data: {
        providerMessageId: payload.id || payload.message_id || payload.headers?.["x-message-id"] || response.headers.get("x-message-id") || "",
        to,
        subject,
        deliveredClaim: false,
        acceptedByProvider: true
      }
    });
  } catch (error) {
    return failedResponse(selected, action, error);
  }
}

module.exports = { status, send };
