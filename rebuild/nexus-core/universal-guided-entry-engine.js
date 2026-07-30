"use strict";

const { getProcessSchema, normalizeProcessId } = require("./guided-entry-schemas");

const STORE_KEY = "nexus.guided-entry.drafts.v1";
const LEGACY_STORE_KEY = "nexus.clean.voice-form-drafts.v1";

function clean(value) {
  return String(value || "").replace(/[“”]/g, "\"").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
}

function safeId(value, fallback) {
  return clean(value || fallback).toLowerCase().replace(/[^a-z0-9._:-]+/g, "-").replace(/^-|-$/g, "");
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

class GuidedEntryStore {
  constructor(storage) {
    this.storage = storage;
  }

  readAll() {
    try {
      return JSON.parse(this.storage.getItem(STORE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  writeAll(records) {
    this.storage.setItem(STORE_KEY, JSON.stringify(records));
  }

  read(identity) {
    return this.readAll()[identity.key] || this.readLegacy(identity);
  }

  readLegacy(identity) {
    try {
      const legacy = JSON.parse(this.storage.getItem(LEGACY_STORE_KEY) || "{}")[identity.processId];
      if (!legacy) return null;
      return {
        identity,
        values: legacy.values || {},
        version: 1,
        history: [],
        savedAt: legacy.savedAt || new Date().toISOString(),
        migratedFrom: LEGACY_STORE_KEY
      };
    } catch {
      return null;
    }
  }

  save(identity, values, transaction) {
    const records = this.readAll();
    const previous = records[identity.key];
    const version = Number(previous?.version || 0) + 1;
    const history = [...(previous?.history || [])];
    if (previous) history.push({ version: previous.version, values: previous.values, savedAt: previous.savedAt });
    records[identity.key] = {
      identity,
      values: deepClone(values),
      version,
      history: history.slice(-20),
      transactionId: transaction?.id || null,
      savedAt: new Date().toISOString()
    };
    this.writeAll(records);
    return records[identity.key];
  }
}

class NexusUniversalGuidedEntryEngine {
  constructor({
    fields,
    storage,
    context,
    onReceipt = () => {},
    now = () => new Date().toISOString(),
    idFactory = () => `entry-${Date.now()}-${Math.random().toString(16).slice(2)}`
  } = {}) {
    this.fields = fields || (() => []);
    this.storage = new GuidedEntryStore(storage);
    this.context = context || (() => ({ processId: "current-form" }));
    this.onReceipt = onReceipt;
    this.now = now;
    this.idFactory = idFactory;
    this.pendingConfirmation = null;
    this.undoStack = [];
    this.activeIdentityKey = null;
  }

  resolveContext() {
    const supplied = this.context() || {};
    const processId = normalizeProcessId(supplied.processId || supplied.scope);
    const schema = getProcessSchema(processId, this.fields());
    const identity = Object.freeze({
      userId: safeId(supplied.userId, "signed-in-user"),
      processId,
      documentId: safeId(supplied.documentId, "active-document"),
      schemaVersion: Number(supplied.schemaVersion || schema.version)
    });
    return Object.freeze({ ...identity, key: `${identity.userId}::${identity.processId}::${identity.documentId}::v${identity.schemaVersion}`, schema });
  }

  receipt(type, identity, detail = {}) {
    const receipt = Object.freeze({
      schema: "nexus.guided-entry.receipt.v1",
      type,
      detail: Object.freeze({
        userId: identity.userId,
        processId: identity.processId,
        documentId: identity.documentId,
        schemaVersion: identity.schemaVersion,
        scope: identity.processId,
        ...detail
      }),
      at: this.now()
    });
    this.onReceipt(receipt);
    return receipt;
  }

  activate(identity) {
    if (this.activeIdentityKey && this.activeIdentityKey !== identity.key) {
      this.pendingConfirmation = null;
      this.undoStack = [];
      this.receipt("guided-entry.context-switched", identity, { previousIdentityKey: this.activeIdentityKey });
    }
    this.activeIdentityKey = identity.key;
  }

  matchField(spokenName, fields, schema) {
    const wanted = clean(spokenName).toLowerCase().replace(/[?.!]+$/g, "");
    const candidates = fields.map((field) => {
      const definition = schema.fields.find((item) => item.key === field.key)
        || schema.fields.find((item) => clean(field.label).toLowerCase().includes(clean(item.key).toLowerCase()));
      const aliases = [field.key, field.label, ...(definition?.aliases || [])].map((item) => clean(item).toLowerCase());
      const score = Math.max(...aliases.map((alias) => {
        if (!alias) return 0;
        if (wanted === alias) return 100;
        if (wanted.includes(alias) || alias.includes(wanted)) return Math.min(alias.length, wanted.length);
        return 0;
      }));
      return { field, score };
    }).filter((candidate) => candidate.score > 0).sort((a, b) => b.score - a.score);
    if (!candidates.length || (candidates[1] && candidates[0].score === candidates[1].score)) return null;
    return candidates[0].field;
  }

  snapshot(fields) {
    return Object.fromEntries(fields.map((field) => [field.key, clean(field.get())]));
  }

  updateField(identity, field, value, append, action) {
    const previousValue = clean(field.get());
    const transaction = Object.freeze({
      id: this.idFactory(),
      identityKey: identity.key,
      field: field.key,
      previousValue,
      proposedValue: clean(value),
      action,
      at: this.now()
    });
    field.set(transaction.proposedValue, append);
    const committedValue = clean(field.get());
    this.undoStack.push({ ...transaction, committedValue });
    this.receipt(action === "correct" ? "voice-form.corrected" : "voice-form.updated", identity, {
      transactionId: transaction.id,
      field: field.key,
      label: field.label,
      previousValue,
      value: committedValue,
      visiblySynchronized: true
    });
    return { handled: true, action, field: field.key, transactionId: transaction.id };
  }

  handle(command) {
    const spoken = clean(command);
    const lower = spoken.toLowerCase();
    const fields = this.fields();
    if (!spoken || !fields.length) return { handled: false };
    const identity = this.resolveContext();
    this.activate(identity);

    if (/\b(undo|revert)\b(?:\s+the)?(?:\s+last)?(?:\s+change)?\b/.test(lower)) {
      const transaction = [...this.undoStack].reverse().find((item) => item.identityKey === identity.key);
      if (!transaction) return { handled: false };
      const field = fields.find((item) => item.key === transaction.field);
      if (!field) return { handled: false };
      field.set(transaction.previousValue, false);
      this.undoStack.splice(this.undoStack.lastIndexOf(transaction), 1);
      this.receipt("guided-entry.undone", identity, { transactionId: transaction.id, field: field.key, value: transaction.previousValue });
      return { handled: true, action: "undo", field: field.key };
    }

    if (/\b(read|review|repeat)\b.*\b(form|information|details|resume|résumé|intake|entries|listing|lesson|assessment|back)\b/.test(lower)) {
      const populated = fields.filter((field) => clean(field.get()));
      const readback = populated.length
        ? populated.map((field) => `${field.label}: ${clean(field.get())}`).join(". ")
        : "The current process does not contain any entered information.";
      this.receipt("voice-form.readback", identity, { readback, fieldCount: populated.length });
      return { handled: true, action: "readback", readback };
    }

    if (/\b(save|store|keep)\b.*\b(draft|form|resume|résumé|intake|changes|information|listing|lesson|assessment)\b/.test(lower)) {
      const transaction = { id: this.idFactory() };
      const record = this.storage.save(identity, this.snapshot(fields), transaction);
      this.receipt("voice-form.saved", identity, { transactionId: transaction.id, fieldCount: fields.length, draftVersion: record.version });
      return { handled: true, action: "save", fieldCount: fields.length, draftVersion: record.version };
    }

    if (/\b(reopen|restore|load|continue)\b.*\b(draft|form|resume|résumé|intake|listing|lesson|assessment|process)\b/.test(lower)) {
      const draft = this.storage.read(identity);
      if (!draft || draft.identity && draft.identity.key && draft.identity.key !== identity.key) return { handled: false };
      let restored = 0;
      fields.forEach((field) => {
        if (!Object.prototype.hasOwnProperty.call(draft.values || {}, field.key)) return;
        field.set(draft.values[field.key], false);
        restored += 1;
      });
      this.receipt("voice-form.reopened", identity, { fieldCount: restored, draftVersion: draft.version, recovered: true });
      return { handled: true, action: "reopen", fieldCount: restored, draftVersion: draft.version };
    }

    if (/\b(cancel|do not submit|don't submit|do not send|don't send)\b/.test(lower) && this.pendingConfirmation?.identityKey === identity.key) {
      this.pendingConfirmation = null;
      this.receipt("voice-form.cancelled", identity, { externalExecution: false });
      return { handled: true, action: "cancel" };
    }

    if (/\b(yes|confirm|approve|go ahead)\b/.test(lower) && this.pendingConfirmation?.identityKey === identity.key) {
      const requestedAction = this.pendingConfirmation.command;
      this.pendingConfirmation = null;
      this.receipt("voice-form.confirmed", identity, { requestedAction, externalExecution: false, providerReceiptRequired: true });
      return { handled: true, action: "confirm", externalExecution: false };
    }

    if (/\b(submit|send|share|apply|publish)\b/.test(lower)) {
      const missingFields = fields.filter((field) => !clean(field.get())).map((field) => field.key);
      this.pendingConfirmation = { identityKey: identity.key, command: spoken };
      this.receipt("voice-form.confirmation-required", identity, {
        requestedAction: spoken,
        requiresConfirmation: true,
        missingFields,
        sensitivity: identity.schema.sensitivity
      });
      return { handled: true, action: "confirmation-required", requiresConfirmation: true, missingFields };
    }

    const correction = spoken.match(/\b(?:change|replace|correct)\s+(.+?)\s+(?:to|with)\s+(.+)$/i);
    if (correction) {
      const field = this.matchField(correction[1], fields, identity.schema);
      if (!field) return { handled: false, clarificationRequired: true };
      return this.updateField(identity, field, correction[2], false, "correct");
    }

    const addition = spoken.match(/\b(?:add|enter|record|put|set|my answer is)\s+(?:(?:a|the|this)\s+)?(.+?)(?:\s+(?:to|under|in|as|is|:)\s+)(.+)$/i);
    if (addition) {
      const first = this.matchField(addition[1], fields, identity.schema);
      const second = this.matchField(addition[2], fields, identity.schema);
      const field = first || second;
      if (!field || (first && second && first.key !== second.key)) {
        this.receipt("guided-entry.clarification-required", identity, { command: spoken, reason: "field-ambiguous" });
        return { handled: false, clarificationRequired: true };
      }
      return this.updateField(identity, field, first ? addition[2] : addition[1], /\badd\b/i.test(spoken), "update");
    }
    return { handled: false };
  }
}

module.exports = {
  GuidedEntryStore,
  NexusUniversalGuidedEntryEngine,
  STORE_KEY,
  LEGACY_STORE_KEY
};
