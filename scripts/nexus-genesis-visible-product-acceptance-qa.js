"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");

const index = read("public/index.html");
const app = read("public/app.js");
const server = read("server.js");
const sw = read("public/sw.js");
const manifest = read("public/manifest.webmanifest");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const transitionEngine = read("public/nexus-conversation-workflow-transition-engine.js");
const registry = JSON.parse(read("docs/nexus-tool-registry.v1.json"));

const runtimeSurfaces = {
  "public/index.html": index,
  "public/app.js": app,
  "server.js": server,
  "public/manifest.webmanifest": manifest
};

function includes(source, expected, label) {
  assert(source.includes(expected), `${label} must include ${expected}`);
}

function excludes(source, forbidden, label) {
  assert(!source.includes(forbidden), `${label} must not include ${forbidden}`);
}

for (const [label, source] of Object.entries(runtimeSurfaces)) {
  excludes(source, "Nexus Workforce AI", label);
  excludes(source, "Workforce AI platform", label);
  excludes(source, "Press Enter or Space to activate Nexus", label);
  excludes(source, "Nexus is blocked from executing externally", label);
}

includes(index, "<title>Nexus Genesis | AgriNexus</title>", "index title");
includes(index, '<meta name="application-name" content="Nexus Genesis | AgriNexus">', "application name meta");
includes(index, '<meta name="apple-mobile-web-app-title" content="Nexus Genesis | AgriNexus">', "apple app title meta");
includes(index, '<h1 id="loginTitle">Nexus Genesis | AgriNexus</h1>', "login title");
includes(index, "<strong>Nexus Genesis | AgriNexus</strong>", "visible topbar identity");
includes(index, "Nexus Genesis access platform for agriculture, health, learning, workforce, marketplace, maps, provider readiness, and guided Nexus assistance.", "visible hero description");

const parsedManifest = JSON.parse(manifest);
assert.strictEqual(parsedManifest.name, "Nexus Genesis | AgriNexus", "manifest name must use current product identity");
assert.strictEqual(parsedManifest.short_name, "Nexus", "manifest short name must stay compact");
includes(parsedManifest.description, "Nexus Genesis access platform", "manifest description");

includes(app, 'productName: "Nexus Genesis | AgriNexus"', "app product identity");
includes(app, 'edition: "genesis"', "app edition");
includes(app, 'legacyProductName: "AgriNexus"', "app legacy compatibility identity");
includes(server, 'productName: "Nexus Genesis | AgriNexus"', "server product identity");
includes(server, 'edition: "genesis"', "server edition");
assert.strictEqual(registry.productName, "Nexus Genesis | AgriNexus", "tool registry product identity");
assert.strictEqual(registry.edition, "genesis", "tool registry edition");

includes(index, "/manifest.webmanifest?v=nexus-behavior-484", "manifest cache marker");
includes(index, "/styles.css?v=nexus-behavior-484", "stylesheet cache marker");
includes(index, "/app.js?v=nexus-behavior-484", "app cache marker");
includes(app, 'AGRINEXUS_BUILD_VERSION = "nexus-behavior-484"', "app build marker");
includes(app, 'AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v429"', "app PWA cache marker");
includes(server, 'AGRINEXUS_WEB_BUILD_VERSION = "nexus-behavior-484"', "server build marker");
includes(server, 'AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v429"', "server PWA cache marker");
includes(sw, 'CACHE_NAME = "agrinexus-pwa-v429"', "service worker cache marker");
includes(sw, 'BUILD_VERSION = "nexus-behavior-484"', "service worker build marker");
includes(server, 'if (!user && url.pathname !== "/api/config" && !boundedGenesisVoiceGuestRoutes.has(url.pathname))', "public redacted config route and bounded voice routes must not trigger guest console 401");

excludes(index, "data-nexus-genesis-orb-entry", "index orb entry");
excludes(app, "data-nexus-genesis-orb-entry", "app orb entry");
excludes(index, 'role="button" class="genesis-orb', "index orb button role");
excludes(index, 'tabindex="0" class="genesis-orb', "index orb focusability");
excludes(app, "orbEntry", "app legacy orb entry handler");

includes(index, "/nexus-conversation-workflow-transition-engine.js", "conversation workflow engine script");
includes(app, "Trust rails", "Standard User trust rail surface");
includes(app, "Workflows are offered, not forced", "progressive disclosure copy");
includes(transitionEngine, "health.patient-risk-checklist", "health transition workflow");
includes(transitionEngine, "agriculture.field-inspection-checklist", "agriculture transition workflow");
includes(transitionEngine, "sourceContinuity", "source continuity receipt");
includes(transitionEngine, "government", "government-source filter support");
includes(transitionEngine, "fakeCitationsAllowed: false", "fake citation guard");
includes(transitionEngine, "executionAuthorized: false", "no execution authorization");
includes(transitionEngine, "providerHandoffAuthorized: false", "no provider handoff authorization");

const acceptanceAlias = "qa:nexus-genesis-visible-product-acceptance";
assert.strictEqual(
  packageJson.scripts[acceptanceAlias],
  "node scripts/nexus-genesis-visible-product-acceptance-qa.js",
  "package alias must run visible product acceptance QA"
);
includes(qaSuite, "scripts/nexus-genesis-visible-product-acceptance-qa.js", "qa-suite wiring");

console.log("Nexus Genesis visible product acceptance QA passed.");
