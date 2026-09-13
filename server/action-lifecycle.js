"use strict";

// Unified action lifecycle for real, external, side-effecting provider calls
// (Twilio SMS/WhatsApp/call, real email, real calendar events). Additive only:
// this does not replace providerUtils.requireConfirmation or any of the
// existing audit/receipt systems -- it wraps a call site's existing execute
// step with idempotency protection, one unified ledger record, and genuine
// outcome verification (never a self-reported "verified" flag).
//
// The ledger is intentionally module-level, in-memory state -- NOT stored on
// the `db` object passed in. server.js's readDb()/writeDb() re-read the whole
// app state fresh from disk/Postgres on every single HTTP request and only
// persist it back at the end of that request, so a ledger scoped to `db`
// would never be visible to a second, concurrent (or even just sequential)
// request -- defeating the entire point of duplicate suppression. A ledger
// that only needs to catch retries/duplicates within a short window doesn't
// need cross-restart durability anyway; it needs to be shared by every
// request handled by this running process, which module-level state gives
// for free.

const crypto = require("crypto");

const LEDGER_CAP = 2000;
const COMPLETED_DEDUPE_MS = 5 * 60 * 1000;

let ledger = new Map(); // idempotencyKey -> entry
let insertionOrder = []; // FIFO of keys, for cap eviction

function stableStringify(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
  const keys = Object.keys(value).sort();
  return `{${keys.map(key => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(",")}}`;
}

function computeIdempotencyKey(provider, action, body = {}) {
  const { confirmed, confirmation, confirm, ...meaningful } = body || {};
  return crypto.createHash("sha256").update(`${provider}:${action}:${stableStringify(meaningful)}`).digest("hex");
}

// Kept accepting a `db` argument for call-site compatibility, but the ledger
// is not scoped to it -- see the module comment above. Returns newest-first,
// matching the order entries were historically exposed in.
function ensureNexusActionLedger(_db) {
  return Array.from(ledger.values()).reverse();
}

function resetActionLedgerForTests() {
  ledger = new Map();
  insertionOrder = [];
}

function ledgerEntryId() {
  return `NX-ACT-${Date.now()}-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;
}

function evictIfNeeded() {
  while (ledger.size > LEDGER_CAP && insertionOrder.length) {
    const oldestKey = insertionOrder.shift();
    ledger.delete(oldestKey);
  }
}

function resultSucceeded(result) {
  const body = result?.body || result || {};
  return body.ok === true && /completed|created|sent|synced|queued|ready/i.test(String(body.status || ""));
}

function attachLifecycleMetadata(result, entry) {
  const body = result?.body && typeof result.body === "object" ? result.body : result;
  if (body && typeof body === "object") {
    body.nexusLifecycleVerified = entry.verified;
    body.nexusLifecycleVerificationNote = entry.verificationNote;
  }
  return result;
}

// db must be the app's blob-style state object (the same `db` passed through
// executeNexusOpenAiNativeTool) -- accepted for signature compatibility with
// call sites, but see the module comment: the ledger itself is process-wide.
// execute() performs the real, unchanged provider-bridge call and must return
// the same { httpStatus, body } shape providerResponse() produces. verify(),
// when given, receives that same result and must return { verified, note }
// based on independently-checkable evidence (a real ID in the response, not
// a value the caller merely asserted) -- omitting it defaults honestly to
// verified: false rather than a fabricated true.
async function withActionLifecycle(_db, { provider, action, body = {}, execute, verify } = {}) {
  if (typeof execute !== "function") throw new Error("withActionLifecycle requires an execute() function.");
  const idempotencyKey = computeIdempotencyKey(provider, action, body);
  const now = Date.now();

  const existing = ledger.get(idempotencyKey);
  if (existing && existing.status === "completed" && (now - existing.createdAt) < COMPLETED_DEDUPE_MS) {
    return existing.result;
  }
  // A genuinely in-flight duplicate (same key, still pending) awaits the SAME
  // real execution instead of guessing with a timeout -- since the ledger is
  // now shared by every request in this process, the original's promise is
  // always reachable here, however long the real call actually takes.
  if (existing && existing.status === "pending" && existing.promise) {
    return existing.promise;
  }

  const entry = {
    id: ledgerEntryId(),
    provider,
    action,
    idempotencyKey,
    status: "pending",
    createdAt: now,
    verified: false,
    verificationNote: "",
    did: [],
    didNot: [],
    result: null,
    promise: null
  };
  if (!ledger.has(idempotencyKey)) insertionOrder.push(idempotencyKey);
  ledger.set(idempotencyKey, entry);
  evictIfNeeded();

  entry.promise = (async () => {
    let result;
    try {
      result = await execute();
    } catch (error) {
      entry.status = "failed";
      entry.didNot = [`Execution threw: ${error.message}`];
      throw error;
    }

    const succeeded = resultSucceeded(result);
    const resultBody = result?.body || result || {};
    entry.status = succeeded ? "completed" : String(resultBody.status || "failed");
    entry.did = succeeded ? [resultBody.message || `${provider} ${action} completed.`] : [];
    entry.didNot = succeeded ? [] : [resultBody.message || `${provider} ${action} did not complete.`];

    if (succeeded && typeof verify === "function") {
      try {
        const verification = await verify(result);
        entry.verified = Boolean(verification?.verified);
        entry.verificationNote = verification?.note || "";
      } catch (error) {
        entry.verified = false;
        entry.verificationNote = `Verification check failed: ${error.message}`;
      }
    } else if (succeeded) {
      entry.verified = false;
      entry.verificationNote = "No independent verification implemented for this action.";
    }

    attachLifecycleMetadata(result, entry);
    entry.result = result;
    return result;
  })();

  return entry.promise;
}

module.exports = { computeIdempotencyKey, withActionLifecycle, ensureNexusActionLedger, resetActionLedgerForTests };
