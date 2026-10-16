"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { mergeStates } = require("../../server/db-merge.js");

const clone = value => JSON.parse(JSON.stringify(value));

test("two requests that each add a record both keep theirs", () => {
  const base = { contacts: [{ id: "a", name: "A" }] };
  const mine = clone(base); mine.contacts.push({ id: "b", name: "B" });
  const latest = clone(base); latest.contacts.push({ id: "c", name: "C" });
  const merged = mergeStates(base, mine, latest);
  assert.deepEqual(merged.contacts.map(c => c.id).sort(), ["a", "b", "c"]);
});

test("changes to different parts of the state both stay", () => {
  const base = { profile: { reminders: [], notes: [] }, settings: { theme: "light" } };
  const mine = clone(base); mine.profile.reminders.push({ id: "r1" });
  const latest = clone(base); latest.settings.theme = "dark"; latest.profile.notes.push({ id: "n1" });
  const merged = mergeStates(base, mine, latest);
  assert.equal(merged.settings.theme, "dark");
  assert.deepEqual(merged.profile.reminders, [{ id: "r1" }]);
  assert.deepEqual(merged.profile.notes, [{ id: "n1" }]);
});

test("two changes to different fields of one record both stay; the same field takes mine", () => {
  const base = { users: [{ id: "u", name: "Old", phone: "1", city: "X" }] };
  const mine = clone(base); mine.users[0].name = "Mine"; mine.users[0].city = "Mine city";
  const latest = clone(base); latest.users[0].phone = "2"; latest.users[0].city = "Theirs";
  const merged = mergeStates(base, mine, latest);
  assert.deepEqual(merged.users[0], { id: "u", name: "Mine", phone: "2", city: "Mine city" });
});

test("a record deleted by either side stays deleted, even if the other side changed it", () => {
  const base = { users: [{ id: "u1", seen: 1 }, { id: "u2", seen: 1 }] };
  const mine = clone(base); mine.users = mine.users.filter(u => u.id !== "u1"); // erased the account
  const latest = clone(base); latest.users[0].seen = 2; latest.users[1].seen = 2; // someone else touched both
  const merged = mergeStates(base, mine, latest);
  assert.deepEqual(merged.users.map(u => u.id), ["u2"]);
  assert.equal(merged.users[0].seen, 2);
  const mine2 = clone(base); mine2.users[0].seen = 5;
  const latest2 = clone(base); latest2.users = latest2.users.filter(u => u.id !== "u1");
  assert.deepEqual(mergeStates(base, mine2, latest2).users.map(u => u.id), ["u2"]);
});

test("a key deleted by either side stays deleted", () => {
  const base = { a: { x: 1 }, b: { y: 1 } };
  const mine = clone(base); delete mine.a;
  const latest = clone(base); latest.a.x = 2; latest.b.y = 2;
  const merged = mergeStates(base, mine, latest);
  assert.equal("a" in merged, false);
  assert.equal(merged.b.y, 2);
});

test("lists without ids are merged as sets: what I removed goes, what I added is added, what the other side added stays", () => {
  const base = { log: ["one", "two", "three"] };
  const mine = { log: ["two", "three", "mine"] };
  const latest = { log: ["one", "two", "three", "theirs"] };
  assert.deepEqual(mergeStates(base, mine, latest).log, ["two", "three", "theirs", "mine"]);
});

test("a capped list (oldest dropped, newest added) loses nothing the other side added", () => {
  const base = { entries: [{ t: 1 }, { t: 2 }, { t: 3 }] };
  const mine = { entries: [{ t: 2 }, { t: 3 }, { t: 4 }] };
  const latest = { entries: [{ t: 1 }, { t: 2 }, { t: 3 }, { t: 9 }] };
  assert.deepEqual(mergeStates(base, mine, latest).entries.map(e => e.t), [2, 3, 9, 4]);
});

test("a single value both sides changed takes mine; a value only the other side changed keeps theirs", () => {
  const base = { n: 1, s: "a", t: "a" };
  const mine = { n: 2, s: "a", t: "mine" };
  const latest = { n: 3, s: "theirs", t: "theirs" };
  assert.deepEqual(mergeStates(base, mine, latest), { n: 2, s: "theirs", t: "mine" });
});

test("nothing changed by me returns the newer state; nothing changed by them returns mine", () => {
  const base = { a: [1, 2], b: { c: 1 } };
  const latest = { a: [1, 2, 3], b: { c: 1 } };
  assert.deepEqual(mergeStates(base, clone(base), latest), latest);
  const mine = { a: [1], b: { c: 5 } };
  assert.deepEqual(mergeStates(base, mine, clone(base)), mine);
});

test("ten saves made from the same starting state all keep their record", () => {
  const start = { profile: { buyerContacts: [] } };
  let stored = clone(start);
  for (let i = 0; i < 10; i += 1) {
    const mine = clone(start); mine.profile.buyerContacts.push({ id: `c${i}` });
    stored = mergeStates(start, mine, stored);
  }
  assert.equal(stored.profile.buyerContacts.length, 10);
});

test("records without unique ids are treated as whole values, not merged by a wrong key", () => {
  const base = { rows: [{ id: "x", v: 1 }, { id: "x", v: 2 }] };
  const mine = clone(base); mine.rows.push({ id: "x", v: 3 });
  const latest = clone(base); latest.rows.push({ id: "x", v: 4 });
  assert.deepEqual(mergeStates(base, mine, latest).rows.map(r => r.v), [1, 2, 4, 3]);
});
