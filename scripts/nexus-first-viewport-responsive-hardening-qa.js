const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, label) {
  if (!condition) {
    console.error(`FAIL ${label}`);
    process.exit(1);
  }
  console.log(`PASS ${label}`);
}

function sectionBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert(start >= 0, `${startNeedle} exists`);
  const end = source.indexOf(endNeedle, start);
  assert(end > start, `${endNeedle} follows ${startNeedle}`);
  return source.slice(start, end);
}

const styles = read("public/styles.css");
const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const genesisStyles = sectionBetween(styles, "Genesis Experience Rail 3", "body.user-mode .nexus-workflow-landing-window");
const workspace = sectionBetween(app, "function renderUserWorkspace()", "function renderUserAccessibilityPanel");

assert(genesisStyles.includes("@media (max-width: 860px)"), "tablet breakpoint exists");
assert(genesisStyles.includes("@media (max-width: 640px)"), "phone breakpoint exists");
assert(genesisStyles.includes("@media (max-width: 420px)"), "small-phone breakpoint exists");
assert(genesisStyles.includes("@media (max-height: 680px) and (min-width: 861px)"), "short desktop viewport breakpoint exists");
assert(genesisStyles.includes("overflow-x: hidden !important"), "mobile viewport prevents horizontal overflow");
assert(genesisStyles.includes('width: min(100%, calc(100vw - 14px))'), "phone root respects viewport width");
assert(genesisStyles.includes("grid-template-columns: 1fr !important"), "tablet/mobile command row stacks controls");
assert(genesisStyles.includes("overflow-wrap: anywhere !important"), "first-viewport headings can wrap safely");
assert(genesisStyles.includes("width: 184px !important"), "small phone orb scale is bounded");
assert(genesisStyles.includes("width: 100% !important"), "small phone Talk/Ask buttons can become full width");
assert(genesisStyles.includes("flex-direction: column"), "mission banner stacks on mobile");
assert(workspace.includes('data-nexus-genesis-first-viewport="true"'), "first viewport remains explicitly marked");
assert(app.includes('data-nexus-primary-voice-entry="true"'), "responsive hardening preserves voice entry");
assert(app.includes('data-nexus-primary-typed-entry="true"'), "responsive hardening preserves typed entry");
assert(!/sent successfully|payment completed|provider contacted|appointment booked|dispatch started/i.test(workspace), "responsive first viewport does not claim external execution");

assert(packageJson.scripts["qa:nexus-first-viewport-responsive-hardening"] === "node scripts/nexus-first-viewport-responsive-hardening-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-first-viewport-responsive-hardening-qa.js"), "safe QA suite includes responsive hardening QA");

console.log("Nexus first viewport responsive hardening QA passed.");
