"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

// 2026-09-23: found live -- the user asked Kyro for the weather in Mombasa,
// got a real spoken answer, but a leftover visual card stayed on screen
// through every unrelated follow-up question, only ever replaced (never
// cleared) once a later turn happened to carry its own rich data. Root
// cause: runBackendAgentCommand() (the typed/legacy-voice command path)
// only ever called paintNexusRichDataCard() when result.metadata.richData
// was present -- never with null/undefined to explicitly clear a stale
// card from an earlier turn. richData is not image-only: it also covers
// plain lists like "Suggested next steps" (server.js's richDataKeys), which
// is what a weather answer can attach -- "if it wasn't something that
// required an image" (the user's own words) still had a lingering card.
// runUtilityAgentCommand() already called this unconditionally and never
// had the bug; these tests pin runBackendAgentCommand() to the same rule.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

function sliceFunction(name) {
  const asyncStart = app.indexOf(`async function ${name}(`);
  const start = asyncStart !== -1 ? asyncStart : app.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in public/app.js`);
  const candidates = ["\nfunction ", "\nasync function "]
    .map(marker => app.indexOf(marker, start + 10))
    .filter(index => index > start);
  const end = Math.min(...candidates);
  assert.ok(Number.isFinite(end) && end > start, `could not find the end of ${name} in public/app.js`);
  return app.slice(start, end);
}

test("every paintNexusRichDataCard call inside runBackendAgentCommand explicitly clears the card when there is no richData, not only paints when there is one", () => {
  const body = sliceFunction("runBackendAgentCommand");
  const paintCalls = (body.match(/paintNexusRichDataCard\(/g) || []).length;
  const clearCalls = (body.match(/else paintNexusRichDataCard\(null\);/g) || []).length;
  assert.equal(paintCalls, 6, "expected 3 conditional paint calls + 3 matching clear calls (6 total mentions)");
  assert.equal(clearCalls, 3, "all 3 call sites in this function must clear a stale card, matching runUtilityAgentCommand's already-correct pattern");
});

test("runUtilityAgentCommand (the reference implementation) still calls paintNexusRichDataCard unconditionally, unchanged", () => {
  const body = sliceFunction("runUtilityAgentCommand");
  assert.match(body, /paintNexusRichDataCard\(result\.metadata\?\.richData\);/);
});

test("paintNexusRichDataCard(null) actually removes the overlay element from the page, not just skips re-adding it", () => {
  const start = app.indexOf("function paintNexusRichDataCard(");
  const end = app.indexOf("\nfunction ", start + 10);
  const source = app.slice(start, end);

  let removed = false;
  const host = { remove: () => { removed = true; }, innerHTML: "" };
  const sandbox = {
    document: {
      getElementById: id => (id === "nexusRichDataOverlay" ? host : null),
      createElement: () => ({ style: {} }),
      body: { appendChild: () => {} }
    }
  };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  sandbox.paintNexusRichDataCard(null);
  assert.ok(removed, "calling with null/undefined richData must remove any existing overlay");
});
