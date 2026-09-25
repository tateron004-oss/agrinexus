"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { userConfirmableConsent, informedConfirmationPrompt, describeReading, POLICIES } = require("../../nexus/consent/user-confirmable-consents.js");

// Production 2026-09-20: confirming "Save a telehealth intake..." as a normal user returned 403 "Active consent is
// required for health:telehealth-intake:write". The only code that ever granted a consent was the deploy's acceptance probe.
const TOOLS = {
  "telehealth.prepare": { tool_id: "telehealth.prepare", consent_scope: "health:telehealth-intake:write" },
  "health.record": { tool_id: "health.record", consent_scope: "health:record:write" },
  "communications.send": { tool_id: "communications.send", consent_scope: "communications:send:write" },
  "reminders.cancel": { tool_id: "reminders.cancel", consent_scope: null }
};
const step = (toolId, input = {}, extra = {}) => ({ step_id: "stp_1", tool_id: toolId, title: `Run ${toolId}`, input, ...extra });
const ownerTask = (steps, extra = {}) => ({ taskId: "tsk_1", ownerId: "user-1", application: "telehealth", goal: "Save a telehealth intake", riskTier: "regulated", conversationId: "cnv_1", steps, ...extra });

function harness({ task, existingConsent = null, grantError = null, withConsents = true, toolsGet } = {}) {
  const calls = [];
  const engine = {
    tools: { get: toolsGet || (async id => TOOLS[id] || null) },
    approve: async input => { calls.push(["approve", input.approved]); },
    transition: async () => { calls.push(["transition"]); return { taskId: "tsk_1", state: "cancelled" }; },
    executeTask: async () => { calls.push(["execute"]); return { state: "awaiting_render", receipts: [] }; },
    ...(withConsents ? { consents: {
      active: async input => { calls.push(["active", input.scope]); return existingConsent; },
      grant: async input => { calls.push(["grant", input]); if (grantError) throw grantError; return { consent_id: "cns_1" }; }
    } } : {}),
    audit: { record: async event => { calls.push(["audit", event]); return event; } }
  };
  const spine = new BehaviorSpine({ agent: { command: async () => assert.fail("not used") }, engine,
    tasks: { get: async () => task }, conversations: { append: async () => {} },
    workspaceStates: { stage: async () => {}, acknowledge: async () => {} } });
  return { spine, calls, engine };
}
const ctx = (userId = "user-1", extra = {}) => ({ tenantId: "tenant-1", userId, can: () => true, hasRole: () => false, ...extra });
const confirmInput = { taskId: "tsk_1", stepId: "stp_1", approved: true, text: "Yes, save it.", channel: "typed" };

test("the confirmation prompt says exactly what will be stored and that yes is consent", async () => {
  const { spine } = harness({ task: ownerTask([]) });
  const telehealth = await spine.confirmationPrompt({ task: ownerTask([step("telehealth.prepare", { concern: "Save a telehealth intake for my blood pressure concern" })]), pendingStepId: "stp_1" });
  assert.match(telehealth, /I can save this telehealth intake to your own health records: "Save a telehealth intake for my blood pressure concern"/);
  assert.match(telehealth, /not shared with or sent to any provider/); assert.match(telehealth, /Say yes to consent and save it, or no to cancel\./);
  const reading = await spine.confirmationPrompt({ task: ownerTask([step("health.record", { intakeType: "blood-pressure", systolic: 140, diastolic: 90 })]), pendingStepId: "stp_1" });
  assert.match(reading, /I can save this to your own health records: blood pressure 140 over 90\./); assert.match(reading, /not shared with anyone/); assert.match(reading, /Say yes to consent and save it/);
});

test("every other confirmation keeps its generic wording, including sending a message", async () => {
  const { spine } = harness({ task: ownerTask([]) });
  const generic = "I prepared the request and need your confirmation before the next governed action.";
  for (const toolId of ["reminders.cancel", "communications.send", "unknown.tool"])
    assert.equal(await spine.confirmationPrompt({ task: ownerTask([step(toolId, { message: "hi" })]), pendingStepId: "stp_1" }), generic, toolId);
  assert.equal(await spine.confirmationPrompt({ task: ownerTask([step("telehealth.prepare")]), pendingStepId: "no_such_step" }), generic, "no matching step");
  const failing = harness({ task: ownerTask([]), toolsGet: async () => { throw new Error("db down"); } });
  assert.equal(await failing.spine.confirmationPrompt({ task: ownerTask([step("telehealth.prepare")]), pendingStepId: "stp_1" }), generic, "a lookup failure never blocks the prompt");
});

test("the owner's yes records a consent for that task and scope, after approval and before the write", async () => {
  const { spine, calls } = harness({ task: ownerTask([step("telehealth.prepare", { concern: "BP concern" })]) });
  const result = await spine.confirm({ input: confirmInput, context: ctx() });
  assert.deepEqual(calls.map(call => call[0]), ["approve", "active", "grant", "audit", "execute"], "approve, then consent, then a real audit record of the grant, then the write");
  const grant = calls.find(call => call[0] === "grant")[1];
  assert.equal(grant.tenantId, "tenant-1"); assert.equal(grant.subjectId, "user-1"); assert.equal(grant.taskId, "tsk_1"); assert.equal(grant.scope, "health:telehealth-intake:write");
  assert.equal(grant.policyVersion, POLICIES["health:telehealth-intake:write"].policyVersion); assert.match(grant.purpose, /your own health records/);
  assert.equal(grant.receipt.source, "user-confirmation"); assert.equal(grant.receipt.stepId, "stp_1"); assert.equal(grant.receipt.confirmation, "Yes, save it."); assert.equal(grant.receipt.channel, "typed");
  // Found live (record-repository/consent follow-up audit): the actual
  // moment of informed consent was never written to nexus_audit_events --
  // only the resulting tool.completed event was, leaving no trace of when
  // or how consent was obtained for an auditor reviewing that feed.
  const auditEvent = calls.find(call => call[0] === "audit")[1];
  assert.equal(auditEvent.eventType, "consent.granted"); assert.equal(auditEvent.outcome, "success");
  assert.equal(auditEvent.metadata.consentId, "cns_1"); assert.equal(auditEvent.metadata.scope, "health:telehealth-intake:write");
  assert.ok(result.state === "render_required" || result.state === "completed" || result.state === "confirmation_required", "the write proceeded");
  const health = harness({ task: ownerTask([step("health.record", { systolic: 128, diastolic: 82 })], { application: "health" }) });
  await health.spine.confirm({ input: confirmInput, context: ctx() });
  assert.equal(health.calls.find(call => call[0] === "grant")[1].scope, "health:record:write");
});

test("no consent is recorded for a decline, a bystander, a message send, an existing consent, or a step with no scope", async () => {
  const declined = harness({ task: ownerTask([step("telehealth.prepare")]) });
  await declined.spine.confirm({ input: { ...confirmInput, approved: false, text: "No" }, context: ctx() });
  assert.equal(declined.calls.some(call => call[0] === "grant"), false); assert.equal(declined.calls.some(call => call[0] === "execute"), false);

  const admin = harness({ task: ownerTask([step("telehealth.prepare")]) });
  await admin.spine.confirm({ input: confirmInput, context: ctx("admin-9", { hasRole: role => role === "admin" }) });
  assert.equal(admin.calls.some(call => call[0] === "grant"), false, "an administrator's yes is not the patient's consent");

  const message = harness({ task: ownerTask([step("communications.send", { message: "hi" })], { application: "communications" }) });
  await message.spine.confirm({ input: confirmInput, context: ctx() });
  assert.equal(message.calls.some(call => call[0] === "grant"), false, "sending a message stays out of scope");

  const already = harness({ task: ownerTask([step("telehealth.prepare")]), existingConsent: { consent_id: "cns_old" } });
  await already.spine.confirm({ input: confirmInput, context: ctx() });
  assert.equal(already.calls.some(call => call[0] === "grant"), false, "an existing consent for this task is reused");

  const noScope = harness({ task: ownerTask([step("reminders.cancel")], { application: "reminders" }) });
  await noScope.spine.confirm({ input: confirmInput, context: ctx() });
  assert.equal(noScope.calls.some(call => call[0] === "grant"), false);
});

test("a failed consent write stops the action, and a runtime without consents behaves exactly as before", async () => {
  const failing = harness({ task: ownerTask([step("telehealth.prepare")]), grantError: new Error("db down") });
  await assert.rejects(() => failing.spine.confirm({ input: confirmInput, context: ctx() }), /db down/);
  assert.equal(failing.calls.some(call => call[0] === "execute"), false, "nothing is written without a recorded consent");
  const bare = harness({ task: ownerTask([step("telehealth.prepare")]), withConsents: false });
  await bare.spine.confirm({ input: confirmInput, context: ctx() });
  assert.deepEqual(bare.calls.map(call => call[0]), ["approve", "execute"]);
});

test("the policy is a short allow-list: own-record health writes and one confirmed message", () => {
  assert.deepEqual(Object.keys(POLICIES).sort(), ["communications:send:write", "health:record:write", "health:telehealth-intake:write"]);
  for (const scope of ["communications:send:write", "acceptance:identity", "", undefined, "__proto__", "constructor"]) assert.equal(userConfirmableConsent(scope), null, String(scope));
  assert.equal(informedConfirmationPrompt({ scope: "communications:send:write", step: step("communications.send") }), null);
  assert.equal(describeReading({ glucose: 110 }), "blood glucose 110"); assert.equal(describeReading({ oxygenSaturation: 96 }), "oxygen saturation 96 percent");
  assert.equal(describeReading({ temperature: 99.1 }), "temperature 99.1"); assert.equal(describeReading({ pulse: 72 }), "pulse 72"); assert.equal(describeReading({ systolic: "x", diastolic: 80 }), "");
  assert.match(informedConfirmationPrompt({ scope: "health:record:write", step: { title: "Record chronic reading", input: {} } }), /save this to your own health records: record chronic reading\./);
  assert.match(informedConfirmationPrompt({ scope: "health:telehealth-intake:write", step: { input: {} } }), /save this telehealth intake to your own health records\. It is not shared/);
  assert.ok(informedConfirmationPrompt({ scope: "health:telehealth-intake:write", step: { input: { concern: "x".repeat(500) } } }).length < 400, "a long concern is clipped");
});
