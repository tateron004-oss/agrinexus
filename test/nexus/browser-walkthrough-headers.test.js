"use strict";
// Found by clicking every tab in the real app: the workspace header kept saying "Dashboard" on the Case Review page.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const html = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");

test("every sidebar tab has its own workspace header copy", () => {
  const from = app.indexOf("const workspaceCopy = {");
  const block = app.slice(from, app.indexOf("\n};", from));
  const tabs = [...html.matchAll(/<button data-section="([a-z]+)" class="nav/g)].map(match => match[1]);
  assert.ok(tabs.length >= 11, "the sidebar tabs must be found");
  for (const tab of tabs) assert.match(block, new RegExp(`\\n  ${tab}: \\{`), `workspaceCopy is missing "${tab}"`);
});
