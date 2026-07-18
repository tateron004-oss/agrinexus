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
  return clean(env.NEXUS_CALENDAR_PROVIDER || (env.GOOGLE_CALENDAR_ACCESS_TOKEN ? "google" : "generic"));
}

function status(env = process.env) {
  const selected = provider(env);
  const enabled = envEnabled("NEXUS_CALENDAR_ENABLED", env);
  const missingByProvider = {
    google: missingEnv(["GOOGLE_CALENDAR_ACCESS_TOKEN"], env),
    generic: missingEnv(["NEXUS_CALENDAR_PROVIDER_ENDPOINT", "NEXUS_CALENDAR_PROVIDER_API_KEY"], env)
  };
  return {
    provider: selected,
    enabled,
    missingConfig: missingByProvider[selected] || missingByProvider.generic,
    supportsAvailability: true,
    supportsCreate: true,
    supportsUpdate: selected === "generic",
    supportsCancel: selected === "generic"
  };
}

async function createEvent(body = {}, env = process.env) {
  const selected = provider(env);
  const action = "calendar.event.create";
  if (!envEnabled("NEXUS_CALENDAR_ENABLED", env)) return disabledResponse(selected, action, "NEXUS_CALENDAR_ENABLED");
  const readiness = status(env);
  if (readiness.missingConfig.length) return missingConfigResponse(selected, action, readiness.missingConfig);
  const confirmation = requireConfirmation(body, selected, action);
  if (confirmation) return confirmation;
  const title = clean(body.title || body.summary || body.command);
  const start = clean(body.start || body.startTime || body.when);
  if (!title || !start) return blockedResponse(selected, action, "Calendar title and start time are required.");
  try {
    let response;
    if (selected === "google") {
      const calendarId = encodeURIComponent(clean(env.GOOGLE_CALENDAR_ID || "primary"));
      response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
        method: "POST",
        headers: { authorization: `Bearer ${env.GOOGLE_CALENDAR_ACCESS_TOKEN}`, "content-type": "application/json" },
        body: JSON.stringify({
          summary: title,
          description: clean(body.description || "Created by Nexus after explicit confirmation."),
          start: { dateTime: start },
          end: { dateTime: clean(body.end || body.endTime) || new Date(new Date(start).getTime() + 30 * 60000).toISOString() }
        })
      });
    } else {
      response = await fetch(clean(env.NEXUS_CALENDAR_PROVIDER_ENDPOINT), {
        method: "POST",
        headers: { authorization: `Bearer ${env.NEXUS_CALENDAR_PROVIDER_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({ action: "create", title, start, end: clean(body.end || body.endTime), metadata: { source: "nexus-openai-native" } })
      });
    }
    const payload = await safeJson(response);
    if (!response.ok) throw new Error(payload.error?.message || payload.message || response.statusText);
    return providerResponse({
      provider: selected,
      action,
      status: "completed",
      message: "Calendar event created by the configured provider after explicit confirmation.",
      data: {
        eventId: payload.id || payload.eventId || "",
        htmlLink: payload.htmlLink || payload.url || "",
        title,
        start,
        providerVerified: true
      }
    });
  } catch (error) {
    return failedResponse(selected, action, error);
  }
}

module.exports = { status, createEvent };
