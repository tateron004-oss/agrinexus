"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Found by running the sweep of spoken requests against the live site (27 October 2026): "What should I pack for Kenya?" took two or three model calls (about 20 seconds); on some tries the model saved a document ("Packing checklist for
// Kenya") for a question, and on one the answer was spoken with nothing on the screen, because the page draws a card for a model-written answer only when it is a checked guide's. It is now one direct model call and a card.
const tools = ["documents.create", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
const PACK_LIST = "- Light layers\n- Rain jacket\n- Passport\nCheck the weather before you go.";
function planner({ planned = [], responded = [], answer = PACK_LIST } = {}) {
  return new OpenEndedPlanner({
    model: { plan: async request => { planned.push(request); throw new Error("MODEL_REACHED"); }, respond: async request => { responded.push(request); return answer; } },
    tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] })
  });
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });
const packingInstruction = request => /one item per line/.test(request.goal);

test("'what should I pack' is answered by one direct model call as a conversation answer, with no planning call and no document", async () => {
  for (const say of ["What should I pack for Kenya?", "Kyro, what should I pack for a week in Tokyo", "Can you tell me what should I pack?", "What do I pack for the hospital?"]) {
    const planned = []; const responded = [];
    const plan = await ask(planner({ planned, responded }), say);
    assert.equal(planned.length, 0, say);
    assert.equal(responded.length, 1, say);
    assert.equal(plan.application, "conversation", say);
    assert.deepEqual([...plan.steps], [], say);
    assert.equal(plan.modelAnswered, true, say);
    assert.equal(plan.response, PACK_LIST, say);
    assert.ok(responded[0].goal.startsWith(say), say);
    assert.ok(packingInstruction(responded[0]), say);
    assert.match(responded[0].goal, /check the weather/);
  }
});

test("only 'pack' questions take this path: 'take', 'bring', how-to and list-making sentences go on to the general planner", async () => {
  for (const say of ["What should I take for a headache?", "What should I bring to the interview?", "How do I pack a suitcase?", "What is a packing list?"]) {
    const planned = []; const responded = [];
    await ask(planner({ planned, responded, answer: "A general answer." }), say).catch(() => null);
    assert.ok(planned.length >= 1, `${say}: the general planner ran`);
    assert.ok(!responded.some(packingInstruction), `${say}: no packing-list instruction`);
  }
});

test("if the model gives no packing answer, the question goes on to the general planner as before", async () => {
  const planned = []; const responded = [];
  await ask(planner({ planned, responded, answer: "" }), "What should I pack for Kenya?").catch(() => null);
  assert.ok(planned.length >= 1);
});

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const line = app.split("\n").find(row => row.startsWith("const KYRO_PACK_QUESTION = "));
assert.ok(line, "the page has the pack-question pattern");
const context = {};
vm.runInNewContext(`${line}\nthis.pack = said => KYRO_PACK_QUESTION.test(said);`, context);

test("the page's pack-question pattern takes 'what should I pack' only", () => {
  for (const say of ["What should I pack for Kenya?", "Kyro, what do I pack for a trip", "what must we pack"]) assert.equal(context.pack(say), true, say);
  for (const say of ["What should I take for a headache?", "How do I pack a suitcase?", "Make a packing list"]) assert.equal(context.pack(say), false, say);
});

test("a model-written answer to a pack question is drawn as a card, in front of the checked-guide branch", () => {
  assert.match(app, /result\.outcome\?\.modelAnswered === true && KYRO_PACK_QUESTION\.test\(String\(text \|\| ""\)\) && String\(message \|\| ""\)\.trim\(\)\.length >= 24\) \{\s+answer = \{ response: message \};\s+\} else if \(result\.state === "completed" && result\.application === "conversation" && result\.outcome\?\.modelAnswered === false/);
});
