const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

let failures = 0;

function check(name, condition) {
  if (condition) {
    console.log(`PASS ${name}`);
  } else {
    failures += 1;
    console.error(`FAIL ${name}`);
  }
}

function hasAll(source, items) {
  return items.every(item => source.includes(item));
}

const polishStart = app.indexOf("function normalizeNexusExperienceMode");
const polishEnd = app.indexOf("function handleNexusPresenceInputActivity", polishStart);
const polishBlock = polishStart >= 0 && polishEnd > polishStart ? app.slice(polishStart, polishEnd) : "";
const unifiedStart = app.indexOf("async function handleNexusUnifiedBrainRuntimeCommand");
const unifiedEnd = app.indexOf("async function handleNexusHealthcareCollaborationRuntimeCommand", unifiedStart);
const unifiedBlock = unifiedStart >= 0 && unifiedEnd > unifiedStart ? app.slice(unifiedStart, unifiedEnd) : "";
const resultStart = app.indexOf("function setNexusAgenticCommandResult");
const resultEnd = app.indexOf("function submitNexusAgenticCommandRuntime", resultStart);
const resultBlock = resultStart >= 0 && resultEnd > resultStart ? app.slice(resultStart, resultEnd) : "";

check("experience polish helper block exists", hasAll(app, [
  "function normalizeNexusExperienceMode",
  "function nexusExperienceModeFromMission",
  "function nexusExperienceModeFromCommand",
  "function getNexusExperienceAcknowledgment",
  "function getNexusExperienceProgressSteps",
  "function getNextBestQuestion",
  "function getNexusExperienceConfidenceExplanation",
  "function getSuggestedNextActions",
  "function getNexusExperienceReceiptMessage"
]));

check("all required modes are covered by polish layer", hasAll(polishBlock, [
  "health",
  "agriculture",
  "marketplace",
  "logistics",
  "workforce",
  "learning",
  "drone",
  "communications"
]));

check("first-time guidance supports requested commands", hasAll(polishBlock, [
  "function isNexusExperienceHelpCommand",
  "what can (nexus|you) do",
  "show me nexus modes",
  "show me what you can help with",
  "help me get started",
  "what can nexus do across all modes",
  "function buildNexusExperienceStarterResponse",
  "health intake",
  "chronic care tracking",
  "crop support",
  "marketplace preparation",
  "logistics",
  "jobs",
  "learning",
  "drone review",
  "unsent communications"
]));

check("wake phrase remains non-mission starter guidance", hasAll(app, [
  "function handleNexusPresenceWakePhrase",
  "buildNexusExperienceStarterResponse(command, { greeting })",
  'activeMission: "Ready to help"',
  "renderLiveVoiceSuggestions(starter.suggestions)"
]) && !app.includes('activeMission: "Conversational greeting"'));

check("status and receipt commands are supported", hasAll(polishBlock, [
  "function isNexusExperienceStatusCommand",
  "what happened",
  "what did you do",
  "did it send",
  "what do i need to do next",
  "show my last receipt",
  "function handleNexusExperienceStatusCommand",
  "What happened:",
  "What did not happen:",
  "Confidence:",
  "Still needed:",
  "Next:"
]));

check("final mission result gets polish fields", hasAll(resultBlock, [
  "applyNexusExperiencePolishToMission",
  "polishedMessage",
  "nextBestQuestion: mission.nextBestQuestion",
  "confidenceExplanation: mission.confidenceExplanation",
  "suggestedNextActions: mission.suggestedNextActions",
  "receiptMessage: mission.receiptMessage",
  "lastResponse: polishedMessage",
  "nextQuestion: mission.nextBestQuestion"
]));

check("follow-up parser covers cross-domain continuity", hasAll(polishBlock, [
  "function parseNexusExperienceFollowUp",
  "presenceMatchedMission",
  "label.includes(presenceMission) || presenceMission.includes(label)",
  "Health follow-up",
  "Agriculture follow-up",
  "Marketplace follow-up",
  "Logistics follow-up",
  "Workforce follow-up",
  "Learning follow-up",
  "Drone follow-up",
  "Communication follow-up",
  "experience_follow_up_added",
  "^(?:hello\\s+|hey\\s+)?nexus\\b",
  "^(?:open|start|help|record|prepare|plan|show)\\b"
]));

check("unified runtime routes help/status/follow-up before generic processing", hasAll(unifiedBlock, [
  "handleNexusPresenceWakePhrase(text, options)",
  "handleNexusExperienceStarterCommand(text, options)",
  "handleNexusExperienceStatusCommand(text, options)",
  "handleNexusPresenceFollowUp(text, options)",
  "getNexusExperienceProgressSteps(experienceMode)",
  "getNexusExperienceAcknowledgment(experienceMode, text)",
  "runtime.process(routedText"
]));

check("command-center submit routes polish before predictive or legacy routers", hasAll(app, [
  "function routeNexusCommandCenterCommunicationSubmit",
  "handleNexusExperienceStarterCommand(command, { source })",
  "handleNexusExperienceStatusCommand(command, { source })",
  "handleNexusPresenceFollowUp(command, { source })",
  "const predictiveCommand = isNexusMultiDomainPredictiveCommand(routedCommand)"
]) && app.indexOf("handleNexusPresenceFollowUp(command, { source })") < app.indexOf("const predictiveCommand = isNexusMultiDomainPredictiveCommand(routedCommand)"));

check("voice and text parity remains guarded", hasAll(app, [
  "setVoiceResponse(starter.message",
  "setVoiceResponse(message, options.speak !== false",
  "source: options.source || \"nexus-experience-polish-layer\"",
  "skipPresenceUpdate: true",
  "handleNexusPresenceCommandSendSubmit",
  "handleNexusUnifiedBrainRuntimeCommand(command, { source })"
]));

check("no fake external execution claims introduced", hasAll(polishBlock, [
  "No provider handoff, message, call, payment, booking, dispatch, location sharing, camera capture, diagnosis, prescription, or external execution occurred.",
  "without contacting buyers, sellers, or payment systems",
  "avoid live dispatch, tracking, or carrier handoff",
  "keep it unsent",
  "No flight, imaging, or operator dispatch will start"
]) && !/(was sent successfully|provider accepted|payment completed|appointment booked|dispatch started|diagnosed|prescribed)/i.test(polishBlock));

check("package alias exists", packageJson.scripts["qa:nexus-experience-polish-layer"] === "node scripts/nexus-experience-polish-layer-qa.js");

check("safe suites include experience polish QA", hasAll(qaSuite, [
  "scripts/nexus-experience-polish-layer-qa.js",
  "scripts/nexus-conversational-presence-layer-qa.js",
  "scripts/nexus-platform-predictive-intelligence-qa.js"
]));

check("build token bumped with frontend change", hasAll(app, [
  'AGRINEXUS_BUILD_VERSION = "nexus-behavior-443"'
]));

if (failures) {
  console.error(`\n${failures} Nexus experience polish QA check(s) failed.`);
  process.exit(1);
}

console.log("\nNexus experience polish layer QA passed.");
