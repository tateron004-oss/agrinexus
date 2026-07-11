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

const app = read("public/app.js");
const styles = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const renderUserWorkspace = sectionBetween(app, "function renderUserWorkspace()", "function renderUserAccessibilityPanel");
const genesisLayout = sectionBetween(styles, "Genesis Experience Rail 3", "body.user-mode .nexus-workflow-landing-window");

assert(renderUserWorkspace.includes("nexus-genesis-experience-root"), "Standard User root has Genesis layout class");
assert(renderUserWorkspace.includes('data-nexus-genesis-first-viewport="true"'), "first viewport target remains explicit");
assert(genesisLayout.includes("body.user-mode .nexus-genesis-experience-root"), "Genesis root has a dedicated layout override");
assert(genesisLayout.includes("display: block !important"), "Genesis root disables inherited dashboard grid squeezing");
assert(genesisLayout.includes("width: min(1180px, calc(100vw - 32px))"), "Genesis root has full first-viewport width");
assert(genesisLayout.includes("grid-template-columns: minmax(0, 1fr) !important"), "Genesis main uses one full-width column");
assert(genesisLayout.includes('"copy orb"'), "hero keeps copy and orb side by side on desktop");
assert(genesisLayout.includes('"composer composer"'), "typed composer spans the hero width");
assert(genesisLayout.includes(".nexus-command-topbar") && genesisLayout.includes("padding: 16px 18px !important"), "top welcome strip is compact in the first viewport");
assert(genesisLayout.includes(".nexus-command-topbar p") && genesisLayout.includes("display: none !important"), "top welcome body copy does not push Nexus Core below the fold");
assert(genesisLayout.includes(".nexus-presence-layer"), "verbose presence layer is suppressed in first viewport");
assert(genesisLayout.includes(".nexus-command-landing-actions") && genesisLayout.includes("display: none !important"), "legacy landing actions do not crowd first viewport");
assert(genesisLayout.includes(".nexus-command-landing-status-strip"), "legacy landing status strip is suppressed in first viewport");
assert(genesisLayout.includes(".nexus-presence-continuity"), "verbose presence continuity is suppressed in first viewport");
assert(genesisLayout.includes("grid-area: orb"), "orb stage is explicitly placed");
assert(genesisLayout.includes("grid-area: composer"), "typed composer is explicitly placed");
assert(genesisLayout.includes("grid-template-columns: minmax(0, 1fr) auto auto !important"), "typed and voice controls remain visible in the first viewport");
assert(genesisLayout.includes('[data-nexus-os-voice-control="toggle-listening"]'), "primary voice control receives explicit visible sizing");
assert(genesisLayout.includes("visibility: visible !important"), "primary voice control cannot collapse in the Genesis first viewport");
assert(genesisLayout.includes("clamp(210px, 25vw, 300px)"), "Nexus orb receives first-viewport scale");
assert(genesisLayout.includes("@media (max-width: 860px)"), "Genesis layout has mobile fallback");
assert(genesisLayout.includes('"copy"') && genesisLayout.includes('"orb"') && genesisLayout.includes('"composer"'), "mobile layout stacks copy, orb, and composer");
assert(app.includes('data-nexus-os-core-orb="true"'), "Nexus Core orb remains rendered");
assert(app.includes('data-nexus-command-composer="true"'), "typed command composer remains rendered");
assert(!/sent successfully|payment completed|provider contacted|appointment booked|dispatch started/i.test(renderUserWorkspace), "first viewport does not claim external execution");

assert(packageJson.scripts["qa:nexus-core-first-viewport"] === "node scripts/nexus-core-first-viewport-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-core-first-viewport-qa.js"), "safe QA suite includes core first viewport QA");

console.log("Nexus Core first viewport QA passed.");
