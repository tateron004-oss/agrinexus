"use strict";

const DRAFT_KEY = "nexus.clean.voice-form-drafts.v1";

const ALIASES = Object.freeze({
  name: ["name", "full name"],
  role: ["role", "target role", "job"],
  skills: ["skill", "skills"],
  experience: ["experience", "work experience", "employment history"],
  reading: ["blood pressure", "reading", "glucose", "weight"],
  time: ["when measured", "date", "time"],
  symptoms: ["symptom", "symptoms", "notes", "comment", "comments"],
  reason: ["reason for visit", "reason", "care needed"],
  provider: ["provider", "care provider"],
  topic: ["topic", "skill", "question"],
  level: ["learning level", "level"],
  language: ["language"],
  location: ["location", "city", "region"],
  preference: ["work preference", "preference"],
  product: ["product", "crop"],
  quantity: ["quantity", "amount"],
  reminder: ["reminder"],
  repeat: ["repeat"]
});

function normalize(value) {
  return String(value || "").replace(/[“”]/g, "\"").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
}

function fieldMatch(fields, spokenName) {
  const wanted = normalize(spokenName).toLowerCase().replace(/[?.!]+$/g, "");
  const aliases = Object.entries(ALIASES)
    .find(([, names]) => names.some((name) => wanted === name || wanted.includes(name)))?.[1] || [wanted];
  return fields.find((field) => {
    const label = normalize(field.label || field.key).toLowerCase();
    return aliases.some((alias) => label.includes(alias));
  }) || null;
}

class NexusVoiceFormController {
  constructor({ fields, storage, scope, onReceipt = () => {} } = {}) {
    this.fields = fields || (() => []);
    this.storage = storage;
    this.scope = scope || (() => "current-form");
    this.onReceipt = onReceipt;
    this.pendingConfirmation = null;
  }

  receipt(type, detail = {}) {
    const receipt = Object.freeze({
      schema: "nexus.voice-form.receipt.v1",
      type,
      detail: Object.freeze({ scope: this.scope(), ...detail }),
      at: new Date().toISOString()
    });
    this.onReceipt(receipt);
    return receipt;
  }

  handle(command) {
    const spoken = normalize(command);
    const lower = spoken.toLowerCase();
    const fields = this.fields();
    if (!spoken || !fields.length) return { handled: false };

    if (/\b(read|review|repeat)\b.*\b(form|information|details|resume|résumé|intake|entries|back)\b/.test(lower)) {
      const populated = fields.filter((field) => normalize(field.get()));
      const readback = populated.length
        ? populated.map((field) => `${field.label}: ${normalize(field.get())}`).join(". ")
        : "The current form does not contain any entered information.";
      this.receipt("voice-form.readback", { readback, fieldCount: populated.length });
      return { handled: true, action: "readback", readback };
    }

    if (/\b(save|store|keep)\b.*\b(draft|form|resume|résumé|intake|changes|information)\b/.test(lower)) {
      const drafts = this.readDrafts();
      drafts[this.scope()] = {
        values: Object.fromEntries(fields.map((field) => [field.key, field.get()])),
        savedAt: new Date().toISOString()
      };
      this.storage.setItem(DRAFT_KEY, JSON.stringify(drafts));
      this.receipt("voice-form.saved", { fieldCount: fields.length });
      return { handled: true, action: "save", fieldCount: fields.length };
    }

    if (/\b(reopen|restore|load)\b.*\b(draft|form|resume|résumé|intake)\b/.test(lower)) {
      const draft = this.readDrafts()[this.scope()];
      if (!draft) return { handled: false };
      let restored = 0;
      fields.forEach((field) => {
        if (!Object.prototype.hasOwnProperty.call(draft.values || {}, field.key)) return;
        field.set(draft.values[field.key], false);
        restored += 1;
      });
      this.receipt("voice-form.reopened", { fieldCount: restored });
      return { handled: true, action: "reopen", fieldCount: restored };
    }

    if (/\b(cancel|do not submit|don't submit|do not send|don't send)\b/.test(lower) && this.pendingConfirmation) {
      this.pendingConfirmation = null;
      this.receipt("voice-form.cancelled", { externalExecution: false });
      return { handled: true, action: "cancel" };
    }

    if (/\b(yes|confirm|approve|go ahead)\b/.test(lower) && this.pendingConfirmation) {
      const requestedAction = this.pendingConfirmation;
      this.pendingConfirmation = null;
      this.receipt("voice-form.confirmed", { requestedAction, externalExecution: false });
      return { handled: true, action: "confirm", externalExecution: false };
    }

    if (/\b(submit|send|share|apply)\b/.test(lower)) {
      this.pendingConfirmation = spoken;
      this.receipt("voice-form.confirmation-required", { requestedAction: spoken, requiresConfirmation: true });
      return { handled: true, action: "confirmation-required", requiresConfirmation: true };
    }

    const correction = spoken.match(/\b(?:change|replace|correct)\s+(.+?)\s+(?:to|with)\s+(.+)$/i);
    if (correction) {
      const field = fieldMatch(fields, correction[1]);
      if (!field) return { handled: false };
      field.set(correction[2], false);
      this.receipt("voice-form.corrected", { field: field.key, label: field.label, value: field.get() });
      return { handled: true, action: "correct", field: field.key };
    }

    const addition = spoken.match(/\b(?:add|enter|record|put|set|my answer is)\s+(?:(?:a|the|this)\s+)?(.+?)(?:\s+(?:to|under|in|as|is|:)\s+)(.+)$/i);
    if (addition) {
      const first = fieldMatch(fields, addition[1]);
      const second = fieldMatch(fields, addition[2]);
      const field = first || second;
      if (!field) return { handled: false };
      field.set(first ? addition[2] : addition[1], /\badd\b/i.test(spoken));
      this.receipt("voice-form.updated", { field: field.key, label: field.label, value: field.get() });
      return { handled: true, action: "update", field: field.key };
    }
    return { handled: false };
  }

  readDrafts() {
    try {
      return JSON.parse(this.storage.getItem(DRAFT_KEY) || "{}");
    } catch {
      return {};
    }
  }
}

module.exports = { NexusVoiceFormController, DRAFT_KEY };
