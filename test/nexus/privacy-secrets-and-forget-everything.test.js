"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { readSafetyDetailed, safetyTurn } = require("../../nexus/companion/safety.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { t } = require("../../nexus/i18n/index.js");

// Found by the persona audit: "remember that my mpesa pin is 4821" was refused, but "add my pin 4821 to my notes", "save my pin 4821", "keep my pin 1234 safe", "remind me my pin is 4821" and "the code to the
// safe is 4821, write it down" were not, so the PIN went into notes, lists and reminders. "Forget everything" was answered "I don't have that saved, so there is nothing to forget" (or reached the AI model),
// and taking someone out of the circle did not say they would be sent a message.

test("a PIN, password or code asked to be saved is refused however it is said, and ordinary talk about pins is not", async () => {
  for (const text of ["remember that my mpesa pin is 4821", "add my pin 4821 to my notes", "note that my password is hunter22", "save my pin 4821", "write down my pin as 4821", "put my mpesa pin 4821 in my notes",
    "keep my pin 1234 safe", "my pin is 4821, remember it", "add a note: my bank pin is 4821", "remind me my pin is 4821", "add pin 4821 to my shopping list", "my card number is 4111111111111111 save it",
    "save my password for the bank: abc123", "the code to the safe is 4821 write it down", "my otp is 123456 remember", "note: wifi password is farm2026"]) assert.equal(readSafetyDetailed(text)?.kind, "secret", text);
  for (const text of ["save my atm pin", "how do I change my pin", "remind me to change my pin", "my pin is 4821", "I forgot my pin", "add pin to my notes", "note that the pump pressure is 40 psi", "remember the code of conduct meeting is at 3",
    "save the account for the maize sale"]) assert.notEqual(readSafetyDetailed(text)?.kind, "secret", text);
  const reply = await safetyTurn({ text: "add my pin 4821 to my notes", circle: { activeMembers: async () => [] }, push: async () => {}, tenantId: "t", userId: "u", userName: "A", locale: "en" });
  assert.match(reply, /^I won't save a PIN, password or card number/);
});

const tools = { list: async () => [{ tool_id: "knowledge.search", availability: "available" }] };
const applications = { list: () => [{ applicationId: "learning", capabilities: [], riskTiers: [] }] };
const memory = { async saveContact() { return {}; }, async listContacts() { return []; }, async forgetContact() { return null; }, async saveProfileFact() { return { fact: {}, replaced: [] }; }, async profile() { return []; }, async forgetProfile() { return []; }, async search() { return []; }, async recent() { return []; } };
const planner = new OpenEndedPlanner({ memory, tools, applications, model: { plan: async () => { throw new Error("the model must not be asked"); }, respond: async () => null } });
const ask = text => planner.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "cnv_1" }, context: { can: () => true, roles: [] } });

test("wiping everything is not done by a sentence, and says how to do it; 'forget everything' says it only takes back what Kyro learned", async () => {
  for (const text of ["delete all my data", "erase my memory", "clear my history", "forget all of it", "wipe my account", "delete all my information"]) {
    const reply = (await ask(text)).response;
    assert.match(reply, /can't clear everything[\s\S]*"Privacy and data"[\s\S]*"forget that I keep chickens"[\s\S]*Nothing was deleted\.$/, text);
  }
  // "forget everything" is the existing way to take back what Kyro learned (location, crops, name...): it still does that, and no longer says only "nothing to forget" when other things are kept
  for (const text of ["forget everything", "Forget everything about me.", "delete everything you know about me", "please forget everything"]) {
    assert.match((await ask(text)).response, /^I don't have that saved, so there is nothing to forget\. That is what I had learned about you\. Your notes, contacts, records and reminders are kept: to remove everything, open "Privacy and data" in the app\.$/, text);
  }
  // one thing at a time still works, and ordinary sentences are left alone
  assert.match((await ask("forget Otieno")).response, /I don't have a contact called Otieno/);
  assert.match((await ask("forget that I keep chickens")).response, /nothing to forget|forgotten|forgot/i);
  for (const text of ["forget my farm", "delete my last reading"]) { const plan = await ask(text).catch(error => ({ error: error.message })); assert.ok(!/can't clear everything/.test(plan.response || ""), text); }
});

test("taking someone out of the circle says they will be sent a message, in both languages", () => {
  assert.match(t("en", "circle.removeDone", { name: "Joseph" }), /Joseph is out of your circle and will no longer be told anything\. They will get a short message that you took them out\.$/);
  assert.match(t("sw", "circle.removeDone", { name: "Joseph" }), /Atapata ujumbe mfupi kwamba umemtoa\.$/);
});
