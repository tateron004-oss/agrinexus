"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4717;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-workforce-learning-ambiguous-match-db.json");

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

async function callLearning(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_workforce_learning", arguments: { command, confirmed: true, ...extra } })
  });
  return res.json();
}

// Found live (learning/education audit, 2026-09-28): bestMatch was always
// cards[0] -- the first catalog entry that merely contains the stripped
// keyword(s), in fixed catalog array order. A single common keyword like
// "business" matches six different real catalog courses (Farm business
// basics, Small business financial literacy, Marketing strategy
// fundamentals, Minority-owned business development, Government partnership
// readiness, Technology modernization planning). "I finished my business
// training" always silently recorded progress against whichever entry is
// listed first ("Farm business basics"), regardless of which course the
// learner actually completed -- with no error, no correction path
// (markProgress treats "completed" as terminal), and the chat reply
// confirmed the WRONG title back to the user.
test("an ambiguous course keyword asks which course was meant, instead of silently recording progress against the wrong one", async () => {
  const result = await callLearning("I finished my business training.");
  assert.notEqual(result.status, "learning-progress-recorded", "must not silently record progress against an unspecified 'business' course");
  assert.match(result.response, /more than one matching course/i);
  // The real candidate titles must actually be offered so the learner can pick, not just a generic refusal.
  assert.match(result.response, /Farm business basics/);
  assert.match(result.response, /Small business financial literacy basics/);
});

test("the same ambiguity guard also protects save and reminder actions, not just progress", async () => {
  const save = await callLearning("Save my business training course.");
  assert.notEqual(save.status, "learning-resource-saved");
  assert.match(save.response, /more than one matching course/i);

  const reminder = await callLearning("Remind me about my business training.");
  assert.notEqual(reminder.status, "learning-reminder-created");
  assert.match(reminder.response, /more than one matching course/i);
});

// Regression guard: an unambiguous, specific query naming exactly one real
// course must keep working exactly as before -- this fix must not make
// every learning request ask for clarification.
test("a specific, unambiguous course request still records progress normally", async () => {
  const result = await callLearning("I finished the irrigation basics course.");
  assert.equal(result.status, "learning-progress-recorded");
  assert.match(result.response, /irrigation/i);
});
