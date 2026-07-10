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

function sectionBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert(start >= 0, `${startNeedle} exists`);
  const end = source.indexOf(endNeedle, start);
  assert(end > start, `${endNeedle} follows ${startNeedle}`);
  return source.slice(start, end);
}

const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const acceptanceBlock = sectionBetween(app, "function getNexusOsGenesisPlatformAcceptance()", "function renderNexusOsGenesisReleasePanel()");
const releasePanel = sectionBetween(app, "function renderNexusOsGenesisReleasePanel()", "function renderNexusOsDeferredLegacySurfaces()");
const styleBlock = sectionBetween(app, "function ensureNexusOsVisualBoundaryStyles()", "function nexusOsShellState()");
const renderUserWorkspace = sectionBetween(app, "function renderUserWorkspace()", "function renderUserAccessibilityPanel");

[
  "mobileHardened: true",
  "tabletHardened: true",
  "desktopHardened: true",
  "accessibilityHardened: true",
  "reducedMotionSupported: true",
  "highContrastSupported: true",
  "forcedColorsSupported: true",
  "screenReaderSemantics: true",
  "keyboardNavigation: true",
  "longTranslationResilience: true",
  "noFakeExecution: true",
  "tenantIsolation: true",
  "domainIsolation: true"
].forEach((token) => assert(acceptanceBlock.includes(token), `acceptance contract includes ${token}`));

assert(app.includes("window.getNexusOsGenesisPlatformAcceptance = getNexusOsGenesisPlatformAcceptance"), "Genesis acceptance contract is available for runtime/browser validation");
assert(renderUserWorkspace.includes('renderNexusUserWorkspaceSegment("Genesis release", renderNexusOsGenesisReleasePanel)'), "Genesis release panel is rendered in Standard User shell");
assert(releasePanel.includes('data-nexus-os-genesis-release="1.0"'), "release panel marks Genesis version");
assert(releasePanel.includes('data-nexus-os-responsive-hardening="mobile-tablet-desktop"'), "release panel marks responsive hardening");
assert(releasePanel.includes("keyboard screen-reader reduced-motion high-contrast forced-colors long-translation"), "release panel marks accessibility hardening");
assert(releasePanel.includes('data-nexus-os-no-fake-execution="true"'), "release panel marks no-fake-execution boundary");
assert(releasePanel.includes("policy, credentials, consent, confirmation, and receipts"), "release panel keeps execution honesty visible");

[
  "Mobile, tablet, and desktop layouts",
  "Keyboard focus and visible focus rings",
  "Screen-reader live regions and labels",
  "Reduced motion and high contrast modes",
  "Long translation wrapping",
  "Tenant and domain isolation",
  "No fake execution claims"
].forEach((copy) => assert(releasePanel.includes(copy), `release panel includes ${copy}`));

[
  "@media (max-width: 720px)",
  "@media (min-width: 721px) and (max-width: 1040px)",
  "@media (min-width: 1180px)"
].forEach((query) => assert(styleBlock.includes(query), `responsive breakpoint exists: ${query}`));

[
  ":focus-visible",
  "outline: 3px solid",
  "min-height: 40px",
  "min-height: 42px",
  "overflow-wrap: anywhere",
  "hyphens: auto",
  "body.high-contrast.nexus-os-visual-boundary",
  "@media (forced-colors: active)",
  "@media (prefers-reduced-motion: reduce)"
].forEach((token) => assert(styleBlock.includes(token), `accessibility style exists: ${token}`));

assert(app.includes("data-nexus-os-conversation-live-region=\"true\" aria-live=\"polite\""), "conversation surface preserves screen-reader live region");
assert(app.includes("data-nexus-os-conversation-log=\"true\" tabindex=\"0\" aria-live=\"polite\""), "conversation log remains keyboard-focusable and polite");
assert(app.includes("role=\"img\" aria-label=\"${escapeHtml(nexusCoreStateAccessibleLabel(coreState))}\""), "Nexus orb preserves accessible state label");
assert(app.includes("body.user-mode.nexus-os-visual-boundary .sidebar"), "legacy persistent sidebar remains hidden in Standard User startup");
assert(app.includes("data-nexus-os-deferred-legacy-surfaces=\"true\""), "legacy surfaces remain deferred instead of duplicated");

assert(!/sent successfully|payment completed|provider contacted|appointment booked|diagnosed|prescribed/i.test(releasePanel), "Genesis release panel does not claim unsafe live execution");
assert(packageJson.scripts["qa:nexus-os-genesis-platform-acceptance"] === "node scripts/nexus-os-genesis-platform-acceptance-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-os-genesis-platform-acceptance-qa.js"), "safe QA suite includes Genesis platform acceptance QA");

console.log("Nexus OS Genesis platform acceptance QA passed.");
