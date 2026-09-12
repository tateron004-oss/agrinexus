const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const patcherSource = fs.readFileSync(path.join(root, "scripts", "apply-phase-101c-local-wiring.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`[phase-101c-local-wiring-patcher-fixture-qa] ${message}`);
    process.exit(1);
  }
}

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "phase-101c-patcher-"));
try {
  write(path.join(tempRoot, "scripts", "apply-phase-101c-local-wiring.js"), patcherSource);
  write(path.join(tempRoot, "public", "index.html"), [
    "<!doctype html>",
    "<html>",
    "<body>",
    "  <script src=\"/nexus-tool-registry.js?v=nexus-behavior-304\"></script>",
    "  <script src=\"/app.js?v=nexus-behavior-305\"></script>",
    "</body>",
    "</html>",
    ""
  ].join("\n"));
  write(path.join(tempRoot, "package.json"), JSON.stringify({
    name: "phase-101c-fixture",
    version: "0.0.0",
    scripts: {
      "qa:nexus-workforce": "node scripts/qa-suite.js nexus-workforce",
      "qa:all-safe": "node scripts/qa-suite.js all-safe"
    }
  }, null, 2) + "\n");
  write(path.join(tempRoot, "scripts", "qa-suite.js"), [
    "const suites = {",
    "  \"nexus-workforce\": [",
    "    \"scripts/nexus-workforce-branding-qa.js\",",
    "    \"scripts/nexus-100-completion-system-audit-readiness-qa.js\"",
    "  ]",
    "};",
    "suites[\"all-safe\"] = [",
    "  \"scripts/nexus-100-full-platform-roadmap-qa.js\",",
    "  \"scripts/nexus-100-completion-system-audit-readiness-qa.js\"",
    "];",
    ""
  ].join("\n"));
  write(path.join(tempRoot, "scripts", "nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js"), [
    "const loaderPresent = index.includes(\"nexus-agriculture-support-response-card.js\");",
    "assert(!loaderPresent, \"This readiness guard expects Phase 101C to perform the actual index.html loader insertion, not Phase 101B.\");",
    ""
  ].join("\n"));

  const result = spawnSync(process.execPath, [path.join(tempRoot, "scripts", "apply-phase-101c-local-wiring.js")], {
    cwd: tempRoot,
    encoding: "utf8",
    windowsHide: true
  });
  assert(result.status === 0, `patcher fixture run must pass. stdout=${result.stdout} stderr=${result.stderr}`);

  const index = fs.readFileSync(path.join(tempRoot, "public", "index.html"), "utf8");
  const packageData = JSON.parse(fs.readFileSync(path.join(tempRoot, "package.json"), "utf8"));
  const qaSuite = fs.readFileSync(path.join(tempRoot, "scripts", "qa-suite.js"), "utf8");
  const readinessQa = fs.readFileSync(path.join(tempRoot, "scripts", "nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js"), "utf8");

  const loaderCount = (index.match(/nexus-agriculture-support-response-card\.js/g) || []).length;
  assert(loaderCount === 1, `fixture index must have exactly one Phase 101 loader, found ${loaderCount}.`);
  assert(index.indexOf("nexus-agriculture-support-response-card.js") < index.indexOf("/app.js?v=nexus-behavior-305"), "fixture loader must appear before app.js.");
  assert(packageData.scripts["qa:nexus-phase-101-agriculture-support-response-card-runtime"], "fixture package must include runtime QA alias.");
  assert(packageData.scripts["qa:nexus-phase-101b-standard-user-runtime-wiring-readiness"], "fixture package must include readiness QA alias.");
  assert(qaSuite.includes("scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js"), "fixture qa-suite must include runtime QA.");
  assert(qaSuite.includes("scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js"), "fixture qa-suite must include readiness QA.");
  assert(readinessQa.includes("assert(loaderPresent"), "fixture readiness QA must expect loader presence after patching.");

  console.log("[phase-101c-local-wiring-patcher-fixture-qa] passed");
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}
