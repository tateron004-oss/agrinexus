"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");
const { moneyPlanDocument, programKitDocument, pathOf } = require("../../nexus/knowledge/money-docs.js");
const { structuredIntakePlan } = require("../../nexus/intake/structured-intakes.js");

// A person's 90-day money plan, and an organizer's plan for a community financial education program, are each a ten-question interview that ends, after a yes, with a Word document of the person's own words. Nothing is invented, no account number,
// PIN or password is ever taken, nothing is sent to anyone and no money is moved. A question, a template or an example is still the money guide's.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("an order for a money plan or a program plan starts the interview; a question, a template, a number or a business does not", () => {
  const planYes = ["Help me make a budget", "Make me a money plan", "I need a 90 day money plan", "Build me a spending plan", "Help me create a financial plan", "Hey Kyro, can you help me make a savings plan?", "I want a debt plan", "Put together a plan for my money"];
  for (const text of planYes) assert.equal(KyroIntakeForms.isMoneyPlanRequest(text), true, text);
  const planNo = ["How do I make a budget?", "What is a spending plan?", "Give me a budget template", "Show me a budget worksheet", "Make a budget for my business", "Write my business plan", "Set a budget of 200 for fuel", "Show my budget", "I need a budget calculator", "How much is my budget", "Create a resume", "Help me with my finances", "Why do I need a budget?"];
  for (const text of planNo) assert.equal(KyroIntakeForms.isMoneyPlanRequest(text), false, text);
  const kitYes = ["Help me plan a financial education program", "I want to start a financial literacy class for my church", "We want to run money management workshops", "Help me design a community financial education program", "Can you help me build a financial coaching program?"];
  for (const text of kitYes) assert.equal(KyroIntakeForms.isProgramKitRequest(text), true, text);
  const kitNo = ["How do I start a financial education program?", "What is financial literacy?", "Give me a financial education program template", "Help me make a budget", "Write my business plan", "Teach me about money"];
  for (const text of kitNo) assert.equal(KyroIntakeForms.isProgramKitRequest(text), false, text);
  // the two never claim each other's words, nor another interview's
  for (const text of planYes) { assert.equal(KyroIntakeForms.isProgramKitRequest(text), false, text); for (const other of ["isBusinessPlanRequest", "isResumeBuildRequest", "isSponsorshipProposalRequest", "isTeamPacketRequest"]) assert.equal(KyroIntakeForms[other](text), false, `${other}: ${text}`); }
  for (const text of kitYes) { assert.equal(KyroIntakeForms.isMoneyPlanRequest(text), false, text); for (const other of ["isBusinessPlanRequest", "isResumeBuildRequest", "isSponsorshipProposalRequest", "isTeamPacketRequest"]) assert.equal(KyroIntakeForms[other](text), false, `${other}: ${text}`); }
});

test("the money plan interview has ten questions, needs only the first problem and what matters most, and returns exactly what was said", () => {
  const form = KyroIntakeForms.moneyPlan;
  assert.equal(form.id, "money-plan"); assert.equal(form.fields.length, 10);
  assert.deepEqual(form.fields.filter(field => field.required).map(field => field.key), ["problem", "priority"]);
  assert.match(form.intro, /do not tell me account numbers, PINs, passwords or your Social Security number/);
  const intake = KyroVoiceIntake.create(form, { now: () => 1000 });
  intake.start();
  const answers = ["I cannot cover my bills at the end of the month", "My hours change every week, some weeks are slow", "Paying down debt, then emergency savings", "Evening classes, and help with childcare", "Rent 800 on the first, phone 40 on the 15th", "About 1,800 to 2,000", "Two credit cards about 3,500 total, interest around 24 percent", "I have about 100 saved, I want 500 first", "My job has no plan that I know of", "Write every bill on a calendar"];
  let decision;
  answers.forEach((text, index) => { decision = intake.handleUtterance(text, { utteranceId: `u${index}` }); });
  assert.equal(decision.action, "confirm");
  assert.match(decision.say, /Shall I save it as a document you can edit and keep\? Say yes, or tell me which part to change\./);
  const done = intake.handleUtterance("yes", { utteranceId: "yes" });
  assert.equal(done.action, "submit");
  const request = form.toRequest(done.values);
  assert.deepEqual(Object.keys(request), ["problem", "income", "priority", "supports", "bills", "takehome", "debts", "savings", "workplan", "week"]);
  assert.equal(request.problem, answers[0]); assert.equal(request.takehome, answers[5]); assert.equal(request.week, answers[9]);
  const short = KyroVoiceIntake.create(form, { now: () => 1000 });
  short.start();
  assert.notEqual(short.handleUtterance("skip", { utteranceId: "s1" }).action, "confirm", "the first problem cannot be skipped");
});

test("an account number, a PIN, a password or a Social Security number is refused, asked again and never kept; ordinary money talk is taken", () => {
  for (const form of [KyroIntakeForms.moneyPlan, KyroIntakeForms.programKit]) {
    for (const said of ["My account number is 123456789012", "my password is hunter two", "my social security number is on the card", "use pin 4 4 4 4", "one two three four five six seven eight nine", "4111 1111 1111 1111", "the routing number is 021000021"]) {
      const intake = KyroVoiceIntake.create(form, { now: () => 1000 });
      intake.start();
      const decision = intake.handleUtterance(said, { utteranceId: "x" });
      assert.equal(decision.action, "reask", `${form.id}: ${said}`);
      assert.match(decision.say, /without any account numbers, PINs, passwords or Social Security number/);
      assert.doesNotMatch(JSON.stringify(intake.snapshot()), /123456789012|hunter|4111|021000021/, "what was said is not kept");
    }
    const intake = KyroVoiceIntake.create(form, { now: () => 1000 });
    intake.start();
    assert.equal(intake.handleUtterance("I owe about 3,500 dollars on two cards and I get paid 1,800 every month", { utteranceId: "ok" }).action, "ask");
  }
});

test("the program plan interview has ten questions and needs only the organization and what people need first", () => {
  const form = KyroIntakeForms.programKit;
  assert.equal(form.id, "program-kit"); assert.equal(form.fields.length, 10);
  assert.deepEqual(form.fields.filter(field => field.required).map(field => field.key), ["organization", "priorities"]);
  const intake = KyroVoiceIntake.create(form, { now: () => 1000 });
  intake.start();
  const answers = ["Eastside Community Center, we serve working families", "Bills and debt, then savings", "Spanish and English, evenings, childcare", "Weekly classes and monthly coaching for 30 people", "Our director and a volunteer counselor", "The library and two churches", "A credit union account and free tax help", "Mostly staff time and snacks", "A small grant and donations", "People who make a spending plan"];
  let decision;
  answers.forEach((text, index) => { decision = intake.handleUtterance(text, { utteranceId: `u${index}` }); });
  assert.equal(decision.action, "confirm");
  const done = intake.handleUtterance("yes", { utteranceId: "yes" });
  assert.equal(done.action, "submit");
  const request = form.toRequest(done.values);
  assert.deepEqual(Object.keys(request), ["organization", "priorities", "needs", "format", "educators", "partners", "services", "budget", "funding", "measures"]);
  assert.equal(request.organization, answers[0]);
  const short = KyroVoiceIntake.create(form, { now: () => 1000 });
  short.start();
  assert.notEqual(short.handleUtterance("skip", { utteranceId: "s1" }).action, "confirm");
});

test("the money plan is the person's words plus steps from the official pages, with 'Not decided yet' where nothing was said, and no figure, product or promise is invented", () => {
  assert.equal(moneyPlanDocument({ problem: "Debt" }), null); assert.equal(moneyPlanDocument({ priority: "Savings" }), null); assert.equal(moneyPlanDocument(null), null);
  const made = moneyPlanDocument({ problem: "I cannot cover my bills at the end of the month", priority: "Paying down debt, then emergency savings", bills: "Rent 800 on the first", debts: "Two credit cards" });
  assert.match(made.title, /^My 90-day money plan: I cannot cover my bills at the end of the month$/);
  const text = made.content;
  for (const said of ["I cannot cover my bills at the end of the month", "Paying down debt, then emergency savings", "Rent 800 on the first", "Two credit cards"]) assert.ok(text.split("\n").includes(said), said);
  for (const heading of ["1. WHERE I AM STARTING", "2. MY SPENDING PLAN AND BILL CALENDAR", "3. MY SAVINGS GOAL", "4. MY DEBTS AND WHAT TO PAY FIRST", "5. INVESTING: WHAT TO KNOW FIRST", "6. MY NEXT 90 DAYS (Paying down debt)", "7. KEEPING MY MONEY SAFE"]) assert.ok(text.includes(heading), heading);
  assert.equal(text.split("\n").filter(line => line === "Not decided yet").length, 6, "the six things not said");
  assert.match(text, /four steps/); assert.match(text, /no dollar or month target/); assert.match(text, /debt worksheet/); assert.match(text, /prioritizing-bills tool/); assert.match(text, /an account; a fund is an investment held inside it/);
  assert.match(text, /Days 1 to 30\n1\. Write every debt down[\s\S]*Days 31 to 60\n1\. Pay first what protects your housing[\s\S]*Days 61 to 90\n1\. Update the debt worksheet/);
  assert.match(text, /Kyro has not sent it to anyone/); assert.match(text, /has not opened, moved or invested any money/);
  assert.doesNotMatch(text, /\$\d/, "no dollar figure that the person did not say");
  assert.doesNotMatch(text, /\b(?:we|i|kyro) guarantee|guarantees? (?:you|a return|results)|you will (?:save|earn|be debt[- ]free)|\b(?:Vanguard|Fidelity|Schwab|Robinhood|Coinbase|Bitcoin|SPY|VTI|VOO)\b/i, "no promise and no product");
  // the five starting points each get their own first 90 days; a priority that names none starts with a spending plan
  for (const [priority, id, heading] of [["I want to buy a home", "home", "Buying a home"], ["Retirement", "retirement", "Saving for retirement"], ["Saving for my kids", "children", "Saving and investing for your children"], ["An emergency fund", "savings", "Building emergency savings"], ["Getting my bills under control", "start", "Starting with a spending plan"], ["Getting out of debt", "debt", "Paying down debt"]]) {
    assert.equal(pathOf(priority), id, priority);
    assert.match(moneyPlanDocument({ problem: "x problem", priority }).content, new RegExp(`6\\. MY NEXT 90 DAYS \\(${heading}\\)`), priority);
  }
});

test("the program plan is the organizer's words plus the six-step path, the free materials, the roles and the rules, with 'Not decided yet' where nothing was said", () => {
  assert.equal(programKitDocument({ organization: "A center" }), null); assert.equal(programKitDocument({ priorities: "Bills" }), null); assert.equal(programKitDocument(null), null);
  const made = programKitDocument({ organization: "Eastside Community Center, we serve working families", priorities: "Bills and debt, then savings", partners: "The library and two churches" });
  assert.equal(made.title, "Financial education program plan: Eastside Community Center");
  const text = made.content;
  for (const said of ["Eastside Community Center, we serve working families", "Bills and debt, then savings", "The library and two churches"]) assert.ok(text.split("\n").includes(said), said);
  assert.equal(text.split("\n").filter(line => line === "Not decided yet").length, 7, "the seven things not said");
  for (const fact of [/1\. Understand your money[\s\S]*6\. Protect and maintain progress/, /Money Smart for Adults is an instructor-led curriculum of 14 modules/, /17 December 2025/, /Your Money, Your Goals is a toolkit, booklets and companion guides/, /15 December 2025/, /A program coordinator/, /A trusted community educator/,
    /nonprofit credit counselor/, /vetted investment professional/, /independent of selling products/, /Sponsors do not receive participants' financial information and do not require anyone to open an account/, /never collect account passwords, PINs or account numbers/, /voluntary and private/, /cannot hire anyone, run a class, find funding or contact a partner/]) assert.match(text, fact);
  assert.doesNotMatch(text, /\b(?:we|i|kyro) guarantee|guarantees? (?:you|a return|results)|\$\d/, "no promise and no invented figure");
});

test("on the server: a Word document built from the answers only; the client cannot send the text; the other intakes are unchanged", () => {
  for (const [id, values, title, code] of [
    ["money-plan", { problem: "Debt", priority: "Paying down debt" }, "My 90-day money plan: Debt", "money_plan_incomplete"],
    ["program-kit", { organization: "Eastside Center", priorities: "Bills" }, "Financial education program plan: Eastside Center", "program_kit_incomplete"]
  ]) {
    const plan = structuredIntakePlan(id, { ...values, content: "FORGED TEXT", title: "FORGED", format: "pdf", toolId: "email.send" });
    const step = plan.steps[0];
    assert.equal(plan.application, "documents"); assert.equal(step.toolId, "documents.create"); assert.equal(step.input.format, "docx"); assert.equal(step.input.reopenAfterSave, true);
    assert.equal(step.input.title, title);
    assert.doesNotMatch(step.input.content, /FORGED|email\.send/);
    assert.throws(() => structuredIntakePlan(id, {}), error => error.code === code && error.status === 422);
  }
  assert.equal(structuredIntakePlan("team-packet", { team: "Eagles" }).steps[0].input.title, "Team packet: Eagles");
  assert.equal(structuredIntakePlan("business-plan", { business: "B", customers: "C" }).steps[0].input.title, "Business plan: B");
  assert.equal(structuredIntakePlan("resume", { name: "Amina", skills: "farming" }).steps[0].toolId, "resume.create");
  assert.throws(() => structuredIntakePlan("send-money", { amount: "5" }), error => error.code === "intake_unknown");
});

test("on the page: the order starts the interview before the guides, typed or said, the model is kept out of it, and the form script is cached under a new version", () => {
  assert.match(app, /moneyPlan: Object\.freeze\(\{\s+intakeId: "money-plan"/); assert.match(app, /programKit: Object\.freeze\(\{\s+intakeId: "program-kit"/);
  assert.match(app, /incompleteCode: "money_plan_incomplete"/); assert.match(app, /incompleteCode: "program_kit_incomplete"/);
  const spoken = app.indexOf("window.KyroIntakeForms?.isMoneyPlanRequest?.(trimmed)");
  assert.ok(spoken > 0 && spoken < app.indexOf("kyroMemoryBookFollowUp(trimmed)"), "before the memory book and every guide claim");
  assert.ok(app.indexOf("window.KyroIntakeForms?.isProgramKitRequest?.(trimmed)") > spoken);
  assert.match(app, /if \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isMoneyPlanRequest\?\.\(text\)\) \{\s+startKyroAthleteDocIntake\("moneyPlan", \{ seedUtterance: \{ id: "", text \}, source: options\.source \|\| "typed" \}\);/);
  assert.match(app, /if \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isProgramKitRequest\?\.\(text\)\) \{\s+startKyroAthleteDocIntake\("programKit", \{ seedUtterance: \{ id: "", text \}, source: options\.source \|\| "typed" \}\);/);
  assert.match(app, /window\.KyroIntakeForms\?\.isTeamPacketRequest\?\.\(command\) \|\| window\.KyroIntakeForms\?\.isMoneyPlanRequest\?\.\(command\) \|\| window\.KyroIntakeForms\?\.isProgramKitRequest\?\.\(command\)/);
  assert.match(app, /id === "money-plan" \|\| \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isMoneyPlanRequest\?\.\(command\)\)\) return "Kyro is already asking the person the questions for a 90-day money plan/);
  assert.match(app, /id === "program-kit" \|\| \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isProgramKitRequest\?\.\(command\)\)\) return "Kyro is already asking the organizer the questions for a financial education program plan/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  assert.ok(index.includes('<script src="/kyro-intake-forms.js?v=kyro-intake-forms-6"></script>')); assert.ok(sw.includes("`/kyro-intake-forms.js?v=kyro-intake-forms-6`"));
});

test("the live voice rig has a case for each: it starts the interview and cancels, so nothing is saved", () => {
  const cases = require("../../scripts/live-voice-suite/cases/money-documents.js");
  assert.deepEqual(cases.map(entry => entry.id), ["money-plan-starts-and-cancels", "money-program-kit-starts-and-cancels"]);
  for (const entry of cases) { assert.equal(entry.expect.intake, "Question 1 of"); assert.equal(entry.then[0].say, "Cancel."); assert.equal(entry.writes, undefined); }
  assert.equal(KyroIntakeForms.isMoneyPlanRequest(cases[0].say), true); assert.equal(KyroIntakeForms.isProgramKitRequest(cases[1].say), true);
  const all = require("../../scripts/live-voice-suite/cases/index.js").ALL.map(entry => entry.id);
  for (const entry of cases) assert.ok(all.includes(entry.id), entry.id);
});
