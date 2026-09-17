"use strict";
const test = require("node:test"), assert = require("node:assert/strict");
const fs = require("node:fs"), path = require("node:path"), vm = require("node:vm");

// Confirmed by a full-codebase audit: frontierNexusBrainModel, networkIntelligenceModel,
// ecosystemIntelligenceModel, executiveIntelligenceSuiteModel, and autonomousOrchestrationModel
// all carry a "this is not Kyro's real autonomous task engine" disclosure that reaches a
// user-visible dashboard panel or spoken response -- but nexusMissionBrainModel's own
// disclosureNotice (from the same legacyIntelligenceDisclosure() spread) only ever travelled
// in conversational metadata.missionBrain, which no frontend code reads. This test locks in
// the fix: missionBrainCommandResponse's own spoken/displayed response text must include it.
function loadMissionBrainCommandResponse() {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const begin = source.indexOf("function missionBrainCommandResponse(");
  const end = source.indexOf("\nfunction nexusTrustedOperatingSystemModel(", begin);
  assert.ok(begin >= 0 && end > begin);
  const sandbox = {
    nexusMissionBrainModel: () => ({
      status: "planned-ready",
      confidence: 0.83,
      missionSteps: [{ title: "Schedule a check-in", action: "schedule" }],
      nextActions: [{ title: "Schedule a check-in" }],
      proactiveAlerts: [],
      safety: { confirmationRequired: false },
      activeContext: { section: "agent" },
      suggestedCommands: [],
      disclosureNotice: "This score reflects real platform usage counts through a local scoring formula. It is a capability/readiness index, not Kyro's real background-executing autonomous task engine."
    })
  };
  vm.createContext(sandbox);
  vm.runInContext(source.slice(begin, end) + "\nthis.run = missionBrainCommandResponse;", sandbox);
  return sandbox.run;
}

test("mission brain's spoken/displayed response includes the real-vs-simulated disclosure", () => {
  const missionBrainCommandResponse = loadMissionBrainCommandResponse();
  const result = missionBrainCommandResponse({}, { role: "User" }, "run my mission brain");
  assert.match(result.response, /not Kyro's real background-executing autonomous task engine/);
});
