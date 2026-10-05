"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

// The reminders list executor was given the repeating-reminders store, which was created AFTER the executors that use it. The executors are built at once when the runtime starts,
// so the whole runtime failed to start ("Cannot access 'repeatReminderRecords' before initialization", then a 503 from /api/nexus/runtime/status). Tests that fake the runtime did not
// catch it; this one builds the real runtime (the database connection is only opened when a query is made).

test("the real Nexus runtime can be created", () => {
  const root = path.resolve(__dirname, "..", "..");
  const script = `
    process.env.NEXUS_DISABLE_LOCAL_ENV_FILES = "true";
    const { createRuntime } = require(${JSON.stringify(path.join(root, "nexus", "runtime", "create-runtime.js"))});
    const quiet = { info() {}, warn() {}, error() {}, log() {} };
    const runtime = createRuntime({ env: { DATABASE_URL: "postgres://u:p@127.0.0.1:5432/x", DATABASE_SSL: "false", AGRINEXUS_STATE_STORE: "postgres", NEXUS_ACCEPTANCE_TOKEN: "t",
      RENDER_GIT_COMMIT: "a".repeat(40), NEXUS_RELEASE_SHA: "a".repeat(40) }, logger: quiet });
    console.log("runtime created " + Object.keys(runtime).length);
    process.exit(0);`;
  const out = execFileSync(process.execPath, ["-e", script], { cwd: root, encoding: "utf8", timeout: 60000 });
  assert.match(out, /runtime created \d+/);
});
