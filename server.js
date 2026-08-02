Warning: truncated output (original token count: 695644)
... 1734000 bytes omitted ...

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
const { createProductionCertificationAdapter } = require("./rebuild/production-certification-adapter.js");
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
const AGRINEXUS_WEB_BUILD_VERSION = "nexus-behavior-502";
const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v447";
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

function durableAuthSecret(env = process.env) {
  return String(env.SESSION_SECRET || "").trim();
}

function issueDurableAuthToken(userId, now = Date.now(), env = process.env) {
  const secret = durableAuthSecret(env);
  if (!secret || !userId) return "";
  const ttlMs = Math.min(Math.max(Number(env.AUTH_SESSION_TTL_MS || 43_200_000), 900_000), 86_400_000);
  const payload = Buffer.from(JSON.stringify({
    userId: String(userId),
    issuedAt: now,
    expiresAt: now + ttlMs
  })).toString("base64url");
  const signature = crypto.createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

function verifyDurableAuthToken(token, now = Date.now(), env = process.env) {
  const secret = durableAuthSecret(env);
  const [payload = "", suppliedSignature = ""] = String(token || "").split(".");
  if (!secret || !payload || !suppliedSignature) return null;
  const expectedSignature = crypto.createHmac("sha256", secret).update(payload).digest("base64url");
  const expectedBuffer = Buffer.from(expectedSignature);
  const suppliedBuffer = Buffer.from(suppliedSignature);
  if (expectedBuffer.length !== suppliedBuffer.length
    || !crypto.timingSafeEqual(expectedBuffer, suppliedBuffer)) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!session.userId
      || Number(session.issuedAt || 0) > now + 60_000
      || Number(session.expiresAt || 0) <= now) return null;
    return session;
  } catch {
    return null;
  }
}

function currentUser(req, db) {
  const cookies = parseCookies(req);
  const sid = cookies.agrinexus_sid;
  const userId = sid && sessions.get(sid);
  const durableSession = userId ? null : verifyDurableAuthToken(cookies.agrinexus_auth);
  const resolvedUserId = userId || durableSession?.userId;
  return db.users.find(user => user.id === resolvedUserId) || null;
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
    …212152 tokens truncated…,
      intakeId: intake.id,
      encounterId: encounter.encounterId,
      patientRef: intake.patientRef,
      countryId: country.id,
      title: "Guided accessible intake packet",
      status: "Access plan ready",
      language: preferredLanguage,
      supports: ["caption relay", "audio description", "large-print summary", "caregiver handoff", "low-bandwidth callback"],
      createdAt
    }, body, {}, { simulation: true, defaultFields: ["supports"] });
    const referral = withHealthProvenance({
      id: crypto.randomUUID(),
      intakeId: intake.id,
      encounterId: encounter.encounterId,
      patientRef: intake.patientRef,
      destination: body.destination || `${country.name} partner clinic / community health worker`,
      reason: body.reason || "Guided intake flagged accessible follow-up and provider verification",
      transportSupport: "community aide callback and low-bandwidth directions",
      status: "sent",
      createdAt
    }, body, {
      destination: `${country.name} partner clinic / community health worker`,
      reason: "Guided intake flagged accessible follow-up and provider verification"
    }, { simulation: true });
    const followUp = withHealthProvenance({
      id: crypto.randomUUID(),
      intakeId: intake.id,
      encounterId: encounter.encounterId,
      patientRef: intake.patientRef,
      scheduleWindow: body.scheduleWindow || "24-hour voice callback with SMS summary",
      channels: ["voice callback", "SMS summary", "caregiver packet", "large-print/audio guide"],
      status: "scheduled",
      createdAt
    }, body, {
      scheduleWindow: "24-hour voice callback with SMS summary"
    }, { simulation: true });

    db.profile.telehealthConsents.unshift(consent);
    db.profile.telehealthVitals.unshift(vitals);
    db.profile.telehealthAccessibility.unshift(accessRecord);
    db.profile.telehealthReferrals.unshift(referral);
    db.profile.telehealthFollowUps.unshift(followUp);
    db.profile.telehealthConsents = db.profile.telehealthConsents.slice(0, 20);
    db.profile.telehealthVitals = db.profile.telehealthVitals.slice(0, 20);
    db.profile.telehealthAccessibility = db.profile.telehealthAccessibility.slice(0, 20);
    db.profile.telehealthReferrals = db.profile.telehealthReferrals.slice(0, 20);
    db.profile.telehealthFollowUps = db.profile.telehealthFollowUps.slice(0, 20);
    updateTelehealthEncounter(db.profile, encounter, {
      lifecycleState: "follow-up-needed",
      consentId: consent.id,
      vitalsId: vitals.id,
      referralId: referral.id,
      followUpId: followUp.id,
      demoRecord: true,
      simulation: true,
      source: "demo-simulation",
      defaultFields: [
        ...(intake.defaultFields || []),
        ...(consent.defaultFields || []),
        ...(vitals.defaultFields || []),
        ...(referral.defaultFields || []),
        ...(followUp.defaultFields || [])
      ]
    });
    db.profile.representativeConnections += 1;
    country.queue = "Guided intake complete";
    country.patients += 1;

    const events = [
      ["health-telehealth", "intake.created", `${intake.patientRef} guided telehealth intake record created.`],
      ["health-ehr", "telehealth.consent_recorded", `${consent.patientRef} consent captured during guided intake.`],
      ["health-telehealth", "telehealth.vitals_captured", `${vitals.patientRef} vitals captured during guided intake.`],
      ["health-ehr", "telehealth.accessibility_plan", `${accessRecord.patientRef} accessible intake packet prepared.`],
      ["health-notifications", "telehealth.referral_sent", `${referral.patientRef} referral sent during guided intake.`],
      ["health-notifications", "telehealth.followup_scheduled", `${followUp.patientRef} follow-up scheduled during guided intake.`]
    ];
    for (const [providerId, action, detail] of events) {
      logIntegration(db, {
        providerId,
        module: "Healthcare",
        action,
        detail,
        metadata: { intakeId: intake.id, patientRef: intake.patientRef, simulation: true }
      });
    }
    db.profile.aiActivity = `Guided intake completed for ${intake.patientRef}: consent, vitals, accessibility, referral, and follow-up are ready.`;
    addActivity(db.profile, db.profile.aiActivity);
    addWorkflowNote(db.profile, body.note, "Guided intake note");
    await writeDb(db);
    return send(res, 200, { ...publicState(db, user), intakeSimulationResult: { intake, consent, vitals, accessRecord, referral, followUp } });
  }

  if (url.pathname === "/api/health/advanced" && req.method === "POST") {
    if (!canWriteHealth(user)) return send(res, 403, { error: "Role does not allow advanced healthcare workflows" });
    const body = await readBody(req);
    const { country, route } = activeContext(db);
    ensureHealthProfile(db.profile);
    let intake = db.profile.healthIntakes[0];
    if (!intake) {
      intake = withHealthProvenance({
        id: crypto.randomUUID(),
        patientRef: `AN-PAT-${country.id.toUpperCase()}-ADV`,
        patientName: "Community patient",
        countryId: country.id,
        riskLevel: country.risk,
        needSummary: `${country.name} advanced telehealth care operations`,
        queueStatus: "Advanced care operations",
        representativeStatus: "Accessibility aide pending",
        preferredLanguage: user.language || "en",
        accessibilityNeeds: "Captions, audio narration, caregiver handoff",
        contactMethod: "Low-bandwidth callback",
        routeContext: { routeId: route.id, routeName: route.name, checkpoint: db.profile.activeCheckpoint },
        createdAt: new Date().toISOString()
      }, body, {
        patientName: "Community patient",
        needSummary: `${country.name} advanced telehealth care operations`,
        accessibilityNeeds: "Captions, audio narration, caregiver handoff",
        contactMethod: "Low-bandwidth callback"
      }, { defaultFields: ["fallbackIntake"] });
      db.profile.healthIntakes.unshift(intake);
    }
    const encounter = ensureTelehealthEncounterForIntake(db.profile, intake, {
      lifecycleState: "intake-started",
      demoRecord: intake.demoRecord,
      simulation: intake.simulation,
      source: intake.source,
      defaultFields: intake.defaultFields
    });
    const type = body.type || "appointment";
    const now = new Date().toISOString();
    const makers = {
      appointment: () => {
        const record = {
          id: crypto.randomUUID(),
          appointmentNumber: `AN-APT-${String(db.profile.telehealthAppointments.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          encounterId: encounter.encounterId,
          patientRef: intake.patientRef,
          scheduleWindow: body.scheduleWindow || "next available rural telehealth slot",
          modality: body.modality || "voice/video with SMS fallback",
          language: intake.preferredLanguage || user.language || "en",
          accessibility: ["captions", "audio summary", "caregiver handoff", "low-bandwidth callback"],
          status: "scheduled",
          createdAt: now
        };
        db.profile.telehealthAppointments.unshift(record);
        intake.queueStatus = "Telehealth appointment scheduled";
        return ["health-telehealth", "telehealth.appointment_scheduled", `${record.appointmentNumber} appointment scheduled for ${intake.patientRef}.`, record];
      },
      provider: () => {
        const record = {
          id: crypto.randomUUID(),
          assignmentNumber: `AN-PROV-${String(db.profile.telehealthProviderAssignments.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          encounterId: encounter.encounterId,
          patientRef: intake.patientRef,
          providerName: body.providerName || `${country.name} telehealth provider desk`,
          specialty: body.specialty || (intake.riskLevel === "High" ? "urgent rural care" : "primary care"),
          status: "assigned",
          createdAt: now
        };
        db.profile.telehealthProviderAssignments.unshift(record);
        intake.queueStatus = "Provider assigned";
        intake.representativeStatus = "Provider assigned";
        return ["health-telehealth", "telehealth.provider_assigned", `${record.assignmentNumber} provider assigned to ${intake.patientRef}.`, record];
      },
      history: () => {
        const record = {
          id: crypto.randomUUID(),
          historyNumber: `AN-HIST-${String(db.profile.patientHistoryRecords.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          encounterId: encounter.encounterId,
          patientRef: intake.patientRef,
          allergies: body.allergies || "none reported",
          conditions: body.conditions || "heat exposure risk, mobility/accessibility support, rural access barriers",
          medications: body.medications || "not recorded",
          caregiverContext: intake.caregiverName || "community accessibility aide",
          status: "recorded",
          createdAt: now
        };
        db.profile.patientHistoryRecords.unshift(record);
        return ["health-ehr", "patient.history_recorded", `${record.historyNumber} patient history recorded for ${intake.patientRef}.`, record];
      },
      prescription: () => {
        const record = {
          id: crypto.randomUUID(),
          packetNumber: `AN-RX-${String(db.profile.telehealthPrescriptionPackets.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          encounterId: encounter.encounterId,
          patientRef: intake.patientRef,
          packetType: "clinician review packet",
          contents: ["care plan", "referral", "vitals", "patient history", "accessibility needs", "pharmacy/clinic handoff"],
          status: "ready-for-clinician-review",
          createdAt: now
        };
        db.profile.telehealthPrescriptionPackets.unshift(record);
        return ["health-ehr", "telehealth.prescription_packet_ready", `${record.packetNumber} clinician packet prepared for ${intake.patientRef}.`, record];
      },
      emergency: () => {
        const record = {
          id: crypto.randomUUID(),
          escalationNumber: `AN-ESC-${String(db.profile.telehealthEmergencyEscalations.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          encounterId: encounter.encounterId,
          patientRef: intake.patientRef,
          reason: body.reason || "high-risk symptoms, heat exposure, or urgent access barrier",
          destination: `${country.name} emergency partner / community health worker`,
          status: "escalated",
          createdAt: now
        };
        db.profile.telehealthEmergencyEscalations.unshift(record);
        intake.queueStatus = "Emergency escalation opened";
        return ["health-notifications", "telehealth.emergency_escalated", `${record.escalationNumber} emergency escalation opened for ${intake.patientRef}.`, record];
      },
      note: () => {
        const record = {
          id: crypto.randomUUID(),
          noteNumber: `AN-NOTE-${String(db.profile.careTeamNotes.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          encounterId: encounter.encounterId,
          patientRef: intake.patientRef,
          author: user.name,
          note: body.note || "Care team reviewed accessibility, language, caregiver, and rural follow-up needs.",
          status: "recorded",
          createdAt: now
        };
        db.profile.careTeamNotes.unshift(record);
        return ["health-ehr", "care_team.note_recorded", `${record.noteNumber} care-team note recorded for ${intake.patientRef}.`, record];
      },
      outcome: () => {
        const record = {
          id: crypto.randomUUID(),
          outcomeNumber: `AN-OUT-${String(db.profile.telehealthOutcomeReviews.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          encounterId: encounter.encounterId,
          patientRef: intake.patientRef,
          outcome: body.outcome || "follow-up complete; patient connected to accessible care path",
          nextStep: body.nextStep || "continue caregiver-supported callback and provider review",
          status: "reviewed",
          createdAt: now
        };
        db.profile.telehealthOutcomeReviews.unshift(record);
        intake.queueStatus = "Outcome reviewed";
        return ["health-ehr", "telehealth.outcome_reviewed", `${record.outcomeNumber} outcome reviewed for ${intake.patientRef}.`, record];
      }
    };
    const maker = makers[type];
    if (!maker) return send(res, 400, { error: "Unsupported advanced health action" });
    const [providerId, action, detail, record] = maker();
    const advancedDefaults = {
      appointment: {
        scheduleWindow: "next available rural telehealth slot",
        modality: "voice/video with SMS fallback"
      },
      provider: {
        providerName: `${country.name} telehealth provider desk`,
        specialty: intake.riskLevel === "High" ? "urgent rural care" : "primary care"
      },
      history: {
        allergies: "none reported",
        conditions: "heat exposure risk, mobility/accessibility support, rural access barriers",
        medications: "not recorded",
        caregiverContext: intake.caregiverName || "community accessibility aide"
      },
      prescription: {},
      emergency: {
        reason: "high-risk symptoms, heat exposure, or urgent access barrier",
        destination: `${country.name} emergency partner / community health worker`
      },
      note: {
        note: "Care team reviewed accessibility, language, caregiver, and rural follow-up needs."
      },
      outcome: {
        outcome: "follow-up complete; patient connected to accessible care path",
        nextStep: "continue caregiver-supported callback and provider review"
      }
    };
    Object.assign(record, withHealthProvenance(record, body, advancedDefaults[type] || {}, intake.demoRecord || type === "prescription" ? { defaultFields: intake.demoRecord ? ["fallbackIntake"] : ["contents"] } : {}));
    record.encounterId = encounter.encounterId;
    const encounterUpdates = {
      appointment: { lifecycleState: "appointment-scheduled", appointmentId: record.id },
      provider: { lifecycleState: "provider-assigned", providerAssignmentId: record.id },
      history: { lifecycleState: "note-recorded", historyId: record.id },
      prescription: { lifecycleState: "note-recorded", prescriptionPacketId: record.id },
      emergency: { lifecycleState: "escalated", emergencyEscalationId: record.id },
      note: { lifecycleState: "note-recorded", noteId: record.id },
      outcome: { lifecycleState: "outcome-recorded", outcomeId: record.id }
    };
    updateTelehealthEncounter(db.profile, encounter, {
      ...(encounterUpdates[type] || {}),
      demoRecord: record.demoRecord || intake.demoRecord,
      simulation: record.simulation || intake.simulation,
      source: record.source || intake.source,
      defaultFields: record.defaultFields
    });
    const storeLimit = key => { db.profile[key] = db.profile[key].slice(0, 20); };
    ["telehealthAppointments", "telehealthProviderAssignments", "patientHistoryRecords", "telehealthPrescriptionPackets", "telehealthEmergencyEscalations", "careTeamNotes", "telehealthOutcomeReviews"].forEach(key => storeLimit(key));
    country.queue = intake.queueStatus;
    logIntegration(db, { providerId, module: "Healthcare", action, detail, metadata: { recordId: record.id, intakeId: intake.id, patientRef: intake.patientRef, type } });
    addActivity(db.profile, detail);
    addWorkflowNote(db.profile, body.note, "Advanced health note");
    await writeDb(db);
    const state = publicState(db, user);
    state.healthAdvancedResult = { type, record };
    return send(res, 200, state);
  }

  if (url.pathname === "/api/health/provider-workflow" && req.method === "POST") {
    if (!canWriteHealth(user)) return send(res, 403, { error: "Role does not allow provider healthcare workflows" });
    const body = await readBody(req);
    const { country } = activeContext(db);
    ensureHealthProfile(db.profile);
    const action = String(body.action || "queue-summary").trim();
    const supportedProviderActions = new Set(["queue-summary", "accept", "decline", "start-visit", "complete-visit", "request-follow-up", "escalate", "resolve-escalation"]);
    if (!supportedProviderActions.has(action)) return send(res, 400, { error: "Unsupported provider workflow action" });
    const queueSummary = () => {
      const encounters = (db.profile.telehealthEncounters || []).map(encounter => ({
        encounterId: encounter.encounterId,
        patientRef: encounter.patientRef,
        intakeId: encounter.intakeId,
        status: encounter.status,
        lifecycleState: encounter.lifecycleState,
        updatedAt: encounter.updatedAt,
        demoRecord: Boolean(encounter.demoRecord),
        simulation: Boolean(encounter.simulation),
        source: encounter.source,
        providerActionCount: encounter.providerActionCount || 0,
        linkedRecordCounts: encounter.linkedRecordCounts || telehealthEncounterLinkedCounts(encounter)
      }));
      const counts = encounters.reduce((summary, encounter) => {
        const state = encounter.lifecycleState || "unknown";
        summary[state] = (summary[state] || 0) + 1;
        return summary;
      }, {});
      return {
        mode: "local-demo-provider-queue",
        total: encounters.length,
        waiting: encounters.filter(encounter => !["completed", "provider-declined", "escalation-resolved"].includes(encounter.lifecycleState)).length,
        counts,
        encounters: encounters.slice(0, 25),
        note: "Local/demo queue summary only. No live clinician dispatch is implied."
      };
    };
    if (action === "queue-summary") {
      const state = publicState(db, user);
      state.providerWorkflowResult = { action, queue: queueSummary() };
      return send(res, 200, state);
    }

    const encounter = findTelehealthEncounter(db.profile, {
      encounterId: body.encounterId,
      intakeId: body.intakeId,
      patientRef: body.patientRef
    }) || (db.profile.telehealthEncounters || [])[0] || null;
    if (!encounter) return send(res, 409, { error: "Create a telehealth encounter before provider workflow actions" });

    const lifecycleByAction = {
      accept: "provider-accepted",
      decline: "provider-declined",
      "start-visit": "visit-active",
      "complete-visit": "completed",
      "request-follow-up": "follow-up-needed",
      escalate: "escalated",
      "resolve-escalation": "escalation-resolved"
    };
    const lifecycleState = lifecycleByAction[action];
    const providerName = String(body.providerName || user.name || "Telehealth provider").trim();
    const providerRole = String(body.providerRole || "local-demo-provider").trim();
    const reason = String(body.reason || "").trim();
    const noteSummary = String(body.noteSummary || body.note || "").trim();
    const createdAt = new Date().toISOString();
    const actionRecord = withHealthProvenance({
      actionId: crypto.randomUUID(),
      encounterId: encounter.encounterId,
      action,
      status: encounterStatusForLifecycle(lifecycleState, "active"),
      lifecycleState,
      providerName,
      providerRole,
      reason,
      noteSummary,
      createdAt,
      demoRecord: Boolean(encounter.demoRecord),
      simulation: Boolean(encounter.simulation),
      source: encounter.source || "telehealth-provider-workflow",
      defaultFields: encounter.defaultFields || []
    }, body, {
      providerName: user.name || "Telehealth provider",
      providerRole: "local-demo-provider"
    }, {
      defaultFields: encounter.defaultFields || [],
      simulation: encounter.simulation,
      source: encounter.source || "telehealth-provider-workflow"
    });
    db.profile.telehealthProviderActions.unshift(actionRecord);
    db.profile.telehealthProviderActions = db.profile.telehealthProviderActions.slice(0, 50);

    if (action === "request-follow-up") {
      const followUp = withHealthProvenance({
        id: crypto.randomUUID(),
        intakeId: encounter.intakeId,
        encounterId: encounter.encounterId,
        patientRef: encounter.patientRef,
        scheduleWindow: body.scheduleWindow || "provider-requested follow-up window",
        channels: ["voice callback", "SMS summary", "caregiver packet"],
        status: "provider-requested",
        createdAt
      }, body, { scheduleWindow: "provider-requested follow-up window" }, {
        defaultFields: encounter.defaultFields || [],
        simulation: encounter.simulation,
        source: encounter.source || "telehealth-provider-workflow"
      });
      db.profile.telehealthFollowUps.unshift(followUp);
      db.profile.telehealthFollowUps = db.profile.telehealthFollowUps.slice(0, 20);
      updateTelehealthEncounter(db.profile, encounter, { followUpId: followUp.id });
    }

    const updatedEncounter = updateTelehealthEncounter(db.profile, encounter, {
      lifecycleState,
      providerActionId: actionRecord.actionId,
      demoRecord: actionRecord.demoRecord || encounter.demoRecord,
      simulation: actionRecord.simulation || encounter.simulation,
      source: actionRecord.source || encounter.source,
      defaultFields: actionRecord.defaultFields,
      latestProviderAction: { action, status: actionRecord.status, lifecycleState, createdAt }
    });
    country.queue = `Provider workflow ${action} recorded`;
    db.profile.aiActivity = `Telehealth provider workflow ${action} recorded for ${encounter.patientRef || encounter.encounterId}.`;
    logIntegration(db, {
      providerId: "health-telehealth",
      module: "Healthcare",
      action: `telehealth.provider_workflow.${action}`,
      status: "success",
      detail: `Provider workflow ${action} recorded for ${encounter.patientRef || encounter.encounterId}.`,
      metadata: { actionId: actionRecord.actionId, encounterId: encounter.encounterId, lifecycleState }
    });
    addActivity(db.profile, db.profile.aiActivity);
    addWorkflowNote(db.profile, body.note, "Provider workflow note");
    await writeDb(db);
    const state = publicState(db, user);
    state.providerWorkflowResult = { action, actionRecord, encounter: updatedEncounter, queue: queueSummary() };
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/order" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow trade workflows" });
    const body = await readBody(req);
    ensureTradeProfile(db.profile);
    const product = (db.products || []).find(item => item.id === body.productId) || (db.products || []).find(item => item.name === body.product);
    const { country, route } = routeByProduct(db, product?.id || body.product || "");
    const checkpoint = route.checkpoints[0];
    const order = {
      id: crypto.randomUUID(),
      orderNumber: `AN-ORD-${String(db.profile.orders.length + 1).padStart(4, "0")}`,
      productId: product?.id || null,
      product: product?.name || body.product || "AgriNexus product",
      countryId: country.id,
      routeId: route.id,
      checkpoint,
      checkpointIndex: 0,
      stage: "Packed",
      stageIndex: 1,
      trackingNumber: `AN-TRK-${String(db.profile.orders.length + 1).padStart(4, "0")}`,
      buyerInterest: product?.buyerInterest || 50,
      total: product ? product.price * 20 : 1200,
      timeline: [
        { label: "Order created", checkpoint, createdAt: new Date().toISOString() },
        { label: "Packed", checkpoint, createdAt: new Date().toISOString() }
      ],
      createdAt: new Date().toISOString()
    };
    db.profile.orders.push(order);
    db.profile.activeCountryId = country.id;
    db.profile.activeRouteId = route.id;
    db.profile.activeCheckpoint = order.checkpoint;
    db.profile.routeStage = order.stage;
    addTradeEvent(db.profile, { type: "order.created", label: `${order.orderNumber} created for ${order.product}` });
    logIntegration(db, {
      providerId: "trade-market",
      module: "AgriTrade",
      action: "order.created",
      detail: `${order.orderNumber} created with ${order.buyerInterest}% buyer interest.`,
      metadata: { orderId: order.id, productId: order.productId }
    });
    const trackingResult = await refreshOrderLogisticsTracking(db, order, user, "logistics.order_created_tracking");
    addActivity(db.profile, `Order created for ${order.product}.`);
    addActivity(db.profile, trackingResult.delivery?.ok ? `Live logistics tracking connected for ${order.orderNumber}.` : `Shipment tracking prepared for ${order.orderNumber}.`);
    addWorkflowNote(db.profile, body.note, "Order note");
    await writeDb(db);
    const state = publicState(db, user);
    state.logisticsTrackingResult = trackingResult;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/advance" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow trade workflows" });
    const body = await readBody(req);
    ensureTradeProfile(db.profile);
    const order = db.profile.orders[db.profile.orders.length - 1];
    if (!order) return send(res, 409, { error: "Create an order first" });
    const route = db.routes.find(item => item.id === order.routeId) || activeRoute();
    const stages = ["Order created", "Packed", "In transit", "Quality check", "Delivered"];
    order.stageIndex = Math.min(stages.length - 1, (order.stageIndex || 0) + 1);
    order.stage = stages[order.stageIndex];
    order.checkpointIndex = Math.min(route.checkpoints.length - 1, (order.checkpointIndex || 0) + 1);
    order.checkpoint = route.checkpoints[order.checkpointIndex];
    order.timeline.unshift({ label: order.stage, checkpoint: order.checkpoint, createdAt: new Date().toISOString() });
    db.profile.routeStage = order.stage;
    db.profile.activeCheckpoint = order.checkpoint;
    addTradeEvent(db.profile, { type: "order.advanced", label: `${order.orderNumber} advanced to ${order.stage} at ${order.checkpoint}` });
    logIntegration(db, {
      providerId: "trade-logistics",
      module: "AgriTrade",
      action: "checkpoint.updated",
      detail: `${order.orderNumber} moved to ${order.checkpoint}.`,
      metadata: { orderId: order.id, stage: order.stage, checkpoint: order.checkpoint }
    });
    const trackingResult = await refreshOrderLogisticsTracking(db, order, user, "logistics.tracking_status");
    addActivity(db.profile, `Order advanced to ${db.profile.routeStage}.`);
    addActivity(db.profile, trackingResult.delivery?.ok ? `Live logistics provider refreshed ${order.orderNumber}.` : `Shipment tracker refreshed ${order.orderNumber} from route state.`);
    addWorkflowNote(db.profile, body.note, "Logistics note");
    await writeDb(db);
    const state = publicState(db, user);
    state.logisticsTrackingResult = trackingResult;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/tracking" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow trade workflows" });
    const body = await readBody(req);
    ensureTradeProfile(db.profile);
    const order = body.orderId
      ? db.profile.orders.find(item => item.id === body.orderId)
      : db.profile.orders[db.profile.orders.length - 1];
    if (!order) return send(res, 409, { error: "Create an order first" });
    const trackingResult = await refreshOrderLogisticsTracking(db, order, user, "logistics.manual_tracking_refresh");
    addActivity(db.profile, trackingResult.delivery?.ok ? `Live shipment tracking refreshed for ${order.orderNumber}.` : `Shipment tracking refreshed for ${order.orderNumber}.`);
    addWorkflowNote(db.profile, body.note, "Tracking note");
    await writeDb(db);
    const state = publicState(db, user);
    state.logisticsTrackingResult = trackingResult;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/logistics" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow trade logistics workflows" });
    const body = await readBody(req);
    const result = await createTradeLogisticsWorkflow(db, user, body);
    addWorkflowNote(db.profile, body.note, "Buyer-seller logistics note");
    await writeDb(db);
    const state = publicState(db, user);
    state.tradeLogisticsResult = result;
    state.logisticsTrackingResult = result.trackingResult;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/payment-checkout" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow trade payment checkout workflows" });
    const body = await readBody(req);
    const checkout = await initializeTradePaymentCheckout(db, user, body);
    addWorkflowNote(db.profile, body.note, "Payment checkout note");
    await writeDb(db);
    const state = publicState(db, user);
    state.tradePaymentCheckoutResult = checkout;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/wallet" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow wallet workflows" });
    const body = await readBody(req);
    ensureTradeProfile(db.profile);
    const tx = {
      id: crypto.randomUUID(),
      provider: body.provider || "Wallet",
      amount: Number(body.amount || 0),
      type: Number(body.amount || 0) >= 0 ? "credit" : "debit",
      status: "posted",
      createdAt: new Date().toISOString()
    };
    db.profile.wallet += tx.amount;
    db.profile.walletTransactions.unshift(tx);
    addTradeEvent(db.profile, { type: "wallet.transaction", label: `${tx.provider} ${tx.type} posted for $${Math.abs(tx.amount)}` });
    logIntegration(db, {
      providerId: "trade-payments",
      module: "AgriTrade",
      action: "wallet.transaction",
      detail: `${tx.provider} ${tx.type} posted.`,
      metadata: { transactionId: tx.id, amount: tx.amount }
    });
    addActivity(db.profile, `${tx.provider} payment posted: $${tx.amount}.`);
    addWorkflowNote(db.profile, body.note, "Payment note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/trade/buyer-contact" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow buyer contact workflows" });
    const body = await readBody(req);
    const contact = createBuyerContactWorkflow(db, user, body.note || "Buyer contact requested from workflow.");
    addWorkflowNote(db.profile, body.note, "Buyer contact note");
    await writeDb(db);
    const state = publicState(db, user);
    state.buyerContactResult = contact;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/message" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow buyer-seller messaging workflows" });
    const body = await readBody(req);
    const result = await createBuyerSellerMessage(db, user, body);
    addWorkflowNote(db.profile, body.note, "Buyer-seller message note");
    await writeDb(db);
    const state = publicState(db, user);
    state.tradeMessageResult = result;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/drone-scan" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow drone field intelligence workflows" });
    const body = await readBody(req);
    let scan;
    try {
      ({ scan } = createDroneScan(db, {
        productId: body.productId,
        source: "operator",
        fieldZone: body.fieldZone,
        scanType: body.scanType
      }));
    } catch (error) {
      return send(res, 409, { error: error.message });
    }
    addActivity(db.profile, `${scan.scanRef} drone scan completed for ${scan.productName}.`);
    addWorkflowNote(db.profile, body.note, "Drone scan note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/trade/drone-mission" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow drone mission workflows" });
    const body = await readBody(req);
    let mission;
    try {
      mission = createDroneMission(db, {
        productId: body.productId,
        source: "operator",
        fieldZone: body.fieldZone,
        objective: body.objective
      });
    } catch (error) {
      return send(res, 409, { error: error.message });
    }
    addActivity(db.profile, `${mission.missionRef} drone mission planned for ${mission.productName}.`);
    addWorkflowNote(db.profile, body.note, "Drone mission note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/trade/drone-intervention" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow drone intervention workflows" });
    const body = await readBody(req);
    let task;
    try {
      task = createFieldIntervention(db, {
        source: "operator",
        assignedTo: body.assignedTo || "Field agritech team"
      });
    } catch (error) {
      return send(res, 409, { error: error.message });
    }
    addActivity(db.profile, `${task.taskRef} drone intervention assigned for ${task.productName}.`);
    addWorkflowNote(db.profile, body.note, "Field intervention note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/trade/drone-advanced" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow advanced drone workflows" });
    const body = await readBody(req);
    let record;
    try {
      record = createAdvancedDroneOperation(db, {
        type: body.type,
        productId: body.productId,
        source: "operator"
      });
    } catch (error) {
      return send(res, 409, { error: error.message });
    }
    const label = record.reportRef || record.planRef || record.alertRef || record.sprayRef || record.forecastRef || record.auditRef;
    addActivity(db.profile, `${label} advanced drone operation completed for ${record.productName}.`);
    addWorkflowNote(db.profile, body.note, "Advanced drone note");
    await writeDb(db);
    const state = publicState(db, user);
    state.droneAdvancedResult = { type: body.type || "field-report", record };
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/advanced" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow trade workflows" });
    const body = await readBody(req);
    ensureTradeProfile(db.profile);
    const product = (db.products || []).find(item => item.id === body.productId) || (db.products || [])[0];
    const order = db.profile.orders[db.profile.orders.length - 1] || null;
    const now = new Date().toISOString();
    const type = body.type || "quote";
    const actions = {
      quote: () => {
        const record = {
          id: crypto.randomUUID(),
          quoteNumber: `AN-QTE-${String(db.profile.tradeQuotes.length + 1).padStart(3, "0")}`,
          productId: product?.id || null,
          productName: product?.name || order?.product || "Active crop lot",
          buyerName: "Regional buyer desk",
          quantity: body.quantity || `20 ${product?.unit || "units"}`,
          price: Number(body.price || product?.price || 650),
          status: "sent",
          createdAt: now
        };
        db.profile.tradeQuotes.unshift(record);
        return ["trade-market", "quote.sent", `${record.quoteNumber} quote sent for ${record.productName}.`, record];
      },
      quality: () => {
        const record = {
          id: crypto.randomUUID(),
          inspectionNumber: `AN-QA-${String(db.profile.qualityInspections.length + 1).padStart(3, "0")}`,
          productName: product?.name || order?.product || "Active crop lot",
          grade: body.grade || "Export A",
          checks: ["moisture", "packaging", "visual defects", "traceability", "buyer specification"],
          status: "passed",
          createdAt: now
        };
        db.profile.qualityInspections.unshift(record);
        return ["trade-logistics", "quality.inspected", `${record.inspectionNumber} quality inspection passed at ${record.grade}.`, record];
      },
      "cold-chain": () => {
        const record = {
          id: crypto.randomUUID(),
          checkNumber: `AN-COLD-${String(db.profile.coldChainChecks.length + 1).padStart(3, "0")}`,
          productName: product?.name || order?.product || "Active crop lot",
          temperatureC: Number(body.temperatureC || 4.2),
          checkpoints: ["pre-cool", "loading", "route monitor", "handoff"],
          status: "compliant",
          createdAt: now
        };
        db.profile.coldChainChecks.unshift(record);
        return ["trade-logistics", "cold_chain.checked", `${record.checkNumber} cold-chain check marked ${record.status}.`, record];
      },
      export: () => {
        const record = {
          id: crypto.randomUUID(),
          exportNumber: `AN-EXP-${String(db.profile.exportReadiness.length + 1).padStart(3, "0")}`,
          productName: product?.name || order?.product || "Active crop lot",
          documents: ["invoice", "quality certificate", "traceability sheet", "route manifest", "buyer confirmation"],
          status: "ready-for-export",
          createdAt: now
        };
        db.profile.exportReadiness.unshift(record);
        return ["trade-logistics", "export.ready", `${record.exportNumber} export readiness packet prepared.`, record];
      },
      contract: () => {
        const record = {
          id: crypto.randomUUID(),
          contractNumber: `AN-CON-${String(db.profile.contractPackets.length + 1).padStart(3, "0")}`,
          productName: product?.name || order?.product || "Active crop lot",
          buyerName: db.profile.buyerContacts[0]?.buyerName || "Regional buyer desk",
          terms: ["quantity", "price", "delivery window", "quality grade", "payment release"],
          status: "draft-ready",
          createdAt: now
        };
        db.profile.contractPackets.unshift(record);
        return ["trade-market", "contract.packet_ready", `${record.contractNumber} buyer contract packet drafted.`, record];
      },
      release: () => {
        const latestQuote = db.profile.tradeQuotes[0];
        const record = {
          id: crypto.randomUUID(),
          releaseNumber: `AN-REL-${String(db.profile.paymentReleases.length + 1).padStart(3, "0")}`,
          quoteNumber: latestQuote?.quoteNumber || null,
          amount: Number(body.amount || latestQuote?.price || product?.price || 650),
          status: "released",
          createdAt: now
        };
        db.profile.paymentReleases.unshift(record);
        db.profile.wallet = Number(db.profile.wallet || 0) + record.amount;
        db.profile.walletTransactions.unshift({
          id: crypto.randomUUID(),
          provider: "Escrow release",
          amount: record.amount,
          type: "credit",
          status: "posted",
          createdAt: now
        });
        return ["trade-payments", "payment.released", `${record.releaseNumber} payment released for $${record.amount}.`, record];
      }
    };
    const handler = actions[type];
    if (!handler) return send(res, 400, { error: "Unsupported advanced trade action" });
    const [providerId, action, detail, record] = handler();
    addTradeEvent(db.profile, { type: action, label: detail });
    logIntegration(db, { providerId, module: "AgriTrade", action, detail, metadata: { recordId: record.id, type, productId: product?.id || null } });
    addActivity(db.profile, detail);
    addWorkflowNote(db.profile, body.note, "Advanced trade note");
    await writeDb(db);
    const state = publicState(db, user);
    state.tradeAdvancedResult = { type, record };
    return send(res, 200, state);
  }

  if (url.pathname === "/api/ai/run" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow AI workflows" });
    const body = await readBody(req);
    const { country, route } = activeContext(db);
    const type = body.type || "command";
    const result = await runAi(type, country, route, db.profile);
    recordAiRun(db, { type, country, route, result, module: body.module || aiModuleForType(type, "AI") });
    addActivity(db.profile, db.profile.aiActivity);
    addWorkflowNote(db.profile, body.note, "AI note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/ai/review" && req.method === "POST") {
    if (!canUse(user, "governance")) return send(res, 403, { error: "Role does not allow AI review" });
    const body = await readBody(req);
    ensureAiProfile(db.profile);
    const run = db.profile.aiRuns.find(item => item.id === body.runId) || db.profile.aiRuns[0];
    if (!run) return send(res, 404, { error: "AI run not found" });
    run.reviewStatus = body.decision === "reject" ? "rejected" : "approved";
    run.reviewedBy = user.name;
    run.reviewedAt = new Date().toISOString();
    run.reviewNote = String(body.note || "").trim();
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "ai.reviewed",
      detail: `${run.type} AI run ${run.reviewStatus} by ${user.name}.`,
      metadata: { runId: run.id, decision: run.reviewStatus }
    });
    addActivity(db.profile, `${run.type} AI run ${run.reviewStatus} by ${user.name}.`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/ai/orchestrate" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow AI orchestration" });
    const body = await readBody(req);
    const result = await aiOrchestrationReview(db, user, body);
    addWorkflowNote(db.profile, body.note, "AI orchestration note");
    await writeDb(db);
    const state = publicState(db, user);
    state.aiOrchestrationResult = result;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/intelligence/workflow" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow workflow intelligence" });
    const body = await readBody(req);
    const intelligence = workflowIntelligence(db, user, body);
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "workflow.intelligence_generated",
      detail: `${intelligence.module} intelligence generated for ${intelligence.action}.`,
      metadata: { intelligenceId: intelligence.id, module: intelligence.module, action: intelligence.action }
    });
    addActivity(db.profile, `Workflow intelligence: ${intelligence.nextStep}`);
    await writeDb(db);
    const state = publicState(db, user);
    state.workflowIntelligenceResult = intelligence;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/map/advanced" && req.method === "POST") {
    if (!canUse(user, "map")) return send(res, 403, { error: "Role does not allow map operations" });
    const body = await readBody(req);
    ensureAiProfile(db.profile);
    const { country, route } = activeContext(db);
    const type = body.type || "farmer-location";
    const checkpoint = db.profile.activeCheckpoint || route.checkpoints?.[0] || country.capital;
    let action = "map.operation_completed";
    let detail = "Advanced map operation completed.";
    let record;

    if (type === "field-zone") {
      record = {
        id: crypto.randomUUID(),
        zoneNumber: `ZONE-${country.id.toUpperCase()}-${String(db.profile.fieldZones.length + 1).padStart(3, "0")}`,
        zoneName: body.zoneName || `${country.cropFocus || "Crop"} resilience zone`,
        countryId: country.id,
        routeId: route.id,
        cropFocus: country.cropFocus || "Staple crop",
        riskProfile: `${country.risk} route risk with ${country.queue} access queue`,
        linkedDroneScans: (db.profile.droneScans || []).slice(0, 3).map(item => item.scanRef || item.id),
        status: "field-zone-ready",
        createdAt: new Date().toISOString()
      };
      db.profile.fieldZones.unshift(record);
      db.profile.fieldZones = db.profile.fieldZones.slice(0, 20);
      action = "map.field_zone_created";
      detail = `${record.zoneNumber} created for ${record.cropFocus} operations in ${country.name}.`;
    } else if (type === "facility-route") {
      record = {
        id: crypto.randomUUID(),
        routeNumber: `ROUTE-${country.id.toUpperCase()}-${String(db.profile.facilityRoutes.length + 1).padStart(3, "0")}`,
        origin: body.origin || checkpoint,
        destination: body.destination || (country.facilities > 1 ? "Nearest rural facility hub" : "Community access point"),
        purpose: body.purpose || "Move people, care packets, crop lots, and workforce teams with audit evidence.",
        countryId: country.id,
        routeId: route.id,
        status: "facility-route-ready",
        createdAt: new Date().toISOString()
      };
      db.profile.facilityRoutes.unshift(record);
      db.profile.facilityRoutes = db.profile.facilityRoutes.slice(0, 20);
      action = "map.facility_route_ready";
      detail = `${record.routeNumber} prepared from ${record.origin} to ${record.destination}.`;
    } else if (type === "disruption") {
      record = {
        id: crypto.randomUUID(),
        disruptionNumber: `DISRUPT-${country.id.toUpperCase()}-${String(db.profile.routeDisruptions.length + 1).padStart(3, "0")}`,
        checkpoint,
        issue: body.issue || "Road, weather, fuel, or clinic access delay reported by field team.",
        severity: body.severity || (country.risk === "High" ? "high" : "medium"),
        mitigation: body.mitigation || "Reroute through alternate checkpoint, notify affected teams, and monitor provider handoff.",
        countryId: country.id,
        routeId: route.id,
        status: "mitigation-ready",
        createdAt: new Date().toISOString()
      };
      db.profile.routeDisruptions.unshift(record);
      db.profile.routeDisruptions = db.profile.routeDisruptions.slice(0, 20);
      action = "map.route_disruption_recorded";
      detail = `${record.disruptionNumber} recorded at ${checkpoint} with ${record.severity} severity.`;
    } else if (type === "risk-layer") {
      const score = country.risk === "High" ? 82 : country.risk === "Medium" ? 58 : 34;
      record = {
        id: crypto.randomUUID(),
        layerNumber: `RISK-${country.id.toUpperCase()}-${String(db.profile.mapRiskLayers.length + 1).padStart(3, "0")}`,
        layers: body.layers || ["road access", "clinic reach", "market movement", "weather exposure", "workforce coverage"],
        score,
        countryId: country.id,
        routeId: route.id,
        status: "risk-layer-generated",
        createdAt: new Date().toISOString()
      };
      db.profile.mapRiskLayers.unshift(record);
      db.profile.mapRiskLayers = db.profile.mapRiskLayers.slice(0, 20);
      action = "map.risk_layer_generated";
      detail = `${record.layerNumber} generated with ${score} composite risk score.`;
    } else if (type === "evidence") {
      record = {
        id: crypto.randomUUID(),
        packetNumber: `MAP-EVIDENCE-${country.id.toUpperCase()}-${String(db.profile.mapEvidencePackets.length + 1).padStart(3, "0")}`,
        countryId: country.id,
        routeId: route.id,
        evidence: [
          `${db.profile.farmerLocations.length} farmer locations`,
          `${db.profile.fieldZones.length} field zones`,
          `${db.profile.facilityRoutes.length} facility routes`,
          `${db.profile.routeDisruptions.length} disruptions`,
          `${db.profile.mapRiskLayers.length} risk layers`,
          `${db.profile.mapInsights.length} map insights`
        ],
        status: "evidence-packet-ready",
        createdAt: new Date().toISOString()
      };
      db.profile.mapEvidencePackets.unshift(record);
      db.profile.mapEvidencePackets = db.profile.mapEvidencePackets.slice(0, 20);
      action = "map.evidence_packet_ready";
      detail = `${record.packetNumber} compiled for ${country.name} map operations.`;
    } else {
      record = {
        id: crypto.randomUUID(),
        locationNumber: `FARMER-${country.id.toUpperCase()}-${String(db.profile.farmerLocations.length + 1).padStart(3, "0")}`,
        farmerName: body.farmerName || "Rural producer group",
        countryId: country.id,
        routeId: route.id,
        lat: country.lat,
        lng: country.lng,
        accessNeeds: body.accessNeeds || "Low-bandwidth voice, route support, accessible training, and buyer connection.",
        status: "mapped",
        createdAt: new Date().toISOString()
      };
      db.profile.farmerLocations.unshift(record);
      db.profile.farmerLocations = db.profile.farmerLocations.slice(0, 20);
      action = "map.farmer_location_mapped";
      detail = `${record.locationNumber} mapped for ${record.farmerName} in ${country.name}.`;
    }

    addMapInsight(db.profile, {
      type: action,
      label: detail.split(".")[0],
      detail,
      routeName: route.name,
      checkpoint
    });
    logIntegration(db, {
      providerId: "maps",
      module: "Maps",
      action,
      detail,
      metadata: { recordId: record.id, type, countryId: country.id, routeId: route.id }
    });
    addActivity(db.profile, detail);
    addWorkflowNote(db.profile, body.note, "Map note");
    const state = publicState(db, user);
    state.mapAdvancedResult = { type, record };
    await writeDb(db);
    return send(res, 200, state);
  }

  if (url.pathname === "/api/agent/plan" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow agent planning" });
    const body = await readBody(req);
    ensureAiProfile(db.profile);
    const goal = String(body.goal || "Create an AgriNexus cross-module plan.").trim();
    const plan = buildAgentPlan(db, goal, user);
    db.profile.agentPlans.unshift(plan);
    db.profile.agentPlans = db.profile.agentPlans.slice(0, 12);
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.plan_created",
      detail: `Agent plan created with ${plan.steps.length} tool steps.`,
      metadata: { planId: plan.id, goal }
    });
    addActivity(db.profile, `Agent plan created: ${goal}`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/cloud-agent/status" && req.method === "GET") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow cloud agent status" });
    const state = publicState(db, user);
    state.cloudAgent = cloudAgentTransparencyPacket(db, user);
    return send(res, 200, state);
  }

  if (url.pathname === "/api/cloud-agent/run" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow cloud agent runs" });
    const body = await readBody(req);
    const goal = String(body.goal || "Run a controlled AgriNexus cloud-agent mission.").trim();
    const run = createCloudAgentRun(db, user, goal, { autonomous: body.autonomous === true });
    let result = { run };
    if (body.execute === true || body.approved === true) {
      result = await executeCloudAgentRun(db, user, run, { approved: body.approved === true });
    }
    addWorkflowNote(db.profile, body.note, "Cloud agent note");
    await writeDb(db);
    const state = publicState(db, user);
    state.cloudAgentResult = result;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/cloud-agent/tick" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow cloud agent queue execution" });
    const body = await readBody(req);
    const result = await cloudAgentTick(db, user, { approved: body.approved === true });
    await writeDb(db);
    const state = publicState(db, user);
    state.cloudAgentTick = result;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/cloud-agent/tool-template" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow cloud agent tool templates" });
    const body = await readBody(req);
    try {
      const template = createCloudAgentToolTemplate(db, user, body);
      await writeDb(db);
      const state = publicState(db, user);
      state.cloudAgentToolTemplate = template;
      return send(res, 200, state);
    } catch (error) {
      return send(res, error.statusCode || 400, { error: error.message || "Tool template could not be created" });
    }
  }

  if (url.pathname === "/api/cloud-agent/approve" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow cloud agent approval" });
    const body = await readBody(req);
    ensureAiProfile(db.profile);
    let approvalResult = null;
    if (body.templateId) {
      const template = db.profile.cloudAgentToolTemplates.find(item => item.id === body.templateId);
      if (!template) return send(res, 404, { error: "Cloud agent tool template not found" });
      if (user.role !== "admin") return send(res, 403, { error: "Only admin can approve tool templates" });
      template.status = "approved-template";
      template.approvedBy = user.email;
      template.approvedAt = new Date().toISOString();
      template.updatedAt = template.approvedAt;
      approvalResult = { template };
      cloudAgentAudit(db.profile, {
        type: "tool-template-approved",
        status: "approved-template",
        summary: `${template.title} approved for future supervised binding.`,
        actor: user.email,
        templateId: template.id
      });
    }
    if (body.runId) {
      const run = db.profile.cloudAgentRuns.find(item => item.id === body.runId);
      if (!run) return send(res, 404, { error: "Cloud agent run not found" });
      approvalResult = await executeCloudAgentRun(db, user, run, { approved: true });
    }
    if (!approvalResult) return send(res, 400, { error: "Provide runId or templateId to approve." });
    await writeDb(db);
    const state = publicState(db, user);
    state.cloudAgentApproval = approvalResult;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/cloud-agent/audit" && req.method === "GET") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow cloud agent audit" });
    const state = publicState(db, user);
    state.cloudAgentAudit = (db.profile.cloudAgentAudit || []).slice(0, 50);
    return send(res, 200, state);
  }

  if (url.pathname === "/api/agent/execute" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow agent execution" });
    const body = await readBody(req);
    ensureAiProfile(db.profile);
    const plan = db.profile.agentPlans.find(item => item.id === body.planId) || db.profile.agentPlans[0];
    if (!plan) return send(res, 404, { error: "Agent plan not found" });
    const approved = body.approved !== false;
    if (!approved) return send(res, 409, { error: "Agent execution requires operator approval." });
    const execution = await executeAgentPlanObject(db, user, plan, body.note || "Approved from Agent Command Center");
    addWorkflowNote(db.profile, body.note, "Agent note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/agent/briefing" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow agent briefings" });
    const body = await readBody(req);
    const briefing = agentBriefing(db, user, body.purpose || "government presentation");
    await writeDb(db);
    const state = publicState(db, user);
    state.briefingResult = briefing;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/agent/reasoning-language" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow agent reasoning" });
    const body = await readBody(req);
    const command = String(body.command || "Review Nexus reasoning and language production").trim();
    const moduleSignal = conversationModuleSignal(command);
    const memories = retrieveAgentMemories(db.profile, command, 6);
    const reasoning = aiReasoningSnapshot(db, user, command, moduleSignal, memories, { mode: body.mode, modeContext: body.modeContext, targetLanguage: body.targetLanguage });
    const engine = reasoningLanguageProductionEngine(db, user, command, { moduleSignal, memories, reasoning, targetLanguage: body.targetLanguage });
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.reasoning_language_production_endpoint",
      detail: `Reasoning language endpoint reviewed ${engine.readyCount}/${engine.total} layer(s).`,
      metadata: { engineId: engine.id, status: engine.status },
      dispatch: false
    });
    await writeDb(db);
    const state = publicState(db, user);
    state.reasoningLanguageProduction = engine;
    state.reasoning = reasoning;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/agent/command" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow agent commands" });
    const body = await readBody(req);
    const canonicalCommandLanguage = canonicalVoiceLanguage(body.targetLanguage || body.language || user.language || "en");
    const canonicalCommandInputMode = body.inputMode || "api";
    const correlationId = genesisVoiceCorrelationId(body.correlationId);
    const routeStartedAt = Date.now();
    safeGenesisVoiceStageEvent(db, {
      correlationId,
      stage: "command-route-received",
      success: true,
      route: "/api/agent/command",
      sourceFunction: "api.agent.command"
    });
    const openAiNativeResult = await runNexusOpenAiNativeAgentCommand(db, user, {
      ...body,
      correlationId,
      inputMode: body.inputMode || "api"
    });
    if (openAiNativeResult) {
      openAiNativeResult.metadata = {
        ...(openAiNativeResult.metadata || {}),
        language: canonicalCommandLanguage,
        targetLanguage: canonicalCommandLanguage,
        inputMode: canonicalCommandInputMode
      };
      commandRecord(db, user, body.command || body.text || "", openAiNativeResult);
      const nexusResponse = normalizeNexusResponseEnvelope(openAiNativeResult, {
        correlationId,
        route: "/api/agent/command",
        command: body.command || body.text || "",
        inputMode: body.inputMode || "api",
        outputMode: body.outputMode || "",
        language: body.targetLanguage || body.language || user.language
      });
      const genesisResponse = normalizeGenesisCommandResponse(openAiNativeResult, {
        correlationId,
        route: "/api/agent/command",
        command: body.command || body.text || "",
        inputMode: body.inputMode || "api",
        outputMode: body.outputMode || "",
        language: body.targetLanguage || body.language || user.language
      });
      updateNexusSessionContext(db, body.command || body.text || "", nexusResponse);
      safeGenesisVoiceStageEvent(db, {
        correlationId,
        stage: "response-normalized",
        success: Boolean(nexusResponse.response),
        route: "/api/agent/command",
        intent: nexusResponse.intent,
        responseFieldSelected: nexusResponse.diagnostics.responseFieldSelected,
        responseLength: nexusResponse.diagnostics.responseLength,
        sanitizedLength: nexusResponse.diagnostics.sanitizedLength,
        sourceFunction: "runNexusOpenAiNativeAgentCommand"
      });
      safeGenesisVoiceStageEvent(db, {
        correlationId,
        stage: "command-route-returned",
        success: true,
        route: "/api/agent/command",
        intent: nexusResponse.intent,
        httpStatus: 200,
        responseFieldSelected: nexusResponse.diagnostics.responseFieldSelected,
        responseLength: nexusResponse.diagnostics.responseLength,
        sanitizedLength: nexusResponse.diagnostics.sanitizedLength,
        elapsedTimeMs: Date.now() - routeStartedAt,
        sourceFunction: "api.agent.command.openai_native"
      });
      await writeDb(db);
      const state = publicState(db, user);
      state.commandResult = openAiNativeResult;
      state.nexusResponse = nexusResponse;
      state.genesisResponse = genesisResponse;
      state.openAiNativeAgent = openAiNativeResult.metadata?.openAiNativeAgent || null;
      return send(res, 200, state);
    }
    const { result, companionUnderstanding, companionRouteOutcome } = await runCompanionSafeAgentCommand(db, user, {
      ...body,
      correlationId,
      inputMode: body.inputMode || "api"
    });
    result.metadata = {
      ...(result.metadata || {}),
      language: canonicalCommandLanguage,
      targetLanguage: canonicalCommandLanguage,
      inputMode: canonicalCommandInputMode
    };
    safeGenesisVoiceStageEvent(db, {
      correlationId,
      stage: "intent-selected",
      success: true,
      route: "/api/agent/command",
      intent: result?.intent || "unknown",
      sourceFunction: "runCompanionSafeAgentCommand"
    });
    safeGenesisVoiceStageEvent(db, {
      correlationId,
      stage: "response-generated",
      success: Boolean(result?.response || result?.message || result?.answer || result?.summary),
      route: "/api/agent/command",
      intent: result?.intent || "unknown",
      responseLength: String(result?.response || result?.message || result?.answer || result?.summary || "").length,
      sourceFunction: "runCompanionSafeAgentCommand"
    });
    const nexusResponse = normalizeNexusResponseEnvelope(result, {
      correlationId,
      route: "/api/agent/command",
      command: body.command || body.text || "",
      inputMode: body.inputMode || "api",
      outputMode: body.outputMode || "",
      language: body.targetLanguage || body.language || user.language,
      companionUnderstanding,
      companionRouteOutcome
    });
    const genesisResponse = normalizeGenesisCommandResponse(result, {
      correlationId,
      route: "/api/agent/command",
      command: body.command || body.text || "",
      inputMode: body.inputMode || "api",
      outputMode: body.outputMode || "",
      language: body.targetLanguage || body.language || user.language,
      companionUnderstanding,
      companionRouteOutcome
    });
    // Keep the legacy commandResult response aligned with the canonical speakable envelope.
    // This prevents presentation-only whitespace differences from splitting the authoritative response.
    result.response = nexusResponse.response;
    updateNexusSessionContext(db, body.command || body.text || "", nexusResponse);
    safeGenesisVoiceStageEvent(db, {
      correlationId,
      stage: "response-normalized",
      success: Boolean(nexusResponse.response),
      route: "/api/agent/command",
      intent: nexusResponse.intent,
      responseFieldSelected: nexusResponse.diagnostics.responseFieldSelected,
      responseLength: nexusResponse.diagnostics.responseLength,
      sanitizedLength: nexusResponse.diagnostics.sanitizedLength,
      sourceFunction: "normalizeNexusResponseEnvelope"
    });
    safeGenesisVoiceStageEvent(db, {
      correlationId,
      stage: "command-route-returned",
      success: true,
      route: "/api/agent/command",
      intent: nexusResponse.intent,
      httpStatus: 200,
      responseFieldSelected: nexusResponse.diagnostics.responseFieldSelected,
      responseLength: nexusResponse.diagnostics.responseLength,
      sanitizedLength: nexusResponse.diagnostics.sanitizedLength,
      elapsedTimeMs: Date.now() - routeStartedAt,
      sourceFunction: "api.agent.command"
    });
    await writeDb(db);
    const state = publicState(db, user);
    state.commandResult = result;
    state.companionUnderstanding = companionUnderstanding;
    state.companionRouteOutcome = companionRouteOutcome;
    state.nexusResponse = nexusResponse;
    state.genesisResponse = genesisResponse;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/agent/conversation-core" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow conversation core" });
    const body = await readBody(req);
    const command = String(body.command || body.text || "").trim();
    const decision = await nexusConversationCoreDecision(db, user, command, {
      mode: body.mode,
      modeContext: body.modeContext,
      targetLanguage: body.targetLanguage || body.language || user.language,
      source: body.source || "web",
      location: body.location || body.currentLocation || null
    });
    commandRecord(db, user, command, {
      intent: `conversation_core.${decision.type}`,
      response: decision.response,
      status: "completed",
      metadata: { conversationCore: decision, redirectSection: decision.workflow || decision.directAction || "agent" }
    });
    await writeDb(db);
    const state = publicState(db, user);
    state.conversationCore = decision;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/healthcare-collaboration/status" && req.method === "GET") {
    const registry = nexusHealthcareCollaborationRuntime.providerRegistry(process.env);
    const sourceReadiness = nexusHealthcareCollaborationRuntime.sourceReadinessMatrix(process.env);
    const providerEvidence = nexusHealthcareCollaborationRuntime.providerEvidence(process.env);
    return send(res, 200, {
      ok: true,
      runtime: "nexus-healthcare-collaboration-runtime",
      flags: registry.flags,
      registry,
      sourceReadiness,
      providerEvidence,
      cards: nexusHealthcareCollaborationRuntime.RUNTIME_CARDS,
      noSecretValues: true,
      noDiagnosis: true,
      noPrescribing: true,
      noEmergencyDispatch: true
    });
  }

  if (url.pathname === "/api/healthcare-collaboration/sources" && req.method === "GET") {
    return send(res, 200, nexusHealthcareCollaborationRuntime.sourceReadinessMatrix(process.env));
  }

  if (url.pathname === "/api/healthcare-collaboration/evidence" && req.method === "GET") {
    return send(res, 200, nexusHealthcareCollaborationRuntime.providerEvidence(process.env));
  }

  if (url.pathname === "/api/healthcare-collaboration/fhir/summary" && req.method === "GET") {
    return send(res, 200, nexusHealthcareCollaborationRuntime.fhirSandboxSummary({ env: process.env }));
  }

  if (url.pathname === "/api/healthcare-collaboration/action" && req.method === "POST") {
    const body = await readBody(req);
    const result = nexusHealthcareCollaborationRuntime.prepareAction(body, {
      env: process.env,
      confirmed: Boolean(body.confirmed),
      clinicianReviewed: Boolean(body.clinicianReviewed)
    });
    return send(res, 200, result);
  }

  if (url.pathname === "/api/healthcare-collaboration/execute" && req.method === "POST") {
    const body = await readBody(req);
    const result = nexusHealthcareCollaborationRuntime.attemptExecution(body, {
      env: process.env,
      confirmed: Boolean(body.confirmed),
      clinicianReviewed: Boolean(body.clinicianReviewed)
    });
    return send(res, result.noExecutionAuthorized ? 409 : 200, result);
  }

  if (url.pathname === "/api/agriculture-collaboration/status" && req.method === "GET") {
    const registry = nexusAgricultureCollaborationRuntime.providerRegistry(process.env);
    const sourceReadiness = nexusAgricultureCollaborationRuntime.sourceReadinessMatrix(process.env);
    const providerEvidence = nexusAgricultureCollaborationRuntime.providerEvidence(process.env);
    return send(res, 200, {
      ok: true,
      runtime: "nexus-agriculture-collaboration-runtime",
      flags: registry.flags,
      registry,
      sourceReadiness,
      providerEvidence,
      cards: nexusAgricultureCollaborationRuntime.RUNTIME_CARDS,
      reviewQueue: {
        expert: nexusAgricultureCollaborationRuntime.getExpertReviewQueue(),
        admin: nexusAgricultureCollaborationRuntime.getAdminReviewQueue()
      },
      receipts: nexusAgricultureCollaborationRuntime.getReceipts(),
      noSecretValues: true,
      noFakeLiveWeather: true,
      noFakeSatelliteScan: true,
      noFakeMarketplaceTransaction: true,
      noFakeShipmentTracking: true,
      noFakeDroneFlight: true
    });
  }

  if (url.pathname === "/api/agriculture-collaboration/sources" && req.method === "GET") {
    return send(res, 200, nexusAgricultureCollaborationRuntime.sourceReadinessMatrix(process.env));
  }

  if (url.pathname === "/api/agriculture-collaboration/evidence" && req.method === "GET") {
    return send(res, 200, nexusAgricultureCollaborationRuntime.providerEvidence(process.env));
  }

  if (url.pathname === "/api/agriculture-collaboration/action" && req.method === "POST") {
    const body = await readBody(req);
    const result = nexusAgricultureCollaborationRuntime.prepareAction(body, {
      env: process.env,
      confirmed: Boolean(body.confirmed),
      expertReviewed: Boolean(body.expertReviewed),
      humanPilotApproved: Boolean(body.humanPilotApproved)
    });
    return send(res, 200, result);
  }

  if (url.pathname === "/api/agriculture-collaboration/execute" && req.method === "POST") {
    const body = await readBody(req);
    const result = nexusAgricultureCollaborationRuntime.attemptExecution(body, {
      env: process.env,
      confirmed: Boolean(body.confirmed),
      expertReviewed: Boolean(body.expertReviewed),
      humanPilotApproved: Boolean(body.humanPilotApproved)
    });
    return send(res, result.noExecutionAuthorized ? 409 : 200, result);
  }

  const nexusUnifiedBrainOptions = () => ({
    env: process.env,
    communicationRuntime: nexusFullCommunicationRuntime,
    agricultureRuntime: nexusAgricultureCollaborationRuntime,
    healthcareRuntime: nexusHealthcareCollaborationRuntime
  });

  if (url.pathname === "/api/nexus-brain/status" && req.method === "GET") {
    return send(res, 200, nexusUnifiedBrainRuntime.runtimeStatus(nexusUnifiedBrainOptions()));
  }

  if (url.pathname === "/api/nexus-brain/plan" && req.method === "POST") {
    const body = await readBody(req);
    const result = await nexusUnifiedBrainRuntime.process(body.rawInput || body.command || body.goal || "", nexusUnifiedBrainOptions());
    return send(res, 200, result);
  }

  if (url.pathname === "/api/nexus-brain/execute-step" && req.method === "POST") {
    const body = await readBody(req);
    const result = nexusUnifiedBrainRuntime["executeStep"](body.stepId, {
      ...nexusUnifiedBrainOptions(),
      confirmed: Boolean(body.confirmed)
    });
    return send(res, result.noExecutionAuthorized ? 409 : 200, result);
  }

  if (url.pathname === "/api/nexus-brain/mission-receipt" && req.method === "GET") {
    return send(res, 200, {
      ok: true,
      receipt: nexusUnifiedBrainRuntime.getMissionReceipt(url.searchParams.get("missionId") || undefined),
      receipts: nexusUnifiedBrainRuntime.getReceipts(),
      noSecretValues: true
    });
  }

  if (url.pathname === "/api/voice/elevenlabs/webhook" && req.method === "POST") {
    return send(res, 410, {
      ok: false,
      error: "ElevenLabs webhooks have been removed from Genesis production.",
      category: "runtime-removed",
      activeRuntime: "realtime",
      canonicalToolEndpoint: "/api/voice/realtime/tool",
      noSecretValues: true
    }, {
      "cache-control": "no-store, no-cache, must-revalidate, private"
    });
  }

  if (url.pathname === "/api/voice/elevenlabs/diagnostics" && req.method === "GET") {
    return send(res, 410, {
      ok: false,
      error: "ElevenLabs diagnostics have been removed from Genesis production.",
      category: "runtime-removed",
      activeRuntime: "realtime",
      noSecretValues: true
    }, {
      "cache-control": "no-store, no-cache, must-revalidate, private"
    });
  }

  if (url.pathname === "/api/voice/genesis/acceptance-matrix" && req.method === "GET") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow Genesis voice acceptance matrix" });
    if (!nexusElevenLabsOriginAllowed(req)) return send(res, 403, { error: "Origin not allowed" });
    const runtime = url.searchParams.get("runtime") || canonicalGenesisVoiceRuntime(process.env);
    return send(res, 200, genesisVoiceAcceptanceHarness(runtime), {
      "cache-control": "no-store, no-cache, must-revalidate, private"
    });
  }

  if (url.pathname === "/api/voice/realtime/status" && req.method === "GET") {
    if (!nexusGenesisVoiceOriginAllowed(req)) return send(res, 403, { error: "Origin not allowed", category: "application-origin-forbidden" });
    const authContext = resolveGenesisVoiceAuthContext(req, db, user, {
      language: url.searchParams.get("language") || user?.language || "en",
      issueGuest: false
    });
    return send(res, 200, {
      realtimeVoice: nexusRealtimeRuntimeStatus(process.env),
      auth: {
        authenticated: authContext.authenticated,
        authorized: authContext.authorized,
        mechanism: authContext.authMechanism,
        sessionPresent: authContext.sessionPresent,
        liveSessionRequiresAuthorization: true
      },
      noSecretValues: true
    }, {
      "cache-control": "no-store, no-cache, must-revalidate, private"
    });
  }

  if (url.pathname === "/api/voice/realtime/session" && req.method === "POST") {
    if (!rateLimit(req, 30, 60_000)) return send(res, 429, { error: "Too many OpenAI Realtime session requests", category: "rate-limited" });
    if (!nexusGenesisVoiceOriginAllowed(req)) return send(res, 403, { error: "Origin not allowed", category: "application-origin-forbidden" });
    const body = await readBody(req);
    const authContext = resolveGenesisVoiceAuthContext(req, db, user, {
      language: body.language || url.searchParams.get("language") || user?.language || "en",
      issueGuest: true
    });
    const baseHeaders = {
      "cache-control": "no-store, no-cache, must-revalidate, private",
      ...(authContext.setCookie ? { "set-cookie": authContext.setCookie } : {})
    };
    if (!authContext.authenticated) {
      await writeDb(db);
      return send(res, 401, {
        error: "Genesis Realtime voice session authorization required.",
        category: "application-authentication",
        providerAttempted: false,
        authorizationArtifactIssued: false,
        noSecretValues: true
      }, baseHeaders);
    }
    if (!authContext.authorized) {
      await writeDb(db);
      return send(res, 403, {
        error: "Role does not allow OpenAI Realtime voice.",
        category: "application-authorization",
        providerAttempted: false,
        authorizationArtifactIssued: false,
        noSecretValues: true
      }, baseHeaders);
    }
    const runtimeStatus = nexusRealtimeRuntimeStatus(process.env);
    if (runtimeStatus.runtime === "disabled") {
      return send(res, 409, { error: "Nexus Genesis voice runtime is disabled.", category: "capability-unavailable", realtimeVoice: runtimeStatus }, baseHeaders);
    }
    if (runtimeStatus.runtime !== "realtime") {
      return send(res, 409, { error: "Nexus Genesis OpenAI Realtime is not the selected runtime.", category: "capability-unavailable", realtimeVoice: runtimeStatus }, baseHeaders);
    }
    if (!runtimeStatus.configured) {
      return send(res, 503, { error: "OpenAI Realtime is missing required server configuration.", category: "provider-not-configured", missingEnv: runtimeStatus.missingEnv, realtimeVoice: runtimeStatus }, baseHeaders);
    }
    try {
      const language = body.language || url.searchParams.get("language") || authContext.user.language || "en";
      const session = await openAiRealtimeClientSecret({ user: authContext.user, language });
      voiceRecord(db, authContext.user, "openai-agents-realtime", "OpenAI Agents Realtime voice session authorized.", {
        provider: session.provider,
        model: session.model,
        voice: session.voice,
        transport: session.transport,
        language,
        authMechanism: authContext.authMechanism
      });
      logIntegration(db, {
        providerId: "openai",
        module: "AI Voice",
        action: "voice.openai_agents_realtime_session_authorized",
        status: "success",
        detail: "OpenAI Agents Realtime client secret issued for Nexus live voice.",
        metadata: { model: session.model, voice: session.voice, transport: session.transport, authMechanism: authContext.authMechanism },
        dispatch: false
      });
      await writeDb(db);
      return send(res, 200, {
        ok: true,
        runtime: "realtime",
        provider: session.provider,
        transport: session.transport,
        model: session.model,
        voice: session.voice,
        runtimeVersion: session.runtimeVersion,
        clientSecret: session.clientSecret,
        expiresAt: session.expiresAt,
        clientConfig: session.clientConfig,
        toolEndpoint: "/api/voice/realtime/tool",
        tools: session.toolNames,
        authMechanism: authContext.authMechanism,
        noPermanentKeyInBrowser: true,
        noSecretValuesReturned: true
      }, baseHeaders);
    } catch (error) {
      const category = error.category || nexusRealtimeFailureCategory(error);
      voiceRecord(db, authContext.user, "openai-agents-realtime", nexusSafeRealtimeFailureDetail(category), {
        provider: "openai-realtime",
        errorCategory: category,
        language: url.searchParams.get("language") || authContext.user.language || "en"
      });
      logIntegration(db, {
        providerId: "openai",
        module: "AI Voice",
        action: "voice.openai_agents_realtime_session_failed",
        status: "error",
        detail: category,
        metadata: { transport: "agents-sdk-webrtc", category, httpStatus: error.httpStatus || null },
        dispatch: false
      });
      await writeDb(db);
      return send(res, 502, {
        error: "OpenAI Agents Realtime session failed truthfully.",
        category,
        realtimeVoice: nexusRealtimeRuntimeStatus(process.env),
        noSecretValues: true
      }, baseHeaders);
    }
  }

  if (url.pathname === "/api/voice/realtime/call" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow realtime voice" });
    const runtimeStatus = nexusRealtimeRuntimeStatus(process.env);
    if (!runtimeStatus.rollbackEnabled) {
      return send(res, 409, {
        error: "The old direct SDP Realtime rollback route is disabled. Use the OpenAI Agents SDK Realtime session endpoint.",
        category: "capability-unavailable",
        realtimeVoice: runtimeStatus
      }, {
        "cache-control": "no-store, no-cache, must-revalidate, private"
      });
    }
    if (runtimeStatus.runtime === "disabled") {
      return send(res, 409, { error: "Nexus Genesis voice runtime is disabled.", category: "capability-unavailable", realtimeVoice: runtimeStatus }, {
        "cache-control": "no-store, no-cache, must-revalidate, private"
      });
    }
    if (runtimeStatus.runtime !== "realtime") {
      return send(res, 409, { error: "Nexus Genesis Realtime is not the selected runtime.", category: "capability-unavailable", realtimeVoice: runtimeStatus }, {
        "cache-control": "no-store, no-cache, must-revalidate, private"
      });
    }
    if (!runtimeStatus.configured) {
      return send(res, 503, { error: "OpenAI Realtime is missing required server configuration.", category: "provider-not-configured", missingEnv: runtimeStatus.missingEnv, realtimeVoice: runtimeStatus }, {
        "cache-control": "no-store, no-cache, must-revalidate, private"
      });
    }
    let sdp = "";
    try {
      sdp = await readRawBody(req, 2_000_000);
    } catch (error) {
      return send(res, 413, { error: error.message || "Realtime voice payload is too large" });
    }
    if (!String(sdp || "").trim()) return send(res, 400, { error: "Realtime voice SDP offer is required" });
    try {
      const answer = await openAiRealtimeSdpAnswer({
        sdp,
        user,
        language: url.searchParams.get("language") || user.language || "en"
      });
      voiceRecord(db, user, "realtime-webrtc", "OpenAI Realtime voice session negotiated.", {
        provider: answer.provider,
        model: answer.model,
        voice: answer.voice,
        language: url.searchParams.get("language") || user.language || "en"
      });
      logIntegration(db, {
        providerId: "openai",
        module: "AI Voice",
        action: "voice.realtime_webrtc_started",
        status: "success",
        detail: "OpenAI Realtime WebRTC session negotiated for Nexus live voice.",
        metadata: { model: answer.model, voice: answer.voice, transport: "webrtc" },
        dispatch: false
      });
      await writeDb(db);
      return send(res, 200, answer.sdp, {
        "content-type": "application/sdp",
        "cache-control": "no-store, no-cache, must-revalidate, private"
      });
    } catch (error) {
      const category = nexusRealtimeFailureCategory(error);
      voiceRecord(db, user, "realtime-webrtc", nexusSafeRealtimeFailureDetail(category), {
        provider: "openai-realtime-webrtc",
        errorCategory: category,
        language: url.searchParams.get("language") || user.language || "en"
      });
      logIntegration(db, {
        providerId: "openai",
        module: "AI Voice",
        action: "voice.realtime_webrtc_failed",
        status: "error",
        detail: category,
        metadata: { transport: "webrtc", category },
        dispatch: false
      });
      await writeDb(db);
      return send(res, 502, { error: "OpenAI Realtime voice failed truthfully.", category, realtimeVoice: nexusRealtimeRuntimeStatus(process.env) }, {
        "cache-control": "no-store, no-cache, must-revalidate, private"
      });
    }
  }

  if (url.pathname === "/api/voice/realtime/tool" && req.method === "POST") {
    if (!rateLimit(req, 90, 60_000)) return send(res, 429, { error: "Too many Nexus Realtime tool requests", category: "rate-limited" });
    if (!nexusGenesisVoiceOriginAllowed(req)) return send(res, 403, { error: "Origin not allowed", category: "application-origin-forbidden" });
    const body = await readBody(req);
    const authContext = resolveGenesisVoiceAuthContext(req, db, user, {
      language: body.language || body.arguments?.language || user?.language || "en",
      issueGuest: false
    });
    if (!authContext.authenticated) {
      return send(res, 401, {
        ok: false,
        error: "Genesis Realtime tool gateway authorization required.",
        category: "application-authentication",
        providerAttempted: false,
        executionAttempted: false,
        noSecretValues: true
      }, {
        "cache-control": "no-store, no-cache, must-revalidate, private"
      });
    }
    if (!authContext.authorized) {
      return send(res, 403, {
        ok: false,
        error: "Role does not allow Nexus Realtime tools.",
        category: "application-authorization",
        providerAttempted: false,
        executionAttempted: false,
        noSecretValues: true
      }, {
        "cache-control": "no-store, no-cache, must-revalidate, private"
      });
    }
    const toolName = String(body.name || body.toolName || "nexus_capability_router").trim();
    const openAiNativeToolNames = new Set(nexusOpenAiNativeToolSchemas().map(tool => tool.name));
    if (openAiNativeToolNames.has(toolName)) {
      const args = body.arguments && typeof body.arguments === "object" ? body.arguments : body;
      const result = await executeNexusOpenAiNativeTool(db, authContext.user, toolName, args, {
        correlationId: body.correlationId,
        command: args.command || body.command || "",
        language: args.language || body.language || authContext.user.language || "en",
        outputMode: "voice"
      });
      const genesisAction = nexusGenesisWorkspaceAction(args.command || body.command || "", [{ call: { name: toolName } }]);
      await writeDb(db);
      return send(res, 200, { ...result, genesisAction }, {
        "cache-control": "no-store, no-cache, must-revalidate, private"
      });
    }
    if (toolName !== "nexus_capability_router") {
      return send(res, 400, {
        ok: false,
        error: "Unsupported Nexus Realtime tool.",
        category: "tool-validation",
        blockedReason: "route-not-found",
        supportedTools: ["nexus_capability_router", ...Array.from(openAiNativeToolNames)]
      }, {
        "cache-control": "no-store, no-cache, must-revalidate, private"
      });
    }
    const result = await dispatchNexusRealtimeTool(db, authContext.user, body);
    const args = body.arguments && typeof body.arguments === "object" ? body.arguments : body;
    const genesisAction = nexusGenesisWorkspaceAction(args.command || body.command || "", [{ call: { name: toolName } }]);
    await writeDb(db);
    return send(res, 200, { ...result, genesisAction }, {
      "cache-control": "no-store, no-cache, must-revalidate, private"
    });
  }

  if (url.pathname === "/api/voice/transcribe" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow voice commands" });
    const body = await readBody(req);
    const language = canonicalVoiceLanguage(body.language || user.language || "en");
    let transcript = String(body.transcript || body.text || "").trim();
    let provider = process.env.VOICE_STT_PROVIDER || (process.env.OPENAI_API_KEY ? "openai" : "browser");
    let model = null;
    if (!transcript && body.audioBase64 && (process.env.VOICE_STT_PROVIDER === "openai" || process.env.OPENAI_API_KEY)) {
      const result = await openAiTranscribeAudio({
        audioBase64: body.audioBase64,
        mimeType: body.mimeType || "audio/webm",
        filename: body.filename || "agrinexus-voice.webm",
        language
      });
      transcript = result?.transcript || "";
      provider = result?.provider || provider;
      model = result?.model || null;
    }
    const record = voiceRecord(db, user, "speech-to-text", transcript ? `Speech captured: ${transcript}` : "Speech capture session opened.", { language, locale: body.locale || voiceLocaleForLanguage(language), provider, model });
    await writeDb(db);
    const state = publicState(db, user);
    state.voiceResult = { transcript, sessionId: record.id, provider, model, language, locale: body.locale || voiceLocaleForLanguage(language) };
    return send(res, 200, state);
  }

  if (url.pathname === "/api/voice/speak" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow voice responses" });
    const body = await readBody(req);
    const correlationId = genesisVoiceCorrelationId(body.correlationId);
    const routeStartedAt = Date.now();
    safeGenesisVoiceStageEvent(db, {
      correlationId,
      stage: "tts-route-received",
      success: true,
      route: "/api/voice/speak",
      sourceFunction: "api.voice.speak"
    });
    const language = canonicalVoiceLanguage(body.language || body.targetLanguage || user.language || "en");
    const text = sanitizeNexusSpokenResponseText(body.text || "");
    if (!text) return send(res, 400, { error: "Voice response text is required" });
    let audio = null;
    let speechError = null;
    let provider = process.env.VOICE_TTS_PROVIDER || (process.env.OPENAI_API_KEY ? "openai" : "browser");
    safeGenesisVoiceStageEvent(db, {
      correlationId,
      stage: "tts-provider-selected",
      success: true,
      route: "/api/voice/speak",
      ttsProvider: provider,
      sanitizedLength: text.length,
      sourceFunction: "api.voice.speak"
    });
    const shouldUseOpenAiAudio = Boolean(process.env.OPENAI_API_KEY) && provider !== "browser";
    if (provider === "openai" || body.forceOpenAi === true || shouldUseOpenAiAudio) {
      try {
        safeGenesisVoiceStageEvent(db, {
          correlationId,
          stage: "tts-provider-requested",
          success: true,
          route: "/api/voice/speak",
          ttsProvider: "openai",
          sanitizedLength: text.length,
          sourceFunction: "openAiSpeechAudio"
        });
        audio = await openAiSpeechAudio({
          text,
          voice: body.voice || process.env.OPENAI_TTS_VOICE,
          responseFormat: body.responseFormat || "mp3"
        });
        provider = audio?.provider || "openai";
        safeGenesisVoiceStageEvent(db, {
          correlationId,
          stage: "tts-provider-succeeded",
          success: Boolean(audio?.audioDataUrl),
          route: "/api/voice/speak",
          ttsProvider: provider,
          audioByteLength: String(audio?.audioDataUrl || "").length,
          sourceFunction: "openAiSpeechAudio"
        });
      } catch (error) {
        const errorType = error.errorType || classifyOpenAiVoiceError(error);
        speechError = openAiVoiceErrorMessage(errorType);
        safeGenesisVoiceStageEvent(db, {
          correlationId,
          stage: "tts-provider-failed",
          success: false,
          route: "/api/voice/speak",
          ttsProvider: "openai",
          errorCategory: errorType,
          sourceFunction: "openAiSpeechAudio"
        });
        audio = {
          audioDataUrl: null,
          provider: "openai-audio-error",
          model: process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts",
          voice: body.voice || process.env.OPENAI_TTS_VOICE || null,
          spokenText: text,
          spokenTextLength: text.length,
          responseFormat: body.responseFormat || "mp3",
          diagnostics: error.diagnostics || openAiVoiceProviderDiagnostics({
            requestAttempted: true,
            httpStatus: error.status || error.httpStatus,
            errorType,
            timeout: errorType === "timeout",
            finalResponseRoute: "openai-tts-error"
          })
        };
        provider = "openai-audio-error";
      }
    }
    const record = voiceRecord(db, user, "text-to-speech", speechError ? `Speech response failed: ${speechError}` : `Speech response prepared: ${text}`, { language, locale: body.locale || voiceLocaleForLanguage(language), provider, model: audio?.model || null, voice: audio?.voice || null, error: speechError });
    await writeDb(db);
    const state = publicState(db, user);
    state.voiceResult = {
      correlationId,
      text,
      sessionId: record.id,
      provider,
      audioDataUrl: audio?.audioDataUrl || null,
      model: audio?.model || null,
      voice: audio?.voice || null,
      spokenText: audio?.spokenText || text,
      spokenTextLength: audio?.spokenTextLength || text.length,
      responseFormat: audio?.responseFormat || body.responseFormat || "mp3",
      error: speechError,
      configuredProvider: process.env.VOICE_TTS_PROVIDER || null,
      hasOpenAiKey: Boolean(process.env.OPENAI_API_KEY),
      diagnostics: audio?.diagnostics || openAiVoiceProviderDiagnostics({
        providerSelected: provider,
        requestAttempted: false,
        errorType: provider === "browser" ? "none" : "missing_credential",
        finalResponseRoute: provider === "browser" ? "browser-speech-required" : "missing-openai-credential"
      }),
      language,
      locale: body.locale || voiceLocaleForLanguage(language)
    };
    safeGenesisVoiceStageEvent(db, {
      correlationId,
      stage: "tts-route-returned",
      success: true,
      route: "/api/voice/speak",
      httpStatus: 200,
      ttsProvider: provider,
      audioByteLength: String(audio?.audioDataUrl || "").length,
      elapsedTimeMs: Date.now() - routeStartedAt,
      errorCategory: speechError ? state.voiceResult.diagnostics?.errorType || "provider_error" : "",
      sourceFunction: "api.voice.speak"
    });
    return send(res, 200, state);
  }

  if (url.pathname === "/api/voice/phone/outbound-call" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow outbound calls" });
    const body = await readBody(req);
    const record = await createOutboundCallWorkflow(db, user, body);
    await writeDb(db);
    const state = publicState(db, user);
    state.outboundCallResult = record;
    return send(res, record.delivery?.ok ? 200 : 409, state);
  }

  if (url.pathname === "/api/translate" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow translation workflows" });
    const body = await readBody(req);
    const text = String(body.text || "").trim();
    if (!text) return send(res, 400, { error: "Text is required" });
    const result = await translateDynamicContent(db, user, {
      text,
      targetLanguage: body.targetLanguage || user.language || "en",
      sourceLanguage: body.sourceLanguage || "en",
      context: body.context || "dynamic"
    });
    await writeDb(db);
    const state = publicState(db, user);
    state.translationResult = result;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/notifications/send" && req.method === "POST") {
    if (!canUse(user, "notifications")) return send(res, 403, { error: "Role does not allow notifications" });
    const body = await readBody(req);
    const moduleName = String(body.module || "Platform");
    const providerByModule = {
      Learning: "learning-certificates",
      Workforce: "workforce-notifications",
      Healthcare: "health-notifications",
      AgriTrade: "trade-logistics",
      AI: "openai",
      Platform: "openai"
    };
    const channel = String(body.channel || "workflow");
    const providerId = /whatsapp/i.test(channel) ? "whatsapp-delivery" : /sms|text/i.test(channel) ? "sms-delivery" : providerByModule[moduleName] || "openai";
    const message = String(body.message || `${moduleName} workflow notification sent.`).trim();
    const delivery = ["sms-delivery", "whatsapp-delivery"].includes(providerId)
      ? await sendTwilioMessage({ providerId, channel, to: twilioRecipientForProvider(providerId, body), text: message })
      : { attempted: false, ok: true, status: "local-notification-only" };
    addNotification(db.profile, { module: moduleName, providerId, channel, message, createdBy: user.name, deliveryStatus: delivery.status });
    logIntegration(db, {
      providerId,
      module: moduleName,
      action: "notification.sent",
      status: delivery.ok || !delivery.attempted ? "success" : "needs-setup",
      detail: delivery.ok ? message : `${message} Delivery status: ${delivery.status}.`,
      metadata: { channel, createdBy: user.name, delivery }
    });
    addActivity(db.profile, `${moduleName} notification sent: ${message}`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/communications/thread" && req.method === "POST") {
    if (!canUse(user, "notifications")) return send(res, 403, { error: "Role does not allow communication workflows" });
    const body = await readBody(req);
    const result = await createCommunicationThread(db, user, body);
    addWorkflowNote(db.profile, body.note, "Communication note");
    await writeDb(db);
    const state = publicState(db, user);
    state.communicationThreadResult = result;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/nexus/provider-abstraction/status" && req.method === "GET") {
    return send(res, 200, nexusGenesisProviderAbstraction.status(process.env));
  }

  if (url.pathname === "/api/nexus/provider-abstraction/providers" && req.method === "GET") {
    return send(res, 200, {
      ok: true,
      providers: nexusGenesisProviderAbstraction.listProviders({ env: process.env }),
      noSecretExposure: true
    });
  }

  if (url.pathname === "/api/nexus/provider-abstraction/capabilities" && req.method === "GET") {
    return send(res, 200, {
      ok: true,
      capabilities: nexusGenesisProviderAbstraction.listCapabilities(),
      families: nexusGenesisProviderAbstraction.listProviderFamilies()
    });
  }

  if (url.pathname === "/api/nexus/provider-abstraction/select" && req.method === "POST") {
    const body = await readBody(req);
    return send(res, 200, nexusGenesisProviderAbstraction.selectProvider({ ...body, env: process.env }));
  }

  if (url.pathname === "/api/nexus/provider-abstraction/policy" && req.method === "POST") {
    const body = await readBody(req);
    return send(res, 200, nexusGenesisProviderAbstraction.evaluatePolicy(body));
  }

  if (url.pathname === "/api/nexus/provider-abstraction/execute" && req.method === "POST") {
    const body = await readBody(req);
    return send(res, 200, nexusGenesisProviderAbstraction.execute({ ...body, env: process.env }));
  }

  if (url.pathname === "/api/nexus/provider-abstraction/receipt" && req.method === "POST") {
    const body = await readBody(req);
    const selection = nexusGenesisProviderAbstraction.selectProvider({ ...body, env: process.env });
    return send(res, 200, nexusGenesisProviderAbstraction.createReceipt(body, selection, {
      status: "receipt_prepared",
      summary: "Receipt prepared without external provider execution."
    }));
  }

  if (url.pathname === "/api/nexus/provider-abstraction/capability-status" && req.method === "POST") {
    const body = await readBody(req);
    return send(res, 200, nexusGenesisProviderAbstraction.capabilityStatus(body.command || "", {
      ...body,
      env: process.env
    }));
  }

  if (url.pathname === "/api/nexus/provider-abstraction/sdk" && req.method === "GET") {
    return send(res, 200, nexusGenesisProviderAbstraction.sdk());
  }

  return send(res, 404, { error: "API route not found" });
}

function serveStatic(req, res, url) {
  if (url.pathname === "/vendor/livekit-client/livekit-client.esm.mjs") {
    const livekitPath = path.join(ROOT, "node_modules", "livekit-client", "dist", "livekit-client.esm.mjs");
    return fs.readFile(livekitPath, (err, data) => {
      if (err) return send(res, 404, "Not found");
      res.writeHead(200, {
        "content-type": "application/javascript; charset=utf-8",
        "cache-control": "no-store",
        "x-content-type-options": "nosniff"
      });
      res.end(data);
    });
  }
  let filePath = url.pathname === "/" ? path.join(PUBLIC, "index.html") : path.join(PUBLIC, decodeURIComponent(url.pathname));
  if (!filePath.startsWith(PUBLIC)) return send(res, 403, "Forbidden");
  fs.readFile(filePath, (err, data) => {
    if (err) return send(res, 404, "Not found");
    const ext = path.extname(filePath);
    const cacheControl = ext === ".html" || ext === ".js" || ext === ".mjs" || ext === ".css" ? "no-store" : "public, max-age=3600";
    res.writeHead(200, { "content-type": mime[ext] || "application/octet-stream", "cache-control": cacheControl });
    res.end(data);
  });
}

const productionCertificationAdapter = createProductionCertificationAdapter({ root: ROOT });

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (await productionCertificationAdapter.handle(req, res)) return;
    if (!rateLimit(req)) return send(res, 429, { error: "Too many requests" });
    if (url.pathname.startsWith("/api/")) return await api(req, res, url);
    return serveStatic(req, res, url);
  } catch (error) {
    return send(res, 500, { error: error.message || "Server error" });
  }
});

server.on("error", error => {
  console.error(`AgriNexus server failed: ${error.message}`);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`AgriNexus running at http://${HOST}:${PORT}`);
});
