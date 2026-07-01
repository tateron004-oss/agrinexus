const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const provider = require(path.join(root, "server/providers/patientSupportBridgeProvider.js"));

["/api/nexus/tools/patient-support/resources", "/api/nexus/tools/patient-support/intake", "/api/nexus/tools/patient-support/offline"].forEach(text => assert(read("server.js").includes(text), `server must include ${text}`));
["Patient Support Resources", "community health worker", "RPM participation"].forEach(text => assert((read("public/app.js") + read("server/providers/patientSupportBridgeProvider.js")).includes(text), `source must include ${text}`));

const db = { profile: {} };
assert(provider.resources({ query: "health literacy" }).body.data.cards.length >= 1);
assert(provider.resources({ query: "community health worker" }).body.data.cards.length >= 1);
assert(provider.resources({ query: "diabetes" }).body.data.cards.length >= 1);
assert(provider.resources({ query: "transportation" }).body.data.cards.length >= 1);
assert.equal(provider.intake({ confirmed: true, supportNeed: "patient navigation" }, db).body.status, "completed");
assert.equal(provider.save({ confirmed: true, title: "CHW support" }, db).body.status, "completed");
assert.equal(provider.reminder({ confirmed: true, title: "resource review" }, db).body.status, "completed");
assert.equal(provider.offline({ confirmed: true, title: "support resource" }, db).body.status, "completed");
assert.equal(provider.intake({ confirmed: true, reason: "submit insurance claim" }, db).body.status, "blocked");

console.log("Nexus patient support bridge QA passed.");
