"use strict";

const crypto = require("crypto");

const MEMORY_RECORD_TYPES = Object.freeze([
  "health_chronic_care",
  "agriculture_crop_issue",
  "marketplace_intent",
  "logistics_route",
  "training_workforce",
  "provider_preparation",
  "pharmacy_preparation",
  "mobile_clinic_preparation",
  "communications_preparation",
  "drone_service_preparation",
  "platform_feedback"
]);

const DATABASE_ENV_NAMES = Object.freeze([
  "DATABASE_URL",
  "NEXUS_DATABASE_URL",
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
  "FIREBASE_PROJECT_ID",
  "MONGODB_URI"
]);

const PROVIDER_LANES = Object.freeze([
  { id: "live-knowledge-search", name: "Live Knowledge / Search", requiredAny: ["TAVILY_API_KEY", "BRAVE_SEARCH_API_KEY", "EXA_API_KEY", "NEXUS_LIVE_KNOWLEDGE_API_KEY"], enabled: ["NEXUS_LIVE_KNOWLEDGE_ENABLED"], risk: "low", actions: ["source backed research"], safeNow: "Credential-gated source lookup with citation honesty." },
  { id: "database-storage", name: "Database / Storage", requiredAny: DATABASE_ENV_NAMES, enabled: ["NEXUS_DATABASE_ENABLED"], risk: "medium", actions: ["persistent memory", "audit history"], safeNow: "Local memory active when production database is not connected." },
  { id: "maps-routing", name: "Maps / Routing", requiredAny: ["GOOGLE_MAPS_API_KEY"], enabled: ["NEXUS_MAPS_ENABLED"], risk: "medium", actions: ["route preview"], safeNow: "User-provided route planning only; no browser geolocation." },
  { id: "email", name: "Email", requiredAny: ["SENDGRID_API_KEY", "SMTP_HOST"], enabled: ["NEXUS_EMAIL_ENABLED"], risk: "high", actions: ["email draft", "email send"], safeNow: "Draft and confirmation gate only unless configured." },
  { id: "sms", name: "SMS", requiredAll: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"], requiredAny: ["TWILIO_FROM_NUMBER", "TWILIO_PHONE_NUMBER"], enabled: ["NEXUS_MESSAGES_ENABLED"], risk: "high", actions: ["SMS draft", "SMS send"], safeNow: "Requires recipient, confirmation, credentials, and audit." },
  { id: "whatsapp", name: "WhatsApp", requiredAll: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"], requiredAny: ["TWILIO_WHATSAPP_FROM"], enabled: ["NEXUS_WHATSAPP_ENABLED"], risk: "high", actions: ["WhatsApp draft", "WhatsApp send"], safeNow: "Preparation only unless configured and confirmed." },
  { id: "telehealth", name: "Telehealth", requiredAny: ["DAILY_API_KEY", "ZOOM_ACCOUNT_ID"], enabled: ["NEXUS_TELEHEALTH_ENABLED", "NEXUS_ZOOM_ENABLED"], risk: "high", actions: ["intake packet", "video visit launch"], safeNow: "Intake and provider bridge only until vendor is configured." },
  { id: "payments", name: "Payments", requiredAny: ["STRIPE_SECRET_KEY"], enabled: ["NEXUS_MARKETPLACE_PAYMENTS_ENABLED"], risk: "high", actions: ["payment intent"], safeNow: "Sandbox-gated; no money movement without explicit configuration." },
  { id: "marketplace", name: "Marketplace", requiredAny: ["AGRITRADE_API_KEY", "NEXUS_MARKETPLACE_PROVIDER_KEY"], enabled: ["NEXUS_MARKETPLACE_ENABLED"], risk: "high", actions: ["buyer/seller inquiry", "listing support"], safeNow: "Review queue only; no order or buyer contact without confirmation." },
  { id: "logistics", name: "Logistics", requiredAny: ["NEXUS_LOGISTICS_PROVIDER_KEY"], enabled: ["NEXUS_LOGISTICS_ENABLED"], risk: "high", actions: ["shipment planning"], safeNow: "Route and checklist preparation only." },
  { id: "pharmacy-referral", name: "Pharmacy / Provider Referral", requiredAny: ["NEXUS_PHARMACY_PROVIDER_KEY", "NEXUS_PROVIDER_REFERRAL_KEY"], enabled: ["NEXUS_PHARMACY_ENABLED"], risk: "high", actions: ["pharmacy packet", "referral prep"], safeNow: "No refill, prescription, or provider submission without configured vendor and approval." },
  { id: "mobile-clinic", name: "Mobile Clinic", requiredAny: ["NEXUS_MOBILE_CLINIC_PROVIDER_KEY"], enabled: ["NEXUS_MOBILE_CLINIC_ENABLED"], risk: "high", actions: ["request preparation"], safeNow: "No dispatch or appointment acceptance without provider confirmation." },
  { id: "lms-workforce", name: "LMS / Workforce", requiredAny: ["MOODLE_BASE_URL", "MOODLE_TOKEN", "NEXUS_WORKFORCE_PROVIDER_KEY"], enabled: ["NEXUS_LMS_ENABLED"], risk: "medium", actions: ["training lookup", "enrollment prep"], safeNow: "Training recommendations and prep only until LMS is configured." },
  { id: "drone-service", name: "Drone Service", requiredAny: ["DJI_API_KEY", "NEXUS_DRONE_PROVIDER_KEY"], enabled: ["NEXUS_DRONES_ENABLED"], risk: "high", actions: ["mission prep"], safeNow: "Status and planning only; no flight tasking." },
  { id: "file-media-storage", name: "File / Media Storage", requiredAny: ["S3_BUCKET", "AWS_ACCESS_KEY_ID", "NEXUS_MEDIA_STORAGE_KEY"], enabled: ["NEXUS_FILE_STORAGE_ENABLED"], risk: "medium", actions: ["file receipt", "media reference"], safeNow: "Metadata only unless configured." },
  { id: "admin-review-queues", name: "Admin / Review Queues", requiredAny: ["NEXUS_REVIEW_QUEUE_PROVIDER_KEY"], enabled: ["NEXUS_REVIEW_QUEUE_ENABLED"], risk: "medium", actions: ["human review queue"], safeNow: "Local review queue available; external queue is credential-gated." }
]);

const ROLE_SURFACES = Object.freeze([
  "Standard User",
  "Patient / Health User",
  "Farmer",
  "Buyer",
  "Seller",
  "Learner / Applicant",
  "Employer",
  "Provider",
  "Pharmacy",
  "Mobile Clinic",
  "Admin / Review"
]);

const SENSITIVE_EXECUTION_TYPES = new Set([
  "send_email",
  "send_sms",
  "send_whatsapp",
  "place_call",
  "launch_telehealth",
  "submit_pharmacy_request",
  "submit_provider_referral",
  "request_mobile_clinic",
  "create_payment",
  "place_marketplace_order",
  "book_transport",
  "dispatch_drone"
]);

function nowIso() {
  return new Date().toISOString();
}

function makeId(prefix) {
  return `${prefix}_${crypto.randomBytes(6).toString("hex")}`;
}

function present(env, name) {
  const value = String(env[name] || "").trim();
  return Boolean(value && value !== "false" && !/replace|example|your_|changeme/i.test(value));
}

function ensureUserTestingStore(db) {
  if (!db.profile || typeof db.profile !== "object") db.profile = {};
  if (!db.profile.nexusUserTestingRuntime || typeof db.profile.nexusUserTestingRuntime !== "object") {
    db.profile.nexusUserTestingRuntime = {};
  }
  const store = db.profile.nexusUserTestingRuntime;
  for (const key of ["records", "receipts", "auditEvents", "predictions", "consentGates", "executions", "verifications"]) {
    if (!Array.isArray(store[key])) store[key] = [];
  }
  return store;
}

function databaseReadiness(env = process.env) {
  const configuredNames = DATABASE_ENV_NAMES.filter(name => present(env, name));
  return {
    configured: configuredNames.length > 0,
    configuredEnvNames: configuredNames,
    missingEnvNames: configuredNames.length ? [] : [...DATABASE_ENV_NAMES],
    persistenceScope: configuredNames.length ? "database_configured" : "local_dev_store",
    userMessage: configuredNames.length
      ? "Production database connection appears configured. Nexus can persist through the configured store after deployment checks."
      : "Local memory active. Production database not connected.",
    noSecretValues: true
  };
}

function laneReadiness(lane, env = process.env) {
  const missingAll = (lane.requiredAll || []).filter(name => !present(env, name));
  const anyNames = lane.requiredAny || [];
  const hasAny = anyNames.length ? anyNames.some(name => present(env, name)) : true;
  const missingAny = hasAny ? [] : anyNames;
  const enabledConfigured = (lane.enabled || []).some(name => String(env[name] || "").trim() === "true");
  const configured = missingAll.length === 0 && missingAny.length === 0;
  return {
    id: lane.id,
    name: lane.name,
    risk: lane.risk,
    enabled: enabledConfigured,
    configured,
    testabilityState: configured ? (lane.risk === "low" ? "ready" : "confirmation_required") : "missing_config",
    missingEnvNames: [...missingAll, ...missingAny],
    configuredEnvNames: [...(lane.requiredAll || []), ...anyNames].filter(name => present(env, name)),
    actions: lane.actions,
    safeNow: lane.safeNow,
    executionEnabled: false,
    userApprovalRequired: lane.risk !== "low",
    providerConfirmationRequired: lane.risk === "high",
    noSecretValues: true
  };
}

function providerActivationSnapshot(env = process.env) {
  const lanes = PROVIDER_LANES.map(lane => laneReadiness(lane, env));
  return {
    ok: true,
    lanes,
    readyCount: lanes.filter(lane => lane.configured).length,
    blockedCount: lanes.filter(lane => !lane.configured).length,
    noSecretValues: true,
    noLiveExecutionWithoutConfirmation: true
  };
}

function addAudit(store, eventType, summary, metadata = {}) {
  const event = {
    id: makeId("audit"),
    eventType,
    summary,
    metadata,
    createdAt: nowIso(),
    noSecretValues: true
  };
  store.auditEvents.unshift(event);
  return event;
}

function cleanText(value, fallback = "") {
  return String(value || fallback).replace(/\s+/g, " ").trim().slice(0, 800);
}

function createMemoryRecord(db, input = {}, user = {}) {
  const store = ensureUserTestingStore(db);
  const type = MEMORY_RECORD_TYPES.includes(input.type) ? input.type : "platform_feedback";
  const record = {
    id: makeId("mem"),
    type,
    title: cleanText(input.title, type.replace(/_/g, " ")),
    summary: cleanText(input.summary, "User testing record prepared."),
    mode: cleanText(input.mode, "standard-user"),
    ownerRole: cleanText(input.ownerRole || user.role, "standard-user"),
    data: input.data && typeof input.data === "object" ? { ...input.data } : {},
    receipts: [],
    archived: false,
    createdAt: nowIso(),
    updatedAt: nowIso(),
    source: "nexus_user_testing_runtime",
    noExecutionAuthorized: true
  };
  store.records.unshift(record);
  addAudit(store, "memory_record_created", `Created ${record.type} memory record for local user testing.`, { recordId: record.id, type });
  return record;
}

function updateMemoryRecord(db, id, patch = {}) {
  const store = ensureUserTestingStore(db);
  const record = store.records.find(item => item.id === id);
  if (!record) return { ok: false, status: "not_found" };
  record.title = cleanText(patch.title, record.title);
  record.summary = cleanText(patch.summary, record.summary);
  record.data = patch.data && typeof patch.data === "object" ? { ...record.data, ...patch.data } : record.data;
  record.updatedAt = nowIso();
  const audit = addAudit(store, "memory_record_updated", "Updated local memory record.", { recordId: id });
  return { ok: true, record, audit };
}

function archiveMemoryRecord(db, id) {
  const store = ensureUserTestingStore(db);
  const record = store.records.find(item => item.id === id);
  if (!record) return { ok: false, status: "not_found" };
  record.archived = true;
  record.archivedAt = nowIso();
  record.updatedAt = nowIso();
  const audit = addAudit(store, "memory_record_archived", "Archived local memory record without deletion.", { recordId: id });
  return { ok: true, record, audit };
}

function listMemoryRecords(db, filters = {}) {
  const store = ensureUserTestingStore(db);
  return store.records.filter(record => {
    if (filters.type && record.type !== filters.type) return false;
    if (filters.includeArchived !== true && record.archived) return false;
    return true;
  });
}

function searchMemoryRecords(db, query = "") {
  const normalized = String(query || "").toLowerCase().trim();
  if (!normalized) return listMemoryRecords(db);
  return listMemoryRecords(db, { includeArchived: true }).filter(record =>
    `${record.title} ${record.summary} ${record.type}`.toLowerCase().includes(normalized)
  );
}

function createReceipt(db, input = {}) {
  const store = ensureUserTestingStore(db);
  const receipt = {
    id: makeId("receipt"),
    title: cleanText(input.title, "Nexus action receipt"),
    actionType: cleanText(input.actionType, "local_preparation"),
    status: cleanText(input.status, "prepared"),
    outcome: cleanText(input.outcome, "Prepared for review. No external execution occurred."),
    evidence: Array.isArray(input.evidence) ? input.evidence.map(item => cleanText(item)).filter(Boolean) : [],
    createdAt: nowIso(),
    noSecretValues: true,
    noExecutionAuthorized: input.noExecutionAuthorized !== false
  };
  store.receipts.unshift(receipt);
  addAudit(store, "receipt_created", `Created receipt for ${receipt.actionType}.`, { receiptId: receipt.id, status: receipt.status });
  return receipt;
}

function attachReceiptToRecord(db, recordId, receiptId) {
  const store = ensureUserTestingStore(db);
  const record = store.records.find(item => item.id === recordId);
  const receipt = store.receipts.find(item => item.id === receiptId);
  if (!record || !receipt) return { ok: false, status: "not_found" };
  if (!record.receipts.includes(receiptId)) record.receipts.push(receiptId);
  record.updatedAt = nowIso();
  const audit = addAudit(store, "receipt_attached", "Attached receipt to local memory record.", { recordId, receiptId });
  return { ok: true, record, receipt, audit };
}

function createConsentGate(db, input = {}) {
  const store = ensureUserTestingStore(db);
  const gate = {
    id: makeId("consent"),
    actionType: cleanText(input.actionType, "prepared_action"),
    riskTier: cleanText(input.riskTier, "high"),
    actionSummary: cleanText(input.actionSummary, "Review the prepared action before anything can proceed."),
    dataIncluded: Array.isArray(input.dataIncluded) ? input.dataIncluded.map(item => cleanText(item)).filter(Boolean) : ["summary only"],
    recipientDisplay: cleanText(input.recipientDisplay, "Not selected"),
    providerDisplay: cleanText(input.providerDisplay, "Provider not connected"),
    requiredUserChoice: ["approve", "cancel"],
    finalExecutionGateRequired: true,
    executionAuthority: false,
    noBackgroundExecution: true,
    createdAt: nowIso()
  };
  store.consentGates.unshift(gate);
  addAudit(store, "consent_gate_created", `Created consent gate for ${gate.actionType}.`, { consentGateId: gate.id, riskTier: gate.riskTier });
  return gate;
}

function runExecutionRequest(db, input = {}, user = {}) {
  const store = ensureUserTestingStore(db);
  const actionType = cleanText(input.actionType, "prepare_action");
  const localSafe = ["save_record", "update_record", "archive_record", "create_receipt", "run_local_harness"].includes(actionType);
  const sensitive = SENSITIVE_EXECUTION_TYPES.has(actionType);
  const confirmed = input.confirmed === true;
  let status = "prepared_for_review";
  let outcome = "Nexus prepared the action for review. No external execution occurred.";
  if (localSafe) {
    status = "completed_local";
    outcome = "Nexus completed the local testing action and recorded an audit receipt.";
  } else if (sensitive && !confirmed) {
    status = "requires_confirmation";
    outcome = "Nexus requires explicit approval and a final execution gate before this action can continue.";
  } else if (sensitive) {
    status = "blocked_missing_credentials";
    outcome = "Nexus did not execute because the external provider is not configured and verified.";
  }
  const receipt = createReceipt(db, {
    title: `${actionType} result`,
    actionType,
    status,
    outcome,
    evidence: [
      `Requested by ${cleanText(user.role, "standard-user")}`,
      "No silent execution",
      "No provider handoff without configured credentials"
    ],
    noExecutionAuthorized: !localSafe
  });
  const execution = {
    id: makeId("exec"),
    actionType,
    status,
    outcome,
    receiptId: receipt.id,
    externalExecution: false,
    providerExecuted: false,
    userApprovalRequired: sensitive,
    finalExecutionGateRequired: sensitive,
    createdAt: nowIso()
  };
  store.executions.unshift(execution);
  addAudit(store, "execution_request_processed", `Processed ${actionType} as ${status}.`, { executionId: execution.id, status });
  return { ok: true, execution, receipt };
}

function generatePrediction(db, input = {}, env = process.env) {
  const store = ensureUserTestingStore(db);
  const domain = cleanText(input.domain, "general");
  const signals = Array.isArray(input.signals) ? input.signals.map(item => cleanText(item)).filter(Boolean) : [];
  const prediction = {
    id: makeId("predict"),
    domain,
    riskLevel: signals.some(item => /urgent|severe|missed|high|emergency/i.test(item)) ? "elevated" : "watch",
    confidence: signals.length >= 3 ? "medium" : "low",
    missingData: ["verified source", "provider confirmation", "current local context"].filter(item => !signals.join(" ").toLowerCase().includes(item.slice(0, 8))),
    recommendedNextSteps: [
      "Collect missing details from the user.",
      "Prepare a review packet.",
      "Use provider credentials only after consent and final gate approval."
    ],
    safetyNotes: [
      "Nexus does not diagnose, prescribe, authorize payment, book appointments, dispatch services, or send messages from this prediction.",
      databaseReadiness(env).userMessage
    ],
    createdAt: nowIso()
  };
  store.predictions.unshift(prediction);
  addAudit(store, "prediction_generated", `Generated ${domain} prediction for user testing.`, { predictionId: prediction.id, riskLevel: prediction.riskLevel });
  return prediction;
}

function verifyOutcome(db, input = {}, user = {}) {
  const store = ensureUserTestingStore(db);
  const status = cleanText(input.status, "prepared");
  const allowedStatus = ["completed_local", "prepared", "queued_for_review", "blocked_missing_credentials", "failed_safe", "completed_verified"].includes(status)
    ? status
    : "prepared";
  const verification = {
    id: makeId("verify"),
    subjectId: cleanText(input.subjectId, "manual-check"),
    status: allowedStatus,
    verifiedBy: cleanText(user.role, "standard-user"),
    summary: cleanText(input.summary, "Outcome verified for local user testing."),
    externalExecutionVerified: allowedStatus === "completed_verified" && input.externalExecutionVerified === true,
    createdAt: nowIso(),
    noSecretValues: true
  };
  store.verifications.unshift(verification);
  addAudit(store, "outcome_verified", `Outcome marked ${allowedStatus}.`, { verificationId: verification.id });
  return verification;
}

function roleDashboardSnapshot(db, role = "", env = process.env) {
  const store = ensureUserTestingStore(db);
  const selectedRole = ROLE_SURFACES.includes(role) ? role : "Standard User";
  return {
    ok: true,
    selectedRole,
    roles: ROLE_SURFACES.map(name => ({
      name,
      recordCount: store.records.filter(record => record.ownerRole === name || record.mode === name).length,
      availableActions: ["review memory", "prepare packet", "check provider readiness", "view receipts"],
      restrictedActions: ["live execution without credentials", "silent provider handoff", "unapproved regulated action"]
    })),
    database: databaseReadiness(env),
    providerSummary: providerActivationSnapshot(env).lanes.map(lane => ({ id: lane.id, name: lane.name, testabilityState: lane.testabilityState })),
    noSecretValues: true
  };
}

function runUserTestingHarness(db, env = process.env) {
  const flows = [
    ["health_chronic_care", "Chronic care user testing packet", "Tracks diabetes, hypertension, obesity, RPM, RTM, and CHW prep without diagnosis."],
    ["agriculture_crop_issue", "Crop issue support packet", "Captures crop issue context and expert review checklist."],
    ["marketplace_intent", "Marketplace buyer/seller packet", "Prepares inquiry details without buyer contact or payment."],
    ["logistics_route", "Logistics route packet", "Prepares field visit and shipment questions without booking."],
    ["training_workforce", "Training and workforce packet", "Prepares learning and job support next steps."],
    ["drone_service_preparation", "Drone service planning packet", "Prepares drone support checklist without flight execution."]
  ];
  const created = flows.map(([type, title, summary]) => {
    const record = createMemoryRecord(db, { type, title, summary, ownerRole: "Standard User" });
    const prediction = generatePrediction(db, { domain: type, signals: [title, summary] }, env);
    const receipt = createReceipt(db, { title: `${title} receipt`, actionType: "run_local_harness", status: "completed_local", outcome: "Local harness prepared and verified this testing packet." });
    attachReceiptToRecord(db, record.id, receipt.id);
    return { record, prediction, receipt };
  });
  const execution = runExecutionRequest(db, { actionType: "send_sms", confirmed: true }, { role: "Standard User" });
  return {
    ok: true,
    flowsCreated: created.length,
    created,
    providerBlockedExample: execution.execution,
    database: databaseReadiness(env),
    providerSnapshot: providerActivationSnapshot(env),
    noSecretValues: true,
    noLiveExecution: true
  };
}

function securityAuditSnapshot(db, env = process.env) {
  const store = ensureUserTestingStore(db);
  return {
    ok: true,
    noSecretValues: true,
    archiveInsteadOfDelete: true,
    consentRequiredForSensitiveActions: true,
    medicalSafety: "Nexus does not diagnose, prescribe, change medication, or handle emergencies through this layer.",
    paymentSafety: "Nexus does not verify or move money without a configured sandbox/provider, consent, and final gate.",
    communicationsSafety: "Nexus does not send messages or place calls without credentials, explicit confirmation, and audit.",
    providerSafety: "Provider referrals, pharmacy requests, mobile clinic requests, logistics, and drone tasks remain blocked until configured and approved.",
    auditEventCount: store.auditEvents.length,
    database: databaseReadiness(env)
  };
}

function userTestingReadinessSnapshot(db, env = process.env) {
  const store = ensureUserTestingStore(db);
  const providerSnapshot = providerActivationSnapshot(env);
  return {
    ok: true,
    memoryRecordTypes: MEMORY_RECORD_TYPES,
    counts: {
      records: store.records.length,
      receipts: store.receipts.length,
      auditEvents: store.auditEvents.length,
      predictions: store.predictions.length,
      consentGates: store.consentGates.length,
      executions: store.executions.length,
      verifications: store.verifications.length
    },
    database: databaseReadiness(env),
    providers: providerSnapshot,
    roles: roleDashboardSnapshot(db, "Standard User", env).roles,
    readyForControlledUserTesting: true,
    externalExecutionEnabled: false,
    noSecretValues: true
  };
}

module.exports = {
  MEMORY_RECORD_TYPES,
  PROVIDER_LANES,
  ROLE_SURFACES,
  ensureUserTestingStore,
  databaseReadiness,
  providerActivationSnapshot,
  createMemoryRecord,
  updateMemoryRecord,
  archiveMemoryRecord,
  listMemoryRecords,
  searchMemoryRecords,
  createReceipt,
  attachReceiptToRecord,
  createConsentGate,
  runExecutionRequest,
  generatePrediction,
  verifyOutcome,
  roleDashboardSnapshot,
  runUserTestingHarness,
  securityAuditSnapshot,
  userTestingReadinessSnapshot
};
