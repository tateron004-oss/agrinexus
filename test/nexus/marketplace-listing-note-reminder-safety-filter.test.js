"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const marketplaceBridge = require("../../server/providers/marketplaceBridgeProvider.js");

// Found live (marketplace/stock-race sibling sweep, follow-up to #748's queueOffline() id/source
// fix): three more write paths in this same file had the identical field-coverage gap #748 closed
// for queueOffline() -- a field that IS persisted (and, for createListing, shown to and searchable
// by other users) was left out of the SENSITIVE_MARKETPLACE_PATTERN scan, even though identical
// content in a sibling field on the same call was already correctly blocked.
const env = { NEXUS_MARKETPLACE_BRIDGE_ENABLED: "true", NEXUS_REMINDERS_ENABLED: "true" };
function freshDb() { return { profile: {} }; }

test("createListing: sensitive content in priceText is blocked, not silently saved and shown to other users", () => {
  const db = freshDb();
  const blocked = marketplaceBridge.createListing({ confirmed: true, title: "Maize seeds", category: "Seeds", priceText: "pay via bank account 0123456789" }, db, env);
  assert.equal(blocked.body.status, "blocked", JSON.stringify(blocked.body));
  assert.match(blocked.body.message, /payment, checkout, private financial, health, credential, or secret content/);
  assert.equal((db.profile.marketplaceListings || []).length, 0, "the listing must not be saved when priceText is sensitive");

  const ok = marketplaceBridge.createListing({ confirmed: true, title: "Maize seeds", category: "Seeds", priceText: "$50 per bag, negotiable" }, db, env);
  assert.equal(ok.body.status, "completed", JSON.stringify(ok.body));
});

test("saveNote: sensitive content in listingId/title/category is blocked, not just in the note text", () => {
  const db = freshDb();
  const blockedTitle = marketplaceBridge.saveNote({ confirmed: true, note: "Following up next week", title: "card 4111111111111111 for deposit" }, db, env);
  assert.equal(blockedTitle.body.status, "blocked", JSON.stringify(blockedTitle.body));
  const blockedCategory = marketplaceBridge.saveNote({ confirmed: true, note: "Following up next week", category: "ssn 123-45-6789" }, db, env);
  assert.equal(blockedCategory.body.status, "blocked", JSON.stringify(blockedCategory.body));
  const blockedListingId = marketplaceBridge.saveNote({ confirmed: true, note: "Following up next week", listingId: "routing number 021000021" }, db, env);
  assert.equal(blockedListingId.body.status, "blocked", JSON.stringify(blockedListingId.body));
  assert.equal((db.profile.nexusMarketplaceNotes || []).length, 0, "no note must be saved while any scanned field is sensitive");

  const ok = marketplaceBridge.saveNote({ confirmed: true, note: "Following up next week", title: "Maize seeds", category: "Seeds", listingId: "listing-1" }, db, env);
  assert.equal(ok.body.status, "completed", JSON.stringify(ok.body));
});

test("createReminder: sensitive content in the listing title or due-date phrase is blocked, not saved unfiltered to the reminders store", () => {
  const db = freshDb();
  const blockedTitle = marketplaceBridge.createReminder({ confirmed: true, title: "bank account 0123456789 lot" }, db, env);
  assert.equal(blockedTitle.body.status, "blocked", JSON.stringify(blockedTitle.body));
  const blockedDueAt = marketplaceBridge.createReminder({ confirmed: true, title: "Maize seeds", dueAt: "call re: ssn 123-45-6789" }, db, env);
  assert.equal(blockedDueAt.body.status, "blocked", JSON.stringify(blockedDueAt.body));
  assert.equal((db.profile.nexusReminders || []).length, 0, "no reminder must be created while title or dueAt is sensitive");

  const ok = marketplaceBridge.createReminder({ confirmed: true, title: "Maize seeds", dueAt: "next Friday" }, db, env);
  assert.equal(ok.body.status, "completed", JSON.stringify(ok.body));
  assert.match(db.profile.nexusReminders[0].title, /^Follow up on listing: Maize seeds$/);
});
