const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8").replace(/\r\n/g, "\n");

const app = read("public/app.js");
const index = read("public/index.html");
const styles = read("public/styles.css");
const sw = read("public/sw.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

function assertOrder(source, first, second, label) {
  const firstIndex = source.indexOf(first);
  const secondIndex = source.indexOf(second);
  assert(firstIndex >= 0, `${label} missing first token: ${first}`);
  assert(secondIndex >= 0, `${label} missing second token: ${second}`);
  assert(firstIndex < secondIndex, `${label} should place ${first} before ${second}`);
}

[
  'document.addEventListener("click", handleNexusStandardUserHomeClick, true)',
  'document.addEventListener("click", async event => {',
  'const commandCenterSubmit = event.target.closest("[data-nexus-command-center-submit]")',
  'const commandCenterPrefill = event.target.closest("[data-nexus-command-prefill]")',
  'const commandCenterVoice = event.target.closest("[data-nexus-command-center-voice]")',
  'const modeShortcut = event.target.closest("[data-nexus-mode-shortcut]")',
  'const captionButton = event.target.closest("[data-caption-action]")',
  'const workflowButton = event.target.closest("[data-workflow][data-action]")',
  "element.onclick = event => {",
  'async function handleNexusKnowledgeRailClick(event)',
  'event.target?.closest?.("[data-nexus-knowledge-action]")',
  'function handleNexusHomeModeSummaryClick(event)',
  "window.nexusHandleStandardUserHomeShortcut = nexusHandleStandardUserHomeShortcut"
].forEach(token => includes(app, token, `delegated click repair contract ${token}`));

const bootBody = app.slice(app.indexOf("async function boot()"));
assertOrder(
  bootBody,
  "bindStatic();",
  "loadPublicMapConfig().catch(() => DEFAULT_MAP_TILE_CONFIG);",
  "boot must bind controls before optional config load"
);
includes(app, "const controller = new AbortController();", "public config load should be abortable");
includes(app, "setTimeout(() => controller.abort(), 3500)", "public config load should have a short timeout");
includes(app, 'fetch("/api/config", { credentials: "same-origin", signal: controller.signal })', "public config load should use abort signal");
includes(app, "const nodeFilter = globalThis.NodeFilter ||", "text capture should not block binding when NodeFilter is unavailable");
includes(app, "SHOW_TEXT: 4", "NodeFilter text fallback");
excludes(app, "await loadPublicMapConfig();\n  bindStatic();", "boot startup order");
includes(app, "await loadPublicMapConfig();\n    render();", "guest login should refresh bounded public config before render");

[
  "agriculture",
  "chronic-care",
  "telehealth-intake",
  "mobile-clinic",
  "pharmacy-support",
  "learning",
  "jobs",
  "agritrade",
  "maps",
  "media",
  "reminders",
  "offline"
].forEach(id => {
  includes(app, `"${id}"`, `home mode id ${id}`);
});
includes(app, 'data-testid="nexus-mode-card-${escapeHtml(item.id)}"', "mode card test id renderer");

[
  "data-nexus-command-center-submit",
  "data-nexus-command-center-voice",
  "data-nexus-command-prefill",
  "data-nexus-mode-shortcut",
  "data-nexus-knowledge-action",
  "data-caption-action",
  "data-workflow",
  "data-action",
  "data-real-provider-refresh",
  "data-real-provider-test",
  "data-nexus-runtime-action",
  "data-nexus-brain-action"
].forEach(attribute => includes(app, attribute, `clickable control attribute ${attribute}`));

[
  "save-result",
  "prepare-review-summary",
  "queue-result",
  "save-offline",
  "refresh-history",
  "request-provider-support",
  "consent-provider-pathway",
  "ask-mode",
  "ask"
].forEach(action => includes(app, `data-nexus-knowledge-action="${action}"`, `internet resource action ${action}`));

[
  "Start as User",
  "Ask Nexus",
  "Mic",
  "Send",
  "Open workflow",
  "Save to record",
  "Prepare review summary",
  "Queue for review",
  "Save offline",
  "Create reminder",
  "Show offline queue"
].forEach(label => includes(app + index, label, `visible clickable label ${label}`));

const formButtonMatches = [...index.matchAll(/<form[\s\S]*?<\/form>/gi)]
  .flatMap(match => [...match[0].matchAll(/<button\b([^>]*)>/gi)].map(button => button[0]));
formButtonMatches.forEach(buttonHtml => {
  assert(/\btype=/.test(buttonHtml), `button inside forms must declare type: ${buttonHtml}`);
});

[
  ".nexus-command-sidebar",
  ".nexus-command-right-rail",
  ".nexus-command-main",
  ".nexus-mode-launcher",
  ".nexus-command-composer"
].forEach(selector => {
  const pattern = new RegExp(selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[\\s\\S]{0,260}pointer-events:\\s*none", "i");
  assert(!pattern.test(styles), `${selector} must not disable pointer events`);
});

[
  ["nexus-behavior-483", "app build version", "server build version"],
  ["agrinexus-pwa-v428", "app cache version", "server cache version"]
].forEach(([version, appLabel, serverLabel]) => {
  includes(app, version, `${appLabel} ${version}`);
  includes(server, version, `${serverLabel} ${version}`);
});
includes(sw, 'CACHE_NAME = "agrinexus-pwa-v428"', "service worker cache bump");
includes(sw, 'BUILD_VERSION = "nexus-behavior-483"', "service worker build bump");
includes(index, "/styles.css?v=nexus-behavior-483", "stylesheet cache bust");
includes(index, "/app.js?v=nexus-behavior-483", "app cache bust");

[
  "live emergency response enabled",
  "provider contacted automatically",
  "silent send",
  "payment processed",
  "prescription sent"
].forEach(token => {
  assert(!app.toLowerCase().includes(token.toLowerCase()), `unsafe live-service claim must stay absent: ${token}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-panel-tab-click-repair"],
  "node scripts/nexus-panel-tab-click-repair-qa.js",
  "package alias should run panel/tab click repair QA"
);
includes(qaSuite, "scripts/nexus-panel-tab-click-repair-qa.js", "safe QA suite wiring");

console.log("Nexus panel/tab click repair QA passed.");
