const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const provider = require(path.join(root, "server/providers/rpmBridgeProvider.js"));

["/api/nexus/tools/rpm/intake", "/api/nexus/tools/rpm/device-reading", "/api/nexus/tools/rpm/trend-summary", "/api/nexus/tools/rpm/provider-report"].forEach(text => assert(read("server.js").includes(text), `server must include ${text}`));
["RPM Remote Patient Monitoring", "blood_pressure", "blood_glucose", "pulse", "weight"].forEach(text => assert((read("public/app.js") + read("server/providers/rpmBridgeProvider.js")).includes(text), `source must include ${text}`));

const db = { profile: {} };
assert.equal(provider.intake({ monitoringFocus: "blood_pressure,blood_glucose", confirmed: true }, db).body.status, "completed");
assert.equal(provider.deviceReading({ metric: "blood_pressure", systolic: "130", diastolic: "82", confirmed: true }, db).body.status, "completed");
assert.equal(provider.deviceReading({ metric: "blood_glucose", value: "110", unit: "mg/dL", confirmed: true }, db).body.status, "completed");
assert.equal(provider.deviceReading({ metric: "weight", value: "80", unit: "kg", confirmed: true }, db).body.status, "completed");
assert.equal(provider.trendSummary({}, db).body.status, "prepared");
assert.equal(provider.providerReport({}, db).body.status, "prepared");
assert.equal(provider.deviceReading({ confirmed: true, notes: "diagnose me" }, db).body.status, "blocked");

console.log("Nexus RPM bridge QA passed.");
