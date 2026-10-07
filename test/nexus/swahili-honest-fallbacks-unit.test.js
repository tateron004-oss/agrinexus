"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { localTranslateText, isDoneStatement, fixedReply, AGENT_NOT_HANDLED_RESPONSE, NOT_UNDERSTOOD_QUESTION, FIXED_HONEST_SENTENCES } = require("../../nexus/i18n/local-translate.js");

// The offline translator is a keyword dictionary. It used to turn "I couldn't do that one just now, and nothing was saved. ... 'Telehealth start intake.'" into "Your remote health
// registration is open and a record was created" because the sentence contains the words "Telehealth" and "intake". These tests keep every sentence that says "nothing was done" from
// ever coming back as a claim that something was done, and keep untranslatable text from carrying a "[SW]" tag or internal wording.

const SUCCESS_CLAIM = /imeunda rekodi|imehifadhiwa|umefunguliwa|imefunguliwa|imejaribiwa|imekamilika|imerekodiwa|imeundwa|imetolewa|imepangwa|yamehifadhiwa|limekamilika|vimechukuliwa|kimetolewa/i;

// Every fixed English sentence the older route / voice floor / reply builders can say when nothing was done, plus the ordinary conversation replies that merely CONTAIN dictionary words.
const HONEST_ENGLISH = [
  AGENT_NOT_HANDLED_RESPONSE,
  "I could not find the pending workflow details. Please ask again.",
  "I could not complete the checklist request right now.",
  "I could not find a matching reminder to cancel. Tell me its exact title, or ask to list your reminders first.",
  "I could not identify that language. Tell me English, Spanish, French, Arabic, or Kiswahili.",
  "I heard you need medicine. I can guide you step by step. I cannot prescribe, but I can find pharmacy or mobile clinic support and prepare provider review. What medicine concern and what village or city?",
  "Got it. I may have heard only part of that. I will go slowly. I want to be sure I help with the right thing. Tell me one word first: health, crop, work, learning, map, or medicine. Would you like me to guide the next step?",
  "I can answer from platform context, but I do not have live internet evidence for that question yet. Connect the web-search provider to make this a current, source-aware answer.",
  "I cannot retrieve live weather for Nakuru from a verified weather source right now. The weather provider returned unavailable, so I will not substitute a guess.",
  "I could not find a Spotify match for rumba. I prepared a search handoff instead.",
  "Nothing was saved. Telehealth intake did not start.",
  "I did not open the profile or create a referral.",
  "Is the telehealth intake for you or for someone else?",
  "I am not able to book the follow-up or notify the caregiver without your yes."
];

test("every fixed honest English sentence comes back in Kiswahili without a success claim, a language tag or the English keywords' dictionary sentence", () => {
  for (const english of HONEST_ENGLISH) {
    const swahili = localTranslateText(english, "sw", { context: "agent-command:conversation.not_handled" });
    assert.doesNotMatch(swahili, SUCCESS_CLAIM, english);
    assert.doesNotMatch(swahili, /\[SW\]/i, english);
    assert.doesNotMatch(swahili, /\[[A-Z]{2}\]/, english);
    // the same, with no context or intent at all (the /api/translate route)
    const plain = localTranslateText(english, "sw");
    assert.doesNotMatch(plain, SUCCESS_CLAIM, english);
    assert.doesNotMatch(plain, /\[SW\]/i, english);
  }
});

test("the honest fixed sentences have a whole-sentence Kiswahili version, returned verbatim", () => {
  assert.ok(FIXED_HONEST_SENTENCES.includes(AGENT_NOT_HANDLED_RESPONSE));
  for (const english of FIXED_HONEST_SENTENCES) {
    const swahili = localTranslateText(english, "sw");
    assert.equal(swahili, fixedReply(english, "sw"));
    assert.notEqual(swahili, english);
    assert.doesNotMatch(swahili, /couldn't|could not|nothing was saved/i, "no English left in it");
  }
  const notHandled = localTranslateText(AGENT_NOT_HANDLED_RESPONSE, "sw");
  assert.match(notHandled, /hakuna kilichohifadhiwa/, "says plainly that nothing was saved");
  assert.match(notHandled, /Samahani/);
  // the same whatever the context or intent
  assert.equal(localTranslateText(AGENT_NOT_HANDLED_RESPONSE, "sw", { intent: "conversation.not_handled", context: "agent-command:conversation.not_handled" }), notHandled);
});

test("a not-understood reply is a short plain Kiswahili question, never the internal wording", () => {
  const english = "Got it. I may have heard only part of that. I will go slowly. Understand the person's goal and guide one step at a time. Tell me one word first: health, crop, work, learning, map, or medicine.";
  const swahili = localTranslateText(english, "sw", { intent: "conversation.open_reasoning", context: "agent-command:conversation.open_reasoning" });
  assert.equal(swahili, NOT_UNDERSTOOD_QUESTION.sw);
  assert.equal(swahili, "Samahani, sikuelewa vizuri. Unaweza kusema tena kwa maneno machache? Kwa mfano: afya, shamba, kazi, pesa.");
  assert.doesNotMatch(swahili, /Understand the person|guide one step|plainGoal/i);
});

test("text that cannot be translated is left readable and untagged in Kiswahili, and keeps the tag only for languages that have always had it", () => {
  const english = "Your delivery is planned for Friday.";
  assert.equal(localTranslateText(english, "sw"), english);
  assert.equal(localTranslateText(english, "es"), `[ES] ${english}`);
  assert.equal(localTranslateText(english, "en"), english);
});

test("the keyword dictionary still works for a short positive completion sentence, and is never used for questions, negatives, long text or display labels", () => {
  assert.match(localTranslateText("Telehealth intake opened for voice user", "sw"), /afya/);
  assert.match(localTranslateText("Generate care plan", "sw"), /Generate care plan|care plan/i);
  assert.equal(isDoneStatement("Telehealth intake is ready for voice-first support."), true);
  assert.equal(isDoneStatement("Here are the providers near you."), false, "the English must itself claim something is done");
  assert.equal(localTranslateText("Here are the providers near you.", "sw", { context: "voice-response" }), "Here are the providers near you.");
  assert.equal(isDoneStatement("Is the telehealth intake ready?"), false);
  assert.equal(isDoneStatement("The telehealth intake did not start."), false);
  assert.equal(isDoneStatement("Nothing was saved for the provider."), false);
  assert.equal(isDoneStatement("one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty twenty-one twenty-two twenty-three twenty-four twenty-five provider"), false);
  // a suggested-reply button or a card label that merely contains a word must not become a status sentence
  assert.equal(localTranslateText("Buyer contact is ready", "sw", { context: "agent-display:conversation.open_reasoning:suggestedReplies" }), "[SW] Buyer contact is ready", "a display label is never turned into a status sentence (it keeps the localisation tag)");
  assert.match(localTranslateText("Buyer contact is ready", "sw", { context: "voice-response" }), /mnunuzi/);
});

test("other languages never turn the honest fallback into a success sentence either", () => {
  for (const language of ["fr", "es", "ar"]) {
    const out = localTranslateText(AGENT_NOT_HANDLED_RESPONSE, language);
    assert.ok(out.includes("nothing was saved"), `${language}: the honest English is kept, tagged, rather than replaced by a claim`);
  }
});

test("'najidhuru' (I am hurting myself) is read as self-harm in Kiswahili by the shared reader and by the mental-health module", () => {
  const { readSafetyDetailed } = require("../../nexus/companion/safety.js");
  const wellness = require("../../public/nexus-mental-health-behavioral-wellness.js");
  for (const phrase of ["najidhuru", "ninajidhuru", "nimejidhuru"]) {
    assert.deepEqual(readSafetyDetailed(phrase), { kind: "self_harm", language: "sw" }, phrase);
    assert.equal(wellness.classifyState(phrase, {}).crisisOverride, true, phrase);
  }
});

test("server.js uses this translator and the same fixed sentence (nothing left to drift)", () => {
  const source = fs.readFileSync(path.join(__dirname, "..", "..", "server.js"), "utf8");
  assert.match(source, /require\("\.\/nexus\/i18n\/local-translate\.js"\)/);
  assert.doesNotMatch(source, /function localTranslateText\(/);
  assert.doesNotMatch(source, /const AGENT_NOT_HANDLED_RESPONSE = `/);
  // nothing in the reply builders speaks the internal planning notes any more
  assert.doesNotMatch(source, /ruralSupport\.plainGoal,\n/);
});
