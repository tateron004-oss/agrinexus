const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..", "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const provider = require(path.join(root, "server/providers/mobileClinicBridgeProvider.js"));

["/api/nexus/tools/mobile-clinics/search", "/api/nexus/tools/mobile-clinics/intake", "/api/nexus/tools/mobile-clinics/visit-plan"].forEach(text => assert(read("server.js").includes(text), `server must include ${text}`));
["Mobile Clinic Bridge", "hypertension screening", "diabetes screening", "agriculture worker health"].forEach(text => assert((read("public/app.js") + read("server/providers/mobileClinicBridgeProvider.js")).includes(text), `source must include ${text}`));

const db = { profile: {} };
// search() became async when real OpenStreetMap lookup was added -- the live
// lookup is turned off here so this stays a deterministic, offline-safe QA
// check of the local catalog. A search with no place at all no longer lists
// the catalog (it asked for a place and showed Californian towns to people in
// Kenya, found by the phrase sweep); it asks which town, checked first.
const offline = { NEXUS_MOBILE_CLINIC_OSM_SEARCH_ENABLED: "false" };
(async () => {
  const noPlace = (await provider.search({ query: "primary care" }, offline)).body.data;
  assert.equal(noPlace.needsLocation, true);
  assert.equal(noPlace.cards.length, 0);
  assert((await provider.search({ query: "primary care", location: "Stockton" }, offline)).body.data.cards.length >= 1);
  assert((await provider.search({ query: "vaccination", location: "Sacramento" }, offline)).body.data.cards.length >= 1);
  assert((await provider.search({ query: "rural health", location: "Nakuru" }, offline)).body.data.cards.length >= 1);
  assert((await provider.search({ query: "agriculture worker health", location: "Stockton" }, offline)).body.data.cards.length >= 1);
  assert((await provider.search({ query: "hypertension screening", location: "Kisumu" }, offline)).body.data.cards.length >= 1);
  assert((await provider.search({ query: "diabetes screening", location: "Kisumu" }, offline)).body.data.cards.length >= 1);
  assert.equal(provider.intake({ confirmed: true, serviceType: "rural health outreach" }, db).body.status, "completed");
  assert.equal(provider.save({ confirmed: true, name: "Rural clinic" }, db).body.status, "completed");
  assert.equal(provider.visitPlan({ origin: "Nakuru", clinicLocation: "Community site" }).body.status, "prepared");
  assert.equal(provider.reminder({ confirmed: true, title: "clinic review" }, db).body.status, "completed");
  assert.equal(provider.offline({ confirmed: true, title: "clinic option" }, db).body.status, "completed");

  console.log("Nexus mobile clinic bridge QA passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
