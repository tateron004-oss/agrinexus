"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const contacts = require("../../nexus/memory/contacts.js");
const { readRepeatRequest } = require("../../nexus/reminders/repeat-phrase.js");
const { repeatReminderTurn, runsOn } = require("../../nexus/reminders/repeat-service.js");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Round 1 of removing the "works, with limits" entries: three real gaps fixed in code.
//  1. Contacts: a number written the national way is read as the person's OWN country's (Uganda, Tanzania, Rwanda, Ghana, South Africa as well as Kenya, Nigeria, the United States).
//  2. Repeating reminders: every 3 months, every other month, quarterly, every year on a date, once a month.
//  3. Property listings: narrow a list by status, kind, bedrooms and price; and the same address is not listed twice.

test("contacts: a national-format number is read as the person's own country's, from the profile country or the device's time zone; with no country, Kenya as before", () => {
  const read = (text, options) => contacts.extractContactStatement(text, options);
  assert.equal(read("Save Joseph's number as 0712345678").phone, "+254712345678");
  assert.equal(read("Save Joseph's number as 0712345678", { timeZone: "Africa/Kampala" }).phone, "+256712345678");
  assert.equal(read("Save Joseph's number as 0712345678", { country: "Tanzania" }).phone, "+255712345678");
  assert.equal(read("Save Joseph's number as 0722123456", { country: "rw" }).phone, "+250722123456");
  assert.equal(read("Save Joseph's number as 0244123456", { country: "gh" }).phone, "+233244123456");
  assert.equal(read("Save Joseph's number as 0821234567", { timeZone: "Africa/Johannesburg" }).phone, "+27821234567");
  assert.equal(read("Save Joseph's number as 0712345678", { timeZone: "Africa/Nairobi" }).phone, "+254712345678");
  assert.equal(read("Save Joseph's number as 0712345678", { country: "ke" }).assumedKenya, true);
  assert.equal(read("Save Joseph's number as 0712345678", { country: "ug" }).assumedCountry, "Uganda");
  // a number with its country code is never changed, whoever says it
  assert.equal(read("Save Otieno's number as +254712345678", { country: "ug" }).phone, "+254712345678");
  assert.equal(read("Save Otieno's number as +256712345678").phone, "+256712345678");
  // Nigerian and United States numbers are still read the way they were
  assert.equal(read("Save Ada's number as 08031234567").phone, "+2348031234567");
  assert.equal(read("Save Sam's number as 404-555-0123").phone, "+14045550123");
  // a wrong length is still refused, not guessed
  assert.equal(read("Save Joseph's number as 071234567", { country: "ug" }).invalid, "number");
  assert.equal(contacts.countryHint({ country: "Uganda" }), "ug"); assert.equal(contacts.countryHint({ timeZone: "Africa/Dar_es_Salaam" }), "tz"); assert.equal(contacts.countryHint({}), "");
});

test("contacts: the planner reads the person's country and says which country it took the number as", async () => {
  const saved = [];
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("no model"); }, respond: async () => { throw new Error("no model"); } }, tools: { list: async () => [] }, applications: { list: () => [] },
    memory: { saveContact: async args => { saved.push(args); return { contact: { name: args.name, phone: args.phone }, updated: false }; }, listContacts: async () => [], forgetContact: async () => null } });
  const ask = (text, context) => planner.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });
  const uganda = await ask("Save Joseph's number as 0712345678", { timeZone: "Africa/Kampala" });
  assert.equal(saved.at(-1).phone, "+256712345678"); assert.match(uganda.response, /I took it as a Ugandan number/);
  const kenya = await ask("Save Joseph's number as 0712345678", { timeZone: "Africa/Nairobi" });
  assert.equal(saved.at(-1).phone, "+254712345678"); assert.match(kenya.response, /I took it as a Kenyan number/);
});

test("repeating reminders: every N months, quarterly, every year on a date and once a month are read; what cannot be done is still refused", () => {
  const read = text => readRepeatRequest(text);
  assert.deepEqual(read("remind me every 3 months on the 15th to service the tractor").days, { unit: "month", every: 3, dayOfMonth: 15, last: false });
  assert.deepEqual(read("remind me every other month on the 1st at 9 to pay the insurance").days, { unit: "month", every: 2, dayOfMonth: 1, last: false });
  assert.deepEqual(read("remind me quarterly on the 1st to file taxes").days, { unit: "month", every: 3, dayOfMonth: 1, last: false });
  assert.deepEqual(read("remind me every year on 15 October to renew the licence").days, { unit: "year", every: 1, month: 10, dayOfMonth: 15 });
  assert.equal(read("remind me annually on October 15th at 9am to renew the licence").task, "renew the licence", "the date is taken out of the task");
  assert.deepEqual(read("remind me on the 15th of every month to pay rent").days, { unit: "month", every: 1, dayOfMonth: 15, last: false });
  // a missing day or date is asked for, never guessed
  assert.deepEqual(read("remind me yearly to renew the licence"), { action: "need-date" });
  assert.deepEqual(read("remind me every 3 months to service the tractor"), { action: "need-day-of-month" });
  assert.deepEqual(read("remind me once a month to pay rent"), { action: "need-day-of-month" });
  assert.deepEqual(read("remind me every year on 30 February to test"), { action: "unsupported" });
  // still refused plainly
  for (const text of ["remind me every few days to call mama", "remind me twice a week to exercise", "remind me every other evening to pray", "remind me every minute to blink", "remind me every 13 months to check"]) assert.deepEqual(read(text), { action: "unsupported" }, text);

});

test("repeating reminders: the days they run on", () => {
  const every3 = { unit: "month", every: 3, dayOfMonth: 15, last: false, anchor: "2026-10-15" };
  for (const [day, want] of [["2026-10-15", true], ["2026-11-15", false], ["2026-12-15", false], ["2027-01-15", true], ["2027-04-15", true], ["2027-01-14", false], ["2026-07-15", false]]) assert.equal(runsOn(every3, day), want, day);
  const short = { unit: "month", every: 2, dayOfMonth: 31, last: false, anchor: "2026-10-31" };
  assert.equal(runsOn(short, "2026-12-31"), true); assert.equal(runsOn(short, "2027-02-28"), true, "a shorter month uses its last day"); assert.equal(runsOn(short, "2027-01-31"), false);
  const yearly = { unit: "year", every: 1, month: 10, dayOfMonth: 15 };
  assert.equal(runsOn(yearly, "2026-10-15"), true); assert.equal(runsOn(yearly, "2027-10-15"), true); assert.equal(runsOn(yearly, "2027-10-16"), false); assert.equal(runsOn(yearly, "2027-11-15"), false);
  const leap = { unit: "year", every: 1, month: 2, dayOfMonth: 29 };
  assert.equal(runsOn(leap, "2028-02-29"), true); assert.equal(runsOn(leap, "2027-02-28"), true, "29 February uses 28 February in a year without one"); assert.equal(runsOn(leap, "2027-03-01"), false);
  assert.equal(runsOn({ unit: "month", every: 1, dayOfMonth: 15, last: false }, "2026-11-15"), true, "monthly is as it was");
});

test("repeating reminders: set, said back in words, listed", async () => {
  const rows = [];
  const store = { add: async args => { rows.push(args); return { id: rows.length }; }, list: async () => rows.map((row, index) => ({ ...row, scheduleId: `s${index}` })), cancel: async () => true, cancelAll: async () => rows.length };
  const say = text => repeatReminderTurn({ text, store, tenantId: "t", userId: "u", timeZone: "Africa/Nairobi", now: new Date("2026-10-20T06:00:00Z") });
  assert.match(await say("remind me every 3 months on the 15th to service the tractor"), /Okay\. I will remind you to service the tractor on the 15th of every 3 months at 9:00 am\./);
  assert.equal(rows[0].days.unit, "month"); assert.equal(rows[0].days.every, 3); assert.match(rows[0].days.anchor, /^2026-10-2[0-1]$/, "counted from the day it was set");
  assert.match(await say("remind me every year on 15 October to renew the licence"), /every year on 15 October at 9:00 am/);
  assert.equal(rows[1].days.anchor, undefined);
  assert.match(await say("remind me yearly to renew the licence"), /Which date each year\?.*Nothing was set yet\./);
  assert.equal(rows.length, 2, "the question set nothing");
  assert.match(await say("show my repeating reminders"), /every year on 15 October/);
});

const listingClient = listings => ({ record_id: "rec_1", version: 1, data: { info: { businessName: "Sunrise Realty" }, editable: { listings, leads: [] } } });
const LISTINGS = [
  { address: "123 Main Street", price: 450000, currency: "USD", propertyType: "house", beds: 3, baths: 2, status: "active" },
  { address: "9 Oak Avenue", price: 250000, currency: "USD", propertyType: "condo", beds: 2, baths: 1, status: "active" },
  { address: "77 Pine Road", price: 600000, currency: "USD", propertyType: "house", beds: 4, baths: 3, status: "sold" },
  { address: "5 Lake View", price: 320000, currency: "USD", propertyType: "house", beds: 3, baths: 2, status: "pending" }
];
const readOut = async text => {
  const client = listingClient(LISTINGS);
  return voiceDispatch.run({ command: text, confirmed: true, businessRequest: async ({ method }) => (method === "GET" ? { body: { clients: [client] } } : { body: client }) });
};

test("property listings: a list can be narrowed by status, kind, bedrooms and price, and says what it was narrowed by", async () => {
  assert.equal(voiceDispatch.classify("Show my sold listings"), "listListings");
  assert.deepEqual(voiceDispatch.listingFilter("Show my sold listings"), { status: "sold" });
  assert.deepEqual(voiceDispatch.listingFilter("which houses do I have under 500k"), { propertyType: "house", maxPrice: 500000 });
  assert.deepEqual(voiceDispatch.listingFilter("list my 3 bedroom properties"), { minBeds: 3, maxBeds: 3 });
  assert.deepEqual(voiceDispatch.listingFilter("listings with at least 3 bedrooms"), { minBeds: 3 });
  assert.deepEqual(voiceDispatch.listingFilter("show listings between 200k and 400k"), { minPrice: 200000, maxPrice: 400000 });
  assert.deepEqual(voiceDispatch.listingFilter("show my listings"), {});
  const sold = await readOut("Show my sold listings");
  assert.match(sold.response, /has 1 listing that match sold: 77 Pine Road/); assert.doesNotMatch(sold.response, /123 Main/);
  const cheapHouses = await readOut("which houses do I have under 500k");
  assert.match(cheapHouses.response, /2 listings that match house, priced under 500,000: 123 Main Street.*5 Lake View/); assert.doesNotMatch(cheapHouses.response, /Pine Road/);
  const mid = await readOut("show listings between 200k and 400k");
  assert.match(mid.response, /9 Oak Avenue.*5 Lake View/); assert.doesNotMatch(mid.response, /123 Main|Pine Road/);
  const three = await readOut("list my 3 bedroom properties");
  assert.match(three.response, /123 Main Street.*5 Lake View/); assert.doesNotMatch(three.response, /Oak Avenue|Pine Road/);
  const none = await readOut("show my sold condos");
  assert.match(none.response, /No listings in "Sunrise Realty" match sold, condo\. You have 4 listings in all/);
  const all = await readOut("show my listings");
  assert.match(all.response, /has 4 listings: /);
});

test("property listings: the same address is not listed twice while it is active or pending; a sold one can be listed again", async () => {
  let writes = 0;
  const client = listingClient(LISTINGS);
  const businessRequest = async ({ method, body }) => { if (method === "GET") return { body: { clients: [client] } }; writes += 1; return { body: { ...client, data: { ...client.data, editable: body.editable } } }; };
  const again = await voiceDispatch.run({ command: "Add a listing at 123 main street for $460,000", confirmed: true, businessRequest });
  assert.match(again.response, /123 Main Street is already in "Sunrise Realty" as active at \$450,000\.00\. Nothing was added\. To change it, say, for example, "set 123 Main Street to pending"/);
  assert.equal(writes, 0, "nothing was saved");
  const pending = await voiceDispatch.run({ command: "Add a listing at 5 Lake View for $330,000", confirmed: true, businessRequest });
  assert.match(pending.response, /already in .* as pending/); assert.equal(writes, 0);
  const relist = await voiceDispatch.run({ command: "Add a listing at 77 Pine Road for $590,000", confirmed: true, businessRequest });
  assert.match(relist.response, /^Listed 77 Pine Road/); assert.equal(writes, 1, "a sold property can be listed again");
  const fresh = await voiceDispatch.run({ command: "Add a listing at 1 New Street for $100,000", confirmed: true, businessRequest });
  assert.match(fresh.response, /^Listed 1 New Street/);
});
