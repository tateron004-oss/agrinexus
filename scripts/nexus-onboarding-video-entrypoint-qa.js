const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const index = read("public/index.html");
const styles = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function assertIncludes(source, expected, label) {
  assert(source.includes(expected), `${label} should include ${expected}`);
}

function assertNotIncludes(source, forbidden, label) {
  assert(!source.includes(forbidden), `${label} should not include ${forbidden}`);
}

assertIncludes(app, "class=\"nexus-onboarding-entry\"", "compact onboarding header button");
assertIncludes(app, "data-nexus-onboarding-open", "onboarding open handler");
assertIncludes(app, "▶️ Start here", "compact onboarding label");
assertIncludes(app, "Learn what Nexus can do", "onboarding tooltip/accessibility label");
assertIncludes(app, "function openNexusOnboardingModal", "onboarding open function");
assertIncludes(app, "function closeNexusOnboardingModal", "onboarding close function");
assertIncludes(app, "const commandInput = $(\"#nexusCommandCenterInput\");", "onboarding close focus target");
assertIncludes(app, "commandInput?.scrollIntoView?.({ block: \"center\", behavior: \"smooth\" });", "onboarding close command center return");
assertIncludes(app, "setTimeout(() => commandInput?.focus?.(), 0);", "onboarding close focus return");
assertIncludes(app, "event.target?.id === \"nexusOnboardingModal\"", "onboarding backdrop close");

const headerIndex = app.indexOf("function renderNexusCommandCenterHeader");
const heroIndex = app.indexOf("function renderNexusCommandCenterHero");
const openButtonIndex = app.indexOf("data-nexus-onboarding-open");
assert(headerIndex >= 0 && heroIndex > headerIndex, "command center header and hero should be ordered");
assert(openButtonIndex > headerIndex && openButtonIndex < heroIndex, "onboarding entry should live in compact header actions before hero");

assertIncludes(index, "id=\"nexusOnboardingModal\" class=\"modal nexus-onboarding-modal hidden\"", "onboarding modal hidden by default");
assertIncludes(index, "aria-hidden=\"true\"", "onboarding modal hidden accessibility state");
assertIncludes(index, "aria-labelledby=\"nexusOnboardingTitle\"", "onboarding modal title reference");
assertIncludes(index, "aria-describedby=\"nexusOnboardingSummary\"", "onboarding modal summary reference");
assertIncludes(index, "HD multilingual Nexus onboarding explainer", "HD multilingual onboarding frame");
assertIncludes(index, "English", "English onboarding language");
assertIncludes(index, "Spanish", "Spanish onboarding language");
assertIncludes(index, "French", "French onboarding language");
assertIncludes(index, "Arabic", "Arabic onboarding language");
assertIncludes(index, "Portuguese", "Portuguese onboarding language");
assertIncludes(index, "Swahili", "Swahili onboarding language");
assertIncludes(index, "Return to Ask Nexus", "modal close return action");
assertIncludes(index, "does not diagnose, prescribe, send messages, place calls, process payments, share location, open camera, or dispatch emergency help", "modal safety boundary");

assertIncludes(styles, ".nexus-command-header-actions .nexus-onboarding-entry", "compact entry styling");
assertIncludes(styles, "min-height: 34px", "compact entry height");
assertIncludes(styles, "border-radius: 999px", "compact entry pill");
assertIncludes(styles, ".nexus-onboarding-modal .nexus-onboarding-panel", "onboarding modal panel style");
assertIncludes(styles, ".nexus-onboarding-frame", "onboarding frame style");
assertIncludes(styles, "aspect-ratio: 16 / 9", "HD-style frame ratio");

assertNotIncludes(app, "nexus-onboarding-card", "app should not add a permanent onboarding dashboard card");
assertNotIncludes(index, "autoplay", "onboarding modal should not autoplay media");
assertNotIncludes(index, "<video", "onboarding modal should not add a permanent video element");
assertNotIncludes(index, "<iframe", "onboarding modal should not add external embedded video");
assertNotIncludes(app, "localStorage.setItem(\"nexusOnboarding", "onboarding should not add storage side effects");

assert.strictEqual(
  packageJson.scripts["qa:nexus-onboarding-video-entrypoint"],
  "node scripts/nexus-onboarding-video-entrypoint-qa.js",
  "package script should expose onboarding video entrypoint QA"
);
assertIncludes(qaSuite, "scripts/nexus-onboarding-video-entrypoint-qa.js", "qa suite should include onboarding video entrypoint QA");

console.log("Nexus onboarding video entrypoint QA passed.");
