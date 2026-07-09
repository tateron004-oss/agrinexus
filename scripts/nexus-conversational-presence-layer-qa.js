const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const stylesPath = path.join(root, "public", "styles.css");

const app = fs.readFileSync(appPath, "utf8");
const styles = fs.readFileSync(stylesPath, "utf8");

let failures = 0;

function check(name, condition) {
  if (condition) {
    console.log(`PASS ${name}`);
  } else {
    failures += 1;
    console.error(`FAIL ${name}`);
  }
}

function includes(source, text) {
  return source.includes(text);
}

function hasAll(source, items) {
  return items.every(item => includes(source, item));
}

const presenceStart = app.indexOf("function nexusPresenceStateLabel");
const presenceEnd = app.indexOf("function openNexusOnboardingModal");
const presenceBlock = presenceStart >= 0 && presenceEnd > presenceStart
  ? app.slice(presenceStart, presenceEnd)
  : "";
const agenticRuntimeStart = app.indexOf("function runNexusAgenticCommandRuntime");
const agenticRuntimeEnd = app.indexOf("if (typeof window !== \"undefined\")", agenticRuntimeStart);
const agenticRuntimeBlock = agenticRuntimeStart >= 0 && agenticRuntimeEnd > agenticRuntimeStart
  ? app.slice(agenticRuntimeStart, agenticRuntimeEnd)
  : "";

check("presence state contract exists", hasAll(app, [
  "const NEXUS_PRESENCE_STATES",
  'IDLE: "idle"',
  'LISTENING: "listening"',
  'THINKING: "thinking"',
  'SPEAKING: "speaking"',
  'AWAITING_FOLLOWUP: "awaiting_followup"',
  'AWAITING_CONFIRMATION: "awaiting_confirmation"',
  'COMPLETED_LOCAL: "completed_local"',
  'BLOCKED: "blocked"',
  'ERROR: "error"'
]));

check("presence layer UI renders near command center", hasAll(app, [
  "renderNexusConversationalPresenceLayer()",
  'data-nexus-presence-layer="true"',
  'data-nexus-command-orb="true"',
  'data-nexus-voice-waveform="true"',
  "nexus-presence-continuity"
]));

check("presence layer has conversational copy fields", hasAll(app, [
  "data-nexus-presence-active-mission",
  "data-nexus-presence-last-input",
  "data-nexus-presence-response",
  "data-nexus-presence-next-question",
  "You can ask me to check health risk, predict crop risk, assess trade readiness, plan logistics, build a learning plan, prepare a message, or show receipts."
]));

check("wake phrase detector supports Nexus greetings", hasAll(app, [
  "function isNexusPresenceWakePhrase",
  "hello nexus",
  "hey nexus",
  "function normalizeNexusPresenceRoutableCommand",
  "nexus\\s*[,;:.-]?\\s+",
  "function nexusPresenceGreeting",
  "Hello ${first}, how can I help?",
  "Hello, how can I help?"
]));

check("typed wake phrases route through unified runtime", hasAll(app, [
  "async function handleNexusUnifiedBrainRuntimeCommand",
  "handleNexusPresenceWakePhrase(text, options)",
  "handleNexusPresenceFollowUp(text, options)",
  "const routedText = normalizeNexusPresenceRoutableCommand(text)",
  "runtime.shouldHandleBeforeLegacy(routedText, options)",
  "runtime.process(routedText",
  "NEXUS_PRESENCE_STATES.THINKING"
]));

check("visible submit buttons route predictive commands before pre-router interception", hasAll(app, [
  "function routeNexusCommandCenterCommunicationSubmit",
  "const routedCommand = normalizeNexusPresenceRoutableCommand(command)",
  "isNexusPresenceWakePhrase(command)",
  "void handleNexusUnifiedBrainRuntimeCommand(command, { source })",
  "const predictiveCommand = isNexusMultiDomainPredictiveCommand(routedCommand)",
  "isNexusAgriculturePredictiveModelerCommand(routedCommand)",
  "isNexusChronicPredictiveModelerCommand(routedCommand)",
  "isNexusPredictiveMaturityCommand(routedCommand)",
  "predictiveCommand && runNexusAgenticCommandRuntime(routedCommand, { source, originalCommand: command })"
]));

check("lower Send button has direct presence-aware parity path", hasAll(app, [
  "async function handleNexusPresenceCommandSendSubmit",
  ".nexus-command-send[data-nexus-command-center-submit]",
  "event.stopImmediatePropagation?.()",
  'const source = "typed-command-send-button"',
  "const routedCommand = normalizeNexusPresenceRoutableCommand(command)",
  "predictiveCommand && runNexusAgenticCommandRuntime(routedCommand, { source, originalCommand: command })",
  "await handleNexusUnifiedBrainRuntimeCommand(command, { source })",
  'document.addEventListener("click", event => {\n    void handleNexusPresenceCommandSendSubmit(event);\n  }, true);\n  document.addEventListener("click", handleNexusStandardUserHomeClick, true);'
]));

check("voice and typing activity update listening state", hasAll(app, [
  "function handleNexusPresenceInputActivity",
  "function handleNexusPresenceVoiceButton",
  'document.addEventListener("focusin", handleNexusPresenceInputActivity, true)',
  'document.addEventListener("input", handleNexusPresenceInputActivity, true)',
  'document.addEventListener("click", handleNexusPresenceVoiceButton, true)',
  "NEXUS_PRESENCE_STATES.LISTENING"
]));

check("voice responses update presence state", hasAll(app, [
  "skipPresenceUpdate",
  "inferNexusPresenceStateFromMessage(responseMessage, options)",
  "setNexusPresenceState(inferredPresence"
]));

check("agentic command results update presence and receipts", hasAll(app, [
  "function setNexusAgenticCommandResult",
  "NEXUS_PRESENCE_STATES.AWAITING_CONFIRMATION",
  "NEXUS_PRESENCE_STATES.AWAITING_FOLLOWUP",
  "NEXUS_PRESENCE_STATES.COMPLETED_LOCAL",
  "nexusAgenticBrainLastResult",
  "upsertNexusAgenticMission(mission)",
  "saveNexusRuntimeMemory()",
  "renderUserWorkspace()"
]));

check("follow-up loop attaches cross-domain details locally", hasAll(app, [
  "function handleNexusPresenceFollowUp",
  "function parseNexusExperienceFollowUp",
  "nexusPresenceState.state === NEXUS_PRESENCE_STATES.LISTENING",
  "Health follow-up",
  "Agriculture follow-up",
  "Marketplace follow-up",
  "Logistics follow-up",
  "Workforce follow-up",
  "Learning follow-up",
  "Drone follow-up",
  "Communication follow-up",
  "experience_follow_up_added",
  "getNexusExperienceReceiptMessage(mode, activeMission)",
  "setNexusAgenticCommandResult(activeMission, message)",
  "return true;"
]));

check("predictive runtimes remain present", hasAll(app, [
  "isNexusChronicPredictiveModelerCommand",
  "isNexusAgriculturePredictiveModelerCommand",
  "isNexusMultiDomainPredictiveCommand",
  "NEXUS_PREDICTIVE_ADAPTERS",
  'mode: "marketplace"',
  'mode: "logistics"',
  'mode: "workforce"',
  'mode: "learning"',
  'mode: "drone"',
  'mode: "communications"',
  "routeNexusPredictiveMaturityCommand"
]));

check("specific predictive domains route before generic chronic risk", agenticRuntimeBlock
  && agenticRuntimeBlock.indexOf("isNexusMultiDomainPredictiveCommand(command)") >= 0
  && agenticRuntimeBlock.indexOf("isNexusChronicPredictiveModelerCommand(command)") > agenticRuntimeBlock.indexOf("isNexusMultiDomainPredictiveCommand(command)"));

check("presence CSS classes exist", hasAll(styles, [
  ".nexus-presence-layer",
  ".nexus-command-orb",
  ".nexus-orb-listening",
  ".nexus-orb-thinking",
  ".nexus-orb-speaking",
  ".nexus-voice-waveform",
  ".nexus-presence-status",
  ".nexus-presence-pulse",
  ".nexus-conversation-active"
]));

check("voice dock does not cover Ask Nexus composer", hasAll(styles, [
  "body.user-mode .user-voice-dock",
  "right: 18px !important",
  "max-height: min(22vh, 148px) !important",
  "body.user-mode .nexus-command-center-hero",
  "body.user-mode .nexus-command-composer",
  "z-index: 125"
]));

check("presence layer has reduced motion protection", hasAll(styles, [
  "@media (prefers-reduced-motion: reduce)",
  ".nexus-presence-layer",
  "animation: none"
]));

check("presence block avoids fake external execution claims", presenceBlock
  && !/\b(message sent|call placed|provider contacted|shipment tracked live|buyer contacted|employer contacted|drone launched|payment completed|external action completed)\b/i.test(presenceBlock)
  && /No provider handoff, message, call, payment, booking, dispatch, location sharing, camera capture, diagnosis, prescription, or external execution occurred\./.test(presenceBlock));

if (failures) {
  console.error(`Nexus conversational presence layer QA failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log("Nexus conversational presence layer QA passed.");
