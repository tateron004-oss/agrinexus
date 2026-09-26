"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const twilioProvider = require("../../server/providers/twilioProvider.js");
const calendarProvider = require("../../server/providers/calendarProvider.js");

function unconfiguredEnv(overrides = {}) {
  return {
    NEXUS_SMS_ENABLED: "true",
    NEXUS_WHATSAPP_ENABLED: "true",
    NEXUS_CALLS_ENABLED: "true",
    NEXUS_CALENDAR_ENABLED: "true",
    ...overrides
  };
}

test("twilioProvider.sendSms falls back to a labeled simulated response when unconfigured", async () => {
  const result = await twilioProvider.sendSms({ to: "+15550001111", message: "hi", confirmed: true }, unconfiguredEnv());
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.simulated, true);
  assert.match(result.body.data.sid, /^SIMULATEDSMS/);
  assert.match(result.body.message, /Twilio is not configured/);
});

test("twilioProvider.sendWhatsapp falls back to a labeled simulated response when unconfigured", async () => {
  const result = await twilioProvider.sendWhatsapp({ to: "+15550001111", message: "hi", confirmed: true }, unconfiguredEnv());
  assert.equal(result.body.data.simulated, true);
  assert.match(result.body.data.sid, /^SIMULATEDWHATSAPP/);
});

test("twilioProvider.startCall falls back to a labeled simulated response when unconfigured", async () => {
  const result = await twilioProvider.startCall({ to: "+15550001111", confirmed: true }, unconfiguredEnv());
  assert.equal(result.body.data.simulated, true);
  assert.equal(result.body.data.channel, "voice");
  assert.match(result.body.data.sid, /^SIMULATEDVOICE/);
});

test("twilioProvider still requires confirmation before returning a simulated response", async () => {
  const result = await twilioProvider.sendSms({ to: "+15550001111", message: "hi" }, unconfiguredEnv());
  assert.equal(result.body.status, "confirmation_required");
  assert.equal(result.body.data.simulated, undefined);
});

test("twilioProvider still validates input before returning a simulated response", async () => {
  const result = await twilioProvider.sendSms({ to: "not-a-number", message: "hi", confirmed: true }, unconfiguredEnv());
  assert.equal(result.body.status, "blocked");
});

test("twilioProvider reports missing config as before when simulation is explicitly disabled", async () => {
  const result = await twilioProvider.sendSms({ to: "+15550001111", message: "hi", confirmed: true }, unconfiguredEnv({ NEXUS_SIMULATE_DOMAIN_PROVIDERS: "false" }));
  assert.equal(result.body.status, "missing_config");
  assert.equal(result.body.data.simulated, undefined);
});

test("twilioProvider.sendSms uses the real path, not simulation, once real credentials are present", async () => {
  const originalFetch = global.fetch;
  let called = false;
  global.fetch = async () => { called = true; return { ok: true, text: async () => JSON.stringify({ sid: "SMreal123" }) }; };
  try {
    const result = await twilioProvider.sendSms({ to: "+15550001111", message: "hi", confirmed: true }, unconfiguredEnv({
      TWILIO_ACCOUNT_SID: "AC123", TWILIO_AUTH_TOKEN: "token", TWILIO_FROM_NUMBER: "+15550009999", NEXUS_SMS_STATUS_DELAY_MS: "0"
    }));
    assert.equal(called, true, "a real credential set must use the real Twilio call, not the simulated fallback");
    assert.equal(result.body.data.simulated, undefined);
    assert.equal(result.body.data.sid, "SMreal123");
  } finally {
    global.fetch = originalFetch;
  }
});

test("calendarProvider.createEvent falls back to a labeled simulated response when unconfigured", async () => {
  const result = await calendarProvider.createEvent({ title: "Farm visit", start: "2026-10-01T10:00:00Z", confirmed: true }, unconfiguredEnv());
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.simulated, true);
  assert.match(result.body.data.eventId, /^SIMULATED-EVT-/);
  assert.equal(result.body.data.providerVerified, false);
});

test("calendarProvider.createEvent still requires title and start before returning a simulated response", async () => {
  const result = await calendarProvider.createEvent({ confirmed: true }, unconfiguredEnv());
  assert.equal(result.body.status, "blocked");
});

test("calendarProvider.createEvent reports missing config as before when simulation is explicitly disabled", async () => {
  const result = await calendarProvider.createEvent({ title: "Farm visit", start: "2026-10-01T10:00:00Z", confirmed: true }, unconfiguredEnv({ NEXUS_SIMULATE_DOMAIN_PROVIDERS: "false" }));
  assert.equal(result.body.status, "missing_config");
});

// Found live: start/end were sent to Google Calendar with no timeZone field at
// all -- a bare, offset-less "2026-09-26T15:00:00" (what the model naturally
// produces for "tomorrow at 3pm") is interpreted as UTC by Google, landing a
// Nairobi caller's 3pm event hours off from what they actually asked for.
test("calendarProvider.createEvent sends an explicit timeZone to the real Google Calendar API, using the caller's own zone when given", async () => {
  const originalFetch = global.fetch;
  let sentBody;
  global.fetch = async (url, init) => { sentBody = JSON.parse(init.body); return { ok: true, text: async () => JSON.stringify({ id: "evt_real1" }) }; };
  try {
    const withZone = await calendarProvider.createEvent(
      { title: "Vet visit", start: "2026-09-26T15:00:00", timeZone: "America/Los_Angeles", confirmed: true },
      unconfiguredEnv({ GOOGLE_CALENDAR_ACCESS_TOKEN: "token" })
    );
    assert.equal(withZone.body.data.providerVerified, true);
    assert.equal(sentBody.start.timeZone, "America/Los_Angeles");
    assert.equal(sentBody.end.timeZone, "America/Los_Angeles");

    await calendarProvider.createEvent({ title: "Vet visit", start: "2026-09-26T15:00:00", confirmed: true }, unconfiguredEnv({ GOOGLE_CALENDAR_ACCESS_TOKEN: "token" }));
    assert.equal(sentBody.start.timeZone, "Africa/Nairobi", "a caller with no known zone must still get an explicit zone, not UTC by omission");
  } finally {
    global.fetch = originalFetch;
  }
});
