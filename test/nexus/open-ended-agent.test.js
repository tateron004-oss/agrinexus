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
  assert.equal(registry.list().length, 21);
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

test("emergency health red flags bypass ordinary workflows and model planning", async () => {
  const { emergencyHealthGuidancePlan } = require("../../nexus/brain/planner.js");
  const catalog = {
    tools: [{ toolId: "health.emergency-guidance" }, { toolId: "health.record" }],
    applications: [{ applicationId: "health" }]
  };
  for (const text of [
    "My blood pressure is 180 over 120 and I have chest pain.",
    "I'm suddenly short of breath and one side feels weak.",
    "My dad passed out and is unconscious. What should I do?",
    "I think this is a medical emergency and need an ambulance."
  ]) {
    const plan = emergencyHealthGuidancePlan(text, catalog);
    assert.equal(plan.application, "health");
    assert.equal(plan.riskTier, "critical");
    assert.equal(plan.steps[0].toolId, "health.emergency-guidance");
    assert.equal(plan.steps[0].input.emergencyServicesNotDispatched, true);
  }
  assert.equal(emergencyHealthGuidancePlan("My blood pressure is 140 over 90 and I want to log it.", catalog), null);
});

test("agent service continues cross-application context through one durable task engine", async () => {
  const priorTask = { taskId: "tsk_prior", ownerId: "user", goal: "Find jobs", application: "workforce", state: "completed" };
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

// Confirmed: a caller-supplied taskId was resolved with only a tenant-id
// match, not an owner match, so any tenant member could pass another
// user's taskId and have that task's goal/state summarized into their own
// planning turn -- and echoed back verbatim as `task` in the raw API
// response. A task owned by someone else must be treated exactly like an
// unknown/invalid taskId: silently ignored, not surfaced or leaked.
test("agent service never treats another user's task as continuation context", async () => {
  const othersTask = { taskId: "tsk_other", ownerId: "someone-else", goal: "Secret job search", application: "workforce", state: "running" };
  const calls = []; const service = new AgentService({
    planner: { plan: async ({ priorTask: prior }) => { assert.equal(prior, null); return { goal: "New goal", application: "general", riskTier: "low", planningAttempts: 1, steps: [{ title: "Step", toolId: "knowledge.search" }] }; } },
    tasks: { get: async () => othersTask }, conversations: { ensure: async () => {}, recent: async () => [], append: async entry => calls.push(entry) },
    engine: { create: async input => { calls.push(input); return { taskId: "tsk_new", ...input }; }, conversations: {} },
    audit: { record: async event => calls.push(event) }
  });
  const result = await service.command({ input: { correlationId: "trace", conversationId: "cnv_01H00000000000000000000001", taskId: "tsk_other", channel: "typed", text: "Start something new" }, context });
  assert.equal(result.action, "create");
  assert.notEqual(result.task.taskId, "tsk_other");
  assert.equal(JSON.stringify(result).includes("Secret job search"), false, "another user's task content must never appear in the response");
});

// Confirmed: a caller-supplied conversationId was passed straight into
// conversations.ensure()/recent()/append() with no ownership check --
// storage only scopes it by tenant, so any tenant member could point at
// another user's conversationId (returned in plaintext elsewhere, e.g.
// task-creation responses) and both read their private message history
// into this turn's planning context and write into their conversation. A
// conversationId owned by someone else must be treated exactly like an
// unknown one: dropped so a fresh conversation is started instead.
test("agent service never reuses another user's conversationId for history or writes", async () => {
  const calls = [];
  const service = new AgentService({
    planner: { plan: async ({ conversationHistory }) => { assert.deepEqual(conversationHistory, []); return { goal: "New goal", application: "general", riskTier: "low", planningAttempts: 1, steps: [{ title: "Step", toolId: "knowledge.search" }] }; } },
    tasks: { get: async () => null },
    conversations: {
      owner: async ({ conversationId }) => (conversationId === "cnv_victim" ? "someone-else" : null),
      ensure: async input => { calls.push(["ensure", input]); },
      recent: async input => { calls.push(["recent", input]); return input.conversationId === "cnv_victim" ? [{ role: "user", content: "Victim's private prior message" }] : []; },
      append: async entry => calls.push(["append", entry])
    },
    engine: { create: async input => { calls.push(["create", input]); return { taskId: "tsk_new", ...input }; }, conversations: {} },
    audit: { record: async () => {} }
  });
  const result = await service.command({ input: { correlationId: "trace", conversationId: "cnv_victim", channel: "typed", text: "Start something new" }, context });
  const conversationIdsUsed = new Set(calls.filter(([op]) => op !== "create").map(([, payload]) => payload.conversationId));
  assert.equal(conversationIdsUsed.size, 1);
  assert.notEqual([...conversationIdsUsed][0], "cnv_victim", "another user's conversationId must never be reused for reads or writes");
  assert.equal(result.command.conversationId !== "cnv_victim", true);
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

// Found live (record-repository/consent follow-up audit): this is one of
// the two highest-frequency real, metered OpenAI call sites in the whole
// app -- invoked on nearly every conversational turn that doesn't match a
// deterministic intent matcher -- but it had no cost governance connected
// at all, unlike every tool executed through AuthoritativeTaskEngine.
test("plan() and respond() check the tenant's cost budget before calling the provider, and record the real cost afterward", async () => {
  const calls = [];
  const observability = {
    assertCostAllowed: async input => { calls.push(["assert", input]); },
    recordCost: async input => { calls.push(["record", input]); }
  };
  const model = new OpenAiPlanningModel({ apiKey: "test-key", observability,
    fetchFn: async (_url, options) => {
      const body = JSON.parse(options.body);
      assert.ok(!body.input.includes("tenant-1"), "tenantId must never leak into the provider prompt");
      return { ok: true, json: async () => ({ output_text: JSON.stringify({ goal: "Help", application: "live-knowledge", riskTier: "low", clarification: null, steps: [] }),
        usage: { input_tokens: 500, output_tokens: 100 } }) };
    } });
  await model.plan({ goal: "Help", catalog: {}, tenantId: "tenant-1" });
  assert.deepEqual(calls[0], ["assert", { tenantId: "tenant-1", estimatedCostCents: 0 }]);
  assert.equal(calls[1][0], "record");
  assert.equal(calls[1][1].tenantId, "tenant-1");
  assert.ok(calls[1][1].estimatedCostCents > 0, "a real response's own token usage must produce a nonzero recorded cost");

  calls.length = 0;
  const respondModel = new OpenAiPlanningModel({ apiKey: "test-key", observability,
    fetchFn: async () => ({ ok: true, json: async () => ({ output_text: "Hi!", usage: { input_tokens: 50, output_tokens: 10 } }) }) });
  await respondModel.respond({ goal: "hi", tenantId: "tenant-2" });
  assert.deepEqual(calls[0], ["assert", { tenantId: "tenant-2", estimatedCostCents: 0 }]);
  assert.equal(calls[1][1].tenantId, "tenant-2");

  // A tenant that has already exceeded its daily budget must be refused
  // before the real provider is ever called.
  const overBudget = new OpenAiPlanningModel({ apiKey: "test-key",
    observability: { assertCostAllowed: async () => { throw Object.assign(new Error("over budget"), { code: "cost_limit_exceeded" }); } },
    fetchFn: async () => { throw new Error("must not call the real provider once the budget check refuses"); } });
  await assert.rejects(overBudget.plan({ goal: "Help", tenantId: "tenant-3" }), /over budget/);
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

test("complete blood-pressure record commands become governed Health plans without unnecessary clarification", async () => {
  const catalog = { tools: [{ toolId: "health.record" }], applications: [{ applicationId: "health" }] };
  const { completeHealthRecordPlan } = require("../../nexus/brain/planner.js");
  const direct = completeHealthRecordPlan("Record my blood pressure as 140 over 90 and show the safety response.", catalog);
  assert.equal(direct.application, "health"); assert.equal(direct.clarification, null);
  assert.equal(direct.steps[0].toolId, "health.record");
  assert.deepEqual({ systolic: direct.steps[0].input.systolic, diastolic: direct.steps[0].input.diastolic },
    { systolic: 140, diastolic: 90 });
  assert.equal(completeHealthRecordPlan("Please log 128/82 BP for me.", catalog).steps[0].input.systolic, 128);
  assert.equal(completeHealthRecordPlan("Help me understand blood pressure.", catalog), null);
});

test("an explicitly named workspace owns a compatible overlapping tool", () => {
  const { canonicalizeExplicitApplication } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests() };
  const candidate = { goal: "Prepare intake", application: "health", clarification: null,
    steps: [{ toolId: "telehealth.prepare" }] };
  assert.equal(canonicalizeExplicitApplication(candidate,
    "Save a telehealth intake for my blood pressure concern", catalog).application, "telehealth");
  assert.equal(canonicalizeExplicitApplication(candidate,
    "Help with my health concern", catalog).application, "health");
});

test("a complete telehealth intake command bypasses ambiguous health planning", () => {
  const { completeTelehealthIntakePlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(),
    tools: [{ toolId: "telehealth.prepare" }] };
  const plan = completeTelehealthIntakePlan(
    "Save a telehealth intake for my blood pressure concern and show the next step.", catalog);
  assert.equal(plan.application, "telehealth");
  assert.equal(plan.steps[0].toolId, "telehealth.prepare");
  assert.equal(completeTelehealthIntakePlan("Tell me about telehealth.", catalog), null);
});

test("a complete marketplace search command has an executable marketplace plan", () => {
  const { completeMarketplaceSearchPlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "marketplace.search" }] };
  const plan = completeMarketplaceSearchPlan(
    "Find maize marketplace listings with sources and select one listing.", catalog);
  assert.equal(plan.application, "marketplace"); assert.equal(plan.steps[0].toolId, "marketplace.search");
  assert.equal(plan.steps[0].input.query, "maize"); assert.equal(plan.steps[0].input.selectListing, true);
  assert.equal(completeMarketplaceSearchPlan("Explain marketplace pricing.", catalog), null);
});

test("a current-source question has explicit Live Knowledge ownership", () => {
  const { completeLiveKnowledgePlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "knowledge.search" }] };
  const plan = completeLiveKnowledgePlan("Why do maize leaves turn yellow? Answer with current sources.", catalog);
  assert.equal(plan.application, "live-knowledge"); assert.equal(plan.steps[0].toolId, "knowledge.search");
  assert.equal(completeLiveKnowledgePlan("Assess yellow leaves on my maize crop and show sources.", catalog), null);
});

// Confirmed live in production: this exact phrase (the browser-capability
// acceptance probe's own live-knowledge scenario text) was misrouted to
// agriculture instead, because agricultureAdvicePlan runs first in
// OpenEndedPlanner.plan() and a crop name plus a symptom/question word is
// broad enough to also claim an explicit request for sourced, current
// knowledge. completeLiveKnowledgePlan alone correctly recognized this
// phrase (see the test above) -- the bug only existed in the full
// dispatch's priority ordering, which no test exercised end to end.
test("the full planner resolves a maize-plus-current-sources question to live-knowledge, not agriculture", async () => {
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the model"); } },
    tools: { list: async () => [{ tool_id: "knowledge.search", domain: "knowledge", description: "Search", risk_tier: "low", availability: "available" }] },
    applications: new ApplicationRegistry(defaultApplicationManifests()) });
  const plan = await planner.plan({ command: { ...command, text: "Why do maize leaves turn yellow? Answer with current sources." }, context });
  assert.equal(plan.application, "live-knowledge");
  assert.equal(plan.steps[0].toolId, "knowledge.search");
});

test("the full planner still resolves a plain crop-diagnosis question to agriculture", async () => {
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the model"); } },
    tools: { list: async () => [{ tool_id: "knowledge.search", domain: "knowledge", description: "Search", risk_tier: "low", availability: "available" }] },
    applications: new ApplicationRegistry(defaultApplicationManifests()) });
  const plan = await planner.plan({ command: { ...command, text: "Why do maize leaves turn yellow?" }, context });
  assert.equal(plan.application, "agriculture");
});

// Item 12 of the 2026-09-22 capability audit: "logistics tracking" had no path at all through the
// authoritative runtime. completeLogisticsTrackPlan closes that specific wiring gap; it does not (and
// cannot) fix production's decorative mock logistics provider itself -- a real carrier integration is a
// genuine provider-access gap, out of scope here (see nexus/logistics/executor.js's header).
test("a complete logistics-tracking request has an executable Logistics plan with real origin/destination extraction", () => {
  const { completeLogisticsTrackPlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "logistics.track" }] };
  const plan = completeLogisticsTrackPlan("Track my shipment from Nairobi to Nakuru.", catalog);
  assert.equal(plan.application, "logistics");
  assert.equal(plan.steps[0].toolId, "logistics.track");
  assert.equal(plan.steps[0].input.origin, "Nairobi");
  assert.equal(plan.steps[0].input.destination, "Nakuru");
  assert.equal(completeLogisticsTrackPlan("When will my delivery from Mombasa to Kisumu arrive?", catalog).steps[0].input.destination, "Kisumu");
  assert.equal(completeLogisticsTrackPlan("Tell me about my farm.", catalog), null, "no shipment/delivery language -- not a logistics request");
  assert.equal(completeLogisticsTrackPlan("Track my shipment.", catalog), null, "no origin/destination named -- nothing to estimate a route for");
});

test("a complete mobile clinic search has an executable Mobile Clinic plan", () => {
  const { completeMobileClinicPlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "clinic.find" }] };
  const plan = completeMobileClinicPlan(
    "Find mobile clinic locations near Nairobi and select the closest one.", catalog);
  assert.equal(plan.application, "mobile-clinic"); assert.equal(plan.steps[0].toolId, "clinic.find");
  assert.equal(plan.steps[0].input.location, "Nairobi"); assert.equal(plan.steps[0].input.selectClosest, true);
  assert.equal(completeMobileClinicPlan("Tell me about mobile clinics.", catalog), null);
});

test("an explicit media play request has an executable Music and Media plan", () => {
  const { completeMediaPlaybackPlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "media.play" }] };
  const plan = completeMediaPlaybackPlan(
    "Play Stevie Wonder Sir Duke and confirm playback is playing.", catalog);
  assert.equal(plan.application, "music-media"); assert.equal(plan.steps[0].toolId, "media.play");
  assert.equal(plan.steps[0].input.requestedMedia, "Stevie Wonder Sir Duke");
  assert.equal(plan.steps[0].input.playbackState, "playing");
  assert.equal(completeMediaPlaybackPlan("Tell me about Stevie Wonder.", catalog), null);
});

test("a complete document create-save-reopen request has an executable Documents plan", () => {
  const { completeDocumentPlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "documents.create" }] };
  const plan = completeDocumentPlan("Create and save a farming plan document, then reopen it.", catalog);
  assert.equal(plan.application, "documents"); assert.equal(plan.steps[0].toolId, "documents.create");
  assert.equal(plan.steps[0].input.reopenAfterSave, true);
  assert.equal(completeDocumentPlan("Write and save a report titled Nakuru Harvest, then open again.", catalog).steps[0].input.title, "Nakuru Harvest");
  assert.equal(completeDocumentPlan("Tell me about farming plans.", catalog), null);
});

// Confirmed live in the 2026-09-22 capability audit: this fast path never looked at the requested
// format at all, so "save this as a PDF" silently produced a real .txt file (documents.create's own
// default) instead of the PDF the person actually asked for.
test("a document request naming a format carries it through to the plan's input, and is omitted (default) otherwise", () => {
  const { completeDocumentPlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "documents.create" }] };
  assert.equal(completeDocumentPlan("Create and save a farming plan document as a PDF, then reopen it.", catalog).steps[0].input.format, "pdf");
  assert.equal(completeDocumentPlan("Write and save a report as a Word document, then open again.", catalog).steps[0].input.format, "docx");
  assert.equal(completeDocumentPlan("Write and save a report as markdown, then open again.", catalog).steps[0].input.format, "md");
  assert.equal(completeDocumentPlan("Create and save a farming plan document, then reopen it.", catalog).steps[0].input.format, undefined,
    "no format named -- must not invent one, documents.create's own default still applies");
});

// Item 18 of the 2026-09-22 capability audit: "show me videos of X" had no path at all through the
// authoritative runtime -- only images.search existed. completeVideoSearchPlan closes that gap.
test("a complete video-search request has an executable Videos plan, distinct from image search and media playback", () => {
  const { completeVideoSearchPlan, completeImageSearchPlan, completeMediaPlaybackPlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "videos.search" }, { toolId: "images.search" }, { toolId: "media.play" }] };
  const plan = completeVideoSearchPlan("Show me videos of maize harvesting.", catalog);
  assert.equal(plan.application, "videos");
  assert.equal(plan.steps[0].toolId, "videos.search");
  // Same leading-preposition/trailing-punctuation shape completeImageSearchPlan's own extraction has
  // (neither strips them) -- a real search provider handles a stray "of"/period fine, so this matches
  // the established sibling behavior rather than diverging from it.
  assert.equal(plan.steps[0].input.query, "of maize harvesting.");
  assert.equal(completeVideoSearchPlan("Find videos about drip irrigation.", catalog).steps[0].input.query, "about drip irrigation.");
  // Must not be caught by the neighboring image-search fast path (different noun) or by media.play's
  // fast path (media.play's own matcher only requires the text to start with "play" -- "play a video of
  // the harvest" would otherwise be misread as a song title to look up on iTunes/YouTube).
  assert.equal(completeImageSearchPlan("Show me videos of maize harvesting.", catalog), null);
  const playVideoPlan = completeVideoSearchPlan("Play a video of the harvest festival.", catalog);
  assert.equal(playVideoPlan.application, "videos", "a 'play ... video' request must resolve to video search, not media playback");
  const songPlan = completeMediaPlaybackPlan("Play Bohemian Rhapsody.", catalog);
  assert.equal(songPlan.application, "music-media", "an ordinary song request is unaffected by the new video-search matcher");
  assert.equal(completeVideoSearchPlan("Tell me about crop rotation.", catalog), null);
});

test("a complete list-creation request has an executable Lists plan", () => {
  const { completeListsPlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "lists.create" }] };
  const plan = completeListsPlan("Create a checklist called Farm Chores with feed goats, water crops, and check fences.", catalog);
  assert.equal(plan.application, "lists"); assert.equal(plan.steps[0].toolId, "lists.create");
  assert.equal(plan.steps[0].input.title, "Farm Chores");
  assert.deepEqual(plan.steps[0].input.items, ["feed goats", "water crops", "check fences"]);
  assert.deepEqual(completeListsPlan("Start a list for harvest tasks.", catalog).steps[0].input.items, []);
  assert.equal(completeListsPlan("Tell me about my farm.", catalog), null);
  assert.equal(completeListsPlan("Find maize marketplace listings with sources and select one listing.", catalog), null);
});

// Confirmed by the production capability audit: lists.create/read/update had
// real executors but no fast-path matcher, so voice and typed weren't
// guaranteed to plan identically for this domain (the LLM path is
// channel-sensitive; a fast-path is channel-blind by construction). Exercise
// the full planner dispatch, not just the isolated matcher, since that's
// exactly where a prior misrouting bug (live-knowledge vs. agriculture) hid.
test("the full planner resolves a list-creation request to lists, not the LLM path", async () => {
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the model"); } },
    tools: { list: async () => [{ tool_id: "lists.create", domain: "lists", description: "Create a list", risk_tier: "low", availability: "available" }] },
    applications: new ApplicationRegistry(defaultApplicationManifests()) });
  const plan = await planner.plan({ command: { ...command, text: "Create a checklist called Farm Chores with feed goats and water crops." }, context });
  assert.equal(plan.application, "lists");
  assert.equal(plan.steps[0].toolId, "lists.create");
});

test("a complete consented communication request has an executable Communications plan", () => {
  const { completeCommunicationPlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "communications.send" }] };
  const plan = completeCommunicationPlan(
    "Draft a clinic follow-up message, obtain consent, send it, and return the delivery receipt.", catalog);
  assert.equal(plan.application, "communications"); assert.equal(plan.steps[0].toolId, "communications.send");
  assert.equal(plan.steps[0].input.consentRequired, true);
  assert.equal(completeCommunicationPlan("Draft a clinic follow-up message.", catalog), null);
});

test("every remaining complete gauntlet request has a deterministic governed plan", () => {
  const { completeRemainingWorkspacePlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: ["knowledge.search", "pharmacy.find", "jobs.search",
    "maps.view", "reminders.schedule", "offline.sync", "drone.plan"].map(toolId => ({ toolId })) };
  const cases = [
    ["agriculture", "Assess yellow leaves on my maize crop and show sources."],
    ["pharmacy", "Find pharmacy support for metformin and show a safety response with sources."],
    ["learning", "Create a short maize farming literacy lesson and save my progress."],
    ["workforce", "Find agriculture jobs in Nairobi with sources and select one listing."],
    ["maps", "Show a route from Nairobi to Nakuru with route geometry."],
    ["maps", "Get me from Kisumu to Nakuru."],
    ["maps", "No, that is wrong. Take me from Eldoret to Kitale instead."],
    ["reminders", "Remind me tomorrow at 9 AM to check my crops and save the reminder."],
    ["offline-queue", "Queue a crop observation offline, synchronize it, and show the server acknowledgement."],
    ["operations", "Prepare a field operation, record approval state, and return its receipt."]
  ];
  for (const [application, command] of cases) {
    const plan = completeRemainingWorkspacePlan(command, catalog);
    assert.equal(plan.application, application, command); assert.equal(plan.steps.length, 1, command);
  }
  assert.equal(completeRemainingWorkspacePlan("Tell me about offline work.", catalog), null);
  assert.equal(completeRemainingWorkspacePlan("Tell me about jobs.", catalog), null);
});

// Found live: "Find me a job in construction," "Search for jobs near me,"
// and "Show me available work" all lack a select/listing/sources word and
// fell through to the free-form AI planner instead of this deterministic
// fast path. Widened with the natural ways a real job search is phrased.
test("a natural job-search phrase with no select/listing/sources word still reaches the real jobs.search plan", () => {
  const { completeRemainingWorkspacePlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "jobs.search" }] };
  for (const command of ["Find me a job in construction", "Search for jobs near me", "Show me available work"]) {
    const plan = completeRemainingWorkspacePlan(command, catalog);
    assert.equal(plan?.application, "workforce", command);
    assert.equal(plan?.steps[0].toolId, "jobs.search", command);
  }
});

// Confirmed missing: a general youth-education request like "help this youth
// learn to read" or "give my student a lesson" has no save/progress verb at
// all, so the original narrower matcher never fired and it fell through to
// the free AI-planner guess instead of the real, reachable "learning"
// application.
test("a general youth/education request reaches the real learning application without needing 'save'/'progress' wording", () => {
  const { completeRemainingWorkspacePlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "knowledge.search" }] };
  for (const command of ["Help this youth learn to read.", "Give my student a lesson.", "Teach me about education savings.", "Help me with my homework."]) {
    const plan = completeRemainingWorkspacePlan(command, catalog);
    assert.equal(plan.application, "learning", command);
    assert.equal(plan.steps[0].toolId, "knowledge.search", command);
    assert.equal(plan.steps[0].input.saveProgress, true, command);
  }
  assert.equal(completeRemainingWorkspacePlan("Tell me about the weather.", catalog), null);
});

test("strict planning schema encodes free-form tool input as JSON text and normalizes it", () => {
  assert.equal(PLAN_SCHEMA.properties.steps.items.properties.input.type, "string");
  assert.deepEqual(normalizePlan({ steps: [{ input: '{"location":"Kisumu"}' }] }).steps[0].input, { location: "Kisumu" });
  assert.throws(() => normalizePlan({ steps: [{ input: "not-json" }] }));
});

test("a pharmacy request names the place to search near, and asks for none it was not given", () => {
  const { completeRemainingWorkspacePlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "pharmacy.find" }] };
  const near = completeRemainingWorkspacePlan("Find pharmacy support for metformin near Nairobi and show a safety response with sources.", catalog);
  assert.equal(near.steps[0].input.location, "Nairobi");
  const inCity = completeRemainingWorkspacePlan("Find a pharmacy in Kisumu with medication safety info.", catalog);
  assert.equal(inCity.steps[0].input.location, "Kisumu");
  const none = completeRemainingWorkspacePlan("Find pharmacy support for metformin and show a safety response with sources.", catalog);
  assert.equal(none.steps[0].input.location, undefined, "no place is invented");
  assert.equal(none.steps[0].toolId, "pharmacy.find");
});

test("reminders with a relative time or a weekday take the deterministic path instead of the AI planner", () => {
  const { completeRemainingWorkspacePlan } = require("../../nexus/brain/planner.js");
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "reminders.schedule" }] };
  for (const text of ["Remind me to test push in 2 minutes.", "Remind me to call Ron in 3 hours", "Remind me on Friday to order supplies",
    "Remind me later today to check the pump", "Remind me tomorrow at 9 AM to check my crops and save the reminder."]) {
    const plan = completeRemainingWorkspacePlan(text, catalog);
    assert.equal(plan?.steps[0].toolId, "reminders.schedule", text);
    assert.equal(plan.steps[0].input.when, text);
  }
  for (const text of ["Remind me to be kind", "What is a reminder?", "Show my reminders"])
    assert.equal(completeRemainingWorkspacePlan(text, catalog), null, `${text} has no time, so it is not scheduled here`);
});

test("the full planner never consults the AI model for a reminder with a relative time or weekday", async () => {
  const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
  const defs = require("../../nexus/tools/canonical-provider-definitions.js");
  const list = Array.isArray(defs) ? defs : Object.values(defs).find(Array.isArray) || [];
  const rows = list.map(tool => ({ tool_id: tool.toolId, domain: tool.domain, description: tool.description, risk_tier: tool.riskTier,
    confirmation_required: tool.confirmationRequired, consent_scope: tool.consentScope }));
  assert.ok(rows.some(row => row.tool_id === "reminders.schedule"));
  let modelCalls = 0;
  const planner = new OpenEndedPlanner({ model: { plan: async () => { modelCalls += 1; throw new Error("AI planner must not be used"); } },
    memory: { search: async () => [] }, tools: { list: async () => rows }, applications: { list: () => defaultApplicationManifests() } });
  for (const text of ["Remind me to test push in 2 minutes.", "Remind me to call Ron in 3 hours", "Remind me on Friday to order supplies"]) {
    const plan = await planner.plan({ command: { text, tenantId: "t", actorId: "u", locale: "en", channel: "typed" }, context: { roles: [] } });
    assert.equal(plan.steps[0].toolId, "reminders.schedule", text);
    assert.equal(plan.steps[0].input.when, text);
  }
  assert.equal(modelCalls, 0);
});
