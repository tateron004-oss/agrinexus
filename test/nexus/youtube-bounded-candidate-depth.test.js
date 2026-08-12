"use strict";
const fs = require("node:fs");
const test = require("node:test");
const assert = require("node:assert/strict");

test("YouTube recovery remains bounded, excludes failed IDs, and requires genuine state 1", () => {
  const source = fs.readFileSync("public/app.js", "utf8");
  assert.match(source, /candidatePlans\.slice\(0, 24\)/);
  assert.match(source, /length: 8/);
  assert.match(source, /rejectedVideoIds\.add\(String\(response\.videoId\)\)/);
  assert.match(source, /playerState === 1/);
  assert.match(source, /playbackVerified: true/);
  assert.match(source, /exhausted bounded candidates/);
  assert.doesNotMatch(source, /embedding_not_allowed[^\n]{0,200}playbackVerified:\s*true/);
});
