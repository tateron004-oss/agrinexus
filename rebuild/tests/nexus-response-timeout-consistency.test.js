"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const entry = require("../browser/nexus-clean-entry");
const population = require("../browser/nexus-content-population-extension");

assert.equal(entry.PRODUCTION_RESPONSE_ALLOWANCE_MS, 90_000);
assert.equal(population.PRODUCTION_RESPONSE_ALLOWANCE_MS, 90_000);

let workspaceDeadline = null;
let opened = null;
const listeners = new Map();
const windowObject = {
  addEventListener(type, listener) { listeners.set(type, listener); },
  removeEventListener(type) { listeners.delete(type); },
  dispatchEvent(event) { opened = event; },
  setTimeout() { throw new Error("workspace adapter must use its production deadline contract"); },
  clearTimeout() {}
};
const originalSetTimeout = global.setTimeout;
const originalClearTimeout = global.clearTimeout;
global.setTimeout = (callback, milliseconds) => {
  workspaceDeadline = { callback, milliseconds };
  return 1;
};
global.clearTimeout = () => { workspaceDeadline = null; };
const adapter = entry.createWorkspaceAdapter({ windowObject });
const acknowledgement = adapter({ workspace: "live-knowledge", command: "Explain solar panels" });
assert.equal(workspaceDeadline.milliseconds, 90_000, "workspace acknowledgement must use the production response allowance");
listeners.get("nexus.clean.workspace.acknowledged")({ detail: {
  requestId: opened.detail.requestId,
  visible: true,
  populated: true,
  outcomeVerified: true,
  outcomeKind: "answer",
  evidenceReceiptId: "receipt-current-turn",
  evidenceStatus: "verified"
} });
global.setTimeout = originalSetTimeout;
global.clearTimeout = originalClearTimeout;

const source = fs.readFileSync(path.join(root, "browser", "nexus-clean-entry.js"), "utf8");
const extension = fs.readFileSync(path.join(root, "browser", "nexus-content-population-extension.js"), "utf8");
const bundle = fs.readFileSync(path.join(root, "browser", "nexus-clean.bundle.js"), "utf8");
assert.match(source, /PRODUCTION_RESPONSE_ALLOWANCE_MS = 90_000/);
assert.match(extension, /PRODUCTION_RESPONSE_ALLOWANCE_MS = 90_000/);
assert.ok(bundle.includes("PRODUCTION_RESPONSE_ALLOWANCE_MS = 9e4"), "generated bundle must preserve the unified allowance");

acknowledgement.then((outcome) => {
  assert.equal(outcome.visible, true);
  assert.equal(outcome.populated, true);
  assert.equal(outcome.outcomeVerified, true);
  assert.equal(outcome.evidenceReceiptId, "receipt-current-turn");
  assert.equal(outcome.evidenceStatus, "verified");
  console.log("Nexus response-timeout consistency contract passed.");
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
