const SUPPORTED_WORKFLOW_TYPES = Object.freeze([
  "job_search_workflow",
  "agriculture_training_workflow",
  "crop_issue_guidance_workflow",
  "workforce_program_comparison_workflow",
  "weather_planning_workflow",
  "agriculture_news_awareness_workflow",
  "media_training_discovery_workflow",
  "marketplace_browse_workflow",
  "shipment_status_workflow",
  "general_assistant_plan_workflow"
]);

const BLOCKED_WORKFLOW_TYPES = Object.freeze([
  "call_provider",
  "send_message",
  "apply_submit",
  "buy_pay_purchase",
  "book_schedule",
  "dispatch_help",
  "send_location",
  "emergency_execution",
  "medical_pharmacy_execution",
  "account_login_or_creation"
]);

const BLOCKED_ACTIONS = Object.freeze([
  "call_provider",
  "send_message",
  "apply_submit",
  "buy_pay_purchase",
  "book_schedule",
  "dispatch_help",
  "send_location",
  "emergency_execution",
  "medical_pharmacy_execution",
  "account_login_or_creation"
]);

const BLOCKED_RULES = Object.freeze([
  {
    workflowType: "emergency_execution",
    riskTier: "critical",
    blockedReason: "Emergency execution and dispatch require a future approved emergency provider gate.",
    patterns: [/\bemergency\b/i, /\bdispatch help\b/i, /\bambulance\b/i, /\b911\b/i]
  },
  {
    workflowType: "medical_pharmacy_execution",
    riskTier: "high",
    blockedReason: "Medical, pharmacy, prescription, diagnosis, and treatment execution are blocked.",
    patterns: [/\bdiagnos(?:e|is)\b/i, /\bprescri(?:be|ption)\b/i, /\brefill\b/i, /\bpharmacy\b/i, /\bmedication\b/i, /\btelehealth\b/i, /\bdoctor\b/i]
  },
  {
    workflowType: "send_location",
    riskTier: "high",
    blockedReason: "Location sharing requires a future explicit consent and permission gate.",
    patterns: [/\bsend my location\b/i, /\bshare my location\b/i, /\buse my location\b/i, /\bfind my location\b/i, /\bgps\b/i, /\bgeolocat/i]
  },
  {
    workflowType: "call_provider",
    riskTier: "high",
    blockedReason: "Calls and provider contact require a future confirmed communications provider gate.",
    patterns: [/\bcall\b/i, /\bdial\b/i, /\bphone\b/i, /\bcontact (?:this|the|my)? ?provider\b/i]
  },
  {
    workflowType: "send_message",
    riskTier: "high",
    blockedReason: "Messages are blocked until a future confirmed communications provider gate exists.",
    patterns: [/\bmessage\b/i, /\btext\b/i, /\bsms\b/i, /\bwhatsapp\b/i, /\btelegram\b/i, /\bemail\b/i]
  },
  {
    workflowType: "apply_submit",
    riskTier: "high",
    blockedReason: "Applications and form submissions require a future final execution gate.",
    patterns: [/\bapply\b/i, /\bsubmit\b/i, /\bsend (?:the )?application\b/i, /\bfile (?:the )?form\b/i]
  },
  {
    workflowType: "buy_pay_purchase",
    riskTier: "high",
    blockedReason: "Purchases, payments, and checkout are blocked.",
    patterns: [/\bbuy\b/i, /\bpay\b/i, /\bpurchase\b/i, /\bcheckout\b/i, /\border\b/i]
  },
  {
    workflowType: "book_schedule",
    riskTier: "high",
    blockedReason: "Booking and scheduling require a future provider-backed confirmation gate.",
    patterns: [/\bbook\b/i, /\bschedule\b/i, /\bappointment\b/i, /\breserve\b/i]
  },
  {
    workflowType: "dispatch_help",
    riskTier: "high",
    blockedReason: "Dispatching help is blocked until an approved dispatch provider gate exists.",
    patterns: [/\bdispatch\b/i, /\bsend help\b/i]
  },
  {
    workflowType: "account_login_or_creation",
    riskTier: "high",
    blockedReason: "Account login, account creation, and identity verification are blocked.",
    patterns: [/\blog ?in(?:to)?\b/i, /\bsign ?in\b/i, /\bcreate account\b/i, /\bsign up\b/i, /\bverify (?:my )?identity\b/i]
  }
]);

const SUPPORTED_RULES = Object.freeze([
  {
    workflowType: "shipment_status_workflow",
    safeEntryPoint: "shipment-status-preview",
    requiresProvider: true,
    requiresUserInput: goal => !/\b[A-Z]{2,}\d{2,}\b/i.test(goal),
    patterns: [/\btrack\b/i, /\bshipment\b/i, /\btracking\b/i]
  },
  {
    workflowType: "marketplace_browse_workflow",
    safeEntryPoint: "marketplace-browse-preview",
    requiresProvider: true,
    patterns: [/\bbrowse agritrade\b/i, /\bagritrade options\b/i, /\bmarketplace\b/i, /\btrade options\b/i]
  },
  {
    workflowType: "media_training_discovery_workflow",
    safeEntryPoint: "training-media-discovery-preview",
    requiresProvider: true,
    patterns: [/\btraining videos?\b/i, /\bfind .*videos?\b/i, /\bvideo training\b/i, /\bmedia training\b/i]
  },
  {
    workflowType: "weather_planning_workflow",
    safeEntryPoint: "weather-planning-preview",
    requiresProvider: true,
    patterns: [/\bweather\b/i, /\bforecast\b/i, /\brain\b/i, /\bplan around\b/i]
  },
  {
    workflowType: "workforce_program_comparison_workflow",
    safeEntryPoint: "workforce-program-comparison-preview",
    requiresProvider: true,
    patterns: [/\bcompare workforce programs?\b/i, /\bcompare .*programs?\b/i, /\bworkforce programs?\b/i]
  },
  {
    workflowType: "crop_issue_guidance_workflow",
    safeEntryPoint: "crop-guidance-preview",
    requiresProvider: true,
    patterns: [/\bcrop issues?\b/i, /\bcrop problem\b/i, /\bsolve .*crop\b/i, /\bpest\b/i, /\bsoil\b/i, /\birrigation issue\b/i, /\bdisease\b/i]
  },
  {
    workflowType: "agriculture_training_workflow",
    safeEntryPoint: "agriculture-training-preview",
    requiresProvider: true,
    patterns: [/\bagriculture training\b/i, /\bfarm training\b/i, /\bprepare for .*training\b/i, /\btraining\b/i]
  },
  {
    workflowType: "job_search_workflow",
    safeEntryPoint: "job-search-preview",
    requiresProvider: true,
    patterns: [/\bfarm jobs?\b/i, /\bget .*job\b/i, /\bjob near\b/i, /\bjob search\b/i, /\bemployment\b/i, /\bcareer\b/i]
  },
  {
    workflowType: "agriculture_news_awareness_workflow",
    safeEntryPoint: "agriculture-news-awareness-preview",
    requiresProvider: true,
    patterns: [/\bagriculture news\b/i, /\bag news\b/i, /\bcrop news\b/i, /\bfarm updates\b/i]
  }
]);

function normalizeGoal(goal) {
  return String(goal || "").trim().replace(/\s+/g, " ");
}

function matchesAny(goal, patterns) {
  return patterns.some(pattern => pattern.test(goal));
}

function baseClassification(goal, overrides = {}) {
  return Object.freeze({
    workflowType: overrides.workflowType || "general_assistant_plan_workflow",
    userGoal: goal,
    riskTier: overrides.riskTier || "low",
    allowed: overrides.allowed !== false,
    blockedReason: overrides.blockedReason || "",
    requiresProvider: Boolean(overrides.requiresProvider),
    requiresUserInput: Boolean(overrides.requiresUserInput),
    requiresConfirmation: Boolean(overrides.requiresConfirmation),
    executionProhibited: true,
    safeEntryPoint: overrides.safeEntryPoint || "general-assistant-plan-preview",
    blockedActions: Object.freeze([...(overrides.blockedActions || BLOCKED_ACTIONS)])
  });
}

function classifyAutonomyWorkflowGoal(rawGoal) {
  const goal = normalizeGoal(rawGoal);

  if (!goal) {
    return baseClassification(goal, {
      workflowType: "general_assistant_plan_workflow",
      requiresUserInput: true,
      safeEntryPoint: "ask-for-goal-preview"
    });
  }

  const blockedRule = BLOCKED_RULES.find(rule => matchesAny(goal, rule.patterns));
  if (blockedRule) {
    return baseClassification(goal, {
      workflowType: blockedRule.workflowType,
      riskTier: blockedRule.riskTier,
      allowed: false,
      blockedReason: blockedRule.blockedReason,
      requiresConfirmation: true,
      safeEntryPoint: "blocked-workflow-boundary",
      blockedActions: [blockedRule.workflowType, ...BLOCKED_ACTIONS.filter(action => action !== blockedRule.workflowType)]
    });
  }

  const supportedRule = SUPPORTED_RULES.find(rule => matchesAny(goal, rule.patterns));
  if (supportedRule) {
    const requiresUserInput = typeof supportedRule.requiresUserInput === "function"
      ? supportedRule.requiresUserInput(goal)
      : Boolean(supportedRule.requiresUserInput);
    return baseClassification(goal, {
      workflowType: supportedRule.workflowType,
      requiresProvider: supportedRule.requiresProvider,
      requiresUserInput,
      safeEntryPoint: supportedRule.safeEntryPoint
    });
  }

  return baseClassification(goal, {
    workflowType: "general_assistant_plan_workflow",
    safeEntryPoint: "general-assistant-plan-preview"
  });
}

function isSafeAutonomyWorkflowClassification(classification) {
  return Boolean(
    classification &&
    classification.executionProhibited === true &&
    classification.blockedActions &&
    Array.isArray(classification.blockedActions) &&
    classification.blockedActions.length > 0 &&
    (classification.allowed === false || SUPPORTED_WORKFLOW_TYPES.includes(classification.workflowType))
  );
}

module.exports = Object.freeze({
  BLOCKED_ACTIONS,
  BLOCKED_WORKFLOW_TYPES,
  SUPPORTED_WORKFLOW_TYPES,
  classifyAutonomyWorkflowGoal,
  isSafeAutonomyWorkflowClassification
});
