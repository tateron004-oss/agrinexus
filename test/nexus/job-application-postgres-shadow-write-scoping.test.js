"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found live (real-estate/workforce sibling sweep): shadowWriteJobApplicationToPostgres tracked the
// real Postgres job_applications row id on a single SCALAR field on the applicant record
// (applicant.pgJobApplicationId), with nothing per-job about it. upsertJobApplication()'s UPDATE
// branch (server/pg-workforce.js, already tested in pg-workforce.test.js) only ever writes `status`,
// never `workforce_role_id` -- so the SAME applicant applying to a SECOND, different job reused the
// first job's Postgres row: its status was silently overwritten with the new job's status while
// workforce_role_id stayed pinned to the first job, and no separate row was ever created for the
// second job. Fixed by keying the tracked id by jobOpportunityId (applicant.pgJobApplicationIds), so
// each job an applicant applies to gets and keeps its own real Postgres row.
//
// This exercises the real server.js function via extraction into a sandbox with its external
// dependencies (Postgres access, the persisted-record patcher) stubbed -- a full end-to-end test would
// need a real Postgres connection, which this dev environment's schema does not currently support.
const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function sliceFunction(name) {
  const start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in server.js`);
  const candidates = ["\nfunction ", "\nconst ", "\nasync function "]
    .map(marker => source.indexOf(marker, start + 10))
    .filter(index => index > start);
  const end = Math.min(...candidates);
  assert.ok(Number.isFinite(end) && end > start, `could not find the end of ${name} in server.js`);
  return source.slice(start, end);
}

function loadSandbox({ upsertResults } = {}) {
  const upsertCalls = [];
  const patched = [];
  const sandbox = {
    console,
    Promise,
    setTimeout,
    usingPostgresWorkforce: () => true,
    getPgPool: () => "pool-stub",
    waitForPersistedField: async () => "unused-role-id",
    resolveRealPgUserByEmail: async () => ({ id: "pg-user-1" }),
    recordServerError: () => {},
    pgWorkforce: {
      findOrCreateCandidateProfile: async () => ({ id: "candidate-1" }),
      upsertJobApplication: async (pool, { id, workforceRoleId, status }) => {
        upsertCalls.push({ id, workforceRoleId, status });
        const key = `${workforceRoleId}:${upsertCalls.length}`;
        const result = upsertResults ? upsertResults(id, workforceRoleId, status) : { id: id || `row-${key}` };
        return result;
      }
    },
    patchPersistedRecord: async (collection, matchFn, mutateFn) => {
      patched.push(collection);
      const record = sandbox.__applicantRecords.find(matchFn);
      if (record) mutateFn(record);
    },
    __applicantRecords: []
  };
  vm.createContext(sandbox);
  vm.runInContext(`${sliceFunction("shadowWriteJobApplicationToPostgres")}\nthis.fn = shadowWriteJobApplicationToPostgres;`, sandbox);
  return { sandbox, upsertCalls, patched };
}

// The function is fire-and-forget (a Promise.resolve().then(...) chain that is never returned or
// awaited by real callers) -- every stub above resolves immediately with no real I/O, so a handful of
// microtask ticks is enough for the whole chain to settle deterministically.
function flush() {
  return new Promise(resolve => setTimeout(resolve, 20));
}

test("applying to two different jobs gets two separate, independently-tracked Postgres application ids, not one shared/reused row", async () => {
  const { sandbox, upsertCalls } = loadSandbox();
  const applicant = { applicantId: "applicant-1" };
  sandbox.__applicantRecords.push(applicant);

  const jobA = { jobOpportunityId: "job-A", pgWorkforceRoleId: "role-A" };
  const jobB = { jobOpportunityId: "job-B", pgWorkforceRoleId: "role-B" };

  sandbox.fn(jobA, applicant, "user@example.com", "submitted");
  await flush();
  assert.equal(upsertCalls[0].id, null, "the first application to job A must insert a fresh row, not reuse anything");
  assert.equal(upsertCalls[0].workforceRoleId, "role-A");
  assert.ok(applicant.pgJobApplicationIds?.["job-A"], "job A's real row id must be tracked");
  const jobARowId = applicant.pgJobApplicationIds["job-A"];

  sandbox.fn(jobB, applicant, "user@example.com", "interviewing");
  await flush();
  assert.equal(upsertCalls[1].id, null, "applying to a DIFFERENT job must also insert a fresh row -- it must never reuse job A's tracked id");
  assert.equal(upsertCalls[1].workforceRoleId, "role-B");
  assert.ok(applicant.pgJobApplicationIds["job-B"], "job B's real row id must be tracked separately");
  assert.notEqual(applicant.pgJobApplicationIds["job-B"], jobARowId, "job A and job B must never end up sharing the same tracked Postgres row id");
  assert.equal(applicant.pgJobApplicationIds["job-A"], jobARowId, "job A's own tracked id must be undisturbed by tracking job B");

  // A second status update on the ORIGINAL job must still reuse that job's own row, not create a third one.
  sandbox.fn(jobA, applicant, "user@example.com", "offer-extended");
  await flush();
  assert.equal(upsertCalls[2].id, jobARowId, "a repeat status update on the SAME job must reuse that job's own tracked row");
  assert.equal(upsertCalls[2].workforceRoleId, "role-A");
});
