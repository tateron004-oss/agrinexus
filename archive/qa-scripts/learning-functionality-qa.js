const fs = require("fs");

function assert(condition, message) {
  if (!condition) {
    console.error(`Learning functionality QA failed: ${message}`);
    process.exit(1);
  }
}

const html = fs.readFileSync("public/index.html", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");
const styles = fs.readFileSync("public/styles.css", "utf8");
const server = fs.readFileSync("server.js", "utf8");

[
  'url.pathname === "/api/learning/catalog"',
  'url.pathname === "/api/learning/start"',
  'url.pathname === "/api/learning/lesson"',
  'url.pathname === "/api/learning/quiz"',
  'url.pathname === "/api/learning/certificate"',
  'url.pathname === "/api/learning/accessibility"',
  'url.pathname === "/api/learning/advanced"',
  "course.started",
  "lesson.completed",
  "certificate.issued",
  "learning.assignment_created"
].forEach(marker => assert(server.includes(marker), `Backend learning marker missing: ${marker}`));

[
  "lessonWorkspace",
  "activeCourseModules",
  "learning-course-actions",
  "catalog-action-row",
  "learning-course-list",
  "course-action-row",
  "catalog-lesson",
  "data-course-action"
].forEach(marker => {
  assert(html.includes(marker) || app.includes(marker) || styles.includes(marker), `Learning action UI marker missing: ${marker}`);
});

[
  'path: "/api/learning/start"',
  'path: "/api/learning/advanced"',
  "lessonWorkflowConfig(course",
  "learningAccessibilityWorkflowConfig",
  "courseSelectOptions()",
  'event.target.closest("[data-course-action]")',
  "function explicitLearningReadinessIntent",
  "const explicitLearningIntent = explicitLearningReadinessIntent(command)",
  "I opened Learning for farming support",
  "I opened Learning quiz support"
].forEach(marker => assert(app.includes(marker), `Frontend learning workflow marker missing: ${marker}`));

[
  "teach me|help me learn|show me training|train me",
  "farming|farm|agriculture|agri|crop|crops",
  "ai|artificial intelligence",
  "give|start|take|open|show|make|create",
  "me|please|help|practice",
  "Learning quiz support",
  "Learning for farming support",
  "Learning for AI training"
].forEach(marker => assert(app.includes(marker), `Learning typed command readiness marker missing: ${marker}`));

assert(
  app.indexOf("const explicitLearningIntent = explicitLearningReadinessIntent(command)") < app.indexOf("if (shouldAskRepeatForUnclearVoiceCommand(command, options))"),
  "Explicit learning typed commands must route before unclear-repeat fallback"
);
assert(
  app.indexOf("const explicitLearningIntent = explicitLearningReadinessIntent(command)") < app.indexOf("const smartIntent = nexusSmartIntentRouter(command)"),
  "Explicit learning typed commands must route before smart/general intent fallback"
);

[
  "start training",
  "start a course",
  "complete my lesson",
  "finish lesson",
  "build captions",
  "make captions"
].forEach(marker => assert(app.includes(marker), `Existing learning command marker missing: ${marker}`));

[
  "catalog-grid",
  "catalog-card",
  "course-card"
].forEach(oldMarker => {
  assert(!html.includes(oldMarker), `Learning HTML should not use old card marker: ${oldMarker}`);
  assert(!app.includes(oldMarker), `Learning app should not use old card marker: ${oldMarker}`);
  assert(!styles.includes(`.${oldMarker}`), `Learning styles should not use old card marker: ${oldMarker}`);
});

const appBuildMatch = app.match(/const AGRINEXUS_BUILD_VERSION = "([^"]+)"/);
const appCacheMatch = app.match(/const AGRINEXUS_PWA_CACHE_VERSION = "([^"]+)"/);
assert(appBuildMatch, "App must expose a learning functionality build constant");
assert(appCacheMatch, "App must expose a PWA cache constant for learning functionality");

const currentBuild = appBuildMatch[1];
const currentCache = appCacheMatch[1];
const serviceWorker = fs.readFileSync("public/sw.js", "utf8");

assert(html.includes(`styles.css?v=${currentBuild}`), "Index must force latest learning functionality style build");
assert(html.includes(`app.js?v=${currentBuild}`), "Index must force latest learning functionality script build");
assert(serviceWorker.includes(`BUILD_VERSION = "${currentBuild}"`), "Service worker build must match app learning functionality build");
assert(serviceWorker.includes(`CACHE_NAME = "${currentCache}"`), "Service worker cache must match app learning functionality cache");

console.log("Learning functionality QA passed");


