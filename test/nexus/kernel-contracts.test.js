const assert = require("node:assert/strict");
const test = require("node:test");
const { createCommand } = require("../../nexus/contracts/command.js");
const { createTask, transitionTask, isTerminal } = require("../../nexus/tasks/state-machine.js");

const fixedNow = () => new Date("2026-08-07T20:00:00.000Z");

test("normalizes every channel into one immutable command envelope", () => {
  const command = createCommand({
    correlationId: "trace-release-75051380",
    tenantId: "tenant-1",
    actorId: "user-1",
    channel: "voice",
    locale: "sw",
    text: "  Find maize disease guidance  "
  }, fixedNow);

  assert.equal(command.schema, "nexus.command.v1");
  assert.equal(command.text, "Find maize disease guidance");
  assert.equal(command.occurredAt, "2026-08-07T20:00:00.000Z");
  assert.match(command.commandId, /^cmd_/);
  assert.match(command.conversationId, /^cnv_/);
  command.text = "changed";
  assert.equal(command.text, "Find maize disease guidance");
});

test("task lifecycle requires legal, attributed, reasoned transitions", () => {
  let task = createTask({
    tenantId: "tenant-1",
    ownerId: "user-1",
    conversationId: "cnv_123",
    correlationId: "trace-1",
    goal: "Prepare and verify a field visit route",
    application: "maps"
  }, fixedNow);

  task = transitionTask(task, "planned", { actorId: "brain", reason: "Plan accepted" }, fixedNow);
  task = transitionTask(task, "queued", { actorId: "user-1", reason: "Low-risk execution approved" }, fixedNow);
  task = transitionTask(task, "running", { actorId: "worker-1", reason: "Worker lease acquired" }, fixedNow);
  task = transitionTask(task, "verifying", { actorId: "worker-1", reason: "Provider returned a route" }, fixedNow);
  task = transitionTask(task, "completed", { actorId: "verifier", reason: "Map viewport and coordinates verified" }, fixedNow);

  assert.equal(task.state, "completed");
  assert.equal(task.version, 6);
  assert.equal(task.history.length, 5);
  assert.equal(isTerminal(task), true);
  assert.throws(() => transitionTask(task, "running", { actorId: "worker-1", reason: "retry" }), /Illegal/);
});

test("high-impact tasks can be forced through consent and confirmation", () => {
  let task = createTask({
    tenantId: "tenant-1",
    ownerId: "user-1",
    conversationId: "cnv_456",
    correlationId: "trace-2",
    goal: "Share a care summary with a physician",
    application: "health",
    riskTier: "high"
  }, fixedNow);

  task = transitionTask(task, "planned", { actorId: "brain", reason: "Sensitive sharing plan prepared" }, fixedNow);
  task = transitionTask(task, "awaiting_consent", { actorId: "policy", reason: "Health-data sharing consent required" }, fixedNow);
  task = transitionTask(task, "awaiting_confirmation", { actorId: "user-1", reason: "Scoped consent recorded" }, fixedNow);
  task = transitionTask(task, "queued", { actorId: "user-1", reason: "Final recipient confirmation recorded" }, fixedNow);

  assert.deepEqual(task.history.map((entry) => entry.to), [
    "planned",
    "awaiting_consent",
    "awaiting_confirmation",
    "queued"
  ]);
});
