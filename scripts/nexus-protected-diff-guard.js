"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, ".github", "nexus-protected-foundation.json"), "utf8"));
const PROTECTED_FILES = Object.freeze([
  "server.js", "public/app.js", "public/index.html", "public/styles.css", "public/sw.js",
  "public/nexus-genesis-voice-runtime-manager.js", "public/nexus-openai-realtime-agent.js",
  "public/vendor/nexus-openai-realtime-agent.bundle.mjs", "scripts/certify-nexus.js", "scripts/qa-suite.js"
]);
const baseSha = String(process.env.BASE_SHA || "").trim();
const prNumber = Number(process.env.PR_NUMBER || 0);
const headBranch = String(process.env.HEAD_BRANCH || "").trim();
assert.match(baseSha, /^[0-9a-f]{40}$/, "BASE_SHA must be the full pull-request base SHA.");

const changed = execFileSync("git", ["diff", "--name-only", `${baseSha}...HEAD`], { cwd: root, encoding: "utf8" })
  .split(/\r?\n/).map(value => value.trim()).filter(Boolean);
for (const file of PROTECTED_FILES) assert.ok(Object.hasOwn(manifest.protectedFiles, file), `Protected manifest entry is missing: ${file}`);
const protectedChanges = changed.filter(file => PROTECTED_FILES.includes(file));
if (!protectedChanges.length) {
  console.log("NEXUS PROTECTED DIFF: PASS — no protected paths changed.");
  process.exit(0);
}

const authorization = manifest.authorizedUpdate || {};
assert.equal(baseSha, authorization.baseCommit, "Protected update base SHA is not authorized.");
assert.equal(prNumber, authorization.pullRequest, "Protected update pull request is not authorized.");
assert.equal(headBranch, authorization.headBranch, "Protected update branch is not authorized.");
assert.deepEqual(protectedChanges, [authorization.file], "Protected changes exceed the single authorized file.");
assert.ok(String(authorization.purpose || "").trim().length >= 20, "Protected update purpose is incomplete.");

const file = authorization.file;
const content = fs.readFileSync(path.join(root, file));
const blob = crypto.createHash("sha1").update(Buffer.concat([Buffer.from(`blob ${content.length}\0`), content])).digest("hex");
assert.equal(blob, manifest.protectedFiles[file], "Authorized protected file does not match its approved manifest hash.");
console.log(`NEXUS PROTECTED DIFF: PASS — ${file} is authorized for PR #${prNumber}.`);
