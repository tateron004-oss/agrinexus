"use strict";

// Which phone numbers may phone Kyro, and as whom. Until now this lived only in one Render setting (TWILIO_AUTHORIZED_CALLERS), so adding a farmer meant
// editing the dashboard and restarting the app. This keeps the same list in the database (db.phoneCallers) so the owner can add, change and remove a person's
// number from the admin panel, with nothing to redeploy. The Render setting still works too; the database list is checked first.
//
// A row is { id, phone, userId, email, label, createdAt, createdBy, updatedAt }. A number belongs to exactly one account. The number is the only thing a phone caller
// proves, so a row whose account no longer exists must give NO identity (the resolver fails closed); removeCallersForUser() is used when an account is erased.

const CAP = 500;
const LABEL_MAX = 60;

const rows = db => (Array.isArray(db?.phoneCallers) ? db.phoneCallers : []);
const clean = value => String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim();
const emailKey = value => String(value || "").trim().toLowerCase();

function findByPhone(db, phone) {
  return rows(db).find(row => row.phone === phone) || null;
}
function callersForUser(db, userId) {
  return rows(db).filter(row => row.userId === userId);
}

// -> { ok: true, caller, updated } | { ok: false, status, error }
function addOrUpdateCaller(db, { phone, email, label = "", actorEmail = "", now = new Date(), normalizePhone }) {
  if (typeof normalizePhone !== "function") throw new Error("addOrUpdateCaller needs the phone normalizer");
  const normalized = normalizePhone(phone);
  if (!normalized) return { ok: false, status: 400, error: "Enter the phone number with its country code, starting with +, for example +254712345678." };
  const address = emailKey(email);
  if (!address) return { ok: false, status: 400, error: "Enter the email of the account this number belongs to." };
  const account = (db.users || []).find(item => emailKey(item.email) === address);
  if (!account) return { ok: false, status: 404, error: "There is no account with that email. Create the account first, then add the number." };
  if (account.guest === true) return { ok: false, status: 400, error: "A guest session is not a saved account, so a phone number cannot be linked to it." };
  db.phoneCallers = rows(db);
  const existing = findByPhone(db, normalized);
  const stamp = now.toISOString();
  const text = clean(label).slice(0, LABEL_MAX);
  if (existing) {
    Object.assign(existing, { userId: account.id, email: emailKey(account.email), label: text, updatedAt: stamp });
    return { ok: true, caller: existing, updated: true };
  }
  if (db.phoneCallers.length >= CAP) return { ok: false, status: 400, error: `This list is full (${CAP} numbers). Remove one first.` };
  const caller = { id: `pc_${now.getTime().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, phone: normalized, userId: account.id, email: emailKey(account.email), label: text, createdAt: stamp, createdBy: emailKey(actorEmail), updatedAt: stamp };
  db.phoneCallers.unshift(caller);
  return { ok: true, caller, updated: false };
}

function removeCaller(db, id) {
  const before = rows(db);
  const target = before.find(row => row.id === id);
  if (!target) return null;
  db.phoneCallers = before.filter(row => row.id !== id);
  return target;
}

// For account erasure. Returns how many were removed.
function removeCallersForUser(db, userId) {
  if (!userId) return 0;
  const before = rows(db);
  const kept = before.filter(row => row.userId !== userId);
  if (kept.length !== before.length) db.phoneCallers = kept;
  return before.length - kept.length;
}

// What the admin panel shows: each number with the name and role of the account it belongs to ("account missing" when it was deleted, which means it grants nothing).
function adminView(db) {
  const users = db.users || [];
  return rows(db).map(row => {
    const account = users.find(item => item.id === row.userId);
    return { id: row.id, phone: row.phone, email: row.email, label: row.label || "", name: account?.name || "", role: account?.role || "", accountMissing: !account, createdAt: row.createdAt, createdBy: row.createdBy || "" };
  });
}

module.exports = Object.freeze({ addOrUpdateCaller, removeCaller, removeCallersForUser, findByPhone, callersForUser, adminView, CAP, LABEL_MAX });
