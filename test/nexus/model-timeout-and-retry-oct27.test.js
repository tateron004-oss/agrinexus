"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenAiPlanningModel } = require("../../nexus/brain/openai-planning-model.js");

// Found on the live site on 27 October 2026: the request to the AI provider had no time limit and no second try. A stuck connection kept the person waiting, and one busy or failing answer (429, 500, 502, 503, 504)
// ended the whole turn as a 503. Each call now has a time limit and is made once more when the first try failed in a way that usually passes the second time.
const ok = text => ({ ok: true, status: 200, headers: { get: () => null }, json: async () => ({ output_text: text, usage: { input_tokens: 10, output_tokens: 5 } }) });
const status = (code, headers = {}) => ({ ok: false, status: code, headers: { get: name => headers[name] ?? null }, json: async () => ({ error: { message: `status ${code}`, code: `provider_${code}` } }) });
const model = (fetchFn, extra = {}) => { const pauses = []; return { pauses, instance: new OpenAiPlanningModel({ apiKey: "k", fetchFn, sleep: async ms => { pauses.push(ms); }, ...extra }) }; };
const ask = instance => instance.respond({ goal: "hello", tenantId: "t1" });

test("a busy or failing first answer is tried once more, and the second answer is used", async () => {
  for (const code of [408, 429, 500, 502, 503, 504]) {
    let calls = 0;
    const { instance, pauses } = model(async () => (++calls === 1 ? status(code) : ok("Hello there.")));
    assert.equal(await ask(instance), "Hello there.", String(code));
    assert.equal(calls, 2, String(code));
    assert.equal(pauses.length, 1);
  }
});

test("the pause before the second try follows retry-after, but never longer than two seconds", async () => {
  for (const [header, expected] of [["1", 1000], ["30", 2000], [undefined, 500]]) {
    let calls = 0;
    const { instance, pauses } = model(async () => (++calls === 1 ? status(429, header ? { "retry-after": header } : {}) : ok("fine")));
    await ask(instance);
    assert.deepEqual(pauses, [expected]);
  }
});

test("two failures in a row are not tried a third time: the provider's own error is raised as before", async () => {
  let calls = 0;
  const { instance } = model(async () => { calls += 1; return status(503); });
  await assert.rejects(() => ask(instance), error => error.message === "status 503" && error.code === "provider_503");
  assert.equal(calls, 2);
});

test("an ordinary refusal (a bad key, a rejected request) is not tried again", async () => {
  for (const code of [400, 401, 403, 404, 422]) {
    let calls = 0;
    const { instance } = model(async () => { calls += 1; return status(code); });
    await assert.rejects(() => ask(instance), error => error.code === `provider_${code}`);
    assert.equal(calls, 1, String(code));
  }
});

test("a call that never answers is cut off at the time limit and tried once more", async () => {
  let calls = 0; const signals = [];
  const { instance } = model(async (url, init) => {
    calls += 1; signals.push(init.signal);
    if (calls === 1) return new Promise((_, reject) => init.signal.addEventListener("abort", () => reject(init.signal.reason)));
    return ok("second try");
  }, { respondTimeoutMs: 30 });
  assert.equal(await ask(instance), "second try");
  assert.equal(calls, 2);
  assert.ok(signals.every(signal => signal && typeof signal.aborted === "boolean"));
});

test("when both tries time out the error says so, with a code the runtime treats as a planning failure", async () => {
  const { instance } = model(async (url, init) => new Promise((_, reject) => init.signal.addEventListener("abort", () => reject(init.signal.reason))), { respondTimeoutMs: 20 });
  await assert.rejects(() => ask(instance), error => error.code === "conversation_provider_timeout" && /did not answer in time/.test(error.message));
});

test("a network failure is tried once more and then reported as unreachable", async () => {
  let calls = 0;
  const flaky = model(async () => { if (++calls === 1) throw new TypeError("fetch failed"); return ok("back"); });
  assert.equal(await ask(flaky.instance), "back");
  calls = 0;
  const down = model(async () => { calls += 1; throw new TypeError("fetch failed"); });
  await assert.rejects(() => ask(down.instance), error => error.code === "conversation_provider_unreachable" && /fetch failed/.test(error.message));
  assert.equal(calls, 2);
});

test("the plan call has the same protection and its own longer limit", async () => {
  const plan = { goal: "g", application: "a", riskTier: "low", clarification: null, steps: [] };
  let calls = 0;
  const { instance } = model(async () => (++calls === 1 ? status(502) : ok(JSON.stringify(plan))));
  assert.equal((await instance.plan({ tenantId: "t1", command: { text: "x" } })).goal, "g");
  assert.equal(calls, 2);
  assert.ok(new OpenAiPlanningModel({ apiKey: "k", fetchFn: async () => ok("") }).planTimeoutMs > new OpenAiPlanningModel({ apiKey: "k", fetchFn: async () => ok("") }).respondTimeoutMs);
});

test("an ordinary first answer is made once, with a time limit attached", async () => {
  let calls = 0; let sawSignal = false;
  const { instance } = model(async (url, init) => { calls += 1; sawSignal = Boolean(init.signal); return ok("one"); });
  assert.equal(await ask(instance), "one");
  assert.equal(calls, 1);
  assert.equal(sawSignal, true);
});
