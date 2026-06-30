const {
  clean,
  envEnabled,
  missingEnv,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  requireConfirmation,
  blockedResponse,
  failedResponse,
  safeJson
} = require("./providerUtils");

function status(env = process.env) {
  return {
    provider: "moodle-compatible-lms",
    enabled: envEnabled("NEXUS_LMS_ENABLED", env),
    enrollEnabled: envEnabled("NEXUS_LMS_ENROLL_ENABLED", env),
    missingConfig: missingEnv(["MOODLE_BASE_URL", "MOODLE_TOKEN"], env)
  };
}

function moodleUrl(functionName, params = {}, env = process.env) {
  const base = clean(env.MOODLE_BASE_URL).replace(/\/$/, "");
  const search = new URLSearchParams({
    wstoken: env.MOODLE_TOKEN,
    wsfunction: functionName,
    moodlewsrestformat: "json",
    ...params
  });
  return `${base}/webservice/rest/server.php?${search.toString()}`;
}

function normalizeCourse(course = {}) {
  return {
    courseId: course.id,
    title: course.fullname || course.displayname || course.shortname || "Moodle course",
    summary: String(course.summary || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
    category: course.categoryname || course.categoryid || "",
    link: course.viewurl || "",
    source: "Moodle-compatible LMS"
  };
}

async function courses(env = process.env) {
  const provider = "moodle";
  const action = "learning.courses";
  if (!envEnabled("NEXUS_LMS_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_LMS_ENABLED");
  const missing = missingEnv(["MOODLE_BASE_URL", "MOODLE_TOKEN"], env);
  if (missing.length) return missingConfigResponse(provider, action, missing);
  try {
    const response = await fetch(moodleUrl("core_course_get_courses", {}, env));
    const payload = await safeJson(response);
    if (!response.ok || payload.exception) throw new Error(payload.message || response.statusText);
    const cards = (Array.isArray(payload) ? payload : []).filter(course => course.visible !== 0).slice(0, 20).map(normalizeCourse);
    return providerResponse({ provider, action, status: "completed", message: `Loaded ${cards.length} LMS course(s).`, data: { cards } });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

async function enroll(body = {}, env = process.env) {
  const provider = "moodle";
  const action = "learning.enroll";
  if (!envEnabled("NEXUS_LMS_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_LMS_ENABLED");
  if (!envEnabled("NEXUS_LMS_ENROLL_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_LMS_ENROLL_ENABLED");
  const missing = missingEnv(["MOODLE_BASE_URL", "MOODLE_TOKEN"], env);
  if (missing.length) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  if (!clean(body.courseId) || !clean(body.userId)) return blockedResponse(provider, action, "courseId and userId are required for LMS enrollment testing.");
  return providerResponse({
    provider,
    action,
    status: "blocked",
    message: "LMS enrollment endpoint is gated for later role mapping. No enrollment was submitted.",
    data: { courseId: clean(body.courseId), userId: clean(body.userId) }
  });
}

module.exports = { status, courses, enroll };
