const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const provider = require(path.join(root, "server/providers/pharmacyBridgeProvider.js"));

["/api/nexus/tools/pharmacy/search", "/api/nexus/tools/pharmacy/question-draft", "/api/nexus/tools/pharmacy/offline"].forEach(text => assert(read("server.js").includes(text), `server must include ${text}`));
["Pharmacy Bridge", "medication counseling", "No refills, transfers, dispensing, dosage"].forEach(text => assert((read("public/app.js") + read("server/providers/pharmacyBridgeProvider.js")).includes(text), `source must include ${text}`));

const db = { profile: {} };
assert(provider.search({ query: "vaccination" }).body.data.cards.length >= 1);
assert(provider.search({ query: "medication counseling" }).body.data.cards.length >= 1);
assert(provider.search({ query: "chronic care" }).body.data.cards.length >= 1);
assert(provider.search({ query: "diabetes" }).body.data.cards.length >= 1);
assert(provider.search({ query: "hypertension" }).body.data.cards.length >= 1);
assert(provider.search({ query: "low-cost medication resource" }).body.data.cards.length >= 1);
assert.equal(provider.intake({ confirmed: true, questionTopic: "medication safety" }, db).body.status, "completed");
assert.equal(provider.save({ confirmed: true, name: "Community pharmacy" }, db).body.status, "completed");
assert.equal(provider.questionDraft({ question: "What should I ask?" }).body.status, "prepared");
assert.equal(provider.questionDraft({ question: "refill and change medication dose" }).body.status, "blocked");
assert.equal(provider.reminder({ confirmed: true, title: "pharmacy review" }, db).body.status, "completed");

console.log("Nexus pharmacy bridge QA passed.");
