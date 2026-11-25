"use strict";
// Hausa, Amharic, Yoruba and Igbo as full languages (25 Nov 2026, owner: "we need all the languages to work ... this is the first iteration"): the screen, the voice and the forms follow them.
// Their words are a machine-drafted first version; these tests check they are wired in and complete, not how good the wording is.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..", "..");
const read = rel => fs.readFileSync(path.join(ROOT, rel), "utf8");
const FOUR = ["ha", "am", "yo", "ig"];
const sameKeys = (a, b) => assert.deepEqual(Object.keys(a).sort(), Object.keys(b).sort());

test("the four are full languages on the page and the server, and the phone line keeps its six", () => {
  const app = read("public/app.js");
  const server = read("server.js");
  assert.ok(app.includes('const fullAppLanguageCodes = new Set(["en", "fr", "sw", "ar", "es", "pt", "ha", "am", "yo", "ig"]);'));
  assert.ok(app.includes("const partialAppLanguageCodes = new Set([]);"));
  assert.ok(server.includes('const FULL_APP_LANGUAGE_CODES = new Set(["en", "es", "fr", "sw", "ar", "pt", "ha", "am", "yo", "ig"]);'));
  assert.ok(server.includes('const PHONE_LANGUAGE_CODES = new Set(["en", "es", "fr", "sw", "ar", "pt"]);'));
  assert.ok(server.includes("return process.env.TWILIO_GATHER_LANGUAGE || voiceLocaleForLanguage(canonicalPhoneLanguage(language));"), "Twilio has no Hausa, Amharic, Yoruba or Igbo speech");
  for (const code of FOUR) assert.ok(app.includes(`{ value: "${code}", label: "`), `${code} is in the language pickers`);
  const bridge = JSON.parse(read("public/native-bridge.json"));
  assert.deepEqual(bridge.languageContract.fullAppLanguages, ["en", "es", "fr", "sw", "ar", "pt", "ha", "am", "yo", "ig"]);
});

test("the voice is told the chosen language by name and never to say it is unsupported", () => {
  const server = read("server.js");
  assert.ok(server.includes("function openAiRealtimeLanguageInstruction(language = \"en\")"));
  assert.ok(server.includes("Always speak and reply in ${name}, from your first word"));
  assert.ok(server.includes("Never say ${name} is not supported"));
  assert.ok(server.includes('typeof openAiRealtimeLanguageInstruction === "function" ? openAiRealtimeLanguageInstruction(language) : "",'), "it is part of the voice's instructions");
  assert.ok(server.includes("if (process.env.OPENAI_REALTIME_INSTRUCTIONS) return `${process.env.OPENAI_REALTIME_INSTRUCTIONS} ${typeof openAiRealtimeLanguageInstruction"), "even when the instructions are replaced");
  assert.ok(!server.includes("otherwise say plainly that voice/language support is limited"), "the old line let the voice decline");
  assert.ok(server.includes('VOICE_LANGUAGE_NAMES = { en: "English", es: "Spanish", fr: "French", sw: "Kiswahili", ar: "Arabic", pt: "Portuguese", ha: "Hausa", am: "Amharic", yo: "Yoruba", ig: "Igbo" }'));
});

test("Kyro's own answers keep the language (it used to become English before the answer was written)", () => {
  const { normalizeLocale } = require("../../nexus/experience/interaction-profile.js");
  for (const code of FOUR) assert.equal(normalizeLocale(code), code);
  assert.equal(normalizeLocale("ha-NG"), "ha");
});

test("every translated screen table has all four languages with the same keys as English", () => {
  const { TEXT } = require("../../public/page-text.js");
  for (const code of FOUR) sameKeys(TEXT[code], TEXT.en);
  const { STRINGS } = require("../../public/kyro-media-player.js");
  for (const code of FOUR) sameKeys(STRINGS[code], STRINGS.en);
  for (const file of ["kyro-walkthrough", "kyro-capture", "kyro-accessibility-commands"]) {
    const { TEXT: table } = require(`../../public/${file}.js`);
    for (const code of FOUR) sameKeys(table[code], table.en);
  }
  const { languageOf, tx } = require("../../public/page-text.js");
  assert.equal(languageOf("ha-NG"), "ha");
  assert.equal(languageOf("am"), "am");
  assert.equal(languageOf("de"), "en");
  assert.notEqual(tx("yo", "team.h1"), tx("en", "team.h1"));
});

test("the screen pieces use the person's language, not just Kiswahili or English", () => {
  const app = read("public/app.js");
  assert.ok(app.includes("function kyroModuleLanguage() {"));
  assert.ok(!app.includes('languageCode() === "sw" ? "sw" : "en"'), "no piece is squeezed to Kiswahili-or-English any more");
  const { reply } = require("../../public/kyro-accessibility-commands.js");
  assert.equal(typeof reply, "function");
  const { mediaControlWithoutPlayer } = require("../../nexus/media/command-route-controls.js");
  const paused = mediaControlWithoutPlayer("pause the music", { language: "ha" });
  if (paused) assert.equal(paused.lang, "ha");
  const swahili = mediaControlWithoutPlayer("pause the music", { language: "sw" });
  if (swahili) assert.equal(swahili.lang, "sw");
});

test("the forms understand the command words their prompts tell people to say", () => {
  const { classifyControl, isDoneCollecting } = require("../../public/kyro-voice-intake.js");
  assert.equal(classifyControl("tsallake"), "skip");
  assert.equal(classifyControl("Soke."), "cancel");
  assert.equal(classifyControl("ሰርዝ"), "cancel");
  assert.equal(classifyControl("fò ó"), "skip");
  assert.equal(classifyControl("fo o"), "skip", "without tone marks too");
  assert.equal(classifyControl("kagbuo"), "cancel");
  assert.equal(classifyControl("maimaita"), "repeat");
  assert.equal(classifyControl("Ee", { inConfirm: true }), "yes");
  assert.equal(isDoneCollecting("shi ke nan"), true);
  assert.equal(classifyControl("Ina noma masara"), null, "an answer is still an answer");
  assert.equal(classifyControl("skip"), "skip", "English is unchanged");
  assert.equal(classifyControl("ruka"), "skip", "Kiswahili is unchanged");
  const { parseControl } = require("../../public/kyro-walkthrough.js");
  assert.equal(parseControl("na gaba"), "next");
  assert.equal(parseControl("ቀጣይ"), "next");
  assert.equal(parseControl("laghachi"), "back");
  assert.equal(parseControl("next"), "next");
  assert.equal(parseControl("I grow maize"), null);
});

test("speech shows the language only by a greeting or name phrase, never by a language's name in English", () => {
  const app = read("public/app.js");
  assert.ok(app.includes('if (/[\\u1200-\\u137f]/.test(raw)) return { language: "am", label: "Amharic", evidence: "Ge\'ez script" };'));
  assert.ok(app.includes('{ language: "ha", label: "Hausa", tests: [/\\bsannu\\b/'));
  assert.ok(!/language: "ha", label: "Hausa", tests: \[[^\]]*\\bhausa\\b/.test(app), "\"Show me Hausa courses\" must not switch the language");
});

test("the live voice test can speak the four and has a case for each", () => {
  const rig = read("scripts/live-voice-suite/rig-page.js");
  assert.ok(rig.includes('ha: "ha-NG", am: "am-ET", yo: "yo-NG", ig: "ig-NG"'));
  assert.ok(rig.includes("mark = (await rig.say(step.say, step.lang)).index;"));
  const cases = require("../../scripts/live-voice-suite/cases/languages.js");
  assert.deepEqual(cases.map(c => c.id), ["lang-ha", "lang-am", "lang-yo", "lang-ig"]);
  for (const c of cases) {
    assert.equal(c.writes, true, "they change the account's language");
    assert.equal(typeof c.expect.notSaid, "string", "patterns travel as text");
    assert.ok(c.then.some(step => step.say === "Switch to English."), "each puts English back");
  }
  const { ALL } = require("../../scripts/live-voice-suite/cases/index.js");
  assert.ok(ALL.some(c => c.id === "lang-yo"));
});
