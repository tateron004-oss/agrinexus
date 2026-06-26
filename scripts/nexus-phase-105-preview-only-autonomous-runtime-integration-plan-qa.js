const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const docPath = path.join(root, "docs", "NEXUS_PHASE_102_103_104_105_AGRICULTURE_PREVIEW_ONLY_AUTONOMOUS_PLAN.md");
const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-phase-105-preview-only-autonomous-runtime-integration-plan-qa] ${message}`);
    process.exit(1);
  }
}

[docPath, packagePath, qaSuitePath, indexPath, appPath, serverPath].forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));

const doc = fs.readFileSync(docPath, "utf8");
const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const qaSuite = fs.readFileSync(qaSuitePath, "utf8");
const activeRuntime = [indexPath, appPath, serverPath].map(filePath => fs.readFileSync(filePath, "utf8")).join("\n");

[
  "Phase 102: Agriculture Source Registry Hardening",
  "Phase 103: Source Selection Contract",
  "Phase 104: Local Agriculture Intent Router",
  "Phase 105: Runtime Integration Plan",
  "Source-backed agriculture support response cards, still preview-only and no-execution",
  "no live source lookup",
  "no provider contact",
  "no call, message, WhatsApp, SMS, Telegram, or email",
  "no payment, marketplace transaction, location sharing, camera, upload, diagnosis",
  "canExecute: false",
  "executionAuthority: \"none\""
].forEach(required => assert(doc.includes(required), `plan doc must include ${required}.`));

[
  "nexus-agriculture-source-registry-phase-102.js",
  "nexus-agriculture-source-selection-phase-103.js",
  "nexus-agriculture-intent-router-phase-104.js"
].forEach(hook => assert(!activeRuntime.includes(hook), `active runtime must not load ${hook}.`));

assert(packageData.scripts["qa:nexus-phase-105-preview-only-autonomous-runtime-integration-plan"] === "node scripts/nexus-phase-105-preview-only-autonomous-runtime-integration-plan-qa.js", "package alias must exist.");
assert(qaSuite.includes("scripts/nexus-phase-105-preview-only-autonomous-runtime-integration-plan-qa.js"), "qa-suite must include Phase 105 QA.");

console.log("[nexus-phase-105-preview-only-autonomous-runtime-integration-plan-qa] passed");
