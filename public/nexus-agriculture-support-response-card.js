(function () {
  "use strict";

  const FEATURE_FLAG_NAME = "NEXUS_PHASE_101_AGRICULTURE_SUPPORT_RESPONSE_CARD_ENABLED";
  const SPRINT_C_FEATURE_FLAG_NAME = "NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED";
  const SOURCE_BACKED_AGRICULTURE_PREVIEW_FLAG_NAME = "NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED";
  let sourceBackedAgriculturePreviewValidationEnabled = false;
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
  const AGRICULTURE = /\b(maize|corn|crop|crops|plant|plants|leaf|leaves|yellow|spots?|pests?|insects?|irrigation|water|drought|soil|farm|farmer|field|planting|beans?|tomatoes?|cassava|sorghum|millet|rice|wheat|banana|plantain|harvest|fertili[sz]er|pesticide|herbicide|fungicide|insecticide|chemical|crop issues?|crop stress|agritrade|marketplace|agriculture help|agriculture training|agriculture course|farm training|farm course|farmer training|farmer course|farm help|farmer help)\b/i;
  const FORBIDDEN = /\b(call|phone|dial|message|text|sms|whatsapp|telegram|email|contact|book|booking|appointment|schedule|pay|payment|wallet|checkout|purchase|buy|sell|buyer|seller|order|ship|deliver|dispatch|share location|location|near me|map|gps|camera|photo|upload|image|picture|microphone|record|medical|pharmacy|prescription|doctor|clinic|hospital|telehealth|emergency|poisoning|poisoned|unconscious|seizure|guarantee|guaranteed)\b/i;
  const UNSAFE_CHEMICAL = /(?:\b(apply|spray|mix|dose|dosage|rate|how much|restricted)\b[^.?!]*\b(pesticide|herbicide|fungicide|insecticide|chemical)\b|\b(pesticide|herbicide|fungicide|insecticide|chemical)\b[^.?!]*\b(apply|spray|mix|dose|dosage|rate|how much|restricted)\b)/i;
  const MARKETPLACE_EXECUTION = /\b(buy|sell|pay|payment|checkout|order|contact buyer|contact seller|message buyer|message seller|ship|deliver)\b/i;
  const LOCAL_SOURCE_PACKETS = Object.freeze({
    agriculture_training: Object.freeze({
      packetId: "local-agriculture-training-readiness-v1",
      title: "Agriculture Training Readiness Packet",
      owner: "Nexus local source packet",
      sourceType: "deterministic local education packet",
      reviewedAt: "2026-06-26",
      freshness: "local packet; no live lookup",
      confidence: "medium - source packet reviewed for demo-safe guidance",
      verification: "local deterministic QA reviewed",
      summary: "Training guidance should compare learning options, basic readiness, and safe next review steps without enrolling the user or changing records.",
      limitations: "This packet is not a live course catalog and does not enroll, apply, message, pay, or contact a provider."
    }),
    irrigation: Object.freeze({
      packetId: "local-irrigation-education-v1",
      title: "Irrigation Education Packet",
      owner: "Nexus local source packet",
      sourceType: "deterministic local education packet",
      reviewedAt: "2026-06-26",
      freshness: "local packet; no live lookup",
      confidence: "medium - general irrigation education only",
      verification: "local deterministic QA reviewed",
      summary: "Irrigation support should explain observation-first water checks, soil moisture review, drainage, and learning next steps.",
      limitations: "This packet is not field-specific advice and does not request location, open maps, control devices, or diagnose field conditions."
    }),
    crop_support: Object.freeze({
      packetId: "local-crop-support-observation-v1",
      title: "Crop Support Observation Packet",
      owner: "Nexus local source packet",
      sourceType: "deterministic local agriculture support packet",
      reviewedAt: "2026-06-26",
      freshness: "local packet; no live lookup",
      confidence: "medium - observation guidance only",
      verification: "local deterministic QA reviewed",
      summary: "Crop issue support should separate symptoms from actions, collect observations, and recommend qualified local expert review when unclear or severe.",
      limitations: "This packet is not a diagnosis and does not use camera, image upload, location, provider contact, chemicals, or marketplace actions."
    }),
    field_support: Object.freeze({
      packetId: "local-field-support-review-v1",
      title: "Field Support Review Packet",
      owner: "Nexus local source packet",
      sourceType: "deterministic local agriculture support packet",
      reviewedAt: "2026-06-26",
      freshness: "local packet; no live lookup",
      confidence: "medium - general field support review",
      verification: "local deterministic QA reviewed",
      summary: "Field support should organize the user's observations and suggest safe next review questions without opening workflows or requesting permissions.",
      limitations: "This packet does not dispatch field agents, request location, use camera, contact providers, or create pending actions."
    }),
    agritrade_review: Object.freeze({
      packetId: "local-agritrade-review-only-v1",
      title: "AgriTrade Review-Only Packet",
      owner: "Nexus local source packet",
      sourceType: "deterministic local marketplace education packet",
      reviewedAt: "2026-06-26",
      freshness: "local packet; no live lookup",
      confidence: "medium - marketplace education only",
      verification: "local deterministic QA reviewed",
      summary: "AgriTrade guidance should explain browse/review options and safety boundaries without buying, selling, listing, contacting, ordering, or paying.",
      limitations: "This packet is not a live listing source and does not perform marketplace transactions."
    })
  });

  function text(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function categoryFor(prompt) {
    const value = text(prompt).toLowerCase();
    if (/\b(pesticide|herbicide|fungicide|insecticide|chemical|fertili[sz]er)\b/.test(value)) return "Chemical and fertilizer safety boundary";
    if (/\b(pest|pests|insect|insects|eating|spots?|disease|yellow|leaf|leaves|maize|crop issues?|crop stress)\b/.test(value)) return "Crop stress observation";
    if (/\b(irrigation|water|dry|watering)\b/.test(value)) return "Irrigation review";
    if (/\b(training|course|learn|teach)\b/.test(value) && /\b(agriculture|farm|farmer|crop|field)\b/.test(value)) return "Agriculture training review";
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

  function isSprintCFeatureEnabled(globalRef) {
    const root = globalRef || (typeof window !== "undefined" ? window : {});
    if (root && root[SPRINT_C_FEATURE_FLAG_NAME] === true) return true;
    try {
      const search = root && root.location ? String(root.location.search || "") : "";
      if (/(?:[?&])nexusSprintCAgricultureCards=1(?:&|$)/.test(search)) return true;
    } catch (error) {
      return false;
    }
    return false;
  }

  function isSourceBackedAgriculturePreviewEnabled(globalRef) {
    const root = globalRef || (typeof window !== "undefined" ? window : {});
    return Boolean(sourceBackedAgriculturePreviewValidationEnabled === true || (root && root[SOURCE_BACKED_AGRICULTURE_PREVIEW_FLAG_NAME] === true));
  }

  function setSourceBackedAgriculturePreviewValidationEnabled(value) {
    sourceBackedAgriculturePreviewValidationEnabled = value === true;
    return sourceBackedAgriculturePreviewValidationEnabled;
  }

  function sourcePacketForPrompt(prompt) {
    const value = text(prompt).toLowerCase();
    if (/\b(training|course|learn|teach)\b/.test(value) && /\b(agriculture|farm|farmer|crop|field)\b/.test(value)) return LOCAL_SOURCE_PACKETS.agriculture_training;
    if (/\b(irrigation|water|watering)\b/.test(value)) return LOCAL_SOURCE_PACKETS.irrigation;
    if (/\b(agritrade|marketplace|market)\b/.test(value)) return LOCAL_SOURCE_PACKETS.agritrade_review;
    if (/\b(field support|field help|field issue|farm support)\b/.test(value)) return LOCAL_SOURCE_PACKETS.field_support;
    return LOCAL_SOURCE_PACKETS.crop_support;
  }

  function buildSourceBackedAgriculturePreviewCard(prompt, options = {}) {
    if (!isSourceBackedAgriculturePreviewEnabled(options.globalRef)) return null;
    const classification = classifyAgricultureSupportPrompt(prompt);
    if (!classification.eligible) return null;
    const packet = sourcePacketForPrompt(prompt);
    return Object.freeze({
      id: "sprint-c42-source-backed-agriculture-preview-card",
      schemaVersion: "nexus.sprintC42.sourceBackedAgriculturePreviewCard.v1",
      moduleVersion: MODULE_VERSION,
      flagName: SOURCE_BACKED_AGRICULTURE_PREVIEW_FLAG_NAME,
      riskTier: "low",
      category: "source-backed-agriculture-preview",
      title: "Source-Backed Agriculture Preview",
      detectedCategory: classification.category,
      summary: packet.summary,
      evidenceAndVerification: Object.freeze({
        packetId: packet.packetId,
        sourceTitle: packet.title,
        dataOwner: packet.owner,
        sourceType: packet.sourceType,
        reviewedAt: packet.reviewedAt,
        freshness: packet.freshness,
        confidence: packet.confidence,
        verification: packet.verification,
        limitation: packet.limitations,
        noLiveLookup: "No live lookup, network request, provider contact, or backend write was performed."
      }),
      reviewOnlyGuidance: Object.freeze([
        "Review the source packet summary and limitations first.",
        "Use the guidance as a starting point for questions, not as a completed action.",
        "Ask a qualified local agriculture expert when the situation is severe, spreading, regulated, or unclear."
      ]),
      noExecutionDisclosure: [...NO_EXECUTION_DISCLOSURE],
      noActionDisclosure: "No action has been taken.",
      reviewOnly: true,
      ...EXECUTION_BOUNDARY,
      executionAuthority: false,
      providerHandoffAllowed: false,
      pendingActionCreationAllowed: false,
      storageSideEffectAllowed: false,
      networkSideEffectAllowed: false,
      liveLookupAllowed: false,
      externalNavigationAllowed: false
    });
  }

  function buildSprintCAgricultureResponseCard(prompt, options = {}) {
    if (!isSprintCFeatureEnabled(options.globalRef)) return null;
    const baseCard = buildAgricultureSupportCard(prompt, options);
    if (!baseCard) return null;
    return Object.freeze({
      id: "sprint-c-controlled-agriculture-response-card",
      schemaVersion: "nexus.sprintC.agricultureResponseCard.v1",
      moduleVersion: MODULE_VERSION,
      riskTier: "low",
      category: "agriculture-support",
      title: baseCard.title,
      summary: baseCard.summary,
      guidance: [...baseCard.safeFirstChecks],
      reviewOnlyActions: [
        { label: "Review safe next checks", type: "review_only", disabled: true, executionAllowed: false }
      ],
      blockedActions: [
        "provider handoff",
        "calls and messages",
        "WhatsApp, Telegram, SMS, email, and phone-provider behavior",
        "payment, purchase, buy, sell, checkout, and marketplace transactions",
        "location sharing, maps, GPS, and near-me behavior",
        "camera, photo upload, microphone, and media capture",
        "appointments, scheduling, account, identity, medical, pharmacy, telehealth, and emergency actions",
        "external navigation and external service opening"
      ],
      sourceStatus: baseCard.sourceStatus,
      localExpertEscalation: baseCard.localExpertEscalation,
      noExecutionDisclosure: [...baseCard.noExecutionDisclosure],
      executionAuthority: false,
      providerHandoffAllowed: false,
      pendingActionCreationAllowed: false,
      storageSideEffectAllowed: false,
      networkSideEffectAllowed: false,
      routeAutoOpenAllowed: false,
      modalAutoOpenAllowed: false,
      confirmationPromptForExecutionAllowed: false,
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

  function renderSprintCAgricultureResponseCard(prompt, target, options = {}) {
    const doc = target && target.ownerDocument ? target.ownerDocument : (typeof document !== "undefined" ? document : null);
    if (!doc || !target || !isSprintCFeatureEnabled(options.globalRef)) return null;
    const card = buildSprintCAgricultureResponseCard(prompt, options);
    if (!card) return null;
    target.querySelectorAll("[data-nexus-sprint-c-agriculture-card]").forEach(existing => existing.remove());
    const article = doc.createElement("article");
    article.className = "nexus-sprint-c-agriculture-card";
    article.setAttribute("data-nexus-sprint-c-agriculture-card", "true");
    article.setAttribute("data-risk-tier", card.riskTier);
    article.setAttribute("data-execution-authority", "false");
    article.setAttribute("data-provider-handoff", "false");
    article.setAttribute("data-pending-action-creation", "false");
    article.setAttribute("data-storage-side-effect", "false");
    article.setAttribute("data-network-side-effect", "false");
    article.setAttribute("data-route-auto-open", "false");
    article.setAttribute("data-modal-auto-open", "false");
    article.innerHTML = `<div class="tag-row"><span>${escapeHtml(card.category)}</span><span>${escapeHtml(card.riskTier)}</span><span>${escapeHtml(card.sourceStatus.label)}</span><span>Review-only</span></div><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.summary)}</p><strong>Safe guidance</strong><ul>${list(card.guidance)}</ul><p><strong>Local expert guidance:</strong> ${escapeHtml(card.localExpertEscalation)}</p><p><strong>No action has been taken.</strong></p><ul>${list(card.noExecutionDisclosure)}</ul><button type="button" disabled aria-disabled="true" data-sprint-c-action="review-only">${escapeHtml(card.reviewOnlyActions[0].label)}</button>`;
    target.appendChild(article);
    return Object.freeze({ card, element: article });
  }

  function renderSourceBackedAgriculturePreviewCard(prompt, target, options = {}) {
    const doc = target && target.ownerDocument ? target.ownerDocument : (typeof document !== "undefined" ? document : null);
    if (!doc || !target || !isSourceBackedAgriculturePreviewEnabled(options.globalRef)) return null;
    const card = buildSourceBackedAgriculturePreviewCard(prompt, options);
    if (!card) return null;
    target.querySelectorAll("[data-nexus-source-backed-agriculture-preview-card]").forEach(existing => existing.remove());
    const evidence = card.evidenceAndVerification;
    const article = doc.createElement("article");
    article.className = "nexus-source-backed-agriculture-preview-card";
    article.setAttribute("data-nexus-source-backed-agriculture-preview-card", "true");
    article.setAttribute("data-flag-name", SOURCE_BACKED_AGRICULTURE_PREVIEW_FLAG_NAME);
    article.setAttribute("data-execution-authority", "false");
    article.setAttribute("data-provider-handoff", "false");
    article.setAttribute("data-pending-action-creation", "false");
    article.setAttribute("data-network-side-effect", "false");
    article.setAttribute("data-storage-side-effect", "false");
    article.setAttribute("data-external-navigation", "false");
    article.innerHTML = `<div class="tag-row"><span>${escapeHtml(card.category)}</span><span>${escapeHtml(card.riskTier)}</span><span>Review-only</span><span>Source packet</span></div><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.summary)}</p><strong>Review-only guidance</strong><ul>${list(card.reviewOnlyGuidance)}</ul><section aria-label="Evidence and Verification"><strong>Evidence &amp; Verification</strong><ul><li>Source: ${escapeHtml(evidence.sourceTitle)}</li><li>Owner: ${escapeHtml(evidence.dataOwner)}</li><li>Type: ${escapeHtml(evidence.sourceType)}</li><li>Reviewed: ${escapeHtml(evidence.reviewedAt)}</li><li>Freshness: ${escapeHtml(evidence.freshness)}</li><li>Confidence: ${escapeHtml(evidence.confidence)}</li><li>Verification: ${escapeHtml(evidence.verification)}</li><li>Limitation: ${escapeHtml(evidence.limitation)}</li><li>${escapeHtml(evidence.noLiveLookup)}</li></ul></section><p><strong>${escapeHtml(card.noActionDisclosure)}</strong></p><ul>${list(card.noExecutionDisclosure)}</ul>`;
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
      runtimeDoc.querySelectorAll("[data-nexus-sprint-c-agriculture-card]").forEach(existing => existing.remove());
    };
    const renderPrompt = prompt => {
      clearExistingCards();
      const target = runtimeDoc.getElementById("jarvisInsightPanel") || runtimeDoc.getElementById("userWorkspace") || runtimeDoc.getElementById("mainContent");
      const globalRef = runtimeDoc.defaultView || {};
      const result = isSourceBackedAgriculturePreviewEnabled(globalRef)
        ? renderSourceBackedAgriculturePreviewCard(prompt, target, { globalRef })
        : isSprintCFeatureEnabled(globalRef)
        ? renderSprintCAgricultureResponseCard(prompt, target, { globalRef: runtimeDoc.defaultView || {} })
        : renderAgricultureSupportCard(prompt, target);
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

  const api = Object.freeze({ FEATURE_FLAG_NAME, SPRINT_C_FEATURE_FLAG_NAME, SOURCE_BACKED_AGRICULTURE_PREVIEW_FLAG_NAME, MODULE_VERSION, EXECUTION_BOUNDARY, NO_EXECUTION_DISCLOSURE, LOCAL_SOURCE_PACKETS, classifyAgricultureSupportPrompt, buildAgricultureSupportCard, buildSprintCAgricultureResponseCard, buildSourceBackedAgriculturePreviewCard, renderAgricultureSupportCard, renderSprintCAgricultureResponseCard, renderSourceBackedAgriculturePreviewCard, installRuntime, isFeatureEnabled, isSprintCFeatureEnabled, isSourceBackedAgriculturePreviewEnabled, setSourceBackedAgriculturePreviewValidationEnabled });
  if (typeof module === "object" && module.exports) module.exports = api;
  if (typeof window !== "undefined") {
    window.NEXUS_PHASE_101_AGRICULTURE_SUPPORT_RESPONSE_CARD = api;
    const install = () => installRuntime(window.document);
    if (window.document && window.document.readyState === "loading") window.document.addEventListener("DOMContentLoaded", install, { once: true });
    else if (window.document) install();
  }
})();
