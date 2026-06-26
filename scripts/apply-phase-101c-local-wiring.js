const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  index: path.join(root, "public", "index.html"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  phase101bQa: path.join(root, "scripts", "nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js")
};

const loaderLine = '  <script src="/nexus-agriculture-support-response-card.js?v=nexus-phase-101"></script>';
const appScriptLine = '  <script src="/app.js?v=nexus-behavior-305"></script>';
const phase101RuntimeQa = 'scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js';
const phase101bQa = 'scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js';

function fail(message) {
  console.error(`[apply-phase-101c-local-wiring] ${message}`);
  process.exit(1);
}

function read(filePath) {
  if (!fs.existsSync(filePath)) fail(`${path.relative(root, filePath)} does not exist.`);
  return fs.readFileSync(filePath, "utf8");
}

function write(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`[apply-phase-101c-local-wiring] updated ${path.relative(root, filePath)}`);
}

function insertIndexLoader() {
  let index = read(paths.index);
  if (!index.includes('nexus-agriculture-support-response-card.js')) {
    if (!index.includes(appScriptLine)) fail(`public/index.html is missing expected app script line: ${appScriptLine}`);
    index = index.replace(appScriptLine, `${loaderLine}\n${appScriptLine}`);
    write(paths.index, index);
  } else {
    console.log("[apply-phase-101c-local-wiring] index loader already present");
  }
  const count = (index.match(/nexus-agriculture-support-response-card\.js/g) || []).length;
  if (count !== 1) fail(`expected exactly one Phase 101 loader in public/index.html, found ${count}.`);
  if (index.indexOf(loaderLine) > index.indexOf(appScriptLine)) fail("Phase 101 loader must appear before app.js.");
}

function updatePackageScripts() {
  const packageData = JSON.parse(read(paths.packageJson));
  packageData.scripts = packageData.scripts || {};
  packageData.scripts["qa:nexus-phase-101-agriculture-support-response-card-runtime"] = "node scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js";
  packageData.scripts["qa:nexus-phase-101b-standard-user-runtime-wiring-readiness"] = "node scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js";
  write(paths.packageJson, `${JSON.stringify(packageData, null, 2)}\n`);
}

function addScriptAfterAnchor(source, anchor, script) {
  if (!source.includes(`"${anchor}"`)) fail(`scripts/qa-suite.js missing anchor ${anchor}.`);
  const scriptToken = `"${script}"`;
  const anchorToken = `"${anchor}"`;
  const newline = source.includes("\r\n") ? "\r\n" : "\n";
  const lines = source.split(/\r?\n/).filter(line => !line.includes(scriptToken));
  const updated = [];
  let insertions = 0;
  for (const line of lines) {
    updated.push(line);
    if (line.includes(anchorToken)) {
      const indent = line.match(/^\s*/)?.[0] || "    ";
      updated.push(`${indent}${scriptToken},`);
      insertions += 1;
    }
  }
  if (insertions < 2) fail(`expected to insert ${script} into nexus-workforce and all-safe, inserted ${insertions}.`);
  return updated.join(newline);
}

function updateQaSuite() {
  let suite = read(paths.qaSuite);
  suite = addScriptAfterAnchor(suite, "scripts/nexus-100-completion-system-audit-readiness-qa.js", phase101RuntimeQa);
  suite = addScriptAfterAnchor(suite, phase101RuntimeQa, phase101bQa);
  const runtimeCount = (suite.match(/nexus-phase-101-agriculture-support-response-card-runtime-qa\.js/g) || []).length;
  const readinessCount = (suite.match(/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa\.js/g) || []).length;
  if (runtimeCount < 2) fail(`expected Phase 101 runtime QA to be wired into nexus-workforce and all-safe, found ${runtimeCount}.`);
  if (readinessCount < 2) fail(`expected Phase 101B readiness QA to be wired into nexus-workforce and all-safe, found ${readinessCount}.`);
  write(paths.qaSuite, suite);
}

function updatePhase101bGuard() {
  let qa = read(paths.phase101bQa);
  const oldAssertion = 'assert(!loaderPresent, "This readiness guard expects Phase 101C to perform the actual index.html loader insertion, not Phase 101B.");';
  const newAssertion = 'assert(loaderPresent, "Phase 101C must insert the agriculture support card loader into public/index.html.");\nassert(index.indexOf("nexus-agriculture-support-response-card.js") < index.indexOf("/app.js?v=nexus-behavior-305"), "Phase 101 loader must appear before app.js.");';
  if (qa.includes(oldAssertion)) qa = qa.replace(oldAssertion, newAssertion);
  if (!qa.includes('assert(loaderPresent, "Phase 101C must insert')) fail("Phase 101B QA guard was not updated to expect loader presence.");
  write(paths.phase101bQa, qa);
}

function main() {
  insertIndexLoader();
  updatePackageScripts();
  updateQaSuite();
  updatePhase101bGuard();
  console.log("[apply-phase-101c-local-wiring] Phase 101C local wiring patch applied. Run full QA and Standard User browser validation next.");
}

main();
