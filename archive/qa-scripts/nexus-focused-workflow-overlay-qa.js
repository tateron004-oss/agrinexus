const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const styles = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "data-nexus-workflow-modal=\"true\"",
  "nexus-active-workflow-modal",
  "role=\"dialog\"",
  "aria-modal=\"true\"",
  "Focused Nexus function window",
  "data-nexus-workflow-close",
  "Close function window",
  "$(\"#nexusCommandCenterInput\")?.focus?.({ preventScroll: true })"
].forEach(token => includes(app, token, `focused workflow overlay ${token}`));

[
  "function nexusWorkflowLaneUserStatus(lane = {})",
  "Preparation workspace is ready",
  "Preparation ready",
  "You can prepare the packet now; live handoff stays gated.",
  "live partner connection needs credentials",
  "The live partner connector is not connected yet"
].forEach(token => includes(app, token, `user-friendly lane language ${token}`));

[
  "body.user-mode .nexus-workflow-modal-backdrop",
  "position: fixed",
  "z-index: 80",
  "backdrop-filter: blur(18px)",
  "max-height: calc(100vh",
  "overscroll-behavior: contain",
  "overflow-y: auto",
  "overflow-wrap: anywhere",
  "word-break: normal",
  "writing-mode: horizontal-tb",
  "grid-template-columns: repeat(2, minmax(240px, 1fr))",
  "grid-template-columns: repeat(auto-fit, minmax(210px, 1fr))"
].forEach(token => includes(styles, token, `focused workflow CSS ${token}`));

[
  "Workflow is open in preparation mode because this provider lane is not configured.",
  "Live mode not active; packet preparation/queue is available."
].forEach(token => excludes(app, token, `raw connector-first wording ${token}`));

[
  "live provider appointment was scheduled",
  "provider contacted successfully",
  "payment processed successfully",
  "prescription sent successfully",
  "emergency dispatch started",
  "location shared automatically"
].forEach(token => excludes(app.toLowerCase(), token.toLowerCase(), `false execution claim ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-focused-workflow-overlay"],
  "node scripts/nexus-focused-workflow-overlay-qa.js",
  "package alias should run focused workflow overlay QA"
);
includes(qaSuite, "scripts/nexus-focused-workflow-overlay-qa.js", "qa-suite should include focused workflow overlay QA");

console.log("Nexus focused workflow overlay QA passed.");
