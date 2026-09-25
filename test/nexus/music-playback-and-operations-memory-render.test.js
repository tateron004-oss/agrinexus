"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appJsPath = path.join(__dirname, "..", "..", "public", "app.js");
const source = fs.readFileSync(appJsPath, "utf8");

function extractFunction(name) {
  let start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in app.js`);
  if (source.slice(Math.max(0, start - 6), start) === "async ") start -= 6;
  const parenStart = source.indexOf("(", start);
  let parenDepth = 0;
  let parenEnd = parenStart;
  for (; parenEnd < source.length; parenEnd += 1) {
    if (source[parenEnd] === "(") parenDepth += 1;
    else if (source[parenEnd] === ")") {
      parenDepth -= 1;
      if (parenDepth === 0) break;
    }
  }
  const bodyStart = source.indexOf("{", parenEnd);
  let depth = 0;
  let i = bodyStart;
  for (; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}") {
      depth -= 1;
      if (depth === 0) break;
    }
  }
  return source.slice(start, i + 1);
}

// Found live: typing "play some afrobeats music" and pressing Send always
// opened the decorative "Music/Media" quick-action panel and never even
// attempted the real, already-working Apple Music/YouTube playback pipeline
// -- window.NexusUnifiedBrainRuntime's own domain classifier never
// recognizes music as qualifying for that pipeline (checked separately, not
// re-verified here), but the pipeline itself (handleNexusUnifiedBrainRuntimeCommand)
// has no such gate, so it must be tried directly.
test("runNexusStandardUserHomeLocalCommand tries the real playback pipeline before falling back to the decorative media panel", () => {
  const body = extractFunction("runNexusStandardUserHomeLocalCommand");
  const musicBranchStart = body.indexOf("isNexusMediaMusicCommand(normalized)");
  assert.ok(musicBranchStart > 0, "could not find the music command branch");
  const musicBranchEnd = body.indexOf("\n  if (", musicBranchStart + 10);
  const musicBranch = body.slice(musicBranchStart, musicBranchEnd);
  assert.match(musicBranch, /handleNexusUnifiedBrainRuntimeCommand\(normalized/, "the real playback pipeline must be tried");
  assert.match(musicBranch, /openNexusWorkflow\("media"/, "the decorative panel must remain as a fallback, not disappear entirely");
  // The real call must come first -- confirm it's not just present but ordered before the fallback.
  const realCallIndex = musicBranch.indexOf("handleNexusUnifiedBrainRuntimeCommand(normalized");
  const fallbackIndex = musicBranch.indexOf('openNexusWorkflow("media"');
  assert.ok(realCallIndex < fallbackIndex, "the real pipeline must be attempted before the decorative fallback runs");
});

function loadOperationsMemoryWindow(resultOverrides) {
  const context = {
    console,
    data: {},
    nexusOperationsLastResult: { action: "show_hiring_pipeline", ...resultOverrides },
    translateText: text => text,
    escapeHtml: text => String(text)
  };
  vm.createContext(context);
  return vm.runInContext(`${extractFunction("renderNexusOperationsMemoryWindow")}\nrenderNexusOperationsMemoryWindow();`, context);
}

// Found live: a real "show hiring pipeline"/"show applicant timeline"/
// "show action receipts"/"show audit log" result computes real pipeline/
// timeline/receipts/auditLogs data server-side, but this renderer never read
// any of those fields -- only a single unrelated record ever showed, as a
// raw JSON blob, next to a generic "No operation receipt yet." placeholder.
test("a real hiring pipeline result renders the actual job/application entries, not just the employer record", () => {
  const html = loadOperationsMemoryWindow({
    pipeline: [
      { type: "employer-profile", occurredAt: "2026-09-20", title: "Acme Farms active" },
      { type: "job-opportunity", occurredAt: "2026-09-21", title: "Warehouse Worker open" }
    ]
  });
  assert.match(html, /Acme Farms active/);
  assert.match(html, /Warehouse Worker open/);
});

test("a real action-receipts result renders the actual receipts, not just the single latest one", () => {
  const html = loadOperationsMemoryWindow({
    receipts: [
      { action: "add_job_opportunity", status: "prepared", createdAt: "2026-09-21" },
      { action: "create_transaction", status: "completed", createdAt: "2026-09-22" }
    ]
  });
  assert.match(html, /add_job_opportunity/);
  assert.match(html, /create_transaction/);
});

test("a real audit-log result renders the actual audit entries, not just a generic placeholder", () => {
  const html = loadOperationsMemoryWindow({
    auditLogs: [{ summary: "Job opportunity created for Acme Farms", timestamp: "2026-09-21" }]
  });
  assert.match(html, /Job opportunity created for Acme Farms/);
});

test("with no pipeline/timeline/receipts/auditLogs, the window renders cleanly with none of the new sections", () => {
  const html = loadOperationsMemoryWindow({});
  assert.doesNotMatch(html, /data-nexus-operations-timeline="true"/);
  assert.doesNotMatch(html, /data-nexus-operations-receipt-list="true"/);
  assert.doesNotMatch(html, /data-nexus-operations-audit-list="true"/);
});
