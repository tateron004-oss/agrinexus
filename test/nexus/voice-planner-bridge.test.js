"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { deterministicVoiceAnswer } = require("../../nexus/compat/voice-planner-bridge.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { AgentService } = require("../../nexus/runtime/agent-service.js");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");

// Found by running spoken requests through the real voice tool route: notes, lists, farm log, remembered facts, feedback, the circle,
// mood/sleep... all worked typed and answered a generic "AI copilot recommends..." line when spoken, saving nothing, because the voice
// dispatcher never consulted the planner that owns them. These tests pin the bridge and the "deterministic only" mode it relies on.

const user = { id: "u1" };
const turn = (over = {}) => ({ completed: true, state: "completed", response: "Noted: cow is limping.", outcome: { verified: true, modelAnswered: false }, correlationId: "c1", ...over });

test("bridge: returns the planner's saved-and-answered result", async () => {
  const calls = [];
  const runtime = { behaviorTurnRequest: async args => { calls.push(args); return turn(); } };
  const answer = await deterministicVoiceAnswer({ runtime, user, text: "write down that the cow is limping", language: "en" });
  assert.equal(answer.response, "Noted: cow is limping.");
  assert.equal(answer.verified, true);
  assert.equal(calls[0].deterministicOnly, true, "must ask for deterministic answers only");
  assert.equal(calls[0].channel, "voice");
});

test("bridge: returns null (so the old pipeline runs) for a deferral, a model answer, an incomplete turn, an empty reply, a throw, missing inputs, and a stall", async () => {
  const cases = [
    { behaviorTurnRequest: async () => ({ deferred: true, completed: false, state: "deferred", response: "" }) },
    { behaviorTurnRequest: async () => turn({ outcome: { modelAnswered: true } }) },
    { behaviorTurnRequest: async () => turn({ completed: false, state: "render_required" }) },
    { behaviorTurnRequest: async () => turn({ response: "   " }) },
    { behaviorTurnRequest: async () => { throw new Error("db down"); } },
    { behaviorTurnRequest: () => new Promise(() => {}) }
  ];
  for (const runtime of cases) assert.equal(await deterministicVoiceAnswer({ runtime, user, text: "hello", timeoutMs: 30 }), null);
  assert.equal(await deterministicVoiceAnswer({ runtime: null, user, text: "hello" }), null);
  assert.equal(await deterministicVoiceAnswer({ runtime: cases[0], user: null, text: "hello" }), null);
  assert.equal(await deterministicVoiceAnswer({ runtime: cases[0], user, text: "  " }), null);
});

// ---- the planner's deterministicOnly mode, against the same in-memory store the other feature tests use ----
const together = fs.readFileSync(path.join(__dirname, "kyro-features-together.test.js"), "utf8");
const fullMemory = new Function(`${together.slice(together.indexOf("function fullMemory"), together.indexOf('test("each feature'))}\nreturn fullMemory;`)();

function planner() {
  const modelCalls = [];
  const tools = [{ tool_id: "communications.send", availability: "available" }, { tool_id: "knowledge.search", availability: "available" }];
  const p = new OpenEndedPlanner({ memory: fullMemory(), alerts: { async enable() { return {}; }, async disable() { return 1; }, async status() { return null; } },
    tools: { list: async () => tools }, applications: { list: () => [{ applicationId: "communications", capabilities: [], riskTiers: [] }, { applicationId: "live-knowledge", capabilities: [], riskTiers: [] }] },
    model: { plan: async request => { modelCalls.push(request.command?.text); return { goal: "g", application: "live-knowledge", riskTier: "low", clarification: null, steps: [{ id: "s", title: "t", toolId: "knowledge.search", input: { query: "q" } }] }; },
      respond: async request => { modelCalls.push(request.goal); return "model answer"; } } });
  const ask = (text, deterministicOnly) => p.plan({ command: { text, channel: "voice", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "cnv" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi", ...(deterministicOnly ? { deterministicOnly: true } : {}) }, conversationHistory: [] });
  return { ask, modelCalls };
}

test("planner (deterministicOnly): notes, lists, farm log, remembered facts and calendar are answered and saved, with the model never called", async () => {
  const { ask, modelCalls } = planner();
  for (const [text, expected] of [
    ["write down that the cow is limping", /^Noted: /], ["add milk and eggs to my shopping list", /^Added milk and eggs/],
    ["it rained 12 mm today", /^Logged 12 mm of rain/], ["I harvested 40 kg of maize", /^Logged 40 kg of maize/],
    ["my name is Amina Otieno", /Amina Otieno/], ["add a meeting with the cooperative tomorrow at 10am to my calendar", /^Added to your calendar/]
  ]) {
    const plan = await ask(text, true);
    assert.equal(plan.deferred, undefined, text);
    assert.match(plan.response, expected, text);
  }
  assert.equal(modelCalls.length, 0);
  const notes = await ask("what are my notes?", true);
  assert.match(notes.response, /cow is limping/, "what was saved by voice must be readable");
});

test("planner (deterministicOnly): anything it cannot answer itself is DEFERRED, with no model call and no tool steps", async () => {
  const { ask, modelCalls } = planner();
  for (const text of ["tell me a joke", "who won the match last night", "how do I plant maize", "what is the weather in Kisumu tomorrow"]) {
    const plan = await ask(text, true);
    assert.equal(plan.deferred, true, text);
    assert.deepEqual(plan.steps, [], text);
    assert.equal(plan.response, undefined, text);
  }
  // With no saved contact the planner asks which number to use; that is a clarification (not a saved answer), which AgentService defers.
  const text = await ask("Text Otieno saying I am on my way", true);
  assert.equal(text.response, undefined);
  assert.ok(text.deferred === true || Boolean(text.clarification));
  assert.equal(modelCalls.length, 0, "deferring must not spend a model call");
  const normal = await ask("who won the match last night", false);
  assert.equal(normal.steps.length > 0 || Boolean(normal.response), true, "without the flag the planner behaves exactly as before");
  assert.equal(modelCalls.length > 0, true);
});

test("planner (deterministicOnly): \"delete my last reading\" and other health-readings requests are left to the readings route, never taken by the farm log (found against the real runtime: it deleted the last farm log entry)", async () => {
  const { ask, modelCalls } = planner();
  assert.match((await ask("it rained 12 mm today", true)).response, /^Logged 12 mm of rain/);
  for (const text of ["delete my last reading", "remove my last reading", "show my blood pressure readings", "show my readings", "delete all my health records", "that was wrong, it was 133/78"]) {
    const plan = await ask(text, true);
    assert.equal(plan.deferred, true, `${text} => ${JSON.stringify(plan).slice(0, 300)}`);
    assert.equal(plan.response, undefined, text);
  }
  assert.match((await ask("show my farm log", true)).response, /12 mm of rain/, "the farm log entry must still be there");
  // The farm log's own undo (no health word) and the generic "that was wrong" feedback still belong to the planner on the spoken path.
  assert.match((await ask("delete my last entry", true)).response, /^Removed your last entry: 12 mm of rain/);
  assert.notEqual((await ask("that was wrong", true)).deferred, true, "generic feedback about Kyro's last answer is still answered by the planner");
  assert.equal(modelCalls.length, 0);
});

test("planner (deterministicOnly): a fact the person states is saved WITHOUT a conversation link (the spoken path has not created the conversation row yet; the database refuses a link to a row that does not exist)", async () => {
  const saved = [];
  const memory = { saveProfileFact: async args => { saved.push(args); return { replaced: [] }; }, forgetProfile: async () => [], profile: async () => [] };
  const p = new OpenEndedPlanner({ memory, tools: { list: async () => [] }, applications: { list: () => [] }, model: { plan: async () => { throw new Error("no model"); } } });
  const command = { text: "I grow maize", tenantId: "t1", actorId: "u1", conversationId: "cnv_not_created_yet", channel: "voice", locale: "en" };
  const spoken = await p.profileTurn(command, { deterministicOnly: true });
  assert.match(spoken.response, /maize/);
  const typed = await p.profileTurn(command, {});
  assert.match(typed.response, /maize/);
  assert.equal(saved[0].conversationId, null, "spoken: no link to a conversation that does not exist yet");
  assert.equal(saved[1].conversationId, "cnv_not_created_yet", "typed: the conversation exists, the link is kept");
});

test("planner (typed route): the emergency number is answered the same way as on the other routes, with no AI model (found by running the audit's safety phrases on the typed route)", async () => {
  const { ask, modelCalls } = planner();
  for (const [text, expected] of [["What is the emergency number in Kenya?", /Kenya.*(?:999.*112|112.*999)/], ["namba ya dharura Kenya ni ipi?", /Kenya.*(?:999.*112|112.*999)/]]) {
    for (const spoken of [false, true]) {
      const plan = await ask(text, spoken);
      assert.match(plan.response, expected, `${text} (${spoken ? "spoken" : "typed"})`);
      assert.doesNotMatch(plan.response, /\b911\b/);
    }
  }
  assert.equal(modelCalls.length, 0, "the number is never left to the model");
  // Unrelated sentences are untouched.
  assert.equal((await ask("save my emergency contact number as 0712345678", false)).response?.includes("999") || false, false);
});

// ---- AgentService / BehaviorSpine ----
function agent(plan) {
  const log = { ensure: 0, append: [], audit: [], created: 0 };
  const service = new AgentService({
    planner: { plan: async () => plan },
    engine: { create: async () => { log.created += 1; return { taskId: "t1" }; } },
    tasks: { get: async () => null },
    conversations: { ensure: async () => { log.ensure += 1; }, append: async v => log.append.push(v), recent: async () => [], owner: async () => null },
    audit: { record: async v => log.audit.push(v) },
    cutover: { requireAuthoritative: async () => {} }
  });
  return { service, log };
}
const ctx = { tenantId: "tenant", userId: "user", deterministicOnly: true, permissions: [] };
const input = { text: "hello", channel: "voice", locale: "en", correlationId: "x" };

test("AgentService (deterministicOnly): a deferred plan writes NOTHING (no conversation, message, audit or task)", async () => {
  const { service, log } = agent({ deferred: true, steps: [], clarification: null });
  const result = await service.command({ input, context: ctx });
  assert.equal(result.action, "defer");
  assert.deepEqual([log.ensure, log.append.length, log.audit.length, log.created], [0, 0, 0, 0]);
});

test("AgentService (deterministicOnly): a model answer, a clarification and a step plan are all deferred and write nothing", async () => {
  for (const plan of [{ response: "from the model", modelAnswered: true, steps: [] }, { clarification: "What name?", steps: [] }, { application: "x", steps: [{ toolId: "reminders.schedule" }] }]) {
    const { service, log } = agent(plan);
    const result = await service.command({ input, context: ctx });
    assert.equal(result.action, "defer");
    assert.deepEqual([log.ensure, log.append.length, log.audit.length, log.created], [0, 0, 0, 0]);
  }
});

test("AgentService (deterministicOnly): a real deterministic answer is recorded like any other conversational answer", async () => {
  const { service, log } = agent({ response: "Noted: cow is limping.", steps: [], modelAnswered: false });
  const result = await service.command({ input, context: ctx });
  assert.equal(result.action, "respond");
  assert.equal(log.ensure, 1);
  assert.deepEqual(log.append.map(turn => turn.role), ["user", "assistant"]);
  assert.equal(log.audit[0].eventType, "conversation.responded");
});

test("AgentService: without the flag nothing changes (still ensures, records the user message first, and plans)", async () => {
  const { service, log } = agent({ response: "hi", steps: [] });
  const result = await service.command({ input, context: { ...ctx, deterministicOnly: false } });
  assert.equal(result.action, "respond");
  assert.equal(log.ensure, 1);
  assert.equal(log.append[0].role, "user");
});

test("BehaviorSpine: a deferred command comes back as a deferral and executes nothing", async () => {
  const spine = new BehaviorSpine({ workspaceStates: { stage: async () => {}, acknowledge: async () => {} },
    agent: { command: async () => ({ action: "defer", command: {}, plan: { deferred: true } }) },
    engine: { executeTask: async () => assert.fail("a deferred turn must not execute a task") },
    tasks: { get: async () => assert.fail("a deferred turn must not read a task") }, conversations: {} });
  const result = await spine.turn({ input: { text: "hello" }, context: ctx });
  assert.equal(result.deferred, true);
  assert.equal(result.completed, false);
  assert.equal(result.state, "deferred");
});

test("server.js asks the bridge first, skips it for a crisis phrase, and still falls back to the old pipeline", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const start = source.indexOf("async function dispatchNexusRealtimeTool");
  const body = source.slice(start, source.indexOf("function nexusOpenAiNativeEnabled", start));
  assert.match(body, /deterministicVoiceAnswer\(\{ runtime: authoritativeNexusRuntime/);
  assert.ok(body.indexOf("deterministicVoiceAnswer(") < body.indexOf("runCompanionSafeAgentCommand(db, user"), "bridge must run before the legacy pipeline");
  assert.match(body, /crisisOverride === true \|\| crisisSignal\?\.state === "medical_emergency"/);
});

test("server.js: the catch-all conversation tool (the voice tool the production audit uses) asks the bridge too, after crisis and health readings, before the older pipeline", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const start = source.indexOf("async function executeNexusOpenAiNativeTool");
  const body = source.slice(start, source.indexOf("function nexusGenesisWorkspaceAction", start));
  const at = needle => { const index = body.indexOf(needle); assert.ok(index > 0, needle); return index; };
  assert.match(body, /: toolName === "nexus_general_conversation"\) && effectiveMentalHealthSignal\.state !== "medical_emergency"[^{]*\{\s*const plannerUser = await authoritativeRuntimeUser\(user\)/);
  assert.match(body, /deterministicVoiceAnswer\(\{ runtime: authoritativeNexusRuntime, user: plannerUser, text: command, language \}\)/);
  assert.ok(at("buildSupportPacket") < at("deterministicVoiceAnswer("), "a crisis is answered before the bridge");
  assert.ok(at("healthReadingsReply(db, user, command") < at("deterministicVoiceAnswer("), "health readings keep their own route");
  assert.ok(at("deterministicVoiceAnswer(") < at("const routed = await runCompanionSafeAgentCommand"), "the bridge runs before the older pipeline");
});
