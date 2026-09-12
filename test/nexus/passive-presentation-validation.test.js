"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const start = app.indexOf("function validateNexusPassivePresentation(");
const end = app.indexOf("\nfunction ", start + 1);
assert.ok(start >= 0 && end > start, "extract the production presentation validator");
const validate = vm.runInNewContext("(" + app.slice(start, end).trim() + ")");
const valid = () => ({ schema: "nexus.workspace-outcome.v2", presentation: {
  kind: "assessment", renderer: "passive-ui", interaction: "receipt-only",
  commandAuthority: false, completionAuthority: false
} });
test("production validator accepts the current typed passive outcome", () => {
  const outcome = valid(); assert.equal(validate(outcome), outcome.presentation);
});
test("production validator rejects obsolete, absent, or malformed presentation", () => {
  for (const outcome of [{}, { ...valid(), schema: "nexus.workspace-outcome.v1" },
    { ...valid(), presentation: null }, { ...valid(), presentation: "passive-ui" }]) {
    assert.throws(() => validate(outcome));
  }
});
test("production validator rejects browser command or completion authority", () => {
  for (const patch of [{ commandAuthority: true }, { completionAuthority: true },
    { commandAuthority: undefined }, { renderer: "active-ui" },
    { interaction: "execute" }, { kind: " " }]) {
    const outcome = valid(); Object.assign(outcome.presentation, patch);
    assert.throws(() => validate(outcome));
  }
});
