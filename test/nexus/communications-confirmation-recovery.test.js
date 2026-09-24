"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// 2026-09-23: found live -- the user asked Kyro to call a real number, was
// asked to confirm, said "I confirm", and the call never actually happened
// ("prepared for review but no call was started"). Root cause: the entire
// confirmation flow depends on the voice model re-stating the phone number
// on its SECOND (confirmed) tool call. A bare "I confirm" carries no phone
// number at all, so nexusOpenAiNativeExtractContactArgs finds nothing on
// that turn and the recipient silently ends up empty -- with no server-side
// memory of what was actually being confirmed, the confirmed call could
// never reach the real number, no matter how sincerely the user confirmed.
//
// This is a real, spawned-server, end-to-end HTTP test (not a mock): Twilio
// is deliberately left unconfigured, which makes startCall() take its real,
// labeled-simulated fallback path (server/providers/twilioProvider.js's
// simulatedTwilioResponse, which echoes back the exact `to` it was given) --
// so this proves the actual recipient value flowing through the real
// confirmation-required -> confirmed round trip, not a stand-in.
const root = path.resolve(__dirname, "..", "..");
const port = 4607;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-communications-confirmation-recovery-db.json");

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

async function loginAsAdmin() {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  const cookie = res.headers.get("set-cookie")?.split(";")[0];
  return cookie;
}

async function callTool(cookie, args) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_communications", arguments: args, command: args.command }) });
  return res.json();
}

let server;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_CALLS_ENABLED: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("a bare 'I confirm' with no phone number still places the call against the number from the request it is confirming", async () => {
  const cookie = await loginAsAdmin();
  const first = await callTool(cookie, { command: "call Ron at 555 019 4401", channel: "call" });
  assert.equal(first.status, "confirmation_required", "the first, unconfirmed request must still require confirmation, unchanged");

  const second = await callTool(cookie, { command: "I confirm", confirmed: true });
  assert.equal(second.status, "completed", "a bare confirmation must actually complete the action, not silently do nothing");
  assert.equal(second.providerData?.to, "555 019 4401",
    "the real number from the ORIGINAL request must be used, not an empty/missing recipient just because this turn's text had no phone number in it");
});

test("without a prior pending request, a bare confirmation has nothing to recover, and no real action is executed by guessing a target", async () => {
  const cookie = await loginAsAdmin();
  const result = await callTool(cookie, { command: "I confirm", confirmed: true });
  // With no pending memory and no recipient in this turn, the channel
  // defaults to SMS with nothing to send -- not the focus of this fix, but
  // the invariant that matters here still holds: nothing gets fabricated,
  // and no real send/call is ever executed.
  assert.equal(result.executionAttempted, false, "must never execute a real action against a guessed or empty target");
});

test("a real recipient stated in the SAME confirming turn is used as-is, not overridden by stale pending state", async () => {
  const cookie = await loginAsAdmin();
  await callTool(cookie, { command: "call Ron at 555 019 4401", channel: "call" });
  const confirmedWithDifferentNumber = await callTool(cookie, { command: "yes, call at 555 088 7766 instead", confirmed: true, channel: "call" });
  assert.equal(confirmedWithDifferentNumber.providerData?.to, "555 088 7766",
    "an explicit recipient stated in the confirming turn itself must win over old pending state");
});

test("once a confirmed request is acted on, the pending memory is cleared -- a later unrelated bare confirmation cannot reuse it", async () => {
  const cookie = await loginAsAdmin();
  await callTool(cookie, { command: "call Ron at 555 019 4401", channel: "call" });
  await callTool(cookie, { command: "I confirm", confirmed: true });
  const staleReuse = await callTool(cookie, { command: "confirm", confirmed: true });
  assert.notEqual(staleReuse.providerData?.to, "555 019 4401", "a resolved request must not be replayed by a later, unrelated confirmation");
});

test("the source code correctly gates remembering to only the first, unconfirmed turn -- never records a request that has already been confirmed", () => {
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const start = source.indexOf("if (toolName === \"nexus_communications\") {");
  const end = source.indexOf("if (toolName === \"nexus_calendar\") {", start);
  const body = source.slice(start, end);
  assert.match(body, /if \(!args\.confirmed\) \{\s*\n\s*rememberPendingCommunicationsRequest/);
  assert.match(body, /if \(args\.confirmed\) clearPendingCommunicationsRequest\(db\);/);
});
