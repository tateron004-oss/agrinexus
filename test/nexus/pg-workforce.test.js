const test = require("node:test");
const assert = require("node:assert/strict");
const pgWorkforce = require("../../server/pg-workforce.js");
const pgHealthIntakes = require("../../server/pg-health-intakes.js");

function stubPool(handlers) {
  const calls = [];
  return {
    calls,
    query: async (sql, params = []) => {
      calls.push({ sql, params });
      for (const [pattern, respond] of handlers) {
        if (pattern.test(sql)) return respond(params, calls);
      }
      throw new Error(`stubPool: no handler for query: ${sql}`);
    }
  };
}

test("isRealUserId only accepts a genuine UUID, not a blob demo id", () => {
  assert.equal(pgWorkforce.isRealUserId("cd98df4e-009b-4eb0-8e9f-e3d5ce053bf6"), true);
  assert.equal(pgWorkforce.isRealUserId("u_standard"), false);
  assert.equal(pgWorkforce.isRealUserId(""), false);
  assert.equal(pgWorkforce.isRealUserId(null), false);
  assert.equal(pgWorkforce.isRealUserId(undefined), false);
});

test("createWorkforceRole requires title and level", async () => {
  const pool = stubPool([]);
  await assert.rejects(() => pgWorkforce.createWorkforceRole(pool, { level: "Level 1" }), /title and level are required/);
  await assert.rejects(() => pgWorkforce.createWorkforceRole(pool, { title: "Farm Lead" }), /title and level are required/);
  assert.equal(pool.calls.length, 0);
});

test("createWorkforceRole maps a blob country slug to the real seeded country id, and nulls an unmapped one", async () => {
  const pool = stubPool([
    [/^insert into workforce_roles/, params => {
      assert.equal(params[0], pgHealthIntakes.DEMO_TENANT_ID);
      assert.equal(params[1], "Farm Lead");
      assert.equal(params[2], "Level 2");
      assert.equal(params[3], pgHealthIntakes.BLOB_COUNTRY_TO_PG_ID.kenya);
      return { rows: [{ id: "role-1" }] };
    }]
  ]);
  await pgWorkforce.createWorkforceRole(pool, { title: "Farm Lead", level: "Level 2", countryId: "kenya" });

  const pool2 = stubPool([
    [/^insert into workforce_roles/, params => {
      assert.equal(params[3], null, "an unmapped/blank country must be nulled, not fail the insert -- country_id is nullable");
      return { rows: [{ id: "role-2" }] };
    }]
  ]);
  await pgWorkforce.createWorkforceRole(pool2, { title: "Farm Lead", level: "Level 1", countryId: "" });
});

test("findOrCreateCandidateProfile refuses a non-UUID (blob demo) user id", async () => {
  const pool = stubPool([]);
  await assert.rejects(
    () => pgWorkforce.findOrCreateCandidateProfile(pool, { userId: "u_standard" }),
    /a real Postgres user id is required/
  );
  assert.equal(pool.calls.length, 0);
});

test("findOrCreateCandidateProfile upserts on the real user id", async () => {
  const realId = "cd98df4e-009b-4eb0-8e9f-e3d5ce053bf6";
  const pool = stubPool([
    [/^insert into candidate_profiles/, params => {
      assert.equal(params[0], realId);
      return { rows: [{ id: "candidate-1", user_id: realId }] };
    }]
  ]);
  const created = await pgWorkforce.findOrCreateCandidateProfile(pool, { userId: realId });
  assert.equal(created.id, "candidate-1");
  assert.match(pool.calls[0].sql, /on conflict \(user_id\) do update/);
});

test("recordJobApplication requires both real ids", async () => {
  const pool = stubPool([]);
  await assert.rejects(() => pgWorkforce.recordJobApplication(pool, { workforceRoleId: "role-1" }), /candidateProfileId and workforceRoleId are required/);
  await assert.rejects(() => pgWorkforce.recordJobApplication(pool, { candidateProfileId: "candidate-1" }), /candidateProfileId and workforceRoleId are required/);
});

test("recordJobApplication inserts a real linked row", async () => {
  const pool = stubPool([
    [/^insert into job_applications/, params => {
      assert.equal(params[0], "candidate-1");
      assert.equal(params[1], "role-1");
      assert.equal(params[2], "submitted");
      return { rows: [{ id: "application-1" }] };
    }]
  ]);
  const created = await pgWorkforce.recordJobApplication(pool, { candidateProfileId: "candidate-1", workforceRoleId: "role-1" });
  assert.equal(created.id, "application-1");
});
