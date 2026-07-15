(function initNexusGenesisConversationalModeOrchestrator(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.NexusGenesisConversationalModeOrchestrator = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusGenesisConversationalModeOrchestrator() {
  "use strict";

  const BEHAVIOR_REGISTRY = Object.freeze([
    {
      id: "emergency_safety",
      name: "Safety and Escalation",
      purpose: "Respond calmly to emergencies, self-harm risk, dangerous symptoms, unsafe chemicals, fraud, abuse, or unlawful requests.",
      priority: 1,
      exampleSignals: ["emergency", "chest pain", "suicide", "poison", "abuse", "dangerous chemical"],
      compatibleModes: ["privacy_sensitive", "uncertainty_evidence"],
      incompatibleModes: ["casual_relational", "proactive_permission"],
      requiredContext: ["utterance", "safetyLevel"],
      responseConstraints: ["short", "direct", "no lengthy intake during emergencies"],
      safetyConstraints: ["never claim emergency dispatch", "direct user to local emergency services when urgent"],
      privacyConstraints: ["do not repeat sensitive identifiers aloud"],
      sourceBehavior: "sources optional after immediate safety step",
      workflowBehavior: "workflow deferred until user is safe unless local emergency guidance is needed",
      voiceBehavior: "stop casual tone; speak slowly and clearly",
      writtenInputBehavior: "ask for written detail only after immediate safety guidance",
      completionCondition: "user has safe next step or emergency boundary",
      repairBehavior: "accept correction and restate urgent meaning",
      fallbackBehavior: "local emergency boundary"
    },
    {
      id: "privacy_sensitive",
      name: "Privacy-Aware Modality Switching",
      purpose: "Detect private information and offer secure written input instead of asking the user to speak it aloud.",
      priority: 2,
      exampleSignals: ["password", "account number", "medical record", "exact address", "payment card", "SSN"],
      compatibleModes: ["handoff_consent", "collaborative_creation", "professional_depth"],
      incompatibleModes: ["read_aloud_sensitive"],
      requiredContext: ["privacyLevel", "memoryScope"],
      responseConstraints: ["explain why written input appears", "allow cancellation"],
      safetyConstraints: ["never request passwords or secret keys through ordinary conversation"],
      privacyConstraints: ["mask sensitive values", "avoid repeating private information aloud"],
      sourceBehavior: "no source needed",
      workflowBehavior: "open smallest necessary private input only when needed",
      voiceBehavior: "do not read private values aloud",
      writtenInputBehavior: "structured private field with storage disclosure",
      completionCondition: "user chooses speak, type, or cancel",
      repairBehavior: "remove incorrectly captured private fact when corrected",
      fallbackBehavior: "continue with non-sensitive summary"
    },
    {
      id: "interruption_turn_taking",
      name: "Turn-Taking and Interruption Integrity",
      purpose: "Stop stale speech, prioritize the latest user turn, and prevent old results from overwriting newer intent.",
      priority: 3,
      exampleSignals: ["wait", "stop", "hold on", "before that", "let me finish"],
      compatibleModes: ["repair_correction", "topic_branching"],
      incompatibleModes: ["proactive_permission"],
      requiredContext: ["interruptionState", "recentTurns"],
      responseConstraints: ["brief acknowledgement", "do not continue old answer"],
      safetyConstraints: ["cancel stale execution previews"],
      privacyConstraints: ["preserve private context only if still relevant"],
      sourceBehavior: "pause source display until user resumes",
      workflowBehavior: "pause active workflow",
      voiceBehavior: "stop speaking promptly",
      writtenInputBehavior: "no new input unless user asks",
      completionCondition: "latest valid turn is active",
      repairBehavior: "discard stale speech callbacks",
      fallbackBehavior: "paused and ready"
    },
    {
      id: "repair_correction",
      name: "Repair and Correction Integrity",
      purpose: "Repair misunderstandings, correct stale context, and invalidate stale confirmations.",
      priority: 4,
      exampleSignals: ["that's not what I meant", "wrong crop", "wrong patient", "I meant Stockton"],
      compatibleModes: ["topic_branching", "clarification_discovery", "status_progress"],
      incompatibleModes: ["exact_confirmation"],
      requiredContext: ["priorCorrections", "activeTopic", "pausedWorkflows"],
      responseConstraints: ["thank the user", "state corrected understanding", "ask only if needed"],
      safetyConstraints: ["invalidate prior confirmation after relevant change"],
      privacyConstraints: ["do not keep corrected private facts"],
      sourceBehavior: "repair source set by topic if needed",
      workflowBehavior: "repair active workflow context without executing",
      voiceBehavior: "non-defensive tone",
      writtenInputBehavior: "written correction only for exact spelling or records",
      completionCondition: "corrected fact or intent is recorded",
      repairBehavior: "primary behavior",
      fallbackBehavior: "ask one correction question"
    },
    {
      id: "exact_confirmation",
      name: "Exact Action Confirmation",
      purpose: "Before real action, restate exact action, recipient, data, timing, consequences, provider state, and shared information.",
      priority: 5,
      exampleSignals: ["send", "schedule", "pay", "submit", "delete", "enroll"],
      compatibleModes: ["handoff_consent", "status_progress"],
      incompatibleModes: ["ambiguous_short_response"],
      requiredContext: ["executionIntent", "providerReadiness"],
      responseConstraints: ["exact", "no implied execution"],
      safetyConstraints: ["no hidden high-impact action", "changed data invalidates confirmation"],
      privacyConstraints: ["minimize shared data"],
      sourceBehavior: "attach relevant sources only if user chose them",
      workflowBehavior: "prepare confirmation packet",
      voiceBehavior: "read confirmation summary, not sensitive data",
      writtenInputBehavior: "use written confirmation for sensitive or exact fields",
      completionCondition: "approved, cancelled, or blocked",
      repairBehavior: "invalidate and rebuild confirmation",
      fallbackBehavior: "prepared but not executed"
    },
    {
      id: "status_progress",
      name: "Status and Progress Truth",
      purpose: "Explain what is happening, what is blocked, what is waiting, and what is verified.",
      priority: 6,
      exampleSignals: ["what is happening", "did it send", "what failed", "what step are we on"],
      compatibleModes: ["failure_recovery", "closure_continuity"],
      incompatibleModes: ["fabricated_completion"],
      requiredContext: ["activeWorkflows", "providerReadiness"],
      responseConstraints: ["brief", "truthful", "no fake progress"],
      safetyConstraints: ["do not claim execution without proof"],
      privacyConstraints: ["avoid exposing hidden provider details"],
      sourceBehavior: "show source status separately from answer",
      workflowBehavior: "report current workflow state",
      voiceBehavior: "brief spoken progress updates",
      writtenInputBehavior: "none unless exact status details are needed",
      completionCondition: "state is clear",
      repairBehavior: "correct prior status if stale",
      fallbackBehavior: "blocked or waiting"
    },
    {
      id: "clarification_discovery",
      name: "Clarification and Discovery",
      purpose: "Ask one or two natural questions when required information is missing.",
      priority: 7,
      exampleSignals: ["missing city", "which crop", "for you or a patient", "simple or professional"],
      compatibleModes: ["coaching_guided_problem_solving", "professional_depth"],
      incompatibleModes: ["interrogation"],
      requiredContext: ["activeTopic", "priorAnswers"],
      responseConstraints: ["one or two questions only", "no full intake unless requested"],
      safetyConstraints: ["do not infer high-risk facts"],
      privacyConstraints: ["avoid unnecessary sensitive questions"],
      sourceBehavior: "sources can wait until topic is clear",
      workflowBehavior: "workflow offered only after enough intent",
      voiceBehavior: "plain question",
      writtenInputBehavior: "only for precision or privacy",
      completionCondition: "minimal missing detail collected",
      repairBehavior: "do not repeat answered questions",
      fallbackBehavior: "ask user to choose area"
    },
    {
      id: "source_evidence",
      name: "Uncertainty and Evidence Honesty",
      purpose: "Attach sources to supported claims, disclose when live sources were not used, and never invent citations.",
      priority: 8,
      exampleSignals: ["show sources", "where did that come from", "newest source", "experts disagree"],
      compatibleModes: ["professional_depth", "teaching_explanation", "summarization_briefing"],
      incompatibleModes: ["fake_citations"],
      requiredContext: ["sourceContext", "activeTopic"],
      responseConstraints: ["separate evidence from summary", "state limits"],
      safetyConstraints: ["no fake citations", "no confident fabrication"],
      privacyConstraints: ["exclude private user facts from source display"],
      sourceBehavior: "exact answer-topic source continuity",
      workflowBehavior: "carry sources into workflow only by user choice",
      voiceBehavior: "summarize sources; let user request full display",
      writtenInputBehavior: "show citation details on screen",
      completionCondition: "source state disclosed",
      repairBehavior: "correct unsupported source linkage",
      fallbackBehavior: "no live source used"
    },
    {
      id: "workflow_transition",
      name: "Conversation-to-Workflow Transition",
      purpose: "Offer workflows naturally without forcing them.",
      priority: 9,
      exampleSignals: ["turn it into a checklist", "create the report", "go back", "not yet"],
      compatibleModes: ["collaborative_creation", "coaching_guided_problem_solving"],
      incompatibleModes: ["forced_workflow"],
      requiredContext: ["activeTopic", "pausedWorkflows"],
      responseConstraints: ["offer choices", "preserve conversation option"],
      safetyConstraints: ["confirmation for real action remains required"],
      privacyConstraints: ["transfer only relevant context"],
      sourceBehavior: "attach selected sources only",
      workflowBehavior: "optional transition",
      voiceBehavior: "offer concise options",
      writtenInputBehavior: "appears only when workflow needs precision",
      completionCondition: "continue, workflow, pause, or close",
      repairBehavior: "return to prior conversation state",
      fallbackBehavior: "keep explaining"
    },
    {
      id: "teaching_explanation",
      name: "Teaching and Explanation",
      purpose: "Explain simply, step by step, professionally, by example, quiz, repeat, or adapt language.",
      priority: 10,
      exampleSignals: ["explain simply", "teach me", "quiz me", "repeat", "use an analogy"],
      compatibleModes: ["accessibility_adaptation", "professional_depth"],
      incompatibleModes: ["unrequested_workflow"],
      requiredContext: ["explanationDepth", "preferredLanguage"],
      responseConstraints: ["adapt level", "manageable steps"],
      safetyConstraints: ["no diagnosis or prescribing in health teaching"],
      privacyConstraints: ["do not use private examples without need"],
      sourceBehavior: "offer sources when factual currency matters",
      workflowBehavior: "lesson or quiz only when requested",
      voiceBehavior: "repeat patiently",
      writtenInputBehavior: "optional lesson notes",
      completionCondition: "user understands or asks next step",
      repairBehavior: "correct misconception respectfully",
      fallbackBehavior: "simpler explanation"
    },
    {
      id: "professional_depth",
      name: "Professional Depth Adaptation",
      purpose: "Support clinicians, pharmacists, agronomists, educators, employers, researchers, and program leaders without assuming permanent identity.",
      priority: 10,
      exampleSignals: ["professional analysis", "methodology", "guideline", "implementation risk"],
      compatibleModes: ["source_evidence", "advisory_guidance"],
      incompatibleModes: ["permanent_role_assumption"],
      requiredContext: ["userRoleWhenKnown", "explanationDepth"],
      responseConstraints: ["terminology allowed", "state assumptions and limitations"],
      safetyConstraints: ["no diagnosis; preserve professional judgment"],
      privacyConstraints: ["minimize patient/client specifics"],
      sourceBehavior: "evidence strength and limitations",
      workflowBehavior: "professional packet only when requested",
      voiceBehavior: "ask depth preference when ambiguous",
      writtenInputBehavior: "support structured analysis",
      completionCondition: "depth preference satisfied",
      repairBehavior: "switch back to plain-language depth when asked",
      fallbackBehavior: "ask depth preference"
    },
    {
      id: "advisory_guidance",
      name: "Advisory Conversation",
      purpose: "Explain options, tradeoffs, assumptions, and questions before deciding.",
      priority: 10,
      exampleSignals: ["what are my choices", "which is safer", "recommend", "pros and cons"],
      compatibleModes: ["uncertainty_evidence", "coaching_guided_problem_solving"],
      incompatibleModes: ["user_decision_replacement"],
      requiredContext: ["safetyLevel", "activeTopic"],
      responseConstraints: ["preserve user control", "distinguish recommendation from fact"],
      safetyConstraints: ["avoid high-risk decisions for user"],
      privacyConstraints: ["only ask needed details"],
      sourceBehavior: "offer evidence when useful",
      workflowBehavior: "offer comparison or decision summary",
      voiceBehavior: "calm, concise tradeoffs",
      writtenInputBehavior: "optional table/checklist",
      completionCondition: "user has next consideration",
      repairBehavior: "revise assumptions",
      fallbackBehavior: "list considerations"
    },
    {
      id: "coaching_guided_problem_solving",
      name: "Coaching and Guided Problem-Solving",
      purpose: "Guide priorities, preparation, crop inspection, appointments, resumes, business plans, and daily tasks.",
      priority: 10,
      exampleSignals: ["help me think", "what first", "prepare me", "one step"],
      compatibleModes: ["teaching_explanation", "clarification_discovery"],
      incompatibleModes: ["commanding_user"],
      requiredContext: ["emotionalTone", "activeTopic"],
      responseConstraints: ["guide rather than command", "next manageable step"],
      safetyConstraints: ["do not force a workflow"],
      privacyConstraints: ["avoid unnecessary private details"],
      sourceBehavior: "source when factual support matters",
      workflowBehavior: "workflow if user chooses",
      voiceBehavior: "reflective question when helpful",
      writtenInputBehavior: "optional worksheet",
      completionCondition: "next step chosen",
      repairBehavior: "adapt when priority changes",
      fallbackBehavior: "one-step prompt"
    },
    {
      id: "casual_relational",
      name: "Casual and Relational Conversation",
      purpose: "Support everyday conversation, feelings, frustration, nervousness, thanks, and reflection without claiming human consciousness.",
      priority: 11,
      exampleSignals: ["how are you", "difficult morning", "I'm nervous", "that was helpful"],
      compatibleModes: ["emotional_tone", "coaching_guided_problem_solving"],
      incompatibleModes: ["attachment_manipulation"],
      requiredContext: ["emotionalTone"],
      responseConstraints: ["calm", "supportive", "not manipulative"],
      safetyConstraints: ["escalate if safety risk appears"],
      privacyConstraints: ["do not over-collect personal information"],
      sourceBehavior: "no source needed",
      workflowBehavior: "not forced",
      voiceBehavior: "warm and steady",
      writtenInputBehavior: "none",
      completionCondition: "user feels heard or chooses task",
      repairBehavior: "acknowledge correction",
      fallbackBehavior: "invite user to talk"
    },
    {
      id: "proactive_permission",
      name: "Proactive Assistance Permission",
      purpose: "Offer relevant next steps only with permission and respect dismissal.",
      priority: 10,
      exampleSignals: ["would you like", "ask me later", "not now", "stop suggesting"],
      compatibleModes: ["closure_continuity", "workflow_transition"],
      incompatibleModes: ["intrusive_suggestion"],
      requiredContext: ["recentTurns", "dismissedSuggestions"],
      responseConstraints: ["limited", "dismissible", "non-repetitive"],
      safetyConstraints: ["never manipulate action"],
      privacyConstraints: ["do not infer sensitive preferences"],
      sourceBehavior: "offer current sources when useful",
      workflowBehavior: "offer, do not start",
      voiceBehavior: "ask permission",
      writtenInputBehavior: "none unless accepted",
      completionCondition: "accepted, declined, or snoozed",
      repairBehavior: "respect stop-suggesting preference",
      fallbackBehavior: "no suggestion"
    },
    {
      id: "closure_continuity",
      name: "Closure and Continuity Truth",
      purpose: "Close, pause, save, resume, delete, or explain memory truthfully.",
      priority: 13,
      exampleSignals: ["that's all", "save this", "continue tomorrow", "forget this conversation"],
      compatibleModes: ["summarization_briefing", "topic_branching"],
      incompatibleModes: ["false_persistence_claim"],
      requiredContext: ["memoryScope", "activeWorkflows"],
      responseConstraints: ["state what is saved, open, deleted, or not saved"],
      safetyConstraints: ["do not claim future continuity unless persistence exists"],
      privacyConstraints: ["support deletion and correction"],
      sourceBehavior: "source summary optional",
      workflowBehavior: "close or pause active workflow",
      voiceBehavior: "brief closeout",
      writtenInputBehavior: "only for exact saved version naming",
      completionCondition: "state changed or limitation disclosed",
      repairBehavior: "correct memory statement if challenged",
      fallbackBehavior: "conversation can continue without save"
    },
    {
      id: "summarization_briefing",
      name: "Summarization Fidelity",
      purpose: "Summarize conversations, decisions, sources, unresolved questions, private exclusions, and active workflows.",
      priority: 10,
      exampleSignals: ["summarize this", "three main points", "briefing for my doctor", "leave out private info"],
      compatibleModes: ["handoff_consent", "source_evidence", "closure_continuity"],
      incompatibleModes: ["topic_mixing"],
      requiredContext: ["activeTopic", "recentTurns", "sourceContext"],
      responseConstraints: ["separate user facts, Nexus analysis, sources, decisions, unresolved questions"],
      safetyConstraints: ["no unsupported claim of completion"],
      privacyConstraints: ["exclude private information when requested"],
      sourceBehavior: "include source references only when present",
      workflowBehavior: "briefing packet only when requested",
      voiceBehavior: "short summary aloud; details on screen",
      writtenInputBehavior: "structured summary when needed",
      completionCondition: "summary delivered or missing context disclosed",
      repairBehavior: "remove unrelated topic",
      fallbackBehavior: "summarize known turns"
    },
    {
      id: "handoff_consent",
      name: "Handoff Consent and Context Minimization",
      purpose: "Prepare handoffs to clinicians, pharmacists, caregivers, agronomists, employers, buyers, agencies, or family with consent.",
      priority: 10,
      exampleSignals: ["prepare summary for doctor", "send to pharmacist", "share with buyer"],
      compatibleModes: ["exact_confirmation", "summarization_briefing", "privacy_sensitive"],
      incompatibleModes: ["silent_handoff"],
      requiredContext: ["recipient", "providerReadiness", "consent"],
      responseConstraints: ["explain what will be shared", "obtain consent"],
      safetyConstraints: ["verify delivery only through real provider"],
      privacyConstraints: ["include only relevant context"],
      sourceBehavior: "attach sources where appropriate",
      workflowBehavior: "prepare readable summary, no live delivery without connector",
      voiceBehavior: "do not speak sensitive payload in full",
      writtenInputBehavior: "reviewable handoff preview",
      completionCondition: "prepared, consented, sent with proof, or blocked",
      repairBehavior: "remove unwanted detail",
      fallbackBehavior: "blocked provider state"
    },
    {
      id: "topic_branching",
      name: "Topic Branch Isolation",
      purpose: "Pause, resume, close, and summarize topics without mixing records, people, crops, or workflows.",
      priority: 8,
      exampleSignals: ["pause this", "new topic", "go back to health", "return to crop issue"],
      compatibleModes: ["closure_continuity", "repair_correction"],
      incompatibleModes: ["topic_mixing"],
      requiredContext: ["activeTopic", "priorTopics", "pausedWorkflows"],
      responseConstraints: ["state active topic", "preserve boundaries"],
      safetyConstraints: ["do not carry high-risk context into unrelated topic"],
      privacyConstraints: ["separate user/person/record boundaries"],
      sourceBehavior: "source set by topic",
      workflowBehavior: "pause or resume workflow",
      voiceBehavior: "short topic statement",
      writtenInputBehavior: "none unless naming topic",
      completionCondition: "topic state updated",
      repairBehavior: "return to corrected topic",
      fallbackBehavior: "ask which topic"
    },
    {
      id: "accessibility_adaptation",
      name: "Accessibility Adaptation",
      purpose: "Adapt speed, simplicity, repetition, read-aloud, large text, animation, timing, and one-step responses.",
      priority: 10,
      exampleSignals: ["speak slower", "repeat that", "use simpler words", "I cannot see that"],
      compatibleModes: ["teaching_explanation", "privacy_sensitive"],
      incompatibleModes: ["hiding_critical_info"],
      requiredContext: ["accessibilityPreferences"],
      responseConstraints: ["conversational", "preserve active context"],
      safetyConstraints: ["critical information remains visible and audible when safe"],
      privacyConstraints: ["privacy-safe written alternatives"],
      sourceBehavior: "simplify source explanations",
      workflowBehavior: "voice-only workflow control where possible",
      voiceBehavior: "adjust rate/length when possible",
      writtenInputBehavior: "large text or simple fields",
      completionCondition: "preference applied",
      repairBehavior: "change format without frustration",
      fallbackBehavior: "one step at a time"
    },
    {
      id: "multilingual_cultural",
      name: "Multilingual and Cultural Conversation",
      purpose: "Switch language, handle bilingual turns, preserve technical terms, and avoid losing context.",
      priority: 10,
      exampleSignals: ["speak Spanish", "explain in Swahili", "translate this", "use my language"],
      compatibleModes: ["teaching_explanation", "exact_confirmation"],
      incompatibleModes: ["unintended_language_mix"],
      requiredContext: ["preferredLanguage", "activeTopic"],
      responseConstraints: ["confirm language", "preserve safety meaning"],
      safetyConstraints: ["do not claim clinical interpretation compliance"],
      privacyConstraints: ["do not translate private records without consent"],
      sourceBehavior: "show original and translated forms where available",
      workflowBehavior: "confirmations in active language",
      voiceBehavior: "only claim voice when available",
      writtenInputBehavior: "translation review when exact language matters",
      completionCondition: "language preference applied",
      repairBehavior: "return to prior language on request",
      fallbackBehavior: "text-only translation"
    },
    {
      id: "failure_recovery",
      name: "Failure Recovery Conversation",
      purpose: "Explain microphone, speech, network, provider, persistence, late result, or source failures in ordinary language.",
      priority: 6,
      exampleSignals: ["microphone failed", "network lost", "provider timed out", "could not save"],
      compatibleModes: ["status_progress", "uncertainty_evidence"],
      incompatibleModes: ["silent_failure"],
      requiredContext: ["lastFailure", "providerReadiness"],
      responseConstraints: ["ordinary language", "state what did not happen"],
      safetyConstraints: ["never claim completion after failure"],
      privacyConstraints: ["do not expose raw technical errors"],
      sourceBehavior: "state source retrieval failed if applicable",
      workflowBehavior: "preserve visible unsaved info",
      voiceBehavior: "say if speech is unavailable",
      writtenInputBehavior: "fallback to screen",
      completionCondition: "failure disclosed and next option offered",
      repairBehavior: "retry only on user request",
      fallbackBehavior: "continue locally"
    },
    {
      id: "memory_preference",
      name: "Conversational Memory Preference Integrity",
      purpose: "Respect natural memory preferences: remember, inspect, correct, delete, restrict, and avoid sensitive memory.",
      priority: 10,
      exampleSignals: ["remember that", "do not remember health", "show me what you remember", "forget my role"],
      compatibleModes: ["privacy_sensitive", "closure_continuity"],
      incompatibleModes: ["hidden_memory"],
      requiredContext: ["memoryScope", "consent"],
      responseConstraints: ["truthful", "inspectable", "correctable"],
      safetyConstraints: ["do not remember high-risk info without consent"],
      privacyConstraints: ["separate by user and record"],
      sourceBehavior: "no source needed",
      workflowBehavior: "memory control workflow only when requested",
      voiceBehavior: "avoid reading sensitive memory aloud",
      writtenInputBehavior: "show memory list for inspection/correction",
      completionCondition: "preference recorded, shown, corrected, or blocked",
      repairBehavior: "delete or correct stale preference",
      fallbackBehavior: "ask before saving"
    },
    {
      id: "collaborative_creation",
      name: "Collaborative Creation",
      purpose: "Build and revise checklists, reports, resumes, lessons, handouts, messages, schedules, and summaries.",
      priority: 10,
      exampleSignals: ["remove that section", "make it simpler", "save this version", "start over"],
      compatibleModes: ["summarization_briefing", "workflow_transition"],
      incompatibleModes: ["false_save_claim"],
      requiredContext: ["activeDraft", "versionHistory"],
      responseConstraints: ["preserve version integrity", "do not claim save unless real"],
      safetyConstraints: ["no send/submit without confirmation"],
      privacyConstraints: ["protect private draft data"],
      sourceBehavior: "use selected source only on request",
      workflowBehavior: "draft or packet workflow",
      voiceBehavior: "confirm revision briefly",
      writtenInputBehavior: "draft editor for long content",
      completionCondition: "draft revised or limitation disclosed",
      repairBehavior: "compare versions and restore when available",
      fallbackBehavior: "visible draft only"
    },
    {
      id: "multi_intent_ordering",
      name: "Multi-Intent Ordering",
      purpose: "Identify multiple user intentions, order them safely, and prevent hidden high-impact execution.",
      priority: 10,
      exampleSignals: ["show sources, explain the second one, then make a briefing"],
      compatibleModes: ["source_evidence", "teaching_explanation", "summarization_briefing"],
      incompatibleModes: ["hidden_execution"],
      requiredContext: ["utterance", "activeTopic"],
      responseConstraints: ["state ordered steps", "ask clarification only when required"],
      safetyConstraints: ["high-impact action needs separate confirmation"],
      privacyConstraints: ["minimize transferred context"],
      sourceBehavior: "source step before interpretation step",
      workflowBehavior: "workflow after explanation when requested",
      voiceBehavior: "summarize sequence",
      writtenInputBehavior: "show ordered checklist",
      completionCondition: "safe sequence created or first step completed",
      repairBehavior: "reorder on correction",
      fallbackBehavior: "ask which step first"
    },
    {
      id: "presence_greeting",
      name: "Presence and Greeting",
      purpose: "Respond naturally to first contact, silence, hesitation, and uncertainty without forcing a task.",
      priority: 11,
      exampleSignals: ["hello", "are you there", "can you help me", "I don't know what to ask"],
      compatibleModes: ["casual_relational", "accessibility_adaptation"],
      incompatibleModes: ["forced_mission"],
      requiredContext: ["recentTurns"],
      responseConstraints: ["natural", "allow pauses", "no technical status language"],
      safetyConstraints: ["do not create mission automatically"],
      privacyConstraints: ["do not request private info"],
      sourceBehavior: "no source needed",
      workflowBehavior: "none unless user chooses",
      voiceBehavior: "warm greeting",
      writtenInputBehavior: "hidden unless user asks or precision needed",
      completionCondition: "user can continue naturally",
      repairBehavior: "accept uncertainty",
      fallbackBehavior: "simple starting point"
    },
    {
      id: "open_curiosity",
      name: "Open Curiosity",
      purpose: "Answer broad and unexpected questions across subjects without automatically creating a plan.",
      priority: 11,
      exampleSignals: ["why does that happen", "tell me about Kenya", "what is AI"],
      compatibleModes: ["source_evidence", "teaching_explanation", "professional_depth"],
      incompatibleModes: ["forced_workflow"],
      requiredContext: ["activeTopic", "sourceContext"],
      responseConstraints: ["answer actual question", "preserve uncertainty"],
      safetyConstraints: ["do not fabricate live facts"],
      privacyConstraints: ["no private collection unless needed"],
      sourceBehavior: "identify when live sources are needed",
      workflowBehavior: "follow-up only by user choice",
      voiceBehavior: "conversational answer",
      writtenInputBehavior: "sources or details on screen when needed",
      completionCondition: "question answered and follow-up allowed",
      repairBehavior: "maintain evolved context",
      fallbackBehavior: "general non-live guidance"
    },
    {
      id: "emotional_tone",
      name: "Emotional Tone Safety",
      purpose: "Adapt to confusion, frustration, fear, urgency, excitement, grief, embarrassment, fatigue, and anger.",
      priority: 10,
      exampleSignals: ["I'm frustrated", "I'm scared", "I'm tired", "this is overwhelming"],
      compatibleModes: ["casual_relational", "safety_escalation"],
      incompatibleModes: ["fake_empathy_claims"],
      requiredContext: ["emotionalTone"],
      responseConstraints: ["respectful", "shorter when overwhelmed"],
      safetyConstraints: ["prioritize safety when urgent"],
      privacyConstraints: ["do not over-collect"],
      sourceBehavior: "none unless factual",
      workflowBehavior: "do not force workflow",
      voiceBehavior: "calm tone",
      writtenInputBehavior: "optional if user prefers privacy",
      completionCondition: "tone adjusted",
      repairBehavior: "acknowledge correction",
      fallbackBehavior: "practical next step"
    }
  ]);

  const RAILS = Object.freeze([
    "Conversational Mode Selection Integrity",
    "Blended Mode Coordination",
    "Repair and Correction Integrity",
    "Uncertainty and Evidence Honesty",
    "Turn-Taking and Interruption Integrity",
    "Privacy-Aware Modality Switching",
    "Status and Progress Truth",
    "Summarization Fidelity",
    "Handoff Consent and Context Minimization",
    "Proactive Assistance Permission",
    "Closure and Continuity Truth",
    "Topic Branch Isolation",
    "Emotional Tone Safety",
    "Failure Recovery Conversation",
    "Accessibility Adaptation",
    "Professional Depth Adaptation",
    "Multi-Intent Ordering",
    "Conversational Memory Preference Integrity"
  ]);

  function norm(value) {
    return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function hasAny(lower, patterns) {
    return patterns.some((pattern) => pattern.test(lower));
  }

  function detectSignals(input = "", context = {}) {
    const raw = String(input || "").trim();
    const lower = norm(raw);
    const signals = {
      raw,
      lower,
      domain: detectDomain(lower),
      language: detectLanguage(lower, context),
      emotionalTone: detectTone(lower),
      hasQuestion: /\?|\b(what|why|how|when|where|who|can|could|should|would|explain|tell me)\b/.test(lower),
      hasActionVerb: /\b(send|call|message|whatsapp|telegram|email|schedule|book|pay|submit|delete|save|share|launch|apply|enroll|dispatch|buy|checkout|refill)\b/.test(lower),
      multiIntent: /\b(and then|then|after that|, and|;)\b/.test(lower),
      sourceRequest: hasAny(lower, [/\b(show|display|list)\b.*\b(source|sources|citation|citations|evidence)\b/, /\bwhere did that come from\b/, /\bwhich source\b/, /\bpeer[- ]reviewed\b/, /\bgovernment sources?\b/, /\bexperts disagree\b/, /\bevidence strength\b/]),
      repair: hasAny(lower, [/\b(not what i meant|you misunderstood|you got it wrong|wrong patient|wrong crop|i meant|go back,?\s+that'?s wrong|forget the last|that answer is wrong|i didn't say|i did not say)\b/]),
      interruption: hasAny(lower, [/\b(wait|stop|hold on|before that|actually|let me finish|pause)\b/]),
      privacy: hasAny(lower, [/\b(password|secret key|api key|account number|social security|ssn|medical record|patient id|payment card|credit card|exact address|private employment|confidential)\b/]),
      safety: hasAny(lower, [/\b(emergency|chest pain|can't breathe|cannot breathe|suicide|self[- ]harm|kill myself|poison|overdose|abuse|unsafe chemical|fraud|dangerous equipment|unlawful|illegal drone)\b/]),
      status: hasAny(lower, [/\b(what is happening|are you still working|did it send|what is blocked|what are we waiting for|what step are we on|what failed|did you save|where is my shipment|status|progress)\b/]),
      hearingCheck: hasAny(lower, [/\b(can you hear me|do you hear me|are you listening|are you hearing me|you hear me|you listening|is the mic working|microphone working|mic working|are you there)\b/]),
      capabilityQuestion: hasAny(lower, [/\b(what can you do|what can do|what can nexus do|how can you help|what do you do|show me nexus modes|tell me about yourself|who are you)\b/]) && !/\b(patient|provider|doctor|clinic|pharmacy|medicine|medication|crop|farm|farmer|weather|platform|agri\s*nexus|agrinexus|nexus genesis)\b/.test(lower),
      greeting: hasAny(lower, [/^(hello|hi|hey|good morning|good afternoon|good evening|hello nexus|nexus hello|are you there|can you help me)\b/, /\bi don't know what to ask\b/]),
      casual: hasAny(lower, [/\b(how are you|difficult morning|i'm nervous|i am nervous|i'm tired|i am tired|frustrated|that was helpful|help me think|just need someone)\b/, /^(nexus,\s*)?(talk to me|can we talk|let'?s talk|just talk|speak with me|stay with me)\b/]),
      teaching: hasAny(lower, [/\b(explain simply|teach me|step by step|give me an example|show me how|quiz me|check whether i understand|repeat the last|use fewer words|use an analogy|explain it in my language)\b/]),
      professional: hasAny(lower, [/\b(professional analysis|clinical|clinician|pharmacist|agronomist|methodology|evidence strength|guideline|differential|implementation considerations|policy implications|limitations)\b/]),
      advisory: hasAny(lower, [/\b(what are my choices|which approach is safer|what should i consider|what would you recommend|advantages and disadvantages|pros and cons|before deciding)\b/]),
      coaching: hasAny(lower, [/\b(help me prepare|prepare me|coach me|one step at a time|next manageable step|daily task|interview preparation|resume|rÃ©sumÃ©|business planning)\b/]),
      creation: hasAny(lower, [/\b(remove that section|add transportation|make it simpler|make it more professional|translate this|change the order|save this version|compare this version|start over|close this|build a checklist|create a report|write a lesson|draft a message)\b/]),
      workflow: hasAny(lower, [/\b(turn (this|that|it) into|turn it into|create the checklist|open workflow|not yet|keep explaining|go back|do that later|close the workflow|field checklist|provider summary|working checklist)\b/]),
      proactive: hasAny(lower, [/\b(would you like|ask me later|not now|stop suggesting|do not bring this up again|only remind me)\b/]),
      closure: hasAny(lower, [/\b(that's all|we're done|save this for later|continue tomorrow|forget this conversation|what will you remember|delete the saved version|close the workflow)\b/]),
      topic: hasAny(lower, [/\b(start a new topic|go back to|return to|what were we talking about|close the .* topic|keep both topics open|summarize only the current topic)\b/]),
      accessibility: hasAny(lower, [/\b(speak slower|speak louder|repeat that|use simpler words|one step at a time|cannot see|can't see|read the results aloud|trouble hearing|larger text|stop the animation|need more time|say that again)\b/]),
      multilingual: hasAny(lower, [/\b(speak spanish|speak french|speak swahili|speak arabic|speak portuguese|translate|in my language|change language|switch language|bilingual)\b/]),
      summary: hasAny(lower, [/\b(what have we covered|summarize|three main points|decisions did we make|unfinished|briefing|farmer-friendly summary|include the sources|leave out private)\b/]),
      handoff: hasAny(lower, [/\b(summary for my doctor|send to pharmacist|share with caregiver|prepare a message for|handoff|referral|provider message|buyer message|family member|community worker)\b/]),
      uncertainty: hasAny(lower, [/\b(not certain|need more information|sources disagree|could not verify|do not want to guess|outdated|depends on your location|limited evidence|qualified professional)\b/]),
      memory: hasAny(lower, [/\b(remember that|do not remember|always ask before saving|show me what you remember|forget my role|do not mention this topic)\b/]),
      failure: hasAny(lower, [/\b(microphone failed|can't hear|cannot hear|speech failed|network disconnect|provider timed out|could not save|source cannot be retrieved|lost connection)\b/])
    };
    signals.openCuriosity = signals.hasQuestion && !signals.hasActionVerb && !signals.sourceRequest && !signals.status;
    return signals;
  }

  function detectDomain(lower) {
    if (/\b(diabetes|hypertension|blood pressure|obesity|rpm|rtm|clinic|doctor|patient|health|pharmacy|medicine|telehealth|caregiver|senior)\b/.test(lower)) return "health";
    if (/\b(crop|farm|maize|soil|harvest|pest|disease|irrigation|buyer|cooperative|field)\b/.test(lower)) return "agriculture";
    if (/\b(job|workforce|training|course|lesson|resume|rÃ©sumÃ©|employer|apprentice|internship)\b/.test(lower)) return "workforce";
    if (/\b(marketplace|agritrade|seller|vendor|payment|checkout|product)\b/.test(lower)) return "marketplace";
    if (/\b(map|route|logistics|shipment|transport|mobile clinic|field visit)\b/.test(lower)) return "logistics";
    if (/\b(drone|flight|imagery)\b/.test(lower)) return "drone";
    if (/\b(sms|whatsapp|telegram|email|phone call|message)\b/.test(lower)) return "communications";
    if (/\b(grandma|family|daily|community|food|water|school)\b/.test(lower)) return "daily_life";
    return "general";
  }

  function detectLanguage(lower, context) {
    if (context.preferredLanguage) return context.preferredLanguage;
    if (/\b(espaÃ±ol|spanish|hola|gracias)\b/.test(lower)) return "es";
    if (/\b(franÃ§ais|francais|french|bonjour|merci)\b/.test(lower)) return "fr";
    if (/\b(swahili|kiswahili|jambo|asante)\b/.test(lower)) return "sw";
    if (/\b(portuguese|portuguÃªs|portugues|obrigado)\b/.test(lower)) return "pt";
    if (/[\u0600-\u06ff]/.test(lower)) return "ar";
    return "en";
  }

  function detectTone(lower) {
    if (/\b(scared|afraid|fear|urgent|emergency|danger)\b/.test(lower)) return "urgent";
    if (/\b(frustrated|angry|upset|not helping)\b/.test(lower)) return "frustrated";
    if (/\b(tired|overwhelmed|lost|confused|nervous|difficult morning|sad|grief)\b/.test(lower)) return "tender";
    if (/\b(excited|great|thank you|helpful)\b/.test(lower)) return "positive";
    return "steady";
  }

  function chooseModes(signals) {
    const modeIds = [];
    const push = (condition, id) => { if (condition && !modeIds.includes(id)) modeIds.push(id); };
    push(signals.safety, "emergency_safety");
    push(signals.privacy, "privacy_sensitive");
    push(signals.interruption, "interruption_turn_taking");
    push(signals.repair, "repair_correction");
    push(signals.hasActionVerb, "exact_confirmation");
    push(signals.status, "status_progress");
    push(signals.failure, "failure_recovery");
    push(signals.sourceRequest || signals.uncertainty, "source_evidence");
    push(signals.workflow, "workflow_transition");
    push(signals.multiIntent, "multi_intent_ordering");
    push(signals.summary, "summarization_briefing");
    push(signals.handoff, "handoff_consent");
    push(signals.topic, "topic_branching");
    push(signals.accessibility, "accessibility_adaptation");
    push(signals.multilingual, "multilingual_cultural");
    push(signals.memory, "memory_preference");
    push(signals.creation, "collaborative_creation");
    push(signals.teaching, "teaching_explanation");
    push(signals.professional, "professional_depth");
    push(signals.advisory, "advisory_guidance");
    push(signals.coaching, "coaching_guided_problem_solving");
    push(signals.casual || signals.emotionalTone !== "steady", "casual_relational");
    push(signals.proactive, "proactive_permission");
    push(signals.closure, "closure_continuity");
    push(signals.greeting || signals.hearingCheck || signals.capabilityQuestion, "presence_greeting");
    push(signals.openCuriosity, "open_curiosity");
    if (!modeIds.length) modeIds.push("clarification_discovery");
    return modeIds
      .map((id) => BEHAVIOR_REGISTRY.find((mode) => mode.id === id))
      .filter(Boolean)
      .sort((a, b) => a.priority - b.priority);
  }

  function responseFor(signals, modes, context = {}) {
    const primary = modes[0]?.id || "clarification_discovery";
    const displayName = context.userName || "";
    const name = displayName ? ` ${displayName}` : "";
    const lower = signals.lower;
    if (primary === "emergency_safety") {
      return "This may be urgent. If there is immediate danger, severe symptoms, self-harm risk, poisoning, or abuse, contact local emergency services now. I can stay with you and help prepare what to say, but I have not contacted emergency services.";
    }
    if (primary === "privacy_sensitive") {
      return "This may involve private information. Would you prefer to type the sensitive detail in a secure field instead of saying it aloud? I will not ask for passwords or secret keys, and you can cancel.";
    }
    if (primary === "interruption_turn_taking") {
      return "Okay, I stopped. I will not continue the previous answer. Tell me what matters now, and I will use the latest instruction.";
    }
    if (primary === "repair_correction") {
      return "Thank you for correcting me. Here is what I now understand: the last answer or workflow may need repair. Tell me the corrected word, person, crop, place, or instruction, and I will update only that part before moving on.";
    }
    if (primary === "status_progress") {
      return "Here is the truthful status: I can prepare and review steps in this workspace. I only mark a real action complete when a configured provider returns proof. If something is blocked, I will show what is missing rather than guessing.";
    }
    if (primary === "failure_recovery") {
      return "Something may not have completed. I will not claim it worked unless I have a verified result. We can retry, continue locally, or switch to typed input if voice or network support is unavailable.";
    }
    if (primary === "source_evidence") {
      return "I can show sources for the active topic when they exist. I will not invent citations. If live retrieval was not used, I will say that and separate Nexus summary from source-backed evidence.";
    }
    if (primary === "exact_confirmation") {
      return "I can prepare that action, but I will not execute it yet. Before any real send, call, payment, booking, deletion, enrollment, location share, or provider handoff, I must restate the exact action, recipient, data, timing, consequences, provider state, and what will be shared.";
    }
    if (primary === "multilingual_cultural") {
      return "I can switch language and keep the current topic. I will preserve names, technical terms, and safety meaning. Tell me the language you want, or say return to the previous language.";
    }
    if (primary === "accessibility_adaptation") {
      return "I can adapt. I will use simpler words, repeat when needed, go one step at a time, and avoid hiding important information. If voice is not enough, I can show the same information on screen.";
    }
    if (primary === "summarization_briefing") {
      return "I can summarize this clearly. I will separate what you told me, what Nexus analyzed, what sources support it, what decisions were made, what remains unfinished, and what private information should be left out.";
    }
    if (primary === "handoff_consent") {
      return "I can prepare a handoff summary, but I need your consent before anything is shared. I will include only relevant context, exclude unrelated private information, and verify delivery only if a real provider connector confirms it.";
    }
    if (primary === "closure_continuity") {
      return "We can close or pause here. I will tell you what was completed, what remains open, what was saved, what was not saved, and whether it can be resumed. I will not claim later continuity unless persistence is real.";
    }
    if (primary === "topic_branching") {
      return "We can keep topics separate. I can pause this topic, start a new one, return to the prior health or crop discussion, or summarize only the current topic without mixing records.";
    }
    if (primary === "memory_preference") {
      return "Memory is under your control. You can ask what I remember, correct it, delete it, or tell me not to remember sensitive information. I will not save high-risk details without consent.";
    }
    if (primary === "collaborative_creation") {
      return "Yes. We can build this together. I can revise sections, simplify it, make it more professional, translate it, compare versions, or start over. I will not claim a version is saved unless storage actually succeeds.";
    }
    if (primary === "multi_intent_ordering") {
      return "I hear more than one request. I will do this safely in order: handle the information or sources first, explain or summarize next, and only prepare any action after that. Any real-world action still needs separate confirmation.";
    }
    if (primary === "teaching_explanation") {
      return "I can teach that step by step. I will start simply, give an example, and check understanding if you want. We can switch to professional detail or a quiz when you ask.";
    }
    if (primary === "professional_depth") {
      return "Would you like a plain-language explanation, a professional analysis, or the supporting evidence? I can include terminology, assumptions, limitations, evidence strength, and workflow implications without replacing professional judgment.";
    }
    if (primary === "advisory_guidance") {
      return "I can help compare options. I will explain tradeoffs, assumptions, safer considerations, and questions to ask before deciding. I will not make a high-risk decision for you.";
    }
    if (primary === "coaching_guided_problem_solving") {
      return "Let us take one manageable step. Tell me the main goal, and I will help sort priorities without taking control away from you.";
    }
    if (primary === "casual_relational") {
      if (/\bhow are you\b/.test(lower)) return "I am here and ready to help. I do not have feelings like a person, but I can listen, think through this with you, and guide one step at a time.";
      return "I hear you. We can take this slowly. You do not have to start with a perfect question; tell me what feels most important right now.";
    }
    if (primary === "proactive_permission") {
      return "Understood. I will keep suggestions limited and permission-based. If you say not now or stop suggesting that, I will respect it.";
    }
    if (primary === "presence_greeting") {
      if (signals.hearingCheck) return "Yes, I can hear you. Nexus is listening. Tell me what you need in your own words.";
      if (signals.capabilityQuestion) return "I am Nexus, your voice-operated access assistant. I can help with agriculture, chronic health support, telehealth preparation, pharmacy support, mobile clinic access, learning, workforce, maps, communications preparation, marketplace support, and source-backed questions. I will not open a workflow unless you clearly ask me to start one.";
      return `Hello${name}. I am Nexus. Take your time. Tell me what you need help with, or ask me a question.`;
    }
    if (primary === "open_curiosity") {
      return "I can explore that with you. I will answer the question first, say when I am uncertain, and offer sources or a workflow only if it would help.";
    }
    return "I heard part of that. Tell me one thing first: health, crops, work, learning, maps, messages, or just a question.";
  }

  function orchestrate(input = "", context = {}) {
    const signals = detectSignals(input, context);
    const modes = chooseModes(signals);
    const primaryMode = modes[0] || BEHAVIOR_REGISTRY.find((mode) => mode.id === "clarification_discovery");
    const blendedModes = modes.slice(1, 5);
    const highRiskAction = signals.hasActionVerb && /\b(send|call|message|whatsapp|telegram|email|schedule|book|pay|submit|delete|share|dispatch|buy|checkout|refill|prescribe|diagnose)\b/.test(signals.lower);
    const existingRouterMustHandle = /\b(change|switch|set)\s+(the\s+)?language\s+(to\s+)?(english|spanish|french|swahili|arabic|portuguese)\b/.test(signals.lower)
      || /\b(speak|use)\s+(english|spanish|french|swahili|arabic|portuguese)\b/.test(signals.lower)
      || /\b(what time is it|current time|what date is it|today's date|what needs my attention today|weather in|weather for|weather today|weather like|hows the weather|how's the weather|temp like|temperature in|forecast for|when should i harvest|remind me about|route delays|prepare a buyer message|field alert|health safety reminder|play .*music|stop .*music|manage this situation|what works without providers|how long until my shipment|what time is my appointment|what is next today|what should i do next)\b/.test(signals.lower)
      || /\b(what is photosynthesis|what causes malaria|why does .* matter for maize|what should a family know)\b/.test(signals.lower)
      || (/\b(what is|what's|what are|explain|describe|tell me about|who are you|what do you do|are you)\b.*\b(nexus genesis|nexus workforce|agrinexus|agri nexus|nexus|platform)\b/.test(signals.lower)
        || /\b(nexus genesis|nexus workforce|agrinexus|agri nexus|nexus|platform)\b.*\b(what is|what are|explain|describe|tell me about|what do you do|who are you|are you)\b/.test(signals.lower));
    const shouldAnswerDirectly = [
      "presence_greeting",
      "casual_relational",
      "repair_correction",
      "interruption_turn_taking",
      "privacy_sensitive",
      "status_progress",
      "failure_recovery",
      "source_evidence",
      "workflow_transition",
      "teaching_explanation",
      "professional_depth",
      "advisory_guidance",
      "coaching_guided_problem_solving",
      "summarization_briefing",
      "handoff_consent",
      "proactive_permission",
      "closure_continuity",
      "topic_branching",
      "accessibility_adaptation",
      "multilingual_cultural",
      "memory_preference",
      "collaborative_creation",
      "multi_intent_ordering",
      "emergency_safety"
    ].includes(primaryMode.id) && !highRiskAction && !existingRouterMustHandle;
    return {
      schemaVersion: "nexus-genesis-conversational-mode-orchestrator.v1",
      primaryMode,
      blendedModes,
      selectedModeIds: modes.map((mode) => mode.id),
      signals,
      response: responseFor(signals, modes, context),
      responseStrategy: shouldAnswerDirectly ? "direct_conversational_response" : "continue_existing_router",
      priorityRules: [
        "emergency and safety",
        "privacy and sensitive-information protection",
        "interruption and stop",
        "correction and repair",
        "exact pending confirmation",
        "execution status",
        "clarification",
        "source/evidence request",
        "workflow transition",
        "teaching, advisory, coaching, or professional depth",
        "casual conversation",
        "proactive suggestion",
        "closure"
      ],
      trustRails: RAILS,
      noExecutionAuthorized: true,
      fakeCitationsAllowed: false,
      workflowOfferedNotForced: true,
      sensitiveInformationProtected: Boolean(signals.privacy),
      highRiskActionRequiresExactConfirmation: highRiskAction,
      writtenInputAppearsOnlyWhenNeeded: true,
      orbRemainsNonClickable: true
    };
  }

  return {
    BEHAVIOR_REGISTRY,
    TRUST_RAILS: RAILS,
    detectSignals,
    orchestrate
  };
});
