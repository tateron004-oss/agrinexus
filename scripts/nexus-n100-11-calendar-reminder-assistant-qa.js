const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const scheduling = require("../server/nexus-n100-calendar-reminder-assistant.js");
const permissions = require("../server/nexus-n100-permission-consent-manager.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-calendar-reminder-assistant.js");
  const doc = read("docs", "NEXUS_N100_11_CALENDAR_REMINDER_ASSISTANT.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-calendar-reminder-assistant.js"), "N100-11 scheduling module must exist.");
  assert(exists("docs", "NEXUS_N100_11_CALENDAR_REMINDER_ASSISTANT.md"), "N100-11 documentation must exist.");
  assert(exists("scripts", "nexus-n100-11-calendar-reminder-assistant-qa.js"), "N100-11 QA must exist.");

  [
    "SUPPORTED_SCHEDULE_ARTIFACTS",
    "PERMISSION_REQUIRED_ARTIFACTS",
    "createN100ScheduleArtifact",
    "blockedSchedulingResponse",
    "noCalendarWritePerformed",
    "noExternalBookingAuthorized"
  ].forEach(term => assert(source.includes(term), `N100-11 source must include ${term}.`));

  [
    "scheduling and reminder preparation contract",
    "blocked no-booking response",
    "no appointment booking",
    "not loaded into Standard User runtime behavior"
  ].forEach(term => assert(doc.includes(term), `N100-11 documentation must include ${term}.`));

  [
    "nexus-n100-calendar-reminder-assistant",
    "createN100ScheduleArtifact",
    "blockedSchedulingResponse"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-11 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-11 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-11 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "setInterval",
    "setTimeout",
    "navigator.geolocation",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "sendInvite(",
    "calendar.events.insert(",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-11 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-11-calendar-reminder-assistant"],
    "node scripts/nexus-n100-11-calendar-reminder-assistant-qa.js",
    "N100-11 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-11-calendar-reminder-assistant-qa.js"), "N100-11 QA must be wired into local-safe suites.");
}

function grantedPermission(capability) {
  const request = permissions.createN100PermissionRequest({
    capability,
    reason: `Allow ${capability} schedule preparation.`,
    nowIso: "2026-06-28T16:00:00.000Z"
  });
  return permissions.grantN100Permission(request, { nowIso: "2026-06-28T16:01:00.000Z" });
}

function assertArtifact(prompt, expectedType, permissionState = null) {
  const artifact = scheduling.createN100ScheduleArtifact({
    prompt,
    topic: prompt,
    permissionState,
    nowIso: "2026-06-28T16:05:00.000Z"
  });
  assert.equal(scheduling.isSafeN100ScheduleArtifact(artifact), true, `${prompt} must be safe.`);
  assert.equal(artifact.artifactType, expectedType, `${prompt} artifact type mismatch.`);
  assert.equal(artifact.canExecute, false, `${prompt} must not execute.`);
  assert.equal(artifact.executionAuthority, "none", `${prompt} must have no execution authority.`);
  assert.equal(artifact.noBackendWritePerformed, true, `${prompt} must not write backend.`);
  scheduling.BLOCKED_SCHEDULING_ACTIONS.forEach(action => {
    assert(artifact.blockedActions.includes(action), `${prompt} must block ${action}.`);
  });
  return artifact;
}

function assertSupportedArtifacts() {
  assertArtifact("Help me schedule time to apply for jobs.", "work_plan");
  assertArtifact("Create a study plan for agriculture training.", "study_plan");
  assertArtifact("Prepare a calendar event for this training.", "calendar_event_draft", grantedPermission("calendar"));
  assertArtifact("Create an appointment checklist.", "appointment_checklist");
  assertArtifact("Remind me to follow up.", "local_reminder_task", grantedPermission("notifications_reminders"));
}

function assertPermissionRequirements() {
  scheduling.PERMISSION_REQUIRED_ARTIFACTS.forEach(artifactType => {
    const artifact = scheduling.createN100ScheduleArtifact({ artifactType, prompt: `Prepare ${artifactType}.` });
    assert.equal(artifact.status, "waiting_for_permission", `${artifactType} must wait for permission.`);
    assert(artifact.permissionRequest, `${artifactType} must include safe permission request.`);
    assert.equal(artifact.canExecute, false, `${artifactType} wait state must not execute.`);
  });
}

function assertBlockedBooking() {
  [
    "Book me an appointment.",
    "Schedule the provider appointment now.",
    "Send an invite to the employer."
  ].forEach(prompt => {
    const blocked = scheduling.createN100ScheduleArtifact({ prompt });
    assert.equal(blocked.status, "blocked_no_booking", `${prompt} must be blocked.`);
    assert.equal(scheduling.isSafeN100ScheduleArtifact(blocked), true, `${prompt} blocked payload must be safe.`);
    assert.equal(blocked.canExecute, false, `${prompt} must not execute.`);
    assert.equal(blocked.noProviderContactAuthorized, true, `${prompt} must not contact provider.`);
  });
}

function runN100CalendarReminderAssistantQa() {
  assertStaticSafety();
  assertSupportedArtifacts();
  assertPermissionRequirements();
  assertBlockedBooking();

  console.log(JSON.stringify({
    phase: "N100-11",
    supportedScheduleArtifacts: scheduling.SUPPORTED_SCHEDULE_ARTIFACTS,
    permissionRequired: scheduling.PERMISSION_REQUIRED_ARTIFACTS,
    blockedSchedulingActions: scheduling.BLOCKED_SCHEDULING_ACTIONS,
    standardUserRuntimeActivated: false,
    noBookingAuthorized: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-11-calendar-reminder-assistant-qa] passed");
}

if (require.main === module) {
  try {
    runN100CalendarReminderAssistantQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100CalendarReminderAssistantQa
});
