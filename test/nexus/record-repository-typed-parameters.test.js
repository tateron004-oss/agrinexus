"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { RecordRepository } = require("../../nexus/data/record-repository.js");

// Found by running the planner against a real PostgreSQL parser (an in-memory one): "delete my last reading" followed by "yes" answered "I could not finish that, because your saved
// readings could not be updated just now" and deleted nothing. RecordRepository.remove wrote jsonb_build_object('deletedBy', $3) with the parameter untyped, and PostgreSQL cannot work out
// the type of a parameter that is only handed to a function taking "any" (error 42P18, "could not determine data type of parameter $3"). Every deletion of a stored record failed the same way.
// (The fake databases the other tests use never parse the SQL, so none of them could see it.)
test("RecordRepository.remove gives the parameter inside jsonb_build_object a type", async () => {
  const calls = [];
  const repository = new RecordRepository({ transaction: async work => work({ query: async () => ({ rows: [] }) }), query: async (sql, params) => { calls.push({ sql, params }); return { rows: [{ record_id: "rec_1" }] }; } });
  assert.equal(await repository.remove({ tenantId: "t1", recordId: "rec_1", actorId: "u1" }), true);
  assert.match(calls[0].sql, /jsonb_build_object\('deletedBy',\s*\$3::text\)/);
  assert.deepEqual(calls[0].params, ["t1", "rec_1", "u1"]);
});

test("no query in nexus/ or foundation/ hands an untyped parameter straight to json(b)_build_object", () => {
  const offenders = [];
  const root = path.join(__dirname, "..", "..");
  const walk = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { if (entry.name !== "node_modules") walk(full); continue; }
      if (!/\.(js|sql)$/.test(entry.name)) continue;
      const source = fs.readFileSync(full, "utf8");
      for (const match of source.matchAll(/jsonb?_build_object\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g)) {
        // Arguments after the first are values: a bare $n there (no ::type) is what PostgreSQL cannot type.
        if (/,\s*\$\d+\s*(?:[,)]|$)/.test(match[1])) offenders.push(`${path.relative(root, full)}: ${match[0].slice(0, 90)}`);
      }
    }
  };
  for (const dir of ["nexus", "foundation"]) walk(path.join(root, dir));
  assert.deepEqual(offenders, []);
});
