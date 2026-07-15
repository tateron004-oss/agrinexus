"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

const orchestrator = require("../public/nexus-genesis-conversational-mode-orchestrator.js");
const app = read("public/app.js");
const html = read("public/index.html");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const requiredModeIds = [
  "emergency_safety",
  "privacy_sensitive",
  "interruption_turn_taking",
  "repair_correction",
  "exact_confirmation",
  "status_progress",
  "clarification_discovery",
  "source_evidence",
  "workflow_transition",
  "teaching_explanation",
  "professional_depth",
  "advisory_guidance",
  "coaching_guided_problem_solving",
  "collaborative_creation",
  "casual_relational",
  "proactive_permission",
  "closure_continuity",
  "summarization_briefing",
  "handoff_consent",
  "topic_branching",
  "accessibility_adaptation",
  "multilingual_cultural",
  "failure_recovery",
  "memory_preference",
  "multi_intent_ordering",
  "presence_greeting",
  "open_curiosity",
  "emotional_tone"
];

const requiredRails = [
  "Conversational Mode Selection Integrity",
  "Blended Mode Coordination",
  "Repair and Correction Integrity",
  "Uncertainty and Evidence Honesty",
  "Turn-Taking and Interruption Integrity",
  "Privacy-Aware Modality Switching",
  "Status and Progress Truth",
  "Summarization Fidelity",
  "Handoff Consent and Context Minimization",
  "Proactive Assistance Permission",
  "Closure and Continuity Truth",
  "Topic Branch Isolation",
  "Emotional Tone Safety",
  "Failure Recovery Conversation",
  "Accessibility Adaptation",
  "Professional Depth Adaptation",
  "Multi-Intent Ordering",
  "Conversational Memory Preference Integrity"
];

assert(Array.isArray(orchestrator.BEHAVIOR_REGISTRY), "behavior registry must export an array");
assert(orchestrator.BEHAVIOR_REGISTRY.length >= requiredModeIds.length, "behavior registry should cover the natural assistant modes");
for (const modeId of requiredModeIds) {
  const mode = orchestrator.BEHAVIOR_REGISTRY.find((item) => item.id === modeId);
  assert(mode, `missing behavior mode ${modeId}`);
  [
    "id",
    "name",
    "purpose",
    "exampleSignals",
    "compatibleModes",
    "incompatibleModes",
    "priority",
    "requiredContext",
    "responseConstraints",
    "safetyConstraints",
    "privacyConstraints",
    "sourceBehavior",
    "workflowBehavior",
    "voiceBehavior",
    "writtenInputBehavior",
    "completionCondition",
    "repairBehavior",
    "fallbackBehavior"
  ].forEach((key) => assert(Object.prototype.hasOwnProperty.call(mode, key), `${modeId} must declare ${key}`));
}

for (const rail of requiredRails) {
  assert(orchestrator.TRUST_RAILS.includes(rail), `missing trust rail ${rail}`);
}

const scenarios = [
  ["Hello Nexus.", "presence_greeting", "direct_conversational_response"],
  ["Nexus, can you hear me?", "presence_greeting", "direct_conversational_response"],
  ["Are you listening?", "presence_greeting", "direct_conversational_response"],
  ["What can you do?", "presence_greeting", "direct_conversational_response"],
  ["Tell me about yourself.", "presence_greeting", "direct_conversational_response"],
  ["Talk to me.", "casual_relational", "direct_conversational_response"],
  ["I had a difficult morning.", "casual_relational", "direct_conversational_response"],
  ["Why are crop yields changing?", "open_curiosity", "continue_existing_router"],
  ["Show me the sources.", "source_evidence", "direct_conversational_response"],
  ["Which crop is affected?", "open_curiosity", "continue_existing_router"],
  ["What are my choices?", "advisory_guidance", "direct_conversational_response"],
  ["Give me a professional analysis of hypertension RPM.", "professional_depth", "direct_conversational_response"],
  ["Teach me step by step.", "teaching_explanation", "direct_conversational_response"],
  ["Help me prepare for my appointment.", "coaching_guided_problem_solving", "direct_conversational_response"],
  ["Make it simpler.", "collaborative_creation", "direct_conversational_response"],
  ["Turn this into a checklist.", "workflow_transition", "direct_conversational_response"],
  ["Send this to my doctor.", "exact_confirmation", "continue_existing_router"],
  ["What is blocked?", "status_progress", "direct_conversational_response"],
  ["That's not what I meant.", "repair_correction", "direct_conversational_response"],
  ["Wait.", "interruption_turn_taking", "direct_conversational_response"],
  ["I'm not certain.", "source_evidence", "direct_conversational_response"],
  ["This is an emergency.", "emergency_safety", "direct_conversational_response"],
  ["My account number is private.", "privacy_sensitive", "direct_conversational_response"],
  ["Speak slower.", "accessibility_adaptation", "direct_conversational_response"],
  ["Explain this in my language.", "multilingual_cultural", "direct_conversational_response"],
  ["Summarize this for my doctor.", "summarization_briefing", "direct_conversational_response"],
  ["Prepare a handoff summary for the pharmacist.", "handoff_consent", "direct_conversational_response"],
  ["Would you like me to remind you later?", "proactive_permission", "direct_conversational_response"],
  ["That's all.", "closure_continuity", "direct_conversational_response"],
  ["Go back to the crop issue.", "topic_branching", "direct_conversational_response"],
  ["The microphone failed.", "failure_recovery", "direct_conversational_response"],
  ["Remember that I prefer simple explanations.", "memory_preference", "direct_conversational_response"],
  ["Show sources, explain the second one, and turn it into a briefing.", "source_evidence", "direct_conversational_response"]
];

for (const [prompt, expectedPrimary, expectedStrategy] of scenarios) {
  const result = orchestrator.orchestrate(prompt, { preferredLanguage: "en", userName: "Ron" });
  assert.equal(result.primaryMode.id, expectedPrimary, `${prompt} should select ${expectedPrimary}`);
  assert.equal(result.responseStrategy, expectedStrategy, `${prompt} should use ${expectedStrategy}`);
  assert.equal(result.noExecutionAuthorized, true, `${prompt} must not authorize execution`);
  assert.equal(result.fakeCitationsAllowed, false, `${prompt} must not allow fake citations`);
  assert.equal(result.workflowOfferedNotForced, true, `${prompt} must keep workflows optional`);
}

for (const prompt of ["What is Nexus Genesis | AgriNexus?", "Change language to Spanish", "Speak French"]) {
  const result = orchestrator.orchestrate(prompt, { preferredLanguage: "en", userName: "Ron" });
  assert.equal(result.responseStrategy, "continue_existing_router", `${prompt} must pass through to existing router/confirmation behavior`);
}

const domainPrompts = [
  "Nexus, help with diabetes intake.",
  "Professional pharmacy counseling guide.",
  "My maize is turning yellow.",
  "Open training support.",
  "Find workforce coaching.",
  "Prepare a buyer message.",
  "Where is my shipment?",
  "Plan a field visit route.",
  "Drone imagery failed.",
  "Prepare a WhatsApp message.",
  "Grandma needs simple daily help.",
  "Caregiver summary for tomorrow.",
  "Community service handoff.",
  "What can I do about hypertension?",
  "Explain this to a senior in simple words."
];

for (const prompt of domainPrompts) {
  const result = orchestrator.orchestrate(prompt, { preferredLanguage: "en" });
  assert(result.primaryMode.id, `${prompt} should produce a primary mode`);
  assert(result.selectedModeIds.length >= 1, `${prompt} should produce selected modes`);
  assert.equal(result.noExecutionAuthorized, true, `${prompt} must remain no-execution by default`);
}

assert(html.includes("/nexus-genesis-conversational-mode-orchestrator.js?v=nexus-genesis-conversational-mode-orchestrator-2"), "Standard User page must load the shared orchestrator before app.js");
assert(server.includes('require("./public/nexus-genesis-conversational-mode-orchestrator.js")'), "server must import the shared orchestrator");
assert(server.includes("conversationalModeOrchestrator = nexusGenesisConversationalModeOrchestrator.orchestrate"), "server must evaluate every agent command through orchestrator");
assert(server.includes("companionDirectConversationIntent(conversationalModeOrchestrator)"), "server must normalize direct conversational orchestrator intents");
assert(server.includes('intent: directConversation.intent'), "server must return the normalized direct conversational intent");
assert(server.includes("selectedConversationalModes"), "server must attach selected conversational modes to metadata");
assert(server.includes("staleConfirmationInvalidated: true"), "repair behavior must invalidate stale confirmation");
assert(server.includes("db.profile.agentPendingAction = null"), "repair behavior must clear pending action");
assert(server.includes("providerHandoffAuthorized: false"), "direct conversational response must block provider handoff");
assert(server.includes("fakeCitationsAllowed: false"), "direct conversational response must block fake citations");
assert(server.includes("noExecutionAuthorized: true"), "direct conversational response must block execution");
assert(app.includes("handleNexusPresenceCommandSendSubmit"), "Standard User typed command path must remain active");
assert(app.includes("runBackendAgentCommand"), "voice/backend command path must remain active");
assert(app.includes("handleNexusConversationWorkflowTransitionCommand"), "existing workflow transition engine must remain preserved");
assert(app.includes("handleNexusVoiceTroubleshootingCommand"), "existing voice-status behavior must remain preserved");
assert(!html.includes("data-nexus-genesis-orb-entry"), "orb must remain non-clickable through the old entry marker");

assert.equal(
  pkg.scripts["qa:nexus-genesis-conversational-mode-orchestrator"],
  "node scripts/nexus-genesis-conversational-mode-orchestrator-qa.js",
  "package alias must exist"
);
assert(qaSuite.includes("scripts/nexus-genesis-conversational-mode-orchestrator-qa.js"), "qa-suite must include the orchestrator QA");

console.log("Nexus Genesis conversational mode orchestrator QA passed.");
