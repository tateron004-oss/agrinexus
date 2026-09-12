const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C10_SOURCE_BACKED_AGRICULTURE_DEFAULT_OFF_WIRING_READINESS_AUDIT.md"),
  c8Doc: path.join(root, "docs", "NEXUS_SPRINT_C8_SOURCE_BACKED_AGRICULTURE_VISIBLE_PREVIEW_MAPPER.md"),
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
const auditFragment = "NEXUS_SPRINT_C10_SOURCE_BACKED_AGRICULTURE_DEFAULT_OFF_WIRING_READINESS_AUDIT";

function fail(message) {
  console.error(`[nexus-sprint-c10-source-backed-agriculture-default-off-wiring-readiness-audit-qa] ${message}`);
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
const c8Doc = read(files.c8Doc);
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
  "Current Runtime Boundary",
  "Candidate Future Insertion Points Reviewed",
  "Required Future Feature Flag Contract",
  "Flag-Off Standard User Expectations",
  "Future Enabled-State Minimum Safety Requirements",
  "Excluded Prompt Boundary",
  "Browser Validation Requirement",
  "Sprint C10 QA Expectations",
  "Sprint C11 Recommendation",
  "inert documentation and QA only",
  "does not load the C8 mapper",
  "does not add a feature flag to runtime code",
  "does not render source-backed preview UI",
  "does not change backend behavior"
], "Sprint C10 audit doc");

includesAll(doc, [
  "`public/index.html`",
  "`public/app.js`",
  "`server.js`",
  "The mapper may remain available as a static repository artifact",
  "deterministic QA or fixture harnesses"
], "runtime boundary");

includesAll(doc, [
  "`public/index.html` script order",
  "`public/app.js` source-backed agriculture response-card preparation",
  "`public/app.js` controlled low-risk renderer hidden mount preflight checks",
  "`public/app.js` Ask Nexus / global assistant preview rendering",
  "`public/nexus-agriculture-support-response-card.js` visible agriculture card renderer",
  "existing hidden mount point `nexus-controlled-low-risk-renderer-root`"
], "candidate future insertion points");

includesAll(doc, [
  futureFlagName,
  "default value is `false`",
  "no localStorage override unless separately approved",
  "no URL query override unless separately approved",
  "no server-provided override unless separately approved",
  "disabled state loads no mapper",
  "enabled state still remains preview-only and non-executing"
], "future feature flag contract");

includesAll(doc, [
  "no visible source-backed agriculture preview from the C8 mapper",
  "no C8 mapper script tag",
  "no C8 dynamic import",
  "no C8 helper references in `public/app.js`",
  "no C8 helper references in `server.js`",
  "no hidden executable metadata",
  "no permission prompt",
  "no provider handoff",
  "no marketplace transaction",
  "no payment",
  "no location, camera, microphone, upload, or media capture",
  "no medical, pharmacy, telehealth, appointment, or emergency execution"
], "flag-off expectations");

includesAll(doc, [
  "C6 packet eligibility",
  "C8 mapper eligibility",
  "source-backed status",
  "`No action has been taken.`",
  "disabled or review-only controls",
  "explicit exclusion of high-risk prompts",
  "all execution authority flags exactly `false`",
  "browser validation from the C9 plan before commit"
], "future enabled-state minimum safety requirements");

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
], "excluded prompt boundary");

assert(c8Doc.includes("Sprint C9 should add a browser-validation plan"), "C8 doc must still recommend C9.");
assert(c9Doc.includes("Sprint C10 should add a default-off runtime wiring readiness audit"), "C9 doc must recommend C10 readiness audit.");
assert(c8Mapper.MAPPER_VERSION === "nexus.sprintC8.sourceBackedAgricultureVisiblePreviewMapper.v1", "C8 mapper version must remain stable.");
assert(c8Mapper.buildFixtureVisiblePreviewModel("Help me find agriculture training").visiblePreviewAllowed === true, "C8 mapper fixture must still produce preview metadata for safe agriculture training prompt.");

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
assert(!activeRuntime.includes(futureFlagName), "active runtime must not contain the future C10 feature flag name yet.");
assert(!activeRuntime.includes(auditFragment), "active runtime must not contain the C10 audit-only document fragment.");

const alias = "qa:nexus-sprint-c10-source-backed-agriculture-default-off-wiring-readiness-audit";
const command = "node scripts/nexus-sprint-c10-source-backed-agriculture-default-off-wiring-readiness-audit-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c10-source-backed-agriculture-default-off-wiring-readiness-audit-qa.js"), "qa-suite must include Sprint C10 QA.");

console.log("[nexus-sprint-c10-source-backed-agriculture-default-off-wiring-readiness-audit-qa] passed");
