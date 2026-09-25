"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4614;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-email-recurring-honesty-db.json");

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
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function callTool(name, command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name, arguments: { command, ...extra } })
  });
  return res.json();
}

// Found live: nexus_email's own description and the tool-choice hint router
// (which maps "inbox" here) both promised reading email, but
// emailProvider.js only ever exported {status, send} -- a genuine "Check my
// inbox for new messages" fell into the send logic, found no recipient, and
// returned a confusing "a valid recipient email address is required" error
// for a request that had nothing to do with sending.
test("a request to check the email inbox is honestly refused, not misrouted into a confusing send-validation error", async () => {
  const result = await callTool("nexus_email", "Check my inbox for any new messages from the buyer.");
  assert.equal(result.status, "not-supported");
  assert.match(result.response, /cannot read or check an email inbox/i);
});

test("a genuine send request still reaches the real send path, unaffected by the inbox-read refusal", async () => {
  const result = await callTool("nexus_email", "Email jane@example.com saying the delivery is ready.", { confirmed: true });
  assert.notEqual(result.status, "not-supported");
});

// Found live: nexus_automation_reminder's own description promised
// "recurring monitoring, scheduled tasks," but no recurrence mechanism
// exists anywhere in this codebase -- "Remind me every morning at 6am to
// check the pump" silently created exactly one reminder (whose stored time
// field is literally the unparseable string "every morning at 6am"), with
// no indication to the user that it would not actually recur.
test("a recurring reminder request is honestly told it is one-time only, not silently treated as recurring", async () => {
  const result = await callTool("nexus_automation_reminder", "Remind me every morning at 6am to check the irrigation pump.", { confirmed: true });
  assert.match(result.response, /one-time reminder/i);
  assert.match(result.response, /not (?:a recurring one|every day)/i);
});

test("a plain one-time reminder request is unaffected by the recurring-language caveat", async () => {
  const result = await callTool("nexus_automation_reminder", "Remind me to check the irrigation pump tomorrow at 6am.", { confirmed: true });
  assert.doesNotMatch(result.response, /one-time reminder right now/i);
});
