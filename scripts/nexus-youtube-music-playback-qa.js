const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");

assert.match(server, /nexusMusicMediaSourceProvider\.getMusicMediaSourceResultAsync/, "YouTube search must use the server-side provider so the API key never enters the browser");
assert.match(server, /\/api\/music\/youtube\/search/, "YouTube music search endpoint must exist");
assert.match(server, /source\.sourceUrl.*match/, "Only a returned YouTube video ID may be embedded");
const browserPlaybackBlock = app.slice(app.indexOf("const nexusYouTubePlayback"), app.indexOf("function clearNexusLocalMusicTimers"));
assert.doesNotMatch(browserPlaybackBlock, /YOUTUBE_API_KEY/, "YouTube playback code must not receive the server-side API key");
assert.match(app, /youtube-nocookie\.com\/embed/, "Music must play in the privacy-enhanced YouTube embed");
assert.match(app, /enablejsapi=1/, "The embedded player must support voice controls");
assert.match(app, /youtubePlayerCommand\("pauseVideo"\)/, "Pause voice control must reach YouTube");
assert.match(app, /youtubePlayerCommand\("playVideo"\)/, "Resume voice control must reach YouTube");
assert.match(app, /playNexusYouTubeMusic\(`\$\{nexusYouTubePlayback\.query/, "Next voice control must request another selection");
assert.match(app, /youtubePlayerCommand\("stopVideo"\)/, "Stop voice control must reach YouTube");
assert.match(app, /setVoiceResponse\("YouTube music stopped\. Nexus is still listening\."/,
  "Stopping music must preserve Nexus listening");
assert.match(server, /nexus-behavior-502/);
assert.match(app, /nexus-behavior-502/);
assert.match(html, /nexus-behavior-502/);
assert.match(sw, /nexus-behavior-502/);
assert.match(server, /agrinexus-pwa-v447/);
assert.match(app, /agrinexus-pwa-v447/);
assert.match(sw, /agrinexus-pwa-v447/);

console.log("[nexus-youtube-music-playback-qa] passed");
