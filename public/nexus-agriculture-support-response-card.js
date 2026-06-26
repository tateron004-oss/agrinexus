(function () {
  "use strict";

  const FEATURE_FLAG_NAME = "NEXUS_PHASE_101_AGRICULTURE_SUPPORT_RESPONSE_CARD_ENABLED";
  const MODULE_VERSION = "phase-101-agriculture-support-response-card.v1";
  const NO_EXECUTION_DISCLOSURE = Object.freeze([
    "No provider has been contacted.",
    "No message has been sent.",
    "No purchase has been made.",
    "No location has been shared.",
    "No appointment has been scheduled.",
    "No payment or marketplace transaction has been started."
  ]);
  const EXECUTION_BOUNDARY = Object.freeze({
    executionAllowed: false,
    providerHandoffAllowed: false,
    permissionRequestAllowed: false,
    callAllowed: false,
    messageAllowed: false,
    paymentAllowed: false,
    marketplaceTransactionAllowed: false,
    locationSharingAllowed: false,
    cameraAllowed: false,
    microphoneActivationAllowed: false,
    medicalActionAllowed: false,
    pharmacyActionAllowed: false,
    emergencyDispatchAllowed: false,
    networkLookupAllowed: false,
    storageSideEffectAllowed: false
  });
  const AGRICULTURE = /\b(maize|corn|crop|crops|plant|plants|leaf|leaves|yellow|spots?|pests?|insects?|irrigation|water|drought|soil|farm|farmer|field|planting|beans?|tomatoes?|cassava|sorghum|millet|rice|wheat|banana|plantain|harvest|fertili[sz]er|pesticide|herbicide|fungicide|insecticide|chemical|crop issues?|crop stress|agriculture help|farm help|farmer help)\b/i;
  const FORBIDDEN = /\b(call|phone|dial|message|text|sms|whatsapp|telegram|email|contact|book|booking|appointment|schedule|pay|payment|wallet|checkout|purchase|buy|sell|buyer|seller|order|ship|deliver|dispatch|share location|location|near me|map|gps|camera|photo|upload|image|picture|microphone|record|medical|pharmacy|prescription|doctor|clinic|hospital|telehealth|emergency|poisoning|poisoned|unconscious|seizure|guarantee|guaranteed)\b/i;
  const UNSAFE_CHEMICAL = /(?:\b(apply|spray|mix|dose|dosage|rate|how much|restricted)\b[^.?!]*\b(pesticide|herbicide|fungicide|insecticide|chemical)\b|\b(pesticide|herbicide|fungicide|insecticide|chemical)\b[^.?!]*\b(apply|spray|mix|dose|dosage|rate|how much|restricted)\b)/i;
  const MARKETPLACE_EXECUTION = /\b(buy|sell|pay|payment|checkout|order|contact buyer|contact seller|message buyer|message seller|ship|deliver)\b/i;

  function text(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function categoryFor(prompt) {
    const value = text(prompt).toLowerCase();
    if (/\b(pesticide|herbicide|fungicide|insecticide|chemical|fertili[sz]er)\b/.test(value)) return "Chemical and fertilizer safety boundary";
    if (/\b(pest|pests|insect|insects|eating|spots?|disease|yellow|leaf|leaves|maize|crop issues?|crop stress)\b/.test(value)) return "Crop stress observation";
    if (/\b(irrigation|water|dry|watering)\b/.test(value)) return "Irrigation review";
    if (/\b(drought|heat|rainfall|climate)\b/.test(value)) return "Drought preparedness";
    if (/\b(soil|compost|mulch|planting)\b/.test(value)) return "Soil and planting review";
    if (/\b(market|marketplace|price|agritrade)\b/.test(value)) return "Marketplace review-only guidance";
    return "General agriculture support";
  }

  function classifyAgricultureSupportPrompt(prompt) {
    const value = text(prompt);
    const lower = value.toLowerCase();
    if (!value) return Object.freeze({ eligible: false, reason: "empty_prompt", category: null });
    if (!AGRICULTURE.test(value)) return Object.freeze({ eligible: false, reason: "no_agriculture_support_signal", category: null });
    if (FORBIDDEN.test(value)) return Object.freeze({ eligible: false, reason: "excluded_execution_or_high_risk_request", category: categoryFor(value) });
    if (UNSAFE_CHEMICAL.test(value)) return Object.freeze({ eligible: false, reason: "excluded_unsafe_chemical_instruction_request", category: "Chemical and fertilizer safety boundary" });
    if (/\b(market|marketplace|agritrade)\b/.test(lower) && MARKETPLACE_EXECUTION.test(value)) return Object.freeze({ eligible: false, reason: "excluded_marketplace_transaction_request", category: "Marketplace review-only guidance" });
    return Object.freeze({ eligible: true, reason: "safe_agriculture_support_prompt", category: categoryFor(value), sourceStatus: "general_guidance", sourceBacked: false, confidence: "limited_general_guidance", freshness: "unavailable_no_live_source_lookup" });
  }

  function sourceStatus(options = {}) {
    const source = options.verifiedSource && typeof options.verifiedSource === "object" ? options.verifiedSource : null;
    if (source && source.name && source.contractId && source.freshnessLabel) {
      return Object.freeze({ label: "source-backed guidance", sourceBacked: true, sourceName: String(source.name), freshness: String(source.freshnessLabel), confidence: source.confidenceLabel ? String(source.confidenceLabel) : "source-labeled confidence unavailable", disclosure: "A verified source contract was provided. No provider action has been taken." });
    }
    const registry = typeof globalThis !== "undefined" ? globalThis.NexusAgricultureSourceRegistry : null;
    if (registry && typeof registry.normalizeAgricultureSourceRecord === "function") {
      const normalized = registry.normalizeAgricultureSourceRecord(null);
      return Object.freeze({ label: normalized.status, sourceBacked: false, sourceName: normalized.sourceName, freshness: normalized.freshnessLabel, confidence: normalized.confidenceLabel, disclosure: normalized.disclosure });
    }
    return Object.freeze({ label: "general guidance", sourceBacked: false, sourceName: "No verified live source connected", freshness: "Unavailable — no live source lookup was performed", confidence: "Limited — general agriculture guidance only", disclosure: "This response is not source-backed because no verified source contract or live source data is connected." });
  }

  function buildAgricultureSupportCard(prompt, options = {}) {
    const classification = classifyAgricultureSupportPrompt(prompt);
    if (!classification.eligible) return null;
    const source = sourceStatus(options);
    const chemicalPrompt = /\b(pesticide|herbicide|fungicide|insecticide|chemical|fertili[sz]er)\b/i.test(prompt);
    const marketplacePrompt = /\b(market|marketplace|agritrade|price)\b/i.test(prompt);
    return Object.freeze({
      id: "phase-101-agriculture-support-card",
      schemaVersion: "nexus.agricultureSupportCard.v1",
      moduleVersion: MODULE_VERSION,
      title: "Agriculture Support Review",
      category: "Agriculture Support",
      detectedCategory: classification.category,
      summary: "Nexus can help you review likely general possibilities and safe first checks. This is not a diagnosis, and no action has been taken.",
      likelyGeneralPossibilities: [
        "Crop stress can come from water, soil, nutrient, weather, pest, or disease pressure.",
        "Similar symptoms can have different causes depending on crop, season, soil, and local conditions.",
        "Severe, spreading, or unclear crop problems should be reviewed by a qualified local agriculture extension worker or local expert."
      ],
      safeFirstChecks: [
        "Look at where the issue appears first: older leaves, new leaves, field edges, low spots, or isolated plants.",
        "Check soil moisture and drainage before adding fertilizer or changing irrigation.",
        "Inspect the underside of leaves and stems for pests, eggs, webbing, mold, or physical damage.",
        "Note recent weather, watering changes, fertilizer use, pesticide use, and whether the issue is spreading.",
        "Separate observation from action: gather details first, then review with a qualified local expert when uncertain."
      ],
      sourceStatus: source,
      confidenceFreshnessDisclosure: { confidence: source.confidence, freshness: source.freshness, uncertainty: "This card uses uncertainty language and does not provide a definitive crop diagnosis." },
      localExpertEscalation: "Contact a qualified local agriculture extension worker, agronomist, cooperative advisor, or trusted local expert if symptoms are severe, spreading quickly, affecting many plants, or unclear after basic checks.",
      chemicalSafetyWarning: chemicalPrompt ? "Chemical, pesticide, herbicide, fungicide, insecticide, and fertilizer decisions must follow the product label, local regulations, required PPE, and qualified local guidance. Nexus is not recommending a restricted chemical, dose, mixture, or application instruction." : "For any pesticide, herbicide, fungicide, insecticide, fertilizer, or chemical decision, read the label, follow local regulations, use proper PPE, and consult a qualified local expert before acting.",
      marketplaceBoundary: marketplacePrompt ? "Marketplace guidance is review-only. Nexus has not contacted buyers or sellers, created a listing, placed an order, arranged delivery, or started payment." : "No marketplace action has been started.",
      noExecutionDisclosure: [...NO_EXECUTION_DISCLOSURE],
      actions: [{ label: "Review safe next steps", type: "review_only", disabled: true, executionAllowed: false }],
      ...EXECUTION_BOUNDARY
    });
  }

  function isFeatureEnabled(globalRef) {
    const root = globalRef || (typeof window !== "undefined" ? window : {});
    if (root && root[FEATURE_FLAG_NAME] === false) return false;
    try {
      const stored = root && root.localStorage ? root.localStorage.getItem(FEATURE_FLAG_NAME) : "";
      if (/^(false|off|disabled)$/i.test(String(stored || ""))) return false;
      if (/^(true|on|enabled)$/i.test(String(stored || ""))) return true;
    } catch (error) {
      return true;
    }
    return true;
  }

  function escapeHtml(value) {
    return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function list(items) {
    return items.map(item => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function renderAgricultureSupportCard(prompt, target, options = {}) {
    const doc = target && target.ownerDocument ? target.ownerDocument : (typeof document !== "undefined" ? document : null);
    if (!doc || !target || !isFeatureEnabled(options.globalRef)) return null;
    const card = buildAgricultureSupportCard(prompt, options);
    if (!card) return null;
    const existing = target.querySelector("[data-nexus-phase-101-agriculture-card]");
    if (existing) existing.remove();
    const article = doc.createElement("article");
    article.className = "nexus-phase-101-agriculture-card";
    article.setAttribute("data-nexus-phase-101-agriculture-card", "true");
    article.setAttribute("data-execution-allowed", "false");
    article.setAttribute("data-provider-handoff", "false");
    article.setAttribute("data-permission-request", "false");
    article.setAttribute("data-payment-allowed", "false");
    article.setAttribute("data-location-sharing", "false");
    article.setAttribute("data-camera-allowed", "false");
    article.setAttribute("data-source-status", card.sourceStatus.label);
    article.innerHTML = `<div class="tag-row"><span>${escapeHtml(card.category)}</span><span>${escapeHtml(card.detectedCategory)}</span><span>${escapeHtml(card.sourceStatus.label)}</span><span>Review-only</span></div><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.summary)}</p><strong>Likely general possibilities, not a diagnosis</strong><ul>${list(card.likelyGeneralPossibilities)}</ul><strong>Safe first checks</strong><ul>${list(card.safeFirstChecks)}</ul><p><strong>Source status:</strong> ${escapeHtml(card.sourceStatus.disclosure)}</p><p><strong>Confidence/freshness:</strong> ${escapeHtml(card.confidenceFreshnessDisclosure.confidence)}; ${escapeHtml(card.confidenceFreshnessDisclosure.freshness)}.</p><p><strong>Local expert guidance:</strong> ${escapeHtml(card.localExpertEscalation)}</p><p><strong>Chemical safety:</strong> ${escapeHtml(card.chemicalSafetyWarning)}</p><p><strong>Marketplace boundary:</strong> ${escapeHtml(card.marketplaceBoundary)}</p><p><strong>No action has been taken.</strong></p><ul>${list(card.noExecutionDisclosure)}</ul><button type="button" disabled aria-disabled="true" data-phase-101-action="review-only">${escapeHtml(card.actions[0].label)}</button>`;
    target.appendChild(article);
    return Object.freeze({ card, element: article });
  }

  function installRuntime(doc) {
    const runtimeDoc = doc || (typeof document !== "undefined" ? document : null);
    if (!runtimeDoc) return Object.freeze({ installed: false, reason: "document_unavailable" });
    if (!isFeatureEnabled(runtimeDoc.defaultView || {})) return Object.freeze({ installed: false, reason: "feature_disabled" });
    if (runtimeDoc.documentElement.getAttribute("data-nexus-phase-101-agriculture-installed") === "true") return Object.freeze({ installed: true, reason: "already_installed" });
    runtimeDoc.documentElement.setAttribute("data-nexus-phase-101-agriculture-installed", "true");
    const readPrompt = source => {
      const input = source === "caption"
        ? runtimeDoc.getElementById("userCaptionInput")
        : source === "global"
          ? runtimeDoc.getElementById("globalCommandInput")
          : runtimeDoc.getElementById("jarvisCommandInput");
      return input ? input.value : "";
    };
    const clearExistingCards = () => {
      runtimeDoc.querySelectorAll("[data-nexus-phase-101-agriculture-card]").forEach(existing => existing.remove());
    };
    const renderPrompt = prompt => {
      clearExistingCards();
      const target = runtimeDoc.getElementById("jarvisInsightPanel") || runtimeDoc.getElementById("userWorkspace") || runtimeDoc.getElementById("mainContent");
      const result = renderAgricultureSupportCard(prompt, target);
      if (result) {
        const status = runtimeDoc.getElementById("nexusBehaviorStatus");
        if (status) status.textContent = "Agriculture support review prepared. No action has been taken.";
      }
    };
    const run = prompt => {
      renderPrompt(prompt);
      if (typeof setTimeout === "function") {
        setTimeout(() => renderPrompt(prompt), 120);
        setTimeout(() => renderPrompt(prompt), 600);
      }
    };
    runtimeDoc.addEventListener("click", event => {
      const target = event.target;
      if (!target || !target.closest) return;
      if (target.closest("#jarvisRunBtn")) run(readPrompt("jarvis"));
      if (target.closest("#globalRunBtn")) run(readPrompt("global"));
      if (target.closest('[data-caption-action="send"]')) run(readPrompt("caption"));
    }, true);
    runtimeDoc.addEventListener("keydown", event => {
      if (event.key === "Enter" && event.target && event.target.id === "jarvisCommandInput") run(readPrompt("jarvis"));
      if (event.key === "Enter" && event.target && event.target.id === "globalCommandInput") run(readPrompt("global"));
    }, true);
    return Object.freeze({ installed: true, reason: "runtime_listener_installed" });
  }

  const api = Object.freeze({ FEATURE_FLAG_NAME, MODULE_VERSION, EXECUTION_BOUNDARY, NO_EXECUTION_DISCLOSURE, classifyAgricultureSupportPrompt, buildAgricultureSupportCard, renderAgricultureSupportCard, installRuntime, isFeatureEnabled });
  if (typeof module === "object" && module.exports) module.exports = api;
  if (typeof window !== "undefined") {
    window.NEXUS_PHASE_101_AGRICULTURE_SUPPORT_RESPONSE_CARD = api;
    const install = () => installRuntime(window.document);
    if (window.document && window.document.readyState === "loading") window.document.addEventListener("DOMContentLoaded", install, { once: true });
    else if (window.document) install();
  }
})();
