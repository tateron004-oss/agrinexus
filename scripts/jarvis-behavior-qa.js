const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

const requirements = [
  ["true background listening recovery", app.includes("visibilitychange") && app.includes("Nexus is resuming voice-first listening") && app.includes("voiceAutoRestart")],
  ["deeper long-term memory", app.includes("function nexusDeepMemorySignals") && server.includes("rememberAgentMemory") && server.includes("memory-summary")],
  ["autopilot mission queue", app.includes("function nexusAutopilotQueue") && server.includes("agent.autopilot_executed") && server.includes("previewSteps")],
  ["real provider action depth", app.includes("function providerActionDepthStatus") && server.includes("live-service-check") && server.includes("dispatchProviderWebhook")],
  ["voice interruption", app.includes("function interruptNexusSpeech") && app.includes("I stopped speaking") && app.includes("stopVoicePlayback")],
  ["proactive alerts", app.includes("function nexusProactiveAlerts") && app.includes("autopilot-waiting") && app.includes("renderNotificationPanel")],
  ["mobile permission polish", app.includes("function mobilePermissionRecoveryGuide") && app.includes("requestProductionMobilePermission") && app.includes("Connection restored")],
  ["behavior QA visibility", html.includes("nexusBehaviorStatus") && styles.includes("#nexusBehaviorStatus") && app.includes("function updateNexusBehaviorLayer")],
  ["performance behavior controller", app.includes("agentPerformanceState") && app.includes("function markAgentPerformance") && app.includes("function setAgentFastAcknowledgement")],
  ["agentic behavior scorecard", app.includes("function agenticBehaviorScorecard") && app.includes("Agentic behavior check")],
  ["agent command timeout safety", app.includes("function requestWithTimeout") && app.includes("Nexus timed out waiting for the live engine")],
  ["no dead-air progress updates", app.includes("function beginAgentNoDeadAir") && app.includes("Still working on") && app.includes("The live engine is taking longer than normal")],
  ["safe slow-engine fallback", app.includes("function safeAgentFallbackResponse") && app.includes("I kept the app responsive")],
  ["conversation clarification repair", app.includes("function inferAmbiguousIntent") && app.includes("function askAgentClarification") && app.includes("function answerAgentClarification")],
  ["simple clarification choices", app.includes("Which path do you want?") && app.includes("Say the number, say the service name, or say cancel")],
  ["guided next-step journey", app.includes("activeAgentJourney") && app.includes("function setActiveAgentJourney") && app.includes("function runActiveAgentNextStep")],
  ["voice follow-through command", app.includes("say next step to continue") && app.includes("continue journey") && app.includes("Guided journey cleared")]
];

const missing = requirements.filter(([, passed]) => !passed).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing Jarvis behavior requirements: ${missing.join(", ")}`);

console.log("Jarvis behavior QA passed");
for (const [name] of requirements) console.log(`- ${name}`);
