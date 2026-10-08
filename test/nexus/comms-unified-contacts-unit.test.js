"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { t, CATALOGS } = require("../../nexus/i18n/index.js");
const comms = require("../../nexus/i18n/comms.js");
const enBase = require("../../nexus/i18n/en.js");
const swBase = require("../../nexus/i18n/sw.js");
const frontDoor = require("../../server/frontDoor.js");
const { localPhoneToE164, extractContactStatement, spokenPhone } = require("../../nexus/memory/contacts.js");
const { createMemoryContactStore } = require("../../nexus/memory/memory-contact-store.js");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");
const { OpenEndedPlanner, sendMessagePlan, callPlan } = require("../../nexus/brain/planner.js");

// Texting, calling and saved contacts: one set of contacts for the planner and the older command route, local numbers made into +country numbers on every path, and the replies in
// Kiswahili too. (The spawned-server side of the same work is comms-unified-contacts-server.test.js.)

const placeholders = text => [...new Set([...String(text).matchAll(/\{(\w+)\}/g)].map(match => match[1]))].sort().join(",");

test("the texting and calling replies have the same keys and placeholders in English and Kiswahili, and none collides with the shared catalogs", () => {
  assert.deepEqual(Object.keys(comms.sw).sort(), Object.keys(comms.en).sort(), "every English message has a Kiswahili one and nothing extra");
  for (const key of Object.keys(comms.en)) {
    assert.ok(comms.sw[key].trim().length > 0, key);
    assert.equal(placeholders(comms.sw[key]), placeholders(comms.en[key]), `placeholders differ in ${key}`);
    assert.ok(!(key in enBase) && !(key in swBase), `${key} is also in the shared catalog`);
    assert.equal(CATALOGS.en[key], comms.en[key]); assert.equal(CATALOGS.sw[key], comms.sw[key]);
  }
  assert.equal(t("sw", "comms.text.sent.sms", { label: "John (+254 733 123 456)" }), "Nimetuma ujumbe wako kwa John (+254 733 123 456).");
  assert.equal(t("en", "comms.text.sent.sms", { label: "John (+254 733 123 456)" }), "Sent your text to John (+254 733 123 456).");
  assert.equal(t("fr", "comms.cancelled"), "Canceled. Tell me what you want to do next.", "a language Kyro has no words for is answered in English");
});

test("English wording that was already there is unchanged", () => {
  assert.equal(t("en", "comms.text.confirm.sms", { message: "hello", label: "John (+254 733 123 456)" }), "Send \"hello\" to John (+254 733 123 456) as a text? Say yes to send it, or no to cancel.");
  assert.equal(t("en", "comms.text.confirm.whatsapp", { message: "hello", label: "+254 712 345 678" }), "Send \"hello\" to +254 712 345 678 as a WhatsApp message? Say yes to send it, or no to cancel.");
  assert.equal(t("en", "comms.text.notSent.sms", { label: "Amina", message: "hi" }), "I could not send your text to Amina: sending messages is not set up for this account yet, so nothing was sent. Your words were: \"hi\".");
  assert.equal(t("en", "comms.text.restricted.sms", { label: "Amina" }), "This account type cannot send real messages, so I did not send your text to Amina. Nothing was sent.");
  assert.equal(t("en", "comms.call.confirm.named", { name: "John", phone: "+254 733 123 456" }), "I found John at +254 733 123 456. Before I call anyone, please confirm. Do you want me to call John now?");
  assert.equal(t("en", "comms.call.targetNeeded"), "Who should I call? Tell me the person, organization, or full phone number with country code.");
  assert.equal(t("en", "comms.contact.saved", { name: "John", phone: "+254 733 123 456" }), "Saved John as +254 733 123 456. If that number is not right, say it again. You can say, \"Nexus, call John\" any time.");
  assert.equal(t("en", "comms.reask", { prompt: "P." }), "P. Say yes, confirm, or do it to continue, or no to cancel.");
});

test("the example commands the Kiswahili replies tell the person to say are ones Kyro understands", () => {
  const send = /"(tuma ujumbe kwa [^"]+)"/.exec(t("sw", "comms.text.numberNeeded", { name: "Zawadi", example: "Zawadi" }))[1];
  const request = frontDoor.readMessageRequest(send);
  assert.equal(request.phone, "+254712345678"); assert.equal(request.message, "niko njiani"); assert.equal(request.swahili, true);
  const save = /"(hifadhi namba ya [^"]+)"/.exec(t("sw", "comms.text.numberNeeded", { name: "Zawadi", example: "Zawadi" }))[1];
  assert.deepEqual(extractContactStatement(save), { name: "Zawadi", phone: "+254712345678" });
  const textNeeded = /"(tuma ujumbe kwa [^"]+)"/.exec(t("sw", "comms.text.textNeeded.sms", { to: "+254 712 345 678" }))[1];
  assert.equal(frontDoor.readMessageRequest(textNeeded).phone, "+254712345678");
});

// Kenya: 07xx and 01xx; Nigeria: 070x 080x 081x 090x 091x. Written the way people say them at home, with spaces, with the country code and without the zero.
const LOCAL_NUMBERS = [
  ["0712345678", "+254712345678"], ["0712 345 678", "+254712345678"], ["0112345678", "+254112345678"], ["0722-111-222", "+254722111222"], ["254712345678", "+254712345678"], ["712345678", "+254712345678"],
  ["08031234567", "+2348031234567"], ["0803 123 4567", "+2348031234567"], ["07012345678", "+2347012345678"], ["0701 234 5678", "+2347012345678"], ["08121234567", "+2348121234567"],
  ["09012345678", "+2349012345678"], ["09112345678", "+2349112345678"], ["2348031234567", "+2348031234567"]
];

test("every local Kenyan and Nigerian number becomes +254 / +234 and is said back in full, on every reader that stages a text or a call", () => {
  const catalog = { tools: [{ toolId: "communications.send" }], applications: [{ applicationId: "communications" }] };
  for (const [written, expected] of LOCAL_NUMBERS) {
    assert.equal(localPhoneToE164(written)?.phone, expected, `localPhoneToE164(${written})`);
    // the older command route / voice tool reader
    assert.equal(frontDoor.readMessageRequest(`text ${written} saying hello`)?.phone, expected, `readMessageRequest(${written})`);
    // the planner
    assert.equal(sendMessagePlan(`text ${written} saying hello`, catalog).steps[0].input.to, expected, `sendMessagePlan(${written})`);
    assert.equal(callPlan(`call ${written} and say hello`, catalog).steps[0].input.to, expected, `callPlan(${written})`);
    // said back in full so a wrong digit is heard
    assert.match(spokenPhone(expected), /^\+(254|234) \d{3} \d{3} \d{3,4}$/, spokenPhone(expected));
  }
  assert.equal(spokenPhone("+254712345678"), "+254 712 345 678"); assert.equal(spokenPhone("+2348031234567"), "+234 803 123 4567"); assert.equal(spokenPhone("+15105019401"), "+1 510 501 9401");
  // not a number of either country: left alone, asked about, never guessed
  for (const written of ["071234", "0612345678", "0212345678"]) assert.equal(localPhoneToE164(written), null, written);
  assert.equal(frontDoor.readMessageRequest("text 071234 saying hi").invalid, true);
});

test("the stand-in contact store keeps one contact per name per person, newest first, and never shows one person another's", async () => {
  const store = createMemoryContactStore();
  const a = { tenantId: "t1", userId: "u-a" }; const b = { tenantId: "t1", userId: "u-b" };
  assert.equal((await store.saveContact({ ...a, name: "Grace", phone: "+254711222333" })).updated, false);
  await store.saveContact({ ...a, name: "Sam", phone: "+254700000001" });
  assert.equal((await store.saveContact({ ...a, name: "grace", phone: "+254799888777" })).updated, true, "the same name again replaces the number");
  assert.deepEqual((await store.listContacts(a)).map(row => [row.content.name, row.content.phone]), [["grace", "+254799888777"], ["Sam", "+254700000001"]]);
  assert.deepEqual(await store.listContacts(b), [], "another person has none of them");
  assert.equal((await store.forgetContact({ ...b, name: "Sam" })), null, "and cannot forget them");
  assert.equal((await store.forgetContact({ ...a, name: "Sam" })).phone, "+254700000001");
});

test("a contact saved by the planner is in the person's book for the older route, and one saved on the older route is found by the planner; another account sees neither", async () => {
  const store = createMemoryContactStore();
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_TEST_REMINDER_STORE: "memory" }, memoryContactStore: store, resolveUser: async () => null, readJson: async () => ({}), logger: { error() {}, warn() {}, info() {} } });
  const userA = { id: "ua-1", email: "a@example.com", tenantId: "tenant_default" }; const userB = { id: "ub-1", email: "b@example.com", tenantId: "tenant_default" };
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("no model"); } }, tools: { list: async () => [] }, applications: { list: () => [] }, memory: store });
  const scopeA = { tenantId: "tenant_default", actorId: "ua-1" };

  // said to the planner ...
  const saved = await planner.contactsTurn({ text: "Save John's number as +254733123456", ...scopeA });
  assert.match(saved.response, /Saved John: \+254733123456/);
  const bookA = await adapter.contactBookFor({ user: userA });
  assert.deepEqual((await bookA.list()).map(item => [item.name, item.phone]), [["John", "+254733123456"]], "... found by the older route's book");
  assert.ok((await bookA.list())[0].savedAt, "with the time it was saved, so the latest of two numbers can be told");
  // ... and saved on the older route
  await bookA.save({ name: "Mary", phone: "+254722111222" });
  const named = await planner.namedContactRequest({ text: "text Mary saying I am late", ...scopeA });
  assert.equal(named.text, "text +254722111222 saying I am late", "... found by the planner by name");
  assert.equal(named.contactName, "Mary");
  // another account
  const bookB = await adapter.contactBookFor({ user: userB });
  assert.deepEqual(await bookB.list(), [], "account B has no contacts of account A's");
  assert.match((await planner.namedContactRequest({ text: "text Mary saying I am late", tenantId: "tenant_default", actorId: "ub-1" })).clarification, /don't have a contact called Mary/);
  assert.equal((await planner.contactsTurn({ text: "Who are my contacts?", tenantId: "tenant_default", actorId: "ub-1" })).response, 'You have no saved contacts. Say "save Otieno\'s number as +254712345678" to add one.');
});

test("without the test switch and without a database the book is not reachable, and it says so by throwing (the caller then uses the older phone book alone)", async () => {
  const adapter = createServerRuntimeAdapter({ env: {}, resolveUser: async () => null, readJson: async () => ({}), logger: { error() {}, warn() {}, info() {} },
    createRuntimeFn: () => { throw new Error("PostgreSQL is required for the authoritative Nexus runtime."); } });
  await assert.rejects(adapter.contactBookFor({ user: { id: "ua-1", email: "a@example.com" } }), /PostgreSQL is required/);
});
