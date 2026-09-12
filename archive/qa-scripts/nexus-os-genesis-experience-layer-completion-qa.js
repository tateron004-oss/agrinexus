const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");

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
const styles = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const requiredQaScripts = [
  "archive/qa-scripts/nexus-experience-render-root-qa.js",
  "archive/qa-scripts/nexus-standard-user-diagnostics-removal-qa.js",
  "archive/qa-scripts/nexus-core-first-viewport-qa.js",
  "archive/qa-scripts/nexus-first-impression-greeting-qa.js",
  "archive/qa-scripts/nexus-primary-voice-entry-qa.js",
  "archive/qa-scripts/nexus-primary-typed-entry-qa.js",
  "archive/qa-scripts/nexus-home-to-mission-transition-qa.js",
  "archive/qa-scripts/nexus-first-viewport-responsive-hardening-qa.js",
  "archive/qa-scripts/nexus-accessible-first-impression-qa.js",
  "archive/qa-scripts/nexus-os-genesis-experience-layer-completion-qa.js"
];

const requiredAliases = {
  "qa:nexus-experience-render-root": "node archive/qa-scripts/nexus-experience-render-root-qa.js",
  "qa:nexus-standard-user-diagnostics-removal": "node archive/qa-scripts/nexus-standard-user-diagnostics-removal-qa.js",
  "qa:nexus-core-first-viewport": "node archive/qa-scripts/nexus-core-first-viewport-qa.js",
  "qa:nexus-first-impression-greeting": "node archive/qa-scripts/nexus-first-impression-greeting-qa.js",
  "qa:nexus-primary-voice-entry": "node archive/qa-scripts/nexus-primary-voice-entry-qa.js",
  "qa:nexus-primary-typed-entry": "node archive/qa-scripts/nexus-primary-typed-entry-qa.js",
  "qa:nexus-home-to-mission-transition": "node archive/qa-scripts/nexus-home-to-mission-transition-qa.js",
  "qa:nexus-first-viewport-responsive-hardening": "node archive/qa-scripts/nexus-first-viewport-responsive-hardening-qa.js",
  "qa:nexus-accessible-first-impression": "node archive/qa-scripts/nexus-accessible-first-impression-qa.js",
  "qa:nexus-os-genesis-experience-layer-completion": "node archive/qa-scripts/nexus-os-genesis-experience-layer-completion-qa.js"
};

requiredQaScripts.forEach(script => {
  assert(fs.existsSync(path.join(root, script)), `${script} exists`);
  assert(qaSuite.includes(script), `${script} is wired into safe suites`);
});

Object.entries(requiredAliases).forEach(([alias, command]) => {
  assert(packageJson.scripts[alias] === command, `${alias} package alias exists`);
});

[
  'data-nexus-standard-user-render-root="true-conversational-experience"',
  'data-nexus-os-standard-startup="true-conversation"',
  'data-nexus-true-conversational-root="true"',
  'data-nexus-genesis-experience-root="true"',
  'data-nexus-genesis-first-viewport="true"',
  'data-nexus-os-core-orb="true"',
  'data-nexus-true-home="true"',
  'data-nexus-genesis-orb-only-home="true"',
  'data-nexus-genesis-orb-presence="true"',
  'data-nexus-primary-voice-entry="true"',
  'data-nexus-primary-typed-entry="true"',
  'data-nexus-primary-typed-submit="true"',
  'data-nexus-focused-mission-window="true"'
].forEach(token => assert(app.includes(token), `${token} runtime marker exists`));

[
  "Nexus visual status indicator. Use voice controls to continue.",
  "Enable voice once, then continue by speaking. Structured fields appear only when a workflow needs them.",
  "Hello. I'm Kyro.",
  "Focused mission open",
  "No external action is authorized from this transition."
].forEach(token => assert(app.includes(token), `${token} user-facing copy exists`));

[
  "True Conversational Experience",
  "@media (max-width: 640px)",
  "@media (max-width: 520px)",
  "@media (prefers-reduced-motion: reduce)",
  ".nexus-true-orb-stage",
  ".nexus-true-composer",
  ".nexus-true-conversation"
].forEach(token => assert(styles.includes(token), `${token} CSS support exists`));

assert(app.includes("renderNexusOsDeferredLegacySurfaces"), "legacy diagnostics remain deferred");
assert(!/Good to see you\\\", \\$\\{escapeHtml\\(displayName\\)\\}/.test(app), "Standard User role greeting is not restored");
assert(!/sent successfully|payment completed|provider contacted|appointment booked|dispatch started/i.test(app.slice(app.indexOf("function renderUserWorkspace()"), app.indexOf("function renderUserAccessibilityPanel"))), "Standard User render root has no false execution claim");

console.log("Nexus OS Genesis Experience Layer completion QA passed.");
