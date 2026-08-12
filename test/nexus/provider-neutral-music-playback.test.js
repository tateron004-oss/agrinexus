"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const {
  ITUNES_SEARCH_URL,
  normalizeItunesPreviewPayload,
  runItunesPreviewLookup
} = require("../../server/nexus-music-media-source-provider.js");

test("iTunes adapter selects the requested official preview and preflights audio bytes", async () => {
  const calls = [];
  const fetchImpl = async (url, options = {}) => {
    calls.push({ url: String(url), options });
    if (String(url).startsWith(ITUNES_SEARCH_URL)) {
      return {
        ok: true,
        status: 200,
        json: async () => ({ results: [
          { trackName: "Unrelated", artistName: "Someone", previewUrl: "https://audio.example/unrelated.m4a" },
          { trackName: "Sir Duke", artistName: "Stevie Wonder", collectionName: "Songs in the Key of Life",
            previewUrl: "https://audio.example/sir-duke.m4a", trackViewUrl: "https://music.apple.com/track",
            artworkUrl100: "https://art.example/sir-duke.jpg" }
        ] })
      };
    }
    return {
      ok: true,
      status: 206,
      headers: { get: name => name.toLowerCase() === "content-type" ? "audio/mp4" : "" },
      body: { cancel: async () => {} }
    };
  };
  const result = await runItunesPreviewLookup({ mediaRequest: "Play Stevie Wonder Sir Duke" }, {
    NEXUS_MUSIC_MEDIA_FETCH_IMPL: fetchImpl
  });
  assert.equal(result.ok, true);
  assert.equal(result.provider, "apple-itunes-preview");
  assert.equal(result.playbackClass, "preview");
  assert.equal(result.title, "Sir Duke");
  assert.equal(result.artist, "Stevie Wonder");
  assert.equal(result.preflightVerified, true);
  assert.equal(calls.length, 2);
  assert.equal(calls[1].options.headers.Range, "bytes=0-1");
});

test("iTunes adapter fails closed when an exact requested track is unavailable", () => {
  const result = normalizeItunesPreviewPayload(
    { mediaRequest: "Stevie Wonder Sir Duke" },
    { results: [{ trackName: "Unrelated", artistName: "Someone",
      previewUrl: "https://audio.example/unrelated.m4a" }] }
  );
  assert.equal(result.ok, false);
  assert.equal(result.error, "exact-track-match-unavailable");
});

test("passive media renderer and production probe require genuine playback progress", () => {
  const app = fs.readFileSync("public/app.js", "utf8");
  const probe = fs.readFileSync("scripts/nexus-run-browser-capability-probes.js", "utf8");
  assert.match(app, /nexus\.media-playback-evidence\.v1/);
  assert.match(app, /advancedSeconds >= 3/);
  assert.match(app, /audio\.paused === false/);
  assert.match(app, /audio\.muted === false/);
  assert.match(app, /playNexusProviderNeutralMusic/);
  assert.match(probe, /mediaProvider === "apple-itunes-preview"/);
  assert.match(probe, /Number\(playback\.advancedSeconds\) >= 3/);
  assert.doesNotMatch(probe, /production YouTube player/);
});
