"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { WeatherAlertSettingsRepository } = require("../../nexus/alerts/settings.js");
const { BriefSettingsRepository } = require("../../nexus/brief/settings.js");
const { WeeklySummarySettingsRepository } = require("../../nexus/brief/weekly.js");
const { CheckinSettingsRepository } = require("../../nexus/companion/checkin-store.js");

// Found live (export/compliance & settings audit, 2026-09-28): every one of
// these repositories' set() methods did "cancel the old active row, then
// insert a new active row" as two separate, non-transactional queries, with
// no unique constraint on (tenant_id, owner_id, job_type) for state='active'.
// A double-submit (a network retry, a double-tap, two devices) could
// interleave two set() calls so each cancelled a different/stale row and
// both inserts landed 'active' -- leaving TWO active schedules for the same
// person. listActive() (used by the worker's daily sweep) has no per-user
// dedup, so this silently sent two morning briefs / weather alerts / weekly
// summaries / check-in prompts every day from then on, with nothing in the
// logs or the UI hinting anything was wrong.

// A fake db whose advisory lock genuinely serializes concurrent transactions
// (a held lock only releases when its OWN transaction's work finishes,
// matching real Postgres blocking behavior) and whose nexus_schedules table
// is a real in-memory array evaluated against the real SQL each repository
// issues -- not just a canned response queue -- so this proves the real
// repository method closes the race, not a mock of it.
function lockingSchedulesDb() {
  const rows = [];
  const locks = new Map();
  const db = {
    rows,
    async transaction(fn) {
      let release = null;
      const trx = Object.create(db);
      trx.query = async (sql, params) => {
        if (/pg_advisory_xact_lock/.test(sql)) {
          const key = params[0];
          const ahead = locks.get(key) || Promise.resolve();
          let myRelease; const held = new Promise(resolve => { myRelease = resolve; });
          locks.set(key, ahead.then(() => held));
          await ahead;
          release = myRelease;
          return { rows: [] };
        }
        return db.query(sql, params);
      };
      try { return await fn(trx); } finally { if (release) release(); }
    },
    async query(sql, params) {
      if (/pg_advisory_xact_lock/.test(sql)) return { rows: [] };
      if (/update nexus_schedules set state='cancelled'/.test(sql)) {
        const [tenantId, ownerId, jobType] = params;
        const matched = rows.filter(row => row.tenant_id === tenantId && row.owner_id === ownerId && row.job_type === jobType && row.state === "active");
        matched.forEach(row => { row.state = "cancelled"; });
        return { rows: matched.map(row => ({ schedule_id: row.schedule_id })) };
      }
      if (/insert into nexus_schedules/.test(sql)) {
        const [scheduleId, tenantId, ownerId, jobType, payload, cadence, timezone, nextRunAt] = params;
        rows.push({ schedule_id: scheduleId, tenant_id: tenantId, owner_id: ownerId, job_type: jobType, payload, cadence, timezone, next_run_at: nextRunAt, state: "active" });
        return { rows: [{ schedule_id: scheduleId }] };
      }
      if (/select schedule_id,tenant_id,owner_id,payload,timezone,created_at from nexus_schedules/.test(sql)) {
        const [jobType] = params;
        return { rows: rows.filter(row => row.job_type === jobType && row.state === "active") };
      }
      if (/select schedule_id,payload,timezone from nexus_schedules/.test(sql)) {
        const [tenantId, ownerId, jobType] = params;
        return { rows: rows.filter(row => row.tenant_id === tenantId && row.owner_id === ownerId && row.job_type === jobType && row.state === "active") };
      }
      throw new Error(`unexpected SQL: ${sql.slice(0, 120)}`);
    }
  };
  return db;
}

test("two concurrent weather-alert settings requests for the same person leave exactly one active schedule, not two", async () => {
  const repo = new WeatherAlertSettingsRepository(lockingSchedulesDb());
  const [a, b] = await Promise.all([
    repo.set({ tenantId: "t1", userId: "u1", timeZone: "Africa/Nairobi" }),
    repo.set({ tenantId: "t1", userId: "u1", timeZone: "Africa/Kampala" })
  ]);
  assert.ok(a.scheduleId && b.scheduleId, "both requests must still succeed");
  const active = (await repo.listActive()).filter(row => row.userId === "u1");
  assert.equal(active.length, 1, "exactly one weather-alert schedule must remain active, or the worker will send duplicate alerts every day");
});

test("two concurrent morning-brief settings requests for the same person leave exactly one active schedule, not two", async () => {
  const repo = new BriefSettingsRepository(lockingSchedulesDb());
  await Promise.all([
    repo.set({ tenantId: "t1", userId: "u1", timeOfDay: "07:00", timeZone: "Africa/Nairobi" }),
    repo.set({ tenantId: "t1", userId: "u1", timeOfDay: "08:00", timeZone: "Africa/Nairobi" })
  ]);
  const active = (await repo.listActive()).filter(row => row.userId === "u1");
  assert.equal(active.length, 1, "exactly one morning-brief schedule must remain active, or the worker will send duplicate briefs every day");
});

test("two concurrent weekly-summary settings requests for the same person leave exactly one active schedule, not two", async () => {
  const repo = new WeeklySummarySettingsRepository(lockingSchedulesDb());
  await Promise.all([
    repo.set({ tenantId: "t1", userId: "u1", dayOfWeek: 0, timeOfDay: "18:00", timeZone: "Africa/Nairobi" }),
    repo.set({ tenantId: "t1", userId: "u1", dayOfWeek: 3, timeOfDay: "09:00", timeZone: "Africa/Nairobi" })
  ]);
  const active = (await repo.listActive()).filter(row => row.userId === "u1");
  assert.equal(active.length, 1, "exactly one weekly-summary schedule must remain active, or the worker will send duplicate summaries every week");
});

test("two concurrent daily-check-in settings requests for the same person leave exactly one active schedule, not two", async () => {
  const repo = new CheckinSettingsRepository(lockingSchedulesDb());
  await Promise.all([
    repo.set({ tenantId: "t1", userId: "u1", timeOfDay: "20:00", timeZone: "Africa/Nairobi" }),
    repo.set({ tenantId: "t1", userId: "u1", timeOfDay: "21:00", timeZone: "Africa/Nairobi" })
  ]);
  const active = (await repo.listActive()).filter(row => row.userId === "u1");
  assert.equal(active.length, 1, "exactly one check-in schedule must remain active, or the worker will send duplicate check-in prompts every day");
});
