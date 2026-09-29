"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const providerContactBridge = require("../../server/providers/providerContactBridgeProvider.js");

// Found live (drone/provider sibling sweep): saveProviderNote() only scanned the `note` field for
// sensitive health content; providerName/organization/npi/source are ALL persisted into the same
// record (equally free-text, caller-controlled fields on this raw POST body) but sailed through
// unscanned -- directly contradicting the function's own declared invariant
// (sensitiveHealthDataAllowed: false) and the blocked-response message's explicit promise. saveProvider()
// had no content filter at all despite unconditionally asserting noHealthDataStored: true.
function freshDb() { return { profile: {} }; }
const env = { NEXUS_PROVIDER_CONTACT_BRIDGE_ENABLED: "true" };

test("saveProviderNote blocks sensitive content in providerName/organization/npi/source, not just note", () => {
  const db = freshDb();
  const blockedName = providerContactBridge.saveProviderNote({ confirmed: true, note: "Following up next week", providerName: "Patient has diabetes, SSN 123-45-6789" }, db, env);
  assert.equal(blockedName.body.status, "blocked", JSON.stringify(blockedName.body));
  const blockedOrg = providerContactBridge.saveProviderNote({ confirmed: true, note: "Following up next week", organization: "prescribing insulin clinic" }, db, env);
  assert.equal(blockedOrg.body.status, "blocked", JSON.stringify(blockedOrg.body));
  const blockedSource = providerContactBridge.saveProviderNote({ confirmed: true, note: "Following up next week", source: "pregnant patient referral list" }, db, env);
  assert.equal(blockedSource.body.status, "blocked", JSON.stringify(blockedSource.body));
  assert.equal((db.profile.nexusProviderNotes || []).length, 0, "no note must be saved while any scanned field is sensitive");

  const ok = providerContactBridge.saveProviderNote({ confirmed: true, note: "Following up next week", providerName: "Dr. Jane Smith", organization: "Riverside Clinic" }, db, env);
  assert.equal(ok.body.status, "completed", JSON.stringify(ok.body));
});

test("saveProviderNote still blocks sensitive content in the note field itself, unchanged", () => {
  const db = freshDb();
  const blocked = providerContactBridge.saveProviderNote({ confirmed: true, note: "Patient's diagnosis is pending" }, db, env);
  assert.equal(blocked.body.status, "blocked", JSON.stringify(blocked.body));
});

test("saveProvider blocks sensitive content in name/organization/specialty/address, matching its own noHealthDataStored claim", () => {
  const db = freshDb();
  const blockedSpecialty = providerContactBridge.saveProvider({ confirmed: true, providerName: "Dr. Smith", providerType: "diabetes and pregnancy specialist" }, db, env);
  assert.equal(blockedSpecialty.body.status, "blocked", JSON.stringify(blockedSpecialty.body));
  const blockedAddress = providerContactBridge.saveProvider({ confirmed: true, providerName: "Dr. Smith", address: "next to the patient's medical record office, insurance bldg" }, db, env);
  assert.equal(blockedAddress.body.status, "blocked", JSON.stringify(blockedAddress.body));
  assert.equal((db.profile.nexusSavedProviders || []).length, 0, "no provider must be saved while any scanned field is sensitive");

  const ok = providerContactBridge.saveProvider({ confirmed: true, providerName: "Dr. Jane Smith", organization: "Riverside Clinic", providerType: "Pediatrics", address: "123 Main St" }, db, env);
  assert.equal(ok.body.status, "completed", JSON.stringify(ok.body));
  assert.equal(ok.body.data.provider.noHealthDataStored, true);
});
