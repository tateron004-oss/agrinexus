"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");
const { sponsorshipProposalDocument, teamPacketDocument, rosterNames } = require("../../nexus/knowledge/athlete-docs.js");
const { structuredIntakePlan } = require("../../nexus/intake/structured-intakes.js");

// An athlete's sponsorship proposal and a team or club registration packet are each a ten-question interview that ends, after a yes, with a Word document made of the person's own words. Nothing is invented, nothing is sent to anyone
// and no money is collected. A question, a template or an example is still the athlete guide's.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("an order for a sponsorship proposal or a team packet starts the interview; a question, a template or an example does not", () => {
  const sponsorYes = ["Write my sponsorship proposal", "Help me build a sponsorship pitch", "Create a sponsorship letter for my son", "I need a sponsorship package", "Hey Kyro, can you draft a sponsor proposal?", "Put together a sponsorship deck"];
  for (const text of sponsorYes) assert.equal(KyroIntakeForms.isSponsorshipProposalRequest(text), true, text);
  const sponsorNo = ["How do I write a sponsorship proposal?", "What goes in a sponsorship proposal?", "Give me a sponsorship proposal template", "Show me a sponsorship proposal example", "Tell me about sponsors", "Find me a sponsor", "Sponsor a child", "Write a business plan", "What is a sponsor?", "Should I send a sponsorship pitch?"];
  for (const text of sponsorNo) assert.equal(KyroIntakeForms.isSponsorshipProposalRequest(text), false, text);
  const teamYes = ["Create a team registration packet", "Help me build a roster for my club", "I need a fee sheet for my team", "Make a parent packet for my team", "Set up a club registration form", "Write a team handbook", "Draft a team information sheet"];
  for (const text of teamYes) assert.equal(KyroIntakeForms.isTeamPacketRequest(text), true, text);
  const teamNo = ["How do I run a youth club?", "Team registration packet template", "What is a roster?", "Show me a team packet example", "Create a resume", "Write my business plan", "Register for the team", "My team lost", "I manage a youth soccer club. How do I handle registration and fees?"];
  for (const text of teamNo) assert.equal(KyroIntakeForms.isTeamPacketRequest(text), false, text);
  // the two never claim each other's words, and neither claims a business plan, a PR brief or a resume
  for (const text of sponsorYes) assert.equal(KyroIntakeForms.isTeamPacketRequest(text), false, text);
  for (const text of teamYes) assert.equal(KyroIntakeForms.isSponsorshipProposalRequest(text), false, text);
  for (const text of [...sponsorYes, ...teamYes]) { assert.equal(KyroIntakeForms.isBusinessPlanRequest(text), false, text); assert.equal(KyroIntakeForms.isResumeBuildRequest(text), false, text); }
});

test("the sponsorship interview has ten questions, needs only the athlete and the ask, and returns exactly what was said", () => {
  const form = KyroIntakeForms.sponsorshipProposal;
  assert.equal(form.id, "sponsorship-proposal"); assert.equal(form.fields.length, 10);
  assert.deepEqual(form.fields.filter(field => field.required).map(field => field.key), ["athlete", "ask"]);
  const intake = KyroVoiceIntake.create(form, { now: () => 1000 });
  intake.start();
  const answers = ["Amina Wanjiru, 800 metres, Nakuru county team", "Money for spikes and travel to nationals", "I started running at nine and train every morning", "Second at the county championships", "About two hundred followers on my page", "Spikes, entry fees and bus fares", "A logo on my kit and a thank you post", "Small, medium and large levels", "amina at example dot com", "Season starts in March, answer by February"];
  let decision;
  answers.forEach((text, index) => { decision = intake.handleUtterance(text, { utteranceId: `u${index}` }); });
  assert.equal(decision.action, "confirm");
  assert.match(decision.say, /Shall I save it as a document you can edit and send\? Say yes, or tell me which part to change\./);
  const done = intake.handleUtterance("yes", { utteranceId: "yes" });
  assert.equal(done.action, "submit");
  const request = form.toRequest(done.values);
  assert.deepEqual(Object.keys(request).sort(), ["ask", "athlete", "audience", "contact", "levels", "offer", "results", "story", "timeline", "use"]);
  assert.equal(request.athlete, answers[0]); assert.equal(request.ask, answers[1]);
  // the athlete and the ask cannot be skipped
  const short = KyroVoiceIntake.create(form, { now: () => 1000 });
  short.start();
  assert.notEqual(short.handleUtterance("skip", { utteranceId: "s1" }).action, "confirm");
});

test("the team interview takes the roster in short answers, needs only the team, and returns exactly what was said", () => {
  const form = KyroIntakeForms.teamPacket;
  assert.equal(form.id, "team-packet"); assert.equal(form.fields.length, 10);
  assert.deepEqual(form.fields.filter(field => field.required).map(field => field.key), ["team"]);
  assert.equal(form.fields.find(field => field.key === "roster").repeatable.max, 8);
  const intake = KyroVoiceIntake.create(form, { now: () => 1000 });
  intake.start();
  const answers = ["Eastside Eagles under twelve soccer", "Fall 2026, September to November", "Coach Dana, 555 0100", "Coach Dana and Mr Okoro", "Amina, Joe and Tunde", "Maria, Sam", "that's all", "Tuesdays and Thursdays at the school field", "Online by 1 September", "60 dollars, due 1 September", "Tournament in Dallas on 10 October, we drive in two vans", "Waiver and medical form"];
  let decision;
  answers.forEach((text, index) => { decision = intake.handleUtterance(text, { utteranceId: `u${index}` }); });
  assert.equal(decision.action, "confirm");
  const done = intake.handleUtterance("yes", { utteranceId: "yes" });
  assert.equal(done.action, "submit");
  const request = form.toRequest(done.values);
  assert.deepEqual(request.roster, ["Amina, Joe and Tunde", "Maria, Sam"]);
  assert.equal(request.team, answers[0]); assert.equal(request.fees, "60 dollars, due 1 September");
  const short = KyroVoiceIntake.create(form, { now: () => 1000 });
  short.start();
  assert.notEqual(short.handleUtterance("skip", { utteranceId: "s1" }).action, "confirm");
});

test("the sponsorship proposal is the athlete's words and nothing else; what was not said is 'Not decided yet'; no figure or promise is invented", () => {
  assert.equal(sponsorshipProposalDocument({ athlete: "Amina" }), null); assert.equal(sponsorshipProposalDocument({ ask: "Money" }), null); assert.equal(sponsorshipProposalDocument(null), null);
  const made = sponsorshipProposalDocument({ athlete: "Amina Wanjiru, 800 metres, Nakuru county team", ask: "Money for spikes and travel to nationals", results: "Second at the county championships" });
  assert.equal(made.title, "Sponsorship proposal: Amina Wanjiru");
  const text = made.content;
  for (const said of ["Amina Wanjiru, 800 metres, Nakuru county team", "Money for spikes and travel to nationals", "Second at the county championships"]) assert.ok(text.includes(said), said);
  for (const heading of ["About the athlete", "My story", "Results and milestones", "Who follows and supports me", "What I am asking for", "What the support would pay for", "What I can offer in return", "Sponsor levels", "How to reach me", "Dates and when I need an answer"]) assert.ok(text.includes(heading), heading);
  assert.equal(text.split("\n").filter(line => line === "Not decided yet").length, 7, "the seven things not said");
  assert.match(text, /CHECK THESE BEFORE YOU SEND OR SIGN[\s\S]*compliance office[\s\S]*in writing[\s\S]*taxable income[\s\S]*labelled[\s\S]*parent or guardian[\s\S]*scholarship scams/);
  assert.match(text, /not legal, tax or financial advice, and Kyro has not sent it to anyone/);
  assert.doesNotMatch(text, /\bguarantee|will (?:definitely|certainly)|you will earn|followers? (?:of|count)|\$\d/i, "no promise and no invented figure");
  const headings = /^(?:SPONSORSHIP PROPOSAL|Prepared with Kyro|About the athlete|My story|Results and milestones|Who follows|What I am asking|What the support|What I can offer|Sponsor levels|How to reach me|Dates and when|CHECK THESE|\d\. |This draft)/;
  const owner = text.split("\n").filter(line => line && !headings.test(line));
  assert.deepEqual(owner, ["Amina Wanjiru, 800 metres, Nakuru county team", "Not decided yet", "Second at the county championships", "Not decided yet", "Money for spikes and travel to nationals", "Not decided yet", "Not decided yet", "Not decided yet", "Not decided yet", "Not decided yet"]);
});

test("the team packet numbers the roster, keeps every other answer word for word, and lists what to check; it writes no waiver and collects no money", () => {
  assert.equal(teamPacketDocument({}), null); assert.equal(teamPacketDocument(null), null);
  const made = teamPacketDocument({ team: "Eastside Eagles under twelve soccer", roster: ["Amina, Joe and Tunde", "Maria, Sam"], fees: "60 dollars, due 1 September", forms: "Waiver and medical form" });
  assert.equal(made.title, "Team packet: Eastside Eagles under twelve soccer");
  const text = made.content;
  for (const line of ["1. Amina", "2. Joe", "3. Tunde", "4. Maria", "5. Sam", "60 dollars, due 1 September", "Waiver and medical form", "Eastside Eagles under twelve soccer"]) assert.ok(text.split("\n").includes(line), line);
  assert.deepEqual(rosterNames(["Amina, Joe and Tunde", "Maria; Sam"]), ["Amina", "Joe", "Tunde", "Maria", "Sam"]);
  assert.equal(rosterNames("x, ".repeat(100)).length, 60, "a long roster is capped, not cut in the middle of a name");
  const noRoster = teamPacketDocument({ team: "Eagles" }).content.split("\n");
  assert.equal(noRoster[noRoster.indexOf("Roster") + 1], "Not decided yet");
  assert.match(text, /CHECK THESE BEFORE YOU GIVE THIS OUT[\s\S]*Kyro does not write waiver or release wording[\s\S]*background checks[\s\S]*what each fee pays for[\s\S]*signed permission for every player under 18[\s\S]*insurance[\s\S]*never post a child's full name/i);
  assert.match(text, /Kyro has not sent it to anyone and has not collected any money/);
  assert.doesNotMatch(text, /\bguarantee|I, the undersigned|hereby release|hold harmless/i, "Kyro writes no waiver wording");
});

test("on the server: a Word document built from the answers only; the client cannot send the text; the other intakes are unchanged", () => {
  for (const [id, values, title, code] of [
    ["sponsorship-proposal", { athlete: "Amina Wanjiru", ask: "Spikes" }, "Sponsorship proposal: Amina Wanjiru", "sponsorship_incomplete"],
    ["team-packet", { team: "Eastside Eagles" }, "Team packet: Eastside Eagles", "team_packet_incomplete"]
  ]) {
    const plan = structuredIntakePlan(id, { ...values, content: "FORGED TEXT", title: "FORGED", format: "pdf", toolId: "email.send" });
    const step = plan.steps[0];
    assert.equal(plan.application, "documents"); assert.equal(step.toolId, "documents.create"); assert.equal(step.input.format, "docx"); assert.equal(step.input.reopenAfterSave, true);
    assert.equal(step.input.title, title);
    assert.doesNotMatch(step.input.content, /FORGED|email\.send/);
    assert.throws(() => structuredIntakePlan(id, {}), error => error.code === code && error.status === 422);
  }
  assert.throws(() => structuredIntakePlan("sponsorship-proposal", { athlete: "Amina" }), error => error.code === "sponsorship_incomplete");
  // the roster comes through as an array of short answers and nothing else is split on the way
  const packet = structuredIntakePlan("team-packet", { team: "Eagles", roster: ["Amina, Joe", "Maria"] }).steps[0].input.content;
  assert.match(packet, /1\. Amina\n2\. Joe\n3\. Maria/);
  assert.equal(structuredIntakePlan("business-plan", { business: "B", customers: "C" }).steps[0].input.title, "Business plan: B");
  assert.equal(structuredIntakePlan("pr-brief", { business: "B", goal: "g" }).steps[0].input.title, "PR and events brief: B");
  assert.equal(structuredIntakePlan("resume", { name: "Amina", skills: "farming" }).steps[0].toolId, "resume.create");
  assert.throws(() => structuredIntakePlan("send-money", { amount: "5" }), error => error.code === "intake_unknown");
});

test("on the page: the order starts the interview before the guides, typed or said, the model is kept out of it, and the form script is cached under a new version", () => {
  assert.match(app, /function startKyroAthleteDocIntake\(kind, options = \{\}\) \{\s+const form = window\.KyroIntakeForms\?\.\[kind\];\s+if \(!form \|\| !KYRO_ATHLETE_DOCS\[kind\]\) return;\s+startKyroVoiceIntake\(form, \{ \.\.\.options, onComplete:/);
  assert.match(app, /intakeId: doc\.intakeId, values: request/);
  assert.match(app, /intakeId: "sponsorship-proposal"/); assert.match(app, /intakeId: "team-packet"/);
  assert.match(app, /incompleteCode: "sponsorship_incomplete"/); assert.match(app, /incompleteCode: "team_packet_incomplete"/);
  const spoken = app.indexOf("window.KyroIntakeForms?.isSponsorshipProposalRequest?.(trimmed)");
  assert.ok(spoken > 0 && spoken < app.indexOf("kyroMemoryBookFollowUp(trimmed)"), "before the memory book and every guide claim");
  assert.ok(app.indexOf("window.KyroIntakeForms?.isTeamPacketRequest?.(trimmed)") > spoken);
  assert.match(app, /if \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isSponsorshipProposalRequest\?\.\(text\)\) \{\s+startKyroAthleteDocIntake\("sponsorshipProposal", \{ seedUtterance: \{ id: "", text \}, source: options\.source \|\| "typed" \}\);/);
  assert.match(app, /if \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isTeamPacketRequest\?\.\(text\)\) \{\s+startKyroAthleteDocIntake\("teamPacket", \{ seedUtterance: \{ id: "", text \}, source: options\.source \|\| "typed" \}\);/);
  assert.match(app, /window\.KyroPrTopics\?\.isPrBriefRequest\?\.\(command\) \|\| window\.KyroIntakeForms\?\.isSponsorshipProposalRequest\?\.\(command\) \|\| window\.KyroIntakeForms\?\.isTeamPacketRequest\?\.\(command\)/);
  assert.match(app, /id === "sponsorship-proposal" \|\| \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isSponsorshipProposalRequest\?\.\(command\)\)\) return "Kyro is already asking the athlete the questions for a sponsorship proposal/);
  assert.match(app, /id === "team-packet" \|\| \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isTeamPacketRequest\?\.\(command\)\)\) return "Kyro is already asking the coach the questions for a team and club packet/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  assert.ok(index.includes('<script src="/kyro-intake-forms.js?v=kyro-intake-forms-6"></script>')); assert.ok(sw.includes("`/kyro-intake-forms.js?v=kyro-intake-forms-6`"));
});

test("the live voice rig has a case for each: it starts the interview and cancels, so nothing is saved", () => {
  const cases = require("../../scripts/live-voice-suite/cases/athlete-documents.js");
  assert.deepEqual(cases.map(entry => entry.id), ["ath-sponsorship-starts-and-cancels", "ath-team-packet-starts-and-cancels"]);
  for (const entry of cases) { assert.equal(entry.expect.intake, "Question 1 of"); assert.equal(entry.then[0].say, "Cancel."); assert.equal(entry.writes, undefined); }
  const all = require("../../scripts/live-voice-suite/cases/index.js").ALL.map(entry => entry.id);
  for (const entry of cases) assert.ok(all.includes(entry.id), entry.id);
});
