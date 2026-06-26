(function nexusAgricultureSourceSelectionPhase103Factory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-agriculture-source-registry-phase-102.js"));
  } else {
    root.NexusAgricultureSourceSelectionPhase103 = factory(root.NexusAgricultureSourceRegistryPhase102);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAgricultureSourceSelectionPhase103Module(registryModule) {
  "use strict";

  const SELECTION_VERSION = "nexus.agricultureSourceSelection.phase103.v1";
  const SOURCE_CATEGORY_RULES = Object.freeze([
    { category: "pest_disease", pattern: /\b(pest|pests|insect|spots?|disease|yellow|leaf|leaves|maize|crop issues?|crop stress)\b/i },
    { category: "irrigation_water", pattern: /\b(irrigation|water|watering|dry)\b/i },
    { category: "weather_climate", pattern: /\b(drought|rain|weather|climate|heat|storm)\b/i },
    { category: "soil_fertilizer", pattern: /\b(soil|fertili[sz]er|nutrient|compost|mulch)\b/i },
    { category: "market_context", pattern: /\b(market|price|sell|selling|agritrade)\b/i },
    { category: "extension_advisory", pattern: /\b(extension|advisor|agronomist|farm help|farmer help|field support)\b/i }
  ]);

  function normalizePrompt(prompt) {
    return String(prompt || "").replace(/\s+/g, " ").trim();
  }

  function selectAgricultureSourceForPrompt(prompt) {
    const text = normalizePrompt(prompt);
    if (!text) return Object.freeze({ selected: false, reason: "empty_prompt", executionEnabled: false });
    const matchedRule = SOURCE_CATEGORY_RULES.find(rule => rule.pattern.test(text)) || SOURCE_CATEGORY_RULES[SOURCE_CATEGORY_RULES.length - 1];
    const source = registryModule && typeof registryModule.findAgricultureSourceByCategory === "function"
      ? registryModule.findAgricultureSourceByCategory(matchedRule.category)
      : null;
    if (!source) return Object.freeze({ selected: false, reason: "source_category_unavailable", category: matchedRule.category, executionEnabled: false });
    return Object.freeze({
      selected: true,
      reason: "source_candidate_selected_for_review",
      category: matchedRule.category,
      sourceId: source.sourceId,
      sourceLabel: source.label,
      sourceStatus: "source-ready",
      sourceBackedGuidanceAllowed: true,
      liveLookupRequiredBeforeSourceBackedClaim: true,
      fallbackIfUnverified: "general guidance",
      executionEnabled: false,
      providerContactEnabled: false,
      paymentEnabled: false,
      locationSharingEnabled: false,
      diagnosisEnabled: false
    });
  }

  function buildSourceSelectionObservation(prompt) {
    const selection = selectAgricultureSourceForPrompt(prompt);
    return Object.freeze({
      schemaVersion: SELECTION_VERSION,
      prompt: normalizePrompt(prompt),
      selection,
      displayRequirement: selection.selected
        ? "Show source label, freshness status, confidence, and no-execution disclosure before using source-backed guidance."
        : "Use unavailable source fallback or general guidance.",
      canExecute: false,
      executionAuthority: "none"
    });
  }

  return Object.freeze({
    SELECTION_VERSION,
    SOURCE_CATEGORY_RULES,
    selectAgricultureSourceForPrompt,
    buildSourceSelectionObservation
  });
});
