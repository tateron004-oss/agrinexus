"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found on the live site on 11 October 2026, the moment Spotify was connected to a free (not Premium) account: Spotify answers "Active premium subscription required for the player endpoint" in plain text, which the code
// tried to read as JSON. "Play ..." was a server error (500) and "pause" read "Unexpected token 'A', "Active pre"... is not valid JSON" to the person.
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const start = server.indexOf("async function spotifyApi(");
const end = server.indexOf("async function executeSpotifyMusicPlayback(");
assert.ok(start > 0 && end > start, "found the Spotify helpers");

function load(fetchStub) {
  const context = { fetch: fetchStub, URLSearchParams, String, JSON, Error, Promise };
  vm.runInNewContext(`${server.slice(start, end)}; this.spotifyApi = spotifyApi; this.spotifyFailureSentence = spotifyFailureSentence;`, context);
  return context;
}
const reply = (status, body) => async () => ({ ok: status < 400, status, statusText: "x", text: async () => body });

test("a plain-text Spotify refusal is an error with a reason, never a JSON parse failure", async () => {
  const { spotifyApi } = load(reply(403, "Active premium subscription required for the player endpoint"));
  await assert.rejects(() => spotifyApi("/me/player/play", { method: "PUT" }, "t"), error => error.reason === "premium-required" && error.statusCode === 403 && /premium/i.test(error.message));
  const noDevice = load(reply(404, JSON.stringify({ error: { status: 404, message: "Player command failed: No active device found", reason: "NO_ACTIVE_DEVICE" } })));
  await assert.rejects(() => noDevice.spotifyApi("/me/player/play", { method: "PUT" }, "t"), error => error.reason === "no-device");
  const ok = load(reply(204, ""));
  assert.equal(Object.keys(await ok.spotifyApi("/me/player/pause", { method: "PUT" }, "t")).length, 0);
});

test("what the person is told is plain, and music goes on from YouTube", () => {
  const { spotifyFailureSentence } = load(reply(200, ""));
  assert.match(spotifyFailureSentence({ reason: "premium-required" }), /not Premium, so I will play it from YouTube instead/);
  assert.match(spotifyFailureSentence({ reason: "premium-required" }, { control: "pause" }), /control playback on Premium accounts/);
  assert.match(spotifyFailureSentence({ reason: "no-device" }), /Open Spotify on your phone or computer/);
  assert.doesNotMatch(spotifyFailureSentence({ message: "Unexpected token 'A'" }), /Unexpected token|JSON/);
  assert.match(server, /return refused\(error\)/, "a refusal while searching or playing returns an answer instead of throwing");
});
