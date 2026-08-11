"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const canonicalPath = ".github/workflows/nexus-protected-production-deploy.yml";
const retiredPath = ".github/workflows/nexus-unified-production-release.yml";
const canonical = fs.readFileSync(canonicalPath, "utf8");
const retired = fs.readFileSync(retiredPath, "utf8");

test("production promotion is gated by production-equivalent qualification", () => {
  assert.match(canonical, /qualify-release-candidate:/);
  assert.match(canonical, /image: pgvector\/pgvector:pg17/);
  assert.match(canonical, /npm run foundation:migrate/);
  assert.match(canonical, /node scripts\/nexus-preproduction-black-box\.js/);
  assert.match(canonical, /deploy-exact-release:[\s\S]*needs: qualify-release-candidate/);
});

test("canonical promotion uses Render API control without a dashboard bridge or deploy hook", () => {
  assert.match(canonical, /RENDER_API_KEY/);
  assert.match(canonical, /node scripts\/nexus-render-release-controller\.js/);
  assert.doesNotMatch(canonical, /RENDER_DEPLOY_HOOK_URL/);
});

test("legacy unified release cannot race the canonical main promotion", () => {
  assert.doesNotMatch(retired, /push:\s*\n\s*branches:\s*\[main\]/);
  assert.match(retired, /workflow_dispatch:/);
});

test("production identity and behavior are both re-proved after deployment", () => {
  assert.match(canonical, /Wait for exact release identity/);
  assert.match(canonical, /NEXUS_CANDIDATE_URL: \$\{\{ env\.PRODUCTION_ORIGIN \}\}/);
  assert.match(canonical, /Re-prove deployed Standard User behavior/);
});

test("release promotion binds every runtime surface to one immutable SHA", () => {
  const server = fs.readFileSync("server.js", "utf8");
  const app = fs.readFileSync("public/app.js", "utf8");
  const index = fs.readFileSync("public/index.html", "utf8");
  const serviceWorker = fs.readFileSync("public/sw.js", "utf8");
  const controller = fs.readFileSync("scripts/nexus-render-release-controller.js", "utf8");
  const topology = fs.readFileSync("render.yaml", "utf8");
  for (const source of [app, index, serviceWorker]) assert.match(source, /__NEXUS_RELEASE_SHA__/);
  for (const legacy of [/nexus-behavior-502/, /agrinexus-pwa-v447/]) {
    for (const source of [server, app, index, serviceWorker]) assert.doesNotMatch(source, legacy);
  }
  assert.match(server, /NEXUS_RELEASE_SHA must be a full immutable Git commit SHA in production/);
  assert.match(server, /replaceAll\(NEXUS_RELEASE_PLACEHOLDER, NEXUS_EFFECTIVE_RELEASE_SHA\)/);
  for (const serviceId of ["web.id", "worker.id", "provider.id"]) {
    assert.match(controller, new RegExp(`installEnvValue\\(client, ${serviceId.replace(".", "\\.")}, "NEXUS_RELEASE_SHA", releaseSha\\)`));
  }
  assert.doesNotMatch(topology, /autoDeploy:\s*true/);
  assert.match(topology, /autoDeployTrigger:\s*off/);
});
