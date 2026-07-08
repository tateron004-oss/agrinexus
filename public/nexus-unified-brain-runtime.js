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
    if (!blocked.length) return "No external action is authorized yet. Nexus can prepare local packets and receipts.";
    return `Blocked or gated items: ${blocked.map(item => `${item.title}: ${item.blockedReason || "confirmation/review required"}`).join(" | ")}`;
  }

  function missingSummary(mission) {
    const missing = mission?.missingInputs || [];
    return missing.length ? `Nexus needs: ${missing.join(", ")}.` : "Nexus has enough to prepare local packets; external actions still need confirmation and provider gates.";
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
    return panel;
  }

  function renderStatus(status = runtimeStatus(), panel = host()) {
    if (!panel) return;
    const target = panel.querySelector("[data-nexus-brain-evidence]");
    if (!target) return;
    target.innerHTML = Object.entries(status.availableRuntimes).map(([key, value]) => `<span><b>${escapeHtml(key)}</b><small>${escapeHtml(value)}</small></span>`).join("");
    const statusTarget = panel.querySelector("[data-nexus-brain-status]");
    if (statusTarget) statusTarget.textContent = "Unified Brain local-ready; external execution gated.";
  }

  function renderMission(mission = missionMemory.activeMission, panel = host()) {
    if (!panel) return;
    const understood = panel.querySelector("[data-nexus-brain-understood]");
    const domains = panel.querySelector("[data-nexus-brain-domains]");
    const plan = panel.querySelector("[data-nexus-brain-plan]");
    const missing = panel.querySelector("[data-nexus-brain-missing]");
    const blocked = panel.querySelector("[data-nexus-brain-blocked]");
    const receiptsTarget = panel.querySelector("[data-nexus-brain-receipts]");
    if (!mission) {
      if (understood) understood.textContent = "Ask Nexus an open-ended goal to start a unified mission.";
      if (domains) domains.textContent = "No active mission.";
      if (plan) plan.innerHTML = "<span><b>No plan yet</b><small>Mission steps appear here.</small></span>";
      if (missing) missing.textContent = "No missing information yet.";
      if (blocked) blocked.textContent = "No blocked items yet.";
      if (receiptsTarget) receiptsTarget.textContent = "No mission receipts yet.";
      return;
    }
    if (understood) understood.textContent = mission.understoodGoal;
    if (domains) domains.textContent = mission.domains.join(", ");
    if (plan) {
      plan.innerHTML = mission.steps.map(item => `
        <article class="nexus-brain-step" data-status="${escapeHtml(item.status)}">
          <b>${escapeHtml(item.order)}. ${escapeHtml(item.title)}</b>
          <small>${escapeHtml(item.runtime)} - ${escapeHtml(item.status)} - ${escapeHtml(item.sourceMode)}</small>
          <em>${escapeHtml(item.blockedReason || "Prepared locally; review before external action.")}</em>
        </article>
      `).join("");
    }
    if (missing) missing.textContent = mission.missingInputs.length ? mission.missingInputs.join(", ") : "No critical missing information for local preparation.";
    if (blocked) blocked.textContent = blockedSummary(mission);
    if (receiptsTarget) receiptsTarget.innerHTML = missionMemory.receipts.slice(0, 6).map(item => `<span><b>${escapeHtml(item.missionReceiptId)}</b><small>${escapeHtml(item.outcome)}</small></span>`).join("");
  }

  function render(result, panel = host()) {
    if (!panel) return;
    if (result?.answerType && result.userVisibleStatus) {
      const understood = panel.querySelector("[data-nexus-brain-understood]");
      if (understood) understood.textContent = result.userVisibleStatus;
    }
    renderStatus(runtimeStatus(), panel);
    renderMission(result?.missionId ? result : missionMemory.activeMission, panel);
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

  return Object.freeze({
    DOMAINS,
    SAFETY_LEVELS,
    missionMemory,
    classifyDomains,
    isUnifiedBrainCommand,
    shouldHandleBeforeLegacy,
    runtimeStatus,
    createMissionPlan,
    process,
    executeStep: prepareMissionStep,
    getMissionReceipt,
    getReceipts: () => missionMemory.receipts.slice(),
    getActiveMission: () => missionMemory.activeMission,
    clearMission,
    mount,
    render,
    refreshStatus: () => runtimeStatus(),
    handlePanelAction,
    getLastResult: () => lastResult
  });
});
