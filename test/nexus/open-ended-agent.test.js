"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { ApplicationRegistry } = require("../../nexus/apps/registry.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { AgentService } = require("../../nexus/runtime/agent-service.js");
const { OpenAiPlanningModel, PLAN_SCHEMA, normalizePlan } = require("../../nexus/brain/openai-planning-model.js");

const context = { tenantId: "tenant", userId: "user", can: permission => permission !== "admin:write" };
const command = { correlationId: "trace", tenantId: "tenant", actorId: "user", channel: "voice", locale: "en", text: "Find farm jobs near Nakuru and make a resume" };

test("application registry covers every production workspace without a second router", () => {
  const registry = new ApplicationRegistry(defaultApplicationManifests());
  assert.equal(registry.list().length, 16);
  assert.ok(registry.candidates({ capabilities: ["jobs.search"] }).some(item => item.applicationId === "workforce"));
  assert.throws(() => registry.register(defaultApplicationManifests()[0]), /already registered/);
});

test("open-ended planner repairs invalid model output against the live tool catalog", async () => {
  const attempts = [];
  const model = { plan: async request => { attempts.push(request); return request.attempt === 0 ?
    { goal: command.text, application: "workforce", steps: [{ id: "find", title: "Find jobs", toolId: "invented.tool" }] } :
    { goal: command.text, application: "workforce", steps: [{ id: "find", title: "Find current jobs", toolId: "jobs.search" },
      { id: "resume", title: "Create tailored resume", toolId: "resume.create", dependsOn: ["find"] }] }; } };
  const planner = new OpenEndedPlanner({ model, tools: { list: async () => [
    { tool_id: "jobs.search", domain: "workforce", description: "Search jobs", risk_tier: "low", availability: "available" },
    { tool_id: "resume.create", domain: "documents", description: "Create resume", risk_tier: "low", availability: "available" }] },
    applications: new ApplicationRegistry(defaultApplicationManifests()), memory: { search: async () => [{ kind: "profile", content: "Agronomy experience", confidence: .9, provenance: { source: "user" } }] } });
  const plan = await planner.plan({ command, context });
  assert.equal(plan.planningAttempts, 2); assert.deepEqual(plan.steps[1].dependsOn, ["find"]);
  assert.match(attempts[1].feedback[0], /unavailable tool/); assert.equal(attempts[0].memories[0].content, "Agronomy experience");
});

test("agent service continues cross-application context through one durable task engine", async () => {
  const priorTask = { taskId: "tsk_prior", goal: "Find jobs", application: "workforce", state: "completed" };
  const calls = []; const service = new AgentService({
    planner: { plan: async ({ priorTask: prior }) => { assert.equal(prior, priorTask); return { goal: "Map interviews", application: "maps", riskTier: "low", planningAttempts: 1, steps: [{ title: "Map", toolId: "maps.view" }] }; } },
    tasks: { get: async () => priorTask }, conversations: { ensure: async () => {}, recent: async () => [{ role: "user", content: "Find jobs" }], append: async entry => calls.push(entry) },
    engine: { create: async input => { calls.push(input); return { taskId: "tsk_next", ...input }; }, conversations: {} },
    audit: { record: async event => calls.push(event) }
  });
  const result = await service.command({ input: { correlationId: "trace", conversationId: "cnv_01H00000000000000000000000", taskId: "tsk_prior", channel: "typed", text: "Put those interviews on a map" }, context });
  const committed = calls.find(item => item.eventType === "brain.plan_committed");
  assert.equal(result.action, "continue"); assert.equal(result.task.application, "maps"); assert.equal(committed.metadata.continuedFrom, "tsk_prior");
  assert.equal(calls[0].role, "user"); assert.equal(calls[2].role, "assistant");
  assert.equal(calls[2].actorId, null); assert.equal(calls[2].provenance.systemActor, "nexus-brain");
});

test("clarification plans are valid without fake execution steps", () => {
  const catalog = { tools: [], applications: [{ applicationId: "general", capabilities: [], riskTiers: ["low"] }] };
  const result = require("../../nexus/brain/planner.js").validatePlan({ goal: "Help me apply", application: "general",
    riskTier: "low", clarification: "Which role do you want to apply for?", steps: [] }, catalog, context);
  assert.equal(result.valid, true); assert.equal(result.plan.steps.length, 0);
});

test("executable plans reject tool-free steps before task creation", () => {
  const catalog = { tools: [{ toolId: "health.record" }], applications: [{ applicationId: "health" }] };
  const result = require("../../nexus/brain/planner.js").validatePlan({ goal: "Record blood pressure", application: "health",
    riskTier: "regulated", clarification: null, steps: [{ id: "record", title: "Record reading", toolId: null }] }, catalog, context);
  assert.equal(result.valid, false); assert.match(result.errors[0], /executable tool/);
});

test("production planning model requests strict structured output and returns no simulated fallback", async () => {
  let request; const model = new OpenAiPlanningModel({ apiKey: "test-key", fetchFn: async (_url, options) => { request = JSON.parse(options.body); return { ok: true, json: async () => ({ output_text: JSON.stringify({ goal: "Help", application: "live-knowledge", riskTier: "low", clarification: null, steps: [] }) }) }; } });
  const result = await model.plan({ goal: "Help", catalog: {} });
  assert.equal(request.text.format.type, "json_schema"); assert.equal(request.text.format.strict, true); assert.equal(result.application, "live-knowledge");
  await assert.rejects(() => new OpenAiPlanningModel({ apiKey: "bad", fetchFn: async () => ({ ok: false, json: async () => ({ error: { code: "quota", message: "Unavailable" } }) }) }).plan({}), error => error.code === "quota");
});

test("planning catalog separates execution permission from regulated consent", async () => {
  let observed;
  const planner = new OpenEndedPlanner({ model: { plan: async request => { observed = request; return {
    goal: "Record blood pressure", application: "health", riskTier: "regulated", clarification: null,
    steps: [{ id: "record", title: "Record reading", toolId: "health.record", input: {}, dependsOn: [],
      fallbackToolIds: [], requiredPermission: "tasks:execute" }] }; } }, tools: { list: async () => [{
    tool_id: "health.record", domain: "health", description: "Record health observation", risk_tier: "regulated",
    availability: "available", required_permission: "tasks:execute", confirmation_required: true,
    consent_scope: "health:record:write" }] }, applications: new ApplicationRegistry(defaultApplicationManifests()) });
  await planner.plan({ command: { ...command, text: "Record blood pressure" }, context });
  assert.equal(observed.catalog.tools[0].requiredPermission, "tasks:execute");
  assert.equal(observed.catalog.tools[0].consentScope, "health:record:write");
  assert.notEqual(observed.catalog.tools[0].requiredPermission, observed.catalog.tools[0].consentScope);
});

test("strict planning schema encodes free-form tool input as JSON text and normalizes it", () => {
  assert.equal(PLAN_SCHEMA.properties.steps.items.properties.input.type, "string");
  assert.deepEqual(normalizePlan({ steps: [{ input: '{"location":"Kisumu"}' }] }).steps[0].input, { location: "Kisumu" });
  assert.throws(() => normalizePlan({ steps: [{ input: "not-json" }] }));
});
