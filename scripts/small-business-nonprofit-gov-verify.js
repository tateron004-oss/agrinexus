// Live verification for the small-business / nonprofit / government-partnership
// enablement additions (Kyro Business & Grants): new local learning-catalog
// resources (financial literacy, marketing strategy, grant writing, minority-
// owned business development, government partnership readiness, technology
// modernization), reachable through the real learning-tool dispatcher. Runs
// against the default blob store -- no real Postgres or OPENAI_API_KEY
// needed -- eligible for scripts/qa-suite.js.
//
// The three new business-workspace planning-template profiles (marketing,
// finance, government) are NOT exercised here: the real
// /api/nexus/runtime/business/* routes require a genuine Postgres-backed
// nexus_organization_memberships row (nexus/identity/access-control.js), a
// pre-existing requirement of BusinessService unrelated to this change, so a
// credential-free live run can't reach them. That logic (filesFor/
// createResponse for all agent profiles, including the 3 new ones, plus the
// real ZIP packaging) is already covered by test/nexus/business-services.test.js,
// which exercises the real service against a fixture repository.
// Run manually: node scripts/small-business-nonprofit-gov-verify.js
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4503;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-small-business-nonprofit-gov-verify-db.json");

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

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function callLearningTool(command, cookie) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    // confirmed: true -- learningBridge.markProgress/saveResource/
    // createLearningReminder now forward the caller's real confirmation
    // instead of the provider's requireConfirmation() gate being bypassed.
    body: JSON.stringify({ name: "nexus_workforce_learning", arguments: { command, confirmed: true } })
  });
  return res.json();
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, NEXUS_PRESERVE_EMPTY_ENV: "1", PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitFor(`${base}/api/healthz`);
    const cookie = await login("user@agrinexus.org", "User2026!");

    // 1) The new local learning-catalog topics are real, searchable, and
    // routed by the same dispatcher used for every other learning topic.
    const financeLesson = await callLearningTool("Teach me about financial literacy.", cookie);
    assert.equal(financeLesson.status, "lesson-ready", `expected a lesson for financial literacy, got status=${financeLesson.status}`);
    assert.match(financeLesson.response, /financial literacy|cash flow|budget/i);
    console.log("Verified: financial literacy is a real, findable learning topic.");

    const grantLesson = await callLearningTool("I want to learn about grant writing for my nonprofit.", cookie);
    assert.equal(grantLesson.status, "lesson-ready", `expected a lesson for grant writing, got status=${grantLesson.status}`);
    assert.match(grantLesson.response, /grant/i);
    console.log("Verified: grant writing is a real, findable learning topic.");

    const minorityLesson = await callLearningTool("I want to learn about minority-owned business development.", cookie);
    assert.equal(minorityLesson.status, "lesson-ready", `expected a lesson for minority-owned business development, got status=${minorityLesson.status}`);
    assert.match(minorityLesson.response, /minority|Black-owned|Brown-owned/i);
    console.log("Verified: minority-owned business development is a real, findable learning topic.");

    const govLesson = await callLearningTool("Teach me about government partnership readiness.", cookie);
    assert.equal(govLesson.status, "lesson-ready", `expected a lesson for government partnership readiness, got status=${govLesson.status}`);
    assert.match(govLesson.response, /government|public sector|partnership/i);
    console.log("Verified: government & public-sector partnership readiness is a real, findable learning topic.");

    const techLesson = await callLearningTool("I want to learn about technology modernization.", cookie);
    assert.equal(techLesson.status, "lesson-ready", `expected a lesson for technology modernization, got status=${techLesson.status}`);
    assert.match(techLesson.response, /technology|modernization/i);
    console.log("Verified: technology modernization planning is a real, findable learning topic.");

    // 2) Progress tracking (Phase 9 infrastructure) works for a new topic too.
    const started = await callLearningTool("I started the marketing strategy fundamentals course.", cookie);
    assert.equal(started.status, "learning-progress-recorded", `expected progress to be recorded, got status=${started.status}`);
    console.log("Verified: progress tracking works for the new marketing strategy resource.");

    console.log("Small business / nonprofit / government enablement verification passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
