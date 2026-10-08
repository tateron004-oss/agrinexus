"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { startServer } = require("../helpers/free-port.js");

// End to end against a real server.js whose fetch is the pretend internet (test/helpers/media-fake-world.js): no public network is used.
const root = path.resolve(__dirname, "..", "..");
const preload = path.join(root, "test", "helpers", "media-fetch-preload.js");
const dirs = [];

function serverEnv({ key = "", aiLimit = "200" } = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "media-api-"));
  dirs.push(dir);
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  return {
    AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "spaces.json"), AGRINEXUS_MEDIA_STATE_PATH: path.join(dir, "media-state.json"),
    OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true",
    AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: aiLimit, AGRINEXUS_RATE_LIMIT_PER_WINDOW: "2000",
    YOUTUBE_API_KEY: key, NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY: "", NEXUS_MEDIA_PROVIDER_API_KEY: "", JAMENDO_CLIENT_ID: "",
    NODE_OPTIONS: `--require=${preload}`
  };
}

async function login(base, email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login ${email}`);
  return res.headers.get("set-cookie").split(";")[0];
}
const post = (base, pathname, body, cookie) => fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) })
  .then(async res => ({ status: res.status, body: await res.json() }));
const get = (base, pathname, cookie) => fetch(`${base}${pathname}`, { headers: cookie ? { cookie } : {} }).then(async res => ({ status: res.status, body: await res.json() }));

let keyless;
let keyed;
let limited;
let user;
let admin;
let keyedUser;
test.before(async () => {
  keyless = await startServer({ env: serverEnv() });
  keyed = await startServer({ env: serverEnv({ key: "placeholder-key-not-real" }) });
  limited = await startServer({ env: serverEnv({ aiLimit: "4" }) });
  user = await login(keyless.base, "user@agrinexus.org", "User2026!");
  admin = await login(keyless.base, "admin@agrinexus.org", "Admin2026!");
  keyedUser = await login(keyed.base, "user@agrinexus.org", "User2026!");
});
test.after(() => {
  for (const server of [keyless, keyed, limited]) server?.stop();
  for (const dir of dirs) fs.rmSync(dir, { recursive: true, force: true });
});

test("POST /api/media/resolve needs a signed-in person", async () => {
  const res = await post(keyless.base, "/api/media/resolve", { query: "Citizen", kind: "radio" });
  assert.equal(res.status, 401);
});

test("resolve returns candidates in the documented shape, with which providers were tried", async () => {
  const res = await post(keyless.base, "/api/media/resolve", { query: "", kind: "radio", country: "Kenya" }, user);
  assert.equal(res.status, 200);
  assert.equal(res.body.ok, true);
  const candidate = res.body.candidates[0];
  for (const field of ["id", "provider", "providerName", "playbackClass", "delivery", "url", "title", "artist", "durationSec", "live", "isPreview", "attribution", "license", "verified"]) {
    assert.ok(field in candidate, `candidate has ${field}`);
  }
  assert.equal(candidate.provider, "radio-browser");
  assert.equal(candidate.verified, true);
  assert.equal(candidate.live, true);
  assert.ok(Array.isArray(res.body.tried) && res.body.tried[0].provider === "radio-browser");
  assert.equal(res.body.youtube.configured, false);
  assert.ok(!JSON.stringify(res.body).includes("placeholder-key"));
});

test("resolve without a YouTube key still plays music (Audius) and gives honest reasons when nothing is found", async () => {
  const found = await post(keyless.base, "/api/media/resolve", { query: "Last Last", kind: "music", country: "KE" }, user);
  assert.equal(found.body.candidates[0].provider, "audius");
  assert.equal(found.body.candidates[found.body.candidates.length - 1].isPreview, true);
  assert.equal(found.body.tried.find(item => item.provider === "youtube").status, "not-needed");
  const none = await post(keyless.base, "/api/media/resolve", { query: "qqqq zzzz", kind: "music", includePreview: false }, user);
  assert.equal(none.status, 200);
  assert.equal(none.body.ok, false);
  assert.match(none.body.reason, /YouTube is not set up on this server/);
  const youtube = none.body.tried.find(item => item.provider === "youtube");
  assert.equal(youtube.status, "skipped");
  assert.match(youtube.reason, /YOUTUBE_API_KEY/);
  const noVideo = await post(keyless.base, "/api/media/resolve", { query: "", kind: "video" }, user);
  assert.equal(noVideo.status, 400);
});

test("hand-off without a key returns a YouTube search link and does not claim it is playing", async () => {
  const res = await post(keyless.base, "/api/media/resolve", { query: "Sauti Sol Melanin", kind: "music", handoff: true }, user);
  assert.equal(res.body.mode, "handoff");
  assert.equal(res.body.handoff.url, "https://www.youtube.com/results?search_query=Sauti%20Sol%20Melanin");
  assert.equal(res.body.handoff.kind, "search");
});

test("compat: /api/music/providers/playback keeps its preview-first shape and its honest 503", async () => {
  const preview = await post(keyless.base, "/api/music/providers/playback", { query: "Stevie Wonder Sir Duke", country: "US" }, user);
  assert.equal(preview.status, 200);
  assert.equal(preview.body.ok, true);
  assert.equal(preview.body.provider, "apple-itunes-preview");
  assert.equal(preview.body.playbackClass, "preview");
  assert.equal(preview.body.preflightVerified, true);
  assert.equal(preview.body.playbackVerified, false);
  assert.equal(preview.body.fallbackAvailable, true);
  assert.match(preview.body.audioUrl, /^https:\/\//);
  assert.equal(preview.body.attempts[0].provider, "apple-itunes-preview");
  const unavailable = await post(keyless.base, "/api/music/providers/playback", { query: "Stevie Wonder Sir Duke", excludeProviders: ["apple-itunes-preview"] }, user);
  assert.equal(unavailable.status, 503);
  assert.equal(unavailable.body.status, "all-providers-unavailable");
  assert.equal(unavailable.body.attempts.length, 2);
  assert.equal((await post(keyless.base, "/api/music/providers/playback", { query: " " }, user)).status, 400);
  assert.equal((await post(keyless.base, "/api/music/providers/playback", { query: "x" })).status, 401);
});

test("compat: /api/music/youtube/search and the YouTube leg of playback work with a key and are refused honestly without one", async () => {
  const none = await post(keyless.base, "/api/music/youtube/search", { query: "Burna Boy Last Last" }, user);
  assert.equal(none.status, 503);
  assert.equal(none.body.provider, "youtube");
  const ok = await post(keyed.base, "/api/music/youtube/search", { query: "Burna Boy Last Last", excludeVideoIds: [] }, keyedUser);
  assert.equal(ok.status, 200);
  assert.equal(ok.body.status, "candidate-ready");
  assert.equal(ok.body.videoId, "dQw4w9WgXcQ");
  assert.equal(ok.body.playbackVerified, false);
  assert.equal(ok.body.licenseFilter, "any");
  const viaPlayback = await post(keyed.base, "/api/music/providers/playback", { query: "Burna Boy Last Last", excludeProviders: ["apple-itunes-preview"] }, keyedUser);
  assert.equal(viaPlayback.body.provider, "youtube");
  assert.equal(viaPlayback.body.videoId, "dQw4w9WgXcQ");
  assert.equal(viaPlayback.body.playbackVerified, false);
  const exclusion = await post(keyed.base, "/api/music/youtube/search", { query: "Burna Boy Last Last", excludeVideoIds: ["dQw4w9WgXcQ", "karaokeVid01"] }, keyedUser);
  assert.notEqual(exclusion.body.videoId, "dQw4w9WgXcQ");
});

test("hand-off with a key returns the exact video link", async () => {
  const res = await post(keyed.base, "/api/media/resolve", { query: "Burna Boy Last Last", kind: "music", handoff: true }, keyedUser);
  assert.equal(res.body.handoff.url, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

test("admin provider report: owner only, shows configuration, health and quota, and never a secret", async () => {
  assert.ok([401, 403].includes((await get(keyless.base, "/api/admin/media/providers")).status));
  assert.equal((await get(keyless.base, "/api/admin/media/providers", user)).status, 403);
  const adminKeyless = await get(keyless.base, "/api/admin/media/providers", admin);
  assert.equal(adminKeyless.status, 200);
  const youtube = adminKeyless.body.providers.find(item => item.id === "youtube");
  assert.equal(youtube.configured, false);
  assert.deepEqual(youtube.requires, ["YOUTUBE_API_KEY"]);
  assert.equal(adminKeyless.body.youtube.configured, false);
  const radio = adminKeyless.body.providers.find(item => item.id === "radio-browser");
  assert.equal(radio.configured, true);
  assert.ok(["working", "not-used-yet"].includes(radio.status));
  assert.ok(adminKeyless.body.providers.find(item => item.id === "jamendo").requires.includes("JAMENDO_CLIENT_ID"));

  const adminKeyed = await login(keyed.base, "admin@agrinexus.org", "Admin2026!");
  const report = await get(keyed.base, "/api/admin/media/providers", adminKeyed);
  assert.equal(report.body.youtube.configured, true);
  assert.ok(report.body.youtube.quota.used >= 101, "searches made earlier in this file were counted");
  assert.ok(report.body.youtube.quota.remaining < report.body.youtube.quota.limit);
  assert.ok(!JSON.stringify(report.body).includes("placeholder-key-not-real"), "the key is never shown");
  assert.ok(!/query|Last Last|Burna/i.test(JSON.stringify(report.body)), "no listening history in the report");
  const probe = await get(keyless.base, "/api/admin/media/providers?probe=1", admin);
  assert.ok(probe.body.probes.every(item => item.ok === true));
});

test("played: counts a radio click for a real station and rejects junk", async () => {
  const ok = await post(keyless.base, "/api/media/played", { provider: "radio-browser", id: "radio-browser:11111111-aaaa" }, user);
  assert.equal(ok.status, 200);
  assert.equal(ok.body.counted, true);
  const again = await post(keyless.base, "/api/media/played", { provider: "radio-browser", id: "11111111-aaaa" }, user);
  assert.equal(again.body.counted, false);
  assert.equal((await post(keyless.base, "/api/media/played", {}, user)).status, 400);
  assert.equal((await post(keyless.base, "/api/media/played", { provider: "radio-browser", id: "x" })).status, 401);
});

test("resolve is rate limited like the other assistant routes", async () => {
  const cookie = await login(limited.base, "user@agrinexus.org", "User2026!");
  const statuses = [];
  for (let index = 0; index < 8; index += 1) statuses.push((await post(limited.base, "/api/media/resolve", { query: "", kind: "radio", country: "KE" }, cookie)).status);
  assert.equal(statuses[0], 200);
  assert.ok(statuses.includes(429), `expected a 429 in ${statuses.join(",")}`);
});
