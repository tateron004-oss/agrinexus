"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const canonicalPath = ".github/workflows/nexus-protected-production-deploy.yml";
const retiredPath = ".github/workflows/nexus-unified-production-release.yml";
const canonical = fs.readFileSync(canonicalPath, "utf8");
const retired = fs.readFileSync(retiredPath, "utf8");
const standaloneAcceptance = fs.readFileSync(".github/workflows/nexus-21-objective-production-acceptance.yml", "utf8");

test("production promotion is gated by production-equivalent qualification", () => {
  assert.match(canonical, /qualify-release-candidate:/);
  assert.match(canonical, /image: ghcr\.io\/tateron004-oss\/agrinexus-pgvector:pg17/);
  assert.match(canonical, /npm run foundation:migrate/);
  assert.match(canonical, /node scripts\/nexus-preproduction-black-box\.js/);
  assert.match(canonical, /deploy-exact-release:[\s\S]*needs: qualify-release-candidate/);
});

test("the proof pulls its database image from this repository's own registry with the built-in token, and a workflow keeps that copy filled", () => {
  assert.match(canonical, /permissions:\s+contents: read\s+packages: read\s+services:/);
  assert.match(canonical, /credentials:\s+username: \$\{\{ github\.actor \}\}\s+password: \$\{\{ secrets\.GITHUB_TOKEN \}\}/);
  assert.doesNotMatch(canonical, /image: pgvector\/pgvector/, "the proof must not depend on Docker Hub's anonymous pull limit");
  const mirror = fs.readFileSync(".github/workflows/mirror-pgvector-image.yml", "utf8");
  assert.match(mirror, /packages: write/);
  assert.match(mirror, /workflow_dispatch:/);
  assert.match(mirror, /agrinexus-pgvector:pg17/);
  assert.match(fs.readFileSync(".github/mirror/pgvector.Dockerfile", "utf8"), /^FROM pgvector\/pgvector:pg17$/m);
});

test("canonical promotion uses Render API control without a dashboard bridge or deploy hook", () => {
  assert.match(canonical, /RENDER_API_KEY/);
  assert.match(canonical, /node scripts\/nexus-render-release-controller\.js/);
  assert.doesNotMatch(canonical, /RENDER_DEPLOY_HOOK_URL/);
});

test("legacy unified release cannot race the canonical main promotion", () => {
  assert.doesNotMatch(retired, /^\s*push\s*:/m);
  assert.match(retired, /workflow_dispatch:/);
});

test("production identity and behavior are both re-proved after deployment", () => {
  assert.match(canonical, /Wait for exact release identity/);
  assert.match(canonical, /NEXUS_CANDIDATE_URL: \$\{\{ env\.PRODUCTION_ORIGIN \}\}/);
  assert.match(canonical, /Re-prove deployed Standard User behavior/);
});

test("protected deployment owns authenticated 3/3 acceptance without cross-workflow secret loss", () => {
  assert.match(canonical, /node scripts\/nexus-render-release-controller\.js[\s\S]*Run three consecutive authenticated exact-SHA production passes/);
  assert.match(canonical, /node scripts\/nexus-21-objective-production-acceptance\.js/);
  assert.match(canonical, /output\/nexus-21-objective-\*\.json/);
  assert.doesNotMatch(standaloneAcceptance, /workflow_run:/);
});

test("protected deployment records exact-release evidence before evaluating the 3/3 streak", () => {
  const probes = canonical.indexOf("node scripts/nexus-run-production-evidence-probes.js");
  const browser = canonical.indexOf("node scripts/nexus-run-browser-capability-probes.js");
  const record = canonical.indexOf("node scripts/nexus-record-production-proof.js");
  const acceptance = canonical.indexOf("node scripts/nexus-21-objective-production-acceptance.js");
  assert.ok(probes > -1 && browser > probes && record > browser && acceptance > record);
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
