(function initNexusAuthoritativeOutcomeRenderer(globalScope) {
  "use strict";

  class NexusAuthoritativeOutcomeRenderer {
    constructor({ adapters = {}, acknowledge, onReset = () => {} } = {}) {
      this.adapters = new Map(Object.entries(adapters));
      this.acknowledge = acknowledge;
      this.onReset = onReset;
      this.activeTurn = 0;
      this.activeController = null;
    }

    register(workspace, adapter) {
      if (!workspace || typeof adapter?.render !== "function") throw new Error("A workspace and passive render adapter are required.");
      this.adapters.set(workspace, adapter);
      return this;
    }

    async render(outcome) {
      validateOutcome(outcome);
      const adapter = this.adapters.get(outcome.presentation.kind);
      if (!adapter) throw new Error(`No passive renderer is registered for ${outcome.presentation.kind}.`);
      const turn = ++this.activeTurn;
      this.activeController?.abort();
      this.activeController = new AbortController();
      await this.onReset({ commandId: outcome.commandId, workspace: outcome.workspace });
      const proof = await adapter.render(Object.freeze({ ...outcome.data }), {
        signal: this.activeController.signal,
        commandId: outcome.commandId,
        correlationId: outcome.correlationId,
        operation: outcome.operation,
        response: outcome.response,
        outcome
      });
      if (turn !== this.activeTurn || this.activeController.signal.aborted) {
        return Object.freeze({ stale: true, acknowledged: false });
      }
      const visible = proof?.visible === true;
      const audible = proof?.audible === true;
      const rendered = proof?.rendered === true;
      if (!rendered || (!visible && !audible)) throw new Error(`The ${outcome.workspace} outcome was not visibly or audibly verified.`);
      const acknowledgement = {
        taskId: outcome.taskId,
        commandId: outcome.commandId,
        correlationId: outcome.correlationId,
        workspace: outcome.workspace,
        rendered,
        visible,
        audible,
        evidence: proof.evidence || {}
      };
      if (typeof this.acknowledge !== "function") throw new Error("The authoritative acknowledgement transport is unavailable.");
      const result = await this.acknowledge(acknowledgement);
      if (result?.schema !== "nexus.behavior-acknowledgement.v1" || result.completed !== true) {
        throw new Error("The server did not accept the renderer acknowledgement.");
      }
      return Object.freeze({ stale: false, acknowledged: true, proof, result });
    }
  }

  function validateOutcome(outcome) {
    if (outcome?.schema !== "nexus.workspace-outcome.v2") throw new Error("A typed authoritative workspace outcome is required.");
    const presentation = outcome.presentation;
    if (!presentation || typeof presentation !== "object" ||
        presentation.renderer !== "passive-ui" || presentation.interaction !== "receipt-only" ||
        presentation.commandAuthority !== false || presentation.completionAuthority !== false ||
        !String(presentation.kind || "").trim()) {
      throw new Error("A receipt-only passive presentation contract is required.");
    }
    for (const field of ["commandId", "correlationId", "conversationId", "channel", "workspace", "application", "operation"]) {
      if (!String(outcome[field] || "").trim()) throw new Error(`Authoritative outcome ${field} is required.`);
    }
    if (!outcome.data || typeof outcome.data !== "object" || Array.isArray(outcome.data)) throw new Error("Authoritative outcome data must be an object.");
  }

  globalScope.NexusAuthoritativeOutcomeRenderer = NexusAuthoritativeOutcomeRenderer;
  if (typeof module !== "undefined" && module.exports) module.exports = { NexusAuthoritativeOutcomeRenderer, validateOutcome };
})(typeof window !== "undefined" ? window : globalThis);
