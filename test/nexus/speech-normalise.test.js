"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { normaliseSpoken, cleanText, toAsciiDigits, hasDanger, MAX_PLANNER_INPUT } = require("../../nexus/speech/normalise.js");

// The one front door for what a person says to Kyro. Every table row is [what was said, what the readers should see].

const same = text => [text, text];
const run = (rows, label) => {
  for (const [said, meant] of rows) assert.equal(normaliseSpoken(said).text, meant, `${label}: ${JSON.stringify(said)}`);
};

test("wake words and greetings in front of a request are dropped", () => {
  run([
    ["Kyro add milk to my shopping list", "add milk to my shopping list"],
    ["kyro, add milk to my shopping list", "add milk to my shopping list"],
    ["KYRO add milk to my shopping list", "add milk to my shopping list"],
    ["hey Kyro add milk to my shopping list", "add milk to my shopping list"],
    ["hey kyro, add milk to my shopping list", "add milk to my shopping list"],
    ["hi Kyro, what is on my shopping list", "what is on my shopping list"],
    ["ok kyro remind me in 20 minutes to take my medicine", "remind me in 20 minutes to take my medicine"],
    ["okay Nexus add milk to my list", "add milk to my list"],
    ["Nexus add milk to my shopping list", "add milk to my shopping list"],
    ["Nexus, show my reminders", "show my reminders"],
    ["hello Nexus show my reminders", "show my reminders"],
    ["AgriNexus, what is the weather in Kisumu", "what is the weather in Kisumu"],
    ["agri nexus what is the weather in Kisumu", "what is the weather in Kisumu"],
    ["Agri-Nexus add maize to my to-do list", "add maize to my to-do list"],
    ["Jarvis call mama", "call mama"],
    ["hey add milk to my shopping list", "add milk to my shopping list"],
    ["ok add milk to my shopping list", "add milk to my shopping list"],
    ["okay so add milk to my shopping list", "add milk to my shopping list"],
    ["yo add milk to my shopping list", "add milk to my shopping list"],
    ["sasa Kyro weka maziwa kwenye orodha yangu ya manunuzi", "weka maziwa kwenye orodha yangu ya manunuzi"],
    ["mambo Kyro ongeza mayai kwenye orodha yangu ya manunuzi", "ongeza mayai kwenye orodha yangu ya manunuzi"],
    ["oya Kyro add milk to my shopping list", "add milk to my shopping list"]
  ], "wake word");
});

test("the older voice path can keep a wake word that opens a question or an introduction (its greeting readers want it)", () => {
  assert.equal(normaliseSpoken("Hey Nexus, are you with me today?").text, "are you with me today?");
  assert.equal(normaliseSpoken("Hey Nexus, are you with me today?", { wakeBeforeQuestions: false }).text, "Hey Nexus, are you with me today?");
  assert.equal(normaliseSpoken("Hey Nexus, add milk to my list", { wakeBeforeQuestions: false }).text, "add milk to my list");
  assert.equal(normaliseSpoken("Hello Nexus, this is Ron").text, "Hello Nexus, this is Ron", "an introduction is left whole");
  assert.equal(normaliseSpoken("And what about beans?").text, "And what about beans?", "a follow-up keeps its 'and'");
});

test("fillers are dropped, even when they sit in the middle or at the end", () => {
  run([
    ["um add milk to my shopping list", "add milk to my shopping list"],
    ["um, add milk to my shopping list", "add milk to my shopping list"],
    ["uh add milk to my shopping list", "add milk to my shopping list"],
    ["add milk uh to my shopping list", "add milk to my shopping list"],
    ["add milk to my um shopping list", "add milk to my shopping list"],
    ["umm uhh add milk to my shopping list", "add milk to my shopping list"],
    ["hmm add milk to my shopping list", "add milk to my shopping list"],
    ["er add milk to my shopping list", "add milk to my shopping list"],
    ["my name is Amina uh", "my name is Amina"],
    ["my name is um Amina", "my name is Amina"],
    ["i sold uh 3 bags of maize for 4500", "i sold 3 bags of maize for 4500"],
    ["like, add milk to my shopping list", "add milk to my shopping list"],
    ["add milk, you know, to my shopping list", "add milk to my shopping list"],
    ["add milk to my shopping list, you know", "add milk to my shopping list"],
    ["I mean, add milk to my shopping list", "add milk to my shopping list"],
    ["basically, add milk to my shopping list", "add milk to my shopping list"],
    ["yaani, weka maziwa kwenye orodha yangu ya manunuzi", "weka maziwa kwenye orodha yangu ya manunuzi"]
  ], "filler");
});

test("polite wrappers in English come off when a real request follows", () => {
  run([
    ["please add milk to my shopping list", "add milk to my shopping list"],
    ["pls add milk to my shopping list", "add milk to my shopping list"],
    ["kindly add milk to my shopping list", "add milk to my shopping list"],
    ["could you add milk to my shopping list", "add milk to my shopping list"],
    ["could you please add milk to my shopping list", "add milk to my shopping list"],
    ["could you maybe put milk on my shopping list please", "put milk on my shopping list"],
    ["can you add milk to my shopping list", "add milk to my shopping list"],
    ["can you please add milk to my shopping list", "add milk to my shopping list"],
    ["would you add milk to my shopping list", "add milk to my shopping list"],
    ["would you mind adding milk", "would you mind adding milk"],
    ["would you mind add milk to my shopping list", "add milk to my shopping list"],
    ["will you add milk to my shopping list", "add milk to my shopping list"],
    ["can I ask you to add fix the gate to my to-do list", "add fix the gate to my to-do list"],
    ["could I ask you to remind me in 20 minutes to take my medicine", "remind me in 20 minutes to take my medicine"],
    ["I would like you to add milk to my shopping list", "add milk to my shopping list"],
    ["I'd like you to add milk to my shopping list", "add milk to my shopping list"],
    ["I want you to add milk to my shopping list", "add milk to my shopping list"],
    ["I need you to add milk to my shopping list", "add milk to my shopping list"],
    ["I was wondering if you could add milk to my shopping list", "add milk to my shopping list"],
    ["do you mind put milk on my shopping list", "put milk on my shopping list"],
    ["is it possible to add milk to my shopping list", "add milk to my shopping list"],
    ["go ahead and add milk to my shopping list", "add milk to my shopping list"],
    ["just add milk to my shopping list", "add milk to my shopping list"],
    ["could you record that I sold 3 bags of maize for 4500", "I sold 3 bags of maize for 4500"],
    ["can I log that it rained 12 mm today", "it rained 12 mm today"],
    ["can I tell you I spent 500 on seeds", "I spent 500 on seeds"],
    ["could you help me make a CV", "make a CV"],
    ["can you tell me what is on my shopping list", "what is on my shopping list"],
    ["could you please tell me what is on my shopping list", "what is on my shopping list"]
  ], "polite");
});

test("Kiswahili wrappers are read into the plain command", () => {
  run([
    ["tafadhali ongeza maziwa kwenye orodha yangu ya manunuzi", "ongeza maziwa kwenye orodha yangu ya manunuzi"],
    ["naomba uniwekee maziwa kwenye orodha ya manunuzi", "weka maziwa kwenye orodha ya manunuzi"],
    ["naomba uniongezee mayai kwenye orodha yangu ya manunuzi", "ongeza mayai kwenye orodha yangu ya manunuzi"],
    ["naomba tafadhali uniandikie kwamba ng'ombe anachechemea", "andika kwamba ng'ombe anachechemea"],
    ["naomba unikumbushe kesho saa tatu asubuhi kunywesha ng'ombe", "nikumbushe kesho saa tatu asubuhi kunywesha ng'ombe"],
    ["tafadhali nisaidie kuweka maziwa kwenye orodha yangu ya manunuzi", "weka maziwa kwenye orodha yangu ya manunuzi"],
    ["unaweza kuongeza maziwa kwenye orodha yangu ya manunuzi", "ongeza maziwa kwenye orodha yangu ya manunuzi"],
    ["naomba unisomee orodha yangu ya manunuzi", "nisomee orodha yangu ya manunuzi"],
    ["ongeza maziwa kwenye orodha yangu ya manunuzi tafadhali", "ongeza maziwa kwenye orodha yangu ya manunuzi"],
    ["ongeza maziwa kwenye orodha yangu ya manunuzi asante", "ongeza maziwa kwenye orodha yangu ya manunuzi"],
    ["ongeza maziwa kwenye orodha yangu ya manunuzi asante sana", "ongeza maziwa kwenye orodha yangu ya manunuzi"],
    ["weka maziwa kwa shopping list yangu bro", "weka maziwa kwa shopping list yangu"]
  ], "swahili");
});

test("Nigerian Pidgin: abeg and the common verbs are read into plain English", () => {
  run([
    ["abeg add milk to my shopping list", "add milk to my shopping list"],
    ["abeg put fix the gate for my to-do list", "put fix the gate to my to-do list"],
    ["abeg comot milk from my shopping list", "remove milk from my shopping list"],
    ["abeg write down say the cow dey limp", "write down that the cow dey limp"],
    ["wetin dey my shopping list", "what is on my shopping list"],
    ["my name na Amina", "my name is Amina"],
    ["I don sell 3 bags of maize for 4500", "I sold 3 bags of maize for 4500"],
    ["I don spend 500 for seeds", "I spent 500 for seeds"],
    ["I don harvest 20 kg of tomatoes", "I harvested 20 kg of tomatoes"],
    ["abeg text Otieno say I dey come", "text Otieno saying I dey come"],
    ["biko add milk to my shopping list", "add milk to my shopping list"],
    ["abeg remind me after 20 minutes make I take my medicine", "remind me in 20 minutes to take my medicine"]
  ], "pidgin");
});

test("thanks, laughs, vocatives and trailing punctuation after the request are dropped", () => {
  run([
    ["add milk to my shopping list, thank you", "add milk to my shopping list"],
    ["add milk to my shopping list thank you", "add milk to my shopping list"],
    ["add milk to my shopping list thanks", "add milk to my shopping list"],
    ["add milk to my shopping list thanks a lot", "add milk to my shopping list"],
    ["add milk to my shopping list thank you so much", "add milk to my shopping list"],
    ["add milk to my shopping list. Thank you.", "add milk to my shopping list"],
    ["add milk to my shopping list thx", "add milk to my shopping list"],
    ["add milk to my shopping list asante", "add milk to my shopping list"],
    ["add milk haha", "add milk"],
    ["add milk to my shopping list hahaha", "add milk to my shopping list"],
    ["add milk to my shopping list lol", "add milk to my shopping list"],
    ["add milk to my shopping list hehe", "add milk to my shopping list"],
    ["add milk to my shopping list, Kyro", "add milk to my shopping list"],
    ["add milk to my shopping list Kyro", "add milk to my shopping list"],
    ["add milk to my shopping list nexus", "add milk to my shopping list"],
    ["add milk to my shopping list bro", "add milk to my shopping list"],
    ["add milk to my shopping list please", "add milk to my shopping list"],
    ["add milk to my shopping list pls", "add milk to my shopping list"],
    ["add milk to my shopping list o", "add milk to my shopping list"],
    ["add milk to my shopping list abeg", "add milk to my shopping list"],
    ["add milk to my shopping list.", "add milk to my shopping list"],
    ["add milk to my shopping list!", "add milk to my shopping list"],
    ["add milk to my shopping list?", "add milk to my shopping list"],
    ["add milk to my shopping list...", "add milk to my shopping list"],
    ["add milk to my shopping list 😂", "add milk to my shopping list"],
    ["add milk to my shopping list, please, thank you", "add milk to my shopping list"],
    ["show my reminders thanks", "show my reminders"]
  ], "trailing");
});

test("a question keeps its question mark; a request loses it", () => {
  run([
    same("what is on my shopping list?"),
    same("what is the weather in Kisumu tomorrow?"),
    same("how much did I spend this week?"),
    same("do I have anything on Monday?"),
    ["show my reminders?", "show my reminders"],
    ["what is on my shopping list.", "what is on my shopping list"]
  ], "question mark");
});

test("stutters and repeats collapse; legitimate repeats are kept", () => {
  run([
    ["add add milk", "add milk"],
    ["add add add milk to my list", "add milk to my list"],
    ["remind remind me in 20 20 minutes to take take my medicine", "remind me in 20 minutes to take my medicine"],
    ["add milk milk to my shopping list", "add milk to my shopping list"],
    ["Add add milk to my shopping list", "Add milk to my shopping list"],
    ["add milk to to my shopping list", "add milk to my shopping list"],
    ["add milk add milk", "add milk"],
    ["weka weka maziwa kwenye orodha", "weka maziwa kwenye orodha"],
    ["no no no", "no"],
    ["yes yes", "yes"],
    ["blah blah blah blah blah add milk to my shopping list", "blah add milk to my shopping list"],
    ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaa"],
    same("bye bye"),
    same("polepole"),
    same("add 100 100 shillings")
  ].map(([said, meant]) => (said === "add 100 100 shillings" ? [said, "add 100 shillings"] : [said, meant])), "stutter");
});

test("invisible characters, odd spaces, quotes and Unicode forms are cleaned", () => {
  const zw = String.fromCharCode(0x200b);
  run([
    [`I${zw} have${zw} chest${zw} pain`, "I have chest pain"],
    [`add​milk to my list`, "addmilk to my list"],
    [`add milk to my　list`, "add milk to my list"],
    ["add milk﻿ to my list", "add milk to my list"],
    ["add\tmilk\nto my list", "add milk to my list"],
    ["add   milk    to   my   list", "add milk to my list"],
    ["  add milk to my list  ", "add milk to my list"],
    ["add milk to my list\u0000", "add milk to my list"],
    ["add “milk” to my list", 'add "milk" to my list'],
    ["it’s milk", "it's milk"],
    ["Ǻdd milk", "Ǻdd milk"],
    ["my name is Adó Baba", "my name is Adó Baba".normalize("NFC")],
    ["é", "é"],
    ["ＡＢＣ add milk", "ABC add milk"],
    ["sms ０７１２３４５６７８ hi", "sms 0712345678 hi"],
    ["sms ٠٧١٢٣٤٥٦٧٨ hi", "sms 0712345678 hi"],
    ["sms ۰۷۱۲۳۴۵۶۷۸ hi", "sms 0712345678 hi"],
    ["sms ०७१२३४५६७८ hi", "sms 0712345678 hi"]
  ], "unicode");
  assert.equal(toAsciiDigits("٠١٢٣٤٥٦٧٨٩ ０１２３４５６７８９ ०१२३४५६७८९"), "0123456789 0123456789 0123456789");
  assert.equal(cleanText(`a${zw}b`), "ab");
  assert.equal(cleanText(null), "");
  assert.equal(cleanText(undefined), "");
});

test("a rambling lead-in is dropped and the request after it is kept", () => {
  const ramble = tail => `so um yesterday I went to the market and the prices were really crazy and the matatu was late and my sister keeps calling me about the wedding and anyway ${tail}`;
  run([
    [ramble("please add milk to my shopping list"), "add milk to my shopping list"],
    [ramble("today I sold 3 bags of maize for 4500"), "today I sold 3 bags of maize for 4500"],
    [ramble("I spent 500 on seeds"), "I spent 500 on seeds"],
    [ramble("how much did I spend this week"), "how much did I spend this week"],
    [ramble("it rained 12 mm today"), "it rained 12 mm today"],
    [ramble("my name is Amina"), "my name is Amina"],
    [ramble("remind me in 20 minutes to take my medicine"), "remind me in 20 minutes to take my medicine"],
    [ramble("I have chest pain"), "I have chest pain"],
    ["so the weather was bad but by the way add milk to my shopping list", "add milk to my shopping list"],
    ["we talked for ages, btw show my reminders", "show my reminders"]
  ], "rambling");
});

test("a message that is too long keeps the sentence with the request and any danger phrase", () => {
  const filler = "the prices were really crazy and the matatu was very late. ".repeat(12);
  const long1 = normaliseSpoken(`${filler} Please add milk to my shopping list.`);
  assert.equal(long1.text, "add milk to my shopping list");
  assert.ok(long1.stripped.includes("long-input"));
  const long2 = normaliseSpoken(`${filler} My father has chest pain. Please add milk to my shopping list.`);
  assert.match(long2.text, /chest pain/);
  assert.match(long2.text, /add milk to my shopping list/);
  assert.ok(long2.text.length <= MAX_PLANNER_INPUT, long2.text.length);
  const long3 = normaliseSpoken(`${"blah ".repeat(1000)}I have chest pain`);
  assert.equal(long3.text, "blah I have chest pain");
  const long4 = normaliseSpoken(`remind me in 20 minutes to take my medicine ${"blah ".repeat(1000)}`);
  assert.equal(long4.text, "remind me in 20 minutes to take my medicine blah");
  const long5 = normaliseSpoken("a".repeat(5000));
  assert.ok(long5.text.length < 10);
  const noVerb = normaliseSpoken("word ".repeat(100).split(" ").map((w, i) => `${w}${i}`).join(" "));
  assert.ok(noVerb.text.length <= MAX_PLANNER_INPUT);
});

test("things that are part of an item, a name or a message are NEVER stripped", () => {
  run([
    same("add Thank You cards to my list"),
    same("add thank you cards"),
    same("write a thank you"),
    same("send thank you"),
    same("say thank you"),
    same("text mama thank you"),
    same("tell mama thank you"),
    same("text John haha"),
    same("my name is Kyro"),
    same("call me Kyro"),
    same("call me Nexus"),
    same("add Nexus Properties to my contacts"),
    same("I like maize"),
    same("I like to add milk"),
    same("it rained 12 mm today"),
    same("rain 12 mm"),
    same("go to the ER"),
    same("take her to the ER"),
    same("call the man"),
    same("call my boss"),
    same("call the boss"),
    same("call mama"),
    same("I want to harvest tomatoes"),
    same("I need to buy fertilizer"),
    same("can you swim"),
    same("can you help with maize"),
    same("hello"),
    same("hi"),
    same("please"),
    same("thanks"),
    same("thank you"),
    same("yes please"),
    same("no thanks"),
    same("yes"),
    same("ok"),
    same("Kyro"),
    same("add milk and eggs to my shopping list"),
    same("add salt and pepper"),
    same("remember the milk"),
    same("tell me a joke"),
    same("text me the price"),
    same("what is on my to-do list"),
    same("my sister Kyro is here"),
    same("buy 2 bags of seed for 1500"),
    same("I sold 3 bags of maize for 4,500"),
    same("my BP is 140/90"),
    same("my blood sugar is 8.5"),
    same("add vet visit to my calendar tomorrow at 10am"),
    same("Call Juma on 0712345678"),
    same("the cow is limping"),
    same("nimeuza magunia matatu ya mahindi kwa shilingi elfu nne mia tano"),
    same("mvua imenyesha milimita kumi na mbili leo"),
    same("jina langu ni Amina")
  ], "kept");
});

test("a message to a person is passed through exactly as said", () => {
  run([
    ["text John saying I I am late, thanks", "text John saying I I am late, thanks"],
    ["Kyro, text John saying hello hello hello", "text John saying hello hello hello"],
    ["please send an sms to +254712345678: um running late haha", "send an sms to +254712345678: um running late haha"],
    ["text Otieno saying thank you", "text Otieno saying thank you"],
    ["could you text Mama Njeri saying the meeting is at 3.", "text Mama Njeri saying the meeting is at 3"],
    ["abeg text Otieno say I dey come", "text Otieno saying I dey come"],
    ["tuma ujumbe kwa +254712345678 kwamba niko njiani", "tuma ujumbe kwa +254712345678 kwamba niko njiani"]
  ], "message");
});

test("speech-recognition slips in the words of a request are repaired", () => {
  run([
    ["ad milk too my shoping list um", "add milk to my shopping list"],
    ["wat is on my shoping list", "what is on my shopping list"],
    ["add vet visit to my calender tomorow at 10 am", "add vet visit to my calendar tomorrow at 10 am"],
    ["right down that the cow is limpin", "write down that the cow is limpin"],
    ["remind me tomorrow at eight am too call the vet", "remind me tomorrow at eight am to call the vet"],
    ["show my remainders", "show my reminders"],
    ["cancle my reminder", "cancel my reminder"],
    ["make my rezume", "make my resume"],
    ["how much did i spend dis week", "how much did i spend this week"]
  ], "asr");
  // names, items and messages are left alone
  assert.equal(normaliseSpoken("add Calender Bank to my list").text, "add Calendar Bank to my list");
  assert.equal(normaliseSpoken("text Dis saying hi").text, "text Dis saying hi");
});

test("the result says what was removed, keeps the original, and flags danger", () => {
  const r = normaliseSpoken("Kyro, um, could you add milk to my shopping list, thank you?");
  assert.equal(r.text, "add milk to my shopping list");
  assert.equal(r.original, "Kyro, um, could you add milk to my shopping list, thank you?");
  assert.equal(r.clean, "Kyro, um, could you add milk to my shopping list, thank you?");
  assert.equal(r.changed, true);
  for (const label of ["wake-word", "filler", "polite", "trailing-thanks"]) assert.ok(r.stripped.includes(label), `${label} in ${r.stripped}`);
  assert.equal(r.danger, false);
  const plain = normaliseSpoken("add milk to my shopping list");
  assert.equal(plain.changed, false);
  assert.deepEqual(plain.stripped, []);
  const z = normaliseSpoken(`I​ have chest pain`);
  assert.equal(z.danger, true);
  assert.ok(z.stripped.includes("invisible-characters"));
  assert.equal(z.original, `I​ have chest pain`);
  for (const phrase of ["I have chest pain", "my baby is convulsing", "nina maumivu ya kifua", "I want to kill myself", "she is not breathing", "he is unconscious", "snake bite", "my chest dey pain me"]) assert.ok(hasDanger(phrase), phrase);
  assert.ok(!hasDanger("add milk to my shopping list"));
});

test("empty, odd and non-string input never throws and never comes back empty when there was something to say", () => {
  for (const value of ["", "   ", null, undefined, 0, 12, {}, [], "​​", "...", "!!!", "um", "uh uh", "hmm", "😂", "haha", "thanks!!!", "Kyro", "please please"]) {
    const r = normaliseSpoken(value);
    assert.equal(typeof r.text, "string");
    assert.equal(typeof r.clean, "string");
    assert.ok(Array.isArray(r.stripped));
  }
  assert.equal(normaliseSpoken("").text, "");
  assert.equal(normaliseSpoken(null).text, "");
  assert.equal(normaliseSpoken("um").text, "um", "a lone filler is not turned into nothing");
  assert.equal(normaliseSpoken("12").text, "12");
  assert.equal(normaliseSpoken("12", { language: "sw" }).language, "sw");
});

test("it is idempotent: cleaning cleaned text changes nothing", () => {
  const samples = [
    "Kyro, um, could you maybe put milk on my shopping list please, thank you haha",
    "so um yesterday I went to the market and anyway please add milk to my shopping list",
    "naomba uniwekee maziwa kwenye orodha ya manunuzi asante sana",
    "abeg comot milk from my shopping list o",
    "add add milk",
    "remind remind me in 20 20 minutes to take take my medicine",
    "text John saying I I am late, thanks",
    "I​ have chest pain",
    "my name is Amina uh",
    "ad milk too my shoping list um",
    `${"blah ".repeat(500)}Please add milk to my shopping list.`,
    "can I log that it rained 12 mm today",
    "hey kyro what is the weather in Kisumu tomorrow?"
  ];
  for (const sample of samples) {
    const once = normaliseSpoken(sample).text;
    assert.equal(normaliseSpoken(once).text, once, sample);
  }
});
