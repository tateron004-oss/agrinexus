"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const matcher = require("../../public/kyro-money-topics.js");
const guide = require("../../nexus/knowledge/money-guide.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");
const path = require("node:path");

// The money guide for Kenya and Nigeria: ten Kenyan and nine Nigerian topics read from those countries' own regulators on 22 October 2026. Where two official pages disagree the answer says so; what could not be read is said in the answer.
const LOCAL = Object.keys(guide.TOPICS).filter(id => /^(ke|ng)-/.test(id));
const KE = LOCAL.filter(id => id.startsWith("ke-")), NG = LOCAL.filter(id => id.startsWith("ng-"));

test("which questions get which Kenyan or Nigerian topic", () => {
  const yes = [
    ["Is my money safe in a Kenyan bank?", "ke-bank-deposit-insurance"], ["How does the KDIC protect my deposits?", "ke-bank-deposit-insurance"], ["How do I check if a SACCO is licensed?", "ke-sacco"], ["What does SASRA do?", "ke-sacco"], ["What is a chama?", "ke-chama-groups"], ["How does table banking work in Kenya?", "ke-chama-groups"],
    ["How is M-Pesa regulated in Kenya?", "ke-mobile-money"], ["How do I stop a wrong M-Pesa transaction?", "ke-mobile-money"], ["Are digital loan apps in Kenya legal?", "ke-digital-loans"], ["How do I get my CRB report?", "ke-credit-reference"], ["Can I be blacklisted by a Kenyan credit bureau?", "ke-credit-reference"],
    ["How do I buy Treasury bills in Kenya?", "ke-saving-investing"], ["What is M-Akiba?", "ke-saving-investing"], ["What is NSSF in Kenya?", "ke-pension-retirement"], ["How much is the SHA contribution?", "ke-pension-retirement"], ["How do I file my KRA returns?", "ke-tax-personal"], ["How do I get a KRA PIN?", "ke-tax-personal"],
    ["How do I spot an investment scam in Kenya?", "ke-scams-fraud"], ["Is this pyramid scheme in Nairobi legal?", "ke-scams-fraud"],
    ["How much does the NDIC cover?", "ng-bank-deposit-insurance"], ["What is a BVN?", "ng-bank-deposit-insurance"], ["What is ajo?", "ng-microfinance-cooperatives"], ["Is my esusu group safe?", "ng-microfinance-cooperatives"], ["Is my microfinance bank in Nigeria safe?", "ng-microfinance-cooperatives"],
    ["How do I complain about a wrong transfer in Nigeria?", "ng-mobile-money-fintech"], ["Are OPay and PalmPay licensed?", "ng-mobile-money-fintech"], ["How do I check a loan app in Nigeria?", "ng-digital-loans"], ["What are the FCCPC rules for loan apps?", "ng-digital-loans"], ["How do I get my credit report in Nigeria?", "ng-credit-bureaus"],
    ["How do I buy FGN savings bonds?", "ng-saving-investing"], ["How do I buy shares on the NGX?", "ng-saving-investing"], ["How do I open a PenCom RSA?", "ng-pension"], ["What is the Micro Pension Plan in Nigeria?", "ng-pension"], ["How does personal income tax work in Nigeria?", "ng-tax-personal"], ["How do I get a TIN in Nigeria?", "ng-tax-personal"],
    ["How do I spot a Ponzi scheme in Nigeria?", "ng-scams-fraud"], ["How do I report a scam to the EFCC?", "ng-scams-fraud"],
    // the American topics keep their routing
    ["How do I make a budget?", "money-spending-plan"], ["What does FDIC insurance cover?", "money-bank-account"], ["How do I check my credit report?", "money-credit"]
  ];
  for (const [text, id] of yes) assert.equal(matcher.moneyTopic(text), id, text);
  assert.deepEqual([...new Set(yes.map(([, id]) => id).filter(id => /^(ke|ng)-/.test(id)))].sort(), [...LOCAL].sort(), "every Kenyan and Nigerian topic is reachable");
  // a question that names both countries, a business or coins, or asks for an amount, is not the local guide's
  for (const text of ["Should I buy bitcoin in Kenya?", "How do I get a loan for my business in Nigeria?", "Send 500 shillings by M-Pesa", "Log an expense of 500 naira", "Is a SACCO in Kenya better than a bank in Nigeria?"]) assert.equal(matcher.moneyTopic(text), null, text);
});

test("every Kenyan and Nigerian answer names official pages, the date, and the closing line; none promises, files or names a company", () => {
  const known = /^https:\/\/(?:www\.)?(?:kdic\.go\.ke|centralbank\.go\.ke|sasra\.go\.ke|new\.kenyalaw\.org|cma\.or\.ke|nse\.co\.ke|nssf\.or\.ke|sha\.go\.ke|kra\.go\.ke|odpc\.go\.ke|cak\.go\.ke|ndic\.gov\.ng|cbn\.gov\.ng|fccpc\.gov\.ng|sec\.gov\.ng|ngxgroup\.com|dmo\.gov\.ng|efcc\.gov\.ng|pencom\.gov\.ng|nass\.gov\.ng|tat\.gov\.ng)\//;
  const companies = /\b(?:Safaricom|Airtel|Telkom|OPay|PalmPay|Moniepoint|Kuda|Paystack|Flutterwave|Interswitch|Heritage Bank|Equity Bank|KCB|Tala|Branch|Binance|Bitcoin|Vanguard)\b/;
  assert.equal(KE.length, 10); assert.equal(NG.length, 9);
  for (const id of LOCAL) {
    const answer = guide.moneyAnswer(id);
    assert.ok(answer && answer.topic === id, id);
    assert.ok(answer.sources.length >= 2 && answer.sources.length <= 9, `${id}: a list short enough to hear`);
    assert.ok(answer.sources.every(source => known.test(source.url)), `${id}: official pages only (${answer.sources.map(s => s.url).filter(u => !known.test(u)).join(", ")})`);
    assert.match(answer.text, /Sources: .+ \(checked 22 October 2026\)\. This is general education, not financial, tax or legal advice/, id);
    assert.doesNotMatch(answer.text, /^These are United States rules/, `${id}: a Kenyan or Nigerian answer is not warned as American`);
    assert.doesNotMatch(answer.text, /\byou must (?:file|apply)\b|\bguarantee[sd]? (?:a |your )?(?:return|profit)\b|\bI (?:will|can) (?:file|send|apply|sign|transfer|invest|buy|sell)\b|\byou (?:should|need to) (?:buy|sell|invest in) /i, id);
    if (id !== "ke-credit-reference") assert.doesNotMatch(answer.text, companies, `${id}: names no company`);
    assert.ok(answer.text.length < 3200, `${id}: short enough to read aloud (${answer.text.length})`);
    assert.match(answer.text, /I could not|I found no|I did not find|I did not read|No official page|I will not|cannot give you|cannot say|cannot confirm|not yet in force|may have changed/i, `${id}: says what it could not read or confirm`);
  }
});

test("the figures are the ones the pages gave, and where two pages disagree the answer says so", () => {
  const text = id => guide.moneyAnswer(id).text;
  const facts = {
    "ke-bank-deposit-insurance": [/KSh 500,000 per depositor/, /1 July 2020/, /KSh 100,000/, /37 commercial banks, 1 mortgage finance institution and 14 microfinance banks/, /names SACCO deposits as not covered/, /\+254 709 043 000/],
    "ke-sacco": [/Sacco Societies Act of 2008/, /KSh 100 million/, /Deposit Guarantee Fund/, /KSh 100,000 per member/, /fine of up to KSh 500,000, up to three years in prison/, /\+254 20 2935101/, /do not agree between its pages/],
    "ke-mobile-money": [/National Payment System Act of 2011/, /44 authorized payment service providers/, /10 August 2026/, /KSh 70,000 per transaction and KSh 1,000,000/, /at least 7 days' notice/, /not yet in force/, /cannot give you today's limits/],
    "ke-digital-loans": [/Digital Credit Providers Regulations of 2022/, /281 entries/, /29 September 2026/, /KSh 1,000 or less/, /30 days/, /0207801800/, /ask me about it by name/],
    "ke-credit-reference": [/at least once a year/, /within five working days/, /21 days/, /up to 100 words/, /five years after the debt is finally settled/, /Creditinfo Kenya/],
    "ke-saving-investing": [/licensees\.cma\.or\.ke/, /91, 182 or 364 days/, /KSh 50,000/, /KSh 3,000/, /DhowCSD/, /not covered by deposit insurance/, /Rates change at every auction/],
    "ke-pension-retirement": [/6 percent of pensionable earnings each/, /about 5 percent/, /KSh 200/, /\*222#/, /KSh 4,800/, /2\.75 percent/, /KSh 300 a month/, /0800 720 601/, /could not read any page of the Retirement Benefits Authority/],
    "ke-tax-personal": [/KSh 288,000/, /35 percent above 9,600,000/, /28,800 a year/, /1 January to 30 June 2026/, /30 April/, /15 percent on bank interest/, /1\.5 percent/, /31 December 2026/],
    "ke-scams-fraud": [/11 September 2026/, /16 entities/, /licensees\.cma\.or\.ke/, /0207801800/, /could not read the DCI's site/],
    "ke-chama-groups": [/No official page I loaded uses the words chama or table banking/, /at least 10 people, or 5 for a special-interest group/, /within 14 days/, /four years/, /does not insure SACCOs or groups/],
    "ng-bank-deposit-insurance": [/N500,000/, /N200,000/, /N5,000,000/, /I will not pick one/, /0800 6342 4357/, /BVN/, /Tier 2 and Tier 3/, /within 30 days/, /claimscomplaints@ndic\.gov\.ng/],
    "ng-microfinance-cooperatives": [/179 microfinance banks and 4 primary mortgage banks/, /46 more microfinance banks on 1 July 2026/, /89 of the closed banks/, /no readable official page on cooperative societies, or on ajo and esusu/],
    "ng-mobile-money-fintech": [/December 2023 circular/, /cpd@cbn\.gov\.ng/, /two weeks, or 30 days/, /cannot give you wallet limits/, /pass-through insurance/],
    "ng-digital-loans": [/20 July 2026/, /watchlist/, /call logs, contacts, photos or gallery/, /24 hours/, /N100 million/, /\+234 800 000 2121/, /no explicit wording banning harassment or shaming/],
    "ng-credit-bureaus": [/N1,000,000/, /N100,000/, /I found no official page that lists the licensed private credit bureaus/],
    "ng-saving-investing": [/38 operators/, /five types/, /CSCS/, /13\.071 percent/, /14\.071 percent/, /N5,000/, /N50,000,000/, /only the October offer/],
    "ng-pension": [/18 percent/, /10 percent from the employer and 8 percent/, /Micro Pension Plan/, /25 percent/, /40 percent for emergencies and 60 percent for retirement/, /48 hours/, /complaints@pencom\.gov\.ng/, /uploaded in September 2023/],
    "ng-tax-personal": [/0 percent on the first N800,000/, /25 percent above N50,000,000/, /N500,000/, /31 January/, /N50,000 in the first month/, /could not read the Nigeria Revenue Service's own pages/],
    "ng-scams-fraud": [/38|whistleblowing form/, /\+234 209 462 1168/, /\+234 809 332 2644/, /Investor Protection Fund/, /could not read the EFCC's scam-advice pages/]
  };
  assert.deepEqual(Object.keys(facts).sort(), [...LOCAL].sort(), "every local topic has its facts checked");
  for (const [id, list] of Object.entries(facts)) for (const fact of list) assert.match(text(id), fact, `${id}: ${fact}`);
});

test("a person in Kenya or Nigeria who names no country gets the local answer where there is one, and the American warning where there is not", () => {
  assert.equal(guide.moneyAnswer("money-bank-account", { us: false, country: "ke" }).topic, "ke-bank-deposit-insurance");
  assert.equal(guide.moneyAnswer("money-bank-account", { us: false, country: "ng" }).topic, "ng-bank-deposit-insurance");
  assert.equal(guide.moneyAnswer("money-credit", { us: false, country: "ke" }).topic, "ke-credit-reference");
  assert.equal(guide.moneyAnswer("money-credit", { us: false, country: "ng" }).topic, "ng-credit-bureaus");
  assert.equal(guide.moneyAnswer("money-retirement-accounts", { us: false, country: "ng" }).topic, "ng-pension");
  assert.equal(guide.moneyAnswer("money-scams", { us: false, country: "ke" }).topic, "ke-scams-fraud");
  assert.equal(guide.moneyAnswer("money-costly-borrowing", { us: false, country: "ke" }).topic, "ke-digital-loans");
  // in the United States nothing changes
  assert.equal(guide.moneyAnswer("money-bank-account", { us: true, country: "ke" }).topic, "money-bank-account");
  assert.equal(guide.moneyAnswer("money-bank-account").topic, "money-bank-account");
  // an American topic with no local answer keeps the warning
  const collectors = guide.moneyAnswer("money-debt-collectors", { us: false, country: "ng" });
  assert.equal(collectors.topic, "money-debt-collectors"); assert.match(collectors.text, /^These are United States rules and guidance, from American pages\./);
  // the ideas get a pointer to the local place to check an offer
  assert.match(guide.moneyAnswer("money-what-to-invest", { us: false, country: "ke" }).text, /^The ideas here hold anywhere[\s\S]*Kenya's Capital Markets Authority/);
  assert.match(guide.moneyAnswer("money-investing-basics", { us: false, country: "ng" }).text, /^The ideas here hold anywhere[\s\S]*Nigeria's Securities and Exchange Commission/);
  assert.doesNotMatch(guide.moneyAnswer("money-overview", { us: false, country: "ke" }).text, /^These are United States rules|^The ideas here hold anywhere/);
});

const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
const ask = (text, context = { timeZone: "America/Chicago" }) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

test("through the planner, with no AI model; a question that names the country, or comes from a device there, is answered from the local topic", async () => {
  for (const [text, context, id] of [
    ["How do I check if a SACCO is licensed?", { timeZone: "America/Chicago" }, "ke-sacco"], ["How much does the NDIC cover?", { timeZone: "America/Chicago" }, "ng-bank-deposit-insurance"], ["What is a chama?", { timeZone: "Africa/Nairobi" }, "ke-chama-groups"],
    ["How do I get a KRA PIN?", { timeZone: "America/Los_Angeles" }, "ke-tax-personal"], ["How do I open a PenCom RSA?", { timeZone: "Africa/Lagos" }, "ng-pension"],
    // no country named: the device decides
    ["What does deposit insurance cover?", { timeZone: "Africa/Nairobi" }, "ke-bank-deposit-insurance"], ["How do I check my credit report?", { timeZone: "Africa/Lagos" }, "ng-credit-bureaus"], ["How do I spot an investment scam?", { timeZone: "Africa/Nairobi" }, "ke-scams-fraud"]
  ]) {
    const plan = await ask(text, context);
    assert.equal(plan.knowledge, `money-guide:${id}`, text); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
    assert.ok(plan.sources.length >= 2); assert.match(plan.response, /checked 22 October 2026/);
    assert.doesNotMatch(plan.response, /^These are United States rules/, text);
  }
  // in the United States the same words still get the American topics
  const us = await ask("What does FDIC insurance cover?", { timeZone: "America/Chicago" });
  assert.equal(us.knowledge, "money-guide:money-bank-account");
  // a topic with no local answer, asked from Nairobi, is warned as American
  const collectors = await ask("A debt collector keeps calling me, what are my rights?", { timeZone: "Africa/Nairobi" });
  assert.equal(collectors.knowledge, "money-guide:money-debt-collectors"); assert.match(collectors.response, /^These are United States rules and guidance/);
  // coins and amounts and a business are still not the guide's
  const coin = await ask("Should I buy bitcoin in Kenya?");
  assert.match(coin.response, /I can't tell you what to buy, sell or trade/); assert.equal(coin.knowledge, undefined, "the investing guard answers it, not the guide");
  await assert.rejects(ask("Send 500 shillings by M-Pesa"), /must not reach the AI planning model|guide must answer/);
  // a business's loan is the small business guide's, not this one
  const business = await ask("How do I get a loan for my business in Nigeria?");
  assert.doesNotMatch(String(business.knowledge || ""), /^money-guide:/, "answered by another guide, not by this one");
});

test("the weekly check sees every Kenyan and Nigerian page, and each has a live voice case with its key fact", () => {
  const collected = collectSources(path.join(__dirname, "../../nexus/knowledge"));
  for (const id of LOCAL) for (const key of guide.TOPICS[id].sources) assert.ok(collected.some(entry => entry.url === guide.SOURCES[key].url && entry.guides.includes("money-guide")), `${key} is checked weekly (https only)`);
  const cases = require("../../scripts/live-voice-suite/cases/money-africa.js");
  assert.equal(cases.length, LOCAL.length);
  const seen = new Set();
  for (const entry of cases) {
    const id = matcher.moneyTopic(entry.say);
    assert.ok(id && /^(ke|ng)-/.test(id), entry.say); seen.add(id);
    assert.ok(guide.moneyAnswer(id).text.includes(entry.expect.text), `${entry.id}: ${entry.expect.text}`);
    assert.doesNotMatch(entry.expect.text, /[$^*+?()[\]{}|\\]/, `${entry.id}: no regular-expression characters in a case key`);
  }
  assert.deepEqual([...seen].sort(), [...LOCAL].sort(), "every local topic has a live case");
  const all = require("../../scripts/live-voice-suite/cases/index.js").ALL.map(entry => entry.id);
  for (const entry of cases) assert.ok(all.includes(entry.id), entry.id);
});
