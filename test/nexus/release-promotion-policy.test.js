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
