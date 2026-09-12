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

const hero = sectionBetween(app, "function renderNexusCommandCenterHeroLegacy()", "function nexusActiveSidebarId");
const composer = sectionBetween(app, "function renderNexusTrueCommandComposer", "function renderNexusTrueSecondaryAccess");
const commandRow = sectionBetween(hero, '<div class="nexus-command-input-row">', '<div class="nexus-command-context">');
const rail3Styles = sectionBetween(styles, "Genesis Experience Rail 3", "body.user-mode .nexus-workflow-landing-window");

assert(composer.includes("Workflow details for Nexus"), "typed entry label is workflow-scoped");
assert(composer.includes('data-nexus-primary-typed-entry="true"'), "typed entry has stable marker");
assert(composer.includes('aria-describedby="nexusCommandTypedHint"'), "typed entry has hint relationship");
assert(composer.includes("Enter workflow details..."), "typed placeholder is workflow-scoped");
assert(composer.includes('data-nexus-primary-typed-submit="true"'), "typed submit has stable marker");
assert(composer.includes('data-nexus-command-center-submit'), "typed submit uses existing command-center submit route");
assert(composer.includes('data-nexus-command-input-target="nexusCommandCenterInput"'), "typed submit targets the primary command input");
assert(composer.includes("Press Enter to add this workflow detail. Use Shift+Enter for a new line."), "typed keyboard hint is workflow-scoped");
assert(commandRow.indexOf("nexusCommandCenterInput") < commandRow.indexOf("data-nexus-primary-typed-submit"), "typed input appears before typed submit button");
assert(app.includes('document.addEventListener("keydown"'), "keyboard binding exists");
assert(app.includes('event.key !== "Enter"'), "keyboard binding handles Enter");
assert(app.includes("event.shiftKey"), "keyboard binding preserves Shift+Enter new lines");
assert(app.includes("#nexusCommandCenterInput"), "keyboard binding targets primary typed entry");
assert(rail3Styles.includes(".nexus-primary-typed-submit"), "typed submit receives first-viewport styling");
assert(rail3Styles.includes(".nexus-primary-typed-hint"), "typed hint receives first-viewport styling");
assert(!/sent successfully|payment completed|provider contacted|appointment booked|dispatch started/i.test(hero), "typed entry does not claim external execution");

assert(packageJson.scripts["qa:nexus-primary-typed-entry"] === "node scripts/nexus-primary-typed-entry-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-primary-typed-entry-qa.js"), "safe QA suite includes primary typed entry QA");

console.log("Nexus primary typed entry QA passed.");
