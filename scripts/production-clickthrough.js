const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");

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
  "guideConversationBtn",
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

function htmlAttribute(attrs, name) {
  const match = attrs.match(new RegExp(`${name}=["']([^"']+)["']`, "i"));
  return match ? match[1] : "";
}

function isButtonHandled(attrs) {
  const id = htmlAttribute(attrs, "id");
  const classNames = htmlAttribute(attrs, "class").split(/\s+/).filter(Boolean);
  const hasDataAttribute = /(?:^|\s)data-[\w-]+=/i.test(attrs);
  const hasInlineHandler = /(?:^|\s)on\w+=/i.test(attrs);
  const isFormControl = /(?:^|\s)type=["'](?:submit|reset)["']/i.test(attrs);
  const idHandled = id && (app.includes(`#${id}`) || app.includes(`"${id}"`) || app.includes(`'${id}'`));
  const classHandled = classNames.some(className => app.includes(`.${className}`) || app.includes(className));
  return hasDataAttribute || hasInlineHandler || isFormControl || idHandled || classHandled;
}

const allButtons = [...html.matchAll(/<button\b([\s\S]*?)>([\s\S]*?)<\/button>/gi)];
const unhandledButtons = allButtons
  .map(match => ({
    attrs: match[1].replace(/\s+/g, " ").trim(),
    label: match[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
  }))
  .filter(button => !isButtonHandled(button.attrs));
assert(unhandledButtons.length === 0, `Unhandled static buttons found: ${JSON.stringify(unhandledButtons)}`);

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
assert(server.includes("function intelligentAssistantModel"), "Backend needs the 10-part intelligent assistant model");
assert(app.includes("intelligentAssistantPanel"), "Agent page must render the 10-part intelligent assistant model");
assert(html.includes("10-Part Assistant System"), "Agent page needs a visible 10-part assistant system panel");
assert(server.includes("intelligent-assistant.ten_item_model"), "Voice agent must answer all-ten intelligent model requests");
assert(server.includes("function sessionBriefingModel"), "Backend needs login/session briefing guidance");
assert(server.includes("function platformProgressSummary"), "Backend needs plain-language progress summaries");
assert(server.includes("function workflowOutcomeSummary"), "Voice agent needs a plain-language what-happened summary");
assert(server.includes("function dailyOperatorBriefing"), "Voice agent needs a daily operator briefing");
assert(server.includes("conversation.workflow_outcome_summary"), "Voice agent must answer what just happened");
assert(server.includes("conversation.daily_operator_briefing"), "Voice agent must answer good morning briefing");
assert(html.includes("AgriNexus Guide Brief"), "Dashboard needs a visible session briefing");
assert(app.includes("sessionBriefingPanel"), "Frontend must render the session briefing");
assert(server.includes("function assistantBehaviorModel"), "Backend needs a non-robotic behavior model");
assert(server.includes("function humanizeAgentResult"), "Agent command responses must be shaped by the behavior model");
assert(server.includes("function adaptiveBehaviorNudge"), "Conversation brain must adapt follow-up language to the user context");
assert(server.includes("lastAdaptiveSignals"), "Conversation brain must remember adaptive conversation signals");
assert(app.includes("Adaptive style"), "Agent UI must show adaptive conversation style");
assert(server.includes("conversation.behavior_model"), "Voice agent must explain its behavior model");
assert(server.includes("function conversationalReasoningResponse"), "Backend needs an open-ended conversational reasoning brain");
assert(server.includes("function updateConversationUserModel"), "Conversation brain must learn user context and preferences");
assert(server.includes("function conversationFollowUpResponse"), "Conversation brain must support natural follow-up commands");
assert(server.includes("function socialConversationResponse"), "Conversation brain must support human social turns");
assert(server.includes("function suggestedRepliesForResult"), "Agent responses need spoken next-step suggestions");
assert(server.includes("function updateActiveVoiceMission"), "Conversation brain must track active voice missions across turns");
assert(server.includes("function activeVoiceMissionBrief"), "Conversation brain must explain current voice mission state");
assert(server.includes("function startClarification"), "Conversation brain must ask smart clarification questions for vague requests");
assert(server.includes("function continueClarification"), "Conversation brain must turn clarification answers into workflow actions");
assert(server.includes("activeClarification"), "Conversation brain must remember active clarification state");
assert(server.includes("function continueVoiceRecovery"), "Conversation brain must recover unclear voice prompts into workflows");
assert(server.includes("activeRecovery"), "Conversation brain must remember active voice recovery state");
assert(server.includes("function updateGuidedMissionMemory"), "Conversation brain must keep guided mission checklist state");
assert(server.includes("function activeGuidedMissionBrief"), "Conversation brain must explain guided checklist progress");
assert(app.includes("Guided checklist"), "Agent UI must show guided checklist progress");
assert(server.includes("function buildConversationTurnCoach"), "Conversation brain must manage the next conversational turn");
assert(app.includes("lastSpokenText"), "Voice UI must prevent rapid duplicate speech playback");
assert(app.includes("Next prompt"), "Agent UI must show the next conversational prompt");
assert(server.includes("function conversationEvidencePack"), "Conversation brain must create an evidence pack from real turns");
assert(app.includes("Evidence pack"), "Agent UI must show conversation evidence pack details");
assert(server.includes("function agentCapabilityRegistryState"), "Agent command center must expose a technical capability registry");
assert(server.includes("agent.capability_registry"), "Voice agent must answer technical capability registry questions");
assert(app.includes("Capability registry"), "Agent UI must show the capability registry");
assert(server.includes("function jarvisReadinessModel"), "Agent command center must track the six-part Jarvis readiness model");
assert(server.includes("agent.jarvis_readiness"), "Voice agent must answer Jarvis readiness questions");
assert(app.includes("Jarvis production track"), "Agent UI must show Jarvis production track readiness");
assert(server.includes("function startJarvisMode"), "Agent command center must start supervised Jarvis mode missions");
assert(server.includes("agent.jarvis_mode_staged"), "Voice agent must stage Jarvis mode missions before execution");
assert(app.includes("Jarvis session"), "Agent UI must show active Jarvis session state");
assert(server.includes("lastRecommendedAction"), "Conversation brain must remember the last recommended next action");
assert(server.includes("agent.conversation_brain_answered"), "Conversation brain must create audit evidence for open-ended answers");
assert(app.includes("function isNaturalConversationCommand"), "Microphone commands should route natural speech to the conversation brain");
assert(app.includes("function renderLiveVoiceSuggestions"), "Voice UI must render live next-phrase suggestions");
assert(app.includes("Active voice mission"), "Agent UI must show active voice mission progress");
assert(app.includes("voiceRecognition.continuous = voiceFirstMode"), "Voice-first mode should keep listening across conversation turns");
assert(app.includes("Conversation learning"), "Agent UI must show conversation learning progress");
assert(server.includes("function moduleGreetingResponse"), "Agent needs module-specific conversational greetings");
assert(server.includes("trade.conversational_greeting"), "AgriTrade should greet users by name and speak as a module");
assert(server.includes("trade.module_introduction"), "AgriTrade should explain the platform conversationally");
assert(server.includes("conversation.language_changed"), "Voice agent should change language by natural command");
assert(server.includes("\"es\""), "Backend should allow Spanish language routing");
assert(server.includes("function isLanguageCommand"), "Backend should detect natural AgriTrade language commands");
assert(server.includes("\"kenya\": \"sw\""), "Backend should map country language voice commands");
assert(server.includes("kiingereza"), "Backend should recognize localized language names");
assert(app.includes("es: \"es-ES\""), "Frontend voice locale map should include Spanish");
assert(app.includes("function refreshVoiceForLanguageChange"), "Frontend should refresh app microphone locale after language changes");
assert(app.includes("Voice language is now"), "App should show language-specific voice status");
assert(app.includes("Hey AgriTrade, change language to Spanish"), "Voice help should include AgriTrade language command");
assert(app.includes("what can I say in telehealth"), "Voice help should include module-specific prompts");
assert(app.includes("Good morning AgriNexus"), "Voice help should include daily operator briefing");
assert(app.includes("what just happened"), "Voice help should include workflow outcome summary");
assert(app.includes("run investor voice demo"), "Voice help should include investor voice demo");
assert(app.includes("Hey AgriTrade, speak French"), "Voice help should include natural language switching");
assert(app.includes("Hey AgriTrade, switch to Kiswahili"), "Voice help should include Kiswahili switching");
assert(app.includes("Hey AgriTrade, use Arabic"), "Voice help should include Arabic switching");
assert(server.includes("health.public_health_risk"), "Telehealth needs public-health outbreak risk briefing");
assert(server.includes("map.live_route_tracking"), "Agent needs a live route tracking response");
assert(server.includes("trade.operational_efficiency"), "AgriTrade needs operational efficiency intelligence");
assert(server.includes("tradeEfficiencyReviews"), "AgriTrade efficiency reviews must persist as workflow evidence");
assert(server.includes("trade.operational_communication"), "AgriTrade needs operational communication intelligence");
assert(server.includes("tradeCommunicationBriefs"), "AgriTrade communication briefs must persist as workflow evidence");
assert(app.includes("function startLiveRouteTracking"), "Frontend needs browser GPS live route tracking");
assert(app.includes("watchPosition"), "Live route tracking must use device geolocation");
assert(app.includes("check outbreak risk in Congo"), "Voice help needs outbreak risk command guidance");
assert(app.includes("track my route in real time"), "Voice help needs live route tracking command guidance");
assert(app.includes("improve operational efficiency"), "Voice help needs AgriTrade operational efficiency guidance");
assert(app.includes("prepare a buyer update"), "Voice help needs AgriTrade buyer update guidance");
assert(app.includes("brief the logistics team"), "Voice help needs AgriTrade logistics communication guidance");
assert(server.includes("lowTechBehaviors"), "Behavior model must explicitly support low-tech users");
assert(server.includes("voice-first, one-step-at-a-time"), "Behavior model must be voice-first and step-by-step");
assert(app.includes("behaviorModel.interactionStyle"), "Dashboard must render the behavior interaction style");
assert(html.includes("Conversation-first guide"), "Dashboard should present AgriNexus as conversation-first");
assert(app.includes("function voicePhrase"), "Session prompts should be sample phrases instead of extra buttons");
assert(server.includes("conversation.progress_summary"), "Voice agent must summarize user progress");
assert(server.includes("conversation.investor_presentation_mode"), "Voice agent must support demo narrator mode");
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
assert(server.includes("function startConversationalIntake"), "Backend needs guided conversational intake sessions");
assert(server.includes("function applyConversationalIntake"), "Conversational intake must convert remembered answers into real workflows");
assert(server.includes("agent.conversational_intake_completed"), "Completed conversational intake should create evidence");
assert(server.includes("function contextualVoiceCommand"), "Voice agent needs contextual follow-up memory");
assert(server.includes("function moduleVoiceHelpResponse"), "Voice agent needs module-specific spoken help");
assert(server.includes("function voiceRecoveryResponse"), "Voice agent needs graceful unclear-command recovery");
assert(server.includes("function voiceInvestorDemo"), "Voice agent needs investor demo mode");
assert(server.includes("function localizedWorkflowPhrase"), "Voice agent needs localized workflow phrase routing");
assert(server.includes("Run multistep voice mission"), "Voice agent needs multistep voice mission confirmation");
assert(server.includes("recommendedAction"), "Guided help should use memory-driven next actions");
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
assert(html.includes("app.js?v=voice-language-36"), "Index must force browsers to load the latest voice language code");
assert(sw.includes("agrinexus-pwa-v15"), "Service worker cache must refresh the installed app after voice language updates");
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
