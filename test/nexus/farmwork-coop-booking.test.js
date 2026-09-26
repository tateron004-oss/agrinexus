"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const coop = require("../../nexus/farmwork/coop.js");

// Found live: booking shared cooperative equipment by a one-word name
// ("book the pump") silently picked whichever real item happened to come
// first in storage order whenever that word matched more than one real
// piece of equipment ("pump" matches both "water pump" and "sprayer pump"),
// with a fully-confirmed "Booked the water pump..." message and no
// disambiguation -- the same silent-wrong-record shape already fixed
// elsewhere this session (findMember() a few lines above this code already
// gets it right: exact match, else exactly-one-loose-match, else refuse).
function fakeStore() {
  const rows = []; let seq = 0;
  return {
    rows,
    async list({ collection }) { return rows.filter(row => row.collection === collection); },
    async add({ collection, data }) { const record = { collection, data, number: ++seq, memoryId: `id${seq}` }; rows.push(record); return record; }
  };
}
function ctxFor(store, text) {
  return { tenantId: "t1", userId: "u1", today: "2026-09-25", store, text };
}

test("booking shared equipment by a one-word name that matches two real items refuses instead of silently booking the wrong one", async () => {
  const store = fakeStore();
  await coop.handle(ctxFor(store, "add shared equipment: water pump"));
  await coop.handle(ctxFor(store, "add shared equipment: sprayer pump"));
  const result = await coop.handle(ctxFor(store, "book the pump for Amina on Friday"));
  assert.equal(result, null, "an ambiguous one-word match must not silently book either real item");
  assert.equal(store.rows.filter(row => row.collection === "coop_booking").length, 0, "nothing should be booked when the match is ambiguous");
});

test("booking shared equipment by an unambiguous name still works exactly as before", async () => {
  const store = fakeStore();
  await coop.handle(ctxFor(store, "add shared equipment: tractor"));
  const result = await coop.handle(ctxFor(store, "book the tractor for Amina on Friday"));
  assert.match(result, /Booked the tractor for Amina/);
  assert.equal(store.rows.filter(row => row.collection === "coop_booking").length, 1);
});

test("booking shared equipment by its exact full name still resolves even when a loose one-word query would be ambiguous", async () => {
  const store = fakeStore();
  await coop.handle(ctxFor(store, "add shared equipment: water pump"));
  await coop.handle(ctxFor(store, "add shared equipment: sprayer pump"));
  const result = await coop.handle(ctxFor(store, "book the water pump for Amina on Friday"));
  assert.match(result, /Booked the water pump for Amina/);
});
