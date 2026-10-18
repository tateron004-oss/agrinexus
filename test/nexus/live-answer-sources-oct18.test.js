"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Asked by the owner: "why are we limiting Kyro?" One real gap was that a live web answer ("about 66 shillings per kilogram") never said where it came from, only "recent market reporting". The sources are now
// said and shown at the end of the answer.
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function sourcesLine() {
  const start = server.indexOf("function liveKnowledgeSourcesLine(");
  const end = server.indexOf("\n}\n", start) + 3;
  assert.ok(start > 0 && end > start, "the helper is in server.js");
  const context = {};
  vm.runInNewContext(`${server.slice(start, end)}\nthis.line = liveKnowledgeSourcesLine;`, context);
  return context.line;
}

test("the sources line names up to three different publishers, by name when it is short and by address when it is not", () => {
  const line = sourcesLine();
  assert.equal(line([{ publisher: "Nation Africa", domain: "nation.africa" }]), " Sources: Nation Africa, checked just now.");
  assert.equal(line([{ publisher: "Nation Africa", domain: "nation.africa" }, { publisher: "nation africa", domain: "nation.africa" }, { publisher: "", domain: "kenyans.co.ke" }, { publisher: "https://example.org/a/very/long/title", domain: "example.org" }, { domain: "fourth.example" }]),
    " Sources: Nation Africa, kenyans.co.ke and example.org, checked just now.");
  assert.equal(line([{ publisher: "A very long publisher name that goes past forty characters in total", domain: "long.example" }]), " Sources: long.example, checked just now.");
});

test("no sources, nothing said about them", () => {
  const line = sourcesLine();
  assert.equal(line([]), "");
  assert.equal(line(undefined), "");
  assert.equal(line([{ publisher: "", domain: "" }, null]), "");
});

test("the live knowledge tool adds the line to a source-backed answer, and only to one", () => {
  assert.match(server, /response: `\$\{liveKnowledge\.summary \|\| liveKnowledge\.answer \|\| ""\}\$\{liveKnowledge\.status === "source-backed" \? liveKnowledgeSourcesLine\(liveKnowledge\.citations\) : ""\}`,/);
});
