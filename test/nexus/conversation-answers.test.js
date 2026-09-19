"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { AgentService } = require("../../nexus/runtime/agent-service.js");
const { OpenEndedPlanner, isAssistantIntroductionRequest, assistantIntroductionPlan } = require("../../nexus/brain/planner.js");
const { OpenAiPlanningModel } = require("../../nexus/brain/openai-planning-model.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const defs = require("../../nexus/tools/canonical-provider-definitions.js");

// 2026-09-19, production: "Hello Nexus, this is Ron" returned a 503 (the spine had no case for a
// conversational answer), and "what can you do", "what is 15 percent of 2,340" and "what do you remember
// about me" returned 422 "could not produce a safe executable plan" because no registered application fit.
const list = Array.isArray(defs) ? defs : Object.values(defs).find(Array.isArray) || [];
const rows = list.map(tool => ({ tool_id: tool.toolId, domain: tool.domain, description: tool.description, risk_tier: tool.riskTier,
  confirmation_required: tool.confirmationRequired, consent_scope: tool.consentScope }));
const command = { text: "x", tenantId: "t", actorId: "u", locale: "en", channel: "typed" };
function planner(model, memory = []) {
  return new OpenEndedPlanner({ model, memory: { search: async () => memory }, tools: { list: async () => rows }, applications: { list: () => defaultApplicationManifests() } });
}

test("the behavior spine returns a conversational answer instead of failing with no task", async () => {
  const cmd = { commandId: "cmd_1", correlationId: "trace", conversationId: "cnv_1", channel: "typed", text: "Hello Nexus, this is Ron" };
  const spine = new BehaviorSpine({ agent: { command: async () => ({ action: "respond", command: cmd, task: null, application: "conversation",
    plan: { application: "conversation", steps: [], response: "Hello Ron, how can I help?" }, response: "Hello Ron, how can I help?" }) },
    engine: { executeTask: async () => assert.fail("a conversational answer must not execute a task") }, tasks: { get: async () => assert.fail("no task") },
    workspaceStates: { stage: async () => assert.fail("nothing to stage"), acknowledge: async () => assert.fail("nothing to acknowledge") } });
  const result = await spine.turn({ input: { text: cmd.text }, context: { tenantId: "t", userId: "u", can: () => true } });
  assert.equal(result.state, "completed"); assert.equal(result.completed, true); assert.equal(result.application, "conversation");
  assert.equal(result.response, "Hello Ron, how can I help?"); assert.equal(result.taskId, null); assert.equal(result.render, null);
  assert.equal(result.authoritative, true); assert.equal(result.legacyFallbackUsed, false); assert.equal(result.outcome.reason, "conversation_response");
});

test("identity and capability questions are answered from the catalog with no model call", async () => {
  for (const text of ["Who are you?", "who are you", "What can you do?", "Hello Kyro, what can you do for me?", "hi nexus, what can you do", "help", "Help me", "What's your name?",
    "What can I ask you?", "Introduce yourself.", "Tell me about yourself"]) {
    assert.equal(isAssistantIntroductionRequest(text), true, text);
    let modelCalls = 0;
    const plan = await planner({ plan: async () => { modelCalls += 1; }, respond: async () => { modelCalls += 1; } }).plan({ command: { ...command, text }, context: {} });
    assert.equal(modelCalls, 0, `${text} costs no model call`);
    assert.equal(plan.application, "conversation"); assert.match(plan.response, /I'm Kyro/); assert.match(plan.response, /I always ask before I save or send/);
  }
  for (const text of ["Who are you calling?", "What can you do about my maize disease?", "help me find a pharmacy", "What is the weather", "Remind me to help mom"])
    assert.equal(isAssistantIntroductionRequest(text), false, `${text} is a real request, not an introduction`);
});

test("the introduction lists only what is actually available", () => {
  const all = assistantIntroductionPlan("what can you do", { applications: defaultApplicationManifests() }).response;
  assert.match(all, /crop and farm advice/); assert.match(all, /reminders/); assert.match(all, /, and /);
  const few = assistantIntroductionPlan("what can you do", { applications: [{ applicationId: "maps" }, { applicationId: "lists" }] }).response;
  assert.match(few, /routes on a map, and lists/); assert.doesNotMatch(few, /farm|health|jobs/);
  assert.match(assistantIntroductionPlan("help", { applications: [] }).response, /answering questions/);
});

test("a request no application fits is answered directly instead of failing with a 422", async () => {
  let respondInput;
  const model = { plan: async () => ({ goal: "x", application: "nonexistent", clarification: null, steps: [] }),
    respond: async input => { respondInput = input; return "  It is 351.  "; } };
  const plan = await planner(model, [{ kind: "preference", content: "Prefers Swahili" }]).plan({ command: { ...command, text: "What is 15 percent of 2,340?" }, context: {} });
  assert.equal(plan.application, "conversation"); assert.equal(plan.response, "It is 351."); assert.deepEqual(plan.steps, []);
  assert.equal(plan.modelAnswered, true); assert.equal(plan.sourceRequired, false); assert.equal(plan.planningAttempts, 3);
  assert.equal(respondInput.goal, "What is 15 percent of 2,340?");
  assert.equal(respondInput.memories[0].content, "Prefers Swahili", "verified memories reach the answer");
  assert.ok(respondInput.capabilities.includes("maps"));
});

test("the original error is still raised when a direct answer is unavailable", async () => {
  const bad = { plan: async () => ({ goal: "x", application: "nonexistent", clarification: null, steps: [] }) };
  await assert.rejects(() => planner(bad).plan({ command: { ...command, text: "Anything" }, context: {} }), error => error.code === "plan_invalid" && error.status === 422);
  for (const respond of [async () => null, async () => "   ", async () => { throw new Error("provider down"); }])
    await assert.rejects(() => planner({ ...bad, respond }).plan({ command: { ...command, text: "Anything" }, context: {} }), error => error.code === "plan_invalid");
});

test("a request that has a tool plan never takes the direct-answer path", async () => {
  let respondCalls = 0;
  const model = { plan: async () => { throw new Error("must not be consulted"); }, respond: async () => { respondCalls += 1; return "no"; } };
  const plan = await planner(model).plan({ command: { ...command, text: "Remind me to test push in 2 minutes." }, context: {} });
  assert.equal(plan.steps[0].toolId, "reminders.schedule"); assert.equal(respondCalls, 0);
  const valid = { plan: async () => ({ goal: "Show a route", application: "maps", clarification: null, riskTier: "low",
    steps: [{ id: "s1", title: "Route", toolId: "maps.view", input: {}, dependsOn: [], fallbackToolIds: [] }] }), respond: async () => { respondCalls += 1; return "no"; } };
  const routed = await planner(valid).plan({ command: { ...command, text: "Show me the way somewhere interesting" }, context: {} });
  assert.equal(routed.application, "maps"); assert.equal(respondCalls, 0, "a valid model plan is used as before");
});

test("the agent service records that a model wrote a conversational answer", async () => {
  const appended = []; const audits = [];
  const service = new AgentService({ planner: { plan: async () => ({ goal: "q", application: "conversation", steps: [], response: "It is 351.", modelAnswered: true }) },
    tasks: { get: async () => null }, conversations: { ensure: async () => {}, recent: async () => [], append: async row => appended.push(row) },
    engine: { create: async () => assert.fail("no task for a conversation") }, audit: { record: async row => audits.push(row) } });
  const result = await service.command({ input: { text: "q", channel: "typed", correlationId: "c", conversationId: "cnv_01H00000000000000000000000" }, context: { tenantId: "t", userId: "u" } });
  assert.equal(result.action, "respond");
  assert.equal(appended.at(-1).provenance.type, "model_conversation"); assert.equal(appended.at(-1).provenance.providerInvoked, true);
  assert.equal(audits.at(-1).metadata.providerInvoked, true);
});

test("the direct-answer model call carries safety limits and never claims tools", async () => {
  let sent;
  const model = new OpenAiPlanningModel({ apiKey: "k", fetchFn: async (url, options) => { sent = { url, options, body: JSON.parse(options.body) };
    return { ok: true, json: async () => ({ output_text: " Hello. " }) }; } });
  const answer = await model.respond({ goal: "Who won?", conversationHistory: Array.from({ length: 30 }, (_, index) => ({ role: "user", content: `m${index}` })), memories: [], capabilities: ["maps"] });
  assert.equal(answer, "Hello."); assert.equal(sent.url, "https://api.openai.com/v1/responses");
  assert.equal(sent.options.headers.authorization, "Bearer k"); assert.ok(sent.body.max_output_tokens <= 700, "output is bounded");
  assert.match(sent.body.instructions, /you have no tools/); assert.match(sent.body.instructions, /Never claim that you performed an action or that you have live data/);
  assert.match(sent.body.instructions, /Do not diagnose or prescribe/); assert.match(sent.body.instructions, /emergency services/);
  assert.equal(JSON.parse(sent.body.input).conversationHistory.length, 12, "only recent history is sent");
  const empty = new OpenAiPlanningModel({ apiKey: "k", fetchFn: async () => ({ ok: true, json: async () => ({ output: [] }) }) });
  assert.equal(await empty.respond({ goal: "x" }), null);
  const failing = new OpenAiPlanningModel({ apiKey: "k", fetchFn: async () => ({ ok: false, json: async () => ({ error: { message: "rate limited", code: "rate_limit" } }) }) });
  await assert.rejects(() => failing.respond({ goal: "x" }), error => error.code === "rate_limit");
});
