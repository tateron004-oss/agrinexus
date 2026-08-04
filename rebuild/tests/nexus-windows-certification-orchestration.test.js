const assert = require("node:assert/strict");
const fs = require("node:fs");

const workflows = {
  canonical: ".github/workflows/nexus-live-runtime-certification.yml",
  legacy: ".github/workflows/nexus-release-certification-v2.yml",
  form: ".github/workflows/nexus-voice-form-entry-certification.yml",
  clean: ".github/workflows/nexus-clean-windows-certification.yml"
};

const contents = Object.fromEntries(
  Object.entries(workflows).map(([name, file]) => [name, fs.readFileSync(file, "utf8")])
);
const productionTransaction = fs.readFileSync("rebuild/tests/nexus-production-transaction-windows.spec.js", "utf8");

for (const [name, workflow] of Object.entries(contents)) {
  assert.match(workflow, /workflow_dispatch:/, `${name} must be explicitly dispatched`);
  assert.match(
    workflow,
    /group: nexus-windows-physical-certification\s+cancel-in-progress: false/,
    `${name} must use the shared, non-canceling microphone-owner lock`
  );
}

assert.match(
  contents.canonical,
  /^\s{2}push:\s*$[\s\S]*?rebuild\/nexus-genesis-clean-foundation/m,
  "canonical certification must auto-queue for the protected release branch"
);

for (const name of ["legacy", "form"]) {
  assert.doesNotMatch(
    contents[name],
    /^\s{2}push:/m,
    `${name} diagnostic workflow must remain manual-only`
  );
}

assert.match(
  contents.clean,
  /^\s{2}push:\s*$[\s\S]*?branches:\s*$[\s\S]*?- rebuild\/nexus-genesis-clean-foundation\s*$[\s\S]*?paths:\s*$[\s\S]*?- \.github\/workflows\/nexus-canonical-completion-bridge\.yml\s*$[\s\S]*?- \.github\/workflows\/nexus-clean-windows-certification\.yml/m,
  "clean certification must launch directly from the canonical branch handoff"
);

for (const name of ["form", "clean"]) {
  assert.match(
    contents[name],
    /NEXUS_EXPECTED_RELEASE_SHA: \$\{\{ github\.sha \}\}/,
    `${name} must bind evidence to the dispatched branch head`
  );
  assert.match(
    contents[name],
    /nexus-release-certification-controller\.js verify-deployment/,
    `${name} must reject stale or undeployed code before taking the microphone`
  );
}

assert.match(
  contents.clean,
  /NEXUS_CANONICAL_PRODUCTION_URL\/health/,
  "clean certification must probe the health route exposed by the Nexus Genesis runtime"
);
assert.doesNotMatch(
  contents.clean,
  /NEXUS_CANONICAL_PRODUCTION_URL\/certification\/health/,
  "clean certification must not probe the unrelated adapter-prefixed health route"
);
assert.match(
  productionTransaction,
  /NEXUS_EXPECTED_DEPLOYMENT_SHA \|\| process\.env\.NEXUS_EXPECTED_RELEASE_SHA/,
  "production transaction certification must accept the canonical workflow release SHA"
);

assert.match(contents.canonical, /Complete physical voice user-mode certification/);
assert.match(contents.canonical, /nexus-production-certification-preflight\.js/);
assert.match(
  contents.canonical,
  /node rebuild\/tests\/nexus-windows-certification-orchestration\.test\.js/,
  "canonical Linux preflight must enforce the orchestration contract"
);

console.log("Nexus Windows certification orchestration: PASS");
