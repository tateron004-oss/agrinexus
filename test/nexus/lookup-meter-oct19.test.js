"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { spawn } = require("node:child_process");
const { createLookupMeter, DEFAULTS } = require("../../nexus/observability/lookup-meter.js");
const { freePortSync } = require("../helpers/free-port.js");

// Live web lookups cost money each time. The owner's worry was cost, so: a saved-answer cache (the hundredth person asking the same thing costs nothing), a daily cap for each person and for everyone, and the numbers.
const root = path.resolve(__dirname, "..", "..");

test("the cache keeps a question under a normalized key, forgets it after its time, never keeps one with personal details, and is bounded", () => {
  let clock = 1000000;
  const meter = createLookupMeter({ env: { NEXUS_LIVE_LOOKUP_CACHE_MINUTES: "10" }, now: () => clock });
  const key = meter.cacheKey("  What is the price of MAIZE flour, in Nairobi?  ");
  assert.equal(key, "what is the price of maize flour in nairobi");
  assert.equal(meter.cacheKey("what is the price of maize flour in nairobi"), key, "the same question in other words of case and punctuation");
  assert.equal(meter.cached(key), null);
  meter.save(key, { answer: "about 66 shillings" });
  assert.deepEqual(meter.cached(key), { answer: "about 66 shillings" });
  clock += 9 * 60000; assert.ok(meter.cached(key), "still kept at nine minutes");
  clock += 2 * 60000; assert.equal(meter.cached(key), null, "forgotten after ten");
  for (const personal of ["email me at amina@example.org the loan rates", "my id number is 12345678 what loans", "call 555 12 3456 about permits", "ssn 123-45-6789 grants"]) assert.equal(meter.cacheKey(personal), "", personal);
  assert.equal(meter.cacheKey(""), "");
  meter.save("", { x: 1 }); assert.equal(meter.snapshot().saved.entries, 0, "nothing is saved without a key");
  for (let i = 0; i < DEFAULTS.maxEntries + 25; i += 1) meter.save(`question ${i}`, { i });
  assert.equal(meter.snapshot().saved.entries, DEFAULTS.maxEntries, "the cache does not grow without end");
  assert.equal(meter.cached("question 0"), null, "the oldest is dropped first");
  assert.ok(meter.cached(`question ${DEFAULTS.maxEntries + 24}`));
});

test("a person is stopped at the daily limit, everyone at the total, a background lookup only by the total, and a new day starts again", () => {
  let clock = Date.parse("2026-10-19T10:00:00Z");
  const meter = createLookupMeter({ env: { NEXUS_LIVE_LOOKUPS_PER_USER_PER_DAY: "2", NEXUS_LIVE_LOOKUPS_PER_DAY_TOTAL: "5" }, now: () => clock });
  assert.deepEqual(meter.allow("amina"), { allowed: true, reason: "", remaining: 2 });
  meter.record("amina"); meter.record("amina");
  assert.deepEqual(meter.allow("amina"), { allowed: false, reason: "person", remaining: 0 });
  assert.equal(meter.allow("juma").allowed, true, "somebody else is not stopped by amina's lookups");
  meter.record("juma"); meter.record("");
  assert.equal(meter.allow("").allowed, true, "a lookup for nobody in particular has no personal limit");
  meter.record("");
  assert.deepEqual(meter.allow("juma"), { allowed: false, reason: "total", remaining: 0 }, "five lookups in all: everyone is stopped");
  meter.blocked("person"); meter.blocked("total"); meter.hit();
  const today = meter.snapshot();
  assert.deepEqual([today.today.lookups, today.today.answeredFromSaved, today.today.stoppedByPersonLimit, today.today.stoppedByDailyTotal, today.today.people, today.today.busiestPersonLookups], [5, 1, 1, 1, 2, 2]);
  assert.equal(JSON.stringify(today).includes("amina"), false, "people are counted, never named");
  clock += 24 * 3600 * 1000;
  assert.equal(meter.allow("amina").allowed, true, "a new day");
  const next = meter.snapshot();
  assert.equal(next.today.lookups, 0);
  assert.deepEqual(next.recentDays, [{ day: "2026-10-19", calls: 5, cacheHits: 1, blocked: 2, people: 2 }]);
});

test("the settings can be changed or turned off, and a bad value falls back to the default", () => {
  assert.deepEqual(createLookupMeter({ env: {} }).settings, { perUser: 40, total: 1500, cacheMinutes: 360 });
  assert.deepEqual(createLookupMeter({ env: { NEXUS_LIVE_LOOKUPS_PER_USER_PER_DAY: "off", NEXUS_LIVE_LOOKUPS_PER_DAY_TOTAL: "unlimited", NEXUS_LIVE_LOOKUP_CACHE_MINUTES: "0" } }).settings, { perUser: 0, total: 0, cacheMinutes: 0 });
  assert.deepEqual(createLookupMeter({ env: { NEXUS_LIVE_LOOKUPS_PER_USER_PER_DAY: "banana", NEXUS_LIVE_LOOKUPS_PER_DAY_TOTAL: "-4" } }).settings, { perUser: 40, total: 1500, cacheMinutes: 360 });
  const off = createLookupMeter({ env: { NEXUS_LIVE_LOOKUPS_PER_USER_PER_DAY: "off", NEXUS_LIVE_LOOKUPS_PER_DAY_TOTAL: "off", NEXUS_LIVE_LOOKUP_CACHE_MINUTES: "0" } });
  for (let i = 0; i < 500; i += 1) off.record("x");
  assert.equal(off.allow("x").allowed, true, "no limit when turned off");
  off.save("k", { a: 1 }); assert.equal(off.cached("k"), null, "no cache when its time is 0");
});

test("the sources line says how long ago the pages were read when the answer was kept, and 'just now' when it was fresh", () => {
  const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const start = server.indexOf("function liveKnowledgeSourcesLine(");
  const end = server.indexOf("\n}\n", start) + 3;
  const context = {};
  vm.runInNewContext(`${server.slice(start, end)}\nthis.line = liveKnowledgeSourcesLine;`, context);
  const ago = minutes => [{ publisher: "Nation Africa", retrievedAt: new Date(Date.now() - minutes * 60000).toISOString() }];
  assert.equal(context.line(ago(0)), " Sources: Nation Africa, checked just now.");
  assert.equal(context.line(ago(40)), " Sources: Nation Africa, checked 40 minutes ago.");
  assert.equal(context.line(ago(300)), " Sources: Nation Africa, checked 5 hours ago.");
  assert.equal(context.line([{ publisher: "Nation Africa" }]), " Sources: Nation Africa, checked just now.");
});

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }

test("on a real server with a stand-in search provider: the same question is answered from the saved copy, a personal question is never kept, a person over the limit is told so, and the owner sees the numbers", async () => {
  let providerCalls = 0;
  const provider = http.createServer((req, res) => {
    let raw = ""; req.on("data", chunk => { raw += String(chunk); });
    req.on("end", () => {
      providerCalls += 1;
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify({ provider: "stand-in", answer: `Answer ${providerCalls}`, results: [{ title: "Official page", url: "https://www.sba.gov/funding-programs/loans", snippet: "Loans." }] }));
    });
  });
  const providerPort = await new Promise(resolve => provider.listen(0, "127.0.0.1", () => resolve(provider.address().port)));
  const port = freePortSync(); const base = `http://localhost:${port}`;
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lookup-meter-"));
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  const server = spawn(process.execPath, ["server.js"], { cwd: root, stdio: "ignore", windowsHide: true, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_DIR: path.join(dir, "spaces"), OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", SESSION_SECRET: "lookup-meter-secret-for-the-test-0123456789",
    NEXUS_LIVE_KNOWLEDGE_ENABLED: "true", NEXUS_LIVE_KNOWLEDGE_PROVIDER: "generic", NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT: `http://127.0.0.1:${providerPort}/search`, NEXUS_LIVE_KNOWLEDGE_API_KEY: "test-only-api-key",
    NEXUS_LIVE_LOOKUPS_PER_USER_PER_DAY: "3", NEXUS_LIVE_LOOKUPS_PER_DAY_TOTAL: "100", NEXUS_LIVE_LOOKUP_CACHE_MINUTES: "60", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000" } });
  try {
    await waitFor(`${base}/api/healthz`);
    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
    assert.equal(login.status, 200);
    const cookie = login.headers.get("set-cookie").split(";")[0];
    const ask = async query => { const res = await fetch(`${base}/api/nexus/live-knowledge/query`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ query }) }); return { status: res.status, body: await res.json() }; };

    const first = await ask("What are the SBA loan programs for a small bakery?");
    assert.equal(first.body.status, "source-backed", JSON.stringify(first.body).slice(0, 300));
    assert.equal(providerCalls, 1);
    const again = await ask("what are the SBA loan programs for a small bakery");
    assert.equal(again.body.status, "source-backed");
    assert.equal(providerCalls, 1, "the same question again was answered from the saved copy: the provider was not asked");
    assert.equal(again.body.summary, first.body.summary);

    await ask("Email me at amina@example.org about SBA loans"); await ask("Email me at amina@example.org about SBA loans");
    assert.equal(providerCalls, 3, "a question with an e-mail address in it is never kept: both asked the provider");

    const stopped = await ask("What grants exist for nonprofits in California?");
    assert.equal(stopped.body.status, "limit-reached", "the person has used their 3 lookups");
    assert.match(stopped.body.summary, /^You have used today's live web lookups, so I cannot search the web for new answers until tomorrow\. I can still answer from my checked guides\.$/);
    assert.equal(providerCalls, 3, "a person over the limit is not charged for another");
    const cachedStillWorks = await ask("What are the SBA loan programs for a small bakery?");
    assert.equal(cachedStillWorks.body.status, "source-backed", "a saved answer is still given after the limit");

    const numbers = await (await fetch(`${base}/api/admin/system/lookups`, { headers: { cookie } })).json();
    assert.equal(numbers.ok, true);
    assert.deepEqual([numbers.today.lookups, numbers.today.answeredFromSaved, numbers.today.stoppedByPersonLimit], [3, 2, 1]);
    assert.equal(numbers.limits.perPersonPerDay, 3);
    assert.equal(JSON.stringify(numbers).includes("admin@agrinexus.org"), false, "nobody is named");
    const anonymous = await fetch(`${base}/api/admin/system/lookups`);
    assert.ok([401, 403].includes(anonymous.status), "only the owner sees the numbers");
  } finally {
    server.kill(); await new Promise(resolve => server.once("exit", resolve)); provider.close();
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
