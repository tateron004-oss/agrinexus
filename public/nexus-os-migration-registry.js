(function initNexusOsMigrationRegistry(root, factory) {
  const registry = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = registry;
  }
  root.NexusOsMigrationRegistry = registry;
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusOsMigrationRegistryFactory() {
  "use strict";

  const STANDARD_USER_ROOT = "public/index.html#app";

  function surface(id, label, owner, status, notes) {
    return Object.freeze({ id, label, owner, status, notes });
  }

  function runtime(id, owner, entry, lifecycle, consolidationTarget) {
    return Object.freeze({ id, owner, entry, lifecycle, consolidationTarget });
  }

  function route(id, label, role, entry, protection) {
    return Object.freeze({ id, label, role, entry, protection });
  }

  const registry = Object.freeze({
    version: "nexus-os-genesis-rail-1",
    product: "Nexus OS 1.0 Genesis",
    standardUserRoot: STANDARD_USER_ROOT,
    frontend: Object.freeze({
      architecture: "static HTML plus public/app.js browser runtime",
      htmlEntry: "public/index.html",
      javascriptEntry: "public/app.js",
      serviceWorker: "public/sw.js",
      styles: ["public/index.html inline styles", "public/styles.css"],
      protectedStaticPages: ["public/status.html", "public/privacy.html", "public/terms.html"]
    }),
    backend: Object.freeze({
      architecture: "Node HTTP server in server.js with JSON persistence",
      entry: "server.js",
      providerModules: ["server/telehealth/provider.js", "server/telehealth/providers/daily.js", "server/telehealth/providers/zoom.js"],
      persistence: ["db.json", "provider-events.json"]
    }),
    uiSurfaces: Object.freeze([
      surface("standard-user-dashboard", "Current Standard User dashboard and command center", "public/app.js", "preserve_then_consolidate", "Primary migration source for the calm Nexus OS shell."),
      surface("ask-nexus-command-center", "Ask Nexus typed command surface", "public/app.js", "preserve", "Becomes the canonical typed fallback."),
      surface("voice-dock", "Voice and speech controls", "public/app.js + public/nexus-voice-demo-shell.js", "consolidate", "Rail 6 must converge all mic controls into one runtime."),
      surface("activation-center", "Activation Center and provider status surfaces", "public/app.js", "protect_from_standard_start", "Move technical/provider details behind protected views."),
      surface("workflow-windows", "Function windows and workflow landing panels", "public/app.js", "preserve_as_contextual", "Open only when Nexus starts a relevant mission."),
      surface("mode-launcher-grid", "Icon/mode launcher grid", "public/app.js", "retire_from_startup", "Keep as discoverable fallback, not the first screen.")
    ]),
    runtimes: Object.freeze([
      runtime("unified-brain", "Nexus Unified Brain", "public/nexus-unified-brain-runtime.js", "active", "Nexus OS mission planner"),
      runtime("open-dialogue", "Open dialogue runtime", "public/nexus-open-dialogue-runtime.js", "active", "Unified conversation surface"),
      runtime("universal-navigation", "Universal navigation runtime", "public/nexus-universal-navigation-runtime.js", "active", "Intent-driven workflow routing"),
      runtime("voice-demo-shell", "Voice demo shell", "public/nexus-voice-demo-shell.js", "active", "Canonical voice runtime"),
      runtime("persistent-memory", "Approved persistent memory", "public/nexus-persistent-memory.js", "active", "Approved memory and forgetting controls"),
      runtime("staged-actions", "Staged action contracts and renderer", "public/nexus-staged-action-state.js", "active", "Confirmation and execution verification")
    ]),
    roleRoutes: Object.freeze([
      route("standard-user", "Standard User", "standard_user", STANDARD_USER_ROOT, "public, redacted, no technical credentials"),
      route("provider", "Provider workspace", "provider", "server.js protected provider routes", "requires role/auth gate before operational data"),
      route("admin", "Administrator workspace", "administrator", "server.js admin/status routes", "requires role/auth gate before diagnostics and activation controls"),
      route("developer", "Developer diagnostics", "developer", "scripts and status endpoints", "not visible in Standard User startup")
    ]),
    workflowEntryPoints: Object.freeze([
      "health_chronic_care",
      "telehealth",
      "pharmacy",
      "mobile_clinic",
      "agriculture",
      "marketplace_trade",
      "logistics_maps",
      "learning_workforce",
      "drone_operations",
      "communications",
      "payments",
      "community_services"
    ]),
    consolidationRules: Object.freeze({
      assistantRoots: Object.freeze({
        canonical: "ask-nexus-command-center",
        allowedStartupRoots: 1,
        retireOrHide: ["duplicate assistant cards", "floating caption windows", "background mini-app dashboards"]
      }),
      microphoneControls: Object.freeze({
        canonical: "voice-dock",
        allowedStartupControls: 1,
        retireOrHide: ["mode-specific microphone buttons", "duplicate speech transcript controls"]
      }),
      standardUserTechnicalLeakage: Object.freeze({
        prohibitedAtStartup: ["raw environment variable names", "API keys", "provider adapter names", "internal JSON", "debug controls"],
        allowedBehindProtectedViews: ["provider status", "credential readiness", "audit logs", "queue diagnostics"]
      })
    }),
    migrationBoundary: Object.freeze({
      preserve: ["backend provider adapters", "QA scripts", "receipts", "confirmation gates", "memory deletion controls", "live knowledge safety"],
      consolidate: ["assistant mounts", "voice controls", "conversation panes", "workflow launchers"],
      retireFromStandardStartup: ["large dashboards", "technical readiness cards", "mode walls", "debug/provider details"],
      neverRemoveWithoutReplacement: ["safety gates", "role gates", "receipts", "audit records", "provider unavailable states"]
    })
  });

  function getNexusOsMigrationRegistry() {
    return registry;
  }

  function validateNexusOsArchitectureSnapshot(snapshot = {}) {
    const issues = [];
    const assistantRoots = Number(snapshot.assistantRoots || 0);
    const microphoneControls = Number(snapshot.microphoneControls || 0);
    const standardUserRoots = Number(snapshot.standardUserRoots || 0);
    const floatingControls = Number(snapshot.overlappingFloatingControls || 0);

    if (assistantRoots > registry.consolidationRules.assistantRoots.allowedStartupRoots) {
      issues.push("duplicate_assistant_roots");
    }
    if (microphoneControls > registry.consolidationRules.microphoneControls.allowedStartupControls) {
      issues.push("duplicate_microphone_controls");
    }
    if (standardUserRoots > 1) {
      issues.push("conflicting_standard_user_roots");
    }
    if (floatingControls > 1) {
      issues.push("overlapping_floating_controls");
    }

    return Object.freeze({
      ok: issues.length === 0,
      issues: Object.freeze(issues),
      registryVersion: registry.version
    });
  }

  return Object.freeze({
    registry,
    getNexusOsMigrationRegistry,
    validateNexusOsArchitectureSnapshot
  });
});
