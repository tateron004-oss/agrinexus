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
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const topWelcome = sectionBetween(app, "function renderNexusTopWelcomeArea()", "function renderNexusCoreFeatureCards");
const hero = sectionBetween(app, "function renderNexusCommandCenterHero()", "function nexusActiveSidebarId");
const workspace = sectionBetween(app, "function renderUserWorkspace()", "function renderUserAccessibilityPanel");

assert(topWelcome.includes("Nexus is ready"), "top welcome uses Nexus readiness language");
assert(topWelcome.includes("Your assistant is here."), "top welcome has a calm assistant-first greeting");
assert(!topWelcome.includes("Good to see you"), "top welcome no longer uses personal dashboard greeting");
assert(!topWelcome.includes("Standard User"), "top welcome does not show Standard User role copy");
assert(!topWelcome.includes("displayName"), "top welcome does not depend on role/profile display name");
assert(hero.includes("Good morning. I'm Nexus. What would you like to do?"), "hero has natural first-impression Nexus greeting");
assert(hero.includes("Ask Nexus or choose a support area below"), "hero keeps direct next-step guidance");
assert(hero.includes("keeping important actions gated"), "hero preserves safety-gated action language");
assert(workspace.includes("renderNexusTopWelcomeArea()"), "top welcome remains rendered in Standard User workspace");
assert(workspace.includes("renderNexusCommandCenterHero"), "hero remains the Standard User command center");
assert(!/sent successfully|payment completed|provider contacted|appointment booked|dispatch started/i.test(topWelcome + hero), "first impression does not claim external execution");

assert(packageJson.scripts["qa:nexus-first-impression-greeting"] === "node scripts/nexus-first-impression-greeting-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-first-impression-greeting-qa.js"), "safe QA suite includes first impression greeting QA");

console.log("Nexus first impression greeting QA passed.");
