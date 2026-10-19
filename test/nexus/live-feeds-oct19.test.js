"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const feeds = require("../../nexus/knowledge/live-feeds.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeMemory } = require("./farmwork-fake.js");

// The owner asked for real-time lookups that do not cost money each time. Grants.gov (open federal grants) and the Federal Register (the newest notices and rules) are free government feeds with no key: Kyro reads them live,
// shows every listing with its own page, and keeps a copy for 30 minutes.

test("only a request for what is OPEN or NEWEST is the feeds'; 'how do I find grants' stays with the checked guide", () => {
  const picks = {
    "What federal grants are open right now for nonprofits?": { kind: "grants", audience: "nonprofit", keyword: "" },
    "Show me the newest grants for small businesses about clean energy": { kind: "grants", audience: "small business", keyword: "clean energy" },
    "Are there any open grants for veterans?": { kind: "grants", audience: "", keyword: "veterans" },
    "What federal grants are available?": { kind: "grants", audience: "", keyword: "" },
    "What are the latest SBA rules?": { kind: "rules", agency: "sba", term: "" },
    "Any new notices from the IRS about charities?": { kind: "rules", agency: "irs", term: "charities" }
  };
  for (const [say, expected] of Object.entries(picks)) assert.deepEqual(feeds.feedRequest(say), expected, say);
  for (const say of ["How do I find grants for my bakery?", "What is a grant?", "Where can I get free help starting a business?", "Open the map", "Log a grant payment of $300", "", "x".repeat(400)]) assert.equal(feeds.feedRequest(say), null, say);
});

function stubFetch({ grants, rules, status = 200 } = {}) {
  const calls = [];
  const impl = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    if (status !== 200) return { ok: false, status, json: async () => ({}) };
    if (String(url).startsWith("https://api.grants.gov/")) return { ok: true, status: 200, json: async () => grants };
    return { ok: true, status: 200, json: async () => rules };
  };
  return { impl, calls };
}
const GRANTS = { errorcode: 0, data: { hitCount: 392, oppHits: [
  { id: "364099", number: "NOAA-1", title: "Broad Agency Announcement &ndash; FY 2027 &amp; 2028", agency: "DOC NOAA", openDate: "10/16/2026", closeDate: "09/30/2028" },
  { id: "360869", number: "PAR-26-1", title: "Centers for Research", agency: "National Institutes of Health", openDate: "10/16/2026", closeDate: "" }
] } };
const RULES = { count: 122, results: [
  { title: "Administrative Declaration of an Economic Injury Disaster for the State of Arizona", type: "Notice", publication_date: "2026-10-19", html_url: "https://www.federalregister.gov/documents/2026/10/19/2026-21257/x", abstract: "This is notice of an Economic Injury Disaster Loan declaration." },
  { title: "Not a web page", type: "Notice", publication_date: "2026-10-18", html_url: "javascript:alert(1)", abstract: "" }
] };

test("the grants feed is asked for the posted grants of the audience, newest first, and each listing is shown with its own Grants.gov page", async () => {
  const stub = stubFetch({ grants: GRANTS });
  const live = feeds.createLiveFeeds({ fetchImpl: stub.impl });
  const result = await live.grants({ audience: "nonprofit", keyword: "", rows: 5 });
  const body = JSON.parse(stub.calls[0].options.body);
  assert.deepEqual([body.oppStatuses, body.eligibilities, body.sortBy, body.rows], ["posted", "12|13", "openDate|desc", 5]);
  assert.equal(result.hitCount, 392);
  assert.equal(result.items[0].title, "Broad Agency Announcement - FY 2027 & 2028", "the page's HTML entities are decoded");
  assert.equal(result.items[0].url, "https://www.grants.gov/search-results-detail/364099");
  const answer = feeds.grantsAnswer(result, { audience: "nonprofit", keyword: "" });
  assert.match(answer.text, /^Here are the newest federal grants posted on Grants\.gov open to nonprofits: 1\. Broad Agency Announcement - FY 2027 & 2028 \(DOC NOAA\), opened 10\/16\/2026, closes 09\/30\/2028\. 2\. Centers for Research \(National Institutes of Health\), opened 10\/16\/2026, no closing date listed\. There are 392 posted in all\./);
  assert.match(answer.text, /read each listing's eligibility before you spend time on it\. Sources: Grants\.gov \(read just now\)\. This is general information, not legal, tax or financial advice\. I cannot apply for you\.$/);
  assert.deepEqual(answer.sources.map(source => source.url), ["https://www.grants.gov/search-grants", "https://www.grants.gov/search-results-detail/364099", "https://www.grants.gov/search-results-detail/360869"]);
  const none = feeds.grantsAnswer({ items: [], hitCount: 0 }, { audience: "small business", keyword: "zebra" });
  assert.match(none.text, /^I found no federal grants posted on Grants\.gov right now open to small businesses about "zebra"\./);
});

test("the Federal Register feed is asked for the agency's newest documents; only real web pages are listed", async () => {
  const stub = stubFetch({ rules: RULES });
  const live = feeds.createLiveFeeds({ fetchImpl: stub.impl });
  const result = await live.rules({ agency: "irs", term: "charities", rows: 5 });
  const url = new URL(stub.calls[0].url);
  assert.equal(url.searchParams.get("conditions[term]"), "charities");
  assert.deepEqual(url.searchParams.getAll("conditions[agencies][]"), ["internal-revenue-service"]);
  assert.equal(url.searchParams.get("order"), "newest");
  assert.equal(result.items.length, 1, "a listing without a web address is left out");
  const answer = feeds.rulesAnswer(result, { agency: "irs", term: "charities" });
  assert.match(answer.text, /^Here are the newest Federal Register notices and rules from the Internal Revenue Service about "charities": 1\. Administrative Declaration of an Economic Injury Disaster for the State of Arizona \(Notice, 2026-10-19\)\./);
  assert.match(answer.text, /Sources: Federal Register \(read just now\)\. .* I cannot apply for you\.$/);
  assert.equal(answer.sources[1].url, "https://www.federalregister.gov/documents/2026/10/19/2026-21257/x");
});

test("the same list is kept for 30 minutes (the feed is asked once), then asked again; a feed that fails is an error the caller can handle", async () => {
  let clock = 1000000;
  const stub = stubFetch({ grants: GRANTS });
  const live = feeds.createLiveFeeds({ fetchImpl: stub.impl, now: () => clock });
  const first = await live.grants({ audience: "nonprofit" });
  const second = await live.grants({ audience: "nonprofit" });
  assert.equal(stub.calls.length, 1);
  assert.equal(first.fromSavedCopy, undefined); assert.equal(second.fromSavedCopy, true);
  assert.match(feeds.grantsAnswer(second, {}).text, /Sources: Grants\.gov \(read a little while ago\)/);
  await live.grants({ audience: "small business" }); assert.equal(stub.calls.length, 2, "another audience is another list");
  clock += 31 * 60000; await live.grants({ audience: "nonprofit" }); assert.equal(stub.calls.length, 3, "asked again after 30 minutes");
  await assert.rejects(feeds.createLiveFeeds({ fetchImpl: stubFetch({ status: 503 }).impl }).grants({}), /the feed answered 503/);
  await assert.rejects(feeds.createLiveFeeds({ fetchImpl: stubFetch({ grants: { errorcode: 7 } }).impl }).grants({}), /did not answer/);
});

function planner(liveFeeds) {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  return new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: Object.assign(fakeMemory(), { search: async () => [] }), liveFeeds });
}
const ask = (p, text, deterministicOnly = false) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Los_Angeles", deterministicOnly } });

test("through the planner: an open-grants request is answered from the feed with its sources; the spoken-only caller, a missing feed and a failing feed leave it to the checked guide", async () => {
  const stub = stubFetch({ grants: GRANTS, rules: RULES });
  const live = planner(feeds.createLiveFeeds({ fetchImpl: stub.impl }));
  const plan = await ask(live, "What federal grants are open right now for nonprofits?");
  assert.equal(plan.knowledge, "live-feeds:grants");
  assert.match(plan.response, /^Here are the newest federal grants posted on Grants\.gov open to nonprofits/);
  assert.ok(plan.sources.length >= 3);
  assert.deepEqual([plan.steps.length, plan.application], [0, "conversation"]);
  const rules = await ask(live, "What are the latest SBA rules?");
  assert.equal(rules.knowledge, "live-feeds:rules");
  const calls = stub.calls.length;
  const guide = await ask(live, "How do I find grants for my small business?");
  assert.match(guide.knowledge, /^us-small-business:/, "a how-to question keeps the checked guide");
  assert.equal(stub.calls.length, calls);
  const spoken = await ask(live, "What federal grants are open right now for nonprofits?", true);
  assert.doesNotMatch(String(spoken.knowledge || ""), /^live-feeds/, "the spoken-only caller leaves live lookups to its own route");
  assert.equal(stub.calls.length, calls);
  const noFeeds = await ask(planner(undefined), "What federal grants are open right now for nonprofits?");
  assert.doesNotMatch(String(noFeeds.knowledge || ""), /^live-feeds/);
  const failing = await ask(planner(feeds.createLiveFeeds({ fetchImpl: stubFetch({ status: 503 }).impl })), "What federal grants are open right now for nonprofits?");
  assert.doesNotMatch(String(failing.knowledge || ""), /^live-feeds/, "a feed that is down: the guide answers instead");
  const california = await ask(live, "Where can I find grants for Latino-owned businesses in California?");
  assert.equal(california.knowledge, "california-business:ca-grants", "California grants keep the California guide");
});
