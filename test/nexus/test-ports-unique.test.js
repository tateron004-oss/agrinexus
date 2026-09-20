"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// node --test runs test files in parallel. Two files that spawn a server on the same port collide: the loser gets
// ECONNREFUSED. Two pairs (4563, 4564) did, which made three unrelated tests fail intermittently under full-suite load.
test("no two test files spawn a server on the same port", () => {
  const seen = new Map();
  const duplicates = [];
  for (const file of fs.readdirSync(__dirname).filter(name => name.endsWith(".test.js"))) {
    const source = fs.readFileSync(path.join(__dirname, file), "utf8");
    for (const match of source.matchAll(/^const port = (\d{4,5});/gm)) {
      const port = match[1];
      if (seen.has(port) && seen.get(port) !== file) duplicates.push(`${port}: ${seen.get(port)} and ${file}`);
      seen.set(port, file);
    }
  }
  assert.deepEqual(duplicates, [], "each spawned test server needs its own port");
  assert.ok(seen.size > 20, "the port scan is actually finding the servers");
});
