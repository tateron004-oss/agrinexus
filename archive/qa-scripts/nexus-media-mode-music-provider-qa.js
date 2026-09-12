const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const mediaMode = require("../server/nexusMediaMode");
const agenticBrain = require("../server/nexusAgenticBrainRuntime");

function assertIncludes(source, expected, label) {
  assert(source.includes(expected), `${label} should include ${expected}`);
}

function assertNotIncludes(source, forbidden, label) {
  assert(!source.includes(forbidden), `${label} must not include unsafe pattern: ${forbidden}`);
}

const serverRuntime = read("server/nexusAgenticBrainRuntime.js");
const app = read("public/app.js");
const voiceShell = read("public/nexus-voice-demo-shell.js");
const mediaSource = read("server/nexusMediaMode.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const doc = read("docs/NEXUS_MEDIA_MODE_MUSIC_PROVIDER_INTEGRATION.md");

const requiredCommands = [
  "Play R&B.",
  "Play African music.",
  "Play Afrobeats.",
  "Play Nigerian music.",
  "Play amapiano.",
  "Play highlife.",
  "Play gospel.",
  "Play relaxing music.",
  "Pause music.",
  "Stop music.",
  "Open this in YouTube.",
  "Open this in Spotify.",
  "Use music while I study.",
  "Play background music.",
  "Open R&B in Spotify.",
  "Play Afrobeats on YouTube."
];

for (const command of requiredCommands) {
  assert(mediaMode.isMediaCommand(command), `media mode should recognize: ${command}`);
  const result = mediaMode.buildMediaResponse(command);
  assert.strictEqual(result.ok, true, `${command} should build a safe response`);
  assert.strictEqual(result.execution.noExecutionAuthorized, true, `${command} must not authorize execution`);
  assert.strictEqual(result.execution.noDownloadAuthorized, true, `${command} must not authorize downloads`);
  assert.strictEqual(result.mediaMode.noHostedMusic, true, `${command} must not host music`);
  assert.strictEqual(result.mediaMode.noCachedMedia, true, `${command} must not cache music`);
  assert.strictEqual(result.mediaMode.noFakeProviderPlayback, true, `${command} must not fake provider playback`);
}

const afrobeats = mediaMode.buildMediaResponse("Play Afrobeats.");
const providers = afrobeats.mediaMode.providerOptions;
assert(providers.some(provider => provider.id === "youtube" && provider.url.startsWith("https://www.youtube.com/results?search_query=")), "YouTube search handoff should be present");
assert(providers.some(provider => provider.id === "spotify" && provider.url.startsWith("https://open.spotify.com/search/")), "Spotify search handoff should be present");
assert(providers.some(provider => provider.id === "appleMusic" && provider.url.startsWith("https://music.apple.com/us/search?term=")), "Apple Music search handoff should be present");
assert.strictEqual(mediaMode.buildMediaResponse("Open R&B in Spotify.").mediaMode.providerPreference, "spotify", "Spotify preference should be detected");
assert.strictEqual(mediaMode.buildMediaResponse("Play Afrobeats on YouTube.").mediaMode.providerPreference, "youtube", "YouTube preference should be detected");
assert(providers.some(provider => provider.label === "Open in YouTube"), "YouTube provider label should be present");
assert(providers.some(provider => provider.label === "Open in Spotify"), "Spotify provider label should be present");
assert(providers.some(provider => provider.label === "Open in Apple Music"), "Apple Music provider label should be present");

assertIncludes(serverRuntime, "require(\"./nexusMediaMode\")", "agentic brain runtime");
assertIncludes(serverRuntime, "parts.includes(\"media\")", "agentic brain runtime");
assertIncludes(serverRuntime, "Media/Music provider search handoffs", "capability summary");
assertIncludes(serverRuntime, "R&B, Afrobeats, African music, amapiano, gospel, study music, and relaxing music", "capability summary genre list");
assertIncludes(serverRuntime, "does not host, download, rip, cache, or redistribute copyrighted music", "capability summary copyright boundary");
assertIncludes(serverRuntime, "credentialed media playback remain gated", "capability summary");
assertIncludes(serverRuntime, "show me nexus modes", "capability mode prompt");

assertIncludes(app, "id: \"media\"", "command center shortcuts");
assertIncludes(app, "icon: \"🎵\"", "command center media icon");
assertIncludes(app, "label: \"Music / Media\"", "command center media label");
assertIncludes(app, "R&B, Afrobeats, gospel, study music.", "command center media description");
assertIncludes(app, "Play Afrobeats.", "command center examples");
assertIncludes(app, "Open gospel music on YouTube.", "command center examples");
assertIncludes(app, "data-nexus-media-provider-card", "media card rendering");
assertIncludes(app, "data-nexus-media-provider-link", "media provider links");
assertIncludes(app, "Provider preference", "media card provider preference label");
assertIncludes(app, "Playback/provider status", "media card provider status label");
assertIncludes(app, "does not host, download, scrape, cache, or stream copyrighted music", "media safety copy");

[
  "Health",
  "Providers",
  "Agriculture",
  "AgriTrade",
  "Jobs",
  "Learning",
  "Maps",
  "Messages",
  "Reminders",
  "Language",
  "Offline",
  "Safety"
].forEach(label => {
  assertIncludes(app, `label: "${label}"`, `existing launcher entry ${label}`);
});

assertIncludes(voiceShell, "isMediaProviderHandoffCommand", "voice shell");
assertIncludes(voiceShell, "mediaProviderHandoff", "voice shell bridge metadata");
assertIncludes(voiceShell, "cannot host, download, or play copyrighted music directly", "voice shell fallback");

assertIncludes(doc, "safe provider handoff", "media documentation");
assertIncludes(doc, "No hosting, downloading, scraping, ripping, caching, or redistributing copyrighted music", "media documentation");
assertIncludes(doc, "YouTube", "media documentation");
assertIncludes(doc, "Spotify", "media documentation");
assertIncludes(doc, "Apple Music", "media documentation");

assert.strictEqual(
  packageJson.scripts["qa:nexus-media-mode-music-provider"],
  "node scripts/nexus-media-mode-music-provider-qa.js",
  "package alias should run media mode QA"
);
assertIncludes(qaSuite, "scripts/nexus-media-mode-music-provider-qa.js", "qa suite");

const unsafeSources = { "server/nexusMediaMode.js": mediaSource, "public/app.js": app, "public/nexus-voice-demo-shell.js": voiceShell };
const forbiddenPatterns = [
  "youtube-dl",
  "ytdl",
  "spotify-web-api-node",
  "soundcloud",
  "downloadSong",
  "cacheTrack",
  "ripAudio",
  "streamCopyrighted",
  "live Spotify playback",
  "live YouTube playback",
  "live Apple Music playback",
  "download music",
  "cache music",
  "rip music",
  "autoplay=true",
  "fs.writeFileSync(\"music"
];

for (const [label, source] of Object.entries(unsafeSources)) {
  for (const forbidden of forbiddenPatterns) {
    assertNotIncludes(source, forbidden, label);
  }
}
assertNotIncludes(mediaSource, "navigator.mediaDevices.getUserMedia", "server/nexusMediaMode.js");
assertNotIncludes(voiceShell, "navigator.mediaDevices.getUserMedia", "public/nexus-voice-demo-shell.js media path");

async function assertCapabilityPrompts() {
  for (const prompt of ["What can Nexus do?", "What can Nexus do across all modes?", "Show me Nexus modes."]) {
    const db = {};
    const result = await agenticBrain.handleCommand({ command: prompt }, db, {});
    assert.strictEqual(result.status, "capability_summary", `${prompt} should return capability summary`);
    assert(result.message.includes("Media/Music"), `${prompt} should mention Media/Music`);
    assert(result.message.includes("R&B"), `${prompt} should mention R&B`);
    assert(result.message.includes("Afrobeats"), `${prompt} should mention Afrobeats`);
    assert(result.message.includes("does not host, download, rip, cache, or redistribute copyrighted music"), `${prompt} should include copyright boundary`);
    assert(result.modesCovered.includes("media_music"), `${prompt} should include media_music mode`);
  }
}

assertCapabilityPrompts()
  .then(() => console.log("Nexus Media/Music Mode provider QA passed."))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
