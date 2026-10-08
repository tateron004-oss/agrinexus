"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");
const { freePortSync } = require("../helpers/free-port.js");

// The bookkeeping words reach the toolkit through the planner (voice tool route and /api/agent/command both end there), with the country on the signed-in person's profile. The toolkit's own tests drive it directly;
// this file checks the two ends of the route: (1) the planner hands the person's country and words to the toolkit, so a Kenyan's "800" is KSh and a loan is not income; (2) the real routes, spawned,
// answer bookkeeping words without crashing and without ever claiming something was recorded that was not (the spawned server runs on the JSON state with no database, so nothing can be saved there).
function planner(farmWork) {
  const model = { plan: async () => { throw new Error("the AI model must not be asked for a bookkeeping request"); } };
  return new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: fakeMemory(), farmWork });
}
const command = text => ({ text, tenantId: "t1", actorId: "u1" });

test("the planner passes the person's country to the toolkit: amounts are labelled once, in their own money", async () => {
  const store = fakeFarmStore(); const farmWork = { store, notifications: null, nameOf: async () => "Amina" };
  const plan = (text, country) => planner(farmWork).plan({ command: command(text), context: { timeZone: "Africa/Nairobi", country } });
  const sale = await plan("sold maize 4500", "Kenya");
  assert.equal(sale.application, "conversation"); assert.match(sale.response, /^Recorded: sold maize for KSh 4,500\./);
  await plan("sold beans $20", "Kenya");
  await plan("sold rice 1000", "Kenya");
  assert.deepEqual(store.rows.filter(row => row.collection === "money").reverse().map(row => [row.data.amount, row.data.currency]), [[4500, "KSh"], [20, "$"], [1000, "KSh"]]);
  const earned = await plan("how much did I earn this month", "Kenya");
  assert.match(earned.response, /KSh 5,500 and \$20/);
  const naira = fakeFarmStore();
  const ng = await planner({ store: naira, notifications: null, nameOf: async () => "Ada" }).plan({ command: command("sold rice 15000"), context: { timeZone: "Africa/Lagos", country: "Nigeria" } });
  assert.match(ng.response, /₦15,000/);
  const none = await planner({ store: fakeFarmStore(), notifications: null, nameOf: async () => "X" }).plan({ command: command("sold rice 15000"), context: { timeZone: "Africa/Nairobi" } });
  assert.match(none.response, /^Recorded: sold rice for 15,000\./, "with no country nothing is assumed");
});

test("through the planner: a loan, a chama contribution, a refund and the summary behave as books, and Kiswahili is answered in Kiswahili", async () => {
  const store = fakeFarmStore(); const farmWork = { store, notifications: null, nameOf: async () => "Amina" };
  const say = text => planner(farmWork).plan({ command: command(text), context: { timeZone: "Africa/Nairobi", country: "Kenya" } }).then(answer => answer.response);
  assert.match(await say("I borrowed 5000 from Mama Njeri"), /It is not income: it is money you owe/);
  assert.match(await say("nimechangia chama 500"), /Ni akiba yako, si gharama/);
  await say("sold maize to John for 4500");
  assert.match(await say("refund John 300"), /I have not sent any money/);
  assert.match(await say("my summary for this month"), /Income KSh 4,500 \(1 entry\)\. Costs KSh 300 \(1 entry\)\. Profit KSh 4,200\..*Loans you owe: KSh 5,000\. Chama: you have put in KSh 500\./);
  assert.match(await say("muhtasari wa mwezi"), /^Mwezi huu: mapato KSh 4,500, matumizi KSh 300, kwa hivyo faida ya KSh 4,200\./);
  assert.match(await say("nina gunia 20 za unga"), /^Nimeandika: una gunia 20 za unga ghalani\.$/);
  assert.match(await say("sold 2 sacks of flour for 3000"), /took 2 sacks out of your stock; 18 sacks left/);
  assert.match(await say("sold maize 4.500"), /^Did you mean KSh 4,500|^Did you mean 4,500/);
  assert.match(await say("4500"), /^Recorded: sold maize for KSh 4,500/);
});

// ---- the real routes, spawned ----
const root = path.resolve(__dirname, "..", "..");
const port = freePortSync();
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-bookkeeping-round-two-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-bookkeeping2-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie;
test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir }, stdio: "ignore", windowsHide: true });
  for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});
test.after(() => { server.kill(); fs.rmSync(tempDbPath, { force: true }); fs.rmSync(tempUploadDir, { recursive: true, force: true }); });
const call = async (pathname, body) => {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  const text = await res.text(); let json; try { json = JSON.parse(text); } catch { json = { raw: text.slice(0, 300) }; }
  return { status: res.status, json };
};
const speak = (command, language = "en") => call("/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `bk2-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language }, language });
const typed = command => call("/api/agent/command", { command, conversational: true, inputMode: "text", outputMode: "text" });
const textOf = ({ json }) => String(json.output?.response ?? json.response ?? json.commandResult?.response ?? json.message ?? json.raw ?? "");

const PHRASES = [["sold sugar 2 kg 400", "en"], ["I borrowed 5000 from Mama Njeri", "en"], ["chama contribution 500", "en"], ["refund John 300", "en"], ["I have 20 bags of flour", "en"], ["my summary for this month", "en"], ["sold maize four thousand five", "en"],
  ["nimeuza sukari kilo mbili 400", "sw"], ["nimekopa elfu tano kutoka kwa Mama Njeri", "sw"], ["nimechangia chama 500", "sw"], ["nina gunia 20 za unga", "sw"], ["muhtasari wa mwezi", "sw"]];

test("spoken route: bookkeeping words get an answer, and nothing is claimed as recorded that was not", async () => {
  for (const [phrase, language] of PHRASES) {
    const reply = await speak(phrase, language);
    assert.equal(reply.status, 200, `${phrase} -> ${reply.status} ${JSON.stringify(reply.json).slice(0, 200)}`);
    const text = textOf(reply);
    assert.ok(text.length > 0, `${phrase} got an answer`);
    assert.doesNotMatch(text, /^Recorded: |Nimerekodi: |Nimeandika: /, `${phrase}: the spawned server has no database, so it must not claim to have saved anything (${text.slice(0, 160)})`);
  }
});

test("typed route (/api/agent/command): the same words get an answer and no false claim of a record", async () => {
  for (const [phrase] of PHRASES) {
    const reply = await typed(phrase);
    assert.ok(reply.status === 200 || reply.status === 202, `${phrase} -> ${reply.status} ${JSON.stringify(reply.json).slice(0, 200)}`);
    const text = textOf(reply) || JSON.stringify(reply.json);
    assert.doesNotMatch(text, /Recorded: |Nimerekodi: |Nimeandika: /, `${phrase}: ${text.slice(0, 160)}`);
  }
});
