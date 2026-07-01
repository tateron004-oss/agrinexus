const { clean, envEnabled, providerResponse, disabledResponse, requireConfirmation, blockedResponse } = require("./providerUtils");
const moodleProvider = require("./moodleProvider");
const learningBridgeProvider = require("./learningBridgeProvider");

function status(env = process.env) {
  return { provider: "nexus-lms-live-bridge", enabled: envEnabled("NEXUS_LMS_LIVE_BRIDGE_ENABLED", env, true), moodle: moodleProvider.status(env), localFallbackAvailable: true, enrollmentConfirmationRequired: true };
}

async function courses(query = {}, env = process.env) {
  const provider = "nexus-lms-live-bridge";
  const action = "lms.bridge.courses";
  if (!envEnabled("NEXUS_LMS_LIVE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_LMS_LIVE_BRIDGE_ENABLED");
  const moodleStatus = moodleProvider.status(env);
  if (moodleStatus.enabled && !moodleStatus.missingConfig.length) return moodleProvider.courses(env);
  const local = await learningBridgeProvider.search({ query: query.q || query.query || "training", category: query.category || "" }, env);
  return providerResponse({ provider, action, status: "local_fallback", missingConfig: moodleStatus.missingConfig, message: "LMS credentials are not ready, so local learning catalog fallback was returned. No enrollment occurred.", data: { cards: local.body?.data?.cards || [], lmsConfigured: false } });
}

function saveCourse(body = {}, db, env = process.env) {
  const provider = "nexus-lms-live-bridge";
  const action = "lms.bridge.save_course";
  if (!envEnabled("NEXUS_LMS_LIVE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_LMS_LIVE_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  return learningBridgeProvider.saveResource({ ...body, confirmed: true, title: clean(body.title || body.fullname || "Learning course"), category: clean(body.category || "Training"), summary: clean(body.summary || "Course saved for review.") }, db, env);
}

function enrollPrepare(body = {}, env = process.env) {
  const provider = "nexus-lms-live-bridge";
  const action = "lms.bridge.enroll_prepare";
  if (!envEnabled("NEXUS_LMS_LIVE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_LMS_LIVE_BRIDGE_ENABLED");
  const title = clean(body.title || body.courseId || "Course").slice(0, 180);
  if (!title) return blockedResponse(provider, action, "Course title or courseId is required.");
  return providerResponse({ provider, action, status: "prepared", message: "Enrollment preparation created locally. No LMS enrollment, payment, certificate, or credential issuance occurred.", data: { title, courseId: clean(body.courseId), preparedOnly: true, enrolled: false } });
}

async function enroll(body = {}, env = process.env) {
  const provider = "nexus-lms-live-bridge";
  const action = "lms.bridge.enroll";
  if (!envEnabled("NEXUS_LMS_LIVE_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_LMS_LIVE_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  return moodleProvider.enroll(body, env);
}

module.exports = { status, courses, saveCourse, enrollPrepare, enroll };
