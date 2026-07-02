const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const mediaMode = require("../server/nexusMediaMode");
const agenticBrain = require("../server/nexusAgenticBrainRuntime");

const app = read("public/app.js");
const styles = read("public/styles.css");
const voiceShell = read("public/nexus-voice-demo-shell.js");
const mediaSource = read("server/nexusMediaMode.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const doc = read("docs/NEXUS_MUSIC_ICON_MEDIA_MODE.md");

function assertIncludes(source, expected, label) {
  assert(source.includes(expected), `${label} should include ${expected}`);
}

function assertNotIncludes(source, forbidden, label) {
  assert(!source.includes(forbidden), `${label} must not include unsafe pattern: ${forbidden}`);
}

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
].forEach(label => assertIncludes(app, `label: "${label}"`, `existing mode launcher entry ${label}`));

assertIncludes(app, "id: \"media\"", "Music mode launcher entry");
assertIncludes(app, "label: \"Music / Media\"", "Music mode launcher label");
assertIncludes(app, "R&B, Afrobeats, gospel, study music.", "Music mode launcher compact description");
assertIncludes(app, "command: \"Play Afrobeats.\"", "Music icon click command");
assertIncludes(app, "data-nexus-mode-shortcut", "mode launcher click contract");
assertIncludes(styles, "body.user-mode .nexus-mode-launcher", "Standard User launcher styles");
assertIncludes(styles, "body.user-mode .nexus-mode-launcher button", "launcher button sizing");

assertIncludes(app, "data-nexus-media-provider-card", "Media/Music contextual result card");
assertIncludes(app, "data-nexus-media-provider-link", "Media/Music provider links");
assertIncludes(app, "Provider preference", "Media/Music card provider preference");
assertIncludes(app, "Playback/provider status", "Media/Music card provider status");
assertIncludes(app, "does not host, download, scrape, cache, or stream copyrighted music", "Media/Music visible safety copy");
assertIncludes(app, "function isNexusMediaMusicCommand", "frontend Media/Music command classifier");
assertIncludes(app, "function buildNexusMediaMusicLocalResult", "frontend local Media/Music card builder");
assertIncludes(app, "handleNexusAgenticBrainTypedCommand(command)", "command submit should try safe local typed-command routing");
assertIncludes(app, "handleNexusAgenticBrainTypedCommand(command)) return", "Music shortcut should stay local and review-only when matched");
assertIncludes(app, "if (isNexusMediaMusicCommand(localMediaCommand))", "agentic brain action should guard Media/Music commands before backend requests");
assertIncludes(app, "buildNexusMediaMusicLocalResult(localMediaCommand)", "agentic brain action should render local Media/Music card");
assertIncludes(app, "earlyCommandCenterSubmit", "click listener should intercept Media/Music submit before async handlers");
assertIncludes(app, "earlyModeShortcut", "click listener should intercept Media/Music shortcut before async handlers");
assertIncludes(app, "no_active_nexus_provider_playback", "frontend stop/pause/resume no-active-playback state");
assertIncludes(app, "download_blocked", "frontend download/rip/cache blocked state");
assertIncludes(app, "https://www.youtube.com/results?search_query=", "frontend YouTube search handoff URL");
assertIncludes(app, "https://open.spotify.com/search/", "frontend Spotify search handoff URL");
assertIncludes(app, "https://music.apple.com/us/search?term=", "frontend Apple Music future-gated search URL");
assertNotIncludes(app, "nexus-giant-music-panel", "Standard User app");
assertNotIncludes(app, "music-workflow-tab-wall", "Standard User app");
assertNotIncludes(app, "fake playback", "Standard User app");

const commands = [
  "Play R&B.",
  "Play African music.",
  "Play Afrobeats.",
  "Play Nigerian music.",
  "Play amapiano.",
  "Play highlife.",
  "Play African gospel.",
  "Play gospel.",
  "Play jazz.",
  "Play relaxing music.",
  "Play study music.",
  "Play workout music.",
  "Open R&B in Spotify.",
  "Play Afrobeats on YouTube.",
  "Open gospel music on YouTube.",
  "Pause music.",
  "Stop music.",
  "Resume music.",
  "Download this song."
];

for (const command of commands) {
  assert(mediaMode.isMediaCommand(command), `Music mode should recognize command: ${command}`);
  const result = mediaMode.buildMediaResponse(command);
  assert.strictEqual(result.mode, "Media / Music", `${command} should route to Media / Music`);
  assert.strictEqual(result.execution.noExecutionAuthorized, true, `${command} must not authorize execution`);
  assert.strictEqual(result.execution.noDownloadAuthorized, true, `${command} must not authorize downloads`);
  assert.strictEqual(result.mediaMode.noHostedMusic, true, `${command} must not host music`);
  assert.strictEqual(result.mediaMode.noCachedMedia, true, `${command} must not cache music`);
  assert.strictEqual(result.mediaMode.noFakeProviderPlayback, true, `${command} must not fake playback`);
  assert.strictEqual(result.task.executionAuthority, false, `${command} task must remain non-executing`);
}

const spotify = mediaMode.buildMediaResponse("Open R&B in Spotify.");
assert.strictEqual(spotify.mediaMode.providerPreference, "spotify", "Spotify preference should be detected");

const youtube = mediaMode.buildMediaResponse("Play Afrobeats on YouTube.");
assert.strictEqual(youtube.mediaMode.providerPreference, "youtube", "YouTube preference should be detected");
assert(youtube.mediaMode.providerOptions.some(option => option.label === "Open in YouTube"), "YouTube option should exist");
assert(youtube.mediaMode.providerOptions.some(option => option.label === "Open in Spotify"), "Spotify option should exist");
assert(youtube.mediaMode.providerOptions.some(option => option.label === "Open in Apple Music"), "Apple Music option should exist");
assert(youtube.mediaMode.providerOptions.every(option => /^https:\/\//.test(option.url)), "Provider links should use HTTPS URLs");

const stop = mediaMode.buildMediaResponse("Stop music.");
assert.strictEqual(stop.status, "media_no_active_playback", "Stop music should be no-active-playback safe response");
assert.strictEqual(stop.mediaMode.providerOptions.length, 0, "Stop music should not create provider options");
assert(stop.message.includes("does not have active provider playback"), "Stop music should avoid fake stop claim");

const blockedDownload = mediaMode.buildMediaResponse("Download this song.");
assert.strictEqual(blockedDownload.status, "media_download_blocked", "Download request should be blocked");
assert.strictEqual(blockedDownload.mediaMode.playbackStatus, "download_blocked", "Download request should expose blocked status");
assert(blockedDownload.message.includes("cannot download, rip, cache, host, or redistribute"), "Download block should explain copyright boundary");

assertIncludes(voiceShell, "isMediaProviderHandoffCommand", "voice media routing");
assertIncludes(voiceShell, "jazz|youtube|spotify|apple music|study|background|relaxing|workout|exercise|fitness", "voice media expanded genre routing");
assertIncludes(voiceShell, "MUSIC_NO_ACTIVE_PROVIDER_PLAYBACK", "voice no-active-playback response");
assertIncludes(voiceShell, "mediaProviderHandoff", "voice provider handoff metadata");

assertIncludes(mediaSource, "isBlockedMusicDownloadCommand", "blocked music download guard");
assertIncludes(mediaSource, "download_blocked", "blocked music download status");

[
  "youtube-dl",
  "ytdl",
  "spotify-web-api-node",
  "soundcloud",
  "downloadSong",
  "cacheTrack",
  "ripAudio",
  "streamCopyrighted",
  "autoplay=true",
  "subscribe now",
  "payment required",
  "paid subscription started"
].forEach(forbidden => {
  assertNotIncludes(mediaSource, forbidden, "server/nexusMediaMode.js");
  assertNotIncludes(app, forbidden, "public/app.js");
  assertNotIncludes(voiceShell, forbidden, "public/nexus-voice-demo-shell.js");
});

assertIncludes(doc, "Music/Media Mode", "music icon doc");
assertIncludes(doc, "YouTube", "music icon doc");
assertIncludes(doc, "Spotify", "music icon doc");
assertIncludes(doc, "Apple Music", "music icon doc");
assertIncludes(doc, "does not", "music icon doc safety boundaries");

assert.strictEqual(
  packageJson.scripts["qa:nexus-music-icon-media-mode"],
  "node scripts/nexus-music-icon-media-mode-qa.js",
  "package alias should run music icon QA"
);
assertIncludes(qaSuite, "scripts/nexus-music-icon-media-mode-qa.js", "safe QA suite");

async function assertBrainRouting() {
  for (const command of ["Play R&B.", "Play African music.", "Play Afrobeats on YouTube.", "Pause music.", "Download this song."]) {
    const result = await agenticBrain.handleCommand({ command }, {}, {});
    assert(["media_provider_handoff_prepared", "media_no_active_playback", "media_download_blocked"].includes(result.status), `${command} should route to Media/Music`);
    assert.strictEqual(result.execution.noExecutionAuthorized, true, `${command} brain route must stay non-executing`);
  }

  const capability = await agenticBrain.handleCommand({ command: "What can Nexus do?" }, {}, {});
  assert.strictEqual(capability.status, "capability_summary", "Capability prompt should return summary");
  assert(capability.message.includes("Media/Music"), "Capability summary should mention Media/Music");
  assert(capability.message.includes("R&B"), "Capability summary should mention R&B");
  assert(capability.message.includes("Afrobeats"), "Capability summary should mention Afrobeats");
  assert(capability.message.includes("playback depends on supported providers/accounts") || capability.message.includes("Playback depends on supported providers/accounts"), "Capability summary should mention provider/account dependency");
  assert(capability.message.includes("does not host, download, rip, cache, or redistribute copyrighted music"), "Capability summary should include copyright boundary");
}

assertBrainRouting()
  .then(() => console.log("Nexus music icon media mode QA passed."))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
