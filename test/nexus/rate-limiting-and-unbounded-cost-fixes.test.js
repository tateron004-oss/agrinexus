"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (rate-limiting audit): /api/nexus/intelligence/ask,
// /api/nexus/knowledge/query, /api/nexus/live-knowledge/query, and
// /api/nexus/live-knowledge/test can each trigger a real, paid OpenAI/
// Tavily call, but had NO auth check and NO route-specific rate limit at
// all -- an anonymous caller was bounded only by the generic 180 req/min
// blanket. Brought in line with the sign-in + aiAgentRateLimit pattern
// every sibling /api/agent/* route already uses. Also fixed: the two write
// sites for db.nexusKnowledgeQueries had no size cap at all (unlike the
// sibling db.nexusInstitutionalEvidenceReceipts right next to one of them),
// so an anonymous caller could grow the shared db.json file without bound.
//
// Separately: every real Twilio SMS/WhatsApp/call route
// (/api/nexus/tools/{sms,whatsapp,call,communications/sms,communications/
// whatsapp,communications/call}/*, /api/voice/phone/outbound-call) had no
// route-specific rate limit, so one authorized account could otherwise
// script real sends to arbitrary third-party numbers up to the 180/min
// blanket ceiling indefinitely -- a real, uncapped Twilio cost.

const root = path.resolve(__dirname, "..", "..");
const port = 4625;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-rate-limiting-fixes-db.json");

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
let adminCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const adminRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  adminCookie = adminRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function post(pathname, body, cookie) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST", headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(body || {})
  });
  return { status: res.status, body: await res.json() };
}

test("real-cost knowledge/intelligence routes require sign-in; a signed-in caller still reaches them", async () => {
  for (const pathname of ["/api/nexus/intelligence/ask", "/api/nexus/knowledge/query", "/api/nexus/live-knowledge/query", "/api/nexus/live-knowledge/test"]) {
    const unauth = await post(pathname, { question: "what is the weather" });
    assert.equal(unauth.status, 401, `${pathname} must require sign-in`);
  }
  const authed = await post("/api/nexus/knowledge/query", { question: "what is crop rotation" }, adminCookie);
  assert.notEqual(authed.status, 401, "a signed-in caller must not be refused for lack of auth");
});

test("real Twilio send/call routes are rate-limited beyond the account/role check", async () => {
  // A wrong-role/unauthenticated call is refused before rate limiting is
  // even relevant -- confirm the rate-limit gate doesn't interfere with
  // that existing check, then confirm the limiter itself actually trips.
  const unauth = await post("/api/nexus/tools/sms/send", { to: "+15555550100", text: "hi" });
  assert.equal(unauth.status, 401);

  let sawRateLimited = false;
  for (let i = 0; i < 25; i += 1) {
    const result = await post("/api/nexus/tools/sms/send", { to: "+15555550100", text: "hi" }, adminCookie);
    if (result.status === 429) { sawRateLimited = true; break; }
  }
  assert.ok(sawRateLimited, "expected the real-send route to eventually respond 429 under a rapid-fire loop");
});
