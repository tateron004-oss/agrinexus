const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const patcherPath = path.join(root, "scripts", "apply-phase-101c-local-wiring.js");
const patcher = fs.readFileSync(patcherPath, "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`[phase-101c-local-wiring-patcher-qa] ${message}`);
    process.exit(1);
  }
}

assert(patcher.includes('nexus-agriculture-support-response-card.js?v=nexus-phase-101'), "patcher must insert the Phase 101 local loader.");
assert(patcher.includes('"qa:nexus-phase-101-agriculture-support-response-card-runtime"'), "patcher must add runtime npm QA alias.");
assert(patcher.includes('"qa:nexus-phase-101b-standard-user-runtime-wiring-readiness"'), "patcher must add readiness npm QA alias.");
assert(patcher.includes('scripts/nexus-phase-101-agriculture-support-response-card-runtime-qa.js'), "patcher must wire runtime QA script.");
assert(patcher.includes('scripts/nexus-phase-101b-standard-user-runtime-wiring-readiness-qa.js'), "patcher must wire readiness QA script.");
assert(patcher.includes('Phase 101 loader must appear before app.js'), "patcher must verify loader order.");
assert(patcher.includes('Phase 101C local wiring patch applied'), "patcher must report completion.");
assert(!patcher.includes('execSync('), "patcher must not execute shell commands.");
assert(!patcher.includes('child_process'), "patcher must not import child_process.");
assert(!patcher.includes('fetch('), "patcher must not perform network fetches.");

vm.runInNewContext(patcher, {
  require,
  console: { log() {}, error() {} },
  process: { exit(code) { throw new Error(`process.exit(${code})`); } },
  __dirname: path.join(root, "scripts")
}, { filename: "apply-phase-101c-local-wiring.js" });

console.log("[phase-101c-local-wiring-patcher-qa] passed");
