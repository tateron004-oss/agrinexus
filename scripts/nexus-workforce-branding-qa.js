const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const nativeBridge = fs.readFileSync(path.join(root, "public", "native-bridge.json"), "utf8");

function includesAll(haystack, values, label) {
  values.forEach(value => assert(haystack.includes(value), `${label}: missing ${value}`));
}

includesAll(html, [
  "<title>Nexus Workforce AI</title>",
  '<meta name="application-name" content="Nexus Workforce AI">',
  '<meta name="apple-mobile-web-app-title" content="Nexus Workforce AI">',
  '<h1 id="loginTitle">Nexus Workforce AI</h1>',
  "<strong>Nexus Workforce AI</strong>",
  'id="workspaceAskBtn" class="primary" type="button">Ask Nexus</button>',
  '<h2 id="globalAssistantTitle">Ask Nexus</h2>',
  'id="jarvisToggle" class="jarvis-toggle primary" type="button" aria-expanded="false" aria-controls="jarvisPanel">Ask Nexus</button>',
  "Workforce AI platform for learning, job readiness, field support, health access, marketplace trade, maps, and guided Nexus assistance.",
  "marketplace trade",
  "AgriTrade"
], "Visible Nexus Workforce shell");

includesAll(app, [
  "const nexusProductIdentity = Object.freeze({",
  'productName: "Nexus Workforce AI"',
  'assistantName: "Nexus"',
  'edition: "workforce"',
  'legacyProductName: "AgriNexus"',
  '{ label: "Ask Nexus", detail: "Tell the assistant what you need in plain language.", command: "help me", primary: true }',
  "Open the unified profile with learning, work, care, agriculture, and activity evidence.",
  "Nexus can help with work, training, health access, maps, field support, and agriculture trade.",
  "Make Nexus Workforce AI easier to use",
  "Sell Crops",
  "Sell my crop",
  "Scan my field",
  "AgriTrade"
], "Standard User Nexus Workforce copy");

assert(!html.includes(">Ask AgriNexus</button>"), "Visible Ask button should use Ask Nexus");
assert(!html.includes("<h3 id=\"commandLaunchTitle\">Talk To AgriNexus</h3>"), "Conversation launch title should use Nexus");
assert(html.includes('"Hey AgriNexus" remains a supported legacy wake phrase.'), "Legacy wake phrase should be compatibility-framed");

includesAll(app, [
  'const assistantFullName = "AgriNexus";',
  'const AGRINEXUS_BUILD_VERSION = "nexus-behavior-296";',
  'const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v276";',
  'localStorage.getItem("agrinexusPersona")',
  'function installAgriNexusNativeBridge()',
  "window.AgriNexusNativeBridge"
], "Protected AgriNexus runtime compatibility identifiers");

includesAll(server, [
  'AGRINEXUS_PWA_CACHE_VERSION',
  'admin@agrinexus.org',
  'url.pathname === "/api/agent/command" && req.method === "POST"',
  'url.pathname === "/api/health/action" && req.method === "POST"',
  'url.pathname === "/api/video/session" && req.method === "POST"'
], "Protected backend contracts");

includesAll(nativeBridge, [
  '"name": "AgriNexus Native Voice Bridge"',
  '"full": "AgriNexus"',
  '"short": "Nexus"',
  '"/api/health/action"',
  '"call.launch"'
], "Protected native bridge contract");

console.log("Nexus Workforce branding QA passed");
