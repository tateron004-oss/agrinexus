"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { withActionLifecycle, ensureNexusActionLedger } = require("../../server/action-lifecycle.js");

function loadExecuteTool({ twilio, email, calendar }) {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const start = source.indexOf("async function executeNexusOpenAiNativeTool(");
  const end = source.indexOf("\nfunction nexusGenesisWorkspaceAction(", start);
  assert.ok(start > 0 && end > start, "could not locate executeNexusOpenAiNativeTool in server.js");

  const contactArgsStart = source.indexOf("function nexusOpenAiNativeExtractContactArgs(");
  const contactArgsEnd = source.indexOf("\nfunction ", contactArgsStart + 10);
  const ownerRecipientStart = source.indexOf("function nexusOpenAiNativeOwnerTestRecipient(");
  const ownerRecipientEnd = source.indexOf("\nfunction ", ownerRecipientStart + 10);

  const sandbox = {
    process: { env: {} },
    sanitizePilotText: value => String(value || ""),
    firstPresentEnvValue: (env, keys) => keys.map(key => env[key]).find(Boolean) || "",
    withActionLifecycle,
    nexusOpenAiNativeToolChoiceHint: () => "nexus_general_conversation",
    nexusRealProviders: {
      twilio: twilio || {},
      email: email || {},
      calendar: calendar || {}
    },
    nexusOpenAiNativeProviderToolResult: (_db, _common, result) => result
  };
  vm.createContext(sandbox);
  vm.runInContext(
    source.slice(contactArgsStart, contactArgsEnd) + "\n" +
    source.slice(ownerRecipientStart, ownerRecipientEnd) + "\n" +
    source.slice(start, end) +
    "\nthis.run = executeNexusOpenAiNativeTool;",
    sandbox
  );
  return sandbox.run;
}

function ok(data = {}) {
  return { httpStatus: 200, body: { ok: true, status: "completed", message: "sent", data } };
}

test("nexus_email routes real email sends through withActionLifecycle and dedupes an immediate duplicate", async () => {
  let calls = 0;
  const run = loadExecuteTool({
    email: { send: async () => { calls += 1; return ok({ providerMessageId: `MSG${calls}` }); } }
  });
  const db = {};
  const args = { command: "email jane@example.com about the delivery", confirmed: true };
  const first = await run(db, {}, "nexus_email", args);
  const second = await run(db, {}, "nexus_email", args);
  assert.equal(calls, 1, "a repeated identical email tool call must not send twice");
  assert.equal(first.body.data.providerMessageId, second.body.data.providerMessageId);
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger[0].provider, "email");
  assert.equal(ledger[0].verified, true);
});

test("nexus_communications sms path routes through withActionLifecycle and dedupes a duplicate", async () => {
  let calls = 0;
  const run = loadExecuteTool({
    twilio: { sendSms: async () => { calls += 1; return ok({ sid: `SM${calls}` }); } }
  });
  const db = {};
  const args = { command: "text +15550001111 the delivery is on the way", confirmed: true, to: "+15550001111", message: "on the way" };
  await run(db, {}, "nexus_communications", args);
  await run(db, {}, "nexus_communications", args);
  assert.equal(calls, 1, "a repeated identical sms tool call must not send twice");
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger[0].provider, "twilio");
  assert.equal(ledger[0].action, "sms.send");
});

test("nexus_communications call channel still passes confirmed through unchanged after the lifecycle wrap", async () => {
  const calls = [];
  const run = loadExecuteTool({
    twilio: { startCall: async args => { calls.push(args); return { status: args.confirmed === true ? "mock-confirmed" : "needs-confirmation" }; } }
  });
  const db = {};
  await run(db, {}, "nexus_communications", { command: "call this number", to: "+15555550456", channel: "call", confirmed: false });
  assert.equal(calls[0].confirmed, false);
  assert.equal(calls[0].to, "+15555550456");
});

test("nexus_calendar routes real event creation through withActionLifecycle and dedupes a duplicate", async () => {
  let calls = 0;
  const run = loadExecuteTool({
    calendar: { createEvent: async () => { calls += 1; return ok({ eventId: `EVT${calls}` }); } }
  });
  const db = {};
  const args = { command: "schedule a meeting", title: "Farm visit", start: "2026-10-01T10:00:00Z", confirmed: true };
  const first = await run(db, {}, "nexus_calendar", args);
  const second = await run(db, {}, "nexus_calendar", args);
  assert.equal(calls, 1, "a repeated identical calendar tool call must not create the event twice");
  assert.equal(first.body.data.eventId, second.body.data.eventId);
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger[0].provider, "calendar");
  assert.equal(ledger[0].verified, true);
});

test("nexus_calendar records verified: false when the provider response has no real event id", async () => {
  const run = loadExecuteTool({
    calendar: { createEvent: async () => ok({}) }
  });
  const db = {};
  await run(db, {}, "nexus_calendar", { command: "schedule a meeting", title: "Farm visit", start: "2026-10-01T10:00:00Z", confirmed: true });
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger[0].verified, false);
});

test("nexus_calendar records verified: false for a simulated event, even though it carries a fake event id", async () => {
  const run = loadExecuteTool({
    calendar: { createEvent: async () => ok({ eventId: "SIMULATED-EVT-ABC123", simulated: true }) }
  });
  const db = {};
  await run(db, {}, "nexus_calendar", { command: "schedule a meeting", title: "Farm visit", start: "2026-10-01T10:00:00Z", confirmed: true });
  const ledger = ensureNexusActionLedger(db);
  assert.equal(ledger[0].verified, false, "a simulated response must never be reported as independently verified, even with a well-formed fake id");
  assert.match(ledger[0].verificationNote, /Simulated/);
});

test("nexus_email and nexus_communications also record verified: false for a simulated response", async () => {
  const runEmail = loadExecuteTool({
    email: { send: async () => ok({ providerMessageId: "SIMULATED-MSG-1", simulated: true }) }
  });
  const dbEmail = {};
  await runEmail(dbEmail, {}, "nexus_email", { command: "email jane@example.com", confirmed: true });
  assert.equal(ensureNexusActionLedger(dbEmail)[0].verified, false);

  const runSms = loadExecuteTool({
    twilio: { sendSms: async () => ok({ sid: "SIMULATEDSMSABC", simulated: true }) }
  });
  const dbSms = {};
  await runSms(dbSms, {}, "nexus_communications", { command: "text this number", to: "+15550001111", message: "hi", confirmed: true });
  assert.equal(ensureNexusActionLedger(dbSms)[0].verified, false);
});
