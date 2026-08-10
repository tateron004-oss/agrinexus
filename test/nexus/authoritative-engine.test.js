const assert = require("node:assert/strict");
const test = require("node:test");
const { createCommand } = require("../../nexus/contracts/command.js");
const { AuthoritativeTaskEngine, NexusRuntimeError } = require("../../nexus/runtime/authoritative-task-engine.js");

function fixture() {
  const store = { task: null, steps: [], execution: null, audits: [], calls: 0 };
  const tools = new Map([
    ["documents.save", { tool_id: "documents.save", availability: "available", required_permission: "tasks:execute",
      confirmation_required: true, consent_scope: null, timeout_ms: 1000, max_attempts: 3 }],
    ["provider.missing", { tool_id: "provider.missing", availability: "unavailable", required_permission: "tasks:execute",
      confirmation_required: false, consent_scope: null, timeout_ms: 1000 }]
  ]);
  const engine = new AuthoritativeTaskEngine({
    conversations: { ensure: async () => ({}) }, tools: { get: async id => tools.get(id) || null },
    tasks: {
      create: async (task, steps) => { store.task = task; store.steps = steps.map(step => ({ ...step, step_id: step.stepId,
        tool_id: step.toolId, confirmation_state: step.confirmationRequired ? "required" : "not_required",
        idempotency_key: step.idempotencyKey, fallback_tool_ids: step.fallbackToolIds, depends_on: step.dependsOn, state: "pending" })); return task; },
      save: async task => { store.task = task; return task; },
      get: async ({ tenantId, includeSteps }) => tenantId === store.task?.tenantId ? { ...store.task, ...(includeSteps ? { steps: store.steps } : {}) } : null,
      getStep: async ({ tenantId, stepId }) => tenantId === store.task?.tenantId ? store.steps.find(step => step.step_id === stepId) : null,
      approveStep: async ({ stepId, approved }) => { const step = store.steps.find(item => item.step_id === stepId); step.confirmation_state = approved ? "approved" : "rejected"; return step; }
    },
    executions: {
      get: async ({ idempotencyKey }) => store.execution?.idempotency_key === idempotencyKey ? store.execution : null,
      start: async input => { const step = store.steps.find(item => item.step_id === input.stepId); if (step) step.attempt_count = Number(step.attempt_count || 0) + 1;
        store.execution = { execution_id: `tlc_${step?.attempt_count || 1}`, idempotency_key: input.idempotencyKey, state: "running" }; return { execution: store.execution, duplicate: false }; },
      finish: async input => { Object.assign(store.execution, { state: input.successful ? "completed" : "failed", receipt: input.receipt });
        const step = store.steps.find(item => item.step_id === input.stepId); if (step) { step.state = input.successful ? "completed" : "failed"; step.output = input.response; }
        return store.execution; }
    },
    consents: { active: async () => ({ consent_id: "cns_1" }) },
    audit: { record: async event => { store.audits.push(event); return event; } },
    executors: { "documents.save": async () => { store.calls += 1; return { persisted: true, documentId: "doc_1" }; } },
    verifier: async ({ result }) => ({ verified: result.persisted === true, method: "persistence_ack" })
  });
  return { engine, store };
}

test("canonical engine self-corrects through an explicit governed fallback with separate receipts", async () => {
  const { engine, store } = fixture();
  engine.tools.get = async id => ({ tool_id: id, availability: "available", required_permission: "tasks:execute", confirmation_required: false, consent_scope: null, timeout_ms: 1000 });
  engine.executors["provider.primary"] = async () => { throw new Error("provider outage"); };
  engine.executors["provider.backup"] = async () => ({ persisted: true });
  store.steps = [{ step_id: "stp_1", tool_id: "provider.primary", fallback_tool_ids: ["provider.backup"], confirmation_state: "not_required", idempotency_key: "key", state: "pending", input: {} }];
  store.task = { tenantId: "tenant", correlationId: "trace" };
  engine.verifier = async ({ result }) => ({ verified: result.persisted === true, method: "provider_receipt" });
  const result = await engine.execute({ context: { tenantId: "tenant", userId: "user", can: () => true, hasRole: () => false }, taskId: "tsk", stepId: "stp_1" });
  assert.equal(result.receipt.verification.selectedTool, "provider.backup"); assert.equal(result.receipt.verification.fallbackAttempt, 1);
});

async function expectCode(work, code) {
  await assert.rejects(work, error => error instanceof NexusRuntimeError && error.code === code);
}

test("canonical engine gates confirmation, verifies outcomes, and suppresses duplicate execution", async () => {
  const { engine, store } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }] });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: permission => permission === "tasks:execute", hasRole: () => false };
  await expectCode(() => engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId }), "confirmation_required");
  await engine.approve({ tenantId: command.tenantId, taskId: task.taskId, stepId: task.steps[0].stepId, actorId: command.actorId, approved: true });
  const result = await engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId });
  assert.equal(result.receipt.verification.verified, true); assert.equal(store.calls, 1);
  const duplicate = await engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId });
  assert.equal(duplicate.duplicate, true); assert.equal(store.calls, 1);
});

test("canonical engine isolates tenants and never simulates disconnected tools", async () => {
  const { engine } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "api", text: "Call provider" });
  const task = await engine.create({ command, goal: "Try provider", steps: [{ title: "Call", toolId: "provider.missing" }] });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  await expectCode(() => engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId }), "tool_unavailable");
  await expectCode(() => engine.requiredStep({ tenantId: "00000000-0000-0000-0000-000000000099", taskId: task.taskId, stepId: task.steps[0].stepId }), "step_not_found");
});

test("canonical engine rejects cyclic plans and enforces durable dependency ordering", async () => {
  const { engine, store } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Prepare and save" });
  await expectCode(() => engine.create({ command, goal: "Cycle", steps: [
    { clientStepId: "a", title: "A", toolId: "documents.save", dependsOn: ["b"] },
    { clientStepId: "b", title: "B", toolId: "documents.save", dependsOn: ["a"] }
  ] }), "cyclic_dependencies");
  const task = await engine.create({ command, goal: "Ordered", steps: [
    { clientStepId: "prepare", title: "Prepare", toolId: "documents.save" },
    { clientStepId: "save", title: "Save", toolId: "documents.save", dependsOn: ["prepare"] }
  ] });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  const downstream = task.steps[1];
  await engine.approve({ tenantId: command.tenantId, taskId: task.taskId, stepId: downstream.stepId, actorId: command.actorId, approved: true });
  await expectCode(() => engine.execute({ context, taskId: task.taskId, stepId: downstream.stepId }), "dependencies_incomplete");
  store.steps[0].state = "completed";
  const result = await engine.execute({ context, taskId: task.taskId, stepId: downstream.stepId });
  assert.equal(result.receipt.verification.verified, true);
});

test("canonical engine completes a cross-application workflow with dependency outputs and visible proof", async () => {
  const { engine, store } = fixture(); const received = [];
  engine.tools.get = async id => ({ tool_id: id, availability: "available", required_permission: "tasks:execute",
    confirmation_required: false, consent_scope: null, timeout_ms: 1000 });
  engine.executors["jobs.search"] = async ({ input }) => { received.push(input); return { jobs: [{ id: "job_1", location: "Nakuru" }] }; };
  engine.executors["resume.create"] = async ({ input }) => { received.push(input); return { documentId: "doc_1" }; };
  engine.executors["maps.view"] = async ({ input }) => { received.push(input); return { workspaceId: "maps", rendered: true }; };
  engine.verifier = async ({ tool, result }) => ({ verified: true, method: "production_probe",
    visible: tool.tool_id === "maps.view" && result.rendered === true,
    evidence: tool.tool_id === "maps.view" ? [{ type: "workspace-render", source: "production-browser" }] : [] });
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "voice", text: "Find jobs, make my resume, and map them" });
  const task = await engine.create({ command, goal: command.text, application: "workforce", steps: [
    { clientStepId: "jobs", title: "Find jobs", toolId: "jobs.search" },
    { clientStepId: "resume", title: "Create resume", toolId: "resume.create", dependsOn: ["jobs"] },
    { clientStepId: "map", title: "Map jobs", toolId: "maps.view", dependsOn: ["jobs", "resume"] }
  ] });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  const result = await engine.executeTask({ context, taskId: task.taskId });
  assert.equal(result.completed, true); assert.equal(result.task.state, "completed"); assert.equal(result.receipts.length, 3);
  assert.deepEqual(received[1].dependencyOutputs[task.steps[0].stepId].jobs[0].location, "Nakuru");
  assert.equal(received[2].dependencyOutputs[task.steps[1].stepId].documentId, "doc_1");
  assert.equal(result.task.outcome.visibleOrAudible, true);
});

test("task workflow pauses for confirmation and cannot claim success without user-visible proof", async () => {
  const { engine, store } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "voice", text: "Save it" });
  const task = await engine.create({ command, goal: command.text, application: "documents", steps: [{ title: "Save", toolId: "documents.save" }] });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  const paused = await engine.executeTask({ context, taskId: task.taskId });
  assert.equal(paused.state, "awaiting_confirmation"); assert.equal(store.calls, 0);
  await engine.approve({ tenantId: command.tenantId, taskId: task.taskId, stepId: task.steps[0].stepId, actorId: command.actorId, approved: true });
  await expectCode(() => engine.executeTask({ context, taskId: task.taskId }), "user_outcome_unverified");
  assert.notEqual(store.task.state, "completed");
});

test("failed provider work resumes with a bounded new idempotency identity and no page refresh", async () => {
  const { engine, store } = fixture(); let calls = 0;
  engine.tools.get = async id => ({ tool_id: id, availability: "available", required_permission: "tasks:execute",
    confirmation_required: false, consent_scope: null, timeout_ms: 1000, max_attempts: 2 });
  engine.executors["knowledge.search"] = async () => { calls += 1; if (calls === 1) throw Object.assign(new Error("network lost"), { code: "network_failure" });
    return { rendered: true, results: [{ source: "KALRO" }] }; };
  engine.verifier = async ({ result }) => ({ verified: result.rendered === true, visible: result.rendered === true,
    method: "workspace_probe", evidence: [{ type: "workspace-render", source: "production-browser" }] });
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "voice", text: "Find current maize guidance" });
  const task = await engine.create({ command, goal: command.text, application: "live-knowledge",
    steps: [{ title: "Search and render", toolId: "knowledge.search" }] });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  await assert.rejects(() => engine.executeTask({ context, taskId: task.taskId }), error => error.code === "network_failure");
  assert.equal(store.task.state, "running"); assert.equal(store.steps[0].state, "failed");
  const resumed = await engine.executeTask({ context, taskId: task.taskId });
  assert.equal(resumed.completed, true); assert.equal(calls, 2);
  assert.match(resumed.receipts[0].idempotencyKey, /:retry:2$/);
  const duplicate = await engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId });
  assert.equal(duplicate.duplicate, true); assert.equal(calls, 2);
});
