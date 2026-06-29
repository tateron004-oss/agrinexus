const crypto = require("node:crypto");
const {
  BLOCKED_ACTIONS,
  classifyAutonomyWorkflowGoal,
  isSafeAutonomyWorkflowClassification
} = require("./nexus-autonomy-workflow-goal-classifier.js");

const WORKFLOW_TEMPLATES = Object.freeze({
  job_search_workflow: {
    confidence: 0.82,
    providerQueries: ["workforce-jobs-read-only", "agriculture-jobs-read-only"],
    artifactsToPrepare: ["application_prep_checklist", "comparison_table", "provider_questions", "manual_message_draft"],
    safeUserActions: ["review matching jobs", "compare job requirements", "prepare resume keywords", "copy questions manually"],
    nextBestStep: "Search for relevant jobs using the typed role, location, and experience clues.",
    steps: [
      ["search_jobs", "Search for relevant jobs.", "Use read-only job and workforce sources. Do not apply or contact anyone."],
      ["filter_criteria", "Filter for entry-level or user criteria.", "Use user-stated criteria only and ask for missing criteria."],
      ["compare_options", "Compare top options.", "Rank fit, requirements, freshness, and source clarity."],
      ["identify_requirements", "Identify requirements.", "List skills, documents, schedule, and transportation considerations."],
      ["build_checklist", "Build application prep checklist.", "Prepare user-reviewed next steps without submitting anything."],
      ["draft_questions", "Draft questions/message text for user to copy manually.", "Draft text stays local to the preview and is not sent."],
      ["explain_blocked_actions", "Explain blocked actions.", "Nexus cannot apply, contact, send, call, book, or submit."]
    ]
  },
  agriculture_training_workflow: {
    confidence: 0.84,
    providerQueries: ["agriculture-training-read-only", "education-media-read-only"],
    artifactsToPrepare: ["training_plan", "enrollment_prep_checklist", "provider_questions", "source_summary"],
    safeUserActions: ["review training resources", "compare learning formats", "prepare enrollment questions", "copy questions manually"],
    nextBestStep: "Find training resources and compare fit, prerequisites, schedule, language, and source freshness.",
    steps: [
      ["find_training", "Find training resources.", "Use read-only education, workforce, and agriculture sources."],
      ["compare_options", "Compare options.", "Compare format, cost disclosure, location, language, and source freshness."],
      ["identify_prerequisites", "Identify prerequisites.", "List skills, documents, tools, and readiness gaps."],
      ["build_enrollment_checklist", "Build enrollment prep checklist.", "Prepare review-only steps the user can follow manually."],
      ["draft_program_questions", "Draft questions to ask the program.", "Draft text is not sent and does not contact the program."],
      ["explain_blocked_actions", "Explain blocked actions.", "Nexus cannot enroll, apply, pay, schedule, or contact providers."]
    ]
  },
  crop_issue_guidance_workflow: {
    confidence: 0.78,
    providerQueries: ["agriculture-extension-read-only", "crop-guidance-read-only", "weather-context-read-only"],
    artifactsToPrepare: ["farm_issue_observation_checklist", "source_summary", "provider_questions"],
    safeUserActions: ["write down observations", "review extension guidance", "prepare expert questions", "avoid treating this as diagnosis"],
    nextBestStep: "Collect crop, symptom, timing, and visible observation details before summarizing source-backed guidance.",
    steps: [
      ["collect_observations", "Collect crop observations.", "Use typed user descriptions only; do not request camera or location permission."],
      ["review_sources", "Review read-only crop guidance.", "Summarize official or source-backed guidance where available."],
      ["separate_possibilities", "Separate possibilities from diagnosis.", "Make clear Nexus is not diagnosing or prescribing treatment."],
      ["make_observation_checklist", "Make an observation checklist.", "Help the user gather information for local expert review."],
      ["prepare_expert_questions", "Prepare expert questions.", "Draft questions without contacting extension, providers, or sellers."],
      ["explain_blocked_actions", "Explain blocked actions.", "Nexus cannot diagnose, prescribe chemicals, buy products, dispatch help, or contact anyone."]
    ]
  },
  workforce_program_comparison_workflow: {
    confidence: 0.8,
    providerQueries: ["workforce-programs-read-only", "training-programs-read-only"],
    artifactsToPrepare: ["comparison_table", "decision_checklist", "provider_questions"],
    safeUserActions: ["compare programs", "review source details", "prepare questions", "choose what to pursue manually"],
    nextBestStep: "Identify programs to compare or ask for the user's target role, location, and schedule.",
    steps: [
      ["identify_programs", "Identify the programs or categories to compare.", "Use named programs or safe source-backed options."],
      ["run_read_only_queries", "Run read-only source queries if options are missing.", "Do not submit interest forms or contact providers."],
      ["compare_fit", "Compare fit, schedule, cost disclosure, location, and credential value.", "Keep comparison informational."],
      ["create_decision_checklist", "Create a short decision checklist.", "Prepare user-reviewable next steps."],
      ["draft_questions", "Prepare questions the user can ask manually.", "Draft only; do not send."]
    ]
  },
  weather_planning_workflow: {
    confidence: 0.78,
    providerQueries: ["weather-read-only"],
    artifactsToPrepare: ["weather_planning_note", "checklist"],
    safeUserActions: ["review forecast context", "adjust manual plans", "prepare backup tasks", "check source freshness"],
    nextBestStep: "Use explicit typed location or ask for one before reviewing weather context.",
    steps: [
      ["confirm_location_text", "Confirm explicit typed location text.", "Do not infer location or request browser geolocation."],
      ["review_weather_context", "Review read-only weather context.", "Use provider/source availability without requesting permissions."],
      ["summarize_risk", "Summarize planning risks.", "Frame as planning support, not dispatch or routing."],
      ["prepare_weather_note", "Prepare a weather planning note.", "Suggest manual next steps only."]
    ]
  },
  agriculture_news_awareness_workflow: {
    confidence: 0.76,
    providerQueries: ["agriculture-news-read-only", "source-freshness-read-only"],
    artifactsToPrepare: ["source_summary", "checklist"],
    safeUserActions: ["review source summaries", "check freshness", "prepare follow-up questions"],
    nextBestStep: "Gather source-backed agriculture updates and separate facts from uncertainty.",
    steps: [
      ["find_updates", "Find agriculture updates.", "Use read-only public/source-backed references."],
      ["summarize_sources", "Summarize sources and freshness.", "Preserve citations and uncertainty."],
      ["prepare_questions", "Prepare follow-up questions.", "Keep all follow-up manual and informational."]
    ]
  },
  media_training_discovery_workflow: {
    confidence: 0.8,
    providerQueries: ["education-media-read-only", "agriculture-training-read-only"],
    artifactsToPrepare: ["training_plan", "source_summary", "checklist"],
    safeUserActions: ["review videos", "compare topic fit", "make a learning checklist"],
    nextBestStep: "Find relevant training media and organize it into a learning path.",
    steps: [
      ["find_media", "Find training media.", "Use read-only media/training sources."],
      ["compare_relevance", "Compare relevance and level.", "Separate beginner, intermediate, and field-practice resources."],
      ["build_learning_path", "Build a learning checklist.", "Keep learning steps manual and user-controlled."]
    ]
  },
  marketplace_browse_workflow: {
    confidence: 0.74,
    providerQueries: ["agritrade-browse-read-only"],
    artifactsToPrepare: ["marketplace_browse_comparison", "source_summary"],
    safeUserActions: ["browse informational listings", "compare options", "prepare questions manually"],
    nextBestStep: "Browse AgriTrade options as information only and block buying, selling, checkout, and contact.",
    steps: [
      ["browse_options", "Browse marketplace options.", "Use browse/info mode only."],
      ["compare_options", "Compare visible options.", "Compare category, source, and user-stated criteria."],
      ["prepare_manual_questions", "Prepare manual questions.", "Do not contact sellers or buyers."],
      ["explain_blocked_actions", "Explain blocked actions.", "Nexus cannot buy, sell, pay, checkout, contact, or create orders."]
    ]
  },
  shipment_status_workflow: {
    confidence: 0.74,
    providerQueries: ["shipment-status-read-only"],
    artifactsToPrepare: ["shipment_status_summary", "source_summary"],
    safeUserActions: ["review typed tracking reference", "summarize status", "prepare manual follow-up questions"],
    nextBestStep: "Use the explicit tracking/reference text to prepare a read-only shipment status summary.",
    steps: [
      ["verify_reference_text", "Verify explicit tracking/reference text.", "Do not infer shipment identity or access accounts."],
      ["review_status_source", "Review read-only shipment status source if available.", "No provider handoff or account login."],
      ["summarize_status", "Prepare shipment status summary.", "Summarize only; do not route, dispatch, message, or contact."]
    ]
  },
  general_assistant_plan_workflow: {
    confidence: 0.64,
    providerQueries: [],
    artifactsToPrepare: ["checklist", "source_summary"],
    safeUserActions: ["clarify the goal", "make a safe checklist", "choose next manual step"],
    nextBestStep: "Ask one clarifying question and offer a safe checklist.",
    steps: [
      ["clarify_goal", "Clarify the goal.", "Ask for the missing context needed to plan safely."],
      ["make_safe_plan", "Make a safe plan.", "Keep steps informational and user-controlled."],
      ["prepare_next_step", "Prepare the next manual step.", "No execution, provider contact, permission request, or backend write."]
    ]
  }
});

function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function stableWorkflowId(goal, workflowType) {
  return `aut-workflow-${crypto.createHash("sha256").update(`${workflowType}:${goal}`).digest("hex").slice(0, 16)}`;
}

function stepObjects(workflowType, stepTuples) {
  return stepTuples.map(([stepType, title, description], index) => Object.freeze({
    stepId: `${workflowType}-step-${index + 1}`,
    stepType,
    title,
    description,
    status: index === 0 ? "ready" : "pending",
    readOnly: true,
    executionProhibited: true
  }));
}

function buildBlockedWorkflowPlan(classification) {
  return Object.freeze({
    workflowId: stableWorkflowId(classification.userGoal, classification.workflowType),
    workflowType: classification.workflowType,
    userGoal: classification.userGoal,
    status: "blocked",
    steps: Object.freeze(stepObjects(classification.workflowType, [
      ["explain_block", "Explain why this cannot run.", classification.blockedReason || "This action is blocked."],
      ["offer_safe_alternative", "Offer a safe alternative.", "Nexus can prepare information, a checklist, or draft text for the user to review manually."],
      ["preserve_boundary", "Preserve execution boundary.", "No provider contact, submission, payment, booking, dispatch, location sharing, or account action is authorized."]
    ])),
    currentStepIndex: 0,
    providerQueries: Object.freeze([]),
    artifactsToPrepare: Object.freeze(["safe_alternative_summary"]),
    safeUserActions: Object.freeze(["ask for information only", "prepare checklist", "draft manual questions"]),
    blockedActions: classification.blockedActions,
    nextBestStep: "Ask what safe information or preparation help the user wants instead.",
    confidence: 0.95,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendActionWritePerformed: true
  });
}

function buildNeedsInputWorkflowPlan(classification, template) {
  return Object.freeze({
    workflowId: stableWorkflowId(classification.userGoal, classification.workflowType),
    workflowType: classification.workflowType,
    userGoal: classification.userGoal,
    status: "needs_input",
    steps: Object.freeze(stepObjects(classification.workflowType, [
      ["ask_for_required_input", "Ask for required reference text.", "This workflow needs explicit user-provided reference text before any read-only lookup can be planned."],
      ["confirm_preview_only", "Confirm preview-only boundary.", "Nexus will not infer account, shipment, location, provider, or private data."]
    ])),
    currentStepIndex: 0,
    providerQueries: Object.freeze([]),
    artifactsToPrepare: Object.freeze(["clarifying_question"]),
    safeUserActions: Object.freeze(["provide explicit reference text", ...template.safeUserActions]),
    blockedActions: Object.freeze([...classification.blockedActions]),
    nextBestStep: "Ask for the explicit tracking or reference text.",
    confidence: 0.68,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendActionWritePerformed: true
  });
}

function buildAllowedWorkflowPlan(classification, template) {
  return Object.freeze({
    workflowId: stableWorkflowId(classification.userGoal, classification.workflowType),
    workflowType: classification.workflowType,
    userGoal: classification.userGoal,
    status: "planned",
    steps: Object.freeze(stepObjects(classification.workflowType, template.steps)),
    currentStepIndex: 0,
    providerQueries: Object.freeze([...template.providerQueries]),
    artifactsToPrepare: Object.freeze([...template.artifactsToPrepare]),
    safeUserActions: Object.freeze([...template.safeUserActions]),
    blockedActions: Object.freeze([...classification.blockedActions]),
    nextBestStep: template.nextBestStep,
    confidence: template.confidence,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendActionWritePerformed: true
  });
}

function buildAutonomyWorkflowPlan(goal) {
  const classification = classifyAutonomyWorkflowGoal(normalizeText(goal));
  if (!isSafeAutonomyWorkflowClassification(classification)) {
    throw new Error("Unsafe autonomy workflow classification.");
  }

  const template = WORKFLOW_TEMPLATES[classification.workflowType] || WORKFLOW_TEMPLATES.general_assistant_plan_workflow;
  if (classification.allowed === false) return buildBlockedWorkflowPlan(classification);
  if (classification.requiresUserInput) return buildNeedsInputWorkflowPlan(classification, template);
  return buildAllowedWorkflowPlan(classification, template);
}

function isSafeAutonomyWorkflowPlan(plan) {
  if (!plan || typeof plan !== "object" || Array.isArray(plan)) return false;
  if (!plan.workflowId || !plan.workflowType || typeof plan.userGoal !== "string") return false;
  if (!["planned", "needs_input", "blocked"].includes(plan.status)) return false;
  if (!Array.isArray(plan.steps) || plan.steps.length < 1) return false;
  if (!Array.isArray(plan.providerQueries) || !Array.isArray(plan.artifactsToPrepare)) return false;
  if (!Array.isArray(plan.safeUserActions) || !Array.isArray(plan.blockedActions)) return false;
  if (!plan.nextBestStep || typeof plan.confidence !== "number") return false;
  if (plan.currentStepIndex !== 0) return false;
  if (plan.noExecutionAuthorized !== true) return false;
  if (plan.noProviderContactAuthorized !== true) return false;
  if (plan.noLocationPermissionRequested !== true) return false;
  if (plan.noBackendActionWritePerformed !== true) return false;
  return plan.steps.every(step => step && step.readOnly === true && step.executionProhibited === true);
}

module.exports = Object.freeze({
  WORKFLOW_TEMPLATES,
  buildAutonomyWorkflowPlan,
  isSafeAutonomyWorkflowPlan
});
