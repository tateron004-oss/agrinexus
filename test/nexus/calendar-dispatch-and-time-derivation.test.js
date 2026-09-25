"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4613;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-calendar-dispatch-db.json");

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
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_CALENDAR_ENABLED: "true" },
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

async function callCalendar(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_calendar", arguments: { command, ...extra } })
  });
  return res.json();
}

// Found live: the shared tool schema has no start/end field, so a real
// "schedule a meeting tomorrow at 3pm titled Standup" call (with only the
// fields the model can actually pass -- command, title, confirmed) always
// blocked with "title and start time are required," regardless of what the
// user said, because nothing derived the time from the command text.
test("a real create request with only schema-legal args now derives a start time from the command text", async () => {
  const result = await callCalendar("Schedule a meeting tomorrow at 3pm titled Standup", { title: "Standup", confirmed: true });
  assert.notEqual(result.status, "blocked", result.response);
  // NEXUS_CALENDAR_PROVIDER_ENDPOINT is unset in this environment, so the
  // real HTTP branch is unreachable and the provider legitimately falls back
  // to its own labeled simulated response -- but it must get PAST the
  // title/start guard to do so, proving a real start time was derived.
  assert.equal(result.providerData.simulated, true);
  assert.ok(result.providerData.start, "expected a real derived start time");
});

test("a command with no recognizable time phrase still blocks honestly instead of guessing", async () => {
  const result = await callCalendar("Create a calendar event titled Standup", { title: "Standup", confirmed: true });
  assert.equal(result.status, "blocked");
  assert.match(result.response, /start time/);
});

// nexus_calendar's own tool description promises "search, schedule, change,
// or cancel," but the handler only ever called createEvent -- a genuine
// search/cancel/reschedule request silently became a bogus create attempt.
test("a search request is routed to a real search, not a bogus create attempt", async () => {
  const result = await callCalendar("Find my meetings on the calendar this week");
  assert.notEqual(result.providerAction, "calendar.event.create");
  assert.equal(result.providerAction, "calendar.event.search");
});

test("a cancel request with no matching event is honestly reported as not found, not created as a new event", async () => {
  const result = await callCalendar("Cancel my dentist appointment", { confirmed: true });
  assert.notEqual(result.providerAction, "calendar.event.create");
  assert.match(result.response, /could not find/i);
});

test("a reschedule request with no matching event is honestly reported as not found, not created as a new event", async () => {
  const result = await callCalendar("Reschedule my dentist appointment to next week", { confirmed: true });
  assert.notEqual(result.providerAction, "calendar.event.create");
  assert.match(result.response, /could not find/i);
});
