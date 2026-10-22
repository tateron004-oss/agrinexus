"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const matcher = require("../../public/kyro-money-topics.js");
const guide = require("../../nexus/knowledge/money-guide.js");
const { investmentGuardReply } = require("../../nexus/brain/investment-guard.js");
const { contentGuardReply } = require("../../nexus/brain/content-guard.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// A checked guide to a person's own money: a spending plan, income that changes, a bank account, savings, credit and debt, costly loans, collectors, student loans, a home, saving versus investing, how to choose, fees, retirement accounts,
// brokerage and children's accounts, scams and keeping accounts safe. Every figure and rule was read from an official page loaded on 22 October 2026 and is said in the page's own terms; what a page does not say, the answer says it does not
// say. Asked for by the owner as a community financial education program; he approved, the same day, that "what should I invest in?" is answered by teaching how to choose and never by naming a stock, fund, coin, broker or app.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const ALL = Object.keys(guide.TOPICS).filter(id => id.startsWith("money-")); // the American topics; the Kenyan and Nigerian ones are in money-guide-africa-oct22.test.js

test("which questions get which topic", () => {
  const yes = [
    ["How do I make a budget?", "money-spending-plan"], ["I live paycheck to paycheck, where do I start?", "money-spending-plan"], ["What is a bill calendar?", "money-spending-plan"],
    ["My income changes every month, how do I plan?", "money-irregular-income"], ["How do I handle seasonal income?", "money-irregular-income"], ["Do I pay estimated taxes if I do gig work?", "money-irregular-income"],
    ["How much should I save for an emergency fund?", "money-savings"], ["I can't save anything, what can I do?", "money-savings"], ["What is an automatic transfer to savings?", "money-savings"],
    ["I need a bank account but I have bad credit", "money-bank-account"], ["Is my money safe at the bank?", "money-bank-account"], ["What does FDIC insurance cover?", "money-bank-account"], ["What is a credit union?", "money-bank-account"], ["I don't have a bank account, what are my options?", "money-bank-account"],
    ["Where can I get free tax help?", "money-tax-help"], ["What is the earned income tax credit?", "money-tax-help"], ["How do I find a nonprofit credit counselor?", "money-free-help"], ["How do I find a HUD housing counselor?", "money-free-help"],
    ["How do I check my credit report?", "money-credit"], ["How do I build credit?", "money-credit"], ["What is a credit score?", "money-credit"], ["How do I dispute an error on my credit report?", "money-credit"],
    ["How do I pay off my credit card debt?", "money-debt-plan"], ["Which debt should I pay first?", "money-debt-plan"], ["I can't pay my bills, what should I do?", "money-debt-plan"], ["What is APR?", "money-debt-plan"],
    ["What is a payday loan?", "money-costly-borrowing"], ["Are title loans a good idea?", "money-costly-borrowing"], ["How does buy now pay later work?", "money-overdraft-bnpl"], ["What are overdraft fees?", "money-overdraft-bnpl"],
    ["A debt collector keeps calling me, what are my rights?", "money-debt-collectors"], ["Can they garnish my wages?", "money-debt-collectors"], ["What is a time-barred debt?", "money-debt-collectors"],
    ["How do I repay my student loans?", "money-student-loans"], ["What is income-driven repayment?", "money-student-loans"],
    ["How do I buy a house with little money down?", "money-homeownership"], ["What are closing costs?", "money-homeownership"], ["I'm behind on my mortgage, what can I do?", "money-housing-trouble"], ["I'm facing eviction, what can I do?", "money-housing-trouble"], ["What is rent to own?", "money-housing-trouble"],
    ["What is the difference between saving and investing?", "money-investing-basics"], ["How does compound interest work?", "money-investing-basics"], ["What is inflation?", "money-investing-basics"], ["How do I start investing?", "money-investing-basics"], ["Can I lose money investing?", "money-investing-basics"],
    ["What is a mutual fund?", "money-investment-types"], ["What's the difference between stocks and bonds?", "money-investment-types"], ["What is an index fund?", "money-investment-types"], ["What is a target-date fund?", "money-investment-types"],
    ["What is a certificate of deposit?", "money-cash-like"], ["What is a money market fund?", "money-cash-like"], ["How do Treasury bills work?", "money-cash-like"],
    ["What should I invest in?", "money-what-to-invest"], ["Where should I invest my savings?", "money-what-to-invest"], ["What is the safest investment for my savings?", "money-what-to-invest"], ["How do I choose investments?", "money-what-to-invest"], ["Tell me what to invest in", "money-what-to-invest"],
    ["What are investment fees?", "money-fees"], ["What is an expense ratio?", "money-fees"],
    ["What is a 401(k)?", "money-retirement-accounts"], ["What is an employer match?", "money-retirement-accounts"], ["How much should I save for retirement?", "money-retirement-accounts"], ["What is vesting?", "money-retirement-accounts"],
    ["Should I get a Roth IRA?", "money-ira"], ["What's the difference between a Roth and a traditional IRA?", "money-ira"], ["What is the Saver's Credit?", "money-ira"],
    ["How do I open a brokerage account?", "money-brokerage-and-kids"], ["What is a 529 plan?", "money-brokerage-and-kids"], ["How can I invest for my kids?", "money-brokerage-and-kids"], ["What is SIPC?", "money-brokerage-and-kids"],
    ["How do I spot an investment scam?", "money-scams"], ["Is this investment legit?", "money-scams"], ["How do I spot a crypto scam?", "money-scams"], ["How do I check a financial adviser?", "money-scams"],
    ["Someone stole my identity, what do I do?", "money-account-security"], ["How do I protect my accounts?", "money-account-security"], ["Why should I review my beneficiaries?", "money-account-security"],
    ["I want to learn about money", "money-overview"], ["Can you help me with my finances?", "money-overview"], ["How does money work?", "money-overview"]
  ];
  for (const [text, id] of yes) assert.equal(matcher.moneyTopic(text), id, text);
  assert.deepEqual([...new Set(yes.map(([, id]) => id))].sort(), [...ALL].sort(), "every topic is reachable");
});

test("orders, records, a business's money, buying or trading coins, public money, emergencies and everyday talk are never taken", () => {
  for (const text of ["Log an expense of 500 for fuel", "Set a budget of 200 for fuel", "Show my expenses", "How much did I spend this week?", "What do I owe?", "Show my income", "Transfer 500 to savings", "I have 5000 dollars, what should I do with it?",
    "How do I make a budget for my business?", "How do I get a business loan?", "What is the profit on my shop?", "Send an invoice to Mama Grace", "Pay my electricity bill", "Do I need to pay estimated taxes on my catering income?", "Remind me to pay my bills tomorrow", "Call my bank",
    "Should I buy bitcoin?", "What is bitcoin?", "Which coin should I invest in?", "What stocks should I buy?", "What is the best stock to buy?", "Which fund should I invest in?", "Which broker is best?", "Where should I invest in forex?", "Tell me about day trading",
    "What is the national debt?", "What is the federal budget?", "Should I sell my maize now?", "What is the price of maize?", "How do I save a file?", "What is the weather in Nairobi?", "Play some music",
    "I want to end my life because of my debt", "I think I am having a heart attack", "", "x".repeat(400)]) assert.equal(matcher.moneyTopic(text), null, text);
});

test("the open question 'what should I invest in?' is no longer refused, and a question that asks for a pick still is", () => {
  for (const text of ["what should I invest in", "where should I invest my savings", "what is the safest investment for my savings", "tell me what to invest in", "how do I choose investments", "should I invest"]) {
    assert.equal(investmentGuardReply(text), null, `${text}: left to the money guide`);
    assert.equal(contentGuardReply(text), null, `${text}: no content guard answers it either`);
    assert.equal(matcher.moneyTopic(text), "money-what-to-invest", `${text}: and the guide takes it`);
  }
  for (const text of ["what stocks should I buy", "what is the best stock to buy", "which fund should I invest in", "what funds should I invest in", "which coin should I invest in", "should I buy bitcoin", "which broker is best for forex", "recommend a good trading platform",
    "will bitcoin go up this year", "what is the safest fund for my savings", "should I put my savings in ethereum", "should I borrow money to buy crypto", "guaranteed returns of 10% a week deposit now", "how can I get rich with crypto", "should I sell my shares", "which bank should I invest in"]) {
    assert.ok(investmentGuardReply(text), `${text}: still refused`);
  }
});

test("every answer names official pages, the date they were read, and the closing line; none promises, files or tells you to buy anything", () => {
  const known = /^https:\/\/(?:www\.)?(?:consumerfinance\.gov|files\.consumerfinance\.gov|fdic\.gov|ncua\.gov|irs\.gov|investor\.gov|consumer\.ftc\.gov|treasurydirect\.gov|fiscal\.treasury\.gov|dol\.gov|hud\.gov|usa\.gov|studentaid\.gov)\//;
  const products = /\b(?:Vanguard|Fidelity|Schwab|Robinhood|Coinbase|Binance|Bitcoin|Ethereum|Dogecoin|Merrill|E\*TRADE|Wealthfront|Betterment|Acorns|SPY|VTI|VOO|QQQ|Apple|Tesla)\b/;
  for (const id of ALL) {
    const answer = guide.moneyAnswer(id);
    assert.ok(answer && answer.topic === id, id);
    if (id === "money-overview") assert.ok(answer.sources.length >= 1, id);
    assert.ok(answer.sources.length >= 1 && answer.sources.length <= 9, `${id}: a list short enough to hear`);
    assert.ok(answer.sources.every(source => known.test(source.url)), `${id}: official pages only`);
    assert.match(answer.text, /Sources: .+ \(checked 22 October 2026\)\. (?:This is general education, not financial, tax or legal advice|I am not a financial adviser, lawyer or tax professional)/, id);
    assert.doesNotMatch(answer.text, /\byou must (?:file|apply)\b|\bguarantee[sd]? (?:a |your )?(?:return|profit|income)\b|\bwill (?:definitely|certainly)\b|\bI (?:will|can) (?:file|send|apply|sign|transfer|invest|buy|sell)\b|\byou (?:should|need to) (?:buy|sell|invest in|put your money in) /i, id);
    assert.doesNotMatch(answer.text, products, `${id}: names no product, company, coin or ticker`);
    assert.ok(answer.text.length < 3600, `${id}: short enough to read aloud (${answer.text.length})`);
  }
  assert.equal(guide.moneyAnswer("nonsense"), null);
  for (const key of Object.keys(guide.SOURCES)) assert.match(guide.SOURCES[key].url, /^https:\/\//, key);
  for (const id of ALL) for (const key of guide.TOPICS[id].sources) assert.ok(guide.SOURCES[key], `${id} names an unknown source ${key}`);
  for (const key of Object.keys(guide.SOURCES)) assert.ok(Object.keys(guide.TOPICS).some(id => guide.TOPICS[id].sources.includes(key)), `${key} is cited by some answer`);
});

test("the figures are the ones the pages gave, and what a page does not say is said not to be said", () => {
  const text = id => guide.moneyAnswer(id).text;
  const facts = {
    "money-overview": [/six steps/, /14 modules/, /Money Smart for Adults/, /never need an account number or a password/, /not a financial adviser/],
    "money-spending-plan": [/four steps/, /bill due dates on a calendar/, /just one week/, /no percentage rule/],
    "money-irregular-income": [/\$1,000 or more/, /90 percent of this year's tax or 100 percent of last year's tax/, /15 April, 15 June and 15 September 2026 and 15 January 2027/, /15\.3 percent/, /\$400 or more/, /will not invent one/],
    "money-bank-account": [/\$250,000/, /EDIE/, /BankFind/, /\$30 or more/, /Bank On/, /800-967-6857/, /30 September 2025/, /could not read the Social Security pages/],
    "money-savings": [/no dollar or month target/, /Form 8888/, /\$10,000 a year/, /4\.26 percent/, /\$465\.84/, /no official page that compares savings accounts/],
    "money-free-help": [/Financial Counseling Association of America/, /National Foundation for Credit Counseling/, /800-569-4287/, /call 211/, /1-844-872-4681/],
    "money-tax-help": [/\$70,244/, /\$89,000/, /\$11,950 for tax year 2025/, /\$649 with no child/, /\$8,046 with three or more/, /800-906-9887/],
    "money-credit": [/once a week for free at AnnualCreditReport\.com/, /877-322-8228/, /300 to 850/, /no more than 30 percent/, /up to 7 years/, /three business days/, /within 60 days/],
    "money-debt-plan": [/debt worksheet/, /36 months/, /prioritizing-bills/, /48 months or more/, /highest-interest-first or smallest-balance-first/],
    "money-costly-borrowing": [/almost 400 percent/, /\$345 in two weeks/, /\$45 again/, /cannot be arrested/, /25 percent a month/, /855-411-2372/, /no official page on pawn loans/],
    "money-overdraft-bnpl": [/\$30 or more/, /no grace period/, /do not report on-time payments/, /no official dollar figure for overdraft fees/],
    "money-debt-collectors": [/before 8 in the morning or after 9 at night/, /more than seven times in seven days/, /30 days/, /5 days/, /two months of directly deposited federal benefits/, /3 to 6 years/],
    "money-student-loans": [/1-800-433-3243/, /270 days/, /120 qualifying monthly payments/, /1 July 2027/, /never have to pay for help/, /1-800-621-3115/],
    "money-homeownership": [/four steps/, /three business days/, /3\.5 percent/, /\$10,000 from an IRA/, /three-page form/, /five-page form/],
    "money-housing-trouble": [/36 days/, /45 days/, /888-995-4673/, /contract for deed/, /866-674-6327/],
    "money-investing-basics": [/\$465\.84/, /\$1,577\.50/, /18 percent or more/, /five years away or less/, /about one year in three/, /not federally insured/],
    "money-investment-types": [/last in line/, /not guaranteed or insured by the FDIC or any government agency/, /funds with the same target date can differ/, /none guarantees retirement income/],
    "money-cash-like": [/\$250,000/, /Brokered CDs/, /4 to 52 weeks/, /full faith and credit/],
    "money-what-to-invest": [/I will not name a stock, fund, coin, broker, bank or app/, /five years away or less/, /an account, and a fund is an investment you hold inside it/, /Form CRS/, /does not mention an employer match/, /five questions/],
    "money-fees": [/0\.25 percent/, /\$208,000/, /\$179,000/, /12b-1/, /\$9,500/, /Fund Analyzer/, /no page I read says what counts as a low expense ratio/],
    "money-retirement-accounts": [/\$24,500/, /\$11,250/, /50 percent of your balance or \$50,000/, /four choices/, /cliff vesting is 0 percent under three years/, /does not by itself invest the money/],
    "money-ira": [/\$7,500/, /\$8,600/, /\$153,000 and \$168,000/, /\$81,000 and \$91,000/, /6 percent tax/, /\$40,250/, /sweep program/],
    "money-brokerage-and-kids": [/\$500,000/, /\$250,000 for cash/, /\$20,000 a year/, /margin account/, /found no official investing page on custodial accounts/, /\$1,000 federal pilot payment/],
    "money-scams": [/\$7\.9 billion/, /Affinity fraud/, /Never pay to recover money/, /Ponzi/],
    "money-account-security": [/at least 15 characters/, /two-factor authentication/, /signed and witnessed consent/, /free one-year fraud alert/, /will not state that as an official rule/]
  };
  assert.deepEqual(Object.keys(facts).sort(), [...ALL].sort(), "every topic has its facts checked");
  for (const [id, list] of Object.entries(facts)) for (const fact of list) assert.match(text(id), fact, `${id}: ${fact}`);
});

test("the answer to 'what should I invest in?' teaches how to choose and names nothing to buy", () => {
  const answer = guide.moneyAnswer("money-what-to-invest").text;
  for (const fact of [/your goal, your time horizon, and your ability and willingness to lose some or all of the money/, /insured bank or credit union account/, /index funds as a low-cost, tax-efficient and diversified way to invest/, /target-date funds as a mix that grows more conservative/,
    /None of these prevents losses/, /is the seller licensed, is the offer registered, how do the risks compare with the rewards, do you understand it, and where can you turn for help/, /ask how they are paid/]) assert.match(answer, fact);
  assert.doesNotMatch(answer, /\b(?:best|top|safest) (?:stock|fund|coin|etf|broker)s?\b|\bbuy (?:shares|stocks|bitcoin|crypto)\b/i);
});

test("outside the United States only the ideas are offered, with a warning that the pages and protections are American", () => {
  const kenya = guide.moneyAnswer("money-debt-collectors", { us: false, country: "ke" }); // (a topic with no Kenyan answer; the bank account topic has one)
  assert.match(kenya.text, /^These are United States rules and guidance, from American pages\./);
  const ideas = guide.moneyAnswer("money-spending-plan", { us: false, country: "ng" });
  assert.match(ideas.text, /^The ideas here hold anywhere, but the pages are from the United States/);
  assert.doesNotMatch(guide.moneyAnswer("money-bank-account").text, /^These are United States rules/, "a person in the United States is not told that");
  assert.doesNotMatch(guide.moneyAnswer("money-overview", { us: false, country: "ke" }).text, /^These are United States rules/);
});

const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
const ask = (text, context = { timeZone: "America/Chicago" }) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

test("through the planner, with no AI model; a person's money question is answered from the checked guide, 'what should I invest in?' included", async () => {
  for (const [text, id] of [["How do I make a budget?", "money-spending-plan"], ["What does FDIC insurance cover?", "money-bank-account"], ["How do I check my credit report?", "money-credit"], ["A debt collector keeps calling me, what are my rights?", "money-debt-collectors"],
    ["What is a payday loan?", "money-costly-borrowing"], ["What is a 401(k)?", "money-retirement-accounts"], ["What should I invest in?", "money-what-to-invest"], ["Where should I invest my savings?", "money-what-to-invest"], ["How do I spot an investment scam?", "money-scams"]]) {
    const plan = await ask(text);
    assert.equal(plan.knowledge, `money-guide:${id}`, text); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
    assert.ok(plan.sources.length >= 1); assert.match(plan.response, /checked 22 October 2026/);
    assert.doesNotMatch(plan.response, /^These are United States rules/, "in the United States");
  }
  const invest = await ask("What should I invest in?");
  assert.match(invest.response, /I will not name a stock, fund, coin, broker, bank or app/); assert.ok(invest.sources.some(source => /investor\.gov/.test(source.url)));
  // a question that asks for a pick is still refused, before the model or the guide
  const pick = await ask("Which coin should I invest in?");
  assert.match(pick.response, /I can't tell you what to buy, sell or trade/); assert.equal(pick.knowledge, undefined);
  // a question that names Kenya, or a device in Nairobi's time zone, is not answered as if American rules applied
  const named = await ask("A debt collector keeps calling me in Kenya, what are my rights?", { timeZone: "America/Los_Angeles" });
  assert.equal(named.knowledge, "money-guide:money-debt-collectors"); assert.match(named.response, /^These are United States rules and guidance/);
  // (a Kenyan bank question is the Kenyan topic's: see money-guide-africa-oct22.test.js)
  const nairobi = await ask("How do I make a budget?", { timeZone: "Africa/Nairobi" });
  assert.equal(nairobi.knowledge, "money-guide:money-spending-plan"); assert.match(nairobi.response, /^The ideas here hold anywhere/);
  // what is not the guide's keeps its own route (here it reaches the AI model, which this test forbids)
  for (const text of ["Log an expense of 500 for fuel", "How do I make a budget for my business?", "I want to end my life because of my debt"]) await assert.rejects(ask(text), /must not reach the AI planning model|guide must answer/, text);
});

test("on the page and the server: the question is the page's own, the server tries the person's words first, the scripts are loaded before app.js and cached, and the pages are in the weekly check", () => {
  const start = app.indexOf("function kyroMoneyQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const context = { window: { KyroMoneyTopics: matcher } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroMoneyQuestion;`, context);
  for (const say of ["How do I make a budget?", "What should I invest in?"]) assert.equal(context.ask(say), true, say);
  for (const say of ["Call my bank", "Play some music", "What is the weather", "Should I buy bitcoin?"]) assert.equal(context.ask(say), false, say);
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroMoneyQuestion;`, none);
  assert.equal(none.ask("How do I make a budget?"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroMoneyQuestion === "function" && kyroMoneyQuestion\(trimmed\)\) \|\| \(typeof kyroHowtoQuestion === "function" && kyroHowtoQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(server, /const moneyAsk = typeof moneyTopic === "function" && rawCallerText && moneyTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /moneyTopic\(moneyAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency" && typeof deterministicVoiceAnswer === "function"/);
  assert.match(server, /text: moneyAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.includes('const { moneyTopic } = require("./public/kyro-money-topics.js");'));
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-money-topics.js?v=kyro-money-topics-2"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.match(sw, /`\/kyro-money-topics\.js\?v=kyro-money-topics-2`/);
  const check = fs.readFileSync(path.join(__dirname, "../../scripts/check-guide-sources.js"), "utf8");
  assert.match(check, /const GUIDES = \[[^\]]*"money-guide"/);
  const collected = collectSources(path.join(__dirname, "../../nexus/knowledge"));
  for (const key of Object.keys(guide.SOURCES)) assert.ok(collected.some(entry => entry.url === guide.SOURCES[key].url && entry.guides.includes("money-guide")), `${key} is checked weekly (https only)`);
});

test("each money case in the live voice list is answered by the guide (or the guard) with the key fact it expects on the screen", () => {
  const cases = require("../../scripts/live-voice-suite/cases/money.js");
  assert.equal(cases.length, ALL.length + 1);
  const seen = new Set();
  for (const entry of cases) {
    if (entry.id === "money-guard-refuses-a-pick") { assert.ok(investmentGuardReply(entry.say).reply.includes(entry.expect.text), entry.say); continue; }
    const id = matcher.moneyTopic(entry.say);
    assert.ok(id, entry.say); seen.add(id);
    assert.ok(guide.moneyAnswer(id).text.includes(entry.expect.text), `${entry.id}: ${entry.expect.text}`);
    assert.doesNotMatch(entry.expect.text, /[$^*+?()[\]{}|\\]/, `${entry.id}: no regular-expression characters in a case key`);
  }
  assert.deepEqual([...seen].sort(), [...ALL].sort(), "every topic has a live case");
  const all = require("../../scripts/live-voice-suite/cases/index.js").ALL.map(entry => entry.id);
  for (const entry of cases) assert.ok(all.includes(entry.id), entry.id);
});
