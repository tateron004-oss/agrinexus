"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const check = require("../../scripts/check-guide-sources.js");

// A guide's "checked on" date says the page was read then. This is the weekly check that the pages are still there and still say about the same thing: no model, no paid search, one web request per page.

test("every https address the guides cite is collected once, with the guides that cite it (the national, California and state ones among them)", () => {
  const entries = check.collectSources();
  const urls = entries.map(entry => entry.url);
  assert.equal(new Set(urls).size, urls.length);
  assert.ok(entries.length > 300, `${entries.length} addresses`);
  assert.ok(urls.every(url => /^https:\/\/[^\s]+$/.test(url)));
  const find = part => entries.find(entry => entry.url.includes(part));
  assert.ok(find("dgs.ca.gov").guides.includes("california-business"));
  assert.ok(find("sba.gov/counseling/local-assistance/").guides.includes("us-small-business"));
  assert.ok(entries.some(entry => entry.guides.includes("state-entities")), "the state formation pages");
  assert.ok(entries.some(entry => entry.guides.includes("africa-small-business")));
});

test("the words of a page: tags, scripts, styles, comments and entities are gone, one case, one space", () => {
  const html = "<html><head><title>x</title><style>p{color:red}</style></head><body><script>var a = 1;</script><!-- note --><h1>Small  Business &amp; Loans</h1><p>Call&nbsp;us. It&#39;s free.</p><noscript>enable js</noscript></body></html>";
  assert.equal(check.normalizeText(html), "small business & loans call us. it's free.");
  assert.equal(check.normalizeText(null), "");
});

test("a small edit moves a few bits of the fingerprint and a rewritten page moves many", () => {
  const original = Array.from({ length: 400 }, (_, i) => `word${i % 97} topic${i % 31} detail${i % 13}`).join(" ");
  const redated = original.replace("word5 topic5 detail5", "word5 topic5 detail6").replace("word50", "word51");
  const rewritten = Array.from({ length: 400 }, (_, i) => `other${i % 89} subject${i % 29} point${i % 11}`).join(" ");
  const a = check.simhash(original);
  assert.equal(check.simhash(original), a, "the same words, the same fingerprint");
  assert.ok(check.hamming(a, check.simhash(redated)) <= check.CHANGED_BITS, "a small edit is not a change");
  assert.ok(check.hamming(a, check.simhash(rewritten)) > check.CHANGED_BITS, "a rewritten page is");
  assert.equal(check.simhash("two words"), "0000000000000000");
});

function pageOf(text) { return `<html><body><main>${text}</main></body></html>`; }
const LONG = Array.from({ length: 300 }, (_, i) => `the official page says item${i % 41} applies to group${i % 17}`).join(". ");
const OTHER = Array.from({ length: 300 }, (_, i) => `a completely new notice number${i % 53} replaces rule${i % 19}`).join(". ");
function stubFetch(map) {
  const calls = [];
  const impl = async (url) => {
    calls.push(String(url));
    const rule = map[url];
    if (rule instanceof Error) throw rule;
    const { status = 200, body = pageOf(LONG), finalUrl = url, type = "text/html" } = rule || {};
    return { ok: status >= 200 && status < 300, status, url: finalUrl, headers: { get: () => type }, text: async () => body };
  };
  return { impl, calls };
}

test("each page is classified: fine, changed a long way, moved, blocked (a site that refuses a program), broken (twice), and a page never seen is new", async () => {
  const urls = ["https://a.gov/ok", "https://a.gov/changed", "https://a.gov/moved", "https://a.gov/blocked", "https://a.gov/gone", "https://a.gov/down", "https://a.gov/new"];
  const entries = urls.map(url => ({ url, guides: ["x"] }));
  const first = await check.checkAll(entries, null, { fetchImpl: stubFetch({}).impl, pauseMs: 0, now: () => 1000 });
  const snapshot = check.buildSnapshot(first, () => 1000);
  assert.ok(first.every(item => item.state === "ok" && item.isNew), "no earlier snapshot: all are new");
  const known = { ...snapshot, pages: Object.fromEntries(Object.entries(snapshot.pages).filter(([url]) => !url.endsWith("/new"))) };
  const stub = stubFetch({
    "https://a.gov/changed": { body: pageOf(OTHER) },
    "https://a.gov/moved": { finalUrl: "https://a.gov/new-home" },
    "https://a.gov/blocked": { status: 403 },
    "https://a.gov/gone": { status: 404 },
    "https://a.gov/down": new Error("socket hang up")
  });
  const results = await check.checkAll(entries, known, { fetchImpl: stub.impl, pauseMs: 0, now: () => 2000 });
  const state = url => results.find(item => item.url === url);
  assert.equal(state("https://a.gov/ok").state, "ok");
  assert.equal(state("https://a.gov/changed").state, "changed");
  assert.ok(state("https://a.gov/changed").distance > check.CHANGED_BITS);
  assert.equal(state("https://a.gov/moved").state, "moved");
  assert.equal(state("https://a.gov/moved").finalUrl, "https://a.gov/new-home");
  assert.equal(state("https://a.gov/blocked").state, "blocked", "a refusal is not a breakage");
  assert.equal(state("https://a.gov/gone").state, "broken");
  assert.equal(state("https://a.gov/down").state, "broken");
  assert.equal(state("https://a.gov/down").error, "socket hang up");
  assert.equal(state("https://a.gov/new").isNew, true);
  assert.equal(stub.calls.filter(url => url === "https://a.gov/down").length, 2, "a failure is tried twice");
});

test("a server error is tried again and a page that then answers is fine; the www and a trailing slash are not a move", async () => {
  let calls = 0;
  const impl = async url => { calls += 1; if (calls === 1) return { ok: false, status: 503, url, headers: { get: () => "text/html" }, text: async () => "" }; return { ok: true, status: 200, url: "https://www.a.gov/page/", headers: { get: () => "text/html" }, text: async () => pageOf(LONG) }; };
  const [item] = await check.checkAll([{ url: "https://a.gov/page", guides: ["x"] }], null, { fetchImpl: impl, pauseMs: 0 });
  assert.equal(item.state, "ok");
  assert.equal(calls, 2);
});

test("only a page that used to work and is broken now fails the run; the report says what to do for each kind", async () => {
  const entries = ["https://a.gov/was-fine", "https://a.gov/was-broken", "https://a.gov/changed"].map(url => ({ url, guides: ["us-small-business"] }));
  const before = check.buildSnapshot(await check.checkAll(entries, null, { fetchImpl: stubFetch({ "https://a.gov/was-broken": { status: 404 } }).impl, pauseMs: 0, now: () => Date.parse("2026-10-12T00:00:00Z") }), () => Date.parse("2026-10-12T00:00:00Z"));
  const results = await check.checkAll(entries, before, { fetchImpl: stubFetch({ "https://a.gov/was-fine": { status: 410 }, "https://a.gov/was-broken": { status: 404 }, "https://a.gov/changed": { body: pageOf(OTHER) } }).impl, pauseMs: 0 });
  const summary = check.summarize(results, before);
  assert.deepEqual(summary.newlyBroken.map(item => item.url), ["https://a.gov/was-fine"]);
  assert.equal(summary.broken.length, 2);
  assert.equal(summary.changed.length, 1);
  const report = check.renderReport(summary, { checkedOn: "2026-10-19", snapshotDay: "2026-10-12" });
  assert.match(report, /^# Guide source check, 2026-10-19\n\n3 pages the guides cite were checked against the snapshot of 2026-10-12\./);
  assert.match(report, /broken: 2 \(1 new\)/);
  assert.match(report, /## Broken since the last check: the answer that cites it needs a look\n\n- https:\/\/a\.gov\/was-fine \(us-small-business\) - 410/);
  assert.match(report, /## Still broken\n\n- https:\/\/a\.gov\/was-broken/);
  assert.match(report, /## Changed a long way: read the page again and update the answer and its date if needed/);
});

test("the workflow runs weekly and on demand, checks the checker first, and keeps the report and the new snapshot", () => {
  const workflow = fs.readFileSync(path.join(__dirname, "..", "..", ".github", "workflows", "guide-source-check.yml"), "utf8");
  assert.match(workflow, /schedule:\s+- cron: "0 15 \* \* 1"/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /node --test test\/nexus\/guide-source-check\.test\.js/);
  assert.match(workflow, /node scripts\/check-guide-sources\.js --report source-report\.md --candidate source-snapshot\.json/);
  assert.match(workflow, /runs-on: ubuntu-latest/);
  assert.match(workflow, /permissions:\s+contents: read/);
});

test("the saved snapshot is the baseline the weekly check compares with: valid, taken on a day, and covering the pages the guides cite", () => {
  const snapshot = JSON.parse(fs.readFileSync(check.DEFAULT_SNAPSHOT, "utf8"));
  assert.match(snapshot.takenAt, /^\d{4}-\d{2}-\d{2}T/);
  assert.ok(snapshot.count > 300 && Object.keys(snapshot.pages).length === snapshot.count);
  for (const page of Object.values(snapshot.pages)) assert.ok(["ok", "moved", "blocked", "broken", "changed"].includes(page.state), page.state);
  const cited = check.collectSources().map(entry => entry.url);
  const missing = cited.filter(url => !snapshot.pages[url]).length;
  assert.ok(missing / cited.length < 0.25, `${missing} cited pages are not in the snapshot yet: run the check with --update after reading them`);
});
