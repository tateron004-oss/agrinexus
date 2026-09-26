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
  safeJson,
  domainProviderSimulationEnabled,
  simulatedProviderResponse
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
  if (readiness.missingConfig.length && !domainProviderSimulationEnabled(env)) return missingConfigResponse(selected, action, readiness.missingConfig);
  const confirmation = requireConfirmation(body, selected, action);
  if (confirmation) return confirmation;
  const title = clean(body.title || body.summary || body.command);
  const start = clean(body.start || body.startTime || body.when);
  if (!title || !start) return blockedResponse(selected, action, "Calendar title and start time are required.");
  // Found live: start/end are bare, offset-less timestamps ("2026-09-26T15:00:00")
  // with no way for the calendar provider to know whose "3pm" that is -- without
  // an explicit zone, Google Calendar's API treats a dateTime with no UTC offset
  // and no timeZone field as UTC, silently landing the event hours off from what
  // the caller actually asked for. Falls back to this app's own default operating
  // time zone (matching nexus/reminders' own DEFAULT_TIME_ZONE) when the caller's
  // real zone isn't available (e.g. a phone call with no client-supplied zone).
  const timeZone = clean(body.timeZone) || "Africa/Nairobi";
  if (readiness.missingConfig.length) {
    return simulatedProviderResponse(selected, action, {
      idField: "eventId",
      idPrefix: "SIMULATED-EVT",
      extra: { htmlLink: "", title, start, providerVerified: false },
      note: "Simulated calendar event created by the local demo double after explicit confirmation. No real calendar provider is configured, so no real event was created -- this is a labeled simulated response for demoing the full build-out before a real account is connected."
    });
  }
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
          start: { dateTime: start, timeZone },
          end: { dateTime: clean(body.end || body.endTime) || new Date(new Date(start).getTime() + 30 * 60000).toISOString(), timeZone }
        })
      });
    } else {
      response = await fetch(clean(env.NEXUS_CALENDAR_PROVIDER_ENDPOINT), {
        method: "POST",
        headers: { authorization: `Bearer ${env.NEXUS_CALENDAR_PROVIDER_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({ action: "create", title, start, end: clean(body.end || body.endTime), timeZone, metadata: { source: "nexus-openai-native" } })
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
