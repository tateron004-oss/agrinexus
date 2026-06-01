const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");
const manifest = fs.readFileSync(path.join(root, "public", "manifest.webmanifest"), "utf8");
const nativeBridge = fs.readFileSync(path.join(root, "public", "native-bridge.json"), "utf8");

const pages = ["index.html", "status.html", "terms.html", "privacy.html", "refund.html", "manifest.webmanifest", "native-bridge.json", "sw.js", "icons/agri-nexus-icon.svg", "icons/agri-nexus-192.png", "icons/agri-nexus-512.png"];
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
  "addTestUserBtn",
  "addAdminUserBtn",
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
  "liveInvestorDemoBtn",
  "exportEvidenceBtn",
  "dashboardInstallBtn",
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
  "/api/trade/message",
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
  "/api/partnership/create",
  "/api/admin/subscriber",
  "/api/admin/test-user",
  "/api/admin/admin-user",
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
assert(html.includes("Provider Partnership Command Center"), "Integrations must include a provider partnership command center");
assert(server.includes("function createProviderPartnership"), "Backend must create provider partnership packets before live vendors are connected");
assert(server.includes("provider.partnership_packet_created"), "Provider partnership packets must create audit evidence");
assert(app.includes("providerPartnershipPanel"), "Frontend must render the latest provider partnership packets");
assert(app.includes("activeVoiceAudio"), "Voice playback needs a single active audio guard");
assert(html.includes("Buyer-Seller Communication Hub"), "AgriTrade needs a buyer-seller communication hub");
assert(server.includes("function createBuyerSellerMessage"), "Backend needs buyer-seller message thread creation");
assert(server.includes("trade.buyer_seller_message_sent"), "Buyer-seller messages must create provider-ready audit evidence");
assert(server.includes("function sendTwilioMessage"), "SMS and WhatsApp workflows need Twilio delivery routing");
assert(server.includes("TRADE_BUYER_SMS_TO"), "SMS buyer delivery should document the live recipient env var");
assert(server.includes("TRADE_BUYER_WHATSAPP_TO"), "WhatsApp buyer delivery should document the live recipient env var");
assert(html.includes("WhatsApp buyer"), "AgriTrade needs a direct WhatsApp buyer workflow button");
assert(html.includes("SMS buyer"), "AgriTrade needs a direct SMS buyer workflow button");
assert(server.includes("function createCommunicationThread"), "Platform modules need shared two-way communication threads");
assert(server.includes("/api/communications/thread"), "Two-way communication needs a backend endpoint");
assert(app.includes('workflow === "communications"'), "Two-way communication buttons need workflow modal wiring");
assert(html.includes("Learning Communication Desk"), "Learning needs a two-way communication desk");
assert(html.includes("Recruiter Communication Desk"), "Workforce needs a two-way communication desk");
assert(html.includes("Care Communication Desk"), "Telehealth needs a two-way communication desk");
assert(html.includes("Provider Communication Desk"), "Provider operations need a two-way communication desk");
assert(app.includes("buyerSellerThread"), "Frontend must render buyer-seller thread evidence");
assert(app.includes("function stopVoicePlayback"), "Voice playback must be cancellable before starting another response");
assert(html.includes("productionOperationsPlan"), "Admin needs the 10 production workstream panel");
assert(server.includes("function productionOperationsPlan"), "Backend needs a 10 production workstream readiness model");
assert(app.includes("Awaiting human approval"), "AI governance panel must distinguish pending approval from provider errors");
assert(app.includes("Provider error - review required"), "AI governance panel must show true provider errors clearly");
assert(server.includes("speechError"), "Voice speech route must return OpenAI TTS errors for production debugging");
assert(app.includes("OpenAI voice error:"), "Voice UI must show the exact OpenAI TTS error");
assert(app.includes("runJarvisCommand();"), "AgriNexus dock Run button must read the dock command input");
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
assert(server.includes("function impactDashboardModel"), "Backend needs investor impact metrics");
assert(server.includes("function missionTimelineModel"), "Backend needs a real mission timeline model");
assert(server.includes("function evidenceExportPacket"), "Backend needs evidence packet export");
assert(server.includes("/api/demo/investor-live"), "Backend needs live investor guided demo mode");
assert(server.includes("/api/evidence/export"), "Backend needs evidence export endpoint");
assert(html.includes("Rural Impact Metrics"), "Dashboard needs impact metrics panel");
assert(html.includes("Evidence Journey"), "Dashboard needs mission timeline panel");
assert(html.includes("One-Click Investor Walkthrough"), "Dashboard needs live investor walkthrough controls");
assert(html.includes("Phone-Ready Field App"), "Dashboard needs PWA field-app polish panel");
assert(app.includes("function runLiveInvestorDemoMode"), "Frontend needs live investor demo runner");
assert(app.includes("function exportEvidencePacket"), "Frontend needs evidence export runner");
assert(manifest.includes("Live Investor Mode"), "PWA manifest needs investor demo shortcut");
assert(server.includes("function aiOrchestrationReview"), "Backend needs cross-module AI orchestration review");
assert(server.includes("/api/ai/orchestrate"), "AI orchestration needs a backend endpoint");
assert(html.includes("Platform Intelligence Review"), "Agent center needs an AI orchestration review panel");
assert(app.includes("aiOrchestrationPanel"), "Frontend needs to render AI orchestration records");
assert(app.includes("orchestrate: \"Orchestrate next move\""), "AI workflow modal needs orchestration wiring");
assert(server.includes("function intelligentAssistantModel"), "Backend needs the 10-part intelligent assistant model");
assert(server.includes("goal-driven-operating-brain"), "10-part model must include goal-driven operating brain");
assert(server.includes("live-context-awareness"), "10-part model must include live context awareness");
assert(server.includes("provider-independence-layer"), "10-part model must include provider independence");
assert(server.includes("evidence-and-mobile-initiative"), "10-part model must include evidence and mobile initiative");
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
assert(server.includes("function jarvisReadinessModel"), "Agent command center must track the six-part AgriNexus readiness model");
assert(server.includes("agent.agrinexus_readiness"), "Voice agent must answer AgriNexus readiness questions");
assert(app.includes("AgriNexus command track"), "Agent UI must show AgriNexus command track readiness");
assert(server.includes("function startJarvisMode"), "Agent command center must start supervised AgriNexus mode missions");
assert(server.includes("agent.agrinexus_mode_staged"), "Voice agent must stage AgriNexus mode missions before execution");
assert(app.includes("AgriNexus session"), "Agent UI must show active AgriNexus session state");
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
assert(html.includes("addTestUserBtn"), "Admin needs a User-only test login workflow");
assert(app.includes('workflow === "test-user"'), "User-only test login button needs workflow modal wiring");
assert(app.includes("Create a User-only test login"), "User-only test login flow must explain Admin and Investor are not exposed");
assert(server.includes('account.role = "Standard User"'), "Backend must force test logins to Standard User");
assert(server.includes("test_user.created"), "User-only test login must create auth audit evidence");
assert(html.includes("addAdminUserBtn"), "Admin needs an Admin test login workflow");
assert(app.includes('workflow === "admin-user"'), "Admin test login button needs workflow modal wiring");
assert(app.includes("Only an existing Admin can run this workflow"), "Admin login flow must explain admin-only protection");
assert(server.includes('adminAccount.role = "Admin"'), "Backend must force admin test logins to Admin");
assert(server.includes("admin_user.created"), "Admin test login must create auth audit evidence");
assert(html.includes("styles.css?v=nexus-behavior-83"), "Index must force browsers to load the latest Nexus behavior shell");
assert(html.includes("app.js?v=nexus-behavior-83"), "Index must force browsers to load the latest Nexus behavior code");
assert(sw.includes("agrinexus-pwa-v63"), "Service worker cache must refresh the installed app after native voice bridge updates");
assert(html.includes("userWorkspace"), "Dashboard needs a User Workspace for standard users");
assert(html.includes("userMobileDock"), "Legacy mobile dock markup should remain safely hidden for cache compatibility");
assert(html.includes("What Do You Need Help With Today?"), "Dashboard simple start should use user-ready language");
assert(app.includes("function defaultExperienceMode"), "Frontend needs default role-to-experience mode mapping");
assert(app.includes("function applyExperienceMode"), "Frontend needs experience-mode visibility rules");
assert(app.includes("function renderUserWorkspace"), "Frontend needs a guided User Workspace renderer");
assert(app.includes("[data-mobile-section]"), "Frontend needs click handling for the mobile user dock");
assert(app.includes("user-simple-hero"), "Standard User view needs a simple phone-style welcome");
assert(app.includes("How can we help?"), "Standard User view needs short user-ready copy");
assert(app.includes('data-mobile-ask="true"'), "Standard User view needs one clear Ask Nexus button");
assert(app.includes("Talk to Nexus"), "Standard User view needs a plain voice-first help button");
assert(app.includes('{ label: "Map", section: "map"'), "Standard User home should expose Map as a simple service button");
assert(app.includes('{ label: "AI Help", section: "agent"'), "Standard User home should expose AI communication as a simple service button");
assert(!app.includes('{ label: "Me", section: "profile"'), "Standard User home should avoid profile clutter");
assert(app.includes("function renderUserSimpleActiveSection"), "Standard User module pages must collapse into button-only action screens");
assert(app.includes("simpleUserSections"), "Standard User needs simple action definitions for every service section");
assert(app.includes('insertAdjacentHTML("afterbegin"'), "User simple screens must overlay module content instead of deleting backend-bound elements");
assert(app.includes(":scope > .user-simple-module"), "User simple screens must replace only the prior simple overlay");
assert(app.includes("user-module-status"), "User module pages need a contained status/result area");
assert(app.includes("closeAskNexus({ silent: true })"), "User mode section changes should collapse Ask Nexus so it cannot remain half-open");
assert(app.includes("user-module-back"), "User module pages need a clear Back button");
assert(html.includes("userVoiceDock"), "Standard User app needs a compact voice dock");
assert(html.includes("nexusBehaviorStatus"), "Standard User app needs a visible Nexus behavior status");
assert(html.includes('data-user-voice-action="listen"'), "Voice dock needs a speak action");
assert(html.includes('data-user-voice-action="type"'), "Voice dock needs a type action");
assert(html.includes('data-user-voice-action="read"'), "Voice dock needs a read action");
assert(app.includes("pendingGrandmaAction"), "Grandma Mode needs a pending action confirmation state");
assert(app.includes("function renderGrandmaConfirmation"), "Grandma Mode needs a visible yes/no confirmation panel");
assert(app.includes("function simpleUserCommandWorkflow"), "User app buttons need direct workflow routing");
assert(app.includes("function openDefaultUserSectionAction"), "User tabs need to open the first useful action automatically");
assert(app.includes("function renderUserInlineWorkflow"), "User voice workflows can still use inline confirmation cards when appropriate");
assert(app.includes("function openMappedUserWorkflow"), "User tab auto-actions need one shared visual workflow launcher");
assert(app.includes("data-inline-workflow-confirm"), "Inline user workflow needs a visible Yes button");
assert(app.includes("data-inline-workflow-cancel"), "Inline user workflow needs a visible No button");
assert(app.includes("openWorkflowModal(config)"), "User tab workflows must open the full workflow window for testing");
assert(app.includes('$("#workflowModal").classList.remove("hidden")'), "Workflow modal must become visible when opened");
assert(app.includes("closeAskNexus({ silent: true })"), "Workflow windows must close Ask Nexus so workflows never run behind the assistant");
assert(app.includes('row("How this works"'), "Workflow windows need clear user guidance, not just cards");
assert(app.includes("workflowStepHtml"), "Workflow windows need numbered plain-language steps");
assert(app.includes("function learningUserCopy"), "Learning workflows need plain-language user copy");
assert(app.includes("function workforceUserCopy"), "Workforce workflows need plain-language user copy");
assert(app.includes("function tradeUserCopy"), "Trade, buyer, and drone workflows need plain-language user copy");
assert(app.includes("function healthUserCopy"), "Telehealth workflows need plain-language user copy");
assert(app.includes("Start learning"), "Course workflows should use plain user language");
assert(app.includes("Apply for this job"), "Workforce application should use plain user language");
assert(app.includes("Submit my hours"), "Timesheet workflows should use plain user language");
assert(app.includes("Sell my crop"), "Create order should say what the user is actually doing");
assert(app.includes("Talk to my buyer"), "Buyer communication should use plain user language");
assert(app.includes("Check my farm with a drone"), "Drone workflow should use plain user language");
assert(app.includes("Get health help"), "Telehealth intake should use plain user language");
assert(app.includes("function courseSelectOptions"), "Start Course needs a visible course selector");
assert(app.includes("function productSelectOptions"), "Create Order and Drone Scan need visible product selectors");
assert(app.includes("function routeSelectOptions"), "Route workflows need visible route selectors");
assert(html.includes("globalBackBtn"), "Ask Nexus needs a clear Back to app close button");
assert(app.includes("closeAskNexus({ silent: true })"), "User service buttons must clear assistant overlays before opening workflows");
assert(app.includes('const userSection = workflow === "ai" ? "agent" : workflow === "map" ? "map" : workflow'), "User voice workflows must resolve to the visible simple section");
assert(app.includes('experienceMode === "user" && simpleUserSections[userSection]'), "User voice workflows must resolve into the visible user section");
assert(app.includes("eventOrButton?.target?.closest"), "Simple button handler must support delegated clicks");
assert(app.includes("eventOrButton?.currentTarget?.matches"), "Simple button handler must support direct button clicks");
assert(app.includes('lower.includes("help me")'), "Do this/help commands need full workflow routing instead of partial assistant fallback");
assert(app.includes('action: "orchestrate"'), "Do this should open a real AI orchestration workflow");
assert(app.includes('openDefaultAction: experienceMode === "user"'), "User tab clicks must opt into default workflow actions");
assert(app.includes("function learningCertificateWorkflowConfig"), "User app certificate button needs its own certificate workflow instead of course fallback");
assert(app.includes("openWorkflowModal(config)"), "User app mapped workflows must open the real workflow modal");
assert(app.includes('$("#workflowConfirm").onclick'), "Workflow Confirm button needs a direct click handler");
assert(app.includes("Nexus is completing this workflow now."), "Workflow Confirm should show immediate progress feedback");
assert(app.includes("await handleVoiceCommand(button.dataset.simpleCommand)"), "User app conversational buttons must still send commands to Nexus");
assert(app.includes('data-grandma-confirm="yes"'), "Grandma Mode confirmation needs a large Yes button");
assert(app.includes('data-grandma-confirm="no"'), "Grandma Mode confirmation needs a large No button");
assert(app.includes('experienceMode === "user" && sectionId !== "dashboard" && !simpleUserSections[sectionId]'), "User mode must not navigate to blank advanced sections");
assert(app.includes('classList.toggle("user-full-workflow"'), "User mode workflows need a full visible workflow window state");
assert(app.includes('classList.remove("grandma-workflow")'), "User workflow windows must not hide fields in simplified modal state");
assert(app.includes('Choose another button when ready'), "Grandma Mode post-confirm response should be short and contained");
assert(app.includes('$("#workflowTitle").textContent = translateText((experienceMode === "user" && config.userTitle) || config.title || "Workflow")'), "Workflow modal must show the real workflow title");
assert(app.includes('$("#workflowSummary").textContent = translateText((experienceMode === "user" && config.userSummary) || config.summary || "Review this workflow and confirm when ready.")'), "Workflow modal must show the real workflow summary");
assert(app.includes('$("#workflowConfirm").textContent = translateText(config.confirmLabel || "Confirm action")'), "Workflow modal must show the real confirm action");
assert(app.includes('title: "Learn"'), "Grandma Mode sections must use short titles");
assert(app.includes('title: "AI Help"'), "Grandma Mode needs a simple AI communication page");
assert(app.includes('lower.includes("show me jobs")'), "Simple voice buttons must route Find Jobs without API not-found fallthrough");
assert(app.includes('lower.includes("nearest health facility")'), "Simple voice buttons must route facility lookup without API not-found fallthrough");
assert(app.includes('lower.includes("read the current response")'), "Simple voice buttons must read responses without API not-found fallthrough");
assert(app.includes('lower.includes("help me understand the platform")'), "Simple AI Help button must route through the agent instead of a missing endpoint");
assert(app.includes("function isUniversalLanguageCommand"), "Voice language changes must work from every mode");
assert(app.includes("function changeLanguageByVoice"), "Frontend voice layer must change language without module-specific wording");
assert(app.includes("Nexus, change language to French"), "Voice help must explicitly show French language switching");
assert(app.includes("Nexus, change language to Arabic"), "Voice help must explicitly show Arabic language switching");
assert(app.includes("Nexus, change language to Kiswahili"), "Voice help must explicitly show Kiswahili language switching");
assert(app.includes("Nexus, change language to English"), "Voice help must explicitly show English language switching");
assert(app.includes("Nexus, change language to Spanish"), "Voice help must explicitly show Spanish language switching");
assert(app.includes("user-language-panel"), "Standard User app must show a visible language picker");
assert(app.includes('["fr", "French"]'), "Visible language picker must include French");
assert(app.includes('["ar", "Arabic"]'), "Visible language picker must include Arabic");
assert(app.includes("[data-user-language]"), "Visible language picker buttons must have click handling");
assert(styles.includes("body.user-mode .user-language-panel"), "Visible language picker must be styled for app mode");
assert(app.includes("function moduleUseExplanation"), "Voice assistant must explain how to use each major module");
assert(app.includes("AgriNexus is an AI operating platform"), "Voice assistant must explain what AgriNexus is for investors and users");
assert(app.includes('className: "service-learning"'), "Learning action screen needs blue action buttons");
assert(app.includes('className: "service-workforce"'), "Workforce action screen needs green action buttons");
assert(app.includes('className: "service-health"'), "Health action screen needs red action buttons");
assert(app.includes('className: "service-trade"'), "Trade action screen needs gold action buttons");
assert(app.includes("Start Intake"), "Health user page needs a plain action button");
assert(app.includes("Contact Buyer"), "Trade user page needs a plain action button");
assert(app.includes("body.classList.toggle(\"user-mode\""), "Standard User view must rely on role-based UI simplification");
assert(app.includes("function requestProductionMobilePermission"), "User mode needs production mobile permission activation");
assert(app.includes("navigator.mediaDevices.getUserMedia"), "Mobile permissions must request microphone access");
assert(app.includes("Notification.requestPermission"), "Mobile permissions must request notification access");
assert(app.includes("navigator.geolocation.getCurrentPosition"), "Mobile permissions must request location access");
assert(app.includes('role.includes("standard") || role.includes("user")'), "Standard User must be locked into the simplified User mode");
assert(app.includes("const serviceButtons = ["), "Standard User needs button-based service navigation");
assert(app.includes("user-service-buttons"), "User workspace needs visible service buttons");
assert(html.includes("userBackHomeBtn"), "User sections need a clear back-to-home control");
assert(app.includes("function updateUserBackHome"), "Back-to-home button must update when sections change");
assert(app.includes("service-learning"), "User service buttons need section-specific color classes");
assert(styles.includes("body.user-mode .advanced-only"), "User mode must hide advanced dashboard controls");
assert(styles.includes("body.user-mode .investor-only"), "User mode must hide investor panels");
assert(styles.includes("body.user-mode #dashboard > .cards"), "User mode must hide complex dashboard card stacks");
assert(styles.includes("body.user-mode #dashboard > :not(#userWorkspace)"), "User mode must hide every leftover dashboard panel except the button workspace");
assert(styles.includes("body.user-mode .simple-home") && styles.includes("display: none !important"), "User mode should remove the older dashboard choice area completely");
assert(styles.includes("body.user-mode .sidebar"), "User mode must hide tab-style module navigation");
assert(styles.includes(".user-service-buttons"), "User service buttons need dedicated styling");
assert(styles.includes(".user-service-buttons .service-learning"), "Learning button needs color-coded styling");
assert(styles.includes(".user-service-buttons .service-health"), "Health button needs color-coded styling");
assert(styles.includes("body.user-mode .app"), "Standard User mode should render inside a phone-style app shell");
assert(styles.includes("max-width: 460px"), "Phone-style user shell should constrain desktop width");
assert(styles.includes("body.user-mode .user-mobile-dock") && styles.includes("display: none !important"), "Standard User mode must not use bottom navigation buttons");
assert(styles.includes("body.user-mode .sidebar"), "User mode should simplify mobile navigation");
assert(styles.includes(".user-simple-hero"), "User interface needs a compact simple hero");
assert(styles.includes(".user-service-buttons .service-ask"), "Ask Nexus should be a prominent service button");
assert(styles.includes("body.user-mode .user-service-buttons button::before"), "Grandma dashboard buttons need strong color personality accents");
assert(styles.includes("body.user-mode .user-voice-dock"), "User mode needs fixed compact voice controls");
assert(styles.includes("body.user-mode .user-voice-dock #nexusBehaviorStatus"), "User mode voice dock needs contained behavior status styling");
assert(styles.includes("body.user-mode .user-module-status"), "User module status text must be contained");
assert(styles.includes("body.user-mode .section.active") && styles.includes("max-height: calc(100vh - 58px)"), "User mode sections should behave like one-screen task pages");
assert(styles.includes("rgba(255, 211, 86"), "Grandma dashboard needs a warm colorful hero");
assert(styles.includes(".user-simple-module"), "Standard User module pages need simple button-only styling");
assert(styles.includes(".section.active:not(#dashboard) > :not(.user-simple-module)"), "Standard User module pages must hide long professional content");
assert(styles.includes(".user-module-buttons .service-workforce"), "Inner workforce action buttons need module color styling");
assert(styles.includes(".user-module-buttons .service-trade"), "Inner trade action buttons need module color styling");
assert(styles.includes(".grandma-confirm-panel"), "Grandma Mode needs high-contrast confirmation styling");
assert(styles.includes(".user-inline-workflow"), "User tab auto-actions need visible inline workflow styling");
assert(styles.includes(".user-inline-workflow-actions"), "Inline workflow confirmation actions need button styling");
assert(styles.includes("body.user-mode #workforce .user-inline-workflow"), "Workforce inline workflow needs dedicated non-partial styling");
assert(styles.includes("font-size: 1.42rem"), "Grandma Mode needs extra-large button text");
assert(app.includes('$("#workflowFields").innerHTML'), "Workflow modal must render editable workflow fields");
assert(app.includes('$("#workflowChecklist").innerHTML'), "Workflow modal must render checklist evidence");
assert(styles.includes("body.user-mode .global-assistant-status"), "Grandma Mode assistant response must stay contained");
assert(styles.includes("body.user-mode #globalVoiceGuide") && styles.includes("display: none !important"), "Standard User mode must hide command example text menus at the bottom");
assert(styles.includes("body.user-mode .global-assistant") && styles.includes("position: fixed") && styles.includes("z-index: 220"), "Ask Nexus must open as a fixed contained user-mode panel");
assert(styles.includes("max-height: calc(100vh - 24px)"), "Ask Nexus user panel must not open as a partial clipped window");
assert(styles.includes("Final assistant containment pass"), "Assistant windows need final anti-clipping containment overrides");
assert(styles.includes(".global-assistant:not(.hidden)") && styles.includes(".jarvis-panel:not(.hidden)") && styles.includes(".modal:not(.hidden)"), "All assistant windows must have full open-state containment rules");
assert(styles.includes("min-height: calc(100dvh - 16px)"), "Small-screen assistant windows must open full-height, not as partial sheets");
assert(styles.includes("body.user-mode .global-assistant .field-label") && styles.includes("visibility: visible"), "Ask Nexus must keep its input and controls visible in user mode");
assert(styles.includes("body.user-mode .assistant-close") && styles.includes("white-space: nowrap"), "Ask Nexus close button must never wrap in Standard User mode");
assert(styles.includes("body.user-mode .global-assistant-actions") && styles.includes("grid-template-columns: 1fr 1fr"), "Ask Nexus buttons should be contained in a simple two-button grid");
assert(styles.includes("body.user-mode .toast"), "Grandma Mode toast must wrap inside the phone viewport");
assert(styles.includes("body.user-mode .modal:not(.hidden) .modal-panel"), "User mode workflow modal should use full visible modal sizing");
assert(styles.includes("min-height: calc(100dvh - 16px)"), "Small-screen workflow modal should fill the app screen cleanly");
assert(styles.includes("body.user-mode .user-simple-module *") && styles.includes("white-space: normal"), "Grandma Mode section text must wrap safely");
assert(app.includes("function captureOriginalText"), "Frontend must capture original English text before first translated render");
assert(app.includes("captureOriginalText();"), "Boot must preserve original static text before user-specific language rendering");
assert(app.includes('"#loginView", ".topbar", ".sidebar"'), "Translation pass must include login, topbar, and navigation areas");
assert(app.includes("function isWakePhraseOnly"), "Voice assistant must treat Hey AgriNexus as a wake phrase");
assert(app.includes("function enableHeyAgriNexusMode"), "Voice assistant must enable hands-free wake listening");
assert(app.includes("function nexusMemoryProfile"), "Nexus behavior layer needs persistent user memory context");
assert(app.includes("function nexusBehaviorMode"), "Nexus behavior layer needs mode-specific behavior");
assert(app.includes("function updateNexusBehaviorLayer"), "Nexus behavior layer needs a visible state indicator");
assert(app.includes("function contextualVoiceSuggestions"), "Nexus behavior layer needs contextual voice suggestions");
assert(app.includes("function nexusDeepMemorySignals"), "Jarvis effect needs deeper long-term memory signals");
assert(app.includes("function nexusAutopilotQueue"), "Jarvis effect needs an autopilot mission queue");
assert(app.includes("function providerActionDepthStatus"), "Jarvis effect needs real provider action-depth status");
assert(app.includes("function nexusProactiveAlerts"), "Jarvis effect needs proactive alert generation");
assert(app.includes("function mobilePermissionRecoveryGuide"), "Jarvis effect needs mobile permission recovery guidance");
assert(app.includes("function nativeAppCapabilityMatrix"), "Highest-level app mode needs a native capability matrix");
assert(app.includes("function nativeAppReadinessSummary"), "Highest-level app mode needs a native readiness summary");
assert(html.includes('data-mobile-permission="native-plan"'), "Ask AgriNexus needs a native app plan permission action");
assert(manifest.includes('"share_target"'), "PWA manifest needs share target support");
assert(manifest.includes("Voice Intake"), "PWA manifest needs a voice intake shortcut");
assert(sw.includes("native-bridge.json"), "Service worker should cache the native bridge contract");
assert(nativeBridge.includes('"backgroundAudio"'), "Native bridge must define deeper background audio permission needs");
assert(nativeBridge.includes('"voice.wake"'), "Native bridge must define wake event handling");
assert(app.includes("function interruptNexusSpeech"), "Jarvis effect needs voice interruption handling");
assert(app.includes("visibilitychange"), "Jarvis effect needs background listening recovery when the app returns");
assert(app.includes("agentPerformanceState"), "Jarvis effect needs performance state tracking");
assert(app.includes("function setAgentFastAcknowledgement"), "Jarvis effect needs instant acknowledgement before live engine responses");
assert(app.includes("function agenticBehaviorScorecard"), "Jarvis effect needs an agentic behavior scorecard");
assert(app.includes("function requestWithTimeout"), "Agent commands need timeout safety for slow live engines");
assert(app.includes("function beginAgentNoDeadAir"), "Jarvis effect needs no-dead-air progress updates while engines respond");
assert(app.includes("function safeAgentFallbackResponse"), "Jarvis effect needs safe local fallback language when engines time out");
assert(app.includes("function inferAmbiguousIntent"), "Jarvis effect needs clarification when user intent is vague");
assert(app.includes("function answerAgentClarification"), "Jarvis effect needs follow-up answers to clarification prompts");
assert(app.includes("function setActiveAgentJourney"), "Jarvis effect needs guided next-step journey state");
assert(app.includes("function runActiveAgentNextStep"), "Jarvis effect needs a voice command to continue the current journey");
assert(app.includes("function nexusOperatorCoach"), "Jarvis effect needs context-aware operator coaching");
assert(app.includes("function operatorCoachSuggestions"), "Jarvis effect needs coached voice suggestions");
assert(app.includes("function nexusSituationalBrief"), "Jarvis effect needs a situational intelligence brief");
assert(app.includes("function nexusPriorityActions"), "Jarvis effect needs ranked priority actions");
assert(app.includes("function adminIntelligenceBrief"), "Admin mode needs smart risk and readiness intelligence");
assert(app.includes("function investorIntelligenceBrief"), "Investor mode needs smart evidence and story intelligence");
assert(app.includes("function conversationPlatformMode"), "Voice assistant must know whether it is in user, admin, or investor conversation mode");
assert(app.includes("function conversationMemoryForMode"), "Voice assistant must keep separate memory for user, admin, and investor conversations");
assert(app.includes("function intuitiveConversationGuide"), "Voice assistant must suggest intuitive next phrases by mode and section");
assert(app.includes("function composeJarvisResponse"), "Voice assistant must add natural conversational handoffs when appropriate");
assert(app.includes("function updateNexusAwareness"), "Voice assistant must maintain a live awareness state for Jarvis behavior");
assert(app.includes("function conversationRepairPlan"), "Voice assistant must recover when users are stuck or confused");
assert(app.includes("function nexusBrainState"), "Voice assistant must expose a unified Nexus Brain state");
assert(app.includes("function nexusBrainOsModel"), "Voice assistant needs an all-ten Nexus Brain OS model");
assert(app.includes("function nexusBrainTimeline"), "Nexus Brain OS needs a visible timeline of commands, missions, providers, and memory");
assert(app.includes("function nexusBrainLearningRules"), "Nexus Brain OS needs explicit learning rules");
assert(html.includes("nexusBrainPanel"), "Agent page needs a visible all-ten Nexus Brain OS panel");
assert(html.includes("nexusBrainTimelinePanel"), "Agent page needs a visible Nexus Brain timeline panel");
assert(app.includes("function nexusHighIntelligenceSnapshot"), "Agent page needs a high-intelligence decision snapshot");
assert(app.includes("function nexusHighIntelligenceSummary"), "Voice assistant needs a high-intelligence spoken summary");
assert(html.includes("nexusIntelligencePanel"), "Agent page needs a visible live intelligence panel");
assert(html.includes("nexusIntelligenceBriefPanel"), "Agent page needs a visible next-best-action intelligence brief");
assert(app.includes("Decision Confidence"), "High intelligence snapshot must show decision confidence");
assert(app.includes("Risk Radar"), "High intelligence snapshot must show risk awareness");
assert(app.includes("function modeIntelligenceSnapshot"), "Every workspace mode needs a role-aware intelligence model");
assert(app.includes("function renderModeIntelligence"), "Admin and Investor modes need visible role-aware intelligence rendering");
assert(app.includes("function nexusSmartBehaviorModel"), "Every mode needs a smart behavior rule model");
assert(app.includes("function nexusSmartBehaviorSummary"), "Voice assistant needs to explain smart behavior by role");
assert(app.includes("Smart Behavior"), "Role-aware panels must expose smart behavior as an intelligence item");
assert(app.includes("Nexus, be smart"), "Voice commands must activate smart behavior explanation");
assert(server.includes("function jarvisProductionTenModel"), "Backend needs a Jarvis Production 10 readiness model");
assert(app.includes("function renderJarvisProductionTen"), "Frontend needs to render Jarvis Production 10 readiness");
assert(html.includes("jarvisProductionTenPanel"), "Agent mode needs visible Jarvis Production 10 readiness");
assert(html.includes("adminJarvisProductionTenPanel"), "Admin mode needs visible Jarvis Production 10 readiness");
assert(app.includes("function jarvisProductionTenSummary"), "Voice assistant needs a spoken Jarvis Production 10 summary");
assert(app.includes("how close are we to all 10"), "Voice commands need to answer how close production is to all 10");
assert(html.includes("adminIntelligencePanel"), "Admin mode needs a visible intelligence panel");
assert(html.includes("investorIntelligencePanel"), "Investor mode needs a visible intelligence panel");
assert(app.includes("user-intelligence-card"), "User mode needs a simple visible intelligence card");
assert(styles.includes(".user-intelligence-card"), "User intelligence card must be styled for phone-style mode");
assert(app.includes("Nexus, explain your brain"), "Voice commands must let Nexus explain its brain");
assert(app.includes("Nexus, show brain timeline"), "Voice commands must let Nexus show its brain timeline");
assert(app.includes("function modeFollowUpResponse"), "Voice assistant must answer follow-ups without forcing extra buttons");
assert(app.includes("modeContext: modeConversationContext(command)"), "Voice assistant must send mode context to backend agent reasoning");
assert(server.includes("modeContext = options.modeContext"), "Backend agent reasoning must receive mode-aware conversation context");
assert(server.includes("Admin conversation: I will focus on readiness"), "Local conversation fallback must stay admin-mode aware");
assert(server.includes("Investor conversation: I will focus on impact"), "Local conversation fallback must stay investor-mode aware");
assert(server.includes("User conversation: I will keep this simple"), "Local conversation fallback must stay user-mode aware");
assert(app.includes("I want to sell maize"), "Nexus must route natural trade requests without button hunting");
assert(app.includes("I need a doctor"), "Nexus must route natural telehealth requests without button hunting");
assert(app.includes("Admin Operator"), "Nexus must adapt for Admin mode");
assert(app.includes("Investor Presenter"), "Nexus must adapt for Investor mode");
assert(app.includes("Hey AgriNexus mode is on"), "Voice-first mode needs clear user-facing wake phrase copy");
assert(html.includes("Hey AgriNexus: On"), "Global assistant needs a clear Hey AgriNexus control");
assert(html.includes("Nexus Command Layer"), "Assistant panel should expose the shorter Nexus command name");
assert(html.includes('placeholder="Nexus, run full mission"'), "Assistant input should teach the short Nexus wake command");
assert(app.includes("function welcomeSignedInUser"), "Signed-in users should receive a personalized Nexus welcome");
assert(app.includes("agrinexusWelcome:"), "Personalized welcome should only run once per browser session");
assert(app.includes("function userDisplayName"), "Frontend should use a person display name instead of role labels");
assert(app.includes("roleLike.has(name.toLowerCase())"), "Frontend should avoid calling people by role labels like Standard User");
assert(server.includes("function userDisplayName"), "Backend session briefing should use person display names");
assert(server.includes("Your workspace is ready"), "Backend voice briefing should avoid role labels in user-facing welcome copy");
assert(!server.includes("Your ${role} workspace is ready"), "Backend should not call the user by their role in Ask Nexus briefings");
assert(server.includes("conversation.assistant_alias"), "Backend should answer assistant alias and short-name questions");
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
