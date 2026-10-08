"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { startServer } = require("../helpers/free-port.js");

// Found by the production user audit (check B71): an ordinary person's /api/state listed OTHER people's e-mail addresses and names. Where:
//  - profile.integrationEvents[].by   (the person who made each provider event),
//  - profile.usageEvents[].detail     (an Admin's "test login created" line carries the new person's address in its text),
//  - profile.userDisplayNames         (one map of account id -> the name each person asked to be called, for everybody),
//  - networkIntelligence.latestQuery and profile.networkIntelligence.queries[].createdBy (what each person asked the provider-network search, and who).
// A Standard User is now shown only their own events, their own display name and their own questions, and any other account's address or name in a field that says who did something is shown as
// "another user". An Admin still sees who did what. Two real accounts, every GET the app's own pages use.

const root = path.resolve(__dirname, "..", "..");
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "state-people-"));
let server; let adminCookie; let alicia; let bertram;
const secret = () => crypto.randomBytes(9).toString("base64url");
const EMAIL = /[A-Za-z0-9._%+'-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+/g;

async function call(method, route, body, cookie = "") {
  const res = await fetch(`${server.base}${route}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text(); let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, text, cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
async function makeAccount(first, last) {
  const email = `${first.toLowerCase()}-${crypto.randomUUID().slice(0, 6)}@example.com`; const password = secret();
  const made = await call("POST", "/api/admin/test-user", { email, name: `${first} ${last}`, password }, adminCookie);
  assert.equal(made.status, 200);
  const login = await call("POST", "/api/login", { email, password });
  assert.equal(login.status, 200);
  return { email, name: `${first} ${last}`, first, last, cookie: login.cookie, id: login.json?.user?.id };
}
const say = (account, command) => call("POST", "/api/agent/command", { command }, account.cookie);
const mentions = (text, account) => [account.email, account.last, account.first].filter(needle => String(text).toLowerCase().includes(needle.toLowerCase()));

test("setup: a throwaway server, an Admin, and two ordinary people who each do a lot", async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(tmp, "db.json"));
  server = await startServer({ env: { AGRINEXUS_DB_PATH: path.join(tmp, "db.json"), AGRINEXUS_SPACES_PATH: path.join(tmp, "spaces.json"), OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true",
    NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" } });
  const admin = await call("POST", "/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
  assert.equal(admin.status, 200);
  adminCookie = admin.cookie;
  alicia = await makeAccount("Alicia", "Zuberi");
  bertram = await makeAccount("Bertram", "Okello");
  const things = ["remember that my favourite crop is sorghum", "add milk to my shopping list", "remind me tomorrow at 8am to call the buyer", "take a note: sold 3 sacks of maize", "what can you do", "I sold 3 sacks of maize for 4500",
    "I need a clinic near me", "start telehealth intake", "list 20 bags of maize for sale at 3000 each", "find a buyer for my maize", "start a course", "show my wallet", "I spent 500 on seed", "who owes me", "check my route risk",
    "run drone scan", "contact my buyer", "my crop is bad", "use network intelligence to find the closest clinic in Kenya", "tell me about the weather"];
  // taken in turns: the provider-event list keeps only the latest 50, and both people must be in it
  for (const thing of things) for (const person of [alicia, bertram]) await say(person, thing);
  for (const person of [alicia, bertram]) {
    await say(person, `my name is ${person.first} ${person.last}`);
    await call("POST", "/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `p-${crypto.randomUUID().slice(0, 6)}`, arguments: { command: "remember that my goat is called Pili", language: "en" }, language: "en" }, person.cookie);
  }
});

test("GET /api/state for one person never contains the other's address or name, and the page-sized lists still exist", async () => {
  for (const [viewer, other] of [[bertram, alicia], [alicia, bertram]]) {
    const state = await call("GET", "/api/state", null, viewer.cookie);
    assert.equal(state.status, 200);
    assert.deepEqual(mentions(state.text, other), [], `${viewer.first}'s state mentions ${other.first}`);
    assert.equal(state.json.user.email, viewer.email);
    // the lists the pages read are still there (arrays), and the person's own lines are not lost
    for (const key of ["integrationEvents", "usageEvents"]) assert.ok(Array.isArray(state.json.profile[key]), key);
    const own = state.json.profile.integrationEvents.filter(event => String(event.by || "").toLowerCase() === viewer.email);
    assert.ok(own.length > 0, "their own provider events are kept");
    assert.ok(own.every(event => event.detail !== "Activity by someone else."), "and are not hidden from them");
    assert.ok(state.json.profile.integrationEvents.every(event => !String(event.by || "").includes("@") || String(event.by).toLowerCase() === viewer.email), "no other person's event");
    // every address anywhere in the state is the person's own, a public demo login, or a contact of the platform itself (never another test account)
    const addresses = new Set((state.text.match(EMAIL) || []).map(item => item.toLowerCase()));
    assert.ok(!addresses.has(other.email), "the other test account's address");
    assert.ok(!addresses.has("admin@agrinexus.org") || state.json.loginProfiles.some(item => item.email === "admin@agrinexus.org"), "the Admin's address appears only as a demo login");
    assert.equal(Object.keys(state.json.profile.userDisplayNames || {}).filter(id => id !== viewer.id).length, 0, "only their own display name");
    if (state.json.profile.networkIntelligence?.queries?.length) assert.ok(state.json.profile.networkIntelligence.queries.every(query => String(query.createdBy).toLowerCase() === viewer.email));
    const latest = state.json.networkIntelligence?.latestQuery;
    assert.ok(!latest || String(latest.createdBy).toLowerCase() === viewer.email, "the latest network question is theirs");
  }
});

test("every GET the app's own pages use is free of the other person's address and name", async () => {
  const paths = new Set();
  for (const file of fs.readdirSync(path.join(root, "public"))) if (file.endsWith(".js")) for (const match of fs.readFileSync(path.join(root, "public", file), "utf8").matchAll(/["'`](\/api\/[a-zA-Z0-9/_-]*)["'`]/g)) paths.add(match[1]);
  assert.ok(paths.size > 100, `${paths.size} paths found`);
  let read = 0;
  for (const route of [...paths].sort()) {
    if (/logout|delete|erase|reset|sign-?out|signout|clear/.test(route)) continue;
    for (const [viewer, other] of [[bertram, alicia], [alicia, bertram]]) {
      const res = await call("GET", route, null, viewer.cookie);
      if (res.status !== 200) continue;
      read += 1;
      assert.deepEqual(mentions(res.text, other), [], `GET ${route} for ${viewer.first} mentions ${other.first}`);
    }
  }
  assert.ok(read > 50, `${read} pages read`);
});

test("an Admin still sees who did what, and the saved data was not changed by hiding it", async () => {
  const adminState = await call("GET", "/api/state", null, adminCookie);
  assert.equal(adminState.status, 200);
  const by = new Set(adminState.json.profile.integrationEvents.map(event => String(event.by || "").toLowerCase()));
  assert.ok(by.has(alicia.email) && by.has(bertram.email), "the Admin's list names both");
  assert.ok(adminState.json.profile.usageEvents.some(event => String(event.detail).includes(alicia.email)), "and the 'test login created' lines");
  // a second read for an ordinary person is the same (nothing was removed from the stored records)
  const again = await call("GET", "/api/state", null, bertram.cookie);
  assert.deepEqual(mentions(again.text, alicia), []);
  const adminAgain = await call("GET", "/api/state", null, adminCookie);
  assert.ok(new Set(adminAgain.json.profile.integrationEvents.map(event => String(event.by || "").toLowerCase())).has(alicia.email));
});

test("teardown", () => { try { server?.stop(); } catch { /* gone */ } fs.rmSync(tmp, { recursive: true, force: true }); });
