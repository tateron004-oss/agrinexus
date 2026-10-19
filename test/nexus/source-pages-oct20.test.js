"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const check = require("../../scripts/check-guide-sources.js");
const womens = require("../../nexus/knowledge/womens-health.js");
const states = require("../../nexus/knowledge/state-entities-data.js");
const technology = require("../../nexus/knowledge/small-business-technology.js");
const community = require("../../nexus/knowledge/us-community-support.js");
const business = require("../../nexus/knowledge/us-small-business.js");

// The weekly check of the pages the guides cite found 15 pages that looked broken and 78 that had moved. Each was opened (a browser, not only the program), and the addresses in the guides were corrected; these tests keep the
// check from crying wolf about sites that only refuse a program, and keep the corrected pages from slipping back.
const PAGE = `<html><body><main>${Array.from({ length: 300 }, (_, i) => `the official page says item${i % 41} applies to group${i % 17}`).join(". ")}</main></body></html>`;
function stub(rules) {
  const calls = [];
  const impl = async (url, options = {}) => {
    const agent = String((options.headers && options.headers["user-agent"]) || "");
    calls.push({ url: String(url), browser: /Chrome\//.test(agent) });
    const rule = rules[url] || {};
    const refuses = rule.refusesPrograms && !/Chrome\//.test(agent);
    const status = refuses || rule.alwaysRefuses ? 403 : rule.status || 200;
    return { ok: status >= 200 && status < 300, status, url: rule.finalUrl || url, headers: { get: () => "text/html" }, text: async () => PAGE };
  };
  return { impl, calls };
}
const run = (urls, rules) => check.checkAll(urls.map(url => ({ url, guides: ["x"] })), null, { fetchImpl: stub(rules).impl, pauseMs: 0, now: () => 1000 });

test("a site that turns away the program but answers a browser is fine; one that refuses both is blocked", async () => {
  const results = await run(["https://a.gov/browser-only", "https://a.gov/never", "https://a.gov/plain"], { "https://a.gov/browser-only": { refusesPrograms: true }, "https://a.gov/never": { alwaysRefuses: true } });
  const state = url => results.find(item => item.url === url).state;
  assert.equal(state("https://a.gov/browser-only"), "ok");
  assert.equal(state("https://a.gov/never"), "blocked");
  assert.equal(state("https://a.gov/plain"), "ok");
  const calls = stub({ "https://a.gov/plain": {} });
  await check.checkAll([{ url: "https://a.gov/plain", guides: ["x"] }], null, { fetchImpl: calls.impl, pauseMs: 0 });
  assert.deepEqual(calls.calls.map(call => call.browser), [false], "a page that answers the program is read once, as the program");
});

test("a redirect that only adds a session tag, a language or a default page name is not a move; a different page is", async () => {
  const same = { "https://a.gov/": "https://a.gov/?session=abc", "https://b.gov/start": "https://b.gov/start#top", "https://c.gov/": "https://c.gov/Pages/default.aspx", "https://d.gov/portal": "https://www.d.gov/portal/index.html", "https://e.gov/form": "https://e.gov/form/?Check=1" };
  const moved = { "https://f.gov/old": "https://f.gov/new", "https://g.gov/a": "https://g.gov/a/b", "https://h.gov/": "https://h.gov/Cookie/CookieConsent" };
  const rules = Object.fromEntries([...Object.entries(same), ...Object.entries(moved)].map(([url, finalUrl]) => [url, { finalUrl }]));
  const results = await run(Object.keys(rules), rules);
  for (const url of Object.keys(same)) assert.equal(results.find(item => item.url === url).state, "ok", url);
  for (const url of Object.keys(moved)) assert.equal(results.find(item => item.url === url).state, "moved", url);
});

const everyUrl = () => check.collectSources().map(entry => entry.url);

test("the guides no longer cite the addresses that SBA, the IRS, SAM.gov and others moved or retired", () => {
  const urls = everyUrl();
  for (const old of ["https://www.sba.gov/business-guide/launch-your-business/register-your-business", "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan", "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program", "https://www.sba.gov/funding-programs/loans", "https://www.sba.gov/local-assistance", "https://sam.gov/content/duns-uei", "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online", "https://opa-fpclinicdb.hhs.gov/", "https://studentaid.ed.gov/sa/types/scams", "https://www.mass.gov/info-details/registering-a-public-charity", "https://www.doj.nh.gov/charitable-trusts", "https://tax.nv.gov/Registration", "https://www.ssa.gov/contact/", "https://www.ftc.gov/business-guidance/blog/2023/03/chatbots-deepfakes-voice-clones-ai-deception-sale", "https://calosba.ca.gov/local-direct-assistance/small-business-centers/"]) assert.ok(!urls.includes(old), old);
  for (const now of ["https://www.sba.gov/counseling/launch-your-business/#register-business", "https://www.sba.gov/counseling/plan-your-business/#business-plan", "https://www.sba.gov/certifications/#8a-program", "https://www.sba.gov/loans/", "https://www.sba.gov/counseling/local-assistance/", "https://sam.gov/entity-registration", "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number", "https://reproductivehealthservices.gov/", "https://studentaid.gov/resources/scams", "https://www.mass.gov/info-details/non-profit-organizationspublic-charities-forms", "https://www.doj.nh.gov/bureaus/charitable-trusts-unit", "https://tax.nv.gov/manage-a-business/start-run-a-business/", "https://www.ssa.gov/agency/contact/", "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes", "https://calosba.ca.gov/for-small-businesses-and-non-profits/small-business-centers/"]) assert.ok(urls.includes(now), now);
  assert.equal(urls.filter(url => /sba\.gov\/business-guide/.test(url)).length, 0, "SBA's old business-guide pages are all replaced by their sections");
});

test("an address that is a session or cookie redirect is left as it was written (the 302s), and the sources with fragments are still https addresses", () => {
  const urls = everyUrl();
  for (const kept of ["https://business.idaho.gov/", "https://cis.scc.virginia.gov/", "https://inbiz.in.gov/", "https://onestop.ky.gov/"]) assert.ok(urls.includes(kept), kept);
  assert.ok(urls.every(url => /^https:\/\/[^\s]+$/.test(url)));
});

test("the menopause answer follows the page as it now reads (ages 45 to 55) and carries the date it was read again", () => {
  const answer = womens.womensHealthAnswer("menopause", { us: true });
  assert.match(answer.text, /usually happens between ages 45 and 55/);
  assert.doesNotMatch(answer.text, /45 to 58/);
  assert.match(answer.text, /average age in the US is 52/);
  assert.match(answer.text, /\(checked 19 October 2026\)/);
  assert.match(womens.womensHealthAnswer("cervical-screening", { us: true }).text, /\(checked 13 October 2026\)/, "the other topics keep the date they were read");
});

test("the Massachusetts charity registration note says what the Attorney General's page confirms, and no fee it does not", () => {
  const ma = states.states.find(record => record.code === "MA").nonprofit.charitableSolicitationRegistration;
  assert.equal(ma.url, "https://www.mass.gov/info-details/non-profit-organizationspublic-charities-forms");
  assert.match(ma.feeNote, /must register with the Non-Profits\/Public Charities Division/);
  assert.match(ma.feeNote, /Certificate for Solicitation/);
  assert.doesNotMatch(ma.feeNote, /\$\d/);
});

test("the AI scams answer names a page that is on the FTC's site and says what that page says (cloned voices, verify with a number you know)", () => {
  const topic = technology.TOPICS["ai-scams"];
  assert.ok(topic.sources.includes("ftcDeepfakes"));
  assert.match(technology.SOURCES.ftcDeepfakes.url, /^https:\/\/consumer\.ftc\.gov\/consumer-alerts\/2023\/03\//);
  assert.match(topic.text, /cloned voices/);
  assert.doesNotMatch(topic.text, /fake messages/);
  assert.match(community.SOURCES.ssaContact.url, /ssa\.gov\/agency\/contact\/$/);
  assert.equal(business.SOURCES.scoreFaq.url, "https://www.score.org/score-faqs-business-mentoring-resources-support/");
});
