"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { MemoryRepository } = require("../../nexus/memory/repository.js");
const { extractContactStatement, extractContactRequest, resolveContact, describeContact, contactName } = require("../../nexus/memory/contacts.js");
const { informedConfirmationPrompt } = require("../../nexus/consent/user-confirmable-consents.js");

test("statements that give someone's number or email are understood, and anything unusable is not", () => {
  assert.deepEqual(extractContactStatement("Save Otieno's number as +254712345678"), { name: "Otieno", phone: "+254712345678" });
  assert.deepEqual(extractContactStatement("Save Amina Wanjiru's number as +254 712 345 678"), { name: "Amina Wanjiru", phone: "+254712345678" });
  assert.deepEqual(extractContactStatement("Otieno's email is otieno@example.com"), { name: "Otieno", email: "otieno@example.com" });
  assert.deepEqual(extractContactStatement("Add contact Wanjiru +254711000111"), { name: "Wanjiru", phone: "+254711000111" });
  assert.deepEqual(extractContactStatement("Save Otieno's number as 0712345678"), { name: "Otieno", invalid: "number" });
  assert.equal(extractContactStatement("My number is +254712345678"), null);
  assert.equal(extractContactStatement("What is Otieno's number?"), null);
  assert.equal(extractContactStatement("Save my number as +254712345678"), null);
});

test("contact requests: list, forget, look up", () => {
  assert.deepEqual(extractContactRequest("Who are my contacts?"), { action: "list" });
  assert.deepEqual(extractContactRequest("Forget Otieno"), { action: "forget", name: "Otieno" });
  assert.deepEqual(extractContactRequest("What's Otieno's number?"), { action: "lookup", name: "Otieno" });
  assert.equal(extractContactRequest("Forget that"), null);
  assert.equal(extractContactRequest("Forget my name"), null);
  assert.equal(extractContactRequest("Forget everything about me"), null);
});

test("a name resolves to one contact, or says it is ambiguous, or nothing", () => {
  const list = [{ name: "Amina Wanjiru", phone: "+254711000111" }, { name: "Amina Otieno", phone: "+254722000222" }, { name: "Otieno", phone: "+254733000333" }];
  assert.equal(resolveContact(list, "Otieno").contact.phone, "+254733000333", "an exact name wins over a partial match");
  assert.equal(resolveContact(list, "amina wanjiru").contact.phone, "+254711000111");
  assert.deepEqual(resolveContact(list, "Amina").ambiguous.map(item => item.name), ["Amina Wanjiru", "Amina Otieno"]);
  assert.equal(resolveContact(list, "Kamau"), null);
  assert.equal(contactName("my brother"), "Brother");
  assert.equal(describeContact({ phone: "+254733000333", email: "o@x.com" }), "+254733000333, o@x.com");
});

// The repository against a scripted database: what SQL it writes and how it merges.
test("saving a contact keeps it private under its own purpose, merges by name, and forgetting is a soft delete", async () => {
  const calls = []; let stored = [];
  const db = { async query(sql, params) {
    calls.push({ sql, params });
    if (/select memory_id,content/.test(sql)) return { rows: stored };
    return { rows: [] };
  } };
  const repo = new MemoryRepository(db);
  const first = await repo.saveContact({ tenantId: "t1", userId: "u1", name: "Otieno", phone: "+254733000333" });
  assert.equal(first.updated, false);
  const insert = calls.find(call => /insert into nexus_memory_items/.test(call.sql));
  assert.match(insert.sql, /'domain','contacts'/); assert.match(insert.sql, /'sensitive'/);
  assert.deepEqual(insert.params[3], { kind: "contact", name: "Otieno", phone: "+254733000333", email: "" });

  stored = [{ memory_id: "mem_1", content: { kind: "contact", name: "Otieno", phone: "+254733000333", email: "" } }];
  calls.length = 0;
  const second = await repo.saveContact({ tenantId: "t1", userId: "u1", name: "otieno", email: "o@example.com" });
  assert.equal(second.updated, true);
  assert.deepEqual(second.contact, { kind: "contact", name: "otieno", phone: "+254733000333", email: "o@example.com" }, "the new email is added to the old number");
  assert.ok(calls.some(call => /set deleted_at=now\(\)/.test(call.sql) && call.params.includes("mem_1")), "the old row is soft-deleted");

  calls.length = 0;
  assert.equal((await repo.forgetContact({ tenantId: "t1", userId: "u1", name: "OTIENO" })).name, "Otieno");
  assert.ok(calls.some(call => /set deleted_at=now\(\)/.test(call.sql)));
  assert.equal(await repo.forgetContact({ tenantId: "t1", userId: "u1", name: "Nobody" }), null);
  assert.ok(calls.every(call => !/delete from/i.test(call.sql)), "nothing is hard deleted");
});

function fakeMemory() {
  const rows = []; let n = 0;
  const live = userId => rows.filter(row => row.userId === userId && !row.deleted);
  return { rows,
    async saveContact({ userId, name, phone = "", email = "" }) {
      const existing = live(userId).find(row => row.content.name.toLowerCase() === name.toLowerCase());
      const content = { kind: "contact", name, phone: phone || existing?.content.phone || "", email: email || existing?.content.email || "" };
      if (existing) existing.deleted = true;
      rows.unshift({ memory_id: ++n, userId, content, deleted: false });
      return { contact: content, updated: Boolean(existing) };
    },
    async listContacts({ userId }) { return live(userId).map(row => ({ memory_id: row.memory_id, content: row.content })); },
    async forgetContact({ userId, name }) {
      const found = live(userId).find(row => row.content.name.toLowerCase() === name.toLowerCase());
      if (!found) return null; found.deleted = true; return found.content;
    },
    async saveProfileFact() { return { fact: {}, replaced: [] }; }, async profile() { return []; }, async forgetProfile() { return []; },
    async search() { return []; }, async recent() { return []; }
  };
}
const tools = { list: async () => [{ tool_id: "communications.send", availability: "available" }, { tool_id: "knowledge.search", availability: "available" }] };
const applications = { list: () => [{ applicationId: "communications", capabilities: [], riskTiers: [] }, { applicationId: "learning", capabilities: [], riskTiers: [] }] };
const planner = memory => new OpenEndedPlanner({ memory, tools, applications, model: { plan: async () => { throw new Error("the model must not be asked"); }, respond: async () => null } });
const ask = (p, text, actorId = "u1") => p.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId, conversationId: "cnv_1" }, context: { can: () => true, roles: [] } });

test("saving, updating, listing, looking up and forgetting a contact all answer in plain words", async () => {
  const memory = fakeMemory(); const p = planner(memory);
  assert.equal((await ask(p, "Save Otieno's number as +254712345678")).response, 'Saved Otieno: +254712345678. Say "forget Otieno" any time, or "who are my contacts?"');
  assert.match((await ask(p, "Otieno's email is otieno@example.com")).response, /^Updated Otieno: \+254712345678, otieno@example\.com\./);
  assert.equal((await ask(p, "Who are my contacts?")).response, "Your contacts: Otieno (+254712345678, otieno@example.com).");
  assert.equal((await ask(p, "What's Otieno's number?")).response, "Otieno: +254712345678, otieno@example.com.");
  assert.equal((await ask(p, "Forget Otieno")).response, "Done. I've forgotten Otieno.");
  assert.equal((await ask(p, "Forget Otieno")).response, "I don't have a contact called Otieno.");
  assert.match((await ask(p, "Who are my contacts?")).response, /^You have no saved contacts/);
  assert.match((await ask(p, "Save Otieno's number as 0712345678")).response, /country code/);
  assert.equal(memory.rows.length, 2, "an unusable number is never saved");
});

test("a person's contacts are theirs alone", async () => {
  const memory = fakeMemory(); const p = planner(memory);
  await ask(p, "Save Otieno's number as +254712345678", "u1");
  assert.match((await ask(p, "Who are my contacts?", "u2")).response, /^You have no saved contacts/);
});

test("naming a saved person turns into a normal send, with the name kept for the confirmation", async () => {
  const memory = fakeMemory(); const p = planner(memory);
  await ask(p, "Save Otieno's number as +254712345678"); await ask(p, "Otieno's email is otieno@example.com");
  const text = await ask(p, "Text Otieno saying the delivery is ready");
  assert.equal(text.clarification, null);
  assert.deepEqual(text.steps[0].input, { channel: "sms", to: "+254712345678", message: "the delivery is ready", contactName: "Otieno" });
  const whatsapp = await ask(p, "Send a WhatsApp message to Otieno saying hello");
  assert.equal(whatsapp.steps[0].input.channel, "whatsapp"); assert.equal(whatsapp.steps[0].input.to, "+254712345678");
  const email = await ask(p, "Email Otieno saying the invoice is attached");
  assert.equal(email.steps[0].input.channel, "email"); assert.equal(email.steps[0].input.to, "otieno@example.com");
  const call = await ask(p, "Call my Otieno and say I am late");
  assert.equal(call.steps[0].input.channel, "call"); assert.equal(call.steps[0].input.to, "+254712345678"); assert.equal(call.steps[0].input.contactName, "Otieno");
});

test("the confirmation says who it is for as well as the number", () => {
  const step = { input: { channel: "sms", to: "+254712345678", message: "hi", contactName: "Otieno" } };
  assert.match(informedConfirmationPrompt({ scope: "communications:send:write", step }), /text message to Otieno \(\+254712345678\): "hi"/);
  assert.match(informedConfirmationPrompt({ scope: "communications:send:write", step: { input: { ...step.input, channel: "call" } } }), /phone call to Otieno \(\+254712345678\)/);
  assert.match(informedConfirmationPrompt({ scope: "communications:send:write", step: { input: { channel: "sms", to: "+254712345678", message: "hi" } } }), /text message to \+254712345678: "hi"/, "no name, no change");
});

test("unknown, ambiguous, and missing-detail names ask instead of guessing", async () => {
  const memory = fakeMemory(); const p = planner(memory);
  await ask(p, "Save Amina Wanjiru's number as +254711000111"); await ask(p, "Save Amina Otieno's number as +254722000222"); await ask(p, "Otieno's email is o@example.com");
  assert.equal((await ask(p, "Text Amina saying hi")).clarification, "Which one: Amina Otieno or Amina Wanjiru?");
  assert.match((await ask(p, "Text Kamau saying hi")).clarification, /I don't have a contact called Kamau/);
  assert.match((await ask(p, "Email Amina Wanjiru saying hi")).clarification, /I don't have an email for Amina Wanjiru/);
  assert.match((await ask(p, "Call Otieno and say hi")).clarification, /I don't have a phone number for Otieno/);
});

test("ordinary requests that merely start with call or text are left alone", async () => {
  const memory = fakeMemory(); const p = planner(memory);
  await ask(p, "Save Otieno's number as +254712345678");
  const direct = await ask(p, "Text +254733000333 saying hi");
  assert.equal(direct.steps[0].input.to, "+254733000333"); assert.equal(direct.steps[0].input.contactName, undefined);
  const me = await ask(p, "Text me saying hello");
  assert.ok(!me.steps?.[0]?.input?.contactName);
});

test("deleting or removing something that is not a contact is never read as forgetting a contact", () => {
  // Found live: "Delete my note about the pump" was answered "I don't have a contact called Note About The Pump".
  for (const text of ["Delete my note about zzverify", "Remove milk from my shopping list", "Delete my last reading", "Remove the pump note", "Erase my last entry"]) assert.equal(extractContactRequest(text), null, text);
  assert.deepEqual(extractContactRequest("Forget Otieno"), { action: "forget", name: "Otieno" });
  assert.deepEqual(extractContactRequest("Delete contact Otieno"), { action: "forget", name: "Otieno" });
  assert.deepEqual(extractContactRequest("Remove Otieno from my contacts"), { action: "forget", name: "Otieno" });
});
