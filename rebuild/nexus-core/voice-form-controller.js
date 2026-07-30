"use strict";

const {
  NexusUniversalGuidedEntryEngine,
  LEGACY_STORE_KEY: DRAFT_KEY
} = require("./universal-guided-entry-engine");

class NexusVoiceFormController {
  constructor({ fields, storage, scope, onReceipt = () => {} } = {}) {
    const resolveScope = scope || (() => "current-form");
    this.engine = new NexusUniversalGuidedEntryEngine({
      fields,
      storage,
      context: () => {
        const current = resolveScope();
        if (current && typeof current === "object") return current;
        return {
          userId: "signed-in-user",
          processId: current,
          documentId: "active-document"
        };
      },
      onReceipt: (receipt) => {
        const compatible = Object.freeze({
          ...receipt,
          schema: "nexus.voice-form.receipt.v1"
        });
        onReceipt(compatible);
      }
    });
  }

  handle(command) {
    return this.engine.handle(command);
  }
}

module.exports = { NexusVoiceFormController, DRAFT_KEY };
