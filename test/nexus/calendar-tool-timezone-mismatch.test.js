"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (ReferenceError/timezone sweep): the nexus_calendar tool called
// parseAssistantReminderTime(command) with NO options to derive a start time
// from a relative phrase like "tomorrow at 3pm" -- so it silently used
// time-phrase.js's own DEFAULT_TIME_ZONE (Africa/Nairobi) regardless of the
// real caller's zone, while the SAME calendarBody separately sent the
// caller's REAL timeZone (context.timeZone) to the provider. A caller in
// America/Los_Angeles asking to "schedule a meeting tomorrow at 3pm" got an
// event whose start instant was computed as 3pm Nairobi time, paired with a
// timeZone field claiming America/Los_Angeles -- landing the real event
// hours off from what they actually asked for, the exact "server clock
// instead of caller's real zone" bug already fixed once for the reminders
// pipeline.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-calendar-tool-timezone-mismatch-db.json");

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
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function scheduleTomorrowAt3pm(timeZone) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_calendar", timeZone, arguments: { command: "schedule a meeting tomorrow at 3pm", confirmed: true } })
  });
  return res.json();
}

test("a relative time phrase ('tomorrow at 3pm') resolves in the caller's real time zone, not a hardcoded default", async () => {
  const nairobi = await scheduleTomorrowAt3pm("Africa/Nairobi");
  const losAngeles = await scheduleTomorrowAt3pm("America/Los_Angeles");
  const nairobiStart = nairobi.providerData?.start;
  const losAngelesStart = losAngeles.providerData?.start;
  assert.ok(nairobiStart, `expected a real start time in the Nairobi response: ${JSON.stringify(nairobi)}`);
  assert.ok(losAngelesStart, `expected a real start time in the Los Angeles response: ${JSON.stringify(losAngeles)}`);
  assert.notEqual(nairobiStart, losAngelesStart,
    "the same relative phrase must resolve to a DIFFERENT real UTC instant depending on the caller's real time zone, not the same hardcoded default zone every time");

  // 3pm Africa/Nairobi (UTC+3) is 12:00 UTC; 3pm America/Los_Angeles (UTC-7
  // in September, daylight saving) is 22:00 UTC -- confirm each actually
  // reflects ITS OWN stated zone, not both silently defaulting to Nairobi.
  assert.equal(new Date(nairobiStart).getUTCHours(), 12, `Nairobi 3pm should be 12:00 UTC, got ${nairobiStart}`);
  assert.equal(new Date(losAngelesStart).getUTCHours(), 22, `Los Angeles 3pm should be 22:00 UTC, got ${losAngelesStart}`);
});
