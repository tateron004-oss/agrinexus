(function initNexusTelephonyCallRuntime(root, factory) {
  const runtime = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  if (root) {
    root.NexusTelephonyCallRuntime = runtime;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTelephonyCallRuntimeFactory(root) {
  "use strict";

  const SUPPORTED_LANGUAGES = Object.freeze({
    en: { label: "English", dir: "ltr" },
    es: { label: "Spanish", dir: "ltr" },
    fr: { label: "French", dir: "ltr" },
    ar: { label: "Arabic", dir: "rtl" },
    pt: { label: "Portuguese", dir: "ltr" },
    sw: { label: "Kiswahili", dir: "ltr" }
  });

  const TELEPHONY_ENV_REQUIREMENTS = Object.freeze({
    twilio: {
      providerId: "twilio",
      providerName: "Twilio Voice",
      flagNames: ["NEXUS_CALLS_ENABLED", "NEXUS_TELEPHONY_ENABLED"],
      outboundEnv: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER"],
      inboundEnv: ["TWILIO_VOICE_WEBHOOK_URL"]
    },
    vonage: {
      providerId: "vonage",
      providerName: "Vonage Voice",
      flagNames: ["NEXUS_CALLS_ENABLED", "NEXUS_TELEPHONY_ENABLED"],
      outboundEnv: ["VONAGE_API_KEY", "VONAGE_API_SECRET", "VONAGE_PHONE_NUMBER"],
      inboundEnv: ["NEXUS_TELEPHONY_WEBHOOK_URL"]
    },
    telnyx: {
      providerId: "telnyx",
      providerName: "Telnyx Voice",
      flagNames: ["NEXUS_CALLS_ENABLED", "NEXUS_TELEPHONY_ENABLED"],
      outboundEnv: ["TELNYX_API_KEY", "TELNYX_PHONE_NUMBER"],
      inboundEnv: ["NEXUS_TELEPHONY_WEBHOOK_URL"]
    },
    signalwire: {
      providerId: "signalwire",
      providerName: "SignalWire Voice",
      flagNames: ["NEXUS_CALLS_ENABLED", "NEXUS_TELEPHONY_ENABLED"],
      outboundEnv: ["SIGNALWIRE_PROJECT_ID", "SIGNALWIRE_TOKEN", "SIGNALWIRE_PHONE_NUMBER"],
      inboundEnv: ["NEXUS_TELEPHONY_WEBHOOK_URL"]
    },
    plivo: {
      providerId: "plivo",
      providerName: "Plivo Voice",
      flagNames: ["NEXUS_CALLS_ENABLED", "NEXUS_TELEPHONY_ENABLED"],
      outboundEnv: ["PLIVO_AUTH_ID", "PLIVO_AUTH_TOKEN", "PLIVO_PHONE_NUMBER"],
      inboundEnv: ["NEXUS_TELEPHONY_WEBHOOK_URL"]
    },
    generic: {
      providerId: "generic",
      providerName: "Generic Telephony Provider",
      flagNames: ["NEXUS_CALLS_ENABLED", "NEXUS_TELEPHONY_ENABLED"],
      outboundEnv: ["NEXUS_TELEPHONY_API_KEY", "NEXUS_TELEPHONY_FROM_NUMBER"],
      inboundEnv: ["NEXUS_TELEPHONY_WEBHOOK_URL"]
    }
  });

  const SUPPORTED_PROVIDERS = Object.freeze(Object.keys(TELEPHONY_ENV_REQUIREMENTS));

  const RECIPIENT_TYPES = Object.freeze([
    "clinic",
    "pharmacy",
    "mobile_clinic",
    "seller",
    "buyer",
    "logistics_provider",
    "employer",
    "provider_follow_up",
    "general_contact"
  ]);

  const CALL_PURPOSES = Object.freeze([
    "clinic coordination",
    "pharmacy support",
    "mobile clinic access",
    "marketplace buyer or seller preparation",
    "logistics coordination",
    "employer or workforce follow-up",
    "provider follow-up",
    "general call preparation"
  ]);

  const RESULT_STATUSES = Object.freeze([
    "prepared_local",
    "queued_for_review",
    "requires_confirmation",
    "requires_provider",
    "blocked_missing_credentials",
    "blocked_inbound_webhook",
    "blocked_outbound_provider",
    "failed",
    "completed_verified"
  ]);

  const CALL_STATUS_LABELS = Object.freeze({
    local_only: "Local preparation only",
    demo_available: "Local demo preparation available",
    missing_credentials: "Missing credentials",
    inbound_blocked: "Inbound blocked",
    outbound_blocked: "Outbound blocked",
    configured: "Configured",
    ready: "Ready after confirmation",
    disabled: "Disabled",
    test_mode: "Test mode"
  });

  function nowIso() {
    return new Date().toISOString();
  }

  function normalizeText(value) {
    return String(value || "").trim();
  }

  function isTruthyFlag(value) {
    return /^(true|1|yes|on)$/i.test(normalizeText(value));
  }

  function envPresent(env, name) {
    const value = normalizeText(env && env[name]);
    return Boolean(value && !/replace-with|your-|example|changeme/i.test(value));
  }

  function missingEnv(env, names) {
    return names.filter(name => !envPresent(env, name));
  }

  function selectedProvider(env = {}) {
    const raw = normalizeText(env.NEXUS_TELEPHONY_PROVIDER || env.PHONE_PROVIDER || "").toLowerCase();
    if (SUPPORTED_PROVIDERS.includes(raw)) return raw;
    for (const providerId of SUPPORTED_PROVIDERS) {
      if (TELEPHONY_ENV_REQUIREMENTS[providerId].outboundEnv.some(name => envPresent(env, name))) return providerId;
    }
    return "twilio";
  }

  function providerFlagEnabled(env = {}, provider = "twilio") {
    const flags = TELEPHONY_ENV_REQUIREMENTS[provider]?.flagNames || ["NEXUS_CALLS_ENABLED"];
    return flags.some(name => isTruthyFlag(env && env[name]));
  }

  function detectTelephonyProviderStatus(env = {}) {
    const providerId = selectedProvider(env);
    const requirement = TELEPHONY_ENV_REQUIREMENTS[providerId] || TELEPHONY_ENV_REQUIREMENTS.twilio;
    const enabled = providerFlagEnabled(env, providerId);
    const outboundMissing = missingEnv(env, requirement.outboundEnv);
    const inboundWebhookNames = providerId === "twilio"
      ? ["TWILIO_VOICE_WEBHOOK_URL", "NEXUS_TELEPHONY_WEBHOOK_URL"]
      : requirement.inboundEnv;
    const inboundReady = inboundWebhookNames.some(name => envPresent(env, name));
    const outboundReady = enabled && outboundMissing.length === 0;
    const ready = Boolean(outboundReady && inboundReady);
    const missingEnvNames = Array.from(new Set([
      ...(!enabled ? requirement.flagNames.slice(0, 1) : []),
      ...outboundMissing,
      ...(inboundReady ? [] : inboundWebhookNames.slice(0, 1))
    ]));
    const statusLabel = !enabled
      ? "disabled"
      : outboundMissing.length
        ? "missing_credentials"
        : !inboundReady
          ? "inbound_blocked"
          : "ready";
    return {
      ok: true,
      providerId,
      providerName: requirement.providerName,
      configured: outboundMissing.length === 0,
      enabled,
      ready,
      testModeAvailable: true,
      inboundReady,
      outboundReady,
      missingEnvNames,
      statusLabel,
      statusText: CALL_STATUS_LABELS[statusLabel] || statusLabel,
      blockedReason: !enabled
        ? "Telephony is disabled until NEXUS_CALLS_ENABLED=true or NEXUS_TELEPHONY_ENABLED=true."
        : outboundMissing.length
          ? "Real outbound calling requires telephony provider credentials."
          : !inboundReady
            ? "Inbound phone calls are not active. A telephony provider number and webhook are required."
            : "",
      supportedActions: ["prepare_call", "generate_script", "create_receipt", "check_provider_readiness"],
      unavailableActions: [
        ...(!outboundReady ? ["live_outbound_call"] : []),
        ...(!inboundReady ? ["inbound_call_webhook"] : [])
      ],
      lastCheckAt: nowIso(),
      noSecretValues: true
    };
  }

  function isEmergencyCallRequest(text = "") {
    return /\b(911|999|112|emergency services|ambulance|police|fire department|dispatch emergency|emergency help|call emergency|call 911)\b/i.test(text);
  }

  function classifyCallRequest(text = "") {
    const value = normalizeText(text).toLowerCase();
    if (!/\b(call|phone|dial|ring|voice call|can nexus call)\b/.test(value)) return null;
    if (isEmergencyCallRequest(value)) {
      return { recipientType: "emergency", callPurpose: "emergency boundary", sourceMode: "safety" };
    }
    if (/\b(pharmacy|refill|medicine|medication)\b/.test(value)) return { recipientType: "pharmacy", callPurpose: "pharmacy support", sourceMode: "pharmacy" };
    if (/\b(mobile clinic|clinic van|outreach clinic)\b/.test(value)) return { recipientType: "mobile_clinic", callPurpose: "mobile clinic access", sourceMode: "mobile_clinic" };
    if (/\b(logistics|driver|delivery|shipment|transport)\b/.test(value)) return { recipientType: "logistics_provider", callPurpose: "logistics coordination", sourceMode: "logistics" };
    if (/\b(clinic|doctor|nurse|provider|telehealth|hospital|care team)\b/.test(value)) return { recipientType: "clinic", callPurpose: "clinic coordination", sourceMode: "health" };
    if (/\b(seller|vendor|marketplace|agritrade)\b/.test(value)) return { recipientType: "seller", callPurpose: "marketplace buyer or seller preparation", sourceMode: "marketplace" };
    if (/\b(buyer|customer)\b/.test(value)) return { recipientType: "buyer", callPurpose: "marketplace buyer or seller preparation", sourceMode: "marketplace" };
    if (/\b(employer|job|workforce|recruiter)\b/.test(value)) return { recipientType: "employer", callPurpose: "employer or workforce follow-up", sourceMode: "workforce" };
    return { recipientType: "general_contact", callPurpose: "general call preparation", sourceMode: "communications" };
  }

  function normalizeLanguage(language = "en") {
    const code = normalizeText(language).toLowerCase().slice(0, 2);
    return SUPPORTED_LANGUAGES[code] ? code : "en";
  }

  function scriptIntro(language) {
    return {
      en: "Hello. This is a Nexus-prepared call script.",
      es: "Hola. Este es un guion de llamada preparado por Nexus.",
      fr: "Bonjour. Ceci est un script d'appel prepare par Nexus.",
      ar: "\u0645\u0631\u062d\u0628\u0627. \u0647\u0630\u0627 \u0646\u0635 \u0645\u0643\u0627\u0644\u0645\u0629 \u0623\u0639\u062f\u0647 Nexus.",
      pt: "Ola. Este e um roteiro de chamada preparado pelo Nexus.",
      sw: "Habari. Huu ni mwongozo wa simu uliotayarishwa na Nexus."
    }[language] || "Hello. This is a Nexus-prepared call script.";
  }

  function generateCallScript(input = {}) {
    const language = normalizeLanguage(input.language);
    const recipientType = normalizeText(input.recipientType || "general_contact").replace(/_/g, " ");
    const purpose = normalizeText(input.callPurpose || "general call preparation");
    const recipientName = normalizeText(input.recipientName || "the selected contact");
    const notes = normalizeText(input.notes || input.command || "");
    return [
      scriptIntro(language),
      `Recipient: ${recipientName} (${recipientType}).`,
      `Purpose: ${purpose}.`,
      "Confirm the recipient, language, consent, and exact wording before any real call.",
      notes ? `Context to verify: ${notes.slice(0, 220)}.` : "Context to verify: ask the user for any missing details before calling.",
      "Close by summarizing the next step and do not promise scheduling, payment, prescription, emergency dispatch, or provider acceptance."
    ].join("\n");
  }

  function createId(prefix) {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function createCallReceipt(call, status, options = {}) {
    return {
      receiptId: options.receiptId || createId("call-receipt"),
      callId: call.callId,
      status,
      providerId: call.providerStatus?.providerId || "",
      providerName: call.providerStatus?.providerName || "",
      noSecretValues: true,
      noEmergencyCallAuthorized: true,
      noSilentExecution: true,
      message: status === "prepared_local"
        ? "I prepared the call locally. Real outbound calling requires telephony provider credentials."
        : "The call action remains gated by provider readiness, user consent, explicit confirmation, and audit.",
      timestamp: nowIso()
    };
  }

  function prepareCall(input = {}, options = {}) {
    const command = typeof input === "string" ? input : input.command || input.text || input.notes || "";
    const classified = classifyCallRequest(command) || {};
    const providerStatus = options.providerStatus || detectTelephonyProviderStatus(options.env || {});
    const language = normalizeLanguage(input.language || options.language || "en");
    const emergency = isEmergencyCallRequest(command || input.callPurpose);
    const call = {
      callId: createId("call"),
      callDirection: "outbound_preparation",
      callPurpose: emergency ? "emergency boundary" : normalizeText(input.callPurpose || classified.callPurpose || "general call preparation"),
      sourceMode: normalizeText(input.sourceMode || classified.sourceMode || options.sourceMode || "communications"),
      relatedWorkspaceId: normalizeText(input.relatedWorkspaceId || ""),
      relatedRecordId: normalizeText(input.relatedRecordId || ""),
      fromNumber: "",
      toNumber: normalizeText(input.toNumber || input.recipientPhone || ""),
      recipientName: normalizeText(input.recipientName || input.name || ""),
      recipientType: emergency ? "emergency" : normalizeText(input.recipientType || classified.recipientType || "general_contact"),
      language,
      script: "",
      consentRequired: true,
      consentStatus: "required_before_execution",
      providerRequired: true,
      providerStatus,
      executionScope: "local_safe_preparation",
      resultStatus: emergency ? "blocked_outbound_provider" : "prepared_local",
      receiptId: "",
      timestamp: nowIso(),
      noExecutionAuthorized: true,
      noEmergencyCallAuthorized: true
    };
    call.script = emergency
      ? "Nexus cannot call emergency services. If this is urgent, contact local emergency services directly now."
      : generateCallScript({ ...input, ...call, command });
    const receipt = createCallReceipt(call, call.resultStatus);
    call.receiptId = receipt.receiptId;
    return {
      ok: !emergency,
      call,
      receipt,
      resultStatus: call.resultStatus,
      message: emergency
        ? "Nexus cannot call emergency services. Please contact local emergency services directly."
        : "I prepared the call locally. Real outbound calling requires telephony provider credentials.",
      providerStatus,
      noSecretValues: true,
      noExecutionAuthorized: true
    };
  }

  function attemptOutboundCall(input = {}, options = {}) {
    const prepared = prepareCall(input, options);
    const status = prepared.providerStatus || detectTelephonyProviderStatus(options.env || {});
    if (prepared.call.recipientType === "emergency") {
      return { ...prepared, ok: false, resultStatus: "blocked_outbound_provider" };
    }
    if (!input.confirmed && !options.confirmed) {
      return {
        ...prepared,
        ok: false,
        resultStatus: "requires_confirmation",
        message: "A real outbound call requires explicit confirmation before any provider call can start."
      };
    }
    if (!prepared.call.toNumber) {
      return {
        ...prepared,
        ok: false,
        resultStatus: "requires_confirmation",
        message: "A destination phone number is required before a provider call can be considered."
      };
    }
    if (!status.outboundReady) {
      return {
        ...prepared,
        ok: false,
        resultStatus: "blocked_missing_credentials",
        message: "I prepared the call locally. Real outbound calling requires telephony provider credentials.",
        missingEnvNames: status.missingEnvNames
      };
    }
    return {
      ...prepared,
      ok: false,
      resultStatus: "blocked_outbound_provider",
      message: "Telephony provider credentials appear configured, but live outbound call execution remains blocked in this Nexus telephony runtime until the final provider adapter gate is approved.",
      noExecutionAuthorized: true
    };
  }

  function inboundReadiness(options = {}) {
    const providerStatus = options.providerStatus || detectTelephonyProviderStatus(options.env || {});
    return {
      ok: providerStatus.inboundReady,
      providerStatus,
      resultStatus: providerStatus.inboundReady ? "configured" : "blocked_inbound_webhook",
      message: providerStatus.inboundReady
        ? "Inbound telephony webhook configuration is present. Validate the provider webhook before claiming live inbound calls."
        : "Inbound phone calls are not active. A telephony provider number and webhook are required.",
      noSecretValues: true,
      noExecutionAuthorized: true
    };
  }

  function shouldHandleCallCommand(text = "") {
    return Boolean(classifyCallRequest(text));
  }

  async function fetchStatus() {
    if (!root || !root.fetch) return detectTelephonyProviderStatus({});
    try {
      const response = await root.fetch("/api/telephony/status");
      return await response.json();
    } catch (error) {
      return { ...detectTelephonyProviderStatus({}), statusLabel: "local_only", blockedReason: error.message };
    }
  }

  function setText(selector, value, scope) {
    const el = (scope || root.document).querySelector(selector);
    if (el) el.textContent = value;
  }

  function renderStatus(status, mountEl) {
    if (!mountEl) return;
    setText("[data-nexus-telephony-provider]", `${status.providerName || "Telephony"} - ${status.statusText || status.statusLabel}`, mountEl);
    setText("[data-nexus-telephony-inbound]", status.inboundReady ? "Inbound webhook configured" : "Inbound phone calls are not active. A telephony provider number and webhook are required.", mountEl);
    setText("[data-nexus-telephony-outbound]", status.outboundReady ? "Outbound provider credentials detected; confirmation still required." : "I can prepare calls locally. Real outbound calling requires telephony provider credentials.", mountEl);
    setText("[data-nexus-telephony-missing]", (status.missingEnvNames || []).join(", ") || "No missing env names for the selected status.", mountEl);
  }

  function renderPreparedCall(result, mountEl) {
    const rootEl = mountEl || (root && root.document && root.document.querySelector("#nexusTelephonyCallRuntime"));
    if (!rootEl || !result) return;
    const output = rootEl.querySelector("[data-nexus-telephony-script]");
    if (output) {
      output.textContent = result.call?.script || result.message || "";
      output.dir = SUPPORTED_LANGUAGES[result.call?.language || "en"]?.dir || "ltr";
    }
    const receipts = rootEl.querySelector("[data-nexus-telephony-receipts]");
    if (receipts) {
      const article = root.document.createElement("article");
      article.innerHTML = `<strong>${result.resultStatus || result.call?.resultStatus || "prepared_local"}</strong><span>${result.receipt?.message || result.message || ""}</span><small>${result.receipt?.receiptId || ""}</small>`;
      receipts.prepend(article);
    }
  }

  async function mount(selector = "#nexusTelephonyCallRuntime") {
    if (!root || !root.document) return null;
    const mountEl = root.document.querySelector(selector);
    if (!mountEl) return null;
    if (mountEl.dataset.nexusTelephonyMounted === "true") return mountEl;
    mountEl.dataset.nexusTelephonyMounted = "true";
    const status = await fetchStatus();
    renderStatus(status, mountEl);
    mountEl.addEventListener("click", async event => {
      const button = event.target.closest("[data-nexus-telephony-action]");
      if (!button) return;
      event.preventDefault();
      const action = button.dataset.nexusTelephonyAction;
      const form = {
        recipientName: mountEl.querySelector("[data-nexus-telephony-recipient-name]")?.value || "",
        recipientType: mountEl.querySelector("[data-nexus-telephony-recipient-type]")?.value || "",
        callPurpose: mountEl.querySelector("[data-nexus-telephony-purpose]")?.value || "",
        language: mountEl.querySelector("[data-nexus-telephony-language]")?.value || "en",
        notes: mountEl.querySelector("[data-nexus-telephony-notes]")?.value || "",
        confirmed: mountEl.querySelector("[data-nexus-telephony-confirm]")?.checked || false
      };
      if (action === "status") {
        renderStatus(await fetchStatus(), mountEl);
        return;
      }
      if (action === "clear") {
        const output = mountEl.querySelector("[data-nexus-telephony-script]");
        if (output) output.textContent = "Call script will appear here.";
        return;
      }
      const result = action === "attempt"
        ? attemptOutboundCall(form, { providerStatus: await fetchStatus(), confirmed: form.confirmed })
        : prepareCall(form, { providerStatus: await fetchStatus() });
      renderPreparedCall(result, mountEl);
      renderStatus(result.providerStatus, mountEl);
    });
    return mountEl;
  }

  if (root && root.document) {
    root.document.addEventListener("DOMContentLoaded", () => {
      mount();
    });
  }

  return {
    TELEPHONY_ENV_REQUIREMENTS,
    SUPPORTED_PROVIDERS,
    RECIPIENT_TYPES,
    CALL_PURPOSES,
    RESULT_STATUSES,
    CALL_STATUS_LABELS,
    detectTelephonyProviderStatus,
    classifyCallRequest,
    shouldHandleCallCommand,
    isEmergencyCallRequest,
    generateCallScript,
    createCallReceipt,
    prepareCall,
    attemptOutboundCall,
    inboundReadiness,
    renderStatus,
    renderPreparedCall,
    mount
  };
});
