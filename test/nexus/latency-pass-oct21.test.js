"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const defs = require("../../nexus/tools/canonical-provider-definitions.js");
const osm = require("../../server/providers/osmPlacesProvider.js");

// The latency pass (21 October 2026). Measured on the live site: a question no tool fits (a scam question, "why should I rotate crops") took 10 to 12 seconds, because the planner asked the model for a plan up to three times
// (each a full model call) and then a fourth time for the answer. And a search for a pharmacy near a town asked the shared public map services again every time. Both are cut down here without changing any answer.
const list = Array.isArray(defs) ? defs : Object.values(defs).find(Array.isArray) || [];
const rows = list.map(tool => ({ tool_id: tool.toolId, domain: tool.domain, description: tool.description, risk_tier: tool.riskTier, confirmation_required: tool.confirmationRequired, consent_scope: tool.consentScope }));
const command = { text: "How do I stay safe from scams?", tenantId: "t", actorId: "u", locale: "en", channel: "typed" };
const planner = model => new OpenEndedPlanner({ model, memory: { search: async () => [] }, tools: { list: async () => rows }, applications: { list: () => defaultApplicationManifests() } });
const empty = { goal: "x", application: "nonexistent", clarification: null, steps: [] };

test("when the model finds no tool that fits twice, the direct answer comes after two plan calls, not four model calls in all", async () => {
  let plans = 0; let responds = 0;
  const model = { plan: async () => { plans += 1; return empty; }, respond: async () => { responds += 1; return "  Be careful with messages that ask for your PIN.  "; } };
  const plan = await planner(model).plan({ command, context: {} });
  assert.equal(plans, 2, "asked once, then once more with the feedback");
  assert.equal(responds, 1);
  assert.equal(plan.response, "Be careful with messages that ask for your PIN.");
  assert.equal(plan.modelAnswered, true); assert.equal(plan.planningAttempts, 2);
});

test("an empty plan is still given one more try with the feedback: if the model then picks a tool, that plan is used", async () => {
  let plans = 0; const seenFeedback = [];
  const model = {
    plan: async request => { plans += 1; seenFeedback.push(request.feedback.length); return plans === 1 ? empty : { goal: "Show my notes", application: "lists", riskTier: "low", clarification: null, steps: [{ id: "notes", title: "Show notes", toolId: "lists.read", input: "{}", dependsOn: [], fallbackToolIds: [], requiredPermission: null }] }; },
    respond: async () => { throw new Error("the answer must come from the tool plan, not a direct reply"); }
  };
  assert.ok(rows.some(row => row.tool_id === "lists.read"), "the tool the second plan names exists");
  const plan = await planner(model).plan({ command: { ...command, text: "What is 15 percent of 2,340?" }, context: { can: () => true } });
  assert.equal(plans, 2);
  assert.deepEqual(seenFeedback.map(count => count > 0), [false, true], "the second attempt got the feedback");
  assert.equal(plan.steps.length, 1); assert.equal(plan.steps[0].toolId, "lists.read"); assert.equal(plan.planningAttempts, 2);
});

test("a plan that is wrong in another way (a tool that does not exist) still gets all of its repair attempts", async () => {
  let plans = 0;
  const model = { plan: async () => { plans += 1; return { goal: "x", application: "lists", riskTier: "low", clarification: null, steps: [{ id: "a", title: "A", toolId: "no.such.tool", input: "{}", dependsOn: [], fallbackToolIds: [], requiredPermission: null }] }; }, respond: async () => "Answered directly." };
  const plan = await planner(model).plan({ command, context: {} });
  assert.equal(plans, 3, "not an empty plan, so all three attempts are made");
  assert.equal(plan.planningAttempts, 3); assert.equal(plan.response, "Answered directly.");
});

// ---- places ----
function networkStub() {
  const calls = [];
  const stub = async url => {
    calls.push(String(url));
    if (/nominatim/.test(String(url)) && !/search\?.*amenity/.test(String(url)) && /format=jsonv2/.test(String(url)) && /limit=1(?:&|$)/.test(String(url))) return { ok: true, text: async () => JSON.stringify([{ lat: "-1.2921", lon: "36.8219", display_name: "Nairobi, Kenya", address: { country: "Kenya", country_code: "ke" } }]) };
    return { ok: true, text: async () => JSON.stringify({ elements: [{ tags: { name: "Near Pharmacy" }, lat: -1.293, lon: 36.822 }] }) };
  };
  return { calls, stub };
}
const search = (place, extra = {}) => osm.findNearbyPlaces({ locationText: place, osmFilters: ['"amenity"="pharmacy"'], fallbackTerm: "pharmacy", ...extra });

test("the same search near the same town is answered from memory, a different town or kind of place is asked, and what comes back is a copy", async () => {
  const real = globalThis.fetch; const { calls, stub } = networkStub();
  globalThis.fetch = stub;
  try {
    const first = await search("Cacheville One");
    const asked = calls.length;
    assert.equal(first.places[0].name, "Near Pharmacy"); assert.ok(asked >= 2, "a lookup of the town and a search near it");
    const again = await search("  cacheville one ");
    assert.equal(calls.length, asked, "the repeat asked no one");
    assert.deepEqual(again.places.map(place => place.name), ["Near Pharmacy"]);
    again.places[0].name = "Changed by a caller"; again.origin.label = "Changed too";
    const third = await search("Cacheville One");
    assert.equal(third.places[0].name, "Near Pharmacy"); assert.notEqual(third.origin.label, "Changed too");
    await search("Cacheville Two");
    assert.ok(calls.length > asked, "another town is asked");
    const before = calls.length;
    await osm.findNearbyPlaces({ locationText: "Cacheville One", osmFilters: ['"amenity"="clinic"'], fallbackTerm: "clinic" });
    assert.ok(calls.length > before, "another kind of place is asked, but the town is not looked up again: " + (calls.length - before) + " call(s)");
    assert.ok(calls.length - before <= 1);
  } finally { globalThis.fetch = real; }
});

test("nothing is remembered for a stand-in fetch, for a search from the device's own position, or for a search that found nothing", async () => {
  const real = globalThis.fetch;
  let standInCalls = 0;
  const standIn = async url => { standInCalls += 1; return /limit=1(?:&|$)/.test(String(url)) ? { ok: true, text: async () => JSON.stringify([{ lat: "1", lon: "2", display_name: "Standin" }]) } : { ok: true, text: async () => JSON.stringify({ elements: [{ tags: { name: "X" }, lat: 1, lon: 2 }] }) }; };
  await search("Standin Town", { fetchImpl: standIn }); const one = standInCalls;
  await search("Standin Town", { fetchImpl: standIn });
  assert.equal(standInCalls, one * 2, "a stand-in fetch is asked every time");
  const { calls, stub } = networkStub(); globalThis.fetch = stub;
  try {
    await search("", { coords: { lat: -1.29, lon: 36.82 } }); const device = calls.length;
    await search("", { coords: { lat: -1.29, lon: 36.82 } });
    assert.equal(calls.length, device * 2, "a search from the device's position is never kept");
    let empty = 0;
    globalThis.fetch = async url => { empty += 1; return /limit=1(?:&|$)/.test(String(url)) ? { ok: true, text: async () => JSON.stringify([{ lat: "5", lon: "6", display_name: "Emptyville" }]) } : { ok: true, text: async () => JSON.stringify({ elements: [] }) }; };
    await search("Emptyville"); const first = empty;
    await search("Emptyville");
    assert.ok(empty > first, "a search that found nothing is asked again next time");
  } finally { globalThis.fetch = real; }
});
