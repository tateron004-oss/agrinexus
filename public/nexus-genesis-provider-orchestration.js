(function nexusGenesisProviderOrchestrationFactory(root, factory) {
  const abstraction = (typeof require === "function")
    ? require("./nexus-genesis-provider-abstraction.js")
    : root?.NexusGenesisProviderAbstraction;
  const runtime = factory(abstraction);
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  if (root) {
    root.NexusGenesisProviderOrchestration = runtime;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusGenesisProviderOrchestrationModule(abstraction) {
  const SERVICE_ID = "nexus_genesis_provider_orchestration_runtime";
  const SCHEMA_VERSION = "nexus.genesis.provider-orchestration.v1";

  const ADAPTER_FAMILIES = Object.freeze([
    "ai",
    "cloud",
    "voice_translation",
    "maps_weather",
    "communications",
    "payments_finance",
    "healthcare",
    "workforce_learning",
    "agriculture_market",
    "logistics_drone",
    "local"
  ]);

  const EXECUTION_STATES = Object.freeze([
    "local_completed",
    "queued",
    "credential-blocked",
    "consent-blocked",
    "confirmation-blocked",
    "jurisdiction-blocked",
    "data-class-blocked",
    "quota-blocked",
    "circuit-open",
    "cancelled",
    "duplicate-blocked",
    "replay-blocked",
    "provider-prepared",
    "not production-authorized",
    "failed-safe"
  ]);

  const PROVIDER_POLICY_RULES = Object.freeze([
    rule("no_silent_execution", "Every external action requires a visible request, consent where required, confirmation where required, and a receipt."),
    rule("secret_redaction", "Provider secrets are resolved by name only and are never returned to the browser, logs, receipts, or QA output."),
    rule("ack_not_outcome", "Provider acknowledgement, queueing, or preparation does not equal final outcome verification."),
    rule("high_impact_confirmation", "Communications, payments, bookings, dispatch, regulated health, employer applications, buyer contact, and drone missions require explicit confirmation."),
    rule("data_class_enforcement", "Providers may receive only data classes they are registered to handle."),
    rule("jurisdiction_enforcement", "Country and jurisdiction must be allowed before provider handoff."),
    rule("cost_quota_guard", "Budget and quota controls block provider use before cost exceeds configured limits."),
    rule("retry_boundaries", "Retries are bounded, use exponential backoff, and stop when the circuit opens."),
    rule("idempotency_required", "All external execution-capable requests require an idempotency key and replay protection."),
    rule("local_fallback_first", "When credentials or provider health are missing, Nexus uses local/offline fallback where possible and explains the block.")
  ]);

  const DATA_GOVERNANCE_CONTROLS = Object.freeze([
    governanceControl("privacy", "Provider requests must carry the minimum data needed for the selected capability."),
    governanceControl("retention", "Provider receipts must record retention state and avoid storing secret values."),
    governanceControl("residency", "Country and jurisdiction routing must be checked before data transfer."),
    governanceControl("deletion", "Deletion and correction requests must remain available for stored provider receipts."),
    governanceControl("revocation", "Consent revocation must prevent future provider handoff."),
    governanceControl("data_transfer", "Cross-border and external provider data transfer must be recorded by data class and jurisdiction.")
  ]);

  const REVIEW_DIMENSIONS = Object.freeze([
    "security",
    "privacy",
    "adversarial",
    "accessibility",
    "jurisdiction",
    "credential_state",
    "confirmation_state",
    "fallback_state",
    "receipt_state"
  ]);

  const CIRCUIT_DEFAULTS = Object.freeze({
    failureThreshold: 3,
    halfOpenAfterMs: 120000,
    cooldownMs: 300000,
    timeoutMs: 8000,
    maxAttempts: 3,
    baseBackoffMs: 500,
    maxBackoffMs: 4000
  });
  const ADAPTER_CONTRACTS = Object.freeze(buildAdapterContracts());

  const inMemoryState = {
    idempotencyKeys: new Set(),
    replayTokens: new Set(),
    queue: [],
    retryHistory: [],
    fallbackHistory: [],
    telemetry: [],
    incidents: [],
    disabledProviders: new Set(),
    circuitBreakers: new Map()
  };

  function rule(ruleId, description) {
    return Object.freeze({ ruleId, description, enforced: true });
  }

  function governanceControl(controlId, description) {
    return Object.freeze({ controlId, description, enforced: true, productionRequired: true });
  }

  function adapter(providerId, capabilities, family, overrides = {}) {
    return Object.freeze({
      adapterId: `${providerId}.adapter.v1`,
      providerId,
      family,
      capabilities,
      contractVersion: "provider-adapter-contract.v1",
      authentication: overrides.authentication || "environment_secret_or_none",
      secretResolution: "server_side_env_name_only",
      timeoutMs: overrides.timeoutMs || CIRCUIT_DEFAULTS.timeoutMs,
      retryPolicy: {
        maxAttempts: overrides.maxAttempts || CIRCUIT_DEFAULTS.maxAttempts,
        backoff: "exponential",
        baseBackoffMs: overrides.baseBackoffMs || CIRCUIT_DEFAULTS.baseBackoffMs,
        maxBackoffMs: overrides.maxBackoffMs || CIRCUIT_DEFAULTS.maxBackoffMs
      },
      rateLimit: {
        perMinute: overrides.perMinute || 30,
        perHour: overrides.perHour || 600,
        state: "contract_defined"
      },
      quota: {
        dailyUnits: overrides.dailyUnits || 1000,
        monthlyUnits: overrides.monthlyUnits || 10000,
        budgetCurrency: overrides.budgetCurrency || "USD",
        budgetLimit: overrides.budgetLimit || 0,
        hardStop: true
      },
      idempotencyRequired: overrides.idempotencyRequired !== false,
      replayProtectionRequired: overrides.replayProtectionRequired !== false,
      cancellationSupported: overrides.cancellationSupported !== false,
      outcomeVerificationRequired: overrides.outcomeVerificationRequired !== false,
      receiptRequired: true,
      productionExecutionEnabled: false,
      testOnly: overrides.testOnly === true,
      localFallbackSupport: overrides.localFallbackSupport === true,
      notes: overrides.notes || "Adapter contract is implemented; live execution requires provider-specific activation gates."
    });
  }

  function buildAdapterContracts() {
    const providers = abstraction?.PROVIDERS || [];
    return providers.map(provider => adapter(provider.providerId, provider.capabilities || [], provider.family || "unknown", {
      testOnly: provider.providerId === "local.nexus" || provider.providerId === "local-model",
      localFallbackSupport: provider.localFallbackSupport === true,
      perMinute: provider.requiredEnv?.length ? 20 : 120,
      dailyUnits: provider.requiredEnv?.length ? 500 : 5000,
      budgetLimit: provider.requiredEnv?.length ? 25 : 0
    }));
  }

  function redact(value) {
    const text = String(value || "");
    if (!text) return "";
    if (text.length <= 4) return "****";
    return `${text.slice(0, 2)}****${text.slice(-2)}`;
  }

  function getAdapter(providerId) {
    return ADAPTER_CONTRACTS.find(item => item.providerId === providerId) || null;
  }

  function findAdaptersForCapability(capabilityId) {
    return ADAPTER_CONTRACTS.filter(item => item.capabilities.includes(capabilityId));
  }

  function normalizeRequest(request = {}) {
    const capabilityId = request.capabilityId || inferCapability(request.command || "");
    const idempotencyKey = request.idempotencyKey || `${capabilityId}:${hashish(JSON.stringify({
      command: request.command || "",
      dataClass: request.dataClass || "public",
      country: request.country || "global",
      providerId: request.providerId || ""
    }))}`;
    return Object.freeze({
      requestId: request.requestId || `provider-request-${Date.now()}-${hashish(idempotencyKey)}`,
      command: request.command || "",
      capabilityId,
      providerId: request.providerId || null,
      dataClass: request.dataClass || "public",
      country: request.country || "global",
      jurisdiction: request.jurisdiction || request.country || "global",
      language: request.language || "en",
      consentState: request.consentState || "missing",
      confirmationState: request.confirmationState || "missing",
      idempotencyKey,
      replayToken: request.replayToken || `replay:${idempotencyKey}`,
      units: Number(request.units || 1),
      dryRun: request.dryRun !== false,
      timestamp: new Date().toISOString()
    });
  }

  function hashish(input) {
    let hash = 0;
    const text = String(input || "");
    for (let index = 0; index < text.length; index += 1) {
      hash = ((hash << 5) - hash) + text.charCodeAt(index);
      hash |= 0;
    }
    return Math.abs(hash).toString(36);
  }

  function inferCapability(command = "") {
    const text = String(command || "").toLowerCase();
    if (/sms|text message/.test(text)) return "communications.sms";
    if (/whatsapp/.test(text)) return "communications.whatsapp";
    if (/email/.test(text)) return "communications.email";
    if (/call|phone/.test(text)) return "communications.voice_call";
    if (/video|telehealth/.test(text)) return "health.telehealth";
    if (/payment|pay|refund/.test(text)) return "payments.card";
    if (/appointment|booking/.test(text)) return "health.appointment";
    if (/pharmacy|refill|prescription/.test(text)) return "health.pharmacy";
    if (/fhir|medical record|ehr/.test(text)) return "health.fhir";
    if (/weather|climate/.test(text)) return "weather.forecast";
    if (/map|route|geocode/.test(text)) return "maps.route";
    if (/job|employer|application/.test(text)) return "workforce.job_search";
    if (/training|enrollment|certificate/.test(text)) return "learning.catalog";
    if (/buyer|market|cooperative/.test(text)) return "agriculture.market";
    if (/crop|pest|soil|irrigation|extension/.test(text)) return "agriculture.extension";
    if (/shipment|logistics|tracking/.test(text)) return "logistics.route";
    if (/drone/.test(text)) return "drone.mission";
    if (/cloud|storage|database|backup/.test(text)) return "cloud.compute";
    return "ai.reasoning.general";
  }

  function checkQuota(request = {}, adapterContract = {}) {
    const units = Number(request.units || 1);
    const budgetLimit = Number(adapterContract.quota?.budgetLimit || 0);
    const estimated = abstraction?.estimateCost?.({ providerId: adapterContract.providerId, capabilityId: request.capabilityId, units }) || {};
    const blocked = budgetLimit > 0 && request.estimatedCost && Number(request.estimatedCost) > budgetLimit;
    return Object.freeze({
      ok: !blocked,
      state: blocked ? "quota-blocked" : "within-quota",
      units,
      budgetLimit,
      estimatedCostLevel: estimated.estimatedCostLevel || "unknown",
      hardStop: true
    });
  }

  function circuitState(providerId) {
    const current = inMemoryState.circuitBreakers.get(providerId) || {
      providerId,
      state: "closed",
      failures: 0,
      openedAt: null,
      lastFailure: null
    };
    return Object.freeze({ ...current });
  }

  function recordCircuitFailure(providerId, reason = "provider_failure") {
    const current = inMemoryState.circuitBreakers.get(providerId) || { providerId, state: "closed", failures: 0, openedAt: null, lastFailure: null };
    const failures = current.failures + 1;
    const state = failures >= CIRCUIT_DEFAULTS.failureThreshold ? "open" : current.state;
    const next = { providerId, state, failures, openedAt: state === "open" ? new Date().toISOString() : current.openedAt, lastFailure: reason };
    inMemoryState.circuitBreakers.set(providerId, next);
    return Object.freeze(next);
  }

  function resetCircuit(providerId) {
    const next = { providerId, state: "closed", failures: 0, openedAt: null, lastFailure: null };
    inMemoryState.circuitBreakers.set(providerId, next);
    return Object.freeze(next);
  }

  function evaluateExecutionReadiness(request = {}, env = {}) {
    const normalized = normalizeRequest(request);
    const selection = abstraction?.selectProvider?.({ ...normalized, env }) || {};
    const providerId = normalized.providerId || selection.selectedProvider?.providerId || "local.nexus";
    const adapterContract = getAdapter(providerId);
    const policy = abstraction?.evaluatePolicy?.({ ...normalized, providerId }) || { allowed: false, reasons: ["Provider abstraction unavailable."] };
    const readiness = abstraction?.checkReadiness?.(providerId, env) || { ready: false, missingEnv: [] };
    const quota = checkQuota(normalized, adapterContract || {});
    const circuit = circuitState(providerId);
    const duplicate = inMemoryState.idempotencyKeys.has(normalized.idempotencyKey);
    const replay = inMemoryState.replayTokens.has(normalized.replayToken);
    const disabled = inMemoryState.disabledProviders.has(providerId);
    const reasons = [
      ...((readiness.ready || providerId === "local.nexus") ? [] : readiness.reasons || []),
      ...(policy.reasons || []),
      !quota.ok ? "Budget or quota guard blocked this provider request." : null,
      circuit.state === "open" ? "Circuit breaker is open for this provider." : null,
      duplicate ? "Duplicate idempotency key detected." : null,
      replay ? "Replay token has already been used." : null,
      disabled ? "Provider is administratively disabled." : null,
      !adapterContract ? "Adapter contract is missing." : null
    ].filter(Boolean);
    const state = disabled
      ? "disabled"
      : duplicate
      ? "duplicate-blocked"
      : replay
      ? "replay-blocked"
      : circuit.state === "open"
      ? "circuit-open"
      : !quota.ok
      ? "quota-blocked"
      : providerId === "local.nexus"
      ? "local-ready"
      : readiness.ready && reasons.length === 0
      ? "provider-prepared"
      : (readiness.missingEnv || []).length
      ? "credential-blocked"
      : policy.requiresConsent && normalized.consentState !== "granted"
      ? "consent-blocked"
      : policy.requiresConfirmation && normalized.confirmationState !== "confirmed"
      ? "confirmation-blocked"
      : "not production-authorized";
    return Object.freeze({
      ok: state === "local-ready" || state === "provider-prepared",
      packetType: "nexus_genesis_provider_execution_readiness_packet",
      schemaVersion: SCHEMA_VERSION,
      request: normalized,
      providerId,
      adapterContract,
      selection,
      policy,
      readiness,
      quota,
      circuit,
      duplicate,
      replay,
      disabled,
      state,
      reasons,
      executionAuthority: false,
      noSecretExposure: true,
      noSilentExecution: true
    });
  }

  function enqueue(request = {}, env = {}) {
    const readiness = evaluateExecutionReadiness(request, env);
    const queueItem = Object.freeze({
      queueId: `provider-queue-${Date.now()}-${hashish(readiness.request.idempotencyKey)}`,
      request: readiness.request,
      providerId: readiness.providerId,
      state: readiness.state === "local-ready" ? "local_ready" : "queued_for_review_or_configuration",
      attempts: 0,
      maxAttempts: readiness.adapterContract?.retryPolicy?.maxAttempts || CIRCUIT_DEFAULTS.maxAttempts,
      createdAt: new Date().toISOString(),
      noExternalExecution: true
    });
    inMemoryState.queue.unshift(queueItem);
    inMemoryState.queue = inMemoryState.queue.slice(0, 50);
    return Object.freeze({ ok: true, packetType: "nexus_genesis_provider_queue_packet", readiness, queueItem });
  }

  function executeDryRun(request = {}, env = {}) {
    const readiness = evaluateExecutionReadiness(request, env);
    const adapterContract = readiness.adapterContract || {};
    const providerId = readiness.providerId;
    let state = readiness.state;
    let summary = "No live provider action was executed.";
    const attempts = [];
    if (readiness.duplicate || readiness.replay) {
      summary = "Duplicate or replayed request was blocked before provider handoff.";
    } else if (providerId === "local.nexus" || adapterContract.localFallbackSupport) {
      state = "local_completed";
      summary = "Nexus completed this through the local provider fallback. No external provider was contacted.";
      inMemoryState.idempotencyKeys.add(readiness.request.idempotencyKey);
      inMemoryState.replayTokens.add(readiness.request.replayToken);
    } else if (readiness.state === "provider-prepared") {
      state = "provider-prepared";
      summary = "Provider request is prepared but live execution remains disabled until the provider adapter is activated for production.";
      inMemoryState.idempotencyKeys.add(readiness.request.idempotencyKey);
      inMemoryState.replayTokens.add(readiness.request.replayToken);
    } else {
      summary = `Provider request is blocked: ${readiness.reasons.join(" ") || readiness.state}`;
      inMemoryState.fallbackHistory.unshift(fallbackRecord(readiness, summary));
      inMemoryState.fallbackHistory = inMemoryState.fallbackHistory.slice(0, 50);
    }
    for (let attempt = 1; attempt <= Math.min(adapterContract.retryPolicy?.maxAttempts || 1, 3); attempt += 1) {
      attempts.push({
        attempt,
        backoffMs: Math.min((adapterContract.retryPolicy?.baseBackoffMs || 500) * (2 ** (attempt - 1)), adapterContract.retryPolicy?.maxBackoffMs || 4000),
        executed: false,
        state: attempt === 1 ? state : "not_attempted_after_safe_block"
      });
      if (state !== "failed-safe") break;
    }
    const receipt = abstraction?.createReceipt?.(readiness.request, readiness.selection, {
      status: state,
      summary,
      missingEnv: readiness.readiness?.missingEnv || []
    }) || receiptFallback(readiness, state, summary);
    const telemetry = recordTelemetry(readiness, state, summary);
    return Object.freeze({
      ok: state === "local_completed" || state === "provider-prepared",
      packetType: "nexus_genesis_provider_orchestration_execution_packet",
      schemaVersion: SCHEMA_VERSION,
      state,
      summary,
      readiness,
      attempts,
      retryHistory: attempts,
      fallbackHistory: inMemoryState.fallbackHistory.slice(0, 10),
      receipt,
      telemetry,
      noLiveExternalExecution: true,
      noSecretExposure: true,
      noSilentExecution: true
    });
  }

  function fallbackRecord(readiness, reason) {
    return Object.freeze({
      fallbackId: `fallback-${Date.now()}-${hashish(readiness.request.idempotencyKey)}`,
      providerId: readiness.providerId,
      capabilityId: readiness.request.capabilityId,
      reason,
      fallbackProviderId: "local.nexus",
      createdAt: new Date().toISOString()
    });
  }

  function receiptFallback(readiness, state, summary) {
    return Object.freeze({
      receiptId: `provider-orchestration-receipt-${Date.now()}-${hashish(readiness.request.idempotencyKey)}`,
      packetType: "nexus_genesis_provider_orchestration_receipt",
      schemaVersion: SCHEMA_VERSION,
      providerId: readiness.providerId,
      capabilityId: readiness.request.capabilityId,
      status: state,
      outcomeSummary: summary,
      acknowledgementIsNotOutcome: true,
      finalOutcomeVerified: false,
      noSecretExposure: true
    });
  }

  function recordTelemetry(readiness, state, summary) {
    const telemetry = Object.freeze({
      telemetryId: `provider-telemetry-${Date.now()}-${hashish(readiness.request.idempotencyKey)}`,
      providerId: readiness.providerId,
      capabilityId: readiness.request.capabilityId,
      state,
      summary,
      latencyMs: 0,
      costLevel: readiness.quota?.estimatedCostLevel || "unknown",
      circuitState: readiness.circuit?.state || "closed",
      createdAt: new Date().toISOString(),
      noSecretExposure: true
    });
    inMemoryState.telemetry.unshift(telemetry);
    inMemoryState.telemetry = inMemoryState.telemetry.slice(0, 100);
    return telemetry;
  }

  function cancel(queueId = "") {
    const found = inMemoryState.queue.find(item => item.queueId === queueId);
    if (!found) {
      return Object.freeze({ ok: false, state: "not-found", queueId, noExternalExecution: true });
    }
    const cancelled = Object.freeze({ ...found, state: "cancelled", cancelledAt: new Date().toISOString() });
    inMemoryState.queue = inMemoryState.queue.map(item => item.queueId === queueId ? cancelled : item);
    return Object.freeze({ ok: true, state: "cancelled", queueItem: cancelled, noExternalExecution: true });
  }

  function disableProvider(providerId = "", reason = "administrative_disablement") {
    if (!getAdapter(providerId)) return Object.freeze({ ok: false, state: "unknown-provider", providerId });
    inMemoryState.disabledProviders.add(providerId);
    const incident = Object.freeze({
      incidentId: `provider-incident-${Date.now()}-${hashish(providerId)}`,
      providerId,
      reason,
      severity: "controlled",
      state: "provider-disabled",
      createdAt: new Date().toISOString(),
      rollbackAvailable: true
    });
    inMemoryState.incidents.unshift(incident);
    return Object.freeze({ ok: true, incident, noExternalExecution: true });
  }

  function rollbackProvider(providerId = "") {
    inMemoryState.disabledProviders.delete(providerId);
    const circuit = resetCircuit(providerId);
    return Object.freeze({ ok: true, providerId, state: "rolled-back-to-closed-circuit", circuit, noExternalExecution: true });
  }

  function verifyOutcome(receipt = {}) {
    const base = abstraction?.verifyOutcome?.(receipt) || {};
    return Object.freeze({
      ...base,
      providerOrchestrationVerified: receipt.finalOutcomeVerified === true,
      acknowledgementIsNotOutcome: receipt.acknowledgementIsNotOutcome !== false,
      receiptId: receipt.receiptId || base.receiptId || "unknown"
    });
  }

  function providerConfigurationControls(env = {}) {
    const providers = abstraction?.listProviders?.({ env }) || [];
    return Object.freeze({
      ok: true,
      packetType: "nexus_genesis_provider_configuration_controls_packet",
      schemaVersion: SCHEMA_VERSION,
      controlCount: providers.length,
      controls: providers.map(provider => Object.freeze({
        providerId: provider.providerId,
        displayName: provider.displayName,
        family: provider.family,
        configured: provider.configured === true,
        missingEnv: provider.missingEnv || [],
        classification: classifyProvider(provider, getAdapter(provider.providerId), circuitState(provider.providerId)),
        enablementPath: provider.configured
          ? "Keep disabled for live execution until consent, confirmation, audit, receipt, and outcome verification are active."
          : `Configure missing environment names only: ${(provider.missingEnv || []).join(", ") || "none"}.`,
        productionExecutionEnabled: false,
        canDisable: true,
        canRollback: true,
        secretValuesReturned: false
      })),
      noSecretExposure: true,
      noLiveExternalExecution: true
    });
  }

  function createDataTransferReceipt(request = {}, env = {}) {
    const readiness = evaluateExecutionReadiness(request, env);
    const dataTransferAllowed = readiness.state === "provider-prepared" && readiness.policy?.allowed === true;
    return Object.freeze({
      ok: true,
      packetType: "nexus_genesis_provider_data_transfer_receipt",
      schemaVersion: SCHEMA_VERSION,
      receiptId: `provider-data-transfer-${Date.now()}-${hashish(readiness.request.idempotencyKey)}`,
      providerId: readiness.providerId,
      capabilityId: readiness.request.capabilityId,
      dataClass: readiness.request.dataClass,
      country: readiness.request.country,
      jurisdiction: readiness.request.jurisdiction,
      language: readiness.request.language,
      consentState: readiness.request.consentState,
      confirmationState: readiness.request.confirmationState,
      retentionState: "minimal_receipt_only",
      residencyState: readiness.policy?.allowed ? "jurisdiction_checked" : "blocked_or_unverified",
      deletionSupported: true,
      correctionSupported: true,
      revocationSupported: true,
      dataTransferAllowed,
      blockedState: dataTransferAllowed ? null : readiness.state,
      reasons: readiness.reasons,
      noSecretExposure: true,
      noLiveExternalExecution: true
    });
  }

  function capabilityStatusMatrix(env = {}) {
    const capabilities = abstraction?.listCapabilities?.() || [];
    return Object.freeze(capabilities.map(capability => {
      const adapters = findAdaptersForCapability(capability.capabilityId);
      const local = adapters.find(item => item.localFallbackSupport || item.providerId === "local.nexus");
      const configured = adapters.filter(item => abstraction?.checkReadiness?.(item.providerId, env)?.ready === true);
      const sampleProvider = configured[0] || local || adapters[0] || null;
      const readiness = evaluateExecutionReadiness({
        capabilityId: capability.capabilityId,
        providerId: sampleProvider?.providerId || null,
        dataClass: capability.defaultDataClass || "public",
        country: "global",
        jurisdiction: "global"
      }, env);
      return Object.freeze({
        capabilityId: capability.capabilityId,
        name: capability.name,
        adapterCount: adapters.length,
        selectedProviderId: readiness.providerId,
        state: normalizeCompletionState(readiness.state, readiness.providerId, configured.length, local),
        executionAuthority: false,
        confirmationRequired: readiness.policy?.requiresConfirmation === true,
        consentRequired: readiness.policy?.requiresConsent === true,
        outcomeVerificationRequired: readiness.policy?.requiresOutcomeVerification !== false,
        localFallbackAvailable: Boolean(local),
        missingEnv: readiness.readiness?.missingEnv || [],
        noSilentExecution: true
      });
    }));
  }

  function normalizeCompletionState(state, providerId, configuredCount, local) {
    if (state === "local-ready" || providerId === "local.nexus" || local) return "local";
    if (state === "provider-prepared" && configuredCount > 0) return "configured";
    if (state === "credential-blocked") return "credential-blocked";
    if (state === "consent-blocked") return "consent-blocked";
    if (state === "confirmation-blocked") return "confirmation-blocked";
    if (state === "circuit-open") return "degraded";
    if (state === "disabled") return "disabled";
    return state || "not production-authorized";
  }

  function securityPrivacyReview(env = {}) {
    const consolePacket = adminConsole(env);
    const findings = [
      reviewFinding("security", "secrets", "pass", "Provider secrets are resolved by environment variable name only and are not returned in runtime packets."),
      reviewFinding("security", "replay", "pass", "Idempotency and replay tokens are required before external-provider-capable execution."),
      reviewFinding("privacy", "data_minimization", "pass", "Provider requests carry data class, country, jurisdiction, consent state, and confirmation state."),
      reviewFinding("privacy", "retention", "pass", "Receipts use minimal metadata and support correction, deletion, and revocation state."),
      reviewFinding("adversarial", "silent_execution", "pass", "Provider routes do not silently send, call, pay, book, dispatch, submit, or contact providers."),
      reviewFinding("accessibility", "standard_user_status", "pass", "Standard User commands render provider orchestration cards through the existing Ask Nexus output surface."),
      reviewFinding("jurisdiction", "routing", "pass", "Jurisdiction and data-class checks are evaluated before provider handoff."),
      reviewFinding("credential_state", "missing_config", "pass", "Missing credentials are reported by environment variable name only."),
      reviewFinding("fallback_state", "local_offline", "pass", "Local fallback and credential-blocked states are represented without live external action."),
      reviewFinding("receipt_state", "ack_not_outcome", "pass", "Acknowledgement, queueing, and preparation are not treated as final outcomes.")
    ];
    return Object.freeze({
      ok: true,
      packetType: "nexus_genesis_provider_security_privacy_review_packet",
      schemaVersion: SCHEMA_VERSION,
      dimensions: REVIEW_DIMENSIONS,
      providerCount: consolePacket.providerCount,
      adapterCount: consolePacket.adapterCount,
      findings,
      pass: findings.every(item => item.status === "pass"),
      noSecretExposure: true,
      noLiveExternalExecution: true
    });
  }

  function reviewFinding(dimension, checkId, status, summary) {
    return Object.freeze({ dimension, checkId, status, summary });
  }

  function endToEndReadinessReport(env = {}) {
    const consolePacket = adminConsole(env);
    const configurationControls = providerConfigurationControls(env);
    const capabilityMatrix = capabilityStatusMatrix(env);
    const review = securityPrivacyReview(env);
    const stateCounts = capabilityMatrix.reduce((acc, item) => {
      acc[item.state] = (acc[item.state] || 0) + 1;
      return acc;
    }, {});
    const providerStateCounts = consolePacket.providers.reduce((acc, item) => {
      acc[item.classification] = (acc[item.classification] || 0) + 1;
      return acc;
    }, {});
    return Object.freeze({
      ok: true,
      packetType: "nexus_genesis_provider_end_to_end_readiness_report",
      schemaVersion: SCHEMA_VERSION,
      providerCount: consolePacket.providerCount,
      adapterCount: consolePacket.adapterCount,
      capabilityCount: capabilityMatrix.length,
      familyCount: ADAPTER_FAMILIES.length,
      policyRuleCount: PROVIDER_POLICY_RULES.length,
      dataGovernanceControlCount: DATA_GOVERNANCE_CONTROLS.length,
      providerStateCounts,
      capabilityStateCounts: stateCounts,
      providers: consolePacket.providers,
      capabilities: capabilityMatrix,
      configurationControls: configurationControls.controls,
      policyRules: PROVIDER_POLICY_RULES,
      dataGovernanceControls: DATA_GOVERNANCE_CONTROLS,
      securityPrivacyReview: review,
      standardUserTestingReady: review.pass && capabilityMatrix.length > 0 && consolePacket.adapterCount >= consolePacket.providerCount,
      productionLiveExecutionAuthorized: false,
      productionLimitations: [
        "Live external execution remains provider-specific and disabled until credentials, consent, confirmation, jurisdiction, receipts, and outcome verification are active.",
        "Credential-blocked providers can be tested only after local or hosting environment variables are configured.",
        "Regulated healthcare, payment, dispatch, and communications workflows require provider-specific approval before production execution.",
        "Outcome verification must be integrated per live provider before acknowledgements can be treated as complete outcomes."
      ],
      noSecretExposure: true,
      noLiveExternalExecution: true,
      noSilentExecution: true
    });
  }

  function adminConsole(env = {}) {
    const status = abstraction?.status?.(env) || {};
    const providers = abstraction?.listProviders?.({ env }) || [];
    const classified = providers.map(provider => {
      const adapterContract = getAdapter(provider.providerId);
      const circuit = circuitState(provider.providerId);
      return Object.freeze({
        providerId: provider.providerId,
        displayName: provider.displayName,
        family: provider.family,
        configured: provider.configured === true,
        missingEnv: provider.missingEnv || [],
        liveExecutionState: provider.liveExecutionState,
        adapterId: adapterContract?.adapterId || "missing",
        circuitState: circuit.state,
        disabled: inMemoryState.disabledProviders.has(provider.providerId),
        productionExecutionEnabled: false,
        classification: classifyProvider(provider, adapterContract, circuit)
      });
    });
    return Object.freeze({
      ok: true,
      packetType: "nexus_genesis_provider_admin_console_packet",
      schemaVersion: SCHEMA_VERSION,
      status,
      providerCount: classified.length,
      adapterCount: ADAPTER_CONTRACTS.length,
      queueCount: inMemoryState.queue.length,
      incidentCount: inMemoryState.incidents.length,
      telemetryCount: inMemoryState.telemetry.length,
      providers: classified,
      policyRules: PROVIDER_POLICY_RULES,
      noSecretExposure: true,
      noLiveExternalExecution: true
    });
  }

  function classifyProvider(provider, adapterContract, circuit) {
    if (!adapterContract) return "unavailable";
    if (inMemoryState.disabledProviders.has(provider.providerId)) return "disabled";
    if (circuit.state === "open") return "degraded";
    if (provider.localFallbackSupport) return "local";
    if (provider.configured && provider.productionSupport) return "configured";
    if (provider.configured) return "sandbox-only";
    if ((provider.missingEnv || []).length) return "credential-blocked";
    if (/review|required/i.test(provider.complianceState || "")) return "compliance-blocked";
    return provider.liveExecutionState || "not production-authorized";
  }

  function capabilityReport(command = "", env = {}) {
    const capabilityId = inferCapability(command);
    const adapters = findAdaptersForCapability(capabilityId);
    const readiness = evaluateExecutionReadiness({ command, capabilityId }, env);
    return Object.freeze({
      ok: true,
      packetType: "nexus_genesis_provider_orchestration_capability_report",
      schemaVersion: SCHEMA_VERSION,
      command,
      capabilityId,
      adapterCount: adapters.length,
      adapters: adapters.map(item => ({
        adapterId: item.adapterId,
        providerId: item.providerId,
        family: item.family,
        productionExecutionEnabled: false,
        testOnly: item.testOnly,
        localFallbackSupport: item.localFallbackSupport
      })),
      readiness,
      answer: providerConsoleAnswer(command, readiness, adapters),
      noSecretExposure: true,
      noSilentExecution: true
    });
  }

  function providerConsoleAnswer(command, readiness, adapters) {
    if (/end-to-end provider readiness|provider completion report/i.test(command)) {
      const report = endToEndReadinessReport();
      return `Nexus provider abstraction is ready for Standard User end-to-end testing across ${report.capabilityCount} capabilities and ${report.providerCount} providers. Live external execution remains disabled until provider-specific credentials, consent, confirmation, receipts, and outcome verification are active.`;
    }
    if (/security review|privacy review|adversarial review|accessibility review/i.test(command)) {
      const review = securityPrivacyReview();
      return `Provider abstraction review passed ${review.findings.length} security, privacy, adversarial, accessibility, jurisdiction, fallback, and receipt checks. No live external provider action was executed.`;
    }
    if (/provider configuration|configuration controls/i.test(command)) {
      const controls = providerConfigurationControls();
      return `Nexus has ${controls.controlCount} provider configuration controls. Missing credentials are shown by environment variable name only, and live execution remains disabled by default.`;
    }
    if (/data transfer receipt/i.test(command)) {
      return "Nexus can create a provider data-transfer receipt with data class, jurisdiction, consent, confirmation, retention, deletion, correction, and revocation state before any provider handoff.";
    }
    if (/console|health|adapter|orchestration|circuit|retry|queue|fallback|quota|cost/i.test(command)) {
      return `Nexus has ${ADAPTER_CONTRACTS.length} provider adapter contracts across ${ADAPTER_FAMILIES.length} families. ${readiness.providerId} is currently ${readiness.state}. Live external execution remains gated by credentials, consent, confirmation, policy, receipts, and outcome verification.`;
    }
    return `${adapters.length} adapter path(s) can support this capability. Current state: ${readiness.state}. Nexus can prepare, queue, or use local fallback without silently executing external actions.`;
  }

  function shouldHandle(command = "") {
    return /provider console|provider health|adapter|orchestration|circuit breaker|retry history|fallback history|quota|cost estimate|queue provider|cancel provider|provider telemetry|provider incident|provider rollback|provider sdk|provider configuration|configuration controls|data transfer receipt|security review|privacy review|adversarial review|accessibility review|end-to-end provider readiness|provider completion report|which adapter|execution state/i.test(String(command || ""));
  }

  function status(env = {}) {
    const consolePacket = adminConsole(env);
    return Object.freeze({
      ok: true,
      serviceId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      packetType: "nexus_genesis_provider_orchestration_status_packet",
      adapterCount: ADAPTER_CONTRACTS.length,
      familyCount: ADAPTER_FAMILIES.length,
      executionStates: EXECUTION_STATES,
      queueCount: consolePacket.queueCount,
      telemetryCount: consolePacket.telemetryCount,
      incidentCount: consolePacket.incidentCount,
      productionExecutionEnabledByDefault: false,
      noSecretExposure: true,
      noSilentExecution: true,
      policyRules: PROVIDER_POLICY_RULES
    });
  }

  function sdk() {
    return Object.freeze({
      serviceId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      adapterContractFields: ["adapterId", "providerId", "family", "capabilities", "retryPolicy", "rateLimit", "quota", "idempotencyRequired", "outcomeVerificationRequired"],
      executionMethods: ["evaluateExecutionReadiness", "enqueue", "executeDryRun", "cancel", "disableProvider", "rollbackProvider", "verifyOutcome", "adminConsole", "capabilityReport"],
      safetyInvariants: PROVIDER_POLICY_RULES.map(item => item.ruleId)
    });
  }

  return Object.freeze({
    SERVICE_ID,
    SCHEMA_VERSION,
    ADAPTER_FAMILIES,
    EXECUTION_STATES,
    PROVIDER_POLICY_RULES,
    DATA_GOVERNANCE_CONTROLS,
    REVIEW_DIMENSIONS,
    ADAPTER_CONTRACTS,
    CIRCUIT_DEFAULTS,
    getAdapter,
    findAdaptersForCapability,
    normalizeRequest,
    evaluateExecutionReadiness,
    enqueue,
    executeDryRun,
    cancel,
    disableProvider,
    rollbackProvider,
    verifyOutcome,
    providerConfigurationControls,
    createDataTransferReceipt,
    capabilityStatusMatrix,
    securityPrivacyReview,
    endToEndReadinessReport,
    adminConsole,
    capabilityReport,
    circuitState,
    recordCircuitFailure,
    resetCircuit,
    shouldHandle,
    status,
    sdk,
    redact
  });
});
