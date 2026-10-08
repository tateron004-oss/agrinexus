"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { startServer } = require("../helpers/free-port.js");

// A real server.js whose internet is the pretend one with every provider except Apple broken (and YouTube configured but failing): the signed-in
// person's request must still end in a verified preview, through BOTH /api/media/resolve and the older /api/music/providers/playback.
const root = path.resolve(__dirname, "..", "..");
const preload = path.join(root, "test", "helpers", "media-fetch-preload.js");
const HOSTS = ["radio-browser.info", "audius.co", "audius-host.test", "googleapis.com", "youtube.com", "jamendo.com", "archive.org", "wikimedia.org", "streams.example.test"];
let dir;
let server;
let cookie;

test.before(async () => {
  dir = fs.mkdtempSync(path.join(os.tmpdir(), "media-api-faults-"));
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  const faults = Object.fromEntries(HOSTS.map((host, index) => [host, ["throw", "500", "garbage", "429"][index % 4]]));
  server = await startServer({ env: {
    AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "spaces.json"), AGRINEXUS_MEDIA_STATE_PATH: path.join(dir, "media-state.json"),
    OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "500", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "5000",
    YOUTUBE_API_KEY: "placeholder-key-not-real", JAMENDO_CLIENT_ID: "placeholder",
    MEDIA_FAKE_WORLD: JSON.stringify({ faults }), NODE_OPTIONS: `--require=${preload}`
  } });
  const res = await fetch(`${server.base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});
test.after(() => { server?.stop(); fs.rmSync(dir, { recursive: true, force: true }); });

const post = (pathname, body) => fetch(`${server.base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) }).then(async res => ({ status: res.status, body: await res.json() }));

test("every other provider broken: /api/media/resolve still returns the verified Apple preview, well within the probe's patience", async () => {
  const started = Date.now();
  const res = await post("/api/media/resolve", { query: "Stevie Wonder Sir Duke", kind: "music", country: "KE" });
  assert.equal(res.status, 200);
  assert.equal(res.body.ok, true);
  const preview = res.body.candidates.find(candidate => candidate.provider === "apple-itunes-preview");
  assert.ok(preview);
  assert.equal(preview.verified, true);
  assert.equal(preview.isPreview, true);
  assert.equal(preview.mimeType, "audio/mp4");
  assert.ok(Date.now() - started < 8000, `took ${Date.now() - started} ms`);
  const onlyPreview = await post("/api/media/resolve", { query: "Stevie Wonder Sir Duke", kind: "music", onlyProviders: ["apple-itunes-preview"] });
  assert.equal(onlyPreview.body.candidates.length, 1, "the phone's last-resort request for the preview alone works");
  assert.equal(onlyPreview.body.candidates[0].provider, "apple-itunes-preview");
});

test("every other provider broken: the older /api/music/providers/playback still answers with the preview in its pinned shape", async () => {
  const res = await post("/api/music/providers/playback", { query: "Stevie Wonder Sir Duke", country: "US" });
  assert.equal(res.status, 200);
  assert.equal(res.body.provider, "apple-itunes-preview");
  assert.equal(res.body.preflightVerified, true);
  assert.equal(res.body.playbackClass, "preview");
});

test("the admin report shows why: the failing providers and their reasons, without queries or keys", async () => {
  const admin = await fetch(`${server.base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  const adminCookie = admin.headers.get("set-cookie").split(";")[0];
  const report = await fetch(`${server.base}/api/admin/media/providers`, { headers: { cookie: adminCookie } }).then(res => res.json());
  assert.ok(report.recentResolves.length >= 2);
  const latest = report.recentResolves.find(item => item.providers.some(provider => provider.provider === "audius"));
  assert.ok(latest);
  assert.ok(latest.providers.some(provider => provider.status === "error"));
  const text = JSON.stringify(report);
  assert.ok(!/Stevie|Sir Duke|placeholder-key/.test(text));
});
