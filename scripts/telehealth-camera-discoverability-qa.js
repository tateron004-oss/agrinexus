const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

function assertIncludes(source, needle, message) {
  assert(source.includes(needle), message || `Missing expected source text: ${needle}`);
}

assertIncludes(app, 'label: "Local Camera Preview"', "Simple Health mode should expose a clear local camera preview entry");
assertIncludes(app, 'command: "open video for provider to show injury"', "Simple camera entry should reuse the health video command");
assertIncludes(app, 'workflow: "health"', "Simple video command should map to the Health workflow");
assertIncludes(app, 'action: "video"', "Simple video command should map to health:video");
assertIncludes(app, "function isHealthVideoPreviewCommand(command = \"\")", "Camera routing should use a targeted health video predicate");
assertIncludes(app, "isHealthVideoPreviewCommand(button.dataset.simpleCommand)", "Standard User camera button should bypass broader provider-guide routing");
assertIncludes(app, "workflowConfig(\"health\", \"video\"", "Standard User camera button should build the health:video workflow directly");
assertIncludes(app, "openHealthVideoPreviewWorkflow(config, \"Local camera preview and video handoff record are ready.\", \"health\")", "Standard User camera button should open the rich camera preview modal");

assertIncludes(html, 'data-health="video"', "Full Health mode should expose a visible health video workflow button");
assertIncludes(html, "Open local camera preview", "Full Health video button should use local-preview wording");

assertIncludes(app, "if (config.videoPreview)", "User-mode video workflows should be routed to a renderer that preserves video preview controls");
assertIncludes(app, "function openHealthVideoPreviewWorkflow", "Health video preview should use a shared modal-opening helper");
assertIncludes(app, "openHealthVideoPreviewWorkflow(config, mapped.response, sectionId)", "Mapped Standard User camera workflows should reuse the shared modal helper");
assertIncludes(app, "workflow === \"health\" && action === \"video\" && config.videoPreview", "Typed/global health video commands should receive a narrow modal exception");
assertIncludes(app, "openHealthVideoPreviewWorkflow(config, response, userSection)", "Typed/global health video commands should open the rich camera preview modal");
assertIncludes(app, "openWorkflowModal(config)", "Video preview helper should reuse the existing workflow modal");
assertIncludes(app, "videoSessionPreviewHtml(config)", "Workflow modal should render the shared video preview helper");
assertIncludes(app, "workflow-video-preview", "Video preview section should exist");
assertIncludes(app, "workflowStartCamera", "Video preview should expose Open camera control");
assertIncludes(app, "workflowStopCamera", "Video preview should expose Stop camera control");
assertIncludes(app, "startWorkflowCamera", "Open camera control should reuse the existing camera start helper");
assertIncludes(app, "stopWorkflowCamera", "Stop camera control should reuse the existing camera stop helper");

for (const text of [
  "Local camera preview only",
  "This is not connected to a live provider and no real telehealth visit is started.",
  "Local handoff demo only",
  "Not a live provider room",
  "no real-time video connection",
  "Provider workflow evidence is local/demo only"
]) {
  assert(
    `${app}\n${html}`.toLowerCase().includes(text.toLowerCase()),
    `Camera preview flow should preserve non-live wording: ${text}`
  );
}

for (const riskyText of [
  "starts a live provider room",
  "starts a real telehealth visit",
  "real-time WebRTC session is ready",
  "production clinical video session"
]) {
  assert(
    !`${app}\n${html}`.toLowerCase().includes(riskyText.toLowerCase()),
    `Camera preview flow should not imply production/live video care: ${riskyText}`
  );
}

assertIncludes(app, 'path: action === "video" ? "/api/video/session"', "health:video should still submit through /api/video/session only after confirmation");
assertIncludes(app, 'body: action === "video" ? { type: "health" }', "health:video should keep Healthcare video body mapping");

console.log("Telehealth camera discoverability QA passed");
