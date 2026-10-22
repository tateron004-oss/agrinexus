"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { readMemoryBookRequest, MAX_ENTRY } = require("../../public/kyro-memory-book.js");
const { createMemoryBookService, MAX_ENTRIES } = require("../../nexus/companion/memory-book.js");
const { createCompanion } = require("../../nexus/companion/index.js");
const { SHARE_KEYS } = require("../../nexus/companion/circle-repository.js");

// The memory book, asked for by the owner for older people including those with dementia: short true memories that the person, or someone they chose from their trusted circle, writes down, and Kyro reads back EXACTLY as written.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const runtime = fs.readFileSync(path.join(__dirname, "../../nexus/runtime/create-runtime.js"), "utf8");

test("what is said is read exactly: adding keeps the writer's words; 'a story' alone and ordinary lists are not the memory book's", () => {
  assert.deepEqual(readMemoryBookRequest("Add to my memory book: We were married in Kisumu in 1962 and danced all night."), { action: "add", who: null, text: "We were married in Kisumu in 1962 and danced all night." });
  assert.deepEqual(readMemoryBookRequest("add to Mom's memory book: You grew up in Kisumu.\nYour father kept goats."), { action: "add", who: "Mom", text: "You grew up in Kisumu.\nYour father kept goats." });
  assert.deepEqual(readMemoryBookRequest("Please add a memory to my memory book - the day Grace was born"), { action: "add", who: null, text: "the day Grace was born" });
  assert.deepEqual(readMemoryBookRequest("Add to my memory book"), { action: "add", who: null, text: "" });
  assert.deepEqual(readMemoryBookRequest("Add to Grace's memory book"), { action: "add", who: "grace", text: "" });
  for (const text of ["Tell me a memory", "tell me a story from my life", "Read my memory book", "read me another memory", "another memory", "Tell me something from my memory book"]) assert.deepEqual(readMemoryBookRequest(text), { action: "read" }, text);
  assert.deepEqual(readMemoryBookRequest("Read me the memory about my wedding"), { action: "read-about", about: "my wedding" });
  assert.deepEqual(readMemoryBookRequest("What is in my memory book?"), { action: "list" });
  assert.deepEqual(readMemoryBookRequest("remove the memory about the goats from my memory book"), { action: "remove", about: "the goats", who: null });
  assert.deepEqual(readMemoryBookRequest("remove the memory about the goats from Grace's memory book"), { action: "remove", about: "the goats", who: "grace" });
  assert.deepEqual(readMemoryBookRequest("Let Grace add to my memory book"), { action: "allow", who: "grace" });
  assert.deepEqual(readMemoryBookRequest("Stop letting Grace add to my memory book"), { action: "disallow", who: "grace" });
  assert.deepEqual(readMemoryBookRequest("Who can add to my memory book"), { action: "allowed" });
  assert.deepEqual(readMemoryBookRequest("What is a memory book?"), { action: "help" });
  for (const text of ["Tell me a story", "Tell me a bedtime story", "Add to my shopping list: milk", "Tell me a joke", "What is in my notes", "Read my messages", "", "x".repeat(9000)]) assert.equal(readMemoryBookRequest(text), null, text);
});

// ---- fakes with the contract of the real store and circle ----
function fakeStore() {
  const rows = []; let n = 0;
  return { rows,
    async addUnlessCapped({ tenantId, userId, content, maxEntries }) {
      const mine = rows.filter(row => row.tenantId === tenantId && row.userId === userId && !row.removed);
      if (mine.length >= maxEntries) return { capped: true, count: mine.length };
      const duplicate = mine.find(row => row.content.text.trim().toLowerCase() === content.text.trim().toLowerCase());
      if (duplicate) return { duplicate: true, memoryId: duplicate.memoryId };
      const memoryId = `e${++n}`; rows.push({ memoryId, tenantId, userId, content: { kind: "entry", ...content } }); return { memoryId, content };
    },
    async list({ tenantId, userId }) { return rows.filter(row => row.tenantId === tenantId && row.userId === userId && !row.removed).map(row => ({ memoryId: row.memoryId, ...row.content })); },
    async remove({ tenantId, userId, memoryId }) { const row = rows.find(item => item.tenantId === tenantId && item.userId === userId && item.memoryId === memoryId && !item.removed); if (row) row.removed = true; return Boolean(row); }
  };
}
// Margaret (u-margaret) is the person; Grace (u-grace) is her daughter, in her circle; Joan (u-joan) is another member who may not add.
function fakeCircle({ graceMayAdd = true } = {}) {
  const links = [
    { role: "person", status: "active", linkId: "l1", otherId: "u-grace", otherName: "Grace Atieno", relationship: "my daughter", shares: { memoryBook: graceMayAdd } },
    { role: "person", status: "active", linkId: "l2", otherId: "u-joan", otherName: "Joan Akoth", relationship: "my niece", shares: {} },
    { role: "member", status: "active", linkId: "l1", otherId: "u-margaret", otherName: "Margaret Wanjiru", relationship: "my daughter", shares: { memoryBook: graceMayAdd } },
    { role: "member", status: "active", linkId: "l2", otherId: "u-margaret", otherName: "Margaret Wanjiru", relationship: "my niece", shares: {} }
  ];
  const shareCalls = [];
  return { shareCalls,
    async listFor({ userId }) { return links.filter(link => (link.role === "person" ? userId === "u-margaret" && link.otherId !== "u-margaret" : (link.linkId === "l1" ? userId === "u-grace" : userId === "u-joan"))); },
    async setShare(args) { shareCalls.push(args); for (const link of links.filter(item => item.linkId === args.linkId)) link.shares = { ...link.shares, [args.key]: args.value }; return true; },
    async activeMembers() { return []; }, async userName({ userId }) { return { "u-margaret": "Margaret Wanjiru", "u-grace": "Grace Atieno", "u-joan": "Joan Akoth" }[userId] || ""; } };
}
const world = (options = {}) => {
  const store = fakeStore(); const circle = fakeCircle(options);
  const service = createMemoryBookService({ store, circle, pick: () => 0 });
  const as = (userId, userName) => text => service.turn({ text, tenantId: "t1", userId, userName });
  return { store, circle, service, margaret: as("u-margaret", "Margaret Wanjiru"), grace: as("u-grace", "Grace Atieno"), joan: as("u-joan", "Joan Akoth") };
};

test("a memory is read back EXACTLY as written, with who wrote it; nothing is made up, nothing is asked, nothing is corrected", async () => {
  const w = world();
  assert.match(await w.margaret("Read my memory book"), /empty/);
  const mine = "I grew up by the lake with my four sisters. We swam every morning before school.";
  assert.match(await w.margaret(`Add to my memory book: ${mine}`), /^Saved to your memory book/);
  assert.equal(w.store.rows[0].content.text, mine, "stored word for word");
  const read = await w.margaret("Tell me a memory");
  assert.ok(read.includes(`You wrote this:\n\n${mine}`), read);
  // the family member's memory: written in the second person, shown with the writer's name and relationship
  const theirs = "You and Dad were married in Kisumu in 1962. You wore a yellow dress and danced all night.";
  assert.match(await w.grace(`Add to Margaret's memory book: ${theirs}`), /^Saved to Margaret Wanjiru's memory book, with your name on it/);
  assert.equal(w.store.rows[1].content.addedById, "u-grace"); assert.equal(w.store.rows[1].content.source, "family"); assert.equal(w.store.rows[1].userId, "u-margaret", "it belongs to Margaret");
  const second = await w.margaret("Tell me another memory");
  assert.ok(second.includes(`Grace Atieno, your daughter, wrote this for you:\n\n${theirs}`), second);
  // the exact text is the only content: no question, no "do you remember", no addition
  for (const said of [read, second]) {
    assert.doesNotMatch(said, /do you remember|can you remember|remember\?|\?/i, "never a question or a test");
    assert.doesNotMatch(said, /actually|but you|that is not right|you forgot/i);
  }
  const body = said => said.split("\n\n")[1];
  assert.equal(body(read), mine); assert.equal(body(second), theirs);
  assert.match(await w.margaret("Read me the memory about the yellow dress"), /Grace Atieno, your daughter, wrote this for you/);
  assert.match(await w.margaret("What is in my memory book"), /2 memories:\n1\. I grew up by the lake with my four sisters\.\n2\. You and Dad were married in Kisumu in 1962\. \(from Grace\)/);
});

test("with two or more memories, 'another' never repeats the one just read", async () => {
  let roll = 0; const store = fakeStore(); const circle = fakeCircle();
  const service = createMemoryBookService({ store, circle, pick: () => roll });
  const say = text => service.turn({ text, tenantId: "t1", userId: "u-margaret", userName: "Margaret Wanjiru" });
  await say("Add to my memory book: The lake was always cold in the morning."); await say("Add to my memory book: My sister Akinyi sang while she cooked.");
  const first = await say("Tell me a memory"); const again = await say("Tell me another memory");
  assert.notEqual(first.split("\n\n")[1], again.split("\n\n")[1]);
});

test("someone else can add only if the person allowed it; the person can read and remove, a family member only removes what they wrote", async () => {
  const w = world({ graceMayAdd: false });
  assert.match(await w.grace("Add to Margaret's memory book: You grew up by the lake."), /has not allowed you to add to their memory book yet/);
  assert.equal(w.store.rows.length, 0, "nothing saved without permission");
  assert.match(await w.margaret("Let Grace add to my memory book"), /Grace Atieno can now add memories to your memory book, with their name on each one\. They cannot read your book through me/);
  assert.deepEqual(w.circle.shareCalls[0], { tenantId: "t1", personId: "u-margaret", linkId: "l1", key: "memoryBook", value: true });
  assert.match(await w.margaret("Who can add to my memory book"), /Grace Atieno can add/);
  assert.match(await w.grace("Add to Mom's memory book: You grew up by the lake."), /^Saved to Margaret Wanjiru's memory book/, "'Mom' means the one person Grace may add for");
  // Joan was never allowed; she cannot add, and she cannot read the book through Kyro at all
  assert.match(await w.joan("Add to Margaret's memory book: A memory about the lake."), /has not allowed you/);
  assert.match(await w.grace("Tell me a memory"), /empty/, "Grace's own book, not Margaret's");
  // removing
  await w.margaret("Add to my memory book: I once met the president at a market.");
  assert.match(await w.grace("Remove the memory about the president from Margaret's memory book"), /could not find a memory about "the president" that you added/);
  assert.match(await w.grace("Remove the memory about the lake from Margaret's memory book"), /^Removed the memory/);
  assert.match(await w.margaret("Remove the memory about the president from my memory book"), /^Removed the memory "I once met the president at a market\."/);
  assert.equal(w.store.rows.filter(row => !row.removed).length, 0);
  // taking permission away
  assert.match(await w.margaret("Stop letting Grace add to my memory book"), /can no longer add to your memory book/);
  assert.match(await w.grace("Add to Margaret's memory book: Another memory about the lake."), /has not allowed you/);
});

test("limits: too long, too short, a repeat, and a full book are all said plainly and save nothing", async () => {
  const w = world();
  assert.match(await w.margaret(`Add to my memory book: ${"a long memory. ".repeat(120)}`), /too long for one memory.*Nothing was saved/);
  assert.match(await w.margaret("Add to my memory book: hi"), /very short.*Nothing was saved/);
  assert.match(await w.margaret("Add to my memory book"), /What would you like to add/);
  await w.margaret("Add to my memory book: The lake was always cold in the morning.");
  assert.match(await w.margaret("Add to my memory book: the lake was always cold in the morning."), /already in the book/);
  for (let i = 0; i < MAX_ENTRIES; i += 1) w.store.rows.push({ memoryId: `f${i}`, tenantId: "t1", userId: "u-margaret", content: { kind: "entry", title: `t${i}`, text: `filler memory number ${i} of many`, source: "self" } });
  assert.match(await w.margaret("Add to my memory book: One more memory about the lake."), /memory book is full/);
  assert.equal(MAX_ENTRY, 1500);
});

test("in the companion: a memory that mentions a death or a fire is saved; words that need the safety reply are not saved and get it; the book is off without a store", async () => {
  const store = fakeStore(); const circle = fakeCircle();
  const companion = createCompanion({ circle, checkinSettings: { listActive: async () => [], get: async () => null }, checkinState: { listPending: async () => [] }, memoryBookStore: store, notifications: { enqueue: async () => {} } });
  const say = (text, userId = "u-margaret") => companion.turn({ command: { text, tenantId: "t1", actorId: userId }, context: {} });
  assert.match(await say("Add to my memory book: My husband Joseph died in 1990 and the whole village came to the funeral."), /^Saved to your memory book/);
  assert.match(await say("Add to my memory book: In 1975 there was a fire in the kitchen and my sister burned her hand."), /^Saved to your memory book/);
  assert.equal(store.rows.length, 2);
  const urgent = await say("Add to my memory book: I want to kill myself tonight and nobody knows.");
  assert.ok(urgent && !/^Saved/.test(urgent), "the safety reply answers instead");
  assert.equal(store.rows.length, 2, "and nothing was saved");
  assert.match(await say("Tell me a memory"), /wrote this|You wrote this/);
  const off = createCompanion({ circle, checkinSettings: { listActive: async () => [], get: async () => null }, checkinState: { listPending: async () => [] }, notifications: { enqueue: async () => {} } });
  assert.equal(await off.turn({ command: { text: "Tell me a memory", tenantId: "t1", actorId: "u-margaret" }, context: {} }), null, "no store, no memory book: the turn is left to the rest of Kyro");
});

test("the permission is a circle sharing key, ending the circle clears it, and the memory book is wired in the runtime and on the page", () => {
  assert.ok(SHARE_KEYS.includes("memoryBook"));
  const repo = fs.readFileSync(path.join(__dirname, "../../nexus/companion/circle-repository.js"), "utf8");
  assert.match(repo, /status: "ended", endedAt: at, endedBy: userId, shares: \{\}/, "ending a link clears every share");
  assert.match(runtime, /memoryBookStore: new MemoryBookRepository\(db\)/);
  const start = app.indexOf("function kyroMemoryBookRequest(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const context = { window: { KyroMemoryBook: { readMemoryBookRequest } } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroMemoryBookRequest;`, context);
  for (const say of ["Tell me a memory", "Add to my memory book: We lived by the lake.", "What is in my memory book"]) assert.equal(context.ask(say), true, say);
  for (const say of ["Tell me a story", "Play some music", "What is the weather"]) assert.equal(context.ask(say), false, say);
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroMemoryBookRequest;`, none);
  assert.equal(none.ask("Tell me a memory"), false, "no reader loaded, no claim");
  assert.match(app, /\(typeof kyroMemoryBookRequest === "function" && kyroMemoryBookRequest\(trimmed\)\) \|\| \(typeof kyroPrQuestion === "function" && kyroPrQuestion\(trimmed\)\) \|\| \(typeof kyroChurchQuestion === "function" && kyroChurchQuestion\(trimmed\)\) \|\| \(typeof kyroAthleteQuestion === "function" && kyroAthleteQuestion\(trimmed\)\) \|\| \(typeof kyroMoneyQuestion === "function" && kyroMoneyQuestion\(trimmed\)\) \|\| \(typeof kyroHowtoQuestion === "function" && kyroHowtoQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-memory-book.js?v=kyro-memory-book-4"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.ok(sw.includes("`/kyro-memory-book.js?v=kyro-memory-book-4`"));
});
