"use strict";
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const test = require("node:test");
const { ordinaryConversationPlan, agricultureAdvicePlan, OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { AgentService } = require("../../nexus/runtime/agent-service.js");
const { sanitizeProviderFailure } = require("../../nexus/runtime/authoritative-task-engine.js");
const { canonicalReceipt } = require("../../nexus/tools/provider-catalog.js");
const { runGate } = require("../../scripts/nexus-agriculture-provider-compatibility-gate.js");

const catalog = { applications: [{ applicationId: "agriculture" }], tools: [{ toolId: "knowledge.search" }] };

test("exact Ron greeting bypasses memory, catalog, planning model, and provider retrieval", async () => {
  let modelCalls = 0; let memoryCalls = 0; let catalogCalls = 0;
  const planner = new OpenEndedPlanner({ model: { plan: async () => { modelCalls += 1; } },
    memory: { search: async () => { memoryCalls += 1; return []; } },
    tools: { list: async () => { catalogCalls += 1; return []; } }, applications: { list: () => [] } });
  const plan = await planner.plan({ command: { text: "Hello Nexus, this is Ron" }, context: {} });
  assert.equal(plan.response, "Hello Ron, how can I help?"); assert.equal(plan.sourceRequired, false);
  assert.deepEqual({ modelCalls, memoryCalls, catalogCalls }, { modelCalls: 0, memoryCalls: 0, catalogCalls: 0 });
});

test("ordinary conversation returns a direct response without creating a task", async () => {
  let created = 0; const appended = []; const audits = [];
  const service = new AgentService({ planner: { plan: async () => ordinaryConversationPlan("Hello Nexus, this is Ron") },
    tasks: { get: async () => null }, conversations: { ensure: async () => {}, recent: async () => [], append: async row => appended.push(row) },
    engine: { create: async () => { created += 1; } }, audit: { record: async row => audits.push(row) } });
  const result = await service.command({ input: { text: "Hello Nexus, this is Ron", channel: "voice",
    correlationId: "correlation-1", conversationId: "cnv_01H00000000000000000000000" },
    context: { tenantId: "tenant", userId: "ron" } });
  assert.equal(result.action, "respond"); assert.equal(result.application, "conversation"); assert.equal(created, 0);
  assert.equal(appended.at(-1).provenance.providerInvoked, false); assert.equal(audits.at(-1).metadata.sourceRequired, false);
});

test("first maize advice question requires filtered authoritative retrieval", () => {
  const plan = agricultureAdvicePlan("Why do maize leaves turn yellow?", catalog);
  assert.equal(plan.application, "agriculture"); assert.equal(plan.steps[0].toolId, "knowledge.search");
  assert.equal(plan.steps[0].input.domainFilterRequired, true);
  assert.deepEqual(plan.steps[0].input.includeDomains, ["fao.org", "cgiar.org", "cimmyt.org", "extension.org", "edu"]);
});

test("provider failure record is sanitized and retains status, code, stage, and request ID", () => {
  const failure = sanitizeProviderFailure({ status: 502, code: "upstream_timeout", stage: "provider-execution-knowledge-search",
    message: "secret internal endpoint and credential" }, { requestId: "request-123" });
  assert.deepEqual(failure, { status: 502, code: "upstream_timeout", message: "The authoritative source provider could not complete this request.",
    stage: "provider-execution-knowledge-search", requestId: "request-123" });
  assert.doesNotMatch(failure.message, /secret|credential|endpoint/i);
});

test("real provider gate proves a signed receipt and filtered agriculture sources", async () => {
  const secret = "gate-secret"; let received;
  const env = { NEXUS_TOOL_PROVIDERS_JSON: JSON.stringify([{ toolId: "knowledge.search", description: "Search",
    domain: "knowledge", endpoint: "https://provider.example/search", receiptSecret: secret, maxAttempts: 1 }]) };
  const result = await runGate({ env, fetchFn: async (_url, options) => {
    received = JSON.parse(options.body); const receipt = { schema: "nexus.provider-receipt.v1", receiptId: "receipt-1",
      toolId: "knowledge.search", tenantId: received.tenantId, taskId: received.taskId, stepId: received.stepId,
      outcome: "completed", occurredAt: "2026-08-31T00:00:00.000Z",
      evidence: [{ type: "render-target", source: "agrinexus-provider-engines" },
        { type: "authoritative-source", source: "https://www.fao.org/maize" }] };
    receipt.signature = crypto.createHmac("sha256", secret).update(canonicalReceipt(receipt)).digest("hex");
    return { ok: true, status: 200, json: async () => ({ receipt }) };
  } });
  assert.equal(result.ok, true); assert.equal(result.domainFilterVerified, true);
  assert.equal(received.input.domainFilterRequired, true); assert.equal(received.requestId.startsWith("agriculture-provider-gate-"), true);
});
