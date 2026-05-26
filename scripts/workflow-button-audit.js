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
  "globalVoiceFirstBtn",
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
  "data-workforce",
  "data-health",
  "data-ai",
  "data-pay",
  "data-module-test",
  "data-ai-review",
  "data-notify"
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
  ["integrations", "test-all"],
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
assert(app.includes("function runAdminHealthCheckDirect"), "Admin health check top button needs a direct runnable workflow");
assert(app.includes('event.target.closest("#adminHealthCheck")'), "Admin health check button needs delegated click handling");
assert(app.includes("task-chip-action"), "Workspace status chips must render as actionable buttons when they represent workflows");
assert(app.includes("function taskActionAttrs"), "Workspace action chips must preserve workflow/provider/module data attributes");
assert(app.includes('event.target.closest("[data-workflow][data-action]")'), "Dynamic workflow cards and chips need delegated click handling");
assert(app.includes('event.target.closest("[data-module-test]")'), "Module engine test buttons need delegated click handling");
assert(app.includes('event.target.closest("[data-health]")'), "Health action buttons need delegated click handling");
assert(app.includes('event.target.closest("[data-workforce]")'), "Workforce action buttons need delegated click handling");
assert(app.includes('event.target.closest("[data-provider]")'), "Provider chips and OpenAI controls need delegated click handling");

console.log("Workflow button audit passed");
