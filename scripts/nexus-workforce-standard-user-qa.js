const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const nativeBridge = fs.readFileSync(path.join(root, "public", "native-bridge.json"), "utf8");

function mustInclude(haystack, values, label) {
  values.forEach(value => assert(haystack.includes(value), `${label}: missing ${value}`));
}

function assertOrder(haystack, values, label) {
  let previous = -1;
  values.forEach(value => {
    const index = haystack.indexOf(value);
    assert(index > -1, `${label}: missing ${value}`);
    assert(index > previous, `${label}: ${value} is out of order`);
    previous = index;
  });
}

mustInclude(html, [
  'data-persona="worker" class="active">Worker</button>',
  'data-persona="learner">Learner</button>',
  'data-persona="health">Health worker</button>',
  'data-persona="farmer">Farmer / AgriTrade</button>',
  '<button data-section="trade" class="nav">Agritrade</button>',
  '<button type="button" data-mobile-section="trade">Trade</button>'
], "Standard User visible persona and module controls");

assertOrder(html, [
  'data-persona="worker" class="active">Worker</button>',
  'data-persona="learner">Learner</button>',
  'data-persona="health">Health worker</button>',
  'data-persona="farmer">Farmer / AgriTrade</button>'
], "Standard User persona order");

mustInclude(app, [
  'let selectedPersona = localStorage.getItem("agrinexusPersona") || "worker";',
  '{ label: "Explore job pathways", detail: "Find matched roles and see the next application step.", command: "show me jobs", primary: true }',
  '{ label: "Build job readiness", detail: "Review workforce gaps, training needs, and role matching.", command: "review readiness gaps" }',
  '{ label: "Apply for work", detail: "Apply for the best matched role and record the next step.", command: "apply for that job" }',
  '{ label: "Plan shift or mentor", detail: "Schedule a shift or assign mentor support after workforce readiness.", command: "schedule my shift" }'
], "Worker-first action grid");

assertOrder(app, [
  'label: "Start Training"',
  'label: "Explore Job Pathways"',
  'label: "Get Field Support"',
  'label: "Open Health Access"',
  'label: "Use Maps & Location"',
  'label: "Open Marketplace / AgriTrade"',
  'label: "Ask Nexus for Help"'
], "Standard User service button order");

mustInclude(app, [
  'label: "Start Training"',
  'Begin courses, lessons, captions, and certificates.',
  'label: "Explore Job Pathways"',
  'Find jobs, apply, review readiness, and plan shifts.',
  'label: "Get Field Support"',
  'Open farm, crop, route, and field evidence support.',
  'label: "Open Health Access"',
  'Start intake, provider handoff, or local camera support.',
  'label: "Use Maps & Location"',
  'Check routes, facilities, regions, and location support.',
  'label: "Open Marketplace / AgriTrade"',
  'Contact buyers, create crop orders, and track trade routes.',
  'label: "Ask Nexus for Help"',
  'Sell my crop',
  'Scan my field',
  'Run farmer pilot',
  'Contact Buyer',
  'Create Order',
  'Ship Crop',
  'Scan Farm'
], "Standard User domain coverage and retained agriculture paths");

mustInclude(app, [
  'const assistantFullName = "AgriNexus";',
  'const AGRINEXUS_BUILD_VERSION = "nexus-behavior-296";',
  'const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v276";',
  'localStorage.getItem("agrinexusPersona")',
  'data-simple-command="${escapeHtml(action.command)}"',
  'data-simple-section="${item.section}"',
  'farmer: [',
  'simpleUserSections'
], "Protected frontend identifiers and workflow wiring");

mustInclude(server, [
  'AGRINEXUS_PWA_CACHE_VERSION',
  'url.pathname === "/api/agent/command" && req.method === "POST"',
  'url.pathname === "/api/health/action" && req.method === "POST"',
  'url.pathname === "/api/video/session" && req.method === "POST"'
], "Protected backend contracts");

mustInclude(nativeBridge, [
  '"name": "AgriNexus Native Voice Bridge"',
  '"full": "AgriNexus"',
  '"/api/health/action"',
  '"call.launch"'
], "Protected native bridge contract");

console.log("Nexus Workforce standard user QA passed");
