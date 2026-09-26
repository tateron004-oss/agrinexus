"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const businessService = require("../../nexus/business/service.js");
const templates = require("../../nexus/business/templates.js");

const { classify, precheck, run, computeBusinessDashboard } = voiceDispatch;

// Core-essentials real estate support (2026-09-23): property listings and
// buyer/seller/tenant/landlord lead types, built by extending the same
// generic small-business workspace engine every other vertical (church,
// nonprofit, farm) already shares -- not a separate real-estate-only
// system. inferBusiness() already detects "real estate" as an industry
// (nexus/business/templates.js), so the persona/tone side of this needs no
// new code; these tests cover the two things that genuinely didn't exist
// yet: a listings record, and real-estate-specific lead words.

test("a real estate business is inferred with the right industry label, reusing the existing generic inference", () => {
  const info = templates.inferBusiness({ request: "Start a real estate agency in Austin" });
  assert.equal(info.industry, "Real Estate");
});

test("classify() routes listing commands correctly, and never collides with the generic business-workspace list intent", () => {
  for (const text of ["Add a listing at 123 Main Street for $450,000", "List a property at 456 Oak Avenue for $300k", "Create a new listing for 789 Pine Rd"])
    assert.equal(classify(text), "addListing", text);
  // Requires the word "listing"/"property", matching the same convention
  // wantsUpdateTaskStatus/wantsUpdateGrantStatus already use -- a bare
  // "mark 123 Main Street as sold" is deliberately NOT enough on its own.
  for (const text of ["Mark the listing at 123 Main Street as sold", "Update the listing at 456 Oak Avenue to pending", "Set the property status to sold"])
    assert.equal(classify(text), "updateListingStatus", text);
  for (const text of ["Show me my listings", "What listings do I have", "Which properties are active"])
    assert.equal(classify(text), "listListings", text);
  // Must not collide with the existing generic "list my businesses" intent (a different noun entirely).
  assert.equal(classify("List my businesses"), "list");
  assert.equal(classify("What businesses do I have"), "list");
});

// Found live: the single most natural real-estate phrasing -- naming a
// street address with a price -- uses neither the word "listing" nor
// "property" at all, so it fell through to the generic create-workspace
// fallback ("What should I call this business or nonprofit workspace?").
test("classify() recognizes a listing named only by a real street address, with no 'listing'/'property' word at all", () => {
  for (const text of ["List 123 Main Street for $450,000", "Add 456 Oak Avenue for $300k"])
    assert.equal(classify(text), "addListing", text);
});

// Found live: only $/k-suffixed prices were recognized -- "List 789 Pine Rd
// for 450,000 dollars" matched no price pattern at all and silently saved
// the listing with price: 0, with no error or clarification shown.
test("extractListingArgs recognizes a price spelled out with the word 'dollars', not just $ or k suffix", () => {
  assert.equal(voiceDispatch.extractListingArgs("List 789 Pine Rd for 450,000 dollars", {}).price, 450000);
  assert.equal(voiceDispatch.extractListingArgs("List 22 Elm St for 450000 dollars", {}).price, 450000);
});

// Found live: only the text-parsed status branch normalized to lowercase --
// a structured args.status (e.g. "Active") was stored verbatim, and the
// dashboard's exact-case status filters then silently dropped that listing.
// Found live: the args.price branch (a direct tool-call argument) had no
// finite/sign check at all, unlike the text-parsed branch.
test("extractListingArgs rejects a negative args.price, the direct tool-call branch", () => {
  assert.equal(voiceDispatch.extractListingArgs("list a property", { address: "500 Elm St", price: -450000 }).price, 0);
  assert.equal(voiceDispatch.extractListingArgs("list a property", { address: "500 Elm St", price: 450000 }).price, 450000);
});

test("extractListingArgs normalizes args.status to lowercase, not just the text-parsed branch", () => {
  assert.equal(voiceDispatch.extractListingArgs("mark listing status", { address: "500 Elm St", status: "Active" }).status, "active");
});

// Found live: resolveListingIndex used findIndex, which picks whichever
// matching address comes FIRST in the array, not the most specific one --
// when one listing's address is a literal prefix of another's (two units
// on the same street), a command naming the more specific address could
// still resolve to the wrong, shorter-address listing purely by array order.
test("resolveListingIndex picks the most specific (longest) matching address, not just the first one in array order", () => {
  const listings = [
    { address: "500 Elm St", price: 100000, status: "active" },
    { address: "500 Elm St Apt 2", price: 200000, status: "active" }
  ];
  assert.equal(voiceDispatch.resolveListingIndex(listings, "mark 500 Elm St Apt 2 as sold"), 1);
  assert.equal(voiceDispatch.resolveListingIndex(listings, "mark 500 Elm St as sold"), 0);
  // Unaffected when the array order is reversed.
  const reversed = [listings[1], listings[0]];
  assert.equal(voiceDispatch.resolveListingIndex(reversed, "mark 500 Elm St Apt 2 as sold"), 0);
});

// Found live: a listing's status filters compared exact-case against
// "active"/"pending"/"sold" -- a naturally-capitalized "Active" status
// silently vanished from the dashboard's counts and total value.
test("computeBusinessDashboard's listing counts/value match status case-insensitively", () => {
  const dashboard = voiceDispatch.computeBusinessDashboard({
    leads: [], transactions: [], invoices: [], invoiceItems: [], grants: [], tasks: [], appointments: [],
    listings: [
      { address: "100 Main St", price: 100000, status: "active" },
      { address: "200 Main St", price: 200000, status: "Active" }
    ]
  });
  assert.equal(dashboard.activeListings, 2, "both differently-cased 'active' listings must count");
  assert.equal(dashboard.activeListingValue, 300000);
});

test("classify() and extractLeadArgs recognize buyer/seller/tenant/landlord as real lead types, not just 'customer'", () => {
  assert.equal(classify("Add a buyer named Jane Doe"), "addLead");
  const buyer = voiceDispatch.extractLeadArgs("Add a buyer named Jane Doe", {});
  assert.deepEqual([buyer.name, buyer.type], ["Jane Doe", "buyer"]);
  const seller = voiceDispatch.extractLeadArgs("Track a seller named Tom Rivera, phone 555-201-3344", {});
  assert.deepEqual([seller.name, seller.type, seller.contact], ["Tom Rivera", "seller", "555-201-3344"]);
  const tenant = voiceDispatch.extractLeadArgs("New tenant called Grace Otieno", {});
  assert.equal(tenant.type, "tenant");
});

test("precheck() asks for an address before a listing is added, and a status before one is updated", () => {
  assert.match(precheck("Add a new listing", {}).clarification, /address of the property/);
  assert.equal(precheck("Add a listing at 123 Main Street for $450,000", {}).clarification, null);
  assert.match(precheck("Mark the listing at 123 Main Street", {}).clarification, /What status should I set/);
});

function listingClient(listings = []) {
  return { record_id: "rec_1", version: 1, data: { info: { businessName: "Sunrise Realty" }, editable: { listings, leads: [] } } };
}

test("adding a listing extracts address, price, beds/baths and property type, and requires confirmation like every other real write", async () => {
  let saved;
  const client = listingClient();
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    saved = body; return { body: { ...client, data: { ...client.data, editable: body.editable } } };
  };
  const unconfirmed = await run({ command: "Add a listing at 123 Main Street for $450,000, 3 beds 2 baths, house", confirmed: false, businessRequest });
  assert.equal(unconfirmed.status, "needs-confirmation");
  assert.match(unconfirmed.response, /123 Main Street/);

  const confirmed = await run({ command: "Add a listing at 123 Main Street for $450,000, 3 beds 2 baths, house", confirmed: true, businessRequest });
  assert.equal(confirmed.status, "completed");
  assert.equal(confirmed.response, 'Listed 123 Main Street at $450000.00 in "Sunrise Realty" as active.');
  const listing = saved.editable.listings[0];
  assert.deepEqual([listing.address, listing.price, listing.beds, listing.baths, listing.propertyType, listing.status],
    ["123 Main Street", 450000, 3, 2, "house", "active"]);
});

test("updating a listing's status resolves it by address and persists the new status", async () => {
  let saved;
  const client = listingClient([{ address: "123 Main Street", price: 450000, propertyType: "house", beds: 3, baths: 2, status: "active", notes: "" }]);
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    saved = body; return { body: { ...client, data: { ...client.data, editable: body.editable } } };
  };
  const result = await run({ command: "Mark the listing at 123 Main Street as sold", confirmed: true, businessRequest });
  assert.equal(result.status, "completed");
  assert.equal(result.response, 'Set 123 Main Street to sold in "Sunrise Realty".');
  assert.equal(saved.editable.listings[0].status, "sold");
});

test("updating a listing that does not exist is refused honestly, not silently applied to a different, unrelated listing", async () => {
  const client = listingClient([{ address: "123 Main Street", status: "active" }]);
  const businessRequest = async ({ method }) => method === "GET" ? { body: { clients: [client] } } : assert.fail("must not write when the listing cannot be resolved");
  const result = await run({ command: "Mark the listing at 999 Nowhere Lane as sold", confirmed: true, businessRequest });
  assert.equal(result.status, "needs-input");
  assert.deepEqual(result.missingInformation, ["address"]);
});

test("resolveListingIndex still allows a pronoun-style reference ('mark the listing as sold') to resolve when exactly one active listing exists", () => {
  const listings = [{ address: "123 Main Street", status: "active" }, { address: "456 Oak Avenue", status: "sold" }];
  assert.equal(voiceDispatch.resolveListingIndex(listings, "mark the listing as sold"), 0);
});

test("listing listings reads back real saved data, and says so honestly when there are none yet", async () => {
  const withListings = await run({ command: "Show me my listings", businessRequest: async () => ({ body: { clients: [listingClient([{ address: "123 Main Street", price: 450000, status: "active" }, { address: "456 Oak Avenue", price: 0, status: "pending" }])] } }) });
  assert.equal(withListings.status, "completed");
  assert.match(withListings.response, /123 Main Street \(active, \$450000\.00\); 456 Oak Avenue \(pending\)/);

  const none = await run({ command: "What listings do I have", businessRequest: async () => ({ body: { clients: [] } }) });
  assert.match(none.response, /has no listings yet/);
});

test("the dashboard counts buyers/sellers/tenants/landlords explicitly and summarizes active/pending/sold listings and their total value", () => {
  const dashboard = computeBusinessDashboard({
    transactions: [], invoiceItems: [], invoices: [], grants: [], tasks: [], appointments: [],
    leads: [{ type: "buyer" }, { type: "buyer" }, { type: "seller" }, { type: "tenant" }, { type: "landlord" }, { type: "customer" }],
    listings: [
      { status: "active", price: 450000 }, { status: "active", price: 300000 },
      { status: "pending", price: 200000 }, { status: "sold", price: 500000 }
    ]
  });
  assert.deepEqual([dashboard.buyers, dashboard.sellers, dashboard.tenants, dashboard.landlords, dashboard.customers, dashboard.others],
    [2, 1, 1, 1, 1, 0]);
  assert.deepEqual([dashboard.totalListings, dashboard.activeListings, dashboard.pendingListings, dashboard.soldListings, dashboard.activeListingValue],
    [4, 2, 1, 1, 750000]);
});

test("computeBusinessDashboard tolerates a workspace with no listings field at all (an existing, pre-real-estate workspace)", () => {
  const dashboard = computeBusinessDashboard({ transactions: [], invoiceItems: [], invoices: [], grants: [], tasks: [], appointments: [], leads: [] });
  assert.deepEqual([dashboard.totalListings, dashboard.activeListings, dashboard.activeListingValue], [0, 0, 0]);
});

test("service.js's real workspace-write validation (normalizeEditable) accepts and round-trips a listings array instead of silently dropping it", () => {
  const info = templates.inferBusiness({ businessName: "Sunrise Realty", industry: "Real Estate" });
  const editable = businessService.normalizeEditable(info, {
    listings: [{ address: "123 Main Street", price: 450000, propertyType: "house", beds: 3, baths: 2, status: "active", notes: "Corner lot" }]
  });
  assert.equal(editable.listings.length, 1);
  assert.deepEqual(editable.listings[0], { address: "123 Main Street", price: 450000, propertyType: "house", beds: 3, baths: 2, status: "active", notes: "Corner lot" });
});

test("normalizeEditable still rejects a malformed listings entry, same discipline as every other row type", () => {
  const info = templates.inferBusiness({ businessName: "Sunrise Realty" });
  assert.throws(() => businessService.normalizeEditable(info, { listings: [{ address: "123 Main Street", price: "not-a-number" }] }));
});

// Found live: price/beds/baths passed type/finiteness checks with no sign
// check, reachable via the direct PUT .../clients/:id API -- a negative
// price silently produced a fabricated "active listings worth $X" figure on
// the business dashboard.
test("normalizeEditable rejects a negative listing price, beds, or baths", () => {
  const info = templates.inferBusiness({ businessName: "Sunrise Realty" });
  assert.throws(() => businessService.normalizeEditable(info, { listings: [{ address: "123 Main Street", price: -450000 }] }), error => error.code === "business_workspace_invalid");
  assert.throws(() => businessService.normalizeEditable(info, { listings: [{ address: "123 Main Street", beds: -1 }] }), error => error.code === "business_workspace_invalid");
  assert.throws(() => businessService.normalizeEditable(info, { listings: [{ address: "123 Main Street", baths: -1 }] }), error => error.code === "business_workspace_invalid");
});
