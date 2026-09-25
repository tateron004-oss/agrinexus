"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4622;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-workforce-jobs-lms-db.json");

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

async function callTool(name, args) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name, arguments: args })
  });
  return res.json();
}

// Found live: nexus_workforce_learning's own description and routing hint
// explicitly promise job search ("jobs, workforce pathways"), and
// jobsRequest was already computed inside the handler -- but it was used
// only to SUPPRESS the learning branch, never to actually search for a job.
// A real job-search provider (server/nexus-job-search-source-provider.js,
// a free public Remotive lookup with an honest fixture/mock/live ladder)
// existed but nothing in server.js ever required it. Without live-source
// flags configured (the default, and this test's environment), the real
// provider honestly reports it is not configured -- proving this reaches
// the real provider's own honest status rather than falling through to a
// generic non-answer.
test("a genuine job-search command reaches the real job-search provider and gets its honest status, not a generic non-answer", async () => {
  const result = await callTool("nexus_workforce_learning", { command: "Find me a farming job in Nairobi" });
  assert.equal(result.capability, "workforce-jobs");
  assert.equal(result.status, "provider-not-configured");
  assert.match(result.response, /not configured|disabled/i);
  assert.ok(result.jobResult, "the real provider's structured result must be present, not just a sentence");
  assert.equal(result.jobResult.providerName, "job-search");
});

test("a job-search command missing a location gets the provider's own honest clarifying question", async () => {
  const result = await callTool("nexus_workforce_learning", { command: "Find me a job" });
  assert.equal(result.jobResult.sourceStatus, "provider-required");
  assert.match(result.response, /what kind of job|which city|country/i);
});

// Found live: a command that reads as BOTH a job search and a course search
// ("search for job training programs...") used to fall through to a second,
// less-capable course lookup (nexusRealProviders.lmsLiveBridge.courses) whose
// generic response fallback silently discarded a real matched course card.
// That fallback branch was provably dead code once the real job-search
// branch above is checked first (lmsRequest's trigger words are a strict
// subset of learningRequest's, so the only way to ever reach it was
// learningRequest && jobsRequest both true) and was removed rather than left
// unreachable. This command now correctly reaches the real job-search
// provider instead.
test("a command that mentions both 'job' and course/training words is treated as a real job search, not a dead course-lookup branch", async () => {
  const result = await callTool("nexus_workforce_learning", { command: "Search for job training programs available near me" });
  assert.equal(result.capability, "workforce-jobs");
  assert.ok(result.jobResult, "expected the real job-search provider's structured result");
});

// A pure course/training request, with no job words at all, is unaffected --
// it is still handled by the learning branch's own real local-catalog
// search (a separate, already-working code path), which now runs
// unambiguously since jobsRequest cannot be true here.
test("a pure course-search command with no job words matches a real local catalog entry, unaffected by the job-search fix", async () => {
  const result = await callTool("nexus_workforce_learning", { command: "Teach me about irrigation basics" });
  assert.equal(result.capability, "learning-training");
  assert.match(result.response, /Irrigation basics/, `expected the real matched course title in the response, got: ${result.response}`);
});
