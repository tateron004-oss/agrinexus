"use strict";

const nodeTest = (file, testName, expected) => Object.freeze({ kind: "node-test", file, testName, expected });
const external = (evidenceKey, expected) => Object.freeze({ kind: "external-proof", evidenceKey, expected });

const FAULT_VERIFIERS = Object.freeze({
  "single-command-owner": nodeTest("test/nexus/server-runtime-adapter.test.js", "behavior turn enters one authoritative spine without a caller-selected workspace", "one server-owned behavior turn selects the authoritative application"),
  "no-browser-reparse": nodeTest("test/nexus/behavior-spine-browser-entry.test.js", "the live voice and typed entrypoint cannot enter the legacy command core", "voice and typed ingress cannot enter legacy command parsing"),
  "immutable-command-envelope": nodeTest("test/nexus/kernel-contracts.test.js", "all channels normalize into one immutable command envelope", "every channel produces a frozen command envelope"),
  "passive-workspaces": nodeTest("test/nexus/behavior-spine-browser-entry.test.js", "browser gateway sends requests to the authoritative behavior turn and fails closed", "the browser forwards commands and fails closed without server authority"),
  "render-before-completion": nodeTest("test/nexus/authoritative-engine.test.js", "canonical engine waits for the browser before completing a cross-application workflow", "task completion waits for renderer acknowledgement"),
  "stale-transition-isolation": external("stale-transition-production-injection", "a stale transition is rejected without changing the current task"),
  "provider-execution": external("provider-failure-production-injection", "a real provider failure returns a typed failure without simulated success"),
  "database-diagnosis": external("database-failure-production-injection", "a database failure is classified safely without leaking credentials"),
  "identity-binding": nodeTest("test/nexus/production-identity-probe.test.js", "acceptance identity probe proves same-tenant access and cross-tenant denial", "same-tenant access succeeds and cross-tenant access is denied"),
  "precise-errors": nodeTest("test/nexus/production-evidence-probes.test.js", "browser capability failure preserves application, category, and safe server message", "browser failure evidence preserves typed application and safe error details"),
  "authoritative-persistence": external("production-restart-persistence", "authoritative records survive process restart and same-user reload"),
  "legacy-path-disconnected": nodeTest("test/nexus/behavior-spine-browser-entry.test.js", "the live voice and typed entrypoint cannot enter the legacy command core", "legacy command execution is unreachable from supported ingress"),
  "observable-success": nodeTest("test/nexus/behavior-spine-browser-entry.test.js", "authoritative browser completion requires typed rendering and server acknowledgement", "completion requires visible typed rendering and server acknowledgement"),
  "production-equivalent-integration": external("production-equivalent-black-box", "the exact candidate boots with PostgreSQL and provider contracts as a black box"),
  "prepublication-gauntlet": external("prepublication-gauntlet-run", "all required prepublication suites pass on the exact candidate SHA"),
  "voice-typed-equivalence": nodeTest("test/nexus/server-runtime-adapter.test.js", "realtime voice probe requires configured Realtime and identical governed typed and voice plans", "voice and typed requests produce identical governed plans"),
  "transaction-observability": nodeTest("test/nexus/authoritative-engine.test.js", "canonical engine self-corrects through an explicit governed fallback with separate receipts", "primary and fallback execution produce separate attributed receipts"),
  "single-authorization-scope": nodeTest("test/nexus/server-runtime-adapter.test.js", "request context preserves tenant, identity, role, and permission boundaries", "one request context preserves tenant and permission boundaries"),
  "tooling-continuity": nodeTest("test/nexus/authoritative-engine.test.js", "failed provider work resumes with a bounded new idempotency identity and no page refresh", "provider work resumes with bounded idempotent retry"),
  "exact-release-identity": nodeTest("test/nexus/production-evidence-probes.test.js", "live probe receipts remain exact-release and fail on stale identities", "stale release evidence is rejected"),
  "runtime-not-source-evidence": external("exact-production-runtime-observation", "the claim is observed on the running exact production SHA"),
  "capability-inventory": nodeTest("test/nexus/render-release-controller.test.js", "release controller defines signed production tool coverage for every workspace", "every workspace has a signed canonical production executor"),
  "exclusive-unified-ownership": nodeTest("test/nexus/system-convergence.test.js", "production exposes one authoritative durable runtime for all 17 workspaces", "all supported workspaces share one authoritative durable runtime"),
  "shared-contract-repair": nodeTest("test/nexus/authoritative-engine.test.js", "canonical engine self-corrects through an explicit governed fallback with separate receipts", "contract repair uses an explicit governed fallback and attributed receipts"),
  "evidence-calibrated-reporting": nodeTest("test/nexus/production-evidence-producer.test.js", "compiler rejects source-only, simulated, stale, and incomplete claims", "evidence compiler rejects claims beyond observed production proof"),
  "outcome-first-reporting": nodeTest("test/nexus/behavior-spine-browser-entry.test.js", "authoritative browser completion requires typed rendering and server acknowledgement", "completion reporting follows a verified visible outcome"),
  "dependency-failure-isolation": external("dependency-failure-production-injection", "one failed dependency does not collapse unrelated capabilities"),
  "capability-verification": external("visible-production-capability-matrix", "every supported capability produces its required visible exact-SHA outcome"),
  "authoritative-readiness": nodeTest("test/nexus/production-release-readiness.test.js", "release readiness rejects an open fault or an unproved capability", "readiness fails closed for any open fault or unproved capability"),
  "developer-owned-acceptance": external("developer-owned-production-acceptance", "the automated release pipeline executes and records the complete acceptance run")
});

module.exports = Object.freeze({ FAULT_VERIFIERS });
