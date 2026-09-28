const assert = require("node:assert/strict");
const test = require("node:test");
const { createCommand } = require("../../nexus/contracts/command.js");
const { createTask, transitionTask, isTerminal } = require("../../nexus/tasks/state-machine.js");

const fixedNow = () => new Date("2026-08-07T20:00:00.000Z");

test("all channels normalize into one immutable command envelope", () => {
  const command = createCommand({ correlationId: "trace-1", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "voice", locale: "sw",
    text: "  Find maize disease guidance  " }, fixedNow);
  assert.equal(command.schema, "nexus.command.v1"); assert.equal(command.text, "Find maize disease guidance");
  assert.match(command.commandId, /^cmd_/); assert.match(command.conversationId, /^cnv_/);
  command.text = "changed";
  assert.equal(command.text, "Find maize disease guidance");
});

test("one task lifecycle enforces attributed transitions, pause/resume, retry, and terminal states", () => {
  let task = createTask({ tenantId: "00000000-0000-0000-0000-000000000001",
    ownerId: "00000000-0000-0000-0000-000000000002", conversationId: "cnv_123",
    commandId: "cmd_123", correlationId: "trace-1", goal: "Prepare and verify a field visit" }, fixedNow);
  task = transitionTask(task, "planned", { actorId: "brain", reason: "plan ready" }, fixedNow);
  task = transitionTask(task, "paused", { actorId: "user", reason: "pause" }, fixedNow);
  task = transitionTask(task, "queued", { actorId: "user", reason: "resume" }, fixedNow);
  task = transitionTask(task, "running", { actorId: "worker", reason: "claimed" }, fixedNow);
  task = transitionTask(task, "failed", { actorId: "worker", reason: "provider timeout" }, fixedNow);
  task = transitionTask(task, "queued", { actorId: "user", reason: "retry" }, fixedNow);
  task = transitionTask(task, "running", { actorId: "worker", reason: "claimed" }, fixedNow);
  task = transitionTask(task, "verifying", { actorId: "worker", reason: "result returned" }, fixedNow);
  task = transitionTask(task, "completed", { actorId: "verifier", reason: "outcome visible" }, fixedNow);
  assert.equal(isTerminal(task), true); assert.throws(() => transitionTask(task, "running", { actorId: "x", reason: "retry" }), /Illegal/);
});

// Found live: priority: Math.min(Math.max(Number(input.priority || 3), 1), 5) treated an explicit priority: 0
// (the highest priority, per this same clamp -- 0 floors up to 1) as "not provided" and silently substituted the
// default 3 instead, the same falsy-zero-default bug already found and fixed in job-repository.js's enqueue().
test("createTask honors an explicit priority of 0 instead of silently defaulting to 3", () => {
  const base = { tenantId: "00000000-0000-0000-0000-000000000001", ownerId: "00000000-0000-0000-0000-000000000002",
    conversationId: "cnv_123", commandId: "cmd_123", correlationId: "trace-1", goal: "Prepare a field visit" };
  assert.equal(createTask({ ...base, priority: 0 }, fixedNow).priority, 1, "priority 0 must clamp to the floor of 1, not silently become the default 3");
  assert.equal(createTask({ ...base }, fixedNow).priority, 3, "an actually-omitted priority still defaults to 3");
});
