const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-genesis-home-control-removal-qa] FAIL: ${message}`);
    process.exit(1);
  }
}

function sectionBetween(source, start, end, label) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${label} missing start ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${label} missing end ${end}`);
  return source.slice(startIndex, endIndex);
}

function includesAll(source, tokens, label) {
  for (const token of tokens) {
    assert(source.includes(token), `${label} missing ${token}`);
  }
}

const home = sectionBetween(app, "function renderNexusTrueHome", "function renderNexusAudioCompanionExperience", "Genesis home");
const voiceGate = sectionBetween(app, "function renderNexusGenesisHomeVoiceGate", "function renderNexusTrueCommandComposer", "Genesis home voice gate");
const orb = sectionBetween(app, "function renderNexusTrueCoreOrb", "function handleNexusPrimaryVoiceButtonClick", "Genesis orb renderer");
const workspace = sectionBetween(app, "function renderUserWorkspace", "function renderUserAccessibilityPanel", "workspace renderer");
const autoStart = sectionBetween(app, "async function maybeStartGenesisRecognitionAfterGrantedPermission", "function nexusVoiceAudioDebugEnabled", "permission-granted auto-start");
const orbCss = sectionBetween(app, "[data-nexus-os-core-orb] {", "[data-nexus-os-core-orb].nexus-core-state-idle", "inline orb CSS");
const homeOrbCss = sectionBetween(styles, "body.user-mode .nexus-genesis-orb-only-home .nexus-true-orb-stage {", "body.user-mode .nexus-genesis-orb-only-home .nexus-true-orb-stage:focus-visible", "home orb CSS");

includesAll(home, [
  "data-nexus-genesis-orb-only-home=\"true\"",
  "renderNexusTrueCoreOrb({ home: true })",
  "renderNexusGenesisHomeVoiceGate()",
  "Nexus Genesis home is audio-only.",
  "non-interactive voice companion presence"
], "Genesis home");
assert(!home.includes("renderNexusTrueCommandComposer"), "Genesis home must not mount a general text composer");
assert(!home.includes("nexusCommandCenterInput"), "Genesis home must not include command center text input");
assert(!home.includes("Talk to Nexus"), "Genesis home must not show a Talk button");
assert(!home.includes("Start Conversation"), "Genesis home must not show a Start Conversation button");

assert(!voiceGate.includes('data-nexus-os-voice-control="toggle-listening"'), "home voice gate must not include a Talk control");
assert(!voiceGate.includes('data-nexus-os-voice-control="stop-listening"'), "home voice gate must not include permanent Stop listening");
assert(!voiceGate.includes('data-nexus-os-voice-control="stop-speaking"'), "home voice gate must not include permanent Stop speaking");
assert(!voiceGate.includes('data-nexus-os-voice-control="repeat-response"'), "home voice gate must not include permanent Repeat response");
assert(!voiceGate.includes('data-nexus-os-voice-control="${nexusOsConversationMuted ? "unmute" : "mute"}"'), "home voice gate must not include permanent Mute/Unmute");
includesAll(voiceGate, [
  "data-nexus-genesis-mic-permission-control=\"true\"",
  "data-nexus-os-voice-control=\"enable-voice\"",
  "Allow microphone",
  "showPermissionControl",
  "renderNexusGenesisVoiceDebugPanel"
], "pre-authorization microphone permission control");

includesAll(orb, [
  "role=\"img\"",
  "data-nexus-genesis-home-orb=\"true\"",
  "data-nexus-genesis-orb-presence=\"true\""
], "Genesis orb");
assert(!orb.includes("role=\"button\""), "orb must not expose button role");
assert(!orb.includes("tabindex=\"0\""), "orb must not be keyboard focusable");
assert(!orb.includes("onclick"), "orb must not attach click behavior");
assert(!app.includes("function handleNexusGenesisOrbActivation"), "legacy orb activation handler must remain removed");
assert(!app.includes("handleNexusGenesisOrbActivation"), "legacy orb activation references must remain removed");

includesAll(orbCss, ["pointer-events: none !important", "cursor: default !important"], "inline orb non-interaction CSS");
includesAll(homeOrbCss, ["pointer-events: none", "cursor: default"], "home orb non-interaction CSS");

includesAll(autoStart, [
  "permission !== \"granted\"",
  "genesis-auto-start-triggered",
  "genesis-home-permission-granted-auto-start"
], "permission-granted recognition auto-start");
assert(!autoStart.includes("role=\"button\""), "auto-start must not add an orb/button path");
assert(workspace.includes("maybeStartGenesisRecognitionAfterGrantedPermission(\"render-user-workspace\")"), "workspace render should schedule granted-permission auto-start");
assert(app.includes("voiceDebug=1"), "debug panel must stay gated behind voiceDebug=1");

assert(pkg.scripts["qa:nexus-genesis-home-control-removal"] === "node scripts/nexus-genesis-home-control-removal-qa.js", "package alias missing");
assert(qaSuite.includes("scripts/nexus-genesis-home-control-removal-qa.js"), "qa-suite missing home control removal QA");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-home-control-removal",
  verifies: [
    "Genesis home has no general typed composer",
    "Genesis home has no Talk/Stop/Mute/Repeat row",
    "separate microphone permission control remains before authorization",
    "orb remains permanently non-interactive",
    "granted permission can bootstrap recognition without using the orb"
  ]
}, null, 2));
