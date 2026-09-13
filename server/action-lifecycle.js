"use strict";

// Unified action lifecycle for real, external, side-effecting provider calls
// (Twilio SMS/WhatsApp/call, real email, real calendar events). Additive only:
// this does not replace providerUtils.requireConfirmation or any of the
// existing audit/receipt systems -- it wraps a call site's existing execute
// step with idempotency protection, one unified ledger record, and genuine
// outcome verification (never a self-reported "verified" flag).

const crypto = require("crypto");

const LEDGER_CAP = 2000;
const COMPLETED_DEDUPE_MS = 5 * 60 * 1000;
const PENDING_TIMEOUT_MS = 2 * 60 * 1000;

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

function ensureNexusActionLedger(db) {
  if (!db.nexusActionLedger || !Array.isArray(db.nexusActionLedger)) db.nexusActionLedger = [];
  return db.nexusActionLedger;
}

function ledgerEntryId() {
  return `NX-ACT-${Date.now()}-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;
}

function trimLedger(db) {
  const ledger = ensureNexusActionLedger(db);
  if (ledger.length > LEDGER_CAP) db.nexusActionLedger = ledger.slice(0, LEDGER_CAP);
}

function duplicateInFlightResponse(provider, action, idempotencyKey) {
  return {
    httpStatus: 202,
    body: {
      ok: false,
      provider,
      action,
      status: "duplicate_suppressed",
      requiresConfirmation: false,
      missingConfig: [],
      disabled: false,
      message: `A matching ${provider} ${action} request is already in progress; this duplicate was not executed, to avoid a double real-world action.`,
      data: { idempotencyKey }
    }
  };
}

function resultSucceeded(result) {
  const body = result?.body || result || {};
  return body.ok === true && /completed|created|sent|synced|queued/i.test(String(body.status || ""));
}

// db must be the app's blob-style state object (the same `db` passed through
// executeNexusOpenAiNativeTool), since the ledger lives at db.nexusActionLedger.
// execute() performs the real, unchanged provider-bridge call and must return
// the same { httpStatus, body } shape providerResponse() produces. verify(),
// when given, receives that same result and must return { verified, note }
// based on independently-checkable evidence (a real ID in the response, not
// a value the caller merely asserted) -- omitting it defaults honestly to
// verified: false rather than a fabricated true.
async function withActionLifecycle(db, { provider, action, body = {}, execute, verify } = {}) {
  if (typeof execute !== "function") throw new Error("withActionLifecycle requires an execute() function.");
  const ledger = ensureNexusActionLedger(db);
  const idempotencyKey = computeIdempotencyKey(provider, action, body);
  const now = Date.now();

  const completedMatch = ledger.find(entry => entry.idempotencyKey === idempotencyKey
    && entry.status === "completed"
    && (now - new Date(entry.createdAt).getTime()) < COMPLETED_DEDUPE_MS);
  if (completedMatch) return completedMatch.result;

  const pendingMatch = ledger.find(entry => entry.idempotencyKey === idempotencyKey
    && entry.status === "pending"
    && (now - new Date(entry.createdAt).getTime()) < PENDING_TIMEOUT_MS);
  if (pendingMatch) return duplicateInFlightResponse(provider, action, idempotencyKey);

  const entry = {
    id: ledgerEntryId(),
    provider,
    action,
    idempotencyKey,
    status: "pending",
    createdAt: new Date().toISOString(),
    verified: false,
    verificationNote: "",
    did: [],
    didNot: [],
    result: null
  };
  ledger.unshift(entry);

  let result;
  try {
    result = await execute();
  } catch (error) {
    entry.status = "failed";
    entry.didNot = [`Execution threw: ${error.message}`];
    trimLedger(db);
    throw error;
  }

  const succeeded = resultSucceeded(result);
  const resultBody = result?.body || result || {};
  entry.status = succeeded ? "completed" : String(resultBody.status || "failed");
  entry.result = result;
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

  trimLedger(db);
  return result;
}

module.exports = { computeIdempotencyKey, withActionLifecycle, ensureNexusActionLedger };
