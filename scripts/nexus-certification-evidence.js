"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const root = path.resolve("output/nexus-release-certification");
fs.mkdirSync(root, { recursive: true });

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { return null; }
}

function walk(directory, results = []) {
  if (!fs.existsSync(directory)) return results;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full, results);
    else results.push(full);
  }
  return results;
}

const candidates = walk(path.resolve("output"))
  .filter((file) => file.endsWith(".json") && !file.startsWith(root))
  .map((file) => ({ file: path.relative(process.cwd(), file), content: readJson(file) }));
const failures = candidates
  .filter(({ content }) => content?.failure || content?.passed === false)
  .map(({ file, content }) => ({ file, failure: content.failure || content }));

const evidence = {
  schema: "nexus.certification.evidence.v2",
  recordedAt: new Date().toISOString(),
  lane: process.env.NEXUS_CERTIFICATION_LANE || "unknown",
  outcome: process.env.NEXUS_CERTIFICATION_OUTCOME || (failures.length ? "failure" : "unknown"),
  release: {
    workflowSha: process.env.GITHUB_SHA || null,
    runId: process.env.GITHUB_RUN_ID || null,
    runAttempt: process.env.GITHUB_RUN_ATTEMPT || null,
    identity: readJson(path.join(root, "deployment-identity.json"))
  },
  runner: {
    hostname: os.hostname(),
    platform: os.platform(),
    release: os.release(),
    arch: os.arch(),
    node: process.version
  },
  firstFailure: failures[0] || null,
  evidenceFiles: candidates.map(({ file }) => file)
};

fs.writeFileSync(path.join(root, `${evidence.lane}-summary.json`), `${JSON.stringify(evidence, null, 2)}\n`);
console.log(JSON.stringify(evidence, null, 2));
