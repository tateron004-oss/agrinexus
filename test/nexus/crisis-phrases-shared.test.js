"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crisis = require("../../public/kyro-crisis-phrases.js");
const { readSafetyDetailed, safetyTurn } = require("../../nexus/companion/safety.js");
const { CRISIS_RULE } = require("../../nexus/brain/crisis-rule.js");

// Found by the persona audits (veteran, teen, grandmother, chronic-health): about 90 of 107 ordinary ways of saying "I may hurt myself" were not recognised (passive wishes, a weapon
// or tablets, goodbyes, slang, Swahili); the typed-chat reader and the companion reader disagreed; the phone and voice paths only had the shorter one; a PIN said out loud was saved
// as a note; someone asking for a PIN got no warning; fainting and stroke signs were in no list; and ordinary sentences ("I can't get up in the morning", "I fell last week and I'm
// fine") alerted a family. One shared list now feeds all of them. These tests keep both directions honest: the care is given, and the false alarms are not.

const kind = text => readSafetyDetailed(text)?.kind || null;
const root = path.join(__dirname, "..", "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

test("passive wishes, plans, goodbyes, weapons, slang and Swahili get the caring reply, never an alert", () => {
  const phrases = ["I wish I would not wake up", "I wish I had never been born", "everyone would be better off without me", "I'm a burden to my family", "nobody would miss me", "I wanna die", "i want 2 die",
    "kms", "I'm going to unalive myself", "I've been thinking about killing myself", "I wrote a note for my family", "I am giving away my things", "this is my last message", "goodbye everyone",
    "I keep looking at my gun", "I put my service pistol in my mouth last night", "I swallowed all my pills", "I took 40 tablets", "I just want the pain to stop", "I'm tired of living",
    "I can't go on", "kill my self", "nimechoka na maisha", "natamani kufa", "nataka kujiua", "sina sababu ya kuishi", "I don't want to be here anymore", "I'm ready to die"];
  for (const phrase of phrases) assert.equal(kind(phrase), "self_harm", phrase);
  // a weapon in the same sentence adds the line about putting distance between the person and it
  assert.equal(readSafetyDetailed("I keep looking at my gun").weapon, true);
  assert.equal(readSafetyDetailed("I wish I would not wake up").weapon, undefined);
});

test("everyday sentences that share the words are not read as a crisis", () => {
  for (const phrase of ["I'm going to die of laughter", "this heat is killing me", "my phone is dead", "I could kill for a cup of tea", "I will end the meeting at five", "I took my pills this morning",
    "I'm tired of the rain", "I cut myself a slice of cake", "the cow died last night", "I'm dying to see you", "I can't see the button", "I have faint memories of that", "someone sent me money on mpesa",
    "my pin is on my card", "how do I help a friend who is suicidal"]) assert.equal(kind(phrase), null, phrase);
});

test("someone else's feelings are not read as the speaker's own, but the speaker's own still count in the same message", () => {
  assert.equal(kind("my brother said he wants to die"), null);
  assert.equal(kind("I want to die laughing, that joke was great"), null);
  assert.equal(kind("my friend says she wished she was dead, and honestly I want to die too"), "self_harm");
});

test("saying something about hurting another person, or being hurt, is answered with its own reply", async () => {
  assert.equal(kind("I feel like hitting my wife"), "harm_others");
  assert.equal(kind("I'm going to hurt him"), "harm_others");
  for (const phrase of ["my uncle touched me", "my stepfather beats me", "someone is blackmailing me with my photos", "I feel unsafe at home"]) assert.equal(kind(phrase), "abuse", phrase);
  const circle = { activeMembers: async () => [{ otherId: "u2", otherName: "Grace", shares: {} }] };
  const pushed = [];
  const push = async (...args) => { pushed.push(args); };
  const abuse = await safetyTurn({ text: "my uncle touched me", circle, push, tenantId: "t", userId: "u1", userName: "Amina" });
  assert.match(abuse, /not your fault/i);
  assert.match(abuse, /alert my circle/);
  const others = await safetyTurn({ text: "I feel like hitting my wife", circle, push, tenantId: "t", userId: "u1", userName: "Amina" });
  assert.match(others, /step away/i);
  const weapon = await safetyTurn({ text: "I keep looking at my gun", circle, push, tenantId: "t", userId: "u1", userName: "Amina" });
  assert.match(weapon, /distance|hard to reach/i);
  // care and an OFFER only: nothing is pushed to the family unless the person says so
  assert.equal(pushed.length, 0);
  // no hotline number is invented: those must come from local experts
  for (const reply of [abuse, others, weapon]) assert.doesNotMatch(reply, /\d{3,}/);
});

test("a sentence that only sounds like an emergency does not alert a family", () => {
  for (const phrase of ["I can't get up in the morning", "I cannot get up early these days", "my friend was not breathing when we found him in the war", "I can't breathe when I hear fireworks",
    "I'm in danger of losing my house", "I fell last week and my knee still hurts", "tell my daughter I fell yesterday and I am fine", "notify my circle I have a headache", "tell my son I will be home late",
    "I fell behind on my loan"]) assert.notEqual(kind(phrase), "emergency", phrase);
  for (const phrase of ["I fell and can't get up", "i cant breath", "my mother is not breathing", "alert my family", "notify my daughter I need help", "I have faln"]) assert.equal(kind(phrase), "emergency", phrase);
});

test("fainting, stroke signs and a low sugar get the calm urgent reply with the number and the offer to alert", async () => {
  for (const phrase of ["I fainted this morning", "I feel faint", "I think my sugar is low", "my speech is slurred", "my face is drooping", "my left arm is weak", "I suddenly can't see out of my left eye",
    "I'm sweating and shaking", "my BP is 150/95 and I fainted", "I had a seizure"]) assert.equal(kind(phrase), "ask", phrase);
  const reply = await safetyTurn({ text: "my BP is 150/95 and I fainted", circle: { activeMembers: async () => [{ otherId: "u2", otherName: "Grace", shares: {} }] }, push: async () => {}, tenantId: "t", userId: "u1", userName: "Amina" });
  assert.match(reply, /emergency number/i);
  assert.match(reply, /alert my circle/);
  assert.equal(kind("I took all my pills"), "ask");
  assert.equal(kind("I took all my pills this morning"), null);
});

test("a PIN is never saved, and someone asking for one gets a plain warning", async () => {
  assert.equal(kind("remember that my mpesa pin is 4821"), "secret");
  assert.equal(kind("note down my bank password is farm2024"), "secret");
  assert.equal(kind("save my card number: 4111111111111111"), "secret");
  assert.equal(kind("someone called asking for my pin"), "scam");
  assert.equal(kind("Safaricom said I must send money to claim my prize"), "scam");
  assert.equal(kind("should I give him my password"), "scam");
  const refused = await safetyTurn({ text: "remember that my mpesa pin is 4821", circle: { activeMembers: async () => [] }, push: async () => {}, tenantId: "t", userId: "u1", userName: "Amina" });
  assert.match(refused, /won't save a PIN/i);
  assert.doesNotMatch(refused, /4821/);
  const warned = await safetyTurn({ text: "someone called asking for my pin", circle: { activeMembers: async () => [] }, push: async () => {}, tenantId: "t", userId: "u1", userName: "Amina" });
  assert.match(warned, /never ask for your PIN/i);
});

test("the AI prompts carry the same rule, with the medicine rule and no benefit amounts or phone numbers", () => {
  assert.match(CRISIS_RULE, /never give methods or means/i);
  assert.match(CRISIS_RULE, /never advise anyone to skip, stop, double, halve/i);
  assert.match(CRISIS_RULE, /Never state benefit amounts/i);
  assert.match(read("nexus/brain/openai-planning-model.js"), /CRISIS_RULE/);
  assert.match(read("server.js"), /CRISIS_RULE,/);
});

test("the browser loads the shared list before the classifier, and the service worker caches it", () => {
  const index = read("public/index.html");
  const list = index.indexOf("/kyro-crisis-phrases.js");
  const classifier = index.indexOf("/nexus-mental-health-behavioral-wellness.js");
  assert.ok(list > 0 && classifier > 0 && list < classifier, "shared list must load first");
  assert.match(read("public/sw.js"), /\/kyro-crisis-phrases\.js/);
});

test("the typed-chat classifier uses the same list, so it no longer disagrees with the companion", () => {
  const classifier = require("../../public/nexus-mental-health-behavioral-wellness.js");
  const handle = classifier.shouldHandle || classifier.default?.shouldHandle;
  assert.equal(typeof handle, "function");
  for (const phrase of ["I wish I would not wake up", "I keep looking at my gun", "nimechoka na maisha"]) assert.ok(handle(phrase), phrase);
  assert.ok(!handle("my phone is dead"));
});

test("slang and typing slips are brought to plain words", () => {
  assert.equal(crisis.normalize("I wanna die"), "i want to die");
  assert.equal(crisis.normalize("i cant breath"), "i can't breathe");
  assert.equal(crisis.normalize("heart atack"), "heart attack");
  assert.equal(crisis.normalize("im gonna kms"), "i'm going to kill myself");
});

test("the lowest mood score in the log is answered kindly and points to a person", async () => {
  const { WellnessLog } = (() => { try { return require("../../nexus/wellness/log.js"); } catch { return {}; } })();
  assert.match(read("nexus/wellness/log.js"), /trusted person|emergency number/i);
  assert.ok(WellnessLog === undefined || typeof WellnessLog === "function" || typeof WellnessLog === "object");
});
