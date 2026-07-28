#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const manifestPath = path.join(root, ".github", "nexus-protected-experience.json");
const releaseMode = process.argv.includes("--release");
const expectedLanguages = ["en", "es", "fr", "sw", "ar", "pt"];
const expectedWorkspaces = [
  "agriculture", "health", "telehealth", "mobile-clinic", "pharmacy",
  "learning", "workforce", "marketplace", "maps", "music", "reminders",
  "offline", "live-knowledge"
];
const expectedRequirements = [
  "voice-identity", "personalized-greeting", "wake-phrases", "conversation-cycle",
  "continuous-conversation", "barge-in", "single-voice", "conversation-memory",
  "automatic-language", "spoken-confirmation", "visible-populated-workspaces",
  "correction-navigation", "provider-truth", "consequential-consent",
  "accessibility-controls", "low-bandwidth-offline", "performance-recovery",
  "safe-preferences", "production-receipts", "protected-runtime-and-workspaces"
];

function fail(message) {
  console.error(`NEXUS PROTECTED EXPERIENCE: BLOCKED — ${message}`);
  process.exit(1);
}

function run(relativePath) {
  const result = spawnSync(process.execPath, [relativePath], {
    cwd: root,
    encoding: "utf8",
    stdio: "pipe"
  });
  if (result.status !== 0) {
    process.stderr.write(result.stdout || "");
    process.stderr.write(result.stderr || "");
    fail(`${relativePath} failed`);
  }
  process.stdout.write(result.stdout || "");
}

if (!fs.existsSync(manifestPath)) fail("manifest is missing");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

try {
  assert.equal(manifest.schema, "nexus.protected-experience.v1");
  assert.equal(manifest.owner, "Ron Tate");
  assert.equal(manifest.policy.failClosed, true);
  assert.equal(manifest.policy.releaseRequiresAllRequirementsCertified, true);
  assert.equal(manifest.policy.certificationMustTargetExactReleaseCommit, true);
  assert.deepEqual(manifest.languages, expectedLanguages);
  assert.deepEqual(manifest.workspaces, expectedWorkspaces);
  assert.deepEqual(manifest.requirements.map(({ id }) => id), expectedRequirements);
  assert.equal(new Set(manifest.requirements.map(({ id }) => id)).size, expectedRequirements.length);
  for (const requirement of manifest.requirements) {
    assert.ok(requirement.title && requirement.acceptance, `${requirement.id} must define acceptance`);
    assert.ok(Array.isArray(requirement.evidence) && requirement.evidence.length > 0,
      `${requirement.id} must define evidence`);
    assert.ok(["certified", "pending"].includes(requirement.status),
      `${requirement.id} has an invalid status`);
  }
} catch (error) {
  fail(error.message);
}

run("scripts/nexus-protected-foundation-guard.js");
run("rebuild/tests/nexus-browser-shell.test.js");
run("rebuild/tests/nexus-voice-foundation.test.js");
run("rebuild/tests/nexus-runtime-e2e.test.js");

const pending = manifest.requirements.filter(({ status }) => status !== "certified");
if (releaseMode && pending.length) {
  console.error("NEXUS PROTECTED EXPERIENCE: RELEASE BLOCKED");
  for (const requirement of pending) {
    console.error(`- ${requirement.id}: ${requirement.title} requires certification`);
  }
  console.error("Do not change a status to certified without the evidence declared in the manifest.");
  process.exit(1);
}

console.log(
  `NEXUS PROTECTED EXPERIENCE: CONTRACT PASS — ${manifest.requirements.length} requirements, ` +
  `${manifest.languages.length} languages, ${manifest.workspaces.length} workspaces; ` +
  `${pending.length} requirement(s) still block release certification.`
);
