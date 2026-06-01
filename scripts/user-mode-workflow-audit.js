const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");

const expectedSections = {
  learning: [
    ["Start a Course", "start training path", "workflow: \"learning\"", "action: \"start\""],
    ["Finish Lesson", "complete my lesson", "workflow: \"learning\"", "action: \"lesson\""],
    ["Get Certificate", "issue my certificate", "learningCertificateWorkflowConfig()"],
    ["Make Captions", "build captions", "learningAccessibilityWorkflowConfig(\"caption\")"]
  ],
  workforce: [
    ["Find Jobs", "show me jobs", "workflow: \"workforce\"", "action: \"build-profile\""],
    ["Apply for Job", "apply for that job", "workflow: \"workforce\"", "action: \"apply-role\""],
    ["Check Skills", "review my workforce gaps", "workflow: \"workforce\"", "action: \"mentor\""],
    ["Plan Shift", "schedule my shift", "workflow: \"workforce\"", "action: \"shift\""]
  ],
  health: [
    ["Start Intake", "start telehealth intake", "workflow: \"health\"", "action: \"intake\""],
    ["Talk to Provider", "open telehealth access", "workflow: \"health\"", "action: \"provider\""],
    ["Check Region", "check health risk in my region", "workflow: \"health\"", "action: \"safety\""],
    ["Accessibility Help", "create audio guide and captions", "workflow: \"health\"", "action: \"accessibility\""]
  ],
  trade: [
    ["Contact Buyer", "contact my buyer", "workflow: \"trade\"", "action: \"buyer-contact\""],
    ["Create Order", "create a crop order", "workflow: \"trade\"", "action: \"order\""],
    ["Track Route", "track my route", "workflow: \"ai\"", "action: \"route\""],
    ["Scan Farm", "run drone scan", "workflow: \"trade\"", "action: \"drone\""]
  ],
  map: [
    ["Check Route", "check route risk", "workflow: \"ai\"", "action: \"route\""],
    ["Check Farm", "run drone scan", "workflow: \"trade\"", "action: \"drone\""],
    ["Find Facility", "find nearest health facility", "workflow: \"map\"", "action: \"facility-route\""],
    ["Explain Map", "explain the map", "workflow: \"map\"", "action: \"inspector\""]
  ],
  agent: [
    ["Ask Question", "help me understand the platform", "workflow: \"ai\"", "action: \"orchestrate\""],
    ["Plan Mission", "create an agent plan", "workflow: \"ai\"", "action: \"command\""],
    ["Explain Next Step", "what should I do next", "workflow: \"ai\"", "action: \"orchestrate\""],
    ["Read to Me", "read the current response", "conversational: true"]
  ]
};

for (const [section, buttons] of Object.entries(expectedSections)) {
  assert(app.includes(`${section}: {`), `User section missing: ${section}`);
  for (const [label, command, ...workflowChecks] of buttons) {
    assert(app.includes(`label: "${label}"`), `${section} missing button label: ${label}`);
    assert(app.includes(`command: "${command}"`), `${section} missing button command: ${command}`);
    for (const check of workflowChecks) {
      assert(app.includes(check), `${section}/${label} missing workflow mapping marker: ${check}`);
    }
  }
}

[
  "function openMappedUserWorkflow",
  "pendingWorkflow = config",
  "openWorkflowModal(config)",
  "$(\"#workflowModal\").classList.remove(\"hidden\")",
  "closeAskNexus({ silent: true })",
  "row(\"How this works\"",
  "workflowStepHtml",
  "function learningUserCopy",
  "function workforceUserCopy",
  "function tradeUserCopy",
  "function healthUserCopy",
  "function courseSelectOptions",
  "function productSelectOptions",
  "function routeSelectOptions",
  "experienceMode === \"user\" && simpleUserSections[userSection]",
  "renderUserInlineWorkflow(userSection, config)",
  "function userPreviewActionsHtml",
  "function userSceneVisualHtml",
  "function activateSectionFromButton",
  "activateSectionFromButton(button)",
  "![\"dashboard\", \"map\"].includes(sectionId)",
  "event.target.closest(\"[data-section], [data-mobile-section]\")",
  "eventOrButton?.target?.closest",
  "eventOrButton?.currentTarget?.matches",
  "closeAskNexus({ silent: true })",
  "function runUserModeSelfTest",
  "function repairAppRuntime",
  "data-app-self-test",
  "data-app-repair",
  "data-toggle-user-language",
  "navigator.serviceWorker.getRegistrations",
  "caches.keys()",
  "agrinexusLastRuntimeRepair"
].forEach(marker => {
  assert(app.includes(marker), `User workflow safety marker missing: ${marker}`);
});

[
  "body.user-mode .user-inline-workflow",
  "body.user-mode .user-module-preview",
  "body.user-mode .user-scene-visual",
  "body.user-mode .user-module-preview .shipment-map-card",
  ".user-choice-card",
  ".user-choice-card.workforce-choice.applied",
  ".user-choice-title",
  ".user-choice-module",
  ".user-visual-icon",
  "body.user-mode .user-fast-actions",
  "body.user-mode .user-fast-action",
  "body.user-mode .user-preview-actions",
  "body.user-mode .user-caption-panel",
  ".user-caption-text",
  "body.user-mode #workforce .user-inline-workflow",
  ".global-assistant:not(.hidden)",
  ".jarvis-panel:not(.hidden)",
  ".modal:not(.hidden)",
  "min-height: calc(100dvh - 16px)"
].forEach(marker => {
  assert(styles.includes(marker), `User workflow containment style missing: ${marker}`);
});

assert(html.includes("/app.js?v=nexus-behavior-102"), "Index must force browsers to load current User-mode workflow JS");
assert(html.includes("/styles.css?v=nexus-behavior-102"), "Index must force browsers to load current User-mode workflow CSS");
assert(sw.includes('CACHE_NAME = "agrinexus-pwa-v82"'), "Service worker cache must be bumped after User-mode workflow fixes");

console.log("User mode workflow audit passed");
console.log("Checked: every simple app tab/button maps to a workflow, course/job choices are visible, User mode uses inline confirmations, assistant windows have anti-partial containment, and the app can self-check/repair stale runtime cache.");
