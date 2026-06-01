const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

const requiredStaticHandlers = [
  "loginForm",
  "logoutBtn",
  "accessibilityToggle",
  "wowDemoBtn",
  "demoRunBtn",
  "startActiveCourseBtn",
  "completeLessonBtn",
  "quizBtn",
  "certBtn",
  "droneMissionBtn",
  "droneScanBtn",
  "droneInterventionBtn",
  "advanceOrderBtn",
  "agentPlanBtn",
  "agentExecuteBtn",
  "agentBriefingBtn",
  "voiceListenBtn",
  "voiceRunBtn",
  "voiceFirstBtn",
  "voiceSpeakBtn",
  "voiceHelpBtn",
  "globalVoiceFirstBtn",
  "globalVoiceHelpBtn",
  "voiceHelpCloseBtn",
  "jarvisToggle",
  "jarvisListenBtn",
  "jarvisRunBtn",
  "jarvisMissionBtn",
  "jarvisReadBtn",
  "adminHealthCheck",
  "billingCheckoutBtn",
  "startOnboardingBtn",
  "openSupportBtn",
  "inviteSubscriberBtn",
  "aiConsoleRun",
  "workflowClose",
  "workflowConfirm",
  "workflowCancel"
];

const requiredDatasets = [
  "data-section",
  "data-accessibility",
  "data-language",
  "data-learning-access",
  "data-experience-mode",
  "data-workforce",
  "data-health",
  "data-ai",
  "data-pay",
  "data-module-test",
  "data-ai-review",
  "data-notify",
  "data-command-preset",
  "data-pilot-scenario",
  "data-persona",
  "data-simple-action",
  "data-user-voice-action",
  "data-caption-action",
  "data-mobile-permission",
  "data-mobile-ask",
  "data-close-workflow"
];

for (const id of requiredStaticHandlers) {
  assert(html.includes(`id="${id}"`), `Missing button/control #${id}`);
  assert(app.includes(`#${id}`) || app.includes(`"${id}"`) || app.includes(`'${id}'`), `No app handler reference for #${id}`);
}

for (const dataset of requiredDatasets) {
  const camel = dataset
    .replace("data-", "")
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  assert(html.includes(dataset), `Missing ${dataset} controls`);
  assert(app.includes(`dataset.${camel}`) || app.includes(`[${dataset}]`), `No app handler reference for ${dataset}`);
}

const buttonTags = [
  ...html.matchAll(/<button\b[^>]*>/g),
  ...app.matchAll(/<button\b[^>]*>/g)
].map(match => match[0]);

const knownButtonSignals = [
  "type=\"submit\"",
  "data-",
  "id=\"",
  "class=\"primary",
  "class=\"ghost",
  "class=\"course",
  "class=\"catalog-lesson",
  "class=\"apply",
  "class=\"order",
  "class=\"provider-test",
  "class=\"dashboard-jump",
  "class=\"task-chip-action",
  "class=\"simple-action"
];

const inertButtons = buttonTags.filter(tag => !knownButtonSignals.some(signal => tag.includes(signal)));
assert.deepStrictEqual(inertButtons, [], `Every button must expose a handler signal. Inert buttons: ${inertButtons.join(" | ")}`);

const staticButtonDataAttrs = new Set();
for (const tag of html.matchAll(/<button\b[^>]*>/g)) {
  for (const attr of tag[0].matchAll(/\s(data-[\w-]+)(?:=|\s|>)/g)) staticButtonDataAttrs.add(attr[1]);
}
for (const dataset of staticButtonDataAttrs) {
  const camel = dataset
    .replace("data-", "")
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  assert(
    app.includes(`dataset.${camel}`) || app.includes(`[${dataset}]`) || app.includes(`closest("[${dataset}`) || app.includes(dataset),
    `No delegated handler coverage found for ${dataset}`
  );
}

const workflowActions = [
  ["learning", "start"],
  ["learning", "lesson"],
  ["workforce", "build-profile"],
  ["workforce", "apply-role"],
  ["workforce", "interview"],
  ["workforce", "mentor"],
  ["workforce", "shift"],
  ["health", "intake"],
  ["health", "representative"],
  ["health", "safety"],
  ["health", "careplan"],
  ["health", "accessibility"],
  ["health", "caption"],
  ["health", "caregiver"],
  ["health", "consent"],
  ["health", "vitals"],
  ["health", "referral"],
  ["health", "followup"],
  ["trade", "order"],
  ["trade", "advance"],
  ["trade", "wallet"],
  ["trade", "buyer-message"],
  ["trade", "buyer-whatsapp"],
  ["trade", "buyer-sms"],
  ["trade", "drone-plan"],
  ["trade", "drone"],
  ["trade", "drone-intervention"],
  ["ai", "command"],
  ["ai", "copilot"],
  ["ai", "tutor"],
  ["ai", "quizgen"],
  ["ai", "workforce-coach"],
  ["ai", "interview-prep"],
  ["ai", "triage"],
  ["ai", "trade-advisor"],
  ["ai", "price"],
  ["ai", "route"],
  ["ai", "inspector"],
  ["ai", "orchestrate"],
  ["integrations", "test-all"],
  ["communications", "learning-chat"],
  ["communications", "learning-sms"],
  ["communications", "learning-whatsapp"],
  ["communications", "workforce-chat"],
  ["communications", "workforce-sms"],
  ["communications", "workforce-whatsapp"],
  ["communications", "health-chat"],
  ["communications", "health-sms"],
  ["communications", "health-whatsapp"],
  ["communications", "provider-chat"],
  ["communications", "provider-sms"],
  ["communications", "provider-whatsapp"],
  ["partnership", "telehealth"],
  ["partnership", "workforce"],
  ["partnership", "learning"],
  ["partnership", "drone"],
  ["partnership", "trade"],
  ["partnership", "communications"],
  ["onboarding", "start"],
  ["support", "ticket"],
  ["subscriber", "invite"],
  ["admin", "health-check"],
  ["profile", "open"]
];

for (const [workflow, action] of workflowActions) {
  assert(app.includes(`workflow === "${workflow}"`) || app.includes(`${workflow}`), `Missing workflow branch for ${workflow}`);
  assert(app.includes(`"${action}"`) || app.includes(`'${action}'`), `Missing workflow action ${workflow}:${action}`);
}

assert(app.includes("/api/agent/command"), "Voice assistant must use backend command endpoint");
assert(app.includes("/api/voice/transcribe"), "Voice assistant must record STT sessions");
assert(app.includes("/api/voice/speak"), "Voice assistant must record TTS sessions");
assert(app.includes('event.target.closest("[data-voice-example]")'), "Ask AgriNexus quick command examples need delegated click handling");
assert(app.includes("function runVoiceExample"), "Ask AgriNexus examples need a shared runnable workflow handler");
assert(app.includes("function voiceCommandGroups"), "Voice command help needs grouped non-technical command guidance");
assert(app.includes("function voiceCommandButton"), "Voice command help buttons must render translated labels while preserving runnable commands");
assert(app.includes("function normalizeLocalizedVoiceCommand"), "Voice command help needs localized spoken command normalization");
assert(app.includes("function openVoiceHelp"), "Voice command help needs an opener wired to Ask AgriNexus");
assert(html.includes("voiceHelpPanel"), "Voice command help panel must exist in the global assistant");
assert(app.includes('"Nexus, show voice help"'), "Voice command help must include a spoken self-discovery command");
assert(app.includes('"Nexus, show voice help":'), "Voice command help command needs translated labels");
assert(html.includes("productionOperationsPlan"), "Admin control room must show the 10 production workstreams");
assert(app.includes("function runAdminHealthCheckDirect"), "Admin health check top button needs a direct runnable workflow");
assert(app.includes('event.target.closest("#adminHealthCheck")'), "Admin health check button needs delegated click handling");
assert(app.includes('event.target.closest("#liveServiceCheckBtn")'), "Admin live service check button needs delegated click handling");
assert(app.includes('event.target.closest("#addAdminUserBtn")'), "Admin add-admin button needs delegated click handling");
assert(app.includes('event.target.closest("#addTestUserBtn")'), "Admin add-user button needs delegated click handling");
assert(app.includes("function adminIntelligenceBrief"), "Admin mode needs intelligence summary wiring");
assert(app.includes("Admin Operator"), "Admin mode needs mode-aware assistant behavior");
assert(app.includes("body.classList.toggle(\"admin-mode\""), "Admin mode class must be applied for UI fixes");
assert(app.includes("body.classList.toggle(\"investor-mode\""), "Investor mode class must be applied for UI fixes");
assert(app.includes("body.admin-mode .user-caption-panel") || fs.readFileSync(path.join(root, "public", "styles.css"), "utf8").includes("body.admin-mode .user-caption-panel"), "Admin mode needs contained voice captions");
assert(app.includes("body.investor-mode .user-caption-panel") || fs.readFileSync(path.join(root, "public", "styles.css"), "utf8").includes("body.investor-mode .user-caption-panel"), "Investor mode needs contained voice captions");
assert(app.includes("function investorIntelligenceBrief"), "Investor mode needs intelligence summary wiring");
assert(app.includes("Investor Presenter"), "Investor mode needs mode-aware assistant behavior");
assert(app.includes("function runLiveInvestorDemoMode"), "Investor mode needs live demo runner wiring");
assert(app.includes('event.target.closest("#liveInvestorDemoBtn")') || app.includes("liveInvestorDemoBtn"), "Investor live demo button needs click handling");
assert(app.includes("function openHealthWorkflow"), "Telehealth small workflow buttons need a dedicated opener with status feedback");
assert(html.includes("healthActionStatus"), "Telehealth workflow buttons need visible status feedback");
assert(app.includes("task-chip-action"), "Workspace status chips must render as actionable buttons when they represent workflows");
assert(app.includes("function taskActionAttrs"), "Workspace action chips must preserve workflow/provider/module data attributes");
assert(app.includes("function defaultWorkflowAction"), "Dashboard task chips need default workflow actions when only a module is known");
assert(app.includes('event.target.closest("[data-workflow][data-action]")'), "Dynamic workflow cards and chips need delegated click handling");
assert(app.includes("runWorkflowAction(workflowButton.dataset.workflow, workflowButton.dataset.action, workflowButton)"), "Delegated workflow buttons need workflow fallback handling");
assert(app.includes('event.target.closest("[data-module-test]")'), "Module engine test buttons need delegated click handling");
assert(app.includes('event.target.closest("[data-health]")'), "Health action buttons need delegated click handling");
assert(app.includes('event.target.closest("[data-workforce]")'), "Workforce action buttons need delegated click handling");
assert(app.includes('event.target.closest("[data-provider]")'), "Provider chips and OpenAI controls need delegated click handling");
assert(html.includes("Provider Partnership Command Center"), "Integrations needs a provider partnership command center");
assert(app.includes("/api/partnership/create"), "Provider partnership packets need a backend workflow endpoint");

console.log("Workflow button audit passed");
