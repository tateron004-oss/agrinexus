"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Asked for on 24 October 2026 ("repeated 502s"). The overnight poll of the live site (240 minutes, no missed answer, no restart except the two deploys, memory never above 390 MB of about 512) shows no crash: the 502s a person meets come in the half
// minute while a new release replaces the old one (the service has a disk, so the old copy stops before the new one starts). The host answers 502 or 503 at once then, the request never reached Kyro, and the person used to be told to try again.
// Now a turn that failed that way is sent again after 4, 8 and 15 seconds, with one short line said the first time. A request that ran for a while and then failed is never repeated, so nothing is done twice.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const start = app.indexOf("const KYRO_UPDATE_WAITS_MS");
const end = app.indexOf("\n}\n", app.indexOf("async function kyroRequestWhileUpdating")) + 2;
assert.ok(start > 0 && end > start, "the helper is in app.js");
const context = { Date, setTimeout, Promise, Number, Error, console };
vm.runInNewContext(`${app.slice(start, end)}\nthis.run = kyroRequestWhileUpdating; this.WAITS = KYRO_UPDATE_WAITS_MS;`, context);
const run = context.run;
const failure = status => Object.assign(new Error("Request failed"), { status });
const noSleep = () => { const waited = []; return { waited, sleep: async ms => { waited.push(ms); } }; };

test("a turn that gets 502 or 503 at once is sent again, after 4, 8 and 15 seconds, and the answer that comes is used", async () => {
  assert.deepEqual([...context.WAITS], [4000, 8000, 15000]);
  for (const status of [502, 503]) {
    let sent = 0; const { waited, sleep } = noSleep(); let said = 0;
    const result = await run(async () => { sent += 1; if (sent < 3) throw failure(status); return { ok: true }; }, () => { said += 1; }, undefined, sleep);
    assert.deepEqual(result, { ok: true }); assert.equal(sent, 3); assert.deepEqual(waited, [4000, 8000]); assert.equal(said, 1, "the short line is said once, the first time");
  }
});

test("it gives up after the third wait and throws the last failure, so the person is told", async () => {
  let sent = 0; const { waited, sleep } = noSleep(); let said = 0;
  await assert.rejects(run(async () => { sent += 1; throw failure(502); }, () => { said += 1; }, undefined, sleep), error => error.status === 502);
  assert.equal(sent, 4, "one try and three more"); assert.deepEqual(waited, [4000, 8000, 15000]); assert.equal(said, 1);
});

test("nothing else is repeated: a 500, a 504, a 422, a failure with no status, and a 502 that came back slowly", async () => {
  for (const status of [500, 504, 422, 409, 0]) {
    let sent = 0; const { waited, sleep } = noSleep();
    await assert.rejects(run(async () => { sent += 1; throw failure(status); }, null, undefined, sleep));
    assert.equal(sent, 1, `status ${status} is sent once`); assert.deepEqual(waited, []);
  }
  // (a request that ran for a while and then failed may have done its work: it is never sent again)
  let sent = 0; const realNow = Date.now; let clock = 1000000;
  const slowContext = { Date: { now: () => clock }, setTimeout, Promise, Number, Error, console };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.run = kyroRequestWhileUpdating;`, slowContext);
  await assert.rejects(slowContext.run(async () => { sent += 1; clock += 6000; throw failure(502); }, null, undefined, async () => {}));
  assert.equal(sent, 1, "a 502 after six seconds is not repeated"); void realNow;
});

test("a good answer is returned at once and the line is never said", async () => {
  let said = 0; const { waited, sleep } = noSleep();
  assert.deepEqual(await run(async () => ({ ok: 1 }), () => { said += 1; }, undefined, sleep), { ok: 1 });
  assert.equal(said, 0); assert.deepEqual(waited, []);
});

test("the person's turn goes through it, and a 502 or 503 that is still there at the end says that Kyro is being updated instead of the general failure", () => {
  assert.match(app, /const result = await kyroRequestWhileUpdating\(\(\) => requestWithTimeout\("\/api\/nexus\/runtime\/behavior\/turn", \{/);
  assert.match(app, /\}, 90000\), \(\) => setVoiceResponse\("One moment, Kyro is being updated\. I will try again\.", true, \{ allowHandoff: false, command: text, source: "kyro-updating", turnToken: options\.turnToken \}\)\);/);
  assert.match(app, /status === 502 \|\| status === 503 \? "Kyro is being updated right now, so nothing was saved or changed\. Please try again in about a minute\."/);
  assert.match(app, /: status >= 500 \? "I could not finish that, so nothing was saved or changed\. Please try again, or say it a different way\."/);
});
