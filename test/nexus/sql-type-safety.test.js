"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// Found live after the companion release: `($2::text is null or principal_id=$2)` makes Postgres infer $2 as text, and comparing a uuid
// column with text fails ("operator does not exist: uuid = text"). The in-memory test databases cannot see this, and the handlers
// swallowed the error, so the circle, the community desk and the feedback report silently fell back to the AI. This scans every SQL
// string for the pattern so it cannot come back.
const UUID_COLUMNS = ["principal_id", "tenant_id", "user_id", "owner_id", "actor_id", "subject_id", "device_id_uuid"];
function sourceFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? sourceFiles(path.join(dir, entry.name)) : entry.name.endsWith(".js") ? [path.join(dir, entry.name)] : []);
}

test("no query compares a uuid column with a parameter that a ::text cast has already typed as text", () => {
  const offenders = [];
  for (const file of sourceFiles(path.join(__dirname, "../../nexus"))) {
    const source = fs.readFileSync(file, "utf8");
    for (const column of UUID_COLUMNS) {
      const bad = new RegExp(`(\\$\\d+)::text is null or ${column}\\s*=\\s*\\1(?![\\d:])`, "g");
      if (bad.test(source)) offenders.push(`${path.relative(path.join(__dirname, "../.."), file)}: ${column}`);
    }
  }
  assert.deepEqual(offenders, [], "cast the column instead: principal_id::text = $n::text");
});

test("the three repositories that take an optional person compare as text on both sides", () => {
  for (const file of ["nexus/community/store.js", "nexus/companion/circle-repository.js", "nexus/memory/repository.js"]) {
    const source = fs.readFileSync(path.join(__dirname, "../..", file), "utf8");
    assert.match(source, /\$2::text is null or principal_id::text=\$2::text/, file);
  }
});
