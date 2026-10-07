"use strict";

// The platform owner's activity record: who did what to which business, and when.
//
// It lives in the DEFAULT space's record (db.platformAudit), never inside a business, so a business's own Admin cannot read it and erasing a business does not erase the fact that it happened. Each entry
// holds only the time, the platform owner's email, the action, the business id and name, and a few counts or masked values ("facts"). Never a password, a one-time password, a full phone number, or
// anything a business holds. The newest entry is first; the list keeps the last MAX_ENTRIES.
const crypto = require("node:crypto");

const MAX_ENTRIES = 1000;
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 200;
const ACTIONS = new Set(["business.created", "business.settings_changed", "business.closed", "business.reopened", "business.erased", "business.erase_incomplete", "business.number_linked", "business.admin_password_reset"]);
// The only facts an entry may carry, and the kind of value each may hold. Anything else is dropped.
const NUMBER_FACTS = new Set(["people", "uploadsRemoved", "engineErasuresQueued", "engineErasuresFailed", "signInsEnded"]);
const TEXT_FACTS = new Set(["adminEmail", "phone"]);

const text = (value, max) => String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);

function cleanFacts(facts) {
  const clean = {};
  if (!facts || typeof facts !== "object") return clean;
  for (const key of NUMBER_FACTS) if (Number.isFinite(facts[key])) clean[key] = Math.max(0, Math.round(facts[key]));
  for (const key of TEXT_FACTS) if (typeof facts[key] === "string" && facts[key]) clean[key] = text(facts[key], 120);
  if (Array.isArray(facts.fields)) clean.fields = facts.fields.map(item => text(item, 40)).filter(Boolean).slice(0, 10);
  return clean;
}

// Adds one entry to the front of db.platformAudit and trims the list. Returns the entry. The caller saves the record.
function record(db, { by, action, businessId, businessName, facts } = {}) {
  if (!db || typeof db !== "object") return null;
  if (!Array.isArray(db.platformAudit)) db.platformAudit = [];
  const entry = {
    id: crypto.randomUUID(),
    at: new Date().toISOString(),
    by: text(by, 254).toLowerCase(),
    action: ACTIONS.has(action) ? action : text(action, 60),
    businessId: text(businessId, 40),
    businessName: text(businessName, 80),
    facts: cleanFacts(facts)
  };
  db.platformAudit.unshift(entry);
  if (db.platformAudit.length > MAX_ENTRIES) db.platformAudit.length = MAX_ENTRIES;
  return entry;
}

// The newest entries, optionally only those about one business. `limit` is a whole number from 1 to MAX_LIMIT (a missing, zero or wrong value means DEFAULT_LIMIT).
function list(db, { business = "", limit } = {}) {
  const all = Array.isArray(db?.platformAudit) ? db.platformAudit : [];
  const wanted = String(business ?? "").trim().toLowerCase();
  const asked = Number.parseInt(limit, 10);
  const size = Number.isFinite(asked) && asked >= 1 ? Math.min(asked, MAX_LIMIT) : DEFAULT_LIMIT;
  return all.filter(item => item && (!wanted || item.businessId === wanted)).slice(0, size);
}

module.exports = Object.freeze({ MAX_ENTRIES, DEFAULT_LIMIT, MAX_LIMIT, ACTIONS, record, list, cleanFacts });
