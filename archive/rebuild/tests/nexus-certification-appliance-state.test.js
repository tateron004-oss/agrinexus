"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const {
  acquireLock,
  canonicalHost,
  classifyFailure,
  initializeLedger,
  readLedger,
  recordAttempt
} = require("../../scripts/nexus-certification-appliance-state");

const root = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-appliance-test-"));
const ledgerFile = path.join(root, "ledger.json");
const lockFile = path.join(root, "appliance.lock");
const sha = "a".repeat(40);
const host = "https://nexus-genesis-certified.onrender.com";

assert.equal(canonicalHost(`${host}/`), host);
assert.throws(() => canonicalHost("http://nexus-genesis-certified.onrender.com"), /HTTPS/);
assert.equal(classifyFailure("DEPLOYMENT_NOT_READY"), "infrastructure");
assert.equal(classifyFailure("OpenAI Realtime 429 insufficient_quota"), "provider");
assert.equal(classifyFailure("expectReceipt failed for music"), "nexus");

initializeLedger({ file: ledgerFile, releaseSha: sha, host, requiredPasses: 3 });
for (let attempt = 1; attempt <= 2; attempt += 1) {
  recordAttempt({ file: ledgerFile, attempt: { attemptId: String(attempt), releaseSha: sha, host, outcome: "passed", classification: "none" } });
}
recordAttempt({ file: ledgerFile, attempt: { attemptId: "infra", releaseSha: sha, host, outcome: "failed", classification: "infrastructure" } });
assert.equal(readLedger(ledgerFile).consecutivePasses, 2, "infrastructure failures must not erase physical passes");
recordAttempt({ file: ledgerFile, attempt: { attemptId: "nexus", releaseSha: sha, host, outcome: "failed", classification: "nexus" } });
assert.equal(readLedger(ledgerFile).consecutivePasses, 0, "genuine Nexus failures reset the streak");
for (let attempt = 1; attempt <= 3; attempt += 1) {
  recordAttempt({ file: ledgerFile, attempt: { attemptId: `final-${attempt}`, releaseSha: sha, host, outcome: "passed", classification: "none" } });
}
assert.equal(readLedger(ledgerFile).certified, true);
assert.throws(() => recordAttempt({ file: ledgerFile, attempt: { releaseSha: "b".repeat(40), host, outcome: "passed" } }), /identity/);

const release = acquireLock(lockFile, { releaseSha: sha });
assert.throws(() => acquireLock(lockFile), /CERTIFICATION_LOCKED/);
release();
assert.equal(fs.existsSync(lockFile), false);
fs.rmSync(root, { recursive: true, force: true });
console.log("Nexus Windows certification appliance state: PASS");
