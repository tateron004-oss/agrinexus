(function initNexusAuthoritativeOutcomeRenderer(globalScope) {
  "use strict";

  class NexusAuthoritativeOutcomeRenderer {
    constructor({ adapters = {}, acknowledge, onReset = () => {} } = {}) {
      this.adapters = new Map(Object.entries(adapters));
      this.acknowledge = acknowledge;
      this.onReset = onReset;
      this.activeTurn = 0;
      this.activeController = null;
      this.outcomeObserver = null;
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
      this.outcomeObserver?.disconnect();
      this.outcomeObserver = null;
      this.activeController?.abort();
      this.activeController = new AbortController();
      await this.onReset({ commandId: outcome.commandId, workspace: outcome.workspace });
      let proof = await adapter.render(Object.freeze({ ...outcome.data }), {
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
      if (proof?.rendered !== true && outcome.presentation.kind === "source-answer") {
        proof = renderConversationOutcome(outcome) || proof;
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
      if (visible && outcome.presentation.kind === "source-answer") {
        this.preserveConversationOutcome(outcome, turn);
      }
      return Object.freeze({ stale: false, acknowledged: true, proof, result });
    }

    preserveConversationOutcome(outcome, turn) {
      if (typeof MutationObserver !== "function" || typeof document === "undefined") return;
      this.outcomeObserver = new MutationObserver(() => {
        if (turn !== this.activeTurn || this.activeController?.signal.aborted) {
          this.outcomeObserver?.disconnect();
          this.outcomeObserver = null;
          return;
        }
        if (!document.querySelector(`[data-nexus-authoritative-outcome="true"][data-command-id="${cssEscape(outcome.commandId)}"]`)) {
          renderConversationOutcome(outcome);
        }
      });
      this.outcomeObserver.observe(document.body, { childList: true, subtree: true });
    }
  }

  function cssEscape(value) {
    if (globalScope.CSS?.escape) return globalScope.CSS.escape(String(value || ""));
    return String(value || "").replace(/[^a-zA-Z0-9_-]/g, character => `\\${character}`);
  }

  function renderConversationOutcome(outcome) {
    if (typeof document === "undefined") return null;
    const main = document.querySelector('#userWorkspace .nexus-main[data-nexus-genesis-first-viewport="true"]');
    if (!main) return null;
    let host = document.querySelector('#nexus-workspace[data-nexus-workspace="true"]');
    if (!host) {
      host = document.createElement("section");
      host.id = "nexus-workspace";
      host.className = "nexus-active-workflow nexus-glass-card nexus-authoritative-conversation-outcome";
      host.dataset.nexusWorkspace = "true";
      host.dataset.nexusAuthoritativeConversationHost = "true";
      host.dataset.executionAuthority = "false";
      host.setAttribute("aria-label", "Authoritative Nexus result");
      host.setAttribute("aria-live", "polite");
      main.append(host);
    }
    host.querySelector('[data-nexus-authoritative-outcome="true"]')?.remove();
    const surface = document.createElement("section");
    surface.dataset.nexusAuthoritativeOutcome = "true";
    surface.dataset.commandId = outcome.commandId;
    surface.dataset.correlationId = outcome.correlationId;
    surface.dataset.workspace = outcome.workspace;
    surface.setAttribute("aria-label", "Authoritative Nexus result");
    const heading = document.createElement("strong");
    heading.textContent = outcome.response || "Nexus result";
    surface.append(heading);
    Object.entries(outcome.data || {}).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") return;
      const row = document.createElement("p");
      row.dataset.nexusAuthoritativeField = key;
      row.textContent = `${key.replace(/([A-Z])/g, " $1").replace(/^./, letter => letter.toUpperCase())}: ${
        Array.isArray(value) ? value.join(", ") : typeof value === "object" ? JSON.stringify(value) : value}`;
      surface.append(row);
    });
    host.prepend(surface);
    const visible = Boolean(surface.getClientRects?.().length);
    return { rendered: visible, visible, audible: false, evidence: {
      workspace: outcome.workspace,
      operation: outcome.operation,
      commandId: outcome.commandId,
      renderedFields: Object.keys(outcome.data || {}),
      conversationOutcomeHost: true
    } };
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
