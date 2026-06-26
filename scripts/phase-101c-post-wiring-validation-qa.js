const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  index: path.join(root, "public", "index.html"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  phase101Module: path.join(root, "public", "nexus-agriculture-support-response-card.js"),
  phase101Qa: path.join(root, "scripts", "nexus-phase-101-agriculture-support-response-card-runtime-qa.js"),
  phase101bQa: path.join(root, "scripts", "nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[phase-101c-post-wiring-validation-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));

const index = fs.readFileSync(paths.index, "utf8");
const packageData = JSON.parse(fs.readFileSync(paths.packageJson, "utf8"));
const qaSuite = fs.readFileSync(paths.qaSuite, "utf8");
const phase101bQa = fs.readFileSync(paths.phase101bQa, "utf8");
const phase101 = require(paths.phase101Module);

const loaderMatches = index.match(/<script\s+src=["']\/nexus-agriculture-support-response-card\.js\?v=nexus-phase-101["']><\/script>/g) || [];
assert(loaderMatches.length === 1, `public/index.html must include exactly one Phase 101 loader; found ${loaderMatches.length}.`);
assert(index.indexOf("nexus-agriculture-support-response-card.js?v=nexus-phase-101") < index.indexOf("/app.js?v=nexus-behavior-305"), "Phase 101 loader must appear before app.js.");

assert(packageData.scripts && packageData.scripts["qa:nexus-phase-101-agriculture-support-response-card-runtime"] === "node scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js", "package.json must include Phase 101 runtime QA alias.");
assert(packageData.scripts && packageData.scripts["qa:nexus-phase-101b-standard-user-runtime-wiring-readiness"] === "node scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js", "package.json must include Phase 101B readiness QA alias.");

const runtimeQaCount = (qaSuite.match(/scripts\/nexus-phase-101-agriculture-support-response-card-runtime-qa\.js/g) || []).length;
const readinessQaCount = (qaSuite.match(/scripts\/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa\.js/g) || []).length;
assert(runtimeQaCount >= 2, `scripts/qa-suite.js must include Phase 101 runtime QA in nexus-workforce and all-safe; found ${runtimeQaCount}.`);
assert(readinessQaCount >= 2, `scripts/qa-suite.js must include Phase 101B readiness QA in nexus-workforce and all-safe; found ${readinessQaCount}.`);

assert(phase101bQa.includes("assert(loaderPresent"), "Phase 101B QA must expect loader presence after Phase 101C wiring.");
assert(!phase101bQa.includes("expects Phase 101C to perform the actual index.html loader insertion"), "Phase 101B QA must not still expect the loader to be absent.");

const safeCard = phase101.buildAgricultureSupportCard("My maize leaves are turning yellow");
assert(safeCard && safeCard.executionAllowed === false, "Phase 101 module must still build safe non-executing agriculture card.");
assert(phase101.buildAgricultureSupportCard("Call an agronomist") === null, "Phase 101 module must still block provider/call prompts.");

console.log("[phase-101c-post-wiring-validation-qa] passed");
