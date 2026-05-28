const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

const pages = ["index.html", "status.html", "terms.html", "privacy.html", "refund.html", "manifest.webmanifest", "sw.js", "icons/agri-nexus-icon.svg", "icons/agri-nexus-192.png", "icons/agri-nexus-512.png"];
for (const page of pages) {
  assert(fs.existsSync(path.join(root, "public", page)), `Missing public page: ${page}`);
}

const clickTargets = [
  "startActiveCourseBtn",
  "completeLessonBtn",
  "quizBtn",
  "certBtn",
  "runIntakeSimulationBtn",
  "droneMissionBtn",
  "droneScanBtn",
  "droneInterventionBtn",
  "billingCheckoutBtn",
  "startOnboardingBtn",
  "openSupportBtn",
  "inviteSubscriberBtn",
  "globalListenBtn",
  "globalRunBtn",
  "globalVoiceFirstBtn",
  "globalYesBtn",
  "globalNoBtn",
  "globalReadBtn",
  "globalVoiceHelpBtn",
  "globalInstallBtn",
  "simpleContinueBtn",
  "personaFarmerBtn",
  "personaLearnerBtn",
  "personaWorkerBtn",
  "personaHealthBtn",
  "personaGovernmentBtn",
  "personaPartnerBtn",
  "guideCommandTourBtn",
  "guideTelehealthBtn",
  "guideTrainingBtn",
  "guideWorkforceBtn",
  "guideFarmerMissionBtn",
  "guideEnginesBtn",
  "pilotRuralAccessBtn",
  "pilotFarmerMarketBtn",
  "pilotHealthWorkforceBtn",
  "adminHealthCheck",
  "liveServiceCheckBtn",
  "agentPlanBtn",
  "agentExecuteBtn",
  "agentBriefingBtn",
  "missionResumeBtn",
  "missionAutopilotBtn",
  "voiceRunBtn",
  "voiceFirstBtn",
  "voiceHelpBtn",
  "voiceHelpCloseBtn",
  "jarvisRunBtn",
  "workflowConfirm"
];

for (const id of clickTargets) {
  assert(html.includes(`id="${id}"`), `Missing clickable control #${id}`);
  const isPresetCommand = html.includes(`id="${id}"`) && html.slice(Math.max(0, html.indexOf(`id="${id}"`) - 250), html.indexOf(`id="${id}"`) + 250).includes("data-command-preset");
  const isPilotScenario = html.includes(`id="${id}"`) && html.slice(Math.max(0, html.indexOf(`id="${id}"`) - 250), html.indexOf(`id="${id}"`) + 250).includes("data-pilot-scenario");
  const isPersona = html.includes(`id="${id}"`) && html.slice(Math.max(0, html.indexOf(`id="${id}"`) - 250), html.indexOf(`id="${id}"`) + 250).includes("data-persona");
  const isSimpleAction = html.includes(`id="${id}"`) && html.slice(Math.max(0, html.indexOf(`id="${id}"`) - 250), html.indexOf(`id="${id}"`) + 250).includes("data-simple-action");
  assert(app.includes(`#${id}`) || app.includes(`"${id}"`) || app.includes(`'${id}'`) || (isPresetCommand && app.includes("[data-command-preset]")) || (isPilotScenario && app.includes("[data-pilot-scenario]")) || (isPersona && app.includes("[data-persona]")) || (isSimpleAction && app.includes("[data-simple-action]")), `Missing handler for #${id}`);
}

const endpoints = [
  "/api/learning/start",
  "/api/learning/catalog",
  "/api/learning/lesson",
  "/api/learning/advanced",
  "/api/workforce/action",
  "/api/workforce/advanced",
  "/api/health/action",
  "/api/health/intake-simulation",
  "/api/health/advanced",
  "/api/trade/drone-mission",
  "/api/trade/drone-scan",
  "/api/trade/drone-intervention",
  "/api/trade/drone-advanced",
  "/api/trade/buyer-contact",
  "/api/trade/advanced",
  "/api/map/advanced",
  "/api/agent/command",
  "/api/agent/briefing",
  "/api/voice/transcribe",
  "/api/voice/speak",
  "/api/translate",
  "/api/auth/password-reset",
  "/api/billing/checkout",
  "/api/onboarding/start",
  "/api/support/ticket",
  "/api/pilot/run",
  "/api/admin/subscriber",
  "/api/engines/manifest",
  "/api/production/complete-check",
  "/api/production/operations-plan",
  "/api/production/live-service-check"
];

assert(app.includes('event.target.closest("[data-voice-example]")'), "Ask AgriNexus guide buttons need delegated click handling");
assert(html.includes("voiceHelpPanel"), "Voice command help panel must be present for non-technical users");
assert(app.includes("function openVoiceHelp"), "Voice command help button must open the command help panel");
assert(app.includes("function voiceCommandButton"), "Voice command help buttons must display translated labels");
assert(app.includes("function normalizeLocalizedVoiceCommand"), "Voice command help must normalize localized spoken commands");
assert(html.includes("productionOperationsPlan"), "Admin needs the 10 production workstream panel");
assert(server.includes("function productionOperationsPlan"), "Backend needs a 10 production workstream readiness model");
assert(app.includes("Awaiting human approval"), "AI governance panel must distinguish pending approval from provider errors");
assert(app.includes("Provider error - review required"), "AI governance panel must show true provider errors clearly");
assert(server.includes("speechError"), "Voice speech route must return OpenAI TTS errors for production debugging");
assert(app.includes("OpenAI voice error:"), "Voice UI must show the exact OpenAI TTS error");
assert(app.includes("runJarvisCommand();"), "Jarvis dock Run button must read the dock command input");
assert(app.includes("function runAdminHealthCheckDirect"), "Admin top health check button must execute directly");
assert(server.includes("function agentToolRegistry"), "Backend needs a safe agent tool registry for open-ended requests");
assert(server.includes("function planAgentToolWithOpenAi"), "Backend needs live LLM planning for agentic commands");
assert(server.includes("agent.llm_tool_planned"), "Agent planner must create provider evidence when OpenAI selects a workflow tool");
assert(html.includes("agentReasoningTitle"), "Agent page needs a visible reasoning panel");
assert(app.includes("function renderAgentReasoningPanel"), "Frontend needs to render agent reasoning from command metadata");
assert(server.includes("function rememberAgentMemory"), "Backend needs long-term memory capture for the learning agent");
assert(server.includes("function retrieveAgentMemories"), "Backend needs memory retrieval before agent planning");
assert(server.includes("agent.memory_retrieved"), "Agent planning should record memory retrieval evidence");
assert(server.includes("function buildAutopilotPlan"), "Backend needs Agent Autopilot mission planning");
assert(server.includes("agent.autopilot_executed"), "Autopilot execution must be recorded as agent evidence");
assert(html.includes("missionDashboardPanel"), "Agent page needs an Autopilot Mission Dashboard");
assert(app.includes("function renderMissionDashboard"), "Frontend needs to render mission plans and executions");
assert(html.includes("liveServiceCheckPanel"), "Admin needs a live service finalization panel");
assert(app.includes("function runLiveServiceCheck"), "Frontend needs a live service finalization action");
assert(html.includes("learningCatalogPanel"), "Learning module needs a course catalog workspace");
assert(app.includes("learningCatalogSummary"), "Learning catalog summary must render from platform state");
assert(server.includes("function learningCatalog"), "Backend needs a learning catalog model");
assert(html.includes("intakeSimulationPanel"), "Health module needs a guided intake simulation workspace");
assert(app.includes("function openGuidedIntakeSimulation"), "Frontend needs a guided intake simulation workflow");
assert(html.includes("workforceAdvancedPanel"), "Workforce needs an advanced operations pack");
assert(html.includes("tradeAdvancedPanel"), "Trade needs an advanced operations pack");
assert(server.includes("workforceOnboarding"), "Backend needs advanced workforce operation records");
assert(server.includes("tradeQuotes"), "Backend needs advanced trade operation records");
assert(html.includes("advancedDroneList"), "Drone command center needs advanced drone evidence");
assert(server.includes("createAdvancedDroneOperation"), "Backend needs advanced drone operation workflows");
assert(app.includes("drone-irrigation"), "Frontend needs advanced drone irrigation workflow wiring");
assert(html.includes("healthAdvancedPanel"), "Telehealth needs an advanced care operations pack");
assert(server.includes("telehealthAppointments"), "Backend needs advanced telehealth operation records");
assert(app.includes("appointment: \"Schedule appointment\""), "Frontend needs advanced telehealth workflow wiring");
assert(html.includes("learningAdvancedPanel"), "Learning needs an advanced classroom operations pack");
assert(server.includes("learningAssignments"), "Backend needs advanced learning operation records");
assert(app.includes("assignment: [\"Create assignment\""), "Frontend needs advanced learning workflow wiring");
assert(html.includes("mapAdvancedPanel"), "Map needs an advanced field intelligence operations pack");
assert(server.includes("farmerLocations"), "Backend needs advanced map operation records");
assert(app.includes("\"farmer-location\": [\"Map farmer location\""), "Frontend needs advanced map workflow wiring");

for (const endpoint of endpoints) {
  assert(server.includes(endpoint), `Missing backend endpoint ${endpoint}`);
}

const legalLinks = ["/terms.html", "/privacy.html", "/refund.html"];
for (const link of legalLinks) {
  assert(html.includes(link) || fs.readFileSync(path.join(root, "public", "status.html"), "utf8").includes(link), `Missing legal link ${link}`);
}

assert(html.includes('rel="manifest"'), "Missing web app manifest link");
assert(app.includes("serviceWorker.register"), "Missing service worker registration");
assert(app.includes("installAgriNexusApp"), "Missing in-app install handler");
assert(server.includes(".webmanifest"), "Missing webmanifest MIME type");
assert(server.includes(".png"), "Missing PNG MIME type");

console.log("Production click-through audit passed");
