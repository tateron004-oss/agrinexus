"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (legal/consent audit): a dozen risky-action gates across
// runAgentCommand (real outbound Twilio calls, real job-application
// submission, real buyer contact messages, and more) used
// `if (conversational && !options.confirm)` / `if (conversational &&
// !wantsExecute)` to decide whether to stage a confirmation prompt or
// execute for real -- but `conversational` is fully client-controlled
// (POST /api/agent/command passes `body.conversational === true` straight
// from the raw request body, and the OpenAI-native tool gateway's own
// fallback hardcodes conversational:false), while options.confirm/
// wantsExecute is the actual "has this been confirmed" signal. Any caller
// that omitted conversational (or the request path that hardcoded it false)
// skipped confirmation ENTIRELY and executed the real action immediately --
// a real Twilio call, in the most severe case. Fixed by dropping
// `conversational` from every one of these gates.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-confirmation-gate-conversational-bypass-db.json");

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
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "demo@agrinexus.org", password: "Prototype2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

async function cmd(body) {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  const responseBody = await res.json();
  return responseBody.commandResult || {};
}

test("a real outbound call is staged for confirmation, never placed for real, when conversational is omitted", async () => {
  const before = (readTempDb().profile.outboundCalls || []).length;
  const result = await cmd({ command: "call the doctor" });
  assert.equal(result.status, "needs-confirmation",
    "omitting conversational must still require explicit confirmation before a real outbound call, not execute it immediately");
  const after = (readTempDb().profile.outboundCalls || []).length;
  assert.equal(after, before, "no real outbound call record must be created before the user has confirmed anything");
});

test("a real outbound call is staged for confirmation, never placed for real, when conversational is explicitly false", async () => {
  const before = (readTempDb().profile.outboundCalls || []).length;
  const result = await cmd({ command: "call the doctor", conversational: false });
  assert.equal(result.status, "needs-confirmation",
    "conversational:false must never be treated as an implicit 'already confirmed' signal for a real outbound call");
  const after = (readTempDb().profile.outboundCalls || []).length;
  assert.equal(after, before, "no real outbound call record must be created before the user has confirmed anything");
});

test("a real job application submission is staged for confirmation, never submitted for real, when conversational is omitted", async () => {
  // Deliberately avoids phase4RiskyActionForCommand's own "submit application"
  // phrasing (which always stages regardless of confirm) so this exercises
  // the workforce.apply_role branch's own, separate stage/execute gate.
  const result = await cmd({ command: "apply for the telehealth assistant role" });
  assert.equal(result.status, "needs-confirmation",
    "omitting conversational must still require explicit confirmation before a real job application is submitted");
});

test("a real buyer contact message is staged for confirmation, never sent for real, when conversational is omitted", async () => {
  const result = await cmd({ command: "message the buyer about my crop" });
  assert.equal(result.status, "needs-confirmation",
    "omitting conversational must still require explicit confirmation before a real buyer contact message is prepared and sent");
});

test("explicit confirmation (options.confirm) still lets a real job application proceed, unaffected by the fix", async () => {
  const result = await cmd({ command: "apply for the telehealth assistant role", confirm: true });
  assert.notEqual(result.status, "needs-confirmation", "an explicitly confirmed request must still be allowed to proceed");
});
