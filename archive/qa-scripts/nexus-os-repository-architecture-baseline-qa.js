const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const registryModule = require("../public/nexus-os-migration-registry.js");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function pass(label) {
  console.log(`PASS ${label}`);
}

function assert(condition, label) {
  if (!condition) {
    console.error(`FAIL ${label}`);
    process.exit(1);
  }
  pass(label);
}

const registry = registryModule.getNexusOsMigrationRegistry();
const app = read("public/app.js");
const index = read("public/index.html");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

assert(registry.version === "nexus-os-genesis-rail-1", "registry has Rail 1 version");
assert(registry.frontend.htmlEntry === "public/index.html", "frontend HTML entry is mapped");
assert(registry.frontend.javascriptEntry === "public/app.js", "frontend JavaScript entry is mapped");
assert(registry.backend.entry === "server.js", "backend entry is mapped");
assert(registry.standardUserRoot === "public/index.html#app", "Standard User root is explicit");
assert(registry.uiSurfaces.length >= 6, "existing UI surfaces are inventoried");
assert(registry.runtimes.some((runtime) => runtime.id === "unified-brain"), "Unified Brain runtime owner is inventoried");
assert(registry.runtimes.some((runtime) => runtime.id === "voice-demo-shell"), "voice runtime owner is inventoried");
assert(registry.workflowEntryPoints.includes("health_chronic_care"), "health workflow entry point is mapped");
assert(registry.workflowEntryPoints.includes("agriculture"), "agriculture workflow entry point is mapped");
assert(registry.workflowEntryPoints.includes("communications"), "communications workflow entry point is mapped");
assert(registry.migrationBoundary.neverRemoveWithoutReplacement.includes("safety gates"), "safety gates are protected from removal");

const goodSnapshot = registryModule.validateNexusOsArchitectureSnapshot({
  assistantRoots: 1,
  microphoneControls: 1,
  standardUserRoots: 1,
  overlappingFloatingControls: 0
});
assert(goodSnapshot.ok, "architecture validator accepts one assistant and one microphone control");

const duplicateSnapshot = registryModule.validateNexusOsArchitectureSnapshot({
  assistantRoots: 2,
  microphoneControls: 2,
  standardUserRoots: 2,
  overlappingFloatingControls: 2
});
assert(!duplicateSnapshot.ok, "architecture validator rejects duplicate runtime roots");
assert(duplicateSnapshot.issues.includes("duplicate_assistant_roots"), "duplicate assistant root issue is detected");
assert(duplicateSnapshot.issues.includes("duplicate_microphone_controls"), "duplicate microphone control issue is detected");
assert(duplicateSnapshot.issues.includes("conflicting_standard_user_roots"), "conflicting Standard User roots are detected");
assert(duplicateSnapshot.issues.includes("overlapping_floating_controls"), "overlapping floating controls are detected");

assert(index.includes("app.js?v="), "application startup loads app.js with build token");
assert(index.includes("nexus-os-migration-registry.js") === false, "Rail 1 registry is not loaded into Standard User startup");
assert(app.includes("handleNexusUnifiedBrainRuntimeCommand"), "Unified Brain command runtime remains present");
assert(app.includes("handleNexusPresenceWakePhrase"), "Nexus wake phrase runtime remains present");
assert(app.includes("function startVoiceListening") && app.includes("window.SpeechRecognition || window.webkitSpeechRecognition"), "voice listening runtime remains present");
assert(server.includes("createServer") || server.includes("http.createServer"), "backend startup remains Node server based");
assert(server.includes("/api/health") || server.includes("health"), "backend health path remains represented");

assert(packageJson.scripts["qa:nexus-os-repository-architecture-baseline"] === "node scripts/nexus-os-repository-architecture-baseline-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-os-repository-architecture-baseline-qa.js"), "safe QA suite includes Rail 1 QA");
assert(registry.consolidationRules.standardUserTechnicalLeakage.prohibitedAtStartup.includes("API keys"), "registry blocks API key display at Standard User startup");
assert(!/TWILIO_AUTH_TOKEN\s*=\s*['\"][^'\"]+['\"]/.test(app + index), "Standard User frontend does not expose Twilio secret values");
assert(!/TAVILY_API_KEY\s*=\s*['\"][^'\"]+['\"]/.test(app + index), "Standard User frontend does not expose live knowledge secret values");

console.log("Nexus OS repository architecture baseline QA passed.");
