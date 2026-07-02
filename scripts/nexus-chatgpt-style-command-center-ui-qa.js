const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const css = fs.readFileSync(path.join(root, "public/styles.css"), "utf8");
const docPath = path.join(root, "docs/NEXUS_CHATGPT_STYLE_COMMAND_CENTER_UI_REDESIGN.md");

function sectionBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert(start !== -1, `${startNeedle} must exist`);
  const end = source.indexOf(endNeedle, start);
  assert(end !== -1, `${endNeedle} must exist after ${startNeedle}`);
  return source.slice(start, end);
}

const workspace = sectionBetween(app, "function renderUserWorkspace()", "function renderUserAccessibilityPanel()");
const brainPanel = sectionBetween(app, "function renderNexusAgenticBrainPanel()", "function nexusAgenticBrainCommandValue()");

[
  "data-nexus-command-center-header",
  "data-nexus-command-center",
  "data-nexus-command-composer",
  "nexusCommandCenterInput",
  "data-nexus-command-center-submit",
  "data-nexus-command-center-voice",
  "data-nexus-command-prefill",
  "data-nexus-mode-launcher",
  "data-nexus-mode-shortcut",
  "data-nexus-active-work-summary"
].forEach(token => assert(app.includes(token), `command center token missing: ${token}`));

[
  "Health",
  "Providers",
  "Agriculture",
  "AgriTrade",
  "Jobs",
  "Learning",
  "Maps",
  "Messages",
  "Reminders",
  "Language",
  "Offline",
  "Safety"
].forEach(label => assert(app.includes(`label: "${label}"`), `launcher label missing: ${label}`));

[
  "renderNexusCommandCenterHeader()",
  "renderNexusCommandCenterHero()",
  "renderNexusModeLauncher()",
  "renderNexusAgenticBrainPanel()",
  "renderNexusActiveWorkSummary()"
].forEach(call => assert(workspace.includes(call), `Standard User workspace must render ${call}`));

[
  "renderNexusPlatformDashboard()",
  "a100CapabilitySurfaceHtml()",
  "renderNexusRealProviderTestingPanel()",
  "renderNexusProductionActionAssistantPanel()",
  "user-service-buttons",
  "user-fast-actions"
].forEach(token => assert(!workspace.includes(token), `Standard User command center must not render old wall/test surface: ${token}`));

[
  "data-nexus-agentic-brain-command",
  "Run brain command",
  "Natural command"
].forEach(token => assert(!brainPanel.includes(token), `contextual results panel must not expose the old brain command console: ${token}`));

assert(app.includes("const commandCenterSubmit = event.target.closest(\"[data-nexus-command-center-submit]\")"), "command center submit handler must exist");
assert(app.includes("await runNexusAgenticBrainAction(\"command\", { command })"), "command center must route typed commands to the assistant brain");
assert(app.includes("const commandCenterPrefill = event.target.closest(\"[data-nexus-command-prefill]\")"), "example prompt prefill handler must exist");
assert(app.includes("const modeShortcut = event.target.closest(\"[data-nexus-mode-shortcut]\")"), "mode launcher handler must exist");
assert(app.includes("const commandCenterVoice = event.target.closest(\"[data-nexus-command-center-voice]\")"), "voice launcher handler must exist");

[
  "body.user-mode .nexus-command-center-header",
  "body.user-mode .nexus-command-center-hero",
  "body.user-mode .nexus-command-composer",
  "body.user-mode .nexus-mode-launcher",
  "body.user-mode .nexus-agentic-brain-panel",
  "body.user-mode .nexus-active-work-summary",
  "body.user-mode .user-voice-dock .nexus-voice-demo-prompts",
  "display: none !important"
].forEach(token => assert(css.includes(token), `command center CSS missing: ${token}`));

[
  "function renderNexusRealProviderTestingPanel()",
  "function renderNexusProductionActionAssistantPanel()",
  "data-nexus-real-provider-testing",
  "data-nexus-production-action-assistant"
].forEach(token => assert(app.includes(token), `controlled testing/admin source must remain available outside Standard User home: ${token}`));

[
  "silently send messages",
  "process payments",
  "route emergency services",
  "use camera",
  "share location"
].forEach(token => assert(app.includes(token), `safety copy must remain visible in command center result area: ${token}`));

assert(fs.existsSync(docPath), "command center redesign documentation must exist");
const doc = fs.readFileSync(docPath, "utf8");
[
  "ChatGPT/Copilot-style command center",
  "Standard User",
  "mode launcher",
  "voice control",
  "no provider handoff",
  "no calls or messages",
  "no payments",
  "no location sharing",
  "no medical/pharmacy/emergency execution"
].forEach(token => assert(doc.includes(token), `redesign doc missing required topic: ${token}`));

console.log("Nexus ChatGPT-style command center UI QA passed.");
