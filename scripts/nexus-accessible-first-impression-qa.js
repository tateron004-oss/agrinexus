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

const hero = sectionBetween(app, "function renderNexusCommandCenterHero()", "function nexusActiveSidebarId");
const genesisStyles = sectionBetween(styles, "Genesis Experience Rail 3", "body.user-mode .nexus-workflow-landing-window");

assert(hero.includes('data-nexus-accessible-first-impression="true"'), "first impression has stable accessibility marker");
assert(hero.includes('aria-labelledby="userWorkspaceTitle"'), "hero is labelled by visible title");
assert(hero.includes('aria-describedby="nexusFirstImpressionDescription nexusCommandTypedHint"'), "hero has explicit description references");
assert(hero.includes('id="nexusFirstImpressionDescription"'), "first impression description has stable id");
assert(hero.includes('aria-describedby="nexusCommandTypedHint"'), "typed entry references keyboard hint");
assert(hero.includes('data-nexus-first-impression-status="true"'), "polite readiness status is present");
assert(hero.includes('aria-live="polite"'), "readiness status uses polite live region");
assert(hero.includes("Nexus is ready. Use Talk or type to begin."), "screen-reader status explains first action");
assert(hero.includes('aria-label="${escapeHtml(translateText("Talk to Nexus"))}"'), "Talk button keeps accessible label");
assert(hero.includes('aria-label="${escapeHtml(translateText("Send to Nexus"))}"'), "Ask button keeps submit accessible label");
assert(genesisStyles.includes(":focus-visible"), "first impression controls have keyboard focus style");
assert(genesisStyles.includes("outline: 3px solid"), "focus style is visible");
assert(genesisStyles.includes("@media (prefers-reduced-motion: reduce)"), "reduced motion support exists");
assert(genesisStyles.includes("@media (forced-colors: active)"), "forced-colors support exists");
assert(genesisStyles.includes("CanvasText"), "forced-colors support uses system colors");
assert(!/sent successfully|payment completed|provider contacted|appointment booked|dispatch started/i.test(hero), "accessible first impression does not claim external execution");

assert(packageJson.scripts["qa:nexus-accessible-first-impression"] === "node scripts/nexus-accessible-first-impression-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-accessible-first-impression-qa.js"), "safe QA suite includes accessible first impression QA");

console.log("Nexus accessible first impression QA passed.");
