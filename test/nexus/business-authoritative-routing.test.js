"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const { createBusinessExecutor, verifyBusinessOutcome } = require("../../nexus/business/authoritative-executor.js");
const { OpenEndedPlanner, completeBusinessPlan } = require("../../nexus/brain/planner.js");

// Confirmed live (2026-09-18): a real user's TYPED command for any of the 10
// business/nonprofit tools never reached nexus/business/* at all -- the
// authoritative runtime (what a typed command actually goes through, per
// handleNexusUnifiedBrainRuntimeCommand) had no business tool in its
// canonical catalog, so its AI planning model guessed the nearest unrelated
// tool (documents.create) and silently created a fabricated document
// instead of the real action. These tests cover the fix's two new pieces:
// the deterministic planner fast path (completeBusinessPlan) and the real
// executor (createBusinessExecutor) that reuses nexus/business/voice-
// dispatch.js -- the SAME logic server.js's nexus_business_assistant tool
// already uses for real spoken voice, now reachable from typed chat too.

test("classify() recognizes every business sub-intent and returns null for unrelated text", () => {
  assert.equal(voiceDispatch.classify("Add a donor named Maria Chen"), "addLead");
  assert.equal(voiceDispatch.classify("Log a $75 expense for supplies"), "logTransaction");
  assert.equal(voiceDispatch.classify("How's my business doing"), "dashboard");
  assert.equal(voiceDispatch.classify("Generate the business plan PDF"), "generateBusinessPlanPdf");
  assert.equal(voiceDispatch.classify("Start a nonprofit called Test Farms"), "createWorkspace");
  assert.equal(voiceDispatch.classify("What is the weather in Lagos"), null);
  assert.equal(voiceDispatch.classify("Play some music"), null);
});

// Confirmed live: a typed/spoken "help me draft an investor pitch strategy"
// never reached strategy.js's real agent-profile templates at all -- the
// "strategy" operation was only ever posted from the dashboard's own
// "Generate" button, bypassing this classifier entirely.
test("classify() recognizes a strategy-document request, distinct from the other generate-* intents", () => {
  assert.equal(voiceDispatch.classify("Draft an investor pitch strategy"), "generateStrategy");
  assert.equal(voiceDispatch.classify("Help me with a grant strategy"), "generateStrategy");
  // These must still resolve to their own, older intents, not be swallowed by the new one.
  assert.equal(voiceDispatch.classify("Create an intake form"), "generateDocuments");
  assert.equal(voiceDispatch.classify("Generate the business plan PDF"), "generateBusinessPlanPdf");
  assert.equal(voiceDispatch.classify("Create a marketing flyer"), "generateMarketing");
});

test("inferStrategyProfile maps request language onto strategy.js's real agent profiles", () => {
  assert.equal(voiceDispatch.inferStrategyProfile("Draft an investor pitch"), "investor");
  assert.equal(voiceDispatch.inferStrategyProfile("Help with a grant strategy"), "grants");
  assert.equal(voiceDispatch.inferStrategyProfile("Write a donor stewardship plan"), "donors");
  assert.equal(voiceDispatch.inferStrategyProfile("Give me a general business strategy"), "strategy");
  assert.equal(voiceDispatch.inferStrategyProfile("Help me think this through"), "coach");
});

// A church or congregation should be able to use this same workspace with
// its own words ("church", "congregation", "member") instead of being forced
// to say "business" or "nonprofit" -- confirmed previously MISSING entirely.
test("classify() recognizes church/congregation workspace language, using the same real backend as any other business", () => {
  assert.equal(voiceDispatch.classify("Start a church called Grace Chapel"), "createWorkspace");
  assert.equal(voiceDispatch.classify("How is my congregation doing"), "dashboard");
  assert.equal(voiceDispatch.classify("Add a member named John Otieno"), "addLead");
  const lead = voiceDispatch.extractLeadArgs("Add a member named John Otieno", {});
  assert.equal(lead.name, "John Otieno");
  assert.equal(lead.type, "member");
});

// A real, conversational intake -- distinct from generating the blank,
// unfilled "Client_Intake_Form.md" template.
test("classify() and extractIntakeArgs perform a real conversational intake, distinct from generating the blank template", () => {
  assert.equal(voiceDispatch.classify("Create an intake form"), "generateDocuments");
  assert.equal(voiceDispatch.classify("Take an intake for Grace Otieno"), "performIntake");
  const intake = voiceDispatch.extractIntakeArgs("Take an intake for Grace Otieno, who needs help with a small loan", {});
  assert.equal(intake.name, "Grace Otieno");
  assert.match(intake.need, /loan/);
});

test("precheck() asks for a name before a performIntake action proceeds", () => {
  const result = voiceDispatch.precheck("Take an intake", {});
  assert.equal(result.intent, "performIntake");
  assert.equal(result.toolId, "business.manage");
  assert.match(result.clarification, /name of the person/i);
});

test("precheck() surfaces the same missing-field clarification run() would ask for, without touching a database", () => {
  const withMissingName = voiceDispatch.precheck("Add a new donor", {});
  assert.equal(withMissingName.intent, "addLead");
  assert.equal(withMissingName.toolId, "business.manage");
  assert.match(withMissingName.clarification, /name of the donor/i);

  const withMissingAmount = voiceDispatch.precheck("Record an expense", {});
  assert.match(withMissingAmount.clarification, /amount .* currency/i);

  const dashboardCheck = voiceDispatch.precheck("How's my business doing", {});
  assert.equal(dashboardCheck.toolId, "business.query");
  assert.equal(dashboardCheck.clarification, null);

  const unrelated = voiceDispatch.precheck("What is the weather in Lagos", {});
  assert.deepEqual(unrelated, { intent: null, toolId: null, clarification: null });
});

function fakeCatalog() {
  return {
    tools: [
      { toolId: "business.manage", domain: "business", riskTier: "low", confirmationRequired: true },
      { toolId: "business.query", domain: "business", riskTier: "low", confirmationRequired: false }
    ],
    applications: [{ applicationId: "business", capabilities: ["business.manage", "business.query"], riskTiers: ["low"] }]
  };
}

test("completeBusinessPlan produces a business.manage step for a complete write command", () => {
  const plan = completeBusinessPlan("Add a donor named Maria Chen", fakeCatalog());
  assert.equal(plan.application, "business");
  assert.equal(plan.clarification, null);
  assert.equal(plan.steps.length, 1);
  assert.equal(plan.steps[0].toolId, "business.manage");
  assert.equal(plan.steps[0].input.command, "Add a donor named Maria Chen");
});

test("completeBusinessPlan produces a business.query step for a read-only command", () => {
  const plan = completeBusinessPlan("How's my business doing", fakeCatalog());
  assert.equal(plan.steps[0].toolId, "business.query");
});

test("the production browser-capability probe's business scenario text resolves to a confirmation-free, idempotent read", () => {
  // scripts/nexus-run-browser-capability-probes.js runs its SCENARIOS text
  // for `business` TWICE, unattended, with no confirmation-continuation
  // handling for this application (unlike health/offline-queue) -- so it
  // must resolve to business.query (confirmationRequired: false), and
  // running it with zero existing business records must still complete
  // rather than error, or the real per-deploy activation attempt would fail
  // every single time.
  const { SCENARIOS } = require("../../scripts/nexus-run-browser-capability-probes.js");
  const text = SCENARIOS.business;
  assert.equal(typeof text, "string");
  assert.ok(text.length > 0);
  const precheck = voiceDispatch.precheck(text, {});
  assert.equal(precheck.toolId, "business.query");
  assert.equal(precheck.clarification, null);
  assert.equal(voiceDispatch.isReadIntent(voiceDispatch.classify(text)), true);
});

test("completeBusinessPlan asks a clarification instead of proceeding when a required field is missing", () => {
  const plan = completeBusinessPlan("Add a new donor", fakeCatalog());
  assert.equal(plan.steps.length, 0);
  assert.match(plan.clarification, /name of the donor/i);
});

test("completeBusinessPlan returns null for unrelated text and when the catalog lacks the business tools", () => {
  assert.equal(completeBusinessPlan("What is the weather in Lagos", fakeCatalog()), null);
  assert.equal(completeBusinessPlan("Add a donor named Maria Chen", { tools: [], applications: [] }), null);
});

test("the full OpenEndedPlanner resolves a business command deterministically, not through the AI model", async () => {
  let modelCalled = false;
  const model = { plan: async () => { modelCalled = true; return { goal: "x", application: "documents", steps: [] }; } };
  const tools = { list: async () => fakeCatalog().tools.map(tool => ({ tool_id: tool.toolId, domain: tool.domain, risk_tier: tool.riskTier, confirmation_required: tool.confirmationRequired })) };
  const applications = { list: () => fakeCatalog().applications };
  const planner = new OpenEndedPlanner({ model, tools, applications });
  const plan = await planner.plan({ command: { text: "Log a $50 expense for fuel", tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: {} });
  assert.equal(modelCalled, false, "the deterministic fast path must resolve this without ever calling the AI planning model");
  assert.equal(plan.application, "business");
  assert.equal(plan.steps[0].toolId, "business.manage");
});

function fixture() {
  const rows = new Map();
  const context = { tenantId: "tenant-a", userId: "owner-a", requestId: "test-request" };
  const repository = {
    async create(item) { const row = { record_id: "rec_business", tenant_id: item.tenantId, owner_id: item.ownerId, subject_id: item.subjectId, version: 1, data: structuredClone(item.data) }; rows.set(row.record_id, row); return structuredClone(row); },
    async getOwned(item) { const row = rows.get(item.recordId); if (!row || row.tenant_id !== item.tenantId || row.owner_id !== item.ownerId) throw Object.assign(new Error("Not found"), { status: 404, code: "business_record_not_found" }); return structuredClone(row); },
    async list(item) { return [...rows.values()].filter(row => row.tenant_id === item.tenantId && row.owner_id === item.ownerId); },
    async update(item) { const row = rows.get(item.recordId); if (row.version !== item.expectedVersion) throw Object.assign(new Error("Version conflict"), { status: 409, code: "business_version_conflict" }); row.data = structuredClone(item.data); row.version++; return structuredClone(row); }
  };
  const consents = { async active() { return { granted: true }; }, async grant(item) { return { ...item, consent_id: "c1" }; } };
  const access = { async authorize() {} };
  return { rows, context, repository, access, consents };
}

test("createBusinessExecutor performs a real workspace creation through the injected repository, not a mock", async () => {
  const f = fixture();
  const execute = createBusinessExecutor({ repository: f.repository, access: f.access, consents: f.consents, env: {} });
  const result = await execute({ input: { command: "Start a nonprofit called Real Farms Cooperative" }, context: f.context });
  assert.equal(result.verified, true);
  assert.match(result.response, /Real Farms Cooperative/);
  assert.equal(f.rows.size, 1, "a real row was written through the repository, not simulated");
  assert.equal(verifyBusinessOutcome({ result }).verified, true);
});

test("createBusinessExecutor adds a real donor to an existing workspace and the dashboard reflects it", async () => {
  const f = fixture();
  const execute = createBusinessExecutor({ repository: f.repository, access: f.access, consents: f.consents, env: {} });
  await execute({ input: { command: "Start a nonprofit called Real Farms Cooperative" }, context: f.context });
  const added = await execute({ input: { command: "Add a donor named Grace Otieno" }, context: f.context });
  assert.match(added.response, /Grace Otieno/);
  const row = [...f.rows.values()][0];
  assert.equal(row.data.editable.leads.length, 1);
  assert.equal(row.data.editable.leads[0].name, "Grace Otieno");
  const dashboard = await execute({ input: { command: "How's my business doing" }, context: f.context });
  assert.equal(dashboard.businessDashboard.donors, 1);
});

test("createBusinessExecutor throws a real, honest error instead of a false success when the workspace doesn't exist yet", async () => {
  const f = fixture();
  const execute = createBusinessExecutor({ repository: f.repository, access: f.access, consents: f.consents, env: {} });
  await assert.rejects(
    () => execute({ input: { command: "Add a donor named Grace Otieno" }, context: f.context }),
    error => error.code === "business_action_incomplete" && /workspace yet/i.test(error.message)
  );
});

test("createBusinessExecutor adds a real church member, and the dashboard counts it instead of losing it", async () => {
  const f = fixture();
  const execute = createBusinessExecutor({ repository: f.repository, access: f.access, consents: f.consents, env: {} });
  await execute({ input: { command: "Start a church called Grace Chapel" }, context: f.context });
  const added = await execute({ input: { command: "Add a member named John Otieno" }, context: f.context });
  assert.match(added.response, /John Otieno/);
  const row = [...f.rows.values()][0];
  assert.equal(row.data.editable.leads[0].type, "member");
  const dashboard = await execute({ input: { command: "How's my church doing" }, context: f.context });
  // A "member" is not one of the original customer/donor/sponsor/volunteer
  // buckets -- it must still be counted, not silently disappear.
  assert.equal(dashboard.businessDashboard.others, 1);
  assert.match(dashboard.response, /1 other contact/);
});

test("createBusinessExecutor performs a real conversational intake, persisting name/contact/need as a lead row", async () => {
  const f = fixture();
  const execute = createBusinessExecutor({ repository: f.repository, access: f.access, consents: f.consents, env: {} });
  await execute({ input: { command: "Start a nonprofit called Real Farms Cooperative" }, context: f.context });
  const intake = await execute({ input: { command: "Take an intake for Grace Otieno, who needs help with a small loan" }, context: f.context });
  assert.match(intake.response, /Grace Otieno/);
  assert.match(intake.response, /loan/);
  const row = [...f.rows.values()][0];
  assert.equal(row.data.editable.leads.length, 1);
  assert.equal(row.data.editable.leads[0].name, "Grace Otieno");
  assert.equal(row.data.editable.leads[0].type, "client");
  assert.match(row.data.editable.leads[0].need, /loan/);
});

test("createBusinessExecutor generates a real strategy document, using the inferred agent profile", async () => {
  const f = fixture();
  const execute = createBusinessExecutor({ repository: f.repository, access: f.access, consents: f.consents, env: {} });
  await execute({ input: { command: "Start a nonprofit called Real Farms Cooperative" }, context: f.context });
  const generated = await execute({ input: { command: "Draft an investor pitch strategy" }, context: f.context });
  assert.match(generated.response, /Investor Agent/);
  const row = [...f.rows.values()][0];
  assert.ok(row.data.files["strategy/investor.md"], "the real strategy file was written to the workspace, not just described in the response");
  assert.match(row.data.files["strategy/investor.md"].content, /Investor Agent/);
});

test("createBusinessExecutor requires a repository", () => {
  assert.throws(() => createBusinessExecutor({}), /repository is required/);
});

test("verifyBusinessOutcome rejects a malformed or missing result", () => {
  assert.equal(verifyBusinessOutcome({ result: null }).verified, false);
  assert.equal(verifyBusinessOutcome({ result: { verified: true, response: "" } }).verified, false);
  assert.equal(verifyBusinessOutcome({ result: { verified: false, response: "ok" } }).verified, false);
});
