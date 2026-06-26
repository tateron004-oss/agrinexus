const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C11_SOURCE_BACKED_AGRICULTURE_DEFAULT_OFF_RUNTIME_WIRING_CONTRACT.md"),
  c10Doc: path.join(root, "docs", "NEXUS_SPRINT_C10_SOURCE_BACKED_AGRICULTURE_DEFAULT_OFF_WIRING_READINESS_AUDIT.md"),
  c9Doc: path.join(root, "docs", "NEXUS_SPRINT_C9_SOURCE_BACKED_AGRICULTURE_RUNTIME_MAPPING_BROWSER_VALIDATION_PLAN.md"),
  c8Mapper: path.join(root, "public", "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

const mapperFileName = "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js";
const futureFlagName = "enableSourceBackedAgricultureRuntimeMapping";

function fail(message) {
  console.error(`[nexus-sprint-c11-source-backed-agriculture-default-off-runtime-wiring-contract-qa] ${message}`);
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
const c10Doc = read(files.c10Doc);
const c9Doc = read(files.c9Doc);
const index = read(files.index);
const app = read(files.app);
const server = read(files.server);
const packageData = JSON.parse(read(files.packageJson));
const qaSuite = read(files.qaSuite);
const c8Mapper = require(files.c8Mapper);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Canonical Future Flag",
  "Prohibited Flag Sources Until Separately Approved",
  "Flag-Off Runtime Contract",
  "Future Flag-On Runtime Contract",
  "Future Loader Sequence",
  "Excluded Prompt Contract",
  "Future Browser Validation Contract",
  "Sprint C11 QA Expectations",
  "Sprint C12 Recommendation",
  "inert documentation and QA only",
  "does not add runtime feature flag code",
  "does not import or load the C8 mapper",
  "does not render a visible card",
  "does not change Standard User behavior"
], "Sprint C11 contract doc");

includesAll(doc, [
  futureFlagName,
  "The flag must be a boolean",
  "The default must be `false`",
  "malformed flag values as `false`"
], "canonical future flag");

includesAll(doc, [
  "localStorage",
  "sessionStorage",
  "URL query parameters",
  "cookies",
  "server config",
  "user profile data",
  "role data",
  "hidden debug state",
  "browser devtools snippets",
  "voice commands",
  "typed commands",
  "separate review sprint"
], "prohibited flag sources");

includesAll(doc, [
  "no C8 mapper script tag",
  "no C8 import, require, or dynamic import",
  "no C8 helper reference",
  "no C6 fixture packet generated",
  "no C8 preview model generated",
  "no visible source-backed agriculture preview card from C8",
  "no hidden source-backed agriculture preview metadata",
  "no DOM insertions",
  "no route changes",
  "no modal openings",
  "no pending actions",
  "no confirmation state changes",
  "no provider handoff",
  "no network lookup",
  "no storage write",
  "no backend write",
  "no permission prompt"
], "flag-off runtime contract");

includesAll(doc, [
  "only low-risk agriculture support prompts may be eligible",
  "C6 packet eligibility must pass",
  "C8 mapper eligibility must pass",
  "`visiblePreviewAllowed` must be `true`",
  "`renderDomAllowed` must remain `false`",
  "every execution authority flag must be exactly `false`",
  "`Evidence & Verification`",
  "`No action has been taken.`",
  "controls must be disabled, inert, or review-only",
  "no provider, payment, marketplace, location, camera, medical, pharmacy, telehealth, appointment, emergency, call, or message execution may occur"
], "future flag-on runtime contract");

includesAll(doc, [
  "Read the explicit boolean flag",
  "stop before loading the C8 mapper",
  "Validate prompt eligibility",
  "Build or receive a safe source-backed agriculture packet",
  "Validate all C6 no-execution flags",
  "Map the packet through C8",
  "Reject any model that is not `visiblePreviewAllowed: true`",
  "Render only through a separately approved",
  "Preserve all no-execution"
], "future loader sequence");

includesAll(doc, [
  "Call an extension worker",
  "Message the seller",
  "Buy seeds",
  "Pay for fertilizer",
  "Use my location to find farms near me",
  "Open my camera for crop diagnosis",
  "Schedule an appointment",
  "Emergency pesticide poisoning",
  "Tell me the pesticide dose to spray",
  "Sell my crop"
], "excluded prompt contract");

includesAll(doc, [
  "Sprint C9 browser validation plan",
  "Standard User path",
  "console warnings and errors",
  "network requests",
  "storage writes",
  "`db.json` mutations",
  "route changes",
  "modal openings",
  "permission prompts",
  "runtime mutation restoration"
], "future browser validation contract");

assert(c10Doc.includes("Sprint C11 should create a default-off runtime wiring design contract"), "C10 doc must recommend C11 design contract.");
assert(c9Doc.includes("Future browser validation must use"), "C9 browser validation plan must remain present.");
assert(c8Mapper.MAPPER_VERSION === "nexus.sprintC8.sourceBackedAgricultureVisiblePreviewMapper.v1", "C8 mapper version must remain stable.");

assert(!index.includes(mapperFileName), "public/index.html must not load the C8 mapper.");
[
  `import "${mapperFileName}"`,
  `import '${mapperFileName}'`,
  `require("./${mapperFileName}")`,
  `require('${mapperFileName}')`,
  `import("./${mapperFileName}")`,
  `import('/${mapperFileName}')`,
  "NexusSprintC8SourceBackedAgricultureVisiblePreviewMapper"
].forEach(fragment => {
  assert(!app.includes(fragment), `public/app.js must not import or reference C8 mapper fragment: ${fragment}`);
});
assert(!server.includes(mapperFileName), "server.js must not explicitly inject or special-case the C8 mapper.");

const activeRuntime = [index, app, server].join("\n");
assert(!activeRuntime.includes(futureFlagName), "active runtime must not contain the future Sprint C11 feature flag name.");

const alias = "qa:nexus-sprint-c11-source-backed-agriculture-default-off-runtime-wiring-contract";
const command = "node scripts/nexus-sprint-c11-source-backed-agriculture-default-off-runtime-wiring-contract-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c11-source-backed-agriculture-default-off-runtime-wiring-contract-qa.js"), "qa-suite must include Sprint C11 QA.");

console.log("[nexus-sprint-c11-source-backed-agriculture-default-off-runtime-wiring-contract-qa] passed");
