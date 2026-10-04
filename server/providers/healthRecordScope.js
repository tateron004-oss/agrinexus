"use strict";

// The medical bridge providers (chronic-disease, remote monitoring, activity/fitness, telehealth, pharmacy, mobile clinics, patient support,
// medical support) keep what a person says or enters -- blood-pressure and glucose readings, intake notes, saved clinics -- in plain
// arrays on the ONE shared db.profile, with no owner on any record. So every signed-in person's "show my readings" returned everyone's, the
// spoken "what is my blood pressure trend" read everyone's, a cap of 200 meant one person's readings pushed another's out, and neither
// account export nor account erase could find a person's own records.
//
// scopeHealthDb(db, ownerId) gives the providers a view of db in which those arrays contain ONLY that person's records. Reads see only the
// owner's records; writes are stamped with the owner and merged back, leaving everyone else's records (and older records that have no owner)
// untouched. The providers themselves need no changes: they keep calling ensureProfileStore()/saveRecord() on the db they are handed.

const HEALTH_BRIDGE_KEYS = Object.freeze([
  "nexusChronicDiseaseIntakes", "nexusChronicDiseaseReadings",
  "nexusMedicalSupportIntakes",
  "nexusMobileClinicIntakes", "nexusSavedMobileClinics",
  "nexusPatientSupportIntakes", "nexusSavedPatientSupportResources",
  "nexusPharmacyIntakes", "nexusSavedPharmacies",
  "nexusRpmIntakes", "nexusRpmDeviceReadings",
  "nexusRtmIntakes", "nexusRtmActivityEntries", "nexusFitnessTrainingPlans",
  "nexusTelehealthBridgeIntakes", "nexusTelehealthBridgeSessions"
]);
const KEYS = new Set(HEALTH_BRIDGE_KEYS);

const isOwnedBy = (record, owner) => Boolean(record && typeof record === "object" && record.ownerId === owner);

function scopeHealthDb(db, ownerId) {
  const owner = String(ownerId ?? "").trim();
  if (!owner) throw new Error("scopeHealthDb requires an owner id");
  if (!db || typeof db !== "object") throw new Error("scopeHealthDb requires a db object");
  // The providers do `db.profile = db.profile || {}`, which would hand this view's own profile proxy back to the real db. Remember our views so
  // that assignment is recognised and ignored: the real db must never end up holding a per-person view.
  const ownViews = new WeakSet();
  const profileView = () => {
    db.profile = db.profile && typeof db.profile === "object" ? db.profile : {};
    const view = new Proxy(db.profile, {
      get(profile, key) {
        if (typeof key === "string" && KEYS.has(key)) {
          return (Array.isArray(profile[key]) ? profile[key] : []).filter(record => isOwnedBy(record, owner));
        }
        return Reflect.get(profile, key);
      },
      set(profile, key, value) {
        if (typeof key === "string" && KEYS.has(key)) {
          const everyone = Array.isArray(profile[key]) ? profile[key] : [];
          const others = everyone.filter(record => !isOwnedBy(record, owner));
          const mine = (Array.isArray(value) ? value : []).map(record => {
            if (record && typeof record === "object" && !record.ownerId) record.ownerId = owner;
            return record;
          }).filter(record => isOwnedBy(record, owner));
          profile[key] = [...mine, ...others];
          return true;
        }
        profile[key] = value;
        return true;
      }
    });
    ownViews.add(view);
    return view;
  };
  return new Proxy(db, {
    get(target, key) {
      if (key === "profile") return profileView();
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      if (key === "profile" && ownViews.has(value)) return true;
      target[key] = value;
      return true;
    }
  });
}

// What a person has saved through these providers, for account export: { storeKey: [records] } with empty stores left out.
function collectOwnedHealthBridgeRecords(db, ownerId) {
  const owner = String(ownerId ?? "").trim();
  const result = {};
  if (!owner || !db?.profile) return result;
  for (const key of HEALTH_BRIDGE_KEYS) {
    const mine = (Array.isArray(db.profile[key]) ? db.profile[key] : []).filter(record => isOwnedBy(record, owner));
    if (mine.length) result[key] = mine;
  }
  return result;
}

// Removes a person's own records from every one of these stores, for account erasure. Returns how many were removed.
function eraseOwnedHealthBridgeRecords(db, ownerId) {
  const owner = String(ownerId ?? "").trim();
  let removed = 0;
  if (!owner || !db?.profile) return removed;
  for (const key of HEALTH_BRIDGE_KEYS) {
    if (!Array.isArray(db.profile[key])) continue;
    const kept = db.profile[key].filter(record => !isOwnedBy(record, owner));
    removed += db.profile[key].length - kept.length;
    db.profile[key] = kept;
  }
  return removed;
}

module.exports = Object.freeze({ HEALTH_BRIDGE_KEYS, scopeHealthDb, collectOwnedHealthBridgeRecords, eraseOwnedHealthBridgeRecords });
