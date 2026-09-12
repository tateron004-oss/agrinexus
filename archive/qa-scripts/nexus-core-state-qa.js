const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, label) {
  if (!condition) {
    console.error(`FAIL ${label}`);
    process.exit(1);
  }
  console.log(`PASS ${label}`);
}

const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function sectionBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert(start >= 0, `${startNeedle} exists`);
  const end = source.indexOf(endNeedle, start);
  assert(end > start, `${endNeedle} follows ${startNeedle}`);
  return source.slice(start, end);
}

const contractBlock = sectionBetween(app, "const NEXUS_CORE_STATE_CONTRACT", "let nexusCoreRuntimeState");
const stateRuntimeBlock = sectionBetween(app, "function getNexusCoreStateContract", "function nexusPresenceStateLabel");
const presenceSetter = sectionBetween(app, "function setNexusPresenceState", "function inferNexusPresenceStateFromMessage");
const visualBoundaryStyles = sectionBetween(app, "function ensureNexusOsVisualBoundaryStyles", "function nexusOsShellState");

[
  "idle",
  "wake",
  "listening",
  "hearing",
  "processing",
  "reasoning",
  "searching",
  "planning",
  "asking",
  "waiting",
  "speaking",
  "preparing",
  "confirmation",
  "executing",
  "verifying",
  "learning",
  "completed",
  "queued",
  "offline",
  "blocked",
  "error"
].forEach((state) => {
  assert(contractBlock.includes(`${state}: {`), `Core state contract includes ${state}`);
  assert(contractBlock.includes(`nexus-core-state-${state}`) || visualBoundaryStyles.includes(`nexus-core-state-${state}`), `Core state has visual class ${state}`);
});

[
  "label:",
  "motion:",
  "visual:",
  "announcement:",
  "reducedMotion:",
  "allowed:"
].forEach((field) => assert(contractBlock.includes(field), `state contract defines ${field}`));

[
  "normalizeNexusCoreState",
  "canTransitionNexusCoreState",
  "nexusCoreStateAccessibleLabel",
  "updateNexusCoreOrbDom",
  "setNexusCoreState",
  "syncNexusCoreStateFromPresence"
].forEach((fn) => assert(stateRuntimeBlock.includes(`function ${fn}`), `runtime helper exists: ${fn}`));

[
  "awaiting_followup: \"asking\"",
  "awaiting_confirmation: \"confirmation\"",
  "completed_local: \"completed\"",
  "thinking: \"reasoning\"",
  "assistant_speaking: \"speaking\"",
  "user_speaking: \"hearing\""
].forEach((alias) => assert(stateRuntimeBlock.includes(alias), `presence alias maps to core state: ${alias}`));

assert(stateRuntimeBlock.includes("safeNext = canTransitionNexusCoreState(current, requested) ? requested : \"blocked\""), "invalid transitions normalize to blocked");
assert(stateRuntimeBlock.includes("orb.dataset.nexusOsOrbState = state"), "runtime updates orb state data attribute");
assert(stateRuntimeBlock.includes("orb.setAttribute(\"aria-label\", nexusCoreStateAccessibleLabel(state))"), "runtime updates accessible orb label");
assert(stateRuntimeBlock.includes("data-nexus-core-status-text"), "runtime updates screen-reader status text");
assert(visualBoundaryStyles.includes("@media (prefers-reduced-motion: reduce)"), "reduced-motion fallback exists");
assert(presenceSetter.includes("syncNexusCoreStateFromPresence(state, updates)"), "presence runtime drives Nexus Core state");
assert(app.includes("data-nexus-os-core-orb=\"true\""), "primary shell renders Nexus Core orb");
assert(app.includes("role=\"img\" aria-label=\"${escapeHtml(nexusCoreStateAccessibleLabel(coreState))}\""), "primary orb has accessible label");
assert(app.includes("data-nexus-os-orb-state=\"${escapeHtml(coreState)}\""), "primary orb renders current core state");
assert(app.includes("target.NEXUS_CORE_STATE_CONTRACT"), "state contract is exposed for safe inspection");
assert(app.includes("target.setNexusCoreState"), "state setter is exposed for QA/runtime inspection");
assert(app.includes("function exposeNexusCoreStateRuntime()"), "state runtime exposure helper exists");
assert(app.includes("typeof globalThis !== \"undefined\""), "state runtime exposure supports browser/global contexts");
assert(app.includes("getNexusCoreRuntimeState"), "state runtime getter is exposed for read-only inspection");
assert(app.includes("exposeNexusCoreStateRuntime();"), "state runtime exposure is initialized during app load");
assert(!/executing.*sent successfully|completed.*payment completed|completed.*provider contacted/i.test(contractBlock), "core state contract does not claim fake execution");

assert(packageJson.scripts["qa:nexus-core-state"] === "node scripts/nexus-core-state-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-core-state-qa.js"), "safe QA suite includes Nexus Core state QA");

console.log("Nexus Core state QA passed.");
