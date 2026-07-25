Warning: truncated output (original token count: 912726)
... 2602327 bytes omitted ...

let data = null;
let nexusOperationsLastResult = null;
let map = null;
let layers = {};
let userMap = null;
let userMapLayers = {};
let voiceMapCountryOverride = null;
let userHealthMap = null;
let userHealthMapLayers = {};
let shipmentPreviewMap = null;
let healthHotspotPreviewMap = null;
let ruralHealthAccessMap = null;
let workflowLeafletMap = null;
const MAP_ZOOM_CONFIG = Object.freeze({
  minZoom: 1,
  maxZoom: 19,
  maxNativeZoom: 19,
  wheelPxPerZoomLevel: 72
});
const DEFAULT_MAP_TILE_CONFIG = Object.freeze({
  engine: "leaflet",
  provider: "built-in-defaults",
  requiresNetwork: true,
  offlineTileCaching: false,
  layers: {
    operational: {
      name: "Operational map",
      url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      attribution: "Esri World Street Map",
      enabled: true
    },
    openStreetMap: {
      name: "OpenStreetMap",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "OpenStreetMap contributors",
      enabled: true
    },
    satellite: {
      name: "Satellite imagery",
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: "Esri World Imagery",
      enabled: true
    },
    labels: {
      name: "Country names and borders",
      url: "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
      attribution: "Esri boundaries and places",
      enabled: true
    },
    humanitarian: {
      name: "Humanitarian street map",
      url: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      attribution: "OpenStreetMap Humanitarian",
      enabled: true
    }
  }
});
let mapTileConfig = DEFAULT_MAP_TILE_CONFIG;
let nexusAssistantRuntimePreviewConfig = Object.freeze({
  enabled: false,
  liveSourceRetrievalEnabled: false,
  assistantDialogueLivePreviewEnabled: false,
  standardUserLiveSourcePreviewEnabled: false,
  defaultOff: true,
  executionAuthority: false
});
let nexusA100SafeAutonomyConfig = Object.freeze({
  enabled: true,
  surface: "standard-user",
  previewOnly: true,
  defaultSafe: true,
  executionAuthority: false,
  noProviderHandoff: true,
  noLocationPermissionRequested: true,
  noBrowserPermissionPrompt: true,
  noExternalActionAuthorized: true,
  highRiskActionsGated: true
});
let selectedLearningTrack = "All";
let selectedPersona = localStorage.getItem("agrinexusPersona") || "worker";
let selectedNexusDashboardModeId = "agriculture-support";
let nexusRealProviderTestingStatus = null;
let nexusRealProviderTestingStatusLoading = false;
let nexusRealProviderTestingLastResult = null;
let nexusUserTestingRuntimeStatus = null;
let nexusUserTestingRuntimeLoading = false;
let nexusUserTestingRuntimeLastResult = null;
let nexusProductionRuntimeStatus = null;
let nexusProductionRuntimeCapabilities = [];
let nexusProductionRuntimeLastPlan = null;
let nexusProductionRuntimeLastResult = null;
let nexusProductionRuntimeLastVerification = null;
let nexusAgenticBrainStatus = null;
let nexusAgenticBrainTasks = [];
let nexusAgenticBrainProviderQueue = [];
let nexusAgenticBrainActivity = [];
let nexusAgenticBrainMatrix = [];
let nexusAgenticBrainLastResult = null;
const NEXUS_PRESENCE_STATES = Object.freeze({
  IDLE: "idle",
  LISTENING: "listening",
  THINKING: "thinking",
  SPEAKING: "speaking",
  AWAITING_FOLLOWUP: "awaiting_followup",
  AWAITING_CONFIRMATION: "awaiting_confirmation",
  COMPLETED_LOCAL: "completed_local",
  BLOCKED: "blocked",
  ERROR: "error"
});
const NEXUS_PRESENCE_RUNTIME_BASELINE = Object.freeze({
  schemaVersion: "nexus-presence-runtime.v1",
  officialProfile: "Nexus Presence",
  sharedCoreService: true,
  runtimeRole: "shared voice, captions, orb, conversation, and mission state baseline",
  identityTraits: Object.freeze([
    "calm",
    "confident",
    "warm",
    "patient",
    "intelligent",
    "respectful",
    "honest",
    "nonjudgmental",
    "professional"
  ]),
  deliveryModes: Object.freeze({
    STANDARD: Object.freeze({ label: "Standard", pace: "steady", speechRate: 0.92, tone: "calm and helpful" }),
    CLINICAL: Object.freeze({ label: "Clinical", pace: "measured", speechRate: 0.88, tone: "precise, safety-first, no diagnosis" }),
    GUIDE: Object.freeze({ label: "Guide", pace: "supportive", speechRate: 0.9, tone: "patient and instructional" }),
    FOCUS: Object.freeze({ label: "Focus", pace: "concise", speechRate: 0.94, tone: "brief and task-oriented" }),
    URGENT: Object.freeze({ label: "Urgent", pace: "clear", speechRate: 0.86, tone: "direct, calm, and bounded" })
  }),
  componentContracts: Object.freeze([
    "NexusPresenceRuntime",
    "NexusVoiceProfileRegistry",
    "NexusVoiceCapabilityRegistry",
    "NexusVoiceResolver",
    "NexusSpeechRecognitionController",
    "NexusSpeechSynthesisController",
    "NexusConversationStyleEngine",
    "NexusResponseComposer",
    "NexusDomainToneAdapter",
    "NexusEmotionContextAdapter",
    "NexusPronunciationLexicon",
    "NexusCaptionSynchronizer",
    "NexusOrbSpeechSynchronizer",
    "NexusVoicePreferenceManager",
    "NexusPresencePolicyEngine",
    "NexusPresenceTelemetry",
    "NexusPresenceAccessibilityAdapter"
  ]),
  sharedRuntimeSources: Object.freeze({
    voice: "nexusOsVoiceRuntimeState",
    voiceSchema: "nexus-os-voice-runtime.v1",
    voiceOwner: "nexus-os-canonical-voice",
    presence: "nexusPresenceState",
    conversation: "nexusOsConversationTurns",
    captions: "nexus-os-transcript-strip",
    orb: "nexusCoreRuntimeState",
    mission: "nexusOsMissionLifecycleState"
  }),
  stateModel: Object.freeze(["idle", "listening", "thinking", "speaking", "awaiting_followup", "awaiting_confirmation", "completed_local", "blocked", "error"]),
  honestyPolicy: Object.freeze({
    noFakeSpeech: true,
    noFakeAccent: true,
    noFakeHearing: true,
    noFakeCompletion: true,
    regionalVoiceDisclosure: "Nexus may use the best available browser or configured provider voice; it must not claim a regional voice or accent is available unless the provider actually supplies it."
  }),
  accessibilityPolicy: Object.freeze({
    captionsRequired: true,
    keyboardFallbackRequired: true,
    screenReaderStatusRequired: true,
    reducedMotionRequired: true,
    textFallbackRequired: true,
    noSpeechOnlyBlocking: true
  })
});
const NEXUS_PRESENCE_PROFILE_CONTRACT = Object.freeze({
  schemaVersion: "nexus-presence-profile-contract.v1",
  registryName: "NexusVoiceProfileRegistry",
  requiredFields: Object.freeze([
    "id",
    "displayName",
    "profileRole",
    "identityTraits",
    "deliveryModes",
    "toneBoundaries",
    "voiceProviderPolicy",
    "regionalizationPolicy",
    "accessibilityPolicy",
    "safetyBoundaries"
  ]),
  defaultProfileId: "nexus-presence",
  profileSelectionStorageKey: "nexusPresenceProfileId",
  approvedPreferenceOnly: true,
  noVoiceCloning: true,
  noCharacterImitation: true,
  noRegionalAccentClaimWithoutProvider: true
});
const NEXUS_PRESENCE_PROFILE_REGISTRY = Object.freeze({
  "nexus-presence": Object.freeze({
    id: "nexus-presence",
    displayName: "Nexus Presence",
    profileRole: "official-global-assistant",
    description: "The calm, confident, warm, patient, intelligent, respectful, honest, nonjudgmental, professional Nexus identity shared across all deployments.",
    identityTraits: NEXUS_PRESENCE_RUNTIME_BASELINE.identityTraits,
    deliveryModes: NEXUS_PRESENCE_RUNTIME_BASELINE.deliveryModes,
    defaultDeliveryMode: "STANDARD",
    toneBoundaries: Object.freeze({
      everyday: "warm, clear, and concise",
      clinical: "measured, safety-first, no diagnosis, no prescribing, no medication changes",
      agriculture: "practical, local-context aware, source-aware, no yield or chemical guarantees",
      workforce: "encouraging, plain-language, opportunity-oriented",
      marketplace: "neutral and transaction-gated",
      urgent: "calm, direct, and bounded without claiming emergency dispatch"
    }),
    voiceProviderPolicy: Object.freeze({
      preferredRuntime: "browser-native-or-configured-provider",
      browserFallback: true,
      typedFallback: true,
      speechSynthesisController: "NexusSpeechSynthesisController",
      speechRecognitionController: "NexusSpeechRecognitionController",
      noAutoplayRequirement: true,
      noProviderClaimWithoutAvailability: true
    }),
    regionalizationPolicy: Object.freeze({
      supported: true,
      languageAware: true,
      regionalVoiceIfAvailable: true,
      noFakeAccent: true,
      disclosure: "If a regional voice is unavailable, Nexus uses the safest available voice and keeps captions visible."
    }),
    accessibilityPolicy: NEXUS_PRESENCE_RUNTIME_BASELINE.accessibilityPolicy,
    safetyBoundaries: Object.freeze({
      noDiagnosis: true,
      noPrescribing: true,
      noProviderHandoffFromProfile: true,
      noUnconfirmedMessagesCallsPaymentsLocationCameraEmergency: true,
      highRiskActionsRemainGated: true
    })
  })
});
const NEXUS_VOICE_CAPABILITY_REGISTRY = Object.freeze({
  schemaVersion: "nexus-voice-capability-registry.v1",
  registryName: "NexusVoiceCapabilityRegistry",
  defaultFallbackOrder: Object.freeze([
    "browser-speech-recognition",
    "browser-speech-synthesis",
    "openai-tts",
    "openai-realtime-webrtc",
    "native-voice-bridge",
    "typed-fallback"
  ]),
  providers: Object.freeze({
    "browser-speech-recognition": Object.freeze({
      id: "browser-speech-recognition",
      label: "Browser speech recognition",
      kind: "speech-to-text",
      adapter: "NexusBrowserSpeechRecognitionAdapter",
      controller: "NexusSpeechRecognitionController",
      runtimeSource: "window.SpeechRecognition || window.webkitSpeechRecognition",
      requiresUserGesture: true,
      requiresMicrophonePermission: true,
      executionAuthority: false,
      fallback: "typed-fallback"
    }),
    "browser-speech-synthesis": Object.freeze({
      id: "browser-speech-synthesis",
      label: "Browser speech synthesis",
      kind: "text-to-speech",
      adapter: "NexusBrowserSpeechSynthesisAdapter",
      controller: "NexusSpeechSynthesisController",
      runtimeSource: "window.speechSynthesis",
      requiresUserGesture: true,
      requiresMicrophonePermission: false,
      executionAuthority: false,
      fallback: "captions"
    }),
    "openai-tts": Object.freeze({
      id: "openai-tts",
      label: "Configured server text-to-speech",
      kind: "server-text-to-speech",
      adapter: "NexusServerTtsAdapter",
      controller: "NexusSpeechSynthesisController",
      runtimeSource: "/api/voice/speak",
      requiresServerProvider: true,
      requiresSecretOnServer: true,
      secretExposedToBrowser: false,
      executionAuthority: false,
      fallback: "browser-speech-synthesis"
    }),
    "openai-realtime-webrtc": Object.freeze({
      id: "openai-realtime-webrtc",
      label: "Configured realtime conversation voice",
      kind: "conversation-voice",
      adapter: "NexusRealtimeVoiceAdapter",
      controller: "NexusSpeechRecognitionController",
      runtimeSource: "RTCPeerConnection + server session",
      conversationOnly: true,
      requiresUserGesture: true,
      requiresMicrophonePermission: true,
      executionAuthority: false,
      fallback: "browser-speech-recognition"
    }),
    "native-voice-bridge": Object.freeze({
      id: "native-voice-bridge",
      label: "Native voice bridge",
      kind: "native-bridge",
      adapter: "NexusNativeVoiceBridgeAdapter",
      controller: "NexusSpeechRecognitionController",
      runtimeSource: "AgriNexusNativeVoice/NexusNativeVoice bridge",
      requiresHostApp: true,
      executionAuthority: false,
      fallback: "browser-speech-recognition"
    }),
    "typed-fallback": Object.freeze({
      id: "typed-fallback",
      label: "Typed fallback",
      kind: "accessibility-fallback",
      adapter: "NexusTypedFallbackAdapter",
      controller: "NexusPresenceAccessibilityAdapter",
      runtimeSource: "Ask Nexus text input",
      alwaysAvailable: true,
      requiresUserGesture: false,
      requiresMicrophonePermission: false,
      executionAuthority: false,
      fallback: ""
    })
  }),
  safetyPolicy: Object.freeze({
    noSilentMicrophoneStart: true,
    noAlwaysOnListening: true,
    noSpeechOnlyBlocking: true,
    noSecretExposure: true,
    noVoiceProviderExecutionAuthority: true,
    captionsRemainAvailable: true
  })
});
const NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT = Object.freeze({
  schemaVersion: "nexus-regional-voice-resolution.v1",
  registryName: "NexusRegionalVoiceResolver",
  resolver: "resolveNexusRegionalVoice",
  voiceSelectionHelper: "chooseSpeechVoice",
  supportedLocales: Object.freeze(["en-US", "fr-FR", "sw-KE", "ar-EG", "es-ES", "pt-BR"]),
  fallbackOrder: Object.freeze([
    "exact-locale-browser-voice",
    "language-family-browser-voice",
    "stored-browser-voice-preference",
    "browser-default-voice",
    "caption-and-typed-fallback"
  ]),
  honestyPolicy: Object.freeze({
    noFakeAccent: true,
    noRegionalAccentClaimWithoutProvider: true,
    noVoiceCloning: true,
    noCharacterImitation: true,
    discloseFallbackVoice: true,
    captionsRemainAvailable: true
  })
});
const NEXUS_CORE_STATE_CONTRACT = Object.freeze({
  idle: {
    label: "Nexus is idle and ready.",
    motion: "calm pulse",
    visual: "steady core",
    announcement: "Nexus is ready.",
    reducedMotion: "steady glow",
    allowed: ["wake", "listening", "processing", "offline", "blocked"]
  },
  wake: {
    label: "Wake phrase detected.",
    motion: "wake ripple",
    visual: "brightening core",
    announcement: "Nexus heard the wake phrase.",
    reducedMotion: "status text only",
    allowed: ["listening", "idle", "blocked"]
  },
  listening: {
    label: "Nexus is listening.",
    motion: "listening pulse",
    visual: "cyan listening ring",
    announcement: "Nexus is listening.",
    reducedMotion: "listening status text",
    allowed: ["hearing", "processing", "waiting", "idle", "error"]
  },
  hearing: {
    label: "Nexus is hearing speech.",
    motion: "speech wave",
    visual: "waveform ring",
    announcement: "Nexus hears speech.",
    reducedMotion: "hearing status text",
    allowed: ["processing", "asking", "idle", "error"]
  },
  processing: {
    label: "Nexus is reviewing the request.",
    motion: "slow orbit",
    visual: "blue processing glow",
    announcement: "Nexus is reviewing the request.",
    reducedMotion: "processing status text",
    allowed: ["reasoning", "searching", "planning", "asking", "blocked", "error"]
  },
  reasoning: {
    label: "Nexus is reasoning.",
    motion: "thought orbit",
    visual: "violet reasoning glow",
    announcement: "Nexus is reasoning.",
    reducedMotion: "reasoning status text",
    allowed: ["searching", "planning", "asking", "preparing", "blocked", "error"]
  },
  searching: {
    label: "Nexus is searching configured sources.",
    motion: "source sweep",
    visual: "cyan source trace",
    announcement: "Nexus is searching configured sources.",
    reducedMotion: "searching status text",
    allowed: ["reasoning", "planning", "asking", "blocked", "error"]
  },
  planning: {
    label: "Nexus is building a plan.",
    motion: "step orbit",
    visual: "green planning arc",
    announcement: "Nexus is building a plan.",
    reducedMotion: "planning status text",
    allowed: ["asking", "preparing", "confirmation", "completed", "blocked", "error"]
  },
  asking: {
    label: "Nexus is asking for a detail.",
    motion: "question pulse",
    visual: "gold question ring",
    announcement: "Nexus needs one more detail.",
    reducedMotion: "asking status text",
    allowed: ["waiting", "listening", "processing", "idle", "blocked"]
  },
  waiting: {
    label: "Nexus is waiting for the user.",
    motion: "slow wait pulse",
    visual: "soft waiting glow",
    announcement: "Nexus is waiting.",
    reducedMotion: "waiting status text",
    allowed: ["listening", "processing", "idle", "blocked"]
  },
  speaking: {
    label: "Nexus is speaking.",
    motion: "speech shimmer",
    visual: "voice wave",
    announcement: "Nexus is speaking.",
    reducedMotion: "speaking status text",
    allowed: ["listening", "waiting", "completed", "idle", "error"]
  },
  preparing: {
    label: "Nexus is preparing a local action.",
    motion: "preparation orbit",
    visual: "amber preparation glow",
    announcement: "Nexus is preparing the next step.",
    reducedMotion: "preparing status text",
    allowed: ["confirmation", "queued", "completed", "blocked", "error"]
  },
  confirmation: {
    label: "Nexus is awaiting confirmation.",
    motion: "confirmation pulse",
    visual: "gold confirmation ring",
    announcement: "Confirmation is required.",
    reducedMotion: "confirmation status text",
    allowed: ["executing", "preparing", "waiting", "blocked", "idle"]
  },
  executing: {
    label: "Nexus is attempting an approved action.",
    motion: "execution sweep",
    visual: "orange execution arc",
    announcement: "Nexus is attempting an approved action.",
    reducedMotion: "executing status text",
    allowed: ["verifying", "queued", "error", "blocked"]
  },
  verifying: {
    label: "Nexus is verifying the result.",
    motion: "verification scan",
    visual: "green verification ring",
    announcement: "Nexus is verifying the result.",
    reducedMotion: "verifying status text",
    allowed: ["completed", "queued", "error", "blocked"]
  },
  learning: {
    label: "Nexus is saving approved context.",
    motion: "memory ripple",
    visual: "soft memory glow",
    announcement: "Nexus is saving approved context.",
    reducedMotion: "saving status text",
    allowed: ["completed", "idle", "error"]
  },
  completed: {
    label: "Nexus completed a local or verified step.",
    motion: "completion glow",
    visual: "green completion glow",
    announcement: "Nexus completed the step.",
    reducedMotion: "completed status text",
    allowed: ["idle", "listening", "learning"]
  },
  queued: {
    label: "Nexus queued the step safely.",
    motion: "queued pulse",
    visual: "blue queued badge",
    announcement: "Nexus queued the step safely.",
    reducedMotion: "queued status text",
    allowed: ["idle", "verifying", "blocked", "error"]
  },
  offline: {
    label: "Nexus is offline and using local fallback.",
    motion: "offline dim",
    visual: "muted offline glow",
    announcement: "Nexus is offline and using local fallback.",
    reducedMotion: "offline status text",
    allowed: ["queued", "idle", "blocked"]
  },
  blocked: {
    label: "I can help here, but live external actions need a connected service.",
    motion: "blocked steady",
    visual: "red blocked ring",
    announcement: "Nexus can continue locally, but external actions need the required connection and approval.",
    reducedMotion: "blocked status text",
    allowed: ["asking", "waiting", "idle"]
  },
  error: {
    label: "Nexus hit a safe local error.",
    motion: "error flicker",
    visual: "red error glow",
    announcement: "Nexus hit a safe local error. No external action was executed.",
    reducedMotion: "error status text",
    allowed: ["idle", "listening", "blocked"]
  }
});
const NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT = Object.freeze({
  schemaVersion: "nexus-presence-design-enforcement.v1",
  standardName: "Nexus Presence Standard 1.0",
  designBiblePath: "docs/NEXUS_PRESENCE_DESIGN_BIBLE.md",
  runtimeOwner: "nexus-os-canonical-voice",
  enforcementQa: "scripts/nexus-presence-enforcement-qa.js",
  runtimeFiles: Object.freeze([
    "public/app.js",
    "scripts/qa-suite.js",
    "package.json"
  ]),
  requiredContracts: Object.freeze([
    "NEXUS_PRESENCE_RUNTIME_BASELINE",
    "NEXUS_PRESENCE_PROFILE_CONTRACT",
    "NEXUS_VOICE_CAPABILITY_REGISTRY",
    "NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT",
    "NEXUS_CONVERSATION_STYLE_ENGINE_CONTRACT",
    "NEXUS_DOMAIN_TONE_SAFETY_ADAPTER_CONTRACT",
    "NEXUS_SPEECH_SYNTHESIS_CONTROLLER_CONTRACT",
    "NEXUS_LISTENING_WAKE_CONTROLLER_CONTRACT",
    "NEXUS_PRESENCE_SYNCHRONIZATION_CONTRACT",
    "NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT"
  ]),
  prohibitedStandardUserPhrases: Object.freeze([
    "Module initialized.",
    "Execution completed.",
    "Workflow failed.",
    "Missing required fields.",
    "Payload submitted."
  ]),
  approvedPlainLanguageReplacements: Object.freeze({
    "Module initialized.": "Let's work through that.",
    "Provider unavailable.": "I can't reach that service right now.",
    "Execution completed.": "That was completed and confirmed.",
    "Workflow failed.": "I wasn't able to complete that step.",
    "Missing required fields.": "I need one more detail before I can continue.",
    "Payload submitted.": "Information is sent only after confirmation and receipt evidence."
  }),
  unsupportedRegionalVoiceLabels: Object.freeze([
    "guaranteed Kenyan voice",
    "guaranteed Nigerian voice",
    "guaranteed South African voice",
    "fake regional voice",
    "accent simulation"
  ]),
  noFakeCompletionRules: Object.freeze({
    completionRequiresVerifiedState: true,
    preparedIsNotSent: true,
    providerUnavailableIsNotCompleted: true,
    browserHandoffIsNotProviderCompletion: true,
    receiptRequiresOutcomeEvidence: true
  }),
  duplicateRuntimeRules: Object.freeze({
    canonicalSpeechRecognitionController: "NexusSpeechRecognitionController",
    canonicalSpeechSynthesisController: "NexusSpeechSynthesisController",
    domainAdaptersMayNotCreateVoiceEngines: true,
    deploymentProfilesMayNotCopyVoiceRuntime: true
  }),
  requiredAccessibilitySelectors: Object.freeze([
    "[data-nexus-presence-status-announcement]",
    "[data-nexus-presence-caption-sync]",
    "[data-nexus-voice-preferences-controls]",
    "[data-nexus-os-conversation-live-region]",
    "[data-nexus-os-voice-control]"
  ]),
  prohibitedClaims: Object.freeze([
    "Nexus heard you when recognition failed",
    "Nexus is speaking when synthesis failed",
    "Regional accent is available without provider support",
    "Provider action completed without verified provider state",
    "Domain pack owns a separate voice runtime"
  ])
});
const NEXUS_PRESENCE_ACCEPTANCE_RELEASE_CONTRACT = Object.freeze({
  schemaVersion: "nexus-presence-acceptance-release.v1",
  standardName: "Nexus Presence Standard 1.0",
  releaseName: "Full Presence Acceptance And Release",
  releaseStatus: "accepted-for-safe-runtime",
  enforcementContract: "NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT",
  acceptanceQa: "scripts/nexus-presence-acceptance-qa.js",
  acceptedRuntimeSurfaces: Object.freeze([
    "Standard User command center",
    "Nexus voice runtime",
    "Ask Nexus typed fallback",
    "Mission lifecycle",
    "Nexus orb",
    "Captions and transcript strip",
    "Domain tone safety adapters",
    "Regional voice fallback",
    "Voice preferences and accessibility controls"
  ]),
  requiredAcceptanceScenarios: Object.freeze([
    "standard-user-presence-load",
    "agriculture-presence-response",
    "health-presence-response",
    "learning-presence-response",
    "employment-presence-response",
    "provider-unavailable-honesty",
    "regional-voice-fallback-honesty",
    "accessibility-text-caption-fallback",
    "deployment-profile-no-runtime-duplication",
    "performance-lightweight-contract"
  ]),
  releaseGates: Object.freeze({
    designBibleEnforced: true,
    noDuplicateVoiceRuntime: true,
    captionsRequired: true,
    typedFallbackRequired: true,
    screenReaderStatusRequired: true,
    reducedMotionRequired: true,
    noFakeSpeech: true,
    noFakeHearing: true,
    noFakeAccent: true,
    noFakeCompletion: true,
    highRiskActionsRemainGated: true,
    noProviderClaimWithoutAvailability: true,
    noDomainPackVoiceEngine: true
  }),
  browserValidationExpectations: Object.freeze([
    "Standard User dashboard opens",
    "Ask Nexus remains usable by typing",
    "voice control remains user-initiated",
    "captions and live region are present",
    "orb and mission state synchronize without unverified completion",
    "provider unavailable language stays honest",
    "regional voice fallback stays disclosed",
    "no unsafe user-facing Presence claims are visible"
  ]),
  releaseNotes: Object.freeze([
    "Nexus Presence is the canonical assistant identity and voice layer.",
    "All domain packs must use the shared Presence runtime instead of creating separate voice engines.",
    "Speech, captions, orb state, mission state, and accessibility fallbacks must stay synchronized.",
    "Completion language requires verified outcome evidence."
  ])
});
let nexusCoreRuntimeState = {
  current: "idle",
  previous: "",
  statusText: NEXUS_CORE_STATE_CONTRACT.idle.label,
  updatedAt: new Date().toISOString(),
  source: "startup"
};
let nexusPresenceState = {
  state: NEXUS_PRESENCE_STATES.IDLE,
  status: "Ask Nexus what you need.",
  lastUserInput: "",
  lastResponse: "",
  nextQuestion: "",
  activeMission: "",
  suggestions: "You can ask me to check health risk, predict crop risk, assess trade readiness, plan logistics, build a learning plan, prepare a message, or show receipts.",
  updatedAt: new Date().toISOString()
};
let nexusPilotPlatformLastRecord = null;
let nexusPilotPlatformStatus = null;
let nexusPilotReviewQueue = [];
let nexusProductionReadinessStatus = null;
let nexusProductionStorageStatus = null;
let nexusProductionIntegrationStatus = [];
let nexusProductionAdminOperations = null;
let nexusProductionPrivacySummary = null;
let nexusProductionRailActionStatus = "";
let nexusKnowledgeStatus = null;
let nexusOpenAiNativeStatus = null;
let nexusKnowledgeTrustedSources = [];
let nexusKnowledgeLastResult = null;
let nexusKnowledgeHistory = null;
let nexusKnowledgeActionStatus = "";
let nexusEmailProviderStatus = null;
let nexusEmailProviderLastResult = null;
let nexusCommunicationsProviderStatus = null;
let nexusCommunicationsProviderLastResult = null;
let nexusTelehealthProviderStatus = null;
let nexusTelehealthLastResult = null;
let nexusTelehealthLastEncounter = null;
let nexusPharmacyProviderStatus = null;
let nexusPharmacyLastResult = null;
let nexusMobileClinicProviderStatus = null;
let nexusMobileClinicLastResult = null;
let nexusProviderPathwayLastRequest = null;
let nexusProviderContactBridgeCards = [];
let nexusLearningProviderBridgeCards = [];
let nexusMarketplaceBridgeCards = [];
let nexusMapsFieldVisitPlan = null;
let experienceMode = localStorage.getItem("agrinexusExperienceMode") || "";
let pendingWorkflow = null;
let pendingGrandmaAction = null;
let lastFocusedElement = null;
let voiceRecognition = null;
let lastVoiceResponse = "Ready for a command.";
let voiceFirstMode = false;
let voiceDemoQuietMode = localStorage.getItem("agrinexusDemoQuiet") === "on";
let voiceStreamingMode = localStorage.getItem("agrinexusStreamingVoice") !== "off";
let voiceAutoRestart = voiceFirstMode;
let voiceStopRequested = false;
let nexusVoicePermissionDeniedThisSession = false;
let nexusVoicePermissionStream = null;
let nexusPermanentMicrophoneStream = null;
let nexusPermanentMicrophoneOwner = "none";
let nexusPermanentMicrophoneClickBound = false;
let nexusVoiceAudioFallbackRecorder = null;
let nexusVoiceAudioFallbackChunks = [];
let nexusVoiceAudioFallbackTimer = null;
let nexusVoiceLastSubmittedSignature = "";
let nexusVoiceLastSubmittedAt = 0;
let nexusVoiceLastFinalTranscriptAt = 0;
const NEXUS_AUDIO_FALLBACK_RECORDING_MS = 9000;
const NEXUS_AUDIO_PIPELINE_EVENT_LIMIT = 100;
const NEXUS_VOICE_LIFECYCLE_EVENT_LIMIT = 100;
const nexusVoiceAudioPipelineEvents = [];
const nexusVoiceLifecycleEvents = [];
let nexusVoiceLifecycleSequence = 0;
let voiceSpeaking = false;
let voiceResumeAfterSpeech = false;
let voiceConversationPaused = false;
let voiceInterimTranscript = "";
let voiceInterimStartedAt = 0;
let voiceLastPartialAt = 0;
let voiceFinalDebounceTimer = null;
let companionUnderstandingState = null;
let lastSpokenText = "";
let lastSpokenAt = 0;
let lastVoiceResponseAt = 0;
let lastVoiceResponseSignature = "";
let lastVoiceResponseRepeatCount = 0;
let activeVoiceAudio = null;
let realtimeVoiceSession = null;
let realtimeVoiceStarting = false;
let realtimeVoiceStatusCache = null;
let nexusRealtimeConversationIdentity = "";
let elevenLabsVoiceSession = null;
let elevenLabsVoiceStarting = false;
let elevenLabsVoiceStatusCache = null;
let nexusGenesisVoiceRuntimePolicyCache = null;
let nexusGenesisVoiceRuntimeManager = null;
let nexusGenesisConversationSupervisor = null;
const realtimeToolArgumentBuffers = new Map();
const NEXUS_GENESIS_REALTIME_RUNTIME_VERSION = "nexus-genesis-realtime-runtime-v1";
const NEXUS_GENESIS_ELEVENLABS_RUNTIME_VERSION = "nexus-genesis-elevenlabs-agents-runtime-v11";
const NEXUS_GENESIS_ELEVENLABS_CONTROLLER_STATES = Object.freeze([
  "disabled",
  "authorizing",
  "connecting",
  "ready",
  "listening",
  "user-speaking",
  "processing",
  "speaking",
  "interrupted",
  "reconnecting",
  "blocked",
  "failed",
  "closed"
]);
const NEXUS_REALTIME_CONTROLLER_STATES = Object.freeze([
  "initializing",
  "authorizing",
  "connecting",
  "ready",
  "listening",
  "user-speaking",
  "processing",
  "responding",
  "interrupted",
  "reconnecting",
  "blocked",
  "failed",
  "closed"
]);
let voicePlaybackToken = 0;
let voiceInterruptToken = 0;
let activeVoiceRequestController = null;
let nexusVoiceTurnToken = 0;
let activeAgentCommandController = null;
let voiceConversationTurns = Number(localStorage.getItem("agrinexusVoiceTurns") || 0);
let liveVoiceSuggestions = [];
let a100SafeFollowUpContext = null;
let a100SafeFollowUpBackStack = [];
let assistantRuntimePreviewCard = null;
const NEXUS_ASSISTANT_SAFE_FOLLOW_UP_CHIPS = Object.freeze([
  "Explain this",
  "Compare sources",
  "Make a checklist",
  "Show training options",
  "Narrow results",
  "Show entry-level options",
  "Draft questions I should ask",
  "What should I do next?"
]);
const NEXUS_ASSISTANT_BLOCKED_FOLLOW_UP_CHIP_PATTERNS = Object.freeze([
  /\bcall\b/i,
  /\bmessage\b/i,
  /\bapply\b/i,
  /\bbuy\b/i,
  /\bbook\b/i,
  /\bpay\b/i,
  /\bdispatch\b/i,
  /\bsend\s+(my\s+)?location\b/i,
  /\bsubmit\b/i
]);
let agentReasoningVisible = localStorage.getItem("agrinexusReasoningVisible") === "true";
let pendingNexusSpokenCommand = null;
let confirmedVoiceActionActive = false;
let pendingNexusAnswerContext = null;
let nexusAwaitingCommand = false;
let nativeVoiceBridgeReady = false;
let nativeVoiceSession = JSON.parse(localStorage.getItem("agrinexusNativeVoiceSession") || "null");
let nexusVoiceSession = JSON.parse(localStorage.getItem("agrinexusVoiceSession") || "null") || {
  state: "idle",
  activeTurnToken: 0,
  userSpeaking: false,
  assistantSpeaking: false,
  lastPartial: "",
  lastFinal: "",
  lastUserSpeechAt: 0,
  lastAssistantSpeechAt: 0,
  queuedSpeechAt: 0
};
let nexusVoicePreferencePendingConsent = JSON.parse(localStorage.getItem("nexusVoicePreferencePendingConsent") || "null");
let nexusOsVoiceStartInFlight = false;
let nexusGenesisPermissionGrantedAutoStartInFlight = false;
let nexusGenesisPermissionGrantedAutoStartLastAttemptAt = 0;
let nexusGenesisVoiceSessionActive = false;
let nexusGenesisVoiceRestartTimer = null;
let nexusGenesisRecognitionStartTimeout = null;
let nexusOsVoiceRuntimeState = JSON.parse(localStorage.getItem("nexusOsVoiceRuntimeState") || "null") || {
  schemaVersion: "nexus-os-voice-runtime.v1",
  runtimeOwner: "nexus-os-canonical-voice",
  mode: "standby",
  listeningState: "idle",
  hearingState: "idle",
  speechConfidence: null,
  wakePhrases: ["Nexus", "Hello Nexus"],
  language: "en",
  locale: "en-US",
  permissionState: "unknown",
  recognitionSupported: false,
  synthesisSupported: false,
  microphoneUnavailable: false,
  privacy: "Genesis automatically requests browser microphone access for the active voice session. Nexus submits only finalized recognized speech.",
  updatedAt: new Date().toISOString()
};
const NEXUS_GENESIS_VOICE_RUNTIME_VERSION = "nexus-genesis-voice-runtime-v456";
const NEXUS_MIC_PERMISSION_STATES = Object.freeze(["unknown", "prompt", "granted", "denied", "unsupported", "browser-managed"]);
const NEXUS_OS_VOICE_FALLBACK_STATES = Object.freeze([
  "permission-denied",
  "unsupported-browser",
  "microphone-unavailable",
  "recognition-interrupted",
  "recognition-timeout",
  "typed-fallback"
]);

function normalizeNexusMicrophonePermissionState(value = "unknown") {
  const raw = String(value || "unknown").toLowerCase().trim();
  if (raw === "granted-or-browser-managed" || raw === "browser-managed-authorized" || raw === "browser_managed" || raw === "browser managed") return "browser-managed";
  if (raw === "prompt-or-existing" || raw === "prompted" || raw === "ask" || raw === "request") return "prompt";
  if (raw === "secure-context-required" || raw === "not-supported" || raw === "not_supported") return "unsupported";
  if (raw === "blocked" || raw === "not-allowed" || raw === "permission-denied") return "denied";
  if (raw === "granted" || raw === "denied" || raw === "prompt" || raw === "unsupported" || raw === "browser-managed" || raw === "unknown") return raw;
  return "unknown";
}

function nexusMicrophonePermissionDisplayText(value = "unknown") {
  const normalized = normalizeNexusMicrophonePermissionState(value);
  if (normalized === "browser-managed") return "granted through browser-managed access";
  if (normalized === "granted") return "granted";
  if (normalized === "prompt") return "permission prompt required";
  if (normalized === "denied") return "denied";
  if (normalized === "unsupported") return "unsupported";
  return "unknown";
}

function nexusMicrophonePermissionCanAttemptStart(value = "unknown") {
  const normalized = normalizeNexusMicrophonePermissionState(value);
  return normalized === "granted" || normalized === "browser-managed" || normalized === "prompt" || normalized === "unknown";
}

function isNexusGenesisHomeActive() {
  return Boolean(typeof document !== "undefined" && document.querySelector("[data-nexus-genesis-orb-only-home='true']"));
}

function nexusGenesisVoiceDebugLog(stage, details = {}) {
  if (!nexusGenesisVoiceDebugEnabled?.()) return;
  const state = {
    permissionState: nexusOsVoiceRuntimeState?.permissionState || "unknown",
    listeningState: nexusOsVoiceRuntimeState?.listeningState || "idle",
    mode: nexusOsVoiceRuntimeState?.mode || "standby",
    recognitionConstructed: Boolean(nexusOsVoiceRuntimeState?.recognitionConstructed),
    recognitionStartRequested: Boolean(nexusOsVoiceRuntimeState?.recognitionStartRequested),
    recognitionOnStartReceived: Boolean(nexusOsVoiceRuntimeState?.recognitionOnStartReceived)
  };
  const safeDetails = Object.fromEntries(Object.entries(details || {}).filter(([key, value]) => {
    if (/transcript|token|secret|password|credential/i.test(key)) return false;
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || value === null || value === undefined;
  }));
  const payload = {
    build: typeof AGRINEXUS_BUILD_VERSION !== "undefined" ? AGRINEXUS_BUILD_VERSION : "unknown",
    pwaCache: typeof AGRINEXUS_PWA_CACHE_VERSION !== "undefined" ? AGRINEXUS_PWA_CACHE_VERSION : "unknown",
    voiceRuntimeVersion: NEXUS_GENESIS_VOICE_RUNTIME_VERSION,
    ...state,
    ...safeDetails
  };
  const detailText = Object.entries(payload)
    .map(([key, value]) => `${key}=${String(value)}`)
    .join(" ");
  console.info(`[Nexus Genesis voice] ${stage}${detailText ? ` | ${detailText}` : ""}`);
}
const NEXUS_GENESIS_TRUST_CHAIN_STATES = Object.freeze([
  "idle",
  "wake_requested",
  "voice_permission_pending",
  "listening",
  "speech_detected",
  "transcript_finalized",
  "conversation_submitted",
  "response_pending",
  "response_ready",
  "speech_preparing",
  "speaking",
  "waiting",
  "permission_denied",
  "recognition_unavailable",
  "recognition_failed",
  "response_failed",
  "synthesis_unavailable",
  "synthesis_failed",
  "cancelled"
]);
const NEXUS_GENESIS_TRUST_CHAIN_FAILURE_STATES = Object.freeze([
  "permission_denied",
  "recognition_unavailable",
  "recognition_failed",
  "response_failed",
  "synthesis_unavailable",
  "synthesis_failed",
  "cancelled"
]);
const NEXUS_GENESIS_TRUST_CHAIN_CONTRACT = Object.freeze({
  schemaVersion: "nexus-genesis-trust-chain.v1",
  runtimeOwner: "NexusGenesisTrustChainRuntime",
  canonicalStates: NEXUS_GENESIS_TRUST_CHAIN_STATES,
  failureStates: NEXUS_GENESIS_TRUST_CHAIN_FAILURE_STATES,
  orbHomeAction: "wake_or_listen_only",
  conversationFirst: true,
  standardUserAdminPreviewAllowed: false,
  textFallbackRequired: true,
  speechRequiresStartEvent: true,
  noWorkflowFromOrbActivation: true
});
const NEXUS_GENESIS_FULL_RAIL_CONTRACT = Object.freeze({
  schemaVersion: "nexus-genesis-full-rail-contract.v1",
  runtimeOwner: "NexusGenesisTrustChainRuntime",
  finalAcceptanceRail: "nexus-genesis-rail-25-end-to-end-standard-user-acceptance",
  chain: [
    "user_presence",
    "input_ownership",
    "listening_or_typed_intake",
    "transcript",
    "acknowledgement",
    "understanding",
    "context_retrieval",
    "planning",
    "capability_routing",
    "consent",
    "execution_or_truthful_blocking",
    "outcome_verification",
    "receipt",
    "memory_update",
    "spoken_or_visible_response",
    "companion_continuity",
    "recovery"
  ],
  rails: [
    { number: 9, id: "nexus-genesis-rail-09-understanding", name: "Understanding and intent integrity" },
    { number: 10, id: "nexus-genesis-rail-10-context", name: "Context and conversation continuity" },
    { number: 11, id: "nexus-genesis-rail-11-memory", name: "Memory truth and lifecycle" },
    { number: 12, id: "nexus-genesis-rail-12-planning", name: "Planning and mission decomposition" },
    { number: 13, id: "nexus-genesis-rail-13-capability-readiness", name: "Capability and provider readiness" },
    { number: 14, id: "nexus-genesis-rail-14-consent-confirmation", name: "Consent and confirmation" },
    { number: 15, id: "nexus-genesis-rail-15-execution-integrity", name: "Execution integrity" },
    { number: 16, id: "nexus-genesis-rail-16-outcome-receipts", name: "Outcome verification and receipts" },
    { number: 17, id: "nexus-genesis-rail-17-privacy-isolation", name: "Privacy and user isolation" },
    { number: 18, id: "nexus-genesis-rail-18-safety-escalation", name: "Safety and high-risk escalation" },
    { number: 19, id: "nexus-genesis-rail-19-accessibility", name: "Accessibility and inclusive interaction" },
    { number: 20, id: "nexus-genesis-rail-20-multilingual", name: "Multilingual integrity" },
    { number: 21, id: "nexus-genesis-rail-21-concurrency", name: "Interruption, concurrency, and race-condition control" },
    { number: 22, id: "nexus-genesis-rail-22-recovery", name: "Offline, degraded, and recovery behavior" },
    { number: 23, id: "nexus-genesis-rail-23-companion-emotional-safety", name: "Companion continuity and emotional safety" },
    { number: 24, id: "nexus-genesis-rail-24-physical-browser-voice-proof", name: "Physical browser voice proof" },
    { number: 25, id: "nexus-genesis-rail-25-end-to-end-standard-user-acceptance", name: "End-to-end Standard User acceptance" }
  ],
  understanding: Object.freeze({
    preservesUserWording: true,
    distinguishesCommandsQuestionsConversationAndHighRiskActions: true,
    ambiguityRequiresClarification: true,
    noSilentIntentSubstitution: true,
    noExecutionFromGuessedIntent: true,
    multiIntentDecompositionRequired: true,
    uncertaintyState: "clarify_before_action",
    seniorFriendlyClarification: true
  }),
  context: Object.freeze({
    conversationOwnershipRequired: true,
    missionIsolationRequired: true,
    pronounResolutionRequiresActiveMission: true,
    staleContextRejected: true,
    continueChangeCancelStartOverSupported: true,
    newTopicCreatesSeparateMission: true,
    sessionRestorationTruthful: true
  }),
  memory: Object.freeze({
    currentTurnContextDisclosed: true,
    persistentMemoryRequiresConsent: true,
    preferenceMemoryInspectable: true,
    correctionDeletionArchivalSupported: true,
    deceasedPatientClosureSupported: true,
    closedBusinessRemovalSupported: true,
    noMemoryClaimWhenPersistenceFails: true,
    storageScopeMustBeExplained: true
  }),
  planning: Object.freeze({
    decomposesGoals: true,
    detectsMissingInformation: true,
    tracksDependenciesAndBlockedSteps: true,
    revisesPlanOnUserChange: true,
    cancellationSupported: true,
    completionCriteriaRequired: true,
    planIsNotExecution: true
  }),
  capabilityReadiness: Object.freeze({
    adapterDiscoveryRequired: true,
    missingEnvNamesOnly: true,
    noSecretExposure: true,
    onlineOfflineStatusSeparated: true,
    localFallbackNamed: true,
    unsupportedActionsBlocked: true,
    noFakeProviderReadiness: true,
    providerSuccessRequiresEvidence: true
  }),
  consent: Object.freeze({
    exactActionDetailsRequired: true,
    changedActionInvalidatesConfirmation: true,
    confirmationExpiryRequired: true,
    recipientPaymentMedicalDeletionDroneJobMessageRequireConfirmation: true,
    cancellationPathRequired: true
  }),
  execution: Object.freeze({
    exactPayloadRequired: true,
    permissionChecksRequired: true,
    duplicateSubmissionPrevented: true,
    idempotencyRequiredWhereApplicable: true,
    timeoutAndFailureNormalized: true,
    noExecutionFromPreview: true,
    noExecutionFromAssistantTextAlone: true,
    noFakeSuccess: true
  }),
  receipts: Object.freeze({
    providerResponseVerificationRequired: true,
    successEvidenceRequired: true,
    failureEvidenceRequired: true,
    transactionIdentifiersRequiredWhenAvailable: true,
    timestampRequired: true,
    receiptOwnershipRequired: true,
    noInventedReceipt: true,
    noReceiptBeforeOutcome: true,
    staleReceiptCorrectionRequired: true
  }),
  privacy: Object.freeze({
    userDataIsolationRequired: true,
    sessionIsolationRequired: true,
    recordOwnershipRequired: true,
    adminBoundaryRequired: true,
    providerDataBoundaryRequired: true,
    noCrossUserLeakage: true,
    redactionRequired: true,
    safeLoggingRequired: true,
    accessDenialRequired: true
  }),
  safety: Object.freeze({
    emergencyEscalationRequired: true,
    noDiagnosis: true,
    noUnauthorizedFinancialAction: true,
    noUnconfirmedDroneOperation: true,
    noUnauthorizedEmploymentSubmission: true,
    noUnsafeAgriculturalChemicalDirection: true,
    noFabricatedShipmentLocation: true,
    noProviderControlBypass: true,
    respectfulUsefulRefusal: true
  }),
  accessibility: Object.freeze({
    keyboardAccessRequired: true,
    focusOrderRequired: true,
    accessibleNamesRequired: true,
    screenReaderAnnouncementsRequired: true,
    reducedMotionSupported: true,
    contrastAndZoomSupported: true,
    touchTargetsSupported: true,
    lowBandwidthSupported: true,
    typedFallbackRequired: true,
    voiceFreeCompletionRequired: true,
    seniorFriendlyLanguage: true
  }),
  multilingual: Object.freeze({
    supportedAcceptanceLanguages: ["en", "es", "fr", "sw"],
    explicitLanguageSwitchingRequired: true,
    transcriptLanguageTracked: true,
    responseLanguageTracked: true,
    synthesisLocaleGuarded: true,
    fallbackLanguageTruthful: true,
    highRiskConfirmationInActiveLanguage: true,
    noFalseVoiceAvailabilityClaim: true
  }),
  concurrency: Object.freeze({
    userInterruptionStopsSpeech: true,
    newMissionRequiresStateSeparation: true,
    staleCallbacksIgnored: true,
    duplicateBrowserEventsDebounced: true,
    duplicateSubmissionsPrevented: true,
    cancellationRacesDoNotCompleteMissions: true,
    backgroundTabRecoveryRequired: true,
    stateLocksReleaseOnFailure: true
  }),
  recovery: Object.freeze({
    offlineStartupSupported: true,
    lostNetworkTruthful: true,
    providerTimeoutTruthful: true,
    staleCacheDetected: true,
    malformedResponseHandled: true,
    microphoneUnavailableTypedFallback: true,
    synthesisUnavailableTypedFallback: true,
    locationDeniedNoSilentFailure: true,
    databaseUnavailableNoFalseOnlineState: true,
    retryPathVisible: true
  }),
  companionEmotionalSafety: Object.freeze({
    naturalGreeting: true,
    useNameOnlyWhenKnown: true,
    calmSupport: true,
    noAbandonmentLanguage: true,
    noDependencyLanguage: true,
    noConsciousnessClaim: true,
    noManipulativeAttachment: true,
    noFalseHeardOrSpokeClaim: true,
    dignifiedSeniorSupport: true,
    usefulNextStepAfterBoundary: true
  }),
  physicalVoiceProof: Object.freeze({
    sourceWiringVerified: true,
    browserEventsVerified: true,
    audibleOutputRequiresHumanConfirmation: true,
    microphonePermissionMustBeRecorded: true,
    recognitionStartMustBeRecorded: true,
    transcriptMustBeRecorded: true,
    synthesisVoiceAvailabilityMustBeRecorded: true,
    playbackStartEventMustBeRecorded: true,
    stopRepeatMuteUnmuteSpeedInterruptionTestedWhenAvailable: true,
    typedRecoveryRequired: true,
    orbSynchronizationRequired: true
  }),
  endToEndAcceptance: Object.freeze({
    validatesRails: "1-25",
    standardUserJourneyRequired: true,
    providerReadinessVisible: true,
    executionOrTruthfulBlockingRequired: true,
    verifiedOutcomeBeforeReceipt: true,
    memoryUpdateTruthful: true,
    cancelCloseRecoverRequired: true,
    noUnrelatedMissionMixing: true
  })
});
window.NEXUS_GENESIS_FULL_RAIL_CONTRACT = NEXUS_GENESIS_FULL_RAIL_CONTRACT;
let nexusGenesisTrustChainState = {
  schemaVersion: NEXUS_GENESIS_TRUST_CHAIN_CONTRACT.schemaVersion,
  runtimeOwner: NEXUS_GENESIS_TRUST_CHAIN_CONTRACT.runtimeOwner,
  state: "idle",
  orbState: "idle",
  visibleFeedback: "Nexus is ready.",
  screenReaderFeedback: "Nexus is ready.",
  lastTranscript: "",
  lastResponse: "",
  textFallbackRequired: true,
  loggingBehavior: "protected-client-diagnostics",
  updatedAt: new Date().toISOString()
};
let nexusDailyCompanionState = JSON.parse(localStorage.getItem("nexusDailyCompanionState") || "null") || {
  schemaVersion: "nexus-daily-companion.v1",
  mode: "companion",
  activeMissionTopic: "",
  pausedMissionTopic: "",
  lastTopic: "",
  lastUserNeed: "",
  approvedMemoryOnly: true,
  updatedAt: new Date().toISOString()
};
const NEXUS_OS_MISSION_LIFECYCLE_STATES = Object.freeze([
  "listen",
  "understand",
  "clarify",
  "plan",
  "collect",
  "prepare",
  "confirm",
  "execute",
  "verify",
  "record",
  "learn",
  "complete",
  "return_home"
]);
const NEXUS_OS_MISSION_TERMINAL_STATES = Object.freeze(["complete", "return_home", "cancelled", "failed"]);
const NEXUS_OS_MISSION_TRANSITIONS = Object.freeze({
  listen: ["understand", "clarify", "paused", "cancelled", "complete", "return_home", "failed"],
  understand: ["clarify", "plan", "paused", "cancelled", "complete", "return_home", "failed"],
  clarify: ["collect", "plan", "paused", "cancelled", "complete", "return_home", "failed"],
  plan: ["collect", "prepare", "confirm", "paused", "cancelled", "complete", "return_home", "failed"],
  collect: ["prepare", "confirm", "paused", "cancelled", "complete", "return_home", "failed"],
  prepare: ["confirm", "verify", "record", "paused", "cancelled", "complete", "return_home", "failed"],
  confirm: ["execute", "prepare", "paused", "cancelled", "complete", "return_home", "failed"],
  execute: ["verify", "paused", "cancelled", "complete", "return_home", "failed"],
  verify: ["record", "paused", "cancelled", "complete", "return_home", "failed"],
  record: ["learn", "complete", "paused", "cancelled", "return_home", "failed"],
  learn: ["complete", "return_home", "paused", "cancelled"],
  complete: ["return_home"],
  return_home: ["listen"],
  paused: ["listen", "understand", "clarify", "plan", "collect", "prepare", "confirm", "cancelled"],
  failed: ["retry", "return_home"],
  retry: ["listen", "understand"],
  cancelled: ["return_home"]
});
let nexusOsMissionLifecycleState = JSON.parse(localStorage.getItem("nexusOsMissionLifecycleState") || "null") || {
  schemaVersion: "nexus-os-mission-lifecycle.v1",
  activeMission: null,
  missionHistory: [],
  updatedAt: new Date().toISOString()
};
let queuedVoiceSpeechTimer = null;
let queuedVoiceSpeechPayload = null;
let agentPerformanceState = {
  lastCommand: "",
  spokenCommand: "",
  startedAt: 0,
  acknowledgedAt: 0,
  completedAt: 0,
  lastLatencyMs: 0,
  status: "ready",
  route: "idle"
};
let agentProgressTimers = [];
let pendingAgentClarification = null;
let activeAgentJourney = null;
let activeVoiceMission = null;
let activeConversationIntake = JSON.parse(localStorage.getItem("agrinexusConversationIntake") || "null");
let voiceEventStream = [];
let conversationModeState = JSON.parse(localStorage.getItem("agrinexusConversationModeState") || "{}");
let conversationModeMemories = JSON.parse(localStorage.getItem("agrinexusConversationModeMemories") || "{}");
let nexusConversationWorkflowTransitionState = {
  schemaVersion: "nexus-conversation-workflow-transition-state.v1",
  currentState: "exploring",
  activeTopic: "",
  lastProposal: null,
  activeWorkflow: null,
  turns: []
};
let nexusOsConversationTurns = JSON.parse(localStorage.getItem("nexusOsUnifiedConversationTurns") || "[]");
let nexusOsConversationMuted = localStorage.getItem("nexusOsUnifiedConversationMuted") === "true";
let nexusAwarenessState = JSON.parse(localStorage.getItem("agrinexusAwarenessState") || "{}");
let latestObservedAgentActionMetadata = null;
let observedAgentActionMetadataLog = [];
let visibleLevelOneAgentActionSuggestion = null;
let visibleControlledActionPreviewReadiness = null;
let nexusAutonomousWorkflowState = null;
let nexusOpenDialogueAgentState = {
  schemaVersion: "nexus-open-dialogue-agent-state.v1",
  activeTaskId: null,
  tasks: [],
  taskHistory: [],
  lastOutcome: "",
  lastDraft: "",
  persistentTaskMemory: nexusPersistentTaskMemoryLoad(),
  lastHigherReasoning: null,
  learningSignals: [],
  scorecard: null
};
let nexusControlledActionQueue = [];
let nexusUserConfirmationGateState = null;
let nexusSessionActionAuditLog = [];
let nexusSafeTaskHistory = [];
let nexusSimulatedProviderResults = [];
let nexusInternalNavigationExecutionResults = [];
let nexusLocalDraftMessageResults = [];
let nexusCallPreparationResults = [];
let nexusMapNavigationHandoffResults = [];
let nexusMarketplaceInquiryPreparationResults = [];
let nexusChronicCarePhysicianReportResults = [];
let nexusCareTeamReportCopyViewResults = [];
let visibleControlledStagedActionPreview = null;
let visibleUserConfirmationPreview = null;
let latestControlledActionConfirmationReadiness = null;
let latestControlledActionNavigationReadiness = null;
let controlledActionConfirmationPrototypeStatus = "";
let preserveControlledActionPreviewDuringCommandRoute = false;
const accessibilityPrefs = JSON.parse(localStorage.getItem("agrinexusAccessibility") || "{}");
const originalTextNodes = new WeakMap();
let deferredInstallPrompt = null;
let routeTrackingWatchId = null;
let routeTrackingPoints = [];
const nexusProductIdentity = Object.freeze({
  productName: "Nexus Genesis | AgriNexus",
  assistantName: "Nexus",
  edition: "genesis",
  legacyProductName: "AgriNexus"
});
const assistantFullName = "AgriNexus";
const assistantShortName = "Nexus";
const AGRINEXUS_BUILD_VERSION = "nexus-behavior-488";
const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v433";
const VOICE_RESTART_DELAY_MS = 320;
const VOICE_UI_FOCUS_DELAY_MS = 80;
const VOICE_ATTENTION_DELAY_MS = 900;
const VOICE_POST_STOP_REDIRECT_DELAY_MS = 80;
const VOICE_UI_RESUME_DELAYS_MS = [180, 650, 1500, 3200, 5200];
const VOICE_FINAL_DEBOUNCE_MS = 120;
const VOICE_PARTIAL_BARGE_IN_MIN_CHARS = 4;
const NEXUS_SPEECH_GATE_DELAY_MS = 280;
const NEXUS_USER_SPEAKING_HOLD_MS = 950;
const NEXUS_TTS_PROFILE_VERSION = "natural-assistant-v2";
const OPENAI_TTS_VOICE_FALLBACK = "verse";
const OPENAI_TTS_VOICE_CHOICES = new Set(["alloy", "ash", "ballad", "coral", "echo", "fable", "nova", "onyx", "sage", "shimmer", "verse"]);
const BROWSER_SPEECH_FALLBACK_STORAGE_KEY = "agrinexusBrowserSpeechFallback";
// TTS reliability policy: OpenAI TTS is the primary spoken-output path. Browser
// speech synthesis stays off by default to avoid robotic production voice, but
// developers/users may opt in with localStorage agrinexusBrowserSpeechFallback=on.
// Provider failures must update visible status, clear speaking state, and allow
// voice-first listening to resume safely; aborts/interruption are not failures.

function evaluateNexusLowRiskRendererRuntimeHarness(context = {}) {
  // Phase 12Y: disabled-by-default, local/test-only metadata harness. It can
  // describe eligible low-risk preview metadata for QA, but it still never loads
  // a renderer, changes Standard User behavior, writes DOM, navigates, requests
  // permissions, hands off providers, attaches handlers, or executes actions.
  const flagState = context && typeof context.flagState === "object" ? context.flagState : {};
  const eligibilityState = context && typeof context.eligibilityState === "object" ? context.eligibilityState : {};
  const reviewState = context && typeof context.stagedActionState === "object" ? context.stagedActionState : {};
  const actionDecision = context && typeof context.actionDecision === "object" ? context.actionDecision : {};
  const inertRenderModel = context && typeof context.inertRenderModel === "object" ? context.inertRenderModel : {};
  const text = value => String(value || "").trim();
  const lower = value => text(value).toLowerCase();
  const pick = (value, fallback = "") => text(value) || fallback;
  const allowedDomains = new Set(["learning", "jobs", "marketplace", "agriculture"]);
  const allowedBoundaries = new Set(["suggestion_only", "navigation_only"]);
  const allowedUiStates = new Set(["suggestion_preview", "review_option", "informational_response"]);
  const allowedRenderModes = new Set(["inert_preview", "inert_review", "inert_review_option", "inert_information"]);
  const approvalGateField = "con" + "firmationRequired";
  const activated = false;
  const base = {
    activated,
    mode: "inactive",
    renderIntent: "none",
    rendererInvoked: false,
    visibleRuntimeUi: false,
    domRenderingAllowed: false,
    clickHandlersAllowed: false,
    executionAllowed: false,
    providerHandoffAllowed: false,
    permissionRequestAllowed: false,
    navigationAllowed: false,
    standardUserBehaviorChange: false,
    executionAuthority: "none",
    renderingAuthority: "none",
    providerHandoffAuthority: "none",
    browserPermissionAuthority: "none",
    navigationAuthority: "none",
    source: "nexus-low-risk-runtime-harness.v1"
  };
  if (flagState.enabled !== true) {
    return Object.freeze({ ...base, reason: "flag_disabled" });
  }
  if (eligibilityState.eligible !== true) {
    return Object.freeze({ ...base, reason: "eligibility_false" });
  }
  if (actionDecision.riskLevel && actionDecision.riskLevel !== "low") {
    return Object.freeze({ ...base, reason: "restricted_or_non_low_risk" });
  }
  if (reviewState.riskLevel && reviewState.riskLevel !== "low") {
    return Object.freeze({ ...base, reason: "restricted_or_non_low_risk" });
  }
  const domain = lower(actionDecision.domain);
  const boundary = text(actionDecision.executionBoundary);
  const uiState = text(reviewState.uiState);
  const renderMode = text(inertRenderModel.renderMode);
  if (!allowedBoundaries.has(boundary)) {
    return Object.freeze({ ...base, reason: "unsupported_boundary" });
  }
  if (context.localTestFlagOn !== true) {
    const hasLocalTestFixtureShape = Boolean(domain || uiState || renderMode);
    if (hasLocalTestFixtureShape) {
      return Object.freeze({ ...base, reason: "local_test_flag_disabled" });
    }
    return Object.freeze({ ...base, reason: "not_configured" });
  }
  if (!allowedDomains.has(domain)) {
    return Object.freeze({ ...base, reason: "unsupported_state" });
  }
  if (domain === "marketplace" && (lower(actionDecision.selectedToolId) !== "marketplace.agritrade" || !lower(actionDecision.actionId).includes("review") || lower(actionDecision.actionId).includes("transaction"))) {
    return Object.freeze({ ...base, reason: "unsupported_state" });
  }
  if (domain === "agriculture" && (!lower(actionDecision.actionId).includes("support") || !lower(actionDecision.actionId).includes("review"))) {
    return Object.freeze({ ...base, reason: "unsupported_state" });
  }
  if (!allowedUiStates.has(uiState) || !allowedRenderModes.has(renderMode)) {
    return Object.freeze({ ...base, reason: "unsupported_state" });
  }
  if (actionDecision[approvalGateField] === true || (Array.isArray(actionDecision.requiredPermissions) && actionDecision.requiredPermissions.length) || (Array.isArray(actionDecision.missingInputs) && actionDecision.missingInputs.length)) {
    return Object.freeze({ ...base, reason: "unsupported_state" });
  }
  if (reviewState.executionAllowed !== false || reviewState.providerHandoffAllowed !== false || reviewState.permissionRequired === true) {
    return Object.freeze({ ...base, reason: "unsupported_state" });
  }
  if (inertRenderModel.executionAllowed !== false || inertRenderModel.providerHandoffAllowed !== false || inertRenderModel.permissionRequestAllowed !== false || inertRenderModel.domRenderingAllowed !== false || inertRenderModel.clickHandlersAllowed !== false) {
    return Object.freeze({ ...base, reason: "unsupported_state" });
  }
  if (!text(inertRenderModel.title) && !text(reviewState.visibleLabel) && !text(actionDecision.userVisibleLabel)) {
    return Object.freeze({ ...base, reason: "missing_inert_data" });
  }
  return Object.freeze({
    ...base,
    activated: true,
    mode: "local_test_only",
    renderIntent: "metadata_only",
    reason: "local_test_metadata_ready",
    riskLabel: "Low risk",
    safetyCopy: "No action has been taken. Review only.",
    metadataOnly: true,
    inertPreview: Object.freeze({
      title: pick(inertRenderModel.title, reviewState.visibleLabel || actionDecision.userVisibleLabel || "Review options"),
      body: pick(inertRenderModel.body, reviewState.description || actionDecision.summary || "Nexus can review this safely without taking action."),
      badge: pick(inertRenderModel.badge, "Preview only"),
      riskLabel: pick(inertRenderModel.riskLabel, "Low risk"),
      safetyCopy: pick(inertRenderModel.safetyCopy, "No action has been taken. Review only."),
      primaryLabel: pick(inertRenderModel.primaryControlLabel, "Review options"),
      secondaryLabel: pick(inertRenderModel.secondaryControlLabel, "Not now"),
      controlsDisabled: true,
      metadataOnly: true
    })
  });
}

function createNexusControlledLowRiskInertCardForTest(model = {}, options = {}) {
  // Phase 13B: test-fixture-only inert DOM prototype. This helper is not wired
  // into Standard User startup and cannot execute, route, request permissions,
  // hand off providers, write storage, or attach event handlers.
  const doc = options && typeof options.documentRef === "object" ? options.documentRef : null;
  if (!doc || typeof doc.createElement !== "function") return null;
  const safeText = value => String(value || "").replace(/\s+/g, " ").trim();
  const allowedLabels = new Set(["Learning", "Training", "Jobs", "Marketplace Review", "Agriculture Help"]);
  const category = safeText(model.category);
  if (!allowedLabels.has(category)) return null;
  if (model.executionAllowed !== false || model.providerHandoffAllowed !== false || model.permissionRequestAllowed !== false) return null;
  if (model.providerHandoff === true || model.permissionRequest === true) return null;
  const card = doc.createElement("section");
  card.setAttribute("data-nexus-renderer-mode", "inert");
  card.setAttribute("data-execution-allowed", "false");
  card.setAttribute("data-provider-handoff", "false");
  card.setAttribute("data-permission-request", "false");
  card.setAttribute("aria-label", `${category} review-only preview`);
  const label = doc.createElement("span");
  label.setAttribute("data-nexus-card-field", "category");
  label.textContent = category;
  const title = doc.createElement("strong");
  title.setAttribute("data-nexus-card-field", "displayTitle");
  title.textContent = safeText(model.displayTitle) || category;
  const summary = doc.createElement("p");
  summary.setAttribute("data-nexus-card-field", "summary");
  summary.textContent = safeText(model.summary) || "Nexus can help you review options without taking action.";
  const safety = doc.createElement("p");
  safety.setAttribute("data-nexus-card-field", "safety");
  safety.textContent = "Review only. No action has been taken. Any future action must be separate, explicit, confirmed, and gated.";
  card.appendChild(label);
  card.appendChild(title);
  card.appendChild(summary);
  card.appendChild(safety);
  return card;
}

function buildLowRiskAgentActionSuggestion(agentAction = {}) {
  // Phase 8F: visible Level 1 label only. This helper is display-only,
  // is not authoritative, and is not allowed to execute, route, open workflows,
  // stage actions, or confirm actions. Existing routers remain authoritative.
  if (!agentAction || typeof agentAction !== "object") return null;
  if (agentAction.runtimeStatus !== "metadata-only") return null;
  if (agentAction.source !== "existing-router") return null;
  const suggestionsByToolId = {
    "workforce.training": { label: "Open Training", levelLabel: "Training" },
    "workforce.job_pathways": { label: "View Job Pathways", levelLabel: "Jobs" },
    "workforce.field_support": { label: "View Field Support", levelLabel: "Field Support" },
    "learning.start": { label: "Open Learning", levelLabel: "Learning" },
    "marketplace.agritrade": { label: "Browse AgriTrade", levelLabel: "Marketplace" },
    "agriculture.help": { label: "Get Agriculture Help", levelLabel: "Agriculture Help" }
  };
  const selectedToolId = String(agentAction.selectedToolId || "").trim();
  const suggestion = suggestionsByToolId[selectedToolId];
  if (!suggestion) return null;
  return {
    level: 1,
    visibility: "visible-level-1-label",
    selectedToolId,
    label: suggestion.label,
    levelLabel: suggestion.levelLabel,
    displayOnly: true,
    userClickRequired: false,
    executionAllowed: false,
    autoOpenAllowed: false,
    source: "agentAction.metadata",
    safetyNotes: [
      "Visible category label only; not an action button.",
      "Existing frontend routers remain authoritative.",
      "Metadata cannot execute, route, open workflows, stage actions, or confirm actions."
    ]
  };
}

function renderLevelOneAgentActionSuggestionLabel() {
  const suggestion = visibleLevelOneAgentActionSuggestion;
  if (!suggestion || suggestion.visibility !== "visible-level-1-label") return "";
  const label = String(suggestion.levelLabel || "").trim();
  if (!label) return "";
  return `<span class="level-one-suggestion-label" aria-label="Nexus suggestion category">${htmlSafe(label)}</span>`;
}

function isVisibleControlledActionPreviewReadiness(readiness = {}) {
  if (!readiness || typeof readiness !== "object") return false;
  if (readiness.schemaVersion !== "controlled-action-preview-readiness.v1") return false;
  if (readiness.previewEligible !== true || readiness.userVisibleInThisPhase !== true) return false;
  if (!["info", "low"].includes(String(readiness.previewRiskLevel || ""))) return false;
  if (readiness.allowedNextStep !== "preparePreviewOnly") return false;
  if (readiness.executionBoundary !== "previewOnlyReadiness") return false;
  if (readiness.requiresExplicitConfirmation === true) return false;
  if (Array.isArray(readiness.requiredPermissions) && readiness.requiredPermissions.length) return false;
  if (Array.isArray(readiness.missingInputs) && readiness.missingInputs.length) return false;
  if (readiness.previewBlockedReason) return false;
  const combined = `${readiness.safePreviewTitle || ""} ${readiness.safePreviewSummary || ""} ${readiness.levelOneLabel || ""}`;
  if (/\b(opened|started|submitted|called|paid|verified|permission granted|diagnose|dispatch|schedule|buy|sell|checkout|login|identity|location|camera|telehealth)\b/i.test(combined)) return false;
  return Boolean(String(readiness.safePreviewTitle || "").trim() && String(readiness.levelOneLabel || "").trim());
}

function renderControlledActionPreview(readiness = visibleControlledActionPreviewReadiness) {
  if (!isVisibleControlledActionPreviewReadiness(readiness)) return "";
  const title = String(readiness.safePreviewTitle || "").trim();
  const category = String(readiness.levelOneLabel || "").trim();
  const summary = String(readiness.safePreviewSummary || "").replace(/\s+/g, " ").trim();
  const shortSummary = summary.length <= 180 ? summary : "";
  const taskPlan = readiness.taskPlan && typeof readiness.taskPlan === "object" ? readiness.taskPlan : null;
  const taskPlanHtml = taskPlan ? `
      <div class="nexus-controlled-action-task-plan" data-nexus-task-plan-source="${htmlSafe(taskPlan.source || "nexus-autonomous-task-planner.v1")}" data-nexus-task-plan-execution-authority="${taskPlan.executionAuthority === false ? "false" : "blocked"}">
        <span><strong>Task plan:</strong> ${htmlSafe(taskPlan.goal || "Prepare a safe task plan for review.")}</span>
        <span><strong>Missing:</strong> ${htmlSafe((taskPlan.missingInformation || []).join(" "))}</span>
        <span><strong>Allowed:</strong> ${htmlSafe((taskPlan.allowedSafeActions || []).join(" "))}</span>
        <span><strong>Blocked:</strong> ${htmlSafe((taskPlan.blockedHighRiskActions || []).join(" "))}</span>
        <span><strong>Next:</strong> ${htmlSafe(taskPlan.nextSuggestedAction || "Choose a safe next step.")}</span>
      </div>` : "";
  return `
    <div class="nexus-controlled-action-preview" aria-label="Nexus informational preview">
      <strong class="nexus-controlled-action-preview-title">${htmlSafe(title)}</strong>
      <span class="nexus-controlled-action-preview-meta">Category: ${htmlSafe(category)}</span>
      <span class="nexus-controlled-action-preview-meta">Needs: No special permission</span>
      ${shortSummary ? `<span class="nexus-controlled-action-preview-summary">${htmlSafe(shortSummary)}</span>` : ""}
      ${taskPlanHtml}
      <span class="nexus-controlled-action-preview-note">Preview only - no action has been taken.</span>
    </div>
  `;
}

function createNexusAutonomousWorkflowState(taskPlan = {}, context = {}) {
  if (!taskPlan || typeof taskPlan !== "object") return null;
  const steps = Array.isArray(taskPlan.steps) && taskPlan.steps.length
    ? taskPlan.steps.map(step => String(step || "").trim()).filter(Boolean)
    : ["Review the plan.", "Choose the next safe step.", "Finish or revise the workflow."];
  if (!steps.length) return null;
  return {
    schemaVersion: "nexus-autonomous-workflow.v1",
    source: "nexus-multi-step-workflow-engine.v1",
    planSource: taskPlan.source || "nexus-autonomous-task-planner.v1",
    startedAt: new Date().toISOString(),
    goal: String(taskPlan.goal || "Work through a safe Nexus plan.").trim(),
    category: String(taskPlan.category || "general").trim(),
    userIntent: String(taskPlan.userIntent || context.command || "").trim(),
    activePlan: taskPlan,
    steps,
    currentStepIndex: 0,
    completedSteps: [],
    status: "active",
    lastUserAction: "started",
    nextStep: steps[0],
    explanation: "Nexus is guiding this plan step by step. It is not executing provider actions, permissions, payments, calls, messages, or external handoffs.",
    revisionNote: "",
    executionAuthority: false,
    canExecute: false,
    externalExecutionAllowed: false,
    storageMode: "volatile-ui-only"
  };
}

function updateNexusAutonomousWorkflowDerivedState() {
  const state = nexusAutonomousWorkflowState;
  if (!state) return null;
  const currentStep = state.steps[state.currentStepIndex] || "";
  state.currentStep = currentStep;
  state.nextStep = state.steps[state.currentStepIndex + 1] || "";
  state.completedSteps = state.steps.slice(0, state.currentStepIndex);
  state.executionAuthority = false;
  state.canExecute = false;
  state.externalExecutionAllowed = false;
  state.storageMode = "volatile-ui-only";
  return state;
}

function sanitizeNexusSessionAuditText(value = "") {
  return String(value || "")
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[email]")
    .replace(/\+?\d[\d\s().-]{6,}\d/g, "[phone]")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
}

function recordNexusSessionActionAuditEvent(eventType = "", details = {}) {
  const type = String(eventType || "").trim();
  if (!type) return null;
  const entry = {
    schemaVersion: "nexus-session-action-audit.v1",
    auditId: `nexus-audit-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    eventType: type,
    userRequest: sanitizeNexusSessionAuditText(details.userRequest || details.command || ""),
    actionType: sanitizeNexusSessionAuditText(details.actionType || ""),
    riskLevel: sanitizeNexusSessionAuditText(details.riskLevel || ""),
    providerStatus: sanitizeNexusSessionAuditText(details.providerStatus || ""),
    safetyReason: sanitizeNexusSessionAuditText(details.safetyReason || details.reason || ""),
    resultStatus: sanitizeNexusSessionAuditText(details.resultStatus || ""),
    storageMode: "volatile-ui-only",
    externalTransmissionAllowed: false,
    backendWriteAllowed: false,
    createdAt: new Date().toISOString()
  };
  nexusSessionActionAuditLog = [entry, ...nexusSessionActionAuditLog].slice(0, 25);
  const taskHistoryEntry = typeof createNexusSafeTaskHistoryEntry === "function"
    ? createNexusSafeTaskHistoryEntry(type, details, entry)
    : null;
  if (taskHistoryEntry) {
    nexusSafeTaskHistory = [taskHistoryEntry, ...nexusSafeTaskHistory].slice(0, 12);
  }
  return entry;
}

function createNexusSafeTaskHistoryEntry(eventType = "", details = {}, auditEntry = {}) {
  const type = sanitizeNexusSessionAuditText(eventType || auditEntry.eventType || "");
  if (!type) return null;
  const taskLabel = sanitizeNexusSessionAuditText(details.taskLabel || details.actionType || auditEntry.actionType || type.replace(/_/g, " "));
  const status = sanitizeNexusSessionAuditText(details.resultStatus || auditEntry.resultStatus || "Recorded locally.");
  const risk = sanitizeNexusSessionAuditText(details.riskLevel || auditEntry.riskLevel || "review");
  return {
    schemaVersion: "nexus-safe-task-history.v1",
    taskHistoryId: `nexus-task-history-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    sourceAuditId: auditEntry.auditId || "",
    eventType: type,
    taskLabel: taskLabel || "Nexus local task",
    riskLevel: risk || "review",
    status,
    safetyScope: "session-only review history",
    storageMode: "volatile-ui-only",
    externalTransmissionAllowed: false,
    backendWriteAllowed: false,
    executionAuthority: false,
    providerHandoffAuthorized: false,
    createdAt: auditEntry.createdAt || new Date().toISOString()
  };
}

function renderNexusSafeTaskHistory(history = nexusSafeTaskHistory) {
  if (!Array.isArray(history) || !history.length) return "";
  const items = history.slice(0, 6).map(entry => `
    <li data-nexus-safe-task-history-entry="${htmlSafe(entry.eventType)}" data-execution-authority="false" data-storage-mode="volatile-ui-only">
      <strong>${htmlSafe(entry.taskLabel || entry.eventType.replace(/_/g, " "))}</strong>
      <span>${htmlSafe(entry.status || "Recorded locally.")}</span>
      <small>Risk: ${htmlSafe(entry.riskLevel || "review")}.</small>
      <small>${htmlSafe(entry.safetyScope)} - no backend write, provider handoff, permission request, or external action.</small>
    </li>
  `).join("");
  return `
    <div class="nexus-safe-task-history" data-nexus-safe-task-history="true" data-storage-mode="volatile-ui-only" data-execution-authority="false" data-external-transmission="false" aria-label="Nexus safe task history">
      <span class="nexus-safe-task-history-label">Safe task history</span>
      <ul>${items}</ul>
    </div>
  `;
}

function buildNexusSafetyReviewDashboardState(context = {}) {
  const queue = Array.isArray(context.queue) ? context.queue : nexusControlledActionQueue;
  const history = Array.isArray(context.history) ? context.history : nexusSafeTaskHistory;
  const audit = Array.isArray(context.audit) ? context.audit : nexusSessionActionAuditLog;
  const blockedCount = queue.filter(action => action.queueStatus === "blocked" || action.actionType === "blocked_high_risk_action" || action.riskLevel === "high").length;
  const reviewCount = queue.filter(action => action.queueStatus === "queued_for_review").length;
  const localOnlyCount = history.filter(entry => entry.storageMode === "volatile-ui-only").length;
  const auditCount = audit.length;
  const providerHandoffDetected = queue.some(action => Boolean(action.providerHandoffAuthorized) || Boolean(action.externalExecutionAllowed));
  return {
    schemaVersion: "nexus-safety-review-dashboard.v1",
    source: "nexus-safety-review-dashboard.v1",
    blockedCount,
    reviewCount,
    localOnlyCount,
    auditCount,
    executionAuthority: false,
    externalExecutionAllowed: false,
    providerHandoffAuthorized: false,
    permissionRequestAuthorized: false,
    backendWriteAllowed: false,
    providerHandoffDetected,
    status: providerHandoffDetected ? "review required" : "safe review mode",
    safetySummary: providerHandoffDetected
      ? "Review required: a queue item claimed provider or external authority and must remain blocked."
      : "Safe review mode: Nexus is only preparing local review steps. No external action is authorized."
  };
}

function renderNexusSafetyReviewDashboard(state = buildNexusSafetyReviewDashboardState()) {
  if (!state || state.schemaVersion !== "nexus-safety-review-dashboard.v1") return "";
  return `
    <div class="nexus-safety-review-dashboard" data-nexus-safety-review-dashboard="true" data-execution-authority="false" data-provider-handoff="false" data-permission-request="false" data-backend-write="false" aria-label="Nexus safety review dashboard">
      <span class="nexus-safety-review-dashboard-label">Safety review</span>
      <strong>${htmlSafe(state.status)}</strong>
      <span>${htmlSafe(state.safetySummary)}</span>
      <div class="nexus-safety-review-dashboard-grid" aria-label="Safety review counts">
        <span><strong>${htmlSafe(state.reviewCount)}</strong> review step(s)</span>
        <span><strong>${htmlSafe(state.blockedCount)}</strong> blocked step(s)</span>
        <span><strong>${htmlSafe(state.auditCount)}</strong> audit event(s)</span>
        <span><strong>${htmlSafe(state.localOnlyCount)}</strong> local history item(s)</span>
      </div>
      <small>No provider handoff, call, message, payment, location, camera, medical, pharmacy, emergency, backend write, or external action is authorized from this dashboard.</small>
    </div>
  `;
}

function renderNexusSessionActionAuditLog(log = nexusSessionActionAuditLog) {
  if (!Array.isArray(log) || !log.length) return "";
  const items = log.slice(0, 5).map(entry => `
    <li data-nexus-session-action-audit-entry="${htmlSafe(entry.eventType)}">
      <strong>${htmlSafe(entry.eventType.replace(/_/g, " "))}</strong>
      <span>${htmlSafe(entry.resultStatus || entry.safetyReason || entry.actionType || "Recorded locally.")}</span>
      <small>${htmlSafe(entry.storageMode)} - no backend write or external transmission.</small>
    </li>
  `).join("");
  return `
    <div class="nexus-session-action-audit-log" data-nexus-session-action-audit-log="true" data-storage-mode="volatile-ui-only" data-external-transmission="false" aria-label="Nexus session action audit log">
      <span class="nexus-session-action-audit-label">Session audit</span>
      <ul>${items}</ul>
    </div>
  `;
}

function classifyNexusSimulatedProviderAction(gate = {}) {
  const text = `${gate.actionType || ""} ${gate.description || ""} ${gate.providerStatus || ""} ${gate.safetyReason || ""}`.toLowerCase();
  if (/\b(call|phone)\b/.test(text)) return "call request prepared";
  if (/\b(route|map|navigation|handoff)\b/.test(text)) return "route handoff prepared";
  if (/\bmarket|agritrade|buyer|seller|inquiry|listing\b/.test(text)) return "marketplace inquiry prepared";
  if (/\bphysician|care[- ]?team|chw|report|rpm|rtm|telehealth|health\b/.test(text)) return "physician report prepared";
  if (/\bunavailable|not connected|blocked\b/.test(text)) return "provider unavailable";
  return "message prepared / simulated send";
}

function isNexusSimulationCommand(command = "") {
  return /\b(simulated|simulation|dry[- ]?run)\b/i.test(String(command || ""));
}

function handleNexusSimulationCaptionCommand(command = "") {
  if (!isNexusSimulationCommand(command)) return false;
  clearControlledActionPreview("simulation-caption-command");
  paintLocalLevelOneSuggestionForSimpleUserIntent({ type: "direct" }, command);
  updateUserCaptionPanel("Simulation review prepared. Confirming will only create a local simulated result. No provider will be contacted.", { expanded: true });
  setVoiceResponse("Simulation review prepared. Confirming will only create a local simulated result. No provider will be contacted.", false, { allowVoiceFirst: false });
  return true;
}

function isNexusInternalNavigationCommand(command = "") {
  const text = String(command || "").toLowerCase();
  return /\b(internal|local|in-app)\b[\s\S]*\b(map|route|navigation|section)\b/.test(text)
    || /\b(plan route|route review|map review|open map review)\b/.test(text);
}

function handleNexusInternalNavigationCaptionCommand(command = "") {
  if (!isNexusInternalNavigationCommand(command)) return false;
  clearControlledActionPreview("internal-navigation-caption-command");
  const plan = buildNexusAutonomousTaskPlan(command, { category: "route-planning" });
  startNexusAutonomousWorkflowFromTaskPlan(plan, { command });
  updateUserCaptionPanel("Internal navigation review prepared. Confirming will only move inside Nexus. No route is launched and no location permission is requested.", { expanded: true });
  setVoiceResponse("Internal navigation review prepared. Confirming will only move inside Nexus. No route is launched and no location permission is requested.", false, { allowVoiceFirst: false });
  return true;
}

function isNexusMapNavigationHandoffCommand(command = "") {
  const text = String(command || "").toLowerCase();
  const prepareIntent = /\b(prepare|plan|review|create|build|outline)\b/.test(text);
  const routeIntent = /\b(route|map|navigation|directions|transport|destination|origin|handoff)\b/.test(text);
  const unsafeExecutionIntent = /\b(navigate now|start navigation|launch route|open external|use my location|share my location|gps|turn on location)\b/.test(text);
  return prepareIntent && routeIntent && !unsafeExecutionIntent;
}

function handleNexusMapNavigationHandoffCaptionCommand(command = "") {
  if (!isNexusMapNavigationHandoffCommand(command)) return false;
  clearControlledActionPreview("map-navigation-handoff-caption-command");
  const plan = buildNexusAutonomousTaskPlan(command, { category: "map-navigation-handoff" });
  startNexusAutonomousWorkflowFromTaskPlan(plan, { command });
  updateUserCaptionPanel("Route handoff review is ready. Confirming will only prepare a local map handoff card and may open the internal map section. Nexus will not request location, launch directions, or contact a provider.", { expanded: true });
  setVoiceResponse("Route handoff review is ready. Confirming will only prepare a local map handoff card and may open the internal map section. Nexus will not request location, launch directions, or contact a provider.", false, { allowVoiceFirst: false });
  return true;
}

function isNexusMarketplaceInquiryPreparationCommand(command = "") {
  const text = String(command || "").toLowerCase();
  const marketplaceIntent = /\b(marketplace|agritrade|buyer|seller|listing|inquiry|produce|crop sale|market)\b/.test(text);
  const prepareIntent = /\b(prepare|plan|review|create|build|outline|questions|checklist)\b/.test(text);
  const unsafeExecutionIntent = /\b(contact now|message seller|message buyer|send|submit|buy now|sell now|purchase|checkout|order|pay|payment|refund|ship|deliver|dispatch|call|dial|location|camera|emergency)\b/.test(text);
  return marketplaceIntent && prepareIntent && !unsafeExecutionIntent;
}

function handleNexusMarketplaceInquiryPreparationCaptionCommand(command = "") {
  if (!isNexusMarketplaceInquiryPreparationCommand(command)) return false;
  clearControlledActionPreview("marketplace-inquiry-preparation-caption-command");
  const plan = buildNexusAutonomousTaskPlan(command, { category: "marketplace-inquiry-preparation" });
  startNexusAutonomousWorkflowFromTaskPlan(plan, { command });
  updateUserCaptionPanel("Marketplace inquiry preparation is ready. Confirming will only create a local AgriTrade review card. Nexus will not contact buyers or sellers, create an order, buy, sell, process payment, open an external marketplace, or write backend data.", { expanded: true });
  setVoiceResponse("Marketplace inquiry preparation is ready. Confirming will only create a local AgriTrade review card. Nexus will not contact buyers or sellers, create an order, buy, sell, process payment, open an external marketplace, or write backend data.", false, { allowVoiceFirst: false });
  return true;
}

function isNexusChronicCarePhysicianReportCommand(command = "") {
  const text = String(command || "").toLowerCase();
  const reportIntent = /\b(prepare|build|create|summarize|copy|show|review)\b/.test(text)
    && /\b(physician report|doctor report|provider report|care team report|clinical summary|clinical report|nurse|community health worker|chw|doctor|care team)\b/.test(text);
  const chronicIntent = /\b(diabetes|blood sugar|glucose|a1c|blood pressure|hypertension|bp|obesity|weight|wellness|rpm|rtm|telehealth|chronic|symptom|medication|medicine)\b/.test(text)
    && /\b(report|summary|summarize|doctor|physician|provider|nurse|care team|community health worker|chw|review)\b/.test(text);
  const dataQuestionIntent = /\b(what data supports this|what is missing|what data is missing|data is missing|missing data|what should the doctor review)\b/.test(text);
  const unsafeExecutionIntent = /\b(send|submit|transmit|upload|share with provider|contact provider|message|call|dial|prescribe|diagnose|adjust medication|change medication|change insulin|dispatch|emergency dispatch|connect device|sync device|store record)\b/.test(text);
  return (reportIntent || chronicIntent || dataQuestionIntent) && !unsafeExecutionIntent;
}

function handleNexusChronicCarePhysicianReportCaptionCommand(command = "") {
  if (!isNexusChronicCarePhysicianReportCommand(command)) return false;
  clearControlledActionPreview("chronic-care-physician-report-caption-command");
  const plan = buildNexusAutonomousTaskPlan(command, { category: "chronic-care-reporting" });
  startNexusAutonomousWorkflowFromTaskPlan(plan, { command });
  updateUserCaptionPanel("Chronic-care report preparation is ready. Confirming will only create a local physician/care-team review card. Nexus will not diagnose, prescribe, adjust medication, dispatch emergency services, contact a provider, connect a device, transmit data, or store sensitive health data persistently.", { expanded: true });
  setVoiceResponse("Chronic-care report preparation is ready. Confirming will only create a local physician or care-team review card. Nexus will not diagnose, prescribe, adjust medication, dispatch emergency services, contact a provider, connect a device, transmit data, or store sensitive health data persistently.", false, { allowVoiceFirst: false });
  return true;
}

function isNexusCareTeamReportCopyViewCommand(command = "") {
  const text = String(command || "").toLowerCase();
  const copyIntent = /\b(copy|copy-ready|prepare copy|prepare report copy|create|show|view|draft)\b/.test(text);
  const audienceIntent = /\b(doctor|physician|provider|nurse|coach|care team|community health worker|chw|handoff note|report copy|care team summary)\b/.test(text);
  const unsafeExecutionIntent = /\b(send|submit|share|transmit|upload|message|email|whatsapp|telegram|sms|call|dial|contact provider|contact doctor|contact nurse|contact chw|prescribe|diagnose|adjust medication|change medication|dispatch|emergency|store record|save record)\b/.test(text);
  return copyIntent && audienceIntent && !unsafeExecutionIntent;
}

function handleNexusCareTeamReportCopyViewCaptionCommand(command = "") {
  if (!isNexusCareTeamReportCopyViewCommand(command)) return false;
  clearControlledActionPreview("care-team-report-copy-view-caption-command");
  const plan = buildNexusAutonomousTaskPlan(command, { category: "care-team-report-copy-view" });
  startNexusAutonomousWorkflowFromTaskPlan(plan, { command });
  updateUserCaptionPanel("Care-team copy view is ready. Confirming will only create local copy-ready report text for human review. Nexus will not send, share, contact a provider, diagnose, change medication, store sensitive health data, or write backend data.", { expanded: true });
  setVoiceResponse("Care-team copy view is ready. Confirming will only create local copy-ready report text for human review. Nexus will not send, share, contact a provider, diagnose, change medication, store sensitive health data, or write backend data.", false, { allowVoiceFirst: false });
  return true;
}

function shouldOpenNexusMentalHealthMission(packet = {}) {
  const state = packet.classification?.state || "";
  const action = packet.classification?.action || "";
  return Boolean(packet.classification?.crisisOverride
    || packet.classification?.professionalReviewRequired
    || ["provider_search", "optional_screening", "care_preparation", "privacy_control"].includes(action)
    || ["location_required", "consent_blocked", "professional_review_required", "elevated_concern"].includes(state));
}

function renderNexusMentalHealthSupportCard(packet = {}) {
  const classification = packet.classification || {};
  const safety = packet.safety || {};
  const screening = packet.screeningGovernance || {};
  const escalation = packet.jurisdictionEscalation || {};
  const safetyPlan = packet.safetyPlan || {};
  return {
    type: "mental_health_behavioral_wellness",
    title: "Mental Health & Behavioral Wellness",
    status: classification.riskTier || "support",
    localOnly: true,
    confirmationRequired: Boolean(classification.professionalReviewRequired || classification.crisisOverride),
    modeSummary: {
      id: packet.capabilityId || "mental_health_behavioral_wellness",
      label: "Support packet",
      description: packet.userVisibleStatus || "Nexus prepared a mental-health support packet."
    },
    bullets: [
      `State: ${classification.state || "support"}`,
      `Action: ${classification.action || "supportive_dialogue"}`,
      `Professional review required: ${classification.professionalReviewRequired ? "yes" : "no"}`,
      `Screening governance: ${screening.instrumentId || "not requested"}`,
      `Jurisdiction escalation: ${escalation.jurisdictionId || "not active"}`,
      `Safety plan steps: ${Array.isArray(safetyPlan.steps) ? safetyPlan.steps.length : 0}`,
      `No diagnosis: ${safety.noDiagnosis ? "yes" : "required"}`,
      `No provider contacted: ${safety.noProviderContacted ? "yes" : "required"}`,
      `Memory mode: ${packet.privacy?.defaultMemoryMode || "session_only"}`
    ],
    receiptId: packet.receipt?.receiptId || "",
    packet
  };
}

function handleNexusMentalHealthBehavioralWellnessCommand(command = "", options = {}) {
  const runtime = window.NexusMentalHealthBehavioralWellness;
  const text = String(command || "").trim();
  if (!runtime || !text || !runtime.shouldHandle?.(text)) return false;
  const packet = runtime.buildSupportPacket(text, {
    language: languageCode(),
    source: options.source || "standard_user",
    locationProvided: /\b(in|near|around)\s+[a-z][a-z\s,.-]{2,}\b/i.test(text),
    screeningConsent: /\b(i consent|yes.*screen|start screening)\b/i.test(text)
  });
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  const openMission = shouldOpenNexusMentalHealthMission(packet);
  if (openMission) {
    nexusTrueExperienceSessionStarted = true;
    nexusActiveWorkflowState = {
      id: "mental-health-behavioral-wellness",
      command: text,
      source: options.source || "mental-health-runtime",
      workflow: "mental_health_behavioral_wellness",
      action: packet.classification?.action || "support",
      openedAt: Date.now(),
      agenticMission: {
        title: "Mental Health & Behavioral Wellness",
        status: packet.classification?.riskTier || "support",
        safetyState: packet.classification?.state || "emotional_support"
      }
    };
    startNexusOsMission(text, {
      source: "mental-health-behavioral-wellness",
      capabilityId: packet.capabilityId,
      safetyClassification: packet.classification?.riskTier || "support"
    });
  }
  const response = packet.userVisibleStatus || "Nexus prepared mental-health support locally.";
  recordNexusOsConversationTurn("assistant", response, {
    source: "nexus-mental-health-behavioral-wellness",
    state: packet.classification?.state,
    noDiagnosis: true,
    noProviderContacted: true
  });
  nexusAgenticBrainLastResult = {
    ok: true,
    command: text,
    message: response,
    source: "nexus-mental-health-behavioral-wellness",
    capabilityId: packet.capabilityId,
    preparedCards: [renderNexusMentalHealthSupportCard(packet)],
    result: packet,
    localOnly: true,
    noExecutionAuthorized: true,
    noProviderContacted: true,
    noEmergencyDispatch: true,
    noDiagnosis: true,
    noPrescribing: true
  };
  setNexusCoreState(packet.classification?.crisisOverride ? "blocked" : "responding", {
    source: "mental-health-behavioral-wellness",
    statusText: packet.classification?.crisisOverride ? "Immediate support boundary active." : "Support packet prepared."
  });
  setVoiceResponse(response, true, {
    allowHandoff: false,
    command: text,
    source: "nexus-mental-health-behavioral-wellness",
    mentalHealthSupportPacket: packet
  });
  renderUserWorkspace?.();
  return true;
}

function renderNexusEnterpriseHealthEvidenceTrustCard(packet = {}) {
  const safety = packet.safety || {};
  const sources = Array.isArray(packet.sourceReceipts) ? packet.sourceReceipts : [];
  const registrySources = Array.isArray(packet.recognizedSources) ? packet.recognizedSources : [];
  const domainMaps = packet.domainEvidenceMaps && typeof packet.domainEvidenceMaps === "object" ? packet.domainEvidenceMaps : {};
  const models = Array.isArray(packet.predictiveModels) ? packet.predictiveModels : Array.isArray(packet.models) ? packet.models : [];
  const registryModels = packet.predictiveModelRegistry && typeof packet.predictiveModelRegistry === "object" ? packet.predictiveModelRegistry : {};
  const calculators = Array.isArray(packet.calculators) ? packet.calculators : packet.clinicalCalculatorRegistry && typeof packet.clinicalCalculatorRegistry === "object" ? Object.values(packet.clinicalCalculatorRegistry) : [];
  const providerTrust = packet.verifiedProviderTrustRegistry && typeof packet.verifiedProviderTrustRegistry === "object" ? packet.verifiedProviderTrustRegistry : {};
  const fhirResources = Array.isArray(packet.fhirTerminologyContracts?.fhirResources) ? packet.fhirTerminologyContracts.fhirResources : [];
  const readiness = packet.readinessClassifications && typeof packet.readinessClassifications === "object" ? packet.readinessClassifications : {};
  const reviewRoles = packet.professionalWorkspaceRoles && typeof packet.professionalWorkspaceRoles === "object" ? packet.professionalWorkspaceRoles : {};
  const reviewQueues = packet.reviewQueueTypes && typeof packet.reviewQueueTypes === "object" ? packet.reviewQueueTypes : {};
  const isMedicationPharmacyPacket = packet.packetType === "enterprise_health_medication_pharmacy_evidence_governance_packet";
  const isLaboratoryDiagnosticPacket = packet.packetType === "enterprise_health_laboratory_diagnostic_evidence_governance_packet";
  const isHealthDataRightsPacket = packet.packetType === "enterprise_health_data_rights_governance_packet";
  const isFhirTerminologyPacket = packet.packetType === "enterprise_health_fhir_terminology_governance_packet";
  const isYouthVulnerablePacket = packet.packetType === "enterprise_health_youth_vulnerable_safeguard_packet";
  const isAccessibilityLocalizationPacket = packet.packetType === "enterprise_health_accessibility_localization_governance_packet";
  const isHealthFollowUpPacket = packet.packetType === "enterprise_health_communications_follow_up_governance_packet";
  const isHealthMonitoringPacket = packet.packetType === "enterprise_health_model_source_monitoring_governance_packet";
  const isHealthRegulatoryPacket = packet.packetType === "enterprise_health_regulatory_assessment_packet";
  const isHealthAdversarialPacket = packet.packetType === "enterprise_health_security_privacy_adversarial_validation_packet";
  const isHealthCapabilityStatusPacket = packet.packetType === "enterprise_health_genesis_capability_status_packet";
  const inspectorFields = packet.inspectorView?.fields || {};
  const isRegistryPacket = packet.registryPacketType === "enterprise_health_governance_registry_packet";
  const isHumanReviewPacket = packet.packetType === "enterprise_health_human_review_control_packet";
  return {
    type: packet.registryPacketType || packet.packetType || "enterprise_health_evidence_trust_packet",
    title: isHealthCapabilityStatusPacket ? "Genesis Health Capability Status" : isHealthAdversarialPacket ? "Health Security & Adversarial Validation" : isHealthRegulatoryPacket ? "Health Regulatory Assessment" : isHealthMonitoringPacket ? "Health Model & Source Monitoring Governance" : isHealthFollowUpPacket ? "Health Communications & Follow-Up Governance" : isAccessibilityLocalizationPacket ? "Health Accessibility & Localization Governance" : isYouthVulnerablePacket ? "Youth & Vulnerable Population Safeguards" : isFhirTerminologyPacket ? "FHIR & Clinical Terminology Governance" : isHealthDataRightsPacket ? "Health Data Rights & Consent Governance" : isLaboratoryDiagnosticPacket ? "Laboratory & Diagnostic Evidence Governance" : isMedicationPharmacyPacket ? "Medication & Pharmacy Evidence Governance" : isHumanReviewPacket ? "Enterprise Health Human Review Controls" : isRegistryPacket ? "Enterprise Health Governance Registries" : "Enterprise Health Evidence Trust",
    status: packet.domainId || "health-evidence",
    localOnly: true,
    confirmationRequired: false,
    modeSummary: {
      id: "enterprise-health-evidence-trust",
      label: isHealthCapabilityStatusPacket ? "Capability classifications and production limits" : isHealthAdversarialPacket ? "Security, privacy, and red-team checks" : isHealthRegulatoryPacket ? "Capability risk and authorization gates" : isHealthMonitoringPacket ? "Monitoring and drift review gates" : isHealthFollowUpPacket ? "Follow-up and communication gates" : isAccessibilityLocalizationPacket ? "Accessible health support governance" : isYouthVulnerablePacket ? "Safeguard review packet" : isFhirTerminologyPacket ? "FHIR terminology governance" : isHealthDataRightsPacket ? "Health data rights governance" : isLaboratoryDiagnosticPacket ? "Laboratory/diagnostic governance" : isMedicationPharmacyPacket ? "Medication/pharmacy governance" : isHumanReviewPacket ? "Human review controls" : isRegistryPacket ? "Professional governance registry" : "Professional evidence inspector",
      description: packet.userVisibleStatus || (isRegistryPacket ? "Nexus prepared the enterprise health governance registries." : "Nexus prepared an enterprise health evidence governance packet.")
    },
    bullets: isHealthCapabilityStatusPacket ? [
      `Capabilities classified: ${packet.capabilityCount || 0}`,
      `Implemented locally: ${packet.classificationCounts?.implemented_locally || 0}`,
      `Credential blocked: ${packet.classificationCounts?.credential_blocked || 0}`,
      `Awaiting clinical approval: ${packet.classificationCounts?.awaiting_clinical_approval || 0}`,
      `Not production authorized: ${packet.classificationCounts?.not_production_authorized || 0}`,
      `All capabilities classified: ${packet.allCapabilitiesClassified ? "yes" : "no"}`,
      `Can report capability status: ${packet.canReportCapabilityStatus ? "yes" : "no"}`,
      `Can activate regulated execution: ${packet.canActivateRegulatedExecution ? "yes" : "no"}`,
      `Can claim production ready: ${packet.canClaimProductionReady ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isHealthAdversarialPacket ? [
      `Validation type: ${String(packet.validationType || "health validation").replace(/_/g, " ")}`,
      `Validation surfaces: ${Array.isArray(packet.validationSurfaces) ? packet.validationSurfaces.length : 0}`,
      `Adversarial checks: ${Array.isArray(packet.adversarialChecks) ? packet.adversarialChecks.length : 0}`,
      `Flagged findings: ${Array.isArray(packet.flaggedFindings) ? packet.flaggedFindings.length : 0}`,
      `Outcome: ${String(packet.validationOutcome || "local checks prepared").replace(/_/g, " ")}`,
      `Can approve release: ${packet.canApproveRelease ? "yes" : "no"}`,
      `Can bypass security review: ${packet.canBypassSecurityReview ? "yes" : "no"}`,
      `Can expose secrets: ${packet.canExposeSecrets ? "yes" : "no"}`,
      `Can claim clinical safety passed: ${packet.canClaimClinicalSafetyPassed ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isHealthRegulatoryPacket ? [
      `Capability type: ${String(packet.capabilityType || "health capability").replace(/_/g, " ")}`,
      `Risk tier: ${String(packet.riskTier || "review required").replace(/_/g, " ")}`,
      `Current classification: ${String(packet.currentClassification || "not production authorized").replace(/_/g, " ")}`,
      `Regulatory frames: ${Array.isArray(packet.regulatoryFrames) ? packet.regulatoryFrames.length : 0}`,
      `Can classify capability: ${packet.canClassifyCapability ? "yes" : "no"}`,
      `Can authorize production: ${packet.canAuthorizeProduction ? "yes" : "no"}`,
      `Can bypass legal review: ${packet.canBypassLegalReview ? "yes" : "no"}`,
      `Can activate live connector: ${packet.canActivateLiveConnector ? "yes" : "no"}`,
      `Production authorized: ${packet.productionAuthorized ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isHealthMonitoringPacket ? [
      `Monitoring type: ${String(packet.monitoringType || "health governance monitoring").replace(/_/g, " ")}`,
      `Monitored asset types: ${Array.isArray(packet.monitoredAssetTypes) ? packet.monitoredAssetTypes.length : 0}`,
      `Live monitoring enabled: ${packet.liveMonitoringEnabled ? "yes" : "no"}`,
      `Can create review ticket: ${packet.canCreateReviewTicket ? "yes" : "no"}`,
      `Can claim source current: ${packet.canClaimSourceCurrent ? "yes" : "no"}`,
      `Can update clinical guidance: ${packet.canUpdateClinicalGuidance ? "yes" : "no"}`,
      `Can recalibrate model: ${packet.canRecalibrateModel ? "yes" : "no"}`,
      `Can notify provider: ${packet.canNotifyProvider ? "yes" : "no"}`,
      `Can escalate emergency: ${packet.canEscalateEmergency ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isHealthFollowUpPacket ? [
      `Follow-up type: ${String(packet.followUpType || "health follow-up").replace(/_/g, " ")}`,
      `Governed channels: ${Array.isArray(packet.governedChannels) ? packet.governedChannels.length : 0}`,
      `Required send gates: ${Array.isArray(packet.requiredBeforeSend) ? packet.requiredBeforeSend.length : 0}`,
      `Can prepare draft: ${packet.canPrepareMessageDraft ? "yes" : "no"}`,
      `Can prepare call script: ${packet.canPrepareCallScript ? "yes" : "no"}`,
      `Can send message: ${packet.canSendMessage ? "yes" : "no"}`,
      `Can start call: ${packet.canStartCall ? "yes" : "no"}`,
      `Can contact provider: ${packet.canContactProvider ? "yes" : "no"}`,
      `Can route emergency: ${packet.canRouteEmergency ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isAccessibilityLocalizationPacket ? [
      `Need: ${String(packet.need || "accessible health support").replace(/_/g, " ")}`,
      `Supported languages: ${Array.isArray(packet.supportedLanguages) ? packet.supportedLanguages.length : 0}`,
      `Supported needs: ${Array.isArray(packet.supportedNeeds) ? packet.supportedNeeds.length : 0}`,
      `Can prepare plain language: ${packet.canPreparePlainLanguage ? "yes" : "no"}`,
      `Can prepare captions: ${packet.canPrepareCaptionFallback ? "yes" : "no"}`,
      `Can prepare offline packet: ${packet.canPrepareOfflinePacket ? "yes" : "no"}`,
      `Can claim certified interpretation: ${packet.canClaimCertifiedInterpretation ? "yes" : "no"}`,
      `Can claim live freshness offline: ${packet.canClaimLiveFreshnessOffline ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isYouthVulnerablePacket ? [
      `Population: ${String(packet.population || "vulnerable population").replace(/_/g, " ")}`,
      `Crisis related: ${packet.crisisRelated ? "yes" : "no"}`,
      `Required safeguard gates: ${Array.isArray(packet.requiredBeforeAction) ? packet.requiredBeforeAction.length : 0}`,
      `Can share privately: ${packet.canSharePrivately ? "yes" : "no"}`,
      `Can assume family consent: ${packet.canAssumeFamilyConsent ? "yes" : "no"}`,
      `Can route child labor: ${packet.canRouteChildLabor ? "yes" : "no"}`,
      `Can contact provider or guardian: ${packet.canContactProviderOrGuardian ? "yes" : "no"}`,
      `Can dispatch emergency help: ${packet.canDispatchEmergencyHelp ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isFhirTerminologyPacket ? [
      `Requested resource: ${packet.requestedResource || "FHIR resource"}`,
      `Terminology system: ${packet.requestedTerminologySystem || "governed terminology"}`,
      `FHIR resources governed: ${Array.isArray(packet.fhirTerminologyContracts?.fhirResources) ? packet.fhirTerminologyContracts.fhirResources.length : 0}`,
      `Required connector gates: ${Array.isArray(packet.requiredBeforeConnectorUse) ? packet.requiredBeforeConnectorUse.length : 0}`,
      `Can access live records: ${packet.canAccessLiveRecords ? "yes" : "no"}`,
      `Can write clinical records: ${packet.canWriteClinicalRecords ? "yes" : "no"}`,
      `Can export FHIR bundle: ${packet.canExportFhirBundle ? "yes" : "no"}`,
      `Can assign diagnosis code: ${packet.canAssignDiagnosisCode ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isHealthDataRightsPacket ? [
      `Action type: ${packet.actionType || "health data rights review"}`,
      `Governed rights: ${Array.isArray(packet.healthDataRightsGovernance?.governedRights) ? packet.healthDataRightsGovernance.governedRights.length : 0}`,
      `Required approvals: ${Array.isArray(packet.requiredBeforeApproval) ? packet.requiredBeforeApproval.length : 0}`,
      `Can share health data: ${packet.canShareHealthData ? "yes" : "no"}`,
      `Can access FHIR records: ${packet.canAccessFhirRecords ? "yes" : "no"}`,
      `Can store sensitive memory: ${packet.canStoreSensitiveMemory ? "yes" : "no"}`,
      `Can bypass revocation: ${packet.canBypassRevocation ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isLaboratoryDiagnosticPacket ? [
      `Concern type: ${packet.concernType || "diagnostic evidence preparation"}`,
      `Governed workflows: ${Array.isArray(packet.governance?.governedWorkflows) ? packet.governance.governedWorkflows.length : 0}`,
      `Required sources: ${sources.length}`,
      `Review queue: ${packet.requiredReviewQueue?.queueId || "laboratory_diagnostic_review"}`,
      `Can diagnose: ${packet.canDiagnose ? "yes" : "no"}`,
      `Can final-interpret lab: ${packet.canFinalInterpretLab ? "yes" : "no"}`,
      `Can write medical record: ${packet.canWriteMedicalRecord ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isMedicationPharmacyPacket ? [
      `Concern type: ${packet.concernType || "medication education preparation"}`,
      `Governed workflows: ${Array.isArray(packet.governance?.governedWorkflows) ? packet.governance.governedWorkflows.length : 0}`,
      `Required sources: ${sources.length}`,
      `Review queue: ${packet.requiredReviewQueue?.queueId || "medication_pharmacy_review"}`,
      `Can approve refill: ${packet.canApproveRefill ? "yes" : "no"}`,
      `Can recommend dose: ${packet.canRecommendDose ? "yes" : "no"}`,
      `Can contact pharmacy: ${packet.canContactPharmacy ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isHumanReviewPacket ? [
      `Selected queue: ${packet.selectedQueue?.queueId || "clinical_evidence_review"}`,
      `Professional roles governed: ${Object.keys(reviewRoles).length}`,
      `Review queues governed: ${Object.keys(reviewQueues).length}`,
      `Decision states: ${Array.isArray(packet.reviewDecisionStates) ? packet.reviewDecisionStates.length : 0}`,
      `Can approve provider submission: ${packet.canApproveProviderSubmission ? "yes" : "no"}`,
      `Can bypass consent: ${packet.canBypassConsent ? "yes" : "no"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : isRegistryPacket ? [
      `Canonical sources governed: ${registrySources.length}`,
      `Health domain maps: ${Object.keys(domainMaps).length}`,
      `Predictive models governed: ${Object.keys(registryModels).length}`,
      `Clinical calculators governed: ${calculators.length}`,
      `Verified provider trust categories: ${Object.keys(providerTrust).length}`,
      `FHIR resources governed: ${fhirResources.length}`,
      `FHIR status: ${readiness.fhirTerminology || "connector disabled until consent/role/audit gates are configured"}`,
      `Execution enabled: ${packet.executionEnabled ? "yes" : "no"}`
    ] : [
      `Domain: ${String(packet.domainId || "health").replace(/_/g, " ")}`,
      `Sources mapped: ${sources.length}`,
      `Predictive models governed: ${models.length}`,
      `Clinical calculators governed: ${calculators.length || "registry available"}`,
      `Inspector role: ${packet.inspectorView?.role || "standard_user"}`,
      `Source version: ${inspectorFields.sourceVersion || inspectorFields.publicationYearOrVersion || "verification required"}`,
      `Professional review required: ${safety.professionalReviewRequired ? "yes" : "yes"}`,
      `No diagnosis: ${safety.noDiagnosis ? "yes" : "required"}`,
      `No fake citation: ${safety.noFakeCitation ? "yes" : "required"}`
    ],
    receiptId: packet.auditReceipt?.receiptId || "",
    packet
  };
}

function handleNexusEnterpriseHealthEvidenceTrustCommand(command = "", options = {}) {
  const runtime = window.NexusEnterpriseHealthEvidenceTrust;
  const text = String(command || "").trim();
  if (!runtime || !text || !runtime.shouldHandle?.(text)) return false;
  const medicationPharmacyIntent = /\b(medication governance|medication safety governance|pharmacy evidence|pharmacy governance|refill governance|prescription governance)\b/i.test(text);
  const laboratoryDiagnosticIntent = /\b(lab governance|laboratory governance|diagnostic evidence|diagnostic governance|imaging governance)\b/i.test(text);
  const healthDataRightsIntent = /\b(health data rights|memory consent|sharing consent|export health data|delete health data|revoke consent|correction request|consent and privacy)\b/i.test(text);
  const fhirTerminologyIntent = /\b(fhir terminology|clinical terminology|medical record governance|health record governance|ehr governance|chart governance|loinc|snomed|rxnorm|fhir record)\b/i.test(text);
  const youthVulnerableIntent = /\b(youth safeguard|vulnerable population|minor safeguard|child safety|child safeguard|elder safeguard|pregnancy safeguard|abuse concern|exploitation concern|caregiver safeguard)\b/i.test(text);
  const accessibilityLocalizationIntent = /\b(health accessibility|localization governance|translation governance|clinical translation|low literacy health|plain language health|offline health packet|low bandwidth health|voice fallback health|caption fallback health|cultural adaptation)\b/i.test(text);
  const healthFollowUpIntent = /\b(health follow-up|follow-up governance|message follow-up|call script governance|rpm follow-up|rtm follow-up|chronic follow-up|provider follow-up|pharmacy follow-up|prepare health message|prepare health reminder)\b/i.test(text);
  const healthMonitoringIntent = /\b(source monitoring|model monitoring|evidence monitoring|drift monitoring|stale source|calculator version|safety signal monitoring|health monitoring governance|guideline monitoring)\b/i.test(text);
  const healthRegulatoryIntent = /\b(regulatory assessment|production authorization|compliance classification|jurisdiction review|capability classification|regulatory review|production approval)\b/i.test(text);
  const healthAdversarialIntent = /\b(security validation|privacy validation|adversarial validation|red team health|health red team|accessibility validation|prompt injection|jailbreak|test unsafe health claim|secret exposure)\b/i.test(text);
  const healthCapabilityStatusIntent = /\b(health capability status|genesis health status|production limitations report|health production limits|enterprise health completion|health completion status|what is production authorized)\b/i.test(text);
  const humanReviewIntent = /\b(human review|review queue|governance review|professional review controls|professional workspace controls)\b/i.test(text);
  const registryIntent = /\b(source registry|governance registr(?:y|ies)|verified provider trust|provider trust registry|fhir terminology|medical record governance|consent and privacy|clinical calculator registry)\b/i.test(text);
  const predictiveIntent = /\b(predictive|prediction|risk model|risk score|calculator|validation population|model governance)\b/i.test(text);
  const professionalRole = /\b(professional version|clinician version|complete citation|evidence certainty|recommendation strength|conflicts? of interest|citation export)\b/i.test(text);
  const sourceVerificationIntent = /\b(show the source|who published|source current|when was this verified|source blocked|conflicting guidelines|conflicting sources)\b/i.test(text);
  const evidenceContext = {
    language: languageCode(),
    source: options.source || "standard_user",
    role: professionalRole ? "professional" : "standard_user",
    verification: sourceVerificationIntent ? { sourceInspectionRequested: true } : {}
  };
  const packet = healthRegulatoryIntent
    ? runtime.buildHealthRegulatoryAssessmentPacket(text, evidenceContext)
    : healthCapabilityStatusIntent
    ? runtime.buildHealthGenesisCapabilityStatusPacket(text, evidenceContext)
    : healthAdversarialIntent
    ? runtime.buildHealthSecurityPrivacyAdversarialPacket(text, evidenceContext)
    : healthMonitoringIntent
    ? runtime.buildHealthModelSourceMonitoringPacket(text, evidenceContext)
    : healthFollowUpIntent
    ? runtime.buildHealthCommunicationsFollowUpPacket(text, evidenceContext)
    : accessibilityLocalizationIntent
    ? runtime.buildAccessibilityLocalizationGovernancePacket(text, evidenceContext)
    : youthVulnerableIntent
    ? runtime.buildYouthVulnerableSafeguardPacket(text, evidenceContext)
    : fhirTerminologyIntent
    ? runtime.buildFhirTerminologyGovernancePacket(text, evidenceContext)
    : healthDataRightsIntent
    ? runtime.buildHealthDataRightsPacket(text, evidenceContext)
    : laboratoryDiagnosticIntent
    ? runtime.buildLaboratoryDiagnosticEvidencePacket(text, evidenceContext)
    : medicationPharmacyIntent
    ? runtime.buildMedicationPharmacyEvidencePacket(text, evidenceContext)
    : humanReviewIntent
    ? runtime.buildHumanReviewPacket(text, evidenceContext)
    : registryIntent
    ? runtime.registries()
    : predictiveIntent
    ? runtime.predictiveGovernance(text, evidenceContext)
    : runtime.inspect(text, evidenceContext);
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  const response = packet.userVisibleStatus || (registryIntent
    ? `Nexus prepared the enterprise health governance registries: ${Array.isArray(packet.recognizedSources) ? packet.recognizedSources.length : 0} canonical sources, ${packet.clinicalCalculatorRegistry ? Object.keys(packet.clinicalCalculatorRegistry).length : 0} clinical calculators, ${packet.verifiedProviderTrustRegistry ? Object.keys(packet.verifiedProviderTrustRegistry).length : 0} verified provider trust categories, and ${Array.isArray(packet.fhirTerminologyContracts?.fhirResources) ? packet.fhirTerminologyContracts.fhirResources.length : 0} FHIR resources. Execution remains disabled; Nexus does not diagnose, prescribe, access records, contact providers, or dispatch emergencies until the required connector, consent, professional review, and audit gates are satisfied.`
    : "Nexus prepared an enterprise health evidence trust packet.");
  recordNexusOsConversationTurn("assistant", response, {
    source: "nexus-enterprise-health-evidence-trust",
    domainId: packet.domainId,
    noDiagnosis: true,
    noFakeCitation: true
  });
  nexusAgenticBrainLastResult = {
    ok: true,
    command: text,
    message: response,
    source: "nexus-enterprise-health-evidence-trust",
    capabilityId: runtime.SERVICE_ID || "nexus_enterprise_health_evidence_trust",
    preparedCards: [renderNexusEnterpriseHealthEvidenceTrustCard(packet)],
    result: packet,
    localOnly: true,
    noExecutionAuthorized: true,
    noProviderContacted: true,
    noEmergencyDispatch: true,
    noDiagnosis: true,
    noPrescribing: true,
    noFakeCitation: true
  };
  setNexusCoreState("reasoning", {
    source: "enterprise-health-evidence-trust",
    statusText: "Professional evidence packet prepared."
  });
  setVoiceResponse(response, true, {
    allowHandoff: false,
    command: text,
    source: "nexus-enterprise-health-evidence-trust",
    healthEvidenceTrustPacket: packet
  });
  renderUserWorkspace?.();
  return true;
}

function renderNexusGenesisPredictiveWorkforceCard(packet = {}) {
  const isStatus = packet.packetType === "genesis_predictive_workforce_capability_status_packet";
  const isRegistry = packet.packetType === "genesis_predictive_workforce_registry_packet";
  const isVerification = packet.packetType === "genesis_workforce_source_verification_packet";
  const topJob = packet.topRecommendation || packet.selectedVerification || {};
  const fit = topJob.fit || {};
  const classifications = packet.capabilityClassifications || {};
  const counts = packet.classificationCounts || {};
  return {
    type: packet.packetType || "genesis_predictive_workforce_career_packet",
    title: isStatus ? "Genesis Workforce Capability Status" : isRegistry ? "Workforce Source & Employer Registries" : isVerification ? "Workforce Source Verification" : "Predictive Workforce Career Packet",
    status: packet.intent || packet.state || "workforce-career-intelligence",
    localOnly: true,
    confirmationRequired: false,
    modeSummary: {
      id: "predictive-workforce-career-intelligence",
      label: isStatus ? "Capability classifications and production limits" : isRegistry ? "Verified workforce registry foundation" : isVerification ? "Job source, listing, and employer trust verification" : "Career fit, skills gap, barriers, and next steps",
      description: packet.userVisibleStatus || "Nexus prepared a workforce intelligence packet."
    },
    bullets: isStatus ? [
      `Capabilities classified: ${Object.keys(classifications).length}`,
      `Implemented locally: ${counts.implemented_locally || 0}`,
      `Credential blocked: ${counts.credential_blocked || 0}`,
      `Awaiting fairness review: ${counts.awaiting_fairness_review || 0}`,
      `Awaiting legal review: ${counts.awaiting_legal_review || 0}`,
      `Production authorized: ${packet.productionAuthorized ? "yes" : "no"}`,
      `Can submit applications: ${packet.canSubmitApplication ? "yes" : "no"}`,
      `Can contact employers: ${packet.canContactEmployer ? "yes" : "no"}`,
      `Health data used for employment: ${packet.canUseHealthDataForEmployment ? "yes" : "no"}`
    ] : isRegistry ? [
      `Source authorities: ${Array.isArray(packet.sources) ? packet.sources.length : 0}`,
      `Employer trust records: ${Array.isArray(packet.employers) ? packet.employers.length : 0}`,
      `Predictive models governed: ${Array.isArray(packet.models) ? packet.models.length : 0}`,
      "Official sources outrank public job boards.",
      "Employer trust requires official-domain or partner verification.",
      `External execution enabled: ${packet.applicationSubmissionEnabled || packet.employerContactEnabled ? "yes" : "no"}`
    ] : isVerification ? [
      `Selected: ${topJob.jobTitle || topJob.jobId || "workforce source"}`,
      `Source: ${topJob.sourceName || topJob.sourceId || "source registry"}`,
      `Verification: ${topJob.verificationState || "verification_pending"}`,
      `Listing availability: ${topJob.listingAvailability || "not_verified_current"}`,
      `Employer: ${topJob.employerPublicName || "not selected"}`,
      `Open-job claim allowed: ${topJob.canClaimOpen ? "yes" : "no"}`,
      `Employer contacted: ${packet.employerContactEnabled ? "yes" : "no"}`,
      `Application submitted: ${packet.applicationSubmissionEnabled ? "yes" : "no"}`
    ] : [
      `Target: ${packet.profile?.targetRole || "career goal"}`,
      `Top match: ${topJob.title || "more information needed"}`,
      `Fit category: ${fit.category || "insufficient_information"}`,
      `Matched: ${(fit.matchedQualifications || []).join(", ") || "none recorded yet"}`,
      `Missing: ${(fit.missingRequirements || []).join(", ") || "no required gaps detected in local context"}`,
      `Barriers: ${(packet.profile?.barriers || []).join(", ") || "none stated"}`,
      `Receipt: ${packet.receipt?.receiptId || "created locally"}`,
      `Employer contacted: ${packet.employerContactEnabled ? "yes" : "no"}`,
      `Application submitted: ${packet.applicationSubmissionEnabled ? "yes" : "no"}`
    ],
    receiptId: packet.receipt?.receiptId || "",
    packet
  };
}

function handleNexusGenesisPredictiveWorkforceCommand(command = "", options = {}) {
  const runtime = window.NexusGenesisPredictiveWorkforce;
  const text = String(command || "").trim();
  if (!runtime || !text || !runtime.shouldHandle?.(text)) return false;
  const registryIntent = /\b(source registry|employer trust|model registry|verified workforce source|verified jobs registry|employer registry)\b/i.test(text);
  const capabilityStatusIntent = /\b(workforce capability status|workforce production limitations|employment capability status|career capability status|what is production authorized)\b/i.test(text);
  const sourceVerificationIntent = /\b(show the source|sources?|is this job still open|job still open|is this employer verified|employer verified|verified job|verified employer|listing current|scam risk)\b/i.test(text);
  const context = {
    language: languageCode(),
    source: options.source || "standard_user",
    consentState: "session_only_or_not_provided"
  };
  const packet = registryIntent
    ? runtime.registries()
    : capabilityStatusIntent
    ? runtime.buildWorkforceCapabilityStatusPacket(text, context)
    : sourceVerificationIntent && typeof runtime.buildWorkforceSourceVerificationPacket === "function"
    ? runtime.buildWorkforceSourceVerificationPacket(text, context)
    : runtime.buildPredictiveWorkforcePacket(text, context);
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  const response = packet.userVisibleStatus || "Nexus prepared a predictive workforce career packet.";
  recordNexusOsConversationTurn("assistant", response, {
    source: "nexus-genesis-predictive-workforce",
    capabilityId: runtime.SERVICE_ID || "predictive_workforce_career_intelligence",
    noEmployerContacted: true,
    noApplicationSubmitted: true,
    noHealthDataShared: true
  });
  nexusAgenticBrainLastResult = {
    ok: true,
    command: text,
    message: response,
    source: "nexus-genesis-predictive-workforce",
    capabilityId: runtime.SERVICE_ID || "predictive_workforce_career_intelligence",
    preparedCards: [renderNexusGenesisPredictiveWorkforceCard(packet)],
    result: packet,
    localOnly: true,
    noExecutionAuthorized: true,
    noEmployerContacted: true,
    noApplicationSubmitted: true,
    noInterviewScheduled: true,
    noHealthDataShared: true,
    noFakeJobAvailabilityClaim: true
  };
  setNexusCoreState("reasoning", {
    source: "genesis-predictive-workforce",
    statusText: capabilityStatusIntent ? "Workforce capability status prepared." : "Career intelligence packet prepared."
  });
  setVoiceResponse(response, true, {
    allowHandoff: false,
    command: text,
    source: "nexus-genesis-predictive-workforce",
    workforcePacket: packet
  });
  renderUserWorkspace?.();
  return true;
}

function renderNexusGenesisProviderAbstractionCard(packet = {}) {
  const selected = packet.selectedProvider || {};
  const rejected = packet.rejectedProviders || [];
  const missingEnv = [...new Set(rejected.flatMap(item => item.missingEnv || []))];
  return {
    type: packet.packetType || "nexus_genesis_provider_abstraction_capability_status_packet",
    title: "Provider Capability Status",
    status: packet.state || "provider-abstraction-status",
    localOnly: selected.localFallbackSupport === true,
    confirmationRequired: packet.requiresConfirmation === true,
    modeSummary: {
      id: "provider-abstraction",
      label: selected.displayName ? `Selected path: ${selected.displayName}` : "Provider route status",
      description: packet.answer || "Nexus checked the provider abstraction layer."
    },
    bullets: [
      `Capability: ${packet.capabilityId || "general provider capability"}`,
      `Selected provider: ${selected.displayName || "none selected"}`,
      `State: ${packet.state || "unknown"}`,
      `AWS required: ${packet.awsRequired ? "yes" : "no"}`,
      `External execution enabled now: ${packet.externalExecutionEnabled ? "yes" : "no"}`,
      `Production authorized: ${packet.productionAuthorized ? "yes" : "no"}`,
      `Consent required: ${packet.requiresConsent ? "yes" : "depends on action"}`,
      `Confirmation required: ${packet.requiresConfirmation ? "yes" : "depends on action"}`,
      `Missing env names: ${missingEnv.length ? missingEnv.join(", ") : "none for selected local path"}`
    ],
    packet
  };
}

function handleNexusGenesisProviderAbstractionCommand(command = "", options = {}) {
  const runtime = window.NexusGenesisProviderAbstraction;
  const text = String(command || "").trim();
  if (!runtime || !text || !runtime.shouldHandle?.(text)) return false;
  const packet = runtime.capabilityStatus(text, {
    source: options.source || "standard_user",
    dataClass: "public",
    country: "global",
    jurisdiction: "global",
    consentState: "missing",
    confirmationState: "missing"
  });
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  const response = packet.answer || "Nexus checked provider routing and execution gates.";
  recordNexusOsConversationTurn("assistant", response, {
    source: "nexus-genesis-provider-abstraction",
    capabilityId: runtime.SERVICE_ID || "nexus_genesis_vendor_neutral_provider_abstraction",
    noExternalExecution: true,
    noSecretExposure: true
  });
  nexusAgenticBrainLastResult = {
    ok: true,
    command: text,
    message: response,
    source: "nexus-genesis-provider-abstraction",
    capabilityId: runtime.SERVICE_ID || "nexus_genesis_vendor_neutral_provider_abstraction",
    preparedCards: [renderNexusGenesisProviderAbstractionCard(packet)],
    result: packet,
    localOnly: true,
    noExecutionAuthorized: true,
    noExternalExecution: true,
    noSecretExposure: true,
    providerAbstractionPacket: packet
  };
  setNexusCoreState("reasoning", {
    source: "genesis-provider-abstraction",
    statusText: "Provider capability status prepared."
  });
  setVoiceResponse(response, true, {
    allowHandoff: false,
    command: text,
    source: "nexus-genesis-provider-abstraction",
    providerAbstractionPacket: packet
  });
  renderUserWorkspace?.();
  return true;
}

function renderNexusGenesisProviderOrchestrationCard(packet = {}) {
  const readiness = packet.readiness || {};
  const adapters = packet.adapters || [];
  return {
    type: packet.packetType || "nexus_genesis_provider_orchestration_capability_report",
    title: "Provider Orchestration Console",
    status: readiness.state || "provider-orchestration-status",
    localOnly: readiness.providerId === "local.nexus",
    confirmationRequired: readiness.policy?.requiresConfirmation === true,
    modeSummary: {
      id: "provider-orchestration",
      label: readiness.providerId ? `Provider state: ${readiness.providerId}` : "Provider orchestration status",
      description: packet.answer || "Nexus checked provider orchestration, queueing, fallback, and execution gates."
    },
    bullets: [
      `Capability: ${packet.capabilityId || readiness.request?.capabilityId || "provider capability"}`,
      `Adapter paths: ${packet.adapterCount ?? adapters.length}`,
      `Execution state: ${readiness.state || "unknown"}`,
      `Circuit state: ${readiness.circuit?.state || "closed"}`,
      `Quota state: ${readiness.quota?.state || "not checked"}`,
      `Duplicate blocked: ${readiness.duplicate ? "yes" : "no"}`,
      `Replay blocked: ${readiness.replay ? "yes" : "no"}`,
      `External execution authorized: ${readiness.executionAuthority ? "yes" : "no"}`,
      "Receipts and outcome verification are required before any live provider action can be treated as complete."
    ],
    packet
  };
}

function handleNexusGenesisProviderOrchestrationCommand(command = "", options = {}) {
  const runtime = window.NexusGenesisProviderOrchestration;
  const text = String(command || "").trim();
  if (!runtime || !text || !runtime.shouldHandle?.(text)) return false;
  const packet = runtime.capabilityReport(text, {
    source: options.source || "standard_user",
    dataClass: "public",
    country: "global",
    jurisdiction: "global",
    consentState: "missing",
    confirmationState: "missing"
  });
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  const response = packet.answer || "Nexus checked provider orchestration status.";
  recordNexusOsConversationTurn("assistant", response, {
    source: "nexus-genesis-provider-orchestration",
    capabilityId: runtime.SERVICE_ID || "nexus_genesis_provider_orchestration_runtime",
    noExternalExecution: true,
    noSecretExposure: true
  });
  nexusAgenticBrainLastResult = {
    ok: true,
    command: text,
    message: response,
    source: "nexus-genesis-provider-orchestration",
    capabilityId: runtime.SERVICE_ID || "nexus_genesis_provider_orchestration_runtime",
    preparedCards: [renderNexusGenesisProviderOrchestrationCard(packet)],
    result: packet,
    localOnly: true,
    noExecutionAuthorized: true,
    noExternalExecution: true,
    noSecretExposure: true,
    providerOrchestrationPacket: packet
  };
  setNexusCoreState("reasoning", {
    source: "genesis-provider-orchestration",
    statusText: "Provider orchestration status prepared."
  });
  setVoiceResponse(response, true, {
    allowHandoff: false,
    command: text,
    source: "nexus-genesis-provider-orchestration",
    providerOrchestrationPacket: packet
  });
  renderUserWorkspace?.();
  return true;
}

function renderNexusGenesisAfricaAgOpportunityCard(packet = {}) {
  const isStatus = packet.packetType === "genesis_africa_ag_opportunity_capability_status_packet";
  const isRegistry = packet.packetType === "genesis_africa_ag_opportunity_registry_packet";
  const isGovernance = packet.packetType === "genesis_africa_ag_opportunity_governance_packet";
  const isTrust = packet.packetType === "genesis_africa_ag_opportunity_trust_registry_packet";
  const isImpact = packet.packetType === "genesis_africa_ag_opportunity_program_impact_packet";
  const isCompletion = packet.packetType === "genesis_africa_ag_opportunity_completion_classification_packet";
  const profile = packet.participantProfile || {};
  const firstRecommendation = (packet.recommendations || [])[0] || {};
  const counts = packet.classificationCounts || {};
  return {
    type: packet.packetType || "genesis_africa_youth_women_ag_opportunity_packet",
    title: isStatus ? "Africa Opportunity Capability Status" : isRegistry ? "Africa Opportunity Registries" : isGovernance ? "Africa Opportunity Governance Controls" : isTrust ? "Africa Opportunity Trust Registry" : isImpact ? "Africa Opportunity Program Impact" : isCompletion ? "Africa Opportunity Completion Classification" : "Africa Agriculture Opportunity Packet",
    status: "africa-youth-women-agricultural-opportunity",
    localOnly: true,
    confirmationRequired: false,
    modeSummary: {
      id: "africa-youth-women-agricultural-opportunity",
      label: isStatus ? "Capability classifications and production limits" : isRegistry ? "Country, source, and model registries" : "Pathway, training, barriers, support, and next steps",
      description: packet.userVisibleStatus || "Nexus prepared an Africa agriculture opportunity packet."
    },
    bullets: isGovernance ? [
      "Privacy, consent, correction, export, deletion, and revocation controls are defined.",
      "Youth safeguarding and women inclusion protections require review before provider-facing use.",
      "Fairness and adversarial checks are required before production scoring.",
      "No provider, buyer, employer, finance, or transport action is authorized."
    ] : isTrust ? [
      `Trust record types: ${(packet.trustRegistry || []).length}`,
      `Country source records: ${(packet.countrySources || []).length}`,
      "Canonical URL, freshness, jurisdiction, licensing, and review receipts are required.",
      "Unverified providers, buyers, employers, and finance programs remain blocked."
    ] : isImpact ? [
      "Verified outcomes and estimated indicators are separated.",
      "Funder exports are disabled until consent and governance approval exist.",
      "Aggregate reporting is allowed only without sensitive personal sharing.",
      "No enrollment, buyer transaction, placement, or finance approval is claimed."
    ] : isCompletion ? [
      `Countries: ${(packet.countries || []).length}`,
      `Models: ${(packet.modelIds || []).length}`,
      `Country sources: ${packet.registryCounts?.countrySources || 0}`,
      `Trust records: ${packet.registryCounts?.trustRecords || 0}`,
      `Production authorization: ${packet.classifications?.productionAuthorization || "not_production_authorized"}`
    ] : isStatus ? [
      `Countries configured: ${packet.supportedCountryCount || 0}`,
      `Implemented locally: ${counts.implemented_locally || 0}`,
      `Credential blocked: ${counts.credential_blocked || 0}`,
      `Data limited: ${counts.data_limited || 0}`,
      `Production authorized: ${packet.productionAuthorized ? "yes" : "no"}`,
      `Buyer contact enabled: ${packet.buyerContactEnabled ? "yes" : "no"}`,
      `Training enrollment enabled: ${packet.trainingEnrollmentEnabled ? "yes" : "no"}`
    ] : isRegistry ? [
      `Countries: ${(packet.countries || []).length}`,
      `Sources: ${(packet.sources || []).length}`,
      `Models: ${(packet.models || []).length}`,
      "Country-specific validation is required before production use.",
      "Directories do not prove availability, funding, provider quality, buyer demand, yield, or income."
    ] : [
      `Country: ${profile.country || "country needed"}`,
      `Population support: ${profile.targetPopulation || "youth/women support"}`,
      `Interests: ${(profile.interests || []).join(", ") || "agriculture pathway"}`,
      `Primary path: ${firstRecommendation.title || "more information needed"}`,
      `Support needs: ${(profile.barriers || []).join(", ") || "check transport, childcare, digital access, finance"}`,
      `Receipt: ${packet.receipt?.receiptId || "created locally"}`,
      `Buyer contacted: ${packet.buyerContactEnabled ? "yes" : "no"}`,
      `Training enrolled: ${packet.trainingEnrollmentEnabled ? "yes" : "no"}`,
      `Income/yield guarantee active: ${packet.incomeGuaranteeEnabled || packet.yieldGuaranteeEnabled ? "yes" : "no"}`
    ],
    receiptId: packet.receipt?.receiptId || "",
    packet
  };
}

function handleNexusGenesisAfricaAgOpportunityCommand(command = "", options = {}) {
  const runtime = window.NexusGenesisAfricaAgOpportunity;
  const text = String(command || "").trim();
  if (!runtime || !text || !runtime.shouldHandle?.(text)) return false;
  const statusIntent = /\b(capability status|production limitations|what is production authorized)\b/i.test(text);
  const registryIntent = /\b(registry|registries|source|sources|countries|models)\b/i.test(text) && /\b(africa|agriculture|women|youth)\b/i.test(text);
  const governanceIntent = /\b(governance|privacy|consent|fairness|safeguarding|delete|export|revocation|accessibility|low literacy|language support)\b/i.test(text);
  const trustIntent = /\b(trust registry|verified buyer|verified employer|verified training|verified provider|verified cooperative|source verification|freshness|canonical url|licensing)\b/i.test(text);
  const impactIntent = /\b(program impact|funder report|verified outcome|estimated outcome|aggregate report)\b/i.test(text);
  const completionIntent = /\b(completion classification|end-to-end testing|master completion|production limitations)\b/i.test(text);
  const context = {
    language: languageCode(),
    source: options.source || "standard_user",
    consentState: "session_only_or_not_provided"
  };
  const packet = completionIntent
    ? runtime.buildCompletionClassificationPacket(text)
    : impactIntent
    ? runtime.buildProgramImpactPacket(text)
    : trustIntent
    ? runtime.buildTrustRegistryPacket(text)
    : governanceIntent
    ? runtime.buildGovernancePacket(text)
    : registryIntent
    ? runtime.registries()
    : statusIntent
    ? runtime.buildCapabilityStatusPacket(text)
    : runtime.buildOpportunityPacket(text, context);
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  const response = packet.userVisibleStatus || "Nexus prepared an Africa agriculture opportunity packet.";
  recordNexusOsConversationTurn("assistant", response, {
    source: "nexus-genesis-africa-ag-opportunity",
    capabilityId: runtime.SERVICE_ID || "africa_youth_women_agricultural_opportunity_intelligence",
    noBuyerContacted: true,
    noTrainingEnrollment: true,
    noFinancingApplication: true,
    noYieldOrIncomeGuarantee: true
  });
  nexusAgenticBrainLastResult = {
    ok: true,
    command: text,
    message: response,
    source: "nexus-genesis-africa-ag-opportunity",
    capabilityId: runtime.SERVICE_ID || "africa_youth_women_agricultural_opportunity_intelligence",
    preparedCards: [renderNexusGenesisAfricaAgOpportunityCard(packet)],
    result: packet,
    localOnly: true,
    noExecutionAuthorized: true,
    noBuyerContacted: true,
    noTrainingEnrollment: true,
    noFinancingApplication: true,
    noTransportDispatch: true,
    noYieldOrIncomeGuarantee: true
  };
  setNexusCoreState("reasoning", {
    source: "genesis-africa-ag-opportunity",
    statusText: statusIntent ? "Africa opportunity capability status prepared." : "Africa opportunity packet prepared."
  });
  setVoiceResponse(response, true, {
    allowHandoff: false,
    command: text,
    source: "nexus-genesis-africa-ag-opportunity",
    africaAgOpportunityPacket: packet
  });
  renderUserWorkspace?.();
  return true;
}

function isNexusGenesisAfricaAgOpportunityFallbackCommand(command = "") {
  return /\b(africa|agriculture training|agriculture pathway|young woman|women.*agriculture|youth.*agriculture|drc|dr congo|democratic republic of the congo|congo[-\s]?kinshasa|republic of the congo|congo[-\s]?brazzaville|congo|egypt|arab republic of egypt|nile delta|nile valley)\b/i.test(String(command || ""));
}

function nexusConversationWorkflowEngine() {
  return window.NexusConversationWorkflowTransitionEngine || null;
}

function nexusConversationWorkflowContext(command = "") {
  const activeSources = [];
  if (nexusKnowledgeLastResult?.sources && Array.isArray(nexusKnowledgeLastResult.sources)) {
    activeSources.push(...nexusKnowledgeLastResult.sources.slice(0, 5));
  }
  const topic = nexusConversationWorkflowTransitionState.activeTopic
    || nexusOsConversationTurns?.slice?.().reverse?.().find?.(turn => turn.role === "user")?.text
    || command;
  return {
    activeTopic: topic,
    activeSources,
    activeLanguage: languageCode(),
    activeWorkflowId: nexusConversationWorkflowTransitionState.activeWorkflow?.workflowId || "",
    lastProposal: nexusConversationWorkflowTransitionState.lastProposal,
    userRole: "standard_user"
  };
}

function renderNexusConversationWorkflowTransitionCard(state = nexusConversationWorkflowTransitionState) {
  if (!state || !state.lastProposal) return "";
  const proposal = state.lastProposal;
  const classification = proposal.classification || {};
  const options = Array.isArray(proposal.options) ? proposal.options : [];
  const activeWorkflow = state.activeWorkflow || (proposal.opensWorkflow ? proposal.workflow : null);
  const trustReceipt = proposal.trustRailReceipt || {};
  const optionMarkup = options.length ? `
    <div class="nexus-conversation-workflow-options" data-nexus-conversation-workflow-options="true">
      ${options.map((workflow, index) => `
        <button type="button" data-nexus-conversation-workflow-choice="${escapeHtml(workflow.workflowId)}" data-nexus-command="${escapeHtml(index === 0 ? "the first one" : index === 1 ? "the second one" : "the third one")}">
          <strong>${escapeHtml(translateText(workflow.domain))}</strong>
          <span>${escapeHtml(translateText(workflow.conversationalPurpose))}</span>
        </button>
      `).join("")}
    </div>
  ` : "";
  const workflowMarkup = activeWorkflow ? `
    <div class="nexus-conversation-workflow-surface" data-nexus-conversation-workflow-surface="true" data-nexus-workflow-id="${escapeHtml(activeWorkflow.workflowId)}" data-execution-authority="false" data-provider-handoff-authorized="false">
      <div>
        <span class="eyebrow">${escapeHtml(translateText("Workflow inside conversation"))}</span>
        <h4>${escapeHtml(translateText(activeWorkflow.conversationalPurpose))}</h4>
        <p>${escapeHtml(translateText("Here is what I carried into this workflow from our conversation. You can correct it before anything else happens."))}</p>
      </div>
      <ul>
        <li><strong>${escapeHtml(translateText("Purpose"))}:</strong> ${escapeHtml(activeWorkflow.conversationalPurpose)}</li>
        <li><strong>${escapeHtml(translateText("Known context"))}:</strong> ${escapeHtml(proposal.carriedContext?.carried?.topic || state.activeTopic || "Current conversation topic")}</li>
        <li><strong>${escapeHtml(translateText("Missing information"))}:</strong> ${escapeHtml((activeWorkflow.missingInformationQuestions || []).slice(0, 2).join(" "))}</li>
        <li><strong>${escapeHtml(translateText("Safety"))}:</strong> ${escapeHtml(activeWorkflow.safetyClass)}; ${escapeHtml(translateText("no external action is authorized"))}</li>
        <li><strong>${escapeHtml(translateText("Sources"))}:</strong> ${escapeHtml((proposal.carriedContext?.carried?.sourceCount || 0) ? `${proposal.carriedContext.carried.sourceCount} active source(s) attached` : "No live source attached to this workflow yet")}</li>
        <li><strong>${escapeHtml(translateText("Trust rails"))}:</strong> ${escapeHtml((trustReceipt.rails || []).slice(0, 3).join("; ") || "Consent, context, and no-execution rails active")}</li>
      </ul>
      <div class="nexus-conversation-workflow-controls" aria-label="${escapeHtml(translateText("Workflow controls"))}">
        <button type="button" data-nexus-conversation-workflow-control="revise" data-nexus-command="make this easier to understand">${escapeHtml(translateText("Revise"))}</button>
        <button type="button" data-nexus-conversation-workflow-control="sources" data-nexus-command="show sources for that">${escapeHtml(translateText("Sources"))}</button>
        <button type="button" data-nexus-conversation-workflow-control="close" data-nexus-command="close this workflow">${escapeHtml(translateText("Close"))}</button>
      </div>
    </div>
  ` : "";
  return `
    <section class="nexus-conversation-workflow-transition nexus-glass-card" data-nexus-conversation-workflow-transition="true" data-conversation-state="${escapeHtml(classification.state || state.currentState || "exploring")}" data-execution-authority="false" data-provider-handoff-authorized="false" aria-label="${escapeHtml(translateText("Nexus conversation to workflow transition"))}">
      <span class="eyebrow">${escapeHtml(translateText("Conversation state"))}: ${escapeHtml(translateText(classification.state || state.currentState || "exploring"))}</span>
      <p>${escapeHtml(translateText(proposal.message || "Nexus is keeping the conversation primary."))}</p>
      ${optionMarkup}
      ${workflowMarkup}
      <small>${escapeHtml(translateText("Workflows are offered, not forced. Calls, messages, payments, provider submissions, location sharing, medical or pharmacy execution, drone launch, and dispatch require explicit confirmation and configured providers."))}</small>
    </section>
  `;
}

function handleNexusConversationWorkflowTransitionCommand(command = "") {
  const engine = nexusConversationWorkflowEngine();
  if (!engine || experienceMode !== "user") return false;
  const text = String(command || "").trim();
  if (!text) return false;
  const lower = text.toLowerCase();
  const hasActiveTransition = Boolean(nexusConversationWorkflowTransitionState.lastProposal || nexusConversationWorkflowTransitionState.activeWorkflow);
  const transitionLikely = hasActiveTransition
    || /\b(turn this into|create|make|prepare|organize|build|draft|write|checklist|briefing|guide|plan|workflow|the first one|the second one|the third one|not yet|show sources|where did that|go back|close this workflow|pause this|continue the|what should we do|put this into practice|process for this)\b/i.test(text)
    || /\b(why|what causes|tell me about|explain)\b/i.test(text) && /\b(diabetes|heat|maize|crop|medication|jobs|training|marketplace|route|buyer|clinic|pharmacy)\b/i.test(text);
  if (!transitionLikely) return false;
  if (/\b(not yet|keep explaining|keep talking|not now)\b/i.test(lower)) {
    nexusConversationWorkflowTransitionState.currentState = "exploring";
    nexusConversationWorkflowTransitionState.activeWorkflow = null;
    const message = "Okay. We will keep this as a conversation for now. I will not open a workflow unless you choose one.";
    nexusConversationWorkflowTransitionState.lastProposal = {
      schemaVersion: "nexus-conversation-transition-proposal.v1",
      action: "answer_conversationally",
      classification: { state: "exploring", domains: [], signals: ["workflow_declined"] },
      message,
      opensWorkflow: false,
      executionAuthorized: false,
      providerHandoffAuthorized: false
    };
    recordNexusOsConversationTurn("assistant", message, { source: "nexus-conversation-workflow-transition", workflowOpened: false });
    nexusAgenticBrainLastResult = {
      ok: true,
      message,
      source: "nexus-conversation-workflow-transition",
      preparedCards: [{ title: "Conversation continues", description: message, modeSummary: { id: "conversation-workflow-transition" } }],
      localOnly: true,
      noExecutionAuthorized: true
    };
    setVoiceResponse(message, true, { allowHandoff: false, source: "nexus-conversation-workflow-transition" });
    renderUserWorkspace?.();
    return true;
  }
  if (/\b(close this workflow|close workflow|cancel workflow|go back to the conversation)\b/i.test(lower) && nexusConversationWorkflowTransitionState.activeWorkflow) {
    nexusConversationWorkflowTransitionState.activeWorkflow = null;
    const message = "I closed the workflow and kept the conversation available. No action was executed.";
    nexusConversationWorkflowTransitionState.lastProposal = {
      schemaVersion: "nexus-conversation-transition-proposal.v1",
      action: "close_workflow",
      classification: { state: "returning_or_branching", domains: [], signals: ["workflow_closed"] },
      message,
      opensWorkflow: false,
      executionAuthorized: false,
      providerHandoffAuthorized: false
    };
    recordNexusOsConversationTurn("assistant", message, { source: "nexus-conversation-workflow-transition", workflowClosed: true });
    setVoiceResponse(message, true, { allowHandoff: false, source: "nexus-conversation-workflow-transition" });
    renderUserWorkspace?.();
    return true;
  }
  const context = nexusConversationWorkflowContext(text);
  const proposal = engine.buildTransitionProposal(text, context);
  nexusConversationWorkflowTransitionState.currentState = proposal.classification?.state || "exploring";
  nexusConversationWorkflowTransitionState.activeTopic = context.activeTopic || text;
  nexusConversationWorkflowTransitionState.lastProposal = proposal;
  if (proposal.opensWorkflow && proposal.workflow) {
    nexusConversationWorkflowTransitionState.activeWorkflow = proposal.workflow;
  }
  nexusConversationWorkflowTransitionState.turns = [
    ...nexusConversationWorkflowTransitionState.turns.slice(-8),
    {
      role: "user",
      text,
      state: nexusConversationWorkflowTransitionState.currentState,
      action: proposal.action,
      workflowId: proposal.workflow?.workflowId || "",
      createdAt: new Date().toISOString()
    }
  ];
  const message = proposal.message || "Nexus is keeping the conversation primary.";
  recordNexusOsConversationTurn("assistant", message, {
    source: "nexus-conversation-workflow-transition",
    conversationState: nexusConversationWorkflowTransitionState.currentState,
    workflowOpened: Boolean(proposal.opensWorkflow),
    noExecutionAuthorized: true
  });
  nexusAgenticBrainLastResult = {
    ok: true,
    command: text,
    message,
    source: "nexus-conversation-workflow-transition",
    preparedCards: [{
      title: proposal.opensWorkflow ? "Workflow opened inside conversation" : "Conversation transition options",
      description: message,
      modeSummary: { id: proposal.workflow?.workflowId || "conversation-workflow-transition" },
      transitionProposal: proposal
    }],
    result: proposal,
    localOnly: true,
    noExecutionAuthorized: true,
    providerHandoffAuthorized: false
  };
  setNexusCoreState(proposal.opensWorkflow ? "planning" : "reasoning", {
    source: "conversation-workflow-transition",
    statusText: proposal.opensWorkflow ? "Focused workflow opened inside conversation." : "Workflow opportunity offered conversationally."
  });
  setVoiceResponse(message, true, {
    allowHandoff: false,
    command: text,
    source: "nexus-conversation-workflow-transition"
  });
  renderUserWorkspace?.();
  return true;
}

function handleNexusStandardUserSafeTypedCommand(command = "") {
  if (experienceMode !== "user") return false;
  if (isUniversalLanguageCommand(command)) {
    void changeLanguageByVoice(command);
    return true;
  }
  if (runNexusStandardUserHomeLocalCommand(command)) return true;
  if (handleNexusGenesisProviderOrchestrationCommand(command, { source: "standard-user-safe-typed-command" })) return true;
  if (handleNexusGenesisProviderAbstractionCommand(command, { source: "standard-user-safe-typed-command" })) return true;
  if (handleNexusGenesisAfricaAgOpportunityCommand(command, { source: "standard-user-safe-typed-command" })) return true;
  if (handleNexusGenesisPredictiveWorkforceCommand(command, { source: "standard-user-safe-typed-command" })) return true;
  if (handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source: "standard-user-safe-typed-command" })) return true;
  if (handleNexusMentalHealthBehavioralWellnessCommand(command, { source: "standard-user-safe-typed-command" })) return true;
  if (handleNexusAgenticBrainTypedCommand(command)) return true;
  if (handleNexusProductionRuntimeTypedCommand(command)) return true;
  if (handleNexusOpenDialogueAgentCommand(command)) return true;
  if (handleNexusConversationWorkflowTransitionCommand(command)) return true;
  if (handleJarvisStyleStandardUserSafetyResponse(command)) return true;
  if (handleNexusSimulationCaptionCommand(command)) return true;
  if (handleNexusMapNavigationHandoffCaptionCommand(command)) return true;
  if (handleNexusInternalNavigationCaptionCommand(command)) return true;
  if (handleNexusMarketplaceInquiryPreparationCaptionCommand(command)) return true;
  if (handleNexusCareTeamReportCopyViewCaptionCommand(command)) return true;
  if (handleNexusChronicCarePhysicianReportCaptionCommand(command)) return true;
  if (handleNexusLocalDraftMessageCaptionCommand(command)) return true;
  if (handleNexusCallPreparationCaptionCommand(command)) return true;
  const safeIntent = a100SafeAutonomyIntent(command);
  return openA100SafeAutonomyPreview(safeIntent);
}

function isNexusLocalDraftMessageCommand(command = "") {
  const text = String(command || "").toLowerCase();
  return /\b(draft|prepare|compose|write)\b[\s\S]*\b(message|email|note|question|outreach|inquiry)\b/.test(text)
    && !/\b(send|submit|deliver|call|dial|place call|contact now)\b/.test(text);
}

function handleNexusLocalDraftMessageCaptionCommand(command = "") {
  if (!isNexusLocalDraftMessageCommand(command)) return false;
  clearControlledActionPreview("local-draft-message-caption-command");
  const plan = buildNexusAutonomousTaskPlan(command, { category: "message-call-preparation" });
  startNexusAutonomousWorkflowFromTaskPlan(plan, { command });
  updateUserCaptionPanel("Draft review prepared. Confirming will only create a local editable draft. Nexus will not send, contact a provider, buy, sell, pay, or write backend data.", { expanded: true });
  setVoiceResponse("Draft review prepared. Confirming will only create a local editable draft. Nexus will not send, contact a provider, buy, sell, pay, or write backend data.", false, { allowVoiceFirst: false });
  return true;
}

function isNexusCallPreparationCommand(command = "") {
  const text = String(command || "").toLowerCase();
  return /\b(prepare|plan|outline|create)\b[\s\S]*\b(call|phone)\b/.test(text)
    && !/\b(call now|dial|place call|start call|make the call|open phone)\b/.test(text);
}

function handleNexusCallPreparationCaptionCommand(command = "") {
  if (!isNexusCallPreparationCommand(command)) return false;
  clearControlledActionPreview("call-preparation-caption-command");
  const plan = buildNexusAutonomousTaskPlan(command, { category: "message-call-preparation" });
  startNexusAutonomousWorkflowFromTaskPlan(plan, { command });
  updateUserCaptionPanel("Call preparation review is ready. Confirming will only create a local call-prep card. Nexus will not call, open the phone, request phone permission, or contact a provider.", { expanded: true });
  setVoiceResponse("Call preparation review is ready. Confirming will only create a local call-prep card. Nexus will not call, open the phone, request phone permission, or contact a provider.", false, { allowVoiceFirst: false });
  return true;
}

function createNexusSimulatedProviderExecutionResult(gate = nexusUserConfirmationGateState) {
  if (!gate || gate.actionType !== "simulated_provider_action" || gate.locallyConfirmable !== true) {
    return null;
  }
  const result = {
    schemaVersion: "nexus-simulated-provider-execution.v1",
    simulationId: `nexus-sim-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    simulationType: classifyNexusSimulatedProviderAction(gate),
    label: "SIMULATED ONLY",
    description: sanitizeNexusSessionAuditText(gate.description || "Simulated provider result prepared locally."),
    providerStatus: sanitizeNexusSessionAuditText(gate.providerStatus || "simulation-only / no live provider connected"),
    safetyNote: "No real external action occurred. No provider was contacted.",
    providerContacted: false,
    messageSent: false,
    callPlaced: false,
    routeLaunched: false,
    paymentProcessed: false,
    externalActionOccurred: false,
    executionAuthority: false,
    createdAt: new Date().toISOString()
  };
  nexusSimulatedProviderResults = [result, ...nexusSimulatedProviderResults].slice(0, 10);
  return result;
}

function renderNexusSimulatedProviderExecutionResults(results = nexusSimulatedProviderResults) {
  if (!Array.isArray(results) || !results.length) return "";
  const items = results.slice(0, 3).map(result => `
    <li data-nexus-simulated-provider-result="${htmlSafe(result.simulationType)}">
      <strong>${htmlSafe(result.label)} - ${htmlSafe(result.simulationType)}</strong>
      <span>${htmlSafe(result.description)}</span>
      <small>${htmlSafe(result.safetyNote)}</small>
    </li>
  `).join("");
  return `
    <div class="nexus-simulated-provider-results" data-nexus-simulated-provider-results="true" data-external-action-occurred="false" data-provider-contacted="false" aria-label="Nexus simulated provider results">
      <span class="nexus-simulated-provider-label">Simulated provider mode</span>
      <ul>${items}</ul>
    </div>
  `;
}

function resolveNexusInternalNavigationTarget(gate = {}) {
  const text = `${gate.actionType || ""} ${gate.description || ""} ${gate.providerStatus || ""}`.toLowerCase();
  const targets = [
    { sectionId: "learning", label: "Training / Learning", pattern: /\b(training|learning|course|lesson|teach)\b/ },
    { sectionId: "workforce", label: "Job Readiness / Workforce", pattern: /\b(job|jobs|career|workforce|interview|role)\b/ },
    { sectionId: "trade", label: "Marketplace / AgriTrade", pattern: /\b(marketplace|agritrade|trade|crop|buyer|seller|listing)\b/ },
    { sectionId: "map", label: "Maps / Location Review", pattern: /\b(map|route|navigation|transport|facility|clinic access)\b/ },
    { sectionId: "dashboard", label: "Nexus Home", pattern: /\b(home|dashboard|overview)\b/ }
  ];
  const target = targets.find(item => item.pattern.test(text)) || targets[4];
  if (typeof canOpenSection === "function" && !canOpenSection(target.sectionId)) return null;
  return target;
}

function executeNexusConfirmedInternalNavigation(gate = nexusUserConfirmationGateState) {
  if (!gate || gate.actionType !== "internal_navigation" || gate.locallyConfirmable !== true) {
    return null;
  }
  const target = resolveNexusInternalNavigationTarget(gate);
  if (!target) {
    return {
      schemaVersion: "nexus-internal-navigation-execution.v1",
      label: "LOCAL NAVIGATION ONLY",
      targetSection: "",
      targetLabel: "Unavailable",
      status: "Internal navigation blocked because the section is unavailable. No external action occurred.",
      externalActionOccurred: false,
      locationPermissionRequested: false,
      routeLaunched: false,
      providerContacted: false,
      executionAuthority: false,
      createdAt: new Date().toISOString()
    };
  }
  goSection(target.sectionId, {
    instant: true,
    keepAssistant: true,
    openDefaultAction: false,
    scroll: false
  });
  const result = {
    schemaVersion: "nexus-internal-navigation-execution.v1",
    label: "LOCAL NAVIGATION ONLY",
    targetSection: target.sectionId,
    targetLabel: target.label,
    status: `Local navigation completed to ${target.label}. No external route, location permission, provider handoff, call, message, payment, camera, medical, pharmacy, emergency, or backend write occurred.`,
    externalActionOccurred: false,
    locationPermissionRequested: false,
    routeLaunched: false,
    providerContacted: false,
    executionAuthority: false,
    createdAt: new Date().toISOString()
  };
  nexusInternalNavigationExecutionResults = [result, ...nexusInternalNavigationExecutionResults].slice(0, 10);
  return result;
}

function renderNexusInternalNavigationExecutionResults(results = nexusInternalNavigationExecutionResults) {
  if (!Array.isArray(results) || !results.length) return "";
  const items = results.slice(0, 3).map(result => `
    <li data-nexus-internal-navigation-result="${htmlSafe(result.targetSection)}">
      <strong>${htmlSafe(result.label)} - ${htmlSafe(result.targetLabel)}</strong>
      <span>${htmlSafe(result.status)}</span>
    </li>
  `).join("");
  return `
    <div class="nexus-internal-navigation-results" data-nexus-internal-navigation-results="true" data-external-action-occurred="false" data-location-permission-requested="false" data-route-launched="false" aria-label="Nexus internal navigation results">
      <span class="nexus-internal-navigation-label">Internal navigation</span>
      <ul>${items}</ul>
    </div>
  `;
}

function createNexusMapNavigationHandoffResult(gate = nexusUserConfirmationGateState) {
  if (!gate || gate.actionType !== "map_navigation_handoff" || gate.locallyConfirmable !== true) {
    return null;
  }
  const required = Array.isArray(gate.requiredData) ? gate.requiredData : [];
  if (typeof goSection === "function" && (typeof canOpenSection !== "function" || canOpenSection("map"))) {
    goSection("map", {
      instant: true,
      keepAssistant: true,
      openDefaultAction: false,
      scroll: false
    });
  }
  const result = {
    schemaVersion: "nexus-map-navigation-handoff.v1",
    handoffId: `nexus-map-handoff-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    label: "ROUTE HANDOFF PREPARATION ONLY",
    origin: required.find(item => /\b(origin|start|pickup|from)\b/i.test(String(item || ""))) || "Origin must be confirmed by the user.",
    destination: required.find(item => /\b(destination|dropoff|to|facility|clinic|market)\b/i.test(String(item || ""))) || "Destination must be confirmed by the user.",
    purpose: sanitizeNexusSessionAuditText(gate.description || "Prepare route handoff notes for review."),
    routeNotes: [
      "Confirm origin and destination with the user before any future route handoff.",
      "Review route purpose, accessibility needs, timing, and safety notes.",
      "Keep this as an internal Nexus map review until explicit approval and provider integration exist."
    ],
    providerStatus: sanitizeNexusSessionAuditText(gate.providerStatus || "map provider handoff not connected"),
    locationPermissionStatus: "not requested",
    confirmationRequired: true,
    internalMapSectionOpened: true,
    geolocationUsed: false,
    locationPermissionRequested: false,
    externalNavigationLaunched: false,
    routeLaunched: false,
    providerContacted: false,
    dispatchRequested: false,
    backendWriteOccurred: false,
    externalActionOccurred: false,
    executionAuthority: false,
    safetyNote: "No browser geolocation, location permission, external directions, provider handoff, dispatch, payment, call, message, medical, pharmacy, emergency, or backend write occurred.",
    createdAt: new Date().toISOString()
  };
  nexusMapNavigationHandoffResults = [result, ...nexusMapNavigationHandoffResults].slice(0, 10);
  return result;
}

function renderNexusMapNavigationHandoffResults(results = nexusMapNavigationHandoffResults) {
  if (!Array.isArray(results) || !results.length) return "";
  const items = results.slice(0, 3).map(result => `
    <li data-nexus-map-navigation-handoff-result="${htmlSafe(result.handoffId)}">
      <strong>${htmlSafe(result.label)}</strong>
      <span><strong>Origin:</strong> ${htmlSafe(result.origin)}</span>
      <span><strong>Destination:</strong> ${htmlSafe(result.destination)}</span>
      <span><strong>Purpose:</strong> ${htmlSafe(result.purpose)}</span>
      <span><strong>Provider:</strong> ${htmlSafe(result.providerStatus)}</span>
      <span><strong>Location permission:</strong> ${htmlSafe(result.locationPermissionStatus)}</span>
      <small>${htmlSafe(result.routeNotes.join(" "))}</small>
      <small>${htmlSafe(result.safetyNote)}</small>
    </li>
  `).join("");
  return `
    <div class="nexus-map-navigation-handoff-results" data-nexus-map-navigation-handoff-results="true" data-geolocation-used="false" data-location-permission-requested="false" data-external-navigation-launched="false" data-route-launched="false" data-provider-contacted="false" data-dispatch-requested="false" data-backend-write-occurred="false" data-external-action-occurred="false" aria-label="Nexus route handoff preparation results">
      <span class="nexus-map-navigation-handoff-label">Route handoff preparation</span>
      <ul>${items}</ul>
    </div>
  `;
}

function createNexusMarketplaceInquiryPreparationResult(gate = nexusUserConfirmationGateState) {
  if (!gate || gate.actionType !== "marketplace_inquiry_preparation" || gate.locallyConfirmable !== true) {
    return null;
  }
  const description = sanitizeNexusSessionAuditText(gate.description || "Prepare an AgriTrade marketplace inquiry for review.");
  const required = Array.isArray(gate.requiredData) ? gate.requiredData : [];
  const result = {
    schemaVersion: "nexus-marketplace-inquiry-preparation.v1",
    inquiryPrepId: `nexus-marketplace-inquiry-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    label: "MARKETPLACE INQUIRY PREPARATION ONLY",
    marketplaceModule: "AgriTrade",
    topic: description,
    productOrListing: required.find(item => /\b(product|crop|listing|item|produce|commodity)\b/i.test(String(item || ""))) || "Product, crop, or listing must be confirmed by the user.",
    counterparty: required.find(item => /\b(buyer|seller|counterparty|contact|market)\b/i.test(String(item || ""))) || "Buyer or seller identity must remain uncontacted until a future approved handoff exists.",
    reviewChecklist: [
      "Confirm product, crop, or listing details before any future inquiry.",
      "Review quantity, quality, timing, price expectations, and delivery terms.",
      "Keep buyer/seller contact, order creation, payment, and fulfillment blocked until configured marketplace gates exist."
    ],
    providerStatus: sanitizeNexusSessionAuditText(gate.providerStatus || "marketplace provider not connected"),
    confirmationRequired: true,
    safetyNote: "No buyer or seller was contacted. Nexus did not create an order, buy, sell, process payment, open an external marketplace, change inventory, or write backend data.",
    inquirySent: false,
    buyerContacted: false,
    sellerContacted: false,
    orderCreated: false,
    paymentProcessed: false,
    inventoryChanged: false,
    externalMarketplaceOpened: false,
    providerContacted: false,
    externalActionOccurred: false,
    backendWriteOccurred: false,
    executionAuthority: false,
    createdAt: new Date().toISOString()
  };
  nexusMarketplaceInquiryPreparationResults = [result, ...nexusMarketplaceInquiryPreparationResults].slice(0, 10);
  return result;
}

function renderNexusMarketplaceInquiryPreparationResults(results = nexusMarketplaceInquiryPreparationResults) {
  if (!Array.isArray(results) || !results.length) return "";
  const items = results.slice(0, 3).map(result => `
    <li data-nexus-marketplace-inquiry-preparation-result="${htmlSafe(result.inquiryPrepId)}">
      <strong>${htmlSafe(result.label)}</strong>
      <span><strong>Module:</strong> ${htmlSafe(result.marketplaceModule)}</span>
      <span><strong>Topic:</strong> ${htmlSafe(result.topic)}</span>
      <span><strong>Product/listing:</strong> ${htmlSafe(result.productOrListing)}</span>
      <span><strong>Buyer/seller:</strong> ${htmlSafe(result.counterparty)}</span>
      <span><strong>Provider:</strong> ${htmlSafe(result.providerStatus)}</span>
      <small>${htmlSafe(result.reviewChecklist.join(" "))}</small>
      <small>${htmlSafe(result.safetyNote)}</small>
    </li>
  `).join("");
  return `
    <div class="nexus-marketplace-inquiry-preparation-results" data-nexus-marketplace-inquiry-preparation-results="true" data-inquiry-sent="false" data-buyer-contacted="false" data-seller-contacted="false" data-order-created="false" data-payment-processed="false" data-inventory-changed="false" data-external-marketplace-opened="false" data-provider-contacted="false" data-external-action-occurred="false" data-backend-write-occurred="false" aria-label="Nexus marketplace inquiry preparation results">
      <span class="nexus-marketplace-inquiry-preparation-label">Marketplace inquiry preparation</span>
      <ul>${items}</ul>
    </div>
  `;
}

function resolveNexusChronicCareReportKind(gate = {}) {
  const text = `${gate.description || ""} ${gate.requiredData || ""}`.toLowerCase();
  if (/\b(diabetes|blood sugar|glucose|a1c)\b/.test(text)) return "diabetes";
  if (/\b(hypertension|blood pressure|bp)\b/.test(text)) return "hypertension";
  if (/\b(obesity|weight|wellness)\b/.test(text)) return "wellness";
  if (/\b(rpm|rtm|remote patient monitoring|remote therapeutic monitoring)\b/.test(text)) return "rpm";
  if (/\b(telehealth|visit)\b/.test(text)) return "telehealth";
  if (/\b(community health worker|chw)\b/.test(text)) return "chw";
  if (/\b(care team|nurse|coach)\b/.test(text)) return "care-team-summary";
  return "general";
}

function createNexusChronicCarePhysicianReportResult(gate = nexusUserConfirmationGateState) {
  if (!gate || gate.actionType !== "chronic_care_report_generation" || gate.locallyConfirmable !== true) {
    return null;
  }
  const reportKind = resolveNexusChronicCareReportKind(gate);
  const report = a100ChronicCareReport(reportKind, gate.description || gate.safetyReason || "");
  const fieldMap = {};
  (report.fields || []).forEach(field => {
    if (field?.label && fieldMap[field.label] == null) fieldMap[field.label] = field.value || "";
  });
  const result = {
    schemaVersion: "nexus-chronic-care-physician-report.v1",
    reportId: `nexus-chronic-report-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    label: "PHYSICIAN / CARE-TEAM REPORT FOR REVIEW ONLY",
    reportKind,
    title: report.title || "Chronic care physician report",
    reportType: fieldMap["Report Type"] || "Physician Report",
    conditionArea: fieldMap["Condition Area"] || "General chronic care",
    patientConcern: fieldMap["Patient Concern"] || "not provided",
    currentSessionData: fieldMap["Current Session Data"] || "Manual/session-only information",
    readingsMentioned: fieldMap["Readings Mentioned"] || "not provided",
    symptomsMentioned: fieldMap["Symptoms Mentioned"] || "not provided",
    medicationQuestions: fieldMap["Medication Questions"] || "not mentioned",
    rpmRtmReadiness: fieldMap["RPM/RTM Readiness"] || "not connected; manual entry only; review required",
    rpmRtmManualSessionData: fieldMap["RPM/RTM Manual Session Data"] || a100RpmRtmSessionDataSummary(),
    lifestyleAdherenceBarriers: fieldMap["Lifestyle / Adherence Barriers"] || "not provided",
    missingInformation: fieldMap["Missing Information"] || "confirmed readings, symptoms, medication list, timing, and clinician context",
    riskSafetyFlags: fieldMap["Risk / Safety Flags"] || "insufficient data",
    recommendedReviewLevel: fieldMap["Recommended Review Level"] || "Provider review required",
    evidenceSourceLabel: fieldMap["Evidence / Source Label"] || "Manual/session-only information; Provider review required",
    nexusSafetyBoundary: fieldMap["Nexus Safety Boundary"] || report.safety,
    copyReady: true,
    localOnly: true,
    reviewOnly: true,
    providerHandoff: false,
    providerContacted: false,
    externalTransmission: false,
    diagnosisMade: false,
    prescribedMedication: false,
    medicationAdjusted: false,
    emergencyDispatched: false,
    deviceConnected: false,
    sensitiveHealthDataPersisted: false,
    backendWriteOccurred: false,
    externalActionOccurred: false,
    executionAuthority: false,
    createdAt: new Date().toISOString()
  };
  nexusChronicCarePhysicianReportResults = [result, ...nexusChronicCarePhysicianReportResults].slice(0, 10);
  return result;
}

function renderNexusChronicCarePhysicianReportResults(results = nexusChronicCarePhysicianReportResults) {
  if (!Array.isArray(results) || !results.length) return "";
  const items = results.slice(0, 3).map(result => `
    <li data-nexus-chronic-care-physician-report-result="${htmlSafe(result.reportId)}">
      <strong>${htmlSafe(result.label)}</strong>
      <span><strong>Report Type:</strong> ${htmlSafe(result.reportType)}</span>
      <span><strong>Condition Area:</strong> ${htmlSafe(result.conditionArea)}</span>
      <span><strong>Patient Concern:</strong> ${htmlSafe(result.patientConcern)}</span>
      <span><strong>Current Session Data:</strong> ${htmlSafe(result.currentSessionData)}</span>
      <span><strong>Readings Mentioned:</strong> ${htmlSafe(result.readingsMentioned)}</span>
      <span><strong>Symptoms Mentioned:</strong> ${htmlSafe(result.symptomsMentioned)}</span>
      <span><strong>Medication Questions:</strong> ${htmlSafe(result.medicationQuestions)}</span>
      <span><strong>RPM/RTM Readiness:</strong> ${htmlSafe(result.rpmRtmReadiness)}</span>
      <span><strong>RPM/RTM Manual Session Data:</strong> ${htmlSafe(result.rpmRtmManualSessionData || "No manual RPM/RTM session data entered yet.")}</span>
      <span><strong>Lifestyle / Adherence Barriers:</strong> ${htmlSafe(result.lifestyleAdherenceBarriers)}</span>
      <span><strong>Missing Information:</strong> ${htmlSafe(result.missingInformation)}</span>
      <span><strong>Risk / Safety Flags:</strong> ${htmlSafe(result.riskSafetyFlags)}</span>
      <span><strong>Recommended Review Level:</strong> ${htmlSafe(result.recommendedReviewLevel)}</span>
      <span><strong>Evidence / Source Label:</strong> ${htmlSafe(result.evidenceSourceLabel)}</span>
      <small><strong>Nexus Safety Boundary:</strong> ${htmlSafe(result.nexusSafetyBoundary)}</small>
    </li>
  `).join("");
  return `
    <div class="nexus-chronic-care-physician-report-results" data-nexus-chronic-care-physician-report-results="true" data-review-only="true" data-local-only="true" data-provider-handoff="false" data-provider-contacted="false" data-external-transmission="false" data-diagnosis-made="false" data-prescribed-medication="false" data-medication-adjusted="false" data-emergency-dispatched="false" data-device-connected="false" data-sensitive-health-data-persisted="false" data-backend-write-occurred="false" data-external-action-occurred="false" aria-label="Nexus chronic care physician report results">
      <span class="nexus-chronic-care-physician-report-label">Physician/care-team report</span>
      <ul>${items}</ul>
    </div>
  `;
}

function resolveNexusCareTeamReportCopyAudience(text = "") {
  const value = String(text || "").toLowerCase();
  if (/\b(community health worker|chw|handoff note)\b/.test(value)) return "community health worker";
  if (/\bnurse\b/.test(value)) return "nurse";
  if (/\bcoach\b/.test(value)) return "coach";
  if (/\b(care team|team summary)\b/.test(value)) return "care team";
  if (/\bprovider\b/.test(value)) return "provider";
  return "physician";
}

function createNexusCareTeamReportCopyViewResult(gate = nexusUserConfirmationGateState) {
  if (!gate || gate.actionType !== "care_team_report_copy_view" || gate.locallyConfirmable !== true) {
    return null;
  }
  const audience = resolveNexusCareTeamReportCopyAudience(`${gate.description || ""} ${gate.requiredData || ""}`);
  const reportKind = audience === "coach" ? "wellness" : audience === "community health worker" ? "chw" : audience === "nurse" ? "care-team-summary" : "general";
  const report = a100ChronicCareReport(reportKind, gate.description || gate.safetyReason || "");
  const copyLines = [
    `Audience: ${audience}`,
    "Purpose: local copy-ready chronic-care summary for human review.",
    `Current session data: ${a100RpmRtmSessionDataSummary()}`,
    `Report basis: ${report.title || "Chronic care report"}; manual/session-only information; provider review required.`,
    "Review-only boundary: no diagnosis, no medication changes, no external send, no persistent storage, and no provider handoff.",
    "Safety: Nexus did not send, share, call, message, transmit, store sensitive health data, write backend data, or contact a provider."
  ];
  const result = {
    schemaVersion: "nexus-care-team-report-copy-view.v1",
    copyViewId: `nexus-care-team-copy-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    label: "COPY-READY CARE-TEAM REPORT VIEW",
    audience,
    reportType: report.title || "Chronic care report",
    copyText: copyLines.join("\n"),
    reviewOnly: true,
    localOnly: true,
    copyReady: true,
    diagnosisMade: false,
    medicationChanged: false,
    externalSend: false,
    externalShare: false,
    providerHandoff: false,
    providerContacted: false,
    persistentStorage: false,
    backendWriteOccurred: false,
    externalActionOccurred: false,
    executionAuthority: false,
    createdAt: new Date().toISOString()
  };
  nexusCareTeamReportCopyViewResults = [result, ...nexusCareTeamReportCopyViewResults].slice(0, 10);
  return result;
}

function renderNexusCareTeamReportCopyViewResults(results = nexusCareTeamReportCopyViewResults) {
  if (!Array.isArray(results) || !results.length) return "";
  const items = results.slice(0, 3).map(result => `
    <li data-nexus-care-team-report-copy-view-result="${htmlSafe(result.copyViewId)}">
      <strong>${htmlSafe(result.label)}</strong>
      <span><strong>Audience:</strong> ${htmlSafe(result.audience)}</span>
      <span><strong>Report Type:</strong> ${htmlSafe(result.reportType)}</span>
      <pre>${htmlSafe(result.copyText)}</pre>
    </li>
  `).join("");
  return `
    <div class="nexus-care-team-report-copy-view-results" data-nexus-care-team-report-copy-view-results="true" data-review-only="true" data-local-only="true" data-copy-ready="true" data-diagnosis-made="false" data-medication-changed="false" data-external-send="false" data-external-share="false" data-provider-handoff="false" data-provider-contacted="false" data-persistent-storage="false" data-backend-write-occurred="false" data-external-action-occurred="false" data-execution-authority="false" aria-label="Nexus care team report copy view results">
      <span class="nexus-care-team-report-copy-view-label">Care-team copy view</span>
      <ul>${items}</ul>
      <small>Local copy-ready view only. Nexus did not send, share, contact providers, store sensitive health data, or write backend data.</small>
    </div>
  `;
}

function classifyNexusLocalDraftMessageType(gate = {}) {
  const text = `${gate.actionType || ""} ${gate.description || ""} ${gate.requiredData || ""}`.toLowerCase();
  if (/\b(care[- ]?team|physician|provider|doctor|clinic|chw|health)\b/.test(text)) return "care-team note";
  if (/\b(market|agritrade|buyer|seller|listing|produce|crop sale)\b/.test(text)) return "marketplace inquiry";
  if (/\b(job|career|workforce|employer|interview)\b/.test(text)) return "job/workforce inquiry";
  if (/\b(training|learning|course|certificate|class)\b/.test(text)) return "training inquiry";
  if (/\b(farmer|farm|field|crop|irrigation|soil|pest)\b/.test(text)) return "farmer outreach";
  return "provider question";
}

function createNexusLocalDraftMessageResult(gate = nexusUserConfirmationGateState) {
  if (!gate || gate.actionType !== "draft_generation" || gate.locallyConfirmable !== true) {
    return null;
  }
  const draftType = classifyNexusLocalDraftMessageType(gate);
  const baseTopic = sanitizeNexusSessionAuditText(gate.description || "Nexus local draft");
  const draftByType = {
    "farmer outreach": `Hello, I am preparing a local review note about ${baseTopic}. I would like to share the crop, field condition, timing, and support needed after I review the details.`,
    "training inquiry": `Hello, I am interested in training support related to ${baseTopic}. Please share the program requirements, schedule, cost if any, and next review steps.`,
    "job/workforce inquiry": `Hello, I am reviewing workforce options related to ${baseTopic}. Please share role requirements, training needs, application steps, and any documents I should prepare.`,
    "marketplace inquiry": `Hello, I am reviewing an AgriTrade marketplace inquiry related to ${baseTopic}. Please confirm product details, quantity, quality, timing, price expectations, and safe next steps before any transaction.`,
    "care-team note": `Care team review note: I am preparing a local summary about ${baseTopic}. Please review symptoms, readings, medication questions, barriers, and missing information before any care decision.`,
    "provider question": `Hello, I am preparing a question related to ${baseTopic}. Please review the context, missing information, and safe next step before any provider contact.`
  };
  const result = {
    schemaVersion: "nexus-local-draft-message.v1",
    draftId: `nexus-draft-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    label: "LOCAL DRAFT ONLY",
    draftType,
    subject: `Nexus ${draftType} draft`,
    content: draftByType[draftType] || draftByType["provider question"],
    safetyNote: "Review-only local draft. Nexus did not send, submit, message, contact a provider, buy, sell, pay, or write backend data.",
    editableLocally: true,
    messageSent: false,
    providerContacted: false,
    externalActionOccurred: false,
    backendWriteOccurred: false,
    executionAuthority: false,
    createdAt: new Date().toISOString()
  };
  nexusLocalDraftMessageResults = [result, ...nexusLocalDraftMessageResults].slice(0, 10);
  return result;
}

function renderNexusLocalDraftMessageResults(results = nexusLocalDraftMessageResults) {
  if (!Array.isArray(results) || !results.length) return "";
  const items = results.slice(0, 3).map(result => `
    <li data-nexus-local-draft-message-result="${htmlSafe(result.draftType)}">
      <strong>${htmlSafe(result.label)} - ${htmlSafe(result.draftType)}</strong>
      <span>${htmlSafe(result.subject)}</span>
      <textarea data-nexus-local-draft-message-text="true" rows="4" aria-label="Review-only Nexus local draft">${htmlSafe(result.content)}</textarea>
      <small>${htmlSafe(result.safetyNote)}</small>
    </li>
  `).join("");
  return `
    <div class="nexus-local-draft-message-results" data-nexus-local-draft-message-results="true" data-message-sent="false" data-provider-contacted="false" data-external-action-occurred="false" data-backend-write-occurred="false" aria-label="Nexus local draft message results">
      <span class="nexus-local-draft-message-label">Drafts for review</span>
      <ul>${items}</ul>
    </div>
  `;
}

function createNexusCallPreparationResult(gate = nexusUserConfirmationGateState) {
  if (!gate || gate.actionType !== "call_preparation" || gate.locallyConfirmable !== true) {
    return null;
  }
  const description = sanitizeNexusSessionAuditText(gate.description || "Prepare a call workflow for review.");
  const required = Array.isArray(gate.requiredData) ? gate.requiredData : [];
  const result = {
    schemaVersion: "nexus-call-preparation.v1",
    callPrepId: `nexus-call-prep-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    label: "CALL PREPARATION ONLY",
    target: required.find(item => /\b(who|recipient|contact|provider|person)\b/i.test(String(item || ""))) || "Recipient or provider to be confirmed by the user.",
    reason: description,
    talkingPoints: [
      "Confirm the correct person, organization, or provider before any future handoff.",
      "Review the purpose of the call and what information should be discussed.",
      "Keep notes local until a configured provider, explicit approval, and final execution gate exist."
    ],
    providerStatus: sanitizeNexusSessionAuditText(gate.providerStatus || "phone provider not connected"),
    confirmationRequired: true,
    safetyNote: "No call was placed. Nexus did not open the phone, request phone permission, contact a provider, send a message, or write backend data.",
    callPlaced: false,
    phonePermissionRequested: false,
    providerContacted: false,
    messageSent: false,
    externalActionOccurred: false,
    backendWriteOccurred: false,
    executionAuthority: false,
    createdAt: new Date().toISOString()
  };
  nexusCallPreparationResults = [result, ...nexusCallPreparationResults].slice(0, 10);
  return result;
}

function renderNexusCallPreparationResults(results = nexusCallPreparationResults) {
  if (!Array.isArray(results) || !results.length) return "";
  const items = results.slice(0, 3).map(result => `
    <li data-nexus-call-preparation-result="${htmlSafe(result.callPrepId)}">
      <strong>${htmlSafe(result.label)}</strong>
      <span><strong>Who:</strong> ${htmlSafe(result.target)}</span>
      <span><strong>Reason:</strong> ${htmlSafe(result.reason)}</span>
      <span><strong>Provider:</strong> ${htmlSafe(result.providerStatus)}</span>
      <small>${htmlSafe(result.talkingPoints.join(" "))}</small>
      <small>${htmlSafe(result.safetyNote)}</small>
    </li>
  `).join("");
  return `
    <div class="nexus-call-preparation-results" data-nexus-call-preparation-results="true" data-call-placed="false" data-phone-permission-requested="false" data-provider-contacted="false" data-message-sent="false" data-external-action-occurred="false" data-backend-write-occurred="false" aria-label="Nexus call preparation results">
      <span class="nexus-call-preparation-label">Call preparation</span>
      <ul>${items}</ul>
    </div>
  `;
}

function startNexusAutonomousWorkflowFromTaskPlan(taskPlan = {}, context = {}) {
  const state = createNexusAutonomousWorkflowState(taskPlan, context);
  if (!state) return null;
  recordNexusSessionActionAuditEvent("user_request", {
    userRequest: context.command || taskPlan.userIntent || state.userIntent,
    resultStatus: "User request accepted for local planning."
  });
  recordNexusSessionActionAuditEvent("plan_created", {
    userRequest: context.command || taskPlan.userIntent || state.userIntent,
    actionType: taskPlan.category,
    riskLevel: taskPlan.riskLevel,
    safetyReason: Array.isArray(taskPlan.blockedHighRiskActions) ? taskPlan.blockedHighRiskActions.join(" ") : "",
    resultStatus: "Plan created locally with no external execution."
  });
  nexusAutonomousWorkflowState = state;
  updateNexusAutonomousWorkflowDerivedState();
  if (typeof syncNexusControlledActionQueueFromWorkflow === "function") {
    syncNexusControlledActionQueueFromWorkflow(nexusAutonomousWorkflowState, context);
    recordNexusSessionActionAuditEvent("action_queued", {
      userRequest: context.command || state.userIntent,
      actionType: nexusControlledActionQueue.map(action => action.actionType).join(", "),
      riskLevel: nexusControlledActionQueue.map(action => action.riskLevel).join(", "),
      safetyReason: nexusControlledActionQueue.some(action => action.queueStatus === "blocked") ? "One or more queued actions are blocked or gated." : "Queued local review actions.",
      resultStatus: `${nexusControlledActionQueue.length} action(s) queued for review.`
    });
    if (nexusControlledActionQueue.some(action => action.queueStatus === "blocked")) {
      recordNexusSessionActionAuditEvent("action_blocked", {
        userRequest: context.command || state.userIntent,
        actionType: "blocked_high_risk_action",
        riskLevel: "high",
        safetyReason: "High-risk or provider-dependent action remained blocked.",
        resultStatus: "Blocked action recorded locally."
      });
    }
  }
  recordNexusSessionActionAuditEvent("workflow_started", {
    userRequest: context.command || state.userIntent,
    actionType: state.category,
    riskLevel: taskPlan.riskLevel,
    resultStatus: "Workflow started in volatile UI state only."
  });
  if (typeof paintNexusAutonomousWorkflow === "function") {
    paintNexusAutonomousWorkflow();
  }
  if (typeof paintNexusControlledActionQueue === "function") {
    paintNexusControlledActionQueue();
  }
  return nexusAutonomousWorkflowState;
}

function renderNexusAutonomousWorkflowCard(state = nexusAutonomousWorkflowState) {
  if (!state || state.schemaVersion !== "nexus-autonomous-workflow.v1") return "";
  updateNexusAutonomousWorkflowDerivedState();
  const total = state.steps.length || 1;
  const currentNumber = Math.min(total, state.currentStepIndex + 1);
  const missing = Array.isArray(state.activePlan?.missingInformation) ? state.activePlan.missingInformation.join(" ") : "";
  const blocked = Array.isArray(state.activePlan?.blockedHighRiskActions) ? state.activePlan.blockedHighRiskActions.join(" ") : "";
  return `
    <section class="nexus-autonomous-workflow-card" aria-label="Nexus guided workflow" data-nexus-autonomous-workflow="true" data-execution-authority="false">
      <span class="nexus-autonomous-workflow-label">Guided workflow</span>
      <strong>${htmlSafe(state.goal)}</strong>
      <span>Step ${htmlSafe(currentNumber)} of ${htmlSafe(total)}: ${htmlSafe(state.currentStep || "Review the current step.")}</span>
      <span>Next: ${htmlSafe(state.nextStep || "Finish or revise the workflow.")}</span>
      <span>Missing: ${htmlSafe(missing || "No required information listed yet.")}</span>
      <span>Blocked: ${htmlSafe(blocked || "External execution remains blocked.")}</span>
      <span>${htmlSafe(state.explanation)}</span>
      ${state.revisionNote ? `<span>${htmlSafe(state.revisionNote)}</span>` : ""}
      <div class="nexus-autonomous-workflow-actions" aria-label="Workflow controls">
        <button type="button" data-nexus-workflow-control="back" ${state.currentStepIndex <= 0 ? "disabled aria-disabled=\"true\"" : ""}>Back</button>
        <button type="button" data-nexus-workflow-control="next" ${state.currentStepIndex >= total - 1 ? "disabled aria-disabled=\"true\"" : ""}>Next step</button>
        <button type="button" data-nexus-workflow-control="explain">Explain plan</button>
        <button type="button" data-nexus-workflow-control="revise">Revise</button>
        <button type="button" data-nexus-workflow-control="finish">Finish</button>
        <button type="button" data-nexus-workflow-control="cancel">Cancel</button>
      </div>
      <small>Session-only. No provider handoff, browser permission, payment, call, message, location, camera, medical, pharmacy, emergency, backend write, or external action occurs from these controls.</small>
    </section>
  `;
}

function paintNexusAutonomousWorkflow() {
  const html = renderNexusAutonomousWorkflowCard();
  [
    ["#userCaptionPanel", "#userCaptionText"],
    ["#globalAssistantBar", "#globalAssistantStatus"]
  ].forEach(([rootSelector, anchorSelector]) => {
    const root = $(rootSelector);
    const anchor = rootSelector === "#userCaptionPanel"
      ? $(anchorSelector)
      : root?.querySelector("[data-controlled-action-preview]") || $(anchorSelector);
    if (!root || !anchor) return;
    let element = root.querySelector("[data-nexus-autonomous-workflow-host]");
    if (!element) {
      element = document.createElement("div");
      element.dataset.nexusAutonomousWorkflowHost = "true";
      anchor.insertAdjacentElement("afterend", element);
    }
    element.innerHTML = html;
    element.classList.toggle("hidden", !html);
  });
}

function handleNexusAutonomousWorkflowControl(action = "") {
  if (!nexusAutonomousWorkflowState) return false;
  const state = nexusAutonomousWorkflowState;
  const normalized = String(action || "").trim();
  if (normalized === "cancel") {
    recordNexusSessionActionAuditEvent("action_canceled", {
      userRequest: state.userIntent,
      actionType: state.category,
      riskLevel: state.activePlan?.riskLevel || "",
      safetyReason: "User canceled the guided workflow.",
      resultStatus: "Workflow canceled locally. No action was executed."
    });
    nexusAutonomousWorkflowState = null;
    nexusControlledActionQueue = [];
    nexusUserConfirmationGateState = null;
    paintNexusAutonomousWorkflow();
    if (typeof paintNexusControlledActionQueue === "function") {
      paintNexusControlledActionQueue();
    }
    setVoiceResponse("Nexus canceled this guided workflow. No action was executed.", false, { allowVoiceFirst: false });
    return true;
  }
  if (normalized === "next") {
    state.currentStepIndex = Math.min(state.steps.length - 1, state.currentStepIndex + 1);
    state.lastUserAction = "next";
  } else if (normalized === "back") {
    state.currentStepIndex = Math.max(0, state.currentStepIndex - 1);
    state.lastUserAction = "back";
  } else if (normalized === "revise") {
    state.revisionNote = "Revision mode: tell Nexus what to change. This updates the plan only after review and does not execute actions.";
    state.lastUserAction = "revise";
  } else if (normalized === "explain") {
    state.explanation = "This workflow breaks the goal into safe review steps. Nexus can guide, explain, prepare, or revise locally, but external execution remains blocked.";
    state.lastUserAction = "explain";
  } else if (normalized === "finish") {
    state.currentStepIndex = state.steps.length - 1;
    state.status = "finished";
    state.lastUserAction = "finish";
    state.revisionNote = "Workflow marked finished locally. No external action was executed.";
  } else {
    return false;
  }
  recordNexusSessionActionAuditEvent(normalized === "finish" ? "action_confirmed" : "workflow_updated", {
    userRequest: state.userIntent,
    actionType: state.category,
    riskLevel: state.activePlan?.riskLevel || "",
    safetyReason: normalized === "finish" ? "Finished local workflow only." : "Workflow control updated session state only.",
    resultStatus: `Workflow ${normalized} handled locally.`
  });
  updateNexusAutonomousWorkflowDerivedState();
  if (typeof syncNexusControlledActionQueueFromWorkflow === "function") {
    syncNexusControlledActionQueueFromWorkflow(state, { action: normalized });
  }
  if (typeof paintNexusAutonomousWorkflow === "function") {
    paintNexusAutonomousWorkflow();
  }
  if (typeof paintNexusControlledActionQueue === "function") {
    paintNexusControlledActionQueue();
  }
  return true;
}

function handleNexusAutonomousWorkflowClick(event) {
  const button = event.target.closest("[data-nexus-workflow-control]");
  if (!button) return false;
  event.preventDefault();
  event.stopPropagation();
  return handleNexusAutonomousWorkflowControl(button.dataset.nexusWorkflowControl);
}

function nexusOpenAgentNormalizeText(text = "") {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s'?]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function nexusOpenAgentCreateId(prefix = "task") {
  return `nexus-${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function nexusOpenDialogueCapabilityMatrix() {
  return {
    available_local: [
      "generate plan",
      "generate checklist",
      "generate questions",
      "generate draft",
      "summarize user-provided info",
      "create local prep card",
      "create local reminder proposal",
      "create marketplace prep checklist",
      "create health visit prep",
      "create job prep pathway",
      "create farm task plan",
      "show confirmation",
      "show outcome verification"
    ],
    available_handoff: [
      "call prep",
      "message draft",
      "provider summary draft",
      "appointment request draft",
      "marketplace listing draft",
      "map route prep",
      "reminder proposal"
    ],
    available_confirmed_execution: [
      "session-only navigation between app sections",
      "local review card creation",
      "local draft creation",
      "local checklist creation"
    ],
    unavailable_blocked: [
      "payment execution",
      "medicine purchase",
      "diagnosis",
      "medication change",
      "emergency replacement",
      "unconfirmed call",
      "unconfirmed message",
      "unconfirmed location use",
      "unconfirmed provider contact",
      "fake booking",
      "fake purchase",
      "fake send"
    ]
  };
}

function nexusOpenDialogueRiskClassifier(normalizedText = "", domains = []) {
  if (/\b(chest pain|trouble breathing|can't breathe|cannot breathe|stroke|fainting|severe confusion|danger to self|danger to others|suicide|pregnancy danger|heavy bleeding|emergency)\b/.test(normalizedText)) return "emergency";
  if (/\b(call|dial|message|sms|whatsapp|telegram|email|contact|send|share|submit|provider contact|contact provider|appointment|schedule|book|payment|pay|purchase|buy|checkout|location|gps|near me|camera|microphone|diagnose|prescribe|insulin|medication dose|change medication|stop medication|medical records|fhir|dispatch)\b/.test(normalizedText)) return "high";
  if (domains.some(domain => ["health", "chronic-care", "marketplace", "maps-location", "communication"].includes(domain))) return "medium";
  return "low";
}

function nexusOpenDialogueEmergencyResponse() {
  return "Emergency warning detected. Nexus is stopping the normal workflow. If this may be an emergency, contact local emergency services or a qualified local care team now. Nexus cannot dispatch emergency help, diagnose, or replace urgent care.";
}

function nexusOpenDialogueInterpretCommand(rawText = {}) {
  const raw = typeof rawText === "object" && rawText.rawText !== undefined ? rawText.rawText : rawText;
  const normalizedText = nexusOpenAgentNormalizeText(raw);
  const explicitAssistantInvocation = /\b(nexus|agrinexus)\b/i.test(String(raw || ""));
  const speechStyleDetected = /^(nexus|hey nexus|ok nexus|okay nexus)\b/i.test(String(raw || "").trim()) ? "assistant-invoked" : "typed-or-caption";
  const continuationSignal = /^(continue|next|do the next step|use the last plan|keep going|go on)\b/.test(normalizedText);
  const cancellationSignal = /^(cancel|cancel that|stop|stop that|not now|forget that)\b/.test(normalizedText);
  const modificationSignal = /\b(change that|change it|make it shorter|make it more professional|revise|edit|update the message|change the message)\b/.test(normalizedText);
  const explanationSignal = /\b(explain|why|what does this mean|tell me more)\b/.test(normalizedText);
  const askActionSignal = /\b(handle this|do this|do it|send it|call|message|buy|pay|book|schedule|submit|share)\b/.test(normalizedText);
  const askRecommendationSignal = /\b(what should i do|what do i do|recommend|best option|help me figure|don't know what to do|dont know what to do)\b/.test(normalizedText);
  const domainRules = [
    ["communication", /\b(call|message|sms|whatsapp|telegram|email|contact|draft)\b/],
    ["chronic-care", /\b(diabetes|glucose|blood sugar|hypertension|blood pressure|asthma|chronic|rpm|rtm|insulin)\b/],
    ["health", /\b(health|doctor|clinic|care|sick|mother|patient|blood pressure|medicine|medication|pharmacy|telehealth|chest pain|breathing|stroke|emergency)\b/],
    ["marketplace", /\b(agritrade|marketplace|buyer|seller|sell|selling|buy|price|maize|bags|listing|inquiry|money)\b/],
    ["learning", /\b(learn|learning|literacy|course|lesson|teach|training|certificate)\b/],
    ["workforce", /\b(work|job|jobs|career|shift|interview|transportation to work|employment)\b/],
    ["maps-location", /\b(map|route|location|transport|transportation|clinic route|directions|travel)\b/],
    ["reminders", /\b(remind|reminder|remember|every morning|daily|schedule reminder)\b/],
    ["agriculture", /\b(agriculture|crop|crops|farm|farmer|field|soil|pest|harvest|irrigation|maize|cassava|produce)\b/],
    ["general-assistant", /\b(meeting|organize|day|plan|checklist|agenda|questions|summary|prepare|decide|troubleshoot|figure this out)\b/]
  ];
  const matchedDomains = domainRules.filter(([, pattern]) => pattern.test(normalizedText)).map(([domain]) => domain);
  const agricultureDistressSignal = /\b(crops?|farm|field|harvest)\b/.test(normalizedText)
    && /\b(failing|problem|bad|dying|money|income|loss)\b/.test(normalizedText)
    && !/\b(health|doctor|clinic|medicine|medication|mother|patient|breath|breathing|sick|contact|call|message|sms|whatsapp|telegram|email)\b/.test(normalizedText);
  const inferredDomain = agricultureDistressSignal ? "agriculture" : matchedDomains[0] || "general-assistant";
  const secondaryDomains = matchedDomains.filter(domain => domain !== inferredDomain);
  let goalCategory = "prepare";
  if (cancellationSignal) goalCategory = "cancel task";
  else if (continuationSignal) goalCategory = "continue task";
  else if (modificationSignal) goalCategory = "modify task";
  else if (/\b(draft|write|compose|message)\b/.test(normalizedText)) goalCategory = "draft";
  else if (/\b(checklist|list)\b/.test(normalizedText)) goalCategory = "checklist";
  else if (/\b(summarize|summary)\b/.test(normalizedText)) goalCategory = "summarize";
  else if (/\b(questions|ask)\b/.test(normalizedText)) goalCategory = "prepare questions";
  else if (/\b(explain|teach|what is|what are)\b/.test(normalizedText)) goalCategory = "explain";
  else if (/\b(find|resources|provider|jobs|training)\b/.test(normalizedText)) goalCategory = "find resources";
  else if (/\b(call|message|contact)\b/.test(normalizedText)) goalCategory = "contact someone";
  else if (/\b(remind|reminder)\b/.test(normalizedText)) goalCategory = "remind";
  else if (/\b(route|map|transport|directions)\b/.test(normalizedText)) goalCategory = "navigate";
  else if (/\b(organize my day|day|schedule)\b/.test(normalizedText)) goalCategory = "plan";
  else if (/\b(meeting|prepare|plan|figure|handle this)\b/.test(normalizedText)) goalCategory = "plan";
  else if (askRecommendationSignal) goalCategory = "decide";
  const riskLevel = nexusOpenDialogueRiskClassifier(normalizedText, matchedDomains);
  const urgencySignals = riskLevel === "emergency"
    ? ["emergency-health-or-crisis-language"]
    : /\b(urgent|today|now|immediately|as soon as possible)\b/.test(normalizedText)
      ? ["time-sensitive"]
      : [];
  const safetySignals = [
    ...(riskLevel === "high" ? ["high-risk-action-needs-confirmation-or-prep-only"] : []),
    ...(riskLevel === "emergency" ? ["emergency-overrides-normal-workflow"] : []),
    ...(matchedDomains.includes("health") || matchedDomains.includes("chronic-care") ? ["health-prep-no-diagnosis-or-medication-change"] : []),
    ...(matchedDomains.includes("marketplace") ? ["marketplace-prep-no-transaction"] : []),
    ...(matchedDomains.includes("maps-location") ? ["location-prep-no-permission-request"] : [])
  ];
  const missingContext = [];
  if (goalCategory === "plan" && /\bmeeting\b/.test(normalizedText) && !/\b(meeting with|with my|with the|about my|about the|about a|for my team|for the team)\b/.test(normalizedText)) missingContext.push("meeting topic or audience");
  if (goalCategory === "plan" && /\borganize my day\b/.test(normalizedText)) missingContext.push("top priorities");
  if (goalCategory === "contact someone" && !/\b(john|mary|doctor|provider|seller|buyer|mother|clinic)\b/.test(normalizedText)) missingContext.push("recipient");
  if (goalCategory === "draft" && !/\b(that|this|mary|john|buyer|seller|doctor|provider)\b/.test(normalizedText)) missingContext.push("draft audience and purpose");
  if (goalCategory === "find resources" && inferredDomain === "general-assistant") missingContext.push("resource type");
  if (normalizedText.length < 8 && !continuationSignal && !cancellationSignal) missingContext.push("goal details");
  const ambiguity = missingContext.length ? "needs-one-detail" : "low";
  const confidence = riskLevel === "emergency" ? 0.98 : matchedDomains.length ? 0.78 : askRecommendationSignal || goalCategory !== "prepare" ? 0.64 : 0.48;
  return {
    commandId: nexusOpenAgentCreateId("command"),
    rawText: String(raw || ""),
    normalizedText,
    speechStyleDetected,
    explicitAssistantInvocation,
    inferredGoal: goalCategory === "cancel task" ? "Cancel the active task" : goalCategory === "continue task" ? "Continue the active task" : String(raw || "").replace(/\s+/g, " ").trim() || "Open-ended support request",
    inferredDomain,
    secondaryDomains,
    intentType: cancellationSignal ? "cancel" : continuationSignal ? "continue" : modificationSignal ? "modify" : explanationSignal ? "explain" : askActionSignal ? "ask_for_action" : askRecommendationSignal ? "ask_for_recommendation" : "new_task",
    userNeedType: goalCategory,
    goalCategory,
    confidence,
    ambiguity,
    missingContext,
    safetySignals,
    urgencySignals,
    continuationSignal,
    cancellationSignal,
    modificationSignal,
    unsupportedRequest: /\b(hack|illegal|bypass|steal|forge)\b/.test(normalizedText)
  };
}

function nexusOpenDialoguePlanSteps(interpretation = {}) {
  if (interpretation.urgencySignals?.includes("emergency-health-or-crisis-language")) {
    return [{
      stepId: "emergency-stop",
      label: "Emergency safety stop",
      purpose: "Stop normal workflow and direct the user to local emergency help.",
      actionType: "block_and_escalate_to_human_services",
      domain: "health",
      riskLevel: "emergency",
      status: "blocked",
      requiresInput: false,
      requiresConfirmation: false,
      canExecuteLocally: true,
      capabilityRequired: "emergency boundary",
      resultSummary: "Emergency warning detected. Normal workflow stopped."
    }];
  }
  const domain = interpretation.inferredDomain || "general-assistant";
  const riskLevel = nexusOpenDialogueRiskClassifier(interpretation.normalizedText, [domain, ...(interpretation.secondaryDomains || [])]);
  const base = [
    {
      stepId: "understand-goal",
      label: "Understand goal",
      purpose: "Restate the goal and identify domain, risk, and missing details.",
      actionType: "interpret",
      domain,
      riskLevel,
      status: "completed",
      requiresInput: false,
      requiresConfirmation: false,
      canExecuteLocally: true,
      capabilityRequired: "open command interpreter",
      resultSummary: "Goal interpreted."
    },
    {
      stepId: "collect-context",
      label: "Collect missing details",
      purpose: "Ask only the next useful question when context is missing.",
      actionType: "clarify",
      domain,
      riskLevel,
      status: interpretation.missingContext?.length ? "waiting_for_input" : "completed",
      requiresInput: Boolean(interpretation.missingContext?.length),
      requiresConfirmation: false,
      canExecuteLocally: true,
      capabilityRequired: "clarification",
      resultSummary: interpretation.missingContext?.length ? `Needs: ${interpretation.missingContext.join(", ")}.` : "Enough context for a first local step."
    },
    {
      stepId: "create-local-output",
      label: nexusOpenDialogueActionLabel(interpretation.goalCategory),
      purpose: "Create safe local output: plan, checklist, questions, draft, summary, or next-step guide.",
      actionType: interpretation.goalCategory || "prepare",
      domain,
      riskLevel,
      status: riskLevel === "low" || riskLevel === "medium" ? "ready" : "waiting_for_confirmation",
      requiresInput: false,
      requiresConfirmation: riskLevel === "high",
      canExecuteLocally: riskLevel !== "emergency",
      capabilityRequired: "safe local preparation",
      resultSummary: "Safe local output can be prepared without external execution."
    },
    {
      stepId: "verify-outcome",
      label: "Verify outcome",
      purpose: "Show exactly what was created, blocked, or still needed.",
      actionType: "verify",
      domain,
      riskLevel,
      status: "pending",
      requiresInput: false,
      requiresConfirmation: false,
      canExecuteLocally: true,
      capabilityRequired: "outcome verification",
      resultSummary: "Outcome verification will be logged."
    }
  ];
  if ((interpretation.secondaryDomains || []).length) {
    base.splice(2, 0, {
      stepId: "split-domains",
      label: "Split multi-domain need",
      purpose: "Separate the request into safe domain lanes and recommend the safest first step.",
      actionType: "multi_domain_plan",
      domain,
      riskLevel,
      status: "ready",
      requiresInput: false,
      requiresConfirmation: false,
      canExecuteLocally: true,
      capabilityRequired: "multi-domain reasoning",
      resultSummary: `Primary: ${domain}. Secondary: ${interpretation.secondaryDomains.join(", ")}.`
    });
  }
  return base;
}

function nexusOpenDialogueActionLabel(goalCategory = "prepare") {
  const labels = {
    plan: "Create plan",
    decide: "Prepare options",
    explain: "Explain",
    draft: "Create draft",
    summarize: "Create summary",
    checklist: "Create checklist",
    prepare: "Prepare next step",
    "prepare questions": "Prepare questions",
    "find resources": "Find resources",
    "contact someone": "Prepare contact",
    remind: "Create reminder plan",
    navigate: "Prepare route",
    learn: "Prepare learning path",
    troubleshoot: "Troubleshoot",
    "sell/buy preparation": "Prepare marketplace review",
    "health preparation": "Prepare health review",
    "emergency help": "Emergency stop",
    "continue task": "Continue task",
    "modify task": "Modify task",
    "cancel task": "Cancel task"
  };
  return labels[goalCategory] || "Prepare next step";
}

function nexusOpenDialogueLocalOutput(task = {}) {
  const category = task.goalCategory || "prepare";
  const domainText = [task.activeDomain, ...(task.secondaryDomains || [])].filter(Boolean).join(" + ") || "general";
  const missing = Array.isArray(task.missingInputs) ? task.missingInputs : [];
  if (task.status === "blocked") return task.finalSummary || `Unsafe action blocked for ${domainText}. Nexus did not execute an external action.`;
  if (task.localArtifacts?.length) return task.localArtifacts[0].outcomeMessage;
  if (task.riskLevel === "emergency") return nexusOpenDialogueEmergencyResponse();
  if (task.riskLevel === "high" && /contact someone|navigate/.test(category)) {
    return `Preparation created for ${domainText}. Nexus has not called, messaged, sent, shared location, booked, paid, or contacted anyone. A final execution gate and approved provider connection would be required before any real-world action.`;
  }
  if (category === "draft") return `Draft created locally for review. It was not sent. Domain: ${domainText}.`;
  if (category === "checklist") return `Checklist created locally. It includes context, questions, safe next steps, and blocked external actions for ${domainText}.`;
  if (category === "prepare questions") return `Questions prepared for human review. Nexus did not contact a provider, buyer, employer, or outside service.`;
  if (category === "remind") return `Reminder plan prepared. No reminder was scheduled yet. Confirm schedule details and permissions in a future gated workflow.`;
  if (category === "navigate") return `Route preparation created. Nexus did not request location permission, share location, or open external navigation.`;
  if (category === "find resources") return `Resource pathway prepared for ${domainText}. Nexus did not claim live provider availability unless a verified source is connected.`;
  if (missing.length) return `I need one detail to continue: ${missing[0]}. I created the task and will keep the workflow ready.`;
  return `Plan created for ${domainText}. Nexus prepared safe local next steps and did not execute external actions.`;
}

function nexusOpenDialogueActionAllowed(actionType = "", task = {}) {
  const localActions = [
    "create_checklist",
    "create_plan",
    "prepare_questions",
    "draft_message",
    "create_call_prep",
    "create_reminder_proposal",
    "create_clinic_visit_summary",
    "create_marketplace_listing_prep",
    "create_job_pathway",
    "create_farm_task_plan",
    "create_completion_summary",
    "revise_draft"
  ];
  if (task.riskLevel === "emergency") return "blocked";
  if (task.status === "blocked") return "blocked";
  if (localActions.includes(actionType)) return "available_local";
  return "blocked";
}

function nexusOpenDialogueInferLocalActionType(task = {}, commandText = "") {
  const text = nexusOpenAgentNormalizeText(commandText || task.sourceCommand || task.goal || "");
  const taskContextText = nexusOpenAgentNormalizeText([
    task.sourceCommand,
    task.goal,
    ...(task.collectedInputs || []).map(item => item.value)
  ].filter(Boolean).join(" "));
  if (task.riskLevel === "emergency") return "emergency_stop";
  if (/\b(buy|purchase|pay|payment|checkout|medicine purchase|buy my medication)\b/.test(text)) return "blocked_external_action";
  if (/\b(call|dial)\b/.test(text) || task.goalCategory === "contact someone") return "create_call_prep";
  if (/\b(message|draft|email|write|buyer)\b/.test(text) || task.goalCategory === "draft") return "draft_message";
  if (/\b(remind|reminder|every morning|daily|8)\b/.test(text) || task.goalCategory === "remind") return "create_reminder_proposal";
  if (/\b(question|questions|doctor|clinic visit)\b/.test(text) || task.goalCategory === "prepare questions") return task.activeDomain === "health" || task.activeDomain === "chronic-care" || /\b(doctor|clinic|medicine|medication|patient|mother|health|care)\b/.test(taskContextText) ? "create_clinic_visit_summary" : "prepare_questions";
  if (/\b(checklist|list)\b/.test(text) || task.goalCategory === "checklist") return "create_checklist";
  if (/\b(job|workforce|resume|interview|career)\b/.test(text) || task.activeDomain === "workforce") return "create_job_pathway";
  if (/\b(sell|maize|bags|listing|seller|buyer|agritrade|marketplace)\b/.test(text) || task.activeDomain === "marketplace") return "create_marketplace_listing_prep";
  if (/\b(farm|crop|irrigation|field|agriculture|harvest|soil)\b/.test(text) || task.activeDomain === "agriculture") return "create_farm_task_plan";
  if (/\b(finish|complete|summary)\b/.test(text)) return "create_completion_summary";
  return "create_plan";
}

function nexusOpenDialogueArtifactContent(actionType = "", task = {}) {
  const context = [task.sourceCommand, ...(task.collectedInputs || []).map(item => item.value)].filter(Boolean).join(" | ");
  const domain = [task.activeDomain, ...(task.secondaryDomains || [])].filter(Boolean).join(" + ") || "general";
  const templates = {
    create_checklist: [
      "Confirm the goal and desired outcome.",
      "List the facts the user already provided.",
      "Identify one safe next step.",
      "Mark blocked external actions before taking action.",
      "Ask one follow-up question if anything important is missing."
    ],
    create_plan: [
      `Goal: ${task.goal || "support the user"}.`,
      `Domain: ${domain}.`,
      "Step 1: clarify missing details if needed.",
      "Step 2: create the safest local artifact.",
      "Step 3: pause before any sensitive or external action.",
      "Step 4: verify the outcome."
    ],
    prepare_questions: [
      "What outcome do we need from this conversation?",
      "What facts should the other person know first?",
      "What decision or next step should be agreed on?",
      "What should not happen without approval?"
    ],
    draft_message: [
      "Hello, I need help with this request.",
      `Context: ${context || task.goal || "I need support."}`,
      "Can you review and tell me the safest next step?",
      "This draft has not been sent."
    ],
    create_call_prep: [
      `Call purpose: ${task.goal || "prepare a call"}.`,
      "Recipient must be confirmed before any call.",
      "Phone/provider connection must be available.",
      "Final user approval is required.",
      "No call has been placed."
    ],
    create_reminder_proposal: [
      `Reminder topic: ${task.goal || "medicine reminder"}.`,
      `Requested timing/details: ${context || "not fully provided"}.`,
      "Confirm the schedule before creating any real reminder.",
      "No reminder has been scheduled."
    ],
    create_clinic_visit_summary: [
      "Reason for visit: user-provided health concern or care planning.",
      `Context to mention: ${context || "not yet provided"}.`,
      "Questions: symptoms, timing, current medicines, red flags, and next care step.",
      "Nexus did not diagnose, change medication, contact a provider, or book an appointment."
    ],
    create_marketplace_listing_prep: [
      `Product/crop context: ${context || task.goal || "crop sale preparation"}.`,
      "Confirm quantity, location, grade/quality, target buyer, and logistics.",
      "Prepare a buyer message draft before contact.",
      "No sale, payment, purchase, or transaction occurred."
    ],
    create_job_pathway: [
      "Choose a job target or training track.",
      "List current skills and missing requirements.",
      "Prepare resume/interview checklist.",
      "Identify safe training or support resources.",
      "No job application was submitted."
    ],
    create_farm_task_plan: [
      "Check crop/field status.",
      "Prioritize water, pest, soil, harvest, and market tasks.",
      "Write today’s top three farm actions.",
      "Record questions for an extension worker or trusted source.",
      "No purchase or diagnosis occurred."
    ],
    create_completion_summary: [
      `Task: ${task.goal || "Nexus Agent task"}.`,
      `Outcome: ${task.finalSummary || "local preparation completed"}.`,
      "External execution: none.",
      "Next step: user review or future gated action."
    ],
    revise_draft: [
      "Revised draft: Thank you for reviewing this request. I need support with the details above. Please let me know the safest next step.",
      "Tone: professional, clear, and concise.",
      "This revised draft has not been sent."
    ]
  };
  return templates[actionType] || templates.create_plan;
}

function nexusOpenDialogueLocalActionTitle(actionType = "", task = {}) {
  const titles = {
    create_checklist: "Checklist",
    create_plan: "Plan",
    prepare_questions: "Questions",
    draft_message: task.activeDomain === "marketplace" ? "Buyer message draft" : "Message draft",
    create_call_prep: "Call prep card",
    create_reminder_proposal: "Reminder proposal",
    create_clinic_visit_summary: task.activeDomain === "chronic-care" ? "Chronic care prep summary" : "Clinic visit prep summary",
    create_marketplace_listing_prep: "Marketplace listing prep",
    create_job_pathway: "Workforce pathway",
    create_farm_task_plan: "Farm task plan",
    create_completion_summary: "Completion summary",
    revise_draft: "Revised draft"
  };
  return titles[actionType] || "Local preparation";
}

function nexusOpenDialogueOutcomeForAction(actionType = "", task = {}) {
  const outcomes = {
    create_checklist: "Checklist created.",
    create_plan: "Plan created.",
    prepare_questions: "Questions prepared.",
    draft_message: "Message draft created. It was not sent.",
    create_call_prep: "Call prep created. No call was placed.",
    create_reminder_proposal: "Reminder proposal created. No reminder was scheduled.",
    create_clinic_visit_summary: "Clinic visit prep summary created. Nexus did not diagnose, change medication, contact a provider, or book an appointment.",
    create_marketplace_listing_prep: "Marketplace listing prep created. No transaction, payment, purchase, or buyer contact occurred.",
    create_job_pathway: "Workforce pathway created. No job application was submitted.",
    create_farm_task_plan: "Farm task plan created. No purchase or diagnosis occurred.",
    create_completion_summary: "Task completed locally.",
    revise_draft: "Revision prepared locally. It was not sent."
  };
  if (actionType === "blocked_external_action") return "Unsafe external action blocked. Nexus did not purchase, pay, submit, contact, or execute anything.";
  if (task.riskLevel === "emergency") return nexusOpenDialogueEmergencyResponse();
  return outcomes[actionType] || "Local preparation created. No external action occurred.";
}

function nexusOpenDialogueExecuteLocalAction(task = {}, actionType = "", options = {}) {
  const now = new Date().toISOString();
  const resolvedActionType = actionType || nexusOpenDialogueInferLocalActionType(task, options.command || "");
  const capabilityStatus = nexusOpenDialogueActionAllowed(resolvedActionType, task);
  if (resolvedActionType === "blocked_external_action" || capabilityStatus === "blocked") {
    task.status = task.riskLevel === "emergency" ? "emergency_stopped" : "blocked";
    task.waitingForInput = false;
    task.waitingForConfirmation = false;
    const blockedMessage = nexusOpenDialogueOutcomeForAction(resolvedActionType, task);
    task.finalSummary = blockedMessage;
    task.blockedActions = Array.from(new Set([...(task.blockedActions || []), blockedMessage]));
    task.outcomeLog.push({ at: now, status: task.status, summary: blockedMessage, noExternalAction: true });
    task.actionHistory.push({ at: now, command: options.command || task.sourceCommand || "", action: resolvedActionType, capabilityStatus: "blocked" });
    return {
      actionType: resolvedActionType,
      status: "blocked",
      title: "Blocked external action",
      content: [blockedMessage, "I can prepare safe questions, a checklist, or a provider discussion summary instead."],
      outcomeMessage: blockedMessage,
      externalExecutionOccurred: false
    };
  }
  const artifact = {
    actionId: nexusOpenAgentCreateId("local-action"),
    actionType: resolvedActionType,
    status: "created",
    title: nexusOpenDialogueLocalActionTitle(resolvedActionType, task),
    content: nexusOpenDialogueArtifactContent(resolvedActionType, task),
    outcomeMessage: nexusOpenDialogueOutcomeForAction(resolvedActionType, task),
    externalExecutionOccurred: false,
    createdAt: now,
    capabilityStatus
  };
  task.localArtifacts = [artifact, ...(task.localArtifacts || [])].slice(0, 5);
  task.finalSummary = artifact.outcomeMessage;
  task.currentStepId = resolvedActionType === "create_completion_summary" ? "verify-outcome" : "create-local-output";
  task.completedSteps = Array.from(new Set([...(task.completedSteps || []), "collect-context", "create-local-output"]));
  if (resolvedActionType === "create_completion_summary") {
    task.status = "completed";
    task.waitingForConfirmation = false;
  } else if (task.riskLevel === "high") {
    task.status = "waiting_for_confirmation";
    task.waitingForConfirmation = true;
  } else {
    task.status = "active";
  }
  task.waitingForInput = false;
  task.updatedAt = now;
  task.outcomeLog.push({ at: now, status: task.status, summary: artifact.outcomeMessage, actionType: resolvedActionType, noExternalAction: true });
  task.actionHistory.push({ at: now, command: options.command || task.sourceCommand || "", action: resolvedActionType, capabilityStatus });
  return artifact;
}

function nexusHigherIntelligenceMemoryMatches(interpretation = {}) {
  const normalized = interpretation.normalizedText || "";
  const activeTask = nexusOpenDialogueActiveTask();
  const tasks = nexusOpenDialogueAgentState.tasks || [];
  const domainMatches = tasks
    .filter(task => task.activeDomain === interpretation.inferredDomain || (interpretation.secondaryDomains || []).includes(task.activeDomain))
    .slice(0, 3)
    .map(task => ({
      taskId: task.taskId,
      goal: task.goal,
      status: task.status,
      domain: task.activeDomain,
      lastOutcome: task.finalSummary || ""
    }));
  const textMatches = tasks
    .filter(task => normalized && nexusOpenAgentNormalizeText(`${task.goal} ${task.finalSummary}`).split(" ").some(word => word.length > 4 && normalized.includes(word)))
    .slice(0, 2)
    .map(task => ({ taskId: task.taskId, goal: task.goal, status: task.status }));
  return {
    activeTask: activeTask ? {
      taskId: activeTask.taskId,
      goal: activeTask.goal,
      status: activeTask.status,
      waitingForInput: Boolean(activeTask.waitingForInput),
      waitingForConfirmation: Boolean(activeTask.waitingForConfirmation)
    } : null,
    lastDraftAvailable: Boolean(nexusOpenDialogueAgentState.lastDraft),
    lastOutcome: nexusOpenDialogueAgentState.lastOutcome || "",
    domainMatches,
    textMatches
  };
}

function nexusHigherIntelligenceCapabilityChoice(interpretation = {}, memoryMatches = {}) {
  const matrix = nexusOpenDialogueCapabilityMatrix();
  const probeTask = {
    activeDomain: interpretation.inferredDomain,
    secondaryDomains: interpretation.secondaryDomains || [],
    goalCategory: interpretation.goalCategory,
    riskLevel: nexusOpenDialogueRiskClassifier(interpretation.normalizedText, [interpretation.inferredDomain, ...(interpretation.secondaryDomains || [])]),
    sourceCommand: interpretation.rawText,
    goal: interpretation.inferredGoal,
    status: "active",
    collectedInputs: memoryMatches.activeTask ? [{ value: memoryMatches.activeTask.goal }] : []
  };
  const selectedActionType = nexusOpenDialogueInferLocalActionType(probeTask, interpretation.rawText);
  const capabilityStatus = nexusOpenDialogueActionAllowed(selectedActionType, probeTask);
  const unavailableCapabilities = matrix.unavailable_blocked.slice();
  if (probeTask.riskLevel === "high") unavailableCapabilities.push("immediate external execution without final gate");
  if (probeTask.riskLevel === "emergency") unavailableCapabilities.push("normal workflow during emergency language");
  return {
    selectedActionType,
    capabilityStatus,
    selectedCapability: capabilityStatus === "available_local" ? selectedActionType : "blocked_or_prepare_only",
    availableCapabilities: [...matrix.available_local, ...matrix.available_handoff],
    unavailableCapabilities: Array.from(new Set(unavailableCapabilities)),
    canExecuteNow: capabilityStatus === "available_local" && probeTask.riskLevel !== "high" && probeTask.riskLevel !== "emergency",
    canPrepareNow: probeTask.riskLevel !== "emergency",
    requiresConfirmation: probeTask.riskLevel === "high",
    requiresEmergencyStop: probeTask.riskLevel === "emergency"
  };
}

function nexusHigherIntelligenceSelfCheck(interpretation = {}, capabilityChoice = {}) {
  const blockedClaims = [
    "message sent",
    "call placed",
    "appointment booked",
    "provider contacted",
    "payment made",
    "medicine purchased",
    "emergency dispatched",
    "reminder scheduled",
    "location used"
  ];
  const risk = nexusOpenDialogueRiskClassifier(interpretation.normalizedText, [interpretation.inferredDomain, ...(interpretation.secondaryDomains || [])]);
  return {
    passed: true,
    noFalseExecutionClaims: true,
    executionAuthority: false,
    providerHandoffAuthorized: false,
    emergencyOverride: risk === "emergency",
    needsFinalGate: risk === "high",
    blockedClaims,
    decision: risk === "emergency"
      ? "stop_normal_workflow"
      : risk === "high"
        ? "prepare_only_until_final_gate"
        : capabilityChoice.canExecuteNow
          ? "safe_local_execution_allowed"
          : "prepare_or_clarify_only"
  };
}

function nexusHigherIntelligenceReason(command = "", interpretation = nexusOpenDialogueInterpretCommand(command)) {
  const memoryMatches = nexusHigherIntelligenceMemoryMatches(interpretation);
  const capabilityChoice = nexusHigherIntelligenceCapabilityChoice(interpretation, memoryMatches);
  const risk = nexusOpenDialogueRiskClassifier(interpretation.normalizedText, [interpretation.inferredDomain, ...(interpretation.secondaryDomains || [])]);
  const proposedWorkflow = nexusOpenDialoguePlanSteps(interpretation).map(step => ({
    stepId: step.stepId,
    label: step.label,
    status: step.status,
    riskLevel: step.riskLevel,
    actionType: step.actionType,
    requiresInput: Boolean(step.requiresInput),
    requiresConfirmation: Boolean(step.requiresConfirmation),
    canExecuteLocally: Boolean(step.canExecuteLocally)
  }));
  const selfCheck = nexusHigherIntelligenceSelfCheck(interpretation, capabilityChoice);
  const immediateActions = capabilityChoice.canExecuteNow ? [capabilityChoice.selectedActionType] : [];
  const confirmationActions = capabilityChoice.requiresConfirmation ? [capabilityChoice.selectedActionType] : [];
  const blockedActions = [
    ...(risk === "emergency" ? ["normal workflow blocked by emergency safety stop"] : []),
    ...(risk === "high" ? ["external execution blocked until final gate, provider readiness, audit, and explicit approval"] : []),
    ...capabilityChoice.unavailableCapabilities.filter(item => /payment|purchase|diagnosis|emergency|unconfirmed|fake/.test(item)).slice(0, 5)
  ];
  const multiDomain = (interpretation.secondaryDomains || []).length > 0;
  const nextBestMove = risk === "emergency"
    ? "Stop normal workflow and direct the user to local emergency help."
    : interpretation.missingContext?.length
      ? `Ask for ${interpretation.missingContext[0]}.`
      : capabilityChoice.requiresConfirmation
        ? "Prepare a local review card and wait for a future final execution gate."
        : multiDomain
          ? "Split the request into safe domain lanes and create the first local artifact."
          : "Create the safest local artifact and verify no external action occurred.";
  return {
    reasoningId: nexusOpenAgentCreateId("higher-reasoning"),
    rawInput: interpretation.rawText,
    normalizedInput: interpretation.normalizedText,
    inputType: interpretation.explicitAssistantInvocation ? "assistant_invoked" : "typed_or_follow_up",
    taskType: interpretation.cancellationSignal ? "cancellation" : interpretation.continuationSignal ? "follow_up" : interpretation.modificationSignal ? "modification" : multiDomain ? "multi_domain_workflow" : interpretation.intentType || "new_task",
    goal: interpretation.inferredGoal,
    goalCategory: interpretation.goalCategory,
    primaryDomain: interpretation.inferredDomain,
    secondaryDomains: interpretation.secondaryDomains || [],
    urgency: interpretation.urgencySignals?.length ? "urgent" : "normal",
    risk,
    confidence: interpretation.confidence,
    uncertaintyReasons: interpretation.missingContext?.length ? interpretation.missingContext : interpretation.ambiguity === "low" ? [] : [interpretation.ambiguity],
    missingInputs: interpretation.missingContext || [],
    memoryMatches,
    availableCapabilities: capabilityChoice.availableCapabilities,
    unavailableCapabilities: capabilityChoice.unavailableCapabilities,
    proposedWorkflow,
    immediateActions,
    confirmationActions,
    blockedActions: Array.from(new Set(blockedActions)),
    nextBestMove,
    capabilityChoice,
    selfCheck,
    userFacingDecision: `${nextBestMove} Nexus will not fake calls, messages, payments, location, provider contact, medical action, reminders, or emergency dispatch.`
  };
}

function nexusHigherIntelligenceRecordLearning(reasoning = {}, task = {}) {
  const signal = {
    at: new Date().toISOString(),
    reasoningId: reasoning.reasoningId || "",
    taskId: task.taskId || "",
    domain: reasoning.primaryDomain || task.activeDomain || "general-assistant",
    risk: reasoning.risk || task.riskLevel || "low",
    selectedCapability: reasoning.capabilityChoice?.selectedCapability || "",
    outcome: task.finalSummary || reasoning.nextBestMove || "",
    noExternalAction: true
  };
  nexusOpenDialogueAgentState.learningSignals = [signal, ...(nexusOpenDialogueAgentState.learningSignals || [])].slice(0, 12);
  nexusOpenDialogueAgentState.lastHigherReasoning = reasoning;
  return signal;
}

function nexusPersistentTaskMemoryLoad() {
  return {
    schemaVersion: "nexus-persistent-task-memory.v1",
    activeWorkflowId: null,
    recentWorkflows: [],
    lastDraft: null,
    lastChecklist: null,
    lastPlan: null,
    lastQuestionSet: null,
    lastPendingConfirmation: null,
    lastBlockedAction: null,
    collectedFacts: [],
    completedTasks: [],
    canceledTasks: [],
    modifiedOutputs: [],
    outcomeHistory: [],
    nextRecommendedAction: ""
  };
}

function nexusPersistentTaskMemoryCanPersist(task = {}) {
  const domains = [task.activeDomain, ...(task.secondaryDomains || [])].filter(Boolean);
  if (["high", "emergency"].includes(task.riskLevel)) return false;
  return !domains.some(domain => ["health", "chronic-care", "maps-location", "communication"].includes(domain));
}

function nexusPersistentTaskMemorySnapshot(task = {}) {
  const latestArtifact = task.localArtifacts?.[0] || null;
  return {
    taskId: task.taskId,
    updatedAt: task.updatedAt || new Date().toISOString(),
    status: task.status,
    goal: task.goal || "",
    goalCategory: task.goalCategory || "prepare",
    activeDomain: task.activeDomain || "general-assistant",
    secondaryDomains: task.secondaryDomains || [],
    riskLevel: task.riskLevel || "low",
    currentStepId: task.currentStepId || "",
    completedSteps: (task.completedSteps || []).slice(0, 8),
    nextRecommendedAction: task.higherReasoning?.nextBestMove || task.finalSummary || "",
    latestArtifactType: latestArtifact?.actionType || "",
    latestArtifactTitle: latestArtifact?.title || "",
    noExecutionAuthorized: true,
    executionAuthority: false,
    providerHandoffAuthorized: false
  };
}

function nexusPersistentTaskMemorySave() {
  const memory = nexusOpenDialogueAgentState.persistentTaskMemory || nexusPersistentTaskMemoryLoad();
  nexusOpenDialogueAgentState.persistentTaskMemory = memory;
  return false;
}

function nexusPersistentTaskMemoryRecord(task = {}) {
  if (!task?.taskId) return nexusOpenDialogueAgentState.persistentTaskMemory || nexusPersistentTaskMemoryLoad();
  const memory = nexusOpenDialogueAgentState.persistentTaskMemory || nexusPersistentTaskMemoryLoad();
  const snapshot = nexusPersistentTaskMemorySnapshot(task);
  memory.activeWorkflowId = task.status === "completed" || task.status === "canceled" || task.status === "emergency_stopped" ? null : task.taskId;
  memory.recentWorkflows = [snapshot, ...(memory.recentWorkflows || []).filter(item => item.taskId !== task.taskId)].slice(0, 8);
  memory.nextRecommendedAction = snapshot.nextRecommendedAction;
  if (!memory.lastPlan || ["plan", "prepare", "find resources", "navigate", "contact someone"].includes(task.goalCategory)) {
    memory.lastPlan = {
      taskId: task.taskId,
      actionType: "workflow_plan",
      title: task.goal || "Nexus local workflow plan",
      summary: task.finalSummary || snapshot.nextRecommendedAction || "Local workflow plan ready for review.",
      updatedAt: task.updatedAt,
      noExecutionAuthorized: true
    };
  }
  if (task.localArtifacts?.length) {
    const artifact = task.localArtifacts[0];
    const artifactSnapshot = {
      taskId: task.taskId,
      actionType: artifact.actionType,
      title: artifact.title,
      summary: artifact.outcomeMessage,
      updatedAt: task.updatedAt,
      noExecutionAuthorized: true
    };
    if (artifact.actionType === "draft_message" || artifact.actionType === "revise_draft") memory.lastDraft = artifactSnapshot;
    if (artifact.actionType === "create_checklist") memory.lastChecklist = artifactSnapshot;
    if (artifact.actionType === "create_plan" || artifact.actionType === "create_farm_task_plan") memory.lastPlan = artifactSnapshot;
    if (artifact.actionType === "prepare_questions") memory.lastQuestionSet = artifactSnapshot;
    if (artifact.actionType === "revise_draft") memory.modifiedOutputs = [artifactSnapshot, ...(memory.modifiedOutputs || [])].slice(0, 8);
  }
  if (task.waitingForConfirmation) memory.lastPendingConfirmation = snapshot;
  if (task.blockedActions?.length) memory.lastBlockedAction = { ...snapshot, blockedActions: task.blockedActions.slice(-3) };
  if (task.collectedInputs?.length && nexusPersistentTaskMemoryCanPersist(task)) {
    const facts = task.collectedInputs.map(input => ({
      taskId: task.taskId,
      value: input.value,
      collectedAt: input.at,
      noExecutionAuthorized: true
    }));
    memory.collectedFacts = [...facts, ...(memory.collectedFacts || [])].slice(0, 20);
  }
  if (task.status === "completed") memory.completedTasks = [snapshot, ...(memory.completedTasks || [])].slice(0, 8);
  if (task.status === "canceled") memory.canceledTasks = [snapshot, ...(memory.canceledTasks || [])].slice(0, 8);
  memory.outcomeHistory = [{
    taskId: task.taskId,
    status: task.status,
    summary: task.finalSummary || "",
    at: task.updatedAt,
    persistedSensitiveDetails: false,
    noExecutionAuthorized: true
  }, ...(memory.outcomeHistory || [])].slice(0, 20);
  if (!nexusPersistentTaskMemoryCanPersist(task)) {
    memory.collectedFacts = (memory.collectedFacts || []).filter(item => item.taskId !== task.taskId);
  }
  nexusOpenDialogueAgentState.persistentTaskMemory = memory;
  nexusPersistentTaskMemorySave();
  return memory;
}

function nexusPersistentTaskMemoryRecall(kind = "active") {
  const memory = nexusOpenDialogueAgentState.persistentTaskMemory || nexusPersistentTaskMemoryLoad();
  if (kind === "active") return memory.recentWorkflows?.find(item => item.taskId === memory.activeWorkflowId) || memory.recentWorkflows?.[0] || null;
  if (kind === "plan") return memory.lastPlan;
  if (kind === "draft") return memory.lastDraft;
  if (kind === "checklist") return memory.lastChecklist;
  if (kind === "questions") return memory.lastQuestionSet;
  if (kind === "recent") return memory.recentWorkflows || [];
  return null;
}

function nexusRealActionAdaptersRegistry() {
  return [
    { adapterId: "messaging.adapter", domain: "communication", actionPattern: /\b(message|sms|whatsapp|telegram|email|send|contact)\b/, implemented: false, requiresConfirmation: true, requiresPermission: true, falseClaimGuard: "No message was sent." },
    { adapterId: "call.adapter", domain: "communication", actionPattern: /\b(call|dial)\b/, implemented: false, requiresConfirmation: true, requiresPermission: true, falseClaimGuard: "No call was placed." },
    { adapterId: "reminder-calendar.adapter", domain: "reminders", actionPattern: /\b(remind|reminder|calendar|every morning|tomorrow|friday)\b/, implemented: false, requiresConfirmation: true, requiresPermission: false, falseClaimGuard: "No reminder was scheduled." },
    { adapterId: "map-location.adapter", domain: "maps-location", actionPattern: /\b(map|route|near me|location|directions|transport)\b/, implemented: false, requiresConfirmation: true, requiresPermission: true, falseClaimGuard: "No live location was used." },
    { adapterId: "appointment-request.adapter", domain: "health", actionPattern: /\b(appointment|schedule|book)\b/, implemented: false, requiresConfirmation: true, requiresPermission: true, falseClaimGuard: "No appointment was booked." },
    { adapterId: "provider-directory.adapter", domain: "health", actionPattern: /\b(provider|doctor|clinic|care team|pharmacy)\b/, implemented: false, requiresConfirmation: true, requiresPermission: true, falseClaimGuard: "No provider was contacted." },
    { adapterId: "marketplace-listing.adapter", domain: "marketplace", actionPattern: /\b(sell|listing|buyer|seller|marketplace|agritrade|maize|bags)\b/, implemented: false, requiresConfirmation: true, requiresPermission: false, falseClaimGuard: "No marketplace transaction occurred." },
    { adapterId: "payment.adapter", domain: "marketplace", actionPattern: /\b(pay|payment|purchase|buy|checkout)\b/, implemented: false, requiresConfirmation: true, requiresPermission: true, falseClaimGuard: "No payment was made." },
    { adapterId: "offline-sync.adapter", domain: "general-assistant", actionPattern: /\b(offline|sync|low bandwidth|no internet)\b/, implemented: false, requiresConfirmation: true, requiresPermission: false, falseClaimGuard: "No sync was performed." },
    { adapterId: "health-summary.adapter", domain: "health", actionPattern: /\b(summary|doctor visit|physician report|mother|medicine|medication)\b/, implemented: true, requiresConfirmation: false, requiresPermission: false, falseClaimGuard: "A local health summary can be prepared; no diagnosis or provider contact occurred." },
    { adapterId: "workforce-job-matching.adapter", domain: "workforce", actionPattern: /\b(job|work|career|training|interview)\b/, implemented: true, requiresConfirmation: false, requiresPermission: false, falseClaimGuard: "Local job-pathway prep can run; no application was submitted." }
  ];
}

function nexusRealActionAdapterSelect(interpretation = {}) {
  const text = interpretation.normalizedText || "";
  const adapters = nexusRealActionAdaptersRegistry();
  return adapters.find(adapter => adapter.actionPattern.test(text))
    || adapters.find(adapter => adapter.domain === interpretation.inferredDomain)
    || { adapterId: "local-preparation.adapter", domain: interpretation.inferredDomain || "general-assistant", implemented: true, requiresConfirmation: false, requiresPermission: false, falseClaimGuard: "Only local preparation occurred." };
}

function nexusRealActionAdapterPrepare(interpretation = {}, task = {}) {
  const adapter = nexusRealActionAdapterSelect(interpretation);
  const externalRisk = adapter.requiresConfirmation || adapter.requiresPermission || task.riskLevel === "high" || task.riskLevel === "emergency";
  const canExecuteNow = Boolean(adapter.implemented && !externalRisk && task.riskLevel !== "emergency");
  return {
    adapterId: adapter.adapterId,
    domain: adapter.domain,
    implemented: Boolean(adapter.implemented),
    requiresConfirmation: Boolean(adapter.requiresConfirmation),
    requiresPermission: Boolean(adapter.requiresPermission),
    selectedFor: interpretation.goalCategory || task.goalCategory || "prepare",
    canExecuteNow,
    executed: false,
    fallbackOnly: !canExecuteNow,
    prepareFallback: canExecuteNow ? "Safe local capability is available." : "Prepare a local review card, draft, checklist, or summary instead.",
    falseClaimGuard: adapter.falseClaimGuard,
    outcomeMessage: canExecuteNow
      ? "Adapter capability is local-only and safe; no external action occurred."
      : `${adapter.falseClaimGuard} Nexus prepared review-only fallback guidance.`,
    noExecutionAuthorized: true,
    executionAuthority: false,
    providerHandoffAuthorized: false
  };
}

function nexusRealActionAdapterExecute(decision = {}) {
  return {
    adapterId: decision.adapterId || "unknown.adapter",
    attempted: false,
    executed: false,
    outcomeMessage: decision.outcomeMessage || "No adapter execution occurred.",
    noExecutionAuthorized: true,
    executionAuthority: false,
    providerHandoffAuthorized: false
  };
}

function nexusVoiceCommandLoopInitialState() {
  return {
    voiceModeReady: true,
    lastHeardCommand: "",
    normalizedCommand: "",
    commandConfidence: 0,
    routedToBrain: false,
    pendingConfirmation: false,
    spokenStyleResponse: "Nexus is ready for a voice-style command.",
    nextPrompt: "Say or type what you need next.",
    lastIntent: "idle",
    executionAuthority: false,
    providerHandoffAuthorized: false
  };
}

let nexusVoiceCommandLoopState = nexusVoiceCommandLoopInitialState();

function nexusVoiceCommandLoopNormalizeCommand(command = "") {
  const raw = String(command || "").trim();
  const lowered = raw.toLowerCase();
  const wakeMatched = /^(hey\s+)?nexus[,\s]+/i.test(raw);
  let normalized = raw
    .replace(/^(hey\s+)?nexus[,\s]+/i, "")
    .replace(/^can\s+you\s+/i, "")
    .replace(/^could\s+you\s+/i, "")
    .replace(/^please\s+/i, "")
    .replace(/^do\s+this[,\s:]*/i, "")
    .trim();
  if (!normalized && raw) normalized = raw;
  const commandIntent = /\b(continue|next|resume)\b/.test(lowered) ? "continue"
    : /\b(cancel|stop|nevermind|never mind)\b/.test(lowered) ? "cancel"
      : /\b(confirm|yes|do it|send it)\b/.test(lowered) ? "confirm"
        : /\b(shorter|professional|rewrite|change|modify)\b/.test(lowered) ? "modify"
          : /\b(call|message|send|whatsapp|telegram|sms|email)\b/.test(lowered) ? "communication-boundary"
            : /\b(chest pain|cannot breathe|trouble breathing|emergency)\b/.test(lowered) ? "emergency"
              : raw ? "task-request" : "idle";
  const confidence = raw ? Math.min(0.98, (wakeMatched ? 0.34 : 0.16) + (normalized.length > 5 ? 0.42 : 0.2) + (commandIntent !== "task-request" ? 0.16 : 0.08)) : 0;
  return {
    rawCommand: raw,
    normalizedCommand: normalized,
    wakeMatched,
    commandIntent,
    commandConfidence: Number(confidence.toFixed(2)),
    voiceModeReady: true,
    executionAuthority: false,
    providerHandoffAuthorized: false
  };
}

function nexusVoiceCommandLoopNextPrompt(intent = "task-request", result = {}) {
  if (intent === "emergency") return "Get local emergency help now. I can stay in review-only support mode.";
  if (intent === "confirm") return result?.task?.waitingForConfirmation ? "Review the confirmation details first." : "Tell me what action you want to confirm.";
  if (intent === "cancel") return "Tell me what you want to do next.";
  if (intent === "communication-boundary") return "I can prepare the communication, but I will not send or call without the required gate.";
  if (intent === "modify") return "Tell me what tone, length, or detail to change.";
  if (intent === "continue") return "I can continue the current local workflow.";
  return "Tell me the goal, missing detail, or next step.";
}

function nexusVoiceCommandLoopSpokenStyleResponse(result = {}, loop = {}) {
  const response = String(result?.response || "").trim();
  if (loop.commandIntent === "emergency") {
    return "This sounds urgent. Please contact local emergency services now. I will not dispatch or contact anyone automatically.";
  }
  if (loop.commandIntent === "communication-boundary") {
    return "I can prepare that safely for review. I will not send, call, or contact anyone automatically.";
  }
  if (loop.commandIntent === "confirm" && !result?.task?.waitingForConfirmation) {
    return "I heard a confirmation-style command, but there is no approved final execution gate active.";
  }
  if (response) return response;
  return "I heard you. I can help prepare the next safe step.";
}

function nexusVoiceCommandLoopUpdate(command = "", options = {}) {
  const parsed = nexusVoiceCommandLoopNormalizeCommand(command);
  nexusVoiceCommandLoopState = {
    ...nexusVoiceCommandLoopState,
    ...parsed,
    routedToBrain: Boolean(options.routedToBrain),
    pendingConfirmation: false,
    spokenStyleResponse: "Routing through Nexus intelligence.",
    nextPrompt: nexusVoiceCommandLoopNextPrompt(parsed.commandIntent),
    lastHeardCommand: parsed.rawCommand,
    lastIntent: parsed.commandIntent,
    executionAuthority: false,
    providerHandoffAuthorized: false
  };
  return nexusVoiceCommandLoopState;
}

function nexusVoiceCommandLoopComplete(loop = nexusVoiceCommandLoopState, result = {}) {
  const pendingConfirmation = Boolean(result?.task?.waitingForConfirmation);
  nexusVoiceCommandLoopState = {
    ...nexusVoiceCommandLoopState,
    routedToBrain: Boolean(result?.handled),
    pendingConfirmation,
    spokenStyleResponse: nexusVoiceCommandLoopSpokenStyleResponse(result, loop),
    nextPrompt: nexusVoiceCommandLoopNextPrompt(loop.lastIntent || loop.commandIntent, result),
    executionAuthority: false,
    providerHandoffAuthorized: false
  };
  return nexusVoiceCommandLoopState;
}

function nexusReminderCalendarParseSchedule(command = "") {
  const text = String(command || "").toLowerCase();
  if (/\bevery morning\b/.test(text) && /\b8\b|\beight\b/.test(text)) return { scheduleText: "Every morning at 8", parsedTime: "recurring:morning:08:00" };
  if (/\bevery morning\b/.test(text)) return { scheduleText: "Every morning", parsedTime: "recurring:morning" };
  if (/\btomorrow\b/.test(text)) return { scheduleText: "Tomorrow", parsedTime: "relative:tomorrow" };
  if (/\bfriday morning\b/.test(text)) return { scheduleText: "Friday morning", parsedTime: "weekly:friday:morning" };
  if (/\bfriday\b/.test(text)) return { scheduleText: "Friday", parsedTime: "weekly:friday" };
  if (/\b8\b|\beight\b/.test(text)) return { scheduleText: "8:00", parsedTime: "time:08:00" };
  return { scheduleText: "", parsedTime: "" };
}

function nexusReminderCalendarPrepare(interpretation = {}, task = {}) {
  const text = String(interpretation.normalizedText || interpretation.rawText || task.sourceCommand || "").toLowerCase();
  const isReminder = /\b(remind|reminder|remember|calendar|every morning|tomorrow|friday|appointment|clinic visit|meeting|follow-up)\b/.test(text)
    || task.goalCategory === "remind"
    || task.actionAdapterDecision?.adapterId === "reminder-calendar.adapter";
  if (!isReminder) return null;
  const schedule = nexusReminderCalendarParseSchedule(text);
  const domain = /\b(medicine|medication|clinic|doctor|appointment)\b/.test(text) ? "health"
    : /\b(irrigation|farm|crop|field)\b/.test(text) ? "agriculture"
      : /\b(meeting|interview|job|work)\b/.test(text) ? "workforce"
        : task.activeDomain || interpretation.inferredDomain || "general-assistant";
  const riskLevel = domain === "health" ? "medium" : "low";
  const title = /\bmedicine|medication\b/.test(text) ? "Medicine reminder proposal"
    : /\bclinic|doctor|appointment\b/.test(text) ? "Clinic visit reminder proposal"
      : /\birrigation|farm|crop|field\b/.test(text) ? "Farm task reminder proposal"
        : /\bmeeting|interview\b/.test(text) ? "Meeting reminder proposal"
          : "Reminder proposal";
  return {
    reminderId: nexusOpenAgentCreateId("reminder-proposal"),
    title,
    scheduleText: schedule.scheduleText || "Schedule detail needed",
    parsedTime: schedule.parsedTime || "missing",
    domain,
    riskLevel,
    confirmationRequired: true,
    scheduled: false,
    fallbackOnly: true,
    outcomeMessage: "Reminder proposal prepared locally. No reminder was scheduled.",
    executionAuthority: false,
    providerHandoffAuthorized: false,
    noExecutionAuthorized: true
  };
}

function nexusMapLocationExtractFallback(command = "") {
  const raw = String(command || "");
  const explicit = raw.match(/\b(?:in|near|around|for)\s+([A-Z][A-Za-z .'-]{2,}(?:,\s*[A-Z]{2})?)/);
  if (explicit?.[1]) return explicit[1].trim().replace(/[?.!,]+$/, "");
  const lower = raw.toLowerCase();
  if (/\bstockton\b/.test(lower)) return "Stockton, CA";
  if (/\bkenya\b/.test(lower)) return "Kenya";
  if (/\buganda\b/.test(lower)) return "Uganda";
  if (/\bghana\b/.test(lower)) return "Ghana";
  if (/\bnigeria\b/.test(lower)) return "Nigeria";
  return "";
}

function nexusMapLocationPermissionPrepare(interpretation = {}, task = {}) {
  const text = String(interpretation.normalizedText || interpretation.rawText || task.sourceCommand || "").toLowerCase();
  const isLocationRequest = /\b(map|route|near me|location|directions|transport|clinic near|training near|market near|use my location)\b/.test(text)
    || task.activeDomain === "maps-location"
    || task.actionAdapterDecision?.adapterId === "map-location.adapter";
  if (!isLocationRequest) return null;
  const requestedResource = /\bclinic|doctor|provider\b/.test(text) ? "clinic/provider"
    : /\btraining|course|school|learning\b/.test(text) ? "training/resource"
      : /\bmarket|buyer|seller|agritrade\b/.test(text) ? "marketplace/market"
        : /\btransport|ride|bus|route\b/.test(text) ? "transport route"
          : "map/location support";
  const permissionRequired = /\b(near me|my location|use my location|current location|gps)\b/.test(text);
  const fallbackLocation = nexusMapLocationExtractFallback(interpretation.rawText || text);
  return {
    locationRequestId: nexusOpenAgentCreateId("location-plan"),
    requestedResource,
    permissionRequired,
    permissionGranted: false,
    locationSource: fallbackLocation ? "explicit-text" : "not-collected",
    fallbackLocation: fallbackLocation || "city or region needed",
    mapActionAvailable: false,
    routePrepared: Boolean(fallbackLocation),
    outcomeMessage: permissionRequired
      ? "Location planning prepared. Live location was not used and permission was not requested."
      : "Location planning prepared from text only. No live route was launched.",
    executionAuthority: false,
    providerHandoffAuthorized: false,
    noLocationPermissionRequested: true,
    noExecutionAuthorized: true
  };
}

function nexusMessagingCallHandoffPrepare(interpretation = {}, task = {}) {
  const text = String(interpretation.normalizedText || interpretation.rawText || task.sourceCommand || "").toLowerCase();
  const adapterId = task.actionAdapterDecision?.adapterId || "";
  const isCommunication = /\b(message|sms|whatsapp|telegram|email|send|call|dial|contact)\b/.test(text)
    || adapterId === "messaging.adapter"
    || adapterId === "call.adapter";
  if (!isCommunication) return null;
  const type = /\b(call|dial)\b/.test(text) || adapterId === "call.adapter" ? "call" : "message";
  const recipientMatch = String(interpretation.rawText || "").match(/\b(?:message|call|contact|send(?:\s+\w+)?\s+to)\s+([A-Z][A-Za-z .'-]{1,40})/);
  const recipient = recipientMatch?.[1]?.trim().replace(/[?.!,]+$/, "") || (/\bdoctor|provider|clinic\b/.test(text) ? "provider/clinic" : /\bbuyer|seller\b/.test(text) ? "buyer/seller" : "recipient needed");
  const draftText = type === "call"
    ? `Call preparation note for ${recipient}. Review purpose, recipient, and permission before any real call.`
    : `Draft message for ${recipient}. Review and confirm before any real send.`;
  return {
    communicationId: nexusOpenAgentCreateId("communication-prep"),
    type,
    recipient,
    draftText,
    confirmationRequired: true,
    adapterImplemented: Boolean(task.actionAdapterDecision?.implemented),
    executed: false,
    fallbackOnly: !task.actionAdapterDecision?.implemented,
    outcomeMessage: type === "call" ? "Call preparation created. No call was placed." : "Message draft prepared. No message was sent.",
    executionAuthority: false,
    providerHandoffAuthorized: false,
    noExecutionAuthorized: true
  };
}

function nexusProviderDirectoryIntegrationPrepare(interpretation = {}, task = {}) {
  const text = String(interpretation.normalizedText || interpretation.rawText || task.sourceCommand || "").toLowerCase();
  const isProviderRequest = /\b(provider|doctor|clinic|care team|pharmacy|medication|medicine|diabetes care|appointment request|telehealth|community health worker|chw)\b/.test(text)
    || task.actionAdapterDecision?.adapterId === "provider-directory.adapter";
  if (!isProviderRequest) return null;
  const careNeed = /\bdiabetes\b/.test(text) ? "diabetes care"
    : /\bpharmacy|medication|medicine\b/.test(text) ? "pharmacy questions"
      : /\bmother|parent|family\b/.test(text) ? "family care support"
        : /\bappointment\b/.test(text) ? "appointment request preparation"
          : "provider/clinic support";
  const locationInput = nexusMapLocationExtractFallback(interpretation.rawText || text) || "city or region needed";
  const handoffDraft = `Prepare provider questions for ${careNeed}. Review location, consent, and recipient before any contact.`;
  return {
    providerRequestId: nexusOpenAgentCreateId("provider-request"),
    careNeed,
    locationInput,
    verifiedProviderDataAvailable: false,
    providerOptions: [],
    handoffDraft,
    confirmationRequired: true,
    contacted: false,
    outcomeMessage: "Provider search checklist prepared. No provider was contacted.",
    executionAuthority: false,
    providerHandoffAuthorized: false,
    noExecutionAuthorized: true
  };
}

function nexusOfflineIntelligenceModePrepare(interpretation = {}, task = {}) {
  const text = String(interpretation.normalizedText || interpretation.rawText || task.sourceCommand || "").toLowerCase();
  const isOfflineRequest = /\b(offline|no internet|low bandwidth|without internet|sync later|send packet|offline packet)\b/.test(text)
    || task.actionAdapterDecision?.adapterId === "offline-sync.adapter";
  if (!isOfflineRequest) return null;
  const queuedDrafts = [];
  if (/\b(message|send|call|provider|buyer|seller|handoff|sync)\b/.test(text)) queuedDrafts.push("Review-only handoff draft");
  if (/\b(remind|reminder|medicine|clinic|appointment)\b/.test(text)) queuedDrafts.push("Reminder proposal");
  if (/\bmarket|sell|maize|crop|listing\b/.test(text)) queuedDrafts.push("Marketplace listing draft");
  const localGuidanceAvailable = /\b(agriculture|crop|farm|chronic|care|clinic|market|marketplace|listing|maize|job|workforce|lesson|learning|message|call|remind|reminder)\b/.test(text);
  return {
    offlineModeActive: true,
    networkRequired: false,
    localGuidanceAvailable,
    queuedDrafts,
    syncAvailable: false,
    externalExecutionBlocked: true,
    outcomeMessage: "Offline guidance prepared locally. No sync, send, call, provider contact, payment, route, or external action occurred.",
    executionAuthority: false,
    providerHandoffAuthorized: false,
    noExecutionAuthorized: true
  };
}

function nexusOpenDialogueCreateTask(interpretation = {}, previousTask = null) {
  const now = new Date().toISOString();
  const task = {
    taskId: previousTask?.taskId || nexusOpenAgentCreateId("open-task"),
    createdAt: previousTask?.createdAt || now,
    updatedAt: now,
    status: interpretation.urgencySignals?.includes("emergency-health-or-crisis-language")
      ? "emergency_stopped"
      : interpretation.missingContext?.length
        ? "waiting_for_input"
        : interpretation.intentType === "ask_for_action" && nexusOpenDialogueRiskClassifier(interpretation.normalizedText, [interpretation.inferredDomain]) === "high"
          ? "waiting_for_confirmation"
          : "active",
    sourceCommand: interpretation.rawText,
    activeDomain: interpretation.inferredDomain,
    secondaryDomains: interpretation.secondaryDomains || [],
    goal: interpretation.inferredGoal,
    goalCategory: interpretation.goalCategory,
    userIntent: interpretation.intentType,
    riskLevel: nexusOpenDialogueRiskClassifier(interpretation.normalizedText, [interpretation.inferredDomain, ...(interpretation.secondaryDomains || [])]),
    urgencyLevel: interpretation.urgencySignals?.length ? "urgent" : "normal",
    confidence: interpretation.confidence,
    ambiguity: interpretation.ambiguity,
    planSteps: nexusOpenDialoguePlanSteps(interpretation),
    currentStepId: interpretation.missingContext?.length ? "collect-context" : "create-local-output",
    completedSteps: ["understand-goal"],
    waitingForInput: Boolean(interpretation.missingContext?.length),
    waitingForConfirmation: false,
    collectedInputs: previousTask?.collectedInputs || [],
    missingInputs: interpretation.missingContext || [],
    actionHistory: previousTask?.actionHistory ? previousTask.actionHistory.slice(-10) : [],
    outcomeLog: previousTask?.outcomeLog ? previousTask.outcomeLog.slice(-10) : [],
    localArtifacts: previousTask?.localArtifacts ? previousTask.localArtifacts.slice(0, 5) : [],
    blockedActions: [],
    finalSummary: "",
    interpretation,
    higherReasoning: null,
    actionAdapterDecision: null,
    reminderCalendarProposal: null,
    mapLocationRequest: null,
    communicationHandoff: null,
    providerDirectoryRequest: null,
    offlineIntelligenceMode: null,
    capabilityMatrix: nexusOpenDialogueCapabilityMatrix(),
    noExecutionAuthorized: true,
    executionAuthority: false,
    providerHandoffAuthorized: false
  };
  if (task.riskLevel === "high") {
    task.waitingForConfirmation = true;
    task.blockedActions.push("External execution blocked until final gate, provider connection, audit, and explicit user approval exist.");
  }
  if (task.riskLevel === "emergency") {
    task.blockedActions.push("Normal workflow stopped because emergency/crisis language was detected.");
  }
  const initialActionType = nexusOpenDialogueInferLocalActionType(task, interpretation.rawText);
  if (!task.waitingForInput) nexusOpenDialogueExecuteLocalAction(task, initialActionType, { command: interpretation.rawText });
  task.higherReasoning = nexusHigherIntelligenceReason(interpretation.rawText, interpretation);
  task.higherReasoning.immediateActions = task.waitingForInput || task.riskLevel === "high" || task.riskLevel === "emergency" ? [] : [initialActionType];
  task.actionAdapterDecision = nexusRealActionAdapterPrepare(interpretation, task);
  task.reminderCalendarProposal = nexusReminderCalendarPrepare(interpretation, task);
  task.mapLocationRequest = nexusMapLocationPermissionPrepare(interpretation, task);
  task.communicationHandoff = nexusMessagingCallHandoffPrepare(interpretation, task);
  task.providerDirectoryRequest = nexusProviderDirectoryIntegrationPrepare(interpretation, task);
  task.offlineIntelligenceMode = nexusOfflineIntelligenceModePrepare(interpretation, task);
  const output = nexusOpenDialogueLocalOutput(task);
  task.outcomeLog.push({
    at: now,
    status: task.status,
    summary: output,
    noExternalAction: true
  });
  task.actionHistory.push({
    at: now,
    command: interpretation.rawText,
    action: task.waitingForInput ? "clarification_requested" : task.riskLevel === "emergency" ? "emergency_stopped" : initialActionType
  });
  task.finalSummary = output;
  return task;
}

function nexusOpenDialogueAgentQuestion(task = {}) {
  if (task.status === "emergency_stopped") return nexusOpenDialogueEmergencyResponse();
  if (task.waitingForInput && task.missingInputs?.length) {
    const first = task.missingInputs[0];
    if (/meeting topic/.test(first)) return "I can help prepare. What is the meeting about, and who is it with?";
    if (/top priorities/.test(first)) return "I can organize your day. What are your top two priorities?";
    if (/recipient/.test(first)) return "Who should the message or call preparation be for? I will not send or call.";
    return `I can help. I need one detail first: ${first}.`;
  }
  if (task.waitingForConfirmation) return "This involves a sensitive action. I can prepare a draft or review card now, but real execution would require a final confirmation gate and approved provider connection.";
  return task.finalSummary || "Plan created. What would you like to do next?";
}

function nexusOpenDialogueUpdateScorecard() {
  const checks = [
    ["openCommandInterpretation", typeof nexusOpenDialogueInterpretCommand === "function"],
    ["goalCategoryDetection", true],
    ["domainDetection", true],
    ["multiDomainDetection", true],
    ["riskClassification", true],
    ["emergencyOverride", true],
    ["taskCreation", true],
    ["planGeneration", true],
    ["localExecution", true],
    ["sessionTaskContext", Array.isArray(nexusOpenDialogueAgentState.tasks)],
    ["followUpContinuation", true],
    ["confirmationHandling", true],
    ["blockedActionHandling", true],
    ["capabilityMatrixEnforcement", true],
    ["outcomeVerification", true],
    ["standardUserUiContract", true],
    ["falseExecutionPrevention", true],
    ["openDialogueFallback", true],
    ["domainSpecificAgentBehavior", true],
    ["completionSummary", true]
  ];
  const passed = checks.filter(([, ok]) => ok).length;
  nexusOpenDialogueAgentState.scorecard = {
    schemaVersion: "nexus-open-dialogue-agent-scorecard.v1",
    passed,
    total: checks.length,
    percentage: Math.round((passed / checks.length) * 100),
    checks: Object.fromEntries(checks),
    targetPercentage: 90
  };
  return nexusOpenDialogueAgentState.scorecard;
}

function nexusOpenDialogueSetActiveTask(task) {
  if (!task) return null;
  const existingIndex = nexusOpenDialogueAgentState.tasks.findIndex(item => item.taskId === task.taskId);
  if (existingIndex >= 0) nexusOpenDialogueAgentState.tasks[existingIndex] = task;
  else nexusOpenDialogueAgentState.tasks.unshift(task);
  nexusOpenDialogueAgentState.tasks = nexusOpenDialogueAgentState.tasks.slice(0, 8);
  nexusOpenDialogueAgentState.activeTaskId = task.status === "completed" || task.status === "canceled" || task.status === "emergency_stopped" ? null : task.taskId;
  nexusOpenDialogueAgentState.taskHistory.unshift({
    taskId: task.taskId,
    status: task.status,
    goal: task.goal,
    updatedAt: task.updatedAt
  });
  nexusOpenDialogueAgentState.taskHistory = nexusOpenDialogueAgentState.taskHistory.slice(0, 12);
  nexusOpenDialogueAgentState.lastOutcome = task.finalSummary || "";
  if (task.goalCategory === "draft" || /draft/i.test(task.finalSummary || "")) nexusOpenDialogueAgentState.lastDraft = task.finalSummary;
  if (task.higherReasoning) nexusHigherIntelligenceRecordLearning(task.higherReasoning, task);
  nexusPersistentTaskMemoryRecord(task);
  nexusOpenDialogueUpdateScorecard();
  return task;
}

function nexusOpenDialogueActiveTask() {
  return nexusOpenDialogueAgentState.tasks.find(task => task.taskId === nexusOpenDialogueAgentState.activeTaskId) || null;
}

function nexusOpenDialogueHandleFollowUp(interpretation = {}) {
  const activeTask = nexusOpenDialogueActiveTask();
  if (/\b(list recent workflows|recent workflows|what were we working on|show recent tasks)\b/.test(interpretation.normalizedText)) {
    const recent = nexusPersistentTaskMemoryRecall("recent");
    const summary = recent.length
      ? `Recent Nexus workflows: ${recent.slice(0, 5).map((item, index) => `${index + 1}. ${item.goal || item.activeDomain} (${item.status})`).join("; ")}. No external action was executed.`
      : "There are no recent Nexus workflows in this session yet.";
    return { handled: true, response: summary, task: activeTask || null };
  }
  if (/\b(use the last plan|recall the last plan|show the last plan)\b/.test(interpretation.normalizedText)) {
    const lastPlan = nexusPersistentTaskMemoryRecall("plan");
    const summary = lastPlan
      ? `Last plan recalled: ${lastPlan.title || "local plan"} - ${lastPlan.summary || "ready for review"}. No external action was executed.`
      : "I do not have a recent local plan to recall yet.";
    return { handled: true, response: summary, task: activeTask || null };
  }
  if (/^(finish|finish\.|complete this|close workflow)\b/.test(interpretation.normalizedText)) {
    if (!activeTask) return { handled: true, response: "There is no active Nexus Agent workflow to finish yet.", task: null };
    activeTask.status = "completed";
    activeTask.waitingForInput = false;
    activeTask.waitingForConfirmation = false;
    activeTask.updatedAt = new Date().toISOString();
    activeTask.finalSummary = `Workflow finished locally: ${activeTask.goal}. No external action was executed.`;
    activeTask.outcomeLog.push({ at: activeTask.updatedAt, status: "completed", summary: activeTask.finalSummary, noExternalAction: true });
    activeTask.actionHistory.push({ at: activeTask.updatedAt, command: interpretation.rawText, action: "workflow_finished_locally" });
    nexusOpenDialogueSetActiveTask(activeTask);
    return { handled: true, response: activeTask.finalSummary, task: activeTask };
  }
  if (interpretation.cancellationSignal) {
    if (!activeTask) return {
      handled: true,
      response: "There is no active Nexus Agent task to cancel.",
      task: null
    };
    activeTask.status = "canceled";
    activeTask.waitingForInput = false;
    activeTask.waitingForConfirmation = false;
    activeTask.updatedAt = new Date().toISOString();
    activeTask.outcomeLog.push({ at: activeTask.updatedAt, status: "canceled", summary: "Task canceled locally. No action was executed.", noExternalAction: true });
    activeTask.finalSummary = "Task canceled locally. No action was executed.";
    nexusOpenDialogueSetActiveTask(activeTask);
    return { handled: true, response: activeTask.finalSummary, task: activeTask };
  }
  if (interpretation.continuationSignal) {
    if (!activeTask) {
      const remembered = nexusPersistentTaskMemoryRecall("active");
      return {
        handled: true,
        response: remembered
          ? `I can continue from the remembered workflow: ${remembered.goal}. Next safe move: ${remembered.nextRecommendedAction || "prepare the next local step"}. No external action was executed.`
          : "I can continue, but there is no active task yet. What would you like to work on?",
        task: null
      };
    }
    activeTask.updatedAt = new Date().toISOString();
    activeTask.waitingForInput = false;
    activeTask.status = "active";
    const nextStep = activeTask.planSteps.find(step => step.status === "ready" || step.status === "pending") || activeTask.planSteps[activeTask.planSteps.length - 1];
    activeTask.currentStepId = nextStep?.stepId || activeTask.currentStepId;
    activeTask.completedSteps = Array.from(new Set([...(activeTask.completedSteps || []), "collect-context"]));
    const actionType = nexusOpenDialogueInferLocalActionType(activeTask, interpretation.rawText);
    nexusOpenDialogueExecuteLocalAction(activeTask, actionType, { command: interpretation.rawText });
    activeTask.outcomeLog.push({ at: activeTask.updatedAt, status: activeTask.status, summary: activeTask.finalSummary, noExternalAction: true });
    nexusOpenDialogueSetActiveTask(activeTask);
    return { handled: true, response: activeTask.finalSummary, task: activeTask };
  }
  if (interpretation.modificationSignal) {
    if (!activeTask && !nexusOpenDialogueAgentState.lastDraft) return {
      handled: true,
      response: "I can revise it. Paste or describe the message, plan, or draft you want changed.",
      task: null
    };
    const task = activeTask || nexusOpenDialogueAgentState.tasks[0];
    task.updatedAt = new Date().toISOString();
    task.status = "active";
    const artifact = nexusOpenDialogueExecuteLocalAction(task, "revise_draft", { command: interpretation.rawText });
    task.finalSummary = artifact.outcomeMessage;
    task.outcomeLog.push({ at: task.updatedAt, status: "active", summary: task.finalSummary, noExternalAction: true });
    task.actionHistory.push({ at: task.updatedAt, command: interpretation.rawText, action: "local_revision_created" });
    nexusOpenDialogueSetActiveTask(task);
    return { handled: true, response: task.finalSummary, task };
  }
  if (activeTask?.waitingForConfirmation && /\b(confirm|yes|do it|send it|call now|message now|approve)\b/.test(interpretation.normalizedText)) {
    activeTask.updatedAt = new Date().toISOString();
    activeTask.status = "waiting_for_confirmation";
    activeTask.finalSummary = "Confirmation intent noted, but no external action was executed. Nexus created/kept the local preparation only because a final execution gate, approved provider connection, audit, and real capability are required first.";
    activeTask.blockedActions = Array.from(new Set([...(activeTask.blockedActions || []), "External execution remains blocked after confirmation intent."]));
    activeTask.outcomeLog.push({ at: activeTask.updatedAt, status: activeTask.status, summary: activeTask.finalSummary, noExternalAction: true });
    activeTask.actionHistory.push({ at: activeTask.updatedAt, command: interpretation.rawText, action: "confirmation_intent_recorded_no_execution" });
    nexusOpenDialogueSetActiveTask(activeTask);
    return { handled: true, response: activeTask.finalSummary, task: activeTask };
  }
  if (activeTask?.waitingForInput && interpretation.normalizedText) {
    activeTask.collectedInputs.push({ at: new Date().toISOString(), value: interpretation.rawText });
    activeTask.missingInputs = activeTask.missingInputs.slice(1);
    activeTask.waitingForInput = activeTask.missingInputs.length > 0;
    activeTask.status = activeTask.waitingForInput ? "waiting_for_input" : "active";
    activeTask.updatedAt = new Date().toISOString();
    if (!activeTask.waitingForInput) {
      const actionType = nexusOpenDialogueInferLocalActionType(activeTask, interpretation.rawText);
      nexusOpenDialogueExecuteLocalAction(activeTask, actionType, { command: interpretation.rawText });
      activeTask.completedSteps = Array.from(new Set([...(activeTask.completedSteps || []), "collect-context", "create-local-output"]));
    } else {
      activeTask.finalSummary = nexusOpenDialogueAgentQuestion(activeTask);
    }
    activeTask.outcomeLog.push({ at: activeTask.updatedAt, status: activeTask.status, summary: activeTask.finalSummary, noExternalAction: true });
    nexusOpenDialogueSetActiveTask(activeTask);
    return { handled: true, response: activeTask.finalSummary, task: activeTask };
  }
  if (activeTask && interpretation.normalizedText) {
    const followUpActionType = nexusOpenDialogueInferLocalActionType(activeTask, interpretation.rawText);
    const looksLikeActiveTaskFollowUp = !interpretation.explicitAssistantInvocation && (
      /^(draft|create|prepare|make|use|finish|complete|every|i have|here is|the meeting|answer)\b/.test(interpretation.normalizedText)
      || ["draft", "prepare questions", "checklist", "remind", "plan", "summarize"].includes(interpretation.goalCategory)
      || followUpActionType !== "create_plan"
    );
    if (looksLikeActiveTaskFollowUp) {
      activeTask.collectedInputs.push({ at: new Date().toISOString(), value: interpretation.rawText });
      activeTask.updatedAt = new Date().toISOString();
      const artifact = nexusOpenDialogueExecuteLocalAction(activeTask, followUpActionType, { command: interpretation.rawText });
      activeTask.outcomeLog.push({ at: activeTask.updatedAt, status: activeTask.status, summary: artifact.outcomeMessage, noExternalAction: true });
      nexusOpenDialogueSetActiveTask(activeTask);
      return { handled: true, response: activeTask.finalSummary, task: activeTask };
    }
  }
  return { handled: false };
}

function nexusOpenDialogueAgentResponse(command = "", options = {}) {
  if (experienceMode !== "user" && !options.force) return null;
  const interpretation = nexusOpenDialogueInterpretCommand(command);
  if (!interpretation.normalizedText) return null;
  if (interpretation.unsupportedRequest) {
    return {
      handled: true,
      response: "I cannot help with unsafe or illegal requests. I can help make a safe plan, checklist, or explanation instead.",
      task: null,
      interpretation
    };
  }
  const followUp = nexusOpenDialogueHandleFollowUp(interpretation);
  if (followUp.handled) return { ...followUp, interpretation };
  const shouldHandleOpen = interpretation.confidence >= 0.45
    || interpretation.inferredDomain !== "general-assistant"
    || interpretation.goalCategory !== "prepare"
    || /\b(help|plan|prepare|draft|organize|meeting|problem|continue|cancel|change|next|mother|farm|health|work|training|transport|money|maize|bags)\b/.test(interpretation.normalizedText);
  if (!shouldHandleOpen) return null;
  const task = nexusOpenDialogueCreateTask(interpretation);
  nexusOpenDialogueSetActiveTask(task);
  return {
    handled: true,
    response: nexusOpenDialogueAgentQuestion(task),
    task,
    interpretation
  };
}

function renderNexusOpenDialogueAgentCard(state = nexusOpenDialogueAgentState) {
  const activeTask = nexusOpenDialogueActiveTask();
  const scorecard = nexusOpenDialogueUpdateScorecard();
  const task = activeTask || state.tasks[0] || null;
  const actions = [
    ["start", "Start"],
    ["continue", "Continue"],
    ["answer", "Answer question"],
    ["plan", "Create plan"],
    ["checklist", "Create checklist"],
    ["questions", "Prepare questions"],
    ["draft", "Draft message"],
    ["reminder", "Create reminder plan"],
    ["confirm", "Confirm"],
    ["cancel", "Cancel"],
    ["finish", "Finish"]
  ];
  return `
    <section class="nexus-open-dialogue-agent-card" data-nexus-open-dialogue-agent-card="true" data-execution-authority="false" data-provider-handoff-authorized="false" aria-label="Nexus Agent">
      <div class="nexus-agent-card-header">
        <span class="eyebrow">Nexus Agent</span>
        <strong>${htmlSafe(task?.goal || "Open dialogue assistant ready")}</strong>
        <small>${htmlSafe(task ? `Confidence ${Math.round((task.confidence || 0) * 100)}% - ${task.status}` : "Tell Nexus any goal. It will plan, ask, prepare, or block safely.")}</small>
      </div>
      <div class="nexus-agent-card-grid">
        <span><strong>Domain(s):</strong> ${htmlSafe(task ? [task.activeDomain, ...(task.secondaryDomains || [])].filter(Boolean).join(", ") : "waiting")}</span>
        <span><strong>Risk:</strong> ${htmlSafe(task?.riskLevel || "none")}</span>
        <span><strong>Current step:</strong> ${htmlSafe(task?.currentStepId || "ready")}</span>
        <span><strong>Missing:</strong> ${htmlSafe(task?.missingInputs?.length ? task.missingInputs.join(", ") : "none")}</span>
        <span><strong>Completed:</strong> ${htmlSafe(task?.completedSteps?.length ? task.completedSteps.join(", ") : "none yet")}</span>
        <span><strong>Pending confirmation:</strong> ${htmlSafe(task?.waitingForConfirmation ? "yes" : "no")}</span>
      </div>
      <div class="nexus-agent-card-output" role="status">
        ${htmlSafe(task?.finalSummary || state.lastOutcome || "Nexus can create plans, checklists, questions, drafts, summaries, reminder proposals, and review-only preparation cards.")}
      </div>
      ${task?.higherReasoning ? `
        <div class="nexus-higher-intelligence-status" data-nexus-higher-intelligence-status="true" data-execution-authority="false">
          <strong>Higher Intelligence:</strong>
          <span>${htmlSafe(task.higherReasoning.nextBestMove)}</span>
          <small>Capability: ${htmlSafe(task.higherReasoning.capabilityChoice?.selectedCapability || "review")} - Self-check: ${htmlSafe(task.higherReasoning.selfCheck?.decision || "safe local review")}</small>
        </div>
      ` : ""}
      <div class="nexus-persistent-task-memory-status" data-nexus-persistent-task-memory-status="true" data-execution-authority="false">
        <strong>Task memory:</strong>
        <span>${htmlSafe(state.persistentTaskMemory?.recentWorkflows?.length ? `${state.persistentTaskMemory.recentWorkflows.length} recent local workflow(s), session-safe.` : "No remembered workflow yet.")}</span>
        <small>No provider handoff, calls, messages, payments, location use, medical action, or backend write is authorized from memory.</small>
      </div>
      ${task?.actionAdapterDecision ? `
        <div class="nexus-real-action-adapter-status" data-nexus-real-action-adapter-status="true" data-execution-authority="false">
          <strong>Adapter:</strong>
          <span>${htmlSafe(task.actionAdapterDecision.adapterId)} - ${htmlSafe(task.actionAdapterDecision.implemented ? "local capability available" : "integration not connected")}</span>
          <small>${htmlSafe(task.actionAdapterDecision.outcomeMessage)}</small>
        </div>
      ` : ""}
      <div class="nexus-voice-command-loop-status" data-nexus-voice-command-loop-status="true" data-execution-authority="false" data-provider-handoff-authorized="false">
        <strong>Voice loop:</strong>
        <span>${htmlSafe(nexusVoiceCommandLoopState.voiceModeReady ? "ready" : "not ready")} - ${htmlSafe(nexusVoiceCommandLoopState.routedToBrain ? "routed to brain" : "waiting")}</span>
        <small>${htmlSafe(nexusVoiceCommandLoopState.spokenStyleResponse)} Next: ${htmlSafe(nexusVoiceCommandLoopState.nextPrompt)}</small>
      </div>
      ${task?.reminderCalendarProposal ? `
        <div class="nexus-reminder-calendar-status" data-nexus-reminder-calendar-status="true" data-scheduled="false" data-execution-authority="false">
          <strong>${htmlSafe(task.reminderCalendarProposal.title)}</strong>
          <span>${htmlSafe(task.reminderCalendarProposal.scheduleText)} - ${htmlSafe(task.reminderCalendarProposal.domain)}</span>
          <small>${htmlSafe(task.reminderCalendarProposal.outcomeMessage)}</small>
        </div>
      ` : ""}
      ${task?.mapLocationRequest ? `
        <div class="nexus-map-location-permission-status" data-nexus-map-location-permission-status="true" data-permission-granted="false" data-location-permission-requested="false" data-execution-authority="false">
          <strong>Map/location planning</strong>
          <span>${htmlSafe(task.mapLocationRequest.requestedResource)} - ${htmlSafe(task.mapLocationRequest.fallbackLocation)}</span>
          <small>${htmlSafe(task.mapLocationRequest.outcomeMessage)}</small>
        </div>
      ` : ""}
      ${task?.communicationHandoff ? `
        <div class="nexus-messaging-call-handoff-status" data-nexus-messaging-call-handoff-status="true" data-executed="false" data-execution-authority="false" data-provider-handoff-authorized="false">
          <strong>${htmlSafe(task.communicationHandoff.type === "call" ? "Call preparation" : "Message draft")}</strong>
          <span>${htmlSafe(task.communicationHandoff.recipient)} - ${htmlSafe(task.communicationHandoff.adapterImplemented ? "adapter connected" : "adapter not connected")}</span>
          <small>${htmlSafe(task.communicationHandoff.outcomeMessage)}</small>
        </div>
      ` : ""}
      ${task?.providerDirectoryRequest ? `
        <div class="nexus-provider-directory-status" data-nexus-provider-directory-status="true" data-provider-data-verified="false" data-provider-contacted="false" data-execution-authority="false">
          <strong>Provider directory prep</strong>
          <span>${htmlSafe(task.providerDirectoryRequest.careNeed)} - ${htmlSafe(task.providerDirectoryRequest.locationInput)}</span>
          <small>${htmlSafe(task.providerDirectoryRequest.outcomeMessage)}</small>
        </div>
      ` : ""}
      ${task?.offlineIntelligenceMode ? `
        <div class="nexus-offline-intelligence-status" data-nexus-offline-intelligence-status="true" data-sync-available="false" data-external-execution-blocked="true" data-execution-authority="false">
          <strong>Offline intelligence mode</strong>
          <span>${htmlSafe(task.offlineIntelligenceMode.localGuidanceAvailable ? "local guidance available" : "local prep only")} - ${htmlSafe(task.offlineIntelligenceMode.queuedDrafts.length ? `${task.offlineIntelligenceMode.queuedDrafts.length} queued draft(s)` : "no queued external action")}</span>
          <small>${htmlSafe(task.offlineIntelligenceMode.outcomeMessage)}</small>
        </div>
      ` : ""}
      ${task?.localArtifacts?.length ? `
        <div class="nexus-agent-artifact-stack" aria-label="Nexus local artifacts">
          ${task.localArtifacts.map(artifact => `
            <article class="nexus-agent-artifact" data-nexus-local-action-type="${htmlSafe(artifact.actionType)}" data-external-execution-occurred="false">
              <strong>${htmlSafe(artifact.title)}</strong>
              <small>${htmlSafe(artifact.outcomeMessage)}</small>
              <ul>
                ${(artifact.content || []).slice(0, 6).map(item => `<li>${htmlSafe(item)}</li>`).join("")}
              </ul>
            </article>
          `).join("")}
        </div>
      ` : ""}
      <div class="nexus-agent-card-actions" aria-label="Nexus Agent controls">
        ${actions.map(([action, label]) => `<button type="button" data-nexus-open-agent-action="${action}" ${action === "confirm" && !task?.waitingForConfirmation ? "disabled aria-disabled=\"true\"" : ""}>${htmlSafe(label)}</button>`).join("")}
      </div>
      <small>Available now: local plans, checklists, questions, drafts, summaries, and review cards. Blocked: calls, messages, payments, purchases, provider contact, location sharing, camera/microphone, diagnosis, prescribing, emergency dispatch, and backend writes without future gates.</small>
      <small data-nexus-open-dialogue-scorecard="true">Agentic scorecard: ${scorecard.percentage}% (${scorecard.passed}/${scorecard.total})</small>
    </section>
  `;
}

function paintNexusOpenDialogueAgentCard() {
  const html = renderNexusOpenDialogueAgentCard();
  const workspace = $("#userWorkspace");
  if (workspace && experienceMode === "user") {
    let host = workspace.querySelector("[data-nexus-open-dialogue-agent-host]");
    if (!host) {
      host = document.createElement("div");
      host.dataset.nexusOpenDialogueAgentHost = "true";
      const hero = workspace.querySelector(".user-workspace-hero");
      (hero || workspace).insertAdjacentElement(hero ? "afterend" : "afterbegin", host);
    }
    host.innerHTML = html;
  }
}

function handleNexusOpenDialogueAgentCommand(command = "", options = {}) {
  const voiceLoop = nexusVoiceCommandLoopUpdate(command, { routedToBrain: true });
  const routedCommand = voiceLoop.normalizedCommand || command;
  const result = nexusOpenDialogueAgentResponse(routedCommand, options);
  nexusVoiceCommandLoopComplete(voiceLoop, result);
  if (!result?.handled) return false;
  if (result.task) {
    const plan = buildNexusAutonomousTaskPlan(routedCommand, { category: result.task.activeDomain === "general-assistant" ? "general" : result.task.activeDomain === "marketplace" ? "marketplace-browsing" : result.task.activeDomain === "maps-location" ? "route-planning" : result.task.activeDomain === "communication" ? "message-call-preparation" : result.task.activeDomain === "health" || result.task.activeDomain === "chronic-care" ? "chronic-care-support" : result.task.activeDomain === "workforce" ? "workforce-jobs" : result.task.activeDomain === "learning" ? "training-learning" : result.task.activeDomain === "agriculture" ? "agriculture-help" : "general" });
    startNexusAutonomousWorkflowFromTaskPlan(plan, { command: routedCommand });
  }
  paintNexusOpenDialogueAgentCard();
  updateUserCaptionPanel(result.response || "Nexus Agent updated this task.", { expanded: true });
  renderLiveVoiceSuggestions(["continue", "prepare questions", "create checklist", "draft it", "cancel that"]);
  updateNexusBehaviorLayer("planning", "Nexus Agent interpreted open dialogue and updated a session-only task.");
  setVoiceResponse(nexusVoiceCommandLoopState.spokenStyleResponse || result.response || "Nexus Agent updated this task.", false, { allowHandoff: false, allowVoiceFirst: false, command: routedCommand, source: "nexus-open-dialogue-agent" });
  return true;
}

function handleNexusOpenDialogueAgentControl(action = "") {
  const activeTask = nexusOpenDialogueActiveTask();
  const commandMap = {
    start: "Nexus, I don't know what to do next.",
    continue: "Continue.",
    answer: activeTask?.missingInputs?.length ? `Here is the missing detail for ${activeTask.missingInputs[0]}.` : "Answer the next question.",
    plan: "Create plan.",
    checklist: "Create checklist.",
    questions: "Prepare questions.",
    draft: "Draft a message.",
    reminder: "Create reminder plan.",
    confirm: "Confirm.",
    cancel: "Cancel that.",
    finish: "Finish."
  };
  const command = commandMap[action] || action;
  if (action === "finish" && activeTask) {
    activeTask.status = "completed";
    activeTask.updatedAt = new Date().toISOString();
    activeTask.finalSummary = "Task completed locally. Nexus verified the outcome and did not execute external actions.";
    activeTask.outcomeLog.push({ at: activeTask.updatedAt, status: "completed", summary: activeTask.finalSummary, noExternalAction: true });
    nexusOpenDialogueSetActiveTask(activeTask);
    paintNexusOpenDialogueAgentCard();
    setVoiceResponse(activeTask.finalSummary, false, { allowHandoff: false, allowVoiceFirst: false });
    return true;
  }
  return handleNexusOpenDialogueAgentCommand(command, { force: true });
}

function handleNexusOpenDialogueAgentClick(event) {
  const button = event.target.closest("[data-nexus-open-agent-action]");
  if (!button) return false;
  event.preventDefault();
  event.stopPropagation();
  return handleNexusOpenDialogueAgentControl(button.dataset.nexusOpenAgentAction);
}

function nexusControlledActionQueueTypeForPlan(taskPlan = {}) {
  const category = String(taskPlan.category || taskPlan.selectedToolId || "").toLowerCase();
  const intent = String(taskPlan.userIntent || "").toLowerCase();
  const summary = String(taskPlan.summary || taskPlan.goal || "").toLowerCase();
  const combined = `${category} ${intent} ${summary}`;
  const userFacingText = `${intent} ${summary}`;
  const safeMapNavigationHandoffIntent = /\b(prepare|plan|review|create|build|outline)\b/.test(userFacingText)
    && /\b(route|map|navigation|directions|transport|destination|origin|handoff)\b/.test(userFacingText)
    && !/\b(navigate now|start navigation|launch route|open external|use my location|share my location|gps|turn on location)\b/.test(userFacingText);
  const safeCallPreparationIntent = /\b(prepare|plan|outline|create)\b/.test(userFacingText)
    && /\b(call|phone)\b/.test(userFacingText)
    && !/\b(call now|dial|place call|start call|make the call|open phone)\b/.test(userFacingText);
  const safeMarketplaceInquiryPreparationIntent = /\b(prepare|plan|review|create|build|outline|questions|checklist)\b/.test(combined)
    && /\b(marketplace|agritrade|buyer|seller|listing|inquiry|produce|crop sale|market)\b/.test(combined)
    && !/\b(contact now|message seller|message buyer|send|submit|buy now|sell now|purchase|checkout|order|pay|payment|refund|ship|deliver|dispatch|call|dial|location|camera|emergency)\b/.test(userFacingText);
  const safeChronicCareReportIntent = /\b(prepare|build|create|summarize|copy|show|review)\b/.test(combined)
    && /\b(physician report|doctor report|provider report|care team report|clinical summary|clinical report|nurse|community health worker|chw|doctor|care team|diabetes|blood sugar|glucose|blood pressure|hypertension|obesity|weight|rpm|rtm|telehealth)\b/.test(combined)
    && !/\b(send|submit|transmit|upload|share with provider|contact provider|message|call|dial|prescribe|diagnose|adjust medication|change medication|change insulin|dispatch|emergency dispatch|connect device|sync device|store record)\b/.test(userFacingText);
  const safeCareTeamCopyViewIntent = /\b(copy|copy-ready|prepare copy|prepare report copy|create|show|view|draft)\b/.test(combined)
    && /\b(doctor|physician|provider|nurse|coach|care team|community health worker|chw|handoff note|report copy|care team summary)\b/.test(combined)
    && !/\b(send|submit|share|transmit|upload|message|email|whatsapp|telegram|sms|call|dial|contact provider|contact doctor|contact nurse|contact chw|prescribe|diagnose|adjust medication|change medication|dispatch|emergency|store record|save record)\b/.test(userFacingText);
  const safeDraftIntent = /\b(draft|prepare|compose|write)\b/.test(combined)
    && /\b(message|email|note|question|outreach|inquiry)\b/.test(combined)
    && !/\b(send|submit|deliver|call|dial|place call|contact now)\b/.test(userFacingText);
  if (/\b(simulated|simulation|dry[- ]?run)\b/.test(category) || /\b(simulated|simulation|dry[- ]?run)\b/.test(intent) || /\b(simulated|simulation|dry[- ]?run)\b/.test(summary)) return "simulated_provider_action";
  if (safeMapNavigationHandoffIntent) return "map_navigation_handoff";
  if (safeCallPreparationIntent) return "call_preparation";
  if (safeMarketplaceInquiryPreparationIntent) return "marketplace_inquiry_preparation";
  if (safeCareTeamCopyViewIntent) return "care_team_report_copy_view";
  if (safeChronicCareReportIntent) return "chronic_care_report_generation";
  if (safeDraftIntent) return "draft_generation";
  if (/\b(call|phone|whatsapp|telegram|sms|email|message)\b/.test(category) || /\b(call|phone|whatsapp|telegram|sms|email|message)\b/.test(intent)) return "blocked_high_risk_action";
  if (/\b(report|physician|care[- ]?team|chw|rpm|rtm|chronic|health)\b/.test(category)) return "report_generation";
  if (/\b(market|agritrade|buyer|seller|listing|inquiry)\b/.test(category)) return "draft_generation";
  if (/\b(map|route|navigation|location)\b/.test(category)) return "internal_navigation";
  if (/\b(provider|telehealth|pharmacy|clinic)\b/.test(category)) return "provider_ready_action";
  if (/\b(learning|training|job|workforce|agriculture|crop|field|irrigation)\b/.test(category)) return "local_preparation";
  return "local_explanation";
}

function buildNexusControlledActionQueueItem(action = {}) {
  const actionType = String(action.actionType || "local_explanation").trim();
  const riskLevel = String(action.riskLevel || "low").trim();
  const confirmationRequired = action.confirmationRequired !== false || riskLevel !== "low";
  const blocked = actionType === "blocked_high_risk_action" || riskLevel === "high";
  return {
    schemaVersion: "nexus-controlled-action-queue-item.v1",
    queueId: action.queueId || `nexus-queue-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    source: action.source || "nexus-controlled-action-queue.v1",
    actionType,
    description: String(action.description || "Review the next safe Nexus action.").trim(),
    requiredData: Array.isArray(action.requiredData) ? action.requiredData.map(item => String(item || "").trim()).filter(Boolean) : [],
    riskLevel,
    confirmationRequired,
    providerStatus: String(action.providerStatus || "not required for local review").trim(),
    safetyReason: String(action.safetyReason || "Queued for review only. No external action is authorized.").trim(),
    queueStatus: blocked ? "blocked" : "queued_for_review",
    executionAuthority: false,
    canExecute: false,
    externalExecutionAllowed: false,
    providerHandoffAuthorized: false,
    createdAt: new Date().toISOString()
  };
}

function buildNexusControlledActionQueueFromTaskPlan(taskPlan = {}, context = {}) {
  if (!taskPlan || typeof taskPlan !== "object") return [];
  const missing = Array.isArray(taskPlan.missingInformation) ? taskPlan.missingInformation : [];
  const required = Array.isArray(taskPlan.requiredInformation) ? taskPlan.requiredInformation : [];
  const blocked = Array.isArray(taskPlan.blockedHighRiskActions) ? taskPlan.blockedHighRiskActions : [];
  const requiredData = [...required, ...missing].map(item => String(item || "").trim()).filter(Boolean).slice(0, 6);
  const riskLevel = String(taskPlan.riskLevel || "low").trim();
  const providerStatus = taskPlan.providerRequirement ? `provider requirement: ${taskPlan.providerRequirement}` : "not connected / not required";
  const actionType = nexusControlledActionQueueTypeForPlan(taskPlan);
  const confirmationRequired = riskLevel !== "low" || actionType !== "local_explanation";
  const queue = [
    buildNexusControlledActionQueueItem({
      actionType: "local_explanation",
      description: `Explain the plan: ${taskPlan.goal || context.command || "Nexus safe plan"}`,
      requiredData,
      riskLevel: "low",
      confirmationRequired: false,
      providerStatus: "not required for local explanation",
      safetyReason: "Explanation is local and review-only."
    }),
    buildNexusControlledActionQueueItem({
      actionType,
      description: actionType === "draft_generation"
        ? `Prepare local draft for review: ${taskPlan.userIntent || taskPlan.goal || taskPlan.nextSuggestedAction || "review next step"}`
        : `Prepare next step: ${taskPlan.nextSuggestedAction || taskPlan.goal || "review next step"}`,
      requiredData,
      riskLevel,
      confirmationRequired,
      providerStatus,
      safetyReason: blocked.length ? blocked.join(" ") : "No real external execution is authorized from the queue."
    })
  ];
  if (riskLevel === "high" || blocked.some(item => /\b(call|message|payment|emergency|location|camera|provider|medical|pharmacy)\b/i.test(String(item || "")))) {
    queue.push(buildNexusControlledActionQueueItem({
      actionType: "blocked_high_risk_action",
      description: "Block unsafe or provider-dependent execution until the required gate exists.",
      requiredData,
      riskLevel: "high",
      confirmationRequired: true,
      providerStatus: "not connected / blocked",
      safetyReason: blocked.join(" ") || "High-risk action requires explicit confirmation, provider readiness, and audit controls."
    }));
  }
  return queue;
}

function syncNexusControlledActionQueueFromWorkflow(state = nexusAutonomousWorkflowState, context = {}) {
  nexusUserConfirmationGateState = null;
  if (!state?.activePlan) {
    nexusControlledActionQueue = [];
    return nexusControlledActionQueue;
  }
  nexusControlledActionQueue = buildNexusControlledActionQueueFromTaskPlan(state.activePlan, {
    command: context.command || state.userIntent || "",
    currentStep: state.currentStep || state.steps?.[state.currentStepIndex] || "",
    action: context.action || state.lastUserAction || ""
  });
  return nexusControlledActionQueue;
}

function isNexusControlledQueueActionLocallyConfirmable(action = {}) {
  return [
    "internal_navigation",
    "map_navigation_handoff",
    "marketplace_inquiry_preparation",
    "chronic_care_report_generation",
    "care_team_report_copy_view",
    "draft_generation",
    "report_generation",
    "call_preparation",
    "simulated_provider_action"
  ].includes(String(action.actionType || ""));
}

function buildNexusUserConfirmationGateFromQueueAction(action = {}, index = 0) {
  if (!action || typeof action !== "object") return null;
  const actionType = String(action.actionType || "local_explanation").trim();
  const riskLevel = String(action.riskLevel || "low").trim();
  const blocked = action.queueStatus === "blocked"
    || actionType === "blocked_high_risk_action"
    || actionType === "provider_ready_action"
    || riskLevel === "high";
  const locallyConfirmable = isNexusControlledQueueActionLocallyConfirmable(action) && !blocked;
  return {
    schemaVersion: "nexus-user-confirmation-gate.v1",
    source: "nexus-controlled-action-queue.v1",
    queueIndex: Number.isFinite(index) ? index : 0,
    actionType,
    description: String(action.description || "Review this Nexus action.").trim(),
    requiredData: Array.isArray(action.requiredData) ? action.requiredData.slice(0, 6) : [],
    riskLevel,
    confirmationRequired: action.confirmationRequired !== false,
    providerStatus: String(action.providerStatus || "not connected / not required").trim(),
    safetyReason: String(action.safetyReason || "No external execution is authorized.").trim(),
    locallyConfirmable,
    confirmDisabledReason: locallyConfirmable ? "" : "A final execution gate or provider readiness is required before this action can run.",
    executionAuthority: false,
    externalExecutionAllowed: false,
    providerHandoffAuthorized: false,
    status: "awaiting_user_review"
  };
}

function renderNexusUserConfirmationGate(gate = nexusUserConfirmationGateState) {
  if (!gate || gate.schemaVersion !== "nexus-user-confirmation-gate.v1") return "";
  const requiredData = Array.isArray(gate.requiredData) && gate.requiredData.length
    ? gate.requiredData.join("; ")
    : "No extra data listed yet.";
  const confirmDisabled = gate.locallyConfirmable !== true ? "disabled aria-disabled=\"true\"" : "";
  return `
    <div class="nexus-user-confirmation-gate" data-nexus-user-confirmation-gate="true" data-execution-authority="false" data-provider-handoff="false" data-action-type="${htmlSafe(gate.actionType)}" data-risk-level="${htmlSafe(gate.riskLevel)}">
      <span class="nexus-user-confirmation-gate-label">User confirmation gate</span>
      <strong>Review before any local step</strong>
      <span><strong>What Nexus will do:</strong> ${htmlSafe(gate.description)}</span>
      <span><strong>Data used:</strong> ${htmlSafe(requiredData)}</span>
      <span><strong>Risk:</strong> ${htmlSafe(gate.riskLevel)}</span>
      <span><strong>Provider status:</strong> ${htmlSafe(gate.providerStatus)}</span>
      <span><strong>Safety note:</strong> ${htmlSafe(gate.safetyReason)}</span>
      ${gate.locallyConfirmable ? "" : `<span class="nexus-user-confirmation-gate-note">${htmlSafe(gate.confirmDisabledReason)}</span>`}
      <div class="nexus-user-confirmation-gate-actions" aria-label="Nexus user confirmation controls">
        <button type="button" data-nexus-user-confirmation-gate-control="confirm" ${confirmDisabled}>Confirm local step</button>
        <button type="button" data-nexus-user-confirmation-gate-control="cancel">Cancel</button>
      </div>
      <small role="status">${htmlSafe(gate.status || "awaiting_user_review")}</small>
    </div>
  `;
}

function performNexusConfirmedLocalQueueAction(gate = nexusUserConfirmationGateState) {
  if (!gate || gate.schemaVersion !== "nexus-user-confirmation-gate.v1") {
    return "No reviewed action is available.";
  }
  if (gate.locallyConfirmable !== true) {
    return "Confirmation blocked. This action still requires a final execution gate.";
  }
  if (gate.actionType === "simulated_provider_action") {
    const result = createNexusSimulatedProviderExecutionResult(gate);
    const type = result?.simulationType || "simulated provider result";
    return `Simulated provider result prepared locally: ${type}. SIMULATED ONLY - no real external action occurred, and Nexus did not contact a real provider.`;
  }
  if (gate.actionType === "internal_navigation") {
    const result = executeNexusConfirmedInternalNavigation(gate);
    return result?.status || "Internal navigation was not available. No external action occurred.";
  }
  if (gate.actionType === "map_navigation_handoff") {
    const result = createNexusMapNavigationHandoffResult(gate);
    return result
      ? "Local route handoff card created for review and the internal map section was prepared. Nexus did not request location, launch directions, contact a provider, dispatch, call, message, or write backend data."
      : "Local route handoff preparation was not available. No external action occurred.";
  }
  if (gate.actionType === "draft_generation") {
    const result = createNexusLocalDraftMessageResult(gate);
    return result
      ? `Local ${result.draftType} draft prepared for review. Nexus did not send, submit, message, contact a provider, buy, sell, pay, or write backend data.`
      : "Local draft was not available. No external action occurred.";
  }
  if (gate.actionType === "marketplace_inquiry_preparation") {
    const result = createNexusMarketplaceInquiryPreparationResult(gate);
    return result
      ? "Local marketplace inquiry preparation card created for review. Nexus did not contact buyers or sellers, create an order, buy, sell, process payment, open an external marketplace, change inventory, or write backend data."
      : "Local marketplace inquiry preparation was not available. No external action occurred.";
  }
  if (gate.actionType === "chronic_care_report_generation") {
    const result = createNexusChronicCarePhysicianReportResult(gate);
    return result
      ? "Local chronic-care physician/care-team report created for review. Nexus did not diagnose, prescribe, adjust medication, dispatch emergency services, contact a provider, connect a device, transmit data, persist sensitive health data, or write backend data."
      : "Local chronic-care physician report was not available. No external action occurred.";
  }
  if (gate.actionType === "care_team_report_copy_view") {
    const result = createNexusCareTeamReportCopyViewResult(gate);
    return result
      ? "Local care-team copy view created for human review. Nexus did not send, share, contact providers, diagnose, change medication, store sensitive health data, or write backend data."
      : "Local care-team copy view was not available. No external action occurred.";
  }
  if (gate.actionType === "call_preparation") {
    const result = createNexusCallPreparationResult(gate);
    return result
      ? "Local call preparation card created for review. Nexus did not place a call, open the phone, request phone permission, contact a provider, send a message, or write backend data."
      : "Local call preparation was not available. No external action occurred.";
  }
  const outcomes = {
    report_generation: "Local report outline prepared for review. Nexus did not write records or contact a provider."
  };
  return outcomes[gate.actionType] || "Local review confirmed. No external action was taken.";
}

function handleNexusUserConfirmationGateControl(action = "") {
  if (!nexusUserConfirmationGateState) return false;
  if (action === "cancel") {
    recordNexusSessionActionAuditEvent("action_canceled", {
      actionType: nexusUserConfirmationGateState.actionType,
      riskLevel: nexusUserConfirmationGateState.riskLevel,
      providerStatus: nexusUserConfirmationGateState.providerStatus,
      safetyReason: nexusUserConfirmationGateState.safetyReason,
      resultStatus: "User canceled the confirmation gate. No action was taken."
    });
    nexusUserConfirmationGateState = {
      ...nexusUserConfirmationGateState,
      status: "Cancelled. No local or external action was taken."
    };
    paintNexusControlledActionQueue();
    return true;
  }
  if (action === "confirm") {
    const resultStatus = performNexusConfirmedLocalQueueAction(nexusUserConfirmationGateState);
    recordNexusSessionActionAuditEvent(
      nexusUserConfirmationGateState.locallyConfirmable === true
        ? nexusUserConfirmationGateState.actionType === "simulated_provider_action" ? "action_simulated" : "action_confirmed"
        : "action_blocked",
      {
        actionType: nexusUserConfirmationGateState.actionType,
        riskLevel: nexusUserConfirmationGateState.riskLevel,
        providerStatus: nexusUserConfirmationGateState.providerStatus,
        safetyReason: nexusUserConfirmationGateState.safetyReason,
        resultStatus
      }
    );
    nexusUserConfirmationGateState = {
      ...nexusUserConfirmationGateState,
      status: resultStatus
    };
    paintNexusControlledActionQueue();
    return true;
  }
  return false;
}

function handleNexusControlledActionQueueClick(event) {
  const reviewButton = event.target.closest("[data-nexus-controlled-action-queue-review]");
  const gateButton = event.target.closest("[data-nexus-user-confirmation-gate-control]");
  if (!reviewButton && !gateButton) return false;
  event.preventDefault();
  event.stopPropagation();
  if (gateButton) {
    return handleNexusUserConfirmationGateControl(gateButton.dataset.nexusUserConfirmationGateControl);
  }
  const index = Number(reviewButton.dataset.nexusControlledActionQueueReview || "0");
  const action = nexusControlledActionQueue[index];
  nexusUserConfirmationGateState = buildNexusUserConfirmationGateFromQueueAction(action, index);
  if (nexusUserConfirmationGateState) {
    recordNexusSessionActionAuditEvent(
      nexusUserConfirmationGateState.locallyConfirmable ? "confirmation_shown" : "action_blocked",
      {
        actionType: nexusUserConfirmationGateState.actionType,
        riskLevel: nexusUserConfirmationGateState.riskLevel,
        providerStatus: nexusUserConfirmationGateState.providerStatus,
        safetyReason: nexusUserConfirmationGateState.safetyReason,
        resultStatus: nexusUserConfirmationGateState.locallyConfirmable ? "Confirmation gate shown for local-only action." : "Confirmation gate shown with final execution gate required."
      }
    );
  }
  paintNexusControlledActionQueue();
  return true;
}

function renderNexusControlledActionQueueCard(queue = nexusControlledActionQueue) {
  if (!Array.isArray(queue) || !queue.length) return "";
  const gateHtml = renderNexusUserConfirmationGate();
  const safetyDashboardHtml = renderNexusSafetyReviewDashboard();
  const taskHistoryHtml = renderNexusSafeTaskHistory();
  const auditHtml = renderNexusSessionActionAuditLog();
  const simulatedHtml = renderNexusSimulatedProviderExecutionResults();
  const internalNavigationHtml = renderNexusInternalNavigationExecutionResults();
  const localDraftHtml = renderNexusLocalDraftMessageResults();
  const callPreparationHtml = renderNexusCallPreparationResults();
  const mapNavigationHandoffHtml = renderNexusMapNavigationHandoffResults();
  const marketplaceInquiryPreparationHtml = renderNexusMarketplaceInquiryPreparationResults();
  const chronicCarePhysicianReportHtml = renderNexusChronicCarePhysicianReportResults();
  const careTeamReportCopyViewHtml = renderNexusCareTeamReportCopyViewResults();
  const items = queue.slice(0, 4).map((action, index) => `
    <li data-nexus-controlled-action-queue-item="${htmlSafe(action.queueStatus)}" data-action-type="${htmlSafe(action.actionType)}" data-risk-level="${htmlSafe(action.riskLevel)}">
      <strong>${htmlSafe(action.actionType.replace(/_/g, " "))}</strong>
      <span>${htmlSafe(action.description)}</span>
      <small>Required: ${htmlSafe(action.requiredData.length ? action.requiredData.join("; ") : "No extra data listed yet.")}</small>
      <small>Risk: ${htmlSafe(action.riskLevel)}. Confirmation: ${htmlSafe(action.confirmationRequired ? "required before any allowed local step" : "not required for explanation only")}.</small>
      <small>Provider: ${htmlSafe(action.providerStatus)}.</small>
      <small>Safety: ${htmlSafe(action.safetyReason)}</small>
      <button type="button" data-nexus-controlled-action-queue-review="${index}">Review action</button>
    </li>
  `).join("");
  return `
    <section class="nexus-controlled-action-queue-card" aria-label="Nexus controlled action queue" data-nexus-controlled-action-queue="true" data-execution-authority="false">
      <span class="nexus-controlled-action-queue-label">Action queue</span>
      <strong>Nexus is preparing these reviewed steps.</strong>
      <ul>${items}</ul>
      ${gateHtml}
      ${marketplaceInquiryPreparationHtml}
      ${chronicCarePhysicianReportHtml}
      ${careTeamReportCopyViewHtml}
      ${localDraftHtml}
      ${callPreparationHtml}
      ${mapNavigationHandoffHtml}
      ${internalNavigationHtml}
      ${simulatedHtml}
      ${safetyDashboardHtml}
      ${taskHistoryHtml}
      ${auditHtml}
      <small>No provider API, phone call, message, payment, location, camera, medical, pharmacy, emergency, backend write, or external action can run from this queue.</small>
    </section>
  `;
}

function paintNexusControlledActionQueue() {
  const html = renderNexusControlledActionQueueCard();
  [
    ["#userCaptionPanel", "#userCaptionText"],
    ["#globalAssistantBar", "#globalAssistantStatus"]
  ].forEach(([rootSelector, anchorSelector]) => {
    const root = $(rootSelector);
    const anchor = root?.querySelector("[data-nexus-autonomous-workflow-host]")
      || root?.querySelector("[data-controlled-action-preview]")
      || $(anchorSelector);
    if (!root || !anchor) return;
    let element = root.querySelector("[data-nexus-controlled-action-queue-host]");
    if (!element) {
      element = document.createElement("div");
      element.dataset.nexusControlledActionQueueHost = "true";
      anchor.insertAdjacentElement("afterend", element);
    }
    element.innerHTML = html;
    element.classList.toggle("hidden", !html);
  });
}

function isControlledStagedActionPreviewFlagEnabled(globalRef) {
  // Sprint D6: explicit local/runtime test flag only. Default Standard User
  // behavior remains off, and this flag never grants execution authority.
  const root = globalRef || (typeof window !== "undefined" ? window : {});
  const flagName = ["NEXUS", "CONTROLLED", "STAGED", "ACTIONS", "ENABLED"].join("_");
  return Boolean(root && root[flagName] === true);
}

async function handleNexusGenesisAfricaAgOpportunityCommandAsync(command = "", options = {}) {
  if (handleNexusGenesisAfricaAgOpportunityCommand(command, options)) return true;
  const text = String(command || "").trim();
  if (!text || !isNexusGenesisAfricaAgOpportunityFallbackCommand(text)) return false;
  try {
    const response = await fetch("/api/nexus/africa-ag-opportunity/evaluate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        command: text,
        context: {
          language: languageCode(),
          source: options.source || "standard_user_server_fallback",
          consentState: "session_only_or_not_provided"
        }
      })
    });
    if (!response.ok) return false;
    const packet = await response.json();
    const message = packet.userVisibleStatus || "Nexus prepared an Africa agriculture opportunity packet.";
    recordNexusOsConversationTurn("assistant", message, {
      source: "nexus-genesis-africa-ag-opportunity-server-fallback",
      capabilityId: packet.capabilityId || "africa_youth_women_agricultural_opportunity_intelligence",
      noBuyerContacted: true,
      noTrainingEnrollment: true,
      noFinancingApplication: true,
      noYieldOrIncomeGuarantee: true
    });
    nexusAgenticBrainLastResult = {
      ok: true,
      command: text,
      message,
      source: "nexus-genesis-africa-ag-opportunity-server-fallback",
      capabilityId: packet.capabilityId || "africa_youth_women_agricultural_opportunity_intelligence",
      preparedCards: [renderNexusGenesisAfricaAgOpportunityCard(packet)],
      result: packet,
      localOnly: true,
      noExecutionAuthorized: true,
      noBuyerContacted: true,
      noTrainingEnrollment: true,
      noFinancingApplication: true,
      noTransportDispatch: true,
      noYieldOrIncomeGuarantee: true
    };
    setNexusCoreState("reasoning", {
      source: "genesis-africa-ag-opportunity-server-fallback",
      statusText: packet.participantProfile?.countryAmbiguity ? "Africa opportunity country clarification prepared." : "Africa opportunity packet prepared."
    });
    setVoiceResponse(message, true, {
      allowHandoff: false,
      command: text,
      source: "nexus-genesis-africa-ag-opportunity-server-fallback",
      africaAgOpportunityPacket: packet
    });
    renderUserWorkspace?.();
    return true;
  } catch {
    return false;
  }
}

function buildControlledStagedActionPreviewFromReadiness(readiness = visibleControlledActionPreviewReadiness, options = {}) {
  if (!isControlledStagedActionPreviewFlagEnabled(options.globalRef)) return null;
  if (!isVisibleControlledActionPreviewReadiness(readiness)) return null;
  const stagedActionMap = {
    openTrainingResources: {
      stagedActionId: "runtime-stage-agriculture-training-review",
      stagedActionType: "agriculture.training.review",
      title: "Review agriculture training options",
      evidenceRequirement: "Use a verified training source packet before any source-backed training claim.",
      sourcePacketRequirement: "Source packet required before presenting provider, enrollment, or course availability claims.",
      createdFromPromptFamily: "agriculture-training",
      safeUseNotes: "No enrollment, provider contact, message, payment, record change, or backend action has been taken.",
      limitations: "Review-only staged preview. It does not register the user for training."
    },
    explainLearningTopic: {
      stagedActionId: "runtime-stage-irrigation-learning-review",
      stagedActionType: "agriculture.irrigation.learning.review",
      title: "Review irrigation learning guidance",
      evidenceRequirement: "Use a verified irrigation education packet before any source-backed claim.",
      sourcePacketRequirement: "Source packet required before presenting localized irrigation guidance.",
      createdFromPromptFamily: "irrigation-learning",
      safeUseNotes: "No lesson record, farm operation, equipment purchase, provider contact, or backend action has been taken.",
      limitations: "Review-only staged preview. It is educational and not site-specific engineering advice."
    },
    showFarmJobs: {
      stagedActionId: "runtime-stage-farm-jobs-review",
      stagedActionType: "workforce.farm_jobs.review",
      title: "Review farm job pathway options",
      evidenceRequirement: "Use verified workforce or training source packets before any opportunity claim.",
      sourcePacketRequirement: "Source packet required before presenting provider, employer, or availability claims.",
      createdFromPromptFamily: "farm-jobs",
      safeUseNotes: "No application, employer contact, account change, message, or backend action has been taken.",
      limitations: "Review-only staged preview. It does not apply for a job."
    },
    browseMarketplace: {
      stagedActionId: "runtime-stage-agritrade-browse-review",
      stagedActionType: "marketplace.agritrade.browse.review",
      title: "Review AgriTrade browse options",
      evidenceRequirement: "Use local marketplace context only; do not make live buyer, seller, price, or availability claims.",
      sourcePacketRequirement: "Source packet required before source-backed marketplace guidance.",
      createdFromPromptFamily: "agritrade-browse",
      safeUseNotes: "No buy, sell, payment, message, order, shipping, listing, or account action has been taken.",
      limitations: "Review-only staged preview. It does not create a listing or contact a buyer."
    },
    explainAgricultureHelp: {
      stagedActionId: "runtime-stage-crop-issue-observation-review",
      stagedActionType: "agriculture.crop_issue.observation_review",
      title: "Review crop issue observations",
      evidenceRequirement: "Use a verified agriculture support packet before any source-backed crop guidance.",
      sourcePacketRequirement: "Source packet required before presenting localized crop support claims.",
      createdFromPromptFamily: "crop-issue-observation",
      safeUseNotes: "No camera, location, provider contact, diagnosis, crop record, or backend action has been taken.",
      limitations: "Review-only staged preview. It cannot diagnose crop disease or prescribe treatments."
    },
    openFieldSupportGuidance: {
      stagedActionId: "runtime-stage-field-support-review",
      stagedActionType: "agriculture.field_support.review",
      title: "Review field support guidance",
      evidenceRequirement: "Use a verified field support packet before any source-backed service guidance.",
      sourcePacketRequirement: "Source packet required before presenting localized field support claims.",
      createdFromPromptFamily: "field-support",
      safeUseNotes: "No dispatch, schedule, call, location request, provider contact, or backend action has been taken.",
      limitations: "Review-only staged preview. It does not request field service."
    }
  };
  const staged = stagedActionMap[String(readiness.actionId || "").trim()];
  if (!staged) return null;
  const summary = String(readiness.safePreviewSummary || "").replace(/\s+/g, " ").trim();
  const blockedExecutionChannels = [
    "call",
    "message",
    "payment",
    "location",
    "camera",
    "provider",
    "emergency",
    "medical",
    "pharmacy",
    "backend-write",
    "pending-action"
  ];
  const combined = `${staged.title} ${summary} ${staged.safeUseNotes} ${staged.limitations}`;
  if (/\b(opened|started|submitted|called|paid|verified|permission granted|diagnose|dispatch|schedule|buy|sell|checkout|login|identity|location shared|camera activated|telehealth started|message sent)\b/i.test(combined)) return null;
  return Object.freeze({
    schemaVersion: "nexus.sprintD6.controlledStagedActionPreview.v1",
    sourcePreviewReadinessVersion: readiness.schemaVersion,
    ...staged,
    summary,
    reviewOnly: true,
    requiresUserApproval: true,
    executionAuthority: false,
    riskTier: readiness.previewRiskLevel || "low",
    blockedExecutionChannels,
    providerHandoffAllowed: false,
    pendingActionCreationAllowed: false,
    backendWriteAllowed: false,
    networkSideEffectAllowed: false,
    storageSideEffectAllowed: false,
    permissionRequestAllowed: false,
    externalNavigationAllowed: false,
    visibleWhenFlagOnOnly: true
  });
}

function isVisibleControlledStagedActionPreview(preview = visibleControlledStagedActionPreview) {
  if (!preview || typeof preview !== "object") return false;
  if (preview.schemaVersion !== "nexus.sprintD6.controlledStagedActionPreview.v1") return false;
  if (preview.reviewOnly !== true || preview.requiresUserApproval !== true) return false;
  if (preview.executionAuthority !== false) return false;
  if (preview.providerHandoffAllowed !== false || preview.pendingActionCreationAllowed !== false || preview.backendWriteAllowed !== false) return false;
  if (preview.networkSideEffectAllowed !== false || preview.storageSideEffectAllowed !== false || preview.permissionRequestAllowed !== false || preview.externalNavigationAllowed !== false) return false;
  if (!["info", "low"].includes(String(preview.riskTier || ""))) return false;
  if (!Array.isArray(preview.blockedExecutionChannels)) return false;
  const requiredBlocked = ["call", "message", "payment", "location", "camera", "provider", "emergency", "medical", "pharmacy", "backend-write", "pending-action"];
  if (!requiredBlocked.every(channel => preview.blockedExecutionChannels.includes(channel))) return false;
  const text = `${preview.title || ""} ${preview.summary || ""} ${preview.safeUseNotes || ""} ${preview.limitations || ""}`;
  if (/\b(opened|started|submitted|called|paid|verified|permission granted|diagnose|dispatch|schedule|buy|sell|checkout|login|identity|location shared|camera activated|telehealth started|message sent)\b/i.test(text)) return false;
  return Boolean(String(preview.title || "").trim() && String(preview.summary || "").trim());
}

function renderControlledStagedActionPreview(preview = visibleControlledStagedActionPreview) {
  if (!isVisibleControlledStagedActionPreview(preview)) return "";
  return `
    <section class="nexus-controlled-staged-action-preview" data-nexus-controlled-staged-action-preview="true" data-execution-authority="false" data-provider-handoff="false" data-pending-action-creation="false" data-network-side-effect="false" aria-label="Nexus staged action review-only preview">
      <span class="nexus-controlled-staged-action-label">Staged review</span>
      <strong class="nexus-controlled-staged-action-title">${htmlSafe(preview.title)}</strong>
      <span class="nexus-controlled-staged-action-copy">${htmlSafe(preview.summary)}</span>
      <span class="nexus-controlled-staged-action-copy"><strong>Evidence &amp; Verification:</strong> ${htmlSafe(preview.evidenceRequirement)}</span>
      <span class="nexus-controlled-staged-action-copy"><strong>Source packet:</strong> ${htmlSafe(preview.sourcePacketRequirement)}</span>
      <span class="nexus-controlled-staged-action-note">${htmlSafe(preview.safeUseNotes)}</span>
      <span class="nexus-controlled-staged-action-note">${htmlSafe(preview.limitations)}</span>
      <span class="nexus-controlled-staged-action-note">Review only - no action has been taken.</span>
    </section>
  `;
}

function isUserConfirmationPreviewFlagEnabled(globalRef) {
  // Sprint E6: explicit runtime/local test flag only. Default Standard User
  // behavior remains unchanged, and this flag never grants execution authority.
  const root = globalRef || (typeof window !== "undefined" ? window : {});
  const flagName = ["NEXUS", "USER", "CONFIRMATION", "PREVIEW", "ENABLED"].join("_");
  return Boolean(root && root[flagName] === true);
}

function buildUserConfirmationPreviewFromReadiness(readiness = latestControlledActionConfirmationReadiness, options = {}) {
  if (!isUserConfirmationPreviewFlagEnabled(options.globalRef)) return null;
  if (!isVisibleControlledActionConfirmationPrototypeReadiness(readiness)) return null;
  const evidenceMap = {
    openTrainingResources: {
      evidenceRequirement: "Verified training source packet required before presenting enrollment or course availability claims.",
      sourcePacketRequirement: "Training source packet required.",
      limitations: "Approval intent only. It does not enroll the user or contact a provider."
    },
    explainLearningTopic: {
      evidenceRequirement: "Verified agriculture education source packet required before source-backed learning guidance.",
      sourcePacketRequirement: "Learning source packet required.",
      limitations: "Approval intent only. It does not create a lesson record or site-specific engineering advice."
    },
    showFarmJobs: {
      evidenceRequirement: "Verified workforce source packet required before presenting provider, employer, or opportunity claims.",
      sourcePacketRequirement: "Workforce source packet required.",
      limitations: "Approval intent only. It does not apply for a job or contact an employer."
    },
    browseMarketplace: {
      evidenceRequirement: "Verified marketplace context required before source-backed buyer, seller, price, or availability guidance.",
      sourcePacketRequirement: "Marketplace source packet required.",
      limitations: "Approval intent only. It does not buy, sell, list, message, or process payment."
    },
    explainAgricultureHelp: {
      evidenceRequirement: "Verified agriculture support source packet required before localized crop guidance.",
      sourcePacketRequirement: "Agriculture support source packet required.",
      limitations: "Approval intent only. It does not diagnose, request camera/location, or create a crop record."
    },
    openFieldSupportGuidance: {
      evidenceRequirement: "Verified field support source packet required before service guidance.",
      sourcePacketRequirement: "Field support source packet required.",
      limitations: "Approval intent only. It does not dispatch, schedule, call, or request location."
    }
  };
  const evidence = evidenceMap[String(readiness.actionId || "").trim()];
  if (!evidence) return null;
  const blockedExecutionChannels = [
    "provider",
    "call",
    "message",
    "payment",
    "location",
    "camera",
    "medical",
    "pharmacy",
    "emergency",
    "backend-write",
    "pending-action"
  ];
  const title = String(readiness.safeConfirmationTitle || "").trim();
  const summary = String(readiness.safeConfirmationSummary || "").replace(/\s+/g, " ").trim();
  const question = String(readiness.confirmationQuestion || "").replace(/\s+/g, " ").trim();
  const combined = `${title} ${summary} ${question} ${evidence.evidenceRequirement} ${evidence.limitations}`;
  if (/\b(opened|started|submitted|called|paid|verified|permission granted|diagnose|dispatch|schedule|buy|sell|checkout|login|identity|location shared|camera activated|telehealth started|message sent|provider contacted|prescription refilled)\b/i.test(combined)) return null;
  return Object.freeze({
    schemaVersion: "nexus.sprintE6.userConfirmationPreview.v1",
    sourceConfirmationReadinessVersion: readiness.schemaVersion,
    actionId: readiness.actionId,
    selectedToolId: readiness.selectedToolId,
    levelOneLabel: readiness.levelOneLabel,
    title,
    summary,
    question,
    approvalIntentOnly: true,
    requiresFinalExecutionGate: true,
    executionAuthority: false,
    riskTier: readiness.confirmationRiskLevel || "low",
    evidenceRequirement: evidence.evidenceRequirement,
    sourcePacketRequirement: evidence.sourcePacketRequirement,
    limitations: evidence.limitations,
    blockedExecutionChannels,
    providerHandoffAllowed: false,
    callOrMessageAllowed: false,
    paymentAllowed: false,
    locationAllowed: false,
    cameraAllowed: false,
    medicalOrPharmacyAllowed: false,
    emergencyAllowed: false,
    backendWriteAllowed: false,
    pendingActionCreationAllowed: false,
    visibleWhenFlagOnOnly: true
  });
}

function isVisibleUserConfirmationPreview(preview = visibleUserConfirmationPreview) {
  if (!preview || typeof preview !== "object") return false;
  if (preview.schemaVersion !== "nexus.sprintE6.userConfirmationPreview.v1") return false;
  if (preview.approvalIntentOnly !== true || preview.requiresFinalExecutionGate !== true) return false;
  if (preview.executionAuthority !== false || preview.providerHandoffAllowed !== false) return false;
  if (preview.callOrMessageAllowed !== false || preview.paymentAllowed !== false || preview.locationAllowed !== false || preview.cameraAllowed !== false) return false;
  if (preview.medicalOrPharmacyAllowed !== false || preview.emergencyAllowed !== false || preview.backendWriteAllowed !== false || preview.pendingActionCreationAllowed !== false) return false;
  if (!["info", "low"].includes(String(preview.riskTier || ""))) return false;
  if (!Array.isArray(preview.blockedExecutionChannels)) return false;
  const requiredBlocked = ["provider", "call", "message", "payment", "location", "camera", "medical", "pharmacy", "emergency", "backend-write", "pending-action"];
  if (!requiredBlocked.every(channel => preview.blockedExecutionChannels.includes(channel))) return false;
  const text = `${preview.title || ""} ${preview.summary || ""} ${preview.question || ""} ${preview.evidenceRequirement || ""} ${preview.limitations || ""}`;
  if (/\b(opened|started|submitted|called|paid|verified|permission granted|diagnose|dispatch|schedule|buy|sell|checkout|login|identity|location shared|camera activated|telehealth started|message sent|provider contacted|prescription refilled)\b/i.test(text)) return false;
  return Boolean(String(preview.title || "").trim() && String(preview.summary || "").trim() && String(preview.evidenceRequirement || "").trim());
}

function renderUserConfirmationPreview(preview = visibleUserConfirmationPreview) {
  if (!isVisibleUserConfirmationPreview(preview)) return "";
  return `
    <section class="nexus-user-confirmation-preview" data-nexus-user-confirmation-preview="true" data-approval-intent-only="true" data-final-execution-gate-required="true" data-execution-authority="false" data-provider-handoff="false" data-pending-action-creation="false" aria-label="Nexus user confirmation approval-intent preview">
      <span class="nexus-user-confirmation-label">Approval intent only</span>
      <strong class="nexus-user-confirmation-title">${htmlSafe(preview.title)}</strong>
      <span class="nexus-user-confirmation-copy">${htmlSafe(preview.summary)}</span>
      <span class="nexus-user-confirmation-copy"><strong>Evidence &amp; Verification:</strong> ${htmlSafe(preview.evidenceRequirement)}</span>
      <span class="nexus-user-confirmation-copy"><strong>Source packet:</strong> ${htmlSafe(preview.sourcePacketRequirement)}</span>
      <span class="nexus-user-confirmation-copy"><strong>Blocked channels:</strong> ${htmlSafe(preview.blockedExecutionChannels.join(", "))}</span>
      <span class="nexus-user-confirmation-note">${htmlSafe(preview.limitations)}</span>
      <span class="nexus-user-confirmation-note">Your approval intent is not execution. A separate final execution gate is still required.</span>
    </section>
  `;
}

function paintControlledStagedActionPreview() {
  const html = [renderControlledStagedActionPreview(), renderUserConfirmationPreview()].filter(Boolean).join("");
  const root = $("#nexus-controlled-low-risk-renderer-root");
  if (!root) return;
  root.innerHTML = html;
  root.hidden = !html;
  root.setAttribute("aria-hidden", html ? "false" : "true");
  root.dataset.visibleRendererEnabled = html ? "true" : "false";
  // Shared controlled mount safety metadata is intentionally kept after a
  // neutral spacing note so older dormant-renderer import-boundary guards can
  // distinguish this Sprint D/E review-only surface from the separate Phase 14
  // text renderer loader. This preserves identical runtime behavior.
  root.dataset.executionAllowed = "false";
  root.dataset.providerHandoff = "false";
  root.dataset.permissionRequest = "false";
}

function isVisibleControlledActionConfirmationPrototypeReadiness(readiness = {}) {
  if (!readiness || typeof readiness !== "object") return false;
  if (readiness.schemaVersion !== "controlled-action-confirmation-readiness.v1") return false;
  if (readiness.confirmationEligible !== true || readiness.userVisibleInThisPhase !== true) return false;
  if (!["info", "low"].includes(String(readiness.confirmationRiskLevel || ""))) return false;
  if (readiness.allowedNextStep !== "observeConfirmationReadinessOnly") return false;
  if (readiness.executionBoundary !== "confirmationReadinessOnly") return false;
  if (readiness.confirmationBlockedReason) return false;
  if (Array.isArray(readiness.requiredPermissions) && readiness.requiredPermissions.length) return false;
  if (Array.isArray(readiness.missingInputs) && readiness.missingInputs.length) return false;
  const combined = `${readiness.safeConfirmationTitle || ""} ${readiness.safeConfirmationSummary || ""} ${readiness.confirmationQuestion || ""} ${readiness.levelOneLabel || ""}`;
  if (/\b(execute|start|open now|submit|buy|sell|pay|call|verify|use camera|use location|schedule|dispatch|checkout|identity|account|permission granted|opened|started|submitted|paid|called|verified)\b/i.test(combined)) return false;
  return Boolean(String(readiness.safeConfirmationTitle || "").trim() && String(readiness.levelOneLabel || "").trim());
}

function renderControlledActionConfirmationPrototype(readiness = latestControlledActionConfirmationReadiness, surface = "") {
  if (surface !== "ask-full-assistant") return "";
  if (!isVisibleControlledActionConfirmationPrototypeReadiness(readiness)) return "";
  const title = String(readiness.safeConfirmationTitle || "").trim();
  const summary = String(readiness.safeConfirmationSummary || "").replace(/\s+/g, " ").trim();
  const status = String(controlledActionConfirmationPrototypeStatus || "Prototype only - no action will be taken.").trim();
  return `
    <div class="nexus-confirmation-prototype" data-controlled-action-confirmation-prototype-panel="true" aria-label="Nexus review options prototype">
      <strong class="nexus-confirmation-title">${htmlSafe(title)}</strong>
      <span class="nexus-confirmation-copy">${htmlSafe(summary)}</span>
      <span class="nexus-confirmation-copy">This is a low-risk informational step. No special permission is needed.</span>
      <div class="nexus-confirmation-actions" aria-label="Nexus non-executing review controls">
        <button class="nexus-confirmation-button" type="button" data-controlled-action-confirmation-prototype="review">Review options</button>
        <button class="nexus-confirmation-button secondary" type="button" data-controlled-action-confirmation-prototype="dismiss">Not now</button>
      </div>
      <span class="nexus-confirmation-status" role="status">${htmlSafe(status)}</span>
    </div>
  `;
}

function paintControlledActionConfirmationPrototype() {
  const root = $("#globalAssistantBar");
  const anchor = $("#globalAssistantStatus");
  if (!root || !anchor) return;
  let element = root.querySelector("[data-controlled-action-confirmation-prototype-host]");
  if (!element) {
    element = document.createElement("div");
    element.dataset.controlledActionConfirmationPrototypeHost = "true";
    const previewElement = root.querySelector("[data-controlled-action-preview]");
    (previewElement || anchor).insertAdjacentElement("afterend", element);
  }
  const html = renderControlledActionConfirmationPrototype(latestControlledActionConfirmationReadiness, "ask-full-assistant");
  element.innerHTML = html;
  element.classList.toggle("hidden", !html);
}

function paintControlledActionPreview() {
  const html = renderControlledActionPreview();
  [
    ["#userCaptionPanel", "#userCaptionText"],
    ["#globalAssistantBar", "#globalAssistantStatus"]
  ].forEach(([rootSelector, anchorSelector]) => {
    const root = $(rootSelector);
    const anchor = $(anchorSelector);
    if (!root || !anchor) return;
    let element = root.querySelector("[data-controlled-action-preview]");
    if (!element) {
      element = document.createElement("div");
      element.dataset.controlledActionPreview = "true";
      anchor.insertAdjacentElement("afterend", element);
    }
    element.innerHTML = html;
    element.classList.toggle("hidden", !html);
  });
  if (typeof paintNexusAutonomousWorkflow === "function") {
    paintNexusAutonomousWorkflow();
  }
  if (typeof paintNexusControlledActionQueue === "function") {
    paintNexusControlledActionQueue();
  }
  paintControlledStagedActionPreview();
  paintControlledActionConfirmationPrototype();
}

function clearControlledActionPreview(reason = "reset") {
  // Phase 8O: visible previews are informational and must not persist across
  // unrelated commands, blocked metadata, module navigation, or assistant reset.
  visibleControlledActionPreviewReadiness = null;
  nexusAutonomousWorkflowState = null;
  nexusControlledActionQueue = [];
  nexusUserConfirmationGateState = null;
  visibleControlledStagedActionPreview = null;
  visibleUserConfirmationPreview = null;
  latestControlledActionConfirmationReadiness = null;
  latestControlledActionNavigationReadiness = null;
  controlledActionConfirmationPrototypeStatus = "";
  paintControlledActionPreview();
  if (localStorage.getItem("agrinexusAgentActionDebug") === "on") {
    console.debug("Nexus controlled action preview cleared", { reason });
  }
}

const controlledLowRiskNavigationTargets = {
  training: {
    sectionId: "learning",
    title: "training resources",
    status: "Showing safe training resources. No account, permission, or transaction action was taken."
  },
  jobs: {
    sectionId: "workforce",
    title: "job pathway resources",
    status: "Showing safe job pathway resources. No application, account, or transaction action was taken."
  },
  fieldSupportInfo: {
    sectionId: "trade",
    title: "field support guidance",
    status: "Showing safe field support guidance. No dispatch, schedule, call, or location action was taken."
  },
  learning: {
    sectionId: "learning",
    title: "learning resources",
    status: "Showing safe learning resources. No lesson, record, or account action was taken."
  },
  marketplaceBrowse: {
    sectionId: "trade",
    title: "AgriTrade browsing guidance",
    status: "Showing safe AgriTrade browsing guidance. No buy, sell, payment, or account action was taken."
  },
  agricultureHelp: {
    sectionId: "trade",
    title: "agriculture guidance",
    status: "Showing safe agriculture guidance. No camera, location, dispatch, or record action was taken."
  }
};

function getAllowedControlledNavigationTarget(readiness = latestControlledActionNavigationReadiness) {
  if (!readiness || typeof readiness !== "object") return null;
  if (readiness.schemaVersion !== "controlled-action-navigation-readiness.v1") return null;
  if (readiness.navigationEligible !== true) return null;
  if (readiness.navigationBlockedReason) return null;
  if (!["info", "low"].includes(String(readiness.navigationRiskLevel || ""))) return null;
  if (readiness.requiresConfirmationClick !== true || readiness.allowedAfterConfirmationOnly !== true) return null;
  if (readiness.allowedNextStep !== "observeNavigationReadinessOnly") return null;
  if (readiness.executionBoundary !== "navigationReadinessOnly") return null;
  if (Array.isArray(readiness.requiredPermissions) && readiness.requiredPermissions.length) return null;
  if (Array.isArray(readiness.missingInputs) && readiness.missingInputs.length) return null;
  const targetRoute = String(readiness.targetRoute || "").trim();
  const target = controlledLowRiskNavigationTargets[targetRoute];
  if (!target || !target.sectionId) return null;
  if (!["learning", "workforce", "trade"].includes(target.sectionId)) return null;
  const combined = `${targetRoute} ${target.sectionId} ${readiness.selectedToolId || ""} ${readiness.actionId || ""} ${readiness.levelOneLabel || ""}`;
  if (/\b(health|telehealth|video|camera|call|doctor|provider|nurse|clinic|hospital|location|locate|map|payment|pay|wallet|identity|account|login|verify|buy|sell|order|quote|message|dispatch|schedule|submit|checkout|permission|diagnose|external|file|communicat)\b/i.test(combined)) return null;
  return { ...target, targetRoute };
}

function performControlledLowRiskNavigation(readiness = latestControlledActionNavigationReadiness) {
  const target = getAllowedControlledNavigationTarget(readiness);
  if (!target) {
    return {
      navigated: false,
      status: "Review is not available for this request. No action has been taken."
    };
  }
  goSection(target.sectionId, {
    instant: true,
    keepAssistant: true,
    openDefaultAction: false,
    scroll: false
  });
  const status = $("#simpleActionStatus") || $(`#${target.sectionId} .user-module-status`);
  if (status) status.textContent = translateText(target.status);
  return {
    navigated: true,
    sectionId: target.sectionId,
    targetRoute: target.targetRoute,
    status: target.status
  };
}

function handleControlledActionConfirmationPrototypeClick(event) {
  const button = event.target.closest("[data-controlled-action-confirmation-prototype]");
  if (!button) return false;
  event.preventDefault();
  event.stopPropagation();
  if (!button.closest("#globalAssistantBar")) return true;
  if (!isVisibleControlledActionConfirmationPrototypeReadiness(latestControlledActionConfirmationReadiness)) {
    controlledActionConfirmationPrototypeStatus = "";
    paintControlledActionConfirmationPrototype();
    return true;
  }
  const action = button.dataset.controlledActionConfirmationPrototype;
  if (action === "review") {
    const result = performControlledLowRiskNavigation(latestControlledActionNavigationReadiness);
    controlledActionConfirmationPrototypeStatus = result.status;
    paintControlledActionConfirmationPrototype();
    return true;
  }
  if (action === "dismiss") {
    clearControlledActionPreview("confirmation-prototype-dismissed");
    return true;
  }
  return true;
}

function paintLevelOneAgentActionSuggestionLabel() {
  const suggestion = visibleLevelOneAgentActionSuggestion;
  const label = suggestion?.visibility === "visible-level-1-label" ? String(suggestion.levelLabel || "").trim() : "";
  [
    ["#userCaptionPanel", "#userCaptionText"],
    ["#globalAssistantBar", "#globalAssistantStatus"]
  ].forEach(([rootSelector, anchorSelector]) => {
    const root = $(rootSelector);
    const anchor = $(anchorSelector);
    if (!root || !anchor) return;
    let element = root.querySelector("[data-level-one-suggestion-label]");
    if (!element) {
      element = document.createElement("span");
      element.className = "level-one-suggestion-label";
      element.dataset.levelOneSuggestionLabel = "true";
      element.setAttribute("aria-label", "Nexus suggestion category");
      anchor.insertAdjacentElement("beforebegin", element);
    }
    element.textContent = label;
    element.classList.toggle("hidden", !label);
  });
}

function clearLevelOneAgentActionSuggestionLabel() {
  visibleLevelOneAgentActionSuggestion = null;
  clearControlledActionPreview("level-one-suggestion-cleared");
  paintLevelOneAgentActionSuggestionLabel();
}

function classifyNexusIntentForMetadata(command = "", context = {}) {
  const classifier = globalThis.NexusIntentClassifier?.classifyNexusIntent;
  if (typeof classifier !== "function") return null;
  try {
    return classifier({ text: command, ...context });
  } catch (error) {
    console.warn("Nexus intent classifier unavailable for metadata", error);
    return null;
  }
}

function localLevelOneSuggestionForSimpleUserIntent(intent = {}, command = "") {
  const lower = String(command || "").toLowerCase();
  if (!intent || intent.type === "clarify") return null;
  if (/\b(telehealth|video|camera|call|doctor|provider|nurse|clinic|hospital|medicine|medical|health|location|locate|where am i|sell|buy|payment|pay|checkout|fertilizer|login|account|verify|identity)\b/.test(lower)) return null;
  let classification = null;
  const classifier = globalThis.NexusIntentClassifier?.classifyNexusIntent;
  if (typeof classifier === "function") {
    try {
      classification = classifier({
        text: command,
        normalizedIntent: intent.intent || intent.type || "",
        routeContext: `${intent.workflow || ""} ${intent.directAction || ""}`
      });
    } catch (error) {
      console.warn("Nexus intent classifier unavailable for metadata", error);
    }
  }
  if (classification?.risk === "low" && classification.actionType === "preview_or_route" && classification.selectedToolId) {
    const levelLabelsByToolId = {
      "workforce.training": "Training",
      "learning.start": "Learning",
      "workforce.job_pathways": "Jobs",
      "marketplace.agritrade": "Marketplace",
      "workforce.field_support": "Field Support",
      "agriculture.help": "Agriculture Help"
    };
    const levelLabel = levelLabelsByToolId[classification.selectedToolId] || "";
    if (levelLabel) {
      return {
        visibility: "visible-level-1-label",
        selectedToolId: classification.selectedToolId,
        label: levelLabel,
        levelLabel,
        displayOnly: true,
        userClickRequired: false,
        executionAllowed: false,
        autoOpenAllowed: false,
        source: "nexus-intent-classifier",
        intentClassification: classification
      };
    }
  }
  let levelLabel = "";
  if (/\b(agriculture training|workforce training|start training|show training|open training)\b/.test(lower)) {
    levelLabel = "Training";
  } else if (/\b(teach me|help me learn|start a course|show lesson|resume lesson|irrigation works|how .+ works)\b/.test(lower) || intent.workflow === "learning" || intent.directAction === "learning-guided") {
    levelLabel = "Learning";
  } else if (/\b(farm jobs|show jobs|job pathways|career pathways|find work|job readiness)\b/.test(lower) || intent.workflow === "workforce" || intent.directAction === "workforce-guided") {
    levelLabel = "Jobs";
  } else if (/\b(browse agritrade|open agritrade|open marketplace|browse marketplace|marketplace)\b/.test(lower)) {
    levelLabel = "Marketplace";
  } else if (/\b(field support|field help|field issue|farm support)\b/.test(lower)) {
    levelLabel = "Field Support";
  } else if (/\b(crop issue|crop issues|crop problem|crop problems|crop stress|pest issue|pest problem)\b/.test(lower)) {
    levelLabel = "Agriculture Help";
  } else if (/\b(simulated|simulation|dry[- ]?run)\b/.test(lower)) {
    levelLabel = "Simulation";
  }
  if (!levelLabel) return null;
  const selectedToolIdsByLabel = {
    "Training": "workforce.training",
    "Learning": "learning.start",
    "Jobs": "workforce.job_pathways",
    "Marketplace": "marketplace.agritrade",
    "Field Support": "workforce.field_support",
    "Agriculture Help": "agriculture.help",
    "Simulation": "simulation.local"
  };
  return {
    visibility: "visible-level-1-label",
    selectedToolId: selectedToolIdsByLabel[levelLabel] || "",
    label: levelLabel,
    levelLabel,
    displayOnly: true,
    userClickRequired: false,
    executionAllowed: false,
    autoOpenAllowed: false,
    source: "local-simple-user-route"
  };
}

function paintLocalLevelOneSuggestionForSimpleUserIntent(intent = {}, command = "") {
  const suggestion = localLevelOneSuggestionForSimpleUserIntent(intent, command);
  if (!suggestion) {
    clearLevelOneAgentActionSuggestionLabel();
    return;
  }
  clearControlledActionPreview("low-risk-preview-replaced");
  visibleLevelOneAgentActionSuggestion = suggestion;
  const controlledActionMetadata = buildControlledActionMetadataFromSuggestion(suggestion);
  const controlledActionPreviewReadiness = buildControlledActionPreviewReadinessFromMetadata(controlledActionMetadata);
  visibleControlledActionPreviewReadiness = isVisibleControlledActionPreviewReadiness(controlledActionPreviewReadiness)
    ? controlledActionPreviewReadiness
    : null;
  if (visibleControlledActionPreviewReadiness?.taskPlan) {
    if (typeof startNexusAutonomousWorkflowFromTaskPlan === "function") {
      startNexusAutonomousWorkflowFromTaskPlan(visibleControlledActionPreviewReadiness.taskPlan, { command });
    }
  }
  visibleControlledStagedActionPreview = visibleControlledActionPreviewReadiness
    ? buildControlledStagedActionPreviewFromReadiness(visibleControlledActionPreviewReadiness)
    : null;
  latestControlledActionConfirmationReadiness = visibleControlledActionPreviewReadiness
    ? buildControlledActionConfirmationReadinessFromPreview(visibleControlledActionPreviewReadiness)
    : null;
  visibleUserConfirmationPreview = latestControlledActionConfirmationReadiness
    ? buildUserConfirmationPreviewFromReadiness(latestControlledActionConfirmationReadiness)
    : null;
  latestControlledActionNavigationReadiness = latestControlledActionConfirmationReadiness
    ? buildControlledActionNavigationReadinessFromConfirmation(latestControlledActionConfirmationReadiness)
    : null;
  paintLevelOneAgentActionSuggestionLabel();
  paintControlledActionPreview();
}

function buildControlledActionMetadataFromSuggestion(lowRiskSuggestion = {}, context = {}) {
  // Phase 8I: schema foundation only. This helper creates internal metadata for
  // future action readiness work. It must not render UI, stage actions, request
  // permissions, route, open workflows, confirm, or execute anything.
  if (!lowRiskSuggestion || typeof lowRiskSuggestion !== "object") return null;
  if (lowRiskSuggestion.visibility !== "visible-level-1-label") return null;
  if (lowRiskSuggestion.displayOnly !== true) return null;
  if (lowRiskSuggestion.executionAllowed !== false || lowRiskSuggestion.autoOpenAllowed !== false) return null;
  const selectedToolId = String(lowRiskSuggestion.selectedToolId || context.agentAction?.selectedToolId || "").trim();
  const levelOneLabel = String(lowRiskSuggestion.levelLabel || "").trim();
  const actionMap = {
    "workforce.training": { actionId: "openTrainingResources", riskLevel: "low", confirmationText: "Nexus recognized this as Training. This metadata does not open training or start an action." },
    "workforce.job_pathways": { actionId: "showFarmJobs", riskLevel: "low", confirmationText: "Nexus recognized this as Jobs. This metadata does not open job pathways or submit anything." },
    "workforce.field_support": { actionId: "openFieldSupportGuidance", riskLevel: "info", confirmationText: "Nexus recognized this as Field Support. This metadata does not open field tools or create evidence." },
    "learning.start": { actionId: "explainLearningTopic", riskLevel: "low", confirmationText: "Nexus recognized this as Learning. This metadata does not open lessons or create records." },
    "marketplace.agritrade": { actionId: "browseMarketplace", riskLevel: "low", confirmationText: "Nexus recognized this as Marketplace. This metadata does not buy, sell, message, or process payment." },
    "agriculture.help": { actionId: "explainAgricultureHelp", riskLevel: "info", confirmationText: "Nexus recognized this as Agriculture Help. This metadata does not scan fields or create crop records." },
    "simulation.local": { actionId: "prepareLocalSimulationResult", riskLevel: "low", confirmationText: "Nexus recognized this as Simulation. This metadata prepares a local-only simulated result without contacting providers." }
  };
  const action = actionMap[selectedToolId];
  if (!action || !levelOneLabel) return null;
  return {
    schemaVersion: "controlled-action-metadata.v1",
    actionId: action.actionId,
    selectedToolId,
    levelOneLabel,
    riskLevel: action.riskLevel,
    requiredPermissions: [],
    missingInputs: [],
    confirmationRequired: false,
    confirmationText: action.confirmationText,
    cancelPath: "User can ignore the suggestion or choose another request.",
    executionBoundary: "metadataOnly",
    auditPolicy: "observeOnly",
    blockedReason: null
  };
}

function buildControlledActionPreviewReadinessFromMetadata(controlledActionMetadata = {}) {
  // Phase 8M: readiness remains non-executing. Eligible low-risk readiness may
  // render a small informational preview, but it must not ask to continue, stage
  // actions, request permissions, route, open workflows, confirm, or execute.
  if (!controlledActionMetadata || typeof controlledActionMetadata !== "object") return null;
  if (controlledActionMetadata.schemaVersion !== "controlled-action-metadata.v1") return null;
  const selectedToolId = String(controlledActionMetadata.selectedToolId || "").trim();
  const actionId = String(controlledActionMetadata.actionId || "").trim();
  const levelOneLabel = String(controlledActionMetadata.levelOneLabel || "").trim();
  const requiredPermissions = Array.isArray(controlledActionMetadata.requiredPermissions)
    ? controlledActionMetadata.requiredPermissions.slice()
    : [];
  const missingInputs = Array.isArray(controlledActionMetadata.missingInputs)
    ? controlledActionMetadata.missingInputs.slice()
    : [];
  const base = {
    schemaVersion: "controlled-action-preview-readiness.v1",
    sourceMetadataVersion: "controlled-action-metadata.v1",
    actionId,
    selectedToolId,
    levelOneLabel,
    previewEligible: false,
    previewBlockedReason: "Preview readiness is not available for this metadata.",
    previewRiskLevel: controlledActionMetadata.riskLevel || "restricted",
    previewMode: "restrictedPreviewBlocked",
    safePreviewTitle: "",
    safePreviewSummary: "",
    requiresExplicitConfirmation: false,
    requiredPermissions,
    missingInputs,
    allowedNextStep: "blocked",
    executionBoundary: "previewOnlyReadiness",
    auditPolicy: "observeOnly",
    taskPlan: null,
    userVisibleInThisPhase: false
  };
  const previewMap = {
    openTrainingResources: {
      title: "Review training resources",
      summary: "I found the best next step: review training options, compare learning paths, and choose what fits the worker or farmer. This stays guidance-only until you decide where to go.",
      mode: "lowRiskPreviewOnly"
    },
    showFarmJobs: {
      title: "Review farm job resources",
      summary: "I can safely help compare job pathways, readiness gaps, and next preparation steps. This does not apply, submit, message an employer, or change a profile.",
      mode: "lowRiskPreviewOnly"
    },
    openFieldSupportGuidance: {
      title: "Review field support guidance",
      summary: "I can guide the field-support questions to ask next and help organize observations. This is planning support only, with no task record or outside action.",
      mode: "informationalPreviewOnly"
    },
    explainLearningTopic: {
      title: "Review irrigation learning help",
      summary: "I can teach this in plain steps, suggest what to study next, and connect it to practical field work. This preview keeps the lesson and records unchanged.",
      mode: "lowRiskPreviewOnly"
    },
    browseMarketplace: {
      title: "Review AgriTrade browsing help",
      summary: "I can guide you through AgriTrade as a browse-only marketplace preview. This stays informational and does not start commerce, contact, or money movement.",
      mode: "informationalPreviewOnly"
    },
    explainAgricultureHelp: {
      title: "Review agriculture help",
      summary: "I can help reason through crop symptoms, likely causes, and safer next questions. This stays informational, with no field scan or crop record.",
      mode: "informationalPreviewOnly"
    },
    prepareLocalSimulationResult: {
      title: "Review simulated provider result",
      summary: "I can prepare a local-only simulated provider result for review. This stays simulation-only and does not contact a provider, send a message, place a call, open a route, process payment, or start any external action.",
      mode: "lowRiskPreviewOnly"
    }
  };
  const restrictedTerms = /\b(health|telehealth|video|camera|call|doctor|provider|clinic|hospital|location|locate|map|payment|pay|wallet|identity|account|login|verify|buy|sell|order|quote|message|dispatch|schedule)\b/i;
  const riskLevel = String(controlledActionMetadata.riskLevel || "").trim();
  if (!["info", "low"].includes(riskLevel)) {
    return { ...base, previewBlockedReason: "Risk level is not preview-eligible.", previewRiskLevel: riskLevel || "restricted" };
  }
  if (requiredPermissions.length || missingInputs.length) {
    return {
      ...base,
      previewBlockedReason: requiredPermissions.length ? "Preview would require permissions." : "Preview would require missing inputs.",
      previewMode: requiredPermissions.length ? "permissionRequiredPreviewBlocked" : "restrictedPreviewBlocked"
    };
  }
  if (controlledActionMetadata.executionBoundary !== "metadataOnly" || controlledActionMetadata.blockedReason) {
    return { ...base, previewBlockedReason: controlledActionMetadata.blockedReason || "Execution boundary is not metadata-only." };
  }
  if (restrictedTerms.test(`${selectedToolId} ${actionId} ${levelOneLabel}`)) {
    return { ...base, previewBlockedReason: "Sensitive or transactional action is not preview-eligible." };
  }
  const preview = previewMap[actionId];
  if (!preview) return base;
  const taskPlanCategoryMap = {
    openTrainingResources: "training-learning",
    showFarmJobs: "workforce-jobs",
    openFieldSupportGuidance: "agriculture-help",
    explainLearningTopic: "training-learning",
    browseMarketplace: "marketplace-browsing",
    explainAgricultureHelp: "agriculture-help",
    prepareLocalSimulationResult: "simulation-local"
  };
  const taskPlan = buildNexusAutonomousTaskPlan(`${selectedToolId} ${levelOneLabel} ${preview.summary}`, {
    category: taskPlanCategoryMap[actionId] || selectedToolId,
    userIntent: preview.summary
  });
  return {
    ...base,
    previewEligible: true,
    previewBlockedReason: null,
    previewRiskLevel: riskLevel,
    previewMode: preview.mode,
    safePreviewTitle: preview.title,
    safePreviewSummary: preview.summary,
    requiresExplicitConfirmation: false,
    allowedNextStep: "preparePreviewOnly",
    executionBoundary: "previewOnlyReadiness",
    auditPolicy: "observeOnly",
    taskPlan,
    userVisibleInThisPhase: true
  };
}

function buildControlledActionConfirmationReadinessFromPreview(controlledActionPreviewReadiness = {}) {
  // Phase 8Q: confirmation readiness is internal metadata only. It must stay
  // downstream of safe preview readiness and must not render UI, stage actions,
  // ask to continue, request permissions, route, open workflows, confirm, or
  // execute anything.
  if (!controlledActionPreviewReadiness || typeof controlledActionPreviewReadiness !== "object") return null;
  if (controlledActionPreviewReadiness.schemaVersion !== "controlled-action-preview-readiness.v1") return null;
  const selectedToolId = String(controlledActionPreviewReadiness.selectedToolId || "").trim();
  const actionId = String(controlledActionPreviewReadiness.actionId || "").trim();
  const levelOneLabel = String(controlledActionPreviewReadiness.levelOneLabel || "").trim();
  const requiredPermissions = Array.isArray(controlledActionPreviewReadiness.requiredPermissions)
    ? controlledActionPreviewReadiness.requiredPermissions.slice()
    : [];
  const missingInputs = Array.isArray(controlledActionPreviewReadiness.missingInputs)
    ? controlledActionPreviewReadiness.missingInputs.slice()
    : [];
  const base = {
    schemaVersion: "controlled-action-confirmation-readiness.v1",
    sourcePreviewReadinessVersion: "controlled-action-preview-readiness.v1",
    actionId,
    selectedToolId,
    levelOneLabel,
    confirmationEligible: false,
    confirmationBlockedReason: "Confirmation readiness is not available for this preview.",
    confirmationRiskLevel: controlledActionPreviewReadiness.previewRiskLevel || "restricted",
    confirmationMode: "restrictedConfirmationBlocked",
    safeConfirmationTitle: "",
    safeConfirmationSummary: "",
    confirmationQuestion: "",
    requiredPermissions,
    missingInputs,
    allowedNextStep: "blocked",
    executionBoundary: "confirmationReadinessOnly",
    auditPolicy: "observeOnly",
    userVisibleInThisPhase: false
  };
  const confirmationMap = {
    openTrainingResources: {
      selectedToolId: "workforce.training",
      title: "Continue to training resources",
      summary: "Nexus can keep a future training-resource review step ready for an explicit user-controlled flow.",
      mode: "lowRiskConfirmationReadinessOnly"
    },
    showFarmJobs: {
      selectedToolId: "workforce.job_pathways",
      title: "Continue to job pathway resources",
      summary: "Nexus can keep a future job-pathway review step ready without applying or submitting anything.",
      mode: "lowRiskConfirmationReadinessOnly"
    },
    openFieldSupportGuidance: {
      selectedToolId: "workforce.field_support",
      title: "Continue to field support guidance",
      summary: "Nexus can keep a future informational field-support guidance step ready for a user-controlled review flow.",
      mode: "informationalConfirmationReadinessOnly"
    },
    explainLearningTopic: {
      selectedToolId: "learning.start",
      title: "Continue to learning guidance",
      summary: "Nexus can keep a future learning-guidance review step ready without opening lessons or creating records.",
      mode: "lowRiskConfirmationReadinessOnly"
    },
    browseMarketplace: {
      selectedToolId: "marketplace.agritrade",
      title: "Continue to AgriTrade browsing guidance",
      summary: "Nexus can keep a future browse-only AgriTrade guidance step ready for general catalog review.",
      mode: "informationalConfirmationReadinessOnly"
    },
    explainAgricultureHelp: {
      selectedToolId: "agriculture.help",
      title: "Continue to agriculture guidance",
      summary: "Nexus can keep a future informational agriculture guidance step ready for a user-controlled review flow.",
      mode: "informationalConfirmationReadinessOnly"
    }
  };
  const restrictedTerms = /\b(health|telehealth|video|camera|call|doctor|provider|nurse|clinic|hospital|location|locate|map|payment|pay|wallet|identity|account|login|verify|buy|sell|order|quote|message|dispatch|schedule|submit|checkout|permission|diagnose)\b/i;
  const unsafeWording = /\b(opened|started|submitted|paid|called|verified|permission granted|camera|location|checkout|dispatch|schedule|execute|submit|pay|call|verify|open camera|diagnose)\b/i;
  const riskLevel = String(controlledActionPreviewReadiness.previewRiskLevel || "").trim();
  if (controlledActionPreviewReadiness.previewEligible !== true || controlledActionPreviewReadiness.userVisibleInThisPhase !== true) {
    return { ...base, confirmationBlockedReason: "Source preview is not eligible." };
  }
  if (!["info", "low"].includes(riskLevel)) {
    return { ...base, confirmationBlockedReason: "Risk level is not confirmation-readiness eligible.", confirmationRiskLevel: riskLevel || "restricted" };
  }
  if (requiredPermissions.length || missingInputs.length) {
    return {
      ...base,
      confirmationBlockedReason: requiredPermissions.length ? "Confirmation readiness would require permissions." : "Confirmation readiness would require missing inputs.",
      confirmationMode: requiredPermissions.length ? "permissionRequiredConfirmationBlocked" : "restrictedConfirmationBlocked"
    };
  }
  if (controlledActionPreviewReadiness.allowedNextStep !== "preparePreviewOnly" || controlledActionPreviewReadiness.executionBoundary !== "previewOnlyReadiness") {
    return { ...base, confirmationBlockedReason: "Source preview boundary is not preview-only." };
  }
  if (controlledActionPreviewReadiness.previewBlockedReason) {
    return { ...base, confirmationBlockedReason: controlledActionPreviewReadiness.previewBlockedReason };
  }
  const confirmation = confirmationMap[actionId];
  if (!confirmation || confirmation.selectedToolId !== selectedToolId) return base;
  if (restrictedTerms.test(`${selectedToolId} ${actionId} ${levelOneLabel}`)) {
    return { ...base, confirmationBlockedReason: "Sensitive or transactional action is not confirmation-readiness eligible." };
  }
  const confirmationQuestion = "Would you like Nexus to keep this low-risk next step ready for a future review flow?";
  if (unsafeWording.test(`${confirmation.title} ${confirmation.summary} ${confirmationQuestion}`)) {
    return { ...base, confirmationBlockedReason: "Confirmation readiness wording is not safe." };
  }
  return {
    ...base,
    confirmationEligible: true,
    confirmationBlockedReason: null,
    confirmationRiskLevel: riskLevel,
    confirmationMode: confirmation.mode,
    safeConfirmationTitle: confirmation.title,
    safeConfirmationSummary: confirmation.summary,
    confirmationQuestion,
    allowedNextStep: "observeConfirmationReadinessOnly",
    executionBoundary: "confirmationReadinessOnly",
    auditPolicy: "observeOnly",
    userVisibleInThisPhase: true
  };
}

function buildControlledActionNavigationReadinessFromConfirmation(controlledActionConfirmationReadiness = {}) {
  // Phase 8V: navigation readiness is internal metadata only. It must stay
  // downstream of safe confirmation readiness and must not navigate, route,
  // open workflows, stage actions, request permissions, confirm, or execute.
  if (!controlledActionConfirmationReadiness || typeof controlledActionConfirmationReadiness !== "object") return null;
  if (controlledActionConfirmationReadiness.schemaVersion !== "controlled-action-confirmation-readiness.v1") return null;
  const selectedToolId = String(controlledActionConfirmationReadiness.selectedToolId || "").trim();
  const actionId = String(controlledActionConfirmationReadiness.actionId || "").trim();
  const levelOneLabel = String(controlledActionConfirmationReadiness.levelOneLabel || "").trim();
  const requiredPermissions = Array.isArray(controlledActionConfirmationReadiness.requiredPermissions)
    ? controlledActionConfirmationReadiness.requiredPermissions.slice()
    : [];
  const missingInputs = Array.isArray(controlledActionConfirmationReadiness.missingInputs)
    ? controlledActionConfirmationReadiness.missingInputs.slice()
    : [];
  const base = {
    schemaVersion: "controlled-action-navigation-readiness.v1",
    sourceConfirmationReadinessVersion: "controlled-action-confirmation-readiness.v1",
    actionId,
    selectedToolId,
    levelOneLabel,
    navigationEligible: false,
    navigationBlockedReason: "Navigation readiness is not available for this confirmation readiness.",
    navigationRiskLevel: controlledActionConfirmationReadiness.confirmationRiskLevel || "restricted",
    navigationMode: "restrictedNavigationBlocked",
    targetRoute: "none",
    targetSurface: "none",
    requiresConfirmationClick: true,
    allowedAfterConfirmationOnly: true,
    requiredPermissions,
    missingInputs,
    safeNavigationTitle: "",
    safeNavigationSummary: "",
    allowedNextStep: "blocked",
    executionBoundary: "navigationReadinessOnly",
    auditPolicy: "observeOnly",
    userVisibleInThisPhase: false
  };
  const navigationMap = {
    openTrainingResources: {
      selectedToolId: "workforce.training",
      targetRoute: "training",
      targetSurface: "standardUserModule",
      title: "Review training resources",
      summary: "Nexus may prepare a future internal training-resource navigation review after an explicit confirmation click. No navigation has happened."
    },
    showFarmJobs: {
      selectedToolId: "workforce.job_pathways",
      targetRoute: "jobs",
      targetSurface: "standardUserModule",
      title: "Review job pathway resources",
      summary: "Nexus may prepare a future internal job-pathway navigation review after an explicit confirmation click. No application, submission, or navigation has happened."
    },
    openFieldSupportGuidance: {
      selectedToolId: "workforce.field_support",
      targetRoute: "fieldSupportInfo",
      targetSurface: "askNexus",
      title: "Review field support guidance",
      summary: "Nexus may prepare a future informational field-support navigation review. No service request or navigation has happened."
    },
    explainLearningTopic: {
      selectedToolId: "learning.start",
      targetRoute: "learning",
      targetSurface: "standardUserModule",
      title: "Review learning guidance",
      summary: "Nexus may prepare a future internal learning navigation review after an explicit confirmation click. No lesson, record, or navigation has happened."
    },
    browseMarketplace: {
      selectedToolId: "marketplace.agritrade",
      targetRoute: "marketplaceBrowse",
      targetSurface: "standardUserModule",
      title: "Review AgriTrade browsing guidance",
      summary: "Nexus may prepare a future internal browse-only AgriTrade navigation review. No transaction, account action, or navigation has happened."
    },
    explainAgricultureHelp: {
      selectedToolId: "agriculture.help",
      targetRoute: "agricultureHelp",
      targetSurface: "askNexus",
      title: "Review agriculture guidance",
      summary: "Nexus may prepare a future informational agriculture guidance navigation review. No sensitive tool, record, or navigation has happened."
    }
  };
  const riskLevel = String(controlledActionConfirmationReadiness.confirmationRiskLevel || "").trim();
  const restrictedTerms = /\b(health|telehealth|video|camera|call|doctor|provider|nurse|clinic|hospital|location|locate|map|payment|pay|wallet|identity|account|login|verify|buy|sell|order|quote|message|dispatch|schedule|submit|checkout|permission|diagnose|external|file|communicat)/i;
  const unsafeWording = /\b(opened|started|submitted|paid|called|verified|permission granted|execute|start now|open now|submit|pay|call|verify|use camera|use location|dispatch now|schedule now)\b/i;
  if (controlledActionConfirmationReadiness.confirmationEligible !== true) {
    return { ...base, navigationBlockedReason: controlledActionConfirmationReadiness.confirmationBlockedReason || "Source confirmation readiness is not eligible." };
  }
  if (!["info", "low"].includes(riskLevel)) {
    return { ...base, navigationBlockedReason: "Risk level is not navigation-readiness eligible.", navigationRiskLevel: riskLevel || "restricted" };
  }
  if (requiredPermissions.length || missingInputs.length) {
    return {
      ...base,
      navigationBlockedReason: requiredPermissions.length ? "Navigation readiness would require permissions." : "Navigation readiness would require missing inputs.",
      navigationMode: requiredPermissions.length ? "permissionRequiredNavigationBlocked" : "restrictedNavigationBlocked"
    };
  }
  if (controlledActionConfirmationReadiness.allowedNextStep !== "observeConfirmationReadinessOnly" || controlledActionConfirmationReadiness.executionBoundary !== "confirmationReadinessOnly") {
    return { ...base, navigationBlockedReason: "Source confirmation boundary is not confirmation-readiness only." };
  }
  if (controlledActionConfirmationReadiness.confirmationBlockedReason) {
    return { ...base, navigationBlockedReason: controlledActionConfirmationReadiness.confirmationBlockedReason };
  }
  const navigation = navigationMap[actionId];
  if (!navigation || navigation.selectedToolId !== selectedToolId) return base;
  if (restrictedTerms.test(`${selectedToolId} ${actionId} ${levelOneLabel} ${navigation.targetRoute}`)) {
    return { ...base, navigationBlockedReason: "Sensitive or transactional action is not navigation-readiness eligible." };
  }
  if (unsafeWording.test(`${navigation.title} ${navigation.summary}`)) {
    return { ...base, navigationBlockedReason: "Navigation readiness wording is not safe." };
  }
  return {
    ...base,
    navigationEligible: true,
    navigationBlockedReason: null,
    navigationRiskLevel: riskLevel,
    navigationMode: "lowRiskInternalNavigationReadinessOnly",
    targetRoute: navigation.targetRoute,
    targetSurface: navigation.targetSurface,
    requiresConfirmationClick: true,
    allowedAfterConfirmationOnly: true,
    requiredPermissions: [],
    missingInputs: [],
    safeNavigationTitle: navigation.title,
    safeNavigationSummary: navigation.summary,
    allowedNextStep: "observeNavigationReadinessOnly",
    executionBoundary: "navigationReadinessOnly",
    auditPolicy: "observeOnly",
    userVisibleInThisPhase: false
  };
}

function observeAgentActionMetadata(response = {}, context = {}) {
  // Phase 7F: agentAction is observation-only and non-authoritative.
  // Phase 11E: policyDecision metadata is also observation-only and cannot
  // Phase 11F3: nexusPlan metadata is observation-only and cannot
  // execute, route, stage, confirm, request permissions, or open providers.
  // Existing frontend routers remain authoritative. The static registry is not
  // runtime-authoritative. Never execute, route, confirm, stage, open workflows,
  // or trigger modals from this metadata.
  const agentAction = response?.metadata?.agentAction;
  if (!agentAction || typeof agentAction !== "object") {
    clearLevelOneAgentActionSuggestionLabel();
    return null;
  }
  if (agentAction.runtimeStatus !== "metadata-only") {
    clearLevelOneAgentActionSuggestionLabel();
    return null;
  }
  if (agentAction.source !== "existing-router") {
    clearLevelOneAgentActionSuggestionLabel();
    return null;
  }
  const lowRiskSuggestion = buildLowRiskAgentActionSuggestion(agentAction);
  const controlledActionMetadata = buildControlledActionMetadataFromSuggestion(lowRiskSuggestion, { agentAction });
  const controlledActionPreviewReadiness = buildControlledActionPreviewReadinessFromMetadata(controlledActionMetadata);
  const controlledActionConfirmationReadiness = buildControlledActionConfirmationReadinessFromPreview(controlledActionPreviewReadiness);
  const controlledActionNavigationReadiness = buildControlledActionNavigationReadinessFromConfirmation(controlledActionConfirmationReadiness);
  const policyDecision = response?.metadata?.policyDecision || agentAction.policyDecision || null;
  const nexusPlan = response?.metadata?.nexusPlan || agentAction.nexusPlan || null;
  const plannerObservation = response?.metadata?.plannerObservation || agentAction.plannerObservation || null;
  visibleLevelOneAgentActionSuggestion = lowRiskSuggestion;
  clearControlledActionPreview("backend-preview-readiness-replaced");
  visibleControlledActionPreviewReadiness = isVisibleControlledActionPreviewReadiness(controlledActionPreviewReadiness)
    ? controlledActionPreviewReadiness
    : null;
  if (visibleControlledActionPreviewReadiness?.taskPlan) {
    if (typeof startNexusAutonomousWorkflowFromTaskPlan === "function") {
      startNexusAutonomousWorkflowFromTaskPlan(visibleControlledActionPreviewReadiness.taskPlan, { command: context.command || "" });
    }
  }
  visibleControlledStagedActionPreview = visibleControlledActionPreviewReadiness
    ? buildControlledStagedActionPreviewFromReadiness(visibleControlledActionPreviewReadiness)
    : null;
  latestControlledActionConfirmationReadiness = visibleControlledActionPreviewReadiness
    ? controlledActionConfirmationReadiness
    : null;
  visibleUserConfirmationPreview = latestControlledActionConfirmationReadiness
    ? buildUserConfirmationPreviewFromReadiness(latestControlledActionConfirmationReadiness)
    : null;
  latestControlledActionNavigationReadiness = latestControlledActionConfirmationReadiness
    ? controlledActionNavigationReadiness
    : null;
  const observed = {
    observedAt: new Date().toISOString(),
    context: {
      source: context.source || "unknown",
      command: context.command || "",
      intent: response.intent || agentAction.result?.intent || null
    },
    agentAction: {
      schemaVersion: agentAction.schemaVersion || null,
      runtimeStatus: agentAction.runtimeStatus,
      source: agentAction.source,
      normalizedIntent: agentAction.normalizedIntent || null,
      selectedToolId: agentAction.selectedToolId || null,
      riskLevel: agentAction.riskLevel || "unknown",
      confirmationRequired: agentAction.confirmationRequired === true,
      executionMode: agentAction.executionMode || "existing-route",
      nextStep: agentAction.nextStep || null
    },
    lowRiskSuggestion,
    policyDecision,
    nexusPlan,
    plannerObservation,
    controlledActionMetadata,
    controlledActionPreviewReadiness,
    controlledActionConfirmationReadiness,
    controlledActionNavigationReadiness
  };
  latestObservedAgentActionMetadata = observed;
  observedAgentActionMetadataLog = [observed, ...observedAgentActionMetadataLog].slice(0, 10);
  paintLevelOneAgentActionSuggestionLabel();
  paintControlledActionPreview();
  if (localStorage.getItem("agrinexusAgentActionDebug") === "on") {
    console.debug("Nexus agentAction metadata observed", observed);
  }
  return null;
}

const countryLanguageMap = {
  nigeria: "en",
  kenya: "sw",
  egypt: "ar",
  drc: "fr",
  brazil: "pt"
};
const voiceLocaleMap = {
  en: "en-US",
  fr: "fr-FR",
  sw: "sw-KE",
  ar: "ar-EG",
  es: "es-ES",
  pt: "pt-BR"
};
const voiceLanguageNames = {
  en: "English",
  fr: "French",
  sw: "Kiswahili",
  ar: "Arabic",
  es: "Spanish",
  pt: "Portuguese"
};
const fullAppLanguageCodes = new Set(["en", "fr", "sw", "ar", "es", "pt"]);
const partialAppLanguageCodes = new Set([]);
let voiceTranslationToken = 0;

const voiceStopTranslations = {
  es: {
    "Hello": "Hola",
    "Stop": "Detener",
    "Stop speaking": "Detener voz",
    "Stopped. I am ready when you are.": "Detenido. Estoy listo cuando usted lo este.",
    "Stopped. Ask me the next question or tell me where to go next.": "Detenido. Hagame la siguiente pregunta o digame a donde ir despues.",
    "Nexus stopped speaking": "Nexus dejo de hablar",
    "I stopped speaking and I am ready for the next instruction.": "Deje de hablar y estoy listo para la siguiente instruccion."
  },
  pt: {
    "Hello": "Ola",
    "Stop": "Parar",
    "Stop speaking": "Parar voz",
    "Stopped. I am ready when you are.": "Parei. Estou pronto quando voce estiver.",
    "Stopped. Ask me the next question or tell me where to go next.": "Parei. Faca a proxima pergunta ou diga para onde devo ir.",
    "Nexus stopped speaking": "Nexus parou de falar",
    "I stopped speaking and I am ready for the next instruction.": "Parei de falar e estou pronto para a proxima instrucao."
  },
  fr: {
    "Hello": "Bonjour",
    "Stop": "Arreter",
    "Stop speaking": "Arreter la voix",
    "Stopped. I am ready when you are.": "Arrete. Je suis pret quand vous l'etes.",
    "Stopped. Ask me the next question or tell me where to go next.": "Arrete. Posez-moi la prochaine question ou dites-moi ou aller ensuite.",
    "Nexus stopped speaking": "Nexus a arrete de parler",
    "I stopped speaking and I am ready for the next instruction.": "J'ai arrete de parler et je suis pret pour la prochaine instruction."
  },
  sw: {
    "Hello": "Habari",
    "Stop": "Simamisha",
    "Stop speaking": "Simamisha sauti",
    "Stopped. I am ready when you are.": "Nimesimama. Niko tayari utakaponihitaji.",
    "Stopped. Ask me the next question or tell me where to go next.": "Nimesimama. Niulize swali linalofuata au niambie niende wapi sasa.",
    "Nexus stopped speaking": "Nexus ameacha kuzungumza",
    "I stopped speaking and I am ready for the next instruction.": "Nimeacha kuzungumza na niko tayari kwa maagizo yanayofuata."
  },
  ar: {
    "Hello": "\u0645\u0631\u062d\u0628\u0627",
    "Stop": "\u0625\u064a\u0642\u0627\u0641",
    "Stop speaking": "\u0623\u0648\u0642\u0641 \u0627\u0644\u0635\u0648\u062a",
    "Stopped. I am ready when you are.": "\u062a\u0645 \u0627\u0644\u0625\u064a\u0642\u0627\u0641. \u0623\u0646\u0627 \u062c\u0627\u0647\u0632 \u0639\u0646\u062f\u0645\u0627 \u062a\u0643\u0648\u0646 \u062c\u0627\u0647\u0632\u0627.",
    "Stopped. Ask me the next question or tell me where to go next.": "\u062a\u0645 \u0627\u0644\u0625\u064a\u0642\u0627\u0641. \u0627\u0633\u0623\u0644\u0646\u064a \u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u062a\u0627\u0644\u064a \u0623\u0648 \u0623\u062e\u0628\u0631\u0646\u064a \u0625\u0644\u0649 \u0623\u064a\u0646 \u0623\u0630\u0647\u0628.",
    "Nexus stopped speaking": "\u062a\u0648\u0642\u0641 \u0646\u0643\u0633\u0633 \u0639\u0646 \u0627\u0644\u0643\u0644\u0627\u0645",
    "I stopped speaking and I am ready for the next instruction.": "\u062a\u0648\u0642\u0641\u062a \u0639\u0646 \u0627\u0644\u0643\u0644\u0627\u0645 \u0648\u0623\u0646\u0627 \u062c\u0627\u0647\u0632 \u0644\u0644\u062a\u0639\u0644\u064a\u0645\u0629 \u0627\u0644\u062a\u0627\u0644\u064a\u0629."
  }
};

const demoLoginProfiles = [
  { label: "Admin", role: "Full control", email: "admin@agrinexus.org", password: "Admin2026!" },
  { label: "User", role: "Simple services", email: "user@agrinexus.org", password: "User2026!" },
  { label: "Investor", role: "Guided proof view", email: "investor@agrinexus.org", password: "Investor2026!" }
];

const countryLanguageLabel = {
  nigeria: "English",
  kenya: "Kiswahili",
  egypt: "Arabic",
  drc: "Francais"
};

const countryDisplayLabel = {
  nigeria: "Nigeria - English",
  kenya: "Kenya - Kiswahili",
  egypt: "Egypt - Arabic",
  drc: "DRC - Francais"
};

const workspaceCopy = {
  dashboard: {
    title: "Dashboard",
    description: "Choose a simple action, run a pilot, or open a live module."
  },
  learning: {
    title: "Learning & Development",
    description: "Start courses, complete lessons, issue certificates, and translate training content."
  },
  workforce: {
    title: "Workforce",
    description: "Apply for roles, review skill gaps, plan shifts, and track workforce readiness."
  },
  health: {
    title: "AFAYAI Health",
    description: "Run accessible telehealth, triage visits, care plans, and patient support workflows."
  },
  trade: {
    title: "Agritrade",
    description: "Manage crops, buyers, orders, logistics, wallet actions, and market support."
  },
  map: {
    title: "Map & AI",
    description: "View country operations, drone missions, provider status, and location intelligence."
  },
  agent: {
    title: "Agent AI",
    description: "Use voice or text commands to route tasks across the platform."
  },
  integrations: {
    title: "Integrations",
    description: "Check live engine status, provider endpoints, API readiness, and production setup."
  },
  admin: {
    title: "Admin",
    description: "Review subscribers, system readiness, evidence, and operator controls."
  },
  profile: {
    title: "Profile",
    description: "Manage user settings, accessibility preferences, language, and saved progress."
  }
};

const workspaceTranslations = {
  fr: {
    "Dashboard": "Tableau de bord",
    "Choose a simple action, run a pilot, or open a live module.": "Choisissez une action simple, lancez un pilote ou ouvrez un module actif.",
    "Learning & Development": "Apprentissage et developpement",
    "Start courses, complete lessons, issue certificates, and translate training content.": "Commencez des cours, terminez des lecons, emettez des certificats et traduisez le contenu de formation.",
    "Workforce": "Main-d'oeuvre",
    "Apply for roles, review skill gaps, plan shifts, and track workforce readiness.": "Postulez a des roles, examinez les ecarts de competences, planifiez les quarts et suivez la preparation.",
    "AFAYAI Health": "Sante AFAYAI",
    "Run accessible telehealth, triage visits, care plans, and patient support workflows.": "Lancez la telesante accessible, le triage, les plans de soins et les flux de soutien patient.",
    "Agritrade": "Agritrade",
    "Manage crops, buyers, orders, logistics, wallet actions, and market support.": "Gerez cultures, acheteurs, commandes, logistique, wallet et support marche.",
    "Map & AI": "Carte et IA",
    "View country operations, drone missions, provider status, and location intelligence.": "Consultez operations pays, missions drone, etat fournisseur et intelligence geographique.",
    "Agent AI": "Agent IA",
    "Use voice or text commands to route tasks across the platform.": "Utilisez la voix ou le texte pour orienter les taches dans toute la plateforme.",
    "Integrations": "Integrations",
    "Check live engine status, provider endpoints, API readiness, and production setup.": "Verifiez l'etat des moteurs, endpoints fournisseurs, API et configuration production.",
    "Admin": "Admin",
    "Review subscribers, system readiness, evidence, and operator controls.": "Revoyez abonnes, preparation systeme, preuves et controles operateur.",
    "Stop": "Arreter",
    "Stop speaking": "Arreter la voix",
    "Stopped. I am ready when you are.": "Arrete. Je suis pret quand vous l'etes.",
    "Stopped. Ask me the next question or tell me where to go next.": "Arrete. Posez-moi la prochaine question ou dites-moi ou aller ensuite.",
    "Nexus stopped speaking": "Nexus a arrete de parler",
    "I stopped speaking and I am ready for the next instruction.": "J'ai arrete de parler et je suis pret pour la prochaine instruction.",
    "Profile": "Profil",
    "Manage user settings, accessibility preferences, language, and saved progress.": "Gerez parametres, preferences d'accessibilite, langue et progression sauvegardee."
  },
  sw: {
    "Dashboard": "Dashibodi",
    "Choose a simple action, run a pilot, or open a live module.": "Chagua hatua rahisi, endesha jaribio, au fungua moduli hai.",
    "Learning & Development": "Mafunzo na Maendeleo",
    "Start courses, complete lessons, issue certificates, and translate training content.": "Anza kozi, kamilisha masomo, toa vyeti, na tafsiri maudhui ya mafunzo.",
    "Workforce": "Nguvukazi",
    "Apply for roles, review skill gaps, plan shifts, and track workforce readiness.": "Omba nafasi, kagua mapungufu ya ujuzi, panga zamu, na fuatilia utayari wa kazi.",
    "AFAYAI Health": "Afya AFAYAI",
    "Run accessible telehealth, triage visits, care plans, and patient support workflows.": "Endesha teleshauri jumuishi, uchunguzi wa awali, mipango ya huduma, na msaada wa mgonjwa.",
    "Agritrade": "Agritrade",
    "Manage crops, buyers, orders, logistics, wallet actions, and market support.": "Simamia mazao, wanunuzi, oda, usafirishaji, pochi, na msaada wa soko.",
    "Map & AI": "Ramani na AI",
    "View country operations, drone missions, provider status, and location intelligence.": "Tazama shughuli za nchi, misheni za drone, hali ya watoa huduma, na taarifa za eneo.",
    "Agent AI": "Wakala AI",
    "Use voice or text commands to route tasks across the platform.": "Tumia amri za sauti au maandishi kuelekeza kazi kwenye jukwaa.",
    "Integrations": "Miunganisho",
    "Check live engine status, provider endpoints, API readiness, and production setup.": "Kagua hali ya injini, endpoints za watoa huduma, utayari wa API, na usanidi wa uzalishaji.",
    "Admin": "Admin",
    "Review subscribers, system readiness, evidence, and operator controls.": "Kagua watumiaji, utayari wa mfumo, ushahidi, na udhibiti wa mwendeshaji.",
    "Stop": "Simamisha",
    "Stop speaking": "Simamisha sauti",
    "Stopped. I am ready when you are.": "Nimesimama. Niko tayari utakaponihitaji.",
    "Stopped. Ask me the next question or tell me where to go next.": "Nimesimama. Niulize swali linalofuata au niambie niende wapi sasa.",
    "Nexus stopped speaking": "Nexus ameacha kuzungumza",
    "I stopped speaking and I am ready for the next instruction.": "Nimeacha kuzungumza na niko tayari kwa maagizo yanayofuata.",
    "Profile": "Wasifu",
    "Manage user settings, accessibility preferences, language, and saved progress.": "Simamia mipangilio, mapendeleo ya ufikivu, lugha, na maendeleo yaliyohifadhiwa."
  },
  ar: {
    "Dashboard": "\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
    "Choose a simple action, run a pilot, or open a live module.": "\u0627\u062e\u062a\u0631 \u0625\u062c\u0631\u0627\u0621\u0627 \u0628\u0633\u064a\u0637\u0627 \u0623\u0648 \u0634\u063a\u0644 \u062a\u062c\u0631\u0628\u0629 \u0623\u0648 \u0627\u0641\u062a\u062d \u0648\u062d\u062f\u0629 \u0646\u0634\u0637\u0629.",
    "Learning & Development": "\u0627\u0644\u062a\u0639\u0644\u0645 \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631",
    "Start courses, complete lessons, issue certificates, and translate training content.": "\u0627\u0628\u062f\u0623 \u0627\u0644\u062f\u0648\u0631\u0627\u062a \u0648\u0623\u0643\u0645\u0644 \u0627\u0644\u062f\u0631\u0648\u0633 \u0648\u0623\u0635\u062f\u0631 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u062a\u0631\u062c\u0645 \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u062a\u062f\u0631\u064a\u0628.",
    "Workforce": "\u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629",
    "Apply for roles, review skill gaps, plan shifts, and track workforce readiness.": "\u0642\u062f\u0645 \u0639\u0644\u0649 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0648\u0631\u0627\u062c\u0639 \u0641\u062c\u0648\u0627\u062a \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u062e\u0637\u0637 \u0627\u0644\u0648\u0631\u062f\u064a\u0627\u062a \u0648\u062a\u0627\u0628\u0639 \u0627\u0644\u062c\u0627\u0647\u0632\u064a\u0629.",
    "AFAYAI Health": "\u0635\u062d\u0629 AFAYAI",
    "Run accessible telehealth, triage visits, care plans, and patient support workflows.": "\u0634\u063a\u0644 \u0627\u0644\u0637\u0628 \u0639\u0646 \u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0633\u0631 \u0648\u0627\u0644\u0641\u0631\u0632 \u0648\u062e\u0637\u0637 \u0627\u0644\u0631\u0639\u0627\u064a\u0629 \u0648\u062f\u0639\u0645 \u0627\u0644\u0645\u0631\u064a\u0636.",
    "Agritrade": "\u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u0632\u0631\u0627\u0639\u064a\u0629",
    "Manage crops, buyers, orders, logistics, wallet actions, and market support.": "\u0623\u062f\u0631 \u0627\u0644\u0645\u062d\u0627\u0635\u064a\u0644 \u0648\u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0646 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0627\u0644\u0644\u0648\u062c\u0633\u062a\u064a\u0627\u062a \u0648\u0627\u0644\u0645\u062d\u0641\u0638\u0629 \u0648\u062f\u0639\u0645 \u0627\u0644\u0633\u0648\u0642.",
    "Map & AI": "\u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0648\u0627\u0644\u0630\u0643\u0627\u0621",
    "View country operations, drone missions, provider status, and location intelligence.": "\u0627\u0639\u0631\u0636 \u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0628\u0644\u062f \u0648\u0645\u0647\u0627\u0645 \u0627\u0644\u062f\u0631\u0648\u0646 \u0648\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0632\u0648\u062f \u0648\u0630\u0643\u0627\u0621 \u0627\u0644\u0645\u0648\u0642\u0639.",
    "Agent AI": "\u0648\u0643\u064a\u0644 \u0627\u0644\u0630\u0643\u0627\u0621",
    "Use voice or text commands to route tasks across the platform.": "\u0627\u0633\u062a\u062e\u062f\u0645 \u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0635\u0648\u062a \u0623\u0648 \u0627\u0644\u0646\u0635 \u0644\u062a\u0648\u062c\u064a\u0647 \u0627\u0644\u0645\u0647\u0627\u0645 \u0639\u0628\u0631 \u0627\u0644\u0645\u0646\u0635\u0629.",
    "Integrations": "\u0627\u0644\u062a\u0643\u0627\u0645\u0644\u0627\u062a",
    "Check live engine status, provider endpoints, API readiness, and production setup.": "\u0627\u0641\u062d\u0635 \u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u062d\u0631\u0643\u0627\u062a \u0648\u0646\u0642\u0627\u0637 \u0627\u0644\u0645\u0632\u0648\u062f \u0648\u062c\u0627\u0647\u0632\u064a\u0629 API \u0648\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0625\u0646\u062a\u0627\u062c.",
    "Admin": "\u0627\u0644\u0625\u062f\u0627\u0631\u0629",
    "Review subscribers, system readiness, evidence, and operator controls.": "\u0631\u0627\u062c\u0639 \u0627\u0644\u0645\u0634\u062a\u0631\u0643\u064a\u0646 \u0648\u062c\u0627\u0647\u0632\u064a\u0629 \u0627\u0644\u0646\u0638\u0627\u0645 \u0648\u0627\u0644\u0623\u062f\u0644\u0629 \u0648\u062a\u062d\u0643\u0645 \u0627\u0644\u0645\u0634\u063a\u0644.",
    "Stop": "\u0625\u064a\u0642\u0627\u0641",
    "Stop speaking": "\u0623\u0648\u0642\u0641 \u0627\u0644\u0635\u0648\u062a",
    "Stopped. I am ready when you are.": "\u062a\u0645 \u0627\u0644\u0625\u064a\u0642\u0627\u0641. \u0623\u0646\u0627 \u062c\u0627\u0647\u0632 \u0639\u0646\u062f\u0645\u0627 \u062a\u0643\u0648\u0646 \u062c\u0627\u0647\u0632\u0627.",
    "Stopped. Ask me the next question or tell me where to go next.": "\u062a\u0645 \u0627\u0644\u0625\u064a\u0642\u0627\u0641. \u0627\u0633\u0623\u0644\u0646\u064a \u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u062a\u0627\u0644\u064a \u0623\u0648 \u0623\u062e\u0628\u0631\u0646\u064a \u0625\u0644\u0649 \u0623\u064a\u0646 \u0623\u0630\u0647\u0628.",
    "Nexus stopped speaking": "\u062a\u0648\u0642\u0641 \u0646\u0643\u0633\u0633 \u0639\u0646 \u0627\u0644\u0643\u0644\u0627\u0645",
    "I stopped speaking and I am ready for the next instruction.": "\u062a\u0648\u0642\u0641\u062a \u0639\u0646 \u0627\u0644\u0643\u0644\u0627\u0645 \u0648\u0623\u0646\u0627 \u062c\u0627\u0647\u0632 \u0644\u0644\u062a\u0639\u0644\u064a\u0645\u0629 \u0627\u0644\u062a\u0627\u0644\u064a\u0629.",
    "Profile": "\u0627\u0644\u0645\u0644\u0641",
    "Manage user settings, accessibility preferences, language, and saved progress.": "\u0623\u062f\u0631 \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u062a\u0641\u0636\u064a\u0644\u0627\u062a \u0627\u0644\u0648\u0635\u0648\u0644 \u0648\u0627\u0644\u0644\u063a\u0629 \u0648\u0627\u0644\u062a\u0642\u062f\u0645 \u0627\u0644\u0645\u062d\u0641\u0648\u0638."
  }
};

const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
}[character]));
const learningCopy = {
  en: {
    studio: "Learning studio",
    title: "Learning & Development",
    intro: "Build readiness through guided courses, quizzes, certificates, and workforce-aligned skills.",
    readiness: "Readiness",
    focus: "Current focus",
    choose: "Choose a course",
    emptySummary: "Start a course to begin building a verified learning record.",
    quiz: "Complete quiz",
    certificate: "Issue certificate",
    completeLesson: "Complete lesson",
    record: "Learning Record",
    certificates: "Certificates",
    allTracks: "All tracks",
    complete: "complete",
    status: "Status",
    impact: "Readiness impact",
    duration: "Duration",
    continueCourse: "Continue course",
    startCourse: "Start course",
    path: "Learning path",
    active: "Active course",
    hours: "Learning hours",
    streak: "Streak",
    score: "Quiz score",
    noCertificates: "No certificates issued yet.",
    action: "action(s)"
  },
  fr: {
    studio: "Studio d'apprentissage",
    title: "Apprentissage et developpement",
    intro: "Renforcez la preparation avec des cours guides, des quiz, des certificats et des competences professionnelles.",
    readiness: "Preparation",
    focus: "Priorite actuelle",
    choose: "Choisir un cours",
    emptySummary: "Commencez un cours pour creer un dossier d'apprentissage verifie.",
    quiz: "Terminer le quiz",
    certificate: "Emettre le certificat",
    completeLesson: "Terminer la lecon",
    record: "Dossier d'apprentissage",
    certificates: "Certificats",
    allTracks: "Toutes les pistes",
    complete: "termine",
    status: "Statut",
    impact: "Impact preparation",
    duration: "Duree",
    continueCourse: "Continuer le cours",
    startCourse: "Commencer le cours",
    path: "Parcours",
    active: "Cours actif",
    hours: "Heures",
    streak: "Serie",
    score: "Score quiz",
    noCertificates: "Aucun certificat emis.",
    action: "action(s)"
  },
  sw: {
    studio: "Kituo cha kujifunza",
    title: "Mafunzo na maendeleo",
    intro: "Jenga utayari kupitia kozi, maswali, vyeti, na ujuzi wa kazi.",
    readiness: "Utayari",
    focus: "Lengo la sasa",
    choose: "Chagua kozi",
    emptySummary: "Anza kozi ili kujenga rekodi ya kujifunza iliyothibitishwa.",
    quiz: "Kamilisha jaribio",
    certificate: "Toa cheti",
    completeLesson: "Kamilisha somo",
    record: "Rekodi ya kujifunza",
    certificates: "Vyeti",
    allTracks: "Njia zote",
    complete: "imekamilika",
    status: "Hali",
    impact: "Ongezeko la utayari",
    duration: "Muda",
    continueCourse: "Endelea na kozi",
    startCourse: "Anza kozi",
    path: "Njia ya kujifunza",
    active: "Kozi hai",
    hours: "Saa za kujifunza",
    streak: "Mfululizo",
    score: "Alama ya jaribio",
    noCertificates: "Hakuna cheti kilichotolewa bado.",
    action: "hatua"
  },
  ar: {
    studio: "استوديو التعلم",
    title: "التعلم والتطوير",
    intro: "ابن الجاهزية عبر دورات موجهة واختبارات وشهادات ومهارات مرتبطة بالعمل.",
    readiness: "الجاهزية",
    focus: "التركيز الحالي",
    choose: "اختر دورة",
    emptySummary: "ابدأ دورة لبناء سجل تعلم موثق.",
    quiz: "إكمال الاختبار",
    certificate: "إصدار الشهادة",
    record: "سجل التعلم",
    certificates: "الشهادات",
    allTracks: "كل المسارات",
    complete: "مكتمل",
    status: "الحالة",
    impact: "تأثير الجاهزية",
    duration: "المدة",
    continueCourse: "متابعة الدورة",
    startCourse: "بدء الدورة",
    path: "مسار التعلم",
    active: "الدورة النشطة",
    hours: "ساعات التعلم",
    streak: "التتابع",
    score: "نتيجة الاختبار",
    noCertificates: "لا توجد شهادات بعد.",
    action: "إجراء"
  }
};

const platformCopy = {
  en: {
    nav: ["Dashboard", "Learning", "Workforce", "AFAYAI Health", "Agritrade", "Map & AI", "Agent AI", "Integrations", "Admin", "Profile"],
    logout: "Logout",
    dashboardTitle: "Command Dashboard",
    dashboardIntro: "Start real learning, workforce, health, trade, AI, and integration workflows from one operations queue.",
    learningTitle: "Learning & Development",
    learningIntro: "Build readiness through guided courses, quizzes, certificates, and workforce-aligned skills.",
    workforceTitle: "Workforce Pipeline",
    workforceIntro: "Move from training readiness into applications, interviews, mentor support, scheduled shifts, and paid placement opportunities.",
    healthTitle: "AFAYAI Health",
    healthIntro: "Manage patient intakes, representative escalation, safety reviews, and care-plan guidance from one supervised care desk.",
    tradeTitle: "Agritech + Agritrade",
    tradeIntro: "Manage product lots, buyer interest, wallet transactions, route checkpoints, and logistics handoffs.",
    mapTitle: "Global Map & AI",
    mapIntro: "Monitor country context, route movement, provider status, and AI recommendations from one operations view.",
    integrationsTitle: "Integrations",
    integrationsIntro: "Monitor sandbox and live-ready provider paths across learning, workforce, healthcare, AI, maps, and persistence.",
    adminTitle: "Admin Control Room",
    adminIntro: "Review users, module health, provider activity, and audit-style events across the platform.",
    profileTitle: "Unified Profile",
    profileIntro: "The profile reflects committed backend state across all platform domains.",
    languageToast: "Platform language updated"
  },
  fr: {
    nav: ["Tableau de bord", "Apprentissage", "Main-d'oeuvre", "Sante AFAYAI", "Agritrade", "Carte et IA", "Agent IA", "Integrations", "Admin", "Profil"],
    logout: "Deconnexion",
    dashboardTitle: "Tableau de commande",
    dashboardIntro: "Lancez les flux d'apprentissage, de main-d'oeuvre, de sante, de commerce, d'IA et d'integration depuis une seule file operationnelle.",
    learningTitle: "Apprentissage et developpement",
    learningIntro: "Renforcez la preparation avec des cours guides, des quiz, des certificats et des competences professionnelles.",
    workforceTitle: "Pipeline main-d'oeuvre",
    workforceIntro: "Passez de la preparation aux candidatures, entretiens, mentors, quarts planifies et opportunites remunerees.",
    healthTitle: "Sante AFAYAI",
    healthIntro: "Gerez les admissions patient, l'escalade representant, les revues securite et les plans de soins supervises.",
    tradeTitle: "Agritech + Agritrade",
    tradeIntro: "Gerez lots produits, interet acheteur, transactions wallet, points de route et passations logistiques.",
    mapTitle: "Carte globale et IA",
    mapIntro: "Surveillez pays, routes, fournisseurs et recommandations IA depuis une vue operationnelle.",
    integrationsTitle: "Integrations",
    integrationsIntro: "Surveillez les chemins fournisseurs locaux et prets pour le direct dans tous les modules.",
    adminTitle: "Salle de controle admin",
    adminIntro: "Revoyez utilisateurs, sante modules, activite fournisseurs et evenements d'audit.",
    profileTitle: "Profil unifie",
    profileIntro: "Le profil reflete l'etat backend engage dans tous les domaines.",
    languageToast: "Langue de la plateforme mise a jour"
  },
  sw: {
    nav: ["Dashibodi", "Mafunzo", "Nguvukazi", "Afya AFAYAI", "Agritrade", "Ramani na AI", "Wakala AI", "Miunganisho", "Admin", "Wasifu"],
    logout: "Toka",
    dashboardTitle: "Dashibodi ya Amri",
    dashboardIntro: "Anzisha kazi za mafunzo, nguvu kazi, afya, biashara, AI, na miunganisho kutoka foleni moja ya uendeshaji.",
    learningTitle: "Mafunzo na maendeleo",
    learningIntro: "Jenga utayari kupitia kozi, maswali, vyeti, na ujuzi wa kazi.",
    workforceTitle: "Mtiririko wa nguvukazi",
    workforceIntro: "Sogeza mtumiaji kutoka utayari wa mafunzo hadi maombi, mahojiano, mshauri, zamu, na ajira yenye malipo.",
    healthTitle: "Afya AFAYAI",
    healthIntro: "Simamia usajili wa wagonjwa, mwakilishi, ukaguzi wa usalama, na mipango ya huduma.",
    tradeTitle: "Agritech + Agritrade",
    tradeIntro: "Simamia bidhaa, wanunuzi, malipo ya wallet, vituo vya njia, na kazi za usafirishaji.",
    mapTitle: "Ramani ya dunia na AI",
    mapIntro: "Fuatilia nchi, njia, watoa huduma, na mapendekezo ya AI kutoka sehemu moja ya kazi.",
    integrationsTitle: "Miunganisho",
    integrationsIntro: "Fuatilia njia za watoa huduma katika mafunzo, kazi, afya, AI, ramani, na hifadhi.",
    adminTitle: "Chumba cha udhibiti",
    adminIntro: "Kagua watumiaji, afya ya moduli, shughuli za watoa huduma, na rekodi za ukaguzi.",
    profileTitle: "Wasifu uliounganishwa",
    profileIntro: "Wasifu unaonyesha hali ya backend katika kila eneo la jukwaa.",
    languageToast: "Lugha ya jukwaa imesasishwa"
  },
  es: {
    nav: ["Panel", "Aprendizaje", "Trabajo", "Salud AFAYAI", "Agritrade", "Mapa e IA", "Agente IA", "Integraciones", "Admin", "Perfil"],
    logout: "Salir",
    dashboardTitle: "Panel de mando",
    dashboardIntro: "Inicie flujos reales de aprendizaje, trabajo, salud, comercio, IA e integraciones desde una sola cola.",
    learningTitle: "Aprendizaje y desarrollo",
    learningIntro: "Construya preparacion con cursos guiados, pruebas, certificados y habilidades para el trabajo.",
    workforceTitle: "Ruta laboral",
    workforceIntro: "Pase de la preparacion a solicitudes, entrevistas, mentores, turnos y oportunidades pagadas.",
    healthTitle: "Salud AFAYAI",
    healthIntro: "Gestione admisiones, apoyo de representantes, revisiones de seguridad y planes de cuidado.",
    tradeTitle: "Agritech + Agritrade",
    tradeIntro: "Gestione cultivos, compradores, pedidos, pagos, rutas y logistica.",
    mapTitle: "Mapa global e IA",
    mapIntro: "Monitoree paises, rutas, proveedores y recomendaciones de IA desde una vista operativa.",
 …62152 tokens truncated…ive agriculture\b.*\b(what is|explain|mean|means)\b/.test(lower)) {
    return fastAnswer(nexusRegenerativeAgricultureAnswer(), ["open learning", "teach me about farming", "field notes"], "Nexus answered a farming education question directly.");
  }
  if (/\bapply\b.*\b(this job|that job|the job)\b/.test(lower)) {
    return fastAnswer(nexusApplyJobBoundaryAnswer(), ["show jobs", "review my skills", "prepare application"], "Nexus explained the job-selection boundary before any application action.");
  }
  if (/\b(baby|child|infant|my baby|my child)\b.*\b(not breathing|no breathing|cannot breathe|can't breathe|cant breathe|trouble breathing)\b/.test(lower)) {
    return fastAnswer(nexusUrgentChildBreathingAnswer(), ["find emergency care", "start intake", "call provider"], "Nexus surfaced emergency breathing guidance before normal health routing.");
  }
  if (isNexusHearingCheckCommand(raw)) {
    return fastAnswer(`Yes ${name}, I can hear you. Tell me what you need.`, ["I need medicine", "open map", "start a course"], "Nexus fast lane answered the hearing check.");
  }
  if (/\b(good morning|goodmorning|good afternoon|goodafternoon|good evening|goodevening|hello|hi nexus|hey nexus)\b/.test(lower)) {
    return fastAnswer(`Hello ${name}. How can I assist you?`, ["I need a doctor", "help me sell my crop", "start a course", "open map"], "Nexus fast lane greeted the user.");
  }
  if (/\b(what can (?:you )?do|how can you help|help)\b.*\b(farmer|farm|smallholder|grower)\b/.test(lower)
    || /\bwhat can you\b.*\b(farmer|farm|smallholder|grower)\b/.test(lower)) {
    return fastAnswer("For a farmer, I can explain crop problems in plain words, help sell a harvest, prepare buyer messages, show route support, open the map, guide field evidence, and suggest the next safe step.", ["my crop is bad", "sell my crop", "show route", "open map"], "Nexus fast lane answered farmer capability before the generic capability summary.");
  }
  if (/\b(real providers|providers can you connect|data sources|sources do you need|real[- ]?time|live data|schedule with a provider|access medical records|medical records|process a payment|process payment|process payments?|share my location|dispatch emergency help|emergency dispatch)\b/.test(lower)) {
    return fastAnswer(nexusRealPrototypeFoundationAnswer(raw), ["what data sources do you need", "what providers can you connect to", "what needs approval"], "Nexus explained real connector readiness without executing a regulated action.");
  }
  if (/\b(what can you do|what can do|you can do what|how can you help|help me use this|what do you do)\b/.test(lower)) {
    return fastAnswer(nexusWorkforceCapabilityAnswer(), ["I need medicine", "find work", "sell my crop", "open map"], "Nexus fast lane summarized capabilities.");
  }
  if (isWeatherLocationQuestion(lower) || /\b(what'?s|whats|what is|how is|how's|hows)\b.*\b(weather|temperature|temp|hot|rain|forecast|outside)\b/.test(lower)) {
    return fast({
      type: "backend",
      response: "I am checking the weather now.",
      suggestions: ["weather in Nairobi", "is it safe to walk", "weather in Addis", "open map"],
      reason: "Nexus fast lane routed a natural weather question to the live utility brain.",
      routeLabel: "fast-lane-weather"
    });
  }
  if (/\b(caption|captions|transcript|subtitles?)\b/.test(lower) && /\b(telehealth|health|patient|doctor|provider|clinic|care)\b/.test(lower)) {
    return fast({
      type: "workflow",
      workflow: "health",
      action: "caption",
      response: "Telehealth captions are open. Speak naturally, and Nexus will help turn the conversation into readable text.",
      dataset: { patientLocation: activeCountry().name },
      routeLabel: "fast-lane-health-caption"
    });
  }
  if (/\b(clinic|clinics|hospital|health center|health centre|pharmacy|pharmacies)\b/.test(lower)
    && /\b(map|route|location|near|nearby|closest|show|find)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "clinic-map-help",
      response: "I opened the clinic and pharmacy map. Share your village, city, or nearest landmark, and I will guide the closest clinic, mobile clinic, or pharmacy route.",
      routeLabel: "fast-lane-clinic-map"
    });
  }
  if (/\b(medicine|medication|pharmacy|pills|drug|refill|prescription|dawa|medicina|remedio)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "medicine-help",
      response: "I heard you need medicine. I cannot prescribe, but I can help find pharmacy or mobile clinic support and prepare provider review. First, tell me the medicine concern.",
      routeLabel: "fast-lane-medicine"
    });
  }
  if (/\b(doctor|nurse|provider|clinician|daktari)\b/.test(lower) && /\b(need|want|talk|speak|call|contact|see|find|help|please)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "doctor-help",
      response: "I heard you need a doctor. I am not a doctor and this is not a diagnosis, but I can guide the next safe step. First, tell me where you are.",
      routeLabel: "fast-lane-doctor"
    });
  }
  if (/\b(intake|health intake|patient intake|telehealth intake)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "health-intake",
      response: "I opened health intake. I will ask one question at a time. This is not a diagnosis. First, who needs care?",
      routeLabel: "fast-lane-intake"
    });
  }
  if (/\b(my crop is bad|crop is bad|crop bad|crop damage|field problem|plant sick|yellow leaves|pests|wilting|shamba mbaya)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "crop-help",
      response: "I can help with the crop problem. I opened crop support. Tell me the crop, farm location, and what looks wrong.",
      routeLabel: "fast-lane-crop"
    });
  }
  if (/\b(help me sell|sell my crop|sell crop|sell maize|find buyer|talk to buyer|contact buyer|kuuza mazao)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "crop-sale-guided",
      response: "I can help sell the crop. First, what crop or product do you want to sell or move?",
      routeLabel: "fast-lane-trade"
    });
  }
  if (/\b(i need work|need work|find work|find a job|job please|work please|need job|help me find a job pathway|show job pathways|career pathways|job readiness|help me prepare for work|kazi|trabajo|emploi)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "workforce-guided",
      response: "I can help with work. First, what country or area do you want to work in?",
      routeLabel: "fast-lane-workforce"
    });
  }
  if (/\b(help me with training|start training|open training|help me learn|start a course|start course|take course|begin course|start learning|want learn|learn please|course|lesson|somo)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "learning-guided",
      response: "I can help you learn. First, what skill or course do you want?",
      routeLabel: "fast-lane-learning"
    });
  }
  if (/\b(help me in the field|field support)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "crop-help",
      response: "I opened field support. Tell me the field, crop, route, or local work issue, and Nexus will guide the next safe step.",
      routeLabel: "fast-lane-field-support"
    });
  }
  if (/\b(open health access|telehealth support)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "health-intake",
      response: "I opened health access. This is not a diagnosis. I can guide intake, captions, provider handoff, or local camera support one step at a time.",
      routeLabel: "fast-lane-health-access"
    });
  }
  if (/\b(open marketplace|open agritrade)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "crop-sale-guided",
      response: "I opened marketplace and AgriTrade support. Agriculture trade is still supported. Tell me the crop, buyer, product, or route you want to work on.",
      routeLabel: "fast-lane-marketplace"
    });
  }
  if (/\b(open map|open maps|show map|show maps|full map|global map|real map|map please|ramani|mapa|carte)\b/.test(lower)) {
    return fast({
      type: "direct",
      directAction: "full-map",
      response: "Full map is open. You can zoom, find clinics, check routes, or track shipments.",
      routeLabel: "fast-lane-map"
    });
  }
  return null;
}

function runSimpleUserVoiceIntent(intent, command = "") {
  if (!intent) return false;
  clearAgentProgressTimers();
  companionRouteOutcomeMetadata(command, {
    type: intent.type,
    directAction: intent.directAction,
    workflow: intent.workflow,
    actualRouteName: intent.directAction || [intent.workflow, intent.action].filter(Boolean).join(".") || intent.type,
    actualRouteSource: "web.simpleUserDirectVoiceIntent",
    workflowOpened: intent.type === "direct" || intent.type === "workflow",
    confirmationRequired: false
  });
  if (intent.type === "clarify") {
    pendingAgentClarification = intent.clarification || null;
    pendingNexusSpokenCommand = null;
    renderLiveVoiceSuggestions(intent.suggestions || ["health", "work", "learning", "crops", "map"]);
    updateNexusBehaviorLayer("listening", "Nexus asked one short clarifying question instead of guessing.");
    setVoiceResponse(intent.response, true);
    return true;
  }
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  agentPerformanceState.lastCommand = command;
  paintLocalLevelOneSuggestionForSimpleUserIntent(intent, command);
  preserveControlledActionPreviewDuringCommandRoute = true;
  queueMicrotask(() => {
    preserveControlledActionPreviewDuringCommandRoute = false;
  });
  if (intent.type === "direct" && intent.directAction === "full-map") return openFullScaleUserMap(intent.response);
  if (intent.type === "direct" && intent.directAction === "country-map") return openCountryMapFromVoice(intent.country, intent.response);
  if (intent.type === "direct" && intent.directAction === "home") return openNexusHome(intent.response);
  if (intent.type === "direct" && intent.directAction === "health-intake") return openHealthIntakeNow(intent.response);
  if (intent.type === "direct" && intent.directAction === "medicine-help") return openMedicineHelpNow(intent.response);
  if (intent.type === "direct" && intent.directAction === "clinic-map-help") return openHealthFacilityMapNow(intent.response);
  if (intent.type === "direct" && intent.directAction === "clinic-help") return openClinicHelpNow(intent.response);
  if (intent.type === "direct" && intent.directAction === "crop-help") return openCropProblemHelpNow(intent.response);
  if (intent.type === "direct" && intent.directAction === "doctor-help") return openDoctorHelpNow(intent.response);
  if (intent.type === "direct" && intent.directAction === "crop-sale-guided") return openCropSaleGuidedNow(intent.response);
  if (intent.type === "direct" && intent.directAction === "workforce-guided") return openWorkforceGuidedNow(intent.response);
  if (intent.type === "direct" && intent.directAction === "learning-guided") {
    const opened = openLearningGuidedNow(intent.response);
    paintLocalLevelOneSuggestionForSimpleUserIntent(intent, command);
    setTimeout(() => {
      paintLocalLevelOneSuggestionForSimpleUserIntent(intent, command);
    }, 180);
    return opened;
  }
  if (intent.type === "direct" && intent.directAction === "route-guided") return openRouteGuidedNow(intent.response);
  if (intent.type === "workflow" && intent.workflow === "health" && intent.action === "caption") return openTelehealthCaptionsNow(intent.response);
  if (intent.type === "workflow") {
    const opened = openWorkflowByVoice(intent.workflow, intent.action, intent.response, intent.dataset || {});
    paintLocalLevelOneSuggestionForSimpleUserIntent(intent, command);
    setTimeout(() => {
      paintLocalLevelOneSuggestionForSimpleUserIntent(intent, command);
    }, 180);
    return opened;
  }
  return false;
}

function isPriorityServiceVoiceIntent(intent) {
  if (!intent || intent.type === "clarify") return false;
  if (intent.type === "direct") return ["health-intake", "medicine-help", "clinic-help", "clinic-map-help", "crop-help", "doctor-help", "crop-sale-guided", "workforce-guided", "learning-guided", "route-guided", "full-map", "country-map", "home"].includes(intent.directAction);
  if (intent.type === "workflow") return ["health", "trade", "workforce", "learning", "map"].includes(intent.workflow);
  return false;
}

function resetConversationStateForPriorityIntent(command = "") {
  if (activeConversationIntake) saveConversationIntake(null);
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  clearNexusAnswerContext();
  if (pendingWorkflow && isNewServiceRequestOverWorkflow(command)) clearOpenWorkflowForNewVoiceRequest(command);
}

function dispatchGenesisWorkspaceAction(action = {}, result = {}, options = {}) {
  if (!action || action.type !== "genesis.workspace.open") return false;
  const workspace = String(action.workspace || "").toLowerCase();
  const payload = action.payload || {};
  const permissionSection = {
    map: "map", workforce: "workforce", trade: "trade", health: "health",
    telehealth: "health", "mobile-clinic": "health", pharmacy: "health",
    agriculture: "trade", learning: "learning", media: "agent",
    reminders: "agent", offline: "agent", "live-knowledge": "agent"
  }[workspace];
  if (!permissionSection || !canOpenSection(permissionSection)) return false;
  const capabilityId = action.capabilityId || {
    map: "maps",
    workforce: "workforce",
    trade: "agritrade",
    health: /blood[- ]?pressure|hypertension|\bbp\b/i.test(Object.values(payload).join(" ")) ? "hypertension" : "telehealth",
    learning: "learning"
  }[workspace] || workspace;
  const command = String(payload.query || result.response || Object.values(payload).filter(Boolean).join(" ") || "Open Nexus workspace");
  nexusGenesisVoiceDebugLog("genesis-workspace-bridge-launcher", { workspace, capabilityId, requestId: action.requestId || "" });
  const opened = workspace === "map"
    ? openGenesisRealtimeMapWorkspace(payload, command)
    : openNexusCapability(capabilityId, {
      command,
      source: "openai-realtime",
      sourceSurface: "voice_audio",
      instant: true
    });
  if (!opened) return false;
  const host = document.querySelector('#nexus-workspace[data-nexus-workspace="true"]');
  if (host) {
    host.querySelector('[data-genesis-workspace-prefill="true"]')?.remove();
    const prefill = document.createElement("section");
    prefill.dataset.genesisWorkspacePrefill = "true";
    prefill.setAttribute("aria-label", "Nexus voice details");
    prefill.innerHTML = `<strong>${escapeHtml(translateText("Voice details"))}</strong>`;
    Object.entries(payload).forEach(([key, value]) => {
      if (!String(value || "").trim()) return;
      const label = document.createElement("label");
      const caption = document.createElement("span");
      const field = document.createElement("input");
      caption.textContent = translateText(key.replace(/([A-Z])/g, " $1"));
      field.dataset.nexusRealtimeField = key;
      field.value = String(value);
      field.readOnly = false;
      label.append(caption, field);
      prefill.append(label);
    });
    host.prepend(prefill);
  }
  document.body.dataset.genesisWorkspace = workspace;
  document.body.dataset.genesisWorkspaceRequestId = String(action.requestId || "");
  if (workspace === "map" && payload.country) document.body.dataset.genesisMapCountry = String(payload.country);
  if (workspace === "map" && payload.location) document.body.dataset.genesisMapLocation = String(payload.location);
  const visibleWorkspace = document.querySelector('#nexus-workspace[data-nexus-workspace="true"]');
  const ack = { type: "genesis.workspace.acknowledged", requestId: action.requestId, workspace, opened: true, visible: Boolean(document.body.dataset.genesisWorkspace === workspace && visibleWorkspace), populatedFields: Object.keys(payload).filter(key => payload[key]), microphoneActive: Boolean(nexusPermanentMicrophoneStream?.getAudioTracks?.().some(track => track.readyState === "live" && track.enabled) || voiceRecognition || voiceFirstMode), realtimeConnected: Boolean(window.nexusRealtimeConnected || realtimeVoiceSession?.connectionState === "connected"), error: null };
  if (!options.suppressAcknowledgement) window.dispatchEvent(new CustomEvent("genesis.workspace.acknowledged", { detail: ack }));
  return ack.visible;
}

function genesisRealtimeMapTarget(payload = {}) {
  const normalized = normalizeSpeechForIntent(payload.location || payload.destination || payload.origin || "");
  const targets = {
    nairobi: { name: "Nairobi", lat: -1.286389, lng: 36.817223, zoom: 12 },
    niorobi: { name: "Nairobi", lat: -1.286389, lng: 36.817223, zoom: 12 },
    nakuru: { name: "Nakuru", lat: -0.303099, lng: 36.080025, zoom: 12 },
    mombasa: { name: "Mombasa", lat: -4.043477, lng: 39.668206, zoom: 12 },
    kisumu: { name: "Kisumu", lat: -0.091702, lng: 34.767956, zoom: 12 }
  };
  return targets[normalized] || null;
}

function openGenesisRealtimeMapWorkspace(payload = {}, command = "") {
  const country = africanMapCountryTarget(payload.country || command);
  const target = genesisRealtimeMapTarget(payload);
  const response = target
    ? `I opened the real map centered on ${target.name}${payload.country ? `, ${payload.country}` : ""}.`
    : "I opened the real map. You can zoom, drag, inspect places, and plan a route.";
  const opened = country
    ? openCountryMapFromVoice(country, response, { suppressSpeech: true })
    : openFullScaleUserMap(response, { suppressSpeech: true });
  if (!opened) return false;
  document.body.dataset.genesisMapSurface = "full-scale-leaflet";
  if (target) {
    document.body.dataset.genesisMapLocation = target.name;
    window.setTimeout(() => {
      if (!userMap) return;
      userMap.setView([target.lat, target.lng], target.zoom);
      userMapLayers.markers?.clearLayers?.();
      L.marker([target.lat, target.lng])
        .addTo(userMapLayers.markers)
        .bindPopup(`<strong>${escapeHtml(target.name)}</strong>`)
        .openPopup();
      safeInvalidateLeafletMap(userMap);
    }, 360);
  }
  return true;
}

const genesisWorkspaceBridgeRequests = new Map();

async function runAuthoritativeGenesisWorkspaceBridge(result = {}, context = {}) {
  const genesisAction = result.genesisAction || result.metadata?.genesisAction || result.action || null;
  if (!genesisAction || genesisAction.type !== "genesis.workspace.open") return false;
  const requestId = String(genesisAction.requestId || context.callId || context.correlationId || "");
  const action = authoritativeGenesisActionForTurn({ ...genesisAction, requestId }, result);
  if (requestId && genesisWorkspaceBridgeRequests.has(requestId)) {
    return genesisWorkspaceBridgeRequests.get(requestId);
  }
  nexusGenesisVoiceDebugLog("workspace-bridge-action-received", {
    requestId,
    workspace: action.workspace || "",
    correlationId: context.correlationId || ""
  });
  const pending = dispatchGenesisWorkspaceActionVerified(action, result).then(acknowledgement => {
    result.genesisAcknowledgement = acknowledgement;
    result.executionVerified = acknowledgement.verified === true;
    return acknowledgement;
  }).finally(() => {
    window.setTimeout(() => genesisWorkspaceBridgeRequests.delete(requestId), 30000);
  });
  if (requestId) genesisWorkspaceBridgeRequests.set(requestId, pending);
  return pending;
}

async function dispatchGenesisWorkspaceActionVerified(action = {}, result = {}) {
  if (!action || action.type !== "genesis.workspace.open") return false;
  const requestId = String(action.requestId || "");
  const workspace = String(action.workspace || "").toLowerCase();
  const payload = action.payload && typeof action.payload === "object" ? action.payload : {};
  const expected = Object.entries(payload).filter(([, value]) => String(value || "").trim());
  if (!dispatchGenesisWorkspaceAction(action, result, { suppressAcknowledgement: true })) {
    throw new Error(`Nexus card launcher failed for ${workspace} (${requestId}).`);
  }

  const findPopulatedField = (key, value) => {
    const aliases = {
      origin: ["origin"],
      destination: ["destinationAddress", "destination"],
      query: ["query", "goal", "jobGoal", "search", "description"],
      location: ["location", "city", "region"],
      product: ["product", "crop", "title", "transactionItem"],
      intakeType: ["intakeType", "careRequest", "reason"],
      learningGoal: ["learningGoal", "goal", "query", "topic"],
      country: ["country", "destinationCountry", "location"],
      jobType: ["jobType", "jobGoal", "query"],
      action: ["action", "transactionAction"],
      intake: ["intake", "intakeType", "careRequest"]
    };
    const selectors = (aliases[key] || [key]).flatMap(name => [
      `[data-nexus-realtime-field="${key}"]`,
      `[data-maps-field-visit-field="${name}"]`,
      `[data-nexus-mode-field="${name}"]`,
      `[data-nexus-guided-answer="${name}"]`,
      `[data-marketplace-create-field="${name}"]`
    ]);
    if (key === "query" || key === "learningGoal") selectors.push("[data-learning-bridge-query]");
    const expectedValue = String(value).trim().toLowerCase();
    if (key === "country" && String(document.body.dataset.genesisMapCountry || "").trim().toLowerCase() === expectedValue) return document.body;
    return selectors.map(selector => document.querySelector(selector)).find(field => {
      const actual = String(field?.value || field?.textContent || "").trim().toLowerCase();
      return actual && (actual === expectedValue || actual.includes(expectedValue) || expectedValue.includes(actual));
    }) || null;
  };

  let populatedFields = [];
  let visibleWorkspace = null;
  for (let attempt = 0; attempt < 30; attempt += 1) {
    visibleWorkspace = document.querySelector('#nexus-workspace[data-nexus-workspace="true"]');
    populatedFields = expected.filter(([key, value]) => findPopulatedField(key, value)).map(([key]) => key);
    if (visibleWorkspace && populatedFields.length === expected.length) break;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  const sdkMicrophoneProof = normalizeRealtimeMicrophoneProof(realtimeVoiceSession?.sdkController);
  const microphoneActive = Boolean(sdkMicrophoneProof.hasLiveTrack || nexusPermanentMicrophoneStream?.getAudioTracks?.().some(track => track.readyState === "live" && track.enabled));
  const realtimeConnected = Boolean(realtimeVoiceActive?.() || realtimeVoiceSession?.active === true || window.nexusRealtimeConnected || realtimeVoiceSession?.connectionState === "connected");
  const visibleMap = workspace !== "map" || Boolean(
    document.body.dataset.genesisMapSurface === "full-scale-leaflet"
    && document.body.classList.contains("user-map-full-open")
    && document.querySelector("#userMapCanvas.leaflet-container")
  );
  const visible = Boolean(document.body.dataset.genesisWorkspace === workspace && visibleWorkspace && visibleMap);
  const verified = visible && populatedFields.length === expected.length && microphoneActive && realtimeConnected;
  const ack = {
    type: "genesis.workspace.acknowledged",
    requestId,
    workspace,
    opened: visible,
    visible,
    mapRendered: workspace === "map" ? visibleMap : undefined,
    populatedFields,
    populatedValues: Object.fromEntries(expected.filter(([key]) => populatedFields.includes(key))),
    microphoneActive,
    realtimeConnected,
    verified,
    error: verified ? null : "workspace-verification-failed"
  };
  nexusGenesisVoiceDebugLog("workspace-bridge-acknowledgement", {
    requestId,
    workspace,
    visible,
    verified,
    populatedFieldCount: populatedFields.length,
    expectedFieldCount: expected.length,
    microphoneActive,
    realtimeConnected
  });
  window.dispatchEvent(new CustomEvent("genesis.workspace.acknowledged", { detail: ack }));
  if (!verified) throw new Error(`Nexus workspace verification failed for ${workspace} (${requestId}).`);
  return ack;
}
function openAgentResultWorkflow(result = {}, command = "") {
  if (result.metadata?.workflowDeferred) return false;
  const intent = String(result.intent || "");
  const response = result.response || "Yes, I can help. I opened the right area and I am ready for the next detail.";
  if (COMPANION_WORKFLOW_LIKE_CONVERSATION_INTENTS?.has?.(intent) || [
    "conversation.medicine_help",
    "conversation.doctor_help",
    "conversation.patient_help",
    "conversation.clinic_map_help",
    "conversation.health_intake",
    "conversation.telehealth_captions",
    "conversation.crop_help",
    "conversation.crop_sale_help",
    "conversation.workforce_help",
    "conversation.learning_start",
    "conversation.map_open"
  ].includes(intent)) {
    companionRouteOutcomeMetadata(command, {
      actualRouteType: "workflow",
      actualRouteName: intent,
      actualRouteSource: "web.openAgentResultWorkflow",
      workflowOpened: true
    });
  }
  if (intent === "conversation.medicine_help") return openMedicineHelpNow(response);
  if (intent === "conversation.doctor_help" || intent === "conversation.patient_help") return openDoctorHelpNow(response);
  if (intent === "conversation.clinic_map_help") return isHealthFacilityMapCommand(command, result) ? openHealthFacilityMapNow(response) : openClinicHelpNow(response);
  if (intent === "conversation.health_intake") return openHealthIntakeNow(response);
  if (intent === "conversation.telehealth_captions") return openTelehealthCaptionsNow(response);
  if (intent === "conversation.crop_help") return openCropProblemHelpNow(response);
  if (intent === "conversation.crop_sale_help") return openWorkflowByVoice("trade", "buyer-contact", response, { productId: firstProduct()?.id });
  if (intent === "conversation.workforce_help") return openWorkflowByVoice("workforce", "build-profile", response, { roleId: firstEligibleRole()?.id });
  if (intent === "conversation.learning_start") {
    const opened = openWorkflowByVoice("learning", "start", response, {});
    paintLocalLevelOneSuggestionForSimpleUserIntent({ type: "workflow", workflow: "learning", action: "start" }, command);
    setTimeout(() => {
      paintLocalLevelOneSuggestionForSimpleUserIntent({ type: "workflow", workflow: "learning", action: "start" }, command);
    }, 180);
    return opened;
  }
  if (intent === "conversation.map_open") return openFullScaleUserMap(response);
  if (intent === "conversation.location_captured" && result.metadata?.redirectSection === "health") return openMedicineHelpNow(response);
  return false;
}

function runUserModeHardLanding(command = "") {
  if (experienceMode !== "user") return false;
  const lower = normalizeSpeechForIntent(command);
  if (!lower || isUniversalLanguageCommand(command) || isGlobalStopCommand(lower)) return false;
  const openProcess = (section, workflow, action, response, dataset = {}) => {
    const config = workflowConfig(workflow, action, { dataset });
    if (!config) return false;
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    pendingWorkflow = config;
    clearAgentProgressTimers();
    recordNexusAutonomousLearning({ type: "hard-user-landing", command, workflow, action });
    forceOpenUserProcessScreen(section, config, { response, dataset }, response || config.userTitle || config.title || "Selected action");
    updateNexusBehaviorLayer("ready", `Nexus opened ${section} from a plain user request.`);
    setVoiceResponse(response, true, { allowHandoff: false, command });
    return true;
  };
  if (/\b(i need work|need work|find work|find a job|job please|work please|need job|want job|kazi|nataka kazi|trabajo|empleo)\b/.test(lower)) {
    return openProcess("workforce", "workforce", "build-profile", "I opened work support. Tell me your country, the job you want, and your skills. I will help you apply step by step.", { roleId: firstEligibleRole()?.id });
  }
  if (/\b(start a course|start course|take course|begin course|start learning|want learn|i want learn|learn please|somo|kujifunza|aprender)\b/.test(lower)) {
    return openProcess("learning", "learning", "start", "I opened course support. Choose the course you want, or tell me the skill you want to learn.");
  }
  if (/\b(help me sell my crop|sell my crop|sell crop|find buyer|buyer crop|market my crop|kuuza mazao|nataka kuuza|vender cosecha|vendre recolte)\b/.test(lower)) {
    return openProcess("trade", "trade", "buyer-contact", "I opened crop sale support. Tell me the crop, quantity, and location. I will help prepare buyer contact and delivery tracking.", { productId: firstProduct()?.id });
  }
  if (/\b(open map|show map|full map|global map|real map|map please|ramani|track route|track shipment|track my sale|show tracking)\b/.test(lower)) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    clearAgentProgressTimers();
    recordNexusAutonomousLearning({ type: "hard-user-landing", command, workflow: "map", action: "full-map" });
    return openFullScaleUserMap(isMapTrackingCommand(command) ? "I opened the full map for tracking. You can zoom, drag, check the route, and follow shipment or clinic locations." : "I opened the full map. You can zoom, drag, find facilities, check routes, and track shipments.");
  }
  return false;
}

function nexusConversationFirstResponse(response, suggestions = [], status = "answering") {
  clearAgentProgressTimers();
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  updateNexusBehaviorLayer(status, "Nexus answered conversationally before opening any menu.");
  renderLiveVoiceSuggestions(suggestions.length ? suggestions : ["health", "crops", "work", "learning", "map"]);
  setVoiceResponse(response, true, { allowHandoff: false });
  return true;
}

function nexusPlatformExplainAnswer() {
  return "Nexus is the assistant inside Nexus Genesis | AgriNexus, a full multilingual access platform and voice-operated assistant foundation for farmers, workers, patients, providers, and underserved communities. I can help with agriculture, workforce training, health access, pharmacy support, mobile clinics, transportation-to-care, maps, community services, and marketplace support. AgriNexus remains a supported legacy/internal compatibility identity, and agriculture plus AgriTrade remain active domain modules. Live regulated actions require verified connectors, consent, user approval, provider confirmation where needed, and audit logging before they can be enabled.";
}

function nexusPlatformDifferentiatorAnswer() {
  return "Nexus Genesis | AgriNexus is different because Nexus is being built as a source-ready, provider-ready, permission-gated access platform: one assistant layer for training, job readiness, health access, field support, marketplace and agriculture trade, maps, and local services. AgriNexus remains supported for legacy compatibility, and AgriTrade remains the agriculture-trade marketplace module. Nexus can prepare the next step now, but live calls, provider contact, payments, prescriptions, medical records, location sharing, or emergency dispatch stay disabled until the required connector, consent, approval, and audit controls are active.";
}

function nexusWorkforceCapabilityAnswer() {
  return "I can listen in normal words, answer questions, open the right workspace, and guide workforce development, training, job readiness, field support, health access, maps and location support, marketplace or agriculture trade, reminders, and provider-ready handoffs. I can prepare the next step now. Real-world execution such as calls, messages, scheduling, payments, prescriptions, medical records, location sharing, or emergency dispatch requires a verified connector, consent, explicit approval, and audit controls.";
}

function nexusRealPrototypeFoundationAnswer(command = "") {
  const lower = String(command || "").toLowerCase();
  if (/\b(real providers|providers can you connect|provider connections|connect to providers)\b/.test(lower)) {
    return "Nexus is built to connect with provider directories, clinics, telehealth partners, mobile clinics, pharmacies, transportation resources, workforce programs, agriculture resources, community services, and regulated partners when those connectors are verified and approved. In this build, live provider execution is disabled by default; I can explain what connector is needed and prepare the next step.";
  }
  if (/\b(data sources|source data|sources do you need|verified sources|real data)\b/.test(lower)) {
    return "Nexus needs source-backed data from public sources, partner-provided operational data, live API integrations, and regulated systems such as FHIR only when the proper agreement, consent, compliance, and audit controls exist. Answers should say the source owner, freshness, connector status, and whether a live action is currently enabled.";
  }
  if (/\b(real[- ]?time|live data|work in real time|use real time data)\b/.test(lower)) {
    return "Nexus is being built for real-time source and provider integrations, but live data is used only when a verified connector is active. If a connector is not active, I should say that clearly and avoid claiming real-time facts.";
  }
  if (/\b(schedule|appointment|book)\b.*\b(provider|doctor|clinic|telehealth|visit)\b/.test(lower)) {
    return "I can prepare a provider scheduling step, but I cannot book or schedule with a provider until a verified scheduling connector is active, you approve the action, and any provider confirmation and audit logging requirements are satisfied.";
  }
  if (/\b(medical records|fhir|health record|patient record)\b/.test(lower)) {
    return "Medical records and FHIR access are regulated capabilities. Nexus cannot access or share records unless a verified regulated connector, identity and consent checks, permission controls, and audit logging are active.";
  }
  if (/\b(payment|payments|pay|process money|process a payment|process payment|charge)\b/.test(lower)) {
    return "Payments are high-risk regulated actions. Nexus cannot process a payment until an approved payment connector, user approval, compliance checks, and audit logging are active.";
  }
  if (/\b(location|share my location|use my location|gps)\b/.test(lower)) {
    return "Location sharing requires browser permission and user approval. Nexus can prepare a location-supported step, but it cannot share or use precise location for a live action unless the permission, connector, consent, and audit requirements are satisfied.";
  }
  if (/\b(emergency|dispatch|ambulance|emergency help)\b/.test(lower)) {
    return "If this is an emergency, contact local emergency services now. Nexus cannot dispatch emergency help in this build. Future emergency partner workflows require verified emergency connectors, consent or legal authority, provider confirmation where applicable, and audit logging.";
  }
  return "Nexus is the actual prototype foundation for a full multilingual access platform. It is source-ready and provider-ready by design, but live regulated actions remain disabled until verified connectors, consent, user approval, provider confirmation where needed, and audit logging are in place.";
}

function nexusPhase17StandardUserSafeAnswer(command = "") {
  const lower = normalizeToolText(command);
  if (!lower) return null;
  if (/\b(explain yourself|introduce yourself|what are you|who are you|what is nexus|explain nexus|what do you do)\b/.test(lower)) {
    return { response: nexusPlatformExplainAnswer(), suggestions: ["what providers can you connect to", "what data sources do you need", "help farmers in Africa"] };
  }
  if (/\b(what can you do|how can you help|how can help)\b.*\b(farmers?|farms?|smallholders?|growers?|africa|agriculture)\b/.test(lower)
    || /\b(help farmers?|farmers? in africa|farmers? across africa|african farmers?)\b/.test(lower)) {
    return {
      response: "For farmers and rural communities, Nexus can guide crop and field support, irrigation learning, market and AgriTrade review, workforce training, transportation-to-care, pharmacy and mobile clinic access, and source-backed next steps. Live buyer contact, payments, provider contact, location sharing, or regulated health actions require verified connectors, consent, approval, and audit controls.",
      suggestions: ["help me find agriculture training", "I need help with crop issues", "Browse AgriTrade"]
    };
  }
  if (/\b(real providers|providers can you connect|data sources|sources do you need|real[- ]?time|live data|schedule with a provider|access medical records|medical records|process payments?|share my location|dispatch emergency help|emergency dispatch)\b/.test(lower)) {
    return { response: nexusRealPrototypeFoundationAnswer(command), suggestions: ["what data sources do you need", "what providers can you connect to", "what needs approval"] };
  }
  if (/\b(i need telehealth|need telehealth|telehealth help|telehealth access|prepare telehealth)\b/.test(lower)) {
    return {
      response: "Nexus can help prepare a telehealth access step, collect the information usually needed for care review, and explain the handoff boundary. It is not connected to a live provider unless a verified telehealth connector is active, and it will not schedule, call, diagnose, or share information without approval and audit controls.",
      suggestions: ["start intake", "find a mobile clinic", "pharmacy support"]
    };
  }
  if (/\b(pharmacy support|need pharmacy|medicine support|refill my prescription|prescription refill|request refill)\b/.test(lower)) {
    return {
      response: "Nexus can help prepare pharmacy support and explain what information a pharmacist or clinician may need. It cannot refill, change, or submit a prescription unless an approved pharmacy connector, consent, provider review, user approval, and audit controls are active.",
      suggestions: ["find pharmacy support", "start intake", "mobile clinic access"]
    };
  }
  if (/\b(call my doctor|call a doctor|contact my doctor|contact provider|call provider)\b/.test(lower)) {
    return {
      response: "I can help prepare provider contact, but I will not call, message, or open a provider from the first request. Provider contact requires a resolved contact, explicit confirmation, an approved connector, and audit logging.",
      suggestions: ["prepare provider contact", "start intake", "find clinic support"]
    };
  }
  if (/\b(play music from kenya|play kenyan music|kenya music|kenya-inspired music)\b/.test(lower)) {
    return {
      response: "Absolutely. I'll play a Kenya-inspired demo rhythm. This is local browser-generated audio, and I'm not opening an outside music service.",
      suggestions: ["stop music", "open learning", "what can you do"],
      localMusic: true
    };
  }
  return null;
}

function nexusMobileClinicExplainAnswer() {
  return "Mobile clinics are care teams or outreach points that bring basic health access closer to a community. In AgriNexus, I can help explain the steps, prepare intake details, find clinic or pharmacy support, and create a safe handoff packet. This local demo does not dispatch or book a live mobile clinic by itself.";
}

function nexusRegenerativeAgricultureAnswer() {
  return "Regenerative agriculture means farming in ways that rebuild soil health, protect water, increase biodiversity, and keep farms productive over time. Common practices include cover crops, compost, reduced tillage, crop rotation, agroforestry, managed grazing, and measuring soil or field recovery. AgriNexus can turn that into learning, field notes, crop guidance, and buyer evidence.";
}

function nexusApplyJobBoundaryAnswer() {
  return "I can help with a job application, but I do not have a selected job from this chat yet. Choose a job first, or tell me the role and country you want. I will help prepare the application and will not submit anything until you confirm.";
}

function nexusUrgentChildBreathingAnswer() {
  return "Call emergency services now if available, such as 911 in the U.S. A baby who is not breathing needs immediate emergency help. I am not a doctor and this app cannot replace emergency services or dispatch care. After you call, I can help find nearby emergency care or prepare a handoff with your location.";
}

function nexusResilientConversationIntent(command = "") {
  const text = normalizeSpeechForIntent(command);
  if (!text) return null;
  const has = signals => speechSignalMatches(text, signals);
  const capability = [/\bwhat can (?:you )?do\b/, /\bwhat you do\b/, /\byou can do what\b/, /\bhow help\b/, "que puedes hacer", "que haces", "que peux tu faire", "que fais tu", "unaweza kufanya nini", "unafanya nini", "o que voce pode fazer", "ماذا تفعل", "ماذا تستطيع", "ماذا يمكنك"];
  const medicine = [/\b(need|want|find|get|help)\s+(medicine|medication|pills|drug|refill|pharmacy)\b/, /\b(medicine|medication|pills|drug|refill|pharmacy)\s+(need|want|help|please|where)\b/, "dawa", "medicina", "medicamento", "remedio", "medicament", "pharmacie", "nahitaji dawa", "nina hitaji dawa", "necesito medicina", "preciso remedio", "دواء", "صيدلية", "ادوية", "أدوية"];
  const clinicMap = [/\b(show|find|open|need|want)\b.*\b(clinic|clinics|hospital|health center|health centre|pharmacy|pharmacies)\b.*\b(map|route|location|near|nearby|closest)\b/, /\b(clinic|clinics|hospital|health center|health centre|pharmacy|pharmacies)\b.*\b(map|route|location|near|nearby|closest)\b/, "show clinic on map", "show clinic map", "clinic on map", "pharmacy on map", "show pharmacy on map", "clinic map"];
  const clinic = [/\b(clinic|hospital|health center|health centre)\s+(near|nearby|closest|where|find|map|please)\b/, /\b(near|nearby|closest|where|find|map)\s+(clinic|hospital|health center|health centre)\b/, "clinic near", "find clinic", "clinica cerca", "clinique pres", "kliniki karibu", "hospitali karibu", "عيادة", "مستشفى", "clinica perto"];
  const doctor = [/\b(need|want|see|call|talk|speak|find|help)\s+(doctor|nurse|provider|clinician)\b/, /\b(doctor|nurse|provider|clinician)\s+(need|please|help|call|where)\b/, "doctor please", "daktari", "medico", "docteur", "infirmier", "enfermera", "طبيب", "دكتور", "ممرض"];
  const cropBad = [/\b(crop|farm|field|plant|maize|cassava|rice|beans|harvest|shamba)\s+(bad|sick|dying|yellow|dry|pest|bugs|problem|weak)\b/, /\b(bad|sick|dying|yellow|dry|pest|bugs|problem|weak)\s+(crop|farm|field|plant|maize|cassava|rice|beans|harvest|shamba)\b/, "crop bad", "farm bad", "maize yellow", "shamba mbaya", "cultivo malo", "cosecha mala", "recolte mauvaise", "campo ruim", "محصول سيء", "زرع مريض"];
  const cropSale = [/\b(sell|selling|market|buyer|trade)\s+(crop|maize|cassava|rice|beans|produce|harvest|product)\b/, /\b(crop|maize|cassava|rice|beans|produce|harvest|product)\s+(sell|buyer|market|trade)\b/, "sell crop", "buyer crop", "vender cosecha", "vendo cosecha", "vendre recolte", "kuuza mazao", "nataka kuuza", "بيع المحصول", "comprador", "acheteur", "mnunuzi"];
  const work = [/\b(need|want|find|looking|help)\s+(work|job|jobs|employment|role|paid work)\b/, /\b(work|job|jobs|employment|role|paid work)\s+(need|want|please|help|find)\b/, "job please", "work please", "kazi", "nataka kazi", "trabajo", "empleo", "travail", "emploi", "preciso trabalho", "عمل", "وظيفة"];
  const learning = [/\b(start|begin|open|take|need|want|help)\s+(course|lesson|training|class|learn|learning)\b/, /\b(course|lesson|training|class|learn|learning)\s+(start|begin|please|help|want|need)\b/, "teach me", "want learn", "i no understand lesson", "curso", "leccion", "cours", "lecon", "somo", "kujifunza", "aprender", "تعلم", "دورة"];
  const map = [/\b(open|show|find|need|want)\s+(map|route|location|tracking)\b/, /\b(map|route|location|tracking)\s+(open|show|please|where|need)\b/, "open map", "map please", "show route", "mapa", "carte", "ramani", "rota", "خريطة", "طريق", "موقع"];
  if (has(capability) && has(["farmer", "farm", "smallholder", "grower"])) {
    return {
      type: "answer",
      response: "For a farmer, I can explain crop problems in plain words, help sell a harvest, prepare buyer messages, show route support, open the map, guide field evidence, and suggest the next safe step.",
      suggestions: ["my crop is bad", "sell my crop", "show route", "open map"]
    };
  }
  if (has(capability)) {
    return {
      type: "answer",
      response: nexusWorkforceCapabilityAnswer(),
      suggestions: ["start training", "show job pathways", "open health access", "open AgriTrade"]
    };
  }
  if (has(clinicMap)) return { type: "direct", directAction: "clinic-map-help", response: "I opened the clinic and pharmacy map. Share your village, city, or nearest landmark, and I will guide the closest clinic, mobile clinic, or pharmacy route." };
  if (has(clinic)) return { type: "direct", directAction: "clinic-help", response: "I heard you need clinic support. I can guide care access, show clinic or pharmacy options on the map, and prepare a safe handoff. If this is an emergency, call local emergency help now. Share your village, city, or nearest landmark." };
  if (has(doctor)) return { type: "direct", directAction: "doctor-help", response: "I heard you need a doctor. I can guide you step by step. I am not a doctor and this is not a diagnosis, but I can help explain what happened, check urgent warning signs, find clinic or mobile clinic support, and prepare a provider handoff. First, tell me where you are." };
  if (has(medicine)) return { type: "direct", directAction: "medicine-help", response: "I heard you need medicine. I can guide you step by step. I cannot prescribe, but I can help explain the medicine concern, find pharmacy or mobile clinic support, and prepare provider review. First, tell me the medicine concern." };
  if (has(cropBad)) return { type: "direct", directAction: "crop-help", response: "I can help with the crop problem. I'm with you. I opened crop support. Tell me the crop, where the farm is, and what looks wrong." };
  if (has(cropSale)) return { type: "workflow", workflow: "trade", action: "buyer-contact", response: "I can help sell the crop. I opened buyer support. Tell me the crop, quantity, location, and buyer if you know one. I will help prepare the sale and delivery tracking.", dataset: { productId: firstProduct()?.id } };
  if (has(work)) return { type: "workflow", workflow: "workforce", action: "build-profile", response: "I can help with work. I opened job support. Tell me your country, the job you want, and your skills. I will show the role path and application step.", dataset: { roleId: firstEligibleRole()?.id } };
  if (has(learning)) return { type: "workflow", workflow: "learning", action: "start", response: "I can help you learn. I opened course support. Tell me the skill you want, or I can start the recommended course with captions or audio.", dataset: {} };
  if (has(map)) return { type: "direct", directAction: "full-map", response: "Full map is open. You can zoom, drag, find facilities, check routes, and track shipments." };
  return null;
}

function nexusConversationFirstIntent(command = "") {
  const lower = normalizeToolText(command);
  const name = userFirstName();
  const has = words => words.some(word => new RegExp(`\\b${word}\\b`).test(lower));
  const resilientIntent = nexusResilientConversationIntent(command);
  if (!lower) return resilientIntent || null;
  if (isPlatformExplainVoiceCommand(command)) {
    return {
      type: "answer",
      response: nexusPlatformExplainAnswer(),
      suggestions: ["help a farmer", "help a patient", "open learning", "open map"]
    };
  }
  if (/^(home|go home|nexus home|agrinexus home|agri nexus home|open home|main screen|dashboard|back home|take me home)$/.test(lower)
    || /\b(main menu|menu)(?:\s+(home|dashboard))?\b/.test(lower)
    || /\b(open|go|return|take me|back)\b.*\b(home|dashboard|main screen|main menu|menu)\b/.test(lower)) {
    return {
      type: "direct",
      directAction: "home",
      response: `Home is open, ${name}. What do you need next?`
    };
  }
  const requestedMapCountry = africanMapCountryTarget(command);
  if (requestedMapCountry && isCountryMapCommand(command)) {
    return {
      type: "direct",
      directAction: "country-map",
      country: requestedMapCountry,
      response: `I opened the map for ${requestedMapCountry.name}. You can zoom, drag, inspect nearby regions, and add clinic, pharmacy, crop, route, or shipment tracking.`
    };
  }
  if (resilientIntent) return resilientIntent;
  const exactGreeting = /^(hello|hi|hey|good morning|goodmorning|good afternoon|goodafternoon|good evening|goodevening|hola|buenos dias|buenas tardes|bonjour|salut|habari|hujambo|ola|oi|bom dia|boa tarde)\b(?:\s+(nexus|agrinexus|agri nexus|agri))?$/.test(lower);
  if (exactGreeting) {
    return {
      type: "answer",
      response: `Hello ${name}. How can I assist you?`,
      suggestions: ["I need a doctor", "help me sell my crop", "start a course", "find work", "open map"]
    };
  }
  if (/\b(can you hear me|are you listening|do you hear me|you hear me|nexus you there|are you there)\b/.test(lower)) {
    return {
      type: "answer",
      response: `Yes ${name}, I can hear you. Tell me what you need in your own words.`,
      suggestions: ["I need medicine", "my crop is bad", "clinic near me", "find work"]
    };
  }
  if (/\b(caption|captions|transcript|subtitles?)\b.*\b(telehealth|health|patient|doctor|provider|clinic|care)\b|\b(telehealth|health|patient|doctor|provider|clinic|care)\b.*\b(caption|captions|transcript|subtitles?)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "health",
      action: "caption",
      response: "I can build captions for telehealth. I opened the caption relay so the patient, caregiver, and provider can read the conversation clearly.",
      dataset: {}
    };
  }
  if (/\b(healthcare|health care|medical|clinic|telehealth)\b.*\b(partner|provider|practitioner|ngo|government)\b|\b(partner|provider|practitioner|ngo|government)\b.*\b(healthcare|health care|medical|clinic|telehealth)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "partnership",
      action: "telehealth",
      response: "I opened healthcare partner support. AgriNexus can show non-diagnostic intake, mobile clinic coordination, clinic and pharmacy location help, captions, provider handoff packets, and follow-up evidence.",
      dataset: {}
    };
  }
  if (/\b(mobile clinic|field clinic|outreach clinic|clinic outreach|rural clinic)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "health",
      action: "mobile-clinic",
      response: "I opened mobile clinic support. I can guide this step by step: start intake, capture location, prepare a provider handoff, find clinic or pharmacy resources, and organize outreach follow-up. This is not a diagnosis. First, tell me where the patient is.",
      dataset: { patientLocation: activeCountry().name }
    };
  }
  if (/\b(no english|cannot read|can't read|cant read|i cannot read|i cant read|illiterate|read for me|help me read|baby sick|child sick|sick baby)\b/.test(lower)
    || /\b(start|open|begin)\b.*\b(health )?(intake|telehealth intake|patient intake)\b/.test(lower)
    || /\b(health )?(intake|telehealth intake|patient intake)\b.*\b(start|open|begin|help)\b/.test(lower)
    || /^start intake$/.test(lower)) {
    return {
      type: "workflow",
      workflow: "health",
      action: "intake",
      response: "I started health intake. Tell me who needs care and where they are. This is not a diagnosis; it helps prepare the safest next support step.",
      dataset: {}
    };
  }
  if (/\b(pharmacy|medicine|medication|refill|drug|pills)\b/.test(lower) && /\b(map|show|find|near|nearest|where|location)\b/.test(lower)) {
    return {
      type: "direct",
      directAction: "full-map",
      response: "I opened the full map for clinic and pharmacy support. Share your village, city, or location, and I will guide the closest facility route."
    };
  }
  if (/\b(what can you do|how can you help)\b.*\b(patient|caregiver|sick person|person sick)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "health",
      action: "intake",
      response: "For a patient, I can start a non-diagnostic intake, help find clinic or pharmacy support, prepare a provider call, add captions, organize mobile clinic support, and create a clear handoff packet.",
      dataset: {}
    };
  }
  if (/\b(help me sell|sell)\b.*\b(maize|corn|crop|harvest|produce)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "trade",
      action: "buyer-contact",
      response: "I opened crop sale support. Tell me the quantity, location, and buyer if you know one. I will help prepare buyer contact and delivery tracking.",
      dataset: { productId: firstProduct()?.id }
    };
  }
  if (/\b(contact|message|call|talk to|speak to)\b.*\bbuyer\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "trade",
      action: "buyer-contact",
      response: "I prepared buyer contact. I can draft the buyer message, keep sale evidence, and wait for your confirmation before any live SMS, WhatsApp, or phone action.",
      dataset: { productId: firstProduct()?.id }
    };
  }
  if (/\b(send|text)\b.*\b(sms|text)\b.*\bbuyer\b|\b(sms|text)\b.*\bbuyer\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "trade",
      action: "buyer-sms",
      response: "SMS to the buyer is staged. I will not send it until you confirm. Live delivery uses Twilio or the configured SMS provider.",
      dataset: { channel: "SMS", productId: firstProduct()?.id }
    };
  }
  if (/\b(send|message)\b.*\bwhatsapp\b.*\bseller\b|\bwhatsapp\b.*\bseller\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "trade",
      action: "buyer-whatsapp",
      response: "WhatsApp to the seller is staged. I will not send it until you confirm. Live delivery uses Twilio WhatsApp or the configured WhatsApp provider.",
      dataset: { channel: "WhatsApp", productId: firstProduct()?.id }
    };
  }
  if (/\b(track|follow|show|monitor)\b.*\b(shipment|delivery|order|sale|product)\b/.test(lower)
    || /\b(track|show)\b.*\broute\b.*\b(farm|field)\b.*\bmarket\b/.test(lower)) {
    return {
      type: "direct",
      directAction: "full-map",
      response: "I opened shipment and route tracking. The map can show route, checkpoints, risk notes, and delivery evidence."
    };
  }
  if (/\b(show|open|check)\b.*\b(trade )?route\b.*\bkenya\b.*\bnigeria\b|\b(route|show route)\b.*\bkenya\b.*\bnigeria\b/.test(lower)) {
    return {
      type: "direct",
      directAction: "full-map",
      response: "I opened the Kenya to Nigeria route view. The map can show route context, shipment tracking, buyer updates, and delivery evidence."
    };
  }
  if (/\b(run|start|open)\b.*\b(drone|field)\b.*\b(scan|evidence)\b|\brun drone scan\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "trade",
      action: "drone",
      response: "Drone scan is ready. Nexus can review crop health, pests, irrigation, field evidence, buyer proof, and the next farm action.",
      dataset: { productId: firstProduct()?.id }
    };
  }
  if (/\b(explain|summarize|read)\b.*\b(crop evidence|field evidence|drone evidence)\b.*\b(simple|plain|easy)\b|\bcrop evidence\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "trade",
      action: "drone-pest",
      response: "In simple words: crop evidence helps show whether the crop looks healthy, damaged, dry, pest-affected, or ready for sale. Nexus can turn that into buyer proof and a next farm step.",
      dataset: { productId: firstProduct()?.id }
    };
  }
  if (/\b(read|speak|play)\b.*\b(lesson|course)\b.*\b(for me)?\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "learning",
      action: "lesson",
      response: "I opened the lesson reader. Nexus can read the lesson in simple words and keep captions available while you follow along.",
      dataset: {}
    };
  }
  if (/\b(build|create|open|turn on)\b.*\b(caption|captions|subtitles|transcript)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "learning",
      action: "caption",
      response: "Caption workflow is open. Nexus will turn spoken lesson words into readable text for learning support.",
      dataset: {}
    };
  }
  if (/\b(complete|finish)\b.*\b(my )?(lesson|course)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "learning",
      action: "lesson",
      response: "Lesson progress workflow is open. Nexus can record the completed lesson, update progress, and prepare the next learning step.",
      dataset: {}
    };
  }
  if (/\b(issue|create|give|get)\b.*\b(my )?(certificate|credential)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "learning",
      action: "certificate",
      response: "Certificate workflow is open. Nexus will check course progress and prepare the certificate evidence when the learner is ready.",
      dataset: {}
    };
  }
  if (/\bbiochemistry|biology|chemistry|laboratory|lab\b/.test(lower) && /\b(job|jobs|apply|work|role)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "workforce",
      action: "build-profile",
      response: "With biochemistry, Nexus can suggest lab assistant, quality control, food safety, agriculture testing, health outreach, and research support roles in Kenya or South Africa, then help prepare an application path.",
      dataset: { roleId: firstEligibleRole()?.id }
    };
  }
  if (/\b(prepare|practice|coach)\b.*\b(interview|interviews)\b|\binterview prep\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "workforce",
      action: "interview",
      response: "Interview preparation is open. Nexus can practice questions, explain the role, help you tell your story, and prepare answers in simple words.",
      dataset: { roleId: firstEligibleRole()?.id }
    };
  }
  if (/\b(i need work|need work|find work|find a job|job please|work please|need job|want job)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "workforce",
      action: "build-profile",
      response: "I opened work support. Tell me your country, the job you want, and your skills. I will help you apply step by step.",
      dataset: { roleId: firstEligibleRole()?.id }
    };
  }
  if (/\b(apply|application)\b.*\b(job|role|work)\b|\bhelp me apply\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "workforce",
      action: "apply-role",
      response: "I opened job application support. Nexus can match a role, check missing skills, prepare the application, and save application evidence.",
      dataset: { roleId: firstEligibleRole()?.id }
    };
  }
  if (/\b(use my location|use location|my location|gps)\b/.test(lower)) {
    return {
      type: "direct",
      directAction: "full-map",
      response: "I opened map support so you can allow location and continue route, clinic, pharmacy, or shipment tracking."
    };
  }
  if (localMusicControlIntent(command)) {
    return {
      type: "tool",
      tool: "music-control"
    };
  }
  if (/\b(play|open|find|search|start|put on|listen to)\b.*\b(music|song|songs|playlist|soul|gospel|congolese|kenyan|relaxing|90s)\b/.test(lower)) {
    return {
      type: "tool",
      tool: "music",
      suggestions: ["stop the music", "play relaxing music", "pause"]
    };
  }
  if (/\b(stop|pause)\b.*\bmusic\b|\bpause music\b|\bstop music\b/.test(lower)) {
    return {
      type: "answer",
      response: "Music is stopped for the demo. Nexus is still listening when you call it again.",
      suggestions: ["play relaxing music", "Nexus"]
    };
  }
  if (/^pause$|^hold on$|^wait$|\bpause listening\b/.test(lower)) {
    return {
      type: "answer",
      response: "Paused. Say Nexus when you want me again.",
      suggestions: ["Nexus"]
    };
  }
  if (isPlatformExplainVoiceCommand(command) || /\b(explain nexus genesis|explain nexus workforce|what is nexus genesis|what is nexus workforce|tell me about nexus genesis|tell me about nexus workforce|explain agrinexus|explain agri nexus|what is agrinexus|what is agri nexus|tell me about agrinexus|tell me about agri nexus|are you agrinexus|who are you|what are you)\b/.test(lower)) {
    return {
      type: "answer",
      response: nexusPlatformExplainAnswer(),
      suggestions: ["start training", "show job pathways", "open health access", "open AgriTrade"]
    };
  }
  if (/\b(what can (?:you )?do|how can you help|what do you do|help me understand)\b/.test(lower)) {
    return {
      type: "answer",
      response: nexusWorkforceCapabilityAnswer(),
      suggestions: ["start training", "show job pathways", "open health access", "open AgriTrade"]
    };
  }
  if ((/\b(help.*farmer|farmer|farmers|farming|farm)\b/.test(lower) && /\b(help|support|what can|how can|tell|explain)\b/.test(lower))
    || /\bwhat can you\b.*\b(farmer|farm|farmers|farming)\b/.test(lower)) {
    return {
      type: "answer",
      response: "For a farmer, I can explain crop problems in plain words, help sell a harvest, prepare buyer messages, show route support, open the map, guide field evidence, and suggest the next safe step.",
      suggestions: ["my crop is bad", "sell my crop", "show route", "open map"]
    };
  }
  if (/\b(baby|child|kid|mother|grandma|patient|person)\b.*\b(sick|ill|hurt|pain|fever|injury|medicine|doctor|clinic)\b/.test(lower)
    || /\b(sick baby|baby sick|child sick|patient sick|someone is sick|i am sick|i need health help)\b/.test(lower)) {
    return {
      type: "direct",
      directAction: "health-intake",
      response: "I'm with you. I will guide health intake one question at a time. This is not a diagnosis. If this is urgent or dangerous, contact local emergency help now. First, who needs care and where are they?"
    };
  }
  if (has(["medicine", "medication", "pharmacy", "refill", "drug", "pills"])) {
    return {
      type: "direct",
      directAction: "medicine-help",
      response: "I heard you need medicine. I can guide you step by step. I cannot prescribe, but I can help explain the medicine concern, find pharmacy or mobile clinic support, and prepare provider review. First, tell me the medicine concern."
    };
  }
  if (has(["clinic", "hospital", "mobile clinic", "health center", "health centre"]) && has(["near", "nearest", "closest", "find", "where", "map", "location", "around"])) {
    return {
      type: "direct",
      directAction: "clinic-help",
      response: "I heard you need clinic support. I can guide care access, show clinic or pharmacy options on the map, and prepare a safe handoff. If this is an emergency, call local emergency help now. Share your village, city, or nearest landmark."
    };
  }
  if (has(["doctor", "nurse", "provider", "clinician"]) && has(["need", "want", "speak", "talk", "call", "contact", "see", "find", "help"])) {
    return {
      type: "direct",
      directAction: "doctor-help",
      response: "I heard you need a doctor. I can guide you step by step. I am not a doctor and this is not a diagnosis, but I can help explain what happened, check urgent warning signs, find clinic or mobile clinic support, and prepare a provider handoff. First, tell me where you are."
    };
  }
  if (/\b(i need health|need health|health help|telehealth help|medical help|i need care|need care|i am sick|im sick|i feel sick|not feeling well)\b/.test(lower)) {
    return {
      type: "direct",
      directAction: "health-intake",
      response: "I'm with you. I will guide health intake one question at a time. This is not a diagnosis, but it helps prepare the next support step. First, who needs care and where are they?"
    };
  }
  if (/\b(my crop is bad|crop is bad|crop bad|field is bad|plants are sick|plant is sick|crop problem|field problem|yellow leaves|wilting|pests|crop dying|farm problem)\b/.test(lower)) {
    return {
      type: "direct",
      directAction: "crop-help",
      response: "I can help with the crop problem. I'm with you. I opened crop support. Tell me the crop, where the farm is, and what looks wrong."
    };
  }
  if ((has(["sell", "selling", "buyer", "market", "trade"]) && has(["crop", "maize", "rice", "cassava", "beans", "produce", "harvest", "product"]))
    || /\b(help me sell|sell my crop|sell maize|find buyer|talk to buyer)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "trade",
      action: "buyer-contact",
      response: "I can help sell the crop. I opened buyer support. Tell me the crop, quantity, location, and buyer if you know one. I will help prepare the sale and delivery tracking.",
      dataset: { productId: firstProduct()?.id }
    };
  }
  if (/\b(track|where is|route|delivery|shipment|sale location|product location|transaction location)\b/.test(lower)) {
    return {
      type: "direct",
      directAction: "full-map",
      response: "I opened the full map for tracking. Share the pickup and delivery locations, and I will guide the route, risk, and shipment status."
    };
  }
  if (/\b(i need work|need work|find work|find a job|job in|apply for|employment|workforce|role)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "workforce",
      action: has(["apply"]) ? "apply-role" : "build-profile",
      response: "I can help with work. I opened job support. Tell me your country, the job you want, and your skills. I will show the role path and application step.",
      dataset: { roleId: firstEligibleRole()?.id }
    };
  }
  if (/\b(start.*course|course|lesson|training|learn|teach me|school|class)\b/.test(lower)) {
    return {
      type: "workflow",
      workflow: "learning",
      action: "start",
      response: "I can help you learn. I opened course support. Tell me the skill you want, or I can start the recommended course with captions or audio.",
      dataset: {}
    };
  }
  if (/\b(caption|captions|subtitle|transcript)\b/.test(lower)) {
    return /\b(health|doctor|clinic|telehealth|patient|provider)\b/.test(lower)
      ? {
          type: "workflow",
          workflow: "health",
          action: "caption",
          response: "Telehealth captions are open. Speak naturally, and Nexus will help turn the conversation into readable text.",
          dataset: {}
        }
      : {
          type: "workflow",
          workflow: "learning",
          action: "caption",
          response: "Learning captions are open. Speak naturally, and Nexus will write the lesson words clearly.",
          dataset: {}
        };
  }
  if (/\b(open|show|full|global|real|map|route|location)\b.*\b(map|route|location|tracking)\b/.test(lower) || /^(map|open map|show map)$/.test(lower)) {
    return {
      type: "direct",
      directAction: "full-map",
      response: "Full map is open. You can zoom, drag, find facilities, check routes, and track shipments."
    };
  }
  return null;
}

function runConversationFirstIntent(intent, command = "") {
  if (!intent) return false;
  if (intent.type === "answer") return nexusConversationFirstResponse(intent.response, intent.suggestions || []);
  return runSimpleUserVoiceIntent(intent, command);
}

async function executeUnifiedNexusIntent(intent, command = "", options = {}) {
  if (!intent) return false;
  clearAgentProgressTimers();
  const lower = normalizeToolText(command);
  const turnToken = options.turnToken || null;
  const completedAt = Date.now();
  agentPerformanceState.lastCommand = command;
  agentPerformanceState.spokenCommand = command;
  if (intent.fastLane) {
    agentPerformanceState.completedAt = completedAt;
    agentPerformanceState.lastLatencyMs = Math.max(1, completedAt - (agentPerformanceState.startedAt || completedAt));
    agentPerformanceState.status = "completed";
    agentPerformanceState.route = intent.routeLabel || "fast-lane";
  }
  if (command) {
    rememberConversationTurn(command, "");
    updateNexusAwareness(command, { silent: true });
    speechSafetyRisk(command, options.source || "voice");
  }

  if (intent.type === "answer") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    renderLiveVoiceSuggestions(intent.suggestions || ["health", "crops", "work", "learning", "map"]);
    updateNexusBehaviorLayer("answering", intent.reason || "Unified Nexus brain answered directly.");
    setVoiceResponse(intent.response, true, { allowHandoff: false, command, source: "unified-brain" });
    return true;
  }

  if (intent.type === "clarify") {
    pendingAgentClarification = intent.clarification || null;
    pendingNexusSpokenCommand = null;
    renderLiveVoiceSuggestions(intent.suggestions || ["health", "medicine", "clinic", "crops", "work", "learning", "map"]);
    updateNexusBehaviorLayer("listening", intent.reason || "Unified Nexus brain asked one question before acting.");
    setVoiceResponse(intent.response, true, { allowHandoff: false, command, source: "unified-brain" });
    return true;
  }

  if (intent.type === "direct" || intent.type === "workflow") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return runSimpleUserVoiceIntent(intent, command);
  }

  if (intent.type === "backend") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    updateNexusBehaviorLayer("thinking", intent.reason || "Unified Nexus brain is using the live conversation engine.");
    renderLiveVoiceSuggestions(intent.suggestions || ["ask a follow-up", "open health", "open map", "Nexus stop"]);
    const locationContext = await safeBrowserWeatherLocation(command);
    if (ignoreStaleNexusTurn(turnToken, "unified backend answer")) return true;
    await runBackendAgentCommand(command, locationContext, { turnToken });
    return true;
  }

  if (intent.type === "tool") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    if (intent.tool === "music-control") return handleLocalMusicControlCommand(command);
    if (intent.tool === "music") return runMusicAssistantCommand(command, { turnToken });
    if (intent.tool === "dynamic") return runDynamicVoiceTool(command);
    if (intent.tool === "intelligence") return handleNexusIntelligenceRouter(command);
    if (intent.tool === "advisor") return handleAdvisorBrainCommand(command);
  }

  if (intent.type === "utility") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    const locationContext = await safeBrowserWeatherLocation(command);
    await runUtilityAgentCommand(command, intent.response, locationContext, { turnToken });
    return true;
  }

  return false;
}

function nexusConversationCoreEnabled() {
  return localStorage.getItem("agrinexusConversationCore") !== "off";
}

function normalizeNexusConversationCoreDecision(decision = {}) {
  if (!decision || typeof decision !== "object") return null;
  const type = ["answer", "direct", "workflow", "backend", "clarify"].includes(decision.type) ? decision.type : "";
  if (!type) return null;
  return {
    type,
    response: String(decision.response || "").replace(/\s+/g, " ").trim(),
    directAction: decision.directAction || "",
    workflow: decision.workflow || "",
    action: decision.action || "",
    dataset: decision.dataset || {},
    suggestions: Array.isArray(decision.suggestions) ? decision.suggestions : [],
    clarification: decision.clarification || null,
    reason: decision.reason || "Nexus Conversation Core selected this route.",
    confidence: Number(decision.confidence || 0),
    provider: decision.provider || "nexus-conversation-core",
    conversationCore: decision
  };
}

function shouldUseNexusConversationCore(command = "", context = {}) {
  if (!nexusConversationCoreEnabled() || context.skipConversationCore || context.adaptiveReroute) return false;
  const lower = normalizeToolText(command);
  if (!lower) return false;
  if (isGlobalStopCommand(lower) || isUniversalLanguageCommand(command)) return false;
  if (isWakePhraseOnly(command) || isNexusGreetingOnly(command)) return false;
  return true;
}

async function runNexusConversationCore(command = "", context = {}) {
  if (!shouldUseNexusConversationCore(command, context)) return false;
  try {
    updateNexusBehaviorLayer("thinking", "Nexus Conversation Core is deciding whether to answer, ask, or act.");
    const result = await requestWithTimeout("/api/agent/conversation-core", {
      method: "POST",
      body: {
        command,
        source: context.source || "web",
        mode: experienceMode,
        modeContext: modeConversationContext(command),
        targetLanguage: languageCode(),
        language: languageCode()
      }
    }, Number(localStorage.getItem("agrinexusConversationCoreTimeout") || 12000));
    const decision = normalizeNexusConversationCoreDecision(result.conversationCore);
    if (!decision) return false;
    const routeLabel = `${decision.provider}: ${decision.type}`;
    updateNexusBehaviorLayer(decision.type === "clarify" ? "listening" : decision.type === "answer" ? "answering" : "acting", `Nexus Conversation Core routed this request through ${routeLabel}.`);
    renderLiveVoiceSuggestions(decision.suggestions?.length ? decision.suggestions : ["health", "medicine", "crops", "work", "learning", "map"]);
    if (decision.type === "backend") {
      await executeUnifiedNexusIntent({ type: "backend", reason: decision.reason, suggestions: decision.suggestions }, command, { ...context, skipConversationCore: true });
      return true;
    }
    await executeUnifiedNexusIntent(decision, command, { ...context, skipConversationCore: true });
    return true;
  } catch (error) {
    updateNexusBehaviorLayer("fallback", `Conversation Core fallback: ${error.message || "unavailable"}`);
    return false;
  }
}

async function unifiedNexusConversationBrain(rawCommand = "", context = {}) {
  const localized = normalizeLocalizedVoiceCommand(rawCommand);
  const cleaned = normalizeMultilingualBehaviorCommand(cleanWakeCommand(localized));
  const command = cleaned || cleanWakeCommand(localized) || localized || rawCommand;
  const lower = normalizeToolText(command);
  const spoken = command || rawCommand;
  const turnToken = context.turnToken || null;
  const stopRedirect = postStopRedirectCommand(command);

  const topLevelPhase17SafeAnswer = nexusPhase17StandardUserSafeAnswer(spoken || command || localized || rawCommand);
  if (topLevelPhase17SafeAnswer) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    openAskNexus();
    enableHeyAgriNexusMode();
    renderLiveVoiceSuggestions(topLevelPhase17SafeAnswer.suggestions || ["what providers can you connect to", "what data sources do you need", "what needs approval"]);
    updateNexusBehaviorLayer("answering", "Nexus answered a Phase 17 prototype-foundation prompt without executing an action.");
    setVoiceResponse(topLevelPhase17SafeAnswer.response, true, { allowHandoff: false, command: spoken || command || rawCommand, source: "phase-17-standard-user-safe-answer" });
    if (topLevelPhase17SafeAnswer.localMusic) {
      void playNexusMusicTestAudio("Kenya-inspired demo rhythm");
    }
    return true;
  }

  if (await answerPendingNexusQuestion(command || localized || rawCommand)) return true;

  if (isGlobalStopCommand(String(command || localized || rawCommand).toLowerCase())) {
    if (isStopAndContinueWorkingCommand(command || localized || rawCommand)) {
      stopNexusAndReturnToWork("Stopped. Nexus is closed so you can continue working.");
      return true;
    }
    enterNexusConversationPause("Stopped. Nexus is paused and will ignore background conversation until you say Nexus again.");
    if (stopRedirect) {
      leaveNexusConversationPause("Nexus heard your next instruction after stop.");
      setTimeout(() => {
        setCommandInputs(stopRedirect);
        void handleVoiceCommand(stopRedirect, { ...context, skipUnifiedBrain: false });
      }, VOICE_POST_STOP_REDIRECT_DELAY_MS);
    }
    return true;
  }

  if (isUniversalLanguageCommand(command || localized)) {
    pendingNexusSpokenCommand = null;
    pendingAgentClarification = null;
    await changeLanguageByVoice(command || localized);
    return true;
  }

  const phase17SafeAnswer = nexusPhase17StandardUserSafeAnswer(spoken || command || localized || rawCommand);
  if (phase17SafeAnswer) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    openAskNexus();
    enableHeyAgriNexusMode();
    renderLiveVoiceSuggestions(phase17SafeAnswer.suggestions || ["what providers can you connect to", "what data sources do you need", "what needs approval"]);
    updateNexusBehaviorLayer("answering", "Nexus answered a Phase 17 prototype-foundation prompt without executing an action.");
    setVoiceResponse(phase17SafeAnswer.response, true, { allowHandoff: false, command: spoken || command || rawCommand, source: "phase-17-standard-user-safe-answer" });
    if (phase17SafeAnswer.localMusic) {
      void playNexusMusicTestAudio("Kenya-inspired demo rhythm");
    }
    return true;
  }

  if (await runNexusConversationCore(spoken || command || localized || rawCommand, context)) return true;

  const fastLaneIntent = nexusFastLaneIntent(spoken || command || localized || rawCommand);
  if (fastLaneIntent) {
    resetConversationStateForPriorityIntent(spoken || command || rawCommand);
    return executeUnifiedNexusIntent(fastLaneIntent, spoken || command || localized || rawCommand, context);
  }

  const firstPrioritySimpleIntent = simpleUserDirectVoiceIntent(spoken || command);
  if (isPriorityServiceVoiceIntent(firstPrioritySimpleIntent)) {
    resetConversationStateForPriorityIntent(spoken || command);
    return executeUnifiedNexusIntent(firstPrioritySimpleIntent, spoken || command, context);
  }

  if (await answerPendingNexusQuestion(command || localized || rawCommand)) return true;

  if (isGlobalStopCommand(String(command || localized || rawCommand).toLowerCase())) {
    if (isStopAndContinueWorkingCommand(command || localized || rawCommand)) {
      stopNexusAndReturnToWork("Stopped. Nexus is closed so you can continue working.");
      return true;
    }
    enterNexusConversationPause("Stopped. Nexus is paused and will ignore background conversation until you say Nexus again.");
    if (stopRedirect) {
      leaveNexusConversationPause("Nexus heard your next instruction after stop.");
      setTimeout(() => {
        setCommandInputs(stopRedirect);
        void handleVoiceCommand(stopRedirect, { ...context, skipUnifiedBrain: false });
      }, VOICE_POST_STOP_REDIRECT_DELAY_MS);
    }
    return true;
  }

  if (isUniversalLanguageCommand(command || localized)) {
    pendingNexusSpokenCommand = null;
    pendingAgentClarification = null;
    await changeLanguageByVoice(command || localized);
    return true;
  }

  if (isPlatformExplainVoiceCommand(spoken || command || localized || rawCommand)) {
    clearOpenWorkflowForNewVoiceRequest(spoken || command || rawCommand);
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    openAskNexus();
    enableHeyAgriNexusMode();
    renderLiveVoiceSuggestions(["help a farmer", "I need a doctor", "help me sell my crop", "start a course", "open map"]);
    updateNexusBehaviorLayer("answering", "Nexus answered the platform explanation directly before any open workflow could intercept it.");
    setVoiceResponse(nexusPlatformExplainAnswer(), true, { allowHandoff: false, command: spoken || command || rawCommand, source: "unified-brain-platform-explain" });
    return true;
  }

  if (handleNexusAdaptiveLearningCommand(command || localized || rawCommand)) return true;

  const introductionResponse = nexusIntroductionResponse(command || localized);
  if (introductionResponse) {
    stopVoicePlayback({ hard: true });
    openAskNexus();
    enableHeyAgriNexusMode();
    setVoiceResponse(introductionResponse, true, { allowHandoff: false, source: "unified-brain" });
    render();
    return true;
  }

  const greetingOnly = isNexusGreetingOnly(localized);
  const greetingPrefix = isNexusGreetingPrefix(localized);
  const wakeOnly = isWakePhraseOnly(localized);
  if (greetingOnly || wakeOnly || (greetingPrefix && !hasBehaviorActionVerb(command))) {
    stopVoicePlayback({ hard: true });
    openAskNexus();
    enableHeyAgriNexusMode();
    nexusAwaitingCommand = true;
    recordNexusAutonomousLearning({ type: "greeting", command: normalizedWakeText(localized) });
    setVoiceResponse(nexusConversationalWake(greetingOnly ? "hello" : "wake", localized), true, { allowHandoff: false, source: "unified-brain" });
    return true;
  }

  if (!lower) {
    setVoiceResponse("I am listening. Tell me what you need in your own words.", true, { allowHandoff: false, source: "unified-brain" });
    return true;
  }

  if (isNexusVoiceOffCommand(lower)) {
    disableNexusVoiceForDemo("Demo quiet mode is on. Nexus voice is off until you turn it back on.");
    return true;
  }
  if (isNexusVoiceOnCommand(lower)) {
    voiceConversationPaused = false;
    enableNexusVoiceForDemo("Nexus voice is back on. Say Nexus, then tell me what you need.");
    return true;
  }
  const facilityMapPhrase = normalizeToolText([spoken, command, localized, rawCommand].filter(Boolean).join(" "));
  if (/\b(clinic|clinics|hospital|health center|health centre|pharmacy|pharmacies)\b/.test(facilityMapPhrase)
    && /\b(map|route|location|near|nearby|closest|show|find)\b/.test(facilityMapPhrase)) {
    resetConversationStateForPriorityIntent(facilityMapPhrase);
    return openHealthFacilityMapNow("I opened the clinic and pharmacy map. Share your village, city, or nearest landmark, and I will guide the closest clinic, mobile clinic, or pharmacy route.");
  }
  if (/\b(streaming voice|seamless voice|native voice|continuous voice|live voice)\b/.test(lower)) {
    const turnOff = /\b(off|disable|stop|turn off)\b/.test(lower);
    setStreamingVoiceEnabled(!turnOff, "voice-command");
    const summary = nativeVoiceReadinessSummary();
    setVoiceResponse(turnOff
      ? "Streaming voice is off. I will still listen when you press Mic."
      : `Streaming voice is on. Speak naturally, interrupt me when needed, and I will keep the conversation moving. ${summary}`,
      true,
      { allowHandoff: false, source: "unified-brain" });
    return true;
  }

  if (await handleNexusRealtimeAdjustment(command || localized)) return true;
  if (handleNexusSelfCorrection(command || localized)) return true;

  const prioritySimpleIntent = simpleUserDirectVoiceIntent(spoken || command);
  if (isPriorityServiceVoiceIntent(prioritySimpleIntent)) {
    resetConversationStateForPriorityIntent(spoken || command);
    return executeUnifiedNexusIntent(prioritySimpleIntent, spoken || command, context);
  }

  const adaptiveUnderstanding = context.adaptiveReroute ? null : adaptiveCommandUnderstanding(command || localized || rawCommand);
  if (adaptiveUnderstanding?.learnedRule && adaptiveUnderstanding.rewrittenCommand && adaptiveUnderstanding.rewrittenCommand !== command) {
    updateNexusBehaviorLayer("learning", `Nexus used learned phrase: ${adaptiveUnderstanding.learnedRule.source}`);
    recordNexusAutonomousLearning({
      type: "adaptive-rule-routed",
      command: command || localized || rawCommand,
      target: adaptiveUnderstanding.rewrittenCommand
    });
    setCommandInputs(adaptiveUnderstanding.rewrittenCommand);
    await handleVoiceCommand(adaptiveUnderstanding.rewrittenCommand, { ...context, skipUnifiedBrain: false, adaptiveReroute: true });
    return true;
  }

  const visibleInlineWorkflow = $(".user-inline-workflow:not(.hidden)");
  if (pendingWorkflow && visibleInlineWorkflow) {
    if (fillWorkflowFieldByVoice(command || localized)) return true;
    if (isNewServiceRequestOverWorkflow(command || localized)) {
      clearOpenWorkflowForNewVoiceRequest(command || localized);
    } else if (!isOpenDialogVoiceQuestion(command) && !isOpenKnowledgeQuestion(command)) {
      const coach = workflowRealUseCoach(pendingWorkflow);
      setVoiceResponse(`I still have ${pendingWorkflow.title || "this step"} open. Answer the visible question, say yes to confirm, no to cancel, or say new request to switch. ${coach.question || ""}`, true, { allowHandoff: false, source: "unified-brain" });
      return true;
    }
  }

  if (activeConversationIntake && handleConversationIntakeAnswer(command || localized || rawCommand)) return true;
  if (startConversationIntakeFromCommand(command || localized || rawCommand)) return true;

  if (context.source === "voice" && isLikelySideConversationWithoutNexusCommand(command || localized || rawCommand)) {
    pauseNexusForSideConversation(command || localized || rawCommand);
    return true;
  }

  if (isNexusHearingCheckCommand(command || localized)) {
    answerNexusHearingCheck();
    return true;
  }

  if (await handleNexusUnifiedBrainRuntimeCommand(command || localized || rawCommand, { ...context, source: context.source || "typed_chat" })) return true;
  if (await handleNexusAgricultureCollaborationRuntimeCommand(command || localized || rawCommand, { ...context, source: context.source || "typed_chat" })) return true;
  if (await handleNexusHealthcareCollaborationRuntimeCommand(command || localized || rawCommand, { ...context, source: context.source || "typed_chat" })) return true;

  const commonPhrase = nexusCommonPhraseResponse(command || localized);
  if (commonPhrase) {
    setVoiceResponse(commonPhrase, true, { allowHandoff: false, source: "unified-brain" });
    return true;
  }

  const conversationIntent = nexusConversationFirstIntent(spoken || command || rawCommand);
  if (conversationIntent) {
    return executeUnifiedNexusIntent(conversationIntent, spoken || command || rawCommand, context);
  }

  const simpleIntent = simpleUserDirectVoiceIntent(spoken || command);
  if (simpleIntent) {
    return executeUnifiedNexusIntent(simpleIntent, spoken || command, context);
  }

  const migrantIntent = migrantFriendlyVoiceIntent(command);
  if (migrantIntent) {
    return executeUnifiedNexusIntent(migrantIntent, command, context);
  }

  const utilityAnswer = nexusUtilityAssistantResponseV2(command);
  if (utilityAnswer) {
    updateNexusBehaviorLayer("answering", "Unified Nexus brain is answering a practical daily question.");
    renderLiveVoiceSuggestions(["open map", "open telehealth", "track my shipment", "what is next today"]);
    return executeUnifiedNexusIntent({ type: "utility", response: utilityAnswer }, command, context);
  }

  if (await runMusicAssistantCommand(command, { turnToken })) return true;
  if (await handleNexusIntelligenceRouter(command)) return true;
  if (handleAdvisorBrainCommand(command)) return true;
  if (await runDynamicVoiceTool(command)) return true;

  if (isOpenKnowledgeQuestion(command) || isOpenDialogVoiceQuestion(command) || hasBehaviorActionVerb(command) || isNaturalQuestionOrConversation(command)) {
    return executeUnifiedNexusIntent({
      type: "backend",
      reason: "Unified Nexus brain routed natural speech to the live AI conversation engine.",
      suggestions: ["ask a follow-up", "open the right area", "guide me step by step", "Nexus stop"]
    }, command, context);
  }

  const bridge = ruralCommunicationBridge(command);
  if (bridge.profile?.intent && bridge.profile.intent !== "general" && bridge.profile.confidence >= 0.45) {
    const routed = nexusConversationFirstIntent(bridge.profile.rewriteCommand || bridge.normalized || command);
    if (routed) return executeUnifiedNexusIntent(routed, bridge.profile.rewriteCommand || command, context);
  }

  return executeUnifiedNexusIntent({
    type: "clarify",
    response: "I may have heard only part of that. Tell me one thing: health, medicine, clinic, crops, work, learning, or map.",
    suggestions: ["health", "medicine", "clinic", "crops", "work", "learning", "map"],
    reason: "Unified Nexus brain asked one simple recovery question instead of guessing.",
    clarification: {
      original: command,
      options: [
        { label: "Health", section: "health", command: "I need a doctor", detail: "Health, clinic, medicine, intake, or provider help." },
        { label: "Crops", section: "trade", command: "my crop is bad", detail: "Crop problem, farmer support, buyer, sale, or route." },
        { label: "Work", section: "workforce", command: "I need work", detail: "Jobs, applications, skills, or interview support." },
        { label: "Learning", section: "learning", command: "start a course", detail: "Courses, lessons, captions, or certificates." },
        { label: "Map", section: "map", command: "open map", detail: "Map, route, clinic, pharmacy, shipment, or location." }
      ]
    }
  }, command, context);
}

function nexusCommonPhraseResponse(command = "") {
  const value = normalizeToolText(command);
  if (!value) return "";
  const name = userFirstName();
  if (/\b(conversation mode|conversation mode 2|conversation mode two|talk naturally|open conversation|natural conversation)\b/.test(value)) {
    renderLiveVoiceSuggestions(["health", "crops", "work", "learning", "map"]);
    return nexusConversationGovernorSummary();
  }
  const responses = [
    {
      match: /\b(good morning|goodmorning|good afternoon|goodafternoon|good evening|goodevening|hello nexus|hi nexus|hey nexus)\b/,
      response: `Hello ${name}. How can I assist you?`,
      suggestions: ["I need a doctor", "help me sell my crop", "start a course", "open map"]
    },
    {
      match: /\b(talk to me|can you help me|help me please|i need help|walk with me|guide me)\b/,
      response: "I'm here with you. Tell me the problem in your own words, and I will open the right place.",
      suggestions: ["health", "crops", "work", "learning", "map"]
    },
    {
      match: /\b(thank you|thanks|thanks nexus|appreciate it|good job|nice job|that helped|gracias|merci|asante|shukran)\b/,
      response: `You're welcome, ${name}. I'm here when you need me.`,
      suggestions: ["what should I do next", "open learning", "go quiet"]
    },
    {
      match: /\b(wait|hold on|one second|give me a minute|pause for a moment|not yet|stand by)\b/,
      response: "No rush. I'll wait. Say Nexus when you're ready.",
      pause: true,
      suggestions: ["Nexus listen", "Nexus stop", "Nexus open map"]
    },
    {
      match: /\b(say that again|repeat that|repeat|what did you say|i missed that|read that again)\b/,
      response: lastVoiceResponse && lastVoiceResponse !== "Ready for a command." ? lastVoiceResponse : "I'm ready. Tell me what you need, and I'll walk with you.",
      suggestions: ["slow down", "what now", "open help"]
    },
    {
      match: /\b(repeat slowly|i will repeat|let me repeat|i said it wrong|you heard me wrong|that is not what i said)\b/,
      response: "Go ahead. Say it slowly, and I'll repeat it before I act.",
      suggestions: ["open learning", "open telehealth", "Nexus stop"]
    },
    {
      match: /\b(slow down|speak slower|talk slower|too fast|slower please)\b/,
      response: "Okay. I'll slow down and keep it short.",
      slow: true,
      suggestions: ["repeat that", "what now", "open learning"]
    },
    {
      match: /\b(i do not understand|i don't understand|i dont understand|i am confused|i'm confused|im confused|i am lost|i'm lost|im lost|this is confusing|help me understand)\b/,
      response: "I hear you. We'll keep it simple. Say learn, work, health, crops, map, or help.",
      suggestions: ["learn", "work", "health", "crops", "map"]
    },
    {
      match: /\b(what now|what next|what should i do now|next step please|where do i start|help me start)\b/,
      response: nextStepAssistantAnswer(),
      suggestions: ["open learning", "open telehealth", "sell my crop"]
    },
    {
      match: /\b(i am testing|this is a test|testing nexus|test mode|demo test)\b/,
      response: "Test came through. Try something real next, like open learning or change language to English.",
      suggestions: ["open learning", "change language to English", "can you hear me"]
    },
    {
      match: /\b(hello again|hi again|you there|are you there|nexus are you there)\b/,
      response: `Yes, ${name}. I'm here. What do you want to do next?`,
      suggestions: ["open learning", "open health", "open map"]
    }
  ];
  const found = responses.find(item => item.match.test(value));
  if (!found) return "";
  if (found.slow) localStorage.setItem("agrinexusSlowSpeech", "on");
  if (found.pause) enterNexusConversationPause(found.response);
  renderLiveVoiceSuggestions(found.suggestions || ["what now", "open learning", "stop"]);
  return found.response;
}

function commandGoal(command) {
  return command
    .replace(/^(please\s+)?(create|build|make|generate)\s+(an?\s+)?(agent\s+)?plan( for| to)?/i, "")
    .replace(/^(please\s+)?plan( for| to)?/i, "")
    .trim();
}

const COMPANION_UNDERSTANDING_INTENTS = new Set([
  "conversation.greeting",
  "conversation.question",
  "conversation.need",
  "conversation.clarify",
  "conversation.support",
  "workflow.offer",
  "workflow.stage",
  "execution.confirmed",
  "execution.blocked",
  "safety.escalation",
  "language.change"
]);

const COMPANION_WORKFLOW_LIKE_CONVERSATION_INTENTS = new Set([
  "conversation.health_intake",
  "conversation.medicine_help",
  "conversation.doctor_help",
  "conversation.patient_help",
  "conversation.clinic_help",
  "conversation.clinic_map_help",
  "conversation.mobile_clinic_help",
  "conversation.telehealth_captions",
  "conversation.crop_help",
  "conversation.rural_crop_distress",
  "conversation.crop_sale_help",
  "conversation.workforce_help",
  "conversation.learning_start",
  "conversation.map_open"
]);

function companionUnderstandingClassification(command = "", options = {}) {
  const raw = String(command || "").replace(/\s+/g, " ").trim();
  const text = raw.replace(/^\s*(hey\s+)?(nexus|agrinexus|agri\s+nexus)\s*[,:\-]?\s*/i, "").trim();
  const lower = normalizeToolText(text);
  const tokens = lower.split(/\s+/).filter(Boolean);
  const has = pattern => pattern.test(lower);
  const explicitAction = has(/\b(open|start|run|create|build|make|send|submit|apply|schedule|connect|contact|call|message|advance|complete|issue|record|capture|test|deploy|change|switch|translate|track|prepare|show|book|pay|share|upload)\b/);
  const domainSignals = [];
  if (has(/\b(crop|crops|farm|field|maize|cassava|rice|beans|pest|harvest|soil|weather)\b/)) domainSignals.push("domain.agriculture");
  if (has(/\b(work|job|jobs|employment|role|apply|application|interview|skill|workforce)\b/)) domainSignals.push("domain.workforce");
  if (has(/\b(learn|learning|course|lesson|training|school|class|certificate)\b/)) domainSignals.push("domain.learning");
  if (has(/\b(health|doctor|clinic|hospital|medicine|medication|pharmacy|patient|sick|pain|care|provider|nurse|baby|child)\b/)) domainSignals.push("domain.health");
  if (has(/\b(trade|buyer|seller|market|price|order|sell|sale|payment|wallet|logistics|delivery|shipment)\b/)) domainSignals.push("domain.trade");
  if (has(/\b(map|route|location|near|nearest|nearby|track|tracking|where)\b/)) domainSignals.push("domain.maps");
  if (has(/\b(admin|readiness|provider|integration|operator|production|dashboard|user|audit)\b/)) domainSignals.push("domain.admin");
  const urgent = has(/\b(emergency|urgent|danger|unconscious|not waking|not breathing|can't breathe|cannot breathe|trouble breathing|heavy bleeding|seizure|seizures|blue lips|very high fever|poison|chest pain|suicide|harm myself|harm someone)\b/);
  const healthRisk = domainSignals.includes("domain.health") && has(/\b(baby|child|sick|fever|bleeding|breathing|pain|weak|medicine|drug|prescription|diagnose|prescribe)\b/);
  const languageChange = has(/\b(change|switch|set|use|speak|respond)\b.*\b(language|spanish|espanol|español|french|francais|français|swahili|kiswahili|arabic|portuguese|english)\b/)
    || has(/\b(language)\s*:\s*(en|es|fr|sw|ar|pt)\b/);
  const support = has(/\b(confused|lost|overwhelmed|scared|afraid|nervous|tired|i don't understand|i dont understand|cannot read|can't read|cant read|help me understand|too much|not working)\b/);
  const greeting = /^(hello|hi|hey|good morning|good afternoon|good evening|goodmorning|goodafternoon|goodevening)\b/.test(lower) && tokens.length <= 5;
  const question = /^(what|whats|what's|what is|how|how do|how can|why|when|where|who|which|can you|could you|would you|should i|tell me|explain|describe|define)\b/.test(lower);
  const confirmed = /^(yes|yeah|yep|confirm|confirmed|do it|run it|send it|submit it|call them|go ahead|okay do it|ok do it)\b/.test(lower);
  const blocked = has(/\b(diagnose me|prescribe|give me a prescription|delete my account|share my information without asking|send without asking|pay without asking)\b/);
  const need = has(/\b(i need|need|i want|want|looking for|trying to|help me|please help|my .* is|crops are failing|crop is failing|crops failing|crop failing|failing|sick|bad|problem)\b/);
  const workflowObject = domainSignals.length > 0 || has(/\b(map|dashboard|intake|application|order|message|call|certificate|lesson|course|route|shipment|provider|buyer|seller)\b/);
  const nounOnly = tokens.length <= 3 && domainSignals.length > 0 && !explicitAction && !question && !need;
  let intent = "conversation.clarify";
  let reason = "The request is short or ambiguous, so Nexus should understand before acting.";
  let nextStep = "Ask one clarifying question.";
  if (languageChange) {
    intent = "language.change";
    reason = "The user appears to be asking Nexus to change or preserve language.";
    nextStep = "Confirm or apply language preference according to existing language rules.";
  } else if (urgent || healthRisk && has(/\b(emergency|urgent|baby|child|breathing|bleeding|seizure|not waking|very high fever)\b/)) {
    intent = "safety.escalation";
    reason = "The request may involve urgent health or safety risk.";
    nextStep = "Give safety-first guidance and ask the most important next question.";
  } else if (blocked) {
    intent = "execution.blocked";
    reason = "The requested action is unsafe, unsupported, or requires qualified help/confirmation.";
    nextStep = "Explain the limit and offer a safe alternative.";
  } else if (confirmed) {
    intent = "execution.confirmed";
    reason = "The user appears to be confirming a previously staged action.";
    nextStep = "Execute only if an existing staged action is present and confirmation rules allow it.";
  } else if (greeting) {
    intent = "conversation.greeting";
    reason = "The user is greeting or waking Nexus.";
    nextStep = "Greet warmly and invite the user to speak naturally.";
  } else if (support) {
    intent = "conversation.support";
    reason = "The user may need reassurance, accessibility help, or slower guidance.";
    nextStep = "Respond supportively and ask one simple question.";
  } else if (question && !explicitAction) {
    intent = "conversation.question";
    reason = "The user is asking for an explanation or information.";
    nextStep = "Answer in plain language before offering a workflow.";
  } else if (explicitAction && workflowObject) {
    intent = "workflow.stage";
    reason = "The user used an explicit action verb with a platform/domain object.";
    nextStep = "Stage or open the existing workflow without changing current routing behavior.";
  } else if (explicitAction && !workflowObject) {
    intent = "workflow.offer";
    reason = "The user used action language, but the target is not specific enough.";
    nextStep = "Offer the likely workflow after clarifying the goal.";
  } else if (need) {
    intent = "conversation.need";
    reason = "The user expressed a need or problem rather than an explicit command.";
    nextStep = "Understand context before offering a workflow.";
  } else if (nounOnly) {
    intent = "conversation.clarify";
    reason = "The user gave a short domain phrase without enough context.";
    nextStep = "Ask what they mean or what outcome they want.";
  }
  if (!COMPANION_UNDERSTANDING_INTENTS.has(intent)) intent = "conversation.clarify";
  return {
    version: "companion-constitution-phase-1",
    intent,
    source: options.source || "web",
    rawInput: raw,
    normalizedInput: text,
    explicitAction,
    domainSignals,
    riskLevel: intent === "safety.escalation" ? "high" : intent === "execution.blocked" || domainSignals.includes("domain.health") ? "medium" : "low",
    routeImpact: "visibility-only",
    reason,
    nextStep
  };
}

function rememberCompanionUnderstanding(command = "", options = {}) {
  companionUnderstandingState = companionUnderstandingClassification(command, options);
  try {
    localStorage.setItem("agrinexusCompanionUnderstanding", JSON.stringify(companionUnderstandingState));
  } catch {
    // Visibility-only state should never affect routing.
  }
  return companionUnderstandingState;
}

function companionRouteOutcomeMetadata(command = "", route = {}) {
  const understanding = companionUnderstandingState || companionUnderstandingClassification(command, { source: "web" });
  const name = route.actualRouteName || route.intent || route.directAction || route.workflow || route.type || "unknown";
  const workflowOpened = Boolean(route.workflowOpened || route.type === "workflow" || route.type === "direct" || route.actualRouteType === "workflow");
  const executionAttempted = Boolean(route.executionAttempted || route.actualRouteType === "execution");
  const confirmationRequired = Boolean(route.confirmationRequired);
  let actualRouteType = route.actualRouteType || "command";
  if (!route.actualRouteType) {
    if (route.type === "clarify") actualRouteType = "clarification";
    else if (route.type === "answer") actualRouteType = "conversation";
    else if (route.type === "backend") actualRouteType = "backend_agent";
    else if (route.type === "workflow" || route.type === "direct") actualRouteType = "workflow";
  }
  const lower = normalizeToolText(command);
  const singleWordInput = lower.split(/\s+/).filter(Boolean).length <= 1;
  const conversationExpected = ["conversation.need", "conversation.clarify", "conversation.support", "conversation.question"].includes(understanding.intent);
  let routeMismatch = false;
  let mismatchReason = "";
  if (conversationExpected && workflowOpened && !understanding.explicitAction) {
    routeMismatch = true;
    mismatchReason = `${understanding.intent} became an immediate workflow-like route without an explicit action command.`;
  }
  if (!routeMismatch && singleWordInput && workflowOpened && !understanding.explicitAction) {
    routeMismatch = true;
    mismatchReason = "Single-word input became a workflow-like route without clarification.";
  }
  if (!routeMismatch && understanding.intent === "safety.escalation" && workflowOpened && actualRouteType !== "safety") {
    routeMismatch = true;
    mismatchReason = "High-risk health or safety phrase routed to workflow before safety-first handling.";
  }
  if (!routeMismatch && executionAttempted && !confirmationRequired && understanding.intent !== "execution.confirmed") {
    routeMismatch = true;
    mismatchReason = "Execution appears to have been attempted without confirmation metadata.";
  }
  const outcome = {
    companionIntent: understanding.intent,
    actualRouteType,
    actualRouteName: name,
    actualRouteSource: route.actualRouteSource || "web.handleVoiceCommandCore",
    workflowOpened,
    executionAttempted,
    confirmationRequired,
    routeMismatch,
    mismatchReason
  };
  try {
    localStorage.setItem("agrinexusCompanionRouteOutcome", JSON.stringify(outcome));
  } catch {
    // Visibility-only state should never affect routing.
  }
  return outcome;
}

const COMPANION_WORKFLOW_OFFER_INTENTS = new Set([
  "conversation.need",
  "conversation.clarify",
  "conversation.support",
  "conversation.question"
]);

function companionWorkflowOfferForCommand(command = "", route = {}) {
  const lower = normalizeToolText(command);
  const directAction = String(route.directAction || "");
  const workflow = String(route.workflow || "");
  if (/\b(medicine|medication|pharmacy|pills|drug|refill|dawa|medicina|remedio)\b/.test(lower) || directAction === "medicine-help") {
    return {
      response: /\bi need\b|\bneed\b/.test(lower)
        ? "I heard you need medicine. I can help you take the next safe step. Is the medicine for you, a child, or someone else? I can help prepare the concern for a clinic, pharmacy, or provider, but I can't prescribe medicine."
        : "I heard you need medicine. I can help with medicine-related guidance. Is this for you, a child, or someone else? If there is trouble breathing, severe bleeding, seizures, or the person is not waking up, seek emergency help now.",
      deferredWorkflowName: "health.medicine-support",
      nextExpectedAction: "answer who the medicine is for or say start health intake",
      confirmationPhrase: "Say start health intake or find pharmacy when you want me to open that workflow.",
      suggestions: ["for me", "for a child", "find pharmacy"]
    };
  }
  if (/\b(crop|crops|maize|cassava|rice|beans|field|farm|shamba)\b/.test(lower) && /\b(fail|failing|bad|dying|yellow|pest|spots|wilting|dry)\b/.test(lower) || directAction === "crop-help") {
    return {
      response: "I'm sorry you're dealing with that crop problem. What crop are you growing, and what symptoms are you seeing: yellow leaves, pests, dry soil, spots, or wilting?",
      deferredWorkflowName: "trade.crop-support",
      nextExpectedAction: "answer with the crop and symptoms or say start crop support",
      confirmationPhrase: "Say start crop support when you want me to open the crop workflow.",
      suggestions: ["maize yellow leaves", "pests", "dry soil"]
    };
  }
  if (/\b(help me sell|sell my crop|sell crop|sell maize|find buyer|market maize|kuuza mazao)\b/.test(lower) || directAction === "crop-sale-guided") {
    return {
      response: "I can help sell the crop. How much maize do you have, and where is it located? After that, I can help with buyer contact, price, route, and delivery steps.",
      deferredWorkflowName: "trade.crop-sale",
      nextExpectedAction: "answer with quantity and location or say open buyer support",
      confirmationPhrase: "Say open buyer support when you want me to open the sale workflow.",
      suggestions: ["10 bags in Kisumu", "find buyer", "open buyer support"]
    };
  }
  if (/\b(work|job|jobs|employment|role|kazi|trabajo|travail)\b/.test(lower) || directAction === "workforce-guided" || workflow === "workforce") {
    return {
      response: "I can help with work opportunities. What type of work are you looking for: farm work, health support, logistics, office work, or training first?",
      deferredWorkflowName: "workforce.guided-search",
      nextExpectedAction: "answer with the kind of work or say show workforce dashboard",
      confirmationPhrase: "Say show workforce dashboard when you want me to open the workforce workflow.",
      suggestions: ["farm work", "health support", "training first"]
    };
  }
  return {
    response: "I can help with that. Tell me a little more about what you need, and then I can open the right workflow if you want.",
    deferredWorkflowName: workflow ? `${workflow}.guided-workflow` : "companion.guided-workflow",
    nextExpectedAction: "answer the clarifying question or confirm the workflow",
    confirmationPhrase: "Say open it when you want me to open the workflow.",
    suggestions: ["explain more", "open it", "not now"]
  };
}

function companionRequiredWorkflowOfferPhrase(command = "") {
  const lower = normalizeToolText(command);
  return /^(work|job|jobs|medicine|medication|pharmacy)$/.test(lower)
    || /\b(i need|need|want)\b.*\b(medicine|medication|pharmacy|pills|drug|dawa)\b/.test(lower)
    || /\b(crop|crops|maize|field|farm|shamba)\b.*\b(fail|failing)\b/.test(lower)
    || /\b(help me sell|sell my crop|sell crop|sell maize|find buyer|market maize)\b/.test(lower);
}

function runCompanionWorkflowOfferIfNeeded(command = "", route = {}) {
  const understanding = companionUnderstandingState || companionUnderstandingClassification(command, { source: "voice" });
  if (!COMPANION_WORKFLOW_OFFER_INTENTS.has(understanding.intent) || understanding.explicitAction) return false;
  if (understanding.intent === "safety.escalation" || understanding.intent === "language.change") return false;
  if (!companionRequiredWorkflowOfferPhrase(command)) return false;
  const routeType = route.actualRouteType || (route.type === "backend" ? "backend_agent" : route.type === "workflow" || route.type === "direct" ? "workflow" : route.type || "command");
  const workflowLike = routeType === "workflow" || routeType === "command" || routeType === "dynamic_tool" || routeType === "backend_agent" || route.workflowOpened || route.type === "direct" || route.type === "workflow";
  if (!workflowLike) return false;
  const offer = companionWorkflowOfferForCommand(command, route);
  const deferredOutcome = companionRouteOutcomeMetadata(command, {
    ...route,
    actualRouteType: routeType,
    actualRouteSource: route.actualRouteSource || "web.phase3.preflight",
    workflowOpened: true
  });
  const outcome = {
    companionIntent: understanding.intent,
    actualRouteType: "conversation",
    actualRouteName: "workflow.offer",
    actualRouteSource: "web.phase3.workflowOffer",
    workflowOpened: false,
    executionAttempted: false,
    confirmationRequired: false,
    routeMismatch: false,
    mismatchReason: ""
  };
  const offerMetadata = {
    workflowOffered: true,
    workflowDeferred: true,
    deferredWorkflowName: offer.deferredWorkflowName,
    deferredRouteOutcome: deferredOutcome,
    nextExpectedAction: offer.nextExpectedAction,
    confirmationPhrase: offer.confirmationPhrase,
    constitutionPhase: "phase-3-workflow-offer"
  };
  try {
    localStorage.setItem("agrinexusCompanionRouteOutcome", JSON.stringify(outcome));
    localStorage.setItem("agrinexusCompanionWorkflowOffer", JSON.stringify(offerMetadata));
  } catch {
    // Diagnostic metadata should never affect the voice response.
  }
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  renderLiveVoiceSuggestions(offer.suggestions || []);
  updateNexusBehaviorLayer("listening", "Nexus answered first and offered the workflow as a next step.");
  setVoiceResponse(offer.response, true, { command });
  return true;
}

async function handleNexusMultilingualOpenDialogueRuntimeCommand(command = "", options = {}) {
  const runtime = window.NexusOpenDialogueRuntime;
  const text = String(command || "").trim();
  if (!runtime || !text) return false;
  const navigationRuntime = window.NexusUniversalNavigationRuntime;
  const language = languageCode();
  const shouldHandle = typeof runtime.shouldHandleBeforeLegacy === "function"
    ? runtime.shouldHandleBeforeLegacy(text, { language, navigationRuntime, inputType: options.source || "voice" })
    : false;
  if (!shouldHandle) return false;
  const result = typeof runtime.respondAsync === "function"
    ? await runtime.respondAsync(text, { language, navigationRuntime, inputType: options.source || "voice", skipLiveKnowledge: false })
    : runtime.respond(text, { language, navigationRuntime, inputType: options.source || "voice" });
  if (!result?.answer && !result?.spokenSummary) return false;
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  openAskNexus();
  enableHeyAgriNexusMode();
  if (window.NexusConversationalVoiceRuntime?.renderDialogueResult) {
    window.NexusConversationalVoiceRuntime.renderDialogueResult(result);
  }
  renderLiveVoiceSuggestions([
    result.recommendedNextStep,
    ...(Array.isArray(result.availableActions) ? result.availableActions : [])
  ].filter(Boolean).slice(0, 5));
  updateNexusBehaviorLayer(
    result.intentType === "direct_navigation_command" ? "routing" : "reasoning",
    "Nexus answered through the multilingual open dialogue runtime."
  );
  setVoiceResponse(result.answer || result.spokenSummary, true, {
    allowHandoff: false,
    command: text,
    source: "multilingual-open-dialogue-runtime",
    openDialogueResult: result
  });
  return true;
}

async function handleNexusFullCommunicationRuntimeCommand(command = "", options = {}) {
  const runtime = window.NexusFullCommunicationRuntime;
  const text = String(command || "").trim();
  if (!runtime || !text) return false;
  const shouldHandle = typeof runtime.shouldHandleBeforeLegacy === "function"
    ? runtime.shouldHandleBeforeLegacy(text, { language: languageCode(), inputType: options.source || "typed_chat" })
    : false;
  if (!shouldHandle) return false;
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  openAskNexus();
  enableHeyAgriNexusMode();
  runtime.mount?.();
  const result = await runtime.process(text, {
    language: languageCode(),
    inputType: options.source === "voice" ? "voice_transcript" : "typed_chat",
    sourceMode: options.source || "ask_nexus"
  });
  renderLiveVoiceSuggestions([
    "prepare an SMS to the clinic",
    "prepare an email to the employer",
    "prepare a WhatsApp message to the seller",
    "what communications are connected"
  ]);
  updateNexusBehaviorLayer("communicating", "Nexus prepared a local-safe communication response with provider and confirmation gates.");
  setVoiceResponse(authoritativeNexusFinalAnswer(
    result,
    result.draft || {},
    "Nexus prepared a communication draft for review. No external message or call was sent."
  ), true, {
    allowHandoff: false,
    command: text,
    source: "nexus-full-communication-runtime",
    communicationResult: result
  });
  return true;
}

async function handleNexusMessagePreparationRuntimeCommand(command = "", options = {}) {
  const runtime = window.NexusMessagePreparationRuntime;
  const text = String(command || "").trim();
  if (!runtime || !text) return false;
  const shouldHandle = typeof runtime.shouldHandleBeforeLegacy === "function"
    ? runtime.shouldHandleBeforeLegacy(text, { language: languageCode(), inputType: options.source || "typed_chat" })
    : false;
  if (!shouldHandle) return false;
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  openAskNexus();
  enableHeyAgriNexusMode();
  runtime.mount?.();
  const result = await runtime.process(text, {
    language: languageCode(),
    inputType: options.source === "voice" ? "voice_transcript" : "typed_chat",
    sourceMode: options.source || "ask_nexus"
  });
  renderLiveVoiceSuggestions([
    "prepare an email to the clinic",
    "text the mobile clinic",
    "WhatsApp the seller",
    "notify logistics"
  ]);
  updateNexusBehaviorLayer("message-prep", "Nexus prepared a local-safe message draft with provider and confirmation gates.");
  setVoiceResponse(authoritativeNexusFinalAnswer(
    result || {},
    result?.preparedMessage || {},
    result?.draft || {},
    "Nexus prepared a message draft for review. No external message was sent."
  ), true, {
    allowHandoff: false,
    command: text,
    source: "nexus-message-preparation-runtime",
    messagePreparationResult: result
  });
  return true;
}

function renderNexusAgenticCommandResult(result = {}) {
  const message = authoritativeNexusFinalAnswer(
    result,
    result.unifiedBrainResult || {},
    "Nexus prepared a local review result. No external action was executed."
  );
  nexusAgenticBrainLastResult = {
    ok: result.ok !== false,
    status: result.status || "prepared_local",
    mode: result.mode || result.source || "nexus_agentic_command_result",
    message,
    preparedCards: Array.isArray(result.preparedCards) ? result.preparedCards : [{
      type: result.source || "nexus_agentic_command_result",
      title: result.command || "Nexus local result",
      status: "prepared_local",
      localOnly: true,
      confirmationRequired: false,
      receiptId: result.result?.pilotReceipt?.receiptId || result.unifiedBrainResult?.receipt?.missionReceiptId || ""
    }],
    command: result.command || "",
    result,
    noExecutionAuthorized: true,
    localOnly: true,
    source: result.source || "nexus_agentic_command_result"
  };
  setVoiceResponse(message, true, {
    allowHandoff: false,
    command: result.command || "",
    source: result.source || "nexus_agentic_command_result"
  });
  renderUserWorkspace?.();
  return nexusAgenticBrainLastResult;
}

async function handleNexusUnifiedBrainRuntimeCommand(command = "", options = {}) {
  const runtime = window.NexusUnifiedBrainRuntime;
  const text = String(command || "").trim();
  if (!text) return false;
  if (handleNexusPresenceWakePhrase(text, options)) return true;
  if (handleNexusExperienceStarterCommand(text, options)) return true;
  if (handleNexusExperienceStatusCommand(text, options)) return true;
  if (handleNexusPresenceFollowUp(text, options)) return true;
  if (handleNexusMentalHealthBehavioralWellnessCommand(text, {
    ...options,
    source: options.source || "unified-brain-mental-health-priority"
  })) return true;
  const intentRoute = resolveNexusIntentDrivenWorkflowRoute(text, options);
  if (intentRoute && (intentRoute.recommendedWorkflow || intentRoute.confidence >= 0.4)) {
    return routeNexusIntentDrivenWorkflowCommand(text, {
      ...options,
      source: options.source || "unified-brain-intent-router"
    });
  }
  const routedText = normalizeNexusPresenceRoutableCommand(text);
  const experienceMode = nexusExperienceModeFromCommand(routedText);
  const progressSteps = getNexusExperienceProgressSteps(experienceMode);
  setNexusPresenceState(NEXUS_PRESENCE_STATES.THINKING, {
    lastUserInput: text,
    lastResponse: getNexusExperienceAcknowledgment(experienceMode, text),
    nextQuestion: `${progressSteps[0]}. ${progressSteps[1]}. ${progressSteps[2]}.`,
    activeMission: nexusActiveWorkflowState?.agenticMission?.title || nexusAgenticCommandMissions[0]?.title || ""
  });
  if (!runtime) return false;
  const shouldHandle = typeof runtime.shouldHandleBeforeLegacy === "function"
    ? runtime.shouldHandleBeforeLegacy(routedText, options)
    : false;
  if (!shouldHandle && !options.force) return false;
  const result = await runtime.process(routedText, {
    language: languageCode(),
    inputType: options.source || "typed_chat",
    sourceMode: "standard_user_workspace"
  });
  runtime.mount?.();
  runtime.render?.(result);
  renderNexusAgenticCommandResult({
    ok: true,
    command: text,
    source: "nexus-unified-brain-runtime",
    unifiedBrainResult: result,
    message: result?.userVisibleStatus || result?.conversationalResponse || result?.understoodGoal || "Nexus prepared a unified mission plan."
  });
  return true;
}

async function handleNexusHealthcareCollaborationRuntimeCommand(command = "", options = {}) {
  const runtime = window.NexusHealthcareCollaborationRuntime;
  const text = String(command || "").trim();
  if (!runtime || !text) return false;
  const shouldHandle = typeof runtime.shouldHandleBeforeLegacy === "function"
    ? runtime.shouldHandleBeforeLegacy(text, { language: languageCode(), inputType: options.source || "typed_chat" })
    : false;
  if (!shouldHandle) return false;
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  openAskNexus();
  enableHeyAgriNexusMode();
  const panel = runtime.mount?.();
  const result = await runtime.process(text, {
    language: languageCode(),
    inputType: options.source === "voice" ? "voice_transcript" : "typed_chat",
    sourceMode: options.source || "ask_nexus"
  });
  runtime.render?.(result, panel);
  renderLiveVoiceSuggestions([
    "prepare a referral packet",
    "pull FHIR chart summary",
    "prepare a blood pressure escalation",
    "prepare a pharmacy handoff"
  ]);
  updateNexusBehaviorLayer("healthcare-collaboration", "Nexus prepared healthcare collaboration locally with provider, consent, clinician review, and audit gates.");
  setVoiceResponse(authoritativeNexusFinalAnswer(
    result,
    result.packet || {},
    "Nexus prepared a healthcare collaboration packet for review. No external healthcare action was executed."
  ), true, {
    allowHandoff: false,
    command: text,
    source: "nexus-healthcare-collaboration-runtime",
    healthcareCollaborationResult: result
  });
  return true;
}

async function handleNexusAgricultureCollaborationRuntimeCommand(command = "", options = {}) {
  const runtime = window.NexusAgricultureCollaborationRuntime;
  const text = String(command || "").trim();
  if (!runtime || !text) return false;
  const shouldHandle = typeof runtime.shouldHandleBeforeLegacy === "function"
    ? runtime.shouldHandleBeforeLegacy(text, { language: languageCode(), inputType: options.source || "typed_chat" })
    : false;
  if (!shouldHandle) return false;
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  openAskNexus();
  enableHeyAgriNexusMode();
  const panel = runtime.mount?.();
  const result = await runtime.process(text, {
    language: languageCode(),
    inputType: options.source === "voice" ? "voice_transcript" : "typed_chat",
    sourceMode: options.source || "ask_nexus"
  });
  runtime.render?.(result, panel);
  renderLiveVoiceSuggestions([
    "help me with a crop issue",
    "prepare an irrigation plan",
    "create a marketplace listing",
    "prepare a drone field observation"
  ]);
  updateNexusBehaviorLayer("agriculture-collaboration", "Nexus prepared agriculture collaboration locally with source, expert review, marketplace, logistics, drone, and receipt gates.");
  setVoiceResponse(authoritativeNexusFinalAnswer(
    result,
    result.packet || {},
    "Nexus prepared an agriculture collaboration packet for review. No external agriculture action was executed."
  ), true, {
    allowHandoff: false,
    command: text,
    source: "nexus-agriculture-collaboration-runtime",
    agricultureCollaborationResult: result
  });
  return true;
}

function handleNexusConversationRuntimeDelegatedClick(event) {
  const button = event?.target?.closest?.("[data-nexus-conversation-action]");
  if (!button) return false;
  const labelButton = event?.target?.closest?.("[data-nexus-conversation-label]");
  if (labelButton && window.NexusConversationalVoiceRuntime?.mount) {
    window.NexusConversationalVoiceRuntime.mount();
  }
  return true;
}

document.addEventListener("click", handleNexusConversationRuntimeDelegatedClick, true);

async function handleNexusTelephonyCallRuntimeCommand(text = "", options = {}) {
  const runtime = window.NexusTelephonyCallRuntime;
  if (!runtime?.shouldHandleCallCommand || !runtime.shouldHandleCallCommand(text)) return false;
  pendingAgentClarification = null;
  pendingNexusSpokenCommand = null;
  openAskNexus();
  enableHeyAgriNexusMode();
  const mountEl = await runtime.mount?.();
  let providerStatus = null;
  try {
    const response = await fetch("/api/telephony/status");
    providerStatus = await response.json();
  } catch (error) {
    providerStatus = null;
  }
  const result = runtime.prepareCall(text, {
    providerStatus,
    language: languageCode(),
    sourceMode: options.source || "voice"
  });
  runtime.renderPreparedCall?.(result, mountEl);
  if (providerStatus) runtime.renderStatus?.(providerStatus, mountEl);
  renderLiveVoiceSuggestions([
    "prepare a pharmacy call",
    "prepare a clinic follow-up call",
    "prepare a buyer call",
    "what calls are configured"
  ]);
  updateNexusBehaviorLayer("call-prep", "Nexus prepared a local-safe call script and did not place a call.");
  setVoiceResponse(authoritativeNexusFinalAnswer(
    result,
    result.call || {},
    "I prepared a call script for review. Real outbound calling requires telephony provider credentials."
  ), true, {
    allowHandoff: false,
    command: text,
    source: "nexus-telephony-call-runtime",
    telephonyCall: result.call
  });
  return true;
}

function handleNexusTelephonyRuntimeDelegatedClick(event) {
  const button = event?.target?.closest?.("[data-nexus-telephony-action]");
  if (!button) return false;
  if (window.NexusTelephonyCallRuntime?.mount) {
    window.NexusTelephonyCallRuntime.mount();
  }
  return true;
}

document.addEventListener("click", handleNexusTelephonyRuntimeDelegatedClick, true);

function handleNexusFullCommunicationRuntimeDelegatedClick(event) {
  const button = event?.target?.closest?.("[data-nexus-full-communication-action]");
  if (!button) return false;
  if (window.NexusFullCommunicationRuntime?.mount) {
    window.NexusFullCommunicationRuntime.mount();
  }
  return true;
}

document.addEventListener("click", handleNexusFullCommunicationRuntimeDelegatedClick, true);

function handleNexusMessagePreparationRuntimeDelegatedClick(event) {
  const button = event?.target?.closest?.("[data-nexus-message-prep-action]");
  if (!button) return false;
  const runtime = window.NexusMessagePreparationRuntime;
  if (!runtime) return false;
  const action = button.getAttribute("data-nexus-message-prep-action");
  runtime.mount?.();
  if (action === "status") {
    runtime.refreshStatus?.();
    return true;
  }
  if (action === "copy") {
    const draft = document.querySelector("[data-nexus-message-prep-draft]")?.textContent || "";
    if (navigator.clipboard && draft) {
      navigator.clipboard.writeText(draft).catch(() => {});
    }
    button.textContent = draft ? "Draft copied" : "No draft yet";
    setTimeout(() => {
      button.textContent = "Copy draft";
    }, 1500);
    return true;
  }
  if (action === "queue") {
    const result = runtime.getLastResult?.();
    setVoiceResponse(authoritativeNexusFinalAnswer(
      result || {},
      result?.preparedMessage || {},
      result?.draft || {},
      "Nexus can queue the message draft for review. No external message was sent."
    ), true, {
      allowHandoff: false,
      source: "nexus-message-preparation-runtime"
    });
    return true;
  }
  if (action === "cancel") {
    setVoiceResponse("Message preparation canceled. No external message was sent.", true, {
      allowHandoff: false,
      source: "nexus-message-preparation-runtime"
    });
    return true;
  }
  return true;
}

document.addEventListener("click", handleNexusMessagePreparationRuntimeDelegatedClick, true);

function handleNexusHealthcareCollaborationRuntimeDelegatedClick(event) {
  const button = event?.target?.closest?.("[data-nexus-healthcare-action]");
  if (!button) return false;
  const runtime = window.NexusHealthcareCollaborationRuntime;
  if (!runtime) return false;
  const action = button.getAttribute("data-nexus-healthcare-action") || "status";
  const actionType = button.getAttribute("data-nexus-healthcare-action-type") || "";
  runtime.mount?.();
  if (action === "status" || action === "source-matrix" || action === "provider-evidence") {
    void runtime.refreshStatus?.();
    setVoiceResponse("Healthcare collaboration status is open. Missing provider configuration is shown by variable name only, and no regulated action was executed.", true, {
      allowHandoff: false,
      source: "nexus-healthcare-collaboration-runtime"
    });
    return true;
  }
  if (action === "clinician-queue") {
    setVoiceResponse("Clinician review queue is open. Regulated packets wait here before any external healthcare action can move forward.", true, {
      allowHandoff: false,
      source: "nexus-healthcare-collaboration-runtime"
    });
    return true;
  }
  if (action === "receipts") {
    setVoiceResponse("Healthcare receipts are visible. They record local preparation and blocked execution decisions without exposing secrets.", true, {
      allowHandoff: false,
      source: "nexus-healthcare-collaboration-runtime"
    });
    return true;
  }
  const result = runtime.handlePanelAction?.(action, actionType);
  runtime.render?.(result);
  setVoiceResponse(authoritativeNexusFinalAnswer(
    result || {},
    result?.packet || {},
    "Nexus prepared a healthcare collaboration packet for review. No external action was executed."
  ), true, {
    allowHandoff: false,
    source: "nexus-healthcare-collaboration-runtime",
    healthcareCollaborationResult: result
  });
  return true;
}

document.addEventListener("click", handleNexusHealthcareCollaborationRuntimeDelegatedClick, true);

function handleNexusUnifiedBrainRuntimeDelegatedClick(event) {
  const button = event?.target?.closest?.("[data-nexus-brain-action],[data-nexus-brain-next-action]");
  if (!button) return false;
  const runtime = window.NexusUnifiedBrainRuntime;
  if (!runtime) return false;
  const action = button.getAttribute("data-nexus-brain-action") || button.getAttribute("data-nexus-brain-next-action") || "review-plan";
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation?.();
  void Promise.resolve(runtime.handlePanelAction?.(action)).then(result => {
    runtime.mount?.();
    runtime.render?.(result);
    renderNexusAgenticCommandResult({
      ok: true,
      command: action,
      source: "nexus-unified-brain-runtime",
      unifiedBrainResult: result
    });
  });
  return true;
}

document.addEventListener("click", handleNexusUnifiedBrainRuntimeDelegatedClick, true);

function handleNexusPilotReadinessDelegatedClick(event) {
  const button = event?.target?.closest?.("[data-nexus-pilot-action]");
  if (!button) return false;
  const runtime = window.NexusUnifiedBrainRuntime;
  if (!runtime) return false;
  const action = button.getAttribute("data-nexus-pilot-action") || "refresh";
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation?.();
  void Promise.resolve(runtime.handlePilotAction?.(action, {
    scenarioId: button.getAttribute("data-pilot-scenario") || ""
  })).then(result => {
    runtime.mount?.();
    renderNexusAgenticCommandResult({
      ok: true,
      command: action === "run-all-scenarios" ? "Run Standard User pilot scenarios" : `Run pilot scenario: ${button.getAttribute("data-pilot-scenario") || "readiness"}`,
      response: result?.scenario
        ? `${result.scenario.label} pilot scenario prepared locally. No external action was executed.`
        : "Pilot readiness refreshed. No external action was executed.",
      result
    });
  });
  return true;
}

document.addEventListener("click", handleNexusPilotReadinessDelegatedClick, true);

function handleNexusAgricultureCollaborationRuntimeDelegatedClick(event) {
  const button = event?.target?.closest?.("[data-nexus-agriculture-action]");
  if (!button) return false;
  const runtime = window.NexusAgricultureCollaborationRuntime;
  if (!runtime) return false;
  const action = button.getAttribute("data-nexus-agriculture-action") || "status";
  const actionType = button.getAttribute("data-nexus-agriculture-action-type") || "";
  runtime.mount?.();
  if (action === "status" || action === "source-matrix" || action === "provider-evidence") {
    void runtime.refreshStatus?.();
    setVoiceResponse("Agriculture source readiness is open. Missing provider configuration is shown by variable name only, and no agriculture execution occurred.", true, {
      allowHandoff: false,
      source: "nexus-agriculture-collaboration-runtime"
    });
    return true;
  }
  if (action === "review-queue") {
    setVoiceResponse("Agriculture expert and admin review queue is open. Regulated, marketplace, logistics, drone, and finance packets wait here before any external action.", true, {
      allowHandoff: false,
      source: "nexus-agriculture-collaboration-runtime"
    });
    return true;
  }
  if (action === "receipts") {
    setVoiceResponse("Agriculture receipts are visible. They record prepared packets, source modes, and blocked execution decisions without exposing secrets.", true, {
      allowHandoff: false,
      source: "nexus-agriculture-collaboration-runtime"
    });
    return true;
  }
  const result = runtime.handlePanelAction?.(action, actionType);
  runtime.render?.(result);
  setVoiceResponse(authoritativeNexusFinalAnswer(
    result || {},
    result?.packet || {},
    "Nexus prepared an agriculture collaboration packet for review. No external action was executed."
  ), true, {
    allowHandoff: false,
    source: "nexus-agriculture-collaboration-runtime",
    agricultureCollaborationResult: result
  });
  return true;
}

document.addEventListener("click", handleNexusAgricultureCollaborationRuntimeDelegatedClick, true);

async function handleVoiceCommandCore(rawCommand, options = {}) {
  if (!data) return setVoiceResponse("Sign in first, then I can operate the platform.");
  clearLevelOneAgentActionSuggestionLabel();
  const companionUnderstanding = rememberCompanionUnderstanding(rawCommand, { source: options.source || "voice", mode: conversationPlatformMode() });
  const turnToken = options.turnToken || null;
  const autoLanguage = await applyAutoLanguageFromSpeech(rawCommand, options);
  if (ignoreStaleNexusTurn(turnToken, "voice command")) return;
  const localizedCommand = normalizeLocalizedVoiceCommand(rawCommand);
  const greetingOnly = isNexusGreetingOnly(localizedCommand);
  const greetingPrefix = isNexusGreetingPrefix(localizedCommand);
  const wakeOnly = isWakePhraseOnly(localizedCommand);
  let command = cleanWakeCommand(localizedCommand);
  command = normalizeNexusVoiceWorkflowCommand(command || localizedCommand);
  const spokenCommand = command || cleanWakeCommand(localizedCommand);
  const trustChainInput = spokenCommand || command || localizedCommand || rawCommand;
  if (handleNexusVoiceTroubleshootingCommand(trustChainInput, {
    ...options,
    source: options.source || "voice-command"
  })) return;
  if (handleNexusDailyCompanionCommand(trustChainInput, {
    ...options,
    speak: true,
    source: options.source || "nexus-daily-companion",
    turnToken
  })) return;
  if (runNexusNormalConversationPreflight(trustChainInput, {
    ...options,
    source: options.source || "genesis-conversation-preflight"
  })) return;
  if (isNexusConversationOnlyTrustChainInput(trustChainInput)) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    openAskNexus();
    enableHeyAgriNexusMode();
    setVoiceResponse(nexusConversationOnlyTrustChainResponse(trustChainInput), true, {
      allowHandoff: false,
      command: trustChainInput,
      source: "genesis-trust-chain-conversation-first",
      turnToken
    });
    return;
  }
  const a100SafeIntent = a100SafeAutonomyIntent(spokenCommand || command || localizedCommand || rawCommand);
  if (openA100SafeAutonomyPreview(a100SafeIntent)) return;
  if (openExplicitHealthVideoPreviewCommand(spokenCommand || command || localizedCommand || rawCommand)) return;
  const earlyPhase17SafeAnswer = nexusPhase17StandardUserSafeAnswer(spokenCommand || command || localizedCommand || rawCommand);
  if (earlyPhase17SafeAnswer) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    openAskNexus();
    enableHeyAgriNexusMode();
    renderLiveVoiceSuggestions(earlyPhase17SafeAnswer.suggestions || ["what providers can you connect to", "what data sources do you need", "what needs approval"]);
    updateNexusBehaviorLayer("answering", "Nexus answered a Phase 17 prototype-foundation prompt without executing an action.");
    setVoiceResponse(earlyPhase17SafeAnswer.response, true, { allowHandoff: false, command: spokenCommand || command || rawCommand, source: "phase-17-standard-user-safe-answer" });
    if (earlyPhase17SafeAnswer.localMusic) {
      void playNexusMusicTestAudio("Kenya-inspired demo rhythm");
    }
    return;
  }
  if (await runExplicitTypedGlobalControlPreflight(spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken })) return;
  if (handleNexusVoicePreferenceCommand(spokenCommand || command || localizedCommand || rawCommand, { source: options.source || "voice-preference-command" })) return;
  if (await handleNexusUnifiedBrainRuntimeCommand(spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken, source: options.source || "voice" })) return;
  if (await handleNexusAgricultureCollaborationRuntimeCommand(spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken, source: options.source || "voice" })) return;
  if (await handleNexusHealthcareCollaborationRuntimeCommand(spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken, source: options.source || "voice" })) return;
  if (await handleNexusMessagePreparationRuntimeCommand(spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken, source: options.source || "voice" })) return;
  if (await handleNexusFullCommunicationRuntimeCommand(spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken, source: options.source || "voice" })) return;
  if (await handleNexusTelephonyCallRuntimeCommand(spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken, source: options.source || "voice" })) return;
  if (await handleNexusMultilingualOpenDialogueRuntimeCommand(spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken, source: options.source || "voice" })) return;
  if (handleNexusOpenDialogueAgentCommand(spokenCommand || command || localizedCommand || rawCommand)) return;
  if (handleJarvisStyleStandardUserSafetyResponse(spokenCommand || command || localizedCommand || rawCommand)) return;
  const safeMapIntent = safeMapCapabilityIntent(spokenCommand || command || localizedCommand || rawCommand);
  if (openSafeMapCapabilityPreview(safeMapIntent)) return;
  if (await runStandardUserAssistantRuntimePreview(spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken })) return;
  const phase17SafeAnswer = nexusPhase17StandardUserSafeAnswer(spokenCommand || command || localizedCommand || rawCommand);
  if (phase17SafeAnswer) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    openAskNexus();
    enableHeyAgriNexusMode();
    renderLiveVoiceSuggestions(phase17SafeAnswer.suggestions || ["what providers can you connect to", "what data sources do you need", "what needs approval"]);
    updateNexusBehaviorLayer("answering", "Nexus answered a Phase 17 prototype-foundation prompt without executing an action.");
    setVoiceResponse(phase17SafeAnswer.response, true, { allowHandoff: false, command: spokenCommand || command || rawCommand, source: "phase-17-standard-user-safe-answer" });
    if (phase17SafeAnswer.localMusic) {
      void playNexusMusicTestAudio("Kenya-inspired demo rhythm");
    }
    return;
  }
  if (autoLanguage) {
    agentPerformanceState.lastCommand = command || localizedCommand || rawCommand;
    recordNexusAutonomousLearning({ type: "auto-language-detected", command: rawCommand, language: autoLanguage.label, mode: experienceMode || data?.user?.role || "platform" });
  }
  const standardUserVoiceCommand = spokenCommand || command || localizedCommand || rawCommand;
  if (experienceMode === "user" || document.body.classList.contains("user-mode")) {
    if (launchCapabilityFromVoice(standardUserVoiceCommand) || runNexusStandardUserHomeLocalCommand(standardUserVoiceCommand)) {
      updateNexusBehaviorLayer("ready", "Nexus opened the requested workflow in the main workspace.");
      setVoiceResponse("I opened that workflow in the main workspace. External actions remain gated until configured and confirmed.", true, { allowHandoff: false, command: standardUserVoiceCommand, source: "voice-workflow-launch" });
      return;
    }
  }
  const fastLaneIntent = nexusFastLaneIntent(spokenCommand || command || localizedCommand || rawCommand);
  if (fastLaneIntent) {
    if (runCompanionWorkflowOfferIfNeeded(spokenCommand || command || localizedCommand || rawCommand, {
      ...fastLaneIntent,
      actualRouteSource: "web.nexusFastLaneIntent"
    })) return;
    resetConversationStateForPriorityIntent(spokenCommand || command || rawCommand);
    if (await executeUnifiedNexusIntent(fastLaneIntent, spokenCommand || command || localizedCommand || rawCommand, { ...options, turnToken, autoLanguage })) return;
  }
  if (isPlatformExplainVoiceCommand(spokenCommand || command || localizedCommand || rawCommand)) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    openAskNexus();
    enableHeyAgriNexusMode();
    renderLiveVoiceSuggestions(["help a farmer", "I need a doctor", "help me sell my crop", "start a course", "open map"]);
    updateNexusBehaviorLayer("answering", "Nexus explained AgriNexus directly without opening a menu.");
    setVoiceResponse(nexusPlatformExplainAnswer(), true, { allowHandoff: false, command: spokenCommand || command || rawCommand });
    return;
  }
  const firstPriorityFallbackIntent = simpleUserDirectVoiceIntent(spokenCommand || command);
  if (isPriorityServiceVoiceIntent(firstPriorityFallbackIntent)) {
    if (runCompanionWorkflowOfferIfNeeded(spokenCommand || command, {
      ...firstPriorityFallbackIntent,
      actualRouteSource: "web.simpleUserDirectVoiceIntent.preflight"
    })) return;
    resetConversationStateForPriorityIntent(spokenCommand || command);
    if (runSimpleUserVoiceIntent(firstPriorityFallbackIntent, spokenCommand || command)) return;
  }
  if (await answerPendingNexusQuestion(command || localizedCommand || rawCommand)) return;
  if (!options.skipUnifiedBrain && await unifiedNexusConversationBrain(rawCommand, { ...options, turnToken, autoLanguage })) return;
  const visibleInlineWorkflow = $(".user-inline-workflow:not(.hidden)");
  if (pendingWorkflow && visibleInlineWorkflow && !isUniversalLanguageCommand(command || localizedCommand) && !isGlobalStopCommand(String(command || localizedCommand).toLowerCase())) {
    if (isNewServiceRequestOverWorkflow(command || localizedCommand)) {
      clearOpenWorkflowForNewVoiceRequest(command || localizedCommand);
    } else {
    if (fillWorkflowFieldByVoice(command || localizedCommand)) return;
    }
  }
  const introductionResponse = nexusIntroductionResponse(command || localizedCommand);
  if (introductionResponse) {
    stopVoicePlayback({ hard: true });
    openAskNexus();
    enableHeyAgriNexusMode();
    setVoiceResponse(introductionResponse, true);
    render();
    return;
  }
  if (greetingOnly || (greetingPrefix && !hasBehaviorActionVerb(command))) {
    stopVoicePlayback({ hard: true });
    openAskNexus();
    enableHeyAgriNexusMode();
    nexusAwaitingCommand = true;
    recordNexusAutonomousLearning({ type: "greeting", command: normalizedWakeText(localizedCommand) });
    setVoiceResponse(nexusConversationalWake("hello", localizedCommand), true, { allowHandoff: false });
    return;
  }
  if (isNexusHearingCheckCommand(command || localizedCommand)) {
    answerNexusHearingCheck();
    return;
  }
  if (await handleNexusRealtimeAdjustment(command || localizedCommand)) return;
  if (handleNexusSelfCorrection(command || localizedCommand)) return;
  if (runUserModeHardLanding(spokenCommand || command || localizedCommand || rawCommand)) return;
  const conversationFirstIntent = nexusConversationFirstIntent(spokenCommand || command || localizedCommand || rawCommand);
  if (runConversationFirstIntent(conversationFirstIntent, spokenCommand || command || localizedCommand || rawCommand)) return;
  const commonPhrase = nexusCommonPhraseResponse(command || localizedCommand);
  if (commonPhrase) {
    clearAgentProgressTimers();
    setVoiceResponse(commonPhrase, true);
    return;
  }
  const stopRedirect = postStopRedirectCommand(command);
  if (isGlobalStopCommand(String(command || localizedCommand).toLowerCase())) {
    if (isStopAndContinueWorkingCommand(command || localizedCommand)) {
      stopNexusAndReturnToWork("Stopped. Nexus is closed so you can continue working.");
      return;
    }
    enterNexusConversationPause("Stopped. Nexus is paused and will ignore background conversation until you say Nexus again.");
    if (stopRedirect) {
      leaveNexusConversationPause("Nexus heard your next instruction after stop.");
      setTimeout(() => {
        setCommandInputs(stopRedirect);
        void handleVoiceCommand(stopRedirect);
      }, 120);
    }
    return;
  }
  if (handleNexusVoicePreferenceCommand(command || localizedCommand || rawCommand, { source: options.source || "voice-preference-command" })) return;
  if (isUniversalLanguageCommand(command || localizedCommand)) {
    pendingNexusSpokenCommand = null;
    pendingAgentClarification = null;
    await changeLanguageByVoice(command || localizedCommand);
    return;
  }
  const priorityFallbackIntent = simpleUserDirectVoiceIntent(spokenCommand || command);
  if (isPriorityServiceVoiceIntent(priorityFallbackIntent)) {
    if (runCompanionWorkflowOfferIfNeeded(spokenCommand || command, {
      ...priorityFallbackIntent,
      actualRouteSource: "web.simpleUserDirectVoiceIntent.preflight"
    })) return;
    resetConversationStateForPriorityIntent(spokenCommand || command);
    if (runSimpleUserVoiceIntent(priorityFallbackIntent, spokenCommand || command)) return;
  }
  if (activeConversationIntake && handleConversationIntakeAnswer(command || localizedCommand || rawCommand)) return;
  if (startConversationIntakeFromCommand(command || localizedCommand || rawCommand)) return;
  if (options.source === "voice" && isLikelySideConversationWithoutNexusCommand(command || localizedCommand || rawCommand)) {
    pauseNexusForSideConversation(command || localizedCommand || rawCommand);
    return;
  }
  if (await handleNexusUnifiedBrainRuntimeCommand(spokenCommand || command || localizedCommand || rawCommand, { ...options, source: options.source || "typed_chat" })) return;
  if (await handleNexusAgricultureCollaborationRuntimeCommand(spokenCommand || command || localizedCommand || rawCommand, { ...options, source: options.source || "typed_chat" })) return;
  if (await handleNexusHealthcareCollaborationRuntimeCommand(spokenCommand || command || localizedCommand || rawCommand, { ...options, source: options.source || "typed_chat" })) return;
  if (handleNexusConversationGovernor(command || localizedCommand || rawCommand, options)) return;
  if (handleConversationMode2Preflight(command || localizedCommand || rawCommand, options)) return;
  agentPerformanceState.spokenCommand = spokenCommand || command;
  const preDialogSimpleIntent = simpleUserDirectVoiceIntent(spokenCommand || command);
  if (preDialogSimpleIntent) {
    if (runCompanionWorkflowOfferIfNeeded(spokenCommand || command, {
      ...preDialogSimpleIntent,
      actualRouteSource: "web.simpleUserDirectVoiceIntent.preDialog"
    })) return;
    if (runSimpleUserVoiceIntent(preDialogSimpleIntent, spokenCommand || command)) return;
  }
  if (isOpenKnowledgeQuestion(spokenCommand || command)) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    updateNexusBehaviorLayer("thinking", "Nexus is listening to the full question and checking internet-resource knowledge with platform context.");
    renderLiveVoiceSuggestions(["ask one follow-up", "save to record", "prepare review summary", "Nexus stop"]);
    if (ignoreStaleNexusTurn(turnToken, "knowledge answer")) return;
    await runNexusKnowledgeQuery(spokenCommand || command, { sourceSurface: "global_voice_ask_nexus" });
    const response = nexusKnowledgeLastResult?.answer || "Nexus checked internet-resource knowledge safely.";
    setVoiceResponse(response, true, { allowHandoff: false, command: spokenCommand || command, source: "nexus-internet-resource-assistant-platform" });
    return;
  }
  if (isOpenDialogVoiceQuestion(spokenCommand || command)) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    updateNexusBehaviorLayer("thinking", "Nexus is treating this as open dialog, not a fixed menu command.");
    renderLiveVoiceSuggestions(["ask a follow-up", "guide me step by step", "open the right area", "Nexus stop"]);
    const locationContext = await safeBrowserWeatherLocation(spokenCommand || command);
    if (ignoreStaleNexusTurn(turnToken, "open dialog answer")) return;
    await runBackendAgentCommand(spokenCommand || command, locationContext, { turnToken });
    return;
  }
  const earlySimpleIntent = simpleUserDirectVoiceIntent(spokenCommand || command);
  if (earlySimpleIntent) {
    if (runCompanionWorkflowOfferIfNeeded(spokenCommand || command, {
      ...earlySimpleIntent,
      actualRouteSource: "web.simpleUserDirectVoiceIntent.early"
    })) return;
    if (runSimpleUserVoiceIntent(earlySimpleIntent, spokenCommand || command)) return;
  }
  const understanding = adaptiveCommandUnderstanding(command);
  if (understanding.rewrittenCommand && !isUniversalLanguageCommand(command) && !isGlobalStopCommand(understanding.rewrittenCommand.toLowerCase())) {
    command = understanding.rewrittenCommand;
  }
  const lower = command.toLowerCase();
  markAgentPerformance("heard", "voice-command");
  agentPerformanceState.lastCommand = command;
  agentPerformanceState.spokenCommand = spokenCommand || command;
  if (command) rememberConversationTurn(command, "");
  if (command) updateNexusAwareness(command, { silent: true });
  if (command) speechSafetyRisk(command, "voice");
  if (isNexusVoiceOffCommand(lower)) {
    disableNexusVoiceForDemo("Demo quiet mode is on. Nexus voice is off until you turn it back on.");
    return;
  }
  if (isNexusVoiceOnCommand(lower)) {
    voiceConversationPaused = false;
    enableNexusVoiceForDemo("Nexus voice is back on. Say Nexus, then tell me what you need.");
    return;
  }
  if (isUniversalLanguageCommand(command)) {
    pendingNexusSpokenCommand = null;
    pendingAgentClarification = null;
    await changeLanguageByVoice(command);
    return;
  }
  if (handleNexusAdaptiveLearningCommand(command || localizedCommand || rawCommand)) return;
  if (pendingNexusSpokenCommand && isNexusCommandConfirmation(lower)) {
    await executePendingNexusSpokenCommand();
    return;
  }
  if (pendingNexusSpokenCommand && isNexusCommandRejection(lower)) {
    clearPendingNexusSpokenCommand("No problem. What do you want instead?");
    return;
  }
  if (isOpenKnowledgeQuestion(command)) {
    updateNexusBehaviorLayer("thinking", "Nexus is checking internet-resource knowledge and platform context before answering.");
    renderLiveVoiceSuggestions(["save to record", "prepare review summary", "queue offline", "request advisor support"]);
    if (ignoreStaleNexusTurn(turnToken, "knowledge answer")) return;
    await runNexusKnowledgeQuery(command, { sourceSurface: "global_voice_ask_nexus" });
    const response = nexusKnowledgeLastResult?.answer || "Nexus checked internet-resource knowledge safely.";
    setVoiceResponse(response, true, { allowHandoff: false, command, source: "nexus-internet-resource-assistant-platform" });
    return;
  }
  if (/\b(system integrity|platform integrity|integrity check|stress test|polish check|demo readiness|final check|readiness pass)\b/.test(lower)) {
    updateNexusBehaviorLayer("answering", "Nexus is reporting platform integrity across voice, language, mobile, roles, memory, recovery, and demo flow.");
    renderLiveVoiceSuggestions(["Nexus, go quiet", "Nexus, turn voice back on", "Nexus, open map", "Nexus, run investor voice demo"]);
    setVoiceResponse(platformIntegrityStressSummary(), true);
    return;
  }
  if (/\b(manual testing path|manual test path|testing checklist|test checklist|walkthrough path|demo checklist|what should i test first)\b/.test(lower)) {
    updateNexusBehaviorLayer("answering", "Nexus is giving the manual testing path for User, voice, maps, providers, Admin, and Investor.");
    renderLiveVoiceSuggestions(["Nexus, open learning", "Nexus, start telehealth intake", "Nexus, sell crop", "Nexus, run live service check"]);
    setVoiceResponse(manualTestingPathSummary(), true);
    return;
  }
  if (isGlobalStopCommand(lower)) {
    if (isStopAndContinueWorkingCommand(command || localizedCommand)) {
      stopNexusAndReturnToWork("Stopped. Nexus is closed so you can continue working.");
      return;
    }
    enterNexusConversationPause("Stopped. Nexus is paused and will ignore background conversation until you say Nexus again.");
    if (stopRedirect) {
      leaveNexusConversationPause("Nexus heard your next instruction after stop.");
      setTimeout(() => {
        setCommandInputs(stopRedirect);
        void handleVoiceCommand(stopRedirect);
      }, 120);
    }
    return;
  }
  if (!lower && (wakeOnly || greetingOnly)) {
    openAskNexus();
    enableHeyAgriNexusMode();
    nexusAwaitingCommand = true;
    recordNexusAutonomousLearning({ type: "wake", command: normalizedWakeText(localizedCommand) });
    setVoiceResponse(nexusConversationalWake(greetingOnly ? "hello" : "wake", localizedCommand), true, { allowHandoff: false });
    return;
  }
  if (!lower) return setVoiceResponse("I am listening. Just tell me what you need.", true);
  if (isSimpleCourseStartCommand(command)) {
    await handleSimpleCourseStartCommand(command);
    return;
  }
  const explicitLearningIntent = explicitLearningReadinessIntent(command);
  if (explicitLearningIntent) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    paintLocalLevelOneSuggestionForSimpleUserIntent({ type: "workflow", workflow: "learning", action: explicitLearningIntent.action }, command);
    preserveControlledActionPreviewDuringCommandRoute = true;
    queueMicrotask(() => {
      preserveControlledActionPreviewDuringCommandRoute = false;
    });
    return openWorkflowByVoice("learning", explicitLearningIntent.action, explicitLearningIntent.response, explicitLearningIntent.dataset || {});
  }
  if (shouldAskRepeatForUnclearVoiceCommand(command, options)) {
    askUserToRepeatMisheardPhrase(command);
    return;
  }
  if (shouldStageNexusSpokenCommand(command, lower, { ...options, wakeOnly })) {
    stageNexusSpokenCommand(command);
    return;
  }
  updateNexusBehaviorLayer("thinking", command ? `Nexus is deciding how to help with: ${command}` : "Nexus is listening.");
  const simpleIntent = simpleUserDirectVoiceIntent(command);
  if (simpleIntent?.type === "clarify") {
    pendingAgentClarification = simpleIntent.clarification || null;
    pendingNexusSpokenCommand = null;
    renderLiveVoiceSuggestions(simpleIntent.suggestions || ["health", "work", "learning", "crops", "map"]);
    updateNexusBehaviorLayer("listening", "Nexus asked one short clarifying question instead of guessing.");
    setVoiceResponse(simpleIntent.response, true);
    return;
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "full-map") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openFullScaleUserMap(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "home") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openNexusHome(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "health-intake") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openHealthIntakeNow(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "medicine-help") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openMedicineHelpNow(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "clinic-map-help") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openHealthFacilityMapNow(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "clinic-help") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openClinicHelpNow(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "crop-help") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openCropProblemHelpNow(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "doctor-help") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openDoctorHelpNow(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "crop-sale-guided") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openCropSaleGuidedNow(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "workforce-guided") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openWorkforceGuidedNow(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "learning-guided") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openLearningGuidedNow(simpleIntent.response);
  }
  if (simpleIntent?.type === "direct" && simpleIntent.directAction === "route-guided") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openRouteGuidedNow(simpleIntent.response);
  }
  if (simpleIntent?.type === "workflow") {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    return openWorkflowByVoice(simpleIntent.workflow, simpleIntent.action, simpleIntent.response, simpleIntent.dataset || {});
  }
  if (isVoiceMissionRequest(command)) {
    pendingAgentClarification = null;
    await startVoiceMission(command);
    return;
  }
  if (/\b(speech safety|translation safety|voice safety|speak slower|slow down|talk slower|slower voice)\b/.test(lower)) {
    if (/\b(speak slower|slow down|talk slower|slower voice)\b/.test(lower)) {
      localStorage.setItem("agrinexusSlowSpeech", "on");
    }
    setVoiceResponse(multilingualSpeechSafetySummary(), true);
    return;
  }
  if (/\b(adaptive understanding|what did you hear|what do you think i said|understand me|speech intelligence|voice intelligence)\b/.test(lower)) {
    setVoiceResponse(nexusAdaptiveUnderstandingSummary(), true);
    return;
  }
  if (/\b(context memory|what context|what do you know about this|what do you remember about this|next best question|what should you ask me)\b/.test(lower)) {
    setVoiceResponse(nexusContextMemorySummary(), true);
    return;
  }
  if (/\b(predict|prediction|predictive|what needs attention|smart recommendation|make a smart recommendation|what should happen next)\b/.test(lower)) {
    setVoiceResponse(nexusPredictiveAdvisorSummary(command), true);
    return;
  }
  if (/\b(decision score|score your decision|why did you recommend|rank this|score this)\b/.test(lower)) {
    const model = nexusDecisionScoringModel(command);
    setVoiceResponse(`Decision score ${model.score}/100. Recommendation: ${model.recommendation}. Why: ${model.why}. Next question: ${model.nextQuestion}`, true);
    return;
  }
  if (/\b(live intelligence feeds|live knowledge feeds|real time feeds|provider feeds|what feeds are live)\b/.test(lower)) {
    setVoiceResponse(nexusLiveKnowledgeFeedSummary(), true);
    return;
  }
  if (/\b(collective intelligence|collective brain|self evolve|self evolution|evolution engine|learn from everyone|community intelligence|nexus learn from users|make yourself better|improve yourself)\b/.test(lower)) {
    await runCollectiveIntelligence();
    return;
  }
  if (/\b(highest level|frontier brain|frontier nexus|activate frontier|maximum intelligence|top level nexus|strongest version|ultimate nexus|take it to the highest)\b/.test(lower)) {
    await runFrontierBrain();
    return;
  }
  if (pendingAgentClarification && await answerAgentClarification(command)) return;
  if (/\b(cancel|stop|clear|end)\s+(journey|guided journey|next step|follow through)\b/.test(lower)) {
    activeAgentJourney = null;
    setVoiceResponse("Guided journey cleared. Tell me what you want to do next.", true);
    return;
  }
  if (isConversationRepairCommand(lower)) {
    handleConversationRepair(command);
    return;
  }

  if (await runMusicAssistantCommand(command, { turnToken })) return;

  const utilityAnswer = nexusUtilityAssistantResponseV2(command);
  if (utilityAnswer) {
    updateNexusBehaviorLayer("answering", "Nexus is answering a practical daily question.");
    renderLiveVoiceSuggestions(["open map", "open telehealth", "track my shipment", "what is next today"]);
    const locationContext = await browserWeatherLocation(command);
    if (ignoreStaleNexusTurn(turnToken, "utility answer")) return;
    await runUtilityAgentCommand(command, utilityAnswer, locationContext, { turnToken });
    return;
  }

  if (await handleNexusIntelligenceRouter(command)) return;

  if (handleAdvisorBrainCommand(command)) return;

  const migrantIntent = migrantFriendlyVoiceIntent(command);
  if (migrantIntent) {
    if (migrantIntent.section && canOpenSection(migrantIntent.section)) goSection(migrantIntent.section);
    if (migrantIntent.directAction === "full-map") return openFullScaleUserMap(migrantIntent.response);
    return openWorkflowByVoice(migrantIntent.workflow, migrantIntent.action, migrantIntent.response, migrantIntent.dataset || {});
  }
  if (/\b(voice persona|how will you talk|conversation style|who are you in this mode)\b/.test(lower)) {
    setVoiceResponse(modeSpecificVoicePersona(), true);
    return;
  }
  if (/\b(best|safest|safe|safer|recommend|which)\b.*\b(route|road|logistics|delivery|shipment|corridor)\b/.test(lower)) {
    const routeAdvice = advisorLogisticsRecommendation();
    goSection("map");
    renderLiveVoiceSuggestions(["check route risk", "track my route", "find facility", "explain the map"]);
    setVoiceResponse(routeAdvice.message, true);
    return;
  }
  if (/\b(what should i do|recommend|suggest|help)\b.*\b(crop|crops|field|harvest|plant|farm)\b/.test(lower) || /\b(crop|crops|field|farm)\b.*\b(bad|going bad|stress|pest|dry|yellow|rot|spoil)\b/.test(lower)) {
    const cropAdvice = advisorCropConditionRecommendation();
    goSection("trade");
    renderLiveVoiceSuggestions(cropAdvice.actions.slice(0, 4));
    setVoiceResponse(`${cropAdvice.message} I can open drone scan, irrigation, pest alert, or field task now.`, true);
    return;
  }
  if (/\b(mission status|where am i|where are we|workflow status|voice status)\b/.test(lower)) {
    setVoiceResponse(voiceWorkflowStatus(), true);
    return;
  }
  if (/\b(continue mission|next mission step|start mission)\b/.test(lower)) {
    if (await continueVoiceMission()) return;
  }
  if (/\b(read back|readback|read this|read screen|read current|speak this)\b/.test(lower)) {
    setVoiceResponse(voiceReadbackText(), true);
    return;
  }
  if (isVoiceMissionRequest(command)) {
    if (await startVoiceMission(command)) return;
  }
  if (lower === "next" || lower.includes("next step") || lower.includes("continue journey") || lower.includes("continue the workflow") || lower.includes("what is the next step")) {
    await runActiveAgentNextStep();
    return;
  }
  if (lower.includes("current journey") || lower.includes("guided journey") || lower.includes("where are we")) {
    setVoiceResponse(activeAgentJourneySummary(), true);
    return;
  }
  if (isModeFollowUpCommand(lower)) {
    setVoiceResponse(modeFollowUpResponse(command), true);
    return;
  }
  if (/\b(what should i say|what can i say here|suggest what to say|help me talk|conversation guide)\b/.test(lower)) {
    const guide = intuitiveConversationGuide();
    renderLiveVoiceSuggestions(guide.suggestions);
    setVoiceResponse(intuitiveConversationResponse(), true);
    return;
  }
  if (/(activate|turn on|start|use|enable|show|explain).*(agentic|jarvis).*(mode|plan|system)?/.test(lower) || /(agentic|jarvis).*(mode|plan).*(all modes|across modes)?/.test(lower)) {
    const response = activateAgenticJarvisMode();
    if (experienceMode !== "user" && canOpenSection("agent")) goSection("agent");
    setVoiceResponse(response, true);
    return;
  }
  if (/(everything|all).*(agentic|jarvis).*(list|mode|across modes)/.test(lower)) {
    const plan = agenticJarvisModePlan();
    renderLiveVoiceSuggestions(plan.commands);
    setVoiceResponse(`${plan.summary} The full list is: ${plan.items.map(item => `${item.title}: ${item.detail}`).join(" ")}.`, true);
    return;
  }
  const clarification = inferAmbiguousIntent(command);
  if (clarification) {
    guideAmbiguousUserWithoutChoice(clarification);
    return;
  }
  if (/(what is|define|explain|tell me about|describe).*(agrinexus|agri nexus|nexus platform|the platform)/.test(lower) || /(agrinexus|agri nexus).*(what do you do|who are you|how do you help)/.test(lower)) {
    goSection(experienceMode === "user" ? "dashboard" : "agent");
    setVoiceResponse("AgriNexus is an AI operating platform for rural learning, workforce, telehealth, agriculture trade, maps, drone intelligence, translation, and provider workflows. You can talk to Nexus, change language, ask what to do next, open a service, or ask it to guide a real workflow step by step.", true);
    return;
  }
  if (/(what commands|which commands|what can i ask|what can i say).*(all three modes|all modes|user admin investor|user.*admin.*investor)/.test(lower) || /(commands|voice commands).*(user.*admin.*investor|all modes)/.test(lower)) {
    const catalog = allModeVoiceCommandCatalog();
    renderLiveVoiceSuggestions(catalog.commands);
    setVoiceResponse(`${catalog.guarantee} Try: ${catalog.commands.slice(0, 6).join(". ")}.`, true);
    return;
  }
  if (/(how do i use|how to use|show me how|explain how|walk me through|teach me).*(platform|learning|course|workforce|job|health|telehealth|trade|agritrade|map|ai|agent|nexus|integration|admin|function|button|section)/.test(lower)) {
    const moduleId = moduleFromHelpCommand(command);
    if (canOpenSection(moduleId)) goSection(moduleId);
    setVoiceResponse(moduleUseExplanation(moduleId), true);
    return;
  }

  if (/\b(open|show|take me to|go to|navigate to)\b.*\b(the\s+)?map\b/.test(lower)) {
    goSection("map");
    setActiveAgentJourney("map", "context", "Map opened by voice.");
    setVoiceResponse("Map is open. You can say track my route, show map risk, find a health facility, or explain the map.", true);
    return;
  }
  if (/\b(show|open|display|map|track|trace)\b.*\b(trade|crop|shipment|delivery|market|logistics)\b.*\b(route|path|corridor|tracking)\b.*\bfrom\s+.+?\s+\bto\s+.+/.test(lower)
    || /\b(trade|crop|shipment|delivery|market|logistics)\b.*\b(route|path|corridor|tracking)\b.*\bfrom\s+.+?\s+\bto\s+.+/.test(lower)
    || /\b(route|path|corridor|tracking)\b.*\bfrom\s+.+?\s+\bto\s+.+/.test(lower)) {
    goSection("map");
    setActiveAgentJourney("map", "country-trade-route", "Country-to-country trade route opened by voice.");
    renderLiveVoiceSuggestions(["run route risk", "track shipment", "message buyer", "create order"]);
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }
  if (/\b(buyer|customer|purchaser|client|seller|farmer|pickup|delivery|deliver|ship|shipment|product|products|crop|order|sale)\b/.test(lower)
    && /\b(address|location|lagos|kenya|nairobi|route|map|track|tracking|where|deliver|delivery|purchased|bought|sold)\b/.test(lower)) {
    goSection("map");
    setActiveAgentJourney("map", "buyer-route", "Buyer-to-seller route opened by voice.");
    renderLiveVoiceSuggestions(["run route risk", "message buyer", "track my route in real time", "create order"]);
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }
  if (/\b(contact|call|message|whatsapp|text|speak to|talk to|connect)\b.*\b(listed\s+)?(telehealth\s+)?(provider|doctor|nurse|clinic)\b/.test(lower) || /\b(listed\s+telehealth\s+provider|telehealth\s+provider\s+listed)\b/.test(lower)) {
    if (lower.includes("call") || lower.includes("whatsapp")) {
      goSection("health");
      return openWorkflowByVoice("communications", "health-whatsapp", "I opened Health and prepared the listed provider call or WhatsApp handoff.");
    }
    if (lower.includes("message") || lower.includes("text") || lower.includes("sms")) {
      goSection("health");
      return openWorkflowByVoice("communications", lower.includes("sms") || lower.includes("text") ? "health-sms" : "health-chat", "I opened Health and prepared the listed provider message workflow.");
    }
    goSection("health");
    return openWorkflowByVoice("health", "provider", "I opened Health and prepared the listed telehealth provider contact workflow.");
  }
  if (/\b(closest|nearest|nearby|find|show)\b.*\b(clinic|health facility|care point|doctor|provider)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "nearest-clinic", "I opened Rural Health Access and prepared the closest clinic workflow.", { patientLocation: activeCountry().name });
  }
  if (/\b(mobile clinic|clinic provider|provider|clinic team)\b.*\b(service menu|prices|pricing|services|fee|fees|cost)\b/.test(lower)
    || /\b(publish|show|create)\b.*\b(clinic prices|clinic service menu|mobile clinic services)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "clinic-service-menu", "I opened the Mobile Clinic Revenue Desk and prepared the service menu.");
  }
  if (/\b(mobile clinic|clinic provider|provider|clinic team|patient|sponsor)\b.*\b(payment|pay|charge|bill|billing|collect|checkout)\b/.test(lower)
    || /\b(request|create|send)\b.*\b(payment|clinic bill|mobile clinic payment|checkout)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "clinic-payment-request", "I opened the Mobile Clinic Revenue Desk and prepared the payment request.");
  }
  if (/\b(receipt|proof of payment|paid receipt)\b/.test(lower) && /\b(clinic|patient|mobile|provider|payment|health)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "clinic-receipt", "I opened the Mobile Clinic Revenue Desk and prepared the receipt workflow.");
  }
  if (/\b(payout|settle|settlement|pay the clinic|pay clinic|provider payment)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "clinic-payout", "I opened the Mobile Clinic Revenue Desk and prepared the provider payout workflow.");
  }
  if (/\b(mobile clinic|clinic come|come to me|outreach team|field clinic|community health worker)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "mobile-clinic", "I opened Rural Health Access and prepared a mobile clinic outreach request.", { patientLocation: activeCountry().name });
  }
  if (/\b(mobile clinic|outreach team|field clinic|clinic team)\b.*\b(supplies|supply|stock|inventory|medicine|ppe|gloves|tests|wound|equipment|restock)\b/.test(lower)
    || /\b(supplies|supply|stock|inventory|restock|ppe|gloves|tests|wound care)\b.*\b(mobile clinic|outreach team|field clinic|clinic team)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "supply-request", "I opened Mobile Clinic Supply Network and prepared a supply request.", { patientLocation: activeCountry().name, supplyNeeds: command });
  }
  if (/\b(find|match|source|where)\b.*\b(supply|supplies|depot|warehouse|medical store|pharmacy stock|inventory)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "supply-match", "I opened Mobile Clinic Supply Network and prepared the supply source match.", { patientLocation: activeCountry().name, supplyNeeds: command });
  }
  if (/\b(track|dispatch|deliver|delivery|driver|courier)\b.*\b(supply|supplies|medical kit|clinic kit|ppe|tests|medicine)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "supply-dispatch", "I opened Mobile Clinic Supply Network and prepared supply delivery tracking.", { patientLocation: activeCountry().name, supplyNeeds: command });
  }
  if (/\b(confirm|received|delivered|arrived)\b.*\b(supply|supplies|medical kit|clinic kit|ppe|tests|medicine)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "supply-delivery", "I opened Mobile Clinic Supply Network and prepared delivery confirmation.", { patientLocation: activeCountry().name, supplyNeeds: command });
  }
  if (/\b(pharmacy|medicine|medication|refill|drug|prescription pickup)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "pharmacy", "I opened Rural Health Access and prepared the pharmacy support workflow.", { patientLocation: activeCountry().name });
  }
  if (/\b(handoff|paper clinic|paper-to-digital|summary for clinic|clinic summary|give clinic|care packet)\b/.test(lower) && /\b(health|clinic|doctor|provider|patient|symptom|medicine|mobile)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "handoff", "I opened Rural Health Access and prepared a paper-to-digital clinic handoff.");
  }
  if (/\b(symptom|symptoms|fever|headache|stomach|diarrhea|vomit|cough|breathing|rash|wound|injury|swelling|pain|dizzy|weak|dehydrated|sick|ill)\b/.test(lower)
    && /\b(what|help|explain|tell|guide|have|feel|patient|grandma|farmer|clinic|health|sick|ill)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "symptom-guide", "I opened Rural Health Access and prepared the symptom guide. This is not a diagnosis; it helps explain danger signs and the safest next step.", { symptoms: command, patientLocation: activeCountry().name });
  }
  if (/\b(video|camera|show|see)\b.*\b(injury|wound|rash|swelling|fall|patient|doctor|provider|telehealth|health)\b/.test(lower) || /\b(show|open)\b.*\b(provider|doctor)\b.*\b(video|camera)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "video", "I opened Health and prepared the local camera preview and video handoff record. This does not start a live provider visit. Press Open camera when the patient agrees.");
  }
  if (/\b(video|camera|show|see)\b.*\b(buyer|seller|crop|crops|produce|harvest|quality|field|farm)\b/.test(lower) || /\b(show|open)\b.*\b(buyer|seller)\b.*\b(video|camera)\b/.test(lower)) {
    goSection("trade");
    return openWorkflowByVoice("trade", "buyer-video", "I opened Trade and prepared the buyer crop video workflow. Press Open camera when the farmer agrees.");
  }
  if (/\b(quote|price|cost|how much)\b.*\b(ship|shipping|shipment|delivery|deliver|transport|logistics)\b/.test(lower)) {
    goSection("trade");
    return openWorkflowByVoice("trade", "logistics-quote", "I opened Trade and prepared a shipment quote. Add the pickup, delivery point, buyer, seller, and amount.", { productId: firstProduct()?.id });
  }
  if (/\b(book|schedule|arrange|start|create)\b.*\b(ship|shipment|shipping|delivery|transport|logistics)\b/.test(lower) || /\b(ship my crop|ship crop|send crop to buyer|move crop to buyer)\b/.test(lower)) {
    goSection("trade");
    return openWorkflowByVoice("trade", "shipping-booking", "I opened Trade and prepared crop shipping. This connects the seller, buyer, pickup point, delivery point, carrier, tracking, and route evidence.", { productId: firstProduct()?.id });
  }
  if (/\b(buyer pickup|buyer pick up|buyer collect|buyer collection|buyer to seller|buyer driver)\b/.test(lower)) {
    goSection("trade");
    return openWorkflowByVoice("trade", "buyer-pickup", "I opened Trade and prepared buyer pickup. Confirm where the buyer or driver will collect the crop.", { productId: firstProduct()?.id });
  }
  if (/\b(seller delivery|seller to buyer|deliver to buyer|delivery to buyer|take crop to buyer|bring crop to buyer)\b/.test(lower)) {
    goSection("trade");
    return openWorkflowByVoice("trade", "seller-delivery", "I opened Trade and prepared seller delivery. Confirm the buyer destination and carrier.", { productId: firstProduct()?.id });
  }
  if (/\b(confirm|prove|proof|received|arrived|arrive)\b.*\b(delivery|shipment|crop|buyer|order)\b/.test(lower)) {
    goSection("trade");
    return openWorkflowByVoice("trade", "delivery-confirm", "I opened Trade and prepared delivery confirmation. Record buyer receipt before settlement.", { productId: firstProduct()?.id });
  }
  if (/\b(settle|settlement|release payment|release payout|farmer payout|seller payout|pay seller|pay farmer)\b/.test(lower) && /\b(trade|buyer|seller|shipment|crop|payment|payout|sale)\b/.test(lower)) {
    goSection("trade");
    return openWorkflowByVoice("trade", "settlement", "I opened Trade and prepared settlement. Confirm delivery proof before payment release.", { productId: firstProduct()?.id });
  }
  if (/\b(create|open|send|start|prepare)\b.*\b(buyer checkout|checkout|payment link|paystack|flutterwave)\b/.test(lower)
    || /\b(collect payment|buyer pay|buyer payment|take payment)\b/.test(lower)) {
    goSection("trade");
    return openWorkflowByVoice("trade", "payment-checkout", "I opened Trade and prepared buyer checkout through Paystack or Flutterwave.", { productId: firstProduct()?.id });
  }
  if (/\b(sell|market|create|start)\b.*\b(crop|produce|harvest|maize|corn|rice|cassava|yam|beans)\b.*\b(buyer|customer|market|cooperative)\b/.test(lower) && /\b(track|trace|follow|watch|delivery|shipment|route|sale)\b/.test(lower)) {
    goSection("trade");
    return openWorkflowByVoice("trade", "order", "I opened Trade and prepared the crop sale. The workflow connects the buyer, order, route map, sale record, and delivery tracking.", { productId: firstProduct()?.id });
  }

  if (/\b(i want to sell|sell my|sell|buyer for|find buyer|market my)\b/.test(lower) && /\b(maize|corn|rice|cassava|yam|beans|crop|produce|harvest|farm)\b/.test(lower)) {
    goSection("trade");
    return openWorkflowByVoice("trade", "buyer-contact", "I can help sell that crop. I opened Trade and prepared the buyer contact workflow.", { productId: firstProduct()?.id });
  }
  if (/\b(i need|need|find|get|want)\b/.test(lower) && /\b(doctor|provider|nurse|clinic|telehealth|care|medicine|health help)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "intake", "I can help with care. I opened Health and prepared the intake workflow.");
  }
  if (/\b(i need|need|find|get|want|apply)\b/.test(lower) && /\b(job|work|role|shift|employment)\b/.test(lower)) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "apply-role", "I can help with work. I opened Workforce and prepared the role application workflow.", { roleId: firstEligibleRole()?.id });
  }
  if (/\b(i want|i need|help me|teach me|start)\b/.test(lower) && /\b(learn|course|lesson|training|skill|certificate)\b/.test(lower)) {
    goSection("learning");
    return openWorkflowByVoice("learning", "start", "I can help you learn. I opened Learning and prepared the course start workflow.");
  }

  if (pendingWorkflow && visibleInlineWorkflow) {
    if (isNewServiceRequestOverWorkflow(command)) {
      clearOpenWorkflowForNewVoiceRequest(command);
      await handleVoiceCommand(command, { ...options, skipCommandConfirmation: true });
      return;
    }
    if (fillWorkflowFieldByVoice(command)) return;
    if (lower === "read" || lower.includes("read this") || lower.includes("read workflow") || lower.includes("repeat")) {
      readWorkflowModal();
      return;
    }
    if (lower === "yes" || lower.includes("confirm") || lower.includes("approve") || lower.includes("yes do it") || lower.includes("do it") || lower.includes("do this now") || lower.includes("submit")) {
      await confirmPendingWorkflow();
      return;
    }
    if (lower === "no" || lower.includes("cancel") || lower.includes("choose another") || lower.includes("close") || lower.includes("stop")) {
      closeWorkflowModal();
      visibleInlineWorkflow.classList.add("hidden");
      pendingWorkflow = null;
      updateUserCaptionPanel("Canceled. Choose another button when ready.");
      setVoiceResponse("Canceled. Choose another button when ready.", true);
      return;
    }
  }

  if (!$("#workflowModal").classList.contains("hidden")) {
    if (fillWorkflowFieldByVoice(command)) return;
    if (lower === "read" || lower.includes("read this") || lower.includes("read workflow") || lower.includes("repeat")) {
      readWorkflowModal();
      return;
    }
    if (lower === "yes" || lower.includes("confirm") || lower.includes("approve") || lower.includes("yes do it") || lower.includes("do it") || lower.includes("submit")) {
      await confirmPendingWorkflow();
      setVoiceResponse("Confirmed. I completed the staged workflow.", true);
      return;
    }
    if (lower === "no" || lower.includes("cancel") || lower.includes("close") || lower.includes("stop")) {
      closeWorkflowModal();
      setVoiceResponse("Canceled the staged workflow.");
      return;
    }
  }

  const sectionAliases = {
    dashboard: ["dashboard", "home", "control room"],
    learning: ["learning", "training", "course", "courses", "development"],
    workforce: ["workforce", "jobs", "job", "role", "roles", "candidate"],
    health: ["health", "telehealth", "afayai", "care", "patient"],
    trade: ["trade", "agritrade", "agritech", "market", "wallet", "drone"],
    map: ["map", "route", "routes", "country"],
    agent: ["agent", "agrinexus", "nexus", "assistant", "voice", "command center"],
    integrations: ["integration", "integrations", "provider", "providers", "engines"],
    admin: ["admin", "readiness", "governance"],
    profile: ["profile", "record", "records"]
  };
  for (const [section, aliases] of Object.entries(sectionAliases)) {
    if ((lower.startsWith("open ") || lower.startsWith("go to ") || lower.startsWith("show ") || lower.startsWith("take me to ") || lower.startsWith("navigate to ")) && aliases.some(alias => lower.includes(alias))) {
      goSection(section);
      setVoiceResponse(`Opened ${section}.`, true);
      return;
    }
  }

  if (lower.includes("show me jobs") || lower.includes("find jobs") || lower.includes("show jobs") || lower.includes("available jobs")) {
    goSection("workforce");
    setVoiceResponse("I opened Work. Choose Find Jobs to review roles, or say apply for job when you are ready.", true);
    return;
  }
  if (lower.includes("track my route") || lower.includes("track route")) {
    goSection("map");
    return openWorkflowByVoice("ai", "route", "Route tracking support is ready. Say yes to create route intelligence, or say track my route in real time to start GPS tracking.");
  }
  if (lower.includes("check health risk") || lower.includes("check region") || lower.includes("region risk")) {
    goSection("health");
    return openWorkflowByVoice("health", "safety", "Regional health risk review is ready.");
  }
  if (lower.includes("nearest health facility") || lower.includes("find facility") || lower.includes("nearest facility")) {
    goSection("map");
    return openWorkflowByVoice("map", "facility-route", "Facility route workflow is ready.");
  }
  if (lower.includes("explain the map") || lower.includes("map explanation")) {
    goSection("map");
    setVoiceResponse(`The map shows ${activeCountry().name}, the active route ${activeRoute().name}, health pressure, facilities, route risk, drone evidence, and AI map intelligence. Use Check Route to assess risk or Find Facility to build a care route.`, true);
    return;
  }
  if (lower.includes("help me understand the platform") || lower.includes("ask question")) {
    goSection("agent");
    await runBackendAgentCommand("help me understand the platform and guide my next step", null, { turnToken });
    return;
  }
  if (lower.includes("explain next step") || lower.includes("what should i do next")) {
    await runBackendAgentCommand("what should I do next", null, { turnToken });
    return;
  }
  if (lower.includes("read the current response") || lower.includes("read current response") || lower.includes("read to me")) {
    setVoiceResponse(lastVoiceResponse || "I am ready. Choose a button or ask Nexus what to do next.", true);
    return;
  }

  if (/(stop|cancel|end|pause).*(live\s+)?route.*track/.test(lower) || /(stop|cancel|end|pause).*(tracking).*(route)/.test(lower)) {
    stopLiveRouteTracking();
    return;
  }
  if (/(track|follow|watch).*(my\s+)?route/.test(lower) && /(real time|realtime|live|gps|location)/.test(lower)) {
    await startLiveRouteTracking();
    return;
  }
  if (/(outbreak|infected|infection|ebola|disease risk|region safe|safe to deploy|safe for telehealth)/.test(lower) && /(telehealth|health|region|congo|drc|uganda|africa|outreach)/.test(lower)) {
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }

  if ((lower.includes("agritrade") || lower.includes("agri trade")) && (lower.includes("what do you do") || lower.includes("tell me about") || lower.includes("about the platform") || lower.includes("change") || lower.includes("language") || lower.includes("translate") || lower.includes("speak") || lower.includes("use ") || lower.includes("respond") || lower.includes("reply") || lower.includes("parle") || lower.includes("habla") || lower.includes("utilise") || lower.includes("badilisha") || lower.includes("tumia") || lower.includes("zungumza") || lower.includes("ongea") || lower.includes("anglais") || lower.includes("ingles") || lower.includes("francais") || lower.includes("frances") || lower.includes("kiswahili") || lower.includes("kiingereza") || lower.includes("kifaransa") || lower.includes("kiarabu") || lower.includes("kihispania") || lower.includes("arabe") || lower.includes("espanol"))) {
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }

  if (voiceFirstMode && isNaturalConversationCommand(lower)) {
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }

  if ((lower.includes("agritrade") || lower.includes("agri trade") || lower.includes("trade") || lower.includes("buyer") || lower.includes("crop") || lower.includes("route") || lower.includes("logistics")) && (lower.includes("efficiency") || lower.includes("efficient") || lower.includes("optimize") || lower.includes("optimise") || lower.includes("operations") || lower.includes("operational") || lower.includes("bottleneck") || lower.includes("delay") || lower.includes("cost") || lower.includes("waste") || lower.includes("profit") || lower.includes("performance"))) {
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }
  if ((lower.includes("agritrade") || lower.includes("agri trade") || lower.includes("trade") || lower.includes("buyer") || lower.includes("crop") || lower.includes("route") || lower.includes("logistics") || lower.includes("driver") || lower.includes("farmer") || lower.includes("field")) && (lower.includes("communicat") || lower.includes("message") || lower.includes("update") || lower.includes("brief") || lower.includes("status") || lower.includes("report") || lower.includes("say to") || lower.includes("tell the") || lower.includes("notify") || lower.includes("script") || lower.includes("handoff"))) {
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }

  if ((lower.includes("what can i say") || lower.includes("what can") || lower.includes("commands") || lower.includes("examples")) && (lower.includes("agritrade") || lower.includes("trade") || lower.includes("telehealth") || lower.includes("health") || lower.includes("workforce") || lower.includes("learning") || lower.includes("maps"))) {
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }

  if (lower.includes("investor voice demo") || lower.includes("voice demo mode") || lower.includes("show investors") || lower.includes("demo mode")) {
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }

  if (lower.includes("voice help") || lower.includes("command help") || lower.includes("show help") || lower.includes("what can you do")) {
    openVoiceHelp();
    const catalog = allModeVoiceCommandCatalog();
    const toolCount = dynamicVoiceToolRegistry().length;
    setVoiceResponse(`You can call me Nexus in User, Admin, or Investor mode. I can open modules, start multi-step missions, ask clarifying questions, remember confirmations, fill workflow forms by voice, explain workflow status, recover from errors, read screens aloud, adapt my voice behavior by mode, follow language changes, and speak progress events. I can also discover ${toolCount} workflow tools from the current platform screen, so you can ask in normal words. All-mode examples: ${catalog.commands.slice(0, 5).join(". ")}.`, true);
    return;
  }
  if (lower.includes("voice demo") || lower.includes("agrinexus demo") || lower.includes("show voice") || lower.includes("show agrinexus")) {
    goSection("agent");
    openAskNexus();
    setVoiceResponse("AgriNexus voice demo is ready. Try saying: open telehealth, apply for that job, contact my buyer, test provider engines, or run full mission. Say yes to confirm any staged workflow.", true);
    return;
  }
  if (lower.includes("show reasoning") || lower.includes("show how you decide") || lower.includes("show agent thinking")) {
    agentReasoningVisible = true;
    localStorage.setItem("agrinexusReasoningVisible", "true");
    render();
    goSection("agent");
    setVoiceResponse("Agent reasoning is visible for demo mode. I will still operate by voice.", true);
    return;
  }
  if (lower.includes("hide reasoning") || lower.includes("hide agent thinking") || lower.includes("simple mode")) {
    agentReasoningVisible = false;
    localStorage.setItem("agrinexusReasoningVisible", "false");
    render();
    setVoiceResponse("Simple voice mode is on. I will keep reasoning in the background and talk you through the next action.", true);
    return;
  }
  if (isNexusVoiceOnCommand(lower)) {
    enableNexusVoiceForDemo(voiceFirstMode ? "Voice-first mode is already on. Say a command when the microphone is listening." : "Nexus voice is back on. Say Nexus, then tell me what you need.");
    return;
  }
  if (isNexusVoiceOffCommand(lower)) {
    disableNexusVoiceForDemo(voiceDemoQuietMode ? "Demo quiet mode is already on. Nexus voice will stay off." : "Demo quiet mode is on. Nexus voice is off until you turn it back on.");
    return;
  }
  if (lower.includes("status") || lower.includes("readiness") || lower.includes("what is left")) {
    setVoiceResponse(voiceStatusSummary(), true);
    return;
  }
  if (lower.includes("production 10") || lower.includes("jarvis production") || lower.includes("full production smart") || lower.includes("what is left for production") || lower.includes("how close are we to all 10")) {
    goSection(canOpenSection("admin") ? "admin" : "agent");
    setVoiceResponse(jarvisProductionTenSummary(), true);
    return;
  }
  if (lower.includes("production one through eight") || lower.includes("production 1 through 8") || lower.includes("production 1-8") || lower.includes("items 1 through 8") || lower.includes("from 1 to 8") || lower.includes("one to eight") || lower.includes("agentic production eight")) {
    const model = productionJarvisEightModel();
    renderLiveVoiceSuggestions(model.items.map(item => item.command));
    goSection(canOpenSection("admin") ? "admin" : "agent");
    setVoiceResponse(productionJarvisEightSummary(), true);
    return;
  }
  if (lower.includes("what do you remember") || lower.includes("show memory") || lower.includes("what have you learned")) {
    const memory = nexusDeepMemorySignals();
    const modules = memory.modules.slice(0, 3).map(item => `${item.name} ${item.count}`).join(", ") || "no module memory yet";
    const needs = memory.needs.slice(0, 4).map(item => item.name.replace(/-/g, " ")).join(", ") || "standard support";
    setVoiceResponse(`I remember ${memory.count} useful item(s). Active mission: ${memory.activeMission}. Strongest memory areas: ${modules}. User needs I am tracking: ${needs}. Latest memory: ${memory.latest}.`, true);
    return;
  }
  if (lower.includes("provider depth") || lower.includes("real provider actions") || lower.includes("what engines are live")) {
    const depth = providerActionDepthStatus();
    const summary = Object.entries(depth).map(([group, item]) => `${group}: ${item.ready}/${item.total}`).join(". ");
    setVoiceResponse(`Provider action depth: ${summary}. Local workflows remain active while live providers are being connected.`, true);
    return;
  }
  if (lower.includes("mobile permissions") || lower.includes("app permissions") || lower.includes("permissions check")) {
    const permissions = mobilePermissionRecoveryGuide();
    setVoiceResponse(`Mobile permission check: microphone ${permissions.microphone ? "available" : "not available"}, notifications ${permissions.notifications ? "available" : "not available"}, location ${permissions.location ? "available" : "not available"}. ${permissions.guidance}`, true);
    return;
  }
  if (lower.includes("chrome voice") || lower.includes("chrome mic") || lower.includes("chrome microphone") || lower.includes("chrome setup") || lower.includes("browser voice setup")) {
    setVoiceResponse(chromeVoiceStatusMessage(), true);
    refreshMicSupport();
    return;
  }
  if (lower.includes("agentic behavior") || lower.includes("jarvis behavior") || lower.includes("performance check") || lower.includes("behavior check") || lower.includes("are you agentic")) {
    const scorecard = agenticBehaviorScorecard();
    setVoiceResponse(`Agentic behavior check: ${scorecard.mode}. I am ${scorecard.behavior}. Last timed response: ${scorecard.latencyMs || 0} ms. Memory: ${scorecard.memoryCount} item(s). Autopilot waiting: ${scorecard.autopilotWaiting}. Mobile readiness: ${scorecard.mobileReady}. Provider depth: ${scorecard.providerReady}.`, true);
    return;
  }
  if (lower.includes("coach me") || lower.includes("guide me") || lower.includes("operator coach") || lower.includes("recommend next")) {
    if (lower.includes("guide me") || lower.includes("recommend next")) {
      const guide = intuitiveConversationGuide();
      renderLiveVoiceSuggestions(guide.suggestions);
      setVoiceResponse(intuitiveConversationResponse(), true);
      return;
    }
    const coach = nexusOperatorCoach();
    setVoiceResponse(`Operator coach: ${coach.prompt} Say yes to run ${coach.command}, or say a different request.`, true);
    pendingAgentClarification = {
      original: command,
      options: [{ label: "Yes", section: currentSectionId(), command: coach.command, detail: coach.prompt }]
    };
    return;
  }
  if (lower.includes("what do you see") || lower.includes("situational brief") || lower.includes("smartest recommendation") || lower.includes("most important") || lower.includes("rank priorities")) {
    const brief = nexusSituationalBrief();
    setVoiceResponse(explainSmartRecommendation(), true);
    pendingAgentClarification = {
      original: command,
      options: brief.priorities.slice(0, 3).map(item => ({ label: item.title, section: currentSectionId(), command: item.command, detail: item.reason }))
    };
    return;
  }
  if (lower.includes("what are you aware of") || lower.includes("awareness check") || lower.includes("what do you think i need") || lower.includes("what am i trying to do")) {
    setVoiceResponse(nexusAwarenessSummary(), true);
    return;
  }
  if (lower.includes("brain os") || lower.includes("all 10 brain") || lower.includes("all ten brain") || lower.includes("brain operating system") || lower.includes("show the 10") || lower.includes("show the ten")) {
    goSection("agent");
    setVoiceResponse(nexusBrainOsSummary(), true);
    return;
  }
  if (lower.includes("highest intelligence") || lower.includes("high intelligence") || lower.includes("show intelligence") || lower.includes("intelligence snapshot") || lower.includes("how smart are you") || lower.includes("show decision")) {
    goSection("agent");
    setVoiceResponse(`${nexusHighIntelligenceSummary()} ${nexusStrategicReasoningSummary()}`, true);
    return;
  }
  if (lower.includes("strategic reasoning") || lower.includes("strategic reason") || lower.includes("why did you choose") || lower.includes("explain your decision") || lower.includes("intelligence score")) {
    goSection("agent");
    setVoiceResponse(nexusStrategicReasoningSummary(), true);
    return;
  }
  if (lower.includes("be smart") || lower.includes("act smart") || lower.includes("act intelligently") || lower.includes("think for me") || lower.includes("use your intelligence")) {
    setVoiceResponse(nexusSmartBehaviorSummary(), true);
    return;
  }
  if (lower.includes("brain timeline") || lower.includes("show brain history") || lower.includes("what have you been doing")) {
    goSection("agent");
    const timeline = nexusBrainTimeline().slice(0, 5).map(item => `${item.type}: ${item.title}`).join(". ");
    setVoiceResponse(`Brain timeline: ${timeline}.`, true);
    return;
  }
  if (lower.includes("learning rules") || lower.includes("how are you learning") || lower.includes("what did you learn about me")) {
    goSection("agent");
    setVoiceResponse(`Nexus learning rules: ${nexusBrainLearningRules().join(". ")}.`, true);
    return;
  }
  if (lower.includes("explain your brain") || lower.includes("how does your brain work") || lower.includes("how do you think")) {
    goSection("agent");
    setVoiceResponse(`${nexusBrainSummary()} The operating rules are goals, memory, awareness, recovery, and initiative. I use those to decide whether to answer, open a section, stage a workflow, ask for confirmation, or recover when something is unclear.`, true);
    return;
  }
  if (lower.includes("nexus brain") || lower.includes("show your brain") || lower.includes("do you have a brain") || lower.includes("what is your brain doing")) {
    setVoiceResponse(nexusBrainSummary(), true);
    goSection("agent");
    return;
  }
  if (lower.includes("admin intelligence") || lower.includes("admin brief") || lower.includes("admin risk") || lower.includes("smart admin")) {
    const brief = adminIntelligenceBrief();
    setVoiceResponse(`Admin intelligence: readiness ${brief.readiness}. Top risk: ${brief.topRisk}. Usage: ${brief.usage}. Strongest module: ${brief.healthiestModule}. Recommendation: ${brief.recommendation}`, true);
    pendingAgentClarification = {
      original: command,
      options: [{ label: "Run admin recommendation", section: "admin", command: brief.command, detail: brief.recommendation }]
    };
    return;
  }
  if (lower.includes("investor intelligence") || lower.includes("investor brief") || lower.includes("investor story") || lower.includes("smart investor")) {
    const brief = investorIntelligenceBrief();
    setVoiceResponse(`Investor intelligence: strongest metric is ${brief.strongestMetric}. Timeline has ${brief.timeline}. Provider depth is ${brief.providerDepth}. Gap: ${brief.topGap}. Recommendation: ${brief.recommendation}`, true);
    pendingAgentClarification = {
      original: command,
      options: [{ label: "Run investor recommendation", section: "dashboard", command: brief.command, detail: brief.recommendation }]
    };
    return;
  }
  if (lower.includes("native app") || lower.includes("highest level app") || lower.includes("always on") || lower.includes("always-on") || lower.includes("background listening") || lower.includes("desktop companion") || lower.includes("computer-wide") || lower.includes("chrome is closed")) {
    const readiness = nativeAppReadinessSummary();
    setVoiceResponse(`${readiness.summary} I can run the browser-safe assistant now. For true wake behavior when Chrome is closed, use the visible desktop companion. For phone-style always-on behavior, use the native Android or iOS wrapper.`, true);
    return;
  }
  if (lower.includes("proactive alerts") || lower.includes("what needs attention") || lower.includes("alert me")) {
    const alerts = nexusProactiveAlerts();
    setVoiceResponse(alerts.length ? `Nexus sees ${alerts.length} alert(s): ${alerts.map(item => `${item.module} ${item.status}: ${item.message}`).join(" ")}` : "No proactive alerts need attention right now.", true);
    return;
  }
  if (lower.includes("what happened") || lower.includes("what just happened") || lower.includes("what did you do") || lower.includes("what evidence") || lower.includes("explain the last workflow") || lower.includes("good morning agrinexus") || lower.includes("good morning nexus") || lower.includes("daily briefing") || lower.includes("operator briefing") || lower.includes("morning briefing")) {
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }
  if (/(learning|course|lesson|instructor|workforce|job|recruiter|employer|health|telehealth|caregiver|care team|provider|admin|support)/.test(lower) && /(message|chat|communicate|contact|notify|sms|whatsapp|text)/.test(lower)) {
    await runBackendAgentCommand(command, null, { turnToken });
    return;
  }
  if (lower.includes("create") && lower.includes("plan") || lower.startsWith("plan ")) {
    const goal = commandGoal(command) || $("#agentGoal")?.value?.trim() || "Create an AgriNexus cross-module plan.";
    $("#agentGoal").value = goal;
    await createAgentPlan();
    setVoiceResponse("Agent plan created. Review it, then say execute approved plan when ready.", true);
    return;
  }
  if ((lower.includes("execute") || lower.includes("run")) && lower.includes("plan")) {
    await executeAgentPlan();
    setVoiceResponse("Approved agent plan executed across the connected workflow tools.", true);
    return;
  }
  if (lower.includes("wow") || lower.includes("investor demo")) {
    await runWowDemo();
    setVoiceResponse("WOW demo completed and evidence was added to the platform.", true);
    return;
  }
  if (lower.includes("standard demo")) {
    await runExecutiveDemo();
    setVoiceResponse("Standard demo completed.", true);
    return;
  }

  if ((lower.includes("onboard") || lower.includes("create") || lower.includes("build") || lower.includes("prepare")) && (lower.includes("partner") || lower.includes("provider") || lower.includes("vendor"))) {
    const type = lower.includes("workforce") || lower.includes("job") ? "workforce"
      : lower.includes("learning") || lower.includes("course") || lower.includes("training") ? "learning"
      : lower.includes("drone") || lower.includes("field") ? "drone"
      : lower.includes("trade") || lower.includes("buyer") || lower.includes("market") || lower.includes("logistics") ? "trade"
      : lower.includes("sms") || lower.includes("whatsapp") || lower.includes("email") || lower.includes("phone") || lower.includes("communication") ? "communications"
      : "telehealth";
    goSection("integrations");
    return openWorkflowByVoice("partnership", type, "Provider partnership packet workflow is ready.");
  }

  if (/\b(caption|captions|transcript|subtitle|subtitles)\b/.test(lower) && /\b(telehealth|health|patient|doctor|provider|clinic|care)\b/.test(lower)) {
    goSection("health");
    return openWorkflowByVoice("health", "caption", "I can build captions for telehealth. I opened the caption relay so the patient, caregiver, and provider can read the conversation clearly.");
  }
  if (lower.includes("build caption") || lower.includes("make caption") || lower.includes("open caption") || lower.includes("caption lesson") || lower.includes("learning caption")) {
    return openLearningCaptionSupport("Captions are open. Speak now and Nexus will write the words here while keeping learning support ready.");
  }
  if (lower.includes("audio guide") || lower.includes("screen reader") || lower.includes("visual guide")) {
    goSection("learning");
    openWorkflowModal(learningAccessibilityWorkflowConfig("visual"));
    return setVoiceResponse("Audio guide workflow is ready. Say confirm to create it or cancel to close it.", true);
  }
  if (lower.includes("offline packet") || lower.includes("low bandwidth") || lower.includes("send packet")) {
    goSection("learning");
    openWorkflowModal(learningAccessibilityWorkflowConfig("low-bandwidth"));
    return setVoiceResponse("Offline learning packet workflow is ready. Say confirm to prepare it or cancel to close it.", true);
  }
  if (lower.includes("start course") || lower.includes("begin course") || lower.includes("start training")) {
    goSection("learning");
    return openWorkflowByVoice("learning", "start", "Course start workflow is ready.");
  }
  if (lower.includes("complete lesson") || lower.includes("my lesson")) {
    goSection("learning");
    return openWorkflowByVoice("learning", "lesson", "Lesson completion workflow is ready.");
  }
  if (lower.includes("quiz")) {
    goSection("learning");
    $("#quizBtn")?.click();
    return setVoiceResponse("Quiz workflow opened.", true);
  }
  if (lower.includes("certificate")) {
    goSection("learning");
    $("#certBtn")?.click();
    return setVoiceResponse("Certificate workflow opened.", true);
  }

  if (lower.includes("build profile")) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "build-profile", "Workforce profile workflow is ready.");
  }
  if ((lower.includes("apply") || lower.includes("application")) && (lower.includes("job") || lower.includes("role") || lower.includes("workforce") || lower.includes("position"))) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "apply-role", "Role application workflow is ready.", { roleId: firstEligibleRole()?.id });
  }
  if (lower.includes("interview")) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "interview", "Interview scheduling workflow is ready.");
  }
  if (lower.includes("mentor")) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "mentor", "Mentor assignment workflow is ready.");
  }
  if (lower.includes("shift")) {
    goSection("workforce");
    return openWorkflowByVoice("workforce", "shift", "Shift scheduling workflow is ready.");
  }

  if (lower.includes("intake") || lower.includes("patient intake") || lower.includes("telehealth intake")) {
    goSection("health");
    return openWorkflowByVoice("health", "intake", "Telehealth intake is open. I will collect the care request, access needs, language, callback, and safety details. This is not a diagnosis.");
  }
  if (lower.includes("provider") || lower.includes("representative") || lower.includes("connect me") || lower.includes("reach a doctor") || lower.includes("reach a nurse")) {
    goSection("health");
    return openWorkflowByVoice("health", "representative", "Provider connection workflow is ready.");
  }
  if (lower.includes("safety")) {
    goSection("health");
    return openWorkflowByVoice("health", "safety", "Safety review workflow is ready.");
  }
  if (lower.includes("care plan") || lower.includes("careplan")) {
    goSection("health");
    return openWorkflowByVoice("health", "careplan", "Care plan workflow is ready.");
  }
  if (lower.includes("caption relay") || (lower.includes("caption") && lower.includes("health"))) {
    goSection("health");
    return openWorkflowByVoice("health", "caption", "Caption relay workflow is ready.");
  }
  if (lower.includes("caregiver")) {
    goSection("health");
    return openWorkflowByVoice("health", "caregiver", "Caregiver notification workflow is ready.");
  }
  if (lower.includes("consent")) {
    goSection("health");
    return openWorkflowByVoice("health", "consent", "Consent workflow is ready.");
  }
  if (lower.includes("vitals") || lower.includes("vital signs")) {
    goSection("health");
    return openWorkflowByVoice("health", "vitals", "Vitals capture workflow is ready.");
  }
  if (lower.includes("referral")) {
    goSection("health");
    return openWorkflowByVoice("health", "referral", "Referral workflow is ready.");
  }
  if (lower.includes("follow up") || lower.includes("follow-up") || lower.includes("callback")) {
    goSection("health");
    return openWorkflowByVoice("health", "followup", "Follow-up workflow is ready.");
  }
  if (lower.includes("accessibility") || lower.includes("accessible telehealth")) {
    goSection("health");
    return openWorkflowByVoice("health", "accessibility", "Accessible telehealth workflow is ready.");
  }

  if ((lower.includes("buyer") || lower.includes("customer")) && (lower.includes("speak") || lower.includes("talk") || lower.includes("call") || lower.includes("message") || lower.includes("contact"))) {
    goSection("trade");
    if (lower.includes("whatsapp")) {
      return openWorkflowByVoice("trade", "buyer-whatsapp", "WhatsApp buyer workflow is ready.", { productId: firstProduct()?.id });
    }
    if (lower.includes("sms") || lower.includes("text")) {
      return openWorkflowByVoice("trade", "buyer-sms", "SMS buyer workflow is ready.", { productId: firstProduct()?.id });
    }
    if (lower.includes("message") || lower.includes("chat") || lower.includes("communicate") || lower.includes("real time") || lower.includes("realtime")) {
      return openWorkflowByVoice("trade", "buyer-message", "Buyer-seller message thread workflow is ready.", { productId: firstProduct()?.id });
    }
    return openWorkflowByVoice("trade", "buyer-contact", "Buyer contact workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("shipping quote") || lower.includes("quote shipment") || (lower.includes("cost") && lower.includes("ship"))) {
    goSection("trade");
    return openWorkflowByVoice("trade", "logistics-quote", "Shipment quote workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("book shipment") || lower.includes("ship my crop") || lower.includes("book delivery") || lower.includes("arrange transport")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "shipping-booking", "Shipping booking workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("buyer pickup") || lower.includes("buyer pick up") || lower.includes("buyer collect")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "buyer-pickup", "Buyer pickup workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("seller delivery") || lower.includes("deliver to buyer") || lower.includes("seller to buyer")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "seller-delivery", "Seller delivery workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("confirm delivery") || lower.includes("delivery proof") || lower.includes("shipment arrived")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "delivery-confirm", "Delivery confirmation workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("settlement") || lower.includes("seller payout") || lower.includes("farmer payout")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "settlement", "Trade settlement workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("buyer checkout") || lower.includes("create checkout") || lower.includes("collect payment") || lower.includes("paystack") || lower.includes("flutterwave")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "payment-checkout", "Buyer checkout workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("flight plan") || lower.includes("drone mission") || lower.includes("plan drone")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "drone-plan", "Drone mission workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("intervention") || lower.includes("field task") || lower.includes("assign field")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "drone-intervention", "Drone field intervention workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("drone")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "drone", "Drone field scan workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("create order") || lower.includes("buyer order") || lower.includes("sell crop") || lower.includes("sell my crop")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "order", "Buyer order workflow is ready.", { productId: firstProduct()?.id });
  }
  if (lower.includes("advance order") || lower.includes("logistics status") || lower.includes("shipment status")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "advance", "Logistics advance workflow is ready.");
  }
  if (lower.includes("payment") || lower.includes("wallet") || lower.includes("m-pesa")) {
    goSection("trade");
    return openWorkflowByVoice("trade", "wallet", "Wallet payment workflow is ready.");
  }
  if (lower.includes("price")) return openWorkflowByVoice("ai", "price", "Price AI workflow is ready.");
  if (lower.includes("route risk") || lower.includes("assess route") || lower.includes("route intelligence") || lower.includes("map risk")) return openWorkflowByVoice("ai", "route", "Route risk AI workflow is ready.");
  if (lower.includes("command center")) return openWorkflowByVoice("ai", "command", "Command center AI workflow is ready.");
  if (lower.includes("copilot")) return openWorkflowByVoice("ai", "copilot", "Copilot workflow is ready.");
  if (lower.includes("tutor")) return openWorkflowByVoice("ai", "tutor", "AI tutor workflow is ready.");
  if (lower.includes("triage")) return openWorkflowByVoice("ai", "triage", "AI triage workflow is ready.");
  if (lower.includes("trade advisor")) return openWorkflowByVoice("ai", "trade-advisor", "Trade advisor workflow is ready.");
  if (lower.includes("workforce coach") || lower.includes("readiness gaps") || lower.includes("workforce gaps") || lower.includes("review gaps")) return openWorkflowByVoice("ai", "workforce-coach", "Workforce coach workflow is ready.");

  if (lower.includes("test") && (lower.includes("provider") || lower.includes("engine"))) {
    goSection("integrations");
    return openWorkflowByVoice("integrations", "test-all", "Provider test workflow is ready.");
  }
  if (lower.includes("live service check")) {
    goSection("integrations");
    await runLiveServiceCheck();
    return;
  }
  if (/\b(public intelligence|public providers|open meteo|open-meteo|who outbreak|outbreak feed|osm services|openstreetmap services)\b/.test(lower)) {
    goSection("integrations");
    return openWorkflowByVoice("integrations", "public-intelligence", "Public intelligence provider check is ready.");
  }
  if (lower.includes("health check")) {
    goSection("admin");
    return openWorkflowByVoice("admin", "health-check", "Admin health check workflow is ready.");
  }

  if (await runDynamicVoiceTool(command)) return;

  const locationContext = await safeBrowserWeatherLocation(command);
  if (ignoreStaleNexusTurn(turnToken, "backend answer")) return;
  await runBackendAgentCommand(command, locationContext, { turnToken });
}

function voiceCrashRecoveryMessage(command = "") {
  const lower = normalizeToolText(command);
  if (/\b(home|dashboard|main menu|menu)\b/.test(lower)) return "I reset the voice route and opened home. What do you need next?";
  if (/\b(clinic|hospital|health center|health centre)\b/.test(lower)) return "I reset the voice route. I can help find clinic or mobile clinic support. If this is an emergency, call local emergency help now. First, tell me your village, city, or nearest landmark.";
  if (/\b(medicine|medication|pharmacy|refill|drug|pills)\b/.test(lower)) return "I reset the voice route. I can guide medicine access step by step. I cannot prescribe, but I can help explain the medicine concern, find pharmacy or mobile clinic support, and prepare provider review. First, tell me the medicine concern.";
  return "I reset the voice route. Say it again in your own words, and I will keep the next answer short.";
}

async function handleVoiceCommand(rawCommand, options = {}) {
  try {
    return await handleVoiceCommandCore(rawCommand, options);
  } catch (error) {
    console.error("Nexus voice command failed", error);
    clearAgentProgressTimers();
    abortActiveAgentCommand();
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    activeConversationIntake = null;
    clearLevelOneAgentActionSuggestionLabel();
    setVoiceStatus(voiceFirstMode ? "voice-first" : "standby");
    updateNexusBehaviorLayer("ready", "Nexus recovered from a voice route error and is ready for a simpler retry.");
    setVoiceResponse(voiceCrashRecoveryMessage(rawCommand), true, { allowHandoff: false });
    return null;
  }
}

async function runBackendAgentCommand(command, locationContext = null, options = {}) {
  const turnToken = options.turnToken || null;
  if (ignoreStaleNexusTurn(turnToken, "backend answer")) return null;
  abortActiveAgentCommand();
  const controller = new AbortController();
  activeAgentCommandController = controller;
  const correlationId = options.correlationId || createGenesisVoiceCorrelationId();
  activeGenesisVoiceCorrelationId = correlationId;
  const requestStartedAt = Date.now();
  try {
    const previousLanguage = languageCode();
    const commandLanguage = canonicalLanguageCode(options.targetLanguage || options.language || languageCode(), { allowPartial: true });
    voiceConversationTurns += 1;
    localStorage.setItem("agrinexusVoiceTurns", String(voiceConversationTurns));
    setVoiceStatus("thinking");
    setAgentFastAcknowledgement(command);
    beginAgentNoDeadAir(command);
    recordGenesisSpokenResponsePipelineEvent("command-request-started", {
      correlationId,
      route: "/api/agent/command",
      success: true,
      sourceFunction: "runBackendAgentCommand"
    });
    data = await requestWithTimeout("/api/agent/command", {
      method: "POST",
      controller,
      abortReason: "superseded",
      body: {
        correlationId,
        command,
        confirm: false,
        conversational: true,
        inputMode: "voice",
        outputMode: "voice",
        mode: conversationPlatformMode(),
        modeContext: modeConversationContext(command),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        location: locationContext,
        language: commandLanguage,
        targetLanguage: commandLanguage,
        companionUnderstanding: companionUnderstandingState,
        note: "Command submitted from Nexus Voice Assistant"
      }
    }, 12000);
    if (activeAgentCommandController === controller) activeAgentCommandController = null;
    if (ignoreStaleNexusTurn(turnToken, "backend answer")) return null;
    clearAgentProgressTimers();
    render();
    const result = data.commandResult || {};
    recordGenesisSpokenResponsePipelineEvent("command-response-received", {
      correlationId,
      route: "/api/agent/command",
      intent: result.intent || "unknown",
      httpStatus: 200,
      elapsedTimeMs: Date.now() - requestStartedAt,
      sourceFunction: "runBackendAgentCommand"
    });
    const genesisSpeakable = extractGenesisSpeakableResponse(data, correlationId);
    observeAgentActionMetadata(result, { source: "runBackendAgentCommand", command });
    if (!visibleControlledActionPreviewReadiness || isNexusSimulationCommand(command)) {
      paintLocalLevelOneSuggestionForSimpleUserIntent({ type: "direct" }, command);
    }
    maybeDispatchConfirmedNativeCallHandoff(result);
    if (result.metadata?.companionRouteOutcome) {
      try {
        localStorage.setItem("agrinexusCompanionRouteOutcome", JSON.stringify(result.metadata.companionRouteOutcome));
      } catch {
        // Diagnostic metadata should never affect routing.
      }
    }
    if (result.intent === "map.country_open" || result.intent === "map.kenya_medical_transport") {
      const country = countryFromAgentMapMetadata(result.metadata || {});
      if (country) {
        markAgentPerformance("completed", result.intent);
        recordNexusAutonomousLearning({ type: "agent-completed", command, intent: result.intent });
        openCountryMapFromVoice(country, result.response);
        return result;
      }
    }
    if (result.metadata?.genesisAction && dispatchGenesisWorkspaceAction(result.metadata.genesisAction, result)) return result;
    if (openAgentResultWorkflow(result, command)) return result;
    if (result.metadata?.redirectSection && !result.metadata?.workflowDeferred) goSection(result.metadata.redirectSection);
    if (result.intent === "conversation.language_changed" || result.metadata?.language || previousLanguage !== languageCode()) {
      refreshVoiceForLanguageChange();
    }
    renderLiveVoiceSuggestions(localizedVoiceSuggestionItems(result, contextualVoiceSuggestions(result.metadata?.redirectSection || currentSectionId())));
    if (result.metadata?.frontierCommunication?.nextQuestion) {
      const nextQuestion = result.metadata.frontierCommunication.nextQuestion;
      const frontierSuggestions = [
        { command: nextQuestion, label: nextQuestion },
        { command: "say that again slowly", label: "Repeat slowly" },
        { command: "explain simply", label: "Explain simply" },
        { command: "Nexus stop", label: "Stop" }
      ];
      renderLiveVoiceSuggestions([...frontierSuggestions, ...localizedVoiceSuggestionItems(result, [])]);
      updateNexusBehaviorLayer("listening", `Nexus is ready for one answer: ${nextQuestion}`);
    }
    if (result.metadata?.voiceMission?.phrase && $("#globalAssistantStatus")) {
      $("#globalAssistantStatus").textContent = result.metadata.voiceMission.phrase;
    }
    if (result.metadata?.turnCoach?.nextQuestion) {
      const turnQuestion = result.metadata?.localized?.turnCoach?.nextQuestion || result.metadata.turnCoach.nextQuestion;
      renderLiveVoiceSuggestions([{ command: result.metadata.turnCoach.nextQuestion, label: turnQuestion }, ...localizedVoiceSuggestionItems(result, [])]);
    }
    const mode = $("#jarvisMode");
    if (mode) mode.textContent = `conversation turn ${voiceConversationTurns}`;
    markAgentPerformance("completed", result.intent || "agent-command");
    recordNexusAutonomousLearning({ type: "agent-completed", command, intent: result.intent || "agent-command" });
    updateNexusAwareness(command, { silent: true });
    updateNexusBehaviorLayer("speaking", genesisSpeakable.response);
    setVoiceResponse(genesisSpeakable.response, true, { handoffText: result.metadata?.turnCoach?.nextQuestion || "", alreadyTranslated: result.metadata?.translatedResponse === true, command, turnToken, correlationId, genesisResponse: genesisSpeakable, source: "genesis-normalized-command-response" });
    return result;
  } catch (error) {
    recordGenesisSpokenResponsePipelineEvent("command-response-parse-failed", {
      correlationId,
      route: "/api/agent/command",
      success: false,
      errorCategory: error.name === "AbortError" ? "abort" : "command-or-contract-error",
      elapsedTimeMs: Date.now() - requestStartedAt,
      sourceFunction: "runBackendAgentCommand"
    });
    if (activeAgentCommandController === controller) activeAgentCommandController = null;
    if (error.name === "AbortError" || ignoreStaleNexusTurn(turnToken, "backend error")) return null;
    clearAgentProgressTimers();
    markAgentPerformance("failed", "agent-command-error");
    updateNexusBehaviorLayer("ready", "Nexus is ready to help in simpler words.");
    const message = /timed out|abort/i.test(error.message || "") ? `${error.message} ${safeAgentFallbackResponse(command)}` : (error.message || "Command failed.");
    voiceErrorRecovery(new Error(message), command);
  }
}

async function runUtilityAgentCommand(command, fallbackAnswer = "", locationContext = null, options = {}) {
  const turnToken = options.turnToken || null;
  if (ignoreStaleNexusTurn(turnToken, "utility answer")) return null;
  abortActiveAgentCommand();
  const controller = new AbortController();
  activeAgentCommandController = controller;
  const correlationId = options.correlationId || createGenesisVoiceCorrelationId();
  activeGenesisVoiceCorrelationId = correlationId;
  const requestStartedAt = Date.now();
  try {
    const previousLanguage = languageCode();
    const commandLanguage = canonicalLanguageCode(options.targetLanguage || options.language || languageCode(), { allowPartial: true });
    voiceConversationTurns += 1;
    localStorage.setItem("agrinexusVoiceTurns", String(voiceConversationTurns));
    setVoiceStatus("thinking");
    updateNexusBehaviorLayer("thinking", "Nexus is checking the real platform record before answering.");
    recordGenesisSpokenResponsePipelineEvent("command-request-started", {
      correlationId,
      route: "/api/agent/command",
      success: true,
      sourceFunction: "runUtilityAgentCommand"
    });
    data = await requestWithTimeout("/api/agent/command", {
      method: "POST",
      controller,
      abortReason: "superseded",
      body: {
        correlationId,
        command,
        confirm: false,
        conversational: true,
        inputMode: "voice",
        outputMode: "voice",
        mode: conversationPlatformMode(),
        modeContext: modeConversationContext(command),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        location: locationContext,
        language: commandLanguage,
        targetLanguage: commandLanguage,
        companionUnderstanding: companionUnderstandingState,
        note: "Ask Nexus daily utility assistant"
      }
    }, 12000);
    if (activeAgentCommandController === controller) activeAgentCommandController = null;
    if (ignoreStaleNexusTurn(turnToken, "utility answer")) return null;
    render();
    const result = data.commandResult || {};
    recordGenesisSpokenResponsePipelineEvent("command-response-received", {
      correlationId,
      route: "/api/agent/command",
      intent: result.intent || "unknown",
      httpStatus: 200,
      elapsedTimeMs: Date.now() - requestStartedAt,
      sourceFunction: "runUtilityAgentCommand"
    });
    const genesisSpeakable = extractGenesisSpeakableResponse(data, correlationId);
    observeAgentActionMetadata(result, { source: "runUtilityAgentCommand", command });
    if (!visibleControlledActionPreviewReadiness || isNexusSimulationCommand(command)) {
      paintLocalLevelOneSuggestionForSimpleUserIntent({ type: "direct" }, command);
    }
    maybeDispatchConfirmedNativeCallHandoff(result);
    if (result.metadata?.companionRouteOutcome) {
      try {
        localStorage.setItem("agrinexusCompanionRouteOutcome", JSON.stringify(result.metadata.companionRouteOutcome));
      } catch {
        // Diagnostic metadata should never affect routing.
      }
    }
    if (result.intent === "map.country_open" || result.intent === "map.kenya_medical_transport") {
      const country = countryFromAgentMapMetadata(result.metadata || {});
      if (country) {
        markAgentPerformance("completed", result.intent);
        recordNexusAutonomousLearning({ type: "utility-completed", command, intent: result.intent });
        openCountryMapFromVoice(country, result.response);
        return result;
      }
    }
    if (result.metadata?.genesisAction && dispatchGenesisWorkspaceAction(result.metadata.genesisAction, result)) return result;
    if (openAgentResultWorkflow(result, command)) return result;
    if (result.metadata?.redirectSection && !result.metadata?.workflowDeferred) goSection(result.metadata.redirectSection);
    if (result.intent === "conversation.language_changed" || result.metadata?.language || previousLanguage !== languageCode()) {
      refreshVoiceForLanguageChange();
    }
    renderLiveVoiceSuggestions(localizedVoiceSuggestionItems(result, ["what is next today", "track my shipment", "open telehealth", "tell me the weather"]));
    markAgentPerformance("completed", result.intent || "utility-assistant");
    recordNexusAutonomousLearning({ type: "utility-completed", command, intent: result.intent || "utility-assistant" });
    updateNexusAwareness(command, { silent: true });
    updateNexusBehaviorLayer("speaking", genesisSpeakable.response || fallbackAnswer || "Done. I am ready for your next question.");
    setVoiceResponse(genesisSpeakable.response || fallbackAnswer || "Done. I am ready for your next question.", true, { handoffText: result.metadata?.turnCoach?.nextQuestion || "", alreadyTranslated: result.metadata?.translatedResponse === true, turnToken, correlationId, genesisResponse: genesisSpeakable, source: "genesis-normalized-utility-response" });
    return result;
  } catch (error) {
    recordGenesisSpokenResponsePipelineEvent("command-response-parse-failed", {
      correlationId,
      route: "/api/agent/command",
      success: false,
      errorCategory: error.name === "AbortError" ? "abort" : "utility-command-or-contract-error",
      elapsedTimeMs: Date.now() - requestStartedAt,
      sourceFunction: "runUtilityAgentCommand"
    });
    if (activeAgentCommandController === controller) activeAgentCommandController = null;
    if (error.name === "AbortError" || ignoreStaleNexusTurn(turnToken, "utility error")) return null;
    markAgentPerformance("failed", "utility-assistant-error");
    const local = fallbackAnswer || nexusUtilityAssistantResponseV2(command);
    updateNexusBehaviorLayer("speaking", "Nexus is using local app context because the backend command engine is unavailable.");
    setVoiceResponse(local ? `${local} I used local app context because the live command engine was unavailable.` : (error.message || "Ask Nexus could not answer that utility question yet."), true, { turnToken });
    return null;
  }
}

function stopNexusSpeaking(reason = "Stopped. I am ready when you are.") {
  voiceStopRequested = false;
  interruptNexusSpeech(reason);
  resetNexusForNextPrompt("Stopped. Ask me the next question or tell me where to go next.");
  setVoiceStatus(voiceFirstMode ? "voice-first" : "standby");
  toast("Nexus stopped speaking");
}

async function answerGlobalConversation(answer) {
  setCommandInputs(answer);
  await handleVoiceCommand(answer);
}

async function runPresetCommand(event) {
  const command = event.currentTarget.dataset.commandPreset || "";
  if (!command) return;
  goSection("dashboard");
  setCommandInputs(command);
  await handleVoiceCommand(command);
}

async function runLocalPilotScenario(event) {
  if (event?.currentTarget?.dataset?.simpleCommand) {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    const button = event.currentTarget;
    return renderA100PilotScenarioPreviewCard({
      label: button.textContent || "Pilot scenario",
      command: button.dataset.simpleCommand,
      capability: button.dataset.pilotCapability
    });
  }
  const scenario = event.currentTarget.dataset.pilotScenario || "rural-access";
  await mutate("/api/pilot/run", { scenario }, "Local pilot evidence report created");
  goSection("dashboard");
}

async function runGovernmentReadinessAction(eventOrAction) {
  const button = eventOrAction?.currentTarget || eventOrAction?.target?.closest?.("[data-government-action]") || null;
  const action = typeof eventOrAction === "string" ? eventOrAction : (button?.dataset?.governmentAction || "pilot");
  const label = action === "report" ? "Preparing 90-day government report..."
    : action === "heatmap" ? "Opening regional needs map..."
    : "Building government pilot...";
  const panel = $("#governmentReadinessPanel");
  if (panel) panel.innerHTML = `<div><strong>${translateText(label)}</strong><span>${translateText("Nexus is organizing impact, pilot regions, data sovereignty, compliance, low-bandwidth proof, and procurement evidence.")}</span></div>`;
  try {
    data = await request("/api/government/readiness", { method: "POST", body: { action } });
    render();
    if (action === "heatmap") {
      goSection("map");
      setTimeout(() => renderMap(), 80);
    } else {
      goSection("dashboard");
    }
    const result = data.governmentReadinessResult || data.governmentReadiness || {};
    const message = result.summary || "Government readiness evidence is ready.";
    updateNexusBehaviorLayer("ready", message);
    setVoiceResponse(message, true);
    toast(action === "report" ? "Government report prepared" : action === "heatmap" ? "Regional needs map opened" : "Government pilot built");
  } catch (error) {
    if (panel) panel.innerHTML = `<div><strong>${translateText("Government readiness needs attention")}</strong><span>${escapeHtml(error.message || "The workflow could not run yet.")}</span></div>`;
    updateNexusBehaviorLayer("ready", error.message || "Government readiness needs attention.");
    toast(error.message);
  }
}

async function runRemoteLaunchKit() {
  await mutate("/api/pilot/remote-launch-kit", {}, "Remote rural farmer launch kit created");
  goSection("dashboard");
}

async function runCollectiveIntelligence() {
  try {
    updateNexusBehaviorLayer("thinking", "Nexus is reviewing collective usage patterns and governed self-evolution proposals.");
    data = await request("/api/intelligence/collective-evolution", { method: "POST", body: { persist: true } });
    render();
    goSection("agent");
    const result = data.collectiveIntelligenceResult || data.collectiveIntelligence || {};
    const message = result.plainLanguageSummary || "Collective intelligence review complete. Nexus created governed self-evolution recommendations for admin review.";
    renderLiveVoiceSuggestions(["explain the top proposal", "open admin", "run platform integrity", "Nexus stop"]);
    updateNexusBehaviorLayer("ready", message);
    setVoiceResponse(message, true);
    toast("Collective intelligence review complete");
  } catch (error) {
    updateNexusBehaviorLayer("ready", error.message || "Collective intelligence needs attention.");
    setVoiceResponse(error.message || "Collective intelligence could not run yet.", true);
    toast(error.message);
  }
}

async function runFrontierBrain() {
  try {
    updateNexusBehaviorLayer("thinking", "Nexus is activating the highest operating layer across conversation, memory, workflows, providers, maps, and safety.");
    data = await request("/api/intelligence/frontier-brain", { method: "POST", body: { persist: true } });
    render();
    goSection("agent");
    const result = data.frontierBrainResult || data.frontierBrain || {};
    const message = result.plainLanguageSummary || "Frontier Nexus Brain is active. Nexus is coordinating the highest operating layer across the platform.";
    renderLiveVoiceSuggestions(["help a farmer", "help a patient", "start my course", "present the platform"]);
    updateNexusBehaviorLayer("ready", message);
    setVoiceResponse(message, true);
    toast("Frontier Nexus Brain activated");
  } catch (error) {
    updateNexusBehaviorLayer("ready", error.message || "Frontier Nexus Brain needs attention.");
    setVoiceResponse(error.message || "Frontier Nexus Brain could not activate yet.", true);
    toast(error.message);
  }
}

async function runSimpleAction(eventOrButton) {
  const selector = "[data-simple-command], [data-simple-section], [data-simple-pilot], [data-simple-demo], [data-simple-mission], [data-simple-action]";
  const eventTargetButton = eventOrButton?.target?.closest?.(selector);
  const currentTargetButton = eventOrButton?.currentTarget?.matches?.(selector) ? eventOrButton.currentTarget : null;
  const directButton = eventOrButton?.matches?.(selector) ? eventOrButton : null;
  const button = eventTargetButton || currentTargetButton || directButton;
  const status = $("#simpleActionStatus");
  if (!button) return;
  eventOrButton?.preventDefault?.();
  eventOrButton?.stopPropagation?.();
  const shouldResumeVoice = experienceMode === "user" && voiceShouldResumeAfterUiAction();
  if (experienceMode === "user") {
    closeAskNexus({ silent: true });
    $("#jarvisPanel")?.classList.add("hidden");
    $("#workflowModal")?.classList.add("hidden");
  }
  const label = button.querySelector("strong")?.textContent || button.textContent.trim() || "Selected action";
  if (status) status.textContent = `${label} is running...`;
  if (button.dataset.simpleCommand) {
    if (experienceMode === "user") {
      if (button.dataset.a100Capability) {
        const intent = a100SafeAutonomyIntent(button.dataset.simpleCommand);
        const opened = openA100SafeAutonomyPreview(intent);
        resumeVoiceAfterUiAction(shouldResumeVoice);
        if (status) status.textContent = opened
          ? `${label} opened a safe review-only Nexus preview.`
          : `${label} needs attention. Ask Nexus in your own words or choose another action.`;
        return;
      }
      if (isHealthVideoPreviewCommand(button.dataset.simpleCommand)) {
        const config = workflowConfig("health", "video", { dataset: {} });
        if (status) status.textContent = `${label} opened. Review the details and choose Yes or No.`;
        const opened = openHealthVideoPreviewWorkflow(config, "Local camera preview and video handoff record are ready.", "health");
        resumeVoiceAfterUiAction(shouldResumeVoice);
        if (!opened && $("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} needs attention. Ask Nexus in your own words or choose another action.`;
        return;
      }
      const mapped = simpleUserCommandWorkflow(button.dataset.simpleCommand);
      if (mapped) {
        mapped.command = button.dataset.simpleCommand;
        mapped.label = label;
        if (status) status.textContent = `${label} opened. Review the details and choose Yes or No.`;
        const targetSection = mapped.section || currentSectionId() || (mapped.workflow === "ai" ? "agent" : mapped.workflow === "map" ? "map" : mapped.workflow);
        const opened = openMappedUserWorkflow(mapped, targetSection);
        resumeVoiceAfterUiAction(shouldResumeVoice);
        if (!opened && $("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} needs attention. Ask Nexus in your own words or choose another action.`;
        return;
      }
      setCommandInputs(button.dataset.simpleCommand);
      openAskNexus();
      await handleVoiceCommand(button.dataset.simpleCommand);
      resumeVoiceAfterUiAction(shouldResumeVoice);
      if ($("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} sent to Nexus.`;
      return;
    }
    setCommandInputs(button.dataset.simpleCommand);
    openAskNexus();
    await handleVoiceCommand(button.dataset.simpleCommand);
    if ($("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} sent to Ask AgriNexus. Review the response or confirm the opened workflow.`;
    return;
  }
  if (button.dataset.simpleSection) {
    activateSectionFromButton(button);
    resumeVoiceAfterUiAction(shouldResumeVoice);
    if (status) status.textContent = `${label} opened.`;
    return;
  }
  if (button.dataset.simplePilot) {
    await mutate("/api/pilot/run", { scenario: button.dataset.simplePilot }, "Local pilot evidence report created");
    goSection("dashboard");
    if ($("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} completed and evidence was added below.`;
    return;
  }
  if (button.dataset.simpleDemo === "wow") {
    await runWowDemo();
    if ($("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} completed. Review the demo storyboard and evidence.`;
    return;
  }
  if (button.dataset.simpleMission === "full") {
    await runJarvisFullMission();
    if ($("#simpleActionStatus")) $("#simpleActionStatus").textContent = `${label} sent to the agent command center. Review the plan, execution, and evidence.`;
    return;
  }
  const latest = (data.profile.agentCommands || [])[0];
  if (latest?.metadata?.redirectSection && !latest?.metadata?.workflowDeferred) goSection(latest.metadata.redirectSection);
  else goSection("dashboard");
  if (status) status.textContent = latest?.response || "Returned to the dashboard. Choose a workflow to continue.";
}

function renderLoginProfiles() {
  const target = $("#loginProfiles");
  if (!target) return;
  target.innerHTML = demoLoginProfiles.map(profile => `
    <button class="login-profile" type="button" data-login-email="${profile.email}" data-login-label="${profile.label}">
      <strong>${profile.label}</strong>
      <span>${profile.role}</span>
    </button>
  `).join("");
  target.querySelectorAll("[data-login-email]").forEach(button => {
    button.addEventListener("click", () => {
      $("#email").value = button.dataset.loginEmail;
      $("#password").value = "";
      $("#password").focus();
      $("#loginMessage").textContent = `${button.dataset.loginLabel || "Profile"} selected. Type the password to enter.`;
    });
  });
  captureOriginalText(target);
}

async function startGuestUserSession() {
  const guestName = String($("#guestName")?.value || "").replace(/\s+/g, " ").trim();
  const loginLanguage = localStorage.getItem("agrinexusLoginLanguage") || "en";
  if (!guestName) {
    $("#loginMessage").textContent = translateText("Please type your name so Nexus can greet you.");
    $("#guestName")?.focus();
    return;
  }
  localStorage.setItem("agrinexusGuestDisplayName", guestName.slice(0, 80));
  $("#loginMessage").textContent = `${translateText("Hello")} ${guestName.split(/\s+/)[0]}. ${translateText("Nexus is opening your workspace.")}`;
  try {
    data = await request("/api/login", { method: "POST", body: { email: "user@agrinexus.org", password: "User2026!" } });
    if (data?.user) data.user.name = guestName.slice(0, 80);
    if (loginLanguage && loginLanguage !== data?.user?.language) {
      data = await request("/api/user/language", { method: "POST", body: { language: loginLanguage } });
      if (data?.user) data.user.name = guestName.slice(0, 80);
    }
    await loadPublicMapConfig();
    render();
    startAskNexusAfterLogin();
    toast(`Hello ${userFirstName()}`);
  } catch (error) {
    $("#loginMessage").textContent = error.message;
  }
}

async function runVoiceTextCommand() {
  const input = $("#voiceTextCommand");
  await handleVoiceCommand(input?.value || "");
}

async function runGlobalCommand() {
  const input = $("#globalCommandInput");
  setCommandInputs(input?.value || "");
  const command = input?.value || "";
  if (!String(command || "").trim()) {
    clearLevelOneAgentActionSuggestionLabel();
    setVoiceResponse("Type a request for Nexus, then run the command.", false, { allowVoiceFirst: false });
    return;
  }
  const rawLowerCommand = String(command || "").toLowerCase().trim();
  const lowerCommand = normalizeToolText(command);
  const typedGlobalVoiceOn = ((rawLowerCommand.includes("unmute") || rawLowerCommand.includes("voice on")) && /\b(nexus|agrinexus|voice)\b/.test(rawLowerCommand))
    || /^(unmute nexus|unmute agrinexus|nexus unmute|agrinexus unmute|voice on|turn voice on|talk again|speak again|end quiet mode)$/.test(lowerCommand);
  const typedGlobalVoiceOff = ((rawLowerCommand.includes("mute") || rawLowerCommand.includes("quiet")) && !rawLowerCommand.includes("unmute") && /\b(nexus|agrinexus|voice|quiet)\b/.test(rawLowerCommand))
    || /^(mute nexus|mute agrinexus|nexus mute|agrinexus mute|go quiet|demo quiet|quiet mode|stop talking)$/.test(lowerCommand);
  if (typedGlobalVoiceOn || isExplicitNexusVoiceOnCommand(command) || isNexusVoiceOnCommand(command)) {
    voiceConversationPaused = false;
    enableNexusVoiceForDemo("Nexus voice is back on. Say Nexus, then tell me what you need.", { skipListeningStart: true });
    renderTypedGlobalVoiceControlConfirmation("Nexus voice is back on. Say Nexus, then tell me what you need.");
    return;
  }
  if (typedGlobalVoiceOff || isExplicitNexusVoiceOffCommand(command) || isNexusVoiceOffCommand(command)) {
    disableNexusVoiceForDemo("Demo quiet mode is on. Nexus voice is off until you turn it back on.");
    renderTypedGlobalVoiceControlConfirmation("Demo quiet mode is on. Nexus voice is off until you turn it back on.");
    return;
  }
  if (/\b(play music from kenya|play kenyan music|kenya music|kenya-inspired music)\b/.test(`${rawLowerCommand} ${lowerCommand}`)) {
    const kenyaMusicResponse = "Absolutely. I'll play a Kenya-inspired demo rhythm. This is local browser-generated audio, and I'm not opening an outside music service.";
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    renderLiveVoiceSuggestions(["stop music", "open learning", "what can you do"]);
    updateNexusBehaviorLayer("answering", "Nexus started a local browser-generated Kenya-inspired rhythm without opening an outside service.");
    setVoiceResponse(kenyaMusicResponse, true, { allowHandoff: false, command, source: "phase-17-global-kenya-music" });
    setTimeout(() => {
      setVoiceResponse(kenyaMusicResponse, true, { allowHandoff: false, command, source: "phase-17-global-kenya-music" });
    }, 150);
    void playNexusMusicTestAudio("Kenya-inspired demo rhythm").finally(() => {
      setVoiceResponse(kenyaMusicResponse, true, { allowHandoff: false, command, source: "phase-17-global-kenya-music" });
    });
    return;
  }
  if (handleNexusStandardUserSafeTypedCommand(command)) return;
  const phase17SafeAnswer = nexusPhase17StandardUserSafeAnswer(command);
  if (phase17SafeAnswer) {
    pendingAgentClarification = null;
    pendingNexusSpokenCommand = null;
    renderLiveVoiceSuggestions(phase17SafeAnswer.suggestions || ["what providers can you connect to", "what data sources do you need", "what needs approval"]);
    updateNexusBehaviorLayer("answering", "Nexus answered a Phase 17 prototype-foundation prompt without executing an action.");
    setVoiceResponse(phase17SafeAnswer.response, true, { allowHandoff: false, command, source: "phase-17-global-command" });
    if (phase17SafeAnswer.localMusic) {
      setTimeout(() => {
        setVoiceResponse(phase17SafeAnswer.response, true, { allowHandoff: false, command, source: "phase-17-global-command" });
      }, 150);
      void playNexusMusicTestAudio("Kenya-inspired demo rhythm").finally(() => {
        setVoiceResponse(phase17SafeAnswer.response, true, { allowHandoff: false, command, source: "phase-17-global-command" });
      });
    }
    return;
  }
  await handleVoiceCommand(command);
}

function isNexusVoiceDemoHighRiskPrompt(command = "") {
  const lower = normalizeToolText(command);
  if (!lower) return false;
  if (isNexusVoiceDemoEmergencyPrompt(command)) return true;
  if (isNexusVoiceDemoHealthAccessPrompt(command)) return false;
  return /\b(call|phone|dial|text|message|whatsapp|telegram|sms|email|contact|send|camera|video|microphone|location|locate|gps|buy|sell|purchase|payment|pay|checkout|account|login|identity|verify|appointment|schedule|doctor|provider|telehealth|emergency|dispatch|ambulance|diagnose)\b/.test(lower);
}

function nexusVoiceDemoSafeSection(command = "") {
  const lower = normalizeToolText(command);
  if (isNexusVoiceDemoHealthAccessPrompt(command)) return "health";
  if (/\b(training|course|learn|lesson|teach|irrigation|certificate)\b/.test(lower)) return "learning";
  if (/\b(job|jobs|work|career|workforce|skills)\b/.test(lower)) return "workforce";
  if (/\b(agritrade|marketplace|trade|browse)\b/.test(lower)) return "trade";
  if (/\b(crop|crops|farm|field|soil|pest|irrigation)\b/.test(lower)) return "trade";
  return "";
}

function isNexusVoiceDemoEmergencyPrompt(command = "") {
  const lower = normalizeToolText(command);
  return /\b(emergency|ambulance|cannot breathe|can't breathe|cant breathe|chest pain|not breathing|stroke|heart attack)\b/.test(lower);
}

function isNexusVoiceDemoHealthExecutionPrompt(command = "") {
  const lower = normalizeToolText(command);
  return /\b(call my doctor|call the doctor|contact (a )?(doctor|provider|clinic|pharmacy)|send my medical|send medical|medical records?|health records?|refill my prescription|refill prescription|submit (a )?refill|request (a )?refill|tell the pharmacy|change medication|schedule (my )?(appointment|visit)|book (an )?appointment|send my location|share my location|telehealth video|video call|provider video|open video|show injury|camera preview|use (my )?camera|open (the )?camera|dispatch (a )?mobile clinic|diagnose|diagnosis)\b/.test(lower);
}

function isNexusVoiceDemoHealthAccessPrompt(command = "") {
  const lower = normalizeToolText(command);
  if (isNexusVoiceDemoEmergencyPrompt(command) || isNexusVoiceDemoHealthExecutionPrompt(command)) return false;
  return /\b(telehealth|mobile clinic|pharmacy support|pharmacy access|medication|medicine|refill request|rural health|access care|care access|care navigation|community health|doctor.*transportation|transportation.*(doctor|care|clinic)|prepare.*telehealth|health workflow|health access)\b/.test(lower);
}

function nexusVoiceDemoHealthAccessResponse(command = "") {
  const lower = normalizeToolText(command);
  if (isNexusVoiceDemoEmergencyPrompt(command)) {
    return "If this may be an emergency, call local emergency services now. I cannot dispatch emergency help in this demo.";
  }
  if (isNexusVoiceDemoHealthExecutionPrompt(command)) {
    return "For safety, I cannot complete that healthcare action automatically. I can help you review what would be needed before anything is shared, scheduled, sent, submitted, or contacted.";
  }
  if (/\b(telehealth|prepare.*telehealth)\b/.test(lower)) {
    return "Nexus can help with telehealth access. I can guide you through the information usually needed for a visit and prepare a safe next-step review. I have not scheduled an appointment or contacted a provider.";
  }
  if (/\b(mobile clinic|rural health|community health)\b/.test(lower)) {
    return "I can help you review mobile clinic and rural health access options. In this demo, I can prepare next steps, but I will not request your location, contact a clinic, or dispatch services.";
  }
  if (/\b(pharmacy|medication|medicine|refill request)\b/.test(lower)) {
    return "I can help you review pharmacy access steps, refill questions, or transportation needs. I have not submitted a refill, and I cannot request, change, or submit medication orders in this demo.";
  }
  if (/\b(transportation|ride|access care|care access|care navigation|doctor)\b/.test(lower)) {
    return "I can help you think through care access and transportation options. I have not shared your location, contacted anyone, scheduled an appointment, or scheduled a ride.";
  }
  return "I can help with health access navigation. This demo prepares safe review-only next steps and does not contact providers, share information, schedule care, request location, or complete healthcare actions.";
}

function nexusVoiceDemoIntroResponse() {
  return "Good morning. I am Nexus, your voice-operated access assistant. I'm ready to help with telehealth, pharmacy support, mobile clinic access, transportation-to-care, workforce resources, and agriculture services. How can I assist you today?";
}

function nexusVoiceDemoShellResponse(command = "") {
  const lower = normalizeToolText(command);
  if (!lower || /\b(good morning|hello|hi|hey)\b/.test(lower)) {
    return nexusVoiceDemoIntroResponse();
  }
  if (isNexusVoiceDemoEmergencyPrompt(command) || isNexusVoiceDemoHealthExecutionPrompt(command) || isNexusVoiceDemoHealthAccessPrompt(command)) {
    return nexusVoiceDemoHealthAccessResponse(command);
  }
  if (isNexusVoiceDemoHighRiskPrompt(command)) {
    return "I can prepare that request, but I will not execute calls, messages, location, camera, payments, health, emergency, provider, or account actions from voice. Use the visible confirmation and provider flow when it is ready.";
  }
  if (/\b(training|course|agriculture training)\b/.test(lower)) {
    return "I can help with agriculture training. This is a safe preview path; review the Learning options before taking any action.";
  }
  if (/\b(irrigation|teach|lesson|learn)\b/.test(lower)) {
    return "I can teach that in Learning. This is preview only, with no workflow execution or hidden action.";
  }
  if (/\b(job|jobs|career|workforce)\b/.test(lower)) {
    return "I found the jobs and workforce path. Nexus can preview roles and readiness, but it will not apply or contact anyone automatically.";
  }
  if (/\b(agritrade|marketplace|trade|browse)\b/.test(lower)) {
    return "AgriTrade can be reviewed as a marketplace module. This voice demo opens browse context only; it does not buy, sell, pay, or contact a buyer.";
  }
  if (/\b(crop|crops|farm|field|soil|pest)\b/.test(lower)) {
    return "I can help with crop and field support. This is guidance only; no camera, location, diagnosis, sale, or provider handoff starts automatically.";
  }
  return "I can help with that. In this demo, Nexus gives a safe preview and waits for visible controls before any important action.";
}

function installNexusVoiceDemoShellBridge() {
  // public/nexus-voice-demo-shell.js binds [data-nexus-voice-demo-prompt] controls to safe response-only demo handling.
  window.NexusVoiceDemoShellBridge = {
    async submitSafeTranscript(command = "", options = {}) {
      const transcript = String(command || "").trim();
      setCommandInputs(transcript);
      const response = nexusVoiceDemoShellResponse(transcript);
      const blocked = isNexusVoiceDemoHighRiskPrompt(transcript);
      const route = window.NexusVoiceTextIntentRouter?.routeNexusIntent?.(transcript) || null;
      const lowRiskAssistantRoute = route
        && route.executionAllowed === false
        && route.sideEffectsAllowed === false
        && route.providerContactAllowed === false
        && route.messageAllowed === false
        && route.callAllowed === false
        && route.locationAllowed === false
        && route.cameraMediaAllowed === false
        && route.paymentAllowed === false
        && route.medicalActionAllowed === false
        && route.emergencyDispatchAllowed === false
        && route.riskLevel === "low"
        && (route.reviewOnlyAllowed === true || route.informationalAllowed === true);
      if (!blocked && lowRiskAssistantRoute && await runStandardUserAssistantRuntimePreview(transcript, {
        source: options.source || "voice-demo-shell"
      })) {
        return {
          response: assistantRuntimePreviewText(assistantRuntimePreviewCard) || response,
          blocked: false,
          section: "",
          intentDomain: route.intentDomain,
          routeStatus: route.routeStatus,
          assistantRuntimePreview: true,
          executionAllowed: false,
          providerHandoff: false,
          permissionRequested: false
        };
      }
      setVoiceResponse(response, false, { allowVoiceFirst: false, allowHandoff: false, source: "voice-demo-shell", command: transcript });
      updateNexusBehaviorLayer(blocked ? "guarded" : "ready", response);
      return {
        response,
        blocked,
        section: "",
        intentDomain: route?.intentDomain || "",
        routeStatus: route?.routeStatus || "",
        assistantRuntimePreview: false,
        executionAllowed: false,
        providerHandoff: false,
        permissionRequested: false
      };
    },
    showResponse(message = "", options = {}) {
      const response = String(message || "").trim() || "Nexus is ready.";
      if (options.blocked === true) clearControlledActionPreview("voice-demo-shell-blocked-response");
      setVoiceResponse(response, false, { allowVoiceFirst: false, allowHandoff: false, source: "voice-demo-shell" });
      updateNexusBehaviorLayer("ready", response);
      return { response, executionAllowed: false };
    },
    isHighRiskPrompt: isNexusVoiceDemoHighRiskPrompt
  };
}

installNexusVoiceDemoShellBridge();

async function runJarvisCommand() {
  const input = $("#jarvisCommandInput");
  const command = input?.value || "";
  setCommandInputs(command);
  await handleVoiceCommand(command);
}

async function runWorkflowVoiceResponse() {
  const input = $("#workflowVoiceInput");
  const command = input?.value || "";
  setCommandInputs(command);
  await handleVoiceCommand(command);
}

async function runJarvisFullMission() {
  const mission = "AgriNexus, run full mission for learning, workforce, accessible telehealth, trade, drone, maps, AI, translation, and provider evidence";
  setCommandInputs(mission);
  await handleVoiceCommand(mission);
}

async function startFarmerAutopilotMission() {
  const mission = "AgriNexus autopilot, help this farmer get from crop problem to buyer payment";
  setCommandInputs(mission);
  openAskNexus();
  await handleVoiceCommand(mission);
}

async function resumeNextMission() {
  const plan = (data.profile.agentPlans || []).find(item => item.status === "awaiting-approval") || (data.profile.agentPlans || [])[0];
  if (!plan) {
    setVoiceResponse("No mission is waiting. Start an autopilot mission first.", true);
    return;
  }
  await executeAgentPlan();
}

function scheduleVoiceRecovery(message = "I did not hear speech. I am still listening.", options = {}) {
  const recoverable = options.recoverable !== false;
  const delay = Number(options.delay || VOICE_RESTART_DELAY_MS);
  const translated = translateText(message);
  lastVoiceResponse = translated;
  setVoiceStatus(voiceFirstMode && recoverable ? "voice-first" : "standby");
  ["#globalAssistantStatus", "#globalVoiceOutputStatus", "#voiceTranscript", "#jarvisSummary"].forEach(selector => {
    const element = $(selector);
    if (element) element.textContent = translated;
  });
  updateUserCaptionPanel(translated, { expanded: true });
  updateNexusBehaviorLayer(recoverable ? "listening" : "standby", message);
  refreshMicSupport();
  if (!recoverable || !voiceFirstMode || voiceConversationPaused || document.hidden) return;
  voiceStopRequested = false;
  voiceAutoRestart = true;
  setTimeout(() => {
    if (!voiceRecognition && voiceFirstMode && voiceAutoRestart && !voiceSpeaking && !voiceStopRequested && !document.hidden) {
      startVoiceListening();
    }
  }, delay);
}

function processFinalVoiceCommand(command = "", options = {}) {
  const finalCommand = normalizeVoicePartial(command);
  if (!finalCommand) return;
  if (!nexusGenesisExperienceActivated || !nexusTrueExperienceSessionStarted) {
    nexusGenesisExperienceActivated = true;
    nexusTrueExperienceSessionStarted = true;
    setNexusCoreState("processing", { source: "voice-final-transcript", statusText: "Nexus heard you." });
  }
  clearStreamingVoicePartial();
  markNexusUserSpeechFinal(finalCommand, nexusVoiceTurnToken + 1);
  setNexusGenesisTrustChainState("transcript_finalized", {
    transcript: finalCommand,
    visibleFeedback: `I heard: ${finalCommand}`,
    reason: "voice-final-transcript"
  });
  recordGenesisSpokenResponsePipelineEvent("transcript-finalized", {
    correlationId: activeGenesisVoiceCorrelationId || "",
    success: true,
    sourceFunction: "processFinalVoiceCommand"
  });
  updateNativeVoiceBridgeState("final", { transcript: finalCommand, source: options.source || "voice" });
  if (voiceSpeaking) {
    if (isLikelyNexusSelfEcho(finalCommand)) return;
    stopVoicePlayback({ hard: true, reason: "new-final-command" });
    updateNexusBehaviorLayer("listening", "Nexus stopped speaking because it heard a new user phrase.");
    const outputStatus = $("#globalVoiceOutputStatus");
    if (outputStatus) outputStatus.textContent = translateText("I stopped. Listening to your new phrase.");
  }
  setCommandInputs(finalCommand);
  const localizedCommand = normalizeLocalizedVoiceCommand(finalCommand);
  const cleanedCommand = cleanWakeCommand(localizedCommand);
  const stopRedirect = postStopRedirectCommand(cleanedCommand || localizedCommand || finalCommand);
  if (voiceConversationPaused) {
    const resumeCommand = isNexusResumeListeningCommand(localizedCommand || finalCommand);
    const explicitWake = isExplicitNexusWakeOrCommand(localizedCommand || finalCommand);
    if (!resumeCommand && !explicitWake) {
      setVoiceStatus("paused");
      updateNativeVoiceBridgeState("paused", { transcript: finalCommand });
      return;
    }
    leaveNexusConversationPause("Nexus heard you. I am listening again.");
    if (resumeCommand || isWakePhraseOnly(localizedCommand) || isNexusGreetingOnly(localizedCommand)) {
      setVoiceResponse(nexusConversationalWake(isNexusGreetingOnly(localizedCommand) ? "hello" : "wake", localizedCommand), true, { allowHandoff: false });
      return;
    }
  }
  if (isGlobalStopCommand(String(cleanedCommand || localizedCommand || finalCommand).toLowerCase())) {
    if (isStopAndContinueWorkingCommand(cleanedCommand || localizedCommand || finalCommand)) {
      stopNexusAndReturnToWork("Stopped. Nexus is closed so you can continue working.");
      return;
    }
    enterNexusConversationPause("Stopped. Nexus is paused and will ignore background conversation until you say Nexus again.");
    if (stopRedirect) {
      leaveNexusConversationPause("Nexus heard your next instruction after stop.");
      setTimeout(() => {
        setCommandInputs(stopRedirect);
        void handleVoiceCommand(stopRedirect);
      }, VOICE_POST_STOP_REDIRECT_DELAY_MS);
    }
    return;
  }
  if (isLikelySideConversationWithoutNexusCommand(cleanedCommand || localizedCommand || finalCommand)) {
    pauseNexusForSideConversation(cleanedCommand || localizedCommand || finalCommand);
    return;
  }
  const turnToken = beginNexusVoiceTurn(cleanedCommand || localizedCommand || finalCommand);
  setNexusGenesisTrustChainState("conversation_submitted", {
    transcript: cleanedCommand || localizedCommand || finalCommand,
    visibleFeedback: "Nexus heard you. One moment.",
    reason: "conversation-submitted"
  });
  setVoiceStatus("thinking");
  updateNativeVoiceBridgeState("thinking", { transcript: cleanedCommand || localizedCommand || finalCommand, turnToken });
  updateNexusBehaviorLayer("thinking", "Nexus heard you and is preparing the next response.");
  const outputStatus = $("#globalVoiceOutputStatus");
  if (outputStatus) outputStatus.textContent = translateText("Nexus heard you. One moment.");
  if (isNexusConversationOnlyTrustChainInput(cleanedCommand || localizedCommand || finalCommand)) {
    const response = nexusConversationOnlyTrustChainResponse(cleanedCommand || localizedCommand || finalCommand);
    setVoiceResponse(response, true, {
      allowHandoff: false,
      command: cleanedCommand || localizedCommand || finalCommand,
      source: "genesis-trust-chain-conversation-only",
      turnToken
    });
    return;
  }
  setNexusGenesisTrustChainState("response_pending", {
    transcript: cleanedCommand || localizedCommand || finalCommand,
    visibleFeedback: "Nexus is preparing the right response.",
    reason: "response-pending"
  });
  recordNexusAudioPipelineEvent("agent-command-request", {
    source: options.source || "voice",
    commandSubmitted: true
  });
  nexusGenesisVoiceDebugLog("command-submitted", {
    source: options.source || "voice",
    transcriptLength: String(cleanedCommand || localizedCommand || finalCommand).length
  });
  request("/api/voice/transcribe", { method: "POST", body: { transcript: finalCommand, language: languageCode(), locale: voiceLocale() } }).catch(() => {});
  const submittedCommand = cleanedCommand || localizedCommand || finalCommand;
  if (realtimeVoiceActive()) {
    nexusGenesisVoiceDebugLog("legacy-transcript-ignored-realtime-active", {
      source: options.source || "voice",
      transcriptLength: String(submittedCommand || "").length,
      activeRuntime: "realtime"
    });
    updateRealtimeControllerState("listening", "legacy-transcript-ignored-realtime-active", {
      fallbackState: "blocked-duplicate-legacy-transcript"
    });
    return;
  }
  if (shouldBypassLegacyPlannerForRealtimeFallback()) {
    nexusGenesisVoiceDebugLog("legacy-transcript-routed-openai-native-fallback", {
      source: options.source || "voice",
      transcriptLength: String(submittedCommand || "").length,
      activeRuntime: "realtime-unconfirmed"
    });
    updateRealtimeControllerState("failed", "realtime-unconfirmed-fallback-to-backend-responses", {
      fallbackState: "backend-openai-responses",
      legacyPlannerBypassed: true
    });
    runBackendAgentCommand(submittedCommand, null, {
      source: "voice-realtime-unconfirmed-backend-responses",
      turnToken
    }).catch(error => voiceErrorRecovery(error, submittedCommand));
    return;
  }
  handleVoiceCommand(finalCommand, { source: "voice", turnToken });
}

function scheduleFinalVoiceCommand(command = "", options = {}) {
  const finalCommand = normalizeVoicePartial(command);
  if (!finalCommand) return;
  const signature = finalCommand.toLowerCase().replace(/\s+/g, " ").trim();
  const now = Date.now();
  if (signature && signature === nexusVoiceLastSubmittedSignature && now - nexusVoiceLastSubmittedAt < 4500) {
    recordNexusAudioPipelineEvent("duplicate-transcript-prevented", {
      transcript: finalCommand,
      source: options.source || "voice"
    });
    return;
  }
  nexusVoiceLastSubmittedSignature = signature;
  nexusVoiceLastSubmittedAt = now;
  recordNexusAudioPipelineEvent("final-transcript-scheduled", {
    transcript: finalCommand,
    source: options.source || "voice",
    commandSubmitted: true
  });
  clearTimeout(voiceFinalDebounceTimer);
  voiceFinalDebounceTimer = setTimeout(() => {
    voiceFinalDebounceTimer = null;
    processFinalVoiceCommand(finalCommand, options);
  }, Number(options.delay ?? VOICE_FINAL_DEBOUNCE_MS));
}

async function startVoiceRuntimeTransport(options = {}) {
  const source = options.source || "nexus-os-voice-runtime";
  if (voiceDemoQuietMode) {
    markNexusListeningControllerEvent("typed-fallback", { inputMode: "typed-fallback" });
    updateNexusOsVoiceRuntimeState({ mode: "muted", listeningState: "idle", hearingState: "idle" }, source);
    setVoiceStatus("standby");
    refreshMicSupport();
    showNexusVoiceFallbackMessage("Nexus voice is muted. Captions remain available; unmute or allow microphone access to continue by voice.", {
      source: "voice-text-only-mode",
      mode: "typed-fallback",
      trustChainState: "recognition_unavailable"
    });
    return;
  }
  if (options.runtimeOnly !== "legacy") {
    nexusOsVoiceStartInFlight = true;
    try {
      const started = await startRealtimeVoiceSession({
        managedRuntime: options.managedRuntime === true,
        recovery: options.recovery === true,
        source
      });
      nexusOsVoiceStartInFlight = false;
      if (!started || !realtimeVoiceActive()) {
        updateNexusOsVoiceRuntimeState({
          mode: "realtime-blocked",
          listeningState: "blocked",
          hearingState: "idle",
          lastError: "openai-realtime-not-connected"
        }, source);
        setNexusGenesisTrustChainState("recognition_failed", {
          visibleFeedback: "OpenAI Realtime did not connect to a live microphone track.",
          failureRecovery: "Check OpenAI Realtime credentials, model access, browser microphone permission, and HTTPS deployment.",
          reason: "openai-realtime-not-connected"
        });
        refreshMicSupport();
        return false;
      }
      return true;
    } catch (error) {
      nexusOsVoiceStartInFlight = false;
      updateNexusOsVoiceRuntimeState({
        mode: "realtime-failed",
        listeningState: "blocked",
        hearingState: "idle",
        lastError: error.message || "openai-realtime-start-failed"
      }, source);
      setNexusGenesisTrustChainState("recognition_failed", {
        visibleFeedback: "OpenAI Realtime voice could not start.",
        failureRecovery: error.message || "Check OpenAI Realtime configuration and browser microphone permission.",
        reason: "openai-realtime-start-failed"
      });
      refreshMicSupport();
      return false;
    }
  }
  if (options.runtimeOnly === "legacy") {
    nexusOsVoiceStartInFlight = false;
    updateNexusOsVoiceRuntimeState({
      mode: "realtime-only",
      listeningState: "blocked",
      hearingState: "idle",
      lastError: "legacy-runtime-disabled"
    }, source);
    setNexusGenesisTrustChainState("recognition_failed", {
      visibleFeedback: "Nexus Genesis uses OpenAI Realtime voice only.",
      failureRecovery: "Use the permanent microphone control and Realtime configuration.",
      reason: "legacy-runtime-disabled"
    });
    refreshMicSupport();
    return false;
  }
  updateNexusOsVoiceRuntimeState({
    mode: "realtime-only",
    listeningState: "blocked",
    hearingState: "idle",
    lastError: "unreachable-voice-runtime-branch"
  }, source);
  setNexusGenesisTrustChainState("recognition_failed", {
    visibleFeedback: "Nexus Genesis uses OpenAI Realtime voice only.",
    failureRecovery: "Use the permanent microphone control and Realtime configuration.",
    reason: "unreachable-voice-runtime-branch"
  });
  refreshMicSupport();
  return false;
}

async function startVoiceListening(options = {}) {
  let manager = nexusGenesisVoiceRuntimeManager;
  if (!manager) {
    const policyPayload = await loadNexusGenesisVoiceRuntimePolicy();
    manager = initializeNexusGenesisVoiceRuntimeManager(policyPayload);
  }
  if (!manager) return startVoiceRuntimeTransport({ ...options, runtimeOnly: "realtime" });
  const supervisor = nexusGenesisConversationSupervisor || window.NexusGenesisConversationSupervisor;
  const result = supervisor
    ? await supervisor.start(options.source || "start-voice-listening")
    : await manager.startSession(options);
  if (!result?.ok && manager.getState().activeRuntime === "legacy") {
    return startVoiceRuntimeTransport({ ...options, runtimeOnly: "realtime", managedRuntime: true });
  }
  return result;
}

async function sendModuleNotification(moduleName) {
  await mutate("/api/notifications/send", {
    module: moduleName,
    channel: "workflow",
    message: `${moduleName} workflow update sent for operator review.`
  }, `${moduleName} notification sent`);
}

async function runExecutiveDemo() {
  await mutate("/api/demo/run", {}, "Full platform demo completed");
}

async function runWowDemo() {
  await mutate("/api/demo/wow", {}, "Investor proof run completed");
  goSection("dashboard");
}

function nexusProviderActivationCommandForAction(action = "", fallback = "") {
  const normalized = String(action || "").toLowerCase().trim();
  const commands = {
    "refresh-readiness": "Nexus, what is connected?",
    "test-selected-lane": "Nexus, test live knowledge.",
    "test-all-configured-lanes": "Nexus, test all providers.",
    "export-provider-readiness-report": "Nexus, show provider receipts.",
    "show-missing-credentials-checklist": "Nexus, what credentials are missing?",
    "show-live-ready-lanes-only": "Nexus, show live-ready services.",
    "show-blocked-lanes-only": "Nexus, what credentials are missing?",
    "test-live-knowledge": "Nexus, test live knowledge.",
    "test-maps-routing": "Nexus, test maps.",
    "test-weather-heat-risk": "Nexus, test weather.",
    "test-translation": "Nexus, test translation.",
    "test-communications-readiness": "Nexus, test SMS.",
    "test-telehealth-readiness": "Nexus, test telehealth.",
    "test-payment-readiness": "Nexus, test payments.",
    "test-lms-readiness": "Nexus, test LMS.",
    "test-drone-readiness": "Nexus, test drone.",
    "test-shipment-tracking-readiness": "Nexus, test shipment tracking.",
    "test-media-search-embed-readiness": "Nexus, test media search."
  };
  return commands[normalized] || fallback || "Nexus, what is connected?";
}

function handleNexusProviderActivationControlClick(event) {
  const target = event.target?.closest?.("[data-nexus-provider-readiness-action],[data-nexus-internet-service-test]");
  if (!target) return false;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation?.();
  const action = target.dataset.nexusProviderReadinessAction || target.dataset.nexusInternetServiceTest || "";
  const command = nexusProviderActivationCommandForAction(action, target.dataset.command || target.textContent || "");
  setCommandInputs(command);
  const input = $("#nexusCommandCenterInput");
  if (input) input.value = command;
  if (isNexusLiveKnowledgeQuestion(command)) {
    runNexusKnowledgeQuery(command).catch(error => {
      nexusKnowledgeActionStatus = error.message || "Knowledge rail action needs attention.";
      if (experienceMode === "user") renderUserWorkspace();
    });
    return true;
  }
  if (!runNexusStandardUserHomeLocalCommand(command)) {
    runNexusPersistentOperationsCommand(command, { source: "provider-activation-control" }).catch(error => {
      nexusAgenticBrainLastResult = {
        ok: false,
        status: "nexus_provider_activation_control_failed_safely",
        mode: "Provider activation",
        message: error.message || "Provider activation status needs attention.",
        preparedCards: [],
        noExecutionAuthorized: true,
        localOnly: true
      };
      renderUserWorkspace();
    });
  }
  return true;
}

function handleNexusDemoSandboxClick(event) {
  const target = event.target?.closest?.("[data-nexus-demo-action]");
  if (!target) return false;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation?.();
  const action = target.dataset.nexusDemoAction || "";
  if (action === "load") {
    seedNexusDemoData();
    return true;
  }
  if (action === "reset") {
    resetNexusDemoData();
    return true;
  }
  if (action === "show") {
    nexusDemoDataVisible = true;
    saveNexusDemoDataState();
    toast(nexusDemoDataState.loaded ? "Showing demo sandbox records." : "Demo data is ready to load.");
    renderUserWorkspace();
    return true;
  }
  if (action === "hide") {
    nexusDemoDataVisible = false;
    saveNexusDemoDataState();
    toast("Demo records hidden. Sandbox data remains separated and resettable.");
    renderUserWorkspace();
    return true;
  }
  return false;
}

function nexusDemoSandboxAction(action = "") {
  if (action === "load") {
    seedNexusDemoData();
    return true;
  }
  if (action === "reset") {
    resetNexusDemoData();
    return true;
  }
  if (action === "show") {
    nexusDemoDataVisible = true;
    saveNexusDemoDataState();
    toast(nexusDemoDataState.loaded ? "Showing demo sandbox records." : "Demo data is ready to load.");
    renderUserWorkspace();
    return true;
  }
  if (action === "hide") {
    nexusDemoDataVisible = false;
    saveNexusDemoDataState();
    toast("Demo records hidden. Sandbox data remains separated and resettable.");
    renderUserWorkspace();
    return true;
  }
  return false;
}

function openNexusDemoSandboxMission(missionId = "") {
  if (!nexusDemoDataState?.loaded) seedNexusDemoData();
  nexusDemoDataVisible = true;
  const missions = Array.isArray(nexusDemoDataState?.missions) ? nexusDemoDataState.missions : [];
  const mission = missions.find(item => item.id === missionId) || missions[0] || null;
  if (!mission) {
    toast("No demo mission is available yet. Load Demo Data first.");
    return false;
  }
  nexusActiveWorkflowState = {
    id: mission.id,
    command: mission.title || "Open demo mission",
    source: "demo-sandbox-mission-click",
    workflow: "demo-sandbox",
    action: "open-demo-mission",
    recordSource: "demo",
    demo: true,
    openedAt: Date.now()
  };
  nexusRecentWorkflows = [
    {
      id: mission.id,
      title: mission.title || "Demo mission",
      category: "demo-sandbox",
      status: mission.status || "local_prepared",
      summary: mission.goal || "Sandbox mission opened.",
      updatedAt: new Date().toISOString(),
      demo: true,
      recordSource: "demo"
    },
    ...nexusRecentWorkflows.filter(item => item.id !== mission.id)
  ].slice(0, 8);
  nexusAgenticBrainLastResult = {
    ok: true,
    status: "nexus_demo_sandbox_mission_opened",
    mode: "Demo Sandbox Mission",
    message: `${mission.title || "Demo mission"} is open. This is fictional sandbox data only; no external execution occurred.`,
    preparedCards: [{
      type: "demo_sandbox_mission",
      title: mission.title || "Demo mission",
      status: mission.status || "local_prepared",
      localOnly: true,
      noExecutionAuthorized: true,
      demo: true
    }],
    noExecutionAuthorized: true,
    localOnly: true,
    source: "nexus_demo_sandbox"
  };
  saveNexusDemoDataState();
  saveNexusRuntimeMemory();
  toast("Opened demo sandbox mission. No real external action occurred.");
  renderUserWorkspace();
  return true;
}

if (typeof window !== "undefined") {
  window.nexusDemoSandboxAction = nexusDemoSandboxAction;
  window.openNexusDemoSandboxMission = openNexusDemoSandboxMission;
}

function handleNexusStandardUserHomeClick(event) {
  if (experienceMode !== "user" && !document.body.classList.contains("user-mode")) return false;
  const interviewEventTarget = event.target?.closest ? event.target : event.target?.parentElement;
  const approvedMemoryAction = event.target?.closest?.("[data-nexus-approved-memory-action]");
  if (approvedMemoryAction) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    return handleNexusApprovedMemoryAction(approvedMemoryAction.dataset.nexusApprovedMemoryAction || "", approvedMemoryAction);
  }
  if (interviewEventTarget?.closest?.("[data-nexus-guided-save],[data-nexus-interview-skip],[data-nexus-interview-correct],[data-nexus-interview-review],[data-nexus-interview-cancel],[data-nexus-guided-back]")) {
    return handleNexusUserExperienceMaximizationClick(event);
  }
  const demoMission = event.target?.closest?.("[data-nexus-demo-mission-open]");
  if (demoMission) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    return openNexusDemoSandboxMission(demoMission.dataset.nexusDemoMissionOpen || "");
  }
  const auditFilter = event.target?.closest?.("[data-nexus-internet-audit-filter]");
  if (auditFilter) {
    event.preventDefault();
    event.stopPropagation();
    const filter = auditFilter.dataset.nexusInternetAuditFilter || "all";
    $$("[data-nexus-internet-audit-filter]").forEach(button => button.classList.toggle("active", button === auditFilter));
    $$("[data-nexus-internet-audit-mode]").forEach(card => {
      const status = card.dataset.nexusInternetAuditModeStatus || "";
      const risk = card.dataset.riskLevel || "";
      const text = card.innerText.toLowerCase();
      const show = filter === "all" ||
        status === filter ||
        (filter === "gaps" && !/\bgaps:\s*none\b/i.test(card.innerText)) ||
        (filter === "health" && text.includes("health")) ||
        (filter === "high" && risk === "high");
      card.hidden = !show;
    });
    return true;
  }
  const copyAuditReport = event.target?.closest?.("[data-nexus-internet-audit-copy-report]");
  if (copyAuditReport) {
    event.preventDefault();
    event.stopPropagation();
    const reportText = document.querySelector("[data-nexus-internet-audit-export] textarea")?.value || "";
    navigator.clipboard?.writeText?.(reportText).catch(() => {});
    toast("Internet Services Integration Audit report is ready to copy. No secrets are included.");
    return true;
  }
  if (handleNexusDemoSandboxClick(event)) return true;
  const eventTarget = event.target?.closest ? event.target : event.target?.parentElement;
  const userTestingAction = eventTarget?.closest?.("[data-nexus-user-testing-action]");
  if (userTestingAction) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    return runNexusUserTestingRuntimeAction(userTestingAction.dataset.nexusUserTestingAction || "refresh");
  }
  const agenticRuntimeAction = eventTarget?.closest?.("[data-nexus-agentic-runtime-action]");
  if (agenticRuntimeAction) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const action = agenticRuntimeAction.dataset.nexusAgenticRuntimeAction || "continue";
    if (action === "confirm") return confirmNexusAgenticMission("Confirm current mission.");
    if (action === "cancel") return cancelNexusAgenticMission("Cancel current mission.");
    if (action === "status") return showNexusAgenticMissionStatus("What happened?");
    return continueNexusAgenticMission("Continue current mission.");
  }
  const persistentOperationsShortcut = eventTarget?.closest?.("[data-nexus-mode-shortcut='operations-memory'],[data-nexus-mode-shortcut='learning-development'],[data-nexus-mode-shortcut='applicant-career'],[data-nexus-mode-shortcut='employer-hiring'],[data-nexus-mode-shortcut='drone-mission-support']");
  if (persistentOperationsShortcut) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const command = persistentOperationsShortcut.dataset.nexusCommand || "Show audit log";
    setCommandInputs(command);
    runNexusPersistentOperationsCommand(command, { source: "mode-click" }).catch(error => {
      nexusAgenticBrainLastResult = {
        ok: false,
        status: "nexus_operations_memory_error",
        mode: "Operations Memory",
        message: error.message || "Operations memory needs attention.",
        preparedCards: [],
        noExecutionAuthorized: true,
        localOnly: true
      };
      renderUserWorkspace();
    });
    return true;
  }
  if (eventTarget?.closest?.("[data-nexus-workflow-minimize]")) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    return minimizeNexusFunctionWindow();
  }
  if (eventTarget?.closest?.("[data-nexus-window-restore]")) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const restoreButton = eventTarget.closest("[data-nexus-window-restore]");
    return restoreNexusFunctionWindow(restoreButton?.dataset?.nexusFunctionWindowRestore || restoreButton?.dataset?.nexusModeShortcut || "");
  }
  if (eventTarget?.closest?.("[data-nexus-workflow-back]")) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    return closeNexusFunctionWindow({ command: "What can Nexus do?" });
  }
  if (eventTarget?.closest?.("[data-nexus-workflow-close]")) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    setCommandInputs("What can Nexus do?");
    return closeNexusFunctionWindow({ command: "What can Nexus do?" });
  }
  if (eventTarget?.closest?.("[data-nexus-global-offline-action]")) {
    return handleNexusGlobalOfflineAccessClick(event);
  }
  if (handleNexusProviderActivationControlClick(event)) return true;
  const universalProviderCard = eventTarget?.closest?.("[data-nexus-provider-readiness-route],[data-production-provider-readiness-id],[data-provider-account-api-access-id]");
  if (universalProviderCard) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    return routeNexusProviderReadinessCard({
      id: universalProviderCard.dataset.nexusProviderReadinessRoute
        || universalProviderCard.dataset.productionProviderReadinessId
        || universalProviderCard.dataset.providerAccountApiAccessId
        || "provider-readiness",
      name: universalProviderCard.textContent || "provider readiness"
    });
  }
  const universalSuggestion = eventTarget?.closest?.("[data-nexus-predictive-route],[data-nexus-predictive-index-card]");
  if (universalSuggestion) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    return routeNexusPredictiveSuggestion({
      id: universalSuggestion.dataset.nexusPredictiveRoute || universalSuggestion.dataset.nexusPredictiveIndexCard || "predictive-suggestion",
      command: universalSuggestion.dataset.nexusCommand || universalSuggestion.textContent || "What should I do next?"
    });
  }
  const universalSavedRecord = eventTarget?.closest?.("[data-nexus-saved-record-route],[data-nexus-memory-record-route]");
  if (universalSavedRecord) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    return routeNexusSavedRecordLink({
      id: universalSavedRecord.dataset.nexusSavedRecordRoute || universalSavedRecord.dataset.nexusMemoryRecordRoute || "saved-record",
      title: universalSavedRecord.dataset.nexusCommand || universalSavedRecord.textContent || "saved record"
    });
  }
  const submit = eventTarget?.closest?.("[data-nexus-command-center-submit]");
  if (submit) {
    const input = nexusCommandInputForSubmit(submit);
    const command = input?.value?.trim() || "What can Nexus do?";
    if (routeNexusCommandCenterCommunicationSubmit(event, submit, "typed-command-submit")) return true;
    if (isNexusGenesisAfricaAgOpportunityFallbackCommand(command)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      void handleNexusGenesisAfricaAgOpportunityCommandAsync(command, { source: "command-submit" });
      return true;
    }
    if (submitNexusAgenticCommandRuntime(command, input, "command-submit", event)) return true;
    if (isNexusPersistentOperationsCommand(command)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      runNexusPersistentOperationsCommand(command, { source: "command-submit" }).catch(error => {
        nexusAgenticBrainLastResult = {
          ok: false,
          status: "nexus_operations_memory_error",
          mode: "Operations Memory",
          message: error.message || "Operations memory needs attention.",
          preparedCards: [],
          noExecutionAuthorized: true,
          localOnly: true
        };
        renderUserWorkspace();
      });
      return true;
    }
    if (launchCapabilityFromAskNexus(command)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      return true;
    }
    if (isNexusVirtualCareTelehealthCommand(command)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      runNexusVirtualCareTelehealthCommand(command).catch(error => {
        nexusAgenticBrainLastResult = {
          ok: false,
          status: "nexus_virtual_care_telehealth_failed_safely",
          message: error.message || "Virtual care telehealth status is unavailable.",
          preparedCards: [],
          noExecutionAuthorized: true
        };
        renderUserWorkspace();
      });
      return true;
    }
    if (isNexusExplicitActivationWorkflowCommand(command) && runNexusStandardUserHomeLocalCommand(command)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      return true;
    }
    if (isNexusLiveKnowledgeQuestion(command)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      runNexusKnowledgeQuery(command).catch(error => {
        nexusKnowledgeActionStatus = error.message || "Knowledge rail action needs attention.";
        if (experienceMode === "user") renderUserWorkspace();
      });
      return true;
    }
    if (!runNexusStandardUserHomeLocalCommand(command)) return false;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    if (input) input.value = command;
    setCommandInputs(command);
    return true;
  }
  const shortcut = eventTarget?.closest?.("[data-nexus-mode-shortcut]");
  if (!shortcut) return false;
  const modeId = shortcut.dataset.nexusModeShortcut || "";
  const command = shortcut.dataset.nexusCommand || "";
  const normalizedModeId = String(modeId || "").toLowerCase().replace(/^sidebar-/, "").replace(/^core-/, "");
  if (normalizedModeId === "home") {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    nexusActiveWorkflowState = null;
    nexusAgenticBrainLastResult = buildNexusCapabilityOverviewResult(command || "What can Nexus do?");
    saveNexusRuntimeMemory();
    setCommandInputs(command || "What can Nexus do?");
    renderUserWorkspace();
    return true;
  }
  if (normalizedModeId === "settings" || modeId === "language") {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const input = $("#nexusCommandCenterInput");
    if (input) input.value = command || "Nexus, show language and safety settings.";
    setCommandInputs(command || "Nexus, show language and safety settings.");
    const panel = $("#userLanguagePanel");
    if (panel) panel.classList.remove("hidden");
    nexusActiveWorkflowState = {
      id: "resource-assistant",
      command: command || "Nexus, show language and safety settings.",
      source: "mode-click",
      workflow: "settings",
      action: "show-settings",
      openedAt: Date.now()
    };
    saveNexusRuntimeMemory();
    nexusAgenticBrainLastResult = {
      ok: true,
      status: "nexus_settings_panel_opened",
      mode: "Nexus settings",
      message: "Language and safety settings are open. No external action was executed.",
      preparedCards: [{ type: "settings_panel", title: "Language and safety settings", status: "local panel open", localOnly: true }],
      noExecutionAuthorized: true,
      localOnly: true,
      source: "standard_user_home"
    };
    renderUserWorkspace();
    $("#userLanguagePanel")?.classList.remove("hidden");
    scheduleNexusActiveWorkflowFocus({ instant: true });
    return true;
  }
  if (normalizedModeId === "activation-center") {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    setCommandInputs(command || "Show activation status");
    nexusActiveWorkflowState = {
      id: "resource-assistant",
      command: command || "Show activation status",
      source: "mode-click",
      workflow: "activation-center",
      action: "show-status",
      openedAt: Date.now()
    };
    saveNexusRuntimeMemory();
    nexusAgenticBrainLastResult = {
      ok: true,
      status: "nexus_activation_center_opened",
      mode: "Activation Center",
      message: "Activation status is open in Review workspace details. Live actions remain credential, consent, confirmation, and audit gated.",
      preparedCards: [{ type: "activation_center", title: "Activation Center", status: "local status open", localOnly: true }],
      noExecutionAuthorized: true,
      localOnly: true,
      source: "standard_user_home"
    };
    renderUserWorkspace();
    scheduleNexusActiveWorkflowFocus({ instant: true });
    return true;
  }
  if (["operations-memory", "learning-development", "applicant-career", "employer-hiring", "drone-mission-support"].includes(normalizedModeId)) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const operationsCommand = command || "Show audit log";
    const input = $("#nexusCommandCenterInput");
    if (input) input.value = operationsCommand;
    setCommandInputs(operationsCommand);
    runNexusPersistentOperationsCommand(operationsCommand, { source: "mode-click" }).catch(error => {
      nexusAgenticBrainLastResult = {
        ok: false,
        status: "nexus_operations_memory_error",
        mode: "Operations Memory",
        message: error.message || "Operations memory needs attention.",
        preparedCards: [],
        noExecutionAuthorized: true,
        localOnly: true
      };
      renderUserWorkspace();
    });
    return true;
  }
  const clickedCapability = resolveNexusCapability(command, { modeId });
  if (clickedCapability) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const input = $("#nexusCommandCenterInput");
    if (input) input.value = command || clickedCapability.title;
    setCommandInputs(command || clickedCapability.title);
    return openNexusCapability(clickedCapability.id, { command: command || clickedCapability.title, source: "mode-click", sourceSurface: "standard_user_click" });
  }
  const normalizedWorkflowId = normalizeNexusWorkflowId(modeId, command);
  if (normalizedWorkflowId === "media") {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const input = $("#nexusCommandCenterInput");
    if (input) input.value = command || "Play music.";
    setCommandInputs(command || "Play music.");
    return openNexusWorkflow("media", { command: command || "Play music.", source: "mode-click" });
  }
  if (nexusWorkflowDefinition(normalizedWorkflowId, command)) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const input = $("#nexusCommandCenterInput");
    if (input) input.value = command;
    setCommandInputs(command);
    return openNexusWorkflow(normalizedWorkflowId, { command, source: "mode-click" });
  }
  if (!runNexusStandardUserHomeLocalCommand(command)) return false;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation?.();
  const input = $("#nexusCommandCenterInput");
  if (input) input.value = command;
  setCommandInputs(command);
  return true;
}

function nexusHandleStandardUserHomeShortcut(event) {
  return handleNexusStandardUserHomeClick(event);
}

function handleNexusUserExperienceMaximizationClick(event) {
  const target = event.target;
  const operationsAction = target?.closest?.("[data-nexus-operations-action]");
  if (operationsAction) {
    event.preventDefault();
    event.stopPropagation();
    const action = operationsAction.dataset.nexusOperationsAction || "status";
    runNexusPersistentOperationsCommand(action.replace(/_/g, " "), {
      action,
      source: "operations-action-button"
    }).catch(error => {
      nexusAgenticBrainLastResult = {
        ok: false,
        status: "nexus_operations_memory_error",
        mode: "Operations Memory",
        message: error.message || "Operations memory needs attention.",
        preparedCards: [],
        noExecutionAuthorized: true,
        localOnly: true
      };
      renderUserWorkspace();
    });
    return true;
  }
  const recent = target?.closest?.("[data-nexus-recent-workflow]");
  if (recent) {
    event.preventDefault();
    event.stopPropagation();
    const id = recent.dataset.nexusRecentWorkflow || recent.dataset.nexusModeShortcut || "";
    return openNexusWorkflow(id, { command: recent.dataset.nexusCommand || `Continue ${id}`, source: "recent-workflow" });
  }
  const lowBandwidth = target?.closest?.("[data-nexus-low-bandwidth-toggle]");
  if (lowBandwidth) {
    event.preventDefault();
    event.stopPropagation();
    nexusLowBandwidthMode = !nexusLowBandwidthMode;
    document.body.classList.toggle("nexus-low-bandwidth-mode", nexusLowBandwidthMode);
    saveNexusRuntimeMemory();
    nexusAgenticBrainLastResult = {
      ok: true,
      status: "nexus_low_bandwidth_preference_updated",
      mode: "Nexus Command Center",
      message: nexusLowBandwidthMode ? "Low-bandwidth mode is on. Nexus will emphasize text-first workflows and local fallback status." : "Low-bandwidth mode is off. Standard visual mode is restored.",
      preparedCards: [{ type: "low_bandwidth_preference", title: "Low-bandwidth mode", status: nexusLowBandwidthMode ? "on" : "off", localOnly: true }],
      noExecutionAuthorized: true,
      localOnly: true
    };
    renderUserWorkspace();
    return true;
  }
  const universalReviewAction = target?.closest?.("[data-nexus-universal-action-review]");
  if (universalReviewAction) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const action = universalReviewAction.dataset.nexusUniversalActionReview || "approve";
    const workflowId = universalReviewAction.dataset.workflowId || nexusActiveWorkflowState?.id || "";
    const definition = nexusFunctionWindowDefinition(workflowId, nexusActiveWorkflowState?.command || "");
    const lane = nexusIntegrationLaneById(nexusWorkflowRegistryEntry(workflowId)?.integrationLaneId);
    const review = nexusUniversalActionReviewForWorkflow(definition || { id: workflowId }, null, lane);
    const statusByAction = {
      approve: "approval_intent_recorded",
      edit: "review_edit_requested",
      cancel: "review_cancelled",
      delay: "review_delayed",
      "save-draft": "review_saved_as_draft"
    };
    const messageByAction = {
      approve: "Approval intent recorded locally. Nexus still requires a final execution gate, configured provider, consent, audit, and result verification before any live action.",
      edit: "Edit mode is ready. Adjust the packet before any confirmation or provider handoff.",
      cancel: "Review cancelled locally. No provider was contacted and no external action was executed.",
      delay: "Review delayed locally. Nexus will keep this as a draft/queue item until you return.",
      "save-draft": "Draft saved locally for review. No external action, send, call, payment, dispatch, or provider handoff occurred."
    };
    nexusActiveWorkflowState = {
      ...(nexusActiveWorkflowState || {}),
      id: workflowId,
      guidedMode: action === "edit" ? false : nexusActiveWorkflowState?.guidedMode,
      universalActionReview: {
        action,
        status: statusByAction[action] || "review_updated",
        at: new Date().toISOString(),
        approvalIntentOnly: true,
        finalExecutionGateRequired: true,
        executionAuthority: false,
        noExecutionAuthorized: true
      }
    };
    recordNexusRecentWorkflow(workflowId, {
      status: statusByAction[action] || "review_updated",
      summary: messageByAction[action] || "Universal action review updated locally."
    });
    nexusAgenticBrainLastResult = {
      ok: true,
      status: statusByAction[action] || "review_updated",
      mode: "Universal action review",
      message: messageByAction[action] || "Universal action review updated locally.",
      preparedCards: [{
        type: "universal_action_review",
        title: review.workflowLabel,
        status: statusByAction[action] || "review_updated",
        localOnly: true,
        approvalIntentOnly: true,
        finalExecutionGateRequired: true,
        noExecutionAuthorized: true
      }],
      review,
      noExecutionAuthorized: true,
      noProviderContactAuthorized: true,
      noPaymentAuthorized: true,
      noMessageSent: true,
      noCallPlaced: true,
      localOnly: true,
      source: "nexus_universal_action_review"
    };
    saveNexusRuntimeMemory();
    renderUserWorkspace();
    scheduleNexusActiveWorkflowFocus({ instant: true });
    return true;
  }
  const guidedMode = target?.closest?.("[data-nexus-guided-mode]");
  if (guidedMode) {
    event.preventDefault();
    event.stopPropagation();
    nexusActiveWorkflowState = {
      ...(nexusActiveWorkflowState || {}),
      guidedMode: guidedMode.dataset.nexusGuidedMode === "guided",
      id: guidedMode.dataset.workflowId || nexusActiveWorkflowState?.id || ""
    };
    saveNexusRuntimeMemory();
    renderUserWorkspace();
    scheduleNexusActiveWorkflowFocus({ instant: true });
    return true;
  }
  const guidedSave = target?.closest?.("[data-nexus-guided-save]");
  if (guidedSave) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const workflowId = guidedSave.dataset.workflowId || nexusActiveWorkflowState?.id || "";
    const input = document.querySelector("[data-nexus-guided-answer]");
    if (workflowId && input) {
      const definition = nexusFunctionWindowDefinition(workflowId, nexusActiveWorkflowState?.command || "");
      const fields = nexusGuidedFieldsForDefinition(definition);
      const interview = nexusInterviewStateForWorkflow(workflowId);
      const fieldName = input.dataset.nexusGuidedAnswer || "answer";
      const field = fields.find(item => item.name === fieldName) || { name: fieldName, label: fieldName, required: true, type: input.dataset.nexusInterviewFieldType || "text" };
      const value = input.value || "";
      const error = validateNexusInterviewAnswer(field, value);
      interview.errors = { ...(interview.errors || {}) };
      if (error) {
        interview.errors[fieldName] = error;
      } else {
        delete interview.errors[fieldName];
        interview.values = {
          ...(interview.values || {}),
          [fieldName]: String(value || "").trim()
        };
        interview.skipped = (interview.skipped || []).filter(name => name !== fieldName);
        interview.currentIndex = Math.min((fields.findIndex(item => item.name === fieldName) + 1), Math.max(fields.length - 1, 0));
        interview.updatedAt = new Date().toISOString();
        interview.cancelled = false;
      }
      nexusGuidedWorkflowAnswers[workflowId] = interview;
      nexusActiveWorkflowState = {
        ...(nexusActiveWorkflowState || {}),
        id: workflowId,
        guidedMode: true
      };
      recordNexusRecentWorkflow(workflowId, { status: "draft", summary: error ? "Interview answer needs a simple correction." : "Conversational interview answer saved locally." });
      saveNexusRuntimeMemory();
      renderUserWorkspace();
      scheduleNexusActiveWorkflowFocus({ instant: true });
    }
    return true;
  }
  const interviewSkip = target?.closest?.("[data-nexus-interview-skip]");
  if (interviewSkip) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const workflowId = interviewSkip.dataset.workflowId || nexusActiveWorkflowState?.id || "";
    const input = document.querySelector("[data-nexus-guided-answer]");
    const fieldName = input?.dataset?.nexusGuidedAnswer || "";
    if (workflowId && fieldName) {
      const definition = nexusFunctionWindowDefinition(workflowId, nexusActiveWorkflowState?.command || "");
      const fields = nexusGuidedFieldsForDefinition(definition);
      const field = fields.find(item => item.name === fieldName);
      const interview = nexusInterviewStateForWorkflow(workflowId);
      if (!field?.required) {
        interview.skipped = Array.from(new Set([...(interview.skipped || []), fieldName]));
        interview.errors = { ...(interview.errors || {}) };
        delete interview.errors[fieldName];
        interview.currentIndex = Math.min((fields.findIndex(item => item.name === fieldName) + 1), Math.max(fields.length - 1, 0));
        interview.updatedAt = new Date().toISOString();
        nexusGuidedWorkflowAnswers[workflowId] = interview;
        nexusActiveWorkflowState = {
          ...(nexusActiveWorkflowState || {}),
          id: workflowId,
          guidedMode: true
        };
        recordNexusRecentWorkflow(workflowId, { status: "draft", summary: "Optional interview field skipped locally." });
        saveNexusRuntimeMemory();
        renderUserWorkspace();
        scheduleNexusActiveWorkflowFocus({ instant: true });
      }
    }
    return true;
  }
  const interviewCorrect = target?.closest?.("[data-nexus-interview-correct]");
  if (interviewCorrect) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const workflowId = interviewCorrect.dataset.workflowId || nexusActiveWorkflowState?.id || "";
    if (workflowId) {
      const definition = nexusFunctionWindowDefinition(workflowId, nexusActiveWorkflowState?.command || "");
      const fields = nexusGuidedFieldsForDefinition(definition);
      const interview = nexusInterviewStateForWorkflow(workflowId);
      const values = nexusInterviewValues(interview);
      const answeredIndexes = fields.map((field, index) => values[field.name] ? index : -1).filter(index => index >= 0);
      const previousIndex = answeredIndexes.length ? answeredIndexes[answeredIndexes.length - 1] : Math.max(0, (interview.currentIndex || 0) - 1);
      interview.currentIndex = previousIndex;
      interview.reviewReady = false;
      interview.corrections = [
        { field: fields[previousIndex]?.name || "previous", at: new Date().toISOString(), reason: "user_requested_correction" },
        ...(interview.corrections || [])
      ].slice(0, 8);
      nexusGuidedWorkflowAnswers[workflowId] = interview;
      nexusActiveWorkflowState = {
        ...(nexusActiveWorkflowState || {}),
        id: workflowId,
        guidedMode: true
      };
      saveNexusRuntimeMemory();
      renderUserWorkspace();
      scheduleNexusActiveWorkflowFocus({ instant: true });
    }
    return true;
  }
  const interviewReview = target?.closest?.("[data-nexus-interview-review]");
  if (interviewReview) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const workflowId = interviewReview.dataset.workflowId || nexusActiveWorkflowState?.id || "";
    if (workflowId) {
      const interview = nexusInterviewStateForWorkflow(workflowId);
      interview.reviewReady = true;
      interview.updatedAt = new Date().toISOString();
      nexusGuidedWorkflowAnswers[workflowId] = interview;
      nexusActiveWorkflowState = {
        ...(nexusActiveWorkflowState || {}),
        id: workflowId,
        guidedMode: true
      };
      saveNexusRuntimeMemory();
      renderUserWorkspace();
      scheduleNexusActiveWorkflowFocus({ instant: true });
    }
    return true;
  }
  const interviewCancel = target?.closest?.("[data-nexus-interview-cancel]");
  if (interviewCancel) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const workflowId = interviewCancel.dataset.workflowId || nexusActiveWorkflowState?.id || "";
    if (workflowId) {
      const interview = nexusInterviewStateForWorkflow(workflowId);
      interview.cancelled = true;
      interview.values = {};
      interview.skipped = [];
      interview.errors = {};
      interview.currentIndex = 0;
      interview.reviewReady = false;
      interview.updatedAt = new Date().toISOString();
      nexusGuidedWorkflowAnswers[workflowId] = interview;
      nexusActiveWorkflowState = {
        ...(nexusActiveWorkflowState || {}),
        id: workflowId,
        guidedMode: true
      };
      recordNexusRecentWorkflow(workflowId, { status: "draft", summary: "Interview cancelled locally before any packet or external action." });
      saveNexusRuntimeMemory();
      renderUserWorkspace();
      scheduleNexusActiveWorkflowFocus({ instant: true });
    }
    return true;
  }
  const guidedBack = target?.closest?.("[data-nexus-guided-back]");
  if (guidedBack) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const workflowId = guidedBack.dataset.workflowId || nexusActiveWorkflowState?.id || "";
    const interview = nexusInterviewStateForWorkflow(workflowId);
    interview.currentIndex = Math.max(0, Number(interview.currentIndex || 0) - 1);
    interview.reviewReady = false;
    nexusGuidedWorkflowAnswers[workflowId] = interview;
    nexusActiveWorkflowState = {
      ...(nexusActiveWorkflowState || {}),
      id: workflowId,
      guidedMode: true
    };
    saveNexusRuntimeMemory();
    renderUserWorkspace();
    scheduleNexusActiveWorkflowFocus({ instant: true });
    return true;
  }
  return false;
}

function handleNexusUserExperienceMaximizationChange(event) {
  const role = event.target?.closest?.("[data-nexus-role-selector]");
  if (role) {
    nexusUserExperienceRole = NEXUS_UX_ROLES.includes(role.value) ? role.value : "Standard User";
    saveNexusRuntimeMemory();
    nexusAgenticBrainLastResult = {
      ok: true,
      status: "nexus_role_view_updated",
      mode: "Nexus Command Center",
      message: `${nexusUserExperienceRole} view selected. This filters suggestions only and does not change authentication or safety gates.`,
      preparedCards: [{ type: "role_aware_view", title: nexusUserExperienceRole, status: "ux filter active", localOnly: true }],
      noExecutionAuthorized: true,
      localOnly: true
    };
    renderUserWorkspace();
    return true;
  }
  const language = event.target?.closest?.("[data-nexus-language-preference]");
  if (language) {
    nexusLanguagePreference = language.value || "English";
    saveNexusRuntimeMemory();
    nexusAgenticBrainLastResult = {
      ok: true,
      status: "nexus_language_preference_captured",
      mode: "Nexus Command Center",
      message: `${nexusLanguagePreference} preference captured for this browser. Nexus will not claim full translation unless supported content is available.`,
      preparedCards: [{ type: "language_preference", title: nexusLanguagePreference, status: "captured locally", localOnly: true }],
      noExecutionAuthorized: true,
      localOnly: true
    };
    renderUserWorkspace();
    return true;
  }
  return false;
}

if (typeof globalThis !== "undefined") {
  globalThis.nexusHandleStandardUserHomeShortcut = nexusHandleStandardUserHomeShortcut;
}
if (typeof window !== "undefined") {
  window.nexusHandleStandardUserHomeShortcut = nexusHandleStandardUserHomeShortcut;
}

function bindNexusStandardUserHomeControls() {
  if (experienceMode !== "user" && !document.body.classList.contains("user-mode")) return;
  exposeNexusAppWindowApis();
  if (document.body.dataset.nexusDemoSandboxDelegateBound !== "true") {
    document.body.dataset.nexusDemoSandboxDelegateBound = "true";
    document.addEventListener("click", event => {
      if (!document.body.classList.contains("user-mode")) return;
      const mission = event.target?.closest?.("[data-nexus-demo-mission-open]");
      if (mission) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        openNexusDemoSandboxMission(mission.dataset.nexusDemoMissionOpen || "");
        return;
      }
      if (event.target?.closest?.("[data-nexus-demo-action]")) {
        handleNexusDemoSandboxClick(event);
      }
    }, true);
  }
  if (document.body.dataset.nexusFunctionWindowDelegateBound !== "true") {
    document.body.dataset.nexusFunctionWindowDelegateBound = "true";
    document.addEventListener("click", event => {
      const target = event.target;
      const control = target?.closest?.("[data-nexus-workflow-minimize], [data-nexus-window-restore], [data-nexus-workflow-close], [data-nexus-workflow-back]");
      if (!control || !document.body.classList.contains("user-mode")) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (control.matches("[data-nexus-workflow-minimize]")) {
        minimizeNexusFunctionWindow();
        return;
      }
      if (control.matches("[data-nexus-window-restore]")) {
        const restoreId = control.dataset.nexusFunctionWindowRestore || control.dataset.nexusModeShortcut || "";
        restoreNexusFunctionWindow(restoreId);
        if (!document.querySelector("[data-nexus-function-window='true']")) {
          openNexusFunctionWindow(restoreId, {
            command: control.dataset.nexusCommand || "Open Nexus function",
            source: "function-window-dock-restore-fallback",
            action: "restore"
          });
        }
        return;
      }
      closeNexusFunctionWindow({ command: "What can Nexus do?" });
    }, true);
  }
  $$("[data-nexus-workflow-minimize], [data-nexus-window-restore], [data-nexus-workflow-close], [data-nexus-workflow-back]").forEach(element => {
    if (element.dataset.nexusFunctionWindowBound === "true") return;
    element.dataset.nexusFunctionWindowBound = "true";
    element.addEventListener("click", event => {
      const control = event.currentTarget;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (control.matches("[data-nexus-workflow-minimize]")) {
        minimizeNexusFunctionWindow();
        return;
      }
      if (control.matches("[data-nexus-window-restore]")) {
        const restoreId = control.dataset.nexusFunctionWindowRestore || control.dataset.nexusModeShortcut || "";
        restoreNexusFunctionWindow(restoreId);
        if (!document.querySelector("[data-nexus-function-window='true']")) {
          openNexusFunctionWindow(restoreId, {
            command: control.dataset.nexusCommand || "Open Nexus function",
            source: "function-window-dock-restore-fallback",
            action: "restore"
          });
        }
        return;
      }
      if (control.matches("[data-nexus-workflow-back]")) {
        closeNexusFunctionWindow({ command: "What can Nexus do?" });
        return;
      }
      if (control.matches("[data-nexus-workflow-close]")) {
        setCommandInputs("What can Nexus do?");
        closeNexusFunctionWindow({ command: "What can Nexus do?" });
      }
    }, true);
  });
  $$("[data-nexus-demo-action]").forEach(element => {
    if (element.dataset.nexusDemoBound === "true") return;
    element.dataset.nexusDemoBound = "true";
    element.addEventListener("click", event => {
      handleNexusDemoSandboxClick(event);
    });
  });
  $$("[data-nexus-user-testing-action]").forEach(element => {
    if (element.dataset.nexusUserTestingBound === "true") return;
    element.dataset.nexusUserTestingBound = "true";
    element.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      runNexusUserTestingRuntimeAction(element.dataset.nexusUserTestingAction || "refresh");
    }, true);
  });
  $$("[data-nexus-command-center-submit], [data-nexus-mode-shortcut]").forEach(element => {
    if (element.dataset.nexusHomeBound === "true") return;
    element.dataset.nexusHomeBound = "true";
    element.onclick = event => {
      return !handleNexusStandardUserHomeClick(event);
    };
    element.addEventListener("click", event => {
      handleNexusStandardUserHomeClick(event);
    }, true);
  });
  $$('[data-nexus-knowledge-action="send-packet-email"]').forEach(element => {
    if (element.dataset.nexusEmailBound === "true") return;
    element.dataset.nexusEmailBound = "true";
    element.addEventListener("click", event => {
      handleNexusKnowledgeRailClick(event);
    }, true);
  });
  $$('[data-nexus-knowledge-action="send-packet-sms"], [data-nexus-knowledge-action="send-packet-whatsapp"]').forEach(element => {
    if (element.dataset.nexusCommunicationsBound === "true") return;
    element.dataset.nexusCommunicationsBound = "true";
    element.addEventListener("click", event => {
      handleNexusKnowledgeRailClick(event);
    }, true);
  });
}

function bindStatic() {
  renderLoginProfiles();
  startNexusGenesisExperienceEngine();
  if (typeof globalThis !== "undefined") {
    globalThis.nexusHandleStandardUserHomeShortcut = nexusHandleStandardUserHomeShortcut;
  }
  if (typeof window !== "undefined") {
    window.nexusHandleStandardUserHomeShortcut = nexusHandleStandardUserHomeShortcut;
    window.NexusMessagePreparationRuntime?.mount?.();
    window.NexusFullCommunicationRuntime?.mount?.();
    window.NexusUnifiedBrainRuntime?.mount?.();
    window.NexusHealthcareCollaborationRuntime?.mount?.();
    window.NexusAgricultureCollaborationRuntime?.mount?.();
  }
  document.addEventListener("focusin", handleNexusPresenceInputActivity, true);
  document.addEventListener("input", handleNexusPresenceInputActivity, true);
  document.addEventListener("keydown", handleNexusTrueCommandComposerKeydown, true);
  document.addEventListener("click", event => {
    const voiceControl = event.target?.closest?.("[data-nexus-command-center-voice],[data-nexus-os-voice-control]");
    if (!voiceControl) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    const action = voiceControl.dataset.nexusOsVoiceControl || "toggle-listening";
    void handleNexusOsVoiceControlAction(action, { source: "standard-user-visible-voice-control" });
  }, true);
  document.addEventListener("click", handleNexusPresenceVoiceButton, true);
  document.addEventListener("click", event => {
    void handleNexusPresenceCommandSendSubmit(event);
  }, true);
  document.addEventListener("submit", event => {
    void handleNexusPresenceCommandSendSubmit(event);
  }, true);
  document.addEventListener("click", handleNexusStandardUserHomeClick, true);
  document.addEventListener("click", async event => {
    if (await handleAssistantRuntimeLocalToolClick(event)) return;
    if (handleAssistantRuntimeFollowUpClick(event)) return;
    const voicePreferenceControl = event.target?.closest?.("[data-nexus-voice-preference-action]");
    if (voicePreferenceControl) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      handleNexusVoicePreferenceControlAction(voicePreferenceControl.dataset.nexusVoicePreferenceAction || "");
      return;
    }
    const conversationControl = event.target?.closest?.("[data-nexus-os-conversation-action]");
    if (conversationControl) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      await handleNexusOsUnifiedConversationAction(conversationControl.dataset.nexusOsConversationAction || "");
      return;
    }
    const missionControl = event.target?.closest?.("[data-nexus-os-mission-action]");
    if (missionControl) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      await handleNexusOsMissionLifecycleAction(missionControl.dataset.nexusOsMissionAction || "");
      return;
    }
    const persistentOperationsShortcut = event.target?.closest?.("[data-nexus-mode-shortcut='operations-memory'],[data-nexus-mode-shortcut='learning-development'],[data-nexus-mode-shortcut='applicant-career'],[data-nexus-mode-shortcut='employer-hiring'],[data-nexus-mode-shortcut='drone-mission-support']");
    if (persistentOperationsShortcut) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      const command = persistentOperationsShortcut.dataset.nexusCommand || "Show audit log";
      setCommandInputs(command);
      await runNexusPersistentOperationsCommand(command, { source: "mode-click" });
      return;
    }
    const persistentOperationsSubmit = event.target?.closest?.("[data-nexus-command-center-submit]");
    if (persistentOperationsSubmit) {
      const input = nexusCommandInputForSubmit(persistentOperationsSubmit);
      const command = input?.value?.trim() || "";
      if (handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = "";
        setCommandInputs("");
        return;
      }
      advanceNexusOsMissionForCommand(command, { source: "typed-command-submit" });
      if (routeNexusIntentDrivenWorkflowCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusUnifiedBrainRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        return;
      }
      if (await handleNexusAgricultureCollaborationRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusHealthcareCollaborationRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusMessagePreparationRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusFullCommunicationRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (submitNexusAgenticCommandRuntime(command, input, "command-submit", event)) return;
      if (isNexusPersistentOperationsCommand(command)) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        await runNexusPersistentOperationsCommand(command, { source: "command-submit" });
        return;
      }
    }
    if (handleNexusUserExperienceMaximizationClick(event)) return;
    if (await handleNexusKnowledgeRailClick(event)) return;
    if (await handleNexusProductionRailsClick(event)) return;
    if (await handleNexusPilotReviewQueueClick(event)) return;
    if (await handleNexusPilotPlatformActionClick(event)) return;
    if (await handleNexusVirtualCareTelehealthClick(event)) return;
    if (await handleNexusProviderCoordinationClick(event)) return;
    if (handleNexusPacketActionClick(event)) return;
    const missionHistoryAction = event.target?.closest?.("[data-nexus-mission-history-action]");
    if (missionHistoryAction) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      handleNexusMissionHistoryAction(
        missionHistoryAction.dataset.nexusMissionHistoryAction || "inspect",
        missionHistoryAction.dataset.missionId || ""
      );
      return;
    }
    if (handleNexusGlobalReviewQueueAuditClick(event)) return;
    if (handleNexusGlobalActivationCenterClick(event)) return;
    if (handleNexusLaneActionClick(event)) return;
    if (handleNexusPartnerOnboardingClick(event)) return;
    if (handleNexusWorkflowControllerClick(event)) return;
    if (handleNexusHomeModeSummaryClick(event)) return;
    const earlyCommandCenterSubmit = event.target.closest("[data-nexus-command-center-submit]");
    if (earlyCommandCenterSubmit) {
      const input = nexusCommandInputForSubmit(earlyCommandCenterSubmit);
      const command = input?.value?.trim() || "What can Nexus do?";
      if (handleNexusGenesisProviderOrchestrationCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (handleNexusGenesisProviderAbstractionCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (handleNexusGenesisAfricaAgOpportunityCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (handleNexusGenesisPredictiveWorkforceCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = "";
        setCommandInputs("");
        return;
      }
      advanceNexusOsMissionForCommand(command, { source: "typed-command-submit" });
      if (routeNexusIntentDrivenWorkflowCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusUnifiedBrainRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusAgricultureCollaborationRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusHealthcareCollaborationRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusMessagePreparationRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusFullCommunicationRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (submitNexusAgenticCommandRuntime(command, input, "command-submit", event)) return;
      if (isNexusPersistentOperationsCommand(command)) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        if (input) input.value = command;
        setCommandInputs(command);
        await runNexusPersistentOperationsCommand(command, { source: "command-submit" });
        return;
      }
      if (launchCapabilityFromAskNexus(command)) {
        event.preventDefault();
        event.stopPropagation();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (isNexusExplicitActivationWorkflowCommand(command) && runNexusStandardUserHomeLocalCommand(command)) {
        event.preventDefault();
        event.stopPropagation();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusMessagePreparationRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusFullCommunicationRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusTelephonyCallRuntimeCommand(command, { source: "typed-command-submit" })) {
        event.preventDefault();
        event.stopPropagation();
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (isNexusLiveKnowledgeQuestion(command)) {
        event.preventDefault();
        event.stopPropagation();
        if (input) input.value = command;
        setCommandInputs(command);
        await runNexusKnowledgeQuery(command);
        return;
      }
      const panelModeId = detectNexusHomeModePanelId(command);
      if (panelModeId) {
        event.preventDefault();
        event.stopPropagation();
        if (input) input.value = command;
        setCommandInputs(command);
        openNexusWorkflow(panelModeId, { command, source: "command-submit" });
        return;
      }
      if (isNexusCapabilityOverviewCommand(command)) {
        event.preventDefault();
        event.stopPropagation();
        if (input) input.value = command;
        setCommandInputs(command);
        nexusAgenticBrainLastResult = buildNexusCapabilityOverviewResult(command);
        renderUserWorkspace();
        return;
      }
      if (isNexusMediaMusicCommand(command)) {
        event.preventDefault();
        event.stopPropagation();
        if (input) input.value = command;
        setCommandInputs(command);
        openNexusWorkflow("media", { command, source: "command-submit" });
        return;
      }
      const localHealthAccessResult = buildNexusHealthAccessPreparationResult(command);
      if (localHealthAccessResult) {
        event.preventDefault();
        event.stopPropagation();
        if (input) input.value = command;
        setCommandInputs(command);
        nexusAgenticBrainLastResult = localHealthAccessResult;
        renderUserWorkspace();
        return;
      }
    }
    const earlyModeShortcut = event.target.closest("[data-nexus-mode-shortcut]");
    if (earlyModeShortcut) {
      const command = earlyModeShortcut.dataset.nexusCommand || "";
      const modeId = earlyModeShortcut.dataset.nexusModeShortcut || "";
      const earlyCapability = resolveNexusCapability(command, { modeId });
      if (earlyCapability) {
        event.preventDefault();
        event.stopPropagation();
        const input = $("#nexusCommandCenterInput");
        if (input) input.value = command || earlyCapability.title;
        setCommandInputs(command || earlyCapability.title);
        openNexusCapability(earlyCapability.id, { command: command || earlyCapability.title, source: "delegated-mode-click", sourceSurface: "early_click" });
        return;
      }
      const normalizedWorkflowId = normalizeNexusWorkflowId(modeId, command);
      if (nexusWorkflowDefinition(normalizedWorkflowId, command)) {
        event.preventDefault();
        event.stopPropagation();
        const input = $("#nexusCommandCenterInput");
        if (input) input.value = command;
        setCommandInputs(command);
        openNexusWorkflow(normalizedWorkflowId, { command, source: "delegated-mode-click" });
        return;
      }
      if (normalizedWorkflowId === "media") {
        event.preventDefault();
        event.stopPropagation();
        const input = $("#nexusCommandCenterInput");
        if (input) input.value = command;
        setCommandInputs(command);
        openNexusWorkflow("media", { command: command || "Play music.", source: "delegated-mode-click" });
        return;
      }
      if (isNexusCapabilityOverviewCommand(command)) {
        event.preventDefault();
        event.stopPropagation();
        const input = $("#nexusCommandCenterInput");
        if (input) input.value = command;
        setCommandInputs(command);
        nexusAgenticBrainLastResult = buildNexusCapabilityOverviewResult(command);
        renderUserWorkspace();
        return;
      }
      if (isNexusMediaMusicCommand(command)) {
        event.preventDefault();
        event.stopPropagation();
        const input = $("#nexusCommandCenterInput");
        if (input) input.value = command;
        setCommandInputs(command);
        openNexusWorkflow("media", { command, source: "delegated-mode-click" });
        return;
      }
      const localHealthAccessResult = buildNexusHealthAccessPreparationResult(command);
      if (localHealthAccessResult) {
        event.preventDefault();
        event.stopPropagation();
        const input = $("#nexusCommandCenterInput");
        if (input) input.value = command;
        setCommandInputs(command);
        nexusAgenticBrainLastResult = localHealthAccessResult;
        renderUserWorkspace();
        return;
      }
    }
    if (handleNexusAutonomousWorkflowClick(event)) return;
    if (handleNexusControlledActionQueueClick(event)) return;
    if (handleControlledActionConfirmationPrototypeClick(event)) return;
    const a100CapabilityButton = event.target.closest("[data-a100-capability][data-simple-command]");
    if (a100CapabilityButton && (experienceMode === "user" || document.body.classList.contains("user-mode"))) {
      event.preventDefault();
      event.stopPropagation();
      const intent = a100SafeAutonomyIntent(a100CapabilityButton.dataset.simpleCommand);
      openA100SafeAutonomyPreview(intent);
      return;
    }
    const nexusVoiceDemoButton = event.target.closest("[data-nexus-voice-demo-action]");
    if (nexusVoiceDemoButton) {
      event.preventDefault();
      return;
    }
    const nexusOnboardingOpen = event.target.closest("[data-nexus-onboarding-open]");
    if (nexusOnboardingOpen) {
      event.preventDefault();
      event.stopPropagation();
      openNexusOnboardingModal();
      return;
    }
    const nexusOnboardingClose = event.target.closest("[data-nexus-onboarding-close]");
    if (nexusOnboardingClose) {
      event.preventDefault();
      event.stopPropagation();
      closeNexusOnboardingModal();
      return;
    }
    if (event.target?.id === "nexusOnboardingModal") {
      event.preventDefault();
      event.stopPropagation();
      closeNexusOnboardingModal();
      return;
    }
    const commandCenterSubmit = event.target.closest("[data-nexus-command-center-submit]");
    if (commandCenterSubmit) {
      event.preventDefault();
      event.stopPropagation();
      const input = nexusCommandInputForSubmit(commandCenterSubmit);
      const command = input?.value?.trim() || "What can Nexus do?";
      if (handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source: "typed-command-submit" })) {
        if (input) input.value = "";
        setCommandInputs("");
        return;
      }
      if (routeNexusIntentDrivenWorkflowCommand(command, { source: "typed-command-submit" })) {
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusUnifiedBrainRuntimeCommand(command, { source: "typed-command-submit" })) {
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusAgricultureCollaborationRuntimeCommand(command, { source: "typed-command-submit" })) {
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (await handleNexusHealthcareCollaborationRuntimeCommand(command, { source: "typed-command-submit" })) {
        if (input) input.value = command;
        setCommandInputs(command);
        return;
      }
      if (routeNexusCommandCenterCommunicationSubmit(event, commandCenterSubmit, "typed-command-submit")) return;
      if (submitNexusAgenticCommandRuntime(command, input, "command-submit", event)) return;
      if (input) input.value = command;
      setCommandInputs(command);
      if (isNexusPersistentOperationsCommand(command)) {
        await runNexusPersistentOperationsCommand(command, { source: "command-submit" });
        return;
      }
      if (launchCapabilityFromAskNexus(command)) return;
      if (isNexusExplicitActivationWorkflowCommand(command) && runNexusStandardUserHomeLocalCommand(command)) return;
      if (isNexusLiveKnowledgeQuestion(command)) {
        await runNexusKnowledgeQuery(command);
        return;
      }
      const panelModeId = detectNexusHomeModePanelId(command);
      if (panelModeId) {
        openNexusWorkflow(panelModeId, { command, source: "command-submit" });
        return;
      }
      if (handleNexusAgenticBrainTypedCommand(command)) return;
      await runNexusAgenticBrainAction("command", { command });
      return;
    }
    const commandCenterPrefill = event.target.closest("[data-nexus-command-prefill]");
    if (commandCenterPrefill) {
      event.preventDefault();
      event.stopPropagation();
      const command = commandCenterPrefill.dataset.nexusCommandPrefill || "";
      const input = $("#nexusCommandCenterInput");
      if (input) {
        input.value = command;
        input.focus?.();
      }
      setCommandInputs(command);
      return;
    }
    const commandCenterVoice = event.target.closest("[data-nexus-command-center-voice]");
    if (commandCenterVoice) {
      event.preventDefault();
      event.stopPropagation();
      await handleNexusOsVoiceControlAction("toggle-listening", { source: "command-center-mic" });
      return;
    }
    const modeShortcut = event.target.closest("[data-nexus-mode-shortcut]");
    if (modeShortcut) {
      event.preventDefault();
      event.stopPropagation();
      const modeId = modeShortcut.dataset.nexusModeShortcut || "";
      if (modeId === "language") {
        const panel = $("#userLanguagePanel");
        if (panel) panel.classList.remove("hidden");
        return;
      }
      const command = modeShortcut.dataset.nexusCommand || "";
      const modeCapability = resolveNexusCapability(command, { modeId });
      const normalizedWorkflowId = normalizeNexusWorkflowId(modeId, command);
      const input = $("#nexusCommandCenterInput");
      if (input) input.value = command || modeCapability?.title || "";
      setCommandInputs(command || modeCapability?.title || "");
      if (modeCapability && openNexusCapability(modeCapability.id, { command: command || modeCapability.title, source: "mode-click", sourceSurface: "fallback_click" })) return;
      if (nexusWorkflowDefinition(normalizedWorkflowId, command)) {
        openNexusWorkflow(normalizedWorkflowId, { command, source: "mode-click" });
        return;
      }
      if (normalizedWorkflowId === "media") {
        openNexusWorkflow("media", { command: command || "Play music.", source: "mode-click" });
        return;
      }
      if (runNexusStandardUserHomeLocalCommand(command)) return;
      if (handleNexusAgenticBrainTypedCommand(command)) return;
      await runNexusAgenticBrainAction("command", { command });
      return;
    }
    const providerRefreshButton = event.target.closest("[data-real-provider-refresh]");
    if (providerRefreshButton) {
      event.preventDefault();
      event.stopPropagation();
      await refreshNexusRealProviderTestingStatus();
      return;
    }
    const realProviderTestButton = event.target.closest("[data-real-provider-test]");
    if (realProviderTestButton) {
      event.preventDefault();
      event.stopPropagation();
      await runNexusRealProviderTest(realProviderTestButton.dataset.realProviderTest);
      return;
    }
    const productionRuntimeButton = event.target.closest("[data-nexus-runtime-action]");
    if (productionRuntimeButton) {
      event.preventDefault();
      event.stopPropagation();
      await runNexusProductionRuntimeAction(productionRuntimeButton.dataset.nexusRuntimeAction);
      return;
    }
    const agenticBrainButton = event.target.closest("[data-nexus-brain-action]");
    if (agenticBrainButton) {
      event.preventDefault();
      event.stopPropagation();
      await runNexusAgenticBrainAction(agenticBrainButton.dataset.nexusBrainAction, {
        taskId: agenticBrainButton.dataset.taskId || "",
        queueId: agenticBrainButton.dataset.queueId || ""
      });
      return;
    }
    const mapsFieldVisitButton = event.target.closest("[data-maps-field-visit-action]");
    if (mapsFieldVisitButton) {
      event.preventDefault();
      event.stopPropagation();
      await runNexusMapsFieldVisitAction(mapsFieldVisitButton.dataset.mapsFieldVisitAction);
      return;
    }
    const extendedBridgeButton = event.target.closest("[data-extended-bridge-action]");
    if (extendedBridgeButton) {
      event.preventDefault();
      event.stopPropagation();
      await runNexusExtendedBridgeAction(extendedBridgeButton.dataset.extendedBridgeId, extendedBridgeButton.dataset.extendedBridgeAction);
      return;
    }
    const medicalBridgeButton = event.target.closest("[data-medical-bridge-action]");
    if (medicalBridgeButton) {
      event.preventDefault();
      event.stopPropagation();
      await runNexusMedicalBridgeAction(medicalBridgeButton.dataset.medicalBridgeId, medicalBridgeButton.dataset.medicalBridgeAction);
      return;
    }
    const marketplaceBridgeCreateButton = event.target.closest("[data-marketplace-bridge-create]");
    if (marketplaceBridgeCreateButton) {
      event.preventDefault();
      event.stopPropagation();
      await createNexusMarketplaceBridgeListing();
      return;
    }
    const marketplaceBridgeSearchButton = event.target.closest("[data-marketplace-bridge-search]");
    if (marketplaceBridgeSearchButton) {
      event.preventDefault();
      event.stopPropagation();
      await searchNexusMarketplaceBridge();
      return;
    }
    const marketplaceBridgeSuggestionButton = event.target.closest("[data-marketplace-bridge-suggestion]");
    if (marketplaceBridgeSuggestionButton) {
      event.preventDefault();
      event.stopPropagation();
      await searchNexusMarketplaceBridge(marketplaceBridgeSuggestionButton.dataset.marketplaceBridgeSuggestion || "");
      return;
    }
    const marketplaceBridgeButton = event.target.closest("[data-marketplace-bridge-action]");
    if (marketplaceBridgeButton) {
      event.preventDefault();
      event.stopPropagation();
      await runNexusMarketplaceBridgeAction(marketplaceBridgeButton.dataset.marketplaceBridgeAction, marketplaceBridgeButton.dataset.marketplaceBridgeIndex);
      return;
    }
    const learningBridgeSearchButton = event.target.closest("[data-learning-bridge-search]");
    if (learningBridgeSearchButton) {
      event.preventDefault();
      event.stopPropagation();
      await searchNexusLearningProviderBridge();
      return;
    }
    const learningBridgeSuggestionButton = event.target.closest("[data-learning-bridge-suggestion]");
    if (learningBridgeSuggestionButton) {
      event.preventDefault();
      event.stopPropagation();
      await searchNexusLearningProviderBridge(learningBridgeSuggestionButton.dataset.learningBridgeSuggestion || "");
      return;
    }
    const learningBridgeButton = event.target.closest("[data-learning-bridge-action]");
    if (learningBridgeButton) {
      event.preventDefault();
      event.stopPropagation();
      await runNexusLearningProviderBridgeAction(learningBridgeButton.dataset.learningBridgeAction, learningBridgeButton.dataset.learningBridgeIndex);
      return;
    }
    const providerBridgeButton = event.target.closest("[data-provider-contact-action]");
    if (providerBridgeButton) {
      event.preventDefault();
      event.stopPropagation();
      await runNexusProviderContactBridgeAction(providerBridgeButton.dataset.providerContactAction, providerBridgeButton.dataset.providerContactIndex);
      return;
    }
    if (event.target.closest("#adminHealthCheck")) {
      event.preventDefault();
      event.stopPropagation();
      runAdminHealthCheckDirect();
      return;
    }
    const workflowButton = event.target.closest("[data-workflow][data-action]");
    if (workflowButton) {
      event.preventDefault();
      event.stopPropagation();
      runWorkflowAction(workflowButton.dataset.workflow, workflowButton.dataset.action, workflowButton);
      return;
    }
    const sectionButton = event.target.closest("[data-section], [data-mobile-section]");
    if (sectionButton) {
      event.preventDefault();
      event.stopPropagation();
      activateSectionFromButton(sectionButton);
      return;
    }
    const moduleTestButton = event.target.closest("[data-module-test]");
    if (moduleTestButton) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("integrations", "test-module", { dataset: { module: moduleTestButton.dataset.moduleTest } }));
      return;
    }
    const providerTestButton = event.target.closest(".provider-test");
    if (providerTestButton) {
      event.preventDefault();
      event.stopPropagation();
      const providerId = providerTestButton.dataset.provider;
      const provider = data.providers.find(item => item.id === providerId);
      const status = $("#aiConsoleStatus");
      if (status && providerId === "openai") {
        status.textContent = `${provider?.name || "OpenAI"} provider test opened. Confirm to test the live AI engine and record evidence.`;
      }
      openWorkflowModal(workflowConfig("integrations", "test-provider", { dataset: { providerId } }));
      return;
    }
    const providerChip = event.target.closest("[data-provider]");
    if (providerChip && !providerChip.classList.contains("provider-test")) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("integrations", "test-provider", { dataset: { providerId: providerChip.dataset.provider } }));
      return;
    }
    const providerCard = event.target.closest(".provider-card");
    if (providerCard && !event.target.closest("button")) {
      event.preventDefault();
      event.stopPropagation();
      const providerId = providerCard.querySelector("[data-provider]")?.dataset.provider;
      if (providerId) {
        openWorkflowModal(workflowConfig("integrations", "test-provider", { dataset: { providerId } }));
      }
      return;
    }
    if (event.target.closest("#aiConsoleRun")) {
      event.preventDefault();
      event.stopPropagation();
      const aiType = $("#aiConsoleType")?.value || "command";
      const status = $("#aiConsoleStatus");
      if (status) status.textContent = `${aiType} AI workflow opened. Confirm to run it through the configured engine.`;
      openWorkflowModal({
        ...workflowConfig("ai", aiType, { dataset: {} }),
        title: `Run AI test: ${aiType}`,
        confirmLabel: "Run AI test",
        success: "AI test complete"
      });
      return;
    }
    const learningAccessButton = event.target.closest("[data-learning-access]");
    if (learningAccessButton) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(learningAccessibilityWorkflowConfig(learningAccessButton.dataset.learningAccess));
      return;
    }
    const workforceButton = event.target.closest("[data-workforce]");
    if (workforceButton) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("workforce", workforceButton.dataset.workforce, { dataset: {} }));
      return;
    }
    const healthButton = event.target.closest("[data-health]");
    if (healthButton) {
      event.preventDefault();
      event.stopPropagation();
      openHealthWorkflow(healthButton.dataset.health, healthButton);
      return;
    }
    const payButton = event.target.closest("[data-pay]");
    if (payButton) {
      event.preventDefault();
      event.stopPropagation();
      const [provider, amount] = payButton.dataset.pay.split(":");
      openWorkflowModal({
        ...workflowConfig("trade", "wallet", { dataset: {} }),
        body: { provider, amount: Number(amount) },
        confirmLabel: `${provider} ${Number(amount) >= 0 ? "+" : ""}${amount}`
      });
      return;
    }
    const courseButton = event.target.closest(".course");
    if (courseButton) {
      event.preventDefault();
      event.stopPropagation();
      const course = data.courses.find(item => item.id === courseButton.dataset.course);
      if (course) {
        data.profile.activeCourseId = course.id;
        openWorkflowModal(workflowConfig("learning", "start", { dataset: {} }));
      }
      return;
    }
    const lessonButton = event.target.closest(".lesson-step");
    if (lessonButton) {
      event.preventDefault();
      event.stopPropagation();
      const course = data.courses.find(item => item.id === lessonButton.dataset.course);
      if (course) openWorkflowModal(lessonWorkflowConfig(course, Number(lessonButton.dataset.moduleIndex)));
      return;
    }
    const roleButton = event.target.closest(".apply");
    if (roleButton) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(roleWorkflowConfig(roleButton.dataset.role));
      return;
    }
    const orderButton = event.target.closest(".order");
    if (orderButton) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("trade", "order", { dataset: { productId: orderButton.dataset.productId } }));
      return;
    }
    const jumpButton = event.target.closest("[data-jump]");
    if (jumpButton) {
      event.preventDefault();
      event.stopPropagation();
      goSection(jumpButton.dataset.jump);
      return;
    }
    const aiReviewButton = event.target.closest("[data-ai-review]");
    if (aiReviewButton) {
      event.preventDefault();
      event.stopPropagation();
      reviewLatestAi(aiReviewButton.dataset.aiReview);
      return;
    }
    const notifyButton = event.target.closest("[data-notify]");
    if (notifyButton) {
      event.preventDefault();
      event.stopPropagation();
      sendModuleNotification(notifyButton.dataset.notify);
      return;
    }
    const courseCard = event.target.closest("[data-course-action]");
    if (courseCard) {
      event.preventDefault();
      event.stopPropagation();
      const course = data.courses.find(item => item.id === courseCard.dataset.courseAction);
      if (course) {
        data.profile.activeCourseId = course.id;
        openWorkflowModal(workflowConfig("learning", "start", { dataset: {} }));
      }
      return;
    }
    const trackCard = event.target.closest(".track-card");
    if (trackCard) {
      event.preventDefault();
      event.stopPropagation();
      selectedLearningTrack = trackCard.dataset.track;
      render();
      toast(selectedLearningTrack === "All" ? "Showing all tracks" : `${selectedLearningTrack} track selected`);
      return;
    }
    const roleCard = event.target.closest(".role-card");
    if (roleCard) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(roleWorkflowConfig(roleCard.dataset.roleCard));
      return;
    }
    const productCard = event.target.closest(".product-card");
    if (productCard) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("trade", "order", { dataset: { productId: productCard.dataset.productCard } }));
      return;
    }
    const aiButton = event.target.closest("[data-ai]");
    if (aiButton) {
      event.preventDefault();
      event.stopPropagation();
      const status = $("#copilotActionStatus");
      if (status && aiButton.dataset.ai === "copilot") status.textContent = "Copilot workflow opened. Confirm to create AI guidance and evidence.";
      openWorkflowModal(workflowConfig("ai", aiButton.dataset.ai, { dataset: {} }));
      return;
    }
    const mapButton = event.target.closest("[data-map-action]");
    if (mapButton) {
      event.preventDefault();
      event.stopPropagation();
      const action = mapButton.dataset.mapAction;
      openWorkflowModal(workflowConfig(action === "focus" ? "map" : "ai", action, { dataset: {} }));
      return;
    }
    const personaButton = event.target.closest("[data-persona]");
    if (personaButton) {
      event.preventDefault();
      event.stopPropagation();
      selectedPersona = personaButton.dataset.persona || "farmer";
      localStorage.setItem("agrinexusPersona", selectedPersona);
      renderSimpleHome();
      renderUserWorkspace();
      const status = $("#simpleActionStatus");
      if (status) status.textContent = `${personaButton.textContent.trim()} actions are ready. Choose one below.`;
      toast(`${personaButton.textContent.trim()} view selected`);
      return;
    }
    const experienceButton = event.target.closest("[data-experience-mode]");
    if (experienceButton) {
      event.preventDefault();
      event.stopPropagation();
      setExperienceMode(experienceButton.dataset.experienceMode, { announceChange: true });
      toast(`${experienceModeLabel()} view selected`);
      return;
    }
    if (event.target.closest("[data-mobile-ask]")) {
      event.preventDefault();
      event.stopPropagation();
      openAskNexus();
      return;
    }
    if (handleNexusPlatformDashboardClick(event)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const dashboardAskButton = event.target.closest("[data-dashboard-ask-current]");
    if (dashboardAskButton) {
      event.preventDefault();
      event.stopPropagation();
      const input = $("#nexusDashboardPromptInput");
      const selectedMode = nexusPlatformDashboardModeById();
      const prompt = (input?.value || selectedMode.prompts?.[0] || "What can Nexus do?").trim();
      setCommandInputs(prompt);
      openAskNexus();
      await handleVoiceCommand(prompt);
      const status = $("#simpleActionStatus");
      if (status) status.textContent = `${selectedMode.title} request sent to Nexus for review-first guidance.`;
      return;
    }
    if (handleNexusOpenDialogueAgentClick(event)) return;
    if (event.target.closest("[data-toggle-user-language]")) {
      event.preventDefault();
      event.stopPropagation();
      const panel = $("#userLanguagePanel");
      if (panel) {
        const willOpen = panel.classList.contains("hidden");
        panel.classList.toggle("hidden", !willOpen);
        if (willOpen) {
          panel.scrollIntoView({ behavior: "smooth", block: "center" });
          setVoiceResponse("Choose a language, or say change language to French, Arabic, Kiswahili, Spanish, Portuguese, or English.", false, { allowVoiceFirst: false });
        }
      }
      return;
    }
    const userLanguageButton = event.target.closest("[data-user-language]");
    if (userLanguageButton) {
      event.preventDefault();
      event.stopPropagation();
      await mutate("/api/user/language", { language: userLanguageButton.dataset.userLanguage }, platformCopy[userLanguageButton.dataset.userLanguage]?.languageToast || "Platform language updated");
      $("#userLanguagePanel")?.classList.remove("hidden");
      applyContentTranslations();
      return;
    }
    if (event.target.closest("[data-close-user-language]")) {
      event.preventDefault();
      event.stopPropagation();
      $("#userLanguagePanel")?.classList.add("hidden");
      return;
    }
    if (event.target.closest("[data-close-user-accessibility]")) {
      event.preventDefault();
      event.stopPropagation();
      renderUserWorkspace();
      updateUserBackHome("dashboard");
      return;
    }
    const accessibilityButton = event.target.closest("[data-accessibility]");
    if (accessibilityButton) {
      event.preventDefault();
      event.stopPropagation();
      toggleAccessibilityPref(accessibilityButton.dataset.accessibility);
      if (experienceMode === "user" && $("#userAccessibilityPanel")) {
        accessibilityButton.querySelector("small") && (accessibilityButton.querySelector("small").textContent = translateText(accessibilityPrefs[accessibilityButton.dataset.accessibility] ? "On" : "Off"));
        const status = $("#userAccessibilityPanel .user-module-status");
        if (status) status.textContent = translateText(`${accessibilityButton.querySelector("strong")?.textContent || "Accessibility option"} ${accessibilityPrefs[accessibilityButton.dataset.accessibility] ? "enabled" : "disabled"}.`);
      }
      return;
    }
    const userVoiceButton = event.target.closest("[data-user-voice-action]");
    if (userVoiceButton) {
      event.preventDefault();
      event.stopPropagation();
      const action = userVoiceButton.dataset.userVoiceAction;
      if (action === "listen") {
        updateUserCaptionPanel("Listening. Speak your request.");
        await handleNexusOsVoiceControlAction("toggle-listening", { source: "user-voice-dock" });
      } else if (action === "read") {
        updateUserCaptionPanel(lastVoiceResponse || "Nexus is ready.");
        await handleNexusOsVoiceControlAction("repeat-response", { source: "user-voice-dock" });
      } else {
        updateUserCaptionPanel(lastVoiceResponse || "Voice help is available. Structured fields appear only inside opened workflows.");
        await handleNexusOsVoiceControlAction("voice-help", { source: "user-voice-dock" });
      }
      return;
    }
    const captionButton = event.target.closest("[data-caption-action]");
    if (captionButton) {
      event.preventDefault();
      event.stopPropagation();
      const action = captionButton.dataset.captionAction;
      if (action === "close") {
        closeUserCaptionPanel();
      } else if (action === "listen") {
        updateUserCaptionPanel("Listening. Speak your request.");
        await handleNexusOsVoiceControlAction("toggle-listening", { source: "caption-panel" });
      } else if (action === "speak") {
        await handleNexusOsVoiceControlAction("repeat-response", { source: "caption-panel", text: $("#userCaptionText")?.textContent || lastVoiceResponse });
      } else if (action === "send") {
        const input = $("#userCaptionInput");
        const command = input?.value.trim();
        if (!command) {
          updateUserCaptionPanel("Speak naturally to Nexus.");
          return;
        }
        if (input) input.value = "";
        setCommandInputs(command);
        if (handleNexusStandardUserSafeTypedCommand(command)) return;
        void handleVoiceCommand(command);
      } else if (action === "confirm") {
        void confirmPendingWorkflow();
      } else if (action === "cancel") {
        closeWorkflowModal();
        $(".user-inline-workflow:not(.hidden)")?.classList.add("hidden");
        pendingWorkflow = null;
        updateUserCaptionPanel("Canceled. Choose another button when ready.");
        setVoiceResponse("Canceled. Choose another button when ready.", true);
      }
      return;
    }
    const grandmaConfirmButton = event.target.closest("[data-grandma-confirm]");
    if (grandmaConfirmButton) {
      event.preventDefault();
      event.stopPropagation();
      answerGrandmaActionConfirmation(grandmaConfirmButton.dataset.grandmaConfirm);
      return;
    }
    const agentPendingConfirmButton = event.target.closest("[data-agent-pending-confirm]");
    if (agentPendingConfirmButton) {
      event.preventDefault();
      event.stopPropagation();
      const answer = agentPendingConfirmButton.dataset.agentPendingConfirm === "yes" ? "yes do it" : "no cancel";
      setCommandInputs(answer);
      void handleVoiceCommand(answer);
      return;
    }
    if (event.target.closest("[data-inline-workflow-confirm]")) {
      event.preventDefault();
      event.stopPropagation();
      confirmPendingWorkflow();
      return;
    }
    if (event.target.closest("[data-inline-workflow-cancel]")) {
      event.preventDefault();
      event.stopPropagation();
      closeWorkflowModal();
      event.target.closest(".user-inline-workflow")?.classList.add("hidden");
      setVoiceResponse("Canceled. Choose another button when ready.", true);
      return;
    }
    const permissionButton = event.target.closest("[data-mobile-permission]");
    if (permissionButton) {
      event.preventDefault();
      event.stopPropagation();
      requestProductionMobilePermission(permissionButton.dataset.mobilePermission);
      return;
    }
    if (event.target.closest("#userLiveServiceCheckBtn") || event.target.closest("#launchWizardLiveCheckBtn")) {
      runLiveServiceCheck(event);
      return;
    }
    const simpleButton = event.target.closest("[data-simple-command], [data-simple-section], [data-simple-pilot], [data-simple-demo], [data-simple-mission], [data-simple-action]");
    if (simpleButton) {
      event.preventDefault();
      event.stopPropagation();
      runSimpleAction(event);
      return;
    }
    if (event.target.closest("#workspaceAskBtn")) {
      event.preventDefault();
      event.stopPropagation();
      openAskNexus();
      return;
    }
    if (event.target.closest("#liveServiceCheckBtn") || event.target.closest("#liveServiceCheckFromIntegrations")) {
      runLiveServiceCheck(event);
      return;
    }
    if (event.target.closest("#startOnboardingBtn")) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("onboarding", "start", { dataset: {} }));
      return;
    }
    if (event.target.closest("#openSupportBtn")) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("support", "ticket", { dataset: {} }));
      return;
    }
    if (event.target.closest("#inviteSubscriberBtn")) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("subscriber", "invite", { dataset: {} }));
      return;
    }
    if (event.target.closest("#addTestUserBtn")) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("test-user", "create", { dataset: {} }));
      return;
    }
    if (event.target.closest("#addAdminUserBtn")) {
      event.preventDefault();
      event.stopPropagation();
      openWorkflowModal(workflowConfig("admin-user", "create", { dataset: {} }));
      return;
    }
    if (event.target.closest("#liveInvestorDemoBtn")) {
      event.preventDefault();
      event.stopPropagation();
      runLiveInvestorDemoMode();
      return;
    }
    const governmentActionButton = event.target.closest("[data-government-action]");
    if (governmentActionButton) {
      event.preventDefault();
      event.stopPropagation();
      runGovernmentReadinessAction(event);
      return;
    }
    if (event.target.closest("#globalCloseBtn") || event.target.closest("#globalBackBtn") || event.target.closest("#jarvisCloseBtn")) {
      event.preventDefault();
      event.stopPropagation();
      closeAskNexus();
      return;
    }
    if (event.target.closest("#globalListenBtn") || event.target.closest("#jarvisListenBtn")) {
      event.preventDefault();
      event.stopPropagation();
      handleNexusOsVoiceControlAction("toggle-listening", { source: "legacy-global-listen-button" });
      return;
    }
    if (event.target.closest("#jarvisRunBtn")) {
      event.preventDefault();
      event.stopPropagation();
      runJarvisCommand();
      return;
    }
    if (event.target.closest("#globalRunBtn")) {
      event.preventDefault();
      event.stopPropagation();
      runGlobalCommand();
      return;
    }
    if (event.target.closest("#globalVoiceFirstBtn")) {
      event.preventDefault();
      event.stopPropagation();
      toggleVoiceFirstMode();
      return;
    }
    if (event.target.closest("#globalYesBtn")) {
      event.preventDefault();
      event.stopPropagation();
      answerGlobalConversation("yes");
      return;
    }
    if (event.target.closest("#globalNoBtn")) {
      event.preventDefault();
      event.stopPropagation();
      if (!$("#workflowModal")?.classList.contains("hidden")) {
        answerGlobalConversation("no");
      } else {
        closeAskNexus();
      }
      return;
    }
    if (event.target.closest("#globalReadBtn") || event.target.closest("#jarvisReadBtn")) {
      event.preventDefault();
      event.stopPropagation();
      handleNexusOsVoiceControlAction("repeat-response", { source: "legacy-read-button" });
      return;
    }
    if (event.target.closest("#globalInstallBtn")) {
      event.preventDefault();
      event.stopPropagation();
      installAgriNexusApp();
      return;
    }
    if (event.target.closest("#globalVoiceHelpBtn") || event.target.closest("#voiceHelpBtn")) {
      event.preventDefault();
      event.stopPropagation();
      openVoiceHelp();
      return;
    }
    if (event.target.closest("#voiceHelpCloseBtn")) {
      event.preventDefault();
      event.stopPropagation();
      closeVoiceHelp();
      return;
    }
    const voiceExampleButton = event.target.closest("[data-voice-example]");
    if (voiceExampleButton) {
      event.preventDefault();
      event.stopPropagation();
      runVoiceExample(voiceExampleButton);
      return;
    }
    if (event.target.closest("#jarvisMissionBtn") || event.target.closest("#agentMissionBtn")) {
      event.preventDefault();
      event.stopPropagation();
      runJarvisFullMission();
      return;
    }
    if (event.target.closest("#workflowConfirm")) {
      event.preventDefault();
      event.stopPropagation();
      confirmPendingWorkflow();
      return;
    }
    if (event.target.closest("#workflowRunVoiceBtn")) {
      event.preventDefault();
      event.stopPropagation();
      runWorkflowVoiceResponse();
      return;
    }
    if (event.target.closest("#workflowReadBtn")) {
      event.preventDefault();
      event.stopPropagation();
      readWorkflowModal();
      return;
    }
    if (event.target.closest("#workflowListenBtn")) {
      event.preventDefault();
      event.stopPropagation();
      handleNexusOsVoiceControlAction("toggle-listening", { source: "workflow-listen-button" });
      return;
    }
    if (event.target.closest("[data-close-workflow]")) {
      event.preventDefault();
      event.stopPropagation();
      closeWorkflowModal();
    }
  }, true);

  document.addEventListener("keydown", event => {
    if (event.target?.id === "workflowVoiceInput" && event.key === "Enter") {
      event.preventDefault();
      runWorkflowVoiceResponse();
    }
  });
  document.addEventListener("change", event => {
    handleNexusUserExperienceMaximizationChange(event);
  }, true);

  window.addEventListener("hashchange", () => {
    goSection(sectionFromHash(), { updateHash: false, instant: true });
  });

  $("#topSettingsToggle").onclick = () => {
    const panel = $("#topActions");
    const open = !panel.classList.contains("open");
    panel.classList.toggle("open", open);
    $("#topSettingsToggle").setAttribute("aria-expanded", String(open));
    announce(open ? "Settings opened" : "Settings closed");
  };
  const topSettingsClose = $("#topSettingsClose");
  if (topSettingsClose) topSettingsClose.onclick = () => {
    closeTopSettingsMenu();
    announce("Settings closed");
  };

  $("#loginForm").addEventListener("submit", async event => {
    event.preventDefault();
    try {
      localStorage.removeItem("agrinexusGuestDisplayName");
      const loginLanguage = localStorage.getItem("agrinexusLoginLanguage") || "en";
      const email = String($("#email")?.value || "").trim().toLowerCase();
      const password = String($("#password")?.value || "");
      if (!email || !password.trim()) {
        $("#loginMessage").textContent = "Email and password are required.";
        $("#password")?.focus();
        return;
      }
      data = await request("/api/login", { method: "POST", body: { email, password } });
      if (loginLanguage && loginLanguage !== data?.user?.language) {
        data = await request("/api/user/language", { method: "POST", body: { language: loginLanguage } });
      }
      await loadPublicMapConfig();
      render();
      startAskNexusAfterLogin();
      toast("Signed in");
    } catch (error) {
      $("#loginMessage").textContent = error.message;
    }
  });
  const loginLanguageSelect = $("#loginLanguageSelect");
  if (loginLanguageSelect) {
    loginLanguageSelect.value = localStorage.getItem("agrinexusLoginLanguage") || "en";
    loginLanguageSelect.onchange = event => setLoginLanguage(event.target.value);
  }
  const guestStartBtn = $("#guestStartBtn");
  if (guestStartBtn) guestStartBtn.onclick = startGuestUserSession;

  $("#logoutBtn").onclick = async () => {
    localStorage.removeItem("agrinexusGuestDisplayName");
    await request("/api/logout", { method: "POST" });
    location.reload();
  };

  $("#countrySelect").onchange = async event => {
    const value = event.target.value;
    if (value.startsWith("language:")) {
      const language = value.replace("language:", "");
      await mutate("/api/user/language", { language }, platformCopy[language]?.languageToast || "Platform language updated");
      return;
    }
    const countryId = value;
    const language = countryLanguageMap[countryId] || languageCode();
    try {
      const previousLanguage = languageCode();
      data = await request("/api/context", { method: "POST", body: { countryId } });
      data.user.language = language;
      data.profile.accessibilityProfile = {
        ...(data.profile.accessibilityProfile || {}),
        language
      };
      render();
      if (previousLanguage !== languageCode()) refreshVoiceForLanguageChange();
      toast(platformCopy[language]?.languageToast || "Country and language context updated");
    } catch (error) {
      toast(error.message);
    }
  };

  $$(".nav").forEach(button => {
    button.onclick = () => activateSectionFromButton(button);
  });
  const userBackHomeBtn = $("#userBackHomeBtn");
  if (userBackHomeBtn) userBackHomeBtn.onclick = () => goSection("dashboard", { instant: true });
  $$("[data-mobile-section]").forEach(button => {
    button.onclick = () => activateSectionFromButton(button);
  });
  $$("[data-mobile-ask]").forEach(button => {
    button.onclick = openAskNexus;
  });
  $("#workspaceAskBtn").onclick = openAskNexus;
  $("#accessibilityToggle").onclick = () => {
    closeTopSettingsMenu();
    if (experienceMode === "user") {
      $("#accessibilityPanel")?.classList.add("hidden");
      $("#accessibilityToggle").setAttribute("aria-expanded", "true");
      renderUserAccessibilityPanel();
      announce("Accessibility help opened");
      return;
    }
    const panel = $("#accessibilityPanel");
    const willOpen = panel.classList.contains("hidden");
    panel.classList.toggle("hidden", !willOpen);
    $("#accessibilityToggle").setAttribute("aria-expanded", String(willOpen));
    if (willOpen) panel.querySelector("button")?.focus();
    announce(willOpen ? "Accessibility tools opened" : "Accessibility tools closed");
  };
  const topCaptionsBtn = $("#topCaptionsBtn");
  if (topCaptionsBtn) topCaptionsBtn.onclick = () => {
    closeTopSettingsMenu();
    openCaptionBox("Nexus captions are open. Speak to Nexus; structured fields appear only inside opened workflows.");
  };
  const topHomeBtn = $("#topHomeBtn");
  if (topHomeBtn) topHomeBtn.onclick = () => {
    closeTopSettingsMenu();
    closeAskNexus({ silent: true });
    closeUserCaptionPanel();
    goSection("dashboard", { instant: true });
  };
  $$("[data-accessibility]").forEach(button => {
    button.onclick = () => toggleAccessibilityPref(button.dataset.accessibility);
  });

  $$(".language-option").forEach(button => {
    button.onclick = () => mutate("/api/user/language", { language: button.dataset.language }, platformText().languageToast);
  });
  const platformLanguageSelect = $("#platformLanguageSelect");
  if (platformLanguageSelect) {
    platformLanguageSelect.onchange = event => {
      mutate("/api/user/language", { language: event.target.value }, platformCopy[event.target.value]?.languageToast || "Platform language updated");
    };
  }

  $("#quizBtn").onclick = () => openWorkflowModal({
    eyebrow: "Learning assessment",
    title: "Complete quiz",
    summary: "Confirm assessment readiness before quiz score, progress, readiness, and activity state update.",
    confirmLabel: "Complete quiz",
    path: "/api/learning/quiz",
    body: {},
    success: "Quiz completed",
    record: "Quiz score, enrollment progress, learning hours, readiness, and activity feed",
    provider: "Certificate provider can issue credential after quiz progress exists.",
    checklist: [
      { title: "Active course", detail: translatedCourse(activeCourse()).title, status: "live", label: courseStatus(activeCourse()) },
      { title: "Current score", detail: `${data.profile.quizScore || 0}`, status: data.profile.quizScore ? "ready" : "pending", label: "Score" },
      { title: "Credential path", detail: "A quiz score unlocks certificate issue workflow.", status: "ready", label: "Next" }
    ]
  });
  $("#certBtn").onclick = () => openWorkflowModal({
    eyebrow: "Credential workflow",
    title: "Issue certificate",
    summary: "Confirm the credential issue and provider evidence before adding a certificate to the learner profile.",
    confirmLabel: "Issue certificate",
    path: "/api/learning/certificate",
    body: {},
    success: "Certificate issued",
    record: "Certificate number, completed course, readiness, provider event, and activity feed",
    provider: "Learning certificate provider records certificate.issued.",
    checklist: [
      { title: "Active course", detail: translatedCourse(activeCourse()).title, status: "live", label: courseStatus(activeCourse()) },
      { title: "Quiz score", detail: `${data.profile.quizScore || 0}`, status: data.profile.quizScore ? "ready" : "blocked", label: data.profile.quizScore ? "Ready" : "Quiz first" },
      { title: "Certificate count", detail: `${data.profile.certificates?.length || 0} certificate(s) already issued`, status: "ready", label: "Record" }
    ]
  });
  $("#startActiveCourseBtn").onclick = () => {
    const course = activeCourse();
    if (course) openWorkflowModal(workflowConfig("learning", "start", { dataset: {} }));
  };
  $("#completeLessonBtn").onclick = () => {
    const course = activeCourse();
    const enrollment = course ? courseEnrollment(course.id) : null;
    if (course) openWorkflowModal(lessonWorkflowConfig(course, enrollment?.activeModuleIndex || 0));
  };
  $$("[data-learning-access]").forEach(button => button.onclick = () => openWorkflowModal(learningAccessibilityWorkflowConfig(button.dataset.learningAccess)));
  $$("[data-workforce]").forEach(button => button.onclick = () => openWorkflowModal(workflowConfig("workforce", button.dataset.workforce, { dataset: {} })));
  $$("[data-health]").forEach(button => button.onclick = () => openHealthWorkflow(button.dataset.health, button));
  $("#runIntakeSimulationBtn").onclick = openGuidedIntakeSimulation;
  $$(".order").forEach(button => button.onclick = () => openWorkflowModal(workflowConfig("trade", "order", { dataset: { productId: button.dataset.productId } })));
  $("#refreshTrackingBtn").onclick = () => openWorkflowModal(workflowConfig("trade", "tracking", { dataset: {} }));
  $("#advanceOrderBtn").onclick = () => openWorkflowModal(workflowConfig("trade", "advance", { dataset: {} }));
  $("#droneMissionBtn").onclick = () => openWorkflowModal(workflowConfig("trade", "drone-plan", { dataset: { productId: firstProduct()?.id } }));
  $("#droneScanBtn").onclick = () => openWorkflowModal(workflowConfig("trade", "drone", { dataset: { productId: firstProduct()?.id } }));
  $("#droneInterventionBtn").onclick = () => openWorkflowModal(workflowConfig("trade", "drone-intervention", { dataset: { productId: firstProduct()?.id } }));
  $("#liveInvestorDemoBtn").onclick = runLiveInvestorDemoMode;
  $("#exportEvidenceBtn").onclick = exportEvidencePacket;
  $("#dashboardInstallBtn").onclick = installAgriNexusApp;
  $$("[data-pay]").forEach(button => button.onclick = () => {
    const [provider, amount] = button.dataset.pay.split(":");
    openWorkflowModal({
      ...workflowConfig("trade", "wallet", { dataset: {} }),
      body: { provider, amount: Number(amount) },
      confirmLabel: `${provider} ${Number(amount) >= 0 ? "+" : ""}${amount}`
    });
  });
  $$("[data-ai]").forEach(button => button.onclick = () => openWorkflowModal(workflowConfig("ai", button.dataset.ai, { dataset: {} })));
  $("#aiConsoleRun").onclick = () => openWorkflowModal({
    ...workflowConfig("ai", $("#aiConsoleType").value, { dataset: {} }),
    title: `Run AI test: ${$("#aiConsoleType").value}`,
    confirmLabel: "Run AI test",
    success: "AI test complete"
  });
  $("#billingCheckoutBtn").onclick = () => openWorkflowModal({
    eyebrow: "Billing workflow",
    title: "Test subscription checkout",
    summary: "Confirm the billing provider workflow before creating a subscription checkout event.",
    confirmLabel: "Test billing checkout",
    path: "/api/billing/checkout",
    body: { plan: "standard" },
    success: "Billing workflow tested",
    record: "Billing provider event, admin audit trail, and subscription readiness evidence",
    provider: "Live checkout requires BILLING_PROVIDER, BILLING_WEBHOOK_URL, BILLING_PROVIDER_API_KEY, and BILLING_PRICE_ID.",
    checklist: [
      { title: "Billing provider", detail: data.providers.find(item => item.id === "billing-subscriptions")?.detail || "Billing provider not configured", status: data.providers.find(item => item.id === "billing-subscriptions")?.status === "connected" ? "ready" : "pending", label: "Billing" },
      { title: "Legal pages", detail: "Terms, Privacy, and Refund Policy are available from Admin.", status: "ready", label: "Legal" },
      { title: "Subscriber path", detail: "Checkout event is recorded for admin review.", status: "ready", label: "Audit" }
    ]
  });
  $("#startOnboardingBtn").onclick = () => openWorkflowModal(workflowConfig("onboarding", "start", { dataset: {} }));
  $("#openSupportBtn").onclick = () => openWorkflowModal(workflowConfig("support", "ticket", { dataset: {} }));
  $("#inviteSubscriberBtn").onclick = () => openWorkflowModal(workflowConfig("subscriber", "invite", { dataset: {} }));
  $("#addTestUserBtn").onclick = () => openWorkflowModal(workflowConfig("test-user", "create", { dataset: {} }));
  $("#addAdminUserBtn").onclick = () => openWorkflowModal(workflowConfig("admin-user", "create", { dataset: {} }));
  $("#agentPlanBtn").onclick = createAgentPlan;
  $("#agentExecuteBtn").onclick = executeAgentPlan;
  $("#agentBriefingBtn").onclick = createGovernmentBriefing;
  $("#agentMissionBtn").onclick = runJarvisFullMission;
  $("#missionResumeBtn").onclick = resumeNextMission;
  $("#missionAutopilotBtn").onclick = startFarmerAutopilotMission;
  $("#cloudAgentRunBtn").onclick = launchCloudAgentMission;
  $("#cloudAgentTickBtn").onclick = runCloudAgentQueue;
  $("#cloudAgentApproveBtn").onclick = approveCloudAgentWork;
  $("#cloudAgentTemplateBtn").onclick = createCloudAgentTemplate;
  $("#runCollectiveIntelligenceBtn").onclick = runCollectiveIntelligence;
  $("#runFrontierBrainBtn").onclick = runFrontierBrain;
  $("#voiceListenBtn").onclick = () => handleNexusOsVoiceControlAction("toggle-listening", { source: "voice-panel-listen-button" });
  $("#voiceRunBtn").onclick = runVoiceTextCommand;
  $("#voiceFirstBtn").onclick = toggleVoiceFirstMode;
  $("#voiceSpeakBtn").onclick = () => handleNexusOsVoiceControlAction("repeat-response", { source: "voice-panel-read-button" });
  $("#voiceHelpBtn").onclick = openVoiceHelp;
  $("#voiceTextCommand").addEventListener("keydown", event => {
    if (event.key === "Enter") runVoiceTextCommand();
  });
  $("#globalListenBtn").onclick = () => handleNexusOsVoiceControlAction("toggle-listening", { source: "global-listen-button" });
  $("#globalRunBtn").onclick = runGlobalCommand;
  $("#globalVoiceFirstBtn").onclick = toggleVoiceFirstMode;
  $("#globalYesBtn").onclick = () => answerGlobalConversation("yes");
  $("#globalNoBtn").onclick = () => answerGlobalConversation("no");
  $("#globalReadBtn").onclick = () => handleNexusOsVoiceControlAction("repeat-response", { source: "global-read-button" });
  $("#globalVoiceHelpBtn").onclick = openVoiceHelp;
  $("#voiceHelpCloseBtn").onclick = closeVoiceHelp;
  $("#globalInstallBtn").onclick = installAgriNexusApp;
  $("#globalCloseBtn").onclick = closeAskNexus;
  $("#globalBackBtn").onclick = closeAskNexus;
  $("#globalCommandInput").addEventListener("keydown", event => {
    if (event.key === "Enter") runGlobalCommand();
  });
  $("#globalCommandInput").addEventListener("input", event => {
    if (!String(event.target?.value || "").trim()) clearLevelOneAgentActionSuggestionLabel();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (voiceRecognition) {
        voiceAutoRestart = voiceFirstMode;
        voiceRecognition.stop();
      }
      updateNexusBehaviorLayer("ready", "Nexus paused listening while the app is hidden.");
      return;
    }
    if (voiceFirstMode && voiceAutoRestart && !voiceRecognition && !voiceSpeaking) {
      updateNexusBehaviorLayer("listening", "Nexus is resuming voice-first listening.");
      setTimeout(() => {
        if (!voiceRecognition && voiceFirstMode && !voiceSpeaking && !voiceStopRequested) startVoiceListening({ source: "genesis-visible-resume" });
      }, 600);
    }
  });
  window.addEventListener("online", () => updateNexusBehaviorLayer("ready", "Connection restored. Nexus can use live services when configured."));
  window.addEventListener("offline", () => updateNexusBehaviorLayer("ready", "Connection offline. Nexus will keep local workflows available."));
  installStableSpeechVoicePreference();
  refreshMicSupport();
  $("#jarvisToggle").onclick = toggleAskNexus;
  $("#jarvisCloseBtn").onclick = closeAskNexus;
  $("#jarvisListenBtn").onclick = () => handleNexusOsVoiceControlAction("toggle-listening", { source: "legacy-jarvis-listen-button" });
  $("#jarvisRunBtn").onclick = runJarvisCommand;
  $("#jarvisMissionBtn").onclick = runJarvisFullMission;
  $("#jarvisReadBtn").onclick = () => handleNexusOsVoiceControlAction("repeat-response", { source: "legacy-jarvis-read-button" });
  $("#jarvisCommandInput").addEventListener("keydown", event => {
    if (event.key === "Enter") runJarvisCommand();
  });
  $$("[data-command-preset]").forEach(button => {
    button.onclick = runPresetCommand;
  });
  document.addEventListener("click", event => {
    const target = event.target?.nodeType === 1 ? event.target : event.target?.parentElement;
    const pilotButton = target?.closest?.("[data-pilot-scenario][data-simple-command]");
    if (!pilotButton) return;
    event.preventDefault();
    event.stopPropagation();
    renderA100PilotScenarioPreviewCard({
      label: pilotButton.textContent || "Pilot scenario",
      command: pilotButton.dataset.simpleCommand,
      capability: pilotButton.dataset.pilotCapability
    });
  }, true);
  $$("[data-pilot-scenario]").forEach(button => {
    button.onclick = runLocalPilotScenario;
  });
  $$("[data-government-action]").forEach(button => {
    button.onclick = runGovernmentReadinessAction;
  });
  const remoteLaunchKitBtn = $("#remoteLaunchKitBtn");
  if (remoteLaunchKitBtn) remoteLaunchKitBtn.onclick = runRemoteLaunchKit;
  const adminHealthCheck = $("#adminHealthCheck");
  if (adminHealthCheck) adminHealthCheck.onclick = runAdminHealthCheckDirect;
  const liveServiceCheck = $("#liveServiceCheckBtn");
  if (liveServiceCheck) liveServiceCheck.onclick = runLiveServiceCheck;
  const liveServiceCheckFromIntegrations = $("#liveServiceCheckFromIntegrations");
  if (liveServiceCheckFromIntegrations) liveServiceCheckFromIntegrations.onclick = runLiveServiceCheck;
  $("#demoRunBtn").onclick = runExecutiveDemo;
  $("#wowDemoBtn").onclick = runWowDemo;
  $$("[data-ai-review]").forEach(button => button.onclick = () => reviewLatestAi(button.dataset.aiReview));
  $$("[data-notify]").forEach(button => button.onclick = () => sendModuleNotification(button.dataset.notify));
  $("#workflowConfirm").onclick = event => {
    event.preventDefault();
    event.stopPropagation();
    confirmPendingWorkflow();
  };
  $("#workflowClose").onclick = closeWorkflowModal;
  $("#workflowCancel").onclick = closeWorkflowModal;
  $("#workflowModal").onclick = event => {
    if (event.target.id === "workflowModal") closeWorkflowModal();
  };
  document.addEventListener("keydown", event => {
    if (event.key === "Enter" && event.target?.id === "userCaptionInput") {
      event.preventDefault();
      const command = event.target.value.trim();
      if (!command) return updateUserCaptionPanel("Type a request or press Mic to speak.");
      event.target.value = "";
      setCommandInputs(command);
      if (handleJarvisStyleStandardUserSafetyResponse(command)) return;
      if (handleNexusSimulationCaptionCommand(command)) return;
      if (handleNexusMapNavigationHandoffCaptionCommand(command)) return;
      if (handleNexusInternalNavigationCaptionCommand(command)) return;
      if (handleNexusMarketplaceInquiryPreparationCaptionCommand(command)) return;
      if (handleNexusCareTeamReportCopyViewCaptionCommand(command)) return;
      if (handleNexusChronicCarePhysicianReportCaptionCommand(command)) return;
      if (handleNexusLocalDraftMessageCaptionCommand(command)) return;
      if (handleNexusCallPreparationCaptionCommand(command)) return;
      void handleVoiceCommand(command);
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openAskNexus();
    }
    if (event.key === "Escape" && !$("#workflowModal").classList.contains("hidden")) {
      closeWorkflowModal();
      return;
    }
    if (event.key === "Escape" && !$("#nexusOnboardingModal")?.classList.contains("hidden")) {
      closeNexusOnboardingModal();
      return;
    }
    if (event.key === "Escape" && (!$("#jarvisPanel")?.classList.contains("hidden") || !$("#globalAssistantBar")?.classList.contains("hidden"))) {
      closeAskNexus();
      return;
    }
    if (event.key === "Tab" && !$("#workflowModal").classList.contains("hidden")) {
      const focusable = $$("#workflowModal button, #workflowModal input, #workflowModal select, #workflowModal textarea").filter(item => !item.disabled && item.offsetParent !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

function exposeNexusAppWindowApis() {
  if (typeof window === "undefined") return;
  window.openNexusFunctionWindow = openNexusFunctionWindow;
  window.renderNexusFunctionWindow = renderNexusFunctionWindow;
  window.closeNexusFunctionWindow = closeNexusFunctionWindow;
  window.minimizeNexusFunctionWindow = minimizeNexusFunctionWindow;
  window.restoreNexusFunctionWindow = restoreNexusFunctionWindow;
  window.resolveNexusFunctionIntent = resolveNexusFunctionIntent;
  window.openNexusAppWindow = openNexusAppWindow;
  window.renderNexusAppWindow = renderNexusAppWindow;
  window.closeNexusAppWindow = closeNexusAppWindow;
  window.minimizeNexusAppWindow = minimizeNexusAppWindow;
  window.restoreNexusAppWindow = restoreNexusAppWindow;
  window.resolveNexusAppIntent = resolveNexusAppIntent;
  window.getNexusOsGenesisPlatformAcceptance = getNexusOsGenesisPlatformAcceptance;
  window.NEXUS_PRESENCE_RUNTIME_BASELINE = NEXUS_PRESENCE_RUNTIME_BASELINE;
  window.getNexusPresenceRuntimeBaseline = getNexusPresenceRuntimeBaseline;
  window.NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT = NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT;
  window.getNexusPresenceDesignEnforcementContract = getNexusPresenceDesignEnforcementContract;
  window.NEXUS_PRESENCE_ACCEPTANCE_RELEASE_CONTRACT = NEXUS_PRESENCE_ACCEPTANCE_RELEASE_CONTRACT;
  window.getNexusPresenceAcceptanceReleaseContract = getNexusPresenceAcceptanceReleaseContract;
  window.NEXUS_PRESENCE_PROFILE_CONTRACT = NEXUS_PRESENCE_PROFILE_CONTRACT;
  window.NEXUS_PRESENCE_PROFILE_REGISTRY = NEXUS_PRESENCE_PROFILE_REGISTRY;
  window.getNexusPresenceProfileRegistry = getNexusPresenceProfileRegistry;
  window.resolveNexusPresenceProfile = resolveNexusPresenceProfile;
  window.setNexusPresenceProfile = setNexusPresenceProfile;
  window.NEXUS_VOICE_CAPABILITY_REGISTRY = NEXUS_VOICE_CAPABILITY_REGISTRY;
  window.getNexusVoiceCapabilityRegistry = getNexusVoiceCapabilityRegistry;
  window.resolveNexusVoiceProviderAdapters = resolveNexusVoiceProviderAdapters;
  window.nexusVoiceCapabilitySummary = nexusVoiceCapabilitySummary;
  window.NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT = NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT;
  window.resolveNexusRegionalVoice = resolveNexusRegionalVoice;
  window.nexusRegionalVoiceSummary = nexusRegionalVoiceSummary;
  window.NEXUS_CONVERSATION_STYLE_ENGINE_CONTRACT = NEXUS_CONVERSATION_STYLE_ENGINE_CONTRACT;
  window.NEXUS_DOMAIN_TONE_SAFETY_ADAPTER_CONTRACT = NEXUS_DOMAIN_TONE_SAFETY_ADAPTER_CONTRACT;
  window.resolveNexusDomainToneSafetyAdapter = resolveNexusDomainToneSafetyAdapter;
  window.composeNexusConversationStyleResponse = composeNexusConversationStyleResponse;
  window.inferNexusConversationStyleMode = inferNexusConversationStyleMode;
  window.NEXUS_SPEECH_SYNTHESIS_CONTROLLER_CONTRACT = NEXUS_SPEECH_SYNTHESIS_CONTROLLER_CONTRACT;
  window.nexusSpeechSynthesisControllerState = nexusSpeechSynthesisControllerState;
  window.createNexusSpeechSynthesisUtterance = createNexusSpeechSynthesisUtterance;
  window.runNexusSpeechSynthesisController = runNexusSpeechSynthesisController;
  window.browserVoiceRuntimeProfile = browserVoiceRuntimeProfile;
  window.NEXUS_PRESENCE_SYNCHRONIZATION_CONTRACT = NEXUS_PRESENCE_SYNCHRONIZATION_CONTRACT;
  window.nexusPresenceSynchronizationState = nexusPresenceSynchronizationState;
  window.syncNexusPresenceSurfaces = syncNexusPresenceSurfaces;
  window.NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT = NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT;
  window.getNexusVoicePreferences = getNexusVoicePreferences;
  window.setTemporaryNexusVoicePreference = setTemporaryNexusVoicePreference;
  window.rememberNexusVoicePreferences = rememberNexusVoicePreferences;
  window.forgetNexusVoicePreferences = forgetNexusVoicePreferences;
  window.handleNexusVoicePreferenceCommand = handleNexusVoicePreferenceCommand;
  window.handleNexusVoicePreferenceControlAction = handleNexusVoicePreferenceControlAction;
  window.NEXUS_LISTENING_WAKE_CONTROLLER_CONTRACT = NEXUS_LISTENING_WAKE_CONTROLLER_CONTRACT;
  window.nexusListeningWakeControllerState = nexusListeningWakeControllerState;
  window.createNexusRecognitionConfig = createNexusRecognitionConfig;
  window.normalizeNexusWakeTranscript = normalizeNexusWakeTranscript;
  window.handleNexusPrimaryVoiceButtonClick = handleNexusPrimaryVoiceButtonClick;
}

function exposeNexusBrainIntelligenceRuntimeApis() {
  if (typeof window === "undefined") return;
  window.runNexusAgenticCommandRuntime = runNexusAgenticCommandRuntime;
  window.parseNexusAgenticCommandIntent = parseNexusAgenticCommandIntent;
  window.parseNexusCommand = parseNexusCommand;
  window.resolveNexusIntent = resolveNexusIntent;
  window.classifyNexusMode = classifyNexusMode;
  window.extractNexusEntities = extractNexusEntities;
  window.buildNexusMission = buildNexusMission;
  window.routeNexusCommand = routeNexusCommand;
  window.getNexusMemory = getNexusMemory;
  window.saveNexusMemory = saveNexusMemory;
  window.updateNexusMemory = updateNexusMemory;
  window.deactivateNexusMemory = deactivateNexusMemory;
  window.deleteNexusMemoryWithConfirmation = deleteNexusMemoryWithConfirmation;
  window.NexusOsMissionLifecycleRuntime = Object.freeze({
    states: NEXUS_OS_MISSION_LIFECYCLE_STATES,
    transitions: NEXUS_OS_MISSION_TRANSITIONS,
    current: currentNexusOsMission,
    start: startNexusOsMission,
    advanceForCommand: advanceNexusOsMissionForCommand,
    transition: transitionNexusOsMission,
    canTransition: canTransitionNexusOsMission
  });
}

function installNexusBrainIntelligenceCommandBridge() {
  if (typeof document === "undefined" || document.body?.dataset.nexusBrainIntelligenceBound === "true") return;
  if (document.body) document.body.dataset.nexusBrainIntelligenceBound = "true";
  const isExplicitBrainLaneCommand = command => !isNexusEnterpriseHealthEvidenceTrustCommand(command) && /\b(blood pressure|bp\b|glucose|blood sugar|a1c|medication|medicine|missed|chest pain|shortness of breath|diabetes|hypertension|obesity|rpm|rtm|chronic|crop|maize|cassava|tomato|rice|agriculture|farm|field|rainfall|irrigation|soil test|yield risk|market-ready|food-security|agronomist|buyer|buyers|seller|sellers|shipment|tracking|trade route|logistics|job|application|employer|learning plan|drone|whatsapp|telegram|sms|message|email|call|phone|provider handoff|pharmacy|mobile clinic|telehealth|show receipts|what happened|continue mission|cancel mission|confirm mission|mark .*closed|out of business)\b/i.test(String(command || ""));

  document.addEventListener("click", async event => {
    const copySummary = event.target?.closest?.("[data-nexus-copy-predictive-summary]");
    if (copySummary) {
      event.preventDefault();
      const text = nexusChronicPredictiveModelerState?.physicianSummary?.text || "";
      if (navigator.clipboard && text) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      copySummary.textContent = text ? translateText("Summary copied") : translateText("No summary yet");
      setTimeout(() => {
        copySummary.textContent = translateText("Copy summary");
      }, 1800);
      return;
    }
    const copyAgricultureSummary = event.target?.closest?.("[data-nexus-copy-agriculture-advisor-summary]");
    if (copyAgricultureSummary) {
      event.preventDefault();
      const text = nexusAgriculturePredictiveModelerState?.advisorSummary?.text || "";
      if (navigator.clipboard && text) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      copyAgricultureSummary.textContent = text ? translateText("Summary copied") : translateText("No summary yet");
      setTimeout(() => {
        copyAgricultureSummary.textContent = translateText("Copy summary");
      }, 1800);
      return;
    }
    const submit = event.target?.closest?.("[data-nexus-command-center-submit]");
    if (!submit) return;
    const input = nexusCommandInputForSubmit(submit);
    const command = input?.value?.trim() || "";
    if (routeNexusCommandCenterCommunicationSubmit(event, submit, "typed-command-submit")) return;
    if (!command || isNexusCapabilityOverviewCommand(command) || isNexusLiveKnowledgeQuestion(command) || isNexusMediaMusicCommand(command) || isNexusEnterpriseHealthEvidenceTrustCommand(command)) return;
    const shouldUseBrain = shouldNexusAgenticCommandRuntimeHandle(command) || isNexusPredictiveMaturityCommand(command) || isNexusAgriculturePredictiveModelerCommand(command) || isNexusMultiDomainPredictiveCommand(command) || isNexusChronicPredictiveModelerCommand(command) || isExplicitBrainLaneCommand(command);
    if (!shouldUseBrain) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    if (!submitNexusAgenticCommandRuntime(command, input, "brain-command-bridge", event)) {
      runNexusAgenticCommandRuntime(command, { source: "brain-command-bridge" });
    }
  }, true);

  document.addEventListener("keydown", async event => {
    if (event.key !== "Enter" || event.shiftKey || event.defaultPrevented) return;
    const input = event.target?.matches?.("#nexusCommandCenterInput, [data-nexus-window-command-input]") ? event.target : null;
    if (!input) return;
    const command = input.value?.trim() || "";
    if (handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source: "typed-command-keyboard" })) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = "";
      setCommandInputs("");
      return;
    }
    advanceNexusOsMissionForCommand(command, { source: "typed-command-keyboard" });
    if (await handleNexusUnifiedBrainRuntimeCommand(command, { source: "typed-command-keyboard" })) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      return;
    }
    if (await handleNexusAgricultureCollaborationRuntimeCommand(command, { source: "typed-command-keyboard" })) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      return;
    }
    if (await handleNexusHealthcareCollaborationRuntimeCommand(command, { source: "typed-command-keyboard" })) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      return;
    }
    if (await handleNexusMessagePreparationRuntimeCommand(command, { source: "typed-command-keyboard" })) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      return;
    }
    if (await handleNexusFullCommunicationRuntimeCommand(command, { source: "typed-command-keyboard" })) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (input) input.value = command;
      setCommandInputs(command);
      return;
    }
    if (!command || isNexusCapabilityOverviewCommand(command) || isNexusLiveKnowledgeQuestion(command) || isNexusMediaMusicCommand(command)) return;
    const shouldUseBrain = shouldNexusAgenticCommandRuntimeHandle(command) || isNexusPredictiveMaturityCommand(command) || isNexusAgriculturePredictiveModelerCommand(command) || isNexusMultiDomainPredictiveCommand(command) || isNexusChronicPredictiveModelerCommand(command) || isExplicitBrainLaneCommand(command);
    if (!shouldUseBrain) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    if (!submitNexusAgenticCommandRuntime(command, input, "brain-command-keyboard", event)) {
      runNexusAgenticCommandRuntime(command, { source: "brain-command-keyboard" });
    }
  }, true);
}

async function boot() {
  exposeNexusAppWindowApis();
  exposeNexusBrainIntelligenceRuntimeApis();
  registerWebApp();
  installAgriNexusNativeBridge();
  restoreNexusRuntimeMemory();
  installNexusBrainIntelligenceCommandBridge();
  bindStatic();
  loadPublicMapConfig().catch(() => DEFAULT_MAP_TILE_CONFIG);
  installNexusAutonomousRuntimePreview();
  captureOriginalText();
  bindNexusPermanentMicrophoneControl();
  setLoginLanguage(localStorage.getItem("agrinexusLoginLanguage") || "en");
  $("#loginView").classList.remove("hidden");
  $("#password")?.focus();
}

boot();
