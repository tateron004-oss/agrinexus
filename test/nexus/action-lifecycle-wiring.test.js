"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { withActionLifecycle, ensureNexusActionLedger, resetActionLedgerForTests } = require("../../server/action-lifecycle.js");

test.beforeEach(() => resetActionLedgerForTests());

function loadExecuteTool({ twilio, email, calendar, authoritativeRuntimeUser, authoritativeNexusRuntime, nexusTelehealthProvider, safeSymptomGuidance, activeContext }) {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const start = source.indexOf("async function executeNexusOpenAiNativeTool(");
  const end = source.indexOf("\nfunction nexusGenesisWorkspaceAction(", start);
  assert.ok(start > 0 && end > start, "could not locate executeNexusOpenAiNativeTool in server.js");

  const contactArgsStart = source.indexOf("function nexusOpenAiNativeExtractContactArgs(");
  const contactArgsEnd = source.indexOf("\nfunction ", contactArgsStart + 10);
  const ownerRecipientStart = source.indexOf("function nexusOpenAiNativeOwnerTestRecipient(");
  const ownerRecipientEnd = source.indexOf("\nfunction ", ownerRecipientStart + 10);
  // Sits between the two ranges above (added after this test was written) --
  // executeNexusOpenAiNativeTool's nexus_communications branch calls these to
  // recover a confirmed action's recipient/channel when the confirming turn
  // itself carries none. Extracted as its own range rather than mocked: real
  // pending-request recovery is exactly the behavior worth exercising here
  // too, not something to stub out.
  const pendingRequestFnsStart = source.indexOf("function rememberPendingCommunicationsRequest(");
  const pendingRequestFnsEnd = source.indexOf("\nfunction nexusOpenAiNativeOwnerTestRecipient(");
  assert.ok(pendingRequestFnsStart > 0 && pendingRequestFnsEnd > pendingRequestFnsStart,
    "could not locate the pending-communications-request helpers in server.js");

  const sandbox = {
    process: { env: {} },
    sanitizePilotText: value => String(value || ""),
    firstPresentEnvValue: (env, keys) => keys.map(key => env[key]).find(Boolean) || "",
    withActionLifecycle,
    nexusOpenAiNativeToolChoiceHint: () => "nexus_general_conversation",
    nexusOpenAiNativeToolReceipt: (_db, _tool, _command, status) => ({ testReceipt: true, status }),
    // Real implementation (not a stub) -- executeNexusOpenAiNativeTool's
    // restrictedToolCategory gate calls this directly (see server.js), added
    // when a guest-only restrictions check was widened to also cover the
    // Investor role.
    userIsRestrictedFrom: (user, restriction) => {
      if (user?.restrictions?.includes(restriction)) return true;
      if (user?.role === "Investor" && ["communications-send", "external-transaction", "health-record-write", "account-provider-link"].includes(restriction)) return true;
      return false;
    },
    nexusRealProviders: {
      twilio: twilio || {},
      email: email || {},
      calendar: calendar || {}
    },
    nexusOpenAiNativeProviderToolResult: (_db, _common, result) => result,
    nexusMentalHealthBehavioralWellness: require("../../public/nexus-mental-health-behavioral-wellness.js"),
    authoritativeRuntimeUser: authoritativeRuntimeUser || (async () => null),
    authoritativeNexusRuntime: authoritativeNexusRuntime || {
      behaviorTurnRequest: async () => { throw new Error("behaviorTurnRequest should not be called in this test"); },
      behaviorAcknowledgeRequest: async () => { throw new Error("behaviorAcknowledgeRequest should not be called in this test"); }
    },
    activeContext: activeContext || (() => ({ country: { id: "kenya", risk: "Moderate" }, route: {} })),
    safeSymptomGuidance: safeSymptomGuidance || ((symptoms) => ({
      redFlags: [], urgency: "routine-review", plainLanguage: "", possibleExplanations: []
    })),
    nexusTelehealthProvider: nexusTelehealthProvider || {
      createEncounter: async () => { throw new Error("createEncounter should not be called in this test"); }
    }
  };
  vm.createContext(sandbox);
  vm.runInContext(
    source.slice(contactArgsStart, contactArgsEnd) + "\n" +
    source.slice(pendingRequestFnsStart, pendingRequestFnsEnd) + "\n" +
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

function loadProviderToolResult() {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const start = source.indexOf("function nexusOpenAiNativeProviderToolResult(");
  const end = source.indexOf("\nfunction nexusOpenAiNativeExtractContactArgs(", start);
  assert.ok(start > 0 && end > start, "could not locate nexusOpenAiNativeProviderToolResult in server.js");
  const sandbox = { nexusOpenAiNativeToolReceipt: () => ({ testReceipt: true }) };
  vm.createContext(sandbox);
  vm.runInContext(source.slice(start, end) + "\nthis.run = nexusOpenAiNativeProviderToolResult;", sandbox);
  return sandbox.run;
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

test("nexusOpenAiNativeProviderToolResult reports the REAL lifecycle-verified flag as executionVerified, not the old ok+status heuristic", () => {
  const run = loadProviderToolResult();
  // A simulated response: ok:true, status:"completed" (so the old heuristic
  // would say providerSucceeded/executionVerified: true), but the lifecycle
  // wrapper honestly computed verified:false and attached it to body.
  const simulatedResult = { httpStatus: 200, body: { ok: true, status: "completed", message: "simulated", data: { simulated: true }, nexusLifecycleVerified: false } };
  const output = run({}, { toolName: "nexus_calendar", command: "schedule a meeting" }, simulatedResult);
  assert.equal(output.providerSucceeded, true, "providerSucceeded is a separate, unchanged signal (the provider layer did report completed)");
  assert.equal(output.executionVerified, false, "executionVerified must reflect the real lifecycle verification, not be fabricated from ok+status alone");
});

test("nexusOpenAiNativeProviderToolResult falls back to the old ok+status heuristic when no lifecycle metadata is present", () => {
  const run = loadProviderToolResult();
  const plainResult = { httpStatus: 200, body: { ok: true, status: "completed", message: "sent", data: { sid: "SMreal" } } };
  const output = run({}, { toolName: "nexus_communications", command: "text someone" }, plainResult);
  assert.equal(output.executionVerified, true, "call sites not wrapped by withActionLifecycle must keep their prior behavior unchanged");
});

// Confirmed by the production capability audit: OpenAI Realtime voice and
// the Windows desktop wake listener both reach real tool execution through
// this exact function (executeNexusOpenAiNativeTool) without ever passing
// through the browser's own mental-health interceptor. These two tests
// cover the fix added directly here, and double as a regression guard for
// the false positive it could have introduced (a real "therapy session"
// health/communications action must still go through, not get silently
// replaced by a support redirect).
test("a genuine crisis command is intercepted with the safety response before any provider is called, regardless of tool name", async () => {
  let calls = 0;
  const run = loadExecuteTool({
    email: { send: async () => { calls += 1; return ok({ providerMessageId: "MSG1" }); } }
  });
  const db = {};
  const result = await run(db, {}, "nexus_email", { command: "I want to end my life", confirmed: true });
  assert.equal(calls, 0, "the real email provider must never be called for a crisis message");
  assert.equal(result.capability, "mental-health-behavioral-wellness");
  assert.equal(result.status, "completed");
  assert.match(result.response, /contact local emergency/i);
  assert.equal(result.mentalHealth.classification.crisisOverride, true);
});

test("a crisis is still caught when the tool-calling model paraphrases the user's raw words into a non-matching command argument", async () => {
  // Confirmed live in production: runNexusOpenAiNativeAgentCommand lets the
  // model's own required "command" tool-call argument win over the caller's
  // actual raw text (args.command || context.command) -- so a direct
  // first-person crisis statement ("I want to end my life...") reached
  // nexus_health_preparation with crisisOverride never firing, because the
  // model rewrote it into clinical-sounding text that no longer matched the
  // crisis patterns, even though the caller's real words plainly would have.
  let calls = 0;
  const run = loadExecuteTool({
    email: { send: async () => { calls += 1; return ok({ providerMessageId: "MSG1" }); } }
  });
  const db = {};
  const result = await run(db, {}, "nexus_health_preparation",
    { command: "User is requesting emotional wellbeing support." },
    { command: "I want to end my life, I don't see the point anymore." });
  assert.equal(calls, 0, "the real provider must never be called for a crisis message");
  assert.equal(result.capability, "mental-health-behavioral-wellness");
  assert.equal(result.status, "completed");
  assert.match(result.response, /contact local emergency/i);
  assert.equal(result.mentalHealth.classification.crisisOverride, true);
});

test("a real therapy/provider-mentioning action is not intercepted -- only genuine crisis language is", async () => {
  let calls = 0;
  const run = loadExecuteTool({
    calendar: { createEvent: async () => { calls += 1; return ok({ eventId: "evt1" }); } }
  });
  const db = {};
  const result = await run(db, {}, "nexus_calendar", { command: "Book a calendar event with my therapy provider", confirmed: true });
  assert.equal(result.capability !== "mental-health-behavioral-wellness", true,
    "a plain mention of therapy/provider must not be treated as a crisis signal");
});

// nexus_lists has no real backend of its own in this dispatcher -- real list
// persistence only exists in the modern nexus/ runtime's behavior spine.
// These tests cover the bridge added directly here (authoritativeNexusRuntime
// .behaviorTurnRequest/.behaviorAcknowledgeRequest), confirming it reaches
// that real backend instead of silently no-oping or misrouting to reminders.
test("nexus_lists requires sign-in before attempting the authoritative runtime", async () => {
  const run = loadExecuteTool({ authoritativeRuntimeUser: async () => null });
  const db = {};
  const result = await run(db, {}, "nexus_lists", { command: "Create a checklist called Farm Chores with feed goats, water crops, and check fences." });
  assert.equal(result.status, "needs-auth");
  assert.equal(result.capability, "lists");
});

test("nexus_lists creates a real list through the authoritative runtime and reports the actual saved title and item count", async () => {
  const turnCalls = []; const ackCalls = [];
  const run = loadExecuteTool({
    authoritativeRuntimeUser: async user => ({ id: "auth-user-1", tenantId: "tenant-1" }),
    authoritativeNexusRuntime: {
      behaviorTurnRequest: async input => { turnCalls.push(input); return {
        state: "render_required", taskId: "task-1", commandId: "cmd-1", correlationId: "corr-1",
        render: { workspace: "lists", operation: "create_list", data: { title: "Farm Chores", items: [{ text: "feed goats" }, { text: "water crops" }, { text: "check fences" }], listId: "list-1" } }
      }; },
      behaviorAcknowledgeRequest: async input => { ackCalls.push(input); return { completed: true }; }
    }
  });
  const db = {};
  const result = await run(db, {}, "nexus_lists",
    { command: "create a list" },
    { command: "Create a checklist called Farm Chores with feed goats, water crops, and check fences." });
  assert.equal(turnCalls.length, 1);
  // The model's own paraphrased tool-call argument must not be what actually
  // gets planned -- the caller's raw, unmediated text (context.command) is
  // what the list planner needs to correctly extract every item.
  assert.equal(turnCalls[0].text, "Create a checklist called Farm Chores with feed goats, water crops, and check fences.");
  assert.equal(ackCalls.length, 1);
  assert.equal(ackCalls[0].taskId, "task-1");
  assert.equal(ackCalls[0].rendered, true);
  assert.equal(result.status, "completed");
  assert.equal(result.capability, "lists");
  assert.match(result.response, /Farm Chores/);
  assert.match(result.response, /3 items/);
  assert.equal(result.executionVerified, true);
});

// Found live: a real lists.read outcome was always mislabeled "created" or
// "updated" -- "What's on my Farm Chores checklist?" told the user their
// checklist was created/updated when they only asked to see it.
test("nexus_lists reports a real read as found content, not a bogus create/update claim", async () => {
  const run = loadExecuteTool({
    authoritativeRuntimeUser: async () => ({ id: "auth-user-1", tenantId: "tenant-1" }),
    authoritativeNexusRuntime: {
      behaviorTurnRequest: async () => ({
        state: "render_required", taskId: "task-2", commandId: "cmd-2", correlationId: "corr-2",
        render: { workspace: "lists", operation: "read_list", data: { found: true, listId: "list-1", list: { listId: "list-1", title: "Farm Chores", items: [{ text: "feed goats" }, { text: "water crops" }] } } }
      }),
      behaviorAcknowledgeRequest: async () => ({ completed: true })
    }
  });
  const db = {};
  const result = await run(db, {}, "nexus_lists", { command: "What's on my Farm Chores checklist?" });
  assert.equal(result.status, "completed");
  assert.doesNotMatch(result.response, /I (created|updated)/);
  assert.match(result.response, /Farm Chores/);
  assert.match(result.response, /feed goats/);
});

test("nexus_lists reports a needed confirmation instead of silently completing", async () => {
  const run = loadExecuteTool({
    authoritativeRuntimeUser: async () => ({ id: "auth-user-1", tenantId: "tenant-1" }),
    authoritativeNexusRuntime: {
      behaviorTurnRequest: async () => ({ state: "confirmation_required" }),
      behaviorAcknowledgeRequest: async () => { throw new Error("must not acknowledge a task still awaiting confirmation"); }
    }
  });
  const db = {};
  const result = await run(db, {}, "nexus_lists", { command: "Delete my Farm Chores list" });
  assert.equal(result.status, "confirmation-required");
  assert.equal(result.requiresConfirmation, true);
});

test("nexus_lists fails closed with a plain message when the authoritative behavior spine is unavailable", async () => {
  const run = loadExecuteTool({
    authoritativeRuntimeUser: async () => ({ id: "auth-user-1", tenantId: "tenant-1" }),
    authoritativeNexusRuntime: {
      behaviorTurnRequest: async () => { throw Object.assign(new Error("The authoritative behavior spine is unavailable; no legacy write fallback was used."), { code: "behavior_spine_unavailable" }); }
    }
  });
  const db = {};
  const result = await run(db, {}, "nexus_lists", { command: "Create a checklist called Farm Chores." });
  assert.equal(result.status, "blocked");
  assert.match(result.response, /temporarily unavailable/i);
});

// nexus_health_preparation's telehealth "video call" branch has no backend
// of its own -- the pre-existing voice "intake" branch only ever writes to
// the legacy db.profile.healthIntakes store, a completely separate data
// model from db.nexusTelehealthEncounters, which is what a real video room
// needs an encounterId from. These tests cover the bridge to
// nexusTelehealthProvider.createEncounter added directly here.
test("a video call request with danger-sign symptoms is redirected to emergency guidance and never reaches the real telehealth backend", async () => {
  let createCalls = 0;
  const run = loadExecuteTool({
    safeSymptomGuidance: () => ({ redFlags: ["chest pain"], urgency: "urgent-human-review", plainLanguage: "Danger sign found: chest pain." }),
    nexusTelehealthProvider: { createEncounter: async () => { createCalls++; return {}; } }
  });
  const db = {};
  // "severe bleeding" (not "chest pain") deliberately: the latter is also
  // caught by the earlier, broader crisis interceptor regardless of
  // toolName, which would make this test pass without ever exercising this
  // branch's own defense-in-depth red-flag check.
  const result = await run(db, {}, "nexus_health_preparation", { command: "Start a video call, I have severe bleeding.", confirmed: true });
  assert.equal(createCalls, 0, "the real telehealth encounter must never be created when danger signs are present");
  assert.equal(result.status, "emergency-guidance");
  assert.match(result.response, /chest pain/i);
  assert.match(result.response, /emergency|urgent care/i);
});

test("a video call request requires explicit confirmation before creating a real encounter", async () => {
  let createCalls = 0;
  const run = loadExecuteTool({
    nexusTelehealthProvider: { createEncounter: async () => { createCalls++; return {}; } }
  });
  const db = {};
  const result = await run(db, {}, "nexus_health_preparation", { command: "Start a video visit for my headache." });
  assert.equal(createCalls, 0, "the real telehealth encounter must not be created without explicit confirmation");
  assert.equal(result.status, "confirmation-required");
  assert.equal(result.requiresConfirmation, true);
  assert.match(result.response, /confirm/i);
});

test("a confirmed video call request creates a real telehealth encounter and returns the real video room link", async () => {
  let capturedBody = null;
  const run = loadExecuteTool({
    nexusTelehealthProvider: {
      createEncounter: async (_db, body) => {
        capturedBody = body;
        return { encounter: { id: "telehealth-1", status: "queued-for-provider-review", video: { ok: true, roomCreated: true, provider: "daily", roomUrl: "https://kyro.daily.co/nexus-telehealth-1" } } };
      }
    }
  });
  const db = {};
  const result = await run(db, {}, "nexus_health_preparation", { command: "Start a video visit for my headache.", confirmed: true });
  assert.equal(capturedBody.createVideo, true);
  assert.equal(capturedBody.consentToShare, true);
  assert.equal(capturedBody.confirmed, true);
  assert.equal(capturedBody.consentToPreparePacket, true);
  assert.equal(result.status, "video-room-created");
  assert.match(result.response, /https:\/\/kyro\.daily\.co\/nexus-telehealth-1/);
  assert.equal(result.encounterId, "telehealth-1");
  assert.equal(result.executionVerified, true);
});

test("a confirmed video call request still reports the prepared packet when the video provider isn't configured", async () => {
  const run = loadExecuteTool({
    nexusTelehealthProvider: {
      createEncounter: async () => ({ encounter: { id: "telehealth-2", status: "queued-for-provider-review", video: { ok: true, roomCreated: false, status: "missing_config" } } })
    }
  });
  const db = {};
  const result = await run(db, {}, "nexus_health_preparation", { command: "Start a video visit for my headache.", confirmed: true });
  assert.equal(result.status, "video-packet-prepared");
  assert.match(result.response, /not configured/i);
  assert.equal(result.executionVerified, false);
  assert.equal(result.encounterId, "telehealth-2");
});
