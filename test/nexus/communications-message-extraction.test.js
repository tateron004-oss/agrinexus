const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4550;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-communications-message-extraction-db.json");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

let server;
let cookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function callDraft(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_communications", arguments: { command, ...extra } })
  });
  return res.json();
}

test("'saying X' extracts just X as the message, not the whole draft instruction", async () => {
  const result = await callDraft("Draft a WhatsApp message to Maria Fernandez saying the shipment left the warehouse.");
  assert.match(result.response, /Draft: "the shipment left the warehouse\."/);
  assert.doesNotMatch(result.response, /Maria Fernandez/i, "the recipient name must not leak into the message body");
});

test("'telling them X' also extracts just X", async () => {
  const result = await callDraft("Draft an SMS to John telling them the delivery is delayed.");
  assert.match(result.response, /Draft: "the delivery is delayed\."/);
});

test("'the message is X' also extracts just X, without the bare word 'message' elsewhere in the sentence misfiring", async () => {
  const result = await callDraft("Draft a message to John, the message is the delivery is delayed.");
  assert.match(result.response, /Draft: "the delivery is delayed\."/);
});

test("structured args.message still takes priority over any extraction", async () => {
  const result = await callDraft("Draft a message to John.", { message: "The delivery is delayed." });
  assert.match(result.response, /Draft: "The delivery is delayed\."/);
});

test("no recognizable lead-in phrase falls back to the whole command, unaffected by the new extraction", async () => {
  const result = await callDraft("Draft a message to John about the delivery delay.");
  assert.match(result.response, /Draft: "Draft a message to John about the delivery delay\."/);
});
