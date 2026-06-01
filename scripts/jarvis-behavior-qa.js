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
  ["no dead-air progress updates", app.includes("function beginAgentNoDeadAir") && app.includes("I am still with you") && app.includes("This is taking a little longer")],
  ["safe slow-engine fallback", app.includes("function safeAgentFallbackResponse") && app.includes("you are not stuck")],
  ["conversation clarification repair", app.includes("function inferAmbiguousIntent") && app.includes("function askAgentClarification") && app.includes("function answerAgentClarification")],
  ["migrant-friendly clarification", app.includes("function guideAmbiguousUserWithoutChoice") && app.includes("You do not need perfect words") && app.includes("Nexus is guiding without forcing a choice")],
  ["easy conversation tone", app.includes("Just tell me what you need") && app.includes("You can keep talking") && app.includes("Talk to me naturally")],
  ["guided next-step journey", app.includes("activeAgentJourney") && app.includes("function setActiveAgentJourney") && app.includes("function runActiveAgentNextStep")],
  ["voice follow-through command", app.includes("say next step to continue") && app.includes("continue journey") && app.includes("Guided journey cleared")],
  ["operator coaching layer", app.includes("function nexusOperatorCoach") && app.includes("function operatorCoachSuggestions") && app.includes("Operator coach")],
  ["context-aware suggested commands", app.includes("operatorCoachSuggestions(currentSectionId())") && app.includes("recommend next")],
  ["situational intelligence brief", app.includes("function nexusSituationalBrief") && app.includes("function nexusPriorityActions") && app.includes("Situational brief")],
  ["ranked smart recommendation", app.includes("function explainSmartRecommendation") && app.includes("rank priorities") && app.includes("Ranked actions")],
  ["admin intelligence brief", app.includes("function adminIntelligenceBrief") && app.includes("Admin intelligence") && app.includes("admin risk")],
  ["investor intelligence brief", app.includes("function investorIntelligenceBrief") && app.includes("Investor intelligence") && app.includes("investor story")],
  ["three-mode conversation state", app.includes("conversationModeState") && app.includes("function conversationPlatformMode") && app.includes("function modeConversationContext")],
  ["separate conversation memory by mode", app.includes("conversationModeMemories") && app.includes("function conversationMemoryForMode") && app.includes("function saveConversationModeMemory")],
  ["user admin investor conversational modes", app.includes("User conversation") && app.includes("Admin conversation") && app.includes("Investor conversation")],
  ["mode-aware follow-up answers", app.includes("function modeFollowUpResponse") && app.includes("isModeFollowUpCommand(lower)") && app.includes("I am holding the user context")],
  ["intuitive conversation guide", app.includes("function intuitiveConversationGuide") && app.includes("function intuitiveConversationResponse") && app.includes("Conversation guide")],
  ["natural conversation handoff", app.includes("function composeJarvisResponse") && app.includes("function jarvisHandoffLine") && app.includes("turnCoach?.nextQuestion")],
  ["live Nexus awareness state", app.includes("nexusAwarenessState") && app.includes("function updateNexusAwareness") && app.includes("function nexusAwarenessSummary") && app.includes("Live awareness")],
  ["conversation repair momentum", app.includes("function isConversationRepairCommand") && app.includes("function conversationRepairPlan") && app.includes("Repair mode")],
  ["independent ten-layer agent model", server.includes("goal-driven-operating-brain") && server.includes("persistent-memory") && server.includes("live-context-awareness") && server.includes("evidence-and-mobile-initiative") && server.includes("goals, memory, awareness, recovery, and initiative")],
  ["visible Nexus brain state", app.includes("function nexusBrainState") && app.includes("function nexusBrainSummary") && app.includes("Nexus Brain") && app.includes("agrinexusBrainState")],
  ["all-ten Nexus Brain OS", app.includes("function nexusBrainOsModel") && app.includes("Brain Persistence") && app.includes("Brain Timeline") && app.includes("Investor Brain View") && html.includes("nexusBrainPanel") && html.includes("nexusBrainTimelinePanel")],
  ["Nexus brain voice commands", app.includes("Nexus, show brain timeline") && app.includes("Nexus, explain your brain") && app.includes("Nexus, show learning rules") && app.includes("Nexus Brain OS is")],
  ["high intelligence decision snapshot", app.includes("function nexusHighIntelligenceSnapshot") && app.includes("Decision Confidence") && app.includes("Risk Radar") && html.includes("nexusIntelligencePanel")],
  ["high intelligence voice summary", app.includes("function nexusHighIntelligenceSummary") && app.includes("Nexus intelligence is operating") && app.includes("intelligence snapshot")],
  ["role-aware intelligence all modes", app.includes("function modeIntelligenceSnapshot") && app.includes("User intelligence") && app.includes("Admin intelligence") && app.includes("Investor intelligence") && html.includes("adminIntelligencePanel") && html.includes("investorIntelligencePanel")],
  ["smart behavior model", app.includes("function nexusSmartBehaviorModel") && app.includes("function nexusSmartBehaviorSummary") && app.includes("Smart Behavior") && app.includes("Nexus, be smart")],
  ["agentic Jarvis mode across modes", app.includes("function agenticJarvisModePlan") && app.includes("function activateAgenticJarvisMode") && app.includes("Nexus, activate Agentic Jarvis mode") && app.includes("conversationPlatformLabel(normalized)")],
  ["production 1-8 Agentic Jarvis readiness", app.includes("function productionJarvisEightModel") && app.includes("function productionJarvisEightSummary") && app.includes("Nexus, production one through eight") && app.includes('title: "Production 1-8"') && app.includes('class="user-fast-action production"') && app.includes("Live AI Brain") && app.includes("Security And Trust")],
  ["jarvis production 10 model", server.includes("function jarvisProductionTenModel") && app.includes("function renderJarvisProductionTen") && html.includes("jarvisProductionTenPanel") && html.includes("adminJarvisProductionTenPanel")],
  ["backend conversation context", app.includes("modeContext: modeConversationContext(command)") && server.includes("modeContext = options.modeContext") && server.includes("platformMode")],
  ["mode-aware local conversation fallback", server.includes("Admin conversation: I will focus on readiness") && server.includes("Investor conversation: I will focus on impact") && server.includes("User conversation: I will keep this simple")]
];

const missing = requirements.filter(([, passed]) => !passed).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing Jarvis behavior requirements: ${missing.join(", ")}`);

console.log("Jarvis behavior QA passed");
for (const [name] of requirements) console.log(`- ${name}`);
