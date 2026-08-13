"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const app = fs.readFileSync("public/app.js", "utf8");

test("authoritative conversation and task state are scoped to the active identity", () => {
  assert.match(app, /NEXUS_AUTHORITATIVE_PRINCIPAL_KEY/);
  assert.match(app, /function resetNexusAuthoritativeIdentityContext/);
  assert.match(app, /removeItem\(NEXUS_AUTHORITATIVE_CONVERSATION_KEY\)/);
  assert.match(app, /removeItem\(NEXUS_AUTHORITATIVE_TASK_KEY\)/);
  assert.match(app, /data\.auth\.resumed !== true/);
  assert.match(app, /resetNexusAuthoritativeIdentityContext\(data\?\.user\?\.id \|\| ""\)/);
  assert.match(app, /resetNexusAuthoritativeIdentityContext\(\);\n    await request\("\/api\/logout"/);
});
