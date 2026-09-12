const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const provider = require(path.join(root, "server/providers/chronicDiseaseBridgeProvider.js"));
const server = read("server.js");
const app = read("public/app.js");

[
  "/api/nexus/tools/chronic-disease/intake",
  "/api/nexus/tools/chronic-disease/reading",
  "/api/nexus/tools/chronic-disease/trend-summary",
  "/api/nexus/tools/chronic-disease/provider-report",
  "chronicDiseaseBridge"
].forEach(text => assert(server.includes(text) || read("server/providers/index.js").includes(text), `wiring must include ${text}`));

["Chronic Disease Support", "Diabetes Mellitus", "hypertension", "obesity", "provider review"].forEach(text => assert(app.includes(text) || read("server/providers/chronicDiseaseBridgeProvider.js").includes(text), `source must include ${text}`));

const db = { profile: {} };
let result = provider.intake({ conditionFocus: "diabetes", questionsForProvider: "review glucose", confirmed: true }, db);
assert.equal(result.body.status, "completed");
result = provider.reading({ confirmed: true, conditionFocus: "diabetes", glucose: "110", glucoseUnit: "mg/dL", readingContext: "fasting" }, db);
assert.equal(result.body.status, "completed");
result = provider.reading({ confirmed: true, conditionFocus: "hypertension", systolic: "130", diastolic: "82", pulse: "72" }, db);
assert.equal(result.body.status, "completed");
result = provider.reading({ confirmed: true, conditionFocus: "obesity", weight: "80", weightUnit: "kg", height: "170", heightUnit: "cm" }, db);
assert.equal(result.body.status, "completed");
assert(result.body.data.reading.bmiInformational, "BMI must be informational when values are provided");
assert.equal(provider.trendSummary({ conditionFocus: "cardiometabolic" }, db).body.status, "prepared");
assert.equal(provider.providerReport({ conditionFocus: "cardiometabolic" }, db).body.status, "prepared");
assert.equal(provider.reading({ confirmed: true, notes: "change medication dose" }, db).body.status, "blocked");

console.log("Nexus chronic disease bridge QA passed.");
