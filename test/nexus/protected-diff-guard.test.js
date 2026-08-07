const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");

test("protected server activation has one exact PR-scoped authorization", () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "../../.github/nexus-protected-foundation.json"), "utf8"));
  assert.deepEqual(manifest.authorizedUpdate, {
    baseCommit: "65ffc29de7a7e99cf66641f553901f302b125644",
    pullRequest: 34,
    headBranch: "agent/nexus-authoritative-runtime",
    file: "server.js",
    purpose: "Activate the authoritative Nexus PostgreSQL task runtime before legacy API routing"
  });
  assert.match(manifest.protectedFiles["server.js"], /^[0-9a-f]{40}$/);
});
