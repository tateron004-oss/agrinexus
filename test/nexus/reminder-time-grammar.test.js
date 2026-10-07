"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { resolveReminderTime, parseAssistantReminderTime, extractAssistantReminderTask, hasReminderTimePhrase, describeMoment } = require("../../nexus/reminders/time-phrase.js");
const { scanTime, swahiliClockWords } = require("../../nexus/reminders/time-grammar.js");
const { resolveReminderTimeZone, resolveReminderTimeZoneDetail } = require("../../nexus/reminders/time-zone.js");
const { readRequest } = require("../../nexus/personal/items.js");

// Found by the user-journey sweep: 22 of 36 spoken ways to say "in 20 minutes" were set for TOMORROW ("in 20 mins", "twenty five minutes", "half an hour", "in 2 hrs", every Kiswahili form),
// "1 hr 30 min" became 60 minutes, "at eight am" / "half past seven" / "saa mbili usiku" became 9am, and a bare "at 6" was quietly taken as 6pm. This is the table every phrase is held to.
// "Now" is Wednesday 7 October 2026, 20:18 in Nairobi (17:18 UTC); the zone is Africa/Nairobi unless a row says otherwise.

const NOW = new Date("2026-10-07T17:18:00Z");
const ZONE = "Africa/Nairobi";
const local = (iso, zone = ZONE) => new Intl.DateTimeFormat("sv-SE", { timeZone: zone, dateStyle: "short", timeStyle: "short" }).format(new Date(iso));
const resolve = (text, extra = {}) => resolveReminderTime(text, { now: NOW, timeZone: ZONE, ...extra });
const minutesFromNow = result => Math.round((new Date(result.scheduledAt).getTime() - NOW.getTime()) / 60000);

const EN_ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const EN_TENS = { 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty" };
const enWords = n => (n < 20 ? EN_ONES[n] : `${EN_TENS[n - (n % 10)]}${n % 10 ? ` ${EN_ONES[n % 10]}` : ""}`);
const SW_ONES = ["", "moja", "mbili", "tatu", "nne", "tano", "sita", "saba", "nane", "tisa"];
const SW_TENS = { 10: "kumi", 20: "ishirini", 30: "thelathini", 40: "arobaini", 50: "hamsini" };
const swWords = n => (n < 10 ? SW_ONES[n] : n % 10 === 0 ? SW_TENS[n] : `${SW_TENS[n - (n % 10)]} na ${SW_ONES[n % 10]}`);

test("every length of time, said in English: the right number of minutes from now, never tomorrow", () => {
  const rows = [
    ["remind me in 20 mins to take my medicine", 20], ["remind me in 20 minutes to take my medicine", 20], ["remind me in 20 min to take my medicine", 20], ["remind me after 20 minutes to take my medicine", 20],
    ["remind me in twenty five minutes to take my medicine", 25], ["remind me in twenty-five minutes to take my medicine", 25], ["remind me in ninety minutes to take my medicine", 90],
    ["remind me in a quarter of an hour to take my medicine", 15], ["remind me in half an hour to take my medicine", 30], ["remind me in an hour and a half to take my medicine", 90],
    ["remind me in 2 hrs to take my medicine", 120], ["remind me in 2 hr to take my medicine", 120], ["remind me in 2 hours to take my medicine", 120], ["remind me in two hours to take my medicine", 120],
    ["remind me in 1 hr 30 min to take my medicine", 90], ["remind me in 1 hour and 30 minutes to take my medicine", 90], ["remind me in 1h30m to take my medicine", 90], ["remind me in 2 hours 15 mins to take my medicine", 135],
    ["remind me in 2 and a half hours to take my medicine", 150], ["remind me in 1.5 hours to take my medicine", 90], ["remind me in three quarters of an hour to take my medicine", 45],
    ["remind me in a minute to stir", 1], ["remind me in a couple of hours to check the pump", 120], ["remind me in a few minutes to check the pump", 3], ["remind me in an hour to check the pump", 60],
    ["remind me 20 minutes from now to check the pump", 20], ["remind me two hours later to check the pump", 120], ["remind me in 45 minutes to check the pump", 45], ["remind me in 5 mins to check the pump", 5],
    ["remind me in one hour to check the pump", 60], ["remind me in sixty minutes to check the pump", 60], ["remind me in 100 minutes to check the pump", 100], ["remind me within 10 minutes to check the pump", 10],
    ["reminder 20 min medicine", 20], ["remind 15 mins pump", 15], ["remind remind me in 20 20 minutes to take take my medicine", 20]
  ];
  for (const [phrase, minutes] of rows) { const r = resolve(phrase); assert.equal(r.status, "ok", phrase); assert.equal(minutesFromNow(r), minutes, phrase); }
});

test("every number word from one to fifty-nine works as minutes, in English and in Kiswahili", () => {
  for (let n = 1; n <= 59; n += 1) {
    const english = resolve(`remind me in ${enWords(n)} minutes to take my medicine`);
    assert.equal(english.status, "ok", enWords(n)); assert.equal(minutesFromNow(english), n, `in ${enWords(n)} minutes`);
    const swahili = resolve(`nikumbushe baada ya dakika ${swWords(n)} kunywa dawa`);
    assert.equal(swahili.status, "ok", swWords(n)); assert.equal(minutesFromNow(swahili), n, `dakika ${swWords(n)}`);
    assert.equal(swahili.language, "sw");
  }
});

test("every length of time, said in Kiswahili", () => {
  const rows = [
    ["nikumbushe baada ya dakika 20 kunywa dawa", 20], ["nikumbushe baada ya dakika ishirini kunywa dawa", 20], ["nikumbushe dakika thelathini kunywa dawa", 30], ["nikumbushe dakika kumi na tano zijazo kunywa dawa", 15],
    ["nikumbushe nusu saa kunywa dawa", 30], ["nikumbushe baada ya nusu saa kunywa dawa", 30], ["nikumbushe baada ya saa moja kunywa dawa", 60], ["nikumbushe baada ya masaa mawili kunywa dawa", 120],
    ["nikumbushe baada ya saa moja na nusu kunywa dawa", 90], ["nikumbushe baada ya saa mbili na dakika kumi kunywa dawa", 130], ["nikumbushe robo saa kunywa dawa", 15], ["nikumbushe baada ya masaa matatu kunywa dawa", 180],
    ["remind me in dakika 20 to take my medicine", 20], ["remind me in dakika ishirini to take my medicine", 20], ["remind me in dakika thelathini to take my medicine", 30], ["remind me in nusu saa to take my medicine", 30],
    ["remind me in saa moja to take my medicine", 60], ["remind me in masaa mawili to take my medicine", 120], ["niremind in 20 minutes ninywe dawa", 20]
  ];
  for (const [phrase, minutes] of rows) { const r = resolve(phrase); assert.equal(r.status, "ok", phrase); assert.equal(minutesFromNow(r), minutes, phrase); }
  const days = resolve("nikumbushe baada ya siku mbili kulipa ada"); assert.equal(days.status, "ok"); assert.equal(local(days.scheduledAt), "2026-10-09 20:18");
});

test("clock times said every way are the clock they mean", () => {
  const rows = [
    ["remind me tomorrow at eight am to call the vet", "2026-10-08 08:00"], ["remind me tomorrow at 8am to call the vet", "2026-10-08 08:00"], ["remind me tomorrow at 8 a.m. to call the vet", "2026-10-08 08:00"],
    ["remind me tomorrow at 8:30 am to call the vet", "2026-10-08 08:30"], ["remind me tomorrow at 08:30 to call the vet", "2026-10-08 08:30"], ["remind me tomorrow at 20:00 to call the vet", "2026-10-08 20:00"],
    ["remind me tomorrow at 8:30 pm to call the vet", "2026-10-08 20:30"], ["remind me tomorrow at 8.30pm to call the vet", "2026-10-08 20:30"], ["remind me tomorrow at 1830 hrs to call the vet", "2026-10-08 18:30"],
    ["remind me tomorrow at ten in the morning to call the vet", "2026-10-08 10:00"], ["remind me tomorrow at 10 in the morning to call the vet", "2026-10-08 10:00"], ["remind me tomorrow at 7 in the evening to call the vet", "2026-10-08 19:00"],
    ["remind me tomorrow at 7 pm to call the vet", "2026-10-08 19:00"], ["remind me tomorrow at 9 at night to call the vet", "2026-10-08 21:00"], ["remind me tomorrow at 3 in the afternoon to call the vet", "2026-10-08 15:00"],
    ["remind me tomorrow at eight thirty pm to call the vet", "2026-10-08 20:30"], ["remind me tomorrow at eight forty five am to call the vet", "2026-10-08 08:45"], ["remind me tomorrow at half past seven in the morning to call the vet", "2026-10-08 07:30"],
    ["remind me tomorrow at half past seven pm to call the vet", "2026-10-08 19:30"], ["remind me tomorrow at quarter to six in the evening to call the vet", "2026-10-08 17:45"], ["remind me tomorrow at quarter past six am to call the vet", "2026-10-08 06:15"],
    ["remind me tomorrow at ten past eight am to call the vet", "2026-10-08 08:10"], ["remind me tomorrow at twenty to nine pm to call the vet", "2026-10-08 20:40"], ["remind me tomorrow at noon to call the vet", "2026-10-08 12:00"],
    ["remind me tomorrow at 12 noon to call the vet", "2026-10-08 12:00"], ["remind me tomorrow at midnight to call the vet", "2026-10-08 00:00"], ["remind me tomorrow at 12 midnight to call the vet", "2026-10-08 00:00"],
    ["remind me tomorrow at 5 oclock in the evening to call the vet", "2026-10-08 17:00"], ["remind me tomorrow at 12pm to call the vet", "2026-10-08 12:00"], ["remind me tomorrow at 12am to call the vet", "2026-10-08 00:00"],
    ["remind me tomorrow at 14:30 to call the vet", "2026-10-08 14:30"], ["remind me tomorrow at 0630 to call the vet", "2026-10-08 06:30"], ["remind me tomorrow at 6.45 am to call the vet", "2026-10-08 06:45"],
    ["remind me tomorrow morning at 7 to call the vet", "2026-10-08 07:00"], ["remind me tomorrow evening at 6 to call the vet", "2026-10-08 18:00"], ["remind me tomorrow night at 10 to call the vet", "2026-10-08 22:00"],
    ["remind me at 9pm to call the vet", "2026-10-07 21:00"], ["remind me at 8pm to call the vet", "2026-10-08 20:00"], ["remind me at 8:30 pm to call the vet", "2026-10-07 20:30"],
    ["remind me tonight at 11 to lock the gate", "2026-10-07 23:00"], ["remind me tonight at 9 to lock the gate", "2026-10-07 21:00"],
    ["remind me on Friday at 3pm to pay the workers", "2026-10-09 15:00"], ["remind me on Friday to pay the workers", "2026-10-09 09:00"], ["remind me tomorrow morning to check the tank", "2026-10-08 08:00"],
    ["remind me on 15 October at 10am to see the buyer", "2026-10-15 10:00"]
  ];
  for (const [phrase, when] of rows) { const r = resolve(phrase); assert.equal(r.status, "ok", `${phrase} -> ${r.status} ${r.ask?.kind || ""}`); assert.equal(local(r.scheduledAt), when, phrase); }
});

test("the Kiswahili clock: saa moja is 7, saa mbili is 8, saa sita is 12, with asubuhi, mchana, jioni and usiku", () => {
  const rows = [
    ["nikumbushe kesho saa moja asubuhi kwenda sokoni", "2026-10-08 07:00"], ["nikumbushe kesho saa mbili asubuhi kumpigia daktari simu", "2026-10-08 08:00"], ["nikumbushe kesho saa tatu asubuhi kunywesha ng'ombe", "2026-10-08 09:00"],
    ["nikumbushe kesho saa nne asubuhi kwenda sokoni", "2026-10-08 10:00"], ["nikumbushe kesho saa tano asubuhi kwenda sokoni", "2026-10-08 11:00"], ["nikumbushe kesho saa sita mchana kula", "2026-10-08 12:00"],
    ["nikumbushe kesho saa saba mchana kula", "2026-10-08 13:00"], ["nikumbushe kesho saa nane mchana kula", "2026-10-08 14:00"], ["nikumbushe kesho saa tisa mchana kula", "2026-10-08 15:00"],
    ["nikumbushe kesho saa kumi jioni kufunga duka", "2026-10-08 16:00"], ["nikumbushe kesho saa kumi na moja jioni kufunga duka", "2026-10-08 17:00"], ["nikumbushe kesho saa kumi na mbili jioni kufunga duka", "2026-10-08 18:00"],
    ["nikumbushe kesho saa moja usiku kufunga mlango", "2026-10-08 19:00"], ["nikumbushe kesho saa mbili usiku kufunga mlango", "2026-10-08 20:00"], ["nikumbushe kesho saa tatu usiku kufunga mlango", "2026-10-08 21:00"],
    ["nikumbushe kesho saa nne usiku kufunga mlango", "2026-10-08 22:00"], ["nikumbushe kesho saa tano usiku kufunga mlango", "2026-10-08 23:00"], ["nikumbushe kesho saa sita usiku kufunga mlango", "2026-10-08 00:00"],
    ["nikumbushe kesho saa kumi na mbili alfajiri kuamka", "2026-10-08 06:00"], ["nikumbushe kesho saa tatu na nusu asubuhi kunywa dawa", "2026-10-08 09:30"], ["nikumbushe kesho saa tatu na robo asubuhi kunywa dawa", "2026-10-08 09:15"],
    ["nikumbushe kesho saa tatu kasoro robo asubuhi kunywa dawa", "2026-10-08 08:45"], ["nikumbushe kesho saa nne na dakika kumi asubuhi kunywa dawa", "2026-10-08 10:10"], ["nikumbushe kesho saa 2 asubuhi kunywa dawa", "2026-10-08 08:00"],
    ["nikumbushe kesho asubuhi saa mbili kunywa dawa", "2026-10-08 08:00"], ["nikumbushe leo saa tatu usiku kunywa dawa", "2026-10-07 21:00"], ["nikumbushe kesho saa 14:30 kunywa dawa", "2026-10-08 14:30"],
    ["nikumbushe jumatatu saa mbili asubuhi kunywa dawa", "2026-10-12 08:00"], ["nikumbushe keshokutwa saa mbili usiku kufunga mlango", "2026-10-09 20:00"]
  ];
  for (const [phrase, when] of rows) { const r = resolve(phrase); assert.equal(r.status, "ok", `${phrase} -> ${r.status} ${r.ask?.kind || ""}`); assert.equal(local(r.scheduledAt), when, phrase); assert.equal(r.language, "sw", phrase); }
  assert.equal(swahiliClockWords(20, 0), "saa mbili usiku");
  assert.equal(swahiliClockWords(7, 30), "saa moja na nusu asubuhi");
  assert.equal(swahiliClockWords(12, 0), "saa sita mchana");
  assert.equal(swahiliClockWords(19, 45), "saa mbili kasoro robo usiku");
});

test("a time that is ambiguous is ASKED about, never guessed (a bare 'at 6' is morning or evening)", () => {
  const rows = [
    ["remind me at 6 to cook", "ambiguous-hour"], ["remind me tomorrow at 7 to call the vet", "ambiguous-hour"], ["remind me at 5 to feed the goats", "ambiguous-hour"], ["remind me tomorrow at 8 to call", "ambiguous-hour"],
    ["remind me at 6:30 to cook", "ambiguous-hour"], ["remind me at eight to call the vet", "ambiguous-hour"], ["remind me tomorrow at eight thirty to call the vet", "ambiguous-hour"], ["remind me tomorrow at half past seven to call the vet", "ambiguous-hour"],
    ["remind me tomorrow at quarter to six to call the vet", "ambiguous-hour"], ["remind me at 12 to eat", "ambiguous-hour"], ["remind me on Friday at 3 to pay", "ambiguous-hour"], ["remind me around 6 to cook", "ambiguous-hour"],
    ["nikumbushe kesho saa mbili kumpigia daktari simu", "ambiguous-hour"], ["nikumbushe saa tatu kunywa dawa", "ambiguous-hour"],
    ["remind me at 8pm tomorrow at 9am to call", "conflict"], ["remind me in 20 minutes at 5pm to call", "conflict"], ["remind me in 20 minutes or in 2 hours to call", "conflict"],
    ["remind me in 5 to call", "unit"], ["remind me today to call the vet", "need-time-today"], ["remind me next week to call the vet", "need-day"]
  ];
  for (const [phrase, kind] of rows) {
    const r = resolve(phrase);
    assert.notEqual(r.status, "ok", `${phrase} must not be set`);
    assert.equal(r.ask.kind, kind, phrase);
    assert.ok(r.ask.en && r.ask.sw, `${phrase} has a question in both languages`);
    assert.match(r.ask.en, /Nothing was set yet\.$/); assert.match(r.ask.sw, /Bado sijaweka chochote\.$/);
  }
  assert.match(resolve("remind me at 6 to cook").ask.en, /^At 6 in the morning or in the evening\?/);
  assert.match(resolve("nikumbushe kesho saa mbili kumpigia daktari simu").ask.sw, /^Samahani, saa ngapi\?/);
  assert.match(resolve("remind me at 12 to eat").ask.en, /^At 12 noon or 12 midnight\?/);
});

test("no time at all is a question, not tomorrow", () => {
  for (const phrase of ["remind me to call the vet", "remind me to take my medicine", "remind me later to call", "remind me soon to call", "remind me sometime", "nikumbushe kumpigia daktari simu"]) {
    const r = resolve(phrase);
    assert.equal(r.status, "none", phrase);
    assert.match(r.ask.en, /^When should I remind you\?/);
    assert.match(r.ask.sw, /^Nikukumbushe lini\?/);
  }
  // the older shape still hands back an instant for callers that need one, but says it is a guess
  const old = parseAssistantReminderTime("remind me to water the plants", { now: NOW, timeZone: ZONE });
  assert.equal(old.status, "none"); assert.ok(new Date(old.scheduledAt).getTime() > NOW.getTime());
});

test("the time is said back in the person's own words and zone", () => {
  assert.equal(resolve("remind me at 8pm to call").readback, "at 8:00 pm tomorrow", "8pm has not come yet at 20:18? it has passed, so it is tomorrow, and said so");
  assert.equal(resolve("remind me at 9pm to call").readback, "at 9:00 pm today");
  assert.equal(resolve("remind me in 20 mins to call").readback, "in 20 minutes, at 8:38 pm today");
  assert.equal(resolve("remind me tomorrow morning to call").readback, "at 8:00 am tomorrow");
  assert.equal(resolve("remind me tomorrow to call").readback, "at 9:00 am tomorrow", "a day with no time is said to be 9:00 am");
  assert.equal(resolve("remind me on Friday at 3pm to call").readback, "at 3:00 pm on Friday, 9 October");
  assert.equal(resolve("nikumbushe baada ya dakika 20 kunywa dawa").readbackSw, "baada ya dakika 20, leo saa mbili na dakika 38 usiku");
  assert.equal(resolve("nikumbushe kesho saa tatu asubuhi kunywa dawa").readbackSw, "kesho saa tatu asubuhi");
  assert.equal(describeMoment("2026-10-08T05:00:00Z", { now: NOW, timeZone: "Africa/Lagos" }), "at 6:00 am tomorrow");
});

test("the same words mean the person's own clock: a Lagos 7am is not an East Africa 7am", () => {
  const nairobi = resolve("remind me tomorrow at 7am to check the tank", { timeZone: "Africa/Nairobi" });
  const lagos = resolve("remind me tomorrow at 7am to check the tank", { timeZone: "Africa/Lagos" });
  assert.equal(nairobi.scheduledAt, "2026-10-08T04:00:00.000Z");
  assert.equal(lagos.scheduledAt, "2026-10-08T06:00:00.000Z");
  assert.equal(resolveReminderTimeZone({ requested: "Africa/Lagos", user: { country: "Kenya" } }), "Africa/Lagos", "the device's zone wins");
  assert.equal(resolveReminderTimeZone({ user: { country: "Nigeria" } }), "Africa/Lagos");
  assert.equal(resolveReminderTimeZone({ user: { country: "Kenya" } }), "Africa/Nairobi");
  assert.equal(resolveReminderTimeZone({ user: { country: "Ghana", timeZone: "Africa/Accra" } }), "Africa/Accra");
  assert.equal(resolveReminderTimeZone({ user: { country: "Atlantis" } }), "Africa/Nairobi");
  assert.equal(resolveReminderTimeZone({ requested: "Not/AZone", user: {} }), "Africa/Nairobi");
  assert.deepEqual(resolveReminderTimeZoneDetail({ user: { country: "Nigeria" } }), { zone: "Africa/Lagos", source: "country" });
  assert.equal(resolveReminderTimeZoneDetail({ user: {} }).source, "default");
});

test("the task is just the task: no politeness, no lead-in, no time, no stutter", () => {
  const rows = [
    ["remind me in 20 mins to take my medicine", "take my medicine"], ["could you maybe remind me to take my medicine in 20 minutes", "take my medicine"], ["remind you to maybe remind me to take my medicine", "take my medicine"],
    ["please remind me tomorrow at 9am to call Ron", "call Ron"], ["abeg remind me to buy seed tomorrow at 7am", "buy seed"], ["can you please remind me to pay the school fees on Friday", "pay the school fees"],
    ["I want you to remind me to check the pump in an hour", "check the pump"], ["hey Kyro, remind me tomorrow at 6pm to feed the goats", "feed the goats"], ["remind me tomorrow at eight am too call the vet", "call the vet"],
    ["remind remind me in 20 20 minutes to take take my medicine", "take my medicine"], ["remind me about the clinic tomorrow at 9am", "about the clinic"], ["remind tomorrow 8am vet", "vet"], ["reminder 20 min medicine", "medicine"],
    ["tafadhali nikumbushe kesho saa mbili asubuhi kumpigia daktari simu", "kumpigia daktari simu"], ["naomba unikumbushe baada ya dakika 20 kunywa dawa", "kunywa dawa"], ["nikumbushe nusu saa kunywa dawa", "kunywa dawa"],
    ["niremind in 20 minutes ninywe dawa", "ninywe dawa"], ["remind me to take metformin 500mg tomorrow at 8am", "take metformin 500mg"], ["remind me to call the vet please", "call the vet"], ["", "follow up"]
  ];
  for (const [text, task] of rows) assert.equal(extractAssistantReminderTask(text), task, text);
});

test("a price, a quantity or a duration of something is not a reminder time", () => {
  for (const text of ["remind me to sell maize at 40 per kg", "remind me to buy 5 bags", "remind me to water the plants", "remind me to pay 200 kg", "remind me to boil it for 20 minutes", "remind me to buy 2 hours of airtime"]) assert.equal(hasReminderTimePhrase(text), false, text);
  for (const text of ["remind me at 6 to cook", "remind me in 20 mins to x", "remind me eight thirty pm to x", "nikumbushe nusu saa kunywa dawa", "nikumbushe saa mbili usiku kufunga", "remind me in 5 to x", "remind me tomorrow to x"]) assert.equal(hasReminderTimePhrase(text), true, text);
  assert.equal(scanTime("sell at 40 per kg").clocks.length, 0);
  assert.equal(scanTime("boil it for 20 minutes").durations.length, 0);
});

test("the calendar reads 'tomorrow at ten in the morning' too (it used to be saved with no time)", () => {
  const today = "2026-10-07";
  assert.equal(readRequest("Add team meeting to my calendar tomorrow at ten in the morning", today).time, "10:00");
  assert.equal(readRequest("Add vet visit to my calendar tomorrow at half past two in the afternoon", today).time, "14:30");
  assert.equal(readRequest("Add vet visit to my calendar tomorrow at 10am", today).time, "10:00");
});
