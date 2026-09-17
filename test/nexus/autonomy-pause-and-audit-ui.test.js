"use strict";
const test = require("node:test"), assert = require("node:assert/strict");
const fs = require("node:fs"), path = require("node:path"), vm = require("node:vm");

// Phase 3 of the JARVIS-mode plan confirmed (by a full-codebase audit) that
// GET /api/nexus/runtime/audit/events and GET/POST
// /api/nexus/runtime/autonomy/pause were both real, working backend routes
// (nexus/compat/server-runtime-adapter.js) with no frontend surface calling
// them at all. These tests lock in the new public/app.js wiring that closes
// that gap: a real audit-trail list view and a real autonomy pause toggle.
function loadAutonomyUiModule({ requestImpl }) {
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const begin = app.indexOf("// Phase 3 of the JARVIS-mode plan:");
  const end = app.indexOf("\nfunction setLiveServiceCheckStatus(", begin);
  assert.ok(begin >= 0 && end > begin, "could not locate the Phase 3 audit/autonomy UI block in public/app.js");

  const elements = new Map();
  const fakeElement = () => ({ textContent: "", innerHTML: "", disabled: false, setAttribute() {}, removeAttribute() {} });
  ["#nexusRuntimeAuditPanel", "#nexusRuntimeAuditCount", "#nexusRuntimeAuditRefreshBtn",
    "#nexusAutonomyPausePanel", "#nexusAutonomyPauseState", "#nexusAutonomyPauseToggleBtn", "#nexusAutonomyPauseRefreshBtn"
  ].forEach(id => elements.set(id, fakeElement()));

  const toastCalls = [];
  const sandbox = {
    $: selector => elements.get(selector) || null,
    escapeHtml: value => String(value ?? ""),
    translateText: value => value,
    row: (label, value) => `${label}:${value}`,
    request: requestImpl,
    toast: message => toastCalls.push(message)
  };
  vm.createContext(sandbox);
  vm.runInContext(app.slice(begin, end), sandbox);
  return { sandbox, elements, toastCalls };
}

test("refreshing the audit trail calls the real runtime audit endpoint and renders real events", async () => {
  // Field names below (event_type, outcome, task_id, occurred_at) are the
  // real nexus_audit_events columns, confirmed directly against a live
  // production response -- there is no "component" column.
  const requestedPaths = [];
  const { sandbox, elements } = loadAutonomyUiModule({
    requestImpl: async urlPath => {
      requestedPaths.push(urlPath);
      return { events: [{ event_type: "task.created", outcome: "planned", task_id: "task_123", occurred_at: "2026-01-01T00:00:00.000Z" }] };
    }
  });
  await sandbox.loadNexusRuntimeAuditTrail();
  assert.match(requestedPaths[0], /^\/api\/nexus\/runtime\/audit\/events/);
  assert.match(elements.get("#nexusRuntimeAuditPanel").innerHTML, /task\.created/);
  assert.match(elements.get("#nexusRuntimeAuditPanel").innerHTML, /task_123/);
  assert.equal(elements.get("#nexusRuntimeAuditCount").textContent, "1 event(s)");
});

test("a failed audit-trail request shows an error instead of leaving the panel stuck loading", async () => {
  const { sandbox, elements } = loadAutonomyUiModule({
    requestImpl: async () => { throw new Error("Observability permission is required."); }
  });
  await sandbox.loadNexusRuntimeAuditTrail();
  assert.match(elements.get("#nexusRuntimeAuditPanel").innerHTML, /Observability permission is required/);
});

test("loading autonomy status renders the paused state and flips the toggle button label", async () => {
  // Field names below (paused, reason, changedBy, changedAt) are the real
  // AutonomyControlRepository.status() fields, confirmed directly against a
  // live production response.
  const { sandbox, elements } = loadAutonomyUiModule({
    requestImpl: async () => ({ paused: true, reason: "Testing", changedBy: "admin@example.com", changedAt: "2026-01-01T00:00:00.000Z" })
  });
  await sandbox.loadNexusAutonomyPauseStatus();
  assert.equal(elements.get("#nexusAutonomyPauseState").textContent, "paused");
  assert.equal(elements.get("#nexusAutonomyPauseToggleBtn").textContent, "Resume autonomy");
});

test("toggling autonomy pause posts the inverted state, not a hardcoded value, and reloads status", async () => {
  const posted = [];
  let currentPaused = false;
  const { sandbox, elements, toastCalls } = loadAutonomyUiModule({
    requestImpl: async (urlPath, options) => {
      if (options && options.method === "POST") {
        posted.push(options.body);
        currentPaused = options.body.paused;
        return { ok: true };
      }
      return { paused: currentPaused, reason: "", changedBy: "", changedAt: "" };
    }
  });
  await sandbox.loadNexusAutonomyPauseStatus();
  assert.equal(elements.get("#nexusAutonomyPauseState").textContent, "active");
  await sandbox.toggleNexusAutonomyPause();
  assert.equal(posted.length, 1);
  assert.equal(posted[0].paused, true, "toggling from active must request paused:true");
  assert.equal(elements.get("#nexusAutonomyPauseState").textContent, "paused", "status must reload after the toggle succeeds");
  assert.ok(toastCalls.some(message => /paused/i.test(message)));

  await sandbox.toggleNexusAutonomyPause();
  assert.equal(posted[1].paused, false, "toggling a second time from paused must request paused:false, not repeat true");
  assert.equal(elements.get("#nexusAutonomyPauseState").textContent, "active");
});
