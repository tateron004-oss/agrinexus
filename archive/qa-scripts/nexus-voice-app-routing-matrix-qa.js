const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const app = fs.readFileSync("public/app.js", "utf8");
const start = app.indexOf("function genesisWorkspaceActionFromFinalTranscript");
const end = app.indexOf("\nasync function executeGenesisWorkspaceFromFinalTranscript", start);
assert(start >= 0 && end > start, "Final-transcript workspace router must exist.");

const context = { result: null, Math, Date };
vm.runInNewContext(`${app.slice(start, end)}; result = genesisWorkspaceActionFromFinalTranscript;`, context);
const route = command => context.result(command);

const matrix = [
  ["Nexus, show me a map of Nairobi, Kenya.", "map"],
  ["Nexus, open Maps and find a route from Nairobi to Nakuru.", "map"],
  ["Nexus, open Workforce and search for farming jobs in Kenya.", "workforce"],
  ["Nexus, open Marketplace and sell 50 bags of maize.", "trade"],
  ["Nexus, open Health and record blood pressure 140 over 90.", "health"],
  ["Nexus, open Telehealth intake in Kenya.", "telehealth"],
  ["Nexus, open Mobile Clinic support in Kenya.", "mobile-clinic"],
  ["Nexus, open Pharmacy support for medication questions.", "pharmacy"],
  ["Nexus, open Agriculture support for a maize crop issue.", "agriculture"],
  ["Nexus, open Learning and start a digital literacy course.", "learning"],
  ["Nexus, open Music and Media.", "media"],
  ["Nexus, open Reminders.", "reminders"],
  ["Nexus, open the Offline Queue.", "offline"],
  ["Nexus, use the internet to research current weather and show sources.", "live-knowledge"]
];

for (const [command, expectedWorkspace] of matrix) {
  const action = route(command);
  assert(action, `${command} must produce a workspace action.`);
  assert.equal(action.workspace, expectedWorkspace, `${command} must route only to ${expectedWorkspace}.`);
}

assert.equal(
  route("Nexus, open the map so I can travel to a farming job in Kenya.").workspace,
  "map",
  "An explicit Maps request must not be stolen by a Workforce keyword."
);
assert.equal(
  route("Nexus, open Workforce for a farm job that uses maps.").workspace,
  "map",
  "A command that explicitly requests both apps must use the deterministic route-priority contract."
);

assert(app.includes("function rememberAuthoritativeGenesisTranscriptRoute"), "The final transcript must establish a per-turn authoritative route.");
assert(app.includes("function authoritativeGenesisActionForTurn"), "Every later tool action must pass through the route lock.");
assert(app.includes('"workspace-route-conflict-suppressed"'), "Conflicting model tool routes must be observable.");
assert(
  app.indexOf("rememberAuthoritativeGenesisTranscriptRoute(action, command);")
    < app.indexOf("await runAuthoritativeGenesisWorkspaceBridge(result,", app.indexOf("async function executeGenesisWorkspaceFromFinalTranscript")),
  "The route lock must be set before the workspace bridge executes."
);

const lockStart = app.indexOf("let authoritativeGenesisTranscriptRoute = null;");
const lockEnd = app.indexOf("\nfunction genesisWorkspaceActionFromFinalTranscript", lockStart);
assert(lockStart >= 0 && lockEnd > lockStart, "The per-turn route-lock implementation must be testable.");
const lockContext = {
  action: null,
  locked: null,
  nexusGenesisVoiceDebugLog() {}
};
vm.runInNewContext(`
  ${app.slice(lockStart, lockEnd)}
  const transcriptAction = {
    type: "genesis.workspace.open",
    requestId: "transcript-map",
    workspace: "map",
    capabilityId: "maps",
    operation: "route",
    payload: { location: "Nairobi", country: "Kenya" }
  };
  rememberAuthoritativeGenesisTranscriptRoute(transcriptAction, "open the map of Nairobi, Kenya");
  action = authoritativeGenesisActionForTurn({
    type: "genesis.workspace.open",
    requestId: "late-workforce-tool",
    workspace: "workforce",
    capabilityId: "workforce",
    operation: "job_search",
    payload: { query: "farming jobs" }
  }, { source: "openai-realtime-tool" });
  locked = authoritativeGenesisTranscriptRoute;
`, lockContext);
assert.equal(lockContext.action.workspace, "map", "A late Workforce tool result must not replace the transcript's Maps route.");
assert.equal(lockContext.action.capabilityId, "maps", "The transcript's Maps capability must remain authoritative.");
assert.equal(lockContext.action.payload.location, "Nairobi", "Transcript map entities must survive a conflicting tool result.");
assert.equal(lockContext.action.payload.query, "farming jobs", "Useful tool data may populate the locked workspace without changing it.");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-voice-app-routing-matrix-qa",
  routes: matrix.length,
  conflictProtection: "final-transcript-route-lock"
}));
