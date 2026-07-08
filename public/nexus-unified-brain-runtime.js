(function initNexusUnifiedBrainRuntime(root, factory) {
  const runtime = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  if (root) {
    root.NexusUnifiedBrainRuntime = runtime;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusUnifiedBrainRuntimeFactory(root) {
  "use strict";

  const DOMAINS = Object.freeze([
    "communication",
    "healthcare",
    "agriculture",
    "mobile_health",
    "pharmacy",
    "learning",
    "workforce_jobs",
    "marketplace_trade",
    "logistics_shipment",
    "drone_field_operations",
    "provider_admin",
    "general_help",
    "emergency_safety",
    "unknown_missing_context"
  ]);

  const SAFETY_LEVELS = Object.freeze({
    PREPARE_ONLY: "prepare_only",
    COMMUNICATION_GATED: "communication_gated",
    PROVIDER_REVIEW: "provider_review",
    CLINICIAN_REVIEW: "clinician_review",
    EXPERT_ADMIN_REVIEW: "expert_admin_review",
    EXTERNAL_EXECUTION_BLOCKED: "external_execution_blocked",
    EMERGENCY_ESCALATION: "emergency_escalation"
  });

  const missionMemory = {
    activeMission: null,
    recentFacts: [],
    preparedPackets: [],
    receipts: [],
    blockedItems: [],
    recentMissions: []
  };

  let lastResult = null;

  function now() {
    return new Date().toISOString();
  }

  function normalizeText(input) {
    return String(input || "").replace(/\s+/g, " ").trim();
  }

  function makeId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function unique(values) {
    return [...new Set(values.filter(Boolean))];
  }

  function classifyDomains(input = "") {
    const text = normalizeText(input).toLowerCase();
    const domains = [];
    if (/\b(chest pain|stroke|face droop|cannot breathe|severe shortness of breath|loss of consciousness|allergic reaction|suicidal|overdose|emergency)\b/.test(text)) domains.push("emergency_safety");
    if (/\b(call|message|sms|whatsapp|telegram|email|contact|send|share|call script|notify)\b/.test(text)) domains.push("communication");
    if (/\b(health|patient|blood pressure|hypertension|diabetes|glucose|obesity|weight|chronic|rpm|rtm|clinic|doctor|provider|care team|telehealth|medical)\b/.test(text)) domains.push("healthcare");
    if (/\b(mobile clinic|mobile care|clinic van|field clinic)\b/.test(text)) domains.push("mobile_health");
    if (/\b(pharmacy|medicine|medication|prescription|refill|drug store)\b/.test(text)) domains.push("pharmacy");
    if (/\b(farm|farmer|crop|tomato|maize|plants|soil|irrigation|pest|disease|livestock|extension|agriculture)\b/.test(text)) domains.push("agriculture");
    if (/\b(buyer|seller|marketplace|agritrade|sell|sale|offer|trade|market)\b/.test(text)) domains.push("marketplace_trade");
    if (/\b(shipment|shipping|logistics|delivery|cold chain|carrier|route|pickup)\b/.test(text)) domains.push("logistics_shipment");
    if (/\b(drone|field scan|field observation|imagery|scouting|flight)\b/.test(text)) domains.push("drone_field_operations");
    if (/\b(training|learn|learning|literacy|course|class|program|certification)\b/.test(text)) domains.push("learning");
    if (/\b(job|jobs|workforce|employment|employer|resume|career|hiring)\b/.test(text)) domains.push("workforce_jobs");
    if (/\b(admin|provider evidence|review queue|blocked|what is blocked|case so far|what do you know|what can you do|what do you need)\b/.test(text)) domains.push("provider_admin");
    if (!domains.length) domains.push("general_help");
    return unique(domains);
  }

  function isUnifiedBrainCommand(command = "") {
    const text = normalizeText(command).toLowerCase();
    if (!text) return false;
    if (/\b(prepare everything|do everything|show me the plan|create receipts|active mission|case so far|what is blocked|what can you do now|what do you need from me|continue mission|start mission|mission plan|send what is safe)\b/.test(text)) return true;
    const domains = classifyDomains(text).filter(domain => !["general_help", "provider_admin"].includes(domain));
    return domains.length >= 2;
  }

  function shouldHandleBeforeLegacy(command = "") {
    return isUnifiedBrainCommand(command);
  }

  function detectSafetyFlags(input = "", domains = []) {
    const text = normalizeText(input).toLowerCase();
    return {
      emergency: domains.includes("emergency_safety"),
      regulatedAgriculture: /\b(pesticide|chemical spray|spraying|veterinary treatment|crop insurance claim|loan|grant submission|customs|export declaration|drone spraying)\b/.test(text),
      marketplacePayment: /\b(buy|pay|payment|refund|cancel transaction|accept offer|checkout|escrow)\b/.test(text),
      communication: domains.includes("communication"),
      clinical: domains.includes("healthcare") || domains.includes("pharmacy") || domains.includes("mobile_health"),
      noFakeExecution: true
    };
  }

  function requiredInputsForDomains(domains = []) {
    const required = [];
    if (domains.includes("agriculture")) required.push("farm or field location text", "crop/livestock context", "observed issue or goal");
    if (domains.includes("marketplace_trade")) required.push("commodity", "quantity", "quality/grade", "buyer or seller preference");
    if (domains.includes("logistics_shipment")) required.push("origin", "destination", "commodity", "pickup/delivery timing");
    if (domains.includes("healthcare")) required.push("symptom or concern", "current reading if available", "preferred provider/clinic context");
    if (domains.includes("pharmacy")) required.push("medication question", "pharmacy preference", "provider review need");
    if (domains.includes("learning") || domains.includes("workforce_jobs")) required.push("job or training goal", "current skill level", "location or remote preference");
    if (domains.includes("communication")) required.push("recipient", "channel", "message purpose", "confirmation before send");
    return unique(required);
  }

  function inferAvailableInputs(input = "") {
    const text = normalizeText(input);
    const available = [];
    if (/\b(tomato|maize|corn|rice|beans|crop|livestock|cattle|goat|poultry)\b/i.test(text)) available.push("agriculture subject");
    if (/\b(blood pressure|hypertension|diabetes|glucose|obesity|rpm|rtm|pharmacy|clinic)\b/i.test(text)) available.push("health concern");
    if (/\b(buyer|seller|marketplace|sell|shipment|delivery)\b/i.test(text)) available.push("trade/logistics intent");
    if (/\b(job|training|course|workforce|learning)\b/i.test(text)) available.push("workforce/learning intent");
    if (/\b(message|call|email|sms|whatsapp|contact)\b/i.test(text)) available.push("communication intent");
    return unique(available);
  }

  function missingInputs(required = [], available = []) {
    const text = available.join(" ").toLowerCase();
    return required.filter(item => !text.includes(item.split(" ")[0].toLowerCase()));
  }

  function getRuntimes(options = {}) {
    return {
      communication: options.communicationRuntime || root?.NexusFullCommunicationRuntime,
      agriculture: options.agricultureRuntime || root?.NexusAgricultureCollaborationRuntime,
      healthcare: options.healthcareRuntime || root?.NexusHealthcareCollaborationRuntime
    };
  }

  function runtimeAvailable(runtime) {
    return Boolean(runtime && (typeof runtime.process === "function" || typeof runtime.prepareAction === "function" || typeof runtime.prepareMessage === "function"));
  }

  function runtimeStatus(options = {}) {
    const runtimes = getRuntimes(options);
    const communicationStatus = runtimes.communication?.communicationProviderReadiness?.(options.env || {}) || null;
    const agricultureStatus = runtimes.agriculture?.providerRegistry?.(options.env || {}) || null;
    const healthcareStatus = runtimes.healthcare?.providerRegistry?.(options.env || {}) || null;
    return {
      ok: true,
      runtime: "nexus-unified-brain-runtime",
      availableRuntimes: {
        communication: runtimeAvailable(runtimes.communication),
        agriculture: runtimeAvailable(runtimes.agriculture),
        healthcare: runtimeAvailable(runtimes.healthcare),
        workforceLearning: "local_fallback_available",
        marketplaceLogistics: "via_agriculture_and_local_fallback"
      },
      supportedDomains: DOMAINS,
      routingMap: {
        communication: "Nexus Full Communication Runtime",
        agriculture: "Nexus Agriculture Intelligence and Collaboration Runtime",
        healthcare: "Nexus Healthcare Collaboration Runtime",
        mobile_health: "Healthcare Collaboration Runtime plus communication draft",
        pharmacy: "Healthcare Collaboration Runtime plus communication draft",
        learning: "Local learning/workforce fallback unless provider runtime exists",
        workforce_jobs: "Local workforce fallback plus communication draft",
        marketplace_trade: "Agriculture Runtime marketplace workflow",
        logistics_shipment: "Agriculture Runtime logistics workflow",
        drone_field_operations: "Agriculture Runtime drone workflow"
      },
      providerReadiness: {
        communication: communicationStatus ? summarizeCommunicationReadiness(communicationStatus) : "runtime_not_found",
        agriculture: agricultureStatus ? summarizeProviderRegistry(agricultureStatus) : "runtime_not_found",
        healthcare: healthcareStatus ? summarizeProviderRegistry(healthcareStatus) : "runtime_not_found"
      },
      safetyGates: [
        "External action requires confirmation",
        "Clinical review required for healthcare execution",
        "Expert/admin review required for regulated agriculture",
        "No fake live source claims",
        "No silent communication send",
        "No marketplace/payment/logistics/drone execution without configured providers"
      ],
      noSecretValues: true,
      noFakeExecution: true
    };
  }

  function summarizeCommunicationReadiness(status = {}) {
    const ready = Number(status.readyCount || 0);
    const total = Number(status.totalCount || status.lanes?.length || 0);
    return `${ready}/${total} communication lanes ready; live sending remains confirmation-gated`;
  }

  function summarizeProviderRegistry(registry = {}) {
    const providers = registry.providers || [];
    const live = providers.filter(provider => provider.executionMode === "live").length;
    return `${live}/${providers.length} providers live/source-ready; execution remains gated`;
  }

  function selectTemplate(domains = [], input = "") {
    const text = normalizeText(input).toLowerCase();
    if (domains.includes("emergency_safety")) return "emergency_safety";
    if (domains.includes("agriculture") && domains.includes("healthcare")) return "farmer_health_farm";
    if (domains.includes("agriculture") && (domains.includes("marketplace_trade") || /sell what i can|sell/.test(text))) return "farmer_crop_to_market";
    if (domains.includes("healthcare") && (domains.includes("pharmacy") || domains.includes("mobile_health"))) return "patient_mobile_care";
    if (domains.includes("learning") && domains.includes("workforce_jobs")) return "job_seeker_learning_to_employment";
    if (domains.includes("marketplace_trade") && domains.includes("logistics_shipment")) return "marketplace_shipment";
    if (domains.includes("drone_field_operations")) return "drone_field_observation";
    return "general_mission";
  }

  function buildSteps(template, domains = [], input = "") {
    const plan = {
      emergency_safety: [
        step("emergency_safety_check", "Emergency safety check", "healthcare", "emergency symptoms", SAFETY_LEVELS.EMERGENCY_ESCALATION),
        step("safety_receipt", "Create safety receipt", "unified_brain", "safety receipt", SAFETY_LEVELS.PREPARE_ONLY)
      ],
      farmer_crop_to_market: [
        step("crop_issue_intake", "Prepare crop issue intake", "agriculture", "Help me with a crop issue", SAFETY_LEVELS.PREPARE_ONLY),
        step("pest_disease_advisory", "Prepare pest/disease advisory", "agriculture", "Prepare a pest disease advisory", SAFETY_LEVELS.EXPERT_ADMIN_REVIEW),
        step("extension_handoff", "Prepare extension-service handoff", "agriculture", "Prepare extension service handoff", SAFETY_LEVELS.COMMUNICATION_GATED),
        step("marketplace_listing_draft", "Prepare marketplace listing draft", "agriculture", "Create a marketplace listing", SAFETY_LEVELS.EXTERNAL_EXECUTION_BLOCKED),
        step("buyer_message_draft", "Prepare buyer message", "communication", "Message a buyer about available crop", SAFETY_LEVELS.COMMUNICATION_GATED),
        step("shipment_plan", "Prepare shipment options", "agriculture", "Plan a shipment", SAFETY_LEVELS.EXTERNAL_EXECUTION_BLOCKED)
      ],
      patient_mobile_care: [
        step("health_checkin_summary", "Prepare chronic care check-in", "healthcare", "Prepare chronic care check-in summary", SAFETY_LEVELS.CLINICIAN_REVIEW),
        step("clinic_message_draft", "Prepare clinic message", "communication", "Prepare a clinic message", SAFETY_LEVELS.COMMUNICATION_GATED),
        step("pharmacy_call_script", "Prepare pharmacy call script", "communication", "Prepare a pharmacy call script", SAFETY_LEVELS.COMMUNICATION_GATED),
        step("telehealth_mobile_packet", "Prepare telehealth/mobile care packet", "healthcare", "Prepare mobile clinic coordination", SAFETY_LEVELS.PROVIDER_REVIEW),
        step("chronic_followup", "Prepare chronic care follow-up", "healthcare", "Prepare chronic care escalation", SAFETY_LEVELS.CLINICIAN_REVIEW)
      ],
      farmer_health_farm: [
        step("health_triage_packet", "Prepare health concern packet", "healthcare", "Prepare health access packet", SAFETY_LEVELS.CLINICIAN_REVIEW),
        step("farm_issue_packet", "Prepare farm issue packet", "agriculture", "Help me with a crop issue", SAFETY_LEVELS.PREPARE_ONLY),
        step("clinic_message", "Prepare clinic message", "communication", "Prepare clinic message", SAFETY_LEVELS.COMMUNICATION_GATED),
        step("extension_message", "Prepare extension-service message", "agriculture", "Prepare extension service handoff", SAFETY_LEVELS.COMMUNICATION_GATED)
      ],
      job_seeker_learning_to_employment: [
        step("job_goal_intake", "Identify job goal", "local_workforce", "Identify job goal", SAFETY_LEVELS.PREPARE_ONLY),
        step("training_recommendation", "Prepare training recommendation", "local_workforce", "Prepare training recommendation", SAFETY_LEVELS.PREPARE_ONLY),
        step("job_support_packet", "Prepare job support packet", "local_workforce", "Prepare job support packet", SAFETY_LEVELS.PREPARE_ONLY),
        step("employer_message", "Prepare employer message", "communication", "Prepare employer message", SAFETY_LEVELS.COMMUNICATION_GATED)
      ],
      marketplace_shipment: [
        step("trade_match_summary", "Prepare trade match summary", "agriculture", "Find a trade match", SAFETY_LEVELS.EXTERNAL_EXECUTION_BLOCKED),
        step("buyer_seller_messages", "Prepare buyer/seller messages", "communication", "Prepare buyer seller message", SAFETY_LEVELS.COMMUNICATION_GATED),
        step("shipment_plan", "Prepare shipment plan", "agriculture", "Plan a shipment", SAFETY_LEVELS.EXTERNAL_EXECUTION_BLOCKED),
        step("cold_chain_checklist", "Prepare cold chain checklist", "agriculture", "Prepare cold chain checklist", SAFETY_LEVELS.EXTERNAL_EXECUTION_BLOCKED),
        step("logistics_message", "Prepare logistics message", "communication", "Prepare logistics message", SAFETY_LEVELS.COMMUNICATION_GATED)
      ],
      drone_field_observation: [
        step("field_observation_packet", "Prepare field observation packet", "agriculture", "Prepare a drone field observation", SAFETY_LEVELS.EXPERT_ADMIN_REVIEW),
        step("drone_mission_plan", "Prepare drone mission plan draft", "agriculture", "Prepare drone mission plan", SAFETY_LEVELS.EXTERNAL_EXECUTION_BLOCKED),
        step("pilot_admin_review", "Queue pilot/admin review", "unified_brain", "Queue drone mission for review", SAFETY_LEVELS.EXPERT_ADMIN_REVIEW),
        step("agronomist_message", "Prepare extension/agronomist message", "communication", "Prepare extension service message", SAFETY_LEVELS.COMMUNICATION_GATED)
      ],
      general_mission: [
        step("understand_goal", "Summarize what Nexus understood", "unified_brain", input || "general help", SAFETY_LEVELS.PREPARE_ONLY),
        step("prepare_next_step", "Prepare next safe step", primaryRuntimeForDomains(domains), input || "prepare next step", SAFETY_LEVELS.PREPARE_ONLY)
      ]
    };
    return (plan[template] || plan.general_mission).map((item, index) => ({ ...item, order: index + 1 }));
  }

  function step(id, title, runtime, command, safetyLevel) {
    return {
      stepId: id,
      title,
      runtime,
      command,
      safetyLevel,
      status: "planned",
      confirmationRequired: [SAFETY_LEVELS.COMMUNICATION_GATED, SAFETY_LEVELS.EXTERNAL_EXECUTION_BLOCKED].includes(safetyLevel),
      confirmationCaptured: false,
      reviewRequired: [SAFETY_LEVELS.PROVIDER_REVIEW, SAFETY_LEVELS.CLINICIAN_REVIEW, SAFETY_LEVELS.EXPERT_ADMIN_REVIEW, SAFETY_LEVELS.EMERGENCY_ESCALATION].includes(safetyLevel),
      reviewType: reviewTypeForSafety(safetyLevel),
      providerRequired: safetyLevel !== SAFETY_LEVELS.PREPARE_ONLY,
      providerConfigured: false,
      sourceMode: "localFallback",
      canExecute: false,
      blockedReason: "",
      preparedPayload: null,
      receiptId: null
    };
  }

  function reviewTypeForSafety(level) {
    if (level === SAFETY_LEVELS.CLINICIAN_REVIEW || level === SAFETY_LEVELS.EMERGENCY_ESCALATION) return "clinician_review";
    if (level === SAFETY_LEVELS.EXPERT_ADMIN_REVIEW) return "expert_admin_review";
    if (level === SAFETY_LEVELS.PROVIDER_REVIEW) return "provider_review";
    return "not_required";
  }

  function primaryRuntimeForDomains(domains = []) {
    if (domains.includes("agriculture")) return "agriculture";
    if (domains.includes("healthcare") || domains.includes("pharmacy") || domains.includes("mobile_health")) return "healthcare";
    if (domains.includes("communication")) return "communication";
    return "unified_brain";
  }

  function routeStep(stepItem, options = {}) {
    const runtimes = getRuntimes(options);
    if (stepItem.runtime === "agriculture" && runtimeAvailable(runtimes.agriculture)) {
      const result = runtimes.agriculture.prepareAction(stepItem.command, { env: options.env || {}, confirmed: false });
      return normalizeStepResult(stepItem, result, "agriculture");
    }
    if (stepItem.runtime === "healthcare" && runtimeAvailable(runtimes.healthcare)) {
      const result = runtimes.healthcare.prepareAction(stepItem.command, { env: options.env || {}, confirmed: false, clinicianReviewed: false });
      return normalizeStepResult(stepItem, result, "healthcare");
    }
    if (stepItem.runtime === "communication" && runtimeAvailable(runtimes.communication)) {
      const result = runtimes.communication.prepareMessage({
        rawInput: stepItem.command,
        body: stepItem.command,
        channel: inferChannel(stepItem.command),
        recipient: inferRecipient(stepItem.command),
        confirmed: false
      }, { env: options.env || {}, inputType: "message_action" });
      return normalizeStepResult(stepItem, result, "communication");
    }
    return {
      ...stepItem,
      status: stepItem.safetyLevel === SAFETY_LEVELS.EMERGENCY_ESCALATION ? "blocked_safety_escalation" : "prepared_local_fallback",
      providerConfigured: false,
      sourceMode: "localFallback",
      canExecute: false,
      blockedReason: fallbackBlockedReason(stepItem),
      preparedPayload: localPayloadForStep(stepItem),
      receiptId: makeId("brain-local-step-receipt")
    };
  }

  function inferChannel(command = "") {
    const text = command.toLowerCase();
    if (/whatsapp/.test(text)) return "whatsapp";
    if (/sms|text/.test(text)) return "sms";
    if (/email/.test(text)) return "email";
    if (/call/.test(text)) return "call_script";
    return "provider_message";
  }

  function inferRecipient(command = "") {
    const text = command.toLowerCase();
    if (/buyer/.test(text)) return "buyer";
    if (/seller/.test(text)) return "seller";
    if (/clinic|provider/.test(text)) return "clinic/provider";
    if (/pharmacy/.test(text)) return "pharmacy";
    if (/employer/.test(text)) return "employer";
    if (/extension|agronomist/.test(text)) return "extension/agronomist";
    return "recipient to confirm";
  }

  function normalizeStepResult(stepItem, result = {}, runtimeName) {
    const receiptId = result.receipt?.receiptId || result.receipt?.id || result.communicationReceiptId || result.requestId || makeId(`${runtimeName}-step-receipt`);
    const statusText = result.status || result.resultStatus || "prepared_local";
    const providerConfigured = Boolean(result.providerConfigured || result.executionMode === "live" || result.sourceMode === "live");
    const sourceMode = result.executionMode || result.sourceMode || result.preparedPayload?.sourceMode || "localFallback";
    const blocked = /blocked|missing|required|queued|review|gated/i.test(statusText) || stepItem.providerRequired || stepItem.confirmationRequired || stepItem.reviewRequired;
    return {
      ...stepItem,
      status: blocked ? statusText : "prepared",
      providerConfigured,
      sourceMode,
      canExecute: false,
      blockedReason: blocked ? blockedReasonFromResult(result, stepItem) : "",
      preparedPayload: result.preparedPayload || result.draft || result.response || result,
      receiptId
    };
  }

  function readableStatus(value) {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (typeof value === "number" || typeof value === "boolean") return String(value);
    if (typeof value === "object") {
      return value.userVisibleStatus
        || value.message
        || value.reason
        || value.status
        || value.summary
        || value.label
        || "";
    }
    return "";
  }

  function blockedReasonFromResult(result = {}, stepItem = {}) {
    return readableStatus(result.blockedReason)
      || readableStatus(result.userVisibleStatus)
      || readableStatus(result.confirmation)
      || (stepItem.confirmationRequired ? "External action requires confirmation and configured provider gates." : "")
      || (stepItem.reviewRequired ? "Review is required before execution." : "")
      || "Prepared locally; execution remains gated.";
  }

  function fallbackBlockedReason(stepItem = {}) {
    if (stepItem.safetyLevel === SAFETY_LEVELS.EMERGENCY_ESCALATION) return "Routine handling is blocked for emergency/safety language; seek local emergency services immediately.";
    if (stepItem.runtime === "local_workforce") return "Workforce/learning packet prepared locally; provider enrollment or employer contact requires configured provider and confirmation.";
    if (stepItem.runtime === "unified_brain") return "Brain step prepared locally in session memory.";
    return "Runtime or provider is not configured; Nexus prepared a local fallback only.";
  }

  function localPayloadForStep(stepItem = {}) {
    return {
      title: stepItem.title,
      command: stepItem.command,
      sourceMode: "localFallback",
      summary: `${stepItem.title} prepared locally by Nexus Unified Brain.`,
      noExternalActionCompleted: true,
      noFakeExecution: true
    };
  }

  function buildMissionReceipt(mission) {
    const receipt = {
      missionReceiptId: makeId("brain-mission-receipt"),
      missionId: mission.missionId,
      timestamp: now(),
      userGoal: mission.userGoal,
      domains: mission.domains,
      planSteps: mission.steps.map(item => item.title),
      preparedSteps: mission.steps.filter(item => /prepared|local|queued|blocked/.test(item.status)).map(item => item.stepId),
      executedSteps: [],
      blockedSteps: mission.steps.filter(item => item.blockedReason || item.confirmationRequired || item.reviewRequired).map(item => item.stepId),
      missingInformation: mission.missingInputs,
      providerReadiness: mission.providerReadiness,
      sourceModes: unique(mission.steps.map(item => item.sourceMode)),
      communicationReceiptIds: mission.steps.filter(item => item.runtime === "communication").map(item => item.receiptId).filter(Boolean),
      agricultureReceiptIds: mission.steps.filter(item => item.runtime === "agriculture").map(item => item.receiptId).filter(Boolean),
      healthcareReceiptIds: mission.steps.filter(item => item.runtime === "healthcare").map(item => item.receiptId).filter(Boolean),
      workforceReceiptIds: mission.steps.filter(item => item.runtime === "local_workforce").map(item => item.receiptId).filter(Boolean),
      confirmationStatus: "not_captured_for_external_actions",
      reviewRequirements: unique(mission.steps.map(item => item.reviewType).filter(item => item !== "not_required")),
      nextSteps: mission.nextSteps,
      outcome: "Mission prepared locally with truthful blocked states; no external action executed.",
      noSecretValues: true,
      noFakeExecution: true
    };
    missionMemory.receipts.unshift(receipt);
    missionMemory.receipts.splice(25);
    return receipt;
  }

  function createMissionPlan(input = "", options = {}) {
    const userGoal = normalizeText(typeof input === "string" ? input : input.rawInput || input.command || "");
    const domains = classifyDomains(userGoal);
    const safetyFlags = detectSafetyFlags(userGoal, domains);
    const template = selectTemplate(domains, userGoal);
    const requiredInputs = requiredInputsForDomains(domains);
    const availableInputs = inferAvailableInputs(userGoal);
    const missing = missingInputs(requiredInputs, availableInputs);
    const status = runtimeStatus(options);
    const baseSteps = buildSteps(template, domains, userGoal);
    const steps = baseSteps.map(item => routeStep(item, options));
    const blockedItems = steps.filter(item => item.blockedReason || item.confirmationRequired || item.reviewRequired);
    const mission = {
      ok: true,
      runtime: "nexus-unified-brain-runtime",
      missionId: makeId("nexus-mission"),
      userGoal,
      understoodGoal: understoodGoal(userGoal, domains),
      conversationalResponse: "",
      missionStatus: "",
      template,
      domains,
      steps,
      requiredInputs,
      availableInputs,
      missingInputs: missing,
      recommendedNextStep: recommendedNextStep(steps, missing),
      safetyFlags,
      providerReadiness: status.providerReadiness,
      executionReadiness: "external_actions_blocked_until_provider_confirmation_review_and_audit",
      preparedItems: steps.filter(item => item.preparedPayload).map(item => ({ stepId: item.stepId, title: item.title, status: item.status, receiptId: item.receiptId })),
      blockedItems,
      receipts: [],
      nextSteps: nextStepsForMission(steps, missing),
      noSecretValues: true,
      noFakeExecution: true,
      localSessionMemory: true,
      memoryLabel: "session/local mission memory only unless a configured persistence layer is active"
    };
    mission.conversationalResponse = conversationalSummary(mission);
    mission.missionStatus = missionStatus(mission);
    mission.receipt = buildMissionReceipt(mission);
    mission.receipts = [mission.receipt];
    missionMemory.activeMission = mission;
    missionMemory.recentMissions.unshift(mission);
    missionMemory.recentMissions.splice(10);
    missionMemory.preparedPackets.unshift(...mission.preparedItems);
    missionMemory.preparedPackets.splice(30);
    missionMemory.blockedItems.unshift(...blockedItems);
    missionMemory.blockedItems.splice(30);
    lastResult = mission;
    return mission;
  }

  function understoodGoal(goal, domains) {
    if (domains.includes("emergency_safety")) return "Nexus detected possible emergency/safety language and will block routine handling.";
    return `Nexus understood a ${domains.join(", ")} mission and prepared a safe multi-step plan.`;
  }

  function conversationalSummary(mission = {}) {
    const domains = mission.domains || [];
    if (domains.includes("emergency_safety")) {
      return "I noticed possible emergency or safety language. I cannot handle that as a routine workflow. Please contact local emergency services now if anyone may be in danger.";
    }
    if (domains.includes("agriculture") && domains.includes("marketplace_trade")) {
      return "I can help with that. I'll prepare a crop issue plan, create a safe advisory draft, prepare a buyer message, and set up a shipment planning checklist. I'll also show what needs more information or expert review.";
    }
    if (domains.includes("healthcare") || domains.includes("pharmacy") || domains.includes("mobile_health")) {
      return "I can help prepare a clinic message, a pharmacy call script, and a care follow-up packet. If you are having chest pain, severe shortness of breath, stroke symptoms, or feel unsafe, seek emergency help now.";
    }
    if (domains.includes("learning") || domains.includes("workforce_jobs")) {
      return "I can help turn that into a learning-to-employment plan. I'll identify training needs, prepare a job support packet, and draft an employer message if needed.";
    }
    if (domains.includes("communication")) {
      return "I can prepare the message or call script, show what still needs confirmation, and keep a receipt. I will not send or call without a connected provider and your approval.";
    }
    return "I can help organize this into a safe Nexus mission, prepare the next useful steps, show what is blocked, and keep receipts for what was prepared locally.";
  }

  function missionStatus(mission = {}) {
    if (!mission.missionId) return "New";
    if (mission.safetyFlags?.emergency) return "Blocked";
    if (mission.missingInputs?.length) return "Waiting on You";
    if (mission.blockedItems?.length) return "Ready to Review";
    return "Complete Locally";
  }

  function domainLabel(domain = "") {
    const labels = {
      communication: "Communication",
      healthcare: "Health",
      agriculture: "Agriculture",
      mobile_health: "Mobile Clinic",
      pharmacy: "Pharmacy",
      learning: "Learning",
      workforce_jobs: "Jobs",
      marketplace_trade: "Marketplace",
      logistics_shipment: "Logistics",
      drone_field_operations: "Field Observation",
      provider_admin: "Provider Review",
      general_help: "General Help",
      emergency_safety: "Safety"
    };
    return labels[domain] || "Nexus";
  }

  function sourceLabel(sourceMode = "") {
    if (/live/i.test(sourceMode)) return "Connected source";
    if (/synthetic|sample/i.test(sourceMode)) return "Sample data only";
    if (/fallback|local/i.test(sourceMode)) return "Prepared locally";
    return "Prepared locally";
  }

  function statusLabel(step = {}) {
    if (step.safetyLevel === SAFETY_LEVELS.EMERGENCY_ESCALATION || /emergency|blocked_safety/i.test(step.status)) return "Blocked";
    if (step.reviewRequired || /review/i.test(step.status || "")) {
      if (step.reviewType === "clinician_review") return "Needs Clinician Review";
      if (step.reviewType === "expert_admin_review") return "Needs Expert Review";
      return "Needs Review";
    }
    if (step.providerRequired || /missing_credentials|provider/i.test(step.status || "")) return "Needs Provider";
    if (step.confirmationRequired || /confirmation|gated/i.test(step.status || "")) return "Needs Confirmation";
    if (/prepared|local/i.test(step.status || "")) return "Prepared";
    if (/done|complete/i.test(step.status || "")) return "Done Locally";
    return "Ready";
  }

  function plainStepExplanation(step = {}) {
    const reason = readableStatus(step.blockedReason);
    if (reason) return simplifyUserCopy(reason, step);
    if (step.runtime === "communication") return "Nexus prepared a communication draft. It was not sent.";
    if (step.runtime === "healthcare") return "Nexus prepared a health access packet for review. It is not a diagnosis or prescription.";
    if (step.runtime === "agriculture") return "Nexus prepared agriculture guidance or planning support.";
    if (step.runtime === "local_workforce") return "Nexus prepared a learning or workforce support packet.";
    return "Nexus prepared this locally for review.";
  }

  function simplifyUserCopy(value = "", step = {}) {
    const text = normalizeText(value)
      .replace(/\blocalFallback\b/g, "Prepared locally")
      .replace(/\bmissingEnv\b/g, "Provider not connected")
      .replace(/\bexecutionMode\b/g, "Action status")
      .replace(/\bclinicianReviewRequired\b/g, "A clinician must review this")
      .replace(/\bexpertReviewRequired\b/g, "An expert must review this")
      .replace(/\bcommunicationReceiptId\b/g, "Communication draft receipt")
      .replace(/blocked_missing_credentials_or_compliance/gi, "Provider or compliance gate not ready")
      .replace(/prepared_local_missing_credentials/gi, "Prepared locally; provider not connected")
      .replace(/prepared_local_fallback/gi, "Prepared locally")
      .replace(/queued_for_expert_review/gi, "Ready for expert review");
    if (/Review recipient, channel/i.test(text)) return "Review recipient, channel, and message purpose before any send.";
    if (/Review is required/i.test(text)) return step.reviewType === "clinician_review" ? "A clinician must review this before any care action." : "An expert or admin reviewer must review this before any external action.";
    return text || "Prepared locally; review before external action.";
  }

  function preparedInsteadCopy(step = {}) {
    const title = step.title || "Next step";
    if (step.runtime === "communication") return `Prepared instead: ${title}. It was not sent because a provider connection and confirmation are required.`;
    if (step.runtime === "healthcare") return `Prepared instead: ${title}. Clinical or provider action is blocked until the right review, consent, and connection are active.`;
    if (step.runtime === "agriculture" && step.reviewRequired) return `Prepared instead: ${title}. Expert review is needed before this becomes a recommendation or handoff.`;
    if (step.runtime === "agriculture") return `Prepared instead: ${title}. Live provider or marketplace action is not connected yet.`;
    if (step.runtime === "local_workforce") return `Prepared instead: ${title}. Enrollment or employer contact still needs a connected provider and confirmation.`;
    return `Prepared instead: ${title}. External action remains gated.`;
  }

  function unlockCopy(step = {}) {
    const items = [];
    if (step.providerRequired || /provider|credential|missing/i.test(step.status || step.blockedReason || "")) items.push("connect provider");
    if (step.confirmationRequired) items.push("confirm action");
    if (step.reviewRequired) items.push(step.reviewType === "clinician_review" ? "clinician review" : "expert/admin review");
    if (!items.length) items.push("review the prepared packet");
    return `What unlocks this: ${items.join(", ")}.`;
  }

  function canDoNow(mission = {}) {
    const actions = [];
    if ((mission.domains || []).includes("communication") || mission.steps?.some(step => step.runtime === "communication")) actions.push("Prepare a message or call script");
    if ((mission.domains || []).includes("agriculture")) actions.push("Prepare crop advisory and farm planning support");
    if ((mission.domains || []).includes("healthcare") || (mission.domains || []).includes("pharmacy")) actions.push("Prepare a care packet, clinic message, or pharmacy script");
    if ((mission.domains || []).includes("marketplace_trade")) actions.push("Prepare listing, buyer message, and shipment checklist");
    if ((mission.domains || []).includes("learning") || (mission.domains || []).includes("workforce_jobs")) actions.push("Prepare training, job, and employer support packet");
    actions.push("Create a local receipt");
    return unique(actions);
  }

  function friendlyMissingPrompt(item = "") {
    const text = item.toLowerCase();
    if (/location|field/.test(text)) return "What location or field area should Nexus use?";
    if (/crop|livestock|commodity/.test(text)) return "What crop, livestock, or commodity is involved?";
    if (/symptom|reading|concern/.test(text)) return "What symptom, concern, or reading should Nexus include?";
    if (/clinic|provider/.test(text)) return "Which clinic or provider should Nexus prepare for?";
    if (/pharmacy|medication/.test(text)) return "Which pharmacy or medication question should Nexus prepare around?";
    if (/buyer|seller/.test(text)) return "Who is the buyer or seller, if you know?";
    if (/destination|shipment|origin/.test(text)) return "What shipment origin, destination, or timing matters?";
    if (/job|training|skill/.test(text)) return "What job goal or training interest should Nexus focus on?";
    if (/recipient|channel|message/.test(text)) return "Who should receive the draft, and by which channel?";
    return `Please add: ${item}.`;
  }

  function nextBestStep(mission = {}) {
    if (!mission.missionId) {
      return { title: "Tell Nexus your goal", why: "A clear goal lets Nexus create one safe mission plan.", button: "Start Mission", action: "start" };
    }
    if (mission.missingInputs?.length) {
      return { title: "Add missing information", why: friendlyMissingPrompt(mission.missingInputs[0]), button: "Add Missing Info", action: "review-plan" };
    }
    const review = mission.steps?.find(step => step.reviewRequired || step.confirmationRequired || step.providerRequired);
    if (review) {
      return { title: `Review ${review.title}`, why: plainStepExplanation(review), button: "Review", action: "review-plan" };
    }
    return { title: "Review your prepared plan", why: "Nexus prepared this locally and created a receipt.", button: "Show Receipt", action: "receipts" };
  }

  function receiptCards() {
    return missionMemory.receipts.slice(0, 6).map(item => {
      const title = item.planSteps?.[0] || item.userGoal || "Mission prepared";
      const status = item.executedSteps?.length ? "Sent/Scheduled" : item.blockedSteps?.length ? "Safety Gate Triggered" : "Local Draft";
      const source = item.sourceModes?.map(sourceLabel).join(", ") || "Prepared locally";
      return {
        id: item.missionReceiptId,
        title,
        status,
        timestamp: item.timestamp,
        source,
        outcome: "Nexus prepared the mission locally, created a receipt, and did not complete any external action."
      };
    });
  }

  const PILOT_SCENARIOS = Object.freeze([
    {
      id: "farmer-crop-to-market",
      label: "Farmer Crop-to-Market",
      input: "Help me with my farm. The tomatoes are sick and I need to sell what I can.",
      expected: ["agriculture + marketplace + communication plan", "crop advisory preparation", "buyer message draft", "shipment plan draft", "expert review if needed", "readable receipts"]
    },
    {
      id: "patient-clinic-pharmacy",
      label: "Patient Clinic + Pharmacy",
      input: "My blood pressure is high and I need the clinic and pharmacy.",
      expected: ["healthcare + pharmacy + communication plan", "clinic message draft", "pharmacy call script", "care follow-up packet", "readable receipts"]
    },
    {
      id: "job-seeker-learning-employment",
      label: "Job Seeker Learning-to-Employment",
      input: "I need a job and training.",
      expected: ["workforce + learning + communication plan", "training/job support packet", "employer message draft", "missing info prompts", "readable receipts"]
    },
    {
      id: "mobile-health-access",
      label: "Mobile Health Access",
      input: "I need mobile care because I cannot get to the clinic.",
      expected: ["mobile health + healthcare + communication plan", "mobile clinic packet", "transportation/access needs prompt", "provider activation blocked state", "no fake scheduling"]
    },
    {
      id: "agriculture-logistics",
      label: "Agriculture Logistics",
      input: "I need to ship my produce to a buyer.",
      expected: ["marketplace + logistics + communication plan", "shipment plan", "buyer/seller message draft", "cold chain checklist if relevant", "no fake tracking or dispatch"]
    },
    {
      id: "blocked-items",
      label: "Blocked Items",
      input: "What is blocked?",
      expected: ["plain-language blocked summary", "provider/source/review needs", "no raw internal field names"]
    },
    {
      id: "missing-info",
      label: "Missing Info",
      input: "What do you need from me?",
      expected: ["concise missing info prompts", "prioritized by next best step"]
    },
    {
      id: "multi-domain-life-services",
      label: "Multi-Domain Life Services",
      input: "I need help with my farm, my health, training, and finding work.",
      expected: ["cross-domain mission plan", "grouped steps", "next best step", "safe local preparation", "receipts"]
    }
  ]);

  const PROVIDER_ACTIVATION_MATRIX = Object.freeze([
    {
      category: "Communication",
      providers: "email, SMS, WhatsApp, Telegram, call/telephony",
      env: ["NEXUS_EMAIL_PROVIDER", "SMTP_HOST", "SMTP_USER", "SMTP_PASS", "SENDGRID_API_KEY", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "NEXUS_MESSAGES_ENABLED", "NEXUS_WHATSAPP_ENABLED", "NEXUS_CALLS_ENABLED"],
      authorizationRequired: true,
      confirmationRequired: true,
      reviewRequired: false,
      safeTestAvailable: true,
      liveExecutionAllowed: false,
      recommendedPriority: 1,
      domainsImpacted: ["healthcare", "agriculture", "jobs", "pharmacy", "marketplace", "logistics"],
      receiptSupport: true
    },
    {
      category: "Healthcare",
      providers: "telehealth, FHIR/EHR, HIE, pharmacy, RPM, secure messaging",
      env: ["NEXUS_TELEHEALTH_PROVIDER", "DAILY_API_KEY", "DAILY_ROOM_DOMAIN", "FHIR_BASE_URL", "FHIR_CLIENT_ID", "FHIR_CLIENT_SECRET", "NEXUS_PHARMACY_PROVIDER"],
      authorizationRequired: true,
      confirmationRequired: true,
      reviewRequired: true,
      safeTestAvailable: true,
      liveExecutionAllowed: false,
      recommendedPriority: 4,
      domainsImpacted: ["healthcare", "pharmacy", "mobile care", "RPM", "RTM"],
      receiptSupport: true
    },
    {
      category: "Agriculture",
      providers: "weather, soil, satellite, crop advisory, extension service",
      env: ["NEXUS_WEATHER_PROVIDER_API_KEY", "NEXUS_LIVE_KNOWLEDGE_PROVIDER", "TAVILY_API_KEY", "BRAVE_SEARCH_API_KEY", "EXA_API_KEY", "NEXUS_SOIL_PROVIDER_API_KEY", "NEXUS_SATELLITE_PROVIDER_API_KEY"],
      authorizationRequired: true,
      confirmationRequired: false,
      reviewRequired: true,
      safeTestAvailable: true,
      liveExecutionAllowed: false,
      recommendedPriority: 2,
      domainsImpacted: ["agriculture", "crop support", "farm planning"],
      receiptSupport: true
    },
    {
      category: "Marketplace",
      providers: "buyer/seller, listings, payments/escrow",
      env: ["NEXUS_MARKETPLACE_PROVIDER", "NEXUS_MARKETPLACE_API_KEY", "STRIPE_SECRET_KEY", "NEXUS_MARKETPLACE_PAYMENTS_ENABLED"],
      authorizationRequired: true,
      confirmationRequired: true,
      reviewRequired: true,
      safeTestAvailable: true,
      liveExecutionAllowed: false,
      recommendedPriority: 5,
      domainsImpacted: ["AgriTrade", "buyer/seller", "payments"],
      receiptSupport: true
    },
    {
      category: "Logistics",
      providers: "shipment tracking, carrier, cold chain",
      env: ["NEXUS_LOGISTICS_PROVIDER", "NEXUS_LOGISTICS_API_KEY", "NEXUS_CARRIER_API_KEY"],
      authorizationRequired: true,
      confirmationRequired: true,
      reviewRequired: false,
      safeTestAvailable: true,
      liveExecutionAllowed: false,
      recommendedPriority: 6,
      domainsImpacted: ["marketplace", "farm logistics", "cold chain"],
      receiptSupport: true
    },
    {
      category: "Learning/Workforce",
      providers: "training provider, employer partner",
      env: ["NEXUS_LMS_ENABLED", "MOODLE_BASE_URL", "MOODLE_TOKEN", "NEXUS_EMPLOYER_PROVIDER_API_KEY"],
      authorizationRequired: true,
      confirmationRequired: true,
      reviewRequired: false,
      safeTestAvailable: true,
      liveExecutionAllowed: false,
      recommendedPriority: 3,
      domainsImpacted: ["training", "literacy", "jobs", "employer partners"],
      receiptSupport: true
    },
    {
      category: "Drone",
      providers: "field observation, drone mission provider",
      env: ["NEXUS_DRONES_ENABLED", "DJI_CLIENT_ID", "DJI_CLIENT_SECRET", "NEXUS_DRONE_PROVIDER_API_KEY"],
      authorizationRequired: true,
      confirmationRequired: true,
      reviewRequired: true,
      safeTestAvailable: false,
      liveExecutionAllowed: false,
      recommendedPriority: 8,
      domainsImpacted: ["field observation", "agriculture"],
      receiptSupport: true
    }
  ]);

  function envConfigured(env = {}, names = []) {
    return names.some(name => Boolean(String(env[name] || "").trim()));
  }

  function providerActivationMatrix(env = {}) {
    return PROVIDER_ACTIVATION_MATRIX.map(item => {
      const configured = envConfigured(env, item.env);
      const missingEnvVars = item.env.filter(name => !String(env[name] || "").trim());
      return {
        ...item,
        configured,
        missingEnvVars,
        blockedReason: configured
          ? "Credentials detected; live execution still requires authorization, explicit confirmation, review where needed, and audit."
          : "Provider credentials are not configured. Nexus can still prepare local drafts, packets, and receipts.",
        liveExecutionAllowed: false,
        noSecretValues: true
      };
    });
  }

  function firstActivationRecommendation(env = {}) {
    const matrix = providerActivationMatrix(env);
    const communication = matrix.find(item => item.category === "Communication");
    const ordered = matrix.slice().sort((a, b) => a.recommendedPriority - b.recommendedPriority);
    return {
      recommended: communication?.category || ordered[0]?.category || "Communication",
      title: "Activate communication provider first.",
      userExplanation: "Communication is the best first activation because it lets Nexus move from prepared local drafts to confirmed real sends across healthcare, agriculture, jobs, pharmacy, marketplace, and logistics.",
      adminDetail: {
        requiredEnvVars: communication?.missingEnvVars || [],
        expectedProvider: "email or SMS provider first",
        affectedRuntimes: ["Full Communication Runtime", "Unified Brain Runtime", "Healthcare Collaboration Runtime", "Agriculture Collaboration Runtime"],
        qaNeeded: ["provider status QA", "confirmation gate QA", "single live send smoke test", "receipt verification"],
        safetyGates: ["explicit user confirmation", "recipient review", "audit receipt", "no silent send", "no emergency routing"]
      },
      rankedOptions: ordered.map(item => ({
        category: item.category,
        priority: item.recommendedPriority,
        configured: item.configured,
        reason: item.category === "Communication" ? "Highest cross-domain impact with the lowest practical first live-execution risk." : item.blockedReason
      }))
    };
  }

  function pilotCapabilitiesNow() {
    return [
      "Open-ended typed conversation",
      "Voice command routing",
      "Mission planning",
      "Agriculture advisory preparation",
      "Healthcare packet preparation",
      "Pharmacy call script preparation",
      "Buyer/seller message draft",
      "Shipment plan draft",
      "Job/training plan",
      "Missing info prompts",
      "Blocked-state explanations",
      "Readable receipts"
    ];
  }

  function pilotReadinessStatus(env = {}) {
    const matrix = providerActivationMatrix(env);
    const configuredCount = matrix.filter(item => item.configured).length;
    return {
      status: configuredCount ? "Ready for local Standard User testing; some provider credentials detected but live actions remain gated." : "Ready for local Standard User testing in safe local mode.",
      states: [
        "Ready for local Standard User testing",
        "Needs provider activation",
        "Needs user input",
        "Needs review",
        "Blocked by external provider",
        "Safe local mode active"
      ],
      canTestNow: pilotCapabilitiesNow(),
      requiresActivation: matrix.map(item => ({
        category: item.category,
        providers: item.providers,
        missingEnvVars: item.missingEnvVars,
        blockedReason: item.blockedReason,
        recommendedPriority: item.recommendedPriority
      })),
      recommendation: firstActivationRecommendation(env),
      noFakeExecution: true
    };
  }

  function fakeExecutionDetectedInMission(mission = {}) {
    const text = JSON.stringify(mission).toLowerCase();
    return /sent successfully|call was placed|payment completed|appointment booked|provider accepted|dispatched|refill approved|shipment tracking created/.test(text);
  }

  function pilotReceiptForMission(scenario = {}, mission = {}) {
    const receipt = {
      pilotReceiptId: makeId("pilot-receipt"),
      scenario: scenario.label || scenario.id || "Standard User pilot scenario",
      input: scenario.input || mission.userGoal || "",
      domainsDetected: mission.domains || [],
      missionPlanCreated: Boolean(mission.missionId && mission.steps?.length),
      preparedItems: (mission.preparedItems || mission.steps || []).map(item => item.title || item.stepId).filter(Boolean),
      blockedItems: (mission.blockedItems || []).map(item => preparedInsteadCopy(item)),
      missingInfo: (mission.missingInputs || []).map(friendlyMissingPrompt),
      receiptsCreated: mission.receipt?.missionReceiptId ? [mission.receipt.missionReceiptId] : [],
      fakeExecutionDetected: fakeExecutionDetectedInMission(mission),
      userComprehensionNotes: "Tester notes: did the user understand the mission summary, next step, blocked items, and receipts?",
      testerNotes: "Tester notes: record confusing wording, missing information, or blocked-state issues here.",
      timestamp: now(),
      result: mission.missionId && !fakeExecutionDetectedInMission(mission) ? "pass" : "fail"
    };
    return receipt;
  }

  function runPilotScenario(scenarioId, options = {}) {
    const scenario = PILOT_SCENARIOS.find(item => item.id === scenarioId) || PILOT_SCENARIOS[0];
    const mission = createMissionPlan(scenario.input, options);
    const pilotReceipt = pilotReceiptForMission(scenario, mission);
    return { ok: true, scenario, mission, pilotReceipt, noExecutionAuthorized: true };
  }

  function runPilotScenarioHarness(options = {}) {
    const receipts = [];
    const results = PILOT_SCENARIOS.map(scenario => {
      const command = /what is blocked/i.test(scenario.input) && missionMemory.activeMission
        ? answerMissionQuestion(scenario.input, options)
        : /what do you need/i.test(scenario.input) && missionMemory.activeMission
          ? answerMissionQuestion(scenario.input, options)
          : createMissionPlan(scenario.input, options);
      const mission = command?.missionId ? command : missionMemory.activeMission || createMissionPlan(scenario.input, options);
      const pilotReceipt = pilotReceiptForMission(scenario, mission);
      receipts.push(pilotReceipt);
      return { scenario, mission, pilotReceipt };
    });
    return {
      ok: true,
      scenarioCount: PILOT_SCENARIOS.length,
      passCount: receipts.filter(item => item.result === "pass").length,
      warnCount: receipts.filter(item => item.result === "warn").length,
      failCount: receipts.filter(item => item.result === "fail").length,
      results,
      receipts,
      noExecutionAuthorized: true
    };
  }

  function testingGuideItems() {
    return {
      commands: PILOT_SCENARIOS.map(item => item.input),
      lookFor: [
        "Did Nexus understand you?",
        "Did the plan make sense?",
        "Did the next step make sense?",
        "Did you understand what was blocked?",
        "Did you understand what Nexus needed from you?",
        "Did receipts make sense?",
        "Did Nexus avoid claiming it sent, called, scheduled, paid, dispatched, or diagnosed something it did not?"
      ],
      success: "A tester can understand the mission summary, plan, next step, blocked states, missing info, and receipts without believing a live action occurred.",
      problem: "Confusing copy, raw internal fields, fake execution claims, hidden provider gates, unreadable receipts, or missing next steps.",
      receiptLocation: "Receipts appear in the Nexus Mission Workspace and Pilot Readiness panel.",
      liveActionReminder: "Live sends, calls, bookings, payments, dispatch, pharmacy actions, clinical actions, and provider handoffs are blocked unless providers are connected and confirmation/review/audit gates pass."
    };
  }

  function recommendedNextStep(steps = [], missing = []) {
    if (missing.length) return `Provide missing information: ${missing.slice(0, 3).join(", ")}.`;
    const blocked = steps.find(item => item.confirmationRequired || item.reviewRequired || item.blockedReason);
    return blocked ? `Review ${blocked.title} before any external action.` : "Review the prepared plan and receipts.";
  }

  function nextStepsForMission(steps = [], missing = []) {
    const next = ["Review the mission plan", "Check missing information", "Keep receipts with source labels"];
    if (missing.length) next.push(`Provide: ${missing.slice(0, 4).join(", ")}`);
    if (steps.some(item => item.confirmationRequired)) next.push("Capture explicit confirmation before any send/call/share/schedule action");
    if (steps.some(item => item.reviewRequired)) next.push("Complete clinician, expert, provider, or admin review where required");
    return unique(next);
  }

  function answerMissionQuestion(command = "", options = {}) {
    const text = normalizeText(command).toLowerCase();
    const active = missionMemory.activeMission;
    if (!active && /what is blocked|what do you need|case so far|active mission/.test(text)) {
      return createMissionPlan("Start a general Nexus mission and show what can be prepared safely.", options);
    }
    if (/what is blocked/.test(text)) return { ...active, userVisibleStatus: blockedSummary(active), answerType: "blocked_summary" };
    if (/what do you need/.test(text)) return { ...active, userVisibleStatus: missingSummary(active), answerType: "missing_information_summary" };
    if (/case so far|what do you know/.test(text)) return { ...active, userVisibleStatus: caseSummary(active), answerType: "case_summary" };
    if (/what can you do/.test(text)) return { ...active, userVisibleStatus: canDoSummary(active), answerType: "capability_summary" };
    return active;
  }

  function blockedSummary(mission) {
    const blocked = mission?.blockedItems || [];
    if (!blocked.length) return "Nothing is blocked for local preparation. Nexus still will not send, call, schedule, pay, dispatch, or hand off externally without the right provider connection and confirmation.";
    return blocked.map(item => `${preparedInsteadCopy(item)} ${unlockCopy(item)}`).join(" ");
  }

  function missingSummary(mission) {
    const missing = mission?.missingInputs || [];
    return missing.length ? `Nexus needs a little more detail: ${missing.map(friendlyMissingPrompt).join(" ")}` : "Nexus has enough to prepare local packets; external actions still need confirmation and provider gates.";
  }

  function caseSummary(mission) {
    if (!mission) return "No active mission is in session memory.";
    return `${mission.understoodGoal} Prepared steps: ${mission.preparedItems.length}. Receipt: ${mission.receipt?.missionReceiptId || "pending"}.`;
  }

  function canDoSummary(mission) {
    const domains = mission?.domains?.join(", ") || "communication, agriculture, healthcare, learning, workforce, marketplace, logistics";
    return `Nexus can prepare and route local packets for ${domains}. External sends, calls, visits, payments, provider handoffs, and regulated actions remain gated.`;
  }

  async function process(input = "", options = {}) {
    const command = normalizeText(typeof input === "string" ? input : input.rawInput || input.command || "");
    if (/what is blocked|what do you need|case so far|what do you know|what can you do now/.test(command.toLowerCase())) {
      return answerMissionQuestion(command, options);
    }
    return createMissionPlan(command, options);
  }

  function prepareMissionStep(stepId, options = {}) {
    const mission = missionMemory.activeMission;
    const stepItem = mission?.steps?.find(item => item.stepId === stepId);
    if (!stepItem) return { ok: false, error: "step_not_found", noExecutionAuthorized: true };
    const prepared = routeStep(stepItem, options);
    prepared.status = prepared.confirmationRequired || prepared.reviewRequired || prepared.providerRequired
      ? "blocked_execution_gated"
      : prepared.status;
    prepared.canExecute = false;
    prepared.noExecutionAuthorized = true;
    prepared.blockedReason = prepared.blockedReason || "Unified Brain does not execute external actions without provider credentials, confirmation, review, and audit.";
    return { ok: true, step: prepared, missionId: mission.missionId, noExecutionAuthorized: true };
  }

  function getMissionReceipt(missionId) {
    return missionMemory.receipts.find(item => item.missionId === missionId) || missionMemory.receipts[0] || null;
  }

  function clearMission() {
    missionMemory.activeMission = null;
    lastResult = null;
    return { ok: true, cleared: true };
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
  }

  function host() {
    return root?.document?.querySelector?.("[data-nexus-unified-brain-runtime]");
  }

  function mount() {
    const panel = host();
    if (!panel) return null;
    renderStatus(runtimeStatus(), panel);
    renderMission(missionMemory.activeMission, panel);
    renderPilotReadiness();
    return panel;
  }

  function renderStatus(status = runtimeStatus(), panel = host()) {
    if (!panel) return;
    const target = panel.querySelector("[data-nexus-brain-evidence]");
    if (!target) return;
    const labels = {
      communication: "Communication Runtime",
      agriculture: "Agriculture Runtime",
      healthcare: "Healthcare Runtime",
      workforceLearning: "Workforce/Learning Support",
      marketplaceLogistics: "Marketplace/Logistics Support"
    };
    target.innerHTML = Object.entries(status.availableRuntimes).map(([key, value]) => {
      const ready = value === true || /available|fallback|via_/i.test(String(value));
      const display = ready ? "Available for preparation" : "Provider not connected";
      return `<span><b>${escapeHtml(labels[key] || domainLabel(key))}</b><small>${escapeHtml(display)}</small></span>`;
    }).join("");
    const statusTarget = panel.querySelector("[data-nexus-brain-status]");
    if (statusTarget) statusTarget.textContent = "Nexus can prepare locally; external actions stay gated.";
  }

  function renderMission(mission = missionMemory.activeMission, panel = host()) {
    if (!panel) return;
    const response = panel.querySelector("[data-nexus-brain-response]");
    const summary = panel.querySelector("[data-nexus-brain-summary]");
    const missionStatusTarget = panel.querySelector("[data-nexus-brain-mission-status]");
    const nextStepTarget = panel.querySelector("[data-nexus-brain-next-step]");
    const nextAction = panel.querySelector("[data-nexus-brain-next-action]");
    const canDo = panel.querySelector("[data-nexus-brain-can-do]");
    const understood = panel.querySelector("[data-nexus-brain-understood]");
    const domains = panel.querySelector("[data-nexus-brain-domains]");
    const plan = panel.querySelector("[data-nexus-brain-plan]");
    const missing = panel.querySelector("[data-nexus-brain-missing]");
    const blocked = panel.querySelector("[data-nexus-brain-blocked]");
    const receiptsTarget = panel.querySelector("[data-nexus-brain-receipts]");
    if (!mission) {
      if (response) response.textContent = "I can help turn your request into one safe plan, prepare useful local drafts or packets, show what is blocked, and keep receipts.";
      if (summary) summary.textContent = "Tell Nexus what you want to accomplish.";
      if (missionStatusTarget) missionStatusTarget.textContent = "New";
      if (nextStepTarget) nextStepTarget.textContent = "Tell Nexus your goal so it can prepare the first safe step.";
      if (nextAction) {
        nextAction.textContent = "Start Mission";
        nextAction.setAttribute("data-nexus-brain-action", "start");
      }
      if (understood) understood.textContent = "Ask Nexus an open-ended goal to start a unified mission.";
      if (domains) domains.textContent = "No active mission.";
      if (plan) plan.innerHTML = "<span><b>No plan yet</b><small>Mission steps appear here.</small></span>";
      if (canDo) canDo.innerHTML = "<span><b>Prepare local drafts</b><small>Nexus can prepare plans, packets, and receipts before any external action.</small></span>";
      if (missing) missing.innerHTML = "<span><b>No missing information yet</b><small>Start a mission first.</small></span>";
      if (blocked) blocked.innerHTML = "<span><b>No blocked items yet</b><small>Nexus will show gates after a mission is prepared.</small></span>";
      if (receiptsTarget) receiptsTarget.textContent = "No mission receipts yet.";
      return;
    }
    const next = nextBestStep(mission);
    if (response) response.textContent = mission.userVisibleStatus || mission.conversationalResponse || conversationalSummary(mission);
    if (summary) summary.textContent = `${mission.understoodGoal} Goal: ${mission.userGoal || "Prepare a safe Nexus mission."}`;
    if (missionStatusTarget) missionStatusTarget.textContent = mission.missionStatus || missionStatus(mission);
    if (nextStepTarget) nextStepTarget.textContent = `${next.title}. ${next.why}`;
    if (nextAction) {
      nextAction.textContent = next.button;
      nextAction.setAttribute("data-nexus-brain-action", next.action);
    }
    if (understood) understood.textContent = mission.understoodGoal;
    if (domains) domains.innerHTML = mission.domains.map(domain => `<span class="nexus-brain-domain-chip">${escapeHtml(domainLabel(domain))}</span>`).join("");
    if (canDo) {
      canDo.innerHTML = canDoNow(mission).map(item => `<span><b>${escapeHtml(item)}</b><small>Available now as local preparation.</small></span>`).join("");
    }
    if (plan) {
      plan.innerHTML = mission.steps.map(item => `
        <article class="nexus-brain-step" data-status="${escapeHtml(item.status)}">
          <div class="nexus-brain-step-top">
            <b>${escapeHtml(item.order)}. ${escapeHtml(item.title)}</b>
            <span class="nexus-brain-status-pill">${escapeHtml(statusLabel(item))}</span>
          </div>
          <small><span>${escapeHtml(domainLabel(item.runtime))}</span><span>${escapeHtml(sourceLabel(item.sourceMode))}</span></small>
          <em>${escapeHtml(plainStepExplanation(item))}</em>
          <button type="button" data-nexus-brain-action="${item.confirmationRequired ? "review-plan" : "prepare-next"}">${escapeHtml(item.confirmationRequired ? "Review" : "Prepare")}</button>
        </article>
      `).join("");
    }
    if (missing) {
      missing.innerHTML = mission.missingInputs.length
        ? mission.missingInputs.map(item => `<span><b>${escapeHtml(friendlyMissingPrompt(item))}</b><small>Answer this to improve the prepared plan.</small></span>`).join("")
        : "<span><b>No critical missing information</b><small>Nexus can prepare locally. External actions still need the right gates.</small></span>";
    }
    if (blocked) {
      blocked.innerHTML = mission.blockedItems.length
        ? mission.blockedItems.map(item => `<span><b>${escapeHtml(preparedInsteadCopy(item))}</b><small>${escapeHtml(unlockCopy(item))} Still useful now: local draft, checklist, packet, or receipt is ready.</small></span>`).join("")
        : "<span><b>No blocked items for local preparation</b><small>External actions still require confirmation and provider gates.</small></span>";
    }
    if (receiptsTarget) {
      const cards = receiptCards();
      receiptsTarget.innerHTML = cards.length
        ? cards.map(item => `<span class="nexus-brain-receipt"><b>${escapeHtml(item.title)}</b><small>${escapeHtml(item.status)} - ${escapeHtml(item.source)}</small><small>${escapeHtml(item.timestamp)}</small><em>${escapeHtml(item.outcome)}</em></span>`).join("")
        : "No mission receipts yet.";
    }
  }

  function pilotHost() {
    return root?.document?.querySelector?.("[data-nexus-pilot-readiness]");
  }

  function renderPilotReadiness(options = {}, panel = pilotHost()) {
    if (!panel) return;
    const readiness = pilotReadinessStatus(options.env || {});
    const statusTarget = panel.querySelector("[data-nexus-pilot-status]");
    const canTestTarget = panel.querySelector("[data-nexus-pilot-can-test]");
    const activationTarget = panel.querySelector("[data-nexus-pilot-activation-matrix]");
    const recommendationTarget = panel.querySelector("[data-nexus-pilot-recommendation]");
    const scenariosTarget = panel.querySelector("[data-nexus-pilot-scenarios]");
    const receiptsTarget = panel.querySelector("[data-nexus-pilot-receipts]");
    const guideTarget = panel.querySelector("[data-nexus-pilot-testing-guide]");

    if (statusTarget) {
      statusTarget.innerHTML = `
        <span><b>${escapeHtml(readiness.status)}</b><small>${escapeHtml(readiness.states.join(" | "))}</small></span>
      `;
    }
    if (canTestTarget) {
      canTestTarget.innerHTML = readiness.canTestNow.map(item => `<span><b>${escapeHtml(item)}</b><small>Available now in safe local mode.</small></span>`).join("");
    }
    if (activationTarget) {
      activationTarget.innerHTML = providerActivationMatrix(options.env || {}).map(item => `
        <article class="nexus-pilot-matrix-card" data-provider-category="${escapeHtml(item.category)}">
          <div>
            <b>${escapeHtml(item.category)}</b>
            <small>${escapeHtml(item.providers)}</small>
          </div>
          <span class="nexus-brain-status-pill">${escapeHtml(item.configured ? "Configured - still gated" : "Missing credentials")}</span>
          <small><strong>Missing env names:</strong> ${escapeHtml(item.missingEnvVars.slice(0, 8).join(", ") || "none detected")}</small>
          <small><strong>Review:</strong> ${escapeHtml(item.reviewRequired ? "required where applicable" : "not always required")} | <strong>Confirmation:</strong> ${escapeHtml(item.confirmationRequired ? "required" : "not for read-only tests")}</small>
          <small><strong>Safe test:</strong> ${escapeHtml(item.safeTestAvailable ? "available" : "not available yet")} | <strong>Live execution:</strong> disabled until configured, approved, confirmed, and audited</small>
          <small><strong>Blocked reason:</strong> ${escapeHtml(item.blockedReason)}</small>
          <small><strong>Domains impacted:</strong> ${escapeHtml(item.domainsImpacted.join(", "))}</small>
        </article>
      `).join("");
    }
    if (recommendationTarget) {
      const rec = readiness.recommendation;
      recommendationTarget.innerHTML = `
        <span><b>${escapeHtml(rec.title)}</b><small>${escapeHtml(rec.userExplanation)}</small></span>
        <span><b>Admin detail</b><small>Expected provider: ${escapeHtml(rec.adminDetail.expectedProvider)}. QA: ${escapeHtml(rec.adminDetail.qaNeeded.join(", "))}. Safety gates: ${escapeHtml(rec.adminDetail.safetyGates.join(", "))}.</small></span>
      `;
    }
    if (scenariosTarget) {
      scenariosTarget.innerHTML = PILOT_SCENARIOS.map(item => `
        <article class="nexus-pilot-scenario-card" data-pilot-scenario-id="${escapeHtml(item.id)}">
          <b>${escapeHtml(item.label)}</b>
          <small>${escapeHtml(item.input)}</small>
          <small>Expected: ${escapeHtml(item.expected.join("; "))}</small>
          <button type="button" data-nexus-pilot-action="run-scenario" data-pilot-scenario="${escapeHtml(item.id)}">Run scenario</button>
        </article>
      `).join("");
    }
    if (receiptsTarget) {
      const active = missionMemory.activeMission;
      const receipt = active?.missionId ? pilotReceiptForMission({ label: "Current active mission", input: active.userGoal }, active) : null;
      receiptsTarget.innerHTML = receipt
        ? `<span><b>${escapeHtml(receipt.scenario)}</b><small>${escapeHtml(receipt.result)} - ${escapeHtml(receipt.timestamp)}</small><small>Prepared: ${escapeHtml(receipt.preparedItems.slice(0, 4).join(", ") || "none")}</small><small>Blocked: ${escapeHtml(receipt.blockedItems.length ? `${receipt.blockedItems.length} gated item(s)` : "none for local preparation")}</small></span>`
        : "<span><b>No pilot receipt yet</b><small>Run a pilot scenario or ask Nexus a mission question.</small></span>";
    }
    if (guideTarget) {
      const guide = testingGuideItems();
      guideTarget.innerHTML = `
        <span><b>Suggested commands</b><small>${escapeHtml(guide.commands.slice(0, 5).join(" | "))}</small></span>
        <span><b>Tester success questions</b><small>${escapeHtml(guide.lookFor.join(" | "))}</small></span>
        <span><b>Success</b><small>${escapeHtml(guide.success)}</small></span>
        <span><b>Problem</b><small>${escapeHtml(guide.problem)}</small></span>
        <span><b>Live action reminder</b><small>${escapeHtml(guide.liveActionReminder)}</small></span>
      `;
    }
  }

  function render(result, panel = host()) {
    if (!panel) return;
    if (result?.answerType && result.userVisibleStatus) {
      const response = panel.querySelector("[data-nexus-brain-response]");
      if (response) response.textContent = result.userVisibleStatus;
    }
    renderStatus(runtimeStatus(), panel);
    renderMission(result?.missionId ? result : missionMemory.activeMission, panel);
    renderPilotReadiness();
  }

  async function handlePanelAction(action = "review-plan") {
    if (action === "clear") {
      const result = clearMission();
      mount();
      return result;
    }
    if (action === "blocked") {
      const result = answerMissionQuestion("What is blocked?");
      render(result);
      return result;
    }
    if (action === "receipts") {
      renderMission(missionMemory.activeMission);
      return { ok: true, receipts: missionMemory.receipts };
    }
    if (action === "prepare-next") {
      const goal = missionMemory.activeMission?.userGoal || "Prepare everything and show me the plan.";
      const result = createMissionPlan(goal);
      render(result);
      return result;
    }
    const result = missionMemory.activeMission || createMissionPlan("Prepare everything and show me the plan.");
    render(result);
    return result;
  }

  async function handlePilotAction(action = "refresh", detail = {}) {
    if (action === "run-all-scenarios") {
      const result = runPilotScenarioHarness();
      render(result.results?.[0]?.mission || missionMemory.activeMission);
      renderPilotReadiness();
      return result;
    }
    if (action === "run-scenario") {
      const result = runPilotScenario(detail.scenarioId || detail.pilotScenario || "farmer-crop-to-market");
      render(result.mission);
      renderPilotReadiness();
      return result;
    }
    renderPilotReadiness();
    return { ok: true, readiness: pilotReadinessStatus(), noExecutionAuthorized: true };
  }

  return Object.freeze({
    DOMAINS,
    SAFETY_LEVELS,
    PILOT_SCENARIOS,
    PROVIDER_ACTIVATION_MATRIX,
    missionMemory,
    classifyDomains,
    isUnifiedBrainCommand,
    shouldHandleBeforeLegacy,
    runtimeStatus,
    pilotReadinessStatus,
    providerActivationMatrix,
    firstActivationRecommendation,
    runPilotScenario,
    runPilotScenarioHarness,
    pilotReceiptForMission,
    testingGuideItems,
    createMissionPlan,
    process,
    executeStep: prepareMissionStep,
    getMissionReceipt,
    getReceipts: () => missionMemory.receipts.slice(),
    getActiveMission: () => missionMemory.activeMission,
    clearMission,
    mount,
    render,
    renderPilotReadiness,
    refreshStatus: () => runtimeStatus(),
    handlePanelAction,
    handlePilotAction,
    getLastResult: () => lastResult
  });
});
