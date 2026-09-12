const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.TELEHEALTH_VIDEO_HANDOFF_QA_PORT || 4523);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-telehealth-video-handoff-qa-db.json");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const htmlSource = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

let cookie = "";
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Telehealth video handoff QA server did not become reachable");
}

async function post(route, body, options = {}) {
  const response = await fetch(`${base}${route}`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {})
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json().catch(() => ({}));
  if (!options.allowError && !response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return { status: response.status, json };
}

function assertSourceWording() {
  const combinedUi = `${appSource}\n${htmlSource}`;
  for (const text of [
    "Local camera preview only",
    "Local handoff demo only",
    "not connected to a live provider",
    "no real telehealth visit is started",
    "Not a live provider room",
    "no real-time video connection",
    "Provider workflow evidence is local/demo only"
  ]) {
    assert(combinedUi.toLowerCase().includes(text.toLowerCase()), `UI should include video handoff clarity wording: ${text}`);
  }

  for (const riskyText of [
    "title: \"Show provider on video\"",
    "Provider video is ready.",
    "Telehealth video is ready.",
    "show the provider the injury"
  ]) {
    assert(!appSource.includes(riskyText), `Frontend should not include risky video phrasing: ${riskyText}`);
    assert(!serverSource.includes(riskyText), `Backend should not include risky video phrasing: ${riskyText}`);
  }

  assert(serverSource.includes('videoMode: "local-handoff-demo"'), "Backend should mark healthcare video mode as local-handoff-demo");
  assert(serverSource.includes("handoffOnly: true"), "Backend should mark healthcare video as handoff-only");
  assert(serverSource.includes("realTimeVideo: false"), "Backend should mark healthcare video as not real-time video");
  assert(serverSource.includes("liveProviderConnected: false"), "Backend should mark healthcare video as not connected to a live provider");
  assert(serverSource.includes('providerStatus: isHealth ? "local-handoff-ready"'), "Healthcare providerStatus should remain local handoff ready");
}

(async () => {
  assertSourceWording();
  fs.copyFileSync(sourceDb, tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      TELEHEALTH_VIDEO_WEBHOOK_URL: "https://example.invalid/live-provider-room"
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();

    const login = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    assert.equal(login.status, 200, "test user login should pass");

    const healthVideo = await post("/api/video/session", {
      type: "telehealth-video",
      module: "Healthcare",
      patientName: "Video Handoff QA Patient",
      videoNote: "Video handoff QA visible concern"
    });
    assert.equal(healthVideo.status, 200, "healthcare video handoff should return 200");
    const session = healthVideo.json.videoSessionResult || {};
    assert.equal(session.type, "telehealth-video", "health video should stay typed as telehealth-video");
    assert.equal(session.videoMode, "local-handoff-demo", "health video should expose local handoff demo mode");
    assert.equal(session.handoffOnly, true, "health video should be handoff-only");
    assert.equal(session.realTimeVideo, false, "health video should not claim real-time video");
    assert.equal(session.liveProviderConnected, false, "health video should not claim live provider connection");
    assert.equal(session.providerStatus, "local-handoff-ready", "health video providerStatus should not claim live-provider-ready");
    assert(session.joinUrl, "health video should retain a join URL handoff value");

    const healthProfileVideo = (healthVideo.json.profile?.videoSessions || []).find(item => item.id === session.id);
    assert.equal(healthProfileVideo?.videoMode, "local-handoff-demo", "profile video session should preserve videoMode");
    assert.equal(healthProfileVideo?.handoffOnly, true, "profile video session should preserve handoffOnly");
    assert.equal(healthProfileVideo?.realTimeVideo, false, "profile video session should preserve realTimeVideo");
    assert.equal(healthProfileVideo?.liveProviderConnected, false, "profile video session should preserve liveProviderConnected");

    const tradeVideo = await post("/api/video/session", {
      type: "trade",
      module: "AgriTrade",
      subject: "Video Handoff QA crop proof"
    });
    assert.equal(tradeVideo.status, 200, "trade video behavior should still return 200");
    assert.equal(tradeVideo.json.videoSessionResult?.type, "buyer-crop-video", "trade video should remain buyer-crop-video");

    console.log("Telehealth video handoff QA passed");
  } finally {
    server.kill();
    await wait(250);
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error);
  process.exit(1);
});
