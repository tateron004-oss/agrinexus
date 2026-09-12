const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  FLAG_NAME,
  DEFAULT_CONFIRMATION_PREVIEW_ENABLED,
  isConfirmationPreviewEnabled,
  describeConfirmationPreviewFlag
} = require("../public/nexus-confirmation-preview-flag.js");

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

const docName = "NEXUS_SPRINT_E5_CONFIRMATION_FLAG_OFF_REGRESSION_GUARD.md";
const moduleName = "nexus-confirmation-preview-flag.js";
const qaName = "nexus-sprint-e5-confirmation-flag-off-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint E5 flag-off doc must exist.");
assert(exists("public", moduleName), "Sprint E5 flag module must exist.");
assert(exists("scripts", qaName), "Sprint E5 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint E5",
  "9d9afb6031d72cdaa6bd0c0a10536d021eb7a08f",
  "NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED",
  "Default:",
  "false",
  "Flag-Off Runtime Expectations",
  "Standard User build remains unchanged",
  "does not load, import, inject, enable, or route through the confirmation preview flag",
  "Sprint E6 may implement a first controlled confirmation UI preview only behind an explicit default-off flag"
], "E5 doc");

assert.equal(FLAG_NAME, "NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED", "E5 flag name must be canonical.");
assert.equal(DEFAULT_CONFIRMATION_PREVIEW_ENABLED, false, "E5 flag must default false.");
assert.equal(isConfirmationPreviewEnabled(), false, "E5 flag helper must return false without config.");
assert.equal(isConfirmationPreviewEnabled({}), false, "E5 flag helper must return false for empty config.");
assert.equal(isConfirmationPreviewEnabled({ NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED: false }), false, "E5 flag helper must return false for explicit false.");
assert.equal(isConfirmationPreviewEnabled({ NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED: "true" }), false, "E5 flag helper must not treat string true as enabled.");
assert.equal(isConfirmationPreviewEnabled({ NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED: true }), true, "E5 flag helper may return true only for explicit boolean true.");

const defaultDescription = describeConfirmationPreviewFlag();
assert.equal(defaultDescription.enabled, false, "E5 flag description must be disabled by default.");
assert.equal(defaultDescription.runtimeVisible, false, "E5 flag-off description must not be runtime visible.");
assert.equal(defaultDescription.grantsExecutionAuthority, false, "E5 flag must not grant execution authority.");
assert.equal(defaultDescription.providerHandoffAllowed, false, "E5 flag must not allow provider handoff.");
assert.equal(defaultDescription.pendingActionAllowed, false, "E5 flag must not allow pending actions.");
assert.equal(defaultDescription.backendWriteAllowed, false, "E5 flag must not allow backend writes.");

assert(!indexHtml.includes(moduleName), "Standard User index.html must not load E5 flag module.");
assert(!indexHtml.includes("NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED"), "Standard User index.html must not enable E5 flag.");
assert(!appSource.includes(moduleName), "public/app.js must not import E5 flag module.");
assert(!appSource.includes("NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED"), "public/app.js must not reference E5 flag.");
assert(!serverSource.includes(moduleName), "server.js must not inject E5 flag module.");
assert(!serverSource.includes("NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED"), "server.js must not expose or enable E5 flag.");

[
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "location.href",
  "open(",
  "sendBeacon",
  "setItem",
  "postMessage"
].forEach(term => {
  assert(!moduleSource.includes(term), `E5 flag module must not include unsafe runtime API: ${term}`);
});

const alias = "qa:nexus-sprint-e5-confirmation-flag-off-regression-guard";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E5 flag-off QA.");
assert(qaSuite.includes("scripts/nexus-sprint-e4-confirmation-evidence-risk-mapping-qa.js"), "E5 requires E4 QA to remain in qa-suite.");

console.log("[nexus-sprint-e5-confirmation-flag-off-regression-guard-qa] passed");
