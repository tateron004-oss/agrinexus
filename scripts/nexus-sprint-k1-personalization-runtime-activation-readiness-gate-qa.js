const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_K1_PERSONALIZATION_RUNTIME_ACTIVATION_READINESS_GATE.md"),
  phase63Doc: path.join(root, "docs", "NEXUS_PERSONALIZATION_READINESS_CONTRACT_PHASE_63.md"),
  phase63Contract: path.join(root, "public", "nexus-personalization-readiness-contract.js"),
  phase63Qa: path.join(root, "scripts", "nexus-personalization-readiness-contract-qa.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-k1-personalization-runtime-activation-readiness-gate-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const phase63Doc = read(paths.phase63Doc);
const contractSource = read(paths.phase63Contract);
const contract = require(paths.phase63Contract);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(doc.includes("Current base: `5e8818ec7eeb16b3fce06e34aa2705ddf2ba6d17`"), "doc must record the K1 base commit.");
assert(doc.includes("Sprint K1 defines the readiness gate"), "doc must describe the K1 readiness gate.");
assert(doc.includes("documentation and deterministic QA only"), "doc must state this phase is docs and deterministic QA only.");
assert(doc.includes("Sprint J5 - User Profile Lane Closeout"), "doc must connect to the completed J lane.");
assert(doc.includes("Phase 63 - Personalization Readiness Contract"), "doc must connect to Phase 63.");
assert(doc.includes("Sprint K2 - Personalization Feature Flag Contract"), "doc must identify the next safe sprint.");

[
  "explicit personalization consent",
  "visible personalization purpose",
  "visible preference fields",
  "preference source ownership model",
  "preference access scope model",
  "preference retention policy",
  "preference redaction policy",
  "preference edit control",
  "preference delete control",
  "preference reset control",
  "consent revocation path",
  "user override control",
  "audit event contract before preference persistence or sharing",
  "non-authoritative preference rule",
  "no preference based execution",
  "no hidden personalization",
  "no risk tier changes from preferences"
].forEach(requirement => {
  assert(doc.includes(requirement), `doc must include runtime precondition: ${requirement}.`);
});

[
  "visible personalization center UI",
  "preference buttons",
  "preference forms",
  "hidden personalization",
  "automatic personalization",
  "preference persistence",
  "preference sync",
  "profile-derived execution",
  "preference-derived provider handoff",
  "risk tier mutation",
  "storage writes",
  "network calls",
  "backend writes",
  "audit writes",
  "localStorage or sessionStorage writes",
  "preference-based routing",
  "preference-based confirmation bypass",
  "preference-based permission bypass",
  "execution authority"
].forEach(blocked => {
  assert(doc.includes(blocked), `doc must block runtime behavior: ${blocked}.`);
});

[
  "health",
  "medical",
  "pharmacy",
  "payment",
  "location",
  "marketplace",
  "emergency",
  "identity",
  "account",
  "role"
].forEach(domain => {
  assert(doc.toLowerCase().includes(domain), `doc must mention restricted domain: ${domain}.`);
});

[
  "preferenceEngineEnabled",
  "automaticPersonalizationEnabled",
  "hiddenPersonalizationEnabled",
  "preferencePersistenceEnabled",
  "preferenceSyncEnabled",
  "profileDerivedExecutionEnabled",
  "providerHandoffEnabled",
  "riskTierMutationEnabled",
  "standardUserPreferenceMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(doc.includes(`${field}: false`), `doc must preserve invariant ${field}: false.`);
  assert(contract.PERSONALIZATION_NO_EXECUTION_DEFAULTS[field] === false, `${field} must default false in Phase 63 contract.`);
  assert(contract.PERSONALIZATION_READINESS_CONTRACT[field] === false, `${field} must remain false in Phase 63 default contract.`);
});

assert(phase63Doc.includes("inert readiness contract"), "Phase 63 doc must remain inert.");
assert(phase63Doc.includes("preferences do not let me execute actions or skip approvals"), "Phase 63 doc must retain safe copy.");
assert(contractSource.includes("createPersonalizationReadinessContract"), "Phase 63 contract factory must remain present.");

const attemptedOverride = contract.createPersonalizationReadinessContract({
  actionType: "tailor_guidance",
  preferenceEngineEnabled: true,
  automaticPersonalizationEnabled: true,
  hiddenPersonalizationEnabled: true,
  preferencePersistenceEnabled: true,
  preferenceSyncEnabled: true,
  profileDerivedExecutionEnabled: true,
  providerHandoffEnabled: true,
  riskTierMutationEnabled: true,
  standardUserPreferenceMutationAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

[
  "preferenceEngineEnabled",
  "automaticPersonalizationEnabled",
  "hiddenPersonalizationEnabled",
  "preferencePersistenceEnabled",
  "preferenceSyncEnabled",
  "profileDerivedExecutionEnabled",
  "providerHandoffEnabled",
  "riskTierMutationEnabled",
  "standardUserPreferenceMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(attemptedOverride[field] === false, `factory must force ${field} false despite override attempts.`);
});

[
  "nexus-personalization-readiness-contract.js",
  "NexusPersonalizationReadinessContract",
  "PERSONALIZATION_READINESS_CONTRACT",
  "createPersonalizationReadinessContract",
  "nexus-sprint-k1-personalization-runtime-activation-readiness-gate",
  "renderPersonalizationCenter",
  "openPersonalizationCenter",
  "applyPersonalization",
  "personalizeResponse",
  "personalizationProfile",
  "savePreferences(",
  "loadPreferences(",
  "sharePreferences(",
  "syncPreferences(",
  "executePersonalizationAction",
  "dispatchPersonalizationAction",
  "mutateRiskTierFromPreferences"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not include runtime hook ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not include runtime hook ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not include runtime hook ${runtimeHook}.`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.credentials",
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "document.location",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "openWorkflow(",
  "goSection(",
  "addEventListener",
  "querySelector"
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `Phase 63 contract module must remain inert and avoid ${forbidden}.`);
});

const alias = "qa:nexus-sprint-k1-personalization-runtime-activation-readiness-gate";
const scriptPath = "scripts/nexus-sprint-k1-personalization-runtime-activation-readiness-gate-qa.js";
assert(packageData.scripts[alias] === `node ${scriptPath}`, `package.json must expose ${alias}.`);
assert(qaSuite.includes(scriptPath), "qa-suite.js must include Sprint K1 QA.");
assert(qaSuite.includes("scripts/nexus-personalization-readiness-contract-qa.js"), "qa-suite.js must continue to include Phase 63 QA.");

console.log("[nexus-sprint-k1-personalization-runtime-activation-readiness-gate-qa] passed");
