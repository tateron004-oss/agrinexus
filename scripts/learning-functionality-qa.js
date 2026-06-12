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
  'event.target.closest("[data-course-action]")'
].forEach(marker => assert(app.includes(marker), `Frontend learning workflow marker missing: ${marker}`));

[
  "catalog-grid",
  "catalog-card",
  "course-card"
].forEach(oldMarker => {
  assert(!html.includes(oldMarker), `Learning HTML should not use old card marker: ${oldMarker}`);
  assert(!app.includes(oldMarker), `Learning app should not use old card marker: ${oldMarker}`);
  assert(!styles.includes(`.${oldMarker}`), `Learning styles should not use old card marker: ${oldMarker}`);
});

assert(html.includes("nexus-behavior-196"), "Index must force latest learning functionality build");
assert(app.includes("nexus-behavior-196"), "App must expose latest learning functionality build");
assert(fs.readFileSync("public/sw.js", "utf8").includes("agrinexus-pwa-v176"), "Service worker cache must be bumped for learning functionality");

console.log("Learning functionality QA passed");
