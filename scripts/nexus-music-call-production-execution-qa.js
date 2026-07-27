const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const port = Number(process.env.NEXUS_MUSIC_CALL_QA_PORT || 4471);
const base = `http://127.0.0.1:${port}`;
const callbackPath = "/api/voice/phone/call-status";
const tempDb = path.join(root, "tmp-music-call-production-execution-qa-db.json");
const authToken = "nexus-music-call-test-token";
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      // Server is still starting.
    }
    await wait(150);
  }
  throw new Error("Music/call QA server did not become reachable");
}

async function jsonRequest(route, options = {}) {
  const response = await fetch(`${base}${route}`, {
    method: options.method || "GET",
    headers: {
      ...(options.body ? { "content-type": "application/json" } : {}),
      ...(cookie ? { cookie } : {}),
      ...(options.headers || {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const payload = await response.json();
  return { response, payload };
}

function twilioSignature(route, body) {
  const parameters = Object.keys(body)
    .sort()
    .map(key => `${key}${body[key]}`)
    .join("");
  return crypto.createHmac("sha1", authToken).update(`${base}${route}${parameters}`).digest("base64");
}

(async () => {
  assert.match(serverSource, /async function executeSpotifyMusicPlayback/, "Spotify playback executor must exist");
  assert.match(serverSource, /\/api\/music\/spotify\/login/, "Spotify authorization route must exist");
  assert.match(serverSource, /\/api\/music\/play/, "Spotify playback route must exist");
  assert.match(serverSource, /executeSpotifyMusicControl/, "Spotify pause and resume controls must exist");
  assert.match(serverSource, /\/me\/player\/.*pause.*play/s, "Spotify controls must use the player API");
  assert.match(serverSource, /StatusCallback: `\$\{base\}\/api\/voice\/phone\/call-status`/, "Twilio calls must request status callbacks");
  for (const event of ["initiated", "ringing", "answered", "completed"]) {
    assert.match(serverSource, new RegExp(`"${event}"`), `Twilio callback event ${event} must be requested`);
  }
  assert.match(serverSource, /validTwilioWebhookSignature/, "Twilio callback signatures must be verified");
  assert.match(serverSource, /recordTwilioCallStatus/, "Twilio call status receipts must be recorded");
  assert.doesNotMatch(
    appSource,
    /play music from kenya\|play kenyan music\|kenya music\|kenya-inspired music[\s\S]{0,500}localMusic: true/,
    "Kenyan music must not be diverted to the local demo before provider playback"
  );
  assert.match(appSource, /runMusicAssistantCommand\(command/, "Spoken music must route to the provider-backed music assistant");
  assert.match(
    appSource,
    /intent\.tool === "music-control"\) return runMusicAssistantCommand/,
    "Spoken music controls must reach Spotify before falling back to local demo controls"
  );

  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      PUBLIC_BASE_URL: base,
      AGRINEXUS_DB_PATH: tempDb,
      TWILIO_AUTH_TOKEN: authToken,
      OPENAI_API_KEY: "",
      NEXUS_PRESERVE_EMPTY_ENV: "1"
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    const body = {
      CallSid: "CA1234567890abcdef",
      CallStatus: "completed",
      CallDuration: "14",
      Direction: "outbound-api",
      From: "+15555550100",
      To: "+15555550101"
    };
    const unsigned = await fetch(`${base}${callbackPath}`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(body)
    });
    assert.equal(unsigned.status, 403, "Unsigned Twilio callbacks must be rejected");

    const signed = await fetch(`${base}${callbackPath}`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-twilio-signature": twilioSignature(callbackPath, body)
      },
      body: new URLSearchParams(body)
    });
    assert.equal(signed.status, 200, "Signed Twilio callbacks must be accepted");
    const receipt = await signed.json();
    assert.equal(receipt.callStatus, "completed");
    assert.equal(receipt.matchedOutboundCall, false);

    const login = await jsonRequest("/api/login", {
      method: "POST",
      body: { email: "admin@agrinexus.org", password: "Admin2026!" }
    });
    assert.equal(login.response.status, 200, "QA login must succeed");
    const state = await jsonRequest("/api/state");
    const receipts = state.payload.profile.twilioCallStatusReceipts || [];
    assert.equal(receipts[0].callSid, body.CallSid, "Call status receipt must persist");
    assert.equal(receipts[0].callStatus, "completed", "Persisted receipt must retain final status");

    console.log("Nexus music and call production execution QA passed.");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.stack || error.message || error);
  process.exit(1);
});
