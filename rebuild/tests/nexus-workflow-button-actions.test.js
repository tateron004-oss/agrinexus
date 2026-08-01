"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { workflowButtonCommand } = require("../browser/nexus-content-population-extension");

assert.equal(workflowButtonCommand("Search opportunities", []), "Search opportunities");
assert.equal(
  workflowButtonCommand("Prepare listing", [
    { label: "Product", value: "maize" },
    { label: "Quantity", value: "50 bags" },
    { label: "Location", value: "Nakuru, Kenya" },
    { label: "Unused", value: "" }
  ]),
  "Prepare listing. Product: maize. Quantity: 50 bags. Location: Nakuru, Kenya"
);

const source = fs.readFileSync(path.resolve(__dirname, "../browser/nexus-content-population-extension.js"), "utf8");
assert.match(source, /#nexus-app-surface \.app-actions button/);
assert.match(source, /contentExtensionExclusive: true/);
assert.match(source, /source: "workflow-button"/);
assert.match(source, /button\.disabled = true/);
assert.match(source, /button\.textContent = "Working…"/);
assert.match(source, /workflow\.button-requested/);
assert.match(source, /dataset\.resumeAction/);
assert.match(source, /dataset\.providerCardAction/);
assert.match(source, /dataset\.contentAction/);

console.log("Nexus workflow button action contract: PASS");
