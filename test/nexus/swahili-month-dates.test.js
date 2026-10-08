"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { resolveReminderTime, extractAssistantReminderTask, hasReminderTimePhrase } = require("../../nexus/reminders/time-phrase.js");
const { normaliseSwahiliDates, findSwahiliDate, isRealDay, describeDaySw } = require("../../nexus/reminders/sw-dates.js");
const { extractDay } = require("../../nexus/personal/dates.js");
const sw = require("../../nexus/reminders/swahili-reminder.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Dates said in Kiswahili: the months (Januari ... Desemba, and the short forms), "tarehe 15 Oktoba", "Desemba 25", "Jumatatu ijayo", "wiki ijayo", "mwezi ujao", "mwisho wa mwezi". They follow the same rules as
// the English dates: no year is the next time that date comes round, a day that does not exist or has passed is asked about, a week or month with no day is asked about, and what was understood is read back as
// the date it is, in the person's own words and time zone. A fixed "now" (Wednesday 7 October 2026, 10:00 in Nairobi) and a fixed zone are used for every row.

const NOW = new Date("2026-10-07T07:00:00Z");
const ZONE = "Africa/Nairobi";
function local(iso) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: ZONE, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date(iso)).map(p => [p.type, p.value]));
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour === "24" ? "00" : parts.hour}:${parts.minute}`;
}
const resolve = phrase => resolveReminderTime(phrase, { now: NOW, timeZone: ZONE });

// [phrase, the local date and time it must be set for]
const SET = [
  // full month names, with and without "tarehe", with the clock in Kiswahili
  ["nikumbushe tarehe 15 Oktoba saa tatu asubuhi kulipa kodi", "2026-10-15 09:00"],
  ["tarehe 15 Oktoba saa tatu asubuhi", "2026-10-15 09:00"],
  ["15 Oktoba saa tatu asubuhi", "2026-10-15 09:00"],
  ["tarehe ya 15 Oktoba saa tatu asubuhi", "2026-10-15 09:00"],
  ["tarehe 15 mwezi wa Oktoba saa tatu asubuhi", "2026-10-15 09:00"],
  ["15 Oktoba", "2026-10-15 09:00"],
  ["tarehe 3 Novemba saa tatu asubuhi", "2026-11-03 09:00"],
  ["Desemba 25 saa tatu asubuhi", "2026-12-25 09:00"],
  ["Desemba 25", "2026-12-25 09:00"],
  ["tarehe 25 Desemba saa nne asubuhi", "2026-12-25 10:00"],
  ["tarehe 8 Oktoba saa tatu asubuhi", "2026-10-08 09:00"],
  ["tarehe 7 Oktoba saa kumi na mbili jioni", "2026-10-07 18:00"],
  ["Oktoba 20 saa nne asubuhi", "2026-10-20 10:00"],
  // no year: the next time that date comes round (next year when it has gone by this year)
  ["tarehe 1 Januari saa mbili asubuhi", "2027-01-01 08:00"],
  ["1 Januari", "2027-01-01 09:00"],
  ["tarehe 14 Februari saa tatu asubuhi", "2027-02-14 09:00"],
  ["tarehe 15 Machi saa kumi jioni", "2027-03-15 16:00"],
  ["tarehe 20 Aprili saa sita mchana", "2027-04-20 12:00"],
  ["5 Mei saa moja asubuhi", "2027-05-05 07:00"],
  ["Juni 10 saa tatu asubuhi", "2027-06-10 09:00"],
  ["tarehe 4 Julai saa tatu asubuhi", "2027-07-04 09:00"],
  ["tarehe 30 Agosti saa tatu asubuhi", "2027-08-30 09:00"],
  ["tarehe 9 Septemba saa tatu asubuhi", "2027-09-09 09:00"],
  ["tarehe 6 Oktoba saa tatu asubuhi", "2027-10-06 09:00"],
  // short forms of the months
  ["15 Okt saa tatu asubuhi", "2026-10-15 09:00"],
  ["15 Okt. saa tatu asubuhi", "2026-10-15 09:00"],
  ["tarehe 3 Nov saa tatu asubuhi", "2026-11-03 09:00"],
  ["Des 25 saa tatu asubuhi", "2026-12-25 09:00"],
  ["tarehe 12 Des saa tatu asubuhi", "2026-12-12 09:00"],
  ["20 Jan saa tatu asubuhi", "2027-01-20 09:00"],
  ["14 Feb saa tatu asubuhi", "2027-02-14 09:00"],
  ["2 Mac saa tatu asubuhi", "2027-03-02 09:00"],
  ["10 Apr saa tatu asubuhi", "2027-04-10 09:00"],
  ["15 Jun saa tatu asubuhi", "2027-06-15 09:00"],
  ["15 Jul saa tatu asubuhi", "2027-07-15 09:00"],
  ["15 Ago saa tatu asubuhi", "2027-08-15 09:00"],
  ["15 Sep saa tatu asubuhi", "2027-09-15 09:00"],
  ["15 Sept saa tatu asubuhi", "2027-09-15 09:00"],
  // with a year
  ["tarehe 15 Oktoba 2027 saa tatu asubuhi", "2027-10-15 09:00"],
  ["15 Machi 2028 saa tatu asubuhi", "2028-03-15 09:00"],
  ["tarehe 29 Februari 2028 saa tatu asubuhi", "2028-02-29 09:00"],
  ["Desemba 25, 2026 saa tatu asubuhi", "2026-12-25 09:00"],
  // the days of the week, "ijayo", kesho, keshokutwa, leo
  ["Jumatatu ijayo saa tatu asubuhi", "2026-10-12 09:00"],
  ["Jumanne ijayo saa tatu asubuhi", "2026-10-13 09:00"],
  ["Jumatano ijayo saa tatu asubuhi", "2026-10-14 09:00"],
  ["Alhamisi ijayo saa tatu asubuhi", "2026-10-08 09:00"],
  ["Ijumaa ijayo saa tatu asubuhi", "2026-10-09 09:00"],
  ["Jumamosi ijayo", "2026-10-10 09:00"],
  ["Jumapili ijayo saa tatu asubuhi", "2026-10-11 09:00"],
  ["Jumatatu wiki ijayo saa tatu asubuhi", "2026-10-12 09:00"],
  ["Jumatatu ya wiki ijayo saa tatu asubuhi", "2026-10-12 09:00"],
  ["Jumatatu saa tatu asubuhi", "2026-10-12 09:00"],
  ["kesho saa tatu asubuhi", "2026-10-08 09:00"],
  ["keshokutwa saa tatu asubuhi", "2026-10-09 09:00"],
  ["leo saa kumi na mbili jioni", "2026-10-07 18:00"],
  ["kesho asubuhi", "2026-10-08 08:00"],
  // the end of the month, and a day of the month with no month said
  ["mwisho wa mwezi saa tatu asubuhi", "2026-10-31 09:00"],
  ["mwisho wa mwezi", "2026-10-31 09:00"],
  ["mwisho wa mwezi huu saa tatu asubuhi", "2026-10-31 09:00"],
  ["tarehe 15 saa tatu asubuhi", "2026-10-15 09:00"],
  ["tarehe 6 saa tatu asubuhi", "2026-11-06 09:00"],
  ["tarehe 31 saa tatu asubuhi", "2026-10-31 09:00"],
  ["tarehe 7 saa kumi na mbili jioni", "2026-10-07 18:00"],
  ["tarehe 1 saa tatu asubuhi", "2026-11-01 09:00"],
  // the same dates in English (unchanged), so the two languages agree
  ["remind me on 15 October at 10am", "2026-10-15 10:00"],
  ["15 October", "2026-10-15 09:00"],
  ["October 15 at 3pm", "2026-10-15 15:00"],
  ["on the 22nd at 8am", "2026-10-22 08:00"],
  ["Jan 5 at 9am", "2027-01-05 09:00"],
  ["5 January 2028 at 9am", "2028-01-05 09:00"],
  ["next Monday at 9am", "2026-10-12 09:00"],
  ["tomorrow at 8am", "2026-10-08 08:00"],
  ["end of the month at 5pm", "2026-10-31 17:00"],
  ["on the last day of the month at 9am", "2026-10-31 09:00"],
  ["in 20 minutes", "2026-10-07 10:20"],
  ["baada ya dakika ishirini", "2026-10-07 10:20"],
  ["baada ya masaa mawili", "2026-10-07 12:00"]
];

test("Kiswahili dates are set for the right day, in the person's own time zone", () => {
  for (const [phrase, expected] of SET) {
    const result = resolve(phrase);
    assert.equal(result.status, "ok", `${phrase} -> ${result.status} ${result.ask?.kind}`);
    assert.equal(local(result.scheduledAt), expected, phrase);
  }
});

// [phrase, the question that must be asked instead, and nothing set]
const ASK = [
  ["wiki ijayo", "need-day"], ["mwezi ujao", "need-day"], ["wiki ijayo saa tatu asubuhi", "need-day"], ["mwezi ujao saa tatu asubuhi", "need-day"], ["next week", "need-day"], ["next month", "need-day"],
  ["tarehe 31 Februari saa tatu asubuhi", "bad-date"], ["31 Februari", "bad-date"], ["tarehe 31 Aprili saa tatu asubuhi", "bad-date"], ["tarehe 30 Februari 2028", "bad-date"],
  ["tarehe 31 Juni", "bad-date"], ["tarehe 31 Septemba saa tatu asubuhi", "bad-date"], ["tarehe 31 Novemba", "bad-date"], ["tarehe 29 Februari saa tatu asubuhi", "bad-date"],
  ["tarehe 15 Oktoba 2025 saa tatu asubuhi", "bad-date"], ["tarehe 3 Novemba 2020", "bad-date"], ["tarehe 7 Oktoba saa mbili asubuhi", "bad-date"], ["31 February at 10am", "bad-date"],
  ["tarehe 15 Oktoba saa nne", "ambiguous-hour"], ["Desemba 25 saa mbili", "ambiguous-hour"], ["tarehe 3 Novemba saa saba", "ambiguous-hour"],
  ["tarehe", "none"], ["Oktoba", "none"], ["mwezi wa Oktoba", "none"], ["mei", "none"], ["nikumbushe kununua mbolea 5 kg", "none"]
];

test("a Kiswahili date that is unclear, does not exist or has passed is asked about, and nothing is set", () => {
  for (const [phrase, kind] of ASK) {
    const result = resolve(phrase);
    assert.notEqual(result.status, "ok", `${phrase} must not be set`);
    assert.equal(result.ask.kind, kind, phrase);
  }
});

test("the question about a bad date names the date in the person's own words, in Kiswahili", () => {
  const result = resolve("nikumbushe tarehe 31 Februari saa tatu asubuhi kulipa kodi");
  assert.equal(result.ask.kind, "bad-date");
  assert.equal(result.ask.sw, "Siwezi kutumia \"tarehe 31 Februari\": si siku halisi, au imepita. Unamaanisha siku gani? Bado sijaweka chochote.");
  assert.match(resolve("15 Oktoba 2025").ask.sw, /"15 Oktoba 2025"/);
});

test("the date is read back as the day it is, in Kiswahili, in the person's zone, with the year when it is not this year", () => {
  assert.equal(resolve("tarehe 15 Oktoba saa tatu asubuhi").readbackSw, "Alhamisi, tarehe 15 Oktoba saa tatu asubuhi");
  assert.equal(resolve("Jumatatu ijayo saa tatu asubuhi").readbackSw, "Jumatatu, tarehe 12 Oktoba saa tatu asubuhi");
  assert.equal(resolve("mwisho wa mwezi saa mbili asubuhi").readbackSw, "Jumamosi, tarehe 31 Oktoba saa mbili asubuhi");
  assert.equal(resolve("tarehe 15 Machi saa kumi jioni").readbackSw, "Jumatatu, tarehe 15 Machi 2027 saa kumi jioni");
  assert.equal(resolve("tarehe 15 Oktoba saa tatu asubuhi").readback, "at 9:00 am on Thursday, 15 October");
  assert.equal(resolve("tarehe 15 Machi saa kumi jioni").readback, "at 4:00 pm on Monday, 15 March 2027");
  // another person's zone: 11 pm in Lagos is 1 am the next day in Nairobi, and the readback is the same person's own
  const lagos = resolveReminderTime("tarehe 15 Oktoba saa tano usiku", { now: NOW, timeZone: "Africa/Lagos" });
  assert.equal(lagos.readbackSw, "Alhamisi, tarehe 15 Oktoba saa tano usiku");
  assert.equal(new Date(lagos.scheduledAt).toISOString(), "2026-10-15T22:00:00.000Z".replace("22:00", "22:00"));
});

test("the task is what is left once the Kiswahili date is taken out", () => {
  assert.equal(extractAssistantReminderTask("nikumbushe tarehe 15 Oktoba saa tatu asubuhi kulipa kodi"), "kulipa kodi");
  assert.equal(extractAssistantReminderTask("nikumbushe Desemba 25 saa tatu asubuhi kumtembelea mama"), "kumtembelea mama");
  assert.equal(extractAssistantReminderTask("nikumbushe Jumatatu ijayo saa tatu asubuhi kupeleka ng'ombe"), "kupeleka ng'ombe");
  assert.equal(extractAssistantReminderTask("nikumbushe mwisho wa mwezi saa mbili asubuhi kulipa kodi"), "kulipa kodi");
  assert.equal(extractAssistantReminderTask("nikumbushe tarehe 15 kulipa kodi ya Mei"), "kulipa kodi ya Mei");
  assert.equal(hasReminderTimePhrase("nikumbushe tarehe 15 Oktoba kulipa kodi"), true);
  assert.equal(hasReminderTimePhrase("nikumbushe kulipa kodi ya Mei"), false);
});

test("a 'what time of day?' question about a Kiswahili date is answered by the next word, and the date is kept", () => {
  const floor = require("../../nexus/reminders/floor-reminders.js");
  const text = "nikumbushe tarehe 15 Oktoba saa nne kulipa kodi";
  const first = resolve(text);
  assert.equal(first.ask.kind, "ambiguous-hour");
  const pending = floor.pendingFromAsk({ ask: first.ask, task: "kulipa kodi", original: text, now: NOW });
  const answered = floor.interpretPendingAnswer(pending, "asubuhi", { now: NOW, timeZone: ZONE, language: "sw" });
  assert.equal(answered.status, "ok");
  assert.equal(local(answered.timing.scheduledAt), "2026-10-15 10:00");
  const night = floor.interpretPendingAnswer(pending, "usiku", { now: NOW, timeZone: ZONE, language: "sw" });
  assert.equal(local(night.timing.scheduledAt), "2026-10-15 22:00");
});

// [text, what the Swahili dates in it become] -- and the many sentences that must be left exactly as they are
const NORMALISED = [
  ["tarehe 15 Oktoba", "15 October"], ["15 Oktoba", "15 October"], ["Oktoba 15", "15 October"], ["tarehe ya 3 Novemba", "3 November"], ["25 Desemba 2027", "25 December 2027"], ["Desemba 25, 2027", "25 December 2027"],
  ["5 Mei", "5 May"], ["10 Juni", "10 June"], ["1 Julai", "1 July"], ["2 Agosti", "2 August"], ["9 Septemba", "9 September"], ["20 Aprili", "20 April"], ["3 Machi", "3 March"], ["14 Februari", "14 February"],
  ["1 Januari", "1 January"], ["15 Okt", "15 October"], ["15 Des", "15 December"], ["tarehe 12 Mac", "12 March"], ["tarehe 15", "on the 15th"], ["tarehe 2", "on the 2nd"], ["tarehe 23", "on the 23rd"], ["tarehe 11", "on the 11th"],
  ["mwisho wa mwezi", "the end of the month"], ["mwezi ujao", "next month"], ["Jumatatu ijayo", "Jumatatu"], ["kulipa 15 Oktoba na 3 Novemba", "kulipa 15 October na 3 November"]
];
const UNCHANGED = ["bei ya mei ni 500", "nina ng'ombe 12", "mei", "Oktoba", "tarehe ya leo", "mimi ni 25 miaka", "saa 15 asubuhi", "10:15 asubuhi", "nikumbushe kesho saa tatu asubuhi", "mwezi wa Oktoba", "kodi ya Machi", "ng'ombe 5 kg", "remind me on 15 October", "hello"];

test("Kiswahili date phrases are turned into the English ones the time reading already understands, and nothing else is touched", () => {
  for (const [text, expected] of NORMALISED) assert.equal(normaliseSwahiliDates(text), expected, text);
  for (const text of UNCHANGED) assert.equal(normaliseSwahiliDates(text), text, text);
  assert.equal(findSwahiliDate("tarehe 31 Februari").original, "tarehe 31 Februari");
  assert.equal(isRealDay(findSwahiliDate("tarehe 31 Februari")), false);
  assert.equal(isRealDay(findSwahiliDate("tarehe 29 Februari")), true);
  assert.equal(isRealDay(findSwahiliDate("tarehe 31 Aprili")), false);
  assert.equal(findSwahiliDate("kulipa kodi"), null);
  assert.equal(describeDaySw("2026-10-15", "2026-10-07"), "Alhamisi, tarehe 15 Oktoba");
  assert.equal(describeDaySw("2027-01-01", "2026-10-07"), "Ijumaa, tarehe 1 Januari 2027");
});

test("the calendar reads the same Kiswahili dates (extractDay), by the same rules", () => {
  const today = "2026-10-07";
  const day = text => extractDay(text, today)?.day || null;
  const rows = [["tarehe 15 Oktoba", "2026-10-15"], ["15 Oktoba", "2026-10-15"], ["Desemba 25", "2026-12-25"], ["tarehe 3 Novemba 2027", "2027-11-03"], ["tarehe 1 Januari", "2027-01-01"], ["15 Machi", "2027-03-15"],
    ["tarehe 15", "2026-10-15"], ["tarehe 6", "2026-11-06"], ["mwisho wa mwezi", "2026-10-31"], ["Jumatatu ijayo", "2026-10-12"], ["jumatatu wiki ijayo", "2026-10-12"], ["kesho", "2026-10-08"], ["keshokutwa", "2026-10-09"],
    ["15 Okt", "2026-10-15"], ["25 Des", "2026-12-25"], ["tarehe 29 Februari 2028", "2028-02-29"],
    ["tarehe 31 Februari", null], ["tarehe 31 Aprili", null], ["tarehe 30 Februari 2028", null], ["wiki ijayo", null], ["mwezi ujao", null], ["kulipa kodi", null], ["bei ya mei ni 500", null]];
  for (const [text, expected] of rows) assert.equal(day(text), expected, text);
  assert.equal(extractDay("ongeza mkutano tarehe 15 Oktoba saa nne", today).text.replace(/\s+/g, " ").trim(), "ongeza mkutano saa nne");
});

test("a calendar event asked for in Kiswahili with a date is read, answered in Kiswahili, and read back as the day it is", () => {
  const today = "2026-10-07";
  const rows = [
    ["Ongeza mkutano kwenye kalenda tarehe 15 Oktoba saa nne asubuhi", "add mkutano to my calendar on 15 October at 10:00 am", "Nimeongeza kwenye kalenda yako: mkutano tarehe 15 Oktoba saa nne asubuhi (Alhamisi, tarehe 15 Oktoba). Nitaitaja kwenye muhtasari wako wa asubuhi siku hiyo."],
    ["ongeza harusi kwenye kalenda Desemba 25", "add harusi to my calendar on 25 December", "Nimeongeza kwenye kalenda yako: harusi Desemba 25 (Ijumaa, tarehe 25 Desemba). Nitaitaja kwenye muhtasari wako wa asubuhi siku hiyo."],
    ["weka ziara ya daktari kwenye kalenda Jumatatu ijayo", "add ziara ya daktari to my calendar on Monday", "Nimeongeza kwenye kalenda yako: ziara ya daktari jumatatu ijayo (Jumatatu, tarehe 12 Oktoba). Nitaitaja kwenye muhtasari wako wa asubuhi siku hiyo."],
    ["ongeza semina kwenye kalenda mwisho wa mwezi saa nne asubuhi", "add semina to my calendar mwisho wa mwezi at 10:00 am", "Nimeongeza kwenye kalenda yako: semina mwisho wa mwezi saa nne asubuhi (Jumamosi, tarehe 31 Oktoba). Nitaitaja kwenye muhtasari wako wa asubuhi siku hiyo."],
    ["ongeza chanjo kwenye kalenda tarehe 10 Januari", "add chanjo to my calendar on 10 January", "Nimeongeza kwenye kalenda yako: chanjo tarehe 10 Januari (Jumapili, tarehe 10 Januari 2027). Nitaitaja kwenye muhtasari wako wa asubuhi siku hiyo."]
  ];
  for (const [text, english, reply] of rows) {
    const read = sw.parseSwahiliCalendar(text, { today });
    assert.equal(read.english, english, text);
    assert.equal(read.replySw, reply, text);
  }
  assert.equal(sw.parseSwahiliCalendar("ongeza mkutano kwenye kalenda tarehe 31 Februari", { today }).badDate, "tarehe 31 Februari");
  assert.deepEqual(sw.parseSwahiliCalendar("ongeza mkutano kwenye kalenda wiki ijayo", { today }), { needDay: true, title: "mkutano" });
  assert.deepEqual(sw.parseSwahiliCalendar("ongeza mkutano kwenye kalenda mwezi ujao", { today }), { needDay: true, title: "mkutano" });
});

test("a Kiswahili reminder with a date is read whole, and an unclear or impossible date is asked about in Kiswahili", () => {
  assert.deepEqual(sw.parseSwahiliReminder("nikumbushe tarehe 15 Oktoba saa tatu asubuhi kulipa kodi"), { task: "kulipa kodi", when: "on 15 October at 9:00 am", whenSw: "tarehe 15 Oktoba saa tatu asubuhi" });
  assert.deepEqual(sw.parseSwahiliReminder("nikumbushe Jumatatu ijayo saa tatu asubuhi kupeleka ng'ombe"), { task: "kupeleka ng'ombe", when: "on Monday at 9:00 am", whenSw: "jumatatu ijayo saa tatu asubuhi" });
  assert.deepEqual(sw.parseSwahiliReminder("nikumbushe tarehe 15 saa tatu asubuhi kulipa"), { task: "kulipa", when: "on the 15th at 9:00 am", whenSw: "tarehe 15 saa tatu asubuhi" });
  assert.deepEqual(sw.parseSwahiliReminder("nikumbushe mwisho wa mwezi saa mbili asubuhi kulipa kodi"), { task: "kulipa kodi", when: "on the last day of the month at 8:00 am", whenSw: "mwisho wa mwezi saa mbili asubuhi" });
  assert.equal(sw.parseSwahiliReminder("nikumbushe tarehe 31 Februari saa tatu asubuhi kulipa kodi").ask, sw.badDateSw("tarehe 31 Februari"));
  assert.equal(sw.parseSwahiliReminder("nikumbushe wiki ijayo saa tatu asubuhi kulipa").ask, sw.NEED_WHICH_DAY_SW);
  assert.equal(sw.parseSwahiliReminder("nikumbushe mwezi ujao saa tatu asubuhi kulipa").ask, sw.NEED_WHICH_DAY_SW);
  // the English sentence the scheduler is given resolves to the same day
  for (const text of ["nikumbushe tarehe 15 Oktoba saa tatu asubuhi kulipa kodi", "nikumbushe Desemba 25 saa tatu asubuhi kumtembelea mama", "nikumbushe mwisho wa mwezi saa mbili asubuhi kulipa kodi"]) {
    const read = sw.parseSwahiliReminder(text);
    assert.equal(resolve(read.when).scheduledAt, resolve(text).scheduledAt, text);
  }
});

// ---------- through the planner: the calendar ----------
function memory() {
  const rows = []; let n = 0;
  return new Proxy({}, { get: (_, name) => {
    if (name === "addPersonalItem") return async ({ userId, content }) => { rows.unshift({ memory_id: `m${++n}`, userId, content }); return { memoryId: `m${n}` }; };
    if (name === "listPersonalItems") return async ({ userId, kind = null }) => rows.filter(row => row.userId === userId && (!kind || row.content.kind === kind)).map(row => ({ memory_id: row.memory_id, content: row.content }));
    if (name === "addPersonalItemUnlessFull") return async ({ userId, content, isDuplicate }) => {
      const duplicate = isDuplicate ? rows.filter(row => row.userId === userId && row.content.kind === content.kind).map(row => row.content).find(isDuplicate) : null;
      if (duplicate) return { duplicate };
      rows.unshift({ memory_id: `m${++n}`, userId, content }); return {};
    };
    return async () => [];
  } });
}
function planner() {
  const catalog = { tools: ["reminders.schedule"].map(tool_id => ({ tool_id, availability: "available" })), applications: ["reminders"].map(applicationId => ({ applicationId, capabilities: [], riskTiers: [] })) };
  const p = new OpenEndedPlanner({ memory: memory(), tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications }, model: { plan: async () => { throw new Error("the model must not be asked"); }, respond: async () => null } });
  return text => p.plan({ command: { text, channel: "voice", locale: "sw", tenantId: "t1", actorId: "u1", conversationId: "c1" }, context: { can: () => true, roles: [], timeZone: ZONE } });
}

test("through the planner, a calendar event with a Kiswahili date is saved and the answer is in Kiswahili; a bad or unclear date saves nothing", async () => {
  const ask = planner();
  const added = await ask("Ongeza mkutano kwenye kalenda tarehe 15 Oktoba 2099 saa nne asubuhi");
  assert.match(added.response, /^Nimeongeza kwenye kalenda yako: mkutano tarehe 15 Oktoba 2099 saa nne asubuhi \(Alhamisi, tarehe 15 Oktoba 2099\)\./);
  const again = await ask("Ongeza mkutano kwenye kalenda tarehe 15 Oktoba 2099 saa nne asubuhi");
  assert.match(again.response, /tayari iko kwenye kalenda yako/);
  assert.match((await ask("Ongeza mkutano kwenye kalenda tarehe 31 Februari")).response, /^Siwezi kutumia "tarehe 31 Februari": si siku halisi/);
  assert.match((await ask("Ongeza mkutano kwenye kalenda wiki ijayo")).response, /^Siku gani\?/);
  assert.match((await ask("Ongeza mkutano kwenye kalenda tarehe 15 Oktoba 2020")).response, /^Siku hiyo \(tarehe 15 Oktoba 2020\) imepita tayari\./);
});

test("through the planner, a Kiswahili reminder with a date becomes a reminder step for that day; a bad date is asked about and sets nothing", async () => {
  const ask = planner();
  const ok = await ask("nikumbushe tarehe 15 Oktoba 2099 saa tatu asubuhi kulipa kodi");
  assert.equal(ok.steps[0].toolId, "reminders.schedule");
  assert.equal(ok.steps[0].input.when, "on 15 October 2099 at 9:00 am");
  assert.equal(ok.steps[0].input.reminder, "kulipa kodi");
  const bad = await ask("nikumbushe tarehe 31 Februari saa tatu asubuhi kulipa kodi");
  assert.deepEqual(bad.steps, []);
  assert.match(bad.clarification, /^Siwezi kutumia "tarehe 31 Februari"/);
  // a date with no time of day is asked about, like "kesho" with no time
  const noTime = await ask("nikumbushe Desemba 25 kumtembelea mama");
  assert.deepEqual(noTime.steps, []);
  assert.match(noTime.clarification, /^Saa ngapi\?/);
  const weekAway = await ask("nikumbushe wiki ijayo saa tatu asubuhi kulipa kodi");
  assert.deepEqual(weekAway.steps, []);
  assert.match(weekAway.clarification, /^Siku gani, na saa ngapi\?/);
});
