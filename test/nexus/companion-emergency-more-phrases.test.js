"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { readSafetyDetailed, safetyTurn } = require("../../nexus/companion/safety.js");

// Found by an independent review that typed real emergencies: "my mother is not breathing", "I took too many tablets", "someone is attacking me" and "I'm thinking about hurting
// myself" got an ordinary reply (a health menu, or a learning-hub offer) instead of the calm emergency reply with the number to call. Alerts go to real people, so the ordinary
// sentences that share these words must still not alert.

const kind = text => readSafetyDetailed(text)?.kind || null;

test("someone else's life in danger, an overdose, poison and an attack alert the circle and give the number", () => {
  for (const phrase of ["my mother is not breathing", "my baby is not breathing", "my baby is choking", "my husband has collapsed", "she has collapsed and will not wake up", "my old neighbour is unconscious",
    "my son just stopped breathing", "my father is having a heart attack", "he is not breathing", "I took too many tablets", "I have taken too much paracetamol", "I swallowed too many pills",
    "I took an overdose", "I overdosed", "I drank pesticide", "I swallowed poison", "I have drunk bleach", "someone is attacking me", "I am being attacked", "I'm being chased"]) assert.equal(kind(phrase), "emergency", phrase);
});

test("thinking about hurting yourself is answered with care", () => {
  for (const phrase of ["I'm thinking about hurting myself", "I keep hurting myself", "I am harming myself", "I want to hurt myself"]) assert.equal(kind(phrase), "self_harm", phrase);
});

test("ordinary sentences with the same words do not alert anyone", () => {
  for (const phrase of ["I took all my pills", "I took my pills this morning", "I took too many photos", "my mother is not feeling well", "my baby is sleeping", "my friend is choking on laughter", "I ate too much at the wedding",
    "I drank too much water", "the baby is breathing fine", "we took too many bags to market", "he took too long", "I swallowed my pride", "my boss is attacking my plan", "I hurt my back", "my goat is not breathing well",
    "my husband is not breathing fire"]) assert.notEqual(kind(phrase), "emergency", phrase);
});

test("an emergency reply alerts the people in the circle and says who was told, and with nobody in the circle it gives the number", async () => {
  const pushed = [];
  const circle = { activeMembers: async () => [{ otherId: "u2", otherName: "Grace", shares: {} }] };
  const reply = await safetyTurn({ text: "my mother is not breathing", circle, push: async (to, title, body, key) => { pushed.push({ to, key }); }, tenantId: "t", userId: "u1", userName: "Amina", now: new Date("2026-10-05T10:00:00Z") });
  assert.equal(pushed.length, 1);
  assert.match(reply, /Grace/);
  assert.match(reply, /emergency number/i);
  const alone = await safetyTurn({ text: "I took too many tablets", circle: { activeMembers: async () => [] }, push: async () => { throw new Error("none"); }, tenantId: "t", userId: "u1", userName: "Amina" });
  assert.match(alone, /emergency number/i);
});

test("the health guidance planner also treats these as red flags", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../nexus/brain/planner.js"), "utf8");
  const line = source.split("\n").find(row => row.includes("const redFlag = "));
  for (const word of ["unresponsive", "overdos", "took too (?:many|much)", "(?:not|isn't|stopped|stops|stop) breathing", "poisoned", "choking"]) assert.ok(line.includes(word), word);
});
