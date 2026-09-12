const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const provider = require(path.join(root, "server/providers/rtmBridgeProvider.js"));

["/api/nexus/tools/rtm/intake", "/api/nexus/tools/rtm/activity-entry", "/api/nexus/tools/rtm/adherence-summary", "/api/nexus/tools/rtm/provider-report"].forEach(text => assert(read("server.js").includes(text), `server must include ${text}`));
["RTM Remote Therapeutic Monitoring", "education_module", "medication_adherence_discussion"].forEach(text => assert((read("public/app.js") + read("server/providers/rtmBridgeProvider.js")).includes(text), `source must include ${text}`));

const db = { profile: {} };
assert.equal(provider.intake({ participationGoal: "review participation", confirmed: true }, db).body.status, "completed");
assert.equal(provider.activityEntry({ activityType: "education_module", activityDescription: "Completed lesson", completed: true, confirmed: true }, db).body.status, "completed");
assert.equal(provider.adherenceSummary({}, db).body.status, "prepared");
assert.equal(provider.providerReport({}, db).body.status, "prepared");
assert.equal(provider.activityEntry({ confirmed: true, notes: "prescribe therapy" }, db).body.status, "blocked");

console.log("Nexus RTM bridge QA passed.");
