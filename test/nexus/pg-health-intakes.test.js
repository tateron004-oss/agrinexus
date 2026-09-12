const test = require("node:test");
const assert = require("node:assert/strict");
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

test("pgCountryId maps the four seeded blob countries and returns null for anything else", () => {
  assert.equal(pgHealthIntakes.pgCountryId("nigeria"), pgHealthIntakes.BLOB_COUNTRY_TO_PG_ID.nigeria);
  assert.equal(pgHealthIntakes.pgCountryId("KENYA"), pgHealthIntakes.BLOB_COUNTRY_TO_PG_ID.kenya);
  assert.equal(pgHealthIntakes.pgCountryId("ghana"), null);
  assert.equal(pgHealthIntakes.pgCountryId("tanzania"), null);
});

test("createIntake rejects (not silently resolves null) for an unmapped country, so the caller's shadow-write logging actually fires", async () => {
  const pool = stubPool([]);
  await assert.rejects(
    () => pgHealthIntakes.createIntake(pool, { countryId: "ghana", patientRef: "AN-PAT-GH-VOICE-abc123", needSummary: "x", riskLevel: "Routine" }),
    /no Postgres country mapping for "ghana"/
  );
  assert.equal(pool.calls.length, 0, "must not attempt a query for an unmapped country");
});

test("createIntake upserts on (tenant_id, patient_ref) for a mapped country", async () => {
  const pool = stubPool([
    [/^insert into patient_intakes/, params => {
      assert.equal(params[1], pgHealthIntakes.BLOB_COUNTRY_TO_PG_ID.nigeria);
      assert.equal(params[2], "AN-PAT-NG-VOICE-abc123");
      return { rows: [{ id: "intake-1", patient_ref: params[2] }] };
    }]
  ]);
  const created = await pgHealthIntakes.createIntake(pool, { countryId: "nigeria", patientRef: "AN-PAT-NG-VOICE-abc123", needSummary: "Voice intake", riskLevel: "Routine" });
  assert.equal(created.patient_ref, "AN-PAT-NG-VOICE-abc123");
  assert.match(pool.calls[0].sql, /on conflict \(tenant_id, patient_ref\) do update/);
});
