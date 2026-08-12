#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const base = String(process.env.NEXUS_CANDIDATE_URL || "http://127.0.0.1:4173").replace(/\/$/, "");
const expectedSha = String(process.env.RENDER_GIT_COMMIT || "");
const output = path.resolve("output", "nexus-preproduction-black-box.json");

async function json(pathname, init) {
  const response = await fetch(`${base}${pathname}`, init);
  const body = await response.json().catch(() => ({}));
  assert.equal(response.ok, true, `${pathname} returned ${response.status}: ${JSON.stringify(body)}`);
  return body;
}

async function text(pathname) {
  const response = await fetch(`${base}${pathname}`);
  const body = await response.text();
  assert.equal(response.ok, true, `${pathname} returned ${response.status}`);
  return body;
}

async function run() {
  assert.match(expectedSha, /^[0-9a-f]{40}$/, "candidate must be bound to a full commit SHA");
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
  for (const pathname of ["/", "/app.js", "/sw.js"]) {
    const asset = await text(pathname);
    assert.match(asset, new RegExp(expectedSha), `${pathname} must contain the exact candidate SHA`);
    assert.doesNotMatch(asset, /__NEXUS_RELEASE_SHA__|nexus-behavior-502|agrinexus-pwa-v447/, `${pathname} must not expose a placeholder or legacy identity`);
  }

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
