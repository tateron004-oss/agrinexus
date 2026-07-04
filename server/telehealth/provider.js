"use strict";

const crypto = require("crypto");
const dailyProvider = require("./providers/daily");
const externalUrlProvider = require("./providers/external-url");
const zoomProvider = require("./providers/zoom");

const CONDITIONS = new Set(["diabetes", "hypertension", "obesity", "general", "other"]);

function cleanText(value, max = 500) {
  return String(value || "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function cleanList(value, maxItems = 12, maxLen = 160) {
  const source = Array.isArray(value) ? value : String(value || "").split(/\n|,/);
  return source.map(item => cleanText(item, maxLen)).filter(Boolean).slice(0, maxItems);
}

function selectedProvider(env = process.env) {
  const selected = cleanText(env.NEXUS_TELEHEALTH_PROVIDER || "local", 40).toLowerCase();
  if (["external_url", "daily", "zoom", "local"].includes(selected)) return selected;
  return "local";
}

function providerStatus(env = process.env) {
  const provider = selectedProvider(env);
  if (provider === "external_url") return externalUrlProvider.status(env);
  if (provider === "daily") return dailyProvider.status(env);
  if (provider === "zoom") return zoomProvider.status(env);
  return {
    provider: "local",
    providerName: "Local Nexus provider review queue",
    configured: true,
    missingEnv: [],
    localQueueFallback: true,
    videoCreationAllowed: false,
    externalHandoffAvailable: false,
    requiresConfirmation: true,
    requiresConsent: true,
    noSecretValuesReturned: true
  };
}

function status(env = process.env) {
  const provider = providerStatus(env);
  return {
    ok: true,
    selectedProvider: provider.provider,
    providerName: provider.providerName,
    configured: Boolean(provider.configured),
    missingEnv: provider.missingEnv || [],
    supportedProviders: ["local", "external_url", "daily", "zoom"],
    localQueueFallback: true,
    provider,
    environmentVariables: {
      provider: "NEXUS_TELEHEALTH_PROVIDER",
      externalUrl: ["NEXUS_TELEHEALTH_PROVIDER_NAME", "NEXUS_TELEHEALTH_INTAKE_URL"],
      daily: ["DAILY_API_KEY", "DAILY_ROOM_DOMAIN"],
      zoom: ["ZOOM_ACCOUNT_ID", "ZOOM_CLIENT_ID", "ZOOM_CLIENT_SECRET"]
    },
    safety: {
      noDiagnosis: true,
      noPrescribing: true,
      noMedicationChanges: true,
      noEmergencyDispatch: true,
      noProviderSubmissionWithoutConsentAndConfirmation: true,
      noSecretValuesReturned: true
    }
  };
}

function ensureState(db) {
  if (!Array.isArray(db.nexusTelehealthEncounters)) db.nexusTelehealthEncounters = [];
  if (!Array.isArray(db.nexusTelehealthFollowUps)) db.nexusTelehealthFollowUps = [];
  if (!Array.isArray(db.nexusTelehealthVideoAttempts)) db.nexusTelehealthVideoAttempts = [];
  if (!Array.isArray(db.nexusPilotReviewQueue)) db.nexusPilotReviewQueue = [];
  if (!Array.isArray(db.nexusPilotAuditEvents)) db.nexusPilotAuditEvents = [];
  if (!Array.isArray(db.nexusNotifications)) db.nexusNotifications = [];
}

function audit(db, event, details = {}) {
  const item = {
    id: `audit-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`,
    event,
    createdAt: new Date().toISOString(),
    actor: cleanText(details.actor || "Standard User", 120),
    role: cleanText(details.role || "Standard User", 80),
    mode: "virtual-care-telehealth",
    description: cleanText(details.description || event, 240),
    noDiagnosis: true,
    noPrescribing: true,
    noEmergencyDispatch: true,
    noSilentProviderSubmission: true
  };
  db.nexusPilotAuditEvents.unshift(item);
  return item;
}

function normalizeBody(body = {}) {
  const conditionArea = cleanText(body.conditionArea || body.condition || "general", 40).toLowerCase();
  const readings = Array.isArray(body.readings) ? body.readings : [];
  return {
    patient: {
      name: cleanText(body.patient?.name || body.patientName || "", 120),
      ageRange: cleanText(body.patient?.ageRange || body.ageRange || "", 40),
      preferredLanguage: cleanText(body.patient?.preferredLanguage || body.preferredLanguage || body.language || "English", 80),
      region: cleanText(body.patient?.region || body.region || "", 120)
    },
    contact: {
      method: cleanText(body.contact?.method || body.contactMethod || "", 40).toLowerCase(),
      value: cleanText(body.contact?.value || body.contactValue || "", 180)
    },
    conditionArea: CONDITIONS.has(conditionArea) ? conditionArea : "other",
    symptoms: cleanList(body.symptoms, 10, 180),
    redFlags: cleanList(body.redFlags, 10, 140),
    medications: cleanList(body.medications, 12, 160),
    allergies: cleanList(body.allergies, 10, 140),
    readings: readings.slice(0, 8).map(reading => ({
      type: cleanText(reading.type || "", 60),
      value: cleanText(reading.value || "", 80),
      unit: cleanText(reading.unit || "", 40),
      takenAt: cleanText(reading.takenAt || "", 80),
      note: cleanText(reading.note || "", 160)
    })).filter(reading => reading.type || reading.value || reading.note),
    urgency: cleanText(body.urgency || "routine", 40).toLowerCase(),
    requestedProviderLane: cleanText(body.requestedProviderLane || body.providerLane || "telehealth", 80),
    createVideo: body.createVideo === true,
    notifyPatient: body.notifyPatient === true,
    notifyProvider: body.notifyProvider === true,
    consentToPreparePacket: body.consentToPreparePacket === true,
    consentToShare: body.consentToShare === true,
    confirmed: body.confirmed === true
  };
}

function packetForEncounter(id, intake, provider) {
  const redFlagCopy = intake.redFlags.length
    ? "Urgent/red flag items were reported. Nexus recommends local emergency or urgent care guidance instead of treating this as routine telehealth."
    : "No red flags were selected in this local intake.";
  return {
    id: `packet-${id}`,
    type: "virtual_care_telehealth_encounter_packet",
    title: "Virtual care telehealth encounter packet",
    conditionArea: intake.conditionArea,
    requestedProviderLane: intake.requestedProviderLane,
    patientContext: intake.patient,
    contactPreference: intake.contact.method ? { method: intake.contact.method, provided: Boolean(intake.contact.value) } : { method: "", provided: false },
    symptoms: intake.symptoms,
    readings: intake.readings,
    medicationsListed: intake.medications.length,
    allergiesListed: intake.allergies.length,
    redFlags: intake.redFlags,
    redFlagGuidance: redFlagCopy,
    providerMode: provider.provider,
    summary: [
      `Condition area: ${intake.conditionArea}`,
      intake.symptoms.length ? `Symptoms/concerns: ${intake.symptoms.join("; ")}` : "Symptoms/concerns: not entered",
      intake.readings.length ? `RPM/RTM readings: ${intake.readings.map(item => `${item.type} ${item.value} ${item.unit}`.trim()).join("; ")}` : "RPM/RTM readings: not entered",
      redFlagCopy
    ],
    safetyBoundaries: [
      "Nexus does not diagnose.",
      "Nexus does not prescribe or change medications.",
      "Nexus does not claim clinician review or appointment acceptance until a configured provider confirms it.",
      "Emergency symptoms require local emergency services."
    ],
    createdAt: new Date().toISOString()
  };
}

function enqueueReview(db, encounter) {
  const item = {
    id: `telehealth-review-${encounter.id}`,
    type: "virtual_care_telehealth_encounter",
    source: "nexus-virtual-care-telehealth",
    status: "pending-review",
    createdAt: new Date().toISOString(),
    title: "Virtual care encounter review",
    summary: encounter.packet?.summary?.join(" | ") || "Telehealth packet prepared.",
    encounterId: encounter.id,
    conditionArea: encounter.conditionArea,
    consentToShare: Boolean(encounter.consents?.share),
    noLiveProviderSubmission: encounter.providerSubmissionStatus !== "submitted"
  };
  db.nexusPilotReviewQueue.unshift(item);
  return item;
}

async function createVideoForEncounter(encounter, env, options = {}) {
  const provider = selectedProvider(env);
  if (provider === "daily") return dailyProvider.createRoom(encounter, env, options);
  if (provider === "external_url") return externalUrlProvider.createHandoff(encounter, env);
  if (provider === "zoom") return zoomProvider.createRoomGate(env);
  return {
    ok: true,
    status: "local_queue_only",
    provider: "local",
    roomCreated: false,
    message: "No live video provider is configured. Nexus kept the encounter in the local provider review queue.",
    noFakeVideoClaim: true
  };
}

async function createEncounter(db, body = {}, user = null, env = process.env, options = {}) {
  ensureState(db);
  const intake = normalizeBody(body);
  const currentStatus = status(env);
  if (!intake.confirmed) {
    return {
      ok: true,
      status: "blocked-confirmation-required",
      providerStatus: currentStatus,
      encounterCreated: false,
      message: "Review and confirm before Nexus prepares a virtual care encounter packet.",
      noProviderSubmission: true
    };
  }
  if (!intake.consentToPreparePacket) {
    return {
      ok: true,
      status: "blocked-consent-required",
      providerStatus: currentStatus,
      encounterCreated: false,
      message: "Consent to prepare a provider-ready packet is required before Nexus creates the encounter packet.",
      noProviderSubmission: true
    };
  }

  const id = `telehealth-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
  const provider = providerStatus(env);
  const packet = packetForEncounter(id, intake, provider);
  const emergency = intake.redFlags.length > 0 || intake.urgency === "emergency";
  const encounter = {
    id,
    createdAt: new Date().toISOString(),
    createdBy: cleanText(user?.name || "Standard User", 120),
    status: emergency ? "emergency-guidance" : "queued-for-provider-review",
    conditionArea: intake.conditionArea,
    urgency: intake.urgency,
    patient: intake.patient,
    contact: {
      method: intake.contact.method,
      valueProvided: Boolean(intake.contact.value)
    },
    symptoms: intake.symptoms,
    redFlags: intake.redFlags,
    readings: intake.readings,
    consents: {
      preparePacket: intake.consentToPreparePacket,
      share: intake.consentToShare
    },
    requestedProviderLane: intake.requestedProviderLane,
    packet,
    provider: provider.provider,
    providerConfigured: Boolean(provider.configured),
    providerSubmissionStatus: "not_submitted",
    noDiagnosis: true,
    noPrescribing: true,
    noMedicationChanges: true,
    noEmergencyDispatch: true
  };

  if (intake.createVideo && !emergency) {
    encounter.video = await createVideoForEncounter(encounter, env, options);
    db.nexusTelehealthVideoAttempts.unshift({
      id: `video-${encounter.id}`,
      encounterId: encounter.id,
      createdAt: new Date().toISOString(),
      result: encounter.video
    });
  }

  const reviewQueueItem = enqueueReview(db, encounter);
  encounter.reviewQueueId = reviewQueueItem.id;
  db.nexusTelehealthEncounters.unshift(encounter);
  const auditEvent = audit(db, "virtual_care_telehealth_encounter_prepared", {
    actor: user?.name || "Standard User",
    role: user?.role || "Standard User",
    description: `Virtual care encounter packet prepared for ${intake.conditionArea}. No diagnosis, prescription, emergency dispatch, or provider submission occurred.`
  });

  return {
    ok: true,
    status: encounter.status,
    encounterCreated: true,
    encounter,
    packet,
    reviewQueueItem,
    providerStatus: currentStatus,
    auditEvent,
    message: emergency
      ? "Nexus prepared the packet but identified urgent/red flag language. Use local emergency or urgent care resources now."
      : "Nexus prepared a provider-ready packet and queued it for review. External provider submission still requires sharing consent and any configured provider confirmation.",
    noProviderSubmission: true,
    noDiagnosis: true,
    noPrescribing: true
  };
}

async function createVideoRoom(db, body = {}, user = null, env = process.env, options = {}) {
  ensureState(db);
  const encounterId = cleanText(body.encounterId || "", 120);
  const encounter = db.nexusTelehealthEncounters.find(item => item.id === encounterId);
  if (!encounter) return { ok: true, status: "encounter_required", roomCreated: false, message: "Prepare an encounter packet before creating a video room." };
  if (body.confirmed !== true || body.consentToShare !== true) {
    return { ok: true, status: "blocked-consent-and-confirmation-required", roomCreated: false, encounterId, message: "Video room creation requires explicit confirmation and sharing consent." };
  }
  if (Array.isArray(encounter.redFlags) && encounter.redFlags.length) {
    return { ok: true, status: "blocked-emergency-red-flags", roomCreated: false, encounterId, message: "Red flag symptoms should use local emergency or urgent care guidance, not routine video visit creation." };
  }
  const result = await createVideoForEncounter(encounter, env, options);
  encounter.video = result;
  encounter.updatedAt = new Date().toISOString();
  db.nexusTelehealthVideoAttempts.unshift({ id: `video-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`, encounterId, createdAt: new Date().toISOString(), result });
  audit(db, "virtual_care_telehealth_video_attempted", {
    actor: user?.name || "Standard User",
    role: user?.role || "Standard User",
    description: `Video room path attempted through ${result.provider || selectedProvider(env)}.`
  });
  return { ok: true, encounterId, video: result, providerStatus: status(env) };
}

function prepareNotification(db, body = {}, user = null, env = process.env) {
  ensureState(db);
  const encounterId = cleanText(body.encounterId || "", 120);
  const encounter = db.nexusTelehealthEncounters.find(item => item.id === encounterId);
  if (!encounter) return { ok: true, status: "encounter_required", message: "Prepare an encounter packet before notification." };
  if (body.confirmed !== true || body.consentToShare !== true) {
    return { ok: true, status: "blocked-consent-and-confirmation-required", encounterId, message: "Notification requires explicit confirmation and sharing consent." };
  }
  const channel = cleanText(body.channel || "email", 30).toLowerCase();
  const message = cleanText(body.message || `Nexus prepared a virtual care packet for review: ${encounter.conditionArea}.`, 320);
  const notification = {
    id: `telehealth-notification-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`,
    encounterId,
    channel,
    createdAt: new Date().toISOString(),
    messagePreview: message,
    status: "prepared-for-provider-lane",
    noSilentSend: true
  };
  db.nexusNotifications.unshift(notification);
  audit(db, "virtual_care_telehealth_notification_prepared", {
    actor: user?.name || "Standard User",
    role: user?.role || "Standard User",
    description: `Telehealth ${channel} notification prepared. Provider lane still enforces its own credentials, confirmation, and consent.`
  });
  return { ok: true, status: "prepared", encounterId, channel, message, notification };
}

function createFollowUp(db, body = {}, user = null) {
  ensureState(db);
  const encounterId = cleanText(body.encounterId || "", 120);
  const encounter = db.nexusTelehealthEncounters.find(item => item.id === encounterId);
  if (!encounter) return { ok: true, status: "encounter_required", message: "Prepare an encounter packet before creating follow-up." };
  if (body.confirmed !== true) return { ok: true, status: "blocked-confirmation-required", message: "Follow-up creation requires explicit confirmation." };
  const followUp = {
    id: `telehealth-follow-up-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`,
    encounterId,
    createdAt: new Date().toISOString(),
    title: cleanText(body.title || `Follow up on ${encounter.conditionArea} virtual care packet`, 160),
    due: cleanText(body.due || "next review", 80),
    status: "local-follow-up-created",
    noExternalCalendarWrite: true,
    noProviderSubmission: true
  };
  db.nexusTelehealthFollowUps.unshift(followUp);
  audit(db, "virtual_care_telehealth_follow_up_created", {
    actor: user?.name || "Standard User",
    role: user?.role || "Standard User",
    description: "Local virtual care follow-up created. No external calendar or provider write occurred."
  });
  return { ok: true, status: "created", followUp };
}

module.exports = {
  status,
  createEncounter,
  createVideoRoom,
  prepareNotification,
  createFollowUp,
  normalizeBody,
  providerStatus
};
