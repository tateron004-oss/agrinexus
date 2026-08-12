"use strict";
const fs = require("node:fs");
const test = require("node:test");
const assert = require("node:assert/strict");

test("YouTube iframe is API-owned and playback begins only after onReady", () => {
  const source = fs.readFileSync("public/app.js", "utf8");
  assert.match(source, /data-nexus-youtube-player-mount/);
  assert.match(source, /new YT\.Player\(frame/);
  assert.match(source, /videoId: nexusYouTubePlayback\.videoId/);
  assert.match(source, /origin: window\.location\.origin/);
  assert.match(source, /widget_referrer: window\.location\.href/);
  assert.match(source, /onReady\(event\)[\s\S]{0,800}event\.target\.playVideo\(\)/);
  assert.match(source, /playerState === 1/);
  assert.doesNotMatch(source, /setTimeout\(\(\) => youtubePlayerCommand\("playVideo"\), 700\)/);
  assert.doesNotMatch(source, /<iframe title="\$\{escapeHtml\(result\.title/);
});
