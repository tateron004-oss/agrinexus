"use strict";
// Found by the phrase sweep: "Find a pharmacy near me" listed places in Stockton and Sacramento, California (the starter catalog, used because no place was given), "Find a clinic near
// Kisumu" got the generic "I opened Health and Chronic Care" (orb, older route) or the AI model (typed route), and the older route sent "pharmacy near me" to the maps tool.
// No test here touches the internet: the place lookup is a recorded/stubbed fetch, and the one server test turns the OpenStreetMap lookup off.
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const { freePortSync } = require("../helpers/free-port.js");
const pharmacyBridgeProvider = require("../../server/providers/pharmacyBridgeProvider");
const mobileClinicBridgeProvider = require("../../server/providers/mobileClinicBridgeProvider");
const { parseNearbyPlacesRequest, namedPlaceIn, planPlaceSearch, countryEntry } = require("../../server/providers/placesLocation");
const { completeNearbyPlacesPlan } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { createPharmacyFindExecutor, createClinicFindExecutor } = require("../../nexus/health/places-executor.js");

// A recorded-shape stand-in for Nominatim + Overpass. geocode(url) answers a place lookup; the Overpass answer is the same list of places for any query.
function stubFetch({ geocode, places = [{ tags: { name: "Example Pharmacy", "addr:street": "Moi Avenue" }, lat: -1.286, lon: 36.817 }] } = {}) {
  const calls = [];
  const fetchImpl = async url => {
    const target = new URL(String(url));
    if (target.hostname.includes("overpass")) { calls.push({ kind: "overpass" }); return { ok: true, text: async () => JSON.stringify({ elements: places }) }; }
    calls.push({ kind: "geocode", q: target.searchParams.get("q"), countrycodes: target.searchParams.get("countrycodes") });
    const answer = geocode(target.searchParams.get("q"), target.searchParams.get("countrycodes"));
    return { ok: true, text: async () => JSON.stringify(answer) };
  };
  return { fetchImpl, calls };
}
const nairobi = { lat: "-1.286", lon: "36.817", display_name: "Nairobi, Kenya", address: { country: "Kenya", country_code: "ke" } };
const kisumuKenya = { lat: "-0.09", lon: "34.77", display_name: "Kisumu, Kisumu County, Kenya", address: { country: "Kenya", country_code: "ke" } };
const lagos = { lat: "6.45", lon: "3.39", display_name: "Lagos, Nigeria", address: { country: "Nigeria", country_code: "ng" } };

test("'near me' with only the account's country searches near that country's capital and SAYS so; no catalog places from another country", async () => {
  const { fetchImpl, calls } = stubFetch({ geocode: q => (/nairobi/i.test(q) ? [nairobi] : []) });
  const result = await pharmacyBridgeProvider.search({ location: "", country: "Kenya" }, { NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  const data = result.body.data;
  assert.equal(calls.find(call => call.kind === "geocode").q, "Nairobi, Kenya");
  assert.equal(data.cards[0].source, "OpenStreetMap (live)");
  assert.equal(data.cards[0].city, "Nairobi, Kenya");
  assert.equal(data.locationNote, "I don't know exactly where you are, so I looked near Nairobi, Kenya; tell me your town for better results.");
  assert.match(result.body.message, /tell me your town for better results/);
  assert.ok(!/Stockton|Sacramento|California/.test(JSON.stringify(result.body)));
});

test("'near me' with a saved town uses that town and says it is the town the person told Kyro", async () => {
  const { fetchImpl, calls } = stubFetch({ geocode: () => [kisumuKenya] });
  const result = await mobileClinicBridgeProvider.search({ location: "", country: "Kenya", savedTown: "Kisumu" }, { NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  assert.equal(calls.find(call => call.kind === "geocode").q, "Kisumu, Kenya");
  assert.equal(calls.find(call => call.kind === "geocode").countrycodes, "ke");
  assert.match(result.body.data.locationNote, /I looked near Kisumu, the town you told me/);
  assert.equal(result.body.data.cards[0].source, "OpenStreetMap (live)");
});

test("'near me' with no town and no country asks which town instead of listing anything, and makes no lookup", async () => {
  let fetched = false;
  const env = { NEXUS_MAPS_FETCH_IMPL: async () => { fetched = true; return { ok: true, text: async () => "[]" }; } };
  for (const provider of [pharmacyBridgeProvider, mobileClinicBridgeProvider]) {
    const result = await provider.search({ location: "", q: "chronic care" }, env);
    assert.equal(result.body.data.needsLocation, true);
    assert.deepEqual(result.body.data.cards, []);
    assert.match(result.body.data.question, /Which town should I look in\?/);
  }
  assert.equal(fetched, false);
  // a country the platform has no default town for is also asked, not guessed
  const unknown = await pharmacyBridgeProvider.search({ country: "Narnia" }, env);
  assert.equal(unknown.body.data.needsLocation, true);
});

test("a named place is geocoded and used, with the account's country preferred first; no note when it is in that country", async () => {
  const { fetchImpl, calls } = stubFetch({ geocode: () => [kisumuKenya] });
  const result = await mobileClinicBridgeProvider.search({ location: "Kisumu", country: "Kenya" }, { NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  const lookups = calls.filter(call => call.kind === "geocode");
  assert.equal(lookups.length, 1);
  assert.deepEqual([lookups[0].q, lookups[0].countrycodes], ["Kisumu", "ke"]);
  assert.equal(result.body.data.countryNote, undefined);
  assert.equal(result.body.data.locationNote, undefined);
  assert.match(result.body.message, /Found 1 real clinic location\(s\) near Kisumu, Kisumu County, Kenya/);
});

test("places in a different country from the account's are listed with a plain note saying so (never silently)", async () => {
  // the account is in Nigeria; the person names Kisumu, which is not found in Nigeria and then is found in Kenya
  const { fetchImpl, calls } = stubFetch({ geocode: (q, code) => (code === "ng" ? [] : [kisumuKenya]) });
  const result = await pharmacyBridgeProvider.search({ location: "Kisumu", country: "Nigeria" }, { NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  assert.deepEqual(calls.filter(call => call.kind === "geocode").map(call => call.countrycodes), ["ng", null]);
  assert.equal(result.body.data.countryNote, "Note: these places are in Kenya, not Nigeria.");
  assert.match(result.body.message, /these places are in Kenya, not Nigeria/);
  // and in Kiswahili
  const sw = await pharmacyBridgeProvider.search({ location: "Kisumu", country: "Nigeria", language: "sw" }, { NEXUS_MAPS_FETCH_IMPL: stubFetch({ geocode: (q, code) => (code === "ng" ? [] : [kisumuKenya]) }).fetchImpl });
  assert.match(sw.body.data.countryNote, /Kumbuka: maeneo haya yako Kenya, si Nigeria/);
});

test("a country named in the request wins over the account's country, and a mismatch with it is said", async () => {
  const { fetchImpl, calls } = stubFetch({ geocode: () => [lagos] });
  const result = await pharmacyBridgeProvider.search({ location: "Kisumu, Kenya", country: "Kenya" }, { NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  assert.equal(calls.find(call => call.kind === "geocode").countrycodes, "ke");
  assert.match(result.body.data.countryNote, /these places are in Nigeria, not Kenya/);
});

test("when the live lookup is down the starter catalog is never shown for another country, and 'near me' stays honest", async () => {
  const down = { NEXUS_MAPS_FETCH_IMPL: async () => { throw new Error("network unreachable"); } };
  const pharmacy = await pharmacyBridgeProvider.search({ location: "", country: "Kenya" }, down);
  assert.deepEqual(pharmacy.body.data.cards, []);
  assert.match(pharmacy.body.message, /did not find a pharmacy near Nairobi, Kenya/);
  assert.match(pharmacy.body.message, /tell me your town/);
  const clinic = await mobileClinicBridgeProvider.search({ location: "", country: "Kenya", savedTown: "Nakuru" }, down);
  assert.ok(!/Stockton|Sacramento|California/.test(JSON.stringify(clinic.body)));
  // a named catalog town in a country other than the account's is still listed, with the note
  const named = await pharmacyBridgeProvider.search({ location: "Sacramento", country: "Kenya" }, down);
  assert.equal(named.body.data.cards[0].city, "Sacramento");
  assert.match(named.body.data.countryNote, /these places are in United States, not Kenya/);
  // the catalog, for a country with an entry, is offered for that country
  const nakuru = await pharmacyBridgeProvider.search({ location: "Nakuru", country: "Kenya" }, down);
  assert.equal(nakuru.body.data.cards[0].city, "Nakuru");
  assert.equal(nakuru.body.data.countryNote, undefined);
});

test("coordinates the browser handed over (with permission) are used as they are; nothing here asks for them", async () => {
  const { fetchImpl, calls } = stubFetch({ geocode: () => { throw new Error("must not geocode"); } });
  const result = await pharmacyBridgeProvider.search({ lat: -1.29, lon: 36.82, country: "Kenya" }, { NEXUS_MAPS_FETCH_IMPL: fetchImpl });
  assert.deepEqual(calls.map(call => call.kind), ["overpass"]);
  assert.equal(result.body.data.cards[0].source, "OpenStreetMap (live)");
  assert.equal(result.body.data.searchMode, "device");
  // out-of-range coordinates are not trusted: it falls back to the country
  const plan = planPlaceSearch({ lat: 400, lon: 36.8, country: "Kenya" });
  assert.equal(plan.mode, "country-default");
});

test("planPlaceSearch: modes, defaults and who is Kenya or Nigeria", () => {
  assert.equal(planPlaceSearch({ location: "Nakuru", country: "Kenya" }).mode, "named");
  for (const word of ["me", "current location", "here", "nearby", "karibu nami", "my area"]) assert.equal(planPlaceSearch({ location: word, country: "Nigeria" }).mode, "country-default", word);
  assert.equal(planPlaceSearch({ country: "Nigeria" }).locationText, "Lagos, Nigeria");
  assert.equal(planPlaceSearch({ country: "nigeria" }).countryCode, "ng");
  assert.equal(planPlaceSearch({}).mode, "ask");
  assert.equal(countryEntry("DRC").code, "cd");
});

test("the named place is read out of English and Kiswahili requests, and 'near me' names none", () => {
  const cases = [
    ["Find a clinic near Kisumu", "Kisumu"], ["Find a pharmacy in Nairobi West", "Nairobi West"], ["Tafuta duka la dawa karibu na Kisumu", "Kisumu"],
    ["Where is the nearest hospital in Eldoret?", "Eldoret"], ["Find a pharmacy near me", ""], ["Tafuta kliniki karibu nami", ""], ["pharmacy near the market", ""], ["Where is the nearest pharmacy", ""]
  ];
  for (const [text, place] of cases) assert.equal(namedPlaceIn(text), place, text);
});

test("which sentences are a pharmacy / clinic search, and which are not", () => {
  const yes = { "Find a pharmacy near me": ["pharmacy", ""], "Find a clinic near Kisumu": ["clinic", "Kisumu"], "Where is the nearest hospital?": ["clinic", ""],
    "Tafuta duka la dawa karibu na Kisumu": ["pharmacy", "Kisumu"], "Tafuta kliniki karibu nami": ["clinic", ""], "Find a health centre in Nakuru": ["clinic", "Nakuru"] };
  for (const [text, [kind, place]] of Object.entries(yes)) { const found = parseNearbyPlacesRequest(text); assert.equal(found?.kind, kind, text); assert.equal(found.place, place, text); }
  for (const text of ["What does a pharmacy do?", "Add 100 tablets of paracetamol to clinic stock", "Find a mobile clinic near Nairobi", "Find pharmacy support for metformin and show a safety response with sources.",
    "Find a pharmacy job in Nairobi", "I have a pharmacy question about my medication.", "Tell me about clinics"]) assert.equal(parseNearbyPlacesRequest(text), null, text);
});

test("the typed route plans pharmacy.find / clinic.find for these sentences with the place named, or none for 'near me'", () => {
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "pharmacy.find" }, { toolId: "clinic.find" }] };
  const near = completeNearbyPlacesPlan("Find a clinic near Kisumu", catalog);
  assert.equal(near.application, "mobile-clinic"); assert.equal(near.steps[0].toolId, "clinic.find"); assert.equal(near.steps[0].input.location, "Kisumu");
  const me = completeNearbyPlacesPlan("Find a pharmacy near me", catalog);
  assert.equal(me.application, "pharmacy"); assert.equal(me.steps[0].toolId, "pharmacy.find"); assert.equal(me.steps[0].input.location, undefined, "no place is invented");
  assert.equal(completeNearbyPlacesPlan("Where is the nearest hospital?", catalog).steps[0].input.selectClosest, true);
  assert.equal(completeNearbyPlacesPlan("Find a pharmacy near me", { applications: catalog.applications, tools: [] }), null, "no tool in the catalog, no plan");
  assert.equal(completeNearbyPlacesPlan("What does a pharmacy do?", catalog), null);
});

test("the tool executors hand the search the account's country (from the request context) and the saved town (from memory)", async () => {
  const seen = [];
  const original = pharmacyBridgeProvider.search;
  pharmacyBridgeProvider.search = async query => { seen.push(query); return { body: { ok: true, status: "completed", data: { cards: [] } } }; };
  try {
    const memory = { profile: async scope => { assert.deepEqual(scope, { tenantId: "tenant_example", userId: "user_example" }); return [{ content: { kind: "crops", value: "maize" } }, { content: { kind: "location", value: "Kitale" } }]; } };
    await createPharmacyFindExecutor({ env: {}, memory })({ input: { query: "Find a pharmacy near me" }, context: { tenantId: "tenant_example", userId: "user_example", country: "Kenya", locale: "en" } });
    assert.equal(seen[0].country, "Kenya");
    assert.equal(seen[0].savedTown, "Kitale");
    assert.equal(seen[0].location, undefined);
    // a memory that fails or has no town: the search still runs, with the country only
    await createPharmacyFindExecutor({ env: {}, memory: { profile: async () => { throw new Error("down"); } } })({ input: {}, context: { tenantId: "t", userId: "u", country: "Nigeria" } });
    assert.equal(seen[1].savedTown, "");
    assert.equal(seen[1].country, "Nigeria");
  } finally { pharmacyBridgeProvider.search = original; }
  const originalClinic = mobileClinicBridgeProvider.search;
  mobileClinicBridgeProvider.search = async query => { seen.push(query); return { body: { ok: true, status: "completed", data: { cards: [] } } }; };
  try {
    await createClinicFindExecutor({ env: {} })({ input: { location: "Kisumu" }, context: { country: "Kenya" } });
    assert.equal(seen[2].location, "Kisumu"); assert.equal(seen[2].country, "Kenya");
  } finally { mobileClinicBridgeProvider.search = originalClinic; }
});

test("the typed route says what was found (names, where it looked, the notes, the question) instead of 'Nexus completed the governed execution'", () => {
  const { placesFoundResponse } = require("../../nexus/runtime/behavior-spine.js");
  const plan = tool => ({ steps: [{ toolId: tool }] });
  const task = output => ({ steps: [{ output }] });
  const found = placesFoundResponse(plan("pharmacy.find"), task({ cards: [{ name: "Example Pharmacy" }, { name: "Second Chemist" }], searchedNear: "Nairobi, Kenya", locationNote: "I don't know exactly where you are, so I looked near Nairobi, Kenya; tell me your town for better results." }), {});
  assert.match(found, /^I found 2 pharmacies near Nairobi, Kenya: Example Pharmacy; Second Chemist\./);
  assert.match(found, /directory lookup only/);
  assert.match(found, /tell me your town for better results/);
  assert.match(placesFoundResponse(plan("clinic.find"), task({ cards: [{ name: "Example Clinic" }], searchedNear: "Kisumu" }), {}), /^I found 1 clinic near Kisumu: Example Clinic\./);
  assert.equal(placesFoundResponse(plan("clinic.find"), task({ needsLocation: true, question: "Which town should I look in?" }), {}), "Which town should I look in?");
  assert.match(placesFoundResponse(plan("clinic.find"), task({ cards: [], searchedNear: "Kisumu", countryNote: "Note: these places are in Kenya, not Nigeria." }), {}), /^I did not find a clinic near Kisumu just now\. Note: these places are in Kenya/);
  assert.match(placesFoundResponse(plan("pharmacy.find"), task({ cards: [{ name: "Duka A" }] }), { locale: "sw" }), /^Nimepata maduka 1/);
  assert.equal(placesFoundResponse({ steps: [{ toolId: "reminders.schedule" }] }, task({}), {}), "", "other tools are not touched");
});

// ---- the older routes (orb tool door), on a real server with the OpenStreetMap lookup turned off, so the internet is never touched ----
const root = path.resolve(__dirname, "..", "..");
const port = freePortSync();
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-nearby-places-location-db.json");
let server; let cookie;
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { const res = await fetch(url); if (res.ok) return; } catch { await wait(150); } } throw new Error(`${url} did not become reachable`); }
async function callHealthTool(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_health_preparation", arguments: { command, ...extra } }) });
  return res.json();
}

test.describe("the pharmacy and clinic finders on the orb / older-route tool door", () => {
  test.before(async () => {
    fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
    server = spawn(process.execPath, ["server.js"], { cwd: root, stdio: "ignore", windowsHide: true,
      env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true",
        NEXUS_PHARMACY_OSM_SEARCH_ENABLED: "false", NEXUS_MOBILE_CLINIC_OSM_SEARCH_ENABLED: "false" } });
    await waitFor(`${base}/api/healthz`);
    const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    cookie = res.headers.get("set-cookie").split(";")[0];
  });
  test.after(() => { server?.kill(); if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath); });

  test("'Find a pharmacy near me' for a Nigerian account looks near Lagos, says so, and lists nothing from California", async () => {
    const result = await callHealthTool("Find a pharmacy near me");
    assert.equal(result.status, "health-preparation-ready");
    assert.ok(!/Stockton|Sacramento|California/.test(JSON.stringify(result)), result.response);
    assert.match(result.response, /near Lagos, Nigeria/);
    assert.match(result.response, /tell me your town for better results/);
  });

  test("'Find a clinic near Kisumu' is a clinic search (not the generic menu); a clinic in another country than the account's is flagged", async () => {
    const result = await callHealthTool("Find a clinic near Kisumu");
    assert.equal(result.status, "health-preparation-ready");
    assert.doesNotMatch(result.response, /I opened Health and Chronic Care/);
    assert.match(result.response, /clinic option\(s\)/);
    assert.match(result.response, /Kisumu/);
    assert.match(result.response, /these places are in Kenya, not Nigeria/);
  });

  test("Kiswahili: the answer and the note are in Kiswahili", async () => {
    const result = await callHealthTool("Tafuta kliniki karibu nami", { language: "sw" });
    assert.match(result.response, /Sikupata kliniki|Nimepata kliniki/);
    assert.match(result.response, /Sijui ulipo hasa/);
  });
});
