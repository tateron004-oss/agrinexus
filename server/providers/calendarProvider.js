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

// Found live: status() already honestly scopes update/cancel to the
// "generic" provider only (Google's real update/cancel needs an OAuth write
// scope and event-ownership semantics this codebase has never verified), but
// nothing ever implemented that promise -- module.exports only ever had
// status/createEvent, so nexus_calendar's own tool description ("search,
// schedule, change, or cancel") was pure fiction for three of those four
// verbs. Search is implemented for both providers (read-only, no
// confirmation needed); update/cancel are real for "generic" only, matching
// status()'s own existing, already-accurate claim -- selecting "google"
// returns a clear, honest "not supported for this provider" block instead of
// a silent no-op or a fabricated success.
async function searchEvents(body = {}, env = process.env) {
  const selected = provider(env);
  const action = "calendar.event.search";
  if (!envEnabled("NEXUS_CALENDAR_ENABLED", env)) return disabledResponse(selected, action, "NEXUS_CALENDAR_ENABLED");
  const readiness = status(env);
  if (readiness.missingConfig.length && !domainProviderSimulationEnabled(env)) return missingConfigResponse(selected, action, readiness.missingConfig);
  const query = clean(body.query || body.title || body.command);
  if (readiness.missingConfig.length) {
    return simulatedProviderResponse(selected, action, {
      idField: "eventId",
      idPrefix: "SIMULATED-EVT",
      extra: { events: [], query },
      note: "Simulated calendar search run by the local demo double. No real calendar provider is configured, so no real events were searched -- this is a labeled simulated response for demoing the full build-out before a real account is connected."
    });
  }
  try {
    let response;
    if (selected === "google") {
      const calendarId = encodeURIComponent(clean(env.GOOGLE_CALENDAR_ID || "primary"));
      const params = new URLSearchParams({ maxResults: "10", singleEvents: "true", orderBy: "startTime", timeMin: new Date().toISOString() });
      if (query) params.set("q", query);
      response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${params.toString()}`, {
        headers: { authorization: `Bearer ${env.GOOGLE_CALENDAR_ACCESS_TOKEN}` }
      });
    } else {
      response = await fetch(clean(env.NEXUS_CALENDAR_PROVIDER_ENDPOINT), {
        method: "POST",
        headers: { authorization: `Bearer ${env.NEXUS_CALENDAR_PROVIDER_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({ action: "search", query, metadata: { source: "nexus-openai-native" } })
      });
    }
    const payload = await safeJson(response);
    if (!response.ok) throw new Error(payload.error?.message || payload.message || response.statusText);
    const rawEvents = selected === "google" ? payload.items || [] : payload.events || [];
    const events = rawEvents.map(item => ({
      eventId: item.id || item.eventId || "",
      title: item.summary || item.title || "",
      start: item.start?.dateTime || item.start?.date || item.start || "",
      end: item.end?.dateTime || item.end?.date || item.end || ""
    }));
    return providerResponse({
      provider: selected,
      action,
      status: "completed",
      message: events.length ? `Found ${events.length} matching calendar event${events.length === 1 ? "" : "s"}.` : "No matching calendar events were found.",
      data: { events, query, providerVerified: true }
    });
  } catch (error) {
    return failedResponse(selected, action, error);
  }
}

function unsupportedProviderResponse(selected, action) {
  return blockedResponse(selected, action, `${selected === "google" ? "Google Calendar" : selected} does not support ${action === "calendar.event.update" ? "changing" : "cancelling"} events through Nexus yet -- only a configured generic calendar provider supports this.`);
}

async function updateEvent(body = {}, env = process.env) {
  const selected = provider(env);
  const action = "calendar.event.update";
  if (!envEnabled("NEXUS_CALENDAR_ENABLED", env)) return disabledResponse(selected, action, "NEXUS_CALENDAR_ENABLED");
  if (selected !== "generic") return unsupportedProviderResponse(selected, action);
  const readiness = status(env);
  if (readiness.missingConfig.length && !domainProviderSimulationEnabled(env)) return missingConfigResponse(selected, action, readiness.missingConfig);
  const confirmation = requireConfirmation(body, selected, action);
  if (confirmation) return confirmation;
  const eventId = clean(body.eventId);
  if (!eventId) return blockedResponse(selected, action, "An event id is required to change a calendar event. Search for the event first to find its id.");
  if (readiness.missingConfig.length) {
    return simulatedProviderResponse(selected, action, {
      idField: "eventId",
      idPrefix: "SIMULATED-EVT",
      extra: { eventId, providerVerified: false },
      note: "Simulated calendar event change made by the local demo double after explicit confirmation. No real calendar provider is configured, so no real event was changed -- this is a labeled simulated response for demoing the full build-out before a real account is connected."
    });
  }
  try {
    const response = await fetch(clean(env.NEXUS_CALENDAR_PROVIDER_ENDPOINT), {
      method: "POST",
      headers: { authorization: `Bearer ${env.NEXUS_CALENDAR_PROVIDER_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({
        action: "update", eventId,
        title: clean(body.title || body.summary) || undefined,
        start: clean(body.start || body.startTime || body.when) || undefined,
        end: clean(body.end || body.endTime) || undefined,
        metadata: { source: "nexus-openai-native" }
      })
    });
    const payload = await safeJson(response);
    if (!response.ok) throw new Error(payload.error?.message || payload.message || response.statusText);
    return providerResponse({
      provider: selected, action, status: "completed",
      message: "Calendar event changed by the configured provider after explicit confirmation.",
      data: { eventId, providerVerified: true }
    });
  } catch (error) {
    return failedResponse(selected, action, error);
  }
}

async function cancelEvent(body = {}, env = process.env) {
  const selected = provider(env);
  const action = "calendar.event.cancel";
  if (!envEnabled("NEXUS_CALENDAR_ENABLED", env)) return disabledResponse(selected, action, "NEXUS_CALENDAR_ENABLED");
  if (selected !== "generic") return unsupportedProviderResponse(selected, action);
  const readiness = status(env);
  if (readiness.missingConfig.length && !domainProviderSimulationEnabled(env)) return missingConfigResponse(selected, action, readiness.missingConfig);
  const confirmation = requireConfirmation(body, selected, action);
  if (confirmation) return confirmation;
  const eventId = clean(body.eventId);
  if (!eventId) return blockedResponse(selected, action, "An event id is required to cancel a calendar event. Search for the event first to find its id.");
  if (readiness.missingConfig.length) {
    return simulatedProviderResponse(selected, action, {
      idField: "eventId",
      idPrefix: "SIMULATED-EVT",
      extra: { eventId, providerVerified: false },
      note: "Simulated calendar event cancellation made by the local demo double after explicit confirmation. No real calendar provider is configured, so no real event was cancelled -- this is a labeled simulated response for demoing the full build-out before a real account is connected."
    });
  }
  try {
    const response = await fetch(clean(env.NEXUS_CALENDAR_PROVIDER_ENDPOINT), {
      method: "POST",
      headers: { authorization: `Bearer ${env.NEXUS_CALENDAR_PROVIDER_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({ action: "cancel", eventId, metadata: { source: "nexus-openai-native" } })
    });
    const payload = await safeJson(response);
    if (!response.ok) throw new Error(payload.error?.message || payload.message || response.statusText);
    return providerResponse({
      provider: selected, action, status: "completed",
      message: "Calendar event cancelled by the configured provider after explicit confirmation.",
      data: { eventId, providerVerified: true }
    });
  } catch (error) {
    return failedResponse(selected, action, error);
  }
}

module.exports = { status, createEvent, searchEvents, updateEvent, cancelEvent };
