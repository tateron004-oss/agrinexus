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
  terms.forEach(term => assert(source.includes(term), `${label} must include: ${term}`));
}

const docName = "NEXUS_SPRINT_K5_FLAG_OFF_IDENTITY_RESOLUTION_REGRESSION_GUARD.md";
const moduleName = "nexus-contact-provider-identity-flag-guard.js";
const qaName = "nexus-sprint-k5-flag-off-identity-resolution-regression-guard-qa.js";

assert(exists("docs", docName), "K5 doc must exist.");
assert(exists("public", moduleName), "K5 flag guard module must exist.");
assert(exists("scripts", qaName), "K5 QA must exist.");

const doc = read("docs", docName);
const guardSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const guard = require("../public/nexus-contact-provider-identity-flag-guard.js");

assertIncludes(doc, [
  "Sprint K5",
  "Flag-Off Identity Resolution Regression Guard",
  "enableContactProviderIdentityPreview",
  "absent flag returns disabled",
  "runtime Standard User context returns disabled",
  "flag-only context cannot create execution authority",
  "candidate validation failures keep preview disabled",
  "provider dispatch",
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp",
  "Telegram",
  "payments",
  "location sharing",
  "camera",
  "medical or pharmacy",
  "emergency routing",
  "backend writes",
  "storage writes",
  "network calls",
  "`public/index.html`",
  "`public/app.js`",
  "`server.js`",
  "executionAllowed: false",
  "executionAuthority: false"
], "K5 doc");

[
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.open",
  "location.href",
  "sendBeacon",
  "setItem",
  "writeFile",
  "appendFile"
].forEach(term => assert(!guardSource.includes(term), `K5 guard must not include runtime side-effect API: ${term}`));

assert.equal(guard.CONTACT_PROVIDER_IDENTITY_PREVIEW_FLAG, "enableContactProviderIdentityPreview", "K5 flag name must be canonical.");
assert.equal(typeof guard.resolveContactProviderIdentityPreviewFlag, "function", "K5 guard must export flag resolver.");
assert.equal(typeof guard.isContactProviderIdentityPreviewAllowed, "function", "K5 guard must export allowance resolver.");

const defaults = guard.resolveContactProviderIdentityPreviewFlag();
assert.equal(defaults.enabled, false, "K5 default flag must be disabled.");
assert.equal(defaults.executionAuthority, false, "K5 default must not grant execution authority.");
assert.equal(defaults.executionAllowed, false, "K5 default must not allow execution.");

const standardUserFlagOnly = guard.resolveContactProviderIdentityPreviewFlag({ enableContactProviderIdentityPreview: true, runtimeSurface: "standard-user", context: "standard-user" });
assert.equal(standardUserFlagOnly.enabled, false, "K5 must block Standard User runtime even when flag value is true.");

const fixtureFlag = guard.resolveContactProviderIdentityPreviewFlag({ enableContactProviderIdentityPreview: true, runtimeSurface: "test-fixture", context: "qa-fixture" });
assert.equal(fixtureFlag.enabled, true, "K5 may allow only explicit test-safe fixture context.");
assert.equal(fixtureFlag.executionAllowed, false, "K5 fixture flag must remain non-executing.");
assert.equal(fixtureFlag.providerHandoffAllowed, false, "K5 fixture flag must not allow provider handoff.");
assert.equal(fixtureFlag.communicationAllowed, false, "K5 fixture flag must not allow communication.");

const allowedFixture = guard.isContactProviderIdentityPreviewAllowed({
  flag: fixtureFlag,
  validation: { ok: true, executionAllowed: false }
});
assert.equal(allowedFixture.allowed, true, "K5 fixture preview may be allowed only after validation.");
assert.equal(allowedFixture.executionAllowed, false, "K5 allowed fixture still must not execute.");

const failedValidation = guard.isContactProviderIdentityPreviewAllowed({
  flag: fixtureFlag,
  validation: { ok: false, executionAllowed: false }
});
assert.equal(failedValidation.allowed, false, "K5 must deny preview when candidate validation fails.");

const executionEscalation = guard.isContactProviderIdentityPreviewAllowed({
  flag: fixtureFlag,
  validation: { ok: true, executionAllowed: true }
});
assert.equal(executionEscalation.allowed, false, "K5 must deny preview when validation claims execution.");

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the K5 flag guard.`);
});

const alias = "qa:nexus-sprint-k5-flag-off-identity-resolution-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-k4-identity-confidence-risk-evidence-mapping-qa.js"), "K5 requires K4 QA to remain in qa-suite.");

console.log("[nexus-sprint-k5-flag-off-identity-resolution-regression-guard-qa] passed");
