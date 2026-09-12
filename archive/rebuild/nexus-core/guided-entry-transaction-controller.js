"use strict";

const { NexusUniversalGuidedEntryEngine } = require("./universal-guided-entry-engine");

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function requestId(value, idFactory) {
  return clean(value || idFactory()).replace(/[^a-zA-Z0-9._:-]+/g, "-");
}

function freezeEnvelope(value) {
  return Object.freeze({ ...value });
}

class NexusGuidedEntryTransactionController {
  constructor({
    fields,
    storage,
    context,
    ensureAuthoritativeDocument = async () => true,
    mountGeneration = null,
    visibleGeneration = null,
    settleVisibleDocument = async () => {},
    onReceipt = () => {},
    now = () => new Date().toISOString(),
    idFactory = () => `guided-entry-${Date.now()}-${Math.random().toString(16).slice(2)}`
  } = {}) {
    this.fields = fields || (() => []);
    this.context = context || (() => ({}));
    this.ensureAuthoritativeDocument = ensureAuthoritativeDocument;
    this.mountedGeneration = null;
    this.mountGeneration = typeof mountGeneration === "function"
      ? mountGeneration
      : (envelope) => { this.mountedGeneration = envelope.generationId; };
    this.visibleGeneration = typeof visibleGeneration === "function"
      ? visibleGeneration
      : () => this.mountedGeneration;
    this.settleVisibleDocument = settleVisibleDocument;
    this.onReceipt = onReceipt;
    this.now = now;
    this.idFactory = idFactory;
    this.sequence = 0;
    this.active = null;
    this.screenOwner = null;
    this.mountedGeneration = null;
    this.requests = new Map();
    this.bufferedReceipts = new Map();
    this.engine = new NexusUniversalGuidedEntryEngine({
      fields: this.fields,
      storage,
      context: this.context,
      now,
      idFactory,
      onReceipt: (receipt) => {
        const owner = this.active;
        if (!owner) return;
        const receipts = this.bufferedReceipts.get(owner.requestId) || [];
        receipts.push(receipt);
        this.bufferedReceipts.set(owner.requestId, receipts);
      }
    });
  }

  begin(command, options = {}) {
    const id = requestId(options.requestId, this.idFactory);
    const existing = this.requests.get(id);
    if (existing) return freezeEnvelope({ ...existing, accepted: false, reason: "duplicate-request" });
    const envelope = freezeEnvelope({
      requestId: id,
      sequence: ++this.sequence,
      generationId: `${id}:generation`,
      command: clean(command),
      documentId: clean(options.documentId || this.context()?.documentId || "active-document"),
      processId: clean(options.processId || this.context()?.processId || "current-form"),
      state: "received",
      accepted: true,
      at: this.now()
    });
    this.requests.set(id, envelope);
    this.screenOwner = envelope;
    return envelope;
  }

  isCurrent(envelope) {
    return Boolean(
      envelope
      && this.active?.requestId === envelope.requestId
      && this.screenOwner?.generationId === envelope.generationId
    );
  }

  ownsScreen(envelope) {
    return Boolean(envelope && this.screenOwner?.generationId === envelope.generationId);
  }

  emit(type, envelope, detail = {}) {
    const receipt = Object.freeze({
      schema: "nexus.guided-entry.transaction-receipt.v2",
      type,
      detail: Object.freeze({
        requestId: envelope.requestId,
        transactionSequence: envelope.sequence,
        generationId: envelope.generationId,
        processId: envelope.processId,
        documentId: envelope.documentId,
        ...detail
      }),
      at: this.now()
    });
    this.onReceipt(receipt);
    return receipt;
  }

  reject(envelope, reason) {
    this.emit("guided-entry.transaction-rejected", envelope, { reason });
    return { handled: true, action: "rejected", rejected: true, reason, requestId: envelope.requestId };
  }

  visibleSnapshot() {
    return Object.fromEntries(this.fields().map((field) => [field.key, clean(field.get())]));
  }

  async execute(command, options = {}) {
    const envelope = this.begin(command, options);
    if (!envelope.accepted) return this.reject(envelope, envelope.reason);
    return this.commit(envelope);
  }

  async commit(envelope) {
    if (!envelope?.accepted) return this.reject(envelope, envelope?.reason || "invalid-envelope");
    if (!this.ownsScreen(envelope)) return this.reject(envelope, "screen-lease-superseded");
    if (this.active && this.active.sequence > envelope.sequence) return this.reject(envelope, "stale-request");
    this.active = envelope;
    this.bufferedReceipts.set(envelope.requestId, []);
    this.emit("guided-entry.transaction-started", envelope, { state: "received" });

    const rendered = await this.ensureAuthoritativeDocument(envelope);
    if (!this.isCurrent(envelope)) return this.reject(envelope, "superseded-during-render");
    if (!rendered || !this.fields().length) return this.reject(envelope, "authoritative-document-unavailable");
    this.mountGeneration(envelope);
    if (this.visibleGeneration() !== envelope.generationId) {
      return this.reject(envelope, "generation-mount-failed");
    }
    this.emit("guided-entry.document-authoritative", envelope, { state: "rendered" });

    const result = this.engine.handle(envelope.command, {
      requestId: envelope.requestId,
      transactionSequence: envelope.sequence
    });
    if (!result.handled) {
      this.bufferedReceipts.delete(envelope.requestId);
      return { ...result, requestId: envelope.requestId };
    }

    await this.settleVisibleDocument(envelope);
    if (!this.isCurrent(envelope)) return this.reject(envelope, "superseded-before-verification");
    if (this.visibleGeneration() !== envelope.generationId) {
      return this.reject(envelope, "visible-generation-replaced");
    }
    const visibleValues = this.visibleSnapshot();
    const buffered = this.bufferedReceipts.get(envelope.requestId) || [];
    const reopened = [...buffered].reverse().find((receipt) => receipt.type === "voice-form.reopened");
    if (result.action === "reopen") {
      const expected = Object.fromEntries(
        (reopened?.detail?.verifiedRestoredFields || []).map((item) => [item.field, clean(item.value)])
      );
      const verifiedFields = Object.keys(expected);
      const visibleValuesVerified = verifiedFields.length > 0
        && verifiedFields.every((key) => visibleValues[key] === expected[key]);
      if (!visibleValuesVerified) {
        this.bufferedReceipts.delete(envelope.requestId);
        this.emit("voice-form.reopen-verification-failed", envelope, {
          state: "verification-failed",
          committedFormVersion: result.committedFormVersion || null,
          expectedValues: expected,
          visibleValues
        });
        return {
          handled: true,
          action: "reopen-verification-failed",
          requestId: envelope.requestId,
          visibleValuesVerified: false
        };
      }
      for (const receipt of buffered.filter((item) => item.type !== "voice-form.reopened")) {
        this.onReceipt(receipt);
      }
      this.bufferedReceipts.delete(envelope.requestId);
      this.emit("voice-form.reopened", envelope, {
        state: "completed",
        fieldCount: reopened.detail.verifiedRestoredFields.length,
        draftVersion: result.committedFormVersion,
        committedFormVersion: result.committedFormVersion,
        verifiedRestoredFields: reopened.detail.verifiedRestoredFields,
        visibleValues,
        visibleValuesVerified: true
      });
      return {
        ...result,
        requestId: envelope.requestId,
        visibleValues,
        visibleValuesVerified: true
      };
    }

    for (const receipt of buffered) this.onReceipt(receipt);
    this.bufferedReceipts.delete(envelope.requestId);
    this.emit("guided-entry.transaction-completed", envelope, {
      state: "completed",
      action: result.action,
      visibleValues
    });
    return { ...result, requestId: envelope.requestId, visibleValues };
  }

  cancelAll(reason = "controller-teardown") {
    const active = this.active;
    this.active = null;
    this.screenOwner = null;
    this.bufferedReceipts.clear();
    if (active) this.emit("guided-entry.transaction-cancelled", active, { reason });
  }
}

module.exports = { NexusGuidedEntryTransactionController };
