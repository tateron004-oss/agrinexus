(function nexusToolRegistryFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusToolRegistry = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusToolRegistryModule() {
  const RISK_TIERS = Object.freeze(["low", "controlled", "sensitive", "high"]);
  const ACTION_TYPES = Object.freeze([
    "answer",
    "preview_or_route",
    "open_workflow",
    "request_permission",
    "request_confirmation",
    "provider_handoff",
    "external_execution",
    "unsupported"
  ]);
  const EXECUTION_STATUSES = Object.freeze([
    "metadata_only",
    "preview_only",
    "permission_required",
    "confirmation_required",
    "not_implemented",
    "blocked"
  ]);
  const PERMISSION_TYPES = Object.freeze([
    "none",
    "location",
    "camera",
    "contacts",
    "phone",
    "provider",
    "marketplace",
    "account",
    "medical",
    "external_app"
  ]);

  const TOOL_REGISTRY = Object.freeze([
    {
      id: "workforce.training",
      label: "Agriculture and workforce training",
      description: "Find training paths and safe learning resources for agriculture and workforce readiness.",
      domain: "learning",
      category: "training",
      risk: "low",
      actionType: "preview_or_route",
      supportedIntentIds: ["learning.training.find"],
      selectedToolId: "workforce.training",
      requiresConfirmation: false,
      requiresPermission: false,
      permissionType: "none",
      executionStatus: "preview_only",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Existing learning/workforce routers remain authoritative."]
    },
    {
      id: "learning.irrigation",
      label: "Irrigation learning",
      description: "Explain irrigation topics and guide the user toward learning resources.",
      domain: "learning",
      category: "lesson_guidance",
      risk: "low",
      actionType: "preview_or_route",
      supportedIntentIds: ["learning.guidance.answer"],
      selectedToolId: "learning.start",
      requiresConfirmation: false,
      requiresPermission: false,
      permissionType: "none",
      executionStatus: "preview_only",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Lesson guidance remains low-risk and non-executing."]
    },
    {
      id: "workforce.job_pathways",
      label: "Farm jobs and career pathways",
      description: "Preview job-readiness and career pathway guidance without submitting applications.",
      domain: "workforce",
      category: "job_pathways",
      risk: "low",
      actionType: "preview_or_route",
      supportedIntentIds: ["workforce.jobs.find"],
      selectedToolId: "workforce.job_pathways",
      requiresConfirmation: false,
      requiresPermission: false,
      permissionType: "none",
      executionStatus: "preview_only",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Application submission remains outside this metadata-only tool."]
    },
    {
      id: "marketplace.agritrade",
      label: "Browse AgriTrade",
      description: "Browse marketplace and agriculture trade guidance without buy, sell, payment, or account execution.",
      domain: "marketplace",
      category: "browse",
      risk: "low",
      actionType: "preview_or_route",
      supportedIntentIds: ["marketplace.agritrade.browse"],
      selectedToolId: "marketplace.agritrade",
      requiresConfirmation: false,
      requiresPermission: false,
      permissionType: "none",
      executionStatus: "preview_only",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["AgriTrade remains browse/review only in this registry phase."]
    },
    {
      id: "agriculture.crop_help",
      label: "Crop issue help",
      description: "Provide crop issue guidance without camera, location, dispatch, or record creation.",
      domain: "agriculture",
      category: "help",
      risk: "low",
      actionType: "preview_or_route",
      supportedIntentIds: ["agriculture.help.guidance"],
      selectedToolId: "agriculture.help",
      requiresConfirmation: false,
      requiresPermission: false,
      permissionType: "none",
      executionStatus: "preview_only",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Agriculture/farm/crop compatibility remains supported."]
    },
    {
      id: "agriculture.general_help",
      label: "General agriculture help",
      description: "Answer general farmer, field, crop, and agriculture support questions.",
      domain: "agriculture",
      category: "help",
      risk: "low",
      actionType: "answer",
      supportedIntentIds: ["agriculture.help.guidance"],
      selectedToolId: "agriculture.help",
      requiresConfirmation: false,
      requiresPermission: false,
      permissionType: "none",
      executionStatus: "metadata_only",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Answer-only metadata; no workflow execution."]
    },
    {
      id: "learning.help",
      label: "Learning help",
      description: "Help the user find or resume safe learning guidance.",
      domain: "learning",
      category: "help",
      risk: "low",
      actionType: "preview_or_route",
      supportedIntentIds: ["learning.guidance.answer"],
      selectedToolId: "learning.start",
      requiresConfirmation: false,
      requiresPermission: false,
      permissionType: "none",
      executionStatus: "preview_only",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Learning UI remains owned by existing routes."]
    },
    {
      id: "maps.location_permission",
      label: "Use my location",
      description: "Request explicit location permission before precise location or nearby provider behavior.",
      domain: "maps",
      category: "location",
      risk: "sensitive",
      actionType: "request_permission",
      supportedIntentIds: ["maps.location.permissioned"],
      selectedToolId: null,
      requiresConfirmation: false,
      requiresPermission: true,
      permissionType: "location",
      executionStatus: "permission_required",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["No location is captured from registry metadata."]
    },
    {
      id: "maps.open",
      label: "Open map",
      description: "Open map guidance while keeping precise location permission explicit.",
      domain: "maps",
      category: "map",
      risk: "sensitive",
      actionType: "request_permission",
      supportedIntentIds: ["maps.location.permissioned"],
      selectedToolId: null,
      requiresConfirmation: false,
      requiresPermission: true,
      permissionType: "location",
      executionStatus: "permission_required",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Map/location behavior remains permissioned and router-owned."]
    },
    {
      id: "maps.nearby_providers",
      label: "Find nearby providers",
      description: "Prepare nearby provider guidance only after location permission.",
      domain: "maps",
      category: "providers",
      risk: "sensitive",
      actionType: "request_permission",
      supportedIntentIds: ["maps.location.permissioned"],
      selectedToolId: null,
      requiresConfirmation: false,
      requiresPermission: true,
      permissionType: "location",
      executionStatus: "permission_required",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Provider lookup must not infer or use location without permission."]
    },
    {
      id: "health.camera_preview",
      label: "Open camera preview",
      description: "Describe local camera preview readiness without opening camera from metadata.",
      domain: "health",
      category: "camera",
      risk: "sensitive",
      actionType: "request_permission",
      supportedIntentIds: ["health.video_or_care.permissioned"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "camera",
      executionStatus: "permission_required",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Camera and video preview remain handoff-only and permissioned."]
    },
    {
      id: "health.telehealth_video",
      label: "Telehealth video/provider guidance",
      description: "Keep telehealth video and provider guidance guarded as local handoff-only demo behavior.",
      domain: "health",
      category: "telehealth",
      risk: "sensitive",
      actionType: "request_permission",
      supportedIntentIds: ["health.video_or_care.permissioned"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "medical",
      executionStatus: "permission_required",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["No live provider room, diagnosis, or clinical claim is enabled."]
    },
    {
      id: "health.show_injury",
      label: "Show injury to provider",
      description: "Represent injury/video handoff intent while keeping camera and provider handoff permissioned.",
      domain: "health",
      category: "provider_handoff",
      risk: "sensitive",
      actionType: "request_permission",
      supportedIntentIds: ["health.video_or_care.permissioned"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "camera",
      executionStatus: "permission_required",
      enabled: true,
      visibleToUser: true,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Registry metadata must not open camera or create video session records."]
    },
    {
      id: "communications.call_contact",
      label: "Call contact",
      description: "Classify outbound call intent while requiring contact resolution and explicit confirmation.",
      domain: "communications",
      category: "call",
      risk: "high",
      actionType: "request_confirmation",
      supportedIntentIds: ["communications.outbound_contact.controlled", "communications.contact_target.missing"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "phone",
      executionStatus: "confirmation_required",
      enabled: true,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["No first-utterance calling; agentPendingAction remains authoritative."]
    },
    {
      id: "communications.call_provider",
      label: "Call provider",
      description: "Classify provider call intent while requiring resolution, consent, and confirmation.",
      domain: "communications",
      category: "provider_call",
      risk: "high",
      actionType: "request_confirmation",
      supportedIntentIds: ["communications.outbound_contact.controlled"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "provider",
      executionStatus: "confirmation_required",
      enabled: true,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Provider handoff is never launched from raw intent parsing."]
    },
    {
      id: "communications.message_contact",
      label: "Message contact",
      description: "Classify message intent while requiring contact resolution and confirmation.",
      domain: "communications",
      category: "message",
      risk: "high",
      actionType: "request_confirmation",
      supportedIntentIds: ["communications.outbound_contact.controlled"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "contacts",
      executionStatus: "confirmation_required",
      enabled: true,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["No direct SMS, email, WhatsApp, or Telegram send behavior is enabled."]
    },
    {
      id: "communications.message_provider",
      label: "Message provider",
      description: "Classify provider messaging intent while keeping provider adapters gated.",
      domain: "communications",
      category: "provider_message",
      risk: "high",
      actionType: "request_confirmation",
      supportedIntentIds: ["communications.outbound_contact.controlled"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "provider",
      executionStatus: "confirmation_required",
      enabled: true,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Provider messages must be staged and confirmed before any future adapter."]
    },
    {
      id: "communications.contact_marketplace_party",
      label: "Contact buyer or seller",
      description: "Classify buyer/seller contact intent without launching messaging or marketplace actions.",
      domain: "communications",
      category: "marketplace_contact",
      risk: "high",
      actionType: "request_confirmation",
      supportedIntentIds: ["communications.outbound_contact.controlled"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "marketplace",
      executionStatus: "confirmation_required",
      enabled: true,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Buyer/seller contact remains gated from marketplace execution."]
    },
    {
      id: "marketplace.payment",
      label: "Marketplace payment",
      description: "Classify payment intent as high-risk and confirmation-gated.",
      domain: "marketplace",
      category: "payment",
      risk: "high",
      actionType: "request_confirmation",
      supportedIntentIds: ["marketplace.payment.controlled"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "marketplace",
      executionStatus: "confirmation_required",
      enabled: true,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["No payment, wallet, checkout, or settlement execution is enabled."]
    },
    {
      id: "account.profile_change",
      label: "Account or profile change",
      description: "Classify account and profile changes as high-risk account actions.",
      domain: "account",
      category: "identity",
      risk: "high",
      actionType: "request_confirmation",
      supportedIntentIds: ["account.identity.controlled"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "account",
      executionStatus: "confirmation_required",
      enabled: true,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["No profile/account mutation is authorized by registry metadata."]
    },
    {
      id: "safety.emergency_escalation",
      label: "Emergency or medical escalation",
      description: "Classify emergency prompts as high-risk safety guidance without automatic dispatch.",
      domain: "safety",
      category: "emergency",
      risk: "high",
      actionType: "request_confirmation",
      supportedIntentIds: ["safety.emergency.escalation"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "medical",
      executionStatus: "confirmation_required",
      enabled: true,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Nexus must not dispatch emergency services automatically."]
    },
    {
      id: "planning.autonomous_multistep",
      label: "Autonomous multi-step plan execution",
      description: "Future-only planning capability; blocked until planner, policy, confirmation, and audit runtime exist.",
      domain: "planning",
      category: "future",
      risk: "high",
      actionType: "unsupported",
      supportedIntentIds: ["unknown.clarify_or_answer"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "external_app",
      executionStatus: "blocked",
      enabled: false,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["No autonomous execution is enabled in Phase 11C."]
    },
    {
      id: "communications.native_phone_bridge",
      label: "Native phone bridge",
      description: "Future confirmed native phone handoff metadata; no direct background calling.",
      domain: "communications",
      category: "provider_handoff",
      risk: "high",
      actionType: "provider_handoff",
      supportedIntentIds: ["communications.outbound_contact.controlled"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "phone",
      executionStatus: "not_implemented",
      enabled: false,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Existing confirmed-call-handoff remains authoritative; registry has no adapter."]
    },
    {
      id: "communications.whatsapp_bridge",
      label: "WhatsApp bridge",
      description: "Future WhatsApp handoff metadata; no direct call/message launch from registry.",
      domain: "communications",
      category: "provider_handoff",
      risk: "high",
      actionType: "provider_handoff",
      supportedIntentIds: ["communications.outbound_contact.controlled"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "external_app",
      executionStatus: "not_implemented",
      enabled: false,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["WhatsApp behavior remains safe handoff/fallback planning only."]
    },
    {
      id: "communications.telegram_bridge",
      label: "Telegram bridge",
      description: "Future Telegram handoff metadata; no arbitrary phone-number calling.",
      domain: "communications",
      category: "provider_handoff",
      risk: "high",
      actionType: "provider_handoff",
      supportedIntentIds: ["communications.outbound_contact.controlled"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "external_app",
      executionStatus: "not_implemented",
      enabled: false,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Telegram requires future handle-aware planning and confirmation."]
    },
    {
      id: "calendar.reminder_execution",
      label: "Calendar or reminder execution",
      description: "Future calendar/reminder write capability; metadata-only until task state and audit exist.",
      domain: "calendar",
      category: "future",
      risk: "controlled",
      actionType: "unsupported",
      supportedIntentIds: ["unknown.clarify_or_answer"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "account",
      executionStatus: "not_implemented",
      enabled: false,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Calendar/reminder writes require future confirmation and audit boundaries."]
    },
    {
      id: "memory.durable_write",
      label: "Durable memory write",
      description: "Future durable memory write capability; blocked until memory consent, redaction, and audit exist.",
      domain: "memory",
      category: "future",
      risk: "sensitive",
      actionType: "unsupported",
      supportedIntentIds: ["unknown.clarify_or_answer"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "account",
      executionStatus: "blocked",
      enabled: false,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Durable memory writes need consent, expiry, redaction, and audit first."]
    },
    {
      id: "providers.booking",
      label: "Provider booking",
      description: "Future provider booking capability; no scheduling, dispatch, or provider execution yet.",
      domain: "providers",
      category: "future",
      risk: "high",
      actionType: "unsupported",
      supportedIntentIds: ["unknown.clarify_or_answer"],
      selectedToolId: null,
      requiresConfirmation: true,
      requiresPermission: true,
      permissionType: "provider",
      executionStatus: "not_implemented",
      enabled: false,
      visibleToUser: false,
      metadataOnly: true,
      routerOwned: true,
      notes: ["Provider booking is future-only and must remain confirmation/audit-gated."]
    }
  ]);

  const requiredFields = Object.freeze([
    "id",
    "label",
    "description",
    "domain",
    "category",
    "risk",
    "actionType",
    "supportedIntentIds",
    "selectedToolId",
    "requiresConfirmation",
    "requiresPermission",
    "permissionType",
    "executionStatus",
    "enabled",
    "visibleToUser",
    "metadataOnly",
    "routerOwned",
    "notes"
  ]);

  function cloneTool(tool) {
    return {
      ...tool,
      supportedIntentIds: tool.supportedIntentIds.slice(),
      notes: tool.notes.slice()
    };
  }

  function getNexusToolRegistry() {
    return TOOL_REGISTRY.map(cloneTool);
  }

  function getNexusToolById(toolId) {
    const id = String(toolId || "").trim();
    const tool = TOOL_REGISTRY.find(entry => entry.id === id || entry.selectedToolId === id);
    return tool ? cloneTool(tool) : null;
  }

  function findNexusToolsByIntent(intentId) {
    const id = String(intentId || "").trim();
    if (!id) return [];
    return TOOL_REGISTRY.filter(tool => tool.supportedIntentIds.includes(id)).map(cloneTool);
  }

  function findNexusToolsByDomain(domain) {
    const value = String(domain || "").trim();
    if (!value) return [];
    return TOOL_REGISTRY.filter(tool => tool.domain === value).map(cloneTool);
  }

  function validateNexusToolRegistry(registry = TOOL_REGISTRY) {
    const errors = [];
    const ids = new Set();
    for (const tool of registry) {
      for (const field of requiredFields) {
        if (!Object.prototype.hasOwnProperty.call(tool, field)) errors.push(`${tool.id || "tool"} missing ${field}`);
      }
      if (ids.has(tool.id)) errors.push(`${tool.id} is duplicated`);
      ids.add(tool.id);
      if (!RISK_TIERS.includes(tool.risk)) errors.push(`${tool.id} has invalid risk ${tool.risk}`);
      if (!ACTION_TYPES.includes(tool.actionType)) errors.push(`${tool.id} has invalid actionType ${tool.actionType}`);
      if (!EXECUTION_STATUSES.includes(tool.executionStatus)) errors.push(`${tool.id} has invalid executionStatus ${tool.executionStatus}`);
      if (!PERMISSION_TYPES.includes(tool.permissionType)) errors.push(`${tool.id} has invalid permissionType ${tool.permissionType}`);
      if (tool.metadataOnly !== true) errors.push(`${tool.id} must remain metadataOnly`);
      if (tool.routerOwned !== true) errors.push(`${tool.id} must remain routerOwned`);
      if (typeof tool.enabled !== "boolean") errors.push(`${tool.id} enabled must be boolean`);
      if (typeof tool.visibleToUser !== "boolean") errors.push(`${tool.id} visibleToUser must be boolean`);
      if (!Array.isArray(tool.supportedIntentIds) || !tool.supportedIntentIds.length) errors.push(`${tool.id} needs supportedIntentIds`);
      if (!Array.isArray(tool.notes) || !tool.notes.length) errors.push(`${tool.id} needs notes`);
      if (["sensitive", "high"].includes(tool.risk) && !(tool.requiresConfirmation || tool.requiresPermission)) {
        errors.push(`${tool.id} sensitive/high tools must require confirmation or permission`);
      }
      if (["provider_handoff", "external_execution"].includes(tool.actionType) && tool.executionStatus !== "not_implemented" && tool.executionStatus !== "blocked") {
        errors.push(`${tool.id} provider/external execution must stay not_implemented or blocked`);
      }
    }
    return {
      ok: errors.length === 0,
      errors
    };
  }

  return {
    ACTION_TYPES,
    EXECUTION_STATUSES,
    PERMISSION_TYPES,
    RISK_TIERS,
    getNexusToolRegistry,
    getNexusToolById,
    findNexusToolsByIntent,
    findNexusToolsByDomain,
    validateNexusToolRegistry
  };
});
