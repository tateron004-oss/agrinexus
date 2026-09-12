const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const suite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS ${message}`);
  }
}

const requiredStates = [
  "listen",
  "understand",
  "clarify",
  "plan",
  "collect",
  "prepare",
  "confirm",
  "execute",
  "verify",
  "record",
  "learn",
  "complete",
  "return_home"
];

assert(app.includes("NEXUS_OS_MISSION_LIFECYCLE_STATES"), "canonical mission lifecycle state list exists");
for (const state of requiredStates) {
  assert(app.includes(`"${state}"`), `mission lifecycle includes ${state}`);
}

const requiredFields = [
  "missionId",
  "userGoal",
  "interpretedGoal",
  "domain",
  "intent",
  "currentState",
  "currentStep",
  "completedSteps",
  "missingInformation",
  "collectedInformation",
  "requiredConsent",
  "providerRequirement",
  "executionAvailability",
  "safetyClassification",
  "currentOutcome",
  "receiptReferences",
  "createdAt",
  "updatedAt",
  "pauseState",
  "failureReason",
  "retryEligibility"
];

for (const field of requiredFields) {
  assert(app.includes(field), `mission record includes ${field}`);
}

assert(app.includes("canTransitionNexusOsMission"), "valid transition helper exists");
assert(app.includes("Invalid transition blocked"), "invalid transitions are blocked");
assert(app.includes("handleNexusOsMissionLifecycleAction"), "mission action handler exists");
assert(app.includes("data-nexus-os-mission-action=\"pause\""), "pause control exists");
assert(app.includes("data-nexus-os-mission-action=\"resume\""), "resume control exists");
assert(app.includes("data-nexus-os-mission-action=\"cancel\""), "cancel-before-execution control exists");
assert(app.includes("data-nexus-os-mission-action=\"complete\""), "complete control exists");
assert(app.includes("data-nexus-os-mission-action=\"return-home\""), "return home control exists");
assert(app.includes("Form completion alone does not complete a mission."), "form completion alone is not mission completion");
assert(app.includes("Mission cancelled before execution."), "cancel does not execute mission");
assert(app.includes("Mission completed with an outcome state."), "complete produces outcome state");
assert(app.includes("Mission paused. Current step is retained."), "pause retains current step");
assert(app.includes("Mission resumed from the retained step."), "resume retains current step");
assert(app.includes("blocked-until-consent-final-gate-provider-and-audit"), "high-risk execution remains blocked by consent/final gate/provider/audit");
assert(app.includes("No unsupported external action was claimed."), "failure/success wording avoids false success");
assert(app.includes("advanceNexusOsMissionForCommand(command, { source: \"typed-command-submit\" })"), "typed submit advances mission lifecycle");
assert(app.includes("advanceNexusOsMissionForCommand(command, { source: \"typed-command-keyboard\" })"), "keyboard submit advances mission lifecycle");
const earlySubmitRouter = app.slice(
  app.indexOf("function routeNexusCommandCenterCommunicationSubmit"),
  app.indexOf("document.addEventListener(\"click\", event => {", app.indexOf("function routeNexusCommandCenterCommunicationSubmit"))
);
assert(
  earlySubmitRouter.includes("advanceNexusOsMissionForCommand(command, { source });"),
  "earliest command submit router advances mission before downstream handlers"
);
assert(app.includes("NexusOsMissionLifecycleRuntime"), "runtime API is exposed for QA");
assert(app.includes("data-nexus-os-mission-lifecycle-status=\"true\""), "visible mission lifecycle status renders");
assert(app.includes("nexusOsMissionLifecycleState"), "mission lifecycle state is persisted locally");

const unsafePositiveClaims = [
  "Provider contacted.",
  "Message sent.",
  "Payment made.",
  "Appointment booked.",
  "Location shared.",
  "Prescription refilled.",
  "Emergency dispatched."
];
const missionBlock = app.slice(app.indexOf("const NEXUS_OS_MISSION_LIFECYCLE_STATES"), app.indexOf("async function handleNexusOsVoiceControlAction"));
for (const phrase of unsafePositiveClaims) {
  assert(!missionBlock.includes(phrase), `mission lifecycle avoids unsafe positive success claim: ${phrase}`);
}

assert(pkg.scripts["qa:nexus-os-mission-lifecycle"] === "node scripts/nexus-os-mission-lifecycle-qa.js", "package alias exists");
assert(suite.includes("scripts/nexus-os-mission-lifecycle-qa.js"), "safe QA suite includes Rail 7 QA");

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log("Nexus OS mission lifecycle QA passed.");
