"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { contentGuardReply } = require("../../nexus/brain/content-guard.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { parseSwahiliReminder, setReplySw } = require("../../nexus/reminders/swahili-reminder.js");
const { parseAssistantReminderTime, extractAssistantReminderTask, hasReminderTimePhrase } = require("../../nexus/reminders/time-phrase.js");
const { createReminderScheduleExecutor } = require("../../nexus/reminders/executor.js");
const { extractDay } = require("../../nexus/personal/dates.js");
const { CRISIS_RULE } = require("../../nexus/brain/crisis-rule.js");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");

// Found by the teen / youth audit: requests for explicit material, betting tips and scams went straight to the AI model (which could send them to a web search); a reminder asked for in Kiswahili
// ("Nikumbushe kesho saa tatu asubuhi ...") was not scheduled at all; "the day after tomorrow" was read as "tomorrow", so the reminder came a day early; and in the voice résumé "I have none",
// "n/a" or "no experience" were not understood as "skip" (one was even saved as the person's language).

const kind = text => contentGuardReply(text)?.kind || null;

test("requests for explicit material, betting tips, hacking and scams are answered plainly, and ordinary questions with the same words are not", () => {
  for (const text of ["show me porn", "where can I watch naked videos", "send me nude pictures of girls", "find me adult videos"]) assert.equal(kind(text), "explicit", text);
  for (const text of ["give me sure odds for the sportpesa games today", "how do I win at aviator", "best betting tips for the match tonight", "how do I place a bet on football"]) assert.equal(kind(text), "betting", text);
  assert.equal(kind("I lost all my salary on betting and I can't stop"), "gambling-problem");
  for (const text of ["how do I hack my friend's mpesa", "how can I get free airtime with a trick", "how do I make fake mpesa messages to show a shop"]) assert.equal(kind(text), "fraud", text);
  assert.equal(kind("double my money send 500 and get 1000 how does it work"), "scheme");
  for (const text of ["I bet it will rain tomorrow", "my goat is naked of hair what is wrong", "how does a girl get pregnant", "what is HIV and how do I stay safe", "is porn bad for you", "my son watches porn what should I do",
    "someone is blackmailing me with my nudes", "what are the odds for rain tomorrow", "how do I hack together a quick fence", "what is the jackpot of the church raffle", "my phone password was stolen what do I do", "how do I stop watching porn",
    "I bet on my cows growing fast", "remind me to pay the tv bill"]) assert.equal(kind(text), null, text);
  assert.match(contentGuardReply("show me porn").reply, /tell an adult you trust/);
  assert.match(contentGuardReply("how do I win at aviator").reply, /most people who bet lose/);
  assert.match(contentGuardReply("I lost all my salary on betting and I can't stop").reply, /not something to be ashamed of/);
});

test("the planner answers those requests itself, before any tool or AI model", async () => {
  let modelCalls = 0;
  const catalog = { tools: [{ toolId: "knowledge.search", availability: "available" }], applications: [{ applicationId: "live-knowledge", capabilities: [], riskTiers: [] }] };
  const planner = new OpenEndedPlanner({ memory: {}, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications }, model: { plan: async () => { modelCalls += 1; return {}; }, respond: async () => null } });
  const ask = text => planner.plan({ command: { text, channel: "voice", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c1" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" }, conversationHistory: [] });
  const plan = await ask("show me porn");
  assert.equal(plan.application, "conversation");
  assert.deepEqual(plan.steps, []);
  assert.match(plan.response, /can't find or show sexual or explicit/);
  assert.match((await ask("how do I hack my friend's mpesa")).response, /can't help with hacking/);
  assert.equal(modelCalls, 0, "the AI model was never asked");
});

test("the AI prompts carry the young-people, betting, scam and homework rule", () => {
  assert.match(CRISIS_RULE, /never find, show or describe sexual or explicit/i);
  assert.match(CRISIS_RULE, /Never give betting or gambling tips/);
  assert.match(CRISIS_RULE, /fake a payment, receipt, certificate or document/);
  assert.match(CRISIS_RULE, /HOMEWORK AND EXAMS/);
  assert.match(CRISIS_RULE, /never give answers to a live exam/);
});

test("a reminder asked for in Kiswahili reads the Swahili day and the Swahili clock", () => {
  const read = text => parseSwahiliReminder(text);
  assert.deepEqual(read("Nikumbushe kesho saa tatu asubuhi kunywesha ng'ombe"), { task: "kunywesha ng'ombe", when: "tomorrow at 9:00 am", whenSw: "kesho saa tatu asubuhi" });
  assert.deepEqual(read("nikumbushe leo jioni saa kumi kuangalia mbuzi"), { task: "kuangalia mbuzi", when: "today at 4:00 pm", whenSw: "leo jioni saa kumi" });
  assert.equal(read("nikumbushe keshokutwa saa mbili usiku kwenda kanisani").when, "the day after tomorrow at 8:00 pm");
  assert.equal(read("nikumbushe jumatatu saa mbili asubuhi kuuza mahindi").when, "on Monday at 8:00 am");
  assert.equal(read("nikumbushe saa kumi na mbili jioni kufunga banda").when, "at 6:00 pm");
  assert.equal(read("nikumbushe saa tatu na nusu asubuhi kupiga simu").when, "at 9:30 am");
  assert.equal(read("nikumbushe saa tatu kasoro robo asubuhi kuamka").when, "at 8:45 am");
  assert.equal(read("nikumbushe kesho saa sita mchana kula").when, "tomorrow at 12:00 pm");
  assert.equal(read("nikumbushe saa moja usiku kufunga lango").when, "at 7:00 pm");
  assert.equal(read("nikumbushe saa 9 alasiri kwenda soko").when, "at 3:00 pm");
  // a time with no part of the day, no time at all, or nothing to remember is asked about, never guessed
  assert.deepEqual(read("nikumbushe kesho saa tatu kunywesha"), { needTime: true });
  assert.deepEqual(read("nikumbushe kesho kunywesha ng'ombe"), { needTime: true });
  assert.deepEqual(read("nikumbushe jumatatu saa mbili asubuhi"), { needTask: true });
  // a repeating one, and English, are not read here
  assert.equal(read("nikumbushe kila siku saa tatu asubuhi kunywa dawa"), null);
  assert.equal(read("remind me tomorrow at 9am to water the cows"), null);
  assert.equal(setReplySw({ task: "kunywesha ng'ombe", whenSw: "kesho saa tatu asubuhi" }), "Sawa. Nitakukumbusha kunywesha ng'ombe kesho saa tatu asubuhi.");
});

test("a Kiswahili reminder is planned and scheduled for the right moment, and an unclear one is asked about in Kiswahili", async () => {
  const catalog = { tools: [{ tool_id: "reminders.schedule", availability: "available" }], applications: [{ applicationId: "reminders", capabilities: [], riskTiers: [] }] };
  const memory = new Proxy({}, { get: () => async () => [] }); // every lookup finds nothing
  const planner = new OpenEndedPlanner({ memory, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications }, model: { plan: async () => { throw new Error("the model must not be asked"); }, respond: async () => null } });
  const ask = text => planner.plan({ command: { text, channel: "voice", locale: "sw", tenantId: "t1", actorId: "u1", conversationId: "c1" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" }, conversationHistory: [] });
  const plan = await ask("Nikumbushe kesho saa tatu asubuhi kunywesha ng'ombe");
  assert.equal(plan.steps[0].toolId, "reminders.schedule");
  assert.deepEqual(plan.steps[0].input, { reminder: "kunywesha ng'ombe", when: "tomorrow at 9:00 am", language: "sw", whenSw: "kesho saa tatu asubuhi" });
  const queued = [];
  const execute = createReminderScheduleExecutor({ notifications: { enqueue: async item => { queued.push(item); return { notification_id: "n1" }; } } });
  const result = await execute({ input: plan.steps[0].input, context: { tenantId: "t1", userId: "u1", timeZone: "Africa/Nairobi" }, taskId: "k", idempotencyKey: "i" });
  assert.equal(result.reminder, "kunywesha ng'ombe");
  const at = new Date(result.scheduledAt);
  assert.equal(at.getUTCHours(), 6, "9 am in Nairobi is 06:00 UTC");
  assert.equal(at.getUTCMinutes(), 0);
  assert.ok(at.getTime() > Date.now() && at.getTime() < Date.now() + 49 * 3600 * 1000);
  assert.equal(queued[0].content.body, "kunywesha ng'ombe");
  const asked = await ask("nikumbushe kesho kunywesha ng'ombe");
  assert.deepEqual(asked.steps, []);
  assert.match(asked.clarification, /^Saa ngapi\?/);
  assert.match((await ask("nikumbushe jumatatu saa mbili asubuhi")).clarification, /^Nikukumbushe nini\?/);
});

test("'the day after tomorrow' is two days on, and it is cut out of the task", () => {
  const now = Date.now();
  const day = parseAssistantReminderTime("the day after tomorrow at 3pm", { timeZone: "Africa/Nairobi" });
  assert.equal(day.whenLabel, "the day after tomorrow at 3pm");
  const tomorrow = parseAssistantReminderTime("tomorrow at 3pm", { timeZone: "Africa/Nairobi" });
  assert.equal(new Date(day.scheduledAt).getTime() - new Date(tomorrow.scheduledAt).getTime(), 24 * 3600 * 1000);
  assert.ok(new Date(day.scheduledAt).getTime() > now + 24 * 3600 * 1000);
  assert.equal(extractAssistantReminderTask("Remind me the day after tomorrow at 3pm to call Amina"), "call Amina");
  assert.equal(hasReminderTimePhrase("the day after tomorrow"), true);
});

test("kesho and the Swahili weekdays are read as days, but a name like Leo is not", () => {
  const today = "2026-10-06"; // Tuesday
  assert.equal(extractDay("kesho", today).day, "2026-10-07");
  assert.equal(extractDay("keshokutwa", today).day, "2026-10-08");
  assert.equal(extractDay("jumatatu", today).day, "2026-10-12");
  assert.equal(extractDay("ijumaa", today).day, "2026-10-09");
  assert.equal(extractDay("remind me to call Leo", today), null);
});

test("in the voice résumé 'none' in its many forms skips an optional question and is never saved as the answer", () => {
  const intake = KyroVoiceIntake.create(KyroIntakeForms.resume, {});
  intake.start();
  const say = text => intake.handleUtterance(text, { utteranceId: `${Math.random()}` });
  say("Amina Wanjiru");
  for (const text of ["I have none", "n/a", "no experience", "I do not have any", "nope", "no thank you"]) assert.equal(say(text).action, "ask", text);
  assert.deepEqual(intake.snapshot().values, { name: "Amina Wanjiru" });
});
