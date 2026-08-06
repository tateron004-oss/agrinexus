"use strict";

const CANONICAL_PRODUCTION_URL = "https://agrinexus-platform.onrender.com";

const LIFECYCLE = Object.freeze([
  "open", "execute", "verify-outcome", "follow-up", "correct",
  "save", "close", "reopen", "verify-persistence"
]);

function lane(id, title, options = {}) {
  return Object.freeze({
    id,
    title,
    workspace: options.workspace || id,
    adapter: options.adapter || "content-action-service",
    route: options.route || options.workspace || id,
    entrypoints: Object.freeze(options.entrypoints || [title, `voice:${id}`]),
    persistence: options.persistence || "session-artifact-store",
    failurePolicy: Object.freeze(options.failurePolicy || ["bounded-retry", "verified-fallback", "truthful-error"]),
    receiptTypes: Object.freeze(options.receiptTypes || ["intent.resolved", "provider.completed", "outcome.verified", "artifact.persisted"]),
    providerOutcomes: Object.freeze(options.providerOutcomes || []),
    requiredEvidence: Object.freeze(options.requiredEvidence || []),
    lifecycle: LIFECYCLE,
    risk: options.risk || "standard",
    supportsOffline: Boolean(options.supportsOffline),
    requiresPhysicalAudio: Boolean(options.requiresPhysicalAudio)
  });
}

const PRODUCTION_CAPABILITY_REGISTRY = Object.freeze([
  lane("agriculture", "Agriculture Help", {
    providerOutcomes: ["live-research", "source-backed-list", "rendered-images", "field-report"],
    requiredEvidence: ["sources", "loaded-image-pixels", "editable-fields", "persisted-artifact"]
  }),
  lane("health", "Health & Chronic Care", {
    providerOutcomes: ["bp-intake", "diabetes-intake", "weight-intake", "care-team-report", "rpm-rtm-record"],
    requiredEvidence: ["editable-fields", "safety-boundary", "correction", "persisted-artifact"],
    risk: "health"
  }),
  lane("telehealth", "Telehealth Intake", {
    providerOutcomes: ["intake", "video-visit-handoff", "provider-preparation"],
    requiredEvidence: ["editable-fields", "consent", "usable-video-handoff", "persisted-artifact"],
    risk: "health",
    requiresPhysicalAudio: true
  }),
  lane("mobile-clinic", "Mobile Clinic", {
    providerOutcomes: ["live-clinic-listings", "map", "visit-preparation"],
    requiredEvidence: ["source-backed-records", "coordinates", "route", "persisted-artifact"],
    risk: "health"
  }),
  lane("pharmacy", "Pharmacy Support", {
    providerOutcomes: ["pharmacy-listings", "medication-question-card", "pharmacist-handoff"],
    requiredEvidence: ["source-backed-records", "safety-boundary", "consent", "persisted-artifact"],
    risk: "health"
  }),
  lane("learning", "Learning & Literacy", {
    providerOutcomes: ["lesson", "translation", "training-listings", "progress-record"],
    requiredEvidence: ["source-backed-records", "editable-fields", "follow-up-context", "persisted-artifact"],
    supportsOffline: true
  }),
  lane("workforce", "Jobs & Workforce", {
    providerOutcomes: ["live-job-listings", "resume", "application-draft"],
    requiredEvidence: ["source-backed-records", "editable-document", "correction", "persisted-artifact"]
  }),
  lane("marketplace", "AgriTrade Marketplace", {
    providerOutcomes: ["market-listings", "sale-draft", "buyer-seller-preparation"],
    requiredEvidence: ["source-backed-records", "editable-fields", "consent", "persisted-artifact"]
  }),
  lane("maps", "Maps / Field Visit", {
    providerOutcomes: ["location", "route", "viewport-move", "reset"],
    requiredEvidence: ["coordinates", "rendered-map", "route-geometry", "viewport-change", "reset-state"]
  }),
  lane("music", "Music / Media", {
    providerOutcomes: ["artist-search", "audible-playback", "pause", "resume", "next", "stop"],
    requiredEvidence: ["provider-source", "audio-ready", "advancing-current-time", "audible-output"],
    requiresPhysicalAudio: true
  }),
  lane("reminders", "Reminders", {
    providerOutcomes: ["create", "edit", "list", "complete"],
    requiredEvidence: ["editable-fields", "correction", "persisted-artifact"]
  }),
  lane("offline", "Offline Queue", {
    providerOutcomes: ["queue", "inspect", "edit", "reconnect", "sync"],
    requiredEvidence: ["queued-record", "connection-transition", "sync-receipt", "persisted-artifact"],
    supportsOffline: true
  }),
  lane("live-knowledge", "Live Knowledge", {
    providerOutcomes: ["internet-answer", "source-directory", "images", "weather", "video"],
    requiredEvidence: ["source-backed-records", "openable-source", "loaded-image-pixels", "playable-video"]
  }),
  lane("images-video", "Images & Video", {
    workspace: "live-knowledge",
    adapter: "visual-data-service",
    providerOutcomes: ["image-search", "loaded-image", "video-search", "playable-video"],
    requiredEvidence: ["source-url", "attribution", "loaded-image-pixels", "playback-progress"]
  }),
  lane("documents-forms", "Documents, Reports & Forms", {
    workspace: "workforce",
    adapter: "content-action-service",
    providerOutcomes: ["list-artifacts", "create-editable", "voice-correction", "save-reopen"],
    requiredEvidence: ["editable-fields", "corrected-value", "persisted-artifact", "new-session-reload"]
  }),
  lane("guided-entry", "Guided Entry", {
    workspace: "health",
    adapter: "universal-guided-entry-engine",
    providerOutcomes: ["field-selection", "voice-entry", "field-correction", "save-reopen"],
    requiredEvidence: ["active-field", "transcript-receipt", "corrected-value", "persisted-artifact"]
  }),
  lane("rpm-rtm", "RPM / RTM", {
    workspace: "health",
    adapter: "content-action-service",
    providerOutcomes: ["reading-intake", "trend-summary", "care-team-report", "save-reopen"],
    requiredEvidence: ["timestamped-reading", "editable-fields", "safety-boundary", "persisted-artifact"],
    risk: "health"
  }),
  lane("uploads", "Uploads", {
    workspace: "live-knowledge",
    adapter: "content-action-service",
    providerOutcomes: ["select-file", "validate-file", "extract-content", "save-reopen"],
    requiredEvidence: ["file-metadata", "content-preview", "truthful-rejection", "persisted-artifact"]
  }),
  lane("cross-application", "Cross-application Work", {
    workspace: "agriculture",
    adapter: "browser-runtime",
    providerOutcomes: ["context-transfer", "reference-resolution", "workspace-switch", "save-reopen"],
    requiredEvidence: ["source-receipt", "active-workspace", "resolved-reference", "persisted-artifact"]
  }),
  lane("multilingual", "Multilingual Interaction", {
    workspace: "learning",
    adapter: "browser-runtime",
    providerOutcomes: ["language-detection", "translated-response", "multilingual-command", "context-retention"],
    requiredEvidence: ["detected-language", "spoken-response", "visible-result", "context-receipt"],
    requiresPhysicalAudio: true
  }),
  lane("voice-memory", "Voice Lifecycle & Conversational Memory", {
    workspace: "live-knowledge",
    adapter: "browser-runtime",
    providerOutcomes: ["microphone-entry", "barge-in", "reference-resolution", "return-to-listening"],
    requiredEvidence: ["audio-owner-receipt", "transcript", "interruption-receipt", "context-receipt"],
    requiresPhysicalAudio: true
  })
]);

const CROSS_APPLICATION_JOURNEYS = Object.freeze([
  Object.freeze({ id: "research-to-document", from: "live-knowledge", to: "workforce", evidence: ["sources", "editable-document", "persisted-artifact"] }),
  Object.freeze({ id: "clinic-to-map", from: "mobile-clinic", to: "maps", evidence: ["selected-record", "coordinates", "route-geometry"] }),
  Object.freeze({ id: "agriculture-to-reminder", from: "agriculture", to: "reminders", evidence: ["visual-reference", "scheduled-record", "persisted-artifact"] }),
  Object.freeze({ id: "health-to-telehealth", from: "health", to: "telehealth", evidence: ["consent", "transferred-context", "persisted-artifact"] })
]);

const FAILURE_SCENARIOS = Object.freeze([
  "provider-timeout", "empty-provider-result", "invalid-provider-payload", "rate-limit",
  "expired-session", "refresh", "slow-network", "media-autoplay-blocked",
  "microphone-interruption", "location-denied", "offline-reconnect", "deployment-mismatch",
  "exhausted-quota", "authentication-transition", "broken-image", "source-link-failure",
  "video-provider-failure", "persistence-write-failure", "workspace-render-failure"
]);

function registryById() {
  return new Map(PRODUCTION_CAPABILITY_REGISTRY.map((entry) => [entry.id, entry]));
}

module.exports = {
  CANONICAL_PRODUCTION_URL,
  CROSS_APPLICATION_JOURNEYS,
  FAILURE_SCENARIOS,
  LIFECYCLE,
  PRODUCTION_CAPABILITY_REGISTRY,
  registryById
};
