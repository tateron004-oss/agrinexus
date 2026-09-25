"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const telehealthProvider = require("../../server/telehealth/provider.js");

// Found live (uploads/telehealth/permissions follow-up audit): every function
// that resolves an encounter by encounterId (createVideoRoom, prepareNotification,
// createFollowUp) had no check that the encounter belongs to the caller --
// encounterId is only 32 bits of randomness plus a guessable timestamp, not a
// real authorization boundary. Any other Standard User or guest account that
// learned or guessed another user's encounterId could create a real video
// room tied to that encounter, prepare a notification referencing their real
// symptoms/condition area, or create a follow-up against it.

const env = { NEXUS_TELEHEALTH_PROVIDER: "local" };
const owner = { id: "u1", name: "Amina" };
const stranger = { id: "u2", name: "Otieno" };
const admin = { id: "u3", name: "Admin", role: "Admin" };

async function createOwnedEncounter(db) {
  const created = await telehealthProvider.createEncounter(db, {
    conditionArea: "general", confirmed: true, consentToPreparePacket: true
  }, owner, env);
  return created.encounter.id;
}

test("createVideoRoom refuses a stranger's encounterId, but still works for its real owner", async () => {
  const db = {};
  const encounterId = await createOwnedEncounter(db);
  const strangerResult = await telehealthProvider.createVideoRoom(db, { encounterId, confirmed: true, consentToShare: true }, stranger, env);
  assert.equal(strangerResult.ok, false);
  assert.equal(strangerResult.status, "forbidden");
  const ownerResult = await telehealthProvider.createVideoRoom(db, { encounterId, confirmed: true, consentToShare: true }, owner, env);
  assert.notEqual(ownerResult.status, "forbidden");
});

test("prepareNotification refuses a stranger's encounterId, but still works for its real owner", async () => {
  const db = {};
  const encounterId = await createOwnedEncounter(db);
  const strangerResult = telehealthProvider.prepareNotification(db, { encounterId, confirmed: true, consentToShare: true }, stranger, env);
  assert.equal(strangerResult.ok, false);
  assert.equal(strangerResult.status, "forbidden");
  const ownerResult = telehealthProvider.prepareNotification(db, { encounterId, confirmed: true, consentToShare: true }, owner, env);
  assert.equal(ownerResult.status, "prepared");
});

test("createFollowUp refuses a stranger's encounterId, but still works for its real owner", async () => {
  const db = {};
  const encounterId = await createOwnedEncounter(db);
  const strangerResult = telehealthProvider.createFollowUp(db, { encounterId, confirmed: true }, stranger);
  assert.equal(strangerResult.ok, false);
  assert.equal(strangerResult.status, "forbidden");
  const ownerResult = telehealthProvider.createFollowUp(db, { encounterId, confirmed: true }, owner);
  assert.equal(ownerResult.status, "created");
});

test("an Admin can still access any encounter, mirroring canAccessUpload's Admin override", async () => {
  const db = {};
  const encounterId = await createOwnedEncounter(db);
  const adminResult = telehealthProvider.prepareNotification(db, { encounterId, confirmed: true, consentToShare: true }, admin, env);
  assert.equal(adminResult.status, "prepared");
});

test("ownsEncounter fails closed for a legacy encounter with no userId at all, rather than guessing an owner", () => {
  const legacyEncounter = { id: "enc-legacy", userId: null };
  assert.equal(telehealthProvider.ownsEncounter(legacyEncounter, owner), false);
  assert.equal(telehealthProvider.ownsEncounter(legacyEncounter, admin), true, "Admin override still applies");
});
