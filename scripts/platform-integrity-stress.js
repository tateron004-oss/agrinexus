const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const html = read("public/index.html");
const styles = read("public/styles.css");
const sw = read("public/sw.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));

function requireMarkers(label, haystack, markers) {
  const missing = markers.filter(marker => !haystack.includes(marker));
  assert.equal(missing.length, 0, `${label} missing:\n- ${missing.join("\n- ")}`);
}

function forbidMarkers(label, haystack, markers) {
  const present = markers.filter(marker => haystack.includes(marker));
  assert.equal(present.length, 0, `${label} should not include:\n- ${present.join("\n- ")}`);
}

requireMarkers("1. live browser QA and cache freshness", html + sw + app + JSON.stringify(pkg.scripts), [
  "nexus-behavior-173",
  "agrinexus-pwa-v153",
  "AGRINEXUS_BUILD_VERSION",
  "AGRINEXUS_PWA_CACHE_VERSION",
  "controllerchange",
  "app:behavior-audit",
  "production:clickthrough",
  "stabilization:gate"
]);

requireMarkers("2. voice behavior stress controls", app, [
  "voiceDemoQuietMode",
  "function disableNexusVoiceForDemo",
  "function enableNexusVoiceForDemo",
  "function isNexusVoiceOffCommand",
  "function isNexusVoiceOnCommand",
  "Nexus, go quiet",
  "Nexus, turn voice back on",
  "function interruptNexusSpeech",
  "function resetNexusForNextPrompt",
  "voiceFirstMode",
  "voiceAutoRestart"
]);

requireMarkers("3. language consistency", app + server, [
  "function changeLanguageByVoice",
  "function isUniversalLanguageCommand",
  "function normalizeLocalizedVoiceCommand",
  "function localizedVoiceSuggestionItems",
  "targetLanguage: languageCode()",
  "alreadyTranslated: result.metadata?.translatedResponse === true",
  "OPENAI_TRANSLATION_MODEL",
  "[\"fr\", \"French\"]",
  "[\"sw\", \"Kiswahili\"]",
  "[\"ar\", \"Arabic\"]",
  "[\"es\", \"Spanish\"]"
]);

requireMarkers("4. mobile layout and grandma mode containment", app + styles + html, [
  "function renderUserWorkspace",
  "function renderUserProcessScreen",
  "function renderUserAccessibilityPanel",
  "user-caption-panel",
  "topSettingsClose",
  "user-module-close",
  "overflow-wrap: break-word",
  "word-break: normal",
  "max-height: calc(100dvh - 16px)",
  "body.user-mode"
]);

requireMarkers("5. role separation", app + server, [
  "function defaultExperienceMode",
  "function applyRoleNavigation",
  "role.includes(\"standard\") || role.includes(\"user\")",
  "experienceMode === \"user\"",
  "Standard User",
  "Investor",
  "Admin",
  "Only an existing Admin can run this workflow"
]);

requireMarkers("6. persistent memory behavior", app + server, [
  "function nexusMemoryProfile",
  "function nexusContextMemoryModel",
  "agrinexusContextMemory",
  "conversationMemoryForMode",
  "moduleMemory",
  "userNeeds",
  "advisorHistory",
  "agent.memory_retrieved",
  "memory-summary"
]);

requireMarkers("7. failure recovery and no-dead-air handling", app + server, [
  "function requestWithTimeout",
  "Nexus timed out waiting for the live engine",
  "function safeAgentFallbackResponse",
  "you are not stuck",
  "function voiceErrorRecovery",
  "function guideAmbiguousUserWithoutChoice",
  "You do not need perfect words",
  "function beginAgentNoDeadAir",
  "I am still with you"
]);

requireMarkers("8. demo path alignment", app + server + html, [
  "function platformIntegrityStressChecklist",
  "function platformIntegrityStressSummary",
  "Nexus, run system integrity check",
  "run investor voice demo",
  "function runLiveInvestorDemoMode",
  "/api/demo/investor-live",
  "Provider Partnership Command Center",
  "voiceHelpPanel",
  "allModeVoiceCommandCatalog"
]);

forbidMarkers("user-facing repair controls", app + html + styles, [
  "function repairAppRuntime",
  "data-app-repair",
  "Press Repair App",
  "userRepairStatus"
]);

console.log("Platform integrity stress passed");
console.log("- live browser QA and cache freshness");
console.log("- voice behavior stress controls");
console.log("- language consistency");
console.log("- mobile layout and grandma mode containment");
console.log("- role separation");
console.log("- persistent memory behavior");
console.log("- failure recovery");
console.log("- demo path alignment");
