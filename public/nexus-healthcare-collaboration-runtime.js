(function initNexusHealthcareCollaborationRuntime(root, factory) {
  const runtime = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  if (root) {
    root.NexusHealthcareCollaborationRuntime = runtime;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusHealthcareCollaborationRuntimeFactory(root) {
  "use strict";

  const GLOBAL_FLAGS = Object.freeze({
    enabled: "NEXUS_HEALTHCARE_COLLAB_ENABLED",
    phiAllowed: "NEXUS_HEALTHCARE_PHI_ALLOWED",
    baaConfirmed: "NEXUS_HEALTHCARE_BAA_CONFIRMED",
    sandbox: "NEXUS_HEALTHCARE_SANDBOX_ENABLED",
    synthetic: "NEXUS_HEALTHCARE_SYNTHETIC_DATA_ENABLED"
  });

  const ACTION_LEVELS = Object.freeze({
    ONE_PREPARE: 1,
    TWO_PROVIDER_REVIEW: 2,
    THREE_EXTERNAL_HANDOFF: 3,
    FOUR_CLINICAL_WRITE: 4,
    FIVE_EMERGENCY: 5
  });

  const SOURCE_TYPES = Object.freeze([
    "ehr_fhir",
    "hie_exchange",
    "telehealth_video",
    "secure_messaging",
    "care_coordination",
    "rpm_patient_generated_data",
    "pharmacy_medication",
    "forms_consent_intake",
    "labs_diagnostics_imaging",
    "population_health_analytics"
  ]);

  const PROVIDERS = Object.freeze([
    provider("epic_fhir", "Epic FHIR", "ehr_fhir", ["NEXUS_FHIR_BASE_URL", "NEXUS_FHIR_CLIENT_ID", "NEXUS_FHIR_CLIENT_SECRET", "NEXUS_FHIR_TOKEN_URL"], {
      adapter: "fhir_sandbox_live_ready_adapter",
      integrationMethod: "SMART on FHIR / OAuth2",
      baaEnv: "EPIC_HEALTHCARE_BAA_CONFIRMED",
      supportsClinicalReview: true,
      actions: ["read_chart_summary", "prepare_record_request", "prepare_referral_packet"]
    }),
    provider("oracle_cerner_fhir", "Oracle Health / Cerner FHIR", "ehr_fhir", ["CERNER_FHIR_BASE_URL", "CERNER_CLIENT_ID", "CERNER_CLIENT_SECRET", "CERNER_TOKEN_URL"], {
      adapter: "fhir_sandbox_live_ready_adapter",
      integrationMethod: "SMART on FHIR / OAuth2",
      baaEnv: "CERNER_HEALTHCARE_BAA_CONFIRMED",
      supportsClinicalReview: true,
      actions: ["read_chart_summary", "prepare_record_request", "prepare_referral_packet"]
    }),
    provider("generic_fhir", "Generic SMART on FHIR", "ehr_fhir", ["NEXUS_FHIR_BASE_URL", "NEXUS_FHIR_CLIENT_ID", "NEXUS_FHIR_CLIENT_SECRET"], {
      adapter: "fhir_sandbox_live_ready_adapter",
      integrationMethod: "FHIR R4 REST / OAuth2",
      actions: ["read_chart_summary", "prepare_record_request"]
    }),
    provider("hie_exchange", "HIE / National Exchange", "hie_exchange", ["NEXUS_HIE_ENDPOINT", "NEXUS_HIE_CLIENT_ID", "NEXUS_HIE_CLIENT_SECRET"], {
      integrationMethod: "FHIR, IHE, TEFCA/QHIN, or partner HIE API",
      actions: ["prepare_hie_record_request", "prepare_external_record_request"]
    }),
    provider("zoom_healthcare", "Zoom Healthcare", "telehealth_video", ["ZOOM_HEALTHCARE_ACCOUNT_ID", "ZOOM_HEALTHCARE_CLIENT_ID", "ZOOM_HEALTHCARE_CLIENT_SECRET"], {
      integrationMethod: "Server-to-server OAuth",
      baaEnv: "ZOOM_HEALTHCARE_BAA_CONFIRMED",
      actions: ["prepare_telehealth_visit", "schedule_telehealth_visit"]
    }),
    provider("teams_healthcare", "Microsoft Teams Healthcare", "telehealth_video", ["MS_GRAPH_TENANT_ID", "MS_GRAPH_CLIENT_ID", "MS_GRAPH_CLIENT_SECRET"], {
      integrationMethod: "Microsoft Graph",
      baaEnv: "MICROSOFT_HEALTHCARE_BAA_CONFIRMED",
      actions: ["prepare_telehealth_visit", "schedule_telehealth_visit"]
    }),
    provider("doxy_mend_evisit", "Doxy.me / Mend / eVisit", "telehealth_video", ["NEXUS_TELEHEALTH_PROVIDER_ENDPOINT", "NEXUS_TELEHEALTH_PROVIDER_API_KEY"], {
      integrationMethod: "Telehealth vendor API",
      actions: ["prepare_telehealth_visit", "schedule_telehealth_visit"]
    }),
    provider("twilio_hipaa_messaging", "Twilio HIPAA-eligible messaging", "secure_messaging", ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_FROM_NUMBER"], {
      integrationMethod: "Twilio Messaging API",
      baaEnv: "TWILIO_HEALTHCARE_BAA_CONFIRMED",
      actions: ["send_patient_reminder", "send_secure_message", "send_care_team_message"]
    }),
    provider("paubox_luxsci_email", "Paubox / LuxSci secure email", "secure_messaging", ["SECURE_EMAIL_PROVIDER_API_KEY", "SECURE_EMAIL_FROM_ADDRESS"], {
      integrationMethod: "Secure email provider API",
      baaEnv: "SECURE_EMAIL_BAA_CONFIRMED",
      actions: ["send_secure_message", "send_visit_summary"]
    }),
    provider("care_coordination_network", "Unite Us / FindHelp / Care Coordination", "care_coordination", ["CARE_COORDINATION_API_BASE_URL", "CARE_COORDINATION_API_KEY"], {
      integrationMethod: "Care coordination API",
      actions: ["prepare_referral_packet", "prepare_mobile_clinic_coordination"]
    }),
    provider("validic_redox_rpm", "Validic / Redox / Health Gorilla RPM", "rpm_patient_generated_data", ["RPM_PROVIDER_BASE_URL", "RPM_PROVIDER_API_KEY"], {
      integrationMethod: "RPM device aggregation API",
      actions: ["prepare_rpm_summary", "prepare_chronic_care_escalation"]
    }),
    provider("apple_google_fitbit_rpm", "Apple Health / Google Health Connect / Fitbit", "rpm_patient_generated_data", ["NEXUS_RPM_DEVICE_PROVIDER", "NEXUS_RPM_DEVICE_API_KEY"], {
      integrationMethod: "Patient-authorized device connector",
      actions: ["prepare_rpm_summary"]
    }),
    provider("surescripts_drfirst", "Surescripts / DrFirst / Medication Network", "pharmacy_medication", ["PHARMACY_NETWORK_ENDPOINT", "PHARMACY_NETWORK_API_KEY"], {
      integrationMethod: "Medication network API",
      actionRiskTier: "regulated_high",
      actions: ["prepare_medication_reconciliation_packet", "prepare_pharmacy_handoff"],
      blockedActions: ["prescribe", "refill", "change_medication"]
    }),
    provider("covermymeds", "CoverMyMeds Prior Authorization", "pharmacy_medication", ["COVERMYMEDS_API_KEY", "COVERMYMEDS_PROVIDER_ID"], {
      integrationMethod: "Prior authorization API",
      actionRiskTier: "regulated_high",
      actions: ["prepare_pharmacy_handoff"],
      blockedActions: ["submit_prior_authorization_without_review"]
    }),
    provider("hipaa_forms", "HIPAA-capable Forms / Consent", "forms_consent_intake", ["FORMS_PROVIDER_API_KEY", "FORMS_PROVIDER_BASE_URL"], {
      integrationMethod: "Forms and e-signature API",
      actions: ["create_intake_form_request", "create_consent_request"]
    }),
    provider("lab_imaging_network", "Labs / Diagnostics / Imaging", "labs_diagnostics_imaging", ["DIAGNOSTICS_PROVIDER_ENDPOINT", "DIAGNOSTICS_PROVIDER_API_KEY"], {
      integrationMethod: "LIS/PACS/DICOM/FHIR diagnostic report API",
      actions: ["prepare_lab_result_summary", "prepare_imaging_report_summary"]
    }),
    provider("population_health", "Population Health Analytics", "population_health_analytics", ["POPULATION_HEALTH_ENDPOINT", "POPULATION_HEALTH_API_KEY"], {
      integrationMethod: "Analytics registry API",
      actions: ["prepare_care_gap_summary", "prepare_chronic_care_registry_summary"]
    })
  ]);

  const RUNTIME_CARDS = Object.freeze([
    card("telehealth_visit", "Telehealth Visit", "Prepare visit context, missing info, and provider-gated scheduling review.", "prepare_telehealth_visit", "telehealth_video"),
    card("patient_message", "Patient Message", "Prepare a patient reminder or secure message with confirmation gates.", "send_patient_reminder", "secure_messaging"),
    card("provider_message", "Provider Message", "Prepare a provider-facing summary without sending it automatically.", "send_secure_message", "secure_messaging"),
    card("care_team_message", "Care-Team Message", "Prepare care-team coordination notes for review.", "send_care_team_message", "secure_messaging"),
    card("referral_packet", "Referral Packet", "Build referral packet sections and provider review status.", "prepare_referral_packet", "care_coordination"),
    card("chronic_care_escalation", "Chronic Care Escalation", "Prepare chronic care and RPM escalation material for clinician review.", "prepare_chronic_care_escalation", "rpm_patient_generated_data"),
    card("rpm_summary", "RPM Summary", "Summarize blood pressure, glucose, weight, RTM, or RPM readings locally.", "prepare_rpm_summary", "rpm_patient_generated_data"),
    card("pharmacy_handoff", "Pharmacy Handoff", "Prepare pharmacy questions and medication reconciliation notes without refill execution.", "prepare_pharmacy_handoff", "pharmacy_medication"),
    card("consent_intake", "Consent / Intake", "Prepare intake and consent request packets with PHI gates.", "create_intake_form_request", "forms_consent_intake"),
    card("clinical_records_fhir", "Clinical Records / FHIR", "Prepare a sandbox/live-ready chart summary request with source labels.", "prepare_fhir_chart_summary", "ehr_fhir"),
    card("hie_record_request", "HIE Record Request", "Prepare outside-record request details for HIE or exchange review.", "prepare_hie_record_request", "hie_exchange"),
    card("labs_diagnostics", "Labs / Diagnostics", "Prepare lab or diagnostic report summary request with clinician review.", "prepare_lab_result_summary", "labs_diagnostics_imaging"),
    card("imaging_report", "Imaging Report", "Prepare imaging report summary context without interpretation claims.", "prepare_imaging_report_summary", "labs_diagnostics_imaging"),
    card("mobile_clinic_coordination", "Mobile Clinic Coordination", "Prepare mobile clinic coordination details without dispatch.", "prepare_mobile_clinic_coordination", "care_coordination"),
    card("visit_summary_share", "Visit Summary Share", "Prepare a visit summary share packet; external sharing stays gated.", "share_visit_summary", "secure_messaging")
  ]);

  const clinicianReviewQueue = [];
  const receipts = [];
  let lastResult = null;

  function provider(id, name, sourceType, requiredEnv, options = {}) {
    return Object.freeze({
      id,
      name,
      category: sourceType,
      sourceType,
      requiredEnv,
      integrationMethod: options.integrationMethod || "Provider API",
      adapter: options.adapter || `${id}_adapter`,
      baaRequired: options.baaRequired !== false,
      baaEnv: options.baaEnv || GLOBAL_FLAGS.baaConfirmed,
      phiEligible: options.phiEligible !== false,
      permissionRequirements: options.permissionRequirements || ["identity_verification", "patient_consent", "role_authorization"],
      complianceRequirements: options.complianceRequirements || ["BAA required before PHI", "audit logging", "minimum necessary data"],
      auditRequirements: options.auditRequirements || ["request_receipt", "provider_status", "review_queue_event"],
      actionCapabilities: options.actions || [],
      blockedActions: options.blockedActions || [],
      actionRiskTier: options.actionRiskTier || "regulated_medium",
      providerConfirmationRequired: options.providerConfirmationRequired !== false,
      supportsClinicalReview: options.supportsClinicalReview !== false,
      executionEnabledByDefault: false
    });
  }

  function card(id, title, description, actionType, sourceType) {
    return Object.freeze({ id, title, description, actionType, sourceType });
  }

  function envPresent(env, name) {
    const value = String((env || {})[name] || "").trim();
    return Boolean(value && !/replace-with|changeme|todo|your-|example/i.test(value));
  }

  function missingEnv(env, names) {
    return names.filter(name => !envPresent(env, name));
  }

  function flag(env, name) {
    return String((env || {})[name] || "").trim().toLowerCase() === "true";
  }

  function redactedEnv(env) {
    return {
      healthcareCollaborationEnabled: flag(env, GLOBAL_FLAGS.enabled),
      phiAllowed: flag(env, GLOBAL_FLAGS.phiAllowed),
      baaConfirmed: flag(env, GLOBAL_FLAGS.baaConfirmed),
      sandboxEnabled: flag(env, GLOBAL_FLAGS.sandbox),
      syntheticDataEnabled: flag(env, GLOBAL_FLAGS.synthetic)
    };
  }

  function providerReadiness(providerDef, env = {}) {
    const missing = missingEnv(env, providerDef.requiredEnv);
    const enabled = flag(env, GLOBAL_FLAGS.enabled);
    const baaConfirmed = !providerDef.baaRequired || flag(env, providerDef.baaEnv) || flag(env, GLOBAL_FLAGS.baaConfirmed);
    const phiAllowed = !providerDef.phiEligible || (flag(env, GLOBAL_FLAGS.phiAllowed) && baaConfirmed);
    const sandboxReady = flag(env, GLOBAL_FLAGS.sandbox) || flag(env, GLOBAL_FLAGS.synthetic);
    const configured = missing.length === 0;
    let liveConnectionStatus = "disabled";
    if (!enabled) liveConnectionStatus = "disabled";
    else if (!configured) liveConnectionStatus = sandboxReady ? "sandbox_ready_missing_live_config" : "missing_config";
    else if (!baaConfirmed) liveConnectionStatus = "blocked_baa_required";
    else if (!phiAllowed) liveConnectionStatus = "blocked_phi_not_allowed";
    else liveConnectionStatus = "live_ready";
    const executionEnabled = liveConnectionStatus === "live_ready" && flag(env, `${providerDef.id.toUpperCase()}_EXECUTION_ENABLED`);

    return {
      providerId: providerDef.id,
      providerName: providerDef.name,
      providerType: providerDef.category,
      sourceType: providerDef.sourceType,
      integrationMethod: providerDef.integrationMethod,
      liveConnectionStatus,
      configured,
      missingEnvNames: missing,
      dataFreshnessModel: configured ? "provider_reported_at_request_time" : sandboxReady ? "synthetic_or_local_fixture" : "not_available",
      authenticationRequirements: providerDef.requiredEnv,
      consentRequirements: ["explicit_user_consent", "minimum_necessary_scope"],
      permissionRequirements: providerDef.permissionRequirements,
      complianceRequirements: providerDef.complianceRequirements,
      auditRequirements: providerDef.auditRequirements,
      actionCapabilities: providerDef.actionCapabilities,
      blockedActions: providerDef.blockedActions,
      actionRiskTier: providerDef.actionRiskTier,
      executionCurrentlyEnabled: executionEnabled,
      userApprovalRequired: true,
      providerConfirmationRequired: providerDef.providerConfirmationRequired,
      clinicianReviewRequired: providerDef.supportsClinicalReview,
      phiAllowed,
      baaConfirmed,
      secretValuesExposed: false,
      futureActivationGate: "configure_provider_credentials_baa_phi_consent_confirmation_audit"
    };
  }

  function providerRegistry(env = {}) {
    const providers = PROVIDERS.map(item => providerReadiness(item, env));
    return {
      ok: true,
      runtime: "nexus-healthcare-collaboration-runtime",
      flags: redactedEnv(env),
      providers,
      executionAuthority: providers.some(item => item.executionCurrentlyEnabled),
      liveActionsRequireConfirmation: true,
      noEmergencyDispatch: true,
      noDiagnosis: true,
      noPrescribing: true,
      noSecretValues: true
    };
  }

  function sourceReadinessMatrix(env = {}) {
    const registry = providerRegistry(env);
    const rows = SOURCE_TYPES.map(sourceType => {
      const providers = registry.providers.filter(item => item.sourceType === sourceType);
      const liveReady = providers.filter(item => item.liveConnectionStatus === "live_ready").length;
      const configured = providers.filter(item => item.configured).length;
      const missingEnvNames = [...new Set(providers.flatMap(item => item.missingEnvNames))];
      const status = liveReady ? "live_ready" : configured ? "blocked_by_baa_phi_or_execution_gate" : "missing_config_or_sandbox_only";
      return {
        sourceType,
        status,
        providerCount: providers.length,
        liveReadyCount: liveReady,
        configuredCount: configured,
        missingEnvNames,
        sourceFreshness: liveReady ? "fresh_at_provider_request_time" : "local_or_sandbox_only",
        executionEnabled: providers.some(item => item.executionCurrentlyEnabled),
        userApprovalRequired: true,
        clinicianReviewRequired: providers.some(item => item.clinicianReviewRequired)
      };
    });
    return {
      ok: true,
      rows,
      summary: {
        totalSources: rows.length,
        liveReadySources: rows.filter(row => row.status === "live_ready").length,
        executionEnabledSources: rows.filter(row => row.executionEnabled).length
      },
      noSecretValues: true
    };
  }

  function providerEvidence(env = {}) {
    const registry = providerRegistry(env);
    return {
      ok: true,
      evidenceId: `healthcare-evidence-${Date.now()}`,
      generatedAt: new Date().toISOString(),
      providers: registry.providers.map(item => ({
        providerId: item.providerId,
        providerName: item.providerName,
        status: item.liveConnectionStatus,
        sourceType: item.sourceType,
        configured: item.configured,
        missingEnvNames: item.missingEnvNames,
        executionCurrentlyEnabled: item.executionCurrentlyEnabled,
        userApprovalRequired: item.userApprovalRequired,
        auditRequirements: item.auditRequirements
      })),
      safety: {
        noDiagnosis: true,
        noPrescribing: true,
        noEmergencyDispatch: true,
        noSecretValues: true
      }
    };
  }

  function fhirSandboxSummary(options = {}) {
    const env = options.env || {};
    const source = providerReadiness(PROVIDERS.find(item => item.id === "generic_fhir"), env);
    const sandbox = flag(env, GLOBAL_FLAGS.sandbox) || flag(env, GLOBAL_FLAGS.synthetic) || !source.configured;
    return {
      ok: true,
      mode: sandbox ? "sandbox_or_local_fixture" : "live_ready_gated",
      sourceLabel: sandbox ? "Synthetic FHIR-style summary" : "Configured FHIR connector",
      patientLabel: options.patientLabel || "current patient",
      sections: [
        "demographics_label_only",
        "conditions_summary_request",
        "medication_reconciliation_request",
        "observations_rpm_rtm_request",
        "care_plan_context_request"
      ],
      sourceStatus: source.liveConnectionStatus,
      missingEnvNames: source.missingEnvNames,
      noLiveRecordPulled: sandbox,
      noPhiSent: true,
      noClinicalWrite: true,
      clinicianReviewRequired: true
    };
  }

  function normalizeInput(input) {
    if (typeof input === "string") return { rawInput: input };
    return { ...(input || {}), rawInput: String((input || {}).rawInput || (input || {}).command || "").trim() };
  }

  function actionForText(text = "") {
    const lower = String(text || "").toLowerCase();
    if (/\b(chest pain|trouble breathing|can't breathe|cannot breathe|stroke|suicide|severe bleeding|emergency|911)\b/.test(lower)) {
      return { actionType: "emergency_boundary", level: ACTION_LEVELS.FIVE_EMERGENCY, sourceType: "emergency_boundary", title: "Emergency Boundary" };
    }
    if (/\b(fhir|chart|medical record|clinical record|ehr|epic|cerner)\b/.test(lower)) {
      return { actionType: "prepare_fhir_chart_summary", level: ACTION_LEVELS.TWO_PROVIDER_REVIEW, sourceType: "ehr_fhir", title: "Clinical Records / FHIR" };
    }
    if (/\b(hie|outside record|outside records|exchange record|tefca)\b/.test(lower)) {
      return { actionType: "prepare_hie_record_request", level: ACTION_LEVELS.TWO_PROVIDER_REVIEW, sourceType: "hie_exchange", title: "HIE Record Request" };
    }
    if (/\b(pharmacy|medication|medications|reconcile|reconciliation|refill|prescription)\b/.test(lower)) {
      return { actionType: "prepare_pharmacy_handoff", level: ACTION_LEVELS.TWO_PROVIDER_REVIEW, sourceType: "pharmacy_medication", title: "Pharmacy Handoff" };
    }
    if (/\b(rpm|rtm|blood pressure|bp|glucose|diabetes|hypertension|obesity|weight|remote patient|remote therapeutic|chronic|heart failure|copd)\b/.test(lower)) {
      return { actionType: "prepare_chronic_care_escalation", level: ACTION_LEVELS.TWO_PROVIDER_REVIEW, sourceType: "rpm_patient_generated_data", title: "Chronic Care / RPM Summary" };
    }
    if (/\b(telehealth|virtual care|video visit|video appointment|schedule visit|visit)\b/.test(lower)) {
      return { actionType: /\b(schedule|book)\b/.test(lower) ? "schedule_telehealth_visit" : "prepare_telehealth_visit", level: ACTION_LEVELS.THREE_EXTERNAL_HANDOFF, sourceType: "telehealth_video", title: "Telehealth Visit" };
    }
    if (/\b(consent|intake|form|forms)\b/.test(lower)) {
      return { actionType: "create_intake_form_request", level: ACTION_LEVELS.TWO_PROVIDER_REVIEW, sourceType: "forms_consent_intake", title: "Consent / Intake" };
    }
    if (/\b(lab|diagnostic|test result|imaging|x-ray|mri|ct scan|ultrasound)\b/.test(lower)) {
      return { actionType: /\b(imaging|x-ray|mri|ct|ultrasound)\b/.test(lower) ? "prepare_imaging_report_summary" : "prepare_lab_result_summary", level: ACTION_LEVELS.TWO_PROVIDER_REVIEW, sourceType: "labs_diagnostics_imaging", title: "Labs / Diagnostics" };
    }
    if (/\b(mobile clinic|clinic van|community health worker|chw)\b/.test(lower)) {
      return { actionType: "prepare_mobile_clinic_coordination", level: ACTION_LEVELS.TWO_PROVIDER_REVIEW, sourceType: "care_coordination", title: "Mobile Clinic Coordination" };
    }
    if (/\b(provider message|care team|patient reminder|secure message|visit summary|referral packet|refer)\b/.test(lower)) {
      const actionType = /\b(referral|refer)\b/.test(lower) ? "prepare_referral_packet" : /\b(visit summary)\b/.test(lower) ? "share_visit_summary" : "send_secure_message";
      return { actionType, level: ACTION_LEVELS.TWO_PROVIDER_REVIEW, sourceType: "secure_messaging", title: actionType === "prepare_referral_packet" ? "Referral Packet" : "Secure Message" };
    }
    if (/\b(healthcare source|source readiness|provider evidence|healthcare provider|connected healthcare|what healthcare)\b/.test(lower)) {
      return { actionType: "show_provider_evidence", level: ACTION_LEVELS.ONE_PREPARE, sourceType: "provider_evidence", title: "Healthcare Provider Evidence" };
    }
    return { actionType: "prepare_healthcare_collaboration_packet", level: ACTION_LEVELS.ONE_PREPARE, sourceType: "care_coordination", title: "Healthcare Collaboration Packet" };
  }

  function shouldHandleBeforeLegacy(command = "") {
    return isHealthcareCollaborationCommand(command);
  }

  function isHealthcareCollaborationCommand(command = "") {
    const lower = String(command || "").toLowerCase();
    return /\b(healthcare collaboration|provider message|care team|referral packet|fhir|ehr|epic|cerner|hie|outside records|telehealth|virtual care|pharmacy handoff|medication reconciliation|rpm|rtm|blood pressure|diabetes|hypertension|obesity|chronic care|mobile clinic|patient reminder|secure message|visit summary|clinical record|consent form|intake form|lab result|imaging report|community health worker|chw|chest pain|trouble breathing|can't breathe|cannot breathe|stroke|severe bleeding|emergency help)\b/.test(lower);
  }

  function providerRowsForSource(sourceType, env = {}) {
    return providerRegistry(env).providers.filter(item => item.sourceType === sourceType);
  }

  function buildPacket(action, input, env = {}) {
    const providers = providerRowsForSource(action.sourceType, env);
    const missing = [...new Set(providers.flatMap(item => item.missingEnvNames))];
    const liveReady = providers.some(item => item.liveConnectionStatus === "live_ready");
    return {
      packetId: `healthcare-packet-${Date.now()}`,
      title: action.title,
      actionType: action.actionType,
      actionLevel: action.level,
      sourceType: action.sourceType,
      requestedBy: input.userLabel || "Standard User",
      requestText: input.rawInput,
      safeSummary: safeSummaryForAction(action),
      dataNeeded: dataNeededForAction(action),
      sourceLabels: providers.map(item => `${item.providerName}: ${item.liveConnectionStatus}`),
      missingEnvNames: missing,
      providerConfigured: liveReady,
      providerEvidenceAvailable: providers.length > 0,
      clinicianReviewRequired: action.level >= ACTION_LEVELS.TWO_PROVIDER_REVIEW,
      confirmationRequired: action.level >= ACTION_LEVELS.THREE_EXTERNAL_HANDOFF,
      noDiagnosis: true,
      noPrescribing: true,
      noOrders: true,
      noClinicalWrite: true,
      noEmergencyDispatch: true,
      noExternalHandoffCompleted: true
    };
  }

  function safeSummaryForAction(action) {
    const map = {
      prepare_fhir_chart_summary: "Nexus can prepare a chart-summary request and source labels. It does not pull live PHI unless a configured FHIR connector, consent, BAA, and audit gates are active.",
      prepare_hie_record_request: "Nexus can prepare an outside-record request for review. It does not contact an HIE or provider automatically.",
      prepare_pharmacy_handoff: "Nexus can organize medication questions and pharmacy handoff notes. It does not prescribe, refill, or change medication.",
      prepare_chronic_care_escalation: "Nexus can organize chronic care, DM, obesity, HTN, RPM, and RTM signals for clinician review. It does not diagnose or change treatment.",
      prepare_telehealth_visit: "Nexus can prepare telehealth intake details and next-step review. It does not create a live visit unless the provider connector and confirmation gates are active.",
      schedule_telehealth_visit: "Telehealth scheduling is gated. Nexus can prepare the request, but no appointment is booked without provider credentials, consent, confirmation, and audit.",
      create_intake_form_request: "Nexus can prepare intake and consent form requests. It does not send PHI unless provider and consent gates are active.",
      prepare_lab_result_summary: "Nexus can organize lab-result context for review. It does not interpret results as a diagnosis.",
      prepare_imaging_report_summary: "Nexus can organize imaging report context. It does not diagnose from images or reports.",
      prepare_mobile_clinic_coordination: "Nexus can prepare mobile clinic coordination details. It does not dispatch a clinic or transport.",
      send_secure_message: "Nexus can prepare a secure message draft. It does not send messages without confirmation and configured provider gates.",
      share_visit_summary: "Nexus can prepare a visit summary share packet. It does not share records automatically.",
      prepare_referral_packet: "Nexus can prepare a referral packet for provider review. It does not submit a referral automatically."
    };
    return map[action.actionType] || "Nexus can prepare a healthcare collaboration packet for review. It does not execute regulated actions automatically.";
  }

  function dataNeededForAction(action) {
    const common = ["person identity label", "consent status", "care context", "recipient/provider selection"];
    if (action.sourceType === "rpm_patient_generated_data") return ["reading type", "reading value", "timestamp", "symptoms if any", "clinician review destination"];
    if (action.sourceType === "pharmacy_medication") return ["medication list", "question or concern", "pharmacy destination", "clinician review status"];
    if (action.sourceType === "telehealth_video") return ["reason for visit", "preferred time", "provider destination", "consent and confirmation"];
    if (action.sourceType === "ehr_fhir") return ["record scope", "patient authorization", "FHIR connector", "audit purpose"];
    return common;
  }

  function statusForPreparedAction(action, env = {}, options = {}) {
    if (action.level === ACTION_LEVELS.FIVE_EMERGENCY) return "blocked_emergency_escalation";
    const providers = providerRowsForSource(action.sourceType, env);
    const liveReady = providers.some(item => item.liveConnectionStatus === "live_ready");
    const executionEnabled = providers.some(item => item.executionCurrentlyEnabled);
    if (!providers.length) return "prepared_local";
    if (action.level >= ACTION_LEVELS.THREE_EXTERNAL_HANDOFF && !options.confirmed) return "requires_confirmation";
    if (!liveReady) return "blocked_missing_credentials_or_compliance";
    if (action.level >= ACTION_LEVELS.TWO_PROVIDER_REVIEW && !options.clinicianReviewed) return "queued_for_clinician_review";
    if (!executionEnabled) return "prepared_live_ready_execution_disabled";
    return "ready_for_confirmed_provider_execution";
  }

  function makeReceipt(action, packet, status, options = {}) {
    const receipt = {
      receiptId: `healthcare-receipt-${Date.now()}-${receipts.length + 1}`,
      createdAt: new Date().toISOString(),
      actionType: action.actionType,
      status,
      packetId: packet.packetId,
      noDiagnosis: true,
      noPrescribing: true,
      noEmergencyDispatch: true,
      noExternalHandoffCompleted: !/^executed_/.test(status),
      confirmationCaptured: Boolean(options.confirmed),
      clinicianReviewed: Boolean(options.clinicianReviewed),
      auditEvent: "healthcare_collaboration_packet_prepared",
      sourceType: action.sourceType,
      missingEnvNames: packet.missingEnvNames
    };
    receipts.unshift(receipt);
    receipts.splice(12);
    return receipt;
  }

  function prepareAction(inputValue, options = {}) {
    const input = normalizeInput(inputValue);
    const env = options.env || {};
    const action = actionForText(input.rawInput);
    const packet = buildPacket(action, input, env);
    const status = statusForPreparedAction(action, env, options);
    const receipt = makeReceipt(action, packet, status, options);
    if (status === "queued_for_clinician_review" || action.level >= ACTION_LEVELS.TWO_PROVIDER_REVIEW) {
      clinicianReviewQueue.unshift({
        queueId: `clinician-review-${Date.now()}-${clinicianReviewQueue.length + 1}`,
        createdAt: receipt.createdAt,
        actionType: action.actionType,
        title: action.title,
        status: status === "blocked_emergency_escalation" ? "blocked_emergency" : "awaiting_review_or_configuration",
        packetId: packet.packetId,
        noExternalHandoffCompleted: true
      });
      clinicianReviewQueue.splice(12);
    }
    const result = {
      ok: status !== "failed",
      runtime: "nexus-healthcare-collaboration-runtime",
      status,
      message: messageForStatus(status, action),
      answer: messageForStatus(status, action),
      action,
      packet,
      receipt,
      registry: providerRegistry(env),
      sourceReadiness: sourceReadinessMatrix(env),
      fhirSandboxSummary: action.sourceType === "ehr_fhir" ? fhirSandboxSummary({ env }) : null,
      noExecutionAuthorized: true,
      noDiagnosis: true,
      noPrescribing: true,
      noEmergencyDispatch: true,
      noSecretValues: true
    };
    lastResult = result;
    return result;
  }

  function messageForStatus(status, action) {
    if (status === "blocked_emergency_escalation") {
      return "This may be urgent. Nexus cannot handle emergencies or dispatch services. Please contact local emergency services now. Routine telehealth handling is blocked.";
    }
    if (status === "requires_confirmation") {
      return `${action.title} is prepared, but external provider action requires explicit confirmation, consent, credentials, and audit. Nothing was sent or scheduled.`;
    }
    if (status === "blocked_missing_credentials_or_compliance") {
      return `${action.title} is prepared locally. Live provider collaboration is blocked until credentials, BAA/PHI gates, consent, confirmation, and audit are configured. No external healthcare action was executed.`;
    }
    if (status === "queued_for_clinician_review") {
      return `${action.title} is prepared and queued for clinician review. Nexus did not diagnose, prescribe, send, schedule, or submit anything. No external healthcare action was executed.`;
    }
    if (status === "prepared_live_ready_execution_disabled") {
      return `${action.title} is live-ready but execution remains disabled until final confirmation and execution flags are active. No external healthcare action was executed.`;
    }
    return `${action.title} is prepared locally with provider evidence and safety gates. No external healthcare action was executed.`;
  }

  function attemptExecution(inputValue, options = {}) {
    const result = prepareAction(inputValue, options);
    const level = result.action.level;
    if (level === ACTION_LEVELS.FIVE_EMERGENCY) return result;
    if (level >= ACTION_LEVELS.TWO_PROVIDER_REVIEW && !options.clinicianReviewed) {
      result.status = "blocked_clinician_review_required";
      result.message = "Clinician review is required before this healthcare collaboration action can move forward. Nothing was executed.";
      result.answer = result.message;
      result.noExecutionAuthorized = true;
      return result;
    }
    if (level >= ACTION_LEVELS.THREE_EXTERNAL_HANDOFF && !options.confirmed) {
      result.status = "blocked_confirmation_required";
      result.message = "Explicit confirmation is required before any external provider handoff. Nothing was executed.";
      result.answer = result.message;
      result.noExecutionAuthorized = true;
      return result;
    }
    if (!result.registry.providers.some(item => item.sourceType === result.action.sourceType && item.executionCurrentlyEnabled)) {
      result.status = "blocked_execution_disabled";
      result.message = "Provider execution is not enabled for this lane. Nexus prepared the packet only.";
      result.answer = result.message;
      result.noExecutionAuthorized = true;
      return result;
    }
    result.status = "ready_for_provider_execution_but_not_sent_by_runtime";
    result.message = "All gates appear satisfied, but this runtime returns a final review packet instead of silently executing healthcare actions.";
    result.answer = result.message;
    result.noExecutionAuthorized = false;
    return result;
  }

  async function processCommand(command = "", options = {}) {
    return prepareAction({ rawInput: command }, options);
  }

  function adapterFor(providerId) {
    const providerDef = PROVIDERS.find(item => item.id === providerId) || PROVIDERS[0];
    return {
      id: providerDef.adapter,
      providerId: providerDef.id,
      displayName: providerDef.name,
      getStatus: env => providerReadiness(providerDef, env),
      testConnection: env => ({
        ok: providerReadiness(providerDef, env).configured,
        status: providerReadiness(providerDef, env).liveConnectionStatus,
        missingEnvNames: providerReadiness(providerDef, env).missingEnvNames,
        noSecretValues: true
      }),
      prepare: (input, options) => prepareAction(input, options),
      execute: (input, options) => attemptExecution(input, options),
      buildReceipt: (action, packet, status, options) => makeReceipt(action, packet, status, options),
      explainBlockedState: env => providerReadiness(providerDef, env)
    };
  }

  const adapters = Object.freeze(PROVIDERS.reduce((map, item) => {
    map[item.id] = adapterFor(item.id);
    return map;
  }, {}));

  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function setText(selector, value) {
    const el = root?.document?.querySelector?.(selector);
    if (el) el.textContent = value;
  }

  function mount() {
    const doc = root?.document;
    const panel = doc?.querySelector?.("[data-nexus-healthcare-collaboration-runtime]");
    if (!panel) return null;
    renderCards(panel);
    renderSources(sourceReadinessMatrix(), panel);
    renderEvidence(providerEvidence(), panel);
    renderQueue(panel);
    renderReceipts(panel);
    setText("[data-nexus-healthcare-status]", "Healthcare collaboration ready locally; live actions gated.");
    return panel;
  }

  function renderCards(panel) {
    const target = panel.querySelector("[data-nexus-healthcare-cards]");
    if (!target) return;
    target.innerHTML = RUNTIME_CARDS.map(item => `
      <article class="nexus-healthcare-collaboration-card" data-nexus-healthcare-card="${escapeHtml(item.id)}" data-nexus-healthcare-action-type="${escapeHtml(item.actionType)}">
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.description)}</p>
          <small>${escapeHtml(item.sourceType.replace(/_/g, " "))}</small>
        </div>
        <div class="nexus-healthcare-collaboration-card-actions">
          <button type="button" data-nexus-healthcare-action="prepare" data-nexus-healthcare-action-type="${escapeHtml(item.actionType)}">Prepare</button>
          <button type="button" data-nexus-healthcare-action="review" data-nexus-healthcare-action-type="${escapeHtml(item.actionType)}">Review</button>
          <button type="button" data-nexus-healthcare-action="execute-gate" data-nexus-healthcare-action-type="${escapeHtml(item.actionType)}">Check gate</button>
        </div>
      </article>
    `).join("");
  }

  function renderSources(matrix, panel = root?.document?.querySelector?.("[data-nexus-healthcare-collaboration-runtime]")) {
    const target = panel?.querySelector?.("[data-nexus-healthcare-sources]");
    if (!target) return;
    target.innerHTML = matrix.rows.map(row => `
      <span class="nexus-healthcare-source-row">
        <b>${escapeHtml(row.sourceType.replace(/_/g, " "))}</b>
        <small>${escapeHtml(row.status)} - missing: ${escapeHtml(row.missingEnvNames.join(", ") || "none")}</small>
      </span>
    `).join("");
  }

  function renderEvidence(evidence, panel = root?.document?.querySelector?.("[data-nexus-healthcare-collaboration-runtime]")) {
    const target = panel?.querySelector?.("[data-nexus-healthcare-evidence]");
    if (!target) return;
    target.innerHTML = evidence.providers.slice(0, 8).map(item => `
      <span class="nexus-healthcare-evidence-row">
        <b>${escapeHtml(item.providerName)}</b>
        <small>${escapeHtml(item.status)} - ${escapeHtml(item.sourceType.replace(/_/g, " "))}</small>
      </span>
    `).join("");
  }

  function renderQueue(panel = root?.document?.querySelector?.("[data-nexus-healthcare-collaboration-runtime]")) {
    const target = panel?.querySelector?.("[data-nexus-healthcare-clinician-queue]");
    if (!target) return;
    target.innerHTML = clinicianReviewQueue.length
      ? clinicianReviewQueue.map(item => `<span><b>${escapeHtml(item.title)}</b><small>${escapeHtml(item.status)} - ${escapeHtml(item.packetId)}</small></span>`).join("")
      : "<span><b>No clinician review items yet</b><small>Prepared regulated healthcare packets appear here before external action.</small></span>";
  }

  function renderReceipts(panel = root?.document?.querySelector?.("[data-nexus-healthcare-collaboration-runtime]")) {
    const target = panel?.querySelector?.("[data-nexus-healthcare-receipts]");
    if (!target) return;
    target.innerHTML = receipts.length
      ? receipts.slice(0, 6).map(item => `<span><b>${escapeHtml(item.actionType)}</b><small>${escapeHtml(item.status)} - ${escapeHtml(item.receiptId)}</small></span>`).join("")
      : "<span><b>No healthcare receipts yet</b><small>Receipts appear after Nexus prepares a packet or checks a gate.</small></span>";
  }

  function render(result, panel = root?.document?.querySelector?.("[data-nexus-healthcare-collaboration-runtime]")) {
    if (!panel || !result) return;
    const target = panel.querySelector("[data-nexus-healthcare-result]");
    if (target) {
      target.innerHTML = `
        <strong>${escapeHtml(result.packet?.title || "Healthcare collaboration")}</strong>
        <p>${escapeHtml(result.message || "")}</p>
        <dl>
          <dt>Status</dt><dd>${escapeHtml(result.status)}</dd>
          <dt>Action</dt><dd>${escapeHtml(result.action?.actionType || "")}</dd>
          <dt>Missing config</dt><dd>${escapeHtml((result.packet?.missingEnvNames || []).join(", ") || "none")}</dd>
          <dt>Receipt</dt><dd>${escapeHtml(result.receipt?.receiptId || "")}</dd>
        </dl>
      `;
    }
    renderSources(result.sourceReadiness || sourceReadinessMatrix(), panel);
    renderEvidence(providerEvidence(), panel);
    renderQueue(panel);
    renderReceipts(panel);
  }

  async function refreshStatus() {
    const panel = mount();
    try {
      const response = await root.fetch?.("/api/healthcare-collaboration/status");
      const status = await response?.json?.();
      if (status?.sourceReadiness) renderSources(status.sourceReadiness, panel);
      if (status?.providerEvidence) renderEvidence(status.providerEvidence, panel);
      setText("[data-nexus-healthcare-status]", status?.flags?.healthcareCollaborationEnabled ? "Healthcare collaboration configured; actions still gated." : "Healthcare collaboration local-ready; live provider execution disabled.");
      return status;
    } catch (error) {
      setText("[data-nexus-healthcare-status]", "Healthcare status unavailable locally; safety gates remain active.");
      return { ok: false, error: "status_unavailable" };
    }
  }

  function handlePanelAction(actionName, actionType) {
    const command = actionType ? `${actionType.replace(/_/g, " ")} healthcare collaboration` : "show healthcare provider evidence";
    const result = actionName === "execute-gate"
      ? attemptExecution(command, { confirmed: false, clinicianReviewed: false })
      : prepareAction(command, {});
    render(result);
    return result;
  }

  function getReceipts() {
    return receipts.slice();
  }

  function getClinicianReviewQueue() {
    return clinicianReviewQueue.slice();
  }

  return Object.freeze({
    GLOBAL_FLAGS,
    ACTION_LEVELS,
    SOURCE_TYPES,
    PROVIDERS,
    RUNTIME_CARDS,
    providerRegistry,
    sourceReadinessMatrix,
    providerEvidence,
    fhirSandboxSummary,
    prepareAction,
    attemptExecution,
    process: processCommand,
    isHealthcareCollaborationCommand,
    shouldHandleBeforeLegacy,
    adapters,
    mount,
    render,
    refreshStatus,
    handlePanelAction,
    getReceipts,
    getClinicianReviewQueue,
    getLastResult: () => lastResult
  });
});
