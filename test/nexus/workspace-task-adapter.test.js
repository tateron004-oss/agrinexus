const assert = require("node:assert/strict");
const test = require("node:test");
const { createWorkspaceTaskAdapter, WORKSPACES } = require("../../nexus/compat/workspace-task-adapter.js");

function context() {
  return { requestId: "request_1", tenantId: "00000000-0000-0000-0000-000000000001",
    userId: "20000000-0000-0000-0000-000000000001" };
}

test("all sixteen workspaces normalize into the one authoritative task lifecycle", async () => {
  const calls = [];
  const adapter = createWorkspaceTaskAdapter({ engine: { create: async input => {
    calls.push(input); return { taskId: `task_${calls.length}`, state: "planned", steps: input.steps };
  } } });
  for (const workspaceId of WORKSPACES) {
    const result = await adapter.create({ context: context(), workspaceId, channel: "voice",
      body: { goal: `Continue ${workspaceId}`, payload: { source: "workspace" } } });
    assert.equal(result.status, 201);
    assert.equal(result.body.workspace, workspaceId);
    assert.equal(result.body.authoritative, true);
    assert.equal(result.body.executionClaimed, false);
  }
  assert.equal(calls.length, 16);
  assert.equal(calls.every(call => call.command.schema === "nexus.command.v1"), true);
  assert.equal(calls.every(call => call.steps[0].toolId === null), true);
});

test("workspace task capture rejects unknown lanes and empty goals", async () => {
  const adapter = createWorkspaceTaskAdapter({ engine: { create: async () => assert.fail("must not create") } });
  assert.equal((await adapter.create({ context: context(), workspaceId: "simulation", body: { goal: "run" } })).status, 404);
  assert.equal((await adapter.create({ context: context(), workspaceId: "maps", body: {} })).status, 400);
});

test("explicit tool steps remain governed by the authoritative registry and engine", async () => {
  let captured;
  const adapter = createWorkspaceTaskAdapter({ engine: { create: async input => { captured = input; return { taskId: "task_1", steps: input.steps }; } } });
  await adapter.create({ context: context(), workspaceId: "documents", body: { goal: "Analyze report",
    riskTier: "medium", steps: [{ title: "Analyze", toolId: "legacy.documents.analyze", input: { text: "report" } }] } });
  assert.equal(captured.application, "documents");
  assert.equal(captured.riskTier, "medium");
  assert.equal(captured.steps[0].toolId, "legacy.documents.analyze");
});
