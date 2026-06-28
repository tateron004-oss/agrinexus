const dialogue = require("../public/nexus-assistant-dialogue-engine-contract.js");
const weather = require("./nexus-weather-source-provider.js");
const newsSecurity = require("./nexus-news-security-source-provider.js");
const shipment = require("./nexus-shipment-tracking-source-provider.js");
const jobs = require("./nexus-job-search-source-provider.js");
const agriculture = require("./nexus-agriculture-context-source-provider.js");
const musicMedia = require("./nexus-music-media-source-provider.js");

function isPreviewEnabled(env = process.env) {
  return env.NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED === "true";
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function buildProviderRequiredResult(intentType, input) {
  return {
    sourceResultId: `assistant-preview-provider-required-${intentType}`,
    requestType: intentType === "conflict-security" ? "news-security" : intentType,
    providerName: "assistant-live-source-preview",
    providerMode: "fixture",
    sourceName: "Provider Required",
    sourceCategory: intentType,
    sourceUrl: "provider-required",
    query: String(input || "assistant request"),
    resultSummary: "A configured source provider is required before Nexus can return a source-backed current answer.",
    rawResultAvailable: false,
    retrievedAt: new Date(0).toISOString(),
    lastUpdated: new Date(0).toISOString(),
    freshnessStatus: "unavailable",
    confidenceLevel: "low",
    limitationNotes: "No live source lookup occurred in default-off preview mode.",
    evidenceStatus: "source-unavailable",
    sourceStatus: "provider-required",
    readOnly: true,
    noExecutionRequired: true,
    executionAuthority: false
  };
}

function extractLocationFromClassification(classification, context) {
  if (hasText(classification.location)) return classification.location;
  if (context && hasText(context.lastLocation)) return context.lastLocation;
  if (context && hasText(context.lastCountry)) return context.lastCountry;
  return "";
}

function routeSourceResult(input, classification, context, env) {
  if (!isPreviewEnabled(env)) return buildProviderRequiredResult(classification.intentType, input);

  if (classification.intentType === "weather") {
    return weather.getWeatherSourceResult({
      locationText: extractLocationFromClassification(classification, context),
      timeframe: /tomorrow/i.test(input) ? "tomorrow" : "current"
    }, env);
  }

  if (classification.intentType === "conflict-security" || classification.intentType === "current-events-news") {
    return newsSecurity.getNewsSecuritySourceResult({
      regionOrTopic: extractLocationFromClassification(classification, context) || input
    }, env);
  }

  if (classification.intentType === "shipment-tracking") {
    return shipment.getShipmentTrackingSourceResult({ query: input }, env);
  }

  if (classification.intentType === "job-search") {
    return jobs.getJobSearchSourceResult({
      query: input,
      locationText: extractLocationFromClassification(classification, context) || (/(kenya|nairobi)/i.test(input) ? "Nairobi" : "")
    }, env);
  }

  if (classification.intentType === "agriculture-context" || classification.intentType === "agriculture-help") {
    return agriculture.getAgricultureContextSourceResult({
      topic: input,
      locationText: extractLocationFromClassification(classification, context)
    }, env);
  }

  if (classification.intentType === "music-media") {
    return musicMedia.getMusicMediaSourceResult({
      mediaRequest: input,
      providerPreference: /spotify/i.test(input) ? "Spotify" : ""
    }, env);
  }

  return buildProviderRequiredResult(classification.intentType, input);
}

function buildAssistantLiveSourcePreview(input, context = {}, env = process.env) {
  const assistantPreview = dialogue.buildAssistantDialoguePreview(input, context);
  const classification = dialogue.classifyAssistantDialogueIntent(input, context);
  const highRiskExecutionIntent = [
    "calls-messaging-intent",
    "appointment-service-request",
    "payment-mobile-money-intent",
    "location-dispatch-intent",
    "camera-image-intent",
    "emergency-intent",
    "medical-pharmacy-intent",
    "marketplace-request"
  ].includes(classification.intentType);

  const sourceResult = highRiskExecutionIntent
    ? buildProviderRequiredResult(classification.intentType, input)
    : routeSourceResult(input, classification, context, env);

  const applicationPreparationPreview = ["job-application-preparation", "resume-cover-letter-preparation"].includes(classification.intentType)
    ? jobs.buildApplicationPreparationPreview({ requiredSkills: [], missingSkills: [] })
    : null;

  return Object.freeze({
    previewId: `assistant-live-source-preview-${classification.intentType}`,
    sourcePreviewEnabled: isPreviewEnabled(env),
    assistantPreview,
    sourceResult,
    applicationPreparationPreview,
    spokenSummary: assistantPreview.spokenSummary,
    displayDetails: assistantPreview.displayDetails,
    evidenceSummary: sourceResult.resultSummary,
    freshnessStatus: sourceResult.freshnessStatus,
    confidenceLevel: sourceResult.confidenceLevel,
    limitationNotes: sourceResult.limitationNotes,
    clarificationQuestion: assistantPreview.clarificationQuestion,
    safetyNotice: assistantPreview.safetyNotice,
    nextSafeOptions: assistantPreview.nextSafeOptions,
    noExecutionRequired: true,
    executionAuthority: false
  });
}

function isSafeAssistantLiveSourcePreview(preview) {
  if (!preview || typeof preview !== "object" || Array.isArray(preview)) return false;
  if (preview.noExecutionRequired !== true || preview.executionAuthority !== false) return false;
  if (!dialogue.isSafeAssistantDialoguePreview(preview.assistantPreview)) return false;
  if (!preview.sourceResult || preview.sourceResult.noExecutionRequired !== true || preview.sourceResult.executionAuthority !== false) return false;
  if (preview.applicationPreparationPreview) {
    if (preview.applicationPreparationPreview.applicationSubmissionAuthority !== false) return false;
    if (preview.applicationPreparationPreview.executionAuthority !== false) return false;
  }
  return true;
}

module.exports = Object.freeze({
  isPreviewEnabled,
  buildProviderRequiredResult,
  routeSourceResult,
  buildAssistantLiveSourcePreview,
  isSafeAssistantLiveSourcePreview
});
