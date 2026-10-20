"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { readMemoryBookRequest } = require("../../public/kyro-memory-book.js");
const { createMemoryBookService } = require("../../nexus/companion/memory-book.js");
const { createCompanion } = require("../../nexus/companion/index.js");

// Two safeguards for the memory book, decided with the owner after the first version: (1) when a family member adds a memory, the OTHER people the person allowed to add are told, with the words, so a person who cannot always tell what is
// true is not the only one who knows what was written in their book; (2) a sensitive memory (a death, to someone who may have forgotten it) can be held back: kept in the book, never read out on its own, only when asked for by name.
test("what is said: a sensitive add, holding back, and letting it be read again are read exactly", () => {
  assert.deepEqual(readMemoryBookRequest("Add a sensitive memory to my memory book: My husband Joseph died in 1990."), { action: "add", who: null, text: "My husband Joseph died in 1990.", held: true });
  assert.deepEqual(readMemoryBookRequest("add a difficult memory to Mom's memory book: Dad passed away in 1990 and you grieved for a year."), { action: "add", who: "Mom", text: "Dad passed away in 1990 and you grieved for a year.", held: true });
  assert.equal(readMemoryBookRequest("Add to my memory book: We danced all night.").held, undefined, "an ordinary add is not held");
  assert.deepEqual(readMemoryBookRequest("Hold back the memory about Joseph"), { action: "hold", about: "joseph", who: null });
  assert.deepEqual(readMemoryBookRequest("Hold back the memory about Joseph unless I ask for it"), { action: "hold", about: "joseph", who: null });
  assert.deepEqual(readMemoryBookRequest("Don't read the memory about the funeral from Margaret's memory book"), { action: "hold", about: "the funeral", who: "margaret" });
  assert.deepEqual(readMemoryBookRequest("Stop holding back the memory about Joseph"), { action: "release", about: "joseph", who: null });
  assert.deepEqual(readMemoryBookRequest("Release the memory about Joseph in my memory book"), { action: "release", about: "joseph", who: null });
  // the old requests are unchanged
  assert.equal(readMemoryBookRequest("Read me the memory about Joseph").action, "read-about");
  assert.equal(readMemoryBookRequest("Remove the memory about Joseph").action, "remove");
});

function fakeStore() {
  const rows = []; let n = 0;
  return { rows,
    async addUnlessCapped({ tenantId, userId, content, maxEntries }) {
      const mine = rows.filter(row => row.tenantId === tenantId && row.userId === userId && !row.removed);
      if (mine.length >= maxEntries) return { capped: true, count: mine.length };
      if (mine.find(row => row.content.text.trim().toLowerCase() === content.text.trim().toLowerCase())) return { duplicate: true };
      const memoryId = `e${++n}`; rows.push({ memoryId, tenantId, userId, content: { kind: "entry", ...content } }); return { memoryId, content };
    },
    async list({ tenantId, userId }) { return rows.filter(row => row.tenantId === tenantId && row.userId === userId && !row.removed).map(row => ({ memoryId: row.memoryId, ...row.content })); },
    async remove({ memoryId }) { const row = rows.find(item => item.memoryId === memoryId); if (row) row.removed = true; return Boolean(row); },
    async setHeld({ memoryId, held }) { const row = rows.find(item => item.memoryId === memoryId); if (!row) return false; row.content = { ...row.content, held }; return true; }
  };
}
// Margaret is the person. Grace and Peter are allowed to add; Joan is in the circle but not allowed.
function fakeCircle() {
  const links = [
    { role: "person", status: "active", linkId: "l1", otherId: "u-grace", otherName: "Grace Atieno", relationship: "my daughter", shares: { memoryBook: true } },
    { role: "person", status: "active", linkId: "l2", otherId: "u-peter", otherName: "Peter Otieno", relationship: "my son", shares: { memoryBook: true } },
    { role: "person", status: "active", linkId: "l3", otherId: "u-joan", otherName: "Joan Akoth", relationship: "my niece", shares: {} },
    { role: "member", status: "active", linkId: "l1", otherId: "u-margaret", otherName: "Margaret Wanjiru", relationship: "my daughter", shares: { memoryBook: true } },
    { role: "member", status: "active", linkId: "l2", otherId: "u-margaret", otherName: "Margaret Wanjiru", relationship: "my son", shares: { memoryBook: true } },
    { role: "member", status: "active", linkId: "l3", otherId: "u-margaret", otherName: "Margaret Wanjiru", relationship: "my niece", shares: {} }
  ];
  const memberOf = { "u-grace": "l1", "u-peter": "l2", "u-joan": "l3" };
  return { async listFor({ userId }) { return userId === "u-margaret" ? links.filter(link => link.role === "person") : links.filter(link => link.role === "member" && link.linkId === memberOf[userId]); }, async setShare() { return true; }, async activeMembers() { return []; }, async userName() { return ""; } };
}
const world = ({ pick = () => 0, failFor = null } = {}) => {
  const store = fakeStore(); const circle = fakeCircle(); const pushes = [];
  const push = async args => { if (failFor && args.userId === failFor) throw new Error("push failed"); pushes.push(args); };
  const service = createMemoryBookService({ store, circle, push, pick });
  const as = (userId, userName) => text => service.turn({ text, tenantId: "t1", userId, userName });
  return { store, pushes, margaret: as("u-margaret", "Margaret Wanjiru"), grace: as("u-grace", "Grace Atieno"), peter: as("u-peter", "Peter Otieno"), joan: as("u-joan", "Joan Akoth") };
};

test("when a family member adds a memory, the OTHER people the person allowed are told, with the words; nobody else is", async () => {
  const w = world();
  const said = await w.grace("Add to Margaret's memory book: You grew up by the lake with your four sisters. You swam every morning before school.");
  assert.match(said, /^Saved to Margaret Wanjiru's memory book, with your name on it\. The other people Margaret allowed to add to the book are told what you added/);
  assert.equal(w.pushes.length, 1, "Peter only: not Grace (the writer), not Joan (never allowed), not Margaret (the person; she hears it by asking, with Grace's name on it)");
  const push = w.pushes[0];
  assert.equal(push.userId, "u-peter"); assert.equal(push.tenantId, "t1");
  assert.equal(push.title, "New memory in Margaret's memory book");
  assert.match(push.body, /^Grace Atieno added a memory to Margaret Wanjiru's memory book: "You grew up by the lake with your four sisters\. You swam every morning before school\." You are told because you can add to this book too\. If anything looks wrong, tell Margaret or the family\.$/);
  assert.match(push.key, /^memory-book:e1:u-peter$/);
  // a sensitive one says so
  await w.peter("Add a sensitive memory to Margaret's memory book: Your husband Joseph died in 1990 and you grieved for a year.");
  assert.equal(w.pushes.length, 2); assert.equal(w.pushes[1].userId, "u-grace"); assert.match(w.pushes[1].body, /Peter Otieno added a memory to Margaret Wanjiru's memory book \(marked sensitive\): "Your husband Joseph died/);
  // a long memory is cut in the push, never in the book
  const long = `You remember ${"the lake and the long road home. ".repeat(20)}`.trim();
  await w.grace(`Add to Margaret's memory book: ${long}`);
  assert.ok(w.pushes[2].body.includes("...") && w.pushes[2].body.length < 520);
  assert.equal(w.store.rows[2].content.text, long, "the whole memory is saved");
});

test("no push when nothing was added or nobody else may add: the person's own memory, a refused add, a repeat, one allowed person only, a failed push", async () => {
  const w = world();
  await w.margaret("Add to my memory book: The lake was always cold in the morning.");
  assert.equal(w.pushes.length, 0, "the person's own memory tells nobody");
  assert.match(await w.joan("Add to Margaret's memory book: A memory about the lake that I would like to add."), /has not allowed you/);
  await w.grace("Add to Margaret's memory book: You grew up by the lake with your four sisters.");
  assert.equal(w.pushes.length, 1);
  assert.match(await w.grace("Add to Margaret's memory book: You grew up by the lake with your four sisters."), /already in the book/);
  assert.equal(w.pushes.length, 1, "a repeat is not announced again");
  assert.match(await w.grace("Add to Margaret's memory book: hi"), /very short/);
  assert.equal(w.pushes.length, 1);
  // a push that fails does not stop the memory, or the other people being told
  const failing = world({ failFor: "u-peter" });
  assert.match(await failing.grace("Add to Margaret's memory book: You grew up by the lake with your four sisters."), /^Saved to Margaret Wanjiru's memory book/);
  assert.equal(failing.store.rows.length, 1);
  // with no way to push at all the memory is still saved
  const store = fakeStore();
  const quiet = createMemoryBookService({ store, circle: fakeCircle() });
  assert.match(await quiet.turn({ text: "Add to Margaret's memory book: You grew up by the lake with your four sisters.", tenantId: "t1", userId: "u-grace", userName: "Grace Atieno" }), /^Saved to Margaret Wanjiru's memory book/);
});

test("a held memory is kept but never read out on its own; it is read when asked for by name; the writer's words are never changed", async () => {
  // pick() covers the whole range: whichever memory is chosen, it is never a held one
  for (const roll of [0, 0.34, 0.67, 0.99]) {
    const w = world({ pick: () => roll });
    await w.margaret("Add to my memory book: The lake was always cold in the morning.");
    await w.margaret("Add a sensitive memory to my memory book: My husband Joseph died in 1990 and the whole village came.");
    await w.margaret("Add to my memory book: My sister Akinyi sang while she cooked.");
    for (let i = 0; i < 4; i += 1) assert.doesNotMatch(await w.margaret("Tell me a memory"), /Joseph/, `roll ${roll}`);
  }
  const w = world();
  assert.match(await w.margaret("Add a sensitive memory to my memory book: My husband Joseph died in 1990 and the whole village came."), /^Saved to your memory book\. It is marked sensitive, so I will not read it out on my own/);
  assert.equal(w.store.rows[0].content.held, true);
  assert.match(await w.margaret("Tell me a memory"), /^Every memory in your book is being held back/, "when every memory is held, none is read out on its own");
  assert.match(await w.margaret("Read me the memory about Joseph"), /My husband Joseph died in 1990 and the whole village came\./, "asked for by name, it is read");
  assert.match(await w.margaret("What is in my memory book"), /1\. My husband Joseph died in 1990 and the whole village came\. \(held back\)/);
  assert.match(await w.margaret("Stop holding back the memory about Joseph"), /can be read out again/);
  assert.equal(w.store.rows[0].content.held, false);
  assert.match(await w.margaret("Tell me a memory"), /Joseph/);
  assert.match(await w.margaret("Hold back the memory about Joseph"), /stays in your memory book, but I will not read it out on my own/);
  assert.equal(w.store.rows[0].content.text, "My husband Joseph died in 1990 and the whole village came.", "holding never changes the words");
  assert.match(await w.margaret("Hold back the memory about nothing at all"), /could not find a memory about/);
});

test("holding back follows the removing rule: the person for anything, a family member only for what they wrote", async () => {
  const w = world();
  await w.margaret("Add to my memory book: My husband Joseph died in 1990 and the whole village came.");
  await w.grace("Add to Margaret's memory book: Your father kept goats by the river when you were a girl.");
  assert.match(await w.grace("Hold back the memory about Joseph in Margaret's memory book"), /could not find a memory about "joseph" that you added/);
  assert.equal(w.store.rows[0].content.held, undefined, "Grace cannot hold back what Margaret wrote");
  assert.match(await w.grace("Hold back the memory about goats in Margaret's memory book"), /stays in Margaret's memory book/);
  assert.equal(w.store.rows[1].content.held, true);
  assert.match(await w.margaret("Release the memory about goats"), /can be read out again/, "the person can release what a family member held");
  assert.match(await w.joan("Hold back the memory about goats in Margaret's memory book"), /could not find a memory about "goats" that you added to Margaret's memory book/, "a person who was never allowed cannot hold back anything either");
});

test("in the companion, the notification is a push to the other allowed person's phone", async () => {
  const store = fakeStore(); const queued = [];
  const companion = createCompanion({ circle: fakeCircle(), checkinSettings: { listActive: async () => [], get: async () => null }, checkinState: { listPending: async () => [] }, memoryBookStore: store, notifications: { enqueue: async row => { queued.push(row); } } });
  const say = (text, userId) => companion.turn({ command: { text, tenantId: "t1", actorId: userId }, context: {} });
  assert.match(await say("Add to Margaret's memory book: You grew up by the lake with your four sisters.", "u-grace"), /^Saved to Margaret Wanjiru's memory book/);
  assert.equal(queued.length, 1);
  assert.equal(queued[0].userId, "u-peter"); assert.equal(queued[0].channel, "push"); assert.equal(queued[0].content.kind, "circle"); assert.match(queued[0].content.body, /You grew up by the lake with your four sisters/);
  assert.match(queued[0].idempotencyKey, /^memory-book:e1:u-peter$/);
});

// Found on the live site: said aloud, "Add a sensitive memory to my memory book. My husband Joseph died..." has a full stop where a typed request has a colon, was not read as a request, and the voice model made a document of it.
test("said aloud, an add has a full stop, a comma, a dash or nothing after 'memory book', and still saves; punctuation alone is no memory", () => {
  for (const sep of [":", ".", ",", " -", ";", "", "!"]) {
    assert.deepEqual(readMemoryBookRequest(`Add to my memory book${sep} My sister Akinyi sang while she cooked.`), { action: "add", who: null, text: "My sister Akinyi sang while she cooked." }, JSON.stringify(sep));
    assert.deepEqual(readMemoryBookRequest(`Add a sensitive memory to my memory book${sep} My husband Joseph died in 1990.`), { action: "add", who: null, text: "My husband Joseph died in 1990.", held: true }, JSON.stringify(sep));
    assert.deepEqual(readMemoryBookRequest(`Add to Mom's memory book${sep} You grew up by the lake.`), { action: "add", who: "Mom", text: "You grew up by the lake." }, JSON.stringify(sep));
  }
  assert.deepEqual(readMemoryBookRequest("Add to my memory book."), { action: "add", who: null, text: "" }, "a full stop alone is nothing to save");
  assert.deepEqual(readMemoryBookRequest("Add to my memory book!!"), { action: "add", who: null, text: "" });
  assert.equal(readMemoryBookRequest("Add to my memory bookshelf the red one"), null, "a different word is not the memory book");
});

// Found on the live site: speech recognition split "Add a sensitive memory to my memory book. My husband Joseph died..." into two sentences, so the request had no memory in it and the voice model made a document of it. The page now keeps a short wait.
test("on the page, a bare 'add to my memory book' makes the NEXT sentence the memory; another request, 'never mind', a late sentence and a repeat are handled", () => {
  const fs = require("node:fs"); const path = require("node:path"); const vm = require("node:vm");
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const start = app.indexOf("let kyroMemoryBookPending = null;"); const end = app.indexOf("function kyroMemoryBookRequest(text) {");
  assert.ok(start > 0 && end > start);
  let now = 1000000;
  const context = { window: { KyroMemoryBook: { readMemoryBookRequest } }, Date: { now: () => now } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.f = kyroMemoryBookFollowUp; this.reset = () => { kyroMemoryBookPending = null; kyroMemoryBookDone = null; };`, context);
  const f = context.f; const reset = context.reset;
  // nothing is waiting: an ordinary sentence is nobody's memory
  assert.equal(f("My husband Joseph died in 1990."), "");
  // "add to my memory book." opens the wait (and is itself left to the normal claim), and the next sentence completes it
  assert.equal(f("Add to my memory book."), "");
  assert.equal(f("My sister Akinyi sang while she cooked every evening."), "Add to my memory book: My sister Akinyi sang while she cooked every evening.");
  assert.equal(f("My sister Akinyi sang while she cooked every evening."), "Add to my memory book: My sister Akinyi sang while she cooked every evening.", "the same sentence heard again is still the same answer");
  assert.equal(f("Another sentence with nothing waiting."), "", "one sentence only");
  // sensitive and someone else's book
  reset(); assert.equal(f("Add a sensitive memory to my memory book."), "");
  assert.equal(f("My husband Joseph died in 1990."), "Add a sensitive memory to my memory book: My husband Joseph died in 1990.");
  reset(); assert.equal(f("Add a memory to Grace's memory book"), "");
  assert.equal(f("You grew up by the lake."), "Add to grace's memory book: You grew up by the lake.");
  // another request, or "never mind", or too late: not a memory
  reset(); f("Add to my memory book."); assert.equal(f("Tell me a memory"), "", "another request ends the wait");
  assert.equal(f("My sister sang while she cooked."), "", "and nothing is waiting any more");
  reset(); f("Add to my memory book."); assert.equal(f("Never mind"), ""); assert.equal(f("My sister sang while she cooked."), "");
  reset(); f("Add to my memory book."); now += 181000; assert.equal(f("My sister sang while she cooked."), "", "after three minutes the wait is over");
  // no reader loaded: nothing happens
  const none = { window: {}, Date: { now: () => now } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.f = kyroMemoryBookFollowUp;`, none);
  assert.equal(none.f("Add to my memory book."), "");
  // and the page uses it before the other claims
  assert.ok(app.indexOf("kyroMemoryBookFollowUp(trimmed)") > 0 && app.indexOf("kyroMemoryBookFollowUp(trimmed)") < app.indexOf("kyroMemoryBookRequest(trimmed)"));
});

// Found on the live site: a misheard "Hold back" ("Fold back") was not read, the voice model answered, and it said it had adjusted a memory when it had done nothing.
test("anything that names the memory book but is not understood gets an honest 'I did not catch that' and changes nothing; ordinary talk is left alone", async () => {
  assert.deepEqual(readMemoryBookRequest("Fold back the memory about Joseph."), { action: "hold", about: "joseph", who: null }, "a common mishearing of 'hold back'");
  for (const text of ["Do something with my memory book", "Mark the first memory in my memory book as private", "Grace's memory book is nice"]) assert.deepEqual(readMemoryBookRequest(text), { action: "unclear" }, text);
  for (const text of ["I love my sister", "Tell me a story", "My sister kept a memory book for years and it was lovely", "I treasure the memory of my father"]) assert.equal(readMemoryBookRequest(text), null, text);
  const w = world();
  await w.margaret("Add to my memory book: My sister Akinyi sang while she cooked every evening.");
  const before = JSON.stringify(w.store.rows);
  const said = await w.margaret("Mark the first memory in my memory book as private");
  assert.match(said, /^I did not catch that, so I have not changed anything in the memory book\. You can say:/);
  assert.equal(JSON.stringify(w.store.rows), before, "nothing was changed");
});
