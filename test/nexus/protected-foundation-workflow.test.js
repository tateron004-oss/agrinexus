const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");

test("protected foundation PR comparison checks out the base commit history", () => {
  const workflow = fs.readFileSync(path.join(__dirname, "../../.github/workflows/nexus-protected-foundation.yml"), "utf8");
  assert.match(workflow, /uses: actions\/checkout@v4\s+with:\s+fetch-depth: 0/);
  assert.match(workflow, /BASE_SHA: \$\{\{ github\.event\.pull_request\.base\.sha \}\}/);
  assert.match(workflow, /PR_NUMBER: \$\{\{ github\.event\.pull_request\.number \}\}/);
  assert.match(workflow, /HEAD_BRANCH: \$\{\{ github\.head_ref \}\}/);
  assert.match(workflow, /node scripts\/nexus-protected-diff-guard\.js/);
});
