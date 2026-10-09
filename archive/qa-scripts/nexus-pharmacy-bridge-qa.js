const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..", "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const provider = require(path.join(root, "server/providers/pharmacyBridgeProvider.js"));

["/api/nexus/tools/pharmacy/search", "/api/nexus/tools/pharmacy/question-draft", "/api/nexus/tools/pharmacy/offline"].forEach(text => assert(read("server.js").includes(text), `server must include ${text}`));
["Pharmacy Bridge", "medication counseling", "No refills, transfers, dispensing, dosage"].forEach(text => assert((read("public/app.js") + read("server/providers/pharmacyBridgeProvider.js")).includes(text), `source must include ${text}`));

const db = { profile: {} };
// search() became async when real OpenStreetMap lookup was added -- the live
// lookup is turned off here so this stays a deterministic, offline-safe QA
// check of the local catalog. A search with no place at all no longer lists
// the catalog (it showed Californian towns to people in Kenya, found by the
// phrase sweep); it asks which town, checked first.
const offline = { NEXUS_PHARMACY_OSM_SEARCH_ENABLED: "false" };
(async () => {
  const noPlace = (await provider.search({ query: "vaccination" }, offline)).body.data;
  assert.equal(noPlace.needsLocation, true);
  assert.equal(noPlace.cards.length, 0);
  assert((await provider.search({ query: "vaccination", location: "Stockton" }, offline)).body.data.cards.length >= 1);
  assert((await provider.search({ query: "medication counseling", location: "Stockton" }, offline)).body.data.cards.length >= 1);
  assert((await provider.search({ query: "chronic care", location: "Sacramento" }, offline)).body.data.cards.length >= 1);
  assert((await provider.search({ query: "diabetes", location: "Sacramento" }, offline)).body.data.cards.length >= 1);
  assert((await provider.search({ query: "hypertension", location: "Sacramento" }, offline)).body.data.cards.length >= 1);
  assert((await provider.search({ query: "low-cost medication resource", location: "Nakuru" }, offline)).body.data.cards.length >= 1);
  assert.equal(provider.intake({ confirmed: true, questionTopic: "medication safety" }, db).body.status, "completed");
  assert.equal(provider.save({ confirmed: true, name: "Community pharmacy" }, db).body.status, "completed");
  assert.equal(provider.questionDraft({ question: "What should I ask?" }).body.status, "prepared");
  assert.equal(provider.questionDraft({ question: "refill and change medication dose" }).body.status, "blocked");
  assert.equal(provider.reminder({ confirmed: true, title: "pharmacy review" }, db).body.status, "completed");

  console.log("Nexus pharmacy bridge QA passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
