"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { AgentService } = require("../../nexus/runtime/agent-service.js");

const context = { tenantId: "tenant", userId: "user", acceptancePreCutover: false, permissions: [] };

function build(overrides = {}) {
  const appended = [];
  const audited = [];
  const created = [];
  const service = new AgentService({
    planner: { plan: async () => assert.fail("intake() must never call the AI planner") },
    engine: { create: async input => { created.push(input); return { taskId: "tsk_intake_1" }; } },
    tasks: { get: async () => null },
    conversations: {
      ensure: async () => {},
      append: async value => appended.push(value),
      owner: async () => null
    },
    audit: { record: async value => audited.push(value) },
    cutover: { requireAuthoritative: async () => {} },
    ...overrides
  });
  return { service, appended, audited, created };
}

test("intake() turns a completed resume intake's answers into a committed plan/task, bypassing the planner entirely", async () => {
  const { service, appended, audited, created } = build();
  const result = await service.intake({
    input: { intakeId: "resume", correlationId: "trace-1", channel: "voice", locale: "en",
      values: { name: "Amina Wanjiru", skills: "farming, carpentry" } },
    context
  });
  assert.equal(result.action, "create");
  assert.equal(result.task.taskId, "tsk_intake_1");
  assert.equal(result.plan.application, "workforce");
  assert.equal(result.plan.steps[0].toolId, "resume.create");
  assert.equal(created[0].goal, "Create a resume for Amina Wanjiru");
  assert.equal(appended.some(turn => turn.role === "user" && /resume questions by voice/.test(turn.content)), true);
  assert.equal(audited[0].eventType, "brain.plan_committed");
  assert.equal(audited[0].metadata.structuredIntake, "resume");
});

test("intake() rejects an unknown intake id before ever touching conversations or the task engine", async () => {
  const { service, appended, created } = build();
  await assert.rejects(
    () => service.intake({ input: { intakeId: "not-a-real-form", values: { name: "Amina" } }, context }),
    error => error.code === "intake_unknown"
  );
  assert.equal(appended.length, 0);
  assert.equal(created.length, 0);
});

test("intake() discards a caller-supplied conversationId that belongs to a different user, same as command()", async () => {
  const { service } = build({ conversations: {
    ensure: async () => {}, append: async () => {},
    owner: async () => "a-different-user"
  } });
  const result = await service.intake({
    input: { intakeId: "resume", correlationId: "trace-2", values: { name: "Amina" }, conversationId: "cnv_someone_elses" },
    context
  });
  assert.notEqual(result.command.conversationId, "cnv_someone_elses");
});

test("intake() still reuses a caller-supplied conversationId the caller genuinely owns", async () => {
  const { service } = build({ conversations: {
    ensure: async () => {}, append: async () => {},
    owner: async () => context.userId
  } });
  const result = await service.intake({
    input: { intakeId: "resume", correlationId: "trace-3", values: { name: "Amina" }, conversationId: "cnv_mine" },
    context
  });
  assert.equal(result.command.conversationId, "cnv_mine");
});
