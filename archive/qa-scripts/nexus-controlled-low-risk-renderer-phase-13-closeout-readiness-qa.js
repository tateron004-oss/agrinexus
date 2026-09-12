const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_PHASE_13_CLOSEOUT_AND_PHASE_14_READINESS.md";
const scriptName = "nexus-controlled-low-risk-renderer-phase-13-closeout-readiness-qa.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const flagName = "enableControlledLowRiskRendererVisibleUi";
const rendererFiles = [
  "nexus-controlled-low-risk-renderer-shell",
  "nexus-controlled-low-risk-renderer-adapter-fixture",
  "nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub"
];
const rendererQaScripts = [
  "scripts/nexus-controlled-low-risk-renderer-actual-hidden-mount-point-default-empty-implementation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-default-off-wiring-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-static-harness-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-non-runtime-shell-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-runtime-adapter-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-non-runtime-adapter-fixture-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-adapter-to-shell-fixture-integration-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-default-off-runtime-flag-plumbing-audit-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-hidden-mount-preflight-guard-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-final-standard-user-browser-validation-default-off-qa.js"
];

assert(exists("docs", docName), "Phase 13X closeout/readiness document must exist");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Phase 13 Closeout And Phase 14 Readiness",
  "Phase 13",
  "Phase 14",
  "not activate visible runtime rendering",
  "Standard User behavior remains unchanged",
  mountId,
  `${flagName} === true`
], "Phase 13X closeout summary");

assertIncludes(doc, [
  "## A. Executive Summary",
  "## B. Phase 13 Timeline And Deliverables",
  "## C. Current Runtime State",
  "## D. Safety Boundaries Preserved",
  "## E. Low-Risk Categories Prepared",
  "## F. High-Risk / Excluded Categories Blocked",
  "## G. Current QA Protection",
  "## H. Browser Validation Summary",
  "## I. Remaining Risks Before Activation",
  "## J. Phase 14 Readiness Recommendation",
  "## K. Phase 14A Non-Negotiables",
  "## L. Final Phase 13 Acceptance Criteria"
], "Phase 13X sections");

assertIncludes(doc, [
  "13L hidden/default-empty renderer mount point",
  "13M Standard User validation after hidden mount",
  "13N default-off wiring contract",
  "13O static harness QA",
  "13P non-runtime implementation shell",
  "13Q runtime adapter contract",
  "13R non-runtime adapter fixture",
  "13S adapter-to-shell fixture integration QA",
  "13T runtime-adjacent adapter stub",
  "13U default-off runtime flag plumbing audit",
  "13V hidden mount preflight guard contract",
  "13W final Standard User browser validation"
], "Phase 13 timeline");

assertIncludes(doc, [
  "agriculture_training",
  "irrigation_learning",
  "farm_jobs_workforce_discovery",
  "agritrade_marketplace_preview",
  "crop_issue_education_help"
], "allowed low-risk categories");

assertIncludes(doc, [
  "call",
  "message",
  "sms",
  "whatsapp",
  "telegram",
  "location",
  "map_permission",
  "camera",
  "microphone",
  "buy",
  "sell",
  "payment",
  "checkout",
  "emergency",
  "appointment",
  "booking",
  "provider_handoff",
  "account_connection",
  "identity_sensitive_action"
], "blocked high-risk categories");

for (const qaScript of rendererQaScripts) {
  assert(doc.includes(qaScript), `Phase 13X doc must list QA script ${qaScript}`);
  assert(suite.includes(qaScript), `nexus-workforce suite must include ${qaScript}`);
}

assertIncludes(doc, [
  "Phase 14A - Controlled Low-Risk Text-Only Renderer Behind Strict Default-Off Flag",
  "strict boolean flag only",
  "default-off",
  "hidden mount preflight must pass",
  "low-risk allowlist only",
  "high-risk blocklist always wins",
  "text-only DOM insertion",
  "no raw HTML",
  "no interactive controls",
  "no external side effects",
  "no execution",
  "no runtime activation",
  "No visible UI",
  "No Standard User behavior change"
], "Phase 14 recommendation and non-negotiables");

const mountMatches = [...index.matchAll(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/g)];
assert.equal((index.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "hidden renderer mount must exist exactly once");
assert.equal(mountMatches.length, 1, "hidden renderer mount must remain a single empty div");

const mount = mountMatches[0][0];
assertIncludes(mount, [
  `id="${mountId}"`,
  "hidden",
  "aria-hidden=\"true\"",
  "data-nexus-renderer-mode=\"hidden\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-navigation-allowed=\"false\""
], "hidden renderer mount");

assert.equal(mount.replace(/<div\b[^>]*>/, "").replace(/<\/div>/, "").trim(), "", "hidden renderer mount must be default-empty");

for (const forbidden of [/<button/i, /<a\s/i, /href\s*=/i, /onclick/i, /addEventListener/i, /<form/i, /<input/i]) {
  assert(!forbidden.test(mount), `hidden mount must not contain ${forbidden}`);
}

function assertRuntimeUnwired(source, label) {
  for (const rendererFile of rendererFiles) {
    assert(!source.includes(rendererFile), `${label} must not reference ${rendererFile}`);
  }
  assert(!source.includes(scriptName), `${label} must not reference Phase 13X QA`);
  assert(!source.match(/import\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not dynamically import renderer files`);
  assert(!source.match(/require\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not require renderer files`);
  assert(!source.match(/fetch\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not fetch renderer files`);
}

assertRuntimeUnwired(app, "public/app.js");
assertRuntimeUnwired(index, "public/index.html");
assertRuntimeUnwired(server, "server.js");

assert(!index.match(/<script[^>]+nexus-controlled-low-risk-renderer/i), "public/index.html must not load controlled low-risk renderer scripts");
assert(!server.match(new RegExp(`${flagName}\\s*:\\s*true`)), "server.js must not expose enableControlledLowRiskRendererVisibleUi: true");
assert(!app.includes(flagName), "public/app.js must not consume the future renderer flag");
assert(!server.includes(flagName), "server.js must not expose the future renderer flag");
assert(app.includes("function paintControlledStagedActionPreview"), "public/app.js may only query the hidden mount through the Sprint D6 flag-gated staged preview painter");
assert(app.includes(`$("#${mountId}")`), "public/app.js hidden mount query must remain scoped to controlled staged preview painting");
assert(app.includes('root.hidden = !html'), "public/app.js must keep the hidden mount hidden when no flag-gated preview exists");
assert(app.includes('root.dataset.executionAllowed = "false"'), "public/app.js must preserve no-execution mount metadata");
assert(app.includes('root.dataset.providerHandoff = "false"'), "public/app.js must preserve no-provider-handoff mount metadata");
assert(app.includes('root.dataset.permissionRequest = "false"'), "public/app.js must preserve no-permission-request mount metadata");
assert(!server.includes(mountId), "server.js must not reference the hidden mount point");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-phase-13-closeout-readiness": "node scripts/${scriptName}"`), "package.json must expose Phase 13X QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13X QA guard");

console.log("Nexus controlled low-risk renderer Phase 13 closeout readiness QA passed.");
