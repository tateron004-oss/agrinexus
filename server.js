const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const net = require("net");
const tls = require("tls");
const { classifyNexusIntent } = require("./public/nexus-intent-classifier.js");
const { buildNexusPolicyDecision, validateNexusPolicyDecision } = require("./public/nexus-policy-engine.js");
const { createNexusPlan, validateNexusPlan } = require("./public/nexus-planner.js");
const nexusAssistantRuntime = require("./server/nexus-assistant-runtime-entrypoint.js");
const nexusStandardUserAgentExperience = require("./server/nexus-standard-user-agent-experience.js");
const nexusProductionRuntime = require("./server/nexusProductionRuntime.js");
const nexusAgenticBrainRuntime = require("./server/nexusAgenticBrainRuntime.js");
const nexusRealProviders = require("./server/providers");
const nexusDemoProviderDataset = require("./server/nexus-demo-provider-dataset.js");
const nexusUserTestingRuntime = require("./server/nexus-user-testing-runtime.js");
const nexusTelehealthProvider = require("./server/telehealth/provider.js");
const nexusInternetIntegrationAudit = require("./public/nexus-internet-services-integration-audit.js");
const nexusPersistentMemory = require("./public/nexus-persistent-memory.js");
const nexusTelephonyCallRuntime = require("./public/nexus-telephony-call-runtime.js");
const nexusMessagePreparationRuntime = require("./public/nexus-message-preparation-runtime.js");
const nexusFullCommunicationRuntime = require("./public/nexus-full-communication-runtime.js");
const nexusHealthcareCollaborationRuntime = require("./public/nexus-healthcare-collaboration-runtime.js");
const nexusAgricultureCollaborationRuntime = require("./public/nexus-agriculture-collaboration-runtime.js");
const nexusUnifiedBrainRuntime = require("./public/nexus-unified-brain-runtime.js");
const nexusMentalHealthBehavioralWellness = require("./public/nexus-mental-health-behavioral-wellness.js");
const nexusEnterpriseHealthEvidenceTrust = require("./public/nexus-enterprise-health-evidence-trust.js");
const nexusGenesisPredictiveWorkforce = require("./public/nexus-genesis-predictive-workforce.js");
const nexusGenesisAfricaAgOpportunity = require("./public/nexus-genesis-africa-ag-opportunity.js");
const nexusGenesisProviderAbstraction = require("./public/nexus-genesis-provider-abstraction.js");
const nexusGenesisProviderOrchestration = require("./public/nexus-genesis-provider-orchestration.js");
const nexusGenesisConversationalModeOrchestrator = require("./public/nexus-genesis-conversational-mode-orchestrator.js");
const nexusOsAgriNexusDeploymentProfile = require("./public/nexus-os-agrinexus-deployment-profile.js");
const nexusOsHealthWorkforceSafetyPack = require("./public/nexus-os-health-workforce-safety-pack.js");
const nexusOsHealthNexusReferenceProfile = require("./public/nexus-os-healthnexus-reference-profile.js");
const nexusOsControlPlane = require("./server/nexusOsControlPlane.js");
const nexusWeatherSourceProvider = require("./server/nexus-weather-source-provider.js");
const nexusMusicMediaSourceProvider = require("./server/nexus-music-media-source-provider.js");
const googleCloudTranslationProvider = require("./server/google-cloud-translation-provider.js");
const cloudinaryProvider = require("./server/cloudinary-provider.js");
const {
  isUsableEnvValue,
  loadLocalEnvFiles
} = require("./server/local-env-loader.js");

const APP_ROOT = __dirname;

const NEXUS_LOCAL_ENV_LOAD_REPORT = process.env.NEXUS_DISABLE_LOCAL_ENV_FILES === "true"
  ? []
  : loadLocalEnvFiles(APP_ROOT);

const PORT = Number(process.env.PORT || 4173);
const IS_HOSTED = process.env.NODE_ENV === "production" || Boolean(process.env.RENDER || process.env.RENDER_SERVICE_ID || process.env.RENDER_EXTERNAL_URL);
const HOST = process.env.HOST || (IS_HOSTED ? "0.0.0.0" : "127.0.0.1");
const AI_MODEL = process.env.OPENAI_MODEL || "gpt-5.4-mini";
const AI_REASONING_MODEL = process.env.OPENAI_REASONING_MODEL || process.env.OPENAI_AGENT_MODEL || AI_MODEL;
const AI_TRANSLATION_MODEL = process.env.OPENAI_TRANSLATION_MODEL || process.env.OPENAI_AGENT_MODEL || AI_MODEL;
const AGRINEXUS_RELEASE = "2026-06-16-operational-readiness";
const AGRINEXUS_WEB_BUILD_VERSION = "nexus-behavior-503";
const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v448";
const NEXUS_GENESIS_REALTIME_RUNTIME_VERSION = "nexus-genesis-openai-agents-realtime-v3";
const NEXUS_GENESIS_VOICE_RUNTIME_VALUES = new Set(["realtime", "disabled"]);
const NEXUS_GENESIS_REALTIME_FALLBACK_VALUES = new Set(["blocked"]);
const NEXUS_REALTIME_ALLOWED_MODELS = new Set(["gpt-realtime", "gpt-realtime-mini", "gpt-realtime-2", "gpt-realtime-2.1"]);
const NEXUS_REALTIME_ALLOWED_VOICES = new Set(["marin", "cedar", "alloy", "ash", "ballad", "coral", "echo", "sage", "shimmer", "verse"]);
const PRODUCT_IDENTITY = Object.freeze({
  productName: "Nexus Genesis | AgriNexus",
  assistantName: "Nexus",
  edition: "genesis",
  legacyProductName: "AgriNexus"
});
const ROOT = __dirname;
const DATA_DIR = process.env.AGRINEXUS_DATA_DIR || ROOT;
const DB_PATH = process.env.AGRINEXUS_DB_PATH || path.join(DATA_DIR, "db.json");
const PUBLIC = path.join(ROOT, "public");
const REQUIRE_LIVE_SERVICES = process.env.AGRINEXUS_REQUIRE_LIVE_SERVICES === "true";
const STATE_STORE = process.env.AGRINEXUS_STATE_STORE || "json";
const PROVIDER_WEBHOOK_TIMEOUT_MS = Number(process.env.PROVIDER_WEBHOOK_TIMEOUT_MS || 3000);
const LIVE_SERVICE_TIMEOUT_MS = Number(process.env.LIVE_SERVICE_TIMEOUT_MS || 3000);
const sessions = new Map();
const genesisVoiceGuestSessions = new Map();
const rateBuckets = new Map();
const phoneAudioCache = new Map();
const spotifyOAuthStates = new Map();

function productIdentityMetadata() {
  return { ...PRODUCT_IDENTITY };
}

function sendProviderResult(res, result) {
  return send(res, result.httpStatus || 200, result.body || result);
}

function envValuePresent(env, name) {
  return isUsableEnvValue(env[name]);
}

function firstPresentEnvValue(env, names) {
  const name = names.find(candidate => envValuePresent(env, candidate));
  return name ? String(env[name] || "").trim() : "";
}

function missingEnvNames(env, names) {
  return names.filter(name => !envValuePresent(env, name));
}

function maskPhoneNumber(value = "") {
  const text = String(value || "").trim();
  const digits = text.replace(/\D/g, "");
  if (digits.length < 4) return "";
  const suffix = digits.slice(-4);
  const prefix = text.startsWith("+") ? "+" : "";
  const country = digits.length > 10 ? digits.slice(0, Math.max(1, digits.length - 10)) : "";
  return `${prefix}${country}${"*".repeat(6)}${suffix}`;
}

function readinessStatus({ enabled = true, missingConfig = [], defaultState = "ready", disabledState = "disabled" }) {
  if (!enabled) return disabledState;
  if (missingConfig.length) return "missing_config";
  return defaultState;
}

function providerReadinessCard({
  id,
  title,
  providerName,
  enabled,
  missingConfig = [],
  testability,
  detail,
  canTestNow,
  stillNeeded = [],
  requiresConfirmation = false,
  requiresSandboxAccount = false,
  recipient = null
}) {
  return {
    id,
    title,
    providerName,
    enabled,
    configured: missingConfig.length === 0,
    missingConfig,
    testability,
    status: testability === "ready" ? "Ready" :
      testability === "missing_config" ? "Missing configuration" :
      testability === "read_only" ? "Read-only" :
      testability === "local_only" ? "Local-only" :
      testability === "blocked" ? "Blocked" :
      testability === "disabled" ? "Disabled" : "Requires review",
    detail,
    canTestNow,
    stillNeeded,
    requiresConfirmation,
    requiresSandboxAccount,
    recipient
  };
}

function nexusPersistentMemoryStatus(env = process.env, fallbackScope = "local_file_or_dev_store") {
  return nexusPersistentMemory.persistenceStatus(env, fallbackScope);
}

function nexusPersistentMemoryStore(db, env = process.env) {
  db.profile = db.profile || {};
  db.profile.nexusPersistentMemory = db.profile.nexusPersistentMemory || nexusPersistentMemory.emptyState(nexusPersistentMemoryStatus(env));
  const current = db.profile.nexusPersistentMemory;
  current.status = nexusPersistentMemoryStatus(env);
  const store = nexusPersistentMemory.createMemoryStore(current, { persistenceScope: current.status.persistenceScope, ownerRole: "Standard User" });
  return store;
}

function nexusRealProviderStatus(db, env = process.env) {
  const twilio = nexusRealProviders.twilio.status(env);
  const maps = nexusRealProviders.googleMaps.status(env);
  const npi = nexusRealProviders.npi.status(env);
  const moodle = nexusRealProviders.moodle.status(env);
  const zoom = nexusRealProviders.zoom.status(env);
  const dji = nexusRealProviders.dji.status(env);
  const marketplace = nexusRealProviders.marketplace.status(env);
  const marketplaceBridge = nexusRealProviders.marketplaceBridge.status(env);
  const mapsFieldVisitBridge = nexusRealProviders.mapsFieldVisitBridge.status(env);
  const offlineSync = nexusRealProviders.offlineSync.status(env);
  const reminders = nexusRealProviders.reminders.status(env);
  const stripe = nexusRealProviders.stripe.status(env);
  const providerContactBridge = nexusRealProviders.providerContactBridge.status(env);
  const learningBridge = nexusRealProviders.learningBridge.status(env);
  const communicationsBridge = nexusRealProviders.communicationsBridge.status(env);
  const droneMissionBridge = nexusRealProviders.droneMissionBridge.status(env);
  const offlineExpansionBridge = nexusRealProviders.offlineExpansionBridge.status(env);
  const sessionBridge = nexusRealProviders.sessionBridge.status(env);
  const lmsLiveBridge = nexusRealProviders.lmsLiveBridge.status(env);
  const paymentReadinessBridge = nexusRealProviders.paymentReadinessBridge.status(env);
  const workflowOrchestratorBridge = nexusRealProviders.workflowOrchestratorBridge.status(env);
  const medicalSupportBridge = nexusRealProviders.medicalSupportBridge.status(env);
  const chronicDiseaseBridge = nexusRealProviders.chronicDiseaseBridge.status(env);
  const rpmBridge = nexusRealProviders.rpmBridge.status(env);
  const rtmBridge = nexusRealProviders.rtmBridge.status(env);
  const telehealthBridge = nexusRealProviders.telehealthBridge.status(env);
  const mobileClinicBridge = nexusRealProviders.mobileClinicBridge.status(env);
  const pharmacyBridge = nexusRealProviders.pharmacyBridge.status(env);
  const patientSupportBridge = nexusRealProviders.patientSupportBridge.status(env);
  const mentalHealth = nexusMentalHealthBehavioralWellness.status(env);
  const healthEvidenceTrust = nexusEnterpriseHealthEvidenceTrust.status(env);
  const ownerRecipientValue = firstPresentEnvValue(env, ["OWNER_TEST_RECIPIENT_NUMBER", "TEST_RECIPIENT_NUMBER"]);
  const ownerRecipientConfigured = Boolean(ownerRecipientValue);
  const ownerRecipient = {
    envName: "OWNER_TEST_RECIPIENT_NUMBER",
    configured: ownerRecipientConfigured,
    masked: ownerRecipientConfigured ? maskPhoneNumber(ownerRecipientValue) : "",
    missingConfig: ownerRecipientConfigured ? [] : ["OWNER_TEST_RECIPIENT_NUMBER"]
  };
  const smsMissing = [...twilio.sms.missingConfig, ...ownerRecipient.missingConfig];
  const cards = [
    providerReadinessCard({
      id: "reminders",
      title: "Reminders",
      providerName: "Local reminders",
      enabled: reminders.enabled,
      testability: readinessStatus({ enabled: reminders.enabled, defaultState: "local_only" }),
      detail: "In-app reminders only; no OS notification permission requested.",
      canTestNow: reminders.enabled ? "Create a local in-app reminder from the visible testing control." : "Not available while reminders are disabled.",
      stillNeeded: reminders.enabled ? [] : ["Enable NEXUS_REMINDERS_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "sms",
      title: "SMS / Twilio",
      providerName: "Twilio SMS",
      enabled: twilio.sms.enabled,
      missingConfig: smsMissing,
      testability: readinessStatus({ enabled: twilio.sms.enabled, missingConfig: smsMissing }),
      detail: "Twilio SMS requires credentials, feature flag, visible recipient/message, owner test recipient, and confirmed: true.",
      canTestNow: twilio.sms.enabled && smsMissing.length === 0 ? "Send one owner-approved controlled SMS after explicit confirmation." : "Blocked until SMS flag, credentials, and owner test recipient are ready.",
      stillNeeded: [
        ...smsMissing.map(name => `Add ${name}`),
        ...(twilio.sms.enabled ? [] : ["Enable NEXUS_MESSAGES_ENABLED=true"])
      ],
      requiresConfirmation: true,
      recipient: ownerRecipient
    }),
    providerReadinessCard({
      id: "whatsapp",
      title: "WhatsApp / Twilio",
      providerName: "Twilio WhatsApp",
      enabled: twilio.whatsapp.enabled,
      missingConfig: twilio.whatsapp.missingConfig,
      testability: readinessStatus({ enabled: twilio.whatsapp.enabled, missingConfig: twilio.whatsapp.missingConfig }),
      detail: "Twilio WhatsApp requires sender setup, credentials, feature flag, and confirmed: true.",
      canTestNow: twilio.whatsapp.enabled && !twilio.whatsapp.missingConfig.length ? "Run a controlled WhatsApp sandbox test after explicit confirmation." : "Not ready for WhatsApp testing.",
      stillNeeded: [
        ...twilio.whatsapp.missingConfig.map(name => `Add ${name}`),
        ...(twilio.whatsapp.enabled ? [] : ["Enable NEXUS_WHATSAPP_ENABLED=true"])
      ],
      requiresConfirmation: true,
      requiresSandboxAccount: true
    }),
    providerReadinessCard({
      id: "calls",
      title: "Calls / Twilio Voice",
      providerName: "Twilio Voice",
      enabled: twilio.calls.enabled,
      missingConfig: twilio.calls.missingConfig,
      testability: readinessStatus({ enabled: twilio.calls.enabled, missingConfig: twilio.calls.missingConfig }),
      detail: "Twilio calls require explicit confirmation and never start from hidden assistant chains.",
      canTestNow: twilio.calls.enabled && !twilio.calls.missingConfig.length ? "Run one controlled owner-approved call after explicit confirmation." : "Not ready for live call testing.",
      stillNeeded: [
        ...twilio.calls.missingConfig.map(name => `Add ${name}`),
        ...(twilio.calls.enabled ? [] : ["Enable NEXUS_CALLS_ENABLED=true"])
      ],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "maps",
      title: "Google Maps",
      providerName: "Google Maps Routes API",
      enabled: maps.enabled,
      missingConfig: maps.missingConfig,
      testability: maps.enabled ? (maps.missingConfig.length ? "missing_config" : "ready") : "disabled",
      detail: "Routes use user-provided origin/destination only; no browser geolocation.",
      canTestNow: maps.missingConfig.length ? "Fallback URL can be tested now; live route computation needs a key." : "Compute a route from typed origin/destination after confirmation.",
      stillNeeded: [
        ...maps.missingConfig.map(name => `Add ${name}`),
        ...(maps.enabled ? [] : ["Enable NEXUS_MAPS_ENABLED=true"])
      ],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "maps-field-visit-bridge",
      title: "Maps Field Visit Bridge",
      providerName: "Nexus local maps field visit bridge",
      enabled: mapsFieldVisitBridge.enabled,
      testability: mapsFieldVisitBridge.enabled ? "local_only" : "disabled",
      detail: "Prepares field visit plans from typed origin/destination and selected safe records. No geolocation, provider contact, booking, dispatch, transport booking, or payment.",
      canTestNow: mapsFieldVisitBridge.enabled ? "Create a field visit plan, generate a route fallback, save, remind, or queue safe metadata after confirmation." : "Maps Field Visit Bridge disabled.",
      stillNeeded: [
        ...(mapsFieldVisitBridge.enabled ? [] : ["Enable NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED=true"]),
        ...(maps.missingConfig.length ? ["Add GOOGLE_MAPS_API_KEY for live distance/duration; fallback URL works without it."] : [])
      ],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "communications-bridge",
      title: "Communications Live Bridge",
      providerName: "Nexus communications bridge",
      enabled: communicationsBridge.enabled,
      missingConfig: communicationsBridge.ownerRecipient?.missingConfig || [],
      testability: communicationsBridge.enabled ? "confirmation_required" : "disabled",
      detail: "Drafts communications locally and delegates SMS, WhatsApp, and calls only through existing Twilio gates after explicit confirmation.",
      canTestNow: communicationsBridge.enabled ? "Prepare a draft now; live SMS/call/WhatsApp requires provider flags, credentials, recipient, and confirmation." : "Communications Bridge disabled.",
      stillNeeded: communicationsBridge.enabled ? (communicationsBridge.ownerRecipient?.missingConfig || []).map(name => `Add ${name}`) : ["Enable NEXUS_COMMUNICATIONS_BRIDGE_ENABLED=true"],
      requiresConfirmation: true,
      recipient: communicationsBridge.ownerRecipient
    }),
    providerReadinessCard({
      id: "drone-mission-bridge",
      title: "Drone Mission Request Bridge",
      providerName: "Nexus drone mission bridge",
      enabled: droneMissionBridge.enabled,
      testability: droneMissionBridge.enabled ? "local_only" : "disabled",
      detail: "Captures drone service intake requests only. No flight launch, aircraft control, mission dispatch, or emergency response.",
      canTestNow: droneMissionBridge.enabled ? "Create an intake-only drone mission request, reminder, or offline item after confirmation." : "Drone Mission Bridge disabled.",
      stillNeeded: droneMissionBridge.enabled ? [] : ["Enable NEXUS_DRONE_MISSION_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "offline-expansion-bridge",
      title: "Offline Sync Expansion Bridge",
      providerName: "Nexus offline expansion bridge",
      enabled: offlineExpansionBridge.enabled,
      testability: offlineExpansionBridge.enabled ? "local_only" : "disabled",
      detail: "Queues and syncs safe metadata only; executable or sensitive items are skipped.",
      canTestNow: offlineExpansionBridge.enabled ? "Queue a safe metadata item, list items, sync, or clear safe items after confirmation." : "Offline Expansion Bridge disabled.",
      stillNeeded: offlineExpansionBridge.enabled ? [] : ["Enable NEXUS_OFFLINE_EXPANSION_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "session-bridge",
      title: "Session / Zoom Bridge",
      providerName: "Nexus session bridge",
      enabled: sessionBridge.enabled,
      missingConfig: sessionBridge.zoom?.missingConfig || [],
      testability: sessionBridge.enabled ? "confirmation_required" : "disabled",
      detail: "Prepares sessions locally. Zoom creation remains configured/enabled/confirmed only, with no hidden invites or bookings.",
      canTestNow: sessionBridge.enabled ? "Prepare a session plan, reminder, or offline item; Zoom creation needs credentials and confirmation." : "Session Bridge disabled.",
      stillNeeded: sessionBridge.enabled ? (sessionBridge.zoom?.missingConfig || []).map(name => `Add ${name} for Zoom creation`) : ["Enable NEXUS_SESSION_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "lms-live-bridge",
      title: "LMS / Koachlearn Live Bridge",
      providerName: "Nexus LMS live bridge",
      enabled: lmsLiveBridge.enabled,
      missingConfig: lmsLiveBridge.moodle?.missingConfig || [],
      testability: lmsLiveBridge.enabled ? "read_only" : "disabled",
      detail: "Uses Moodle courses when configured and local learning fallback otherwise. Enrollment remains separately gated.",
      canTestNow: lmsLiveBridge.enabled ? "Load local learning fallback or live LMS courses if configured; prepare enrollment without enrolling." : "LMS Live Bridge disabled.",
      stillNeeded: lmsLiveBridge.enabled ? (lmsLiveBridge.moodle?.missingConfig || []).map(name => `Add ${name} for LMS lookup`) : ["Enable NEXUS_LMS_LIVE_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "payment-readiness-bridge",
      title: "Marketplace Payment Readiness Bridge",
      providerName: "Nexus payment readiness bridge",
      enabled: paymentReadinessBridge.enabled,
      missingConfig: paymentReadinessBridge.stripe?.missingConfig || [],
      testability: paymentReadinessBridge.enabled ? "sandbox_only" : "disabled",
      detail: "Shows Stripe sandbox readiness only. Checkout, escrow, production payments, and money movement remain disabled by default.",
      canTestNow: paymentReadinessBridge.enabled ? "Run a readiness check; payment intent remains sandbox-gated, configured, confirmed, and blocked by existing Stripe compliance posture." : "Payment Readiness Bridge disabled.",
      stillNeeded: paymentReadinessBridge.enabled ? (paymentReadinessBridge.stripe?.missingConfig || []).map(name => `Add ${name} for sandbox readiness`) : ["Enable NEXUS_PAYMENT_READINESS_BRIDGE_ENABLED=true"],
      requiresConfirmation: true,
      requiresSandboxAccount: true
    }),
    providerReadinessCard({
      id: "workflow-orchestrator-bridge",
      title: "Unified Workflow Orchestrator Bridge",
      providerName: "Nexus workflow orchestrator bridge",
      enabled: workflowOrchestratorBridge.enabled,
      testability: workflowOrchestratorBridge.enabled ? "local_only" : "disabled",
      detail: "Creates multi-step bridge plans and coordinates readiness. It does not silently execute messages, calls, payments, bookings, drone actions, or location sharing.",
      canTestNow: workflowOrchestratorBridge.enabled ? "Create, save, remind, or queue a workflow plan after confirmation." : "Workflow Orchestrator Bridge disabled.",
      stillNeeded: workflowOrchestratorBridge.enabled ? [] : ["Enable NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "medical-support-bridge",
      title: "Medical Support Bridge",
      providerName: "Nexus medical support provider layer",
      enabled: medicalSupportBridge.enabled,
      testability: medicalSupportBridge.enabled ? "preparation_only" : "disabled",
      detail: "Health access, provider-review, telehealth, mobile clinic, pharmacy, and patient navigation preparation only. No diagnosis, prescribing, booking, contact, payment, or emergency dispatch.",
      canTestNow: medicalSupportBridge.enabled ? "Create local intakes, summaries, provider-review reports, reminders, and safe offline metadata after confirmation." : "Medical Support Bridge disabled.",
      stillNeeded: medicalSupportBridge.enabled ? [] : ["Enable NEXUS_MEDICAL_SUPPORT_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "mental-health-behavioral-wellness",
      title: "Mental Health & Behavioral Wellness",
      providerName: "Nexus mental-health support engine",
      enabled: mentalHealth.enabled,
      missingConfig: mentalHealth.missingConfig,
      testability: mentalHealth.missingConfig.length ? "missing_config" : "local_support_ready",
      detail: "Supportive dialogue, crisis override, privacy controls, evidence metadata, and provider-search readiness. No diagnosis, prescribing, fake referral, appointment booking, provider contact, or emergency dispatch.",
      canTestNow: "Run local supportive conversation, crisis classification, privacy-control, and provider-readiness checks. Live provider search requires approved source configuration.",
      stillNeeded: [
        ...mentalHealth.missingConfig.map(name => `Add ${name}`),
        "Clinical/source governance before presenting provider availability as current",
        "Jurisdiction-approved crisis/provider resource registry before live handoff"
      ],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "enterprise-health-evidence-trust",
      title: "Enterprise Health Evidence Trust",
      providerName: "Nexus HealthEvidenceTrustService",
      enabled: healthEvidenceTrust.enabled,
      testability: healthEvidenceTrust.enabled ? "professional_inspection_ready" : "disabled",
      detail: "Platform-wide health evidence tiers, source governance, domain maps, predictive governance, and professional-inspection receipts. No diagnosis, prescribing, unvalidated prediction, provider contact, emergency dispatch, or fake citation.",
      canTestNow: healthEvidenceTrust.enabled ? "Inspect diabetes, hypertension, obesity, RPM/RTM, medication, lab, telehealth, pharmacy, mental-health, and social-care evidence governance packets." : "Enterprise Health Evidence Trust disabled.",
      stillNeeded: healthEvidenceTrust.enabled ? [
        "Live source version monitoring before clinical citation activation",
        "Real professional governance records before endorsement claims",
        "Jurisdiction-specific source approval before localized clinical recommendations"
      ] : ["Set NEXUS_ENTERPRISE_HEALTH_EVIDENCE_ENABLED=true"],
      requiresConfirmation: false
    }),
    providerReadinessCard({
      id: "chronic-disease-bridge",
      title: "Chronic Disease Bridge",
      providerName: "Nexus DM/HTN/obesity support",
      enabled: chronicDiseaseBridge.enabled,
      testability: chronicDiseaseBridge.enabled ? "preparation_only" : "disabled",
      detail: "Diabetes Mellitus, hypertension, obesity, and cardiometabolic reading organization for provider review only.",
      canTestNow: chronicDiseaseBridge.enabled ? "Create chronic intakes, manual readings, trend summaries, and provider-review reports." : "Chronic Disease Bridge disabled.",
      stillNeeded: chronicDiseaseBridge.enabled ? [] : ["Enable NEXUS_CHRONIC_DISEASE_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "rpm-bridge",
      title: "RPM Remote Patient Monitoring",
      providerName: "Nexus RPM bridge",
      enabled: rpmBridge.enabled,
      testability: rpmBridge.enabled ? "local_only" : "disabled",
      detail: "Manual blood pressure, glucose, pulse, weight, oxygen saturation, and temperature organization. No device connection or automated alert.",
      canTestNow: rpmBridge.enabled ? "Save manual RPM readings, trend summaries, provider reports, reminders, and offline metadata." : "RPM Bridge disabled.",
      stillNeeded: rpmBridge.enabled ? [] : ["Enable NEXUS_RPM_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "rtm-bridge",
      title: "RTM Remote Therapeutic Monitoring",
      providerName: "Nexus RTM bridge",
      enabled: rtmBridge.enabled,
      testability: rtmBridge.enabled ? "local_only" : "disabled",
      detail: "Activity, education, participation, and adherence-discussion organization only. No therapeutic prescription or medication change.",
      canTestNow: rtmBridge.enabled ? "Save RTM entries, participation summaries, provider reports, reminders, and offline metadata." : "RTM Bridge disabled.",
      stillNeeded: rtmBridge.enabled ? [] : ["Enable NEXUS_RTM_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "telehealth-provider-bridge",
      title: "Telehealth Provider Bridge",
      providerName: "Nexus telehealth/video readiness bridge",
      enabled: telehealthBridge.enabled,
      missingConfig: [
        ...(telehealthBridge.videoProviders?.zoom?.missingConfig || []),
        ...(telehealthBridge.videoProviders?.twilioVideo?.enabled ? (telehealthBridge.videoProviders?.twilioVideo?.missingConfig || []) : []),
        ...(telehealthBridge.videoProviders?.daily?.enabled ? (telehealthBridge.videoProviders?.daily?.missingConfig || []) : []),
        ...(telehealthBridge.videoProviders?.doxy?.enabled ? (telehealthBridge.videoProviders?.doxy?.missingConfig || []) : [])
      ],
      testability: telehealthBridge.enabled ? "confirmation_required" : "disabled",
      detail: "Local telehealth preparation works without credentials. Zoom/Twilio Video/Daily/Doxy require provider config, feature flags, and explicit confirmation.",
      canTestNow: telehealthBridge.enabled ? "Prepare and save local telehealth sessions; live video providers stay missing-config/disabled unless configured." : "Telehealth Bridge disabled.",
      stillNeeded: telehealthBridge.enabled ? ["Add video provider credentials only for approved testing"] : ["Enable NEXUS_TELEHEALTH_BRIDGE_ENABLED=true"],
      requiresConfirmation: true,
      requiresSandboxAccount: true
    }),
    providerReadinessCard({
      id: "mobile-clinic-bridge",
      title: "Mobile Clinic Bridge",
      providerName: "Nexus local mobile clinic catalog",
      enabled: mobileClinicBridge.enabled,
      testability: mobileClinicBridge.enabled ? "local_only" : "disabled",
      detail: "Local rural/mobile clinic search, intake, visit plans, reminders, and offline metadata. No appointment, triage, geolocation, clinic contact, or dispatch.",
      canTestNow: mobileClinicBridge.enabled ? "Search local mobile clinic options and prepare visit plans from typed locations." : "Mobile Clinic Bridge disabled.",
      stillNeeded: mobileClinicBridge.enabled ? [] : ["Enable NEXUS_MOBILE_CLINIC_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "pharmacy-bridge",
      title: "Pharmacy Bridge",
      providerName: "Nexus pharmacy question bridge",
      enabled: pharmacyBridge.enabled,
      testability: pharmacyBridge.enabled ? "local_only" : "disabled",
      detail: "Local pharmacy search and pharmacist question drafting only. No refills, transfers, dispensing, dosage advice, payment, or pharmacy contact.",
      canTestNow: pharmacyBridge.enabled ? "Search pharmacy options, draft safe pharmacist questions, save, remind, and queue offline metadata." : "Pharmacy Bridge disabled.",
      stillNeeded: pharmacyBridge.enabled ? [] : ["Enable NEXUS_PHARMACY_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "patient-support-bridge",
      title: "Patient Support Bridge",
      providerName: "Nexus patient navigation resources",
      enabled: patientSupportBridge.enabled,
      testability: patientSupportBridge.enabled ? "local_only" : "disabled",
      detail: "Health literacy, CHW, rural support, RPM/RTM participation, and navigation resources. No eligibility, claims, referrals, or automatic contact.",
      canTestNow: patientSupportBridge.enabled ? "Search local patient support resources, save, remind, and queue offline metadata." : "Patient Support Bridge disabled.",
      stillNeeded: patientSupportBridge.enabled ? [] : ["Enable NEXUS_PATIENT_SUPPORT_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "medical-provider-search",
      title: "CMS/NPI Provider Search",
      providerName: "CMS NPPES NPI Registry",
      enabled: npi.enabled,
      missingConfig: [],
      testability: npi.enabled ? "read_only" : "disabled",
      detail: "CMS NPPES public lookup only; no booking, diagnosis, or health data sharing.",
      canTestNow: npi.enabled ? "Search public provider directory records with city/state/specialty." : "Provider search disabled.",
      stillNeeded: npi.enabled ? [] : ["Enable NEXUS_PROVIDER_SEARCH_ENABLED=true"]
    }),
    providerReadinessCard({
      id: "provider-contact-bridge",
      title: "Provider Contact Bridge",
      providerName: "Nexus local provider bridge",
      enabled: providerContactBridge.enabled,
      testability: providerContactBridge.enabled ? "local_only" : "disabled",
      detail: "Connects public provider cards to route preview, local save, non-sensitive notes, reminders, and confirmed SMS/call preparation.",
      canTestNow: providerContactBridge.enabled ? "Use a provider search result card to prepare route, SMS, call, save, note, or reminder actions." : "Provider Contact Bridge disabled.",
      stillNeeded: providerContactBridge.enabled ? [] : ["Enable NEXUS_PROVIDER_CONTACT_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "learning-lms",
      title: "Moodle/Koachlearn LMS",
      providerName: "Moodle-compatible LMS",
      enabled: moodle.enabled,
      missingConfig: moodle.missingConfig,
      testability: readinessStatus({ enabled: moodle.enabled, missingConfig: moodle.missingConfig }),
      detail: "Moodle-compatible course lookup; enrollment remains separately gated.",
      canTestNow: moodle.enabled && !moodle.missingConfig.length ? "Lookup LMS courses." : "Not ready for LMS lookup.",
      stillNeeded: [
        ...moodle.missingConfig.map(name => `Add ${name}`),
        ...(moodle.enabled ? [] : ["Enable NEXUS_LMS_ENABLED=true"])
      ]
    }),
    providerReadinessCard({
      id: "learning-provider-bridge",
      title: "Learning Provider Bridge",
      providerName: "Nexus local learning bridge",
      enabled: learningBridge.enabled,
      missingConfig: [],
      testability: learningBridge.enabled ? "local_only" : "disabled",
      detail: "Searches the local learning catalog now and can merge Moodle courses when LMS credentials are configured.",
      canTestNow: learningBridge.enabled ? "Search local learning resources, view details, save, add a reminder, or queue safe metadata for offline review." : "Learning Provider Bridge disabled.",
      stillNeeded: learningBridge.enabled ? [] : ["Enable NEXUS_LEARNING_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "zoom",
      title: "Zoom Sessions",
      providerName: "Zoom server-to-server OAuth",
      enabled: zoom.enabled,
      missingConfig: zoom.missingConfig,
      testability: readinessStatus({ enabled: zoom.enabled, missingConfig: zoom.missingConfig }),
      detail: "Meeting creation requires Zoom server credentials and confirmed: true.",
      canTestNow: zoom.enabled && !zoom.missingConfig.length ? "Create a controlled Zoom test meeting after explicit confirmation." : "Not ready for Zoom meeting testing.",
      stillNeeded: [
        ...zoom.missingConfig.map(name => `Add ${name}`),
        ...(zoom.enabled ? [] : ["Enable NEXUS_ZOOM_ENABLED=true"])
      ],
      requiresConfirmation: true,
      requiresSandboxAccount: true
    }),
    providerReadinessCard({
      id: "drones",
      title: "DJI",
      providerName: "DJI Cloud API",
      enabled: dji.enabled,
      missingConfig: dji.missingConfig,
      testability: readinessStatus({ enabled: dji.enabled, missingConfig: dji.missingConfig }),
      detail: "DJI Cloud API shell supports status and mission intake only; no flight control.",
      canTestNow: dji.enabled && !dji.missingConfig.length ? "Check status and submit intake-only mission requests; no flight execution." : "Not ready for DJI status testing.",
      stillNeeded: [
        ...dji.missingConfig.map(name => `Add ${name}`),
        ...(dji.enabled ? [] : ["Enable NEXUS_DRONES_ENABLED=true"])
      ],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "marketplace",
      title: "AgriTrade Marketplace",
      providerName: "AgriTrade local marketplace",
      enabled: marketplace.enabled,
      testability: marketplace.enabled ? "local_only" : "disabled",
      detail: "Local AgriTrade listing creation only; no buyer contact, checkout, or payment.",
      canTestNow: marketplace.enabled ? "Create a local review listing after explicit confirmation." : "Marketplace testing disabled.",
      stillNeeded: marketplace.enabled ? [] : ["Enable NEXUS_MARKETPLACE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "marketplace-bridge",
      title: "AgriTrade Marketplace Bridge",
      providerName: "Nexus local marketplace bridge",
      enabled: marketplaceBridge.enabled,
      testability: marketplaceBridge.enabled ? "local_only" : "disabled",
      detail: "Browse local starter listings, create local test listings, prepare inquiry drafts, save notes, reminders, and offline metadata without payments.",
      canTestNow: marketplaceBridge.enabled ? "Search listings, create a local listing, prepare inquiry drafts, save notes, add reminders, and queue safe metadata." : "Marketplace Bridge disabled.",
      stillNeeded: marketplaceBridge.enabled ? [] : ["Enable NEXUS_MARKETPLACE_BRIDGE_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "offline-sync",
      title: "Offline Sync",
      providerName: "Local offline sync",
      enabled: offlineSync.enabled,
      testability: offlineSync.enabled ? "local_only" : "disabled",
      detail: "Safe local queue/sync only; sensitive or high-risk actions are skipped.",
      canTestNow: offlineSync.enabled ? "Queue and sync safe local-only records." : "Offline sync testing disabled.",
      stillNeeded: offlineSync.enabled ? [] : ["Enable NEXUS_OFFLINE_SYNC_ENABLED=true"],
      requiresConfirmation: true
    }),
    providerReadinessCard({
      id: "stripe-payments",
      title: "Stripe Payments",
      providerName: "Stripe sandbox",
      enabled: stripe.enabled,
      missingConfig: stripe.missingConfig,
      testability: stripe.enabled ? (stripe.missingConfig.length ? "missing_config" : "blocked") : "disabled",
      detail: "Stripe payment intent route remains blocked until marketplace compliance and Connect setup are approved.",
      canTestNow: "Review disabled/blocked payment posture only; do not process payments.",
      stillNeeded: [
        ...stripe.missingConfig.map(name => `Add ${name}`),
        ...(stripe.enabled ? [] : ["Keep payments disabled until sandbox test is intentionally approved"]),
        "Use Stripe sandbox only",
        "Complete marketplace compliance and Connect setup approval"
      ],
      requiresConfirmation: true,
      requiresSandboxAccount: true
    })
  ];
  return {
    ok: true,
    provider: "nexus-real-provider-testing",
    action: "providers.status",
    status: "completed",
    cards,
    readiness: cards,
    demoProviderCatalog: nexusDemoProviderDataset.summarizeDemoProviders(),
    demoProviderSample: nexusDemoProviderDataset.getNexusDemoProviders().slice(0, 12),
    ownerTestRecipient: ownerRecipient,
    generatedAt: new Date().toISOString(),
    safety: {
      noHiddenExecution: true,
      standardUserRuntimeTestingOnly: true,
      noSecretsExposed: true,
      storedLocalCounts: {
        reminders: (db.profile?.nexusReminders || []).length,
        savedProviders: (db.profile?.nexusSavedProviders || []).length,
        providerNotes: (db.profile?.nexusProviderNotes || []).length,
        savedLearningResources: (db.profile?.nexusSavedLearningResources || []).length,
        marketplaceNotes: (db.profile?.nexusMarketplaceNotes || []).length,
        marketplaceListings: (db.profile?.marketplaceListings || []).length,
        offlineQueue: (db.profile?.offlineQueue || []).length,
        droneMissionRequests: (db.profile?.droneMissionRequests || []).length,
        medicalSupportIntakes: (db.profile?.nexusMedicalSupportIntakes || []).length,
        chronicDiseaseReadings: (db.profile?.nexusChronicDiseaseReadings || []).length,
        rpmReadings: (db.profile?.nexusRpmDeviceReadings || []).length,
        rtmEntries: (db.profile?.nexusRtmActivityEntries || []).length,
        telehealthSessions: (db.profile?.nexusTelehealthBridgeSessions || []).length,
        mobileClinicIntakes: (db.profile?.nexusMobileClinicIntakes || []).length,
        pharmacyIntakes: (db.profile?.nexusPharmacyIntakes || []).length,
        patientSupportIntakes: (db.profile?.nexusPatientSupportIntakes || []).length
      }
    }
  };
}

function assistantRuntimePreviewFlags(env = process.env) {
  const liveSourceRetrievalEnabled = env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true";
  const assistantDialogueLivePreviewEnabled = env.NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED === "true";
  const standardUserLiveSourcePreviewEnabled = env.NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED === "true";
  return Object.freeze({
    liveSourceRetrievalEnabled,
    assistantDialogueLivePreviewEnabled,
    standardUserLiveSourcePreviewEnabled,
    enabled: liveSourceRetrievalEnabled && assistantDialogueLivePreviewEnabled && standardUserLiveSourcePreviewEnabled,
    defaultOff: true,
    standardUserRuntimeBehavior: "disabled-unless-all-flags-enabled",
    executionAuthority: false
  });
}

function a100SafeAutonomyRuntimeFlags(env = process.env) {
  const enabled = env.NEXUS_A100_STANDARD_USER_SAFE_AUTONOMY_ENABLED !== "false";
  return Object.freeze({
    enabled,
    surface: "standard-user",
    previewOnly: true,
    defaultSafe: true,
    executionAuthority: false,
    noProviderHandoff: true,
    noLocationPermissionRequested: true,
    noBrowserPermissionPrompt: true,
    noExternalActionAuthorized: true,
    highRiskActionsGated: true
  });
}

function inferMetadataOnlySelectedToolId(input = {}) {
  const result = input.result && typeof input.result === "object" ? input.result : {};
  const metadata = result.metadata && typeof result.metadata === "object" ? result.metadata : {};
  const message = String(input.userMessage || "").toLowerCase();
  const normalizedIntent = String(result.intent || input.normalizedIntent || "").toLowerCase();
  const routeContext = `${message} ${normalizedIntent} ${metadata.pendingActionType || ""} ${metadata.pendingActionName || ""} ${metadata.redirectSection || ""} ${metadata.tool || ""}`.toLowerCase();
  const confirmationRequired = Boolean(metadata.confirmationRequired || result.status === "needs-confirmation");
  const classification = classifyNexusIntent({
    text: input.userMessage || "",
    normalizedIntent,
    routeContext
  });

  if (confirmationRequired) return null;
  if (/\b(health|telehealth|doctor|clinic|medicine|patient|vitals|referral|emergency|baby|video|camera|provider|call|sms|whatsapp|telegram|message|payment|wallet|order|submit|apply|application|certificate|share|export|dispatch|cancel|admin|location|locate|map|route|shipment|drone|scan|sell|buyer|quote)\b/.test(routeContext)) {
    return null;
  }
  if (classification.risk === "low" && classification.actionType === "preview_or_route" && classification.selectedToolId) {
    return classification.selectedToolId;
  }

  if (/\b(open|start|show|workforce)?\s*(training|train me|trained|course support|skill gaps|job readiness|work readiness)\b/.test(message)) {
    return "workforce.training";
  }
  if (/\b(job pathways?|career pathways?|job path|career path|role options)\b/.test(message)) {
    return "workforce.job_pathways";
  }
  if (/\b(field support|help me in the field|help in the field|get field support|open field support)\b/.test(message)) {
    return "workforce.field_support";
  }
  if (/\b(open learning|start learning|help me learn|resume lesson|start a course|show training)\b/.test(message)) {
    return "learning.start";
  }
  if (/\b(open agritrade|open marketplace|browse marketplace|marketplace browse|view agritrade)\b/.test(message)) {
    return "marketplace.agritrade";
  }
  if (/\b(agriculture help|crop help|farmer help|farm help|what can you do for a farmer)\b/.test(message) || normalizedIntent === "conversation.farmer_help") {
    return "agriculture.help";
  }

  return null;
}

function buildAgentActionMetadata(input = {}) {
  const result = input.result && typeof input.result === "object" ? input.result : {};
  const metadata = result.metadata && typeof result.metadata === "object" ? result.metadata : {};
  const userMessage = String(input.userMessage || "").trim();
  const normalizedIntent = String(result.intent || input.normalizedIntent || "").trim() || null;
  const confirmationRequired = Boolean(metadata.confirmationRequired || result.status === "needs-confirmation");
  const executionMode = confirmationRequired || metadata.executionDeferred
    ? "staged-confirmation"
    : "existing-route";
  const inferredSelectedToolId = inferMetadataOnlySelectedToolId({
    ...input,
    result,
    normalizedIntent
  });
  const intentClassification = classifyNexusIntent({
    text: userMessage,
    normalizedIntent,
    routeContext: `${metadata.pendingActionType || ""} ${metadata.pendingActionName || ""} ${metadata.redirectSection || ""} ${metadata.tool || ""}`
  });
  const policyDecision = buildNexusPolicyDecision(intentClassification, null, {
    text: userMessage,
    command: userMessage,
    source: "agent-action-observation",
    contactResolved: Boolean(metadata.contactResolved || metadata.contactId || metadata.outboundCall?.target),
    phoneNumberResolved: Boolean(metadata.phoneNumberResolved || metadata.phoneNumber || metadata.outboundCall?.phone),
    pendingActionType: metadata.pendingActionType || null,
    pendingActionName: metadata.pendingActionName || null
  });
  const policyValidation = validateNexusPolicyDecision(policyDecision);
  const nexusPlan = createNexusPlan({
    text: userMessage,
    command: userMessage,
    intentClassification,
    policyDecision,
    context: {
      source: "agent-action-observation",
      inputMode: input.inputMode || metadata.inputMode || "api",
      outputMode: input.outputMode || metadata.outputMode || undefined,
      language: input.language || metadata.language || undefined
    }
  });
  const planValidation = validateNexusPlan(nexusPlan);
  const plannerObservation = {
    schemaVersion: "planner-observation.v1",
    observationOnly: true,
    routerAuthority: "existing-routers",
    executionAuthority: "none",
    plannerSource: "nexus-planner",
    validationStatus: planValidation.ok ? "valid" : "invalid",
    planValidation,
    canExecute: false,
    safetyBoundary: "Planner metadata is not execution, routing, permission, staging, or confirmation authority."
  };
  const privacySignal = /health|telehealth|patient|video|camera|care|vitals|referral|medicine|doctor|clinic/i.test(`${normalizedIntent || ""} ${metadata.pendingActionType || ""} ${metadata.redirectSection || ""} ${metadata.moduleSignal?.module || ""}`);
  const highRiskSignal = /call|message|payment|wallet|order|application|certificate|provider|drone|admin|share|export|dispatch/i.test(`${normalizedIntent || ""} ${metadata.pendingActionType || ""} ${metadata.pendingActionName || ""} ${metadata.tool || ""}`);
  const riskLevel = privacySignal
    ? "privacy-sensitive"
    : highRiskSignal || confirmationRequired
      ? "high"
      : "unknown";
  return {
    schemaVersion: "agent-action.v1",
    runtimeStatus: "metadata-only",
    source: "existing-router",
    userMessage,
    normalizedIntent,
    goal: metadata.pendingActionName || metadata.confirmationPrompt || result.response || null,
    selectedToolId: inferredSelectedToolId || null,
    confidence: "unknown",
    requiredInputs: Array.isArray(input.requiredInputs) ? input.requiredInputs : [],
    missingInputs: Array.isArray(input.missingInputs) ? input.missingInputs : [],
    riskLevel,
    confirmationRequired,
    executionMode,
    frontendAction: input.frontendAction || null,
    backendAction: input.backendAction || null,
    result: {
      intent: result.intent || null,
      status: result.status || null
    },
    intentClassification,
    policyDecision,
    nexusPlan,
    plannerObservation,
    policyObservation: {
      schemaVersion: "policy-observation.v1",
      observationOnly: true,
      runtimeAuthority: "existing-router",
      policyValidation,
      safetyBoundary: "Policy metadata is not execution, routing, permission, staging, or confirmation authority."
    },
    nextStep: metadata.confirmationPrompt || metadata.frontierCommunication?.nextQuestion || null,
    auditMetadata: {
      ...productIdentityMetadata(),
      inputMode: input.inputMode || metadata.inputMode || "api",
      outputMode: input.outputMode || metadata.outputMode || undefined,
      language: input.language || metadata.language || undefined
    },
    safetyNotes: [
      "Metadata-only scaffold; existing router remains authoritative.",
      "Static Nexus Tool Registry is not runtime-authoritative.",
      confirmationRequired ? "Existing confirmation gate remains required before execution." : "No new execution path is introduced by this metadata."
    ],
    legacyCompatibility: {
      legacyProductName: PRODUCT_IDENTITY.legacyProductName,
      marketplaceModule: "AgriTrade",
      agricultureCompatibility: true,
      protectedInternals: [
        "APIs",
        "route IDs",
        "workflow IDs",
        "localStorage keys",
        "PWA cache names",
        "native bridge fields",
        "backend contracts",
        "package names"
      ]
    }
  };
}

const COUNTRY_LANGUAGE = {
  nigeria: "en",
  kenya: "sw",
  egypt: "ar",
  drc: "fr"
};
// Voice language contract:
// Full app profile languages are en, es, fr, sw, ar, and pt.
const FULL_APP_LANGUAGE_CODES = new Set(["en", "es", "fr", "sw", "ar", "pt"]);
const PARTIAL_LANGUAGE_CODES = new Set([]);
const VOICE_LANGUAGE_LOCALES = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  sw: "sw-KE",
  ar: "ar-EG",
  pt: "pt-BR"
};

function canonicalLanguageCode(value, options = {}) {
  const raw = String(value || "").trim().toLowerCase().replace("_", "-");
  const code = raw.split("-")[0];
  if (FULL_APP_LANGUAGE_CODES.has(code)) return code;
  if (options.allowPartial && PARTIAL_LANGUAGE_CODES.has(code)) return code;
  return "en";
}

function canonicalProfileLanguage(value) {
  return canonicalLanguageCode(value);
}

function canonicalVoiceLanguage(value) {
  return canonicalLanguageCode(value, { allowPartial: true });
}

function voiceLocaleForLanguage(language) {
  return VOICE_LANGUAGE_LOCALES[canonicalVoiceLanguage(language)] || VOICE_LANGUAGE_LOCALES.en;
}
const DEFAULT_USERS = [
  { id: "u_admin", name: "Platform Admin", email: "admin@agrinexus.org", password: "Admin2026!", role: "Admin", country: "Nigeria", language: "en" },
  { id: "u_standard", name: "Standard User", email: "user@agrinexus.org", password: "User2026!", role: "Standard User", country: "Nigeria", language: "en" },
  { id: "u_investor", name: "Investor Viewer", email: "investor@agrinexus.org", password: "Investor2026!", role: "Investor", country: "Egypt", language: "ar" }
];
const PROVIDER_CONFIG = {
  "learning-courses": { modeEnv: "LEARNING_COURSE_PROVIDER", credentialEnvs: ["LEARNING_COURSE_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"] },
  "learning-certificates": { modeEnv: "LEARNING_CERTIFICATE_PROVIDER", credentialEnvs: ["LEARNING_CERTIFICATE_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"] },
  "workforce-jobs": { modeEnv: "WORKFORCE_JOB_PROVIDER", credentialEnvs: ["WORKFORCE_JOB_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"] },
  "workforce-calendar": { modeEnv: "WORKFORCE_CALENDAR_PROVIDER", credentialEnvs: ["WORKFORCE_CALENDAR_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"] },
  "workforce-notifications": { modeEnv: "WORKFORCE_NOTIFICATION_PROVIDER", credentialEnvs: ["WORKFORCE_NOTIFICATION_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"] },
  "workforce-hris": { modeEnv: "WORKFORCE_HRIS_PROVIDER", credentialEnvs: ["WORKFORCE_HRIS_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"] },
  "workforce-shifts": { modeEnv: "WORKFORCE_SHIFT_PROVIDER", credentialEnvs: ["WORKFORCE_SHIFT_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"] },
  "health-telehealth": { modeEnv: "HEALTH_TELEHEALTH_PROVIDER", credentialEnvs: ["HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"] },
  "health-ehr": { modeEnv: "HEALTH_EHR_PROVIDER", credentialEnvs: ["HEALTH_EHR_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"] },
  "health-notifications": { modeEnv: "HEALTH_NOTIFICATION_PROVIDER", credentialEnvs: ["HEALTH_NOTIFICATION_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"] },
  "trade-payments": { modeEnv: "TRADE_PAYMENT_PROVIDER", credentialEnvs: ["TRADE_PAYMENT_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY"] },
  "trade-logistics": { modeEnv: "TRADE_LOGISTICS_PROVIDER", credentialEnvs: ["TRADE_LOGISTICS_WEBHOOK_URL", "TRADE_LOGISTICS_TRACKING_URL", "LOGISTICS_TRACKING_URL", "TRADE_PROVIDER_API_KEY", "LOGISTICS_TRACKING_API_KEY"] },
  "trade-market": { modeEnv: "TRADE_MARKET_PROVIDER", credentialEnvs: ["TRADE_MARKET_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY"] },
  "field-drones": { modeEnv: "DRONE_PROVIDER", credentialEnvs: ["DRONE_WEBHOOK_URL", "DRONE_PROVIDER_API_KEY"] },
  "voice-stt": { modeEnv: "VOICE_STT_PROVIDER", credentialEnvs: ["VOICE_STT_WEBHOOK_URL", "VOICE_PROVIDER_API_KEY"] },
  "voice-tts": { modeEnv: "VOICE_TTS_PROVIDER", credentialEnvs: ["VOICE_TTS_WEBHOOK_URL", "VOICE_PROVIDER_API_KEY"] },
  "phone-voice": { modeEnv: "PHONE_PROVIDER", credentialEnvs: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER"] },
  "translation": { modeEnv: "TRANSLATION_PROVIDER", credentialEnvs: ["GOOGLE_TRANSLATION_CREDENTIALS_JSON", "TRANSLATION_WEBHOOK_URL", "TRANSLATION_PROVIDER_API_KEY"] },
  "auth-users": { modeEnv: "AUTH_PROVIDER", credentialEnvs: ["AUTH_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY"] },
  "auth-password-reset": { modeEnv: "PASSWORD_RESET_PROVIDER", credentialEnvs: ["PASSWORD_RESET_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY"] },
  "email-delivery": { modeEnv: "EMAIL_PROVIDER", credentialEnvs: ["EMAIL_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"] },
  "sms-delivery": { modeEnv: "SMS_PROVIDER", credentialEnvs: ["SMS_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"] },
  "whatsapp-delivery": { modeEnv: "WHATSAPP_PROVIDER", credentialEnvs: ["WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"] },
  "billing-subscriptions": { modeEnv: "BILLING_PROVIDER", credentialEnvs: ["BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY"] },
  "music-playback": { modeEnv: "MUSIC_PROVIDER", credentialEnvs: ["YOUTUBE_API_KEY"] },
  "web-search": { modeEnv: "WEB_SEARCH_PROVIDER", credentialEnvs: ["OPENAI_API_KEY", "TAVILY_API_KEY", "BRAVE_SEARCH_API_KEY", "EXA_API_KEY"] },
  "routing-geocoding": { modeEnv: "ROUTING_PROVIDER", credentialEnvs: ["MAPBOX_ACCESS_TOKEN", "OPENROUTESERVICE_API_KEY", "GOOGLE_MAPS_API_KEY", "ROUTING_WEBHOOK_URL"] },
  "learning-lms": { modeEnv: "LEARNING_LMS_PROVIDER", credentialEnvs: ["MOODLE_BASE_URL", "MOODLE_TOKEN", "OPENEDX_BASE_URL", "OPENEDX_API_KEY"] },
  "workforce-job-search": { modeEnv: "JOB_SEARCH_PROVIDER", credentialEnvs: ["ADZUNA_APP_ID", "ADZUNA_APP_KEY", "JOB_SEARCH_API_KEY"] },
  "health-openmrs": { modeEnv: "HEALTH_RECORD_PROVIDER", credentialEnvs: ["OPENMRS_BASE_URL", "OPENMRS_USERNAME", "OPENMRS_PASSWORD", "OPENMRS_TOKEN"] },
  "satellite-field-data": { modeEnv: "SATELLITE_PROVIDER", credentialEnvs: ["SENTINEL_HUB_CLIENT_ID", "SENTINEL_HUB_CLIENT_SECRET", "SENTINEL_HUB_INSTANCE_ID", "SATELLITE_API_KEY"] }
};

const PROVIDER_ENGINE_ENDPOINTS = {
  "learning-courses": "/learning/courses",
  "learning-certificates": "/learning/certificates",
  "workforce-jobs": "/workforce/jobs",
  "workforce-calendar": "/workforce/calendar",
  "workforce-notifications": "/workforce/notifications",
  "workforce-hris": "/workforce/hris",
  "workforce-shifts": "/workforce/shifts",
  "health-telehealth": "/health/telehealth",
  "health-ehr": "/health/ehr",
  "health-notifications": "/health/notifications",
  "trade-payments": "/trade/payments",
  "trade-logistics": "/trade/logistics",
  "trade-market": "/trade/market",
  "field-drones": "/field/drones",
  "voice-stt": "/voice/transcribe",
  "voice-tts": "/voice/speak",
  "translation": "/translate",
  "auth-users": "/auth/users",
  "auth-password-reset": "/auth/password-reset",
  "email-delivery": "/communications/email",
  "sms-delivery": "/communications/sms",
  "whatsapp-delivery": "/communications/whatsapp",
  "billing-subscriptions": "/billing/subscriptions",
  "music-playback": "/media/music",
  "web-search": "/intelligence/search",
  "routing-geocoding": "/maps/routing",
  "learning-lms": "/learning/lms",
  "workforce-job-search": "/workforce/job-search",
  "health-openmrs": "/health/openmrs",
  "satellite-field-data": "/field/satellite"
};

const BUILT_IN_PROVIDER_DEFINITIONS = [
  {
    id: "public-weather-openmeteo",
    name: "Open-Meteo Weather Intelligence",
    module: "Public Intelligence",
    mode: "public-api",
    status: "connected",
    detail: "Open-Meteo public weather API is available for heat safety, crop timing, walking safety, rainfall, wind, and field alerts."
  },
  {
    id: "public-who-outbreaks",
    name: "WHO Disease Outbreak News",
    module: "Public Intelligence",
    mode: "public-api",
    status: "connected",
    detail: "WHO Disease Outbreak News API is available for public-health awareness and regional outbreak context."
  },
  {
    id: "public-osm-geocoding",
    name: "OpenStreetMap Nominatim Geocoding",
    module: "Maps",
    mode: "public-api",
    status: "connected",
    detail: "OpenStreetMap/Nominatim public geocoding is available for address lookup, country context, and user-entered locations within fair-use limits."
  },
  {
    id: "public-osm-services",
    name: "OpenStreetMap Overpass Service Search",
    module: "Healthcare",
    mode: "public-api",
    status: "connected",
    detail: "OpenStreetMap/Overpass service search is available for nearby clinics, pharmacies, hospitals, roads, and rural service mapping within public endpoint limits."
  },
  {
    id: "kenya-afyalink-facility-registry",
    name: "Kenya AfyaLink Facility Registry",
    module: "Healthcare",
    mode: "credentialed-government-api",
    status: process.env.KENYA_AFYALINK_TOKEN ? "connected" : "needs-credentials",
    detail: process.env.KENYA_AFYALINK_TOKEN
      ? "Kenya AfyaLink Facility Registry token is configured for facility verification."
      : "Kenya AfyaLink Facility Registry is documented and adapter-ready; register and add KENYA_AFYALINK_BASE_URL plus KENYA_AFYALINK_TOKEN for authenticated facility lookup."
  },
  {
    id: "music-playback",
    name: "Music Playback Provider",
    module: "AI",
    mode: "youtube-embed",
    status: "needs-credentials",
    detail: "Add YOUTUBE_API_KEY so Nexus can search YouTube and play public results inside the Music / Media workspace without a paid music subscription."
  },
  {
    id: "web-search",
    name: "Live Web Search Brain",
    module: "AI",
    mode: "search-provider",
    status: "needs-credentials",
    detail: "Connect OpenAI web search or Tavily, Brave, or Exa so Nexus can answer current internet questions with source-aware context."
  },
  {
    id: "routing-geocoding",
    name: "Routing and Geocoding Intelligence",
    module: "Maps",
    mode: "map-routing-provider",
    status: "needs-credentials",
    detail: "Connect Mapbox, OpenRouteService, Google Maps, or a routing webhook for address lookup, route timing, shipment paths, and clinic/pharmacy directions."
  },
  {
    id: "learning-lms",
    name: "Learning Management System",
    module: "Learning",
    mode: "lms-provider",
    status: "needs-credentials",
    detail: "Connect Moodle or Open edX for real course catalogs, enrollments, progress, quizzes, and certificates."
  },
  {
    id: "workforce-job-search",
    name: "Live Job Search Network",
    module: "Workforce",
    mode: "job-search-provider",
    status: "needs-credentials",
    detail: "Connect Adzuna or another job-search API for real job listings, search, matching, and application evidence."
  },
  {
    id: "health-openmrs",
    name: "OpenMRS Health Record Adapter",
    module: "Healthcare",
    mode: "ehr-provider",
    status: "needs-credentials",
    detail: "Connect OpenMRS or a clinic EHR/FHIR endpoint for consented intake handoff and provider records. AgriNexus remains support/navigation, not diagnosis."
  },
  {
    id: "satellite-field-data",
    name: "Satellite Field Intelligence",
    module: "AgriTrade",
    mode: "satellite-provider",
    status: "needs-credentials",
    detail: "Connect Sentinel Hub or a satellite imagery provider for NDVI, crop stress, irrigation, and field-condition intelligence."
  },
  {
    id: "phone-voice",
    name: "Phone Voice Assistant",
    module: "AI",
    mode: "twilio-ready",
    status: "needs-credentials",
    detail: "Twilio Programmable Voice webhooks are available; add Twilio credentials and point a phone number to /api/voice/phone/incoming."
  }
];

const REAL_PROVIDER_CANDIDATES = [
  {
    id: "tavily",
    name: "Tavily Search",
    category: "internet-brain",
    module: "AI",
    providerId: "web-search",
    partnershipType: "internet-brain",
    region: "Global",
    website: "https://docs.tavily.com/",
    apiStatus: "api-available",
    integrationLevel: "agentic-web-search",
    bestUse: "AI-agent optimized live web search for current information, source grounding, and research answers.",
    credentials: ["TAVILY_API_KEY"],
    workflowFit: ["current answers", "source-grounded research", "internet-aware Nexus"],
    status: "candidate",
    nextAction: "Create Tavily API key, add TAVILY_API_KEY in Render, then run live service check."
  },
  {
    id: "brave-search",
    name: "Brave Search API",
    category: "internet-brain",
    module: "AI",
    providerId: "web-search",
    partnershipType: "internet-brain",
    region: "Global",
    website: "https://brave.com/search/api/",
    apiStatus: "api-available",
    integrationLevel: "independent-web-index",
    bestUse: "Independent live web index for current facts, news, search results, and AI answer grounding.",
    credentials: ["BRAVE_SEARCH_API_KEY"],
    workflowFit: ["web search", "news/current events", "source grounding"],
    status: "candidate",
    nextAction: "Create Brave Search API key, add BRAVE_SEARCH_API_KEY in Render, then run live service check."
  },
  {
    id: "exa-search",
    name: "Exa Search",
    category: "internet-brain",
    module: "AI",
    providerId: "web-search",
    partnershipType: "internet-brain",
    region: "Global",
    website: "https://docs.exa.ai/",
    apiStatus: "api-available",
    integrationLevel: "neural-web-search",
    bestUse: "Semantic search for AI agents that need high-quality web context and deeper research.",
    credentials: ["EXA_API_KEY"],
    workflowFit: ["semantic search", "research context", "agent reasoning"],
    status: "candidate",
    nextAction: "Create Exa API key, add EXA_API_KEY in Render, then run live service check."
  },
  {
    id: "mapbox",
    name: "Mapbox",
    category: "map-routing",
    module: "Maps",
    providerId: "routing-geocoding",
    partnershipType: "routing",
    region: "Global",
    website: "https://docs.mapbox.com/",
    apiStatus: "api-available",
    integrationLevel: "geocoding-directions-places",
    bestUse: "Address search, routes, clinic/pharmacy directions, shipment pathing, and professional map intelligence.",
    credentials: ["MAPBOX_ACCESS_TOKEN"],
    workflowFit: ["geocoding", "route tracking", "nearby services", "ETA"],
    status: "candidate",
    nextAction: "Create Mapbox access token, add MAPBOX_ACCESS_TOKEN in Render, then run live service check."
  },
  {
    id: "openrouteservice",
    name: "OpenRouteService",
    category: "map-routing",
    module: "Maps",
    providerId: "routing-geocoding",
    partnershipType: "routing",
    region: "Global",
    website: "https://openrouteservice.org/dev/",
    apiStatus: "api-available",
    integrationLevel: "routing-geocoding-isochrones",
    bestUse: "OpenStreetMap-backed directions, route optimization, geocoding, isochrones, and logistics route analysis.",
    credentials: ["OPENROUTESERVICE_API_KEY"],
    workflowFit: ["route planning", "shipment ETA", "clinic reachability", "rural route safety"],
    status: "candidate",
    nextAction: "Create OpenRouteService API key, add OPENROUTESERVICE_API_KEY in Render, then run live service check."
  },
  {
    id: "moodle",
    name: "Moodle LMS",
    category: "course-catalog",
    module: "Learning",
    providerId: "learning-lms",
    partnershipType: "learning",
    region: "Global",
    website: "https://docs.moodle.org/dev/Web_services",
    apiStatus: "api-available",
    integrationLevel: "lms-catalog-progress-certificates",
    bestUse: "Owned learning catalog, enrollments, progress, quizzes, certificates, and multilingual course delivery.",
    credentials: ["MOODLE_BASE_URL", "MOODLE_TOKEN"],
    workflowFit: ["course catalog", "enrollment", "progress sync", "certificate evidence"],
    status: "candidate",
    nextAction: "Create Moodle site/token, add MOODLE_BASE_URL and MOODLE_TOKEN in Render, then run live service check."
  },
  {
    id: "openedx",
    name: "Open edX",
    category: "course-catalog",
    module: "Learning",
    providerId: "learning-lms",
    partnershipType: "learning",
    region: "Global",
    website: "https://docs.openedx.org/",
    apiStatus: "api-available",
    integrationLevel: "course-platform-api",
    bestUse: "Large-scale course platform for formal training paths, learner progress, and certificate workflows.",
    credentials: ["OPENEDX_BASE_URL", "OPENEDX_API_KEY"],
    workflowFit: ["course delivery", "learner records", "certificate evidence"],
    status: "candidate",
    nextAction: "Create Open edX API credentials, add OPENEDX_BASE_URL and OPENEDX_API_KEY in Render, then run live service check."
  },
  {
    id: "adzuna",
    name: "Adzuna Jobs API",
    category: "job-network",
    module: "Workforce",
    providerId: "workforce-job-search",
    partnershipType: "workforce",
    region: "Global",
    website: "https://developer.adzuna.com/",
    apiStatus: "api-available",
    integrationLevel: "job-search-api",
    bestUse: "Live job listings, employer research, salary data, role search, and workforce matching.",
    credentials: ["ADZUNA_APP_ID", "ADZUNA_APP_KEY"],
    workflowFit: ["job search", "role matching", "application tracking"],
    status: "candidate",
    nextAction: "Create Adzuna API app, add ADZUNA_APP_ID and ADZUNA_APP_KEY in Render, then run live service check."
  },
  {
    id: "openmrs",
    name: "OpenMRS",
    category: "ehr-fhir",
    module: "Healthcare",
    providerId: "health-openmrs",
    partnershipType: "ehr",
    region: "Global health",
    website: "https://rest.openmrs.org/",
    apiStatus: "api-available",
    integrationLevel: "open-source-ehr-rest-fhir",
    bestUse: "Clinic-owned patient records, consented intake handoff, provider notes, and rural health documentation.",
    credentials: ["OPENMRS_BASE_URL", "OPENMRS_TOKEN"],
    workflowFit: ["intake handoff", "clinic record", "provider documentation"],
    status: "candidate",
    nextAction: "Stand up or partner with an OpenMRS clinic, add OPENMRS_BASE_URL and OPENMRS_TOKEN in Render, then run live service check."
  },
  {
    id: "sentinel-hub-direct",
    name: "Sentinel Hub Direct",
    category: "drone-data",
    module: "AgriTrade",
    providerId: "satellite-field-data",
    partnershipType: "drone",
    region: "Global",
    website: "https://www.sentinel-hub.com/develop/api/",
    apiStatus: "api-available",
    integrationLevel: "satellite-imagery-field-intelligence",
    bestUse: "Satellite field imagery, vegetation index, NDVI-style evidence, crop stress, water, and harvest guidance.",
    credentials: ["SENTINEL_HUB_CLIENT_ID", "SENTINEL_HUB_CLIENT_SECRET"],
    workflowFit: ["field scan", "crop stress", "farmer guidance", "buyer evidence"],
    status: "candidate",
    nextAction: "Create Sentinel Hub OAuth credentials, add SENTINEL_HUB_CLIENT_ID and SENTINEL_HUB_CLIENT_SECRET in Render, then run live service check."
  },
  {
    id: "udemy-business",
    name: "Udemy Business",
    category: "course-catalog",
    module: "Learning",
    providerId: "learning-courses",
    partnershipType: "learning",
    region: "Global",
    website: "https://business.udemy.com/",
    apiStatus: "enterprise-api",
    integrationLevel: "catalog-progress-certificates",
    bestUse: "Large course catalog for digital skills, leadership, agriculture business, and workforce readiness.",
    credentials: ["LEARNING_COURSES_WEBHOOK_URL", "LEARNING_COURSES_API_KEY", "LEARNING_CERTIFICATES_WEBHOOK_URL"],
    workflowFit: ["course search", "lesson launch", "progress sync", "certificate evidence"],
    status: "candidate",
    nextAction: "Request enterprise catalog/API access and confirm localization options."
  },
  {
    id: "pluralsight-skills",
    name: "Pluralsight Skills",
    category: "course-catalog",
    module: "Learning",
    providerId: "learning-courses",
    partnershipType: "learning",
    region: "Global",
    website: "https://www.pluralsight.com/product/skills",
    apiStatus: "enterprise-api",
    integrationLevel: "skills-assessment-catalog",
    bestUse: "Technical learning paths, assessments, and workforce skill evidence.",
    credentials: ["LEARNING_COURSES_WEBHOOK_URL", "LEARNING_COURSES_API_KEY"],
    workflowFit: ["skill assessment", "learning path", "progress evidence"],
    status: "candidate",
    nextAction: "Confirm API access, price tier, and certificate export support."
  },
  {
    id: "ulesson",
    name: "uLesson",
    category: "course-catalog",
    module: "Learning",
    providerId: "learning-courses",
    partnershipType: "learning",
    region: "Africa",
    website: "https://ulesson.com/",
    apiStatus: "partnership-needed",
    integrationLevel: "education-content-partner",
    bestUse: "Africa-focused learner content and mobile-friendly education support.",
    credentials: ["LEARNING_COURSES_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"],
    workflowFit: ["mobile lessons", "learner support", "localized content"],
    status: "candidate",
    nextAction: "Open content partnership discussion and request partner integration options."
  },
  {
    id: "apijobs",
    name: "APIJobs",
    category: "job-network",
    module: "Workforce",
    providerId: "workforce-jobs",
    partnershipType: "workforce",
    region: "Global",
    website: "https://apijobs.dev/",
    apiStatus: "api-available",
    integrationLevel: "job-feed",
    bestUse: "Job listings that can populate role search and workforce matching workflows.",
    credentials: ["WORKFORCE_JOBS_WEBHOOK_URL", "WORKFORCE_JOBS_API_KEY"],
    workflowFit: ["job search", "role matching", "application tracking"],
    status: "candidate",
    nextAction: "Create developer account and test job search endpoint."
  },
  {
    id: "loopcv",
    name: "LoopCV",
    category: "job-network",
    module: "Workforce",
    providerId: "workforce-jobs",
    partnershipType: "workforce",
    region: "Global",
    website: "https://www.loopcv.pro/developers/",
    apiStatus: "api-available",
    integrationLevel: "candidate-automation",
    bestUse: "Candidate application automation, resume workflow support, and placement evidence.",
    credentials: ["WORKFORCE_JOBS_WEBHOOK_URL", "WORKFORCE_JOBS_API_KEY"],
    workflowFit: ["application assist", "interview prep", "placement evidence"],
    status: "candidate",
    nextAction: "Request developer access and confirm candidate data rules."
  },
  {
    id: "local-employer-network",
    name: "Local Employer Network",
    category: "job-network",
    module: "Workforce",
    providerId: "workforce-jobs",
    partnershipType: "workforce",
    region: "Country-specific",
    website: "https://agrinexus.local/provider/local-employer-network",
    apiStatus: "partner-built",
    integrationLevel: "employer-intake",
    bestUse: "Local farms, clinics, NGOs, and logistics teams posting jobs directly into AgriNexus.",
    credentials: ["WORKFORCE_JOBS_WEBHOOK_URL", "WORKFORCE_HRIS_API_KEY"],
    workflowFit: ["employer intake", "role approval", "candidate placement"],
    status: "ready-to-build",
    nextAction: "Use AgriNexus provider intake form as the first live employer channel."
  },
  {
    id: "ithalamed",
    name: "IthalaMed",
    category: "telehealth-provider",
    module: "Healthcare",
    providerId: "health-telehealth",
    partnershipType: "telehealth",
    region: "Africa",
    website: "https://ithalamed.com/",
    apiStatus: "partnership-needed",
    integrationLevel: "provider-network",
    bestUse: "Telehealth partner outreach for rural intake, callbacks, and provider handoff.",
    credentials: ["HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_TELEHEALTH_API_KEY"],
    workflowFit: ["patient intake", "provider callback", "care handoff"],
    status: "candidate",
    nextAction: "Request partner integration details and provider coverage areas."
  },
  {
    id: "sentros",
    name: "Sentros",
    category: "telehealth-provider",
    module: "Healthcare",
    providerId: "health-telehealth",
    partnershipType: "telehealth",
    region: "Africa",
    website: "https://www.sentros.net/",
    apiStatus: "partnership-needed",
    integrationLevel: "telehealth-network",
    bestUse: "Low-bandwidth clinical access, provider coordination, and rural care workflows.",
    credentials: ["HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_NOTIFICATION_API_KEY"],
    workflowFit: ["provider search", "care request", "follow-up alerts"],
    status: "candidate",
    nextAction: "Confirm supported countries, licensing, and callback process."
  },
  {
    id: "recomed",
    name: "RecoMed",
    category: "telehealth-provider",
    module: "Healthcare",
    providerId: "health-telehealth",
    partnershipType: "telehealth",
    region: "Africa",
    website: "https://www.recomed.co.za/",
    apiStatus: "partnership-needed",
    integrationLevel: "appointment-network",
    bestUse: "Provider booking and referral workflow model for telehealth appointment routing.",
    credentials: ["HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_TELEHEALTH_API_KEY"],
    workflowFit: ["provider booking", "appointment request", "referral evidence"],
    status: "candidate",
    nextAction: "Ask about referral API, appointment callbacks, and partner sandbox."
  },
  {
    id: "google-cloud-healthcare-api",
    name: "Google Cloud Healthcare API",
    category: "ehr-fhir",
    module: "Healthcare",
    providerId: "health-ehr",
    partnershipType: "ehr",
    region: "Global",
    website: "https://cloud.google.com/healthcare-api",
    apiStatus: "api-available",
    integrationLevel: "fhir-store",
    bestUse: "FHIR-ready patient handoff, consented health records, and clinical data exchange.",
    credentials: ["HEALTH_EHR_WEBHOOK_URL", "HEALTH_EHR_API_KEY"],
    workflowFit: ["FHIR handoff", "consent evidence", "care record sync"],
    status: "candidate",
    nextAction: "Create cloud project and define FHIR consent/security model."
  },
  {
    id: "azure-health-data-services",
    name: "Azure Health Data Services",
    category: "ehr-fhir",
    module: "Healthcare",
    providerId: "health-ehr",
    partnershipType: "ehr",
    region: "Global",
    website: "https://azure.microsoft.com/en-us/products/health-data-services",
    apiStatus: "api-available",
    integrationLevel: "fhir-dicom-medtech",
    bestUse: "FHIR and health data interoperability for regulated healthcare partners.",
    credentials: ["HEALTH_EHR_WEBHOOK_URL", "HEALTH_EHR_API_KEY"],
    workflowFit: ["FHIR sync", "provider record", "health data governance"],
    status: "candidate",
    nextAction: "Create sandbox workspace and configure FHIR endpoint permissions."
  },
  {
    id: "oracle-cerner-fhir",
    name: "Oracle Cerner FHIR APIs",
    category: "ehr-fhir",
    module: "Healthcare",
    providerId: "health-ehr",
    partnershipType: "ehr",
    region: "Global",
    website: "https://docs.oracle.com/en/industries/health/millennium-platform-apis/",
    apiStatus: "tenant-needed",
    integrationLevel: "ehr-system",
    bestUse: "Hospital or clinic system handoff when a formal EHR partner is present.",
    credentials: ["HEALTH_EHR_WEBHOOK_URL", "HEALTH_EHR_API_KEY"],
    workflowFit: ["clinical referral", "provider record", "care audit"],
    status: "candidate",
    nextAction: "Use only after a clinic or hospital partner grants EHR access."
  },
  {
    id: "useri",
    name: "Useri",
    category: "buyer-marketplace",
    module: "AgriTrade",
    providerId: "trade-market",
    partnershipType: "trade",
    region: "Africa",
    website: "https://useriapp.com/",
    apiStatus: "partnership-needed",
    integrationLevel: "buyer-seller-network",
    bestUse: "Farmer-to-buyer crop offers, buyer communication, and sales evidence.",
    credentials: ["TRADE_MARKET_WEBHOOK_URL", "TRADE_MARKET_API_KEY"],
    workflowFit: ["crop listing", "buyer match", "sale tracking"],
    status: "candidate",
    nextAction: "Request marketplace partner API and buyer coverage details."
  },
  {
    id: "furaha",
    name: "Furaha",
    category: "buyer-marketplace",
    module: "AgriTrade",
    providerId: "trade-market",
    partnershipType: "trade",
    region: "Africa",
    website: "https://www.furaha.farm/",
    apiStatus: "partnership-needed",
    integrationLevel: "farm-marketplace",
    bestUse: "Crop sale workflow, farmer marketplace participation, and buyer updates.",
    credentials: ["TRADE_MARKET_WEBHOOK_URL", "TRADE_MARKET_API_KEY"],
    workflowFit: ["sell crop", "buyer chat", "market evidence"],
    status: "candidate",
    nextAction: "Confirm partner intake, buyer data access, and message channels."
  },
  {
    id: "nile-ag",
    name: "Nile.ag",
    category: "buyer-marketplace",
    module: "AgriTrade",
    providerId: "trade-market",
    partnershipType: "trade",
    region: "Africa",
    website: "https://www.nile.ag/",
    apiStatus: "partnership-needed",
    integrationLevel: "ag-marketplace",
    bestUse: "African buyer/seller market access and trade evidence.",
    credentials: ["TRADE_MARKET_WEBHOOK_URL", "TRADE_MARKET_API_KEY"],
    workflowFit: ["buyer matching", "order creation", "market pricing"],
    status: "candidate",
    nextAction: "Request partner channel and determine available crop/order data."
  },
  {
    id: "zowasel",
    name: "Zowasel",
    category: "buyer-marketplace",
    module: "AgriTrade",
    providerId: "trade-market",
    partnershipType: "trade",
    region: "Africa",
    website: "https://zowasel.com/",
    apiStatus: "partnership-needed",
    integrationLevel: "commodity-marketplace",
    bestUse: "Structured commodity trading, quality evidence, and buyer readiness.",
    credentials: ["TRADE_MARKET_WEBHOOK_URL", "TRADE_MARKET_API_KEY"],
    workflowFit: ["quality packet", "buyer offer", "trade evidence"],
    status: "candidate",
    nextAction: "Open partnership conversation for API or seller onboarding path."
  },
  {
    id: "eosda",
    name: "EOSDA Crop Monitoring",
    category: "drone-data",
    module: "AgriTrade",
    providerId: "field-drones",
    partnershipType: "drone",
    region: "Global",
    website: "https://eos.com/agriculture-api/",
    apiStatus: "api-available",
    integrationLevel: "satellite-crop-intelligence",
    bestUse: "Crop stress, vegetation index, field risk, and farmer guidance.",
    credentials: ["FIELD_DRONE_DATA_URL", "DRONE_PROVIDER_API_KEY"],
    workflowFit: ["run scan", "field advice", "buyer evidence"],
    status: "candidate",
    nextAction: "Create API account and test field boundary/crop index endpoint."
  },
  {
    id: "leaf-agriculture",
    name: "Leaf Agriculture",
    category: "drone-data",
    module: "AgriTrade",
    providerId: "field-drones",
    partnershipType: "drone",
    region: "Global",
    website: "https://www.buildwithleaf.com/",
    apiStatus: "api-available",
    integrationLevel: "farm-data-api",
    bestUse: "Farm data integrations, equipment data, field records, and agronomic evidence.",
    credentials: ["FIELD_DRONE_DATA_URL", "DRONE_PROVIDER_API_KEY"],
    workflowFit: ["field records", "machine data", "farm evidence"],
    status: "candidate",
    nextAction: "Request developer access and confirm supported data sources."
  },
  {
    id: "sentinel-hub",
    name: "Sentinel Hub",
    category: "drone-data",
    module: "AgriTrade",
    providerId: "field-drones",
    partnershipType: "drone",
    region: "Global",
    website: "https://www.sentinel-hub.com/develop/api/",
    apiStatus: "api-available",
    integrationLevel: "satellite-imagery-api",
    bestUse: "Satellite imagery, vegetation monitoring, field overlays, and map intelligence.",
    credentials: ["FIELD_DRONE_DATA_URL", "MAP_TILE_URL", "DRONE_PROVIDER_API_KEY"],
    workflowFit: ["field map", "scan overlay", "risk layer"],
    status: "candidate",
    nextAction: "Create developer account and test imagery tile access."
  },
  {
    id: "terminal-africa",
    name: "Terminal Africa",
    category: "logistics-payment",
    module: "AgriTrade",
    providerId: "trade-logistics",
    partnershipType: "logistics",
    region: "Africa",
    website: "https://www.terminal.africa/tship-api",
    apiStatus: "api-available",
    integrationLevel: "shipping-logistics-api",
    bestUse: "Shipment rates, package tracking, route evidence, and delivery updates.",
    credentials: ["TRADE_LOGISTICS_WEBHOOK_URL", "TRADE_LOGISTICS_API_KEY"],
    workflowFit: ["track route", "shipment quote", "delivery evidence"],
    status: "candidate",
    nextAction: "Create developer account and test shipment tracking endpoint."
  },
  {
    id: "flutterwave",
    name: "Flutterwave",
    category: "logistics-payment",
    module: "AgriTrade",
    providerId: "trade-payments",
    partnershipType: "payments",
    region: "Africa",
    website: "https://developer.flutterwave.com/",
    apiStatus: "api-available",
    integrationLevel: "payments-api",
    bestUse: "Buyer payments, wallet flow, payout evidence, and marketplace settlement.",
    credentials: ["TRADE_PAYMENT_API_KEY", "BILLING_PROVIDER_API_KEY"],
    workflowFit: ["payment intent", "buyer checkout", "payout evidence"],
    status: "candidate",
    nextAction: "Create sandbox account and decide escrow/payout policy."
  },
  {
    id: "paystack",
    name: "Paystack",
    category: "logistics-payment",
    module: "AgriTrade",
    providerId: "trade-payments",
    partnershipType: "payments",
    region: "Africa",
    website: "https://paystack.com/docs/",
    apiStatus: "api-available",
    integrationLevel: "payments-api",
    bestUse: "Card, transfer, and local payment workflows for buyer/seller transactions.",
    credentials: ["TRADE_PAYMENT_API_KEY", "BILLING_PROVIDER_API_KEY"],
    workflowFit: ["checkout", "payment verification", "receipt evidence"],
    status: "candidate",
    nextAction: "Create sandbox account and test payment verification endpoint."
  },
  {
    id: "pawapay",
    name: "PawaPay",
    category: "logistics-payment",
    module: "AgriTrade",
    providerId: "trade-payments",
    partnershipType: "payments",
    region: "Africa",
    website: "https://www.pawapay.io/",
    apiStatus: "api-available",
    integrationLevel: "mobile-money-api",
    bestUse: "Mobile money collection and payout workflows across African markets.",
    credentials: ["TRADE_PAYMENT_API_KEY", "BILLING_PROVIDER_API_KEY"],
    workflowFit: ["mobile money", "farmer payout", "payment receipt"],
    status: "candidate",
    nextAction: "Request sandbox credentials and confirm country coverage."
  },
  {
    id: "bunipay",
    name: "Bunipay",
    category: "logistics-payment",
    module: "AgriTrade",
    providerId: "trade-payments",
    partnershipType: "payments",
    region: "Africa",
    website: "https://bunipay.com/",
    apiStatus: "partnership-needed",
    integrationLevel: "payments-partner",
    bestUse: "Alternative regional payment and settlement conversations.",
    credentials: ["TRADE_PAYMENT_API_KEY"],
    workflowFit: ["payment partner", "wallet settlement", "receipt evidence"],
    status: "candidate",
    nextAction: "Contact partnership team and verify API availability."
  },
  {
    id: "country-health-privacy-counsel",
    name: "Country Health and Privacy Counsel",
    category: "legal-compliance",
    module: "Compliance",
    providerId: "auth-users",
    partnershipType: "compliance",
    region: "Country-specific",
    website: "https://agrinexus.local/provider/country-health-privacy-counsel",
    apiStatus: "professional-review-needed",
    integrationLevel: "legal-review",
    bestUse: "Country-by-country review for telehealth, patient consent, health data, privacy, payments, and farmer marketplace rules.",
    credentials: ["LEGAL_REVIEW_CONTACT_URL", "PRIVACY_POLICY_URL", "TERMS_URL"],
    workflowFit: ["health consent", "privacy review", "country launch approval"],
    status: "requires-human-review",
    nextAction: "Engage licensed counsel in each launch country before real patient, payment, or marketplace operations."
  },
  {
    id: "data-protection-officer",
    name: "Data Protection Officer / Privacy Lead",
    category: "legal-compliance",
    module: "Compliance",
    providerId: "auth-users",
    partnershipType: "compliance",
    region: "Pan-African plus country-specific",
    website: "https://agrinexus.local/provider/data-protection-officer",
    apiStatus: "professional-review-needed",
    integrationLevel: "privacy-governance",
    bestUse: "Privacy impact assessment, data retention rules, user rights, breach plan, and cross-border data transfer review.",
    credentials: ["COMPLIANCE_DPO_CONTACT_URL", "PRIVACY_POLICY_URL", "DATA_PROCESSING_ADDENDUM_URL"],
    workflowFit: ["privacy assessment", "data retention", "user rights", "breach response"],
    status: "requires-human-review",
    nextAction: "Assign DPO/privacy lead before live healthcare or payment data is processed."
  },
  {
    id: "clinical-governance-review",
    name: "Clinical Governance Review Partner",
    category: "legal-compliance",
    module: "Healthcare",
    providerId: "health-telehealth",
    partnershipType: "compliance",
    region: "Country-specific",
    website: "https://agrinexus.local/provider/clinical-governance-review",
    apiStatus: "professional-review-needed",
    integrationLevel: "clinical-safety-review",
    bestUse: "Confirms AgriNexus is a support and navigation tool, not an unlicensed medical diagnosis or emergency-care replacement.",
    credentials: ["CLINICAL_GOVERNANCE_CONTACT_URL", "HEALTH_CONSENT_POLICY_URL"],
    workflowFit: ["telehealth safety", "patient disclaimers", "escalation rules", "emergency guidance"],
    status: "requires-human-review",
    nextAction: "Have a licensed clinical governance reviewer approve telehealth language, triage limits, and escalation workflow."
  }
];

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json; charset=utf-8"
};

let pgPool = null;
let pgStateReady = false;

function usingPostgresState() {
  return STATE_STORE === "postgres";
}

function postgresConfig() {
  return {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false
  };
}

function getPgPool() {
  if (!pgPool) {
    const { Pool } = require("pg");
    pgPool = new Pool(postgresConfig());
  }
  return pgPool;
}

async function ensurePostgresState() {
  if (pgStateReady) return;
  if (!process.env.DATABASE_URL) throw new Error("AGRINEXUS_STATE_STORE=postgres requires DATABASE_URL.");
  const pool = getPgPool();
  await pool.query(`
    create table if not exists agrinexus_app_state (
      id text primary key,
      state jsonb not null,
      updated_at timestamptz not null default now()
    )
  `);
  const existing = await pool.query("select 1 from agrinexus_app_state where id = $1", ["default"]);
  if (!existing.rowCount) {
    const seed = JSON.parse(fs.readFileSync(path.join(ROOT, "db.json"), "utf8"));
    await pool.query(
      "insert into agrinexus_app_state (id, state) values ($1, $2::jsonb)",
      ["default", JSON.stringify(seed)]
    );
  }
  pgStateReady = true;
}

async function readDb() {
  if (usingPostgresState()) {
    await ensurePostgresState();
    const result = await getPgPool().query("select state from agrinexus_app_state where id = $1", ["default"]);
    return result.rows[0].state;
  }
  ensureRuntimeData();
  return JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
}

async function writeDb(db) {
  if (usingPostgresState()) {
    await ensurePostgresState();
    await getPgPool().query(
      "update agrinexus_app_state set state = $2::jsonb, updated_at = now() where id = $1",
      ["default", JSON.stringify(db)]
    );
    return;
  }
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2) + "\n");
}

function ensureRuntimeData() {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    fs.copyFileSync(path.join(ROOT, "db.json"), DB_PATH);
  }
}

function send(res, status, body, headers = {}) {
  const payload = typeof body === "string" ? body : JSON.stringify(body);
  res.writeHead(status, {
    "content-type": typeof body === "string" ? "text/plain; charset=utf-8" : "application/json; charset=utf-8",
    "x-content-type-options": "nosniff",
    "referrer-policy": "strict-origin-when-cross-origin",
    "permissions-policy": "camera=(self), microphone=(self), geolocation=(self)",
    ...headers
  });
  res.end(payload);
}

async function verifyNexusHealthSourceLive(sourceIdOrUrl = "") {
  const sourceRecord = nexusEnterpriseHealthEvidenceTrust.RECOGNIZED_SOURCE_RECORDS.find(item => item.sourceId === sourceIdOrUrl) || null;
  const targetUrl = sourceRecord?.canonicalUrl || String(sourceIdOrUrl || "");
  if (!/^https:\/\//i.test(targetUrl)) {
    return { liveChecked: true, providerError: "canonical_https_url_required", httpStatus: 0 };
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Number(process.env.NEXUS_HEALTH_SOURCE_VERIFY_TIMEOUT_MS || 5000));
  try {
    const response = await fetch(targetUrl, {
      method: "HEAD",
      redirect: "manual",
      signal: controller.signal,
      headers: { "user-agent": "NexusHealthEvidenceVerifier/1.0" }
    });
    const location = response.headers.get("location") || "";
    return {
      liveChecked: true,
      httpStatus: response.status,
      redirectDetected: response.status >= 300 && response.status < 400 && Boolean(location),
      observedUrl: location ? new URL(location, targetUrl).toString() : targetUrl
    };
  } catch (error) {
    return {
      liveChecked: true,
      httpStatus: 0,
      providerError: error?.name === "AbortError" ? "verification_timeout" : "verification_failed"
    };
  } finally {
    clearTimeout(timeout);
  }
}

function rateLimit(req, limit = 180, windowMs = 60_000) {
  const configuredLimit = Number(process.env.AGRINEXUS_RATE_LIMIT_PER_WINDOW || limit);
  const effectiveLimit = Number.isFinite(configuredLimit) && configuredLimit > 0 ? configuredLimit : limit;
  const key = `${req.socket.remoteAddress || "local"}:${req.url.split("?")[0]}`;
  const now = Date.now();
  const bucket = rateBuckets.get(key) || { count: 0, resetAt: now + windowMs };
  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + windowMs;
  }
  bucket.count += 1;
  rateBuckets.set(key, bucket);
  return bucket.count <= effectiveLimit;
}

function parseCookies(req) {
  return Object.fromEntries((req.headers.cookie || "").split(";").filter(Boolean).map(part => {
    const [key, ...rest] = part.trim().split("=");
    return [key, decodeURIComponent(rest.join("="))];
  }));
}

function currentUser(req, db) {
  const sid = parseCookies(req).agrinexus_sid;
  const userId = sid && sessions.get(sid);
  return db.users.find(user => user.id === userId) || null;
}

function secureCookieAttribute(req) {
  const proto = String(req.headers["x-forwarded-proto"] || "").split(",")[0].trim().toLowerCase();
  return proto === "https" || req.socket.encrypted ? "; Secure" : "";
}

function setCookieHeader(name, value, { maxAge = 900, httpOnly = true, sameSite = "Lax", path = "/", secure = "" } = {}) {
  return `${name}=${encodeURIComponent(value)}; Max-Age=${Math.max(0, Number(maxAge) || 0)}; Path=${path}; SameSite=${sameSite}${httpOnly ? "; HttpOnly" : ""}${secure}`;
}

function cleanupGenesisVoiceGuestSessions(now = Date.now()) {
  for (const [sid, session] of genesisVoiceGuestSessions.entries()) {
    if (!session || Number(session.expiresAt || 0) <= now) genesisVoiceGuestSessions.delete(sid);
  }
}

function genesisVoiceGuestSessionsEnabled(env = process.env) {
  return String(env.NEXUS_GENESIS_VOICE_GUEST_SESSION_ENABLED || "true").trim().toLowerCase() !== "false";
}

function genesisVoiceGuestUser(session = {}) {
  return {
    id: session.userId || "genesis-voice-guest",
    email: "genesis-voice-guest@agrinexus.local",
    name: "Genesis Voice Guest",
    role: "Standard User",
    language: session.language || "en",
    permissions: permissionsForRole("Standard User"),
    authType: "genesis-voice-guest"
  };
}

function resolveElevenLabsVoiceAuthContext(req, db, user, { language = "en", issueGuest = false } = {}) {
  if (user) {
    return {
      ok: true,
      authenticated: true,
      authorized: canUse(user, "ai"),
      user,
      authMechanism: "agrinexus_sid_cookie",
      sessionPresent: true,
      setCookie: ""
    };
  }
  cleanupGenesisVoiceGuestSessions();
  const cookies = parseCookies(req);
  const guestSid = cookies.nexus_genesis_voice_sid || "";
  const existing = guestSid && genesisVoiceGuestSessions.get(guestSid);
  if (existing && Number(existing.expiresAt || 0) > Date.now()) {
    return {
      ok: true,
      authenticated: true,
      authorized: true,
      user: genesisVoiceGuestUser(existing),
      authMechanism: "bounded_genesis_voice_guest_cookie",
      sessionPresent: true,
      setCookie: ""
    };
  }
  if (!issueGuest || !genesisVoiceGuestSessionsEnabled()) {
    return {
      ok: false,
      authenticated: false,
      authorized: false,
      user: null,
      authMechanism: "none",
      sessionPresent: false,
      setCookie: ""
    };
  }
  const sid = crypto.randomBytes(24).toString("hex");
  const ttlMs = Math.min(Math.max(Number(process.env.NEXUS_GENESIS_VOICE_GUEST_SESSION_TTL_MS || 900000), 60000), 3600000);
  const session = {
    userId: `genesis-voice-guest-${crypto.createHash("sha256").update(sid).digest("hex").slice(0, 12)}`,
    language: String(language || "en").slice(0, 12),
    createdAt: Date.now(),
    expiresAt: Date.now() + ttlMs
  };
  genesisVoiceGuestSessions.set(sid, session);
  return {
    ok: true,
    authenticated: true,
    authorized: true,
    user: genesisVoiceGuestUser(session),
    authMechanism: "bounded_genesis_voice_guest_cookie",
    sessionPresent: false,
    setCookie: setCookieHeader("nexus_genesis_voice_sid", sid, {
      maxAge: Math.floor(ttlMs / 1000),
      secure: secureCookieAttribute(req)
    })
  };
}

function ensureDefaultUsers(db) {
  db.users = db.users || [];
  let changed = false;
  for (const account of DEFAULT_USERS) {
    const existing = db.users.find(user => user.email === account.email || user.id === account.id);
    if (existing) {
      for (const [key, value] of Object.entries(account)) {
        if (existing[key] === undefined || existing[key] === "") {
          existing[key] = value;
          changed = true;
        }
      }
    } else {
      db.users.push({ ...account });
      changed = true;
    }
  }
  return changed;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
      if (data.length > 20_000_000) reject(new Error("Payload too large"));
    });
    req.on("end", () => {
      try {
        const contentType = String(req.headers["content-type"] || "");
        if (!data) return resolve({});
        if (contentType.includes("application/x-www-form-urlencoded")) {
          return resolve(Object.fromEntries(new URLSearchParams(data)));
        }
        resolve(JSON.parse(data));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function readRawBody(req, maxBytes = 2_000_000) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", chunk => {
      size += chunk.length;
      if (size > maxBytes) {
        reject(new Error("Payload too large"));
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function conversationEvidencePack(db) {
  ensureAiProfile(db.profile);
  const memory = db.profile.agentMemory || {};
  const latestCommand = (db.profile.agentCommands || [])[0] || null;
  const latestConversation = (db.profile.agentConversation || []).slice(-6);
  const pending = db.profile.agentPendingAction || null;
  const guided = activeGuidedMissionBrief(db);
  const voice = activeVoiceMissionBrief(db);
  const outcome = activeOutcomeLoopBrief(db);
  const supervisor = memory.conversationSupervisor || null;
  const governance = memory.reasoningGovernance || null;
  const status = pending
    ? "waiting-confirmation"
    : memory.activeClarification
      ? "asking-clarification"
      : memory.activeRecovery
        ? "recovering-unclear-command"
        : outcome?.status || guided?.status || "ready";
  const evidence = [
    latestCommand ? `Latest command: ${latestCommand.command}` : "No voice command recorded yet.",
    latestCommand ? `Understood as: ${latestCommand.intent}` : "Assistant understanding will appear after the first command.",
    pending ? `Pending action: ${pending.action || pending.tool || "workflow"} in ${pending.module || "AgriNexus"}` : "No pending action waiting for approval.",
    guided ? `Guided mission: ${guided.progress}% complete` : "No guided mission checklist active.",
    outcome ? `Outcome loop: ${outcome.nextVisibleAction}` : "No guided outcome loop active.",
    supervisor ? `Conversation supervisor: ${supervisor.lastScore || 0}/100 - ${supervisor.status}` : "Conversation supervisor ready.",
    governance ? `Reasoning governance: ${governance.lastScore || 0}/100 - ${governance.status}` : "Reasoning governance ready.",
    memory.activeJarvisSession ? `AgriNexus session: ${memory.activeJarvisSession.goal}` : "No AgriNexus session active.",
    memory.turnCoach?.nextQuestion ? `Next prompt: ${memory.turnCoach.nextQuestion}` : "Next prompt will appear after conversation starts."
  ];
  return {
    id: crypto.randomUUID(),
    status,
    latestCommand,
    pendingAction: pending,
    activeClarification: memory.activeClarification || null,
    activeRecovery: memory.activeRecovery || null,
    guidedMission: guided,
    voiceMission: voice,
    outcomeLoop: outcome,
    conversationSupervisor: supervisor,
    reasoningGovernance: governance,
    activeJarvisSession: memory.activeJarvisSession || null,
    turnCoach: memory.turnCoach || null,
    quality: memory.conversationQuality || {},
    counts: {
      commands: (db.profile.agentCommands || []).length,
      conversationTurns: (db.profile.agentConversation || []).length,
      confirmedActions: Number(memory.conversationQuality?.confirmedActions || 0),
      stagedActions: Number(memory.conversationQuality?.stagedActions || 0),
      openEndedAnswers: Number(memory.conversationQuality?.openEndedAnswers || 0)
    },
    evidence,
    recentTurns: latestConversation,
    createdAt: new Date().toISOString()
  };
}

function agentCapabilityRegistryState(db, providers = runtimeProviders(db)) {
  ensureAiProfile(db.profile);
  const providerReady = id => ["connected", "ready"].includes(providers.find(provider => provider.id === id)?.status);
  const liveGateForTool = tool => {
    if (tool.startsWith("ai.")) return providerReady("openai") ? "live" : "offline-fallback";
    if (tool.startsWith("health.")) return providerReady("telehealth") ? "live" : "local-workflow";
    if (tool.startsWith("map.")) return providerReady("maps") ? "live" : "local-intelligence";
    if (tool.startsWith("integrations.")) return providerReady("provider-engines") ? "live" : "needs-provider";
    if (tool.startsWith("trade.") || tool.startsWith("drone.")) return providerReady("trade") || providerReady("drone") ? "live" : "local-workflow";
    if (tool.startsWith("workforce.")) return providerReady("jobs") ? "live" : "local-workflow";
    if (tool.startsWith("learning.")) return providerReady("courses") ? "live" : "local-workflow";
    return "local-workflow";
  };
  const confirmationRequired = tool => /apply|payment|wallet|contact|consent|vitals|referral|followup|careplan|test_all|health_check|field_scan|flight_plan|intervention|advance_order/.test(tool);
  const tools = agentToolRegistry().map(item => ({
    ...item,
    confirmationRequired: confirmationRequired(item.tool),
    engineMode: liveGateForTool(item.tool),
    commandExample: `${item.module} ${item.action}`.toLowerCase()
  }));
  const modules = [...new Set(tools.map(item => item.module))].map(module => {
    const moduleTools = tools.filter(item => item.module === module);
    return {
      module,
      total: moduleTools.length,
      live: moduleTools.filter(item => item.engineMode === "live").length,
      confirmationRequired: moduleTools.filter(item => item.confirmationRequired).length,
      examples: moduleTools.slice(0, 3).map(item => item.commandExample)
    };
  });
  const liveCount = tools.filter(item => item.engineMode === "live").length;
  return {
    status: liveCount === tools.length ? "all-live" : "mixed-local-and-live",
    totalTools: tools.length,
    liveTools: liveCount,
    confirmationTools: tools.filter(item => item.confirmationRequired).length,
    modules,
    tools,
    updatedAt: new Date().toISOString()
  };
}

function jarvisReadinessModel(db, user, providers = runtimeProviders(db)) {
  ensureAiProfile(db.profile);
  const providerReady = id => ["connected", "ready"].includes(providers.find(provider => provider.id === id)?.status);
  const openAiReady = providerReady("openai") || Boolean(process.env.OPENAI_API_KEY);
  const voiceReady = providerReady("voice-stt") && providerReady("voice-tts");
  const phoneReady = providerReady("phone-voice");
  const databaseReady = Boolean(process.env.DATABASE_URL && usingPostgresState() && loadOptional("pg"));
  const liveEngineIds = ["learning-courses", "workforce-jobs", "health-telehealth", "trade-market", "field-drones", "maps", "translation"];
  const liveEngineCount = liveEngineIds.filter(providerReady).length;
  const appReady = fs.existsSync(path.join(ROOT, "public", "manifest.webmanifest")) && fs.existsSync(path.join(ROOT, "public", "sw.js"));
  const agentCapabilities = agentCapabilityRegistryState(db, providers);
  const items = [
    {
      id: "wake-word",
      title: "Wake-word and hands-free mode",
      ready: Boolean((db.profile.agentCommands || []).length && agentCapabilities.totalTools),
      level: "browser-assisted",
      evidence: "Browser mic security requires a user-started mic session; Hey AgriNexus mode keeps listening when allowed.",
      next: "For true always-on wake word, package AgriNexus as mobile/desktop app with native microphone permissions."
    },
    {
      id: "streaming-voice",
      title: "Streaming voice conversation",
      ready: openAiReady && voiceReady,
      level: openAiReady ? "live-turn-based" : "local-turn-based",
      evidence: openAiReady ? "OpenAI voice/text path is configured for natural spoken replies." : "Local/browser conversation path works; OpenAI key unlocks higher-quality voice.",
      next: "Add a realtime speech API session for interruption-aware speech-to-speech."
    },
    {
      id: "autonomous-planning",
      title: "Autonomous mission planning",
      ready: Boolean(agentCapabilities.totalTools >= 30 && (db.profile.activeGuidedMission || db.profile.agentPlans?.length)),
      level: "supervised-agentic",
      evidence: `${agentCapabilities.totalTools} supervised tools with confirmation gates, guided missions, turn coaching, and evidence packs.`,
      next: "Allow scheduled/background missions after user approval and provider credentials are connected."
    },
    {
      id: "live-engines",
      title: "External live engines",
      ready: liveEngineCount === liveEngineIds.length,
      level: `${liveEngineCount}/${liveEngineIds.length} engine groups live`,
      evidence: "Tracks learning, workforce, telehealth, trade, drones, maps, and translation provider readiness.",
      next: "Connect missing provider URLs/API keys in Render or replace provider-engine bridge with chosen vendors."
    },
    {
      id: "production-memory",
      title: "Production memory and audit",
      ready: databaseReady,
      level: databaseReady ? "postgres-backed" : "json-backed",
      evidence: databaseReady ? "DATABASE_URL with PostgreSQL state store is active." : "Local JSON memory works; PostgreSQL activation is prepared.",
      next: "Set DATABASE_URL, AGRINEXUS_STATE_STORE=postgres, and keep migrations active in hosted production."
    },
    {
      id: "mobile-app-layer",
      title: "Mobile/web app layer",
      ready: appReady,
      level: appReady ? "PWA-ready" : "browser-only",
      evidence: appReady ? "Manifest and service worker are present for installable web-app behavior." : "Browser mode works; app shell assets need setup.",
      next: "Package as PWA first, then native mobile for always-on wake, push notifications, GPS, camera, and offline field use."
    }
  ];
  const readyCount = items.filter(item => item.ready).length;
  return {
    status: readyCount === items.length ? "agrinexus-command-production-ready" : "agrinexus-command-progressive-ready",
    readyCount,
    total: items.length,
    score: Math.round((readyCount / items.length) * 100),
    items,
    summary: `AgriNexus is ${readyCount}/${items.length} on the AgriNexus command track: wake behavior, streaming voice, autonomous planning, live engines, production memory, and app layer.`,
    updatedAt: new Date().toISOString()
  };
}

function nativeVoiceRuntimeModel(db, user, providers = runtimeProviders(db)) {
  ensureAiProfile(db.profile);
  db.profile.nativePermissionSessions = db.profile.nativePermissionSessions || [];
  const bridgePath = path.join(PUBLIC, "native-bridge.json");
  let bridge = {};
  try {
    bridge = JSON.parse(fs.readFileSync(bridgePath, "utf8"));
  } catch {
    bridge = {};
  }
  const provider = id => providers.find(item => item.id === id) || {};
  const connected = id => provider(id).status === "connected";
  const hasEnv = key => Boolean(process.env[key] && String(process.env[key]).trim() && !String(process.env[key]).includes("replace-with"));
  const browserVoiceReady = true;
  const openAiVoiceReady = connected("voice-stt") && connected("voice-tts") && hasEnv("OPENAI_API_KEY");
  const phoneReady = connected("phone-voice") && hasEnv("TWILIO_ACCOUNT_SID") && hasEnv("TWILIO_AUTH_TOKEN") && hasEnv("TWILIO_PHONE_NUMBER");
  const nativeBridgeReady = Boolean(bridge.version && bridge.wakeRuntime && bridge.commandEnvelope && bridge.webCallbacks);
  const latestNativeSession = (db.profile.nativePermissionSessions || [])[0] || null;
  const nativeAlwaysOnReady = Boolean(latestNativeSession?.readiness?.alwaysOnReady || latestNativeSession?.alwaysOnReady);
  const locationReady = connected("maps") || hasEnv("MAPBOX_ACCESS_TOKEN") || hasEnv("GOOGLE_MAPS_API_KEY") || hasEnv("OPENROUTESERVICE_API_KEY");
  const productionMemoryReady = hasEnv("DATABASE_URL") && usingPostgresState() && Boolean(loadOptional("pg"));
  const realtimeStreamingReady = Boolean(process.env.OPENAI_API_KEY);
  const providerDepth = providerDepthModel(providers);
  const nativeRuntimePolicy = {
    architecture: "native-app-voice-permissions-plus-realtime-streaming",
    targetBehavior: "Jarvis/Siri/Alexa-style foreground app voice with native wake permissions, realtime speech when configured, and provider-aware routing.",
    wakeRule: "Native shells listen for wake phrases and only forward commands after a wake phrase or inside a short follow-up window.",
    privacyRule: bridge.wakeRuntime?.privacyRule || "Use visible listening status, user permission, audit records, and a one-tap off switch.",
    sensitiveActionRule: "Calls, SMS, WhatsApp, payments, job applications, provider handoffs, and health records require explicit confirmation before execution.",
    responseRule: "Acknowledge, repeat the need, give one short guidance step, then route or ask one clear question."
  };
  const items = [
    {
      id: "browser-voice",
      title: "Browser Voice Assistant",
      ready: browserVoiceReady,
      mode: "live-in-browser",
      evidence: "Ask Nexus can listen after user permission, answer aloud, stop by voice, change language, and run platform workflows."
    },
    {
      id: "openai-voice",
      title: "High Quality AI Voice",
      ready: openAiVoiceReady,
      mode: openAiVoiceReady ? "live-openai" : "provider-ready",
        evidence: openAiVoiceReady ? "OpenAI STT/TTS is configured." : "Add OPENAI_API_KEY with VOICE_STT_PROVIDER=openai and VOICE_TTS_PROVIDER=openai."
    },
    {
      id: "realtime-streaming",
      title: "Realtime Streaming Voice",
      ready: realtimeStreamingReady,
      mode: realtimeStreamingReady ? "openai-realtime-ready" : "needs-openai-key",
      evidence: realtimeStreamingReady
        ? `OpenAI Realtime voice path is available through ${openAiRealtimeModel()} with ${openAiRealtimeVoice()} voice.`
        : "Add OPENAI_API_KEY, then optionally OPENAI_REALTIME_MODEL and OPENAI_REALTIME_VOICE for low-latency speech-to-speech."
    },
    {
      id: "phone-assistant",
      title: "Phone Call Assistant",
      ready: phoneReady,
      mode: phoneReady ? "live-twilio" : "provider-ready",
      evidence: phoneReady ? "Twilio phone assistant credentials are configured." : "Add Twilio account SID, auth token, phone number, and webhook."
    },
    {
      id: "native-bridge",
      title: "Native Wake Bridge",
      ready: nativeBridgeReady,
      mode: nativeBridgeReady ? "android-ios-contract-ready" : "needs-contract",
      evidence: nativeBridgeReady ? `Bridge ${bridge.version} defines wake events, callbacks, permissions, command envelope, and offline queue.` : "native-bridge.json needs wake runtime and callback contract."
    },
    {
      id: "always-on-wake",
      title: "Always-On Wake",
      ready: nativeAlwaysOnReady,
      mode: nativeAlwaysOnReady ? "native-permission-active" : "requires-native-shell",
      evidence: nativeAlwaysOnReady
        ? `Native shell reported microphone, background audio, and wake mode active on ${latestNativeSession.platform || "mobile"}.`
        : "Browsers cannot safely provide hidden always-on wake. Android/iOS packaging must request OS-level mic/background audio with privacy controls."
    },
    {
      id: "camera-media",
      title: "Camera And Media Handoff",
      ready: nativeBridgeReady,
      mode: "contract-ready",
      evidence: "Native bridge includes camera.capture and media.attach callbacks for crop/injury videos and provider/buyer handoff."
    },
    {
      id: "gps-route",
      title: "GPS Route And Location",
      ready: locationReady,
      mode: locationReady ? "provider-or-browser-ready" : "provider-ready",
      evidence: locationReady ? "Map/location provider or browser geolocation path is available." : "Add map/routing provider for live turn-by-turn distance and tracking."
    },
    {
      id: "production-memory",
      title: "Long-Term Production Memory",
      ready: productionMemoryReady,
      mode: productionMemoryReady ? "postgres-backed" : "local-provider-ready",
      evidence: productionMemoryReady ? "PostgreSQL-backed state is active." : "Set DATABASE_URL and AGRINEXUS_STATE_STORE=postgres for hosted long-term memory."
    }
  ];
  const readyCount = items.filter(item => item.ready).length;
  return {
    status: readyCount >= 6 ? "native-runtime-ready-for-packaging" : "native-runtime-provider-ready",
    readyCount,
    total: items.length,
    score: Math.round((readyCount / items.length) * 100),
    architectureLevel: "native-voice-infrastructure",
    nativeRuntimePolicy,
    realtimeStreaming: {
      ready: realtimeStreamingReady,
      endpoint: "/api/voice/realtime/call",
      statusEndpoint: "/api/voice/realtime/status",
      model: openAiRealtimeModel(),
      voice: openAiRealtimeVoice(),
      transport: "WebRTC from browser/native webview to server-negotiated OpenAI Realtime session",
      fallback: "OpenAI TTS/STT or browser/native speech when realtime is unavailable."
    },
    providerDepth,
    mobilePermissionPlan: {
      android: {
        permissions: ["RECORD_AUDIO", "FOREGROUND_SERVICE_MICROPHONE", "POST_NOTIFICATIONS", "ACCESS_FINE_LOCATION", "CAMERA"],
        runtime: "Foreground voice service with wake gating and visible notification.",
        source: "native-mobile/android"
      },
      ios: {
        permissions: ["NSMicrophoneUsageDescription", "NSSpeechRecognitionUsageDescription", "UIBackgroundModes/audio"],
        runtime: "Foreground audio/speech session with wake gating and WebView bridge.",
        source: "native-mobile/ios/AgriNexus"
      },
      desktop: {
        permissions: ["OS microphone", "speech recognition", "speech synthesis", "network"],
        runtime: "Visible Windows listener that can wake when Chrome is closed.",
        source: "native-desktop/windows/NexusWakeListener.ps1"
      }
    },
    wakePhrases: bridge.wakePhrases || ["Hey AgriNexus", "Nexus", "Agri"],
    permissions: bridge.requiredPermissions || [],
    stopPhrases: bridge.wakeRuntime?.stopPhrases || ["Nexus stop"],
    commandEnvelope: bridge.commandEnvelope || {},
    apiEndpoints: bridge.apiEndpoints || {},
    moduleVoiceExamples: bridge.moduleVoiceExamples || {},
    latestNativeSession,
    items,
    nextNativeStep: "Package AgriNexus with Capacitor, React Native, Flutter, or another native shell, then map native callbacks into window.AgriNexusNativeBridge.receive().",
    privacyRule: bridge.wakeRuntime?.privacyRule || "Use visible listening status, user permission, and a one-tap off switch.",
    updatedAt: new Date().toISOString()
  };
}

function permissionGranted(value) {
  return ["granted", "foreground", "background", true].includes(value);
}

function providerDepthModel(providers = runtimeProviders({}), env = process.env) {
  const provider = id => providers.find(item => item.id === id) || {};
  const connected = id => provider(id).status === "connected";
  const hasAny = keys => keys.some(key => Boolean(env[key] && String(env[key]).trim() && !String(env[key]).includes("replace-with")));
  const domains = [
    {
      id: "conversation",
      title: "Open conversation and reasoning",
      ready: connected("openai") || hasAny(["OPENAI_API_KEY", "AI_WEBHOOK_URL"]),
      providers: ["openai", "web-search"],
      env: ["OPENAI_API_KEY", "OPENAI_WEB_SEARCH_ENABLED", "TAVILY_API_KEY", "BRAVE_SEARCH_API_KEY", "EXA_API_KEY"],
      purpose: "General questions, rural guidance, imperfect-language understanding, and provider-aware answers."
    },
    {
      id: "voice-streaming",
      title: "Realtime voice streaming",
      ready: Boolean(env.OPENAI_API_KEY),
      providers: ["openai-realtime-webrtc", "voice-stt", "voice-tts"],
      env: ["OPENAI_API_KEY", "OPENAI_REALTIME_MODEL", "OPENAI_REALTIME_VOICE", "VOICE_STT_PROVIDER", "VOICE_TTS_PROVIDER"],
      purpose: "Low-latency speech-to-speech behavior with interruption support."
    },
    {
      id: "native-permissions",
      title: "Native app permissions",
      ready: true,
      providers: ["native-mobile", "native-desktop"],
      env: [],
      purpose: "OS microphone, foreground service, camera, GPS, notifications, and secure app handoff."
    },
    {
      id: "maps-routing-location",
      title: "Maps, routing, and GPS",
      ready: connected("maps") || connected("routing-geocoding") || hasAny(["MAPBOX_ACCESS_TOKEN", "OPENROUTESERVICE_API_KEY", "GOOGLE_MAPS_API_KEY", "MAP_TILE_URL"]),
      providers: ["maps", "routing-geocoding", "trade-logistics"],
      env: ["MAP_TILE_PROVIDER", "MAP_TILE_URL", "MAPBOX_ACCESS_TOKEN", "OPENROUTESERVICE_API_KEY", "GOOGLE_MAPS_API_KEY", "LOGISTICS_TRACKING_URL"],
      purpose: "Clinic/pharmacy maps, shipment routes, route ETAs, geocoding, and field location context."
    },
    {
      id: "health-provider-depth",
      title: "Telehealth, clinics, pharmacy, and EHR",
      ready: connected("health-ehr") || connected("health-openmrs") || connected("telehealth-provider") || hasAny(["OPENMRS_BASE_URL", "TELEHEALTH_PROVIDER_URL", "PHARMACY_PROVIDER_URL"]),
      providers: ["health-ehr", "health-openmrs", "telehealth-provider", "pharmacy-network"],
      env: ["OPENMRS_BASE_URL", "OPENMRS_TOKEN", "TELEHEALTH_PROVIDER_URL", "PHARMACY_PROVIDER_URL"],
      purpose: "Mobile-clinic intake, provider handoff, pharmacy location support, and care documentation."
    },
    {
      id: "learning-workforce",
      title: "Learning and workforce data",
      ready: connected("learning-lms") || connected("workforce-job-search") || hasAny(["MOODLE_BASE_URL", "MOODLE_TOKEN", "OPENEDX_BASE_URL", "ADZUNA_APP_ID", "ADZUNA_APP_KEY", "JOB_SEARCH_API_KEY"]),
      providers: ["learning-lms", "learning-courses", "learning-certificates", "workforce-job-search", "workforce-jobs"],
      env: ["MOODLE_BASE_URL", "MOODLE_TOKEN", "OPENEDX_BASE_URL", "ADZUNA_APP_ID", "ADZUNA_APP_KEY", "JOB_SEARCH_API_KEY"],
      purpose: "Course catalog, enrollment, certificates, job search, matching, and applications."
    },
    {
      id: "agritech-field-data",
      title: "Drone, satellite, and field intelligence",
      ready: connected("field-drones") || connected("satellite-field-data") || hasAny(["SENTINEL_HUB_CLIENT_ID", "SENTINEL_HUB_CLIENT_SECRET", "SATELLITE_API_KEY", "DRONE_PROVIDER_URL"]),
      providers: ["field-drones", "satellite-field-data"],
      env: ["SENTINEL_HUB_CLIENT_ID", "SENTINEL_HUB_CLIENT_SECRET", "SATELLITE_API_KEY", "DRONE_PROVIDER_URL"],
      purpose: "Crop stress, pest/water risk, field scan explanation, and farmer-friendly next steps."
    },
    {
      id: "trade-communications-payments",
      title: "Trade, communication, logistics, and payment",
      ready: connected("trade-payments") || connected("sms-delivery") || connected("whatsapp-delivery") || connected("phone-voice") || hasAny(["PAYSTACK_SECRET_KEY", "FLUTTERWAVE_SECRET_KEY", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"]),
      providers: ["trade-payments", "trade-logistics", "sms-delivery", "whatsapp-delivery", "phone-voice", "music-playback"],
      env: ["PAYSTACK_SECRET_KEY", "FLUTTERWAVE_SECRET_KEY", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "SPOTIFY_CLIENT_ID"],
      purpose: "Buyer/seller contact, SMS, WhatsApp, outbound calls, receipts, transaction fees, and optional media playback."
    }
  ];
  const readyCount = domains.filter(item => item.ready).length;
  return {
    status: readyCount === domains.length ? "deep-provider-data-ready" : "provider-depth-progressive-ready",
    readyCount,
    total: domains.length,
    score: Math.round((readyCount / domains.length) * 100),
    domains,
    summary: `${readyCount}/${domains.length} provider-depth domains are live or contract-ready for Nexus native voice operations.`,
    updatedAt: new Date().toISOString()
  };
}

function registerNativePermissionSession(db, user, body = {}) {
  ensureAiProfile(db.profile);
  db.profile.nativePermissionSessions = db.profile.nativePermissionSessions || [];
  const permissions = body.permissions || {};
  const device = body.device || {};
  const runtime = body.runtime || {};
  const wakeMode = String(body.wakeMode || permissions.wakeMode || "manual").toLowerCase();
  const microphoneReady = permissionGranted(permissions.microphone);
  const backgroundAudioReady = permissionGranted(permissions.backgroundAudio) || permissionGranted(permissions.backgroundAudioMode);
  const notificationsReady = permissionGranted(permissions.notifications) || Boolean(body.pushToken);
  const locationReady = permissionGranted(permissions.geolocation) || permissions.geolocation === "background";
  const cameraReady = permissionGranted(permissions.camera);
  const alwaysOnReady = microphoneReady && backgroundAudioReady && /always|wake|background/.test(wakeMode);
  const session = {
    id: crypto.randomUUID(),
    platform: String(device.platform || body.platform || "unknown"),
    appVersion: String(device.appVersion || body.appVersion || ""),
    deviceId: String(device.deviceId || body.deviceId || "").slice(0, 80),
    wakeMode,
    pushTokenPresent: Boolean(body.pushToken),
    permissions: {
      microphone: permissions.microphone || "unknown",
      speechRecognition: permissions.speechRecognition || permissions.speech || "unknown",
      notifications: permissions.notifications || (body.pushToken ? "granted" : "unknown"),
      backgroundAudio: permissions.backgroundAudio || permissions.backgroundAudioMode || "unknown",
      geolocation: permissions.geolocation || "unknown",
      backgroundLocation: permissions.backgroundLocation || "unknown",
      camera: permissions.camera || "unknown",
      secureStorage: permissions.secureStorage || "unknown"
    },
    runtime: {
      voiceGate: runtime.voiceGate || "wake-phrase",
      followUpWindowSeconds: Number(runtime.followUpWindowSeconds || 12),
      realtimeProvider: runtime.realtimeProvider || "openai-realtime-webrtc",
      fallback: runtime.fallback || "native-speech-recognizer"
    },
    readiness: {
      microphoneReady,
      backgroundAudioReady,
      notificationsReady,
      locationReady,
      cameraReady,
      alwaysOnReady
    },
    privacyControls: {
      visibleListeningIndicator: body.visibleListeningIndicator !== false,
      oneTapOff: body.oneTapOff !== false,
      wakeAuditEnabled: body.wakeAuditEnabled !== false
    },
    status: alwaysOnReady ? "native-always-on-ready" : microphoneReady ? "native-voice-ready" : "needs-native-permission",
    createdBy: user?.email || "native",
    createdAt: new Date().toISOString()
  };
  db.profile.nativePermissionSessions.unshift(session);
  db.profile.nativePermissionSessions = db.profile.nativePermissionSessions.slice(0, 40);
  db.profile.agentMemory.lastStatus = session.status;
  db.profile.agentMemory.lastSummary = alwaysOnReady
    ? "Native always-on Nexus wake mode is reported ready by the mobile shell."
    : "Native voice permissions were recorded; always-on wake still needs microphone, background audio, and wake mode.";
  db.profile.agentMemory.updatedAt = session.createdAt;
  logIntegration(db, {
    providerId: "native-mobile",
    module: "Agent AI",
    action: "native.permissions_registered",
    status: alwaysOnReady ? "success" : "needs-setup",
    detail: `${session.platform} native permissions registered: ${session.status}.`,
    metadata: { sessionId: session.id, readiness: session.readiness, wakeMode },
    dispatch: false
  });
  return session;
}

function communicationsExecutionReadiness(db, user, body = {}) {
  const providers = runtimeProviders(db);
  const provider = id => providers.find(item => item.id === id) || {};
  const smsTo = twilioRecipientForProvider("sms-delivery", body);
  const whatsappTo = twilioRecipientForProvider("whatsapp-delivery", body);
  const phoneTo = outboundCallRecipientForPurpose(body.purpose || "AgriNexus outbound support", body);
  const twilioCore = hasTwilioMessagingCore();
  const voiceCore = hasTwilioVoiceCore();
  const channelStatus = (coreReady, destination) => {
    if (!coreReady) return "needs-provider-credentials";
    if (!destination) return "provider-ready-needs-recipient";
    return "ready-to-execute";
  };
  const nextAction = (channel, destination) => {
    if (destination) return "Confirm the action and Nexus can execute it.";
    if (channel === "phone") return "Tell Nexus who to call or provide a phone number, for example: Nexus, call Ron at +254...";
    if (channel === "sms") return "Tell Nexus who should receive the SMS or add DEMO_SMS_TO / TRADE_BUYER_SMS_TO in Render.";
    return "Tell Nexus who should receive the WhatsApp message or add DEMO_WHATSAPP_TO / TRADE_BUYER_WHATSAPP_TO in Render.";
  };
  const channels = [
    {
      id: "phone",
      title: "Outbound phone calls",
      providerId: "phone-voice",
      ready: Boolean(voiceCore && phoneTo),
      providerReady: Boolean(voiceCore),
      status: channelStatus(voiceCore, phoneTo),
      providerStatus: provider("phone-voice").status || "unknown",
      destinationReady: Boolean(phoneTo),
      canExecuteWhenRecipientProvided: Boolean(voiceCore),
      endpoint: "/api/voice/phone/outbound-call",
      requiredEnv: ["PHONE_PROVIDER=twilio", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "PUBLIC_BASE_URL", "DEMO_CALL_TO or contact number"],
      canExecuteNow: Boolean(voiceCore && phoneTo),
      nextAction: nextAction("phone", phoneTo)
    },
    {
      id: "sms",
      title: "SMS delivery",
      providerId: "sms-delivery",
      ready: Boolean(twilioCore && smsTo),
      providerReady: Boolean(twilioCore),
      status: channelStatus(twilioCore, smsTo),
      providerStatus: provider("sms-delivery").status || "unknown",
      destinationReady: Boolean(smsTo),
      canExecuteWhenRecipientProvided: Boolean(twilioCore),
      endpoint: "/api/notifications/send",
      requiredEnv: ["SMS_PROVIDER=twilio", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "DEMO_SMS_TO or channel recipient"],
      canExecuteNow: Boolean(twilioCore && smsTo),
      nextAction: nextAction("sms", smsTo)
    },
    {
      id: "whatsapp",
      title: "WhatsApp delivery",
      providerId: "whatsapp-delivery",
      ready: Boolean(twilioCore && whatsappTo),
      providerReady: Boolean(twilioCore),
      status: channelStatus(twilioCore, whatsappTo),
      providerStatus: provider("whatsapp-delivery").status || "unknown",
      destinationReady: Boolean(whatsappTo),
      canExecuteWhenRecipientProvided: Boolean(twilioCore),
      endpoint: "/api/notifications/send",
      requiredEnv: ["WHATSAPP_PROVIDER=twilio", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "TWILIO_WHATSAPP_FROM or Twilio WhatsApp sender", "DEMO_WHATSAPP_TO or channel recipient"],
      canExecuteNow: Boolean(twilioCore && whatsappTo),
      nextAction: nextAction("whatsapp", whatsappTo)
    }
  ];
  const readyCount = channels.filter(item => item.ready).length;
  const providerReadyCount = channels.filter(item => item.providerReady).length;
  return {
    status: readyCount === channels.length
      ? "live-communications-ready"
      : providerReadyCount === channels.length
        ? "communications-provider-ready-needs-recipient"
        : providerReadyCount
          ? "partial-communications-provider-ready"
          : "communications-provider-needs-setup",
    readyCount,
    providerReadyCount,
    total: channels.length,
    channels,
    voiceCommands: [
      "Nexus, call Ron",
      "Nexus, send SMS to the provider",
      "Nexus, WhatsApp the buyer",
      "Nexus, follow up now"
    ],
    safety: "Live phone, SMS, and WhatsApp actions remain confirmation-gated before real delivery.",
    updatedAt: new Date().toISOString()
  };
}

function jarvisProductionTenModel(db, providers = runtimeProviders(db)) {
  ensureAiProfile(db.profile);
  const provider = id => providers.find(item => item.id === id) || {};
  const connected = id => provider(id).status === "connected";
  const hasEnv = key => Boolean(process.env[key] && String(process.env[key]).trim() && !String(process.env[key]).includes("replace-with"));
  const scriptExists = file => fs.existsSync(path.join(ROOT, "scripts", file));
  const legalReady = ["terms.html", "privacy.html", "refund.html"].every(file => fs.existsSync(path.join(PUBLIC, file)));
  const providerGroups = ["learning-courses", "workforce-jobs", "health-telehealth", "trade-market", "field-drones", "maps", "translation", "openai"];
  const voiceReady = connected("voice-stt") && connected("voice-tts") && connected("phone-voice") && hasEnv("OPENAI_API_KEY");
  const databaseReady = hasEnv("DATABASE_URL") && usingPostgresState() && Boolean(loadOptional("pg"));
  const accountReady = connected("auth-users") && connected("auth-password-reset") && hasEnv("SESSION_SECRET") && hasEnv("PASSWORD_PEPPER");
  const securityReady = hasEnv("SESSION_SECRET") && hasEnv("PASSWORD_PEPPER") && REQUIRE_LIVE_SERVICES;
  const observabilityReady = scriptExists("production-preflight.js") && scriptExists("engine-connection-report.js") && Boolean((db.profile.integrationEvents || []).length);
  const learningReady = Boolean((db.profile.agentMemory?.longTermFacts || []).length || (db.profile.agentCommands || []).length);
  const items = [
    {
      id: "live-provider-depth",
      title: "Real Live Provider Depth",
      ready: providerGroups.every(connected),
      level: `${providerGroups.filter(connected).length}/${providerGroups.length}`,
      evidence: "OpenAI, courses, jobs, telehealth, markets, drones, maps, and translation providers are tracked.",
      next: "Add any missing provider URLs/API keys in Render or connect direct vendor endpoints."
    },
    {
      id: "production-voice",
      title: "Production Voice",
      ready: voiceReady,
      level: voiceReady ? "live voice configured" : "browser/provider-ready voice",
      evidence: "Browser mic, OpenAI TTS/STT routes, phone voice webhook, interruption, and voice help are wired.",
      next: "Keep OpenAI credits active and add realtime/streaming voice when ready."
    },
    {
      id: "native-mobile",
      title: "Native Mobile Permissions",
      ready: fs.existsSync(path.join(PUBLIC, "native-bridge.json")) && fs.existsSync(path.join(PUBLIC, "manifest.webmanifest")),
      level: "PWA/native-bridge ready",
      evidence: "Manifest, service worker, install flow, permission prompts, and native bridge contract exist.",
      next: "Wrap with Capacitor/React Native for always-on wake, background GPS, camera, push, and OS mic controls."
    },
    {
      id: "real-accounts",
      title: "Real User And Subscriber Operations",
      ready: accountReady && connected("billing-subscriptions"),
      level: accountReady ? "auth ready" : "auth provider-ready",
      evidence: "Role login, user creation, admin creation, password reset, subscriber invite, and billing checkout are wired.",
      next: "Finish live auth/password reset provider, billing price id, and production email templates."
    },
    {
      id: "production-database",
      title: "Persistent Production Database",
      ready: databaseReady,
      level: databaseReady ? "PostgreSQL active" : "PostgreSQL prepared",
      evidence: "pg package, backup/restore scripts, and state-store switch are present.",
      next: "Set DATABASE_URL and AGRINEXUS_STATE_STORE=postgres in Render."
    },
    {
      id: "safety-governance",
      title: "Safety And Human Governance",
      ready: legalReady,
      level: legalReady ? "guardrails present" : "legal pages needed",
      evidence: "Terms, privacy, refund, telehealth consent, AI review, confirmation gates, and audit records are in the platform.",
      next: "Add formal clinical/legal review before real diagnosis, hiring decisions, or money movement."
    },
    {
      id: "observability",
      title: "Observability And Operations",
      ready: observabilityReady,
      level: observabilityReady ? "operational evidence active" : "tooling ready",
      evidence: "Health checks, live service checks, engine reports, production preflight, audit events, and admin usage are wired.",
      next: "Add hosted log drains, uptime alerts, AI cost dashboards, and incident notification rules."
    },
    {
      id: "security-hardening",
      title: "Security Hardening",
      ready: securityReady,
      level: securityReady ? "strict production mode" : "security controls prepared",
      evidence: "Session secrets, password pepper, strict live mode, security headers, payload limits, and rate limiting are expected.",
      next: "Run penetration testing, secrets rotation, encrypted PHI/PII storage, and abuse monitoring."
    },
    {
      id: "real-agent-learning",
      title: "Real Agent Learning And Memory",
      ready: learningReady && databaseReady,
      level: learningReady ? "memory active" : "memory prepared",
      evidence: "Conversation memory, mode memory, long-term facts, turn coaching, evidence packs, and agent brain state are wired.",
      next: "Use PostgreSQL-backed consented memory, retrieval policies, organization playbooks, and feedback scoring."
    },
    {
      id: "end-to-end-live-testing",
      title: "End-To-End Live Testing",
      ready: ["smoke.js", "production-clickthrough.js", "production-complete-check.js", "full-production-regression.js", "provider-engines-smoke.js"].every(scriptExists),
      level: "regression suite present",
      evidence: "Smoke, provider, click-through, completeness, behavior, mobile, placeholder, translation, and production regression tests exist.",
      next: "Add hosted Playwright browser runs, mobile-device tests, provider sandbox tests, and CI deployment gates."
    }
  ];
  const readyCount = items.filter(item => item.ready).length;
  const providerReadyCount = items.filter(item => item.ready || item.level.includes("ready") || item.level.includes("prepared") || item.level.includes("present")).length;
  return {
    status: readyCount === items.length ? "jarvis-production-ready" : "jarvis-production-progress",
    readyCount,
    providerReadyCount,
    total: items.length,
    score: Math.round((readyCount / items.length) * 100),
    providerReadyScore: Math.round((providerReadyCount / items.length) * 100),
    items,
    summary: `AgriNexus is ${readyCount}/${items.length} fully live and ${providerReadyCount}/${items.length} code/provider-ready for production smart agentic Jarvis behavior.`,
    nextSteps: items.filter(item => !item.ready).map(item => `${item.title}: ${item.next}`),
    updatedAt: new Date().toISOString()
  };
}

function deepOperatingIntelligence(db, user, providers = runtimeProviders(db), options = {}) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureCommunicationProfile(db.profile);
  const provider = id => providers.find(item => item.id === id) || {};
  const connected = id => provider(id).status === "connected";
  const deferredIds = new Set(["billing-subscriptions", "auth-password-reset", "email-delivery"]);
  const liveEngineIds = ["database", "openai", "voice-stt", "voice-tts", "phone-voice", "sms-delivery", "whatsapp-delivery", "translation", "maps", "learning-courses", "workforce-jobs", "health-telehealth", "trade-market", "field-drones"];
  const liveEngines = liveEngineIds.map(id => ({
    id,
    name: provider(id).name || id,
    status: provider(id).status || "unknown",
    mode: provider(id).mode || "unknown",
    detail: provider(id).detail || "No provider detail available."
  }));
  const strongLive = liveEngines.filter(item => item.status === "connected").length;
  const readiness = productionReadiness(providers);
  const smart = smartNextActions(db, user, providers).items.slice(0, 5);
  const { country, route } = activeContext(db);
  const mode = options.mode || user?.role || "Standard User";
  const moduleDepth = [
    {
      id: "learning",
      title: "Learning",
      state: `${(db.profile.enrollments || []).length} enrollment(s), ${(db.profile.certificates || []).length} certificate(s)`,
      intelligence: "Nexus can choose a course, explain it simply, add captions/audio/offline support, track progress, and connect training to jobs.",
      liveProvider: connected("learning-courses") && connected("learning-certificates"),
      nextCommand: "Nexus, help me start the right course"
    },
    {
      id: "workforce",
      title: "Workforce",
      state: `${db.profile.readiness || 0}% readiness, ${(db.profile.applications || []).length} application(s), ${(db.profile.shiftSchedule || []).length} shift item(s)`,
      intelligence: "Nexus can match a role, explain readiness gaps, apply, schedule interviews, assign mentors, and prepare shift evidence.",
      liveProvider: connected("workforce-jobs"),
      nextCommand: "Nexus, help me apply for a job"
    },
    {
      id: "health",
      title: "Telehealth",
      state: `${(db.profile.healthIntakes || []).length} intake(s), ${(db.profile.videoSessions || []).length} video handoff(s), ${country.risk} regional risk`,
      intelligence: "Nexus can run intake, check danger signals without diagnosing, open video, prepare captions, notify caregiver, and route to provider support.",
      liveProvider: connected("health-telehealth") && connected("phone-voice"),
      nextCommand: "Nexus, walk me through telehealth"
    },
    {
      id: "trade",
      title: "AgriTrade",
      state: `${(db.profile.orders || []).length} order(s), ${(db.profile.tradeMessageThreads || []).length} buyer thread(s), ${(db.profile.droneScans || []).length} drone scan(s)`,
      intelligence: "Nexus can help sell a crop, contact the buyer, create order evidence, track route risk, explain drone findings, and prepare payment/logistics steps.",
      liveProvider: connected("trade-market") && connected("field-drones") && connected("maps"),
      nextCommand: "Nexus, help me sell my crop and track the route"
    },
    {
      id: "maps",
      title: "Maps And Route Intelligence",
      state: `${country.name}, ${route.name}, checkpoint ${db.profile.activeCheckpoint}`,
      intelligence: "Nexus can show country context, route risk, facility access, shipment lane, outbreak context, and drone/map evidence in plain language.",
      liveProvider: connected("maps"),
      nextCommand: "Nexus, open the map and explain the risk"
    },
    {
      id: "agent",
      title: "Nexus Agent Brain",
      state: `${(db.profile.agentConversation || []).length} conversation turn(s), ${(db.profile.agentMemory.reasoningHistory || []).length} reasoning record(s)`,
      intelligence: "Nexus can listen, reason, remember, recover from unclear speech, ask questions, stage safe workflows, and explain evidence before action.",
      liveProvider: connected("openai") || Boolean(process.env.OPENAI_API_KEY),
      nextCommand: "Nexus, go deeper"
    }
  ];
  const modeGuidance = {
    "Standard User": {
      label: "User mode",
      promise: "Keep it simple, voice-first, and action-based. One big choice, one guided step, clear captions, and confirmation before records or messages change.",
      next: ["Ask what the person needs", "Open the right service", "Explain in plain language", "Confirm before action"]
    },
    Admin: {
      label: "Admin mode",
      promise: "Monitor live engines, users, safety, audit evidence, workflow failures, and provider readiness while keeping deferred services clearly separated.",
      next: ["Run live service check", "Review audit feed", "Check provider mismatches", "Inspect mode permissions"]
    },
    Investor: {
      label: "Investor mode",
      promise: "Show impact, live engine depth, rural use cases, accessibility, agentic behavior, and the path from demo to deployable operating system.",
      next: ["Present platform story", "Show live services", "Run voice demo", "Show farmer-to-market mission"]
    }
  };
  const deferred = providers
    .filter(item => deferredIds.has(item.id))
    .map(item => ({ id: item.id, name: item.name, status: item.status, reason: "Deferred by operator for now; not blocking deeper AI, voice, maps, trade, health, workforce, or learning behavior." }));
  const intelligence = {
    id: crypto.randomUUID(),
    status: strongLive >= 12 ? "deep-live-operating" : "deep-provider-ready",
    mode: modeGuidance[mode]?.label || "Cross-mode",
    activeCountry: country.name,
    activeRoute: route.name,
    liveEngineScore: `${strongLive}/${liveEngines.length}`,
    readinessScore: `${readiness.readyCount}/${readiness.total}`,
    liveEngines,
    deferred,
    moduleDepth,
    modeGuidance: modeGuidance[mode] || modeGuidance["Standard User"],
    autonomy: {
      listens: connected("voice-stt") || Boolean(process.env.OPENAI_API_KEY),
      speaks: connected("voice-tts") || connected("phone-voice") || Boolean(process.env.OPENAI_API_KEY),
      reasons: connected("openai") || Boolean(process.env.OPENAI_API_KEY),
      translates: connected("translation"),
      maps: connected("maps"),
      contacts: connected("phone-voice") || connected("sms-delivery") || connected("whatsapp-delivery"),
      actsWithConfirmation: true,
      recoversFromUnclearSpeech: true,
      explainsEvidence: true
    },
    nextActions: smart.map(item => ({ title: item.title, module: item.module, detail: item.detail, command: item.command || item.title })),
    plainLanguageSummary: `Nexus is operating deeply with ${strongLive}/${liveEngines.length} priority live engines, ${readiness.readyCount}/${readiness.total} production checks ready, and active context in ${country.name} on ${route.name}. Billing, password reset, and email can remain deferred while OpenAI, Twilio voice/SMS/WhatsApp, maps, provider bridge, learning, workforce, health, trade, and drone workflows keep moving.`,
    createdAt: new Date().toISOString()
  };
  if (options.persist) {
    db.profile.agentMemory.deepOperatingHistory = [intelligence, ...(db.profile.agentMemory.deepOperatingHistory || [])].slice(0, 25);
    db.profile.agentMemory.lastDeepOperatingIntelligence = intelligence;
    db.profile.agentMemory.lastStatus = intelligence.status;
    db.profile.agentMemory.lastSummary = intelligence.plainLanguageSummary;
    db.profile.agentMemory.updatedAt = intelligence.createdAt;
  }
  return intelligence;
}

function noVendorUpgradeTenPack(db, user, providers = runtimeProviders(db), options = {}) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureCommunicationProfile(db.profile);
  const { country, route } = activeContext(db);
  const language = db.profile.accessibilityProfile?.language || user?.language || "en";
  const missionBlueprints = [
    {
      id: "farmer-sell-crop",
      title: "Help a farmer sell a crop",
      voice: "Nexus, help me sell my crop",
      steps: ["Ask crop and quantity", "Run drone/field evidence", "Review market", "Contact buyer", "Track route", "Prepare payment evidence"],
      tools: ["drone.field_scan", "trade.market_review", "trade.buyer_contact", "map.route_risk", "trade.advance_order"]
    },
    {
      id: "patient-telehealth-support",
      title: "Help a patient get telehealth support",
      voice: "Nexus, walk me through telehealth",
      steps: ["Ask what happened", "Check danger signals", "Capture accessibility needs", "Prepare provider handoff", "Open video if needed", "Schedule follow-up"],
      tools: ["health.intake", "health.accessibility_review", "health.video_session", "health.caregiver", "health.followup"]
    },
    {
      id: "learner-job-ready",
      title: "Help a learner get job-ready",
      voice: "Nexus, help me start the right course",
      steps: ["Ask learning goal", "Pick course", "Prepare captions/audio", "Complete lesson", "Issue certificate", "Connect to role"],
      tools: ["learning.start_or_continue", "learning.access_caption", "learning.complete_lesson", "learning.certificate", "workforce.match_role"]
    },
    {
      id: "worker-apply-role",
      title: "Help a worker apply for a role",
      voice: "Nexus, help me apply for a job",
      steps: ["Review profile", "Check readiness gaps", "Match role", "Prepare application", "Schedule interview", "Assign mentor"],
      tools: ["workforce.build_profile", "workforce.match_role", "workforce.apply_role", "workforce.schedule_interview", "workforce.assign_mentor"]
    }
  ];
  const guidedQuestions = {
    farmer: ["What crop are you selling?", "How much do you have?", "Do you already have a buyer?", "Do you need route tracking or drone evidence?"],
    patient: ["What happened?", "Is the person safe right now?", "Do they need captions, audio, large print, or a caregiver?", "Should we open video for the provider?"],
    learner: ["What do you want to learn?", "Do you prefer audio, captions, or large text?", "Do you want a certificate?", "Do you want this linked to a job?"],
    worker: ["What kind of work do you want?", "Do you need help with documents?", "Do you want to apply now?", "Do you need interview practice?"]
  };
  const items = [
    { id: "deeper-guided-conversations", title: "Deeper guided conversations", status: "active", evidence: "Role-specific question banks and conversational intake flows are available for farmer, patient, learner, and worker paths." },
    { id: "scenario-missions", title: "Scenario missions", status: "active", evidence: `${missionBlueprints.length} mission blueprints cover crop sale, telehealth, learning-to-work, and job application journeys.` },
    { id: "better-user-mode", title: "Better user mode", status: "active", evidence: "Simple app-mode tabs/buttons, inline confirmations, captions, no-partial-window containment, and self-repair checks are active." },
    { id: "stronger-simulated-data", title: "Stronger simulated data", status: "active", evidence: `${db.courses.length} courses, ${db.roles.length} roles, ${(db.products || []).length} products, ${db.countries.length} country contexts, and ${db.routes.length} route corridors are available.` },
    { id: "local-evidence-records", title: "Local evidence records", status: "active", evidence: "Actions create saved records for applications, messages, intakes, route reports, drone reports, certificates, provider events, and activity." },
    { id: "nexus-memory", title: "Nexus memory", status: "active", evidence: `${(db.profile.agentMemory.longTermFacts || []).length + (db.profile.agentMemory.preferences || []).length + (db.profile.agentMemory.learnedPatterns || []).length} durable memory item(s) plus mode and conversation history.` },
    { id: "accessibility-polish", title: "Accessibility polish", status: "active", evidence: `Voice-first support, captions, audio, large-print, screen-reader, caregiver handoff, and ${language} language context are tracked.` },
    { id: "investor-demo-missions", title: "Investor demo missions", status: "active", evidence: "WOW demo, live investor demo, evidence export, impact dashboard, and mission timeline are available." },
    { id: "admin-operating-center", title: "Admin operating center", status: "active", evidence: "Admin sees providers, readiness, users, audits, production plans, live checks, usage events, and deferred services." },
    { id: "live-readiness-transparency", title: "Live readiness transparency", status: "active", evidence: "Deep operating intelligence separates live engines, local evidence workflows, provider bridge, and intentionally deferred services." }
  ];
  const pack = {
    id: crypto.randomUUID(),
    status: "no-vendor-depth-active",
    total: items.length,
    readyCount: items.filter(item => item.status === "active").length,
    country: country.name,
    route: route.name,
    language,
    items,
    guidedQuestions,
    missionBlueprints,
    localRecords: {
      enrollments: (db.profile.enrollments || []).length,
      certificates: (db.profile.certificates || []).length,
      applications: (db.profile.applications || []).length,
      healthIntakes: (db.profile.healthIntakes || []).length,
      orders: (db.profile.orders || []).length,
      droneScans: (db.profile.droneScans || []).length,
      communicationThreads: (db.profile.communicationThreads || []).length + (db.profile.tradeMessageThreads || []).length,
      providerEvents: (db.profile.integrationEvents || []).length
    },
    nextCommands: missionBlueprints.map(item => item.voice),
    plainLanguageSummary: `All 10 no-new-vendor upgrades are active. Nexus can guide missions, ask better questions, use richer local data, create saved evidence, remember user needs, support accessibility, show investor/admin intelligence, and clearly separate live engines from deferred services.`,
    createdAt: new Date().toISOString()
  };
  if (options.persist) {
    db.profile.noVendorUpgradeRuns = db.profile.noVendorUpgradeRuns || [];
    db.profile.noVendorUpgradeRuns.unshift(pack);
    db.profile.noVendorUpgradeRuns = db.profile.noVendorUpgradeRuns.slice(0, 20);
    db.profile.localScenarioMissions = db.profile.localScenarioMissions || [];
    for (const mission of missionBlueprints) {
      db.profile.localScenarioMissions.unshift({
        id: crypto.randomUUID(),
        missionId: mission.id,
        title: mission.title,
        voice: mission.voice,
        steps: mission.steps,
        tools: mission.tools,
        status: "ready",
        createdAt: pack.createdAt
      });
    }
    db.profile.localScenarioMissions = db.profile.localScenarioMissions.slice(0, 40);
    rememberAgentMemory(db.profile, "Nexus no-vendor depth pack is active: guided missions, local evidence, memory, accessibility, investor/admin intelligence, and readiness transparency.", { source: "no-vendor-upgrade-ten", category: "pattern", module: "Agent AI", confidence: 0.92 });
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.no_vendor_upgrade_ten",
      detail: `No-new-vendor upgrade pack activated: ${pack.readyCount}/${pack.total}.`,
      metadata: { packId: pack.id, missions: missionBlueprints.map(item => item.id), localRecords: pack.localRecords },
      dispatch: false
    });
    addActivity(db.profile, `No-new-vendor depth pack activated: ${pack.readyCount}/${pack.total} ready.`);
    db.profile.agentMemory.lastNoVendorUpgradeTen = pack;
    db.profile.agentMemory.lastStatus = pack.status;
    db.profile.agentMemory.lastSummary = pack.plainLanguageSummary;
    db.profile.agentMemory.updatedAt = pack.createdAt;
  }
  return pack;
}

function offlineReasoningKnowledgeBase(db, user) {
  const { country, route } = activeContext(db);
  const course = (db.courses || []).find(item => item.id === db.profile.activeCourseId) || (db.courses || [])[0] || {};
  const role = (db.roles || []).find(item => roleReadiness(db.profile, item).eligible) || (db.roles || [])[0] || {};
  const product = (db.products || []).find(item => item.countryId === country.id) || (db.products || [])[0] || {};
  return {
    health: {
      title: "Rural health access reasoning",
      facts: [
        "Nexus is not a doctor and does not diagnose.",
        "Nexus can collect symptoms, safety signals, language, accessibility needs, caregiver support, and contact method.",
        "Nexus can prepare provider handoff, clinic/pharmacy/mobile-clinic search, follow-up, and emergency guidance."
      ],
      decisionTree: ["Check danger signs first", "Ask what happened and where the person is", "Capture language and access needs", "Route to intake, clinic, pharmacy, mobile clinic, or provider handoff"],
      redFlags: ["trouble breathing", "heavy bleeding", "unconscious", "chest pain", "severe dehydration", "confusion", "seizure", "very young child with danger signs"],
      nextQuestion: "Is the person safe right now, and what symptom or injury needs help?",
      suggestedCommand: "Nexus, start telehealth intake",
      section: "health"
    },
    trade: {
      title: "Crop sale and buyer reasoning",
      facts: [
        `${product.name || "The active crop"} can be organized into a local lot, buyer message, order, route, payment-readiness record, and receipt.`,
        "Nexus can create local buyer/seller communication evidence before a real marketplace partner is signed.",
        "Nexus should confirm before sending buyer messages, booking shipment, or preparing payment actions."
      ],
      decisionTree: ["Ask crop and quantity", "Check field quality or drone evidence", "Prepare buyer contact", "Create order evidence", "Track route and delivery", "Prepare transaction receipt"],
      redFlags: ["unclear buyer", "payment dispute", "unsafe route", "spoiled crop", "missing quantity", "price disagreement"],
      nextQuestion: "What crop are you selling, how much do you have, and do you already have a buyer?",
      suggestedCommand: "Nexus, help me sell my crop",
      section: "trade"
    },
    drone: {
      title: "Drone and field reasoning",
      facts: [
        "Nexus can interpret local drone-style findings in simple farmer language.",
        "Nexus can separate likely crop stress, water issues, pest pressure, and harvest readiness from technical imagery terms.",
        "Nexus should recommend a field check or provider/vendor review before costly intervention."
      ],
      decisionTree: ["Ask crop and field location", "Capture what the farmer sees", "Run local field scan evidence", "Explain finding simply", "Create intervention task", "Attach buyer-readiness evidence"],
      redFlags: ["rapid crop loss", "widespread pest damage", "standing water", "drought stress", "unknown chemical exposure"],
      nextQuestion: "What crop is in the field, and what looks wrong to the farmer?",
      suggestedCommand: "Nexus, run drone scan on my farm",
      section: "trade"
    },
    learning: {
      title: "Learning path reasoning",
      facts: [
        `${course.title || "The active course"} can be started locally and connected to captions, audio guide, low-bandwidth packet, quiz, and certificate evidence.`,
        "Nexus can ask the learner goal and accessibility needs before choosing the next lesson.",
        "Nexus can connect certificate evidence to workforce readiness."
      ],
      decisionTree: ["Ask learning goal", "Choose course", "Set language/accessibility support", "Start lesson", "Complete quiz", "Issue certificate", "Connect to workforce"],
      redFlags: ["cannot read", "poor internet", "hearing support needed", "visual support needed", "child learner needs protection"],
      nextQuestion: "What does the learner want to learn, and do they need audio, captions, or large text?",
      suggestedCommand: "Nexus, start a course",
      section: "learning"
    },
    workforce: {
      title: "Workforce readiness reasoning",
      facts: [
        `${role.title || "The active role"} can be matched against local readiness, course certificates, interview prep, mentor support, and application evidence.`,
        "Nexus can guide job seekers with imperfect language by asking one question at a time.",
        "Nexus should not promise employment without a real employer/provider."
      ],
      decisionTree: ["Ask desired work", "Build profile", "Check readiness gaps", "Recommend course or mentor", "Apply to role when eligible", "Prepare interview or shift"],
      redFlags: ["missing identity evidence", "unmet safety training", "unclear availability", "role not eligible yet", "payment setup missing"],
      nextQuestion: "What kind of work does the person want, and are they ready to apply now?",
      suggestedCommand: "Nexus, show me jobs",
      section: "workforce"
    },
    map: {
      title: "Map, clinic, route, and logistics reasoning",
      facts: [
        `${route.name || "The active corridor"} can be reviewed with local route risk, shipment checkpoints, clinic/pharmacy/mobile-clinic points, and map evidence.`,
        "Nexus can open the map, show surrounding context, and explain route risk plainly.",
        "Live GPS depends on browser permission and provider setup."
      ],
      decisionTree: ["Ask origin and destination", "Open map", "Check route risk", "Show checkpoints or facilities", "Track status", "Prepare next action"],
      redFlags: ["unsafe road", "clinic too far", "cold-chain risk", "delayed shipment", "unknown destination"],
      nextQuestion: "Where is the person, crop, clinic, buyer, or shipment starting from and going to?",
      suggestedCommand: "Nexus, open full scale global map",
      section: "map"
    },
    family: {
      title: "Women, children, and family agriculture reasoning",
      facts: [
        "Nexus can support women and children with training, safety, health access, crop support, learning, and income pathways.",
        "Children and vulnerable users require extra safety, consent, and human review.",
        "Nexus can provide resource navigation and plain-language support without replacing professionals."
      ],
      decisionTree: ["Ask who needs support", "Check safety and consent", "Choose learning, health, crop, or workforce path", "Use simple language", "Record follow-up need"],
      redFlags: ["child safety", "violence", "medical danger", "exploitation", "school-age work risk"],
      nextQuestion: "Is this for a woman, child, family, farmer, learner, or patient, and what support is most urgent?",
      suggestedCommand: "Nexus, open women and family support",
      section: "learning"
    },
    platform: {
      title: "Platform operating reasoning",
      facts: [
        "Without live providers, Nexus can still reason from local data, workflows, memory, maps, simulated catalogs, and saved evidence.",
        "Nexus must separate local capability from live vendor capability.",
        "Nexus should give one next action, one next question, and a confidence score."
      ],
      decisionTree: ["Classify the request", "Use local knowledge and records", "Check safety/provider boundary", "Recommend next action", "Ask one question", "Record evidence"],
      redFlags: ["health diagnosis", "payment execution", "legal advice", "employment guarantee", "external message without confirmation"],
      nextQuestion: "What outcome do you want Nexus to help complete first?",
      suggestedCommand: "Nexus, what should I do next?",
      section: "agent"
    }
  };
}

function offlineReasoningScenarioSignal(command = "") {
  const lower = String(command || "").toLowerCase();
  const candidates = [
    { key: "health", terms: ["doctor", "clinic", "patient", "medicine", "pharmacy", "health", "sick", "injury", "pain", "telehealth", "mobile clinic", "symptom"] },
    { key: "trade", terms: ["sell", "buyer", "crop", "maize", "cassava", "rice", "market", "order", "payment", "wallet", "seller", "price"] },
    { key: "drone", terms: ["drone", "field", "crop stress", "pest", "soil", "irrigation", "harvest", "footage", "scan", "farm problem"] },
    { key: "learning", terms: ["learn", "course", "lesson", "training", "student", "learner", "certificate", "quiz", "audio", "caption"] },
    { key: "workforce", terms: ["job", "work", "role", "apply", "worker", "employment", "shift", "interview", "mentor", "skills"] },
    { key: "map", terms: ["map", "route", "track", "shipment", "location", "gps", "near me", "nearest", "facility", "delivery", "logistics"] },
    { key: "family", terms: ["woman", "women", "child", "children", "family", "mother", "girls", "youth", "school", "caregiver"] },
    { key: "platform", terms: ["offline", "without provider", "without live", "reason", "decision tree", "confidence", "what should", "next step", "local"] }
  ];
  const scored = candidates.map(candidate => {
    const hits = candidate.terms.filter(term => lower.includes(term));
    return { ...candidate, hits, score: hits.length };
  }).sort((a, b) => b.score - a.score);
  const best = scored[0];
  return best && best.score > 0 ? best : { key: "platform", hits: [], score: 0 };
}

function reasonedActionBridgePlan(db, user, command = "", reasoning = {}) {
  const { country, route } = activeContext(db);
  const section = reasoning.redirectSection || "agent";
  const domain = reasoning.domainKey || "platform";
  const bridgeByDomain = {
    health: {
      screen: "Telehealth",
      primaryAction: "Open the health intake and ask one symptom question",
      confirmPhrase: "I heard you need health help. I can open intake now.",
      openCommand: "Nexus, start telehealth intake",
      visibleOutcome: "A patient intake, provider handoff path, clinic/pharmacy support, and safety guidance appear.",
      recoveryPhrase: "If this is not health help, say Nexus stop, then say crop, work, learning, map, or buyer."
    },
    trade: {
      screen: "AgriTrade",
      primaryAction: "Open crop sale support and prepare buyer/order evidence",
      confirmPhrase: "I heard you want trade or crop-sale help. I can open the crop sale workflow now.",
      openCommand: "Nexus, help me sell my crop",
      visibleOutcome: "A crop, buyer, order, route, receipt, and communication workflow appears.",
      recoveryPhrase: "If the buyer or crop is wrong, say Nexus stop, then name the crop, buyer, or route."
    },
    drone: {
      screen: "Drone Intelligence",
      primaryAction: "Open a farmer-friendly field scan and explain the likely crop issue",
      confirmPhrase: "I heard you want field or drone support. I can open the scan workflow now.",
      openCommand: "Nexus, run drone scan on my farm",
      visibleOutcome: "A field scan, farmer-language finding, action task, and crop-risk note appears.",
      recoveryPhrase: "If I heard the field problem wrong, say Nexus stop, then describe what you see in the crop."
    },
    learning: {
      screen: "Learning",
      primaryAction: "Open the course path and choose accessibility support",
      confirmPhrase: "I heard you want learning help. I can open the course path now.",
      openCommand: "Nexus, start a course",
      visibleOutcome: "A course, lesson, caption/audio support, quiz, and certificate path appears.",
      recoveryPhrase: "If this is the wrong course, say Nexus stop, then tell me what skill you want to learn."
    },
    workforce: {
      screen: "Workforce",
      primaryAction: "Open job readiness and show application next steps",
      confirmPhrase: "I heard you want work or job help. I can open workforce support now.",
      openCommand: "Nexus, show me jobs",
      visibleOutcome: "A profile, readiness gaps, course-to-job path, role match, and application action appears.",
      recoveryPhrase: "If this is the wrong job, say Nexus stop, then tell me the country, skill, or job type."
    },
    map: {
      screen: "Global Map",
      primaryAction: "Open the map and focus route, clinic, buyer, or shipment context",
      confirmPhrase: "I heard you need map or route help. I can open the full map now.",
      openCommand: "Nexus, open full scale global map",
      visibleOutcome: "A scalable map, route context, risk signal, and next route question appears.",
      recoveryPhrase: "If the location is wrong, say Nexus stop, then give the starting place and destination."
    },
    family: {
      screen: "Women And Family Support",
      primaryAction: "Open family support and choose health, learning, safety, or crop help",
      confirmPhrase: "I heard you need women, child, or family support. I can open the support path now.",
      openCommand: "Nexus, open women and family support",
      visibleOutcome: "A safe support path, learning option, health resource, and follow-up question appears.",
      recoveryPhrase: "If I misunderstood who needs help, say Nexus stop, then say woman, child, farmer, learner, or patient."
    },
    platform: {
      screen: "Ask Nexus",
      primaryAction: "Ask one clarifying question and choose the right workspace",
      confirmPhrase: "I heard you need help choosing the next step. I can guide one step at a time.",
      openCommand: "Nexus, what should I do next?",
      visibleOutcome: "Nexus asks one simple question, chooses a workspace, and records the reasoning evidence.",
      recoveryPhrase: "If I choose the wrong direction, say Nexus stop, then say the area: health, crops, work, learning, or map."
    }
  };
  const base = bridgeByDomain[domain] || bridgeByDomain[section] || bridgeByDomain.platform;
  const confidence = Number(reasoning.confidence || 0);
  const needsConfirmation = reasoning.status === "needs-human-review" || confidence < 82;
  return {
    id: crypto.randomUUID(),
    status: needsConfirmation ? "needs-confirmation" : "ready-to-open",
    modeCoverage: ["User", "Admin", "Investor"],
    heard: String(command || reasoning.command || "").trim(),
    screen: base.screen,
    section,
    primaryAction: base.primaryAction,
    confirmPhrase: base.confirmPhrase,
    openCommand: base.openCommand,
    visibleOutcome: base.visibleOutcome,
    oneQuestion: reasoning.nextQuestion || "What outcome do you want first?",
    recoveryPhrase: base.recoveryPhrase,
    evidence: [
      `Country context: ${country.name || "not selected"}`,
      `Route context: ${route.name || "not selected"}`,
      `Reasoning confidence: ${confidence || "not scored"}%`,
      `Provider boundary: ${reasoning.providerBoundary || "local workflow evidence only"}`
    ],
    voiceScript: needsConfirmation
      ? `${base.confirmPhrase} Say yes and I will continue, or tell me what to change.`
      : `${base.confirmPhrase} I am opening the right workspace and will ask one question.`,
    createdAt: new Date().toISOString()
  };
}

function offlineReasoningBrainModel(db, user, command = "", options = {}) {
  ensureAiProfile(db.profile);
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureCommunicationProfile(db.profile);
  const text = String(command || "").trim() || "Reason through the best local next step without live providers.";
  const knowledge = offlineReasoningKnowledgeBase(db, user);
  const signal = offlineReasoningScenarioSignal(text);
  const domain = knowledge[signal.key] || knowledge.platform;
  const memories = retrieveAgentMemories(db.profile, text, 5);
  const localData = {
    courses: (db.courses || []).length,
    roles: (db.roles || []).length,
    products: (db.products || []).length,
    countries: (db.countries || []).length,
    routes: (db.routes || []).length,
    healthIntakes: (db.profile.healthIntakes || []).length,
    applications: (db.profile.applications || []).length,
    orders: (db.profile.orders || []).length,
    droneScans: (db.profile.droneScans || []).length,
    communicationThreads: (db.profile.communicationThreads || []).length + (db.profile.tradeMessageThreads || []).length
  };
  const localDataScore = Math.min(28, Object.values(localData).filter(value => Number(value) > 0).length * 3);
  const clueScore = Math.min(32, Number(signal.score || 0) * 8);
  const memoryScore = Math.min(18, memories.length * 4);
  const workflowScore = domain.decisionTree.length >= 4 ? 12 : 6;
  const safetyRisk = domain.redFlags.some(flag => text.toLowerCase().includes(flag)) ? 12 : 0;
  const confidence = Math.max(54, Math.min(96, 48 + clueScore + memoryScore + localDataScore + workflowScore - safetyRisk));
  const reviewNeeded = safetyRisk > 0 || /diagnos|prescribe|pay now|send money|guarantee job|legal/i.test(text);
  const reasoning = {
    id: crypto.randomUUID(),
    status: reviewNeeded ? "needs-human-review" : confidence >= 82 ? "high-confidence-local-reasoning" : "needs-one-more-answer",
    command: text,
    domainKey: signal.key,
    title: domain.title,
    confidence,
    confidenceLabel: confidence >= 85 ? "high" : confidence >= 70 ? "medium" : "needs more information",
    whatNexusKnows: domain.facts,
    decisionTree: domain.decisionTree,
    redFlags: domain.redFlags,
    nextQuestion: domain.nextQuestion,
    recommendedAction: domain.suggestedCommand,
    redirectSection: domain.section,
    localData,
    memoriesUsed: memories.map(item => ({ id: item.id, category: item.category, text: item.text || item.response || item.command, confidence: item.confidence })),
    providerBoundary: "This reasoning uses AgriNexus local data, simulated catalogs, saved workflow evidence, maps, and memory. It does not claim a live provider acted unless credentials are connected.",
    safetyBoundary: reviewNeeded
      ? "Human or provider review is required before sensitive health, payment, employment, legal, or external communication action."
      : "Nexus can guide the next local workflow, but still asks confirmation before sensitive actions.",
    plainLanguageSummary: `${domain.title}: I can reason locally with ${confidence}% confidence. Best next action: ${domain.suggestedCommand}. Next question: ${domain.nextQuestion}`,
    createdAt: new Date().toISOString()
  };
  reasoning.actionBridge = reasonedActionBridgePlan(db, user, text, reasoning);
  if (options.persist) {
    db.profile.offlineReasoningRuns = db.profile.offlineReasoningRuns || [];
    db.profile.offlineReasoningRuns.unshift(reasoning);
    db.profile.offlineReasoningRuns = db.profile.offlineReasoningRuns.slice(0, 30);
    rememberAgentMemory(db.profile, `Offline Reasoning Brain used ${domain.title} for: ${text}. Next question: ${domain.nextQuestion}`, { source: "offline-reasoning-brain", category: "pattern", module: domain.title, confidence: confidence / 100 });
    logIntegration(db, {
      providerId: "local-offline-reasoning",
      module: "AI",
      action: "agent.offline_reasoning_brain",
      detail: reasoning.plainLanguageSummary,
      metadata: { reasoningId: reasoning.id, actionBridgeId: reasoning.actionBridge.id, domain: signal.key, confidence, reviewNeeded, localData },
      dispatch: false
    });
    addActivity(db.profile, `Offline Reasoning Brain reviewed ${domain.title} at ${confidence}% confidence.`);
    db.profile.agentMemory.lastOfflineReasoningBrain = reasoning;
    db.profile.agentMemory.lastStatus = reasoning.status;
    db.profile.agentMemory.lastSummary = reasoning.plainLanguageSummary;
    db.profile.agentMemory.updatedAt = reasoning.createdAt;
  }
  return reasoning;
}

function offlineReasoningCommandResponse(db, user, text = "", options = {}) {
  const lower = String(text || "").toLowerCase();
  const explicitReasoning = /\b(offline reasoning|local reasoning|reasoning brain|offline brain|local brain|decision tree|scenario reasoning|confidence score|high functional reasoning|reason through this|reason through|think through|turn reasoning into action|reasoning into action|what should i do if)\b/.test(lower);
  const providerBoundReasoning = /\b(without live providers|without providers|without vendors|no providers|no vendors)\b/.test(lower)
    && /\b(reason|reasoning|decision|scenario|think|plan|brain|confidence)\b/.test(lower);
  const explicit = explicitReasoning || providerBoundReasoning;
  if (!explicit) return null;
  const reasoning = offlineReasoningBrainModel(db, user, text, { persist: true });
  const bridge = reasoning.actionBridge;
  return {
    intent: "conversation.offline_reasoning_brain",
    response: `${bridge.voiceScript} ${reasoning.plainLanguageSummary} ${reasoning.safetyBoundary}`,
    status: reasoning.status,
    metadata: {
      conversationMode: true,
      redirectSection: reasoning.redirectSection,
      offlineReasoningBrain: reasoning,
      reasonedActionBridge: bridge,
      suggestedReplies: [bridge.openCommand, "yes", "ask one follow-up", "show me the decision tree"]
    }
  };
}

function remoteRuralFarmerLaunchKit(db, user, providers = runtimeProviders(db), options = {}) {
  ensureOperationsProfile(db.profile);
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureCommunicationProfile(db.profile);
  const { country, route } = activeContext(db);
  const providerCatalog = providerCandidateCatalog(db, providers);
  const countryCoverage = providerCatalog.countryCoverage.find(item => item.name === country.name) || providerCatalog.countryCoverage[0];
  const noVendorPack = noVendorUpgradeTenPack(db, user, providers);
  const liveReadiness = productionReadiness(providers);
  const stages = [
    {
      id: "remote-country-focus",
      title: "Pick the first rural farmer market",
      readyNow: true,
      action: `Use ${country.name} as the working country context and ${route.name} as the corridor model.`,
      evidence: "Country, route, language, map risk, and provider candidate coverage are visible without needing a local office."
    },
    {
      id: "farmer-intake",
      title: "Run farmer intake by voice",
      readyNow: true,
      action: "Ask crop, quantity, location, buyer need, language, accessibility needs, and phone contact preference.",
      evidence: "Nexus can guide the farmer in simple steps and save workflow evidence locally."
    },
    {
      id: "crop-sale-simulation",
      title: "Create a crop sale workflow",
      readyNow: true,
      action: "Prepare product lot, buyer message, route tracking, delivery evidence, and payment-readiness record.",
      evidence: "AgriTrade can show the full crop-to-buyer process before a marketplace partner is signed."
    },
    {
      id: "field-intelligence",
      title: "Interpret field or drone evidence simply",
      readyNow: true,
      action: "Use local drone/satellite-style evidence to explain crop stress, pests, water, and harvest readiness in plain language.",
      evidence: "The farmer sees simple advice instead of technical vegetation-index language."
    },
    {
      id: "telehealth-navigation",
      title: "Run healthcare support safely",
      readyNow: true,
      action: "Capture symptoms, accessibility needs, consent, caregiver support, danger signals, and provider handoff packet.",
      evidence: "AgriNexus supports navigation and escalation while clearly avoiding unlicensed diagnosis."
    },
    {
      id: "learning-workforce",
      title: "Connect learning to income",
      readyNow: true,
      action: "Start a practical course, create captions/audio support, issue local certificate evidence, and match a role.",
      evidence: "A farmer, youth, or rural worker can see a path from learning to earning."
    },
    {
      id: "partner-outreach",
      title: "Create partner packets remotely",
      readyNow: true,
      action: "Generate partnership packets for course, job, telehealth, EHR, marketplace, drone, logistics, payments, and compliance lanes.",
      evidence: `${providerCatalog.groups.length} provider lanes and ${providerCatalog.total} candidate records are ready for outreach.`
    },
    {
      id: "country-compliance",
      title: "Keep legal and clinical review visible",
      readyNow: true,
      action: "Track local counsel, privacy/DPO, clinical governance, consent, payment rules, and marketplace rules before live launch.",
      evidence: "The platform separates demo/pilot evidence from regulated live operations."
    },
    {
      id: "investor-evidence",
      title: "Produce investor and partner evidence",
      readyNow: true,
      action: "Run local pilots, export evidence, show admin readiness, and explain what unlocks live production.",
      evidence: "You can show serious progress without pretending to have signed providers."
    },
    {
      id: "live-credential-path",
      title: "Connect live engines when access arrives",
      readyNow: true,
      action: "Add approved API keys, webhooks, phone numbers, map providers, and legal approvals one provider at a time.",
      evidence: `${liveReadiness.readyCount}/${liveReadiness.total} production checks currently report ready or locally optimized.`
    }
  ];
  const kit = {
    id: crypto.randomUUID(),
    status: "remote-pilot-ready",
    audience: "Rural African farmers, farming families, field agents, learners, workers, and patients",
    operatingFrom: user?.country || "remote operator location",
    country: country.name,
    route: route.name,
    providerCoverage: countryCoverage ? {
      country: countryCoverage.name,
      status: countryCoverage.status,
      providerCount: countryCoverage.providerCount,
      plainAnswer: countryCoverage.plainAnswer
    } : null,
    noVendorPack: {
      status: noVendorPack.status,
      readyCount: noVendorPack.readyCount,
      total: noVendorPack.total,
      missions: noVendorPack.missionBlueprints.map(item => item.title)
    },
    stages,
    remoteProof: [
      "Works from your current location because the pilot evidence is generated inside AgriNexus.",
      "Does not require pretending that a clinic, marketplace, drone vendor, or payment provider is already signed.",
      "Creates the story and evidence needed to approach partners, funders, governments, and NGOs.",
      "Keeps live-provider gaps visible so the platform remains credible."
    ],
    nextCommands: [
      "Nexus, run rural access pilot",
      "Nexus, help me sell my crop",
      "Nexus, walk me through telehealth",
      "Nexus, create provider partnership packets",
      "Nexus, explain what is ready without vendors"
    ],
    createdBy: user?.email || "system",
    createdAt: new Date().toISOString()
  };
  if (options.persist) {
    db.profile.remoteLaunchKits.unshift(kit);
    db.profile.remoteLaunchKits = db.profile.remoteLaunchKits.slice(0, 20);
    rememberAgentMemory(db.profile, "Remote rural farmer launch kit is active: provider-agnostic pilot workflows, farmer intake, crop sale, telehealth navigation, learning-workforce, partner packets, compliance, and evidence export.", { source: "remote-launch-kit", category: "pattern", module: "Platform", confidence: 0.94 });
    logIntegration(db, {
      providerId: "openai",
      module: "Local Pilot Studio",
      action: "pilot.remote_launch_kit_created",
      detail: `Remote rural farmer launch kit created for ${country.name} with ${stages.length} ready stage(s).`,
      metadata: { kitId: kit.id, country: country.name, route: route.name, stages: stages.map(stage => stage.id) },
      dispatch: false
    });
    addUsageEvent(db.profile, { module: "Local Pilot Studio", action: "pilot.remote_launch_kit_created", detail: kit.status, user: user?.email });
    addActivity(db.profile, `Remote rural farmer launch kit created for ${country.name}.`);
  }
  return kit;
}

function crossPlatformFunctionDefinitions(db, user, providers = runtimeProviders(db)) {
  const { country, route } = activeContext(db);
  const providerStatus = id => providers.find(provider => provider.id === id)?.status || "local-workflow";
  return [
    {
      id: "remote-country-focus",
      number: 1,
      title: "Country and rural market focus",
      module: "Map & AI",
      command: "Nexus, set my rural market focus",
      summary: `Use ${country.name}, ${route.name}, language, map risk, and provider coverage as the operating context.`,
      action: "Map country, route, provider coverage, language, farmer use case, and next local-market step.",
      evidence: "Remote launch kit, country coverage, map context, and provider-candidate evidence.",
      providerIds: ["maps", "translation"],
      status: providerStatus("maps")
    },
    {
      id: "crop-sale-simulation",
      number: 3,
      title: "Crop sale, buyer, and logistics workflow",
      module: "AgriTrade",
      command: "Nexus, help me sell my crop and track delivery",
      summary: "Create a crop sale path with buyer message, order evidence, shipment tracking, route status, and payment readiness.",
      action: "Create or refresh trade order, logistics booking, route tracking, buyer evidence, and payment-readiness record.",
      evidence: "Order, logistics record, tracking evidence, trade event, provider audit, and activity record.",
      providerIds: ["trade-market", "trade-logistics", "trade-payments", "maps"],
      status: providerStatus("trade-market")
    },
    {
      id: "field-intelligence",
      number: 4,
      title: "Drone and field intelligence",
      module: "AgriTech",
      command: "Nexus, check my field and explain it simply",
      summary: "Turn drone or satellite-style field evidence into simple farmer guidance about crop stress, pests, water, and harvest readiness.",
      action: "Create drone mission, run field scan, add map insight, and prepare plain-language intervention guidance.",
      evidence: "Drone mission, scan, intervention-ready insight, map intelligence, and provider audit event.",
      providerIds: ["field-drones", "maps", "trade-market"],
      status: providerStatus("field-drones")
    },
    {
      id: "telehealth-navigation",
      number: 5,
      title: "Safe telehealth and mobile clinic navigation",
      module: "Healthcare",
      command: "Nexus, walk me through telehealth",
      summary: "Capture symptoms and access needs, prepare safe navigation, and route the person toward clinic/provider support without diagnosis.",
      action: "Open intake, accessibility needs, consent-style note, provider handoff packet, and follow-up evidence.",
      evidence: "Telehealth intake, accessibility plan, referral-ready record, activity, and provider audit event.",
      providerIds: ["health-telehealth", "health-ehr", "health-notifications"],
      status: providerStatus("health-telehealth")
    },
    {
      id: "learning-workforce",
      number: 6,
      title: "Learning to income pathway",
      module: "Learning & Workforce",
      command: "Nexus, connect learning to income",
      summary: "Start practical learning, accessibility support, certificate evidence, workforce readiness, and job-placement preparation.",
      action: "Create family learning plan, assignment, accessibility packet, workforce profile evidence, and readiness activity.",
      evidence: "Learning plan, enrollment, assignment, accommodation, workforce badge, readiness update, and audit events.",
      providerIds: ["learning-courses", "learning-certificates", "workforce-jobs"],
      status: providerStatus("learning-courses")
    },
    {
      id: "live-credential-path",
      number: 10,
      title: "Live credential and provider activation path",
      module: "Integrations",
      command: "Nexus, prepare live engine credentials",
      summary: "Create the partner packets and credential map for learning, telehealth, trade, drone, compliance, and live service checks.",
      action: "Create provider partnership packets, credential checklist, readiness evidence, and next Render setup steps.",
      evidence: "Provider packets, credential list, outreach questions, audit events, and live-readiness summary.",
      providerIds: ["openai", "learning-courses", "health-telehealth", "trade-market", "field-drones", "maps"],
      status: providerStatus("openai")
    }
  ];
}

function crossPlatformFunctionPack(db, user, providers = runtimeProviders(db)) {
  ensureOperationsProfile(db.profile);
  const functions = crossPlatformFunctionDefinitions(db, user, providers);
  const runs = db.profile.crossPlatformFunctionRuns || [];
  const latest = runs[0] || null;
  return {
    status: runs.length ? "active" : "ready",
    summary: "Selected platform functions are available across User, Investor, Admin, dashboard, integrations, and Nexus voice commands.",
    selectedNumbers: [1, 3, 4, 5, 6, 10],
    functions,
    latest,
    metrics: [
      { label: "Selected functions", value: functions.length, detail: "Country focus, crop sale, field intelligence, telehealth, learning-to-income, and live credentials" },
      { label: "Runs created", value: runs.length, detail: "Cross-platform function activations recorded" },
      { label: "Connected/live-ready providers", value: functions.reduce((sum, item) => sum + item.providerIds.filter(providerId => ["connected", "ready"].includes(providers.find(provider => provider.id === providerId)?.status)).length, 0), detail: "Provider slots currently connected or ready across selected functions" }
    ],
    commands: functions.map(item => item.command)
  };
}

async function runCrossPlatformFunction(db, user, body = {}) {
  ensureOperationsProfile(db.profile);
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  const providers = runtimeProviders(db);
  const definitions = crossPlatformFunctionDefinitions(db, user, providers);
  const selected = definitions.find(item => item.id === body.functionId) || definitions[0];
  const { country, route } = activeContext(db);
  const now = new Date().toISOString();
  const created = [];
  if (selected.id === "remote-country-focus") {
    const kit = remoteRuralFarmerLaunchKit(db, user, providers, { persist: true });
    created.push(`Remote launch kit ${kit.id}`);
  } else if (selected.id === "crop-sale-simulation") {
    const product = selectedTradeProduct(db, body.productId, country);
    const logistics = await createTradeLogisticsWorkflow(db, user, {
      productId: product?.id,
      type: "shipping-booking",
      buyerName: body.buyerName || `${country.name} verified buyer desk`,
      productName: product?.name || "Active crop lot",
      quantity: body.quantity || "20 bags"
    });
    created.push(`${logistics.record.orderNumber || logistics.record.logisticsNumber} crop sale/logistics path`);
  } else if (selected.id === "field-intelligence") {
    const product = selectedTradeProduct(db, body.productId, country);
    const mission = createDroneMission(db, { productId: product?.id, source: user.email, objective: body.objective });
    const { scan } = createDroneScan(db, { productId: product?.id, source: user.email, scanType: "crop-health-and-risk" });
    created.push(`${mission.missionRef} drone mission`, `${scan.scanRef} field scan`);
  } else if (selected.id === "telehealth-navigation") {
    const intake = withHealthProvenance({
      id: crypto.randomUUID(),
      patientRef: `AN-PAT-${country.id.toUpperCase()}-${String(db.profile.healthIntakes.length + 1).padStart(3, "0")}`,
      patientName: body.patientName || "Community patient",
      countryId: country.id,
      needSummary: body.needSummary || "Safe telehealth navigation, accessibility support, and provider handoff request",
      riskLevel: body.urgency || (country.risk === "High" || country.heat >= 38 ? "Priority" : "Routine"),
      queueStatus: "Cross-platform telehealth navigation opened",
      representativeStatus: "Provider navigation pending",
      preferredLanguage: body.language || user.language || db.profile.accessibilityProfile?.language || "en",
      accessibilityNeeds: body.accessibilityNeeds || "Voice callback, captions, large-print/audio summary, caregiver support",
      contactMethod: body.contactMethod || "Voice callback plus SMS/WhatsApp summary",
      caregiverName: body.caregiverName || "Community health aide",
      routeContext: { routeId: route.id, routeName: route.name, checkpoint: db.profile.activeCheckpoint },
      clinicalBoundary: "Navigation and resource support only. AgriNexus does not diagnose or replace licensed care.",
      createdAt: now
    }, body, {
      patientName: "Community patient",
      needSummary: "Safe telehealth navigation, accessibility support, and provider handoff request",
      accessibilityNeeds: "Voice callback, captions, large-print/audio summary, caregiver support",
      contactMethod: "Voice callback plus SMS/WhatsApp summary",
      caregiverName: "Community health aide"
    });
    db.profile.healthIntakes.unshift(intake);
    db.profile.healthIntakes = db.profile.healthIntakes.slice(0, 30);
    created.push(`${intake.patientRef} telehealth navigation intake`);
  } else if (selected.id === "learning-workforce") {
    const plan = runWomenChildrenLearningWorkflow(db, user, {
      pathId: body.pathId || "women-farmer-business",
      learnerGroup: body.learnerGroup || "Women farmers, youth learners, and rural workers",
      supportNeed: body.supportNeed || "Practical learning that connects to income and safe work"
    });
    if (!db.profile.workforceBadges.includes("Profile Verified")) db.profile.workforceBadges.push("Profile Verified");
    db.profile.candidateStage = "Learning-to-income pathway active";
    recalcReadiness(db.profile);
    created.push(`${plan.planNumber} learning plan`, "workforce profile verified");
  } else if (selected.id === "live-credential-path") {
    ["learning", "telehealth", "trade", "drone", "compliance"].forEach(type => {
      const packet = createProviderPartnership(db, user, type, "Created from cross-platform live credential path.");
      created.push(`${packet.title} packet`);
    });
  }
  const run = {
    id: crypto.randomUUID(),
    runNumber: `AN-XFUNC-${String((db.profile.crossPlatformFunctionRuns || []).length + 1).padStart(3, "0")}`,
    functionId: selected.id,
    number: selected.number,
    title: selected.title,
    module: selected.module,
    command: selected.command,
    summary: selected.summary,
    action: selected.action,
    evidence: selected.evidence,
    createdRecords: created,
    countryId: country.id,
    countryName: country.name,
    routeId: route.id,
    routeName: route.name,
    status: "completed",
    createdBy: user.email,
    createdAt: now
  };
  db.profile.crossPlatformFunctionRuns.unshift(run);
  db.profile.crossPlatformFunctionRuns = db.profile.crossPlatformFunctionRuns.slice(0, 30);
  logIntegration(db, {
    providerId: selected.providerIds[0] || "openai",
    module: selected.module,
    action: "platform.cross_function_run",
    status: "success",
    detail: `${run.runNumber} ran ${selected.title}: ${created.join("; ") || selected.evidence}.`,
    metadata: { functionId: selected.id, number: selected.number, createdRecords: created }
  });
  addUsageEvent(db.profile, { module: "Platform", action: "platform.cross_function_run", detail: selected.title, user: user.email });
  addActivity(db.profile, `${selected.title} completed across platform functions.`);
  rememberAgentMemory(db.profile, `Cross-platform function ${selected.title} completed in ${country.name}: ${created.join("; ") || selected.evidence}.`, { source: "cross-platform-functions", category: "pattern", module: selected.module, confidence: 0.94 });
  return run;
}

const HEALTH_PROFILE_ARRAY_KEYS = new Set([
  "telehealthEncounters",
  "telehealthProviderActions",
  "healthIntakes",
  "carePlans",
  "safetyReviews",
  "telehealthConsents",
  "telehealthVitals",
  "telehealthReferrals",
  "telehealthFollowUps",
  "telehealthAppointments",
  "telehealthProviderAssignments",
  "patientHistoryRecords",
  "telehealthPrescriptionPackets",
  "telehealthEmergencyEscalations",
  "careTeamNotes",
  "telehealthOutcomeReviews",
  "publicHealthChecks",
  "telehealthAccessibility",
  "ruralSymptomGuides",
  "ruralClinicMatches",
  "mobileClinicRequests",
  "pharmacyRequests",
  "ruralHealthHandoffPackets",
  "mobileClinicSupplyRequests",
  "mobileClinicSupplyMatches",
  "mobileClinicSupplyDispatches",
  "mobileClinicSupplyDeliveries",
  "mobileClinicRevenueRecords"
]);

const INVESTOR_HEALTH_RECORD_FIELDS = new Set([
  "id",
  "patientRef",
  "countryId",
  "region",
  "type",
  "category",
  "module",
  "action",
  "status",
  "queueStatus",
  "representativeStatus",
  "riskLevel",
  "triageLevel",
  "urgency",
  "title",
  "guideNumber",
  "matchNumber",
  "requestNumber",
  "packetNumber",
  "appointmentNumber",
  "assignmentNumber",
  "historyNumber",
  "escalationNumber",
  "noteNumber",
  "outcomeNumber",
  "revenueNumber",
  "dispatchNumber",
  "deliveryNumber",
  "sessionNumber",
  "actionId",
  "encounterId",
  "intakeId",
  "appointmentId",
  "providerAssignmentId",
  "videoSessionId",
  "lifecycleState",
  "linkedRecordCounts",
  "consentCount",
  "vitalsCount",
  "noteCount",
  "referralCount",
  "followUpCount",
  "outcomeCount",
  "emergencyEscalationCount",
  "historyCount",
  "prescriptionPacketCount",
  "providerActionCount",
  "latestProviderAction",
  "providerStatus",
  "providerRole",
  "liveProvider",
  "videoMode",
  "handoffOnly",
  "realTimeVideo",
  "liveProviderConnected",
  "simulation",
  "demoRecord",
  "source",
  "defaultFields",
  "createdAt",
  "updatedAt"
]);

function normalizedHealthDefaultValue(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ").toLowerCase();
}

function defaultedHealthFields(body = {}, defaults = {}) {
  return Object.entries(defaults)
    .filter(([field, defaultValue]) => {
      const provided = body[field];
      if (provided === undefined || provided === null || String(provided).trim() === "") return true;
      return normalizedHealthDefaultValue(provided) === normalizedHealthDefaultValue(defaultValue);
    })
    .map(([field]) => field);
}

function withHealthProvenance(record = {}, body = {}, defaults = {}, options = {}) {
  const fields = Array.from(new Set([...(options.defaultFields || []), ...defaultedHealthFields(body, defaults)]));
  if (options.simulation) {
    return {
      ...record,
      simulation: true,
      demoRecord: true,
      source: options.source || "demo-simulation",
      defaultFields: fields
    };
  }
  if (!fields.length) return record;
  return {
    ...record,
    demoRecord: true,
    source: options.source || "default-workflow",
    defaultFields: fields
  };
}

function telehealthEncounterLinkedCounts(encounter = {}) {
  return {
    providerActions: (encounter.providerActionIds || []).length,
    consent: (encounter.consentIds || []).length,
    vitals: (encounter.vitalsIds || []).length,
    notes: (encounter.noteIds || []).length,
    referrals: (encounter.referralIds || []).length,
    followUps: (encounter.followUpIds || []).length,
    outcomes: (encounter.outcomeIds || []).length,
    emergencyEscalations: (encounter.emergencyEscalationIds || []).length,
    history: (encounter.historyIds || []).length,
    prescriptionPackets: (encounter.prescriptionPacketIds || []).length
  };
}

function syncTelehealthEncounterCounts(encounter = {}) {
  const counts = telehealthEncounterLinkedCounts(encounter);
  encounter.linkedRecordCounts = counts;
  encounter.providerActionCount = counts.providerActions;
  encounter.consentCount = counts.consent;
  encounter.vitalsCount = counts.vitals;
  encounter.noteCount = counts.notes;
  encounter.referralCount = counts.referrals;
  encounter.followUpCount = counts.followUps;
  encounter.outcomeCount = counts.outcomes;
  encounter.emergencyEscalationCount = counts.emergencyEscalations;
  encounter.historyCount = counts.history;
  encounter.prescriptionPacketCount = counts.prescriptionPackets;
  return encounter;
}

function addUniqueEncounterId(list, id) {
  if (!id) return list || [];
  const next = Array.isArray(list) ? list : [];
  if (!next.includes(id)) next.push(id);
  return next;
}

function encounterStatusForLifecycle(lifecycleState, fallback = "active") {
  if (lifecycleState === "completed") return "completed";
  if (lifecycleState === "escalated") return "escalated";
  if (lifecycleState === "escalation-resolved") return "resolved";
  if (lifecycleState === "provider-declined") return "declined";
  if (lifecycleState === "provider-accepted") return "accepted";
  if (lifecycleState === "visit-active") return "visit-active";
  if (lifecycleState === "follow-up-needed") return "follow-up-needed";
  return fallback || "active";
}

function findTelehealthEncounter(profile, { encounterId, intakeId, patientRef } = {}) {
  ensureHealthProfile(profile);
  if (encounterId) return profile.telehealthEncounters.find(encounter => encounter.encounterId === encounterId) || null;
  if (intakeId) return profile.telehealthEncounters.find(encounter => encounter.intakeId === intakeId) || null;
  if (patientRef) return profile.telehealthEncounters.find(encounter => encounter.patientRef === patientRef) || null;
  return null;
}

function createTelehealthEncounter(profile, intake = {}, options = {}) {
  ensureHealthProfile(profile);
  const now = new Date().toISOString();
  const lifecycleState = options.lifecycleState || "intake-started";
  const defaultFields = Array.from(new Set([...(intake.defaultFields || []), ...(options.defaultFields || [])]));
  const encounter = syncTelehealthEncounterCounts({
    encounterId: options.encounterId || crypto.randomUUID(),
    patientRef: options.patientRef || intake.patientRef || null,
    intakeId: options.intakeId || intake.id || null,
    status: options.status || encounterStatusForLifecycle(lifecycleState, "active"),
    lifecycleState,
    createdAt: options.createdAt || now,
    updatedAt: now,
    appointmentId: options.appointmentId || null,
    providerAssignmentId: options.providerAssignmentId || null,
    videoSessionId: options.videoSessionId || null,
    providerActionIds: [],
    consentIds: [],
    vitalsIds: [],
    noteIds: [],
    referralIds: [],
    followUpIds: [],
    outcomeIds: [],
    emergencyEscalationIds: [],
    historyIds: [],
    prescriptionPacketIds: [],
    demoRecord: Boolean(options.demoRecord || intake.demoRecord),
    simulation: Boolean(options.simulation || intake.simulation),
    source: options.source || intake.source || "telehealth-workflow",
    defaultFields
  });
  profile.telehealthEncounters.unshift(encounter);
  profile.telehealthEncounters = profile.telehealthEncounters.slice(0, 50);
  if (intake && intake.id) intake.encounterId = encounter.encounterId;
  return encounter;
}

function ensureTelehealthEncounterForIntake(profile, intake = {}, options = {}) {
  ensureHealthProfile(profile);
  const existing = findTelehealthEncounter(profile, {
    encounterId: options.encounterId || intake.encounterId,
    intakeId: options.intakeId || intake.id,
    patientRef: options.patientRef || intake.patientRef
  });
  if (existing) {
    if (intake && intake.id) intake.encounterId = existing.encounterId;
    if (options.lifecycleState || options.status || options.defaultFields || options.source || options.demoRecord || options.simulation) {
      return updateTelehealthEncounter(profile, existing, options);
    }
    return syncTelehealthEncounterCounts(existing);
  }
  return createTelehealthEncounter(profile, intake, options);
}

function updateTelehealthEncounter(profile, encounter, patch = {}) {
  ensureHealthProfile(profile);
  if (!encounter) return null;
  const lifecycleState = patch.lifecycleState || encounter.lifecycleState || "intake-started";
  if (patch.patientRef !== undefined) encounter.patientRef = patch.patientRef;
  if (patch.intakeId !== undefined) encounter.intakeId = patch.intakeId;
  if (patch.appointmentId) encounter.appointmentId = patch.appointmentId;
  if (patch.providerAssignmentId) encounter.providerAssignmentId = patch.providerAssignmentId;
  if (patch.videoSessionId) encounter.videoSessionId = patch.videoSessionId;
  encounter.providerActionIds = addUniqueEncounterId(encounter.providerActionIds, patch.providerActionId);
  encounter.consentIds = addUniqueEncounterId(encounter.consentIds, patch.consentId);
  encounter.vitalsIds = addUniqueEncounterId(encounter.vitalsIds, patch.vitalsId);
  encounter.noteIds = addUniqueEncounterId(encounter.noteIds, patch.noteId);
  encounter.referralIds = addUniqueEncounterId(encounter.referralIds, patch.referralId);
  encounter.followUpIds = addUniqueEncounterId(encounter.followUpIds, patch.followUpId);
  encounter.outcomeIds = addUniqueEncounterId(encounter.outcomeIds, patch.outcomeId);
  encounter.emergencyEscalationIds = addUniqueEncounterId(encounter.emergencyEscalationIds, patch.emergencyEscalationId);
  encounter.historyIds = addUniqueEncounterId(encounter.historyIds, patch.historyId);
  encounter.prescriptionPacketIds = addUniqueEncounterId(encounter.prescriptionPacketIds, patch.prescriptionPacketId);
  encounter.lifecycleState = lifecycleState;
  encounter.status = patch.status || encounterStatusForLifecycle(lifecycleState, encounter.status);
  encounter.demoRecord = Boolean(encounter.demoRecord || patch.demoRecord);
  encounter.simulation = Boolean(encounter.simulation || patch.simulation);
  if (patch.source) encounter.source = patch.source;
  if (patch.latestProviderAction) encounter.latestProviderAction = patch.latestProviderAction;
  if (patch.defaultFields) encounter.defaultFields = Array.from(new Set([...(encounter.defaultFields || []), ...patch.defaultFields]));
  encounter.updatedAt = new Date().toISOString();
  return syncTelehealthEncounterCounts(encounter);
}

function isInvestorUser(user) {
  return String(user?.role || "").toLowerCase() === "investor";
}

function projectHealthRecordForUser(record, user, key = "") {
  if (!isInvestorUser(user) || !record || typeof record !== "object" || Array.isArray(record)) return record;
  const projected = {};
  for (const field of INVESTOR_HEALTH_RECORD_FIELDS) {
    if (record[field] !== undefined) projected[field] = record[field];
  }
  if (record.nearestClinic?.name) projected.nearestClinic = { name: record.nearestClinic.name, type: record.nearestClinic.type, distanceKm: record.nearestClinic.distanceKm };
  if (record.mobileClinic?.name) projected.mobileClinic = { name: record.mobileClinic.name, type: record.mobileClinic.type, distanceKm: record.mobileClinic.distanceKm };
  if (record.pharmacy?.name) projected.pharmacy = { name: record.pharmacy.name, type: record.pharmacy.type, distanceKm: record.pharmacy.distanceKm };
  if (record.selectedSource?.name) projected.selectedSource = { name: record.selectedSource.name, type: record.selectedSource.type, distanceKm: record.selectedSource.distanceKm };
  if (key === "videoSessions") {
    projected.module = record.module;
    projected.type = record.type;
    projected.status = record.status;
    projected.providerStatus = record.providerStatus;
  }
  projected.redacted = true;
  return projected;
}

function projectIntegrationEventForUser(event, user) {
  if (!isInvestorUser(user) || !event || typeof event !== "object") return event;
  const providerId = String(event.providerId || "");
  const moduleName = String(event.module || "");
  if (moduleName !== "Healthcare" && !providerId.startsWith("health-")) return event;
  return {
    id: event.id,
    providerId: event.providerId,
    module: event.module,
    action: event.action,
    status: event.status,
    createdAt: event.createdAt,
    detail: "Healthcare workflow evidence recorded. Patient-level details are redacted for investor view.",
    redacted: true
  };
}

function projectNotificationForUser(notification, user) {
  if (!isInvestorUser(user) || !notification || typeof notification !== "object") return notification;
  const moduleName = String(notification.module || "");
  if (moduleName !== "Healthcare") return notification;
  return {
    id: notification.id,
    module: notification.module,
    channel: notification.channel,
    status: notification.status,
    createdAt: notification.createdAt,
    message: "Healthcare notification recorded. Patient-level details are redacted for investor view.",
    redacted: true
  };
}

function projectActivityForUser(activity, user) {
  if (!isInvestorUser(user) || typeof activity !== "string") return activity;
  if (!/health|patient|telehealth|clinic|doctor|vitals|symptom|care|intake|caregiver|pharmacy|medicine/i.test(activity)) return activity;
  const timestamp = activity.match(/^\S+/)?.[0];
  return `${timestamp || new Date().toISOString()} Healthcare activity recorded. Patient-level details are redacted for investor view.`;
}

function profileForUser(profile, user) {
  if (!profile || !isInvestorUser(user)) return profile;
  const projected = { ...profile };
  for (const key of HEALTH_PROFILE_ARRAY_KEYS) {
    if (Array.isArray(profile[key])) projected[key] = profile[key].map(record => projectHealthRecordForUser(record, user, key));
  }
  if (Array.isArray(profile.videoSessions)) {
    projected.videoSessions = profile.videoSessions.map(record => (
      record?.module === "Healthcare" || record?.type === "telehealth-video"
        ? projectHealthRecordForUser(record, user, "videoSessions")
        : record
    ));
  }
  if (Array.isArray(profile.integrationEvents)) {
    projected.integrationEvents = profile.integrationEvents.map(event => projectIntegrationEventForUser(event, user));
  }
  if (Array.isArray(profile.notifications)) {
    projected.notifications = profile.notifications.map(notification => projectNotificationForUser(notification, user));
  }
  if (Array.isArray(profile.activity)) {
    projected.activity = profile.activity.map(activity => projectActivityForUser(activity, user));
  }
  if (profile.accessibilityProfile) {
    projected.accessibilityProfile = {
      hearingSupport: Boolean(profile.accessibilityProfile.hearingSupport),
      visualSupport: Boolean(profile.accessibilityProfile.visualSupport),
      preferredFormats: profile.accessibilityProfile.preferredFormats || [],
      language: profile.accessibilityProfile.language,
      bandwidth: profile.accessibilityProfile.bandwidth,
      redacted: true
    };
  }
  if (typeof profile.aiActivity === "string" && /health|patient|telehealth|clinic|doctor|vitals|symptom|care/i.test(profile.aiActivity)) {
    projected.aiActivity = "Healthcare activity recorded. Patient-level details are redacted for investor view.";
  }
  return projected;
}

function publicState(db, user) {
  const providers = runtimeProviders(db);
  ensureOperationsProfile(db.profile);
  ensurePlatformIntelligenceProfile(db.profile);
  ensureOperationalIntelligenceProfile(db.profile);
  ensureAdaptiveAutonomyProfile(db.profile);
  ensureNetworkedIntelligenceProfile(db.profile);
  const providerCandidates = providerCandidateCatalog(db, providers);
  const providerAccountApiAccess = providerAccountApiAccessStatus();
  const productionProviderReadiness = productionProviderReadinessStatus(providers, providerAccountApiAccess);
  const healthPrivacyComplianceGuardrails = healthPrivacyComplianceGuardrailsStatus();
  const agentCapabilities = agentCapabilityRegistryState(db, providers);
  const jarvisReadiness = jarvisReadinessModel(db, user, providers);
  return {
    productIdentity: productIdentityMetadata(),
    user: user && { id: user.id, name: user.name, email: user.email, role: user.role, country: user.country, language: user.language },
    permissions: user ? permissionsForRole(user.role) : {},
    loginProfiles: DEFAULT_USERS.map(user => ({ name: user.name, email: user.email, password: user.password, role: user.role, country: user.country, language: user.language })),
    countries: db.countries,
    routes: db.routes,
    courses: db.courses,
    learningCatalog: learningCatalog(db),
    roles: db.roles,
    products: db.products || [],
    providers,
    providerCandidates,
    providerAccountApiAccess,
    productionProviderReadiness,
    healthPrivacyComplianceGuardrails,
    capabilities: capabilityMatrix(db, providers),
    womenChildrenLearningHub: womenChildrenLearningHubModel(db, providers),
    intelligentAssistant: intelligentAssistantModel(db, user, providers),
    behaviorModel: assistantBehaviorModel(db, user),
    conversationEvidence: conversationEvidencePack(db),
    agentCapabilities,
    jarvisReadiness,
    jarvisProductionTen: jarvisProductionTenModel(db, providers),
    deepOperatingIntelligence: deepOperatingIntelligence(db, user, providers),
    noVendorUpgradeTen: noVendorUpgradeTenPack(db, user, providers),
    maximumOperationalEfficiency: maximumOperationalEfficiencyModel(db, user, providers),
    autonomousOperatingLoop: autonomousOperatingLoopModel(db, user, providers),
    collectiveIntelligence: collectiveIntelligenceEngine(db, user, providers),
    frontierBrain: frontierNexusBrainModel(db, user, providers),
    cloudAgent: cloudAgentTransparencyPacket(db, user),
    crossPlatformFunctions: crossPlatformFunctionPack(db, user, providers),
    womenFamilySupport: womenFamilyAgricultureModel(db, providers),
    remoteLaunchKit: remoteRuralFarmerLaunchKit(db, user, providers),
    platformIntelligence: platformIntelligenceModel(db, user),
    operationalIntelligence: operationalIntelligenceModel(db, user),
    adaptiveAutonomy: adaptiveAutonomyModel(db, user, providers),
    networkIntelligence: networkIntelligenceModel(db, user, providers),
    ecosystemIntelligence: ecosystemIntelligenceModel(db, user, providers),
    executiveIntelligence: executiveIntelligenceSuiteModel(db, user, providers),
    autonomousOrchestration: autonomousOrchestrationModel(db, user, providers),
    governmentReadiness: governmentReadinessModel(db, user, providers),
    sessionBriefing: sessionBriefingModel(db, user, providers),
    impactDashboard: impactDashboardModel(db, providers),
    missionTimeline: missionTimelineModel(db),
    smartActions: smartNextActions(db, user, providers),
    activationGuide: productionActivationGuide(db, providers),
    engineSetup: renderEngineEnvPlan(db),
    automation: automationReadiness(db, providers),
    production: productionCompleteness(db, providers),
    productionPlan: productionOperationsPlan(db, providers),
    persistentOperations: nexusOperationsSummary(db),
    admin: adminSnapshot(db, providers),
    profile: profileForUser(db.profile, user)
  };
}

function governmentReadinessModel(db, user, providers = runtimeProviders(db), options = {}) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureCommunicationProfile(db.profile);
  ensureOperationsProfile(db.profile);
  const countries = (db.countries || []).filter(Boolean);
  const active = activeContext(db);
  const connectedProviders = providers.filter(provider => provider.status === "connected").length;
  const providerNames = providers.filter(provider => provider.status === "connected").slice(0, 6).map(provider => provider.name || provider.id);
  const evidenceCount = (db.profile.integrationEvents || []).length
    + (db.profile.agentCommands || []).length
    + (db.profile.healthIntakes || []).length
    + (db.profile.orders || []).length
    + (db.profile.applications || []).length
    + (db.profile.enrollments || []).length;
  const heatmap = countries.map(country => {
    const riskText = `${country.risk || ""} ${country.queue || ""}`.toLowerCase();
    const healthScore = riskText.includes("high") || riskText.includes("critical") ? 92 : riskText.includes("moderate") ? 68 : 44;
    const accessGap = Math.max(24, Math.min(95, 100 - Number(country.facilities || 0) * 3 + Math.round(Number(country.patients || 0) / 25000)));
    const learningGap = Math.max(22, Math.min(88, 54 + Math.round(Number(country.heat || 28) / 3)));
    const tradeNeed = Math.max(30, Math.min(90, 42 + ((country.products || []).length * 8) + (country.routeId === active.route.id ? 12 : 0)));
    const needScore = Math.round((healthScore * 0.34) + (accessGap * 0.26) + (learningGap * 0.18) + (tradeNeed * 0.22));
    return {
      countryId: country.id,
      country: country.name,
      region: country.region || "Africa",
      queue: country.queue,
      risk: country.risk,
      facilities: country.facilities,
      patients: country.patients,
      heat: country.heat,
      needScore,
      priority: needScore >= 82 ? "highest" : needScore >= 68 ? "high" : needScore >= 52 ? "moderate" : "watch",
      focus: [
        healthScore >= 68 ? "mobile clinics and pharmacy access" : "preventive health access",
        accessGap >= 68 ? "low-bandwidth field intake" : "provider coordination",
        tradeNeed >= 68 ? "farmer trade route support" : "training and workforce readiness"
      ]
    };
  }).sort((a, b) => b.needScore - a.needScore);
  const pilotRegions = heatmap.slice(0, 4).map((item, index) => ({
    phase: index + 1,
    country: item.country,
    priority: item.priority,
    focus: item.focus,
    first30Days: [
      "Register local field coordinators and mobile clinic contacts.",
      "Run voice-first intake, learning, workforce, trade, map, and pharmacy-access proof.",
      "Collect auditable evidence from each workflow."
    ],
    successMetrics: [
      "Patients routed to nearest care resource or mobile clinic.",
      "Learners started and certificates issued.",
      "Farmers matched to buyer/logistics route evidence.",
      "Provider gaps documented for government procurement."
    ]
  }));
  const procurement = [
    { title: "Government pilot license", detail: "90-day ministry or county pilot with dashboards, evidence exports, training, and support.", feeModel: "pilot setup plus monthly platform fee" },
    { title: "Mobile clinic operating network", detail: "Clinic intake, route planning, pharmacy-resource requests, receipts, and service evidence.", feeModel: "clinic subscription plus transaction fee where legally allowed" },
    { title: "Farmer trade and logistics network", detail: "Buyer/seller communication, route tracking, settlement receipts, and AgriNexus platform fee evidence.", feeModel: "transaction fee after buyer/seller transaction completion" },
    { title: "Learning and workforce readiness", detail: "Course access, certificates, job readiness, role applications, and partner reporting.", feeModel: "seat license, sponsored learner, or workforce partner fee" }
  ];
  const compliance = [
    { title: "Data sovereignty", status: "implementation-ready", detail: "Country-specific hosting, export controls, data retention, and agency access rules can be configured per deployment." },
    { title: "Healthcare boundary", status: "active guardrail", detail: "Nexus provides access, intake, resource navigation, and plain-language education, not diagnosis or prescribing." },
    { title: "Payments and trade", status: "provider-ready", detail: "Paystack, Flutterwave, mobile money, escrow, settlement, receipts, and transaction fees need country-specific legal review." },
    { title: "Children and vulnerable users", status: "supervised", detail: "Women and children workflows stay resource-focused, consent-aware, and human-review oriented." }
  ];
  const lowBandwidth = [
    "Voice-first commands and plain-language guidance reduce typing burden.",
    "Local workflow evidence continues when provider engines are unavailable.",
    "PWA cache, compact user mode, captions, and offline-ready records support low-connectivity areas.",
    "SMS, WhatsApp, and phone workflows are provider-ready for rural fallback communication."
  ];
  const pilotStory = {
    title: "Kenya Rural Health, Farmer Trade, And Learning Pilot",
    region: "Nairobi county edge, Kiambu rural corridor, and connected farm communities",
    plainLanguagePitch: "Start with one rural corridor where patients need mobile clinic access, farmers need buyer/logistics support, and families need simple learning and workforce pathways.",
    whyThisWorksBeforeProviders: "AgriNexus can run the full workflow with local pilot records, voice guidance, maps, receipts, reports, and provider-gap evidence before signed vendors are connected.",
    dayInLife: [
      "A patient speaks symptoms or access needs; Nexus opens intake, explains it is not a diagnosis, and routes the person to a clinic or mobile clinic resource.",
      "A farmer asks to sell crops; Nexus creates a trade path, shows route context, prepares buyer communication, and tracks transaction evidence.",
      "A learner starts a course; Nexus guides the lesson, records progress, and connects the skill to workforce readiness.",
      "A ministry or NGO reviewer sees impact, gaps, pilot proof, cost model, and next provider steps in one report."
    ]
  };
  const demoDataPack = {
    label: "Preloaded realistic pilot data",
    status: "ready-for-demo",
    records: [
      { type: "mobile clinic", count: 3, example: "Kiambu Mobile Clinic Route A", purpose: "show clinic contact, intake queue, route, and callback workflow" },
      { type: "pharmacy/resource point", count: 4, example: "Rural Pharmacy Partner Lead", purpose: "show medicine/resource access request and map location workflow" },
      { type: "farmer/seller", count: 5, example: "Maize cooperative seller", purpose: "show crop sale, buyer message, route tracking, and receipt proof" },
      { type: "buyer/logistics partner", count: 4, example: "Regional grain buyer", purpose: "show two-way buyer/seller communication and shipment status" },
      { type: "course", count: (db.courses || []).length, example: (db.courses || [])[0]?.title || "Farm safety and digital trade basics", purpose: "show course selection, lesson progress, quiz, and certificate" },
      { type: "job role", count: (db.roles || []).length, example: (db.roles || [])[0]?.title || "Mobile clinic assistant", purpose: "show readiness gaps, application, interview, mentor, and shift" },
      { type: "drone/field scan", count: Math.max(3, (db.profile.droneScans || []).length), example: "Crop stress scan", purpose: "show simple field interpretation and recommended farmer action" }
    ]
  };
  const walkthroughScripts = [
    { role: "Farmer", say: "Nexus, help me sell my maize and track delivery.", outcome: "Nexus opens crop sale, buyer message, route tracking, payment/receipt path, and next-step guidance." },
    { role: "Patient", say: "Nexus, I need a clinic near me.", outcome: "Nexus opens rural health access, clinic/mobile clinic resource view, intake, map, and non-diagnostic safety language." },
    { role: "Learner", say: "Nexus, start my agriculture course.", outcome: "Nexus opens course selection, lesson progress, captions/audio support, quiz, and certificate path." },
    { role: "Worker", say: "Nexus, help me apply for work.", outcome: "Nexus opens role options, readiness gaps, application record, interview, mentor, and shift workflow." },
    { role: "Mobile clinic", say: "Nexus, prepare today's patient route and medicine resource list.", outcome: "Nexus opens intake queue, clinic route context, resource request, receipts, and follow-up evidence." },
    { role: "NGO", say: "Nexus, show the pilot impact and gaps.", outcome: "Nexus summarizes evidence, country gaps, low-bandwidth readiness, partner needs, and next funding actions." },
    { role: "Investor", say: "Nexus, explain the business model.", outcome: "Nexus explains subscriptions, pilot fees, transaction fees, provider setup, and evidence-backed scale path." },
    { role: "Ministry leader", say: "Nexus, prepare a government readiness report.", outcome: "Nexus prepares regional need heatmap, pilot plan, compliance boundary, procurement model, and 90-day report." }
  ];
  const pilotReadinessChecklist = [
    { item: "Pilot region selected", status: "ready", detail: pilotStory.region },
    { item: "Mobile clinic and pharmacy/resource partner targets", status: "ready-to-invite", detail: "Use local directory records until signed providers are connected." },
    { item: "Learning and workforce demo records", status: "ready", detail: `${(db.courses || []).length} course(s), ${(db.roles || []).length} role(s), and workflow evidence available.` },
    { item: "Map and route proof", status: "ready", detail: "Live map tiles, route context, global view, and shipment tracking workflow are available; logistics GPS provider still improves precision." },
    { item: "Voice and translation readiness", status: "ready", detail: "Nexus supports voice-first guidance, captions, multilingual responses, and stop/recovery behavior." },
    { item: "Legal and safety boundary", status: "ready-for-review", detail: "No diagnosis, no prescribing, no guaranteed jobs, no unapproved payments, and country-specific legal review before scale." },
    { item: "Provider credential gap list", status: "visible", detail: "Course, job, telehealth/EHR, drone, logistics, payment, SMS/WhatsApp, and map vendor credentials remain tracked." }
  ];
  const costBenefit = {
    title: "Public-Sector Cost Benefit",
    benefits: [
      "Reduces paper intake and scattered coordination for mobile clinics and community health teams.",
      "Creates one evidence trail for health access, learning, workforce, farmer trade, logistics, and partner reporting.",
      "Supports low-literacy and low-bandwidth users through voice, captions, simple screens, and guided workflows.",
      "Helps government and NGOs see where provider gaps exist before spending on full integrations."
    ],
    monetization: procurement.map(item => `${item.title}: ${item.feeModel}`),
    investorProof: "The pilot can show usage, workflow completion, partner gaps, transaction evidence, and procurement readiness before live provider contracts are signed."
  };
  const decisionMakerQuestionBank = [
    {
      question: "Will this work before our clinics, pharmacies, schools, or buyers have digital systems?",
      answer: "Yes. AgriNexus can begin with local pilot records, voice intake, maps, receipts, and provider-gap evidence, then connect live vendors when partners are ready."
    },
    {
      question: "How does this protect patients and avoid acting like a doctor?",
      answer: "Nexus supports access, intake, education, routing, and follow-up evidence. It does not diagnose, prescribe, or replace licensed providers, and urgent cases are routed to human help."
    },
    {
      question: "How do we measure whether a rural pilot is working?",
      answer: "Track completed intakes, clinic/resource routing, course starts, certificates, job applications, crop orders, route evidence, provider gaps closed, and user satisfaction."
    },
    {
      question: "Can it support low-literacy and multilingual communities?",
      answer: "Yes. The user side is voice-first, captioned, translated, simple-button driven, and designed for low-bandwidth use with guided one-step workflows."
    },
    {
      question: "What do we need from government, NGOs, or partners first?",
      answer: "Pick one pilot region, identify clinic/resource contacts, assign field coordinators, approve local compliance review, and confirm which provider credentials will be connected later."
    }
  ];
  const monitoringEvaluation = {
    title: "Monitoring, Evaluation, Accountability, And Learning",
    metrics: [
      { label: "Access", measure: "Patient, farmer, learner, and worker workflows started and completed." },
      { label: "Quality", measure: "Human-review gates, safety flags, translated guidance, and error recovery events." },
      { label: "Equity", measure: "Women, children, disabled users, low-literacy users, and rural community participation." },
      { label: "Economics", measure: "Trade value, mobile clinic service records, transaction receipts, and provider cost avoidance." },
      { label: "Provider readiness", measure: "Partner contacts created, credential gaps closed, and live-service checks passed." }
    ],
    reportingCadence: ["Weekly pilot dashboard", "Monthly NGO/government report", "90-day investment and procurement report"]
  };
  const implementationTimeline = [
    { phase: "Week 1-2", title: "Pilot setup", detail: "Choose region, field coordinator, clinic/resource contacts, farmer group, course/job focus, and legal review owner." },
    { phase: "Week 3-4", title: "Community onboarding", detail: "Train field users, run voice-first intake, map clinic/pharmacy points, create first course/work/trade records." },
    { phase: "Month 2", title: "Proof and provider gap closure", detail: "Run weekly evidence reports, identify live provider needs, prepare payment/logistics/telehealth/vendor connection plan." },
    { phase: "Month 3", title: "Procurement decision", detail: "Review impact, cost benefit, compliance status, user feedback, provider readiness, and rollout budget." }
  ];
  const riskMitigation = [
    { risk: "Health liability", mitigation: "Keep clear non-diagnostic language, human/provider escalation, emergency warning, consent, and audit logs." },
    { risk: "Connectivity failure", mitigation: "Use PWA cache, phone/SMS/WhatsApp fallback, local records, captions, and low-bandwidth workflows." },
    { risk: "Data privacy", mitigation: "Apply country-specific hosting, role limits, retention rules, consent tracking, and legal review before live patient data." },
    { risk: "Payment compliance", mitigation: "Use licensed payment providers, country review, receipts, fee transparency, and no unapproved escrow promises." },
    { risk: "Adoption barriers", mitigation: "Keep user mode simple, voice-first, translated, guided, and field-worker assisted." }
  ];
  const partnerOnboardingChecklist = [
    "Name the pilot region and public-sector sponsor.",
    "Identify mobile clinic, pharmacy/resource, farmer group, learning, workforce, logistics, payment, and drone/satellite contacts.",
    "Confirm language, accessibility, low-bandwidth, and field-support needs.",
    "Approve legal review for healthcare, payments, privacy, telecoms, children, and marketplace operations.",
    "Choose pilot success metrics and reporting cadence.",
    "Decide which live provider credentials will be connected first."
  ];
  const budgetEnvelope = {
    title: "Pilot Budget Envelope",
    note: "Exact pricing depends on country, partner scope, live provider costs, legal review, field staffing, and support level.",
    ranges: [
      { tier: "Discovery pilot", range: "$15k-$50k", fit: "One region, guided demo data, partner discovery, field training, weekly evidence reports." },
      { tier: "90-day operating pilot", range: "$75k-$250k", fit: "Multiple workflows, field coordinators, live communications, selected provider credentials, compliance support." },
      { tier: "National scale plan", range: "$500k+", fit: "Multi-region rollout, production integrations, analytics, support desk, procurement, security, and legal operations." }
    ]
  };
  const report = {
    title: "90-Day Government Pilot Report",
    audience: "Ministry leaders, county officials, public health partners, agriculture offices, education partners, and funders",
    sections: [
      "Rural access baseline and priority regions",
      "Mobile clinic, pharmacy, and telehealth access evidence",
      "Women, children, farmer, learner, and workforce support outcomes",
      "Trade, drone, map, logistics, and payment readiness",
      "Provider gaps, legal/compliance review, and procurement pathway"
    ],
    evidence: [
      `${evidenceCount} platform evidence item(s) available now`,
      `${connectedProviders}/${providers.length} provider(s) connected or ready`,
      `${heatmap.length} country/region readiness record(s) modeled`
    ]
  };
  const model = {
    id: crypto.randomUUID(),
    status: connectedProviders >= 5 ? "government-pilot-ready" : "provider-setup-visible",
    activeCountry: active.country.name,
    activeRoute: active.route.name,
    summary: `Government readiness is organized for ${active.country.name} with ${heatmap.length} regional need records, ${pilotRegions.length} pilot region(s), ${connectedProviders}/${providers.length} connected or ready provider(s), and ${evidenceCount} evidence item(s).`,
    impact: {
      evidenceCount,
      connectedProviders,
      providerTotal: providers.length,
      providerNames,
      countriesTracked: heatmap.length,
      priorityRegions: heatmap.filter(item => item.priority === "highest" || item.priority === "high").length
    },
    pilotRegions,
    pilotStory,
    demoDataPack,
    report,
    ministryPartnerMode: {
      title: "Ministry / Partner Mode",
      operatingView: "Shows public-sector impact, region gaps, provider setup, compliance guardrails, pilot proof, and procurement options without exposing private admin controls.",
      partnerRoles: ["Ministry reviewer", "County health lead", "Agriculture extension partner", "Mobile clinic coordinator", "Pharmacy/resource partner", "Funder/investor observer"]
    },
    compliance,
    lowBandwidth,
    heatmap,
    procurement,
    walkthroughScripts,
    pilotReadinessChecklist,
    costBenefit,
    decisionMakerQuestionBank,
    monitoringEvaluation,
    implementationTimeline,
    riskMitigation,
    partnerOnboardingChecklist,
    budgetEnvelope,
    recommendedActions: [
      "Select one country or county pilot region.",
      "Invite one mobile clinic partner, one pharmacy/resource partner, and one agriculture extension partner.",
      "Run a 90-day pilot report every week.",
      "Use evidence exports for government, NGO, and investor briefings."
    ],
    createdAt: new Date().toISOString()
  };
  if (options.persist) {
    db.profile.governmentReadinessRuns = db.profile.governmentReadinessRuns || [];
    const run = {
      ...model,
      action: options.action || "review",
      runNumber: `AN-GOV-${String(db.profile.governmentReadinessRuns.length + 1).padStart(3, "0")}`,
      createdBy: user?.email || "system"
    };
    db.profile.governmentReadinessRuns.unshift(run);
    db.profile.governmentReadinessRuns = db.profile.governmentReadinessRuns.slice(0, 20);
    logIntegration(db, {
      providerId: "database",
      module: "Government",
      action: "government.readiness_reviewed",
      status: "success",
      detail: `${run.runNumber} prepared ${run.report.title} with ${run.pilotRegions.length} pilot region(s), sovereignty/compliance review, low-bandwidth proof, and procurement model.`,
      metadata: { runNumber: run.runNumber, action: run.action, priorityRegions: run.impact.priorityRegions },
      dispatch: false
    });
    addActivity(db.profile, `${run.runNumber} government readiness review completed.`);
    rememberAgentMemory(db.profile, `Government readiness prepared for ${run.activeCountry}: ${run.summary}`, { source: "government-readiness", category: "pattern", module: "Government", confidence: 0.94 });
    return run;
  }
  return model;
}

function impactDashboardModel(db, providers = runtimeProviders(db)) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureCommunicationProfile(db.profile);
  ensureOperationsProfile(db.profile);
  const orders = db.profile.orders || [];
  const womenFamilyRuns = db.profile.womenFamilyRuns || [];
  const womenChildrenPlans = db.profile.womenChildrenLearningPlans || [];
  const tradeValue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const trained = new Set([...(db.profile.completedCourses || []), ...(db.profile.certificates || []).map(item => item.courseId)]).size;
  const providerEvents = (db.profile.integrationEvents || []).length;
  const connectedProviders = providers.filter(provider => provider.status === "connected").length;
  const communications = (db.profile.communicationThreads || []).length + (db.profile.tradeMessageThreads || []).length;
  const ruralAccessScore = Math.min(100, Math.round(
    20
    + Math.min(20, trained * 8)
    + Math.min(15, (db.profile.healthIntakes || []).length * 5)
    + Math.min(15, (db.profile.applications || []).length * 7)
    + Math.min(15, orders.length * 5)
    + Math.min(15, communications * 4)
    + Math.min(10, womenFamilyRuns.length * 5)
    + Math.min(10, womenChildrenPlans.length * 5)
  ));
  const metrics = [
    { label: "Learners trained", value: trained, detail: `${(db.profile.enrollments || []).length} enrollment(s), ${(db.profile.certificates || []).length} certificate(s)` },
    { label: "Jobs supported", value: (db.profile.applications || []).length + (db.profile.shiftSchedule || []).length, detail: `${(db.profile.applications || []).length} application(s), ${(db.profile.shiftSchedule || []).length} shift(s)` },
    { label: "Telehealth cases", value: (db.profile.healthIntakes || []).length, detail: `${(db.profile.carePlans || []).length} care plan(s), ${(db.profile.telehealthFollowUps || []).length} follow-up(s)` },
    { label: "Trade value", value: tradeValue, detail: `${orders.length} order(s), ${(db.profile.walletTransactions || []).length} wallet transaction(s)`, format: "money" },
    { label: "Communication threads", value: communications, detail: "Learning, workforce, telehealth, provider, and buyer-seller threads" },
    { label: "Women & family support", value: womenFamilyRuns.length, detail: `${womenFamilyRuns.filter(item => item.status === "active" || item.status === "pilot-ready").length} active support path(s) for women farmers, youth learning, caregivers, and cooperatives` },
    { label: "Women & children learning", value: womenChildrenPlans.length, detail: `${womenChildrenPlans.filter(item => item.status === "active").length} active family classroom, safe youth learning, mother/caregiver education, and cooperative learning plan(s)` },
    { label: "Provider evidence", value: providerEvents, detail: `${connectedProviders}/${providers.length} connected provider(s)` },
    { label: "Rural access score", value: ruralAccessScore, detail: "Composite learning, women/family support, care, work, trade, communication, and evidence score", suffix: "%" }
  ];
  return {
    status: ruralAccessScore >= 80 ? "investor-ready" : ruralAccessScore >= 55 ? "pilot-ready" : "build-evidence",
    ruralAccessScore,
    metrics,
    summary: `AgriNexus has ${providerEvents} audit event(s), ${communications} communication thread(s), ${orders.length} trade order(s), and ${ruralAccessScore}% rural access readiness.`,
    updatedAt: new Date().toISOString()
  };
}

function missionTimelineModel(db) {
  const items = [];
  const add = (module, title, detail, status, createdAt, evidence = "") => items.push({
    id: crypto.randomUUID(),
    module,
    title,
    detail,
    status,
    evidence,
    createdAt: createdAt || new Date().toISOString()
  });
  (db.profile.enrollments || []).slice(0, 3).forEach(item => add("Learning", "Course pathway started", `${item.progress || 0}% progress`, item.status || "active", item.startedAt, item.courseId));
  (db.profile.certificates || []).slice(0, 3).forEach(item => add("Learning", "Certificate issued", item.title || item.courseId, "complete", item.issuedAt, item.certificateNumber));
  (db.profile.womenChildrenLearningPlans || []).slice(0, 3).forEach(item => add("Learning", "Women and children learning plan opened", `${item.learnerGroup}: ${item.pathTitle}`, item.status || "active", item.createdAt, item.planNumber));
  (db.profile.applications || []).slice(0, 3).forEach(item => add("Workforce", "Role application submitted", item.roleTitle, item.status || "submitted", item.submittedAt, item.id));
  (db.profile.healthIntakes || []).slice(0, 3).forEach(item => add("Healthcare", "Telehealth intake opened", item.patientRef || item.needSummary, item.queueStatus || "active", item.createdAt, item.riskLevel));
  (db.profile.orders || []).slice(-3).forEach(item => add("AgriTrade", "Trade order created", `${item.orderNumber || item.id}: ${item.product}`, item.stage || "active", item.createdAt, item.checkpoint));
  (db.profile.droneScans || []).slice(0, 3).forEach(item => add("AgriTech", "Drone field scan completed", `${item.productName}: ${item.cropHealthScore}% crop health`, item.status || "complete", item.createdAt, item.scanRef));
  (db.profile.womenFamilyRuns || []).slice(0, 3).forEach(item => add("Women & Family", "Women and family support path opened", `${item.beneficiaryGroup}: ${item.primaryNeed}`, item.status || "active", item.createdAt, item.runNumber));
  (db.profile.communicationThreads || []).slice(0, 3).forEach(item => add(item.module || "Communications", "Two-way thread opened", `${item.channel} with ${item.participantName}`, item.status, item.createdAt, item.subject));
  (db.profile.aiOrchestrations || []).slice(0, 3).forEach(item => add("AI", "AI orchestration reviewed", item.recommendation, item.status, item.createdAt, item.aiRunId));
  (db.profile.integrationEvents || []).slice(0, 5).forEach(item => add(item.module || "Integrations", item.action, item.detail, item.status, item.createdAt, item.providerName || item.providerId));
  const sorted = items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 18);
  return {
    total: sorted.length,
    latest: sorted[0] || null,
    items: sorted,
    stages: [
      { title: "Need identified", status: sorted.length ? "done" : "pending" },
      { title: "AI intake or guidance", status: (db.profile.aiRuns || []).length ? "done" : "pending" },
      { title: "Workflow started", status: (db.profile.integrationEvents || []).length ? "done" : "pending" },
      { title: "Communication opened", status: (db.profile.communicationThreads || []).length || (db.profile.tradeMessageThreads || []).length ? "done" : "pending" },
      { title: "Evidence created", status: (db.profile.integrationEvents || []).length >= 5 ? "done" : "active" },
      { title: "Next action recommended", status: (db.profile.workflowIntelligence || []).length || (db.profile.aiOrchestrations || []).length ? "done" : "pending" }
    ]
  };
}

function evidenceExportPacket(db, user, audience = "investor") {
  const impact = impactDashboardModel(db);
  const timeline = missionTimelineModel(db);
  const briefing = sessionBriefingModel(db, user, runtimeProviders(db));
  const government = governmentReadinessModel(db, user, runtimeProviders(db));
  const lines = [
    "# AgriNexus Evidence Packet",
    "",
    `Audience: ${audience}`,
    `Generated: ${new Date().toISOString()}`,
    `Operator: ${user.name} (${user.role})`,
    "",
    "## Executive Summary",
    impact.summary,
    briefing.message || "",
    "",
    "## Impact Metrics",
    ...impact.metrics.map(item => `- ${item.label}: ${item.format === "money" ? `$${Number(item.value || 0).toLocaleString()}` : `${item.value}${item.suffix || ""}`} - ${item.detail}`),
    "",
    "## Pilot Story",
    `- ${government.pilotStory.title}: ${government.pilotStory.plainLanguagePitch}`,
    `- Region: ${government.pilotStory.region}`,
    `- Before live providers: ${government.pilotStory.whyThisWorksBeforeProviders}`,
    "",
    "## Realistic Demo Data",
    ...government.demoDataPack.records.map(item => `- ${item.type}: ${item.count} record(s) - ${item.example} - ${item.purpose}`),
    "",
    "## Role Walkthroughs",
    ...government.walkthroughScripts.map(item => `- ${item.role}: say "${item.say}" - ${item.outcome}`),
    "",
    "## Pilot Readiness Checklist",
    ...government.pilotReadinessChecklist.map(item => `- ${item.item}: ${item.status} - ${item.detail}`),
    "",
    "## Cost Benefit And Monetization",
    ...government.costBenefit.benefits.map(item => `- ${item}`),
    ...government.costBenefit.monetization.map(item => `- ${item}`),
    "",
    "## Decision Maker Questions",
    ...government.decisionMakerQuestionBank.map(item => `- Q: ${item.question} A: ${item.answer}`),
    "",
    "## Monitoring And Evaluation",
    ...government.monitoringEvaluation.metrics.map(item => `- ${item.label}: ${item.measure}`),
    ...government.monitoringEvaluation.reportingCadence.map(item => `- Reporting: ${item}`),
    "",
    "## Implementation Timeline",
    ...government.implementationTimeline.map(item => `- ${item.phase}: ${item.title} - ${item.detail}`),
    "",
    "## Risk Controls",
    ...government.riskMitigation.map(item => `- ${item.risk}: ${item.mitigation}`),
    "",
    "## Partner Onboarding Checklist",
    ...government.partnerOnboardingChecklist.map(item => `- ${item}`),
    "",
    "## Budget Envelope",
    `- ${government.budgetEnvelope.note}`,
    ...government.budgetEnvelope.ranges.map(item => `- ${item.tier}: ${item.range} - ${item.fit}`),
    "",
    "## Mission Timeline",
    ...timeline.items.slice(0, 12).map(item => `- ${item.module}: ${item.title} - ${item.detail} (${item.status})`),
    "",
    "## Provider Evidence",
    ...(db.profile.integrationEvents || []).slice(0, 12).map(item => `- ${item.module}: ${item.action} - ${item.status} - ${item.detail}`),
    "",
    "## AI Evidence",
    ...(db.profile.aiRuns || []).slice(0, 8).map(item => `- ${item.type}: ${item.provider}${item.model ? ` (${item.model})` : ""} - ${item.reviewStatus || "pending-human-review"}`),
    "",
    "## Communication Evidence",
    ...(db.profile.communicationThreads || []).slice(0, 8).map(item => `- ${item.module}: ${item.channel} with ${item.participantName} - ${item.subject} (${item.status})`),
    ...(db.profile.tradeMessageThreads || []).slice(0, 4).map(item => `- AgriTrade: ${item.lastChannel} with ${item.buyerName} - ${item.productName} (${item.status})`)
  ].filter(line => line !== null && line !== undefined);
  const packet = {
    id: crypto.randomUUID(),
    audience,
    title: "AgriNexus Evidence Packet",
    format: "markdown",
    content: lines.join("\n"),
    createdBy: user.email,
    createdAt: new Date().toISOString()
  };
  db.profile.evidenceExports = db.profile.evidenceExports || [];
  db.profile.evidenceExports.unshift({ id: packet.id, audience, createdAt: packet.createdAt, title: packet.title });
  db.profile.evidenceExports = db.profile.evidenceExports.slice(0, 20);
  logIntegration(db, {
    providerId: "database",
    module: "Admin",
    action: "evidence.export_created",
    detail: `${packet.title} created for ${audience}.`,
    metadata: { exportId: packet.id, audience },
    dispatch: false
  });
  addActivity(db.profile, `${packet.title} created for ${audience}.`);
  return packet;
}

function permissionsForRole(role) {
  const all = ["learning", "workforce", "health", "trade", "map", "ai", "integrations", "admin", "profile", "notifications", "governance"];
  const matrix = {
    Admin: all,
    "Standard User": ["learning", "workforce", "health", "trade", "map", "ai", "notifications", "profile"],
    Investor: ["learning", "workforce", "health", "trade", "map", "ai", "profile"]
  };
  const allowed = new Set(matrix[role] || matrix["Standard User"]);
  return Object.fromEntries(all.map(item => [item, allowed.has(item)]));
}

function canUse(user, area) {
  return Boolean(permissionsForRole(user.role)[area]);
}

function canWriteHealth(user) {
  return Boolean(user && (user.role === "Admin" || user.role === "Standard User"));
}

function assistantBehaviorModel(db, user) {
  ensureAiProfile(db.profile);
  const language = user?.language || db.profile.accessibilityProfile?.language || "en";
  const role = user?.role || "Standard User";
  const model = db.profile.agentMemory.userModel || {};
  const currentPersona = model.currentPersona || "general-operator";
  const communicationStyle = model.communicationStyle || "plain-language-step-by-step";
  const accessibilityMode = model.accessibilityMode || db.profile.accessibilityProfile?.supportMode || "standard";
  const stakeholderAudience = stakeholderAudienceConversationModel("", user, model);
  const resilience = conversationResilienceModel("", user, model);
  const audience = model.currentAudience === "investor-government"
    ? "investors, government leaders, and non-technical decision makers"
    : stakeholderAudience.active
      ? stakeholderAudience.audience
    : currentPersona === "farmer-or-trade-operator"
      ? "farmers, crop sellers, buyer coordinators, and field teams"
      : currentPersona === "health-access-user"
        ? "patients, caregivers, telehealth aides, and community health teams"
        : currentPersona === "workforce-candidate"
          ? "job seekers, workforce operators, mentors, and placement teams"
          : currentPersona === "learner"
            ? "learners, trainers, and low-bandwidth education teams"
            : "low-tech rural and cross-language users";
  return {
    id: "human-guide-behavior-model",
    name: "Human Guide Behavior Model",
    status: "active",
    language,
    role,
    audience,
    stakeholderAudience,
    resilience,
    currentPersona,
    communicationStyle,
    accessibilityMode,
    tone: "warm, plain-language, calm, confident, patient, non-robotic",
    interactionStyle: "voice-first, one-step-at-a-time, confirmation-before-action",
    turnPattern: [
      "Acknowledge what the user asked.",
      "Restate the request in plain language so the user knows they were understood.",
      "Orient the user to where they are without using technical menu language.",
      "Recommend one clear next step.",
      "Ask for confirmation before committing important workflow records.",
      "Offer a simple phrase the user can say next."
    ],
    principles: [
      "Use short natural sentences.",
      "Avoid technical labels unless the user asks for them.",
      "Never overwhelm a non-technical user with too many choices.",
      "Prefer spoken guidance over button-heavy navigation.",
      "Explain actions as everyday tasks like start care, learn a lesson, apply for work, sell crops, or check the farm.",
      "Keep AI actions supervised and explain when human review matters.",
      "Adapt to role, language, accessibility needs, and remembered preferences.",
      "Adapt to stakeholder audience: government, NGO, farmer, or grandma/elder/patient.",
      "Assume the user may not know formal words; teach back the meaning before routing.",
      "When uncertain, ask one helpful question instead of dumping instructions."
    ],
    lowTechBehaviors: [
      "Use one clear question at a time.",
      "Accept imperfect wording and route by intent.",
      "Confirm before changing records, sending messages, or starting provider workflows.",
      "Offer read-aloud support for users with low literacy or visual impairment.",
      "Keep next steps useful even when external providers are unavailable."
    ],
    followUps: [
      "Would you like me to open that now?",
      "Should I prepare the intake?",
      "Do you want me to read this aloud?",
      "Would you like the next step or the full tour?"
    ],
    evidence: {
      conversations: (db.profile.agentConversation || []).length,
      memories: (db.profile.agentMemory.preferences || []).length + (db.profile.agentMemory.longTermFacts || []).length,
      guidedIntakes: (db.profile.agentMemory.conversationalIntakes || []).length
    }
  };
}

function conversationResilienceModel(command = "", user = {}, model = {}) {
  const value = String(command || "").toLowerCase().replace(/\s+/g, " ").trim();
  const words = value.split(/\s+/).filter(Boolean);
  const savedStyle = String(model.communicationStyle || "").toLowerCase();
  const languageConfidenceRisk = /\b(no english|small english|broken english|bad english|no words|don't know words|dont know words|cannot explain|can't explain|cant explain|my language|translate|mixed language|speak slow|talk slow)\b/.test(value);
  const multilingualBridgeRisk = /\b(ayuda|aide|preciso|remedio|dawa|magani|oogun|kliniki|likita|daktari|kazi|shamba|soko|mazao|tafadhali|abeg|wahala|dey|sabi|habari|msaada|bonjour|salut|hola|arabic|french|swahili|kiswahili|hausa|yoruba|igbo|amharic|oromo|lingala|portuguese)\b/.test(value);
  const literacyRisk = /\b(no school|not educated|cannot read|can't read|cant read|cannot write|can't write|cant write|illiterate|low literacy|read for me|explain simple|too many words)\b/.test(value)
    || savedStyle.includes("plain-language")
    || savedStyle.includes("rural");
  const fearOrStress = /\b(scared|afraid|fear|panic|worried|confused|i don't know|i dont know|help me|please|urgent|emergency|pain|sick|weak|lost|stuck)\b/.test(value);
  const fragmentSpeech = words.length > 0 && (words.length <= 6 || /\b(thing|bad|help|sick|hot|pain|crop|doctor|medicine|job|map|clinic)\b/.test(value));
  const correctionOrMishear = /\b(stop|wrong|misheard|heard wrong|not that|no not|i mean|meant|again|repeat|say again|texas stop|nexis stop|nexus stop)\b/.test(value);
  const correctedAwayFromHealth = /\b(not doctor|not health|not clinic|not medicine)\b.*\b(crop|farm|maize|cassava|field|buyer|sell|market)\b/.test(value)
    || /\b(crop|farm|maize|cassava|field|buyer|sell|market)\b.*\b(not doctor|not health|not clinic|not medicine)\b/.test(value);
  const medicalFragility = !correctedAwayFromHealth && /\b(baby|child|pregnant|elder|grandma|bleeding|breathe|breathing|unconscious|chest pain|fever|very hot|medicine|doctor|clinic|pharmacy|injury|pain|sick|dawa|magani|oogun|remedio|kliniki|daktari|likita)\b/.test(value);
  const userMayBeIndirect = /\b(my mother|my child|my wife|my husband|my family|neighbor|village|community|people here|they said)\b/.test(value);
  const highConsequence = /\b(medicine|doctor|clinic|pharmacy|child|baby|pregnant|payment|pay|money|wallet|job|apply|legal|police|border|emergency|bleeding|breathe|unconscious)\b/.test(value);
  const groupSpeechRisk = /\b(people talking|two people|many people|background|noise|crowd|family talking|not talking to you)\b/.test(value);
  const active = Boolean(value)
    ? languageConfidenceRisk || multilingualBridgeRisk || literacyRisk || fearOrStress || fragmentSpeech || medicalFragility || userMayBeIndirect || correctionOrMishear || groupSpeechRisk
    : literacyRisk || savedStyle.includes("pan-african-rural");
  const score = Math.min(100, Math.max(20,
    38
    + (languageConfidenceRisk ? 16 : 0)
    + (multilingualBridgeRisk ? 12 : 0)
    + (literacyRisk ? 16 : 0)
    + (fearOrStress ? 12 : 0)
    + (fragmentSpeech ? 10 : 0)
    + (medicalFragility ? 14 : 0)
    + (userMayBeIndirect ? 8 : 0)
    + (correctionOrMishear ? 10 : 0)
    + (highConsequence ? 8 : 0)
  ));
  const communicationProfile = groupSpeechRisk
    ? "pause-for-clear-wake-phrase"
    : correctionOrMishear
      ? "repair-and-confirm-before-action"
      : medicalFragility
        ? "safety-first-health-teachback"
      : multilingualBridgeRisk || languageConfidenceRisk
        ? "mixed-language-meaning-bridge"
        : literacyRisk
          ? "low-literacy-read-aloud"
          : fragmentSpeech
            ? "fragment-to-intent"
            : "direct-conversation";
  const confidenceBand = score >= 82 ? "high-resilience-needed" : score >= 60 ? "moderate-resilience-needed" : active ? "light-resilience-needed" : "normal";
  const supportMoves = [
    active ? "Repeat the likely meaning before action." : null,
    active ? "Use one short sentence, then one question." : null,
    languageConfidenceRisk || multilingualBridgeRisk ? "Accept mixed language and translate the meaning, not just the words." : null,
    literacyRisk ? "Offer read-aloud, captions, and simple examples." : null,
    correctionOrMishear ? "Stop the prior path, apologize briefly, and ask the corrected area." : null,
    groupSpeechRisk ? "Pause instead of guessing when speech may not be directed to Nexus." : null,
    highConsequence ? "Confirm before health, medicine, payment, job, legal, or contact actions." : null
  ].filter(Boolean);
  const nextQuestionByModule = {
    Healthcare: medicalFragility
      ? "Is the person breathing, awake, and safe right now, and where are they?"
      : "Are you asking for a clinic, medicine, a provider call, or safety help?",
    AgriTrade: "What crop is it, and do you want to save it, sell it, or move it?",
    Workforce: "What work can you do, and what country or city are you in?",
    Learning: "What do you want to learn, and should I explain it slowly or read it aloud?",
    Maps: "Where are you starting, and where do you need to go?",
    Platform: "Tell me one word first: health, crop, work, learning, map, or medicine."
  };
  const responseContract = active
    ? [
      "Reflect: say what Nexus thinks the person means in simple words.",
      "Safety: if health or danger appears, ask safety and location first.",
      "Clarify: ask only one question.",
      "Guide: name one next step the user can do or say.",
      "Respect: never shame grammar, education, accent, or missing details.",
      "Repair: if the user corrects Nexus, stop the old path and restate the corrected meaning."
    ]
    : [
      "Answer directly.",
      "Ask one useful follow-up question if needed.",
      "Keep provider and safety boundaries clear."
    ];
  return {
    id: "conversation-resilience-v2",
    lineage: "conversation-resilience-v1",
    active,
    score,
    confidenceBand,
    communicationProfile,
    languageConfidenceRisk,
    multilingualBridgeRisk,
    literacyRisk,
    fearOrStress,
    fragmentSpeech,
    medicalFragility,
    userMayBeIndirect,
    correctionOrMishear,
    highConsequence,
    groupSpeechRisk,
    responseMode: active ? "teach-back-one-question" : "normal-conversation",
    plainOpening: groupSpeechRisk
      ? "I hear people talking. I will pause instead of guessing."
      : correctionOrMishear
        ? "You are right. I may have heard that wrong. I will stop and reset."
      : medicalFragility
      ? "I hear health concern. I am not a doctor, but I can help find the safest next step."
      : fragmentSpeech
        ? "I may have heard only part of that. I will go slowly."
        : "I hear you. I will keep this simple.",
    nextQuestion: groupSpeechRisk
      ? "Say Nexus and one clear area when you want me: health, crop, work, learning, map, or medicine."
      : correctionOrMishear
        ? "Tell me the corrected area: health, crop, work, learning, map, or medicine."
      : medicalFragility
      ? "Is the person safe right now, and where are they?"
      : languageConfidenceRisk || literacyRisk
        ? "Tell me one word first: health, crop, work, learning, map, or medicine."
        : "What do you need first?",
    nextQuestionByModule,
    supportMoves,
    conversationRepairScript: [
      "Stop the current workflow if the user says stop, wrong, or not that.",
      "Say: I may have heard that wrong.",
      "Ask for one corrected word or area.",
      "Do not keep explaining the old workflow."
    ],
    responseContract,
    safetyRules: [
      "No perfect sentence required.",
      "No shame for education level, accent, mixed language, or incomplete words.",
      "Confirm meaning before sensitive actions.",
      "Use human/provider review for health, children, medicine, payments, jobs, and legal decisions.",
      "When more than one person may be speaking, pause and wait for a clear Nexus wake phrase."
    ]
  };
}

function stakeholderAudienceConversationModel(command = "", user = {}, model = {}) {
  const value = String(command || "").toLowerCase().replace(/\s+/g, " ").trim();
  const savedAudience = String(model.currentAudience || "").toLowerCase();
  const savedPersona = String(model.currentPersona || "").toLowerCase();
  let key = "community";
  const explicitGovernment = /\b(government|ministry|minister|county|district|public sector|policy|procurement|health department|agriculture department|official|regulator|cabinet|mayor)\b/.test(value);
  const explicitNgo = /\b(ngo|nonprofit|non-profit|field partner|implementing partner|donor|foundation|aid|relief|program officer|community organization|cbo)\b/.test(value);
  const explicitGrandma = /\b(grandma|grandmother|elder|old person|patient|caregiver|mama|mother|child|family)\b/.test(value);
  const explicitFarmer = /\b(farmer|farm|crop|field|seller|buyer|cooperative|smallholder|producer|harvest|market)\b/.test(value);
  if (explicitNgo) key = "ngo";
  else if (explicitGovernment) key = "government";
  else if (explicitGrandma) key = "grandma";
  else if (explicitFarmer) key = "farmer";
  else if (savedAudience.includes("ngo")) key = "ngo";
  else if (savedAudience.includes("government")) key = "government";
  else if (savedPersona.includes("health-access")) key = "grandma";
  else if (savedPersona.includes("farmer")) key = "farmer";
  const models = {
    government: {
      key: "government",
      audience: "government leaders, ministry officials, regulators, public-sector buyers, and non-technical decision makers",
      tone: "clear, accountable, evidence-led, policy-safe, procurement-aware",
      responseShape: "start with public value, then risk controls, readiness evidence, implementation step, and one decision question",
      wants: ["national benefit", "regional rollout", "cost-benefit", "data governance", "risk controls", "compliance", "jobs and health impact"],
      nextQuestion: "Which public outcome matters most right now: health access, farmer income, workforce, learning, or national readiness?"
    },
    ngo: {
      key: "ngo",
      audience: "NGO leaders, field teams, donors, community organizers, and implementation partners",
      tone: "field-practical, impact-focused, respectful, measurable, community-first",
      responseShape: "start with the community need, then field workflow, safeguards, evidence, partner handoff, and one next action",
      wants: ["beneficiary support", "field logistics", "monitoring and evaluation", "case records", "training", "referral networks", "donor evidence"],
      nextQuestion: "Which field outcome should we support first: clinic access, farmer support, learning, jobs, or supplies?"
    },
    farmer: {
      key: "farmer",
      audience: "farmers, smallholder producers, cooperatives, buyers, sellers, and field agents",
      tone: "plain, practical, respectful, action-first, no jargon",
      responseShape: "repeat the crop or problem, ask one location/crop question, then guide crop, buyer, route, payment, or field scan",
      wants: ["crop health", "buyer access", "fair price", "safe route", "payment proof", "drone/simple field advice", "market timing"],
      nextQuestion: "What crop is it, and are you trying to save it, sell it, or move it?"
    },
    grandma: {
      key: "grandma",
      audience: "grandma, elders, patients, caregivers, low-literacy users, and families",
      tone: "gentle, slow, reassuring, safety-first, one question at a time",
      responseShape: "reflect the need, check safety and location, use simple words, avoid diagnosis, and offer phone, captions, or caregiver help",
      wants: ["health safety", "medicine help", "clinic location", "read-aloud guidance", "family support", "simple learning", "safe daily choices"],
      nextQuestion: "Are you safe right now, and where are you?"
    },
    community: {
      key: "community",
      audience: "rural African communities, families, learners, workers, farmers, patients, NGOs, and public leaders",
      tone: "warm, plain-language, cross-cultural, non-technical, practical",
      responseShape: "identify the audience, reflect the need, ask one question, and route to the safest useful workflow",
      wants: ["health", "crops", "learning", "work", "maps", "communications", "evidence"],
      nextQuestion: "Who are we helping first: government, NGO, farmer, or grandma?"
    }
  };
  const selected = models[key] || models.community;
  return {
    ...selected,
    active: key !== "community" || Boolean(value),
    behaviorRules: [
      "Do not use the same wording for every audience.",
      "Keep non-technical users away from backend/admin language.",
      "Give decision makers evidence and controls.",
      "Give field partners implementation steps and measurable proof.",
      "Give farmers direct crop, buyer, route, and payment help.",
      "Give grandma and patients safety-first support without diagnosis."
    ]
  };
}

function behaviorFollowUpForResult(result = {}) {
  const intent = String(result.intent || "");
  const status = String(result.status || "");
  if (status === "needs-confirmation") return "Say yes to continue, or no to cancel.";
  if (status === "needs-input") return "Tell me the next answer in your own words.";
  if (intent.includes("progress_summary")) return "You can say what should I do next if you want the next guided step.";
  if (intent.includes("platform_explained")) return "You can ask me to open telehealth, learning, workforce, trade, maps, or voice help.";
  if (intent.includes("platform_guide")) return "You can say the suggested command when you are ready.";
  if (intent.includes("investor_presentation")) return "You can say read this aloud when you want the presentation voiceover.";
  if (intent.includes("ten_item_model")) return "You can test any item by saying its command.";
  return "Would you like me to guide the next step?";
}

function adaptiveBehaviorNudge(behavior = {}, result = {}) {
  const status = String(result.status || "");
  const section = String(result.metadata?.redirectSection || result.metadata?.moduleSignal?.section || "").toLowerCase();
  const module = String(result.metadata?.moduleSignal?.module || result.metadata?.module || "").toLowerCase();
  if (result.metadata?.suppressBehaviorNudge) return "";
  if (String(result.intent || "").includes("platform_explained")) return behaviorFollowUpForResult(result);
  if (result.metadata?.conversationResilience?.groupSpeechRisk) return "";
  if (status === "needs-confirmation") return "Say yes when you are ready, or no if you want me to stop.";
  if (behavior.accessibilityMode && behavior.accessibilityMode !== "standard") return "I can read this aloud, simplify it, or keep going step by step.";
  if (section === "health" || module.includes("health")) return "You can ask me to start intake, find clinic or pharmacy support, call a provider, add captions, or check safety risk.";
  if (section === "trade" || module.includes("agritrade")) return "You can ask me to contact the buyer, check the field, plan the route, or explain the crop evidence.";
  if (section === "workforce" || module.includes("workforce")) return "You can ask me to match a role, apply, prepare for interview, or schedule a shift.";
  if (section === "learning" || module.includes("learning")) return "You can ask me to start the course, complete a lesson, build captions, or issue a certificate.";
  if (behavior.currentPersona === "farmer-or-trade-operator") return "You can ask me to contact the buyer, check the field, plan the route, or explain the crop evidence.";
  if (behavior.currentPersona === "health-access-user") return "You can ask me to start intake, connect a representative, add captions, or check safety risk.";
  if (behavior.currentPersona === "workforce-candidate") return "You can ask me to match a role, apply, prepare for interview, or schedule a shift.";
  if (behavior.currentPersona === "learner") return "You can ask me to start the course, complete a lesson, build captions, or issue a certificate.";
  if (behavior.currentAudience === "investor-government") return "You can ask me for the investor summary, evidence, or the next presentation step.";
  return behaviorFollowUpForResult(result);
}

function suggestedRepliesForResult(result = {}, behavior = {}) {
  const intent = String(result.intent || "");
  const status = String(result.status || "");
  if (status === "needs-confirmation") return ["yes", "no", "explain that"];
  if (intent.includes("clarification_resolved")) return ["yes", "no", "explain that"];
  if (intent.includes("voice_recovery_resolved")) return ["yes", "no", "explain that"];
  if (intent.includes("clarification_started")) return result.metadata?.suggestedReplies || ["contact buyer", "start intake", "apply for role"];
  if (intent.includes("voice_recovery") && result.metadata?.suggestions) return result.metadata.suggestions;
  if (behavior.accessibilityMode && behavior.accessibilityMode !== "standard" && intent.includes("encyclopedia_answered")) return ["read it aloud", "make it simpler", "continue"];
  if (result.metadata?.suggestedReplies) return result.metadata.suggestedReplies;
  if (status === "needs-input") return ["tell me more", "start intake", "take me there"];
  if (status === "paused") return ["continue", "repeat that", "take me there"];
  if (intent.includes("open_reasoning")) return ["do the next step", "explain that", "take me there"];
  if (intent.includes("platform_explained")) return result.metadata?.suggestedReplies || ["open telehealth", "start a course", "sell my crop"];
  if (intent.includes("followup_explained")) return ["yes", "no", "tell me more"];
  if (intent.includes("acknowledged")) return ["do the next step", "what should I do next", "open that"];
  if (intent.includes("workflow_outcome_summary")) return ["do the next step", "explain that", "show evidence"];
  if (intent.includes("daily_operator_briefing")) return ["do the next step", "run full mission", "open dashboard"];
  if (intent.includes("voice_mission_status")) return ["continue", "do the next step", "take me there"];
  if (intent.includes("language_changed")) return ["continue", "what can I say", "open voice help"];
  if (intent.includes("conversation.greeting")) return ["help me get started", "open telehealth", "contact my buyer"];
  if (behavior.currentPersona === "farmer-or-trade-operator") return ["contact buyer", "run drone scan", "check route risk"];
  if (behavior.currentPersona === "health-access-user") return ["start intake", "connect representative", "turn on captions"];
  if (behavior.currentPersona === "workforce-candidate") return ["apply for role", "review gaps", "schedule interview"];
  if (behavior.currentPersona === "learner") return ["start course", "complete lesson", "issue certificate"];
  if (behavior.currentAudience === "investor-government") return ["investor summary", "show evidence", "run demo tour"];
  return ["do the next step", "what should I do next", "open voice help"];
}

function humanizeAgentResult(db, user, result = {}, command = "") {
  if (command) updateConversationUserModel(db.profile, command);
  const behavior = assistantBehaviorModel(db, user);
  const original = String(result.response || "I am ready.");
  const suppressNudge = Boolean(result.metadata?.suppressBehaviorNudge);
  const alreadyNatural = /^(AgriNexus|Nexus|For|A sick|Good morning|Good afternoon|Good evening|Hello|Yes|I hear you|Absolutely|Got it|Done|Here is|Welcome|I can|I opened|I created|I submitted|Full map|The full intelligent model)/i.test(original);
  const prefix = alreadyNatural || suppressNudge ? "" : "Got it. ";
  const followUp = suppressNudge ? "" : adaptiveBehaviorNudge(behavior, result);
  const suggestedReplies = suggestedRepliesForResult(result, behavior);
  const response = [`${prefix}${original}${/[.!?]$/.test(original.trim()) ? "" : "."}`, followUp].filter(Boolean).join(" ");
  return {
    ...result,
    response,
    metadata: {
      ...(result.metadata || {}),
      behaviorModel: {
        id: behavior.id,
        tone: behavior.tone,
        audience: behavior.audience,
        currentPersona: behavior.currentPersona,
        communicationStyle: behavior.communicationStyle,
        accessibilityMode: behavior.accessibilityMode,
        interactionStyle: behavior.interactionStyle,
        turnPattern: behavior.turnPattern.slice(0, 5),
        followUp
      },
      suggestedReplies
    }
  };
}

function intelligentAssistantModel(db, user, providers = runtimeProviders(db)) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureOperationsProfile(db.profile);
  const providerOk = id => ["connected", "ready"].includes(providers.find(item => item.id === id)?.status);
  const hasMemory = Boolean(
    (db.profile.agentMemory.preferences || []).length
    || (db.profile.agentMemory.longTermFacts || []).length
    || (db.profile.agentMemory.conversationalIntakes || []).length
  );
  const hasVoice = providerOk("voice-tts") || Boolean(process.env.OPENAI_API_KEY);
  const hasTranslation = providerOk("translation") || ["en", "fr", "sw", "ar", "es"].includes(user?.language || db.profile.accessibilityProfile?.language || "en");
  const items = [
    {
      id: "goal-driven-operating-brain",
      title: "Goal-driven operating brain",
      ready: Boolean(user?.role) || (db.profile.agentPlans || []).length > 0,
      evidence: user?.role ? `${user.role} mode gives Nexus a goal frame for User, Admin, or Investor work.` : "Create a mission so Nexus can hold an outcome.",
      command: "Nexus, what is my goal here"
    },
    {
      id: "persistent-memory",
      title: "Persistent memory",
      ready: hasMemory,
      evidence: hasMemory ? `${(db.profile.agentMemory.preferences || []).length + (db.profile.agentMemory.longTermFacts || []).length + (db.profile.agentMemory.conversationalIntakes || []).length} memory record(s) shape future guidance.` : "Say remember, then tell AgriNexus an important preference.",
      command: "remember that I prefer voice-first support"
    },
    {
      id: "live-context-awareness",
      title: "Live context awareness",
      ready: true,
      evidence: `Nexus tracks role, active section, pending action, guided mission, recommended next action, and production readiness.`,
      command: "Nexus, awareness check"
    },
    {
      id: "autonomous-missions",
      title: "Autonomous missions",
      ready: true,
      evidence: `${(db.profile.agentPlans || []).filter(plan => plan.mode === "autopilot").length} autopilot plan(s), ${(db.profile.agentExecutions || []).length} execution(s), confirmation gates before risky actions.`,
      command: "autopilot help this farmer get from crop problem to buyer payment"
    },
    {
      id: "natural-voice-operation",
      title: "Natural voice operation",
      ready: hasVoice,
      evidence: hasVoice ? "Voice response provider is available; browser voice and OpenAI voice can guide users." : "Browser voice still works locally; OpenAI voice needs credits/key.",
      command: "Nexus, talk me through this"
    },
    {
      id: "workflow-execution",
      title: "Workflow execution",
      ready: true,
      evidence: `Agent tools can stage or execute learning, workforce, telehealth, trade, map, drone, communications, provider, and admin workflows.`,
      command: "Nexus, do the next step"
    },
    {
      id: "provider-independence-layer",
      title: "Provider independence layer",
      ready: providers.length > 0,
      evidence: `${providers.filter(provider => ["connected", "ready"].includes(provider.status)).length}/${providers.length} provider adapter(s) connected or ready; local workflows continue when vendors are missing.`,
      command: "test provider engines"
    },
    {
      id: "accessibility-first-behavior",
      title: "Accessibility-first behavior",
      ready: true,
      evidence: (db.profile.accessibilityProfile?.preferredFormats || []).join(", ") || "Captions, audio guide, read-aloud, simplified language, low-bandwidth, visual and hearing support paths.",
      command: "prepare accessible support"
    },
    {
      id: "role-specific-intelligence",
      title: "Role-specific intelligence",
      ready: Boolean(user?.role),
      evidence: `${user?.role || "User"} mode changes what Nexus shows, says, recommends, and protects.`,
      command: "what can I do with my account"
    },
    {
      id: "evidence-and-mobile-initiative",
      title: "Evidence and mobile initiative",
      ready: (db.profile.integrationEvents || []).length > 0 || (db.profile.agentBriefings || []).length > 0,
      evidence: `${(db.profile.integrationEvents || []).length} evidence event(s), ${(db.profile.agentBriefings || []).length} briefing(s), native bridge and phone/voice readiness paths.`,
      command: "Nexus, summarize evidence and mobile readiness"
    }
  ];
  const readyCount = items.filter(item => item.ready).length;
  return {
    status: readyCount === items.length ? "all-ten-active" : "active-with-setup-gates",
    readyCount,
    total: items.length,
    operatingPrinciples: ["goals", "memory", "awareness", "recovery", "initiative"],
    items
  };
}

function voiceLanguageLabel(language) {
  return { en: "English", fr: "French", sw: "Kiswahili", ar: "Arabic", es: "Spanish" }[language] || "selected-language";
}

function platformProgressSummary(db, user, providers = runtimeProviders(db)) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  const next = smartNextActions(db, user, providers).items[0];
  const connected = providers.filter(provider => provider.status === "connected").length;
  return [
    `${db.profile.readiness || 0}% workforce readiness`,
    `${(db.profile.enrollments || []).length} course enrollment(s) and ${(db.profile.certificates || []).length} certificate(s)`,
    `${(db.profile.applications || []).length} workforce application(s) and ${(db.profile.shiftSchedule || []).length} shift(s)`,
    `${(db.profile.healthIntakes || []).length} telehealth intake(s) and ${(db.profile.carePlans || []).length} care plan(s)`,
    `${(db.profile.orders || []).length} trade order(s), ${(db.profile.droneScans || []).length} drone scan(s), and ${(db.profile.mapEvidencePackets || []).length} map packet(s)`,
    `${connected}/${providers.length} provider engine(s) connected`,
    next ? `next recommended step: ${next.title}` : "next recommended step: ask AgriNexus for guidance"
  ].join("; ");
}

function userDisplayName(user) {
  const name = String(user?.name || "").trim();
  const role = String(user?.role || "").trim();
  const roleLike = new Set(["standard user", "admin", "platform admin", "investor", "investor viewer", "user"]);
  if (name && !roleLike.has(name.toLowerCase()) && name.toLowerCase() !== role.toLowerCase()) return name;
  const emailName = String(user?.email || "").split("@")[0].replace(/[._-]+/g, " ").trim();
  if (emailName && !roleLike.has(emailName.toLowerCase())) return emailName;
  return "there";
}

function sessionBriefingModel(db, user, providers = runtimeProviders(db)) {
  ensureOperationsProfile(db.profile);
  ensureAiProfile(db.profile);
  const nextActions = smartNextActions(db, user, providers).items;
  const top = nextActions[0];
  const name = userDisplayName(user);
  const firstRun = !(db.profile.onboardingRuns || []).length;
  const model = intelligentAssistantModel(db, user, providers);
  const progress = platformProgressSummary(db, user, providers);
  const prompts = [
    firstRun ? "I am new, guide me" : "what should I do next",
    top?.title || "help me",
    "summarize my progress",
    "show me all 10 items"
  ];
  return {
    title: firstRun ? `Welcome, ${name}. I can guide your first session.` : `Welcome back, ${name}. Here is your operating brief.`,
    message: firstRun
      ? `I can walk you through AgriNexus step by step. Your workspace is ready, and the assistant model has ${model.readyCount}/${model.total} items active.`
      : `Your workspace is ready, ${name}. ${top ? `Recommended next: ${top.title}. ${top.detail}` : "Ask AgriNexus for your next best step."}`,
    progress,
    nextAction: top || null,
    prompts,
    status: firstRun ? "first-time-guide" : "returning-session",
    assistantReadiness: { readyCount: model.readyCount, total: model.total, status: model.status }
  };
}

function workflowOutcomeSummary(db) {
  ensureAiProfile(db.profile);
  const latestCommand = (db.profile.agentCommands || [])[0] || null;
  const latestEvent = (db.profile.integrationEvents || [])[0] || null;
  const latestActivity = (db.profile.activity || [])[0] || "";
  const evidence = [
    latestCommand ? `voice command ${latestCommand.intent}` : "",
    latestEvent ? `${latestEvent.module} evidence: ${latestEvent.action}` : "",
    latestActivity ? `activity: ${latestActivity.replace(/^\S+\s+/, "")}` : ""
  ].filter(Boolean);
  const next = smartNextActions(db, null, runtimeProviders(db)).items[0];
  return {
    latestCommand,
    latestEvent,
    latestActivity,
    evidence,
    next,
    text: evidence.length
      ? `The last workflow created ${evidence.join("; ")}. ${next ? `Next best step: ${next.title}. ${next.detail}` : "Next best step: ask AgriNexus for guidance."}`
      : "No workflow evidence has been created yet in this session. Start with a voice command like open telehealth, apply for that job, or contact my buyer."
  };
}

function dailyOperatorBriefing(db, user, providers = runtimeProviders(db)) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  const connected = providers.filter(provider => provider.status === "connected").length;
  const nextActions = smartNextActions(db, user, providers).items.slice(0, 3);
  const latestRisk = (db.profile.publicHealthChecks || [])[0];
  const latestTrade = (db.profile.tradeEfficiencyReviews || [])[0];
  const priorities = [
    `${(db.profile.healthIntakes || []).length} telehealth intake(s), ${(db.profile.telehealthReferrals || []).length} referral(s), and ${(db.profile.telehealthFollowUps || []).length} follow-up(s)`,
    `${(db.profile.enrollments || []).length} learner enrollment(s), ${(db.profile.certificates || []).length} certificate(s), and ${db.profile.readiness || 0}% workforce readiness`,
    `${(db.profile.applications || []).length} job application(s), ${(db.profile.shiftSchedule || []).length} shift(s), and ${(db.profile.interviews || 0)} interview(s)`,
    `${(db.profile.orders || []).length} trade order(s), ${(db.profile.buyerContacts || []).length} buyer contact(s), and ${(db.profile.droneScans || []).length} drone scan(s)`,
    `${connected}/${providers.length} provider engine(s) connected`
  ];
  const caution = latestRisk ? `Latest public-health check: ${latestRisk.regionName} is ${latestRisk.riskLevel}.` : "";
  const trade = latestTrade ? `Latest AgriTrade efficiency score: ${latestTrade.score}% for ${latestTrade.productName}.` : "";
  return {
    title: `Good morning ${user?.name?.split(/\s+/)[0] || "operator"}.`,
    priorities,
    nextActions,
    caution,
    trade,
    text: [
      `Good morning ${user?.name?.split(/\s+/)[0] || "operator"}. Here is your AgriNexus operating brief.`,
      priorities.join("; "),
      caution,
      trade,
      nextActions.length ? `Top next steps: ${nextActions.map(item => `${item.title} in ${item.module}`).join("; ")}.` : "Top next step: ask AgriNexus to guide the next workflow."
    ].filter(Boolean).join(" ")
  };
}

function isPersonalAssistantBriefingCommand(lower = "") {
  const value = String(lower || "").trim();
  return /^(good morning|good afternoon|good evening|morning|afternoon|evening)\b/.test(value)
    || /\b(start my day|brief me|daily briefing|morning briefing|operator briefing|what needs attention|what needs my attention|what should i know today|check my day|give me my briefing|what matters today|what should i focus on)\b/.test(value);
}

function formatReminderForBriefing(reminder = {}) {
  if (!reminder.task) return "";
  return `${reminder.task}${reminder.whenLabel ? ` ${reminder.whenLabel}` : ""}`;
}

function nexusPersonalAssistantBriefing(db, user, command = "", providers = runtimeProviders(db)) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureAssistantReminders(db.profile);
  const daily = dailyOperatorBriefing(db, user, providers);
  const smart = smartNextActions(db, user, providers).items.slice(0, 4);
  const predictive = backendPredictiveAdvisorModel(db, user, command || "what needs attention");
  const { country, route } = activeContext(db);
  const name = db.profile.agentMemory.userName || user?.name?.split(/\s+/)[0] || "there";
  const reminders = (db.profile.assistantReminders || [])
    .filter(item => item.status !== "canceled")
    .sort((a, b) => Date.parse(a.scheduledAt || a.createdAt || 0) - Date.parse(b.scheduledAt || b.createdAt || 0))
    .slice(0, 3);
  const topReminder = reminders[0] ? formatReminderForBriefing(reminders[0]) : "";
  const health = (db.profile.healthIntakes || [])[0]
    ? `Health: latest intake is ${(db.profile.healthIntakes || [])[0].patientRef || "recorded"}, with follow-up ${((db.profile.telehealthFollowUps || []).length ? "scheduled" : "not scheduled yet")}.`
    : `Health: no active intake is open. If someone feels unwell, I can start a simple intake.`;
  const trade = (db.profile.orders || [])[0]
    ? `Trade: ${(db.profile.orders || [])[0].orderNumber || "the active order"} is at ${db.profile.activeCheckpoint || "the current checkpoint"} on ${route.name}.`
    : `Farm and trade: no active order yet. I can help check the crop, contact a buyer, or plan a route.`;
  const learningWork = `${(db.profile.enrollments || []).length} learning enrollment(s), ${(db.profile.applications || []).length} job application(s), and ${(db.profile.shiftSchedule || []).length} shift(s) are saved.`;
  const providerLine = `${providers.filter(provider => provider.status === "connected").length}/${providers.length} provider engine(s) connected.`;
  const top = smart[0] || predictive?.predictions?.[0] || null;
  const nextLine = top?.title
    ? `Best next step: ${top.title}.`
    : top?.message
      ? `Best next step: ${top.message}`
      : "Best next step: tell me health, farm, work, learning, map, or buyer.";
  const response = [
    `Good ${new Date().getHours() < 12 ? "morning" : "day"} ${name}. Here is what matters.`,
    topReminder ? `Reminder: ${topReminder}.` : "No urgent reminder is waiting.",
    health,
    trade,
    `Learning and work: ${learningWork}`,
    `Location context: ${country.name}, ${route.name}. ${providerLine}`,
    nextLine,
    "Say do the next step, open telehealth, check my crop, call a contact, or list reminders."
  ].join(" ");
  const briefing = {
    mode: "nexus-personal-assistant-briefing",
    name,
    reminders,
    attention: [health, trade, `Learning and work: ${learningWork}`, providerLine],
    daily,
    predictive,
    nextActions: smart,
    response,
    createdAt: new Date().toISOString()
  };
  db.profile.agentMemory.lastStatus = "personal-assistant-briefing";
  db.profile.agentMemory.lastSummary = response;
  db.profile.agentMemory.lastRecommendedAction = smart[0] || db.profile.agentMemory.lastRecommendedAction || null;
  db.profile.agentMemory.updatedAt = briefing.createdAt;
  db.profile.agentBriefings = db.profile.agentBriefings || [];
  db.profile.agentBriefings.unshift({
    id: crypto.randomUUID(),
    title: "Nexus Personal Assistant Brief",
    purpose: "voice-first daily guidance",
    plainLanguageSummary: response,
    createdBy: user.email,
    createdAt: briefing.createdAt
  });
  db.profile.agentBriefings = db.profile.agentBriefings.slice(0, 20);
  rememberAgentMemory(db.profile, `Personal assistant briefing delivered: ${nextLine}`, { source: "nexus-personal-assistant-briefing", category: "pattern", module: "Agent AI", confidence: 0.92 });
  logIntegration(db, {
    providerId: "openai",
    module: "Agent AI",
    action: "agent.personal_assistant_briefing",
    status: "success",
    detail: response.slice(0, 240),
    metadata: { reminders: reminders.length, nextActions: smart.map(item => item.id || item.title), predictiveScore: predictive?.scoring?.score || null },
    dispatch: false
  });
  return {
    intent: "conversation.personal_assistant_briefing",
    response,
    status: "completed",
    metadata: { conversationMode: true, redirectSection: top?.section || predictive?.scoring?.moduleSignal?.section || "dashboard", briefing }
  };
}

function maximumOperationalEfficiencyModel(db, user, providers = runtimeProviders(db), options = {}) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureCommunicationProfile(db.profile);
  const { country, route } = activeContext(db);
  const connected = providers.filter(provider => provider.status === "connected").length;
  const providerScore = Math.round((connected / Math.max(1, providers.length)) * 100);
  const smart = smartNextActions(db, user, providers).items.slice(0, 6);
  const readiness = Number(db.profile.readiness || 0);
  const evidenceCount = (db.profile.integrationEvents || []).length + (db.profile.workflowIntelligence || []).length + (db.profile.activity || []).length;
  const tradeScore = (db.profile.tradeEfficiencyReviews || [])[0]?.score || (db.profile.orders || []).length ? 72 : 58;
  const learningScore = Math.min(100, 50 + (db.profile.certificates || []).length * 10 + (db.profile.enrollments || []).length * 5);
  const workforceScore = Math.min(100, 45 + readiness / 2 + (db.profile.applications || []).length * 8 + (db.profile.shiftSchedule || []).length * 4);
  const healthScore = Math.min(100, 55 + (db.profile.healthIntakes || []).length * 6 + (db.profile.telehealthAccessibility || []).length * 4 + (db.profile.videoSessions || []).length * 5);
  const agentScore = Math.min(100, 60 + (db.profile.agentCommands || []).length * 2 + (db.profile.agentMemory.reasoningHistory || []).length * 2);
  const moduleScores = [
    { module: "Learning", score: learningScore, bottleneck: learningScore < 75 ? "Need more completed lessons/certificates tied to workforce goals." : "Learning flow is producing evidence." },
    { module: "Workforce", score: workforceScore, bottleneck: workforceScore < 75 ? "Readiness, applications, interview, and shift records should be advanced." : "Workforce flow is ready for placement evidence." },
    { module: "Telehealth", score: healthScore, bottleneck: healthScore < 75 ? "Need more complete intake, accessibility, provider, video, and follow-up evidence." : "Telehealth flow is producing accessible support evidence." },
    { module: "AgriTrade", score: tradeScore, bottleneck: tradeScore < 75 ? "Need crop evidence, buyer contact, route risk, quality, and payment/logistics handoff." : "Trade flow has operational evidence." },
    { module: "Nexus Agent", score: agentScore, bottleneck: agentScore < 75 ? "Use more voice commands, memory, reasoning, and guided missions." : "Agent behavior has strong command evidence." },
    { module: "Providers", score: providerScore, bottleneck: providerScore < 90 ? "Some providers are deferred or not connected; keep transparency clear." : "Provider layer is strong for current scope." }
  ].map(item => ({ ...item, score: Math.round(item.score) }));
  const overallScore = Math.round(moduleScores.reduce((sum, item) => sum + item.score, 0) / moduleScores.length);
  const bottlenecks = moduleScores
    .filter(item => item.score < 80)
    .sort((a, b) => a.score - b.score)
    .slice(0, 5)
    .map(item => ({ module: item.module, score: item.score, issue: item.bottleneck }));
  const recommendedSequence = [
    smart[0] ? { order: 1, title: smart[0].title, module: smart[0].module, action: smart[0].detail, command: smart[0].command || smart[0].title } : null,
    { order: 2, title: "Create one evidence record in the weakest module", module: bottlenecks[0]?.module || "AgriNexus", action: bottlenecks[0]?.issue || "Keep moving the highest priority workflow.", command: bottlenecks[0]?.module === "AgriTrade" ? "Nexus, help me sell my crop and track the route" : bottlenecks[0]?.module === "Telehealth" ? "Nexus, walk me through telehealth" : bottlenecks[0]?.module === "Workforce" ? "Nexus, help me apply for a job" : "Nexus, what should I do next" },
    { order: 3, title: "Run deep operating intelligence", module: "Agent AI", action: "Review live engines, deferred services, module depth, and best commands.", command: "Nexus, go deeper" },
    { order: 4, title: "Summarize evidence for the audience", module: user?.role === "Investor" ? "Investor" : user?.role === "Admin" ? "Admin" : "User", action: "Turn latest records into a plain-language explanation.", command: user?.role === "Investor" ? "Nexus, present the platform" : "Nexus, summarize my progress" }
  ].filter(Boolean);
  const automationOpportunities = [
    { id: "auto-question", title: "Ask one smart question before every major action", active: true },
    { id: "auto-evidence", title: "Create an evidence record after every confirmed workflow", active: true },
    { id: "auto-next-step", title: "Recommend one next step after each completed workflow", active: true },
    { id: "auto-language", title: "Respect language and voice preferences during guidance", active: true },
    { id: "auto-recovery", title: "Recover from unclear speech without forcing exact choices", active: true }
  ];
  const model = {
    id: crypto.randomUUID(),
    status: overallScore >= 85 ? "maximum-efficiency-ready" : "efficiency-improving",
    overallScore,
    country: country.name,
    route: route.name,
    providerScore,
    evidenceCount,
    moduleScores,
    bottlenecks,
    recommendedSequence,
    automationOpportunities,
    plainLanguageSummary: `Operational efficiency is ${overallScore}%. Nexus should focus on ${bottlenecks[0]?.module || "the highest-value workflow"} first, then create evidence, recommend the next step, and explain progress in plain language.`,
    createdAt: new Date().toISOString()
  };
  if (options.persist) {
    db.profile.operationalEfficiencyRuns = db.profile.operationalEfficiencyRuns || [];
    db.profile.operationalEfficiencyRuns.unshift(model);
    db.profile.operationalEfficiencyRuns = db.profile.operationalEfficiencyRuns.slice(0, 25);
    db.profile.agentMemory.lastMaximumOperationalEfficiency = model;
    db.profile.agentMemory.lastStatus = model.status;
    db.profile.agentMemory.lastSummary = model.plainLanguageSummary;
    db.profile.agentMemory.updatedAt = model.createdAt;
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.maximum_operational_efficiency",
      detail: `Maximum operational efficiency model scored ${overallScore}%.`,
      metadata: { modelId: model.id, bottlenecks, recommendedSequence },
      dispatch: false
    });
    addActivity(db.profile, `Maximum operational efficiency review completed: ${overallScore}%.`);
  }
  return model;
}

function autonomousOperatingLoopModel(db, user, providers = runtimeProviders(db), options = {}) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureCommunicationProfile(db.profile);
  const { country, route } = activeContext(db);
  const efficiency = maximumOperationalEfficiencyModel(db, user, providers);
  const intelligence = deepOperatingIntelligence(db, user, providers, { mode: user?.role });
  const outcome = workflowOutcomeSummary(db);
  const nextActions = smartNextActions(db, user, providers).items.slice(0, 5);
  const connected = providers.filter(provider => provider.status === "connected");
  const weakest = [...(efficiency.moduleScores || [])].sort((a, b) => a.score - b.score)[0] || { module: "AgriNexus", score: 70, bottleneck: "Keep moving the most important workflow." };
  const decision = efficiency.recommendedSequence?.[0] || nextActions[0] || {
    title: "Ask Nexus for the next guided workflow",
    module: weakest.module,
    command: "Nexus, what should I do next",
    action: "Let the assistant guide the next safest action."
  };
  const protectedModules = ["Telehealth", "AgriTrade", "Workforce", "Providers"];
  const safeToAutostage = !protectedModules.includes(decision.module) && !/pay|buy|sell|apply|provider|patient|health|message|call|certificate/i.test(decision.command || decision.title || "");
  const phases = [
    {
      id: "observe",
      title: "Observe",
      status: "complete",
      detail: `Nexus reviewed ${country.name}, ${route.name}, ${connected.length}/${providers.length} live providers, ${outcome.totalEvidence} evidence records, and ${nextActions.length} smart next actions.`
    },
    {
      id: "diagnose",
      title: "Diagnose",
      status: "complete",
      detail: `${weakest.module} needs the most attention at ${weakest.score}%. ${weakest.bottleneck || weakest.issue || "Nexus will improve the next workflow record."}`
    },
    {
      id: "decide",
      title: "Decide",
      status: "complete",
      detail: `Best next move: ${decision.title} in ${decision.module}.`
    },
    {
      id: "act",
      title: "Act",
      status: safeToAutostage ? "ready" : "needs-confirmation",
      detail: safeToAutostage
        ? `Ready to stage the command: ${decision.command || decision.title}.`
        : `Nexus will ask before acting because this may touch health, trade, jobs, providers, messages, or records.`
    },
    {
      id: "verify",
      title: "Verify",
      status: "ready",
      detail: "After the action, Nexus checks for an activity record, integration event, workflow evidence, and a plain-language result."
    },
    {
      id: "learn",
      title: "Learn",
      status: "ready",
      detail: `Nexus stores what worked, what was unclear, and the next safer prompt for ${user?.name || "the user"}.`
    }
  ];
  const loop = {
    id: crypto.randomUUID(),
    status: efficiency.overallScore >= 85 ? "autonomous-ready" : "autonomous-learning",
    loopName: "Nexus Observe-Diagnose-Decide-Act-Verify-Learn",
    mode: user?.role || "User",
    country: country.name,
    route: route.name,
    phases,
    currentDecision: {
      module: decision.module,
      title: decision.title,
      action: decision.action || decision.detail || "Run the next guided workflow.",
      command: decision.command || decision.title,
      requiresConfirmation: !safeToAutostage
    },
    safeToAutostage,
    recommendedCommand: decision.command || "Nexus, what should I do next",
    nextThreeMoves: (efficiency.recommendedSequence || []).slice(0, 3),
    evidenceChecklist: [
      "The workflow opens a visible full panel.",
      "Nexus explains the action in simple language.",
      "Sensitive actions ask for confirmation.",
      "A workflow, activity, or integration evidence record is saved.",
      "Nexus recommends the next best step."
    ],
    plainLanguageSummary: `Nexus ran an autonomous operating loop. It observed the platform, diagnosed ${weakest.module} as the highest-priority area, chose "${decision.title}", will verify evidence after action, and will learn from the result.`,
    createdAt: new Date().toISOString()
  };
  if (options.persist) {
    db.profile.autonomousOperatingLoops = db.profile.autonomousOperatingLoops || [];
    db.profile.autonomousOperatingLoops.unshift(loop);
    db.profile.autonomousOperatingLoops = db.profile.autonomousOperatingLoops.slice(0, 25);
    db.profile.agentMemory.lastAutonomousOperatingLoop = loop;
    db.profile.agentMemory.lastStatus = loop.status;
    db.profile.agentMemory.lastSummary = loop.plainLanguageSummary;
    db.profile.agentMemory.updatedAt = loop.createdAt;
    rememberAgentMemory(db.profile, loop.plainLanguageSummary, { source: "autonomous-operating-loop", category: "operations", module: "Agent AI", confidence: 0.93 });
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.autonomous_operating_loop",
      detail: `Autonomous operating loop selected ${loop.currentDecision.module}: ${loop.currentDecision.title}.`,
      metadata: { loopId: loop.id, status: loop.status, recommendedCommand: loop.recommendedCommand, phases: loop.phases.map(item => item.id) },
      dispatch: false
    });
    addActivity(db.profile, `Autonomous operating loop completed: ${loop.currentDecision.module} next.`);
  }
  return loop;
}

function collectiveIntelligenceEngine(db, user, providers = runtimeProviders(db), options = {}) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureCommunicationProfile(db.profile);
  ensureOperationsProfile(db.profile);
  const { country, route } = activeContext(db);
  const commands = db.profile.agentCommands || [];
  const conversations = db.profile.agentConversation || [];
  const events = db.profile.integrationEvents || [];
  const activity = db.profile.activity || [];
  const memory = db.profile.agentMemory || {};
  const recoveries = memory.recoveryHistory || [];
  const clarifications = memory.clarificationHistory || [];
  const workflowIntel = db.profile.workflowIntelligence || [];
  const connected = providers.filter(provider => provider.status === "connected");
  const providerGaps = providers.filter(provider => provider.status !== "connected").slice(0, 8);
  const commandText = commands.slice(0, 80).map(item => `${item.command || ""} ${item.intent || ""}`).join(" ").toLowerCase();
  const conversationText = conversations.slice(0, 80).map(item => `${item.user || item.command || ""} ${item.assistant || item.response || ""}`).join(" ").toLowerCase();
  const moduleSignals = [
    { module: "Learning", count: (db.profile.enrollments || []).length + (db.profile.completedCourses || []).length + (db.profile.certificates || []).length, terms: ["course", "learn", "lesson", "training", "certificate"] },
    { module: "Workforce", count: (db.profile.applications || []).length + (db.profile.shiftSchedule || []).length + Number(db.profile.interviews || 0), terms: ["job", "work", "role", "apply", "interview"] },
    { module: "Telehealth", count: (db.profile.healthIntakes || []).length + (db.profile.mobileClinicRequests || []).length + (db.profile.pharmacyRequests || []).length + (db.profile.supplyRequests || []).length, terms: ["health", "clinic", "doctor", "pharmacy", "medicine", "symptom"] },
    { module: "AgriTrade", count: (db.profile.orders || []).length + (db.profile.buyerContacts || []).length + (db.profile.tradeMessageThreads || []).length + (db.profile.walletTransactions || []).length, terms: ["sell", "buy", "buyer", "seller", "crop", "payment", "shipment"] },
    { module: "Drone And Field", count: (db.profile.droneScans || []).length + (db.profile.droneMissions || []).length + (db.profile.fieldInterventions || []).length, terms: ["drone", "field", "crop stress", "pest", "harvest"] },
    { module: "Maps And Logistics", count: (db.profile.mapInsights || []).length + (db.profile.locationRoutePackets || []).length + (db.profile.facilityRoutes || []).length + (db.profile.routeDisruptions || []).length, terms: ["map", "route", "track", "location", "delivery"] },
    { module: "Voice And Language", count: commands.length + recoveries.length + clarifications.length, terms: ["repeat", "misheard", "language", "translate", "stop", "hello"] }
  ].map(signal => {
    const mentions = signal.terms.reduce((sum, term) => sum + ((commandText.match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length), 0);
    return {
      ...signal,
      mentions,
      strength: Math.min(100, Math.round(signal.count * 10 + mentions * 8))
    };
  }).sort((a, b) => b.strength - a.strength);
  const clarityScore = Math.max(0, 100 - recoveries.length * 8 - clarifications.length * 5);
  const workflowScore = Math.min(100, 35 + workflowIntel.length * 4 + activity.length);
  const providerScore = Math.round((connected.length / Math.max(1, providers.length)) * 100);
  const evidenceScore = Math.min(100, Math.round((events.length + commands.length + conversations.length + workflowIntel.length) / 4));
  const score = Math.round((clarityScore * 0.25) + (workflowScore * 0.25) + (providerScore * 0.2) + (evidenceScore * 0.15) + (Math.min(100, moduleSignals[0]?.strength || 0) * 0.15));
  const patterns = [
    {
      id: "speech-recovery",
      title: "Speech And Mishear Learning",
      module: "Voice",
      strength: Math.max(35, 100 - clarityScore),
      evidence: `${recoveries.length} recovery event(s), ${clarifications.length} clarification event(s), ${commands.length} command(s).`,
      recommendation: recoveries.length || clarifications.length
        ? "Expand fuzzy wake words, repeat what Nexus heard, and ask one simple question before sensitive actions."
        : "Keep monitoring voice clarity while users test in English, Spanish, French, Kiswahili, Portuguese, and Arabic."
    },
    {
      id: "module-demand",
      title: "Highest User Demand",
      module: moduleSignals[0]?.module || "Platform",
      strength: moduleSignals[0]?.strength || 0,
      evidence: `${moduleSignals[0]?.count || 0} record(s), ${moduleSignals[0]?.mentions || 0} recent mention(s).`,
      recommendation: `Make ${moduleSignals[0]?.module || "the active module"} more guided, more visual, and easier to complete by voice.`
    },
    {
      id: "provider-readiness",
      title: "Provider Readiness Gap",
      module: "Integrations",
      strength: 100 - providerScore,
      evidence: `${connected.length}/${providers.length} provider(s) connected. ${providerGaps.map(item => item.name || item.id).join(", ") || "No provider gaps detected"}.`,
      recommendation: providerGaps.length
        ? "Show provider truth clearly, keep local simulations useful, and ask admin for the next credential to connect."
        : "Use connected providers in workflow answers and evidence reports."
    },
    {
      id: "rural-context",
      title: "Rural Context Memory",
      module: country.name,
      strength: Math.min(100, 45 + (conversationText.includes("farmer") ? 20 : 0) + (conversationText.includes("clinic") ? 15 : 0) + (conversationText.includes("route") ? 10 : 0)),
      evidence: `${country.name} active context, ${route.name} corridor, ${memory.longTermFacts?.length || 0} long-term fact(s).`,
      recommendation: "Keep responses plain, local, and one step at a time for farmers, elders, patients, learners, and workers."
    }
  ];
  const proposalSeed = [
    {
      key: "voice-phrase-expansion",
      title: "Expand Voice Phrase Recovery",
      module: "Voice",
      why: "Users may speak fast, use imperfect English, or be misheard by the browser microphone.",
      recommendedChange: "Add more African, Arabic, Portuguese, French, Kiswahili, Spanish, and imperfect-English phrase variants before routing actions.",
      evidence: patterns[0].evidence,
      risk: "Low. It improves recognition but should not trigger sensitive actions without confirmation."
    },
    {
      key: "guided-module-entry",
      title: "Make Every Module Start With One Guided Choice",
      module: moduleSignals[0]?.module || "Platform",
      why: "Non-technical users need the platform to feel like a guide, not a control room.",
      recommendedChange: "When a user opens a module, Nexus should ask one short question, show one primary action, then complete the visible workflow.",
      evidence: patterns[1].evidence,
      risk: "Medium. Needs careful testing so admin and investor modes keep their depth."
    },
    {
      key: "rural-health-resource-routing",
      title: "Strengthen Rural Health Resource Routing",
      module: "Telehealth",
      why: "Mobile clinics and pharmacies may not have digital systems, but they still need intake, supply, callback, and map support.",
      recommendedChange: "Use paper-to-digital intake, mobile clinic routing, pharmacy lookup, medical supply requests, voice summaries, and clear non-diagnosis language.",
      evidence: `${(db.profile.healthIntakes || []).length} intake(s), ${(db.profile.mobileClinicRequests || []).length} mobile clinic request(s), ${(db.profile.pharmacyRequests || []).length} pharmacy request(s).`,
      risk: "High. Keep clinical advice out of scope and route urgent issues to local emergency services or licensed providers."
    },
    {
      key: "trade-route-clarity",
      title: "Improve Trade Route And Payment Clarity",
      module: "AgriTrade",
      why: "Farmers need to understand buyer contact, route tracking, delivery proof, receipt, and transaction fee steps.",
      recommendedChange: "Guide crop sale workflows as seller to buyer to route to delivery proof to payment receipt to platform fee evidence.",
      evidence: `${(db.profile.orders || []).length} order(s), ${(db.profile.locationRoutePackets || []).length} route packet(s), ${(db.profile.paymentCheckoutRecords || []).length} checkout record(s).`,
      risk: "High. Payment and settlement steps must remain auditable and provider-backed when live."
    },
    {
      key: "collective-provider-brain",
      title: "Build A Provider Learning Queue",
      module: "Integrations",
      why: "Provider gaps should turn into an organized action list instead of confusing users.",
      recommendedChange: "Rank missing vendors by country, urgency, module impact, credentials needed, and investor value.",
      evidence: patterns[2].evidence,
      risk: "Medium. Provider availability must be shown honestly."
    }
  ];
  const proposals = proposalSeed.map((proposal, index) => ({
    id: `${proposal.key}-${new Date().toISOString().slice(0, 10)}`,
    rank: index + 1,
    status: "proposed",
    approvalRequired: true,
    createdAt: new Date().toISOString(),
    ...proposal
  }));
  const model = {
    id: crypto.randomUUID(),
    status: score >= 85 ? "collective-brain-ready" : score >= 65 ? "collective-brain-learning" : "collective-brain-needs-more-evidence",
    score,
    country: country.name,
    route: route.name,
    patterns,
    proposals,
    guardrails: [
      "Nexus can recommend self-evolution, but production changes require admin or developer approval.",
      "Healthcare, payments, applications, provider communications, and legal actions remain confirmation-gated.",
      "Nexus must explain provider gaps honestly instead of pretending a live vendor is connected.",
      "Every accepted change must remain testable through workflow, language, voice, and role checks."
    ],
    plainLanguageSummary: `Collective intelligence score is ${score}%. Nexus learned from ${commands.length} command(s), ${conversations.length} conversation turn(s), ${events.length} provider event(s), and ${workflowIntel.length} workflow intelligence record(s). The top self-evolution proposal is ${proposals[0].title}, with admin approval required before production changes.`,
    createdAt: new Date().toISOString()
  };
  if (options.persist) {
    db.profile.collectiveIntelligenceRuns.unshift(model);
    db.profile.collectiveIntelligenceRuns = db.profile.collectiveIntelligenceRuns.slice(0, 30);
    const existingKeys = new Set((db.profile.collectiveEvolutionProposals || []).map(item => item.key || item.title));
    proposals.forEach(proposal => {
      if (!existingKeys.has(proposal.key)) db.profile.collectiveEvolutionProposals.unshift(proposal);
    });
    db.profile.collectiveEvolutionProposals = db.profile.collectiveEvolutionProposals.slice(0, 40);
    db.profile.agentMemory.collectivePatterns = patterns;
    db.profile.agentMemory.evolutionBacklog = db.profile.collectiveEvolutionProposals.slice(0, 12);
    db.profile.agentMemory.collectiveIntelligence = {
      status: model.status,
      lastScore: model.score,
      lastSummary: model.plainLanguageSummary,
      updatedAt: model.createdAt
    };
    db.profile.agentMemory.lastSummary = model.plainLanguageSummary;
    db.profile.agentMemory.updatedAt = model.createdAt;
    rememberAgentMemory(db.profile, model.plainLanguageSummary, { source: "collective-intelligence", category: "learning", module: "Agent AI", confidence: 0.94 });
    logIntegration(db, {
      providerId: "agent-memory",
      module: "AI",
      action: "agent.collective_intelligence_evolution",
      detail: `Collective intelligence reviewed ${patterns.length} pattern(s) and proposed ${proposals.length} governed evolution item(s).`,
      metadata: { modelId: model.id, score: model.score, proposals: proposals.map(item => item.title) },
      dispatch: false
    });
    addActivity(db.profile, `Collective intelligence review completed: ${score}% with ${proposals.length} proposal(s).`);
  }
  return model;
}

function frontierNexusBrainModel(db, user, providers = runtimeProviders(db), options = {}) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureCommunicationProfile(db.profile);
  ensureOperationsProfile(db.profile);
  const { country, route } = activeContext(db);
  const collective = collectiveIntelligenceEngine(db, user, providers);
  const loop = autonomousOperatingLoopModel(db, user, providers);
  const efficiency = maximumOperationalEfficiencyModel(db, user, providers);
  const production = productionCompleteness(db, providers);
  const readiness = jarvisReadinessModel(db, user, providers);
  const impact = impactDashboardModel(db, providers);
  const connected = providers.filter(provider => provider.status === "connected");
  const liveProviderScore = Math.round((connected.length / Math.max(1, providers.length)) * 100);
  const evidenceCount = (db.profile.activity || []).length
    + (db.profile.integrationEvents || []).length
    + (db.profile.agentCommands || []).length
    + (db.profile.workflowIntelligence || []).length;
  const activeRecords = {
    learning: (db.profile.enrollments || []).length + (db.profile.certificates || []).length,
    workforce: (db.profile.applications || []).length + (db.profile.shiftSchedule || []).length,
    health: (db.profile.healthIntakes || []).length + (db.profile.mobileClinicRequests || []).length + (db.profile.pharmacyRequests || []).length,
    trade: (db.profile.orders || []).length + (db.profile.buyerContacts || []).length + (db.profile.paymentCheckoutRecords || []).length,
    maps: (db.profile.mapInsights || []).length + (db.profile.locationRoutePackets || []).length + (db.profile.facilityRoutes || []).length,
    voice: (db.profile.agentCommands || []).length + (db.profile.voiceSessions || []).length
  };
  const layer = (id, title, score, mode, evidence, nextAction, command) => ({
    id,
    title,
    score: Math.max(0, Math.min(100, Math.round(score))),
    mode,
    evidence,
    nextAction,
    command,
    status: score >= 85 ? "frontier-ready" : score >= 65 ? "strong" : "needs-depth"
  });
  const layers = [
    layer("conversation", "Human Conversation Brain", readiness.score || 0, "voice-first", `${(db.profile.agentCommands || []).length} command(s), multilingual speech recovery, greeting, stop, and follow-up behavior.`, "Keep making responses shorter, warmer, and more adaptive to imperfect speech.", "Nexus, talk to me naturally"),
    layer("memory", "Long-Term Memory And Personalization", Math.min(100, 50 + (db.profile.agentMemory.longTermFacts || []).length * 6 + (db.profile.agentMemory.advisorHistory || []).length * 4), "persistent", `${(db.profile.agentMemory.longTermFacts || []).length} long-term fact(s), ${(db.profile.agentMemory.advisorHistory || []).length} advisor event(s).`, "Use remembered user needs to greet, guide, and recommend the next safest step.", "Nexus, what do you remember"),
    layer("workflow", "Autonomous Workflow Orchestration", efficiency.overallScore || 0, "observe-decide-act-verify-learn", `${loop.currentDecision?.module || "Platform"} selected as current autonomous decision.`, "Open the best next workflow, verify evidence, then recommend what comes next.", "Nexus, what should I do next"),
    layer("collective", "Collective Intelligence And Self-Evolution", collective.score || 0, "governed-learning", `${(collective.patterns || []).length} pattern(s), ${(collective.proposals || []).length} proposal(s), admin approval required.`, "Convert repeated user friction into tested improvement proposals.", "Nexus, run collective intelligence"),
    layer("provider-truth", "Live Provider Truth Layer", liveProviderScore, "truthful-live-or-local", `${connected.length}/${providers.length} provider(s) connected.`, "Use live providers when configured and clearly label local simulations when not.", "Nexus, run live service check"),
    layer("rural-health", "Rural Health Resource Network", Math.min(100, 55 + activeRecords.health * 8), "non-diagnostic-access", `${activeRecords.health} health access record(s), mobile clinic, pharmacy, supply, video, and intake workflows.`, "Guide patients to resources, clinics, pharmacies, supply requests, and provider handoffs without diagnosing.", "Nexus, open telehealth"),
    layer("agritrade", "AgriTrade Operating Desk", Math.min(100, 50 + activeRecords.trade * 7), "buyer-seller-logistics", `${activeRecords.trade} trade record(s), order, route, buyer contact, payment, and receipt workflows.`, "Guide crop sale, buyer contact, logistics tracking, delivery proof, and transaction fee evidence.", "Nexus, sell my crop and track delivery"),
    layer("maps", "Geospatial And Logistics Intelligence", Math.min(100, 50 + activeRecords.maps * 8), "map-first", `${activeRecords.maps} map/location record(s), real tile provider readiness, route and facility evidence.`, "Show maps wherever location, clinic, pharmacy, shipment, route, or field evidence matters.", "Nexus, open the map"),
    layer("learning-workforce", "Learning To Workforce Pathway", Math.min(100, 50 + (activeRecords.learning + activeRecords.workforce) * 6), "skills-to-placement", `${activeRecords.learning} learning record(s), ${activeRecords.workforce} workforce record(s).`, "Turn courses into certificates, role matches, applications, interviews, and placement evidence.", "Nexus, start my course and help me find work"),
    layer("governance", "Investor/Admin Governance And Safety", Math.min(100, 55 + evidenceCount / 3 + (production.readyCount || 0) * 4), "auditable", `${evidenceCount} evidence signal(s), ${production.readyCount || 0}/${production.total || 0} production readiness item(s).`, "Keep admin/investor views transparent, auditable, role-limited, and provider-honest.", "Nexus, present the platform")
  ];
  const score = Math.round(layers.reduce((sum, item) => sum + item.score, 0) / layers.length);
  const weakest = [...layers].sort((a, b) => a.score - b.score).slice(0, 3);
  const strongest = [...layers].sort((a, b) => b.score - a.score).slice(0, 3);
  const missions = [
    {
      persona: "Farmer",
      goal: "Sell crop, understand crop risk, track shipment, and receive simple next-step advice.",
      command: "Nexus, help me sell my crop and track delivery",
      workflow: "Trade, maps, drone, buyer contact, logistics, payment receipt"
    },
    {
      persona: "Patient Or Elder",
      goal: "Explain symptoms safely, find care resources, contact provider, locate clinic or pharmacy, and request follow-up.",
      command: "Nexus, I need health help",
      workflow: "Telehealth intake, accessibility, rural health access, pharmacy, mobile clinic, supply network"
    },
    {
      persona: "Learner",
      goal: "Start course, get captions/audio, complete lesson, receive certificate, and connect to work.",
      command: "Nexus, start my course",
      workflow: "Learning path, accessibility support, certificate, workforce readiness"
    },
    {
      persona: "Worker",
      goal: "Find role, apply, prepare for interview, schedule work, and track readiness gaps.",
      command: "Nexus, help me apply for a job",
      workflow: "Workforce profile, role match, application, interview, mentor, shift"
    },
    {
      persona: "Admin",
      goal: "Monitor live services, users, provider gaps, transaction readiness, safety, and evidence.",
      command: "Nexus, run full system integrity",
      workflow: "Admin readiness, integrations, live service check, audit evidence"
    },
    {
      persona: "Investor",
      goal: "See the story, impact, operational depth, frontier brain, and provider truth clearly.",
      command: "Nexus, present the platform",
      workflow: "Investor story, impact dashboard, frontier brain, live readiness, demo evidence"
    }
  ];
  const model = {
    id: crypto.randomUUID(),
    status: score >= 88 ? "frontier-operating" : score >= 72 ? "frontier-ready-for-testing" : "frontier-learning",
    score,
    country: country.name,
    route: route.name,
    strongest,
    weakest,
    layers,
    missions,
    operatingPrinciple: "Nexus should feel simple to the user, powerful to the admin, credible to the investor, and truthful about what is live versus locally simulated.",
    guardrails: [
      "No silent self-modifying code.",
      "No medical diagnosis.",
      "No fake provider claims.",
      "No payment or legal action without clear records and confirmation.",
      "Sensitive workflow actions must remain auditable."
    ],
    plainLanguageSummary: `Frontier Nexus Brain is at ${score}%. The strongest layers are ${strongest.map(item => item.title).join(", ")}. The next highest-value improvements are ${weakest.map(item => item.title).join(", ")}. Nexus can coordinate the platform as a conversational operating system while staying honest about live provider limits.`,
    createdAt: new Date().toISOString()
  };
  if (options.persist) {
    db.profile.frontierBrainRuns.unshift(model);
    db.profile.frontierBrainRuns = db.profile.frontierBrainRuns.slice(0, 30);
    db.profile.agentMemory.frontierBrain = {
      status: model.status,
      lastScore: model.score,
      lastSummary: model.plainLanguageSummary,
      updatedAt: model.createdAt
    };
    db.profile.agentMemory.lastSummary = model.plainLanguageSummary;
    db.profile.agentMemory.updatedAt = model.createdAt;
    rememberAgentMemory(db.profile, model.plainLanguageSummary, { source: "frontier-nexus-brain", category: "operations", module: "Agent AI", confidence: 0.95 });
    logIntegration(db, {
      providerId: "agent-memory",
      module: "AI",
      action: "agent.frontier_nexus_brain",
      detail: `Frontier Nexus Brain scored ${score}% across ${layers.length} operating layer(s).`,
      metadata: { modelId: model.id, status: model.status, weakest: weakest.map(item => item.title), missions: missions.map(item => item.persona) },
      dispatch: false
    });
    addActivity(db.profile, `Frontier Nexus Brain activated: ${score}%.`);
  }
  return model;
}

function applyHighestFunctionalityMode(db, user, result, command) {
  if (!result || result.intent === "empty-command") return result;
  const providers = runtimeProviders(db);
  const loop = autonomousOperatingLoopModel(db, user, providers, { persist: true });
  const section = result.metadata?.redirectSection || result.metadata?.section || sectionForAgentModule(loop.currentDecision.module) || "dashboard";
  result.metadata = {
    ...(result.metadata || {}),
    highestFunctionalityMode: true,
    autonomousBrain: {
      loopId: loop.id,
      status: loop.status,
      phase: "observe-diagnose-decide-act-verify-learn",
      currentDecision: loop.currentDecision,
      recommendedCommand: loop.recommendedCommand,
      evidenceChecklist: loop.evidenceChecklist,
      appliedToCommand: command,
      redirectSection: section
    }
  };
  db.profile.agentMemory.lastAutonomousBrainAppliedTo = {
    command,
    intent: result.intent,
    section,
    loopId: loop.id,
    summary: loop.plainLanguageSummary,
    createdAt: new Date().toISOString()
  };
  return result;
}

function firstConfiguredEnv(keys = []) {
  return keys.find(key => key && Boolean(process.env[key]));
}

function namedProviderStatus(provider, readyKey, connectedDetail, missingDetail, mode = provider.mode) {
  return {
    ...provider,
    mode,
    status: readyKey ? "connected" : "needs-credentials",
    detail: readyKey ? connectedDetail(readyKey) : missingDetail
  };
}

function directVendorProviderStatus(provider, { ready, mode, readyDetail, missingDetail, partialDetail = "" }) {
  if (ready) {
    return {
      ...provider,
      mode,
      status: "connected",
      detail: readyDetail
    };
  }
  if (partialDetail) {
    return {
      ...provider,
      mode,
      status: "needs-credentials",
      detail: partialDetail
    };
  }
  return null;
}

const PROVIDER_ACCOUNT_API_ACCESS_REGISTRY = [
  {
    id: "whatsapp-messaging",
    label: "WhatsApp / messaging account",
    providerCategory: "communications",
    providerOptionsExamples: ["Twilio WhatsApp", "Meta WhatsApp Cloud API", "approved communications webhook"],
    accountRequired: true,
    apiKeyOrTokenRequired: true,
    webhookRequired: true,
    callbackUrlRequired: true,
    businessVerificationRequired: true,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["WHATSAPP_PROVIDER", "WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_WHATSAPP_FROM", "PUBLIC_BASE_URL"],
    configuredWhenAnyPresent: [["WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"], ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_WHATSAPP_FROM"]]
  },
  {
    id: "sms-provider",
    label: "SMS provider account",
    providerCategory: "communications",
    providerOptionsExamples: ["Twilio SMS", "Africa's Talking", "approved SMS webhook"],
    accountRequired: true,
    apiKeyOrTokenRequired: true,
    webhookRequired: true,
    callbackUrlRequired: true,
    businessVerificationRequired: true,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["SMS_PROVIDER", "SMS_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_SMS_FROM", "PUBLIC_BASE_URL"],
    configuredWhenAnyPresent: [["SMS_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"], ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_SMS_FROM"]]
  },
  {
    id: "voice-phone-provider",
    label: "Voice / phone provider account",
    providerCategory: "communications",
    providerOptionsExamples: ["Twilio Voice", "native dial handoff", "approved phone provider"],
    accountRequired: true,
    apiKeyOrTokenRequired: true,
    webhookRequired: true,
    callbackUrlRequired: true,
    businessVerificationRequired: true,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["PHONE_PROVIDER", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "PUBLIC_BASE_URL"],
    configuredWhenAnyPresent: [["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "PUBLIC_BASE_URL"]]
  },
  {
    id: "maps-routing-provider",
    label: "Maps / routing provider account",
    providerCategory: "maps-routing",
    providerOptionsExamples: ["OpenRouteService", "Mapbox", "Google Maps Platform"],
    accountRequired: true,
    apiKeyOrTokenRequired: true,
    webhookRequired: false,
    callbackUrlRequired: false,
    businessVerificationRequired: false,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["MAPBOX_ACCESS_TOKEN", "OPENROUTESERVICE_API_KEY", "GOOGLE_MAPS_API_KEY", "ROUTING_PROVIDER", "ROUTING_WEBHOOK_URL"],
    configuredWhenAnyPresent: [["MAPBOX_ACCESS_TOKEN"], ["OPENROUTESERVICE_API_KEY"], ["GOOGLE_MAPS_API_KEY"], ["ROUTING_WEBHOOK_URL"]]
  },
  {
    id: "telehealth-video-provider",
    label: "Telehealth / video provider account",
    providerCategory: "health-access",
    providerOptionsExamples: ["Twilio Video", "Daily", "Zoom healthcare-approved workflow", "approved telehealth webhook"],
    accountRequired: true,
    apiKeyOrTokenRequired: true,
    webhookRequired: true,
    callbackUrlRequired: true,
    businessVerificationRequired: true,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["HEALTH_TELEHEALTH_PROVIDER", "HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY", "PUBLIC_BASE_URL"],
    configuredWhenAnyPresent: [["HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"]]
  },
  {
    id: "rpm-rtm-device-vendor",
    label: "RPM / RTM device vendor account",
    providerCategory: "health-access",
    providerOptionsExamples: ["device vendor API", "RPM platform", "RTM platform"],
    accountRequired: true,
    apiKeyOrTokenRequired: true,
    webhookRequired: true,
    callbackUrlRequired: true,
    businessVerificationRequired: true,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["RPM_RTM_VENDOR_PROVIDER", "RPM_RTM_VENDOR_API_KEY", "RPM_RTM_WEBHOOK_URL", "PUBLIC_BASE_URL"],
    configuredWhenAnyPresent: [["RPM_RTM_VENDOR_PROVIDER", "RPM_RTM_VENDOR_API_KEY", "RPM_RTM_WEBHOOK_URL"]]
  },
  {
    id: "email-provider",
    label: "Email provider account",
    providerCategory: "communications",
    providerOptionsExamples: ["Resend", "SendGrid", "Mailgun", "approved email webhook"],
    accountRequired: true,
    apiKeyOrTokenRequired: true,
    webhookRequired: true,
    callbackUrlRequired: false,
    businessVerificationRequired: true,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["EMAIL_PROVIDER", "EMAIL_WEBHOOK_URL", "EMAIL_FROM", "RESEND_API_KEY", "SENDGRID_API_KEY", "MAILGUN_API_KEY"],
    configuredWhenAnyPresent: [["RESEND_API_KEY", "EMAIL_FROM"], ["SENDGRID_API_KEY", "EMAIL_FROM"], ["MAILGUN_API_KEY", "EMAIL_FROM"], ["EMAIL_WEBHOOK_URL", "EMAIL_FROM"]]
  },
  {
    id: "marketplace-payment-provider",
    label: "Marketplace / payment provider account",
    providerCategory: "marketplace-payments",
    providerOptionsExamples: ["Stripe", "Paystack", "Flutterwave", "approved billing webhook"],
    accountRequired: true,
    apiKeyOrTokenRequired: true,
    webhookRequired: true,
    callbackUrlRequired: true,
    businessVerificationRequired: true,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["BILLING_PROVIDER", "BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY", "STRIPE_SECRET_KEY", "PAYSTACK_SECRET_KEY", "FLUTTERWAVE_SECRET_KEY", "TRADE_PAYMENT_WEBHOOK_URL"],
    configuredWhenAnyPresent: [["STRIPE_SECRET_KEY"], ["PAYSTACK_SECRET_KEY"], ["FLUTTERWAVE_SECRET_KEY"], ["BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY"], ["TRADE_PAYMENT_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY"]]
  },
  {
    id: "hosting-deployment-provider",
    label: "Hosting / deployment provider",
    providerCategory: "platform-operations",
    providerOptionsExamples: ["Render", "Railway", "Fly.io", "AWS", "Azure"],
    accountRequired: true,
    apiKeyOrTokenRequired: false,
    webhookRequired: false,
    callbackUrlRequired: true,
    businessVerificationRequired: false,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["PUBLIC_BASE_URL", "DATABASE_URL", "SESSION_SECRET"],
    configuredWhenAnyPresent: [["PUBLIC_BASE_URL", "DATABASE_URL", "SESSION_SECRET"]]
  },
  {
    id: "analytics-reporting-provider",
    label: "Analytics / reporting provider",
    providerCategory: "platform-operations",
    providerOptionsExamples: ["PostHog", "Plausible", "Metabase", "approved reporting webhook"],
    accountRequired: true,
    apiKeyOrTokenRequired: true,
    webhookRequired: true,
    callbackUrlRequired: false,
    businessVerificationRequired: false,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["ANALYTICS_PROVIDER", "ANALYTICS_API_KEY", "REPORTING_WEBHOOK_URL"],
    configuredWhenAnyPresent: [["ANALYTICS_PROVIDER", "ANALYTICS_API_KEY"], ["REPORTING_WEBHOOK_URL"]]
  },
  {
    id: "care-team-report-delivery-provider",
    label: "Care-team / physician report delivery provider",
    providerCategory: "health-access",
    providerOptionsExamples: ["secure email", "clinic webhook", "EHR handoff", "approved care-team inbox"],
    accountRequired: true,
    apiKeyOrTokenRequired: true,
    webhookRequired: true,
    callbackUrlRequired: true,
    businessVerificationRequired: true,
    complianceAgreementRequired: true,
    environmentVariablesRequired: ["HEALTH_NOTIFICATION_PROVIDER", "HEALTH_NOTIFICATION_WEBHOOK_URL", "HEALTH_EHR_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY", "EMAIL_WEBHOOK_URL", "EMAIL_FROM"],
    configuredWhenAnyPresent: [["HEALTH_NOTIFICATION_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"], ["HEALTH_EHR_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"], ["EMAIL_WEBHOOK_URL", "EMAIL_FROM"]]
  }
];

function envGroupConfigured(group = [], env = process.env) {
  return group.filter(Boolean).every(name => Boolean(env[name]));
}

function providerAccountLiveExecutionStatus(item = {}, env = process.env) {
  const channelByAccountId = {
    "voice-phone-provider": "phone",
    "sms-provider": "sms",
    "whatsapp-messaging": "whatsapp"
  };
  const channel = channelByAccountId[item.id];
  if (channel) {
    const status = nexusGlobalCommunicationsChannelStatus(channel, env);
    return {
      configured: status.configured,
      connected: status.canExecuteNow,
      realExecutionEnabled: status.canExecuteNow,
      statusLabel: status.canExecuteNow ? "Live confirmed execution available" : status.status,
      unavailableReason: status.canExecuteNow
        ? ""
        : status.flagEnabled
          ? "Provider credentials or sender configuration are incomplete."
          : `${status.flagName}=true is required before confirmed execution.`,
      requiresConfirmation: true
    };
  }
  const globallyEnabled = env.NEXUS_REAL_PROVIDER_EXECUTION_ENABLED === "true";
  const accountEnabled = env[`NEXUS_${String(item.id || "").toUpperCase().replace(/[^A-Z0-9]+/g, "_")}_EXECUTION_ENABLED`] === "true";
  return {
    configured: null,
    connected: null,
    realExecutionEnabled: globallyEnabled && accountEnabled,
    statusLabel: globallyEnabled && accountEnabled ? "Real execution enabled" : "Real execution disabled",
    unavailableReason: "",
    requiresConfirmation: true
  };
}

function providerAccountApiAccessStatus(env = process.env) {
  const globalExecutionEnabled = env.NEXUS_REAL_PROVIDER_EXECUTION_ENABLED === "true";
  const items = PROVIDER_ACCOUNT_API_ACCESS_REGISTRY.map(item => {
    const liveStatus = providerAccountLiveExecutionStatus(item, env);
    const configured = liveStatus.configured ?? (item.configuredWhenAnyPresent || []).some(group => envGroupConfigured(group, env));
    const connected = Boolean(liveStatus.connected ?? (configured && env.NEXUS_PROVIDER_ACCOUNT_CONNECTIONS_ENABLED === "true"));
    const legacyExecutionEnabled = connected && globalExecutionEnabled && env[`NEXUS_${item.id.toUpperCase().replace(/[^A-Z0-9]+/g, "_")}_EXECUTION_ENABLED`] === "true";
    const realExecutionEnabled = Boolean(liveStatus.realExecutionEnabled || legacyExecutionEnabled);
    const missingCredential = item.apiKeyOrTokenRequired && !configured;
    const statuses = [
      realExecutionEnabled ? liveStatus.statusLabel : "Real execution disabled",
      connected ? "Account connected" : "Account not connected",
      configured ? "Credential configured" : "API credential missing",
      item.businessVerificationRequired ? "Provider review required" : "Provider review optional",
      realExecutionEnabled ? "Explicit confirmation required" : "Simulation available"
    ];
    return {
      id: item.id,
      label: item.label,
      providerCategory: item.providerCategory,
      providerOptionsExamples: item.providerOptionsExamples,
      accountRequired: item.accountRequired,
      apiKeyOrTokenRequired: item.apiKeyOrTokenRequired,
      webhookRequired: item.webhookRequired,
      callbackUrlRequired: item.callbackUrlRequired,
      businessVerificationRequired: item.businessVerificationRequired,
      complianceAgreementRequired: item.complianceAgreementRequired,
      environmentVariablesRequired: item.environmentVariablesRequired,
      configured,
      connected,
      simulationAvailable: true,
      realExecutionEnabled,
      safeNextSetupStep: configured
        ? realExecutionEnabled
          ? "Use the live provider through its explicit confirmation and audit gates."
          : "Complete provider review, callback validation, consent, audit, and final execution gate before enabling real actions."
        : `Configure a provider account and set required environment placeholders such as ${item.environmentVariablesRequired.slice(0, 3).join(", ")}.`,
      unavailableReason: realExecutionEnabled
        ? ""
        : liveStatus.unavailableReason
        ? liveStatus.unavailableReason
        : missingCredential
        ? "API credential missing"
        : connected
        ? "Real execution disabled"
        : "Account not connected",
      statuses,
      requiresConfirmation: liveStatus.requiresConfirmation,
      secretValuesExposed: false,
      noExternalApiCall: true,
      noExecutionAuthorized: true
    };
  });
  return {
    id: "provider-account-api-access",
    title: "Provider Accounts & API Access",
    generatedAt: new Date().toISOString(),
    defaultPosture: items.some(item => item.realExecutionEnabled)
      ? "Live provider capabilities are enabled only where configured; recipient, consent, confirmation, provider receipt, and audit gates remain required."
      : "Provider capabilities remain simulation-only until their credentials and explicit execution gates are enabled.",
    noSecretsExposed: true,
    noExternalApiCalls: true,
    noExecutionAuthorized: true,
    summary: {
      total: items.length,
      configured: items.filter(item => item.configured).length,
      connected: items.filter(item => item.connected).length,
      realExecutionEnabled: items.filter(item => item.realExecutionEnabled).length,
      simulationAvailable: items.filter(item => item.simulationAvailable).length
    },
    items
  };
}

const PRODUCTION_PROVIDER_READINESS_REGISTRY = [
  {
    id: "phone-call",
    label: "Phone / call provider",
    providerCategory: "communications",
    accountApiAccessId: "voice-phone-provider",
    providerIds: ["phone-voice"],
    adapterContract: "confirmed call handoff adapter",
    permissionRequired: true,
    confirmationRequired: true
  },
  {
    id: "whatsapp-message",
    label: "WhatsApp / message provider",
    providerCategory: "communications",
    accountApiAccessId: "whatsapp-messaging",
    providerIds: ["whatsapp-delivery"],
    adapterContract: "confirmed WhatsApp/message handoff adapter",
    permissionRequired: true,
    confirmationRequired: true
  },
  {
    id: "sms-email",
    label: "SMS / email provider",
    providerCategory: "communications",
    accountApiAccessId: "sms-provider",
    providerIds: ["sms-delivery", "email-delivery"],
    adapterContract: "confirmed notification delivery adapter",
    permissionRequired: true,
    confirmationRequired: true
  },
  {
    id: "maps-navigation",
    label: "Maps / navigation provider",
    providerCategory: "maps-routing",
    accountApiAccessId: "maps-routing-provider",
    providerIds: ["maps", "routing-geocoding", "public-osm-geocoding"],
    adapterContract: "reviewed route/navigation handoff adapter",
    permissionRequired: true,
    confirmationRequired: true
  },
  {
    id: "telehealth",
    label: "Telehealth provider",
    providerCategory: "health-access",
    accountApiAccessId: "telehealth-video-provider",
    providerIds: ["health-telehealth"],
    adapterContract: "confirmed telehealth/video handoff adapter",
    permissionRequired: true,
    confirmationRequired: true
  },
  {
    id: "rpm-rtm-devices",
    label: "RPM / RTM device provider",
    providerCategory: "health-access",
    accountApiAccessId: "rpm-rtm-device-vendor",
    providerIds: ["rpm-rtm-device-vendor"],
    adapterContract: "consented RPM/RTM device data adapter",
    permissionRequired: true,
    confirmationRequired: true
  },
  {
    id: "marketplace-payment",
    label: "Marketplace / payment provider",
    providerCategory: "marketplace-payments",
    accountApiAccessId: "marketplace-payment-provider",
    providerIds: ["trade-payments", "billing-subscriptions"],
    adapterContract: "confirmed payment/checkout adapter",
    permissionRequired: true,
    confirmationRequired: true
  },
  {
    id: "care-team-report-delivery",
    label: "Care-team / physician report delivery",
    providerCategory: "health-access",
    accountApiAccessId: "care-team-report-delivery-provider",
    providerIds: ["health-notifications", "health-ehr", "email-delivery"],
    adapterContract: "approved care-team report delivery adapter",
    permissionRequired: true,
    confirmationRequired: true
  }
];

function productionProviderReadinessStatus(providers = [], providerAccountApiAccess = providerAccountApiAccessStatus()) {
  const providerById = new Map((providers || []).map(provider => [provider.id, provider]));
  const accountById = new Map((providerAccountApiAccess.items || []).map(item => [item.id, item]));
  const connectedStatuses = new Set(["connected", "ready", "needs-recipient", "needs-user-auth"]);
  const items = PRODUCTION_PROVIDER_READINESS_REGISTRY.map(item => {
    const account = accountById.get(item.accountApiAccessId) || {};
    const matchingProviders = item.providerIds.map(id => providerById.get(id)).filter(Boolean);
    const configured = Boolean(account.configured || matchingProviders.some(provider => !["needs-credentials", "not-configured", "missing"].includes(String(provider.status || "").toLowerCase())));
    const connected = Boolean(account.connected || matchingProviders.some(provider => connectedStatuses.has(String(provider.status || "").toLowerCase())));
    const realExecutionEnabled = Boolean(account.realExecutionEnabled);
    const realExecutionDisabled = !realExecutionEnabled;
    return {
      id: item.id,
      label: item.label,
      providerCategory: item.providerCategory,
      providerIds: item.providerIds,
      adapterContract: item.adapterContract,
      configured,
      connected,
      simulationSupported: true,
      confirmationRequired: item.confirmationRequired,
      permissionRequired: item.permissionRequired,
      realExecutionEnabled,
      realExecutionDisabled,
      actionQueueCompatible: true,
      unavailableReason: realExecutionEnabled ? "" : connected ? "Real execution disabled until final gate, audit, consent, and provider approval are active." : "Provider account or credential is not connected.",
      safeNextStep: connected
        ? realExecutionEnabled
          ? "Use the live provider through explicit permission, confirmation, provider receipt, and audit."
          : "Review permission, final confirmation, audit, and provider policy before enabling any real handoff."
        : "Connect the provider account/API credential and validate webhook/callback policy before real use.",
      statusLabels: [
        connected ? "connected" : configured ? "configured-not-connected" : "not configured",
        realExecutionEnabled ? "live provider execution available" : "simulation supported",
        item.permissionRequired ? "permission required" : "permission not required",
        item.confirmationRequired ? "confirmation required" : "confirmation not required",
        realExecutionEnabled ? "provider receipt required" : "real execution disabled"
      ],
      secretValuesExposed: false,
      noExternalApiCall: true,
      noExecutionAuthorized: true
    };
  });
  return {
    id: "production-provider-readiness",
    title: "Production Provider Readiness",
    defaultPosture: items.some(item => item.realExecutionEnabled)
      ? "Configured provider lanes can execute after their permission, consent, confirmation, receipt, and audit gates pass; unavailable lanes remain safely disabled."
      : "Provider adapters are visible for readiness review only. Real provider execution is disabled.",
    noSecretsExposed: true,
    noExternalApiCalls: true,
    noExecutionAuthorized: true,
    summary: {
      total: items.length,
      configured: items.filter(item => item.configured).length,
      connected: items.filter(item => item.connected).length,
      simulationSupported: items.filter(item => item.simulationSupported).length,
      realExecutionEnabled: items.filter(item => item.realExecutionEnabled).length,
      realExecutionDisabled: items.filter(item => item.realExecutionDisabled).length
    },
    items
  };
}

function healthPrivacyComplianceGuardrailsStatus() {
  return {
    id: "health-privacy-compliance-guardrails",
    title: "Health Privacy & Compliance Guardrails",
    defaultPosture: "Review-only health support. Nexus prepares education, intake notes, and reports without diagnosing, prescribing, dispatching, contacting providers, or storing sensitive health data persistently.",
    dataSensitivityTags: ["health-data:sensitive", "session-only", "review-only", "provider-review-required"],
    guardrails: [
      { id: "review-only-health-support", label: "Review-only health support", status: "active", detail: "Nexus can prepare education, intake checklists, care-team summaries, and questions for qualified review." },
      { id: "no-diagnosis", label: "No diagnosis", status: "active", detail: "Nexus does not diagnose symptoms, interpret readings as final advice, or replace qualified clinical review." },
      { id: "no-medication-changes", label: "No medication changes", status: "active", detail: "Medication, insulin, prescription, refill, dose, and pharmacy questions require clinician or pharmacist review." },
      { id: "no-emergency-dispatch", label: "No emergency dispatch", status: "active", detail: "Emergency or severe symptom prompts receive safety guidance to contact local emergency services; Nexus does not dispatch help." },
      { id: "session-only-data", label: "Session-only data", status: "active", detail: "Chronic-care notes and reports are session-only/review-only unless a separately approved compliant storage path exists." },
      { id: "provider-review-required", label: "Provider review required", status: "active", detail: "Reports, medication questions, severe readings, and urgent symptoms are marked for qualified human review." }
    ],
    blockedSafetyReasons: [
      "diagnosis-disabled",
      "prescribing-disabled",
      "medication-adjustment-disabled",
      "emergency-dispatch-disabled",
      "provider-contact-disabled",
      "external-transmission-disabled",
      "persistent-sensitive-storage-disabled"
    ],
    noDiagnosis: true,
    noPrescribing: true,
    noMedicationAdjustment: true,
    noEmergencyDispatch: true,
    noProviderContact: true,
    noExternalTransmission: true,
    sessionOnly: true,
    providerReviewRequired: true,
    noExecutionAuthorized: true
  };
}

function runtimeProviders(db) {
  const baseProviders = [...(db.providers || [])];
  for (const provider of BUILT_IN_PROVIDER_DEFINITIONS) {
    if (!baseProviders.some(item => item.id === provider.id)) baseProviders.push(provider);
  }
  return baseProviders.map(provider => {
    if (provider.id === "database") {
      const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);
      const hasPg = Boolean(loadOptional("pg"));
      const postgresState = usingPostgresState();
      return {
        ...provider,
        mode: postgresState ? "postgresql-state" : hasDatabaseUrl ? "postgresql-ready" : "json-file",
        status: hasDatabaseUrl && hasPg && postgresState ? "connected" : hasDatabaseUrl && hasPg ? (REQUIRE_LIVE_SERVICES ? "needs-runtime" : "connected") : hasDatabaseUrl ? "needs-runtime" : (REQUIRE_LIVE_SERVICES ? "needs-credentials" : "connected"),
        detail: hasDatabaseUrl && hasPg && postgresState
          ? "PostgreSQL state store active; learning, workforce, health, trade, AI, and agent records persist to DATABASE_URL."
          : hasDatabaseUrl && hasPg
          ? "DATABASE_URL and pg are available; set AGRINEXUS_STATE_STORE=postgres to persist app workflow state in PostgreSQL."
          : hasDatabaseUrl
          ? "DATABASE_URL is set; install pg and run migrations to activate PostgreSQL."
          : (REQUIRE_LIVE_SERVICES ? "Strict live mode requires DATABASE_URL for PostgreSQL." : "Local JSON persistence active; PostgreSQL path ready.")
      };
    }
    if (provider.id === "openai") {
      const hasLocalAi = Boolean(process.env.AI_PROVIDER === "webhook" && process.env.AI_WEBHOOK_URL && process.env.AI_PROVIDER_API_KEY);
      return {
        ...provider,
        mode: process.env.OPENAI_API_KEY ? "openai" : hasLocalAi ? "local-ai-webhook" : "fallback",
        status: process.env.OPENAI_API_KEY || hasLocalAi ? "connected" : (REQUIRE_LIVE_SERVICES ? "needs-credentials" : "ready"),
        detail: process.env.OPENAI_API_KEY
          ? `OpenAI configured with ${AI_MODEL}.`
          : hasLocalAi
          ? "Local AI engine configured through webhook provider."
          : (REQUIRE_LIVE_SERVICES ? "Strict live mode requires OPENAI_API_KEY or a configured AI webhook." : "Uses offline guidance until OPENAI_API_KEY is set.")
      };
    }
    if (provider.id === "maps") {
      const mode = process.env.MAP_TILE_PROVIDER || provider.mode;
      const normalizedMode = String(mode || "").toLowerCase();
      const hasTileUrl = Boolean(process.env.MAP_TILE_URL);
      const liveMap = normalizedMode === "openstreetmap" || (normalizedMode === "custom-tile" && hasTileUrl);
      return {
        ...provider,
        mode,
        status: liveMap ? "connected" : (REQUIRE_LIVE_SERVICES ? "needs-credentials" : provider.status),
        detail: normalizedMode === "openstreetmap"
          ? "OpenStreetMap live tile provider is enabled for launch."
          : normalizedMode === "custom-tile"
          ? (hasTileUrl ? "Custom map tile URL configured." : "Set MAP_TILE_URL for a custom map tile provider.")
          : REQUIRE_LIVE_SERVICES
          ? "Strict live mode requires MAP_TILE_PROVIDER=openstreetmap or MAP_TILE_PROVIDER=custom-tile with MAP_TILE_URL."
          : provider.detail
      };
    }
    if (provider.id === "music-playback") {
      const youtubeConnected = nexusMusicMediaSourceProvider.isYouTubeProviderConfigured(process.env);
      return {
        ...provider,
        mode: youtubeConnected ? "youtube-embed" : "not-configured",
        status: youtubeConnected ? "connected" : "needs-credentials",
        detail: youtubeConnected
          ? "YouTube search and privacy-enhanced embedded playback are connected. Nexus can play public music results without a paid music subscription."
          : "Add YOUTUBE_API_KEY. Nexus will keep the key server-side and use YouTube embedded playback without a paid music subscription."
      };
    }
    if (provider.id === "web-search") {
      const openAiWebReady = process.env.OPENAI_WEB_SEARCH_ENABLED === "true" && Boolean(process.env.OPENAI_API_KEY);
      const readyKey = firstConfiguredEnv(["TAVILY_API_KEY", "BRAVE_SEARCH_API_KEY", "EXA_API_KEY", openAiWebReady ? "OPENAI_API_KEY" : ""]);
      const mode = process.env.WEB_SEARCH_PROVIDER || (readyKey === "TAVILY_API_KEY" ? "tavily" : readyKey === "BRAVE_SEARCH_API_KEY" ? "brave" : readyKey === "EXA_API_KEY" ? "exa" : readyKey === "OPENAI_API_KEY" ? "openai-web-search" : "not-configured");
      return namedProviderStatus(
        provider,
        readyKey,
        key => `Live web search brain configured through ${mode} using ${key}. Nexus can ground current-event and internet questions through this provider.`,
        "Add OPENAI_WEB_SEARCH_ENABLED=true with OPENAI_API_KEY, or add TAVILY_API_KEY, BRAVE_SEARCH_API_KEY, or EXA_API_KEY for live internet search.",
        mode
      );
    }
    if (provider.id === "routing-geocoding") {
      const readyKey = firstConfiguredEnv(["MAPBOX_ACCESS_TOKEN", "OPENROUTESERVICE_API_KEY", "GOOGLE_MAPS_API_KEY", "ROUTING_WEBHOOK_URL"]);
      const mode = process.env.ROUTING_PROVIDER || (readyKey === "MAPBOX_ACCESS_TOKEN" ? "mapbox" : readyKey === "OPENROUTESERVICE_API_KEY" ? "openrouteservice" : readyKey === "GOOGLE_MAPS_API_KEY" ? "google-maps" : readyKey === "ROUTING_WEBHOOK_URL" ? "routing-webhook" : "not-configured");
      return namedProviderStatus(
        provider,
        readyKey,
        key => `Routing/geocoding configured through ${mode} using ${key}. Nexus can support address lookup, clinic/pharmacy directions, shipment routes, and ETA workflows.`,
        "Add MAPBOX_ACCESS_TOKEN, OPENROUTESERVICE_API_KEY, GOOGLE_MAPS_API_KEY, or ROUTING_WEBHOOK_URL for live routing and geocoding.",
        mode
      );
    }
    if (provider.id === "learning-lms") {
      const moodleReady = Boolean(process.env.MOODLE_BASE_URL && process.env.MOODLE_TOKEN);
      const openEdxReady = Boolean(process.env.OPENEDX_BASE_URL && (process.env.OPENEDX_API_KEY || process.env.OPENEDX_CLIENT_ID));
      const readyKey = moodleReady ? "MOODLE_TOKEN" : openEdxReady ? "OPENEDX_API_KEY" : "";
      const mode = process.env.LEARNING_LMS_PROVIDER || (moodleReady ? "moodle" : openEdxReady ? "openedx" : "not-configured");
      return namedProviderStatus(
        provider,
        readyKey,
        () => `Learning LMS configured through ${mode}. Nexus can attach real course catalog, enrollment, progress, quiz, and certificate workflows.`,
        "Add MOODLE_BASE_URL + MOODLE_TOKEN, or OPENEDX_BASE_URL + OPENEDX_API_KEY/OPENEDX_CLIENT_ID for a real course provider.",
        mode
      );
    }
    if (["learning-courses", "learning-certificates"].includes(provider.id)) {
      const moodleReady = Boolean(process.env.MOODLE_BASE_URL && process.env.MOODLE_TOKEN);
      const openEdxReady = Boolean(process.env.OPENEDX_BASE_URL && (process.env.OPENEDX_API_KEY || process.env.OPENEDX_CLIENT_ID));
      const direct = directVendorProviderStatus(provider, {
        ready: moodleReady || openEdxReady,
        mode: moodleReady ? "moodle" : openEdxReady ? "openedx" : provider.mode,
        readyDetail: provider.id === "learning-courses"
          ? "Real LMS catalog is connected through Moodle/Open edX. Nexus can show courses, enroll learners, track progress, and connect learning to workforce pathways."
          : "Real LMS credential path is connected through Moodle/Open edX. Nexus can issue or hand off certificates through the learning provider path.",
        missingDetail: ""
      });
      if (direct) return direct;
    }
    if (provider.id === "workforce-job-search") {
      const adzunaReady = Boolean(process.env.ADZUNA_APP_ID && process.env.ADZUNA_APP_KEY);
      const readyKey = adzunaReady ? "ADZUNA_APP_KEY" : firstConfiguredEnv(["JOB_SEARCH_API_KEY", "JOB_SEARCH_WEBHOOK_URL"]);
      const mode = process.env.JOB_SEARCH_PROVIDER || (adzunaReady ? "adzuna" : readyKey === "JOB_SEARCH_WEBHOOK_URL" ? "job-search-webhook" : readyKey ? "job-search-api" : "not-configured");
      return namedProviderStatus(
        provider,
        readyKey,
        key => `Live job search configured through ${mode} using ${key}. Nexus can support current job listing search, matching, and workforce application flows.`,
        "Add ADZUNA_APP_ID + ADZUNA_APP_KEY, or JOB_SEARCH_API_KEY/JOB_SEARCH_WEBHOOK_URL for a real job listings provider.",
        mode
      );
    }
    if (provider.id === "workforce-jobs") {
      const adzunaReady = Boolean(process.env.ADZUNA_APP_ID && process.env.ADZUNA_APP_KEY);
      const directKey = adzunaReady ? "ADZUNA_APP_KEY" : firstConfiguredEnv(["JOB_SEARCH_API_KEY", "JOB_SEARCH_WEBHOOK_URL"]);
      const direct = directVendorProviderStatus(provider, {
        ready: Boolean(directKey),
        mode: adzunaReady ? "adzuna" : directKey === "JOB_SEARCH_WEBHOOK_URL" ? "job-search-webhook" : directKey ? "job-search-api" : provider.mode,
        readyDetail: "Live job listing source is connected. Nexus can search roles, match skills, and start application workflows against current job data.",
        missingDetail: ""
      });
      if (direct) return direct;
    }
    if (provider.id === "health-openmrs") {
      const openMrsReady = Boolean(process.env.OPENMRS_BASE_URL && (process.env.OPENMRS_TOKEN || (process.env.OPENMRS_USERNAME && process.env.OPENMRS_PASSWORD)));
      return namedProviderStatus(
        provider,
        openMrsReady ? "OPENMRS_BASE_URL" : "",
        () => "OpenMRS/EHR adapter configured. Nexus can create consented intake handoff records and provider-facing documentation while staying inside support/navigation boundaries.",
        "Add OPENMRS_BASE_URL plus OPENMRS_TOKEN, or OPENMRS_USERNAME + OPENMRS_PASSWORD, for real clinic/EHR handoff.",
        process.env.HEALTH_RECORD_PROVIDER || (openMrsReady ? "openmrs" : "not-configured")
      );
    }
    if (provider.id === "health-ehr") {
      const openMrsReady = Boolean(process.env.OPENMRS_BASE_URL && (process.env.OPENMRS_TOKEN || (process.env.OPENMRS_USERNAME && process.env.OPENMRS_PASSWORD)));
      const direct = directVendorProviderStatus(provider, {
        ready: openMrsReady,
        mode: openMrsReady ? "openmrs" : provider.mode,
        readyDetail: "OpenMRS/EHR path is connected for consented intake handoff, clinic notes, mobile-clinic packet export, and provider evidence.",
        missingDetail: ""
      });
      if (direct) return direct;
    }
    if (provider.id === "satellite-field-data") {
      const sentinelReady = Boolean(process.env.SENTINEL_HUB_CLIENT_ID && process.env.SENTINEL_HUB_CLIENT_SECRET);
      const readyKey = sentinelReady ? "SENTINEL_HUB_CLIENT_ID" : firstConfiguredEnv(["SENTINEL_HUB_INSTANCE_ID", "SATELLITE_API_KEY", "SATELLITE_WEBHOOK_URL"]);
      const mode = process.env.SATELLITE_PROVIDER || (sentinelReady ? "sentinel-hub" : readyKey === "SATELLITE_WEBHOOK_URL" ? "satellite-webhook" : readyKey ? "satellite-api" : "not-configured");
      return namedProviderStatus(
        provider,
        readyKey,
        key => `Satellite field intelligence configured through ${mode} using ${key}. Nexus can turn field imagery into farmer-facing crop stress, water, pest, and harvest guidance.`,
        "Add SENTINEL_HUB_CLIENT_ID + SENTINEL_HUB_CLIENT_SECRET, or SATELLITE_API_KEY/SATELLITE_WEBHOOK_URL for real field imagery intelligence.",
        mode
      );
    }
    if (provider.id === "field-drones") {
      const sentinelReady = Boolean(process.env.SENTINEL_HUB_CLIENT_ID && process.env.SENTINEL_HUB_CLIENT_SECRET);
      const directKey = sentinelReady ? "SENTINEL_HUB_CLIENT_ID" : firstConfiguredEnv(["SATELLITE_API_KEY", "SATELLITE_WEBHOOK_URL"]);
      const direct = directVendorProviderStatus(provider, {
        ready: Boolean(directKey),
        mode: sentinelReady ? "sentinel-hub" : directKey === "SATELLITE_WEBHOOK_URL" ? "satellite-webhook" : directKey ? "satellite-api" : provider.mode,
        readyDetail: "Drone/satellite field intelligence is connected. Nexus can convert imagery and scan data into simple farmer guidance.",
        missingDetail: ""
      });
      if (direct) return direct;
    }
    if (provider.id === "trade-payments") {
      const paystackReady = Boolean(process.env.PAYSTACK_SECRET_KEY);
      const flutterwaveReady = Boolean(process.env.FLUTTERWAVE_SECRET_KEY);
      const direct = directVendorProviderStatus(provider, {
        ready: paystackReady || flutterwaveReady,
        mode: paystackReady ? "paystack" : flutterwaveReady ? "flutterwave" : provider.mode,
        readyDetail: `Payment provider connected through ${paystackReady ? "Paystack" : "Flutterwave"}. Nexus can create transaction evidence, checkout handoff, receipts, and AgriNexus fee tracking.`,
        missingDetail: ""
      });
      if (direct) return direct;
    }
    if (provider.id === "trade-logistics") {
      const directKey = firstConfiguredEnv(["LOGISTICS_TRACKING_API_KEY", "LOGISTICS_TRACKING_URL", "MAPBOX_ACCESS_TOKEN", "OPENROUTESERVICE_API_KEY", "GOOGLE_MAPS_API_KEY"]);
      const direct = directVendorProviderStatus(provider, {
        ready: Boolean(directKey),
        mode: process.env.LOGISTICS_TRACKING_PROVIDER || process.env.ROUTING_PROVIDER || (directKey === "MAPBOX_ACCESS_TOKEN" ? "mapbox" : directKey === "OPENROUTESERVICE_API_KEY" ? "openrouteservice" : directKey === "GOOGLE_MAPS_API_KEY" ? "google-maps" : provider.mode),
        readyDetail: "Logistics, routing, or GPS tracking provider is connected. Nexus can show route movement, location lookup, ETA support, and shipment tracking evidence.",
        missingDetail: ""
      });
      if (direct) return direct;
    }
    if (["auth-users", "auth-password-reset"].includes(provider.id)) {
      const supabaseReady = Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
      const auth0Ready = Boolean(process.env.AUTH0_DOMAIN && process.env.AUTH0_CLIENT_ID && process.env.AUTH0_CLIENT_SECRET);
      const clerkReady = Boolean(process.env.CLERK_SECRET_KEY);
      const direct = directVendorProviderStatus(provider, {
        ready: supabaseReady || auth0Ready || clerkReady,
        mode: supabaseReady ? "supabase" : auth0Ready ? "auth0" : clerkReady ? "clerk" : provider.mode,
        readyDetail: `${provider.id === "auth-users" ? "Production user authentication" : "Password reset"} is connected through ${supabaseReady ? "Supabase" : auth0Ready ? "Auth0" : "Clerk"}.`,
        missingDetail: ""
      });
      if (direct) return direct;
    }
    if (provider.id === "email-delivery") {
      const readyKey = firstConfiguredEnv(["RESEND_API_KEY", "SENDGRID_API_KEY", "MAILGUN_API_KEY"]);
      const direct = directVendorProviderStatus(provider, {
        ready: Boolean(readyKey),
        mode: readyKey === "RESEND_API_KEY" ? "resend" : readyKey === "SENDGRID_API_KEY" ? "sendgrid" : readyKey === "MAILGUN_API_KEY" ? "mailgun" : provider.mode,
        readyDetail: `Email delivery is connected through ${readyKey === "RESEND_API_KEY" ? "Resend" : readyKey === "SENDGRID_API_KEY" ? "SendGrid" : "Mailgun"}. Nexus can send receipts, reminders, password reset, and workflow notices.`,
        missingDetail: ""
      });
      if (direct) return direct;
    }
    if (provider.id === "billing-subscriptions") {
      const stripeReady = Boolean(process.env.STRIPE_SECRET_KEY && process.env.BILLING_PRICE_ID);
      const paystackReady = Boolean(process.env.PAYSTACK_SECRET_KEY && process.env.BILLING_PRICE_ID);
      const flutterwaveReady = Boolean(process.env.FLUTTERWAVE_SECRET_KEY && process.env.BILLING_PRICE_ID);
      const partial = (process.env.STRIPE_SECRET_KEY || process.env.PAYSTACK_SECRET_KEY || process.env.FLUTTERWAVE_SECRET_KEY) && !process.env.BILLING_PRICE_ID
        ? "Billing provider key is present. Add BILLING_PRICE_ID so Nexus can verify subscription checkout readiness."
        : "";
      const direct = directVendorProviderStatus(provider, {
        ready: stripeReady || paystackReady || flutterwaveReady,
        mode: stripeReady ? "stripe" : paystackReady ? "paystack" : flutterwaveReady ? "flutterwave" : provider.mode,
        readyDetail: `Subscription billing is connected through ${stripeReady ? "Stripe" : paystackReady ? "Paystack" : "Flutterwave"} with BILLING_PRICE_ID.`,
        missingDetail: "",
        partialDetail: partial
      });
      if (direct) return direct;
    }
    const config = PROVIDER_CONFIG[provider.id];
    if (config) {
      const runtime = providerRuntime(provider.id);
      const openAiVoiceProvider = ["voice-stt", "voice-tts"].includes(provider.id) && Boolean(process.env.OPENAI_API_KEY);
      const mode = runtime.mode || provider.mode;
      const isSandbox = mode === "sandbox";
      const isBrowser = mode === "browser";
      const isOpenAiVoice = mode === "openai";
      const hasCredential = Boolean(runtime.webhookUrl && runtime.apiKey);
      const hasBridge = Boolean(providerEngineWebhookUrl(provider.id) && runtime.apiKey);
      const hasOpenAiVoice = isOpenAiVoice && Boolean(process.env.OPENAI_API_KEY);
      const hasGoogleTranslation = provider.id === "translation" && runtime.googleTranslationConfigured === true;
      const hasTwilioVoice = provider.id === "phone-voice"
        && mode === "twilio"
        && Boolean(process.env.TWILIO_ACCOUNT_SID)
        && Boolean(process.env.TWILIO_AUTH_TOKEN)
        && Boolean(process.env.TWILIO_PHONE_NUMBER)
        && Boolean(process.env.PUBLIC_BASE_URL);
      const isTwilioMessaging = ["sms-delivery", "whatsapp-delivery"].includes(provider.id) && mode === "twilio";
      const hasTwilioMessaging = isTwilioMessaging && hasTwilioMessagingCore();
      const twilioMessagingRecipient = isTwilioMessaging ? twilioRecipientForProvider(provider.id) : "";
      return {
        ...provider,
        mode,
        status: hasGoogleTranslation || hasOpenAiVoice || hasTwilioVoice || (hasTwilioMessaging && twilioMessagingRecipient) ? "connected" : hasTwilioMessaging ? "needs-recipient" : isBrowser ? (REQUIRE_LIVE_SERVICES ? "needs-live-provider" : "connected") : isSandbox ? (REQUIRE_LIVE_SERVICES ? "needs-live-provider" : "connected") : (hasCredential ? "connected" : "needs-credentials"),
        detail: hasGoogleTranslation
          ? "Google Cloud Translation v3 is configured with server-only service-account credentials."
          : hasOpenAiVoice
          ? `${mode} provider configured through OPENAI_API_KEY.`
          : hasTwilioVoice
          ? "Twilio phone assistant is configured with account credentials, phone number, and PUBLIC_BASE_URL."
          : hasTwilioMessaging && twilioMessagingRecipient
          ? `Twilio ${provider.id === "sms-delivery" ? "SMS" : "WhatsApp"} delivery is configured with a test recipient.`
          : hasTwilioMessaging
          ? `Twilio ${provider.id === "sms-delivery" ? "SMS" : "WhatsApp"} credentials are configured; add ${provider.id === "sms-delivery" ? "TRADE_BUYER_SMS_TO or DEMO_SMS_TO" : "TRADE_BUYER_WHATSAPP_TO or DEMO_WHATSAPP_TO"} for live buyer delivery.`
          : isBrowser
          ? (REQUIRE_LIVE_SERVICES ? `Strict live mode requires ${config.modeEnv}=webhook and hosted voice credentials.` : provider.detail)
          : isSandbox
          ? (REQUIRE_LIVE_SERVICES ? `Strict live mode requires ${config.modeEnv} to be set to a live provider and credentials configured.` : provider.detail)
          : (hasCredential ? `${mode} provider configured${hasBridge ? " through PROVIDER_ENGINE_BASE_URL bridge" : ""}.` : `Set ${config.credentialEnvs.join(" or ")} or PROVIDER_ENGINE_BASE_URL plus the provider API key to activate ${mode}.`)
      };
    }
    return provider;
  });
}

function runtimeProviderById(db, providerId) {
  return runtimeProviders(db).find(item => item.id === providerId);
}

function integrationStatus(db) {
  const providers = runtimeProviders(db);
  const readiness = productionReadiness(providers);
  const liveGaps = readiness.checks.filter(check => !check.ready);
  return {
    ok: !REQUIRE_LIVE_SERVICES || liveGaps.length === 0,
    service: "agrinexus",
    strictLiveMode: REQUIRE_LIVE_SERVICES,
    mode: process.env.NODE_ENV || "development",
    host: HOST,
    port: PORT,
    dataPath: DB_PATH,
    providers,
    readiness,
    liveGaps,
    requiredEnvironment: {
      database: ["DATABASE_URL", "AGRINEXUS_STATE_STORE=postgres"],
      security: ["SESSION_SECRET", "PASSWORD_PEPPER"],
      ai: ["OPENAI_API_KEY or AI_PROVIDER=webhook + AI_WEBHOOK_URL + AI_PROVIDER_API_KEY"],
      translation: ["GOOGLE_TRANSLATION_CREDENTIALS_JSON or TRANSLATION_PROVIDER + TRANSLATION_WEBHOOK_URL + TRANSLATION_PROVIDER_API_KEY"],
      learning: ["LEARNING_COURSE_PROVIDER", "LEARNING_CERTIFICATE_PROVIDER", "LEARNING_*_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"],
      workforce: ["WORKFORCE_JOB_PROVIDER", "WORKFORCE_CALENDAR_PROVIDER", "WORKFORCE_NOTIFICATION_PROVIDER", "WORKFORCE_HRIS_PROVIDER", "WORKFORCE_SHIFT_PROVIDER", "WORKFORCE_*_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"],
      healthcare: ["HEALTH_TELEHEALTH_PROVIDER", "HEALTH_EHR_PROVIDER", "HEALTH_NOTIFICATION_PROVIDER", "HEALTH_*_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"],
      agritrade: ["TRADE_PAYMENT_PROVIDER", "TRADE_LOGISTICS_PROVIDER", "TRADE_MARKET_PROVIDER", "TRADE_*_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY"],
      drones: ["DRONE_PROVIDER", "DRONE_WEBHOOK_URL", "DRONE_PROVIDER_API_KEY"],
      voice: ["VOICE_STT_PROVIDER=openai or webhook", "VOICE_TTS_PROVIDER=openai or webhook", "OPENAI_API_KEY or VOICE_*_WEBHOOK_URL + VOICE_PROVIDER_API_KEY"],
      phone: ["PHONE_PROVIDER=twilio", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "Configure Twilio Voice webhook to /api/voice/phone/incoming"],
      auth: ["AUTH_PROVIDER", "AUTH_WEBHOOK_URL", "PASSWORD_RESET_PROVIDER", "PASSWORD_RESET_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY"],
      communications: ["EMAIL_PROVIDER", "EMAIL_WEBHOOK_URL", "SMS_PROVIDER", "SMS_WEBHOOK_URL", "WHATSAPP_PROVIDER", "WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"],
      billing: ["BILLING_PROVIDER", "BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY", "BILLING_PRICE_ID"],
      musicPlayback: ["MUSIC_PROVIDER=spotify", "SPOTIFY_CLIENT_ID", "SPOTIFY_CLIENT_SECRET", "SPOTIFY_REDIRECT_URI", "Authorize once at /api/music/spotify/login to store a user refresh token"],
      maps: ["MAP_TILE_PROVIDER=openstreetmap or MAP_TILE_PROVIDER=custom-tile + MAP_TILE_URL"],
      internetBrain: ["OPENAI_WEB_SEARCH_ENABLED=true + OPENAI_API_KEY", "or TAVILY_API_KEY", "or BRAVE_SEARCH_API_KEY", "or EXA_API_KEY"],
      routingGeocoding: ["MAPBOX_ACCESS_TOKEN", "or OPENROUTESERVICE_API_KEY", "or GOOGLE_MAPS_API_KEY", "or ROUTING_WEBHOOK_URL"],
      realLearningCatalog: ["MOODLE_BASE_URL + MOODLE_TOKEN", "or OPENEDX_BASE_URL + OPENEDX_API_KEY"],
      realJobNetwork: ["ADZUNA_APP_ID + ADZUNA_APP_KEY", "or JOB_SEARCH_API_KEY/JOB_SEARCH_WEBHOOK_URL"],
      realHealthRecords: ["OPENMRS_BASE_URL + OPENMRS_TOKEN", "or OPENMRS_USERNAME + OPENMRS_PASSWORD"],
      satelliteFieldData: ["SENTINEL_HUB_CLIENT_ID + SENTINEL_HUB_CLIENT_SECRET", "or SATELLITE_API_KEY/SATELLITE_WEBHOOK_URL"],
      legal: ["/terms.html", "/privacy.html", "/refund.html"],
      regression: ["npm run production:regression", "npm run production:complete-check"]
    },
    timestamp: new Date().toISOString()
  };
}

function maskEngineValue(value) {
  if (!value) return "";
  const clean = String(value);
  if (clean.length <= 10) return "configured";
  return `${clean.slice(0, 4)}...${clean.slice(-4)}`;
}

function isSensitiveEngineEnvKey(key = "") {
  return /(KEY|TOKEN|SECRET|PASSWORD|PRIVATE|CREDENTIAL|DATABASE_URL|WEBHOOK_SECRET|AUTH_TOKEN|SID)/i.test(String(key || ""));
}

function publicEngineEnvValue(key = "", value = "") {
  if (!String(value || "").trim()) return "";
  return isSensitiveEngineEnvKey(key) ? maskEngineValue(value) : String(value);
}

function engineCredentialState(keys) {
  return keys.map(rawKey => {
    const { key, suggestedValue } = engineCredentialEntry(rawKey);
    const value = process.env[key] || "";
    const unresolved = !value || value.includes("PASTE_") || value.includes("YOUR-") || value.includes("replace-with") || value.includes("your-key-here");
    const ready = suggestedValue ? value === suggestedValue : !unresolved;
    return {
      key,
      expectedValue: suggestedValue || "",
      ready,
      value: unresolved ? "" : maskEngineValue(value)
    };
  });
}

function engineCredentialEntry(rawKey) {
  const [key, ...rest] = String(rawKey || "").split("=");
  return { key, suggestedValue: rest.join("=") || "" };
}

function renderEngineEnvPlan(db) {
  const manifest = liveEngineManifest(db);
  const lines = [];
  const seen = new Set();
  const add = (key, value = "") => {
    if (!key || seen.has(key)) return;
    seen.add(key);
    const publicValue = publicEngineEnvValue(key, value);
    lines.push({
      key,
      value: publicValue,
      configured: Boolean(String(value || "").trim()),
      secretValueRedacted: Boolean(String(value || "").trim() && isSensitiveEngineEnvKey(key)),
      renderValue: publicValue || "<add in Render>"
    });
  };
  const defaults = {
    PROVIDER_ENGINE_BASE_URL: process.env.PROVIDER_ENGINE_BASE_URL || "https://agrinexus-provider-engines.onrender.com",
    AGRINEXUS_REQUIRE_LIVE_SERVICES: "true",
    AGRINEXUS_STATE_STORE: "postgres",
    AI_PROVIDER: "webhook",
    VOICE_STT_PROVIDER: "openai",
    VOICE_TTS_PROVIDER: "openai",
    TRANSLATION_PROVIDER: "webhook",
    MAP_TILE_PROVIDER: "openstreetmap",
    LEARNING_COURSE_PROVIDER: "webhook",
    LEARNING_CERTIFICATE_PROVIDER: "webhook",
    WORKFORCE_JOB_PROVIDER: "webhook",
    WORKFORCE_CALENDAR_PROVIDER: "webhook",
    WORKFORCE_NOTIFICATION_PROVIDER: "webhook",
    WORKFORCE_HRIS_PROVIDER: "webhook",
    WORKFORCE_SHIFT_PROVIDER: "webhook",
    HEALTH_TELEHEALTH_PROVIDER: "webhook",
    HEALTH_NOTIFICATION_PROVIDER: "webhook",
    HEALTH_EHR_PROVIDER: "webhook",
    TRADE_PAYMENT_PROVIDER: "webhook",
    TRADE_LOGISTICS_PROVIDER: "webhook",
    TRADE_MARKET_PROVIDER: "webhook",
    DRONE_PROVIDER: "webhook",
    PHONE_PROVIDER: "twilio",
    AUTH_PROVIDER: "webhook",
    PASSWORD_RESET_PROVIDER: "webhook",
    EMAIL_PROVIDER: "webhook",
    SMS_PROVIDER: "webhook",
    WHATSAPP_PROVIDER: "webhook",
    BILLING_PROVIDER: "webhook"
  };
  Object.entries(defaults).forEach(([key, value]) => add(key, process.env[key] || value));
  for (const engine of manifest.engines) {
    for (const credential of engine.credentials || []) {
      const entry = engineCredentialEntry(credential.key || credential);
      add(entry.key, process.env[entry.key] || defaults[entry.key] || entry.suggestedValue);
    }
  }
  return {
    status: manifest.status,
    totalKeys: lines.length,
    configuredKeys: lines.filter(item => item.value && item.value !== "<add in Render>").length,
    groups: manifest.engines.map(engine => ({
      id: engine.id,
      name: engine.name,
      status: engine.status,
      providerSummary: engine.providerSummary,
      credentialSummary: engine.credentialSummary,
      keys: (engine.credentials || []).map(credential => engineCredentialEntry(credential.key || credential)),
      missing: engine.missing || [],
      userAction: engine.userAction
    })),
    lines,
    envText: lines.map(item => `${item.key}=${item.value}`).join("\n"),
    noSecretValuesReturned: true
  };
}

function liveEngineManifest(db) {
  const providers = runtimeProviders(db);
  const providerById = Object.fromEntries(providers.map(provider => [provider.id, provider]));
  const engines = [
    {
      id: "database",
      name: "Production PostgreSQL",
      purpose: "Persists users, workflows, learning progress, workforce records, telehealth activity, trade activity, and agent memory.",
      providerIds: ["database"],
      credentials: ["DATABASE_URL", "AGRINEXUS_STATE_STORE"],
      userAction: "Create Render PostgreSQL, paste DATABASE_URL, and set AGRINEXUS_STATE_STORE=postgres."
    },
    {
      id: "live-ai",
      name: "Nexus Live AI",
      purpose: "Powers agentic planning, briefings, tutoring, triage support, trade guidance, workforce coaching, and command center reasoning.",
      providerIds: ["openai"],
      credentials: ["OPENAI_API_KEY", "OPENAI_MODEL"],
      userAction: "Create an OpenAI API key and paste it into Render as OPENAI_API_KEY."
    },
    {
      id: "translation",
      name: "Live Multilingual Translation",
      purpose: "Translates dynamic content across modules, not just top navigation labels.",
      providerIds: ["translation"],
      credentials: ["TRANSLATION_PROVIDER", "TRANSLATION_WEBHOOK_URL", "TRANSLATION_PROVIDER_API_KEY"],
      userAction: "Use the provider-engine bridge or replace it with a live translation provider endpoint."
    },
    {
      id: "voice",
      name: "AgriNexus Voice",
      purpose: "Speech-to-text and text-to-speech workflows for voice-first command center use.",
      providerIds: ["voice-stt", "voice-tts"],
      credentials: ["VOICE_STT_PROVIDER=openai", "VOICE_TTS_PROVIDER=openai", "OPENAI_API_KEY", "OPENAI_TRANSCRIBE_MODEL", "OPENAI_TTS_MODEL", "OPENAI_TTS_VOICE"],
      userAction: "Set VOICE_STT_PROVIDER=openai and VOICE_TTS_PROVIDER=openai on the platform service, then add OPENAI_API_KEY."
    },
    {
      id: "phone-voice",
      name: "Phone Call Assistant",
      purpose: "Lets users call a Twilio number, speak plain-language commands, and receive voice responses that route platform workflows.",
      providerIds: ["phone-voice"],
      credentials: ["PHONE_PROVIDER=twilio", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "PUBLIC_BASE_URL"],
      userAction: "Buy/configure a Twilio voice number and set its incoming call webhook to PUBLIC_BASE_URL/api/voice/phone/incoming."
    },
    {
      id: "learning",
      name: "Learning Provider",
      purpose: "Connects course discovery, lesson completion, certificates, and workforce readiness evidence.",
      providerIds: ["learning-courses", "learning-certificates"],
      credentials: ["LEARNING_COURSE_PROVIDER", "LEARNING_CERTIFICATE_PROVIDER", "LEARNING_COURSE_WEBHOOK_URL", "LEARNING_CERTIFICATE_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"],
      userAction: "Use provider engines first, then replace with a real LMS/course provider when selected."
    },
    {
      id: "workforce",
      name: "Workforce Network",
      purpose: "Connects jobs, applications, HR records, shift scheduling, calendars, and notifications.",
      providerIds: ["workforce-jobs", "workforce-calendar", "workforce-notifications", "workforce-hris", "workforce-shifts"],
      credentials: ["WORKFORCE_JOB_PROVIDER", "WORKFORCE_CALENDAR_PROVIDER", "WORKFORCE_NOTIFICATION_PROVIDER", "WORKFORCE_HRIS_PROVIDER", "WORKFORCE_SHIFT_PROVIDER", "WORKFORCE_JOB_WEBHOOK_URL", "WORKFORCE_CALENDAR_WEBHOOK_URL", "WORKFORCE_NOTIFICATION_WEBHOOK_URL", "WORKFORCE_HRIS_WEBHOOK_URL", "WORKFORCE_SHIFT_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"],
      userAction: "Start with provider engines, then connect real job boards, employer systems, calendar, HRIS, or shift tools."
    },
    {
      id: "telehealth",
      name: "Telehealth Network",
      purpose: "Supports intake, accessibility needs, consent, vitals, care plans, referrals, follow-up, EHR sync, and notifications.",
      providerIds: ["health-telehealth", "health-ehr", "health-notifications"],
      credentials: ["HEALTH_TELEHEALTH_PROVIDER", "HEALTH_NOTIFICATION_PROVIDER", "HEALTH_EHR_PROVIDER", "HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_NOTIFICATION_WEBHOOK_URL", "HEALTH_EHR_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"],
      userAction: "Use provider engines first, then connect a compliant telehealth/EHR/notification vendor."
    },
    {
      id: "trade-drone",
      name: "Trade, Market, Logistics, and Drone Engines",
      purpose: "Connects payments, logistics, market data, field drone scans, crop intelligence, and route evidence.",
      providerIds: ["trade-payments", "trade-logistics", "trade-market", "field-drones"],
      credentials: ["TRADE_PAYMENT_PROVIDER", "TRADE_LOGISTICS_PROVIDER", "TRADE_MARKET_PROVIDER", "DRONE_PROVIDER", "TRADE_PAYMENT_WEBHOOK_URL", "TRADE_LOGISTICS_WEBHOOK_URL", "TRADE_MARKET_WEBHOOK_URL", "DRONE_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY", "DRONE_PROVIDER_API_KEY"],
      userAction: "Deploy provider engines, then replace with real payment, logistics, market, and drone vendors."
    },
    {
      id: "maps",
      name: "Live Map Provider",
      purpose: "Shows field, country, route, drone, and operational map context.",
      providerIds: ["maps"],
      credentials: ["MAP_TILE_PROVIDER=openstreetmap"],
      userAction: "Use OpenStreetMap tiles for launch, or later switch to MAP_TILE_PROVIDER=custom-tile with MAP_TILE_URL."
    },
    {
      id: "communications",
      name: "Email, SMS, WhatsApp, and Phone Notifications",
      purpose: "Sends reminders, telehealth updates, workforce notices, onboarding messages, and workflow alerts.",
      providerIds: ["email-delivery", "sms-delivery", "whatsapp-delivery"],
      credentials: ["EMAIL_PROVIDER", "SMS_PROVIDER", "WHATSAPP_PROVIDER", "EMAIL_WEBHOOK_URL", "SMS_WEBHOOK_URL", "WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"],
      userAction: "Use provider engines first, then connect SendGrid/Mailgun/Twilio/WhatsApp Business or your chosen vendor."
    },
    {
      id: "auth-billing",
      name: "Subscriber Auth and Billing",
      purpose: "Supports users, password reset, subscription checkout, and client management.",
      providerIds: ["auth-users", "auth-password-reset", "billing-subscriptions"],
      credentials: ["AUTH_PROVIDER", "PASSWORD_RESET_PROVIDER", "AUTH_WEBHOOK_URL", "PASSWORD_RESET_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY", "BILLING_PROVIDER", "BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY", "BILLING_PRICE_ID"],
      userAction: "Deploy provider engines, then connect real auth/password reset and Stripe billing."
    }
  ].map(engine => {
    const providerStates = engine.providerIds.map(id => providerById[id]).filter(Boolean);
    const credentials = engineCredentialState(engine.credentials);
    if (engine.id === "voice" && process.env.OPENAI_API_KEY) {
      const openAiVoiceKeys = new Set(["VOICE_STT_PROVIDER", "VOICE_TTS_PROVIDER"]);
      for (const credential of credentials) {
        if (openAiVoiceKeys.has(credential.key) && !credential.ready) {
          credential.ready = true;
          credential.value = `${credential.value || "configured"} (OpenAI key active)`;
          credential.detail = "OpenAI voice is active because OPENAI_API_KEY is configured; set the Render value to openai for a clean literal-provider match.";
        }
      }
    }
    const readyProviders = providerStates.filter(provider => provider.status === "connected").length;
    const readyCredentials = credentials.filter(item => item.ready).length;
    const ready = readyProviders === providerStates.length && readyCredentials === credentials.length;
    return {
      ...engine,
      status: ready ? "connected" : readyProviders || readyCredentials ? "partially-connected" : "needs-setup",
      ready,
      providerSummary: `${readyProviders}/${providerStates.length}`,
      credentialSummary: `${readyCredentials}/${credentials.length}`,
      providers: providerStates.map(provider => ({
        id: provider.id,
        name: provider.name,
        mode: provider.mode,
        status: provider.status,
        detail: provider.detail
      })),
      credentials,
      missing: credentials.filter(item => !item.ready).map(item => item.key)
    };
  });
  const readyCount = engines.filter(engine => engine.ready).length;
  return {
    release: AGRINEXUS_RELEASE,
    status: readyCount === engines.length ? "all-engines-connected" : "engines-need-credentials",
    readyCount,
    total: engines.length,
    strictLiveMode: REQUIRE_LIVE_SERVICES,
    engines,
    nextSteps: engines.filter(engine => !engine.ready).map(engine => ({
      engine: engine.name,
      missing: engine.missing,
      action: engine.userAction
    })),
    timestamp: new Date().toISOString()
  };
}

function productionCompleteness(db, providers = runtimeProviders(db)) {
  const providerReady = id => providers.find(item => item.id === id)?.status === "connected";
  const readiness = productionReadiness(providers);
  const legalFiles = ["terms.html", "privacy.html", "refund.html"].map(file => fs.existsSync(path.join(PUBLIC, file)));
  const items = [
    { id: "live-provider-credentials", title: "Live provider credentials", ready: providers.filter(item => item.status === "connected").length >= providers.length - 1, detail: "OpenAI, translation, voice, maps, telehealth, workforce, learning, trade, drone, communications, billing, and auth providers are tracked." },
    { id: "production-database", title: "Production PostgreSQL database", ready: Boolean(process.env.DATABASE_URL && usingPostgresState() && loadOptional("pg")), detail: "DATABASE_URL plus AGRINEXUS_STATE_STORE=postgres activates hosted persistence." },
    { id: "real-user-accounts", title: "Real user accounts", ready: providerReady("auth-users") && providerReady("auth-password-reset") && Boolean(process.env.SESSION_SECRET), detail: "Login, role permissions, provider-backed auth, and password reset wiring are present." },
    { id: "subscription-billing", title: "Payment/subscription system", ready: providerReady("billing-subscriptions") && Boolean(process.env.BILLING_PRICE_ID), detail: "Billing checkout route and provider event trail are wired; live billing needs provider credentials and price id." },
    { id: "production-security", title: "Production security", ready: Boolean(process.env.SESSION_SECRET && process.env.PASSWORD_PEPPER && process.env.AGRINEXUS_REQUIRE_LIVE_SERVICES === "true"), detail: "Security headers, payload limits, rate limiting, strict live mode, secrets, and audit events are expected in hosting." },
    { id: "clinical-legal-guardrails", title: "Clinical/legal guardrails", ready: legalFiles.every(Boolean), detail: "Terms, Privacy, Refund, telehealth consent, referral, follow-up, and human review guardrails are present." },
    { id: "browser-regression", title: "End-to-end browser regression", ready: fs.existsSync(path.join(ROOT, "scripts", "production-clickthrough.js")), detail: "Production click-through audit covers key pages, buttons, static assets, and workflow endpoints." },
    { id: "hosted-deployment", title: "Hosted deployment hardening", ready: fs.existsSync(path.join(ROOT, "render.yaml")) && process.env.NODE_ENV === "production", detail: "Render blueprint, health checks, environment variables, provider engines, and runbook are present." },
    { id: "real-provider-data", title: "Real provider data", ready: ["learning-courses", "workforce-jobs", "health-telehealth", "trade-market", "field-drones", "maps"].every(providerReady), detail: "Live courses, jobs, telehealth, markets, drone data, and maps activate when provider endpoints are configured." },
    { id: "product-polish", title: "Investor/product polish", ready: Boolean((db.profile.demoMoments || []).length && (db.profile.agentCommands || []).length >= 0), detail: "Onboarding, command center, admin readiness, status page, demo flows, and training assets are available." }
  ];
  const readyCount = items.filter(item => item.ready).length;
  return {
    status: readyCount === items.length ? "production-maximized" : "production-gates-visible",
    readyCount,
    total: items.length,
    readinessStatus: readiness.status,
    items,
    nextSteps: items.filter(item => !item.ready).map(item => `${item.title}: ${item.detail}`)
  };
}

function productionOperationsPlan(db, providers = runtimeProviders(db)) {
  const provider = id => providers.find(item => item.id === id) || {};
  const providerConnected = id => provider(id).status === "connected";
  const hasEnv = key => Boolean(process.env[key] && String(process.env[key]).trim() && !String(process.env[key]).includes("replace-with"));
  const legalFiles = ["terms.html", "privacy.html", "refund.html"].map(file => fs.existsSync(path.join(PUBLIC, file)));
  const readiness = productionReadiness(providers);
  const workflowEvents = db.profile?.integrationEvents || [];
  const workstreams = [
    {
      id: "stable-hosted-data",
      title: "Stable Hosted Data",
      ready: Boolean(hasEnv("DATABASE_URL") && usingPostgresState() && loadOptional("pg")),
      evidence: provider("database").detail || "Database provider status unavailable.",
      missing: ["DATABASE_URL", "AGRINEXUS_STATE_STORE=postgres", "pg package"].filter(item => {
        if (item === "DATABASE_URL") return !hasEnv("DATABASE_URL");
        if (item === "AGRINEXUS_STATE_STORE=postgres") return !usingPostgresState();
        return !loadOptional("pg");
      })
    },
    {
      id: "production-authentication",
      title: "Production Authentication",
      ready: Boolean(hasEnv("SESSION_SECRET") && hasEnv("PASSWORD_PEPPER") && providerConnected("auth-users") && providerConnected("auth-password-reset")),
      evidence: "Login, logout, session cookies, role permissions, subscriber invite, and password reset endpoint are wired.",
      missing: [
        !hasEnv("SESSION_SECRET") && "SESSION_SECRET",
        !hasEnv("PASSWORD_PEPPER") && "PASSWORD_PEPPER",
        !providerConnected("auth-users") && "AUTH_PROVIDER/AUTH_WEBHOOK_URL/AUTH_PROVIDER_API_KEY",
        !providerConnected("auth-password-reset") && "PASSWORD_RESET_PROVIDER/PASSWORD_RESET_WEBHOOK_URL"
      ].filter(Boolean)
    },
    {
      id: "live-provider-engines",
      title: "Live Provider Engines",
      ready: ["openai", "learning-courses", "workforce-jobs", "health-telehealth", "trade-market", "field-drones", "maps"].every(providerConnected),
      evidence: `${providers.filter(item => item.status === "connected").length}/${providers.length} providers report connected.`,
      missing: providers.filter(item => item.status !== "connected").map(item => `${item.name}: ${item.detail}`).slice(0, 8)
    },
    {
      id: "workflow-completion",
      title: "Workflow Completion",
      ready: Boolean(workflowEvents.length >= 12 && fs.existsSync(path.join(ROOT, "scripts", "workflow-button-audit.js"))),
      evidence: `${workflowEvents.length} provider/workflow event(s) recorded; workflow button audit is present.`,
      missing: workflowEvents.length >= 12 ? [] : ["Run end-to-end learning, workforce, health, trade, drone, map, AI, integration, and admin workflows to create production evidence."]
    },
    {
      id: "voice-layer",
      title: "Voice Layer",
      ready: Boolean(providerConnected("voice-stt") && providerConnected("voice-tts") && providerConnected("phone-voice") && (hasEnv("OPENAI_API_KEY") || hasEnv("VOICE_PROVIDER_API_KEY"))),
      evidence: "Browser voice, OpenAI/webhook speech, phone assistant, voice command help, and TTS/STT session records are wired.",
      missing: [
        !providerConnected("voice-stt") && "VOICE_STT_PROVIDER plus STT credentials",
        !providerConnected("voice-tts") && "VOICE_TTS_PROVIDER plus TTS credentials",
        !providerConnected("phone-voice") && "PHONE_PROVIDER=twilio with Twilio credentials",
        !(hasEnv("OPENAI_API_KEY") || hasEnv("VOICE_PROVIDER_API_KEY")) && "OPENAI_API_KEY or VOICE_PROVIDER_API_KEY"
      ].filter(Boolean)
    },
    {
      id: "translation-hardening",
      title: "Translation Hardening",
      ready: Boolean(providerConnected("translation")),
      evidence: "Static UI, dynamic workflow text, voice responses, and voice command help use language-aware translation paths.",
      missing: providerConnected("translation") ? [] : ["TRANSLATION_PROVIDER with TRANSLATION_WEBHOOK_URL and TRANSLATION_PROVIDER_API_KEY for live dynamic translation."]
    },
    {
      id: "admin-operations",
      title: "Admin Operations",
      ready: Boolean(db.admin || db.profile?.subscribers || readiness.moduleReadiness?.length),
      evidence: "Admin control room includes users, subscribers, provider health, production readiness, audit feed, usage, and notification workflow records.",
      missing: []
    },
    {
      id: "testing-regression",
      title: "Testing And Regression",
      ready: ["smoke.js", "production-clickthrough.js", "production-complete-check.js", "full-production-regression.js"].every(file => fs.existsSync(path.join(ROOT, "scripts", file))),
      evidence: "Smoke, click-through, 10-item completeness, and full production regression scripts are available.",
      missing: ["smoke.js", "production-clickthrough.js", "production-complete-check.js", "full-production-regression.js"].filter(file => !fs.existsSync(path.join(ROOT, "scripts", file)))
    },
    {
      id: "compliance-legal",
      title: "Compliance And Legal",
      ready: legalFiles.every(Boolean),
      evidence: "Terms, Privacy, Refund, telehealth consent, referral, follow-up, and human review guardrails are tracked.",
      missing: legalFiles.every(Boolean) ? [] : ["terms.html", "privacy.html", "refund.html"].filter(file => !fs.existsSync(path.join(PUBLIC, file)))
    },
    {
      id: "deployment-polish",
      title: "Deployment Polish",
      ready: Boolean(fs.existsSync(path.join(ROOT, "render.yaml")) && hasEnv("PUBLIC_BASE_URL") && REQUIRE_LIVE_SERVICES),
      evidence: "Render blueprint, health endpoint, strict live mode, environment validation, and deployment runbook signals are present.",
      missing: [
        !fs.existsSync(path.join(ROOT, "render.yaml")) && "render.yaml",
        !hasEnv("PUBLIC_BASE_URL") && "PUBLIC_BASE_URL",
        !REQUIRE_LIVE_SERVICES && "AGRINEXUS_REQUIRE_LIVE_SERVICES=true"
      ].filter(Boolean)
    }
  ];
  const readyCount = workstreams.filter(item => item.ready).length;
  return {
    status: readyCount === workstreams.length ? "production-operational" : "production-hardening",
    readyCount,
    total: workstreams.length,
    workstreams: workstreams.map(item => ({
      ...item,
      status: item.ready ? "ready" : "needs-setup",
      missing: item.missing.length ? item.missing : ["No code gap detected."]
    })),
    nextSteps: workstreams.filter(item => !item.ready).map(item => `${item.title}: ${item.missing.join("; ")}`),
    timestamp: new Date().toISOString()
  };
}

function productionReadiness(providers) {
  const providerReady = (id, label, options = {}) => {
    const provider = providers.find(item => item.id === id);
    const localModes = ["sandbox", "fallback", "json-file", "tile-provider", "browser", "local-dictionary", "local-session", "local-disabled"];
    const acceptedStatuses = options.acceptStatuses || ["connected"];
    const statusReady = Boolean(provider && acceptedStatuses.includes(provider.status));
    const fallbackReady = typeof options.fallbackReady === "function" ? options.fallbackReady(providers) : Boolean(options.fallbackReady);
    const ready = Boolean(provider && ((statusReady && !localModes.includes(provider.mode)) || fallbackReady));
    let detail = `${label} provider is missing.`;
    if (provider && fallbackReady && !statusReady) {
      detail = `${provider.name}: ${options.fallbackDetail || "Operational through platform fallback; direct vendor credentials remain optional."}`;
    } else if (provider && ready && provider.status === "needs-recipient") {
      detail = `${provider.name}: Core provider ready. Recipient is requested when Nexus sends a real message.`;
    } else if (provider) {
      detail = `${provider.name}: ${ready ? "Ready" : provider.detail}`;
    }
    return {
      id,
      label,
      ready,
      detail
    };
  };
  const moduleReadiness = [
    {
      module: "Core",
      checks: [
        {
          id: "database-url",
          label: "DATABASE_URL",
          ready: Boolean(process.env.DATABASE_URL),
          detail: process.env.DATABASE_URL ? "Configured" : "Set DATABASE_URL for PostgreSQL."
        },
        {
          id: "postgres-state-store",
          label: "PostgreSQL workflow state",
          ready: usingPostgresState() && Boolean(process.env.DATABASE_URL),
          detail: usingPostgresState() ? "AGRINEXUS_STATE_STORE=postgres is active." : "Set AGRINEXUS_STATE_STORE=postgres so learning and workforce workflow state persists to PostgreSQL."
        },
        {
          id: "pg-package",
          label: "pg package",
          ready: Boolean(loadOptional("pg")),
          detail: loadOptional("pg") ? "Installed" : "Run npm install when npm is available."
        },
        {
          id: "session-secret",
          label: "SESSION_SECRET",
          ready: Boolean(process.env.SESSION_SECRET && !process.env.SESSION_SECRET.includes("dev-only")),
          detail: process.env.SESSION_SECRET ? "Configured" : "Set SESSION_SECRET for production auth."
        }
      ]
    },
    {
      module: "Learning",
      checks: [
        providerReady("learning-courses", "Course catalog provider"),
        providerReady("learning-certificates", "Certificate provider")
      ]
    },
    {
      module: "Workforce",
      checks: [
        providerReady("workforce-jobs", "Live job network provider"),
        providerReady("workforce-calendar", "Calendar provider"),
        providerReady("workforce-notifications", "Notification provider"),
        providerReady("workforce-hris", "HRIS provider"),
        providerReady("workforce-shifts", "Shift scheduling provider")
      ]
    },
    {
      module: "Healthcare",
      checks: [
        providerReady("health-telehealth", "Telehealth provider"),
        providerReady("health-ehr", "EHR provider"),
        providerReady("health-notifications", "Notification provider"),
        providerReady("public-osm-services", "Public clinic/pharmacy service search"),
        providerReady("kenya-afyalink-facility-registry", "Kenya facility registry adapter", {
          fallbackReady: list => list.some(item => item.id === "public-osm-services" && item.status === "connected"),
          fallbackDetail: "Public clinic/pharmacy service search is live through OpenStreetMap/Overpass for Kenya workflows. AfyaLink credentials remain an optional verified-registry upgrade."
        })
      ]
    },
    {
      module: "AgriTrade",
      checks: [
        providerReady("trade-payments", "Payment provider"),
        providerReady("trade-logistics", "Logistics provider"),
        providerReady("trade-market", "Market provider"),
        providerReady("field-drones", "Drone field intelligence provider")
      ]
    },
    {
      module: "AI & Maps",
      checks: [
        {
    Ы®ёпћ›КЧ¬ўh­µзHШ\ЩR][KњЭ]\ИH‘VTЧРРTСWФХUTСTЛљ[ЫY\К›ЩKњЭ]\КHИ›ЩKњЭ]\И€Ш\ЩR][KњЭ]\ОВ€Ш\ЩR][Kќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€Ш\ЩU[Y[[™Q]™[ќ
‹Ш\ЩR][KљYњЭ]\ЧШЪ[™ЩY‹Ш\ЩHЭ]\ИЪ[™ЩYИ	ШШ\ЩR][KњЭ]\ЯKИXЭЬЋ€\Щ\ЏЛ›[YH”Э[™\™\Щ\€€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKШ\ЩN€Ш\ЩR][HJNВ€B‚€ЫЫњЭ™^\РШ\ЩU[Y[[™SX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧШШ\Щ\ЧКЧ‹ЧJКWЭ[Y[[™IКNВ€Y€
™^\РШ\ЩU[Y[[™SX]Ъ	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK[Y[[™N€‹›™^\РШ\ЩU[Y[[™K™љ[\Љ][HO€][KШ\ЩRYOOH™^\РШ\ЩU[Y[[™SX]ЪМWJHJNВ€B‚€ЫЫњЭ™^\Ф™XЫЬ™™\ЬЫњЩ\УX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™XЫЬ™ЧКЧ‹ЧJКWЬ™\ЬЫњЩ\ЙКNВ€Y€
™^\Ф™XЫЬ™™\ЬЫњЩ\УX]Ъ	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™\ЬЫњЩ\О€‹›™^\Ф›ЭљY\”™\ЬЫњЩ\Л™љ[\Љ][HO€][Kњ™XЫЬ™YOOH™^\Ф™XЫЬ™™\ЬЫњЩ\УX]ЪМWJHJNВ€B‚€Y€
™^\Ф™XЫЬ™™\ЬЫњЩ\УX]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ™XЫЬ™HЩ]™XЫЬ™ћRY
‹™^\Ф™XЫЬ™™\ЬЫњЩ\УX]ЪМWJNВ€Y€
\™XЫЬ™
H™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ™XЫЬ™Ы›ЭЩ›Э[™€JNВ€ЫЫњЭ™\ЬЫњЩHH›Ь›X[^™T›ЭљY\”™\ЬЫњЩJ‹™XЫЬ™љY]ШZ]™XY›ЩJ™\JJNВ€‹›™^\Ф›ЭљY\”™\ЬЫњЩ\Лќ[њЪYќ
™\ЬЫњЩJNВ€™XЫЬ™њ›ЭљY\”™\ЬЫњЩRYИHЬ™\ЬЫњЩKљY‹‹Љ™XЫЬ™њ›ЭљY\”™\ЬЫњЩRYИЧJWNВ€™XЫЬ™ќ\]Y]H™\ЬЫњЩKќ\]Y]В€Y™^\Ф[Э]Y]]™[ќ
‹њ›ЭљY\—Ь™\ЬЫњЩWШЬ™X]Y‹В€™[]Y™XЫЬ™Y€™XЫЬ™љY€XЭЬЋ€™\ЬЫњЩKњ™]љY]Щ\“X™[€›ЫN€”›ЭљY\‹РYZ[€‹€\ШЬљ\[ЫЋ€›ЭљY\‹ШYZ[€™\ЬЫњЩH™\\™YЪ]љ\ЪXљ[]H	Ь™\ЬЫњЩKќљ\ЪX›UХ\Щ\€И›Ы€€€›Щ™€џK€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™\ЬЫњЩK]Y]€‹›™^\Ф[Э]Y]]™[ќЦМHJNВ€B‚€ЫЫњЭ™^\Ф™\ЬЫњЩSX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™\ЬЫњЩ\ЧКЧ‹ЧJКIКNВ€Y€
™^\Ф™\ЬЫњЩSX]Ъ	‰€™\K›Y]ЩOOH”UТЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ[™^H‹›™^\Ф›ЭљY\”™\ЬЫњЩ\Л™љ[™[™^
][HO€][KљYOOH™^\Ф™\ЬЫњЩSX]ЪМWJNВ€Y€
[™^
H™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ™\ЬЫњЩWЫ›ЭЩ›Э[™€JNВ€‹›™^\Ф›ЭљY\”™\ЬЫњЩ\ЦЪ[™^HH›Ь›X[^™T›ЭљY\”™\ЬЫњЩJ‹‹›™^\Ф›ЭљY\”™\ЬЫњЩ\ЦЪ[™^Kњ™XЫЬ™Y]ШZ]™XY›ЩJ™\JK‹›™^\Ф›ЭљY\”™\ЬЫњЩ\ЦЪ[™^JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™\ЬЫњЩN€‹›™^\Ф›ЭљY\”™\ЬЫњЩ\ЦЪ[™^HJNВ€B‚€ЫЫњЭ™^\Ф™\ЬЫњЩTX›\ЪX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™\ЬЫњЩ\ЧКЧ‹ЧJКWЬX›\Ъ	КNВ€Y€
™^\Ф™\ЬЫњЩTX›\ЪX]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ™\ЬЫњЩHH‹›™^\Ф›ЭљY\”™\ЬЫњЩ\Л™љ[™
][HO€][KљYOOH™^\Ф™\ЬЫњЩTX›\ЪX]ЪМWJNВ€Y€
\™\ЬЫњЩJH™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ™\ЬЫњЩWЫ›ЭЩ›Э[™€JNВ€™\ЬЫњЩKќљ\ЪX›UХ\Щ\€HќYNВ€™\ЬЫњЩKќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€‹›™^\У›ЭYљXШ][ЫњЛќ[њЪYќ
›Ь›X[^™S›ЭYљXШ][ЫЉИ]N€“™^\И™]љY]И™\ЬЫњЩH™XYH‹Y\ЬШYЩN€ђH›ЭљY\‹ШYZ[€™\ЬЫњЩH\И™XYH›Ь€™]љY]Л€‹™XЫЬ™Y€™\ЬЫњЩKњ™XЫЬ™YJJNВ€Y™^\Ф[Э]Y]]™[ќ
‹њ›ЭљY\—Ь™\ЬЫњЩWЬX›\ЪY‹В€™[]Y™XЫЬ™Y€™\ЬЫњЩKњ™XЫЬ™Y€XЭЬЋ€\Щ\ЏЛ›[YH™\ЬЫњЩKњ™]љY]Щ\“X™[€›ЫN€\Щ\ЏЛњ›ЫH”›ЭљY\‹РYZ[€‹€\ШЬљ\[ЫЋ€”›ЭљY\‹ШYZ[€™\ЬЫњЩHXYHљ\ЪX›HИ\Щ\‹€›И]™HЫ[љXШ[\›XXЮK^[Y[ќЬ€[Y\™Щ[ЮHXЭ[Ы€ШШЭ\њ™Y€‚€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™\ЬЫњЩK›ЭYљXШ][ЫЋ€‹›™^\У›ЭYљXШ][ЫњЦМK]Y]€‹›™^\Ф[Э]Y]]™[ќЦМHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ^K\™\ЬЫњЩ\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™\ЬЫњЩ\О€‹›™^\Ф›ЭљY\”™\ЬЫњЩ\Л™љ[\Љ][HO€][Kќљ\ЪX›UХ\Щ\ЉKX™[€“^H™^\ИXЭ]љ]H™\ЬЫњЩ\И€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪ[ќYЬ][ЫњИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKY\\њО€‘VTЧТS•QФђUSУ—РQTT—ХTTЛ›X\
\HO€™^\Т[ќYЬ][ЫђY\\”Э]\К‹\K›ШЩ\ЬЛ™[ќЉJHJNВ€B‚€ЫЫњЭ™^\Т[ќYЬ][Ы”Э]\УX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЪ[ќYЬ][ЫњЧКЧ‹ЧJКWЬЭ]\ЙКNВ€Y€
™^\Т[ќYЬ][Ы”Э]\УX]Ъ	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Т[ќYЬ][ЫђY\\”Э]\К‹™^\Т[ќYЬ][Ы”Э]\УX]ЪМWK›ШЩ\ЬЛ™[ќЉJNВ€B‚€ЫЫњЭ™^\Т[ќYЬ][Ы“ЩЬУX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЪ[ќYЬ][ЫњЧКЧ‹ЧJКWЫЩЬЙКNВ€Y€
™^\Т[ќYЬ][Ы“ЩЬУX]Ъ	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЩЬО€‹›™^\Т[ќYЬ][Ыђ][\Л™љ[\Љ][HO€][Kљ[ќYЬ][Ы’YOOH™^\Т[ќYЬ][Ы“ЩЬУX]ЪМWH][Kќ\HOOH™^\Т[ќYЬ][Ы“ЩЬУX]ЪМWJHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШЫЫ[][љXШ][ЫњИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЫЫ[][љXШ][ЫњО€‹›™^\РЫЫ[][љXШ][ЫњЛЪ[›™[О€‘VTЧРУУSUS’PРUSУ—РТS“‘SИJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШЫЫ[][љXШ][ЫњЛЬ™\\™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭЫЫ[][љXШ][Ы€H›Ь›X[^™PЫЫ[][љXШ][ЫЉ]ШZ]™XY›ЩJ™\JJNВ€‹›™^\РЫЫ[][љXШ][ЫњЛќ[њЪYќ
ЫЫ[][љXШ][ЫЉNВ€Y™^\Ф[Э]Y]]™[ќ
‹ЫЫ[][љXШ][Ы—Ь™\\™Y‹В€XЭЬЋ€\Щ\ЏЛ›[YH”Э[™\™\Щ\€‹€›ЫN€\Щ\ЏЛњ›ЫH”Э[™\™\Щ\€‹€\ШЬљ\[ЫЋ€	ШЫЫ[][љXШ][Ы‹Ъ[›™[H™\\™YЪ]Э]\И	ШЫЫ[][љXШ][Ы‹њЭ]\ЯK€›ИЪ[[ќЩ[™ШШЭ\њ™Y€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЫЫ[][љXШ][Ы‹]Y]€‹›™^\Ф[Э]Y]]™[ќЦМHJNВ€B‚€ЫЫњЭ™^\РЫЫ[][љXШ][Ы“X]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧШЫЫ[][љXШ][ЫњЧКЧ‹ЧJКIКNВ€Y€
™^\РЫЫ[][љXШ][Ы“X]Ъ	‰€™\K›Y]ЩOOH”UТЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ[™^H‹›™^\РЫЫ[][љXШ][ЫњЛ™љ[™[™^
][HO€][KљYOOH™^\РЫЫ[][љXШ][Ы“X]ЪМWJNВ€Y€
[™^
H™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€ЫЫ[][љXШ][Ы—Ы›ЭЩ›Э[™€JNВ€‹›™^\РЫЫ[][љXШ][ЫњЦЪ[™^HH›Ь›X[^™PЫЫ[][љXШ][ЫЉ]ШZ]™XY›ЩJ™\JK‹›™^\РЫЫ[][љXШ][ЫњЦЪ[™^JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЫЫ[][љXШ][ЫЋ€‹›™^\РЫЫ[][љXШ][ЫњЦЪ[™^HJNВ€B‚€ЫЫњЭ™^\РЫЫ[][љXШ][Ыђ][\X]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧШЫЫ[][љXШ][ЫњЧКЧ‹ЧJКWШ][\	КNВ€Y€
™^\РЫЫ[][љXШ][Ыђ][\X]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭЫЫ[][љXШ][Ы€H‹›™^\РЫЫ[][љXШ][ЫњЛ™љ[™
][HO€][KљYOOH™^\РЫЫ[][љXШ][Ыђ][\X]ЪМWJNВ€Y€
XЫЫ[][љXШ][ЫЉH™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€ЫЫ[][љXШ][Ы—Ы›ЭЩ›Э[™€JNВ€ЫЫ[][љXШ][Ы‹њЭ]\ИHЫЫ[][љXШ][Ы‹Ъ[›™[OOHљ[—Ш\Ы›ЭYљXШ][Ы€€Ињ™\\™Y€€ЫЫ[][љXШ][Ы‹ЫЫњЩ[ќЫЫ™љ\›YYИ›ШЪЩYЫZ\ЬЪ[™ЧШЫЫ™љYИ€€›ШЪЩYЫZ\ЬЪ[™ЧШЫЫњЩ[ќЋВ€ЫЫ[][љXШ][Ы‹ќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€Y™^\Ф[Э]Y]]™[ќ
‹ЫЫ[][љXШ][Ы—Ш][\Ш›ШЪЩY‹В€XЭЬЋ€\Щ\ЏЛ›[YH”Э[™\™\Щ\€‹€›ЫN€\Щ\ЏЛњ›ЫH”Э[™\™\Щ\€‹€\ШЬљ\[ЫЋ€	ШЫЫ[][љXШ][Ы‹Ъ[›™[H][\Э^YY	ШЫЫ[][љXШ][Ы‹њЭ]\ЯK€›ИЩ[ќЫZ[HШ\ИXYK€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЫЫ[][љXШ][Ы‹Щ[ќ€[ЩKЭ]\О€ЫЫ[][љXШ][Ы‹њЭ]\Л]Y]€‹›™^\Ф[Э]Y]]™[ќЦМHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ›ЭYљXШ][ЫњИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK›ЭYљXШ][ЫњО€‹›™^\У›ЭYљXШ][ЫњИJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ›ЭYљXШ][ЫњИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ›ЭYљXШ][Ы€H›Ь›X[^™S›ЭYљXШ][ЫЉ]ШZ]™XY›ЩJ™\JJNВ€‹›™^\У›ЭYљXШ][ЫњЛќ[њЪYќ
›ЭYљXШ][ЫЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK›ЭYљXШ][Ы€JNВ€B‚€ЫЫњЭ™^\У›ЭYљXШ][Ы”™XYX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЫ›ЭYљXШ][ЫњЧКЧ‹ЧJКWЬ™XY	КNВ€Y€
™^\У›ЭYљXШ][Ы”™XYX]Ъ	‰€™\K›Y]ЩOOH”UТЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ›ЭYљXШ][Ы€H‹›™^\У›ЭYљXШ][ЫњЛ™љ[™
][HO€][KљYOOH™^\У›ЭYљXШ][Ы”™XYX]ЪМWJNВ€Y€
[›ЭYљXШ][ЫЉH™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€››ЭYљXШ][Ы—Ы›ЭЩ›Э[™€JNВ€›ЭYљXШ][Ы‹њ™XYHќYNВ€›ЭYљXШ][Ы‹ќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK›ЭYљXШ][Ы€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫЭ]ЫЫY\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЭ]ЫЫY\О€‹›™^\УЭ]ЫЫY\ИJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫЭ]ЫЫY\И€	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭЭ]ЫЫYHH›Ь›X[^™SЭ]ЫЫYJ]ШZ]™XY›ЩJ™\JJNВ€‹›™^\УЭ]ЫЫY\Лќ[њЪYќ
Э]ЫЫYJNВ€Y™^\Ф[Э]Y]]™[ќ
‹›Э]ЫЫYWЬ™XЫЬ™Y‹В€XЭЬЋ€\Щ\ЏЛ›[YH”Э[™\™\Щ\€‹€›ЫN€\Щ\ЏЛњ›ЫH”Э[™\™\Щ\€‹€\ШЬљ\[ЫЋ€Э]ЫЫYH™XЫЬ™Y\И	ЫЭ]ЫЫYK›Э]ЫЫYU\_K€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЭ]ЫЫYK]Y]€‹›™^\Ф[Э]Y]]™[ќЦМHJNВ€B‚€ЫЫњЭ™^\РШ\ЩSЭ]ЫЫY\УX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧШШ\Щ\ЧКЧ‹ЧJКWЫЭ]ЫЫY\ЙКNВ€Y€
™^\РШ\ЩSЭ]ЫЫY\УX]Ъ	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЭ]ЫЫY\О€‹›™^\УЭ]ЫЫY\Л™љ[\Љ][HO€][KШ\ЩRYOOH™^\РШ\ЩSЭ]ЫЫY\УX]ЪМWJHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШ[[]XЬЛЬЭ[[X\ћH€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Р[[]XЬФЭ[[X\ћJЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ][Ъ\™XY[™\ЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\У][Ъ™XY[™\ЬК‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ][ЪX›ШЪЩ\њИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€[њЭ\™S™^\У][Ъ›ШЪЩ\њК‹›ШЩ\ЬЛ™[ќЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK›ШЪЩ\њО€‹›™^\У][Ъ›ШЪЩ\њИJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ][ЪX›ШЪЩ\њИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ›ЭИH™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭ›ШЪЩ\€HВ€Y€›ЩKљYЬћ\Лњ[™ЫUURQ

K€›ШЪЩ\•\N€Ш[љ]^™T[Э^
›ЩK›ШЪЩ\•\Hњ›ЩXЭ[Ы—Ь™XY[™\ЬИ‹L
K€Щ]™\љ]N€Ш[љ]^™T[Э^
›ЩKњЩ]™\љ]H›YY][H‹Њ
K€]N€Ш[љ]^™T[Э^
›ЩKќ]H“™^\И][Ъ›ШЪЩ\€‹N
K€\ШЬљ\[ЫЋ€Ш[љ]^™T[Э^
›ЩK™\ШЬљ\[Ы€ђH›ЩXЭ[Ы€ЫЫ™][Ы€\И›ЭЫЫ\]K€‹М
K€Э]\О€Ш[љ]^™T[Э^
›ЩKњЭ]\И›Ь[€‹
K€™\]Z\™YXЭ[ЫЋ€Ш[љ]^™T[Э^
›ЩKњ™\]Z\™YXЭ[Ы€”™\ЫЫ™H™Y›Ь™HX›XИ][Ъ€‹L
K€™[]Y[ќYЬ][ЫЋ€Ш[љ]^™T[Э^
›ЩKњ™[]Y[ќYЬ][Ы€€‹LЊ
K€Ь™X]Y]€›ЭЛ€\]Y]€›ЭВ€NВ€‹›™^\У][Ъ›ШЪЩ\њЛќ[њЪYќ
›ШЪЩ\ЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK›ШЪЩ\€JNВ€B‚€ЫЫњЭ™^\У][Ъ›ШЪЩ\“X]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЫ][ЪX›ШЪЩ\њЧКЧ‹ЧJКIКNВ€Y€
™^\У][Ъ›ШЪЩ\“X]Ъ	‰€™\K›Y]ЩOOH”UТЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ›ШЪЩ\€H‹›™^\У][Ъ›ШЪЩ\њЛ™љ[™
][HO€][KљYOOH™^\У][Ъ›ШЪЩ\“X]ЪМWJNВ€Y€
X›ШЪЩ\ЉH™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€›ШЪЩ\—Ы›ЭЩ›Э[™€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€›ШЪЩ\‹њЭ]\ИHШ[љ]^™T[Э^
›ЩKњЭ]\И›ШЪЩ\‹њЭ]\Л
NВ€›ШЪЩ\‹њ™\]Z\™YXЭ[Ы€HШ[љ]^™T[Э^
›ЩKњ™\]Z\™YXЭ[Ы€›ШЪЩ\‹њ™\]Z\™YXЭ[Ы‹L
NВ€›ШЪЩ\‹ќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK›ШЪЩ\€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫYШ[\ШY™]K\YЩ\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKYЩ\О€‹›™^\УYШ[ШY™]TYЩ\ИJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ[™ЭXYЩ\ЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\У[™ЭXYЩTЭ]\К‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›Щљ[KЫ[™ЭXYЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[™ЭXYЩHH‘VTЧУS‘ХPQСWФ‘QТTХ–K™љ[™
][HO€][KЫЩHOOH›ЩK›[™ЭXYЩPЫЩH][K›X™[ќУЭЩ\ђШ\ЩJ
HOOHЭљ[™К›ЩK›[™ЭXYЩH€ЉKќУЭЩ\ђШ\ЩJ
JH‘VTЧУS‘ХPQСWФ‘QТTХ–VМNВ€ЫЫњЭ›Щљ[HH‹›™^\Ф[Э›Щљ[\ЦМNВ€›Щљ[Kњ™Y™\њ™Y[™ЭXYЩHH[™ЭXYЩK›X™[В€›Щљ[K›[™ЭXYЩPЫЩHH[™ЭXYЩKЫЩNВ€›Щљ[Kќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€Y™^\Ф[Э]Y]]™[ќ
‹›[™ЭXYЩWЬ™Y™\™[ЩWЭ\]Y‹В€XЭЬЋ€\Щ\ЏЛ›[YH›Щљ[K™\Ь^S[YH”Э[™\™\Щ\€‹€›ЫN€\Щ\ЏЛњ›ЫH”Э[™\™\Щ\€‹€\ШЬљ\[ЫЋ€[™ЭXYЩH™Y™\™[ЩHЩ]И	Ы[™ЭXYЩK›X™[K€ќ[›ЩXЭ[Ы€[њЫ][Ы€™[XZ[њИ™XY[™\ЬЛYШ]Y€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK[™ЭXYЩK›Щљ[K]Y]€‹›™^\Ф[Э]Y]]™[ќЦМHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭ\ШYЬ™XY[™\ЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Х\ШY™XY[™\ЬК‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫX\љЩ]XЩKЬ^[Y[ќYШ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\УX\љЩ]XЩT^[Y[ќШ]\К‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЩ[Y\™Щ[ЮKЪYЪ\љ\ЪЛYШ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\С[Y\™Щ[ЮRYЪљ\ЪСШ]\КЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШZKX[њЭЩ\‹YЫЭ™\›[ЩH€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\РZP[њЭЩ\‘ЫЭ™\›[ЩJЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЩ[™Ш[YKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\С[™Ш[YTЭ]\К‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪЫ›ЭЫYЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\ТЫ›ЭЫYЩT›ЭљY\”Э]\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ]™KZЫ›ЭЫYЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\ТЫ›ЭЫYЩT›ЭљY\”Э]\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫЬ[ZK[]]™KЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\УЬ[ђZS]]™TЭ]\К›ШЩ\ЬЛ™[ќЉKВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫЬ[ZK[]]™KЭЫЫ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭЫЫ\Щ\€H\Щ\€
‹ќ\Щ\њИЧJK™љ[™
][HO€][Kњ›ЫHOOH”Э[™\™\Щ\€ЉH
‹ќ\Щ\њИЧJVМHВ€Y€›Ь[ZK[]]™K[ШШ[]ЫЫ]\Щ\€‹€[YN€“™^\ИШШ[ЫЫ\Щ\€‹€›ЫN€”Э[™\™\Щ\€‹€[™ЭXYЩN€™[€‚€NВ€Y€
XШ[•\ЩJЫЫ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬ[ђRK[]]™HЫЫИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫЫ[YHHЭљ[™К›ЩK›[YH›ЩKќЫЫ[YH›™^\ЧЩЩ[™\[ШЫЫќ™\њШ][Ы€ЉKќљ[J
NВ€Y€
[™^\УЬ[ђZS]]™UЫЫШЪ[X\К
KњЫЫYJЫЫO€ЫЫ›[YHOOHЫЫ[YJJHВ€™]\›€Щ[™
™\ЛВ€ЪО€[ЩK€\њ›ЬЋ€•[њЭ\ЬќYЬ[ђRK[]]™H™^\ИЫЫ€‹€Э\ЬќYЫЫО€™^\УЬ[ђZS]]™UЫЫШЪ[X\К
K›X\
ЫЫO€ЫЫ›[YJK€›ФЩXЬ™][Y\Ф™]\›™Y€ќYB€JNВ€B€ЫЫњЭ™\Э[H]ШZ]^XЭ]S™^\УЬ[ђZS]]™UЫЫ
‹ЫЫ\Щ\‹ЫЫ[YK›ЩK\™Э[Y[ќИ›ЩKВ€ЫЬњ™[][Ы’Y€›ЩKЫЬњ™[][Ы’Y€ЫЫ[X[™€›ЩKЫЫ[X[™›ЩK\™Э[Y[ќПЛЫЫ[X[™€‹€[™ЭXYЩN€›ЩK›[™ЭXYЩH›ЩK\™Э[Y[ќПЛ›[™ЭXYЩHЫЫ\Щ\‹›[™ЭXYЩH™[€‹€Э]][ЩN€›ЩK›Э]][ЩH€‚€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[В€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЩ[XZ[ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\С[XZ[›ЭљY\”Э]\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШЫЫ[][љXШ][ЫњЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\РЫЫ[][љXШ][ЫњФ›ЭљY\”Э]\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭ[ZX[ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭЭ]\ИH™^\Х[ZX[›ЭљY\‹њЭ]\К›ШЩ\ЬЛ™[ќЉNВ€Э]\Л™[XZ[›ЭљY\ђ]Z[Xљ[]HH™^\С[XZ[›ЭљY\”Э]\К›ШЩ\ЬЛ™[ќЉNВ€Э]\ЛЫЫ[][љXШ][ЫњФ›ЭљY\ђ]Z[Xљ[]HH™^\РЫЫ[][љXШ][ЫњФ›ЭљY\”Э]\К›ШЩ\ЬЛ™[ќЉNВ€™]\›€Щ[™
™\ЛЊЭ]\КNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ\›XXЮKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Ф›ЭљY\ђЫЫЬ™[][Ы”Э]\Књ\›XXЮH‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ[Шљ[KXЫ[љXЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Ф›ЭљY\ђЫЫЬ™[][Ы”Э]\К›[Шљ[KXЫ[љXИ‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪЫ›ЭЫYЩKЭќ\ЭY\ЫЭ\Щ\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKШ]YЫЬљY\О€™^\ТЫ›ЭЫYЩTЫЭ\ЩS\Э

KШY™]N€•ќ\ЭYЫЭ\ЩH™Y™\™[Щ\ИЭZYH™]љY][€™^\ИЭ[ЪЭЬИЪ]][ЫњИ[™ШY™]H[Z]И›Ь€\Щ\€™]љY]Л€€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪЫ›ЭЫYЩKЬЫЭ\ЩK\ЫXЮH€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKШ]YЫЬљY\О€™^\ТЫ›ЭЫYЩTЫЭ\ЩS\Э

Kќ[\О€И“›ИZЩHT“И‹“›ИXњљXШ]YЫЭ\ЩH[Y\И‹‘\ШX›Y[ЩH™]\›њИ™\›ИЪ]][ЫњИ‹ђќZ[Z[€ЭZY[ЩH\ИX™[Y\ИќZ[Z[€‹”™]љY]™Y[њЭЩ\њИ]\ЭЪ]H™]љY]™YЫЭ\Щ\И—HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪЫ›ЭЫYЩKЬ™XY[™\ЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\ТЫ›ЭЫYЩT™XY[™\ЬК‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪ[њЭ]][Ы[Y]љY[ЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Т[њЭ]][Ы[]љY[ЩTЭ]\К‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪ[ќ[YЩ[ЩKШ\ЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\Т[ќ[YЩ[ЩP\ЪК‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪЫ›ЭЫYЩKЪ\ЭЬћH€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€]Y\љY\О€‹›™^\ТЫ›ЭЫYЩT]Y\љY\ЛњЫXЩJL
K€Ш]™Y™\Э[О€‹›™^\ТЫ›ЭЫYЩTШ]™Y™\Э[ЛњЫXЩJL
K€™]љY]ФЭ[[X\љY\О€‹›™^\ТЫ›ЭЫYЩT™]љY]ФЭ[[X\љY\ЛњЫXЩJL
K€[њЭ]][Ы[]љY[ЩT™XЩZ\О€‹›™^\Т[њЭ]][Ы[]љY[ЩT™XЩZ\ЛњЫXЩJL
B€JNВ€B‚€ЫЫњЭ™^\ТЫ›ЭЫYЩR\ЭЬћQ]Z[X]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЪЫ›ЭЫYЩWЪ\ЭЬћWКЧ‹ЧJКIКNВ€Y€
™^\ТЫ›ЭЫYЩR\ЭЬћQ]Z[X]Ъ	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭYHШ[љ]^™T[Э^
XЫЩUT’PЫЫ\Ы™[ќ
™^\ТЫ›ЭЫYЩR\ЭЬћQ]Z[X]ЪМWH€ЉKLЊ
NВ€ЫЫњЭ]Y\ћHH‹›™^\ТЫ›ЭЫYЩT]Y\љY\Л™љ[™
][HO€][KљYOOHY
NВ€Y€
\]Y\ћJH™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€љЫ›ЭЫYЩWЪ\ЭЬћWЫ›ЭЩ›Э[™€JNВ€ЫЫњЭШ]™Y™\Э[ИH‹›™^\ТЫ›ЭЫYЩTШ]™Y™\Э[Л™љ[\Љ][HO€][Kњ]Y\ћRYOOHY
NВ€ЫЫњЭ™]љY]ФЭ[[X\љY\ИH‹›™^\ТЫ›ЭЫYЩT™]љY]ФЭ[[X\љY\Л™љ[\Љ][HO€][K›ЬљYЪ[[]Y\Э[Ы€OOH]Y\ћKњ]Y\Э[Ы”Э[[X\ћH][Kњ]Y\ћRYOOHY
NВ€ЫЫњЭ›ЭљY\”™\]Y\ЭИH‹›™^\Ф›ЭљY\”]Ш^T™\]Y\ЭЛ™љ[\Љ][HO€][Kќ\Щ\”]Y\Э[Ы€OOH]Y\ћKњ]Y\Э[Ы”Э[[X\ћH][KљЫ›ЭЫYЩT]Y\ћRYOOHY
NВ€ЫЫњЭ[њЭ]][Ы[]љY[ЩT™XЩZ\ИH‹›™^\Т[њЭ]][Ы[]љY[ЩT™XЩZ\Л™љ[\Љ][HO€][Kњ™XЩZ\YOOH]Y\ћK™]љY[ЩT™XЩZ\Y][Kњ]Y\Э[Ы€OOH]Y\ћKњ]Y\Э[Ы”Э[[X\ћJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€]Y\ћK€Ш]™Y™\Э[Л€™]љY]ФЭ[[X\љY\Л€›ЭљY\”™\]Y\ЭЛ€[њЭ]][Ы[]љY[ЩT™XЩZ\Л€›С^\›[XЭ[ЫЋ€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪЫ›ЭЫYЩKШЫ\ЬЪYћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫ\ЬЪYљXШ][Ы€H™^\ТЫ›ЭЫYЩPЫ\ЬЪYљY\Љ›ЩKњ]Y\Э[Ы€›ЩKЫЫ[X[™›ЩKњ]Y\ћH€‹›ЩKЫЫќ^ЯJNВ€Y™^\Ф[Э]Y]]™[ќ
‹љЫ›ЭЫYЩWШЫ\ЬЪYљXШ][Ы—ШЫЫ\]Y‹В€XЭЬЋ€\Щ\ЏЛ›[YH”Э[™\™\Щ\€‹€›ЫN€\Щ\ЏЛњ›ЫH”Э[™\™\Щ\€‹€[ЩN€Ы\ЬЪYљXШ][Ы‹Ш]YЫЬћK€\ШЬљ\[ЫЋ€Ы›ЭЫYЩHЫ\ЬЪYљXШ][Ы€ЫЫ\]Y›Ь€	ШЫ\ЬЪYљXШ][Ы‹Ш]YЫЬћSX™[K€™]љY][™YYY€	ШЫ\ЬЪYљXШ][Ы‹њ™]љY][™YYYИћY\И€€››ИџK€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЫ\ЬЪYљXШ][Ы‹]Y]€‹›™^\Ф[Э]Y]]™[ќЦМHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪЫ›ЭЫYЩKЬ]Y\ћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\ТЫ›ЭЫYЩT]Y\ћJ‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ]™KZЫ›ЭЫYЩKЬ]Y\ћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\У]™RЫ›ЭЫYЩP[[Щ\Ф]Y\ћJ‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ]™KZЫ›ЭЫYЩKЭ\Э€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\У]™RЫ›ЭЫYЩT›ЭљY\•\Э
‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЩ[XZ[ЬЩ[™\XЪЩ]€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\С[XZ[Щ[™XЪЩ]
‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШЫЫ[][љXШ][ЫњЛЬЩ[™[Y\ЬШYЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\РЫЫ[][љXШ][ЫњФЩ[™Y\ЬШYЩJ‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ\›XXЮKШЬ™X]K\™Y™\њ[€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[HЬ™X]S™^\Ф›ЭљY\ђЫЫЬ™[][Ы”XЪЩ]
‹њ\›XXЮH‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ\›XXЮKЬЩ[™\™Y™\њ[€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]Щ[™™^\Ф›ЭљY\ђЫЫЬ™[][Ы”XЪЩ]
‹њ\›XXЮH‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ[Шљ[KXЫ[љXЛШЬ™X]K\™\]Y\Э€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[HЬ™X]S™^\Ф›ЭљY\ђЫЫЬ™[][Ы”XЪЩ]
‹›[Шљ[KXЫ[љXИ‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫ[Шљ[KXЫ[љXЛЬЩ[™\™\]Y\Э€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]Щ[™™^\Ф›ЭљY\ђЫЫЬ™[][Ы”XЪЩ]
‹›[Шљ[KXЫ[љXИ‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭ[ZX[ШЬ™X]KY[ЫЭ[ќ\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\Х[ZX[›ЭљY\‹Ь™X]Q[ЫЭ[ќ\Љ‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭ[ZX[ШЬ™X]K]љY[Л\›ЫЫH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\Х[ZX[›ЭљY\‹Ь™X]UљY[Ф›ЫЫJ‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭ[ZX[Ы›ЭYћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\\™YH™^\Х[ZX[›ЭљY\‹њ™\\™S›ЭYљXШ][ЫЉ‹›ЩK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€]›ЭљY\”™\Э[Hќ[В€Y€
™\\™Y›ЪИ	‰€™\\™YњЭ]\ИOOHњ™\\™YЉHВ€ЫЫњЭЪ[›™[H™\\™YЪ[›™[В€Y€
Ъ[›™[OOH™[XZ[ЉHВ€›ЭљY\”™\Э[H]ШZ]™^\С[XZ[Щ[™XЪЩ]
‹В€О€›ЩKќИ›ЩKЫЫќXЭ[YH€‹€ЭXљ™XЭ€›ЩKњЭXљ™XЭ“™^\Иљ\ќX[Ш\™HXЪЩ]‹€XЪЩ]Y€™\\™Y™[ЫЭ[ќ\’Y€ЫXZ[Ћ€ќ[ZX[‹€Y\ЬШYЩN€™\\™Y›Y\ЬШYЩK€ЫЫ™љ\›YY€›ЩKЫЫ™љ\›YYOOHќYK€ЫЫњЩ[ќ€›ЩKЫЫњЩ[ќФЪ\™HOOHќYB€K\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€H[ЩHY€
Ъ[›™[OOHњЫ\И€Ъ[›™[OOHќЪ]Ш\ЉHВ€›ЭљY\”™\Э[H]ШZ]™^\РЫЫ[][љXШ][ЫњФЩ[™Y\ЬШYЩJ‹В€Ъ[›™[€™XЪ\Y[ќ€›ЩKњ™XЪ\Y[ќ›ЩKЫЫќXЭ[YH€‹€XЪЩ]Y€™\\™Y™[ЫЭ[ќ\’Y€ЫXZ[Ћ€ќ[ZX[‹€Y\ЬШYЩN€™\\™Y›Y\ЬШYЩK€ЫЫ™љ\›YY€›ЩKЫЫ™љ\›YYOOHќYK€ЫЫњЩ[ќ€›ЩKЫЫњЩ[ќФЪ\™HOOHќYB€K\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€B€B€ЫЫњЭ™\Э[HИ‹‹њ™\\™Y›ЭљY\”™\Э[NВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭ[ZX[Щ›ЫЭЛ]\€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Х[ZX[›ЭљY\‹Ь™X]Q›ЫЭХ\
‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЩЫШ[XYЬљXЭ[\™KЪ[ќ[YЩ[ЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\СЫШ[YЬљXЭ[\™R[ќ[YЩ[ЩJ‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЩЫШ[]Z[љ[™Л]ЫЬљЩ›ЬЩKЩ[™Ъ[™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\СЫШ[Z[љ[™ХЫЬљЩ›ЬЩQ[™Ъ[™J‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЩЫШ[XЪ›ЫљXЛXШ\™KZX[Щ[™Ъ[™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\СЫШ[Ъ›ЫљXРШ\™RX[[™Ъ[™J‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЩЫШ[\›ЭљY\‹XXШЩ\ЬЛШњљYЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\СЫШ[›ЭљY\ђXШЩ\ЬРњљYЩJ‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЩЫШ[XЫЫ[][љXШ][ЫњЛЩ[™Ъ[™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\СЫШ[ЫЫ[][љXШ][ЫњС[™Ъ[™J‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЩЫШ[[X\љЩ]XЩK[ЩЪ\ЭXЬЛЩ[™Ъ[™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\СЫШ[X\љЩ]XЩSЩЪ\ЭXЬС[™Ъ[™J‹]ШZ]™XY›ЩJ™\JK\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪЫ›ЭЫYЩKЬШ]™K\™\Э[€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\ТЫ›ЭЫYЩTШ]™T™\Э[
‹]ШZ]™XY›ЩJ™\JK\Щ\ЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪЫ›ЭЫYЩKШ]XЪ]Л\™XЫЬ™€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\ТЫ›ЭЫYЩP]XЪФ™XЫЬ™
‹]ШZ]™XY›ЩJ™\JK\Щ\ЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪЫ›ЭЫYЩKЬ™\\™K\™]љY]Л\Э[[X\ћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\ТЫ›ЭЫYЩT™\\™T™]љY]ФЭ[[X\ћJ‹]ШZ]™XY›ЩJ™\JK\Щ\ЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪ[ќYЬ][ЫњЛЫЩЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK][\О€‹›™^\Т[ќYЬ][Ыђ][\ИJNВ€B‚€ЫЫњЭ™^\Т[ќYЬ][Ы”™\\™SX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЪ[ќYЬ][ЫњЧКЧ‹ЧJКWЬ™\\™IКNВ€Y€
™^\Т[ќYЬ][Ы”™\\™SX]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™\\™R[ќYЬ][Ыђ][\
‹™^\Т[ќYЬ][Ы”™\\™SX]ЪМWK]ШZ]™XY›ЩJ™\JK\Щ\ЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€ЫЫњЭ™^\Т[ќYЬ][Ыђ][\X]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЪ[ќYЬ][ЫњЧКЧ‹ЧJКWШ][\	КNВ€Y€
™^\Т[ќYЬ][Ыђ][\X]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™\\™R[ќYЬ][Ыђ][\
‹™^\Т[ќYЬ][Ыђ][\X]ЪМWK]ШZ]™XY›ЩJ™\JK\Щ\ЉNВ€Y€
\™\Э[›ЪКH™]\›€Щ[™
™\Л™\Э[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИ‹‹њ™\Э[Щ[ќ€[ЩKЭ]\О€њ™\\™YЫ›ЭЬЩ[ќ€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYZ[‹ЫЬ\][ЫњИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Ф›ЩXЭ[ЫђYZ[“Ь\][ЫњК‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬљ]XЮKЬЭ[[X\ћH€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Ф›ЩXЭ[Ы”љ]XЮTЭ[[X\ћJЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬљ]XЮKЩ^Ьќ\™\]Y\Э€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\]Y\Э][HH™^\РЬ™X]Q^Ьќ[]T™\]Y\Э
‹]ШZ]™XY›ЩJ™\JK\Щ\‹™^ЬќЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™\]Y\Э€™\]Y\Э][K]Y]€‹›™^\Ф[Э]Y]]™[ќЦМHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬљ]XЮKЩ[]K\™\]Y\Э€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\]Y\Э][HH™^\РЬ™X]Q^Ьќ[]T™\]Y\Э
‹]ШZ]™XY›ЩJ™\JK\Щ\‹™[]HЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™\]Y\Э€™\]Y\Э][K]Y]€‹›™^\Ф[Э]Y]]™[ќЦМHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШЫЫњЩ[ќZ\ЭЬћH€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЫЫњЩ[ќ]™[ќО€‹›™^\Ф[ЭЫЫњЩ[ќ]™[ќЛ]Y]]™[ќО€‹›™^\Ф[Э]Y]]™[ќИJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШXШЫЭ[ќ€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKXШЫЭ[ќ€‹›™^\Ф[Э›Щљ[\ЦМK›Ы\О€‘VTЧФ“СPХSУ—Ф“УTЛ]][ЩN€›ШШ[›ЭЭ\HXШЫЭ[ќ€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›Щљ[H€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK›Щљ[N€‹›™^\Ф[Э›Щљ[\ЦМKШШ[[[Ф›Щљ[N€ќYHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›Щљ[H€	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ›ЭИH™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭ›Щљ[HH‹›™^\Ф[Э›Щљ[\ЦМHИY€њЭ[™\™]\Щ\‹[ШШ[‹Ь™X]Y]€›ЭИNВ€Шљ™XЭ\ЬЪYЫЉ›Щљ[KВ€\Ь^S[YN€Ш[љ]^™T[Э^
›ЩK™\Ь^S[YH›Щљ[K™\Ь^S[YH\Щ\ЏЛ›[YH”Э[™\™\Щ\€‹LЊ
K€›ЫN€Ш[љ]^™T[Э^
›ЩKњ›ЫH›Щљ[Kњ›ЫH”Э[™\™\Щ\€‹
K€™Y™\њ™Y[™ЭXYЩN€Ш[љ]^™T[Э^
›ЩKњ™Y™\њ™Y[™ЭXYЩH›Щљ[Kњ™Y™\њ™Y[™ЭXYЩH‘[™Ы\Ъ‹
K€™YЪ[ЫЋ€Ш[љ]^™T[Э^
›ЩKњ™YЪ[Ы€›Щљ[Kњ™YЪ[Ы€€‹LЊ
K€ЫЫќXЭ™Y™\™[ЩTXЩZЫ\Ћ€Ш[љ]^™T[Э^
›ЩKЫЫќXЭ™Y™\™[ЩTXЩZЫ\€›Щљ[KЫЫќXЭ™Y™\™[ЩTXЩZЫ\€“›ЭЫЫ›™XЭY‹LЊ
K€ЫЫњЩ[ќ™Y™\™[ЩTXЩZЫ\Ћ€Ш[љ]^™T[Э^
›ЩKЫЫњЩ[ќ™Y™\™[ЩTXЩZЫ\€›Щљ[KЫЫњЩ[ќ™Y™\™[ЩTXЩZЫ\€ђ\ЪИ™Y›Ь™H™]љY]И]Y]YH‹MЊ
K€\]Y]€›ЭЛ€ШШ[[[Ф›Щљ[N€ќYB€JNВ€‹›™^\Ф[Э›Щљ[\ЦМHH›Щљ[NВ€Y™^\Ф[Э]Y]]™[ќ
‹њ›Щљ[WЭ\]Y‹В€XЭЬЋ€›Щљ[K™\Ь^S[YK€›ЫN€›Щљ[Kњ›ЫK€\ШЬљ\[ЫЋ€“ШШ[[Э›Щљ[H›Э[™][Ы€\]Y€›И]][ќXШ][Ы€Ь€ЫЫ\X[ЩHЫZ[HШ\ИXYK€‚€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK›Щљ[K]Y]€‹›™^\Ф[Э]Y]]™[ќЦМHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ™XЫЬ™И€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™XЫЬ™О€‹›™^\Ф[Э™XЫЬ™Л™XЫЬ™\\О€‘VTЧФSХФ‘PУФ‘ХTTЛЭ]\Щ\О€‘VTЧФSХФ‘PУФ‘ФХUTСTИJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ™XЫЬ™И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™XЫЬ™HќZ[™^\Ф[Э™XЫЬ™
‹]ШZ]™XY›ЩJ™\JK\Щ\ЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™XЫЬ™]Y]€‹›™^\Ф[Э]Y]]™[ќЦМKЭ]\О€™YќЬШ]™Y€JNВ€B‚€ЫЫњЭ™^\Ф™XЫЬ™X]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™XЫЬ™ЧКЧ‹ЧJКIКNВ€Y€
™^\Ф™XЫЬ™X]Ъ	‰€™\K›Y]ЩOOH”UТЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€ЫЫњЭ™XЫЬ™Hљ[™™^\Ф[Э™XЫЬ™
‹™^\Ф™XЫЬ™X]ЪМWJNВ€Y€
\™XЫЬ™
H™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ™XЫЬ™Ы›ЭЩ›Э[™€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€Y€
›ЩKњЭ]\И	‰€‘VTЧФSХФ‘PУФ‘ФХUTСTЛљ[ЫY\К›ЩKњЭ]\КJH™XЫЬ™њЭ]\ИH›ЩKњЭ]\ОВ€Y€
›ЩKњ™]љY]ФЭ]\КH™XЫЬ™њ™]љY]ФЭ]\ИHШ[љ]^™T[Э^
›ЩKњ™]љY]ФЭ]\Л
NВ€Y€
›ЩKњЭ[[X\ћJH™XЫЬ™њЭ[[X\ћHHШ[љ]^™T[Э^
›ЩKњЭ[[X\ћKL
NВ€Y€
›ЩKњ^[ШY
H™XЫЬ™њ^[ШYHИ‹‹Љ™XЫЬ™њ^[ШYЯJK‹‹њШ[љ]^™T[Э^[ШY
›ЩKњ^[ШY
HNВ€™XЫЬ™ќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭ]Y]HY™^\Ф[Э]Y]]™[ќ
‹њ™XЫЬ™Э\]Y‹В€™[]Y™XЫЬ™Y€™XЫЬ™љY€[ЩN€™XЫЬ™њЫЭ\ЩS[ЩK€XЭЬЋ€\Щ\ЏЛ›[YH™XЫЬ™њ›Щљ[SX™[€\ШЬљ\[ЫЋ€	Ь™XЫЬ™ќ\_H\]YШШ[K€›И^\›[XЭ[Ы€ШШЭ\њ™Y€JNВ€™XЫЬ™]Y]™YњИHЛ‹‹Љ™XЫЬ™]Y]™YњИЧJK]Y]љYNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™XЫЬ™]Y]JNВ€B‚€ЫЫњЭ™^\Ф™XЫЬ™Э[[X\ћSX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™XЫЬ™ЧКЧ‹ЧJКWЬЭ[[X\ћIКNВ€Y€
™^\Ф™XЫЬ™Э[[X\ћSX]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€ЫЫњЭ™XЫЬ™Hљ[™™^\Ф[Э™XЫЬ™
‹™^\Ф™XЫЬ™Э[[X\ћSX]ЪМWJH]\Э™^\Ф[Э™XЫЬ™
ЉNВ€Y€
\™XЫЬ™
H™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ™XЫЬ™Ы›ЭЩ›Э[™€JNВ€™XЫЬ™њЭ]\ИH™XЫЬ™њЭ]\ИOOH™Yќ€И™Yќ€€™XЫЬ™њЭ]\ОВ€™XЫЬ™ќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭ]Y]HY™^\Ф[Э]Y]]™[ќ
‹њЭ[[X\ћWЩЩ[™\]Y‹В€™[]Y™XЫЬ™Y€™XЫЬ™љY€[ЩN€™XЫЬ™њЫЭ\ЩS[ЩK€XЭЬЋ€\Щ\ЏЛ›[YH™XЫЬ™њ›Щљ[SX™[€\ШЬљ\[ЫЋ€	Ь™XЫЬ™ќ\_H›ЭљY\‹\™XYHЭ[[X\ћH™\\™YШШ[K€›И™XЫЬ™Ш\ИЩ[ќ^\›[K€JNВ€™XЫЬ™]Y]™YњИHЛ‹‹Љ™XЫЬ™]Y]™YњИЧJK]Y]љYNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™XЫЬ™Э[[X\ћN€™XЫЬ™њЭ[[X\ћK]Y]›ЭљY\”™XYN€ќYK›С^\›[XЭ[ЫЋ€ќYHJNВ€B‚€ЫЫњЭ™^\Ф™XЫЬ™ЫЫњЩ[ќX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™XЫЬ™ЧКЧ‹ЧJКWШЫЫњЩ[ќ	КNВ€Y€
™^\Ф™XЫЬ™ЫЫњЩ[ќX]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€ЫЫњЭ™XЫЬ™Hљ[™™^\Ф[Э™XЫЬ™
‹™^\Ф™XЫЬ™ЫЫњЩ[ќX]ЪМWJH]\Э™^\Ф[Э™XЫЬ™
ЉNВ€Y€
\™XЫЬ™
H™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ™XЫЬ™Ы›ЭЩ›Э[™€JNВ€ЫЫњЭ›ЭИH™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭЫЫњЩ[ќHВ€Y€Ьћ\Лњ[™ЫUURQ

K€™XЫЬ™Y€™XЫЬ™љY€ЫЫњЩ[ќ\N€›ШШ[Ь™]љY]ЧЬ]Y]YH‹€[Y\Э[\€›ЭЛ€›Щљ[RY€™XЫЬ™њ›Щљ[RY€›Щљ[SX™[€™XЫЬ™њ›Щљ[SX™[\Щ\ЏЛ›[YH”Э[™\™\Щ\€‹€[ЩN€™XЫЬ™њЫЭ\ЩS[ЩK€Э[[X\ћN€“™^\ИШ[€™\\™H\ИЭ[[X\ћH›Ь€™]љY]Л€\ИЩ\И›ЭЩ[™]ИH]™H›ЭљY\€[›\ЬИH›ЭљY\€ЫЫ›™XЭ[Ы€\ИЫЫ™љYЭ\™Y€™]љY]И[Э\€[™›Ь›X][Ы€™Y›Ь™HЫЫќ[ќZ[™Л€‹€ШШ[[[У[Z]][ЫЋ€ќYB€NВ€™XЫЬ™ЫЫњЩ[ќЭ]\ИHЫЫ™љ\›YYЋВ€™XЫЬ™ќ\]Y]H›ЭОВ€‹›™^\Ф[ЭЫЫњЩ[ќ]™[ќЛќ[њЪYќ
ЫЫњЩ[ќ
NВ€ЫЫњЭ]Y]HY™^\Ф[Э]Y]]™[ќ
‹ЫЫњЩ[ќШЫЫ™љ\›YY‹В€™[]Y™XЫЬ™Y€™XЫЬ™љY€[ЩN€™XЫЬ™њЫЭ\ЩS[ЩK€XЭЬЋ€ЫЫњЩ[ќњ›Щљ[SX™[€\ШЬљ\[ЫЋ€•\Щ\€ЫЫ™љ\›YYШШ[™]љY]Л\]Y]YHЫЫњЩ[ќ€›И]™H›ЭљY\€Ш\ИЫЫќXЭY€‚€JNВ€™XЫЬ™]Y]™YњИHЛ‹‹Љ™XЫЬ™]Y]™YњИЧJK]Y]љYNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™XЫЬ™ЫЫњЩ[ќ]Y]JNВ€B‚€ЫЫњЭ™^\Ф™XЫЬ™]Y]YSX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™XЫЬ™ЧКЧ‹ЧJКWЬ]Y]YK\™]љY]ЙКNВ€Y€
™^\Ф™XЫЬ™]Y]YSX]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€ЫЫњЭ™XЫЬ™Hљ[™™^\Ф[Э™XЫЬ™
‹™^\Ф™XЫЬ™]Y]YSX]ЪМWJH]\Э™^\Ф[Э™XЫЬ™
ЉNВ€ЫЫњЭ™\Э[H™^\Ф[Э]Y]YT™XЫЬ™›Ь”™]љY]К‹™XЫЬ™\Щ\ЉNВ€Y€
™\Э[™\њ›Ь€OOHњ™XЫЬ™Ы›ЭЩ›Э[™ЉH™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€™\Э[™\њ›Ь€JNВ€Y€
™\Э[™\њ›Ь€OOHЫЫњЩ[ќЬ™\]Z\™YЉH™]\›€Щ[™
™\ЛKИЪО€[ЩK\њ›ЬЋ€™\Э[™\њ›Ь‹ЫЫњЩ[ќЫЬN€™\Э[ЫЫњЩ[ќЫЬHJNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™XЫЬ™]Y]YR][N€™\Э[њ]Y]YR][K]Y]€™\Э[]Y]›С^\›[XЭ[ЫЋ€ќYHJNВ€B‚€ЫЫњЭ™^\Ф™XЫЬ™\Ъ]™SX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™XЫЬ™ЧКЧ‹ЧJКWШ\Ъ]™IКNВ€Y€
™^\Ф™XЫЬ™\Ъ]™SX]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ™XЫЬ™Hљ[™™^\Ф[Э™XЫЬ™
‹™^\Ф™XЫЬ™\Ъ]™SX]ЪМWJNВ€Y€
\™XЫЬ™
H™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ™XЫЬ™Ы›ЭЩ›Э[™€JNВ€™XЫЬ™њЭ]\ИH\Ъ]™YЋВ€™XЫЬ™ќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭ]Y]HY™^\Ф[Э]Y]]™[ќ
‹њ™XЫЬ™Ш\Ъ]™Y‹В€™[]Y™XЫЬ™Y€™XЫЬ™љY€[ЩN€™XЫЬ™њЫЭ\ЩS[ЩK€XЭЬЋ€\Щ\ЏЛ›[YH™XЫЬ™њ›Щљ[SX™[€\ШЬљ\[ЫЋ€”™XЫЬ™\Ъ]™YШШ[K€›И]™H›ЭљY\‹\›XXЮK^[Y[ќY\ЬШYЩKШ[ШШ][Ы‹X\љЩ]XЩKЬ€[Y\™Щ[ЮHXЭ[Ы€ШШЭ\њ™Y€‚€JNВ€™XЫЬ™]Y]™YњИHЛ‹‹Љ™XЫЬ™]Y]™YњИЧJK]Y]љYNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™XЫЬ™]Y]ШШ[Ы›N€ќYHJNВ€B‚€ЫЫњЭ™^\Ф™XЫЬ™^ЬќX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™XЫЬ™ЧКЧ‹ЧJКWЩ^Ьќ	КNВ€Y€
™^\Ф™XЫЬ™^ЬќX]Ъ	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ™XЫЬ™Hљ[™™^\Ф[Э™XЫЬ™
‹™^\Ф™XЫЬ™^ЬќX]ЪМWJNВ€Y€
\™XЫЬ™
H™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ™XЫЬ™Ы›ЭЩ›Э[™€JNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€^Ьќ€В€™XЫЬ™€^ЬќY]€™]И]J
KќТTУФЭљ[™К
K€ШШ[^ЬќЫ›N€ќYK€›С^\›[[њЫZ\ЬЪ[ЫЋ€ќYB€B€JNВ€B‚€ЫЫњЭ™^\Ф™XЫЬ™[]T™\]Y\ЭX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™XЫЬ™ЧКЧ‹ЧJКWЩ[]K\™\]Y\Э	КNВ€Y€
™^\Ф™XЫЬ™[]T™\]Y\ЭX]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф›ЩXЭ[Ы”Z[ФЭ]JЉNВ€ЫЫњЭ™XЫЬ™Hљ[™™^\Ф[Э™XЫЬ™
‹™^\Ф™XЫЬ™[]T™\]Y\ЭX]ЪМWJNВ€Y€
\™XЫЬ™
H™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ™XЫЬ™Ы›ЭЩ›Э[™€JNВ€ЫЫњЭ™\]Y\Э][HH™^\РЬ™X]Q^Ьќ[]T™\]Y\Э
‹И™X\ЫЫЋ€[]H™\]Y\Э›Ь€™XЫЬ™	Ь™XЫЬ™љYXK\Щ\‹™[]HЉNВ€™\]Y\Э][Kњ™XЫЬ™YH™XЫЬ™љYВ€™XЫЬ™™[]T™\]Y\ЭЭ]\ИHњ™XYWЩ›Ь—Ь™]љY]ИЋВ€™XЫЬ™ќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™XЫЬ™™\]Y\Э€™\]Y\Э][KШШ[™]љY]УЫ›N€ќYK›ФЪ[[ќ[][ЫЋ€ќYHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ™]љY]Л\]Y]YH€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK]Y]YN€‹›™^\Ф[Э™]љY]Ф]Y]YHJNВ€B‚€ЫЫњЭ™^\Ф™]љY]У›ЭSX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™]љY]Л\]Y]YWКЧ‹ЧJКWЫ›ЭIКNВ€Y€
™^\Ф™]љY]У›ЭSX]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€ЫЫњЭ][HH‹›™^\Ф[Э™]љY]Ф]Y]YK™љ[™
]Y]YR][HO€]Y]YR][KљYOOH™^\Ф™]љY]У›ЭSX]ЪМWJNВ€Y€
Z][JH™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ]Y]YWЪ][WЫ›ЭЩ›Э[™€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ›ЭHHВ€Y€Ьћ\Лњ[™ЫUURQ

K€›ЭN€Ш[љ]^™T[Э^
›ЩK››ЭH”›ЭљY\‹ШYZ[€™]љY]И›ЭHYY€‹Њ
K€XЭЬЋ€Ш[љ]^™T[Э^
›ЩKXЭЬ€\Щ\ЏЛ›[YH”›ЭљY\‹РYZ[€‹LЊ
K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
K€ШШ[™]љY]УЫ›N€ќYB€NВ€][Kњ›ЭљY\ђYZ[“›Э\ИHЫ›ЭK‹‹Љ][Kњ›ЭљY\ђYZ[“›Э\ИЧJWNВ€][Kќ\]Y]H›ЭKЬ™X]Y]В€‹›™^\Ф[ЭYZ[“›Э\Лќ[њЪYќ
И‹‹››ЭK]Y]YR][RY€][KљY™XЫЬ™Y€][Kњ™XЫЬ™YJNВ€ЫЫњЭ]Y]HY™^\Ф[Э]Y]]™[ќ
‹њ›ЭљY\—ШYZ[—Ы›ЭWШYY‹В€™[]Y™XЫЬ™Y€][Kњ™XЫЬ™Y€[ЩN€][KњЫЭ\ЩS[ЩK€XЭЬЋ€›ЭKXЭЬ‹€›ЫN€”›ЭљY\‹РYZ[€‹€\ШЬљ\[ЫЋ€”›ЭљY\‹ШYZ[€›ЭHYYИШШ[™]љY]И]Y]YK€›И]™HЫ[љXШ[\›XXЮK^[Y[ќЬ€[Y\™Щ[ЮHXЭ[Ы€ШШЭ\њ™Y€‚€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK]Y]YR][N€][K›ЭK]Y]JNВ€B‚€ЫЫњЭ™^\Ф™]љY]ФЭ]\УX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ™]љY]Л\]Y]YWКЧ‹ЧJКWЬЭ]\ЙКNВ€Y€
™^\Ф™]љY]ФЭ]\УX]Ъ	‰€™\K›Y]ЩOOH”UТЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€ЫЫњЭ][HH‹›™^\Ф[Э™]љY]Ф]Y]YK™љ[™
]Y]YR][HO€]Y]YR][KљYOOH™^\Ф™]љY]ФЭ]\УX]ЪМWJNВ€Y€
Z][JH™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ]Y]YWЪ][WЫ›ЭЩ›Э[™€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЭ]\ИH‘VTЧФSХФ‘PУФ‘ФХUTСTЛљ[ЫY\К›ЩKњЭ]\КHИ›ЩKњЭ]\И€њ™]љY]ЩYЋВ€][KњЭ]\ИHЭ]\ОВ€][Kќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭ™XЫЬ™Hљ[™™^\Ф[Э™XЫЬ™
‹][Kњ™XЫЬ™Y
NВ€Y€
™XЫЬ™
HВ€™XЫЬ™њ™]љY]ФЭ]\ИHЭ]\ОВ€™XЫЬ™њЭ]\ИHЭ]\ОВ€™XЫЬ™ќ\]Y]H][Kќ\]Y]В€B€ЫЫњЭ]Y]HY™^\Ф[Э]Y]]™[ќ
‹њ™]љY]ЧЬЭ]\ЧШЪ[™ЩY‹В€™[]Y™XЫЬ™Y€][Kњ™XЫЬ™Y€[ЩN€][KњЫЭ\ЩS[ЩK€XЭЬЋ€\Щ\ЏЛ›[YH”›ЭљY\‹РYZ[€‹€›ЫN€”›ЭљY\‹РYZ[€‹€\ШЬљ\[ЫЋ€ШШ[™]љY]И]Y]YHЭ]\ИЪ[™ЩYИ	ЬЭ]\ЯK€›И^\›[XЭ[Ы€ШШЭ\њ™Y€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK]Y]YR][N€][K™XЫЬ™]Y]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШ]Y]€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK]Y]€‹›™^\Ф[Э]Y]]™[ќИJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ™[Z[™\њИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™[Z[™\њО€‹›™^\Ф[Э™[Z[™\њИJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ™[Z[™\њИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™[Z[™\€HВ€Y€Ьћ\Лњ[™ЫUURQ

K€\N€Ш[љ]^™T[Э^
›ЩKќ\H›ЩKњЫЭ\ЩS[ЩH™Щ[™\[‹
K€]N€Ш[љ]^™T[Э^
›ЩKќ]H›ЩKњЭ[[X\ћH“™^\И™[Z[™\€‹MЊ
K€[YN€Ш[љ]^™T[Э^
›ЩKќ[YH›ЩKќЪ[€“›ЭШЪY[Y‹LЊ
K€™XЭ\њ™[ЩN€Ш[љ]^™T[Э^
›ЩKњ™XЭ\њ™[ЩH›ЫЩH‹
K€[љЩY™XЫЬ™Y€Ш[љ]^™T[Э^
›ЩKњ™XЫЬ™Y€‹LЊ
K€›Э\О€Ш[љ]^™T[Э^
›ЩK››Э\И“ШШ[™[Z[™\€Ы›K€›ИУTИЬ€\Ъ›ЭYљXШ][Ы€Ш\ИЩ[ќ€‹МЊ
K€Э]\О€њ]Y]YYЫШШ[H‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
K€ШШ[™[Z[™\“Ы›N€ќYB€NВ€‹›™^\Ф[Э™[Z[™\њЛќ[њЪYќ
™[Z[™\ЉNВ€ЫЫњЭ]Y]HY™^\Ф[Э]Y]]™[ќ
‹њ™[Z[™\—ШЬ™X]Y‹В€™[]Y™XЫЬ™Y€™[Z[™\‹›[љЩY™XЫЬ™Y€[ЩN€™[Z[™\‹ќ\K€XЭЬЋ€\Щ\ЏЛ›[YH”Э[™\™\Щ\€‹€\ШЬљ\[ЫЋ€“ШШ[™[Z[™\€Ь™X]Y€›ИУTЛ\Ъ›ЭYљXШ][Ы‹[XZ[Ь€^\›[Ш[[™\€XЭ[Ы€ШШЭ\њ™Y€‚€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™[Z[™\‹]Y]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫЩ™›[™K\]Y]YH€	‰€™\K›Y]ЩOOH‘СUЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЩ™›[™T]Y]YN€‹›™^\Ф[ЭЩ™›[™T]Y]YHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫЩ™›[™K\]Y]YH€	‰€™\K›Y]ЩOOH”ФХЉHВ€[њЭ\™S™^\Ф[ЭЭ]JЉNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ][HHВ€Y€Ьћ\Лњ[™ЫUURQ

K€™XЫЬ™Y€Ш[љ]^™T[Э^
›ЩKњ™XЫЬ™Y€‹LЊ
K€\N€Ш[љ]^™T[Э^
›ЩKќ\H›ЩKњЫЭ\ЩS[ЩH›Щ™›[™WЬ]Y]YWЪ][H‹L
K€]N€Ш[љ]^™T[Э^
›ЩKќ]H›ЩKњЭ[[X\ћH“Щ™›[™H]Y]YH][H‹N
K€Э[[X\ћN€Ш[љ]^™T[Э^
›ЩKњЭ[[X\ћH”Ш]™Y›Ь€ШШ[Щ™›[™H™]љY]Л€‹М
K€Э]\О€њ]Y]YYЫШШ[H‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
K€Ю[ФЭ]\О€›ШШ[ЫЫ›H‹€›У]™TЮ[РЫZ[N€ќYB€NВ€‹›™^\Ф[ЭЩ™›[™T]Y]YKќ[њЪYќ
][JNВ€ЫЫњЭ]Y]HY™^\Ф[Э]Y]]™[ќ
‹›Щ™›[™WЪ][WЬ]Y]YY‹В€™[]Y™XЫЬ™Y€][Kњ™XЫЬ™Y€[ЩN€][Kќ\K€XЭЬЋ€\Щ\ЏЛ›[YH”Э[™\™\Щ\€‹€\ШЬљ\[ЫЋ€’][H]Y]YYШШ[H›Ь€Щ™›[™H™]љY]Л€›И]™HЮ[ИЬ€^\›[ЭX›Z\ЬЪ[Ы€ШШЭ\њ™Y€‚€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЩ™›[™R][N€][K]Y]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ[Э\Э]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK[ЭЭ]\О€™^\Ф[ЭЭ]\КЉHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬќ[ќ[YKШШ\Xљ[]Y\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Ф›ЩXЭ[Ы”ќ[ќ[YKШ\Xљ[]Y\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬќ[ќ[YKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Ф›ЩXЭ[Ы”ќ[ќ[YKњЭ]\К‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬќ[ќ[YKЬ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф›ЩXЭ[Ы”ќ[ќ[YKњ[Љ]ШZ]™XY›ЩJ™\JK‹›ШЩ\ЬЛ™[ќЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬќ[ќ[YKЩ^XЭ]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\Ф›ЩXЭ[Ы”ќ[ќ[YK™^XЭ]J]ШZ]™XY›ЩJ™\JK‹›ШЩ\ЬЛ™[ќЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬќ[ќ[YKЭ™\љYћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф›ЩXЭ[Ы”ќ[ќ[YKќ™\љYћJ]ШZ]™XY›ЩJ™\JK‹›ШЩ\ЬЛ™[ќЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШЪ›ЫљXЛ\™YXЭ]™KЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Э]\О€]Z[X›H‹€Щ\ќљXЩN€ђЪ›ЫљXИX[™YXЭ]™H[Щ[\€‹€ЫXZ[њО€И™XX™]\И‹љ\\ќ[њЪ[Ы€‹›Ш™\Ъ]H‹””H‹”•H‹ђТИЭ\Ьќ‹њ\ЪXЪX[€™]љY]И—K€XЪЩ[™›Э]\О€В€‹Ш\KЫ™^\ЛШЪ›ЫљXЛ\™YXЭ]™KЬЭ]\И‹€‹Ш\KЫ™^\ЛШЪ›ЫљXЛ\™YXЭ]™KЩ][X]H‹€‹Ш\KЫ™^\ЛШЪ›ЫљXЛ\™YXЭ]™KЬЭ[[X\ћH‹€‹Ш\KЫ™^\ЛШЪ›ЫљXЛ\™YXЭ]™KЬШЩ[\љ[ЬИ‹€‹Ш\KЫ™^\ЛШЪ›ЫљXЛ\™YXЭ]™KШЪXЪЫ\Э‚€K€ШШ[Ы›N€ќYK€\ЪXЪX[‘][X][Ы“[ЩN€ќYK€›СXYЫ›ЬЪ\О€ќYK€›Ф™\ШЬљ\[ЫЋ€ќYK€›С^\›[›ЭљY\ђЫЫќXЭ€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШЪ›ЫљXЛ\™YXЭ]™KЩ][X]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ][X]S™^\РЪ›ЫљXФ™YXЭ]™P\TЭ]J›ЩKЫЫ[X[™›ЩKљ[њ]€‹›ЩKњЭ]HЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШЪ›ЫљXЛ\™YXЭ]™KЬЭ[[X\ћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H][X]S™^\РЪ›ЫљXФ™YXЭ]™P\TЭ]J
]ШZ]™XY›ЩJ™\JJKЫЫ[X[™€‹ЯJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Э[[X\ћN€™\Э[›[Щ[\‹њ\ЪXЪX[”Э[[X\ћK€™X\ЫЫљ[™ХXЩN€™\Э[›[Щ[\‹њ™X\ЫЫљ[™ХXЩK€™XЩZ\О€™\Э[›[Щ[\‹њ™XЩZ\Л€›СXYЫ›ЬЪ\О€ќYK€›Ф™\ШЬљ\[ЫЋ€ќYK€›С^\›[›ЭљY\ђЫЫќXЭ€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШЪ›ЫљXЛ\™YXЭ]™KЬШЩ[\љ[ЬИ€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH™\K›Y]ЩOOH”ФХ€И]ШZ]™XY›ЩJ™\JH€ЯNВ€ЫЫњЭ™\Э[H][X]S™^\РЪ›ЫљXФ™YXЭ]™P\TЭ]J›ЩKЫЫ[X[™€‹›ЩKњЭ]HЯJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€ШЩ[\љ[ЬО€™\Э[›[Щ[\‹њШЩ[\љ[ФЪ[][][ЫњЛ€›Х™X]Y[ќYљXЩN€ќYK€›СXYЫ›ЬЪ\О€ќYK€›Ф™\ШЬљ\[ЫЋ€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШЪ›ЫљXЛ\™YXЭ]™KШЪXЪЫ\Э€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH™\K›Y]ЩOOH”ФХ€И]ШZ]™XY›ЩJ™\JH€ЯNВ€ЫЫњЭ™\Э[H][X]S™^\РЪ›ЫљXФ™YXЭ]™P\TЭ]J›ЩKЫЫ[X[™€‹›ЩKњЭ]HЯJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€ЪXЪЫ\Э€™\Э[›[Щ[\‹њ\ЪXЪX[ђЪXЪЫ\Э€Z\ЬЪ[™С]N€™\Э[›[Щ[\‹›Z\ЬЪ[™С]K€›СXYЫ›ЬЪ\О€ќYK€›Ф™\ШЬљ\[ЫЋ€ќYK€›С^\›[›ЭљY\ђЫЫќXЭ€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYЬљXЭ[\™K\™YXЭ]™KЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Э]\О€]Z[X›H‹€Щ\ќљXЩN€ђYЬљXЭ[\™H™YXЭ]™H[ќ[YЩ[ЩH[Щ[\€‹€ЫXZ[њО€ИЬ›ЬX[‹њ\ЭЩ\ЩX\ЩH™\ЬЭ\™H‹ќШ]\€Э™\ЬИ‹њЫЪ[Щ™\ќ[]H‹ћZY[љ\ЪИ‹њЭЬYЩHЬЬИ‹›X\љЩ]™XY[™\ЬИ‹™›ЫЩ\ЩXЭ\љ]Hљ\ЪИ—K€XЪЩ[™›Э]\О€В€‹Ш\KЫ™^\ЛШYЬљXЭ[\™K\™YXЭ]™KЬЭ]\И‹€‹Ш\KЫ™^\ЛШYЬљXЭ[\™K\™YXЭ]™KЩ][X]H‹€‹Ш\KЫ™^\ЛШYЬљXЭ[\™K\™YXЭ]™KЬЭ[[X\ћH‹€‹Ш\KЫ™^\ЛШYЬљXЭ[\™K\™YXЭ]™KЬШЩ[\љ[ЬИ‹€‹Ш\KЫ™^\ЛШYЬљXЭ[\™K\™YXЭ]™KШЪXЪЫ\Э‚€K€ШШ[Ы›N€ќYK€^\ќ][X][Ы“[ЩN€ќYK€›У]™UЩX]\ђЫZ[N€ќYK€›ФШ][]SЬ‘›Ы™P[[\Ъ\РЫZ[N€ќYK€›Рќ^Y\ђЫЫќXЭ€ќYK€›ФЪ\Y[ќ\њ[™ЩY€ќYK€›Ф^[Y[ќ]]Ьљ^™Y€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYЬљXЭ[\™K\™YXЭ]™KЩ][X]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ][X]S™^\РYЬљXЭ[\™T™YXЭ]™P\TЭ]J›ЩKЫЫ[X[™›ЩKљ[њ]€‹›ЩKњЭ]HЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYЬљXЭ[\™K\™YXЭ]™KЬЭ[[X\ћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H][X]S™^\РYЬљXЭ[\™T™YXЭ]™P\TЭ]J
]ШZ]™XY›ЩJ™\JJKЫЫ[X[™€‹ЯJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Э[[X\ћN€™\Э[›[Щ[\‹Yљ\ЫЬ”Э[[X\ћK€™X\ЫЫљ[™ХXЩN€™\Э[›[Щ[\‹њ™X\ЫЫљ[™ХXЩK€™XЩZ\О€™\Э[›[Щ[\‹њ™XЩZ\Л€›У]™UЩX]\ђЫZ[N€ќYK€›ФШ][]SЬ‘›Ы™P[[\Ъ\РЫZ[N€ќYK€›Рќ^Y\ђЫЫќXЭ€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYЬљXЭ[\™K\™YXЭ]™KЬШЩ[\љ[ЬИ€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH™\K›Y]ЩOOH”ФХ€И]ШZ]™XY›ЩJ™\JH€ЯNВ€ЫЫњЭ™\Э[H][X]S™^\РYЬљXЭ[\™T™YXЭ]™P\TЭ]J›ЩKЫЫ[X[™€‹›ЩKњЭ]HЯJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€ШЩ[\љ[ЬО€™\Э[›[Щ[\‹њШЩ[\љ[ФЪ[][][ЫњЛ€›У]™UЩX]\ђЫZ[N€ќYK€›Рќ^Y\ђЫЫќXЭ€ќYK€›Ф^[Y[ќ]]Ьљ^™Y€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYЬљXЭ[\™K\™YXЭ]™KШЪXЪЫ\Э€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH™\K›Y]ЩOOH”ФХ€И]ШZ]™XY›ЩJ™\JH€ЯNВ€ЫЫњЭ™\Э[H][X]S™^\РYЬљXЭ[\™T™YXЭ]™P\TЭ]J›ЩKЫЫ[X[™€‹›ЩKњЭ]HЯJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€ЪXЪЫ\Э€™\Э[›[Щ[\‹™^\ќЪXЪЫ\Э€Z\ЬЪ[™С]N€™\Э[›[Щ[\‹›Z\ЬЪ[™С]K€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€›С^\›[XЭ[Ы‘[Щ[PЫZ[YY€ќYB€JNВ€B‚€ЫЫњЭ][QЫXZ[”™YXЭ]™SX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧКX\љЩ]XЩ_ЩЪ\ЭXЬЯЫЬљЩ›ЬЩ_X\›љ[™Я›Ы™_ЫЫ[][љXШ][ЫњКK\™YXЭ]™WКЭ]\Я][X]_Э[[X\ћ_ШЩ[\љ[ЬЯЪXЪЫ\Э
IКNВ€Y€
][QЫXZ[”™YXЭ]™SX]Ъ
HВ€ЫЫњЭЛ[ЩKXЭ[Ы—HH][QЫXZ[”™YXЭ]™SX]ЪВ€ЫЫњЭY\\€H‘VTЧУUSWСУPRS—Ф‘QPХU‘WРTWРQTT”ЦЫ[ЩWNВ€Y€
XY\\ЉHВ€™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€њ™YXЭ]™WЩЫXZ[—Ы›ЭЩ›Э[™€JNВ€B€Y€
XЭ[Ы€OOHњЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Э]\О€]Z[X›H‹€Щ\ќљXЩN€Y\\‹ќ]K€[ЩK€ЫXZ[њО€Y\\‹™ЫXZ[њЛ€љ\ЪУ]™[О€Y\\‹њљ\ЪУ]™[Л€XЪЩ[™›Э]\О€ИњЭ]\И‹™][X]H‹њЭ[[X\ћH‹њШЩ[\љ[ЬИ‹ЪXЪЫ\Э—K›X\
][HO€Ш\KЫ™^\ЛЙШY\\‹њ›Э]_KЙЪ][_X
K€ШШ[Ы›N€ќYK€Ш[™›ЮШ\X›N€ќYK€^\ќ][X][Ы“[ЩN€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€›СZЩT›ЭљY\‘^XЭ][ЫЋ€ќYK€›РЫZ[\О€Y\\‹››РЫZ[\В€JNВ€B€Y€
XЭ[Ы€OOH™][X]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ][X]S™^\У][QЫXZ[”™YXЭ]™P\TЭ]J[ЩK›ЩKЫЫ[X[™›ЩKљ[њ]€‹›ЩKњЭ]HЯJJNВ€B€Y€
XЭ[Ы€OOHњЭ[[X\ћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H][X]S™^\У][QЫXZ[”™YXЭ]™P\TЭ]J[ЩK›ЩKЫЫ[X[™›ЩKљ[њ]€‹›ЩKњЭ]HЯJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€[ЩK€Э[[X\ћN€™\Э[›[Щ[\‹™^\ќЭ[[X\ћK€™X\ЫЫљ[™ХXЩN€™\Э[›[Щ[\‹њ™X\ЫЫљ[™ХXЩK€™XЩZ\О€™\Э[›[Щ[\‹њ™XЩZ\Л€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€›СZЩT›ЭљY\‘^XЭ][ЫЋ€ќYK€›РЫZ[\О€Y\\‹››РЫZ[\В€JNВ€B€Y€
XЭ[Ы€OOHњШЩ[\љ[ЬИ€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH™\K›Y]ЩOOH”ФХ€И]ШZ]™XY›ЩJ™\JH€ЯNВ€ЫЫњЭ™\Э[H][X]S™^\У][QЫXZ[”™YXЭ]™P\TЭ]J[ЩK›ЩKЫЫ[X[™€‹›ЩKњЭ]HЯJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€[ЩK€ШЩ[\љ[ЬО€™\Э[›[Щ[\‹њШЩ[\љ[ФЪ[][][ЫњЛ€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€›СZЩT›ЭљY\‘^XЭ][ЫЋ€ќYK€›РЫZ[\О€Y\\‹››РЫZ[\В€JNВ€B€Y€
XЭ[Ы€OOHЪXЪЫ\Э€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH™\K›Y]ЩOOH”ФХ€И]ШZ]™XY›ЩJ™\JH€ЯNВ€ЫЫњЭ™\Э[H][X]S™^\У][QЫXZ[”™YXЭ]™P\TЭ]J[ЩK›ЩKЫЫ[X[™€‹›ЩKњЭ]HЯJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€[ЩK€ЪXЪЫ\Э€™\Э[›[Щ[\‹™^\ќЪXЪЫ\Э€Z\ЬЪ[™С]N€™\Э[›[Щ[\‹›Z\ЬЪ[™С]K€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€›СZЩT›ЭљY\‘^XЭ][ЫЋ€ќYK€›С^\›[XЭ[Ы‘[Щ[PЫZ[YY€ќYK€›РЫZ[\О€Y\\‹››РЫZ[\В€JNВ€B€B‚€Y€
\›њ][YKњЭ\ќХЪ]
‹Ш\KЫ™^\ЛЬ™YXЭ]™K[Y[[ЬћKИЉJHВ€ЫЫњЭXЭ[Ы€H\›њ][YKњ™\XЩJ‹Ш\KЫ™^\ЛЬ™YXЭ]™K[Y[[ЬћKИ‹€ЉNВ€ЫЫњЭљ^\™R\ЭЬћHHќZ[™^\Ф™YXЭ]™SY[[ЬћQљ^\™J
NВ€ЫЫњЭ™XY™YXЭ]™P›ЩHH\Ю[И

HO€
™\K›Y]ЩOOH”ФХ€™\K›Y]ЩOOH”UТЉHИ]ШZ]™XY›ЩJ™\JH€ЯNВ€ЫЫњЭ›Ь›X[^™R\ЭЬћHH›ЩHO€\њ^Kљ\Р\њ^J›ЩKљ\ЭЬћJH	‰€›ЩKљ\ЭЬћK›[™ЭИ›ЩKљ\ЭЬћH€љ^\™R\ЭЬћNВ€Y€
XЭ[Ы€OOHњЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Щ\ќљXЩN€›™^\ЧЬ™YXЭ]™WЪ[ќ[YЩ[ЩWЫX]\љ]H‹€Э]\О€›ШШ[ЬШ[™›ЮЬ™XYH‹€Э\ЬќY[Щ\О€ИљX[‹YЬљXЭ[\™H‹›X\љЩ]XЩH‹›ЩЪ\ЭXЬИ‹ќЫЬљЩ›ЬЩH‹›X\›љ[™И‹™›Ы™H‹ЫЫ[][љXШ][ЫњИ—K€XЪЩ[™›Э]\О€В€‹Ш\KЫ™^\ЛЬ™YXЭ]™K[Y[[ЬћKЬЭ]\И‹€‹Ш\KЫ™^\ЛЬ™YXЭ]™K[Y[[ЬћKЪ\ЭЬћH‹€‹Ш\KЫ™^\ЛЬ™YXЭ]™K[Y[[ЬћKШЫЫ\\™H‹€‹Ш\KЫ™^\ЛЬ™YXЭ]™K[Y[[ЬћKШЬ›ЬЬЛYЫXZ[€‹€‹Ш\KЫ™^\ЛЬ™YXЭ]™K[Y[[ЬћKЩ™YYXЪИ‹€‹Ш\KЫ™^\ЛЬ™YXЭ]™K[Y[[ЬћKЪ[ќ[YЩ[ЩK\Э[[X\ћH‚€K€Ш\Xљ[]Y\О€В€њ™YXЭ]™H\ЭЬћH‹€Э\њ™[ќњИљ[Ь€ЫЫ\\љ\ЫЫ€‹€Ь›ЬЬЛYЫXZ[€[њЪYЪX\[™И‹€ЫЫ™љY[ЩH[™]K\]X[]HШЫЬљ[™И‹€™^\ќ™YYXЪИШ\\™H‹€њ]›Ь›H[ќ[YЩ[ЩHЭ[[X\ћH‚€K€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€›Ф›ЭљY\’[™Щ™ђ]]Ьљ^™Y€ќYK€›ФЩXЬ™]С^ЬЩY€ќYK€ШШ[Ы›N€ќYB€JNВ€B€Y€
XЭ[Ы€OOHљ\ЭЬћH€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH]ШZ]™XY™YXЭ]™P›ЩJ
NВ€ЫЫњЭ[ЩHH›ЩK›[ЩH\›њЩX\Ъ\[\Л™Щ]
›[ЩHЉH€ЋВ€ЫЫњЭ\ЭЬћHH›Ь›X[^™R\ЭЬћJ›ЩJK™љ[\Љ][HO€[[ЩH[ЩHOOHњ]›Ь›H€][K›[ЩHOOH[ЩJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€[ЩN€[ЩHњ]›Ь›H‹€\ЭЬћK€ЫЭ[ќ€\ЭЬћK›[™Э€™XЩZ\О€\ЭЬћK™›]X\
][HO€][Kњ™XЩZ\ИЧJK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€ШШ[Ы›N€ќYB€JNВ€B€Y€
XЭ[Ы€OOHЫЫ\\™H€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH]ШZ]™XY™YXЭ]™P›ЩJ
NВ€ЫЫњЭ[ЩHH›ЩK›[ЩH\›њЩX\Ъ\[\Л™Щ]
›[ЩHЉHњ]›Ь›HЋВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€ЫЫ\\љ\ЫЫЋ€ЫЫ\\™S™^\Ф™YXЭ]™SY[[ЬћQ[ќљY\К[ЩK›Ь›X[^™R\ЭЬћJ›ЩJJK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€ШШ[Ы›N€ќYB€JNВ€B€Y€
XЭ[Ы€OOHЬ›ЬЬЛYЫXZ[€€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH]ШZ]™XY™YXЭ]™P›ЩJ
NВ€ЫЫњЭ\ЭЬћHH›Ь›X[^™R\ЭЬћJ›ЩJNВ€ЫЫњЭXЭ]™TЪYЫ[ИH\ЭЬћK›X\
][HO€
И[ЩN€][K›[ЩKљ\ЪФЪYЫ[€][Kњљ\ЪФЪYЫ[Z\ЬЪ[™С]N€][K›Z\ЬЪ[™С]HЧHJJNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Ь›ЬЬСЫXZ[Ћ€ќZ[Ь›ЬЬСЫXZ[”™YXЭ]™R[њЪYЪКXЭ]™TЪYЫ[КK€XЭ]™TЪYЫ[Л€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€ШШ[Ы›N€ќYB€JNВ€B€Y€
XЭ[Ы€OOH™™YYXЪИ€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH]ШZ]™XY™YXЭ]™P›ЩJ
NВ€ЫЫњЭ™YYXЪХ\HH›ЩK™™YYXЪХ\H\›њЩX\Ъ\[\Л™Щ]
™™YYXЪХ\HЉHќ\ЩYќ[ЋВ€ЫЫњЭ[ЩHH›ЩK›[ЩH\›њЩX\Ъ\[\Л™Щ]
›[ЩHЉHњ]›Ь›HЋВ€ЫЫњЭ™YYXЪИHВ€Y€\K\™YXЭ]™KY™YYXЪЛIС]K››ЭК
_X€[ЩK€™YYXЪХ\K€›ЭN€›ЩK››ЭH”™YXЭ]™H™YYXЪИШ\\™Y›Ь€ШШ[™]љY]Л€‹€ЫЫ™љY[ЩPYќ\ЭY[ќ€™YYXЪХ\HOOHXШЭ\]H€ИH€™YYXЪХ\HOOHќЫЧЪYЪ€ИLH€€Ь™X]Y]€™^\У›ЭК
K€ШШ[Ы›N€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€NВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€™YYXЪЛ€™XЩZ\О€ЮИY€\K\™YXЭ]™KY™YYXЪЛ\™XЩZ\IС]K››ЭК
_X]™[ќ\N€њ™YXЭ]™WЩ™YYXЪЧЬ™XЫЬ™Y‹]Z[€‘^\ќ™YYXЪИ™XЫЬ™YШШ[K€‹Ь™X]Y]€™^\У›ЭК
KШШ[Ы›N€ќYHWK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€ШШ[Ы›N€ќYB€JNВ€B€Y€
XЭ[Ы€OOHљ[ќ[YЩ[ЩK\Э[[X\ћH€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH]ШZ]™XY™YXЭ]™P›ЩJ
NВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Э[[X\ћN€ќZ[™^\Ф™YXЭ]™R[ќ[YЩ[ЩTЭ[[X\ћJ›Ь›X[^™R\ЭЬћJ›ЩJJK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK€ШШ[Ы›N€ќYB€JNВ€B€B‚€Y€
\›њ][YKњЭ\ќХЪ]
‹Ш\KЫ™^\ЛЬ\њЪ\Э[ќ[Y[[ЬћHЉJHВ€ЫЫњЭЭЬ™HH™^\Ф\њЪ\Э[ќY[[ЬћTЭЬ™J‹›ШЩ\ЬЛ™[ќЉNВ€ЫЫњЭ\њЪ\ЭH\Ю[И™\Э[O€В€‹њ›Щљ[K›™^\Ф\њЪ\Э[ќY[[ЬћHH™\Э[њЭ]HЭЬ™KњЫ\ЪЭ

NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€™\Э[В€NВ€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ\њЪ\Э[ќ[Y[[ЬћKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€‹‹њЭЬ™KњЭ]\К
K€]X\ЩN€™^\Ф\њЪ\Э[ќY[[ЬћK™]X\ЩT™XY[™\ЬК›ШЩ\ЬЛ™[ќЉK€Э\ЬќY\\О€™^\Ф\њЪ\Э[ќY[[ЬћK“QSSФ–WХTTЛ€›ФЩXЬ™]С^ЬЩY€ќYB€JNВ€B€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ\њЪ\Э[ќ[Y[[ЬћKЬ™XЫЬ™И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€‹‹њЭЬ™KњЩX\Ъ™XЫЬ™КВ€\N€\›њЩX\Ъ\[\Л™Щ]
ќ\HЉH€‹€Э]\О€\›њЩX\Ъ\[\Л™Щ]
њЭ]\ИЉH€‹€]Y\ћN€\›њЩX\Ъ\[\Л™Щ]
њ]Y\ћHЉH€‹€[ЫYP\Ъ]™Y€\›њЩX\Ъ\[\Л™Щ]
XЭ]™SЫ›HЉHOOHќќYH‚€JK€\њЪ\Э[ЩTШЫЬN€ЭЬ™KњЭ]\К
Kњ\њЪ\Э[ЩTШЫЬK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ\њЪ\Э[ќ[Y[[ЬћKЬ™XЫЬ™И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]\њЪ\Э
ЭЬ™KЬ™X]T™XЫЬ™
›ЩJJNВ€™]\›€Щ[™
™\ЛЊИ‹‹њ™\Э[›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK›ФЩXЬ™]С^ЬЩY€ќYHJNВ€B€ЫЫњЭ™XЫЬ™X]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ\њЪ\Э[ќ[Y[[ЬћWЬ™XЫЬ™ЧКЧ‹ЧJКIКNВ€Y€
™XЫЬ™X]Ъ	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИ‹‹њЭЬ™Kњ™XY™XЫЬ™
XЫЩUT’PЫЫ\Ы™[ќ
™XЫЬ™X]ЪМWJJK›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYHJNВ€B€Y€
™XЫЬ™X]Ъ	‰€
™\K›Y]ЩOOH”UТ€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]\њЪ\Э
ЭЬ™Kќ\]T™XЫЬ™
XЫЩUT’PЫЫ\Ы™[ќ
™XЫЬ™X]ЪМWJK›ЩJJNВ€™]\›€Щ[™
™\Л™\Э[›ЪИИЊ€И‹‹њ™\Э[›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK›ФЩXЬ™]С^ЬЩY€ќYHJNВ€B€ЫЫњЭ\Ъ]™SX]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ\њЪ\Э[ќ[Y[[ЬћWЬ™XЫЬ™ЧКЧ‹ЧJКWШ\Ъ]™IКNВ€Y€
\Ъ]™SX]Ъ	‰€
™\K›Y]ЩOOH”UТ€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]\њЪ\Э
ЭЬ™K\Ъ]™T™XЫЬ™
XЫЩUT’PЫЫ\Ы™[ќ
\Ъ]™SX]ЪМWJK›ЩKњЭ]\И\Ъ]™Y‹›ЩKњ™X\ЫЫ€€ЉJNВ€™]\›€Щ[™
™\Л™\Э[›ЪИИЊ€И‹‹њ™\Э[›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK›ФЩXЬ™]С^ЬЩY€ќYHJNВ€B€ЫЫњЭЫX\“X]ЪH\›њ][YK›X]Ъ
Ч—Ш\WЫ™^\ЧЬ\њЪ\Э[ќ[Y[[ЬћWЬ™XЫЬ™ЧКЧ‹ЧJКWШЫX\‹[ШШ[	КNВ€Y€
ЫX\“X]Ъ	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]\њЪ\Э
ЭЬ™K™[]SШШ[™XЫЬ™
XЫЩUT’PЫЫ\Ы™[ќ
ЫX\“X]ЪМWJK›ЩKЫЫ™љ\›YYШШ[ЫX\€OOHќYJJNВ€™]\›€Щ[™
™\Л™\Э[›ЪИИЊ€KИ‹‹њ™\Э[›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK›ФЩXЬ™]С^ЬЩY€ќYHJNВ€B€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ\њЪ\Э[ќ[Y[[ЬћKЬ™XЩZ\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€™XЩZ\О€ЭЬ™KњЫ\ЪЭ

Kњ™XЩZ\Л€\њЪ\Э[ЩTШЫЬN€ЭЬ™KњЭ]\К
Kњ\њЪ\Э[ЩTШЫЬK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ\њЪ\Э[ќ[Y[[ЬћKЬ™XЩZ\И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]\њЪ\Э
ЭЬ™KЬ™X]T™XЩZ\
›ЩJJNВ€™]\›€Щ[™
™\ЛЊИ‹‹њ™\Э[›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYK›ФЩXЬ™]С^ЬЩY€ќYHJNВ€B€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ\њЪ\Э[ќ[Y[[ЬћKЬ™YXЭ]™KXЫЫќ^€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€™YXЭ]™PЫЫќ^€ЭЬ™Kњ™YXЭ]™PЫЫќ^

K€\њЪ\Э[ЩTШЫЬN€ЭЬ™KњЭ]\К
Kњ\њЪ\Э[ЩTШЫЬK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШњZ[‹ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\РYЩ[ќXРњZ[”ќ[ќ[YKњЭ]\К‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШњZ[‹Э\ЪЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\РYЩ[ќXРњZ[”ќ[ќ[YK›\Э\ЪЬКЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШњZ[‹ЫZ\ЬЪ[ЫњИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭЭ]HH™^\РYЩ[ќXРњZ[”ќ[ќ[YK›\Э\ЪЬКЉNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Z\ЬЪ[ЫњО€Э]Kќ\ЪЬИЧK€ШШ[Ы›N€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YKњЭ\ќХЪ]
‹Ш\KЫ™^\ЛШњZ[‹ЫZ\ЬЪ[ЫњЛИЉH	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭZ\ЬЪ[Ы’YHXЫЩUT’PЫЫ\Ы™[ќ
\›њ][YKњ™\XЩJ‹Ш\KЫ™^\ЛШњZ[‹ЫZ\ЬЪ[ЫњЛИ‹€ЉJNВ€ЫЫњЭЭ]HH™^\РYЩ[ќXРњZ[”ќ[ќ[YK›\Э\ЪЬКЉNВ€ЫЫњЭZ\ЬЪ[Ы€H
Э]Kќ\ЪЬИЧJK™љ[™
\ЪИO€\ЪЛќ\ЪТYOOHZ\ЬЪ[Ы’Y\ЪЛШ\ЩRYOOHZ\ЬЪ[Ы’Y
NВ€™]\›€Щ[™
™\ЛZ\ЬЪ[Ы€ИЊ€В€ЪО€›ЫЫX[ЉZ\ЬЪ[ЫЉK€Z\ЬЪ[ЫЋ€Z\ЬЪ[Ы€ќ[€Э]\О€Z\ЬЪ[Ы€ИZ\ЬЪ[Ы‹њЭ]\И€››ЭЩ›Э[™‹€ШШ[Ы›N€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YKњЭ\ќХЪ]
‹Ш\KЫ™^\ЛШњZ[‹ЫZ\ЬЪ[ЫњЛИЉH	‰€
™\K›Y]ЩOOH”UТ€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭZ\ЬЪ[Ы’YHXЫЩUT’PЫЫ\Ы™[ќ
\›њ][YKњ™\XЩJ‹Ш\KЫ™^\ЛШњZ[‹ЫZ\ЬЪ[ЫњЛИ‹€ЉJNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H™^\РYЩ[ќXРњZ[”ќ[ќ[YKќ\]U\ЪКИ‹‹›ЩK\ЪТY€Z\ЬЪ[Ы’YKЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИ‹‹њ™\Э[ШШ[Ы›N€ќYK›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШњZ[‹Ь™XЩZ\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭЭ]HH™^\РYЩ[ќXРњZ[”ќ[ќ[YK›\Э\ЪЬКЉNВ€ЫЫњЭ™XЩZ\ИH
Э]KXЭ]љ]HЧJK›X\
]™[ќO€
В€™XЩZ\Y€]™[ќXЭ]љ]RY€Ь™X]Y]€]™[ќЬ™X]Y]€]™[ќ\N€]™[ќ™]™[ќ\K€\ЪТY€]™[ќќ\ЪТY€‹€Э]\О€]™[ќњЭ]\Ињ™XЫЬ™YЫШШ[H‹€Э[[X\ћN€]™[ќњЭ[[X\ћH€‹€ШШ[Ы›N€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JJNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK™XЩZ\ЛШШ[Ы›N€ќYK›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШњZ[‹ЫY[[ЬћH€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭЭ]HH™^\РYЩ[ќXРњZ[”ќ[ќ[YK›\Э\ЪЬКЉNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Y[[ЬћN€В€Z\ЬЪ[ЫњО€Э]Kќ\ЪЬИЧK€›ЭљY\”]Y]YN€Э]Kњ›ЭљY\”]Y]YHЧK€™XЩZ\О€Э]KXЭ]љ]HЧB€K€ШЫЬ\О€И›Z\ЬЪ[ЫњИ‹њ›ЭљY\”]Y]YH‹њ™XЩZ\И—K€ШШ[Ы›N€ќYK€Ш[™›ЮЬ“ШШ[€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШњZ[‹ШЫЫ[X[™€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H]ШZ]™^\РYЩ[ќXРњZ[”ќ[ќ[YKљ[™PЫЫ[X[™
]ШZ]™XY›ЩJ™\JK‹›ШЩ\ЬЛ™[ќЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШњZ[‹Э\ЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\РYЩ[ќXРњZ[”ќ[ќ[YKќ\]U\ЪК]ШZ]™XY›ЩJ™\JKЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШњZ[‹Ь›ЭљY\‹Ь™\ЬЫ™€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\РYЩ[ќXРњZ[”ќ[ќ[YKњ›ЭљY\”™\ЬЫ™
]ШZ]™XY›ЩJ™\JKЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШњZ[‹Э™\љYћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\РYЩ[ќXРњZ[”ќ[ќ[YKќ™\љYћU\ЪК]ШZ]™XY›ЩJ™\JK‹›ШЩ\ЬЛ™[ќЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫY[ќ[ZX[ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\УY[ќ[X[™Z]љ[Ь[Щ[™\ЬЛњЭ]\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫY[ќ[ZX[ШЫ\ЬЪYћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Ы\ЬЪYљXШ][ЫЋ€™^\УY[ќ[X[™Z]љ[Ь[Щ[™\ЬЛЫ\ЬЪYћTЭ]J›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJK€›СXYЫ›ЬЪ\О€ќYK€›Ф›ЭљY\ђЫЫќXЭY€ќYK€›С[Y\™Щ[ЮQ\Ь]Ъ€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫY[ќ[ZX[ЬЭ\Ьќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\УY[ќ[X[™Z]љ[Ь[Щ[™\ЬЛќZ[Э\ЬќXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫY[ќ[ZX[ЬШЬ™Y[љ[™ЛЩЫЭ™\›[ЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\УY[ќ[X[™Z]љ[Ь[Щ[™\ЬЛќZ[ШЬ™Y[љ[™СЫЭ™\›[ЩJ›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫY[ќ[ZX[Щ\ШШ[][Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\УY[ќ[X[™Z]љ[Ь[Щ[™\ЬЛќZ[ќ\љ\ЩXЭ[Ы‘\ШШ[][ЫЉ›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЫY[ќ[ZX[ЬШY™]K\[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\УY[ќ[X[™Z]љ[Ь[Щ[™\ЬЛќZ[ШY™]T[Љ›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭњЭ]\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЬЫЭ\Щ\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Щ\ќљXЩRY€™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\Э”СT•’PСWТQ€]љY[ЩRY\\ЪN€™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\Э‘U’QSђСWХQT”Л€ЫЭ\ЩU™\љYљXШ][Ы”Э]\О€™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\Э”УХTђСWХ‘T’Q’PРUSУ—ФХUTЛ€›ШЪЩYЫЭ\ЩTЭ]\О€™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\Эђ“РТСQФУХTђСWФХUTЛ€™XЫЩЫљ^™YЫЭ\Щ\О€™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\Э”‘PУСУ’V‘QФУХTђСWФ‘PУФ‘Л€ЫXZ[‘]љY[ЩSX\О€™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\Э‘УPRS—СU’QSђСWУPTЛ€›РЫ[љXШ[]]Ьљ]PЫZ[YY€ќYK€›ФЩXЬ™]С^ЬЩY€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЬ™YЪ\ЭљY\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\Эњ™YЪ\ЭљY\К
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЪ[њЬXЭ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\Эљ[њЬXЭ
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЬЫЭ\ЩKЭ™\љYћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫЭ\ЩRYH›ЩOЛњЫЭ\ЩRY›ЩOЛќ\››ЩOЛШ[›ЫљXШ[\›€ЋВ€ЫЫњЭ]™P[ЭЩYH›ШЩ\ЬЛ™[ќ‹“‘VTЧТPSФУХTђСWУU‘WХ‘T’Q’PРUSУ—СSђP“QOOHќќYH€	‰€›ЩOЛ›]™HOOHќYNВ€ЫЫњЭ]™T™\Э[H]™P[ЭЩYИ]ШZ]™\љYћS™^\ТX[ЫЭ\ЩS]™JЫЭ\ЩRY
H€И]™PЪXЪЩY€[ЩHNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€]™U™\љYљXШ][Ы‘[X›Y€›ШЩ\ЬЛ™[ќ‹“‘VTЧТPSФУХTђСWУU‘WХ‘T’Q’PРUSУ—СSђP“QOOHќќYH‹€]™U™\љYљXШ][Ыђ][\Y€]™P[ЭЩY€‹‹›™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\Эќ™\љYћTЫЭ\ЩJЫЭ\ЩRYВ€‹‹›ЩK€‹‹›]™T™\Э[€JK€›РЫ[љXШ[]]Ьљ]PЫZ[YY€ќYK€›ФЩXЬ™]С^ЬЩY€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЬ™YXЭ]™KYЫЭ™\›[ЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\Эњ™YXЭ]™QЫЭ™\›[ЩJ›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЪ[X[‹\™]љY]И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[[X[”™]љY]ФXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЫYYXШ][Ы‹\\›XXЮH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[YYXШ][Ы”\›XXЮQ]љY[ЩTXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЫX›Ь]ЬћKYXYЫ›ЬЭXИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[X›Ь]ЬћQXYЫ›ЬЭXС]љY[ЩTXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKШЫЫњЩ[ќ\љYЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[X[]TљYЪФXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЩљ\‹]\›Z[›ЫЩЮH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[љ\•\›Z[›ЫЩЮQЫЭ™\›[ЩTXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЮ[Э]]ќ[™\X›K\ШY™YЭX\™И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[[Э]ќ[™\X›TШY™YЭX\™XЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKШXШЩ\ЬЪXљ[]K[ШШ[^][Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[XШЩ\ЬЪXљ[]SШШ[^][Ы‘ЫЭ™\›[ЩTXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKШЫЫ[][љXШ][ЫњЛY›ЫЭЛ]\€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[X[ЫЫ[][љXШ][ЫњС›ЫЭХ\XЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЫ[Ыљ]Ьљ[™И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[X[[Щ[ЫЭ\ЩS[Ыљ]Ьљ[™ФXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЬ™YЭ[]ЬћKX\ЬЩ\ЬЫY[ќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[X[™YЭ[]ЬћP\ЬЩ\ЬЫY[ќXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЬЩXЭ\љ]K\љ]XЮKXY™\њШ\љX[€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[X[ЩXЭ\љ]Tљ]XЮPY™\њШ\љX[XЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKШШ\Xљ[]K\Э]\И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[X[Щ[™\Ъ\РШ\Xљ[]TЭ]\ФXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЪX[Y]љY[ЩKЩ™YYXЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€‹њ›Щљ[HH‹њ›Щљ[HЯNВ€‹њ›Щљ[K›™^\ТX[]љY[ЩQЫЭ™\›[ЩT]Y]YHH‹њ›Щљ[K›™^\ТX[]љY[ЩQЫЭ™\›[ЩT]Y]YHЧNВ€ЫЫњЭ™YYXЪИH™^\С[ќ\њљ\ЩRX[]љY[ЩUќ\ЭќZ[™YYXЪФ™XЫЬ™
›ЩHЯJNВ€‹њ›Щљ[K›™^\ТX[]љY[ЩQЫЭ™\›[ЩT]Y]YKќ[њЪYќ
™YYXЪКNВ€‹њ›Щљ[K›™^\ТX[]љY[ЩQЫЭ™\›[ЩT]Y]YHH‹њ›Щљ[K›™^\ТX[]љY[ЩQЫЭ™\›[ЩT]Y]YKњЫXЩJL
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€™YYXЪЛ€]Y]YS[™Э€‹њ›Щљ[K›™^\ТX[]љY[ЩQЫЭ™\›[ЩT]Y]YK›[™Э€›Ф›Щ™\ЬЪ[Ы[™]љY]РЫZ[YY€ќYK€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЬљЩ›ЬЩKYЩ[™\Ъ\ЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф™YXЭ]™UЫЬљЩ›ЬЩKњЭ]\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЬљЩ›ЬЩKYЩ[™\Ъ\ЛЬ™YЪ\ЭљY\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф™YXЭ]™UЫЬљЩ›ЬЩKњ™YЪ\ЭљY\К
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЬљЩ›ЬЩKYЩ[™\Ъ\ЛЩ][X]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф™YXЭ]™UЫЬљЩ›ЬЩKќZ[™YXЭ]™UЫЬљЩ›ЬЩTXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЬљЩ›ЬЩKYЩ[™\Ъ\ЛШШ\Xљ[]K\Э]\И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф™YXЭ]™UЫЬљЩ›ЬЩKќZ[ЫЬљЩ›ЬЩPШ\Xљ[]TЭ]\ФXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЬљЩ›ЬЩKYЩ[™\Ъ\ЛЬЫЭ\ЩK]™\љYљXШ][Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф™YXЭ]™UЫЬљЩ›ЬЩKќZ[ЫЬљЩ›ЬЩTЫЭ\ЩU™\љYљXШ][Ы”XЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЬљЩ›ЬЩKYЩ[™\Ъ\ЛЩ™YYXЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€‹њ›Щљ[HH‹њ›Щљ[HЯNВ€‹њ›Щљ[K›™^\ХЫЬљЩ›ЬЩQЫЭ™\›[ЩT]Y]YHH‹њ›Щљ[K›™^\ХЫЬљЩ›ЬЩQЫЭ™\›[ЩT]Y]YHЧNВ€ЫЫњЭXЪЩ]H™^\СЩ[™\Ъ\Ф™YXЭ]™UЫЬљЩ›ЬЩKќZ[™YXЭ]™UЫЬљЩ›ЬЩTXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™•ЫЬљЩ›ЬЩH™YYXЪИ™]љY]И‹›ЩOЛЫЫќ^ЯJNВ€ЫЫњЭ™YYXЪИHВ€Y€Ьћ\Лњ[™ЫUURQ

K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
K€]Y]YN€ќЫЬљЩ›ЬЩWЬ›Щ™\ЬЪ[Ы[Ь™]љY]И‹€Э]\О€њ]Y]YYЩ›Ь—Ь™]љY]И‹€XЪЩ]\N€XЪЩ]њXЪЩ]\K€™XЩZ\Y€XЪЩ]њ™XЩZ\Лњ™XЩZ\Y€‹€™]љY]Щ\”›ЫT™\]Z\™Y€њ]X[YљYYЫЬљЩ›ЬЩH›Щ™\ЬЪ[Ы[‹€›С[\ЮY\ђЫЫќXЭY€ќYK€›Р\XШ][Ы”ЭX›Z]Y€ќYK€›ТX[]TЪ\™Y€ќYK€›ЭN€Эљ[™К›ЩOЛ››ЭH•ЫЬљЩ›ЬЩHXЪЩ]]Y]YY›Ь€ШШ[›Щ™\ЬЪ[Ы[™]љY]Л€ЉKњЫXЩJ
B€NВ€‹њ›Щљ[K›™^\ХЫЬљЩ›ЬЩQЫЭ™\›[ЩT]Y]YKќ[њЪYќ
™YYXЪКNВ€‹њ›Щљ[K›™^\ХЫЬљЩ›ЬЩQЫЭ™\›[ЩT]Y]YHH‹њ›Щљ[K›™^\ХЫЬљЩ›ЬЩQЫЭ™\›[ЩT]Y]YKњЫXЩJL
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€™YYXЪЛ€]Y]YS[™Э€‹њ›Щљ[K›™^\ХЫЬљЩ›ЬЩQЫЭ™\›[ЩT]Y]YK›[™Э€›С^\›[^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYњљXШKXYЛ[ЬЬќ[љ]KЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\РYњљXШPYУЬЬќ[љ]KњЭ]\К
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYњљXШKXYЛ[ЬЬќ[љ]KЬ™YЪ\ЭљY\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\РYњљXШPYУЬЬќ[љ]Kњ™YЪ\ЭљY\К
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYњљXШKXYЛ[ЬЬќ[љ]KЩ][X]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\РYњљXШPYУЬЬќ[љ]KќZ[ЬЬќ[љ]TXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€‹›ЩOЛЫЫќ^ЯJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYњљXШKXYЛ[ЬЬќ[љ]KШШ\Xљ[]K\Э]\И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\РYњљXШPYУЬЬќ[љ]KќZ[Ш\Xљ[]TЭ]\ФXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYњљXШKXYЛ[ЬЬќ[љ]KЩЫЭ™\›[ЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\РYњљXШPYУЬЬќ[љ]KќZ[ЫЭ™\›[ЩTXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYњљXШKXYЛ[ЬЬќ[љ]KЭќ\Э\™YЪ\ЭћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\РYњљXШPYУЬЬќ[љ]KќZ[ќ\Э™YЪ\ЭћTXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYњљXШKXYЛ[ЬЬќ[љ]KЬ›ЩЬ[KZ[\XЭ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\РYњљXШPYУЬЬќ[љ]KќZ[›ЩЬ[R[\XЭXЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШYњљXШKXYЛ[ЬЬќ[љ]KШЫЫ\][Ы‹XЫ\ЬЪYљXШ][Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\РYњљXШPYУЬЬќ[љ]KќZ[ЫЫ\][ЫђЫ\ЬЪYљXШ][Ы”XЪЩ]
›ЩOЛќ^›ЩOЛЫЫ[X[™€ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬЫ\ЛЬЩ[™€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛќЪ[[ЛњЩ[™Ы\К]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЭЪ]Ш\ЬЩ[™€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛќЪ[[ЛњЩ[™Ъ]Ш\
]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛШШ[ЬЭ\ќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛќЪ[[ЛњЭ\ќШ[
]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\ЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛ™ЫЫЩЫSX\ЛњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\ЛЬ›Э]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛ™ЫЫЩЫSX\Лњ›Э]J]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\ЛЩљY[]љ\Ъ]Ь[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ›X\СљY[љ\Ъ]њљYЩKЬ™X]Uљ\Ъ][Љ]ШZ]™XY›ЩJ™\JKЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\ЛЩљY[]љ\Ъ]Ь›Э]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛ›X\СљY[љ\Ъ]њљYЩKњ›Э]Uљ\Ъ][Љ]ШZ]™XY›ЩJ™\JKЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\ЛЩљY[]љ\Ъ]ЬШ]™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›X\СљY[љ\Ъ]њљYЩKњШ]™Uљ\Ъ][Љ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\ЛЩљY[]љ\Ъ]Ь™[Z[™\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›X\СљY[љ\Ъ]њљYЩKЬ™X]Uљ\Ъ]™[Z[™\Љ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\ЛЩљY[]љ\Ъ]ЫЩ™›[™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›X\СљY[љ\Ъ]њљYЩKњ]Y]YUљ\Ъ]Щ™›[™J]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\ЛЩљY[]љ\Ъ]ЬШ]™Y€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ›X\СљY[љ\Ъ]њљYЩKњШ]™Yљ\Ъ][њКЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛШЫЫ[][љXШ][ЫњЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛЫЫ[][љXШ][ЫњРњљYЩKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛШЫЫ[][љXШ][ЫњЛЩYќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛЫЫ[][љXШ][ЫњРњљYЩK™Yќ
]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛШЫЫ[][љXШ][ЫњЛЬЫ\ЛЬЩ[™€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛЫЫ[][љXШ][ЫњРњљYЩKњЩ[™Ы\К]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛШЫЫ[][љXШ][ЫњЛЭЪ]Ш\ЬЩ[™€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛЫЫ[][љXШ][ЫњРњљYЩKњЩ[™Ъ]Ш\
]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛШЫЫ[][љXШ][ЫњЛШШ[Ь™\\™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛЫЫ[][љXШ][ЫњРњљYЩKњ™\\™PШ[
]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛШЫЫ[][љXШ][ЫњЛШШ[ЬЭ\ќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛЫЫ[][љXШ][ЫњРњљYЩKњЭ\ќШ[
]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬ›ЭљY\њЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛ›њKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬ›ЭљY\њЛЬЩX\Ъ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛ›њKњЩX\Ъ
В€[YN€\›њЩX\Ъ\[\Л™Щ]
›[YHЉK€Ь™Ш[љ^][ЫЋ€\›њЩX\Ъ\[\Л™Щ]
›Ь™Ш[љ^][Ы€ЉK€^Ы›Ы^N€\›њЩX\Ъ\[\Л™Щ]
ќ^Ы›Ы^HЉH\›њЩX\Ъ\[\Л™Щ]
њЬXЪX[HЉK€Ъ]N€\›њЩX\Ъ\[\Л™Щ]
Ъ]HЉK€Э]N€\›њЩX\Ъ\[\Л™Щ]
њЭ]HЉK€ЬЭ[ЫЩN€\›њЩX\Ъ\[\Л™Щ]
њЬЭ[ЫЩHЉH\›њЩX\Ъ\[\Л™Щ]
њЬЭ[ШЫЩHЉK€[Z]€\›њЩX\Ъ\[\Л™Щ]
›[Z]ЉB€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬ›ЭљY\њЛЬШ]™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛњ›ЭљY\ђЫЫќXЭњљYЩKњШ]™T›ЭљY\Љ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬ›ЭљY\њЛЫ›ЭH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛњ›ЭљY\ђЫЫќXЭњљYЩKњШ]™T›ЭљY\“›ЭJ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\›љ[™ЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛ›X\›љ[™РњљYЩKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\›љ[™ЛЬЩX\Ъ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛ›X\›љ[™РњљYЩKњЩX\Ъ
В€]Y\ћN€\›њЩX\Ъ\[\Л™Щ]
њHЉH\›њЩX\Ъ\[\Л™Щ]
њ]Y\ћHЉH€‹€Ш]YЫЬћN€\›њЩX\Ъ\[\Л™Щ]
Ш]YЫЬћHЉH€‚€JJNВ€B‚€Y€
\›њ][YKњЭ\ќХЪ]
‹Ш\KЫ™^\ЛЭЫЫЛЫX\›љ[™ЛЬ™\ЫЭ\ЩKИЉH	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭ™\ЫЭ\ЩRYHXЫЩUT’PЫЫ\Ы™[ќ
\›њ][YKњ™\XЩJ‹Ш\KЫ™^\ЛЭЫЫЛЫX\›љ[™ЛЬ™\ЫЭ\ЩKИ‹€ЉJNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ›X\›љ[™РњљYЩKњ™\ЫЭ\ЩJ™\ЫЭ\ЩRY
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\›љ[™ЛШЫЭ\њЩ\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛ›[ЫЩKЫЭ\њЩ\К
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\›љ[™ЛЩ[њ›Ы€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛ›[ЫЩK™[њ›Ы
]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\›љ[™ЛЬШ]™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›X\›љ[™РњљYЩKњШ]™T™\ЫЭ\ЩJ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\›љ[™ЛЬ™[Z[™\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›X\›љ[™РњљYЩKЬ™X]SX\›љ[™Ф™[Z[™\Љ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\›љ[™ЛЫЩ™›[™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›X\›љ[™РњљYЩKњ]Y]YSЩ™›[™J]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫ\ЛШњљYЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛ›\У]™PњљYЩKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫ\ЛШњљYЩKШЫЭ\њЩ\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛ›\У]™PњљYЩKЫЭ\њЩ\КВ€]Y\ћN€\›њЩX\Ъ\[\Л™Щ]
њHЉH\›њЩX\Ъ\[\Л™Щ]
њ]Y\ћHЉH€‹€Ш]YЫЬћN€\›њЩX\Ъ\[\Л™Щ]
Ш]YЫЬћHЉH€‚€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫ\ЛШњљYЩKЬШ]™KXЫЭ\њЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›\У]™PњљYЩKњШ]™PЫЭ\њЩJ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫ\ЛШњљYЩKЩ[њ›Ы\™\\™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ›\У]™PњљYЩK™[њ›Ы™\\™J]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫ\ЛШњљYЩKЩ[њ›Ы€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛ›\У]™PњљYЩK™[њ›Ы
]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЮ›ЫЫKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛћ›ЫЫKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЮ›ЫЫKЫYY][™И€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛћ›ЫЫKЬ™X]SYY][™К]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬЩ\ЬЪ[ЫњЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛњЩ\ЬЪ[ЫђњљYЩKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬЩ\ЬЪ[ЫњЛЬ™\\™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛњЩ\ЬЪ[ЫђњљYЩKњ™\\™J]ШZ]™XY›ЩJ™\JKЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬЩ\ЬЪ[ЫњЛЮ›ЫЫKШЬ™X]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л]ШZ]™^\Ф™X[›ЭљY\њЛњЩ\ЬЪ[ЫђњљYЩKЬ™X]V›ЫЫJ]ШZ]™XY›ЩJ™\JKЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬЩ\ЬЪ[ЫњЛЬ™[Z[™\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛњЩ\ЬЪ[ЫђњљYЩKњ™[Z[™\Љ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬЩ\ЬЪ[ЫњЛЫЩ™›[™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛњЩ\ЬЪ[ЫђњљYЩK›Щ™›[™J]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЩ›Ы™\ЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ™љKњ›ЭљY\”Э]\К
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЩ›Ы™\ЛЫZ\ЬЪ[Ы‹\™\]Y\Э€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ™љK›Z\ЬЪ[Ы”™\]Y\Э
]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЩ›Ы™\ЛШњљYЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛ™›Ы™SZ\ЬЪ[ЫђњљYЩKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЩ›Ы™\ЛШњљYЩKЫZ\ЬЪ[Ы‹\™\]Y\Э€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ™›Ы™SZ\ЬЪ[ЫђњљYЩK›Z\ЬЪ[Ы”™\]Y\Э
]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЩ›Ы™\ЛШњљYЩKЫZ\ЬЪ[Ы‹\™\]Y\ЭИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ™›Ы™SZ\ЬЪ[ЫђњљYЩK›Z\ЬЪ[Ы”™\]Y\ЭКЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЩ›Ы™\ЛШњљYЩKЬ™[Z[™\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ™›Ы™SZ\ЬЪ[ЫђњљYЩKњ™[Z[™\Љ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЩ›Ы™\ЛШњљYЩKЫЩ™›[™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ™›Ы™SZ\ЬЪ[ЫђњљYЩK›Щ™›[™J]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛ›X\љЩ]XЩPњљYЩKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЬЩX\Ъ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ›X\љЩ]XЩPњљYЩKњЩX\Ъ
В€]Y\ћN€\›њЩX\Ъ\[\Л™Щ]
њHЉH\›њЩX\Ъ\[\Л™Щ]
њ]Y\ћHЉH€‹€Ш]YЫЬћN€\›њЩX\Ъ\[\Л™Щ]
Ш]YЫЬћHЉH€‚€KЉJNВ€B‚€Y€
\›њ][YKњЭ\ќХЪ]
‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЫ\Э[™ЛИЉH	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭ\Э[™ТYHXЫЩUT’PЫЫ\Ы™[ќ
\›њ][YKњ™\XЩJ‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЫ\Э[™ЛИ‹€ЉJNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ›X\љЩ]XЩPњљYЩK›\Э[™К\Э[™ТYЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЫ\Э[™ЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ›X\љЩ]XЩK›\Э\Э[™ЬКЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЫ\Э[™И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›X\љЩ]XЩPњљYЩKЬ™X]S\Э[™К]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЪ[њ]Z\ћKЬ™\\™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ›X\љЩ]XЩPњљYЩKњ™\\™R[њ]Z\ћJ]ШZ]™XY›ЩJ™\JKЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЫ›ЭH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›X\љЩ]XЩPњљYЩKњШ]™S›ЭJ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЬ™[Z[™\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›X\љЩ]XЩPњљYЩKЬ™X]T™[Z[™\Љ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЫЩ™›[™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›X\љЩ]XЩPњљYЩKњ]Y]YSЩ™›[™J]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫX\љЩ]XЩKЬ^[Y[ќZ[ќ[ќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛњЭљ\Kњ^[Y[ќ[ќ[ќ
]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬ^[Y[ќЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛњ^[Y[ќ™XY[™\ЬРњљYЩKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬ^[Y[ќЛЬ™XY[™\ЬЛXЪXЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛњ^[Y[ќ™XY[™\ЬРњљYЩKњ™XY[™\ЬРЪXЪК]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬ^[Y[ќЛЬЭљ\KЬ^[Y[ќZ[ќ[ќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛњ^[Y[ќ™XY[™\ЬРњљYЩKњ^[Y[ќ[ќ[ќ
]ШZ]™XY›ЩJ™\JJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫЩ™›[™KЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛ›Щ™›[™TЮ[ЛњЭ]\К
K]Y]YPЫЭ[ќ€
‹њ›Щљ[OЛ›Щ™›[™T]Y]YHЧJK›[™ЭJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫЩ™›[™KЬ]Y]YH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›Щ™›[™TЮ[Лњ]Y]YR][J]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫЩ™›[™KЬЮ[И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›Щ™›[™TЮ[ЛњЮ[К]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫЩ™›[™KШњљYЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛ›Щ™›[™Q^[њЪ[ЫђњљYЩKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫЩ™›[™KШњљYЩKЪ][\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛ›Щ™›[™Q^[њЪ[ЫђњљYЩKљ][\КЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫЩ™›[™KШњљYЩKЬ]Y]YH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›Щ™›[™Q^[њЪ[ЫђњљYЩKњ]Y]YJ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫЩ™›[™KШњљYЩKЬЮ[И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›Щ™›[™Q^[њЪ[ЫђњљYЩKњЮ[К]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЫЩ™›[™KШњљYЩKШЫX\‹\ШY™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛ›Щ™›[™Q^[њЪ[ЫђњљYЩKЫX\”ШY™J]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЭЫЬљЩ›ЭЬЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛќЫЬљЩ›ЭУЬЪ\Э]ЬђњљYЩKњЭ]\К
HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЭЫЬљЩ›ЭЬЛЬ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛќЫЬљЩ›ЭУЬЪ\Э]ЬђњљYЩKњ[Љ]ШZ]™XY›ЩJ™\JKЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЭЫЬљЩ›ЭЬЛЬШ]™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛќЫЬљЩ›ЭУЬЪ\Э]ЬђњљYЩKњШ]™J]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЭЫЬљЩ›ЭЬЛЬ™[Z[™\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛќЫЬљЩ›ЭУЬЪ\Э]ЬђњљYЩKњ™[Z[™\Љ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЭЫЬљЩ›ЭЬЛЫЩ™›[™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛќЫЬљЩ›ЭУЬЪ\Э]ЬђњљYЩK›Щ™›[™J]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€ЫЫњЭYYXШ[Щ]›Э]\ИHВ€‹Ш\KЫ™^\ЛЭЫЫЛЫYYXШ[\Э\ЬќЬЭ]\ИЋ€

HO€
ИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛ›YYXШ[Э\ЬќњљYЩKњЭ]\К
HJK€‹Ш\KЫ™^\ЛЭЫЫЛЫYYXШ[\Э\ЬќЪ[ќZЩ\ИЋ€

HO€™^\Ф™X[›ЭљY\њЛ›YYXШ[Э\ЬќњљYЩKљ[ќZЩ\КЉK€‹Ш\KЫ™^\ЛЭЫЫЛШЪ›ЫљXЛY\ЩX\ЩKЬЭ]\ИЋ€

HO€
ИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛЪ›ЫљXС\ЩX\ЩPњљYЩKњЭ]\К
HJK€‹Ш\KЫ™^\ЛЭЫЫЛШЪ›ЫљXЛY\ЩX\ЩKЪ[ќZЩ\ИЋ€

HO€™^\Ф™X[›ЭљY\њЛЪ›ЫљXС\ЩX\ЩPњљYЩKљ[ќZЩ\КЉK€‹Ш\KЫ™^\ЛЭЫЫЛШЪ›ЫљXЛY\ЩX\ЩKЬ™XY[™ЬИЋ€

HO€™^\Ф™X[›ЭљY\њЛЪ›ЫљXС\ЩX\ЩPњљYЩKњ™XY[™ЬКЉK€‹Ш\KЫ™^\ЛЭЫЫЛЬњKЬЭ]\ИЋ€

HO€
ИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛњњPњљYЩKњЭ]\К
HJK€‹Ш\KЫ™^\ЛЭЫЫЛЬњKЩ]љXЩK\™XY[™ЬИЋ€

HO€™^\Ф™X[›ЭљY\њЛњњPњљYЩK™]љXЩT™XY[™ЬКЉK€‹Ш\KЫ™^\ЛЭЫЫЛЬќKЬЭ]\ИЋ€

HO€
ИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛњќPњљYЩKњЭ]\К
HJK€‹Ш\KЫ™^\ЛЭЫЫЛЬќKШXЭ]љ]KY[ќљY\ИЋ€

HO€™^\Ф™X[›ЭљY\њЛњќPњљYЩKXЭ]љ]Q[ќљY\КЉK€‹Ш\KЫ™^\ЛЭЫЫЛЭ[ZX[ЬЭ]\ИЋ€

HO€
ИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛќ[ZX[њљYЩKњЭ]\К
HJK€‹Ш\KЫ™^\ЛЭЫЫЛЭ[ZX[Ъ[ќZЩ\ИЋ€

HO€™^\Ф™X[›ЭљY\њЛќ[ZX[њљYЩKљ[ќZЩ\КЉK€‹Ш\KЫ™^\ЛЭЫЫЛЭ[ZX[ЬЩ\ЬЪ[ЫњИЋ€

HO€™^\Ф™X[›ЭљY\њЛќ[ZX[њљYЩKњЩ\ЬЪ[ЫњКЉK€‹Ш\KЫ™^\ЛЭЫЫЛЫ[Шљ[KXЫ[љXЬЛЬЭ]\ИЋ€

HO€
ИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛ›[Шљ[PЫ[љXРњљYЩKњЭ]\К
HJK€‹Ш\KЫ™^\ЛЭЫЫЛЫ[Шљ[KXЫ[љXЬЛЬЩX\ЪЋ€

HO€™^\Ф™X[›ЭљY\њЛ›[Шљ[PЫ[љXРњљYЩKњЩX\Ъ
Шљ™XЭ™њ›ЫQ[ќљY\К\›њЩX\Ъ\[\Л™[ќљY\К
JJK€‹Ш\KЫ™^\ЛЭЫЫЛЫ[Шљ[KXЫ[љXЬЛЪ[ќZЩ\ИЋ€

HO€™^\Ф™X[›ЭљY\њЛ›[Шљ[PЫ[љXРњљYЩKљ[ќZЩ\КЉK€‹Ш\KЫ™^\ЛЭЫЫЛЬ\›XXЮKЬЭ]\ИЋ€

HO€
ИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛњ\›XXЮPњљYЩKњЭ]\К
HJK€‹Ш\KЫ™^\ЛЭЫЫЛЬ\›XXЮKЬЩX\ЪЋ€

HO€™^\Ф™X[›ЭљY\њЛњ\›XXЮPњљYЩKњЩX\Ъ
Шљ™XЭ™њ›ЫQ[ќљY\К\›њЩX\Ъ\[\Л™[ќљY\К
JJK€‹Ш\KЫ™^\ЛЭЫЫЛЬ\›XXЮKЪ[ќZЩ\ИЋ€

HO€™^\Ф™X[›ЭљY\њЛњ\›XXЮPњљYЩKљ[ќZЩ\КЉK€‹Ш\KЫ™^\ЛЭЫЫЛЬ]Y[ќ\Э\ЬќЬЭ]\ИЋ€

HO€
ИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛњ]Y[ќЭ\ЬќњљYЩKњЭ]\К
HJK€‹Ш\KЫ™^\ЛЭЫЫЛЬ]Y[ќ\Э\ЬќЬ™\ЫЭ\Щ\ИЋ€

HO€™^\Ф™X[›ЭљY\њЛњ]Y[ќЭ\ЬќњљYЩKњ™\ЫЭ\Щ\КШљ™XЭ™њ›ЫQ[ќљY\К\›њЩX\Ъ\[\Л™[ќљY\К
JJK€‹Ш\KЫ™^\ЛЭЫЫЛЬ]Y[ќ\Э\ЬќЪ[ќZЩ\ИЋ€

HO€™^\Ф™X[›ЭљY\њЛњ]Y[ќЭ\ЬќњљYЩKљ[ќZЩ\КЉB€NВ‚€Y€
™\K›Y]ЩOOH‘СU€	‰€YYXШ[Щ]›Э]\ЦЭ\›њ][YWJHВ€ЫЫњЭ™\Э[HYYXШ[Щ]›Э]\ЦЭ\›њ][YWJ
NВ€Y€
™\Э[›ЩJH™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€ЫЫњЭYYXШ[ЬЭ›Э]\ИHВ€‹Ш\KЫ™^\ЛЭЫЫЛЫYYXШ[\Э\ЬќЪ[ќZЩHЋ€И›YYXШ[Э\ЬќњљYЩH‹љ[ќZЩH‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЫYYXШ[\Э\ЬќЬЭ[[X\ћHЋ€И›YYXШ[Э\ЬќњљYЩH‹њЭ[[X\ћH‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛЫYYXШ[\Э\ЬќЬ›ЭљY\‹\™\ЬќЋ€И›YYXШ[Э\ЬќњљYЩH‹њ›ЭљY\”™\Ьќ‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛЫYYXШ[\Э\ЬќЬШ]™HЋ€И›YYXШ[Э\ЬќњљYЩH‹њШ]™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЫYYXШ[\Э\ЬќЬ™[Z[™\€Ћ€И›YYXШ[Э\ЬќњљYЩH‹њ™[Z[™\€‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЫYYXШ[\Э\ЬќЫЩ™›[™HЋ€И›YYXШ[Э\ЬќњљYЩH‹›Щ™›[™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛШЪ›ЫљXЛY\ЩX\ЩKЪ[ќZЩHЋ€ИЪ›ЫљXС\ЩX\ЩPњљYЩH‹љ[ќZЩH‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛШЪ›ЫљXЛY\ЩX\ЩKЬ™XY[™ИЋ€ИЪ›ЫљXС\ЩX\ЩPњљYЩH‹њ™XY[™И‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛШЪ›ЫљXЛY\ЩX\ЩKЭ™[™\Э[[X\ћHЋ€ИЪ›ЫљXС\ЩX\ЩPњљYЩH‹ќ™[™Э[[X\ћH‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛШЪ›ЫљXЛY\ЩX\ЩKЬ›ЭљY\‹\™\ЬќЋ€ИЪ›ЫљXС\ЩX\ЩPњљYЩH‹њ›ЭљY\”™\Ьќ‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛШЪ›ЫљXЛY\ЩX\ЩKЬ™[Z[™\€Ћ€ИЪ›ЫљXС\ЩX\ЩPњљYЩH‹њ™[Z[™\€‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛШЪ›ЫљXЛY\ЩX\ЩKЫЩ™›[™HЋ€ИЪ›ЫљXС\ЩX\ЩPњљYЩH‹›Щ™›[™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬњKЪ[ќZЩHЋ€ИњњPњљYЩH‹љ[ќZЩH‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬњKЩ]љXЩK\™XY[™ИЋ€ИњњPњљYЩH‹™]љXЩT™XY[™И‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬњKЭ™[™\Э[[X\ћHЋ€ИњњPњљYЩH‹ќ™[™Э[[X\ћH‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛЬњKЬ›ЭљY\‹\™\ЬќЋ€ИњњPњљYЩH‹њ›ЭљY\”™\Ьќ‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛЬњKЬ™[Z[™\€Ћ€ИњњPњљYЩH‹њ™[Z[™\€‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬњKЫЩ™›[™HЋ€ИњњPњљYЩH‹›Щ™›[™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬќKЪ[ќZЩHЋ€ИњќPњљYЩH‹љ[ќZЩH‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬќKШXЭ]љ]KY[ќћHЋ€ИњќPњљYЩH‹XЭ]љ]Q[ќћH‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬќKШY\™[ЩK\Э[[X\ћHЋ€ИњќPњљYЩH‹Y\™[ЩTЭ[[X\ћH‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛЬќKЬ›ЭљY\‹\™\ЬќЋ€ИњќPњљYЩH‹њ›ЭљY\”™\Ьќ‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛЬќKЬ™[Z[™\€Ћ€ИњќPњљYЩH‹њ™[Z[™\€‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬќKЫЩ™›[™HЋ€ИњќPњљYЩH‹›Щ™›[™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЭ[ZX[Ъ[ќZЩHЋ€Иќ[ZX[њљYЩH‹љ[ќZЩH‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЭ[ZX[Ь™\\™HЋ€Иќ[ZX[њљYЩH‹њ™\\™H‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛЭ[ZX[ЬЩ\ЬЪ[Ы‹ШЬ™X]HЋ€Иќ[ZX[њљYЩH‹Ь™X]TЩ\ЬЪ[Ы€‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛЭ[ZX[ЬЩ\ЬЪ[Ы‹ЬШ]™HЋ€Иќ[ZX[њљYЩH‹њШ]™TЩ\ЬЪ[Ы€‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЭ[ZX[Ь™[Z[™\€Ћ€Иќ[ZX[њљYЩH‹њ™[Z[™\€‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЭ[ZX[ЫЩ™›[™HЋ€Иќ[ZX[њљYЩH‹›Щ™›[™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЫ[Шљ[KXЫ[љXЬЛЪ[ќZЩHЋ€И›[Шљ[PЫ[љXРњљYЩH‹љ[ќZЩH‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЫ[Шљ[KXЫ[љXЬЛЬШ]™HЋ€И›[Шљ[PЫ[љXРњљYЩH‹њШ]™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЫ[Шљ[KXЫ[љXЬЛЭљ\Ъ]\[€Ћ€И›[Шљ[PЫ[љXРњљYЩH‹ќљ\Ъ][€‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛЫ[Шљ[KXЫ[љXЬЛЬ™[Z[™\€Ћ€И›[Шљ[PЫ[љXРњљYЩH‹њ™[Z[™\€‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЫ[Шљ[KXЫ[љXЬЛЫЩ™›[™HЋ€И›[Шљ[PЫ[љXРњљYЩH‹›Щ™›[™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬ\›XXЮKЪ[ќZЩHЋ€Ињ\›XXЮPњљYЩH‹љ[ќZЩH‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬ\›XXЮKЬШ]™HЋ€Ињ\›XXЮPњљYЩH‹њШ]™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬ\›XXЮKЬ]Y\Э[Ы‹YYќЋ€Ињ\›XXЮPњљYЩH‹њ]Y\Э[Ы‘Yќ‹[ЩWK€‹Ш\KЫ™^\ЛЭЫЫЛЬ\›XXЮKЬ™[Z[™\€Ћ€Ињ\›XXЮPњљYЩH‹њ™[Z[™\€‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬ\›XXЮKЫЩ™›[™HЋ€Ињ\›XXЮPњљYЩH‹›Щ™›[™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬ]Y[ќ\Э\ЬќЪ[ќZЩHЋ€Ињ]Y[ќЭ\ЬќњљYЩH‹љ[ќZЩH‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬ]Y[ќ\Э\ЬќЬШ]™HЋ€Ињ]Y[ќЭ\ЬќњљYЩH‹њШ]™H‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬ]Y[ќ\Э\ЬќЬ™[Z[™\€Ћ€Ињ]Y[ќЭ\ЬќњљYЩH‹њ™[Z[™\€‹ќYWK€‹Ш\KЫ™^\ЛЭЫЫЛЬ]Y[ќ\Э\ЬќЫЩ™›[™HЋ€Ињ]Y[ќЭ\ЬќњљYЩH‹›Щ™›[™H‹ќYWB€NВ‚€Y€
™\K›Y]ЩOOH”ФХ€	‰€YYXШ[ЬЭ›Э]\ЦЭ\›њ][YWJHВ€ЫЫњЭЬ›ЭљY\’Щ^KY]Щ[YKЪЭ[\њЪ\ЭHHYYXШ[ЬЭ›Э]\ЦЭ\›њ][YWNВ€ЫЫњЭ™\Э[H]ШZ]™^\Ф™X[›ЭљY\њЦЬ›ЭљY\’Щ^WVЫY]Щ[YWJ]ШZ]™XY›ЩJ™\JKЉNВ€Y€
ЪЭ[\њЪ\Э	‰€™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬ™[Z[™\њЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊИЪО€ќYK‹‹›™^\Ф™X[›ЭљY\њЛњ™[Z[™\њЛњЭ]\К
KЫЭ[ќ€
‹њ›Щљ[OЛ›™^\Ф™[Z[™\њИЧJK›[™ЭJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬ™[Z[™\њИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™^\Ф™X[›ЭљY\њЛњ™[Z[™\њЛ›\Э
ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЭЫЫЛЬ™[Z[™\њЛШЬ™X]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ™\Э[H™^\Ф™X[›ЭљY\њЛњ™[Z[™\њЛЬ™X]J]ШZ]™XY›ЩJ™\JKЉNВ€Y€
™\Э[›ЩOЛњЭ]\ИOOHЫЫ\]YЉH]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™›ЭљY\”™\Э[
™\Л™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩ[™Ъ[™\ЛЫX[љY™\Э€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ]™Q[™Ъ[™SX[љY™\Э
ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ]\ЪXЛЬЬЭYћKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЭљY\€Hќ[ќ[YT›ЭљY\њКЉK™љ[™
][HO€][KљYOOH›]\ЪXЛ\^XXЪИЉHЯNВ€ЫЫњЭЫЫ›™XЭ[Ы€HЬЭYћU\Щ\ђЫЫ›™XЭ[ЫЉ‹\Щ\ЉNВ€™]\›€Щ[™
™\ЛЊВ€›ЭљY\Ћ€њЬЭYћH‹€Э]\О€ЫЫ›™XЭ[ЫЏЛњ™Yњ™\ЪЪЩ[€ИЫЫ›™XЭY€€›ЭљY\‹њЭ]\И›™YYЛXЬ™Y[ќX[И‹€ЫЫ›™XЭY€›ЫЫX[ЉЫЫ›™XЭ[ЫЏЛњ™Yњ™\ЪЪЩ[€ЬЭYћT^XXЪРЫЫ™љYЭ\™Y

JK€›ЭљY\”Э]\О€›ЭљY\‹њЭ]\Иќ[љЫ›ЭЫ€‹€ЩЪ[•\›€‹Ш\KЫ]\ЪXЛЬЬЭYћKЫЩЪ[€‹€ШЫЬ\О€Иќ\Щ\‹[[ЩYћK\^XXЪЛ\Э]H‹ќ\Щ\‹\™XY\^XXЪЛ\Э]H—K€›ЭN€”ЬЭYћH^XXЪИ™\]Z\™\ИHЪYЫ™YZ[€ЬЭYћH\Щ\‹[€XЭ]™HЬЭYћH]љXЩK[™\ЭX[HЬЭYћH™[Z][K€‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ]\ЪXЛЬЬЭYћKЫЩЪ[€€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y™Y›Ь™HЫЫ›™XЭ[™ИЬЭYћH€JNВ€Y€
\›ШЩ\ЬЛ™[ќ‹”ФХQ–WРУQS•ТQ
H™]\›€Щ[™
™\ЛИ\њ›ЬЋ€”ФХQ–WРУQS•ТQ\И™\]Z\™Y€JNВ€ЫЫњЭЭ]HHЬћ\Лњ[™ЫPћ]\КN
KќФЭљ[™Кљ^ЉNВ€ЫЫњЭЪYH\њЩPЫЫЪЪY\К™\JKYЬљ[™^\ЧЬЪY€ЋВ€ЬЭYћSР]]Э]\ЛњЩ]
Э]KИ\Щ\’Y€\Щ\‹љYЪYЬ™X]Y]€]K››ЭК
HJNВ€ЫЫњЭ\[\ИH™]ИT“ЩX\Ъ\[\КВ€™\ЬЫњЩWЭ\N€ЫЩH‹€ЫY[ќЪY€›ШЩ\ЬЛ™[ќ‹”ФХQ–WРУQS•ТQ€ШЫЬN€ќ\Щ\‹[[ЩYћK\^XXЪЛ\Э]H\Щ\‹\™XY\^XXЪЛ\Э]H‹€™Y\™XЭЭ\љN€ЬЭYћT™Y\™XЭ\љJ™\JK€Э]B€JNВ€™\ЛќЬљ]RXY
М‹ИШШ][ЫЋ€О‹ЛШXШЫЭ[ќЛњЬЭYћKЫЫKШ]]Ьљ^™OЙЬ\[\ЛќФЭљ[™К
_XJNВ€™]\›€™\Л™[™

NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ]\ЪXЛЬЬЭYћKШШ[XЪИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭЭ]HH\›њЩX\Ъ\[\Л™Щ]
њЭ]HЉH€ЋВ€ЫЫњЭЫЩHH\›њЩX\Ъ\[\Л™Щ]
ЫЩHЉH€ЋВ€ЫЫњЭ\њ›Ь€H\›њЩX\Ъ\[\Л™Щ]
™\њ›Ь€ЉH€ЋВ€ЫЫњЭЭЬ™YHЬЭYћSР]]Э]\Л™Щ]
Э]JNВ€Y€
Э]JHЬЭYћSР]]Э]\Л™[]JЭ]JNВ€Y€
\њ›ЬЉH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ЬЭYћH]]Ьљ^][Ы€Z[Y€	Щ\њ›ЬџXJNВ€Y€
\ЭЬ™YXЫЩJH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€”ЬЭYћH]]Ьљ^][Ы€Э]HШ\И›Э™XЫЩЫљ^™Y€JNВ€ЫЫњЭ]]\Щ\€H‹ќ\Щ\њЛ™љ[™
][HO€][KљYOOHЭЬ™Yќ\Щ\’Y
NВ€Y€
X]]\Щ\ЉH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€”ЬЭYћHЫЫ›™XЭ[Ы€\Щ\€›Э›Э[™€JNВ€ћHВ€ЫЫњЭЪЩ[€H]ШZ]ЬЭYћUЪЩ[”™\]Y\Э
В€Ь[ќЭ\N€]]Ьљ^][Ы—ШЫЩH‹€ЫЩK€™Y\™XЭЭ\љN€ЬЭYћT™Y\™XЭ\љJ™\JB€JNВ€[њЭ\™S]\ЪXФ›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ^\Э[™ИHЬЭYћU\Щ\ђЫЫ›™XЭ[ЫЉ‹]]\Щ\ЉNВ€ЫЫњЭЫЫ›™XЭ[Ы€H^\Э[™ИИY€Ьћ\Лњ[™ЫUURQ

K›ЭљY\Ћ€њЬЭYћH‹\Щ\’Y€]]\Щ\‹љYЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HNВ€ЫЫ›™XЭ[Ы‹њ™Yњ™\ЪЪЩ[€HЪЩ[‹њ™Yњ™\ЪЭЪЩ[€ЫЫ›™XЭ[Ы‹њ™Yњ™\ЪЪЩ[ЋВ€ЫЫ›™XЭ[Ы‹њШЫЬHHЪЩ[‹њШЫЬHќ\Щ\‹[[ЩYћK\^XXЪЛ\Э]H\Щ\‹\™XY\^XXЪЛ\Э]HЋВ€ЫЫ›™XЭ[Ы‹ќЪЩ[•\HHЪЩ[‹ќЪЩ[—Э\Hђ™X\™\€ЋВ€ЫЫ›™XЭ[Ы‹ќ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€ЫЫ›™XЭ[Ы‹ќ\Щ\‘[XZ[H]]\Щ\‹™[XZ[В€Y€
Y^\Э[™КH‹њ›Щљ[K›]\ЪXРЫЫ›™XЭ[ЫњЛќ[њЪYќ
ЫЫ›™XЭ[ЫЉNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›]\ЪXЛ\^XXЪИ‹€[Щ[N€ђYЩ[ќRH‹€XЭ[ЫЋ€›]\ЪXЛњЬЭYћWШЫЫ›™XЭY‹€Э]\О€њЭXШЩ\ЬИ‹€]Z[€ЬЭYћH^XXЪИЫЫ›™XЭY›Ь€	Ш]]\Щ\‹™[XZ[K€Y]Y]N€И\Щ\’Y€]]\Щ\‹љYШЫЬN€ЫЫ›™XЭ[Ы‹њШЫЬHK€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€™\ЛќЬљ]RXY
М‹ИШШ][ЫЋ€‹ПЬЬЭYћOXЫЫ›™XЭY€JNВ€™]\›€™\Л™[™

NВ€HШ]Ъ
Ш[XЪС\њ›ЬЉHВ€™]\›€Щ[™
™\ЛИ\њ›ЬЋ€Ш[XЪС\њ›Ь‹›Y\ЬШYЩH”ЬЭYћHШ[XЪИZ[Y€JNВ€B€B‚€Y€
\›њ][YHOOH‹Ш\KЫ]\ЪXЛЬ^H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]]\ЪXФ›ЭљY\ђЫЫ[X[™™\ЬЫњЩJ‹\Щ\‹›ЩKЫЫ[X[™›ЩKњ]Y\ћHњ^H]\ЪXИ‹И]љXЩRY€›ЩK™]љXЩRYJNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИ]\ЪXФ^XXЪО€™\Э[Э]N€X›XФЭ]J‹\Щ\ЉHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ]\ЪXЛЮ[Э]X™KЬЩX\Ъ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ]Y\ћHHЭљ[™К›ЩKњ]Y\ћH›ЩKЫЫ[X[™€ЉKќљ[J
NВ€Y€
\]Y\ћJH™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€“]\ЪXИЩX\Ъ]Y\ћH\И™\]Z\™Y€JNВ€ЫЫњЭЫЭ\ЩHH]ШZ]™^\У]\ЪXУYYXTЫЭ\ЩT›ЭљY\‹™Щ]]\ЪXУYYXTЫЭ\ЩT™\Э[\Ю[КИYYXT™\]Y\Э€]Y\ћHK›ШЩ\ЬЛ™[ќЉNВ€ЫЫњЭX]ЪHЭљ[™КЫЭ\ЩKњЫЭ\ЩU\›€ЉK›X]Ъ
ЦПЙ—]ЏJРKVK^ЊNWЛW^Н‹JKКNВ€Y€
[X]ЪЫЭ\ЩKњЫЭ\ЩTЭ]\ИOOHњЫЭ\ЩK\™\Э[X]Z[X›HЉHВ€™]\›€Щ[™
™\ЛLЛВ€ЪО€[ЩK€›ЭљY\Ћ€ћ[Э]X™H‹€Э]\О€ЫЭ\ЩKњЫЭ\ЩTЭ]\ИњЫЭ\ЩK][]Z[X›H‹€\њ›ЬЋ€ЫЭ\ЩKњ™\Э[Э[[X\ћH–[ЭUX™HY›Э™]\›€H^XX›H™\Э[‚€JNВ€B€ЫЫњЭ]HHЭљ[™КЫЭ\ЩKњ™\Э[Э[[X\ћH€ЉB€њ™\XЩJЧ–[ЭUX™HљY[И›Э[™—К‹ЪK€ЉB€њ™\XЩJЧКш %КЛЉ‰Л€ЉB€ќљ[J
H]Y\ћNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€›ЭљY\Ћ€ћ[Э]X™H‹€Э]\О€њ^XXЪЛ\™XYH‹€]Y\ћK€љY[ТY€X]ЪМWK€]B€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ]]™KЭ›ЪXЩK\ќ[ќ[YH€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ]]™U›ЪXЩTќ[ќ[YS[Щ[
‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ]]™KЭ›ЪXЩKX\Ъ]XЭ\™H€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€]]™U›ЪXЩTќ[ќ[YN€]]™U›ЪXЩTќ[ќ[YS[Щ[
‹\Щ\ЉK€›ЭљY\‘\€›ЭљY\‘\[Щ[
ќ[ќ[YT›ЭљY\њКЉJK€ЫЫќ™\њШ][ЫђЫЬ™N€В€[™Ъ[ќ€‹Ш\KШYЩ[ќШЫЫќ™\њШ][Ы‹XЫЬ™H‹€[ЩN€њЩXЭ\™Y‹€\њЬЩN€“Ь[€ЫЫќ™\њШ][Ы‹Ы\љYљXШ][Ы‹ЫЬљЩ›ЭИ›Э][™Л›ЭљY\‹X]Ш\™H[њЭЩ\њЛ[™[\\™™XЭ[[™ЭXYЩHЭ\Ьќ€‚€K€™X[[YU›ЪXЩN€В€[™Ъ[ќ€‹Ш\KЭ›ЪXЩKЬ™X[[YKШШ[‹€Э]\С[™Ъ[ќ€‹Ш\KЭ›ЪXЩKЬ™X[[YKЬЭ]\И‹€›ЭљY\Ћ€›Ь[ZK\™X[[YK]ЩXњќИ‹€Ь\][Ы[[ЩN€њ™X[[YK]ЫЫИ‹€Ш[‘^XЭ]UЫЬљЩ›ЭЬО€ќYK€ЫЫ[™Ъ[ќ€‹Ш\KЭ›ЪXЩKЬ™X[[YKЭЫЫ‹€ЫЫ[YN€›™^\ЧШШ\Xљ[]WЬ›Э]\€‹€ШY™]N€•ЫЫИ›Э]H›ЭYЪ™^\И™\ЬЫњЩH[ќ™[Ь\И[™^\Э[™ИЫЫ™љ\›X][Ы€Ш]\Л€‹€™XYN€›ЫЫX[Љ›ШЩ\ЬЛ™[ќ‹“ФSђRWРTWТСVJK€[Щ[€Ь[ђZT™X[[YS[Щ[

K€›ЪXЩN€Ь[ђZT™X[[YU›ЪXЩJ
B€K€\]Y]€™]И]J
KќТTУФЭљ[™К
B€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ]]™KЭ›ЪXЩK\ќ[ќ[YH€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЩ\ЬЪ[Ы€H™YЪ\Э\“]]™T\›Z\ЬЪ[Ы”Щ\ЬЪ[ЫЉ‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›]]™T\›Z\ЬЪ[Ы”Щ\ЬЪ[Ы€HЩ\ЬЪ[ЫЋВ€Э]K›]]™U›ЪXЩTќ[ќ[YHH]]™U›ЪXЩTќ[ќ[YS[Щ[
‹\Щ\ЉNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШЫЫ[][љXШ][ЫњЛЩ^XЭ][Ы‹\™XY[™\ЬИ€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH™\K›Y]ЩOOH”ФХ€И]ШZ]™XY›ЩJ™\JH€ЯNВ€™]\›€Щ[™
™\ЛЊЫЫ[][љXШ][ЫњС^XЭ][Ы”™XY[™\ЬК‹\Щ\‹›ЩJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩ[™Ъ[™\ЛЬ™[™\‹Y[ќ‹\[€€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€™]\›€Щ[™
™\ЛЊ™[™\‘[™Ъ[™Q[ќ”[ЉЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ›ЩXЭ[Ы‹ШЫЫ\]KXЪXЪИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭ›ЭљY\њИHќ[ќ[YT›ЭљY\њКЉNВ€™]\›€Щ[™
™\ЛЊ›ЩXЭ[ЫђЫЫ\][™\ЬК‹›ЭљY\њКJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ›ЩXЭ[Ы‹ЫЬ\][ЫњЛ\[€€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭ›ЭљY\њИHќ[ќ[YT›ЭљY\њКЉNВ€™]\›€Щ[™
™\ЛЊ›ЩXЭ[Ы“Ь\][ЫњФ[Љ‹›ЭљY\њКJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ›ЩXЭ[Ы‹ШXЭ]][Ы‹YЭZYH€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭ›ЭљY\њИHќ[ќ[YT›ЭљY\њКЉNВ€™]\›€Щ[™
™\ЛЊ›ЩXЭ[ЫђXЭ]][Ы‘ЭZYJ‹›ЭљY\њКJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKЫ™^XXЭ[ЫњИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€™]\›€Щ[™
™\ЛЊЫX\ќ™^XЭ[ЫњК‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKЩY\[Ь\][™И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€™]\›€Щ[™
™\ЛЊY\Ь\][™Т[ќ[YЩ[ЩJ‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉKИ[ЩN€\Щ\‹њ›ЫHJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKЫ›Л]™[™Ь‹][€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭXЪИH›Х™[™Ь•\ЬYU[”XЪК‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉKИ\њЪ\Э€›ЩKњ\њЪ\ЭOOH[ЩHJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K››Х™[™Ь•\ЬYU[”™\Э[HXЪОВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKЫЩ™›[™K\™X\ЫЫљ[™И€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™X\ЫЫљ[™ИHЩ™›[™T™X\ЫЫљ[™РњZ[“[Щ[
‹\Щ\‹›ЩKЫЫ[X[™›ЩKњ›Ы\€‹И\њЪ\Э€›ЩKњ\њЪ\ЭOOH[ЩHJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›Щ™›[™T™X\ЫЫљ[™РњZ[”™\Э[H™X\ЫЫљ[™ОВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKЫX^[][KYY™љXЪY[ЮH€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[Щ[HX^[][SЬ\][Ы[Y™љXЪY[ЮS[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉKИ\њЪ\Э€›ЩKњ\њЪ\ЭOOH[ЩHJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›X^[][SЬ\][Ы[Y™љXЪY[ЮT™\Э[H[Щ[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKШ]]Ы›Ы[Э\Л[ЫЬ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫЬH]]Ы›Ы[Э\УЬ\][™УЫЬ[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉKИ\њЪ\Э€›ЩKњ\њЪ\ЭOOH[ЩHJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K]]Ы›Ы[Э\УЬ\][™УЫЬ™\Э[HЫЬВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKШЫЫXЭ]™KY]›Ы][Ы€€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€™]\›€Щ[™
™\ЛЊЫЫXЭ]™R[ќ[YЩ[ЩQ[™Ъ[™J‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKШЫЫXЭ]™KY]›Ы][Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[Щ[HЫЫXЭ]™R[ќ[YЩ[ЩQ[™Ъ[™J‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉKИ\њЪ\Э€›ЩKњ\њЪ\ЭOOH[ЩHJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЫXЭ]™R[ќ[YЩ[ЩT™\Э[H[Щ[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKЩњ›ЫќY\‹XњZ[€€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€™]\›€Щ[™
™\ЛЊњ›ЫќY\“™^\РњZ[“[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKЩњ›ЫќY\‹XњZ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[Щ[Hњ›ЫќY\“™^\РњZ[“[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉKИ\њЪ\Э€›ЩKњ\њЪ\ЭOOH[ЩHJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K™њ›ЫќY\ђњZ[”™\Э[H[Щ[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ]›Ь›KШЬ›ЬЬЛYќ[Э[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭќ[€H]ШZ]ќ[ђЬ›ЬЬФ]›Ь›Qќ[Э[ЫЉ‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЬ›ЬЬФ]›Ь›Qќ[Э[Ы”™\Э[Hќ[ЋВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ›ЩXЭ[Ы‹Ы]™K\Щ\ќљXЩKXЪXЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ™\ЬќH]ШZ]›ЩXЭ[Ы“]™TЩ\ќљXЩPЪXЪК‹\Щ\ЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›]™TЩ\ќљXЩPЪXЪФ™\Э[H™\ЬќВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ›ЭљY\њЛЬX›XЛZ[ќ[YЩ[ЩKXЪXЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ™\ЬќH]ШZ]X›XФ›ЭљY\”›Ш™TXЪКЉNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€њX›XЛ]ЩX]\‹[Ь[›Y][И‹€[Щ[N€”X›XИ[ќ[YЩ[ЩH‹€XЭ[ЫЋ€њX›XЧЪ[ќ[YЩ[ЩKњ›ЭљY\—ШЪXЪИ‹€Э]\О€™\Ьќ›ЪИИњЭXШЩ\ЬИ€€›™YYЛ[™]ЫЬљИ‹€]Z[€X›XИ[ќ[YЩ[ЩH›ЭљY\€ЪXЪИЫЫ\]Y€	Ь™\Ьќњ™XYPЫЭ[ќKЙЬ™\ЬќќЭ[H™\ЬЫ™Y›Ь€	Ь™\ЬќЫЭ[ќћ_K€Y]Y]N€И™\ЬќK€\Ь]Ъ€[ЩB€JNВ€YXЭ]љ]J‹њ›Щљ[KX›XИ[ќ[YЩ[ЩH›ЭљY\€ЪXЪИЫЫ\]Y€	Ь™\Ьќњ™XYPЫЭ[ќKЙЬ™\ЬќќЭ[H™\ЬЫ™Y
NВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KњX›XТ[ќ[YЩ[ЩPЪXЪФ™\Э[H™\ЬќВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭљY[ЛЬЩ\ЬЪ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
]\Щ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[Щ[S[YHHљY[ФЩ\ЬЪ[Ы“[Щ[Q›Ьђ›ЩJ›ЩJNВ€Y€
[Щ[S[YHOOH’X[Ш\™H€	‰€XШ[•Ьљ]RX[
\Щ\ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИX[Ш\™HљY[ИЩ\ЬЪ[ЫњИ€JNВ€Y€
[Щ[S[YHOOHђYЬљUYH€	‰€XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYHљY[ИЩ\ЬЪ[ЫњИ€JNВ€ЫЫњЭљY[ФЩ\ЬЪ[Ы”™\Э[HЬ™X]UљY[ФЩ\ЬЪ[Ы•ЫЬљЩ›ЭК‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KќљY[ФЩ\ЬЪ[Ы”™\Э[HљY[ФЩ\ЬЪ[Ы”™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫЩЪ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[XZ[HЭљ[™К›ЩK™[XZ[€ЉKќљ[J
KќУЭЩ\ђШ\ЩJ
NВ€ЫЫњЭ\ЬЭЫЬ™HЭљ[™К›ЩKњ\ЬЭЫЬ™€ЉNВ€Y€
Y[XZ[\\ЬЭЫЬ™ќљ[J
JH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€‘[XZ[[™\ЬЭЫЬ™\™H™\]Z\™Y€JNВ€ЫЫњЭ›Э[™H‹ќ\Щ\њЛ™љ[™
][HO€Эљ[™К][K™[XZ[€ЉKќУЭЩ\ђШ\ЩJ
HOOH[XZ[	‰€Эљ[™К][Kњ\ЬЭЫЬ™€ЉHOOH\ЬЭЫЬ™
NВ€Y€
Y›Э[™
H™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€’[ќ[Y[[ИЬ™Y[ќX[И€JNВ€Y€
\Щ\њРЪ[™ЩY
H]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЪYHЬћ\Лњ[™ЫPћ]\КЌ
KќФЭљ[™Кљ^ЉNВ€Щ\ЬЪ[ЫњЛњЩ]
ЪY›Э[™љY
NВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹›Э[™
KИњЩ]XЫЫЪЪYHЋ€YЬљ[™^\ЧЬЪYIЬЪYNИЫ›NИШ[YTЪ]OS^И]KШJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫЩЫЭ]€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭЪYH\њЩPЫЫЪЪY\К™\JKYЬљ[™^\ЧЬЪYВ€Y€
ЪY
HЩ\ЬЪ[ЫњЛ™[]JЪY
NВ€™]\›€Щ[™
™\ЛЊИЪО€ќYHKИњЩ]XЫЫЪЪYHЋ€YЬљ[™^\ЧЬЪYNИX^PYЩOLИ]KИ€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШ]]Ь\ЬЭЫЬ™\™\Щ]€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[XZ[HЭљ[™К›ЩK™[XZ[€ЉKќљ[J
KќУЭЩ\ђШ\ЩJ
NВ€Y€
Y[XZ[
H™]\›€Щ[™
™\ЛИ\њ›ЬЋ€‘[XZ[\И™\]Z\™Y€JNВ€ЫЫњЭ™\Щ]]™[ќHВ€›ЭљY\’Y€]]\\ЬЭЫЬ™\™\Щ]‹€[Щ[N€”]›Ь›H‹€XЭ[ЫЋ€]]њ\ЬЭЫЬ™Ь™\Щ]Ь™\]Y\ЭY‹€]Z[€\ЬЭЫЬ™™\Щ]™\]Y\ЭY›Ь€	Щ[XZ[K€Y]Y]N€И[XZ[B€NВ€ЫЫњЭ[]™\ћHH]ШZ]\Ь]Ъ›ЭљY\•ЩXљЫЪК‹™\Щ]]™[ќ
KШ]Ъ
\њ›Ь€O€
И][\Y€ќYKЪО€[ЩKЭ]\О€™\Ь]ЪY\њ›Ь€‹\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩHJJNВ€ЩТ[ќYЬ][ЫЉ‹В€‹‹њ™\Щ]]™[ќ€Э]\О€[]™\ћK›ЪИИњЭXШЩ\ЬИ€€›™YYЛXЬ™Y[ќX[И‹€Y]Y]N€И[XZ[[]™\ћHK€\Ь]Ъ€[ЩB€JNВ€YXЭ]љ]J‹њ›Щљ[K\ЬЭЫЬ™™\Щ]™\]Y\ЭY›Ь€	Щ[XZ[K
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИЪО€ќYKЭ]\О€[]™\ћK›ЪИИњЩ[ќ€€њ]Y]YY[™YYЛ\›ЭљY\€€JNВ€B‚€Y€
\›њ][YKњЭ\ќХЪ]
‹Ш\KЭ›ЪXЩKЬЫ™KШ]Y[ЛИЉH	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭYH]\Щ[[YJ\›њ][YJKњ™\XЩJЧ›\ЙЛ€ЉNВ€ЫЫњЭ]Y[ИHЫ™P]Y[РШXЪK™Щ]
Y
NВ€Y€
X]Y[КH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€”Ы™H]Y[И›Э›Э[™€JNВ€™\ЛќЬљ]RXY
ЊВ€ЫЫќ[ќ]\HЋ€]Y[ЛЫ\YИ‹€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™H‹€ћXЫЫќ[ќ]\K[Ь[ЫњИЋ€››ЬЫљY™€‚€JNВ€™]\›€™\Л™[™
]Y[ЛќY™™\ЉNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬЫ™KЫЭ]›Э[™]Ъ[[€	‰€
™\K›Y]ЩOOH‘СU€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭЫ™U\Щ\€HЫ™U›ЪXЩU\Щ\ЉЉNВ€ЫЫњЭ[™ЭXYЩHHЪ[[У[™ЭXYЩJЫ™U\Щ\ЏЛ›[™ЭXYЩH™[€ЉNВ€ЫЫњЭXЭ[Ы•\›H	Ь›ШЩ\ЬЛ™[ќ‹”P“PЧРђTСWХT“€џKШ\KЭ›ЪXЩKЬЫ™KЩШ]\В€ЫЫњЭY\ЬШYЩHHЭљ[™К\›њЩX\Ъ\[\Л™Щ]
›Y\ЬШYЩHЉH•\И\ИYЬљS™^\Л€[ЭH\™HЫЫ›™XЭYИHRH\ЬЪ\Э[ќ€X\ЩHШ^HЪ][ЭH™YYYќ\€H›Ы\€ЉKњЫXЩJМ
NВ€ЫЫњЭЬ™Y][™ИH]ШZ]Ы™U›ЪXЩT›Ы\
Y\ЬШYЩK[™ЭXYЩJNВ€ЫЫњЭ›Ы\H]ШZ]Ы™U›ЪXЩT›Ы\
–[ЭHШ[€Ш^H[ZX[[ќZЩKЫЫќXЭќ^Y\‹\H›Ь€›Ш‹XЪИ[]™\ћKЬ€ЬXZИЪ]Э\Ьќ€Ъ]ЪЭ[YЬљS™^\ИПИ‹[™ЭXYЩJNВ€™]\›€Ъ[[™\ЬЫњЩJ™\ЛЮ[™\њЪ[ЫЏHЊKЊ€[ЫЩ[™ПH•U‹NЏП‚Џ™\ЬЫњЩO‚€	ЩЬ™Y][™ЯB€Ш]\€[њ]HњЬYXЪY€€XЭ[ЫЏH‰Ю[\ШШ\JXЭ[Ы•\›‹Ш\KЭ›ЪXЩKЬЫ™KЩШ]\€Љ_H€Y]ЩH”ФХ€[™ЭXYЩOH‰Ю[\ШШ\J[™ЭXYЩJ_H€ЬYXЪ[Y[Э]H]]И€XЭ[Ы“Ы‘[\T™\Э[HќќYHЏ‚€	Ь›Ы\B€СШ]\Џ‚€	Ш]ШZ]Ы™U›ЪXЩT›Ы\
’HY›ЭX\€H™\ЬЫњЩK€X\ЩHШ[HYЬљS™^\Иќ[X™\€YШZ[€Ь€\ЩHHЩX€\ЬЪ\Э[ќ€‹[™ЭXYЩJ_BЏФ™\ЬЫњЩO
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬЫ™KЪ[ЫЫZ[™И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЩ\ЬЪ[Ы€HЩ]Ы™U›ЪXЩTЩ\ЬЪ[ЫЉ‹Ы™TЩ\ЬЪ[Ы’Щ^J›ЩK™\KљXY\њЦИћY›ЬќШ\™YY›Ь€—HќЪ[[ИЉJNВ€\]TЫ™U›ЪXЩTЩ\ЬЪ[ЫЉ‹Щ\ЬЪ[Ы‹ИЭ\€›[YH‹Ш[\“[YN€€‹[™ЭXYЩN€€‹ШШ[N€™[‹UTИ€JNВ€ЫЫњЭ[™ЭXYЩHH™[‹UTИЋВ€ЫЫњЭXЭ[Ы•\›H	Ь›ШЩ\ЬЛ™[ќ‹”P“PЧРђTСWХT“€џKШ\KЭ›ЪXЩKЬЫ™KЩШ]\ЏЬЭ\[[YXВ€ЫЫњЭЬ™Y][™ИH]ШZ]Ы™U›ЪXЩT›Ы\
’KH[HYЬљS™^\Л€ЪИ[HHЬXZЪ[™ИЪ]И‹[™ЭXYЩJNВ€ЫЫњЭ›РЫЫ[X[™H]ШZ]Ы™U›ЪXЩT›Ы\
’HY›ЭX\€[Э\€[YK€X\ЩHШ[XЪЛЬ€\ЩHHЩX€\ЬЪ\Э[ќ€‹[™ЭXYЩJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€њЫ™K]›ЪXЩH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€њЫ™Kљ[ЫЫZ[™И‹€]Z[€’[ЫЫZ[™ИЫ™H›ЪXЩH\ЬЪ\Э[ќЩ\ЬЪ[Ы€Ь[™YЪ][YKYљ\њЭЬ™Y][™Л€‹€Y]Y]N€Ињ›ЫN€›ЩK‘њ›ЫH›ЩK™њ›ЫH™\KљXY\њЦИћY›ЬќШ\™YY›Ь€—HќЪ[[И‹Щ\ЬЪ[Ы’Y€Щ\ЬЪ[Ы‹љYB€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Ъ[[™\ЬЫњЩJ™\ЛЮ[™\њЪ[ЫЏHЊKЊ€[ЫЩ[™ПH•U‹NЏП‚Џ™\ЬЫњЩO‚€Ш]\€[њ]HњЬYXЪY€€XЭ[ЫЏH‰Ю[\ШШ\JXЭ[Ы•\›‹Ш\KЭ›ЪXЩKЬЫ™KЩШ]\€Љ_H€Y]ЩH”ФХ€[™ЭXYЩOH‰Ю[\ШШ\J[™ЭXYЩJ_H€ЬYXЪ[Y[Э]H]]И€XЭ[Ы“Ы‘[\T™\Э[HќќYHЏ‚€	ЩЬ™Y][™ЯB€СШ]\Џ‚€	Ы›РЫЫ[X[™BЏФ™\ЬЫњЩO
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬЫ™KЩШ]\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭЫ™U\Щ\€HЫ™U›ЪXЩU\Щ\ЉЉNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЩ\ЬЪ[Ы€HЩ]Ы™U›ЪXЩTЩ\ЬЪ[ЫЉ‹Ы™TЩ\ЬЪ[Ы’Щ^J›ЩK™\KљXY\њЦИћY›ЬќШ\™YY›Ь€—HќЪ[[ИЉJNВ€ЫЫњЭЭ\HЭљ[™К\›њЩX\Ъ\[\Л™Щ]
њЭ\ЉHЩ\ЬЪ[Ы‹њЭ\ЫЫ[X[™ЉNВ€ЫЫњЭЩ\ЬЪ[Ы“[™ЭXYЩHHШ[›ЫљXШ[›ЪXЩS[™ЭXYЩJЩ\ЬЪ[Ы‹›[™ЭXYЩHЫ™U\Щ\ЏЛ›[™ЭXYЩH™[€ЉNВ€ЫЫњЭ[™ЭXYЩHHЭ\OOH›[YH€И™[‹UTИ€€
Щ\ЬЪ[Ы‹›ШШ[HЪ[[У[™ЭXYЩJЩ\ЬЪ[Ы“[™ЭXYЩJJNВ€ЫЫњЭЫЫ[X[™HЭљ[™К›ЩK”ЬYXЪ™\Э[›ЩKњЬYXЪ™\Э[›ЩK‘YЪ]И›ЩK™YЪ]И€ЉKќљ[J
NВ€ЫЫњЭЫЫ[X[™ЭЩ\€HЫЫ[X[™ќУЭЩ\ђШ\ЩJ
NВ€ЫЫњЭЪЪ\Y[YUЪ]ЫЫ[X[™HЭ\OOH›[YH€	‰€ЧЉЭ\ќЬ[џќ[џ\_XЪЯЫЫќXЭШ[[ZX[[ќZЩ_›Шџ[]™\ћ_Z\ЬЪ[Ыџќ^Y\џ›ЭљY\џШЭЬџ\›XXЮ_ЫЭ\њЩ_X\
W‹Лќ\Э
ЫЫ[X[™ЭЩ\ЉNВ€Y€
XЫЫ[X[™
HВ€ЫЫњЭ™]ћU^HЭ\OOH›[YH‚€И”X\ЩHШ^H[Э\€[YK€‚€€Э\OOH›[™ЭXYЩH‚€ИЫ™S[™ЭXYЩT›Ы\
Щ\ЬЪ[Ы‹Ш[\“[YJB€€X\ЩHШ^HHЫЫ[X[™	ЬЩ\ЬЪ[Ы‹Ш[\“[YHШ[\€џKZЩHЭ\ќ[ZX[[ќZЩK\H›Ь€]›Ш‹Ь€ќ[€ќ[Z\ЬЪ[Ы‹В€ЫЫњЭ™]ћT›Ы\H]ШZ]Ы™U›ЪXЩT›Ы\
™]ћU^[™ЭXYЩJNВ€ЫЫњЭ™]ћTЭ\HЭ\OOH›[YH€Э\OOH›[™ЭXYЩH€ИЭ\€ЫЫ[X[™ЋВ€™]\›€Ъ[[™\ЬЫњЩJ™\ЛЮ[™\њЪ[ЫЏHЊKЊ€[ЫЩ[™ПH•U‹NЏП‚Џ™\ЬЫњЩO‚€Ш]\€[њ]HњЬYXЪY€€XЭ[ЫЏH‰Ю[\ШШ\J
›ШЩ\ЬЛ™[ќ‹”P“PЧРђTСWХT“€ЉH
ИШ\KЭ›ЪXЩKЬЫ™KЩШ]\ЏЬЭ\IЬ™]ћTЭ\X
_H€Y]ЩH”ФХ€[™ЭXYЩOH‰Ю[\ШШ\J[™ЭXYЩJ_H€ЬYXЪ[Y[Э]H]]И€XЭ[Ы“Ы‘[\T™\Э[HќќYHЏ‚€	Ь™]ћT›Ы\B€СШ]\Џ‚ЏФ™\ЬЫњЩO
NВ€B€Y€
Э\OOH›[YH€	‰€\ЪЪ\Y[YUЪ]ЫЫ[X[™
HВ€ЫЫњЭШ[\“[YHH^XЭШ[\“[YJЫЫ[X[™
H™њљY[™ЋВ€ЫЫњЭ]]РЪЪXЩHHЫ™P]]У[™ЭXYЩPЪЪXЩJЫЫ[X[™
NВ€Y€
]]РЪЪXЩJHВ€ЫЫњЭЪЬЩ[“[™ЭXYЩHHШ[›ЫљXШ[›Щљ[S[™ЭXYЩJ]]РЪЪXЩKЫЩJNВ€\]TЫ™U›ЪXЩTЩ\ЬЪ[ЫЉ‹Щ\ЬЪ[Ы‹ИШ[\“[YK[™ЭXYЩN€ЪЬЩ[“[™ЭXYЩKШШ[N€]]РЪЪXЩK›ШШ[KЭ\€ЫЫ[X[™€JNВ€Ы™U\Щ\‹›[™ЭXYЩHHЪЬЩ[“[™ЭXYЩNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭ›Ы\H]ШZ]Ы™U›ЪXЩT›Ы\
Ы™P]]У[™ЭXYЩT›Ы\
Ш[\“[YK]]РЪЪXЩK›X™[
K]]РЪЪXЩK›ШШ[JNВ€™]\›€Ъ[[™\ЬЫњЩJ™\ЛЮ[™\њЪ[ЫЏHЊKЊ€[ЫЩ[™ПH•U‹NЏП‚Џ™\ЬЫњЩO‚€Ш]\€[њ]HњЬYXЪY€€XЭ[ЫЏH‰Ю[\ШШ\J
›ШЩ\ЬЛ™[ќ‹”P“PЧРђTСWХT“€ЉH
И‹Ш\KЭ›ЪXЩKЬЫ™KЩШ]\ЏЬЭ\XЫЫ[X[™Љ_H€Y]ЩH”ФХ€[™ЭXYЩOH‰Ю[\ШШ\J]]РЪЪXЩK›ШШ[J_H€ЬYXЪ[Y[Э]H]]И€XЭ[Ы“Ы‘[\T™\Э[HќќYHЏ‚€	Ь›Ы\B€СШ]\Џ‚ЏФ™\ЬЫњЩO
NВ€B€\]TЫ™U›ЪXЩTЩ\ЬЪ[ЫЉ‹Щ\ЬЪ[Ы‹ИШ[\“[YKЭ\€›[™ЭXYЩH€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭ›Ы\H]ШZ]Ы™U›ЪXЩT›Ы\
Ы™S[™ЭXYЩT›Ы\
Ш[\“[YJK™[‹UTИЉNВ€™]\›€Ъ[[™\ЬЫњЩJ™\ЛЮ[™\њЪ[ЫЏHЊKЊ€[ЫЩ[™ПH•U‹NЏП‚Џ™\ЬЫњЩO‚€Ш]\€[њ]HњЬYXЪY€€XЭ[ЫЏH‰Ю[\ШШ\J
›ШЩ\ЬЛ™[ќ‹”P“PЧРђTСWХT“€ЉH
И‹Ш\KЭ›ЪXЩKЬЫ™KЩШ]\ЏЬЭ\[[™ЭXYЩHЉ_H€Y]ЩH”ФХ€[™ЭXYЩOH™[‹UTИ€ЬYXЪ[Y[Э]H]]И€XЭ[Ы“Ы‘[\T™\Э[HќќYHЏ‚€	Ь›Ы\B€СШ]\Џ‚ЏФ™\ЬЫњЩO
NВ€B€Y€
ЪЪ\Y[YUЪ]ЫЫ[X[™
HВ€ЫЫњЭ[XЪУ[™ЭXYЩHHШ[›ЫљXШ[›Щљ[S[™ЭXYЩJЩ\ЬЪ[Ы‹›[™ЭXYЩHЫ™U\Щ\ЏЛ›[™ЭXYЩH™[€ЉNВ€\]TЫ™U›ЪXЩTЩ\ЬЪ[ЫЉ‹Щ\ЬЪ[Ы‹ИШ[\“[YN€Щ\ЬЪ[Ы‹Ш[\“[YHШ[\€‹Э\€ЫЫ[X[™‹[™ЭXYЩN€[XЪУ[™ЭXYЩKШШ[N€Щ\ЬЪ[Ы‹›ШШ[HЪ[[У[™ЭXYЩJ[XЪУ[™ЭXYЩJHJNВ€B€Y€
Э\OOH›[™ЭXYЩHЉHВ€ЫЫњЭЪЪXЩHHЫ™S[™ЭXYЩPЪЪXЩJЫЫ[X[™
HИЫЩN€Ш[›ЫљXШ[›Щљ[S[™ЭXYЩJЫ™U\Щ\ЏЛ›[™ЭXYЩH™[€ЉKШШ[N€Ъ[[У[™ЭXYЩJЫ™U\Щ\ЏЛ›[™ЭXYЩH™[€ЉKX™[€›ЪXЩS[™ЭXYЩSX™[
Ы™U\Щ\ЏЛ›[™ЭXYЩH™[€ЉHNВ€ЫЫњЭЪЬЩ[“[™ЭXYЩHHШ[›ЫљXШ[›Щљ[S[™ЭXYЩJЪЪXЩKЫЩJNВ€\]TЫ™U›ЪXЩTЩ\ЬЪ[ЫЉ‹Щ\ЬЪ[Ы‹И[™ЭXYЩN€ЪЬЩ[“[™ЭXYЩKШШ[N€ЪЪXЩK›ШШ[KЭ\€ЫЫ[X[™€JNВ€Ы™U\Щ\‹›[™ЭXYЩHHЪЬЩ[“[™ЭXYЩNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭ›Ы\H]ШZ]Ы™U›ЪXЩT›Ы\
Ы™PЫЫ[X[™›Ы\
Щ\ЬЪ[Ы‹Ш[\“[YKЪЪXЩK›X™[
KЪЪXЩK›ШШ[JNВ€™]\›€Ъ[[™\ЬЫњЩJ™\ЛЮ[™\њЪ[ЫЏHЊKЊ€[ЫЩ[™ПH•U‹NЏП‚Џ™\ЬЫњЩO‚€Ш]\€[њ]HњЬYXЪY€€XЭ[ЫЏH‰Ю[\ШШ\J
›ШЩ\ЬЛ™[ќ‹”P“PЧРђTСWХT“€ЉH
И‹Ш\KЭ›ЪXЩKЬЫ™KЩШ]\ЏЬЭ\XЫЫ[X[™Љ_H€Y]ЩH”ФХ€[™ЭXYЩOH‰Ю[\ШШ\JЪЪXЩK›ШШ[J_H€ЬYXЪ[Y[Э]H]]И€XЭ[Ы“Ы‘[\T™\Э[HќќYHЏ‚€	Ь›Ы\B€СШ]\Џ‚ЏФ™\ЬЫњЩO
NВ€B€ЫЫњЭИ™\Э[HH]ШZ]ќ[ђЫЫ\[љ[Ы”ШY™PYЩ[ќЫЫ[X[™
‹Ы™U\Щ\‹В€ЫЫ[X[™€ЫЫ™љ\›N€[ЩK€ЫЫќ™\њШ][Ы[€ќYK€[њ][ЩN€њЫ™H‹€Э]][ЩN€ќ›ЪXЩH‹€[™ЭXYЩN€Ш[›ЫљXШ[›ЪXЩS[™ЭXYЩJЩ\ЬЪ[Ы‹›[™ЭXYЩHЫ™U\Щ\‹›[™ЭXYЩH™[€ЉK€\™Щ][™ЭXYЩN€Ш[›ЫљXШ[›ЪXЩS[™ЭXYЩJЩ\ЬЪ[Ы‹›[™ЭXYЩHЫ™U\Щ\‹›[™ЭXYЩH™[€ЉK€›ЭN€”Ы™HШ[›ЪXЩH\ЬЪ\Э[ќЫЫ[X[™‚€JNВ€Щ\ЬЪ[Ы‹ЫЫ[X[™Лќ[њЪYќ
ИЫЫ[X[™™\ЬЫњЩN€™\Э[њ™\ЬЫњЩKЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HJNВ€Щ\ЬЪ[Ы‹ЫЫ[X[™ИHЩ\ЬЪ[Ы‹ЫЫ[X[™ЛњЫXЩJЊ
NВ€\]TЫ™U›ЪXЩTЩ\ЬЪ[ЫЉ‹Щ\ЬЪ[Ы‹ИЭ\€ЫЫ[X[™€JNВ€›ЪXЩT™XЫЬ™
‹Ы™U\Щ\‹њЫ™KXШ[‹Ы™HЫЫ[X[™[™Y€	ШЫЫ[X[™XВ€ЫЫ[X[™€™\ЬЫњЩN€™\Э[њ™\ЬЫњЩK€Ш[ЪY€›ЩKђШ[ЪY›ЩKШ[ЪYќ[€њ›ЫN€›ЩK‘њ›ЫH›ЩK™њ›ЫHќ[€›ЭљY\Ћ€ќЪ[[И‹€Ш[\“[YN€Щ\ЬЪ[Ы‹Ш[\“[YH€‹€[™ЭXYЩN€Ш[›ЫљXШ[›ЪXЩS[™ЭXYЩJЩ\ЬЪ[Ы‹›[™ЭXYЩHЫ™U\Щ\‹›[™ЭXYЩH™[€ЉK€ШШ[N€Щ\ЬЪ[Ы‹›ШШ[H[™ЭXYЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭ™\ЬЫњЩHHЭљ[™К™\Э[њ™\ЬЫњЩHђЫЫ[X[™ЫЫ\]Y€ЉKњЫXЩJL
NВ€ЫЫњЭЬЪЩ[”™\ЬЫњЩHH]ШZ]Ы™U›ЪXЩT›Ы\
™\ЬЫњЩKЩ\ЬЪ[Ы‹›ШШ[H[™ЭXYЩJNВ€ЫЫњЭ™^›Ы\[YHHЩ\ЬЪ[Ы‹Ш[\“[YHИ	ЬЩ\ЬЪ[Ы‹Ш[\“[Y_K€€ЋВ€ЫЫњЭ™^›Ы\H]ШZ]Ы™U›ЪXЩT›Ы\
	Ы™^›Ы\[Y_^[ЭHШ[€Ш^H[›Э\€ЫЫ[X[™Ь€[™И\Ъ[€љ[љ\ЪYЩ\ЬЪ[Ы‹›ШШ[H[™ЭXYЩJNВ€™]\›€Ъ[[™\ЬЫњЩJ™\ЛЮ[™\њЪ[ЫЏHЊKЊ€[ЫЩ[™ПH•U‹NЏП‚Џ™\ЬЫњЩO‚€	ЬЬЪЩ[”™\ЬЫњЩ_B€Ш]\€[њ]HњЬYXЪY€€XЭ[ЫЏH‰Ю[\ШШ\J
›ШЩ\ЬЛ™[ќ‹”P“PЧРђTСWХT“€ЉH
И‹Ш\KЭ›ЪXЩKЬЫ™KЩШ]\ЏЬЭ\XЫЫ[X[™Љ_H€Y]ЩH”ФХ€[™ЭXYЩOH‰Ю[\ШШ\JЩ\ЬЪ[Ы‹›ШШ[H[™ЭXYЩJ_H€ЬYXЪ[Y[Э]H]]И€XЭ[Ы“Ы‘[\T™\Э[H™[ЩHЏ‚€KKH[ЭHШ[€Ш^H[›Э\€ЫЫ[X[™KO‚€	Ы™^›Ы\B€СШ]\Џ‚ЏФ™\ЬЫњЩO
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹њЭ]\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹Ь›ЭљY\њИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€›ЭљY\њО€™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹›\Э›ЭљY\њКИ[ќЋ€›ШЩ\ЬЛ™[ќ€JK€›ФЩXЬ™]^ЬЭ\™N€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ШШ\Xљ[]Y\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Ш\Xљ[]Y\О€™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹›\ЭШ\Xљ[]Y\К
K€[Z[Y\О€™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹›\Э›ЭљY\‘[Z[Y\К
B€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ЬЩ[XЭ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹њЩ[XЭ›ЭљY\ЉИ‹‹›ЩK[ќЋ€›ШЩ\ЬЛ™[ќ€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ЬЫXЮH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹™][X]TЫXЮJ›ЩJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹Щ^XЭ]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹™^XЭ]JИ‹‹›ЩK[ќЋ€›ШЩ\ЬЛ™[ќ€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹Ь™XЩZ\€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЩ[XЭ[Ы€H™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹њЩ[XЭ›ЭљY\ЉИ‹‹›ЩK[ќЋ€›ШЩ\ЬЛ™[ќ€JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹Ь™X]T™XЩZ\
›ЩKЩ[XЭ[Ы‹В€Э]\О€њ™XЩZ\Ь™\\™Y‹€Э[[X\ћN€”™XЩZ\™\\™YЪ]Э]^\›[›ЭљY\€^XЭ][Ы‹€‚€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ШШ\Xљ[]K\Э]\И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹Ш\Xљ[]TЭ]\К›ЩKЫЫ[X[™€‹В€‹‹›ЩK€[ќЋ€›ШЩ\ЬЛ™[ќ‚€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ЬЩИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹њЩК
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹њЭ]\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹ШЫЫњЫЫH€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹YZ[ђЫЫњЫЫJ›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹ШЫЫ™љYЭ\][Ы‹XЫЫќ›ЫИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹њ›ЭљY\ђЫЫ™љYЭ\][ЫђЫЫќ›ЫК›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹ШШ\Xљ[]K[X]љ^€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹Ш\Xљ[]TЭ]\УX]љ^
›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹ЬЩXЭ\љ]K\љ]XЮK\™]љY]И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹њЩXЭ\љ]Tљ]XЮT™]љY]К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹Щ[™]ЛY[™\™XY[™\ЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹™[™С[™™XY[™\ЬФ™\Ьќ
›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹ШШ\Xљ[]K\™\Ьќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹Ш\Xљ[]T™\Ьќ
›ЩKЫЫ[X[™€‹›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹Ь™XY[™\ЬИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹™][X]Q^XЭ][Ы”™XY[™\ЬК›ЩK›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹Ь]Y]YH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹™[њ]Y]YJ›ЩK›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹Щ^XЭ]KYћK\ќ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹™^XЭ]QћTќ[Љ›ЩK›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹ШШ[Щ[€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹Ш[Щ[
›ЩKњ]Y]YRY€ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹Щ\ШX›K\›ЭљY\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹™\ШX›T›ЭљY\Љ›ЩKњ›ЭљY\’Y€‹›ЩKњ™X\ЫЫ€YZ[љ\Э]]™WЩ\ШX›[Y[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹Ь›ЫXЪЛ\›ЭљY\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹њ›ЫXЪФ›ЭљY\Љ›ЩKњ›ЭљY\’Y€ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹Э™\љYћK[Э]ЫЫYH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹ќ™\љYћSЭ]ЫЫYJ›ЩKњ™XЩZ\›ЩJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹Щ]K][њЩ™\‹\™XЩZ\€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹Ь™X]Q]U[њЩ™\”™XЩZ\
›ЩK›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹[ЬЪ\Э][Ы‹ЬЩИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\“ЬЪ\Э][Ы‹њЩК
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЩ[]™[›XњЛЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛLВ€\њ›ЬЋ€‘[]™[“XњИЩ[™\Ъ\Иќ[ќ[YH\И™Y[€™[[Э™Y€‹€Ш]YЫЬћN€њќ[ќ[YK\™[[Э™Y‹€XЭ]™Tќ[ќ[YN€њ™X[[YH‹€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬќ[ќ[YKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
[™^\С[]™[“XњУЬљYЪ[ђ[ЭЩY
™\JJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€“ЬљYЪ[€›Э[ЭЩY€JNВ€ЫЫњЭ›ЪXЩTќ[ќ[YTЫXЮHH™^\СЩ[™\Ъ\Х›ЪXЩTќ[ќ[YTЫXЮJ\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€™]\›€Щ[™
™\ЛЊВ€›ЪXЩTќ[ќ[YN€В€‹‹ќ›ЪXЩTќ[ќ[YTЫXЮK€XЭ]™Tќ[ќ[YN€ќ[ЫЫ™љ\›YYXњ›ЭЬЩ\‹XЫY[ќ‹€Щ\ќ™\”Щ[XЭYќ[ќ[YN€›ЪXЩTќ[ќ[YTЫXЮKњЩ[XЭYќ[ќ[YK€XЭ]™Tќ[ќ[YTЫЭ\ЩN€њ›ЭЬЩ\‹XЫY[ќ\™\]Z\™Y‹€XЭ]™Tќ[ќ[YR\ФЩ\ќ™\”ЫXЮN€[ЩK€›ЭN€”Щ\ќ™\€ЫXЮHЩ[XЭИH™Y™\њ™Yќ[ќ[YKќ]XЭ]™Hќ[ќ[YH\И›ЭЫЫ™љ\›YY[ќ[Hњ›ЭЬЩ\€™\ЬќИHЫЫ›™XЭYЩ\ЬЪ[Ы‹]™HZXЬ›ЬЫ™HXЪЛ[™]™[ќЪ[›™[€‚€K€™X[[YU›ЪXЩN€™^\Ф™X[[YTќ[ќ[YTЭ]\К›ШЩ\ЬЛ™[ќЉK€ЫY[ќќ[ќ[YN€В€XЭ]™Tќ[ќ[YN€ќ[ЫЫ™љ\›YY‹€ЫЫ›™XЭ[Ы”Э]N€››Э\™\ЬќY]Л\Щ\ќ™\€‹€[њЬЬќ€€‹€[Щ[€€‹€ZXЬ›ЬЫ™UXЪФЭ]N€ќ[љЫ›ЭЫ€‹€[›Э[™]Y[ФЭ]N€ќ[љЫ›ЭЫ€‹€\Э[Щ[]™[ќ€€‹€\ЭЫЫ]™[ќ€€‹€[XЪФЭ]N€њ›ЭЬЩ\‹XЫY[ќ[ЭЫ™Y‹€›ФЩXЬ™][Y\О€ќYB€K€ЫЫќ™\њШ][Ы”Э\\ќљ\ЫЬЋ€В€ЪО€ќYK€[YN€“™^\СЩ[™\Ъ\РЫЫќ[ќ[Э\РЫЫќ™\њШ][Ы”Э\\ќљ\ЫЬ€‹€Э]\О€ИљYH‹XЬ]Z\љ[™И‹›\Э[љ[™И‹њ›ШЩ\ЬЪ[™И‹њЬXZЪ[™И‹њ™XЫЭ™\љ[™И‹ќ\›Z[]Y—K€\›Z[[™X\ЫЫњО€Иќ\Щ\‹\ЭЬ[\Э[љ[™И‹њЭЬXќ]Ы€‹њ\›Z\ЬЪ[Ы‹\™]›ЪЩY‹њЪYЫ™Y[Э]‹›YќYЩ[™\Ъ\И‹њЩXЭ\љ]K\ЫXЮH—K€ЫЫУЭЫ“ZXЬ›ЬЫ™N€[ЩK€\Y[™ЬЪЩ[”Ъ\™T\[[™N€ќYK€Ш]ЪЩФ™XЫЭ™\ћN€ќYK€›ФЩXЬ™][Y\О€ќYB€K€™[[Э™Yќ[ќ[Y\О€И™[]™[›XњИ‹›YШXЮKXњ›ЭЬЩ\‹XЫЫќ™\њШ][Ы€—K€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЩXЭ[Ы‹Э›ЪXЩKYXYЫ›ЬЭXЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭ™X[[YTЭ]\ИH™^\Ф™X[[YTќ[ќ[YTЭ]\К›ШЩ\ЬЛ™[ќЉNВ€ЫЫњЭ›ЪXЩTќ[ќ[YTЫXЮHH™^\СЩ[™\Ъ\Х›ЪXЩTќ[ќ[YTЫXЮJ\Щ\‹›ШЩ\ЬЛ™[ќЉNВ€™]\›€Щ[™
™\ЛЊВ€ШЪ[XU™\њЪ[ЫЋ€›™^\Лњ›ЩXЭ[Ы‹ќ›ЪXЩQXYЫ›ЬЭXЬЛќЊH‹€\ЮYYЫЫ[Z]€›ШЩ\ЬЛ™[ќ‹”‘S‘T—СТUРУУSRU›ШЩ\ЬЛ™[ќ‹‘ТUРУУSRU›ШЩ\ЬЛ™[ќ‹ђУУSRUФТHќ[љЫ›ЭЫ€‹€ЩXђќZ[€QФ’S‘VTЧХСP—Р•RSХ‘T”ТSУ‹€ШPШXЪN€QФ’S‘VTЧФРWРРPТWХ‘T”ТSУ‹€Щ[XЭY›ЪXЩTќ[ќ[YN€›ЪXЩTќ[ќ[YTЫXЮKњЩ[XЭYќ[ќ[YK€ZXЬ›ЬЫ™SЭЫ™\Ћ€њ›ЭЬЩ\‹]™\љYљYYYЩ[™\Ъ\Л]›ЪXЩK\ќ[ќ[YK[X[YЩ\€‹€Щ\ќљXЩUЫЬљЩ\•™\њЪ[ЫЋ€QФ’S‘VTЧФРWРРPТWХ‘T”ТSУ‹€™X[[YT™XY[™\ЬО€В€ќ[ќ[YN€™X[[YTЭ]\Лњќ[ќ[YK€™XYN€›ЫЫX[Љ™X[[YTЭ]\Лњ™XYJK€ЫЫ™љYЭ\™Y€›ЫЫX[Љ™X[[YTЭ]\ЛЫЫ™љYЭ\™Y
K€[Щ[€™X[[YTЭ]\Л›[Щ[€[њЬЬќ€™X[[YTЭ]\Лќ[њЬЬќ€Z\ЬЪ[™С[ќЋ€\њ^Kљ\Р\њ^J™X[[YTЭ]\Л›Z\ЬЪ[™С[ќЉHИ™X[[YTЭ]\Л›Z\ЬЪ[™С[ќ€€ЧK€›ФЩXЬ™][Y\О€ќYB€K€™[[Э™Yќ[ќ[YRY[ќYљY\њО€И™[]™[›XњИ‹›YШXЮKXњ›ЭЬЩ\‹XЫЫќ™\њШ][Ы€‹њ›ЭЬЩ\‹\ЬYXЪY[XЪИ‹Ш[™Y]K\ќ[ќ[YH‹њ›ЫXЪЛ\ќ[ќ[YH—K€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЩ[]™[›XњЛШ]]Ьљ^][Ы‹\›Ш™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™
™\ЛLВ€\њ›ЬЋ€‘[]™[“XњИЩ[™\Ъ\Иќ[ќ[YH\И™Y[€™[[Э™Y€‹€Ш]YЫЬћN€њќ[ќ[YK\™[[Э™Y‹€XЭ]™Tќ[ќ[YN€њ™X[[YH‹€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЩ[]™[›XњЛЬЩ\ЬЪ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™
™\ЛLВ€\њ›ЬЋ€‘[]™[“XњИЩ[™\Ъ\Иќ[ќ[YH\И™Y[€™[[Э™Y€‹€Ш]YЫЬћN€њќ[ќ[YK\™[[Э™Y‹€XЭ]™Tќ[ќ[YN€њ™X[[YH‹€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€

\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬќ[ќ[YKЭЫЫ€\›њ][YHOOH‹Ш\KЭ›ЪXЩKЩ[]™[›XњЛЭЫЫЉH	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™
™\ЛLВ€ЪО€[ЩK€\њ›ЬЋ€“YШXЮH›ЪXЩHЫЫШ]]Ш^\И]™H™Y[€™[[Э™Y€\ЩHШ\KЭ›ЪXЩKЬ™X[[YKЭЫЫ€‹€Ш]YЫЬћN€™Ш]]Ш^K\™[[Э™Y‹€Ш[›ЫљXШ[ЫЫ[™Ъ[ќ€‹Ш\KЭ›ЪXЩKЬ™X[[YKЭЫЫ‹€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬЫ™KШШ[\Э]\И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€Y€
][YЪ[[ХЩXљЫЪФЪYЫ]\™J™\K\››ЩJJHВ€™]\›€Щ[™
™\ЛЛИЪО€[ЩK\њ›ЬЋ€’[ќ[YЪ[[ИЩXљЫЪИЪYЫ]\™H‹›ФЩXЬ™][Y\О€ќYHJNВ€B€ЫЫњЭ™\Э[H™XЫЬ™Ъ[[РШ[Э]\К‹›ЩJNВ€Y€
\™\Э[
HВ€™]\›€Щ[™
™\ЛИЪО€[ЩK\њ›ЬЋ€’[ќ[YЪ[[ИШ[Э]\И^[ШY‹›ФЩXЬ™][Y\О€ќYHJNВ€B€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€›ЭљY\Ћ€ќЪ[[И‹€™XЩZ\Y€™\Э[њ™XЩZ\љY€Ш[Э]\О€™\Э[њ™XЩZ\Ш[Э]\Л€X]ЪYЭ]›Э[™Ш[€›ЫЫX[Љ™\Э[Ш[
K€›ФЩXЬ™][Y\О€ќYB€JNВ€B‚€ЫЫњЭ›Э[™YЩ[™\Ъ\Х›ЪXЩQЭY\Э›Э]\ИH™]ИЩ]
В€‹Ш\KЭ›ЪXЩKЬ™X[[YKЬЭ]\И‹€‹Ш\KЭ›ЪXЩKЬ™X[[YKЬЩ\ЬЪ[Ы€‹€‹Ш\KЭ›ЪXЩKЬ™X[[YKЭЫЫ‚€JNВ€Y€
]\Щ\€	‰€\›њ][YHOOH‹Ш\KШЫЫ™љYИ€	‰€X›Э[™YЩ[™\Ъ\Х›ЪXЩQЭY\Э›Э]\Лљ\К\›њ][YJJHВ€™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ЪYЫ€[€™\]Z\™Y€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬЭ]H€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛШ\ЬЪ\Э[ќ\ќ[ќ[YK\™]љY]И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›YЬИH\ЬЪ\Э[ќќ[ќ[YT™]љY]С›YЬК
NВ€Y€
Y›YЬЛ™[X›Y
HВ€™]\›€Щ[™
™\ЛЛВ€\њ›ЬЋ€ђ\ЬЪ\Э[ќќ[ќ[YH™]љY]И\И\ШX›Y€‹€\ЬЪ\Э[ќќ[ќ[YT™]љY]О€›YЬЛ€›С^XЭ][Ыђ]]Ьљ^™Y€ќYK€›Ф›ЭљY\’[™Щ™Ћ€ќYK€›УШШ][Ы”\›Z\ЬЪ[Ы”™\]Y\ЭY€ќYB€JNВ€B€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ›Ы\HЭљ[™К›ЩKњ›Ы\›ЩKЫЫ[X[™€ЉKќљ[J
NВ€Y€
\›Ы\
HВ€™]\›€Щ[™
™\ЛВ€\њ›ЬЋ€”›Ы\\И™\]Z\™Y€‹€\ЬЪ\Э[ќќ[ќ[YT™]љY]О€›YЬЛ€›С^XЭ][Ыђ]]Ьљ^™Y€ќYB€JNВ€B€ЫЫњЭќ[ќ[YT™\ЬЫњЩHH]ШZ]™^\Р\ЬЪ\Э[ќќ[ќ[YKќZ[\ЬЪ\Э[ќќ[ќ[YT™\ЬЫњЩP\Ю[К›Ы\В€Э\™XЩN€њЭ[™\™]\Щ\€‹€[њ][ЩN€›ЩKљ[њ][ЩHќ\Y‹€™]љY]УЫ›N€ќYB€K›ШЩ\ЬЛ™[ќЉNВ€ЫЫњЭЭ[™\™\Щ\ђYЩ[ќ^\љY[ЩHH™^\ФЭ[™\™\Щ\ђYЩ[ќ^\љY[ЩKќZ[Э[™\™\Щ\ђYЩ[ќ^\љY[ЩJ›Ы\ќ[ќ[YT™\ЬЫњЩKИ›YЬИJNВ€™]\›€Щ[™
™\ЛЊВ€\ЬЪ\Э[ќќ[ќ[YT™]љY]О€В€‹‹™›YЬЛ€Э\™XЩN€њЭ[™\™]\Щ\€‹€™]љY]УЫ›N€ќYK€›С^XЭ][Ыђ]]Ьљ^™Y€ќYK€›Ф›ЭљY\’[™Щ™Ћ€ќYK€›УШШ][Ы”\›Z\ЬЪ[Ы”™\]Y\ЭY€ќYK€›У]љYШ][Ыђ]]Ьљ^™Y€ќYB€K€™\ЬЫњЩN€В€‹‹њќ[ќ[YT™\ЬЫњЩK€Э[™\™\Щ\ђYЩ[ќ^\љY[ЩB€B€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫЫ›Ш\™[™ЛЬЭ\ќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™SЬ\][ЫњФ›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭШЩ[\љ[ИHЭљ[™К›ЩKњШЩ[\љ[И™љ\њЭ[]™K\[ЭЉKќљ[J
NВ€ЫЫњЭќ[€HВ€Y€Ьћ\Лњ[™ЫUURQ

K€ШЩ[\љ[Л€ЭЫ™\Ћ€\Щ\‹™[XZ[€Э]\О€XЭ]™H‹€Э\О€В€ИY€ќЭ\‹Y\Ъ›Ш\™‹]N€”™]љY]ИЫЫ[X[™\Ъ›Ш\™‹Э]\О€њ™XYH‹XЭ[ЫЋ€“Ь[€\Ъ›Ш\™[™ЪXЪИ]™HЫЫќ^€€K€ИY€ќЭ\‹[X\›љ[™И‹]N€”ќ[€X\›љ[™ИЫЬљЩ›ЭИ‹Э]\О€њ™XYH‹XЭ[ЫЋ€”Э\ќЫЭ\њЩHЬ€ЫЫ\]H\ЬЫЫ‹€€K€ИY€ќЭ\‹]ЫЬљЩ›ЬЩH‹]N€”ќ[€ЫЬљЩ›ЬЩHЫЬљЩ›ЭИ‹Э]\О€њ™XYH‹XЭ[ЫЋ€ђќZ[›Щљ[K\H›Ь€›ЫKЬ€ШЪY[HЭ\Ьќ€€K€ИY€ќЭ\‹ZX[‹]N€”ќ[€[ZX[ЫЬљЩ›ЭИ‹Э]\О€њ™XYH‹XЭ[ЫЋ€”Э\ќ[ќZЩKЫЫњЩ[ќљ][Л™Y™\њ[[™›ЫЭЛ]\€€K€ИY€ќЭ\‹]YH‹]N€”ќ[€YЬљ]XЪЭYHЫЬљЩ›ЭИ‹Э]\О€њ™XYH‹XЭ[ЫЋ€”[€›Ы™HZ\ЬЪ[Ы‹ШШ[€љY[\ЬЪYЫ€\ЪЛ[™Ь™X]HЬ™\‹€€K€ИY€ќЭ\‹XYZ[€‹]N€ђЫЫ™љ\›HYZ[€™XY[™\ЬИ‹Э]\О€њ™XYH‹XЭ[ЫЋ€”ќ[€X[ЪXЪЛ›ЭљY\€\ЭЛ[™™]љY]И›ЩXЭ[Ы€Ш\Л€€B€K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K›Ы›Ш\™[™Фќ[њЛќ[њЪYќ
ќ[ЉNВ€‹њ›Щљ[K›Ы›Ш\™[™Фќ[њИH‹њ›Щљ[K›Ы›Ш\™[™Фќ[њЛњЫXЩJЊ
NВ€Y\ШYЩQ]™[ќ
‹њ›Щљ[KИ[Щ[N€“Ы›Ш\™[™И‹XЭ[ЫЋ€›Ы›Ш\™[™ЛњЭ\ќY‹]Z[€	ЬШЩ[\љ[ЯHЫ›Ш\™[™Иќ[€Э\ќYћH	Э\Щ\‹™[XZ[KJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€]]]\Щ\њИ‹€[Щ[N€”]›Ь›H‹€XЭ[ЫЋ€›Ы›Ш\™[™ЛњЭ\ќY‹€]Z[€	ЬШЩ[\љ[ЯHЫ›Ш\™[™Иќ[€Э\ќY€Y]Y]N€ИЫ›Ш\™[™ТY€ќ[‹љYЭЫ™\Ћ€\Щ\‹™[XZ[B€JNВ€YXЭ]љ]J‹њ›Щљ[KЫ›Ш\™[™ИЭ\ќY€	ЬШЩ[\љ[ЯK
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬЭ\ЬќЭXЪЩ]€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™SЬ\][ЫњФ›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭXЪЩ]HВ€Y€Ьћ\Лњ[™ЫUURQ

K€XЪЩ]ќ[X™\Ћ€S‹TХTIФЭљ[™К‹њ›Щљ[KњЭ\ЬќXЪЩ]Л›[™Э
ИJKњYЭ\ќ
ЊЉ_X€ЭXљ™XЭ€Эљ[™К›ЩKњЭXљ™XЭ”]›Ь›HЭ\Ьќ™\]Y\ЭЉKќљ[J
K€[Щ[N€Эљ[™К›ЩK›[Щ[H”]›Ь›HЉKќљ[J
K€љ[Ьљ]N€Эљ[™К›ЩKњљ[Ьљ]HњЭ[™\™ЉKќљ[J
K€Э]\О€›Ь[€‹€™\]Y\Э\Ћ€\Щ\‹™[XZ[€]Z[€Эљ[™К›ЩK™]Z[•\Щ\€™\]Y\ЭYЭ\Ьќњ›ЫHH]›Ь›K€ЉKќљ[J
K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[KњЭ\ЬќXЪЩ]Лќ[њЪYќ
XЪЩ]
NВ€‹њ›Щљ[KњЭ\ЬќXЪЩ]ИH‹њ›Щљ[KњЭ\ЬќXЪЩ]ЛњЫXЩJL
NВ€Y\ШYЩQ]™[ќ
‹њ›Щљ[KИ[Щ[N€XЪЩ]›[Щ[KXЭ[ЫЋ€њЭ\ЬќќXЪЩ]ЫЬ[™Y‹]Z[€	ЭXЪЩ]ќXЪЩ]ќ[X™\џN€	ЭXЪЩ]њЭXљ™XЭXJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€™[XZ[Y[]™\ћH‹€[Щ[N€”]›Ь›H‹€XЭ[ЫЋ€њЭ\ЬќќXЪЩ]ЫЬ[™Y‹€]Z[€	ЭXЪЩ]ќXЪЩ]ќ[X™\џHЬ[™YћH	Э\Щ\‹™[XZ[K€Y]Y]N€ИXЪЩ]Y€XЪЩ]љY[Щ[N€XЪЩ]›[Щ[Kљ[Ьљ]N€XЪЩ]њљ[Ьљ]HB€JNВ€YXЭ]љ]J‹њ›Щљ[KЭ\ЬќXЪЩ]Ь[™Y€	ЭXЪЩ]ќXЪЩ]ќ[X™\џK
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYZ[‹ЬЭXњШЬљX™\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹YZ[€ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЭXњШЬљX™\€X[YЩ[Y[ќ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™SЬ\][ЫњФ›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ[XZ[HЭљ[™К›ЩK™[XZ[њ[Э]\Щ\ђ^[\KЫЫHЉKќљ[J
KќУЭЩ\ђШ\ЩJ
NВ€ЫЫњЭ^\Э[™ИH‹њ›Щљ[KњЭXњШЬљX™\ђXШЫЭ[ќЛ™љ[™
][HO€][K™[XZ[OOH[XZ[
NВ€ЫЫњЭXШЫЭ[ќH^\Э[™ИВ€Y€Ьћ\Лњ[™ЫUURQ

K€[XZ[€[YN€Эљ[™К›ЩK›[YH”[ЭЭXњШЬљX™\€ЉKќљ[J
K€[Ћ€Эљ[™К›ЩKњ[€њ[ЭЉKќљ[J
K€Э]\О€љ[ќљ]Y‹€ЩX]О€ќ[X™\Љ›ЩKњЩX]ИJK€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€XШЫЭ[ќ›\Э\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€Y€
Y^\Э[™КH‹њ›Щљ[KњЭXњШЬљX™\ђXШЫЭ[ќЛќ[њЪYќ
XШЫЭ[ќ
NВ€‹њ›Щљ[KњЭXњШЬљX™\ђXШЫЭ[ќИH‹њ›Щљ[KњЭXњШЬљX™\ђXШЫЭ[ќЛњЫXЩJL
NВ€Y\ШYЩQ]™[ќ
‹њ›Щљ[KИ[Щ[N€ђYZ[€‹XЭ[ЫЋ€њЭXњШЬљX™\‹љ[ќљ]Y‹]Z[€	ШXШЫЭ[ќ™[XZ[H[ќљ]YЫ€	ШXШЫЭ[ќњ[џH[‹JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€]]]\Щ\њИ‹€[Щ[N€”]›Ь›H‹€XЭ[ЫЋ€њЭXњШЬљX™\‹љ[ќљ]Y‹€]Z[€	ШXШЫЭ[ќ™[XZ[HЭXњШЬљX™\€[ќљ]][Ы€™\\™Y€Y]Y]N€ИЭXњШЬљX™\’Y€XШЫЭ[ќљY[Ћ€XШЫЭ[ќњ[‹ЩX]О€XШЫЭ[ќњЩX]ИB€JNВ€YXЭ]љ]J‹њ›Щљ[KЭXњШЬљX™\€[ќљ]Y€	ШXШЫЭ[ќ™[XZ[K
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYZ[‹Э\Э]\Щ\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹YZ[€ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ\Щ\€X[YЩ[Y[ќ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™SЬ\][ЫњФ›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ[XZ[HЭљ[™К›ЩK™[XZ[ќ\Э]\Щ\ђ^[\KЫЫHЉKќљ[J
KќУЭЩ\ђШ\ЩJ
NВ€ЫЫњЭ[YHHЭљ[™К›ЩK›[YH•\Э\Щ\€ЉKќљ[J
H•\Э\Щ\€ЋВ€ЫЫњЭ\ЬЭЫЬ™HЭљ[™К›ЩKњ\ЬЭЫЬ™•\Щ\ЊЊЌ€HЉKќљ[J
NВ€Y€
KЧ–Ч—РJРЧ—РJЧ–Ч—РJЙЛќ\Э
[XZ[
JH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђH[Y[XZ[\И™\]Z\™Y€JNВ€Y€
\ЬЭЫЬ™›[™Э
H™]\›€Щ[™
™\ЛИ\њ›ЬЋ€”\ЬЭЫЬ™]\Э™H]X\ЭЪ\XЭ\њИ€JNВ€ЫЫњЭXШЫЭ[ќH‹ќ\Щ\њЛ™љ[™
][HO€Эљ[™К][K™[XZ[€ЉKќУЭЩ\ђШ\ЩJ
HOOH[XZ[
HВ€Y€Ьћ\Лњ[™ЫUURQ

K€[XZ[€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€XШЫЭ[ќ›[YHH[YNВ€XШЫЭ[ќњ\ЬЭЫЬ™H\ЬЭЫЬ™В€XШЫЭ[ќњ›ЫHH”Э[™\™\Щ\€ЋВ€XШЫЭ[ќЫЭ[ќћHHЭљ[™К›ЩKЫЭ[ќћHXШЫЭ[ќЫЭ[ќћH“љYЩ\љXHЉKќљ[J
H“љYЩ\љXHЋВ€XШЫЭ[ќ›[™ЭXYЩHHЭљ[™К›ЩK›[™ЭXYЩHXШЫЭ[ќ›[™ЭXYЩHУХS•–WУS‘ХPQСVШXШЫЭ[ќЫЭ[ќћKќУЭЩ\ђШ\ЩJ
WH™[€ЉKќљ[J
H™[€ЋВ€XШЫЭ[ќ›\Э\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€Y€
Y‹ќ\Щ\њЛњЫЫYJ][HO€][KљYOOHXШЫЭ[ќљY
JH‹ќ\Щ\њЛњ\Ъ
XШЫЭ[ќ
NВ€Y\ШYЩQ]™[ќ
‹њ›Щљ[KИ[Щ[N€ђYZ[€‹XЭ[ЫЋ€ќ\ЭЭ\Щ\‹Ь™X]Y‹]Z[€	ШXШЫЭ[ќ™[XZ[H\Щ\‹[Ы›H\ЭЩЪ[€Ь™X]YJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€]]]\Щ\њИ‹€[Щ[N€”]›Ь›H‹€XЭ[ЫЋ€ќ\ЭЭ\Щ\‹Ь™X]Y‹€]Z[€	ШXШЫЭ[ќ™[XZ[HЬ™X]YЪ]\Щ\‹[Ы›H\›Z\ЬЪ[ЫњЛ€Y]Y]N€И\Щ\’Y€XШЫЭ[ќљY›ЫN€XШЫЭ[ќњ›ЫKЫЭ[ќћN€XШЫЭ[ќЫЭ[ќћK[™ЭXYЩN€XШЫЭ[ќ›[™ЭXYЩHB€JNВ€YXЭ]љ]J‹њ›Щљ[K\Щ\‹[Ы›H\ЭЩЪ[€™XYN€	ШXШЫЭ[ќ™[XZ[K
NВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kќ\Э\Щ\”™\Э[HИ[YN€XШЫЭ[ќ›[YK[XZ[€XШЫЭ[ќ™[XZ[\ЬЭЫЬ™€XШЫЭ[ќњ\ЬЭЫЬ™›ЫN€XШЫЭ[ќњ›ЫKЫЭ[ќћN€XШЫЭ[ќЫЭ[ќћK[™ЭXYЩN€XШЫЭ[ќ›[™ЭXYЩHNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYZ[‹ШYZ[‹]\Щ\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹YZ[€ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYZ[€\Щ\€X[YЩ[Y[ќ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™SЬ\][ЫњФ›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ[XZ[HЭљ[™К›ЩK™[XZ[YZ[‹]\Э^[\KЫЫHЉKќљ[J
KќУЭЩ\ђШ\ЩJ
NВ€ЫЫњЭ[YHHЭљ[™К›ЩK›[YHђYZ[€\Э\Щ\€ЉKќљ[J
HђYZ[€\Э\Щ\€ЋВ€ЫЫњЭ\ЬЭЫЬ™HЭљ[™К›ЩKњ\ЬЭЫЬ™ђYZ[ЊЊЌ€HЉKќљ[J
NВ€Y€
KЧ–Ч—РJРЧ—РJЧ–Ч—РJЙЛќ\Э
[XZ[
JH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђH[Y[XZ[\И™\]Z\™Y€JNВ€Y€
\ЬЭЫЬ™›[™ЭL
H™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђYZ[€\ЬЭЫЬ™]\Э™H]X\ЭLЪ\XЭ\њИ€JNВ€ЫЫњЭXШЫЭ[ќH‹ќ\Щ\њЛ™љ[™
][HO€Эљ[™К][K™[XZ[€ЉKќУЭЩ\ђШ\ЩJ
HOOH[XZ[
NВ€Y€
XШЫЭ[ќ	‰€XШЫЭ[ќњ›ЫHOOHђYZ[€ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€•][XZ[[™XYH™[Ы™ЬИИH›Ы‹XYZ[€XШЫЭ[ќ€JNВ€ЫЫњЭYZ[ђXШЫЭ[ќHXШЫЭ[ќВ€Y€Ьћ\Лњ[™ЫUURQ

K€[XZ[€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€YZ[ђXШЫЭ[ќ›[YHH[YNВ€YZ[ђXШЫЭ[ќњ\ЬЭЫЬ™H\ЬЭЫЬ™В€YZ[ђXШЫЭ[ќњ›ЫHHђYZ[€ЋВ€YZ[ђXШЫЭ[ќЫЭ[ќћHHЭљ[™К›ЩKЫЭ[ќћHYZ[ђXШЫЭ[ќЫЭ[ќћH“љYЩ\љXHЉKќљ[J
H“љYЩ\љXHЋВ€YZ[ђXШЫЭ[ќ›[™ЭXYЩHHЭљ[™К›ЩK›[™ЭXYЩHYZ[ђXШЫЭ[ќ›[™ЭXYЩHУХS•–WУS‘ХPQСVШYZ[ђXШЫЭ[ќЫЭ[ќћKќУЭЩ\ђШ\ЩJ
WH™[€ЉKќљ[J
H™[€ЋВ€YZ[ђXШЫЭ[ќ›\Э\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€Y€
XXШЫЭ[ќ
H‹ќ\Щ\њЛњ\Ъ
YZ[ђXШЫЭ[ќ
NВ€Y\ШYЩQ]™[ќ
‹њ›Щљ[KИ[Щ[N€ђYZ[€‹XЭ[ЫЋ€YZ[—Э\Щ\‹Ь™X]Y‹]Z[€	ШYZ[ђXШЫЭ[ќ™[XZ[HYZ[€\ЭЩЪ[€Ь™X]YJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€]]]\Щ\њИ‹€[Щ[N€”]›Ь›H‹€XЭ[ЫЋ€YZ[—Э\Щ\‹Ь™X]Y‹€]Z[€	ШYZ[ђXШЫЭ[ќ™[XZ[HЬ™X]YЪ]YZ[€\›Z\ЬЪ[ЫњИћH	Э\Щ\‹™[XZ[K€Y]Y]N€ИYZ[•\Щ\’Y€YZ[ђXШЫЭ[ќљYЬ™X]YћN€\Щ\‹љY›ЫN€YZ[ђXШЫЭ[ќњ›ЫKЫЭ[ќћN€YZ[ђXШЫЭ[ќЫЭ[ќћK[™ЭXYЩN€YZ[ђXШЫЭ[ќ›[™ЭXYЩHB€JNВ€YXЭ]љ]J‹њ›Щљ[KYZ[€\ЭЩЪ[€™XYN€	ШYZ[ђXШЫЭ[ќ™[XZ[K
NВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KYZ[•\Щ\”™\Э[HИ[YN€YZ[ђXШЫЭ[ќ›[YK[XZ[€YZ[ђXШЫЭ[ќ™[XZ[\ЬЭЫЬ™€YZ[ђXШЫЭ[ќњ\ЬЭЫЬ™›ЫN€YZ[ђXШЫЭ[ќњ›ЫKЫЭ[ќћN€YZ[ђXШЫЭ[ќЫЭ[ќћK[™ЭXYЩN€YZ[ђXШЫЭ[ќ›[™ЭXYЩHNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШљ[[™ЛШЪXЪЫЭ]€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹YZ[€ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИљ[[™ИЩ]\€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭљ[[™С]™[ќHВ€›ЭљY\’Y€љ[[™Л\ЭXњШЬљ\[ЫњИ‹€[Щ[N€”]›Ь›H‹€XЭ[ЫЋ€љ[[™ЛЪXЪЫЭ]Ь™\]Y\ЭY‹€]Z[€ЭXњШЬљ\[Ы€ЪXЪЫЭ]™\]Y\ЭY›Ь€	Ш›ЩKњ[€›ШЩ\ЬЛ™[ќ‹ђ’SS‘ЧФ’PСWТQњЭ[™\™[€џK€Y]Y]N€В€\Щ\’Y€\Щ\‹љY€[XZ[€\Щ\‹™[XZ[€[Ћ€›ЩKњ[€њЭ[™\™‹€љXЩRY€›ШЩ\ЬЛ™[ќ‹ђ’SS‘ЧФ’PСWТQќ[€B€NВ€ЫЫњЭ[]™\ћHH]ШZ]\Ь]Ъ›ЭљY\•ЩXљЫЪК‹љ[[™С]™[ќ
KШ]Ъ
\њ›Ь€O€
И][\Y€ќYKЪО€[ЩKЭ]\О€™\Ь]ЪY\њ›Ь€‹\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩHJJNВ€ЩТ[ќYЬ][ЫЉ‹В€‹‹љ[[™С]™[ќ€Э]\О€[]™\ћK›ЪИИњЭXШЩ\ЬИ€€›™YYЛXЬ™Y[ќX[И‹€Y]Y]N€И‹‹љ[[™С]™[ќ›Y]Y]K[]™\ћHK€\Ь]Ъ€[ЩB€JNВ€YXЭ]љ]J‹њ›Щљ[Kђљ[[™ИЪXЪЫЭ]ЫЬљЩ›ЭИ™\]Y\ЭY€ЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kљ[[™Ф™\Э[HВ€Э]\О€[]™\ћK›ЪИИЪXЪЫЭ]\™XYH€€›™YYЛXљ[[™Л\›ЭљY\€‹€ЪXЪЫЭ]\›€[]™\ћK›ЪИ	‰€›ШЩ\ЬЛ™[ќ‹ђ’SS‘ЧРТPТУХUХT“И›ШЩ\ЬЛ™[ќ‹ђ’SS‘ЧРТPТУХUХT“€ќ[€›ЭљY\Ћ€ќ[ќ[YT›ЭљY\њКЉK™љ[™
›ЭљY\€O€›ЭљY\‹љYOOHљ[[™Л\ЭXњШЬљ\[ЫњИЉOЛ›[ЩH››ЭXЫЫ™љYЭ\™Y‚€NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШЫЫ™љYИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭX›XУX\HX›XУX\ЫЫ™љYК
NВ€ЫЫњЭ›ЭљY\ђXШЫЭ[ќ\PXШЩ\ЬИH›ЭљY\ђXШЫЭ[ќ\PXШЩ\ЬФЭ]\К
NВ€ЫЫњЭ›ЩXЭ[Ы”›ЭљY\”™XY[™\ЬИH›ЩXЭ[Ы”›ЭљY\”™XY[™\ЬФЭ]\Кќ[ќ[YT›ЭљY\њКЉK›ЭљY\ђXШЫЭ[ќ\PXШЩ\ЬКNВ€™]\›€Щ[™
™\ЛЊВ€›ЩXЭY[ќ]N€›ЩXЭY[ќ]SY]Y]J
K€›ЭљY\ђXШЫЭ[ќ\PXШЩ\ЬЛ€›ЩXЭ[Ы”›ЭљY\”™XY[™\ЬЛ€X[љ]XЮPЫЫ\X[ЩQЭX\™Z[О€X[љ]XЮPЫЫ\X[ЩQЭX\™Z[ФЭ]\К
K€ZN€В€›ЭљY\Ћ€›ШЩ\ЬЛ™[ќ‹“ФSђRWРTWТСVHИ›Ь[ZH€€›Щ™›[™K\Ъ[][][Ы€‹€[Щ[€›ШЩ\ЬЛ™[ќ‹“ФSђRWРTWТСVHИRWУSСS€ќ[€K€X\€В€‹‹њX›XУX\€›ЭљY\Ћ€XY›]IЬX›XУX\њ›ЭљY\€ќZ[Z[‹YY][ИџX€K€\ЬЪ\Э[ќќ[ќ[YT™]љY]О€\ЬЪ\Э[ќќ[ќ[YT™]љY]С›YЬК
K€LLШY™P]]Ы›Ы^N€LLШY™P]]Ы›Ы^Tќ[ќ[YQ›YЬК
K€\њЪ\Э[ЩN€\Ъ[™ФЬЭЬ™\ФЭ]J
HИњЬЭЬ™\Ь[€€љњЫЫ‹Yљ[H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќYЬ][ЫњЛЭ\Э€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹љ[ќYЬ][ЫњИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ[ќYЬ][Ы€\Э[™И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ›ЭљY\€Hќ[ќ[YT›ЭљY\ђћRY
‹›ЩKњ›ЭљY\’Y
NВ€Y€
\›ЭљY\ЉH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€”›ЭљY\€›Э›Э[™€JNВ€ЫЫњЭ[]™\ћHH]ШZ]\Ь]Ъ›ЭљY\•ЩXљЫЪК‹В€›ЭљY\’Y€›ЭљY\‹љY€[Щ[N€›ЭљY\‹›[Щ[K€XЭ[ЫЋ€њ›ЭљY\‹ќ\Э‹€]Z[€	Ь›ЭљY\‹›[Y_H›ЭљY\€\Эњ›ЫHYЬљS™^\Л€Y]Y]N€И[ЩN€›ЭљY\‹›[ЩKЭ]\О€›ЭљY\‹њЭ]\ИB€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›ЭљY\‹љY€[Щ[N€›ЭљY\‹›[Щ[K€XЭ[ЫЋ€њ›ЭљY\‹ќ\Э‹€Э]\О€[]™\ћK›ЪИИњЭXШЩ\ЬИ€€›™YYЛXЬ™Y[ќX[И‹€]Z[€[]™\ћK][\Y€И	Ь›ЭљY\‹›[Y_H]™HЩXљЫЪИ\Э™]\›™Y	Щ[]™\ћKњЭ]\ЯK€€	Ь›ЭљY\‹›[Y_H	Щ[]™\ћKњЭ]\ЯH\ЭЫЫ\]Y€Y]Y]N€И[ЩN€›ЭљY\‹›[ЩKЭ]\О€›ЭљY\‹њЭ]\Л[]™\ћHK€\Ь]Ъ€[ЩB€JNВ€YXЭ]љ]J‹њ›Щљ[K	Ь›ЭљY\‹›[Y_H[ќYЬ][Ы€\ЭЫЫ\]Y
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќYЬ][ЫњЛЭ\ЭX[€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹љ[ќYЬ][ЫњИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ[ќYЬ][Ы€\Э[™И€JNВ€ЫЫњЭ™\Э[ИHЧNВ€›Ь€
ЫЫњЭ›ЭљY\€Щ€ќ[ќ[YT›ЭљY\њКЉJHВ€][]™\ћNВ€ћHВ€[]™\ћHH]ШZ]\Ь]Ъ›ЭљY\•ЩXљЫЪК‹В€›ЭљY\’Y€›ЭљY\‹љY€[Щ[N€›ЭљY\‹›[Щ[K€XЭ[ЫЋ€њ›ЭљY\‹ќ\Э‹€]Z[€	Ь›ЭљY\‹›[Y_H›ЭљY\€\Эњ›ЫHYЬљS™^\ИЫЬљЩ›ЭИ›Ш\™€Y]Y]N€И[ЩN€›ЭљY\‹›[ЩKЭ]\О€›ЭљY\‹њЭ]\ИB€JNВ€HШ]Ъ
\њ›ЬЉHВ€[]™\ћHHИ][\Y€ќYKЪО€[ЩKЭ]\О€™\Ь]ЪY\њ›Ь€‹\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩHNВ€B€™\Э[Лњ\Ъ
И›ЭљY\’Y€›ЭљY\‹љYЪО€[]™\ћK›ЪЛЭ]\О€[]™\ћKњЭ]\ИJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›ЭљY\‹љY€[Щ[N€›ЭљY\‹›[Щ[K€XЭ[ЫЋ€њ›ЭљY\‹ќ\Э‹€Э]\О€[]™\ћK›ЪИИњЭXШЩ\ЬИ€€›™YYЛXЬ™Y[ќX[И‹€]Z[€[]™\ћK][\Y€И	Ь›ЭљY\‹›[Y_H]™HЩXљЫЪИ\Э™]\›™Y	Щ[]™\ћKњЭ]\ЯK€€	Ь›ЭљY\‹›[Y_H	Щ[]™\ћKњЭ]\ЯH\ЭЫЫ\]Y€Y]Y]N€И[ЩN€›ЭљY\‹›[ЩKЭ]\О€›ЭљY\‹њЭ]\Л[]™\ћHK€\Ь]Ъ€[ЩB€JNВ€B€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›Ь[ZH‹€[Щ[N€’[ќYЬ][ЫњИ‹€XЭ[ЫЋ€њ›ЭљY\‹ќ\ЭШ[‹€]Z[€	Ь™\Э[Л›[™ЭH›ЭљY\€ЪXЪЬИЫЫ\]Yњ›ЫHH[ќYЬ][Ы€ЫЬљЩ›ЭИ›Ш\™€Y]Y]N€И™\Э[ИK€\Ь]Ъ€[ЩB€JNВ€YXЭ]љ]J‹њ›Щљ[K	Ь™\Э[Л›[™ЭH›ЭљY\€[ќYЬ][Ы€\ЭИЫЫ\]Y
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќYЬ][ЫњЛЭ\Э[[Щ[H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹љ[ќYЬ][ЫњИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ[Щ[H[™Ъ[™H\Э[™И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[Щ[S[YHHЭљ[™К›ЩK›[Щ[H€ЉKќљ[J
NВ€ЫЫњЭ›ЭљY\њИHќ[ќ[YT›ЭљY\њКЉK™љ[\Љ›ЭљY\€O€›ЭљY\‹›[Щ[HOOH[Щ[S[YJNВ€Y€
\›ЭљY\њЛ›[™Э
H™]\›€Щ[™
™\ЛИ\њ›ЬЋ€“[Щ[H›ЭљY\њИ›Э›Э[™€JNВ€ЫЫњЭ™\Э[ИHЧNВ€›Ь€
ЫЫњЭ›ЭљY\€Щ€›ЭљY\њКHВ€][]™\ћNВ€ћHВ€[]™\ћHH]ШZ]\Ь]Ъ›ЭљY\•ЩXљЫЪК‹В€›ЭљY\’Y€›ЭљY\‹љY€[Щ[N€›ЭљY\‹›[Щ[K€XЭ[ЫЋ€њ›ЭљY\‹ќ\Э‹€]Z[€	Ь›ЭљY\‹›[Y_H	Ы[Щ[S[Y_H[™Ъ[™H\Эњ›ЫH[Щ[HЫЬљЬЬXЩK€Y]Y]N€И[ЩN€›ЭљY\‹›[ЩKЭ]\О€›ЭљY\‹њЭ]\ИB€JNВ€HШ]Ъ
\њ›ЬЉHВ€[]™\ћHHИ][\Y€ќYKЪО€[ЩKЭ]\О€™\Ь]ЪY\њ›Ь€‹\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩHNВ€B€™\Э[Лњ\Ъ
И›ЭљY\’Y€›ЭљY\‹љYЪО€[]™\ћK›ЪЛЭ]\О€[]™\ћKњЭ]\ИJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›ЭљY\‹љY€[Щ[N€›ЭљY\‹›[Щ[K€XЭ[ЫЋ€њ›ЭљY\‹ќ\Э‹€Э]\О€[]™\ћK›ЪИИњЭXШЩ\ЬИ€€›™YYЛXЬ™Y[ќX[И‹€]Z[€[]™\ћK][\Y€И	Ь›ЭљY\‹›[Y_H]™H[Щ[H\Э™]\›™Y	Щ[]™\ћKњЭ]\ЯK€€	Ь›ЭљY\‹›[Y_H	Щ[]™\ћKњЭ]\ЯH[Щ[H\ЭЫЫ\]Y€Y]Y]N€И[ЩN€›ЭљY\‹›[ЩKЭ]\О€›ЭљY\‹њЭ]\Л[]™\ћHK€\Ь]Ъ€[ЩB€JNВ€B€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›ЭљY\њЦМKљY€[Щ[N€[Щ[S[YK€XЭ[ЫЋ€њ›ЭљY\‹ќ\ЭЫ[Щ[H‹€]Z[€	Ы[Щ[S[Y_H[Щ[H[™Ъ[™H\ЭЫЫ\]YXЬ›ЬЬИ	Ь›ЭљY\њЛ›[™ЭH›ЭљY\ЉКK€Y]Y]N€И™\Э[ИK€\Ь]Ъ€[ЩB€JNВ€YXЭ]љ]J‹њ›Щљ[K	Ы[Щ[S[Y_H›ЭљY\€[™Ъ[™\И\ЭYњ›ЫH[Щ[HЫЬљЬЬXЩK
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYZ[‹ЪX[XЪXЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹YZ[€ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYZ[€X[ЪXЪЬИ€JNВ€›Ь€
ЫЫњЭ›ЭљY\€Щ€ќ[ќ[YT›ЭљY\њКЉJHВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›ЭљY\‹љY€[Щ[N€›ЭљY\‹›[Щ[K€XЭ[ЫЋ€YZ[‹љX[ШЪXЪИ‹€]Z[€	Ь›ЭљY\‹›[Y_HЪXЪЩYњ›ЫHYZ[€ЫЫњЫЫK€Y]Y]N€И[ЩN€›ЭљY\‹›[ЩKЭ]\О€›ЭљY\‹њЭ]\ИB€JNВ€B€YXЭ]љ]J‹њ›Щљ[KђYZ[€X[ЪXЪИЫЫ\]YXЬ›ЬЬИ[›ЭљY\њЛ€ЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭЫЬљЩ›ЭЛЬ™XЫЬ™€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[Щ[S[YHHЭљ[™К›ЩK›[Щ[H”]›Ь›HЉKќљ[J
NВ€ЫЫњЭXЭ[Ы€HЭљ[™К›ЩKXЭ[Ы€ќЫЬљЩ›ЭЛњ™]љY]ЩYЉKќљ[J
NВ€ЫЫњЭ]Z[HЭљ[™К›ЩK™]Z[	Ы[Щ[S[Y_HЫЬљЩ›ЭИ™]љY]ЩY
Kќљ[J
NВ€ЫЫњЭ›ЭљY\ђћS[Щ[HHВ€X\›љ[™О€›X\›љ[™ЛXЩ\ќYљXШ]\И‹€ЫЬљЩ›ЬЩN€ќЫЬљЩ›ЬЩK[›ЭYљXШ][ЫњИ‹€X[Ш\™N€љX[[›ЭYљXШ][ЫњИ‹€X[€љX[[›ЭYљXШ][ЫњИ‹€YЬљUYN€ќYK[ЩЪ\ЭXЬИ‹€[ќYЬ][ЫњО€›Ь[ZH‹€YZ[Ћ€™]X\ЩH‹€X\€›X\И‹€›Щљ[N€™]X\ЩH‹€RN€›Ь[ZH‹€]›Ь›N€›Ь[ZH‚€NВ€ЫЫњЭ›ЭљY\’YH›ЩKњ›ЭљY\’Y›ЭљY\ђћS[Щ[VЫ[Щ[S[YWH›Ь[ZHЋВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€[Щ[N€[Щ[S[YK€XЭ[Ы‹€]Z[€Y]Y]N€В€ЩXЭ[ЫЋ€›ЩKњЩXЭ[Ы€[Щ[S[YKќУЭЩ\ђШ\ЩJ
K€›ЭN€›ЩK››ЭH€‹€Ь™X]YћN€\Щ\‹™[XZ[€ЫЫќ^€В€ЫЭ[ќћRY€‹њ›Щљ[KXЭ]™PЫЭ[ќћRY€›Э]RY€‹њ›Щљ[KXЭ]™T›Э]RY€ЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќ€B€K€\Ь]Ъ€[ЩB€JNВ€YXЭ]љ]J‹њ›Щљ[K]Z[
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ›ЭљY\њЛШШ[™Y]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹љ[ќYЬ][ЫњИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ›ЭљY\€Ш[™Y]H™]љY]И€JNВ€™]\›€Щ[™
™\ЛЊ›ЭљY\ђШ[™Y]PШ][ЩК‹ќ[ќ[YT›ЭљY\њКЉJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ›ЭљY\њЛШШ[™Y]\ЛЬЪЬќ\Э€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹љ[ќYЬ][ЫњИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ›ЭљY\€Ш[™Y]HЪЬќ\Э[™И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЪЬќ\ЭHЪЬќ\Э›ЭљY\ђШ[™Y]J‹\Щ\‹Эљ[™К›ЩKШ[™Y]RY€ЉJNВ€Y€
\ЪЬќ\Э
H™]\›€Щ[™
™\ЛИ\њ›ЬЋ€”›ЭљY\€Ш[™Y]H›Э›Э[™€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ›ЭљY\ђШ[™Y]TЪЬќ\Э™\Э[HЪЬќ\ЭВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ\ќ™\њЪ\ШЬ™X]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹љ[ќYЬ][ЫњИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ›ЭљY\€\ќ™\њЪ\ЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ\ќ™\њЪ\HЬ™X]T›ЭљY\”\ќ™\њЪ\
‹\Щ\‹Эљ[™К›ЩKќ\Hќ[ZX[ЉKЭљ[™К›ЩK››ЭH€ЉJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ\ќ™\њЪ\™\Э[H\ќ™\њЪ\В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ]›Ь›KZ[ќ[YЩ[ЩKЬЩX\Ъ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ]›Ь›H[ќ[YЩ[ЩHЩX\Ъ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]›Ь›R[ќ[YЩ[ЩTЩX\Ъ
‹\Щ\‹Эљ[™К›ЩKњ]Y\ћH€ЉKИ\N€›ЩKќ\H€‹ЫЭ[ќћN€›ЩKЫЭ[ќћH€€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€њ]›Ь›KZ[ќ[YЩ[ЩH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€њ]›Ь›WЪ[ќ[YЩ[ЩK™\™XЭЬћWЬЩX\Ъ‹€]Z[€]›Ь›H[ќ[YЩ[ЩHЩX\ЪYШШ[\™XЭЬћH›ЬЋ€	Ш›ЩKњ]Y\ћH›ЩKќ\H[™XЫЬ™ИџK€Y]Y]N€И]Y\ћN€›ЩKњ]Y\ћH€‹\N€›ЩKќ\H€‹ЫЭ[ќћN€›ЩKЫЭ[ќћH€‹X]Ъ\О€™\Э[›X]Ъ\Л›[™ЭK€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ]›Ь›R[ќ[YЩ[ЩT™\Э[H™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ]›Ь›KZ[ќ[YЩ[ЩKЬ™XЫЬ™€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹љ[ќYЬ][ЫњИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ]›Ь›H[ќ[YЩ[ЩH™XЫЬ™X[YЩ[Y[ќ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[ќ[YЩ[ЩHH[њЭ\™T]›Ь›R[ќ[YЩ[ЩT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€\N€Эљ[™К›ЩKќ\Hњ›ЭљY\€ЉKќљ[J
K€[YN€Эљ[™К›ЩK›[YH“™]ИШШ[™\ЫЭ\ЩHЉKќљ[J
K€ЫЭ[ќћN€Эљ[™К›ЩKЫЭ[ќћH”[‹PYњљXШ[€ЉKќљ[J
K€™YЪ[ЫЋ€Эљ[™К›ЩKњ™YЪ[Ы€›ЩKЫЭ[ќћH”ќ\[™YЪ[Ы€ЉKќљ[J
K€Щ\ќљXЩN€Эљ[™К›ЩKњЩ\ќљXЩH“ШШ[™\ЫЭ\ЩHЭ\ЬќЉKќљ[J
K€ЫЫќXЭ€Эљ[™К›ЩKЫЫќXЭ››Э›ЭљYYЉKќљ[J
K€[™ЭXYЩN€Эљ[™К›ЩK›[™ЭXYЩH‘[™Ы\ЪЉKќљ[J
K€Э]\О€њШ]™Y[ШШ[‹€ЫЭ\ЩN€›X[ќX[\]›Ь›KZ[ќ[YЩ[ЩK\™XЫЬ™‹€›Э\О€Эљ[™К›ЩK››Э\ИђYYX[ќX[H™Y›Ь™H]™H›ЭљY\€™YY\ИЫЫ›™XЭY€ЉKќљ[J
K€Ь™X]YћN€\Щ\‹™[XZ[€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€[ќ[YЩ[ЩK›ШШ[\™XЭЬћKќ[њЪYќ
™XЫЬ™
NВ€[ќ[YЩ[ЩK›ШШ[\™XЭЬћHH[ќ[YЩ[ЩK›ШШ[\™XЭЬћKњЫXЩJЌL
NВ€YXЭ]љ]J‹њ›Щљ[K]›Ь›H[ќ[YЩ[ЩH™XЫЬ™YY€	Ь™XЫЬ™›[Y_K
NВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€њ]›Ь›KZ[ќ[YЩ[ЩH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€њ]›Ь›WЪ[ќ[YЩ[ЩKњ™XЫЬ™ШYY‹€]Z[€	Ь™XЫЬ™ќ\_H™XЫЬ™YY€	Ь™XЫЬ™›[Y_K€Y]Y]N€И™XЫЬ™K€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ]›Ь›R[ќ[YЩ[ЩT™XЫЬ™H™XЫЬ™В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ]›Ь›KZ[ќ[YЩ[ЩKЪ[\Ьќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹љ[ќYЬ][ЫњИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ]›Ь›H[ќ[YЩ[ЩH[\ЬќИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[ќ[YЩ[ЩHH[њЭ\™T]›Ь›R[ќ[YЩ[ЩT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ^HЭљ[™К›ЩKЬЭ€›ЩKќ^€ЉKќљ[J
NВ€Y€
]^
H™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђФХ€^\И™\]Z\™Y€JNВ€ЫЫњЭ[™\ИH^њЬ]
ЧЏЧ‹КK›X\
[™HO€[™Kќљ[J
JK™љ[\Љ›ЫЫX[ЉNВ€ЫЫњЭXY\њИH
[™\ЛњЪYќ

Hќ\K[YKЫЭ[ќћK™YЪ[Ы‹Щ\ќљXЩKЫЫќXЭ[™ЭXYЩK›Э\ИЉKњЬ]
‹ЉK›X\
][HO€][Kќљ[J
KќУЭЩ\ђШ\ЩJ
JNВ€ЫЫњЭ›ЭЬИH[™\Л›X\
[™HO€В€ЫЫњЭ[Y\ИH[™KњЬ]
‹ЉK›X\
][HO€][Kќљ[J
JNВ€ЫЫњЭ›ЭИHШљ™XЭ™њ›ЫQ[ќљY\КXY\њЛ›X\

Щ^K[™^
HO€ЪЩ^K[Y\ЦЪ[™^H€—JJNВ€™]\›€В€Y€Ьћ\Лњ[™ЫUURQ

K€\N€›ЭЛќ\Hњ›ЭљY\€‹€[YN€›ЭЛ›[YH›ЭЛќ]H’[\ЬќY™\ЫЭ\ЩH‹€ЫЭ[ќћN€›ЭЛЫЭ[ќћH”[‹PYњљXШ[€‹€™YЪ[ЫЋ€›ЭЛњ™YЪ[Ы€›ЭЛ\™XH›ЭЛЫЭ[ќћH”ќ\[™YЪ[Ы€‹€Щ\ќљXЩN€›ЭЛњЩ\ќљXЩH›ЭЛ™\ШЬљ\[Ы€’[\ЬќYШШ[™\ЫЭ\ЩH‹€ЫЫќXЭ€›ЭЛЫЫќXЭ›ЭЛњЫ™H›ЭЛ™[XZ[››Э›ЭљYY‹€[™ЭXYЩN€›ЭЛ›[™ЭXYЩH‘[™Ы\Ъ‹€Э]\О€њШ]™Y[ШШ[‹€ЫЭ\ЩN€ЬЭ‹\]›Ь›KZ[ќ[YЩ[ЩKZ[\Ьќ‹€›Э\О€›ЭЛ››Э\И’[\ЬќY™Y›Ь™H]™H›ЭљY\€™YY\ИЫЫ›™XЭY€‹€Ь™X]YћN€\Щ\‹™[XZ[€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€JK™љ[\Љ›ЭИO€›ЭЛ›[YJNВ€[ќ[YЩ[ЩK›ШШ[\™XЭЬћKќ[њЪYќ
‹‹њ›ЭЬКNВ€[ќ[YЩ[ЩK›ШШ[\™XЭЬћHH[ќ[YЩ[ЩK›ШШ[\™XЭЬћKњЫXЩJЌL
NВ€ЫЫњЭ[\Ьќ™XЫЬ™HИY€Ьћ\Лњ[™ЫUURQ

K›ЭЬО€›ЭЬЛ›[™ЭЬ™X]YћN€\Щ\‹™[XZ[Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
HNВ€[ќ[YЩ[ЩKљ[\ЬќЛќ[њЪYќ
[\Ьќ™XЫЬ™
NВ€[ќ[YЩ[ЩKљ[\ЬќИH[ќ[YЩ[ЩKљ[\ЬќЛњЫXЩJЊ
NВ€YXЭ]љ]J‹њ›Щљ[K]›Ь›H[ќ[YЩ[ЩHФХ€[\ЬќYY	Ь›ЭЬЛ›[™ЭH™XЫЬ™
КK
NВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€њ]›Ь›KZ[ќ[YЩ[ЩH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€њ]›Ь›WЪ[ќ[YЩ[ЩKЬЭ—Ъ[\ЬќY‹€]Z[€	Ь›ЭЬЛ›[™ЭH]›Ь›H[ќ[YЩ[ЩH™XЫЬ™
КH[\ЬќY€Y]Y]N€И[\Ьќ™XЫЬ™K€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ]›Ь›R[ќ[YЩ[ЩR[\ЬќH[\Ьќ™XЫЬ™В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ]›Ь›KZ[ќ[YЩ[ЩKЩZ[K\[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ]›Ь›H[ќ[YЩ[ЩH[›љ[™И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[€H]›Ь›R[ќ[YЩ[ЩQZ[T[Љ‹\Щ\‹Эљ[™К›ЩK™ЫШ[€ЉJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€њ]›Ь›KZ[ќ[YЩ[ЩH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€њ]›Ь›WЪ[ќ[YЩ[ЩK™Z[WЬ[€‹€]Z[€Z[H]›Ь›H[€Ь™X]Y€	Ь[‹™ЫШ[K€Y]Y]N€И[’Y€[‹љYЭ\О€[‹њЭ\Л›[™ЭK€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ]›Ь›R[ќ[YЩ[ЩQZ[T[€H[ЋВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ]›Ь›KZ[ќ[YЩ[ЩKЩYќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ]›Ь›H[ќ[YЩ[ЩHYќИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭYќH]›Ь›R[ќ[YЩ[ЩQYќ
‹\Щ\‹›ЩJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€њ]›Ь›KZ[ќ[YЩ[ЩH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€њ]›Ь›WЪ[ќ[YЩ[ЩK›Y\ЬШYЩWЩYќY‹€]Z[€	ЩYќ™Yќќ[X™\џHYќY›Ь€	ЩYќ]YY[Щ_K€Y]Y]N€ИYќY€YќљY]YY[ЩN€Yќ]YY[ЩKЪ[›™[€YќЪ[›™[K€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ]›Ь›R[ќ[YЩ[ЩQYќHYќВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫЬ\][Ы[Z[ќ[YЩ[ЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬ\][Ы[[ќ[YЩ[ЩH€JNВ€™]\›€Щ[™
™\ЛЊЬ\][Ы[[ќ[YЩ[ЩS[Щ[
‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫЬ\][Ы[Z[ќ[YЩ[ЩKЩЫШ[€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬ\][Ы[[ќ[YЩ[ЩHЫШ[И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫШ[HЬ™X]SЬ\][Ы[ЫШ[
‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›Ь\][Ы[[ќ[YЩ[ЩQЫШ[HЫШ[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫЬ\][Ы[Z[ќ[YЩ[ЩKЬ^X›ЫЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬ\][Ы[[ќ[YЩ[ЩH^X›ЫЪЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[Hќ[“Ь\][Ы[^X›ЫЪК‹\Щ\‹Эљ[™К›ЩKќ\H›ЩKњ^X›ЫЪТY€ЉK›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›Ь\][Ы[[ќ[YЩ[ЩT^X›ЫЪИH™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫЬ\][Ы[Z[ќ[YЩ[ЩKЪ\ЬЭYH€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬ\][Ы[[ќ[YЩ[ЩH\ЬЭYH™XЫЭ™\ћH€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ\ЬЭYHH™XЫЬ™Ь\][Ы[\ЬЭYJ‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›Ь\][Ы[[ќ[YЩ[ЩR\ЬЭYHH\ЬЭYNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫЬ\][Ы[Z[ќ[YЩ[ЩKЩXЪ\Ъ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬ\][Ы[[ќ[YЩ[ЩHXЪ\Ъ[ЫњИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™]љY]ИHЬ\][Ы[XЪ\Ъ[Ы”™]љY]К‹\Щ\‹Эљ[™К›ЩKњ]Y\ћH›ЩK™ЫШ[€ЉJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›Ь\][Ы[[ќ[YЩ[ЩQXЪ\Ъ[Ы€H™]љY]ОВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШY\]™KX]]Ы›Ы^KЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИY\]™H]]Ы›Ы^H€JNВ€™]\›€Щ[™
™\ЛЊY\]™P]]Ы›Ы^S[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШY\]™KX]]Ы›Ы^KЬќ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИY\]™H]]Ы›Ы^HЮXЫ\И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[Hќ[ђY\]™P]]Ы›Ы^PЮXЫJ‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KY\]™P]]Ы›Ы^Tќ[€H™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШY\]™KX]]Ы›Ы^KЫќYЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИY\]™HќYЩ\И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭќYЩHHЬ™X]PY\]™SќYЩJ‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KY\]™P]]Ы›Ы^SќYЩHHќYЩNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШY\]™KX]]Ы›Ы^KЫX\›€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИY\]™HX\›љ[™И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ\]HH™XЫЬ™Y\]™SX\›љ[™К‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KY\]™P]]Ы›Ы^SX\›љ[™ИH\]NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™]ЫЬљЛZ[ќ[YЩ[ЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ™]ЫЬљИ[ќ[YЩ[ЩH€JNВ€™]\›€Щ[™
™\ЛЊ™]ЫЬљТ[ќ[YЩ[ЩS[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™]ЫЬљЛZ[ќ[YЩ[ЩKЬ]Y\ћH€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ™]ЫЬљИ[ќ[YЩ[ЩH]Y\љY\И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[Hќ[“™]ЫЬљТ[ќ[YЩ[ЩT]Y\ћJ‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›™]ЫЬљТ[ќ[YЩ[ЩT]Y\ћHH™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™]ЫЬљЛZ[ќ[YЩ[ЩKШXЭ[Ы‹\™XY[™\ЬИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ™]ЫЬљИXЭ[Ы€™XY[™\ЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™XY[™\ЬИH™]ЫЬљРXЭ[Ы”™XY[™\ЬК‹Эљ[™К›ЩKњЩ\ќљXЩRY™]ЫЬљТ[ќ[ќњ›ЫU^
›ЩKњ]Y\ћH€ЉJKЭљ[™К›ЩKњ]Y\ћH€ЉJNВ€ЫЫњЭ™]ЫЬљИH[њЭ\™S™]ЫЬљЩY[ќ[YЩ[ЩT›Щљ[J‹њ›Щљ[JNВ€™]ЫЬљЛXЭ[Ы”™XY[™\ЬЛќ[њЪYќ
ИY€Ьћ\Лњ[™ЫUURQ

K‹‹њ™XY[™\ЬЛ]Y\ћN€›ЩKњ]Y\ћH€‹Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
HJNВ€™]ЫЬљЛXЭ[Ы”™XY[™\ЬИH™]ЫЬљЛXЭ[Ы”™XY[™\ЬЛњЫXЩJ
NВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›™]ЫЬљРXЭ[Ы”™XY[™\ЬИH™XY[™\ЬОВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™]ЫЬљЛZ[ќ[YЩ[ЩKЬ›ЭљY\‹[X\€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ™]ЫЬљИ›ЭљY\€X\€JNВ€™]\›€Щ[™
™\ЛЊВ€™YЪ\ЭћN€™]ЫЬљФЩ\ќљXЩT™YЪ\ЭћJќ[ќ[YT›ЭљY\њКЉJK€ЫЭ[ќћPЫЭ™\YЩN€™]ЫЬљРЫЭ[ќћPЫЭ™\YЩS[Щ[
‹ќ[ќ[YT›ЭљY\њКЉJK€[Щ[€™]ЫЬљТ[ќ[YЩ[ЩS[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩXЫЬЮ\Э[KZ[ќ[YЩ[ЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИXЫЬЮ\Э[H[ќ[YЩ[ЩH€JNВ€™]\›€Щ[™
™\ЛЊXЫЬЮ\Э[R[ќ[YЩ[ЩS[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩXЫЬЮ\Э[KZ[ќ[YЩ[ЩKЫZ\ЬЪ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИXЫЬЮ\Э[HZ\ЬЪ[ЫњИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[Hќ[‘XЫЬЮ\Э[SZ\ЬЪ[ЫЉ‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K™XЫЬЮ\Э[SZ\ЬЪ[Ы€H™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩXЫЬЮ\Э[KZ[ќ[YЩ[ЩKЩЬ\€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИXЫЬЮ\Э[HЬ\€JNВ€™]\›€Щ[™
™\ЛЊВ€Ь\€XЫЬЮ\Э[PXЭЬ‘Ь\
‹ќ[ќ[YT›ЭљY\њКЉJK€[Щ[€XЫЬЮ\Э[R[ќ[YЩ[ЩS[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩXЫЬЮ\Э[KZ[ќ[YЩ[ЩKЬ™XY[™\ЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИXЫЬЮ\Э[H™XY[™\ЬИ€JNВ€™]\›€Щ[™
™\ЛЊXЫЬЮ\Э[T™XY[™\ЬУ[Щ[
‹ќ[ќ[YT›ЭљY\њКЉJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩ^XЭ]]™KZ[ќ[YЩ[ЩKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ^XЭ]]™H[ќ[YЩ[ЩH€JNВ€™]\›€Щ[™
™\ЛЊ^XЭ]]™R[ќ[YЩ[ЩTЭZ]S[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩ^XЭ]]™KZ[ќ[YЩ[ЩKШ[[^™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ^XЭ]]™H[[\Ъ\И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[Hќ[‘^XЭ]]™R[ќ[YЩ[ЩP[[\Ъ\К‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K™^XЭ]]™P[[\Ъ\ИH™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩ^XЭ]]™KZ[ќ[YЩ[ЩKЬ›ШYX\€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ^XЭ]]™H›ШYX\€JNВ€ЫЫњЭ[Щ[H^XЭ]]™R[ќ[YЩ[ЩTЭZ]S[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJNВ€™]\›€Щ[™
™\ЛЊВ€Э]\О€[Щ[њЭ]\Л€][Ъљ[Ьљ]Y\О€[Щ[›][Ъљ[Ьљ]Y\Л€[\њО€[Щ[њ[\њЛ€™]™[ќYT]О€[Щ[њ™]™[ќYT]Л€ЫЭ™\›[ЩN€[Щ[™ЫЭ™\›[ЩK€[\›Э™[Y[ќ€[Щ[љ[\›Э™[Y[ќ€ЭYЩЩ\ЭYЫЫ[X[™О€[Щ[њЭYЩЩ\ЭYЫЫ[X[™В€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩ^XЭ]]™KZ[ќ[YЩ[ЩKЬ™XY[™\ЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ^XЭ]]™H™XY[™\ЬИ€JNВ€ЫЫњЭ[Щ[H^XЭ]]™R[ќ[YЩ[ЩTЭZ]S[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJNВ€™]\›€Щ[™
™\ЛЊВ€ШЫЬ™N€[Щ[њШЫЬ™K€Э]\О€[Щ[њЭ]\Л€ЬЫЭ[ќћN€[Щ[›][Ъљ[Ьљ]Y\ЦМK€ЫЭ™\›[ЩT™XYN€[Щ[™ЫЭ™\›[ЩK™љ[\Љ][HO€][KњЭ]\ИOOHњ™XYH€][KњЭ]\ИOOH™ЭX\™Y€][KњЭ]\ИOOHќЫЬљЩ›ЭЛ\™XYHЉK›[™Э€™]™[ќYT]О€[Щ[њ™]™[ќYT]Л›[™Э€™^[\›Э™[Y[ќ€[Щ[љ[\›Э™[Y[ќ›™^[\›Э™[Y[ќ€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШ]]Ы›Ы[Э\Л[ЬЪ\Э][Ы‹ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ]]Ы›Ы[Э\ИЬЪ\Э][Ы€€JNВ€™]\›€Щ[™
™\ЛЊ]]Ы›Ы[Э\УЬЪ\Э][Ы“[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШ]]Ы›Ы[Э\Л[ЬЪ\Э][Ы‹Э[\]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬЪ\Э][Ы€[\]\И€JNВ€™]\›€Щ[™
™\ЛЊИ[\]\О€ЬЪ\Э][Ы“Z\ЬЪ[Ы•[\]\К
K[Щ[€]]Ы›Ы[Э\УЬЪ\Э][Ы“[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉJHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШ]]Ы›Ы[Э\Л[ЬЪ\Э][Ы‹ЫZ\ЬЪ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ]]Ы›Ы[Э\ИЬЪ\Э][Ы€Z\ЬЪ[ЫњИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[Hќ[ђ]]Ы›Ы[Э\УЬЪ\Э][Ы“Z\ЬЪ[ЫЉ‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K]]Ы›Ы[Э\УЬЪ\Э][Ы“Z\ЬЪ[Ы€H™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШ]]Ы›Ы[Э\Л[ЬЪ\Э][Ы‹ШЮXЫH€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬЪ\Э][Ы€ЮXЫ\И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[Hќ[ђ]]Ы›Ы[Э\УЬЪ\Э][ЫђЮXЫJ‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K]]Ы›Ы[Э\УЬЪ\Э][ЫђЮXЫHH™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШ]]Ы›Ы[Э\Л[ЬЪ\Э][Ы‹Ь™\Ьќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬЪ\Э][Ы€™\ЬќИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\ЬќHќZ[]]Ы›Ы[Э\УЬЪ\Э][Ы”™\Ьќ
‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K]]Ы›Ы[Э\УЬЪ\Э][Ы”™\ЬќH™\ЬќВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩ[[ЛЬќ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹YZ[€ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ^XЭ]]™H[[Иќ[њИ€JNВ€ЫЫњЭИЫЭ[ќћK›Э]HHHXЭ]™PЫЫќ^
ЉNВ€[њЭ\™SX\›љ[™Ф›Щљ[J‹њ›Щљ[JNВ€[њЭ\™UЫЬљЩ›ЬЩT›Щљ[J‹њ›Щљ[JNВ€[њЭ\™RX[›Щљ[J‹њ›Щљ[JNВ€[њЭ\™UYT›Щљ[J‹њ›Щљ[JNВ€[њЭ\™PZT›Щљ[J‹њ›Щљ[JNВ‚€ЫЫњЭЫЭ\њЩHH‹ЫЭ\њЩ\Л™љ[™
][HO€][KљYOOH‹њ›Щљ[KXЭ]™PЫЭ\њЩRY
H‹ЫЭ\њЩ\ЦМNВ€][њ›ЫY[ќHЩ][њ›ЫY[ќ
‹њ›Щљ[KЫЭ\њЩKљY
NВ€Y€
Y[њ›ЫY[ќ
HВ€[њ›ЫY[ќHВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЭ\њЩRY€ЫЭ\њЩKљY€Э]\О€њ™XYWЩ›Ь—Ь]Z^€‹€›ЩЬ™\ЬО€L€ШЫЬ™N€ЌK€XЭ]™S[Щ[R[™^€€ЫЫ\]Y[Щ[\О€МK€Э\ќY]€™]И]J
KќТTУФЭљ[™К
K€ЫЫ\]Y]€ќ[€NВ€‹њ›Щљ[K™[њ›ЫY[ќЛќ[њЪYќ
[њ›ЫY[ќ
NВ€H[ЩHВ€[њ›ЫY[ќњЭ]\ИH[њ›ЫY[ќњЭ]\ИOOHЫЫ\]Y€ИЫЫ\]Y€€њ™XYWЩ›Ь—Ь]Z^€ЋВ€[њ›ЫY[ќњ›ЩЬ™\ЬИHX]›X^
[њ›ЫY[ќњ›ЩЬ™\ЬИL
NВ€[њ›ЫY[ќњШЫЬ™HHX]›X^
[њ›ЫY[ќњШЫЬ™HЌJNВ€[њ›ЫY[ќЫЫ\]Y[Щ[\ИH[њ›ЫY[ќЫЫ\]Y[Щ[\ПЛ›[™ЭИ[њ›ЫY[ќЫЫ\]Y[Щ[\И€МNВ€B€‹њ›Щљ[KXЭ]™PЫЭ\њЩRYHЫЭ\њЩKљYВ€‹њ›Щљ[Kњ]Z^”ШЫЬ™HHX]›X^
‹њ›Щљ[Kњ]Z^”ШЫЬ™H[њ›ЫY[ќњШЫЬ™JNВ€Y€
Y‹њ›Щљ[KЫЫ\]YЫЭ\њЩ\Лљ[ЫY\КЫЭ\њЩKљY
JH‹њ›Щљ[KЫЫ\]YЫЭ\њЩ\Лњ\Ъ
ЫЭ\њЩKљY
NВ€Y€
Y‹њ›Щљ[KЩ\ќYљXШ]\ЛњЫЫYJ][HO€][KЫЭ\њЩRYOOHЫЭ\њЩKљY
JHВ€‹њ›Щљ[KЩ\ќYљXШ]\Лњ\Ъ
В€Y€Ьћ\Лњ[™ЫUURQ

K€Щ\ќYљXШ]Sќ[X™\Ћ€S‹PСT•IФЭљ[™К‹њ›Щљ[KЩ\ќYљXШ]\Л›[™Э
ИJKњYЭ\ќ
ЊЉ_X€ЫЭ\њЩRY€ЫЭ\њЩKљY€]N€ЫЭ\њЩKќ]K€\ЬЭYY]€™]И]J
KќТTУФЭљ[™К
B€JNВ€B€‹њ›Щљ[K›X\›љ[™ФЭ™XZИ
ПHNВ€‹њ›Щљ[K›X\›љ[™ТЭ\њИHќ[X™\Љ
‹њ›Щљ[K›X\›љ[™ТЭ\њИ
ИKЌJKќСљ^Y
JJNВ‚€Y€
Y‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лљ[ЫY\К”›Щљ[H™\љYљYYЉJH‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лњ\Ъ
”›Щљ[H™\љYљYYЉNВ€Y€
Y‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лљ[ЫY\К“Y[ќЬ€X]ЪYЉJH‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лњ\Ъ
“Y[ќЬ€X]ЪYЉNВ€‹њ›Щљ[K›Y[ќЬ€Hђ\ЬЪYЫ™YЋВ€‹њ›Щљ[KШ[™Y]TЭYЩHH’[ќ\ќљY]ИЋВ€‹њ›Щљ[Kљ[ќ\ќљY]ЬИHX]›X^
‹њ›Щљ[Kљ[ќ\ќљY]ЬИJNВ€ЫЫњЭ›ЫHH‹њ›Ы\Л™љ[™
][HO€›ЫT™XY[™\ЬК‹њ›Щљ[K][JK™[YЪX›JH‹њ›Ы\ЦМNВ€Y€
›ЫH	‰€Y‹њ›Щљ[K\XШ][ЫњЛњЫЫYJ][HO€][Kњ›ЫRYOOH›ЫKљY
JHВ€‹њ›Щљ[K\XШ][ЫњЛќ[њЪYќ
В€Y€Ьћ\Лњ[™ЫUURQ

K€›ЫRY€›ЫKљY€›ЫU]N€›ЫKќ]K€Э]\О€њЭX›Z]Y‹€ЭX›Z]Y]€™]И]J
KќТTУФЭљ[™К
K€]N€›ЫKњ]B€JNВ€B‚€ЫЫњЭ[ќZЩHHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KQSSШ€ЫЭ[ќћRY€ЫЭ[ќћKљY€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_H^XЭ]]™H[[И[ќZЩH›Ь€]Y]YKX][™™\™\Щ[ќ]]™HЫЬљЩ›ЭШ€љ\ЪУ]™[€ЫЭ[ќћKњљ\ЪИOOH’YЪ€ЫЭ[ќћKљX]ЏHОИ’YЪ€€”›Э][™H‹€]Y]YTЭ]\О€ђШ\™H[€Щ[™\]Y‹€™\™\Щ[ќ]]™TЭ]\О€ђЫЫ›™XЭY‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€KЯKВ€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_H^XЭ]]™H[[И[ќZЩH›Ь€]Y]YKX][™™\™\Щ[ќ]]™HЫЬљЩ›ЭШ€KИЪ[][][ЫЋ€ќYKY][љY[О€И™^XЭ]]™Q[[И—HJNВ€‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€‹њ›Щљ[Kњ™\™\Щ[ќ]]™PЫЫ›™XЭ[ЫњИ
ПHNВ€ЫЫњЭШ\™T™\Э[H]ШZ]ќ[ђZJШ\™\[€‹ЫЭ[ќћK›Э]K‹њ›Щљ[JNВ€‹њ›Щљ[KШ\™T[њЛќ[њЪYќ
В€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€Э]\О€XЭ]™H‹€^€Ш\™T™\Э[ќ^€›ЭљY\Ћ€Ш\™T™\Э[њ›ЭљY\‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€JNВ€ЫЭ[ќћKњ]Y]YHHђШ\™H[€Щ[™\]YЋВ‚€ЫЫњЭ›ЩXЭH
‹њ›ЩXЭИЧJVМNВ€Y€
›ЩXЭ
HВ€ЫЫњЭ[[УЬ™\€HВ€Y€Ьћ\Лњ[™ЫUURQ

K€Ь™\“ќ[X™\Ћ€S‹SФ‘IФЭљ[™К‹њ›Щљ[K›Ь™\њЛ›[™Э
ИJKњYЭ\ќ
ЊЉ_X€›ЩXЭY€›ЩXЭљY€›ЩXЭ€›ЩXЭ›[YK€ЫЭ[ќћRY€›ЩXЭЫЭ[ќћRY€›Э]RY€›Э]KљY€ЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќ€ЪXЪЬЪ[ќ[™^€€ЭYЩN€’[€[њЪ]‹€ЭYЩR[™^€‹€ќ^Y\’[ќ\™\Э€›ЩXЭќ^Y\’[ќ\™\Э€Э[€›ЩXЭњљXЩH
€Њ€[Y[[™N€В€ИX™[€’[€[њЪ]‹ЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HK€ИX™[€”XЪЩY‹ЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HK€ИX™[€“Ь™\€Ь™X]Y‹ЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HB€K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K›Ь™\њЛњ\Ъ
[[УЬ™\ЉNВ€YYQ]™[ќ
‹њ›Щљ[KИ\N€›Ь™\‹™[[ЧЬќ[€‹X™[€	Щ[[УЬ™\‹›Ь™\“ќ[X™\џHЬ™X]Y\љ[™И^XЭ]]™H[[Иќ[JNВ€B‚€›Ь€
ЫЫњЭ]™[ќЩ€В€И›X\›љ[™ЛXЩ\ќYљXШ]\И‹“X\›љ[™И‹™[[Л›X\›љ[™ЧШЫЫ\]Y‹	ШЫЭ\њЩKќ]_HX\›љ[™И]ЫЫ\]Y[€[[Иќ[‹K€ИќЫЬљЩ›ЬЩKZљ\И‹•ЫЬљЩ›ЬЩH‹™[[ЛќЫЬљЩ›ЬЩWЬЮ[ЩY‹ђШ[™Y]H™XY[™\ЬЛ\XШ][Ы‹[™Y[ќЬ€]љY[ЩHЮ[ЩY[€[[Иќ[‹€—K€ИљX[][ZX[‹’X[Ш\™H‹™[[ЛљX[ШШ\ЩWЫЬ[™Y‹	Ъ[ќZЩKњ]Y[ќ™YџH[ќZЩH[™Ш\™K\[€]љY[ЩHЬ™X]Y[€[[Иќ[‹K€ИќYK[X\љЩ]‹ђYЬљUYH‹™[[ЛќYWЫЬ™\—ШЬ™X]Y‹•YHЬ™\€[™X\љЩ]]љY[ЩHЬ™X]Y[€[[Иќ[‹€—B€JHВ€ЩТ[ќYЬ][ЫЉ‹И›ЭљY\’Y€]™[ќМK[Щ[N€]™[ќМWKXЭ[ЫЋ€]™[ќМ—K]Z[€]™[ќМЧHJNВ€B‚€›Ь€
ЫЫњЭ[Щ[S[YHЩ€И“X\›љ[™И‹•ЫЬљЩ›ЬЩH‹’X[Ш\™H‹ђYЬљUYH—JHВ€Y›ЭYљXШ][ЫЉ‹њ›Щљ[KВ€[Щ[N€[Щ[S[YK€›ЭљY\’Y€[Щ[S[YHOOH’X[Ш\™H€ИљX[[›ЭYљXШ][ЫњИ€€[Щ[S[YHOOH•ЫЬљЩ›ЬЩH€ИќЫЬљЩ›ЬЩK[›ЭYљXШ][ЫњИ€€[Щ[S[YHOOH“X\›љ[™И€И›X\›љ[™ЛXЩ\ќYљXШ]\И€€ќYK[ЩЪ\ЭXЬИ‹€Ъ[›™[€™^XЭ]]™KY[[И‹€Y\ЬШYЩN€	Ы[Щ[S[Y_H^XЭ]]™H[[ИЫЬљЩ›ЭИЫЫ\]Y€Ь™X]YћN€\Щ\‹›[YB€JNВ€B‚€ЫЫњЭЫЬ[ЭH]ШZ]ќ[ђZJЫЬ[Э‹ЫЭ[ќћK›Э]K‹њ›Щљ[JNВ€™XЫЬ™ZTќ[Љ‹И\N€ЫЬ[Э‹ЫЭ[ќћK›Э]K™\Э[€ЫЬ[Э[Щ[N€ђRH€JNВ€™XШ[Ф™XY[™\ЬК‹њ›Щљ[JNВ€YXЭ]љ]J‹њ›Щљ[K‘^XЭ]]™H[[Иќ[€ЫЫ\]YXЬ›ЬЬИX\›љ[™ЛЫЬљЩ›ЬЩKX[YKRK›ЭYљXШ][ЫњЛ[™[ќYЬ][ЫњЛ€ЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩ[[ЛЪ[ќ™\ЭЬ‹[]™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ[ќ™\ЭЬ€[[И[ЩH€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[Эќ[€H]ШZ]ќ[“ШШ[[ЭЭY[К‹\Щ\‹›ЩKњШЩ[\љ[И™\›Y\‹[X\љЩ]ЉNВ€ЫЫњЭЬЪ\Э][Ы€H]ШZ]ZSЬЪ\Э][Ы”™]љY]К‹\Щ\‹И\N€ЫЬ[Э‹›ЭN€“]™H[ќ™\ЭЬ€[[И[ЩH€JNВ€ЫЫњЭXЪЩ]H]љY[ЩQ^ЬќXЪЩ]
‹\Щ\‹љ[ќ™\ЭЬ€ЉNВ€‹њ›Щљ[K›]™R[ќ™\ЭЬ‘[[ЬИH‹њ›Щљ[K›]™R[ќ™\ЭЬ‘[[ЬИЧNВ€ЫЫњЭ[[ИHВ€Y€Ьћ\Лњ[™ЫUURQ

K€]N€“]™H[ќ™\ЭЬ€ЭZYY[[И‹€Э]\О€ЫЫ\]H‹€\њ]Ь”ШЬљ\€В€ђYЬљS™^\ИЭ\ќИЪ]H™X[\Щ\€™YY€‹€“™^\И™XYИX\›љ[™ЛЫЬљЩ›ЬЩK[ZX[YKX\ЛЫЫ[][љXШ][ЫњЛ[™›ЭљY\€]љY[ЩK€‹€•H]›Ь›H™XЫЫ[Y[™ИHYЪ\Э][YH™^[Э™K€‹€‘]™\ћHXЭ[Ы€Ь™X]\И]Y]X›H]љY[ЩH›Ь€\ќ™\њИ[™ќ[™\њЛ€‚€K€[Эќ[’Y€[Эќ[‹љY€ЬЪ\Э][Ы’Y€ЬЪ\Э][Ы‹›ЬЪ\Э][Ы‹љY€]љY[ЩQ^ЬќY€XЪЩ]љY€Ь™X]YћN€\Щ\‹™[XZ[€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K›]™R[ќ™\ЭЬ‘[[ЬЛќ[њЪYќ
[[КNВ€‹њ›Щљ[K›]™R[ќ™\ЭЬ‘[[ЬИH‹њ›Щљ[K›]™R[ќ™\ЭЬ‘[[ЬЛњЫXЩJL
NВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›Ь[ZH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€™[[Лљ[ќ™\ЭЬ—Ы]™WШЫЫ\]Y‹€]Z[€“]™H[ќ™\ЭЬ€ЭZYY[[ИЫЫ\]YЪ][Э]љY[ЩKRHЬЪ\Э][Ы‹[™^ЬќXЪЩ]€‹€Y]Y]N€И[[ТY€[[ЛљY[Эќ[’Y€[Эќ[‹љYЬЪ\Э][Ы’Y€ЬЪ\Э][Ы‹›ЬЪ\Э][Ы‹љY]љY[ЩQ^ЬќY€XЪЩ]љYB€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›]™R[ќ™\ЭЬ‘[[Ф™\Э[HИ[[Л[Эќ[‹ЬЪ\Э][Ы‹XЪЩ]NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩ]љY[ЩKЩ^Ьќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ]љY[ЩH^ЬќИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭXЪЩ]H]љY[ЩQ^ЬќXЪЩ]
‹\Щ\‹›ЩK]YY[ЩHљ[ќ™\ЭЬ€ЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K™]љY[ЩQ^Ьќ™\Э[HXЪЩ]В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ[ЭЬќ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИШШ[[Эќ[њИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[Эќ[€H]ШZ]ќ[“ШШ[[ЭЭY[К‹\Щ\‹›ЩKњШЩ[\љ[Ињќ\[XXШЩ\ЬИЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ[Э™\Э[H[Эќ[ЋВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЬ[ЭЬ™[[ЭK[][ЪZЪ]€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ™[[ЭH][ЪЪ]ЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭЪ]H™[[ЭTќ\[\›Y\“][ЪЪ]
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉKИ\њЪ\Э€ќYHJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ™[[ЭS][ЪЪ]™\Э[HЪ]В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩЫЭ™\››Y[ќЬ™XY[™\ЬИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЭ™\››Y[ќ™XY[™\ЬИЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭќ[€HЫЭ™\››Y[ќ™XY[™\ЬУ[Щ[
‹\Щ\‹ќ[ќ[YT›ЭљY\њКЉKИ\њЪ\Э€ќYKXЭ[ЫЋ€›ЩKXЭ[Ы€њ™]љY]И€JNВ€Y€
›ЩKXЭ[Ы€OOHњ™\ЬќЉHВ€ЫЫњЭXЪЩ]H]љY[ЩQ^ЬќXЪЩ]
‹\Щ\‹™ЫЭ™\››Y[ќЉNВ€ќ[‹™]љY[ЩQ^ЬќYHXЪЩ]љYВ€ќ[‹њ™\ЬќЫЫќ[ќHXЪЩ]ЫЫќ[ќВ€B€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K™ЫЭ™\››Y[ќ™XY[™\ЬФ™\Э[Hќ[ЋВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭЫЫY[‹Y[Z[KЭЫЬљЩ›ЭИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉH	‰€XШ[•\ЩJ\Щ\‹љX[ЉH	‰€XШ[•\ЩJ\Щ\‹ќYHЉH	‰€XШ[•\ЩJ\Щ\‹›X\›љ[™ИЉJHВ€™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЫY[€[™[Z[HYЬљXЭ[\™HЭ\ЬќЫЬљЩ›ЭЬИ€JNВ€B€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭќ[€Hќ[•ЫЫY[‘[Z[PYЬљXЭ[\™UЫЬљЩ›ЭК‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KќЫЫY[‘[Z[T™\Э[Hќ[ЋВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЩ[[ЛЭЫЭИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹YZ[€ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ[ќ™\ЭЬ€[[Иќ[њИ€JNВ€ЫЫњЭљYЩ\љXHH‹ЫЭ[ќљY\Л™љ[™
][HO€][KљYOOH›љYЩ\љXHЉH‹ЫЭ[ќљY\ЦМNВ€‹њ›Щљ[KXЭ]™PЫЭ[ќћRYHљYЩ\љXKљYВ€‹њ›Щљ[KXЭ]™T›Э]RYHљYЩ\љXKњ›Э]RYВ€ЫЫњЭИЫЭ[ќћK›Э]HHHXЭ]™PЫЫќ^
ЉNВ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќH›Э]KЪXЪЬЪ[ќЦМNВ€‹њ›Щљ[Kњ›Э]TЭYЩHH’[ќ™\ЭЬ€[[И]™HЋВ€[њЭ\™SX\›љ[™Ф›Щљ[J‹њ›Щљ[JNВ€[њЭ\™UЫЬљЩ›ЬЩT›Щљ[J‹њ›Щљ[JNВ€[њЭ\™RX[›Щљ[J‹њ›Щљ[JNВ€[њЭ\™UYT›Щљ[J‹њ›Щљ[JNВ€[њЭ\™PZT›Щљ[J‹њ›Щљ[JNВ‚€ЫЫњЭЫЭ\њЩHH‹ЫЭ\њЩ\Л™љ[™
][HO€][KљYOOHќ[ZX[\Э\ЬќЉH‹ЫЭ\њЩ\ЦМNВ€][њ›ЫY[ќHЩ][њ›ЫY[ќ
‹њ›Щљ[KЫЭ\њЩKљY
NВ€Y€
Y[њ›ЫY[ќ
HВ€[њ›ЫY[ќHВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЭ\њЩRY€ЫЭ\њЩKљY€Э]\О€ЫЫ\]Y‹€›ЩЬ™\ЬО€L€ШЫЬ™N€L‹€XЭ]™S[Щ[R[™^€€ЫЫ\]Y[Щ[\О€
ЫЭ\њЩK›[Щ[\ИЧJK›X\

Л[™^
HO€[™^
K€Э\ќY]€™]И]J
KќТTУФЭљ[™К
K€ЫЫ\]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K™[њ›ЫY[ќЛќ[њЪYќ
[њ›ЫY[ќ
NВ€H[ЩHВ€[њ›ЫY[ќњЭ]\ИHЫЫ\]YЋВ€[њ›ЫY[ќњ›ЩЬ™\ЬИHLВ€[њ›ЫY[ќњШЫЬ™HHX]›X^
[њ›ЫY[ќњШЫЬ™HLЉNВ€[њ›ЫY[ќЫЫ\]Y[Щ[\ИH
ЫЭ\њЩK›[Щ[\ИЧJK›X\

Л[™^
HO€[™^
NВ€[њ›ЫY[ќЫЫ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€B€‹њ›Щљ[KXЭ]™PЫЭ\њЩRYHЫЭ\њЩKљYВ€‹њ›Щљ[Kњ]Z^”ШЫЬ™HHX]›X^
‹њ›Щљ[Kњ]Z^”ШЫЬ™HLЉNВ€Y€
Y‹њ›Щљ[KЫЫ\]YЫЭ\њЩ\Лљ[ЫY\КЫЭ\њЩKљY
JH‹њ›Щљ[KЫЫ\]YЫЭ\њЩ\Лњ\Ъ
ЫЭ\њЩKљY
NВ€Y€
Y‹њ›Щљ[KЩ\ќYљXШ]\ЛњЫЫYJ][HO€][KЫЭ\њЩRYOOHЫЭ\њЩKљY
JHВ€‹њ›Щљ[KЩ\ќYљXШ]\Лњ\Ъ
В€Y€Ьћ\Лњ[™ЫUURQ

K€Щ\ќYљXШ]Sќ[X™\Ћ€S‹PСT•IФЭљ[™К‹њ›Щљ[KЩ\ќYљXШ]\Л›[™Э
ИJKњYЭ\ќ
ЊЉ_X€ЫЭ\њЩRY€ЫЭ\њЩKљY€]N€ЫЭ\њЩKќ]K€\ЬЭYY]€™]И]J
KќТTУФЭљ[™К
B€JNВ€B€›Ь€
ЫЫњЭ[ЩHЩ€ИШ\[Ы€‹ќљ\ЭX[‹›ЭЛX[™ЪY—JHВ€‹њ›Щљ[K›X\›љ[™РXШЫЫ[[Щ][ЫњЛќ[њЪYќ
В€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЭ\њЩRY€ЫЭ\њЩKљY€ЫЭ\њЩU]N€ЫЭ\њЩKќ]K€[ЩK€]N€[ЩHOOHШ\[Ы€€ИђШ\[Ы™Y\ЬЫЫ€XЪЩ]€€[ЩHOOHќљ\ЭX[€Иђ]Y[ИЭZYH[™ШЬ™Y[‹\™XY\€Э][™H€€“Щ™›[™HЭЛX[™ЪYXЪЩ]‹€[™ЭXYЩN€њЭИ‹€Э\ЬќО€[ЩHOOHШ\[Ы€€ИИ›]™HШ\[ЫњИ‹ќ[њШЬљ\‹њ™[^H[™Щ™€—H€[ЩHOOHќљ\ЭX[€ИИ]Y[И\њ][Ы€‹њШЬ™Y[‹\™XY\€Э][™H‹›\™ЩK\љ[ќЭ[[X\ћH—H€И”УTИЭ[[X\ћH‹›Щ™›[™HXЪЩ]‹ЫЫ[][љ]HZYHЪXЪЫ\Э—K€Э]\О€њ™XYH‹€›ЩЬ™\ЬР]™\]Y\Э€L€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€JNВ€B€‹њ›Щљ[K›X\›љ[™РXШЫЫ[[Щ][ЫњИH‹њ›Щљ[K›X\›љ[™РXШЫЫ[[Щ][ЫњЛњЫXЩJЊ
NВ€‹њ›Щљ[K›X\›љ[™ТЭ\њИHќ[X™\Љ
ќ[X™\Љ‹њ›Щљ[K›X\›љ[™ТЭ\њИ
H
ИЉKќСљ^Y
JJNВ€‹њ›Щљ[K›X\›љ[™ФЭ™XZИ
ПHОВ€‹њ›Щљ[Kњ™XY[™\ЬИHX]›X^
‹њ›Щљ[Kњ™XY[™\ЬИMЉNВ‚€Y€
Y‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лљ[ЫY\К”›Щљ[H™\љYљYYЉJH‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лњ\Ъ
”›Щљ[H™\љYљYYЉNВ€Y€
Y‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лљ[ЫY\КђXШЩ\ЬЪXљ[]HЭ\Ьќ™XYHЉJH‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лњ\Ъ
ђXШЩ\ЬЪXљ[]HЭ\Ьќ™XYHЉNВ€Y€
Y‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лљ[ЫY\К“Y[ќЬ€X]ЪYЉJH‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лњ\Ъ
“Y[ќЬ€X]ЪYЉNВ€‹њ›Щљ[K™[YЪXљ[]HH‘[YЪX›HЋВ€‹њ›Щљ[KШ\™Y\•XЪИH“XY\њЪ\]Ш^HЋВ€‹њ›Щљ[K›X\›љ[™Ф]H’X[Ш\™HXШЩ\ЬИЫЬљЩ›ЬЩHЋВ€‹њ›Щљ[K›Y[ќЬ€Hђ\ЬЪYЫ™YЋВ€‹њ›Щљ[KШ[™Y]TЭYЩHH”ЪYќ™XYHЋВ€‹њ›Щљ[Kљ[ќ\ќљY]ЬИHX]›X^
‹њ›Щљ[Kљ[ќ\ќљY]ЬИЉNВ€ЫЫњЭ›ЫHH‹њ›Ы\Л™љ[™
][HO€][KљYOOHљX[\™\ЉH‹њ›Ы\ЦМNВ€Y€
›ЫH	‰€Y‹њ›Щљ[K\XШ][ЫњЛњЫЫYJ][HO€][Kњ›ЫRYOOH›ЫKљY
JHВ€‹њ›Щљ[K\XШ][ЫњЛќ[њЪYќ
В€Y€Ьћ\Лњ[™ЫUURQ

K€›ЫRY€›ЫKљY€›ЫU]N€›ЫKќ]K€Э]\О€њЭX›Z]Y‹€ЭX›Z]Y]€™]И]J
KќТTУФЭљ[™К
K€]N€›ЫKњ]B€JNВ€B€Y€
J‹њ›Щљ[KњЪYќШЪY[HЧJKњЫЫYJ][HO€][K™[[ФЪYќ
JHВ€ЫЫњЭЪYќHВ€Y€Ьћ\Лњ[™ЫUURQ

K€›ЫN€›ЫOЛќ]HђXШЩ\ЬЪX›HX[™\™\Щ[ќ]]™H‹€Э\ќР]€™]И]J]K››ЭК
H
ИЌ
KќТTУФЭљ[™К
K€Э]\О€њШЪY[Y‹€\Э[X]YX\›љ[™ЬО€›ЫOЛњ]HMЊ€[[ФЪYќ€ќYB€NВ€‹њ›Щљ[KњЪYќШЪY[Kќ[њЪYќ
ЪYќ
NВ€‹њ›Щљ[K›™^ЪYќH™]И]JЪYќњЭ\ќР]
KќУШШ[TЭљ[™К™[‹UTИ‹И]TЭ[N€›YY][H‹[YTЭ[N€њЪЬќ€JNВ€‹њ›Щљ[K™X\›љ[™ЬИHX]›X^
‹њ›Щљ[K™X\›љ[™ЬИЪYќ™\Э[X]YX\›љ[™ЬКNВ€B‚€ЫЫњЭ[ќZЩHHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUS‘РKUУХШ€ЫЭ[ќћRY€ЫЭ[ќћKљY€™YYЭ[[X\ћN€”ќ\[љYЩ\љXHXШЩ\ЬЪX›H[ZX[[ќZЩH›Ь€X\љ[™И[™љ\ЭX[[\Z\›Y[ќЭ\Ьќ‹€љ\ЪУ]™[€“[Щ\]H‹€]Y]YTЭ]\О€ђXШЩ\ЬЪX›H[ZX[[€™XYH‹€™\™\Щ[ќ]]™TЭ]\О€ђШ\™YЪ]™\€›ЭYљYY‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€KЯKВ€™YYЭ[[X\ћN€”ќ\[љYЩ\љXHXШЩ\ЬЪX›H[ZX[[ќZЩH›Ь€X\љ[™И[™љ\ЭX[[\Z\›Y[ќЭ\Ьќ‚€KИЪ[][][ЫЋ€ќYKY][љY[О€ИќЫЭС[[И—HJNВ€‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€‹њ›Щљ[Kњ™\™\Щ[ќ]]™PЫЫ›™XЭ[ЫњИ
ПHNВ€‹њ›Щљ[Kќ[ZX[XШЩ\ЬЪXљ[]Kќ[њЪYќ
€В€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€]N€ђXШЩ\ЬЪX›H[ZX[[€‹€Э]\О€ђXШЩ\ЬИ[€™XYH‹€[™ЭXYЩN€њЭИ‹€Э\ЬќО€ИШ\[Ы€™[^H‹]Y[И\ШЬљ\[Ы€‹›\™ЩK\љ[ќЭ[[X\ћH‹Ш\™YЪ]™\€[™Щ™€‹›ЭЛX[™ЪYШ[XЪИ—K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K€В€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€]N€ђШ\[Ы€™[^HЩ\ЬЪ[Ы€‹€Э]\О€ђШ\[Ы€™[^HXЭ]™H‹€[™ЭXYЩN€њЭИ‹€Э\ЬќО€И›]™HШ\[ЫњИ‹ќ[њШЬљ\‹”УTИЭ[[X\ћH—K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K€В€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€]N€ђШ\™YЪ]™\€XШЩ\ЬЪXљ[]H›ЭYљXШ][Ы€‹€Э]\О€ђШ\™YЪ]™\€›ЭYљYY‹€[™ЭXYЩN€њЭИ‹€Э\ЬќО€Иќќ\ЭYШ\™YЪ]™\€[\ќ‹њ™\™\Щ[ќ]]™HШ[XЪИ‹ЫЫ[][љ]HZYHЪXЪЫ\Э—K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€B€
NВ€‹њ›Щљ[Kќ[ZX[XШЩ\ЬЪXљ[]HH‹њ›Щљ[Kќ[ZX[XШЩ\ЬЪXљ[]KњЫXЩJЊ
NВ€‹њ›Щљ[KњШY™]T™]љY]ЬЛќ[њЪYќ
В€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЭ[ќћRY€ЫЭ[ќћKљY€љ\ЪУ]™[€ЫЭ[ќћKњљ\ЪЛ€X][™^€ЫЭ[ќћKљX]€]T]X[]N€MЛ€™XЫЫ[Y[™][ЫЋ€”›ШЩYYЪ][X[‹\Э\ЬќYXШЩ\ЬЪX›H[ZX[Ш\™YЪ]™\€[™Щ™‹[™ЭЛX[™ЪYШ[XЪЛ€‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€JNВ€ЫЫњЭШ\™T™\Э[H]ШZ]ќ[ђZJШ\™\[€‹ЫЭ[ќћK›Э]K‹њ›Щљ[JNВ€‹њ›Щљ[KШ\™T[њЛќ[њЪYќ
В€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€Э]\О€XЭ]™H‹€^€	ШШ\™T™\Э[ќ^HXШЩ\ЬЪXљ[]HY[™[N€\ЩHШ\[ЫњЛ]Y[И\ШЬљ\[Ы‹Ш\™YЪ]™\€ЫЫ™љ\›X][Ы‹[™УTИ[XЪЛ€›ЭљY\Ћ€Ш\™T™\Э[њ›ЭљY\‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€JNВ€ЫЭ[ќћKњ]Y]YHHђXШЩ\ЬЪX›H[ZX[[€™XYHЋВ‚€ЫЫњЭ›ЩXЭH
‹њ›ЩXЭИЧJK™љ[™
][HO€][KЫЭ[ќћRYOOHЫЭ[ќћKљY
H
‹њ›ЩXЭИЧJVМNВ€Y€
›ЩXЭ
HВ€ЫЫњЭЬ™\€HВ€Y€Ьћ\Лњ[™ЫUURQ

K€Ь™\“ќ[X™\Ћ€S‹SФ‘IФЭљ[™К‹њ›Щљ[K›Ь™\њЛ›[™Э
ИJKњYЭ\ќ
ЊЉ_X€›ЩXЭY€›ЩXЭљY€›ЩXЭ€›ЩXЭ›[YK€ЫЭ[ќћRY€ЫЭ[ќћKљY€›Э]RY€›Э]KљY€ЪXЪЬЪ[ќ€›Э]KЪXЪЬЪ[ќЦМWH›Э]KЪXЪЬЪ[ќЦМK€ЪXЪЬЪ[ќ[™^€K€ЭYЩN€”]X[]HЪXЪИ‹€ЭYЩR[™^€Л€ќ^Y\’[ќ\™\Э€X]›X^
›ЩXЭќ^Y\’[ќ\™\Э
K€Э[€›ЩXЭњљXЩH
€ЌK€[Y[[™N€В€ИX™[€”]X[]HЪXЪИ‹ЪXЪЬЪ[ќ€›Э]KЪXЪЬЪ[ќЦМWH›Э]KЪXЪЬЪ[ќЦМKЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HK€ИX™[€’[€[њЪ]‹ЪXЪЬЪ[ќ€›Э]KЪXЪЬЪ[ќЦМKЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HK€ИX™[€”XЪЩY‹ЪXЪЬЪ[ќ€›Э]KЪXЪЬЪ[ќЦМKЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HK€ИX™[€“Ь™\€Ь™X]Y‹ЪXЪЬЪ[ќ€›Э]KЪXЪЬЪ[ќЦМKЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HB€K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K›Ь™\њЛњ\Ъ
Ь™\ЉNВ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќHЬ™\‹ЪXЪЬЪ[ќВ€‹њ›Щљ[Kњ›Э]TЭYЩHHЬ™\‹њЭYЩNВ€YYQ]™[ќ
‹њ›Щљ[KИ\N€›Ь™\‹ќЫЭЧЩ[[И‹X™[€	ЫЬ™\‹›Ь™\“ќ[X™\џHY[ЩYИ]X[]HЪXЪИ\љ[™ИУХИ[ќ™\ЭЬ€[[ШJNВ€‹њ›Щљ[KќШ[][њШXЭ[ЫњЛќ[њЪYќ
В€Y€Ьћ\Лњ[™ЫUURQ

K€›ЭљY\Ћ€“KT\ШH‹€[[Э[ќ€L€\N€Ь™Y]‹€Э]\О€њЬЭY‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€JNВ€‹њ›Щљ[KќШ[]Hќ[X™\Љ
ќ[X™\Љ‹њ›Щљ[KќШ[]
H
ИL
KќСљ^Y
ЉJNВ€B‚€ЫЫњЭZU\\ИHИЫЬ[Э‹ќ]Ь€‹ќљXYЩH‹ЫЫ[X[™‹њ›Э]H—NВ€›Ь€
ЫЫњЭ\HЩ€ZU\\КHВ€ЫЫњЭ™\Э[H]ШZ]ќ[ђZJ\KЫЭ[ќћK›Э]K‹њ›Щљ[JNВ€™XЫЬ™ZTќ[Љ‹И\KЫЭ[ќћK›Э]K™\Э[[Щ[N€\HOOHќ]Ь€€И“X\›љ[™И€€\HOOHќљXYЩH€И’X[Ш\™H€€\HOOHњ›Э]H€ИђYЬљUYH€€ђRH€JNВ€B‚€ЫЫњЭ[[С]™[ќИHВ€И›X\›љ[™ЛXЩ\ќYљXШ]\И‹“X\›љ[™И‹ќЫЭЛ›X\›љ[™ЧШXШЩ\ЬЪX›H‹ђXШЩ\ЬЪX›H[ZX[ЫЭ\њЩHЫЫ\]YЪ]Ш\[ЫњЛ]Y[ИЭZYK[™Щ™›[™HXЪЩ]€—K€ИќЫЬљЩ›ЬЩKZљ\И‹•ЫЬљЩ›ЬЩH‹ќЫЭЛќЫЬљЩ›ЬЩWЬЪYќЬ™XYH‹ђXШЩ\ЬЪX›HX[™\™\Щ[ќ]]™H[Э™Y[ќИЪYќ\™XYHЫЬљЩ›ЬЩHЭ]K€—K€ИљX[][ZX[‹’X[Ш\™H‹ќЫЭЛќ[ZX[ШXШЩ\ЬЪX›H‹	Ъ[ќZЩKњ]Y[ќ™YџHXШЩ\ЬЪX›H[ZX[Щ\ЬЪ[Ы€™\\™YK€ИљX[[›ЭYљXШ][ЫњИ‹’X[Ш\™H‹ќЫЭЛШ\™YЪ]™\—Ы›ЭYљYY‹ђШ\™YЪ]™\€[™ЫЫ[][љ]HZYH›ЭYљXШ][Ы€™XЫЬ™Y€—K€ИљX[YZ€‹’X[Ш\™H‹ќЫЭЛXШЩ\ЬЪX›WШШ\™WЬ[€‹ђXШЩ\ЬЪX›HШ\™H[€Ю[ЩY›Ь€Ы[љXШ[™]љY]Л€—K€ИќYK[X\љЩ]‹ђYЬљUYH‹ќЫЭЛќYWЬ]X[]WШЪXЪИ‹“љYЩ\љXH›ЩXЭЬ™\€Y[ЩYЪ]^[Y[ќ[™›Э]H]љY[ЩK€—K€И›Ь[ZH‹ђRH‹ќЫЭЛZWЫЬЪ\Э][Ы€‹ђRH™XЫЫ[Y[™][ЫњИЩ[™\]YXЬ›ЬЬИX\›љ[™ЛЫЬљЩ›ЬЩKX[YK[™X\[ќ[YЩ[ЩK€—B€NВ€›Ь€
ЫЫњЭЬ›ЭљY\’Y[Щ[KXЭ[Ы‹]Z[HЩ€[[С]™[ќКHВ€ЩТ[ќYЬ][ЫЉ‹И›ЭљY\’Y[Щ[KXЭ[Ы‹]Z[JNВ€B‚€›Ь€
ЫЫњЭ[Щ[S[YHЩ€И“X\›љ[™И‹•ЫЬљЩ›ЬЩH‹’X[Ш\™H‹ђYЬљUYH‹ђRH—JHВ€Y›ЭYљXШ][ЫЉ‹њ›Щљ[KВ€[Щ[N€[Щ[S[YK€›ЭљY\’Y€[Щ[S[YHOOH’X[Ш\™H€ИљX[[›ЭYљXШ][ЫњИ€€[Щ[S[YHOOH•ЫЬљЩ›ЬЩH€ИќЫЬљЩ›ЬЩK[›ЭYљXШ][ЫњИ€€[Щ[S[YHOOH“X\›љ[™И€И›X\›љ[™ЛXЩ\ќYљXШ]\И€€[Щ[S[YHOOHђYЬљUYH€ИќYK[ЩЪ\ЭXЬИ€€›Ь[ZH‹€Ъ[›™[€ќЫЭЛY[[И‹€Y\ЬШYЩN€	Ы[Щ[S[Y_HУХИ[[И]љY[ЩHЫЫ\]Y›Ь€ќ\[љYЩ\љXHXШЩ\ЬЪXљ[]HШЩ[\љ[Л€Ь™X]YћN€\Щ\‹›[YB€JNВ€B‚€‹њ›Щљ[K™[[У[ЫY[ќИHВ€И]N€ђXШЩ\ЬЪX›HX\›™\€Э\ќИ‹]Z[€•[ZX[ЫЭ\њЩHЫЫ\]YЪ]Ш\[ЫњЛ]Y[ИЭZYKШЬ™Y[‹\™XY\€Э][™K[™Щ™›[™HXЪЩ]€‹]љY[ЩN€“X\›љ[™ИXШЫЫ[[Щ][Ы€
ИЩ\ќYљXШ]H‹Э]\О€™Ы™H€K€И]N€•Z[љ[™И™XЫЫY\ИЫЬљИ‹]Z[€ђШ[™Y]H\И™\љYљYYX]ЪYИHX[XШЩ\ЬИ›ЫK\ЬЪYЫ™YY[ќЬ€Э\Ьќ[™ШЪY[Y›Ь€HZYЪYќ€‹]љY[ЩN€’’TИ
ИШ[[™\€
И›ЭYљXШ][Ы€‹Э]\О€™Ы™H€K€И]N€•[ZX[YY]ИQH™YYИ‹]Z[€”]Y[ќ™XЩZ]™\ИШ\[Ы€™[^K]Y[И\ШЬљ\[Ы‹Ш\™YЪ]™\€›ЭYљXШ][Ы‹[™ЭЛX[™ЪYШ[XЪИЭ\Ьќ€‹]љY[ЩN€•[ZX[
ИR€
И›ЭYљXШ][Ы€‹Э]\О€™Ы™H€K€И]N€ђRH™[XZ[њИЭ\\ќљ\ЩY‹]Z[€ђRHЭZY[ЩH\И™XЫЬ™YЪ]ШY™]H™]љY]ЛШ\™H[‹›Э]H[ќ[YЩ[ЩK[™[X[€Э™\њЪYЪ€‹]љY[ЩN€ђRHќ[€
ИЫЭ™\›[ЩHZ[‹Э]\О€™Ы™H€K€И]N€•YH[™Ъ[™H[Э™\И[YH‹]Z[€“љYЩ\љXH›ЩXЭЬ™\€Y[Щ\И›ЭYЪ]X[]HЪXЪИЪ]Ш[][™›Э]H]љY[ЩK€‹]љY[ЩN€“X\љЩ]
И^[Y[ќ
ИЩЪ\ЭXЬИ‹Э]\О€™Ы™H€K€И]N€’[ќ™\ЭЬ€›ЫЩ€\X\њИ‹]Z[€”›ЭљY\€]™[ќЛ›ЭYљXШ][ЫњЛXЭ]љ]KX\ЫЫќ^[™›Щљ[HЭ]H\]HXЬ›ЬЬИHЪЫH]›Ь›K€‹]љY[ЩN€ђ]Y]\™XYHЬ\][™И™XЫЬ™‹Э]\О€™Ы™H€B€NВ€‹њ›Щљ[K™[[ФШЫЬ™HHLВ€™XШ[Ф™XY[™\ЬК‹њ›Щљ[JNВ€YXЭ]љ]J‹њ›Щљ[K•УХИ[ќ™\ЭЬ€[[ИЫЫ\]Y€ќ\[љYЩ\љXHXШЩ\ЬЪXљ[]KX\›љ[™ЛЫЬљЩ›ЬЩK[ZX[YKX\RK›ЭYљXШ][ЫњЛ[™›ЭљY\€]љY[ЩH\™H[XЭ]™K€ЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШЫЫќ^€	‰€
™\K›Y]ЩOOH”UТ€™\K›Y]ЩOOH”ФХЉJHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫЭ[ќћHH‹ЫЭ[ќљY\Л™љ[™
][HO€][KљYOOH›ЩKЫЭ[ќћRY
NВ€Y€
XЫЭ[ќћJH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђЫЭ[ќћH›Э›Э[™€JNВ€ЫЫњЭ›Э]HH‹њ›Э]\Л™љ[™
][HO€][KљYOOHЫЭ[ќћKњ›Э]RY
NВ€ЫЫњЭЭ\њ™[ќH‹ќ\Щ\њЛ™љ[™
][HO€][KљYOOH\Щ\‹љY
H\Щ\ЋВ€ЫЫњЭ™^[™ЭXYЩHHУХS•–WУS‘ХPQСVШЫЭ[ќћKљYHЭ\њ™[ќ›[™ЭXYЩH™[€ЋВ€‹њ›Щљ[KXЭ]™PЫЭ[ќћRYHЫЭ[ќћKљYВ€‹њ›Щљ[KXЭ]™T›Э]RYH›Э]KљYВ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќH›Э]KЪXЪЬЪ[ќЦМNВ€Э\њ™[ќЫЭ[ќћHHЫЭ[ќћK›[YNВ€Э\њ™[ќ›[™ЭXYЩHH™^[™ЭXYЩNВ€‹њ›Щљ[KXШЩ\ЬЪXљ[]T›Щљ[HHВ€‹‹Љ‹њ›Щљ[KXШЩ\ЬЪXљ[]T›Щљ[HЯJK€[™ЭXYЩN€™^[™ЭXYЩB€NВ€YXЭ]љ]J‹њ›Щљ[KЫЭ[ќћHЫЫќ^Ъ[™ЩYИ	ШЫЭ[ќћK›[Y_NИ]›Ь›H[™ЭXYЩHЪ[™ЩYИ	Ы™^[™ЭXYЩKќХ\\ђШ\ЩJ
_K
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹Э\њ™[ќ
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ\Щ\‹Ы[™ЭXYЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\]Y\ЭYHЭљ[™К›ЩK›[™ЭXYЩH€ЉKќљ[J
KќУЭЩ\ђШ\ЩJ
Kњ™\XЩJ—И‹‹HЉKњЬ]
‹HЉVМNВ€Y€
Q•SРTУS‘ХPQСWРУСTЛљ\К™\]Y\ЭY
JH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€•[њЭ\ЬќY[™ЭXYЩH€JNВ€ЫЫњЭ[™ЭXYЩHHШ[›ЫљXШ[›Щљ[S[™ЭXYЩJ™\]Y\ЭY
NВ€ЫЫњЭЭ\њ™[ќH‹ќ\Щ\њЛ™љ[™
][HO€][KљYOOH\Щ\‹љY
NВ€Э\њ™[ќ›[™ЭXYЩHH[™ЭXYЩNВ€‹њ›Щљ[KXШЩ\ЬЪXљ[]T›Щљ[HHВ€‹‹Љ‹њ›Щљ[KXШЩ\ЬЪXљ[]T›Щљ[HЯJK€[™ЭXYЩB€NВ€YXЭ]љ]J‹њ›Щљ[KX\›љ[™И[™ЭXYЩHЪ[™ЩYИ	Ы[™ЭXYЩKќХ\\ђШ\ЩJ
_K
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹Э\њ™[ќ
JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫX\›љ[™ЛШШ][ЩИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹›X\›љ[™ИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИX\›љ[™ИШ][ЩИXШЩ\ЬИ€JNВ€™]\›€Щ[™
™\ЛЊИШ][ЩО€X\›љ[™РШ][ЩКЉK\Щ\Ћ€И[™ЭXYЩN€\Щ\‹›[™ЭXYЩHHJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫX\›љ[™ЛЬЭ\ќ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹›X\›љ[™ИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИX\›љ[™ИЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫЭ\њЩHH‹ЫЭ\њЩ\Л™љ[™
][HO€][KљYOOH›ЩKЫЭ\њЩRY
NВ€Y€
XЫЭ\њЩJH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђЫЭ\њЩH›Э›Э[™€JNВ€[њЭ\™SX\›љ[™Ф›Щљ[J‹њ›Щљ[JNВ€][њ›ЫY[ќHЩ][њ›ЫY[ќ
‹њ›Щљ[KЫЭ\њЩKљY
NВ€Y€
Y[њ›ЫY[ќ
HВ€[њ›ЫY[ќHВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЭ\њЩRY€ЫЭ\њЩKљY€Э]\О€љ[—Ь›ЩЬ™\ЬИ‹€›ЩЬ™\ЬО€ЌK€ШЫЬ™N€€XЭ]™S[Щ[R[™^€€ЫЫ\]Y[Щ[\О€ЧK€Э\ќY]€™]И]J
KќТTУФЭљ[™К
K€ЫЫ\]Y]€ќ[€NВ€‹њ›Щљ[K™[њ›ЫY[ќЛќ[њЪYќ
[њ›ЫY[ќ
NВ€H[ЩHВ€[њ›ЫY[ќњЭ]\ИH[њ›ЫY[ќњЭ]\ИOOHЫЫ\]Y€ИЫЫ\]Y€€љ[—Ь›ЩЬ™\ЬИЋВ€[њ›ЫY[ќњ›ЩЬ™\ЬИHX]›X^
[њ›ЫY[ќњ›ЩЬ™\ЬЛЌJNВ€[њ›ЫY[ќXЭ]™S[Щ[R[™^H[њ›ЫY[ќXЭ]™S[Щ[R[™^В€[њ›ЫY[ќЫЫ\]Y[Щ[\ИH[њ›ЫY[ќЫЫ\]Y[Щ[\ИЧNВ€B€‹њ›Щљ[KXЭ]™PЫЭ\њЩRYHЫЭ\њЩKљYВ€‹њ›Щљ[K›X\›љ[™ФЭ™XZИ
ПHNВ€‹њ›Щљ[K›X\›љ[™ТЭ\њИHќ[X™\Љ
‹њ›Щљ[K›X\›љ[™ТЭ\њИ
ИЌJKќСљ^Y
JJNВ€‹њ›Щљ[Kњ™XY[™\ЬИHX]›Z[ЉL‹њ›Щљ[Kњ™XY[™\ЬИ
ИX]ЩZ[
ЫЭ\њЩKњ™XY[™\ЬИИЉJNВ€™XШ[Ф™XY[™\ЬК‹њ›Щљ[JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›X\›љ[™ЛXЩ\ќYљXШ]\И‹€[Щ[N€“X\›љ[™И‹€XЭ[ЫЋ€ЫЭ\њЩKњЭ\ќY‹€]Z[€	ШЫЭ\њЩKќ]_H[њ›ЫY[ќ™XЫЬ™Y[€HX\›љ[™ИЫЬљЬЬXЩK€Y]Y]N€ИЫЭ\њЩRY€ЫЭ\њЩKљY[њ›ЫY[ќY€[њ›ЫY[ќљY›ЩЬ™\ЬО€[њ›ЫY[ќњ›ЩЬ™\ЬИB€JNВ€YXЭ]љ]J‹њ›Щљ[KЭ\ќY	ШЫЭ\њЩKќ]_NИX\›љ[™И›ЩЬ™\ЬИ\И	Щ[њ›ЫY[ќњ›ЩЬ™\ЬЯIK
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђЫЭ\њЩH›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫX\›љ[™ЛЫ\ЬЫЫ€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹›X\›љ[™ИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИX\›љ[™ИЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫЭ\њЩHH‹ЫЭ\њЩ\Л™љ[™
][HO€][KљYOOH
›ЩKЫЭ\њЩRY‹њ›Щљ[KXЭ]™PЫЭ\њЩRY
JNВ€Y€
XЫЭ\њЩJH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђЫЭ\њЩH›Э›Э[™€JNВ€[њЭ\™SX\›љ[™Ф›Щљ[J‹њ›Щљ[JNВ€][њ›ЫY[ќHЩ][њ›ЫY[ќ
‹њ›Щљ[KЫЭ\њЩKљY
NВ€Y€
Y[њ›ЫY[ќ
HВ€[њ›ЫY[ќHВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЭ\њЩRY€ЫЭ\њЩKљY€Э]\О€љ[—Ь›ЩЬ™\ЬИ‹€›ЩЬ™\ЬО€ЌK€ШЫЬ™N€€XЭ]™S[Щ[R[™^€€ЫЫ\]Y[Щ[\О€ЧK€Э\ќY]€™]И]J
KќТTУФЭљ[™К
K€ЫЫ\]Y]€ќ[€NВ€‹њ›Щљ[K™[њ›ЫY[ќЛќ[њЪYќ
[њ›ЫY[ќ
NВ€B€ЫЫњЭ[Щ[\ИHЫЭ\њЩK›[Щ[\ИЧNВ€ЫЫњЭЩ[XЭY[™^Hќ[X™\‹љ\Т[ќYЩ\Љ›ЩK›[Щ[R[™^
HИ›ЩK›[Щ[R[™^€[њ›ЫY[ќXЭ]™S[Щ[R[™^В€ЫЫњЭ[Щ[R[™^HX]›X^
X]›Z[ЉЩ[XЭY[™^X]›X^
[Щ[\Л›[™ЭHJJJNВ€[њ›ЫY[ќXЭ]™S[Щ[R[™^H[Щ[R[™^В€[њ›ЫY[ќЫЫ\]Y[Щ[\ИH[њ›ЫY[ќЫЫ\]Y[Щ[\ИЧNВ€Y€
Y[њ›ЫY[ќЫЫ\]Y[Щ[\Лљ[ЫY\К[Щ[R[™^
JH[њ›ЫY[ќЫЫ\]Y[Щ[\Лњ\Ъ
[Щ[R[™^
NВ€ЫЫњЭЫЫ\]YЫЭ[ќH[њ›ЫY[ќЫЫ\]Y[Щ[\Л›[™ЭВ€ЫЫњЭ[Щ[T›ЩЬ™\ЬИH[Щ[\Л›[™ЭИX]њ›Э[™

ЫЫ\]YЫЭ[ќИ[Щ[\Л›[™Э
H
€ЌJH€НNВ€[њ›ЫY[ќњ›ЩЬ™\ЬИHX]›X^
[њ›ЫY[ќњ›ЩЬ™\ЬИЌKX]›Z[ЉLЌH
И[Щ[T›ЩЬ™\ЬКJNВ€Y€
ЫЫ\]YЫЭ[ќЏH[Щ[\Л›[™Э	‰€[Щ[\Л›[™Э
H[њ›ЫY[ќњЭ]\ИHњ™XYWЩ›Ь—Ь]Z^€ЋВ€‹њ›Щљ[KXЭ]™PЫЭ\њЩRYHЫЭ\њЩKљYВ€‹њ›Щљ[K›X\›љ[™ФЭ™XZИ
ПHNВ€‹њ›Щљ[K›X\›љ[™ТЭ\њИHќ[X™\Љ
‹њ›Щљ[K›X\›љ[™ТЭ\њИ
ИЊНJKќСљ^Y
JJNВ€‹њ›Щљ[Kњ™XY[™\ЬИHX]›Z[ЉL‹њ›Щљ[Kњ™XY[™\ЬИ
ИЉNВ€™XШ[Ф™XY[™\ЬК‹њ›Щљ[JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›X\›љ[™ЛXЩ\ќYљXШ]\И‹€[Щ[N€“X\›љ[™И‹€XЭ[ЫЋ€›\ЬЫЫ‹ЫЫ\]Y‹€]Z[€	Ы[Щ[\ЦЫ[Щ[R[™^HЫЭ\њЩKќ]_HЫЫ\]Y[€	ШЫЭ\њЩKќ]_K€Y]Y]N€ИЫЭ\њЩRY€ЫЭ\њЩKљY[њ›ЫY[ќY€[њ›ЫY[ќљY[Щ[R[™^›ЩЬ™\ЬО€[њ›ЫY[ќњ›ЩЬ™\ЬИB€JNВ€YXЭ]љ]J‹њ›Щљ[KЫЫ\]Y\ЬЫЫ€‰Ы[Щ[\ЦЫ[Щ[R[™^HЫЭ\њЩKќ]_H€[€	ШЫЭ\њЩKќ]_NИ›ЩЬ™\ЬИ\И	Щ[њ›ЫY[ќњ›ЩЬ™\ЬЯIK
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK“\ЬЫЫ€›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫX\›љ[™ЛЬ]Z^€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹›X\›љ[™ИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИX\›љ[™ИЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™SX\›љ[™Ф›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭЫЭ\њЩHH‹ЫЭ\њЩ\Л™љ[™
][HO€][KљYOOH‹њ›Щљ[KXЭ]™PЫЭ\њЩRY
H‹ЫЭ\њЩ\ЦМNВ€][њ›ЫY[ќHЩ][њ›ЫY[ќ
‹њ›Щљ[KЫЭ\њЩKљY
NВ€Y€
Y[њ›ЫY[ќ
HВ€[њ›ЫY[ќHВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЭ\њЩRY€ЫЭ\њЩKљY€Э]\О€љ[—Ь›ЩЬ™\ЬИ‹€›ЩЬ™\ЬО€ЌK€ШЫЬ™N€€XЭ]™S[Щ[R[™^€€ЫЫ\]Y[Щ[\О€ЧK€Э\ќY]€™]И]J
KќТTУФЭљ[™К
K€ЫЫ\]Y]€ќ[€NВ€‹њ›Щљ[K™[њ›ЫY[ќЛќ[њЪYќ
[њ›ЫY[ќ
NВ€B€[њ›ЫY[ќњ›ЩЬ™\ЬИHX]›Z[ЉL[њ›ЫY[ќњ›ЩЬ™\ЬИ
ИНJNВ€[њ›ЫY[ќњШЫЬ™HHX]›Z[ЉL[њ›ЫY[ќњШЫЬ™H
ИЌJNВ€‹њ›Щљ[Kњ]Z^”ШЫЬ™HHX]›X^
‹њ›Щљ[Kњ]Z^”ШЫЬ™K[њ›ЫY[ќњШЫЬ™JNВ€‹њ›Щљ[K›X\›љ[™ТЭ\њИHќ[X™\Љ
‹њ›Щљ[K›X\›љ[™ТЭ\њИ
ИЌНJKќСљ^Y
JJNВ€‹њ›Щљ[Kњ™XY[™\ЬИHX]›Z[ЉL‹њ›Щљ[Kњ™XY[™\ЬИ
ИЉNВ€™XШ[Ф™XY[™\ЬК‹њ›Щљ[JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›X\›љ[™ЛXЩ\ќYљXШ]\И‹€[Щ[N€“X\›љ[™И‹€XЭ[ЫЋ€њ]Z^‹ЫЫ\]Y‹€]Z[€	ШЫЭ\њЩKќ]_H]Z^€™XЫЬ™YЪ]ШЫЬ™H	Щ[њ›ЫY[ќњШЫЬ™_K€Y]Y]N€ИЫЭ\њЩRY€ЫЭ\њЩKљY[њ›ЫY[ќY€[њ›ЫY[ќљYШЫЬ™N€[њ›ЫY[ќњШЫЬ™K›ЩЬ™\ЬО€[њ›ЫY[ќњ›ЩЬ™\ЬИB€JNВ€YXЭ]љ]J‹њ›Щљ[K	ШЫЭ\њЩKќ]_H]Z^€Y[ЩYИ	Щ[њ›ЫY[ќњШЫЬ™_NИ›ЩЬ™\ЬИ\И	Щ[њ›ЫY[ќњ›ЩЬ™\ЬЯIK
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK”]Z^€›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫX\›љ[™ЛШЩ\ќYљXШ]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹›X\›љ[™ИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬ™Y[ќX[ЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™SX\›љ[™Ф›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭЫЭ\њЩHH‹ЫЭ\њЩ\Л™љ[™
][HO€][KљYOOH‹њ›Щљ[KXЭ]™PЫЭ\њЩRY
H‹ЫЭ\њЩ\ЦМNВ€ЫЫњЭ[њ›ЫY[ќHЩ][њ›ЫY[ќ
‹њ›Щљ[KЫЭ\њЩKљY
NВ€Y€
Y[њ›ЫY[ќ[њ›ЫY[ќњШЫЬ™HЌJH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€ђЫЫ\]HH]Z^€љ\њЭ€JNВ€Y€
Y‹њ›Щљ[KЫЫ\]YЫЭ\њЩ\Лљ[ЫY\КЫЭ\њЩKљY
JH‹њ›Щљ[KЫЫ\]YЫЭ\њЩ\Лњ\Ъ
ЫЭ\њЩKљY
NВ€[њ›ЫY[ќњЭ]\ИHЫЫ\]YЋВ€[њ›ЫY[ќњ›ЩЬ™\ЬИHLВ€[њ›ЫY[ќЫЫ\]Y]H™]И]J
KќТTУФЭљ[™К
NВ€]Щ\ќYљXШ]HH‹њ›Щљ[KЩ\ќYљXШ]\Л™љ[™
][HO€][KЫЭ\њЩRYOOHЫЭ\њЩKљY
NВ€Y€
XЩ\ќYљXШ]JHВ€Щ\ќYљXШ]HHВ€Y€Ьћ\Лњ[™ЫUURQ

K€Щ\ќYљXШ]Sќ[X™\Ћ€S‹PСT•IФЭљ[™К‹њ›Щљ[KЩ\ќYљXШ]\Л›[™Э
ИJKњYЭ\ќ
ЊЉ_X€ЫЭ\њЩRY€ЫЭ\њЩKљY€]N€ЫЭ\њЩKќ]K€\ЬЭYY]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[KЩ\ќYљXШ]\Лњ\Ъ
Щ\ќYљXШ]JNВ€B€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›X\›љ[™ЛXЩ\ќYљXШ]\И‹€[Щ[N€“X\›љ[™И‹€XЭ[ЫЋ€Щ\ќYљXШ]Kљ\ЬЭYY‹€]Z[€	ШЩ\ќYљXШ]KЩ\ќYљXШ]Sќ[X™\џH\ЬЭYY›Ь€	ШЫЭ\њЩKќ]_K€Y]Y]N€ИЫЭ\њЩRY€ЫЭ\њЩKљYЩ\ќYљXШ]Sќ[X™\Ћ€Щ\ќYљXШ]KЩ\ќYљXШ]Sќ[X™\€B€JNВ€‹њ›Щљ[Kњ™XY[™\ЬИHX]›Z[ЉL‹њ›Щљ[Kњ™XY[™\ЬИ
ИL
NВ€‹њ›Щљ[K›X\›љ[™ФЭ™XZИ
ПHNВ€™XШ[Ф™XY[™\ЬК‹њ›Щљ[JNВ€YXЭ]љ]J‹њ›Щљ[KЩ\ќYљXШ]H\ЬЭYY›Ь€	ШЫЭ\њЩKќ]_K
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђЩ\ќYљXШ]H›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫX\›љ[™ЛШXШЩ\ЬЪXљ[]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹›X\›љ[™ИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИX\›љ[™ИЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™SX\›љ[™Ф›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭЫЭ\њЩHH‹ЫЭ\њЩ\Л™љ[™
][HO€][KљYOOH
›ЩKЫЭ\њЩRY‹њ›Щљ[KXЭ]™PЫЭ\њЩRY
JH‹ЫЭ\њЩ\ЦМNВ€ЫЫњЭ[њ›ЫY[ќHЫЭ\њЩHИЩ][њ›ЫY[ќ
‹њ›Щљ[KЫЭ\њЩKљY
H€ќ[В€ЫЫњЭ[ЩS[Y\ИHВ€Ш\[ЫЋ€ђШ\[Ы™Y\ЬЫЫ€XЪЩ]‹€љ\ЭX[€ђ]Y[ИЭZYH[™ШЬ™Y[‹\™XY\€Э][™H‹€›ЭЛX[™ЪYЋ€“Щ™›[™HЭЛX[™ЪYXЪЩ]‚€NВ€ЫЫњЭ[ЩHH[ЩS[Y\ЦШ›ЩK›[ЩWHИ›ЩK›[ЩH€Ш\[Ы€ЋВ€ЫЫњЭXШЫЫ[[Щ][Ы€HВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЭ\њЩRY€ЫЭ\њЩOЛљYќ[€ЫЭ\њЩU]N€ЫЭ\њЩOЛќ]HђXШЩ\ЬЪX›HX\›љ[™И]‹€[ЩK€]N€[ЩS[Y\ЦЫ[ЩWK€[™ЭXYЩN€‹њ›Щљ[KXШЩ\ЬЪXљ[]T›Щљ[K›[™ЭXYЩH\Щ\‹›[™ЭXYЩHњЭИ‹€Э\ЬќО€[ЩHOOHШ\[Ы€‚€ИИ›]™HШ\[ЫњИ‹ќ[њШЬљ\‹њЪYЫ‹[[™ЭXYЩH[™Щ™€›Ы\—B€€[ЩHOOHќљ\ЭX[‚€ИИ]Y[И\њ][Ы€‹њШЬ™Y[‹\™XY\€Э][™H‹›\™ЩK\љ[ќЭ[[X\ћH—B€€И”УTИЭ[[X\ћH‹™ЭЫ›ШYXЪЩ]‹ЫЫ[][љ]HZYHЪXЪЫ\Э—K€Э]\О€њ™XYH‹€›ЩЬ™\ЬР]™\]Y\Э€[њ›ЫY[ќЛњ›ЩЬ™\ЬИ€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K›X\›љ[™РXШЫЫ[[Щ][ЫњЛќ[њЪYќ
XШЫЫ[[Щ][ЫЉNВ€‹њ›Щљ[K›X\›љ[™РXШЫЫ[[Щ][ЫњИH‹њ›Щљ[K›X\›љ[™РXШЫЫ[[Щ][ЫњЛњЫXЩJЊ
NВ€‹њ›Щљ[K›X\›љ[™ТЭ\њИHќ[X™\Љ
ќ[X™\Љ‹њ›Щљ[K›X\›љ[™ТЭ\њИ
H
ИЊЌJKќСљ^Y
ЉJNВ€‹њ›Щљ[K›X\›љ[™ФЭ™XZИ
ПHNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›X\›љ[™ЛXЩ\ќYљXШ]\И‹€[Щ[N€“X\›љ[™И‹€XЭ[ЫЋ€›X\›љ[™ЛXШЩ\ЬЪXљ[]WЬ™XYH‹€]Z[€	ШXШЫЫ[[Щ][Ы‹ќ]_H™\\™Y›Ь€	ШXШЫЫ[[Щ][Ы‹ЫЭ\њЩU]_K€Y]Y]N€ИXШЫЫ[[Щ][Ы’Y€XШЫЫ[[Щ][Ы‹љYЫЭ\њЩRY€XШЫЫ[[Щ][Ы‹ЫЭ\њЩRY[ЩHB€JNВ€‹њ›Щљ[KZPXЭ]љ]HH	ШXШЫЫ[[Щ][Ы‹ќ]_H™\\™Y›Ь€X\љ[™И[™љ\ЭX[XШЩ\ЬЪXљ[]KВ€YXЭ]љ]J‹њ›Щљ[K‹њ›Щљ[KZPXЭ]љ]JNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK“X\›љ[™ИXШЩ\ЬЪXљ[]H›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫX\›љ[™ЛЭЫЫY[‹XЪ[™[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹›X\›љ[™ИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЫY[€[™Ъ[™[€X\›љ[™ИЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[€Hќ[•ЫЫY[ђЪ[™[“X\›љ[™ХЫЬљЩ›ЭК‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KќЫЫY[ђЪ[™[“X\›љ[™Ф™\Э[H[ЋВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫX\›љ[™ЛШY[ЩY€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹›X\›љ[™ИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИY[ЩYX\›љ[™ИЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™SX\›љ[™Ф›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭЫЭ\њЩHH‹ЫЭ\њЩ\Л™љ[™
][HO€][KљYOOH
›ЩKЫЭ\њЩRY‹њ›Щљ[KXЭ]™PЫЭ\њЩRY
JH‹ЫЭ\њЩ\ЦМNВ€Y€
XЫЭ\њЩJH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђЫЭ\њЩH›Э›Э[™€JNВ€][њ›ЫY[ќHЩ][њ›ЫY[ќ
‹њ›Щљ[KЫЭ\њЩKљY
NВ€Y€
Y[њ›ЫY[ќ
HВ€[њ›ЫY[ќHВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЭ\њЩRY€ЫЭ\њЩKљY€Э]\О€љ[—Ь›ЩЬ™\ЬИ‹€›ЩЬ™\ЬО€ЌK€ШЫЬ™N€€XЭ]™S[Щ[R[™^€€ЫЫ\]Y[Щ[\О€ЧK€Э\ќY]€™]И]J
KќТTУФЭљ[™К
K€ЫЫ\]Y]€ќ[€NВ€‹њ›Щљ[K™[њ›ЫY[ќЛќ[њЪYќ
[њ›ЫY[ќ
NВ€B€ЫЫњЭ\HH›ЩKќ\H\ЬЪYЫ›Y[ќЋВ€ЫЫњЭ›ЭИH™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭXZЩ\њИHВ€\ЬЪYЫ›Y[ќ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€\ЬЪYЫ›Y[ќќ[X™\Ћ€S‹PTСЛIФЭљ[™К‹њ›Щљ[K›X\›љ[™Р\ЬЪYЫ›Y[ќЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€ЫЭ\њЩRY€ЫЭ\њЩKљY€ЫЭ\њЩU]N€ЫЭ\њЩKќ]K€]N€›ЩKќ]H	ШЫЭ\њЩKќ]_HљY[\ЬЪYЫ›Y[ќ€[њЭќXЭ[ЫњО€›ЩKљ[њЭќXЭ[ЫњИђЫЫ\]HH\ЬЫЫ€\ЪЛ\ШYљY[›Э\Л[™™\\™HHЪЬќЫЬљЩ›ЬЩK\™XYH™Y›XЭ[Ы‹€‹€YUЪ[™ЭО€›ЩK™YUЪ[™ЭИ›™^X\›љ[™ИЩ\ЬЪ[Ы€‹€Э]\О€\ЬЪYЫ™Y‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[K›X\›љ[™Р\ЬЪYЫ›Y[ќЛќ[њЪYќ
™XЫЬ™
NВ€™]\›€И›X\›љ[™ЛXЫЭ\њЩ\И‹›X\›љ[™Л\ЬЪYЫ›Y[ќШЬ™X]Y‹	Ь™XЫЬ™\ЬЪYЫ›Y[ќќ[X™\џH\ЬЪYЫ›Y[ќЬ™X]Y›Ь€	ШЫЭ\њЩKќ]_K™XЫЬ™NВ€K€њ]Z^‹X][\Ћ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€][\ќ[X™\Ћ€S‹TURV‹IФЭљ[™К‹њ›Щљ[Kњ]Z^ђ][\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€ЫЭ\њЩRY€ЫЭ\њЩKљY€ЫЭ\њЩU]N€ЫЭ\њЩKќ]K€ШЫЬ™N€ќ[X™\Љ›ЩKњШЫЬ™HX]›X^
М‹X]›Z[ЉM‹
[њ›ЫY[ќњШЫЬ™HЊ
H
ИN
JJK€Э]\О€њЭX›Z]Y‹€™YYXЪО€”™]љY]ИZ\ЬЩYЫЫЩ\Л[€›ШЩYYЭШ\™Щ\ќYљXШ]H™XY[™\ЬЛ€‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kњ]Z^ђ][\Лќ[њЪYќ
™XЫЬ™
NВ€[њ›ЫY[ќњШЫЬ™HHX]›X^
[њ›ЫY[ќњШЫЬ™H™XЫЬ™њШЫЬ™JNВ€[њ›ЫY[ќњ›ЩЬ™\ЬИHX]›X^
[њ›ЫY[ќњ›ЩЬ™\ЬИЌKJNВ€‹њ›Щљ[Kњ]Z^”ШЫЬ™HHX]›X^
‹њ›Щљ[Kњ]Z^”ШЫЬ™H™XЫЬ™њШЫЬ™JNВ€™]\›€И›X\›љ[™ЛXЩ\ќYљXШ]\И‹›X\›љ[™Лњ]Z^—Ш][\Ь™XЫЬ™Y‹	Ь™XЫЬ™][\ќ[X™\џH]Z^€][\™XЫЬ™Y]	Ь™XЫЬ™њШЫЬ™_IK™XЫЬ™NВ€K€›ЭN€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€›ЭSќ[X™\Ћ€S‹RS”ХIФЭљ[™К‹њ›Щљ[Kљ[њЭќXЭЬ“›Э\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€ЫЭ\њЩRY€ЫЭ\њЩKљY€ЫЭ\њЩU]N€ЫЭ\њЩKќ]K€]]ЬЋ€\Щ\‹›[YK€›ЭN€›ЩK››ЭH’[њЭќXЭЬ€™]љY]ЩYX\›™\€›ЩЬ™\ЬЛXШЩ\ЬЪXљ[]H™YYЛ[™ЫЬљЩ›ЬЩH™XY[™\ЬИ]€‹€Э]\О€њ™XЫЬ™Y‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kљ[њЭќXЭЬ“›Э\Лќ[њЪYќ
™XЫЬ™
NВ€™]\›€И›X\›љ[™ЛXЫЭ\њЩ\И‹›X\›љ[™Лљ[њЭќXЭЬ—Ы›ЭWЬ™XЫЬ™Y‹	Ь™XЫЬ™››ЭSќ[X™\џH[њЭќXЭЬ€›ЭH™XЫЬ™Y›Ь€	ШЫЭ\њЩKќ]_K™XЫЬ™NВ€K€™\Ьќ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€™\Ьќќ[X™\Ћ€S‹S”IФЭљ[™К‹њ›Щљ[K›X\›љ[™Ф›ЩЬ™\ЬФ™\ЬќЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€ЫЭ\њЩRY€ЫЭ\њЩKљY€ЫЭ\њЩU]N€ЫЭ\њЩKќ]K€›ЩЬ™\ЬО€[њ›ЫY[ќњ›ЩЬ™\ЬИ€™XY[™\ЬО€‹њ›Щљ[Kњ™XY[™\ЬЛ€X\›љ[™ТЭ\њО€‹њ›Щљ[K›X\›љ[™ТЭ\њИ€ЫЫ\]Y[Щ[\О€
[њ›ЫY[ќЫЫ\]Y[Щ[\ИЧJK›[™Э€™XЫЫ[Y[™][ЫЋ€ђЫЫќ[ќYHXЭ]™HЫЭ\њЩKЫЫ\]H\ЬЩ\ЬЫY[ќ[™ЫЫ›™XЭЩ\ќYљXШ]HИЫЬљЩ›ЬЩH›ЫHШ]K€‹€Э]\О€™Щ[™\]Y‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[K›X\›љ[™Ф›ЩЬ™\ЬФ™\ЬќЛќ[њЪYќ
™XЫЬ™
NВ€™]\›€И›X\›љ[™ЛXЫЭ\њЩ\И‹›X\›љ[™Лњ›ЩЬ™\ЬЧЬ™\ЬќЩЩ[™\]Y‹	Ь™XЫЬ™њ™\Ьќќ[X™\џH›ЩЬ™\ЬИ™\ЬќЩ[™\]Y›Ь€	ШЫЭ\њЩKќ]_K™XЫЬ™NВ€K€[њШЬљ\€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€[њШЬљ\ќ[X™\Ћ€S‹U“‹IФЭљ[™К‹њ›Щљ[K›X\›љ[™Х[њШЬљ\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€X\›™\“[YN€\Щ\‹›[YK€XЭ]™PЫЭ\њЩN€ЫЭ\њЩKќ]K€ЫЫ\]YЫЭ\њЩ\О€
‹њ›Щљ[KЫЫ\]YЫЭ\њЩ\ИЧJK›X\
ЫЭ\њЩRYO€‹ЫЭ\њЩ\Л™љ[™
][HO€][KљYOOHЫЭ\њЩRY
OЛќ]HЫЭ\њЩRY
K€Щ\ќYљXШ]\О€
‹њ›Щљ[KЩ\ќYљXШ]\ИЧJK›X\
Щ\ќO€Щ\ќЩ\ќYљXШ]Sќ[X™\€Щ\ќљY
K€™XY[™\ЬО€‹њ›Щљ[Kњ™XY[™\ЬЛ€Э]\О€љ\ЬЭYY‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[K›X\›љ[™Х[њШЬљ\Лќ[њЪYќ
™XЫЬ™
NВ€™]\›€И›X\›љ[™ЛXЩ\ќYљXШ]\И‹›X\›љ[™Лќ[њШЬљ\Ъ\ЬЭYY‹	Ь™XЫЬ™ќ[њШЬљ\ќ[X™\џH[њШЬљ\\ЬЭYY›Ь€	Э\Щ\‹›[Y_K™XЫЬ™NВ€K€ЫЪЬќ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЪЬќќ[X™\Ћ€S‹PУТIФЭљ[™К‹њ›Щљ[K›X\›љ[™РЫЪЬќЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€ЫЭ\њЩRY€ЫЭ\њЩKљY€ЫЭ\њЩU]N€ЫЭ\њЩKќ]K€ЫЪЬќ[YN€›ЩKЫЪЬќ[YH	ШЫЭ\њЩKќXЪЯHќ\[X\›™\€ЫЪЬќ€X\›™\ђЫЭ[ќ€ќ[X™\Љ›ЩK›X\›™\ђЫЭ[ќЌ
K€XЪ[]]ЬЋ€›ЩK™XЪ[]]Ь€ђЫЫ[][љ]HX\›љ[™ИXЪ[]]Ь€‹€Э]\О€XЭ]™H‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[K›X\›љ[™РЫЪЬќЛќ[њЪYќ
™XЫЬ™
NВ€™]\›€И›X\›љ[™ЛXЫЭ\њЩ\И‹›X\›љ[™ЛЫЪЬќШЬ™X]Y‹	Ь™XЫЬ™ЫЪЬќќ[X™\џHЫЪЬќЬ™X]Y›Ь€	ШЫЭ\њЩKќ]_K™XЫЬ™NВ€B€NВ€ЫЫњЭXZЩ\€HXZЩ\њЦЭ\WNВ€Y€
[XZЩ\ЉH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€•[њЭ\ЬќYY[ЩYX\›љ[™ИXЭ[Ы€€JNВ€ЫЫњЭЬ›ЭљY\’YXЭ[Ы‹]Z[™XЫЬ™HHXZЩ\Љ
NВ€И›X\›љ[™Р\ЬЪYЫ›Y[ќИ‹њ]Z^ђ][\И‹љ[њЭќXЭЬ“›Э\И‹›X\›љ[™Ф›ЩЬ™\ЬФ™\ЬќИ‹›X\›љ[™Х[њШЬљ\И‹›X\›љ[™РЫЪЬќИ—K™›Ь‘XXЪ
Щ^HO€В€‹њ›Щљ[VЪЩ^WHH‹њ›Щљ[VЪЩ^WKњЫXЩJЊ
NВ€JNВ€‹њ›Щљ[KXЭ]™PЫЭ\њЩRYHЫЭ\њЩKљYВ€‹њ›Щљ[K›X\›љ[™ФЭ™XZИ
ПHNВ€‹њ›Щљ[K›X\›љ[™ТЭ\њИHќ[X™\Љ
ќ[X™\Љ‹њ›Щљ[K›X\›љ[™ТЭ\њИ
H
ИЊЌJKќСљ^Y
ЉJNВ€™XШ[Ф™XY[™\ЬК‹њ›Щљ[JNВ€ЩТ[ќYЬ][ЫЉ‹И›ЭљY\’Y[Щ[N€“X\›љ[™И‹XЭ[Ы‹]Z[Y]Y]N€И™XЫЬ™Y€™XЫЬ™љYЫЭ\њЩRY€ЫЭ\њЩKљY\HHJNВ€YXЭ]љ]J‹њ›Щљ[K]Z[
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђY[ЩYX\›љ[™И›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›X\›љ[™РY[ЩY™\Э[HИ\K™XЫЬ™NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭЫЬљЩ›ЬЩKШXЭ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќЫЬљЩ›ЬЩHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЬљЩ›ЬЩHЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™UЫЬљЩ›ЬЩT›Щљ[J‹њ›Щљ[JNВ€Y€
›ЩKќ\HOOHќZ[\›Щљ[HЉHВ€‹њ›Щљ[KШ[™Y]TЭYЩHH‹њ›Щљ[Kњ™XY[™\ЬИЏHMHИ”ЪЬќ\Э€€”›Щљ[H™XYHЋВ€‹њ›Щљ[Kњ™XY[™\ЬИHX]›Z[ЉL‹њ›Щљ[Kњ™XY[™\ЬИ
ИL
NВ€Y€
Y‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лљ[ЫY\К”›Щљ[H™\љYљYYЉJH‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лњ\Ъ
”›Щљ[H™\љYљYYЉNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќЫЬљЩ›ЬЩKZљ\И‹€[Щ[N€•ЫЬљЩ›ЬЩH‹€XЭ[ЫЋ€њ›Щљ[Kќ™\љYљYY‹€]Z[€ђШ[™Y]H›Щљ[H™\љYљXШ][Ы€Ю[ЩYИШ[™›Ю’TЛ€‹€Y]Y]N€И™XY[™\ЬО€‹њ›Щљ[Kњ™XY[™\ЬЛШ[™Y]TЭYЩN€‹њ›Щљ[KШ[™Y]TЭYЩHB€JNВ€YXЭ]љ]J‹њ›Щљ[K•ЫЬљЩ›ЬЩH›Щљ[H™\љYљYYЪ]X\›љ[™И[™Щ\ќYљXШ]H™]љY]Л€ЉNВ€H[ЩHY€
›ЩKќ\HOOHљ[ќ\ќљY]ИЉHВ€Y€
‹њ›Щљ[Kњ™XY[™\ЬИL
H™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”™XXЪL	H™XY[™\ЬИљ\њЭ€JNВ€‹њ›Щљ[Kљ[ќ\ќљY]ЬИ
ПHNВ€‹њ›Щљ[KШ[™Y]TЭYЩHH’[ќ\ќљY]ИЋВ€‹њ›Щљ[K›\Э[ќ\ќљY]Р]H™]И]J]K››ЭК
H
ИЌ
€Њ
€Њ
€L
KќТTУФЭљ[™К
NВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќЫЬљЩ›ЬЩKXШ[[™\€‹€[Щ[N€•ЫЬљЩ›ЬЩH‹€XЭ[ЫЋ€љ[ќ\ќљY]ЛњШЪY[Y‹€]Z[€’[ќ\ќљY]И]™[ќ™XЫЬ™Y[€Ш[™›ЮШ[[™\‹€‹€Y]Y]N€ИЭ\ќР]€‹њ›Щљ[K›\Э[ќ\ќљY]Р]B€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќЫЬљЩ›ЬЩK[›ЭYљXШ][ЫњИ‹€[Щ[N€•ЫЬљЩ›ЬЩH‹€XЭ[ЫЋ€››ЭYљXШ][Ы‹њЩ[ќ‹€]Z[€’[ќ\ќљY]И›ЭYљXШ][Ы€™XЫЬ™Y€‹€Y]Y]N€ИЪ[›™[€њШ[™›Ю€B€JNВ€YXЭ]љ]J‹њ›Щљ[K’[ќ\ќљY]ИШЪY[Y›Ь€Ы[Ьњ›ЭИЪ]ЫЬљЩ›ЬЩHЬ\][ЫњЛ€ЉNВ€H[ЩHY€
›ЩKќ\HOOH›Y[ќЬ€ЉHВ€‹њ›Щљ[K›Y[ќЬ€Hђ\ЬЪYЫ™YЋВ€‹њ›Щљ[Kњ™XY[™\ЬИHX]›Z[ЉL‹њ›Щљ[Kњ™XY[™\ЬИ
ИJNВ€‹њ›Щљ[K›Y[ќЬ“›Э\Лќ[њЪYќ
ИY€Ьћ\Лњ[™ЫUURQ

K›ЭN€“Y[ќЬ€\ЬЪYЫ™YИ™]љY]И™XY[™\ЬИШ\И[™›ЫHљ]€‹Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
HJNВ€Y€
Y‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лљ[ЫY\К“Y[ќЬ€X]ЪYЉJH‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лњ\Ъ
“Y[ќЬ€X]ЪYЉNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќЫЬљЩ›ЬЩKZљ\И‹€[Щ[N€•ЫЬљЩ›ЬЩH‹€XЭ[ЫЋ€›Y[ќЬ‹\ЬЪYЫ™Y‹€]Z[€“Y[ќЬ€\ЬЪYЫ›Y[ќЮ[ЩYИШ[™›Ю’TЛ€‹€Y]Y]N€ИY[ќЬЋ€‹њ›Щљ[K›Y[ќЬ€B€JNВ€YXЭ]љ]J‹њ›Щљ[K“Y[ќЬ€\ЬЪYЫ™Y›Ь€›ЫH™XY[™\ЬИЫШXЪ[™Л€ЉNВ€H[ЩHY€
›ЩKќ\HOOHњЪYќЉHВ€Y€
‹њ›Щљ[Kљ[ќ\ќљY]ЬИJH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€”ШЪY[H[€[ќ\ќљY]И™Y›Ь™HЭ\ќ[™ИHЪYќ€JNВ€ЫЫњЭЪYќHВ€Y€Ьћ\Лњ[™ЫUURQ

K€›ЫN€‹њ›Щљ[K\XШ][ЫњЦМOЛњ›ЫU]H‘љY[Ь\][ЫњИYЩ[ќ‹€Э\ќР]€™]И]J]K››ЭК
H
ИН€
€Њ
€Њ
€L
KќТTУФЭљ[™К
K€Э]\О€њШЪY[Y‹€\Э[X]YX\›љ[™ЬО€Ќ€NВ€‹њ›Щљ[KњЪYќШЪY[Kќ[њЪYќ
ЪYќ
NВ€‹њ›Щљ[K›™^ЪYќH	ЬЪYќњ›Ы_HH	Ы™]И]JЪYќњЭ\ќР]
KќУШШ[TЭљ[™К™[‹UTИ‹ИЩYZЩ^N€њЪЬќ‹Э\Ћ€›ќ[Y\љXИ‹Z[ќ]N€Њ‹YYЪ]€J_XВ€‹њ›Щљ[Kњ™XY[™\ЬИHX]›Z[ЉL‹њ›Щљ[Kњ™XY[™\ЬИ
ИЉNВ€‹њ›Щљ[K™X\›љ[™ЬИ
ПHЪYќ™\Э[X]YX\›љ[™ЬОВ€Y€
Y‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лљ[ЫY\К”ЪYќШЪY[YЉJH‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лњ\Ъ
”ЪYќШЪY[YЉNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќЫЬљЩ›ЬЩKXШ[[™\€‹€[Щ[N€•ЫЬљЩ›ЬЩH‹€XЭ[ЫЋ€њЪYќњШЪY[Y‹€]Z[€	ЬЪYќњ›Ы_HЪYќ™XЫЬ™Y[€Ш[™›ЮШ[[™\‹€Y]Y]N€ИЪYќY€ЪYќљYЭ\ќР]€ЪYќњЭ\ќР]B€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќЫЬљЩ›ЬЩK\ЪYќИ‹€[Щ[N€•ЫЬљЩ›ЬЩH‹€XЭ[ЫЋ€њЪYќ\ЬЪYЫ›Y[ќШЬ™X]Y‹€]Z[€	ЬЪYќњ›Ы_HЪYќ\ЬЪYЫ›Y[ќЩ[ќИЫЬљЩ›ЬЩHШЪY[\‹€Y]Y]N€В€ЪYќY€ЪYќљY€Э\ќР]€ЪYќњЭ\ќР]€[™Р]€ЪYќ™[™Р]€\Э[X]YX\›љ[™ЬО€ЪYќ™\Э[X]YX\›љ[™ЬЛ€Ш[™Y]TЭYЩN€‹њ›Щљ[KШ[™Y]TЭYЩB€B€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќЫЬљЩ›ЬЩK[›ЭYљXШ][ЫњИ‹€[Щ[N€•ЫЬљЩ›ЬЩH‹€XЭ[ЫЋ€њЪYќ››ЭYљXШ][Ы—ЬЩ[ќ‹€]Z[€	ЬЪYќњ›Ы_HЪYќ›ЭYљXШ][Ы€Щ[ќИШ[™Y]HЪ[›™[€Y]Y]N€ИЪYќY€ЪYќљYЪ[›™[€Ш[™Y]K]ЫЬљЩ›ЭИ€B€JNВ€YXЭ]љ]J‹њ›Щљ[K	ЬЪYќњ›Ы_HЪYќШЪY[YИ\Э[X]YX\›љ[™ЬИ	ЬЪYќ™\Э[X]YX\›љ[™ЬЯK
NВ€B€™XШ[Ф™XY[™\ЬК‹њ›Щљ[JNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK•ЫЬљЩ›ЬЩH›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭЫЬљЩ›ЬЩKШ\H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќЫЬљЩ›ЬЩHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЬљЩ›ЬЩH\XШ][ЫњИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ›ЫHH‹њ›Ы\Л™љ[™
][HO€][KљYOOH›ЩKњ›ЫRY
NВ€Y€
\›ЫJH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€”›ЫH›Э›Э[™€JNВ€[њЭ\™UЫЬљЩ›ЬЩT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ™XY[™\ЬИH›ЫT™XY[™\ЬК‹њ›Щљ[K›ЫJNВ€Y€
\™XY[™\ЬЛ™[YЪX›JHВ€ЫЫњЭЩ\ќYљXШ]U^H™XY[™\ЬЛ›Z\ЬЪ[™РЩ\ќYљXШ]\Л›[™ЭИ[™Щ\ќYљXШ]JКN€	Ь™XY[™\ЬЛ›Z\ЬЪ[™РЩ\ќYљXШ]\Лљ›Ъ[Љ‹Љ_X€€ЋВ€™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€	Ь›ЫKќ]_H™YYИ	Ь™XY[™\ЬЛ›Z\ЬЪ[™Ф™XY[™\ЬЯIH[Ь™H™XY[™\ЬЙШЩ\ќYљXШ]U^XJNВ€B€]\XШ][Ы€H‹њ›Щљ[K\XШ][ЫњЛ™љ[™
][HO€][Kњ›ЫRYOOH›ЫKљY
NВ€Y€
X\XШ][ЫЉHВ€\XШ][Ы€HВ€Y€Ьћ\Лњ[™ЫUURQ

K€›ЫRY€›ЫKљY€›ЫU]N€›ЫKќ]K€Э]\О€њЭX›Z]Y‹€ЭX›Z]Y]€™]И]J
KќТTУФЭљ[™К
K€]N€›ЫKњ]B€NВ€‹њ›Щљ[K\XШ][ЫњЛќ[њЪYќ
\XШ][ЫЉNВ€H[ЩHВ€\XШ][Ы‹њЭ]\ИH\XШ][Ы‹њЭ]\ИњЭX›Z]YЋВ€\XШ][Ы‹›\Э™]љY]ЩY]H™]И]J
KќТTУФЭљ[™К
NВ€B€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќЫЬљЩ›ЬЩKZљ\И‹€[Щ[N€•ЫЬљЩ›ЬЩH‹€XЭ[ЫЋ€\XШ][Ы‹њЭX›Z]Y‹€]Z[€	Ь›ЫKќ]_H\XШ][Ы€Ю[ЩYИШ[™›Ю’TЛ€Y]Y]N€И\XШ][Ы’Y€\XШ][Ы‹љY›ЫRY€›ЫKљYB€JNВ€‹њ›Щљ[KњXЩ[Y[ќИH‹њ›Щљ[K\XШ][ЫњЛ›[™ЭВ€‹њ›Щљ[Kљ[ќ\ќљY]ЬИHX]›X^
‹њ›Щљ[Kљ[ќ\ќљY]ЬЛJNВ€‹њ›Щљ[KШ[™Y]TЭYЩHH‹њ›Щљ[KњXЩ[Y[ќИ€HИ”XЩ[Y[ќЫЫ€€’[ќ\ќљY]ИЋВ€‹њ›Щљ[K™X\›љ[™ЬИHX]›X^
‹њ›Щљ[K™X\›љ[™ЬЛN
И›ЫKњ]JNВ€YXЭ]љ]J‹њ›Щљ[K\YYИ	Ь›ЫKќ]_K
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђ\XШ][Ы€›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭЫЬљЩ›ЬЩKШY[ЩY€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќЫЬљЩ›ЬЩHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЬљЩ›ЬЩHЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™UЫЬљЩ›ЬЩT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ›ЫHH‹њ›Щљ[K\XШ][ЫњЦМOЛњ›ЫU]H
‹њ›Ы\ИЧJVМOЛќ]H‘љY[Ь\][ЫњИYЩ[ќЋВ€ЫЫњЭ›ЭИH™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭ\HH›ЩKќ\H›Ы›Ш\™[™ИЋВ€ЫЫњЭXЭ[ЫњИHВ€Ы›Ш\™[™О€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€XЪЩ]ќ[X™\Ћ€S‹SУђ‹IФЭљ[™К‹њ›Щљ[KќЫЬљЩ›ЬЩSЫ›Ш\™[™Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›ЫK€ЪXЪЫ\Э€ИљY[ќ]H™]љY]И‹ЫЭ\њЩHЩ\ќYљXШ]\И‹њ›ЫH^XЭ][ЫњИ‹њШY™]HњљYYљ[™И‹њ^[Y[ќЩ]\—K€Э]\О€њXЪЩ]\™XYH‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[KќЫЬљЩ›ЬЩSЫ›Ш\™[™Лќ[њЪYќ
™XЫЬ™
NВ€Y€
Y‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лљ[ЫY\К“Ы›Ш\™[™И™XYHЉJH‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лњ\Ъ
“Ы›Ш\™[™И™XYHЉNВ€™]\›€ИќЫЬљЩ›ЬЩKZљ\И‹›Ы›Ш\™[™ЛњXЪЩ]Ь™XYH‹	Ь™XЫЬ™њXЪЩ]ќ[X™\џHЫ›Ш\™[™ИXЪЩ]™\\™Y›Ь€	Ь›Ы_K™XЫЬ™NВ€K€ШЭ[Y[ќ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€ШЭ[Y[ќќ[X™\Ћ€S‹QРЛIФЭљ[™К‹њ›Щљ[KќЫЬљЩ›ЬЩQШЭ[Y[ќЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›ЫK€ЪXЪЬО€ИљY[ќ]H‹Щ\ќYљXШ]H›ЫЩ€‹ќЫЬљИ]]Ьљ^][Ы€‹™[Y\™Щ[ЮHЫЫќXЭ—K€Э]\О€ќ™\љYљYY‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[KќЫЬљЩ›ЬЩQШЭ[Y[ќЛќ[њЪYќ
™XЫЬ™
NВ€Y€
Y‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лљ[ЫY\К‘ШЭ[Y[ќИ™\љYљYYЉJH‹њ›Щљ[KќЫЬљЩ›ЬЩPYЩ\Лњ\Ъ
‘ШЭ[Y[ќИ™\љYљYYЉNВ€™]\›€ИќЫЬљЩ›ЬЩKZљ\И‹™ШЭ[Y[ќЛќ™\љYљYY‹	Ь™XЫЬ™™ШЭ[Y[ќќ[X™\џHЫЬљЩ›ЬЩHШЭ[Y[ќИ™\љYљYY™XЫЬ™NВ€K€[Y\ЪY]€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€[Y\ЪY]ќ[X™\Ћ€S‹USQKIФЭљ[™К‹њ›Щљ[Kќ[Y\ЪY]Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›ЫK€Э\њО€ќ[X™\Љ›ЩKљЭ\њИЉK€Э]\О€њЭX›Z]Y‹€ЭX›Z]Y]€›ЭВ€NВ€‹њ›Щљ[Kќ[Y\ЪY]Лќ[њЪYќ
™XЫЬ™
NВ€™]\›€ИќЫЬљЩ›ЬЩK\ЪYќИ‹ќ[Y\ЪY]њЭX›Z]Y‹	Ь™XЫЬ™ќ[Y\ЪY]ќ[X™\џH[Y\ЪY]ЭX›Z]Y›Ь€	Ь™XЫЬ™љЭ\њЯHЭ\њЛ™XЫЬ™NВ€K€^\›Ы€

HO€В€ЫЫњЭ]\Э[Y\ЪY]H‹њ›Щљ[Kќ[Y\ЪY]ЦМHИЭ\њО€‹[Y\ЪY]ќ[X™\Ћ€ђS‹USQKPUUИ€NВ€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€^\›Ыќ[X™\Ћ€S‹TVKIФЭљ[™К‹њ›Щљ[Kњ^\›Ы\›Э[Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€[Y\ЪY]ќ[X™\Ћ€]\Э[Y\ЪY]ќ[Y\ЪY]ќ[X™\‹€[[Э[ќ€ќ[X™\Љ›ЩK[[Э[ќ]\Э[Y\ЪY]љЭ\њИ
€LЉK€Э]\О€\›Э™Y‹€\›Э™Y]€›ЭВ€NВ€‹њ›Щљ[Kњ^\›Ы\›Э[Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K™X\›љ[™ЬИHќ[X™\Љ‹њ›Щљ[K™X\›љ[™ЬИ
H
И™XЫЬ™[[Э[ќВ€™]\›€ИќЫЬљЩ›ЬЩKZљ\И‹њ^\›Ы\›Э™Y‹	Ь™XЫЬ™њ^\›Ыќ[X™\џH^\›Ы\›Э™Y›Ь€		Ь™XЫЬ™[[Э[ќK™XЫЬ™NВ€K€][X][ЫЋ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€™]љY]Уќ[X™\Ћ€S‹T‘U‹IФЭљ[™К‹њ›Щљ[Kњ\™›Ь›X[ЩT™]љY]ЬЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›ЫK€ШЫЬ™N€ќ[X™\Љ›ЩKњШЫЬ™HLЉK€Э™[™ЭО€И][™[ЩH‹›[Шљ[HЫЬљЩ›ЭИ‹ЫЫ[][љ]H[™Щ™€—K€™^ЫШXЪ[™О€Y[ЩHИ›Э]HЫЫЬ™[][Ы€[™\›Y\€Э\Ьќ]X[]HЪXЪЬИ‹€Э]\О€ЫЫ\]Y‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kњ\™›Ь›X[ЩT™]љY]ЬЛќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[Kњ™XY[™\ЬИHX]›Z[ЉLќ[X™\Љ‹њ›Щљ[Kњ™XY[™\ЬИ
H
И
NВ€™]\›€ИќЫЬљЩ›ЬЩKZљ\И‹њ\™›Ь›X[ЩKњ™]љY]ЩY‹	Ь™XЫЬ™њ™]љY]Уќ[X™\џH\™›Ь›X[ЩH™]љY]ИЫЫ\]Y]	Ь™XЫЬ™њШЫЬ™_IK™XЫЬ™NВ€K€њЪYќ\™\]Y\ЭЋ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€™\]Y\Эќ[X™\Ћ€S‹TХРTIФЭљ[™К‹њ›Щљ[KњЪYќ™\]Y\ЭЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›ЫK€™\]Y\Э€›ЩKњ™\]Y\ЭќЫЬљЩ\€™\]Y\ЭYЪYќЭШ\ИШЪY[HYќ\ЭY[ќ‹€Э]\О€›X[YЩ\‹\™]љY]И‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[KњЪYќ™\]Y\ЭЛќ[њЪYќ
™XЫЬ™
NВ€™]\›€ИќЫЬљЩ›ЬЩKXШ[[™\€‹њЪYќњ™\]Y\ЭШЬ™X]Y‹	Ь™XЫЬ™њ™\]Y\Эќ[X™\џHЪYќ™\]Y\ЭЬ™X]Y›Ь€	Ь›Ы_K™XЫЬ™NВ€B€NВ€ЫЫњЭ[™\€HXЭ[ЫњЦЭ\WNВ€Y€
Z[™\ЉH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€•[њЭ\ЬќYY[ЩYЫЬљЩ›ЬЩHXЭ[Ы€€JNВ€ЫЫњЭЬ›ЭљY\’YXЭ[Ы‹]Z[™XЫЬ™HH[™\Љ
NВ€‹њ›Щљ[KШ[™Y]TЭYЩHH\HOOHњ^\›Ы€И”ZYXЩ[Y[ќ€€\HOOH™][X][Ы€€И”\™›Ь›X[ЩH™]љY]И€€‹њ›Щљ[KШ[™Y]TЭYЩNВ€™XШ[Ф™XY[™\ЬК‹њ›Щљ[JNВ€ЩТ[ќYЬ][ЫЉ‹И›ЭљY\’Y[Щ[N€•ЫЬљЩ›ЬЩH‹XЭ[Ы‹]Z[Y]Y]N€И™XЫЬ™Y€™XЫЬ™љY\HHJNВ€YXЭ]љ]J‹њ›Щљ[K]Z[
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђY[ЩYЫЬљЩ›ЬЩH›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KќЫЬљЩ›ЬЩPY[ЩY™\Э[HИ\K™XЫЬ™NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[ШXЭ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•Ьљ]RX[
\Щ\ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИX[Ш\™HЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭИЫЭ[ќћK›Э]HHHXЭ]™PЫЫќ^
ЉNВ€[њЭ\™RX[›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭЭ\ЬќYX[XЭ[Ы•\\ИH™]ИЩ]
Иљ[ќZЩH‹њ™\™\Щ[ќ]]™H‹њШY™]H‹љ[њЬXЭЬ€‹Ш\™\[€‹ЫЫњЩ[ќ‹ќљ][И‹њ™Y™\њ[‹™›ЫЭЭ\‹XШЩ\ЬЪXљ[]H‹Ш\[Ы€‹Ш\™YЪ]™\€—JNВ€Y€
\Э\ЬќYX[XЭ[Ы•\\Лљ\К›ЩKќ\JJH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€•[њЭ\ЬќYX[XЭ[Ы€€JNВ€Y€
›ЩKќ\HOOHљ[ќZЩHЉHВ€ЫЫњЭ\™Щ[ЮHHЭљ[™К›ЩKќ\™Щ[ЮH€ЉKќљ[J
NВ€ЫЫњЭXШЩ\ЬЪXљ[]S™YYИHЭљ[™К›ЩKXШЩ\ЬЪXљ[]S™YYИ€ЉKќљ[J
NВ€ЫЫњЭ™Y™\њ™Y[™ЭXYЩHHЭљ[™К›ЩKњ™Y™\њ™Y[™ЭXYЩH‹њ›Щљ[KXШЩ\ЬЪXљ[]T›Щљ[K›[™ЭXYЩH\Щ\‹›[™ЭXYЩH™[€ЉKќљ[J
NВ€ЫЫњЭЫЫќXЭY]ЩHЭљ[™К›ЩKЫЫќXЭY]Щ“ЭЛX[™ЪYШ[XЪИЉKќљ[J
NВ€ЫЫњЭШ\™YЪ]™\“[YHHЭљ[™К›ЩKШ\™YЪ]™\“[YHђЫЫ[][љ]HXШЩ\ЬЪXљ[]HZYHЉKќљ[J
NВ€ЫЫњЭ™YYЭ[[X\ћHHЭљ[™К›ЩK›™YYЭ[[X\ћH	ШЫЭ[ќћK›[Y_H[ќZЩH›Ь€X]]Y]YK[™љY[XШЩ\ЬИ™]љY]Ш
Kќљ[J
NВ€ЫЫњЭ]Y[ќ[YHHЭљ[™К›ЩKњ]Y[ќ[YHђЫЫ[][љ]H]Y[ќЉKќљ[J
NВ€ЫЫњЭ[ќZЩHHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KIФЭљ[™К‹њ›Щљ[KљX[[ќZЩ\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€]Y[ќ[YK€ЫЭ[ќћRY€ЫЭ[ќћKљY€™YYЭ[[X\ћK€љ\ЪУ]™[€\™Щ[ЮH
ЫЭ[ќћKњљ\ЪИOOH’YЪ€ЫЭ[ќћKљX]ЏHОИ’YЪ€€”›Э][™HЉK€]Y]YTЭ]\О€’[ќZЩHЩ\ЬЪ[Ы€[€›ЩЬ™\ЬИ‹€™\™\Щ[ќ]]™TЭ]\О€“›ЭЫЫ›™XЭY‹€™Y™\њ™Y[™ЭXYЩK€XШЩ\ЬЪXљ[]S™YYЛ€ЫЫќXЭY]Щ€Ш\™YЪ]™\“[YK€\ЬЪ\Э]™TЭ\ЬќО€XШЩ\ЬЪXљ[]S™YYВ€ИXШЩ\ЬЪXљ[]S™YYЛњЬ]
‹ЉK›X\
][HO€][Kќљ[J
JK™љ[\Љ›ЫЫX[ЉB€€ИШ\[Ы€™[^H‹]Y[И\њ][Ы€‹›\™ЩK\љ[ќЭ[[X\ћH‹Ш\™YЪ]™\€[™Щ™€—K€›Э]PЫЫќ^€В€›Э]RY€›Э]KљY€›Э]S[YN€›Э]K›[YK€ЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќ€K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_H[ќZЩH›Ь€X]]Y]YK[™љY[XШЩ\ЬИ™]љY]Ш€ЫЫќXЭY]Щ€“ЭЛX[™ЪYШ[XЪИ‹€Ш\™YЪ]™\“[YN€ђЫЫ[][љ]HXШЩ\ЬЪXљ[]HZYH‚€JNВ€‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€[њЭ\™U[ZX[[ЫЭ[ќ\‘›Ь’[ќZЩJ‹њ›Щљ[K[ќZЩKВ€Y™XЮXЫTЭ]N€љ[ќZЩK\Э\ќY‹€[[Ф™XЫЬ™€[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€[ќZЩKњЫЭ\ЩK€Y][љY[О€[ќZЩK™Y][љY[В€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€љX[][ZX[‹€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€љ[ќZЩKЬ™X]Y‹€]Z[€	Ъ[ќZЩKњ]Y[ќ™YџH[ZX[[ќZЩH™XЫЬ™Y›Ь€	Ь]Y[ќ[Y_K€Y]Y]N€В€[ќZЩRY€[ќZЩKљY€ЫЭ[ќћRY€ЫЭ[ќћKљY€]Y[ќ[YK€™Y™\њ™Y[™ЭXYЩK€ЫЫќXЭY]Щ€XШЩ\ЬЪXљ[]S™YYЛ€Ш\™YЪ]™\“[YB€B€JNВ€ЫЭ[ќћKњ]Y[ќИ
ПHЌNВ€ЫЭ[ќћKњ]Y]YHH’[ќZЩHЩ\ЬЪ[Ы€[€›ЩЬ™\ЬИЋВ€‹њ›Щљ[KZPXЭ]љ]HH[ZX[[ќZЩH	Ъ[ќZЩKњ]Y[ќ™YџHЬ[™Y›Ь€	ШЫЭ[ќћK›[Y_N€	Ы™YYЭ[[X\ћ_KВ€H[ЩHY€
›ЩKќ\HOOHњ™\™\Щ[ќ]]™HЉHВ€ЫЫњЭ[ќZЩHH‹њ›Щљ[KљX[[ќZЩ\ЦМNВ€Y€
[ќZЩJHВ€[ќZЩKњ]Y]YTЭ]\ИH”™\™\Щ[ќ]]™HЫЫ›™XЭYЋВ€[ќZЩKњ™\™\Щ[ќ]]™TЭ]\ИHђЫЫ›™XЭYЋВ€B€‹њ›Щљ[Kњ™\™\Щ[ќ]]™PЫЫ›™XЭ[ЫњИ
ПHNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€љX[[›ЭYљXШ][ЫњИ‹€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€њ™\™\Щ[ќ]]™KЫЫ›™XЭY‹€]Z[€”™\™\Щ[ќ]]™H\ШШ[][Ы€›ЭYљXШ][Ы€™XЫЬ™Y€‹€Y]Y]N€И[ќZЩRY€[ќZЩOЛљYќ[B€JNВ€ЫЭ[ќћKњ]Y]YHH”™\™\Щ[ќ]]™HЫЫ›™XЭYЋВ€‹њ›Щљ[KZPXЭ]љ]HH™\™\Щ[ќ]]™HЫЫ›™XЭY›Ь€	ШЫЭ[ќћK›[Y_KВ€H[ЩHY€
›ЩKќ\HOOHњШY™]HЉHВ€ЫЫњЭ™]љY]ИHВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЭ[ќћRY€ЫЭ[ќћKљY€љ\ЪУ]™[€ЫЭ[ќћKњљ\ЪЛ€X][™^€ЫЭ[ќћKљX]€]T]X[]N€X]›Z[ЉNKЫЭ[ќћKњ]X[]H
ИJK€™XЫЫ[Y[™][ЫЋ€™]љY]И	ШЫЭ[ќћK›[Y_HX]^ЬЭ\™K]Y]YH™\ЬЭ\™K[™™\™\Щ[ќ]]™HЫЭ™\YЩH™Y›Ь™H]]Ы›Ы[Э\ИЭZY[ЩK€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[KњШY™]T™]љY]ЬЛќ[њЪYќ
™]љY]КNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€љX[YZ€‹€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€њШY™]Kњ™]љY]И‹€]Z[€	ШЫЭ[ќћK›[Y_HШY™]H™]љY]И™XЫЬ™Y›Ь€Ш\™H]Y]€Y]Y]N€И™]љY]ТY€™]љY]ЛљYЫЭ[ќћRY€ЫЭ[ќћKљYB€JNВ€ЫЭ[ќћKњ]X[]HHX]›Z[ЉNKЫЭ[ќћKњ]X[]H
ИJNВ€ЫЭ[ќћKњШY™]HHX]›X^
Kќ[X™\Љ
ЫЭ[ќћKњШY™]HHЊJKќСљ^Y
JJJNВ€‹њ›Щљ[KZPXЭ]љ]HHШY™]H™]љY]Иќ[€›Ь€	ШЫЭ[ќћK›[Y_KВ€H[ЩHY€
›ЩKќ\HOOHљ[њЬXЭЬ€ЉHВ€ЫЫњЭ™\Э[H]ШZ]ќ[ђZJљ[њЬXЭЬ€‹ЫЭ[ќћK›Э]K‹њ›Щљ[JNВ€™XЫЬ™ZTќ[Љ‹И\N€љ[њЬXЭЬ€‹ЫЭ[ќћK›Э]K™\Э[[Щ[N€’X[Ш\™H€JNВ€H[ЩHY€
›ЩKќ\HOOHШ\™\[€ЉHВ€ЫЫњЭ™\Э[H]ШZ]ќ[ђZJШ\™\[€‹ЫЭ[ќћK›Э]K‹њ›Щљ[JNВ€ЫЫњЭ[ќZЩHH‹њ›Щљ[KљX[[ќZЩ\ЦМHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KPUUШ€ЫЭ[ќћRY€ЫЭ[ќћKљY€љ\ЪУ]™[€ЫЭ[ќћKњљ\ЪЛ€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_HШ\™H[€™]љY]Ш€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKИ™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_HШ\™H[€™]љY]ШKИY][љY[О€И™[XЪТ[ќZЩH—HJNВ€Y€
Y‹њ›Щљ[KљX[[ќZЩ\Л™љ[™
][HO€][KљYOOH[ќZЩKљY
JH‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€ЫЫњЭШ\™T[€HЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ќZЩK™[ЫЭ[ќ\’Yќ[€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€Э]\О€XЭ]™H‹€^€™\Э[ќ^€›ЭљY\Ћ€™\Э[њ›ЭљY\‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKЯK[ќZЩK™[[Ф™XЫЬ™ИИY][љY[О€И™[XЪТ[ќZЩH—HH€ЯJNВ€ЫЫњЭ[ЫЭ[ќ\€H[њЭ\™U[ZX[[ЫЭ[ќ\‘›Ь’[ќZЩJ‹њ›Щљ[K[ќZЩKВ€[[Ф™XЫЬ™€Ш\™T[‹™[[Ф™XЫЬ™[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€Ш\™T[‹њЪ[][][Ы€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€Ш\™T[‹њЫЭ\ЩH[ќZЩKњЫЭ\ЩK€Y][љY[О€Ш\™T[‹™Y][љY[В€JNВ€Ш\™T[‹™[ЫЭ[ќ\’YH[ЫЭ[ќ\‹™[ЫЭ[ќ\’YВ€‹њ›Щљ[KШ\™T[њЛќ[њЪYќ
Ш\™T[ЉNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€љX[YZ€‹€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€Ш\™WЬ[‹њЮ[ЩY‹€]Z[€	ШШ\™T[‹њ]Y[ќ™YџHШ\™H[€Ю[ЩYИШ[™›ЮR‹€Y]Y]N€ИШ\™T[’Y€Ш\™T[‹љY[ќZЩRY€[ќZЩKљYB€JNВ€[ќZЩKњ]Y]YTЭ]\ИHђШ\™H[€Щ[™\]YЋВ€™XЫЬ™ZTќ[Љ‹И\N€Ш\™\[€‹ЫЭ[ќћK›Э]K™\Э[[Щ[N€’X[Ш\™H€JNВ€H[ЩHY€
›ЩKќ\HOOHЫЫњЩ[ќЉHВ€ЫЫњЭ[ќZЩHH‹њ›Щљ[KљX[[ќZЩ\ЦМHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KPУУ”СS•€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€љ\ЪУ]™[€ЫЭ[ќћKњљ\ЪЛ€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_HЫЫњЩ[ќ[™љ]XЮH™]љY]Ш€]Y]YTЭ]\О€ђЫЫњЩ[ќ™]љY]И‹€™\™\Щ[ќ]]™TЭ]\О€ђXШЩ\ЬЪXљ[]HZYH[™[™И‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_HЫЫњЩ[ќ[™љ]XЮH™]љY]Ш€KИY][љY[О€И™[XЪТ[ќZЩH—HJNВ€Y€
Y‹њ›Щљ[KљX[[ќZЩ\Л™љ[™
][HO€][KљYOOH[ќZЩKљY
JH‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€ЫЫњЭ[ЫЭ[ќ\€H[њЭ\™U[ZX[[ЫЭ[ќ\‘›Ь’[ќZЩJ‹њ›Щљ[K[ќZЩKВ€Y™XЮXЫTЭ]N€љ[ќZЩK\Э\ќY‹€[[Ф™XЫЬ™€[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€[ќZЩKњЫЭ\ЩK€Y][љY[О€[ќZЩK™Y][љY[В€JNВ€ЫЫњЭЫЫњЩ[ќHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ЫЫњЩ[ќ\N€›ЩKЫЫњЩ[ќ\Hќ[ZX[Ш\™YЪ]™\‹[њЫ][Ы‹[™\ЬЪ\Э]™KY›Ь›X]ЫЫњЩ[ќ‹€[™ЭXYЩN€›ЩK›[™ЭXYЩH[ќZЩKњ™Y™\њ™Y[™ЭXYЩH\Щ\‹›[™ЭXYЩH™[€‹€љ]XЮTЭ[[X\ћN€”]Y[ќ™XЩZ]™\ИZ[‹[[™ЭXYЩH^[][Ы‹Ш\™YЪ]™\€\›Z\ЬЪ[Ы‹[њШЬљ\[™[™Л[™ЭЛX[™ЪYЫЫќXЭЫЫњЩ[ќ€‹€Э]\О€њ™XЫЬ™Y‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€ЫЫњЩ[ќ\N€ќ[ZX[Ш\™YЪ]™\‹[њЫ][Ы‹[™\ЬЪ\Э]™KY›Ь›X]ЫЫњЩ[ќ‚€K[ќZЩK™[[Ф™XЫЬ™ИИY][љY[О€И™[XЪТ[ќZЩH—HH€ЯJNВ€ЫЫњЩ[ќ™[ЫЭ[ќ\’YH[ЫЭ[ќ\‹™[ЫЭ[ќ\’YВ€‹њ›Щљ[Kќ[ZX[ЫЫњЩ[ќЛќ[њЪYќ
ЫЫњЩ[ќ
NВ€‹њ›Щљ[Kќ[ZX[ЫЫњЩ[ќИH‹њ›Щљ[Kќ[ZX[ЫЫњЩ[ќЛњЫXЩJЊ
NВ€[ќZЩKњ]Y]YTЭ]\ИHђЫЫњЩ[ќ™XЫЬ™YЋВ€\]U[ZX[[ЫЭ[ќ\Љ‹њ›Щљ[K[ЫЭ[ќ\‹В€Y™XЮXЫTЭ]N€ЫЫњЩ[ќ\™XЫЬ™Y‹€ЫЫњЩ[ќY€ЫЫњЩ[ќљY€[[Ф™XЫЬ™€ЫЫњЩ[ќ™[[Ф™XЫЬ™[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€ЫЫњЩ[ќњЪ[][][Ы€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€ЫЫњЩ[ќњЫЭ\ЩH[ќZЩKњЫЭ\ЩK€Y][љY[О€ЫЫњЩ[ќ™Y][љY[В€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€љX[YZ€‹€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€ќ[ZX[ЫЫњЩ[ќЬ™XЫЬ™Y‹€]Z[€	ШЫЫњЩ[ќњ]Y[ќ™YџH[ZX[ЫЫњЩ[ќ[™љ]XЮH™XЫЬ™Ш\\™Y€Y]Y]N€ИЫЫњЩ[ќY€ЫЫњЩ[ќљY[ќZЩRY€[ќZЩKљYЫЭ[ќћRY€ЫЭ[ќћKљYB€JNВ€‹њ›Щљ[KZPXЭ]љ]HHЫЫњЩ[ќ[™љ]XЮH™XЫЬ™Ш\\™Y›Ь€	ШЫЫњЩ[ќњ]Y[ќ™YџKВ€H[ЩHY€
›ЩKќ\HOOHќљ][ИЉHВ€ЫЫњЭ[ќZЩHH‹њ›Щљ[KљX[[ќZЩ\ЦМHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KU’USШ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€љ\ЪУ]™[€ЫЭ[ќћKњљ\ЪЛ€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_Hљ][И[™љXYЩH™]љY]Ш€]Y]YTЭ]\О€•љ][И™]љY]И‹€™\™\Щ[ќ]]™TЭ]\О€ђXШЩ\ЬЪXљ[]HZYH[™[™И‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_Hљ][И[™љXYЩH™]љY]Ш€KИY][љY[О€И™[XЪТ[ќZЩH—HJNВ€Y€
Y‹њ›Щљ[KљX[[ќZЩ\Л™љ[™
][HO€][KљYOOH[ќZЩKљY
JH‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€ЫЫњЭ[ЫЭ[ќ\€H[њЭ\™U[ZX[[ЫЭ[ќ\‘›Ь’[ќZЩJ‹њ›Щљ[K[ќZЩKВ€Y™XЮXЫTЭ]N€љ[ќZЩK\Э\ќY‹€[[Ф™XЫЬ™€[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€[ќZЩKњЫЭ\ЩK€Y][љY[О€[ќZЩK™Y][љY[В€JNВ€ЫЫњЭљ][ИHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€[\\]\™PО€ќ[X™\Љ›ЩKќ[\\]\™PИ
ЫЭ[ќћKљX]ЏHОИОЊH€Н‹Ћ
JK€[ЩN€ќ[X™\Љ›ЩKњ[ЩH
ЫЭ[ќћKњљ\ЪИOOH’YЪ€ИM€€ЉJK€Ю[\Ы\О€›ЩKњЮ[\Ы\И’X]^ЬЭ\™KZY][Ы€ЪXЪЛXШЩ\ЬЪXљ[]K\Э\ЬќYљXYЩH‹€љXYЩS]™[€ЫЭ[ќћKњљ\ЪИOOH’YЪ€ЫЭ[ќћKљX]ЏHОИњљ[Ьљ]H€€њ›Э][™H‹€Э]\О€Ш\\™Y‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€[\\]\™PО€ЫЭ[ќћKљX]ЏHОИОЊH€Н‹Ћ€[ЩN€ЫЭ[ќћKњљ\ЪИOOH’YЪ€ИM€€‹€Ю[\Ы\О€’X]^ЬЭ\™KZY][Ы€ЪXЪЛXШЩ\ЬЪXљ[]K\Э\ЬќYљXYЩH‚€K[ќZЩK™[[Ф™XЫЬ™ИИY][љY[О€И™[XЪТ[ќZЩH—HH€ЯJNВ€љ][Л™[ЫЭ[ќ\’YH[ЫЭ[ќ\‹™[ЫЭ[ќ\’YВ€‹њ›Щљ[Kќ[ZX[љ][Лќ[њЪYќ
љ][КNВ€‹њ›Щљ[Kќ[ZX[љ][ИH‹њ›Щљ[Kќ[ZX[љ][ЛњЫXЩJЊ
NВ€[ќZЩKњ]Y]YTЭ]\ИH•љ][ИШ\\™YЋВ€\]U[ZX[[ЫЭ[ќ\Љ‹њ›Щљ[K[ЫЭ[ќ\‹В€Y™XЮXЫTЭ]N€ќљ][ЛXШ\\™Y‹€љ][ТY€љ][ЛљY€[[Ф™XЫЬ™€љ][Л™[[Ф™XЫЬ™[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€љ][ЛњЪ[][][Ы€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€љ][ЛњЫЭ\ЩH[ќZЩKњЫЭ\ЩK€Y][љY[О€љ][Л™Y][љY[В€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€љX[][ZX[‹€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€ќ[ZX[ќљ][ЧШШ\\™Y‹€]Z[€	Эљ][Лњ]Y[ќ™YџHљ][ИШ\\™Y›Ь€љXYЩK€Y]Y]N€Иљ][ТY€љ][ЛљY[ќZЩRY€[ќZЩKљYљXYЩS]™[€љ][ЛќљXYЩS]™[B€JNВ€‹њ›Щљ[KZPXЭ]љ]HHљ][ИШ\\™Y›Ь€	Эљ][Лњ]Y[ќ™YџNИљXYЩH]™[	Эљ][ЛќљXYЩS]™[KВ€H[ЩHY€
›ЩKќ\HOOHњ™Y™\њ[ЉHВ€ЫЫњЭ[ќZЩHH‹њ›Щљ[KљX[[ќZЩ\ЦМHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KT‘Q‘T€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€љ\ЪУ]™[€ЫЭ[ќћKњљ\ЪЛ€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_H™Y™\њ[™]љY]Ш€]Y]YTЭ]\О€”™Y™\њ[™]љY]И‹€™\™\Щ[ќ]]™TЭ]\О€ђXШЩ\ЬЪXљ[]HZYH[™[™И‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_H™Y™\њ[™]љY]Ш€KИY][љY[О€И™[XЪТ[ќZЩH—HJNВ€Y€
Y‹њ›Щљ[KљX[[ќZЩ\Л™љ[™
][HO€][KљYOOH[ќZЩKљY
JH‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€ЫЫњЭ[ЫЭ[ќ\€H[њЭ\™U[ZX[[ЫЭ[ќ\‘›Ь’[ќZЩJ‹њ›Щљ[K[ќZЩKВ€Y™XЮXЫTЭ]N€љ[ќZЩK\Э\ќY‹€[[Ф™XЫЬ™€[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€[ќZЩKњЫЭ\ЩK€Y][љY[О€[ќZЩK™Y][љY[В€JNВ€ЫЫњЭ™Y™\њ[HЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€\Э[][ЫЋ€›ЩK™\Э[][Ы€	ШЫЭ[ќћK›[Y_H\ќ™\€Ы[љXИИЫЫ[][љ]HX[ЫЬљЩ\€™X\ЫЫЋ€›ЩKњ™X\ЫЫ€‘\ШШ[][Ы€›Ь€XШЩ\ЬЪX›H›ЫЭЛ]\X]^ЬЭ\™H™]љY]Л[™Ш\™K\[€™\љYљXШ][Ы€‹€[њЬЬќЭ\Ьќ€ЫЫ[][љ]HZYHШ[XЪИ[™ЭЛX[™ЪY\™XЭ[ЫњИ‹€Э]\О€њЩ[ќ‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€\Э[][ЫЋ€	ШЫЭ[ќћK›[Y_H\ќ™\€Ы[љXИИЫЫ[][љ]HX[ЫЬљЩ\€™X\ЫЫЋ€‘\ШШ[][Ы€›Ь€XШЩ\ЬЪX›H›ЫЭЛ]\X]^ЬЭ\™H™]љY]Л[™Ш\™K\[€™\љYљXШ][Ы€‚€K[ќZЩK™[[Ф™XЫЬ™ИИY][љY[О€И™[XЪТ[ќZЩH—HH€ЯJNВ€™Y™\њ[™[ЫЭ[ќ\’YH[ЫЭ[ќ\‹™[ЫЭ[ќ\’YВ€‹њ›Щљ[Kќ[ZX[™Y™\њ[Лќ[њЪYќ
™Y™\њ[
NВ€‹њ›Щљ[Kќ[ZX[™Y™\њ[ИH‹њ›Щљ[Kќ[ZX[™Y™\њ[ЛњЫXЩJЊ
NВ€[ќZЩKњ]Y]YTЭ]\ИH”™Y™\њ[Щ[ќЋВ€\]U[ZX[[ЫЭ[ќ\Љ‹њ›Щљ[K[ЫЭ[ќ\‹В€Y™XЮXЫTЭ]N€™›ЫЭЛ]\[™YYY‹€™Y™\њ[Y€™Y™\њ[љY€[[Ф™XЫЬ™€™Y™\њ[™[[Ф™XЫЬ™[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€™Y™\њ[њЪ[][][Ы€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€™Y™\њ[њЫЭ\ЩH[ќZЩKњЫЭ\ЩK€Y][љY[О€™Y™\њ[™Y][љY[В€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€љX[[›ЭYљXШ][ЫњИ‹€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€ќ[ZX[њ™Y™\њ[ЬЩ[ќ‹€]Z[€	Ь™Y™\њ[њ]Y[ќ™YџH™Y™\њ[Щ[ќИ	Ь™Y™\њ[™\Э[][ЫџK€Y]Y]N€И™Y™\њ[Y€™Y™\њ[љY[ќZЩRY€[ќZЩKљYЫЭ[ќћRY€ЫЭ[ќћKљYB€JNВ€‹њ›Щљ[KZPXЭ]љ]HH™Y™\њ[Щ[ќ›Ь€	Ь™Y™\њ[њ]Y[ќ™YџKВ€H[ЩHY€
›ЩKќ\HOOH™›ЫЭЭ\ЉHВ€ЫЫњЭ[ќZЩHH‹њ›Щљ[KљX[[ќZЩ\ЦМHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KQ“УХШ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€љ\ЪУ]™[€ЫЭ[ќћKњљ\ЪЛ€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_H›ЫЭЛ]\™]љY]Ш€]Y]YTЭ]\О€‘›ЫЭЛ]\™]љY]И‹€™\™\Щ[ќ]]™TЭ]\О€ђXШЩ\ЬЪXљ[]HZYH[™[™И‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_H›ЫЭЛ]\™]љY]Ш€KИY][љY[О€И™[XЪТ[ќZЩH—HJNВ€Y€
Y‹њ›Щљ[KљX[[ќZЩ\Л™љ[™
][HO€][KљYOOH[ќZЩKљY
JH‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€ЫЫњЭ[ЫЭ[ќ\€H[њЭ\™U[ZX[[ЫЭ[ќ\‘›Ь’[ќZЩJ‹њ›Щљ[K[ќZЩKВ€Y™XЮXЫTЭ]N€љ[ќZЩK\Э\ќY‹€[[Ф™XЫЬ™€[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€[ќZЩKњЫЭ\ЩK€Y][љY[О€[ќZЩK™Y][љY[В€JNВ€ЫЫњЭ›ЫЭХ\HЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ШЪY[UЪ[™ЭО€›ЩKњШЪY[UЪ[™ЭИЊЌZЭ\€ЭЛX[™ЪYШ[XЪИ‹€Ъ[›™[О€Иќ›ЪXЩHШ[XЪИ‹”УTИЭ[[X\ћH‹Ш\™YЪ]™\€XЪЩ]‹›\™ЩK\љ[ќШ]Y[ИЭZYH—K€Э]\О€њШЪY[Y‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€ШЪY[UЪ[™ЭО€ЊЌZЭ\€ЭЛX[™ЪYШ[XЪИ‚€K[ќZЩK™[[Ф™XЫЬ™ИИY][љY[О€И™[XЪТ[ќZЩH—HH€ЯJNВ€›ЫЭХ\™[ЫЭ[ќ\’YH[ЫЭ[ќ\‹™[ЫЭ[ќ\’YВ€‹њ›Щљ[Kќ[ZX[›ЫЭХ\Лќ[њЪYќ
›ЫЭХ\
NВ€‹њ›Щљ[Kќ[ZX[›ЫЭХ\ИH‹њ›Щљ[Kќ[ZX[›ЫЭХ\ЛњЫXЩJЊ
NВ€[ќZЩKњ]Y]YTЭ]\ИH‘›ЫЭЛ]\ШЪY[YЋВ€\]U[ZX[[ЫЭ[ќ\Љ‹њ›Щљ[K[ЫЭ[ќ\‹В€Y™XЮXЫTЭ]N€™›ЫЭЛ]\[™YYY‹€›ЫЭХ\Y€›ЫЭХ\љY€[[Ф™XЫЬ™€›ЫЭХ\™[[Ф™XЫЬ™[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€›ЫЭХ\њЪ[][][Ы€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€›ЫЭХ\њЫЭ\ЩH[ќZЩKњЫЭ\ЩK€Y][љY[О€›ЫЭХ\™Y][љY[В€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€љX[[›ЭYљXШ][ЫњИ‹€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€ќ[ZX[™›ЫЭЭ\ЬШЪY[Y‹€]Z[€	Щ›ЫЭХ\њ]Y[ќ™YџH›ЫЭЛ]\ШЪY[Y›ЭYЪ	Щ›ЫЭХ\Ъ[›™[Лљ›Ъ[Љ‹Љ_K€Y]Y]N€И›ЫЭХ\Y€›ЫЭХ\љY[ќZЩRY€[ќZЩKљYЫЭ[ќћRY€ЫЭ[ќћKљYB€JNВ€‹њ›Щљ[KZPXЭ]љ]HH›ЫЭЛ]\ШЪY[Y›Ь€	Щ›ЫЭХ\њ]Y[ќ™YџKВ€H[ЩHY€
ИXШЩ\ЬЪXљ[]H‹Ш\[Ы€‹Ш\™YЪ]™\€—Kљ[ЫY\К›ЩKќ\JJHВ€ЫЫњЭ[ќZЩHH‹њ›Щљ[KљX[[ќZЩ\ЦМHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KPPРСTФШ€ЫЭ[ќћRY€ЫЭ[ќћKљY€љ\ЪУ]™[€ЫЭ[ќћKњљ\ЪЛ€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_HXШЩ\ЬЪX›H[ZX[™]љY]Ш€]Y]YTЭ]\О€ђXШЩ\ЬЪXљ[]H™]љY]И‹€™\™\Щ[ќ]]™TЭ]\О€ђXШЩ\ЬЪXљ[]HZYH[™[™И‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_HXШЩ\ЬЪX›H[ZX[™]љY]Ш€KИY][љY[О€И™[XЪТ[ќZЩH—HJNВ€Y€
Y‹њ›Щљ[KљX[[ќZЩ\Л™љ[™
][HO€][KљYOOH[ќZЩKљY
JH‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€ЫЫњЭ[ЫЭ[ќ\€H[њЭ\™U[ZX[[ЫЭ[ќ\‘›Ь’[ќZЩJ‹њ›Щљ[K[ќZЩKВ€Y™XЮXЫTЭ]N€љ[ќZЩK\Э\ќY‹€[[Ф™XЫЬ™€[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€[ќZЩKњЫЭ\ЩK€Y][љY[О€[ќZЩK™Y][љY[В€JNВ€ЫЫњЭXЭ[ЫњИHВ€XШЩ\ЬЪXљ[]N€В€]N€ђXШЩ\ЬЪX›H[ZX[[€‹€Э]\О€ђXШЩ\ЬИ[€™XYH‹€Э\ЬќО€ИШ\[Ы€™[^H‹]Y[И\ШЬљ\[Ы€‹›\™ЩK\љ[ќЭ[[X\ћH‹Ш\™YЪ]™\€[™Щ™€‹›ЭЛX[™ЪYШ[XЪИ—K€›ЭљY\’Y€љX[YZ€‹€XЭ[ЫЋ€ќ[ZX[XШЩ\ЬЪXљ[]WЬ[€‚€K€Ш\[ЫЋ€В€]N€ђШ\[Ы€™[^HЩ\ЬЪ[Ы€‹€Э]\О€ђШ\[Ы€™[^HXЭ]™H‹€Э\ЬќО€И›]™HШ\[ЫњИ‹ќ[њШЬљ\‹”УTИЭ[[X\ћH—K€›ЭљY\’Y€љX[][ZX[‹€XЭ[ЫЋ€ќ[ZX[Ш\[Ы—Ь™[^H‚€K€Ш\™YЪ]™\Ћ€В€]N€ђШ\™YЪ]™\€XШЩ\ЬЪXљ[]H›ЭYљXШ][Ы€‹€Э]\О€ђШ\™YЪ]™\€›ЭYљYY‹€Э\ЬќО€Иќќ\ЭYШ\™YЪ]™\€[\ќ‹њ™\™\Щ[ќ]]™HШ[XЪИ‹ЫЫ[][љ]HZYHЪXЪЫ\Э—K€›ЭљY\’Y€љX[[›ЭYљXШ][ЫњИ‹€XЭ[ЫЋ€ќ[ZX[Ш\™YЪ]™\—Ы›ЭYљYY‚€B€NВ€ЫЫњЭЩ[XЭYHXЭ[ЫњЦШ›ЩKќ\WNВ€ЫЫњЭ™XЫЬ™HЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€]N€Щ[XЭYќ]K€Э]\О€Щ[XЭYњЭ]\Л€[™ЭXYЩN€‹њ›Щљ[KXШЩ\ЬЪXљ[]T›Щљ[K›[™ЭXYЩH\Щ\‹›[™ЭXYЩHњЭИ‹€Э\ЬќО€Щ[XЭYњЭ\ЬќЛ€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKЯKИY][љY[О€ИњЭ\ЬќИ—HJNВ€™XЫЬ™™[ЫЭ[ќ\’YH[ЫЭ[ќ\‹™[ЫЭ[ќ\’YВ€‹њ›Щљ[Kќ[ZX[XШЩ\ЬЪXљ[]Kќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[Kќ[ZX[XШЩ\ЬЪXљ[]HH‹њ›Щљ[Kќ[ZX[XШЩ\ЬЪXљ[]KњЫXЩJЊ
NВ€[ќZЩKњ]Y]YTЭ]\ИHЩ[XЭYњЭ]\ОВ€[ќZЩKњ™\™\Щ[ќ]]™TЭ]\ИH›ЩKќ\HOOHШ\™YЪ]™\€€ИђШ\™YЪ]™\€›ЭYљYY€€ђXШЩ\ЬЪXљ[]H™\\™YЋВ€ЫЭ[ќћKњ]Y]YHHЩ[XЭYњЭ]\ОВ€‹њ›Щљ[KZPXЭ]љ]HH	ЬЩ[XЭYќ]_H™\\™Y›Ь€	Ъ[ќZЩKњ]Y[ќ™YџKВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€Щ[XЭYњ›ЭљY\’Y€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€Щ[XЭYXЭ[Ы‹€]Z[€	ЬЩ[XЭYќ]_H™XЫЬ™Y›Ь€	Ъ[ќZЩKњ]Y[ќ™YџK€Y]Y]N€ИXШЩ\ЬЪXљ[]RY€™XЫЬ™љY[ќZЩRY€[ќZЩKљYЫЭ[ќћRY€ЫЭ[ќћKљYB€JNВ€B€YXЭ]љ]J‹њ›Щљ[K‹њ›Щљ[KZPXЭ]љ]JNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK’X[›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[Ьќ\[[™]ЫЬљИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•Ьљ]RX[
\Щ\ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИќ\[X[XШЩ\ЬИЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭИЫЭ[ќћK›Э]HHHXЭ]™PЫЫќ^
ЉNВ€[њЭ\™RX[›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ\HHЭљ[™К›ЩKќ\HњЮ[\ЫKYЭZYHЉKќљ[J
NВ€ЫЫњЭ]Y[ќ[YHHЭљ[™К›ЩKњ]Y[ќ[YH‹њ›Щљ[KљX[[ќZЩ\ПЛ–МOЛњ]Y[ќ[YHђЫЫ[][љ]H]Y[ќЉKќљ[J
NВ€ЫЫњЭЮ[\Ы\ИHЭљ[™К›ЩKњЮ[\Ы\И›ЩK›™YYЭ[[X\ћH›ЩKШ\™S›ЭH™™]™\‹XYXЪKЭЫXXЪZ[‹[љќ\ћKYYXЪ[™KЬ€XШЩ\ЬИЫЫЩ\›€ЉKќљ[J
NВ€ЫЫњЭ™Y™\њ™Y[™ЭXYЩHHЭљ[™К›ЩKњ™Y™\њ™Y[™ЭXYЩH‹њ›Щљ[KXШЩ\ЬЪXљ[]T›Щљ[OЛ›[™ЭXYЩH\Щ\‹›[™ЭXYЩH™[€ЉKќљ[J
NВ€ЫЫњЭЫЫќXЭY]ЩHЭљ[™К›ЩKЫЫќXЭY]Щќ›ЪXЩHШ[XЪЛУTЛЬ€Ъ]Р\ЉKќљ[J
NВ€ЫЫњЭШШ][Ы•^HЭљ[™К›ЩKњ]Y[ќШШ][Ы€›ЩK›ШШ][Ы€ЫЭ[ќћK›[YJKќљ[J
NВ€ЫЫњЭ]Y[ќЪ[ќHЫ›ЭЫ“X\ШШ][ЫЉШШ][Ы•^ЫЭ[ќћJHИX™[€ЫЭ[ќћK›[YK]€ЫЭ[ќћK›]™О€ЫЭ[ќћK›™ЛЫЭ[ќћN€ЫЭ[ќћK›[YHNВ€ЫЫњЭ™X\™\ЭЫ[љXИH™X\™\Эќ\[X[Ъ]\К‹]Y[ќЪ[ќЫ[љXИ‹КNВ€ЫЫњЭ™X\™\Э[Шљ[PЫ[љXИH™X\™\Эќ\[X[Ъ]\К‹]Y[ќЪ[ќ›[Шљ[KXЫ[љXИ‹ЉNВ€ЫЫњЭ™X\™\Э\›XXЮHH™X\™\Эќ\[X[Ъ]\К‹]Y[ќЪ[ќњ\›XXЮH‹КNВ€ЫЫњЭ™X\™\ЭЭ\TЫЭ\Щ\ИH™X\™\Эќ\[X[Ъ]\К‹]Y[ќЪ[ќ›YYXШ[\Э\H‹КNВ€ЫЫњЭЭZY[ЩHHШY™TЮ[\ЫQЭZY[ЩJЮ[\Ы\ЛЫЭ[ќћJNВ€ЫЫњЭXЭ]™R[ќZЩHH‹њ›Щљ[KљX[[ќZЩ\ЦМHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KT•TђS€]Y[ќ[YK€ЫЭ[ќћRY€ЫЭ[ќћKљY€™YYЭ[[X\ћN€Ю[\Ы\Л€љ\ЪУ]™[€ЭZY[ЩKќ\™Щ[ЮK€]Y]YTЭ]\О€”ќ\[XШЩ\ЬИ™]љY]И‹€™\™\Щ[ќ]]™TЭ]\О€ђЫЫ[][љ]HZYH[™[™И‹€™Y™\њ™Y[™ЭXYЩK€ЫЫќXЭY]Щ€XШЩ\ЬЪXљ[]S™YYО€ќ›ЪXЩKYљ\њЭШ\[ЫњЛ\™ЩHљ[ќШ\™YЪ]™\€[™Щ™€‹€Ш\™YЪ]™\“[YN€ђЫЫ[][љ]HX[ZYH‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€Ю[\Ы\О€™™]™\‹XYXЪKЭЫXXЪZ[‹[љќ\ћKYYXЪ[™KЬ€XШЩ\ЬИЫЫЩ\›€‹€ЫЫќXЭY]Щ€ќ›ЪXЩHШ[XЪЛУTЛЬ€Ъ]Р\‹€]Y[ќШШ][ЫЋ€ЫЭ[ќћK›[YK€Ш\™YЪ]™\“[YN€ђЫЫ[][љ]HX[ZYH‚€KИY][љY[О€И™[XЪТ[ќZЩH—HJNВ€Y€
Y‹њ›Щљ[KљX[[ќZЩ\Л™љ[™
][HO€][KљYOOHXЭ]™R[ќZЩKљY
JH‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
XЭ]™R[ќZЩJNВ€XЭ]™R[ќZЩKњ]Y[ќ[YHH]Y[ќ[YHXЭ]™R[ќZЩKњ]Y[ќ[YNВ€XЭ]™R[ќZЩKњ™Y™\њ™Y[™ЭXYЩHH™Y™\њ™Y[™ЭXYЩNВ€XЭ]™R[ќZЩKЫЫќXЭY]ЩHЫЫќXЭY]ЩВ€XЭ]™R[ќZЩK›™YYЭ[[X\ћHHЮ[\Ы\ИXЭ]™R[ќZЩK›™YYЭ[[X\ћNВ€XЭ]™R[ќZЩK›ШШ][Ы•^HШШ][Ы•^В€XЭ]™R[ќZЩKњ]Y[ќЪ[ќH]Y[ќЪ[ќВ‚€ЫЫњЭ›ЭИH™]И]J
KќТTУФЭљ[™К
NВ€]™XЫЬ™В€]›ЭљY\’YHљX[][ZX[ЋВ€]XЭ[Ы€Hњќ\[ЪX[њЮ[\ЫWЩЭZYYЋВ€]]Z[H	ШXЭ]™R[ќZЩKњ]Y[ќ™YџHќ\[Ю[\ЫHЭZYH™\\™YВ€Y€
\HOOHњЭ\K\™\]Y\ЭЉHВ€ЫЫњЭЭ\S™YYИHЭљ[™К›ЩKњЭ\S™YYИ›X[\љXH\ЭЛЫЭ™\ЛЫЭ[™Ш\™KФ”Л›ЫЩ™\ЬЭ\™HЭY™€]\љY\Л[™HЉKќљ[J
NВ€ЫЫњЭ]Y[ќ›Ы[YHHЭљ[™К›ЩKњ]Y[ќ›Ы[YHЌ]Y[ќИ^XЭYЉKќљ[J
NВ€ЫЫњЭ[]™\ћUЪ[™ЭИHЭљ[™К›ЩK™[]™\ћUЪ[™ЭИњШ[YH^HЬ€™^Э]™XXЪЪ[™ЭИЉKќљ[J
NВ€ЫЫњЭ›YЬИHYYXШ[Э\Q›YЬКЭ\S™YYКNВ€ЫЫњЭ[Шљ[PЫ[љXИH™X\™\Э[Шљ[PЫ[љXЦМNВ€ЫЫњЭЭ\TЫЭ\ЩHH™X\™\ЭЭ\TЫЭ\Щ\ЦМNВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€™\]Y\Эќ[X™\Ћ€’ЛIФЭљ[™К‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\T™\]Y\ЭЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€]Y[ќ™YЋ€XЭ]™R[ќZЩKњ]Y[ќ™Y‹€[Шљ[PЫ[љXУ[YN€Эљ[™К›ЩK›[Шљ[PЫ[љXУ[YH[Шљ[PЫ[љXПЛ›[YH“[Шљ[HЫ[љXИX[HЉKќљ[J
K€ШШ][Ы•^€]Y[ќЪ[ќ€Э\S™YYЛ€]Y[ќ›Ы[YK€\™Щ[ЮN€›YЬЛќ\™Щ[ЮK€[]™\ћUЪ[™ЭЛ€™X\™\Э[Шљ[PЫ[љXО€[Шљ[PЫ[љXЛ€ЭYЩЩ\ЭYЫЭ\ЩN€Э\TЫЭ\ЩK€Э\SЬ[ЫњО€™X\™\ЭЭ\TЫЭ\Щ\Л€›ЭљY\”™]љY]Ф™\]Z\™Y€›YЬЛњ›ЭљY\”™]љY]Ф™\]Z\™Y€\›XXЪ\Э™]љY]Ф™\]Z\™Y€›YЬЛњ\›XXЪ\Э™]љY]Ф™\]Z\™Y€ЫЫЪZ[”™\]Z\™Y€›YЬЛЫЫЪZ[”™\]Z\™Y€ЫЫ\X[ЩS›Э\О€›YЬЛЫЫ\X[ЩS›Э\Л€Э]\О€њЭ\H™\]Y\ЭЬ™X]Y‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\T™\]Y\ЭЛќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\T™\]Y\ЭИH‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\T™\]Y\ЭЛњЫXЩJЊ
NВ€XЭ]™R[ќZЩKњ]Y]YTЭ]\ИH“[Шљ[HЫ[љXИЭ\H™\]Y\ЭЬ™X]YЋВ€›ЭљY\’YHљX[[›ЭYљXШ][ЫњИЋВ€XЭ[Ы€Hњќ\[ЪX[њЭ\WЬ™\]Y\ЭШЬ™X]YЋВ€]Z[H	Ь™XЫЬ™њ™\]Y\Эќ[X™\џHЭ\H™\]Y\ЭЬ™X]Y›Ь€	Ь™XЫЬ™›[Шљ[PЫ[љXУ[Y_KВ€H[ЩHY€
\HOOHњЭ\K[X]ЪЉHВ€ЫЫњЭ™\]Y\ЭH‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\T™\]Y\ЭЦМHќ[В€ЫЫњЭЭ\S™YYИHЭљ[™К›ЩKњЭ\S™YYИ™\]Y\ЭЛњЭ\S™YYИЫ[љXИЭ\Y\И[™\›Э™YYYXЪ[™HЭ\ЬќЉKќљ[J
NВ€ЫЫњЭ›YЬИHYYXШ[Э\Q›YЬКЭ\S™YYКNВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€X]Ъќ[X™\Ћ€’ЛSPUТIФЭљ[™К‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\SX]Ъ\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€™\]Y\Эќ[X™\Ћ€™\]Y\ЭЛњ™\]Y\Эќ[X™\€ќ[€]Y[ќ™YЋ€XЭ]™R[ќZЩKњ]Y[ќ™Y‹€[Шљ[PЫ[љXУ[YN€Эљ[™К›ЩK›[Шљ[PЫ[љXУ[YH™\]Y\ЭЛ›[Шљ[PЫ[љXУ[YH™X\™\Э[Шљ[PЫ[љXЦМOЛ›[YH“[Шљ[HЫ[љXИX[HЉKќљ[J
K€]Y[ќЪ[ќ€Э\S™YYЛ€Щ[XЭYЫЭ\ЩN€™X\™\ЭЭ\TЫЭ\Щ\ЦМK€Э\SЬ[ЫњО€™X\™\ЭЭ\TЫЭ\Щ\Л€›Э]PЫЫќ^€И›Э]RY€›Э]KљY›Э]S[YN€›Э]K›[YKЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќK€›ЭљY\”™]љY]Ф™\]Z\™Y€›YЬЛњ›ЭљY\”™]љY]Ф™\]Z\™Y€\›XXЪ\Э™]љY]Ф™\]Z\™Y€›YЬЛњ\›XXЪ\Э™]љY]Ф™\]Z\™Y€ЫЫЪZ[”™\]Z\™Y€›YЬЛЫЫЪZ[”™\]Z\™Y™X\™\ЭЭ\TЫЭ\Щ\ЦМOЛЫЫЪZ[‹€ЫЫ\X[ЩS›Э\О€›YЬЛЫЫ\X[ЩS›Э\Л€Э]\О€њЭ\HЫЭ\ЩHX]ЪY‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\SX]Ъ\Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\SX]Ъ\ИH‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\SX]Ъ\ЛњЫXЩJЊ
NВ€XЭ]™R[ќZЩKњ]Y]YTЭ]\ИH”Э\HЫЭ\ЩHX]ЪYЋВ€›ЭљY\’YH›X\ИЋВ€XЭ[Ы€Hњќ\[ЪX[њЭ\WЬЫЭ\ЩWЫX]ЪYЋВ€]Z[H	Ь™XЫЬ™›X]Ъќ[X™\џHX]ЪY	Ь™XЫЬ™›[Шљ[PЫ[љXУ[Y_HИ	Ь™XЫЬ™њЩ[XЭYЫЭ\ЩOЛ›[YHњЭ\HЫЭ\ЩHџKВ€H[ЩHY€
\HOOHњЭ\KY\Ь]ЪЉHВ€ЫЫњЭX]ЪH‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\SX]Ъ\ЦМHќ[В€ЫЫњЭ™\]Y\ЭH‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\T™\]Y\ЭЦМHќ[В€ЫЫњЭЩ[XЭYЫЭ\ЩHHX]ЪЛњЩ[XЭYЫЭ\ЩH™\]Y\ЭЛњЭYЩЩ\ЭYЫЭ\ЩH™X\™\ЭЭ\TЫЭ\Щ\ЦМNВ€ЫЫњЭ\Э[][Ы€HX]ЪЛ›[Шљ[PЫ[љXУ[YH™\]Y\ЭЛ›[Шљ[PЫ[љXУ[YH™X\™\Э[Шљ[PЫ[љXЦМOЛ›[YH“[Шљ[HЫ[љXИX[HЋВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€\Ь]Ъќ[X™\Ћ€’ЛQTФIФЭљ[™К‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\Q\Ь]Ъ\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€™\]Y\Эќ[X™\Ћ€™\]Y\ЭЛњ™\]Y\Эќ[X™\€ќ[€X]Ъќ[X™\Ћ€X]ЪЛ›X]Ъќ[X™\€ќ[€]Y[ќ™YЋ€XЭ]™R[ќZЩKњ]Y[ќ™Y‹€Э\TЫЭ\ЩN€Щ[XЭYЫЭ\ЩK€\Э[][Ы‹€љ]™\“ЬђЫЭ\љY\Ћ€Эљ[™К›ЩK™љ]™\“ЬђЫЭ\љY\€ђЫЫ[][љ]HX[ЩЪ\ЭXЬИљ]™\€ЉKќљ[J
K€Э\Y\О€Эљ[™К›ЩKњЭ\S™YYИX]ЪЛњЭ\S™YYИ™\]Y\ЭЛњЭ\S™YYИЫ[љXИЭ\HXЪЩ]ЉKќљ[J
K€]N€Эљ[™К›ЩK™]HЊ‹MЭ\њЛ›Э]HЫЫ™][ЫњИ\›Z][™ИЉKќљ[J
K€Э]\О€™\Ь]ЪY‹€›Э]PЫЫќ^€И›Э]RY€›Э]KљY›Э]S[YN€›Э]K›[YKЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќK€ЫЫ\X[ЩS›Э\О€X]ЪЛЫЫ\X[ЩS›Э\И™\]Y\ЭЛЫЫ\X[ЩS›Э\ИYYXШ[Э\Q›YЬК›ЩKњЭ\S™YYКKЫЫ\X[ЩS›Э\Л€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\Q\Ь]Ъ\Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\Q\Ь]Ъ\ИH‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\Q\Ь]Ъ\ЛњЫXЩJЊ
NВ€XЭ]™R[ќZЩKњ]Y]YTЭ]\ИH”Э\H\Ь]ЪЭ\ќYЋВ€›ЭљY\’YHќYK[ЩЪ\ЭXЬИЋВ€XЭ[Ы€Hњќ\[ЪX[њЭ\WЩ\Ь]ЪЬЭ\ќYЋВ€]Z[H	Ь™XЫЬ™™\Ь]Ъќ[X™\џHЭ\H\Ь]ЪЭ\ќYњ›ЫH	ЬЩ[XЭYЫЭ\ЩOЛ›[YHњЭ\HЫЭ\ЩHџHИ	Щ\Э[][ЫџKВ€H[ЩHY€
\HOOHњЭ\KY[]™\ћHЉHВ€ЫЫњЭ\Ь]ЪH‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\Q\Ь]Ъ\ЦМHќ[В€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€[]™\ћSќ[X™\Ћ€’ЛQSIФЭљ[™К‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\Q[]™\љY\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€\Ь]Ъќ[X™\Ћ€\Ь]ЪЛ™\Ь]Ъќ[X™\€ќ[€]Y[ќ™YЋ€XЭ]™R[ќZЩKњ]Y[ќ™Y‹€™XЩZ]™YћN€Эљ[™К›ЩKњ™XЩZ]™YћH“[Шљ[HЫ[љXИXYЉKќљ[J
K€ЫЫ™][ЫЋ€Эљ[™К›ЩKЫЫ™][Ы€њ™XЩZ]™Y[™ЫЭ[ќYЉKќљ[J
K€Э\Y\О€Эљ[™К›ЩKњЭ\S™YYИ\Ь]ЪЛњЭ\Y\ИЫ[љXИЭ\HXЪЩ]ЉKќљ[J
K€Э]\О€™[]™\™Y‹€›ЫЩЋ€›ШШ[ЫЫ™љ\›X][Ы‹›Э]H]љY[ЩK[™Э\H]Y]™XЫЬ™‹€ЫЫ\X[ЩS›Э\О€\Ь]ЪЛЫЫ\X[ЩS›Э\ИYYXШ[Э\Q›YЬК›ЩKњЭ\S™YYКKЫЫ\X[ЩS›Э\Л€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\Q[]™\љY\Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\Q[]™\љY\ИH‹њ›Щљ[K›[Шљ[PЫ[љXФЭ\Q[]™\љY\ЛњЫXЩJЊ
NВ€XЭ]™R[ќZЩKњ]Y]YTЭ]\ИH”Э\H[]™\ћHЫЫ™љ\›YYЋВ€›ЭљY\’YHљX[YZ€ЋВ€XЭ[Ы€Hњќ\[ЪX[њЭ\WЩ[]™\ћWШЫЫ™љ\›YYЋВ€]Z[H	Ь™XЫЬ™™[]™\ћSќ[X™\џHЭ\H[]™\ћHЫЫ™љ\›YYћH	Ь™XЫЬ™њ™XЩZ]™Yћ_KВ€H[ЩHY€
\HOOH›™X\™\ЭXЫ[љXИЉHВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€X]Ъќ[X™\Ћ€’ЛIФЭљ[™К‹њ›Щљ[Kњќ\[Ы[љXУX]Ъ\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€]Y[ќ™YЋ€XЭ]™R[ќZЩKњ]Y[ќ™Y‹€]Y[ќ[YK€]Y[ќЪ[ќ€™X\™\ЭЫ[љXО€™X\™\ЭЫ[љXЦМK€Ы[љXУЬ[ЫњО€™X\™\ЭЫ[љXЛ€›Э]PЫЫќ^€И›Э]RY€›Э]KљY›Э]S[YN€›Э]K›[YKЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќK€Э]\О€Ы[љXИЬ[ЫњИ™XYH‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kњќ\[Ы[љXУX]Ъ\Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[Kњќ\[Ы[љXУX]Ъ\ИH‹њ›Щљ[Kњќ\[Ы[љXУX]Ъ\ЛњЫXЩJЊ
NВ€XЭ]™R[ќZЩKњ]Y]YTЭ]\ИHђЫЬЩ\ЭЫ[љXИЬ[ЫњИ™XYHЋВ€›ЭљY\’YH›X\ИЋВ€XЭ[Ы€Hњќ\[ЪX[Ы[љXЧЫX]ЪYЋВ€]Z[H	Ь™XЫЬ™›X]Ъќ[X™\џHЫЬЩ\ЭЫ[љXИX]Ъ™\\™Y›Ь€	Ь]Y[ќ[Y_KВ€H[ЩHY€
\HOOH›[Шљ[KXЫ[љXИЉHВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€™\]Y\Эќ[X™\Ћ€’KIФЭљ[™К‹њ›Щљ[K›[Шљ[PЫ[љXФ™\]Y\ЭЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€]Y[ќ™YЋ€XЭ]™R[ќZЩKњ]Y[ќ™Y‹€]Y[ќ[YK€]Y[ќЪ[ќ€[Шљ[PЫ[љXО€™X\™\Э[Шљ[PЫ[љXЦМK€[Шљ[PЫ[љXУЬ[ЫњО€™X\™\Э[Шљ[PЫ[љXЛ€\Ь]ЪЪ[™ЭО€ЭZY[ЩKќ\™Щ[ЮHOOHќ\™Щ[ќZ[X[‹\™]љY]И€Иќ\™Щ[ќШШ[\ШШ[][Ы€[™[Шљ[HX[H™]љY]И€€ЊЌMЭ\€Э]™XXЪЪ[™ЭИ‹€Э]\О€›[Шљ[HЫ[љXИ™\]Y\ЭЭYЩY‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФ™\]Y\ЭЛќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФ™\]Y\ЭИH‹њ›Щљ[K›[Шљ[PЫ[љXФ™\]Y\ЭЛњЫXЩJЊ
NВ€XЭ]™R[ќZЩKњ]Y]YTЭ]\ИH“[Шљ[HЫ[љXИ™\]Y\ЭЭYЩYЋВ€›ЭљY\’YHљX[[›ЭYљXШ][ЫњИЋВ€XЭ[Ы€Hњќ\[ЪX[›[Шљ[WШЫ[љXЧЬ™\]Y\ЭYЋВ€]Z[H	Ь™XЫЬ™њ™\]Y\Эќ[X™\џH[Шљ[HЫ[љXИ™\]Y\ЭЭYЩY›Ь€	Ь]Y[ќ[Y_KВ€H[ЩHY€
\HOOHњ\›XXЮHЉHВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€™\]Y\Эќ[X™\Ћ€’IФЭљ[™К‹њ›Щљ[Kњ\›XXЮT™\]Y\ЭЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€]Y[ќ™YЋ€XЭ]™R[ќZЩKњ]Y[ќ™Y‹€]Y[ќ[YK€]Y[ќЪ[ќ€\›XXЮN€™X\™\Э\›XXЮVМK€\›XXЮSЬ[ЫњО€™X\™\Э\›XXЮK€YYXЪ[™PЫЫЩ\›Ћ€Эљ[™К›ЩK›YYXЪ[™PЫЫЩ\›€›YYXЪ[™H]Z[Xљ[]K™Yљ[Ь€›ЭљY\‹\™]љY]ЩYXЪЭ\Э\ЬќЉKќљ[J
K€›ЭљY\”™]љY]Ф™\]Z\™Y€ќYK€Э]\О€њ\›XXЮHЬ[ЫњИ™XYH‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kњ\›XXЮT™\]Y\ЭЛќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[Kњ\›XXЮT™\]Y\ЭИH‹њ›Щљ[Kњ\›XXЮT™\]Y\ЭЛњЫXЩJЊ
NВ€XЭ]™R[ќZЩKњ]Y]YTЭ]\ИH”\›XXЮHЬ[ЫњИ™XYHЋВ€›ЭљY\’YHљX[[›ЭYљXШ][ЫњИЋВ€XЭ[Ы€Hњќ\[ЪX[њ\›XXЮWЫX]ЪYЋВ€]Z[H	Ь™XЫЬ™њ™\]Y\Эќ[X™\џH\›XXЮHXШЩ\ЬИЬ[ЫњИ™\\™Y›Ь€	Ь]Y[ќ[Y_KВ€H[ЩHY€
\HOOHљ[™Щ™€ЉHВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€XЪЩ]ќ[X™\Ћ€’IФЭљ[™К‹њ›Щљ[Kњќ\[X[[™Щ™”XЪЩ]Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€]Y[ќ™YЋ€XЭ]™R[ќZЩKњ]Y[ќ™Y‹€]Y[ќ[YK€™Y™\њ™Y[™ЭXYЩK€ЫЫќXЭY]Щ€]Y[ќЪ[ќ€Ю[\Ы\Л€\™Щ[ЮN€ЭZY[ЩKќ\™Щ[ЮK€™Y›YЬО€ЭZY[ЩKњ™Y›YЬЛ€ЬЬЪX›Q^[][ЫњО€ЭZY[ЩKњЬЬЪX›Q^[][ЫњЛ€›ЭXYЫ›ЬЪ\О€ќYK€Ы[љXО€™X\™\ЭЫ[љXЦМK€[Шљ[PЫ[љXО€™X\™\Э[Шљ[PЫ[љXЦМK€\›XXЮN€™X\™\Э\›XXЮVМK€Z[“[™ЭXYЩTЭ[[X\ћN€ЭZY[ЩKњZ[“[™ЭXYЩK€XЪЩ]›Ь”\\ђЫ[љXО€В€]Y[ќ€	Ь]Y[ќ[Y_X€Ю[\Ы\ИЬЪЩ[Ћ€	ЬЮ[\Ы\ЯX€ШY™]H›ЭN€	ЩЭZY[ЩKњШY™]U^X€\™Щ[ЮN€	ЩЭZY[ЩKќ\™Щ[Ю_X€™Y™\њ™Y[™ЭXYЩN€	Ь™Y™\њ™Y[™ЭXYЩ_X€ЫЫќXЭ€	ШЫЫќXЭY]ЩX€™X\™\ЭЫ[љXО€	Ы™X\™\ЭЫ[љXЦМOЛ›[YH››Э]Z[X›HџX€™X\™\Э\›XXЮN€	Ы™X\™\Э\›XXЮVМOЛ›[YH››Э]Z[X›HџX€K€Э]\О€љ[™Щ™€XЪЩ]™XYH‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kњќ\[X[[™Щ™”XЪЩ]Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[Kњќ\[X[[™Щ™”XЪЩ]ИH‹њ›Щљ[Kњќ\[X[[™Щ™”XЪЩ]ЛњЫXЩJЊ
NВ€XЭ]™R[ќZЩKњ]Y]YTЭ]\ИH”\\‹]ЛYYЪ][[™Щ™€™XYHЋВ€›ЭљY\’YHљX[YZ€ЋВ€XЭ[Ы€Hњќ\[ЪX[љ[™Щ™—ЬXЪЩ]Ь™XYHЋВ€]Z[H	Ь™XЫЬ™њXЪЩ]ќ[X™\џHќ\[[™Щ™€XЪЩ]™\\™Y›Ь€\\€Ь€›Ы‹YYЪ][Ы[љXИ\ЩKВ€H[ЩHВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЭZYSќ[X™\Ћ€’ЛIФЭљ[™К‹њ›Щљ[Kњќ\[Ю[\ЫQЭZY\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€]Y[ќ™YЋ€XЭ]™R[ќZЩKњ]Y[ќ™Y‹€]Y[ќ[YK€™Y™\њ™Y[™ЭXYЩK€ЫЫќXЭY]Щ€]Y[ќЪ[ќ€Ю[\Ы\Л€›ЭXYЫ›ЬЪ\О€ќYK€ШY™]U^€ЭZY[ЩKњШY™]U^€\™Щ[ЮN€ЭZY[ЩKќ\™Щ[ЮK€™Y›YЬО€ЭZY[ЩKњ™Y›YЬЛ€ЬЬЪX›Q^[][ЫњО€ЭZY[ЩKњЬЬЪX›Q^[][ЫњЛ€Z[“[™ЭXYЩN€ЭZY[ЩKњZ[“[™ЭXYЩK€™^Э\О€ЭZY[ЩK›™^Э\Л€™X\™\ЭЫ[љXО€™X\™\ЭЫ[љXЦМK€[Шљ[PЫ[љXО€™X\™\Э[Шљ[PЫ[љXЦМK€\›XXЮN€™X\™\Э\›XXЮVМK€Э]\О€њZ[‹[[™ЭXYЩHЮ[\ЫHЭZYH™XYH‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kњќ\[Ю[\ЫQЭZY\Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[Kњќ\[Ю[\ЫQЭZY\ИH‹њ›Щљ[Kњќ\[Ю[\ЫQЭZY\ЛњЫXЩJЊ
NВ€XЭ]™R[ќZЩKњ]Y]YTЭ]\ИHЭZY[ЩKќ\™Щ[ЮHOOHќ\™Щ[ќZ[X[‹\™]љY]И€И•\™Щ[ќ[X[€™]љY]И™XЫЫ[Y[™Y€€”Ю[\ЫHЭZYH™XYHЋВ€B‚€ЫЫњЭќ\[Y][ИHВ€њЭ\K\™\]Y\ЭЋ€В€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€Ю[\Ы\О€™™]™\‹XYXЪKЭЫXXЪZ[‹[љќ\ћKYYXЪ[™KЬ€XШЩ\ЬИЫЫЩ\›€‹€ЫЫќXЭY]Щ€ќ›ЪXЩHШ[XЪЛУTЛЬ€Ъ]Р\‹€]Y[ќШШ][ЫЋ€ЫЭ[ќћK›[YK€Э\S™YYО€›X[\љXH\ЭЛЫЭ™\ЛЫЭ[™Ш\™KФ”Л›ЫЩ™\ЬЭ\™HЭY™€]\љY\Л[™H‹€]Y[ќ›Ы[YN€Ќ]Y[ќИ^XЭY‹€[]™\ћUЪ[™ЭО€њШ[YH^HЬ€™^Э]™XXЪЪ[™ЭИ‚€K€њЭ\K[X]ЪЋ€В€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€Ю[\Ы\О€™™]™\‹XYXЪKЭЫXXЪZ[‹[љќ\ћKYYXЪ[™KЬ€XШЩ\ЬИЫЫЩ\›€‹€ЫЫќXЭY]Щ€ќ›ЪXЩHШ[XЪЛУTЛЬ€Ъ]Р\‹€]Y[ќШШ][ЫЋ€ЫЭ[ќћK›[YK€Э\S™YYО€Ы[љXИЭ\Y\И[™\›Э™YYYXЪ[™HЭ\Ьќ‚€K€њЭ\KY\Ь]ЪЋ€В€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€Ю[\Ы\О€™™]™\‹XYXЪKЭЫXXЪZ[‹[љќ\ћKYYXЪ[™KЬ€XШЩ\ЬИЫЫЩ\›€‹€ЫЫќXЭY]Щ€ќ›ЪXЩHШ[XЪЛУTЛЬ€Ъ]Р\‹€]Y[ќШШ][ЫЋ€ЫЭ[ќћK›[YK€љ]™\“ЬђЫЭ\љY\Ћ€ђЫЫ[][љ]HX[ЩЪ\ЭXЬИљ]™\€‹€Э\S™YYО€Ы[љXИЭ\HXЪЩ]‹€]N€Њ‹MЭ\њЛ›Э]HЫЫ™][ЫњИ\›Z][™И‚€K€њЭ\KY[]™\ћHЋ€В€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€Ю[\Ы\О€™™]™\‹XYXЪKЭЫXXЪZ[‹[љќ\ћKYYXЪ[™KЬ€XШЩ\ЬИЫЫЩ\›€‹€ЫЫќXЭY]Щ€ќ›ЪXЩHШ[XЪЛУTЛЬ€Ъ]Р\‹€]Y[ќШШ][ЫЋ€ЫЭ[ќћK›[YK€™XЩZ]™YћN€“[Шљ[HЫ[љXИXY‹€ЫЫ™][ЫЋ€њ™XЩZ]™Y[™ЫЭ[ќY‹€Э\S™YYО€Ы[љXИЭ\HXЪЩ]‚€K€\›XXЮN€В€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€Ю[\Ы\О€™™]™\‹XYXЪKЭЫXXЪZ[‹[љќ\ћKYYXЪ[™KЬ€XШЩ\ЬИЫЫЩ\›€‹€ЫЫќXЭY]Щ€ќ›ЪXЩHШ[XЪЛУTЛЬ€Ъ]Р\‹€]Y[ќШШ][ЫЋ€ЫЭ[ќћK›[YK€YYXЪ[™PЫЫЩ\›Ћ€›YYXЪ[™H]Z[Xљ[]K™Yљ[Ь€›ЭљY\‹\™]љY]ЩYXЪЭ\Э\Ьќ‚€B€NВ€ЫЫњЭЪ\™Yќ\[Y][ИHВ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€Ю[\Ы\О€™™]™\‹XYXЪKЭЫXXЪZ[‹[љќ\ћKYYXЪ[™KЬ€XШЩ\ЬИЫЫЩ\›€‹€ЫЫќXЭY]Щ€ќ›ЪXЩHШ[XЪЛУTЛЬ€Ъ]Р\‹€]Y[ќШШ][ЫЋ€ЫЭ[ќћK›[YB€NВ€Шљ™XЭ\ЬЪYЫЉ™XЫЬ™Ъ]X[›Э™[[ЩJ™XЫЬ™›ЩKќ\[Y][ЦЭ\WHЪ\™Yќ\[Y][ЛXЭ]™R[ќZЩK™[[Ф™XЫЬ™ИИY][љY[О€И™[XЪТ[ќZЩH—HH€ЯJJNВ‚€‹њ›Щљ[KZPXЭ]љ]HH	Щ]Z[H™^\И\И›ЭXYЫ›ЬЪ[™ОИ]\И™\\љ[™ИXШЩ\ЬЛШY™]K[™[™Щ™€Э\ЬќВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€[Щ[N€’X[Ш\™H‹€XЭ[Ы‹€]Z[€Y]Y]N€В€™XЫЬ™Y€™XЫЬ™љY€]Y[ќ™YЋ€XЭ]™R[ќZЩKњ]Y[ќ™Y‹€\K€\™Щ[ЮN€™XЫЬ™ќ\™Щ[ЮHЭZY[ЩKќ\™Щ[ЮK€›ЭXYЫ›ЬЪ\О€ќYK€ЫЭ[ќћRY€ЫЭ[ќћKљY€B€JNВ€YXЭ]љ]J‹њ›Щљ[K‹њ›Щљ[KZPXЭ]љ]JNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK”ќ\[X[XШЩ\ЬИ›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњќ\[X[™\Э[HИ\K™XЫЬ™ЭZY[ЩK™X\™\ЭЫ[љXЛ™X\™\Э[Шљ[PЫ[љXЛ™X\™\Э\›XXЮK™X\™\ЭЭ\TЫЭ\Щ\ИNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[Ы[Шљ[KXЫ[љXЛ\™]™[ќYH€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•Ьљ]RX[
\Щ\ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ[Шљ[HЫ[љXИ™]™[ќYHЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭИЫЭ[ќћK›Э]HHHXЭ]™PЫЫќ^
ЉNВ€[њЭ\™RX[›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ\HHЭљ[™К›ЩKќ\HЫ[љXЛ\^[Y[ќ\™\]Y\ЭЉKќљ[J
NВ€ЫЫњЭ›ЭИH™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭ[ќZЩHH‹њ›Щљ[KљX[[ќZЩ\ЦМHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KT‘U€]Y[ќ[YN€Эљ[™К›ЩKњ]Y[ќ[YHђЫЫ[][љ]H]Y[ќЉKќљ[J
K€ЫЭ[ќћRY€ЫЭ[ќћKљY€™YYЭ[[X\ћN€“[Шљ[HЫ[љXИ™]™[ќYHЫЬљЩ›ЭИ‹€љ\ЪУ]™[€”›Э][™H‹€]Y]YTЭ]\О€“[Шљ[HЫ[љXИљ[[™И™]љY]И‹€™\™\Щ[ќ]]™TЭ]\О€”›ЭљY\€\ЪИ[™[™И‹€™Y™\њ™Y[™ЭXYЩN€Эљ[™К›ЩKњ™Y™\њ™Y[™ЭXYЩH\Щ\‹›[™ЭXYЩH™[€ЉKќљ[J
K€ЫЫќXЭY]Щ€ќ›ЪXЩHШ[XЪЛУTЛЬ€Ъ]Р\‹€XШЩ\ЬЪXљ[]S™YYО€њZ[€[™ЭXYЩK]Y[ЛШ\[ЫњЛ™XЩZ\Э[[X\ћH‹€Ь™X]Y]€›ЭВ€K›ЩKВ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€™YYЭ[[X\ћN€“[Шљ[HЫ[љXИ™]™[ќYHЫЬљЩ›ЭИ‹€ЫЫќXЭY]Щ€ќ›ЪXЩHШ[XЪЛУTЛЬ€Ъ]Р\‚€KИY][љY[О€И™[XЪТ[ќZЩH—HJNВ€Y€
Y‹њ›Щљ[KљX[[ќZЩ\Л™љ[™
][HO€][KљYOOH[ќZЩKљY
JH‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€ЫЫњЭ[Шљ[PЫ[љXИH
‹њ›Щљ[K›[Шљ[PЫ[љXФ™\]Y\ЭИЧJVМOЛ›[Шљ[PЫ[љXИ™X\™\Эќ\[X[Ъ]\К‹ИX™[€ЫЭ[ќћK›[YK]€ЫЭ[ќћK›]™О€ЫЭ[ќћK›™ЛЫЭ[ќћN€ЫЭ[ќћK›[YHK›[Шљ[KXЫ[љXИ‹JVМNВ€ЫЫњЭ›ЭљY\“[YHHЭљ[™К›ЩKњ›ЭљY\“[YH[Шљ[PЫ[љXПЛ›[YH	ШЫЭ[ќћK›[Y_H[Шљ[HЫ[љXИX[X
Kќљ[J
NВ€ЫЫњЭ]Y[ќ[YHHЭљ[™К›ЩKњ]Y[ќ[YH[ќZЩKњ]Y[ќ[YHђЫЫ[][љ]H]Y[ќЉKќљ[J
NВ€ЫЫњЭЩ\ќљXЩHHЭљ[™К›ЩKњЩ\ќљXЩH›[Шљ[HЫ[љXИљ\Ъ]љ][ИЫЫXЭ[Ы‹[ZX[[™Щ™‹[™›ЫЭЛ]\Э\ЬќЉKќљ[J
NВ€ЫЫњЭЭ\њ™[ЮHHЭљ[™К›ЩKЭ\њ™[ЮH
ЫЭ[ќћK›[YHOOH’Щ[ћXH€И’СTИ€€ЫЭ[ќћK›[YHOOH“љYЩ\љXH€И“‘У€€€ЫЭ[ќћK›[YHOOH‘ђИ€ИђС€€€•TСЉJKќљ[J
NВ€ЫЫњЭ[[Э[ќHќ[X™\Љ›ЩK[[Э[ќ
\HOOHЫ[љXЛ\Щ\ќљXЩK[Y[ќH€И€ML
JNВ€ЫЫњЭ^[Y[ќY]ЩHЭљ[™К›ЩKњ^[Y[ќY]Щ›[Шљ[H[Ы™^KШ\Ъ™XЩZ\Ш\™Ь€ЬЫњЫЬ€›ЭXЪ\€ЉKќљ[J
NВ€ЫЫњЭ™]љ[Э\ИH‹њ›Щљ[K›[Шљ[PЫ[љXФ™]™[ќYT™XЫЬ™ЦМHќ[В€ЫЫњЭЩ\ќљXЩSY[ќHHВ€И[YN€“[Шљ[HЫ[љXИљ\Ъ]‹љXЩN€[[Э[ќMLЭ\њ™[ЮK›ЭN€”›ЭљY\€ЫЫ™љ\›\ИЫ[љXШ[Щ\ќљXЩH™Y›Ь™H^[Y[ќ\И™\]Y\ЭY€€K€И[YN€•љ][И[™[ќZЩHЭ\Ьќ‹љXЩN€X]›X^
МX]њ›Э[™

[[Э[ќML
H
€ЊНJJKЭ\њ™[ЮK›ЭN€“›Ы‹YXYЫ›ЬЭXИЫЫXЭ[Ы€[™[™Щ™€Э\Ьќ€€K€И[YN€•[ZX[™Y™\њ[[™Щ™€‹љXЩN€X]›X^
LX]њ›Э[™

[[Э[ќML
H
€ЌJJKЭ\њ™[ЮK›ЭN€”™Y™\њ[XЪЩ][™ЫЫ[][љXШ][Ы€ЫЬљЩ›ЭЛ€€K€И[YN€”\›XXЮKЬЭ\HЫЫЬ™[][Ы€‹љXЩN€X]›X^
X]њ›Э[™

[[Э[ќML
H
€Ќ
JKЭ\њ™[ЮK›ЭN€ђ]Z[Xљ[]K›Э]K[™ЫЫ\X[ЩH]љY[ЩK€€B€NВ€ЫЫњЭЭ]\УX\HВ€Ы[љXЛ\Щ\ќљXЩK[Y[ќHЋ€њЩ\ќљXЩHY[ќHX›\ЪY‹€Ы[љXЛ\^[Y[ќ\™\]Y\ЭЋ€њ^[Y[ќ™\]Y\ЭY‹€Ы[љXЛ\™XЩZ\Ћ€њ™XЩZ\\ЬЭYY‹€Ы[љXЛ\^[Э]Ћ€њ›ЭљY\€^[Э]™\\™Y‚€NВ€ЫЫњЭ™XЫЬ™HЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€™]™[ќYSќ[X™\Ћ€PФ‹IФЭљ[™К‹њ›Щљ[K›[Шљ[PЫ[љXФ™]™[ќYT™XЫЬ™Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€\K€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€]Y[ќ[YK€›ЭљY\“[YK€[Шљ[PЫ[љXЛ€Щ\ќљXЩK€[[Э[ќ€Э\њ™[ЮK€^[Y[ќY]Щ€Э]\О€Э]\УX\Э\WHњ^[Y[ќЫЬљЩ›ЭИ™XЫЬ™Y‹€™]љ[Э\Ф™]™[ќYSќ[X™\Ћ€™]љ[Э\ПЛњ™]™[ќYSќ[X™\€ќ[€Щ\ќљXЩSY[ќK€™XЩZ\ќ[X™\Ћ€\HOOHЫ[љXЛ\™XЩZ\€ИPФ‹TђФIФЭљ[™К‹њ›Щљ[K›[Шљ[PЫ[љXФ™]™[ќYT™XЫЬ™Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€ќ[€^[Э]ќ[X™\Ћ€\HOOHЫ[љXЛ\^[Э]€ИPФ‹TVKIФЭљ[™К‹њ›Щљ[K›[Шљ[PЫ[љXФ™]™[ќYT™XЫЬ™Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€ќ[€^Y\’[њЭќXЭ[ЫЋ€ђЫЫ™љ\›HH]Y[ќЬЫњЫЬ‹Ь€Ш\™H\ќ™\€[™\њЭ[™ИHЩ\ќљXЩKљXЩK™XЩZ\[™™Yќ[™ЬЭ\Ьќ]™Y›Ь™HЫЫXЭ[™И^[Y[ќ€‹€^[Э][њЭќXЭ[ЫЋ€”›ЭљY\€^[Э]™[XZ[њИ[™[™И[ќ[^[Y[ќ›ЭљY\€Щ][Y[ќ]Y[ќЬЬЫњЫЬ€ЫЫ™љ\›X][Ы‹[™ЫЫ\X[ЩH™]љY]И\™HЫЫ\]K€‹€Ы[љXШ[›Э[™\ћN€ђYЬљS™^\И™XЫЬ™Иљ[[™Л™XЩZ\›Э][™Л[™]љY[ЩHЫ›K€Ы[љXШ[ќYЫY[ќЭ^\ИЪ]XЩ[њЩY›ЭљY\њЛ€‹€›Э]PЫЫќ^€И›Э]RY€›Э]KљY›Э]S[YN€›Э]K›[YKЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќK€Ь™X]Y]€›ЭВ€K›ЩKВ€]Y[ќ[YN€[ќZЩKњ]Y[ќ[YHђЫЫ[][љ]H]Y[ќ‹€›ЭљY\“[YN€[Шљ[PЫ[љXПЛ›[YH	ШЫЭ[ќћK›[Y_H[Шљ[HЫ[љXИX[X€Щ\ќљXЩN€›[Шљ[HЫ[љXИљ\Ъ]љ][ИЫЫXЭ[Ы‹[ZX[[™Щ™‹[™›ЫЭЛ]\Э\Ьќ‹€[[Э[ќ€\HOOHЫ[љXЛ\Щ\ќљXЩK[Y[ќH€И€ML€^[Y[ќY]Щ€›[Шљ[H[Ы™^KШ\Ъ™XЩZ\Ш\™Ь€ЬЫњЫЬ€›ЭXЪ\€‚€K[ќZЩK™[[Ф™XЫЬ™ИИY][љY[О€И™[XЪТ[ќZЩH—HH€ЯJNВ€‹њ›Щљ[K›[Шљ[PЫ[љXФ™]™[ќYT™XЫЬ™Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K›[Шљ[PЫ[љXФ™]™[ќYT™XЫЬ™ИH‹њ›Щљ[K›[Шљ[PЫ[љXФ™]™[ќYT™XЫЬ™ЛњЫXЩJМ
NВ€[ќZЩKњ]Y[ќ[YHH]Y[ќ[YNВ€[ќZЩKњ]Y]YTЭ]\ИH[Шљ[HЫ[љXИ	Ь™XЫЬ™њЭ]\ЯXВ€ЫЫњЭ]™[ќXЭ[Ы€H\HOOHЫ[љXЛ\Щ\ќљXЩK[Y[ќH‚€И›[Шљ[WШЫ[љXЛњЩ\ќљXЩWЫY[ќWЬX›\ЪY‚€€\HOOHЫ[љXЛ\™XЩZ\‚€И›[Шљ[WШЫ[љXЛњ™XЩZ\Ъ\ЬЭYY‚€€\HOOHЫ[љXЛ\^[Э]‚€И›[Шљ[WШЫ[љXЛњ^[Э]Ь™\\™Y‚€€›[Шљ[WШЫ[љXЛњ^[Y[ќЬ™\]Y\ЭYЋВ€ЫЫњЭ]Z[H	Ь™XЫЬ™њ™]™[ќYSќ[X™\џH	Ь™XЫЬ™њЭ]\ЯH›Ь€	Ь›ЭљY\“[Y_N€	Ш[[Э[ќИ	ШЭ\њ™[Ю_H	Ш[[Э[ќX€њЩ\ќљXЩHY[ќHџH	ЬЩ\ќљXЩ_KВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€\HOOHЫ[љXЛ\^[Э]€Иљ[[™И€€љX[[›ЭYљXШ][ЫњИ‹€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€]™[ќXЭ[Ы‹€]Z[€Y]Y]N€И™XЫЬ™Y€™XЫЬ™љY]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹\K[[Э[ќЭ\њ™[ЮK›ЭљY\“[YKЫЭ[ќћRY€ЫЭ[ќћKљYB€JNВ€‹њ›Щљ[KZPXЭ]љ]HH	Щ]Z[H	Ь™XЫЬ™Ы[љXШ[›Э[™\ћ_XВ€YXЭ]љ]J‹њ›Щљ[K‹њ›Щљ[KZPXЭ]љ]JNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK“[Шљ[HЫ[љXИ™]™[ќYH›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›[Шљ[PЫ[љXФ™]™[ќYT™\Э[HИ\K™XЫЬ™NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[Ъ[ќZЩK\Ъ[][][Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•Ьљ]RX[
\Щ\ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИX[Ш\™HЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭИЫЭ[ќћK›Э]HHHXЭ]™PЫЫќ^
ЉNВ€[њЭ\™RX[›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ]Y[ќ[YHHЭљ[™К›ЩKњ]Y[ќ[YHђ[Z[HЫЫ[][љ]H]Y[ќЉKќљ[J
NВ€ЫЫњЭ™YYЭ[[X\ћHHЭљ[™К›ЩK›™YYЭ[[X\ћHђXШЩ\ЬЪX›H[ZX[[ќZЩH›Ь€ќ\[]Y[ќЭ\Ьќ[™ЭXYЩH[њЫ][Ы‹[™›ЫЭЛ]\ЉKќљ[J
NВ€ЫЫњЭ™Y™\њ™Y[™ЭXYЩHHЭљ[™К›ЩKњ™Y™\њ™Y[™ЭXYЩH‹њ›Щљ[KXШЩ\ЬЪXљ[]T›Щљ[K›[™ЭXYЩH\Щ\‹›[™ЭXYЩH™[€ЉKќљ[J
NВ€ЫЫњЭXШЩ\ЬЪXљ[]S™YYИHЭљ[™К›ЩKXШЩ\ЬЪXљ[]S™YYИђШ\[ЫњЛ]Y[И\њ][Ы‹\™ЩK\љ[ќЭ[[X\ћKШ\™YЪ]™\€[™Щ™€ЉKќљ[J
NВ€ЫЫњЭЫЫќXЭY]ЩHЭљ[™К›ЩKЫЫќXЭY]Щ•›ЪXЩHШ[XЪИ\ИУTИЭ[[X\ћHЉKќљ[J
NВ€ЫЫњЭШ\™YЪ]™\“[YHHЭљ[™К›ЩKШ\™YЪ]™\“[YHђЫЫ[][љ]HXШЩ\ЬЪXљ[]HZYHЉKќљ[J
NВ€ЫЫњЭљ\ЪУ]™[HЭљ[™К›ЩKќ\™Щ[ЮH
ЫЭ[ќћKњљ\ЪИOOH’YЪ€ЫЭ[ќћKљX]ЏHОИ”љ[Ьљ]H€€”›Э][™HЉJKќљ[J
NВ€ЫЫњЭЬ™X]Y]H™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭ[ќZЩHHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KIФЭљ[™К‹њ›Щљ[KљX[[ќZЩ\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€]Y[ќ[YK€ЫЭ[ќћRY€ЫЭ[ќћKљY€™YYЭ[[X\ћK€љ\ЪУ]™[€]Y]YTЭ]\О€‘ЭZYY[ќZЩHЫЫ\]H‹€™\™\Щ[ќ]]™TЭ]\О€ђXШЩ\ЬЪXљ[]HZYHЫЫ›™XЭY‹€™Y™\њ™Y[™ЭXYЩK€XШЩ\ЬЪXљ[]S™YYЛ€ЫЫќXЭY]Щ€Ш\™YЪ]™\“[YK€\ЬЪ\Э]™TЭ\ЬќО€XШЩ\ЬЪXљ[]S™YYЛњЬ]
‹ЉK›X\
][HO€][Kќљ[J
JK™љ[\Љ›ЫЫX[ЉK€›Э]PЫЫќ^€В€›Э]RY€›Э]KљY€›Э]S[YN€›Э]K›[YK€ЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќ€K€Ъ[][][ЫЋ€ќYK€Ь™X]Y]€K›ЩKВ€]Y[ќ[YN€ђ[Z[HЫЫ[][љ]H]Y[ќ‹€™YYЭ[[X\ћN€ђXШЩ\ЬЪX›H[ZX[[ќZЩH›Ь€ќ\[]Y[ќЭ\Ьќ[™ЭXYЩH[њЫ][Ы‹[™›ЫЭЛ]\‹€XШЩ\ЬЪXљ[]S™YYО€ђШ\[ЫњЛ]Y[И\њ][Ы‹\™ЩK\љ[ќЭ[[X\ћKШ\™YЪ]™\€[™Щ™€‹€ЫЫќXЭY]Щ€•›ЪXЩHШ[XЪИ\ИУTИЭ[[X\ћH‹€Ш\™YЪ]™\“[YN€ђЫЫ[][љ]HXШЩ\ЬЪXљ[]HZYH‚€KИЪ[][][ЫЋ€ќYHJNВ€‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€ЫЫњЭ[ЫЭ[ќ\€H[њЭ\™U[ZX[[ЫЭ[ќ\‘›Ь’[ќZЩJ‹њ›Щљ[K[ќZЩKВ€Y™XЮXЫTЭ]N€љ[ќZЩK\Э\ќY‹€[[Ф™XЫЬ™€ќYK€Ъ[][][ЫЋ€ќYK€ЫЭ\ЩN€[ќZЩKњЫЭ\ЩH™[[Л\Ъ[][][Ы€‹€Y][љY[О€[ќZЩK™Y][љY[В€JNВ‚€ЫЫњЭЫЫњЩ[ќHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ЫЫњЩ[ќ\N€ќ[ZX[[њЫ][Ы‹Ш\™YЪ]™\‹[њШЬљ\[™\ЬЪ\Э]™KY›Ь›X]ЫЫњЩ[ќ‹€[™ЭXYЩN€™Y™\њ™Y[™ЭXYЩK€љ]XЮTЭ[[X\ћN€”Z[‹[[™ЭXYЩHЫЫњЩ[ќШ\\™Y›Ь€ЭZYYШ\™K[њЫ][Ы‹Ш\™YЪ]™\€Э\Ьќ[™ЭЛX[™ЪYЫЫ[][љXШ][Ы‹€‹€Э]\О€њ™XЫЬ™Y‹€Ь™X]Y]€K›ЩKВ€ЫЫњЩ[ќ\N€ќ[ZX[[њЫ][Ы‹Ш\™YЪ]™\‹[њШЬљ\[™\ЬЪ\Э]™KY›Ь›X]ЫЫњЩ[ќ‚€KИЪ[][][ЫЋ€ќYHJNВ€ЫЫњЭљ][ИHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€[\\]\™PО€ќ[X™\Љ›ЩKќ[\\]\™PИ
ЫЭ[ќћKљX]ЏHОИОЊ€€Н‹ЋJJK€[ЩN€ќ[X™\Љ›ЩKњ[ЩH
љ\ЪУ]™[ќУЭЩ\ђШ\ЩJ
Kљ[ЫY\Књљ[Ьљ]HЉHИN€
JK€Ю[\Ы\О€›ЩKњЮ[\Ы\И’X]^ЬЭ\™K[Шљ[]KШXШЩ\ЬЪXљ[]HЪXЪЛќ\[›ЫЭЛ]\™\]Y\Э‹€љXYЩS]™[€љ\ЪУ]™[ќУЭЩ\ђШ\ЩJ
Kљ[ЫY\Књљ[Ьљ]HЉHЫЭ[ќћKљX]ЏHОИњљ[Ьљ]H€€њ›Э][™H‹€Э]\О€Ш\\™Y‹€Ь™X]Y]€K›ЩKВ€[\\]\™PО€ЫЭ[ќћKљX]ЏHОИОЊ€€Н‹ЋK€[ЩN€љ\ЪУ]™[ќУЭЩ\ђШ\ЩJ
Kљ[ЫY\Књљ[Ьљ]HЉHИN€€Ю[\Ы\О€’X]^ЬЭ\™K[Шљ[]KШXШЩ\ЬЪXљ[]HЪXЪЛќ\[›ЫЭЛ]\™\]Y\Э‚€KИЪ[][][ЫЋ€ќYHJNВ€ЫЫњЭXШЩ\ЬФ™XЫЬ™HЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€]N€‘ЭZYYXШЩ\ЬЪX›H[ќZЩHXЪЩ]‹€Э]\О€ђXШЩ\ЬИ[€™XYH‹€[™ЭXYЩN€™Y™\њ™Y[™ЭXYЩK€Э\ЬќО€ИШ\[Ы€™[^H‹]Y[И\ШЬљ\[Ы€‹›\™ЩK\љ[ќЭ[[X\ћH‹Ш\™YЪ]™\€[™Щ™€‹›ЭЛX[™ЪYШ[XЪИ—K€Ь™X]Y]€K›ЩKЯKИЪ[][][ЫЋ€ќYKY][љY[О€ИњЭ\ЬќИ—HJNВ€ЫЫњЭ™Y™\њ[HЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€\Э[][ЫЋ€›ЩK™\Э[][Ы€	ШЫЭ[ќћK›[Y_H\ќ™\€Ы[љXИИЫЫ[][љ]HX[ЫЬљЩ\€™X\ЫЫЋ€›ЩKњ™X\ЫЫ€‘ЭZYY[ќZЩH›YЩЩYXШЩ\ЬЪX›H›ЫЭЛ]\[™›ЭљY\€™\љYљXШ][Ы€‹€[њЬЬќЭ\Ьќ€ЫЫ[][љ]HZYHШ[XЪИ[™ЭЛX[™ЪY\™XЭ[ЫњИ‹€Э]\О€њЩ[ќ‹€Ь™X]Y]€K›ЩKВ€\Э[][ЫЋ€	ШЫЭ[ќћK›[Y_H\ќ™\€Ы[љXИИЫЫ[][љ]HX[ЫЬљЩ\€™X\ЫЫЋ€‘ЭZYY[ќZЩH›YЩЩYXШЩ\ЬЪX›H›ЫЭЛ]\[™›ЭљY\€™\љYљXШ][Ы€‚€KИЪ[][][ЫЋ€ќYHJNВ€ЫЫњЭ›ЫЭХ\HЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ШЪY[UЪ[™ЭО€›ЩKњШЪY[UЪ[™ЭИЊЌZЭ\€›ЪXЩHШ[XЪИЪ]УTИЭ[[X\ћH‹€Ъ[›™[О€Иќ›ЪXЩHШ[XЪИ‹”УTИЭ[[X\ћH‹Ш\™YЪ]™\€XЪЩ]‹›\™ЩK\љ[ќШ]Y[ИЭZYH—K€Э]\О€њШЪY[Y‹€Ь™X]Y]€K›ЩKВ€ШЪY[UЪ[™ЭО€ЊЌZЭ\€›ЪXЩHШ[XЪИЪ]УTИЭ[[X\ћH‚€KИЪ[][][ЫЋ€ќYHJNВ‚€‹њ›Щљ[Kќ[ZX[ЫЫњЩ[ќЛќ[њЪYќ
ЫЫњЩ[ќ
NВ€‹њ›Щљ[Kќ[ZX[љ][Лќ[њЪYќ
љ][КNВ€‹њ›Щљ[Kќ[ZX[XШЩ\ЬЪXљ[]Kќ[њЪYќ
XШЩ\ЬФ™XЫЬ™
NВ€‹њ›Щљ[Kќ[ZX[™Y™\њ[Лќ[њЪYќ
™Y™\њ[
NВ€‹њ›Щљ[Kќ[ZX[›ЫЭХ\Лќ[њЪYќ
›ЫЭХ\
NВ€‹њ›Щљ[Kќ[ZX[ЫЫњЩ[ќИH‹њ›Щљ[Kќ[ZX[ЫЫњЩ[ќЛњЫXЩJЊ
NВ€‹њ›Щљ[Kќ[ZX[љ][ИH‹њ›Щљ[Kќ[ZX[љ][ЛњЫXЩJЊ
NВ€‹њ›Щљ[Kќ[ZX[XШЩ\ЬЪXљ[]HH‹њ›Щљ[Kќ[ZX[XШЩ\ЬЪXљ[]KњЫXЩJЊ
NВ€‹њ›Щљ[Kќ[ZX[™Y™\њ[ИH‹њ›Щљ[Kќ[ZX[™Y™\њ[ЛњЫXЩJЊ
NВ€‹њ›Щљ[Kќ[ZX[›ЫЭХ\ИH‹њ›Щљ[Kќ[ZX[›ЫЭХ\ЛњЫXЩJЊ
NВ€\]U[ZX[[ЫЭ[ќ\Љ‹њ›Щљ[K[ЫЭ[ќ\‹В€Y™XЮXЫTЭ]N€™›ЫЭЛ]\[™YYY‹€ЫЫњЩ[ќY€ЫЫњЩ[ќљY€љ][ТY€љ][ЛљY€™Y™\њ[Y€™Y™\њ[љY€›ЫЭХ\Y€›ЫЭХ\љY€[[Ф™XЫЬ™€ќYK€Ъ[][][ЫЋ€ќYK€ЫЭ\ЩN€™[[Л\Ъ[][][Ы€‹€Y][љY[О€В€‹‹Љ[ќZЩK™Y][љY[ИЧJK€‹‹ЉЫЫњЩ[ќ™Y][љY[ИЧJK€‹‹Љљ][Л™Y][љY[ИЧJK€‹‹Љ™Y™\њ[™Y][љY[ИЧJK€‹‹Љ›ЫЭХ\™Y][љY[ИЧJB€B€JNВ€‹њ›Щљ[Kњ™\™\Щ[ќ]]™PЫЫ›™XЭ[ЫњИ
ПHNВ€ЫЭ[ќћKњ]Y]YHH‘ЭZYY[ќZЩHЫЫ\]HЋВ€ЫЭ[ќћKњ]Y[ќИ
ПHNВ‚€ЫЫњЭ]™[ќИHВ€ИљX[][ZX[‹љ[ќZЩKЬ™X]Y‹	Ъ[ќZЩKњ]Y[ќ™YџHЭZYY[ZX[[ќZЩH™XЫЬ™Ь™X]YK€ИљX[YZ€‹ќ[ZX[ЫЫњЩ[ќЬ™XЫЬ™Y‹	ШЫЫњЩ[ќњ]Y[ќ™YџHЫЫњЩ[ќШ\\™Y\љ[™ИЭZYY[ќZЩKK€ИљX[][ZX[‹ќ[ZX[ќљ][ЧШШ\\™Y‹	Эљ][Лњ]Y[ќ™YџHљ][ИШ\\™Y\љ[™ИЭZYY[ќZЩKK€ИљX[YZ€‹ќ[ZX[XШЩ\ЬЪXљ[]WЬ[€‹	ШXШЩ\ЬФ™XЫЬ™њ]Y[ќ™YџHXШЩ\ЬЪX›H[ќZЩHXЪЩ]™\\™YK€ИљX[[›ЭYљXШ][ЫњИ‹ќ[ZX[њ™Y™\њ[ЬЩ[ќ‹	Ь™Y™\њ[њ]Y[ќ™YџH™Y™\њ[Щ[ќ\љ[™ИЭZYY[ќZЩKK€ИљX[[›ЭYљXШ][ЫњИ‹ќ[ZX[™›ЫЭЭ\ЬШЪY[Y‹	Щ›ЫЭХ\њ]Y[ќ™YџH›ЫЭЛ]\ШЪY[Y\љ[™ИЭZYY[ќZЩKB€NВ€›Ь€
ЫЫњЭЬ›ЭљY\’YXЭ[Ы‹]Z[HЩ€]™[ќКHВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€[Щ[N€’X[Ш\™H‹€XЭ[Ы‹€]Z[€Y]Y]N€И[ќZЩRY€[ќZЩKљY]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹Ъ[][][ЫЋ€ќYHB€JNВ€B€‹њ›Щљ[KZPXЭ]љ]HHЭZYY[ќZЩHЫЫ\]Y›Ь€	Ъ[ќZЩKњ]Y[ќ™YџN€ЫЫњЩ[ќљ][ЛXШЩ\ЬЪXљ[]K™Y™\њ[[™›ЫЭЛ]\\™H™XYKВ€YXЭ]љ]J‹њ›Щљ[K‹њ›Щљ[KZPXЭ]љ]JNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK‘ЭZYY[ќZЩH›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИ‹‹њX›XФЭ]J‹\Щ\ЉK[ќZЩTЪ[][][Ы”™\Э[€И[ќZЩKЫЫњЩ[ќљ][ЛXШЩ\ЬФ™XЫЬ™™Y™\њ[›ЫЭХ\HJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[ШY[ЩY€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•Ьљ]RX[
\Щ\ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИY[ЩYX[Ш\™HЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭИЫЭ[ќћK›Э]HHHXЭ]™PЫЫќ^
ЉNВ€[њЭ\™RX[›Щљ[J‹њ›Щљ[JNВ€][ќZЩHH‹њ›Щљ[KљX[[ќZЩ\ЦМNВ€Y€
Z[ќZЩJHВ€[ќZЩHHЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€]Y[ќ™YЋ€S‹TUIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KPQ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€љ\ЪУ]™[€ЫЭ[ќћKњљ\ЪЛ€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_HY[ЩY[ZX[Ш\™HЬ\][ЫњШ€]Y]YTЭ]\О€ђY[ЩYШ\™HЬ\][ЫњИ‹€™\™\Щ[ќ]]™TЭ]\О€ђXШЩ\ЬЪXљ[]HZYH[™[™И‹€™Y™\њ™Y[™ЭXYЩN€\Щ\‹›[™ЭXYЩH™[€‹€XШЩ\ЬЪXљ[]S™YYО€ђШ\[ЫњЛ]Y[И\њ][Ы‹Ш\™YЪ]™\€[™Щ™€‹€ЫЫќXЭY]Щ€“ЭЛX[™ЪYШ[XЪИ‹€›Э]PЫЫќ^€И›Э]RY€›Э]KљY›Э]S[YN€›Э]K›[YKЪXЪЬЪ[ќ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќK€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€K›ЩKВ€]Y[ќ[YN€ђЫЫ[][љ]H]Y[ќ‹€™YYЭ[[X\ћN€	ШЫЭ[ќћK›[Y_HY[ЩY[ZX[Ш\™HЬ\][ЫњШ€XШЩ\ЬЪXљ[]S™YYО€ђШ\[ЫњЛ]Y[И\њ][Ы‹Ш\™YЪ]™\€[™Щ™€‹€ЫЫќXЭY]Щ€“ЭЛX[™ЪYШ[XЪИ‚€KИY][љY[О€И™[XЪТ[ќZЩH—HJNВ€‹њ›Щљ[KљX[[ќZЩ\Лќ[њЪYќ
[ќZЩJNВ€B€ЫЫњЭ[ЫЭ[ќ\€H[њЭ\™U[ZX[[ЫЭ[ќ\‘›Ь’[ќZЩJ‹њ›Щљ[K[ќZЩKВ€Y™XЮXЫTЭ]N€љ[ќZЩK\Э\ќY‹€[[Ф™XЫЬ™€[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€[ќZЩKњЫЭ\ЩK€Y][љY[О€[ќZЩK™Y][љY[В€JNВ€ЫЫњЭ\HH›ЩKќ\H\Ъ[ќY[ќЋВ€ЫЫњЭ›ЭИH™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭXZЩ\њИHВ€\Ъ[ќY[ќ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€\Ъ[ќY[ќќ[X™\Ћ€S‹PTIФЭљ[™К‹њ›Щљ[Kќ[ZX[\Ъ[ќY[ќЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€ШЪY[UЪ[™ЭО€›ЩKњШЪY[UЪ[™ЭИ›™^]Z[X›Hќ\[[ZX[ЫЭ‹€[Щ[]N€›ЩK›[Щ[]Hќ›ЪXЩKЭљY[ИЪ]УTИ[XЪИ‹€[™ЭXYЩN€[ќZЩKњ™Y™\њ™Y[™ЭXYЩH\Щ\‹›[™ЭXYЩH™[€‹€XШЩ\ЬЪXљ[]N€ИШ\[ЫњИ‹]Y[ИЭ[[X\ћH‹Ш\™YЪ]™\€[™Щ™€‹›ЭЛX[™ЪYШ[XЪИ—K€Э]\О€њШЪY[Y‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kќ[ZX[\Ъ[ќY[ќЛќ[њЪYќ
™XЫЬ™
NВ€[ќZЩKњ]Y]YTЭ]\ИH•[ZX[\Ъ[ќY[ќШЪY[YЋВ€™]\›€ИљX[][ZX[‹ќ[ZX[\Ъ[ќY[ќЬШЪY[Y‹	Ь™XЫЬ™\Ъ[ќY[ќќ[X™\џH\Ъ[ќY[ќШЪY[Y›Ь€	Ъ[ќZЩKњ]Y[ќ™YџK™XЫЬ™NВ€K€›ЭљY\Ћ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€\ЬЪYЫ›Y[ќќ[X™\Ћ€S‹T“Х‹IФЭљ[™К‹њ›Щљ[Kќ[ZX[›ЭљY\ђ\ЬЪYЫ›Y[ќЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€›ЭљY\“[YN€›ЩKњ›ЭљY\“[YH	ШЫЭ[ќћK›[Y_H[ZX[›ЭљY\€\ЪШ€ЬXЪX[N€›ЩKњЬXЪX[H
[ќZЩKњљ\ЪУ]™[OOH’YЪ€Иќ\™Щ[ќќ\[Ш\™H€€њљ[X\ћHШ\™HЉK€Э]\О€\ЬЪYЫ™Y‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kќ[ZX[›ЭљY\ђ\ЬЪYЫ›Y[ќЛќ[њЪYќ
™XЫЬ™
NВ€[ќZЩKњ]Y]YTЭ]\ИH”›ЭљY\€\ЬЪYЫ™YЋВ€[ќZЩKњ™\™\Щ[ќ]]™TЭ]\ИH”›ЭљY\€\ЬЪYЫ™YЋВ€™]\›€ИљX[][ZX[‹ќ[ZX[њ›ЭљY\—Ш\ЬЪYЫ™Y‹	Ь™XЫЬ™\ЬЪYЫ›Y[ќќ[X™\џH›ЭљY\€\ЬЪYЫ™YИ	Ъ[ќZЩKњ]Y[ќ™YџK™XЫЬ™NВ€K€\ЭЬћN€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€\ЭЬћSќ[X™\Ћ€S‹RTХIФЭљ[™К‹њ›Щљ[Kњ]Y[ќ\ЭЬћT™XЫЬ™Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€[\™ЪY\О€›ЩK[\™ЪY\И››Ы™H™\ЬќY‹€ЫЫ™][ЫњО€›ЩKЫЫ™][ЫњИљX]^ЬЭ\™Hљ\ЪЛ[Шљ[]KШXШЩ\ЬЪXљ[]HЭ\Ьќќ\[XШЩ\ЬИ\њљY\њИ‹€YYXШ][ЫњО€›ЩK›YYXШ][ЫњИ››Э™XЫЬ™Y‹€Ш\™YЪ]™\ђЫЫќ^€[ќZЩKШ\™YЪ]™\“[YHЫЫ[][љ]HXШЩ\ЬЪXљ[]HZYH‹€Э]\О€њ™XЫЬ™Y‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kњ]Y[ќ\ЭЬћT™XЫЬ™Лќ[њЪYќ
™XЫЬ™
NВ€™]\›€ИљX[YZ€‹њ]Y[ќљ\ЭЬћWЬ™XЫЬ™Y‹	Ь™XЫЬ™љ\ЭЬћSќ[X™\џH]Y[ќ\ЭЬћH™XЫЬ™Y›Ь€	Ъ[ќZЩKњ]Y[ќ™YџK™XЫЬ™NВ€K€™\ШЬљ\[ЫЋ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€XЪЩ]ќ[X™\Ћ€S‹T–IФЭљ[™К‹њ›Щљ[Kќ[ZX[™\ШЬљ\[Ы”XЪЩ]Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€XЪЩ]\N€Ы[љXЪX[€™]љY]ИXЪЩ]‹€ЫЫќ[ќО€ИШ\™H[€‹њ™Y™\њ[‹ќљ][И‹њ]Y[ќ\ЭЬћH‹XШЩ\ЬЪXљ[]H™YYИ‹њ\›XXЮKШЫ[љXИ[™Щ™€—K€Э]\О€њ™XYKY›Ь‹XЫ[љXЪX[‹\™]љY]И‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kќ[ZX[™\ШЬљ\[Ы”XЪЩ]Лќ[њЪYќ
™XЫЬ™
NВ€™]\›€ИљX[YZ€‹ќ[ZX[њ™\ШЬљ\[Ы—ЬXЪЩ]Ь™XYH‹	Ь™XЫЬ™њXЪЩ]ќ[X™\џHЫ[љXЪX[€XЪЩ]™\\™Y›Ь€	Ъ[ќZЩKњ]Y[ќ™YџK™XЫЬ™NВ€K€[Y\™Щ[ЮN€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€\ШШ[][Ы“ќ[X™\Ћ€S‹QTРЛIФЭљ[™К‹њ›Щљ[Kќ[ZX[[Y\™Щ[ЮQ\ШШ[][ЫњЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€™X\ЫЫЋ€›ЩKњ™X\ЫЫ€љYЪ\љ\ЪИЮ[\Ы\ЛX]^ЬЭ\™KЬ€\™Щ[ќXШЩ\ЬИ\њљY\€‹€\Э[][ЫЋ€	ШЫЭ[ќћK›[Y_H[Y\™Щ[ЮH\ќ™\€ИЫЫ[][љ]HX[ЫЬљЩ\€Э]\О€™\ШШ[]Y‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kќ[ZX[[Y\™Щ[ЮQ\ШШ[][ЫњЛќ[њЪYќ
™XЫЬ™
NВ€[ќZЩKњ]Y]YTЭ]\ИH‘[Y\™Щ[ЮH\ШШ[][Ы€Ь[™YЋВ€™]\›€ИљX[[›ЭYљXШ][ЫњИ‹ќ[ZX[™[Y\™Щ[ЮWЩ\ШШ[]Y‹	Ь™XЫЬ™™\ШШ[][Ы“ќ[X™\џH[Y\™Щ[ЮH\ШШ[][Ы€Ь[™Y›Ь€	Ъ[ќZЩKњ]Y[ќ™YџK™XЫЬ™NВ€K€›ЭN€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€›ЭSќ[X™\Ћ€S‹S“ХKIФЭљ[™К‹њ›Щљ[KШ\™UX[S›Э\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€]]ЬЋ€\Щ\‹›[YK€›ЭN€›ЩK››ЭHђШ\™HX[H™]љY]ЩYXШЩ\ЬЪXљ[]K[™ЭXYЩKШ\™YЪ]™\‹[™ќ\[›ЫЭЛ]\™YYЛ€‹€Э]\О€њ™XЫЬ™Y‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[KШ\™UX[S›Э\Лќ[њЪYќ
™XЫЬ™
NВ€™]\›€ИљX[YZ€‹Ш\™WЭX[K››ЭWЬ™XЫЬ™Y‹	Ь™XЫЬ™››ЭSќ[X™\џHШ\™K]X[H›ЭH™XЫЬ™Y›Ь€	Ъ[ќZЩKњ]Y[ќ™YџK™XЫЬ™NВ€K€Э]ЫЫYN€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€Э]ЫЫYSќ[X™\Ћ€S‹SХUIФЭљ[™К‹њ›Щљ[Kќ[ZX[Э]ЫЫYT™]љY]ЬЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€[ќZЩRY€[ќZЩKљY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹€Э]ЫЫYN€›ЩK›Э]ЫЫYH™›ЫЭЛ]\ЫЫ\]NИ]Y[ќЫЫ›™XЭYИXШЩ\ЬЪX›HШ\™H]‹€™^Э\€›ЩK›™^Э\ЫЫќ[ќYHШ\™YЪ]™\‹\Э\ЬќYШ[XЪИ[™›ЭљY\€™]љY]И‹€Э]\О€њ™]љY]ЩY‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kќ[ZX[Э]ЫЫYT™]љY]ЬЛќ[њЪYќ
™XЫЬ™
NВ€[ќZЩKњ]Y]YTЭ]\ИH“Э]ЫЫYH™]љY]ЩYЋВ€™]\›€ИљX[YZ€‹ќ[ZX[›Э]ЫЫYWЬ™]љY]ЩY‹	Ь™XЫЬ™›Э]ЫЫYSќ[X™\џHЭ]ЫЫYH™]љY]ЩY›Ь€	Ъ[ќZЩKњ]Y[ќ™YџK™XЫЬ™NВ€B€NВ€ЫЫњЭXZЩ\€HXZЩ\њЦЭ\WNВ€Y€
[XZЩ\ЉH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€•[њЭ\ЬќYY[ЩYX[XЭ[Ы€€JNВ€ЫЫњЭЬ›ЭљY\’YXЭ[Ы‹]Z[™XЫЬ™HHXZЩ\Љ
NВ€ЫЫњЭY[ЩYY][ИHВ€\Ъ[ќY[ќ€В€ШЪY[UЪ[™ЭО€›™^]Z[X›Hќ\[[ZX[ЫЭ‹€[Щ[]N€ќ›ЪXЩKЭљY[ИЪ]УTИ[XЪИ‚€K€›ЭљY\Ћ€В€›ЭљY\“[YN€	ШЫЭ[ќћK›[Y_H[ZX[›ЭљY\€\ЪШ€ЬXЪX[N€[ќZЩKњљ\ЪУ]™[OOH’YЪ€Иќ\™Щ[ќќ\[Ш\™H€€њљ[X\ћHШ\™H‚€K€\ЭЬћN€В€[\™ЪY\О€››Ы™H™\ЬќY‹€ЫЫ™][ЫњО€љX]^ЬЭ\™Hљ\ЪЛ[Шљ[]KШXШЩ\ЬЪXљ[]HЭ\Ьќќ\[XШЩ\ЬИ\њљY\њИ‹€YYXШ][ЫњО€››Э™XЫЬ™Y‹€Ш\™YЪ]™\ђЫЫќ^€[ќZЩKШ\™YЪ]™\“[YHЫЫ[][љ]HXШЩ\ЬЪXљ[]HZYH‚€K€™\ШЬљ\[ЫЋ€ЯK€[Y\™Щ[ЮN€В€™X\ЫЫЋ€љYЪ\љ\ЪИЮ[\Ы\ЛX]^ЬЭ\™KЬ€\™Щ[ќXШЩ\ЬИ\њљY\€‹€\Э[][ЫЋ€	ШЫЭ[ќћK›[Y_H[Y\™Щ[ЮH\ќ™\€ИЫЫ[][љ]HX[ЫЬљЩ\€K€›ЭN€В€›ЭN€ђШ\™HX[H™]љY]ЩYXШЩ\ЬЪXљ[]K[™ЭXYЩKШ\™YЪ]™\‹[™ќ\[›ЫЭЛ]\™YYЛ€‚€K€Э]ЫЫYN€В€Э]ЫЫYN€™›ЫЭЛ]\ЫЫ\]NИ]Y[ќЫЫ›™XЭYИXШЩ\ЬЪX›HШ\™H]‹€™^Э\€ЫЫќ[ќYHШ\™YЪ]™\‹\Э\ЬќYШ[XЪИ[™›ЭљY\€™]љY]И‚€B€NВ€Шљ™XЭ\ЬЪYЫЉ™XЫЬ™Ъ]X[›Э™[[ЩJ™XЫЬ™›ЩKY[ЩYY][ЦЭ\WHЯK[ќZЩK™[[Ф™XЫЬ™\HOOHњ™\ШЬљ\[Ы€€ИИY][љY[О€[ќZЩK™[[Ф™XЫЬ™ИИ™[XЪТ[ќZЩH—H€ИЫЫќ[ќИ—HH€ЯJJNВ€™XЫЬ™™[ЫЭ[ќ\’YH[ЫЭ[ќ\‹™[ЫЭ[ќ\’YВ€ЫЫњЭ[ЫЭ[ќ\•\]\ИHВ€\Ъ[ќY[ќ€ИY™XЮXЫTЭ]N€\Ъ[ќY[ќ\ШЪY[Y‹\Ъ[ќY[ќY€™XЫЬ™љYK€›ЭљY\Ћ€ИY™XЮXЫTЭ]N€њ›ЭљY\‹X\ЬЪYЫ™Y‹›ЭљY\ђ\ЬЪYЫ›Y[ќY€™XЫЬ™љYK€\ЭЬћN€ИY™XЮXЫTЭ]N€››ЭK\™XЫЬ™Y‹\ЭЬћRY€™XЫЬ™љYK€™\ШЬљ\[ЫЋ€ИY™XЮXЫTЭ]N€››ЭK\™XЫЬ™Y‹™\ШЬљ\[Ы”XЪЩ]Y€™XЫЬ™љYK€[Y\™Щ[ЮN€ИY™XЮXЫTЭ]N€™\ШШ[]Y‹[Y\™Щ[ЮQ\ШШ[][Ы’Y€™XЫЬ™љYK€›ЭN€ИY™XЮXЫTЭ]N€››ЭK\™XЫЬ™Y‹›ЭRY€™XЫЬ™љYK€Э]ЫЫYN€ИY™XЮXЫTЭ]N€›Э]ЫЫYK\™XЫЬ™Y‹Э]ЫЫYRY€™XЫЬ™љYB€NВ€\]U[ZX[[ЫЭ[ќ\Љ‹њ›Щљ[K[ЫЭ[ќ\‹В€‹‹Љ[ЫЭ[ќ\•\]\ЦЭ\WHЯJK€[[Ф™XЫЬ™€™XЫЬ™™[[Ф™XЫЬ™[ќZЩK™[[Ф™XЫЬ™€Ъ[][][ЫЋ€™XЫЬ™њЪ[][][Ы€[ќZЩKњЪ[][][Ы‹€ЫЭ\ЩN€™XЫЬ™њЫЭ\ЩH[ќZЩKњЫЭ\ЩK€Y][љY[О€™XЫЬ™™Y][љY[В€JNВ€ЫЫњЭЭЬ™S[Z]HЩ^HO€И‹њ›Щљ[VЪЩ^WHH‹њ›Щљ[VЪЩ^WKњЫXЩJЊ
NИNВ€Иќ[ZX[\Ъ[ќY[ќИ‹ќ[ZX[›ЭљY\ђ\ЬЪYЫ›Y[ќИ‹њ]Y[ќ\ЭЬћT™XЫЬ™И‹ќ[ZX[™\ШЬљ\[Ы”XЪЩ]И‹ќ[ZX[[Y\™Щ[ЮQ\ШШ[][ЫњИ‹Ш\™UX[S›Э\И‹ќ[ZX[Э]ЫЫYT™]љY]ЬИ—K™›Ь‘XXЪ
Щ^HO€ЭЬ™S[Z]
Щ^JJNВ€ЫЭ[ќћKњ]Y]YHH[ќZЩKњ]Y]YTЭ]\ОВ€ЩТ[ќYЬ][ЫЉ‹И›ЭљY\’Y[Щ[N€’X[Ш\™H‹XЭ[Ы‹]Z[Y]Y]N€И™XЫЬ™Y€™XЫЬ™љY[ќZЩRY€[ќZЩKљY]Y[ќ™YЋ€[ќZЩKњ]Y[ќ™Y‹\HHJNВ€YXЭ]љ]J‹њ›Щљ[K]Z[
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђY[ЩYX[›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KљX[Y[ЩY™\Э[HИ\K™XЫЬ™NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[Ь›ЭљY\‹]ЫЬљЩ›ЭИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•Ьљ]RX[
\Щ\ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ›ЭљY\€X[Ш\™HЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭИЫЭ[ќћHHHXЭ]™PЫЫќ^
ЉNВ€[њЭ\™RX[›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭXЭ[Ы€HЭљ[™К›ЩKXЭ[Ы€њ]Y]YK\Э[[X\ћHЉKќљ[J
NВ€ЫЫњЭЭ\ЬќY›ЭљY\ђXЭ[ЫњИH™]ИЩ]
Ињ]Y]YK\Э[[X\ћH‹XШЩ\‹™XЫ[™H‹њЭ\ќ]љ\Ъ]‹ЫЫ\]K]љ\Ъ]‹њ™\]Y\ЭY›ЫЭЛ]\‹™\ШШ[]H‹њ™\ЫЫ™KY\ШШ[][Ы€—JNВ€Y€
\Э\ЬќY›ЭљY\ђXЭ[ЫњЛљ\КXЭ[ЫЉJH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€•[њЭ\ЬќY›ЭљY\€ЫЬљЩ›ЭИXЭ[Ы€€JNВ€ЫЫњЭ]Y]YTЭ[[X\ћHH

HO€В€ЫЫњЭ[ЫЭ[ќ\њИH
‹њ›Щљ[Kќ[ZX[[ЫЭ[ќ\њИЧJK›X\
[ЫЭ[ќ\€O€
В€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ЫЭ[ќ\‹њ]Y[ќ™Y‹€[ќZЩRY€[ЫЭ[ќ\‹љ[ќZЩRY€Э]\О€[ЫЭ[ќ\‹њЭ]\Л€Y™XЮXЫTЭ]N€[ЫЭ[ќ\‹›Y™XЮXЫTЭ]K€\]Y]€[ЫЭ[ќ\‹ќ\]Y]€[[Ф™XЫЬ™€›ЫЫX[Љ[ЫЭ[ќ\‹™[[Ф™XЫЬ™
K€Ъ[][][ЫЋ€›ЫЫX[Љ[ЫЭ[ќ\‹њЪ[][][ЫЉK€ЫЭ\ЩN€[ЫЭ[ќ\‹њЫЭ\ЩK€›ЭљY\ђXЭ[ЫђЫЭ[ќ€[ЫЭ[ќ\‹њ›ЭљY\ђXЭ[ЫђЫЭ[ќ€[љЩY™XЫЬ™ЫЭ[ќО€[ЫЭ[ќ\‹›[љЩY™XЫЬ™ЫЭ[ќИ[ZX[[ЫЭ[ќ\“[љЩYЫЭ[ќК[ЫЭ[ќ\ЉB€JJNВ€ЫЫњЭЫЭ[ќИH[ЫЭ[ќ\њЛњ™YXЩJ
Э[[X\ћK[ЫЭ[ќ\ЉHO€В€ЫЫњЭЭ]HH[ЫЭ[ќ\‹›Y™XЮXЫTЭ]Hќ[љЫ›ЭЫ€ЋВ€Э[[X\ћVЬЭ]WHH
Э[[X\ћVЬЭ]WH
H
ИNВ€™]\›€Э[[X\ћNВ€KЯJNВ€™]\›€В€[ЩN€›ШШ[Y[[Л\›ЭљY\‹\]Y]YH‹€Э[€[ЫЭ[ќ\њЛ›[™Э€ШZ][™О€[ЫЭ[ќ\њЛ™љ[\Љ[ЫЭ[ќ\€O€VИЫЫ\]Y‹њ›ЭљY\‹YXЫ[™Y‹™\ШШ[][Ы‹\™\ЫЫ™Y—Kљ[ЫY\К[ЫЭ[ќ\‹›Y™XЮXЫTЭ]JJK›[™Э€ЫЭ[ќЛ€[ЫЭ[ќ\њО€[ЫЭ[ќ\њЛњЫXЩJЌJK€›ЭN€“ШШ[Щ[[И]Y]YHЭ[[X\ћHЫ›K€›И]™HЫ[љXЪX[€\Ь]Ъ\И[\YY€‚€NВ€NВ€Y€
XЭ[Ы€OOHњ]Y]YK\Э[[X\ћHЉHВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ›ЭљY\•ЫЬљЩ›ЭФ™\Э[HИXЭ[Ы‹]Y]YN€]Y]YTЭ[[X\ћJ
HNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€ЫЫњЭ[ЫЭ[ќ\€Hљ[™[ZX[[ЫЭ[ќ\Љ‹њ›Щљ[KВ€[ЫЭ[ќ\’Y€›ЩK™[ЫЭ[ќ\’Y€[ќZЩRY€›ЩKљ[ќZЩRY€]Y[ќ™YЋ€›ЩKњ]Y[ќ™Y‚€JH
‹њ›Щљ[Kќ[ZX[[ЫЭ[ќ\њИЧJVМHќ[В€Y€
Y[ЫЭ[ќ\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€ђЬ™X]HH[ZX[[ЫЭ[ќ\€™Y›Ь™H›ЭљY\€ЫЬљЩ›ЭИXЭ[ЫњИ€JNВ‚€ЫЫњЭY™XЮXЫPћPXЭ[Ы€HВ€XШЩ\€њ›ЭљY\‹XXШЩ\Y‹€XЫ[™N€њ›ЭљY\‹YXЫ[™Y‹€њЭ\ќ]љ\Ъ]Ћ€ќљ\Ъ]XXЭ]™H‹€ЫЫ\]K]љ\Ъ]Ћ€ЫЫ\]Y‹€њ™\]Y\ЭY›ЫЭЛ]\Ћ€™›ЫЭЛ]\[™YYY‹€\ШШ[]N€™\ШШ[]Y‹€њ™\ЫЫ™KY\ШШ[][Ы€Ћ€™\ШШ[][Ы‹\™\ЫЫ™Y‚€NВ€ЫЫњЭY™XЮXЫTЭ]HHY™XЮXЫPћPXЭ[Ы–ШXЭ[Ы—NВ€ЫЫњЭ›ЭљY\“[YHHЭљ[™К›ЩKњ›ЭљY\“[YH\Щ\‹›[YH•[ZX[›ЭљY\€ЉKќљ[J
NВ€ЫЫњЭ›ЭљY\”›ЫHHЭљ[™К›ЩKњ›ЭљY\”›ЫH›ШШ[Y[[Л\›ЭљY\€ЉKќљ[J
NВ€ЫЫњЭ™X\ЫЫ€HЭљ[™К›ЩKњ™X\ЫЫ€€ЉKќљ[J
NВ€ЫЫњЭ›ЭTЭ[[X\ћHHЭљ[™К›ЩK››ЭTЭ[[X\ћH›ЩK››ЭH€ЉKќљ[J
NВ€ЫЫњЭЬ™X]Y]H™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭXЭ[Ы”™XЫЬ™HЪ]X[›Э™[[ЩJВ€XЭ[Ы’Y€Ьћ\Лњ[™ЫUURQ

K€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€XЭ[Ы‹€Э]\О€[ЫЭ[ќ\”Э]\С›Ь“Y™XЮXЫJY™XЮXЫTЭ]KXЭ]™HЉK€Y™XЮXЫTЭ]K€›ЭљY\“[YK€›ЭљY\”›ЫK€™X\ЫЫ‹€›ЭTЭ[[X\ћK€Ь™X]Y]€[[Ф™XЫЬ™€›ЫЫX[Љ[ЫЭ[ќ\‹™[[Ф™XЫЬ™
K€Ъ[][][ЫЋ€›ЫЫX[Љ[ЫЭ[ќ\‹њЪ[][][ЫЉK€ЫЭ\ЩN€[ЫЭ[ќ\‹њЫЭ\ЩHќ[ZX[\›ЭљY\‹]ЫЬљЩ›ЭИ‹€Y][љY[О€[ЫЭ[ќ\‹™Y][љY[ИЧB€K›ЩKВ€›ЭљY\“[YN€\Щ\‹›[YH•[ZX[›ЭљY\€‹€›ЭљY\”›ЫN€›ШШ[Y[[Л\›ЭљY\€‚€KВ€Y][љY[О€[ЫЭ[ќ\‹™Y][љY[ИЧK€Ъ[][][ЫЋ€[ЫЭ[ќ\‹њЪ[][][Ы‹€ЫЭ\ЩN€[ЫЭ[ќ\‹њЫЭ\ЩHќ[ZX[\›ЭљY\‹]ЫЬљЩ›ЭИ‚€JNВ€‹њ›Щљ[Kќ[ZX[›ЭљY\ђXЭ[ЫњЛќ[њЪYќ
XЭ[Ы”™XЫЬ™
NВ€‹њ›Щљ[Kќ[ZX[›ЭљY\ђXЭ[ЫњИH‹њ›Щљ[Kќ[ZX[›ЭљY\ђXЭ[ЫњЛњЫXЩJL
NВ‚€Y€
XЭ[Ы€OOHњ™\]Y\ЭY›ЫЭЛ]\ЉHВ€ЫЫњЭ›ЫЭХ\HЪ]X[›Э™[[ЩJВ€Y€Ьћ\Лњ[™ЫUURQ

K€[ќZЩRY€[ЫЭ[ќ\‹љ[ќZЩRY€[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’Y€]Y[ќ™YЋ€[ЫЭ[ќ\‹њ]Y[ќ™Y‹€ШЪY[UЪ[™ЭО€›ЩKњШЪY[UЪ[™ЭИњ›ЭљY\‹\™\]Y\ЭY›ЫЭЛ]\Ъ[™ЭИ‹€Ъ[›™[О€Иќ›ЪXЩHШ[XЪИ‹”УTИЭ[[X\ћH‹Ш\™YЪ]™\€XЪЩ]—K€Э]\О€њ›ЭљY\‹\™\]Y\ЭY‹€Ь™X]Y]€K›ЩKИШЪY[UЪ[™ЭО€њ›ЭљY\‹\™\]Y\ЭY›ЫЭЛ]\Ъ[™ЭИ€KВ€Y][љY[О€[ЫЭ[ќ\‹™Y][љY[ИЧK€Ъ[][][ЫЋ€[ЫЭ[ќ\‹њЪ[][][Ы‹€ЫЭ\ЩN€[ЫЭ[ќ\‹њЫЭ\ЩHќ[ZX[\›ЭљY\‹]ЫЬљЩ›ЭИ‚€JNВ€‹њ›Щљ[Kќ[ZX[›ЫЭХ\Лќ[њЪYќ
›ЫЭХ\
NВ€‹њ›Щљ[Kќ[ZX[›ЫЭХ\ИH‹њ›Щљ[Kќ[ZX[›ЫЭХ\ЛњЫXЩJЊ
NВ€\]U[ZX[[ЫЭ[ќ\Љ‹њ›Щљ[K[ЫЭ[ќ\‹И›ЫЭХ\Y€›ЫЭХ\љYJNВ€B‚€ЫЫњЭ\]Y[ЫЭ[ќ\€H\]U[ZX[[ЫЭ[ќ\Љ‹њ›Щљ[K[ЫЭ[ќ\‹В€Y™XЮXЫTЭ]K€›ЭљY\ђXЭ[Ы’Y€XЭ[Ы”™XЫЬ™XЭ[Ы’Y€[[Ф™XЫЬ™€XЭ[Ы”™XЫЬ™™[[Ф™XЫЬ™[ЫЭ[ќ\‹™[[Ф™XЫЬ™€Ъ[][][ЫЋ€XЭ[Ы”™XЫЬ™њЪ[][][Ы€[ЫЭ[ќ\‹њЪ[][][Ы‹€ЫЭ\ЩN€XЭ[Ы”™XЫЬ™њЫЭ\ЩH[ЫЭ[ќ\‹њЫЭ\ЩK€Y][љY[О€XЭ[Ы”™XЫЬ™™Y][љY[Л€]\Э›ЭљY\ђXЭ[ЫЋ€ИXЭ[Ы‹Э]\О€XЭ[Ы”™XЫЬ™њЭ]\ЛY™XЮXЫTЭ]KЬ™X]Y]B€JNВ€ЫЭ[ќћKњ]Y]YHH›ЭљY\€ЫЬљЩ›ЭИ	ШXЭ[ЫџH™XЫЬ™YВ€‹њ›Щљ[KZPXЭ]љ]HH[ZX[›ЭљY\€ЫЬљЩ›ЭИ	ШXЭ[ЫџH™XЫЬ™Y›Ь€	Щ[ЫЭ[ќ\‹њ]Y[ќ™Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’YKВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€љX[][ZX[‹€[Щ[N€’X[Ш\™H‹€XЭ[ЫЋ€[ZX[њ›ЭљY\—ЭЫЬљЩ›ЭЛ‰ШXЭ[ЫџX€Э]\О€њЭXШЩ\ЬИ‹€]Z[€›ЭљY\€ЫЬљЩ›ЭИ	ШXЭ[ЫџH™XЫЬ™Y›Ь€	Щ[ЫЭ[ќ\‹њ]Y[ќ™Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’YK€Y]Y]N€ИXЭ[Ы’Y€XЭ[Ы”™XЫЬ™XЭ[Ы’Y[ЫЭ[ќ\’Y€[ЫЭ[ќ\‹™[ЫЭ[ќ\’YY™XЮXЫTЭ]HB€JNВ€YXЭ]љ]J‹њ›Щљ[K‹њ›Щљ[KZPXЭ]љ]JNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK”›ЭљY\€ЫЬљЩ›ЭИ›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ›ЭљY\•ЫЬљЩ›ЭФ™\Э[HИXЭ[Ы‹XЭ[Ы”™XЫЬ™[ЫЭ[ќ\Ћ€\]Y[ЫЭ[ќ\‹]Y]YN€]Y]YTЭ[[X\ћJ
HNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKЫЬ™\€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYHЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™UYT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ›ЩXЭH
‹њ›ЩXЭИЧJK™љ[™
][HO€][KљYOOH›ЩKњ›ЩXЭY
H
‹њ›ЩXЭИЧJK™љ[™
][HO€][K›[YHOOH›ЩKњ›ЩXЭ
NВ€ЫЫњЭИЫЭ[ќћK›Э]HHH›Э]PћT›ЩXЭ
‹›ЩXЭЛљY›ЩKњ›ЩXЭ€ЉNВ€ЫЫњЭЪXЪЬЪ[ќH›Э]KЪXЪЬЪ[ќЦМNВ€ЫЫњЭЬ™\€HВ€Y€Ьћ\Лњ[™ЫUURQ

K€Ь™\“ќ[X™\Ћ€S‹SФ‘IФЭљ[™К‹њ›Щљ[K›Ь™\њЛ›[™Э
ИJKњYЭ\ќ
ЊЉ_X€›ЩXЭY€›ЩXЭЛљYќ[€›ЩXЭ€›ЩXЭЛ›[YH›ЩKњ›ЩXЭђYЬљS™^\И›ЩXЭ‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€›Э]RY€›Э]KљY€ЪXЪЬЪ[ќ€ЪXЪЬЪ[ќ[™^€€ЭYЩN€”XЪЩY‹€ЭYЩR[™^€K€XЪЪ[™Уќ[X™\Ћ€S‹U’ЛIФЭљ[™К‹њ›Щљ[K›Ь™\њЛ›[™Э
ИJKњYЭ\ќ
ЊЉ_X€ќ^Y\’[ќ\™\Э€›ЩXЭЛќ^Y\’[ќ\™\ЭL€Э[€›ЩXЭИ›ЩXЭњљXЩH
€Њ€LЊ€[Y[[™N€В€ИX™[€“Ь™\€Ь™X]Y‹ЪXЪЬЪ[ќЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HK€ИX™[€”XЪЩY‹ЪXЪЬЪ[ќЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HB€K€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K›Ь™\њЛњ\Ъ
Ь™\ЉNВ€‹њ›Щљ[KXЭ]™PЫЭ[ќћRYHЫЭ[ќћKљYВ€‹њ›Щљ[KXЭ]™T›Э]RYH›Э]KљYВ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќHЬ™\‹ЪXЪЬЪ[ќВ€‹њ›Щљ[Kњ›Э]TЭYЩHHЬ™\‹њЭYЩNВ€YYQ]™[ќ
‹њ›Щљ[KИ\N€›Ь™\‹Ь™X]Y‹X™[€	ЫЬ™\‹›Ь™\“ќ[X™\џHЬ™X]Y›Ь€	ЫЬ™\‹њ›ЩXЭXJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќYK[X\љЩ]‹€[Щ[N€ђYЬљUYH‹€XЭ[ЫЋ€›Ь™\‹Ь™X]Y‹€]Z[€	ЫЬ™\‹›Ь™\“ќ[X™\џHЬ™X]YЪ]	ЫЬ™\‹ќ^Y\’[ќ\™\ЭIHќ^Y\€[ќ\™\Э€Y]Y]N€ИЬ™\’Y€Ь™\‹љY›ЩXЭY€Ь™\‹њ›ЩXЭYB€JNВ€ЫЫњЭXЪЪ[™Ф™\Э[H]ШZ]™Yњ™\ЪЬ™\“ЩЪ\ЭXЬХXЪЪ[™К‹Ь™\‹\Щ\‹›ЩЪ\ЭXЬЛ›Ь™\—ШЬ™X]YЭXЪЪ[™ИЉNВ€YXЭ]љ]J‹њ›Щљ[KЬ™\€Ь™X]Y›Ь€	ЫЬ™\‹њ›ЩXЭK
NВ€YXЭ]љ]J‹њ›Щљ[KXЪЪ[™Ф™\Э[™[]™\ћOЛ›ЪИИ]™HЩЪ\ЭXЬИXЪЪ[™ИЫЫ›™XЭY›Ь€	ЫЬ™\‹›Ь™\“ќ[X™\џK€Ъ\Y[ќXЪЪ[™И™\\™Y›Ь€	ЫЬ™\‹›Ь™\“ќ[X™\џK
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK“Ь™\€›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›ЩЪ\ЭXЬХXЪЪ[™Ф™\Э[HXЪЪ[™Ф™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKШY[ЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYHЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™UYT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭЬ™\€H‹њ›Щљ[K›Ь™\њЦЩ‹њ›Щљ[K›Ь™\њЛ›[™ЭHWNВ€Y€
[Ь™\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€ђЬ™X]H[€Ь™\€љ\њЭ€JNВ€ЫЫњЭ›Э]HH‹њ›Э]\Л™љ[™
][HO€][KљYOOHЬ™\‹њ›Э]RY
HXЭ]™T›Э]J
NВ€ЫЫњЭЭYЩ\ИHИ“Ь™\€Ь™X]Y‹”XЪЩY‹’[€[њЪ]‹”]X[]HЪXЪИ‹‘[]™\™Y—NВ€Ь™\‹њЭYЩR[™^HX]›Z[ЉЭYЩ\Л›[™ЭHK
Ь™\‹њЭYЩR[™^
H
ИJNВ€Ь™\‹њЭYЩHHЭYЩ\ЦЫЬ™\‹њЭYЩR[™^NВ€Ь™\‹ЪXЪЬЪ[ќ[™^HX]›Z[Љ›Э]KЪXЪЬЪ[ќЛ›[™ЭHK
Ь™\‹ЪXЪЬЪ[ќ[™^
H
ИJNВ€Ь™\‹ЪXЪЬЪ[ќH›Э]KЪXЪЬЪ[ќЦЫЬ™\‹ЪXЪЬЪ[ќ[™^NВ€Ь™\‹ќ[Y[[™Kќ[њЪYќ
ИX™[€Ь™\‹њЭYЩKЪXЪЬЪ[ќ€Ь™\‹ЪXЪЬЪ[ќЬ™X]Y]€™]И]J
KќТTУФЭљ[™К
HJNВ€‹њ›Щљ[Kњ›Э]TЭYЩHHЬ™\‹њЭYЩNВ€‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќHЬ™\‹ЪXЪЬЪ[ќВ€YYQ]™[ќ
‹њ›Щљ[KИ\N€›Ь™\‹Y[ЩY‹X™[€	ЫЬ™\‹›Ь™\“ќ[X™\џHY[ЩYИ	ЫЬ™\‹њЭYЩ_H]	ЫЬ™\‹ЪXЪЬЪ[ќXJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќYK[ЩЪ\ЭXЬИ‹€[Щ[N€ђYЬљUYH‹€XЭ[ЫЋ€ЪXЪЬЪ[ќќ\]Y‹€]Z[€	ЫЬ™\‹›Ь™\“ќ[X™\џH[Э™YИ	ЫЬ™\‹ЪXЪЬЪ[ќK€Y]Y]N€ИЬ™\’Y€Ь™\‹љYЭYЩN€Ь™\‹њЭYЩKЪXЪЬЪ[ќ€Ь™\‹ЪXЪЬЪ[ќB€JNВ€ЫЫњЭXЪЪ[™Ф™\Э[H]ШZ]™Yњ™\ЪЬ™\“ЩЪ\ЭXЬХXЪЪ[™К‹Ь™\‹\Щ\‹›ЩЪ\ЭXЬЛќXЪЪ[™ЧЬЭ]\ИЉNВ€YXЭ]љ]J‹њ›Щљ[KЬ™\€Y[ЩYИ	Щ‹њ›Щљ[Kњ›Э]TЭYЩ_K
NВ€YXЭ]љ]J‹њ›Щљ[KXЪЪ[™Ф™\Э[™[]™\ћOЛ›ЪИИ]™HЩЪ\ЭXЬИ›ЭљY\€™Yњ™\ЪY	ЫЬ™\‹›Ь™\“ќ[X™\џK€Ъ\Y[ќXЪЩ\€™Yњ™\ЪY	ЫЬ™\‹›Ь™\“ќ[X™\џHњ›ЫH›Э]HЭ]K
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK“ЩЪ\ЭXЬИ›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›ЩЪ\ЭXЬХXЪЪ[™Ф™\Э[HXЪЪ[™Ф™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKЭXЪЪ[™И€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYHЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™UYT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭЬ™\€H›ЩK›Ь™\’Y€И‹њ›Щљ[K›Ь™\њЛ™љ[™
][HO€][KљYOOH›ЩK›Ь™\’Y
B€€‹њ›Щљ[K›Ь™\њЦЩ‹њ›Щљ[K›Ь™\њЛ›[™ЭHWNВ€Y€
[Ь™\ЉH™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€ђЬ™X]H[€Ь™\€љ\њЭ€JNВ€ЫЫњЭXЪЪ[™Ф™\Э[H]ШZ]™Yњ™\ЪЬ™\“ЩЪ\ЭXЬХXЪЪ[™К‹Ь™\‹\Щ\‹›ЩЪ\ЭXЬЛ›X[ќX[ЭXЪЪ[™ЧЬ™Yњ™\ЪЉNВ€YXЭ]љ]J‹њ›Щљ[KXЪЪ[™Ф™\Э[™[]™\ћOЛ›ЪИИ]™HЪ\Y[ќXЪЪ[™И™Yњ™\ЪY›Ь€	ЫЬ™\‹›Ь™\“ќ[X™\џK€Ъ\Y[ќXЪЪ[™И™Yњ™\ЪY›Ь€	ЫЬ™\‹›Ь™\“ќ[X™\џK
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK•XЪЪ[™И›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›ЩЪ\ЭXЬХXЪЪ[™Ф™\Э[HXЪЪ[™Ф™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKЫЩЪ\ЭXЬИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYHЩЪ\ЭXЬИЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]Ь™X]UYSЩЪ\ЭXЬХЫЬљЩ›ЭК‹\Щ\‹›ЩJNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђќ^Y\‹\Щ[\€ЩЪ\ЭXЬИ›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KќYSЩЪ\ЭXЬФ™\Э[H™\Э[В€Э]K›ЩЪ\ЭXЬХXЪЪ[™Ф™\Э[H™\Э[ќXЪЪ[™Ф™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKЬ^[Y[ќXЪXЪЫЭ]€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYH^[Y[ќЪXЪЫЭ]ЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЪXЪЫЭ]H]ШZ][љ]X[^™UYT^[Y[ќЪXЪЫЭ]
‹\Щ\‹›ЩJNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK”^[Y[ќЪXЪЫЭ]›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KќYT^[Y[ќЪXЪЫЭ]™\Э[HЪXЪЫЭ]В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKЭШ[]€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИШ[]ЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™UYT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭHВ€Y€Ьћ\Лњ[™ЫUURQ

K€›ЭљY\Ћ€›ЩKњ›ЭљY\€•Ш[]‹€[[Э[ќ€ќ[X™\Љ›ЩK[[Э[ќ
K€\N€ќ[X™\Љ›ЩK[[Э[ќ
HЏHИЬ™Y]€€™Xљ]‹€Э]\О€њЬЭY‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[KќШ[]
ПH[[Э[ќВ€‹њ›Щљ[KќШ[][њШXЭ[ЫњЛќ[њЪYќ

NВ€YYQ]™[ќ
‹њ›Щљ[KИ\N€ќШ[]ќ[њШXЭ[Ы€‹X™[€	Эњ›ЭљY\џH	Эќ\_HЬЭY›Ь€		УX]XњК[[Э[ќ
_XJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€ќYK\^[Y[ќИ‹€[Щ[N€ђYЬљUYH‹€XЭ[ЫЋ€ќШ[]ќ[њШXЭ[Ы€‹€]Z[€	Эњ›ЭљY\џH	Эќ\_HЬЭY€Y]Y]N€И[њШXЭ[Ы’Y€љY[[Э[ќ€[[Э[ќB€JNВ€YXЭ]љ]J‹њ›Щљ[K	Эњ›ЭљY\џH^[Y[ќЬЭY€		Э[[Э[ќK
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK”^[Y[ќ›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKШќ^Y\‹XЫЫќXЭ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИќ^Y\€ЫЫќXЭЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫЫќXЭHЬ™X]Pќ^Y\ђЫЫќXЭЫЬљЩ›ЭК‹\Щ\‹›ЩK››ЭHђќ^Y\€ЫЫќXЭ™\]Y\ЭYњ›ЫHЫЬљЩ›ЭЛ€ЉNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђќ^Y\€ЫЫќXЭ›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kќ^Y\ђЫЫќXЭ™\Э[HЫЫќXЭВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKЫY\ЬШYЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИќ^Y\‹\Щ[\€Y\ЬШYЪ[™ИЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]Ь™X]Pќ^Y\”Щ[\“Y\ЬШYЩJ‹\Щ\‹›ЩJNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђќ^Y\‹\Щ[\€Y\ЬШYЩH›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KќYSY\ЬШYЩT™\Э[H™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKЩ›Ы™K\ШШ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ›Ы™HљY[[ќ[YЩ[ЩHЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€]ШШ[ЋВ€ћHВ€
ИШШ[€HHЬ™X]Q›Ы™TШШ[Љ‹В€›ЩXЭY€›ЩKњ›ЩXЭY€ЫЭ\ЩN€›Ь\]Ь€‹€љY[›Ы™N€›ЩK™љY[›Ы™K€ШШ[•\N€›ЩKњШШ[•\B€JJNВ€HШ]Ъ
\њ›ЬЉHВ€™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩHJNВ€B€YXЭ]љ]J‹њ›Щљ[K	ЬШШ[‹њШШ[”™YџH›Ы™HШШ[€ЫЫ\]Y›Ь€	ЬШШ[‹њ›ЩXЭ[Y_K
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK‘›Ы™HШШ[€›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKЩ›Ы™K[Z\ЬЪ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ›Ы™HZ\ЬЪ[Ы€ЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€]Z\ЬЪ[ЫЋВ€ћHВ€Z\ЬЪ[Ы€HЬ™X]Q›Ы™SZ\ЬЪ[ЫЉ‹В€›ЩXЭY€›ЩKњ›ЩXЭY€ЫЭ\ЩN€›Ь\]Ь€‹€љY[›Ы™N€›ЩK™љY[›Ы™K€Шљ™XЭ]™N€›ЩK›Шљ™XЭ]™B€JNВ€HШ]Ъ
\њ›ЬЉHВ€™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩHJNВ€B€YXЭ]љ]J‹њ›Щљ[K	ЫZ\ЬЪ[Ы‹›Z\ЬЪ[Ы”™YџH›Ы™HZ\ЬЪ[Ы€[›™Y›Ь€	ЫZ\ЬЪ[Ы‹њ›ЩXЭ[Y_K
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK‘›Ы™HZ\ЬЪ[Ы€›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKЩ›Ы™KZ[ќ\ќ™[ќ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ›Ы™H[ќ\ќ™[ќ[Ы€ЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€]\ЪОВ€ћHВ€\ЪИHЬ™X]QљY[[ќ\ќ™[ќ[ЫЉ‹В€ЫЭ\ЩN€›Ь\]Ь€‹€\ЬЪYЫ™YО€›ЩK\ЬЪYЫ™YИ‘љY[YЬљ]XЪX[H‚€JNВ€HШ]Ъ
\њ›ЬЉHВ€™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩHJNВ€B€YXЭ]љ]J‹њ›Щљ[K	Э\ЪЛќ\ЪФ™YџH›Ы™H[ќ\ќ™[ќ[Ы€\ЬЪYЫ™Y›Ь€	Э\ЪЛњ›ЩXЭ[Y_K
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK‘љY[[ќ\ќ™[ќ[Ы€›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKЩ›Ы™KXY[ЩY€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИY[ЩY›Ы™HЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€]™XЫЬ™В€ћHВ€™XЫЬ™HЬ™X]PY[ЩY›Ы™SЬ\][ЫЉ‹В€\N€›ЩKќ\K€›ЩXЭY€›ЩKњ›ЩXЭY€ЫЭ\ЩN€›Ь\]Ь€‚€JNВ€HШ]Ъ
\њ›ЬЉHВ€™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩHJNВ€B€ЫЫњЭX™[H™XЫЬ™њ™\Ьќ™Y€™XЫЬ™њ[”™Y€™XЫЬ™[\ќ™Y€™XЫЬ™њЬ^T™Y€™XЫЬ™™›Ь™XШ\Э™Y€™XЫЬ™]Y]™YЋВ€YXЭ]љ]J‹њ›Щљ[K	ЫX™[HY[ЩY›Ы™HЬ\][Ы€ЫЫ\]Y›Ь€	Ь™XЫЬ™њ›ЩXЭ[Y_K
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђY[ЩY›Ы™H›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K™›Ы™PY[ЩY™\Э[HИ\N€›ЩKќ\H™љY[\™\Ьќ‹™XЫЬ™NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭYKШY[ЩY€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ќYHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYHЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™UYT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ›ЩXЭH
‹њ›ЩXЭИЧJK™љ[™
][HO€][KљYOOH›ЩKњ›ЩXЭY
H
‹њ›ЩXЭИЧJVМNВ€ЫЫњЭЬ™\€H‹њ›Щљ[K›Ь™\њЦЩ‹њ›Щљ[K›Ь™\њЛ›[™ЭHWHќ[В€ЫЫњЭ›ЭИH™]И]J
KќТTУФЭљ[™К
NВ€ЫЫњЭ\HH›ЩKќ\Hњ][ЭHЋВ€ЫЫњЭXЭ[ЫњИHВ€][ЭN€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€][ЭSќ[X™\Ћ€S‹TUKIФЭљ[™К‹њ›Щљ[KќYT][Э\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›ЩXЭY€›ЩXЭЛљYќ[€›ЩXЭ[YN€›ЩXЭЛ›[YHЬ™\ЏЛњ›ЩXЭђXЭ]™HЬ›ЬЭ‹€ќ^Y\“[YN€”™YЪ[Ы[ќ^Y\€\ЪИ‹€]X[ќ]N€›ЩKњ]X[ќ]HЊ	Ь›ЩXЭЛќ[љ]ќ[љ]ИџX€љXЩN€ќ[X™\Љ›ЩKњљXЩH›ЩXЭЛњљXЩHЌL
K€Э]\О€њЩ[ќ‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[KќYT][Э\Лќ[њЪYќ
™XЫЬ™
NВ€™]\›€ИќYK[X\љЩ]‹њ][ЭKњЩ[ќ‹	Ь™XЫЬ™њ][ЭSќ[X™\џH][ЭHЩ[ќ›Ь€	Ь™XЫЬ™њ›ЩXЭ[Y_K™XЫЬ™NВ€K€]X[]N€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€[њЬXЭ[Ы“ќ[X™\Ћ€S‹TPKIФЭљ[™К‹њ›Щљ[Kњ]X[]R[њЬXЭ[ЫњЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›ЩXЭ[YN€›ЩXЭЛ›[YHЬ™\ЏЛњ›ЩXЭђXЭ]™HЬ›ЬЭ‹€ЬYN€›ЩK™ЬYH‘^ЬќH‹€ЪXЪЬО€И›[Ъ\Э\™H‹њXЪШYЪ[™И‹ќљ\ЭX[Y™XЭИ‹ќXЩXXљ[]H‹ќ^Y\€ЬXЪYљXШ][Ы€—K€Э]\О€њ\ЬЩY‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kњ]X[]R[њЬXЭ[ЫњЛќ[њЪYќ
™XЫЬ™
NВ€™]\›€ИќYK[ЩЪ\ЭXЬИ‹њ]X[]Kљ[њЬXЭY‹	Ь™XЫЬ™љ[њЬXЭ[Ы“ќ[X™\џH]X[]H[њЬXЭ[Ы€\ЬЩY]	Ь™XЫЬ™™ЬY_K™XЫЬ™NВ€K€ЫЫXЪZ[€Ћ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЪXЪУќ[X™\Ћ€S‹PУУIФЭљ[™К‹њ›Щљ[KЫЫЪZ[ђЪXЪЬЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›ЩXЭ[YN€›ЩXЭЛ›[YHЬ™\ЏЛњ›ЩXЭђXЭ]™HЬ›ЬЭ‹€[\\]\™PО€ќ[X™\Љ›ЩKќ[\\]\™PИЊЉK€ЪXЪЬЪ[ќО€Ињ™KXЫЫЫ‹›ШY[™И‹њ›Э]H[Ыљ]Ь€‹љ[™Щ™€—K€Э]\О€ЫЫ\X[ќ‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[KЫЫЪZ[ђЪXЪЬЛќ[њЪYќ
™XЫЬ™
NВ€™]\›€ИќYK[ЩЪ\ЭXЬИ‹ЫЫШЪZ[‹ЪXЪЩY‹	Ь™XЫЬ™ЪXЪУќ[X™\џHЫЫXЪZ[€ЪXЪИX\љЩY	Ь™XЫЬ™њЭ]\ЯK™XЫЬ™NВ€K€^Ьќ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€^Ьќќ[X™\Ћ€S‹QVIФЭљ[™К‹њ›Щљ[K™^Ьќ™XY[™\ЬЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›ЩXЭ[YN€›ЩXЭЛ›[YHЬ™\ЏЛњ›ЩXЭђXЭ]™HЬ›ЬЭ‹€ШЭ[Y[ќО€Иљ[ќ›ЪXЩH‹њ]X[]HЩ\ќYљXШ]H‹ќXЩXXљ[]HЪY]‹њ›Э]HX[љY™\Э‹ќ^Y\€ЫЫ™љ\›X][Ы€—K€Э]\О€њ™XYKY›Ь‹Y^Ьќ‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[K™^Ьќ™XY[™\ЬЛќ[њЪYќ
™XЫЬ™
NВ€™]\›€ИќYK[ЩЪ\ЭXЬИ‹™^Ьќњ™XYH‹	Ь™XЫЬ™™^Ьќќ[X™\џH^Ьќ™XY[™\ЬИXЪЩ]™\\™Y™XЫЬ™NВ€K€ЫЫќXЭ€

HO€В€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€ЫЫќXЭќ[X™\Ћ€S‹PУУ‹IФЭљ[™К‹њ›Щљ[KЫЫќXЭXЪЩ]Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›ЩXЭ[YN€›ЩXЭЛ›[YHЬ™\ЏЛњ›ЩXЭђXЭ]™HЬ›ЬЭ‹€ќ^Y\“[YN€‹њ›Щљ[Kќ^Y\ђЫЫќXЭЦМOЛќ^Y\“[YH”™YЪ[Ы[ќ^Y\€\ЪИ‹€\›\О€Ињ]X[ќ]H‹њљXЩH‹™[]™\ћHЪ[™ЭИ‹њ]X[]HЬYH‹њ^[Y[ќ™[X\ЩH—K€Э]\О€™Yќ\™XYH‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[KЫЫќXЭXЪЩ]Лќ[њЪYќ
™XЫЬ™
NВ€™]\›€ИќYK[X\љЩ]‹ЫЫќXЭњXЪЩ]Ь™XYH‹	Ь™XЫЬ™ЫЫќXЭќ[X™\џHќ^Y\€ЫЫќXЭXЪЩ]YќY™XЫЬ™NВ€K€™[X\ЩN€

HO€В€ЫЫњЭ]\Э][ЭHH‹њ›Щљ[KќYT][Э\ЦМNВ€ЫЫњЭ™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€™[X\ЩSќ[X™\Ћ€S‹T‘SIФЭљ[™К‹њ›Щљ[Kњ^[Y[ќ™[X\Щ\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€][ЭSќ[X™\Ћ€]\Э][ЭOЛњ][ЭSќ[X™\€ќ[€[[Э[ќ€ќ[X™\Љ›ЩK[[Э[ќ]\Э][ЭOЛњљXЩH›ЩXЭЛњљXЩHЌL
K€Э]\О€њ™[X\ЩY‹€Ь™X]Y]€›ЭВ€NВ€‹њ›Щљ[Kњ^[Y[ќ™[X\Щ\Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[KќШ[]Hќ[X™\Љ‹њ›Щљ[KќШ[]
H
И™XЫЬ™[[Э[ќВ€‹њ›Щљ[KќШ[][њШXЭ[ЫњЛќ[њЪYќ
В€Y€Ьћ\Лњ[™ЫUURQ

K€›ЭљY\Ћ€‘\ШЬ›ЭИ™[X\ЩH‹€[[Э[ќ€™XЫЬ™[[Э[ќ€\N€Ь™Y]‹€Э]\О€њЬЭY‹€Ь™X]Y]€›ЭВ€JNВ€™]\›€ИќYK\^[Y[ќИ‹њ^[Y[ќњ™[X\ЩY‹	Ь™XЫЬ™њ™[X\ЩSќ[X™\џH^[Y[ќ™[X\ЩY›Ь€		Ь™XЫЬ™[[Э[ќK™XЫЬ™NВ€B€NВ€ЫЫњЭ[™\€HXЭ[ЫњЦЭ\WNВ€Y€
Z[™\ЉH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€•[њЭ\ЬќYY[ЩYYHXЭ[Ы€€JNВ€ЫЫњЭЬ›ЭљY\’YXЭ[Ы‹]Z[™XЫЬ™HH[™\Љ
NВ€YYQ]™[ќ
‹њ›Щљ[KИ\N€XЭ[Ы‹X™[€]Z[JNВ€ЩТ[ќYЬ][ЫЉ‹И›ЭљY\’Y[Щ[N€ђYЬљUYH‹XЭ[Ы‹]Z[Y]Y]N€И™XЫЬ™Y€™XЫЬ™љY\K›ЩXЭY€›ЩXЭЛљYќ[HJNВ€YXЭ]љ]J‹њ›Щљ[K]Z[
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђY[ЩYYH›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KќYPY[ЩY™\Э[HИ\K™XЫЬ™NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШZKЬќ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИRHЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭИЫЭ[ќћK›Э]HHHXЭ]™PЫЫќ^
ЉNВ€ЫЫњЭ\HH›ЩKќ\HЫЫ[X[™ЋВ€ЫЫњЭ™\Э[H]ШZ]ќ[ђZJ\KЫЭ[ќћK›Э]K‹њ›Щљ[JNВ€™XЫЬ™ZTќ[Љ‹И\KЫЭ[ќћK›Э]K™\Э[[Щ[N€›ЩK›[Щ[HZS[Щ[Q›Ь•\J\KђRHЉHJNВ€YXЭ]љ]J‹њ›Щљ[K‹њ›Щљ[KZPXЭ]љ]JNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђRH›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШZKЬ™]љY]И€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹™ЫЭ™\›[ЩHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИRH™]љY]И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™PZT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭќ[€H‹њ›Щљ[KZTќ[њЛ™љ[™
][HO€][KљYOOH›ЩKњќ[’Y
H‹њ›Щљ[KZTќ[њЦМNВ€Y€
\ќ[ЉH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђRHќ[€›Э›Э[™€JNВ€ќ[‹њ™]љY]ФЭ]\ИH›ЩK™XЪ\Ъ[Ы€OOHњ™Z™XЭ€Ињ™Z™XЭY€€\›Э™YЋВ€ќ[‹њ™]љY]ЩYћHH\Щ\‹›[YNВ€ќ[‹њ™]љY]ЩY]H™]И]J
KќТTУФЭљ[™К
NВ€ќ[‹њ™]љY]У›ЭHHЭљ[™К›ЩK››ЭH€ЉKќљ[J
NВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›Ь[ZH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€ZKњ™]љY]ЩY‹€]Z[€	Ьќ[‹ќ\_HRHќ[€	Ьќ[‹њ™]љY]ФЭ]\ЯHћH	Э\Щ\‹›[Y_K€Y]Y]N€Иќ[’Y€ќ[‹љYXЪ\Ъ[ЫЋ€ќ[‹њ™]љY]ФЭ]\ИB€JNВ€YXЭ]љ]J‹њ›Щљ[K	Ьќ[‹ќ\_HRHќ[€	Ьќ[‹њ™]љY]ФЭ]\ЯHћH	Э\Щ\‹›[Y_K
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШZKЫЬЪ\Э]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИRHЬЪ\Э][Ы€€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]ZSЬЪ\Э][Ы”™]љY]К‹\Щ\‹›ЩJNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђRHЬЪ\Э][Ы€›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KZSЬЪ\Э][Ы”™\Э[H™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪ[ќ[YЩ[ЩKЭЫЬљЩ›ЭИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЬљЩ›ЭИ[ќ[YЩ[ЩH€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[ќ[YЩ[ЩHHЫЬљЩ›ЭТ[ќ[YЩ[ЩJ‹\Щ\‹›ЩJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›Ь[ZH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€ќЫЬљЩ›ЭЛљ[ќ[YЩ[ЩWЩЩ[™\]Y‹€]Z[€	Ъ[ќ[YЩ[ЩK›[Щ[_H[ќ[YЩ[ЩHЩ[™\]Y›Ь€	Ъ[ќ[YЩ[ЩKXЭ[ЫџK€Y]Y]N€И[ќ[YЩ[ЩRY€[ќ[YЩ[ЩKљY[Щ[N€[ќ[YЩ[ЩK›[Щ[KXЭ[ЫЋ€[ќ[YЩ[ЩKXЭ[Ы€B€JNВ€YXЭ]љ]J‹њ›Щљ[KЫЬљЩ›ЭИ[ќ[YЩ[ЩN€	Ъ[ќ[YЩ[ЩK›™^Э\X
NВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KќЫЬљЩ›ЭТ[ќ[YЩ[ЩT™\Э[H[ќ[YЩ[ЩNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫX\ШY[ЩY€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹›X\ЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИX\Ь\][ЫњИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™PZT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭИЫЭ[ќћK›Э]HHHXЭ]™PЫЫќ^
ЉNВ€ЫЫњЭ\HH›ЩKќ\H™\›Y\‹[ШШ][Ы€ЋВ€ЫЫњЭЪXЪЬЪ[ќH‹њ›Щљ[KXЭ]™PЪXЪЬЪ[ќ›Э]KЪXЪЬЪ[ќПЛ–МHЫЭ[ќћKШ\][В€]XЭ[Ы€H›X\›Ь\][Ы—ШЫЫ\]YЋВ€]]Z[HђY[ЩYX\Ь\][Ы€ЫЫ\]Y€ЋВ€]™XЫЬ™В‚€Y€
\HOOH™љY[^›Ы™HЉHВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€›Ы™Sќ[X™\Ћ€“У‘KIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KIФЭљ[™К‹њ›Щљ[K™љY[›Ы™\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€›Ы™S[YN€›ЩKћ›Ы™S[YH	ШЫЭ[ќћKЬ›Ь›ШЭ\ИђЬ›ЬџH™\Ъ[Y[ЩH›Ы™X€ЫЭ[ќћRY€ЫЭ[ќћKљY€›Э]RY€›Э]KљY€Ь›Ь›ШЭ\О€ЫЭ[ќћKЬ›Ь›ШЭ\И”Э\HЬ›Ь‹€љ\ЪФ›Щљ[N€	ШЫЭ[ќћKњљ\ЪЯH›Э]Hљ\ЪИЪ]	ШЫЭ[ќћKњ]Y]Y_HXШЩ\ЬИ]Y]YX€[љЩY›Ы™TШШ[њО€
‹њ›Щљ[K™›Ы™TШШ[њИЧJKњЫXЩJКK›X\
][HO€][KњШШ[”™Y€][KљY
K€Э]\О€™љY[^›Ы™K\™XYH‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K™љY[›Ы™\Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K™љY[›Ы™\ИH‹њ›Щљ[K™љY[›Ы™\ЛњЫXЩJЊ
NВ€XЭ[Ы€H›X\™љY[Ю›Ы™WШЬ™X]YЋВ€]Z[H	Ь™XЫЬ™ћ›Ы™Sќ[X™\џHЬ™X]Y›Ь€	Ь™XЫЬ™Ь›Ь›ШЭ\ЯHЬ\][ЫњИ[€	ШЫЭ[ќћK›[Y_KВ€H[ЩHY€
\HOOH™XЪ[]K\›Э]HЉHВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€›Э]Sќ[X™\Ћ€“ХUKIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KIФЭљ[™К‹њ›Щљ[K™XЪ[]T›Э]\Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€ЬљYЪ[Ћ€›ЩK›ЬљYЪ[€ЪXЪЬЪ[ќ€\Э[][ЫЋ€›ЩK™\Э[][Ы€
ЫЭ[ќћK™XЪ[]Y\И€HИ“™X\™\Эќ\[XЪ[]HX€€€ђЫЫ[][љ]HXШЩ\ЬИЪ[ќЉK€\њЬЩN€›ЩKњ\њЬЩH“[Э™H[ЬKШ\™HXЪЩ]ЛЬ›ЬЭЛ[™ЫЬљЩ›ЬЩHX[\ИЪ]]Y]]љY[ЩK€‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€›Э]RY€›Э]KљY€Э]\О€™XЪ[]K\›Э]K\™XYH‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K™XЪ[]T›Э]\Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K™XЪ[]T›Э]\ИH‹њ›Щљ[K™XЪ[]T›Э]\ЛњЫXЩJЊ
NВ€XЭ[Ы€H›X\™XЪ[]WЬ›Э]WЬ™XYHЋВ€]Z[H	Ь™XЫЬ™њ›Э]Sќ[X™\џH™\\™Yњ›ЫH	Ь™XЫЬ™›ЬљYЪ[џHИ	Ь™XЫЬ™™\Э[][ЫџKВ€H[ЩHY€
\HOOH™\Ьќ\[Ы€ЉHВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€\Ьќ\[Ы“ќ[X™\Ћ€TФ•TIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KIФЭљ[™К‹њ›Щљ[Kњ›Э]Q\Ьќ\[ЫњЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€ЪXЪЬЪ[ќ€\ЬЭYN€›ЩKљ\ЬЭYH”›ШYЩX]\‹ќY[Ь€Ы[љXИXШЩ\ЬИ[^H™\ЬќYћHљY[X[K€‹€Щ]™\љ]N€›ЩKњЩ]™\љ]H
ЫЭ[ќћKњљ\ЪИOOH’YЪ€ИљYЪ€€›YY][HЉK€Z]YШ][ЫЋ€›ЩK›Z]YШ][Ы€”™\›Э]H›ЭYЪ[\›]HЪXЪЬЪ[ќ›ЭYћHY™™XЭYX[\Л[™[Ыљ]Ь€›ЭљY\€[™Щ™‹€‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€›Э]RY€›Э]KљY€Э]\О€›Z]YШ][Ы‹\™XYH‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[Kњ›Э]Q\Ьќ\[ЫњЛќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[Kњ›Э]Q\Ьќ\[ЫњИH‹њ›Щљ[Kњ›Э]Q\Ьќ\[ЫњЛњЫXЩJЊ
NВ€XЭ[Ы€H›X\њ›Э]WЩ\Ьќ\[Ы—Ь™XЫЬ™YЋВ€]Z[H	Ь™XЫЬ™™\Ьќ\[Ы“ќ[X™\џH™XЫЬ™Y]	ШЪXЪЬЪ[ќHЪ]	Ь™XЫЬ™њЩ]™\љ]_HЩ]™\љ]KВ€H[ЩHY€
\HOOHњљ\ЪЛ[^Y\€ЉHВ€ЫЫњЭШЫЬ™HHЫЭ[ќћKњљ\ЪИOOH’YЪ€И€€ЫЭ[ќћKњљ\ЪИOOH“YY][H€ИN€НВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€^Y\“ќ[X™\Ћ€’TТЛIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KIФЭљ[™К‹њ›Щљ[K›X\љ\ЪУ^Y\њЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€^Y\њО€›ЩK›^Y\њИИњ›ШYXШЩ\ЬИ‹Ы[љXИ™XXЪ‹›X\љЩ][Э™[Y[ќ‹ќЩX]\€^ЬЭ\™H‹ќЫЬљЩ›ЬЩHЫЭ™\YЩH—K€ШЫЬ™K€ЫЭ[ќћRY€ЫЭ[ќћKљY€›Э]RY€›Э]KљY€Э]\О€њљ\ЪЛ[^Y\‹YЩ[™\]Y‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K›X\љ\ЪУ^Y\њЛќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K›X\љ\ЪУ^Y\њИH‹њ›Щљ[K›X\љ\ЪУ^Y\њЛњЫXЩJЊ
NВ€XЭ[Ы€H›X\њљ\ЪЧЫ^Y\—ЩЩ[™\]YЋВ€]Z[H	Ь™XЫЬ™›^Y\“ќ[X™\џHЩ[™\]YЪ]	ЬШЫЬ™_HЫЫ\ЬЪ]Hљ\ЪИШЫЬ™KВ€H[ЩHY€
\HOOH™]љY[ЩHЉHВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€XЪЩ]ќ[X™\Ћ€PTQU’QSђСKIШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KIФЭљ[™К‹њ›Щљ[K›X\]љY[ЩTXЪЩ]Л›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€ЫЭ[ќћRY€ЫЭ[ќћKљY€›Э]RY€›Э]KљY€]љY[ЩN€В€	Щ‹њ›Щљ[K™\›Y\“ШШ][ЫњЛ›[™ЭH\›Y\€ШШ][ЫњШ€	Щ‹њ›Щљ[K™љY[›Ы™\Л›[™ЭHљY[›Ы™\Ш€	Щ‹њ›Щљ[K™XЪ[]T›Э]\Л›[™ЭHXЪ[]H›Э]\Ш€	Щ‹њ›Щљ[Kњ›Э]Q\Ьќ\[ЫњЛ›[™ЭH\Ьќ\[ЫњШ€	Щ‹њ›Щљ[K›X\љ\ЪУ^Y\њЛ›[™ЭHљ\ЪИ^Y\њШ€	Щ‹њ›Щљ[K›X\[њЪYЪЛ›[™ЭHX\[њЪYЪШ€K€Э]\О€™]љY[ЩK\XЪЩ]\™XYH‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K›X\]љY[ЩTXЪЩ]Лќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K›X\]љY[ЩTXЪЩ]ИH‹њ›Щљ[K›X\]љY[ЩTXЪЩ]ЛњЫXЩJЊ
NВ€XЭ[Ы€H›X\™]љY[ЩWЬXЪЩ]Ь™XYHЋВ€]Z[H	Ь™XЫЬ™њXЪЩ]ќ[X™\џHЫЫ\[Y›Ь€	ШЫЭ[ќћK›[Y_HX\Ь\][ЫњЛВ€H[ЩHВ€™XЫЬ™HВ€Y€Ьћ\Лњ[™ЫUURQ

K€ШШ][Ы“ќ[X™\Ћ€ђT“QT‹IШЫЭ[ќћKљYќХ\\ђШ\ЩJ
_KIФЭљ[™К‹њ›Щљ[K™\›Y\“ШШ][ЫњЛ›[™Э
ИJKњYЭ\ќ
ЛЊЉ_X€\›Y\“[YN€›ЩK™\›Y\“[YH”ќ\[›ЩXЩ\€Ь›Э\‹€ЫЭ[ќћRY€ЫЭ[ќћKљY€›Э]RY€›Э]KљY€]€ЫЭ[ќћK›]€™О€ЫЭ[ќћK›™Л€XШЩ\ЬУ™YYО€›ЩKXШЩ\ЬУ™YYИ“ЭЛX[™ЪY›ЪXЩK›Э]HЭ\ЬќXШЩ\ЬЪX›HZ[љ[™Л[™ќ^Y\€ЫЫ›™XЭ[Ы‹€‹€Э]\О€›X\Y‹€Ь™X]Y]€™]И]J
KќТTУФЭљ[™К
B€NВ€‹њ›Щљ[K™\›Y\“ШШ][ЫњЛќ[њЪYќ
™XЫЬ™
NВ€‹њ›Щљ[K™\›Y\“ШШ][ЫњИH‹њ›Щљ[K™\›Y\“ШШ][ЫњЛњЫXЩJЊ
NВ€XЭ[Ы€H›X\™\›Y\—ЫШШ][Ы—ЫX\YЋВ€]Z[H	Ь™XЫЬ™›ШШ][Ы“ќ[X™\џHX\Y›Ь€	Ь™XЫЬ™™\›Y\“[Y_H[€	ШЫЭ[ќћK›[Y_KВ€B‚€YX\[њЪYЪ
‹њ›Щљ[KВ€\N€XЭ[Ы‹€X™[€]Z[њЬ]
‹€ЉVМK€]Z[€›Э]S[YN€›Э]K›[YK€ЪXЪЬЪ[ќ€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›X\И‹€[Щ[N€“X\И‹€XЭ[Ы‹€]Z[€Y]Y]N€И™XЫЬ™Y€™XЫЬ™љY\KЫЭ[ќћRY€ЫЭ[ќћKљY›Э]RY€›Э]KљYB€JNВ€YXЭ]љ]J‹њ›Щљ[K]Z[
NВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭK“X\›ЭHЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›X\Y[ЩY™\Э[HИ\K™XЫЬ™NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЩ[ќЬ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYЩ[ќ[›љ[™И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™PZT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭЫШ[HЭљ[™К›ЩK™ЫШ[ђЬ™X]H[€YЬљS™^\ИЬ›ЬЬЛ[[Щ[H[‹€ЉKќљ[J
NВ€ЫЫњЭ[€HќZ[YЩ[ќ[Љ‹ЫШ[\Щ\ЉNВ€‹њ›Щљ[KYЩ[ќ[њЛќ[њЪYќ
[ЉNВ€‹њ›Щљ[KYЩ[ќ[њИH‹њ›Щљ[KYЩ[ќ[њЛњЫXЩJLЉNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›Ь[ZH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€YЩ[ќњ[—ШЬ™X]Y‹€]Z[€YЩ[ќ[€Ь™X]YЪ]	Ь[‹њЭ\Л›[™ЭHЫЫЭ\Л€Y]Y]N€И[’Y€[‹љYЫШ[B€JNВ€YXЭ]љ]J‹њ›Щљ[KYЩ[ќ[€Ь™X]Y€	ЩЫШ[X
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШЫЭYXYЩ[ќЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЭYYЩ[ќЭ]\И€JNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЭYYЩ[ќHЫЭYYЩ[ќ[њЬ\™[ЮTXЪЩ]
‹\Щ\ЉNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШЫЭYXYЩ[ќЬќ[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЭYYЩ[ќќ[њИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫШ[HЭљ[™К›ЩK™ЫШ[”ќ[€HЫЫќ›ЫYYЬљS™^\ИЫЭYXYЩ[ќZ\ЬЪ[Ы‹€ЉKќљ[J
NВ€ЫЫњЭќ[€HЬ™X]PЫЭYYЩ[ќќ[Љ‹\Щ\‹ЫШ[И]]Ы›Ы[Э\О€›ЩK]]Ы›Ы[Э\ИOOHќYHJNВ€]™\Э[HИќ[€NВ€Y€
›ЩK™^XЭ]HOOHќYH›ЩK\›Э™YOOHќYJHВ€™\Э[H]ШZ]^XЭ]PЫЭYYЩ[ќќ[Љ‹\Щ\‹ќ[‹И\›Э™Y€›ЩK\›Э™YOOHќYHJNВ€B€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђЫЭYYЩ[ќ›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЭYYЩ[ќ™\Э[H™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШЫЭYXYЩ[ќЭXЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЭYYЩ[ќ]Y]YH^XЭ][Ы€€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]ЫЭYYЩ[ќXЪК‹\Щ\‹И\›Э™Y€›ЩK\›Э™YOOHќYHJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЭYYЩ[ќXЪИH™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШЫЭYXYЩ[ќЭЫЫ][\]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЭYYЩ[ќЫЫ[\]\И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ћHВ€ЫЫњЭ[\]HHЬ™X]PЫЭYYЩ[ќЫЫ[\]J‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЭYYЩ[ќЫЫ[\]HH[\]NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€HШ]Ъ
\њ›ЬЉHВ€™]\›€Щ[™
™\Л\њ›Ь‹њЭ]\РЫЩHИ\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩH•ЫЫ[\]HЫЭ[›Э™HЬ™X]Y€JNВ€B€B‚€Y€
\›њ][YHOOH‹Ш\KШЫЭYXYЩ[ќШ\›Э™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЭYYЩ[ќ\›Э[€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™PZT›Щљ[J‹њ›Щљ[JNВ€]\›Э[™\Э[Hќ[В€Y€
›ЩKќ[\]RY
HВ€ЫЫњЭ[\]HH‹њ›Щљ[KЫЭYYЩ[ќЫЫ[\]\Л™љ[™
][HO€][KљYOOH›ЩKќ[\]RY
NВ€Y€
][\]JH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђЫЭYYЩ[ќЫЫ[\]H›Э›Э[™€JNВ€Y€
\Щ\‹њ›ЫHOOHYZ[€ЉH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€“Ы›HYZ[€Ш[€\›Э™HЫЫ[\]\И€JNВ€[\]KњЭ]\ИH\›Э™Y][\]HЋВ€[\]K\›Э™YћHH\Щ\‹™[XZ[В€[\]K\›Э™Y]H™]И]J
KќТTУФЭљ[™К
NВ€[\]Kќ\]Y]H[\]K\›Э™Y]В€\›Э[™\Э[HИ[\]HNВ€ЫЭYYЩ[ќ]Y]
‹њ›Щљ[KВ€\N€ќЫЫ][\]KX\›Э™Y‹€Э]\О€\›Э™Y][\]H‹€Э[[X\ћN€	Э[\]Kќ]_H\›Э™Y›Ь€ќ]\™HЭ\\ќљ\ЩYљ[™[™Л€XЭЬЋ€\Щ\‹™[XZ[€[\]RY€[\]KљY€JNВ€B€Y€
›ЩKњќ[’Y
HВ€ЫЫњЭќ[€H‹њ›Щљ[KЫЭYYЩ[ќќ[њЛ™љ[™
][HO€][KљYOOH›ЩKњќ[’Y
NВ€Y€
\ќ[ЉH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђЫЭYYЩ[ќќ[€›Э›Э[™€JNВ€\›Э[™\Э[H]ШZ]^XЭ]PЫЭYYЩ[ќќ[Љ‹\Щ\‹ќ[‹И\›Э™Y€ќYHJNВ€B€Y€
X\›Э[™\Э[
H™]\›€Щ[™
™\ЛИ\њ›ЬЋ€”›ЭљYHќ[’YЬ€[\]RYИ\›Э™K€€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЭYYЩ[ќ\›Э[H\›Э[™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШЫЭYXYЩ[ќШ]Y]€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЭYYЩ[ќ]Y]€JNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЭYYЩ[ќ]Y]H
‹њ›Щљ[KЫЭYYЩ[ќ]Y]ЧJKњЫXЩJL
NВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЩ[ќЩ^XЭ]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYЩ[ќ^XЭ][Ы€€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€[њЭ\™PZT›Щљ[J‹њ›Щљ[JNВ€ЫЫњЭ[€H‹њ›Щљ[KYЩ[ќ[њЛ™љ[™
][HO€][KљYOOH›ЩKњ[’Y
H‹њ›Щљ[KYЩ[ќ[њЦМNВ€Y€
\[ЉH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђYЩ[ќ[€›Э›Э[™€JNВ€ЫЫњЭ\›Э™YH›ЩK\›Э™YOOH[ЩNВ€Y€
X\›Э™Y
H™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€ђYЩ[ќ^XЭ][Ы€™\]Z\™\ИЬ\]Ь€\›Э[€€JNВ€ЫЫњЭ^XЭ][Ы€H]ШZ]^XЭ]PYЩ[ќ[“Шљ™XЭ
‹\Щ\‹[‹›ЩK››ЭHђ\›Э™Yњ›ЫHYЩ[ќЫЫ[X[™Щ[ќ\€ЉNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђYЩ[ќ›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЩ[ќШњљYYљ[™И€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYЩ[ќњљYYљ[™ЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭњљYYљ[™ИHYЩ[ќњљYYљ[™К‹\Щ\‹›ЩKњ\њЬЩH™ЫЭ™\››Y[ќ™\Щ[ќ][Ы€ЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KњљYYљ[™Ф™\Э[HњљYYљ[™ОВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЩ[ќЬ™X\ЫЫљ[™Л[[™ЭXYЩH€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYЩ[ќ™X\ЫЫљ[™И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫЫ[X[™HЭљ[™К›ЩKЫЫ[X[™”™]љY]И™^\И™X\ЫЫљ[™И[™[™ЭXYЩH›ЩXЭ[Ы€ЉKќљ[J
NВ€ЫЫњЭ[Щ[TЪYЫ[HЫЫќ™\њШ][Ы“[Щ[TЪYЫ[
ЫЫ[X[™
NВ€ЫЫњЭY[[ЬљY\ИH™]љY]™PYЩ[ќY[[ЬљY\К‹њ›Щљ[KЫЫ[X[™ЉNВ€ЫЫњЭ™X\ЫЫљ[™ИHZT™X\ЫЫљ[™ФЫ\ЪЭ
‹\Щ\‹ЫЫ[X[™[Щ[TЪYЫ[Y[[ЬљY\ЛИ[ЩN€›ЩK›[ЩK[ЩPЫЫќ^€›ЩK›[ЩPЫЫќ^\™Щ][™ЭXYЩN€›ЩKќ\™Щ][™ЭXYЩHJNВ€ЫЫњЭ[™Ъ[™HH™X\ЫЫљ[™У[™ЭXYЩT›ЩXЭ[Ы‘[™Ъ[™J‹\Щ\‹ЫЫ[X[™И[Щ[TЪYЫ[Y[[ЬљY\Л™X\ЫЫљ[™Л\™Щ][™ЭXYЩN€›ЩKќ\™Щ][™ЭXYЩHJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›Ь[ZH‹€[Щ[N€ђRH‹€XЭ[ЫЋ€YЩ[ќњ™X\ЫЫљ[™ЧЫ[™ЭXYЩWЬ›ЩXЭ[Ы—Щ[™Ъ[ќ‹€]Z[€™X\ЫЫљ[™И[™ЭXYЩH[™Ъ[ќ™]љY]ЩY	Щ[™Ъ[™Kњ™XYPЫЭ[ќKЙЩ[™Ъ[™KќЭ[H^Y\ЉКK€Y]Y]N€И[™Ъ[™RY€[™Ъ[™KљYЭ]\О€[™Ъ[™KњЭ]\ИK€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kњ™X\ЫЫљ[™У[™ЭXYЩT›ЩXЭ[Ы€H[™Ъ[™NВ€Э]Kњ™X\ЫЫљ[™ИH™X\ЫЫљ[™ОВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЩ[ќШЫЫ[X[™€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИYЩ[ќЫЫ[X[™И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭШ[›ЫљXШ[ЫЫ[X[™[™ЭXYЩHHШ[›ЫљXШ[›ЪXЩS[™ЭXYЩJ›ЩKќ\™Щ][™ЭXYЩH›ЩK›[™ЭXYЩH\Щ\‹›[™ЭXYЩH™[€ЉNВ€ЫЫњЭШ[›ЫљXШ[ЫЫ[X[™[њ][ЩHH›ЩKљ[њ][ЩH\HЋВ€ЫЫњЭЫЬњ™[][Ы’YHЩ[™\Ъ\Х›ЪXЩPЫЬњ™[][Ы’Y
›ЩKЫЬњ™[][Ы’Y
NВ€ЫЫњЭ›Э]TЭ\ќY]H]K››ЭК
NВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€ЫЫ[X[™\›Э]K\™XЩZ]™Y‹€ЭXШЩ\ЬО€ќYK€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€ЫЭ\ЩQќ[Э[ЫЋ€\KYЩ[ќЫЫ[X[™‚€JNВ€ЫЫњЭЬ[ђZS]]™T™\Э[H]ШZ]ќ[“™^\УЬ[ђZS]]™PYЩ[ќЫЫ[X[™
‹\Щ\‹В€‹‹›ЩK€ЫЬњ™[][Ы’Y€[њ][ЩN€›ЩKљ[њ][ЩH\H‚€JNВ€Y€
Ь[ђZS]]™T™\Э[
HВ€Ь[ђZS]]™T™\Э[›Y]Y]HHВ€‹‹ЉЬ[ђZS]]™T™\Э[›Y]Y]HЯJK€[™ЭXYЩN€Ш[›ЫљXШ[ЫЫ[X[™[™ЭXYЩK€\™Щ][™ЭXYЩN€Ш[›ЫљXШ[ЫЫ[X[™[™ЭXYЩK€[њ][ЩN€Ш[›ЫљXШ[ЫЫ[X[™[њ][ЩB€NВ€ЫЫ[X[™™XЫЬ™
‹\Щ\‹›ЩKЫЫ[X[™›ЩKќ^€‹Ь[ђZS]]™T™\Э[
NВ€ЫЫњЭ™^\Ф™\ЬЫњЩHH›Ь›X[^™S™^\Ф™\ЬЫњЩQ[ќ™[ЬJЬ[ђZS]]™T™\Э[В€ЫЬњ™[][Ы’Y€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€ЫЫ[X[™€›ЩKЫЫ[X[™›ЩKќ^€‹€[њ][ЩN€›ЩKљ[њ][ЩH\H‹€Э]][ЩN€›ЩK›Э]][ЩH€‹€[™ЭXYЩN€›ЩKќ\™Щ][™ЭXYЩH›ЩK›[™ЭXYЩH\Щ\‹›[™ЭXYЩB€JNВ€ЫЫњЭЩ[™\Ъ\Ф™\ЬЫњЩHH›Ь›X[^™QЩ[™\Ъ\РЫЫ[X[™™\ЬЫњЩJЬ[ђZS]]™T™\Э[В€ЫЬњ™[][Ы’Y€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€ЫЫ[X[™€›ЩKЫЫ[X[™›ЩKќ^€‹€[њ][ЩN€›ЩKљ[њ][ЩH\H‹€Э]][ЩN€›ЩK›Э]][ЩH€‹€[™ЭXYЩN€›ЩKќ\™Щ][™ЭXYЩH›ЩK›[™ЭXYЩH\Щ\‹›[™ЭXYЩB€JNВ€\]S™^\ФЩ\ЬЪ[ЫђЫЫќ^
‹›ЩKЫЫ[X[™›ЩKќ^€‹™^\Ф™\ЬЫњЩJNВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€њ™\ЬЫњЩK[›Ь›X[^™Y‹€ЭXШЩ\ЬО€›ЫЫX[Љ™^\Ф™\ЬЫњЩKњ™\ЬЫњЩJK€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€[ќ[ќ€™^\Ф™\ЬЫњЩKљ[ќ[ќ€™\ЬЫњЩQљY[Щ[XЭY€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњ™\ЬЫњЩQљY[Щ[XЭY€™\ЬЫњЩS[™Э€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњ™\ЬЫњЩS[™Э€Ш[љ]^™Y[™Э€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњШ[љ]^™Y[™Э€ЫЭ\ЩQќ[Э[ЫЋ€њќ[“™^\УЬ[ђZS]]™PYЩ[ќЫЫ[X[™‚€JNВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€ЫЫ[X[™\›Э]K\™]\›™Y‹€ЭXШЩ\ЬО€ќYK€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€[ќ[ќ€™^\Ф™\ЬЫњЩKљ[ќ[ќ€Э]\О€Њ€™\ЬЫњЩQљY[Щ[XЭY€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњ™\ЬЫњЩQљY[Щ[XЭY€™\ЬЫњЩS[™Э€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњ™\ЬЫњЩS[™Э€Ш[љ]^™Y[™Э€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњШ[љ]^™Y[™Э€[\ЩY[YS\О€]K››ЭК
HH›Э]TЭ\ќY]€ЫЭ\ЩQќ[Э[ЫЋ€\KYЩ[ќЫЫ[X[™›Ь[ZWЫ]]™H‚€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЫ[X[™™\Э[HЬ[ђZS]]™T™\Э[В€Э]K›™^\Ф™\ЬЫњЩHH™^\Ф™\ЬЫњЩNВ€Э]K™Щ[™\Ъ\Ф™\ЬЫњЩHHЩ[™\Ъ\Ф™\ЬЫњЩNВ€Э]K›Ь[ђZS]]™PYЩ[ќHЬ[ђZS]]™T™\Э[›Y]Y]OЛ›Ь[ђZS]]™PYЩ[ќќ[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B€ЫЫњЭИ™\Э[ЫЫ\[љ[Ы•[™\њЭ[™[™ЛЫЫ\[љ[Ы”›Э]SЭ]ЫЫYHHH]ШZ]ќ[ђЫЫ\[љ[Ы”ШY™PYЩ[ќЫЫ[X[™
‹\Щ\‹В€‹‹›ЩK€ЫЬњ™[][Ы’Y€[њ][ЩN€›ЩKљ[њ][ЩH\H‚€JNВ€™\Э[›Y]Y]HHВ€‹‹Љ™\Э[›Y]Y]HЯJK€[™ЭXYЩN€Ш[›ЫљXШ[ЫЫ[X[™[™ЭXYЩK€\™Щ][™ЭXYЩN€Ш[›ЫљXШ[ЫЫ[X[™[™ЭXYЩK€[њ][ЩN€Ш[›ЫљXШ[ЫЫ[X[™[њ][ЩB€NВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€љ[ќ[ќ\Щ[XЭY‹€ЭXШЩ\ЬО€ќYK€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€[ќ[ќ€™\Э[Лљ[ќ[ќќ[љЫ›ЭЫ€‹€ЫЭ\ЩQќ[Э[ЫЋ€њќ[ђЫЫ\[љ[Ы”ШY™PYЩ[ќЫЫ[X[™‚€JNВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€њ™\ЬЫњЩKYЩ[™\]Y‹€ЭXШЩ\ЬО€›ЫЫX[Љ™\Э[Лњ™\ЬЫњЩH™\Э[Л›Y\ЬШYЩH™\Э[Л[њЭЩ\€™\Э[ЛњЭ[[X\ћJK€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€[ќ[ќ€™\Э[Лљ[ќ[ќќ[љЫ›ЭЫ€‹€™\ЬЫњЩS[™Э€Эљ[™К™\Э[Лњ™\ЬЫњЩH™\Э[Л›Y\ЬШYЩH™\Э[Л[њЭЩ\€™\Э[ЛњЭ[[X\ћH€ЉK›[™Э€ЫЭ\ЩQќ[Э[ЫЋ€њќ[ђЫЫ\[љ[Ы”ШY™PYЩ[ќЫЫ[X[™‚€JNВ€ЫЫњЭ™^\Ф™\ЬЫњЩHH›Ь›X[^™S™^\Ф™\ЬЫњЩQ[ќ™[ЬJ™\Э[В€ЫЬњ™[][Ы’Y€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€ЫЫ[X[™€›ЩKЫЫ[X[™›ЩKќ^€‹€[њ][ЩN€›ЩKљ[њ][ЩH\H‹€Э]][ЩN€›ЩK›Э]][ЩH€‹€[™ЭXYЩN€›ЩKќ\™Щ][™ЭXYЩH›ЩK›[™ЭXYЩH\Щ\‹›[™ЭXYЩK€ЫЫ\[љ[Ы•[™\њЭ[™[™Л€ЫЫ\[љ[Ы”›Э]SЭ]ЫЫYB€JNВ€ЫЫњЭЩ[™\Ъ\Ф™\ЬЫњЩHH›Ь›X[^™QЩ[™\Ъ\РЫЫ[X[™™\ЬЫњЩJ™\Э[В€ЫЬњ™[][Ы’Y€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€ЫЫ[X[™€›ЩKЫЫ[X[™›ЩKќ^€‹€[њ][ЩN€›ЩKљ[њ][ЩH\H‹€Э]][ЩN€›ЩK›Э]][ЩH€‹€[™ЭXYЩN€›ЩKќ\™Щ][™ЭXYЩH›ЩK›[™ЭXYЩH\Щ\‹›[™ЭXYЩK€ЫЫ\[љ[Ы•[™\њЭ[™[™Л€ЫЫ\[љ[Ы”›Э]SЭ]ЫЫYB€JNВ€ЛИЩY\HYШXЮHЫЫ[X[™™\Э[™\ЬЫњЩH[YЫ™YЪ]HШ[›ЫљXШ[ЬXZШX›H[ќ™[ЬK‚€ЛИ\И™]™[ќИ™\Щ[ќ][Ы‹[Ы›HЪ]\ЬXЩHY™™\™[Щ\Ињ›ЫHЬ][™ИH]]Ьљ]]]™H™\ЬЫњЩK‚€™\Э[њ™\ЬЫњЩHH™^\Ф™\ЬЫњЩKњ™\ЬЫњЩNВ€\]S™^\ФЩ\ЬЪ[ЫђЫЫќ^
‹›ЩKЫЫ[X[™›ЩKќ^€‹™^\Ф™\ЬЫњЩJNВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€њ™\ЬЫњЩK[›Ь›X[^™Y‹€ЭXШЩ\ЬО€›ЫЫX[Љ™^\Ф™\ЬЫњЩKњ™\ЬЫњЩJK€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€[ќ[ќ€™^\Ф™\ЬЫњЩKљ[ќ[ќ€™\ЬЫњЩQљY[Щ[XЭY€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњ™\ЬЫњЩQљY[Щ[XЭY€™\ЬЫњЩS[™Э€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњ™\ЬЫњЩS[™Э€Ш[љ]^™Y[™Э€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњШ[љ]^™Y[™Э€ЫЭ\ЩQќ[Э[ЫЋ€››Ь›X[^™S™^\Ф™\ЬЫњЩQ[ќ™[ЬH‚€JNВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€ЫЫ[X[™\›Э]K\™]\›™Y‹€ЭXШЩ\ЬО€ќYK€›Э]N€‹Ш\KШYЩ[ќШЫЫ[X[™‹€[ќ[ќ€™^\Ф™\ЬЫњЩKљ[ќ[ќ€Э]\О€Њ€™\ЬЫњЩQљY[Щ[XЭY€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњ™\ЬЫњЩQљY[Щ[XЭY€™\ЬЫњЩS[™Э€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњ™\ЬЫњЩS[™Э€Ш[љ]^™Y[™Э€™^\Ф™\ЬЫњЩK™XYЫ›ЬЭXЬЛњШ[љ]^™Y[™Э€[\ЩY[YS\О€]K››ЭК
HH›Э]TЭ\ќY]€ЫЭ\ЩQќ[Э[ЫЋ€\KYЩ[ќЫЫ[X[™‚€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЫ[X[™™\Э[H™\Э[В€Э]KЫЫ\[љ[Ы•[™\њЭ[™[™ИHЫЫ\[љ[Ы•[™\њЭ[™[™ОВ€Э]KЫЫ\[љ[Ы”›Э]SЭ]ЫЫYHHЫЫ\[љ[Ы”›Э]SЭ]ЫЫYNВ€Э]K›™^\Ф™\ЬЫњЩHH™^\Ф™\ЬЫњЩNВ€Э]K™Щ[™\Ъ\Ф™\ЬЫњЩHHЩ[™\Ъ\Ф™\ЬЫњЩNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЩ[ќШЫЫќ™\њШ][Ы‹XЫЬ™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЫќ™\њШ][Ы€ЫЬ™H€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫЫ[X[™HЭљ[™К›ЩKЫЫ[X[™›ЩKќ^€ЉKќљ[J
NВ€ЫЫњЭXЪ\Ъ[Ы€H]ШZ]™^\РЫЫќ™\њШ][ЫђЫЬ™QXЪ\Ъ[ЫЉ‹\Щ\‹ЫЫ[X[™В€[ЩN€›ЩK›[ЩK€[ЩPЫЫќ^€›ЩK›[ЩPЫЫќ^€\™Щ][™ЭXYЩN€›ЩKќ\™Щ][™ЭXYЩH›ЩK›[™ЭXYЩH\Щ\‹›[™ЭXYЩK€ЫЭ\ЩN€›ЩKњЫЭ\ЩHќЩX€‹€ШШ][ЫЋ€›ЩK›ШШ][Ы€›ЩKЭ\њ™[ќШШ][Ы€ќ[€JNВ€ЫЫ[X[™™XЫЬ™
‹\Щ\‹ЫЫ[X[™В€[ќ[ќ€ЫЫќ™\њШ][Ы—ШЫЬ™K‰ЩXЪ\Ъ[Ы‹ќ\_X€™\ЬЫњЩN€XЪ\Ъ[Ы‹њ™\ЬЫњЩK€Э]\О€ЫЫ\]Y‹€Y]Y]N€ИЫЫќ™\њШ][ЫђЫЬ™N€XЪ\Ъ[Ы‹™Y\™XЭЩXЭ[ЫЋ€XЪ\Ъ[Ы‹ќЫЬљЩ›ЭИXЪ\Ъ[Ы‹™\™XЭXЭ[Ы€YЩ[ќ€B€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЫќ™\њШ][ЫђЫЬ™HHXЪ\Ъ[ЫЋВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[Ш\™KXЫЫX›Ь][Ы‹ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭ™YЪ\ЭћHH™^\ТX[Ш\™PЫЫX›Ь][Ы”ќ[ќ[YKњ›ЭљY\”™YЪ\ЭћJ›ШЩ\ЬЛ™[ќЉNВ€ЫЫњЭЫЭ\ЩT™XY[™\ЬИH™^\ТX[Ш\™PЫЫX›Ь][Ы”ќ[ќ[YKњЫЭ\ЩT™XY[™\ЬУX]љ^
›ШЩ\ЬЛ™[ќЉNВ€ЫЫњЭ›ЭљY\‘]љY[ЩHH™^\ТX[Ш\™PЫЫX›Ь][Ы”ќ[ќ[YKњ›ЭљY\‘]љY[ЩJ›ШЩ\ЬЛ™[ќЉNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€ќ[ќ[YN€›™^\ЛZX[Ш\™KXЫЫX›Ь][Ы‹\ќ[ќ[YH‹€›YЬО€™YЪ\ЭћK™›YЬЛ€™YЪ\ЭћK€ЫЭ\ЩT™XY[™\ЬЛ€›ЭљY\‘]љY[ЩK€Ш\™О€™^\ТX[Ш\™PЫЫX›Ь][Ы”ќ[ќ[YK”•S•SQWРРT‘Л€›ФЩXЬ™][Y\О€ќYK€›СXYЫ›ЬЪ\О€ќYK€›Ф™\ШЬљXљ[™О€ќYK€›С[Y\™Щ[ЮQ\Ь]Ъ€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[Ш\™KXЫЫX›Ь][Ы‹ЬЫЭ\Щ\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\ТX[Ш\™PЫЫX›Ь][Ы”ќ[ќ[YKњЫЭ\ЩT™XY[™\ЬУX]љ^
›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[Ш\™KXЫЫX›Ь][Ы‹Щ]љY[ЩH€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\ТX[Ш\™PЫЫX›Ь][Ы”ќ[ќ[YKњ›ЭљY\‘]љY[ЩJ›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[Ш\™KXЫЫX›Ь][Ы‹Щљ\‹ЬЭ[[X\ћH€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\ТX[Ш\™PЫЫX›Ь][Ы”ќ[ќ[YK™љ\”Ш[™›ЮЭ[[X\ћJИ[ќЋ€›ШЩ\ЬЛ™[ќ€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[Ш\™KXЫЫX›Ь][Ы‹ШXЭ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H™^\ТX[Ш\™PЫЫX›Ь][Ы”ќ[ќ[YKњ™\\™PXЭ[ЫЉ›ЩKВ€[ќЋ€›ШЩ\ЬЛ™[ќ‹€ЫЫ™љ\›YY€›ЫЫX[Љ›ЩKЫЫ™љ\›YY
K€Ы[љXЪX[”™]љY]ЩY€›ЫЫX[Љ›ЩKЫ[љXЪX[”™]љY]ЩY
B€JNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЪX[Ш\™KXЫЫX›Ь][Ы‹Щ^XЭ]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H™^\ТX[Ш\™PЫЫX›Ь][Ы”ќ[ќ[YK][\^XЭ][ЫЉ›ЩKВ€[ќЋ€›ШЩ\ЬЛ™[ќ‹€ЫЫ™љ\›YY€›ЫЫX[Љ›ЩKЫЫ™љ\›YY
K€Ы[љXЪX[”™]љY]ЩY€›ЫЫX[Љ›ЩKЫ[љXЪX[”™]љY]ЩY
B€JNВ€™]\›€Щ[™
™\Л™\Э[››С^XЭ][Ыђ]]Ьљ^™YИH€Њ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЬљXЭ[\™KXЫЫX›Ь][Ы‹ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€ЫЫњЭ™YЪ\ЭћHH™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YKњ›ЭљY\”™YЪ\ЭћJ›ШЩ\ЬЛ™[ќЉNВ€ЫЫњЭЫЭ\ЩT™XY[™\ЬИH™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YKњЫЭ\ЩT™XY[™\ЬУX]љ^
›ШЩ\ЬЛ™[ќЉNВ€ЫЫњЭ›ЭљY\‘]љY[ЩHH™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YKњ›ЭљY\‘]љY[ЩJ›ШЩ\ЬЛ™[ќЉNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€ќ[ќ[YN€›™^\ЛXYЬљXЭ[\™KXЫЫX›Ь][Ы‹\ќ[ќ[YH‹€›YЬО€™YЪ\ЭћK™›YЬЛ€™YЪ\ЭћK€ЫЭ\ЩT™XY[™\ЬЛ€›ЭљY\‘]љY[ЩK€Ш\™О€™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YK”•S•SQWРРT‘Л€™]љY]Ф]Y]YN€В€^\ќ€™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YK™Щ]^\ќ™]љY]Ф]Y]YJ
K€YZ[Ћ€™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YK™Щ]YZ[”™]љY]Ф]Y]YJ
B€K€™XЩZ\О€™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YK™Щ]™XЩZ\К
K€›ФЩXЬ™][Y\О€ќYK€›СZЩS]™UЩX]\Ћ€ќYK€›СZЩTШ][]TШШ[Ћ€ќYK€›СZЩSX\љЩ]XЩU[њШXЭ[ЫЋ€ќYK€›СZЩTЪ\Y[ќXЪЪ[™О€ќYK€›СZЩQ›Ы™Q›YЪ€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЬљXЭ[\™KXЫЫX›Ь][Ы‹ЬЫЭ\Щ\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YKњЫЭ\ЩT™XY[™\ЬУX]љ^
›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЬљXЭ[\™KXЫЫX›Ь][Ы‹Щ]љY[ЩH€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YKњ›ЭљY\‘]љY[ЩJ›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЬљXЭ[\™KXЫЫX›Ь][Ы‹ШXЭ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YKњ™\\™PXЭ[ЫЉ›ЩKВ€[ќЋ€›ШЩ\ЬЛ™[ќ‹€ЫЫ™љ\›YY€›ЫЫX[Љ›ЩKЫЫ™љ\›YY
K€^\ќ™]љY]ЩY€›ЫЫX[Љ›ЩK™^\ќ™]љY]ЩY
K€[X[”[Э\›Э™Y€›ЫЫX[Љ›ЩKљ[X[”[Э\›Э™Y
B€JNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KШYЬљXЭ[\™KXЫЫX›Ь][Ы‹Щ^XЭ]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YK][\^XЭ][ЫЉ›ЩKВ€[ќЋ€›ШЩ\ЬЛ™[ќ‹€ЫЫ™љ\›YY€›ЫЫX[Љ›ЩKЫЫ™љ\›YY
K€^\ќ™]љY]ЩY€›ЫЫX[Љ›ЩK™^\ќ™]љY]ЩY
K€[X[”[Э\›Э™Y€›ЫЫX[Љ›ЩKљ[X[”[Э\›Э™Y
B€JNВ€™]\›€Щ[™
™\Л™\Э[››С^XЭ][Ыђ]]Ьљ^™YИH€Њ™\Э[
NВ€B‚€ЫЫњЭ™^\Х[љYљYYњZ[“Ь[ЫњИH

HO€
В€[ќЋ€›ШЩ\ЬЛ™[ќ‹€ЫЫ[][љXШ][Ы”ќ[ќ[YN€™^\Сќ[ЫЫ[][љXШ][Ы”ќ[ќ[YK€YЬљXЭ[\™Tќ[ќ[YN€™^\РYЬљXЭ[\™PЫЫX›Ь][Ы”ќ[ќ[YK€X[Ш\™Tќ[ќ[YN€™^\ТX[Ш\™PЫЫX›Ь][Ы”ќ[ќ[YB€JNВ‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛXњZ[‹ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\Х[љYљYYњZ[”ќ[ќ[YKњќ[ќ[YTЭ]\К™^\Х[љYљYYњZ[“Ь[ЫњК
JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛXњZ[‹Ь[€€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]™^\Х[љYљYYњZ[”ќ[ќ[YKњ›ШЩ\ЬК›ЩKњ]Т[њ]›ЩKЫЫ[X[™›ЩK™ЫШ[€‹™^\Х[љYљYYњZ[“Ь[ЫњК
JNВ€™]\›€Щ[™
™\ЛЊ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛXњZ[‹Щ^XЭ]K\Э\€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H™^\Х[љYљYYњZ[”ќ[ќ[YVИ™^XЭ]TЭ\—J›ЩKњЭ\YВ€‹‹›™^\Х[љYљYYњZ[“Ь[ЫњК
K€ЫЫ™љ\›YY€›ЫЫX[Љ›ЩKЫЫ™љ\›YY
B€JNВ€™]\›€Щ[™
™\Л™\Э[››С^XЭ][Ыђ]]Ьљ^™YИH€Њ™\Э[
NВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛXњZ[‹ЫZ\ЬЪ[Ы‹\™XЩZ\€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€™XЩZ\€™^\Х[љYљYYњZ[”ќ[ќ[YK™Щ]Z\ЬЪ[Ы”™XЩZ\
\›њЩX\Ъ\[\Л™Щ]
›Z\ЬЪ[Ы’YЉH[™Yљ[™Y
K€™XЩZ\О€™^\Х[љYљYYњZ[”ќ[ќ[YK™Щ]™XЩZ\К
K€›ФЩXЬ™][Y\О€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЩ[]™[›XњЛЭЩXљЫЪИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€™]\›€Щ[™
™\ЛLВ€ЪО€[ЩK€\њ›ЬЋ€‘[]™[“XњИЩXљЫЪЬИ]™H™Y[€™[[Э™Yњ›ЫHЩ[™\Ъ\И›ЩXЭ[Ы‹€‹€Ш]YЫЬћN€њќ[ќ[YK\™[[Э™Y‹€XЭ]™Tќ[ќ[YN€њ™X[[YH‹€Ш[›ЫљXШ[ЫЫ[™Ъ[ќ€‹Ш\KЭ›ЪXЩKЬ™X[[YKЭЫЫ‹€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЩ[]™[›XњЛЩXYЫ›ЬЭXЬИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛLВ€ЪО€[ЩK€\њ›ЬЋ€‘[]™[“XњИXYЫ›ЬЭXЬИ]™H™Y[€™[[Э™Yњ›ЫHЩ[™\Ъ\И›ЩXЭ[Ы‹€‹€Ш]YЫЬћN€њќ[ќ[YK\™[[Э™Y‹€XЭ]™Tќ[ќ[YN€њ™X[[YH‹€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЩЩ[™\Ъ\ЛШXШЩ\[ЩK[X]љ^€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЩ[™\Ъ\И›ЪXЩHXШЩ\[ЩHX]љ^€JNВ€Y€
[™^\С[]™[“XњУЬљYЪ[ђ[ЭЩY
™\JJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€“ЬљYЪ[€›Э[ЭЩY€JNВ€ЫЫњЭќ[ќ[YHH\›њЩX\Ъ\[\Л™Щ]
њќ[ќ[YHЉHШ[›ЫљXШ[Щ[™\Ъ\Х›ЪXЩTќ[ќ[YJ›ШЩ\ЬЛ™[ќЉNВ€™]\›€Щ[™
™\ЛЊЩ[™\Ъ\Х›ЪXЩPXШЩ\[ЩR\›™\ЬКќ[ќ[YJKВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬ™X[[YKЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€Y€
[™^\СЩ[™\Ъ\Х›ЪXЩSЬљYЪ[ђ[ЭЩY
™\JJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€“ЬљYЪ[€›Э[ЭЩY‹Ш]YЫЬћN€\XШ][Ы‹[ЬљYЪ[‹Y›ЬљY[€€JNВ€ЫЫњЭ]]ЫЫќ^H™\ЫЫ™QЩ[™\Ъ\Х›ЪXЩP]]ЫЫќ^
™\K‹\Щ\‹В€[™ЭXYЩN€\›њЩX\Ъ\[\Л™Щ]
›[™ЭXYЩHЉH\Щ\ЏЛ›[™ЭXYЩH™[€‹€\ЬЭYQЭY\Э€[ЩB€JNВ€™]\›€Щ[™
™\ЛЊВ€™X[[YU›ЪXЩN€™^\Ф™X[[YTќ[ќ[YTЭ]\К›ШЩ\ЬЛ™[ќЉK€]]€В€]][ќXШ]Y€]]ЫЫќ^]][ќXШ]Y€]]Ьљ^™Y€]]ЫЫќ^]]Ьљ^™Y€YXЪ[љ\ЫN€]]ЫЫќ^]]YXЪ[љ\ЫK€Щ\ЬЪ[Ы”™\Щ[ќ€]]ЫЫќ^њЩ\ЬЪ[Ы”™\Щ[ќ€]™TЩ\ЬЪ[Ы”™\]Z\™\Р]]Ьљ^][ЫЋ€ќYB€K€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬ™X[[YKЬЩ\ЬЪ[Ы€€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
\]S[Z]
™\KМЊМ
JH™]\›€Щ[™
™\ЛЋKИ\њ›ЬЋ€•ЫИX[ћHЬ[ђRH™X[[YHЩ\ЬЪ[Ы€™\]Y\ЭИ‹Ш]YЫЬћN€њ]K[[Z]Y€JNВ€Y€
[™^\СЩ[™\Ъ\Х›ЪXЩSЬљYЪ[ђ[ЭЩY
™\JJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€“ЬљYЪ[€›Э[ЭЩY‹Ш]YЫЬћN€\XШ][Ы‹[ЬљYЪ[‹Y›ЬљY[€€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ]]ЫЫќ^H™\ЫЫ™QЩ[™\Ъ\Х›ЪXЩP]]ЫЫќ^
™\K‹\Щ\‹В€[™ЭXYЩN€›ЩK›[™ЭXYЩH\›њЩX\Ъ\[\Л™Щ]
›[™ЭXYЩHЉH\Щ\ЏЛ›[™ЭXYЩH™[€‹€\ЬЭYQЭY\Э€ќYB€JNВ€ЫЫњЭ\ЩRXY\њИHВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‹€‹‹Љ]]ЫЫќ^њЩ]ЫЫЪЪYHИИњЩ]XЫЫЪЪYHЋ€]]ЫЫќ^њЩ]ЫЫЪЪYHH€ЯJB€NВ€Y€
X]]ЫЫќ^]][ќXШ]Y
HВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛKВ€\њ›ЬЋ€‘Щ[™\Ъ\И™X[[YH›ЪXЩHЩ\ЬЪ[Ы€]]Ьљ^][Ы€™\]Z\™Y€‹€Ш]YЫЬћN€\XШ][Ы‹X]][ќXШ][Ы€‹€›ЭљY\ђ][\Y€[ЩK€]]Ьљ^][Ыђ\ќYXЭ\ЬЭYY€[ЩK€›ФЩXЬ™][Y\О€ќYB€K\ЩRXY\њКNВ€B€Y€
X]]ЫЫќ^]]Ьљ^™Y
HВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЛВ€\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЬ[ђRH™X[[YH›ЪXЩK€‹€Ш]YЫЬћN€\XШ][Ы‹X]]Ьљ^][Ы€‹€›ЭљY\ђ][\Y€[ЩK€]]Ьљ^][Ыђ\ќYXЭ\ЬЭYY€[ЩK€›ФЩXЬ™][Y\О€ќYB€K\ЩRXY\њКNВ€B€ЫЫњЭќ[ќ[YTЭ]\ИH™^\Ф™X[[YTќ[ќ[YTЭ]\К›ШЩ\ЬЛ™[ќЉNВ€Y€
ќ[ќ[YTЭ]\Лњќ[ќ[YHOOH™\ШX›YЉHВ€™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€“™^\ИЩ[™\Ъ\И›ЪXЩHќ[ќ[YH\И\ШX›Y€‹Ш]YЫЬћN€Ш\Xљ[]K][]Z[X›H‹™X[[YU›ЪXЩN€ќ[ќ[YTЭ]\ИK\ЩRXY\њКNВ€B€Y€
ќ[ќ[YTЭ]\Лњќ[ќ[YHOOHњ™X[[YHЉHВ€™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€“™^\ИЩ[™\Ъ\ИЬ[ђRH™X[[YH\И›ЭHЩ[XЭYќ[ќ[YK€‹Ш]YЫЬћN€Ш\Xљ[]K][]Z[X›H‹™X[[YU›ЪXЩN€ќ[ќ[YTЭ]\ИK\ЩRXY\њКNВ€B€Y€
\ќ[ќ[YTЭ]\ЛЫЫ™љYЭ\™Y
HВ€™]\›€Щ[™
™\ЛLЛИ\њ›ЬЋ€“Ь[ђRH™X[[YH\ИZ\ЬЪ[™И™\]Z\™YЩ\ќ™\€ЫЫ™љYЭ\][Ы‹€‹Ш]YЫЬћN€њ›ЭљY\‹[›ЭXЫЫ™љYЭ\™Y‹Z\ЬЪ[™С[ќЋ€ќ[ќ[YTЭ]\Л›Z\ЬЪ[™С[ќ‹™X[[YU›ЪXЩN€ќ[ќ[YTЭ]\ИK\ЩRXY\њКNВ€B€ћHВ€ЫЫњЭ[™ЭXYЩHH›ЩK›[™ЭXYЩH\›њЩX\Ъ\[\Л™Щ]
›[™ЭXYЩHЉH]]ЫЫќ^ќ\Щ\‹›[™ЭXYЩH™[€ЋВ€ЫЫњЭЩ\ЬЪ[Ы€H]ШZ]Ь[ђZT™X[[YPЫY[ќЩXЬ™]
И\Щ\Ћ€]]ЫЫќ^ќ\Щ\‹[™ЭXYЩHJNВ€›ЪXЩT™XЫЬ™
‹]]ЫЫќ^ќ\Щ\‹›Ь[ZKXYЩ[ќЛ\™X[[YH‹“Ь[ђRHYЩ[ќИ™X[[YH›ЪXЩHЩ\ЬЪ[Ы€]]Ьљ^™Y€‹В€›ЭљY\Ћ€Щ\ЬЪ[Ы‹њ›ЭљY\‹€[Щ[€Щ\ЬЪ[Ы‹›[Щ[€›ЪXЩN€Щ\ЬЪ[Ы‹ќ›ЪXЩK€[њЬЬќ€Щ\ЬЪ[Ы‹ќ[њЬЬќ€[™ЭXYЩK€]]YXЪ[љ\ЫN€]]ЫЫќ^]]YXЪ[љ\ЫB€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›Ь[ZH‹€[Щ[N€ђRH›ЪXЩH‹€XЭ[ЫЋ€ќ›ЪXЩK›Ь[ZWШYЩ[ќЧЬ™X[[YWЬЩ\ЬЪ[Ы—Ш]]Ьљ^™Y‹€Э]\О€њЭXШЩ\ЬИ‹€]Z[€“Ь[ђRHYЩ[ќИ™X[[YHЫY[ќЩXЬ™]\ЬЭYY›Ь€™^\И]™H›ЪXЩK€‹€Y]Y]N€И[Щ[€Щ\ЬЪ[Ы‹›[Щ[›ЪXЩN€Щ\ЬЪ[Ы‹ќ›ЪXЩK[њЬЬќ€Щ\ЬЪ[Ы‹ќ[њЬЬќ]]YXЪ[љ\ЫN€]]ЫЫќ^]]YXЪ[љ\ЫHK€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€ќ[ќ[YN€њ™X[[YH‹€›ЭљY\Ћ€Щ\ЬЪ[Ы‹њ›ЭљY\‹€[њЬЬќ€Щ\ЬЪ[Ы‹ќ[њЬЬќ€[Щ[€Щ\ЬЪ[Ы‹›[Щ[€›ЪXЩN€Щ\ЬЪ[Ы‹ќ›ЪXЩK€ќ[ќ[YU™\њЪ[ЫЋ€Щ\ЬЪ[Ы‹њќ[ќ[YU™\њЪ[Ы‹€ЫY[ќЩXЬ™]€Щ\ЬЪ[Ы‹ЫY[ќЩXЬ™]€^\™\Р]€Щ\ЬЪ[Ы‹™^\™\Р]€ЫY[ќЫЫ™љYО€Щ\ЬЪ[Ы‹ЫY[ќЫЫ™љYЛ€ЫЫ[™Ъ[ќ€‹Ш\KЭ›ЪXЩKЬ™X[[YKЭЫЫ‹€ЫЫО€Щ\ЬЪ[Ы‹ќЫЫ[Y\Л€]]YXЪ[љ\ЫN€]]ЫЫќ^]]YXЪ[љ\ЫK€›Ф\›X[™[ќЩ^R[ђњ›ЭЬЩ\Ћ€ќYK€›ФЩXЬ™][Y\Ф™]\›™Y€ќYB€K\ЩRXY\њКNВ€HШ]Ъ
\њ›ЬЉHВ€ЫЫњЭШ]YЫЬћHH\њ›Ь‹Ш]YЫЬћH™^\Ф™X[[YQZ[\™PШ]YЫЬћJ\њ›ЬЉNВ€›ЪXЩT™XЫЬ™
‹]]ЫЫќ^ќ\Щ\‹›Ь[ZKXYЩ[ќЛ\™X[[YH‹™^\ФШY™T™X[[YQZ[\™Q]Z[
Ш]YЫЬћJKВ€›ЭљY\Ћ€›Ь[ZK\™X[[YH‹€\њ›ЬђШ]YЫЬћN€Ш]YЫЬћK€[™ЭXYЩN€\›њЩX\Ъ\[\Л™Щ]
›[™ЭXYЩHЉH]]ЫЫќ^ќ\Щ\‹›[™ЭXYЩH™[€‚€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›Ь[ZH‹€[Щ[N€ђRH›ЪXЩH‹€XЭ[ЫЋ€ќ›ЪXЩK›Ь[ZWШYЩ[ќЧЬ™X[[YWЬЩ\ЬЪ[Ы—ЩZ[Y‹€Э]\О€™\њ›Ь€‹€]Z[€Ш]YЫЬћK€Y]Y]N€И[њЬЬќ€YЩ[ќЛ\ЩЛ]ЩXњќИ‹Ш]YЫЬћKЭ]\О€\њ›Ь‹љЭ]\Иќ[K€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛL‹В€\њ›ЬЋ€“Ь[ђRHYЩ[ќИ™X[[YHЩ\ЬЪ[Ы€Z[Yќ]ќ[K€‹€Ш]YЫЬћK€™X[[YU›ЪXЩN€™^\Ф™X[[YTќ[ќ[YTЭ]\К›ШЩ\ЬЛ™[ќЉK€›ФЩXЬ™][Y\О€ќYB€K\ЩRXY\њКNВ€B€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬ™X[[YKШШ[€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ™X[[YH›ЪXЩH€JNВ€ЫЫњЭќ[ќ[YTЭ]\ИH™^\Ф™X[[YTќ[ќ[YTЭ]\К›ШЩ\ЬЛ™[ќЉNВ€Y€
\ќ[ќ[YTЭ]\Лњ›ЫXЪС[X›Y
HВ€™]\›€Щ[™
™\ЛKВ€\њ›ЬЋ€•HЫ\™XЭС™X[[YH›ЫXЪИ›Э]H\И\ШX›Y€\ЩHHЬ[ђRHYЩ[ќИСИ™X[[YHЩ\ЬЪ[Ы€[™Ъ[ќ€‹€Ш]YЫЬћN€Ш\Xљ[]K][]Z[X›H‹€™X[[YU›ЪXЩN€ќ[ќ[YTЭ]\В€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B€Y€
ќ[ќ[YTЭ]\Лњќ[ќ[YHOOH™\ШX›YЉHВ€™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€“™^\ИЩ[™\Ъ\И›ЪXЩHќ[ќ[YH\И\ШX›Y€‹Ш]YЫЬћN€Ш\Xљ[]K][]Z[X›H‹™X[[YU›ЪXЩN€ќ[ќ[YTЭ]\ИKВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B€Y€
ќ[ќ[YTЭ]\Лњќ[ќ[YHOOHњ™X[[YHЉHВ€™]\›€Щ[™
™\ЛKИ\њ›ЬЋ€“™^\ИЩ[™\Ъ\И™X[[YH\И›ЭHЩ[XЭYќ[ќ[YK€‹Ш]YЫЬћN€Ш\Xљ[]K][]Z[X›H‹™X[[YU›ЪXЩN€ќ[ќ[YTЭ]\ИKВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B€Y€
\ќ[ќ[YTЭ]\ЛЫЫ™љYЭ\™Y
HВ€™]\›€Щ[™
™\ЛLЛИ\њ›ЬЋ€“Ь[ђRH™X[[YH\ИZ\ЬЪ[™И™\]Z\™YЩ\ќ™\€ЫЫ™љYЭ\][Ы‹€‹Ш]YЫЬћN€њ›ЭљY\‹[›ЭXЫЫ™љYЭ\™Y‹Z\ЬЪ[™С[ќЋ€ќ[ќ[YTЭ]\Л›Z\ЬЪ[™С[ќ‹™X[[YU›ЪXЩN€ќ[ќ[YTЭ]\ИKВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B€]ЩH€ЋВ€ћHВ€ЩH]ШZ]™XY]Р›ЩJ™\K—ММ
NВ€HШ]Ъ
\њ›ЬЉHВ€™]\›€Щ[™
™\ЛLЛИ\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩH”™X[[YH›ЪXЩH^[ШY\ИЫИ\™ЩH€JNВ€B€Y€
TЭљ[™КЩ€ЉKќљ[J
JH™]\›€Щ[™
™\ЛИ\њ›ЬЋ€”™X[[YH›ЪXЩHСЩ™™\€\И™\]Z\™Y€JNВ€ћHВ€ЫЫњЭ[њЭЩ\€H]ШZ]Ь[ђZT™X[[YTЩ[њЭЩ\ЉВ€Щ€\Щ\‹€[™ЭXYЩN€\›њЩX\Ъ\[\Л™Щ]
›[™ЭXYЩHЉH\Щ\‹›[™ЭXYЩH™[€‚€JNВ€›ЪXЩT™XЫЬ™
‹\Щ\‹њ™X[[YK]ЩXњќИ‹“Ь[ђRH™X[[YH›ЪXЩHЩ\ЬЪ[Ы€™YЫЭX]Y€‹В€›ЭљY\Ћ€[њЭЩ\‹њ›ЭљY\‹€[Щ[€[њЭЩ\‹›[Щ[€›ЪXЩN€[њЭЩ\‹ќ›ЪXЩK€[™ЭXYЩN€\›њЩX\Ъ\[\Л™Щ]
›[™ЭXYЩHЉH\Щ\‹›[™ЭXYЩH™[€‚€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›Ь[ZH‹€[Щ[N€ђRH›ЪXЩH‹€XЭ[ЫЋ€ќ›ЪXЩKњ™X[[YWЭЩXњќЧЬЭ\ќY‹€Э]\О€њЭXШЩ\ЬИ‹€]Z[€“Ь[ђRH™X[[YHЩX”•ИЩ\ЬЪ[Ы€™YЫЭX]Y›Ь€™^\И]™H›ЪXЩK€‹€Y]Y]N€И[Щ[€[њЭЩ\‹›[Щ[›ЪXЩN€[њЭЩ\‹ќ›ЪXЩK[њЬЬќ€ќЩXњќИ€K€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊ[њЭЩ\‹њЩВ€ЫЫќ[ќ]\HЋ€\XШ][Ы‹ЬЩ‹€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€HШ]Ъ
\њ›ЬЉHВ€ЫЫњЭШ]YЫЬћHH™^\Ф™X[[YQZ[\™PШ]YЫЬћJ\њ›ЬЉNВ€›ЪXЩT™XЫЬ™
‹\Щ\‹њ™X[[YK]ЩXњќИ‹™^\ФШY™T™X[[YQZ[\™Q]Z[
Ш]YЫЬћJKВ€›ЭљY\Ћ€›Ь[ZK\™X[[YK]ЩXњќИ‹€\њ›ЬђШ]YЫЬћN€Ш]YЫЬћK€[™ЭXYЩN€\›њЩX\Ъ\[\Л™Щ]
›[™ЭXYЩHЉH\Щ\‹›[™ЭXYЩH™[€‚€JNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€›Ь[ZH‹€[Щ[N€ђRH›ЪXЩH‹€XЭ[ЫЋ€ќ›ЪXЩKњ™X[[YWЭЩXњќЧЩZ[Y‹€Э]\О€™\њ›Ь€‹€]Z[€Ш]YЫЬћK€Y]Y]N€И[њЬЬќ€ќЩXњќИ‹Ш]YЫЬћHK€\Ь]Ъ€[ЩB€JNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛL‹И\њ›ЬЋ€“Ь[ђRH™X[[YH›ЪXЩHZ[Yќ]ќ[K€‹Ш]YЫЬћK™X[[YU›ЪXЩN€™^\Ф™X[[YTќ[ќ[YTЭ]\К›ШЩ\ЬЛ™[ќЉHKВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬ™X[[YKЭЫЫ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
\]S[Z]
™\KLЊМ
JH™]\›€Щ[™
™\ЛЋKИ\њ›ЬЋ€•ЫИX[ћH™^\И™X[[YHЫЫ™\]Y\ЭИ‹Ш]YЫЬћN€њ]K[[Z]Y€JNВ€Y€
[™^\СЩ[™\Ъ\Х›ЪXЩSЬљYЪ[ђ[ЭЩY
™\JJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€“ЬљYЪ[€›Э[ЭЩY‹Ш]YЫЬћN€\XШ][Ы‹[ЬљYЪ[‹Y›ЬљY[€€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ]]ЫЫќ^H™\ЫЫ™QЩ[™\Ъ\Х›ЪXЩP]]ЫЫќ^
™\K‹\Щ\‹В€[™ЭXYЩN€›ЩK›[™ЭXYЩH›ЩK\™Э[Y[ќПЛ›[™ЭXYЩH\Щ\ЏЛ›[™ЭXYЩH™[€‹€\ЬЭYQЭY\Э€[ЩB€JNВ€Y€
X]]ЫЫќ^]][ќXШ]Y
HВ€™]\›€Щ[™
™\ЛKВ€ЪО€[ЩK€\њ›ЬЋ€‘Щ[™\Ъ\И™X[[YHЫЫШ]]Ш^H]]Ьљ^][Ы€™\]Z\™Y€‹€Ш]YЫЬћN€\XШ][Ы‹X]][ќXШ][Ы€‹€›ЭљY\ђ][\Y€[ЩK€^XЭ][Ыђ][\Y€[ЩK€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B€Y€
X]]ЫЫќ^]]Ьљ^™Y
HВ€™]\›€Щ[™
™\ЛЛВ€ЪО€[ЩK€\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ™^\И™X[[YHЫЫЛ€‹€Ш]YЫЬћN€\XШ][Ы‹X]]Ьљ^][Ы€‹€›ЭљY\ђ][\Y€[ЩK€^XЭ][Ыђ][\Y€[ЩK€›ФЩXЬ™][Y\О€ќYB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B€ЫЫњЭЫЫ[YHHЭљ[™К›ЩK›[YH›ЩKќЫЫ[YH›™^\ЧШШ\Xљ[]WЬ›Э]\€ЉKќљ[J
NВ€ЫЫњЭЬ[ђZS]]™UЫЫ[Y\ИH™]ИЩ]
™^\УЬ[ђZS]]™UЫЫШЪ[X\К
K›X\
ЫЫO€ЫЫ›[YJJNВ€Y€
Ь[ђZS]]™UЫЫ[Y\Лљ\КЫЫ[YJJHВ€ЫЫњЭ\™ЬИH›ЩK\™Э[Y[ќИ	‰€\[Щ€›ЩK\™Э[Y[ќИOOH›Шљ™XЭ€И›ЩK\™Э[Y[ќИ€›ЩNВ€ЫЫњЭ™\Э[H]ШZ]^XЭ]S™^\УЬ[ђZS]]™UЫЫ
‹]]ЫЫќ^ќ\Щ\‹ЫЫ[YK\™ЬЛВ€ЫЬњ™[][Ы’Y€›ЩKЫЬњ™[][Ы’Y€ЫЫ[X[™€\™ЬЛЫЫ[X[™›ЩKЫЫ[X[™€‹€[™ЭXYЩN€\™ЬЛ›[™ЭXYЩH›ЩK›[™ЭXYЩH]]ЫЫќ^ќ\Щ\‹›[™ЭXYЩH™[€‹€Э]][ЩN€ќ›ЪXЩH‚€JNВ€ЫЫњЭЩ[™\Ъ\РXЭ[Ы€H™^\СЩ[™\Ъ\ХЫЬљЬЬXЩPXЭ[ЫЉ\™ЬЛЫЫ[X[™›ЩKЫЫ[X[™€‹ЮИШ[€И[YN€ЫЫ[YHHWJNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИ‹‹њ™\Э[Щ[™\Ъ\РXЭ[Ы€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B€Y€
ЫЫ[YHOOH›™^\ЧШШ\Xљ[]WЬ›Э]\€ЉHВ€™]\›€Щ[™
™\ЛВ€ЪО€[ЩK€\њ›ЬЋ€•[њЭ\ЬќY™^\И™X[[YHЫЫ€‹€Ш]YЫЬћN€ќЫЫ][Y][Ы€‹€›ШЪЩY™X\ЫЫЋ€њ›Э]K[›ЭY›Э[™‹€Э\ЬќYЫЫО€И›™^\ЧШШ\Xљ[]WЬ›Э]\€‹‹‹ђ\њ^K™њ›ЫJЬ[ђZS]]™UЫЫ[Y\КWB€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B€ЫЫњЭ™\Э[H]ШZ]\Ь]Ъ™^\Ф™X[[YUЫЫ
‹]]ЫЫќ^ќ\Щ\‹›ЩJNВ€ЫЫњЭ\™ЬИH›ЩK\™Э[Y[ќИ	‰€\[Щ€›ЩK\™Э[Y[ќИOOH›Шљ™XЭ€И›ЩK\™Э[Y[ќИ€›ЩNВ€ЫЫњЭЩ[™\Ъ\РXЭ[Ы€H™^\СЩ[™\Ъ\ХЫЬљЬЬXЩPXЭ[ЫЉ\™ЬЛЫЫ[X[™›ЩKЫЫ[X[™€‹ЮИШ[€И[YN€ЫЫ[YHHWJNВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊИ‹‹њ™\Э[Щ[™\Ъ\РXЭ[Ы€KВ€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™K›ЛXШXЪK]\Э\™][Y]Kљ]]H‚€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЭ[њШЬљX™H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ›ЪXЩHЫЫ[X[™И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[™ЭXYЩHHШ[›ЫљXШ[›ЪXЩS[™ЭXYЩJ›ЩK›[™ЭXYЩH\Щ\‹›[™ЭXYЩH™[€ЉNВ€][њШЬљ\HЭљ[™К›ЩKќ[њШЬљ\›ЩKќ^€ЉKќљ[J
NВ€]›ЭљY\€H›ШЩ\ЬЛ™[ќ‹•“ТPСWФХФ“Х’QT€
›ШЩ\ЬЛ™[ќ‹“ФSђRWРTWТСVHИ›Ь[ZH€€њ›ЭЬЩ\€ЉNВ€][Щ[Hќ[В€Y€
][њШЬљ\	‰€›ЩK]Y[Р\ЩMЌ	‰€
›ШЩ\ЬЛ™[ќ‹•“ТPСWФХФ“Х’QT€OOH›Ь[ZH€›ШЩ\ЬЛ™[ќ‹“ФSђRWРTWТСVJJHВ€ЫЫњЭ™\Э[H]ШZ]Ь[ђZU[њШЬљX™P]Y[КВ€]Y[Р\ЩMЌ€›ЩK]Y[Р\ЩMЌ€Z[YU\N€›ЩK›Z[YU\H]Y[ЛЭЩX›H‹€љ[[[YN€›ЩK™љ[[[YHYЬљ[™^\Л]›ЪXЩKќЩX›H‹€[™ЭXYЩB€JNВ€[њШЬљ\H™\Э[Лќ[њШЬљ\€ЋВ€›ЭљY\€H™\Э[Лњ›ЭљY\€›ЭљY\ЋВ€[Щ[H™\Э[Л›[Щ[ќ[В€B€ЫЫњЭ™XЫЬ™H›ЪXЩT™XЫЬ™
‹\Щ\‹њЬYXЪ]Л]^‹[њШЬљ\ИЬYXЪШ\\™Y€	Э[њШЬљ\X€”ЬYXЪШ\\™HЩ\ЬЪ[Ы€Ь[™Y€‹И[™ЭXYЩKШШ[N€›ЩK›ШШ[H›ЪXЩSШШ[Q›Ь“[™ЭXYЩJ[™ЭXYЩJK›ЭљY\‹[Щ[JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kќ›ЪXЩT™\Э[HИ[њШЬљ\Щ\ЬЪ[Ы’Y€™XЫЬ™љY›ЭљY\‹[Щ[[™ЭXYЩKШШ[N€›ЩK›ШШ[H›ЪXЩSШШ[Q›Ь“[™ЭXYЩJ[™ЭXYЩJHNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬЬXZИ€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ›ЪXЩH™\ЬЫњЩ\И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЫЬњ™[][Ы’YHЩ[™\Ъ\Х›ЪXЩPЫЬњ™[][Ы’Y
›ЩKЫЬњ™[][Ы’Y
NВ€ЫЫњЭ›Э]TЭ\ќY]H]K››ЭК
NВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€ќЛ\›Э]K\™XЩZ]™Y‹€ЭXШЩ\ЬО€ќYK€›Э]N€‹Ш\KЭ›ЪXЩKЬЬXZИ‹€ЫЭ\ЩQќ[Э[ЫЋ€\Kќ›ЪXЩKњЬXZИ‚€JNВ€ЫЫњЭ[™ЭXYЩHHШ[›ЫљXШ[›ЪXЩS[™ЭXYЩJ›ЩK›[™ЭXYЩH›ЩKќ\™Щ][™ЭXYЩH\Щ\‹›[™ЭXYЩH™[€ЉNВ€ЫЫњЭ^HШ[љ]^™S™^\ФЬЪЩ[”™\ЬЫњЩU^
›ЩKќ^€ЉNВ€Y€
]^
H™]\›€Щ[™
™\ЛИ\њ›ЬЋ€•›ЪXЩH™\ЬЫњЩH^\И™\]Z\™Y€JNВ€]]Y[ИHќ[В€]ЬYXЪ\њ›Ь€Hќ[В€]›ЭљY\€H›ШЩ\ЬЛ™[ќ‹•“ТPСWХЧФ“Х’QT€
›ШЩ\ЬЛ™[ќ‹“ФSђRWРTWТСVHИ›Ь[ZH€€њ›ЭЬЩ\€ЉNВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€ќЛ\›ЭљY\‹\Щ[XЭY‹€ЭXШЩ\ЬО€ќYK€›Э]N€‹Ш\KЭ›ЪXЩKЬЬXZИ‹€Ф›ЭљY\Ћ€›ЭљY\‹€Ш[љ]^™Y[™Э€^›[™Э€ЫЭ\ЩQќ[Э[ЫЋ€\Kќ›ЪXЩKњЬXZИ‚€JNВ€ЫЫњЭЪЭ[\ЩSЬ[ђZP]Y[ИH›ЫЫX[Љ›ШЩ\ЬЛ™[ќ‹“ФSђRWРTWТСVJH	‰€›ЭљY\€OOHњ›ЭЬЩ\€ЋВ€Y€
›ЭљY\€OOH›Ь[ZH€›ЩK™›ЬЩSЬ[ђZHOOHќYHЪЭ[\ЩSЬ[ђZP]Y[КHВ€ћHВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€ќЛ\›ЭљY\‹\™\]Y\ЭY‹€ЭXШЩ\ЬО€ќYK€›Э]N€‹Ш\KЭ›ЪXЩKЬЬXZИ‹€Ф›ЭљY\Ћ€›Ь[ZH‹€Ш[љ]^™Y[™Э€^›[™Э€ЫЭ\ЩQќ[Э[ЫЋ€›Ь[ђZTЬYXЪ]Y[И‚€JNВ€]Y[ИH]ШZ]Ь[ђZTЬYXЪ]Y[КВ€^€›ЪXЩN€›ЩKќ›ЪXЩH›ШЩ\ЬЛ™[ќ‹“ФSђRWХЧХ“ТPСK€™\ЬЫњЩQ›Ь›X]€›ЩKњ™\ЬЫњЩQ›Ь›X]›\И‚€JNВ€›ЭљY\€H]Y[ПЛњ›ЭљY\€›Ь[ZHЋВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€ќЛ\›ЭљY\‹\ЭXШЩYYY‹€ЭXШЩ\ЬО€›ЫЫX[Љ]Y[ПЛ]Y[С]U\›
K€›Э]N€‹Ш\KЭ›ЪXЩKЬЬXZИ‹€Ф›ЭљY\Ћ€›ЭљY\‹€]Y[Рћ]S[™Э€Эљ[™К]Y[ПЛ]Y[С]U\›€ЉK›[™Э€ЫЭ\ЩQќ[Э[ЫЋ€›Ь[ђZTЬYXЪ]Y[И‚€JNВ€HШ]Ъ
\њ›ЬЉHВ€ЫЫњЭ\њ›Ь•\HH\њ›Ь‹™\њ›Ь•\HЫ\ЬЪYћSЬ[ђZU›ЪXЩQ\њ›ЬЉ\њ›ЬЉNВ€ЬYXЪ\њ›Ь€HЬ[ђZU›ЪXЩQ\њ›Ь“Y\ЬШYЩJ\њ›Ь•\JNВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€ќЛ\›ЭљY\‹YZ[Y‹€ЭXШЩ\ЬО€[ЩK€›Э]N€‹Ш\KЭ›ЪXЩKЬЬXZИ‹€Ф›ЭљY\Ћ€›Ь[ZH‹€\њ›ЬђШ]YЫЬћN€\њ›Ь•\K€ЫЭ\ЩQќ[Э[ЫЋ€›Ь[ђZTЬYXЪ]Y[И‚€JNВ€]Y[ИHВ€]Y[С]U\›€ќ[€›ЭљY\Ћ€›Ь[ZKX]Y[ЛY\њ›Ь€‹€[Щ[€›ШЩ\ЬЛ™[ќ‹“ФSђRWХЧУSСS™ЬMЛ[Z[љK]И‹€›ЪXЩN€›ЩKќ›ЪXЩH›ШЩ\ЬЛ™[ќ‹“ФSђRWХЧХ“ТPСHќ[€ЬЪЩ[•^€^€ЬЪЩ[•^[™Э€^›[™Э€™\ЬЫњЩQ›Ь›X]€›ЩKњ™\ЬЫњЩQ›Ь›X]›\И‹€XYЫ›ЬЭXЬО€\њ›Ь‹™XYЫ›ЬЭXЬИЬ[ђZU›ЪXЩT›ЭљY\‘XYЫ›ЬЭXЬКВ€™\]Y\Э][\Y€ќYK€Э]\О€\њ›Ь‹њЭ]\И\њ›Ь‹љЭ]\Л€\њ›Ь•\K€[Y[Э]€\њ›Ь•\HOOHќ[Y[Э]‹€љ[[™\ЬЫњЩT›Э]N€›Ь[ZK]ЛY\њ›Ь€‚€JB€NВ€›ЭљY\€H›Ь[ZKX]Y[ЛY\њ›Ь€ЋВ€B€B€ЫЫњЭ™XЫЬ™H›ЪXЩT™XЫЬ™
‹\Щ\‹ќ^]Л\ЬYXЪ‹ЬYXЪ\њ›Ь€ИЬYXЪ™\ЬЫњЩHZ[Y€	ЬЬYXЪ\њ›ЬџX€ЬYXЪ™\ЬЫњЩH™\\™Y€	Э^XИ[™ЭXYЩKШШ[N€›ЩK›ШШ[H›ЪXЩSШШ[Q›Ь“[™ЭXYЩJ[™ЭXYЩJK›ЭљY\‹[Щ[€]Y[ПЛ›[Щ[ќ[›ЪXЩN€]Y[ПЛќ›ЪXЩHќ[\њ›ЬЋ€ЬYXЪ\њ›Ь€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kќ›ЪXЩT™\Э[HВ€ЫЬњ™[][Ы’Y€^€Щ\ЬЪ[Ы’Y€™XЫЬ™љY€›ЭљY\‹€]Y[С]U\›€]Y[ПЛ]Y[С]U\›ќ[€[Щ[€]Y[ПЛ›[Щ[ќ[€›ЪXЩN€]Y[ПЛќ›ЪXЩHќ[€ЬЪЩ[•^€]Y[ПЛњЬЪЩ[•^^€ЬЪЩ[•^[™Э€]Y[ПЛњЬЪЩ[•^[™Э^›[™Э€™\ЬЫњЩQ›Ь›X]€]Y[ПЛњ™\ЬЫњЩQ›Ь›X]›ЩKњ™\ЬЫњЩQ›Ь›X]›\И‹€\њ›ЬЋ€ЬYXЪ\њ›Ь‹€ЫЫ™љYЭ\™Y›ЭљY\Ћ€›ШЩ\ЬЛ™[ќ‹•“ТPСWХЧФ“Х’QT€ќ[€\УЬ[ђZRЩ^N€›ЫЫX[Љ›ШЩ\ЬЛ™[ќ‹“ФSђRWРTWТСVJK€XYЫ›ЬЭXЬО€]Y[ПЛ™XYЫ›ЬЭXЬИЬ[ђZU›ЪXЩT›ЭљY\‘XYЫ›ЬЭXЬКВ€›ЭљY\”Щ[XЭY€›ЭљY\‹€™\]Y\Э][\Y€[ЩK€\њ›Ь•\N€›ЭљY\€OOHњ›ЭЬЩ\€€И››Ы™H€€›Z\ЬЪ[™ЧШЬ™Y[ќX[‹€љ[[™\ЬЫњЩT›Э]N€›ЭљY\€OOHњ›ЭЬЩ\€€Ињ›ЭЬЩ\‹\ЬYXЪ\™\]Z\™Y€€›Z\ЬЪ[™Л[Ь[ZKXЬ™Y[ќX[‚€JK€[™ЭXYЩK€ШШ[N€›ЩK›ШШ[H›ЪXЩSШШ[Q›Ь“[™ЭXYЩJ[™ЭXYЩJB€NВ€ШY™QЩ[™\Ъ\Х›ЪXЩTЭYЩQ]™[ќ
‹В€ЫЬњ™[][Ы’Y€ЭYЩN€ќЛ\›Э]K\™]\›™Y‹€ЭXШЩ\ЬО€ќYK€›Э]N€‹Ш\KЭ›ЪXЩKЬЬXZИ‹€Э]\О€Њ€Ф›ЭљY\Ћ€›ЭљY\‹€]Y[Рћ]S[™Э€Эљ[™К]Y[ПЛ]Y[С]U\›€ЉK›[™Э€[\ЩY[YS\О€]K››ЭК
HH›Э]TЭ\ќY]€\њ›ЬђШ]YЫЬћN€ЬYXЪ\њ›Ь€ИЭ]Kќ›ЪXЩT™\Э[™XYЫ›ЬЭXЬПЛ™\њ›Ь•\Hњ›ЭљY\—Щ\њ›Ь€€€€‹€ЫЭ\ЩQќ[Э[ЫЋ€\Kќ›ЪXЩKњЬXZИ‚€JNВ€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ›ЪXЩKЬЫ™KЫЭ]›Э[™XШ[€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЭ]›Э[™Ш[И€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€Y€
›ЩKЫЫ™љ\›YYOOHќYJHВ€™]\›€Щ[™
™\ЛKВ€ЪО€[ЩK€Э]\О€ЫЫ™љ\›X][Ы‹\™\]Z\™Y‹€™\]Z\™\РЫЫ™љ\›X][ЫЋ€ќYK€›РШ[XЩY€ќYK€\њ›ЬЋ€‘^XЪ]ЫЫ™љ\›X][Ы€\И™\]Z\™Y™Y›Ь™H[€Э]›Э[™Ш[€‚€JNВ€B€ЫЫњЭ™XЫЬ™H]ШZ]Ь™X]SЭ]›Э[™Ш[ЫЬљЩ›ЭК‹\Щ\‹›ЩJNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]K›Э]›Э[™Ш[™\Э[H™XЫЬ™В€™]\›€Щ[™
™\Л™XЫЬ™™[]™\ћOЛ›ЪИИЊ€KЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЭ[њЫ]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹ZHЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ[њЫ][Ы€ЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ^HЭљ[™К›ЩKќ^€ЉKќљ[J
NВ€Y€
]^
H™]\›€Щ[™
™\ЛИ\њ›ЬЋ€•^\И™\]Z\™Y€JNВ€ЫЫњЭ™\Э[H]ШZ][њЫ]Q[[ZXРЫЫќ[ќ
‹\Щ\‹В€^€\™Щ][™ЭXYЩN€›ЩKќ\™Щ][™ЭXYЩH\Щ\‹›[™ЭXYЩH™[€‹€ЫЭ\ЩS[™ЭXYЩN€›ЩKњЫЭ\ЩS[™ЭXYЩH™[€‹€ЫЫќ^€›ЩKЫЫќ^™[[ZXИ‚€JNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]Kќ[њЫ][Ы”™\Э[H™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ›ЭYљXШ][ЫњЛЬЩ[™€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹››ЭYљXШ][ЫњИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИ›ЭYљXШ][ЫњИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ[Щ[S[YHHЭљ[™К›ЩK›[Щ[H”]›Ь›HЉNВ€ЫЫњЭ›ЭљY\ђћS[Щ[HHВ€X\›љ[™О€›X\›љ[™ЛXЩ\ќYљXШ]\И‹€ЫЬљЩ›ЬЩN€ќЫЬљЩ›ЬЩK[›ЭYљXШ][ЫњИ‹€X[Ш\™N€љX[[›ЭYљXШ][ЫњИ‹€YЬљUYN€ќYK[ЩЪ\ЭXЬИ‹€RN€›Ь[ZH‹€]›Ь›N€›Ь[ZH‚€NВ€ЫЫњЭЪ[›™[HЭљ[™К›ЩKЪ[›™[ќЫЬљЩ›ЭИЉNВ€ЫЫњЭ›ЭљY\’YHЭЪ]Ш\ЪKќ\Э
Ъ[›™[
HИќЪ]Ш\Y[]™\ћH€€ЬЫ\Я^ЪKќ\Э
Ъ[›™[
HИњЫ\ЛY[]™\ћH€€›ЭљY\ђћS[Щ[VЫ[Щ[S[YWH›Ь[ZHЋВ€ЫЫњЭY\ЬШYЩHHЭљ[™К›ЩK›Y\ЬШYЩH	Ы[Щ[S[Y_HЫЬљЩ›ЭИ›ЭYљXШ][Ы€Щ[ќ
Kќљ[J
NВ€ЫЫњЭ[]™\ћHHИњЫ\ЛY[]™\ћH‹ќЪ]Ш\Y[]™\ћH—Kљ[ЫY\К›ЭљY\’Y
B€И]ШZ]Щ[™Ъ[[УY\ЬШYЩJИ›ЭљY\’YЪ[›™[О€Ъ[[Ф™XЪ\Y[ќ›Ь”›ЭљY\Љ›ЭљY\’Y›ЩJK^€Y\ЬШYЩHJB€€И][\Y€[ЩKЪО€ќYKЭ]\О€›ШШ[[›ЭYљXШ][Ы‹[Ы›H€NВ€Y›ЭYљXШ][ЫЉ‹њ›Щљ[KИ[Щ[N€[Щ[S[YK›ЭљY\’YЪ[›™[Y\ЬШYЩKЬ™X]YћN€\Щ\‹›[YK[]™\ћTЭ]\О€[]™\ћKњЭ]\ИJNВ€ЩТ[ќYЬ][ЫЉ‹В€›ЭљY\’Y€[Щ[N€[Щ[S[YK€XЭ[ЫЋ€››ЭYљXШ][Ы‹њЩ[ќ‹€Э]\О€[]™\ћK›ЪИY[]™\ћK][\YИњЭXШЩ\ЬИ€€›™YYЛ\Щ]\‹€]Z[€[]™\ћK›ЪИИY\ЬШYЩH€	ЫY\ЬШYЩ_H[]™\ћHЭ]\О€	Щ[]™\ћKњЭ]\ЯK€Y]Y]N€ИЪ[›™[Ь™X]YћN€\Щ\‹›[YK[]™\ћHB€JNВ€YXЭ]љ]J‹њ›Щљ[K	Ы[Щ[S[Y_H›ЭYљXШ][Ы€Щ[ќ€	ЫY\ЬШYЩ_X
NВ€]ШZ]Ьљ]QЉЉNВ€™]\›€Щ[™
™\ЛЊX›XФЭ]J‹\Щ\ЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KШЫЫ[][љXШ][ЫњЛЭ™XY€	‰€™\K›Y]ЩOOH”ФХЉHВ€Y€
XШ[•\ЩJ\Щ\‹››ЭYљXШ][ЫњИЉJH™]\›€Щ[™
™\ЛЛИ\њ›ЬЋ€”›ЫHЩ\И›Э[ЭИЫЫ[][љXШ][Ы€ЫЬљЩ›ЭЬИ€JNВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭ™\Э[H]ШZ]Ь™X]PЫЫ[][љXШ][Ы•™XY
‹\Щ\‹›ЩJNВ€YЫЬљЩ›ЭУ›ЭJ‹њ›Щљ[K›ЩK››ЭKђЫЫ[][љXШ][Ы€›ЭHЉNВ€]ШZ]Ьљ]QЉЉNВ€ЫЫњЭЭ]HHX›XФЭ]J‹\Щ\ЉNВ€Э]KЫЫ[][љXШ][Ы•™XY™\Э[H™\Э[В€™]\›€Щ[™
™\ЛЊЭ]JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ЬЭ]\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹њЭ]\К›ШЩ\ЬЛ™[ќЉJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹Ь›ЭљY\њИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€›ЭљY\њО€™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹›\Э›ЭљY\њКИ[ќЋ€›ШЩ\ЬЛ™[ќ€JK€›ФЩXЬ™]^ЬЭ\™N€ќYB€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ШШ\Xљ[]Y\И€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊВ€ЪО€ќYK€Ш\Xљ[]Y\О€™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹›\ЭШ\Xљ[]Y\К
K€[Z[Y\О€™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹›\Э›ЭљY\‘[Z[Y\К
B€JNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ЬЩ[XЭ€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹њЩ[XЭ›ЭљY\ЉИ‹‹›ЩK[ќЋ€›ШЩ\ЬЛ™[ќ€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ЬЫXЮH€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹™][X]TЫXЮJ›ЩJJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹Щ^XЭ]H€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹™^XЭ]JИ‹‹›ЩK[ќЋ€›ШЩ\ЬЛ™[ќ€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹Ь™XЩZ\€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€ЫЫњЭЩ[XЭ[Ы€H™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹њЩ[XЭ›ЭљY\ЉИ‹‹›ЩK[ќЋ€›ШЩ\ЬЛ™[ќ€JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹Ь™X]T™XЩZ\
›ЩKЩ[XЭ[Ы‹В€Э]\О€њ™XЩZ\Ь™\\™Y‹€Э[[X\ћN€”™XЩZ\™\\™YЪ]Э]^\›[›ЭљY\€^XЭ][Ы‹€‚€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ШШ\Xљ[]K\Э]\И€	‰€™\K›Y]ЩOOH”ФХЉHВ€ЫЫњЭ›ЩHH]ШZ]™XY›ЩJ™\JNВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹Ш\Xљ[]TЭ]\К›ЩKЫЫ[X[™€‹В€‹‹›ЩK€[ќЋ€›ШЩ\ЬЛ™[ќ‚€JJNВ€B‚€Y€
\›њ][YHOOH‹Ш\KЫ™^\ЛЬ›ЭљY\‹XXњЭXЭ[Ы‹ЬЩИ€	‰€™\K›Y]ЩOOH‘СUЉHВ€™]\›€Щ[™
™\ЛЊ™^\СЩ[™\Ъ\Ф›ЭљY\ђXњЭXЭ[Ы‹њЩК
JNВ€B‚€™]\›€Щ[™
™\ЛИ\њ›ЬЋ€ђTH›Э]H›Э›Э[™€JNВџB‚™ќ[Э[Ы€Щ\ќ™TЭ]XК™\K™\Л\›
HВ€Y€
\›њ][YHOOH‹Э™[™Ь‹Ы]™ZЪ]XЫY[ќЫ]™ZЪ]XЫY[ќ™\ЫK›ZњИЉHВ€ЫЫњЭ]™ZЪ]]H]љ›Ъ[Љ“УХ››ЩWЫ[Щ[\И‹›]™ZЪ]XЫY[ќ‹™\Э‹›]™ZЪ]XЫY[ќ™\ЫK›ZњИЉNВ€™]\›€њЛњ™XYљ[J]™ZЪ]]
\њ‹]JHO€В€Y€
\њЉH™]\›€Щ[™
™\Л“›Э›Э[™ЉNВ€™\ЛќЬљ]RXY
ЊВ€ЫЫќ[ќ]\HЋ€\XШ][Ы‹Ъ]\ШЬљ\ИЪ\њЩ]]]‹N‹€ШXЪKXЫЫќ›ЫЋ€››Л\ЭЬ™H‹€ћXЫЫќ[ќ]\K[Ь[ЫњИЋ€››ЬЫљY™€‚€JNВ€™\Л™[™
]JNВ€JNВ€B€]љ[T]H\›њ][YHOOH‹И€И]љ›Ъ[ЉP“PЛљ[™^љ[ЉH€]љ›Ъ[ЉP“PЛXЫЩUT’PЫЫ\Ы™[ќ
\›њ][YJJNВ€Y€
Yљ[T]њЭ\ќХЪ]
P“PКJH™]\›€Щ[™
™\ЛЛ‘›ЬљY[€ЉNВ€њЛњ™XYљ[Jљ[T]
\њ‹]JHO€В€Y€
\њЉH™]\›€Щ[™
™\Л“›Э›Э[™ЉNВ€ЫЫњЭ^H]™^[YJљ[T]
NВ€ЫЫњЭШXЪPЫЫќ›ЫH^OOH‹љ[€^OOH‹љњИ€^OOH‹›ZњИ€^OOH‹ЬЬИ€И››Л\ЭЬ™H€€њX›XЛX^XYЩOLНЊЋВ€™\ЛќЬљ]RXY
ЊИЫЫќ[ќ]\HЋ€Z[YVЩ^H\XШ][Ы‹ЫШЭ]\Э™X[H‹ШXЪKXЫЫќ›ЫЋ€ШXЪPЫЫќ›ЫJNВ€™\Л™[™
]JNВ€JNВџB‚ЫЫњЭЩ\ќ™\€HЬ™X]TЩ\ќ™\Љ\Ю[И
™\K™\КHO€В€ЫЫњЭ\›H™]ИT“
™\Kќ\›‹ЛЙЬ™\KљXY\њЛљЬЭX
NВ€ћHВ€Y€
\]S[Z]
™\JJH™]\›€Щ[™
™\ЛЋKИ\њ›ЬЋ€•ЫИX[ћH™\]Y\ЭИ€JNВ€Y€
\›њ][YKњЭ\ќХЪ]
‹Ш\KИЉJH™]\›€]ШZ]\J™\K™\Л\›
NВ€™]\›€Щ\ќ™TЭ]XК™\K™\Л\›
NВ€HШ]Ъ
\њ›ЬЉHВ€™]\›€Щ[™
™\ЛLИ\њ›ЬЋ€\њ›Ь‹›Y\ЬШYЩH”Щ\ќ™\€\њ›Ь€€JNВ€BџJNВ‚њЩ\ќ™\‹›ЫЉ™\њ›Ь€‹\њ›Ь€O€В€ЫЫњЫЫK™\њ›ЬЉYЬљS™^\ИЩ\ќ™\€Z[Y€	Щ\њ›Ь‹›Y\ЬШYЩ_X
NВ€›ШЩ\ЬЛ™^]
JNВџJNВ‚њЩ\ќ™\‹›\Э[ЉФ•ФХ

HO€В€ЫЫњЫЫK›ЩКYЬљS™^\Иќ[›љ[™И]‹ЛЙТФХN‰ФФ•X
NВџJNВ