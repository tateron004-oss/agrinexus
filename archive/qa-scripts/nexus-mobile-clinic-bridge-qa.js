const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const provider = require(path.join(root, "server/providers/mobileClinicBridgeProvider.js"));

["/api/nexus/tools/mobile-clinics/search", "/api/nexus/tools/mobile-clinics/intake", "/api/nexus/tools/mobile-clinics/visit-plan"].forEach(text => assert(read("server.js").includes(text), `server must include ${text}`));
["Mobile Clinic Bridge", "hypertension screening", "diabetes screening", "agriculture worker health"].forEach(text => assert((read("public/app.js") + read("server/providers/mobileClinicBridgeProvider.js")).includes(text), `source must include ${text}`));

const db = { profile: {} };
assert(provider.search({ query: "primary care" }).body.data.cards.length >= 1);
assert(provider.search({ query: "vaccination" }).body.data.cards.length >= 1);
assert(provider.search({ query: "rural health" }).body.data.cards.length >= 1);
assert(provider.search({ query: "agriculture worker health" }).body.data.cards.length >= 1);
assert(provider.search({ query: "hypertension screening" }).body.data.cards.length >= 1);
assert(provider.search({ query: "diabetes screening" }).body.data.cards.length >= 1);
assert.equal(provider.intake({ confirmed: true, serviceType: "rural health outreach" }, db).body.status, "completed");
assert.equal(provider.save({ confirmed: true, name: "Rural clinic" }, db).body.status, "completed");
assert.equal(provider.visitPlan({ origin: "Nakuru", clinicLocation: "Community site" }).body.status, "prepared");
assert.equal(provider.reminder({ confirmed: true, title: "clinic review" }, db).body.status, "completed");
assert.equal(provider.offline({ confirmed: true, title: "clinic option" }, db).body.status, "completed");

console.log("Nexus mobile clinic bridge QA passed.");
