"use strict";

const CANONICAL_PRODUCTION_URL = "https://nexus-genesis-certified.onrender.com";

const LIFECYCLE = Object.freeze([
  "open", "execute", "verify-outcome", "follow-up", "correct",
  "save", "close", "reopen", "verify-persistence"
]);

function lane(id, title, options = {}) {
  return Object.freeze({
    id,
    title,
    workspace: options.workspace || id,
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
  "microphone-interruption", "location-denied", "offline-reconnect", "deployment-mismatch"
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
