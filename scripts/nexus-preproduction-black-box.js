#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");
const { waitForStableIdentity, identityPatienceFor } = require("./nexus-stable-identity.js");
const { assertServedIdentity, releaseShaFromPage } = require("./lib/release-identity-proof.js");

const base = String(process.env.NEXUS_CANDIDATE_URL || "http://127.0.0.1:4173").replace(/\/$/, "");
const expectedSha = String(process.env.RENDER_GIT_COMMIT || "");
const output = path.resolve("output", "nexus-preproduction-black-box.json");

async function json(pathname, init) {
  const response = await fetch(`${base}${pathname}`, init);
  const body = await response.json().catch(() => ({}));
  assert.equal(response.ok, true, `${pathname} returned ${response.status}: ${JSON.stringify(body)}`);
  return body;
}

async function bytes(pathname) {
  const response = await fetch(`${base}${pathname}`);
  const body = Buffer.from(await response.arrayBuffer());
  assert.equal(response.ok, true, `${pathname} returned ${response.status}`);
  return body;
}

async function text(pathname) {
  const response = await fetch(`${base}${pathname}`);
  const body = await response.text();
  assert.equal(response.ok, true, `${pathname} returned ${response.status}`);
  return body;
}

// Every identity assertion, unchanged. Run as one attempt so a deploy that is still switching instances can be retried whole.
async function verifyIdentityOnce() {
  const health = await json("/api/healthz");
  const release = await json("/api/release");
  const version = await json("/api/version");
  const runtime = await json("/api/nexus/runtime/status");
  assert.equal(health.ok, true, "candidate health must be ready");
  for (const [label, identity] of [["health", health], ["release", release], ["version", version]]) {
    assert.equal(identity.releaseSha, expectedSha, `${label} must report the exact candidate SHA`);
    assert.equal(identity.deployedCommit, expectedSha, `${label} deployed commit must match the candidate SHA`);
    assert.equal(identity.webBuild, expectedSha, `${label} web build must match the candidate SHA`);
    assert.equal(identity.pwaCache, `agrinexus-pwa-${expectedSha}`, `${label} cache must derive from the candidate SHA`);
  }
  assert.equal(runtime.releaseSha, expectedSha, "runtime must report the exact candidate SHA");
  // The release SHA is carried by the page (meta tag) and the service worker; /app.js is the build that reads it from the page and embeds none.
  // See scripts/lib/release-identity-proof.js for the full proof (page SHA, worker SHA, app reader, page/app pairing).
  const served = { "/": await text("/"), "/sw.js": await text("/sw.js") };
  const appBytes = await bytes("/app.js");
  for (const pathname of ["/", "/sw.js"]) {
    assert.match(served[pathname], new RegExp(expectedSha), `${pathname} must contain the exact candidate SHA`);
  }
  for (const [pathname, asset] of [["/", served["/"]], ["/app.js", appBytes.toString("utf8")], ["/sw.js", served["/sw.js"]]]) {
    assert.doesNotMatch(asset, /__NEXUS_RELEASE_SHA__|nexus-behavior-502|agrinexus-pwa-v447/, `${pathname} must not expose a placeholder or legacy identity`);
  }
  assert.equal(releaseShaFromPage(served["/"]), health.releaseSha, "the page's release SHA must equal the health endpoint's release SHA");
  assertServedIdentity({ expectedSha, index: served["/"], app: appBytes, sw: served["/sw.js"] });
  return { health };
}

// The acceptance-data cleanup (nexus/acceptance/data-hygiene.js) runs against production on every deploy, but its SQL had never run against a
// real PostgreSQL schema before the first production deploy. The candidate job has a real pgvector database and the candidate-only acceptance
// token, so here the cleanup is called in DRY-RUN mode: it reads (and prepares every write statement with an empty id list, which can match
// no row), so any SQL/schema mistake fails this job instead of a production deploy. Only a loopback candidate with a token is exercised; a
// deployed origin (no token in this step) is skipped. A candidate database with no acceptance identity at all is reported, not failed.
async function verifyAcceptanceCleanupStatements() {
  const token = process.env.NEXUS_ACCEPTANCE_TOKEN;
  const host = new URL(base).hostname;
  if (!token || !["127.0.0.1", "localhost", "::1", "[::1]"].includes(host)) return { checked: false, reason: "not_a_local_candidate_with_acceptance_token" };
  const response = await fetch(`${base}/api/nexus/runtime/production-acceptance/cleanup`, { method: "POST",
    headers: { authorization: `Bearer ${token}`, accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({ releaseSha: expectedSha, dryRun: true }) });
  const body = await response.json().catch(() => ({}));
  if (response.status === 503 && body.code === "acceptance_identity_unavailable") return { checked: false, reason: "candidate_has_no_acceptance_identity" };
  assert.equal(response.status, 200, `acceptance cleanup dry run returned ${response.status}: ${JSON.stringify(body).slice(0, 300)}`);
  assert.equal(body.ok, true); assert.equal(body.dryRun, true);
  assert.equal(body.total, 0, "a freshly migrated candidate has no acceptance test data to clean");
  return { checked: true, targets: Object.keys(body.counts || {}).length };
}

async function run() {
  assert.match(expectedSha, /^[0-9a-f]{40}$/, "candidate must be bound to a full commit SHA");
  // A deployed origin may briefly answer from the previous instance while it switches over; require three clean consecutive passes.
  const { health } = await waitForStableIdentity({ attempt: verifyIdentityOnce, ...identityPatienceFor(base) });
  const acceptanceCleanupStatements = await verifyAcceptanceCleanupStatements();

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on("console", message => { if (message.type() === "error") consoleErrors.push(message.text()); });
  await page.goto(base, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForFunction(() => Boolean(window.NexusBrowserActionController), null, { timeout: 30000 });
  const behavior = await page.evaluate(() => {
    const controller = window.NexusBrowserActionController;
    return {
      openQuestionIntent: controller.getVisualExperienceIntent("Why do leaves change color in autumn?"),
      cropQuestionIntent: controller.getVisualExperienceIntent("Why do maize leaves turn yellow, and what should a farmer check first?"),
      musicRecognized: controller.isMusicRequest("Play Superstition by Stevie Wonder"),
      musicQuery: controller.getMusicQuery("Nexus, play Superstition by Stevie Wonder"),
      globalMapPlace: controller.getRequestedMapPlace("Show me a map of Reykjavik, Iceland"),
      agricultureCommandIntent: controller.getVisualExperienceIntent("Open Agriculture Help"),
      resumeCommandIntent: controller.getVisualExperienceIntent("Create a resume for me")
    };
  });
  await browser.close();

  assert.equal(behavior.openQuestionIntent, "", "general questions must stay with the reasoning engine");
  assert.equal(behavior.cropQuestionIntent, "", "open-ended crop questions must stay with the reasoning engine");
  assert.equal(behavior.musicRecognized, true, "unfamiliar artist/song requests must route to music");
  assert.equal(behavior.musicQuery, "Superstition by Stevie Wonder", "music query must preserve artist and song");
  assert.equal(behavior.globalMapPlace, "Reykjavik, Iceland", "maps must preserve unfamiliar global locations");
  assert.equal(behavior.agricultureCommandIntent, "agriculture", "explicit workspace commands must still open workspaces");
  assert.equal(behavior.resumeCommandIntent, "resume", "document creation must still open an editable workspace");

  const report = {
    passed: true,
    releaseSha: expectedSha,
    candidateUrl: base,
    health: { ok: health.ok, database: health.checks?.database, releaseSha: health.releaseSha },
    behavior,
    acceptanceCleanupStatements,
    consoleErrors,
    checkedAt: new Date().toISOString()
  };
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));
}

run().catch(error => {
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, `${JSON.stringify({ passed: false, releaseSha: expectedSha, error: error.message, checkedAt: new Date().toISOString() }, null, 2)}\n`);
  console.error(error.stack || error.message);
  process.exit(1);
});
