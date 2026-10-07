"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { personalTurn, readRequest } = require("../../nexus/personal/items.js");
const { splitListItems, parseListRef } = require("../../nexus/personal/lists.js");
const { cleanContactName, localPhoneToE164, extractContactStatement, spokenPhone } = require("../../nexus/memory/contacts.js");

// Lists, contacts and messages as people really say them, through the planner's own deterministic layer (the same in-memory stores the other planner tests use).

const together = fs.readFileSync(path.join(__dirname, "kyro-features-together.test.js"), "utf8");
const fullMemory = new Function(`${together.slice(together.indexOf("function fullMemory"), together.indexOf('test("each feature'))}\nreturn fullMemory;`)();

function planner({ deterministicOnly = true } = {}) {
  const memory = fullMemory();
  const tools = [{ tool_id: "communications.send", availability: "available" }, { tool_id: "knowledge.search", availability: "available" }];
  const apps = [{ applicationId: "communications", capabilities: [], riskTiers: [] }, { applicationId: "live-knowledge", capabilities: [], riskTiers: [] }];
  const p = new OpenEndedPlanner({ memory, alerts: { async enable() { return {}; }, async disable() { return 1; }, async status() { return null; } }, tools: { list: async () => tools }, applications: { list: () => apps },
    model: { plan: async () => ({}), respond: async () => "MODEL" } });
  const history = [];
  const ask = async text => {
    const plan = await p.plan({ command: { text, channel: "voice", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi", ...(deterministicOnly ? { deterministicOnly: true } : {}) }, conversationHistory: history.slice() });
    history.push({ role: "user", content: text }, { role: "assistant", content: plan.response || plan.clarification || "" });
    return plan;
  };
  return { ask, memory };
}
const reply = plan => plan.response || plan.clarification || (plan.deferred ? "(deferred)" : JSON.stringify(plan.steps?.[0]?.input || {}));

// [what is said, what is answered]; each table is one conversation with one person.
async function conversation(rows) {
  const { ask } = planner();
  for (const [said, expected] of rows) {
    const got = reply(await ask(said));
    if (expected instanceof RegExp) assert.match(got, expected, `${said} -> ${got}`); else assert.equal(got, expected, `${said} -> ${got}`);
  }
}

test("a list said with commas and 'and' is separate things, and 'remove milk' removes only the milk", async () => {
  await conversation([
    ["add milk, eggs and bread to my shopping list", "Added milk, eggs and bread to your shopping list. You have 3 open items."],
    ["what is on my shopping list", "On your shopping list: 1, milk; 2, eggs; 3, bread."],
    ["remove milk", "Removed milk."],
    ["what is on my shopping list", "On your shopping list: 1, eggs; 2, bread."],
    ["remove eggs from my shopping list", "Removed eggs."],
    ["add salt and pepper to my shopping list", "Added salt and pepper to your shopping list. You have 3 open items."],
    ["add two kilos of sugar to my shopping list", "Added two kilos of sugar to your shopping list. You have 4 open items."],
    ["add two and a half kilos of rice to my shopping list", "Added two and a half kilos of rice to your shopping list. You have 5 open items."],
    ["add tea plus coffee & cocoa to my shopping list", "Added tea, coffee and cocoa to your shopping list. You have 8 open items."],
    ["add milk, milk to my shopping list", "Added milk to your shopping list. You have 9 open items."],
    ["remove the first item from my shopping list", "Removed bread."],
    ["remove the last one from my shopping list", "Removed milk."],
    ["remove number 1 from my shopping list", /^Removed /]
  ]);
});

test("an older list entry that holds several things in one is taken apart when one of them is removed", async () => {
  const rows = []; let n = 0;
  const memory = {
    async addPersonalItem({ userId, content }) { rows.unshift({ memory_id: `m${++n}`, userId, content }); return {}; },
    async listPersonalItems({ userId, kind = null }) { return rows.filter(row => row.userId === userId && !row.deleted && (!kind || row.content.kind === kind)).map(row => ({ memory_id: row.memory_id, content: row.content })); },
    async updatePersonalItem({ userId, memoryId, content }) { const row = rows.find(item => item.memory_id === memoryId); if (row) row.content = content; return true; },
    async removePersonalItem({ userId, memoryId }) { const row = rows.find(item => item.memory_id === memoryId); if (row) row.deleted = true; return true; }
  };
  await memory.addPersonalItem({ userId: "u", content: { kind: "todo", list: "shopping", text: "milk, eggs and bread", done: false } });
  const say = text => personalTurn({ text, memory, tenantId: "t", userId: "u", now: new Date("2026-10-07T05:00:00Z"), timeZone: "Africa/Nairobi" });
  assert.equal(await say("remove milk"), "Removed milk. eggs and bread are still on your shopping list.");
  assert.equal(await say("what is on my shopping list"), "On your shopping list: 1, eggs, bread.");
});

test("the many ways of saying 'put it on the list'", async () => {
  await conversation([
    ["write down milk on the shopping list", "Added milk to your shopping list. You have 1 open item."],
    ["put eggs on the list", "Added eggs to your shopping list. You have 2 open items."],
    ["add bread to my shopping list please", "Added bread to your shopping list. You have 3 open items."],
    ["could you maybe put sugar on my shopping list please", "Added sugar to your shopping list. You have 4 open items."],
    ["Kyro, um, add salt to the shopping list, thank you", "Added salt to your shopping list. You have 5 open items."],
    ["jot down tea in my shopping list", "Added tea to your shopping list. You have 6 open items."],
    ["add fix the gate to my to do list", "Added fix the gate to your to-do list. You have 1 open item."],
    ["add buy paint and call the vet to my to-do list", "Added buy paint and call the vet to your to-do list. You have 2 open items."],
    ["add call mum and dad to my to-do list", "Added call mum and dad to your to-do list. You have 3 open items."],
    ["todo: pay the workers", "Added pay the workers to your to-do list. You have 4 open items."],
    ["put cement on the list", /^Which list: your shopping list or your to-do list\?/],
    ["what is on my to do list", "On your to-do list: 1, fix the gate; 2, buy paint and call the vet; 3, call mum and dad; 4, pay the workers."],
    ["read my shopping list", /^On your shopping list: 1, milk; 2, eggs; 3, bread; 4, sugar; 5, salt; 6, tea\.$/],
    ["tell me what is on my shopping list", /^On your shopping list: 1, milk/],
    ["what do I need to buy", /^On your shopping list: 1, milk/],
    ["tick off fix the gate", "Done. Ticked off fix the gate. 3 still open."],
    ["I bought the sugar", "Done. Ticked off sugar. 5 still open."],
    ["mark tea as done on my shopping list", "Done. Ticked off tea. 4 still open."]
  ]);
});

test("clearing a whole list is asked about first, and only a yes clears it", async () => {
  await conversation([
    ["add milk, eggs and bread to my shopping list", /^Added milk, eggs and bread/],
    ["clear my shopping list", 'That would remove all 3 items from your shopping list. Say "yes, clear my shopping list" to go ahead.'],
    ["what is on my shopping list", "On your shopping list: 1, milk; 2, eggs; 3, bread."],
    ["no thanks", /./],
    ["yes", /./],
    ["what is on my shopping list", /^On your shopping list: 1, milk/]
  ]);
  await conversation([
    ["add milk and eggs to my shopping list", /^Added/],
    ["empty my shopping list", /^That would remove all 2 items/],
    ["yes", "Cleared your shopping list: removed 2 items."],
    ["what is on my shopping list", /^Your shopping list is empty/]
  ]);
  await conversation([
    ["add milk to my shopping list", /^Added/],
    ["yes, clear my shopping list", "Cleared your shopping list: removed 1 item."],
    ["clear my shopping list", "Your shopping list is already empty."]
  ]);
});

test("lists with a name of their own, and an overview of them", async () => {
  await conversation([
    ["add tent, torch and rope to my packing list", "Added tent, torch and rope to your packing list. You have 3 open items."],
    ["add milk to my shopping list", /^Added milk/],
    ["what lists do I have", "You have: shopping list (1 open); packing list (3 open)."],
    ["what is on my packing list", "On your packing list: 1, tent; 2, torch; 3, rope."],
    ["remove torch from my packing list", "Removed torch."],
    ["add milk to my reminders list", /./]
  ]);
  const reminders = readRequest("add milk to my reminders list", "2026-10-07");
  assert.equal(reminders?.action === "todo-add", false, "'reminders' is Kyro's own thing, not a list name");
  for (const text of ["add maize to my calendar list", "add x to my contacts list", "add a note to my notes list"]) assert.notEqual(readRequest(text, "2026-10-07")?.action, "todo-add", text);
});

test("Kiswahili lists are read, kept and answered in Kiswahili", async () => {
  await conversation([
    ["weka maziwa na mayai kwenye orodha yangu ya manunuzi", "Nimeongeza maziwa na mayai kwenye orodha yako ya manunuzi. Una vitu 2 vilivyobaki."],
    ["orodha yangu ya manunuzi ina nini", "Kwenye orodha yako ya manunuzi: 1, maziwa; 2, mayai."],
    ["naomba uniongezee mkate kwenye orodha yangu ya manunuzi", "Nimeongeza mkate kwenye orodha yako ya manunuzi. Una vitu 3 vilivyobaki."],
    ["ondoa maziwa kwenye orodha yangu ya manunuzi", "Nimeondoa maziwa."],
    ["tafadhali nisomee orodha yangu ya manunuzi", "Kwenye orodha yako ya manunuzi: 1, mayai; 2, mkate."],
    ["weka milk kwa shopping list yangu bro", "Nimeongeza milk kwenye orodha yako ya manunuzi. Una vitu 3 vilivyobaki."],
    ["ongeza kurekebisha lango kwenye orodha yangu ya kazi", "Nimeongeza kurekebisha lango kwenye orodha yako ya kazi. Una kitu 1 kilichobaki."],
    ["futa orodha yangu ya manunuzi", /^Hii itaondoa vitu vyote 3 kwenye orodha yako ya manunuzi\. Sema "ndiyo, futa orodha yangu ya manunuzi"/],
    ["ndiyo", "Nimeondoa vitu 3 kwenye orodha yako ya manunuzi."]
  ]);
});

test("a calendar time said with the part of the day is read, not left in the title", async () => {
  const { ask } = planner();
  assert.match(reply(await ask("add vet visit to my calendar tomorrow at ten in the morning")), /tomorrow at 10:00 am: vet visit\./);
  assert.match(reply(await ask("add market to my calendar on 25 October at 3 in the afternoon")), /at 3:00 pm: market/);
  assert.match(reply(await ask("weka dentist kwa calendar kesho 10am")), /Added to your calendar: tomorrow at 10:00 am: dentist/);
});

test("list names and items are read the same way every time", () => {
  assert.deepEqual(splitListItems("milk, eggs and bread", "shopping"), ["milk", "eggs", "bread"]);
  assert.deepEqual(splitListItems("milk na mayai", "shopping"), ["milk", "mayai"]);
  assert.deepEqual(splitListItems("fix the gate and buy paint", "todo"), ["fix the gate and buy paint"], "a to-do keeps its own wording");
  assert.deepEqual(splitListItems("fix the gate, buy paint", "todo"), ["fix the gate", "buy paint"]);
  assert.deepEqual(splitListItems("call mum and dad", "todo"), ["call mum and dad"]);
  assert.deepEqual(splitListItems("two and a half kilos of rice", "shopping"), ["two and a half kilos of rice"]);
  assert.deepEqual(splitListItems("the milk, a loaf, some eggs", "shopping"), ["milk", "loaf", "eggs"]);
  assert.equal(splitListItems("a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w", "shopping").length, 20);
  for (const [raw, list] of [["my shopping list", "shopping"], ["the grocery list", "shopping"], ["to-do list", "todo"], ["my to do", "todo"], ["orodha yangu ya manunuzi", "shopping"], ["orodha ya kazi", "todo"], ["my packing list", "packing"], ["the list", null]]) assert.equal(parseListRef(raw)?.list, list, raw);
  assert.equal(parseListRef("my calendar list"), null);
  assert.equal(parseListRef("what list"), null);
});

test("contacts are saved under the real name and the number is turned into +country", async () => {
  const rows = [
    ["Save John number 0733123456", "John", "+254733123456"],
    ["Could you save Otieno's number as +254712345678", "Otieno", "+254712345678"],
    ["Abeg save Ngozi number 08031234567", "Ngozi", "+2348031234567"],
    ["save Mama's number as 0722111222", "Mama", "+254722111222"],
    ["save Mama Njeri 0722111223", "Mama Njeri", "+254722111223"],
    ["hifadhi namba ya Juma kama +254733000111", "Juma", "+254733000111"],
    ["save namba ya Baraka +254733000112", "Baraka", "+254733000112"],
    ["weka namba ya Neema ni 0733000113", "Neema", "+254733000113"],
    ["Kyro, um, save Peter's number as 0733 000 114, thanks", "Peter", "+254733000114"],
    ["save Peter's number as 0733 000 115", "Peter", "+254733000115"],
    ["Save Adébáyọ̀ Ọláwálé's number as 08031234568", "Adébáyọ̀ Ọláwálé", "+2348031234568"],
    ["save Wanjiku Mũthoni's number as 0700111222", "Wanjiku Mũthoni", "+254700111222"],
    ["save Ɗanjuma's number as 07012345678", "Ɗanjuma", "+2347012345678"],
    ["save Zoë's number as ０７３３０００１１６", "Zoë", "+254733000116"],
    ["save Amira's number as ٠٧٣٣٠٠٠١١٧", "Amira", "+254733000117"]
  ];
  for (const [said, name, phone] of rows) {
    const { ask, memory } = planner();
    const answer = reply(await ask(said));
    assert.match(answer, /^(?:Saved|Updated) /, `${said} -> ${answer}`);
    const saved = (await memory.listContacts({ tenantId: "t1", userId: "u1" })).map(row => row.content);
    assert.equal(saved.length, 1, said);
    assert.equal(saved[0].name.normalize("NFC"), name.normalize("NFC"), said);
    assert.equal(saved[0].phone, phone, said);
    assert.match(answer, new RegExp(phone.replace("+", "\\+")), `the number is said back: ${answer}`);
  }
});

test("contact names: only the real name is kept", () => {
  for (const [raw, name] of [["Save John", "John"], ["Otieno's As", "Otieno"], ["Could You Save Otieno's", "Otieno"], ["Abeg Save Otieno", "Otieno"], ["Mama On", "Mama"], ["Mama's", "Mama"], ["Juma simu", "Juma"],
    ["call Juma namba", "Juma"], ["please text Amina", "Amina"], ["my brother", "Brother"], ["Amina Wanjiru", "Amina Wanjiru"], ["wanjiku mũthoni", "Wanjiku Mũthoni"], ["ADÉBÁYỌ̀", "Adébáyọ̀"], ["o'brien", "O'brien"]])
    assert.equal(cleanContactName(raw).normalize("NFC"), name.normalize("NFC"), raw);
  for (const raw of ["him", "him instead", "her", "them", "it", "instead", "me", "my", "the", "12345", "Mama2", "", "   ", "number", "reminder", "my rent reminder"]) assert.equal(cleanContactName(raw), "", raw);
});

test("local phone numbers of Kenya and Nigeria become +254 / +234, anything else is not guessed", () => {
  for (const [raw, phone] of [["0712345678", "+254712345678"], ["0712 345 678", "+254712345678"], ["0712-345-678", "+254712345678"], ["0112345678", "+254112345678"], ["254712345678", "+254712345678"], ["712345678", "+254712345678"],
    ["08031234567", "+2348031234567"], ["0803 123 4567", "+2348031234567"], ["0701 234 5678", "+2347012345678"], ["0812 345 6789", "+2348123456789"], ["0901 234 5678", "+2349012345678"], ["0913 234 5678", "+2349132345678"], ["2348031234567", "+2348031234567"],
    ["０７１２３４５６７８", "+254712345678"], ["٠٧١٢٣٤٥٦٧٨", "+254712345678"]])
    assert.equal(localPhoneToE164(raw)?.phone, phone, raw);
  for (const raw of ["07123456789", "0612345678", "071234", "08631234567", "1234567890", "+254712345678", "0000000000", "", "abc"]) assert.equal(localPhoneToE164(raw), null, raw);
  assert.equal(extractContactStatement("Save Peter's number as 07123456789")?.phone, undefined);
  assert.equal(spokenPhone("+254712345678"), "+254 712 345 678");
  assert.equal(spokenPhone("+2348031234567"), "+234 803 123 4567");
});

test("a name said with Unicode letters, accents and combining marks is accepted as a name", async () => {
  for (const [said, name] of [["my name is Adébáyọ̀ Ọláwálé", "Adébáyọ̀ Ọláwálé"], ["my name is Wanjiku Mũthoni", "Wanjiku Mũthoni"], ["my name is Ɗanjuma", "Ɗanjuma"], ["my name is Amina uh", "Amina"],
    ["Kyro, my name is Amina, thank you", "Amina"], ["um my name is Zoë", "Zoë"], ["my name na Amina", "Amina"], ["call me Adébáyọ̀", "Adébáyọ̀"], ["my name is Adó Baba", "Adó Baba"]]) {
    const { ask } = planner();
    const answer = reply(await ask(said));
    assert.ok(answer.normalize("NFC").includes(`your name is ${name}`.normalize("NFC")) || answer.normalize("NFC").includes(`remember that you are ${name}`.normalize("NFC")) || answer.normalize("NFC").includes(name.normalize("NFC")), `${said} -> ${answer}`);
    assert.doesNotMatch(answer, /Amina Uh/);
  }
});

test("a message to a saved person: 'Text John I am late' finds John's number, 'tell mama ...' is a message, and nothing becomes a call", async () => {
  const { ask } = planner({ deterministicOnly: false });
  await ask("save John's number as 0733123456"); await ask("save Mama Njeri 0722111222"); await ask("save Otieno's number as +254712345678");
  const rows = [
    ["Text John I am late", { channel: "sms", to: "+254733123456", message: "I am late", contactName: "John" }],
    ["text John saying I am late", { channel: "sms", to: "+254733123456", message: "I am late", contactName: "John" }],
    ["Kyro, text John I am late, thanks", { channel: "sms", to: "+254733123456", message: "I am late", contactName: "John" }],
    ["Kyro, text John saying I am late, thanks", { channel: "sms", to: "+254733123456", message: "I am late, thanks", contactName: "John" }],
    ["could you maybe text John that I am late please", { channel: "sms", to: "+254733123456", message: "I am late", contactName: "John" }],
    ["tell mama I am coming", { channel: "sms", to: "+254722111222", message: "I am coming", contactName: "Mama Njeri" }],
    ["tell Mama Njeri I am coming", { channel: "sms", to: "+254722111222", message: "I am coming", contactName: "Mama Njeri" }],
    ["whatsapp Otieno the meeting is at 3", { channel: "whatsapp", to: "+254712345678", message: "the meeting is at 3", contactName: "Otieno" }],
    ["send a text to Otieno saying hello", { channel: "sms", to: "+254712345678", message: "hello", contactName: "Otieno" }],
    ["abeg text Otieno say I dey come", { channel: "sms", to: "+254712345678", message: "I dey come", contactName: "Otieno" }],
    ["mtumie Otieno ujumbe kwamba niko njiani", { channel: "sms", to: "+254712345678", message: "niko njiani", contactName: "Otieno" }],
    ["tuma text kwa Otieno niko njiani", { channel: "sms", to: "+254712345678", message: "niko njiani", contactName: "Otieno" }],
    ["text 0712345678 saying hello", { channel: "sms", to: "+254712345678", message: "hello" }],
    ["sms 0803 123 4567: running late", { channel: "sms", to: "+2348031234567", message: "running late" }],
    ["text +254712345678 saying hello", { channel: "sms", to: "+254712345678", message: "hello" }]
  ];
  for (const [said, expected] of rows) {
    const plan = await ask(said);
    const step = plan.steps?.[0];
    assert.equal(step?.toolId, "communications.send", `${said} -> ${JSON.stringify(plan).slice(0, 200)}`);
    assert.deepEqual(step.input, expected, said);
    assert.notEqual(step.input.channel, "call", said);
  }
  // asked, never guessed
  assert.match(reply(await ask("text John")), /What should the message to John say\?/);
  assert.equal(reply(await ask("tell Zawadi I am coming")), "MODEL", "a name that is not saved and not a family word is left to the model, never guessed");
  assert.match(reply(await ask("tell grandma I am coming")), /I don't have a contact called Grandma/);
  assert.match(reply(await ask("text me the price")), /Who should I send it to/);
});
