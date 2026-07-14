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
const trueHome = sectionBetween(app, "function renderNexusTrueHome()", "function renderNexusAudioCompanionExperience");
const voiceGate = sectionBetween(app, "function renderNexusGenesisHomeVoiceGate()", "function renderNexusTrueHome()");
const hero = sectionBetween(app, "function renderNexusCommandCenterHero()", "function nexusActiveSidebarId");
const workspace = sectionBetween(app, "function renderUserWorkspace()", "function renderUserAccessibilityPanel");

assert(topWelcome.includes("Nexus is ready"), "top welcome uses Nexus readiness language");
assert(topWelcome.includes("Your assistant is here."), "top welcome has a calm assistant-first greeting");
assert(!topWelcome.includes("Good to see you"), "top welcome no longer uses personal dashboard greeting");
assert(!topWelcome.includes("Standard User"), "top welcome does not show Standard User role copy");
assert(!topWelcome.includes("displayName"), "top welcome does not depend on role/profile display name");
assert(trueHome.includes('data-nexus-genesis-orb-only-home="true"'), "true home fallback remains isolated");
assert(!trueHome.includes("Good evening, Ron."), "true home does not show visible greeting");
assert(!trueHome.includes("What are we working on today?"), "true home does not show visible helper text");
assert(trueHome.includes("Nexus Genesis home is audio-only."), "true home preserves audio-first readiness language");
assert(trueHome.includes("renderNexusGenesisHomeVoiceGate()"), "true home mounts a separate microphone permission gate");
assert(voiceGate.includes("data-nexus-genesis-mic-permission-control"), "voice gate exposes a separate microphone permission control");
assert(!trueHome.includes("Activate the Nexus orb"), "true home does not instruct orb activation");
assert(hero.includes("Hello. I'm Nexus."), "hero owns the conversational first impression");
assert(hero.includes("Talk to Nexus naturally. When a workflow needs exact details, Nexus will open structured fields for that workflow."), "hero includes natural voice-first greeting");
assert(!workspace.includes("renderNexusTopWelcomeArea()"), "top welcome is not mounted in Standard User true home startup");
assert(workspace.includes("renderNexusCommandCenterHero"), "hero remains the Standard User command center");
assert(!/sent successfully|payment completed|provider contacted|appointment booked|dispatch started/i.test(topWelcome + trueHome + hero), "first impression does not claim external execution");

assert(packageJson.scripts["qa:nexus-first-impression-greeting"] === "node scripts/nexus-first-impression-greeting-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-first-impression-greeting-qa.js"), "safe QA suite includes first impression greeting QA");

console.log("Nexus first impression greeting QA passed.");
