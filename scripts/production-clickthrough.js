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
  "liveServiceCheckFromIntegrations",
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
  "/api/intelligence/workflow",
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
  "/api/engines/render-env-plan",
  "/api/production/complete-check",
  "/api/production/operations-plan",
  "/api/production/activation-guide",
  "/api/intelligence/next-actions",
  "/api/production/live-service-check"
];

assert(app.includes('event.target.closest("[data-voice-example]")'), "Ask AgriNexus guide buttons need delegated click handling");
assert(html.includes("voiceHelpPanel"), "Voice command help panel must be present for non-technical users");
assert(app.includes("function openVoiceHelp"), "Voice command help button must open the command help panel");
assert(app.includes("function voiceCommandButton"), "Voice command help buttons must display translated labels");
assert(app.includes("function normalizeLocalizedVoiceCommand"), "Voice command help must normalize localized spoken commands");
assert(app.includes("activeVoiceAudio"), "Voice playback needs a single active audio guard");
assert(app.includes("function stopVoicePlayback"), "Voice playback must be cancellable before starting another response");
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
assert(server.includes("function workflowIntelligence"), "Backend needs module-aware workflow intelligence");
assert(app.includes("/api/intelligence/workflow"), "Confirmed workflows must request intelligence after execution");
assert(app.includes("Latest Workflow Guidance"), "Dashboard must show the latest workflow intelligence guidance");
assert(server.includes("function smartNextActions"), "Backend needs proactive smart next actions");
assert(app.includes("Recommended Next Actions"), "Dashboard must show proactive smart guidance");
assert(server.includes("/api/intelligence/next-actions"), "Backend needs a next-actions intelligence endpoint");
assert(server.includes("function productionActivationGuide"), "Backend needs a live activation guide");
assert(html.includes("liveActivationGuide"), "Integrations page needs a live activation guide");
assert(app.includes("activationGuide"), "Frontend must render live activation guidance");
assert(server.includes("function renderEngineEnvPlan"), "Backend needs a Render engine env plan");
assert(server.includes("MAP_TILE_PROVIDER: \"openstreetmap\""), "Engine setup should default launch maps to OpenStreetMap");
assert(server.includes("OpenStreetMap live tile provider is enabled for launch."), "Map readiness should accept OpenStreetMap as a live provider");
assert(html.includes("renderEngineKeysPanel"), "Integrations page needs Render engine keys");
assert(app.includes("engineSetup"), "Frontend must render engine setup values");
assert(server.includes("function buildAutopilotPlan"), "Backend needs Agent Autopilot mission planning");
assert(server.includes("agent.autopilot_executed"), "Autopilot execution must be recorded as agent evidence");
assert(server.includes("function buildConversationalGuideResponse"), "Backend needs an intuitive conversational platform guide");
assert(server.includes("agent.conversation_guided"), "Conversation guide should create AI evidence when OpenAI routes the user");
assert(server.includes("conversation.platform_guide"), "Agent command route must support guide-style conversation");
assert(html.includes("missionDashboardPanel"), "Agent page needs an Autopilot Mission Dashboard");
assert(app.includes("function renderMissionDashboard"), "Frontend needs to render mission plans and executions");
assert(html.includes("liveServiceCheckPanel"), "Admin needs a live service finalization panel");
assert(html.includes("liveServiceCheckInlineStatus"), "Integrations needs a visible live service check status");
assert(html.includes("loginProfiles"), "Login screen needs role-based demo account selectors");
assert(app.includes("demoLoginProfiles"), "Frontend needs selectable login profiles");
assert(app.includes("function applyRoleNavigation"), "Frontend needs role-based navigation visibility");
assert(app.includes("function canOpenSection"), "Frontend needs section permission guards");
assert(server.includes("DEFAULT_USERS"), "Backend needs seeded role-based demo accounts");
assert(server.includes("Standard User"), "Backend needs a standard user role");
assert(server.includes("Investor"), "Backend needs an investor role");
assert(!server.includes("Workforce Operator"), "Production login levels should be simplified to admin, standard user, and investor");
assert(app.includes("function runLiveServiceCheck"), "Frontend needs a live service finalization action");
assert(html.includes("app.js?v=ask-nexus-31"), "Index must force browsers to load the latest wake voice access code");
assert(app.includes("function captureOriginalText"), "Frontend must capture original English text before first translated render");
assert(app.includes("captureOriginalText();"), "Boot must preserve original static text before user-specific language rendering");
assert(app.includes('"#loginView", ".topbar", ".sidebar"'), "Translation pass must include login, topbar, and navigation areas");
assert(app.includes("function isWakePhraseOnly"), "Voice assistant must treat Hey AgriNexus as a wake phrase");
assert(app.includes("function enableHeyAgriNexusMode"), "Voice assistant must enable hands-free wake listening");
assert(app.includes("Hey AgriNexus mode is on"), "Voice-first mode needs clear user-facing wake phrase copy");
assert(html.includes("Hey AgriNexus: On"), "Global assistant needs a clear Hey AgriNexus control");
assert(server.includes('"cache-control": cacheControl'), "Static app assets should declare cache-control headers");
assert(app.includes("liveServiceCheckFromIntegrations"), "Integrations live service check button must share the finalization action");
assert(app.includes("Slow external engines will time out"), "Live service check should show progress while external engines respond");
assert(server.includes("function fetchWithTimeout"), "External service probes need timeouts so checks cannot hang");
assert(server.includes("hasTwilioVoice"), "Twilio phone voice readiness must be evaluated without generic webhook API keys");
assert(server.includes("Twilio phone assistant is configured"), "Phone provider status needs a clear Twilio-ready detail");
assert(!server.includes("Role does not allow production service checks"), "Live service checks should be available to any signed-in operator");
assert(!app.includes('element.id === "liveServiceCheckBtn" ? "admin"'), "Live service check buttons should not be disabled as admin-only controls");
assert(app.includes('event.target.closest("#liveServiceCheckBtn")'), "Live service check needs delegated click handling");
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
