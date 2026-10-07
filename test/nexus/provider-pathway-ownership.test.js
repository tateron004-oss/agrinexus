"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-provider-pathway-ownership-db.json");

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

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  return res.headers.get("set-cookie").split(";")[0];
}

async function post(pathname, body, cookie) {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body || {}) });
  return { status: res.status, body: await res.json() };
}

async function get(pathname, cookie) {
  const res = await fetch(`${base}${pathname}`, { headers: cookie ? { cookie } : {} });
  return { status: res.status, body: await res.json() };
}

// Found live (cross-user-IDOR audit): unlike GET /api/nexus/provider-pathways
// and .../logs (correctly gated to the provider-queue/admin role, which by
// design reviews the whole shared queue -- see /api/nexus/review-queue's
// identical convention), the .../:id/consent and .../:id/route routes have no
// role gate at all and had no ownership check either: any signed-in user
// could confirm consent or trigger routing on ANY other user's request just
// by knowing/guessing its id, even though the real UI only ever calls these
// as a same-session self-service step right after the same user's own
// request (public/app.js's "consent-provider-pathway" action).
test("a user cannot confirm consent or trigger routing on another user's provider-pathway request", async () => {
  const cookieA = await login("demo@agrinexus.org", "Prototype2026!");
  const cookieB = await login("user@agrinexus.org", "User2026!");
  const secretQuestion = `private pharmacy question ${Date.now()}`;

  const created = await post("/api/nexus/provider-pathways/request", { userQuestion: secretQuestion, category: "pharmacy" }, cookieA);
  assert.equal(created.status, 200, JSON.stringify(created.body));
  const requestId = created.body.providerPathwayRequest.id;

  const consentAsOther = await post(`/api/nexus/provider-pathways/${requestId}/consent`, { consentConfirmed: true }, cookieB);
  assert.equal(consentAsOther.status, 404, "a different signed-in user must not be able to confirm consent on another user's request");

  const routeAsOther = await post(`/api/nexus/provider-pathways/${requestId}/route`, {}, cookieB);
  assert.equal(routeAsOther.status, 404, "a different signed-in user must not be able to trigger routing on another user's request");

  const consentAsOwner = await post(`/api/nexus/provider-pathways/${requestId}/consent`, { consentConfirmed: true }, cookieA);
  assert.equal(consentAsOwner.status, 200, "the real owner must still be able to confirm consent on their own request");

  const routeAsOwner = await post(`/api/nexus/provider-pathways/${requestId}/route`, {}, cookieA);
  assert.equal(routeAsOwner.status, 200, "the real owner must still be able to route their own request after consenting");
});

// Found live (same audit, same file): the knowledge-history DETAIL route
// (GET /api/nexus/knowledge/history/:id) matched reviewSummaries and
// providerRequests purely by free-text question equality, with no ownership
// check ANDed in -- unlike the sibling list route and the detail route's own
// institutionalEvidenceReceipts field, which were already correctly scoped.
test("the knowledge-history detail route does not leak another user's review summary or provider-pathway request via a shared question", async () => {
  const cookieA = await login("demo@agrinexus.org", "Prototype2026!");
  const cookieB = await login("user@agrinexus.org", "User2026!");
  const sharedQuestion = `what is the maize planting season ${Date.now()}`;

  const queryA = await post("/api/nexus/knowledge/query", { question: sharedQuestion }, cookieA);
  assert.equal(queryA.status, 200, JSON.stringify(queryA.body));
  const queryIdA = queryA.body.result.queryId;

  // User B asks the identical question, then prepares a review summary and a
  // provider-pathway request carrying their own free-text notes.
  const queryB = await post("/api/nexus/knowledge/query", { question: sharedQuestion }, cookieB);
  assert.equal(queryB.status, 200, JSON.stringify(queryB.body));
  const reviewB = await post("/api/nexus/knowledge/prepare-review-summary", { question: sharedQuestion, queryId: queryB.body.result.queryId, userNotes: "user B's private note" }, cookieB);
  assert.equal(reviewB.status, 200, JSON.stringify(reviewB.body));
  const pathwayB = await post("/api/nexus/provider-pathways/request", { userQuestion: sharedQuestion, category: "pharmacy" }, cookieB);
  assert.equal(pathwayB.status, 200, JSON.stringify(pathwayB.body));

  const detailAsA = await get(`/api/nexus/knowledge/history/${queryIdA}`, cookieA);
  assert.equal(detailAsA.status, 200, JSON.stringify(detailAsA.body));
  assert.ok(!detailAsA.body.reviewSummaries.some(item => item.id === reviewB.body.summary.id), "user A must not see user B's review summary just because the question text matches");
  assert.ok(!detailAsA.body.providerRequests.some(item => item.id === pathwayB.body.providerPathwayRequest.id), "user A must not see user B's provider-pathway request just because the question text matches");
});
