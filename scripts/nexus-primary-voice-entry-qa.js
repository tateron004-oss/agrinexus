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
const commandRow = sectionBetween(hero, '<div class="nexus-command-input-row">', '<div class="nexus-command-context">');
const voiceHandler = sectionBetween(app, "async function handleNexusOsVoiceControlAction", "function userIsActivelySpeaking");
const rail3Styles = sectionBetween(styles, "Genesis Experience Rail 3", "body.user-mode .nexus-workflow-landing-window");

assert(hero.includes('data-nexus-primary-voice-entry="true"'), "primary voice entry has stable marker");
assert(hero.includes('class="nexus-command-mic nexus-primary-voice-entry"'), "Talk button uses primary voice class");
assert(hero.includes('data-nexus-os-voice-control="toggle-listening"'), "Talk button uses existing guarded voice control action");
assert(hero.includes('aria-label="${escapeHtml(translateText("Talk to Nexus"))}"'), "Talk button has accessible voice label");
assert(hero.includes('>${escapeHtml(translateText("Talk"))}</button>'), "voice entry uses Talk label instead of utility Mic copy");
assert(hero.includes('data-nexus-primary-voice-hint="true"'), "voice hint is rendered near command controls");
assert(hero.includes("Enable voice once, press Talk, or type your request."), "voice hint keeps typed fallback visible");
assert(commandRow.indexOf("data-nexus-primary-voice-entry") < commandRow.indexOf("nexusCommandCenterInput"), "voice entry appears before typed input in the command row");
assert(voiceHandler.includes("await startVoiceListening({ source });"), "voice action remains routed through existing guarded listening helper");
assert(app.includes('event.target.closest("[data-nexus-command-center-voice]")'), "command center voice clicks are handled by existing click binding");
assert(app.includes('handleNexusOsVoiceControlAction("toggle-listening", { source: "command-center-mic" })'), "voice click binding starts the guarded toggle-listening action");
assert(rail3Styles.includes(".nexus-primary-voice-entry"), "primary voice entry receives visible first-viewport styling");
assert(rail3Styles.includes("min-width: 96px !important"), "primary voice entry is large enough to read and tap");
assert(rail3Styles.includes("auto minmax(0, 1fr) auto"), "command row puts voice entry before text input");
assert(!/always-on|always listening|background microphone|silent microphone/i.test(hero), "voice copy does not imply always-on microphone behavior");

assert(packageJson.scripts["qa:nexus-primary-voice-entry"] === "node scripts/nexus-primary-voice-entry-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-primary-voice-entry-qa.js"), "safe QA suite includes primary voice entry QA");

console.log("Nexus primary voice entry QA passed.");
