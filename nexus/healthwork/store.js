"use strict";

const { FarmRecordRepository } = require("../farmwork/store.js");

// The health worker's records: patients, visits, immunisations, pregnancies, follow-ups, supplies, referrals. The same records engine as the
// farm toolkit, kept apart: its own purposes ("health_records", "health_session"), the "health" sensitivity level that the memory layer keeps
// out of ordinary recall, no searchable text (a patient's name is never in a column anything else searches), and never public.
class HealthRecordRepository extends FarmRecordRepository {
  constructor(db) { super(db, { purpose: "health_records", sessionPurpose: "health_session", sensitivity: "health", keepSearchableText: false }); }
}

module.exports = Object.freeze({ HealthRecordRepository });
