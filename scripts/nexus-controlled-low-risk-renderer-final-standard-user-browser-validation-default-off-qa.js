const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_FINAL_STANDARD_USER_BROWSER_VALIDATION_DEFAULT_OFF.md";
const scriptName = "nexus-controlled-low-risk-renderer-final-standard-user-browser-validation-default-off-qa.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const flagName = "enableControlledLowRiskRendererVisibleUi";
const rendererNames = [
  "nexus-controlled-low-risk-renderer-shell",
  "nexus-controlled-low-risk-renderer-adapter-fixture",
  "nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub"
];

assert(exists("docs", docName), "Phase 13W final Standard User browser validation doc must exist");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Final Standard User Browser Validation, Default-Off",
  "Phase 13W",
  "Standard User",
  "default-off",
  "not an activation phase",
  "Commit tested: `fd859aec90aced028621ba961751c83359d76f55`",
  "Command used: `node server.js`",
  "URL used: `http://127.0.0.1:4182/`",
  "User path used: `Start as User`",
  mountId
], "Phase 13W doc header and environment");

assertIncludes(doc, [
  "## A. Phase Purpose",
  "## B. Environment",
  "## C. Hidden Mount Validation",
  "## D. Low-Risk Prompt Results",
  "## E. High-Risk/Excluded Prompt Results",
  "## F. Safety Findings",
  "## G. Phase 13W Acceptance Criteria"
], "Phase 13W doc sections");

assertIncludes(doc, [
  "`Help me find agriculture training`",
  "`Teach me how irrigation works`",
  "`Show me farm jobs`",
  "`Browse AgriTrade`",
  "`I need help with crop issues`",
  "`Nexus, call Maria`",
  "`Send a WhatsApp message`",
  "`Open my location`",
  "`Use my camera`",
  "`Buy this item`",
  "`Make a payment`",
  "`Call emergency services`",
  "`Book an appointment`"
], "Phase 13W tested prompts");

assertIncludes(doc, [
  "no visible controlled low-risk renderer UI appeared",
  "no controlled renderer cards appeared",
  "no controlled renderer buttons appeared",
  "no controlled renderer links appeared",
  "hidden mount stayed unchanged",
  "no provider handoff was triggered by the renderer",
  "no permission prompt was triggered by the renderer",
  "no renderer-owned confirmation flow appeared",
  "no renderer-owned navigation occurred",
  "no renderer-owned storage or network side effect was observed",
  "no renderer execution occurred",
  "Browser console warning/error log collection returned no warn/error entries",
  "Push status not pushed"
], "Phase 13W safety findings");

assert(doc.includes("Existing Ask Nexus low-risk preview controls"), "Phase 13W doc must distinguish existing non-executing preview controls from the controlled renderer");
assert(doc.includes("existing map section (`#map`)"), "Phase 13W doc must document existing map routing for Open my location");
assert(doc.includes("No browser geolocation permission prompt"), "Phase 13W doc must confirm map routing did not request location permission");

const mountMatches = [...index.matchAll(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/g)];
assert.equal((index.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "hidden renderer mount point must exist exactly once");
assert.equal(mountMatches.length, 1, "hidden renderer mount point must remain a single empty div");

const mount = mountMatches[0][0];
assertIncludes(mount, [
  `id="${mountId}"`,
  "hidden",
  "aria-hidden=\"true\"",
  "data-nexus-renderer-mode=\"hidden\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-navigation-allowed=\"false\""
], "hidden renderer mount point");

assert.equal(mount.replace(/<div\b[^>]*>/, "").replace(/<\/div>/, "").trim(), "", "hidden mount must remain default-empty");

for (const forbidden of [/<button/i, /<a\s/i, /href\s*=/i, /onclick/i, /addEventListener/i, /<form/i, /<input/i]) {
  assert(!forbidden.test(mount), `hidden mount must not contain ${forbidden}`);
}

function assertRuntimeUnwired(source, label) {
  for (const rendererName of rendererNames) {
    assert(!source.includes(rendererName), `${label} must not reference ${rendererName}`);
  }
  assert(!source.includes(scriptName), `${label} must not reference Phase 13W QA`);
  assert(!source.match(/import\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not dynamically import renderer files`);
  assert(!source.match(/require\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not require renderer files`);
  assert(!source.match(/fetch\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not fetch renderer files`);
}

assertRuntimeUnwired(app, "public/app.js");
assertRuntimeUnwired(index, "public/index.html");
assertRuntimeUnwired(server, "server.js");

assert(!index.match(/<script[^>]+nexus-controlled-low-risk-renderer/i), "public/index.html must not load controlled low-risk renderer scripts");
assert(!app.includes(flagName), "public/app.js must not consume the future renderer flag");
assert(!server.includes(flagName), "server.js must not expose the future renderer flag");
assert(!app.includes(mountId), "public/app.js must not query the hidden mount point");
assert(!server.includes(mountId), "server.js must not reference the hidden mount point");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-final-standard-user-browser-validation-default-off": "node scripts/${scriptName}"`), "package.json must expose Phase 13W QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13W QA guard");

console.log("Nexus controlled low-risk renderer final Standard User browser validation default-off QA passed.");
