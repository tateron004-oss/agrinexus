const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const styles = read("public/styles.css");
const doc = read("docs/NEXUS_GLOBAL_ACTIVATION_CENTER.md");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(haystack, needle, message) {
  assert(haystack.includes(needle), message || `Expected to find ${needle}`);
}

function excludes(haystack, needle, message) {
  assert(!haystack.toLowerCase().includes(needle.toLowerCase()), message || `Did not expect to find ${needle}`);
}

const activationVerification = spawnSync(process.execPath, ["scripts/nexus-activation-verification-qa.js"], {
  cwd: root,
  encoding: "utf8"
});
assert.strictEqual(
  activationVerification.status,
  0,
  `activation verification QA should pass before global activation center QA\n${activationVerification.stdout}\n${activationVerification.stderr}`
);

[
  "NEXUS_GLOBAL_ACTIVATION_CENTER_GROUPS",
  "nexusGlobalActivationCenterSummary",
  "Health and provider lanes",
  "Agriculture, marketplace, vendor, and logistics lanes",
  "Communications lanes",
  "Training and workforce lanes",
  "Platform, offline, media, and source lanes",
  "data-testid=\"nexus-global-activation-center-summary\"",
  "data-testid=\"nexus-global-activation-lane-count\"",
  "data-testid=\"nexus-global-activation-partner-count\"",
  "data-testid=\"nexus-global-activation-test-live-separation\"",
  "data-testid=\"nexus-global-activation-secret-safe-export\"",
  "data-testid=\"nexus-global-activation-audit-state\"",
  "data-testid=\"nexus-global-activation-groups\"",
  "data-testid=\"nexus-global-activation-group\"",
  "data-testid=\"nexus-global-activation-lane-card\"",
  "data-nexus-activation-action=\"export-global-lanes\"",
  "data-nexus-activation-action=\"show-partner-registry\"",
  "handleNexusGlobalActivationCenterClick",
  "nexus_global_activation_lane_registry_export_prepared",
  "global_activation_lane_registry_export",
  "nexus_global_partner_registry_listed",
  "secretsIncluded: false",
  "noSecretsExposed: true",
  "noProviderContactAuthorized: true",
  "noExecutionAuthorized: true",
  "saveNexusRuntimeMemory();"
].forEach(token => includes(app, token, `app should include ${token}`));

[
  ".nexus-global-activation-summary",
  ".nexus-global-activation-stats",
  ".nexus-global-activation-groups"
].forEach(token => includes(styles, token, `styles should include ${token}`));

[
  "Nexus Global Activation Center",
  "provider, vendor, communications, healthcare, agriculture, marketplace, logistics, workforce, learning, maps, media, offline, and source-backed lanes",
  "Health and provider lanes",
  "Agriculture, marketplace, vendor, and logistics lanes",
  "Communications lanes",
  "Training and workforce lanes",
  "Platform, offline, media, and source lanes",
  "Partner onboarding remains local and reviewable",
  "Secret-Safe Exports",
  "Test Mode And Live Mode Separation",
  "Standard User Safety",
  "must never be exported",
  "must not"
].forEach(token => includes(doc, token, `doc should include ${token}`));

[
  "secret value:",
  "api key value:",
  "provider contacted automatically",
  "vendor contacted automatically",
  "live mode bypass",
  "silent activation allowed",
  "background execution without confirmation",
  "payment completed automatically",
  "dispatch completed automatically"
].forEach(phrase => {
  excludes(app, phrase, `app should not contain unsafe phrase: ${phrase}`);
  excludes(doc, phrase, `doc should not contain unsafe phrase: ${phrase}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-activation-center"],
  "node scripts/nexus-global-activation-center-qa.js",
  "package script should expose global activation center QA"
);
includes(qaSuite, "scripts/nexus-global-activation-center-qa.js", "qa suite should include global activation center QA");

console.log("nexus-global-activation-center QA passed");
