"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { run: status } = require("../../scripts/nexus-path2-certification-status.js");
const { run: record } = require("../../scripts/nexus-record-path2-usability-session.js");

const releaseSha = "a".repeat(40); const path1Baseline = "b".repeat(40);
test("release captures an exact-SHA pending report without misdeclaring certification", async () => {
  const output = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "path2-status-")), "status.json");
  const report = { certified: false, releaseSha, path1Baseline, stabilityPasses: 3,
    lanes: { intelligence: { certified: true }, usability: { certified: false } } };
  const result = await status({ NEXUS_BASE_URL: "https://nexus.example", NEXUS_ACCEPTANCE_TOKEN: "token",
    EXPECTED_RELEASE_SHA: releaseSha, NEXUS_PATH1_BASELINE: path1Baseline, NEXUS_PATH2_STATUS_OUTPUT: output,
    NEXUS_PATH2_ALLOW_PENDING: "true" }, async () => ({ status: 503, ok: false, text: async () => JSON.stringify(report) }));
  assert.equal(result.certified, false); assert.deepEqual(JSON.parse(fs.readFileSync(output)), report);
});

test("trusted observation recorder accepts only genuine distinct-human exact-release evidence", async () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "path2-usability-")); const inputPath = path.join(directory, "session.json");
  const input = { releaseSha, path1Baseline, participantId: "human-participant-1", observerId: "human-observer-1",
    locale: "sw", completed: true, unpromptedLanguage: true, effortSaved: true, falseSuccesses: 0,
    production: true, simulated: false, observedAt: new Date().toISOString(),
    receipt: { receiptId: "human-receipt-1", releaseSha, path1GuardPassed: true, outcomes: [{ type: "visible", observed: true }] } };
  fs.writeFileSync(inputPath, JSON.stringify(input)); let submitted;
  await record({ NEXUS_BASE_URL: "https://nexus.example", NEXUS_ACCEPTANCE_TOKEN: "token", EXPECTED_RELEASE_SHA: releaseSha,
    NEXUS_USABILITY_SESSION_FILE: inputPath }, async (_url, init) => { submitted = JSON.parse(init.body);
      return { ok: true, status: 201, text: async () => JSON.stringify({ ok: true, session: { session_id: "p2u_1" } }) }; });
  assert.equal(submitted.participantId, "human-participant-1"); assert.notEqual(submitted.participantId, submitted.observerId);
});
