const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  index: path.join(root, "public", "index.html"),
  shell: path.join(root, "public", "nexus-voice-demo-shell.js"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  phase16aQa: path.join(root, "scripts", "nexus-voice-demo-shell-phase-16a-qa.js"),
  doc: path.join(root, "docs", "NEXUS_VOICE_DEMO_SHELL_PHASE_16A.md")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-cultural-music-demo-shell-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const index = read(paths.index);
const shell = read(paths.shell);
const app = read(paths.app);
const server = read(paths.server);
const packageJson = read(paths.packageJson);
const qaSuite = read(paths.qaSuite);
const phase16aQa = read(paths.phase16aQa);
const doc = read(paths.doc);

assert(index.includes("id=\"nexusVoiceDemoStopMusicBtn\""), "Standard User voice dock must include Stop Music control.");
assert(index.includes("Stop Music"), "Stop Music control must be visible when music playback is implemented.");

[
  "KENYA_DEMO_MUSIC_RESPONSE",
  "Absolutely. I'll play a Kenya-inspired demo rhythm. This is local demo audio, and I'm not opening an outside music service.",
  "MUSIC_USER_INTERACTION_REQUIRED",
  "Music playback needs a user interaction in this browser. Please click the play control.",
  "DEMO_MUSIC_DURATION_MS",
  "isDemoMusicPlaying",
  "isKenyaMusicCommand",
  "isStopMusicCommand",
  "startKenyaDemoMusic",
  "stopDemoMusic",
  "stopActiveRecognition",
  "stopMusicFromButton"
].forEach(symbol => {
  assert(shell.includes(symbol), `Shell must include ${symbol}.`);
});

[
  "play music from Kenya",
  "play Kenyan music",
  "Kenya-inspired demo rhythm",
  "local demo audio",
  "not opening an outside music service",
  "Stop Music"
].forEach(phrase => {
  assert(`${shell}\n${index}\n${doc}`.includes(phrase), `Music demo coverage must include: ${phrase}`);
});

assert(shell.includes("window.AudioContext || window.webkitAudioContext"), "Music demo must use browser-native Web Audio only.");
assert(shell.includes("context.createOscillator()"), "Music demo must generate local oscillator audio.");
assert(shell.includes("context.createGain()"), "Music demo must use a guarded local gain node.");
assert(shell.includes("window.setTimeout(() => stopDemoMusic"), "Music demo must auto-stop after a short duration.");
assert(shell.includes("stopMusic?.addEventListener(\"click\", stopMusicFromButton)"), "Stop Music must be user-initiated from a click.");
assert(shell.includes("isKenyaMusicCommand(transcript)"), "Voice transcript routing must detect Kenya music command.");
assert(shell.includes("stopActiveRecognition();"), "Music playback must stop active recognition before playing.");
assert(shell.includes("bridge?.showResponse?.(response, { source: COMMAND_SOURCE, musicDemo: true, blocked: false })"), "Music command must only show a safe response through the voice bridge.");

[
  "Spotify",
  "YouTube",
  "Apple Music",
  "SoundCloud",
  "streaming",
  "stream music",
  "live music from Kenya",
  "copyrighted commercial music",
  "licensed authentic track"
].forEach(claim => {
  assert(!shell.includes(claim), `Shell must not claim or integrate unsafe music behavior: ${claim}`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "window.open",
  "location.href",
  "navigator.geolocation",
  "getUserMedia",
  "navigator.mediaDevices",
  "localStorage",
  "sessionStorage",
  "Spotify",
  "YouTube",
  "Apple Music",
  "SoundCloud",
  "third-party audio",
  "backend audio",
  "Audio("
].forEach(forbidden => {
  assert(!shell.includes(forbidden), `Music demo shell must not introduce ${forbidden}.`);
});

[
  "does not stream music",
  "does not claim cultural authenticity",
  "does not claim cultural authenticity or live music from Kenya",
  "does not request microphone permission outside the existing `Talk to Nexus` flow",
  "does not keep listening while music plays",
  "does not change health access, introduction, language switch, high-risk prompt, provider, payment, location, camera, or call behavior"
].forEach(phrase => {
  assert(doc.includes(phrase), `Doc must include music safety boundary: ${phrase}`);
});

[
  "providerHandoff: false",
  "permissionRequested: false",
  "executionAllowed: false"
].forEach(phrase => {
  assert(app.includes(phrase), `Phase 16A bridge must preserve ${phrase}.`);
});

assert(!server.includes("nexus-cultural-music"), "Server must not add backend music service routing.");
assert(!server.includes("AudioContext"), "Server must not add backend audio behavior.");

const packageData = JSON.parse(packageJson);
assert(packageData.scripts["qa:nexus-cultural-music-demo-shell"] === "node scripts/nexus-cultural-music-demo-shell-qa.js", "package.json must include cultural music QA alias.");
assert(!Object.keys(packageData.dependencies || {}).some(name => /spotify|youtube|music|audio|soundcloud|stream/i.test(name)), "No music/audio/streaming dependency should be added.");
assert(qaSuite.includes("scripts/nexus-cultural-music-demo-shell-qa.js"), "nexus-workforce QA suite must include cultural music QA.");
assert(phase16aQa.includes("nexusVoiceDemoStopMusicBtn"), "Existing Phase 16A QA must cover Stop Music control.");

console.log("[nexus-cultural-music-demo-shell-qa] passed");
