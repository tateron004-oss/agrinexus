const LIVE_PROVIDER_STATUSES = Object.freeze([
  "disabled",
  "missing_config",
  "ready",
  "provider_error",
  "blocked_by_policy",
  "fixture_only"
]);

const BLOCKED_REAL_WORLD_ACTIONS = Object.freeze([
  "call",
  "message",
  "payment",
  "purchase",
  "booking",
  "scheduling",
  "form_submission",
  "account_creation",
  "provider_contact",
  "emergency_dispatch",
  "medical_or_pharmacy_execution",
  "marketplace_transaction",
  "location_permission",
  "browser_geolocation",
  "camera_or_microphone_activation",
  "backend_write",
  "hidden_auto_navigation"
]);

const LIVE_PROVIDER_CAPABILITY_REGISTRY = Object.freeze([
  {
    providerId: "weather",
    displayName: "Weather Provider",
    sourceType: "live-or-fixture-source",
    domain: "weather",
    riskTier: "low",
    defaultEnabled: false,
    requiredFlags: ["NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED", "NEXUS_WEATHER_PROVIDER_ENABLED"],
    requiredSecrets: ["NEXUS_WEATHER_PROVIDER_API_KEY"],
    optionalConfig: ["NEXUS_WEATHER_PROVIDER_BASE_URL", "NEXUS_WEATHER_VALIDATION_LOCATION"],
    supportsLiveCall: true,
    supportsMockCall: true,
    supportsFixtureCall: true,
    allowedIntents: ["weather lookup"],
    blockedActions: BLOCKED_REAL_WORLD_ACTIONS,
    requiresExplicitUserInput: true,
    forbidsLocationPermission: true,
    forbidsExecution: true,
    forbidsProviderContact: true,
    forbidsBackendWrites: true,
    citationRequired: true,
    confidenceRequired: true,
    auditCategory: "live-source.weather",
    providerStatus: "disabled"
  },
  {
    providerId: "agriculture-context",
    displayName: "Agriculture Context Provider",
    sourceType: "public-or-partner-source",
    domain: "agriculture",
    riskTier: "low",
    defaultEnabled: false,
    requiredFlags: ["NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED", "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED"],
    requiredSecrets: ["NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY"],
    optionalConfig: ["NEXUS_AGRICULTURE_CONTEXT_PUBLIC_SOURCE_ENDPOINT"],
    supportsLiveCall: false,
    supportsMockCall: true,
    supportsFixtureCall: true,
    allowedIntents: ["agriculture context lookup", "crop public source context"],
    blockedActions: BLOCKED_REAL_WORLD_ACTIONS,
    requiresExplicitUserInput: true,
    forbidsLocationPermission: true,
    forbidsExecution: true,
    forbidsProviderContact: true,
    forbidsBackendWrites: true,
    citationRequired: true,
    confidenceRequired: true,
    auditCategory: "live-source.agriculture-context",
    providerStatus: "fixture_only"
  },
  {
    providerId: "news-security",
    displayName: "News, Security, and Conflict Provider",
    sourceType: "public-current-awareness-source",
    domain: "news-security-conflict",
    riskTier: "medium",
    defaultEnabled: false,
    requiredFlags: ["NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED", "NEXUS_NEWS_SECURITY_PROVIDER_ENABLED"],
    requiredSecrets: ["NEXUS_NEWS_SECURITY_PROVIDER_API_KEY"],
    optionalConfig: ["NEXUS_NEWS_SECURITY_PUBLIC_SOURCE_ENDPOINT"],
    supportsLiveCall: false,
    supportsMockCall: true,
    supportsFixtureCall: true,
    allowedIntents: ["news lookup", "security awareness lookup", "conflict awareness lookup"],
    blockedActions: BLOCKED_REAL_WORLD_ACTIONS.concat(["tactical_harm_guidance", "political_persuasion_tooling", "violence_facilitation"]),
    requiresExplicitUserInput: true,
    forbidsLocationPermission: true,
    forbidsExecution: true,
    forbidsProviderContact: true,
    forbidsBackendWrites: true,
    citationRequired: true,
    confidenceRequired: true,
    auditCategory: "live-source.news-security",
    providerStatus: "fixture_only"
  },
  {
    providerId: "job-search",
    displayName: "Job Search and Application Preparation Provider",
    sourceType: "job-information-source",
    domain: "workforce",
    riskTier: "medium",
    defaultEnabled: false,
    requiredFlags: ["NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED", "NEXUS_JOB_SEARCH_PROVIDER_ENABLED"],
    requiredSecrets: ["NEXUS_JOB_SEARCH_PROVIDER_API_KEY"],
    optionalConfig: ["NEXUS_JOB_SEARCH_PUBLIC_SOURCE_ENDPOINT"],
    supportsLiveCall: false,
    supportsMockCall: true,
    supportsFixtureCall: true,
    allowedIntents: ["job search information lookup", "application preparation guidance"],
    blockedActions: BLOCKED_REAL_WORLD_ACTIONS.concat(["application_submission", "resume_upload", "employer_message", "interview_booking"]),
    requiresExplicitUserInput: true,
    forbidsLocationPermission: true,
    forbidsExecution: true,
    forbidsProviderContact: true,
    forbidsBackendWrites: true,
    citationRequired: true,
    confidenceRequired: true,
    auditCategory: "live-source.job-search",
    providerStatus: "fixture_only"
  },
  {
    providerId: "shipment-tracking",
    displayName: "Shipment Tracking Provider",
    sourceType: "tracking-reference-source",
    domain: "logistics",
    riskTier: "medium",
    defaultEnabled: false,
    requiredFlags: ["NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED", "NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED"],
    requiredSecrets: ["NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY"],
    optionalConfig: ["NEXUS_SHIPMENT_TRACKING_PUBLIC_SOURCE_ENDPOINT"],
    supportsLiveCall: false,
    supportsMockCall: true,
    supportsFixtureCall: true,
    allowedIntents: ["shipment tracking lookup"],
    blockedActions: BLOCKED_REAL_WORLD_ACTIONS.concat(["carrier_login", "address_exposure", "route_control", "dispatch"]),
    requiresExplicitUserInput: true,
    forbidsLocationPermission: true,
    forbidsExecution: true,
    forbidsProviderContact: true,
    forbidsBackendWrites: true,
    citationRequired: true,
    confidenceRequired: true,
    auditCategory: "live-source.shipment-tracking",
    providerStatus: "fixture_only"
  },
  {
    providerId: "music-media",
    displayName: "Music and Media Information Provider",
    sourceType: "media-information-source",
    domain: "music-media",
    riskTier: "low",
    defaultEnabled: false,
    requiredFlags: ["NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED", "NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED"],
    requiredSecrets: ["NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY"],
    optionalConfig: ["NEXUS_MUSIC_MEDIA_PUBLIC_SOURCE_ENDPOINT"],
    supportsLiveCall: false,
    supportsMockCall: true,
    supportsFixtureCall: true,
    allowedIntents: ["music information lookup", "media information lookup"],
    blockedActions: BLOCKED_REAL_WORLD_ACTIONS.concat(["paid_streaming_action", "account_login", "copyrighted_content_dumping"]),
    requiresExplicitUserInput: true,
    forbidsLocationPermission: true,
    forbidsExecution: true,
    forbidsProviderContact: true,
    forbidsBackendWrites: true,
    citationRequired: true,
    confidenceRequired: true,
    auditCategory: "live-source.music-media",
    providerStatus: "fixture_only"
  }
]);

function getLiveProviderCapabilityRegistry() {
  return LIVE_PROVIDER_CAPABILITY_REGISTRY;
}

function getLiveProviderCapability(providerId) {
  return LIVE_PROVIDER_CAPABILITY_REGISTRY.find(provider => provider.providerId === providerId) || null;
}

function redactProviderSecrets(provider) {
  if (!provider) return null;
  return Object.freeze({
    ...provider,
    requiredSecrets: provider.requiredSecrets.map(secretName => ({
      name: secretName,
      value: "[redacted]",
      exposed: false
    }))
  });
}

module.exports = Object.freeze({
  LIVE_PROVIDER_STATUSES,
  BLOCKED_REAL_WORLD_ACTIONS,
  LIVE_PROVIDER_CAPABILITY_REGISTRY,
  getLiveProviderCapabilityRegistry,
  getLiveProviderCapability,
  redactProviderSecrets
});
