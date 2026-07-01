const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const provider = require(path.join(root, "server/providers/telehealthBridgeProvider.js"));

const server = read("server.js");
const app = read("public/app.js");
const envExample = read(".env.example");
[
  "/api/nexus/tools/telehealth/status",
  "/api/nexus/tools/telehealth/session/create",
  "/api/nexus/tools/telehealth/session/save",
  "telehealthBridge"
].forEach(text => assert((server + read("server/providers/index.js")).includes(text), `wiring must include ${text}`));
[
  "Telehealth Provider Bridge",
  "Zoom/Twilio Video/Daily/Doxy",
  "id: \"telehealth\""
].forEach(text => assert(app.includes(text), `app must include ${text}`));
[
  "NEXUS_TELEHEALTH_BRIDGE_ENABLED=true",
  "NEXUS_TWILIO_VIDEO_ENABLED=false",
  "DAILY_API_KEY=",
  "DOXY_BASE_ROOM_URL="
].forEach(text => assert(envExample.includes(text), `.env.example must include ${text}`));

(async () => {
  const db = { profile: {} };
  assert.equal(provider.intake({ confirmed: true, sessionType: "chronic_care_review", reason: "prepare questions" }, db).body.status, "completed");
  assert.equal(provider.prepare({ videoProvider: "local", reason: "prepare questions" }, db).body.status, "prepared");
  assert.equal((await provider.createSession({ videoProvider: "local", confirmed: true, reason: "prepare questions" }, db)).body.status, "prepared");
  assert.equal((await provider.createSession({ videoProvider: "twilio", confirmed: true, reason: "prepare questions" }, db, {})).body.status, "disabled");
  assert.equal((await provider.createSession({ videoProvider: "daily", confirmed: true, reason: "prepare questions" }, db, { NEXUS_DAILY_VIDEO_ENABLED: "true" })).body.status, "missing_config");
  assert.equal(provider.saveSession({ confirmed: true, title: "review prep" }, db).body.status, "completed");
  assert.equal((await provider.createSession({ videoProvider: "local", confirmed: true, reason: "diagnose and prescribe" }, db)).body.status, "blocked");
  console.log("Nexus telehealth provider bridge QA passed.");
})();
