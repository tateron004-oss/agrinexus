"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found by an independent capability audit: "Create a document called Farm Plan that says I will plant maize in March, and save it" by voice made a file with the header "Nexus export" and the body
// "I will plant maize in March, and save it" (only "titled" was understood, and ", and save it" was not cut out). The typed path was already right.

const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const start = server.indexOf("function stripTrailingExportMetaClauses");
const fn = server.indexOf("function nexusOpenAiNativeExtractExportArgs", start);
const end = server.indexOf("\n}\n", fn) + 3;
assert.ok(start > 0 && fn > start && end > fn);
const sandbox = { sanitizePilotText: (value, max) => String(value || "").slice(0, max), String, Array, Boolean };
vm.createContext(sandbox);
vm.runInContext(`${server.slice(start, end)}\nthis.extract = nexusOpenAiNativeExtractExportArgs;`, sandbox);
const extract = (command, args = {}) => JSON.parse(JSON.stringify(sandbox.extract(command, args)));

test("'called' and 'named' give the title, and the title stops where the content begins", () => {
  assert.deepEqual(extract("Create a document called Farm Plan that says I will plant maize in March, and save it"), { title: "Farm Plan", content: "I will plant maize in March", format: "txt" });
  assert.equal(extract("Make a file named Rain Notes saying it rained 20 mm").title, "Rain Notes");
  assert.equal(extract("Create a document titled Farm Plan that says plant maize").title, "Farm Plan");
});

test("', and save it' is not part of what the document says, and what was said still is", () => {
  assert.equal(extract("Create a document that says buy seed on Monday, and save it").content, "buy seed on Monday");
  assert.equal(extract("Export this saying hello there as a PDF.").content, "hello there");
  assert.equal(extract("Create a note saying we save it all in the shed").content, "we save it all in the shed", "'save it' inside the text is kept");
  assert.equal(extract("Create a document that says call the buyer and save it for later").content, "call the buyer and save it for later", "only a closing request is cut");
});

test("a request with no title still gets the default one", () => {
  assert.equal(extract("Export this saying hello there as a PDF").title, "Nexus export");
});
