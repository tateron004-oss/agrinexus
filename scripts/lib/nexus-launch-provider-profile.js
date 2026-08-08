"use strict";

const REQUIRED_PROVIDER_IDS = Object.freeze(new Set([
  "database", "openai", "voice-stt", "voice-tts", "web-search", "maps",
  "public-weather-openmeteo", "public-who-outbreaks", "public-osm-geocoding",
  "public-osm-services", "music-playback"
]));

const INTENTIONALLY_UNAVAILABLE_PROVIDER_IDS = Object.freeze(new Set([
  "trade-payments", "billing-subscriptions", "field-drones", "satellite-field-data"
]));

const READY_STATUSES = Object.freeze(new Set(["connected", "ready", "needs-recipient", "needs-user-auth"]));

function classifyProviders(integrations = {}) {
  const providers = Array.isArray(integrations.providers) ? integrations.providers : [];
  const items = providers.map(provider => {
    const classification = REQUIRED_PROVIDER_IDS.has(provider.id)
      ? "required-for-launch"
      : INTENTIONALLY_UNAVAILABLE_PROVIDER_IDS.has(provider.id)
        ? "intentionally-unavailable"
        : "optional-capability";
    const ready = READY_STATUSES.has(String(provider.status || "").toLowerCase());
    return { id: provider.id, name: provider.name, module: provider.module, status: provider.status,
      mode: provider.mode, classification, ready,
      blocksLaunch: classification === "required-for-launch" && !ready };
  });
  const required = items.filter(item => item.classification === "required-for-launch");
  const requiredGaps = required.filter(item => !item.ready);
  const optionalGaps = items.filter(item => item.classification === "optional-capability" && !item.ready);
  const unavailable = items.filter(item => item.classification === "intentionally-unavailable");
  return {
    profile: "nexus-path-1-launch-v1",
    ready: required.length === REQUIRED_PROVIDER_IDS.size && requiredGaps.length === 0,
    requiredCount: REQUIRED_PROVIDER_IDS.size,
    observedRequiredCount: required.length,
    requiredReadyCount: required.filter(item => item.ready).length,
    requiredGaps, optionalGaps, intentionallyUnavailable: unavailable, items
  };
}

module.exports = Object.freeze({ REQUIRED_PROVIDER_IDS, INTENTIONALLY_UNAVAILABLE_PROVIDER_IDS, READY_STATUSES, classifyProviders });
