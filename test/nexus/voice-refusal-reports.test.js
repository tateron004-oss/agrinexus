"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const reports = require("../../server/voice-stall-reports.js");

// How often the voice model refuses something the page can do, and how often the page cannot answer it either, is counted (never the words) and read from /api/admin/voice/stall-summary.
test("the two refusal kinds are accepted, kept and counted, and nothing the person said is kept", () => {
  assert.ok(reports.KINDS.includes("model-refused") && reports.KINDS.includes("request-not-understood"));
  const report = reports.sanitiseStallReport({ kind: "model-refused", lastActivity: "refusal-recovered", transcript: "open my private diary", speech: "secret" });
  assert.equal(report.kind, "model-refused"); assert.ok(!JSON.stringify(report).includes("diary") && !JSON.stringify(report).includes("secret"));
  let stored = [];
  for (const kind of ["model-refused", "model-refused", "request-not-understood", "tool-stuck"]) stored = reports.storeStallReport(stored, reports.sanitiseStallReport({ kind }));
  const summary = reports.summariseStallReports(stored, { limit: 5 });
  const count = name => (summary.byKind.find(item => item.name === name) || {}).count;
  assert.equal(count("model-refused"), 2); assert.equal(count("request-not-understood"), 1);
});

test("the page reports a recovered refusal, and one it still could not answer, without the words", () => {
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const start = app.indexOf("function kyroRecoverRefusal("); const body = app.slice(start, app.indexOf("\n}\n", start));
  assert.match(body, /reportKyroVoiceStall\("model-refused", \{ lastActivity: "refusal-recovered" \}\)/);
  assert.match(body, /reportKyroVoiceStall\("request-not-understood", \{ lastActivity: "refusal-not-answered" \}\)/);
  assert.ok(!/reportKyroVoiceStall\([^)]*said/.test(body), "the sentence is never sent");
});
