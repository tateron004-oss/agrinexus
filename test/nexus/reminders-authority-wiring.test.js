"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { CapabilityAdapterRegistry } = require("../../nexus/tools/capability-adapter-registry.js");
const { OutcomeVerifierRegistry } = require("../../nexus/verification/verifier-registry.js");
const { CapabilityExecutionAuthority } = require("../../nexus/runtime/capability-execution-authority.js");
const { createReminderScheduleExecutor, verifyReminderScheduleOutcome } = require("../../nexus/reminders/executor.js");

// Proves the exact production wiring path in nexus/runtime/create-runtime.js:
// registering reminders.schedule's real executor + its own local verifier
// (instead of the shared provider-receipt verifier every other tool uses)
// works end to end through CapabilityExecutionAuthority.execute(), the same
// call AuthoritativeTaskEngine.execute() makes for a governed tool.
test("reminders.schedule's real executor and local verifier work through the full authority.execute() path", async () => {
  const enqueued = [];
  const notifications = { enqueue: async item => { const n = { notification_id: "ntf_1", ...item }; enqueued.push(n); return n; } };

  const adapters = new CapabilityAdapterRegistry();
  const verifiers = new OutcomeVerifierRegistry();
  adapters.register({ toolId: "reminders.schedule", implementation: "authoritative:reminders.schedule",
    execute: createReminderScheduleExecutor({ notifications }) });
  verifiers.register({ toolId: "reminders.schedule", method: "local_notification_enqueue", verify: verifyReminderScheduleOutcome });

  const authority = new CapabilityExecutionAuthority({ adapters, verifiers });
  const outcome = await authority.execute({
    tool: { tool_id: "reminders.schedule" },
    input: { when: "remind me in 2 hours to call the vet" },
    context: { tenantId: "tenant-1", userId: "user-1" },
    taskId: "tsk_1", stepId: "stp_1", idempotencyKey: "idem-1"
  });

  assert.equal(outcome.verification.verified, true);
  assert.equal(outcome.verification.verificationMethod, "local_notification_enqueue");
  assert.equal(outcome.result.persisted, true);
  assert.equal(enqueued.length, 1);
  assert.equal(enqueued[0].channel, "push");
});

test("authority.has('reminders.schedule') is true once both are registered, matching how AuthoritativeTaskEngine decides ownership", () => {
  const adapters = new CapabilityAdapterRegistry();
  const verifiers = new OutcomeVerifierRegistry();
  const authority = new CapabilityExecutionAuthority({ adapters, verifiers });
  assert.equal(authority.has("reminders.schedule"), false);
  adapters.register({ toolId: "reminders.schedule", execute: async () => ({}) });
  assert.equal(authority.has("reminders.schedule"), false, "adapter alone is not enough");
  verifiers.register({ toolId: "reminders.schedule", verify: async () => ({ verified: true }) });
  assert.equal(authority.has("reminders.schedule"), true);
});
