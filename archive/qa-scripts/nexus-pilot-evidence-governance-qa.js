const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const source = fs.readFileSync("public/browser-action-controller.js", "utf8");
const created = [];
function element(tagName) {
  return {
    tagName, dataset: {}, style: {}, children: [],
    appendChild(child) { this.children.push(child); return child; },
    addEventListener(name, callback) { this.listeners = { ...(this.listeners || {}), [name]: callback }; },
    querySelector() { return { focus() {} }; },
    setAttribute() {}, remove() {}, click() {}
  };
}
const document = {
  body: { appendChild(node) { created.push(node); return node; } },
  head: { appendChild(node) { created.push(node); return node; } },
  documentElement: { lang: "en" },
  createElement: element,
  getElementById() { return null; },
  querySelector() { return null; },
  addEventListener() {}
};
const storage = new Map();
const window = {
  document,
  localStorage: {
    getItem(key) { return storage.get(key) || null; },
    setItem(key, value) { storage.set(key, value); }
  },
  navigator: {},
  CustomEvent: function CustomEvent(name, options) { this.type = name; this.detail = options?.detail; },
  dispatchEvent() {},
  addEventListener(name, callback) { this.listeners = { ...(this.listeners || {}), [name]: callback }; },
  setTimeout, URL, Blob
};
window.window = window;
vm.runInNewContext(source, { window, document, URL, Blob, Date, Map, Math, Set, setTimeout, console });

const controller = window.NexusBrowserActionController;
assert.equal(controller.isPilotEvidenceRequest("Nexus, open the pilot evidence dashboard."), true);
assert.equal(controller.isPilotEvidenceRequest("Tell me about a pilot."), false);

const blocked = controller.recordPilotEvidence({ topic: "health", outcome: "completed", pathway: "voice", transcript: "private health conversation", name: "Private Person" });
assert.equal(blocked.recorded, false);
assert.equal(blocked.reason, "consent-required");

const consent = controller.setPilotEvidenceConsent(true);
assert.equal(consent.granted, true);
assert.equal(consent.researchReuseAllowed, false);

const recorded = controller.recordPilotEvidence({
  topic: "health", outcome: "completed", pathway: "voice", recovery: "none",
  durationBand: "2-5-min", language: "sw", county: "Nyeri", feedback: "helpful",
  transcript: "I have a headache and take medicine", symptoms: "headache",
  bloodPressure: "160/100", name: "Private Person", phone: "555-555-5555"
});
assert.equal(recorded.recorded, true);
const serialized = storage.get("nexus.pilot-evidence.v1");
assert.doesNotMatch(serialized, /headache|medicine|160\/100|Private Person|555/);
assert.match(serialized, /"topic":"health"/);
assert.match(serialized, /"county":"Nyeri"/);

const summary = controller.getPilotEvidenceSummary();
assert.equal(summary.total, 1);
assert.equal(summary.completionRate, 100);
assert.equal(summary.metadataRate, 100);
assert.equal(summary.helpfulRate, 100);

window.listeners["genesis.workspace.acknowledged"]({
  detail: { workspace: "maps", opened: false, visible: false, payload: { transcript: "private route request" } }
});
const workspaceRecords = JSON.parse(storage.get("nexus.pilot-evidence.v1"));
assert.equal(workspaceRecords.length, 2);
assert.equal(workspaceRecords[1].topic, "maps");
assert.equal(workspaceRecords[1].outcome, "failed");
assert.equal(workspaceRecords[1].majorFailure, true);
assert.doesNotMatch(JSON.stringify(workspaceRecords[1]), /private route request/);

const report = controller.getPilotReportText();
assert.match(report, /Minimum de-identified metadata only/);
assert.match(report, /Research reuse requires separate explicit approval/);
assert.match(report, /qualified healthcare professionals make clinical decisions/i);
assert.match(report, /Scale-up scenarios/);
assert.match(report, /Kenyan legal review/);

const opened = controller.handleFinalUserTranscript({
  transcript: "Nexus, show the pilot evidence dashboard.",
  transcriptId: "pilot-dashboard-1", sessionId: "session-1", role: "user", isFinal: true
}, () => null);
assert.equal(opened.handled, true);
assert.equal(opened.pilotDashboardOpened, true);
assert.match(created.at(-1).innerHTML, /Pilot Evidence &amp; Governance/);
assert.match(created.at(-1).innerHTML, /No transcripts or conversation text/);
assert.match(created.at(-1).innerHTML, /80–90% completion/);
assert.match(created.at(-1).innerHTML, /70% metadata completeness/);

controller.setPilotEvidenceConsent(false);
const afterWithdrawal = controller.recordPilotEvidence({ topic: "maps", outcome: "completed", pathway: "voice" });
assert.equal(afterWithdrawal.recorded, false);
assert.equal(controller.getPilotEvidenceSummary().total, 2);

console.log("Nexus pilot evidence and governance QA passed.");
