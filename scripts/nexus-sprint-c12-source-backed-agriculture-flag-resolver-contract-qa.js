const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C12_SOURCE_BACKED_AGRICULTURE_FLAG_RESOLVER_CONTRACT.md"),
  c11Doc: path.join(root, "docs", "NEXUS_SPRINT_C11_SOURCE_BACKED_AGRICULTURE_DEFAULT_OFF_RUNTIME_WIRING_CONTRACT.md"),
  c8Mapper: path.join(root, "public", "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"),
  c12Module: path.join(root, "public", "nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

const flagName = "enableSourceBackedAgricultureRuntimeMapping";
const c8MapperFileName = "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js";
const c12FileName = "nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract.js";
const authorityFalseFields = [
  "runtimeWiringAllowed",
  "loadMapperAllowed",
  "renderVisibleCardAllowed",
  "executionAllowed",
  "sideEffectsAllowed",
  "providerHandoffAllowed",
  "networkLookupAllowed",
  "storageReadAllowed",
  "storageWriteAllowed",
  "backendWriteAllowed",
  "permissionPromptAllowed",
  "routeAutoOpenAllowed",
  "modalAutoOpenAllowed",
  "pendingActionCreationAllowed"
];

function fail(message) {
  console.error(`[nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract-qa] ${message}`);
  process.exit(1);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function includesAll(source, fragments, label) {
  fragments.forEach(fragment => {
    assert(source.toLowerCase().includes(fragment.toLowerCase()), `${label} must include: ${fragment}`);
  });
}

Object.entries(files).forEach(([name, filePath]) => {
  assert(fs.existsSync(filePath), `${name} must exist at ${path.relative(root, filePath)}.`);
});

const doc = read(files.doc);
const c11Doc = read(files.c11Doc);
const c12Source = read(files.c12Module);
const index = read(files.index);
const app = read(files.app);
const server = read(files.server);
const packageData = JSON.parse(read(files.packageJson));
const qaSuite = read(files.qaSuite);
const c8Mapper = require(files.c8Mapper);
const c12 = require(files.c12Module);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Contract Module",
  "Fixture-Only Boundary",
  "No Ambient Flag Sources",
  "Resolver Output Boundary",
  "Standard User Boundary",
  "Sprint C12 QA Expectations",
  "Sprint C13 Recommendation",
  "This sprint remains inert",
  "does not wire the resolver into Standard User runtime",
  "does not import the C8 mapper",
  "does not load new scripts in `public/index.html`",
  "does not add a visible UI surface",
  "does not change backend behavior"
], "Sprint C12 contract doc");

includesAll(doc, [
  flagName,
  "explicit fixture value of `true`",
  "Missing, undefined, null, false, string, number, object, array, and malformed values resolve to disabled"
], "flag resolver behavior");

includesAll(doc, [
  "`public/index.html`",
  "`public/app.js`",
  "`server.js`",
  "Standard User startup",
  "planner",
  "policy engine",
  "provider registry",
  "native bridge",
  "confirmation paths"
], "fixture-only boundary");

includesAll(doc, [
  "localStorage",
  "sessionStorage",
  "URL query parameters",
  "cookies",
  "server config",
  "user profile data",
  "role data",
  "globals",
  "environment variables",
  "voice commands",
  "typed commands"
], "no ambient flag sources");

authorityFalseFields.forEach(field => {
  assert(doc.includes(`\`${field}\``), `resolver output boundary must document ${field}.`);
});

assert(c11Doc.includes("Sprint C12 should create a fixture-only flag resolver contract"), "C11 doc must recommend C12 fixture-only flag resolver.");
assert(c8Mapper.MAPPER_VERSION === "nexus.sprintC8.sourceBackedAgricultureVisiblePreviewMapper.v1", "C8 mapper version must remain stable.");
assert(c12.CONTRACT_VERSION === "nexus.sprintC12.sourceBackedAgricultureFlagResolverContract.v1", "C12 contract version must be stable.");
assert(c12.FLAG_NAME === flagName, "C12 flag name must match canonical flag.");

const enabledResult = c12.resolveSourceBackedAgricultureRuntimeMappingFlag({ [flagName]: true });
assert(enabledResult.enabled === true, "C12 resolver must enable only explicit boolean true.");
assert(enabledResult.disabled === false, "C12 enabled fixture must report disabled false.");
assert(enabledResult.activationSource === "explicit_fixture_boolean", "C12 enabled fixture must be fixture-only.");

[
  undefined,
  null,
  false,
  "true",
  1,
  0,
  [],
  { [flagName]: false },
  { [flagName]: "true" },
  { [flagName]: 1 },
  { otherFlag: true }
].forEach((input, index) => {
  const result = c12.resolveSourceBackedAgricultureRuntimeMappingFlag(input);
  assert(result.enabled === false, `malformed fixture input ${index} must resolve disabled.`);
  assert(result.disabled === true, `malformed fixture input ${index} must report disabled true.`);
});

[enabledResult, c12.resolveSourceBackedAgricultureRuntimeMappingFlag({})].forEach((result, index) => {
  authorityFalseFields.forEach(field => {
    assert(result[field] === false, `result ${index} must keep ${field} false.`);
  });
  assert(result.noActionDisclosure === "No action has been taken.", `result ${index} must preserve no-action disclosure.`);
});

[
  "localStorage",
  "sessionStorage",
  "fetch(",
  "XMLHttpRequest",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.open",
  "location.href",
  "document.createElement",
  "addEventListener",
  "postMessage",
  "confirm(",
  "alert("
].forEach(fragment => {
  assert(!c12Source.includes(fragment), `C12 module must not use side-effect API fragment: ${fragment}`);
});

assert(!index.includes(c12FileName), "public/index.html must not load C12 module.");
assert(!app.includes(c12FileName), "public/app.js must not reference C12 module.");
assert(!server.includes(c12FileName), "server.js must not explicitly inject or special-case C12 module.");
assert(!index.includes(c8MapperFileName), "public/index.html must still not load C8 mapper.");
assert(!server.includes(c8MapperFileName), "server.js must still not special-case C8 mapper.");

const alias = "qa:nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract";
const command = "node scripts/nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract-qa.js"), "qa-suite must include Sprint C12 QA.");

console.log("[nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract-qa] passed");
