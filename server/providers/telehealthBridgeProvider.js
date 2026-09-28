const {
  defaultStatus,
  guardEnabled,
  guardMedicalText,
  requireConfirmation,
  missingEnv,
  envEnabled,
  safeText,
  safeList,
  ensureProfileStore,
  localRecord,
  saveRecord,
  response,
  createReminder,
  queueOffline,
  providerResponse,
  missingConfigResponse,
  disabledResponse
} = require("./medicalBridgeUtils");

const zoomProvider = require("./zoomProvider");
const dailyProvider = require("../telehealth/providers/daily");

const PROVIDER = "nexus-telehealth-provider-bridge";
const FLAG = "NEXUS_TELEHEALTH_BRIDGE_ENABLED";
const INTAKES = "nexusTelehealthBridgeIntakes";
const SESSIONS = "nexusTelehealthBridgeSessions";
const SESSION_TYPES = new Set(["provider_review", "chronic_care_review", "RPM_review", "RTM_review", "health_access_preparation", "pharmacy_follow_up_questions", "mobile_clinic_follow_up", "agriculture_worker_health_support", "community_support", "workforce_coaching", "agriculture_expert_review"]);
// SESSION_TYPES itself mixes case ("RPM_review"/"RTM_review" keep their
// abbreviation uppercase), so a caller can't simply .toLowerCase() the
// input and compare against the Set directly the way the sibling bridge
// providers' all-lowercase enums do -- this lookup normalizes BOTH sides so
// a differently-cased match (e.g. "rpm_review", "Chronic_Care_Review")
// still resolves to the canonical stored casing.
const SESSION_TYPES_BY_LOWER = new Map(Array.from(SESSION_TYPES, type => [type.toLowerCase(), type]));

function canonicalSessionType(raw) {
  return SESSION_TYPES_BY_LOWER.get(String(raw || "").trim().toLowerCase().replace(/\s+/g, "_")) || null;
}

function videoStatuses(env = process.env) {
  return {
    local: { provider: "local", enabled: true, configured: true, testability: "local_only" },
    zoom: zoomProvider.status(env),
    twilioVideo: { provider: "twilio-video", enabled: envEnabled("NEXUS_TWILIO_VIDEO_ENABLED", env, false), missingConfig: missingEnv(["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"], env), roomType: safeText(env.TWILIO_VIDEO_ROOM_TYPE || "group", 40), noRecordingByDefault: true },
    daily: { provider: "daily", enabled: envEnabled("NEXUS_DAILY_VIDEO_ENABLED", env, false), missingConfig: missingEnv(["DAILY_API_KEY"], env) },
    doxy: { provider: "doxy", enabled: envEnabled("NEXUS_DOXY_ENABLED", env, false), missingConfig: missingEnv(["DOXY_BASE_ROOM_URL"], env), externalLinkOnly: true }
  };
}

function status(env = process.env) {
  return defaultStatus(PROVIDER, FLAG, env, {
    sessionTypes: Array.from(SESSION_TYPES),
    videoProviders: videoStatuses(env),
    localTelehealthPrep: true,
    liveSessionCreation: "configured_enabled_confirmed_only"
  });
}

// Found live (bridge-provider case-sensitivity sweep): comparing the raw,
// un-normalized sessionType against SESSION_TYPES meant a differently-cased
// value (e.g. "Chronic_Care_Review") failed the membership check and was
// silently RELABELED as "health_access_preparation" -- itself a valid
// SESSION_TYPES member -- so a real chronic-care telehealth intake vanished
// from any chronic_care_review-filtered view. Same shape already found and
// fixed in the sibling bridge providers this session.
function normalizeIntake(body = {}) {
  const sessionType = safeText(body.sessionType || body.type || "health_access_preparation", 80);
  return localRecord("telehealth-intake", body, {
    sessionType: canonicalSessionType(sessionType) || "health_access_preparation",
    videoProvider: safeText(body.videoProvider || "local", 40),
    selectedProviderReference: safeText(body.selectedProviderReference || body.providerReference, 180),
    title: safeText(body.title || "Telehealth preparation", 160),
    preferredDateTime: safeText(body.preferredDateTime || body.dueAt, 120),
    reason: safeText(body.reason || body.concern || "provider review preparation", 300),
    questions: safeList(body.questions || body.questionsToAsk),
    accessibilityNeeds: safeText(body.accessibilityNeeds, 220)
  });
}

function intake(body = {}, db, env = process.env) {
  const action = "telehealth.intake";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(PROVIDER, action, [body.reason, body.concern, body.questions], false);
  if (blocked) return blocked;
  const record = saveRecord(db, INTAKES, normalizeIntake(body));
  return response(PROVIDER, action, "completed", "Telehealth intake saved locally for preparation only.", { intake: record });
}

function intakes(db) {
  return response(PROVIDER, "telehealth.intakes", "completed", "Telehealth intakes loaded.", { intakes: ensureProfileStore(db, INTAKES) });
}

function prepare(body = {}, db, env = process.env) {
  const action = "telehealth.prepare";
  // Every sibling action in this module (intake/createSession/saveSession)
  // gates on the enable flag and explicit confirmation before doing
  // anything -- this one was the sole exception, despite
  // canonical-provider-definitions.js declaring confirmationRequired:true
  // for telehealth.prepare. Brought in line with the rest of the module.
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const record = normalizeIntake(body);
  const blocked = guardMedicalText(PROVIDER, action, [record.reason, record.questions.join(" ")], false);
  if (blocked) return blocked;
  return response(PROVIDER, action, "prepared", "Telehealth session preparation created locally. No live provider was connected.", {
    sessionPlan: {
      ...record,
      status: "prepared_only",
      inviteDraftOnly: true,
      providerConnected: false
    }
  });
}

async function createSession(body = {}, db, env = process.env) {
  const action = "telehealth.session.create";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const record = normalizeIntake(body);
  const blocked = guardMedicalText(PROVIDER, action, [record.reason, record.questions.join(" ")], false);
  if (blocked) return blocked;
  const provider = safeText(body.videoProvider || "local", 40).toLowerCase();
  if (provider === "local") {
    return response(PROVIDER, action, "prepared", "Local telehealth preparation created. No video room, provider connection, booking, or invite was created.", { session: { ...record, videoProvider: "local", liveRoomCreated: false } });
  }
  if (provider === "zoom") return zoomProvider.createMeeting({ confirmed: true, topic: record.title, startTime: record.preferredDateTime, duration: 30 }, env);
  if (provider === "twilio") {
    const statusInfo = videoStatuses(env).twilioVideo;
    if (!statusInfo.enabled) return disabledResponse(PROVIDER, action, "NEXUS_TWILIO_VIDEO_ENABLED");
    if (statusInfo.missingConfig.length) return missingConfigResponse(PROVIDER, action, statusInfo.missingConfig);
    return providerResponse({ provider: PROVIDER, action, status: "prepared", message: "Twilio Video room creation contract is configured and confirmation-gated; this phase returns a safe room-prep record without starting recording.", data: { session: { ...record, videoProvider: "twilio", roomType: statusInfo.roomType, recordingEnabled: false } } });
  }
  if (provider === "daily") {
    const statusInfo = videoStatuses(env).daily;
    if (!statusInfo.enabled) return disabledResponse(PROVIDER, action, "NEXUS_DAILY_VIDEO_ENABLED");
    if (statusInfo.missingConfig.length) return missingConfigResponse(PROVIDER, action, statusInfo.missingConfig);
    // Previously returned a "prepared" stub unconditionally, without ever
    // calling the real, already-working Daily.co integration
    // (server/telehealth/providers/daily.js, used correctly by
    // server/telehealth/provider.js's own video-room flow) -- confirmed
    // decorative by the production capability audit. Now genuinely creates
    // a room, or genuinely reports why it couldn't.
    const roomResult = await dailyProvider.createRoom({ id: record.id }, env);
    if (roomResult.status === "missing_config") return missingConfigResponse(PROVIDER, action, roomResult.missingEnv);
    if (!roomResult.ok || !roomResult.roomCreated) {
      return providerResponse({ provider: PROVIDER, action, ok: false, status: "provider_error",
        message: `Daily.co room creation failed: ${roomResult.providerError || roomResult.status || "unknown error"}.`,
        data: { session: { ...record, videoProvider: "daily" }, daily: roomResult } });
    }
    return providerResponse({ provider: PROVIDER, action, status: "completed", message: "A real Daily.co video room was created.",
      data: { session: { ...record, videoProvider: "daily", roomUrl: roomResult.roomUrl, roomName: roomResult.roomName, expiresAt: roomResult.expiresAt, liveRoomCreated: true } } });
  }
  if (provider === "doxy") {
    const statusInfo = videoStatuses(env).doxy;
    if (!statusInfo.enabled) return disabledResponse(PROVIDER, action, "NEXUS_DOXY_ENABLED");
    if (statusInfo.missingConfig.length) return missingConfigResponse(PROVIDER, action, statusInfo.missingConfig);
    return providerResponse({ provider: PROVIDER, action, status: "external_link_only", message: "Configured Doxy link returned as external-link-only. Nexus does not schedule, check in, or connect a provider.", data: { roomUrlConfigured: true, providerRoomUrlConfigured: Boolean(env.DOXY_PROVIDER_ROOM_URL), noSchedulingClaim: true } });
  }
  return response(PROVIDER, action, "blocked", "Unsupported video provider. Use local, Zoom, Twilio, Daily, or Doxy.", {});
}

function saveSession(body = {}, db, env = process.env) {
  const action = "telehealth.session.save";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const record = saveRecord(db, SESSIONS, { ...normalizeIntake(body), status: "saved_local_preparation" });
  return response(PROVIDER, action, "completed", "Telehealth session preparation saved locally after confirmation. No live session was created.", { session: record });
}

function sessions(db) {
  return response(PROVIDER, "telehealth.sessions", "completed", "Telehealth sessions loaded.", { sessions: ensureProfileStore(db, SESSIONS) });
}

function reminder(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "telehealth.reminder", FLAG, env);
  if (disabled) return disabled;
  return createReminder(PROVIDER, "telehealth.reminder", body, db, "Telehealth preparation");
}

function offline(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "telehealth.offline", FLAG, env);
  if (disabled) return disabled;
  return queueOffline(PROVIDER, "telehealth.offline", body, db, "telehealth_session_plan", body.summary || body.reason || "telehealth preparation metadata");
}

module.exports = { status, intake, intakes, prepare, createSession, saveSession, sessions, reminder, offline, videoStatuses };
