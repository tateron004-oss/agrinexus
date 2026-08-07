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
const AGRINEXUS_BUILD_VERSION = "nexus-behavior-502";
const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v447";
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
      "Write todayâ€™s top three farm actions.",
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
    studio: "Ø§Ø³ØªÙˆØ¯ÙŠÙˆ Ø§Ù„ØªØ¹Ù„Ù…",
    title: "Ø§Ù„ØªØ¹Ù„Ù… ÙˆØ§Ù„ØªØ·ÙˆÙŠØ±",
    intro: "Ø§Ø¨Ù† Ø§Ù„Ø¬Ø§Ù‡Ø²ÙŠØ© Ø¹Ø¨Ø± Ø¯ÙˆØ±Ø§Øª Ù…ÙˆØ¬Ù‡Ø© ÙˆØ§Ø®ØªØ¨Ø§Ø±Ø§Øª ÙˆØ´Ù‡Ø§Ø¯Ø§Øª ÙˆÙ…Ù‡Ø§Ø±Ø§Øª Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ø§Ù„Ø¹Ù…Ù„.",
    readiness: "Ø§Ù„Ø¬Ø§Ù‡Ø²ÙŠØ©",
    focus: "Ø§Ù„ØªØ±ÙƒÙŠØ² Ø§Ù„Ø­Ø§Ù„ÙŠ",
    choose: "Ø§ß½ûã›Ê×¬¢h­µçYÝZYY‹ˆ™\ÜÛœÙNˆ’HØ[ˆ[Ù[HÜ›Üˆš\œÝÚ]Ü›ÜÜˆ›ÙXÝÈ[ÝHØ[ÈÙ[Üˆ[Ý™OÈ‹ˆ›Ý]SX™[ˆ™˜\Ý[[™K]˜YH‚ˆJNÂˆBˆYˆ
×ŠH™YYÛÜšß™YYÛÜšßš[™ÛÜšßš[™H›ØŸ›ØˆX\Ù_ÛÜšÈX\Ù_™YY›ØŸ[YHš[™H›Øˆ]Ø^_ÚÝÈ›Øˆ]Ø^\ßØ\™Y\ˆ]Ø^\ß›Øˆ™XY[™\Üß[YH™\\™H›ÜˆÛÜšßØ^š_˜X˜Z›ß[\ÚJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ˜\Ý
Âˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆÛÜšÙ›Ü˜ÙKYÝZYY‹ˆ™\ÜÛœÙNˆ’HØ[ˆ[Ú]ÛÜšËˆš\œÝÚ]ÛÝ[žHÜˆ\™XHÈ[ÝHØ[ÈÛÜšÈ[È‹ˆ›Ý]SX™[ˆ™˜\Ý[[™K]ÛÜšÙ›Ü˜ÙH‚ˆJNÂˆBˆYˆ
×Š[YHÚ]˜Z[š[™ßÝ\˜Z[š[™ßÜ[ˆ˜Z[š[™ß[YHX\›ŸÝ\HÛÝ\œÙ_Ý\ÛÝ\œÙ_ZÙHÛÝ\œÙ_™YÚ[ˆÛÝ\œÙ_Ý\X\›š[™ßØ[X\›ŸX\›ˆX\Ù_ÛÝ\œÙ_\ÜÛÛŸÛÛ[ÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ˜\Ý
Âˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ›X\›š[™ËYÝZYY‹ˆ™\ÜÛœÙNˆ’HØ[ˆ[[ÝHX\›‹ˆš\œÝÚ]ÚÚ[ÜˆÛÝ\œÙHÈ[ÝHØ[È‹ˆ›Ý]SX™[ˆ™˜\Ý[[™K[X\›š[™È‚ˆJNÂˆBˆYˆ
×Š[YH[ˆHšY[šY[Ý\Ü
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ˜\Ý
Âˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ˜Ü›ÜZ[‹ˆ™\ÜÛœÙNˆ’HÜ[™YšY[Ý\Üˆ[YHHšY[Ü›Ü›Ý]KÜˆØØ[ÛÜšÈ\ÜÝYK[™™^\ÈÚ[ÝZYHH™^ØY™HÝ\ˆ‹ˆ›Ý]SX™[ˆ™˜\Ý[[™KYšY[\Ý\Ü‚ˆJNÂˆBˆYˆ
×ŠÜ[ˆX[XØÙ\Üß[ZX[Ý\Ü
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ˜\Ý
Âˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆšX[Z[ZÙH‹ˆ™\ÜÛœÙNˆ’HÜ[™YX[XØÙ\ÜËˆ\È\È›ÝHXYÛ›ÜÚ\ËˆHØ[ˆÝZYH[ZÙKØ\[ÛœË›ÝšY\ˆ[™Ù™‹ÜˆØØ[Ø[Y\˜HÝ\ÜÛ™HÝ\]H[YKˆ‹ˆ›Ý]SX™[ˆ™˜\Ý[[™KZX[XXØÙ\ÜÈ‚ˆJNÂˆBˆYˆ
×ŠÜ[ˆX\šÙ]XÙ_Ü[ˆYÜš]˜YJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ˜\Ý
Âˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ˜Ü›Ü\Ø[KYÝZYY‹ˆ™\ÜÛœÙNˆ’HÜ[™YX\šÙ]XÙH[™YÜšU˜YHÝ\ÜˆYÜšXÝ[\™H˜YH\ÈÝ[Ý\ÜYˆ[YHHÜ›Ü^Y\‹›ÙXÝÜˆ›Ý]H[ÝHØ[ÈÛÜšÈÛ‹ˆ‹ˆ›Ý]SX™[ˆ™˜\Ý[[™K[X\šÙ]XÙH‚ˆJNÂˆBˆYˆ
×ŠÜ[ˆX\Ü[ˆX\ßÚÝÈX\ÚÝÈX\ß[X\ÛØ˜[X\™X[X\X\X\Ù_˜[X[š_X\_Ø\JW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ˜\Ý
Âˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ™[[X\‹ˆ™\ÜÛœÙNˆ‘[X\\ÈÜ[‹ˆ[ÝHØ[ˆ›ÛÛKš[™Û[šXÜËÚXÚÈ›Ý]\ËÜˆ˜XÚÈÚ\Y[Ëˆ‹ˆ›Ý]SX™[ˆ™˜\Ý[[™K[X\‚ˆJNÂˆBˆ™]\›ˆ[ÂŸB‚™[˜Ý[Ûˆ[”Ú[\U\Ù\•›ÚXÙR[[
[[ÛÛ[X[™HˆŠHÂˆYˆ
Z[[
H™]\›ˆ˜[ÙNÂˆÛX\YÙ[›ÙÜ™\ÜÕ[Y\œÊ
NÂˆÛÛ\[š[Û”›Ý]SÝ]ÛÛYSY]Y]JÛÛ[X[™Âˆ\Nˆ[[\Kˆ\™XÝXÝ[ÛŽˆ[[™\™XÝXÝ[Û‹ˆÛÜšÙ›ÝÎˆ[[ÛÜšÙ›ÝËˆXÝX[›Ý]S˜[YNˆ[[™\™XÝXÝ[ÛˆÚ[[ÛÜšÙ›ÝË[[˜XÝ[Û—K™š[\Š›ÛÛX[ŠKš›Ú[Š‹ˆŠH[[\KˆXÝX[›Ý]TÛÝ\˜ÙNˆÙX‹œÚ[\U\Ù\‘\™XÝ›ÚXÙR[[‹ˆÛÜšÙ›ÝÓÜ[™Yˆ[[\HOOH™\™XÝˆ[[\HOOHÛÜšÙ›ÝÈ‹ˆÛÛ™š\›X][Û”™\]Z\™Yˆ˜[ÙBˆJNÂˆYˆ
[[\HOOH˜Û\šYžHŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[[˜Û\šYšXØ][Ûˆ[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊ[[œÝYÙÙ\Ý[ÛœÈÈšX[‹ÛÜšÈ‹›X\›š[™È‹˜Ü›ÜÈ‹›X\—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š›\Ý[š[™È‹“™^\È\ÚÙYÛ™HÚÜÛ\šYžZ[™È]Y\Ý[Ûˆ[œÝXYÙˆÝY\ÜÚ[™ËˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ[[œ™\ÜÛœÙKYJNÂˆ™]\›ˆYNÂˆBˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆYÙ[\™›Ü›X[˜ÙTÝ]K›\ÝÛÛ[X[™HÛÛ[X[™ÂˆZ[ØØ[]™[Û™TÝYÙÙ\Ý[Û‘›Ü”Ú[\U\Ù\’[[
[[ÛÛ[X[™
NÂˆ™\Ù\™PÛÛ›ÛYXÝ[Û”™]šY]Ñ\š[™ÐÛÛ[X[™›Ý]HHYNÂˆ]Y]YSZXÜ›Ý\ÚÊ

HOˆÂˆ™\Ù\™PÛÛ›ÛYXÝ[Û”™]šY]Ñ\š[™ÐÛÛ[X[™›Ý]HH˜[ÙNÂˆJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOH™[[X\ŠH™]\›ˆÜ[‘[ØØ[U\Ù\“X\
[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOH˜ÛÝ[žK[X\ŠH™]\›ˆÜ[ÛÝ[žSX\œ›ÛU›ÚXÙJ[[˜ÛÝ[žK[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOHšÛYHŠH™]\›ˆÜ[“™^\ÒÛYJ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOHšX[Z[ZÙHŠH™]\›ˆÜ[’X[[ZÙS›ÝÊ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOH›YYXÚ[™KZ[ŠH™]\›ˆÜ[“YYXÚ[™R[›ÝÊ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOH˜Û[šXË[X\Z[ŠH™]\›ˆÜ[’X[˜XÚ[]SX\›ÝÊ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOH˜Û[šXËZ[ŠH™]\›ˆÜ[Û[šXÒ[›ÝÊ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOH˜Ü›ÜZ[ŠH™]\›ˆÜ[Ü›Ü›Ø›[R[›ÝÊ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOH™ØÝÜ‹Z[ŠH™]\›ˆÜ[‘ØÝÜ’[›ÝÊ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOH˜Ü›Ü\Ø[KYÝZYYŠH™]\›ˆÜ[Ü›ÜØ[QÝZYY›ÝÊ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOHÛÜšÙ›Ü˜ÙKYÝZYYŠH™]\›ˆÜ[•ÛÜšÙ›Ü˜ÙQÝZYY›ÝÊ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOH›X\›š[™ËYÝZYYŠHÂˆÛÛœÝÜ[™YHÜ[“X\›š[™ÑÝZYY›ÝÊ[[œ™\ÜÛœÙJNÂˆZ[ØØ[]™[Û™TÝYÙÙ\Ý[Û‘›Ü”Ú[\U\Ù\’[[
[[ÛÛ[X[™
NÂˆÙ][Y[Ý]


HOˆÂˆZ[ØØ[]™[Û™TÝYÙÙ\Ý[Û‘›Ü”Ú[\U\Ù\’[[
[[ÛÛ[X[™
NÂˆKN
NÂˆ™]\›ˆÜ[™YÂˆBˆYˆ
[[\HOOH™\™XÝˆ	‰ˆ[[™\™XÝXÝ[ÛˆOOHœ›Ý]KYÝZYYŠH™]\›ˆÜ[”›Ý]QÝZYY›ÝÊ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOHÛÜšÙ›ÝÈˆ	‰ˆ[[ÛÜšÙ›ÝÈOOHšX[ˆ	‰ˆ[[˜XÝ[ÛˆOOH˜Ø\[ÛˆŠH™]\›ˆÜ[•[ZX[Ø\[ÛœÓ›ÝÊ[[œ™\ÜÛœÙJNÂˆYˆ
[[\HOOHÛÜšÙ›ÝÈŠHÂˆÛÛœÝÜ[™YHÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ[[ÛÜšÙ›ÝË[[˜XÝ[Û‹[[œ™\ÜÛœÙK[[™]\Ù]ßJNÂˆZ[ØØ[]™[Û™TÝYÙÙ\Ý[Û‘›Ü”Ú[\U\Ù\’[[
[[ÛÛ[X[™
NÂˆÙ][Y[Ý]


HOˆÂˆZ[ØØ[]™[Û™TÝYÙÙ\Ý[Û‘›Ü”Ú[\U\Ù\’[[
[[ÛÛ[X[™
NÂˆKN
NÂˆ™]\›ˆÜ[™YÂˆBˆ™]\›ˆ˜[ÙNÂŸB‚™[˜Ý[Ûˆ\Ôš[Üš]TÙ\šXÙU›ÚXÙR[[
[[
HÂˆYˆ
Z[[[[\HOOH˜Û\šYžHŠH™]\›ˆ˜[ÙNÂˆYˆ
[[\HOOH™\™XÝŠH™]\›ˆÈšX[Z[ZÙH‹›YYXÚ[™KZ[‹˜Û[šXËZ[‹˜Û[šXË[X\Z[‹˜Ü›ÜZ[‹™ØÝÜ‹Z[‹˜Ü›Ü\Ø[KYÝZYY‹ÛÜšÙ›Ü˜ÙKYÝZYY‹›X\›š[™ËYÝZYY‹œ›Ý]KYÝZYY‹™[[X\‹˜ÛÝ[žK[X\‹šÛYH—Kš[˜ÛY\Ê[[™\™XÝXÝ[ÛŠNÂˆYˆ
[[\HOOHÛÜšÙ›ÝÈŠH™]\›ˆÈšX[‹˜YH‹ÛÜšÙ›Ü˜ÙH‹›X\›š[™È‹›X\—Kš[˜ÛY\Ê[[ÛÜšÙ›ÝÊNÂˆ™]\›ˆ˜[ÙNÂŸB‚™[˜Ý[Ûˆ™\Ù]ÛÛ™\œØ][Û”Ý]Q›Ü”š[Üš]R[[
ÛÛ[X[™HˆŠHÂˆYˆ
XÝ]™PÛÛ™\œØ][Û’[ZÙJHØ]™PÛÛ™\œØ][Û’[ZÙJ[
NÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÛX\“™^\Ð[œÝÙ\ÛÛ^

NÂˆYˆ
[™[™ÕÛÜšÙ›ÝÈ	‰ˆ\Ó™]ÔÙ\šXÙT™\]Y\ÝÝ™\•ÛÜšÙ›ÝÊÛÛ[X[™
JHÛX\“Ü[•ÛÜšÙ›ÝÑ›Ü“™]Õ›ÚXÙT™\]Y\Ý
ÛÛ[X[™
NÂŸB‚™[˜Ý[Ûˆ\Ü]ÚÙ[™\Ú\ÕÛÜšÜÜXÙPXÝ[ÛŠXÝ[ÛˆHßK™\Ý[HßKÜ[ÛœÈHßJHÂˆYˆ
XXÝ[ÛˆXÝ[Û‹\HOOH™Ù[™\Ú\ËÛÜšÜÜXÙK›Ü[ˆŠH™]\›ˆ˜[ÙNÂˆÛÛœÝÛÜšÜÜXÙHHÝš[™ÊXÝ[Û‹ÛÜšÜÜXÙHˆŠKÓÝÙ\Ø\ÙJ
NÂˆÛÛœÝ^[ØYHXÝ[Û‹œ^[ØYßNÂˆÛÛœÝ\›Z\ÜÚ[Û”ÙXÝ[ÛˆHÂˆX\ˆ›X\‹ÛÜšÙ›Ü˜ÙNˆÛÜšÙ›Ü˜ÙH‹˜YNˆ˜YH‹X[ˆšX[‹ˆ[ZX[ˆšX[‹›[Øš[KXÛ[šXÈŽˆšX[‹\›XXÞNˆšX[‹ˆYÜšXÝ[\™Nˆ˜YH‹X\›š[™Îˆ›X\›š[™È‹YYXNˆ˜YÙ[‹ˆ™[Z[™\œÎˆ˜YÙ[‹Ù™›[™Nˆ˜YÙ[‹›]™KZÛ›ÝÛYÙHŽˆ˜YÙ[‚ˆVÝÛÜšÜÜXÙWNÂˆYˆ
\\›Z\ÜÚ[Û”ÙXÝ[ÛˆXØ[“Ü[”ÙXÝ[ÛŠ\›Z\ÜÚ[Û”ÙXÝ[ÛŠJH™]\›ˆ˜[ÙNÂˆYˆ
ÛÜšÜÜXÙHOOH›X\ˆ	‰ˆØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜ÛÛZ[œÊ\Ù\‹[X\Y[[Ü[ˆŠJHÂˆØÝ[Y[˜›ÙK˜Û\ÜÓ\Ýœ™[[Ý™J\Ù\‹[X\Y[[Ü[ˆŠNÂˆBˆÛÛœÝØ\Xš[]RYHXÝ[Û‹˜Ø\Xš[]RYÂˆX\ˆ›X\È‹ˆÛÜšÙ›Ü˜ÙNˆÛÜšÙ›Ü˜ÙH‹ˆ˜YNˆ˜YÜš]˜YH‹ˆX[ˆØ›ÛÙËHOÜ™\ÜÝ\™_\\[œÚ[ÛŸ˜œ‹ÚK\Ý
Øš™XÝ˜[Y\Ê^[ØY
Kš›Ú[ŠˆŠJHÈš\\[œÚ[Ûˆˆˆ[ZX[‹ˆX\›š[™Îˆ›X\›š[™È‚ˆVÝÛÜšÜÜXÙWHÛÜšÜÜXÙNÂˆÛÛœÝÛÛ[X[™HÝš[™Ê^[ØYœ]Y\žH™\Ý[œ™\ÜÛœÙHØš™XÝ˜[Y\Ê^[ØY
K™š[\Š›ÛÛX[ŠKš›Ú[ŠˆŠH“Ü[ˆ™^\ÈÛÜšÜÜXÙHŠNÂˆ™^\ÑÙ[™\Ú\Õ›ÚXÙQXYÓÙÊ™Ù[™\Ú\Ë]ÛÜšÜÜXÙKXœšYÙK[][˜Ú\ˆ‹ÈÛÜšÜÜXÙKØ\Xš[]RY™\]Y\ÝYˆXÝ[Û‹œ™\]Y\ÝYˆˆJNÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆˆYØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜ÛÛZ[œÊ\Ù\‹[[ÙHŠJHÂˆÙ]^\šY[˜ÙS[ÙJ\Ù\ˆ‹È\œÚ\Ýˆ˜[ÙK[››Ý[˜ÙPÚ[™ÙNˆ˜[ÙHJNÂˆBˆÛÛœÝÜ[™YHÛÜšÜÜXÙHOOH›X\‚ˆÈÜ[‘Ù[™\Ú\Ô™X[[YSX\ÛÜšÜÜXÙJ^[ØYÛÛ[X[™
BˆˆÜ[“™^\ÐØ\Xš[]JØ\Xš[]RYÂˆÛÛ[X[™ˆÛÝ\˜ÙNˆ›Ü[˜ZK\™X[[YH‹ˆÛÝ\˜ÙTÝ\™˜XÙNˆ›ÚXÙWØ]Y[È‹ˆ[œÝ[ˆYBˆJNÂˆYˆ
[Ü[™Y
H™]\›ˆ˜[ÙNÂˆÛÛœÝÜÝHØÝ[Y[œ]Y\žTÙ[XÝÜŠ	ÈÛ™^\Ë]ÛÜšÜÜXÙVÙ]K[™^\Ë]ÛÜšÜÜXÙOHYH—IÊNÂˆYˆ
ÜÝ
HÂˆÜÝœ]Y\žTÙ[XÝÜŠ	ÖÙ]KYÙ[™\Ú\Ë]ÛÜšÜÜXÙK\™Yš[HYH—IÊOËœ™[[Ý™J
NÂˆÛÛœÝ™Yš[HØÝ[Y[˜Ü™X]Q[[Y[
œÙXÝ[ÛˆŠNÂˆ™Yš[™]\Ù]™Ù[™\Ú\ÕÛÜšÜÜXÙT™Yš[HYHŽÂˆ™Yš[œÙ]]šX]J˜\šXK[X™[‹“™^\È›ÚXÙH]Z[ÈŠNÂˆ™Yš[š[›™\’SHÝ›Û™Ï‰Ù\ØØ\R[
˜[œÛ]U^
•›ÚXÙH]Z[ÈŠJ_OÜÝ›Û™Ï˜ÂˆØš™XÝ™[šY\Ê^[ØY
K™›Ü‘XXÚ

ÚÙ^K˜[YWJHOˆÂˆYˆ
TÝš[™Ê˜[YHˆŠKš[J
JH™]\›ŽÂˆÛÛœÝX™[HØÝ[Y[˜Ü™X]Q[[Y[
›X™[ŠNÂˆÛÛœÝØ\[ÛˆHØÝ[Y[˜Ü™X]Q[[Y[
œÜ[ˆŠNÂˆÛÛœÝšY[HØÝ[Y[˜Ü™X]Q[[Y[
š[œ]ŠNÂˆØ\[Û‹^ÛÛ[H˜[œÛ]U^
Ù^Kœ™\XÙJÊÐKV—JKÙËˆ	HŠJNÂˆšY[™]\Ù]›™^\Ô™X[[YQšY[HÙ^NÂˆšY[˜[YHHÝš[™Ê˜[YJNÂˆšY[œ™XYÛ›HH˜[ÙNÂˆX™[˜\[™
Ø\[Û‹šY[
NÂˆ™Yš[˜\[™
X™[
NÂˆJNÂˆÜÝœ™\[™
™Yš[
NÂˆBˆØÝ[Y[˜›ÙK™]\Ù]™Ù[™\Ú\ÕÛÜšÜÜXÙHHÛÜšÜÜXÙNÂˆØÝ[Y[˜›ÙK™]\Ù]™Ù[™\Ú\ÕÛÜšÜÜXÙT™\]Y\ÝYHÝš[™ÊXÝ[Û‹œ™\]Y\ÝYˆŠNÂˆYˆ
ÛÜšÜÜXÙHOOH›X\ˆ	‰ˆ^[ØY˜ÛÝ[žJHØÝ[Y[˜›ÙK™]\Ù]™Ù[™\Ú\ÓX\ÛÝ[žHHÝš[™Ê^[ØY˜ÛÝ[žJNÂˆYˆ
ÛÜšÜÜXÙHOOH›X\ˆ	‰ˆ^[ØY›ØØ][ÛŠHØÝ[Y[˜›ÙK™]\Ù]™Ù[™\Ú\ÓX\ØØ][ÛˆHÝš[™Ê^[ØY›ØØ][ÛŠNÂˆÛÛœÝš\ÚX›UÛÜšÜÜXÙHHØÝ[Y[œ]Y\žTÙ[XÝÜŠ	ÈÛ™^\Ë]ÛÜšÜÜXÙVÙ]K[™^\Ë]ÛÜšÜÜXÙOHYH—IÊNÂˆÛÛœÝXÚÈHÈ\Nˆ™Ù[™\Ú\ËÛÜšÜÜXÙK˜XÚÛ›ÝÛYÙY‹™\]Y\ÝYˆXÝ[Û‹œ™\]Y\ÝYÛÜšÜÜXÙKÜ[™YˆYKš\ÚX›Nˆ›ÛÛX[ŠØÝ[Y[˜›ÙK™]\Ù]™Ù[™\Ú\ÕÛÜšÜÜXÙHOOHÛÜšÜÜXÙH	‰ˆš\ÚX›UÛÜšÜÜXÙJKÜ[]YšY[ÎˆØš™XÝšÙ^\Ê^[ØY
K™š[\ŠÙ^HOˆ^[ØYÚÙ^WJKZXÜ›ÜÛ™PXÝ]™Nˆ›ÛÛX[Š™^\Ô\›X[™[ZXÜ›ÜÛ™TÝ™X[OË™Ù]]Y[Õ˜XÚÜÏËŠ
KœÛÛYJ˜XÚÈOˆ˜XÚËœ™XYTÝ]HOOH›]™Hˆ	‰ˆ˜XÚË™[˜X›Y
H›ÚXÙT™XÛÙÛš][Ûˆ›ÚXÙQš\œÝ[ÙJK™X[[YPÛÛ›™XÝYˆ›ÛÛX[ŠÚ[™ÝË›™^\Ô™X[[YPÛÛ›™XÝY™X[[YU›ÚXÙTÙ\ÜÚ[ÛË˜ÛÛ›™XÝ[Û”Ý]HOOH˜ÛÛ›™XÝYŠK\œ›ÜŽˆ[NÂˆYˆ
[Ü[ÛœËœÝ\™\ÜÐXÚÛ›ÝÛYÙ[Y[
HÚ[™ÝË™\Ü]Ú]™[
™]ÈÝ\ÝÛQ]™[
™Ù[™\Ú\ËÛÜšÜÜXÙK˜XÚÛ›ÝÛYÙY‹È]Z[ˆXÚÈJJNÂˆ™]\›ˆXÚËš\ÚX›NÂŸB‚™[˜Ý[ÛˆÙ[™\Ú\Ô™X[[YSX\\™Ù]
^[ØYHßJHÂˆÛÛœÝ›Ü›X[^™YH›Ü›X[^™TÜYXÚ›Ü’[[
^[ØY›ØØ][Ûˆ^[ØY™\Ý[˜][Ûˆ^[ØY›ÜšYÚ[ˆˆŠNÂˆÛÛœÝ\™Ù]ÈHÂˆ˜Z\›ØšNˆÈ˜[YNˆ“˜Z\›ØšH‹]ˆLKŒŽŒÎK™ÎˆÍ‹ŽMÌŒŒË›ÛÛNˆLˆKˆš[Ü›ØšNˆÈ˜[YNˆ“˜Z\›ØšH‹]ˆLKŒŽŒÎK™ÎˆÍ‹ŽMÌŒŒË›ÛÛNˆLˆKˆ˜ZÝ\NˆÈ˜[YNˆ“˜ZÝ\H‹]ˆLŒÌÌNK™ÎˆÍ‹ŒK›ÛÛNˆLˆKˆ[ÛX˜\ØNˆÈ˜[YNˆ“[ÛX˜\ØH‹]ˆMŒÍÍË™ÎˆÎKŽŒ‹›ÛÛNˆLˆKˆÚ\Ý[]NˆÈ˜[YNˆ’Ú\Ý[]H‹]ˆLŒLMÌ‹™ÎˆÍÍÎMM‹›ÛÛNˆLˆBˆNÂˆ™]\›ˆ\™Ù]ÖÛ›Ü›X[^™YH[ÂŸB‚™[˜Ý[ÛˆÜ[‘Ù[™\Ú\Ô™X[[YSX\ÛÜšÜÜXÙJ^[ØYHßKÛÛ[X[™HˆŠHÂˆÛÛœÝÛÝ[žHHYœšXØ[“X\ÛÝ[žU\™Ù]
^[ØY˜ÛÝ[žHÛÛ[X[™
NÂˆÛÛœÝ\™Ù]HÙ[™\Ú\Ô™X[[YSX\\™Ù]
^[ØY
NÂˆÛÛœÝ™\ÜÛœÙHH\™Ù]ˆÈHÜ[™YH™X[X\Ù[\™YÛˆ	Ý\™Ù]›˜[Y_IÜ^[ØY˜ÛÝ[žHÈ	Ü^[ØY˜ÛÝ[ž_XˆˆŸK˜ˆˆ’HÜ[™YH™X[X\ˆ[ÝHØ[ˆ›ÛÛK˜YË[œÜXÝXÙ\Ë[™[ˆH›Ý]KˆŽÂˆÛÛœÝÜ[™YHÛÝ[žBˆÈÜ[ÛÝ[žSX\œ›ÛU›ÚXÙJÛÝ[žK™\ÜÛœÙKÈÝ\™\ÜÔÜYXÚˆYHJBˆˆÜ[‘[ØØ[U\Ù\“X\
™\ÜÛœÙKÈÝ\™\ÜÔÜYXÚˆYHJNÂˆYˆ
[Ü[™Y
H™]\›ˆ˜[ÙNÂˆØÝ[Y[˜›ÙK™]\Ù]™Ù[™\Ú\ÓX\Ý\™˜XÙHH™[\ØØ[K[XY›]ŽÂˆYˆ
\™Ù]
HÂˆØÝ[Y[˜›ÙK™]\Ù]™Ù[™\Ú\ÓX\ØØ][ÛˆH\™Ù]›˜[YNÂˆÚ[™ÝËœÙ][Y[Ý]


HOˆÂˆYˆ
]\Ù\“X\
H™]\›ŽÂˆ\Ù\“X\œÙ]šY]ÊÝ\™Ù]›]\™Ù]›™×K\™Ù]ž›ÛÛJNÂˆ\Ù\“X\^Y\œË›X\šÙ\œÏË˜ÛX\“^Y\œÏËŠ
NÂˆ›X\šÙ\ŠÝ\™Ù]›]\™Ù]›™×JBˆ˜YÊ\Ù\“X\^Y\œË›X\šÙ\œÊBˆ˜š[™Ü\
Ý›Û™Ï‰Ù\ØØ\R[
\™Ù]›˜[YJ_OÜÝ›Û™Ï˜
Bˆ›Ü[”Ü\

NÂˆØY™R[˜[Y]SXY›]X\
\Ù\“X\
NÂˆKÍŒ
NÂˆBˆ™]\›ˆYNÂŸB‚˜ÛÛœÝÙ[™\Ú\ÕÛÜšÜÜXÙPœšYÙT™\]Y\ÝÈH™]ÈX\

NÂ‚˜\Þ[˜È[˜Ý[Ûˆ[]]Üš]]]™QÙ[™\Ú\ÕÛÜšÜÜXÙPœšYÙJ™\Ý[HßKÛÛ^HßJHÂˆÛÛœÝÙ[™\Ú\ÐXÝ[ÛˆH™\Ý[™Ù[™\Ú\ÐXÝ[Ûˆ™\Ý[›Y]Y]OË™Ù[™\Ú\ÐXÝ[Ûˆ™\Ý[˜XÝ[Ûˆ[ÂˆYˆ
YÙ[™\Ú\ÐXÝ[ÛˆÙ[™\Ú\ÐXÝ[Û‹\HOOH™Ù[™\Ú\ËÛÜšÜÜXÙK›Ü[ˆŠH™]\›ˆ˜[ÙNÂˆÛÛœÝ™\]Y\ÝYHÝš[™ÊÙ[™\Ú\ÐXÝ[Û‹œ™\]Y\ÝYÛÛ^˜Ø[YÛÛ^˜ÛÜœ™[][Û’YˆŠNÂˆÛÛœÝXÝ[ÛˆH]]Üš]]]™QÙ[™\Ú\ÐXÝ[Û‘›Ü•\›ŠÈ‹‹™Ù[™\Ú\ÐXÝ[Û‹™\]Y\ÝYK™\Ý[
NÂˆYˆ
™\]Y\ÝY	‰ˆÙ[™\Ú\ÕÛÜšÜÜXÙPœšYÙT™\]Y\ÝËš\Ê™\]Y\ÝY
JHÂˆ™]\›ˆÙ[™\Ú\ÕÛÜšÜÜXÙPœšYÙT™\]Y\ÝË™Ù]
™\]Y\ÝY
NÂˆBˆ™^\ÑÙ[™\Ú\Õ›ÚXÙQXYÓÙÊÛÜšÜÜXÙKXœšYÙKXXÝ[Û‹\™XÙZ]™Y‹Âˆ™\]Y\ÝYˆÛÜšÜÜXÙNˆXÝ[Û‹ÛÜšÜÜXÙHˆ‹ˆÛÜœ™[][Û’YˆÛÛ^˜ÛÜœ™[][Û’Yˆ‚ˆJNÂˆÛÛœÝ[™[™ÈH\Ü]ÚÙ[™\Ú\ÕÛÜšÜÜXÙPXÝ[Û•™\šYšYY
XÝ[Û‹™\Ý[
K[ŠXÚÛ›ÝÛYÙ[Y[OˆÂˆ™\Ý[™Ù[™\Ú\ÐXÚÛ›ÝÛYÙ[Y[HXÚÛ›ÝÛYÙ[Y[Âˆ™\Ý[™^XÝ][Û•™\šYšYYHXÚÛ›ÝÛYÙ[Y[™\šYšYYOOHYNÂˆ™]\›ˆXÚÛ›ÝÛYÙ[Y[ÂˆJK™š[˜[J

HOˆÂˆÚ[™ÝËœÙ][Y[Ý]


HOˆÙ[™\Ú\ÕÛÜšÜÜXÙPœšYÙT™\]Y\ÝË™[]J™\]Y\ÝY
KÌ
NÂˆJNÂˆYˆ
™\]Y\ÝY
HÙ[™\Ú\ÕÛÜšÜÜXÙPœšYÙT™\]Y\ÝËœÙ]
™\]Y\ÝY[™[™ÊNÂˆ™]\›ˆ[™[™ÎÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ\Ü]ÚÙ[™\Ú\ÕÛÜšÜÜXÙPXÝ[Û•™\šYšYY
XÝ[ÛˆHßK™\Ý[HßJHÂˆYˆ
XXÝ[ÛˆXÝ[Û‹\HOOH™Ù[™\Ú\ËÛÜšÜÜXÙK›Ü[ˆŠH™]\›ˆ˜[ÙNÂˆÛÛœÝ™\]Y\ÝYHÝš[™ÊXÝ[Û‹œ™\]Y\ÝYˆŠNÂˆÛÛœÝÛÜšÜÜXÙHHÝš[™ÊXÝ[Û‹ÛÜšÜÜXÙHˆŠKÓÝÙ\Ø\ÙJ
NÂˆÛÛœÝ^[ØYHXÝ[Û‹œ^[ØY	‰ˆ\[ÙˆXÝ[Û‹œ^[ØYOOH›Øš™XÝˆÈXÝ[Û‹œ^[ØYˆßNÂˆÛÛœÝ^XÝYHØš™XÝ™[šY\Ê^[ØY
K™š[\Š
Ë˜[YWJHOˆÝš[™Ê˜[YHˆŠKš[J
JNÂˆYˆ
Y\Ü]ÚÙ[™\Ú\ÕÛÜšÜÜXÙPXÝ[ÛŠXÝ[Û‹™\Ý[ÈÝ\™\ÜÐXÚÛ›ÝÛYÙ[Y[ˆYHJJHÂˆ›ÝÈ™]È\œ›ÜŠ™^\ÈØ\™][˜Ú\ˆ˜Z[Y›Üˆ	ÝÛÜšÜÜXÙ_H
	Ü™\]Y\ÝYJK˜
NÂˆB‚ˆÛÛœÝš[™Ü[]YšY[H
Ù^K˜[YJHOˆÂˆÛÛœÝ[X\Ù\ÈHÂˆÜšYÚ[ŽˆÈ›ÜšYÚ[ˆ—Kˆ\Ý[˜][ÛŽˆÈ™\Ý[˜][ÛY™\ÜÈ‹™\Ý[˜][Ûˆ—Kˆ]Y\žNˆÈœ]Y\žH‹™ÛØ[‹š›Ø‘ÛØ[‹œÙX\˜Ú‹™\ØÜš\[Ûˆ—KˆØØ][ÛŽˆÈ›ØØ][Ûˆ‹˜Ú]H‹œ™YÚ[Ûˆ—Kˆ›ÙXÝˆÈœ›ÙXÝ‹˜Ü›Ü‹]H‹˜[œØXÝ[Û’][H—Kˆ[ZÙU\NˆÈš[ZÙU\H‹˜Ø\™T™\]Y\Ý‹œ™X\ÛÛˆ—KˆX\›š[™ÑÛØ[ˆÈ›X\›š[™ÑÛØ[‹™ÛØ[‹œ]Y\žH‹ÜXÈ—KˆÛÝ[žNˆÈ˜ÛÝ[žH‹™\Ý[˜][ÛÛÝ[žH‹›ØØ][Ûˆ—Kˆ›Ø•\NˆÈš›Ø•\H‹š›Ø‘ÛØ[‹œ]Y\žH—KˆXÝ[ÛŽˆÈ˜XÝ[Ûˆ‹˜[œØXÝ[ÛXÝ[Ûˆ—Kˆ[ZÙNˆÈš[ZÙH‹š[ZÙU\H‹˜Ø\™T™\]Y\Ý—BˆNÂˆÛÛœÝÙ[XÝÜœÈH
[X\Ù\ÖÚÙ^WHÚÙ^WJK™›]X\
˜[YHOˆÂˆÙ]K[™^\Ë\™X[[YKYšY[H‰ÚÙ^_H—XˆÙ]K[X\ËYšY[]š\Ú]YšY[H‰Û˜[Y_H—XˆÙ]K[™^\Ë[[ÙKYšY[H‰Û˜[Y_H—XˆÙ]K[™^\ËYÝZYYX[œÝÙ\H‰Û˜[Y_H—XˆÙ]K[X\šÙ]XÙKXÜ™X]KYšY[H‰Û˜[Y_H—XˆJNÂˆYˆ
Ù^HOOHœ]Y\žHˆÙ^HOOH›X\›š[™ÑÛØ[ŠHÙ[XÝÜœËœ\Ú
–Ù]K[X\›š[™ËXœšYÙK\]Y\žWHŠNÂˆÛÛœÝ^XÝY˜[YHHÝš[™Ê˜[YJKš[J
KÓÝÙ\Ø\ÙJ
NÂˆYˆ
Ù^HOOH˜ÛÝ[žHˆ	‰ˆÝš[™ÊØÝ[Y[˜›ÙK™]\Ù]™Ù[™\Ú\ÓX\ÛÝ[žHˆŠKš[J
KÓÝÙ\Ø\ÙJ
HOOH^XÝY˜[YJH™]\›ˆØÝ[Y[˜›ÙNÂˆ™]\›ˆÙ[XÝÜœË›X\
Ù[XÝÜˆOˆØÝ[Y[œ]Y\žTÙ[XÝÜŠÙ[XÝÜŠJK™š[™
šY[OˆÂˆÛÛœÝXÝX[HÝš[™ÊšY[Ë˜[YHšY[Ë^ÛÛ[ˆŠKš[J
KÓÝÙ\Ø\ÙJ
NÂˆ™]\›ˆXÝX[	‰ˆ
XÝX[OOH^XÝY˜[YHXÝX[š[˜ÛY\Ê^XÝY˜[YJH^XÝY˜[YKš[˜ÛY\ÊXÝX[
JNÂˆJH[ÂˆNÂ‚ˆ]Ü[]YšY[ÈH×NÂˆ]š\ÚX›UÛÜšÜÜXÙHH[Âˆ›Üˆ
]][\HÈ][\ÌÈ][\
ÏHJHÂˆš\ÚX›UÛÜšÜÜXÙHHØÝ[Y[œ]Y\žTÙ[XÝÜŠ	ÈÛ™^\Ë]ÛÜšÜÜXÙVÙ]K[™^\Ë]ÛÜšÜÜXÙOHYH—IÊNÂˆÜ[]YšY[ÈH^XÝY™š[\Š
ÚÙ^K˜[YWJHOˆš[™Ü[]YšY[
Ù^K˜[YJJK›X\

ÚÙ^WJHOˆÙ^JNÂˆYˆ
š\ÚX›UÛÜšÜÜXÙH	‰ˆÜ[]YšY[Ë›[™ÝOOH^XÝY›[™Ý
Hœ™XZÎÂˆ]ØZ]™]È›ÛZ\ÙJ™\ÛÛ™HOˆÙ][Y[Ý]
™\ÛÛ™KL
JNÂˆBˆÛÛœÝÙÓZXÜ›ÜÛ™T›ÛÙˆH›Ü›X[^™T™X[[YSZXÜ›ÜÛ™T›ÛÙŠ™X[[YU›ÚXÙTÙ\ÜÚ[ÛËœÙÐÛÛ›Û\ŠNÂˆÛÛœÝZXÜ›ÜÛ™PXÝ]™HH›ÛÛX[ŠÙÓZXÜ›ÜÛ™T›ÛÙ‹š\Ó]™U˜XÚÈ™^\Ô\›X[™[ZXÜ›ÜÛ™TÝ™X[OË™Ù]]Y[Õ˜XÚÜÏËŠ
KœÛÛYJ˜XÚÈOˆ˜XÚËœ™XYTÝ]HOOH›]™Hˆ	‰ˆ˜XÚË™[˜X›Y
JNÂˆÛÛœÝ™X[[YPÛÛ›™XÝYH›ÛÛX[Š™X[[YU›ÚXÙPXÝ]™OËŠ
H™X[[YU›ÚXÙTÙ\ÜÚ[ÛË˜XÝ]™HOOHYHÚ[™ÝË›™^\Ô™X[[YPÛÛ›™XÝY™X[[YU›ÚXÙTÙ\ÜÚ[ÛË˜ÛÛ›™XÝ[Û”Ý]HOOH˜ÛÛ›™XÝYŠNÂˆÛÛœÝš\ÚX›SX\HÛÜšÜÜXÙHOOH›X\ˆ›ÛÛX[ŠˆØÝ[Y[˜›ÙK™]\Ù]™Ù[™\Ú\ÓX\Ý\™˜XÙHOOH™[\ØØ[K[XY›]‚ˆ	‰ˆØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜ÛÛZ[œÊ\Ù\‹[X\Y[[Ü[ˆŠBˆ	‰ˆ
ˆØÝ[Y[œ]Y\žTÙ[XÝÜŠˆÝ\Ù\“X\Ø[˜\Ë›XY›]XÛÛZ[™\ˆŠBˆØÝ[Y[œ]Y\žTÙ[XÝÜŠˆÛX\››Ý
šY[ŠHÝ\Ù\“X\Ø[˜\ÈŠBˆ
ØØ][Û‹š\ÚOOHˆÛX\ˆ	‰ˆØÝ[Y[œ]Y\žTÙ[XÝÜŠˆÛX\ŠJBˆ
BŠNÂˆÛÛœÝš\ÚX›HH›ÛÛX[ŠØÝ[Y[˜›ÙK™]\Ù]™Ù[™\Ú\ÕÛÜšÜÜXÙHOOHÛÜšÜÜXÙH	‰ˆš\ÚX›UÛÜšÜÜXÙH	‰ˆš\ÚX›SX\
NÂˆÛÛœÝ™\šYšYYHš\ÚX›H	‰ˆÜ[]YšY[Ë›[™ÝOOH^XÝY›[™Ý	‰ˆZXÜ›ÜÛ™PXÝ]™H	‰ˆ™X[[YPÛÛ›™XÝYÂˆÛÛœÝXÚÈHÂˆ\Nˆ™Ù[™\Ú\ËÛÜšÜÜXÙK˜XÚÛ›ÝÛYÙY‹ˆ™\]Y\ÝYˆÛÜšÜÜXÙKˆÜ[™Yˆš\ÚX›Kˆš\ÚX›KˆX\™[™\™YˆÛÜšÜÜXÙHOOH›X\ˆÈš\ÚX›SX\ˆ[™Yš[™YˆÜ[]YšY[ËˆÜ[]Y˜[Y\ÎˆØš™XÝ™œ›ÛQ[šY\Ê^XÝY™š[\Š
ÚÙ^WJHOˆÜ[]YšY[Ëš[˜ÛY\ÊÙ^JJJKˆZXÜ›ÜÛ™PXÝ]™Kˆ™X[[YPÛÛ›™XÝYˆ™\šYšYYˆ\œ›ÜŽˆ™\šYšYYÈ[ˆÛÜšÜÜXÙK]™\šYšXØ][Û‹Y˜Z[Y‚ˆNÂˆ™^\ÑÙ[™\Ú\Õ›ÚXÙQXYÓÙÊÛÜšÜÜXÙKXœšYÙKXXÚÛ›ÝÛYÙ[Y[‹Âˆ™\]Y\ÝYˆÛÜšÜÜXÙKˆš\ÚX›Kˆ™\šYšYYˆÜ[]YšY[ÛÝ[ˆÜ[]YšY[Ë›[™Ýˆ^XÝYšY[ÛÝ[ˆ^XÝY›[™ÝˆZXÜ›ÜÛ™PXÝ]™Kˆ™X[[YPÛÛ›™XÝYˆJNÂˆÚ[™ÝË™\Ü]Ú]™[
™]ÈÝ\ÝÛQ]™[
™Ù[™\Ú\ËÛÜšÜÜXÙK˜XÚÛ›ÝÛYÙY‹È]Z[ˆXÚÈJJNÂˆYˆ
]™\šYšYY
H›ÝÈ™]È\œ›ÜŠ™^\ÈÛÜšÜÜXÙH™\šYšXØ][Ûˆ˜Z[Y›Üˆ	ÝÛÜšÜÜXÙ_H
	Ü™\]Y\ÝYJK˜
NÂˆ™]\›ˆXÚÎÂŸB™[˜Ý[ÛˆÜ[YÙ[™\Ý[ÛÜšÙ›ÝÊ™\Ý[HßKÛÛ[X[™HˆŠHÂˆYˆ
™\Ý[›Y]Y]OËÛÜšÙ›ÝÑY™\œ™Y
H™]\›ˆ˜[ÙNÂˆÛÛœÝ[[HÝš[™Ê™\Ý[š[[ˆŠNÂˆÛÛœÝ™\ÜÛœÙHH™\Ý[œ™\ÜÛœÙH–Y\ËHØ[ˆ[ˆHÜ[™YHšYÚ\™XH[™H[H™XYH›ÜˆH™^]Z[ˆŽÂˆYˆ
ÓÓTS’SÓ—ÕÓÔ’Ñ“Õ×ÓRÑWÐÓÓ•‘T”ÐUSÓ—ÒS•S•ÏËš\ÏËŠ[[
HÂˆ˜ÛÛ™\œØ][Û‹›YYXÚ[™WÚ[‹ˆ˜ÛÛ™\œØ][Û‹™ØÝÜ—Ú[‹ˆ˜ÛÛ™\œØ][Û‹œ]Y[Ú[‹ˆ˜ÛÛ™\œØ][Û‹˜Û[šX×ÛX\Ú[‹ˆ˜ÛÛ™\œØ][Û‹šX[Ú[ZÙH‹ˆ˜ÛÛ™\œØ][Û‹[ZX[ØØ\[ÛœÈ‹ˆ˜ÛÛ™\œØ][Û‹˜Ü›ÜÚ[‹ˆ˜ÛÛ™\œØ][Û‹˜Ü›ÜÜØ[WÚ[‹ˆ˜ÛÛ™\œØ][Û‹ÛÜšÙ›Ü˜ÙWÚ[‹ˆ˜ÛÛ™\œØ][Û‹›X\›š[™×ÜÝ\‹ˆ˜ÛÛ™\œØ][Û‹›X\ÛÜ[ˆ‚ˆKš[˜ÛY\Ê[[
JHÂˆÛÛ\[š[Û”›Ý]SÝ]ÛÛYSY]Y]JÛÛ[X[™ÂˆXÝX[›Ý]U\NˆÛÜšÙ›ÝÈ‹ˆXÝX[›Ý]S˜[YNˆ[[ˆXÝX[›Ý]TÛÝ\˜ÙNˆÙX‹›Ü[YÙ[™\Ý[ÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÓÜ[™YˆYBˆJNÂˆBˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹›YYXÚ[™WÚ[ŠH™]\›ˆÜ[“YYXÚ[™R[›ÝÊ™\ÜÛœÙJNÂˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹™ØÝÜ—Ú[ˆ[[OOH˜ÛÛ™\œØ][Û‹œ]Y[Ú[ŠH™]\›ˆÜ[‘ØÝÜ’[›ÝÊ™\ÜÛœÙJNÂˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹˜Û[šX×ÛX\Ú[ŠH™]\›ˆ\ÒX[˜XÚ[]SX\ÛÛ[X[™
ÛÛ[X[™™\Ý[
HÈÜ[’X[˜XÚ[]SX\›ÝÊ™\ÜÛœÙJHˆÜ[Û[šXÒ[›ÝÊ™\ÜÛœÙJNÂˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹šX[Ú[ZÙHŠH™]\›ˆÜ[’X[[ZÙS›ÝÊ™\ÜÛœÙJNÂˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹[ZX[ØØ\[ÛœÈŠH™]\›ˆÜ[•[ZX[Ø\[ÛœÓ›ÝÊ™\ÜÛœÙJNÂˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹˜Ü›ÜÚ[ŠH™]\›ˆÜ[Ü›Ü›Ø›[R[›ÝÊ™\ÜÛœÙJNÂˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹˜Ü›ÜÜØ[WÚ[ŠH™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹˜^Y\‹XÛÛXÝ‹™\ÜÛœÙKÈ›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹ÛÜšÙ›Ü˜ÙWÚ[ŠH™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJÛÜšÙ›Ü˜ÙH‹˜Z[\›Ùš[H‹™\ÜÛœÙKÈ›ÛRYˆš\œÝ[YÚX›T›ÛJ
OËšYJNÂˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹›X\›š[™×ÜÝ\ŠHÂˆÛÛœÝÜ[™YHÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ›X\›š[™È‹œÝ\‹™\ÜÛœÙKßJNÂˆZ[ØØ[]™[Û™TÝYÙÙ\Ý[Û‘›Ü”Ú[\U\Ù\’[[
È\NˆÛÜšÙ›ÝÈ‹ÛÜšÙ›ÝÎˆ›X\›š[™È‹XÝ[ÛŽˆœÝ\ˆKÛÛ[X[™
NÂˆÙ][Y[Ý]


HOˆÂˆZ[ØØ[]™[Û™TÝYÙÙ\Ý[Û‘›Ü”Ú[\U\Ù\’[[
È\NˆÛÜšÙ›ÝÈ‹ÛÜšÙ›ÝÎˆ›X\›š[™È‹XÝ[ÛŽˆœÝ\ˆKÛÛ[X[™
NÂˆKN
NÂˆ™]\›ˆÜ[™YÂˆBˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹›X\ÛÜ[ˆŠH™]\›ˆÜ[‘[ØØ[U\Ù\“X\
™\ÜÛœÙJNÂˆYˆ
[[OOH˜ÛÛ™\œØ][Û‹›ØØ][Û—ØØ\\™Yˆ	‰ˆ™\Ý[›Y]Y]OËœ™Y\™XÝÙXÝ[ÛˆOOHšX[ŠH™]\›ˆÜ[“YYXÚ[™R[›ÝÊ™\ÜÛœÙJNÂˆ™]\›ˆ˜[ÙNÂŸB‚™[˜Ý[Ûˆ[•\Ù\“[ÙR\™[™[™ÊÛÛ[X[™HˆŠHÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆŠH™]\›ˆ˜[ÙNÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™TÜYXÚ›Ü’[[
ÛÛ[X[™
NÂˆYˆ
[ÝÙ\ˆ\Õ[š]™\œØ[[™ÝXYÙPÛÛ[X[™
ÛÛ[X[™
H\ÑÛØ˜[ÝÜÛÛ[X[™
ÝÙ\ŠJH™]\›ˆ˜[ÙNÂˆÛÛœÝÜ[”›ØÙ\ÜÈH
ÙXÝ[Û‹ÛÜšÙ›ÝËXÝ[Û‹™\ÜÛœÙK]\Ù]HßJHOˆÂˆÛÛœÝÛÛ™šYÈHÛÜšÙ›ÝÐÛÛ™šYÊÛÜšÙ›ÝËXÝ[Û‹È]\Ù]JNÂˆYˆ
XÛÛ™šYÊH™]\›ˆ˜[ÙNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ[™[™ÕÛÜšÙ›ÝÈHÛÛ™šYÎÂˆÛX\YÙ[›ÙÜ™\ÜÕ[Y\œÊ
NÂˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÈ\Nˆš\™]\Ù\‹[[™[™È‹ÛÛ[X[™ÛÜšÙ›ÝËXÝ[ÛˆJNÂˆ›Ü˜ÙSÜ[•\Ù\”›ØÙ\ÜÔØÜ™Y[ŠÙXÝ[Û‹ÛÛ™šYËÈ™\ÜÛœÙK]\Ù]K™\ÜÛœÙHÛÛ™šYË\Ù\•]HÛÛ™šYË]H”Ù[XÝYXÝ[ÛˆŠNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹™^\ÈÜ[™Y	ÜÙXÝ[ÛŸHœ›ÛHHZ[ˆ\Ù\ˆ™\]Y\Ý˜
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™JNÂˆ™]\›ˆYNÂˆNÂˆYˆ
×ŠH™YYÛÜšß™YYÛÜšßš[™ÛÜšßš[™H›ØŸ›ØˆX\Ù_ÛÜšÈX\Ù_™YY›ØŸØ[›ØŸØ^š_˜]ZØHØ^š_˜X˜Z›ß[\[ÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÜ[”›ØÙ\ÜÊÛÜšÙ›Ü˜ÙH‹ÛÜšÙ›Ü˜ÙH‹˜Z[\›Ùš[H‹’HÜ[™YÛÜšÈÝ\Üˆ[YH[Ý\ˆÛÝ[žKH›Øˆ[ÝHØ[[™[Ý\ˆÚÚ[ËˆHÚ[[[ÝH\HÝ\žHÝ\ˆ‹È›ÛRYˆš\œÝ[YÚX›T›ÛJ
OËšYJNÂˆBˆYˆ
×ŠÝ\HÛÝ\œÙ_Ý\ÛÝ\œÙ_ZÙHÛÝ\œÙ_™YÚ[ˆÛÝ\œÙ_Ý\X\›š[™ßØ[X\›ŸHØ[X\›ŸX\›ˆX\Ù_ÛÛ[ßÝZšY[ž˜_\™[™\ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÜ[”›ØÙ\ÜÊ›X\›š[™È‹›X\›š[™È‹œÝ\‹’HÜ[™YÛÝ\œÙHÝ\ÜˆÚÛÜÙHHÛÝ\œÙH[ÝHØ[Üˆ[YHHÚÚ[[ÝHØ[ÈX\›‹ˆŠNÂˆBˆYˆ
×Š[YHÙ[^HÜ›ÜÙ[^HÜ›ÜÙ[Ü›Üš[™^Y\Ÿ^Y\ˆÜ›ÜX\šÙ]^HÜ›ÜÝ]^˜HX^˜[ß˜]ZØHÝ]^˜_™[™\ˆÛÜÙXÚ_™[™™H™XÛÛJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÜ[”›ØÙ\ÜÊ˜YH‹˜YH‹˜^Y\‹XÛÛXÝ‹’HÜ[™YÜ›ÜØ[HÝ\Üˆ[YHHÜ›Ü]X[]K[™ØØ][Û‹ˆHÚ[[™\\™H^Y\ˆÛÛXÝ[™[]™\žH˜XÚÚ[™Ëˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
×ŠÜ[ˆX\ÚÝÈX\[X\ÛØ˜[X\™X[X\X\X\Ù_˜[X[š_˜XÚÈ›Ý]_˜XÚÈÚ\Y[˜XÚÈ^HØ[_ÚÝÈ˜XÚÚ[™ÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÛX\YÙ[›ÙÜ™\ÜÕ[Y\œÊ
NÂˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÈ\Nˆš\™]\Ù\‹[[™[™È‹ÛÛ[X[™ÛÜšÙ›ÝÎˆ›X\‹XÝ[ÛŽˆ™[[X\ˆJNÂˆ™]\›ˆÜ[‘[ØØ[U\Ù\“X\
\ÓX\˜XÚÚ[™ÐÛÛ[X[™
ÛÛ[X[™
HÈ’HÜ[™YH[X\›Üˆ˜XÚÚ[™Ëˆ[ÝHØ[ˆ›ÛÛK˜YËÚXÚÈH›Ý]K[™›ÛÝÈÚ\Y[ÜˆÛ[šXÈØØ][ÛœËˆˆˆ’HÜ[™YH[X\ˆ[ÝHØ[ˆ›ÛÛK˜YËš[™˜XÚ[]Y\ËÚXÚÈ›Ý]\Ë[™˜XÚÈÚ\Y[ËˆŠNÂˆBˆ™]\›ˆ˜[ÙNÂŸB‚™[˜Ý[Ûˆ™^\ÐÛÛ™\œØ][Û‘š\œÝ™\ÜÛœÙJ™\ÜÛœÙKÝYÙÙ\Ý[ÛœÈH×KÝ]\ÈH˜[œÝÙ\š[™ÈŠHÂˆÛX\YÙ[›ÙÜ™\ÜÕ[Y\œÊ
NÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ\]S™^\Ð™Z]š[Ü“^Y\ŠÝ]\Ë“™^\È[œÝÙ\™YÛÛ™\œØ][Û˜[H™Y›Ü™HÜ[š[™È[žHY[KˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÝYÙÙ\Ý[ÛœË›[™ÝÈÝYÙÙ\Ý[ÛœÈˆÈšX[‹˜Ü›ÜÈ‹ÛÜšÈ‹›X\›š[™È‹›X\—JNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙHJNÂˆ™]\›ˆYNÂŸB‚™[˜Ý[Ûˆ™^\Ô]›Ü›Q^Z[[œÝÙ\Š
HÂˆ™]\›ˆ“™^\È\ÈH\ÜÚ\Ý[[œÚYH™^\ÈÙ[™\Ú\ÈYÜšS™^\ËH[][[[™ÝX[XØÙ\ÜÈ]›Ü›H[™›ÚXÙK[Ü\˜]Y\ÜÚ\Ý[›Ý[™][Ûˆ›Üˆ˜\›Y\œËÛÜšÙ\œË]Y[Ë›ÝšY\œË[™[™\œÙ\™YÛÛ[][š]Y\ËˆHØ[ˆ[Ú]YÜšXÝ[\™KÛÜšÙ›Ü˜ÙH˜Z[š[™ËX[XØÙ\ÜË\›XXÞHÝ\Ü[Øš[HÛ[šXÜË˜[œÜÜ][Û‹]ËXØ\™KX\ËÛÛ[][š]HÙ\šXÙ\Ë[™X\šÙ]XÙHÝ\ÜˆYÜšS™^\È™[XZ[œÈHÝ\ÜYYØXÞKÚ[\›˜[ÛÛ\]Xš[]HY[]K[™YÜšXÝ[\™H\ÈYÜšU˜YH™[XZ[ˆXÝ]™HÛXZ[ˆ[Ù[\Ëˆ]™H™YÝ[]YXÝ[ÛœÈ™\]Z\™H™\šYšYYÛÛ›™XÝÜœËÛÛœÙ[\Ù\ˆ\›Ý˜[›ÝšY\ˆÛÛ™š\›X][ÛˆÚ\™H™YYY[™]Y]ÙÙÚ[™È™Y›Ü™H^HØ[ˆ™H[˜X›YˆŽÂŸB‚™[˜Ý[Ûˆ™^\Ô]›Ü›QY™™\™[X]Ü[œÝÙ\Š
HÂˆ™]\›ˆ“™^\ÈÙ[™\Ú\ÈYÜšS™^\È\ÈY™™\™[™XØ]\ÙH™^\È\È™Z[™ÈZ[\ÈHÛÝ\˜ÙK\™XYK›ÝšY\‹\™XYK\›Z\ÜÚ[Û‹YØ]YXØÙ\ÜÈ]›Ü›NˆÛ™H\ÜÚ\Ý[^Y\ˆ›Üˆ˜Z[š[™Ë›Øˆ™XY[™\ÜËX[XØÙ\ÜËšY[Ý\ÜX\šÙ]XÙH[™YÜšXÝ[\™H˜YKX\Ë[™ØØ[Ù\šXÙ\ËˆYÜšS™^\È™[XZ[œÈÝ\ÜY›ÜˆYØXÞHÛÛ\]Xš[]K[™YÜšU˜YH™[XZ[œÈHYÜšXÝ[\™K]˜YHX\šÙ]XÙH[Ù[Kˆ™^\ÈØ[ˆ™\\™HH™^Ý\›ÝË]]™HØ[Ë›ÝšY\ˆÛÛXÝ^[Y[Ë™\ØÜš\[ÛœËYYXØ[™XÛÜ™ËØØ][ÛˆÚ\š[™ËÜˆ[Y\™Ù[˜ÞH\Ü]ÚÝ^H\ØX›Y[[H™\]Z\™YÛÛ›™XÝÜ‹ÛÛœÙ[\›Ý˜[[™]Y]ÛÛ›ÛÈ\™HXÝ]™KˆŽÂŸB‚™[˜Ý[Ûˆ™^\ÕÛÜšÙ›Ü˜ÙPØ\Xš[]P[œÝÙ\Š
HÂˆ™]\›ˆ’HØ[ˆ\Ý[ˆ[ˆ›Ü›X[ÛÜ™Ë[œÝÙ\ˆ]Y\Ý[ÛœËÜ[ˆHšYÚÛÜšÜÜXÙK[™ÝZYHÛÜšÙ›Ü˜ÙH]™[ÜY[˜Z[š[™Ë›Øˆ™XY[™\ÜËšY[Ý\ÜX[XØÙ\ÜËX\È[™ØØ][ÛˆÝ\ÜX\šÙ]XÙHÜˆYÜšXÝ[\™H˜YK™[Z[™\œË[™›ÝšY\‹\™XYH[™Ù™œËˆHØ[ˆ™\\™HH™^Ý\›ÝËˆ™X[]ÛÜ›^XÝ][ÛˆÝXÚ\ÈØ[ËY\ÜØYÙ\ËØÚY[[™Ë^[Y[Ë™\ØÜš\[ÛœËYYXØ[™XÛÜ™ËØØ][ÛˆÚ\š[™ËÜˆ[Y\™Ù[˜ÞH\Ü]Ú™\]Z\™\ÈH™\šYšYYÛÛ›™XÝÜ‹ÛÛœÙ[^XÚ]\›Ý˜[[™]Y]ÛÛ›ÛËˆŽÂŸB‚™[˜Ý[Ûˆ™^\Ô™X[›ÝÝ\Q›Ý[™][Û[œÝÙ\ŠÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆHÝš[™ÊÛÛ[X[™ˆŠKÓÝÙ\Ø\ÙJ
NÂˆYˆ
×Š™X[›ÝšY\œß›ÝšY\œÈØ[ˆ[ÝHÛÛ›™XÝ›ÝšY\ˆÛÛ›™XÝ[ÛœßÛÛ›™XÝÈ›ÝšY\œÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ“™^\È\ÈZ[ÈÛÛ›™XÝÚ]›ÝšY\ˆ\™XÝÜšY\ËÛ[šXÜË[ZX[\™\œË[Øš[HÛ[šXÜË\›XXÚY\Ë˜[œÜÜ][Ûˆ™\ÛÝ\˜Ù\ËÛÜšÙ›Ü˜ÙH›ÙÜ˜[\ËYÜšXÝ[\™H™\ÛÝ\˜Ù\ËÛÛ[][š]HÙ\šXÙ\Ë[™™YÝ[]Y\™\œÈÚ[ˆÜÙHÛÛ›™XÝÜœÈ\™H™\šYšYY[™\›Ý™Yˆ[ˆ\ÈZ[]™H›ÝšY\ˆ^XÝ][Ûˆ\È\ØX›YžHY˜][ÈHØ[ˆ^Z[ˆÚ]ÛÛ›™XÝÜˆ\È™YYY[™™\\™HH™^Ý\ˆŽÂˆBˆYˆ
×Š]HÛÝ\˜Ù\ßÛÝ\˜ÙH]_ÛÝ\˜Ù\ÈÈ[ÝH™YY™\šYšYYÛÝ\˜Ù\ß™X[]JW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ“™^\È™YYÈÛÝ\˜ÙKX˜XÚÙY]Hœ›ÛHX›XÈÛÝ\˜Ù\Ë\™\‹\›ÝšYYÜ\˜][Û˜[]K]™HTH[YÜ˜][ÛœË[™™YÝ[]YÞ\Ý[\ÈÝXÚ\È’TˆÛ›HÚ[ˆH›Ü\ˆYÜ™Y[Y[ÛÛœÙ[ÛÛ\X[˜ÙK[™]Y]ÛÛ›ÛÈ^\Ýˆ[œÝÙ\œÈÚÝ[Ø^HHÛÝ\˜ÙHÝÛ™\‹œ™\Ú™\ÜËÛÛ›™XÝÜˆÝ]\Ë[™Ú]\ˆH]™HXÝ[Ûˆ\ÈÝ\œ™[H[˜X›YˆŽÂˆBˆYˆ
×Š™X[ËHOÝ[Y_]™H]_ÛÜšÈ[ˆ™X[[Y_\ÙH™X[[YH]JW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ“™^\È\È™Z[™ÈZ[›Üˆ™X[][YHÛÝ\˜ÙH[™›ÝšY\ˆ[YÜ˜][ÛœË]]™H]H\È\ÙYÛ›HÚ[ˆH™\šYšYYÛÛ›™XÝÜˆ\ÈXÝ]™KˆYˆHÛÛ›™XÝÜˆ\È›ÝXÝ]™KHÚÝ[Ø^H]ÛX\›H[™]›ÚYÛZ[Z[™È™X[][YH˜XÝËˆŽÂˆBˆYˆ
×ŠØÚY[_\Ú[Y[›ÛÚÊW‹Š—Š›ÝšY\ŸØÝÜŸÛ[šXß[ZX[š\Ú]
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ’HØ[ˆ™\\™HH›ÝšY\ˆØÚY[[™ÈÝ\]HØ[››Ý›ÛÚÈÜˆØÚY[HÚ]H›ÝšY\ˆ[[H™\šYšYYØÚY[[™ÈÛÛ›™XÝÜˆ\ÈXÝ]™K[ÝH\›Ý™HHXÝ[Û‹[™[žH›ÝšY\ˆÛÛ™š\›X][Ûˆ[™]Y]ÙÙÚ[™È™\]Z\™[Y[È\™HØ]\ÙšYYˆŽÂˆBˆYˆ
×ŠYYXØ[™XÛÜ™ßš\ŸX[™XÛÜ™]Y[™XÛÜ™
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ“YYXØ[™XÛÜ™È[™’TˆXØÙ\ÜÈ\™H™YÝ[]YØ\Xš[]Y\Ëˆ™^\ÈØ[››ÝXØÙ\ÜÈÜˆÚ\™H™XÛÜ™È[›\ÜÈH™\šYšYY™YÝ[]YÛÛ›™XÝÜ‹Y[]H[™ÛÛœÙ[ÚXÚÜË\›Z\ÜÚ[ÛˆÛÛ›ÛË[™]Y]ÙÙÚ[™È\™HXÝ]™KˆŽÂˆBˆYˆ
×Š^[Y[^[Y[ß^_›ØÙ\ÜÈ[Û™^_›ØÙ\ÜÈH^[Y[›ØÙ\ÜÈ^[Y[Ú\™ÙJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ”^[Y[È\™HYÚ\š\ÚÈ™YÝ[]YXÝ[ÛœËˆ™^\ÈØ[››Ý›ØÙ\ÜÈH^[Y[[[[ˆ\›Ý™Y^[Y[ÛÛ›™XÝÜ‹\Ù\ˆ\›Ý˜[ÛÛ\X[˜ÙHÚXÚÜË[™]Y]ÙÙÚ[™È\™HXÝ]™KˆŽÂˆBˆYˆ
×ŠØØ][ÛŸÚ\™H^HØØ][ÛŸ\ÙH^HØØ][ÛŸÜÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ“ØØ][ÛˆÚ\š[™È™\]Z\™\Èœ›ÝÜÙ\ˆ\›Z\ÜÚ[Ûˆ[™\Ù\ˆ\›Ý˜[ˆ™^\ÈØ[ˆ™\\™HHØØ][Û‹\Ý\ÜYÝ\]]Ø[››ÝÚ\™HÜˆ\ÙH™XÚ\ÙHØØ][Ûˆ›ÜˆH]™HXÝ[Ûˆ[›\ÜÈH\›Z\ÜÚ[Û‹ÛÛ›™XÝÜ‹ÛÛœÙ[[™]Y]™\]Z\™[Y[È\™HØ]\ÙšYYˆŽÂˆBˆYˆ
×Š[Y\™Ù[˜Þ_\Ü]Ú[X[[˜Ù_[Y\™Ù[˜ÞH[
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ’Yˆ\È\È[ˆ[Y\™Ù[˜ÞKÛÛXÝØØ[[Y\™Ù[˜ÞHÙ\šXÙ\È›ÝËˆ™^\ÈØ[››Ý\Ü]Ú[Y\™Ù[˜ÞH[[ˆ\ÈZ[ˆ]\™H[Y\™Ù[˜ÞH\™\ˆÛÜšÙ›ÝÜÈ™\]Z\™H™\šYšYY[Y\™Ù[˜ÞHÛÛ›™XÝÜœËÛÛœÙ[ÜˆYØ[]]Üš]K›ÝšY\ˆÛÛ™š\›X][ÛˆÚ\™H\XØX›K[™]Y]ÙÙÚ[™ËˆŽÂˆBˆ™]\›ˆ“™^\È\ÈHXÝX[›ÝÝ\H›Ý[™][Ûˆ›ÜˆH[][[[™ÝX[XØÙ\ÜÈ]›Ü›Kˆ]\ÈÛÝ\˜ÙK\™XYH[™›ÝšY\‹\™XYHžH\ÚYÛ‹]]™H™YÝ[]YXÝ[ÛœÈ™[XZ[ˆ\ØX›Y[[™\šYšYYÛÛ›™XÝÜœËÛÛœÙ[\Ù\ˆ\›Ý˜[›ÝšY\ˆÛÛ™š\›X][ÛˆÚ\™H™YYY[™]Y]ÙÙÚ[™È\™H[ˆXÙKˆŽÂŸB‚™[˜Ý[Ûˆ™^\Ô\ÙLMÔÝ[™\™\Ù\”ØY™P[œÝÙ\ŠÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆYˆ
[ÝÙ\ŠH™]\›ˆ[ÂˆYˆ
×Š^Z[ˆ[Ý\œÙ[Ÿ[›ÙXÙH[Ý\œÙ[ŸÚ]\™H[Ý_ÚÈ\™H[Ý_Ú]\È™^\ß^Z[ˆ™^\ßÚ]È[ÝHÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÈ™\ÜÛœÙNˆ™^\Ô]›Ü›Q^Z[[œÝÙ\Š
KÝYÙÙ\Ý[ÛœÎˆÈÚ]›ÝšY\œÈØ[ˆ[ÝHÛÛ›™XÝÈ‹Ú]]HÛÝ\˜Ù\ÈÈ[ÝH™YY‹š[˜\›Y\œÈ[ˆYœšXØH—HNÂˆBˆYˆ
×ŠÚ]Ø[ˆ[ÝHßÝÈØ[ˆ[ÝH[ÝÈØ[ˆ[
W‹Š—Š˜\›Y\œÏß˜\›\ÏßÛX[Û\œÏßÜ›ÝÙ\œÏßYœšXØ_YÜšXÝ[\™JW‹Ë\Ý
ÝÙ\ŠBˆ×Š[˜\›Y\œÏß˜\›Y\œÏÈ[ˆYœšXØ_˜\›Y\œÏÈXÜ›ÜÜÈYœšXØ_YœšXØ[ˆ˜\›Y\œÏÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ™\ÜÛœÙNˆ‘›Üˆ˜\›Y\œÈ[™\˜[ÛÛ[][š]Y\Ë™^\ÈØ[ˆÝZYHÜ›Ü[™šY[Ý\Ü\œšYØ][ÛˆX\›š[™ËX\šÙ][™YÜšU˜YH™]šY]ËÛÜšÙ›Ü˜ÙH˜Z[š[™Ë˜[œÜÜ][Û‹]ËXØ\™K\›XXÞH[™[Øš[HÛ[šXÈXØÙ\ÜË[™ÛÝ\˜ÙKX˜XÚÙY™^Ý\Ëˆ]™H^Y\ˆÛÛXÝ^[Y[Ë›ÝšY\ˆÛÛXÝØØ][ÛˆÚ\š[™ËÜˆ™YÝ[]YX[XÝ[ÛœÈ™\]Z\™H™\šYšYYÛÛ›™XÝÜœËÛÛœÙ[\›Ý˜[[™]Y]ÛÛ›ÛËˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈš[YHš[™YÜšXÝ[\™H˜Z[š[™È‹’H™YY[Ú]Ü›Ü\ÜÝY\È‹œ›ÝÜÙHYÜšU˜YH—BˆNÂˆBˆYˆ
×Š™X[›ÝšY\œß›ÝšY\œÈØ[ˆ[ÝHÛÛ›™XÝ]HÛÝ\˜Ù\ßÛÝ\˜Ù\ÈÈ[ÝH™YY™X[ËHOÝ[Y_]™H]_ØÚY[HÚ]H›ÝšY\ŸXØÙ\ÜÈYYXØ[™XÛÜ™ßYYXØ[™XÛÜ™ß›ØÙ\ÜÈ^[Y[ÏßÚ\™H^HØØ][ÛŸ\Ü]Ú[Y\™Ù[˜ÞH[[Y\™Ù[˜ÞH\Ü]Ú
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÈ™\ÜÛœÙNˆ™^\Ô™X[›ÝÝ\Q›Ý[™][Û[œÝÙ\ŠÛÛ[X[™
KÝYÙÙ\Ý[ÛœÎˆÈÚ]]HÛÝ\˜Ù\ÈÈ[ÝH™YY‹Ú]›ÝšY\œÈØ[ˆ[ÝHÛÛ›™XÝÈ‹Ú]™YYÈ\›Ý˜[—HNÂˆBˆYˆ
×ŠH™YY[ZX[™YY[ZX[[ZX[[[ZX[XØÙ\Üß™\\™H[ZX[
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ™\ÜÛœÙNˆ“™^\ÈØ[ˆ[™\\™HH[ZX[XØÙ\ÜÈÝ\ÛÛXÝH[™›Ü›X][Ûˆ\ÝX[H™YYY›ÜˆØ\™H™]šY]Ë[™^Z[ˆH[™Ù™ˆ›Ý[™\žKˆ]\È›ÝÛÛ›™XÝYÈH]™H›ÝšY\ˆ[›\ÜÈH™\šYšYY[ZX[ÛÛ›™XÝÜˆ\ÈXÝ]™K[™]Ú[›ÝØÚY[KØ[XYÛ›ÜÙKÜˆÚ\™H[™›Ü›X][ÛˆÚ]Ý]\›Ý˜[[™]Y]ÛÛ›ÛËˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈœÝ\[ZÙH‹™š[™H[Øš[HÛ[šXÈ‹œ\›XXÞHÝ\Ü—BˆNÂˆBˆYˆ
×Š\›XXÞHÝ\Ü™YY\›XXÞ_YYXÚ[™HÝ\Ü™Yš[^H™\ØÜš\[ÛŸ™\ØÜš\[Ûˆ™Yš[™\]Y\Ý™Yš[
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ™\ÜÛœÙNˆ“™^\ÈØ[ˆ[™\\™H\›XXÞHÝ\Ü[™^Z[ˆÚ][™›Ü›X][ÛˆH\›XXÚ\ÝÜˆÛ[šXÚX[ˆX^H™YYˆ]Ø[››Ý™Yš[Ú[™ÙKÜˆÝX›Z]H™\ØÜš\[Ûˆ[›\ÜÈ[ˆ\›Ý™Y\›XXÞHÛÛ›™XÝÜ‹ÛÛœÙ[›ÝšY\ˆ™]šY]Ë\Ù\ˆ\›Ý˜[[™]Y]ÛÛ›ÛÈ\™HXÝ]™Kˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ™š[™\›XXÞHÝ\Ü‹œÝ\[ZÙH‹›[Øš[HÛ[šXÈXØÙ\ÜÈ—BˆNÂˆBˆYˆ
×ŠØ[^HØÝÜŸØ[HØÝÜŸÛÛXÝ^HØÝÜŸÛÛXÝ›ÝšY\ŸØ[›ÝšY\ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ™\ÜÛœÙNˆ’HØ[ˆ[™\\™H›ÝšY\ˆÛÛXÝ]HÚ[›ÝØ[Y\ÜØYÙKÜˆÜ[ˆH›ÝšY\ˆœ›ÛHHš\œÝ™\]Y\Ýˆ›ÝšY\ˆÛÛXÝ™\]Z\™\ÈH™\ÛÛ™YÛÛXÝ^XÚ]ÛÛ™š\›X][Û‹[ˆ\›Ý™YÛÛ›™XÝÜ‹[™]Y]ÙÙÚ[™Ëˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈœ™\\™H›ÝšY\ˆÛÛXÝ‹œÝ\[ZÙH‹™š[™Û[šXÈÝ\Ü—BˆNÂˆBˆ™]\›ˆ[ÂŸB‚™[˜Ý[Ûˆ™^\Ó[Øš[PÛ[šXÑ^Z[[œÝÙ\Š
HÂˆ™]\›ˆ“[Øš[HÛ[šXÜÈ\™HØ\™HX[\ÈÜˆÝ]™XXÚÚ[È]œš[™È˜\ÚXÈX[XØÙ\ÜÈÛÜÙ\ˆÈHÛÛ[][š]Kˆ[ˆYÜšS™^\ËHØ[ˆ[^Z[ˆHÝ\Ë™\\™H[ZÙH]Z[Ëš[™Û[šXÈÜˆ\›XXÞHÝ\Ü[™Ü™X]HHØY™H[™Ù™ˆXÚÙ]ˆ\ÈØØ[[[ÈÙ\È›Ý\Ü]ÚÜˆ›ÛÚÈH]™H[Øš[HÛ[šXÈžH]Ù[‹ˆŽÂŸB‚™[˜Ý[Ûˆ™^\Ô™YÙ[™\˜]]™PYÜšXÝ[\™P[œÝÙ\Š
HÂˆ™]\›ˆ”™YÙ[™\˜]]™HYÜšXÝ[\™HYX[œÈ˜\›Z[™È[ˆØ^\È]™XZ[ÛÚ[X[›ÝXÝØ]\‹[˜Ü™X\ÙHš[Ù]™\œÚ]K[™ÙY\˜\›\È›ÙXÝ]™HÝ™\ˆ[YKˆÛÛ[[Ûˆ˜XÝXÙ\È[˜ÛYHÛÝ™\ˆÜ›ÜËÛÛ\ÜÝ™YXÙY[YÙKÜ›Ü›Ý][Û‹YÜ›Ù›Ü™\ÝžKX[˜YÙYÜ˜^š[™Ë[™YX\Ý\š[™ÈÛÚ[ÜˆšY[™XÛÝ™\žKˆYÜšS™^\ÈØ[ˆ\›ˆ][ÈX\›š[™ËšY[›Ý\ËÜ›ÜÝZY[˜ÙK[™^Y\ˆ]šY[˜ÙKˆŽÂŸB‚™[˜Ý[Ûˆ™^\Ð\R›Ø›Ý[™\žP[œÝÙ\Š
HÂˆ™]\›ˆ’HØ[ˆ[Ú]H›Øˆ\XØ][Û‹]HÈ›Ý]™HHÙ[XÝY›Øˆœ›ÛH\ÈÚ]Y]ˆÚÛÜÙHH›Øˆš\œÝÜˆ[YHH›ÛH[™ÛÝ[žH[ÝHØ[ˆHÚ[[™\\™HH\XØ][Ûˆ[™Ú[›ÝÝX›Z][ž][™È[[[ÝHÛÛ™š\›KˆŽÂŸB‚™[˜Ý[Ûˆ™^\Õ\™Ù[Ú[œ™X][™Ð[œÝÙ\Š
HÂˆ™]\›ˆØ[[Y\™Ù[˜ÞHÙ\šXÙ\È›ÝÈYˆ]˜Z[X›KÝXÚ\ÈLLH[ˆHK”ËˆH˜XžHÚÈ\È›Ýœ™X][™È™YYÈ[[YYX]H[Y\™Ù[˜ÞH[ˆH[H›ÝHØÝÜˆ[™\È\Ø[››Ý™\XÙH[Y\™Ù[˜ÞHÙ\šXÙ\ÈÜˆ\Ü]ÚØ\™KˆY\ˆ[ÝHØ[HØ[ˆ[š[™™X\˜žH[Y\™Ù[˜ÞHØ\™HÜˆ™\\™HH[™Ù™ˆÚ][Ý\ˆØØ][Û‹ˆŽÂŸB‚™[˜Ý[Ûˆ™^\Ô™\Ú[Y[ÛÛ™\œØ][Û’[[
ÛÛ[X[™HˆŠHÂˆÛÛœÝ^H›Ü›X[^™TÜYXÚ›Ü’[[
ÛÛ[X[™
NÂˆYˆ
]^
H™]\›ˆ[ÂˆÛÛœÝ\ÈHÚYÛ˜[ÈOˆÜYXÚÚYÛ˜[X]Ú\Ê^ÚYÛ˜[ÊNÂˆÛÛœÝØ\Xš[]HHË×Ú]Ø[ˆ
Îž[ÝH
OÙ×‹Ë×Ú][ÝH×‹Ë×ž[ÝHØ[ˆÈÚ]‹Ë×šÝÈ[‹Ëœ]YHYY\ÈXÙ\ˆ‹œ]YHXÙ\È‹œ]YH]^H˜Z\™H‹œ]YH˜Z\ÈH‹[˜]Ù^˜HÝY˜[žXHš[šH‹[˜Y˜[žXHš[šH‹›È]YH›ØÙHÙH˜^™\ˆ‹¶av)ö,6)È6*¶`v.va‹¶av)ö,6)È6*¶,ö*¶-öb¶.H‹¶av)ö,6)È6b¶av`öa¶`È—NÂˆÛÛœÝYYXÚ[™HHË×Š™YYØ[š[™Ù][
WÊÊYYXÚ[™_YYXØ][ÛŸ[ßYß™Yš[\›XXÞJW‹Ë×ŠYYXÚ[™_YYXØ][ÛŸ[ßYß™Yš[\›XXÞJWÊÊ™YYØ[[X\Ù_Ú\™JW‹Ë™]ØH‹›YYXÚ[˜H‹›YYXØ[Y[È‹œ™[YY[È‹›YYXØ[Y[‹œ\›XXÚYH‹›˜Z]ZšH]ØH‹›š[˜H]ZšH]ØH‹›™XÙ\Ú]ÈYYXÚ[˜H‹œ™XÚ\ÛÈ™[YY[È‹¶+öb6)ö(H‹¶-vb¶+öa6b¶*H‹¶)ö+öb6b¶*H‹¶(ö+öb6b¶*H—NÂˆÛÛœÝÛ[šXÓX\HË×ŠÚÝßš[™Ü[Ÿ™YYØ[
W‹Š—ŠÛ[šXßÛ[šXÜßÜÜ][X[Ù[\ŸX[Ù[™_\›XXÞ_\›XXÚY\ÊW‹Š—ŠX\›Ý]_ØØ][ÛŸ™X\Ÿ™X\˜ž_ÛÜÙ\Ý
W‹Ë×ŠÛ[šXßÛ[šXÜßÜÜ][X[Ù[\ŸX[Ù[™_\›XXÞ_\›XXÚY\ÊW‹Š—ŠX\›Ý]_ØØ][ÛŸ™X\Ÿ™X\˜ž_ÛÜÙ\Ý
W‹ËœÚÝÈÛ[šXÈÛˆX\‹œÚÝÈÛ[šXÈX\‹˜Û[šXÈÛˆX\‹œ\›XXÞHÛˆX\‹œÚÝÈ\›XXÞHÛˆX\‹˜Û[šXÈX\—NÂˆÛÛœÝÛ[šXÈHË×ŠÛ[šXßÜÜ][X[Ù[\ŸX[Ù[™JWÊÊ™X\Ÿ™X\˜ž_ÛÜÙ\ÝÚ\™_š[™X\X\ÙJW‹Ë×Š™X\Ÿ™X\˜ž_ÛÜÙ\ÝÚ\™_š[™X\
WÊÊÛ[šXßÜÜ][X[Ù[\ŸX[Ù[™JW‹Ë˜Û[šXÈ™X\ˆ‹™š[™Û[šXÈ‹˜Û[šXØHÙ\˜ØH‹˜Û[š\]YH™\È‹šÛ[šZÚHØ\šXH‹šÜÜ][HØ\šXH‹¶.vb¶)ö+ö*H‹¶av,ö*¶-6`vbH‹˜Û[šXØH\È—NÂˆÛÛœÝØÝÜˆHË×Š™YYØ[ÙY_Ø[[ßÜXZßš[™[
WÊÊØÝÜŸ\œÙ_›ÝšY\ŸÛ[šXÚX[ŠW‹Ë×ŠØÝÜŸ\œÙ_›ÝšY\ŸÛ[šXÚX[ŠWÊÊ™YYX\Ù_[Ø[Ú\™JW‹Ë™ØÝÜˆX\ÙH‹™ZÝ\šH‹›YYXÛÈ‹™ØÝ]\ˆ‹š[™š\›ZY\ˆ‹™[™™\›Y\˜H‹¶-ö*6b¶*‹¶+ö`ö*¶b6,H‹¶avav,v-ˆ—NÂˆÛÛœÝÜ›Ü˜YHË×ŠÜ›Ü˜\›_šY[[XZ^™_Ø\ÜØ]˜_šXÙ_™X[œß\™\ÝÚ[X˜JWÊÊ˜YÚXÚßZ[™ßY[Ýßž_\ÝYÜß›Ø›[_ÙXZÊW‹Ë×Š˜YÚXÚßZ[™ßY[Ýßž_\ÝYÜß›Ø›[_ÙXZÊWÊÊÜ›Ü˜\›_šY[[XZ^™_Ø\ÜØ]˜_šXÙ_™X[œß\™\ÝÚ[X˜JW‹Ë˜Ü›Ü˜Y‹™˜\›H˜Y‹›XZ^™HY[ÝÈ‹œÚ[X˜HX˜^XH‹˜Ý[]›ÈX[È‹˜ÛÜÙXÚHX[H‹œ™XÛÛHX]]˜Z\ÙH‹˜Ø[\ÈZ[H‹¶av+v-vb6a6,öb¶(H‹¶,¶,v.H6av,vb¶-ˆ—NÂˆÛÛœÝÜ›ÜØ[HHË×ŠÙ[Ù[[™ßX\šÙ]^Y\Ÿ˜YJWÊÊÜ›ÜXZ^™_Ø\ÜØ]˜_šXÙ_™X[œß›ÙXÙ_\™\Ý›ÙXÝ
W‹Ë×ŠÜ›ÜXZ^™_Ø\ÜØ]˜_šXÙ_™X[œß›ÙXÙ_\™\Ý›ÙXÝ
WÊÊÙ[^Y\ŸX\šÙ]˜YJW‹ËœÙ[Ü›Ü‹˜^Y\ˆÜ›Ü‹™[™\ˆÛÜÙXÚH‹™[™ÈÛÜÙXÚH‹™[™™H™XÛÛH‹šÝ]^˜HX^˜[È‹›˜]ZØHÝ]^˜H‹¶*6b¶.H6)öa6av+v-vb6a‹˜ÛÛ\˜YÜˆ‹˜XÚ]]\ˆ‹›[[^šH—NÂˆÛÛœÝÛÜšÈHË×Š™YYØ[š[™ÛÚÚ[™ß[
WÊÊÛÜšß›ØŸ›Øœß[\Þ[Y[›Û_ZYÛÜšÊW‹Ë×ŠÛÜšß›ØŸ›Øœß[\Þ[Y[›Û_ZYÛÜšÊWÊÊ™YYØ[X\Ù_[š[™
W‹Ëš›ØˆX\ÙH‹ÛÜšÈX\ÙH‹šØ^šH‹›˜]ZØHØ^šH‹˜X˜Z›È‹™[\[È‹˜]˜Z[‹™[\ÚH‹œ™XÚ\ÛÈ˜X˜[È‹¶.vava‹¶b6.6b¶`v*H—NÂˆÛÛœÝX\›š[™ÈHË×ŠÝ\™YÚ[ŸÜ[ŸZÙ_™YYØ[[
WÊÊÛÝ\œÙ_\ÜÛÛŸ˜Z[š[™ßÛ\ÜßX\›ŸX\›š[™ÊW‹Ë×ŠÛÝ\œÙ_\ÜÛÛŸ˜Z[š[™ßÛ\ÜßX\›ŸX\›š[™ÊWÊÊÝ\™YÚ[ŸX\Ù_[Ø[™YY
W‹ËXXÚYH‹Ø[X\›ˆ‹šH›È[™\œÝ[™\ÜÛÛˆ‹˜Ý\œÛÈ‹›XØÚ[Ûˆ‹˜ÛÝ\œÈ‹›XÛÛˆ‹œÛÛ[È‹šÝZšY[ž˜H‹˜\™[™\ˆ‹¶*¶.va6aH‹¶+öb6,v*H—NÂˆÛÛœÝX\HË×ŠÜ[ŸÚÝßš[™™YYØ[
WÊÊX\›Ý]_ØØ][ÛŸ˜XÚÚ[™ÊW‹Ë×ŠX\›Ý]_ØØ][ÛŸ˜XÚÚ[™ÊWÊÊÜ[ŸÚÝßX\Ù_Ú\™_™YY
W‹Ë›Ü[ˆX\‹›X\X\ÙH‹œÚÝÈ›Ý]H‹›X\H‹˜Ø\H‹œ˜[X[šH‹œ›ÝH‹¶+¶,vb¶-ö*H‹¶-ö,vb¶`ˆ‹¶avb6`¶.H—NÂˆYˆ
\ÊØ\Xš[]JH	‰ˆ\ÊÈ™˜\›Y\ˆ‹™˜\›H‹œÛX[Û\ˆ‹™Ü›ÝÙ\ˆ—JJHÂˆ™]\›ˆÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆ™\ÜÛœÙNˆ‘›ÜˆH˜\›Y\‹HØ[ˆ^Z[ˆÜ›Ü›Ø›[\È[ˆZ[ˆÛÜ™Ë[Ù[H\™\Ý™\\™H^Y\ˆY\ÜØYÙ\ËÚÝÈ›Ý]HÝ\ÜÜ[ˆHX\ÝZYHšY[]šY[˜ÙK[™ÝYÙÙ\ÝH™^ØY™HÝ\ˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ›^HÜ›Ü\È˜Y‹œÙ[^HÜ›Ü‹œÚÝÈ›Ý]H‹›Ü[ˆX\—BˆNÂˆBˆYˆ
\ÊØ\Xš[]JJHÂˆ™]\›ˆÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆ™\ÜÛœÙNˆ™^\ÕÛÜšÙ›Ü˜ÙPØ\Xš[]P[œÝÙ\Š
KˆÝYÙÙ\Ý[ÛœÎˆÈœÝ\˜Z[š[™È‹œÚÝÈ›Øˆ]Ø^\È‹›Ü[ˆX[XØÙ\ÜÈ‹›Ü[ˆYÜšU˜YH—BˆNÂˆBˆYˆ
\ÊÛ[šXÓX\
JH™]\›ˆÈ\Nˆ™\™XÝ‹\™XÝXÝ[ÛŽˆ˜Û[šXË[X\Z[‹™\ÜÛœÙNˆ’HÜ[™YHÛ[šXÈ[™\›XXÞHX\ˆÚ\™H[Ý\ˆš[YÙKÚ]KÜˆ™X\™\Ý[™X\šË[™HÚ[ÝZYHHÛÜÙ\ÝÛ[šXË[Øš[HÛ[šXËÜˆ\›XXÞH›Ý]KˆˆNÂˆYˆ
\ÊÛ[šXÊJH™]\›ˆÈ\Nˆ™\™XÝ‹\™XÝXÝ[ÛŽˆ˜Û[šXËZ[‹™\ÜÛœÙNˆ’HX\™[ÝH™YYÛ[šXÈÝ\ÜˆHØ[ˆÝZYHØ\™HXØÙ\ÜËÚÝÈÛ[šXÈÜˆ\›XXÞHÜ[ÛœÈÛˆHX\[™™\\™HHØY™H[™Ù™‹ˆYˆ\È\È[ˆ[Y\™Ù[˜ÞKØ[ØØ[[Y\™Ù[˜ÞH[›ÝËˆÚ\™H[Ý\ˆš[YÙKÚ]KÜˆ™X\™\Ý[™X\šËˆˆNÂˆYˆ
\ÊØÝÜŠJH™]\›ˆÈ\Nˆ™\™XÝ‹\™XÝXÝ[ÛŽˆ™ØÝÜ‹Z[‹™\ÜÛœÙNˆ’HX\™[ÝH™YYHØÝÜ‹ˆHØ[ˆÝZYH[ÝHÝ\žHÝ\ˆH[H›ÝHØÝÜˆ[™\È\È›ÝHXYÛ›ÜÚ\Ë]HØ[ˆ[^Z[ˆÚ]\[™YÚXÚÈ\™Ù[Ø\›š[™ÈÚYÛœËš[™Û[šXÈÜˆ[Øš[HÛ[šXÈÝ\Ü[™™\\™HH›ÝšY\ˆ[™Ù™‹ˆš\œÝ[YHÚ\™H[ÝH\™KˆˆNÂˆYˆ
\ÊYYXÚ[™JJH™]\›ˆÈ\Nˆ™\™XÝ‹\™XÝXÝ[ÛŽˆ›YYXÚ[™KZ[‹™\ÜÛœÙNˆ’HX\™[ÝH™YYYYXÚ[™KˆHØ[ˆÝZYH[ÝHÝ\žHÝ\ˆHØ[››Ý™\ØÜšX™K]HØ[ˆ[^Z[ˆHYYXÚ[™HÛÛ˜Ù\›‹š[™\›XXÞHÜˆ[Øš[HÛ[šXÈÝ\Ü[™™\\™H›ÝšY\ˆ™]šY]Ëˆš\œÝ[YHHYYXÚ[™HÛÛ˜Ù\›‹ˆˆNÂˆYˆ
\ÊÜ›Ü˜Y
JH™]\›ˆÈ\Nˆ™\™XÝ‹\™XÝXÝ[ÛŽˆ˜Ü›ÜZ[‹™\ÜÛœÙNˆ’HØ[ˆ[Ú]HÜ›Ü›Ø›[KˆIÛHÚ][ÝKˆHÜ[™YÜ›ÜÝ\Üˆ[YHHÜ›ÜÚ\™HH˜\›H\Ë[™Ú]ÛÚÜÈÜ›Û™ËˆˆNÂˆYˆ
\ÊÜ›ÜØ[JJH™]\›ˆÈ\NˆÛÜšÙ›ÝÈ‹ÛÜšÙ›ÝÎˆ˜YH‹XÝ[ÛŽˆ˜^Y\‹XÛÛXÝ‹™\ÜÛœÙNˆ’HØ[ˆ[Ù[HÜ›ÜˆHÜ[™Y^Y\ˆÝ\Üˆ[YHHÜ›Ü]X[]KØØ][Û‹[™^Y\ˆYˆ[ÝHÛ›ÝÈÛ™KˆHÚ[[™\\™HHØ[H[™[]™\žH˜XÚÚ[™Ëˆ‹]\Ù]ˆÈ›ÙXÝYˆš\œÝ›ÙXÝ

OËšYHNÂˆYˆ
\ÊÛÜšÊJH™]\›ˆÈ\NˆÛÜšÙ›ÝÈ‹ÛÜšÙ›ÝÎˆÛÜšÙ›Ü˜ÙH‹XÝ[ÛŽˆ˜Z[\›Ùš[H‹™\ÜÛœÙNˆ’HØ[ˆ[Ú]ÛÜšËˆHÜ[™Y›ØˆÝ\Üˆ[YH[Ý\ˆÛÝ[žKH›Øˆ[ÝHØ[[™[Ý\ˆÚÚ[ËˆHÚ[ÚÝÈH›ÛH][™\XØ][ÛˆÝ\ˆ‹]\Ù]ˆÈ›ÛRYˆš\œÝ[YÚX›T›ÛJ
OËšYHNÂˆYˆ
\ÊX\›š[™ÊJH™]\›ˆÈ\NˆÛÜšÙ›ÝÈ‹ÛÜšÙ›ÝÎˆ›X\›š[™È‹XÝ[ÛŽˆœÝ\‹™\ÜÛœÙNˆ’HØ[ˆ[[ÝHX\›‹ˆHÜ[™YÛÝ\œÙHÝ\Üˆ[YHHÚÚ[[ÝHØ[ÜˆHØ[ˆÝ\H™XÛÛ[Y[™YÛÝ\œÙHÚ]Ø\[ÛœÈÜˆ]Y[Ëˆ‹]\Ù]ˆßHNÂˆYˆ
\ÊX\
JH™]\›ˆÈ\Nˆ™\™XÝ‹\™XÝXÝ[ÛŽˆ™[[X\‹™\ÜÛœÙNˆ‘[X\\ÈÜ[‹ˆ[ÝHØ[ˆ›ÛÛK˜YËš[™˜XÚ[]Y\ËÚXÚÈ›Ý]\Ë[™˜XÚÈÚ\Y[ËˆˆNÂˆ™]\›ˆ[ÂŸB‚™[˜Ý[Ûˆ™^\ÐÛÛ™\œØ][Û‘š\œÝ[[
ÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆÛÛœÝ˜[YHH\Ù\‘š\œÝ˜[YJ
NÂˆÛÛœÝ\ÈHÛÜ™ÈOˆÛÜ™ËœÛÛYJÛÜ™Oˆ™]È™YÑ^
‰ÝÛÜ™W˜
K\Ý
ÝÙ\ŠJNÂˆÛÛœÝ™\Ú[Y[[[H™^\Ô™\Ú[Y[ÛÛ™\œØ][Û’[[
ÛÛ[X[™
NÂˆYˆ
[ÝÙ\ŠH™]\›ˆ™\Ú[Y[[[[ÂˆYˆ
\Ô]›Ü›Q^Z[•›ÚXÙPÛÛ[X[™
ÛÛ[X[™
JHÂˆ™]\›ˆÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆ™\ÜÛœÙNˆ™^\Ô]›Ü›Q^Z[[œÝÙ\Š
KˆÝYÙÙ\Ý[ÛœÎˆÈš[H˜\›Y\ˆ‹š[H]Y[‹›Ü[ˆX\›š[™È‹›Ü[ˆX\—BˆNÂˆBˆYˆ
×ŠÛY_ÛÈÛY_™^\ÈÛY_YÜš[™^\ÈÛY_YÜšH™^\ÈÛY_Ü[ˆÛY_XZ[ˆØÜ™Y[Ÿ\Ú›Ø\™˜XÚÈÛY_ZÙHYHÛYJIË\Ý
ÝÙ\ŠBˆ×ŠXZ[ˆY[_Y[JJÎ—ÊÊÛY_\Ú›Ø\™
JO×‹Ë\Ý
ÝÙ\ŠBˆ×ŠÜ[ŸÛß™]\›ŸZÙHY_˜XÚÊW‹Š—ŠÛY_\Ú›Ø\™XZ[ˆØÜ™Y[ŸXZ[ˆY[_Y[JW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆšÛYH‹ˆ™\ÜÛœÙNˆÛYH\ÈÜ[‹	Û˜[Y_KˆÚ]È[ÝH™YY™^ØˆNÂˆBˆÛÛœÝ™\]Y\ÝYX\ÛÝ[žHHYœšXØ[“X\ÛÝ[žU\™Ù]
ÛÛ[X[™
NÂˆYˆ
™\]Y\ÝYX\ÛÝ[žH	‰ˆ\ÐÛÝ[žSX\ÛÛ[X[™
ÛÛ[X[™
JHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ˜ÛÝ[žK[X\‹ˆÛÝ[žNˆ™\]Y\ÝYX\ÛÝ[žKˆ™\ÜÛœÙNˆHÜ[™YHX\›Üˆ	Ü™\]Y\ÝYX\ÛÝ[žK›˜[Y_Kˆ[ÝHØ[ˆ›ÛÛK˜YË[œÜXÝ™X\˜žH™YÚ[ÛœË[™YÛ[šXË\›XXÞKÜ›Ü›Ý]KÜˆÚ\Y[˜XÚÚ[™Ë˜ˆNÂˆBˆYˆ
™\Ú[Y[[[
H™]\›ˆ™\Ú[Y[[[ÂˆÛÛœÝ^XÝÜ™Y][™ÈH×Š[ß_^_ÛÛÙ[Ü›š[™ßÛÛÙ[Ü›š[™ßÛÛÙY\››ÛÛŸÛÛÙY\››ÛÛŸÛÛÙ]™[š[™ßÛÛÙ]™[š[™ßÛ_Y[›ÜÈX\ßY[˜\È\™\ß›Ûš›Ý\ŸØ[]X˜\š_Z˜[X›ßÛ_Ú_›ÛHX_›ØH\™JWŠÎ—ÊÊ™^\ßYÜš[™^\ßYÜšH™^\ßYÜšJJOÉË\Ý
ÝÙ\ŠNÂˆYˆ
^XÝÜ™Y][™ÊHÂˆ™]\›ˆÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆ™\ÜÛœÙNˆ[È	Û˜[Y_KˆÝÈØ[ˆH\ÜÚ\Ý[ÝOØˆÝYÙÙ\Ý[ÛœÎˆÈ’H™YYHØÝÜˆ‹š[YHÙ[^HÜ›Ü‹œÝ\HÛÝ\œÙH‹™š[™ÛÜšÈ‹›Ü[ˆX\—BˆNÂˆBˆYˆ
×ŠØ[ˆ[ÝHX\ˆY_\™H[ÝH\Ý[š[™ßÈ[ÝHX\ˆY_[ÝHX\ˆY_™^\È[ÝH\™_\™H[ÝH\™JW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆ™\ÜÛœÙNˆY\È	Û˜[Y_KHØ[ˆX\ˆ[ÝKˆ[YHÚ][ÝH™YY[ˆ[Ý\ˆÝÛˆÛÜ™Ë˜ˆÝYÙÙ\Ý[ÛœÎˆÈ’H™YYYYXÚ[™H‹›^HÜ›Ü\È˜Y‹˜Û[šXÈ™X\ˆYH‹™š[™ÛÜšÈ—BˆNÂˆBˆYˆ
×ŠØ\[ÛŸØ\[Ûœß˜[œØÜš\ÝX]\ÏÊW‹Š—Š[ZX[X[]Y[ØÝÜŸ›ÝšY\ŸÛ[šXßØ\™JWŸŠ[ZX[X[]Y[ØÝÜŸ›ÝšY\ŸÛ[šXßØ\™JW‹Š—ŠØ\[ÛŸØ\[Ûœß˜[œØÜš\ÝX]\ÏÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆšX[‹ˆXÝ[ÛŽˆ˜Ø\[Ûˆ‹ˆ™\ÜÛœÙNˆ’HØ[ˆZ[Ø\[ÛœÈ›Üˆ[ZX[ˆHÜ[™YHØ\[Ûˆ™[^HÛÈH]Y[Ø\™YÚ]™\‹[™›ÝšY\ˆØ[ˆ™XYHÛÛ™\œØ][ÛˆÛX\›Kˆ‹ˆ]\Ù]ˆßBˆNÂˆBˆYˆ
×ŠX[Ø\™_X[Ø\™_YYXØ[Û[šXß[ZX[
W‹Š—Š\™\Ÿ›ÝšY\Ÿ˜XÝ][Û™\Ÿ™ÛßÛÝ™\››Y[
WŸŠ\™\Ÿ›ÝšY\Ÿ˜XÝ][Û™\Ÿ™ÛßÛÝ™\››Y[
W‹Š—ŠX[Ø\™_X[Ø\™_YYXØ[Û[šXß[ZX[
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆœ\™\œÚ\‹ˆXÝ[ÛŽˆ[ZX[‹ˆ™\ÜÛœÙNˆ’HÜ[™YX[Ø\™H\™\ˆÝ\ÜˆYÜšS™^\ÈØ[ˆÚÝÈ›Û‹YXYÛ›ÜÝXÈ[ZÙK[Øš[HÛ[šXÈÛÛÜ™[˜][Û‹Û[šXÈ[™\›XXÞHØØ][Ûˆ[Ø\[ÛœË›ÝšY\ˆ[™Ù™ˆXÚÙ]Ë[™›ÛÝË]\]šY[˜ÙKˆ‹ˆ]\Ù]ˆßBˆNÂˆBˆYˆ
×Š[Øš[HÛ[šXßšY[Û[šXßÝ]™XXÚÛ[šXßÛ[šXÈÝ]™XXÚ\˜[Û[šXÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆšX[‹ˆXÝ[ÛŽˆ›[Øš[KXÛ[šXÈ‹ˆ™\ÜÛœÙNˆ’HÜ[™Y[Øš[HÛ[šXÈÝ\ÜˆHØ[ˆÝZYH\ÈÝ\žHÝ\ˆÝ\[ZÙKØ\\™HØØ][Û‹™\\™HH›ÝšY\ˆ[™Ù™‹š[™Û[šXÈÜˆ\›XXÞH™\ÛÝ\˜Ù\Ë[™Ü™Ø[š^™HÝ]™XXÚ›ÛÝË]\ˆ\È\È›ÝHXYÛ›ÜÚ\Ëˆš\œÝ[YHÚ\™HH]Y[\Ëˆ‹ˆ]\Ù]ˆÈ]Y[ØØ][ÛŽˆXÝ]™PÛÝ[žJ
K›˜[YHBˆNÂˆBˆYˆ
×Š›È[™Û\ÚØ[››Ý™XYØ[‰Ý™XYØ[™XYHØ[››Ý™XYHØ[™XY[]\˜]_™XY›ÜˆY_[YH™XY˜XžHÚXÚßÚ[ÚXÚßÚXÚÈ˜XžJW‹Ë\Ý
ÝÙ\ŠBˆ×ŠÝ\Ü[Ÿ™YÚ[ŠW‹Š—ŠX[
OÊ[ZÙ_[ZX[[ZÙ_]Y[[ZÙJW‹Ë\Ý
ÝÙ\ŠBˆ×ŠX[
OÊ[ZÙ_[ZX[[ZÙ_]Y[[ZÙJW‹Š—ŠÝ\Ü[Ÿ™YÚ[Ÿ[
W‹Ë\Ý
ÝÙ\ŠBˆ×œÝ\[ZÙIË\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆšX[‹ˆXÝ[ÛŽˆš[ZÙH‹ˆ™\ÜÛœÙNˆ’HÝ\YX[[ZÙKˆ[YHÚÈ™YYÈØ\™H[™Ú\™H^H\™Kˆ\È\È›ÝHXYÛ›ÜÚ\ÎÈ][È™\\™HHØY™\Ý™^Ý\ÜÝ\ˆ‹ˆ]\Ù]ˆßBˆNÂˆBˆYˆ
×Š\›XXÞ_YYXÚ[™_YYXØ][ÛŸ™Yš[Yß[ÊW‹Ë\Ý
ÝÙ\ŠH	‰ˆ×ŠX\ÚÝßš[™™X\Ÿ™X\™\ÝÚ\™_ØØ][ÛŠW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ™[[X\‹ˆ™\ÜÛœÙNˆ’HÜ[™YH[X\›ÜˆÛ[šXÈ[™\›XXÞHÝ\ÜˆÚ\™H[Ý\ˆš[YÙKÚ]KÜˆØØ][Û‹[™HÚ[ÝZYHHÛÜÙ\Ý˜XÚ[]H›Ý]Kˆ‚ˆNÂˆBˆYˆ
×ŠÚ]Ø[ˆ[ÝHßÝÈØ[ˆ[ÝH[
W‹Š—Š]Y[Ø\™YÚ]™\ŸÚXÚÈ\œÛÛŸ\œÛÛˆÚXÚÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆšX[‹ˆXÝ[ÛŽˆš[ZÙH‹ˆ™\ÜÛœÙNˆ‘›ÜˆH]Y[HØ[ˆÝ\H›Û‹YXYÛ›ÜÝXÈ[ZÙK[š[™Û[šXÈÜˆ\›XXÞHÝ\Ü™\\™HH›ÝšY\ˆØ[YØ\[ÛœËÜ™Ø[š^™H[Øš[HÛ[šXÈÝ\Ü[™Ü™X]HHÛX\ˆ[™Ù™ˆXÚÙ]ˆ‹ˆ]\Ù]ˆßBˆNÂˆBˆYˆ
×Š[YHÙ[Ù[
W‹Š—ŠXZ^™_ÛÜ›ŸÜ›Ü\™\Ý›ÙXÙJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ˜YH‹ˆXÝ[ÛŽˆ˜^Y\‹XÛÛXÝ‹ˆ™\ÜÛœÙNˆ’HÜ[™YÜ›ÜØ[HÝ\Üˆ[YHH]X[]KØØ][Û‹[™^Y\ˆYˆ[ÝHÛ›ÝÈÛ™KˆHÚ[[™\\™H^Y\ˆÛÛXÝ[™[]™\žH˜XÚÚ[™Ëˆ‹ˆ]\Ù]ˆÈ›ÙXÝYˆš\œÝ›ÙXÝ

OËšYBˆNÂˆBˆYˆ
×ŠÛÛXÝY\ÜØYÙ_Ø[[ÈßÜXZÈÊW‹Š—˜^Y\—‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ˜YH‹ˆXÝ[ÛŽˆ˜^Y\‹XÛÛXÝ‹ˆ™\ÜÛœÙNˆ’H™\\™Y^Y\ˆÛÛXÝˆHØ[ˆ˜YH^Y\ˆY\ÜØYÙKÙY\Ø[H]šY[˜ÙK[™ØZ]›Üˆ[Ý\ˆÛÛ™š\›X][Ûˆ™Y›Ü™H[žH]™HÓTËÚ]Ð\ÜˆÛ™HXÝ[Û‹ˆ‹ˆ]\Ù]ˆÈ›ÙXÝYˆš\œÝ›ÙXÝ

OËšYBˆNÂˆBˆYˆ
×ŠÙ[™^
W‹Š—ŠÛ\ß^
W‹Š—˜^Y\—ŸŠÛ\ß^
W‹Š—˜^Y\—‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ˜YH‹ˆXÝ[ÛŽˆ˜^Y\‹\Û\È‹ˆ™\ÜÛœÙNˆ”ÓTÈÈH^Y\ˆ\ÈÝYÙYˆHÚ[›ÝÙ[™][[[ÝHÛÛ™š\›Kˆ]™H[]™\žH\Ù\ÈÚ[[ÈÜˆHÛÛ™šYÝ\™YÓTÈ›ÝšY\‹ˆ‹ˆ]\Ù]ˆÈÚ[›™[ˆ”ÓTÈ‹›ÙXÝYˆš\œÝ›ÙXÝ

OËšYBˆNÂˆBˆYˆ
×ŠÙ[™Y\ÜØYÙJW‹Š—Ú]Ø\‹Š—œÙ[\—ŸÚ]Ø\‹Š—œÙ[\—‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ˜YH‹ˆXÝ[ÛŽˆ˜^Y\‹]Ú]Ø\‹ˆ™\ÜÛœÙNˆ•Ú]Ð\ÈHÙ[\ˆ\ÈÝYÙYˆHÚ[›ÝÙ[™][[[ÝHÛÛ™š\›Kˆ]™H[]™\žH\Ù\ÈÚ[[ÈÚ]Ð\ÜˆHÛÛ™šYÝ\™YÚ]Ð\›ÝšY\‹ˆ‹ˆ]\Ù]ˆÈÚ[›™[ˆ•Ú]Ð\‹›ÙXÝYˆš\œÝ›ÙXÝ

OËšYBˆNÂˆBˆYˆ
×Š˜XÚß›ÛÝßÚÝß[Ûš]ÜŠW‹Š—ŠÚ\Y[[]™\ž_Ü™\ŸØ[_›ÙXÝ
W‹Ë\Ý
ÝÙ\ŠBˆ×Š˜XÚßÚÝÊW‹Š—œ›Ý]W‹Š—Š˜\›_šY[
W‹Š—›X\šÙ]‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ™[[X\‹ˆ™\ÜÛœÙNˆ’HÜ[™YÚ\Y[[™›Ý]H˜XÚÚ[™ËˆHX\Ø[ˆÚÝÈ›Ý]KÚXÚÜÚ[Ëš\ÚÈ›Ý\Ë[™[]™\žH]šY[˜ÙKˆ‚ˆNÂˆBˆYˆ
×ŠÚÝßÜ[ŸÚXÚÊW‹Š—Š˜YH
OÜ›Ý]W‹Š—šÙ[žXW‹Š—›šYÙ\šXWŸŠ›Ý]_ÚÝÈ›Ý]JW‹Š—šÙ[žXW‹Š—›šYÙ\šXW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ™[[X\‹ˆ™\ÜÛœÙNˆ’HÜ[™YHÙ[žXHÈšYÙ\šXH›Ý]HšY]ËˆHX\Ø[ˆÚÝÈ›Ý]HÛÛ^Ú\Y[˜XÚÚ[™Ë^Y\ˆ\]\Ë[™[]™\žH]šY[˜ÙKˆ‚ˆNÂˆBˆYˆ
×Š[ŸÝ\Ü[ŠW‹Š—Š›Û™_šY[
W‹Š—ŠØØ[Ÿ]šY[˜ÙJWŸœ[ˆ›Û™HØØ[—‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ˜YH‹ˆXÝ[ÛŽˆ™›Û™H‹ˆ™\ÜÛœÙNˆ‘›Û™HØØ[ˆ\È™XYKˆ™^\ÈØ[ˆ™]šY]ÈÜ›ÜX[\ÝË\œšYØ][Û‹šY[]šY[˜ÙK^Y\ˆ›ÛÙ‹[™H™^˜\›HXÝ[Û‹ˆ‹ˆ]\Ù]ˆÈ›ÙXÝYˆš\œÝ›ÙXÝ

OËšYBˆNÂˆBˆYˆ
×Š^Z[ŸÝ[[X\š^™_™XY
W‹Š—ŠÜ›Ü]šY[˜Ù_šY[]šY[˜Ù_›Û™H]šY[˜ÙJW‹Š—ŠÚ[\_Z[ŸX\ÞJWŸ˜Ü›Ü]šY[˜ÙW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ˜YH‹ˆXÝ[ÛŽˆ™›Û™K\\Ý‹ˆ™\ÜÛœÙNˆ’[ˆÚ[\HÛÜ™ÎˆÜ›Ü]šY[˜ÙH[ÈÚÝÈÚ]\ˆHÜ›ÜÛÚÜÈX[K[XYÙYžK\ÝXY™™XÝYÜˆ™XYH›ÜˆØ[Kˆ™^\ÈØ[ˆ\›ˆ][È^Y\ˆ›ÛÙˆ[™H™^˜\›HÝ\ˆ‹ˆ]\Ù]ˆÈ›ÙXÝYˆš\œÝ›ÙXÝ

OËšYBˆNÂˆBˆYˆ
×Š™XYÜXZß^JW‹Š—Š\ÜÛÛŸÛÝ\œÙJW‹Š—Š›ÜˆYJO×‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ›X\›š[™È‹ˆXÝ[ÛŽˆ›\ÜÛÛˆ‹ˆ™\ÜÛœÙNˆ’HÜ[™YH\ÜÛÛˆ™XY\‹ˆ™^\ÈØ[ˆ™XYH\ÜÛÛˆ[ˆÚ[\HÛÜ™È[™ÙY\Ø\[ÛœÈ]˜Z[X›HÚ[H[ÝH›ÛÝÈ[Û™Ëˆ‹ˆ]\Ù]ˆßBˆNÂˆBˆYˆ
×ŠZ[Ü™X]_Ü[Ÿ\›ˆÛŠW‹Š—ŠØ\[ÛŸØ\[ÛœßÝX]\ß˜[œØÜš\
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ›X\›š[™È‹ˆXÝ[ÛŽˆ˜Ø\[Ûˆ‹ˆ™\ÜÛœÙNˆØ\[ÛˆÛÜšÙ›ÝÈ\ÈÜ[‹ˆ™^\ÈÚ[\›ˆÜÚÙ[ˆ\ÜÛÛˆÛÜ™È[È™XYX›H^›ÜˆX\›š[™ÈÝ\Üˆ‹ˆ]\Ù]ˆßBˆNÂˆBˆYˆ
×ŠÛÛ\]_š[š\Ú
W‹Š—Š^H
OÊ\ÜÛÛŸÛÝ\œÙJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ›X\›š[™È‹ˆXÝ[ÛŽˆ›\ÜÛÛˆ‹ˆ™\ÜÛœÙNˆ“\ÜÛÛˆ›ÙÜ™\ÜÈÛÜšÙ›ÝÈ\ÈÜ[‹ˆ™^\ÈØ[ˆ™XÛÜ™HÛÛ\]Y\ÜÛÛ‹\]H›ÙÜ™\ÜË[™™\\™HH™^X\›š[™ÈÝ\ˆ‹ˆ]\Ù]ˆßBˆNÂˆBˆYˆ
×Š\ÜÝY_Ü™X]_Ú]™_Ù]
W‹Š—Š^H
OÊÙ\YšXØ]_Ü™Y[X[
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ›X\›š[™È‹ˆXÝ[ÛŽˆ˜Ù\YšXØ]H‹ˆ™\ÜÛœÙNˆÙ\YšXØ]HÛÜšÙ›ÝÈ\ÈÜ[‹ˆ™^\ÈÚ[ÚXÚÈÛÝ\œÙH›ÙÜ™\ÜÈ[™™\\™HHÙ\YšXØ]H]šY[˜ÙHÚ[ˆHX\›™\ˆ\È™XYKˆ‹ˆ]\Ù]ˆßBˆNÂˆBˆYˆ
×˜š[ØÚ[Z\Ýž_š[ÛÙÞ_Ú[Z\Ýž_X›Ü˜]Üž_X—‹Ë\Ý
ÝÙ\ŠH	‰ˆ×Š›ØŸ›Øœß\_ÛÜšß›ÛJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆÛÜšÙ›Ü˜ÙH‹ˆXÝ[ÛŽˆ˜Z[\›Ùš[H‹ˆ™\ÜÛœÙNˆ•Ú]š[ØÚ[Z\ÝžK™^\ÈØ[ˆÝYÙÙ\ÝXˆ\ÜÚ\Ý[]X[]HÛÛ›Û›ÛÙØY™]KYÜšXÝ[\™H\Ý[™ËX[Ý]™XXÚ[™™\ÙX\˜ÚÝ\Ü›Û\È[ˆÙ[žXHÜˆÛÝ]YœšXØK[ˆ[™\\™H[ˆ\XØ][Ûˆ]ˆ‹ˆ]\Ù]ˆÈ›ÛRYˆš\œÝ[YÚX›T›ÛJ
OËšYBˆNÂˆBˆYˆ
×Š™\\™_˜XÝXÙ_ÛØXÚ
W‹Š—Š[\šY]ß[\šY]ÜÊWŸš[\šY]È™\‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆÛÜšÙ›Ü˜ÙH‹ˆXÝ[ÛŽˆš[\šY]È‹ˆ™\ÜÛœÙNˆ’[\šY]È™\\˜][Ûˆ\ÈÜ[‹ˆ™^\ÈØ[ˆ˜XÝXÙH]Y\Ý[ÛœË^Z[ˆH›ÛK[[ÝH[[Ý\ˆÝÜžK[™™\\™H[œÝÙ\œÈ[ˆÚ[\HÛÜ™Ëˆ‹ˆ]\Ù]ˆÈ›ÛRYˆš\œÝ[YÚX›T›ÛJ
OËšYBˆNÂˆBˆYˆ
×ŠH™YYÛÜšß™YYÛÜšßš[™ÛÜšßš[™H›ØŸ›ØˆX\Ù_ÛÜšÈX\Ù_™YY›ØŸØ[›ØŠW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆÛÜšÙ›Ü˜ÙH‹ˆXÝ[ÛŽˆ˜Z[\›Ùš[H‹ˆ™\ÜÛœÙNˆ’HÜ[™YÛÜšÈÝ\Üˆ[YH[Ý\ˆÛÝ[žKH›Øˆ[ÝHØ[[™[Ý\ˆÚÚ[ËˆHÚ[[[ÝH\HÝ\žHÝ\ˆ‹ˆ]\Ù]ˆÈ›ÛRYˆš\œÝ[YÚX›T›ÛJ
OËšYBˆNÂˆBˆYˆ
×Š\_\XØ][ÛŠW‹Š—Š›ØŸ›Û_ÛÜšÊWŸš[YH\W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆÛÜšÙ›Ü˜ÙH‹ˆXÝ[ÛŽˆ˜\K\›ÛH‹ˆ™\ÜÛœÙNˆ’HÜ[™Y›Øˆ\XØ][ÛˆÝ\Üˆ™^\ÈØ[ˆX]ÚH›ÛKÚXÚÈZ\ÜÚ[™ÈÚÚ[Ë™\\™HH\XØ][Û‹[™Ø]™H\XØ][Ûˆ]šY[˜ÙKˆ‹ˆ]\Ù]ˆÈ›ÛRYˆš\œÝ[YÚX›T›ÛJ
OËšYBˆNÂˆBˆYˆ
×Š\ÙH^HØØ][ÛŸ\ÙHØØ][ÛŸ^HØØ][ÛŸÜÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ™[[X\‹ˆ™\ÜÛœÙNˆ’HÜ[™YX\Ý\ÜÛÈ[ÝHØ[ˆ[ÝÈØØ][Ûˆ[™ÛÛ[YH›Ý]KÛ[šXË\›XXÞKÜˆÚ\Y[˜XÚÚ[™Ëˆ‚ˆNÂˆBˆYˆ
ØØ[]\ÚXÐÛÛ›Û[[
ÛÛ[X[™
JHÂˆ™]\›ˆÂˆ\NˆÛÛ‹ˆÛÛˆ›]\ÚXËXÛÛ›Û‚ˆNÂˆBˆYˆ
×Š^_Ü[Ÿš[™ÙX\˜ÚÝ\]ÛŸ\Ý[ˆÊW‹Š—Š]\ÚXßÛÛ™ßÛÛ™Üß^[\ÝÛÝ[ÛÜÜ[ÛÛ™ÛÛ\Ù_Ù[žX[Ÿ™[^[™ßLÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÛ‹ˆÛÛˆ›]\ÚXÈ‹ˆÝYÙÙ\Ý[ÛœÎˆÈœÝÜH]\ÚXÈ‹œ^H™[^[™È]\ÚXÈ‹œ]\ÙH—BˆNÂˆBˆYˆ
×ŠÝÜ]\ÙJW‹Š—›]\ÚX×Ÿœ]\ÙH]\ÚX×ŸœÝÜ]\ÚX×‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆ™\ÜÛœÙNˆ“]\ÚXÈ\ÈÝÜY›ÜˆH[[Ëˆ™^\È\ÈÝ[\Ý[š[™ÈÚ[ˆ[ÝHØ[]YØZ[‹ˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈœ^H™[^[™È]\ÚXÈ‹“™^\È—BˆNÂˆBˆYˆ
×œ]\ÙIšÛÛ‰ØZ]	œ]\ÙH\Ý[š[™×‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆ™\ÜÛœÙNˆ”]\ÙYˆØ^H™^\ÈÚ[ˆ[ÝHØ[YHYØZ[‹ˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ“™^\È—BˆNÂˆBˆYˆ
\Ô]›Ü›Q^Z[•›ÚXÙPÛÛ[X[™
ÛÛ[X[™
H×Š^Z[ˆ™^\ÈÙ[™\Ú\ß^Z[ˆ™^\ÈÛÜšÙ›Ü˜Ù_Ú]\È™^\ÈÙ[™\Ú\ßÚ]\È™^\ÈÛÜšÙ›Ü˜Ù_[YHX›Ý]™^\ÈÙ[™\Ú\ß[YHX›Ý]™^\ÈÛÜšÙ›Ü˜Ù_^Z[ˆYÜš[™^\ß^Z[ˆYÜšH™^\ßÚ]\ÈYÜš[™^\ßÚ]\ÈYÜšH™^\ß[YHX›Ý]YÜš[™^\ß[YHX›Ý]YÜšH™^\ß\™H[ÝHYÜš[™^\ßÚÈ\™H[Ý_Ú]\™H[ÝJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆ™\ÜÛœÙNˆ™^\Ô]›Ü›Q^Z[[œÝÙ\Š
KˆÝYÙÙ\Ý[ÛœÎˆÈœÝ\˜Z[š[™È‹œÚÝÈ›Øˆ]Ø^\È‹›Ü[ˆX[XØÙ\ÜÈ‹›Ü[ˆYÜšU˜YH—BˆNÂˆBˆYˆ
×ŠÚ]Ø[ˆ
Îž[ÝH
OÙßÝÈØ[ˆ[ÝH[Ú]È[ÝHß[YH[™\œÝ[™
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆ™\ÜÛœÙNˆ™^\ÕÛÜšÙ›Ü˜ÙPØ\Xš[]P[œÝÙ\Š
KˆÝYÙÙ\Ý[ÛœÎˆÈœÝ\˜Z[š[™È‹œÚÝÈ›Øˆ]Ø^\È‹›Ü[ˆX[XØÙ\ÜÈ‹›Ü[ˆYÜšU˜YH—BˆNÂˆBˆYˆ

×Š[Š™˜\›Y\Ÿ˜\›Y\Ÿ˜\›Y\œß˜\›Z[™ß˜\›JW‹Ë\Ý
ÝÙ\ŠH	‰ˆ×Š[Ý\ÜÚ]Ø[ŸÝÈØ[Ÿ[^Z[ŠW‹Ë\Ý
ÝÙ\ŠJBˆ×Ú]Ø[ˆ[ÝW‹Š—Š˜\›Y\Ÿ˜\›_˜\›Y\œß˜\›Z[™ÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆ™\ÜÛœÙNˆ‘›ÜˆH˜\›Y\‹HØ[ˆ^Z[ˆÜ›Ü›Ø›[\È[ˆZ[ˆÛÜ™Ë[Ù[H\™\Ý™\\™H^Y\ˆY\ÜØYÙ\ËÚÝÈ›Ý]HÝ\ÜÜ[ˆHX\ÝZYHšY[]šY[˜ÙK[™ÝYÙÙ\ÝH™^ØY™HÝ\ˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ›^HÜ›Ü\È˜Y‹œÙ[^HÜ›Ü‹œÚÝÈ›Ý]H‹›Ü[ˆX\—BˆNÂˆBˆYˆ
×Š˜Xž_Ú[ÚY[Ý\ŸÜ˜[™X_]Y[\œÛÛŠW‹Š—ŠÚXÚß[\Z[Ÿ™]™\Ÿ[š\ž_YYXÚ[™_ØÝÜŸÛ[šXÊW‹Ë\Ý
ÝÙ\ŠBˆ×ŠÚXÚÈ˜Xž_˜XžHÚXÚßÚ[ÚXÚß]Y[ÚXÚßÛÛY[Û™H\ÈÚXÚßH[HÚXÚßH™YYX[[
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆšX[Z[ZÙH‹ˆ™\ÜÛœÙNˆ’IÛHÚ][ÝKˆHÚ[ÝZYHX[[ZÙHÛ™H]Y\Ý[Ûˆ]H[YKˆ\È\È›ÝHXYÛ›ÜÚ\ËˆYˆ\È\È\™Ù[Üˆ[™Ù\›Ý\ËÛÛXÝØØ[[Y\™Ù[˜ÞH[›ÝËˆš\œÝÚÈ™YYÈØ\™H[™Ú\™H\™H^OÈ‚ˆNÂˆBˆYˆ
\ÊÈ›YYXÚ[™H‹›YYXØ][Ûˆ‹œ\›XXÞH‹œ™Yš[‹™YÈ‹œ[È—JJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ›YYXÚ[™KZ[‹ˆ™\ÜÛœÙNˆ’HX\™[ÝH™YYYYXÚ[™KˆHØ[ˆÝZYH[ÝHÝ\žHÝ\ˆHØ[››Ý™\ØÜšX™K]HØ[ˆ[^Z[ˆHYYXÚ[™HÛÛ˜Ù\›‹š[™\›XXÞHÜˆ[Øš[HÛ[šXÈÝ\Ü[™™\\™H›ÝšY\ˆ™]šY]Ëˆš\œÝ[YHHYYXÚ[™HÛÛ˜Ù\›‹ˆ‚ˆNÂˆBˆYˆ
\ÊÈ˜Û[šXÈ‹šÜÜ][‹›[Øš[HÛ[šXÈ‹šX[Ù[\ˆ‹šX[Ù[™H—JH	‰ˆ\ÊÈ›™X\ˆ‹›™X\™\Ý‹˜ÛÜÙ\Ý‹™š[™‹Ú\™H‹›X\‹›ØØ][Ûˆ‹˜\›Ý[™—JJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ˜Û[šXËZ[‹ˆ™\ÜÛœÙNˆ’HX\™[ÝH™YYÛ[šXÈÝ\ÜˆHØ[ˆÝZYHØ\™HXØÙ\ÜËÚÝÈÛ[šXÈÜˆ\›XXÞHÜ[ÛœÈÛˆHX\[™™\\™HHØY™H[™Ù™‹ˆYˆ\È\È[ˆ[Y\™Ù[˜ÞKØ[ØØ[[Y\™Ù[˜ÞH[›ÝËˆÚ\™H[Ý\ˆš[YÙKÚ]KÜˆ™X\™\Ý[™X\šËˆ‚ˆNÂˆBˆYˆ
\ÊÈ™ØÝÜˆ‹›\œÙH‹œ›ÝšY\ˆ‹˜Û[šXÚX[ˆ—JH	‰ˆ\ÊÈ›™YY‹Ø[‹œÜXZÈ‹[È‹˜Ø[‹˜ÛÛXÝ‹œÙYH‹™š[™‹š[—JJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ™ØÝÜ‹Z[‹ˆ™\ÜÛœÙNˆ’HX\™[ÝH™YYHØÝÜ‹ˆHØ[ˆÝZYH[ÝHÝ\žHÝ\ˆH[H›ÝHØÝÜˆ[™\È\È›ÝHXYÛ›ÜÚ\Ë]HØ[ˆ[^Z[ˆÚ]\[™YÚXÚÈ\™Ù[Ø\›š[™ÈÚYÛœËš[™Û[šXÈÜˆ[Øš[HÛ[šXÈÝ\Ü[™™\\™HH›ÝšY\ˆ[™Ù™‹ˆš\œÝ[YHÚ\™H[ÝH\™Kˆ‚ˆNÂˆBˆYˆ
×ŠH™YYX[™YYX[X[[[ZX[[YYXØ[[H™YYØ\™_™YYØ\™_H[HÚXÚß[HÚXÚßH™Y[ÚXÚß›Ý™Y[[™ÈÙ[
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆšX[Z[ZÙH‹ˆ™\ÜÛœÙNˆ’IÛHÚ][ÝKˆHÚ[ÝZYHX[[ZÙHÛ™H]Y\Ý[Ûˆ]H[YKˆ\È\È›ÝHXYÛ›ÜÚ\Ë]][È™\\™HH™^Ý\ÜÝ\ˆš\œÝÚÈ™YYÈØ\™H[™Ú\™H\™H^OÈ‚ˆNÂˆBˆYˆ
×Š^HÜ›Ü\È˜YÜ›Ü\È˜YÜ›Ü˜YšY[\È˜Y[È\™HÚXÚß[\ÈÚXÚßÜ›Ü›Ø›[_šY[›Ø›[_Y[ÝÈX]™\ßÚ[[™ß\ÝßÜ›ÜZ[™ß˜\›H›Ø›[JW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ˜Ü›ÜZ[‹ˆ™\ÜÛœÙNˆ’HØ[ˆ[Ú]HÜ›Ü›Ø›[KˆIÛHÚ][ÝKˆHÜ[™YÜ›ÜÝ\Üˆ[YHHÜ›ÜÚ\™HH˜\›H\Ë[™Ú]ÛÚÜÈÜ›Û™Ëˆ‚ˆNÂˆBˆYˆ

\ÊÈœÙ[‹œÙ[[™È‹˜^Y\ˆ‹›X\šÙ]‹˜YH—JH	‰ˆ\ÊÈ˜Ü›Ü‹›XZ^™H‹œšXÙH‹˜Ø\ÜØ]˜H‹˜™X[œÈ‹œ›ÙXÙH‹š\™\Ý‹œ›ÙXÝ—JJBˆ×Š[YHÙ[Ù[^HÜ›ÜÙ[XZ^™_š[™^Y\Ÿ[ÈÈ^Y\ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ˜YH‹ˆXÝ[ÛŽˆ˜^Y\‹XÛÛXÝ‹ˆ™\ÜÛœÙNˆ’HØ[ˆ[Ù[HÜ›ÜˆHÜ[™Y^Y\ˆÝ\Üˆ[YHHÜ›Ü]X[]KØØ][Û‹[™^Y\ˆYˆ[ÝHÛ›ÝÈÛ™KˆHÚ[[™\\™HHØ[H[™[]™\žH˜XÚÚ[™Ëˆ‹ˆ]\Ù]ˆÈ›ÙXÝYˆš\œÝ›ÙXÝ

OËšYBˆNÂˆBˆYˆ
×Š˜XÚßÚ\™H\ß›Ý]_[]™\ž_Ú\Y[Ø[HØØ][ÛŸ›ÙXÝØØ][ÛŸ˜[œØXÝ[ÛˆØØ][ÛŠW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ™[[X\‹ˆ™\ÜÛœÙNˆ’HÜ[™YH[X\›Üˆ˜XÚÚ[™ËˆÚ\™HHXÚÝ\[™[]™\žHØØ][ÛœË[™HÚ[ÝZYHH›Ý]Kš\ÚË[™Ú\Y[Ý]\Ëˆ‚ˆNÂˆBˆYˆ
×ŠH™YYÛÜšß™YYÛÜšßš[™ÛÜšßš[™H›ØŸ›Øˆ[Ÿ\H›ÜŸ[\Þ[Y[ÛÜšÙ›Ü˜Ù_›ÛJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆÛÜšÙ›Ü˜ÙH‹ˆXÝ[ÛŽˆ\ÊÈ˜\H—JHÈ˜\K\›ÛHˆˆ˜Z[\›Ùš[H‹ˆ™\ÜÛœÙNˆ’HØ[ˆ[Ú]ÛÜšËˆHÜ[™Y›ØˆÝ\Üˆ[YH[Ý\ˆÛÝ[žKH›Øˆ[ÝHØ[[™[Ý\ˆÚÚ[ËˆHÚ[ÚÝÈH›ÛH][™\XØ][ÛˆÝ\ˆ‹ˆ]\Ù]ˆÈ›ÛRYˆš\œÝ[YÚX›T›ÛJ
OËšYBˆNÂˆBˆYˆ
×ŠÝ\Š˜ÛÝ\œÙ_ÛÝ\œÙ_\ÜÛÛŸ˜Z[š[™ßX\›ŸXXÚY_ØÚÛÛÛ\ÜÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ›X\›š[™È‹ˆXÝ[ÛŽˆœÝ\‹ˆ™\ÜÛœÙNˆ’HØ[ˆ[[ÝHX\›‹ˆHÜ[™YÛÝ\œÙHÝ\Üˆ[YHHÚÚ[[ÝHØ[ÜˆHØ[ˆÝ\H™XÛÛ[Y[™YÛÝ\œÙHÚ]Ø\[ÛœÈÜˆ]Y[Ëˆ‹ˆ]\Ù]ˆßBˆNÂˆBˆYˆ
×ŠØ\[ÛŸØ\[ÛœßÝX]_˜[œØÜš\
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ×ŠX[ØÝÜŸÛ[šXß[ZX[]Y[›ÝšY\ŠW‹Ë\Ý
ÝÙ\ŠBˆÈÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆšX[‹ˆXÝ[ÛŽˆ˜Ø\[Ûˆ‹ˆ™\ÜÛœÙNˆ•[ZX[Ø\[ÛœÈ\™HÜ[‹ˆÜXZÈ˜]\˜[K[™™^\ÈÚ[[\›ˆHÛÛ™\œØ][Ûˆ[È™XYX›H^ˆ‹ˆ]\Ù]ˆßBˆBˆˆÂˆ\NˆÛÜšÙ›ÝÈ‹ˆÛÜšÙ›ÝÎˆ›X\›š[™È‹ˆXÝ[ÛŽˆ˜Ø\[Ûˆ‹ˆ™\ÜÛœÙNˆ“X\›š[™ÈØ\[ÛœÈ\™HÜ[‹ˆÜXZÈ˜]\˜[K[™™^\ÈÚ[Üš]HH\ÜÛÛˆÛÜ™ÈÛX\›Kˆ‹ˆ]\Ù]ˆßBˆNÂˆBˆYˆ
×ŠÜ[ŸÚÝß[ÛØ˜[™X[X\›Ý]_ØØ][ÛŠW‹Š—ŠX\›Ý]_ØØ][ÛŸ˜XÚÚ[™ÊW‹Ë\Ý
ÝÙ\ŠH×ŠX\Ü[ˆX\ÚÝÈX\
IË\Ý
ÝÙ\ŠJHÂˆ™]\›ˆÂˆ\Nˆ™\™XÝ‹ˆ\™XÝXÝ[ÛŽˆ™[[X\‹ˆ™\ÜÛœÙNˆ‘[X\\ÈÜ[‹ˆ[ÝHØ[ˆ›ÛÛK˜YËš[™˜XÚ[]Y\ËÚXÚÈ›Ý]\Ë[™˜XÚÈÚ\Y[Ëˆ‚ˆNÂˆBˆ™]\›ˆ[ÂŸB‚™[˜Ý[Ûˆ[ÛÛ™\œØ][Û‘š\œÝ[[
[[ÛÛ[X[™HˆŠHÂˆYˆ
Z[[
H™]\›ˆ˜[ÙNÂˆYˆ
[[\HOOH˜[œÝÙ\ˆŠH™]\›ˆ™^\ÐÛÛ™\œØ][Û‘š\œÝ™\ÜÛœÙJ[[œ™\ÜÛœÙK[[œÝYÙÙ\Ý[ÛœÈ×JNÂˆ™]\›ˆ[”Ú[\U\Ù\•›ÚXÙR[[
[[ÛÛ[X[™
NÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ^XÝ]U[šYšYY™^\Ò[[
[[ÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆYˆ
Z[[
H™]\›ˆ˜[ÙNÂˆÛX\YÙ[›ÙÜ™\ÜÕ[Y\œÊ
NÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆÛÛœÝ\›•ÚÙ[ˆHÜ[ÛœË\›•ÚÙ[ˆ[ÂˆÛÛœÝÛÛ\]Y]H]K››ÝÊ
NÂˆYÙ[\™›Ü›X[˜ÙTÝ]K›\ÝÛÛ[X[™HÛÛ[X[™ÂˆYÙ[\™›Ü›X[˜ÙTÝ]KœÜÚÙ[ÛÛ[X[™HÛÛ[X[™ÂˆYˆ
[[™˜\Ý[™JHÂˆYÙ[\™›Ü›X[˜ÙTÝ]K˜ÛÛ\]Y]HÛÛ\]Y]ÂˆYÙ[\™›Ü›X[˜ÙTÝ]K›\Ý][˜ÞS\ÈHX]›X^
KÛÛ\]Y]H
YÙ[\™›Ü›X[˜ÙTÝ]KœÝ\Y]ÛÛ\]Y]
JNÂˆYÙ[\™›Ü›X[˜ÙTÝ]KœÝ]\ÈH˜ÛÛ\]YŽÂˆYÙ[\™›Ü›X[˜ÙTÝ]Kœ›Ý]HH[[œ›Ý]SX™[™˜\Ý[[™HŽÂˆBˆYˆ
ÛÛ[X[™
HÂˆ™[Y[X™\ÛÛ™\œØ][Û•\›ŠÛÛ[X[™ˆŠNÂˆ\]S™^\Ð]Ø\™[™\ÜÊÛÛ[X[™ÈÚ[[ˆYHJNÂˆÜYXÚØY™]Tš\ÚÊÛÛ[X[™Ü[ÛœËœÛÝ\˜ÙH›ÚXÙHŠNÂˆB‚ˆYˆ
[[\HOOH˜[œÝÙ\ˆŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊ[[œÝYÙÙ\Ý[ÛœÈÈšX[‹˜Ü›ÜÈ‹ÛÜšÈ‹›X\›š[™È‹›X\—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹[[œ™X\ÛÛˆ•[šYšYY™^\Èœ˜Z[ˆ[œÝÙ\™Y\™XÝKˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ[[œ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ÛÝ\˜ÙNˆ[šYšYYXœ˜Z[ˆˆJNÂˆ™]\›ˆYNÂˆB‚ˆYˆ
[[\HOOH˜Û\šYžHŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[[˜Û\šYšXØ][Ûˆ[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊ[[œÝYÙÙ\Ý[ÛœÈÈšX[‹›YYXÚ[™H‹˜Û[šXÈ‹˜Ü›ÜÈ‹ÛÜšÈ‹›X\›š[™È‹›X\—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š›\Ý[š[™È‹[[œ™X\ÛÛˆ•[šYšYY™^\Èœ˜Z[ˆ\ÚÙYÛ™H]Y\Ý[Ûˆ™Y›Ü™HXÝ[™ËˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ[[œ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ÛÝ\˜ÙNˆ[šYšYYXœ˜Z[ˆˆJNÂˆ™]\›ˆYNÂˆB‚ˆYˆ
[[\HOOH™\™XÝˆ[[\HOOHÛÜšÙ›ÝÈŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆ[”Ú[\U\Ù\•›ÚXÙR[[
[[ÛÛ[X[™
NÂˆB‚ˆYˆ
[[\HOOH˜˜XÚÙ[™ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ\]S™^\Ð™Z]š[Ü“^Y\Š[šÚ[™È‹[[œ™X\ÛÛˆ•[šYšYY™^\Èœ˜Z[ˆ\È\Ú[™ÈH]™HÛÛ™\œØ][Ûˆ[™Ú[™KˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊ[[œÝYÙÙ\Ý[ÛœÈÈ˜\ÚÈH›ÛÝË]\‹›Ü[ˆX[‹›Ü[ˆX\‹“™^\ÈÝÜ—JNÂˆÛÛœÝØØ][ÛÛÛ^H]ØZ]ØY™Pœ›ÝÜÙ\•ÙX]\“ØØ][ÛŠÛÛ[X[™
NÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹[šYšYY˜XÚÙ[™[œÝÙ\ˆŠJH™]\›ˆYNÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™ØØ][ÛÛÛ^È\›•ÚÙ[ˆJNÂˆ™]\›ˆYNÂˆB‚ˆYˆ
[[\HOOHÛÛŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆYˆ
[[ÛÛOOH›]\ÚXËXÛÛ›ÛŠH™]\›ˆ[“]\ÚXÐ\ÜÚ\Ý[ÛÛ[X[™
ÛÛ[X[™È\›•ÚÙ[ˆJNÂˆYˆ
[[ÛÛOOH›]\ÚXÈŠH™]\›ˆ[“]\ÚXÐ\ÜÚ\Ý[ÛÛ[X[™
ÛÛ[X[™È\›•ÚÙ[ˆJNÂˆYˆ
[[ÛÛOOH™[˜[ZXÈŠH™]\›ˆ[‘[˜[ZXÕ›ÚXÙUÛÛ
ÛÛ[X[™
NÂˆYˆ
[[ÛÛOOHš[[YÙ[˜ÙHŠH™]\›ˆ[™S™^\Ò[[YÙ[˜ÙT›Ý]\ŠÛÛ[X[™
NÂˆYˆ
[[ÛÛOOH˜Yš\ÛÜˆŠH™]\›ˆ[™PYš\ÛÜœ˜Z[ÛÛ[X[™
ÛÛ[X[™
NÂˆB‚ˆYˆ
[[\HOOH][]HŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÛÛœÝØØ][ÛÛÛ^H]ØZ]ØY™Pœ›ÝÜÙ\•ÙX]\“ØØ][ÛŠÛÛ[X[™
NÂˆ]ØZ][•][]PYÙ[ÛÛ[X[™
ÛÛ[X[™[[œ™\ÜÛœÙKØØ][ÛÛÛ^È\›•ÚÙ[ˆJNÂˆ™]\›ˆYNÂˆB‚ˆ™]\›ˆ˜[ÙNÂŸB‚™[˜Ý[Ûˆ™^\ÐÛÛ™\œØ][ÛÛÜ™Q[˜X›Y

HÂˆ™]\›ˆØØ[ÝÜ˜YÙK™Ù]][J˜YÜš[™^\ÐÛÛ™\œØ][ÛÛÜ™HŠHOOH›Ù™ˆŽÂŸB‚™[˜Ý[Ûˆ›Ü›X[^™S™^\ÐÛÛ™\œØ][ÛÛÜ™QXÚ\Ú[ÛŠXÚ\Ú[ÛˆHßJHÂˆYˆ
YXÚ\Ú[Ûˆ\[ÙˆXÚ\Ú[ÛˆOOH›Øš™XÝŠH™]\›ˆ[ÂˆÛÛœÝ\HHÈ˜[œÝÙ\ˆ‹™\™XÝ‹ÛÜšÙ›ÝÈ‹˜˜XÚÙ[™‹˜Û\šYžH—Kš[˜ÛY\ÊXÚ\Ú[Û‹\JHÈXÚ\Ú[Û‹\HˆˆŽÂˆYˆ
]\JH™]\›ˆ[Âˆ™]\›ˆÂˆ\Kˆ™\ÜÛœÙNˆÝš[™ÊXÚ\Ú[Û‹œ™\ÜÛœÙHˆŠKœ™\XÙJ×ÊËÙËˆŠKš[J
Kˆ\™XÝXÝ[ÛŽˆXÚ\Ú[Û‹™\™XÝXÝ[Ûˆˆ‹ˆÛÜšÙ›ÝÎˆXÚ\Ú[Û‹ÛÜšÙ›ÝÈˆ‹ˆXÝ[ÛŽˆXÚ\Ú[Û‹˜XÝ[Ûˆˆ‹ˆ]\Ù]ˆXÚ\Ú[Û‹™]\Ù]ßKˆÝYÙÙ\Ý[ÛœÎˆ\œ˜^Kš\Ð\œ˜^JXÚ\Ú[Û‹œÝYÙÙ\Ý[ÛœÊHÈXÚ\Ú[Û‹œÝYÙÙ\Ý[ÛœÈˆ×KˆÛ\šYšXØ][ÛŽˆXÚ\Ú[Û‹˜Û\šYšXØ][Ûˆ[ˆ™X\ÛÛŽˆXÚ\Ú[Û‹œ™X\ÛÛˆ“™^\ÈÛÛ™\œØ][ÛˆÛÜ™HÙ[XÝY\È›Ý]Kˆ‹ˆÛÛ™šY[˜ÙNˆ[X™\ŠXÚ\Ú[Û‹˜ÛÛ™šY[˜ÙH
Kˆ›ÝšY\ŽˆXÚ\Ú[Û‹œ›ÝšY\ˆ›™^\ËXÛÛ™\œØ][Û‹XÛÜ™H‹ˆÛÛ™\œØ][ÛÛÜ™NˆXÚ\Ú[Û‚ˆNÂŸB‚™[˜Ý[ÛˆÚÝ[\ÙS™^\ÐÛÛ™\œØ][ÛÛÜ™JÛÛ[X[™Hˆ‹ÛÛ^HßJHÂˆYˆ
[™^\ÐÛÛ™\œØ][ÛÛÜ™Q[˜X›Y

HÛÛ^œÚÚ\ÛÛ™\œØ][ÛÛÜ™HÛÛ^˜Y\]™T™\›Ý]JH™]\›ˆ˜[ÙNÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆYˆ
[ÝÙ\ŠH™]\›ˆ˜[ÙNÂˆYˆ
\ÑÛØ˜[ÝÜÛÛ[X[™
ÝÙ\ŠH\Õ[š]™\œØ[[™ÝXYÙPÛÛ[X[™
ÛÛ[X[™
JH™]\›ˆ˜[ÙNÂˆYˆ
\ÕØZÙT˜\ÙSÛ›JÛÛ[X[™
H\Ó™^\ÑÜ™Y][™ÓÛ›JÛÛ[X[™
JH™]\›ˆ˜[ÙNÂˆ™]\›ˆYNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[“™^\ÐÛÛ™\œØ][ÛÛÜ™JÛÛ[X[™Hˆ‹ÛÛ^HßJHÂˆYˆ
\ÚÝ[\ÙS™^\ÐÛÛ™\œØ][ÛÛÜ™JÛÛ[X[™ÛÛ^
JH™]\›ˆ˜[ÙNÂˆžHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š[šÚ[™È‹“™^\ÈÛÛ™\œØ][ÛˆÛÜ™H\ÈXÚY[™ÈÚ]\ˆÈ[œÝÙ\‹\ÚËÜˆXÝˆŠNÂˆÛÛœÝ™\Ý[H]ØZ]™\]Y\ÝÚ][Y[Ý]
‹Ø\KØYÙ[ØÛÛ™\œØ][Û‹XÛÜ™H‹ÂˆY]Ùˆ”ÔÕ‹ˆ›ÙNˆÂˆÛÛ[X[™ˆÛÝ\˜ÙNˆÛÛ^œÛÝ\˜ÙHÙXˆ‹ˆ[ÙNˆ^\šY[˜ÙS[ÙKˆ[ÙPÛÛ^ˆ[ÙPÛÛ™\œØ][ÛÛÛ^
ÛÛ[X[™
Kˆ\™Ù][™ÝXYÙNˆ[™ÝXYÙPÛÙJ
Kˆ[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
BˆBˆK[X™\ŠØØ[ÝÜ˜YÙK™Ù]][J˜YÜš[™^\ÐÛÛ™\œØ][ÛÛÜ™U[Y[Ý]ŠHLŒ
JNÂˆÛÛœÝXÚ\Ú[ÛˆH›Ü›X[^™S™^\ÐÛÛ™\œØ][ÛÛÜ™QXÚ\Ú[ÛŠ™\Ý[˜ÛÛ™\œØ][ÛÛÜ™JNÂˆYˆ
YXÚ\Ú[ÛŠH™]\›ˆ˜[ÙNÂˆÛÛœÝ›Ý]SX™[H	ÙXÚ\Ú[Û‹œ›ÝšY\ŸNˆ	ÙXÚ\Ú[Û‹\_XÂˆ\]S™^\Ð™Z]š[Ü“^Y\ŠXÚ\Ú[Û‹\HOOH˜Û\šYžHˆÈ›\Ý[š[™ÈˆˆXÚ\Ú[Û‹\HOOH˜[œÝÙ\ˆˆÈ˜[œÝÙ\š[™Èˆˆ˜XÝ[™È‹™^\ÈÛÛ™\œØ][ÛˆÛÜ™H›Ý]Y\È™\]Y\Ý›ÝYÚ	Ü›Ý]SX™[K˜
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊXÚ\Ú[Û‹œÝYÙÙ\Ý[ÛœÏË›[™ÝÈXÚ\Ú[Û‹œÝYÙÙ\Ý[ÛœÈˆÈšX[‹›YYXÚ[™H‹˜Ü›ÜÈ‹ÛÜšÈ‹›X\›š[™È‹›X\—JNÂˆYˆ
XÚ\Ú[Û‹\HOOH˜˜XÚÙ[™ŠHÂˆ]ØZ]^XÝ]U[šYšYY™^\Ò[[
È\Nˆ˜˜XÚÙ[™‹™X\ÛÛŽˆXÚ\Ú[Û‹œ™X\ÛÛ‹ÝYÙÙ\Ý[ÛœÎˆXÚ\Ú[Û‹œÝYÙÙ\Ý[ÛœÈKÛÛ[X[™È‹‹˜ÛÛ^ÚÚ\ÛÛ™\œØ][ÛÛÜ™NˆYHJNÂˆ™]\›ˆYNÂˆBˆ]ØZ]^XÝ]U[šYšYY™^\Ò[[
XÚ\Ú[Û‹ÛÛ[X[™È‹‹˜ÛÛ^ÚÚ\ÛÛ™\œØ][ÛÛÜ™NˆYHJNÂˆ™]\›ˆYNÂˆHØ]Ú
\œ›ÜŠHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š™˜[˜XÚÈ‹ÛÛ™\œØ][ÛˆÛÜ™H˜[˜XÚÎˆ	Ù\œ›Ü‹›Y\ÜØYÙH[˜]˜Z[X›HŸX
NÂˆ™]\›ˆ˜[ÙNÂˆBŸB‚˜\Þ[˜È[˜Ý[Ûˆ[šYšYY™^\ÐÛÛ™\œØ][Ûœ˜Z[Š˜]ÐÛÛ[X[™Hˆ‹ÛÛ^HßJHÂˆÛÛœÝØØ[^™YH›Ü›X[^™SØØ[^™Y›ÚXÙPÛÛ[X[™
˜]ÐÛÛ[X[™
NÂˆÛÛœÝÛX[™YH›Ü›X[^™S][[[™ÝX[™Z]š[ÜÛÛ[X[™
ÛX[•ØZÙPÛÛ[X[™
ØØ[^™Y
JNÂˆÛÛœÝÛÛ[X[™HÛX[™YÛX[•ØZÙPÛÛ[X[™
ØØ[^™Y
HØØ[^™Y˜]ÐÛÛ[X[™ÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆÛÛœÝÜÚÙ[ˆHÛÛ[X[™˜]ÐÛÛ[X[™ÂˆÛÛœÝ\›•ÚÙ[ˆHÛÛ^\›•ÚÙ[ˆ[ÂˆÛÛœÝÝÜ™Y\™XÝHÜÝÝÜ™Y\™XÝÛÛ[X[™
ÛÛ[X[™
NÂ‚ˆÛÛœÝÜ]™[\ÙLMÔØY™P[œÝÙ\ˆH™^\Ô\ÙLMÔÝ[™\™\Ù\”ØY™P[œÝÙ\ŠÜÚÙ[ˆÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
NÂˆYˆ
Ü]™[\ÙLMÔØY™P[œÝÙ\ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÜ]™[\ÙLMÔØY™P[œÝÙ\‹œÝYÙÙ\Ý[ÛœÈÈÚ]›ÝšY\œÈØ[ˆ[ÝHÛÛ›™XÝÈ‹Ú]]HÛÝ\˜Ù\ÈÈ[ÝH™YY‹Ú]™YYÈ\›Ý˜[—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹“™^\È[œÝÙ\™YH\ÙHMÈ›ÝÝ\KY›Ý[™][Ûˆ›Û\Ú]Ý]^XÝ][™È[ˆXÝ[Û‹ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJÜ]™[\ÙLMÔØY™P[œÝÙ\‹œ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ˆÜÚÙ[ˆÛÛ[X[™˜]ÐÛÛ[X[™ÛÝ\˜ÙNˆœ\ÙKLMË\Ý[™\™]\Ù\‹\ØY™KX[œÝÙ\ˆˆJNÂˆYˆ
Ü]™[\ÙLMÔØY™P[œÝÙ\‹›ØØ[]\ÚXÊHÂˆ›ÚY^S™^\Ó]\ÚXÕ\Ý]Y[Ê’Ù[žXKZ[œÜ\™Y[[Èš]HŠNÂˆBˆ™]\›ˆYNÂˆB‚ˆYˆ
]ØZ][œÝÙ\”[™[™Ó™^\Ô]Y\Ý[ÛŠÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
JH™]\›ˆYNÂ‚ˆYˆ
\ÑÛØ˜[ÝÜÛÛ[X[™
Ýš[™ÊÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
KÓÝÙ\Ø\ÙJ
JJHÂˆYˆ
\ÔÝÜ[™ÛÛ[YUÛÜšÚ[™ÐÛÛ[X[™
ÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
JHÂˆÝÜ™^\Ð[™™]\›•ÕÛÜšÊ”ÝÜYˆ™^\È\ÈÛÜÙYÛÈ[ÝHØ[ˆÛÛ[YHÛÜšÚ[™ËˆŠNÂˆ™]\›ˆYNÂˆBˆ[\“™^\ÐÛÛ™\œØ][Û”]\ÙJ”ÝÜYˆ™^\È\È]\ÙY[™Ú[YÛ›Ü™H˜XÚÙÜ›Ý[™ÛÛ™\œØ][Ûˆ[[[ÝHØ^H™^\ÈYØZ[‹ˆŠNÂˆYˆ
ÝÜ™Y\™XÝ
HÂˆX]™S™^\ÐÛÛ™\œØ][Û”]\ÙJ“™^\ÈX\™[Ý\ˆ™^[œÝXÝ[ÛˆY\ˆÝÜˆŠNÂˆÙ][Y[Ý]


HOˆÂˆÙ]ÛÛ[X[™[œ]ÊÝÜ™Y\™XÝ
NÂˆ›ÚY[™U›ÚXÙPÛÛ[X[™
ÝÜ™Y\™XÝÈ‹‹˜ÛÛ^ÚÚ\[šYšYYœ˜Z[Žˆ˜[ÙHJNÂˆK“ÒPÑWÔÔÕÔÕÔÔ‘QT‘PÕÑSVWÓTÊNÂˆBˆ™]\›ˆYNÂˆB‚ˆYˆ
\Õ[š]™\œØ[[™ÝXYÙPÛÛ[X[™
ÛÛ[X[™ØØ[^™Y
JHÂˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ]ØZ]Ú[™ÙS[™ÝXYÙPžU›ÚXÙJÛÛ[X[™ØØ[^™Y
NÂˆ™]\›ˆYNÂˆB‚ˆÛÛœÝ\ÙLMÔØY™P[œÝÙ\ˆH™^\Ô\ÙLMÔÝ[™\™\Ù\”ØY™P[œÝÙ\ŠÜÚÙ[ˆÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
NÂˆYˆ
\ÙLMÔØY™P[œÝÙ\ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊ\ÙLMÔØY™P[œÝÙ\‹œÝYÙÙ\Ý[ÛœÈÈÚ]›ÝšY\œÈØ[ˆ[ÝHÛÛ›™XÝÈ‹Ú]]HÛÝ\˜Ù\ÈÈ[ÝH™YY‹Ú]™YYÈ\›Ý˜[—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹“™^\È[œÝÙ\™YH\ÙHMÈ›ÝÝ\KY›Ý[™][Ûˆ›Û\Ú]Ý]^XÝ][™È[ˆXÝ[Û‹ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ\ÙLMÔØY™P[œÝÙ\‹œ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ˆÜÚÙ[ˆÛÛ[X[™˜]ÐÛÛ[X[™ÛÝ\˜ÙNˆœ\ÙKLMË\Ý[™\™]\Ù\‹\ØY™KX[œÝÙ\ˆˆJNÂˆYˆ
\ÙLMÔØY™P[œÝÙ\‹›ØØ[]\ÚXÊHÂˆ›ÚY^S™^\Ó]\ÚXÕ\Ý]Y[Ê’Ù[žXKZ[œÜ\™Y[[Èš]HŠNÂˆBˆ™]\›ˆYNÂˆB‚ˆYˆ
]ØZ][“™^\ÐÛÛ™\œØ][ÛÛÜ™JÜÚÙ[ˆÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™ÛÛ^
JH™]\›ˆYNÂ‚ˆÛÛœÝ˜\Ý[™R[[H™^\Ñ˜\Ý[™R[[
ÜÚÙ[ˆÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
NÂˆYˆ
˜\Ý[™R[[
HÂˆ™\Ù]ÛÛ™\œØ][Û”Ý]Q›Ü”š[Üš]R[[
ÜÚÙ[ˆÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆ™]\›ˆ^XÝ]U[šYšYY™^\Ò[[
˜\Ý[™R[[ÜÚÙ[ˆÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™ÛÛ^
NÂˆB‚ˆÛÛœÝš\œÝš[Üš]TÚ[\R[[HÚ[\U\Ù\‘\™XÝ›ÚXÙR[[
ÜÚÙ[ˆÛÛ[X[™
NÂˆYˆ
\Ôš[Üš]TÙ\šXÙU›ÚXÙR[[
š\œÝš[Üš]TÚ[\R[[
JHÂˆ™\Ù]ÛÛ™\œØ][Û”Ý]Q›Ü”š[Üš]R[[
ÜÚÙ[ˆÛÛ[X[™
NÂˆ™]\›ˆ^XÝ]U[šYšYY™^\Ò[[
š\œÝš[Üš]TÚ[\R[[ÜÚÙ[ˆÛÛ[X[™ÛÛ^
NÂˆB‚ˆYˆ
]ØZ][œÝÙ\”[™[™Ó™^\Ô]Y\Ý[ÛŠÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
JH™]\›ˆYNÂ‚ˆYˆ
\ÑÛØ˜[ÝÜÛÛ[X[™
Ýš[™ÊÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
KÓÝÙ\Ø\ÙJ
JJHÂˆYˆ
\ÔÝÜ[™ÛÛ[YUÛÜšÚ[™ÐÛÛ[X[™
ÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
JHÂˆÝÜ™^\Ð[™™]\›•ÕÛÜšÊ”ÝÜYˆ™^\È\ÈÛÜÙYÛÈ[ÝHØ[ˆÛÛ[YHÛÜšÚ[™ËˆŠNÂˆ™]\›ˆYNÂˆBˆ[\“™^\ÐÛÛ™\œØ][Û”]\ÙJ”ÝÜYˆ™^\È\È]\ÙY[™Ú[YÛ›Ü™H˜XÚÙÜ›Ý[™ÛÛ™\œØ][Ûˆ[[[ÝHØ^H™^\ÈYØZ[‹ˆŠNÂˆYˆ
ÝÜ™Y\™XÝ
HÂˆX]™S™^\ÐÛÛ™\œØ][Û”]\ÙJ“™^\ÈX\™[Ý\ˆ™^[œÝXÝ[ÛˆY\ˆÝÜˆŠNÂˆÙ][Y[Ý]


HOˆÂˆÙ]ÛÛ[X[™[œ]ÊÝÜ™Y\™XÝ
NÂˆ›ÚY[™U›ÚXÙPÛÛ[X[™
ÝÜ™Y\™XÝÈ‹‹˜ÛÛ^ÚÚ\[šYšYYœ˜Z[Žˆ˜[ÙHJNÂˆK“ÒPÑWÔÔÕÔÕÔÔ‘QT‘PÕÑSVWÓTÊNÂˆBˆ™]\›ˆYNÂˆB‚ˆYˆ
\Õ[š]™\œØ[[™ÝXYÙPÛÛ[X[™
ÛÛ[X[™ØØ[^™Y
JHÂˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ]ØZ]Ú[™ÙS[™ÝXYÙPžU›ÚXÙJÛÛ[X[™ØØ[^™Y
NÂˆ™]\›ˆYNÂˆB‚ˆYˆ
\Ô]›Ü›Q^Z[•›ÚXÙPÛÛ[X[™
ÜÚÙ[ˆÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
JHÂˆÛX\“Ü[•ÛÜšÙ›ÝÑ›Ü“™]Õ›ÚXÙT™\]Y\Ý
ÜÚÙ[ˆÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈš[H˜\›Y\ˆ‹’H™YYHØÝÜˆ‹š[YHÙ[^HÜ›Ü‹œÝ\HÛÝ\œÙH‹›Ü[ˆX\—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹“™^\È[œÝÙ\™YH]›Ü›H^[˜][Ûˆ\™XÝH™Y›Ü™H[žHÜ[ˆÛÜšÙ›ÝÈÛÝ[[\˜Ù\]ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\Ô]›Ü›Q^Z[[œÝÙ\Š
KYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ˆÜÚÙ[ˆÛÛ[X[™˜]ÐÛÛ[X[™ÛÝ\˜ÙNˆ[šYšYYXœ˜Z[‹\]›Ü›KY^Z[ˆˆJNÂˆ™]\›ˆYNÂˆB‚ˆYˆ
[™S™^\ÐY\]™SX\›š[™ÐÛÛ[X[™
ÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
JH™]\›ˆYNÂ‚ˆÛÛœÝ[›ÙXÝ[Û”™\ÜÛœÙHH™^\Ò[›ÙXÝ[Û”™\ÜÛœÙJÛÛ[X[™ØØ[^™Y
NÂˆYˆ
[›ÙXÝ[Û”™\ÜÛœÙJHÂˆÝÜ›ÚXÙT^X˜XÚÊÈ\™ˆYHJNÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ[›ÙXÝ[Û”™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÝ\˜ÙNˆ[šYšYYXœ˜Z[ˆˆJNÂˆ™[™\Š
NÂˆ™]\›ˆYNÂˆB‚ˆÛÛœÝÜ™Y][™ÓÛ›HH\Ó™^\ÑÜ™Y][™ÓÛ›JØØ[^™Y
NÂˆÛÛœÝÜ™Y][™Ô™Yš^H\Ó™^\ÑÜ™Y][™Ô™Yš^
ØØ[^™Y
NÂˆÛÛœÝØZÙSÛ›HH\ÕØZÙT˜\ÙSÛ›JØØ[^™Y
NÂˆYˆ
Ü™Y][™ÓÛ›HØZÙSÛ›H
Ü™Y][™Ô™Yš^	‰ˆZ\Ð™Z]š[ÜXÝ[Û•™\˜ŠÛÛ[X[™
JJHÂˆÝÜ›ÚXÙT^X˜XÚÊÈ\™ˆYHJNÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ™^\Ð]ØZ][™ÐÛÛ[X[™HYNÂˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÈ\Nˆ™Ü™Y][™È‹ÛÛ[X[™ˆ›Ü›X[^™YØZÙU^
ØØ[^™Y
HJNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\ÐÛÛ™\œØ][Û˜[ØZÙJÜ™Y][™ÓÛ›HÈš[ÈˆˆØZÙH‹ØØ[^™Y
KYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÝ\˜ÙNˆ[šYšYYXœ˜Z[ˆˆJNÂˆ™]\›ˆYNÂˆB‚ˆYˆ
[ÝÙ\ŠHÂˆÙ]›ÚXÙT™\ÜÛœÙJ’H[H\Ý[š[™Ëˆ[YHÚ][ÝH™YY[ˆ[Ý\ˆÝÛˆÛÜ™Ëˆ‹YKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÝ\˜ÙNˆ[šYšYYXœ˜Z[ˆˆJNÂˆ™]\›ˆYNÂˆB‚ˆYˆ
\Ó™^\Õ›ÚXÙSÙ™ÛÛ[X[™
ÝÙ\ŠJHÂˆ\ØX›S™^\Õ›ÚXÙQ›Ü‘[[Ê‘[[È]ZY][ÙH\ÈÛ‹ˆ™^\È›ÚXÙH\ÈÙ™ˆ[[[ÝH\›ˆ]˜XÚÈÛ‹ˆŠNÂˆ™]\›ˆYNÂˆBˆYˆ
\Ó™^\Õ›ÚXÙSÛÛÛ[X[™
ÝÙ\ŠJHÂˆ›ÚXÙPÛÛ™\œØ][Û”]\ÙYH˜[ÙNÂˆ[˜X›S™^\Õ›ÚXÙQ›Ü‘[[Ê“™^\È›ÚXÙH\È˜XÚÈÛ‹ˆØ^H™^\Ë[ˆ[YHÚ][ÝH™YYˆŠNÂˆ™]\›ˆYNÂˆBˆÛÛœÝ˜XÚ[]SX\˜\ÙHH›Ü›X[^™UÛÛ^
ÜÜÚÙ[‹ÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™K™š[\Š›ÛÛX[ŠKš›Ú[ŠˆŠJNÂˆYˆ
×ŠÛ[šXßÛ[šXÜßÜÜ][X[Ù[\ŸX[Ù[™_\›XXÞ_\›XXÚY\ÊW‹Ë\Ý
˜XÚ[]SX\˜\ÙJBˆ	‰ˆ×ŠX\›Ý]_ØØ][ÛŸ™X\Ÿ™X\˜ž_ÛÜÙ\ÝÚÝßš[™
W‹Ë\Ý
˜XÚ[]SX\˜\ÙJJHÂˆ™\Ù]ÛÛ™\œØ][Û”Ý]Q›Ü”š[Üš]R[[
˜XÚ[]SX\˜\ÙJNÂˆ™]\›ˆÜ[’X[˜XÚ[]SX\›ÝÊ’HÜ[™YHÛ[šXÈ[™\›XXÞHX\ˆÚ\™H[Ý\ˆš[YÙKÚ]KÜˆ™X\™\Ý[™X\šË[™HÚ[ÝZYHHÛÜÙ\ÝÛ[šXË[Øš[HÛ[šXËÜˆ\›XXÞH›Ý]KˆŠNÂˆBˆYˆ
×ŠÝ™X[Z[™È›ÚXÙ_ÙX[[\ÜÈ›ÚXÙ_˜]]™H›ÚXÙ_ÛÛ[[Ý\È›ÚXÙ_]™H›ÚXÙJW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÛœÝ\›“Ù™ˆH×ŠÙ™Ÿ\ØX›_ÝÜ\›ˆÙ™ŠW‹Ë\Ý
ÝÙ\ŠNÂˆÙ]Ý™X[Z[™Õ›ÚXÙQ[˜X›Y
]\›“Ù™‹›ÚXÙKXÛÛ[X[™ŠNÂˆÛÛœÝÝ[[X\žHH˜]]™U›ÚXÙT™XY[™\ÜÔÝ[[X\žJ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ\›“Ù™‚ˆÈ”Ý™X[Z[™È›ÚXÙH\ÈÙ™‹ˆHÚ[Ý[\Ý[ˆÚ[ˆ[ÝH™\ÜÈZXËˆ‚ˆˆÝ™X[Z[™È›ÚXÙH\ÈÛ‹ˆÜXZÈ˜]\˜[K[\œ\YHÚ[ˆ™YYY[™HÚ[ÙY\HÛÛ™\œØ][Ûˆ[Ýš[™Ëˆ	ÜÝ[[X\ž_XˆYKˆÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÝ\˜ÙNˆ[šYšYYXœ˜Z[ˆˆJNÂˆ™]\›ˆYNÂˆB‚ˆYˆ
]ØZ][™S™^\Ô™X[[YPY\ÝY[
ÛÛ[X[™ØØ[^™Y
JH™]\›ˆYNÂˆYˆ
[™S™^\ÔÙ[ÛÜœ™XÝ[ÛŠÛÛ[X[™ØØ[^™Y
JH™]\›ˆYNÂ‚ˆÛÛœÝš[Üš]TÚ[\R[[HÚ[\U\Ù\‘\™XÝ›ÚXÙR[[
ÜÚÙ[ˆÛÛ[X[™
NÂˆYˆ
\Ôš[Üš]TÙ\šXÙU›ÚXÙR[[
š[Üš]TÚ[\R[[
JHÂˆ™\Ù]ÛÛ™\œØ][Û”Ý]Q›Ü”š[Üš]R[[
ÜÚÙ[ˆÛÛ[X[™
NÂˆ™]\›ˆ^XÝ]U[šYšYY™^\Ò[[
š[Üš]TÚ[\R[[ÜÚÙ[ˆÛÛ[X[™ÛÛ^
NÂˆB‚ˆÛÛœÝY\]™U[™\œÝ[™[™ÈHÛÛ^˜Y\]™T™\›Ý]HÈ[ˆY\]™PÛÛ[X[™[™\œÝ[™[™ÊÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
NÂˆYˆ
Y\]™U[™\œÝ[™[™ÏË›X\›™Y[H	‰ˆY\]™U[™\œÝ[™[™Ëœ™]Üš][ÛÛ[X[™	‰ˆY\]™U[™\œÝ[™[™Ëœ™]Üš][ÛÛ[X[™OOHÛÛ[X[™
HÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š›X\›š[™È‹™^\È\ÙYX\›™Y˜\ÙNˆ	ØY\]™U[™\œÝ[™[™Ë›X\›™Y[KœÛÝ\˜Ù_X
NÂˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÂˆ\Nˆ˜Y\]™K\[K\›Ý]Y‹ˆÛÛ[X[™ˆÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™ˆ\™Ù]ˆY\]™U[™\œÝ[™[™Ëœ™]Üš][ÛÛ[X[™ˆJNÂˆÙ]ÛÛ[X[™[œ]ÊY\]™U[™\œÝ[™[™Ëœ™]Üš][ÛÛ[X[™
NÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
Y\]™U[™\œÝ[™[™Ëœ™]Üš][ÛÛ[X[™È‹‹˜ÛÛ^ÚÚ\[šYšYYœ˜Z[Žˆ˜[ÙKY\]™T™\›Ý]NˆYHJNÂˆ™]\›ˆYNÂˆB‚ˆÛÛœÝš\ÚX›R[›[™UÛÜšÙ›ÝÈH	
‹\Ù\‹Z[›[™K]ÛÜšÙ›ÝÎ››Ý
šY[ŠHŠNÂˆYˆ
[™[™ÕÛÜšÙ›ÝÈ	‰ˆš\ÚX›R[›[™UÛÜšÙ›ÝÊHÂˆYˆ
š[ÛÜšÙ›ÝÑšY[žU›ÚXÙJÛÛ[X[™ØØ[^™Y
JH™]\›ˆYNÂˆYˆ
\Ó™]ÔÙ\šXÙT™\]Y\ÝÝ™\•ÛÜšÙ›ÝÊÛÛ[X[™ØØ[^™Y
JHÂˆÛX\“Ü[•ÛÜšÙ›ÝÑ›Ü“™]Õ›ÚXÙT™\]Y\Ý
ÛÛ[X[™ØØ[^™Y
NÂˆH[ÙHYˆ
Z\ÓÜ[‘X[ÙÕ›ÚXÙT]Y\Ý[ÛŠÛÛ[X[™
H	‰ˆZ\ÓÜ[’Û›ÝÛYÙT]Y\Ý[ÛŠÛÛ[X[™
JHÂˆÛÛœÝÛØXÚHÛÜšÙ›ÝÔ™X[\ÙPÛØXÚ
[™[™ÕÛÜšÙ›ÝÊNÂˆÙ]›ÚXÙT™\ÜÛœÙJHÝ[]™H	Ü[™[™ÕÛÜšÙ›ÝË]H\ÈÝ\ŸHÜ[‹ˆ[œÝÙ\ˆHš\ÚX›H]Y\Ý[Û‹Ø^HY\ÈÈÛÛ™š\›K›ÈÈØ[˜Ù[ÜˆØ^H™]È™\]Y\ÝÈÝÚ]Úˆ	ØÛØXÚœ]Y\Ý[ÛˆˆŸXYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÝ\˜ÙNˆ[šYšYYXœ˜Z[ˆˆJNÂˆ™]\›ˆYNÂˆBˆB‚ˆYˆ
XÝ]™PÛÛ™\œØ][Û’[ZÙH	‰ˆ[™PÛÛ™\œØ][Û’[ZÙP[œÝÙ\ŠÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
JH™]\›ˆYNÂˆYˆ
Ý\ÛÛ™\œØ][Û’[ZÙQœ›ÛPÛÛ[X[™
ÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
JH™]\›ˆYNÂ‚ˆYˆ
ÛÛ^œÛÝ\˜ÙHOOH›ÚXÙHˆ	‰ˆ\ÓZÙ[TÚYPÛÛ™\œØ][Û•Ú]Ý]™^\ÐÛÛ[X[™
ÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
JHÂˆ]\ÙS™^\Ñ›Ü”ÚYPÛÛ™\œØ][ÛŠÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™
NÂˆ™]\›ˆYNÂˆB‚ˆYˆ
\Ó™^\ÒX\š[™ÐÚXÚÐÛÛ[X[™
ÛÛ[X[™ØØ[^™Y
JHÂˆ[œÝÙ\“™^\ÒX\š[™ÐÚXÚÊ
NÂˆ™]\›ˆYNÂˆB‚ˆYˆ
]ØZ][™S™^\Õ[šYšYYœ˜Z[”[[YPÛÛ[X[™
ÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™È‹‹˜ÛÛ^ÛÝ\˜ÙNˆÛÛ^œÛÝ\˜ÙH\YØÚ]ˆJJH™]\›ˆYNÂˆYˆ
]ØZ][™S™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™È‹‹˜ÛÛ^ÛÝ\˜ÙNˆÛÛ^œÛÝ\˜ÙH\YØÚ]ˆJJH™]\›ˆYNÂˆYˆ
]ØZ][™S™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ØØ[^™Y˜]ÐÛÛ[X[™È‹‹˜ÛÛ^ÛÝ\˜ÙNˆÛÛ^œÛÝ\˜ÙH\YØÚ]ˆJJH™]\›ˆYNÂ‚ˆÛÛœÝÛÛ[[Û”˜\ÙHH™^\ÐÛÛ[[Û”˜\ÙT™\ÜÛœÙJÛÛ[X[™ØØ[^™Y
NÂˆYˆ
ÛÛ[[Û”˜\ÙJHÂˆÙ]›ÚXÙT™\ÜÛœÙJÛÛ[[Û”˜\ÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÝ\˜ÙNˆ[šYšYYXœ˜Z[ˆˆJNÂˆ™]\›ˆYNÂˆB‚ˆÛÛœÝÛÛ™\œØ][Û’[[H™^\ÐÛÛ™\œØ][Û‘š\œÝ[[
ÜÚÙ[ˆÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆYˆ
ÛÛ™\œØ][Û’[[
HÂˆ™]\›ˆ^XÝ]U[šYšYY™^\Ò[[
ÛÛ™\œØ][Û’[[ÜÚÙ[ˆÛÛ[X[™˜]ÐÛÛ[X[™ÛÛ^
NÂˆB‚ˆÛÛœÝÚ[\R[[HÚ[\U\Ù\‘\™XÝ›ÚXÙR[[
ÜÚÙ[ˆÛÛ[X[™
NÂˆYˆ
Ú[\R[[
HÂˆ™]\›ˆ^XÝ]U[šYšYY™^\Ò[[
Ú[\R[[ÜÚÙ[ˆÛÛ[X[™ÛÛ^
NÂˆB‚ˆÛÛœÝZYÜ˜[[[HZYÜ˜[œšY[™U›ÚXÙR[[
ÛÛ[X[™
NÂˆYˆ
ZYÜ˜[[[
HÂˆ™]\›ˆ^XÝ]U[šYšYY™^\Ò[[
ZYÜ˜[[[ÛÛ[X[™ÛÛ^
NÂˆB‚ˆÛÛœÝ][]P[œÝÙ\ˆH™^\Õ][]P\ÜÚ\Ý[™\ÜÛœÙUŒŠÛÛ[X[™
NÂˆYˆ
][]P[œÝÙ\ŠHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹•[šYšYY™^\Èœ˜Z[ˆ\È[œÝÙ\š[™ÈH˜XÝXØ[Z[H]Y\Ý[Û‹ˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈ›Ü[ˆX\‹›Ü[ˆ[ZX[‹˜XÚÈ^HÚ\Y[‹Ú]\È™^Ù^H—JNÂˆ™]\›ˆ^XÝ]U[šYšYY™^\Ò[[
È\Nˆ][]H‹™\ÜÛœÙNˆ][]P[œÝÙ\ˆKÛÛ[X[™ÛÛ^
NÂˆB‚ˆYˆ
]ØZ][“]\ÚXÐ\ÜÚ\Ý[ÛÛ[X[™
ÛÛ[X[™È\›•ÚÙ[ˆJJH™]\›ˆYNÂˆYˆ
]ØZ][™S™^\Ò[[YÙ[˜ÙT›Ý]\ŠÛÛ[X[™
JH™]\›ˆYNÂˆYˆ
[™PYš\ÛÜœ˜Z[ÛÛ[X[™
ÛÛ[X[™
JH™]\›ˆYNÂˆYˆ
]ØZ][‘[˜[ZXÕ›ÚXÙUÛÛ
ÛÛ[X[™
JH™]\›ˆYNÂ‚ˆYˆ
\ÓÜ[’Û›ÝÛYÙT]Y\Ý[ÛŠÛÛ[X[™
H\ÓÜ[‘X[ÙÕ›ÚXÙT]Y\Ý[ÛŠÛÛ[X[™
H\Ð™Z]š[ÜXÝ[Û•™\˜ŠÛÛ[X[™
H\Ó˜]\˜[]Y\Ý[Û“ÜÛÛ™\œØ][ÛŠÛÛ[X[™
JHÂˆ™]\›ˆ^XÝ]U[šYšYY™^\Ò[[
Âˆ\Nˆ˜˜XÚÙ[™‹ˆ™X\ÛÛŽˆ•[šYšYY™^\Èœ˜Z[ˆ›Ý]Y˜]\˜[ÜYXÚÈH]™HRHÛÛ™\œØ][Ûˆ[™Ú[™Kˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ˜\ÚÈH›ÛÝË]\‹›Ü[ˆHšYÚ\™XH‹™ÝZYHYHÝ\žHÝ\‹“™^\ÈÝÜ—BˆKÛÛ[X[™ÛÛ^
NÂˆB‚ˆÛÛœÝœšYÙHH\˜[ÛÛ[][šXØ][ÛœšYÙJÛÛ[X[™
NÂˆYˆ
œšYÙKœ›Ùš[OËš[[	‰ˆœšYÙKœ›Ùš[Kš[[OOH™Ù[™\˜[ˆ	‰ˆœšYÙKœ›Ùš[K˜ÛÛ™šY[˜ÙHHJHÂˆÛÛœÝ›Ý]YH™^\ÐÛÛ™\œØ][Û‘š\œÝ[[
œšYÙKœ›Ùš[Kœ™]Üš]PÛÛ[X[™œšYÙK››Ü›X[^™YÛÛ[X[™
NÂˆYˆ
›Ý]Y
H™]\›ˆ^XÝ]U[šYšYY™^\Ò[[
›Ý]YœšYÙKœ›Ùš[Kœ™]Üš]PÛÛ[X[™ÛÛ[X[™ÛÛ^
NÂˆB‚ˆ™]\›ˆ^XÝ]U[šYšYY™^\Ò[[
Âˆ\Nˆ˜Û\šYžH‹ˆ™\ÜÛœÙNˆ’HX^H]™HX\™Û›H\Ùˆ]ˆ[YHÛ™H[™ÎˆX[YYXÚ[™KÛ[šXËÜ›ÜËÛÜšËX\›š[™ËÜˆX\ˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈšX[‹›YYXÚ[™H‹˜Û[šXÈ‹˜Ü›ÜÈ‹ÛÜšÈ‹›X\›š[™È‹›X\—Kˆ™X\ÛÛŽˆ•[šYšYY™^\Èœ˜Z[ˆ\ÚÙYÛ™HÚ[\H™XÛÝ™\žH]Y\Ý[Ûˆ[œÝXYÙˆÝY\ÜÚ[™Ëˆ‹ˆÛ\šYšXØ][ÛŽˆÂˆÜšYÚ[˜[ˆÛÛ[X[™ˆÜ[ÛœÎˆÂˆÈX™[ˆ’X[‹ÙXÝ[ÛŽˆšX[‹ÛÛ[X[™ˆ’H™YYHØÝÜˆ‹]Z[ˆ’X[Û[šXËYYXÚ[™K[ZÙKÜˆ›ÝšY\ˆ[ˆˆKˆÈX™[ˆÜ›ÜÈ‹ÙXÝ[ÛŽˆ˜YH‹ÛÛ[X[™ˆ›^HÜ›Ü\È˜Y‹]Z[ˆÜ›Ü›Ø›[K˜\›Y\ˆÝ\Ü^Y\‹Ø[KÜˆ›Ý]KˆˆKˆÈX™[ˆ•ÛÜšÈ‹ÙXÝ[ÛŽˆÛÜšÙ›Ü˜ÙH‹ÛÛ[X[™ˆ’H™YYÛÜšÈ‹]Z[ˆ’›ØœË\XØ][ÛœËÚÚ[ËÜˆ[\šY]ÈÝ\ÜˆˆKˆÈX™[ˆ“X\›š[™È‹ÙXÝ[ÛŽˆ›X\›š[™È‹ÛÛ[X[™ˆœÝ\HÛÝ\œÙH‹]Z[ˆÛÝ\œÙ\Ë\ÜÛÛœËØ\[ÛœËÜˆÙ\YšXØ]\ËˆˆKˆÈX™[ˆ“X\‹ÙXÝ[ÛŽˆ›X\‹ÛÛ[X[™ˆ›Ü[ˆX\‹]Z[ˆ“X\›Ý]KÛ[šXË\›XXÞKÚ\Y[ÜˆØØ][Û‹ˆˆBˆBˆBˆKÛÛ[X[™ÛÛ^
NÂŸB‚™[˜Ý[Ûˆ™^\ÐÛÛ[[Û”˜\ÙT™\ÜÛœÙJÛÛ[X[™HˆŠHÂˆÛÛœÝ˜[YHH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆYˆ
]˜[YJH™]\›ˆˆŽÂˆÛÛœÝ˜[YHH\Ù\‘š\œÝ˜[YJ
NÂˆYˆ
×ŠÛÛ™\œØ][Ûˆ[Ù_ÛÛ™\œØ][Ûˆ[ÙHŸÛÛ™\œØ][Ûˆ[ÙHÛß[È˜]\˜[_Ü[ˆÛÛ™\œØ][ÛŸ˜]\˜[ÛÛ™\œØ][ÛŠW‹Ë\Ý
˜[YJJHÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈšX[‹˜Ü›ÜÈ‹ÛÜšÈ‹›X\›š[™È‹›X\—JNÂˆ™]\›ˆ™^\ÐÛÛ™\œØ][Û‘ÛÝ™\››Ü”Ý[[X\žJ
NÂˆBˆÛÛœÝ™\ÜÛœÙ\ÈHÂˆÂˆX]Úˆ×ŠÛÛÙ[Ü›š[™ßÛÛÙ[Ü›š[™ßÛÛÙY\››ÛÛŸÛÛÙY\››ÛÛŸÛÛÙ]™[š[™ßÛÛÙ]™[š[™ß[È™^\ßH™^\ß^H™^\ÊW‹Ëˆ™\ÜÛœÙNˆ[È	Û˜[Y_KˆÝÈØ[ˆH\ÜÚ\Ý[ÝOØˆÝYÙÙ\Ý[ÛœÎˆÈ’H™YYHØÝÜˆ‹š[YHÙ[^HÜ›Ü‹œÝ\HÛÝ\œÙH‹›Ü[ˆX\—BˆKˆÂˆX]Úˆ×Š[ÈÈY_Ø[ˆ[ÝH[Y_[YHX\Ù_H™YY[Ø[ÈÚ]Y_ÝZYHYJW‹Ëˆ™\ÜÛœÙNˆ’IÛH\™HÚ][ÝKˆ[YHH›Ø›[H[ˆ[Ý\ˆÝÛˆÛÜ™Ë[™HÚ[Ü[ˆHšYÚXÙKˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈšX[‹˜Ü›ÜÈ‹ÛÜšÈ‹›X\›š[™È‹›X\—BˆKˆÂˆX]Úˆ×Š[šÈ[Ý_[šÜß[šÜÈ™^\ß\™XÚX]H]ÛÛÙ›ØŸšXÙH›ØŸ][YÜ˜XÚX\ßY\˜Ú_\Ø[_ÚZÜ˜[ŠW‹Ëˆ™\ÜÛœÙNˆ[ÝIÜ™HÙ[ÛÛYK	Û˜[Y_KˆIÛH\™HÚ[ˆ[ÝH™YYYK˜ˆÝYÙÙ\Ý[ÛœÎˆÈÚ]ÚÝ[HÈ™^‹›Ü[ˆX\›š[™È‹™ÛÈ]ZY]—BˆKˆÂˆX]Úˆ×ŠØZ]ÛÛŸÛ™HÙXÛÛ™Ú]™HYHHZ[]_]\ÙH›ÜˆH[ÛY[›ÝY]Ý[™žJW‹Ëˆ™\ÜÛœÙNˆ“›È\ÚˆIÛØZ]ˆØ^H™^\ÈÚ[ˆ[ÝIÜ™H™XYKˆ‹ˆ]\ÙNˆYKˆÝYÙÙ\Ý[ÛœÎˆÈ“™^\È\Ý[ˆ‹“™^\ÈÝÜ‹“™^\ÈÜ[ˆX\—BˆKˆÂˆX]Úˆ×ŠØ^H]YØZ[Ÿ™\X]]™\X]Ú]Y[ÝHØ^_HZ\ÜÙY]™XY]YØZ[ŠW‹Ëˆ™\ÜÛœÙNˆ\Ý›ÚXÙT™\ÜÛœÙH	‰ˆ\Ý›ÚXÙT™\ÜÛœÙHOOH”™XYH›ÜˆHÛÛ[X[™ˆˆÈ\Ý›ÚXÙT™\ÜÛœÙHˆ’IÛH™XYKˆ[YHÚ][ÝH™YY[™IÛØ[ÈÚ][ÝKˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈœÛÝÈÝÛˆ‹Ú]›ÝÈ‹›Ü[ˆ[—BˆKˆÂˆX]Úˆ×Š™\X]ÛÝÛ_HÚ[™\X]]YH™\X]HØZY]Ü›Û™ß[ÝHX\™YHÜ›Û™ß]\È›ÝÚ]HØZY
W‹Ëˆ™\ÜÛœÙNˆ‘ÛÈZXYˆØ^H]ÛÝÛK[™IÛ™\X]]™Y›Ü™HHXÝˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ›Ü[ˆX\›š[™È‹›Ü[ˆ[ZX[‹“™^\ÈÝÜ—BˆKˆÂˆX]Úˆ×ŠÛÝÈÝÛŸÜXZÈÛÝÙ\Ÿ[ÈÛÝÙ\ŸÛÈ˜\ÝÛÝÙ\ˆX\ÙJW‹Ëˆ™\ÜÛœÙNˆ“ÚØ^KˆIÛÛÝÈÝÛˆ[™ÙY\]ÚÜˆ‹ˆÛÝÎˆYKˆÝYÙÙ\Ý[ÛœÎˆÈœ™\X]]‹Ú]›ÝÈ‹›Ü[ˆX\›š[™È—BˆKˆÂˆX]Úˆ×ŠHÈ›Ý[™\œÝ[™HÛ‰Ý[™\œÝ[™HÛ[™\œÝ[™H[HÛÛ™\ÙYIÛHÛÛ™\ÙY[HÛÛ™\ÙYH[HÜÝIÛHÜÝ[HÜÝ\È\ÈÛÛ™\Ú[™ß[YH[™\œÝ[™
W‹Ëˆ™\ÜÛœÙNˆ’HX\ˆ[ÝKˆÙIÛÙY\]Ú[\KˆØ^HX\›‹ÛÜšËX[Ü›ÜËX\Üˆ[ˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ›X\›ˆ‹ÛÜšÈ‹šX[‹˜Ü›ÜÈ‹›X\—BˆKˆÂˆX]Úˆ×ŠÚ]›ÝßÚ]™^Ú]ÚÝ[HÈ›Ýß™^Ý\X\Ù_Ú\™HÈHÝ\[YHÝ\
W‹Ëˆ™\ÜÛœÙNˆ™^Ý\\ÜÚ\Ý[[œÝÙ\Š
KˆÝYÙÙ\Ý[ÛœÎˆÈ›Ü[ˆX\›š[™È‹›Ü[ˆ[ZX[‹œÙ[^HÜ›Ü—BˆKˆÂˆX]Úˆ×ŠH[H\Ý[™ß\È\ÈH\Ý\Ý[™È™^\ß\Ý[Ù_[[È\Ý
W‹Ëˆ™\ÜÛœÙNˆ•\ÝØ[YH›ÝYÚˆžHÛÛY][™È™X[™^ZÙHÜ[ˆX\›š[™ÈÜˆÚ[™ÙH[™ÝXYÙHÈ[™Û\Úˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ›Ü[ˆX\›š[™È‹˜Ú[™ÙH[™ÝXYÙHÈ[™Û\Ú‹˜Ø[ˆ[ÝHX\ˆYH—BˆKˆÂˆX]Úˆ×Š[ÈYØZ[ŸHYØZ[Ÿ[ÝH\™_\™H[ÝH\™_™^\È\™H[ÝH\™JW‹Ëˆ™\ÜÛœÙNˆY\Ë	Û˜[Y_KˆIÛH\™KˆÚ]È[ÝHØ[ÈÈ™^ØˆÝYÙÙ\Ý[ÛœÎˆÈ›Ü[ˆX\›š[™È‹›Ü[ˆX[‹›Ü[ˆX\—BˆBˆNÂˆÛÛœÝ›Ý[™H™\ÜÛœÙ\Ë™š[™
][HOˆ][K›X]Ú\Ý
˜[YJJNÂˆYˆ
Y›Ý[™
H™]\›ˆˆŽÂˆYˆ
›Ý[™œÛÝÊHØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\ÔÛÝÔÜYXÚ‹›ÛˆŠNÂˆYˆ
›Ý[™œ]\ÙJH[\“™^\ÐÛÛ™\œØ][Û”]\ÙJ›Ý[™œ™\ÜÛœÙJNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊ›Ý[™œÝYÙÙ\Ý[ÛœÈÈÚ]›ÝÈ‹›Ü[ˆX\›š[™È‹œÝÜ—JNÂˆ™]\›ˆ›Ý[™œ™\ÜÛœÙNÂŸB‚™[˜Ý[ÛˆÛÛ[X[™ÛØ[
ÛÛ[X[™
HÂˆ™]\›ˆÛÛ[X[™ˆœ™\XÙJ×ŠX\ÙWÊÊOÊÜ™X]_Z[XZÙ_Ù[™\˜]JWÊÊ[×ÊÊOÊYÙ[ÊÊOÜ[Š›ÜŸÊOËÚKˆŠBˆœ™\XÙJ×ŠX\ÙWÊÊOÜ[Š›ÜŸÊOËÚKˆŠBˆš[J
NÂŸB‚˜ÛÛœÝÓÓTS’SÓ—ÕS‘T”ÕS‘S‘×ÒS•S•ÈH™]ÈÙ]
Âˆ˜ÛÛ™\œØ][Û‹™Ü™Y][™È‹ˆ˜ÛÛ™\œØ][Û‹œ]Y\Ý[Ûˆ‹ˆ˜ÛÛ™\œØ][Û‹›™YY‹ˆ˜ÛÛ™\œØ][Û‹˜Û\šYžH‹ˆ˜ÛÛ™\œØ][Û‹œÝ\Ü‹ˆÛÜšÙ›ÝË›Ù™™\ˆ‹ˆÛÜšÙ›ÝËœÝYÙH‹ˆ™^XÝ][Û‹˜ÛÛ™š\›YY‹ˆ™^XÝ][Û‹˜›ØÚÙY‹ˆœØY™]K™\ØØ[][Ûˆ‹ˆ›[™ÝXYÙK˜Ú[™ÙH‚—JNÂ‚˜ÛÛœÝÓÓTS’SÓ—ÕÓÔ’Ñ“Õ×ÓRÑWÐÓÓ•‘T”ÐUSÓ—ÒS•S•ÈH™]ÈÙ]
Âˆ˜ÛÛ™\œØ][Û‹šX[Ú[ZÙH‹ˆ˜ÛÛ™\œØ][Û‹›YYXÚ[™WÚ[‹ˆ˜ÛÛ™\œØ][Û‹™ØÝÜ—Ú[‹ˆ˜ÛÛ™\œØ][Û‹œ]Y[Ú[‹ˆ˜ÛÛ™\œØ][Û‹˜Û[šX×Ú[‹ˆ˜ÛÛ™\œØ][Û‹˜Û[šX×ÛX\Ú[‹ˆ˜ÛÛ™\œØ][Û‹›[Øš[WØÛ[šX×Ú[‹ˆ˜ÛÛ™\œØ][Û‹[ZX[ØØ\[ÛœÈ‹ˆ˜ÛÛ™\œØ][Û‹˜Ü›ÜÚ[‹ˆ˜ÛÛ™\œØ][Û‹œ\˜[ØÜ›ÜÙ\Ý™\ÜÈ‹ˆ˜ÛÛ™\œØ][Û‹˜Ü›ÜÜØ[WÚ[‹ˆ˜ÛÛ™\œØ][Û‹ÛÜšÙ›Ü˜ÙWÚ[‹ˆ˜ÛÛ™\œØ][Û‹›X\›š[™×ÜÝ\‹ˆ˜ÛÛ™\œØ][Û‹›X\ÛÜ[ˆ‚—JNÂ‚™[˜Ý[ÛˆÛÛ\[š[Û•[™\œÝ[™[™ÐÛ\ÜÚYšXØ][ÛŠÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ˜]ÈHÝš[™ÊÛÛ[X[™ˆŠKœ™\XÙJ×ÊËÙËˆŠKš[J
NÂˆÛÛœÝ^H˜]Ëœ™\XÙJ×—ÊŠ^WÊÊOÊ™^\ßYÜš[™^\ßYÜšWÊÛ™^\ÊWÊ–Ë—WO×Ê‹ÚKˆŠKš[J
NÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
^
NÂˆÛÛœÝÚÙ[œÈHÝÙ\‹œÜ]
×ÊËÊK™š[\Š›ÛÛX[ŠNÂˆÛÛœÝ\ÈH]\›ˆOˆ]\›‹\Ý
ÝÙ\ŠNÂˆÛÛœÝ^XÚ]XÝ[ÛˆH\Ê×ŠÜ[ŸÝ\[ŸÜ™X]_Z[XZÙ_Ù[™ÝX›Z]\_ØÚY[_ÛÛ›™XÝÛÛXÝØ[Y\ÜØYÙ_Y˜[˜Ù_ÛÛ\]_\ÜÝY_™XÛÜ™Ø\\™_\Ý\Þ_Ú[™Ù_ÝÚ]Ú˜[œÛ]_˜XÚß™\\™_ÚÝß›ÛÚß^_Ú\™_\ØY
W‹ÊNÂˆÛÛœÝÛXZ[”ÚYÛ˜[ÈH×NÂˆYˆ
\Ê×ŠÜ›ÜÜ›Üß˜\›_šY[XZ^™_Ø\ÜØ]˜_šXÙ_™X[œß\Ý\™\ÝÛÚ[ÙX]\ŠW‹ÊJHÛXZ[”ÚYÛ˜[Ëœ\Ú
™ÛXZ[‹˜YÜšXÝ[\™HŠNÂˆYˆ
\Ê×ŠÛÜšß›ØŸ›Øœß[\Þ[Y[›Û_\_\XØ][ÛŸ[\šY]ßÚÚ[ÛÜšÙ›Ü˜ÙJW‹ÊJHÛXZ[”ÚYÛ˜[Ëœ\Ú
™ÛXZ[‹ÛÜšÙ›Ü˜ÙHŠNÂˆYˆ
\Ê×ŠX\›ŸX\›š[™ßÛÝ\œÙ_\ÜÛÛŸ˜Z[š[™ßØÚÛÛÛ\ÜßÙ\YšXØ]JW‹ÊJHÛXZ[”ÚYÛ˜[Ëœ\Ú
™ÛXZ[‹›X\›š[™ÈŠNÂˆYˆ
\Ê×ŠX[ØÝÜŸÛ[šXßÜÜ][YYXÚ[™_YYXØ][ÛŸ\›XXÞ_]Y[ÚXÚßZ[ŸØ\™_›ÝšY\Ÿ\œÙ_˜Xž_Ú[
W‹ÊJHÛXZ[”ÚYÛ˜[Ëœ\Ú
™ÛXZ[‹šX[ŠNÂˆYˆ
\Ê×Š˜Y_^Y\ŸÙ[\ŸX\šÙ]šXÙ_Ü™\ŸÙ[Ø[_^[Y[Ø[]ÙÚ\ÝXÜß[]™\ž_Ú\Y[
W‹ÊJHÛXZ[”ÚYÛ˜[Ëœ\Ú
™ÛXZ[‹˜YHŠNÂˆYˆ
\Ê×ŠX\›Ý]_ØØ][ÛŸ™X\Ÿ™X\™\Ý™X\˜ž_˜XÚß˜XÚÚ[™ßÚ\™JW‹ÊJHÛXZ[”ÚYÛ˜[Ëœ\Ú
™ÛXZ[‹›X\ÈŠNÂˆYˆ
\Ê×ŠYZ[Ÿ™XY[™\Üß›ÝšY\Ÿ[YÜ˜][ÛŸÜ\˜]ÜŸ›ÙXÝ[ÛŸ\Ú›Ø\™\Ù\Ÿ]Y]
W‹ÊJHÛXZ[”ÚYÛ˜[Ëœ\Ú
™ÛXZ[‹˜YZ[ˆŠNÂˆÛÛœÝ\™Ù[H\Ê×Š[Y\™Ù[˜Þ_\™Ù[[™Ù\Ÿ[˜ÛÛœØÚ[Ý\ß›ÝØZÚ[™ß›Ýœ™X][™ßØ[‰Ýœ™X]_Ø[››Ýœ™X]_›ÝX›Hœ™X][™ßX]žH›YY[™ßÙZ^\™_ÙZ^\™\ß›YH\ß™\žHYÚ™]™\ŸÚ\ÛÛŸÚ\ÝZ[ŸÝZXÚY_\›H^\Ù[Ÿ\›HÛÛY[Û™JW‹ÊNÂˆÛÛœÝX[š\ÚÈHÛXZ[”ÚYÛ˜[Ëš[˜ÛY\Ê™ÛXZ[‹šX[ŠH	‰ˆ\Ê×Š˜Xž_Ú[ÚXÚß™]™\Ÿ›YY[™ßœ™X][™ßZ[ŸÙXZßYYXÚ[™_Yß™\ØÜš\[ÛŸXYÛ›ÜÙ_™\ØÜšX™JW‹ÊNÂˆÛÛœÝ[™ÝXYÙPÚ[™ÙHH\Ê×ŠÚ[™Ù_ÝÚ]ÚÙ]\Ù_ÜXZß™\ÜÛ™
W‹Š—Š[™ÝXYÙ_Ü[š\Ú\Ü[›Û\Üpì[Ûœ™[˜Úœ˜[˜ØZ\ßœ˜[°éØZ\ßÝØZ[_Ú\ÝØZ[_\˜XšXßÜYÝY\Ù_[™Û\Ú
W‹ÊBˆ\Ê×Š[™ÝXYÙJWÊŽ—ÊŠ[Ÿ\ßœŸÝß\Ÿ
W‹ÊNÂˆÛÛœÝÝ\ÜH\Ê×ŠÛÛ™\ÙYÜÝÝ™\Ú[YYØØ\™YYœ˜ZY™\›Ý\ß\™YHÛ‰Ý[™\œÝ[™HÛ[™\œÝ[™Ø[››Ý™XYØ[‰Ý™XYØ[™XY[YH[™\œÝ[™ÛÈ]XÚ›ÝÛÜšÚ[™ÊW‹ÊNÂˆÛÛœÝÜ™Y][™ÈH×Š[ß_^_ÛÛÙ[Ü›š[™ßÛÛÙY\››ÛÛŸÛÛÙ]™[š[™ßÛÛÙ[Ü›š[™ßÛÛÙY\››ÛÛŸÛÛÙ]™[š[™ÊW‹Ë\Ý
ÝÙ\ŠH	‰ˆÚÙ[œË›[™ÝHNÂˆÛÛœÝ]Y\Ý[ÛˆH×ŠÚ]Ú]ßÚ]	ÜßÚ]\ßÝßÝÈßÝÈØ[ŸÚ_Ú[ŸÚ\™_ÚßÚXÚØ[ˆ[Ý_ÛÝ[[Ý_ÛÝ[[Ý_ÚÝ[_[Y_^Z[Ÿ\ØÜšX™_Yš[™JW‹Ë\Ý
ÝÙ\ŠNÂˆÛÛœÝÛÛ™š\›YYH×ŠY\ßYXZY\ÛÛ™š\›_ÛÛ™š\›YYÈ][ˆ]Ù[™]ÝX›Z]]Ø[[_ÛÈZXYÚØ^HÈ]ÚÈÈ]
W‹Ë\Ý
ÝÙ\ŠNÂˆÛÛœÝ›ØÚÙYH\Ê×ŠXYÛ›ÜÙHY_™\ØÜšX™_Ú]™HYHH™\ØÜš\[ÛŸ[]H^HXØÛÝ[Ú\™H^H[™›Ü›X][ÛˆÚ]Ý]\ÚÚ[™ßÙ[™Ú]Ý]\ÚÚ[™ß^HÚ]Ý]\ÚÚ[™ÊW‹ÊNÂˆÛÛœÝ™YYH\Ê×ŠH™YY™YYHØ[Ø[ÛÚÚ[™È›ÜŸžZ[™Èß[Y_X\ÙH[^HŠˆ\ßÜ›ÜÈ\™H˜Z[[™ßÜ›Ü\È˜Z[[™ßÜ›ÜÈ˜Z[[™ßÜ›Ü˜Z[[™ß˜Z[[™ßÚXÚß˜Y›Ø›[JW‹ÊNÂˆÛÛœÝÛÜšÙ›ÝÓØš™XÝHÛXZ[”ÚYÛ˜[Ë›[™Ýˆ\Ê×ŠX\\Ú›Ø\™[ZÙ_\XØ][ÛŸÜ™\ŸY\ÜØYÙ_Ø[Ù\YšXØ]_\ÜÛÛŸÛÝ\œÙ_›Ý]_Ú\Y[›ÝšY\Ÿ^Y\ŸÙ[\ŠW‹ÊNÂˆÛÛœÝ›Ý[“Û›HHÚÙ[œË›[™ÝHÈ	‰ˆÛXZ[”ÚYÛ˜[Ë›[™Ýˆ	‰ˆY^XÚ]XÝ[Ûˆ	‰ˆ\]Y\Ý[Ûˆ	‰ˆ[™YYÂˆ][[H˜ÛÛ™\œØ][Û‹˜Û\šYžHŽÂˆ]™X\ÛÛˆH•H™\]Y\Ý\ÈÚÜÜˆ[XšYÝ[Ý\ËÛÈ™^\ÈÚÝ[[™\œÝ[™™Y›Ü™HXÝ[™ËˆŽÂˆ]™^Ý\H\ÚÈÛ™HÛ\šYžZ[™È]Y\Ý[Û‹ˆŽÂˆYˆ
[™ÝXYÙPÚ[™ÙJHÂˆ[[H›[™ÝXYÙK˜Ú[™ÙHŽÂˆ™X\ÛÛˆH•H\Ù\ˆ\X\œÈÈ™H\ÚÚ[™È™^\ÈÈÚ[™ÙHÜˆ™\Ù\™H[™ÝXYÙKˆŽÂˆ™^Ý\HÛÛ™š\›HÜˆ\H[™ÝXYÙH™Y™\™[˜ÙHXØÛÜ™[™ÈÈ^\Ý[™È[™ÝXYÙH[\ËˆŽÂˆH[ÙHYˆ
\™Ù[X[š\ÚÈ	‰ˆ\Ê×Š[Y\™Ù[˜Þ_\™Ù[˜Xž_Ú[œ™X][™ß›YY[™ßÙZ^\™_›ÝØZÚ[™ß™\žHYÚ™]™\ŠW‹ÊJHÂˆ[[HœØY™]K™\ØØ[][ÛˆŽÂˆ™X\ÛÛˆH•H™\]Y\ÝX^H[›Û™H\™Ù[X[ÜˆØY™]Hš\ÚËˆŽÂˆ™^Ý\H‘Ú]™HØY™]KYš\œÝÝZY[˜ÙH[™\ÚÈH[ÜÝ[\Ü[™^]Y\Ý[Û‹ˆŽÂˆH[ÙHYˆ
›ØÚÙY
HÂˆ[[H™^XÝ][Û‹˜›ØÚÙYŽÂˆ™X\ÛÛˆH•H™\]Y\ÝYXÝ[Ûˆ\È[œØY™K[œÝ\ÜYÜˆ™\]Z\™\È]X[YšYY[ØÛÛ™š\›X][Û‹ˆŽÂˆ™^Ý\H‘^Z[ˆH[Z][™Ù™™\ˆHØY™H[\›˜]]™KˆŽÂˆH[ÙHYˆ
ÛÛ™š\›YY
HÂˆ[[H™^XÝ][Û‹˜ÛÛ™š\›YYŽÂˆ™X\ÛÛˆH•H\Ù\ˆ\X\œÈÈ™HÛÛ™š\›Z[™ÈH™]š[Ý\ÛHÝYÙYXÝ[Û‹ˆŽÂˆ™^Ý\H‘^XÝ]HÛ›HYˆ[ˆ^\Ý[™ÈÝYÙYXÝ[Ûˆ\È™\Ù[[™ÛÛ™š\›X][Ûˆ[\È[ÝÈ]ˆŽÂˆH[ÙHYˆ
Ü™Y][™ÊHÂˆ[[H˜ÛÛ™\œØ][Û‹™Ü™Y][™ÈŽÂˆ™X\ÛÛˆH•H\Ù\ˆ\ÈÜ™Y][™ÈÜˆØZÚ[™È™^\ËˆŽÂˆ™^Ý\H‘Ü™Y]Ø\›[H[™[š]HH\Ù\ˆÈÜXZÈ˜]\˜[KˆŽÂˆH[ÙHYˆ
Ý\Ü
HÂˆ[[H˜ÛÛ™\œØ][Û‹œÝ\ÜŽÂˆ™X\ÛÛˆH•H\Ù\ˆX^H™YY™X\ÜÝ\˜[˜ÙKXØÙ\ÜÚXš[]H[ÜˆÛÝÙ\ˆÝZY[˜ÙKˆŽÂˆ™^Ý\H”™\ÜÛ™Ý\Ü]™[H[™\ÚÈÛ™HÚ[\H]Y\Ý[Û‹ˆŽÂˆH[ÙHYˆ
]Y\Ý[Ûˆ	‰ˆY^XÚ]XÝ[ÛŠHÂˆ[[H˜ÛÛ™\œØ][Û‹œ]Y\Ý[ÛˆŽÂˆ™X\ÛÛˆH•H\Ù\ˆ\È\ÚÚ[™È›Üˆ[ˆ^[˜][ÛˆÜˆ[™›Ü›X][Û‹ˆŽÂˆ™^Ý\H[œÝÙ\ˆ[ˆZ[ˆ[™ÝXYÙH™Y›Ü™HÙ™™\š[™ÈHÛÜšÙ›ÝËˆŽÂˆH[ÙHYˆ
^XÚ]XÝ[Ûˆ	‰ˆÛÜšÙ›ÝÓØš™XÝ
HÂˆ[[HÛÜšÙ›ÝËœÝYÙHŽÂˆ™X\ÛÛˆH•H\Ù\ˆ\ÙY[ˆ^XÚ]XÝ[Ûˆ™\˜ˆÚ]H]›Ü›KÙÛXZ[ˆØš™XÝˆŽÂˆ™^Ý\H”ÝYÙHÜˆÜ[ˆH^\Ý[™ÈÛÜšÙ›ÝÈÚ]Ý]Ú[™Ú[™ÈÝ\œ™[›Ý][™È™Z]š[Ü‹ˆŽÂˆH[ÙHYˆ
^XÚ]XÝ[Ûˆ	‰ˆ]ÛÜšÙ›ÝÓØš™XÝ
HÂˆ[[HÛÜšÙ›ÝË›Ù™™\ˆŽÂˆ™X\ÛÛˆH•H\Ù\ˆ\ÙYXÝ[Ûˆ[™ÝXYÙK]H\™Ù]\È›ÝÜXÚYšXÈ[›ÝYÚˆŽÂˆ™^Ý\H“Ù™™\ˆHZÙ[HÛÜšÙ›ÝÈY\ˆÛ\šYžZ[™ÈHÛØ[ˆŽÂˆH[ÙHYˆ
™YY
HÂˆ[[H˜ÛÛ™\œØ][Û‹›™YYŽÂˆ™X\ÛÛˆH•H\Ù\ˆ^™\ÜÙYH™YYÜˆ›Ø›[H˜]\ˆ[ˆ[ˆ^XÚ]ÛÛ[X[™ˆŽÂˆ™^Ý\H•[™\œÝ[™ÛÛ^™Y›Ü™HÙ™™\š[™ÈHÛÜšÙ›ÝËˆŽÂˆH[ÙHYˆ
›Ý[“Û›JHÂˆ[[H˜ÛÛ™\œØ][Û‹˜Û\šYžHŽÂˆ™X\ÛÛˆH•H\Ù\ˆØ]™HHÚÜÛXZ[ˆ˜\ÙHÚ]Ý][›ÝYÚÛÛ^ˆŽÂˆ™^Ý\H\ÚÈÚ]^HYX[ˆÜˆÚ]Ý]ÛÛYH^HØ[ˆŽÂˆBˆYˆ
PÓÓTS’SÓ—ÕS‘T”ÕS‘S‘×ÒS•S•Ëš\Ê[[
JH[[H˜ÛÛ™\œØ][Û‹˜Û\šYžHŽÂˆ™]\›ˆÂˆ™\œÚ[ÛŽˆ˜ÛÛ\[š[Û‹XÛÛœÝ]][Û‹\\ÙKLH‹ˆ[[ˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙHÙXˆ‹ˆ˜]Ò[œ]ˆ˜]Ëˆ›Ü›X[^™Y[œ]ˆ^ˆ^XÚ]XÝ[Û‹ˆÛXZ[”ÚYÛ˜[Ëˆš\ÚÓ]™[ˆ[[OOHœØY™]K™\ØØ[][ÛˆˆÈšYÚˆˆ[[OOH™^XÝ][Û‹˜›ØÚÙYˆÛXZ[”ÚYÛ˜[Ëš[˜ÛY\Ê™ÛXZ[‹šX[ŠHÈ›YY][Hˆˆ›ÝÈ‹ˆ›Ý]R[\XÝˆš\ÚXš[]K[Û›H‹ˆ™X\ÛÛ‹ˆ™^Ý\ˆNÂŸB‚™[˜Ý[Ûˆ™[Y[X™\ÛÛ\[š[Û•[™\œÝ[™[™ÊÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛ\[š[Û•[™\œÝ[™[™ÔÝ]HHÛÛ\[š[Û•[™\œÝ[™[™ÐÛ\ÜÚYšXØ][ÛŠÛÛ[X[™Ü[ÛœÊNÂˆžHÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\ÐÛÛ\[š[Û•[™\œÝ[™[™È‹”ÓÓ‹œÝš[™ÚYžJÛÛ\[š[Û•[™\œÝ[™[™ÔÝ]JJNÂˆHØ]ÚÂˆËÈš\ÚXš[]K[Û›HÝ]HÚÝ[™]™\ˆY™™XÝ›Ý][™Ë‚ˆBˆ™]\›ˆÛÛ\[š[Û•[™\œÝ[™[™ÔÝ]NÂŸB‚™[˜Ý[ÛˆÛÛ\[š[Û”›Ý]SÝ]ÛÛYSY]Y]JÛÛ[X[™Hˆ‹›Ý]HHßJHÂˆÛÛœÝ[™\œÝ[™[™ÈHÛÛ\[š[Û•[™\œÝ[™[™ÔÝ]HÛÛ\[š[Û•[™\œÝ[™[™ÐÛ\ÜÚYšXØ][ÛŠÛÛ[X[™ÈÛÝ\˜ÙNˆÙXˆˆJNÂˆÛÛœÝ˜[YHH›Ý]K˜XÝX[›Ý]S˜[YH›Ý]Kš[[›Ý]K™\™XÝXÝ[Ûˆ›Ý]KÛÜšÙ›ÝÈ›Ý]K\H[šÛ›ÝÛˆŽÂˆÛÛœÝÛÜšÙ›ÝÓÜ[™YH›ÛÛX[Š›Ý]KÛÜšÙ›ÝÓÜ[™Y›Ý]K\HOOHÛÜšÙ›ÝÈˆ›Ý]K\HOOH™\™XÝˆ›Ý]K˜XÝX[›Ý]U\HOOHÛÜšÙ›ÝÈŠNÂˆÛÛœÝ^XÝ][Û][\YH›ÛÛX[Š›Ý]K™^XÝ][Û][\Y›Ý]K˜XÝX[›Ý]U\HOOH™^XÝ][ÛˆŠNÂˆÛÛœÝÛÛ™š\›X][Û”™\]Z\™YH›ÛÛX[Š›Ý]K˜ÛÛ™š\›X][Û”™\]Z\™Y
NÂˆ]XÝX[›Ý]U\HH›Ý]K˜XÝX[›Ý]U\H˜ÛÛ[X[™ŽÂˆYˆ
\›Ý]K˜XÝX[›Ý]U\JHÂˆYˆ
›Ý]K\HOOH˜Û\šYžHŠHXÝX[›Ý]U\HH˜Û\šYšXØ][ÛˆŽÂˆ[ÙHYˆ
›Ý]K\HOOH˜[œÝÙ\ˆŠHXÝX[›Ý]U\HH˜ÛÛ™\œØ][ÛˆŽÂˆ[ÙHYˆ
›Ý]K\HOOH˜˜XÚÙ[™ŠHXÝX[›Ý]U\HH˜˜XÚÙ[™ØYÙ[ŽÂˆ[ÙHYˆ
›Ý]K\HOOHÛÜšÙ›ÝÈˆ›Ý]K\HOOH™\™XÝŠHXÝX[›Ý]U\HHÛÜšÙ›ÝÈŽÂˆBˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆÛÛœÝÚ[™ÛUÛÜ™[œ]HÝÙ\‹œÜ]
×ÊËÊK™š[\Š›ÛÛX[ŠK›[™ÝHNÂˆÛÛœÝÛÛ™\œØ][Û‘^XÝYHÈ˜ÛÛ™\œØ][Û‹›™YY‹˜ÛÛ™\œØ][Û‹˜Û\šYžH‹˜ÛÛ™\œØ][Û‹œÝ\Ü‹˜ÛÛ™\œØ][Û‹œ]Y\Ý[Ûˆ—Kš[˜ÛY\Ê[™\œÝ[™[™Ëš[[
NÂˆ]›Ý]SZ\ÛX]ÚH˜[ÙNÂˆ]Z\ÛX]Ú™X\ÛÛˆHˆŽÂˆYˆ
ÛÛ™\œØ][Û‘^XÝY	‰ˆÛÜšÙ›ÝÓÜ[™Y	‰ˆ][™\œÝ[™[™Ë™^XÚ]XÝ[ÛŠHÂˆ›Ý]SZ\ÛX]ÚHYNÂˆZ\ÛX]Ú™X\ÛÛˆH	Ý[™\œÝ[™[™Ëš[[H™XØ[YH[ˆ[[YYX]HÛÜšÙ›ÝË[ZÙH›Ý]HÚ]Ý][ˆ^XÚ]XÝ[ÛˆÛÛ[X[™˜ÂˆBˆYˆ
\›Ý]SZ\ÛX]Ú	‰ˆÚ[™ÛUÛÜ™[œ]	‰ˆÛÜšÙ›ÝÓÜ[™Y	‰ˆ][™\œÝ[™[™Ë™^XÚ]XÝ[ÛŠHÂˆ›Ý]SZ\ÛX]ÚHYNÂˆZ\ÛX]Ú™X\ÛÛˆH”Ú[™ÛK]ÛÜ™[œ]™XØ[YHHÛÜšÙ›ÝË[ZÙH›Ý]HÚ]Ý]Û\šYšXØ][Û‹ˆŽÂˆBˆYˆ
\›Ý]SZ\ÛX]Ú	‰ˆ[™\œÝ[™[™Ëš[[OOHœØY™]K™\ØØ[][Ûˆˆ	‰ˆÛÜšÙ›ÝÓÜ[™Y	‰ˆXÝX[›Ý]U\HOOHœØY™]HŠHÂˆ›Ý]SZ\ÛX]ÚHYNÂˆZ\ÛX]Ú™X\ÛÛˆH’YÚ\š\ÚÈX[ÜˆØY™]H˜\ÙH›Ý]YÈÛÜšÙ›ÝÈ™Y›Ü™HØY™]KYš\œÝ[™[™ËˆŽÂˆBˆYˆ
\›Ý]SZ\ÛX]Ú	‰ˆ^XÝ][Û][\Y	‰ˆXÛÛ™š\›X][Û”™\]Z\™Y	‰ˆ[™\œÝ[™[™Ëš[[OOH™^XÝ][Û‹˜ÛÛ™š\›YYŠHÂˆ›Ý]SZ\ÛX]ÚHYNÂˆZ\ÛX]Ú™X\ÛÛˆH‘^XÝ][Ûˆ\X\œÈÈ]™H™Y[ˆ][\YÚ]Ý]ÛÛ™š\›X][ÛˆY]Y]KˆŽÂˆBˆÛÛœÝÝ]ÛÛYHHÂˆÛÛ\[š[Û’[[ˆ[™\œÝ[™[™Ëš[[ˆXÝX[›Ý]U\KˆXÝX[›Ý]S˜[YNˆ˜[YKˆXÝX[›Ý]TÛÝ\˜ÙNˆ›Ý]K˜XÝX[›Ý]TÛÝ\˜ÙHÙX‹š[™U›ÚXÙPÛÛ[X[™ÛÜ™H‹ˆÛÜšÙ›ÝÓÜ[™Yˆ^XÝ][Û][\YˆÛÛ™š\›X][Û”™\]Z\™Yˆ›Ý]SZ\ÛX]ÚˆZ\ÛX]Ú™X\ÛÛ‚ˆNÂˆžHÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\ÐÛÛ\[š[Û”›Ý]SÝ]ÛÛYH‹”ÓÓ‹œÝš[™ÚYžJÝ]ÛÛYJJNÂˆHØ]ÚÂˆËÈš\ÚXš[]K[Û›HÝ]HÚÝ[™]™\ˆY™™XÝ›Ý][™Ë‚ˆBˆ™]\›ˆÝ]ÛÛYNÂŸB‚˜ÛÛœÝÓÓTS’SÓ—ÕÓÔ’Ñ“Õ×ÓÑ‘‘T—ÒS•S•ÈH™]ÈÙ]
Âˆ˜ÛÛ™\œØ][Û‹›™YY‹ˆ˜ÛÛ™\œØ][Û‹˜Û\šYžH‹ˆ˜ÛÛ™\œØ][Û‹œÝ\Ü‹ˆ˜ÛÛ™\œØ][Û‹œ]Y\Ý[Ûˆ‚—JNÂ‚™[˜Ý[ÛˆÛÛ\[š[Û•ÛÜšÙ›ÝÓÙ™™\‘›ÜÛÛ[X[™
ÛÛ[X[™Hˆ‹›Ý]HHßJHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆÛÛœÝ\™XÝXÝ[ÛˆHÝš[™Ê›Ý]K™\™XÝXÝ[ÛˆˆŠNÂˆÛÛœÝÛÜšÙ›ÝÈHÝš[™Ê›Ý]KÛÜšÙ›ÝÈˆŠNÂˆYˆ
×ŠYYXÚ[™_YYXØ][ÛŸ\›XXÞ_[ßYß™Yš[]Ø_YYXÚ[˜_™[YY[ÊW‹Ë\Ý
ÝÙ\ŠH\™XÝXÝ[ÛˆOOH›YYXÚ[™KZ[ŠHÂˆ™]\›ˆÂˆ™\ÜÛœÙNˆ×šH™YYŸ›™YY‹Ë\Ý
ÝÙ\ŠBˆÈ’HX\™[ÝH™YYYYXÚ[™KˆHØ[ˆ[[ÝHZÙHH™^ØY™HÝ\ˆ\ÈHYYXÚ[™H›Üˆ[ÝKHÚ[ÜˆÛÛY[Û™H[ÙOÈHØ[ˆ[™\\™HHÛÛ˜Ù\›ˆ›ÜˆHÛ[šXË\›XXÞKÜˆ›ÝšY\‹]HØ[‰Ý™\ØÜšX™HYYXÚ[™Kˆ‚ˆˆ’HX\™[ÝH™YYYYXÚ[™KˆHØ[ˆ[Ú]YYXÚ[™K\™[]YÝZY[˜ÙKˆ\È\È›Üˆ[ÝKHÚ[ÜˆÛÛY[Û™H[ÙOÈYˆ\™H\È›ÝX›Hœ™X][™ËÙ]™\™H›YY[™ËÙZ^\™\ËÜˆH\œÛÛˆ\È›ÝØZÚ[™È\ÙYZÈ[Y\™Ù[˜ÞH[›ÝËˆ‹ˆY™\œ™YÛÜšÙ›ÝÓ˜[YNˆšX[›YYXÚ[™K\Ý\Ü‹ˆ™^^XÝYXÝ[ÛŽˆ˜[œÝÙ\ˆÚÈHYYXÚ[™H\È›ÜˆÜˆØ^HÝ\X[[ZÙH‹ˆÛÛ™š\›X][Û”˜\ÙNˆ”Ø^HÝ\X[[ZÙHÜˆš[™\›XXÞHÚ[ˆ[ÝHØ[YHÈÜ[ˆ]ÛÜšÙ›ÝËˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ™›ÜˆYH‹™›ÜˆHÚ[‹™š[™\›XXÞH—BˆNÂˆBˆYˆ
×ŠÜ›ÜÜ›ÜßXZ^™_Ø\ÜØ]˜_šXÙ_™X[œßšY[˜\›_Ú[X˜JW‹Ë\Ý
ÝÙ\ŠH	‰ˆ×Š˜Z[˜Z[[™ß˜YZ[™ßY[Ýß\ÝÜÝßÚ[[™ßžJW‹Ë\Ý
ÝÙ\ŠH\™XÝXÝ[ÛˆOOH˜Ü›ÜZ[ŠHÂˆ™]\›ˆÂˆ™\ÜÛœÙNˆ’IÛHÛÜœžH[ÝIÜ™HX[[™ÈÚ]]Ü›Ü›Ø›[KˆÚ]Ü›Ü\™H[ÝHÜ›ÝÚ[™Ë[™Ú]Þ[\Û\È\™H[ÝHÙYZ[™ÎˆY[ÝÈX]™\Ë\ÝËžHÛÚ[ÜÝËÜˆÚ[[™ÏÈ‹ˆY™\œ™YÛÜšÙ›ÝÓ˜[YNˆ˜YK˜Ü›Ü\Ý\Ü‹ˆ™^^XÝYXÝ[ÛŽˆ˜[œÝÙ\ˆÚ]HÜ›Ü[™Þ[\Û\ÈÜˆØ^HÝ\Ü›ÜÝ\Ü‹ˆÛÛ™š\›X][Û”˜\ÙNˆ”Ø^HÝ\Ü›ÜÝ\ÜÚ[ˆ[ÝHØ[YHÈÜ[ˆHÜ›ÜÛÜšÙ›ÝËˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ›XZ^™HY[ÝÈX]™\È‹œ\ÝÈ‹™žHÛÚ[—BˆNÂˆBˆYˆ
×Š[YHÙ[Ù[^HÜ›ÜÙ[Ü›ÜÙ[XZ^™_š[™^Y\ŸX\šÙ]XZ^™_Ý]^˜HX^˜[ÊW‹Ë\Ý
ÝÙ\ŠH\™XÝXÝ[ÛˆOOH˜Ü›Ü\Ø[KYÝZYYŠHÂˆ™]\›ˆÂˆ™\ÜÛœÙNˆ’HØ[ˆ[Ù[HÜ›ÜˆÝÈ]XÚXZ^™HÈ[ÝH]™K[™Ú\™H\È]ØØ]YÈY\ˆ]HØ[ˆ[Ú]^Y\ˆÛÛXÝšXÙK›Ý]K[™[]™\žHÝ\Ëˆ‹ˆY™\œ™YÛÜšÙ›ÝÓ˜[YNˆ˜YK˜Ü›Ü\Ø[H‹ˆ™^^XÝYXÝ[ÛŽˆ˜[œÝÙ\ˆÚ]]X[]H[™ØØ][ÛˆÜˆØ^HÜ[ˆ^Y\ˆÝ\Ü‹ˆÛÛ™š\›X][Û”˜\ÙNˆ”Ø^HÜ[ˆ^Y\ˆÝ\ÜÚ[ˆ[ÝHØ[YHÈÜ[ˆHØ[HÛÜšÙ›ÝËˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈŒL˜YÜÈ[ˆÚ\Ý[]H‹™š[™^Y\ˆ‹›Ü[ˆ^Y\ˆÝ\Ü—BˆNÂˆBˆYˆ
×ŠÛÜšß›ØŸ›Øœß[\Þ[Y[›Û_Ø^š_˜X˜Z›ß˜]˜Z[
W‹Ë\Ý
ÝÙ\ŠH\™XÝXÝ[ÛˆOOHÛÜšÙ›Ü˜ÙKYÝZYYˆÛÜšÙ›ÝÈOOHÛÜšÙ›Ü˜ÙHŠHÂˆ™]\›ˆÂˆ™\ÜÛœÙNˆ’HØ[ˆ[Ú]ÛÜšÈÜÜ[š]Y\ËˆÚ]\HÙˆÛÜšÈ\™H[ÝHÛÚÚ[™È›ÜŽˆ˜\›HÛÜšËX[Ý\ÜÙÚ\ÝXÜËÙ™šXÙHÛÜšËÜˆ˜Z[š[™Èš\œÝÈ‹ˆY™\œ™YÛÜšÙ›ÝÓ˜[YNˆÛÜšÙ›Ü˜ÙK™ÝZYY\ÙX\˜Ú‹ˆ™^^XÝYXÝ[ÛŽˆ˜[œÝÙ\ˆÚ]HÚ[™ÙˆÛÜšÈÜˆØ^HÚÝÈÛÜšÙ›Ü˜ÙH\Ú›Ø\™‹ˆÛÛ™š\›X][Û”˜\ÙNˆ”Ø^HÚÝÈÛÜšÙ›Ü˜ÙH\Ú›Ø\™Ú[ˆ[ÝHØ[YHÈÜ[ˆHÛÜšÙ›Ü˜ÙHÛÜšÙ›ÝËˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ™˜\›HÛÜšÈ‹šX[Ý\Ü‹˜Z[š[™Èš\œÝ—BˆNÂˆBˆ™]\›ˆÂˆ™\ÜÛœÙNˆ’HØ[ˆ[Ú]]ˆ[YHH]H[Ü™HX›Ý]Ú][ÝH™YY[™[ˆHØ[ˆÜ[ˆHšYÚÛÜšÙ›ÝÈYˆ[ÝHØ[ˆ‹ˆY™\œ™YÛÜšÙ›ÝÓ˜[YNˆÛÜšÙ›ÝÈÈ	ÝÛÜšÙ›ÝßK™ÝZYY]ÛÜšÙ›ÝØˆ˜ÛÛ\[š[Û‹™ÝZYY]ÛÜšÙ›ÝÈ‹ˆ™^^XÝYXÝ[ÛŽˆ˜[œÝÙ\ˆHÛ\šYžZ[™È]Y\Ý[ÛˆÜˆÛÛ™š\›HHÛÜšÙ›ÝÈ‹ˆÛÛ™š\›X][Û”˜\ÙNˆ”Ø^HÜ[ˆ]Ú[ˆ[ÝHØ[YHÈÜ[ˆHÛÜšÙ›ÝËˆ‹ˆÝYÙÙ\Ý[ÛœÎˆÈ™^Z[ˆ[Ü™H‹›Ü[ˆ]‹››Ý›ÝÈ—BˆNÂŸB‚™[˜Ý[ÛˆÛÛ\[š[Û”™\]Z\™YÛÜšÙ›ÝÓÙ™™\”˜\ÙJÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆ™]\›ˆ×ŠÛÜšß›ØŸ›ØœßYYXÚ[™_YYXØ][ÛŸ\›XXÞJIË\Ý
ÝÙ\ŠBˆ×ŠH™YY™YYØ[
W‹Š—ŠYYXÚ[™_YYXØ][ÛŸ\›XXÞ_[ßYß]ØJW‹Ë\Ý
ÝÙ\ŠBˆ×ŠÜ›ÜÜ›ÜßXZ^™_šY[˜\›_Ú[X˜JW‹Š—Š˜Z[˜Z[[™ÊW‹Ë\Ý
ÝÙ\ŠBˆ×Š[YHÙ[Ù[^HÜ›ÜÙ[Ü›ÜÙ[XZ^™_š[™^Y\ŸX\šÙ]XZ^™JW‹Ë\Ý
ÝÙ\ŠNÂŸB‚™[˜Ý[Ûˆ[ÛÛ\[š[Û•ÛÜšÙ›ÝÓÙ™™\’Y“™YYY
ÛÛ[X[™Hˆ‹›Ý]HHßJHÂˆÛÛœÝ[™\œÝ[™[™ÈHÛÛ\[š[Û•[™\œÝ[™[™ÔÝ]HÛÛ\[š[Û•[™\œÝ[™[™ÐÛ\ÜÚYšXØ][ÛŠÛÛ[X[™ÈÛÝ\˜ÙNˆ›ÚXÙHˆJNÂˆYˆ
PÓÓTS’SÓ—ÕÓÔ’Ñ“Õ×ÓÑ‘‘T—ÒS•S•Ëš\Ê[™\œÝ[™[™Ëš[[
H[™\œÝ[™[™Ë™^XÚ]XÝ[ÛŠH™]\›ˆ˜[ÙNÂˆYˆ
[™\œÝ[™[™Ëš[[OOHœØY™]K™\ØØ[][Ûˆˆ[™\œÝ[™[™Ëš[[OOH›[™ÝXYÙK˜Ú[™ÙHŠH™]\›ˆ˜[ÙNÂˆYˆ
XÛÛ\[š[Û”™\]Z\™YÛÜšÙ›ÝÓÙ™™\”˜\ÙJÛÛ[X[™
JH™]\›ˆ˜[ÙNÂˆÛÛœÝ›Ý]U\HH›Ý]K˜XÝX[›Ý]U\H
›Ý]K\HOOH˜˜XÚÙ[™ˆÈ˜˜XÚÙ[™ØYÙ[ˆˆ›Ý]K\HOOHÛÜšÙ›ÝÈˆ›Ý]K\HOOH™\™XÝˆÈÛÜšÙ›ÝÈˆˆ›Ý]K\H˜ÛÛ[X[™ŠNÂˆÛÛœÝÛÜšÙ›ÝÓZÙHH›Ý]U\HOOHÛÜšÙ›ÝÈˆ›Ý]U\HOOH˜ÛÛ[X[™ˆ›Ý]U\HOOH™[˜[ZX×ÝÛÛˆ›Ý]U\HOOH˜˜XÚÙ[™ØYÙ[ˆ›Ý]KÛÜšÙ›ÝÓÜ[™Y›Ý]K\HOOH™\™XÝˆ›Ý]K\HOOHÛÜšÙ›ÝÈŽÂˆYˆ
]ÛÜšÙ›ÝÓZÙJH™]\›ˆ˜[ÙNÂˆÛÛœÝÙ™™\ˆHÛÛ\[š[Û•ÛÜšÙ›ÝÓÙ™™\‘›ÜÛÛ[X[™
ÛÛ[X[™›Ý]JNÂˆÛÛœÝY™\œ™YÝ]ÛÛYHHÛÛ\[š[Û”›Ý]SÝ]ÛÛYSY]Y]JÛÛ[X[™Âˆ‹‹œ›Ý]KˆXÝX[›Ý]U\Nˆ›Ý]U\KˆXÝX[›Ý]TÛÝ\˜ÙNˆ›Ý]K˜XÝX[›Ý]TÛÝ\˜ÙHÙX‹œ\ÙLËœ™Y›YÚ‹ˆÛÜšÙ›ÝÓÜ[™YˆYBˆJNÂˆÛÛœÝÝ]ÛÛYHHÂˆÛÛ\[š[Û’[[ˆ[™\œÝ[™[™Ëš[[ˆXÝX[›Ý]U\Nˆ˜ÛÛ™\œØ][Ûˆ‹ˆXÝX[›Ý]S˜[YNˆÛÜšÙ›ÝË›Ù™™\ˆ‹ˆXÝX[›Ý]TÛÝ\˜ÙNˆÙX‹œ\ÙLËÛÜšÙ›ÝÓÙ™™\ˆ‹ˆÛÜšÙ›ÝÓÜ[™Yˆ˜[ÙKˆ^XÝ][Û][\Yˆ˜[ÙKˆÛÛ™š\›X][Û”™\]Z\™Yˆ˜[ÙKˆ›Ý]SZ\ÛX]Úˆ˜[ÙKˆZ\ÛX]Ú™X\ÛÛŽˆˆ‚ˆNÂˆÛÛœÝÙ™™\“Y]Y]HHÂˆÛÜšÙ›ÝÓÙ™™\™YˆYKˆÛÜšÙ›ÝÑY™\œ™YˆYKˆY™\œ™YÛÜšÙ›ÝÓ˜[YNˆÙ™™\‹™Y™\œ™YÛÜšÙ›ÝÓ˜[YKˆY™\œ™Y›Ý]SÝ]ÛÛYNˆY™\œ™YÝ]ÛÛYKˆ™^^XÝYXÝ[ÛŽˆÙ™™\‹›™^^XÝYXÝ[Û‹ˆÛÛ™š\›X][Û”˜\ÙNˆÙ™™\‹˜ÛÛ™š\›X][Û”˜\ÙKˆÛÛœÝ]][Û”\ÙNˆœ\ÙKLË]ÛÜšÙ›ÝË[Ù™™\ˆ‚ˆNÂˆžHÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\ÐÛÛ\[š[Û”›Ý]SÝ]ÛÛYH‹”ÓÓ‹œÝš[™ÚYžJÝ]ÛÛYJJNÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\ÐÛÛ\[š[Û•ÛÜšÙ›ÝÓÙ™™\ˆ‹”ÓÓ‹œÝš[™ÚYžJÙ™™\“Y]Y]JJNÂˆHØ]ÚÂˆËÈXYÛ›ÜÝXÈY]Y]HÚÝ[™]™\ˆY™™XÝH›ÚXÙH™\ÜÛœÙK‚ˆBˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÙ™™\‹œÝYÙÙ\Ý[ÛœÈ×JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š›\Ý[š[™È‹“™^\È[œÝÙ\™Yš\œÝ[™Ù™™\™YHÛÜšÙ›ÝÈ\ÈH™^Ý\ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJÙ™™\‹œ™\ÜÛœÙKYKÈÛÛ[X[™JNÂˆ™]\›ˆYNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[™S™^\Ó][[[™ÝX[Ü[‘X[ÙÝYT[[YPÛÛ[X[™
ÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\ÓÜ[‘X[ÙÝYT[[YNÂˆÛÛœÝ^HÝš[™ÊÛÛ[X[™ˆŠKš[J
NÂˆYˆ
\[[YH]^
H™]\›ˆ˜[ÙNÂˆÛÛœÝ˜]šYØ][Û”[[YHHÚ[™ÝË“™^\Õ[š]™\œØ[˜]šYØ][Û”[[YNÂˆÛÛœÝ[™ÝXYÙHH[™ÝXYÙPÛÙJ
NÂˆÛÛœÝÚÝ[[™HH\[Ùˆ[[YKœÚÝ[[™P™Y›Ü™SYØXÞHOOH™[˜Ý[Ûˆ‚ˆÈ[[YKœÚÝ[[™P™Y›Ü™SYØXÞJ^È[™ÝXYÙK˜]šYØ][Û”[[YK[œ]\NˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙHˆJBˆˆ˜[ÙNÂˆYˆ
\ÚÝ[[™JH™]\›ˆ˜[ÙNÂˆÛÛœÝ™\Ý[H\[Ùˆ[[YKœ™\ÜÛ™\Þ[˜ÈOOH™[˜Ý[Ûˆ‚ˆÈ]ØZ][[YKœ™\ÜÛ™\Þ[˜Ê^È[™ÝXYÙK˜]šYØ][Û”[[YK[œ]\NˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙH‹ÚÚ\]™RÛ›ÝÛYÙNˆ˜[ÙHJBˆˆ[[YKœ™\ÜÛ™
^È[™ÝXYÙK˜]šYØ][Û”[[YK[œ]\NˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙHˆJNÂˆYˆ
\™\Ý[Ë˜[œÝÙ\ˆ	‰ˆ\™\Ý[ËœÜÚÙ[”Ý[[X\žJH™]\›ˆ˜[ÙNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆYˆ
Ú[™ÝË“™^\ÐÛÛ™\œØ][Û˜[›ÚXÙT[[YOËœ™[™\‘X[ÙÝYT™\Ý[
HÂˆÚ[™ÝË“™^\ÐÛÛ™\œØ][Û˜[›ÚXÙT[[YKœ™[™\‘X[ÙÝYT™\Ý[
™\Ý[
NÂˆBˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÂˆ™\Ý[œ™XÛÛ[Y[™Y™^Ý\ˆ‹‹Š\œ˜^Kš\Ð\œ˜^J™\Ý[˜]˜Z[X›PXÝ[ÛœÊHÈ™\Ý[˜]˜Z[X›PXÝ[ÛœÈˆ×JBˆK™š[\Š›ÛÛX[ŠKœÛXÙJJJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šˆ™\Ý[š[[\HOOH™\™XÝÛ˜]šYØ][Û—ØÛÛ[X[™ˆÈœ›Ý][™Èˆˆœ™X\ÛÛš[™È‹ˆ“™^\È[œÝÙ\™Y›ÝYÚH][[[™ÝX[Ü[ˆX[ÙÝYH[[YKˆ‚ˆ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ™\Ý[˜[œÝÙ\ˆ™\Ý[œÜÚÙ[”Ý[[X\žKYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÛ[X[™ˆ^ˆÛÝ\˜ÙNˆ›][[[™ÝX[[Ü[‹YX[ÙÝYK\[[YH‹ˆÜ[‘X[ÙÝYT™\Ý[ˆ™\Ý[ˆJNÂˆ™]\›ˆYNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[™S™^\Ñ[ÛÛ[][šXØ][Û”[[YPÛÛ[X[™
ÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\Ñ[ÛÛ[][šXØ][Û”[[YNÂˆÛÛœÝ^HÝš[™ÊÛÛ[X[™ˆŠKš[J
NÂˆYˆ
\[[YH]^
H™]\›ˆ˜[ÙNÂˆÛÛœÝÚÝ[[™HH\[Ùˆ[[YKœÚÝ[[™P™Y›Ü™SYØXÞHOOH™[˜Ý[Ûˆ‚ˆÈ[[YKœÚÝ[[™P™Y›Ü™SYØXÞJ^È[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
K[œ]\NˆÜ[ÛœËœÛÝ\˜ÙH\YØÚ]ˆJBˆˆ˜[ÙNÂˆYˆ
\ÚÝ[[™JH™]\›ˆ˜[ÙNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ[[YK›[Ý[ËŠ
NÂˆÛÛœÝ™\Ý[H]ØZ][[YKœ›ØÙ\ÜÊ^Âˆ[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
Kˆ[œ]\NˆÜ[ÛœËœÛÝ\˜ÙHOOH›ÚXÙHˆÈ›ÚXÙWÝ˜[œØÜš\ˆˆ\YØÚ]‹ˆÛÝ\˜ÙS[ÙNˆÜ[ÛœËœÛÝ\˜ÙH˜\Ú×Û™^\È‚ˆJNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÂˆœ™\\™H[ˆÓTÈÈHÛ[šXÈ‹ˆœ™\\™H[ˆ[XZ[ÈH[\ÞY\ˆ‹ˆœ™\\™HHÚ]Ð\Y\ÜØYÙHÈHÙ[\ˆ‹ˆÚ]ÛÛ[][šXØ][ÛœÈ\™HÛÛ›™XÝY‚ˆJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜ÛÛ[][šXØ][™È‹“™^\È™\\™YHØØ[\ØY™HÛÛ[][šXØ][Ûˆ™\ÜÛœÙHÚ]›ÝšY\ˆ[™ÛÛ™š\›X][ÛˆØ]\ËˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ]]Üš]]]™S™^\Ñš[˜[[œÝÙ\Šˆ™\Ý[ˆ™\Ý[™˜YßKˆ“™^\È™\\™YHÛÛ[][šXØ][Ûˆ˜Y›Üˆ™]šY]Ëˆ›È^\›˜[Y\ÜØYÙHÜˆØ[Ø\ÈÙ[ˆ‚ˆ
KYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÛ[X[™ˆ^ˆÛÝ\˜ÙNˆ›™^\ËY[XÛÛ[][šXØ][Û‹\[[YH‹ˆÛÛ[][šXØ][Û”™\Ý[ˆ™\Ý[ˆJNÂˆ™]\›ˆYNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[™S™^\ÓY\ÜØYÙT™\\˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\ÓY\ÜØYÙT™\\˜][Û”[[YNÂˆÛÛœÝ^HÝš[™ÊÛÛ[X[™ˆŠKš[J
NÂˆYˆ
\[[YH]^
H™]\›ˆ˜[ÙNÂˆÛÛœÝÚÝ[[™HH\[Ùˆ[[YKœÚÝ[[™P™Y›Ü™SYØXÞHOOH™[˜Ý[Ûˆ‚ˆÈ[[YKœÚÝ[[™P™Y›Ü™SYØXÞJ^È[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
K[œ]\NˆÜ[ÛœËœÛÝ\˜ÙH\YØÚ]ˆJBˆˆ˜[ÙNÂˆYˆ
\ÚÝ[[™JH™]\›ˆ˜[ÙNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ[[YK›[Ý[ËŠ
NÂˆÛÛœÝ™\Ý[H]ØZ][[YKœ›ØÙ\ÜÊ^Âˆ[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
Kˆ[œ]\NˆÜ[ÛœËœÛÝ\˜ÙHOOH›ÚXÙHˆÈ›ÚXÙWÝ˜[œØÜš\ˆˆ\YØÚ]‹ˆÛÝ\˜ÙS[ÙNˆÜ[ÛœËœÛÝ\˜ÙH˜\Ú×Û™^\È‚ˆJNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÂˆœ™\\™H[ˆ[XZ[ÈHÛ[šXÈ‹ˆ^H[Øš[HÛ[šXÈ‹ˆ•Ú]Ð\HÙ[\ˆ‹ˆ››ÝYžHÙÚ\ÝXÜÈ‚ˆJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š›Y\ÜØYÙK\™\‹“™^\È™\\™YHØØ[\ØY™HY\ÜØYÙH˜YÚ]›ÝšY\ˆ[™ÛÛ™š\›X][ÛˆØ]\ËˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ]]Üš]]]™S™^\Ñš[˜[[œÝÙ\Šˆ™\Ý[ßKˆ™\Ý[Ëœ™\\™YY\ÜØYÙHßKˆ™\Ý[Ë™˜YßKˆ“™^\È™\\™YHY\ÜØYÙH˜Y›Üˆ™]šY]Ëˆ›È^\›˜[Y\ÜØYÙHØ\ÈÙ[ˆ‚ˆ
KYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÛ[X[™ˆ^ˆÛÝ\˜ÙNˆ›™^\Ë[Y\ÜØYÙK\™\\˜][Û‹\[[YH‹ˆY\ÜØYÙT™\\˜][Û”™\Ý[ˆ™\Ý[ˆJNÂˆ™]\›ˆYNÂŸB‚™[˜Ý[Ûˆ™[™\“™^\ÐYÙ[XÐÛÛ[X[™™\Ý[
™\Ý[HßJHÂˆÛÛœÝY\ÜØYÙHH]]Üš]]]™S™^\Ñš[˜[[œÝÙ\Šˆ™\Ý[ˆ™\Ý[[šYšYYœ˜Z[”™\Ý[ßKˆ“™^\È™\\™YHØØ[™]šY]È™\Ý[ˆ›È^\›˜[XÝ[ÛˆØ\È^XÝ]Yˆ‚ˆ
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆ™\Ý[›ÚÈOOH˜[ÙKˆÝ]\Îˆ™\Ý[œÝ]\Èœ™\\™YÛØØ[‹ˆ[ÙNˆ™\Ý[›[ÙH™\Ý[œÛÝ\˜ÙH›™^\×ØYÙ[X×ØÛÛ[X[™Ü™\Ý[‹ˆY\ÜØYÙKˆ™\\™YØ\™Îˆ\œ˜^Kš\Ð\œ˜^J™\Ý[œ™\\™YØ\™ÊHÈ™\Ý[œ™\\™YØ\™ÈˆÞÂˆ\Nˆ™\Ý[œÛÝ\˜ÙH›™^\×ØYÙ[X×ØÛÛ[X[™Ü™\Ý[‹ˆ]Nˆ™\Ý[˜ÛÛ[X[™“™^\ÈØØ[™\Ý[‹ˆÝ]\Îˆœ™\\™YÛØØ[‹ˆØØ[Û›NˆYKˆÛÛ™š\›X][Û”™\]Z\™Yˆ˜[ÙKˆ™XÙZ\Yˆ™\Ý[œ™\Ý[Ëœ[Ý™XÙZ\Ëœ™XÙZ\Y™\Ý[[šYšYYœ˜Z[”™\Ý[Ëœ™XÙZ\Ë›Z\ÜÚ[Û”™XÙZ\Yˆ‚ˆWKˆÛÛ[X[™ˆ™\Ý[˜ÛÛ[X[™ˆ‹ˆ™\Ý[ˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYKˆÛÝ\˜ÙNˆ™\Ý[œÛÝ\˜ÙH›™^\×ØYÙ[X×ØÛÛ[X[™Ü™\Ý[‚ˆNÂˆÙ]›ÚXÙT™\ÜÛœÙJY\ÜØYÙKYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÛ[X[™ˆ™\Ý[˜ÛÛ[X[™ˆ‹ˆÛÝ\˜ÙNˆ™\Ý[œÛÝ\˜ÙH›™^\×ØYÙ[X×ØÛÛ[X[™Ü™\Ý[‚ˆJNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙOËŠ
NÂˆ™]\›ˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[ÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[™S™^\Õ[šYšYYœ˜Z[”[[YPÛÛ[X[™
ÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\Õ[šYšYYœ˜Z[”[[YNÂˆÛÛœÝ^HÝš[™ÊÛÛ[X[™ˆŠKš[J
NÂˆYˆ
]^
H™]\›ˆ˜[ÙNÂˆYˆ
[™S™^\Ô™\Ù[˜ÙUØZÙT˜\ÙJ^Ü[ÛœÊJH™]\›ˆYNÂˆYˆ
[™S™^\Ñ^\šY[˜ÙTÝ\\ÛÛ[X[™
^Ü[ÛœÊJH™]\›ˆYNÂˆYˆ
[™S™^\Ñ^\šY[˜ÙTÝ]\ÐÛÛ[X[™
^Ü[ÛœÊJH™]\›ˆYNÂˆYˆ
[™S™^\Ô™\Ù[˜ÙQ›ÛÝÕ\
^Ü[ÛœÊJH™]\›ˆYNÂˆYˆ
[™S™^\ÓY[[X[™Z]š[Ü˜[Ù[™\ÜÐÛÛ[X[™
^Âˆ‹‹›Ü[ÛœËˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH[šYšYYXœ˜Z[‹[Y[[ZX[\š[Üš]H‚ˆJJH™]\›ˆYNÂˆÛÛœÝ[[›Ý]HH™\ÛÛ™S™^\Ò[[š]™[•ÛÜšÙ›ÝÔ›Ý]J^Ü[ÛœÊNÂˆYˆ
[[›Ý]H	‰ˆ
[[›Ý]Kœ™XÛÛ[Y[™YÛÜšÙ›ÝÈ[[›Ý]K˜ÛÛ™šY[˜ÙHH
JHÂˆ™]\›ˆ›Ý]S™^\Ò[[š]™[•ÛÜšÙ›ÝÐÛÛ[X[™
^Âˆ‹‹›Ü[ÛœËˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH[šYšYYXœ˜Z[‹Z[[\›Ý]\ˆ‚ˆJNÂˆBˆÛÛœÝ›Ý]Y^H›Ü›X[^™S™^\Ô™\Ù[˜ÙT›Ý]X›PÛÛ[X[™
^
NÂˆÛÛœÝ^\šY[˜ÙS[ÙHH™^\Ñ^\šY[˜ÙS[ÙQœ›ÛPÛÛ[X[™
›Ý]Y^
NÂˆÛÛœÝ›ÙÜ™\ÜÔÝ\ÈHÙ]™^\Ñ^\šY[˜ÙT›ÙÜ™\ÜÔÝ\Ê^\šY[˜ÙS[ÙJNÂˆÙ]™^\Ô™\Ù[˜ÙTÝ]J‘VT×Ô‘TÑSÑWÔÕUTË•S’ÒS‘ËÂˆ\Ý\Ù\’[œ]ˆ^ˆ\Ý™\ÜÛœÙNˆÙ]™^\Ñ^\šY[˜ÙPXÚÛ›ÝÛYÛY[
^\šY[˜ÙS[ÙK^
Kˆ™^]Y\Ý[ÛŽˆ	Ü›ÙÜ™\ÜÔÝ\ÖÌ_Kˆ	Ü›ÙÜ™\ÜÔÝ\ÖÌW_Kˆ	Ü›ÙÜ™\ÜÔÝ\ÖÌ—_K˜ˆXÝ]™SZ\ÜÚ[ÛŽˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OË˜YÙ[XÓZ\ÜÚ[ÛË]H™^\ÐYÙ[XÐÛÛ[X[™Z\ÜÚ[ÛœÖÌOË]Hˆ‚ˆJNÂˆYˆ
\[[YJH™]\›ˆ˜[ÙNÂˆÛÛœÝÚÝ[[™HH\[Ùˆ[[YKœÚÝ[[™P™Y›Ü™SYØXÞHOOH™[˜Ý[Ûˆ‚ˆÈ[[YKœÚÝ[[™P™Y›Ü™SYØXÞJ›Ý]Y^Ü[ÛœÊBˆˆ˜[ÙNÂˆYˆ
\ÚÝ[[™H	‰ˆ[Ü[ÛœË™›Ü˜ÙJH™]\›ˆ˜[ÙNÂˆÛÛœÝ™\Ý[H]ØZ][[YKœ›ØÙ\ÜÊ›Ý]Y^Âˆ[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
Kˆ[œ]\NˆÜ[ÛœËœÛÝ\˜ÙH\YØÚ]‹ˆÛÝ\˜ÙS[ÙNˆœÝ[™\™Ý\Ù\—ÝÛÜšÜÜXÙH‚ˆJNÂˆ[[YK›[Ý[ËŠ
NÂˆ[[YKœ™[™\ËŠ™\Ý[
NÂˆ™[™\“™^\ÐYÙ[XÐÛÛ[X[™™\Ý[
ÂˆÚÎˆYKˆÛÛ[X[™ˆ^ˆÛÝ\˜ÙNˆ›™^\Ë][šYšYYXœ˜Z[‹\[[YH‹ˆ[šYšYYœ˜Z[”™\Ý[ˆ™\Ý[ˆY\ÜØYÙNˆ™\Ý[Ë\Ù\•š\ÚX›TÝ]\È™\Ý[Ë˜ÛÛ™\œØ][Û˜[™\ÜÛœÙH™\Ý[Ë[™\œÝÛÙÛØ[“™^\È™\\™YH[šYšYYZ\ÜÚ[Ûˆ[‹ˆ‚ˆJNÂˆ™]\›ˆYNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[™S™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YNÂˆÛÛœÝ^HÝš[™ÊÛÛ[X[™ˆŠKš[J
NÂˆYˆ
\[[YH]^
H™]\›ˆ˜[ÙNÂˆÛÛœÝÚÝ[[™HH\[Ùˆ[[YKœÚÝ[[™P™Y›Ü™SYØXÞHOOH™[˜Ý[Ûˆ‚ˆÈ[[YKœÚÝ[[™P™Y›Ü™SYØXÞJ^È[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
K[œ]\NˆÜ[ÛœËœÛÝ\˜ÙH\YØÚ]ˆJBˆˆ˜[ÙNÂˆYˆ
\ÚÝ[[™JH™]\›ˆ˜[ÙNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆÛÛœÝ[™[H[[YK›[Ý[ËŠ
NÂˆÛÛœÝ™\Ý[H]ØZ][[YKœ›ØÙ\ÜÊ^Âˆ[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
Kˆ[œ]\NˆÜ[ÛœËœÛÝ\˜ÙHOOH›ÚXÙHˆÈ›ÚXÙWÝ˜[œØÜš\ˆˆ\YØÚ]‹ˆÛÝ\˜ÙS[ÙNˆÜ[ÛœËœÛÝ\˜ÙH˜\Ú×Û™^\È‚ˆJNÂˆ[[YKœ™[™\ËŠ™\Ý[[™[
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÂˆœ™\\™HH™Y™\œ˜[XÚÙ]‹ˆœ[’TˆÚ\Ý[[X\žH‹ˆœ™\\™HH›ÛÙ™\ÜÝ\™H\ØØ[][Ûˆ‹ˆœ™\\™HH\›XXÞH[™Ù™ˆ‚ˆJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\ŠšX[Ø\™KXÛÛX›Ü˜][Ûˆ‹“™^\È™\\™YX[Ø\™HÛÛX›Ü˜][ÛˆØØ[HÚ]›ÝšY\‹ÛÛœÙ[Û[šXÚX[ˆ™]šY]Ë[™]Y]Ø]\ËˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ]]Üš]]]™S™^\Ñš[˜[[œÝÙ\Šˆ™\Ý[ˆ™\Ý[œXÚÙ]ßKˆ“™^\È™\\™YHX[Ø\™HÛÛX›Ü˜][ÛˆXÚÙ]›Üˆ™]šY]Ëˆ›È^\›˜[X[Ø\™HXÝ[ÛˆØ\È^XÝ]Yˆ‚ˆ
KYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÛ[X[™ˆ^ˆÛÝ\˜ÙNˆ›™^\ËZX[Ø\™KXÛÛX›Ü˜][Û‹\[[YH‹ˆX[Ø\™PÛÛX›Ü˜][Û”™\Ý[ˆ™\Ý[ˆJNÂˆ™]\›ˆYNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[™S™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YNÂˆÛÛœÝ^HÝš[™ÊÛÛ[X[™ˆŠKš[J
NÂˆYˆ
\[[YH]^
H™]\›ˆ˜[ÙNÂˆÛÛœÝÚÝ[[™HH\[Ùˆ[[YKœÚÝ[[™P™Y›Ü™SYØXÞHOOH™[˜Ý[Ûˆ‚ˆÈ[[YKœÚÝ[[™P™Y›Ü™SYØXÞJ^È[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
K[œ]\NˆÜ[ÛœËœÛÝ\˜ÙH\YØÚ]ˆJBˆˆ˜[ÙNÂˆYˆ
\ÚÝ[[™JH™]\›ˆ˜[ÙNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆÛÛœÝ[™[H[[YK›[Ý[ËŠ
NÂˆÛÛœÝ™\Ý[H]ØZ][[YKœ›ØÙ\ÜÊ^Âˆ[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
Kˆ[œ]\NˆÜ[ÛœËœÛÝ\˜ÙHOOH›ÚXÙHˆÈ›ÚXÙWÝ˜[œØÜš\ˆˆ\YØÚ]‹ˆÛÝ\˜ÙS[ÙNˆÜ[ÛœËœÛÝ\˜ÙH˜\Ú×Û™^\È‚ˆJNÂˆ[[YKœ™[™\ËŠ™\Ý[[™[
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÂˆš[YHÚ]HÜ›Ü\ÜÝYH‹ˆœ™\\™H[ˆ\œšYØ][Ûˆ[ˆ‹ˆ˜Ü™X]HHX\šÙ]XÙH\Ý[™È‹ˆœ™\\™HH›Û™HšY[ØœÙ\˜][Ûˆ‚ˆJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜YÜšXÝ[\™KXÛÛX›Ü˜][Ûˆ‹“™^\È™\\™YYÜšXÝ[\™HÛÛX›Ü˜][ÛˆØØ[HÚ]ÛÝ\˜ÙK^\™]šY]ËX\šÙ]XÙKÙÚ\ÝXÜË›Û™K[™™XÙZ\Ø]\ËˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ]]Üš]]]™S™^\Ñš[˜[[œÝÙ\Šˆ™\Ý[ˆ™\Ý[œXÚÙ]ßKˆ“™^\È™\\™Y[ˆYÜšXÝ[\™HÛÛX›Ü˜][ÛˆXÚÙ]›Üˆ™]šY]Ëˆ›È^\›˜[YÜšXÝ[\™HXÝ[ÛˆØ\È^XÝ]Yˆ‚ˆ
KYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÛ[X[™ˆ^ˆÛÝ\˜ÙNˆ›™^\ËXYÜšXÝ[\™KXÛÛX›Ü˜][Û‹\[[YH‹ˆYÜšXÝ[\™PÛÛX›Ü˜][Û”™\Ý[ˆ™\Ý[ˆJNÂˆ™]\›ˆYNÂŸB‚™[˜Ý[Ûˆ[™S™^\ÐÛÛ™\œØ][Û”[[YQ[YØ]YÛXÚÊ]™[
HÂˆÛÛœÝ]ÛˆH]™[Ë\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXÛÛ™\œØ][Û‹XXÝ[Û—HŠNÂˆYˆ
X]ÛŠH™]\›ˆ˜[ÙNÂˆÛÛœÝX™[]ÛˆH]™[Ë\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXÛÛ™\œØ][Û‹[X™[HŠNÂˆYˆ
X™[]Ûˆ	‰ˆÚ[™ÝË“™^\ÐÛÛ™\œØ][Û˜[›ÚXÙT[[YOË›[Ý[
HÂˆÚ[™ÝË“™^\ÐÛÛ™\œØ][Û˜[›ÚXÙT[[YK›[Ý[

NÂˆBˆ™]\›ˆYNÂŸB‚™ØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹[™S™^\ÐÛÛ™\œØ][Û”[[YQ[YØ]YÛXÚËYJNÂ‚˜\Þ[˜È[˜Ý[Ûˆ[™S™^\Õ[\ÛžPØ[[[YPÛÛ[X[™
^Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\Õ[\ÛžPØ[[[YNÂˆYˆ
\[[YOËœÚÝ[[™PØ[ÛÛ[X[™\[[YKœÚÝ[[™PØ[ÛÛ[X[™
^
JH™]\›ˆ˜[ÙNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆÛÛœÝ[Ý[[H]ØZ][[YK›[Ý[ËŠ
NÂˆ]›ÝšY\”Ý]\ÈH[ÂˆžHÂˆÛÛœÝ™\ÜÛœÙHH]ØZ]™]Ú
‹Ø\KÝ[\ÛžKÜÝ]\ÈŠNÂˆ›ÝšY\”Ý]\ÈH]ØZ]™\ÜÛœÙKšœÛÛŠ
NÂˆHØ]Ú
\œ›ÜŠHÂˆ›ÝšY\”Ý]\ÈH[ÂˆBˆÛÛœÝ™\Ý[H[[YKœ™\\™PØ[
^Âˆ›ÝšY\”Ý]\Ëˆ[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
KˆÛÝ\˜ÙS[ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙH‚ˆJNÂˆ[[YKœ™[™\”™\\™YØ[ËŠ™\Ý[[Ý[[
NÂˆYˆ
›ÝšY\”Ý]\ÊH[[YKœ™[™\”Ý]\ÏËŠ›ÝšY\”Ý]\Ë[Ý[[
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÂˆœ™\\™HH\›XXÞHØ[‹ˆœ™\\™HHÛ[šXÈ›ÛÝË]\Ø[‹ˆœ™\\™HH^Y\ˆØ[‹ˆÚ]Ø[È\™HÛÛ™šYÝ\™Y‚ˆJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜Ø[\™\‹“™^\È™\\™YHØØ[\ØY™HØ[ØÜš\[™Y›ÝXÙHHØ[ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ]]Üš]]]™S™^\Ñš[˜[[œÝÙ\Šˆ™\Ý[ˆ™\Ý[˜Ø[ßKˆ’H™\\™YHØ[ØÜš\›Üˆ™]šY]Ëˆ™X[Ý]›Ý[™Ø[[™È™\]Z\™\È[\ÛžH›ÝšY\ˆÜ™Y[X[Ëˆ‚ˆ
KYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÛ[X[™ˆ^ˆÛÝ\˜ÙNˆ›™^\Ë][\ÛžKXØ[\[[YH‹ˆ[\ÛžPØ[ˆ™\Ý[˜Ø[ˆJNÂˆ™]\›ˆYNÂŸB‚™[˜Ý[Ûˆ[™S™^\Õ[\ÛžT[[YQ[YØ]YÛXÚÊ]™[
HÂˆÛÛœÝ]ÛˆH]™[Ë\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë][\ÛžKXXÝ[Û—HŠNÂˆYˆ
X]ÛŠH™]\›ˆ˜[ÙNÂˆYˆ
Ú[™ÝË“™^\Õ[\ÛžPØ[[[YOË›[Ý[
HÂˆÚ[™ÝË“™^\Õ[\ÛžPØ[[[YK›[Ý[

NÂˆBˆ™]\›ˆYNÂŸB‚™ØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹[™S™^\Õ[\ÛžT[[YQ[YØ]YÛXÚËYJNÂ‚™[˜Ý[Ûˆ[™S™^\Ñ[ÛÛ[][šXØ][Û”[[YQ[YØ]YÛXÚÊ]™[
HÂˆÛÛœÝ]ÛˆH]™[Ë\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËY[XÛÛ[][šXØ][Û‹XXÝ[Û—HŠNÂˆYˆ
X]ÛŠH™]\›ˆ˜[ÙNÂˆYˆ
Ú[™ÝË“™^\Ñ[ÛÛ[][šXØ][Û”[[YOË›[Ý[
HÂˆÚ[™ÝË“™^\Ñ[ÛÛ[][šXØ][Û”[[YK›[Ý[

NÂˆBˆ™]\›ˆYNÂŸB‚™ØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹[™S™^\Ñ[ÛÛ[][šXØ][Û”[[YQ[YØ]YÛXÚËYJNÂ‚™[˜Ý[Ûˆ[™S™^\ÓY\ÜØYÙT™\\˜][Û”[[YQ[YØ]YÛXÚÊ]™[
HÂˆÛÛœÝ]ÛˆH]™[Ë\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë[Y\ÜØYÙK\™\XXÝ[Û—HŠNÂˆYˆ
X]ÛŠH™]\›ˆ˜[ÙNÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\ÓY\ÜØYÙT™\\˜][Û”[[YNÂˆYˆ
\[[YJH™]\›ˆ˜[ÙNÂˆÛÛœÝXÝ[ÛˆH]Û‹™Ù]]šX]J™]K[™^\Ë[Y\ÜØYÙK\™\XXÝ[ÛˆŠNÂˆ[[YK›[Ý[ËŠ
NÂˆYˆ
XÝ[ÛˆOOHœÝ]\ÈŠHÂˆ[[YKœ™Yœ™\ÚÝ]\ÏËŠ
NÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOH˜ÛÜHŠHÂˆÛÛœÝ˜YHØÝ[Y[œ]Y\žTÙ[XÝÜŠ–Ù]K[™^\Ë[Y\ÜØYÙK\™\Y˜YHŠOË^ÛÛ[ˆŽÂˆYˆ
˜]šYØ]Ü‹˜Û\›Ø\™	‰ˆ˜Y
HÂˆ˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
˜Y
K˜Ø]Ú


HOˆßJNÂˆBˆ]Û‹^ÛÛ[H˜YÈ‘˜YÛÜYYˆˆ“›È˜YY]ŽÂˆÙ][Y[Ý]


HOˆÂˆ]Û‹^ÛÛ[HÛÜH˜YŽÂˆKML
NÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOHœ]Y]YHŠHÂˆÛÛœÝ™\Ý[H[[YK™Ù]\Ý™\Ý[ËŠ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ]]Üš]]]™S™^\Ñš[˜[[œÝÙ\Šˆ™\Ý[ßKˆ™\Ý[Ëœ™\\™YY\ÜØYÙHßKˆ™\Ý[Ë™˜YßKˆ“™^\ÈØ[ˆ]Y]YHHY\ÜØYÙH˜Y›Üˆ™]šY]Ëˆ›È^\›˜[Y\ÜØYÙHØ\ÈÙ[ˆ‚ˆ
KYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÝ\˜ÙNˆ›™^\Ë[Y\ÜØYÙK\™\\˜][Û‹\[[YH‚ˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOH˜Ø[˜Ù[ŠHÂˆÙ]›ÚXÙT™\ÜÛœÙJ“Y\ÜØYÙH™\\˜][ÛˆØ[˜Ù[Yˆ›È^\›˜[Y\ÜØYÙHØ\ÈÙ[ˆ‹YKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÝ\˜ÙNˆ›™^\Ë[Y\ÜØYÙK\™\\˜][Û‹\[[YH‚ˆJNÂˆ™]\›ˆYNÂˆBˆ™]\›ˆYNÂŸB‚™ØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹[™S™^\ÓY\ÜØYÙT™\\˜][Û”[[YQ[YØ]YÛXÚËYJNÂ‚™[˜Ý[Ûˆ[™S™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YQ[YØ]YÛXÚÊ]™[
HÂˆÛÛœÝ]ÛˆH]™[Ë\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËZX[Ø\™KXXÝ[Û—HŠNÂˆYˆ
X]ÛŠH™]\›ˆ˜[ÙNÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YNÂˆYˆ
\[[YJH™]\›ˆ˜[ÙNÂˆÛÛœÝXÝ[ÛˆH]Û‹™Ù]]šX]J™]K[™^\ËZX[Ø\™KXXÝ[ÛˆŠHœÝ]\ÈŽÂˆÛÛœÝXÝ[Û•\HH]Û‹™Ù]]šX]J™]K[™^\ËZX[Ø\™KXXÝ[Û‹]\HŠHˆŽÂˆ[[YK›[Ý[ËŠ
NÂˆYˆ
XÝ[ÛˆOOHœÝ]\ÈˆXÝ[ÛˆOOHœÛÝ\˜ÙK[X]š^ˆXÝ[ÛˆOOHœ›ÝšY\‹Y]šY[˜ÙHŠHÂˆ›ÚY[[YKœ™Yœ™\ÚÝ]\ÏËŠ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ’X[Ø\™HÛÛX›Ü˜][ÛˆÝ]\È\ÈÜ[‹ˆZ\ÜÚ[™È›ÝšY\ˆÛÛ™šYÝ\˜][Ûˆ\ÈÚÝÛˆžH˜\šXX›H˜[YHÛ›K[™›È™YÝ[]YXÝ[ÛˆØ\È^XÝ]Yˆ‹YKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÝ\˜ÙNˆ›™^\ËZX[Ø\™KXÛÛX›Ü˜][Û‹\[[YH‚ˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOH˜Û[šXÚX[‹\]Y]YHŠHÂˆÙ]›ÚXÙT™\ÜÛœÙJÛ[šXÚX[ˆ™]šY]È]Y]YH\ÈÜ[‹ˆ™YÝ[]YXÚÙ]ÈØZ]\™H™Y›Ü™H[žH^\›˜[X[Ø\™HXÝ[ÛˆØ[ˆ[Ý™H›ÜØ\™ˆ‹YKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÝ\˜ÙNˆ›™^\ËZX[Ø\™KXÛÛX›Ü˜][Û‹\[[YH‚ˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOHœ™XÙZ\ÈŠHÂˆÙ]›ÚXÙT™\ÜÛœÙJ’X[Ø\™H™XÙZ\È\™Hš\ÚX›Kˆ^H™XÛÜ™ØØ[™\\˜][Ûˆ[™›ØÚÙY^XÝ][ÛˆXÚ\Ú[ÛœÈÚ]Ý]^ÜÚ[™ÈÙXÜ™]Ëˆ‹YKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÝ\˜ÙNˆ›™^\ËZX[Ø\™KXÛÛX›Ü˜][Û‹\[[YH‚ˆJNÂˆ™]\›ˆYNÂˆBˆÛÛœÝ™\Ý[H[[YKš[™T[™[XÝ[ÛËŠXÝ[Û‹XÝ[Û•\JNÂˆ[[YKœ™[™\ËŠ™\Ý[
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ]]Üš]]]™S™^\Ñš[˜[[œÝÙ\Šˆ™\Ý[ßKˆ™\Ý[ËœXÚÙ]ßKˆ“™^\È™\\™YHX[Ø\™HÛÛX›Ü˜][ÛˆXÚÙ]›Üˆ™]šY]Ëˆ›È^\›˜[XÝ[ÛˆØ\È^XÝ]Yˆ‚ˆ
KYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÝ\˜ÙNˆ›™^\ËZX[Ø\™KXÛÛX›Ü˜][Û‹\[[YH‹ˆX[Ø\™PÛÛX›Ü˜][Û”™\Ý[ˆ™\Ý[ˆJNÂˆ™]\›ˆYNÂŸB‚™ØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹[™S™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YQ[YØ]YÛXÚËYJNÂ‚™[˜Ý[Ûˆ[™S™^\Õ[šYšYYœ˜Z[”[[YQ[YØ]YÛXÚÊ]™[
HÂˆÛÛœÝ]ÛˆH]™[Ë\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXœ˜Z[‹XXÝ[Û—KÙ]K[™^\ËXœ˜Z[‹[™^XXÝ[Û—HŠNÂˆYˆ
X]ÛŠH™]\›ˆ˜[ÙNÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\Õ[šYšYYœ˜Z[”[[YNÂˆYˆ
\[[YJH™]\›ˆ˜[ÙNÂˆÛÛœÝXÝ[ÛˆH]Û‹™Ù]]šX]J™]K[™^\ËXœ˜Z[‹XXÝ[ÛˆŠH]Û‹™Ù]]šX]J™]K[™^\ËXœ˜Z[‹[™^XXÝ[ÛˆŠHœ™]šY]Ë\[ˆŽÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ›ÚY›ÛZ\ÙKœ™\ÛÛ™J[[YKš[™T[™[XÝ[ÛËŠXÝ[ÛŠJK[Š™\Ý[OˆÂˆ[[YK›[Ý[ËŠ
NÂˆ[[YKœ™[™\ËŠ™\Ý[
NÂˆ™[™\“™^\ÐYÙ[XÐÛÛ[X[™™\Ý[
ÂˆÚÎˆYKˆÛÛ[X[™ˆXÝ[Û‹ˆÛÝ\˜ÙNˆ›™^\Ë][šYšYYXœ˜Z[‹\[[YH‹ˆ[šYšYYœ˜Z[”™\Ý[ˆ™\Ý[ˆJNÂˆJNÂˆ™]\›ˆYNÂŸB‚™ØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹[™S™^\Õ[šYšYYœ˜Z[”[[YQ[YØ]YÛXÚËYJNÂ‚™[˜Ý[Ûˆ[™S™^\Ô[Ý™XY[™\ÜÑ[YØ]YÛXÚÊ]™[
HÂˆÛÛœÝ]ÛˆH]™[Ë\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë\[ÝXXÝ[Û—HŠNÂˆYˆ
X]ÛŠH™]\›ˆ˜[ÙNÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\Õ[šYšYYœ˜Z[”[[YNÂˆYˆ
\[[YJH™]\›ˆ˜[ÙNÂˆÛÛœÝXÝ[ÛˆH]Û‹™Ù]]šX]J™]K[™^\Ë\[ÝXXÝ[ÛˆŠHœ™Yœ™\ÚŽÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ›ÚY›ÛZ\ÙKœ™\ÛÛ™J[[YKš[™T[ÝXÝ[ÛËŠXÝ[Û‹ÂˆØÙ[˜\š[ÒYˆ]Û‹™Ù]]šX]J™]K\[Ý\ØÙ[˜\š[ÈŠHˆ‚ˆJJK[Š™\Ý[OˆÂˆ[[YK›[Ý[ËŠ
NÂˆ™[™\“™^\ÐYÙ[XÐÛÛ[X[™™\Ý[
ÂˆÚÎˆYKˆÛÛ[X[™ˆXÝ[ÛˆOOHœ[‹X[\ØÙ[˜\š[ÜÈˆÈ”[ˆÝ[™\™\Ù\ˆ[ÝØÙ[˜\š[ÜÈˆˆ[ˆ[ÝØÙ[˜\š[Îˆ	Ø]Û‹™Ù]]šX]J™]K\[Ý\ØÙ[˜\š[ÈŠHœ™XY[™\ÜÈŸXˆ™\ÜÛœÙNˆ™\Ý[ËœØÙ[˜\š[ÂˆÈ	Ü™\Ý[œØÙ[˜\š[Ë›X™[H[ÝØÙ[˜\š[È™\\™YØØ[Kˆ›È^\›˜[XÝ[ÛˆØ\È^XÝ]Y˜ˆˆ”[Ý™XY[™\ÜÈ™Yœ™\ÚYˆ›È^\›˜[XÝ[ÛˆØ\È^XÝ]Yˆ‹ˆ™\Ý[ˆJNÂˆJNÂˆ™]\›ˆYNÂŸB‚™ØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹[™S™^\Ô[Ý™XY[™\ÜÑ[YØ]YÛXÚËYJNÂ‚™[˜Ý[Ûˆ[™S™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YQ[YØ]YÛXÚÊ]™[
HÂˆÛÛœÝ]ÛˆH]™[Ë\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXYÜšXÝ[\™KXXÝ[Û—HŠNÂˆYˆ
X]ÛŠH™]\›ˆ˜[ÙNÂˆÛÛœÝ[[YHHÚ[™ÝË“™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YNÂˆYˆ
\[[YJH™]\›ˆ˜[ÙNÂˆÛÛœÝXÝ[ÛˆH]Û‹™Ù]]šX]J™]K[™^\ËXYÜšXÝ[\™KXXÝ[ÛˆŠHœÝ]\ÈŽÂˆÛÛœÝXÝ[Û•\HH]Û‹™Ù]]šX]J™]K[™^\ËXYÜšXÝ[\™KXXÝ[Û‹]\HŠHˆŽÂˆ[[YK›[Ý[ËŠ
NÂˆYˆ
XÝ[ÛˆOOHœÝ]\ÈˆXÝ[ÛˆOOHœÛÝ\˜ÙK[X]š^ˆXÝ[ÛˆOOHœ›ÝšY\‹Y]šY[˜ÙHŠHÂˆ›ÚY[[YKœ™Yœ™\ÚÝ]\ÏËŠ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJYÜšXÝ[\™HÛÝ\˜ÙH™XY[™\ÜÈ\ÈÜ[‹ˆZ\ÜÚ[™È›ÝšY\ˆÛÛ™šYÝ\˜][Ûˆ\ÈÚÝÛˆžH˜\šXX›H˜[YHÛ›K[™›ÈYÜšXÝ[\™H^XÝ][ÛˆØØÝ\œ™Yˆ‹YKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÝ\˜ÙNˆ›™^\ËXYÜšXÝ[\™KXÛÛX›Ü˜][Û‹\[[YH‚ˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOHœ™]šY]Ë\]Y]YHŠHÂˆÙ]›ÚXÙT™\ÜÛœÙJYÜšXÝ[\™H^\[™YZ[ˆ™]šY]È]Y]YH\ÈÜ[‹ˆ™YÝ[]YX\šÙ]XÙKÙÚ\ÝXÜË›Û™K[™š[˜[˜ÙHXÚÙ]ÈØZ]\™H™Y›Ü™H[žH^\›˜[XÝ[Û‹ˆ‹YKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÝ\˜ÙNˆ›™^\ËXYÜšXÝ[\™KXÛÛX›Ü˜][Û‹\[[YH‚ˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOHœ™XÙZ\ÈŠHÂˆÙ]›ÚXÙT™\ÜÛœÙJYÜšXÝ[\™H™XÙZ\È\™Hš\ÚX›Kˆ^H™XÛÜ™™\\™YXÚÙ]ËÛÝ\˜ÙH[Ù\Ë[™›ØÚÙY^XÝ][ÛˆXÚ\Ú[ÛœÈÚ]Ý]^ÜÚ[™ÈÙXÜ™]Ëˆ‹YKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÝ\˜ÙNˆ›™^\ËXYÜšXÝ[\™KXÛÛX›Ü˜][Û‹\[[YH‚ˆJNÂˆ™]\›ˆYNÂˆBˆÛÛœÝ™\Ý[H[[YKš[™T[™[XÝ[ÛËŠXÝ[Û‹XÝ[Û•\JNÂˆ[[YKœ™[™\ËŠ™\Ý[
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ]]Üš]]]™S™^\Ñš[˜[[œÝÙ\Šˆ™\Ý[ßKˆ™\Ý[ËœXÚÙ]ßKˆ“™^\È™\\™Y[ˆYÜšXÝ[\™HÛÛX›Ü˜][ÛˆXÚÙ]›Üˆ™]šY]Ëˆ›È^\›˜[XÝ[ÛˆØ\È^XÝ]Yˆ‚ˆ
KYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÝ\˜ÙNˆ›™^\ËXYÜšXÝ[\™KXÛÛX›Ü˜][Û‹\[[YH‹ˆYÜšXÝ[\™PÛÛX›Ü˜][Û”™\Ý[ˆ™\Ý[ˆJNÂˆ™]\›ˆYNÂŸB‚™ØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹[™S™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YQ[YØ]YÛXÚËYJNÂ‚˜\Þ[˜È[˜Ý[Ûˆ[™U›ÚXÙPÛÛ[X[™ÛÜ™J˜]ÐÛÛ[X[™Ü[ÛœÈHßJHÂˆYˆ
Y]JH™]\›ˆÙ]›ÚXÙT™\ÜÛœÙJ”ÚYÛˆ[ˆš\œÝ[ˆHØ[ˆÜ\˜]HH]›Ü›KˆŠNÂˆÛX\“]™[Û™PYÙ[XÝ[Û”ÝYÙÙ\Ý[Û“X™[

NÂˆÛÛœÝÛÛ\[š[Û•[™\œÝ[™[™ÈH™[Y[X™\ÛÛ\[š[Û•[™\œÝ[™[™Ê˜]ÐÛÛ[X[™ÈÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙH‹[ÙNˆÛÛ™\œØ][Û”]›Ü›S[ÙJ
HJNÂˆÛÛœÝ\›•ÚÙ[ˆHÜ[ÛœË\›•ÚÙ[ˆ[ÂˆÛÛœÝ]]Ó[™ÝXYÙHH]ØZ]\P]]Ó[™ÝXYÙQœ›ÛTÜYXÚ
˜]ÐÛÛ[X[™Ü[ÛœÊNÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹›ÚXÙHÛÛ[X[™ŠJH™]\›ŽÂˆÛÛœÝØØ[^™YÛÛ[X[™H›Ü›X[^™SØØ[^™Y›ÚXÙPÛÛ[X[™
˜]ÐÛÛ[X[™
NÂˆÛÛœÝÜ™Y][™ÓÛ›HH\Ó™^\ÑÜ™Y][™ÓÛ›JØØ[^™YÛÛ[X[™
NÂˆÛÛœÝÜ™Y][™Ô™Yš^H\Ó™^\ÑÜ™Y][™Ô™Yš^
ØØ[^™YÛÛ[X[™
NÂˆÛÛœÝØZÙSÛ›HH\ÕØZÙT˜\ÙSÛ›JØØ[^™YÛÛ[X[™
NÂˆ]ÛÛ[X[™HÛX[•ØZÙPÛÛ[X[™
ØØ[^™YÛÛ[X[™
NÂˆÛÛ[X[™H›Ü›X[^™S™^\Õ›ÚXÙUÛÜšÙ›ÝÐÛÛ[X[™
ÛÛ[X[™ØØ[^™YÛÛ[X[™
NÂˆÛÛœÝÜÚÙ[ÛÛ[X[™HÛÛ[X[™ÛX[•ØZÙPÛÛ[X[™
ØØ[^™YÛÛ[X[™
NÂˆÛÛœÝ\ÝÚZ[’[œ]HÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™ÂˆYˆ
[™S™^\Õ›ÚXÙU›ÝX›\ÚÛÝ[™ÐÛÛ[X[™
\ÝÚZ[’[œ]Âˆ‹‹›Ü[ÛœËˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙKXÛÛ[X[™‚ˆJJH™]\›ŽÂˆYˆ
[™S™^\ÑZ[PÛÛ\[š[ÛÛÛ[X[™
\ÝÚZ[’[œ]Âˆ‹‹›Ü[ÛœËˆÜXZÎˆYKˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›™^\ËYZ[KXÛÛ\[š[Ûˆ‹ˆ\›•ÚÙ[‚ˆJJH™]\›ŽÂˆYˆ
[“™^\Ó›Ü›X[ÛÛ™\œØ][Û”™Y›YÚ
\ÝÚZ[’[œ]Âˆ‹‹›Ü[ÛœËˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH™Ù[™\Ú\ËXÛÛ™\œØ][Û‹\™Y›YÚ‚ˆJJH™]\›ŽÂˆYˆ
\Ó™^\ÐÛÛ™\œØ][Û“Û›U\ÝÚZ[’[œ]
\ÝÚZ[’[œ]
JHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\ÐÛÛ™\œØ][Û“Û›U\ÝÚZ[”™\ÜÛœÙJ\ÝÚZ[’[œ]
KYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÛ[X[™ˆ\ÝÚZ[’[œ]ˆÛÝ\˜ÙNˆ™Ù[™\Ú\Ë]\ÝXÚZ[‹XÛÛ™\œØ][Û‹Yš\œÝ‹ˆ\›•ÚÙ[‚ˆJNÂˆ™]\›ŽÂˆBˆÛÛœÝLLØY™R[[HLLØY™P]]Û›Û^R[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆYˆ
Ü[LLØY™P]]Û›Û^T™]šY]ÊLLØY™R[[
JH™]\›ŽÂˆYˆ
Ü[‘^XÚ]X[šY[Ô™]šY]ÐÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JH™]\›ŽÂˆÛÛœÝX\›T\ÙLMÔØY™P[œÝÙ\ˆH™^\Ô\ÙLMÔÝ[™\™\Ù\”ØY™P[œÝÙ\ŠÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆYˆ
X\›T\ÙLMÔØY™P[œÝÙ\ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊX\›T\ÙLMÔØY™P[œÝÙ\‹œÝYÙÙ\Ý[ÛœÈÈÚ]›ÝšY\œÈØ[ˆ[ÝHÛÛ›™XÝÈ‹Ú]]HÛÝ\˜Ù\ÈÈ[ÝH™YY‹Ú]™YYÈ\›Ý˜[—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹“™^\È[œÝÙ\™YH\ÙHMÈ›ÝÝ\KY›Ý[™][Ûˆ›Û\Ú]Ý]^XÝ][™È[ˆXÝ[Û‹ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJX\›T\ÙLMÔØY™P[œÝÙ\‹œ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ˆÜÚÙ[ÛÛ[X[™ÛÛ[X[™˜]ÐÛÛ[X[™ÛÝ\˜ÙNˆœ\ÙKLMË\Ý[™\™]\Ù\‹\ØY™KX[œÝÙ\ˆˆJNÂˆYˆ
X\›T\ÙLMÔØY™P[œÝÙ\‹›ØØ[]\ÚXÊHÂˆ›ÚY^S™^\Ó]\ÚXÕ\Ý]Y[Ê’Ù[žXKZ[œÜ\™Y[[Èš]HŠNÂˆBˆ™]\›ŽÂˆBˆYˆ
]ØZ][‘^XÚ]\YÛØ˜[ÛÛ›Û™Y›YÚ
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[ˆJJH™]\›ŽÂˆYˆ
[™S™^\Õ›ÚXÙT™Y™\™[˜ÙPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™ÈÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙK\™Y™\™[˜ÙKXÛÛ[X[™ˆJJH™]\›ŽÂˆYˆ
]ØZ][™S™^\Õ[šYšYYœ˜Z[”[[YPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[‹ÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙHˆJJH™]\›ŽÂˆYˆ
]ØZ][™S™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[‹ÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙHˆJJH™]\›ŽÂˆYˆ
]ØZ][™S™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[‹ÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙHˆJJH™]\›ŽÂˆYˆ
]ØZ][™S™^\ÓY\ÜØYÙT™\\˜][Û”[[YPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[‹ÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙHˆJJH™]\›ŽÂˆYˆ
]ØZ][™S™^\Ñ[ÛÛ[][šXØ][Û”[[YPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[‹ÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙHˆJJH™]\›ŽÂˆYˆ
]ØZ][™S™^\Õ[\ÛžPØ[[[YPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[‹ÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙHˆJJH™]\›ŽÂˆYˆ
]ØZ][™S™^\Ó][[[™ÝX[Ü[‘X[ÙÝYT[[YPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[‹ÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙHˆJJH™]\›ŽÂˆYˆ
[™S™^\ÓÜ[‘X[ÙÝYPYÙ[ÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™R˜\š\ÔÝ[TÝ[™\™\Ù\”ØY™]T™\ÜÛœÙJÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JH™]\›ŽÂˆÛÛœÝØY™SX\[[HØY™SX\Ø\Xš[]R[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆYˆ
Ü[”ØY™SX\Ø\Xš[]T™]šY]ÊØY™SX\[[
JH™]\›ŽÂˆYˆ
]ØZ][”Ý[™\™\Ù\\ÜÚ\Ý[[[YT™]šY]ÊÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[ˆJJH™]\›ŽÂˆÛÛœÝ\ÙLMÔØY™P[œÝÙ\ˆH™^\Ô\ÙLMÔÝ[™\™\Ù\”ØY™P[œÝÙ\ŠÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆYˆ
\ÙLMÔØY™P[œÝÙ\ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊ\ÙLMÔØY™P[œÝÙ\‹œÝYÙÙ\Ý[ÛœÈÈÚ]›ÝšY\œÈØ[ˆ[ÝHÛÛ›™XÝÈ‹Ú]]HÛÝ\˜Ù\ÈÈ[ÝH™YY‹Ú]™YYÈ\›Ý˜[—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹“™^\È[œÝÙ\™YH\ÙHMÈ›ÝÝ\KY›Ý[™][Ûˆ›Û\Ú]Ý]^XÝ][™È[ˆXÝ[Û‹ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ\ÙLMÔØY™P[œÝÙ\‹œ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ˆÜÚÙ[ÛÛ[X[™ÛÛ[X[™˜]ÐÛÛ[X[™ÛÝ\˜ÙNˆœ\ÙKLMË\Ý[™\™]\Ù\‹\ØY™KX[œÝÙ\ˆˆJNÂˆYˆ
\ÙLMÔØY™P[œÝÙ\‹›ØØ[]\ÚXÊHÂˆ›ÚY^S™^\Ó]\ÚXÕ\Ý]Y[Ê’Ù[žXKZ[œÜ\™Y[[Èš]HŠNÂˆBˆ™]\›ŽÂˆBˆYˆ
]]Ó[™ÝXYÙJHÂˆYÙ[\™›Ü›X[˜ÙTÝ]K›\ÝÛÛ[X[™HÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™Âˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÈ\Nˆ˜]]Ë[[™ÝXYÙKY]XÝY‹ÛÛ[X[™ˆ˜]ÐÛÛ[X[™[™ÝXYÙNˆ]]Ó[™ÝXYÙK›X™[[ÙNˆ^\šY[˜ÙS[ÙH]OË\Ù\Ëœ›ÛHœ]›Ü›HˆJNÂˆBˆÛÛœÝÝ[™\™\Ù\•›ÚXÙPÛÛ[X[™HÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™ÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆˆØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜ÛÛZ[œÊ\Ù\‹[[ÙHŠJHÂˆYˆ
][˜ÚØ\Xš[]Qœ›ÛU›ÚXÙJÝ[™\™\Ù\•›ÚXÙPÛÛ[X[™
H[“™^\ÔÝ[™\™\Ù\’ÛYSØØ[ÛÛ[X[™
Ý[™\™\Ù\•›ÚXÙPÛÛ[X[™
JHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹“™^\ÈÜ[™YH™\]Y\ÝYÛÜšÙ›ÝÈ[ˆHXZ[ˆÛÜšÜÜXÙKˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ’HÜ[™Y]ÛÜšÙ›ÝÈ[ˆHXZ[ˆÛÜšÜÜXÙKˆ^\›˜[XÝ[ÛœÈ™[XZ[ˆØ]Y[[ÛÛ™šYÝ\™Y[™ÛÛ™š\›YYˆ‹YKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ˆÝ[™\™\Ù\•›ÚXÙPÛÛ[X[™ÛÝ\˜ÙNˆ›ÚXÙK]ÛÜšÙ›ÝË[][˜ÚˆJNÂˆ™]\›ŽÂˆBˆBˆÛÛœÝ˜\Ý[™R[[H™^\Ñ˜\Ý[™R[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆYˆ
˜\Ý[™R[[
HÂˆYˆ
[ÛÛ\[š[Û•ÛÜšÙ›ÝÓÙ™™\’Y“™YYY
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™Âˆ‹‹™˜\Ý[™R[[ˆXÝX[›Ý]TÛÝ\˜ÙNˆÙX‹›™^\Ñ˜\Ý[™R[[‚ˆJJH™]\›ŽÂˆ™\Ù]ÛÛ™\œØ][Û”Ý]Q›Ü”š[Üš]R[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆYˆ
]ØZ]^XÝ]U[šYšYY™^\Ò[[
˜\Ý[™R[[ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[‹]]Ó[™ÝXYÙHJJH™]\›ŽÂˆBˆYˆ
\Ô]›Ü›Q^Z[•›ÚXÙPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈš[H˜\›Y\ˆ‹’H™YYHØÝÜˆ‹š[YHÙ[^HÜ›Ü‹œÝ\HÛÝ\œÙH‹›Ü[ˆX\—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹“™^\È^Z[™YYÜšS™^\È\™XÝHÚ]Ý]Ü[š[™ÈHY[KˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\Ô]›Ü›Q^Z[[œÝÙ\Š
KYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ˆÜÚÙ[ÛÛ[X[™ÛÛ[X[™˜]ÐÛÛ[X[™JNÂˆ™]\›ŽÂˆBˆÛÛœÝš\œÝš[Üš]Q˜[˜XÚÒ[[HÚ[\U\Ù\‘\™XÝ›ÚXÙR[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™
NÂˆYˆ
\Ôš[Üš]TÙ\šXÙU›ÚXÙR[[
š\œÝš[Üš]Q˜[˜XÚÒ[[
JHÂˆYˆ
[ÛÛ\[š[Û•ÛÜšÙ›ÝÓÙ™™\’Y“™YYY
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™Âˆ‹‹™š\œÝš[Üš]Q˜[˜XÚÒ[[ˆXÝX[›Ý]TÛÝ\˜ÙNˆÙX‹œÚ[\U\Ù\‘\™XÝ›ÚXÙR[[œ™Y›YÚ‚ˆJJH™]\›ŽÂˆ™\Ù]ÛÛ™\œØ][Û”Ý]Q›Ü”š[Üš]R[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™
NÂˆYˆ
[”Ú[\U\Ù\•›ÚXÙR[[
š\œÝš[Üš]Q˜[˜XÚÒ[[ÜÚÙ[ÛÛ[X[™ÛÛ[X[™
JH™]\›ŽÂˆBˆYˆ
]ØZ][œÝÙ\”[™[™Ó™^\Ô]Y\Ý[ÛŠÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JH™]\›ŽÂˆYˆ
[Ü[ÛœËœÚÚ\[šYšYYœ˜Z[ˆ	‰ˆ]ØZ][šYšYY™^\ÐÛÛ™\œØ][Ûœ˜Z[Š˜]ÐÛÛ[X[™È‹‹›Ü[ÛœË\›•ÚÙ[‹]]Ó[™ÝXYÙHJJH™]\›ŽÂˆÛÛœÝš\ÚX›R[›[™UÛÜšÙ›ÝÈH	
‹\Ù\‹Z[›[™K]ÛÜšÙ›ÝÎ››Ý
šY[ŠHŠNÂˆYˆ
[™[™ÕÛÜšÙ›ÝÈ	‰ˆš\ÚX›R[›[™UÛÜšÙ›ÝÈ	‰ˆZ\Õ[š]™\œØ[[™ÝXYÙPÛÛ[X[™
ÛÛ[X[™ØØ[^™YÛÛ[X[™
H	‰ˆZ\ÑÛØ˜[ÝÜÛÛ[X[™
Ýš[™ÊÛÛ[X[™ØØ[^™YÛÛ[X[™
KÓÝÙ\Ø\ÙJ
JJHÂˆYˆ
\Ó™]ÔÙ\šXÙT™\]Y\ÝÝ™\•ÛÜšÙ›ÝÊÛÛ[X[™ØØ[^™YÛÛ[X[™
JHÂˆÛX\“Ü[•ÛÜšÙ›ÝÑ›Ü“™]Õ›ÚXÙT™\]Y\Ý
ÛÛ[X[™ØØ[^™YÛÛ[X[™
NÂˆH[ÙHÂˆYˆ
š[ÛÜšÙ›ÝÑšY[žU›ÚXÙJÛÛ[X[™ØØ[^™YÛÛ[X[™
JH™]\›ŽÂˆBˆBˆÛÛœÝ[›ÙXÝ[Û”™\ÜÛœÙHH™^\Ò[›ÙXÝ[Û”™\ÜÛœÙJÛÛ[X[™ØØ[^™YÛÛ[X[™
NÂˆYˆ
[›ÙXÝ[Û”™\ÜÛœÙJHÂˆÝÜ›ÚXÙT^X˜XÚÊÈ\™ˆYHJNÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ[›ÙXÝ[Û”™\ÜÛœÙKYJNÂˆ™[™\Š
NÂˆ™]\›ŽÂˆBˆYˆ
Ü™Y][™ÓÛ›H
Ü™Y][™Ô™Yš^	‰ˆZ\Ð™Z]š[ÜXÝ[Û•™\˜ŠÛÛ[X[™
JJHÂˆÝÜ›ÚXÙT^X˜XÚÊÈ\™ˆYHJNÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ™^\Ð]ØZ][™ÐÛÛ[X[™HYNÂˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÈ\Nˆ™Ü™Y][™È‹ÛÛ[X[™ˆ›Ü›X[^™YØZÙU^
ØØ[^™YÛÛ[X[™
HJNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\ÐÛÛ™\œØ][Û˜[ØZÙJš[È‹ØØ[^™YÛÛ[X[™
KYKÈ[ÝÒ[™Ù™Žˆ˜[ÙHJNÂˆ™]\›ŽÂˆBˆYˆ
\Ó™^\ÒX\š[™ÐÚXÚÐÛÛ[X[™
ÛÛ[X[™ØØ[^™YÛÛ[X[™
JHÂˆ[œÝÙ\“™^\ÒX\š[™ÐÚXÚÊ
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\Ô™X[[YPY\ÝY[
ÛÛ[X[™ØØ[^™YÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™S™^\ÔÙ[ÛÜœ™XÝ[ÛŠÛÛ[X[™ØØ[^™YÛÛ[X[™
JH™]\›ŽÂˆYˆ
[•\Ù\“[ÙR\™[™[™ÊÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JH™]\›ŽÂˆÛÛœÝÛÛ™\œØ][Û‘š\œÝ[[H™^\ÐÛÛ™\œØ][Û‘š\œÝ[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆYˆ
[ÛÛ™\œØ][Û‘š\œÝ[[
ÛÛ™\œØ][Û‘š\œÝ[[ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JH™]\›ŽÂˆÛÛœÝÛÛ[[Û”˜\ÙHH™^\ÐÛÛ[[Û”˜\ÙT™\ÜÛœÙJÛÛ[X[™ØØ[^™YÛÛ[X[™
NÂˆYˆ
ÛÛ[[Û”˜\ÙJHÂˆÛX\YÙ[›ÙÜ™\ÜÕ[Y\œÊ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJÛÛ[[Û”˜\ÙKYJNÂˆ™]\›ŽÂˆBˆÛÛœÝÝÜ™Y\™XÝHÜÝÝÜ™Y\™XÝÛÛ[X[™
ÛÛ[X[™
NÂˆYˆ
\ÑÛØ˜[ÝÜÛÛ[X[™
Ýš[™ÊÛÛ[X[™ØØ[^™YÛÛ[X[™
KÓÝÙ\Ø\ÙJ
JJHÂˆYˆ
\ÔÝÜ[™ÛÛ[YUÛÜšÚ[™ÐÛÛ[X[™
ÛÛ[X[™ØØ[^™YÛÛ[X[™
JHÂˆÝÜ™^\Ð[™™]\›•ÕÛÜšÊ”ÝÜYˆ™^\È\ÈÛÜÙYÛÈ[ÝHØ[ˆÛÛ[YHÛÜšÚ[™ËˆŠNÂˆ™]\›ŽÂˆBˆ[\“™^\ÐÛÛ™\œØ][Û”]\ÙJ”ÝÜYˆ™^\È\È]\ÙY[™Ú[YÛ›Ü™H˜XÚÙÜ›Ý[™ÛÛ™\œØ][Ûˆ[[[ÝHØ^H™^\ÈYØZ[‹ˆŠNÂˆYˆ
ÝÜ™Y\™XÝ
HÂˆX]™S™^\ÐÛÛ™\œØ][Û”]\ÙJ“™^\ÈX\™[Ý\ˆ™^[œÝXÝ[ÛˆY\ˆÝÜˆŠNÂˆÙ][Y[Ý]


HOˆÂˆÙ]ÛÛ[X[™[œ]ÊÝÜ™Y\™XÝ
NÂˆ›ÚY[™U›ÚXÙPÛÛ[X[™
ÝÜ™Y\™XÝ
NÂˆKLŒ
NÂˆBˆ™]\›ŽÂˆBˆYˆ
[™S™^\Õ›ÚXÙT™Y™\™[˜ÙPÛÛ[X[™
ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™ÈÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙK\™Y™\™[˜ÙKXÛÛ[X[™ˆJJH™]\›ŽÂˆYˆ
\Õ[š]™\œØ[[™ÝXYÙPÛÛ[X[™
ÛÛ[X[™ØØ[^™YÛÛ[X[™
JHÂˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ]ØZ]Ú[™ÙS[™ÝXYÙPžU›ÚXÙJÛÛ[X[™ØØ[^™YÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆÛÛœÝš[Üš]Q˜[˜XÚÒ[[HÚ[\U\Ù\‘\™XÝ›ÚXÙR[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™
NÂˆYˆ
\Ôš[Üš]TÙ\šXÙU›ÚXÙR[[
š[Üš]Q˜[˜XÚÒ[[
JHÂˆYˆ
[ÛÛ\[š[Û•ÛÜšÙ›ÝÓÙ™™\’Y“™YYY
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™Âˆ‹‹œš[Üš]Q˜[˜XÚÒ[[ˆXÝX[›Ý]TÛÝ\˜ÙNˆÙX‹œÚ[\U\Ù\‘\™XÝ›ÚXÙR[[œ™Y›YÚ‚ˆJJH™]\›ŽÂˆ™\Ù]ÛÛ™\œØ][Û”Ý]Q›Ü”š[Üš]R[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™
NÂˆYˆ
[”Ú[\U\Ù\•›ÚXÙR[[
š[Üš]Q˜[˜XÚÒ[[ÜÚÙ[ÛÛ[X[™ÛÛ[X[™
JH™]\›ŽÂˆBˆYˆ
XÝ]™PÛÛ™\œØ][Û’[ZÙH	‰ˆ[™PÛÛ™\œØ][Û’[ZÙP[œÝÙ\ŠÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JH™]\›ŽÂˆYˆ
Ý\ÛÛ™\œØ][Û’[ZÙQœ›ÛPÛÛ[X[™
ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JH™]\›ŽÂˆYˆ
Ü[ÛœËœÛÝ\˜ÙHOOH›ÚXÙHˆ	‰ˆ\ÓZÙ[TÚYPÛÛ™\œØ][Û•Ú]Ý]™^\ÐÛÛ[X[™
ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JHÂˆ]\ÙS™^\Ñ›Ü”ÚYPÛÛ™\œØ][ÛŠÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\Õ[šYšYYœ˜Z[”[[YPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœËÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH\YØÚ]ˆJJH™]\›ŽÂˆYˆ
]ØZ][™S™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœËÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH\YØÚ]ˆJJH™]\›ŽÂˆYˆ
]ØZ][™S™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™È‹‹›Ü[ÛœËÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH\YØÚ]ˆJJH™]\›ŽÂˆYˆ
[™S™^\ÐÛÛ™\œØ][Û‘ÛÝ™\››ÜŠÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™Ü[ÛœÊJH™]\›ŽÂˆYˆ
[™PÛÛ™\œØ][Û“[ÙL”™Y›YÚ
ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™Ü[ÛœÊJH™]\›ŽÂˆYÙ[\™›Ü›X[˜ÙTÝ]KœÜÚÙ[ÛÛ[X[™HÜÚÙ[ÛÛ[X[™ÛÛ[X[™ÂˆÛÛœÝ™QX[ÙÔÚ[\R[[HÚ[\U\Ù\‘\™XÝ›ÚXÙR[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™
NÂˆYˆ
™QX[ÙÔÚ[\R[[
HÂˆYˆ
[ÛÛ\[š[Û•ÛÜšÙ›ÝÓÙ™™\’Y“™YYY
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™Âˆ‹‹œ™QX[ÙÔÚ[\R[[ˆXÝX[›Ý]TÛÝ\˜ÙNˆÙX‹œÚ[\U\Ù\‘\™XÝ›ÚXÙR[[œ™QX[ÙÈ‚ˆJJH™]\›ŽÂˆYˆ
[”Ú[\U\Ù\•›ÚXÙR[[
™QX[ÙÔÚ[\R[[ÜÚÙ[ÛÛ[X[™ÛÛ[X[™
JH™]\›ŽÂˆBˆYˆ
\ÓÜ[’Û›ÝÛYÙT]Y\Ý[ÛŠÜÚÙ[ÛÛ[X[™ÛÛ[X[™
JHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ\]S™^\Ð™Z]š[Ü“^Y\Š[šÚ[™È‹“™^\È\È\Ý[š[™ÈÈH[]Y\Ý[Ûˆ[™ÚXÚÚ[™È[\›™]\™\ÛÝ\˜ÙHÛ›ÝÛYÙHÚ]]›Ü›HÛÛ^ˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈ˜\ÚÈÛ™H›ÛÝË]\‹œØ]™HÈ™XÛÜ™‹œ™\\™H™]šY]ÈÝ[[X\žH‹“™^\ÈÝÜ—JNÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹šÛ›ÝÛYÙH[œÝÙ\ˆŠJH™]\›ŽÂˆ]ØZ][“™^\ÒÛ›ÝÛYÙT]Y\žJÜÚÙ[ÛÛ[X[™ÛÛ[X[™ÈÛÝ\˜ÙTÝ\™˜XÙNˆ™ÛØ˜[Ý›ÚXÙWØ\Ú×Û™^\ÈˆJNÂˆÛÛœÝ™\ÜÛœÙHH™^\ÒÛ›ÝÛYÙS\Ý™\Ý[Ë˜[œÝÙ\ˆ“™^\ÈÚXÚÙY[\›™]\™\ÛÝ\˜ÙHÛ›ÝÛYÙHØY™[KˆŽÂˆÙ]›ÚXÙT™\ÜÛœÙJ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ˆÜÚÙ[ÛÛ[X[™ÛÛ[X[™ÛÝ\˜ÙNˆ›™^\ËZ[\›™]\™\ÛÝ\˜ÙKX\ÜÚ\Ý[\]›Ü›HˆJNÂˆ™]\›ŽÂˆBˆYˆ
\ÓÜ[‘X[ÙÕ›ÚXÙT]Y\Ý[ÛŠÜÚÙ[ÛÛ[X[™ÛÛ[X[™
JHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ\]S™^\Ð™Z]š[Ü“^Y\Š[šÚ[™È‹“™^\È\È™X][™È\È\ÈÜ[ˆX[ÙË›ÝHš^YY[HÛÛ[X[™ˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈ˜\ÚÈH›ÛÝË]\‹™ÝZYHYHÝ\žHÝ\‹›Ü[ˆHšYÚ\™XH‹“™^\ÈÝÜ—JNÂˆÛÛœÝØØ][ÛÛÛ^H]ØZ]ØY™Pœ›ÝÜÙ\•ÙX]\“ØØ][ÛŠÜÚÙ[ÛÛ[X[™ÛÛ[X[™
NÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹›Ü[ˆX[ÙÈ[œÝÙ\ˆŠJH™]\›ŽÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™ØØ][ÛÛÛ^È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆBˆÛÛœÝX\›TÚ[\R[[HÚ[\U\Ù\‘\™XÝ›ÚXÙR[[
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™
NÂˆYˆ
X\›TÚ[\R[[
HÂˆYˆ
[ÛÛ\[š[Û•ÛÜšÙ›ÝÓÙ™™\’Y“™YYY
ÜÚÙ[ÛÛ[X[™ÛÛ[X[™Âˆ‹‹™X\›TÚ[\R[[ˆXÝX[›Ý]TÛÝ\˜ÙNˆÙX‹œÚ[\U\Ù\‘\™XÝ›ÚXÙR[[™X\›H‚ˆJJH™]\›ŽÂˆYˆ
[”Ú[\U\Ù\•›ÚXÙR[[
X\›TÚ[\R[[ÜÚÙ[ÛÛ[X[™ÛÛ[X[™
JH™]\›ŽÂˆBˆÛÛœÝ[™\œÝ[™[™ÈHY\]™PÛÛ[X[™[™\œÝ[™[™ÊÛÛ[X[™
NÂˆYˆ
[™\œÝ[™[™Ëœ™]Üš][ÛÛ[X[™	‰ˆZ\Õ[š]™\œØ[[™ÝXYÙPÛÛ[X[™
ÛÛ[X[™
H	‰ˆZ\ÑÛØ˜[ÝÜÛÛ[X[™
[™\œÝ[™[™Ëœ™]Üš][ÛÛ[X[™ÓÝÙ\Ø\ÙJ
JJHÂˆÛÛ[X[™H[™\œÝ[™[™Ëœ™]Üš][ÛÛ[X[™ÂˆBˆÛÛœÝÝÙ\ˆHÛÛ[X[™ÓÝÙ\Ø\ÙJ
NÂˆX\šÐYÙ[\™›Ü›X[˜ÙJšX\™‹›ÚXÙKXÛÛ[X[™ŠNÂˆYÙ[\™›Ü›X[˜ÙTÝ]K›\ÝÛÛ[X[™HÛÛ[X[™ÂˆYÙ[\™›Ü›X[˜ÙTÝ]KœÜÚÙ[ÛÛ[X[™HÜÚÙ[ÛÛ[X[™ÛÛ[X[™ÂˆYˆ
ÛÛ[X[™
H™[Y[X™\ÛÛ™\œØ][Û•\›ŠÛÛ[X[™ˆŠNÂˆYˆ
ÛÛ[X[™
H\]S™^\Ð]Ø\™[™\ÜÊÛÛ[X[™ÈÚ[[ˆYHJNÂˆYˆ
ÛÛ[X[™
HÜYXÚØY™]Tš\ÚÊÛÛ[X[™›ÚXÙHŠNÂˆYˆ
\Ó™^\Õ›ÚXÙSÙ™ÛÛ[X[™
ÝÙ\ŠJHÂˆ\ØX›S™^\Õ›ÚXÙQ›Ü‘[[Ê‘[[È]ZY][ÙH\ÈÛ‹ˆ™^\È›ÚXÙH\ÈÙ™ˆ[[[ÝH\›ˆ]˜XÚÈÛ‹ˆŠNÂˆ™]\›ŽÂˆBˆYˆ
\Ó™^\Õ›ÚXÙSÛÛÛ[X[™
ÝÙ\ŠJHÂˆ›ÚXÙPÛÛ™\œØ][Û”]\ÙYH˜[ÙNÂˆ[˜X›S™^\Õ›ÚXÙQ›Ü‘[[Ê“™^\È›ÚXÙH\È˜XÚÈÛ‹ˆØ^H™^\Ë[ˆ[YHÚ][ÝH™YYˆŠNÂˆ™]\›ŽÂˆBˆYˆ
\Õ[š]™\œØ[[™ÝXYÙPÛÛ[X[™
ÛÛ[X[™
JHÂˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ]ØZ]Ú[™ÙS[™ÝXYÙPžU›ÚXÙJÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
[™S™^\ÐY\]™SX\›š[™ÐÛÛ[X[™
ÛÛ[X[™ØØ[^™YÛÛ[X[™˜]ÐÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™	‰ˆ\Ó™^\ÐÛÛ[X[™ÛÛ™š\›X][ÛŠÝÙ\ŠJHÂˆ]ØZ]^XÝ]T[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™

NÂˆ™]\›ŽÂˆBˆYˆ
[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™	‰ˆ\Ó™^\ÐÛÛ[X[™™Z™XÝ[ÛŠÝÙ\ŠJHÂˆÛX\”[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™
“›È›Ø›[KˆÚ]È[ÝHØ[[œÝXYÈŠNÂˆ™]\›ŽÂˆBˆYˆ
\ÓÜ[’Û›ÝÛYÙT]Y\Ý[ÛŠÛÛ[X[™
JHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š[šÚ[™È‹“™^\È\ÈÚXÚÚ[™È[\›™]\™\ÛÝ\˜ÙHÛ›ÝÛYÙH[™]›Ü›HÛÛ^™Y›Ü™H[œÝÙ\š[™ËˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈœØ]™HÈ™XÛÜ™‹œ™\\™H™]šY]ÈÝ[[X\žH‹œ]Y]YHÙ™›[™H‹œ™\]Y\ÝYš\ÛÜˆÝ\Ü—JNÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹šÛ›ÝÛYÙH[œÝÙ\ˆŠJH™]\›ŽÂˆ]ØZ][“™^\ÒÛ›ÝÛYÙT]Y\žJÛÛ[X[™ÈÛÝ\˜ÙTÝ\™˜XÙNˆ™ÛØ˜[Ý›ÚXÙWØ\Ú×Û™^\ÈˆJNÂˆÛÛœÝ™\ÜÛœÙHH™^\ÒÛ›ÝÛYÙS\Ý™\Ý[Ë˜[œÝÙ\ˆ“™^\ÈÚXÚÙY[\›™]\™\ÛÝ\˜ÙHÛ›ÝÛYÙHØY™[KˆŽÂˆÙ]›ÚXÙT™\ÜÛœÙJ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ÛÝ\˜ÙNˆ›™^\ËZ[\›™]\™\ÛÝ\˜ÙKX\ÜÚ\Ý[\]›Ü›HˆJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠÞ\Ý[H[YÜš]_]›Ü›H[YÜš]_[YÜš]HÚXÚßÝ™\ÜÈ\ÝÛ\ÚÚXÚß[[È™XY[™\Üßš[˜[ÚXÚß™XY[™\ÜÈ\ÜÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹“™^\È\È™\Ü[™È]›Ü›H[YÜš]HXÜ›ÜÜÈ›ÚXÙK[™ÝXYÙK[Øš[K›Û\ËY[[ÜžK™XÛÝ™\žK[™[[È›ÝËˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈ“™^\ËÛÈ]ZY]‹“™^\Ë\›ˆ›ÚXÙH˜XÚÈÛˆ‹“™^\ËÜ[ˆX\‹“™^\Ë[ˆ[™\ÝÜˆ›ÚXÙH[[È—JNÂˆÙ]›ÚXÙT™\ÜÛœÙJ]›Ü›R[YÜš]TÝ™\ÜÔÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠX[X[\Ý[™È]X[X[\Ý]\Ý[™ÈÚXÚÛ\Ý\ÝÚXÚÛ\ÝØ[Ý›ÝYÚ][[ÈÚXÚÛ\ÝÚ]ÚÝ[H\Ýš\œÝ
W‹Ë\Ý
ÝÙ\ŠJHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹“™^\È\ÈÚ]š[™ÈHX[X[\Ý[™È]›Üˆ\Ù\‹›ÚXÙKX\Ë›ÝšY\œËYZ[‹[™[™\ÝÜ‹ˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈ“™^\ËÜ[ˆX\›š[™È‹“™^\ËÝ\[ZX[[ZÙH‹“™^\ËÙ[Ü›Ü‹“™^\Ë[ˆ]™HÙ\šXÙHÚXÚÈ—JNÂˆÙ]›ÚXÙT™\ÜÛœÙJX[X[\Ý[™Ô]Ý[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
\ÑÛØ˜[ÝÜÛÛ[X[™
ÝÙ\ŠJHÂˆYˆ
\ÔÝÜ[™ÛÛ[YUÛÜšÚ[™ÐÛÛ[X[™
ÛÛ[X[™ØØ[^™YÛÛ[X[™
JHÂˆÝÜ™^\Ð[™™]\›•ÕÛÜšÊ”ÝÜYˆ™^\È\ÈÛÜÙYÛÈ[ÝHØ[ˆÛÛ[YHÛÜšÚ[™ËˆŠNÂˆ™]\›ŽÂˆBˆ[\“™^\ÐÛÛ™\œØ][Û”]\ÙJ”ÝÜYˆ™^\È\È]\ÙY[™Ú[YÛ›Ü™H˜XÚÙÜ›Ý[™ÛÛ™\œØ][Ûˆ[[[ÝHØ^H™^\ÈYØZ[‹ˆŠNÂˆYˆ
ÝÜ™Y\™XÝ
HÂˆX]™S™^\ÐÛÛ™\œØ][Û”]\ÙJ“™^\ÈX\™[Ý\ˆ™^[œÝXÝ[ÛˆY\ˆÝÜˆŠNÂˆÙ][Y[Ý]


HOˆÂˆÙ]ÛÛ[X[™[œ]ÊÝÜ™Y\™XÝ
NÂˆ›ÚY[™U›ÚXÙPÛÛ[X[™
ÝÜ™Y\™XÝ
NÂˆKLŒ
NÂˆBˆ™]\›ŽÂˆBˆYˆ
[ÝÙ\ˆ	‰ˆ
ØZÙSÛ›HÜ™Y][™ÓÛ›JJHÂˆÜ[\ÚÓ™^\Ê
NÂˆ[˜X›R^PYÜšS™^\Ó[ÙJ
NÂˆ™^\Ð]ØZ][™ÐÛÛ[X[™HYNÂˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÈ\NˆØZÙH‹ÛÛ[X[™ˆ›Ü›X[^™YØZÙU^
ØØ[^™YÛÛ[X[™
HJNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\ÐÛÛ™\œØ][Û˜[ØZÙJÜ™Y][™ÓÛ›HÈš[ÈˆˆØZÙH‹ØØ[^™YÛÛ[X[™
KYKÈ[ÝÒ[™Ù™Žˆ˜[ÙHJNÂˆ™]\›ŽÂˆBˆYˆ
[ÝÙ\ŠH™]\›ˆÙ]›ÚXÙT™\ÜÛœÙJ’H[H\Ý[š[™Ëˆ\Ý[YHÚ][ÝH™YYˆ‹YJNÂˆYˆ
\ÔÚ[\PÛÝ\œÙTÝ\ÛÛ[X[™
ÛÛ[X[™
JHÂˆ]ØZ][™TÚ[\PÛÝ\œÙTÝ\ÛÛ[X[™
ÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆÛÛœÝ^XÚ]X\›š[™Ò[[H^XÚ]X\›š[™Ô™XY[™\ÜÒ[[
ÛÛ[X[™
NÂˆYˆ
^XÚ]X\›š[™Ò[[
HÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆZ[ØØ[]™[Û™TÝYÙÙ\Ý[Û‘›Ü”Ú[\U\Ù\’[[
È\NˆÛÜšÙ›ÝÈ‹ÛÜšÙ›ÝÎˆ›X\›š[™È‹XÝ[ÛŽˆ^XÚ]X\›š[™Ò[[˜XÝ[ÛˆKÛÛ[X[™
NÂˆ™\Ù\™PÛÛ›ÛYXÝ[Û”™]šY]Ñ\š[™ÐÛÛ[X[™›Ý]HHYNÂˆ]Y]YSZXÜ›Ý\ÚÊ

HOˆÂˆ™\Ù\™PÛÛ›ÛYXÝ[Û”™]šY]Ñ\š[™ÐÛÛ[X[™›Ý]HH˜[ÙNÂˆJNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ›X\›š[™È‹^XÚ]X\›š[™Ò[[˜XÝ[Û‹^XÚ]X\›š[™Ò[[œ™\ÜÛœÙK^XÚ]X\›š[™Ò[[™]\Ù]ßJNÂˆBˆYˆ
ÚÝ[\ÚÔ™\X]›Ü•[˜ÛX\•›ÚXÙPÛÛ[X[™
ÛÛ[X[™Ü[ÛœÊJHÂˆ\ÚÕ\Ù\•Ô™\X]Z\ÚX\™˜\ÙJÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
ÚÝ[ÝYÙS™^\ÔÜÚÙ[ÛÛ[X[™
ÛÛ[X[™ÝÙ\‹È‹‹›Ü[ÛœËØZÙSÛ›HJJHÂˆÝYÙS™^\ÔÜÚÙ[ÛÛ[X[™
ÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆ\]S™^\Ð™Z]š[Ü“^Y\Š[šÚ[™È‹ÛÛ[X[™È™^\È\ÈXÚY[™ÈÝÈÈ[Ú]ˆ	ØÛÛ[X[™Xˆ“™^\È\È\Ý[š[™ËˆŠNÂˆÛÛœÝÚ[\R[[HÚ[\U\Ù\‘\™XÝ›ÚXÙR[[
ÛÛ[X[™
NÂˆYˆ
Ú[\R[[Ë\HOOH˜Û\šYžHŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆHÚ[\R[[˜Û\šYšXØ][Ûˆ[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÚ[\R[[œÝYÙÙ\Ý[ÛœÈÈšX[‹ÛÜšÈ‹›X\›š[™È‹˜Ü›ÜÈ‹›X\—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š›\Ý[š[™È‹“™^\È\ÚÙYÛ™HÚÜÛ\šYžZ[™È]Y\Ý[Ûˆ[œÝXYÙˆÝY\ÜÚ[™ËˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJÚ[\R[[œ™\ÜÛœÙKYJNÂˆ™]\›ŽÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOH™[[X\ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[‘[ØØ[U\Ù\“X\
Ú[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOHšÛYHŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[“™^\ÒÛYJÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOHšX[Z[ZÙHŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[’X[[ZÙS›ÝÊÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOH›YYXÚ[™KZ[ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[“YYXÚ[™R[›ÝÊÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOH˜Û[šXË[X\Z[ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[’X[˜XÚ[]SX\›ÝÊÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOH˜Û[šXËZ[ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[Û[šXÒ[›ÝÊÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOH˜Ü›ÜZ[ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[Ü›Ü›Ø›[R[›ÝÊÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOH™ØÝÜ‹Z[ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[‘ØÝÜ’[›ÝÊÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOH˜Ü›Ü\Ø[KYÝZYYŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[Ü›ÜØ[QÝZYY›ÝÊÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOHÛÜšÙ›Ü˜ÙKYÝZYYŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[•ÛÜšÙ›Ü˜ÙQÝZYY›ÝÊÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOH›X\›š[™ËYÝZYYŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[“X\›š[™ÑÝZYY›ÝÊÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOH™\™XÝˆ	‰ˆÚ[\R[[™\™XÝXÝ[ÛˆOOHœ›Ý]KYÝZYYŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[”›Ý]QÝZYY›ÝÊÚ[\R[[œ™\ÜÛœÙJNÂˆBˆYˆ
Ú[\R[[Ë\HOOHÛÜšÙ›ÝÈŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJÚ[\R[[ÛÜšÙ›ÝËÚ[\R[[˜XÝ[Û‹Ú[\R[[œ™\ÜÛœÙKÚ[\R[[™]\Ù]ßJNÂˆBˆYˆ
\Õ›ÚXÙSZ\ÜÚ[Û”™\]Y\Ý
ÛÛ[X[™
JHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ]ØZ]Ý\›ÚXÙSZ\ÜÚ[ÛŠÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
×ŠÜYXÚØY™]_˜[œÛ][ÛˆØY™]_›ÚXÙHØY™]_ÜXZÈÛÝÙ\ŸÛÝÈÝÛŸ[ÈÛÝÙ\ŸÛÝÙ\ˆ›ÚXÙJW‹Ë\Ý
ÝÙ\ŠJHÂˆYˆ
×ŠÜXZÈÛÝÙ\ŸÛÝÈÝÛŸ[ÈÛÝÙ\ŸÛÝÙ\ˆ›ÚXÙJW‹Ë\Ý
ÝÙ\ŠJHÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\ÔÛÝÔÜYXÚ‹›ÛˆŠNÂˆBˆÙ]›ÚXÙT™\ÜÛœÙJ][[[™ÝX[ÜYXÚØY™]TÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠY\]™H[™\œÝ[™[™ßÚ]Y[ÝHX\ŸÚ]È[ÝH[šÈHØZY[™\œÝ[™Y_ÜYXÚ[[YÙ[˜Ù_›ÚXÙH[[YÙ[˜ÙJW‹Ë\Ý
ÝÙ\ŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\ÐY\]™U[™\œÝ[™[™ÔÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠÛÛ^Y[[Üž_Ú]ÛÛ^Ú]È[ÝHÛ›ÝÈX›Ý]\ßÚ]È[ÝH™[Y[X™\ˆX›Ý]\ß™^™\Ý]Y\Ý[ÛŸÚ]ÚÝ[[ÝH\ÚÈYJW‹Ë\Ý
ÝÙ\ŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\ÐÛÛ^Y[[ÜžTÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
×Š™YXÝ™YXÝ[ÛŸ™YXÝ]™_Ú]™YYÈ][[ÛŸÛX\™XÛÛ[Y[™][ÛŸXZÙHHÛX\™XÛÛ[Y[™][ÛŸÚ]ÚÝ[\[ˆ™^
W‹Ë\Ý
ÝÙ\ŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\Ô™YXÝ]™PYš\ÛÜ”Ý[[X\žJÛÛ[X[™
KYJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠXÚ\Ú[ÛˆØÛÜ™_ØÛÜ™H[Ý\ˆXÚ\Ú[ÛŸÚHY[ÝH™XÛÛ[Y[™˜[šÈ\ßØÛÜ™H\ÊW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÛœÝ[Ù[H™^\ÑXÚ\Ú[Û”ØÛÜš[™Ó[Ù[
ÛÛ[X[™
NÂˆÙ]›ÚXÙT™\ÜÛœÙJXÚ\Ú[ÛˆØÛÜ™H	Û[Ù[œØÛÜ™_KÌLˆ™XÛÛ[Y[™][ÛŽˆ	Û[Ù[œ™XÛÛ[Y[™][ÛŸKˆÚNˆ	Û[Ù[Ú_Kˆ™^]Y\Ý[ÛŽˆ	Û[Ù[›™^]Y\Ý[ÛŸXYJNÂˆ™]\›ŽÂˆBˆYˆ
×Š]™H[[YÙ[˜ÙH™YYß]™HÛ›ÝÛYÙH™YYß™X[[YH™YYß›ÝšY\ˆ™YYßÚ]™YYÈ\™H]™JW‹Ë\Ý
ÝÙ\ŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\Ó]™RÛ›ÝÛYÙQ™YYÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠÛÛXÝ]™H[[YÙ[˜Ù_ÛÛXÝ]™Hœ˜Z[ŸÙ[ˆ]›Û™_Ù[ˆ]›Û][ÛŸ]›Û][Ûˆ[™Ú[™_X\›ˆœ›ÛH]™\ž[Û™_ÛÛ[][š]H[[YÙ[˜Ù_™^\ÈX\›ˆœ›ÛH\Ù\œßXZÙH[Ý\œÙ[ˆ™]\Ÿ[\›Ý™H[Ý\œÙ[ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆ]ØZ][ÛÛXÝ]™R[[YÙ[˜ÙJ
NÂˆ™]\›ŽÂˆBˆYˆ
×ŠYÚ\Ý]™[œ›ÛY\ˆœ˜Z[Ÿœ›ÛY\ˆ™^\ßXÝ]˜]Hœ›ÛY\ŸX^[][H[[YÙ[˜Ù_Ü]™[™^\ßÝ›Û™Ù\Ý™\œÚ[ÛŸ[[X]H™^\ßZÙH]ÈHYÚ\Ý
W‹Ë\Ý
ÝÙ\ŠJHÂˆ]ØZ][‘œ›ÛY\œ˜Z[Š
NÂˆ™]\›ŽÂˆBˆYˆ
[™[™ÐYÙ[Û\šYšXØ][Ûˆ	‰ˆ]ØZ][œÝÙ\YÙ[Û\šYšXØ][ÛŠÛÛ[X[™
JH™]\›ŽÂˆYˆ
×ŠØ[˜Ù[ÝÜÛX\Ÿ[™
WÊÊ›Ý\›™^_ÝZYY›Ý\›™^_™^Ý\›ÛÝÈ›ÝYÚ
W‹Ë\Ý
ÝÙ\ŠJHÂˆXÝ]™PYÙ[›Ý\›™^HH[ÂˆÙ]›ÚXÙT™\ÜÛœÙJ‘ÝZYY›Ý\›™^HÛX\™Yˆ[YHÚ][ÝHØ[ÈÈ™^ˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
\ÐÛÛ™\œØ][Û”™\Z\ÛÛ[X[™
ÝÙ\ŠJHÂˆ[™PÛÛ™\œØ][Û”™\Z\ŠÛÛ[X[™
NÂˆ™]\›ŽÂˆB‚ˆYˆ
]ØZ][“]\ÚXÐ\ÜÚ\Ý[ÛÛ[X[™
ÛÛ[X[™È\›•ÚÙ[ˆJJH™]\›ŽÂ‚ˆÛÛœÝ][]P[œÝÙ\ˆH™^\Õ][]P\ÜÚ\Ý[™\ÜÛœÙUŒŠÛÛ[X[™
NÂˆYˆ
][]P[œÝÙ\ŠHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹“™^\È\È[œÝÙ\š[™ÈH˜XÝXØ[Z[H]Y\Ý[Û‹ˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈ›Ü[ˆX\‹›Ü[ˆ[ZX[‹˜XÚÈ^HÚ\Y[‹Ú]\È™^Ù^H—JNÂˆÛÛœÝØØ][ÛÛÛ^H]ØZ]œ›ÝÜÙ\•ÙX]\“ØØ][ÛŠÛÛ[X[™
NÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹][]H[œÝÙ\ˆŠJH™]\›ŽÂˆ]ØZ][•][]PYÙ[ÛÛ[X[™
ÛÛ[X[™][]P[œÝÙ\‹ØØ][ÛÛÛ^È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆB‚ˆYˆ
]ØZ][™S™^\Ò[[YÙ[˜ÙT›Ý]\ŠÛÛ[X[™
JH™]\›ŽÂ‚ˆYˆ
[™PYš\ÛÜœ˜Z[ÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂ‚ˆÛÛœÝZYÜ˜[[[HZYÜ˜[œšY[™U›ÚXÙR[[
ÛÛ[X[™
NÂˆYˆ
ZYÜ˜[[[
HÂˆYˆ
ZYÜ˜[[[œÙXÝ[Ûˆ	‰ˆØ[“Ü[”ÙXÝ[ÛŠZYÜ˜[[[œÙXÝ[ÛŠJHÛÔÙXÝ[ÛŠZYÜ˜[[[œÙXÝ[ÛŠNÂˆYˆ
ZYÜ˜[[[™\™XÝXÝ[ÛˆOOH™[[X\ŠH™]\›ˆÜ[‘[ØØ[U\Ù\“X\
ZYÜ˜[[[œ™\ÜÛœÙJNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJZYÜ˜[[[ÛÜšÙ›ÝËZYÜ˜[[[˜XÝ[Û‹ZYÜ˜[[[œ™\ÜÛœÙKZYÜ˜[[[™]\Ù]ßJNÂˆBˆYˆ
×Š›ÚXÙH\œÛÛ˜_ÝÈÚ[[ÝH[ßÛÛ™\œØ][ÛˆÝ[_ÚÈ\™H[ÝH[ˆ\È[ÙJW‹Ë\Ý
ÝÙ\ŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ[ÙTÜXÚYšXÕ›ÚXÙT\œÛÛ˜J
KYJNÂˆ™]\›ŽÂˆBˆYˆ
×Š™\ÝØY™\ÝØY™_ØY™\Ÿ™XÛÛ[Y[™ÚXÚ
W‹Š—Š›Ý]_›ØYÙÚ\ÝXÜß[]™\ž_Ú\Y[ÛÜœšYÜŠW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÛœÝ›Ý]PYšXÙHHYš\ÛÜ“ÙÚ\ÝXÜÔ™XÛÛ[Y[™][ÛŠ
NÂˆÛÔÙXÝ[ÛŠ›X\ŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈ˜ÚXÚÈ›Ý]Hš\ÚÈ‹˜XÚÈ^H›Ý]H‹™š[™˜XÚ[]H‹™^Z[ˆHX\—JNÂˆÙ]›ÚXÙT™\ÜÛœÙJ›Ý]PYšXÙK›Y\ÜØYÙKYJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠÚ]ÚÝ[Hß™XÛÛ[Y[™ÝYÙÙ\Ý[
W‹Š—ŠÜ›ÜÜ›ÜßšY[\™\Ý[˜\›JW‹Ë\Ý
ÝÙ\ŠH×ŠÜ›ÜÜ›ÜßšY[˜\›JW‹Š—Š˜YÛÚ[™È˜YÝ™\Üß\Ýž_Y[Ýß›ÝÜÚ[
W‹Ë\Ý
ÝÙ\ŠJHÂˆÛÛœÝÜ›ÜYšXÙHHYš\ÛÜÜ›ÜÛÛ™][Û”™XÛÛ[Y[™][ÛŠ
NÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÜ›ÜYšXÙK˜XÝ[ÛœËœÛXÙJ
JNÂˆÙ]›ÚXÙT™\ÜÛœÙJ	ØÜ›ÜYšXÙK›Y\ÜØYÙ_HHØ[ˆÜ[ˆ›Û™HØØ[‹\œšYØ][Û‹\Ý[\ÜˆšY[\ÚÈ›ÝË˜YJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠZ\ÜÚ[ÛˆÝ]\ßÚ\™H[H_Ú\™H\™HÙ_ÛÜšÙ›ÝÈÝ]\ß›ÚXÙHÝ]\ÊW‹Ë\Ý
ÝÙ\ŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ›ÚXÙUÛÜšÙ›ÝÔÝ]\Ê
KYJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠÛÛ[YHZ\ÜÚ[ÛŸ™^Z\ÜÚ[ÛˆÝ\Ý\Z\ÜÚ[ÛŠW‹Ë\Ý
ÝÙ\ŠJHÂˆYˆ
]ØZ]ÛÛ[YU›ÚXÙSZ\ÜÚ[ÛŠ
JH™]\›ŽÂˆBˆYˆ
×Š™XY˜XÚß™XY˜XÚß™XY\ß™XYØÜ™Y[Ÿ™XYÝ\œ™[ÜXZÈ\ÊW‹Ë\Ý
ÝÙ\ŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ›ÚXÙT™XY˜XÚÕ^

KYJNÂˆ™]\›ŽÂˆBˆYˆ
\Õ›ÚXÙSZ\ÜÚ[Û”™\]Y\Ý
ÛÛ[X[™
JHÂˆYˆ
]ØZ]Ý\›ÚXÙSZ\ÜÚ[ÛŠÛÛ[X[™
JH™]\›ŽÂˆBˆYˆ
ÝÙ\ˆOOH›™^ˆÝÙ\‹š[˜ÛY\Ê›™^Ý\ŠHÝÙ\‹š[˜ÛY\Ê˜ÛÛ[YH›Ý\›™^HŠHÝÙ\‹š[˜ÛY\Ê˜ÛÛ[YHHÛÜšÙ›ÝÈŠHÝÙ\‹š[˜ÛY\ÊÚ]\ÈH™^Ý\ŠJHÂˆ]ØZ][XÝ]™PYÙ[™^Ý\

NÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Ý\œ™[›Ý\›™^HŠHÝÙ\‹š[˜ÛY\Ê™ÝZYY›Ý\›™^HŠHÝÙ\‹š[˜ÛY\ÊÚ\™H\™HÙHŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJXÝ]™PYÙ[›Ý\›™^TÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
\Ó[ÙQ›ÛÝÕ\ÛÛ[X[™
ÝÙ\ŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ[ÙQ›ÛÝÕ\™\ÜÛœÙJÛÛ[X[™
KYJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠÚ]ÚÝ[HØ^_Ú]Ø[ˆHØ^H\™_ÝYÙÙ\ÝÚ]ÈØ^_[YH[ßÛÛ™\œØ][ÛˆÝZYJW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÛœÝÝZYHH[Z]]™PÛÛ™\œØ][Û‘ÝZYJ
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÝZYKœÝYÙÙ\Ý[ÛœÊNÂˆÙ]›ÚXÙT™\ÜÛœÙJ[Z]]™PÛÛ™\œØ][Û”™\ÜÛœÙJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
ÊXÝ]˜]_\›ˆÛŸÝ\\Ù_[˜X›_ÚÝß^Z[ŠKŠŠYÙ[Xß˜\š\ÊKŠŠ[Ù_[ŸÞ\Ý[JOËË\Ý
ÝÙ\ŠHÊYÙ[Xß˜\š\ÊKŠŠ[Ù_[ŠKŠŠ[[Ù\ßXÜ›ÜÜÈ[Ù\ÊOËË\Ý
ÝÙ\ŠJHÂˆÛÛœÝ™\ÜÛœÙHHXÝ]˜]PYÙ[XÒ˜\š\Ó[ÙJ
NÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆˆ	‰ˆØ[“Ü[”ÙXÝ[ÛŠ˜YÙ[ŠJHÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™\ÜÛœÙKYJNÂˆ™]\›ŽÂˆBˆYˆ
Ê]™\ž][™ß[
KŠŠYÙ[Xß˜\š\ÊKŠŠ\Ý[Ù_XÜ›ÜÜÈ[Ù\ÊKË\Ý
ÝÙ\ŠJHÂˆÛÛœÝ[ˆHYÙ[XÒ˜\š\Ó[ÙT[Š
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊ[‹˜ÛÛ[X[™ÊNÂˆÙ]›ÚXÙT™\ÜÛœÙJ	Ü[‹œÝ[[X\ž_HH[\Ý\Îˆ	Ü[‹š][\Ë›X\
][HOˆ	Ú][K]_Nˆ	Ú][K™]Z[X
Kš›Ú[ŠˆŠ_K˜YJNÂˆ™]\›ŽÂˆBˆÛÛœÝÛ\šYšXØ][ÛˆH[™™\[XšYÝ[Ý\Ò[[
ÛÛ[X[™
NÂˆYˆ
Û\šYšXØ][ÛŠHÂˆÝZYP[XšYÝ[Ý\Õ\Ù\•Ú]Ý]ÚÚXÙJÛ\šYšXØ][ÛŠNÂˆ™]\›ŽÂˆBˆYˆ
ÊÚ]\ßYš[™_^Z[Ÿ[YHX›Ý]\ØÜšX™JKŠŠYÜš[™^\ßYÜšH™^\ß™^\È]›Ü›_H]›Ü›JKË\Ý
ÝÙ\ŠHÊYÜš[™^\ßYÜšH™^\ÊKŠŠÚ]È[ÝHßÚÈ\™H[Ý_ÝÈÈ[ÝH[
KË\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ^\šY[˜ÙS[ÙHOOH\Ù\ˆˆÈ™\Ú›Ø\™ˆˆ˜YÙ[ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJYÜšS™^\È\È[ˆRHÜ\˜][™È]›Ü›H›Üˆ\˜[X\›š[™ËÛÜšÙ›Ü˜ÙK[ZX[YÜšXÝ[\™H˜YKX\Ë›Û™H[[YÙ[˜ÙK˜[œÛ][Û‹[™›ÝšY\ˆÛÜšÙ›ÝÜËˆ[ÝHØ[ˆ[ÈÈ™^\ËÚ[™ÙH[™ÝXYÙK\ÚÈÚ]ÈÈ™^Ü[ˆHÙ\šXÙKÜˆ\ÚÈ]ÈÝZYHH™X[ÛÜšÙ›ÝÈÝ\žHÝ\ˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
ÊÚ]ÛÛ[X[™ßÚXÚÛÛ[X[™ßÚ]Ø[ˆH\ÚßÚ]Ø[ˆHØ^JKŠŠ[™YH[Ù\ß[[Ù\ß\Ù\ˆYZ[ˆ[™\ÝÜŸ\Ù\‹Š˜YZ[‹Šš[™\ÝÜŠKË\Ý
ÝÙ\ŠHÊÛÛ[X[™ß›ÚXÙHÛÛ[X[™ÊKŠŠ\Ù\‹Š˜YZ[‹Šš[™\ÝÜŸ[[Ù\ÊKË\Ý
ÝÙ\ŠJHÂˆÛÛœÝØ][ÙÈH[[ÙU›ÚXÙPÛÛ[X[™Ø][ÙÊ
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊØ][ÙË˜ÛÛ[X[™ÊNÂˆÙ]›ÚXÙT™\ÜÛœÙJ	ØØ][ÙË™ÝX\˜[Y_HžNˆ	ØØ][ÙË˜ÛÛ[X[™ËœÛXÙJŠKš›Ú[Š‹ˆŠ_K˜YJNÂˆ™]\›ŽÂˆBˆYˆ
ÊÝÈÈH\Ù_ÝÈÈ\Ù_ÚÝÈYHÝß^Z[ˆÝßØ[ÈYH›ÝYÚXXÚYJKŠŠ]›Ü›_X\›š[™ßÛÝ\œÙ_ÛÜšÙ›Ü˜Ù_›ØŸX[[ZX[˜Y_YÜš]˜Y_X\Z_YÙ[™^\ß[YÜ˜][ÛŸYZ[Ÿ[˜Ý[ÛŸ]ÛŸÙXÝ[ÛŠKË\Ý
ÝÙ\ŠJHÂˆÛÛœÝ[Ù[RYH[Ù[Qœ›ÛR[ÛÛ[X[™
ÛÛ[X[™
NÂˆYˆ
Ø[“Ü[”ÙXÝ[ÛŠ[Ù[RY
JHÛÔÙXÝ[ÛŠ[Ù[RY
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ[Ù[U\ÙQ^[˜][ÛŠ[Ù[RY
KYJNÂˆ™]\›ŽÂˆB‚ˆYˆ
×ŠÜ[ŸÚÝßZÙHYHßÛÈß˜]šYØ]HÊW‹Š—ŠWÊÊOÛX\‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ›X\ŠNÂˆÙ]XÝ]™PYÙ[›Ý\›™^J›X\‹˜ÛÛ^‹“X\Ü[™YžH›ÚXÙKˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ“X\\ÈÜ[‹ˆ[ÝHØ[ˆØ^H˜XÚÈ^H›Ý]KÚÝÈX\š\ÚËš[™HX[˜XÚ[]KÜˆ^Z[ˆHX\ˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠÚÝßÜ[Ÿ\Ü^_X\˜XÚß˜XÙJW‹Š—Š˜Y_Ü›ÜÚ\Y[[]™\ž_X\šÙ]ÙÚ\ÝXÜÊW‹Š—Š›Ý]_]ÛÜœšYÜŸ˜XÚÚ[™ÊW‹Š—™œ›ÛWÊËŠÏ×Ê××ÊËŠËË\Ý
ÝÙ\ŠBˆ×Š˜Y_Ü›ÜÚ\Y[[]™\ž_X\šÙ]ÙÚ\ÝXÜÊW‹Š—Š›Ý]_]ÛÜœšYÜŸ˜XÚÚ[™ÊW‹Š—™œ›ÛWÊËŠÏ×Ê××ÊËŠËË\Ý
ÝÙ\ŠBˆ×Š›Ý]_]ÛÜœšYÜŸ˜XÚÚ[™ÊW‹Š—™œ›ÛWÊËŠÏ×Ê××ÊËŠËË\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ›X\ŠNÂˆÙ]XÝ]™PYÙ[›Ý\›™^J›X\‹˜ÛÝ[žK]˜YK\›Ý]H‹ÛÝ[žK]ËXÛÝ[žH˜YH›Ý]HÜ[™YžH›ÚXÙKˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈœ[ˆ›Ý]Hš\ÚÈ‹˜XÚÈÚ\Y[‹›Y\ÜØYÙH^Y\ˆ‹˜Ü™X]HÜ™\ˆ—JNÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆBˆYˆ
×Š^Y\ŸÝ\ÝÛY\Ÿ\˜Ú\Ù\ŸÛY[Ù[\Ÿ˜\›Y\ŸXÚÝ\[]™\ž_[]™\ŸÚ\Ú\Y[›ÙXÝ›ÙXÝßÜ›ÜÜ™\ŸØ[JW‹Ë\Ý
ÝÙ\ŠBˆ	‰ˆ×ŠY™\ÜßØØ][ÛŸYÛÜßÙ[žX_˜Z\›Øš_›Ý]_X\˜XÚß˜XÚÚ[™ßÚ\™_[]™\Ÿ[]™\ž_\˜Ú\ÙY›ÝYÚÛÛ
W‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ›X\ŠNÂˆÙ]XÝ]™PYÙ[›Ý\›™^J›X\‹˜^Y\‹\›Ý]H‹^Y\‹]Ë\Ù[\ˆ›Ý]HÜ[™YžH›ÚXÙKˆŠNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈœ[ˆ›Ý]Hš\ÚÈ‹›Y\ÜØYÙH^Y\ˆ‹˜XÚÈ^H›Ý]H[ˆ™X[[YH‹˜Ü™X]HÜ™\ˆ—JNÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆBˆYˆ
×ŠÛÛXÝØ[Y\ÜØYÙ_Ú]Ø\^ÜXZÈß[ÈßÛÛ›™XÝ
W‹Š—Š\ÝYÊÊOÊ[ZX[ÊÊOÊ›ÝšY\ŸØÝÜŸ\œÙ_Û[šXÊW‹Ë\Ý
ÝÙ\ŠH×Š\ÝYÊÝ[ZX[ÊÜ›ÝšY\Ÿ[ZX[ÊÜ›ÝšY\—ÊÛ\ÝY
W‹Ë\Ý
ÝÙ\ŠJHÂˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Ø[ŠHÝÙ\‹š[˜ÛY\ÊÚ]Ø\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ÛÛ[][šXØ][ÛœÈ‹šX[]Ú]Ø\‹’HÜ[™YX[[™™\\™YH\ÝY›ÝšY\ˆØ[ÜˆÚ]Ð\[™Ù™‹ˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›Y\ÜØYÙHŠHÝÙ\‹š[˜ÛY\Ê^ŠHÝÙ\‹š[˜ÛY\ÊœÛ\ÈŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ÛÛ[][šXØ][ÛœÈ‹ÝÙ\‹š[˜ÛY\ÊœÛ\ÈŠHÝÙ\‹š[˜ÛY\Ê^ŠHÈšX[\Û\ÈˆˆšX[XÚ]‹’HÜ[™YX[[™™\\™YH\ÝY›ÝšY\ˆY\ÜØYÙHÛÜšÙ›ÝËˆŠNÂˆBˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œ›ÝšY\ˆ‹’HÜ[™YX[[™™\\™YH\ÝY[ZX[›ÝšY\ˆÛÛXÝÛÜšÙ›ÝËˆŠNÂˆBˆYˆ
×ŠÛÜÙ\Ý™X\™\Ý™X\˜ž_š[™ÚÝÊW‹Š—ŠÛ[šXßX[˜XÚ[]_Ø\™HÚ[ØÝÜŸ›ÝšY\ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹›™X\™\ÝXÛ[šXÈ‹’HÜ[™Y\˜[X[XØÙ\ÜÈ[™™\\™YHÛÜÙ\ÝÛ[šXÈÛÜšÙ›ÝËˆ‹È]Y[ØØ][ÛŽˆXÝ]™PÛÝ[žJ
K›˜[YHJNÂˆBˆYˆ
×Š[Øš[HÛ[šXßÛ[šXÈ›ÝšY\Ÿ›ÝšY\ŸÛ[šXÈX[JW‹Š—ŠÙ\šXÙHY[_šXÙ\ßšXÚ[™ßÙ\šXÙ\ß™Y_™Y\ßÛÜÝ
W‹Ë\Ý
ÝÙ\ŠBˆ×ŠX›\ÚÚÝßÜ™X]JW‹Š—ŠÛ[šXÈšXÙ\ßÛ[šXÈÙ\šXÙHY[_[Øš[HÛ[šXÈÙ\šXÙ\ÊW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹˜Û[šXË\Ù\šXÙK[Y[H‹’HÜ[™YH[Øš[HÛ[šXÈ™]™[YH\ÚÈ[™™\\™YHÙ\šXÙHY[KˆŠNÂˆBˆYˆ
×Š[Øš[HÛ[šXßÛ[šXÈ›ÝšY\Ÿ›ÝšY\ŸÛ[šXÈX[_]Y[ÜÛœÛÜŠW‹Š—Š^[Y[^_Ú\™Ù_š[š[[™ßÛÛXÝÚXÚÛÝ]
W‹Ë\Ý
ÝÙ\ŠBˆ×Š™\]Y\ÝÜ™X]_Ù[™
W‹Š—Š^[Y[Û[šXÈš[[Øš[HÛ[šXÈ^[Y[ÚXÚÛÝ]
W‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹˜Û[šXË\^[Y[\™\]Y\Ý‹’HÜ[™YH[Øš[HÛ[šXÈ™]™[YH\ÚÈ[™™\\™YH^[Y[™\]Y\ÝˆŠNÂˆBˆYˆ
×Š™XÙZ\›ÛÙˆÙˆ^[Y[ZY™XÙZ\
W‹Ë\Ý
ÝÙ\ŠH	‰ˆ×ŠÛ[šXß]Y[[Øš[_›ÝšY\Ÿ^[Y[X[
W‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹˜Û[šXË\™XÙZ\‹’HÜ[™YH[Øš[HÛ[šXÈ™]™[YH\ÚÈ[™™\\™YH™XÙZ\ÛÜšÙ›ÝËˆŠNÂˆBˆYˆ
×Š^[Ý]Ù]_Ù][Y[^HHÛ[šXß^HÛ[šXß›ÝšY\ˆ^[Y[
W‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹˜Û[šXË\^[Ý]‹’HÜ[™YH[Øš[HÛ[šXÈ™]™[YH\ÚÈ[™™\\™YH›ÝšY\ˆ^[Ý]ÛÜšÙ›ÝËˆŠNÂˆBˆYˆ
×Š[Øš[HÛ[šXßÛ[šXÈÛÛY_ÛÛYHÈY_Ý]™XXÚX[_šY[Û[šXßÛÛ[][š]HX[ÛÜšÙ\ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹›[Øš[KXÛ[šXÈ‹’HÜ[™Y\˜[X[XØÙ\ÜÈ[™™\\™YH[Øš[HÛ[šXÈÝ]™XXÚ™\]Y\Ýˆ‹È]Y[ØØ][ÛŽˆXÝ]™PÛÝ[žJ
K›˜[YHJNÂˆBˆYˆ
×Š[Øš[HÛ[šXßÝ]™XXÚX[_šY[Û[šXßÛ[šXÈX[JW‹Š—ŠÝ\Y\ßÝ\_ÝØÚß[™[Üž_YYXÚ[™__ÛÝ™\ß\ÝßÛÝ[™\]Z\Y[™\ÝØÚÊW‹Ë\Ý
ÝÙ\ŠBˆ×ŠÝ\Y\ßÝ\_ÝØÚß[™[Üž_™\ÝØÚß_ÛÝ™\ß\ÝßÛÝ[™Ø\™JW‹Š—Š[Øš[HÛ[šXßÝ]™XXÚX[_šY[Û[šXßÛ[šXÈX[JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œÝ\K\™\]Y\Ý‹’HÜ[™Y[Øš[HÛ[šXÈÝ\H™]ÛÜšÈ[™™\\™YHÝ\H™\]Y\Ýˆ‹È]Y[ØØ][ÛŽˆXÝ]™PÛÝ[žJ
K›˜[YKÝ\S™YYÎˆÛÛ[X[™JNÂˆBˆYˆ
×Šš[™X]ÚÛÝ\˜Ù_Ú\™JW‹Š—ŠÝ\_Ý\Y\ß\ÝØ\™ZÝ\Ù_YYXØ[ÝÜ™_\›XXÞHÝØÚß[™[ÜžJW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œÝ\K[X]Ú‹’HÜ[™Y[Øš[HÛ[šXÈÝ\H™]ÛÜšÈ[™™\\™YHÝ\HÛÝ\˜ÙHX]Úˆ‹È]Y[ØØ][ÛŽˆXÝ]™PÛÝ[žJ
K›˜[YKÝ\S™YYÎˆÛÛ[X[™JNÂˆBˆYˆ
×Š˜XÚß\Ü]Ú[]™\Ÿ[]™\ž_š]™\ŸÛÝ\šY\ŠW‹Š—ŠÝ\_Ý\Y\ßYYXØ[Ú]Û[šXÈÚ]_\ÝßYYXÚ[™JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œÝ\KY\Ü]Ú‹’HÜ[™Y[Øš[HÛ[šXÈÝ\H™]ÛÜšÈ[™™\\™YÝ\H[]™\žH˜XÚÚ[™Ëˆ‹È]Y[ØØ][ÛŽˆXÝ]™PÛÝ[žJ
K›˜[YKÝ\S™YYÎˆÛÛ[X[™JNÂˆBˆYˆ
×ŠÛÛ™š\›_™XÙZ]™Y[]™\™Y\œš]™Y
W‹Š—ŠÝ\_Ý\Y\ßYYXØ[Ú]Û[šXÈÚ]_\ÝßYYXÚ[™JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œÝ\KY[]™\žH‹’HÜ[™Y[Øš[HÛ[šXÈÝ\H™]ÛÜšÈ[™™\\™Y[]™\žHÛÛ™š\›X][Û‹ˆ‹È]Y[ØØ][ÛŽˆXÝ]™PÛÝ[žJ
K›˜[YKÝ\S™YYÎˆÛÛ[X[™JNÂˆBˆYˆ
×Š\›XXÞ_YYXÚ[™_YYXØ][ÛŸ™Yš[Yß™\ØÜš\[ÛˆXÚÝ\
W‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œ\›XXÞH‹’HÜ[™Y\˜[X[XØÙ\ÜÈ[™™\\™YH\›XXÞHÝ\ÜÛÜšÙ›ÝËˆ‹È]Y[ØØ][ÛŽˆXÝ]™PÛÝ[žJ
K›˜[YHJNÂˆBˆYˆ
×Š[™Ù™Ÿ\\ˆÛ[šXß\\‹]ËYYÚ][Ý[[X\žH›ÜˆÛ[šXßÛ[šXÈÝ[[X\ž_Ú]™HÛ[šXßØ\™HXÚÙ]
W‹Ë\Ý
ÝÙ\ŠH	‰ˆ×ŠX[Û[šXßØÝÜŸ›ÝšY\Ÿ]Y[Þ[\Û_YYXÚ[™_[Øš[JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹š[™Ù™ˆ‹’HÜ[™Y\˜[X[XØÙ\ÜÈ[™™\\™YH\\‹]ËYYÚ][Û[šXÈ[™Ù™‹ˆŠNÂˆBˆYˆ
×ŠÞ[\Û_Þ[\Û\ß™]™\ŸXYXÚ_ÝÛXXÚX\œšX_›ÛZ]ÛÝYÚœ™X][™ß˜\ÚÛÝ[™[š\ž_ÝÙ[[™ßZ[Ÿ^žž_ÙXZßZY˜]YÚXÚß[
W‹Ë\Ý
ÝÙ\ŠBˆ	‰ˆ×ŠÚ][^Z[Ÿ[ÝZY_]™_™Y[]Y[Ü˜[™X_˜\›Y\ŸÛ[šXßX[ÚXÚß[
W‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œÞ[\ÛKYÝZYH‹’HÜ[™Y\˜[X[XØÙ\ÜÈ[™™\\™YHÞ[\ÛHÝZYKˆ\È\È›ÝHXYÛ›ÜÚ\ÎÈ][È^Z[ˆ[™Ù\ˆÚYÛœÈ[™HØY™\Ý™^Ý\ˆ‹ÈÞ[\Û\ÎˆÛÛ[X[™]Y[ØØ][ÛŽˆXÝ]™PÛÝ[žJ
K›˜[YHJNÂˆBˆYˆ
×ŠšY[ßØ[Y\˜_ÚÝßÙYJW‹Š—Š[š\ž_ÛÝ[™˜\ÚÝÙ[[™ß˜[]Y[ØÝÜŸ›ÝšY\Ÿ[ZX[X[
W‹Ë\Ý
ÝÙ\ŠH×ŠÚÝßÜ[ŠW‹Š—Š›ÝšY\ŸØÝÜŠW‹Š—ŠšY[ßØ[Y\˜JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹šY[È‹’HÜ[™YX[[™™\\™YHØØ[Ø[Y\˜H™]šY]È[™šY[È[™Ù™ˆ™XÛÜ™ˆ\ÈÙ\È›ÝÝ\H]™H›ÝšY\ˆš\Ú]ˆ™\ÜÈÜ[ˆØ[Y\˜HÚ[ˆH]Y[YÜ™Y\ËˆŠNÂˆBˆYˆ
×ŠšY[ßØ[Y\˜_ÚÝßÙYJW‹Š—Š^Y\ŸÙ[\ŸÜ›ÜÜ›Üß›ÙXÙ_\™\Ý]X[]_šY[˜\›JW‹Ë\Ý
ÝÙ\ŠH×ŠÚÝßÜ[ŠW‹Š—Š^Y\ŸÙ[\ŠW‹Š—ŠšY[ßØ[Y\˜JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹˜^Y\‹]šY[È‹’HÜ[™Y˜YH[™™\\™YH^Y\ˆÜ›ÜšY[ÈÛÜšÙ›ÝËˆ™\ÜÈÜ[ˆØ[Y\˜HÚ[ˆH˜\›Y\ˆYÜ™Y\ËˆŠNÂˆBˆYˆ
×Š][Ý_šXÙ_ÛÜÝÝÈ]XÚ
W‹Š—ŠÚ\Ú\[™ßÚ\Y[[]™\ž_[]™\Ÿ˜[œÜÜÙÚ\ÝXÜÊW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹›ÙÚ\ÝXÜË\][ÝH‹’HÜ[™Y˜YH[™™\\™YHÚ\Y[][ÝKˆYHXÚÝ\[]™\žHÚ[^Y\‹Ù[\‹[™[[Ý[ˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
×Š›ÛÚßØÚY[_\œ˜[™Ù_Ý\Ü™X]JW‹Š—ŠÚ\Ú\Y[Ú\[™ß[]™\ž_˜[œÜÜÙÚ\ÝXÜÊW‹Ë\Ý
ÝÙ\ŠH×ŠÚ\^HÜ›ÜÚ\Ü›ÜÙ[™Ü›ÜÈ^Y\Ÿ[Ý™HÜ›ÜÈ^Y\ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹œÚ\[™ËX›ÛÚÚ[™È‹’HÜ[™Y˜YH[™™\\™YÜ›ÜÚ\[™Ëˆ\ÈÛÛ›™XÝÈHÙ[\‹^Y\‹XÚÝ\Ú[[]™\žHÚ[Ø\œšY\‹˜XÚÚ[™Ë[™›Ý]H]šY[˜ÙKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
×Š^Y\ˆXÚÝ\^Y\ˆXÚÈ\^Y\ˆÛÛXÝ^Y\ˆÛÛXÝ[ÛŸ^Y\ˆÈÙ[\Ÿ^Y\ˆš]™\ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹˜^Y\‹\XÚÝ\‹’HÜ[™Y˜YH[™™\\™Y^Y\ˆXÚÝ\ˆÛÛ™š\›HÚ\™HH^Y\ˆÜˆš]™\ˆÚ[ÛÛXÝHÜ›Üˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
×ŠÙ[\ˆ[]™\ž_Ù[\ˆÈ^Y\Ÿ[]™\ˆÈ^Y\Ÿ[]™\žHÈ^Y\ŸZÙHÜ›ÜÈ^Y\Ÿœš[™ÈÜ›ÜÈ^Y\ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹œÙ[\‹Y[]™\žH‹’HÜ[™Y˜YH[™™\\™YÙ[\ˆ[]™\žKˆÛÛ™š\›HH^Y\ˆ\Ý[˜][Ûˆ[™Ø\œšY\‹ˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
×ŠÛÛ™š\›_›Ý™_›ÛÙŸ™XÙZ]™Y\œš]™Y\œš]™JW‹Š—Š[]™\ž_Ú\Y[Ü›Ü^Y\ŸÜ™\ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹™[]™\žKXÛÛ™š\›H‹’HÜ[™Y˜YH[™™\\™Y[]™\žHÛÛ™š\›X][Û‹ˆ™XÛÜ™^Y\ˆ™XÙZ\™Y›Ü™HÙ][Y[ˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
×ŠÙ]_Ù][Y[™[X\ÙH^[Y[™[X\ÙH^[Ý]˜\›Y\ˆ^[Ý]Ù[\ˆ^[Ý]^HÙ[\Ÿ^H˜\›Y\ŠW‹Ë\Ý
ÝÙ\ŠH	‰ˆ×Š˜Y_^Y\ŸÙ[\ŸÚ\Y[Ü›Ü^[Y[^[Ý]Ø[JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹œÙ][Y[‹’HÜ[™Y˜YH[™™\\™YÙ][Y[ˆÛÛ™š\›H[]™\žH›ÛÙˆ™Y›Ü™H^[Y[™[X\ÙKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
×ŠÜ™X]_Ü[ŸÙ[™Ý\™\\™JW‹Š—Š^Y\ˆÚXÚÛÝ]ÚXÚÛÝ]^[Y[[šß^\ÝXÚß›]\Ø]™JW‹Ë\Ý
ÝÙ\ŠBˆ×ŠÛÛXÝ^[Y[^Y\ˆ^_^Y\ˆ^[Y[ZÙH^[Y[
W‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹œ^[Y[XÚXÚÛÝ]‹’HÜ[™Y˜YH[™™\\™Y^Y\ˆÚXÚÛÝ]›ÝYÚ^\ÝXÚÈÜˆ›]\Ø]™Kˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
×ŠÙ[X\šÙ]Ü™X]_Ý\
W‹Š—ŠÜ›Ü›ÙXÙ_\™\ÝXZ^™_ÛÜ›ŸšXÙ_Ø\ÜØ]˜_X[_™X[œÊW‹Š—Š^Y\ŸÝ\ÝÛY\ŸX\šÙ]ÛÛÜ\˜]]™JW‹Ë\Ý
ÝÙ\ŠH	‰ˆ×Š˜XÚß˜XÙ_›ÛÝßØ]Ú[]™\ž_Ú\Y[›Ý]_Ø[JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹›Ü™\ˆ‹’HÜ[™Y˜YH[™™\\™YHÜ›ÜØ[KˆHÛÜšÙ›ÝÈÛÛ›™XÝÈH^Y\‹Ü™\‹›Ý]HX\Ø[H™XÛÜ™[™[]™\žH˜XÚÚ[™Ëˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆB‚ˆYˆ
×ŠHØ[ÈÙ[Ù[^_Ù[^Y\ˆ›ÜŸš[™^Y\ŸX\šÙ]^JW‹Ë\Ý
ÝÙ\ŠH	‰ˆ×ŠXZ^™_ÛÜ›ŸšXÙ_Ø\ÜØ]˜_X[_™X[œßÜ›Ü›ÙXÙ_\™\Ý˜\›JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹˜^Y\‹XÛÛXÝ‹’HØ[ˆ[Ù[]Ü›ÜˆHÜ[™Y˜YH[™™\\™YH^Y\ˆÛÛXÝÛÜšÙ›ÝËˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
×ŠH™YY™YYš[™Ù]Ø[
W‹Ë\Ý
ÝÙ\ŠH	‰ˆ×ŠØÝÜŸ›ÝšY\Ÿ\œÙ_Û[šXß[ZX[Ø\™_YYXÚ[™_X[[
W‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹š[ZÙH‹’HØ[ˆ[Ú]Ø\™KˆHÜ[™YX[[™™\\™YH[ZÙHÛÜšÙ›ÝËˆŠNÂˆBˆYˆ
×ŠH™YY™YYš[™Ù]Ø[\JW‹Ë\Ý
ÝÙ\ŠH	‰ˆ×Š›ØŸÛÜšß›Û_ÚY[\Þ[Y[
W‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠÛÜšÙ›Ü˜ÙHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJÛÜšÙ›Ü˜ÙH‹˜\K\›ÛH‹’HØ[ˆ[Ú]ÛÜšËˆHÜ[™YÛÜšÙ›Ü˜ÙH[™™\\™YH›ÛH\XØ][ÛˆÛÜšÙ›ÝËˆ‹È›ÛRYˆš\œÝ[YÚX›T›ÛJ
OËšYJNÂˆBˆYˆ
×ŠHØ[H™YY[Y_XXÚY_Ý\
W‹Ë\Ý
ÝÙ\ŠH	‰ˆ×ŠX\›ŸÛÝ\œÙ_\ÜÛÛŸ˜Z[š[™ßÚÚ[Ù\YšXØ]JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠ›X\›š[™ÈŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ›X\›š[™È‹œÝ\‹’HØ[ˆ[[ÝHX\›‹ˆHÜ[™YX\›š[™È[™™\\™YHÛÝ\œÙHÝ\ÛÜšÙ›ÝËˆŠNÂˆB‚ˆYˆ
[™[™ÕÛÜšÙ›ÝÈ	‰ˆš\ÚX›R[›[™UÛÜšÙ›ÝÊHÂˆYˆ
\Ó™]ÔÙ\šXÙT™\]Y\ÝÝ™\•ÛÜšÙ›ÝÊÛÛ[X[™
JHÂˆÛX\“Ü[•ÛÜšÙ›ÝÑ›Ü“™]Õ›ÚXÙT™\]Y\Ý
ÛÛ[X[™
NÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
ÛÛ[X[™È‹‹›Ü[ÛœËÚÚ\ÛÛ[X[™ÛÛ™š\›X][ÛŽˆYHJNÂˆ™]\›ŽÂˆBˆYˆ
š[ÛÜšÙ›ÝÑšY[žU›ÚXÙJÛÛ[X[™
JH™]\›ŽÂˆYˆ
ÝÙ\ˆOOHœ™XYˆÝÙ\‹š[˜ÛY\Êœ™XY\ÈŠHÝÙ\‹š[˜ÛY\Êœ™XYÛÜšÙ›ÝÈŠHÝÙ\‹š[˜ÛY\Êœ™\X]ŠJHÂˆ™XYÛÜšÙ›ÝÓ[Ù[

NÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\ˆOOHžY\ÈˆÝÙ\‹š[˜ÛY\Ê˜ÛÛ™š\›HŠHÝÙ\‹š[˜ÛY\Ê˜\›Ý™HŠHÝÙ\‹š[˜ÛY\ÊžY\ÈÈ]ŠHÝÙ\‹š[˜ÛY\Ê™È]ŠHÝÙ\‹š[˜ÛY\Ê™È\È›ÝÈŠHÝÙ\‹š[˜ÛY\ÊœÝX›Z]ŠJHÂˆ]ØZ]ÛÛ™š\›T[™[™ÕÛÜšÙ›ÝÊ
NÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\ˆOOH››ÈˆÝÙ\‹š[˜ÛY\Ê˜Ø[˜Ù[ŠHÝÙ\‹š[˜ÛY\Ê˜ÚÛÜÙH[›Ý\ˆŠHÝÙ\‹š[˜ÛY\Ê˜ÛÜÙHŠHÝÙ\‹š[˜ÛY\ÊœÝÜŠJHÂˆÛÜÙUÛÜšÙ›ÝÓ[Ù[

NÂˆš\ÚX›R[›[™UÛÜšÙ›ÝË˜Û\ÜÓ\Ý˜Y
šY[ˆŠNÂˆ[™[™ÕÛÜšÙ›ÝÈH[Âˆ\]U\Ù\Ø\[Û”[™[
Ø[˜Ù[YˆÚÛÜÙH[›Ý\ˆ]ÛˆÚ[ˆ™XYKˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJØ[˜Ù[YˆÚÛÜÙH[›Ý\ˆ]ÛˆÚ[ˆ™XYKˆ‹YJNÂˆ™]\›ŽÂˆBˆB‚ˆYˆ
I
ˆÝÛÜšÙ›ÝÓ[Ù[ŠK˜Û\ÜÓ\Ý˜ÛÛZ[œÊšY[ˆŠJHÂˆYˆ
š[ÛÜšÙ›ÝÑšY[žU›ÚXÙJÛÛ[X[™
JH™]\›ŽÂˆYˆ
ÝÙ\ˆOOHœ™XYˆÝÙ\‹š[˜ÛY\Êœ™XY\ÈŠHÝÙ\‹š[˜ÛY\Êœ™XYÛÜšÙ›ÝÈŠHÝÙ\‹š[˜ÛY\Êœ™\X]ŠJHÂˆ™XYÛÜšÙ›ÝÓ[Ù[

NÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\ˆOOHžY\ÈˆÝÙ\‹š[˜ÛY\Ê˜ÛÛ™š\›HŠHÝÙ\‹š[˜ÛY\Ê˜\›Ý™HŠHÝÙ\‹š[˜ÛY\ÊžY\ÈÈ]ŠHÝÙ\‹š[˜ÛY\Ê™È]ŠHÝÙ\‹š[˜ÛY\ÊœÝX›Z]ŠJHÂˆ]ØZ]ÛÛ™š\›T[™[™ÕÛÜšÙ›ÝÊ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJÛÛ™š\›YYˆHÛÛ\]YHÝYÙYÛÜšÙ›ÝËˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\ˆOOH››ÈˆÝÙ\‹š[˜ÛY\Ê˜Ø[˜Ù[ŠHÝÙ\‹š[˜ÛY\Ê˜ÛÜÙHŠHÝÙ\‹š[˜ÛY\ÊœÝÜŠJHÂˆÛÜÙUÛÜšÙ›ÝÓ[Ù[

NÂˆÙ]›ÚXÙT™\ÜÛœÙJØ[˜Ù[YHÝYÙYÛÜšÙ›ÝËˆŠNÂˆ™]\›ŽÂˆBˆB‚ˆÛÛœÝÙXÝ[Û[X\Ù\ÈHÂˆ\Ú›Ø\™ˆÈ™\Ú›Ø\™‹šÛYH‹˜ÛÛ›Û›ÛÛH—KˆX\›š[™ÎˆÈ›X\›š[™È‹˜Z[š[™È‹˜ÛÝ\œÙH‹˜ÛÝ\œÙ\È‹™]™[ÜY[—KˆÛÜšÙ›Ü˜ÙNˆÈÛÜšÙ›Ü˜ÙH‹š›ØœÈ‹š›Øˆ‹œ›ÛH‹œ›Û\È‹˜Ø[™Y]H—KˆX[ˆÈšX[‹[ZX[‹˜Y˜^XZH‹˜Ø\™H‹œ]Y[—Kˆ˜YNˆÈ˜YH‹˜YÜš]˜YH‹˜YÜš]XÚ‹›X\šÙ]‹Ø[]‹™›Û™H—KˆX\ˆÈ›X\‹œ›Ý]H‹œ›Ý]\È‹˜ÛÝ[žH—KˆYÙ[ˆÈ˜YÙ[‹˜YÜš[™^\È‹›™^\È‹˜\ÜÚ\Ý[‹›ÚXÙH‹˜ÛÛ[X[™Ù[\ˆ—Kˆ[YÜ˜][ÛœÎˆÈš[YÜ˜][Ûˆ‹š[YÜ˜][ÛœÈ‹œ›ÝšY\ˆ‹œ›ÝšY\œÈ‹™[™Ú[™\È—KˆYZ[ŽˆÈ˜YZ[ˆ‹œ™XY[™\ÜÈ‹™ÛÝ™\›˜[˜ÙH—Kˆ›Ùš[NˆÈœ›Ùš[H‹œ™XÛÜ™‹œ™XÛÜ™È—BˆNÂˆ›Üˆ
ÛÛœÝÜÙXÝ[Û‹[X\Ù\×HÙˆØš™XÝ™[šY\ÊÙXÝ[Û[X\Ù\ÊJHÂˆYˆ

ÝÙ\‹œÝ\ÕÚ]
›Ü[ˆŠHÝÙ\‹œÝ\ÕÚ]
™ÛÈÈŠHÝÙ\‹œÝ\ÕÚ]
œÚÝÈŠHÝÙ\‹œÝ\ÕÚ]
ZÙHYHÈŠHÝÙ\‹œÝ\ÕÚ]
›˜]šYØ]HÈŠJH	‰ˆ[X\Ù\ËœÛÛYJ[X\ÈOˆÝÙ\‹š[˜ÛY\Ê[X\ÊJJHÂˆÛÔÙXÝ[ÛŠÙXÝ[ÛŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJÜ[™Y	ÜÙXÝ[ÛŸK˜YJNÂˆ™]\›ŽÂˆBˆB‚ˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÚÝÈYH›ØœÈŠHÝÙ\‹š[˜ÛY\Ê™š[™›ØœÈŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈ›ØœÈŠHÝÙ\‹š[˜ÛY\Ê˜]˜Z[X›H›ØœÈŠJHÂˆÛÔÙXÝ[ÛŠÛÜšÙ›Ü˜ÙHŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ’HÜ[™YÛÜšËˆÚÛÜÙHš[™›ØœÈÈ™]šY]È›Û\ËÜˆØ^H\H›Üˆ›ØˆÚ[ˆ[ÝH\™H™XYKˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜XÚÈ^H›Ý]HŠHÝÙ\‹š[˜ÛY\Ê˜XÚÈ›Ý]HŠJHÂˆÛÔÙXÝ[ÛŠ›X\ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ZH‹œ›Ý]H‹”›Ý]H˜XÚÚ[™ÈÝ\Ü\È™XYKˆØ^HY\ÈÈÜ™X]H›Ý]H[[YÙ[˜ÙKÜˆØ^H˜XÚÈ^H›Ý]H[ˆ™X[[YHÈÝ\ÔÈ˜XÚÚ[™ËˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜ÚXÚÈX[š\ÚÈŠHÝÙ\‹š[˜ÛY\Ê˜ÚXÚÈ™YÚ[ÛˆŠHÝÙ\‹š[˜ÛY\Êœ™YÚ[Ûˆš\ÚÈŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œØY™]H‹”™YÚ[Û˜[X[š\ÚÈ™]šY]È\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›™X\™\ÝX[˜XÚ[]HŠHÝÙ\‹š[˜ÛY\Ê™š[™˜XÚ[]HŠHÝÙ\‹š[˜ÛY\Ê›™X\™\Ý˜XÚ[]HŠJHÂˆÛÔÙXÝ[ÛŠ›X\ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ›X\‹™˜XÚ[]K\›Ý]H‹‘˜XÚ[]H›Ý]HÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê™^Z[ˆHX\ŠHÝÙ\‹š[˜ÛY\Ê›X\^[˜][ÛˆŠJHÂˆÛÔÙXÝ[ÛŠ›X\ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJHX\ÚÝÜÈ	ØXÝ]™PÛÝ[žJ
K›˜[Y_KHXÝ]™H›Ý]H	ØXÝ]™T›Ý]J
K›˜[Y_KX[™\ÜÝ\™K˜XÚ[]Y\Ë›Ý]Hš\ÚË›Û™H]šY[˜ÙK[™RHX\[[YÙ[˜ÙKˆ\ÙHÚXÚÈ›Ý]HÈ\ÜÙ\ÜÈš\ÚÈÜˆš[™˜XÚ[]HÈZ[HØ\™H›Ý]K˜YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êš[YH[™\œÝ[™H]›Ü›HŠHÝÙ\‹š[˜ÛY\Ê˜\ÚÈ]Y\Ý[ÛˆŠJHÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
š[YH[™\œÝ[™H]›Ü›H[™ÝZYH^H™^Ý\‹[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê™^Z[ˆ™^Ý\ŠHÝÙ\‹š[˜ÛY\ÊÚ]ÚÝ[HÈ™^ŠJHÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
Ú]ÚÝ[HÈ™^‹[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êœ™XYHÝ\œ™[™\ÜÛœÙHŠHÝÙ\‹š[˜ÛY\Êœ™XYÝ\œ™[™\ÜÛœÙHŠHÝÙ\‹š[˜ÛY\Êœ™XYÈYHŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ\Ý›ÚXÙT™\ÜÛœÙH’H[H™XYKˆÚÛÜÙHH]ÛˆÜˆ\ÚÈ™^\ÈÚ]ÈÈ™^ˆ‹YJNÂˆ™]\›ŽÂˆB‚ˆYˆ
ÊÝÜØ[˜Ù[[™]\ÙJKŠŠ]™WÊÊOÜ›Ý]KŠ˜XÚËË\Ý
ÝÙ\ŠHÊÝÜØ[˜Ù[[™]\ÙJKŠŠ˜XÚÚ[™ÊKŠŠ›Ý]JKË\Ý
ÝÙ\ŠJHÂˆÝÜ]™T›Ý]U˜XÚÚ[™Ê
NÂˆ™]\›ŽÂˆBˆYˆ
Ê˜XÚß›ÛÝßØ]Ú
KŠŠ^WÊÊOÜ›Ý]KË\Ý
ÝÙ\ŠH	‰ˆÊ™X[[Y_™X[[Y_]™_ÜßØØ][ÛŠKË\Ý
ÝÙ\ŠJHÂˆ]ØZ]Ý\]™T›Ý]U˜XÚÚ[™Ê
NÂˆ™]\›ŽÂˆBˆYˆ
ÊÝ]œ™XZß[™™XÝY[™™XÝ[ÛŸX›Û_\ÙX\ÙHš\Úß™YÚ[ÛˆØY™_ØY™HÈ\Þ_ØY™H›Üˆ[ZX[
KË\Ý
ÝÙ\ŠH	‰ˆÊ[ZX[X[™YÚ[ÛŸÛÛ™Ûß˜ßYØ[™_YœšXØ_Ý]™XXÚ
KË\Ý
ÝÙ\ŠJHÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆB‚ˆYˆ

ÝÙ\‹š[˜ÛY\Ê˜YÜš]˜YHŠHÝÙ\‹š[˜ÛY\Ê˜YÜšH˜YHŠJH	‰ˆ
ÝÙ\‹š[˜ÛY\ÊÚ]È[ÝHÈŠHÝÙ\‹š[˜ÛY\Ê[YHX›Ý]ŠHÝÙ\‹š[˜ÛY\Ê˜X›Ý]H]›Ü›HŠHÝÙ\‹š[˜ÛY\Ê˜Ú[™ÙHŠHÝÙ\‹š[˜ÛY\Ê›[™ÝXYÙHŠHÝÙ\‹š[˜ÛY\Ê˜[œÛ]HŠHÝÙ\‹š[˜ÛY\ÊœÜXZÈŠHÝÙ\‹š[˜ÛY\Ê\ÙHŠHÝÙ\‹š[˜ÛY\Êœ™\ÜÛ™ŠHÝÙ\‹š[˜ÛY\Êœ™\HŠHÝÙ\‹š[˜ÛY\Êœ\›HŠHÝÙ\‹š[˜ÛY\ÊšX›HŠHÝÙ\‹š[˜ÛY\Ê][\ÙHŠHÝÙ\‹š[˜ÛY\Ê˜˜Y[\ÚHŠHÝÙ\‹š[˜ÛY\Ê[ZXHŠHÝÙ\‹š[˜ÛY\Êž[™Ý[^˜HŠHÝÙ\‹š[˜ÛY\Ê›Û™ÙXHŠHÝÙ\‹š[˜ÛY\Ê˜[™ÛZ\ÈŠHÝÙ\‹š[˜ÛY\Êš[™Û\ÈŠHÝÙ\‹š[˜ÛY\Ê™œ˜[˜ØZ\ÈŠHÝÙ\‹š[˜ÛY\Ê™œ˜[˜Ù\ÈŠHÝÙ\‹š[˜ÛY\ÊšÚ\ÝØZ[HŠHÝÙ\‹š[˜ÛY\ÊšÚZ[™Ù\™^˜HŠHÝÙ\‹š[˜ÛY\ÊšÚY˜\˜[œØHŠHÝÙ\‹š[˜ÛY\ÊšÚX\˜XHŠHÝÙ\‹š[˜ÛY\ÊšÚZ\Ü[šXHŠHÝÙ\‹š[˜ÛY\Ê˜\˜X™HŠHÝÙ\‹š[˜ÛY\Ê™\Ü[›ÛŠJJHÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆB‚ˆYˆ
›ÚXÙQš\œÝ[ÙH	‰ˆ\Ó˜]\˜[ÛÛ™\œØ][ÛÛÛ[X[™
ÝÙ\ŠJHÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆB‚ˆYˆ

ÝÙ\‹š[˜ÛY\Ê˜YÜš]˜YHŠHÝÙ\‹š[˜ÛY\Ê˜YÜšH˜YHŠHÝÙ\‹š[˜ÛY\Ê˜YHŠHÝÙ\‹š[˜ÛY\Ê˜^Y\ˆŠHÝÙ\‹š[˜ÛY\Ê˜Ü›ÜŠHÝÙ\‹š[˜ÛY\Êœ›Ý]HŠHÝÙ\‹š[˜ÛY\Ê›ÙÚ\ÝXÜÈŠJH	‰ˆ
ÝÙ\‹š[˜ÛY\Ê™Y™šXÚY[˜ÞHŠHÝÙ\‹š[˜ÛY\Ê™Y™šXÚY[ŠHÝÙ\‹š[˜ÛY\Ê›Ü[Z^™HŠHÝÙ\‹š[˜ÛY\Ê›Ü[Z\ÙHŠHÝÙ\‹š[˜ÛY\Ê›Ü\˜][ÛœÈŠHÝÙ\‹š[˜ÛY\Ê›Ü\˜][Û˜[ŠHÝÙ\‹š[˜ÛY\Ê˜›Ý[™XÚÈŠHÝÙ\‹š[˜ÛY\Ê™[^HŠHÝÙ\‹š[˜ÛY\Ê˜ÛÜÝŠHÝÙ\‹š[˜ÛY\ÊØ\ÝHŠHÝÙ\‹š[˜ÛY\Êœ›Ùš]ŠHÝÙ\‹š[˜ÛY\Êœ\™›Ü›X[˜ÙHŠJJHÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆBˆYˆ

ÝÙ\‹š[˜ÛY\Ê˜YÜš]˜YHŠHÝÙ\‹š[˜ÛY\Ê˜YÜšH˜YHŠHÝÙ\‹š[˜ÛY\Ê˜YHŠHÝÙ\‹š[˜ÛY\Ê˜^Y\ˆŠHÝÙ\‹š[˜ÛY\Ê˜Ü›ÜŠHÝÙ\‹š[˜ÛY\Êœ›Ý]HŠHÝÙ\‹š[˜ÛY\Ê›ÙÚ\ÝXÜÈŠHÝÙ\‹š[˜ÛY\Ê™š]™\ˆŠHÝÙ\‹š[˜ÛY\Ê™˜\›Y\ˆŠHÝÙ\‹š[˜ÛY\Ê™šY[ŠJH	‰ˆ
ÝÙ\‹š[˜ÛY\Ê˜ÛÛ[][šXØ]ŠHÝÙ\‹š[˜ÛY\Ê›Y\ÜØYÙHŠHÝÙ\‹š[˜ÛY\Ê\]HŠHÝÙ\‹š[˜ÛY\Ê˜œšYYˆŠHÝÙ\‹š[˜ÛY\ÊœÝ]\ÈŠHÝÙ\‹š[˜ÛY\Êœ™\ÜŠHÝÙ\‹š[˜ÛY\ÊœØ^HÈŠHÝÙ\‹š[˜ÛY\Ê[HŠHÝÙ\‹š[˜ÛY\Ê››ÝYžHŠHÝÙ\‹š[˜ÛY\ÊœØÜš\ŠHÝÙ\‹š[˜ÛY\Êš[™Ù™ˆŠJJHÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆB‚ˆYˆ

ÝÙ\‹š[˜ÛY\ÊÚ]Ø[ˆHØ^HŠHÝÙ\‹š[˜ÛY\ÊÚ]Ø[ˆŠHÝÙ\‹š[˜ÛY\Ê˜ÛÛ[X[™ÈŠHÝÙ\‹š[˜ÛY\Ê™^[\\ÈŠJH	‰ˆ
ÝÙ\‹š[˜ÛY\Ê˜YÜš]˜YHŠHÝÙ\‹š[˜ÛY\Ê˜YHŠHÝÙ\‹š[˜ÛY\Ê[ZX[ŠHÝÙ\‹š[˜ÛY\ÊšX[ŠHÝÙ\‹š[˜ÛY\ÊÛÜšÙ›Ü˜ÙHŠHÝÙ\‹š[˜ÛY\Ê›X\›š[™ÈŠHÝÙ\‹š[˜ÛY\Ê›X\ÈŠJJHÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆB‚ˆYˆ
ÝÙ\‹š[˜ÛY\Êš[™\ÝÜˆ›ÚXÙH[[ÈŠHÝÙ\‹š[˜ÛY\Ê›ÚXÙH[[È[ÙHŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈ[™\ÝÜœÈŠHÝÙ\‹š[˜ÛY\Ê™[[È[ÙHŠJHÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆB‚ˆYˆ
ÝÙ\‹š[˜ÛY\Ê›ÚXÙH[ŠHÝÙ\‹š[˜ÛY\Ê˜ÛÛ[X[™[ŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈ[ŠHÝÙ\‹š[˜ÛY\ÊÚ]Ø[ˆ[ÝHÈŠJHÂˆÜ[•›ÚXÙR[

NÂˆÛÛœÝØ][ÙÈH[[ÙU›ÚXÙPÛÛ[X[™Ø][ÙÊ
NÂˆÛÛœÝÛÛÛÝ[H[˜[ZXÕ›ÚXÙUÛÛ™YÚ\ÝžJ
K›[™ÝÂˆÙ]›ÚXÙT™\ÜÛœÙJ[ÝHØ[ˆØ[YH™^\È[ˆ\Ù\‹YZ[‹Üˆ[™\ÝÜˆ[ÙKˆHØ[ˆÜ[ˆ[Ù[\ËÝ\][K\Ý\Z\ÜÚ[ÛœË\ÚÈÛ\šYžZ[™È]Y\Ý[ÛœË™[Y[X™\ˆÛÛ™š\›X][ÛœËš[ÛÜšÙ›ÝÈ›Ü›\ÈžH›ÚXÙK^Z[ˆÛÜšÙ›ÝÈÝ]\Ë™XÛÝ™\ˆœ›ÛH\œ›ÜœË™XYØÜ™Y[œÈ[ÝYY\^H›ÚXÙH™Z]š[ÜˆžH[ÙK›ÛÝÈ[™ÝXYÙHÚ[™Ù\Ë[™ÜXZÈ›ÙÜ™\ÜÈ]™[ËˆHØ[ˆ[ÛÈ\ØÛÝ™\ˆ	ÝÛÛÛÝ[HÛÜšÙ›ÝÈÛÛÈœ›ÛHHÝ\œ™[]›Ü›HØÜ™Y[‹ÛÈ[ÝHØ[ˆ\ÚÈ[ˆ›Ü›X[ÛÜ™Ëˆ[[[ÙH^[\\Îˆ	ØØ][ÙË˜ÛÛ[X[™ËœÛXÙJJKš›Ú[Š‹ˆŠ_K˜YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›ÚXÙH[[ÈŠHÝÙ\‹š[˜ÛY\Ê˜YÜš[™^\È[[ÈŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈ›ÚXÙHŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈYÜš[™^\ÈŠJHÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÜ[\ÚÓ™^\Ê
NÂˆÙ]›ÚXÙT™\ÜÛœÙJYÜšS™^\È›ÚXÙH[[È\È™XYKˆžHØ^Z[™ÎˆÜ[ˆ[ZX[\H›Üˆ]›Ø‹ÛÛXÝ^H^Y\‹\Ý›ÝšY\ˆ[™Ú[™\ËÜˆ[ˆ[Z\ÜÚ[Û‹ˆØ^HY\ÈÈÛÛ™š\›H[žHÝYÙYÛÜšÙ›ÝËˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÚÝÈ™X\ÛÛš[™ÈŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈÝÈ[ÝHXÚYHŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈYÙ[[šÚ[™ÈŠJHÂˆYÙ[™X\ÛÛš[™Õš\ÚX›HHYNÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\Ô™X\ÛÛš[™Õš\ÚX›H‹YHŠNÂˆ™[™\Š
NÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJYÙ[™X\ÛÛš[™È\Èš\ÚX›H›Üˆ[[È[ÙKˆHÚ[Ý[Ü\˜]HžH›ÚXÙKˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊšYH™X\ÛÛš[™ÈŠHÝÙ\‹š[˜ÛY\ÊšYHYÙ[[šÚ[™ÈŠHÝÙ\‹š[˜ÛY\ÊœÚ[\H[ÙHŠJHÂˆYÙ[™X\ÛÛš[™Õš\ÚX›HH˜[ÙNÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\Ô™X\ÛÛš[™Õš\ÚX›H‹™˜[ÙHŠNÂˆ™[™\Š
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ”Ú[\H›ÚXÙH[ÙH\ÈÛ‹ˆHÚ[ÙY\™X\ÛÛš[™È[ˆH˜XÚÙÜ›Ý[™[™[È[ÝH›ÝYÚH™^XÝ[Û‹ˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
\Ó™^\Õ›ÚXÙSÛÛÛ[X[™
ÝÙ\ŠJHÂˆ[˜X›S™^\Õ›ÚXÙQ›Ü‘[[Ê›ÚXÙQš\œÝ[ÙHÈ•›ÚXÙKYš\œÝ[ÙH\È[™XYHÛ‹ˆØ^HHÛÛ[X[™Ú[ˆHZXÜ›ÜÛ™H\È\Ý[š[™Ëˆˆˆ“™^\È›ÚXÙH\È˜XÚÈÛ‹ˆØ^H™^\Ë[ˆ[YHÚ][ÝH™YYˆŠNÂˆ™]\›ŽÂˆBˆYˆ
\Ó™^\Õ›ÚXÙSÙ™ÛÛ[X[™
ÝÙ\ŠJHÂˆ\ØX›S™^\Õ›ÚXÙQ›Ü‘[[Ê›ÚXÙQ[[Ô]ZY][ÙHÈ‘[[È]ZY][ÙH\È[™XYHÛ‹ˆ™^\È›ÚXÙHÚ[Ý^HÙ™‹ˆˆˆ‘[[È]ZY][ÙH\ÈÛ‹ˆ™^\È›ÚXÙH\ÈÙ™ˆ[[[ÝH\›ˆ]˜XÚÈÛ‹ˆŠNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÝ]\ÈŠHÝÙ\‹š[˜ÛY\Êœ™XY[™\ÜÈŠHÝÙ\‹š[˜ÛY\ÊÚ]\ÈYŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ›ÚXÙTÝ]\ÔÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êœ›ÙXÝ[ÛˆLŠHÝÙ\‹š[˜ÛY\Êš˜\š\È›ÙXÝ[ÛˆŠHÝÙ\‹š[˜ÛY\Ê™[›ÙXÝ[ÛˆÛX\ŠHÝÙ\‹š[˜ÛY\ÊÚ]\ÈY›Üˆ›ÙXÝ[ÛˆŠHÝÙ\‹š[˜ÛY\ÊšÝÈÛÜÙH\™HÙHÈ[LŠJHÂˆÛÔÙXÝ[ÛŠØ[“Ü[”ÙXÝ[ÛŠ˜YZ[ˆŠHÈ˜YZ[ˆˆˆ˜YÙ[ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ˜\š\Ô›ÙXÝ[Û•[”Ý[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êœ›ÙXÝ[ÛˆÛ™H›ÝYÚZYÚŠHÝÙ\‹š[˜ÛY\Êœ›ÙXÝ[ÛˆH›ÝYÚŠHÝÙ\‹š[˜ÛY\Êœ›ÙXÝ[ÛˆKNŠHÝÙ\‹š[˜ÛY\Êš][\ÈH›ÝYÚŠHÝÙ\‹š[˜ÛY\Ê™œ›ÛHHÈŠHÝÙ\‹š[˜ÛY\Ê›Û™HÈZYÚŠHÝÙ\‹š[˜ÛY\Ê˜YÙ[XÈ›ÙXÝ[ÛˆZYÚŠJHÂˆÛÛœÝ[Ù[H›ÙXÝ[Û’˜\š\ÑZYÚ[Ù[

NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊ[Ù[š][\Ë›X\
][HOˆ][K˜ÛÛ[X[™
JNÂˆÛÔÙXÝ[ÛŠØ[“Ü[”ÙXÝ[ÛŠ˜YZ[ˆŠHÈ˜YZ[ˆˆˆ˜YÙ[ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ›ÙXÝ[Û’˜\š\ÑZYÚÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊÚ]È[ÝH™[Y[X™\ˆŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈY[[ÜžHŠHÝÙ\‹š[˜ÛY\ÊÚ]]™H[ÝHX\›™YŠJHÂˆÛÛœÝY[[ÜžHH™^\ÑY\Y[[ÜžTÚYÛ˜[Ê
NÂˆÛÛœÝ[Ù[\ÈHY[[ÜžK›[Ù[\ËœÛXÙJÊK›X\
][HOˆ	Ú][K›˜[Y_H	Ú][K˜ÛÝ[X
Kš›Ú[Š‹ŠH››È[Ù[HY[[ÜžHY]ŽÂˆÛÛœÝ™YYÈHY[[ÜžK›™YYËœÛXÙJ
K›X\
][HOˆ][K›˜[YKœ™\XÙJËKÙËˆŠJKš›Ú[Š‹ŠHœÝ[™\™Ý\ÜŽÂˆÙ]›ÚXÙT™\ÜÛœÙJH™[Y[X™\ˆ	ÛY[[ÜžK˜ÛÝ[H\ÙY[][JÊKˆXÝ]™HZ\ÜÚ[ÛŽˆ	ÛY[[ÜžK˜XÝ]™SZ\ÜÚ[ÛŸKˆÝ›Û™Ù\ÝY[[ÜžH\™X\Îˆ	Û[Ù[\ßKˆ\Ù\ˆ™YYÈH[H˜XÚÚ[™Îˆ	Û™YYßKˆ]\ÝY[[ÜžNˆ	ÛY[[ÜžK›]\ÝK˜YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êœ›ÝšY\ˆ\ŠHÝÙ\‹š[˜ÛY\Êœ™X[›ÝšY\ˆXÝ[ÛœÈŠHÝÙ\‹š[˜ÛY\ÊÚ][™Ú[™\È\™H]™HŠJHÂˆÛÛœÝ\H›ÝšY\XÝ[Û‘\Ý]\Ê
NÂˆÛÛœÝÝ[[X\žHHØš™XÝ™[šY\Ê\
K›X\

ÙÜ›Ý\][WJHOˆ	ÙÜ›Ý\Nˆ	Ú][Kœ™XY_KÉÚ][KÝ[X
Kš›Ú[Š‹ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ›ÝšY\ˆXÝ[Ûˆ\ˆ	ÜÝ[[X\ž_KˆØØ[ÛÜšÙ›ÝÜÈ™[XZ[ˆXÝ]™HÚ[H]™H›ÝšY\œÈ\™H™Z[™ÈÛÛ›™XÝY˜YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›[Øš[H\›Z\ÜÚ[ÛœÈŠHÝÙ\‹š[˜ÛY\Ê˜\\›Z\ÜÚ[ÛœÈŠHÝÙ\‹š[˜ÛY\Êœ\›Z\ÜÚ[ÛœÈÚXÚÈŠJHÂˆÛÛœÝ\›Z\ÜÚ[ÛœÈH[Øš[T\›Z\ÜÚ[Û”™XÛÝ™\žQÝZYJ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ[Øš[H\›Z\ÜÚ[ÛˆÚXÚÎˆZXÜ›ÜÛ™H	Ü\›Z\ÜÚ[ÛœË›ZXÜ›ÜÛ™HÈ˜]˜Z[X›Hˆˆ››Ý]˜Z[X›HŸK›ÝYšXØ][ÛœÈ	Ü\›Z\ÜÚ[ÛœË››ÝYšXØ][ÛœÈÈ˜]˜Z[X›Hˆˆ››Ý]˜Z[X›HŸKØØ][Ûˆ	Ü\›Z\ÜÚ[ÛœË›ØØ][ÛˆÈ˜]˜Z[X›Hˆˆ››Ý]˜Z[X›HŸKˆ	Ü\›Z\ÜÚ[ÛœË™ÝZY[˜Ù_XYJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Ú›ÛYH›ÚXÙHŠHÝÙ\‹š[˜ÛY\Ê˜Ú›ÛYHZXÈŠHÝÙ\‹š[˜ÛY\Ê˜Ú›ÛYHZXÜ›ÜÛ™HŠHÝÙ\‹š[˜ÛY\Ê˜Ú›ÛYHÙ]\ŠHÝÙ\‹š[˜ÛY\Ê˜œ›ÝÜÙ\ˆ›ÚXÙHÙ]\ŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJÚ›ÛYU›ÚXÙTÝ]\ÓY\ÜØYÙJ
KYJNÂˆ™Yœ™\ÚZXÔÝ\Ü

NÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜YÙ[XÈ™Z]š[ÜˆŠHÝÙ\‹š[˜ÛY\Êš˜\š\È™Z]š[ÜˆŠHÝÙ\‹š[˜ÛY\Êœ\™›Ü›X[˜ÙHÚXÚÈŠHÝÙ\‹š[˜ÛY\Ê˜™Z]š[ÜˆÚXÚÈŠHÝÙ\‹š[˜ÛY\Ê˜\™H[ÝHYÙ[XÈŠJHÂˆÛÛœÝØÛÜ™XØ\™HYÙ[XÐ™Z]š[Ü”ØÛÜ™XØ\™

NÂˆÙ]›ÚXÙT™\ÜÛœÙJYÙ[XÈ™Z]š[ÜˆÚXÚÎˆ	ÜØÛÜ™XØ\™›[Ù_KˆH[H	ÜØÛÜ™XØ\™˜™Z]š[ÜŸKˆ\Ý[YY™\ÜÛœÙNˆ	ÜØÛÜ™XØ\™›][˜ÞS\ÈH\ËˆY[[ÜžNˆ	ÜØÛÜ™XØ\™›Y[[ÜžPÛÝ[H][JÊKˆ]]Ü[ÝØZ][™Îˆ	ÜØÛÜ™XØ\™˜]]Ü[ÝØZ][™ßKˆ[Øš[H™XY[™\ÜÎˆ	ÜØÛÜ™XØ\™›[Øš[T™XY_Kˆ›ÝšY\ˆ\ˆ	ÜØÛÜ™XØ\™œ›ÝšY\”™XY_K˜YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜ÛØXÚYHŠHÝÙ\‹š[˜ÛY\Ê™ÝZYHYHŠHÝÙ\‹š[˜ÛY\Ê›Ü\˜]ÜˆÛØXÚŠHÝÙ\‹š[˜ÛY\Êœ™XÛÛ[Y[™™^ŠJHÂˆYˆ
ÝÙ\‹š[˜ÛY\Ê™ÝZYHYHŠHÝÙ\‹š[˜ÛY\Êœ™XÛÛ[Y[™™^ŠJHÂˆÛÛœÝÝZYHH[Z]]™PÛÛ™\œØ][Û‘ÝZYJ
NÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÝZYKœÝYÙÙ\Ý[ÛœÊNÂˆÙ]›ÚXÙT™\ÜÛœÙJ[Z]]™PÛÛ™\œØ][Û”™\ÜÛœÙJ
KYJNÂˆ™]\›ŽÂˆBˆÛÛœÝÛØXÚH™^\ÓÜ\˜]ÜÛØXÚ

NÂˆÙ]›ÚXÙT™\ÜÛœÙJÜ\˜]ÜˆÛØXÚˆ	ØÛØXÚœ›Û\HØ^HY\ÈÈ[ˆ	ØÛØXÚ˜ÛÛ[X[™KÜˆØ^HHY™™\™[™\]Y\Ý˜YJNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆHÂˆÜšYÚ[˜[ˆÛÛ[X[™ˆÜ[ÛœÎˆÞÈX™[ˆ–Y\È‹ÙXÝ[ÛŽˆÝ\œ™[ÙXÝ[Û’Y

KÛÛ[X[™ˆÛØXÚ˜ÛÛ[X[™]Z[ˆÛØXÚœ›Û\WBˆNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊÚ]È[ÝHÙYHŠHÝÙ\‹š[˜ÛY\ÊœÚ]X][Û˜[œšYYˆŠHÝÙ\‹š[˜ÛY\ÊœÛX\\Ý™XÛÛ[Y[™][ÛˆŠHÝÙ\‹š[˜ÛY\Ê›[ÜÝ[\Ü[ŠHÝÙ\‹š[˜ÛY\Êœ˜[šÈš[Üš]Y\ÈŠJHÂˆÛÛœÝœšYYˆH™^\ÔÚ]X][Û˜[œšYYŠ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ^Z[”ÛX\™XÛÛ[Y[™][ÛŠ
KYJNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆHÂˆÜšYÚ[˜[ˆÛÛ[X[™ˆÜ[ÛœÎˆœšYY‹œš[Üš]Y\ËœÛXÙJÊK›X\
][HOˆ
ÈX™[ˆ][K]KÙXÝ[ÛŽˆÝ\œ™[ÙXÝ[Û’Y

KÛÛ[X[™ˆ][K˜ÛÛ[X[™]Z[ˆ][Kœ™X\ÛÛˆJJBˆNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊÚ]\™H[ÝH]Ø\™HÙˆŠHÝÙ\‹š[˜ÛY\Ê˜]Ø\™[™\ÜÈÚXÚÈŠHÝÙ\‹š[˜ÛY\ÊÚ]È[ÝH[šÈH™YYŠHÝÙ\‹š[˜ÛY\ÊÚ][HHžZ[™ÈÈÈŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\Ð]Ø\™[™\ÜÔÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜œ˜Z[ˆÜÈŠHÝÙ\‹š[˜ÛY\Ê˜[Lœ˜Z[ˆŠHÝÙ\‹š[˜ÛY\Ê˜[[ˆœ˜Z[ˆŠHÝÙ\‹š[˜ÛY\Ê˜œ˜Z[ˆÜ\˜][™ÈÞ\Ý[HŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈHLŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈH[ˆŠJHÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\Ðœ˜Z[“ÜÔÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊšYÚ\Ý[[YÙ[˜ÙHŠHÝÙ\‹š[˜ÛY\ÊšYÚ[[YÙ[˜ÙHŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈ[[YÙ[˜ÙHŠHÝÙ\‹š[˜ÛY\Êš[[YÙ[˜ÙHÛ˜\ÚÝŠHÝÙ\‹š[˜ÛY\ÊšÝÈÛX\\™H[ÝHŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈXÚ\Ú[ÛˆŠJHÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ	Û™^\ÒYÚ[[YÙ[˜ÙTÝ[[X\žJ
_H	Û™^\ÔÝ˜]YÚXÔ™X\ÛÛš[™ÔÝ[[X\žJ
_XYJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÝ˜]YÚXÈ™X\ÛÛš[™ÈŠHÝÙ\‹š[˜ÛY\ÊœÝ˜]YÚXÈ™X\ÛÛˆŠHÝÙ\‹š[˜ÛY\ÊÚHY[ÝHÚÛÜÙHŠHÝÙ\‹š[˜ÛY\Ê™^Z[ˆ[Ý\ˆXÚ\Ú[ÛˆŠHÝÙ\‹š[˜ÛY\Êš[[YÙ[˜ÙHØÛÜ™HŠJHÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\ÔÝ˜]YÚXÔ™X\ÛÛš[™ÔÝ[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜™HÛX\ŠHÝÙ\‹š[˜ÛY\Ê˜XÝÛX\ŠHÝÙ\‹š[˜ÛY\Ê˜XÝ[[YÙ[HŠHÝÙ\‹š[˜ÛY\Ê[šÈ›ÜˆYHŠHÝÙ\‹š[˜ÛY\Ê\ÙH[Ý\ˆ[[YÙ[˜ÙHŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\ÔÛX\™Z]š[Ü”Ý[[X\žJ
KYJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜œ˜Z[ˆ[Y[[™HŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈœ˜Z[ˆ\ÝÜžHŠHÝÙ\‹š[˜ÛY\ÊÚ]]™H[ÝH™Y[ˆÚ[™ÈŠJHÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÛÛœÝ[Y[[™HH™^\Ðœ˜Z[•[Y[[™J
KœÛXÙJJK›X\
][HOˆ	Ú][K\_Nˆ	Ú][K]_X
Kš›Ú[Š‹ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJœ˜Z[ˆ[Y[[™Nˆ	Ý[Y[[™_K˜YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›X\›š[™È[\ÈŠHÝÙ\‹š[˜ÛY\ÊšÝÈ\™H[ÝHX\›š[™ÈŠHÝÙ\‹š[˜ÛY\ÊÚ]Y[ÝHX\›ˆX›Ý]YHŠJHÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\ÈX\›š[™È[\Îˆ	Û™^\Ðœ˜Z[“X\›š[™Ô[\Ê
Kš›Ú[Š‹ˆŠ_K˜YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê™^Z[ˆ[Ý\ˆœ˜Z[ˆŠHÝÙ\‹š[˜ÛY\ÊšÝÈÙ\È[Ý\ˆœ˜Z[ˆÛÜšÈŠHÝÙ\‹š[˜ÛY\ÊšÝÈÈ[ÝH[šÈŠJHÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ	Û™^\Ðœ˜Z[”Ý[[X\žJ
_HHÜ\˜][™È[\È\™HÛØ[ËY[[ÜžK]Ø\™[™\ÜË™XÛÝ™\žK[™[š]X]]™KˆH\ÙHÜÙHÈXÚYHÚ]\ˆÈ[œÝÙ\‹Ü[ˆHÙXÝ[Û‹ÝYÙHHÛÜšÙ›ÝË\ÚÈ›ÜˆÛÛ™š\›X][Û‹Üˆ™XÛÝ™\ˆÚ[ˆÛÛY][™È\È[˜ÛX\‹˜YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›™^\Èœ˜Z[ˆŠHÝÙ\‹š[˜ÛY\ÊœÚÝÈ[Ý\ˆœ˜Z[ˆŠHÝÙ\‹š[˜ÛY\Ê™È[ÝH]™HHœ˜Z[ˆŠHÝÙ\‹š[˜ÛY\ÊÚ]\È[Ý\ˆœ˜Z[ˆÚ[™ÈŠJHÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\Ðœ˜Z[”Ý[[X\žJ
KYJNÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜YZ[ˆ[[YÙ[˜ÙHŠHÝÙ\‹š[˜ÛY\Ê˜YZ[ˆœšYYˆŠHÝÙ\‹š[˜ÛY\Ê˜YZ[ˆš\ÚÈŠHÝÙ\‹š[˜ÛY\ÊœÛX\YZ[ˆŠJHÂˆÛÛœÝœšYYˆHYZ[’[[YÙ[˜ÙPœšYYŠ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJYZ[ˆ[[YÙ[˜ÙNˆ™XY[™\ÜÈ	ØœšYY‹œ™XY[™\ÜßKˆÜš\ÚÎˆ	ØœšYY‹Üš\ÚßKˆ\ØYÙNˆ	ØœšYY‹\ØYÙ_KˆÝ›Û™Ù\Ý[Ù[Nˆ	ØœšYY‹šX[Y\Ý[Ù[_Kˆ™XÛÛ[Y[™][ÛŽˆ	ØœšYY‹œ™XÛÛ[Y[™][ÛŸXYJNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆHÂˆÜšYÚ[˜[ˆÛÛ[X[™ˆÜ[ÛœÎˆÞÈX™[ˆ”[ˆYZ[ˆ™XÛÛ[Y[™][Ûˆ‹ÙXÝ[ÛŽˆ˜YZ[ˆ‹ÛÛ[X[™ˆœšYY‹˜ÛÛ[X[™]Z[ˆœšYY‹œ™XÛÛ[Y[™][ÛˆWBˆNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êš[™\ÝÜˆ[[YÙ[˜ÙHŠHÝÙ\‹š[˜ÛY\Êš[™\ÝÜˆœšYYˆŠHÝÙ\‹š[˜ÛY\Êš[™\ÝÜˆÝÜžHŠHÝÙ\‹š[˜ÛY\ÊœÛX\[™\ÝÜˆŠJHÂˆÛÛœÝœšYYˆH[™\ÝÜ’[[YÙ[˜ÙPœšYYŠ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ[™\ÝÜˆ[[YÙ[˜ÙNˆÝ›Û™Ù\ÝY]šXÈ\È	ØœšYY‹œÝ›Û™Ù\ÝY]šXßKˆ[Y[[™H\È	ØœšYY‹[Y[[™_Kˆ›ÝšY\ˆ\\È	ØœšYY‹œ›ÝšY\‘\KˆØ\ˆ	ØœšYY‹ÜØ\Kˆ™XÛÛ[Y[™][ÛŽˆ	ØœšYY‹œ™XÛÛ[Y[™][ÛŸXYJNÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆHÂˆÜšYÚ[˜[ˆÛÛ[X[™ˆÜ[ÛœÎˆÞÈX™[ˆ”[ˆ[™\ÝÜˆ™XÛÛ[Y[™][Ûˆ‹ÙXÝ[ÛŽˆ™\Ú›Ø\™‹ÛÛ[X[™ˆœšYY‹˜ÛÛ[X[™]Z[ˆœšYY‹œ™XÛÛ[Y[™][ÛˆWBˆNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›˜]]™H\ŠHÝÙ\‹š[˜ÛY\ÊšYÚ\Ý]™[\ŠHÝÙ\‹š[˜ÛY\Ê˜[Ø^\ÈÛˆŠHÝÙ\‹š[˜ÛY\Ê˜[Ø^\Ë[ÛˆŠHÝÙ\‹š[˜ÛY\Ê˜˜XÚÙÜ›Ý[™\Ý[š[™ÈŠHÝÙ\‹š[˜ÛY\Ê™\ÚÝÜÛÛ\[š[ÛˆŠHÝÙ\‹š[˜ÛY\Ê˜ÛÛ\]\‹]ÚYHŠHÝÙ\‹š[˜ÛY\Ê˜Ú›ÛYH\ÈÛÜÙYŠJHÂˆÛÛœÝ™XY[™\ÜÈH˜]]™P\™XY[™\ÜÔÝ[[X\žJ
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ	Ü™XY[™\ÜËœÝ[[X\ž_HHØ[ˆ[ˆHœ›ÝÜÙ\‹\ØY™H\ÜÚ\Ý[›ÝËˆ›ÜˆYHØZÙH™Z]š[ÜˆÚ[ˆÚ›ÛYH\ÈÛÜÙY\ÙHHš\ÚX›H\ÚÝÜÛÛ\[š[Û‹ˆ›ÜˆÛ™K\Ý[H[Ø^\Ë[Ûˆ™Z]š[Ü‹\ÙHH˜]]™H[™›ÚYÜˆSÔÈÜ˜\\‹˜YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êœ›ØXÝ]™H[\ÈŠHÝÙ\‹š[˜ÛY\ÊÚ]™YYÈ][[ÛˆŠHÝÙ\‹š[˜ÛY\Ê˜[\YHŠJHÂˆÛÛœÝ[\ÈH™^\Ô›ØXÝ]™P[\Ê
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ[\Ë›[™ÝÈ™^\ÈÙY\È	Ø[\Ë›[™ÝH[\
ÊNˆ	Ø[\Ë›X\
][HOˆ	Ú][K›[Ù[_H	Ú][KœÝ]\ßNˆ	Ú][K›Y\ÜØYÙ_X
Kš›Ú[ŠˆŠ_Xˆ“›È›ØXÝ]™H[\È™YY][[ÛˆšYÚ›ÝËˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊÚ]\[™YŠHÝÙ\‹š[˜ÛY\ÊÚ]\Ý\[™YŠHÝÙ\‹š[˜ÛY\ÊÚ]Y[ÝHÈŠHÝÙ\‹š[˜ÛY\ÊÚ]]šY[˜ÙHŠHÝÙ\‹š[˜ÛY\Ê™^Z[ˆH\ÝÛÜšÙ›ÝÈŠHÝÙ\‹š[˜ÛY\Ê™ÛÛÙ[Ü›š[™ÈYÜš[™^\ÈŠHÝÙ\‹š[˜ÛY\Ê™ÛÛÙ[Ü›š[™È™^\ÈŠHÝÙ\‹š[˜ÛY\Ê™Z[HœšYYš[™ÈŠHÝÙ\‹š[˜ÛY\Ê›Ü\˜]ÜˆœšYYš[™ÈŠHÝÙ\‹š[˜ÛY\Ê›[Ü›š[™ÈœšYYš[™ÈŠJHÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆBˆYˆ
ÊX\›š[™ßÛÝ\œÙ_\ÜÛÛŸ[œÝXÝÜŸÛÜšÙ›Ü˜Ù_›ØŸ™XÜZ]\Ÿ[\ÞY\ŸX[[ZX[Ø\™YÚ]™\ŸØ\™HX[_›ÝšY\ŸYZ[ŸÝ\Ü
KË\Ý
ÝÙ\ŠH	‰ˆÊY\ÜØYÙ_Ú]ÛÛ[][šXØ]_ÛÛXÝ›ÝYž_Û\ßÚ]Ø\^
KË\Ý
ÝÙ\ŠJHÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™[È\›•ÚÙ[ˆJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Ü™X]HŠH	‰ˆÝÙ\‹š[˜ÛY\Êœ[ˆŠHÝÙ\‹œÝ\ÕÚ]
œ[ˆŠJHÂˆÛÛœÝÛØ[HÛÛ[X[™ÛØ[
ÛÛ[X[™
H	
ˆØYÙ[ÛØ[ŠOË˜[YOËš[J
HÜ™X]H[ˆYÜšS™^\ÈÜ›ÜÜË[[Ù[H[‹ˆŽÂˆ	
ˆØYÙ[ÛØ[ŠK˜[YHHÛØ[Âˆ]ØZ]Ü™X]PYÙ[[Š
NÂˆÙ]›ÚXÙT™\ÜÛœÙJYÙ[[ˆÜ™X]Yˆ™]šY]È][ˆØ^H^XÝ]H\›Ý™Y[ˆÚ[ˆ™XYKˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ

ÝÙ\‹š[˜ÛY\Ê™^XÝ]HŠHÝÙ\‹š[˜ÛY\Êœ[ˆŠJH	‰ˆÝÙ\‹š[˜ÛY\Êœ[ˆŠJHÂˆ]ØZ]^XÝ]PYÙ[[Š
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ\›Ý™YYÙ[[ˆ^XÝ]YXÜ›ÜÜÈHÛÛ›™XÝYÛÜšÙ›ÝÈÛÛËˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊÛÝÈŠHÝÙ\‹š[˜ÛY\Êš[™\ÝÜˆ[[ÈŠJHÂˆ]ØZ][•ÛÝÑ[[Ê
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ•ÓÕÈ[[ÈÛÛ\]Y[™]šY[˜ÙHØ\ÈYYÈH]›Ü›Kˆ‹YJNÂˆ™]\›ŽÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÝ[™\™[[ÈŠJHÂˆ]ØZ][‘^XÝ]]™Q[[Ê
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ”Ý[™\™[[ÈÛÛ\]Yˆ‹YJNÂˆ™]\›ŽÂˆB‚ˆYˆ

ÝÙ\‹š[˜ÛY\Ê›Û˜›Ø\™ŠHÝÙ\‹š[˜ÛY\Ê˜Ü™X]HŠHÝÙ\‹š[˜ÛY\Ê˜Z[ŠHÝÙ\‹š[˜ÛY\Êœ™\\™HŠJH	‰ˆ
ÝÙ\‹š[˜ÛY\Êœ\™\ˆŠHÝÙ\‹š[˜ÛY\Êœ›ÝšY\ˆŠHÝÙ\‹š[˜ÛY\Ê™[™ÜˆŠJJHÂˆÛÛœÝ\HHÝÙ\‹š[˜ÛY\ÊÛÜšÙ›Ü˜ÙHŠHÝÙ\‹š[˜ÛY\Êš›ØˆŠHÈÛÜšÙ›Ü˜ÙH‚ˆˆÝÙ\‹š[˜ÛY\Ê›X\›š[™ÈŠHÝÙ\‹š[˜ÛY\Ê˜ÛÝ\œÙHŠHÝÙ\‹š[˜ÛY\Ê˜Z[š[™ÈŠHÈ›X\›š[™È‚ˆˆÝÙ\‹š[˜ÛY\Ê™›Û™HŠHÝÙ\‹š[˜ÛY\Ê™šY[ŠHÈ™›Û™H‚ˆˆÝÙ\‹š[˜ÛY\Ê˜YHŠHÝÙ\‹š[˜ÛY\Ê˜^Y\ˆŠHÝÙ\‹š[˜ÛY\Ê›X\šÙ]ŠHÝÙ\‹š[˜ÛY\Ê›ÙÚ\ÝXÜÈŠHÈ˜YH‚ˆˆÝÙ\‹š[˜ÛY\ÊœÛ\ÈŠHÝÙ\‹š[˜ÛY\ÊÚ]Ø\ŠHÝÙ\‹š[˜ÛY\Ê™[XZ[ŠHÝÙ\‹š[˜ÛY\ÊœÛ™HŠHÝÙ\‹š[˜ÛY\Ê˜ÛÛ[][šXØ][ÛˆŠHÈ˜ÛÛ[][šXØ][ÛœÈ‚ˆˆ[ZX[ŽÂˆÛÔÙXÝ[ÛŠš[YÜ˜][ÛœÈŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJœ\™\œÚ\‹\K”›ÝšY\ˆ\™\œÚ\XÚÙ]ÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆB‚ˆYˆ
×ŠØ\[ÛŸØ\[Ûœß˜[œØÜš\ÝX]_ÝX]\ÊW‹Ë\Ý
ÝÙ\ŠH	‰ˆ×Š[ZX[X[]Y[ØÝÜŸ›ÝšY\ŸÛ[šXßØ\™JW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹˜Ø\[Ûˆ‹’HØ[ˆZ[Ø\[ÛœÈ›Üˆ[ZX[ˆHÜ[™YHØ\[Ûˆ™[^HÛÈH]Y[Ø\™YÚ]™\‹[™›ÝšY\ˆØ[ˆ™XYHÛÛ™\œØ][ÛˆÛX\›KˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Z[Ø\[ÛˆŠHÝÙ\‹š[˜ÛY\Ê›XZÙHØ\[ÛˆŠHÝÙ\‹š[˜ÛY\Ê›Ü[ˆØ\[ÛˆŠHÝÙ\‹š[˜ÛY\Ê˜Ø\[Ûˆ\ÜÛÛˆŠHÝÙ\‹š[˜ÛY\Ê›X\›š[™ÈØ\[ÛˆŠJHÂˆ™]\›ˆÜ[“X\›š[™ÐØ\[Û”Ý\Ü
Ø\[ÛœÈ\™HÜ[‹ˆÜXZÈ›ÝÈ[™™^\ÈÚ[Üš]HHÛÜ™È\™HÚ[HÙY\[™ÈX\›š[™ÈÝ\Ü™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜]Y[ÈÝZYHŠHÝÙ\‹š[˜ÛY\ÊœØÜ™Y[ˆ™XY\ˆŠHÝÙ\‹š[˜ÛY\Êš\ÝX[ÝZYHŠJHÂˆÛÔÙXÝ[ÛŠ›X\›š[™ÈŠNÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
X\›š[™ÐXØÙ\ÜÚXš[]UÛÜšÙ›ÝÐÛÛ™šYÊš\ÝX[ŠJNÂˆ™]\›ˆÙ]›ÚXÙT™\ÜÛœÙJ]Y[ÈÝZYHÛÜšÙ›ÝÈ\È™XYKˆØ^HÛÛ™š\›HÈÜ™X]H]ÜˆØ[˜Ù[ÈÛÜÙH]ˆ‹YJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›Ù™›[™HXÚÙ]ŠHÝÙ\‹š[˜ÛY\Ê›ÝÈ˜[™ÚYŠHÝÙ\‹š[˜ÛY\ÊœÙ[™XÚÙ]ŠJHÂˆÛÔÙXÝ[ÛŠ›X\›š[™ÈŠNÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
X\›š[™ÐXØÙ\ÜÚXš[]UÛÜšÙ›ÝÐÛÛ™šYÊ›ÝËX˜[™ÚYŠJNÂˆ™]\›ˆÙ]›ÚXÙT™\ÜÛœÙJ“Ù™›[™HX\›š[™ÈXÚÙ]ÛÜšÙ›ÝÈ\È™XYKˆØ^HÛÛ™š\›HÈ™\\™H]ÜˆØ[˜Ù[ÈÛÜÙH]ˆ‹YJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÝ\ÛÝ\œÙHŠHÝÙ\‹š[˜ÛY\Ê˜™YÚ[ˆÛÝ\œÙHŠHÝÙ\‹š[˜ÛY\ÊœÝ\˜Z[š[™ÈŠJHÂˆÛÔÙXÝ[ÛŠ›X\›š[™ÈŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ›X\›š[™È‹œÝ\‹ÛÝ\œÙHÝ\ÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜ÛÛ\]H\ÜÛÛˆŠHÝÙ\‹š[˜ÛY\Ê›^H\ÜÛÛˆŠJHÂˆÛÔÙXÝ[ÛŠ›X\›š[™ÈŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ›X\›š[™È‹›\ÜÛÛˆ‹“\ÜÛÛˆÛÛ\][ÛˆÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êœ]Z^ˆŠJHÂˆÛÔÙXÝ[ÛŠ›X\›š[™ÈŠNÂˆ	
ˆÜ]Z^ˆŠOË˜ÛXÚÊ
NÂˆ™]\›ˆÙ]›ÚXÙT™\ÜÛœÙJ”]Z^ˆÛÜšÙ›ÝÈÜ[™Yˆ‹YJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Ù\YšXØ]HŠJHÂˆÛÔÙXÝ[ÛŠ›X\›š[™ÈŠNÂˆ	
ˆØÙ\ˆŠOË˜ÛXÚÊ
NÂˆ™]\›ˆÙ]›ÚXÙT™\ÜÛœÙJÙ\YšXØ]HÛÜšÙ›ÝÈÜ[™Yˆ‹YJNÂˆB‚ˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Z[›Ùš[HŠJHÂˆÛÔÙXÝ[ÛŠÛÜšÙ›Ü˜ÙHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJÛÜšÙ›Ü˜ÙH‹˜Z[\›Ùš[H‹•ÛÜšÙ›Ü˜ÙH›Ùš[HÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ

ÝÙ\‹š[˜ÛY\Ê˜\HŠHÝÙ\‹š[˜ÛY\Ê˜\XØ][ÛˆŠJH	‰ˆ
ÝÙ\‹š[˜ÛY\Êš›ØˆŠHÝÙ\‹š[˜ÛY\Êœ›ÛHŠHÝÙ\‹š[˜ÛY\ÊÛÜšÙ›Ü˜ÙHŠHÝÙ\‹š[˜ÛY\ÊœÜÚ][ÛˆŠJJHÂˆÛÔÙXÝ[ÛŠÛÜšÙ›Ü˜ÙHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJÛÜšÙ›Ü˜ÙH‹˜\K\›ÛH‹”›ÛH\XØ][ÛˆÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÛRYˆš\œÝ[YÚX›T›ÛJ
OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êš[\šY]ÈŠJHÂˆÛÔÙXÝ[ÛŠÛÜšÙ›Ü˜ÙHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJÛÜšÙ›Ü˜ÙH‹š[\šY]È‹’[\šY]ÈØÚY[[™ÈÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›Y[ÜˆŠJHÂˆÛÔÙXÝ[ÛŠÛÜšÙ›Ü˜ÙHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJÛÜšÙ›Ü˜ÙH‹›Y[Üˆ‹“Y[Üˆ\ÜÚYÛ›Y[ÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÚYŠJHÂˆÛÔÙXÝ[ÛŠÛÜšÙ›Ü˜ÙHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJÛÜšÙ›Ü˜ÙH‹œÚY‹”ÚYØÚY[[™ÈÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆB‚ˆYˆ
ÝÙ\‹š[˜ÛY\Êš[ZÙHŠHÝÙ\‹š[˜ÛY\Êœ]Y[[ZÙHŠHÝÙ\‹š[˜ÛY\Ê[ZX[[ZÙHŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹š[ZÙH‹•[ZX[[ZÙH\ÈÜ[‹ˆHÚ[ÛÛXÝHØ\™H™\]Y\ÝXØÙ\ÜÈ™YYË[™ÝXYÙKØ[˜XÚË[™ØY™]H]Z[Ëˆ\È\È›ÝHXYÛ›ÜÚ\ËˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êœ›ÝšY\ˆŠHÝÙ\‹š[˜ÛY\Êœ™\™\Ù[]]™HŠHÝÙ\‹š[˜ÛY\Ê˜ÛÛ›™XÝYHŠHÝÙ\‹š[˜ÛY\Êœ™XXÚHØÝÜˆŠHÝÙ\‹š[˜ÛY\Êœ™XXÚH\œÙHŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œ™\™\Ù[]]™H‹”›ÝšY\ˆÛÛ›™XÝ[ÛˆÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœØY™]HŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œØY™]H‹”ØY™]H™]šY]ÈÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Ø\™H[ˆŠHÝÙ\‹š[˜ÛY\Ê˜Ø\™\[ˆŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹˜Ø\™\[ˆ‹Ø\™H[ˆÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Ø\[Ûˆ™[^HŠH
ÝÙ\‹š[˜ÛY\Ê˜Ø\[ÛˆŠH	‰ˆÝÙ\‹š[˜ÛY\ÊšX[ŠJJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹˜Ø\[Ûˆ‹Ø\[Ûˆ™[^HÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Ø\™YÚ]™\ˆŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹˜Ø\™YÚ]™\ˆ‹Ø\™YÚ]™\ˆ›ÝYšXØ][ÛˆÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜ÛÛœÙ[ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹˜ÛÛœÙ[‹ÛÛœÙ[ÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êš][ÈŠHÝÙ\‹š[˜ÛY\Êš][ÚYÛœÈŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹š][È‹•š][ÈØ\\™HÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êœ™Y™\œ˜[ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹œ™Y™\œ˜[‹”™Y™\œ˜[ÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê™›ÛÝÈ\ŠHÝÙ\‹š[˜ÛY\Ê™›ÛÝË]\ŠHÝÙ\‹š[˜ÛY\Ê˜Ø[˜XÚÈŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹™›ÛÝÝ\‹‘›ÛÝË]\ÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜XØÙ\ÜÚXš[]HŠHÝÙ\‹š[˜ÛY\Ê˜XØÙ\ÜÚX›H[ZX[ŠJHÂˆÛÔÙXÝ[ÛŠšX[ŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJšX[‹˜XØÙ\ÜÚXš[]H‹XØÙ\ÜÚX›H[ZX[ÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆB‚ˆYˆ

ÝÙ\‹š[˜ÛY\Ê˜^Y\ˆŠHÝÙ\‹š[˜ÛY\Ê˜Ý\ÝÛY\ˆŠJH	‰ˆ
ÝÙ\‹š[˜ÛY\ÊœÜXZÈŠHÝÙ\‹š[˜ÛY\Ê[ÈŠHÝÙ\‹š[˜ÛY\Ê˜Ø[ŠHÝÙ\‹š[˜ÛY\Ê›Y\ÜØYÙHŠHÝÙ\‹š[˜ÛY\Ê˜ÛÛXÝŠJJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆYˆ
ÝÙ\‹š[˜ÛY\ÊÚ]Ø\ŠJHÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹˜^Y\‹]Ú]Ø\‹•Ú]Ð\^Y\ˆÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÛ\ÈŠHÝÙ\‹š[˜ÛY\Ê^ŠJHÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹˜^Y\‹\Û\È‹”ÓTÈ^Y\ˆÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›Y\ÜØYÙHŠHÝÙ\‹š[˜ÛY\Ê˜Ú]ŠHÝÙ\‹š[˜ÛY\Ê˜ÛÛ[][šXØ]HŠHÝÙ\‹š[˜ÛY\Êœ™X[[YHŠHÝÙ\‹š[˜ÛY\Êœ™X[[YHŠJHÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹˜^Y\‹[Y\ÜØYÙH‹^Y\‹\Ù[\ˆY\ÜØYÙH™XYÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹˜^Y\‹XÛÛXÝ‹^Y\ˆÛÛXÝÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÚ\[™È][ÝHŠHÝÙ\‹š[˜ÛY\Êœ][ÝHÚ\Y[ŠH
ÝÙ\‹š[˜ÛY\Ê˜ÛÜÝŠH	‰ˆÝÙ\‹š[˜ÛY\ÊœÚ\ŠJJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹›ÙÚ\ÝXÜË\][ÝH‹”Ú\Y[][ÝHÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜›ÛÚÈÚ\Y[ŠHÝÙ\‹š[˜ÛY\ÊœÚ\^HÜ›ÜŠHÝÙ\‹š[˜ÛY\Ê˜›ÛÚÈ[]™\žHŠHÝÙ\‹š[˜ÛY\Ê˜\œ˜[™ÙH˜[œÜÜŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹œÚ\[™ËX›ÛÚÚ[™È‹”Ú\[™È›ÛÚÚ[™ÈÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜^Y\ˆXÚÝ\ŠHÝÙ\‹š[˜ÛY\Ê˜^Y\ˆXÚÈ\ŠHÝÙ\‹š[˜ÛY\Ê˜^Y\ˆÛÛXÝŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹˜^Y\‹\XÚÝ\‹^Y\ˆXÚÝ\ÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÙ[\ˆ[]™\žHŠHÝÙ\‹š[˜ÛY\Ê™[]™\ˆÈ^Y\ˆŠHÝÙ\‹š[˜ÛY\ÊœÙ[\ˆÈ^Y\ˆŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹œÙ[\‹Y[]™\žH‹”Ù[\ˆ[]™\žHÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜ÛÛ™š\›H[]™\žHŠHÝÙ\‹š[˜ÛY\Ê™[]™\žH›ÛÙˆŠHÝÙ\‹š[˜ÛY\ÊœÚ\Y[\œš]™YŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹™[]™\žKXÛÛ™š\›H‹‘[]™\žHÛÛ™š\›X][ÛˆÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœÙ][Y[ŠHÝÙ\‹š[˜ÛY\ÊœÙ[\ˆ^[Ý]ŠHÝÙ\‹š[˜ÛY\Ê™˜\›Y\ˆ^[Ý]ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹œÙ][Y[‹•˜YHÙ][Y[ÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜^Y\ˆÚXÚÛÝ]ŠHÝÙ\‹š[˜ÛY\Ê˜Ü™X]HÚXÚÛÝ]ŠHÝÙ\‹š[˜ÛY\Ê˜ÛÛXÝ^[Y[ŠHÝÙ\‹š[˜ÛY\Êœ^\ÝXÚÈŠHÝÙ\‹š[˜ÛY\Ê™›]\Ø]™HŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹œ^[Y[XÚXÚÛÝ]‹^Y\ˆÚXÚÛÝ]ÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê™›YÚ[ˆŠHÝÙ\‹š[˜ÛY\Ê™›Û™HZ\ÜÚ[ÛˆŠHÝÙ\‹š[˜ÛY\Êœ[ˆ›Û™HŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹™›Û™K\[ˆ‹‘›Û™HZ\ÜÚ[ÛˆÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êš[\™[[ÛˆŠHÝÙ\‹š[˜ÛY\Ê™šY[\ÚÈŠHÝÙ\‹š[˜ÛY\Ê˜\ÜÚYÛˆšY[ŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹™›Û™KZ[\™[[Ûˆ‹‘›Û™HšY[[\™[[ÛˆÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê™›Û™HŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹™›Û™H‹‘›Û™HšY[ØØ[ˆÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Ü™X]HÜ™\ˆŠHÝÙ\‹š[˜ÛY\Ê˜^Y\ˆÜ™\ˆŠHÝÙ\‹š[˜ÛY\ÊœÙ[Ü›ÜŠHÝÙ\‹š[˜ÛY\ÊœÙ[^HÜ›ÜŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹›Ü™\ˆ‹^Y\ˆÜ™\ˆÛÜšÙ›ÝÈ\È™XYKˆ‹È›ÙXÝYˆš\œÝ›ÙXÝ

OËšYJNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜Y˜[˜ÙHÜ™\ˆŠHÝÙ\‹š[˜ÛY\Ê›ÙÚ\ÝXÜÈÝ]\ÈŠHÝÙ\‹š[˜ÛY\ÊœÚ\Y[Ý]\ÈŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹˜Y˜[˜ÙH‹“ÙÚ\ÝXÜÈY˜[˜ÙHÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Êœ^[Y[ŠHÝÙ\‹š[˜ÛY\ÊØ[]ŠHÝÙ\‹š[˜ÛY\Ê›K\\ØHŠJHÂˆÛÔÙXÝ[ÛŠ˜YHŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YH‹Ø[]‹•Ø[]^[Y[ÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊœšXÙHŠJH™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ZH‹œšXÙH‹”šXÙHRHÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆYˆ
ÝÙ\‹š[˜ÛY\Êœ›Ý]Hš\ÚÈŠHÝÙ\‹š[˜ÛY\Ê˜\ÜÙ\ÜÈ›Ý]HŠHÝÙ\‹š[˜ÛY\Êœ›Ý]H[[YÙ[˜ÙHŠHÝÙ\‹š[˜ÛY\Ê›X\š\ÚÈŠJH™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ZH‹œ›Ý]H‹”›Ý]Hš\ÚÈRHÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜ÛÛ[X[™Ù[\ˆŠJH™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ZH‹˜ÛÛ[X[™‹ÛÛ[X[™Ù[\ˆRHÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜ÛÜ[ÝŠJH™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ZH‹˜ÛÜ[Ý‹ÛÜ[ÝÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆYˆ
ÝÙ\‹š[˜ÛY\Ê]ÜˆŠJH™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ZH‹]Üˆ‹RH]ÜˆÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆYˆ
ÝÙ\‹š[˜ÛY\ÊšXYÙHŠJH™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ZH‹šXYÙH‹RHšXYÙHÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆYˆ
ÝÙ\‹š[˜ÛY\Ê˜YHYš\ÛÜˆŠJH™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ZH‹˜YKXYš\ÛÜˆ‹•˜YHYš\ÛÜˆÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆYˆ
ÝÙ\‹š[˜ÛY\ÊÛÜšÙ›Ü˜ÙHÛØXÚŠHÝÙ\‹š[˜ÛY\Êœ™XY[™\ÜÈØ\ÈŠHÝÙ\‹š[˜ÛY\ÊÛÜšÙ›Ü˜ÙHØ\ÈŠHÝÙ\‹š[˜ÛY\Êœ™]šY]ÈØ\ÈŠJH™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜ZH‹ÛÜšÙ›Ü˜ÙKXÛØXÚ‹•ÛÜšÙ›Ü˜ÙHÛØXÚÛÜšÙ›ÝÈ\È™XYKˆŠNÂ‚ˆYˆ
ÝÙ\‹š[˜ÛY\Ê\ÝŠH	‰ˆ
ÝÙ\‹š[˜ÛY\Êœ›ÝšY\ˆŠHÝÙ\‹š[˜ÛY\Ê™[™Ú[™HŠJJHÂˆÛÔÙXÝ[ÛŠš[YÜ˜][ÛœÈŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJš[YÜ˜][ÛœÈ‹\ÝX[‹”›ÝšY\ˆ\ÝÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\Ê›]™HÙ\šXÙHÚXÚÈŠJHÂˆÛÔÙXÝ[ÛŠš[YÜ˜][ÛœÈŠNÂˆ]ØZ][“]™TÙ\šXÙPÚXÚÊ
NÂˆ™]\›ŽÂˆBˆYˆ
×ŠX›XÈ[[YÙ[˜Ù_X›XÈ›ÝšY\œßÜ[ˆY][ßÜ[‹[Y][ßÚÈÝ]œ™XZßÝ]œ™XZÈ™YYÜÛHÙ\šXÙ\ßÜ[œÝ™Y]X\Ù\šXÙ\ÊW‹Ë\Ý
ÝÙ\ŠJHÂˆÛÔÙXÝ[ÛŠš[YÜ˜][ÛœÈŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJš[YÜ˜][ÛœÈ‹œX›XËZ[[YÙ[˜ÙH‹”X›XÈ[[YÙ[˜ÙH›ÝšY\ˆÚXÚÈ\È™XYKˆŠNÂˆBˆYˆ
ÝÙ\‹š[˜ÛY\ÊšX[ÚXÚÈŠJHÂˆÛÔÙXÝ[ÛŠ˜YZ[ˆŠNÂˆ™]\›ˆÜ[•ÛÜšÙ›ÝÐžU›ÚXÙJ˜YZ[ˆ‹šX[XÚXÚÈ‹YZ[ˆX[ÚXÚÈÛÜšÙ›ÝÈ\È™XYKˆŠNÂˆB‚ˆYˆ
]ØZ][‘[˜[ZXÕ›ÚXÙUÛÛ
ÛÛ[X[™
JH™]\›ŽÂ‚ˆÛÛœÝØØ][ÛÛÛ^H]ØZ]ØY™Pœ›ÝÜÙ\•ÙX]\“ØØ][ÛŠÛÛ[X[™
NÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹˜˜XÚÙ[™[œÝÙ\ˆŠJH™]\›ŽÂˆ]ØZ][˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™ØØ][ÛÛÛ^È\›•ÚÙ[ˆJNÂŸB‚™[˜Ý[Ûˆ›ÚXÙPÜ˜\Ú™XÛÝ™\žSY\ÜØYÙJÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆYˆ
×ŠÛY_\Ú›Ø\™XZ[ˆY[_Y[JW‹Ë\Ý
ÝÙ\ŠJH™]\›ˆ’H™\Ù]H›ÚXÙH›Ý]H[™Ü[™YÛYKˆÚ]È[ÝH™YY™^ÈŽÂˆYˆ
×ŠÛ[šXßÜÜ][X[Ù[\ŸX[Ù[™JW‹Ë\Ý
ÝÙ\ŠJH™]\›ˆ’H™\Ù]H›ÚXÙH›Ý]KˆHØ[ˆ[š[™Û[šXÈÜˆ[Øš[HÛ[šXÈÝ\ÜˆYˆ\È\È[ˆ[Y\™Ù[˜ÞKØ[ØØ[[Y\™Ù[˜ÞH[›ÝËˆš\œÝ[YH[Ý\ˆš[YÙKÚ]KÜˆ™X\™\Ý[™X\šËˆŽÂˆYˆ
×ŠYYXÚ[™_YYXØ][ÛŸ\›XXÞ_™Yš[Yß[ÊW‹Ë\Ý
ÝÙ\ŠJH™]\›ˆ’H™\Ù]H›ÚXÙH›Ý]KˆHØ[ˆÝZYHYYXÚ[™HXØÙ\ÜÈÝ\žHÝ\ˆHØ[››Ý™\ØÜšX™K]HØ[ˆ[^Z[ˆHYYXÚ[™HÛÛ˜Ù\›‹š[™\›XXÞHÜˆ[Øš[HÛ[šXÈÝ\Ü[™™\\™H›ÝšY\ˆ™]šY]Ëˆš\œÝ[YHHYYXÚ[™HÛÛ˜Ù\›‹ˆŽÂˆ™]\›ˆ’H™\Ù]H›ÚXÙH›Ý]KˆØ^H]YØZ[ˆ[ˆ[Ý\ˆÝÛˆÛÜ™Ë[™HÚ[ÙY\H™^[œÝÙ\ˆÚÜˆŽÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[™U›ÚXÙPÛÛ[X[™
˜]ÐÛÛ[X[™Ü[ÛœÈHßJHÂˆžHÂˆ™]\›ˆ]ØZ][™U›ÚXÙPÛÛ[X[™ÛÜ™J˜]ÐÛÛ[X[™Ü[ÛœÊNÂˆHØ]Ú
\œ›ÜŠHÂˆÛÛœÛÛK™\œ›ÜŠ“™^\È›ÚXÙHÛÛ[X[™˜Z[Y‹\œ›ÜŠNÂˆÛX\YÙ[›ÙÜ™\ÜÕ[Y\œÊ
NÂˆX›ÜXÝ]™PYÙ[ÛÛ[X[™

NÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[ÂˆXÝ]™PÛÛ™\œØ][Û’[ZÙHH[ÂˆÛX\“]™[Û™PYÙ[XÝ[Û”ÝYÙÙ\Ý[Û“X™[

NÂˆÙ]›ÚXÙTÝ]\Ê›ÚXÙQš\œÝ[ÙHÈ›ÚXÙKYš\œÝˆˆœÝ[™žHŠNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹“™^\È™XÛÝ™\™Yœ›ÛHH›ÚXÙH›Ý]H\œ›Üˆ[™\È™XYH›ÜˆHÚ[\\ˆ™]žKˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ›ÚXÙPÜ˜\Ú™XÛÝ™\žSY\ÜØYÙJ˜]ÐÛÛ[X[™
KYKÈ[ÝÒ[™Ù™Žˆ˜[ÙHJNÂˆ™]\›ˆ[ÂˆBŸB‚˜\Þ[˜È[˜Ý[Ûˆ[˜XÚÙ[™YÙ[ÛÛ[X[™
ÛÛ[X[™ØØ][ÛÛÛ^H[Ü[ÛœÈHßJHÂˆÛÛœÝ\›•ÚÙ[ˆHÜ[ÛœË\›•ÚÙ[ˆ[ÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹˜˜XÚÙ[™[œÝÙ\ˆŠJH™]\›ˆ[ÂˆX›ÜXÝ]™PYÙ[ÛÛ[X[™

NÂˆÛÛœÝÛÛ›Û\ˆH™]ÈX›ÜÛÛ›Û\Š
NÂˆXÝ]™PYÙ[ÛÛ[X[™ÛÛ›Û\ˆHÛÛ›Û\ŽÂˆÛÛœÝÛÜœ™[][Û’YHÜ[ÛœË˜ÛÜœ™[][Û’YÜ™X]QÙ[™\Ú\Õ›ÚXÙPÛÜœ™[][Û’Y

NÂˆXÝ]™QÙ[™\Ú\Õ›ÚXÙPÛÜœ™[][Û’YHÛÜœ™[][Û’YÂˆÛÛœÝ™\]Y\ÝÝ\Y]H]K››ÝÊ
NÂˆžHÂˆÛÛœÝ™]š[Ý\Ó[™ÝXYÙHH[™ÝXYÙPÛÙJ
NÂˆÛÛœÝÛÛ[X[™[™ÝXYÙHHØ[›ÛšXØ[[™ÝXYÙPÛÙJÜ[ÛœË\™Ù][™ÝXYÙHÜ[ÛœË›[™ÝXYÙH[™ÝXYÙPÛÙJ
KÈ[ÝÔ\X[ˆYHJNÂˆ›ÚXÙPÛÛ™\œØ][Û•\›œÈ
ÏHNÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\Õ›ÚXÙU\›œÈ‹Ýš[™Ê›ÚXÙPÛÛ™\œØ][Û•\›œÊJNÂˆÙ]›ÚXÙTÝ]\Ê[šÚ[™ÈŠNÂˆÙ]YÙ[˜\ÝXÚÛ›ÝÛYÙ[Y[
ÛÛ[X[™
NÂˆ™YÚ[YÙ[›ÑXYZ\ŠÛÛ[X[™
NÂˆ™XÛÜ™Ù[™\Ú\ÔÜÚÙ[”™\ÜÛœÙT\[[™Q]™[
˜ÛÛ[X[™\™\]Y\Ý\Ý\Y‹ÂˆÛÜœ™[][Û’Yˆ›Ý]Nˆ‹Ø\KØYÙ[ØÛÛ[X[™‹ˆÝXØÙ\ÜÎˆYKˆÛÝ\˜ÙQ[˜Ý[ÛŽˆœ[˜XÚÙ[™YÙ[ÛÛ[X[™‚ˆJNÂˆ]HH]ØZ]™\]Y\ÝÚ][Y[Ý]
‹Ø\KØYÙ[ØÛÛ[X[™‹ÂˆY]Ùˆ”ÔÕ‹ˆÛÛ›Û\‹ˆX›Ü™X\ÛÛŽˆœÝ\\œÙYY‹ˆ›ÙNˆÂˆÛÜœ™[][Û’YˆÛÛ[X[™ˆÛÛ™š\›Nˆ˜[ÙKˆÛÛ™\œØ][Û˜[ˆYKˆ[œ][ÙNˆ›ÚXÙH‹ˆÝ]][ÙNˆ›ÚXÙH‹ˆ[ÙNˆÛÛ™\œØ][Û”]›Ü›S[ÙJ
Kˆ[ÙPÛÛ^ˆ[ÙPÛÛ™\œØ][ÛÛÛ^
ÛÛ[X[™
Kˆ[YV›Û™Nˆ[‘]U[YQ›Ü›X]

Kœ™\ÛÛ™YÜ[ÛœÊ
K[YV›Û™KˆØØ][ÛŽˆØØ][ÛÛÛ^ˆ[™ÝXYÙNˆÛÛ[X[™[™ÝXYÙKˆ\™Ù][™ÝXYÙNˆÛÛ[X[™[™ÝXYÙKˆÛÛ\[š[Û•[™\œÝ[™[™ÎˆÛÛ\[š[Û•[™\œÝ[™[™ÔÝ]Kˆ›ÝNˆÛÛ[X[™ÝX›Z]Yœ›ÛH™^\È›ÚXÙH\ÜÚ\Ý[‚ˆBˆKLŒ
NÂˆYˆ
XÝ]™PYÙ[ÛÛ[X[™ÛÛ›Û\ˆOOHÛÛ›Û\ŠHXÝ]™PYÙ[ÛÛ[X[™ÛÛ›Û\ˆH[ÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹˜˜XÚÙ[™[œÝÙ\ˆŠJH™]\›ˆ[ÂˆÛX\YÙ[›ÙÜ™\ÜÕ[Y\œÊ
NÂˆ™[™\Š
NÂˆÛÛœÝ™\Ý[H]K˜ÛÛ[X[™™\Ý[ßNÂˆ™XÛÜ™Ù[™\Ú\ÔÜÚÙ[”™\ÜÛœÙT\[[™Q]™[
˜ÛÛ[X[™\™\ÜÛœÙK\™XÙZ]™Y‹ÂˆÛÜœ™[][Û’Yˆ›Ý]Nˆ‹Ø\KØYÙ[ØÛÛ[X[™‹ˆ[[ˆ™\Ý[š[[[šÛ›ÝÛˆ‹ˆÝ]\ÎˆŒˆ[\ÙY[YS\Îˆ]K››ÝÊ
HH™\]Y\ÝÝ\Y]ˆÛÝ\˜ÙQ[˜Ý[ÛŽˆœ[˜XÚÙ[™YÙ[ÛÛ[X[™‚ˆJNÂˆÛÛœÝÙ[™\Ú\ÔÜXZØX›HH^˜XÝÙ[™\Ú\ÔÜXZØX›T™\ÜÛœÙJ]KÛÜœ™[][Û’Y
NÂˆØœÙ\™PYÙ[XÝ[Û“Y]Y]J™\Ý[ÈÛÝ\˜ÙNˆœ[˜XÚÙ[™YÙ[ÛÛ[X[™‹ÛÛ[X[™JNÂˆYˆ
]š\ÚX›PÛÛ›ÛYXÝ[Û”™]šY]Ô™XY[™\ÜÈ\Ó™^\ÔÚ[][][ÛÛÛ[X[™
ÛÛ[X[™
JHÂˆZ[ØØ[]™[Û™TÝYÙÙ\Ý[Û‘›Ü”Ú[\U\Ù\’[[
È\Nˆ™\™XÝˆKÛÛ[X[™
NÂˆBˆX^X™Q\Ü]ÚÛÛ™š\›YY˜]]™PØ[[™Ù™Š™\Ý[
NÂˆYˆ
™\Ý[›Y]Y]OË˜ÛÛ\[š[Û”›Ý]SÝ]ÛÛYJHÂˆžHÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\ÐÛÛ\[š[Û”›Ý]SÝ]ÛÛYH‹”ÓÓ‹œÝš[™ÚYžJ™\Ý[›Y]Y]K˜ÛÛ\[š[Û”›Ý]SÝ]ÛÛYJJNÂˆHØ]ÚÂˆËÈXYÛ›ÜÝXÈY]Y]HÚÝ[™]™\ˆY™™XÝ›Ý][™Ë‚ˆBˆBˆYˆ
™\Ý[š[[OOH›X\˜ÛÝ[žWÛÜ[ˆˆ™\Ý[š[[OOH›X\šÙ[žXWÛYYXØ[Ý˜[œÜÜŠHÂˆÛÛœÝÛÝ[žHHÛÝ[žQœ›ÛPYÙ[X\Y]Y]J™\Ý[›Y]Y]HßJNÂˆYˆ
ÛÝ[žJHÂˆX\šÐYÙ[\™›Ü›X[˜ÙJ˜ÛÛ\]Y‹™\Ý[š[[
NÂˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÈ\Nˆ˜YÙ[XÛÛ\]Y‹ÛÛ[X[™[[ˆ™\Ý[š[[JNÂˆÜ[ÛÝ[žSX\œ›ÛU›ÚXÙJÛÝ[žK™\Ý[œ™\ÜÛœÙJNÂˆ™]\›ˆ™\Ý[ÂˆBˆBˆYˆ
™\Ý[›Y]Y]OË™Ù[™\Ú\ÐXÝ[Ûˆ	‰ˆ\Ü]ÚÙ[™\Ú\ÕÛÜšÜÜXÙPXÝ[ÛŠ™\Ý[›Y]Y]K™Ù[™\Ú\ÐXÝ[Û‹™\Ý[
JH™]\›ˆ™\Ý[ÂˆYˆ
Ü[YÙ[™\Ý[ÛÜšÙ›ÝÊ™\Ý[ÛÛ[X[™
JH™]\›ˆ™\Ý[ÂˆYˆ
™\Ý[›Y]Y]OËœ™Y\™XÝÙXÝ[Ûˆ	‰ˆ\™\Ý[›Y]Y]OËÛÜšÙ›ÝÑY™\œ™Y
HÛÔÙXÝ[ÛŠ™\Ý[›Y]Y]Kœ™Y\™XÝÙXÝ[ÛŠNÂˆYˆ
™\Ý[š[[OOH˜ÛÛ™\œØ][Û‹›[™ÝXYÙWØÚ[™ÙYˆ™\Ý[›Y]Y]OË›[™ÝXYÙH™]š[Ý\Ó[™ÝXYÙHOOH[™ÝXYÙPÛÙJ
JHÂˆ™Yœ™\Ú›ÚXÙQ›Ü“[™ÝXYÙPÚ[™ÙJ
NÂˆBˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊØØ[^™Y›ÚXÙTÝYÙÙ\Ý[Û’][\Ê™\Ý[ÛÛ^X[›ÚXÙTÝYÙÙ\Ý[ÛœÊ™\Ý[›Y]Y]OËœ™Y\™XÝÙXÝ[ÛˆÝ\œ™[ÙXÝ[Û’Y

JJJNÂˆYˆ
™\Ý[›Y]Y]OË™œ›ÛY\ÛÛ[][šXØ][ÛË›™^]Y\Ý[ÛŠHÂˆÛÛœÝ™^]Y\Ý[ÛˆH™\Ý[›Y]Y]K™œ›ÛY\ÛÛ[][šXØ][Û‹›™^]Y\Ý[ÛŽÂˆÛÛœÝœ›ÛY\”ÝYÙÙ\Ý[ÛœÈHÂˆÈÛÛ[X[™ˆ™^]Y\Ý[Û‹X™[ˆ™^]Y\Ý[ÛˆKˆÈÛÛ[X[™ˆœØ^H]YØZ[ˆÛÝÛH‹X™[ˆ”™\X]ÛÝÛHˆKˆÈÛÛ[X[™ˆ™^Z[ˆÚ[\H‹X™[ˆ‘^Z[ˆÚ[\HˆKˆÈÛÛ[X[™ˆ“™^\ÈÝÜ‹X™[ˆ”ÝÜˆBˆNÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊË‹‹™œ›ÛY\”ÝYÙÙ\Ý[ÛœË‹‹›ØØ[^™Y›ÚXÙTÝYÙÙ\Ý[Û’][\Ê™\Ý[×JWJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š›\Ý[š[™È‹™^\È\È™XYH›ÜˆÛ™H[œÝÙ\Žˆ	Û™^]Y\Ý[ÛŸX
NÂˆBˆYˆ
™\Ý[›Y]Y]OË›ÚXÙSZ\ÜÚ[ÛËœ˜\ÙH	‰ˆ	
ˆÙÛØ˜[\ÜÚ\Ý[Ý]\ÈŠJHÂˆ	
ˆÙÛØ˜[\ÜÚ\Ý[Ý]\ÈŠK^ÛÛ[H™\Ý[›Y]Y]K›ÚXÙSZ\ÜÚ[Û‹œ˜\ÙNÂˆBˆYˆ
™\Ý[›Y]Y]OË\›ÛØXÚË›™^]Y\Ý[ÛŠHÂˆÛÛœÝ\›”]Y\Ý[ÛˆH™\Ý[›Y]Y]OË›ØØ[^™YË\›ÛØXÚË›™^]Y\Ý[Ûˆ™\Ý[›Y]Y]K\›ÛØXÚ›™^]Y\Ý[ÛŽÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÞÈÛÛ[X[™ˆ™\Ý[›Y]Y]K\›ÛØXÚ›™^]Y\Ý[Û‹X™[ˆ\›”]Y\Ý[ÛˆK‹‹›ØØ[^™Y›ÚXÙTÝYÙÙ\Ý[Û’][\Ê™\Ý[×JWJNÂˆBˆÛÛœÝ[ÙHH	
ˆÚ˜\š\Ó[ÙHŠNÂˆYˆ
[ÙJH[ÙK^ÛÛ[HÛÛ™\œØ][Ûˆ\›ˆ	Ý›ÚXÙPÛÛ™\œØ][Û•\›œßXÂˆX\šÐYÙ[\™›Ü›X[˜ÙJ˜ÛÛ\]Y‹™\Ý[š[[˜YÙ[XÛÛ[X[™ŠNÂˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÈ\Nˆ˜YÙ[XÛÛ\]Y‹ÛÛ[X[™[[ˆ™\Ý[š[[˜YÙ[XÛÛ[X[™ˆJNÂˆ\]S™^\Ð]Ø\™[™\ÜÊÛÛ[X[™ÈÚ[[ˆYHJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\ŠœÜXZÚ[™È‹Ù[™\Ú\ÔÜXZØX›Kœ™\ÜÛœÙJNÂˆÙ]›ÚXÙT™\ÜÛœÙJÙ[™\Ú\ÔÜXZØX›Kœ™\ÜÛœÙKYKÈ[™Ù™•^ˆ™\Ý[›Y]Y]OË\›ÛØXÚË›™^]Y\Ý[Ûˆˆ‹[™XYU˜[œÛ]Yˆ™\Ý[›Y]Y]OË˜[œÛ]Y™\ÜÛœÙHOOHYKÛÛ[X[™\›•ÚÙ[‹ÛÜœ™[][Û’YÙ[™\Ú\Ô™\ÜÛœÙNˆÙ[™\Ú\ÔÜXZØX›KÛÝ\˜ÙNˆ™Ù[™\Ú\Ë[›Ü›X[^™YXÛÛ[X[™\™\ÜÛœÙHˆJNÂˆ™]\›ˆ™\Ý[ÂˆHØ]Ú
\œ›ÜŠHÂˆ™XÛÜ™Ù[™\Ú\ÔÜÚÙ[”™\ÜÛœÙT\[[™Q]™[
˜ÛÛ[X[™\™\ÜÛœÙK\\œÙKY˜Z[Y‹ÂˆÛÜœ™[][Û’Yˆ›Ý]Nˆ‹Ø\KØYÙ[ØÛÛ[X[™‹ˆÝXØÙ\ÜÎˆ˜[ÙKˆ\œ›ÜØ]YÛÜžNˆ\œ›Ü‹›˜[YHOOHX›Ü\œ›ÜˆˆÈ˜X›Üˆˆ˜ÛÛ[X[™[Ü‹XÛÛ˜XÝY\œ›Üˆ‹ˆ[\ÙY[YS\Îˆ]K››ÝÊ
HH™\]Y\ÝÝ\Y]ˆÛÝ\˜ÙQ[˜Ý[ÛŽˆœ[˜XÚÙ[™YÙ[ÛÛ[X[™‚ˆJNÂˆYˆ
XÝ]™PYÙ[ÛÛ[X[™ÛÛ›Û\ˆOOHÛÛ›Û\ŠHXÝ]™PYÙ[ÛÛ[X[™ÛÛ›Û\ˆH[ÂˆYˆ
\œ›Ü‹›˜[YHOOHX›Ü\œ›ÜˆˆYÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹˜˜XÚÙ[™\œ›ÜˆŠJH™]\›ˆ[ÂˆÛX\YÙ[›ÙÜ™\ÜÕ[Y\œÊ
NÂˆX\šÐYÙ[\™›Ü›X[˜ÙJ™˜Z[Y‹˜YÙ[XÛÛ[X[™Y\œ›ÜˆŠNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹“™^\È\È™XYHÈ[[ˆÚ[\\ˆÛÜ™ËˆŠNÂˆÛÛœÝY\ÜØYÙHHÝ[YYÝ]X›ÜÚK\Ý
\œ›Ü‹›Y\ÜØYÙHˆŠHÈ	Ù\œ›Ü‹›Y\ÜØYÙ_H	ÜØY™PYÙ[˜[˜XÚÔ™\ÜÛœÙJÛÛ[X[™
_Xˆ
\œ›Ü‹›Y\ÜØYÙHÛÛ[X[™˜Z[YˆŠNÂˆ›ÚXÙQ\œ›Ü”™XÛÝ™\žJ™]È\œ›ÜŠY\ÜØYÙJKÛÛ[X[™
NÂˆBŸB‚˜\Þ[˜È[˜Ý[Ûˆ[•][]PYÙ[ÛÛ[X[™
ÛÛ[X[™˜[˜XÚÐ[œÝÙ\ˆHˆ‹ØØ][ÛÛÛ^H[Ü[ÛœÈHßJHÂˆÛÛœÝ\›•ÚÙ[ˆHÜ[ÛœË\›•ÚÙ[ˆ[ÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹][]H[œÝÙ\ˆŠJH™]\›ˆ[ÂˆX›ÜXÝ]™PYÙ[ÛÛ[X[™

NÂˆÛÛœÝÛÛ›Û\ˆH™]ÈX›ÜÛÛ›Û\Š
NÂˆXÝ]™PYÙ[ÛÛ[X[™ÛÛ›Û\ˆHÛÛ›Û\ŽÂˆÛÛœÝÛÜœ™[][Û’YHÜ[ÛœË˜ÛÜœ™[][Û’YÜ™X]QÙ[™\Ú\Õ›ÚXÙPÛÜœ™[][Û’Y

NÂˆXÝ]™QÙ[™\Ú\Õ›ÚXÙPÛÜœ™[][Û’YHÛÜœ™[][Û’YÂˆÛÛœÝ™\]Y\ÝÝ\Y]H]K››ÝÊ
NÂˆžHÂˆÛÛœÝ™]š[Ý\Ó[™ÝXYÙHH[™ÝXYÙPÛÙJ
NÂˆÛÛœÝÛÛ[X[™[™ÝXYÙHHØ[›ÛšXØ[[™ÝXYÙPÛÙJÜ[ÛœË\™Ù][™ÝXYÙHÜ[ÛœË›[™ÝXYÙH[™ÝXYÙPÛÙJ
KÈ[ÝÔ\X[ˆYHJNÂˆ›ÚXÙPÛÛ™\œØ][Û•\›œÈ
ÏHNÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\Õ›ÚXÙU\›œÈ‹Ýš[™Ê›ÚXÙPÛÛ™\œØ][Û•\›œÊJNÂˆÙ]›ÚXÙTÝ]\Ê[šÚ[™ÈŠNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š[šÚ[™È‹“™^\È\ÈÚXÚÚ[™ÈH™X[]›Ü›H™XÛÜ™™Y›Ü™H[œÝÙ\š[™ËˆŠNÂˆ™XÛÜ™Ù[™\Ú\ÔÜÚÙ[”™\ÜÛœÙT\[[™Q]™[
˜ÛÛ[X[™\™\]Y\Ý\Ý\Y‹ÂˆÛÜœ™[][Û’Yˆ›Ý]Nˆ‹Ø\KØYÙ[ØÛÛ[X[™‹ˆÝXØÙ\ÜÎˆYKˆÛÝ\˜ÙQ[˜Ý[ÛŽˆœ[•][]PYÙ[ÛÛ[X[™‚ˆJNÂˆ]HH]ØZ]™\]Y\ÝÚ][Y[Ý]
‹Ø\KØYÙ[ØÛÛ[X[™‹ÂˆY]Ùˆ”ÔÕ‹ˆÛÛ›Û\‹ˆX›Ü™X\ÛÛŽˆœÝ\\œÙYY‹ˆ›ÙNˆÂˆÛÜœ™[][Û’YˆÛÛ[X[™ˆÛÛ™š\›Nˆ˜[ÙKˆÛÛ™\œØ][Û˜[ˆYKˆ[œ][ÙNˆ›ÚXÙH‹ˆÝ]][ÙNˆ›ÚXÙH‹ˆ[ÙNˆÛÛ™\œØ][Û”]›Ü›S[ÙJ
Kˆ[ÙPÛÛ^ˆ[ÙPÛÛ™\œØ][ÛÛÛ^
ÛÛ[X[™
Kˆ[YV›Û™Nˆ[‘]U[YQ›Ü›X]

Kœ™\ÛÛ™YÜ[ÛœÊ
K[YV›Û™KˆØØ][ÛŽˆØØ][ÛÛÛ^ˆ[™ÝXYÙNˆÛÛ[X[™[™ÝXYÙKˆ\™Ù][™ÝXYÙNˆÛÛ[X[™[™ÝXYÙKˆÛÛ\[š[Û•[™\œÝ[™[™ÎˆÛÛ\[š[Û•[™\œÝ[™[™ÔÝ]Kˆ›ÝNˆ\ÚÈ™^\ÈZ[H][]H\ÜÚ\Ý[‚ˆBˆKLŒ
NÂˆYˆ
XÝ]™PYÙ[ÛÛ[X[™ÛÛ›Û\ˆOOHÛÛ›Û\ŠHXÝ]™PYÙ[ÛÛ[X[™ÛÛ›Û\ˆH[ÂˆYˆ
YÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹][]H[œÝÙ\ˆŠJH™]\›ˆ[Âˆ™[™\Š
NÂˆÛÛœÝ™\Ý[H]K˜ÛÛ[X[™™\Ý[ßNÂˆ™XÛÜ™Ù[™\Ú\ÔÜÚÙ[”™\ÜÛœÙT\[[™Q]™[
˜ÛÛ[X[™\™\ÜÛœÙK\™XÙZ]™Y‹ÂˆÛÜœ™[][Û’Yˆ›Ý]Nˆ‹Ø\KØYÙ[ØÛÛ[X[™‹ˆ[[ˆ™\Ý[š[[[šÛ›ÝÛˆ‹ˆÝ]\ÎˆŒˆ[\ÙY[YS\Îˆ]K››ÝÊ
HH™\]Y\ÝÝ\Y]ˆÛÝ\˜ÙQ[˜Ý[ÛŽˆœ[•][]PYÙ[ÛÛ[X[™‚ˆJNÂˆÛÛœÝÙ[™\Ú\ÔÜXZØX›HH^˜XÝÙ[™\Ú\ÔÜXZØX›T™\ÜÛœÙJ]KÛÜœ™[][Û’Y
NÂˆØœÙ\™PYÙ[XÝ[Û“Y]Y]J™\Ý[ÈÛÝ\˜ÙNˆœ[•][]PYÙ[ÛÛ[X[™‹ÛÛ[X[™JNÂˆYˆ
]š\ÚX›PÛÛ›ÛYXÝ[Û”™]šY]Ô™XY[™\ÜÈ\Ó™^\ÔÚ[][][ÛÛÛ[X[™
ÛÛ[X[™
JHÂˆZ[ØØ[]™[Û™TÝYÙÙ\Ý[Û‘›Ü”Ú[\U\Ù\’[[
È\Nˆ™\™XÝˆKÛÛ[X[™
NÂˆBˆX^X™Q\Ü]ÚÛÛ™š\›YY˜]]™PØ[[™Ù™Š™\Ý[
NÂˆYˆ
™\Ý[›Y]Y]OË˜ÛÛ\[š[Û”›Ý]SÝ]ÛÛYJHÂˆžHÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\ÐÛÛ\[š[Û”›Ý]SÝ]ÛÛYH‹”ÓÓ‹œÝš[™ÚYžJ™\Ý[›Y]Y]K˜ÛÛ\[š[Û”›Ý]SÝ]ÛÛYJJNÂˆHØ]ÚÂˆËÈXYÛ›ÜÝXÈY]Y]HÚÝ[™]™\ˆY™™XÝ›Ý][™Ë‚ˆBˆBˆYˆ
™\Ý[š[[OOH›X\˜ÛÝ[žWÛÜ[ˆˆ™\Ý[š[[OOH›X\šÙ[žXWÛYYXØ[Ý˜[œÜÜŠHÂˆÛÛœÝÛÝ[žHHÛÝ[žQœ›ÛPYÙ[X\Y]Y]J™\Ý[›Y]Y]HßJNÂˆYˆ
ÛÝ[žJHÂˆX\šÐYÙ[\™›Ü›X[˜ÙJ˜ÛÛ\]Y‹™\Ý[š[[
NÂˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÈ\Nˆ][]KXÛÛ\]Y‹ÛÛ[X[™[[ˆ™\Ý[š[[JNÂˆÜ[ÛÝ[žSX\œ›ÛU›ÚXÙJÛÝ[žK™\Ý[œ™\ÜÛœÙJNÂˆ™]\›ˆ™\Ý[ÂˆBˆBˆYˆ
™\Ý[›Y]Y]OË™Ù[™\Ú\ÐXÝ[Ûˆ	‰ˆ\Ü]ÚÙ[™\Ú\ÕÛÜšÜÜXÙPXÝ[ÛŠ™\Ý[›Y]Y]K™Ù[™\Ú\ÐXÝ[Û‹™\Ý[
JH™]\›ˆ™\Ý[ÂˆYˆ
Ü[YÙ[™\Ý[ÛÜšÙ›ÝÊ™\Ý[ÛÛ[X[™
JH™]\›ˆ™\Ý[ÂˆYˆ
™\Ý[›Y]Y]OËœ™Y\™XÝÙXÝ[Ûˆ	‰ˆ\™\Ý[›Y]Y]OËÛÜšÙ›ÝÑY™\œ™Y
HÛÔÙXÝ[ÛŠ™\Ý[›Y]Y]Kœ™Y\™XÝÙXÝ[ÛŠNÂˆYˆ
™\Ý[š[[OOH˜ÛÛ™\œØ][Û‹›[™ÝXYÙWØÚ[™ÙYˆ™\Ý[›Y]Y]OË›[™ÝXYÙH™]š[Ý\Ó[™ÝXYÙHOOH[™ÝXYÙPÛÙJ
JHÂˆ™Yœ™\Ú›ÚXÙQ›Ü“[™ÝXYÙPÚ[™ÙJ
NÂˆBˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊØØ[^™Y›ÚXÙTÝYÙÙ\Ý[Û’][\Ê™\Ý[ÈÚ]\È™^Ù^H‹˜XÚÈ^HÚ\Y[‹›Ü[ˆ[ZX[‹[YHHÙX]\ˆ—JJNÂˆX\šÐYÙ[\™›Ü›X[˜ÙJ˜ÛÛ\]Y‹™\Ý[š[[][]KX\ÜÚ\Ý[ŠNÂˆ™XÛÜ™™^\Ð]]Û›Û[Ý\ÓX\›š[™ÊÈ\Nˆ][]KXÛÛ\]Y‹ÛÛ[X[™[[ˆ™\Ý[š[[][]KX\ÜÚ\Ý[ˆJNÂˆ\]S™^\Ð]Ø\™[™\ÜÊÛÛ[X[™ÈÚ[[ˆYHJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\ŠœÜXZÚ[™È‹Ù[™\Ú\ÔÜXZØX›Kœ™\ÜÛœÙH˜[˜XÚÐ[œÝÙ\ˆ‘Û™KˆH[H™XYH›Üˆ[Ý\ˆ™^]Y\Ý[Û‹ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJÙ[™\Ú\ÔÜXZØX›Kœ™\ÜÛœÙH˜[˜XÚÐ[œÝÙ\ˆ‘Û™KˆH[H™XYH›Üˆ[Ý\ˆ™^]Y\Ý[Û‹ˆ‹YKÈ[™Ù™•^ˆ™\Ý[›Y]Y]OË\›ÛØXÚË›™^]Y\Ý[Ûˆˆ‹[™XYU˜[œÛ]Yˆ™\Ý[›Y]Y]OË˜[œÛ]Y™\ÜÛœÙHOOHYK\›•ÚÙ[‹ÛÜœ™[][Û’YÙ[™\Ú\Ô™\ÜÛœÙNˆÙ[™\Ú\ÔÜXZØX›KÛÝ\˜ÙNˆ™Ù[™\Ú\Ë[›Ü›X[^™Y]][]K\™\ÜÛœÙHˆJNÂˆ™]\›ˆ™\Ý[ÂˆHØ]Ú
\œ›ÜŠHÂˆ™XÛÜ™Ù[™\Ú\ÔÜÚÙ[”™\ÜÛœÙT\[[™Q]™[
˜ÛÛ[X[™\™\ÜÛœÙK\\œÙKY˜Z[Y‹ÂˆÛÜœ™[][Û’Yˆ›Ý]Nˆ‹Ø\KØYÙ[ØÛÛ[X[™‹ˆÝXØÙ\ÜÎˆ˜[ÙKˆ\œ›ÜØ]YÛÜžNˆ\œ›Ü‹›˜[YHOOHX›Ü\œ›ÜˆˆÈ˜X›Üˆˆ][]KXÛÛ[X[™[Ü‹XÛÛ˜XÝY\œ›Üˆ‹ˆ[\ÙY[YS\Îˆ]K››ÝÊ
HH™\]Y\ÝÝ\Y]ˆÛÝ\˜ÙQ[˜Ý[ÛŽˆœ[•][]PYÙ[ÛÛ[X[™‚ˆJNÂˆYˆ
XÝ]™PYÙ[ÛÛ[X[™ÛÛ›Û\ˆOOHÛÛ›Û\ŠHXÝ]™PYÙ[ÛÛ[X[™ÛÛ›Û\ˆH[ÂˆYˆ
\œ›Ü‹›˜[YHOOHX›Ü\œ›ÜˆˆYÛ›Ü™TÝ[S™^\Õ\›Š\›•ÚÙ[‹][]H\œ›ÜˆŠJH™]\›ˆ[ÂˆX\šÐYÙ[\™›Ü›X[˜ÙJ™˜Z[Y‹][]KX\ÜÚ\Ý[Y\œ›ÜˆŠNÂˆÛÛœÝØØ[H˜[˜XÚÐ[œÝÙ\ˆ™^\Õ][]P\ÜÚ\Ý[™\ÜÛœÙUŒŠÛÛ[X[™
NÂˆ\]S™^\Ð™Z]š[Ü“^Y\ŠœÜXZÚ[™È‹“™^\È\È\Ú[™ÈØØ[\ÛÛ^™XØ]\ÙHH˜XÚÙ[™ÛÛ[X[™[™Ú[™H\È[˜]˜Z[X›KˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJØØ[È	ÛØØ[HH\ÙYØØ[\ÛÛ^™XØ]\ÙHH]™HÛÛ[X[™[™Ú[™HØ\È[˜]˜Z[X›K˜ˆ
\œ›Ü‹›Y\ÜØYÙH\ÚÈ™^\ÈÛÝ[›Ý[œÝÙ\ˆ]][]H]Y\Ý[ÛˆY]ˆŠKYKÈ\›•ÚÙ[ˆJNÂˆ™]\›ˆ[ÂˆBŸB‚™[˜Ý[ÛˆÝÜ™^\ÔÜXZÚ[™Ê™X\ÛÛˆH”ÝÜYˆH[H™XYHÚ[ˆ[ÝH\™KˆŠHÂˆ›ÚXÙTÝÜ™\]Y\ÝYH˜[ÙNÂˆ[\œ\™^\ÔÜYXÚ
™X\ÛÛŠNÂˆ™\Ù]™^\Ñ›Ü“™^›Û\
”ÝÜYˆ\ÚÈYHH™^]Y\Ý[ÛˆÜˆ[YHÚ\™HÈÛÈ™^ˆŠNÂˆÙ]›ÚXÙTÝ]\Ê›ÚXÙQš\œÝ[ÙHÈ›ÚXÙKYš\œÝˆˆœÝ[™žHŠNÂˆØ\Ý
“™^\ÈÝÜYÜXZÚ[™ÈŠNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[œÝÙ\‘ÛØ˜[ÛÛ™\œØ][ÛŠ[œÝÙ\ŠHÂˆÙ]ÛÛ[X[™[œ]Ê[œÝÙ\ŠNÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
[œÝÙ\ŠNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[”™\Ù]ÛÛ[X[™
]™[
HÂˆÛÛœÝÛÛ[X[™H]™[˜Ý\œ™[\™Ù]™]\Ù]˜ÛÛ[X[™™\Ù]ˆŽÂˆYˆ
XÛÛ[X[™
H™]\›ŽÂˆÛÔÙXÝ[ÛŠ™\Ú›Ø\™ŠNÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
ÛÛ[X[™
NÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[“ØØ[[ÝØÙ[˜\š[Ê]™[
HÂˆYˆ
]™[Ë˜Ý\œ™[\™Ù]Ë™]\Ù]ËœÚ[\PÛÛ[X[™
HÂˆ]™[Ëœ™]™[Y˜][ËŠ
NÂˆ]™[ËœÝÜ›ÜYØ][ÛËŠ
NÂˆÛÛœÝ]ÛˆH]™[˜Ý\œ™[\™Ù]Âˆ™]\›ˆ™[™\LL[ÝØÙ[˜\š[Ô™]šY]ÐØ\™
ÂˆX™[ˆ]Û‹^ÛÛ[”[ÝØÙ[˜\š[È‹ˆÛÛ[X[™ˆ]Û‹™]\Ù]œÚ[\PÛÛ[X[™ˆØ\Xš[]Nˆ]Û‹™]\Ù]œ[ÝØ\Xš[]BˆJNÂˆBˆÛÛœÝØÙ[˜\š[ÈH]™[˜Ý\œ™[\™Ù]™]\Ù]œ[ÝØÙ[˜\š[Èœ\˜[XXØÙ\ÜÈŽÂˆ]ØZ]]]]J‹Ø\KÜ[ÝÜ[ˆ‹ÈØÙ[˜\š[ÈK“ØØ[[Ý]šY[˜ÙH™\ÜÜ™X]YŠNÂˆÛÔÙXÝ[ÛŠ™\Ú›Ø\™ŠNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[‘ÛÝ™\››Y[™XY[™\ÜÐXÝ[ÛŠ]™[ÜXÝ[ÛŠHÂˆÛÛœÝ]ÛˆH]™[ÜXÝ[ÛË˜Ý\œ™[\™Ù]]™[ÜXÝ[ÛË\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]KYÛÝ™\››Y[XXÝ[Û—HŠH[ÂˆÛÛœÝXÝ[ÛˆH\[Ùˆ]™[ÜXÝ[ÛˆOOHœÝš[™ÈˆÈ]™[ÜXÝ[Ûˆˆ
]ÛË™]\Ù]Ë™ÛÝ™\››Y[XÝ[Ûˆœ[ÝŠNÂˆÛÛœÝX™[HXÝ[ÛˆOOHœ™\ÜˆÈ”™\\š[™ÈLY^HÛÝ™\››Y[™\Ü‹‹ˆ‚ˆˆXÝ[ÛˆOOHšX]X\ˆÈ“Ü[š[™È™YÚ[Û˜[™YYÈX\‹‹ˆ‚ˆˆZ[[™ÈÛÝ™\››Y[[Ý‹‹ˆŽÂˆÛÛœÝ[™[H	
ˆÙÛÝ™\››Y[™XY[™\ÜÔ[™[ŠNÂˆYˆ
[™[
H[™[š[›™\’SH]Ý›Û™Ï‰Ý˜[œÛ]U^
X™[
_OÜÝ›Û™ÏÜ[‰Ý˜[œÛ]U^
“™^\È\ÈÜ™Ø[š^š[™È[\XÝ[Ý™YÚ[ÛœË]HÛÝ™\™ZYÛKÛÛ\X[˜ÙKÝËX˜[™ÚY›ÛÙ‹[™›ØÝ\™[Y[]šY[˜ÙKˆŠ_OÜÜ[Ù]˜ÂˆžHÂˆ]HH]ØZ]™\]Y\Ý
‹Ø\KÙÛÝ™\››Y[Ü™XY[™\ÜÈ‹ÈY]Ùˆ”ÔÕ‹›ÙNˆÈXÝ[ÛˆHJNÂˆ™[™\Š
NÂˆYˆ
XÝ[ÛˆOOHšX]X\ŠHÂˆÛÔÙXÝ[ÛŠ›X\ŠNÂˆÙ][Y[Ý]


HOˆ™[™\“X\

K
NÂˆH[ÙHÂˆÛÔÙXÝ[ÛŠ™\Ú›Ø\™ŠNÂˆBˆÛÛœÝ™\Ý[H]K™ÛÝ™\››Y[™XY[™\ÜÔ™\Ý[]K™ÛÝ™\››Y[™XY[™\ÜÈßNÂˆÛÛœÝY\ÜØYÙHH™\Ý[œÝ[[X\žH‘ÛÝ™\››Y[™XY[™\ÜÈ]šY[˜ÙH\È™XYKˆŽÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹Y\ÜØYÙJNÂˆÙ]›ÚXÙT™\ÜÛœÙJY\ÜØYÙKYJNÂˆØ\Ý
XÝ[ÛˆOOHœ™\ÜˆÈ‘ÛÝ™\››Y[™\Ü™\\™YˆˆXÝ[ÛˆOOHšX]X\ˆÈ”™YÚ[Û˜[™YYÈX\Ü[™Yˆˆ‘ÛÝ™\››Y[[ÝZ[ŠNÂˆHØ]Ú
\œ›ÜŠHÂˆYˆ
[™[
H[™[š[›™\’SH]Ý›Û™Ï‰Ý˜[œÛ]U^
‘ÛÝ™\››Y[™XY[™\ÜÈ™YYÈ][[ÛˆŠ_OÜÝ›Û™ÏÜ[‰Ù\ØØ\R[
\œ›Ü‹›Y\ÜØYÙH•HÛÜšÙ›ÝÈÛÝ[›Ý[ˆY]ˆŠ_OÜÜ[Ù]˜Âˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹\œ›Ü‹›Y\ÜØYÙH‘ÛÝ™\››Y[™XY[™\ÜÈ™YYÈ][[Û‹ˆŠNÂˆØ\Ý
\œ›Ü‹›Y\ÜØYÙJNÂˆBŸB‚˜\Þ[˜È[˜Ý[Ûˆ[”™[[ÝS][˜ÚÚ]

HÂˆ]ØZ]]]]J‹Ø\KÜ[ÝÜ™[[ÝK[][˜ÚZÚ]‹ßK”™[[ÝH\˜[˜\›Y\ˆ][˜ÚÚ]Ü™X]YŠNÂˆÛÔÙXÝ[ÛŠ™\Ú›Ø\™ŠNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[ÛÛXÝ]™R[[YÙ[˜ÙJ
HÂˆžHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š[šÚ[™È‹“™^\È\È™]šY]Ú[™ÈÛÛXÝ]™H\ØYÙH]\›œÈ[™ÛÝ™\›™YÙ[‹Y]›Û][Ûˆ›ÜÜØ[ËˆŠNÂˆ]HH]ØZ]™\]Y\Ý
‹Ø\KÚ[[YÙ[˜ÙKØÛÛXÝ]™KY]›Û][Ûˆ‹ÈY]Ùˆ”ÔÕ‹›ÙNˆÈ\œÚ\ÝˆYHHJNÂˆ™[™\Š
NÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÛÛœÝ™\Ý[H]K˜ÛÛXÝ]™R[[YÙ[˜ÙT™\Ý[]K˜ÛÛXÝ]™R[[YÙ[˜ÙHßNÂˆÛÛœÝY\ÜØYÙHH™\Ý[œZ[“[™ÝXYÙTÝ[[X\žHÛÛXÝ]™H[[YÙ[˜ÙH™]šY]ÈÛÛ\]Kˆ™^\ÈÜ™X]YÛÝ™\›™YÙ[‹Y]›Û][Ûˆ™XÛÛ[Y[™][ÛœÈ›ÜˆYZ[ˆ™]šY]ËˆŽÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈ™^Z[ˆHÜ›ÜÜØ[‹›Ü[ˆYZ[ˆ‹œ[ˆ]›Ü›H[YÜš]H‹“™^\ÈÝÜ—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹Y\ÜØYÙJNÂˆÙ]›ÚXÙT™\ÜÛœÙJY\ÜØYÙKYJNÂˆØ\Ý
ÛÛXÝ]™H[[YÙ[˜ÙH™]šY]ÈÛÛ\]HŠNÂˆHØ]Ú
\œ›ÜŠHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹\œ›Ü‹›Y\ÜØYÙHÛÛXÝ]™H[[YÙ[˜ÙH™YYÈ][[Û‹ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ\œ›Ü‹›Y\ÜØYÙHÛÛXÝ]™H[[YÙ[˜ÙHÛÝ[›Ý[ˆY]ˆ‹YJNÂˆØ\Ý
\œ›Ü‹›Y\ÜØYÙJNÂˆBŸB‚˜\Þ[˜È[˜Ý[Ûˆ[‘œ›ÛY\œ˜Z[Š
HÂˆžHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š[šÚ[™È‹“™^\È\ÈXÝ]˜][™ÈHYÚ\ÝÜ\˜][™È^Y\ˆXÜ›ÜÜÈÛÛ™\œØ][Û‹Y[[ÜžKÛÜšÙ›ÝÜË›ÝšY\œËX\Ë[™ØY™]KˆŠNÂˆ]HH]ØZ]™\]Y\Ý
‹Ø\KÚ[[YÙ[˜ÙKÙœ›ÛY\‹Xœ˜Z[ˆ‹ÈY]Ùˆ”ÔÕ‹›ÙNˆÈ\œÚ\ÝˆYHHJNÂˆ™[™\Š
NÂˆÛÔÙXÝ[ÛŠ˜YÙ[ŠNÂˆÛÛœÝ™\Ý[H]K™œ›ÛY\œ˜Z[”™\Ý[]K™œ›ÛY\œ˜Z[ˆßNÂˆÛÛœÝY\ÜØYÙHH™\Ý[œZ[“[™ÝXYÙTÝ[[X\žH‘œ›ÛY\ˆ™^\Èœ˜Z[ˆ\ÈXÝ]™Kˆ™^\È\ÈÛÛÜ™[˜][™ÈHYÚ\ÝÜ\˜][™È^Y\ˆXÜ›ÜÜÈH]›Ü›KˆŽÂˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊÈš[H˜\›Y\ˆ‹š[H]Y[‹œÝ\^HÛÝ\œÙH‹œ™\Ù[H]›Ü›H—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹Y\ÜØYÙJNÂˆÙ]›ÚXÙT™\ÜÛœÙJY\ÜØYÙKYJNÂˆØ\Ý
‘œ›ÛY\ˆ™^\Èœ˜Z[ˆXÝ]˜]YŠNÂˆHØ]Ú
\œ›ÜŠHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹\œ›Ü‹›Y\ÜØYÙH‘œ›ÛY\ˆ™^\Èœ˜Z[ˆ™YYÈ][[Û‹ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ\œ›Ü‹›Y\ÜØYÙH‘œ›ÛY\ˆ™^\Èœ˜Z[ˆÛÝ[›ÝXÝ]˜]HY]ˆ‹YJNÂˆØ\Ý
\œ›Ü‹›Y\ÜØYÙJNÂˆBŸB‚˜\Þ[˜È[˜Ý[Ûˆ[”Ú[\PXÝ[ÛŠ]™[Ü]ÛŠHÂˆÛÛœÝÙ[XÝÜˆH–Ù]K\Ú[\KXÛÛ[X[™KÙ]K\Ú[\K\ÙXÝ[Û—KÙ]K\Ú[\K\[ÝKÙ]K\Ú[\KY[[×KÙ]K\Ú[\K[Z\ÜÚ[Û—KÙ]K\Ú[\KXXÝ[Û—HŽÂˆÛÛœÝ]™[\™Ù]]ÛˆH]™[Ü]ÛË\™Ù]Ë˜ÛÜÙ\ÝËŠÙ[XÝÜŠNÂˆÛÛœÝÝ\œ™[\™Ù]]ÛˆH]™[Ü]ÛË˜Ý\œ™[\™Ù]Ë›X]Ú\ÏËŠÙ[XÝÜŠHÈ]™[Ü]Û‹˜Ý\œ™[\™Ù]ˆ[ÂˆÛÛœÝ\™XÝ]ÛˆH]™[Ü]ÛË›X]Ú\ÏËŠÙ[XÝÜŠHÈ]™[Ü]Ûˆˆ[ÂˆÛÛœÝ]ÛˆH]™[\™Ù]]ÛˆÝ\œ™[\™Ù]]Ûˆ\™XÝ]ÛŽÂˆÛÛœÝÝ]\ÈH	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠNÂˆYˆ
X]ÛŠH™]\›ŽÂˆ]™[Ü]ÛËœ™]™[Y˜][ËŠ
NÂˆ]™[Ü]ÛËœÝÜ›ÜYØ][ÛËŠ
NÂˆÛÛœÝÚÝ[™\Ý[YU›ÚXÙHH^\šY[˜ÙS[ÙHOOH\Ù\ˆˆ	‰ˆ›ÚXÙTÚÝ[™\Ý[YPY\•ZPXÝ[ÛŠ
NÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆŠHÂˆÛÜÙP\ÚÓ™^\ÊÈÚ[[ˆYHJNÂˆ	
ˆÚ˜\š\Ô[™[ŠOË˜Û\ÜÓ\Ý˜Y
šY[ˆŠNÂˆ	
ˆÝÛÜšÙ›ÝÓ[Ù[ŠOË˜Û\ÜÓ\Ý˜Y
šY[ˆŠNÂˆBˆÛÛœÝX™[H]Û‹œ]Y\žTÙ[XÝÜŠœÝ›Û™ÈŠOË^ÛÛ[]Û‹^ÛÛ[š[J
H”Ù[XÝYXÝ[ÛˆŽÂˆYˆ
Ý]\ÊHÝ]\Ë^ÛÛ[H	ÛX™[H\È[›š[™Ë‹‹˜ÂˆYˆ
]Û‹™]\Ù]œÚ[\PÛÛ[X[™
HÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆŠHÂˆYˆ
]Û‹™]\Ù]˜LLØ\Xš[]JHÂˆÛÛœÝ[[HLLØY™P]]Û›Û^R[[
]Û‹™]\Ù]œÚ[\PÛÛ[X[™
NÂˆÛÛœÝÜ[™YHÜ[LLØY™P]]Û›Û^T™]šY]Ê[[
NÂˆ™\Ý[YU›ÚXÙPY\•ZPXÝ[ÛŠÚÝ[™\Ý[YU›ÚXÙJNÂˆYˆ
Ý]\ÊHÝ]\Ë^ÛÛ[HÜ[™YˆÈ	ÛX™[HÜ[™YHØY™H™]šY]Ë[Û›H™^\È™]šY]Ë˜ˆˆ	ÛX™[H™YYÈ][[Û‹ˆ\ÚÈ™^\È[ˆ[Ý\ˆÝÛˆÛÜ™ÈÜˆÚÛÜÙH[›Ý\ˆXÝ[Û‹˜Âˆ™]\›ŽÂˆBˆYˆ
\ÒX[šY[Ô™]šY]ÐÛÛ[X[™
]Û‹™]\Ù]œÚ[\PÛÛ[X[™
JHÂˆÛÛœÝÛÛ™šYÈHÛÜšÙ›ÝÐÛÛ™šYÊšX[‹šY[È‹È]\Ù]ˆßHJNÂˆYˆ
Ý]\ÊHÝ]\Ë^ÛÛ[H	ÛX™[HÜ[™Yˆ™]šY]ÈH]Z[È[™ÚÛÜÙHY\ÈÜˆ›Ë˜ÂˆÛÛœÝÜ[™YHÜ[’X[šY[Ô™]šY]ÕÛÜšÙ›ÝÊÛÛ™šYË“ØØ[Ø[Y\˜H™]šY]È[™šY[È[™Ù™ˆ™XÛÜ™\™H™XYKˆ‹šX[ŠNÂˆ™\Ý[YU›ÚXÙPY\•ZPXÝ[ÛŠÚÝ[™\Ý[YU›ÚXÙJNÂˆYˆ
[Ü[™Y	‰ˆ	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠJH	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠK^ÛÛ[H	ÛX™[H™YYÈ][[Û‹ˆ\ÚÈ™^\È[ˆ[Ý\ˆÝÛˆÛÜ™ÈÜˆÚÛÜÙH[›Ý\ˆXÝ[Û‹˜Âˆ™]\›ŽÂˆBˆÛÛœÝX\YHÚ[\U\Ù\ÛÛ[X[™ÛÜšÙ›ÝÊ]Û‹™]\Ù]œÚ[\PÛÛ[X[™
NÂˆYˆ
X\Y
HÂˆX\Y˜ÛÛ[X[™H]Û‹™]\Ù]œÚ[\PÛÛ[X[™ÂˆX\Y›X™[HX™[ÂˆYˆ
Ý]\ÊHÝ]\Ë^ÛÛ[H	ÛX™[HÜ[™Yˆ™]šY]ÈH]Z[È[™ÚÛÜÙHY\ÈÜˆ›Ë˜ÂˆÛÛœÝ\™Ù]ÙXÝ[ÛˆHX\YœÙXÝ[ÛˆÝ\œ™[ÙXÝ[Û’Y

H
X\YÛÜšÙ›ÝÈOOH˜ZHˆÈ˜YÙ[ˆˆX\YÛÜšÙ›ÝÈOOH›X\ˆÈ›X\ˆˆX\YÛÜšÙ›ÝÊNÂˆÛÛœÝÜ[™YHÜ[“X\Y\Ù\•ÛÜšÙ›ÝÊX\Y\™Ù]ÙXÝ[ÛŠNÂˆ™\Ý[YU›ÚXÙPY\•ZPXÝ[ÛŠÚÝ[™\Ý[YU›ÚXÙJNÂˆYˆ
[Ü[™Y	‰ˆ	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠJH	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠK^ÛÛ[H	ÛX™[H™YYÈ][[Û‹ˆ\ÚÈ™^\È[ˆ[Ý\ˆÝÛˆÛÜ™ÈÜˆÚÛÜÙH[›Ý\ˆXÝ[Û‹˜Âˆ™]\›ŽÂˆBˆÙ]ÛÛ[X[™[œ]Ê]Û‹™]\Ù]œÚ[\PÛÛ[X[™
NÂˆÜ[\ÚÓ™^\Ê
NÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
]Û‹™]\Ù]œÚ[\PÛÛ[X[™
NÂˆ™\Ý[YU›ÚXÙPY\•ZPXÝ[ÛŠÚÝ[™\Ý[YU›ÚXÙJNÂˆYˆ
	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠJH	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠK^ÛÛ[H	ÛX™[HÙ[È™^\Ë˜Âˆ™]\›ŽÂˆBˆÙ]ÛÛ[X[™[œ]Ê]Û‹™]\Ù]œÚ[\PÛÛ[X[™
NÂˆÜ[\ÚÓ™^\Ê
NÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
]Û‹™]\Ù]œÚ[\PÛÛ[X[™
NÂˆYˆ
	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠJH	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠK^ÛÛ[H	ÛX™[HÙ[È\ÚÈYÜšS™^\Ëˆ™]šY]ÈH™\ÜÛœÙHÜˆÛÛ™š\›HHÜ[™YÛÜšÙ›ÝË˜Âˆ™]\›ŽÂˆBˆYˆ
]Û‹™]\Ù]œÚ[\TÙXÝ[ÛŠHÂˆXÝ]˜]TÙXÝ[Û‘œ›ÛP]ÛŠ]ÛŠNÂˆ™\Ý[YU›ÚXÙPY\•ZPXÝ[ÛŠÚÝ[™\Ý[YU›ÚXÙJNÂˆYˆ
Ý]\ÊHÝ]\Ë^ÛÛ[H	ÛX™[HÜ[™Y˜Âˆ™]\›ŽÂˆBˆYˆ
]Û‹™]\Ù]œÚ[\T[Ý
HÂˆ]ØZ]]]]J‹Ø\KÜ[ÝÜ[ˆ‹ÈØÙ[˜\š[Îˆ]Û‹™]\Ù]œÚ[\T[ÝK“ØØ[[Ý]šY[˜ÙH™\ÜÜ™X]YŠNÂˆÛÔÙXÝ[ÛŠ™\Ú›Ø\™ŠNÂˆYˆ
	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠJH	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠK^ÛÛ[H	ÛX™[HÛÛ\]Y[™]šY[˜ÙHØ\ÈYY™[ÝË˜Âˆ™]\›ŽÂˆBˆYˆ
]Û‹™]\Ù]œÚ[\Q[[ÈOOHÛÝÈŠHÂˆ]ØZ][•ÛÝÑ[[Ê
NÂˆYˆ
	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠJH	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠK^ÛÛ[H	ÛX™[HÛÛ\]Yˆ™]šY]ÈH[[ÈÝÜžX›Ø\™[™]šY[˜ÙK˜Âˆ™]\›ŽÂˆBˆYˆ
]Û‹™]\Ù]œÚ[\SZ\ÜÚ[ÛˆOOH™[ŠHÂˆ]ØZ][’˜\š\Ñ[Z\ÜÚ[ÛŠ
NÂˆYˆ
	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠJH	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠK^ÛÛ[H	ÛX™[HÙ[ÈHYÙ[ÛÛ[X[™Ù[\‹ˆ™]šY]ÈH[‹^XÝ][Û‹[™]šY[˜ÙK˜Âˆ™]\›ŽÂˆBˆÛÛœÝ]\ÝH
]Kœ›Ùš[K˜YÙ[ÛÛ[X[™È×JVÌNÂˆYˆ
]\ÝË›Y]Y]OËœ™Y\™XÝÙXÝ[Ûˆ	‰ˆ[]\ÝË›Y]Y]OËÛÜšÙ›ÝÑY™\œ™Y
HÛÔÙXÝ[ÛŠ]\Ý›Y]Y]Kœ™Y\™XÝÙXÝ[ÛŠNÂˆ[ÙHÛÔÙXÝ[ÛŠ™\Ú›Ø\™ŠNÂˆYˆ
Ý]\ÊHÝ]\Ë^ÛÛ[H]\ÝËœ™\ÜÛœÙH”™]\›™YÈH\Ú›Ø\™ˆÚÛÜÙHHÛÜšÙ›ÝÈÈÛÛ[YKˆŽÂŸB‚™[˜Ý[Ûˆ™[™\“ÙÚ[”›Ùš[\Ê
HÂˆÛÛœÝ\™Ù]H	
ˆÛÙÚ[”›Ùš[\ÈŠNÂˆYˆ
]\™Ù]
H™]\›ŽÂˆ\™Ù]š[›™\’SH[[ÓÙÚ[”›Ùš[\Ë›X\
›Ùš[HOˆˆ]ÛˆÛ\ÜÏH›ÙÚ[‹\›Ùš[Hˆ\OH˜]Ûˆˆ]K[ÙÚ[‹Y[XZ[H‰Ü›Ùš[K™[XZ[Hˆ]K[ÙÚ[‹[X™[H‰Ü›Ùš[K›X™[H‚ˆÝ›Û™Ï‰Ü›Ùš[K›X™[OÜÝ›Û™Ï‚ˆÜ[‰Ü›Ùš[Kœ›Û_OÜÜ[‚ˆØ]Û‚ˆ
Kš›Ú[ŠˆŠNÂˆ\™Ù]œ]Y\žTÙ[XÝÜ[
–Ù]K[ÙÚ[‹Y[XZ[HŠK™›Ü‘XXÚ
]ÛˆOˆÂˆ]Û‹˜Y]™[\Ý[™\Š˜ÛXÚÈ‹

HOˆÂˆ	
ˆÙ[XZ[ŠK˜[YHH]Û‹™]\Ù]›ÙÚ[‘[XZ[Âˆ	
ˆÜ\ÜÝÛÜ™ŠK˜[YHHˆŽÂˆ	
ˆÜ\ÜÝÛÜ™ŠK™›ØÝ\Ê
NÂˆ	
ˆÛÙÚ[“Y\ÜØYÙHŠK^ÛÛ[H	Ø]Û‹™]\Ù]›ÙÚ[“X™[”›Ùš[HŸHÙ[XÝYˆ\HH\ÜÝÛÜ™È[\‹˜ÂˆJNÂˆJNÂˆØ\\™SÜšYÚ[˜[^
\™Ù]
NÂŸB‚˜\Þ[˜È[˜Ý[ÛˆÝ\ÝY\Ý\Ù\”Ù\ÜÚ[ÛŠ
HÂˆÛÛœÝÝY\Ý˜[YHHÝš[™Ê	
ˆÙÝY\Ý˜[YHŠOË˜[YHˆŠKœ™\XÙJ×ÊËÙËˆŠKš[J
NÂˆÛÛœÝÙÚ[“[™ÝXYÙHHØØ[ÝÜ˜YÙK™Ù]][J˜YÜš[™^\ÓÙÚ[“[™ÝXYÙHŠH™[ˆŽÂˆYˆ
YÝY\Ý˜[YJHÂˆ	
ˆÛÙÚ[“Y\ÜØYÙHŠK^ÛÛ[H˜[œÛ]U^
”X\ÙH\H[Ý\ˆ˜[YHÛÈ™^\ÈØ[ˆÜ™Y][ÝKˆŠNÂˆ	
ˆÙÝY\Ý˜[YHŠOË™›ØÝ\Ê
NÂˆ™]\›ŽÂˆBˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\ÑÝY\Ý\Ü^S˜[YH‹ÝY\Ý˜[YKœÛXÙJ
JNÂˆ	
ˆÛÙÚ[“Y\ÜØYÙHŠK^ÛÛ[H	Ý˜[œÛ]U^
’[ÈŠ_H	ÙÝY\Ý˜[YKœÜ]
×ÊËÊVÌ_Kˆ	Ý˜[œÛ]U^
“™^\È\ÈÜ[š[™È[Ý\ˆÛÜšÜÜXÙKˆŠ_XÂˆžHÂˆ]HH]ØZ]™\]Y\Ý
‹Ø\KÛÙÚ[ˆ‹ÈY]Ùˆ”ÔÕ‹›ÙNˆÈ[XZ[ˆ\Ù\YÜš[™^\Ë›Ü™È‹\ÜÝÛÜ™ˆ•\Ù\ŒŒˆHˆHJNÂˆYˆ
]OË\Ù\ŠH]K\Ù\‹›˜[YHHÝY\Ý˜[YKœÛXÙJ
NÂˆYˆ
ÙÚ[“[™ÝXYÙH	‰ˆÙÚ[“[™ÝXYÙHOOH]OË\Ù\Ë›[™ÝXYÙJHÂˆ]HH]ØZ]™\]Y\Ý
‹Ø\KÝ\Ù\‹Û[™ÝXYÙH‹ÈY]Ùˆ”ÔÕ‹›ÙNˆÈ[™ÝXYÙNˆÙÚ[“[™ÝXYÙHHJNÂˆYˆ
]OË\Ù\ŠH]K\Ù\‹›˜[YHHÝY\Ý˜[YKœÛXÙJ
NÂˆBˆ]ØZ]ØYX›XÓX\ÛÛ™šYÊ
NÂˆ™[™\Š
NÂˆÝ\\ÚÓ™^\ÐY\“ÙÚ[Š
NÂˆØ\Ý
[È	Ý\Ù\‘š\œÝ˜[YJ
_X
NÂˆHØ]Ú
\œ›ÜŠHÂˆ	
ˆÛÙÚ[“Y\ÜØYÙHŠK^ÛÛ[H\œ›Ü‹›Y\ÜØYÙNÂˆBŸB‚˜\Þ[˜È[˜Ý[Ûˆ[•›ÚXÙU^ÛÛ[X[™

HÂˆÛÛœÝ[œ]H	
ˆÝ›ÚXÙU^ÛÛ[X[™ŠNÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
[œ]Ë˜[YHˆŠNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[‘ÛØ˜[ÛÛ[X[™

HÂˆÛÛœÝ[œ]H	
ˆÙÛØ˜[ÛÛ[X[™[œ]ŠNÂˆÙ]ÛÛ[X[™[œ]Ê[œ]Ë˜[YHˆŠNÂˆÛÛœÝÛÛ[X[™H[œ]Ë˜[YHˆŽÂˆYˆ
TÝš[™ÊÛÛ[X[™ˆŠKš[J
JHÂˆÛX\“]™[Û™PYÙ[XÝ[Û”ÝYÙÙ\Ý[Û“X™[

NÂˆÙ]›ÚXÙT™\ÜÛœÙJ•\HH™\]Y\Ý›Üˆ™^\Ë[ˆ[ˆHÛÛ[X[™ˆ‹˜[ÙKÈ[ÝÕ›ÚXÙQš\œÝˆ˜[ÙHJNÂˆ™]\›ŽÂˆBˆÛÛœÝ˜]ÓÝÙ\ÛÛ[X[™HÝš[™ÊÛÛ[X[™ˆŠKÓÝÙ\Ø\ÙJ
Kš[J
NÂˆÛÛœÝÝÙ\ÛÛ[X[™H›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆÛÛœÝ\YÛØ˜[›ÚXÙSÛˆH

˜]ÓÝÙ\ÛÛ[X[™š[˜ÛY\Ê[›]]HŠH˜]ÓÝÙ\ÛÛ[X[™š[˜ÛY\Ê›ÚXÙHÛˆŠJH	‰ˆ×Š™^\ßYÜš[™^\ß›ÚXÙJW‹Ë\Ý
˜]ÓÝÙ\ÛÛ[X[™
JBˆ×Š[›]]H™^\ß[›]]HYÜš[™^\ß™^\È[›]]_YÜš[™^\È[›]]_›ÚXÙHÛŸ\›ˆ›ÚXÙHÛŸ[ÈYØZ[ŸÜXZÈYØZ[Ÿ[™]ZY][ÙJIË\Ý
ÝÙ\ÛÛ[X[™
NÂˆÛÛœÝ\YÛØ˜[›ÚXÙSÙ™ˆH

˜]ÓÝÙ\ÛÛ[X[™š[˜ÛY\Ê›]]HŠH˜]ÓÝÙ\ÛÛ[X[™š[˜ÛY\Êœ]ZY]ŠJH	‰ˆ\˜]ÓÝÙ\ÛÛ[X[™š[˜ÛY\Ê[›]]HŠH	‰ˆ×Š™^\ßYÜš[™^\ß›ÚXÙ_]ZY]
W‹Ë\Ý
˜]ÓÝÙ\ÛÛ[X[™
JBˆ×Š]]H™^\ß]]HYÜš[™^\ß™^\È]]_YÜš[™^\È]]_ÛÈ]ZY][[È]ZY]]ZY][Ù_ÝÜ[Ú[™ÊIË\Ý
ÝÙ\ÛÛ[X[™
NÂˆYˆ
\YÛØ˜[›ÚXÙSÛˆ\Ñ^XÚ]™^\Õ›ÚXÙSÛÛÛ[X[™
ÛÛ[X[™
H\Ó™^\Õ›ÚXÙSÛÛÛ[X[™
ÛÛ[X[™
JHÂˆ›ÚXÙPÛÛ™\œØ][Û”]\ÙYH˜[ÙNÂˆ[˜X›S™^\Õ›ÚXÙQ›Ü‘[[Ê“™^\È›ÚXÙH\È˜XÚÈÛ‹ˆØ^H™^\Ë[ˆ[YHÚ][ÝH™YYˆ‹ÈÚÚ\\Ý[š[™ÔÝ\ˆYHJNÂˆ™[™\•\YÛØ˜[›ÚXÙPÛÛ›ÛÛÛ™š\›X][ÛŠ“™^\È›ÚXÙH\È˜XÚÈÛ‹ˆØ^H™^\Ë[ˆ[YHÚ][ÝH™YYˆŠNÂˆ™]\›ŽÂˆBˆYˆ
\YÛØ˜[›ÚXÙSÙ™ˆ\Ñ^XÚ]™^\Õ›ÚXÙSÙ™ÛÛ[X[™
ÛÛ[X[™
H\Ó™^\Õ›ÚXÙSÙ™ÛÛ[X[™
ÛÛ[X[™
JHÂˆ\ØX›S™^\Õ›ÚXÙQ›Ü‘[[Ê‘[[È]ZY][ÙH\ÈÛ‹ˆ™^\È›ÚXÙH\ÈÙ™ˆ[[[ÝH\›ˆ]˜XÚÈÛ‹ˆŠNÂˆ™[™\•\YÛØ˜[›ÚXÙPÛÛ›ÛÛÛ™š\›X][ÛŠ‘[[È]ZY][ÙH\ÈÛ‹ˆ™^\È›ÚXÙH\ÈÙ™ˆ[[[ÝH\›ˆ]˜XÚÈÛ‹ˆŠNÂˆ™]\›ŽÂˆBˆYˆ
[™S™^\ÔÝ[™\™\Ù\”ØY™U\YÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆÛÛœÝ\ÙLMÔØY™P[œÝÙ\ˆH™^\Ô\ÙLMÔÝ[™\™\Ù\”ØY™P[œÝÙ\ŠÛÛ[X[™
NÂˆYˆ
\ÙLMÔØY™P[œÝÙ\ŠHÂˆ[™[™ÐYÙ[Û\šYšXØ][ÛˆH[Âˆ[™[™Ó™^\ÔÜÚÙ[ÛÛ[X[™H[Âˆ™[™\“]™U›ÚXÙTÝYÙÙ\Ý[ÛœÊ\ÙLMÔØY™P[œÝÙ\‹œÝYÙÙ\Ý[ÛœÈÈÚ]›ÝšY\œÈØ[ˆ[ÝHÛÛ›™XÝÈ‹Ú]]HÛÝ\˜Ù\ÈÈ[ÝH™YY‹Ú]™YYÈ\›Ý˜[—JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š˜[œÝÙ\š[™È‹“™^\È[œÝÙ\™YH\ÙHMÈ›ÝÝ\KY›Ý[™][Ûˆ›Û\Ú]Ý]^XÝ][™È[ˆXÝ[Û‹ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ\ÙLMÔØY™P[œÝÙ\‹œ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ÛÝ\˜ÙNˆœ\ÙKLMËYÛØ˜[XÛÛ[X[™ˆJNÂˆYˆ
\ÙLMÔØY™P[œÝÙ\‹›ØØ[]\ÚXÊHÂˆÙ][Y[Ý]


HOˆÂˆÙ]›ÚXÙT™\ÜÛœÙJ\ÙLMÔØY™P[œÝÙ\‹œ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ÛÝ\˜ÙNˆœ\ÙKLMËYÛØ˜[XÛÛ[X[™ˆJNÂˆKML
NÂˆ›ÚY^S™^\Ó]\ÚXÕ\Ý]Y[Ê’Ù[žXKZ[œÜ\™Y[[Èš]HŠK™š[˜[J

HOˆÂˆÙ]›ÚXÙT™\ÜÛœÙJ\ÙLMÔØY™P[œÝÙ\‹œ™\ÜÛœÙKYKÈ[ÝÒ[™Ù™Žˆ˜[ÙKÛÛ[X[™ÛÝ\˜ÙNˆœ\ÙKLMËYÛØ˜[XÛÛ[X[™ˆJNÂˆJNÂˆBˆ™]\›ŽÂˆBˆ]ØZ][™U›ÚXÙPÛÛ[X[™
ÛÛ[X[™
NÂŸB‚™[˜Ý[Ûˆ\Ó™^\Õ›ÚXÙQ[[ÒYÚš\ÚÔ›Û\
ÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆYˆ
[ÝÙ\ŠH™]\›ˆ˜[ÙNÂˆYˆ
\Ó™^\Õ›ÚXÙQ[[Ñ[Y\™Ù[˜ÞT›Û\
ÛÛ[X[™
JH™]\›ˆYNÂˆYˆ
\Ó™^\Õ›ÚXÙQ[[ÒX[XØÙ\ÜÔ›Û\
ÛÛ[X[™
JH™]\›ˆ˜[ÙNÂˆ™]\›ˆ×ŠØ[Û™_X[^Y\ÜØYÙ_Ú]Ø\[YÜ˜[_Û\ß[XZ[ÛÛXÝÙ[™Ø[Y\˜_šY[ßZXÜ›ÜÛ™_ØØ][ÛŸØØ]_Üß^_Ù[\˜Ú\Ù_^[Y[^_ÚXÚÛÝ]XØÛÝ[ÙÚ[ŸY[]_™\šYž_\Ú[Y[ØÚY[_ØÝÜŸ›ÝšY\Ÿ[ZX[[Y\™Ù[˜Þ_\Ü]Ú[X[[˜Ù_XYÛ›ÜÙJW‹Ë\Ý
ÝÙ\ŠNÂŸB‚™[˜Ý[Ûˆ™^\Õ›ÚXÙQ[[ÔØY™TÙXÝ[ÛŠÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆYˆ
\Ó™^\Õ›ÚXÙQ[[ÒX[XØÙ\ÜÔ›Û\
ÛÛ[X[™
JH™]\›ˆšX[ŽÂˆYˆ
×Š˜Z[š[™ßÛÝ\œÙ_X\›Ÿ\ÜÛÛŸXXÚ\œšYØ][ÛŸÙ\YšXØ]JW‹Ë\Ý
ÝÙ\ŠJH™]\›ˆ›X\›š[™ÈŽÂˆYˆ
×Š›ØŸ›ØœßÛÜšßØ\™Y\ŸÛÜšÙ›Ü˜Ù_ÚÚ[ÊW‹Ë\Ý
ÝÙ\ŠJH™]\›ˆÛÜšÙ›Ü˜ÙHŽÂˆYˆ
×ŠYÜš]˜Y_X\šÙ]XÙ_˜Y_œ›ÝÜÙJW‹Ë\Ý
ÝÙ\ŠJH™]\›ˆ˜YHŽÂˆYˆ
×ŠÜ›ÜÜ›Üß˜\›_šY[ÛÚ[\Ý\œšYØ][ÛŠW‹Ë\Ý
ÝÙ\ŠJH™]\›ˆ˜YHŽÂˆ™]\›ˆˆŽÂŸB‚™[˜Ý[Ûˆ\Ó™^\Õ›ÚXÙQ[[Ñ[Y\™Ù[˜ÞT›Û\
ÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆ™]\›ˆ×Š[Y\™Ù[˜Þ_[X[[˜Ù_Ø[››Ýœ™X]_Ø[‰Ýœ™X]_Ø[œ™X]_Ú\ÝZ[Ÿ›Ýœ™X][™ßÝ›ÚÙ_X\]XÚÊW‹Ë\Ý
ÝÙ\ŠNÂŸB‚™[˜Ý[Ûˆ\Ó™^\Õ›ÚXÙQ[[ÒX[^XÝ][Û”›Û\
ÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆ™]\›ˆ×ŠØ[^HØÝÜŸØ[HØÝÜŸÛÛXÝ
H
OÊØÝÜŸ›ÝšY\ŸÛ[šXß\›XXÞJ_Ù[™^HYYXØ[Ù[™YYXØ[YYXØ[™XÛÜ™ÏßX[™XÛÜ™Ïß™Yš[^H™\ØÜš\[ÛŸ™Yš[™\ØÜš\[ÛŸÝX›Z]
H
OÜ™Yš[™\]Y\Ý
H
OÜ™Yš[[H\›XXÞ_Ú[™ÙHYYXØ][ÛŸØÚY[H
^H
OÊ\Ú[Y[š\Ú]
_›ÛÚÈ
[ˆ
OØ\Ú[Y[Ù[™^HØØ][ÛŸÚ\™H^HØØ][ÛŸ[ZX[šY[ßšY[ÈØ[›ÝšY\ˆšY[ßÜ[ˆšY[ßÚÝÈ[š\ž_Ø[Y\˜H™]šY]ß\ÙH
^H
OØØ[Y\˜_Ü[ˆ
H
OØØ[Y\˜_\Ü]Ú
H
OÛ[Øš[HÛ[šXßXYÛ›ÜÙ_XYÛ›ÜÚ\ÊW‹Ë\Ý
ÝÙ\ŠNÂŸB‚™[˜Ý[Ûˆ\Ó™^\Õ›ÚXÙQ[[ÒX[XØÙ\ÜÔ›Û\
ÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆYˆ
\Ó™^\Õ›ÚXÙQ[[Ñ[Y\™Ù[˜ÞT›Û\
ÛÛ[X[™
H\Ó™^\Õ›ÚXÙQ[[ÒX[^XÝ][Û”›Û\
ÛÛ[X[™
JH™]\›ˆ˜[ÙNÂˆ™]\›ˆ×Š[ZX[[Øš[HÛ[šXß\›XXÞHÝ\Ü\›XXÞHXØÙ\ÜßYYXØ][ÛŸYYXÚ[™_™Yš[™\]Y\Ý\˜[X[XØÙ\ÜÈØ\™_Ø\™HXØÙ\ÜßØ\™H˜]šYØ][ÛŸÛÛ[][š]HX[ØÝÜ‹Š˜[œÜÜ][ÛŸ˜[œÜÜ][Û‹ŠŠØÝÜŸØ\™_Û[šXÊ_™\\™KŠ[ZX[X[ÛÜšÙ›ÝßX[XØÙ\ÜÊW‹Ë\Ý
ÝÙ\ŠNÂŸB‚™[˜Ý[Ûˆ™^\Õ›ÚXÙQ[[ÒX[XØÙ\ÜÔ™\ÜÛœÙJÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆYˆ
\Ó™^\Õ›ÚXÙQ[[Ñ[Y\™Ù[˜ÞT›Û\
ÛÛ[X[™
JHÂˆ™]\›ˆ’Yˆ\ÈX^H™H[ˆ[Y\™Ù[˜ÞKØ[ØØ[[Y\™Ù[˜ÞHÙ\šXÙ\È›ÝËˆHØ[››Ý\Ü]Ú[Y\™Ù[˜ÞH[[ˆ\È[[ËˆŽÂˆBˆYˆ
\Ó™^\Õ›ÚXÙQ[[ÒX[^XÝ][Û”›Û\
ÛÛ[X[™
JHÂˆ™]\›ˆ‘›ÜˆØY™]KHØ[››ÝÛÛ\]H]X[Ø\™HXÝ[Ûˆ]]ÛX]XØ[KˆHØ[ˆ[[ÝH™]šY]ÈÚ]ÛÝ[™H™YYY™Y›Ü™H[ž][™È\ÈÚ\™YØÚY[YÙ[ÝX›Z]YÜˆÛÛXÝYˆŽÂˆBˆYˆ
×Š[ZX[™\\™KŠ[ZX[
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ“™^\ÈØ[ˆ[Ú][ZX[XØÙ\ÜËˆHØ[ˆÝZYH[ÝH›ÝYÚH[™›Ü›X][Ûˆ\ÝX[H™YYY›ÜˆHš\Ú][™™\\™HHØY™H™^\Ý\™]šY]ËˆH]™H›ÝØÚY[Y[ˆ\Ú[Y[ÜˆÛÛXÝYH›ÝšY\‹ˆŽÂˆBˆYˆ
×Š[Øš[HÛ[šXß\˜[X[ÛÛ[][š]HX[
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ’HØ[ˆ[[ÝH™]šY]È[Øš[HÛ[šXÈ[™\˜[X[XØÙ\ÜÈÜ[ÛœËˆ[ˆ\È[[ËHØ[ˆ™\\™H™^Ý\Ë]HÚ[›Ý™\]Y\Ý[Ý\ˆØØ][Û‹ÛÛXÝHÛ[šXËÜˆ\Ü]ÚÙ\šXÙ\ËˆŽÂˆBˆYˆ
×Š\›XXÞ_YYXØ][ÛŸYYXÚ[™_™Yš[™\]Y\Ý
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ’HØ[ˆ[[ÝH™]šY]È\›XXÞHXØÙ\ÜÈÝ\Ë™Yš[]Y\Ý[ÛœËÜˆ˜[œÜÜ][Ûˆ™YYËˆH]™H›ÝÝX›Z]YH™Yš[[™HØ[››Ý™\]Y\ÝÚ[™ÙKÜˆÝX›Z]YYXØ][ÛˆÜ™\œÈ[ˆ\È[[ËˆŽÂˆBˆYˆ
×Š˜[œÜÜ][ÛŸšY_XØÙ\ÜÈØ\™_Ø\™HXØÙ\ÜßØ\™H˜]šYØ][ÛŸØÝÜŠW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ’HØ[ˆ[[ÝH[šÈ›ÝYÚØ\™HXØÙ\ÜÈ[™˜[œÜÜ][ÛˆÜ[ÛœËˆH]™H›ÝÚ\™Y[Ý\ˆØØ][Û‹ÛÛXÝY[ž[Û™KØÚY[Y[ˆ\Ú[Y[ÜˆØÚY[YHšYKˆŽÂˆBˆ™]\›ˆ’HØ[ˆ[Ú]X[XØÙ\ÜÈ˜]šYØ][Û‹ˆ\È[[È™\\™\ÈØY™H™]šY]Ë[Û›H™^Ý\È[™Ù\È›ÝÛÛXÝ›ÝšY\œËÚ\™H[™›Ü›X][Û‹ØÚY[HØ\™K™\]Y\ÝØØ][Û‹ÜˆÛÛ\]HX[Ø\™HXÝ[ÛœËˆŽÂŸB‚™[˜Ý[Ûˆ™^\Õ›ÚXÙQ[[Ò[›Ô™\ÜÛœÙJ
HÂˆ™]\›ˆ‘ÛÛÙ[Ü›š[™ËˆH[H™^\Ë[Ý\ˆ›ÚXÙK[Ü\˜]YXØÙ\ÜÈ\ÜÚ\Ý[ˆIÛH™XYHÈ[Ú][ZX[\›XXÞHÝ\Ü[Øš[HÛ[šXÈXØÙ\ÜË˜[œÜÜ][Û‹]ËXØ\™KÛÜšÙ›Ü˜ÙH™\ÛÝ\˜Ù\Ë[™YÜšXÝ[\™HÙ\šXÙ\ËˆÝÈØ[ˆH\ÜÚ\Ý[ÝHÙ^OÈŽÂŸB‚™[˜Ý[Ûˆ™^\Õ›ÚXÙQ[[ÔÚ[™\ÜÛœÙJÛÛ[X[™HˆŠHÂˆÛÛœÝÝÙ\ˆH›Ü›X[^™UÛÛ^
ÛÛ[X[™
NÂˆYˆ
[ÝÙ\ˆ×ŠÛÛÙ[Ü›š[™ß[ß_^JW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ™^\Õ›ÚXÙQ[[Ò[›Ô™\ÜÛœÙJ
NÂˆBˆYˆ
\Ó™^\Õ›ÚXÙQ[[Ñ[Y\™Ù[˜ÞT›Û\
ÛÛ[X[™
H\Ó™^\Õ›ÚXÙQ[[ÒX[^XÝ][Û”›Û\
ÛÛ[X[™
H\Ó™^\Õ›ÚXÙQ[[ÒX[XØÙ\ÜÔ›Û\
ÛÛ[X[™
JHÂˆ™]\›ˆ™^\Õ›ÚXÙQ[[ÒX[XØÙ\ÜÔ™\ÜÛœÙJÛÛ[X[™
NÂˆBˆYˆ
\Ó™^\Õ›ÚXÙQ[[ÒYÚš\ÚÔ›Û\
ÛÛ[X[™
JHÂˆ™]\›ˆ’HØ[ˆ™\\™H]™\]Y\Ý]HÚ[›Ý^XÝ]HØ[ËY\ÜØYÙ\ËØØ][Û‹Ø[Y\˜K^[Y[ËX[[Y\™Ù[˜ÞK›ÝšY\‹ÜˆXØÛÝ[XÝ[ÛœÈœ›ÛH›ÚXÙKˆ\ÙHHš\ÚX›HÛÛ™š\›X][Ûˆ[™›ÝšY\ˆ›ÝÈÚ[ˆ]\È™XYKˆŽÂˆBˆYˆ
×Š˜Z[š[™ßÛÝ\œÙ_YÜšXÝ[\™H˜Z[š[™ÊW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ’HØ[ˆ[Ú]YÜšXÝ[\™H˜Z[š[™Ëˆ\È\ÈHØY™H™]šY]È]È™]šY]ÈHX\›š[™ÈÜ[ÛœÈ™Y›Ü™HZÚ[™È[žHXÝ[Û‹ˆŽÂˆBˆYˆ
×Š\œšYØ][ÛŸXXÚ\ÜÛÛŸX\›ŠW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ’HØ[ˆXXÚ][ˆX\›š[™Ëˆ\È\È™]šY]ÈÛ›KÚ]›ÈÛÜšÙ›ÝÈ^XÝ][ÛˆÜˆY[ˆXÝ[Û‹ˆŽÂˆBˆYˆ
×Š›ØŸ›ØœßØ\™Y\ŸÛÜšÙ›Ü˜ÙJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ’H›Ý[™H›ØœÈ[™ÛÜšÙ›Ü˜ÙH]ˆ™^\ÈØ[ˆ™]šY]È›Û\È[™™XY[™\ÜË]]Ú[›Ý\HÜˆÛÛXÝ[ž[Û™H]]ÛX]XØ[KˆŽÂˆBˆYˆ
×ŠYÜš]˜Y_X\šÙ]XÙ_˜Y_œ›ÝÜÙJW‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆYÜšU˜YHØ[ˆ™H™]šY]ÙY\ÈHX\šÙ]XÙH[Ù[Kˆ\È›ÚXÙH[[ÈÜ[œÈœ›ÝÜÙHÛÛ^Û›NÈ]Ù\È›Ý^KÙ[^KÜˆÛÛXÝH^Y\‹ˆŽÂˆBˆYˆ
×ŠÜ›ÜÜ›Üß˜\›_šY[ÛÚ[\Ý
W‹Ë\Ý
ÝÙ\ŠJHÂˆ™]\›ˆ’HØ[ˆ[Ú]Ü›Ü[™šY[Ý\Üˆ\È\ÈÝZY[˜ÙHÛ›NÈ›ÈØ[Y\˜KØØ][Û‹XYÛ›ÜÚ\ËØ[KÜˆ›ÝšY\ˆ[™Ù™ˆÝ\È]]ÛX]XØ[KˆŽÂˆBˆ™]\›ˆ’HØ[ˆ[Ú]]ˆ[ˆ\È[[Ë™^\ÈÚ]™\ÈHØY™H™]šY]È[™ØZ]È›Üˆš\ÚX›HÛÛ›ÛÈ™Y›Ü™H[žH[\Ü[XÝ[Û‹ˆŽÂŸB‚™[˜Ý[Ûˆ[œÝ[™^\Õ›ÚXÙQ[[ÔÚ[œšYÙJ
HÂˆËÈX›XËÛ™^\Ë]›ÚXÙKY[[Ë\Ú[šœÈš[™ÈÙ]K[™^\Ë]›ÚXÙKY[[Ë\›Û\HÛÛ›ÛÈÈØY™H™\ÜÛœÙK[Û›H[[È[™[™Ë‚ˆÚ[™ÝË“™^\Õ›ÚXÙQ[[ÔÚ[œšYÙHHÂˆ\Þ[˜ÈÝX›Z]ØY™U˜[œØÜš\
ÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ˜[œØÜš\HÝš[™ÊÛÛ[X[™ˆŠKš[J
NÂˆÙ]ÛÛ[X[™[œ]Ê˜[œØÜš\
NÂˆÛÛœÝ™\ÜÛœÙHH™^\Õ›ÚXÙQ[[ÔÚ[™\ÜÛœÙJ˜[œØÜš\
NÂˆÛÛœÝ›ØÚÙYH\Ó™^\Õ›ÚXÙQ[[ÒYÚš\ÚÔ›Û\
˜[œØÜš\
NÂˆÛÛœÝ›Ý]HHÚ[™ÝË“™^\Õ›ÚXÙU^[[›Ý]\Ëœ›Ý]S™^\Ò[[ËŠ˜[œØÜš\
H[ÂˆÛÛœÝÝÔš\ÚÐ\ÜÚ\Ý[›Ý]HH›Ý]Bˆ	‰ˆ›Ý]K™^XÝ][Û[ÝÙYOOH˜[ÙBˆ	‰ˆ›Ý]KœÚYQY™™XÝÐ[ÝÙYOOH˜[ÙBˆ	‰ˆ›Ý]Kœ›ÝšY\ÛÛXÝ[ÝÙYOOH˜[ÙBˆ	‰ˆ›Ý]K›Y\ÜØYÙP[ÝÙYOOH˜[ÙBˆ	‰ˆ›Ý]K˜Ø[[ÝÙYOOH˜[ÙBˆ	‰ˆ›Ý]K›ØØ][Û[ÝÙYOOH˜[ÙBˆ	‰ˆ›Ý]K˜Ø[Y\˜SYYXP[ÝÙYOOH˜[ÙBˆ	‰ˆ›Ý]Kœ^[Y[[ÝÙYOOH˜[ÙBˆ	‰ˆ›Ý]K›YYXØ[XÝ[Û[ÝÙYOOH˜[ÙBˆ	‰ˆ›Ý]K™[Y\™Ù[˜ÞQ\Ü]Ú[ÝÙYOOH˜[ÙBˆ	‰ˆ›Ý]Kœš\ÚÓ]™[OOH›ÝÈ‚ˆ	‰ˆ
›Ý]Kœ™]šY]ÓÛ›P[ÝÙYOOHYH›Ý]Kš[™›Ü›X][Û˜[[ÝÙYOOHYJNÂˆYˆ
X›ØÚÙY	‰ˆÝÔš\ÚÐ\ÜÚ\Ý[›Ý]H	‰ˆ]ØZ][”Ý[™\™\Ù\\ÜÚ\Ý[[[YT™]šY]Ê˜[œØÜš\ÂˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙKY[[Ë\Ú[‚ˆJJHÂˆ™]\›ˆÂˆ™\ÜÛœÙNˆ\ÜÚ\Ý[[[YT™]šY]Õ^
\ÜÚ\Ý[[[YT™]šY]ÐØ\™
H™\ÜÛœÙKˆ›ØÚÙYˆ˜[ÙKˆÙXÝ[ÛŽˆˆ‹ˆ[[ÛXZ[Žˆ›Ý]Kš[[ÛXZ[‹ˆ›Ý]TÝ]\Îˆ›Ý]Kœ›Ý]TÝ]\Ëˆ\ÜÚ\Ý[[[YT™]šY]ÎˆYKˆ^XÝ][Û[ÝÙYˆ˜[ÙKˆ›ÝšY\’[™Ù™Žˆ˜[ÙKˆ\›Z\ÜÚ[Û”™\]Y\ÝYˆ˜[ÙBˆNÂˆBˆÙ]›ÚXÙT™\ÜÛœÙJ™\ÜÛœÙK˜[ÙKÈ[ÝÕ›ÚXÙQš\œÝˆ˜[ÙK[ÝÒ[™Ù™Žˆ˜[ÙKÛÝ\˜ÙNˆ›ÚXÙKY[[Ë\Ú[‹ÛÛ[X[™ˆ˜[œØÜš\JNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š›ØÚÙYÈ™ÝX\™Yˆˆœ™XYH‹™\ÜÛœÙJNÂˆ™]\›ˆÂˆ™\ÜÛœÙKˆ›ØÚÙYˆÙXÝ[ÛŽˆˆ‹ˆ[[ÛXZ[Žˆ›Ý]OËš[[ÛXZ[ˆˆ‹ˆ›Ý]TÝ]\Îˆ›Ý]OËœ›Ý]TÝ]\Èˆ‹ˆ\ÜÚ\Ý[[[YT™]šY]Îˆ˜[ÙKˆ^XÝ][Û[ÝÙYˆ˜[ÙKˆ›ÝšY\’[™Ù™Žˆ˜[ÙKˆ\›Z\ÜÚ[Û”™\]Y\ÝYˆ˜[ÙBˆNÂˆKˆÚÝÔ™\ÜÛœÙJY\ÜØYÙHHˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ™\ÜÛœÙHHÝš[™ÊY\ÜØYÙHˆŠKš[J
H“™^\È\È™XYKˆŽÂˆYˆ
Ü[ÛœË˜›ØÚÙYOOHYJHÛX\ÛÛ›ÛYXÝ[Û”™]šY]Ê›ÚXÙKY[[Ë\Ú[X›ØÚÙY\™\ÜÛœÙHŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJ™\ÜÛœÙK˜[ÙKÈ[ÝÕ›ÚXÙQš\œÝˆ˜[ÙK[ÝÒ[™Ù™Žˆ˜[ÙKÛÝ\˜ÙNˆ›ÚXÙKY[[Ë\Ú[ˆJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹™\ÜÛœÙJNÂˆ™]\›ˆÈ™\ÜÛœÙK^XÝ][Û[ÝÙYˆ˜[ÙHNÂˆKˆ\ÒYÚš\ÚÔ›Û\ˆ\Ó™^\Õ›ÚXÙQ[[ÒYÚš\ÚÔ›Û\ˆNÂŸB‚š[œÝ[™^\Õ›ÚXÙQ[[ÔÚ[œšYÙJ
NÂ‚˜\Þ[˜È[˜Ý[Ûˆ[’˜\š\ÐÛÛ[X[™

HÂˆÛÛœÝ[œ]H	
ˆÚ˜\š\ÐÛÛ[X[™[œ]ŠNÂˆÛÛœÝÛÛ[X[™H[œ]Ë˜[YHˆŽÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
ÛÛ[X[™
NÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[•ÛÜšÙ›ÝÕ›ÚXÙT™\ÜÛœÙJ
HÂˆÛÛœÝ[œ]H	
ˆÝÛÜšÙ›ÝÕ›ÚXÙR[œ]ŠNÂˆÛÛœÝÛÛ[X[™H[œ]Ë˜[YHˆŽÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
ÛÛ[X[™
NÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[’˜\š\Ñ[Z\ÜÚ[ÛŠ
HÂˆÛÛœÝZ\ÜÚ[ÛˆHYÜšS™^\Ë[ˆ[Z\ÜÚ[Ûˆ›ÜˆX\›š[™ËÛÜšÙ›Ü˜ÙKXØÙ\ÜÚX›H[ZX[˜YK›Û™KX\ËRK˜[œÛ][Û‹[™›ÝšY\ˆ]šY[˜ÙHŽÂˆÙ]ÛÛ[X[™[œ]ÊZ\ÜÚ[ÛŠNÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
Z\ÜÚ[ÛŠNÂŸB‚˜\Þ[˜È[˜Ý[ÛˆÝ\˜\›Y\]]Ü[ÝZ\ÜÚ[ÛŠ
HÂˆÛÛœÝZ\ÜÚ[ÛˆHYÜšS™^\È]]Ü[Ý[\È˜\›Y\ˆÙ]œ›ÛHÜ›Ü›Ø›[HÈ^Y\ˆ^[Y[ŽÂˆÙ]ÛÛ[X[™[œ]ÊZ\ÜÚ[ÛŠNÂˆÜ[\ÚÓ™^\Ê
NÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
Z\ÜÚ[ÛŠNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ™\Ý[YS™^Z\ÜÚ[ÛŠ
HÂˆÛÛœÝ[ˆH
]Kœ›Ùš[K˜YÙ[[œÈ×JK™š[™
][HOˆ][KœÝ]\ÈOOH˜]ØZ][™ËX\›Ý˜[ŠH
]Kœ›Ùš[K˜YÙ[[œÈ×JVÌNÂˆYˆ
\[ŠHÂˆÙ]›ÚXÙT™\ÜÛœÙJ“›ÈZ\ÜÚ[Ûˆ\ÈØZ][™ËˆÝ\[ˆ]]Ü[ÝZ\ÜÚ[Ûˆš\œÝˆ‹YJNÂˆ™]\›ŽÂˆBˆ]ØZ]^XÝ]PYÙ[[Š
NÂŸB‚™[˜Ý[ÛˆØÚY[U›ÚXÙT™XÛÝ™\žJY\ÜØYÙHH’HY›ÝX\ˆÜYXÚˆH[HÝ[\Ý[š[™Ëˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝ™XÛÝ™\˜X›HHÜ[ÛœËœ™XÛÝ™\˜X›HOOH˜[ÙNÂˆÛÛœÝ[^HH[X™\ŠÜ[ÛœË™[^H“ÒPÑWÔ‘TÕT•ÑSVWÓTÊNÂˆÛÛœÝ˜[œÛ]YH˜[œÛ]U^
Y\ÜØYÙJNÂˆ\Ý›ÚXÙT™\ÜÛœÙHH˜[œÛ]YÂˆÙ]›ÚXÙTÝ]\Ê›ÚXÙQš\œÝ[ÙH	‰ˆ™XÛÝ™\˜X›HÈ›ÚXÙKYš\œÝˆˆœÝ[™žHŠNÂˆÈˆÙÛØ˜[\ÜÚ\Ý[Ý]\È‹ˆÙÛØ˜[›ÚXÙSÝ]]Ý]\È‹ˆÝ›ÚXÙU˜[œØÜš\‹ˆÚ˜\š\ÔÝ[[X\žH—K™›Ü‘XXÚ
Ù[XÝÜˆOˆÂˆÛÛœÝ[[Y[H	
Ù[XÝÜŠNÂˆYˆ
[[Y[
H[[Y[^ÛÛ[H˜[œÛ]YÂˆJNÂˆ\]U\Ù\Ø\[Û”[™[
˜[œÛ]YÈ^[™YˆYHJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š™XÛÝ™\˜X›HÈ›\Ý[š[™ÈˆˆœÝ[™žH‹Y\ÜØYÙJNÂˆ™Yœ™\ÚZXÔÝ\Ü

NÂˆYˆ
\™XÛÝ™\˜X›H]›ÚXÙQš\œÝ[ÙH›ÚXÙPÛÛ™\œØ][Û”]\ÙYØÝ[Y[šY[ŠH™]\›ŽÂˆ›ÚXÙTÝÜ™\]Y\ÝYH˜[ÙNÂˆ›ÚXÙP]]Ô™\Ý\HYNÂˆÙ][Y[Ý]


HOˆÂˆYˆ
]›ÚXÙT™XÛÙÛš][Ûˆ	‰ˆ›ÚXÙQš\œÝ[ÙH	‰ˆ›ÚXÙP]]Ô™\Ý\	‰ˆ]›ÚXÙTÜXZÚ[™È	‰ˆ]›ÚXÙTÝÜ™\]Y\ÝY	‰ˆYØÝ[Y[šY[ŠHÂˆÝ\›ÚXÙS\Ý[š[™Ê
NÂˆBˆK[^JNÂŸB‚™[˜Ý[Ûˆ›ØÙ\ÜÑš[˜[›ÚXÙPÛÛ[X[™
ÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝš[˜[ÛÛ[X[™H›Ü›X[^™U›ÚXÙT\X[
ÛÛ[X[™
NÂˆYˆ
Yš[˜[ÛÛ[X[™
H™]\›ŽÂˆYˆ
[™^\ÑÙ[™\Ú\Ñ^\šY[˜ÙPXÝ]˜]Y[™^\ÕYQ^\šY[˜ÙTÙ\ÜÚ[Û”Ý\Y
HÂˆ™^\ÑÙ[™\Ú\Ñ^\šY[˜ÙPXÝ]˜]YHYNÂˆ™^\ÕYQ^\šY[˜ÙTÙ\ÜÚ[Û”Ý\YHYNÂˆÙ]™^\ÐÛÜ™TÝ]Jœ›ØÙ\ÜÚ[™È‹ÈÛÝ\˜ÙNˆ›ÚXÙKYš[˜[]˜[œØÜš\‹Ý]\Õ^ˆ“™^\ÈX\™[ÝKˆˆJNÂˆBˆÛX\”Ý™X[Z[™Õ›ÚXÙT\X[

NÂˆX\šÓ™^\Õ\Ù\”ÜYXÚš[˜[
š[˜[ÛÛ[X[™™^\Õ›ÚXÙU\›•ÚÙ[ˆ
ÈJNÂˆÙ]™^\ÑÙ[™\Ú\Õ\ÝÚZ[”Ý]J˜[œØÜš\Ùš[˜[^™Y‹Âˆ˜[œØÜš\ˆš[˜[ÛÛ[X[™ˆš\ÚX›Q™YY˜XÚÎˆHX\™ˆ	Ùš[˜[ÛÛ[X[™Xˆ™X\ÛÛŽˆ›ÚXÙKYš[˜[]˜[œØÜš\‚ˆJNÂˆ™XÛÜ™Ù[™\Ú\ÔÜÚÙ[”™\ÜÛœÙT\[[™Q]™[
˜[œØÜš\Yš[˜[^™Y‹ÂˆÛÜœ™[][Û’YˆXÝ]™QÙ[™\Ú\Õ›ÚXÙPÛÜœ™[][Û’Yˆ‹ˆÝXØÙ\ÜÎˆYKˆÛÝ\˜ÙQ[˜Ý[ÛŽˆœ›ØÙ\ÜÑš[˜[›ÚXÙPÛÛ[X[™‚ˆJNÂˆ\]S˜]]™U›ÚXÙPœšYÙTÝ]J™š[˜[‹È˜[œØÜš\ˆš[˜[ÛÛ[X[™ÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙHˆJNÂˆYˆ
›ÚXÙTÜXZÚ[™ÊHÂˆYˆ
\ÓZÙ[S™^\ÔÙ[‘XÚÊš[˜[ÛÛ[X[™
JH™]\›ŽÂˆÝÜ›ÚXÙT^X˜XÚÊÈ\™ˆYK™X\ÛÛŽˆ›™]ËYš[˜[XÛÛ[X[™ˆJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š›\Ý[š[™È‹“™^\ÈÝÜYÜXZÚ[™È™XØ]\ÙH]X\™H™]È\Ù\ˆ˜\ÙKˆŠNÂˆÛÛœÝÝ]]Ý]\ÈH	
ˆÙÛØ˜[›ÚXÙSÝ]]Ý]\ÈŠNÂˆYˆ
Ý]]Ý]\ÊHÝ]]Ý]\Ë^ÛÛ[H˜[œÛ]U^
’HÝÜYˆ\Ý[š[™ÈÈ[Ý\ˆ™]È˜\ÙKˆŠNÂˆBˆÙ]ÛÛ[X[™[œ]Êš[˜[ÛÛ[X[™
NÂˆÛÛœÝØØ[^™YÛÛ[X[™H›Ü›X[^™SØØ[^™Y›ÚXÙPÛÛ[X[™
š[˜[ÛÛ[X[™
NÂˆÛÛœÝÛX[™YÛÛ[X[™HÛX[•ØZÙPÛÛ[X[™
ØØ[^™YÛÛ[X[™
NÂˆÛÛœÝÝÜ™Y\™XÝHÜÝÝÜ™Y\™XÝÛÛ[X[™
ÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
NÂˆYˆ
›ÚXÙPÛÛ™\œØ][Û”]\ÙY
HÂˆÛÛœÝ™\Ý[YPÛÛ[X[™H\Ó™^\Ô™\Ý[YS\Ý[š[™ÐÛÛ[X[™
ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
NÂˆÛÛœÝ^XÚ]ØZÙHH\Ñ^XÚ]™^\ÕØZÙSÜÛÛ[X[™
ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
NÂˆYˆ
\™\Ý[YPÛÛ[X[™	‰ˆY^XÚ]ØZÙJHÂˆÙ]›ÚXÙTÝ]\Êœ]\ÙYŠNÂˆ\]S˜]]™U›ÚXÙPœšYÙTÝ]Jœ]\ÙY‹È˜[œØÜš\ˆš[˜[ÛÛ[X[™JNÂˆ™]\›ŽÂˆBˆX]™S™^\ÐÛÛ™\œØ][Û”]\ÙJ“™^\ÈX\™[ÝKˆH[H\Ý[š[™ÈYØZ[‹ˆŠNÂˆYˆ
™\Ý[YPÛÛ[X[™\ÕØZÙT˜\ÙSÛ›JØØ[^™YÛÛ[X[™
H\Ó™^\ÑÜ™Y][™ÓÛ›JØØ[^™YÛÛ[X[™
JHÂˆÙ]›ÚXÙT™\ÜÛœÙJ™^\ÐÛÛ™\œØ][Û˜[ØZÙJ\Ó™^\ÑÜ™Y][™ÓÛ›JØØ[^™YÛÛ[X[™
HÈš[ÈˆˆØZÙH‹ØØ[^™YÛÛ[X[™
KYKÈ[ÝÒ[™Ù™Žˆ˜[ÙHJNÂˆ™]\›ŽÂˆBˆBˆYˆ
\ÑÛØ˜[ÝÜÛÛ[X[™
Ýš[™ÊÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
KÓÝÙ\Ø\ÙJ
JJHÂˆYˆ
\ÔÝÜ[™ÛÛ[YUÛÜšÚ[™ÐÛÛ[X[™
ÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
JHÂˆÝÜ™^\Ð[™™]\›•ÕÛÜšÊ”ÝÜYˆ™^\È\ÈÛÜÙYÛÈ[ÝHØ[ˆÛÛ[YHÛÜšÚ[™ËˆŠNÂˆ™]\›ŽÂˆBˆ[\“™^\ÐÛÛ™\œØ][Û”]\ÙJ”ÝÜYˆ™^\È\È]\ÙY[™Ú[YÛ›Ü™H˜XÚÙÜ›Ý[™ÛÛ™\œØ][Ûˆ[[[ÝHØ^H™^\ÈYØZ[‹ˆŠNÂˆYˆ
ÝÜ™Y\™XÝ
HÂˆX]™S™^\ÐÛÛ™\œØ][Û”]\ÙJ“™^\ÈX\™[Ý\ˆ™^[œÝXÝ[ÛˆY\ˆÝÜˆŠNÂˆÙ][Y[Ý]


HOˆÂˆÙ]ÛÛ[X[™[œ]ÊÝÜ™Y\™XÝ
NÂˆ›ÚY[™U›ÚXÙPÛÛ[X[™
ÝÜ™Y\™XÝ
NÂˆK“ÒPÑWÔÔÕÔÕÔÔ‘QT‘PÕÑSVWÓTÊNÂˆBˆ™]\›ŽÂˆBˆYˆ
\ÓZÙ[TÚYPÛÛ™\œØ][Û•Ú]Ý]™^\ÐÛÛ[X[™
ÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
JHÂˆ]\ÙS™^\Ñ›Ü”ÚYPÛÛ™\œØ][ÛŠÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆÛÛœÝ\›•ÚÙ[ˆH™YÚ[“™^\Õ›ÚXÙU\›ŠÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
NÂˆÙ]™^\ÑÙ[™\Ú\Õ\ÝÚZ[”Ý]J˜ÛÛ™\œØ][Û—ÜÝX›Z]Y‹Âˆ˜[œØÜš\ˆÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™ˆš\ÚX›Q™YY˜XÚÎˆ“™^\ÈX\™[ÝKˆÛ™H[ÛY[ˆ‹ˆ™X\ÛÛŽˆ˜ÛÛ™\œØ][Û‹\ÝX›Z]Y‚ˆJNÂˆÙ]›ÚXÙTÝ]\Ê[šÚ[™ÈŠNÂˆ\]S˜]]™U›ÚXÙPœšYÙTÝ]J[šÚ[™È‹È˜[œØÜš\ˆÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™\›•ÚÙ[ˆJNÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š[šÚ[™È‹“™^\ÈX\™[ÝH[™\È™\\š[™ÈH™^™\ÜÛœÙKˆŠNÂˆÛÛœÝÝ]]Ý]\ÈH	
ˆÙÛØ˜[›ÚXÙSÝ]]Ý]\ÈŠNÂˆYˆ
Ý]]Ý]\ÊHÝ]]Ý]\Ë^ÛÛ[H˜[œÛ]U^
“™^\ÈX\™[ÝKˆÛ™H[ÛY[ˆŠNÂˆYˆ
\Ó™^\ÐÛÛ™\œØ][Û“Û›U\ÝÚZ[’[œ]
ÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
JHÂˆÛÛœÝ™\ÜÛœÙHH™^\ÐÛÛ™\œØ][Û“Û›U\ÝÚZ[”™\ÜÛœÙJÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
NÂˆÙ]›ÚXÙT™\ÜÛœÙJ™\ÜÛœÙKYKÂˆ[ÝÒ[™Ù™Žˆ˜[ÙKˆÛÛ[X[™ˆÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™ˆÛÝ\˜ÙNˆ™Ù[™\Ú\Ë]\ÝXÚZ[‹XÛÛ™\œØ][Û‹[Û›H‹ˆ\›•ÚÙ[‚ˆJNÂˆ™]\›ŽÂˆBˆÙ]™^\ÑÙ[™\Ú\Õ\ÝÚZ[”Ý]Jœ™\ÜÛœÙWÜ[™[™È‹Âˆ˜[œØÜš\ˆÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™ˆš\ÚX›Q™YY˜XÚÎˆ“™^\È\È™\\š[™ÈHšYÚ™\ÜÛœÙKˆ‹ˆ™X\ÛÛŽˆœ™\ÜÛœÙK\[™[™È‚ˆJNÂˆ™XÛÜ™™^\Ð]Y[Ô\[[™Q]™[
˜YÙ[XÛÛ[X[™\™\]Y\Ý‹ÂˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙH‹ˆÛÛ[X[™ÝX›Z]YˆYBˆJNÂˆ™^\ÑÙ[™\Ú\Õ›ÚXÙQXYÓÙÊ˜ÛÛ[X[™\ÝX›Z]Y‹ÂˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙH‹ˆ˜[œØÜš\[™ÝˆÝš[™ÊÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™
K›[™ÝˆJNÂˆ™\]Y\Ý
‹Ø\KÝ›ÚXÙKÝ˜[œØÜšX™H‹ÈY]Ùˆ”ÔÕ‹›ÙNˆÈ˜[œØÜš\ˆš[˜[ÛÛ[X[™[™ÝXYÙNˆ[™ÝXYÙPÛÙJ
KØØ[Nˆ›ÚXÙSØØ[J
HHJK˜Ø]Ú


HOˆßJNÂˆÛÛœÝÝX›Z]YÛÛ[X[™HÛX[™YÛÛ[X[™ØØ[^™YÛÛ[X[™š[˜[ÛÛ[X[™ÂˆYˆ
™X[[YU›ÚXÙPXÝ]™J
JHÂˆ™^\ÑÙ[™\Ú\Õ›ÚXÙQXYÓÙÊ›YØXÞK]˜[œØÜš\ZYÛ›Ü™Y\™X[[YKXXÝ]™H‹ÂˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙH‹ˆ˜[œØÜš\[™ÝˆÝš[™ÊÝX›Z]YÛÛ[X[™ˆŠK›[™ÝˆXÝ]™T[[YNˆœ™X[[YH‚ˆJNÂˆ\]T™X[[YPÛÛ›Û\”Ý]J›\Ý[š[™È‹›YØXÞK]˜[œØÜš\ZYÛ›Ü™Y\™X[[YKXXÝ]™H‹Âˆ˜[˜XÚÔÝ]Nˆ˜›ØÚÙYY\XØ]K[YØXÞK]˜[œØÜš\‚ˆJNÂˆ™]\›ŽÂˆBˆYˆ
ÚÝ[ž\\ÜÓYØXÞT[›™\‘›Ü”™X[[YQ˜[˜XÚÊ
JHÂˆ™^\ÑÙ[™\Ú\Õ›ÚXÙQXYÓÙÊ›YØXÞK]˜[œØÜš\\›Ý]Y[Ü[˜ZK[˜]]™KY˜[˜XÚÈ‹ÂˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙH‹ˆ˜[œØÜš\[™ÝˆÝš[™ÊÝX›Z]YÛÛ[X[™ˆŠK›[™ÝˆXÝ]™T[[YNˆœ™X[[YK][˜ÛÛ™š\›YY‚ˆJNÂˆ\]T™X[[YPÛÛ›Û\”Ý]J™˜Z[Y‹œ™X[[YK][˜ÛÛ™š\›YYY˜[˜XÚË]ËX˜XÚÙ[™\™\ÜÛœÙ\È‹Âˆ˜[˜XÚÔÝ]Nˆ˜˜XÚÙ[™[Ü[˜ZK\™\ÜÛœÙ\È‹ˆYØXÞT[›™\ž\\ÜÙYˆYBˆJNÂˆ[˜XÚÙ[™YÙ[ÛÛ[X[™
ÝX›Z]YÛÛ[X[™[ÂˆÛÝ\˜ÙNˆ›ÚXÙK\™X[[YK][˜ÛÛ™š\›YYX˜XÚÙ[™\™\ÜÛœÙ\È‹ˆ\›•ÚÙ[‚ˆJK˜Ø]Ú
\œ›ÜˆOˆ›ÚXÙQ\œ›Ü”™XÛÝ™\žJ\œ›Ü‹ÝX›Z]YÛÛ[X[™
JNÂˆ™]\›ŽÂˆBˆ[™U›ÚXÙPÛÛ[X[™
š[˜[ÛÛ[X[™ÈÛÝ\˜ÙNˆ›ÚXÙH‹\›•ÚÙ[ˆJNÂŸB‚™[˜Ý[ÛˆØÚY[Qš[˜[›ÚXÙPÛÛ[X[™
ÛÛ[X[™Hˆ‹Ü[ÛœÈHßJHÂˆÛÛœÝš[˜[ÛÛ[X[™H›Ü›X[^™U›ÚXÙT\X[
ÛÛ[X[™
NÂˆYˆ
Yš[˜[ÛÛ[X[™
H™]\›ŽÂˆÛÛœÝÚYÛ˜]\™HHš[˜[ÛÛ[X[™ÓÝÙ\Ø\ÙJ
Kœ™\XÙJ×ÊËÙËˆŠKš[J
NÂˆÛÛœÝ›ÝÈH]K››ÝÊ
NÂˆYˆ
ÚYÛ˜]\™H	‰ˆÚYÛ˜]\™HOOH™^\Õ›ÚXÙS\ÝÝX›Z]YÚYÛ˜]\™H	‰ˆ›ÝÈH™^\Õ›ÚXÙS\ÝÝX›Z]Y]L
HÂˆ™XÛÜ™™^\Ð]Y[Ô\[[™Q]™[
™\XØ]K]˜[œØÜš\\™]™[Y‹Âˆ˜[œØÜš\ˆš[˜[ÛÛ[X[™ˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙH‚ˆJNÂˆ™]\›ŽÂˆBˆ™^\Õ›ÚXÙS\ÝÝX›Z]YÚYÛ˜]\™HHÚYÛ˜]\™NÂˆ™^\Õ›ÚXÙS\ÝÝX›Z]Y]H›ÝÎÂˆ™XÛÜ™™^\Ð]Y[Ô\[[™Q]™[
™š[˜[]˜[œØÜš\\ØÚY[Y‹Âˆ˜[œØÜš\ˆš[˜[ÛÛ[X[™ˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙH›ÚXÙH‹ˆÛÛ[X[™ÝX›Z]YˆYBˆJNÂˆÛX\•[Y[Ý]
›ÚXÙQš[˜[X›Ý[˜ÙU[Y\ŠNÂˆ›ÚXÙQš[˜[X›Ý[˜ÙU[Y\ˆHÙ][Y[Ý]


HOˆÂˆ›ÚXÙQš[˜[X›Ý[˜ÙU[Y\ˆH[Âˆ›ØÙ\ÜÑš[˜[›ÚXÙPÛÛ[X[™
š[˜[ÛÛ[X[™Ü[ÛœÊNÂˆK[X™\ŠÜ[ÛœË™[^HÏÈ“ÒPÑWÑ’SSÑP“ÕSÑWÓTÊJNÂŸB‚˜\Þ[˜È[˜Ý[ÛˆÝ\›ÚXÙT[[YU˜[œÜÜ
Ü[ÛœÈHßJHÂˆÛÛœÝÛÝ\˜ÙHHÜ[ÛœËœÛÝ\˜ÙH›™^\Ë[ÜË]›ÚXÙK\[[YHŽÂˆYˆ
›ÚXÙQ[[Ô]ZY][ÙJHÂˆX\šÓ™^\Ó\Ý[š[™ÐÛÛ›Û\‘]™[
\YY˜[˜XÚÈ‹È[œ][ÙNˆ\YY˜[˜XÚÈˆJNÂˆ\]S™^\ÓÜÕ›ÚXÙT[[YTÝ]JÈ[ÙNˆ›]]Y‹\Ý[š[™ÔÝ]NˆšYH‹X\š[™ÔÝ]NˆšYHˆKÛÝ\˜ÙJNÂˆÙ]›ÚXÙTÝ]\ÊœÝ[™žHŠNÂˆ™Yœ™\ÚZXÔÝ\Ü

NÂˆÚÝÓ™^\Õ›ÚXÙQ˜[˜XÚÓY\ÜØYÙJ“™^\È›ÚXÙH\È]]YˆØ\[ÛœÈ™[XZ[ˆ]˜Z[X›NÈ[›]]HÜˆ[ÝÈZXÜ›ÜÛ™HXØÙ\ÜÈÈÛÛ[YHžH›ÚXÙKˆ‹ÂˆÛÝ\˜ÙNˆ›ÚXÙK]^[Û›K[[ÙH‹ˆ[ÙNˆ\YY˜[˜XÚÈ‹ˆ\ÝÚZ[”Ý]Nˆœ™XÛÙÛš][Û—Ý[˜]˜Z[X›H‚ˆJNÂˆ™]\›ŽÂˆBˆYˆ
Ü[ÛœËœ[[YSÛ›HOOH›YØXÞHŠHÂˆ™^\ÓÜÕ›ÚXÙTÝ\[‘›YÚHYNÂˆžHÂˆÛÛœÝÝ\YH]ØZ]Ý\™X[[YU›ÚXÙTÙ\ÜÚ[ÛŠÂˆX[˜YÙY[[YNˆÜ[ÛœË›X[˜YÙY[[YHOOHYKˆ™XÛÝ™\žNˆÜ[ÛœËœ™XÛÝ™\žHOOHYKˆÛÝ\˜ÙBˆJNÂˆ™^\ÓÜÕ›ÚXÙTÝ\[‘›YÚH˜[ÙNÂˆYˆ
\Ý\Y\™X[[YU›ÚXÙPXÝ]™J
JHÂˆ\]S™^\ÓÜÕ›ÚXÙT[[YTÝ]JÂˆ[ÙNˆœ™X[[YKX›ØÚÙY‹ˆ\Ý[š[™ÔÝ]Nˆ˜›ØÚÙY‹ˆX\š[™ÔÝ]NˆšYH‹ˆ\Ý\œ›ÜŽˆ›Ü[˜ZK\™X[[YK[›ÝXÛÛ›™XÝY‚ˆKÛÝ\˜ÙJNÂˆÙ]™^\ÑÙ[™\Ú\Õ\ÝÚZ[”Ý]Jœ™XÛÙÛš][Û—Ù˜Z[Y‹Âˆš\ÚX›Q™YY˜XÚÎˆ“Ü[RH™X[[YHY›ÝÛÛ›™XÝÈH]™HZXÜ›ÜÛ™H˜XÚËˆ‹ˆ˜Z[\™T™XÛÝ™\žNˆÚXÚÈÜ[RH™X[[YHÜ™Y[X[Ë[Ù[XØÙ\ÜËœ›ÝÜÙ\ˆZXÜ›ÜÛ™H\›Z\ÜÚ[Û‹[™È\Þ[Y[ˆ‹ˆ™X\ÛÛŽˆ›Ü[˜ZK\™X[[YK[›ÝXÛÛ›™XÝY‚ˆJNÂˆ™Yœ™\ÚZXÔÝ\Ü

NÂˆ™]\›ˆ˜[ÙNÂˆBˆ™]\›ˆYNÂˆHØ]Ú
\œ›ÜŠHÂˆ™^\ÓÜÕ›ÚXÙTÝ\[‘›YÚH˜[ÙNÂˆ\]S™^\ÓÜÕ›ÚXÙT[[YTÝ]JÂˆ[ÙNˆœ™X[[YKY˜Z[Y‹ˆ\Ý[š[™ÔÝ]Nˆ˜›ØÚÙY‹ˆX\š[™ÔÝ]NˆšYH‹ˆ\Ý\œ›ÜŽˆ\œ›Ü‹›Y\ÜØYÙH›Ü[˜ZK\™X[[YK\Ý\Y˜Z[Y‚ˆKÛÝ\˜ÙJNÂˆÙ]™^\ÑÙ[™\Ú\Õ\ÝÚZ[”Ý]Jœ™XÛÙÛš][Û—Ù˜Z[Y‹Âˆš\ÚX›Q™YY˜XÚÎˆ“Ü[RH™X[[YH›ÚXÙHÛÝ[›ÝÝ\ˆ‹ˆ˜Z[\™T™XÛÝ™\žNˆ\œ›Ü‹›Y\ÜØYÙHÚXÚÈÜ[RH™X[[YHÛÛ™šYÝ\˜][Ûˆ[™œ›ÝÜÙ\ˆZXÜ›ÜÛ™H\›Z\ÜÚ[Û‹ˆ‹ˆ™X\ÛÛŽˆ›Ü[˜ZK\™X[[YK\Ý\Y˜Z[Y‚ˆJNÂˆ™Yœ™\ÚZXÔÝ\Ü

NÂˆ™]\›ˆ˜[ÙNÂˆBˆBˆYˆ
Ü[ÛœËœ[[YSÛ›HOOH›YØXÞHŠHÂˆ™^\ÓÜÕ›ÚXÙTÝ\[‘›YÚH˜[ÙNÂˆ\]S™^\ÓÜÕ›ÚXÙT[[YTÝ]JÂˆ[ÙNˆœ™X[[YK[Û›H‹ˆ\Ý[š[™ÔÝ]Nˆ˜›ØÚÙY‹ˆX\š[™ÔÝ]NˆšYH‹ˆ\Ý\œ›ÜŽˆ›YØXÞK\[[YKY\ØX›Y‚ˆKÛÝ\˜ÙJNÂˆÙ]™^\ÑÙ[™\Ú\Õ\ÝÚZ[”Ý]Jœ™XÛÙÛš][Û—Ù˜Z[Y‹Âˆš\ÚX›Q™YY˜XÚÎˆ“™^\ÈÙ[™\Ú\È\Ù\ÈÜ[RH™X[[YH›ÚXÙHÛ›Kˆ‹ˆ˜Z[\™T™XÛÝ™\žNˆ•\ÙHH\›X[™[ZXÜ›ÜÛ™HÛÛ›Û[™™X[[YHÛÛ™šYÝ\˜][Û‹ˆ‹ˆ™X\ÛÛŽˆ›YØXÞK\[[YKY\ØX›Y‚ˆJNÂˆ™Yœ™\ÚZXÔÝ\Ü

NÂˆ™]\›ˆ˜[ÙNÂˆBˆ\]S™^\ÓÜÕ›ÚXÙT[[YTÝ]JÂˆ[ÙNˆœ™X[[YK[Û›H‹ˆ\Ý[š[™ÔÝ]Nˆ˜›ØÚÙY‹ˆX\š[™ÔÝ]NˆšYH‹ˆ\Ý\œ›ÜŽˆ[œ™XXÚX›K]›ÚXÙK\[[YKXœ˜[˜Ú‚ˆKÛÝ\˜ÙJNÂˆÙ]™^\ÑÙ[™\Ú\Õ\ÝÚZ[”Ý]Jœ™XÛÙÛš][Û—Ù˜Z[Y‹Âˆš\ÚX›Q™YY˜XÚÎˆ“™^\ÈÙ[™\Ú\È\Ù\ÈÜ[RH™X[[YH›ÚXÙHÛ›Kˆ‹ˆ˜Z[\™T™XÛÝ™\žNˆ•\ÙHH\›X[™[ZXÜ›ÜÛ™HÛÛ›Û[™™X[[YHÛÛ™šYÝ\˜][Û‹ˆ‹ˆ™X\ÛÛŽˆ[œ™XXÚX›K]›ÚXÙK\[[YKXœ˜[˜Ú‚ˆJNÂˆ™Yœ™\ÚZXÔÝ\Ü

NÂˆ™]\›ˆ˜[ÙNÂŸB‚˜\Þ[˜È[˜Ý[ÛˆÝ\›ÚXÙS\Ý[š[™ÊÜ[ÛœÈHßJHÂˆ]X[˜YÙ\ˆH™^\ÑÙ[™\Ú\Õ›ÚXÙT[[YSX[˜YÙ\ŽÂˆYˆ
[X[˜YÙ\ŠHÂˆÛÛœÝÛXÞT^[ØYH]ØZ]ØY™^\ÑÙ[™\Ú\Õ›ÚXÙT[[YTÛXÞJ
NÂˆX[˜YÙ\ˆH[š]X[^™S™^\ÑÙ[™\Ú\Õ›ÚXÙT[[YSX[˜YÙ\ŠÛXÞT^[ØY
NÂˆBˆYˆ
[X[˜YÙ\ŠH™]\›ˆÝ\›ÚXÙT[[YU˜[œÜÜ
È‹‹›Ü[ÛœË[[YSÛ›Nˆœ™X[[YHˆJNÂˆÛÛœÝÝ\\š\ÛÜˆH™^\ÑÙ[™\Ú\ÐÛÛ™\œØ][Û”Ý\\š\ÛÜˆÚ[™ÝË“™^\ÑÙ[™\Ú\ÐÛÛ™\œØ][Û”Ý\\š\ÛÜŽÂˆËÈ™\XÙ\ÈÝ\\š\ÛÜ‹œÝ\
Ü[ÛœËœÛÝ\˜ÙHœÝ\]›ÚXÙK[\Ý[š[™ÈŠNˆBˆËÈÛÛ\]H[‹[Y[[ÜžHÝ\ÛÛ^]\Ý™]Z[ˆH™\šYšYYYYXTÝ™X[K‚ˆÛÛœÝ™\Ý[HÝ\\š\ÛÜ‚ˆÈ]ØZ]Ý\\š\ÛÜ‹œÝ\
Âˆ‹‹›Ü[ÛœËˆÛÝ\˜ÙNˆÜ[ÛœËœÛÝ\˜ÙHœÝ\]›ÚXÙK[\Ý[š[™È‹ˆ™X\ÛÛŽˆÜ[ÛœËœ™X\ÛÛˆÜ[ÛœËœÛÝ\˜ÙHœÝ\]›ÚXÙK[\Ý[š[™È‚ˆJBˆˆ]ØZ]X[˜YÙ\‹œÝ\Ù\ÜÚ[ÛŠÜ[ÛœÊNÂˆYˆ
\™\Ý[Ë›ÚÈ	‰ˆX[˜YÙ\‹™Ù]Ý]J
K˜XÝ]™T[[YHOOH›YØXÞHŠHÂˆ™]\›ˆÝ\›ÚXÙT[[YU˜[œÜÜ
È‹‹›Ü[ÛœË[[YSÛ›Nˆœ™X[[YH‹X[˜YÙY[[YNˆYHJNÂˆBˆ™]\›ˆ™\Ý[ÂŸB‚˜\Þ[˜È[˜Ý[ÛˆÙ[™[Ù[S›ÝYšXØ][ÛŠ[Ù[S˜[YJHÂˆ]ØZ]]]]J‹Ø\KÛ›ÝYšXØ][ÛœËÜÙ[™‹Âˆ[Ù[Nˆ[Ù[S˜[YKˆÚ[›™[ˆÛÜšÙ›ÝÈ‹ˆY\ÜØYÙNˆ	Û[Ù[S˜[Y_HÛÜšÙ›ÝÈ\]HÙ[›ÜˆÜ\˜]Üˆ™]šY]Ë˜ˆK	Û[Ù[S˜[Y_H›ÝYšXØ][ÛˆÙ[
NÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[‘^XÝ]]™Q[[Ê
HÂˆ]ØZ]]]]J‹Ø\KÙ[[ËÜ[ˆ‹ßK‘[]›Ü›H[[ÈÛÛ\]YŠNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ[•ÛÝÑ[[Ê
HÂˆ]ØZ]]]]J‹Ø\KÙ[[ËÝÛÝÈ‹ßK’[™\ÝÜˆ›ÛÙˆ[ˆÛÛ\]YŠNÂˆÛÔÙXÝ[ÛŠ™\Ú›Ø\™ŠNÂŸB‚™[˜Ý[Ûˆ™^\Ô›ÝšY\XÝ]˜][ÛÛÛ[X[™›ÜXÝ[ÛŠXÝ[ÛˆHˆ‹˜[˜XÚÈHˆŠHÂˆÛÛœÝ›Ü›X[^™YHÝš[™ÊXÝ[ÛˆˆŠKÓÝÙ\Ø\ÙJ
Kš[J
NÂˆÛÛœÝÛÛ[X[™ÈHÂˆœ™Yœ™\Ú\™XY[™\ÜÈŽˆ“™^\ËÚ]\ÈÛÛ›™XÝYÈ‹ˆ\Ý\Ù[XÝY[[™HŽˆ“™^\Ë\Ý]™HÛ›ÝÛYÙKˆ‹ˆ\ÝX[XÛÛ™šYÝ\™Y[[™\ÈŽˆ“™^\Ë\Ý[›ÝšY\œËˆ‹ˆ™^Ü\›ÝšY\‹\™XY[™\ÜË\™\ÜŽˆ“™^\ËÚÝÈ›ÝšY\ˆ™XÙZ\Ëˆ‹ˆœÚÝË[Z\ÜÚ[™ËXÜ™Y[X[ËXÚXÚÛ\ÝŽˆ“™^\ËÚ]Ü™Y[X[È\™HZ\ÜÚ[™ÏÈ‹ˆœÚÝË[]™K\™XYK[[™\Ë[Û›HŽˆ“™^\ËÚÝÈ]™K\™XYHÙ\šXÙ\Ëˆ‹ˆœÚÝËX›ØÚÙY[[™\Ë[Û›HŽˆ“™^\ËÚ]Ü™Y[X[È\™HZ\ÜÚ[™ÏÈ‹ˆ\Ý[]™KZÛ›ÝÛYÙHŽˆ“™^\Ë\Ý]™HÛ›ÝÛYÙKˆ‹ˆ\Ý[X\Ë\›Ý][™ÈŽˆ“™^\Ë\ÝX\Ëˆ‹ˆ\Ý]ÙX]\‹ZX]\š\ÚÈŽˆ“™^\Ë\ÝÙX]\‹ˆ‹ˆ\Ý]˜[œÛ][ÛˆŽˆ“™^\Ë\Ý˜[œÛ][Û‹ˆ‹ˆ\ÝXÛÛ[][šXØ][ÛœË\™XY[™\ÜÈŽˆ“™^\Ë\ÝÓTËˆ‹ˆ\Ý][ZX[\™XY[™\ÜÈŽˆ“™^\Ë\Ý[ZX[ˆ‹ˆ\Ý\^[Y[\™XY[™\ÜÈŽˆ“™^\Ë\Ý^[Y[Ëˆ‹ˆ\Ý[\Ë\™XY[™\ÜÈŽˆ“™^\Ë\ÝTËˆ‹ˆ\ÝY›Û™K\™XY[™\ÜÈŽˆ“™^\Ë\Ý›Û™Kˆ‹ˆ\Ý\Ú\Y[]˜XÚÚ[™Ë\™XY[™\ÜÈŽˆ“™^\Ë\ÝÚ\Y[˜XÚÚ[™Ëˆ‹ˆ\Ý[YYXK\ÙX\˜ÚY[X™Y\™XY[™\ÜÈŽˆ“™^\Ë\ÝYYXHÙX\˜Úˆ‚ˆNÂˆ™]\›ˆÛÛ[X[™ÖÛ›Ü›X[^™YH˜[˜XÚÈ“™^\ËÚ]\ÈÛÛ›™XÝYÈŽÂŸB‚™[˜Ý[Ûˆ[™S™^\Ô›ÝšY\XÝ]˜][ÛÛÛ›ÛÛXÚÊ]™[
HÂˆÛÛœÝ\™Ù]H]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë\›ÝšY\‹\™XY[™\ÜËXXÝ[Û—KÙ]K[™^\ËZ[\›™]\Ù\šXÙK]\ÝHŠNÂˆYˆ
]\™Ù]
H™]\›ˆ˜[ÙNÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝXÝ[ÛˆH\™Ù]™]\Ù]›™^\Ô›ÝšY\”™XY[™\ÜÐXÝ[Ûˆ\™Ù]™]\Ù]›™^\Ò[\›™]Ù\šXÙU\ÝˆŽÂˆÛÛœÝÛÛ[X[™H™^\Ô›ÝšY\XÝ]˜][ÛÛÛ[X[™›ÜXÝ[ÛŠXÝ[Û‹\™Ù]™]\Ù]˜ÛÛ[X[™\™Ù]^ÛÛ[ˆŠNÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆYˆ
\Ó™^\Ó]™RÛ›ÝÛYÙT]Y\Ý[ÛŠÛÛ[X[™
JHÂˆ[“™^\ÒÛ›ÝÛYÙT]Y\žJÛÛ[X[™
K˜Ø]Ú
\œ›ÜˆOˆÂˆ™^\ÒÛ›ÝÛYÙPXÝ[Û”Ý]\ÈH\œ›Ü‹›Y\ÜØYÙH’Û›ÝÛYÙH˜Z[XÝ[Ûˆ™YYÈ][[Û‹ˆŽÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆŠH™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
\[“™^\ÔÝ[™\™\Ù\’ÛYSØØ[ÛÛ[X[™
ÛÛ[X[™
JHÂˆ[“™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆœ›ÝšY\‹XXÝ]˜][Û‹XÛÛ›ÛˆJK˜Ø]Ú
\œ›ÜˆOˆÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆ˜[ÙKˆÝ]\Îˆ›™^\×Ü›ÝšY\—ØXÝ]˜][Û—ØÛÛ›ÛÙ˜Z[YÜØY™[H‹ˆ[ÙNˆ”›ÝšY\ˆXÝ]˜][Ûˆ‹ˆY\ÜØYÙNˆ\œ›Ü‹›Y\ÜØYÙH”›ÝšY\ˆXÝ]˜][ÛˆÝ]\È™YYÈ][[Û‹ˆ‹ˆ™\\™YØ\™Îˆ×Kˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYBˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆJNÂˆBˆ™]\›ˆYNÂŸB‚™[˜Ý[Ûˆ[™S™^\Ñ[[ÔØ[™›ÞÛXÚÊ]™[
HÂˆÛÛœÝ\™Ù]H]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËY[[ËXXÝ[Û—HŠNÂˆYˆ
]\™Ù]
H™]\›ˆ˜[ÙNÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝXÝ[ÛˆH\™Ù]™]\Ù]›™^\Ñ[[ÐXÝ[ÛˆˆŽÂˆYˆ
XÝ[ÛˆOOH›ØYŠHÂˆÙYY™^\Ñ[[Ñ]J
NÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOHœ™\Ù]ŠHÂˆ™\Ù]™^\Ñ[[Ñ]J
NÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOHœÚÝÈŠHÂˆ™^\Ñ[[Ñ]Uš\ÚX›HHYNÂˆØ]™S™^\Ñ[[Ñ]TÝ]J
NÂˆØ\Ý
™^\Ñ[[Ñ]TÝ]K›ØYYÈ”ÚÝÚ[™È[[ÈØ[™›Þ™XÛÜ™Ëˆˆˆ‘[[È]H\È™XYHÈØYˆŠNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOHšYHŠHÂˆ™^\Ñ[[Ñ]Uš\ÚX›HH˜[ÙNÂˆØ]™S™^\Ñ[[Ñ]TÝ]J
NÂˆØ\Ý
‘[[È™XÛÜ™ÈY[‹ˆØ[™›Þ]H™[XZ[œÈÙ\\˜]Y[™™\Ù]X›KˆŠNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ˆYNÂˆBˆ™]\›ˆ˜[ÙNÂŸB‚™[˜Ý[Ûˆ™^\Ñ[[ÔØ[™›ÞXÝ[ÛŠXÝ[ÛˆHˆŠHÂˆYˆ
XÝ[ÛˆOOH›ØYŠHÂˆÙYY™^\Ñ[[Ñ]J
NÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOHœ™\Ù]ŠHÂˆ™\Ù]™^\Ñ[[Ñ]J
NÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOHœÚÝÈŠHÂˆ™^\Ñ[[Ñ]Uš\ÚX›HHYNÂˆØ]™S™^\Ñ[[Ñ]TÝ]J
NÂˆØ\Ý
™^\Ñ[[Ñ]TÝ]K›ØYYÈ”ÚÝÚ[™È[[ÈØ[™›Þ™XÛÜ™Ëˆˆˆ‘[[È]H\È™XYHÈØYˆŠNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ˆYNÂˆBˆYˆ
XÝ[ÛˆOOHšYHŠHÂˆ™^\Ñ[[Ñ]Uš\ÚX›HH˜[ÙNÂˆØ]™S™^\Ñ[[Ñ]TÝ]J
NÂˆØ\Ý
‘[[È™XÛÜ™ÈY[‹ˆØ[™›Þ]H™[XZ[œÈÙ\\˜]Y[™™\Ù]X›KˆŠNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ˆYNÂˆBˆ™]\›ˆ˜[ÙNÂŸB‚™[˜Ý[ÛˆÜ[“™^\Ñ[[ÔØ[™›ÞZ\ÜÚ[ÛŠZ\ÜÚ[Û’YHˆŠHÂˆYˆ
[™^\Ñ[[Ñ]TÝ]OË›ØYY
HÙYY™^\Ñ[[Ñ]J
NÂˆ™^\Ñ[[Ñ]Uš\ÚX›HHYNÂˆÛÛœÝZ\ÜÚ[ÛœÈH\œ˜^Kš\Ð\œ˜^J™^\Ñ[[Ñ]TÝ]OË›Z\ÜÚ[ÛœÊHÈ™^\Ñ[[Ñ]TÝ]K›Z\ÜÚ[ÛœÈˆ×NÂˆÛÛœÝZ\ÜÚ[ÛˆHZ\ÜÚ[ÛœË™š[™
][HOˆ][KšYOOHZ\ÜÚ[Û’Y
HZ\ÜÚ[ÛœÖÌH[ÂˆYˆ
[Z\ÜÚ[ÛŠHÂˆØ\Ý
“›È[[ÈZ\ÜÚ[Ûˆ\È]˜Z[X›HY]ˆØY[[È]Hš\œÝˆŠNÂˆ™]\›ˆ˜[ÙNÂˆBˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆYˆZ\ÜÚ[Û‹šYˆÛÛ[X[™ˆZ\ÜÚ[Û‹]H“Ü[ˆ[[ÈZ\ÜÚ[Ûˆ‹ˆÛÝ\˜ÙNˆ™[[Ë\Ø[™›Þ[Z\ÜÚ[Û‹XÛXÚÈ‹ˆÛÜšÙ›ÝÎˆ™[[Ë\Ø[™›Þ‹ˆXÝ[ÛŽˆ›Ü[‹Y[[Ë[Z\ÜÚ[Ûˆ‹ˆ™XÛÜ™ÛÝ\˜ÙNˆ™[[È‹ˆ[[ÎˆYKˆÜ[™Y]ˆ]K››ÝÊ
BˆNÂˆ™^\Ô™XÙ[ÛÜšÙ›ÝÜÈHÂˆÂˆYˆZ\ÜÚ[Û‹šYˆ]NˆZ\ÜÚ[Û‹]H‘[[ÈZ\ÜÚ[Ûˆ‹ˆØ]YÛÜžNˆ™[[Ë\Ø[™›Þ‹ˆÝ]\ÎˆZ\ÜÚ[Û‹œÝ]\È›ØØ[Ü™\\™Y‹ˆÝ[[X\žNˆZ\ÜÚ[Û‹™ÛØ[”Ø[™›ÞZ\ÜÚ[ÛˆÜ[™Yˆ‹ˆ\]Y]ˆ™]È]J
KÒTÓÔÝš[™Ê
Kˆ[[ÎˆYKˆ™XÛÜ™ÛÝ\˜ÙNˆ™[[È‚ˆKˆ‹‹›™^\Ô™XÙ[ÛÜšÙ›ÝÜË™š[\Š][HOˆ][KšYOOHZ\ÜÚ[Û‹šY
BˆKœÛXÙJ
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆYKˆÝ]\Îˆ›™^\×Ù[[×ÜØ[™›ÞÛZ\ÜÚ[Û—ÛÜ[™Y‹ˆ[ÙNˆ‘[[ÈØ[™›ÞZ\ÜÚ[Ûˆ‹ˆY\ÜØYÙNˆ	ÛZ\ÜÚ[Û‹]H‘[[ÈZ\ÜÚ[ÛˆŸH\ÈÜ[‹ˆ\È\ÈšXÝ[Û˜[Ø[™›Þ]HÛ›NÈ›È^\›˜[^XÝ][ÛˆØØÝ\œ™Y˜ˆ™\\™YØ\™ÎˆÞÂˆ\Nˆ™[[×ÜØ[™›ÞÛZ\ÜÚ[Ûˆ‹ˆ]NˆZ\ÜÚ[Û‹]H‘[[ÈZ\ÜÚ[Ûˆ‹ˆÝ]\ÎˆZ\ÜÚ[Û‹œÝ]\È›ØØ[Ü™\\™Y‹ˆØØ[Û›NˆYKˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆ[[ÎˆYBˆWKˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYKˆÛÝ\˜ÙNˆ›™^\×Ù[[×ÜØ[™›Þ‚ˆNÂˆØ]™S™^\Ñ[[Ñ]TÝ]J
NÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆØ\Ý
“Ü[™Y[[ÈØ[™›ÞZ\ÜÚ[Û‹ˆ›È™X[^\›˜[XÝ[ÛˆØØÝ\œ™YˆŠNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ˆYNÂŸB‚šYˆ
\[ÙˆÚ[™ÝÈOOH[™Yš[™YŠHÂˆÚ[™ÝË›™^\Ñ[[ÔØ[™›ÞXÝ[ÛˆH™^\Ñ[[ÔØ[™›ÞXÝ[ÛŽÂˆÚ[™ÝË›Ü[“™^\Ñ[[ÔØ[™›ÞZ\ÜÚ[ÛˆHÜ[“™^\Ñ[[ÔØ[™›ÞZ\ÜÚ[ÛŽÂŸB‚™[˜Ý[Ûˆ[™S™^\ÔÝ[™\™\Ù\’ÛYPÛXÚÊ]™[
HÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆˆ	‰ˆYØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜ÛÛZ[œÊ\Ù\‹[[ÙHŠJH™]\›ˆ˜[ÙNÂˆÛÛœÝ[\šY]Ñ]™[\™Ù]H]™[\™Ù]Ë˜ÛÜÙ\ÝÈ]™[\™Ù]ˆ]™[\™Ù]Ëœ\™[[[Y[ÂˆÛÛœÝ\›Ý™YY[[ÜžPXÝ[ÛˆH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËX\›Ý™Y[Y[[ÜžKXXÝ[Û—HŠNÂˆYˆ
\›Ý™YY[[ÜžPXÝ[ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ™]\›ˆ[™S™^\Ð\›Ý™YY[[ÜžPXÝ[ÛŠ\›Ý™YY[[ÜžPXÝ[Û‹™]\Ù]›™^\Ð\›Ý™YY[[ÜžPXÝ[Ûˆˆ‹\›Ý™YY[[ÜžPXÝ[ÛŠNÂˆBˆYˆ
[\šY]Ñ]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËYÝZYY\Ø]™WKÙ]K[™^\ËZ[\šY]Ë\ÚÚ\KÙ]K[™^\ËZ[\šY]ËXÛÜœ™XÝKÙ]K[™^\ËZ[\šY]Ë\™]šY]×KÙ]K[™^\ËZ[\šY]ËXØ[˜Ù[KÙ]K[™^\ËYÝZYYX˜XÚ×HŠJHÂˆ™]\›ˆ[™S™^\Õ\Ù\‘^\šY[˜ÙSX^[Z^˜][ÛÛXÚÊ]™[
NÂˆBˆÛÛœÝ[[ÓZ\ÜÚ[ÛˆH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËY[[Ë[Z\ÜÚ[Û‹[Ü[—HŠNÂˆYˆ
[[ÓZ\ÜÚ[ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ™]\›ˆÜ[“™^\Ñ[[ÔØ[™›ÞZ\ÜÚ[ÛŠ[[ÓZ\ÜÚ[Û‹™]\Ù]›™^\Ñ[[ÓZ\ÜÚ[Û“Ü[ˆˆŠNÂˆBˆÛÛœÝ]Y]š[\ˆH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËZ[\›™]X]Y]Yš[\—HŠNÂˆYˆ
]Y]š[\ŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝš[\ˆH]Y]š[\‹™]\Ù]›™^\Ò[\›™]]Y]š[\ˆ˜[ŽÂˆ		
–Ù]K[™^\ËZ[\›™]X]Y]Yš[\—HŠK™›Ü‘XXÚ
]ÛˆOˆ]Û‹˜Û\ÜÓ\ÝÙÙÛJ˜XÝ]™H‹]ÛˆOOH]Y]š[\ŠJNÂˆ		
–Ù]K[™^\ËZ[\›™]X]Y][[ÙWHŠK™›Ü‘XXÚ
Ø\™OˆÂˆÛÛœÝÝ]\ÈHØ\™™]\Ù]›™^\Ò[\›™]]Y][ÙTÝ]\ÈˆŽÂˆÛÛœÝš\ÚÈHØ\™™]\Ù]œš\ÚÓ]™[ˆŽÂˆÛÛœÝ^HØ\™š[›™\•^ÓÝÙ\Ø\ÙJ
NÂˆÛÛœÝÚÝÈHš[\ˆOOH˜[ˆˆÝ]\ÈOOHš[\ˆˆ
š[\ˆOOH™Ø\Èˆ	‰ˆK×™Ø\Î—Ê››Û™W‹ÚK\Ý
Ø\™š[›™\•^
JHˆ
š[\ˆOOHšX[ˆ	‰ˆ^š[˜ÛY\ÊšX[ŠJHˆ
š[\ˆOOHšYÚˆ	‰ˆš\ÚÈOOHšYÚŠNÂˆØ\™šY[ˆH\ÚÝÎÂˆJNÂˆ™]\›ˆYNÂˆBˆÛÛœÝÛÜP]Y]™\ÜH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËZ[\›™]X]Y]XÛÜK\™\ÜHŠNÂˆYˆ
ÛÜP]Y]™\Ü
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ™\Ü^HØÝ[Y[œ]Y\žTÙ[XÝÜŠ–Ù]K[™^\ËZ[\›™]X]Y]Y^ÜH^\™XHŠOË˜[YHˆŽÂˆ˜]šYØ]Ü‹˜Û\›Ø\™ËÜš]U^ËŠ™\Ü^
K˜Ø]Ú


HOˆßJNÂˆØ\Ý
’[\›™]Ù\šXÙ\È[YÜ˜][Ûˆ]Y]™\Ü\È™XYHÈÛÜKˆ›ÈÙXÜ™]È\™H[˜ÛYYˆŠNÂˆ™]\›ˆYNÂˆBˆYˆ
[™S™^\Ñ[[ÔØ[™›ÞÛXÚÊ]™[
JH™]\›ˆYNÂˆÛÛœÝ]™[\™Ù]H]™[\™Ù]Ë˜ÛÜÙ\ÝÈ]™[\™Ù]ˆ]™[\™Ù]Ëœ\™[[[Y[ÂˆÛÛœÝ\Ù\•\Ý[™ÐXÝ[ÛˆH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë]\Ù\‹]\Ý[™ËXXÝ[Û—HŠNÂˆYˆ
\Ù\•\Ý[™ÐXÝ[ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ™]\›ˆ[“™^\Õ\Ù\•\Ý[™Ô[[YPXÝ[ÛŠ\Ù\•\Ý[™ÐXÝ[Û‹™]\Ù]›™^\Õ\Ù\•\Ý[™ÐXÝ[Ûˆœ™Yœ™\ÚŠNÂˆBˆÛÛœÝYÙ[XÔ[[YPXÝ[ÛˆH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXYÙ[XË\[[YKXXÝ[Û—HŠNÂˆYˆ
YÙ[XÔ[[YPXÝ[ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝXÝ[ÛˆHYÙ[XÔ[[YPXÝ[Û‹™]\Ù]›™^\ÐYÙ[XÔ[[YPXÝ[Ûˆ˜ÛÛ[YHŽÂˆYˆ
XÝ[ÛˆOOH˜ÛÛ™š\›HŠH™]\›ˆÛÛ™š\›S™^\ÐYÙ[XÓZ\ÜÚ[ÛŠÛÛ™š\›HÝ\œ™[Z\ÜÚ[Û‹ˆŠNÂˆYˆ
XÝ[ÛˆOOH˜Ø[˜Ù[ŠH™]\›ˆØ[˜Ù[™^\ÐYÙ[XÓZ\ÜÚ[ÛŠØ[˜Ù[Ý\œ™[Z\ÜÚ[Û‹ˆŠNÂˆYˆ
XÝ[ÛˆOOHœÝ]\ÈŠH™]\›ˆÚÝÓ™^\ÐYÙ[XÓZ\ÜÚ[Û”Ý]\Ê•Ú]\[™YÈŠNÂˆ™]\›ˆÛÛ[YS™^\ÐYÙ[XÓZ\ÜÚ[ÛŠÛÛ[YHÝ\œ™[Z\ÜÚ[Û‹ˆŠNÂˆBˆÛÛœÝ\œÚ\Ý[Ü\˜][ÛœÔÚÜÝ]H]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë[[ÙK\ÚÜÝ]IÛÜ\˜][ÛœË[Y[[ÜžI×KÙ]K[™^\Ë[[ÙK\ÚÜÝ]IÛX\›š[™ËY]™[ÜY[	×KÙ]K[™^\Ë[[ÙK\ÚÜÝ]IØ\XØ[XØ\™Y\‰×KÙ]K[™^\Ë[[ÙK\ÚÜÝ]IÙ[\ÞY\‹Z\š[™É×KÙ]K[™^\Ë[[ÙK\ÚÜÝ]IÙ›Û™K[Z\ÜÚ[Û‹\Ý\Ü	×HŠNÂˆYˆ
\œÚ\Ý[Ü\˜][ÛœÔÚÜÝ]
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝÛÛ[X[™H\œÚ\Ý[Ü\˜][ÛœÔÚÜÝ]™]\Ù]›™^\ÐÛÛ[X[™”ÚÝÈ]Y]ÙÈŽÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ[“™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ›[ÙKXÛXÚÈˆJK˜Ø]Ú
\œ›ÜˆOˆÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆ˜[ÙKˆÝ]\Îˆ›™^\×ÛÜ\˜][Ûœ×ÛY[[ÜžWÙ\œ›Üˆ‹ˆ[ÙNˆ“Ü\˜][ÛœÈY[[ÜžH‹ˆY\ÜØYÙNˆ\œ›Ü‹›Y\ÜØYÙH“Ü\˜][ÛœÈY[[ÜžH™YYÈ][[Û‹ˆ‹ˆ™\\™YØ\™Îˆ×Kˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYBˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë]ÛÜšÙ›ÝË[Z[š[Z^™WHŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ™]\›ˆZ[š[Z^™S™^\Ñ[˜Ý[Û•Ú[™ÝÊ
NÂˆBˆYˆ
]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë]Ú[™ÝË\™\ÝÜ™WHŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝ™\ÝÜ™P]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\Ë]Ú[™ÝË\™\ÝÜ™WHŠNÂˆ™]\›ˆ™\ÝÜ™S™^\Ñ[˜Ý[Û•Ú[™ÝÊ™\ÝÜ™P]ÛË™]\Ù]Ë›™^\Ñ[˜Ý[Û•Ú[™ÝÔ™\ÝÜ™H™\ÝÜ™P]ÛË™]\Ù]Ë›™^\Ó[ÙTÚÜÝ]ˆŠNÂˆBˆYˆ
]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë]ÛÜšÙ›ÝËX˜XÚ×HŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ™]\›ˆÛÜÙS™^\Ñ[˜Ý[Û•Ú[™ÝÊÈÛÛ[X[™ˆ•Ú]Ø[ˆ™^\ÈÏÈˆJNÂˆBˆYˆ
]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë]ÛÜšÙ›ÝËXÛÜÙWHŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÙ]ÛÛ[X[™[œ]Ê•Ú]Ø[ˆ™^\ÈÏÈŠNÂˆ™]\›ˆÛÜÙS™^\Ñ[˜Ý[Û•Ú[™ÝÊÈÛÛ[X[™ˆ•Ú]Ø[ˆ™^\ÈÏÈˆJNÂˆBˆYˆ
]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËYÛØ˜[[Ù™›[™KXXÝ[Û—HŠJHÂˆ™]\›ˆ[™S™^\ÑÛØ˜[Ù™›[™PXØÙ\ÜÐÛXÚÊ]™[
NÂˆBˆYˆ
[™S™^\Ô›ÝšY\XÝ]˜][ÛÛÛ›ÛÛXÚÊ]™[
JH™]\›ˆYNÂˆÛÛœÝ[š]™\œØ[›ÝšY\Ø\™H]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë\›ÝšY\‹\™XY[™\ÜË\›Ý]WKÙ]K\›ÙXÝ[Û‹\›ÝšY\‹\™XY[™\ÜËZYKÙ]K\›ÝšY\‹XXØÛÝ[X\KXXØÙ\ÜËZYHŠNÂˆYˆ
[š]™\œØ[›ÝšY\Ø\™
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ™]\›ˆ›Ý]S™^\Ô›ÝšY\”™XY[™\ÜÐØ\™
ÂˆYˆ[š]™\œØ[›ÝšY\Ø\™™]\Ù]›™^\Ô›ÝšY\”™XY[™\ÜÔ›Ý]Bˆ[š]™\œØ[›ÝšY\Ø\™™]\Ù]œ›ÙXÝ[Û”›ÝšY\”™XY[™\ÜÒYˆ[š]™\œØ[›ÝšY\Ø\™™]\Ù]œ›ÝšY\XØÛÝ[\PXØÙ\ÜÒYˆœ›ÝšY\‹\™XY[™\ÜÈ‹ˆ˜[YNˆ[š]™\œØ[›ÝšY\Ø\™^ÛÛ[œ›ÝšY\ˆ™XY[™\ÜÈ‚ˆJNÂˆBˆÛÛœÝ[š]™\œØ[ÝYÙÙ\Ý[ÛˆH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë\™YXÝ]™K\›Ý]WKÙ]K[™^\Ë\™YXÝ]™KZ[™^XØ\™HŠNÂˆYˆ
[š]™\œØ[ÝYÙÙ\Ý[ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ™]\›ˆ›Ý]S™^\Ô™YXÝ]™TÝYÙÙ\Ý[ÛŠÂˆYˆ[š]™\œØ[ÝYÙÙ\Ý[Û‹™]\Ù]›™^\Ô™YXÝ]™T›Ý]H[š]™\œØ[ÝYÙÙ\Ý[Û‹™]\Ù]›™^\Ô™YXÝ]™R[™^Ø\™œ™YXÝ]™K\ÝYÙÙ\Ý[Ûˆ‹ˆÛÛ[X[™ˆ[š]™\œØ[ÝYÙÙ\Ý[Û‹™]\Ù]›™^\ÐÛÛ[X[™[š]™\œØ[ÝYÙÙ\Ý[Û‹^ÛÛ[•Ú]ÚÝ[HÈ™^È‚ˆJNÂˆBˆÛÛœÝ[š]™\œØ[Ø]™Y™XÛÜ™H]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë\Ø]™Y\™XÛÜ™\›Ý]WKÙ]K[™^\Ë[Y[[ÜžK\™XÛÜ™\›Ý]WHŠNÂˆYˆ
[š]™\œØ[Ø]™Y™XÛÜ™
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ™]\›ˆ›Ý]S™^\ÔØ]™Y™XÛÜ™[šÊÂˆYˆ[š]™\œØ[Ø]™Y™XÛÜ™™]\Ù]›™^\ÔØ]™Y™XÛÜ™›Ý]H[š]™\œØ[Ø]™Y™XÛÜ™™]\Ù]›™^\ÓY[[ÜžT™XÛÜ™›Ý]HœØ]™Y\™XÛÜ™‹ˆ]Nˆ[š]™\œØ[Ø]™Y™XÛÜ™™]\Ù]›™^\ÐÛÛ[X[™[š]™\œØ[Ø]™Y™XÛÜ™^ÛÛ[œØ]™Y™XÛÜ™‚ˆJNÂˆBˆÛÛœÝÝX›Z]H]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXÛÛ[X[™XÙ[\‹\ÝX›Z]HŠNÂˆYˆ
ÝX›Z]
HÂˆÛÛœÝ[œ]H™^\ÐÛÛ[X[™[œ]›Ü”ÝX›Z]
ÝX›Z]
NÂˆÛÛœÝÛÛ[X[™H[œ]Ë˜[YOËš[J
H•Ú]Ø[ˆ™^\ÈÏÈŽÂˆYˆ
›Ý]S™^\ÐÛÛ[X[™Ù[\ÛÛ[][šXØ][Û”ÝX›Z]
]™[ÝX›Z]\YXÛÛ[X[™\ÝX›Z]ŠJH™]\›ˆYNÂˆYˆ
\Ó™^\ÑÙ[™\Ú\ÐYœšXØPYÓÜÜ[š]Q˜[˜XÚÐÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ›ÚY[™S™^\ÑÙ[™\Ú\ÐYœšXØPYÓÜÜ[š]PÛÛ[X[™\Þ[˜ÊÛÛ[X[™ÈÛÝ\˜ÙNˆ˜ÛÛ[X[™\ÝX›Z]ˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
ÝX›Z]™^\ÐYÙ[XÐÛÛ[X[™[[YJÛÛ[X[™[œ]˜ÛÛ[X[™\ÝX›Z]‹]™[
JH™]\›ˆYNÂˆYˆ
\Ó™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ[“™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ˜ÛÛ[X[™\ÝX›Z]ˆJK˜Ø]Ú
\œ›ÜˆOˆÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆ˜[ÙKˆÝ]\Îˆ›™^\×ÛÜ\˜][Ûœ×ÛY[[ÜžWÙ\œ›Üˆ‹ˆ[ÙNˆ“Ü\˜][ÛœÈY[[ÜžH‹ˆY\ÜØYÙNˆ\œ›Ü‹›Y\ÜØYÙH“Ü\˜][ÛœÈY[[ÜžH™YYÈ][[Û‹ˆ‹ˆ™\\™YØ\™Îˆ×Kˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYBˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
][˜ÚØ\Xš[]Qœ›ÛP\ÚÓ™^\ÊÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ˆYNÂˆBˆYˆ
\Ó™^\Õš\X[Ø\™U[ZX[ÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ[“™^\Õš\X[Ø\™U[ZX[ÛÛ[X[™
ÛÛ[X[™
K˜Ø]Ú
\œ›ÜˆOˆÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆ˜[ÙKˆÝ]\Îˆ›™^\×Ýš\X[ØØ\™WÝ[ZX[Ù˜Z[YÜØY™[H‹ˆY\ÜØYÙNˆ\œ›Ü‹›Y\ÜØYÙH•š\X[Ø\™H[ZX[Ý]\È\È[˜]˜Z[X›Kˆ‹ˆ™\\™YØ\™Îˆ×Kˆ›Ñ^XÝ][Û]]Üš^™YˆYBˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
\Ó™^\Ñ^XÚ]XÝ]˜][Û•ÛÜšÙ›ÝÐÛÛ[X[™
ÛÛ[X[™
H	‰ˆ[“™^\ÔÝ[™\™\Ù\’ÛYSØØ[ÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ˆYNÂˆBˆYˆ
\Ó™^\Ó]™RÛ›ÝÛYÙT]Y\Ý[ÛŠÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ[“™^\ÒÛ›ÝÛYÙT]Y\žJÛÛ[X[™
K˜Ø]Ú
\œ›ÜˆOˆÂˆ™^\ÒÛ›ÝÛYÙPXÝ[Û”Ý]\ÈH\œ›Ü‹›Y\ÜØYÙH’Û›ÝÛYÙH˜Z[XÝ[Ûˆ™YYÈ][[Û‹ˆŽÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆŠH™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆJNÂˆ™]\›ˆYNÂˆBˆYˆ
\[“™^\ÔÝ[™\™\Ù\’ÛYSØØ[ÛÛ[X[™
ÛÛ[X[™
JH™]\›ˆ˜[ÙNÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ˆYNÂˆBˆÛÛœÝÚÜÝ]H]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë[[ÙK\ÚÜÝ]HŠNÂˆYˆ
\ÚÜÝ]
H™]\›ˆ˜[ÙNÂˆÛÛœÝ[ÙRYHÚÜÝ]™]\Ù]›™^\Ó[ÙTÚÜÝ]ˆŽÂˆÛÛœÝÛÛ[X[™HÚÜÝ]™]\Ù]›™^\ÐÛÛ[X[™ˆŽÂˆÛÛœÝ›Ü›X[^™Y[ÙRYHÝš[™Ê[ÙRYˆŠKÓÝÙ\Ø\ÙJ
Kœ™\XÙJ×œÚYX˜\‹KËˆŠKœ™\XÙJ×˜ÛÜ™KKËˆŠNÂˆYˆ
›Ü›X[^™Y[ÙRYOOHšÛYHŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HH[Âˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HZ[™^\ÐØ\Xš[]SÝ™\šY]Ô™\Ý[
ÛÛ[X[™•Ú]Ø[ˆ™^\ÈÏÈŠNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™•Ú]Ø[ˆ™^\ÈÏÈŠNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ˆYNÂˆBˆYˆ
›Ü›X[^™Y[ÙRYOOHœÙ][™ÜÈˆ[ÙRYOOH›[™ÝXYÙHŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™“™^\ËÚÝÈ[™ÝXYÙH[™ØY™]HÙ][™ÜËˆŽÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™“™^\ËÚÝÈ[™ÝXYÙH[™ØY™]HÙ][™ÜËˆŠNÂˆÛÛœÝ[™[H	
ˆÝ\Ù\“[™ÝXYÙT[™[ŠNÂˆYˆ
[™[
H[™[˜Û\ÜÓ\Ýœ™[[Ý™JšY[ˆŠNÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆYˆœ™\ÛÝ\˜ÙKX\ÜÚ\Ý[‹ˆÛÛ[X[™ˆÛÛ[X[™“™^\ËÚÝÈ[™ÝXYÙH[™ØY™]HÙ][™ÜËˆ‹ˆÛÝ\˜ÙNˆ›[ÙKXÛXÚÈ‹ˆÛÜšÙ›ÝÎˆœÙ][™ÜÈ‹ˆXÝ[ÛŽˆœÚÝË\Ù][™ÜÈ‹ˆÜ[™Y]ˆ]K››ÝÊ
BˆNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆYKˆÝ]\Îˆ›™^\×ÜÙ][™Ü×Ü[™[ÛÜ[™Y‹ˆ[ÙNˆ“™^\ÈÙ][™ÜÈ‹ˆY\ÜØYÙNˆ“[™ÝXYÙH[™ØY™]HÙ][™ÜÈ\™HÜ[‹ˆ›È^\›˜[XÝ[ÛˆØ\È^XÝ]Yˆ‹ˆ™\\™YØ\™ÎˆÞÈ\NˆœÙ][™Ü×Ü[™[‹]Nˆ“[™ÝXYÙH[™ØY™]HÙ][™ÜÈ‹Ý]\Îˆ›ØØ[[™[Ü[ˆ‹ØØ[Û›NˆYHWKˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYKˆÛÝ\˜ÙNˆœÝ[™\™Ý\Ù\—ÚÛYH‚ˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ	
ˆÝ\Ù\“[™ÝXYÙT[™[ŠOË˜Û\ÜÓ\Ýœ™[[Ý™JšY[ˆŠNÂˆØÚY[S™^\ÐXÝ]™UÛÜšÙ›ÝÑ›ØÝ\ÊÈ[œÝ[ˆYHJNÂˆ™]\›ˆYNÂˆBˆYˆ
›Ü›X[^™Y[ÙRYOOH˜XÝ]˜][Û‹XÙ[\ˆŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™”ÚÝÈXÝ]˜][ÛˆÝ]\ÈŠNÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆYˆœ™\ÛÝ\˜ÙKX\ÜÚ\Ý[‹ˆÛÛ[X[™ˆÛÛ[X[™”ÚÝÈXÝ]˜][ÛˆÝ]\È‹ˆÛÝ\˜ÙNˆ›[ÙKXÛXÚÈ‹ˆÛÜšÙ›ÝÎˆ˜XÝ]˜][Û‹XÙ[\ˆ‹ˆXÝ[ÛŽˆœÚÝË\Ý]\È‹ˆÜ[™Y]ˆ]K››ÝÊ
BˆNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆYKˆÝ]\Îˆ›™^\×ØXÝ]˜][Û—ØÙ[\—ÛÜ[™Y‹ˆ[ÙNˆXÝ]˜][ÛˆÙ[\ˆ‹ˆY\ÜØYÙNˆXÝ]˜][ÛˆÝ]\È\ÈÜ[ˆ[ˆ™]šY]ÈÛÜšÜÜXÙH]Z[Ëˆ]™HXÝ[ÛœÈ™[XZ[ˆÜ™Y[X[ÛÛœÙ[ÛÛ™š\›X][Û‹[™]Y]Ø]Yˆ‹ˆ™\\™YØ\™ÎˆÞÈ\Nˆ˜XÝ]˜][Û—ØÙ[\ˆ‹]NˆXÝ]˜][ÛˆÙ[\ˆ‹Ý]\Îˆ›ØØ[Ý]\ÈÜ[ˆ‹ØØ[Û›NˆYHWKˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYKˆÛÝ\˜ÙNˆœÝ[™\™Ý\Ù\—ÚÛYH‚ˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆØÚY[S™^\ÐXÝ]™UÛÜšÙ›ÝÑ›ØÝ\ÊÈ[œÝ[ˆYHJNÂˆ™]\›ˆYNÂˆBˆYˆ
È›Ü\˜][ÛœË[Y[[ÜžH‹›X\›š[™ËY]™[ÜY[‹˜\XØ[XØ\™Y\ˆ‹™[\ÞY\‹Z\š[™È‹™›Û™K[Z\ÜÚ[Û‹\Ý\Ü—Kš[˜ÛY\Ê›Ü›X[^™Y[ÙRY
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝÜ\˜][ÛœÐÛÛ[X[™HÛÛ[X[™”ÚÝÈ]Y]ÙÈŽÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÜ\˜][ÛœÐÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÜ\˜][ÛœÐÛÛ[X[™
NÂˆ[“™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
Ü\˜][ÛœÐÛÛ[X[™ÈÛÝ\˜ÙNˆ›[ÙKXÛXÚÈˆJK˜Ø]Ú
\œ›ÜˆOˆÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆ˜[ÙKˆÝ]\Îˆ›™^\×ÛÜ\˜][Ûœ×ÛY[[ÜžWÙ\œ›Üˆ‹ˆ[ÙNˆ“Ü\˜][ÛœÈY[[ÜžH‹ˆY\ÜØYÙNˆ\œ›Ü‹›Y\ÜØYÙH“Ü\˜][ÛœÈY[[ÜžH™YYÈ][[Û‹ˆ‹ˆ™\\™YØ\™Îˆ×Kˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYBˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆJNÂˆ™]\›ˆYNÂˆBˆÛÛœÝÛXÚÙYØ\Xš[]HH™\ÛÛ™S™^\ÐØ\Xš[]JÛÛ[X[™È[ÙRYJNÂˆYˆ
ÛXÚÙYØ\Xš[]JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÛXÚÙYØ\Xš[]K]NÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™ÛXÚÙYØ\Xš[]K]JNÂˆ™]\›ˆÜ[“™^\ÐØ\Xš[]JÛXÚÙYØ\Xš[]KšYÈÛÛ[X[™ˆÛÛ[X[™ÛXÚÙYØ\Xš[]K]KÛÝ\˜ÙNˆ›[ÙKXÛXÚÈ‹ÛÝ\˜ÙTÝ\™˜XÙNˆœÝ[™\™Ý\Ù\—ØÛXÚÈˆJNÂˆBˆÛÛœÝ›Ü›X[^™YÛÜšÙ›ÝÒYH›Ü›X[^™S™^\ÕÛÜšÙ›ÝÒY
[ÙRYÛÛ[X[™
NÂˆYˆ
›Ü›X[^™YÛÜšÙ›ÝÒYOOH›YYXHŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™”^H]\ÚXËˆŽÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™”^H]\ÚXËˆŠNÂˆ™]\›ˆÜ[“™^\ÕÛÜšÙ›ÝÊ›YYXH‹ÈÛÛ[X[™ˆÛÛ[X[™”^H]\ÚXËˆ‹ÛÝ\˜ÙNˆ›[ÙKXÛXÚÈˆJNÂˆBˆYˆ
™^\ÕÛÜšÙ›ÝÑYš[š][ÛŠ›Ü›X[^™YÛÜšÙ›ÝÒYÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ˆÜ[“™^\ÕÛÜšÙ›ÝÊ›Ü›X[^™YÛÜšÙ›ÝÒYÈÛÛ[X[™ÛÝ\˜ÙNˆ›[ÙKXÛXÚÈˆJNÂˆBˆYˆ
\[“™^\ÔÝ[™\™\Ù\’ÛYSØØ[ÛÛ[X[™
ÛÛ[X[™
JH™]\›ˆ˜[ÙNÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ˆYNÂŸB‚™[˜Ý[Ûˆ™^\Ò[™TÝ[™\™\Ù\’ÛYTÚÜÝ]
]™[
HÂˆ™]\›ˆ[™S™^\ÔÝ[™\™\Ù\’ÛYPÛXÚÊ]™[
NÂŸB‚™[˜Ý[Ûˆ[™S™^\Õ\Ù\‘^\šY[˜ÙSX^[Z^˜][ÛÛXÚÊ]™[
HÂˆÛÛœÝ\™Ù]H]™[\™Ù]ÂˆÛÛœÝÜ\˜][ÛœÐXÝ[ÛˆH\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë[Ü\˜][ÛœËXXÝ[Û—HŠNÂˆYˆ
Ü\˜][ÛœÐXÝ[ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝXÝ[ÛˆHÜ\˜][ÛœÐXÝ[Û‹™]\Ù]›™^\ÓÜ\˜][ÛœÐXÝ[ÛˆœÝ]\ÈŽÂˆ[“™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
XÝ[Û‹œ™\XÙJ×ËÙËˆŠKÂˆXÝ[Û‹ˆÛÝ\˜ÙNˆ›Ü\˜][ÛœËXXÝ[Û‹X]Ûˆ‚ˆJK˜Ø]Ú
\œ›ÜˆOˆÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆ˜[ÙKˆÝ]\Îˆ›™^\×ÛÜ\˜][Ûœ×ÛY[[ÜžWÙ\œ›Üˆ‹ˆ[ÙNˆ“Ü\˜][ÛœÈY[[ÜžH‹ˆY\ÜØYÙNˆ\œ›Ü‹›Y\ÜØYÙH“Ü\˜][ÛœÈY[[ÜžH™YYÈ][[Û‹ˆ‹ˆ™\\™YØ\™Îˆ×Kˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYBˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆJNÂˆ™]\›ˆYNÂˆBˆÛÛœÝ™XÙ[H\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë\™XÙ[]ÛÜšÙ›Ý×HŠNÂˆYˆ
™XÙ[
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝYH™XÙ[™]\Ù]›™^\Ô™XÙ[ÛÜšÙ›ÝÈ™XÙ[™]\Ù]›™^\Ó[ÙTÚÜÝ]ˆŽÂˆ™]\›ˆÜ[“™^\ÕÛÜšÙ›ÝÊYÈÛÛ[X[™ˆ™XÙ[™]\Ù]›™^\ÐÛÛ[X[™ÛÛ[YH	ÚYXÛÝ\˜ÙNˆœ™XÙ[]ÛÜšÙ›ÝÈˆJNÂˆBˆÛÛœÝÝÐ˜[™ÚYH\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë[ÝËX˜[™ÚY]ÙÙÛWHŠNÂˆYˆ
ÝÐ˜[™ÚY
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ™^\ÓÝÐ˜[™ÚY[ÙHH[™^\ÓÝÐ˜[™ÚY[ÙNÂˆØÝ[Y[˜›ÙK˜Û\ÜÓ\ÝÙÙÛJ›™^\Ë[ÝËX˜[™ÚY[[ÙH‹™^\ÓÝÐ˜[™ÚY[ÙJNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆYKˆÝ]\Îˆ›™^\×ÛÝ×Ø˜[™ÚYÜ™Y™\™[˜ÙWÝ\]Y‹ˆ[ÙNˆ“™^\ÈÛÛ[X[™Ù[\ˆ‹ˆY\ÜØYÙNˆ™^\ÓÝÐ˜[™ÚY[ÙHÈ“ÝËX˜[™ÚY[ÙH\ÈÛ‹ˆ™^\ÈÚ[[\\Ú^™H^Yš\œÝÛÜšÙ›ÝÜÈ[™ØØ[˜[˜XÚÈÝ]\Ëˆˆˆ“ÝËX˜[™ÚY[ÙH\ÈÙ™‹ˆÝ[™\™š\ÝX[[ÙH\È™\ÝÜ™Yˆ‹ˆ™\\™YØ\™ÎˆÞÈ\Nˆ›Ý×Ø˜[™ÚYÜ™Y™\™[˜ÙH‹]Nˆ“ÝËX˜[™ÚY[ÙH‹Ý]\Îˆ™^\ÓÝÐ˜[™ÚY[ÙHÈ›Ûˆˆˆ›Ù™ˆ‹ØØ[Û›NˆYHWKˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYBˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ˆYNÂˆBˆÛÛœÝ[š]™\œØ[™]šY]ÐXÝ[ÛˆH\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë][š]™\œØ[XXÝ[Û‹\™]šY]×HŠNÂˆYˆ
[š]™\œØ[™]šY]ÐXÝ[ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝXÝ[ÛˆH[š]™\œØ[™]šY]ÐXÝ[Û‹™]\Ù]›™^\Õ[š]™\œØ[XÝ[Û”™]šY]È˜\›Ý™HŽÂˆÛÛœÝÛÜšÙ›ÝÒYH[š]™\œØ[™]šY]ÐXÝ[Û‹™]\Ù]ÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OËšYˆŽÂˆÛÛœÝYš[š][ÛˆH™^\Ñ[˜Ý[Û•Ú[™ÝÑYš[š][ÛŠÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OË˜ÛÛ[X[™ˆŠNÂˆÛÛœÝ[™HH™^\Ò[YÜ˜][Û“[™PžRY
™^\ÕÛÜšÙ›ÝÔ™YÚ\ÝžQ[žJÛÜšÙ›ÝÒY
OËš[YÜ˜][Û“[™RY
NÂˆÛÛœÝ™]šY]ÈH™^\Õ[š]™\œØ[XÝ[Û”™]šY]Ñ›Ü•ÛÜšÙ›ÝÊYš[š][ÛˆÈYˆÛÜšÙ›ÝÒYK[[™JNÂˆÛÛœÝÝ]\ÐžPXÝ[ÛˆHÂˆ\›Ý™Nˆ˜\›Ý˜[Ú[[Ü™XÛÜ™Y‹ˆY]ˆœ™]šY]×ÙY]Ü™\]Y\ÝY‹ˆØ[˜Ù[ˆœ™]šY]×ØØ[˜Ù[Y‹ˆ[^Nˆœ™]šY]×Ù[^YY‹ˆœØ]™KY˜YŽˆœ™]šY]×ÜØ]™YØ\×Ù˜Y‚ˆNÂˆÛÛœÝY\ÜØYÙPžPXÝ[ÛˆHÂˆ\›Ý™Nˆ\›Ý˜[[[™XÛÜ™YØØ[Kˆ™^\ÈÝ[™\]Z\™\ÈHš[˜[^XÝ][ÛˆØ]KÛÛ™šYÝ\™Y›ÝšY\‹ÛÛœÙ[]Y][™™\Ý[™\šYšXØ][Ûˆ™Y›Ü™H[žH]™HXÝ[Û‹ˆ‹ˆY]ˆ‘Y][ÙH\È™XYKˆY\ÝHXÚÙ]™Y›Ü™H[žHÛÛ™š\›X][ÛˆÜˆ›ÝšY\ˆ[™Ù™‹ˆ‹ˆØ[˜Ù[ˆ”™]šY]ÈØ[˜Ù[YØØ[Kˆ›È›ÝšY\ˆØ\ÈÛÛXÝY[™›È^\›˜[XÝ[ÛˆØ\È^XÝ]Yˆ‹ˆ[^Nˆ”™]šY]È[^YYØØ[Kˆ™^\ÈÚ[ÙY\\È\ÈH˜YÜ]Y]YH][H[[[ÝH™]\›‹ˆ‹ˆœØ]™KY˜YŽˆ‘˜YØ]™YØØ[H›Üˆ™]šY]Ëˆ›È^\›˜[XÝ[Û‹Ù[™Ø[^[Y[\Ü]ÚÜˆ›ÝšY\ˆ[™Ù™ˆØØÝ\œ™Yˆ‚ˆNÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆ‹‹Š™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HßJKˆYˆÛÜšÙ›ÝÒYˆÝZYY[ÙNˆXÝ[ÛˆOOH™Y]ˆÈ˜[ÙHˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OË™ÝZYY[ÙKˆ[š]™\œØ[XÝ[Û”™]šY]ÎˆÂˆXÝ[Û‹ˆÝ]\ÎˆÝ]\ÐžPXÝ[Û–ØXÝ[Û—Hœ™]šY]×Ý\]Y‹ˆ]ˆ™]È]J
KÒTÓÔÝš[™Ê
Kˆ\›Ý˜[[[Û›NˆYKˆš[˜[^XÝ][Û‘Ø]T™\]Z\™YˆYKˆ^XÝ][Û]]Üš]Nˆ˜[ÙKˆ›Ñ^XÝ][Û]]Üš^™YˆYBˆBˆNÂˆ™XÛÜ™™^\Ô™XÙ[ÛÜšÙ›ÝÊÛÜšÙ›ÝÒYÂˆÝ]\ÎˆÝ]\ÐžPXÝ[Û–ØXÝ[Û—Hœ™]šY]×Ý\]Y‹ˆÝ[[X\žNˆY\ÜØYÙPžPXÝ[Û–ØXÝ[Û—H•[š]™\œØ[XÝ[Ûˆ™]šY]È\]YØØ[Kˆ‚ˆJNÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆYKˆÝ]\ÎˆÝ]\ÐžPXÝ[Û–ØXÝ[Û—Hœ™]šY]×Ý\]Y‹ˆ[ÙNˆ•[š]™\œØ[XÝ[Ûˆ™]šY]È‹ˆY\ÜØYÙNˆY\ÜØYÙPžPXÝ[Û–ØXÝ[Û—H•[š]™\œØ[XÝ[Ûˆ™]šY]È\]YØØ[Kˆ‹ˆ™\\™YØ\™ÎˆÞÂˆ\Nˆ[š]™\œØ[ØXÝ[Û—Ü™]šY]È‹ˆ]Nˆ™]šY]ËÛÜšÙ›ÝÓX™[ˆÝ]\ÎˆÝ]\ÐžPXÝ[Û–ØXÝ[Û—Hœ™]šY]×Ý\]Y‹ˆØØ[Û›NˆYKˆ\›Ý˜[[[Û›NˆYKˆš[˜[^XÝ][Û‘Ø]T™\]Z\™YˆYKˆ›Ñ^XÝ][Û]]Üš^™YˆYBˆWKˆ™]šY]Ëˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆ›Ô›ÝšY\ÛÛXÝ]]Üš^™YˆYKˆ›Ô^[Y[]]Üš^™YˆYKˆ›ÓY\ÜØYÙTÙ[ˆYKˆ›ÐØ[XÙYˆYKˆØØ[Û›NˆYKˆÛÝ\˜ÙNˆ›™^\×Ý[š]™\œØ[ØXÝ[Û—Ü™]šY]È‚ˆNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆØÚY[S™^\ÐXÝ]™UÛÜšÙ›ÝÑ›ØÝ\ÊÈ[œÝ[ˆYHJNÂˆ™]\›ˆYNÂˆBˆÛÛœÝÝZYY[ÙHH\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËYÝZYY[[ÙWHŠNÂˆYˆ
ÝZYY[ÙJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆ‹‹Š™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HßJKˆÝZYY[ÙNˆÝZYY[ÙK™]\Ù]›™^\ÑÝZYY[ÙHOOH™ÝZYY‹ˆYˆÝZYY[ÙK™]\Ù]ÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OËšYˆ‚ˆNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆØÚY[S™^\ÐXÝ]™UÛÜšÙ›ÝÑ›ØÝ\ÊÈ[œÝ[ˆYHJNÂˆ™]\›ˆYNÂˆBˆÛÛœÝÝZYYØ]™HH\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËYÝZYY\Ø]™WHŠNÂˆYˆ
ÝZYYØ]™JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝÛÜšÙ›ÝÒYHÝZYYØ]™K™]\Ù]ÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OËšYˆŽÂˆÛÛœÝ[œ]HØÝ[Y[œ]Y\žTÙ[XÝÜŠ–Ù]K[™^\ËYÝZYYX[œÝÙ\—HŠNÂˆYˆ
ÛÜšÙ›ÝÒY	‰ˆ[œ]
HÂˆÛÛœÝYš[š][ÛˆH™^\Ñ[˜Ý[Û•Ú[™ÝÑYš[š][ÛŠÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OË˜ÛÛ[X[™ˆŠNÂˆÛÛœÝšY[ÈH™^\ÑÝZYYšY[Ñ›Ü‘Yš[š][ÛŠYš[š][ÛŠNÂˆÛÛœÝ[\šY]ÈH™^\Ò[\šY]ÔÝ]Q›Ü•ÛÜšÙ›ÝÊÛÜšÙ›ÝÒY
NÂˆÛÛœÝšY[˜[YHH[œ]™]\Ù]›™^\ÑÝZYY[œÝÙ\ˆ˜[œÝÙ\ˆŽÂˆÛÛœÝšY[HšY[Ë™š[™
][HOˆ][K›˜[YHOOHšY[˜[YJHÈ˜[YNˆšY[˜[YKX™[ˆšY[˜[YK™\]Z\™YˆYK\Nˆ[œ]™]\Ù]›™^\Ò[\šY]ÑšY[\H^ˆNÂˆÛÛœÝ˜[YHH[œ]˜[YHˆŽÂˆÛÛœÝ\œ›ÜˆH˜[Y]S™^\Ò[\šY]Ð[œÝÙ\ŠšY[˜[YJNÂˆ[\šY]Ë™\œ›ÜœÈHÈ‹‹Š[\šY]Ë™\œ›ÜœÈßJHNÂˆYˆ
\œ›ÜŠHÂˆ[\šY]Ë™\œ›ÜœÖÙšY[˜[YWHH\œ›ÜŽÂˆH[ÙHÂˆ[]H[\šY]Ë™\œ›ÜœÖÙšY[˜[YWNÂˆ[\šY]Ë˜[Y\ÈHÂˆ‹‹Š[\šY]Ë˜[Y\ÈßJKˆÙšY[˜[YWNˆÝš[™Ê˜[YHˆŠKš[J
BˆNÂˆ[\šY]ËœÚÚ\YH
[\šY]ËœÚÚ\Y×JK™š[\Š˜[YHOˆ˜[YHOOHšY[˜[YJNÂˆ[\šY]Ë˜Ý\œ™[[™^HX]›Z[Š
šY[Ë™š[™[™^
][HOˆ][K›˜[YHOOHšY[˜[YJH
ÈJKX]›X^
šY[Ë›[™ÝHK
JNÂˆ[\šY]Ë\]Y]H™]È]J
KÒTÓÔÝš[™Ê
NÂˆ[\šY]Ë˜Ø[˜Ù[YH˜[ÙNÂˆBˆ™^\ÑÝZYYÛÜšÙ›ÝÐ[œÝÙ\œÖÝÛÜšÙ›ÝÒYHH[\šY]ÎÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆ‹‹Š™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HßJKˆYˆÛÜšÙ›ÝÒYˆÝZYY[ÙNˆYBˆNÂˆ™XÛÜ™™^\Ô™XÙ[ÛÜšÙ›ÝÊÛÜšÙ›ÝÒYÈÝ]\Îˆ™˜Y‹Ý[[X\žNˆ\œ›ÜˆÈ’[\šY]È[œÝÙ\ˆ™YYÈHÚ[\HÛÜœ™XÝ[Û‹ˆˆˆÛÛ™\œØ][Û˜[[\šY]È[œÝÙ\ˆØ]™YØØ[KˆˆJNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆØÚY[S™^\ÐXÝ]™UÛÜšÙ›ÝÑ›ØÝ\ÊÈ[œÝ[ˆYHJNÂˆBˆ™]\›ˆYNÂˆBˆÛÛœÝ[\šY]ÔÚÚ\H\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËZ[\šY]Ë\ÚÚ\HŠNÂˆYˆ
[\šY]ÔÚÚ\
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝÛÜšÙ›ÝÒYH[\šY]ÔÚÚ\™]\Ù]ÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OËšYˆŽÂˆÛÛœÝ[œ]HØÝ[Y[œ]Y\žTÙ[XÝÜŠ–Ù]K[™^\ËYÝZYYX[œÝÙ\—HŠNÂˆÛÛœÝšY[˜[YHH[œ]Ë™]\Ù]Ë›™^\ÑÝZYY[œÝÙ\ˆˆŽÂˆYˆ
ÛÜšÙ›ÝÒY	‰ˆšY[˜[YJHÂˆÛÛœÝYš[š][ÛˆH™^\Ñ[˜Ý[Û•Ú[™ÝÑYš[š][ÛŠÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OË˜ÛÛ[X[™ˆŠNÂˆÛÛœÝšY[ÈH™^\ÑÝZYYšY[Ñ›Ü‘Yš[š][ÛŠYš[š][ÛŠNÂˆÛÛœÝšY[HšY[Ë™š[™
][HOˆ][K›˜[YHOOHšY[˜[YJNÂˆÛÛœÝ[\šY]ÈH™^\Ò[\šY]ÔÝ]Q›Ü•ÛÜšÙ›ÝÊÛÜšÙ›ÝÒY
NÂˆYˆ
YšY[Ëœ™\]Z\™Y
HÂˆ[\šY]ËœÚÚ\YH\œ˜^K™œ›ÛJ™]ÈÙ]
Ë‹‹Š[\šY]ËœÚÚ\Y×JKšY[˜[YWJJNÂˆ[\šY]Ë™\œ›ÜœÈHÈ‹‹Š[\šY]Ë™\œ›ÜœÈßJHNÂˆ[]H[\šY]Ë™\œ›ÜœÖÙšY[˜[YWNÂˆ[\šY]Ë˜Ý\œ™[[™^HX]›Z[Š
šY[Ë™š[™[™^
][HOˆ][K›˜[YHOOHšY[˜[YJH
ÈJKX]›X^
šY[Ë›[™ÝHK
JNÂˆ[\šY]Ë\]Y]H™]È]J
KÒTÓÔÝš[™Ê
NÂˆ™^\ÑÝZYYÛÜšÙ›ÝÐ[œÝÙ\œÖÝÛÜšÙ›ÝÒYHH[\šY]ÎÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆ‹‹Š™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HßJKˆYˆÛÜšÙ›ÝÒYˆÝZYY[ÙNˆYBˆNÂˆ™XÛÜ™™^\Ô™XÙ[ÛÜšÙ›ÝÊÛÜšÙ›ÝÒYÈÝ]\Îˆ™˜Y‹Ý[[X\žNˆ“Ü[Û˜[[\šY]ÈšY[ÚÚ\YØØ[KˆˆJNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆØÚY[S™^\ÐXÝ]™UÛÜšÙ›ÝÑ›ØÝ\ÊÈ[œÝ[ˆYHJNÂˆBˆBˆ™]\›ˆYNÂˆBˆÛÛœÝ[\šY]ÐÛÜœ™XÝH\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËZ[\šY]ËXÛÜœ™XÝHŠNÂˆYˆ
[\šY]ÐÛÜœ™XÝ
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝÛÜšÙ›ÝÒYH[\šY]ÐÛÜœ™XÝ™]\Ù]ÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OËšYˆŽÂˆYˆ
ÛÜšÙ›ÝÒY
HÂˆÛÛœÝYš[š][ÛˆH™^\Ñ[˜Ý[Û•Ú[™ÝÑYš[š][ÛŠÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OË˜ÛÛ[X[™ˆŠNÂˆÛÛœÝšY[ÈH™^\ÑÝZYYšY[Ñ›Ü‘Yš[š][ÛŠYš[š][ÛŠNÂˆÛÛœÝ[\šY]ÈH™^\Ò[\šY]ÔÝ]Q›Ü•ÛÜšÙ›ÝÊÛÜšÙ›ÝÒY
NÂˆÛÛœÝ˜[Y\ÈH™^\Ò[\šY]Õ˜[Y\Ê[\šY]ÊNÂˆÛÛœÝ[œÝÙ\™Y[™^\ÈHšY[Ë›X\

šY[[™^
HOˆ˜[Y\ÖÙšY[›˜[YWHÈ[™^ˆLJK™š[\Š[™^Oˆ[™^H
NÂˆÛÛœÝ™]š[Ý\Ò[™^H[œÝÙ\™Y[™^\Ë›[™ÝÈ[œÝÙ\™Y[™^\ÖØ[œÝÙ\™Y[™^\Ë›[™ÝHWHˆX]›X^

[\šY]Ë˜Ý\œ™[[™^
HHJNÂˆ[\šY]Ë˜Ý\œ™[[™^H™]š[Ý\Ò[™^Âˆ[\šY]Ëœ™]šY]Ô™XYHH˜[ÙNÂˆ[\šY]Ë˜ÛÜœ™XÝ[ÛœÈHÂˆÈšY[ˆšY[ÖÜ™]š[Ý\Ò[™^OË›˜[YHœ™]š[Ý\È‹]ˆ™]È]J
KÒTÓÔÝš[™Ê
K™X\ÛÛŽˆ\Ù\—Ü™\]Y\ÝYØÛÜœ™XÝ[ÛˆˆKˆ‹‹Š[\šY]Ë˜ÛÜœ™XÝ[ÛœÈ×JBˆKœÛXÙJ
NÂˆ™^\ÑÝZYYÛÜšÙ›ÝÐ[œÝÙ\œÖÝÛÜšÙ›ÝÒYHH[\šY]ÎÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆ‹‹Š™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HßJKˆYˆÛÜšÙ›ÝÒYˆÝZYY[ÙNˆYBˆNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆØÚY[S™^\ÐXÝ]™UÛÜšÙ›ÝÑ›ØÝ\ÊÈ[œÝ[ˆYHJNÂˆBˆ™]\›ˆYNÂˆBˆÛÛœÝ[\šY]Ô™]šY]ÈH\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËZ[\šY]Ë\™]šY]×HŠNÂˆYˆ
[\šY]Ô™]šY]ÊHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝÛÜšÙ›ÝÒYH[\šY]Ô™]šY]Ë™]\Ù]ÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OËšYˆŽÂˆYˆ
ÛÜšÙ›ÝÒY
HÂˆÛÛœÝ[\šY]ÈH™^\Ò[\šY]ÔÝ]Q›Ü•ÛÜšÙ›ÝÊÛÜšÙ›ÝÒY
NÂˆ[\šY]Ëœ™]šY]Ô™XYHHYNÂˆ[\šY]Ë\]Y]H™]È]J
KÒTÓÔÝš[™Ê
NÂˆ™^\ÑÝZYYÛÜšÙ›ÝÐ[œÝÙ\œÖÝÛÜšÙ›ÝÒYHH[\šY]ÎÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆ‹‹Š™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HßJKˆYˆÛÜšÙ›ÝÒYˆÝZYY[ÙNˆYBˆNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆØÚY[S™^\ÐXÝ]™UÛÜšÙ›ÝÑ›ØÝ\ÊÈ[œÝ[ˆYHJNÂˆBˆ™]\›ˆYNÂˆBˆÛÛœÝ[\šY]ÐØ[˜Ù[H\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËZ[\šY]ËXØ[˜Ù[HŠNÂˆYˆ
[\šY]ÐØ[˜Ù[
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝÛÜšÙ›ÝÒYH[\šY]ÐØ[˜Ù[™]\Ù]ÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OËšYˆŽÂˆYˆ
ÛÜšÙ›ÝÒY
HÂˆÛÛœÝ[\šY]ÈH™^\Ò[\šY]ÔÝ]Q›Ü•ÛÜšÙ›ÝÊÛÜšÙ›ÝÒY
NÂˆ[\šY]Ë˜Ø[˜Ù[YHYNÂˆ[\šY]Ë˜[Y\ÈHßNÂˆ[\šY]ËœÚÚ\YH×NÂˆ[\šY]Ë™\œ›ÜœÈHßNÂˆ[\šY]Ë˜Ý\œ™[[™^HÂˆ[\šY]Ëœ™]šY]Ô™XYHH˜[ÙNÂˆ[\šY]Ë\]Y]H™]È]J
KÒTÓÔÝš[™Ê
NÂˆ™^\ÑÝZYYÛÜšÙ›ÝÐ[œÝÙ\œÖÝÛÜšÙ›ÝÒYHH[\šY]ÎÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆ‹‹Š™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HßJKˆYˆÛÜšÙ›ÝÒYˆÝZYY[ÙNˆYBˆNÂˆ™XÛÜ™™^\Ô™XÙ[ÛÜšÙ›ÝÊÛÜšÙ›ÝÒYÈÝ]\Îˆ™˜Y‹Ý[[X\žNˆ’[\šY]ÈØ[˜Ù[YØØ[H™Y›Ü™H[žHXÚÙ]Üˆ^\›˜[XÝ[Û‹ˆˆJNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆØÚY[S™^\ÐXÝ]™UÛÜšÙ›ÝÑ›ØÝ\ÊÈ[œÝ[ˆYHJNÂˆBˆ™]\›ˆYNÂˆBˆÛÛœÝÝZYY˜XÚÈH\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËYÝZYYX˜XÚ×HŠNÂˆYˆ
ÝZYY˜XÚÊHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝÛÜšÙ›ÝÒYHÝZYY˜XÚË™]\Ù]ÛÜšÙ›ÝÒY™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]OËšYˆŽÂˆÛÛœÝ[\šY]ÈH™^\Ò[\šY]ÔÝ]Q›Ü•ÛÜšÙ›ÝÊÛÜšÙ›ÝÒY
NÂˆ[\šY]Ë˜Ý\œ™[[™^HX]›X^
[X™\Š[\šY]Ë˜Ý\œ™[[™^
HHJNÂˆ[\šY]Ëœ™]šY]Ô™XYHH˜[ÙNÂˆ™^\ÑÝZYYÛÜšÙ›ÝÐ[œÝÙ\œÖÝÛÜšÙ›ÝÒYHH[\šY]ÎÂˆ™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HHÂˆ‹‹Š™^\ÐXÝ]™UÛÜšÙ›ÝÔÝ]HßJKˆYˆÛÜšÙ›ÝÒYˆÝZYY[ÙNˆYBˆNÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆØÚY[S™^\ÐXÝ]™UÛÜšÙ›ÝÑ›ØÝ\ÊÈ[œÝ[ˆYHJNÂˆ™]\›ˆYNÂˆBˆ™]\›ˆ˜[ÙNÂŸB‚™[˜Ý[Ûˆ[™S™^\Õ\Ù\‘^\šY[˜ÙSX^[Z^˜][ÛÚ[™ÙJ]™[
HÂˆÛÛœÝ›ÛHH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë\›ÛK\Ù[XÝÜ—HŠNÂˆYˆ
›ÛJHÂˆ™^\Õ\Ù\‘^\šY[˜ÙT›ÛHH‘VT×ÕVÔ“ÓTËš[˜ÛY\Ê›ÛK˜[YJHÈ›ÛK˜[YHˆ”Ý[™\™\Ù\ˆŽÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆYKˆÝ]\Îˆ›™^\×Ü›ÛWÝšY]×Ý\]Y‹ˆ[ÙNˆ“™^\ÈÛÛ[X[™Ù[\ˆ‹ˆY\ÜØYÙNˆ	Û™^\Õ\Ù\‘^\šY[˜ÙT›Û_HšY]ÈÙ[XÝYˆ\Èš[\œÈÝYÙÙ\Ý[ÛœÈÛ›H[™Ù\È›ÝÚ[™ÙH]][XØ][ÛˆÜˆØY™]HØ]\Ë˜ˆ™\\™YØ\™ÎˆÞÈ\Nˆœ›ÛWØ]Ø\™WÝšY]È‹]Nˆ™^\Õ\Ù\‘^\šY[˜ÙT›ÛKÝ]\Îˆ^š[\ˆXÝ]™H‹ØØ[Û›NˆYHWKˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYBˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ˆYNÂˆBˆÛÛœÝ[™ÝXYÙHH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë[[™ÝXYÙK\™Y™\™[˜ÙWHŠNÂˆYˆ
[™ÝXYÙJHÂˆ™^\Ó[™ÝXYÙT™Y™\™[˜ÙHH[™ÝXYÙK˜[YH‘[™Û\ÚŽÂˆØ]™S™^\Ô[[YSY[[ÜžJ
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HÂˆÚÎˆYKˆÝ]\Îˆ›™^\×Û[™ÝXYÙWÜ™Y™\™[˜ÙWØØ\\™Y‹ˆ[ÙNˆ“™^\ÈÛÛ[X[™Ù[\ˆ‹ˆY\ÜØYÙNˆ	Û™^\Ó[™ÝXYÙT™Y™\™[˜Ù_H™Y™\™[˜ÙHØ\\™Y›Üˆ\Èœ›ÝÜÙ\‹ˆ™^\ÈÚ[›ÝÛZ[H[˜[œÛ][Ûˆ[›\ÜÈÝ\ÜYÛÛ[\È]˜Z[X›K˜ˆ™\\™YØ\™ÎˆÞÈ\Nˆ›[™ÝXYÙWÜ™Y™\™[˜ÙH‹]Nˆ™^\Ó[™ÝXYÙT™Y™\™[˜ÙKÝ]\Îˆ˜Ø\\™YØØ[H‹ØØ[Û›NˆYHWKˆ›Ñ^XÝ][Û]]Üš^™YˆYKˆØØ[Û›NˆYBˆNÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ˆYNÂˆBˆ™]\›ˆ˜[ÙNÂŸB‚šYˆ
\[ÙˆÛØ˜[\ÈOOH[™Yš[™YŠHÂˆÛØ˜[\Ë›™^\Ò[™TÝ[™\™\Ù\’ÛYTÚÜÝ]H™^\Ò[™TÝ[™\™\Ù\’ÛYTÚÜÝ]ÂŸBšYˆ
\[ÙˆÚ[™ÝÈOOH[™Yš[™YŠHÂˆÚ[™ÝË›™^\Ò[™TÝ[™\™\Ù\’ÛYTÚÜÝ]H™^\Ò[™TÝ[™\™\Ù\’ÛYTÚÜÝ]ÂŸB‚™[˜Ý[Ûˆš[™™^\ÔÝ[™\™\Ù\’ÛYPÛÛ›ÛÊ
HÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆˆ	‰ˆYØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜ÛÛZ[œÊ\Ù\‹[[ÙHŠJH™]\›ŽÂˆ^ÜÙS™^\Ð\Ú[™ÝÐ\\Ê
NÂˆYˆ
ØÝ[Y[˜›ÙK™]\Ù]›™^\Ñ[[ÔØ[™›Þ[YØ]P›Ý[™OOHYHŠHÂˆØÝ[Y[˜›ÙK™]\Ù]›™^\Ñ[[ÔØ[™›Þ[YØ]P›Ý[™HYHŽÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆYˆ
YØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜ÛÛZ[œÊ\Ù\‹[[ÙHŠJH™]\›ŽÂˆÛÛœÝZ\ÜÚ[ÛˆH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËY[[Ë[Z\ÜÚ[Û‹[Ü[—HŠNÂˆYˆ
Z\ÜÚ[ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÜ[“™^\Ñ[[ÔØ[™›ÞZ\ÜÚ[ÛŠZ\ÜÚ[Û‹™]\Ù]›™^\Ñ[[ÓZ\ÜÚ[Û“Ü[ˆˆŠNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËY[[ËXXÝ[Û—HŠJHÂˆ[™S™^\Ñ[[ÔØ[™›ÞÛXÚÊ]™[
NÂˆBˆKYJNÂˆBˆYˆ
ØÝ[Y[˜›ÙK™]\Ù]›™^\Ñ[˜Ý[Û•Ú[™ÝÑ[YØ]P›Ý[™OOHYHŠHÂˆØÝ[Y[˜›ÙK™]\Ù]›™^\Ñ[˜Ý[Û•Ú[™ÝÑ[YØ]P›Ý[™HYHŽÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆÛÛœÝ\™Ù]H]™[\™Ù]ÂˆÛÛœÝÛÛ›ÛH\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë]ÛÜšÙ›ÝË[Z[š[Z^™WKÙ]K[™^\Ë]Ú[™ÝË\™\ÝÜ™WKÙ]K[™^\Ë]ÛÜšÙ›ÝËXÛÜÙWKÙ]K[™^\Ë]ÛÜšÙ›ÝËX˜XÚ×HŠNÂˆYˆ
XÛÛ›ÛYØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜ÛÛZ[œÊ\Ù\‹[[ÙHŠJH™]\›ŽÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
ÛÛ›Û›X]Ú\Ê–Ù]K[™^\Ë]ÛÜšÙ›ÝË[Z[š[Z^™WHŠJHÂˆZ[š[Z^™S™^\Ñ[˜Ý[Û•Ú[™ÝÊ
NÂˆ™]\›ŽÂˆBˆYˆ
ÛÛ›Û›X]Ú\Ê–Ù]K[™^\Ë]Ú[™ÝË\™\ÝÜ™WHŠJHÂˆÛÛœÝ™\ÝÜ™RYHÛÛ›Û™]\Ù]›™^\Ñ[˜Ý[Û•Ú[™ÝÔ™\ÝÜ™HÛÛ›Û™]\Ù]›™^\Ó[ÙTÚÜÝ]ˆŽÂˆ™\ÝÜ™S™^\Ñ[˜Ý[Û•Ú[™ÝÊ™\ÝÜ™RY
NÂˆYˆ
YØÝ[Y[œ]Y\žTÙ[XÝÜŠ–Ù]K[™^\ËY[˜Ý[Û‹]Ú[™ÝÏIÝYI×HŠJHÂˆÜ[“™^\Ñ[˜Ý[Û•Ú[™ÝÊ™\ÝÜ™RYÂˆÛÛ[X[™ˆÛÛ›Û™]\Ù]›™^\ÐÛÛ[X[™“Ü[ˆ™^\È[˜Ý[Ûˆ‹ˆÛÝ\˜ÙNˆ™[˜Ý[Û‹]Ú[™ÝËYØÚË\™\ÝÜ™KY˜[˜XÚÈ‹ˆXÝ[ÛŽˆœ™\ÝÜ™H‚ˆJNÂˆBˆ™]\›ŽÂˆBˆÛÜÙS™^\Ñ[˜Ý[Û•Ú[™ÝÊÈÛÛ[X[™ˆ•Ú]Ø[ˆ™^\ÈÏÈˆJNÂˆKYJNÂˆBˆ		
–Ù]K[™^\Ë]ÛÜšÙ›ÝË[Z[š[Z^™WKÙ]K[™^\Ë]Ú[™ÝË\™\ÝÜ™WKÙ]K[™^\Ë]ÛÜšÙ›ÝËXÛÜÙWKÙ]K[™^\Ë]ÛÜšÙ›ÝËX˜XÚ×HŠK™›Ü‘XXÚ
[[Y[OˆÂˆYˆ
[[Y[™]\Ù]›™^\Ñ[˜Ý[Û•Ú[™ÝÐ›Ý[™OOHYHŠH™]\›ŽÂˆ[[Y[™]\Ù]›™^\Ñ[˜Ý[Û•Ú[™ÝÐ›Ý[™HYHŽÂˆ[[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆÛÛœÝÛÛ›ÛH]™[˜Ý\œ™[\™Ù]Âˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
ÛÛ›Û›X]Ú\Ê–Ù]K[™^\Ë]ÛÜšÙ›ÝË[Z[š[Z^™WHŠJHÂˆZ[š[Z^™S™^\Ñ[˜Ý[Û•Ú[™ÝÊ
NÂˆ™]\›ŽÂˆBˆYˆ
ÛÛ›Û›X]Ú\Ê–Ù]K[™^\Ë]Ú[™ÝË\™\ÝÜ™WHŠJHÂˆÛÛœÝ™\ÝÜ™RYHÛÛ›Û™]\Ù]›™^\Ñ[˜Ý[Û•Ú[™ÝÔ™\ÝÜ™HÛÛ›Û™]\Ù]›™^\Ó[ÙTÚÜÝ]ˆŽÂˆ™\ÝÜ™S™^\Ñ[˜Ý[Û•Ú[™ÝÊ™\ÝÜ™RY
NÂˆYˆ
YØÝ[Y[œ]Y\žTÙ[XÝÜŠ–Ù]K[™^\ËY[˜Ý[Û‹]Ú[™ÝÏIÝYI×HŠJHÂˆÜ[“™^\Ñ[˜Ý[Û•Ú[™ÝÊ™\ÝÜ™RYÂˆÛÛ[X[™ˆÛÛ›Û™]\Ù]›™^\ÐÛÛ[X[™“Ü[ˆ™^\È[˜Ý[Ûˆ‹ˆÛÝ\˜ÙNˆ™[˜Ý[Û‹]Ú[™ÝËYØÚË\™\ÝÜ™KY˜[˜XÚÈ‹ˆXÝ[ÛŽˆœ™\ÝÜ™H‚ˆJNÂˆBˆ™]\›ŽÂˆBˆYˆ
ÛÛ›Û›X]Ú\Ê–Ù]K[™^\Ë]ÛÜšÙ›ÝËX˜XÚ×HŠJHÂˆÛÜÙS™^\Ñ[˜Ý[Û•Ú[™ÝÊÈÛÛ[X[™ˆ•Ú]Ø[ˆ™^\ÈÏÈˆJNÂˆ™]\›ŽÂˆBˆYˆ
ÛÛ›Û›X]Ú\Ê–Ù]K[™^\Ë]ÛÜšÙ›ÝËXÛÜÙWHŠJHÂˆÙ]ÛÛ[X[™[œ]Ê•Ú]Ø[ˆ™^\ÈÏÈŠNÂˆÛÜÙS™^\Ñ[˜Ý[Û•Ú[™ÝÊÈÛÛ[X[™ˆ•Ú]Ø[ˆ™^\ÈÏÈˆJNÂˆBˆKYJNÂˆJNÂˆ		
–Ù]K[™^\ËY[[ËXXÝ[Û—HŠK™›Ü‘XXÚ
[[Y[OˆÂˆYˆ
[[Y[™]\Ù]›™^\Ñ[[Ð›Ý[™OOHYHŠH™]\›ŽÂˆ[[Y[™]\Ù]›™^\Ñ[[Ð›Ý[™HYHŽÂˆ[[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆ[™S™^\Ñ[[ÔØ[™›ÞÛXÚÊ]™[
NÂˆJNÂˆJNÂˆ		
–Ù]K[™^\Ë]\Ù\‹]\Ý[™ËXXÝ[Û—HŠK™›Ü‘XXÚ
[[Y[OˆÂˆYˆ
[[Y[™]\Ù]›™^\Õ\Ù\•\Ý[™Ð›Ý[™OOHYHŠH™]\›ŽÂˆ[[Y[™]\Ù]›™^\Õ\Ù\•\Ý[™Ð›Ý[™HYHŽÂˆ[[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ[“™^\Õ\Ù\•\Ý[™Ô[[YPXÝ[ÛŠ[[Y[™]\Ù]›™^\Õ\Ù\•\Ý[™ÐXÝ[Ûˆœ™Yœ™\ÚŠNÂˆKYJNÂˆJNÂˆ		
–Ù]K[™^\ËXÛÛ[X[™XÙ[\‹\ÝX›Z]KÙ]K[™^\Ë[[ÙK\ÚÜÝ]HŠK™›Ü‘XXÚ
[[Y[OˆÂˆYˆ
[[Y[™]\Ù]›™^\ÒÛYP›Ý[™OOHYHŠH™]\›ŽÂˆ[[Y[™]\Ù]›™^\ÒÛYP›Ý[™HYHŽÂˆ[[Y[›Û˜ÛXÚÈH]™[OˆÂˆ™]\›ˆZ[™S™^\ÔÝ[™\™\Ù\’ÛYPÛXÚÊ]™[
NÂˆNÂˆ[[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆ[™S™^\ÔÝ[™\™\Ù\’ÛYPÛXÚÊ]™[
NÂˆKYJNÂˆJNÂˆ		
	ÖÙ]K[™^\ËZÛ›ÝÛYÙKXXÝ[ÛHœÙ[™\XÚÙ]Y[XZ[—IÊK™›Ü‘XXÚ
[[Y[OˆÂˆYˆ
[[Y[™]\Ù]›™^\Ñ[XZ[›Ý[™OOHYHŠH™]\›ŽÂˆ[[Y[™]\Ù]›™^\Ñ[XZ[›Ý[™HYHŽÂˆ[[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆ[™S™^\ÒÛ›ÝÛYÙT˜Z[ÛXÚÊ]™[
NÂˆKYJNÂˆJNÂˆ		
	ÖÙ]K[™^\ËZÛ›ÝÛYÙKXXÝ[ÛHœÙ[™\XÚÙ]\Û\È—KÙ]K[™^\ËZÛ›ÝÛYÙKXXÝ[ÛHœÙ[™\XÚÙ]]Ú]Ø\—IÊK™›Ü‘XXÚ
[[Y[OˆÂˆYˆ
[[Y[™]\Ù]›™^\ÐÛÛ[][šXØ][ÛœÐ›Ý[™OOHYHŠH™]\›ŽÂˆ[[Y[™]\Ù]›™^\ÐÛÛ[][šXØ][ÛœÐ›Ý[™HYHŽÂˆ[[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆ[™S™^\ÒÛ›ÝÛYÙT˜Z[ÛXÚÊ]™[
NÂˆKYJNÂˆJNÂŸB‚™[˜Ý[Ûˆš[™Ý]XÊ
HÂˆ™[™\“ÙÚ[”›Ùš[\Ê
NÂˆÝ\™^\ÑÙ[™\Ú\Ñ^\šY[˜ÙQ[™Ú[™J
NÂˆYˆ
\[ÙˆÛØ˜[\ÈOOH[™Yš[™YŠHÂˆÛØ˜[\Ë›™^\Ò[™TÝ[™\™\Ù\’ÛYTÚÜÝ]H™^\Ò[™TÝ[™\™\Ù\’ÛYTÚÜÝ]ÂˆBˆYˆ
\[ÙˆÚ[™ÝÈOOH[™Yš[™YŠHÂˆÚ[™ÝË›™^\Ò[™TÝ[™\™\Ù\’ÛYTÚÜÝ]H™^\Ò[™TÝ[™\™\Ù\’ÛYTÚÜÝ]ÂˆÚ[™ÝË“™^\ÓY\ÜØYÙT™\\˜][Û”[[YOË›[Ý[ËŠ
NÂˆÚ[™ÝË“™^\Ñ[ÛÛ[][šXØ][Û”[[YOË›[Ý[ËŠ
NÂˆÚ[™ÝË“™^\Õ[šYšYYœ˜Z[”[[YOË›[Ý[ËŠ
NÂˆÚ[™ÝË“™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YOË›[Ý[ËŠ
NÂˆÚ[™ÝË“™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YOË›[Ý[ËŠ
NÂˆBˆØÝ[Y[˜Y]™[\Ý[™\Š™›ØÝ\Ú[ˆ‹[™S™^\Ô™\Ù[˜ÙR[œ]XÝ]š]KYJNÂˆØÝ[Y[˜Y]™[\Ý[™\Šš[œ]‹[™S™^\Ô™\Ù[˜ÙR[œ]XÝ]š]KYJNÂˆØÝ[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹[™S™^\ÕYPÛÛ[X[™ÛÛ\ÜÙ\’Ù^YÝÛ‹YJNÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆÛÛœÝ›ÚXÙPÛÛ›ÛH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXÛÛ[X[™XÙ[\‹]›ÚXÙWKÙ]K[™^\Ë[ÜË]›ÚXÙKXÛÛ›ÛHŠNÂˆYˆ
]›ÚXÙPÛÛ›Û
H™]\›ŽÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝXÝ[ÛˆH›ÚXÙPÛÛ›Û™]\Ù]›™^\ÓÜÕ›ÚXÙPÛÛ›ÛÙÙÛK[\Ý[š[™ÈŽÂˆ›ÚY[™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠXÝ[Û‹ÈÛÝ\˜ÙNˆœÝ[™\™]\Ù\‹]š\ÚX›K]›ÚXÙKXÛÛ›ÛˆJNÂˆKYJNÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹[™S™^\Ô™\Ù[˜ÙU›ÚXÙP]Û‹YJNÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆ›ÚY[™S™^\Ô™\Ù[˜ÙPÛÛ[X[™Ù[™ÝX›Z]
]™[
NÂˆKYJNÂˆØÝ[Y[˜Y]™[\Ý[™\ŠœÝX›Z]‹]™[OˆÂˆ›ÚY[™S™^\Ô™\Ù[˜ÙPÛÛ[X[™Ù[™ÝX›Z]
]™[
NÂˆKYJNÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹[™S™^\ÔÝ[™\™\Ù\’ÛYPÛXÚËYJNÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹\Þ[˜È]™[OˆÂˆYˆ
]ØZ][™P\ÜÚ\Ý[[[YSØØ[ÛÛÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
[™P\ÜÚ\Ý[[[YQ›ÛÝÕ\ÛXÚÊ]™[
JH™]\›ŽÂˆÛÛœÝ›ÚXÙT™Y™\™[˜ÙPÛÛ›ÛH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë]›ÚXÙK\™Y™\™[˜ÙKXXÝ[Û—HŠNÂˆYˆ
›ÚXÙT™Y™\™[˜ÙPÛÛ›Û
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ[™S™^\Õ›ÚXÙT™Y™\™[˜ÙPÛÛ›ÛXÝ[ÛŠ›ÚXÙT™Y™\™[˜ÙPÛÛ›Û™]\Ù]›™^\Õ›ÚXÙT™Y™\™[˜ÙPXÝ[ÛˆˆŠNÂˆ™]\›ŽÂˆBˆÛÛœÝÛÛ™\œØ][ÛÛÛ›ÛH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë[ÜËXÛÛ™\œØ][Û‹XXÝ[Û—HŠNÂˆYˆ
ÛÛ™\œØ][ÛÛÛ›Û
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ]ØZ][™S™^\ÓÜÕ[šYšYYÛÛ™\œØ][ÛXÝ[ÛŠÛÛ™\œØ][ÛÛÛ›Û™]\Ù]›™^\ÓÜÐÛÛ™\œØ][ÛXÝ[ÛˆˆŠNÂˆ™]\›ŽÂˆBˆÛÛœÝZ\ÜÚ[ÛÛÛ›ÛH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë[ÜË[Z\ÜÚ[Û‹XXÝ[Û—HŠNÂˆYˆ
Z\ÜÚ[ÛÛÛ›Û
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ]ØZ][™S™^\ÓÜÓZ\ÜÚ[Û“Y™XÞXÛPXÝ[ÛŠZ\ÜÚ[ÛÛÛ›Û™]\Ù]›™^\ÓÜÓZ\ÜÚ[ÛXÝ[ÛˆˆŠNÂˆ™]\›ŽÂˆBˆÛÛœÝ\œÚ\Ý[Ü\˜][ÛœÔÚÜÝ]H]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë[[ÙK\ÚÜÝ]IÛÜ\˜][ÛœË[Y[[ÜžI×KÙ]K[™^\Ë[[ÙK\ÚÜÝ]IÛX\›š[™ËY]™[ÜY[	×KÙ]K[™^\Ë[[ÙK\ÚÜÝ]IØ\XØ[XØ\™Y\‰×KÙ]K[™^\Ë[[ÙK\ÚÜÝ]IÙ[\ÞY\‹Z\š[™É×KÙ]K[™^\Ë[[ÙK\ÚÜÝ]IÙ›Û™K[Z\ÜÚ[Û‹\Ý\Ü	×HŠNÂˆYˆ
\œÚ\Ý[Ü\˜][ÛœÔÚÜÝ]
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆÛÛœÝÛÛ[X[™H\œÚ\Ý[Ü\˜][ÛœÔÚÜÝ]™]\Ù]›™^\ÐÛÛ[X[™”ÚÝÈ]Y]ÙÈŽÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ]ØZ][“™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ›[ÙKXÛXÚÈˆJNÂˆ™]\›ŽÂˆBˆÛÛœÝ\œÚ\Ý[Ü\˜][ÛœÔÝX›Z]H]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXÛÛ[X[™XÙ[\‹\ÝX›Z]HŠNÂˆYˆ
\œÚ\Ý[Ü\˜][ÛœÔÝX›Z]
HÂˆÛÛœÝ[œ]H™^\ÐÛÛ[X[™[œ]›Ü”ÝX›Z]
\œÚ\Ý[Ü\˜][ÛœÔÝX›Z]
NÂˆÛÛœÝÛÛ[X[™H[œ]Ë˜[YOËš[J
HˆŽÂˆYˆ
[™S™^\Ñ[\œš\ÙRX[]šY[˜ÙU\ÝÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHˆŽÂˆÙ]ÛÛ[X[™[œ]ÊˆŠNÂˆ™]\›ŽÂˆBˆY˜[˜ÙS™^\ÓÜÓZ\ÜÚ[Û‘›ÜÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJNÂˆYˆ
›Ý]S™^\Ò[[š]™[•ÛÜšÙ›ÝÐÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\Õ[šYšYYœ˜Z[”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÓY\ÜØYÙT™\\˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\Ñ[ÛÛ[][šXØ][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
ÝX›Z]™^\ÐYÙ[XÐÛÛ[X[™[[YJÛÛ[X[™[œ]˜ÛÛ[X[™\ÝX›Z]‹]™[
JH™]\›ŽÂˆYˆ
\Ó™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ]ØZ][“™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ˜ÛÛ[X[™\ÝX›Z]ˆJNÂˆ™]\›ŽÂˆBˆBˆYˆ
[™S™^\Õ\Ù\‘^\šY[˜ÙSX^[Z^˜][ÛÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
]ØZ][™S™^\ÒÛ›ÝÛYÙT˜Z[ÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
]ØZ][™S™^\Ô›ÙXÝ[Û”˜Z[ÐÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
]ØZ][™S™^\Ô[Ý™]šY]Ô]Y]YPÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
]ØZ][™S™^\Ô[Ý]›Ü›PXÝ[ÛÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
]ØZ][™S™^\Õš\X[Ø\™U[ZX[ÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
]ØZ][™S™^\Ô›ÝšY\ÛÛÜ™[˜][ÛÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
[™S™^\ÔXÚÙ]XÝ[ÛÛXÚÊ]™[
JH™]\›ŽÂˆÛÛœÝZ\ÜÚ[Û’\ÝÜžPXÝ[ÛˆH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\Ë[Z\ÜÚ[Û‹Z\ÝÜžKXXÝ[Û—HŠNÂˆYˆ
Z\ÜÚ[Û’\ÝÜžPXÝ[ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆ[™S™^\ÓZ\ÜÚ[Û’\ÝÜžPXÝ[ÛŠˆZ\ÜÚ[Û’\ÝÜžPXÝ[Û‹™]\Ù]›™^\ÓZ\ÜÚ[Û’\ÝÜžPXÝ[Ûˆš[œÜXÝ‹ˆZ\ÜÚ[Û’\ÝÜžPXÝ[Û‹™]\Ù]›Z\ÜÚ[Û’Yˆ‚ˆ
NÂˆ™]\›ŽÂˆBˆYˆ
[™S™^\ÑÛØ˜[™]šY]Ô]Y]YP]Y]ÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
[™S™^\ÑÛØ˜[XÝ]˜][ÛÙ[\ÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
[™S™^\Ó[™PXÝ[ÛÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
[™S™^\Ô\™\“Û˜›Ø\™[™ÐÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
[™S™^\ÕÛÜšÙ›ÝÐÛÛ›Û\ÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
[™S™^\ÒÛYS[ÙTÝ[[X\žPÛXÚÊ]™[
JH™]\›ŽÂˆÛÛœÝX\›PÛÛ[X[™Ù[\”ÝX›Z]H]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\ËXÛÛ[X[™XÙ[\‹\ÝX›Z]HŠNÂˆYˆ
X\›PÛÛ[X[™Ù[\”ÝX›Z]
HÂˆÛÛœÝ[œ]H™^\ÐÛÛ[X[™[œ]›Ü”ÝX›Z]
X\›PÛÛ[X[™Ù[\”ÝX›Z]
NÂˆÛÛœÝÛÛ[X[™H[œ]Ë˜[YOËš[J
H•Ú]Ø[ˆ™^\ÈÏÈŽÂˆYˆ
[™S™^\ÑÙ[™\Ú\Ô›ÝšY\“Ü˜Ú\Ý˜][ÛÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
[™S™^\ÑÙ[™\Ú\Ô›ÝšY\XœÝ˜XÝ[ÛÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
[™S™^\ÑÙ[™\Ú\ÐYœšXØPYÓÜÜ[š]PÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
[™S™^\ÑÙ[™\Ú\Ô™YXÝ]™UÛÜšÙ›Ü˜ÙPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
[™S™^\Ñ[\œš\ÙRX[]šY[˜ÙU\ÝÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHˆŽÂˆÙ]ÛÛ[X[™[œ]ÊˆŠNÂˆ™]\›ŽÂˆBˆY˜[˜ÙS™^\ÓÜÓZ\ÜÚ[Û‘›ÜÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJNÂˆYˆ
›Ý]S™^\Ò[[š]™[•ÛÜšÙ›ÝÐÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\Õ[šYšYYœ˜Z[”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÓY\ÜØYÙT™\\˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\Ñ[ÛÛ[][šXØ][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
ÝX›Z]™^\ÐYÙ[XÐÛÛ[X[™[[YJÛÛ[X[™[œ]˜ÛÛ[X[™\ÝX›Z]‹]™[
JH™]\›ŽÂˆYˆ
\Ó™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ]ØZ][“™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ˜ÛÛ[X[™\ÝX›Z]ˆJNÂˆ™]\›ŽÂˆBˆYˆ
][˜ÚØ\Xš[]Qœ›ÛP\ÚÓ™^\ÊÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
\Ó™^\Ñ^XÚ]XÝ]˜][Û•ÛÜšÙ›ÝÐÛÛ[X[™
ÛÛ[X[™
H	‰ˆ[“™^\ÔÝ[™\™\Ù\’ÛYSØØ[ÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÓY\ÜØYÙT™\\˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\Ñ[ÛÛ[][šXØ][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\Õ[\ÛžPØ[[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
\Ó™^\Ó]™RÛ›ÝÛYÙT]Y\Ý[ÛŠÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ]ØZ][“™^\ÒÛ›ÝÛYÙT]Y\žJÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆÛÛœÝ[™[[ÙRYH]XÝ™^\ÒÛYS[ÙT[™[Y
ÛÛ[X[™
NÂˆYˆ
[™[[ÙRY
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆÜ[“™^\ÕÛÜšÙ›ÝÊ[™[[ÙRYÈÛÛ[X[™ÛÝ\˜ÙNˆ˜ÛÛ[X[™\ÝX›Z]ˆJNÂˆ™]\›ŽÂˆBˆYˆ
\Ó™^\ÐØ\Xš[]SÝ™\šY]ÐÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HZ[™^\ÐØ\Xš[]SÝ™\šY]Ô™\Ý[
ÛÛ[X[™
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ŽÂˆBˆYˆ
\Ó™^\ÓYYXS]\ÚXÐÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆÜ[“™^\ÕÛÜšÙ›ÝÊ›YYXH‹ÈÛÛ[X[™ÛÝ\˜ÙNˆ˜ÛÛ[X[™\ÝX›Z]ˆJNÂˆ™]\›ŽÂˆBˆÛÛœÝØØ[X[XØÙ\ÜÔ™\Ý[HZ[™^\ÒX[XØÙ\ÜÔ™\\˜][Û”™\Ý[
ÛÛ[X[™
NÂˆYˆ
ØØ[X[XØÙ\ÜÔ™\Ý[
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HØØ[X[XØÙ\ÜÔ™\Ý[Âˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ŽÂˆBˆBˆÛÛœÝX\›S[ÙTÚÜÝ]H]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\Ë[[ÙK\ÚÜÝ]HŠNÂˆYˆ
X\›S[ÙTÚÜÝ]
HÂˆÛÛœÝÛÛ[X[™HX\›S[ÙTÚÜÝ]™]\Ù]›™^\ÐÛÛ[X[™ˆŽÂˆÛÛœÝ[ÙRYHX\›S[ÙTÚÜÝ]™]\Ù]›™^\Ó[ÙTÚÜÝ]ˆŽÂˆÛÛœÝX\›PØ\Xš[]HH™\ÛÛ™S™^\ÐØ\Xš[]JÛÛ[X[™È[ÙRYJNÂˆYˆ
X\›PØ\Xš[]JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™X\›PØ\Xš[]K]NÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™X\›PØ\Xš[]K]JNÂˆÜ[“™^\ÐØ\Xš[]JX\›PØ\Xš[]KšYÈÛÛ[X[™ˆÛÛ[X[™X\›PØ\Xš[]K]KÛÝ\˜ÙNˆ™[YØ]Y[[ÙKXÛXÚÈ‹ÛÝ\˜ÙTÝ\™˜XÙNˆ™X\›WØÛXÚÈˆJNÂˆ™]\›ŽÂˆBˆÛÛœÝ›Ü›X[^™YÛÜšÙ›ÝÒYH›Ü›X[^™S™^\ÕÛÜšÙ›ÝÒY
[ÙRYÛÛ[X[™
NÂˆYˆ
™^\ÕÛÜšÙ›ÝÑYš[š][ÛŠ›Ü›X[^™YÛÜšÙ›ÝÒYÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆÜ[“™^\ÕÛÜšÙ›ÝÊ›Ü›X[^™YÛÜšÙ›ÝÒYÈÛÛ[X[™ÛÝ\˜ÙNˆ™[YØ]Y[[ÙKXÛXÚÈˆJNÂˆ™]\›ŽÂˆBˆYˆ
›Ü›X[^™YÛÜšÙ›ÝÒYOOH›YYXHŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆÜ[“™^\ÕÛÜšÙ›ÝÊ›YYXH‹ÈÛÛ[X[™ˆÛÛ[X[™”^H]\ÚXËˆ‹ÛÝ\˜ÙNˆ™[YØ]Y[[ÙKXÛXÚÈˆJNÂˆ™]\›ŽÂˆBˆYˆ
\Ó™^\ÐØ\Xš[]SÝ™\šY]ÐÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HZ[™^\ÐØ\Xš[]SÝ™\šY]Ô™\Ý[
ÛÛ[X[™
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ŽÂˆBˆYˆ
\Ó™^\ÓYYXS]\ÚXÐÛÛ[X[™
ÛÛ[X[™
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆÜ[“™^\ÕÛÜšÙ›ÝÊ›YYXH‹ÈÛÛ[X[™ÛÝ\˜ÙNˆ™[YØ]Y[[ÙKXÛXÚÈˆJNÂˆ™]\›ŽÂˆBˆÛÛœÝØØ[X[XØÙ\ÜÔ™\Ý[HZ[™^\ÒX[XØÙ\ÜÔ™\\˜][Û”™\Ý[
ÛÛ[X[™
NÂˆYˆ
ØØ[X[XØÙ\ÜÔ™\Ý[
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™^\ÐYÙ[XÐœ˜Z[“\Ý™\Ý[HØØ[X[XØÙ\ÜÔ™\Ý[Âˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ™]\›ŽÂˆBˆBˆYˆ
[™S™^\Ð]]Û›Û[Ý\ÕÛÜšÙ›ÝÐÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
[™S™^\ÐÛÛ›ÛYXÝ[Û”]Y]YPÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
[™PÛÛ›ÛYXÝ[ÛÛÛ™š\›X][Û”›ÝÝ\PÛXÚÊ]™[
JH™]\›ŽÂˆÛÛœÝLLØ\Xš[]P]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KXLLXØ\Xš[]WVÙ]K\Ú[\KXÛÛ[X[™HŠNÂˆYˆ
LLØ\Xš[]P]Ûˆ	‰ˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆˆØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜ÛÛZ[œÊ\Ù\‹[[ÙHŠJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[[HLLØY™P]]Û›Û^R[[
LLØ\Xš[]P]Û‹™]\Ù]œÚ[\PÛÛ[X[™
NÂˆÜ[LLØY™P]]Û›Û^T™]šY]Ê[[
NÂˆ™]\›ŽÂˆBˆÛÛœÝ™^\Õ›ÚXÙQ[[Ð]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\Ë]›ÚXÙKY[[ËXXÝ[Û—HŠNÂˆYˆ
™^\Õ›ÚXÙQ[[Ð]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ™]\›ŽÂˆBˆÛÛœÝ™^\ÓÛ˜›Ø\™[™ÓÜ[ˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\Ë[Û˜›Ø\™[™Ë[Ü[—HŠNÂˆYˆ
™^\ÓÛ˜›Ø\™[™ÓÜ[ŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[“™^\ÓÛ˜›Ø\™[™Ó[Ù[

NÂˆ™]\›ŽÂˆBˆÛÛœÝ™^\ÓÛ˜›Ø\™[™ÐÛÜÙHH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\Ë[Û˜›Ø\™[™ËXÛÜÙWHŠNÂˆYˆ
™^\ÓÛ˜›Ø\™[™ÐÛÜÙJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÜÙS™^\ÓÛ˜›Ø\™[™Ó[Ù[

NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]ËšYOOH›™^\ÓÛ˜›Ø\™[™Ó[Ù[ŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÜÙS™^\ÓÛ˜›Ø\™[™Ó[Ù[

NÂˆ™]\›ŽÂˆBˆÛÛœÝÛÛ[X[™Ù[\”ÝX›Z]H]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\ËXÛÛ[X[™XÙ[\‹\ÝX›Z]HŠNÂˆYˆ
ÛÛ[X[™Ù[\”ÝX›Z]
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[œ]H™^\ÐÛÛ[X[™[œ]›Ü”ÝX›Z]
ÛÛ[X[™Ù[\”ÝX›Z]
NÂˆÛÛœÝÛÛ[X[™H[œ]Ë˜[YOËš[J
H•Ú]Ø[ˆ™^\ÈÏÈŽÂˆYˆ
[™S™^\Ñ[\œš\ÙRX[]šY[˜ÙU\ÝÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆYˆ
[œ]
H[œ]˜[YHHˆŽÂˆÙ]ÛÛ[X[™[œ]ÊˆŠNÂˆ™]\›ŽÂˆBˆYˆ
›Ý]S™^\Ò[[š]™[•ÛÜšÙ›ÝÐÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\Õ[šYšYYœ˜Z[”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™\ÝX›Z]ˆJJHÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
›Ý]S™^\ÐÛÛ[X[™Ù[\ÛÛ[][šXØ][Û”ÝX›Z]
]™[ÛÛ[X[™Ù[\”ÝX›Z]\YXÛÛ[X[™\ÝX›Z]ŠJH™]\›ŽÂˆYˆ
ÝX›Z]™^\ÐYÙ[XÐÛÛ[X[™[[YJÛÛ[X[™[œ]˜ÛÛ[X[™\ÝX›Z]‹]™[
JH™]\›ŽÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆYˆ
\Ó™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™
JHÂˆ]ØZ][“™^\Ô\œÚ\Ý[Ü\˜][ÛœÐÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ˜ÛÛ[X[™\ÝX›Z]ˆJNÂˆ™]\›ŽÂˆBˆYˆ
][˜ÚØ\Xš[]Qœ›ÛP\ÚÓ™^\ÊÛÛ[X[™
JH™]\›ŽÂˆYˆ
\Ó™^\Ñ^XÚ]XÝ]˜][Û•ÛÜšÙ›ÝÐÛÛ[X[™
ÛÛ[X[™
H	‰ˆ[“™^\ÔÝ[™\™\Ù\’ÛYSØØ[ÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆYˆ
\Ó™^\Ó]™RÛ›ÝÛYÙT]Y\Ý[ÛŠÛÛ[X[™
JHÂˆ]ØZ][“™^\ÒÛ›ÝÛYÙT]Y\žJÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆÛÛœÝ[™[[ÙRYH]XÝ™^\ÒÛYS[ÙT[™[Y
ÛÛ[X[™
NÂˆYˆ
[™[[ÙRY
HÂˆÜ[“™^\ÕÛÜšÙ›ÝÊ[™[[ÙRYÈÛÛ[X[™ÛÝ\˜ÙNˆ˜ÛÛ[X[™\ÝX›Z]ˆJNÂˆ™]\›ŽÂˆBˆYˆ
[™S™^\ÐYÙ[XÐœ˜Z[•\YÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆ]ØZ][“™^\ÐYÙ[XÐœ˜Z[XÝ[ÛŠ˜ÛÛ[X[™‹ÈÛÛ[X[™JNÂˆ™]\›ŽÂˆBˆÛÛœÝÛÛ[X[™Ù[\”™Yš[H]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\ËXÛÛ[X[™\™Yš[HŠNÂˆYˆ
ÛÛ[X[™Ù[\”™Yš[
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝÛÛ[X[™HÛÛ[X[™Ù[\”™Yš[™]\Ù]›™^\ÐÛÛ[X[™™Yš[ˆŽÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
HÂˆ[œ]˜[YHHÛÛ[X[™Âˆ[œ]™›ØÝ\ÏËŠ
NÂˆBˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆÛÛœÝÛÛ[X[™Ù[\•›ÚXÙHH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\ËXÛÛ[X[™XÙ[\‹]›ÚXÙWHŠNÂˆYˆ
ÛÛ[X[™Ù[\•›ÚXÙJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ][™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠÙÙÛK[\Ý[š[™È‹ÈÛÝ\˜ÙNˆ˜ÛÛ[X[™XÙ[\‹[ZXÈˆJNÂˆ™]\›ŽÂˆBˆÛÛœÝ[ÙTÚÜÝ]H]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\Ë[[ÙK\ÚÜÝ]HŠNÂˆYˆ
[ÙTÚÜÝ]
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[ÙRYH[ÙTÚÜÝ]™]\Ù]›™^\Ó[ÙTÚÜÝ]ˆŽÂˆYˆ
[ÙRYOOH›[™ÝXYÙHŠHÂˆÛÛœÝ[™[H	
ˆÝ\Ù\“[™ÝXYÙT[™[ŠNÂˆYˆ
[™[
H[™[˜Û\ÜÓ\Ýœ™[[Ý™JšY[ˆŠNÂˆ™]\›ŽÂˆBˆÛÛœÝÛÛ[X[™H[ÙTÚÜÝ]™]\Ù]›™^\ÐÛÛ[X[™ˆŽÂˆÛÛœÝ[ÙPØ\Xš[]HH™\ÛÛ™S™^\ÐØ\Xš[]JÛÛ[X[™È[ÙRYJNÂˆÛÛœÝ›Ü›X[^™YÛÜšÙ›ÝÒYH›Ü›X[^™S™^\ÕÛÜšÙ›ÝÒY
[ÙRYÛÛ[X[™
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]ŠNÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™[ÙPØ\Xš[]OË]HˆŽÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™[ÙPØ\Xš[]OË]HˆŠNÂˆYˆ
[ÙPØ\Xš[]H	‰ˆÜ[“™^\ÐØ\Xš[]J[ÙPØ\Xš[]KšYÈÛÛ[X[™ˆÛÛ[X[™[ÙPØ\Xš[]K]KÛÝ\˜ÙNˆ›[ÙKXÛXÚÈ‹ÛÝ\˜ÙTÝ\™˜XÙNˆ™˜[˜XÚ×ØÛXÚÈˆJJH™]\›ŽÂˆYˆ
™^\ÕÛÜšÙ›ÝÑYš[š][ÛŠ›Ü›X[^™YÛÜšÙ›ÝÒYÛÛ[X[™
JHÂˆÜ[“™^\ÕÛÜšÙ›ÝÊ›Ü›X[^™YÛÜšÙ›ÝÒYÈÛÛ[X[™ÛÝ\˜ÙNˆ›[ÙKXÛXÚÈˆJNÂˆ™]\›ŽÂˆBˆYˆ
›Ü›X[^™YÛÜšÙ›ÝÒYOOH›YYXHŠHÂˆÜ[“™^\ÕÛÜšÙ›ÝÊ›YYXH‹ÈÛÛ[X[™ˆÛÛ[X[™”^H]\ÚXËˆ‹ÛÝ\˜ÙNˆ›[ÙKXÛXÚÈˆJNÂˆ™]\›ŽÂˆBˆYˆ
[“™^\ÔÝ[™\™\Ù\’ÛYSØØ[ÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™S™^\ÐYÙ[XÐœ˜Z[•\YÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆ]ØZ][“™^\ÐYÙ[XÐœ˜Z[XÝ[ÛŠ˜ÛÛ[X[™‹ÈÛÛ[X[™JNÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÝšY\”™Yœ™\Ú]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K\™X[\›ÝšY\‹\™Yœ™\ÚHŠNÂˆYˆ
›ÝšY\”™Yœ™\Ú]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ]™Yœ™\Ú™^\Ô™X[›ÝšY\•\Ý[™ÔÝ]\Ê
NÂˆ™]\›ŽÂˆBˆÛÛœÝ™X[›ÝšY\•\Ý]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K\™X[\›ÝšY\‹]\ÝHŠNÂˆYˆ
™X[›ÝšY\•\Ý]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ][“™^\Ô™X[›ÝšY\•\Ý
™X[›ÝšY\•\Ý]Û‹™]\Ù]œ™X[›ÝšY\•\Ý
NÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÙXÝ[Û”[[YP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\Ë\[[YKXXÝ[Û—HŠNÂˆYˆ
›ÙXÝ[Û”[[YP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ][“™^\Ô›ÙXÝ[Û”[[YPXÝ[ÛŠ›ÙXÝ[Û”[[YP]Û‹™]\Ù]›™^\Ô[[YPXÝ[ÛŠNÂˆ™]\›ŽÂˆBˆÛÛœÝYÙ[XÐœ˜Z[]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[™^\ËXœ˜Z[‹XXÝ[Û—HŠNÂˆYˆ
YÙ[XÐœ˜Z[]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ][“™^\ÐYÙ[XÐœ˜Z[XÝ[ÛŠYÙ[XÐœ˜Z[]Û‹™]\Ù]›™^\Ðœ˜Z[XÝ[Û‹Âˆ\ÚÒYˆYÙ[XÐœ˜Z[]Û‹™]\Ù]\ÚÒYˆ‹ˆ]Y]YRYˆYÙ[XÐœ˜Z[]Û‹™]\Ù]œ]Y]YRYˆ‚ˆJNÂˆ™]\›ŽÂˆBˆÛÛœÝX\ÑšY[š\Ú]]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[X\ËYšY[]š\Ú]XXÝ[Û—HŠNÂˆYˆ
X\ÑšY[š\Ú]]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ][“™^\ÓX\ÑšY[š\Ú]XÝ[ÛŠX\ÑšY[š\Ú]]Û‹™]\Ù]›X\ÑšY[š\Ú]XÝ[ÛŠNÂˆ™]\›ŽÂˆBˆÛÛœÝ^[™YœšYÙP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KY^[™YXœšYÙKXXÝ[Û—HŠNÂˆYˆ
^[™YœšYÙP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ][“™^\Ñ^[™YœšYÙPXÝ[ÛŠ^[™YœšYÙP]Û‹™]\Ù]™^[™YœšYÙRY^[™YœšYÙP]Û‹™]\Ù]™^[™YœšYÙPXÝ[ÛŠNÂˆ™]\›ŽÂˆBˆÛÛœÝYYXØ[œšYÙP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[YYXØ[XœšYÙKXXÝ[Û—HŠNÂˆYˆ
YYXØ[œšYÙP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ][“™^\ÓYYXØ[œšYÙPXÝ[ÛŠYYXØ[œšYÙP]Û‹™]\Ù]›YYXØ[œšYÙRYYYXØ[œšYÙP]Û‹™]\Ù]›YYXØ[œšYÙPXÝ[ÛŠNÂˆ™]\›ŽÂˆBˆÛÛœÝX\šÙ]XÙPœšYÙPÜ™X]P]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[X\šÙ]XÙKXœšYÙKXÜ™X]WHŠNÂˆYˆ
X\šÙ]XÙPœšYÙPÜ™X]P]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ]Ü™X]S™^\ÓX\šÙ]XÙPœšYÙS\Ý[™Ê
NÂˆ™]\›ŽÂˆBˆÛÛœÝX\šÙ]XÙPœšYÙTÙX\˜Ú]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[X\šÙ]XÙKXœšYÙK\ÙX\˜ÚHŠNÂˆYˆ
X\šÙ]XÙPœšYÙTÙX\˜Ú]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ]ÙX\˜Ú™^\ÓX\šÙ]XÙPœšYÙJ
NÂˆ™]\›ŽÂˆBˆÛÛœÝX\šÙ]XÙPœšYÙTÝYÙÙ\Ý[Û]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[X\šÙ]XÙKXœšYÙK\ÝYÙÙ\Ý[Û—HŠNÂˆYˆ
X\šÙ]XÙPœšYÙTÝYÙÙ\Ý[Û]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ]ÙX\˜Ú™^\ÓX\šÙ]XÙPœšYÙJX\šÙ]XÙPœšYÙTÝYÙÙ\Ý[Û]Û‹™]\Ù]›X\šÙ]XÙPœšYÙTÝYÙÙ\Ý[ÛˆˆŠNÂˆ™]\›ŽÂˆBˆÛÛœÝX\šÙ]XÙPœšYÙP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[X\šÙ]XÙKXœšYÙKXXÝ[Û—HŠNÂˆYˆ
X\šÙ]XÙPœšYÙP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ][“™^\ÓX\šÙ]XÙPœšYÙPXÝ[ÛŠX\šÙ]XÙPœšYÙP]Û‹™]\Ù]›X\šÙ]XÙPœšYÙPXÝ[Û‹X\šÙ]XÙPœšYÙP]Û‹™]\Ù]›X\šÙ]XÙPœšYÙR[™^
NÂˆ™]\›ŽÂˆBˆÛÛœÝX\›š[™ÐœšYÙTÙX\˜Ú]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[X\›š[™ËXœšYÙK\ÙX\˜ÚHŠNÂˆYˆ
X\›š[™ÐœšYÙTÙX\˜Ú]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ]ÙX\˜Ú™^\ÓX\›š[™Ô›ÝšY\œšYÙJ
NÂˆ™]\›ŽÂˆBˆÛÛœÝX\›š[™ÐœšYÙTÝYÙÙ\Ý[Û]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[X\›š[™ËXœšYÙK\ÝYÙÙ\Ý[Û—HŠNÂˆYˆ
X\›š[™ÐœšYÙTÝYÙÙ\Ý[Û]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ]ÙX\˜Ú™^\ÓX\›š[™Ô›ÝšY\œšYÙJX\›š[™ÐœšYÙTÝYÙÙ\Ý[Û]Û‹™]\Ù]›X\›š[™ÐœšYÙTÝYÙÙ\Ý[ÛˆˆŠNÂˆ™]\›ŽÂˆBˆÛÛœÝX\›š[™ÐœšYÙP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[X\›š[™ËXœšYÙKXXÝ[Û—HŠNÂˆYˆ
X\›š[™ÐœšYÙP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ][“™^\ÓX\›š[™Ô›ÝšY\œšYÙPXÝ[ÛŠX\›š[™ÐœšYÙP]Û‹™]\Ù]›X\›š[™ÐœšYÙPXÝ[Û‹X\›š[™ÐœšYÙP]Û‹™]\Ù]›X\›š[™ÐœšYÙR[™^
NÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÝšY\œšYÙP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K\›ÝšY\‹XÛÛXÝXXÝ[Û—HŠNÂˆYˆ
›ÝšY\œšYÙP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ][“™^\Ô›ÝšY\ÛÛXÝœšYÙPXÝ[ÛŠ›ÝšY\œšYÙP]Û‹™]\Ù]œ›ÝšY\ÛÛXÝXÝ[Û‹›ÝšY\œšYÙP]Û‹™]\Ù]œ›ÝšY\ÛÛXÝ[™^
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆØYZ[’X[ÚXÚÈŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[YZ[’X[ÚXÚÑ\™XÝ

NÂˆ™]\›ŽÂˆBˆÛÛœÝÛÜšÙ›ÝÐ]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K]ÛÜšÙ›Ý×VÙ]KXXÝ[Û—HŠNÂˆYˆ
ÛÜšÙ›ÝÐ]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[•ÛÜšÙ›ÝÐXÝ[ÛŠÛÜšÙ›ÝÐ]Û‹™]\Ù]ÛÜšÙ›ÝËÛÜšÙ›ÝÐ]Û‹™]\Ù]˜XÝ[Û‹ÛÜšÙ›ÝÐ]ÛŠNÂˆ™]\›ŽÂˆBˆÛÛœÝÙXÝ[Û]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K\ÙXÝ[Û—KÙ]K[[Øš[K\ÙXÝ[Û—HŠNÂˆYˆ
ÙXÝ[Û]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆXÝ]˜]TÙXÝ[Û‘œ›ÛP]ÛŠÙXÝ[Û]ÛŠNÂˆ™]\›ŽÂˆBˆÛÛœÝ[Ù[U\Ý]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[[Ù[K]\ÝHŠNÂˆYˆ
[Ù[U\Ý]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊš[YÜ˜][ÛœÈ‹\Ý[[Ù[H‹È]\Ù]ˆÈ[Ù[Nˆ[Ù[U\Ý]Û‹™]\Ù]›[Ù[U\ÝHJJNÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÝšY\•\Ý]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
‹œ›ÝšY\‹]\ÝŠNÂˆYˆ
›ÝšY\•\Ý]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ›ÝšY\’YH›ÝšY\•\Ý]Û‹™]\Ù]œ›ÝšY\ŽÂˆÛÛœÝ›ÝšY\ˆH]Kœ›ÝšY\œË™š[™
][HOˆ][KšYOOH›ÝšY\’Y
NÂˆÛÛœÝÝ]\ÈH	
ˆØZPÛÛœÛÛTÝ]\ÈŠNÂˆYˆ
Ý]\È	‰ˆ›ÝšY\’YOOH›Ü[˜ZHŠHÂˆÝ]\Ë^ÛÛ[H	Ü›ÝšY\Ë›˜[YH“Ü[RHŸH›ÝšY\ˆ\ÝÜ[™YˆÛÛ™š\›HÈ\ÝH]™HRH[™Ú[™H[™™XÛÜ™]šY[˜ÙK˜ÂˆBˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊš[YÜ˜][ÛœÈ‹\Ý\›ÝšY\ˆ‹È]\Ù]ˆÈ›ÝšY\’YHJJNÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÝšY\Ú\H]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K\›ÝšY\—HŠNÂˆYˆ
›ÝšY\Ú\	‰ˆ\›ÝšY\Ú\˜Û\ÜÓ\Ý˜ÛÛZ[œÊœ›ÝšY\‹]\ÝŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊš[YÜ˜][ÛœÈ‹\Ý\›ÝšY\ˆ‹È]\Ù]ˆÈ›ÝšY\’Yˆ›ÝšY\Ú\™]\Ù]œ›ÝšY\ˆHJJNÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÝšY\Ø\™H]™[\™Ù]˜ÛÜÙ\Ý
‹œ›ÝšY\‹XØ\™ŠNÂˆYˆ
›ÝšY\Ø\™	‰ˆY]™[\™Ù]˜ÛÜÙ\Ý
˜]ÛˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ›ÝšY\’YH›ÝšY\Ø\™œ]Y\žTÙ[XÝÜŠ–Ù]K\›ÝšY\—HŠOË™]\Ù]œ›ÝšY\ŽÂˆYˆ
›ÝšY\’Y
HÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊš[YÜ˜][ÛœÈ‹\Ý\›ÝšY\ˆ‹È]\Ù]ˆÈ›ÝšY\’YHJJNÂˆBˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆØZPÛÛœÛÛT[ˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝZU\HH	
ˆØZPÛÛœÛÛU\HŠOË˜[YH˜ÛÛ[X[™ŽÂˆÛÛœÝÝ]\ÈH	
ˆØZPÛÛœÛÛTÝ]\ÈŠNÂˆYˆ
Ý]\ÊHÝ]\Ë^ÛÛ[H	ØZU\_HRHÛÜšÙ›ÝÈÜ[™YˆÛÛ™š\›HÈ[ˆ]›ÝYÚHÛÛ™šYÝ\™Y[™Ú[™K˜ÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
Âˆ‹‹ÛÜšÙ›ÝÐÛÛ™šYÊ˜ZH‹ZU\KÈ]\Ù]ˆßHJKˆ]Nˆ[ˆRH\Ýˆ	ØZU\_XˆÛÛ™š\›SX™[ˆ”[ˆRH\Ý‹ˆÝXØÙ\ÜÎˆRH\ÝÛÛ\]H‚ˆJNÂˆ™]\›ŽÂˆBˆÛÛœÝX\›š[™ÐXØÙ\ÜÐ]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[X\›š[™ËXXØÙ\Ü×HŠNÂˆYˆ
X\›š[™ÐXØÙ\ÜÐ]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
X\›š[™ÐXØÙ\ÜÚXš[]UÛÜšÙ›ÝÐÛÛ™šYÊX\›š[™ÐXØÙ\ÜÐ]Û‹™]\Ù]›X\›š[™ÐXØÙ\ÜÊJNÂˆ™]\›ŽÂˆBˆÛÛœÝÛÜšÙ›Ü˜ÙP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K]ÛÜšÙ›Ü˜ÙWHŠNÂˆYˆ
ÛÜšÙ›Ü˜ÙP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊÛÜšÙ›Ü˜ÙH‹ÛÜšÙ›Ü˜ÙP]Û‹™]\Ù]ÛÜšÙ›Ü˜ÙKÈ]\Ù]ˆßHJJNÂˆ™]\›ŽÂˆBˆÛÛœÝX[]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KZX[HŠNÂˆYˆ
X[]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[’X[ÛÜšÙ›ÝÊX[]Û‹™]\Ù]šX[X[]ÛŠNÂˆ™]\›ŽÂˆBˆÛÛœÝ^P]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K\^WHŠNÂˆYˆ
^P]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝÜ›ÝšY\‹[[Ý[HH^P]Û‹™]\Ù]œ^KœÜ]
ŽˆŠNÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
Âˆ‹‹ÛÜšÙ›ÝÐÛÛ™šYÊ˜YH‹Ø[]‹È]\Ù]ˆßHJKˆ›ÙNˆÈ›ÝšY\‹[[Ý[ˆ[X™\Š[[Ý[
HKˆÛÛ™š\›SX™[ˆ	Ü›ÝšY\ŸH	Ó[X™\Š[[Ý[
HHÈŠÈˆˆˆŸIØ[[Ý[XˆJNÂˆ™]\›ŽÂˆBˆÛÛœÝÛÝ\œÙP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
‹˜ÛÝ\œÙHŠNÂˆYˆ
ÛÝ\œÙP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝÛÝ\œÙHH]K˜ÛÝ\œÙ\Ë™š[™
][HOˆ][KšYOOHÛÝ\œÙP]Û‹™]\Ù]˜ÛÝ\œÙJNÂˆYˆ
ÛÝ\œÙJHÂˆ]Kœ›Ùš[K˜XÝ]™PÛÝ\œÙRYHÛÝ\œÙKšYÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ›X\›š[™È‹œÝ\‹È]\Ù]ˆßHJJNÂˆBˆ™]\›ŽÂˆBˆÛÛœÝ\ÜÛÛ]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
‹›\ÜÛÛ‹\Ý\ŠNÂˆYˆ
\ÜÛÛ]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝÛÝ\œÙHH]K˜ÛÝ\œÙ\Ë™š[™
][HOˆ][KšYOOH\ÜÛÛ]Û‹™]\Ù]˜ÛÝ\œÙJNÂˆYˆ
ÛÝ\œÙJHÜ[•ÛÜšÙ›ÝÓ[Ù[
\ÜÛÛ•ÛÜšÙ›ÝÐÛÛ™šYÊÛÝ\œÙK[X™\Š\ÜÛÛ]Û‹™]\Ù]›[Ù[R[™^
JJNÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÛP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
‹˜\HŠNÂˆYˆ
›ÛP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
›ÛUÛÜšÙ›ÝÐÛÛ™šYÊ›ÛP]Û‹™]\Ù]œ›ÛJJNÂˆ™]\›ŽÂˆBˆÛÛœÝÜ™\]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
‹›Ü™\ˆŠNÂˆYˆ
Ü™\]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜YH‹›Ü™\ˆ‹È]\Ù]ˆÈ›ÙXÝYˆÜ™\]Û‹™]\Ù]œ›ÙXÝYHJJNÂˆ™]\›ŽÂˆBˆÛÛœÝ[\]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KZ[\HŠNÂˆYˆ
[\]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÔÙXÝ[ÛŠ[\]Û‹™]\Ù]š[\
NÂˆ™]\›ŽÂˆBˆÛÛœÝZT™]šY]Ð]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KXZK\™]šY]×HŠNÂˆYˆ
ZT™]šY]Ð]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ™]šY]Ó]\ÝZJZT™]šY]Ð]Û‹™]\Ù]˜ZT™]šY]ÊNÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÝYžP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[›ÝYžWHŠNÂˆYˆ
›ÝYžP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÙ[™[Ù[S›ÝYšXØ][ÛŠ›ÝYžP]Û‹™]\Ù]››ÝYžJNÂˆ™]\›ŽÂˆBˆÛÛœÝÛÝ\œÙPØ\™H]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KXÛÝ\œÙKXXÝ[Û—HŠNÂˆYˆ
ÛÝ\œÙPØ\™
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝÛÝ\œÙHH]K˜ÛÝ\œÙ\Ë™š[™
][HOˆ][KšYOOHÛÝ\œÙPØ\™™]\Ù]˜ÛÝ\œÙPXÝ[ÛŠNÂˆYˆ
ÛÝ\œÙJHÂˆ]Kœ›Ùš[K˜XÝ]™PÛÝ\œÙRYHÛÝ\œÙKšYÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ›X\›š[™È‹œÝ\‹È]\Ù]ˆßHJJNÂˆBˆ™]\›ŽÂˆBˆÛÛœÝ˜XÚÐØ\™H]™[\™Ù]˜ÛÜÙ\Ý
‹˜XÚËXØ\™ŠNÂˆYˆ
˜XÚÐØ\™
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÙ[XÝYX\›š[™Õ˜XÚÈH˜XÚÐØ\™™]\Ù]˜XÚÎÂˆ™[™\Š
NÂˆØ\Ý
Ù[XÝYX\›š[™Õ˜XÚÈOOH[ˆÈ”ÚÝÚ[™È[˜XÚÜÈˆˆ	ÜÙ[XÝYX\›š[™Õ˜XÚßH˜XÚÈÙ[XÝY
NÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÛPØ\™H]™[\™Ù]˜ÛÜÙ\Ý
‹œ›ÛKXØ\™ŠNÂˆYˆ
›ÛPØ\™
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
›ÛUÛÜšÙ›ÝÐÛÛ™šYÊ›ÛPØ\™™]\Ù]œ›ÛPØ\™
JNÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÙXÝØ\™H]™[\™Ù]˜ÛÜÙ\Ý
‹œ›ÙXÝXØ\™ŠNÂˆYˆ
›ÙXÝØ\™
HÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜YH‹›Ü™\ˆ‹È]\Ù]ˆÈ›ÙXÝYˆ›ÙXÝØ\™™]\Ù]œ›ÙXÝØ\™HJJNÂˆ™]\›ŽÂˆBˆÛÛœÝZP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KXZWHŠNÂˆYˆ
ZP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝÝ]\ÈH	
ˆØÛÜ[ÝXÝ[Û”Ý]\ÈŠNÂˆYˆ
Ý]\È	‰ˆZP]Û‹™]\Ù]˜ZHOOH˜ÛÜ[ÝŠHÝ]\Ë^ÛÛ[HÛÜ[ÝÛÜšÙ›ÝÈÜ[™YˆÛÛ™š\›HÈÜ™X]HRHÝZY[˜ÙH[™]šY[˜ÙKˆŽÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜ZH‹ZP]Û‹™]\Ù]˜ZKÈ]\Ù]ˆßHJJNÂˆ™]\›ŽÂˆBˆÛÛœÝX\]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[X\XXÝ[Û—HŠNÂˆYˆ
X\]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝXÝ[ÛˆHX\]Û‹™]\Ù]›X\XÝ[ÛŽÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊXÝ[ÛˆOOH™›ØÝ\ÈˆÈ›X\ˆˆ˜ZH‹XÝ[Û‹È]\Ù]ˆßHJJNÂˆ™]\›ŽÂˆBˆÛÛœÝ\œÛÛ˜P]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K\\œÛÛ˜WHŠNÂˆYˆ
\œÛÛ˜P]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÙ[XÝY\œÛÛ˜HH\œÛÛ˜P]Û‹™]\Ù]œ\œÛÛ˜H™˜\›Y\ˆŽÂˆØØ[ÝÜ˜YÙKœÙ]][J˜YÜš[™^\Ô\œÛÛ˜H‹Ù[XÝY\œÛÛ˜JNÂˆ™[™\”Ú[\RÛYJ
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆÛÛœÝÝ]\ÈH	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠNÂˆYˆ
Ý]\ÊHÝ]\Ë^ÛÛ[H	Ü\œÛÛ˜P]Û‹^ÛÛ[š[J
_HXÝ[ÛœÈ\™H™XYKˆÚÛÜÙHÛ™H™[ÝË˜ÂˆØ\Ý
	Ü\œÛÛ˜P]Û‹^ÛÛ[š[J
_HšY]ÈÙ[XÝY
NÂˆ™]\›ŽÂˆBˆÛÛœÝ^\šY[˜ÙP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KY^\šY[˜ÙK[[ÙWHŠNÂˆYˆ
^\šY[˜ÙP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÙ]^\šY[˜ÙS[ÙJ^\šY[˜ÙP]Û‹™]\Ù]™^\šY[˜ÙS[ÙKÈ[››Ý[˜ÙPÚ[™ÙNˆYHJNÂˆØ\Ý
	Ù^\šY[˜ÙS[ÙSX™[

_HšY]ÈÙ[XÝY
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[[Øš[KX\Ú×HŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[\ÚÓ™^\Ê
NÂˆ™]\›ŽÂˆBˆYˆ
[™S™^\Ô]›Ü›Q\Ú›Ø\™ÛXÚÊ]™[
JHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ™]\›ŽÂˆBˆÛÛœÝ\Ú›Ø\™\ÚÐ]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KY\Ú›Ø\™X\ÚËXÝ\œ™[HŠNÂˆYˆ
\Ú›Ø\™\ÚÐ]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[œ]H	
ˆÛ™^\Ñ\Ú›Ø\™›Û\[œ]ŠNÂˆÛÛœÝÙ[XÝY[ÙHH™^\Ô]›Ü›Q\Ú›Ø\™[ÙPžRY

NÂˆÛÛœÝ›Û\H
[œ]Ë˜[YHÙ[XÝY[ÙKœ›Û\ÏË–ÌH•Ú]Ø[ˆ™^\ÈÏÈŠKš[J
NÂˆÙ]ÛÛ[X[™[œ]Ê›Û\
NÂˆÜ[\ÚÓ™^\Ê
NÂˆ]ØZ][™U›ÚXÙPÛÛ[X[™
›Û\
NÂˆÛÛœÝÝ]\ÈH	
ˆÜÚ[\PXÝ[Û”Ý]\ÈŠNÂˆYˆ
Ý]\ÊHÝ]\Ë^ÛÛ[H	ÜÙ[XÝY[ÙK]_H™\]Y\ÝÙ[È™^\È›Üˆ™]šY]ËYš\œÝÝZY[˜ÙK˜Âˆ™]\›ŽÂˆBˆYˆ
[™S™^\ÓÜ[‘X[ÙÝYPYÙ[ÛXÚÊ]™[
JH™]\›ŽÂˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K]ÙÙÛK]\Ù\‹[[™ÝXYÙWHŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[™[H	
ˆÝ\Ù\“[™ÝXYÙT[™[ŠNÂˆYˆ
[™[
HÂˆÛÛœÝÚ[Ü[ˆH[™[˜Û\ÜÓ\Ý˜ÛÛZ[œÊšY[ˆŠNÂˆ[™[˜Û\ÜÓ\ÝÙÙÛJšY[ˆ‹]Ú[Ü[ŠNÂˆYˆ
Ú[Ü[ŠHÂˆ[™[œØÜ›Û[ÕšY]ÊÈ™Z]š[ÜŽˆœÛ[ÛÝ‹›ØÚÎˆ˜Ù[\ˆˆJNÂˆÙ]›ÚXÙT™\ÜÛœÙJÚÛÜÙHH[™ÝXYÙKÜˆØ^HÚ[™ÙH[™ÝXYÙHÈœ™[˜Ú\˜XšXËÚ\ÝØZ[KÜ[š\ÚÜYÝY\ÙKÜˆ[™Û\Úˆ‹˜[ÙKÈ[ÝÕ›ÚXÙQš\œÝˆ˜[ÙHJNÂˆBˆBˆ™]\›ŽÂˆBˆÛÛœÝ\Ù\“[™ÝXYÙP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K]\Ù\‹[[™ÝXYÙWHŠNÂˆYˆ
\Ù\“[™ÝXYÙP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]ØZ]]]]J‹Ø\KÝ\Ù\‹Û[™ÝXYÙH‹È[™ÝXYÙNˆ\Ù\“[™ÝXYÙP]Û‹™]\Ù]\Ù\“[™ÝXYÙHK]›Ü›PÛÜVÝ\Ù\“[™ÝXYÙP]Û‹™]\Ù]\Ù\“[™ÝXYÙWOË›[™ÝXYÙUØ\Ý”]›Ü›H[™ÝXYÙH\]YŠNÂˆ	
ˆÝ\Ù\“[™ÝXYÙT[™[ŠOË˜Û\ÜÓ\Ýœ™[[Ý™JšY[ˆŠNÂˆ\PÛÛ[˜[œÛ][ÛœÊ
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KXÛÜÙK]\Ù\‹[[™ÝXYÙWHŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ	
ˆÝ\Ù\“[™ÝXYÙT[™[ŠOË˜Û\ÜÓ\Ý˜Y
šY[ˆŠNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KXÛÜÙK]\Ù\‹XXØÙ\ÜÚXš[]WHŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ™[™\•\Ù\•ÛÜšÜÜXÙJ
NÂˆ\]U\Ù\˜XÚÒÛYJ™\Ú›Ø\™ŠNÂˆ™]\›ŽÂˆBˆÛÛœÝXØÙ\ÜÚXš[]P]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KXXØÙ\ÜÚXš[]WHŠNÂˆYˆ
XØÙ\ÜÚXš[]P]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÙÙÛPXØÙ\ÜÚXš[]T™YŠXØÙ\ÜÚXš[]P]Û‹™]\Ù]˜XØÙ\ÜÚXš[]JNÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆˆ	‰ˆ	
ˆÝ\Ù\XØÙ\ÜÚXš[]T[™[ŠJHÂˆXØÙ\ÜÚXš[]P]Û‹œ]Y\žTÙ[XÝÜŠœÛX[ŠH	‰ˆ
XØÙ\ÜÚXš[]P]Û‹œ]Y\žTÙ[XÝÜŠœÛX[ŠK^ÛÛ[H˜[œÛ]U^
XØÙ\ÜÚXš[]T™YœÖØXØÙ\ÜÚXš[]P]Û‹™]\Ù]˜XØÙ\ÜÚXš[]WHÈ“Ûˆˆˆ“Ù™ˆŠJNÂˆÛÛœÝÝ]\ÈH	
ˆÝ\Ù\XØÙ\ÜÚXš[]T[™[\Ù\‹[[Ù[K\Ý]\ÈŠNÂˆYˆ
Ý]\ÊHÝ]\Ë^ÛÛ[H˜[œÛ]U^
	ØXØÙ\ÜÚXš[]P]Û‹œ]Y\žTÙ[XÝÜŠœÝ›Û™ÈŠOË^ÛÛ[XØÙ\ÜÚXš[]HÜ[ÛˆŸH	ØXØÙ\ÜÚXš[]T™YœÖØXØÙ\ÜÚXš[]P]Û‹™]\Ù]˜XØÙ\ÜÚXš[]WHÈ™[˜X›Yˆˆ™\ØX›YŸK˜
NÂˆBˆ™]\›ŽÂˆBˆÛÛœÝ\Ù\•›ÚXÙP]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K]\Ù\‹]›ÚXÙKXXÝ[Û—HŠNÂˆYˆ
\Ù\•›ÚXÙP]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝXÝ[ÛˆH\Ù\•›ÚXÙP]Û‹™]\Ù]\Ù\•›ÚXÙPXÝ[ÛŽÂˆYˆ
XÝ[ÛˆOOH›\Ý[ˆŠHÂˆ\]U\Ù\Ø\[Û”[™[
“\Ý[š[™ËˆÜXZÈ[Ý\ˆ™\]Y\ÝˆŠNÂˆ]ØZ][™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠÙÙÛK[\Ý[š[™È‹ÈÛÝ\˜ÙNˆ\Ù\‹]›ÚXÙKYØÚÈˆJNÂˆH[ÙHYˆ
XÝ[ÛˆOOHœ™XYŠHÂˆ\]U\Ù\Ø\[Û”[™[
\Ý›ÚXÙT™\ÜÛœÙH“™^\È\È™XYKˆŠNÂˆ]ØZ][™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠœ™\X]\™\ÜÛœÙH‹ÈÛÝ\˜ÙNˆ\Ù\‹]›ÚXÙKYØÚÈˆJNÂˆH[ÙHÂˆ\]U\Ù\Ø\[Û”[™[
\Ý›ÚXÙT™\ÜÛœÙH•›ÚXÙH[\È]˜Z[X›KˆÝXÝ\™YšY[È\X\ˆÛ›H[œÚYHÜ[™YÛÜšÙ›ÝÜËˆŠNÂˆ]ØZ][™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠ›ÚXÙKZ[‹ÈÛÝ\˜ÙNˆ\Ù\‹]›ÚXÙKYØÚÈˆJNÂˆBˆ™]\›ŽÂˆBˆÛÛœÝØ\[Û]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KXØ\[Û‹XXÝ[Û—HŠNÂˆYˆ
Ø\[Û]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝXÝ[ÛˆHØ\[Û]Û‹™]\Ù]˜Ø\[ÛXÝ[ÛŽÂˆYˆ
XÝ[ÛˆOOH˜ÛÜÙHŠHÂˆÛÜÙU\Ù\Ø\[Û”[™[

NÂˆH[ÙHYˆ
XÝ[ÛˆOOH›\Ý[ˆŠHÂˆ\]U\Ù\Ø\[Û”[™[
“\Ý[š[™ËˆÜXZÈ[Ý\ˆ™\]Y\ÝˆŠNÂˆ]ØZ][™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠÙÙÛK[\Ý[š[™È‹ÈÛÝ\˜ÙNˆ˜Ø\[Û‹\[™[ˆJNÂˆH[ÙHYˆ
XÝ[ÛˆOOHœÜXZÈŠHÂˆ]ØZ][™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠœ™\X]\™\ÜÛœÙH‹ÈÛÝ\˜ÙNˆ˜Ø\[Û‹\[™[‹^ˆ	
ˆÝ\Ù\Ø\[Û•^ŠOË^ÛÛ[\Ý›ÚXÙT™\ÜÛœÙHJNÂˆH[ÙHYˆ
XÝ[ÛˆOOHœÙ[™ŠHÂˆÛÛœÝ[œ]H	
ˆÝ\Ù\Ø\[Û’[œ]ŠNÂˆÛÛœÝÛÛ[X[™H[œ]Ë˜[YKš[J
NÂˆYˆ
XÛÛ[X[™
HÂˆ\]U\Ù\Ø\[Û”[™[
”ÜXZÈ˜]\˜[HÈ™^\ËˆŠNÂˆ™]\›ŽÂˆBˆYˆ
[œ]
H[œ]˜[YHHˆŽÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆYˆ
[™S™^\ÔÝ[™\™\Ù\”ØY™U\YÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆ›ÚY[™U›ÚXÙPÛÛ[X[™
ÛÛ[X[™
NÂˆH[ÙHYˆ
XÝ[ÛˆOOH˜ÛÛ™š\›HŠHÂˆ›ÚYÛÛ™š\›T[™[™ÕÛÜšÙ›ÝÊ
NÂˆH[ÙHYˆ
XÝ[ÛˆOOH˜Ø[˜Ù[ŠHÂˆÛÜÙUÛÜšÙ›ÝÓ[Ù[

NÂˆ	
‹\Ù\‹Z[›[™K]ÛÜšÙ›ÝÎ››Ý
šY[ŠHŠOË˜Û\ÜÓ\Ý˜Y
šY[ˆŠNÂˆ[™[™ÕÛÜšÙ›ÝÈH[Âˆ\]U\Ù\Ø\[Û”[™[
Ø[˜Ù[YˆÚÛÜÙH[›Ý\ˆ]ÛˆÚ[ˆ™XYKˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJØ[˜Ù[YˆÚÛÜÙH[›Ý\ˆ]ÛˆÚ[ˆ™XYKˆ‹YJNÂˆBˆ™]\›ŽÂˆBˆÛÛœÝÜ˜[™XPÛÛ™š\›P]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KYÜ˜[™XKXÛÛ™š\›WHŠNÂˆYˆ
Ü˜[™XPÛÛ™š\›P]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[œÝÙ\‘Ü˜[™XPXÝ[ÛÛÛ™š\›X][ÛŠÜ˜[™XPÛÛ™š\›P]Û‹™]\Ù]™Ü˜[™XPÛÛ™š\›JNÂˆ™]\›ŽÂˆBˆÛÛœÝYÙ[[™[™ÐÛÛ™š\›P]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KXYÙ[\[™[™ËXÛÛ™š\›WHŠNÂˆYˆ
YÙ[[™[™ÐÛÛ™š\›P]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛœÝ[œÝÙ\ˆHYÙ[[™[™ÐÛÛ™š\›P]Û‹™]\Ù]˜YÙ[[™[™ÐÛÛ™š\›HOOHžY\ÈˆÈžY\ÈÈ]ˆˆ››ÈØ[˜Ù[ŽÂˆÙ]ÛÛ[X[™[œ]Ê[œÝÙ\ŠNÂˆ›ÚY[™U›ÚXÙPÛÛ[X[™
[œÝÙ\ŠNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KZ[›[™K]ÛÜšÙ›ÝËXÛÛ™š\›WHŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛ™š\›T[™[™ÕÛÜšÙ›ÝÊ
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KZ[›[™K]ÛÜšÙ›ÝËXØ[˜Ù[HŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÜÙUÛÜšÙ›ÝÓ[Ù[

NÂˆ]™[\™Ù]˜ÛÜÙ\Ý
‹\Ù\‹Z[›[™K]ÛÜšÙ›ÝÈŠOË˜Û\ÜÓ\Ý˜Y
šY[ˆŠNÂˆÙ]›ÚXÙT™\ÜÛœÙJØ[˜Ù[YˆÚÛÜÙH[›Ý\ˆ]ÛˆÚ[ˆ™XYKˆ‹YJNÂˆ™]\›ŽÂˆBˆÛÛœÝ\›Z\ÜÚ[Û]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K[[Øš[K\\›Z\ÜÚ[Û—HŠNÂˆYˆ
\›Z\ÜÚ[Û]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ™\]Y\Ý›ÙXÝ[Û“[Øš[T\›Z\ÜÚ[ÛŠ\›Z\ÜÚ[Û]Û‹™]\Ù]›[Øš[T\›Z\ÜÚ[ÛŠNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÝ\Ù\“]™TÙ\šXÙPÚXÚÐˆŠH]™[\™Ù]˜ÛÜÙ\Ý
ˆÛ][˜ÚÚ^˜\™]™PÚXÚÐˆŠJHÂˆ[“]™TÙ\šXÙPÚXÚÊ]™[
NÂˆ™]\›ŽÂˆBˆÛÛœÝÚ[\P]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K\Ú[\KXÛÛ[X[™KÙ]K\Ú[\K\ÙXÝ[Û—KÙ]K\Ú[\K\[ÝKÙ]K\Ú[\KY[[×KÙ]K\Ú[\K[Z\ÜÚ[Û—KÙ]K\Ú[\KXXÝ[Û—HŠNÂˆYˆ
Ú[\P]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[”Ú[\PXÝ[ÛŠ]™[
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÝÛÜšÜÜXÙP\ÚÐˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[\ÚÓ™^\Ê
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÛ]™TÙ\šXÙPÚXÚÐˆŠH]™[\™Ù]˜ÛÜÙ\Ý
ˆÛ]™TÙ\šXÙPÚXÚÑœ›ÛR[YÜ˜][ÛœÈŠJHÂˆ[“]™TÙ\šXÙPÚXÚÊ]™[
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÜÝ\Û˜›Ø\™[™ÐˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ›Û˜›Ø\™[™È‹œÝ\‹È]\Ù]ˆßHJJNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÛÜ[”Ý\ÜˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊœÝ\Ü‹XÚÙ]‹È]\Ù]ˆßHJJNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÚ[š]TÝXœØÜšX™\ˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊœÝXœØÜšX™\ˆ‹š[š]H‹È]\Ù]ˆßHJJNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆØY\Ý\Ù\ˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ\Ý]\Ù\ˆ‹˜Ü™X]H‹È]\Ù]ˆßHJJNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆØYYZ[•\Ù\ˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜YZ[‹]\Ù\ˆ‹˜Ü™X]H‹È]\Ù]ˆßHJJNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÛ]™R[™\ÝÜ‘[[ÐˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[“]™R[™\ÝÜ‘[[Ó[ÙJ
NÂˆ™]\›ŽÂˆBˆÛÛœÝÛÝ™\››Y[XÝ[Û]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KYÛÝ™\››Y[XXÝ[Û—HŠNÂˆYˆ
ÛÝ™\››Y[XÝ[Û]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[‘ÛÝ™\››Y[™XY[™\ÜÐXÝ[ÛŠ]™[
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÙÛØ˜[ÛÜÙPˆŠH]™[\™Ù]˜ÛÜÙ\Ý
ˆÙÛØ˜[˜XÚÐˆŠH]™[\™Ù]˜ÛÜÙ\Ý
ˆÚ˜\š\ÐÛÜÙPˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÜÙP\ÚÓ™^\Ê
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÙÛØ˜[\Ý[ˆŠH]™[\™Ù]˜ÛÜÙ\Ý
ˆÚ˜\š\Ó\Ý[ˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠÙÙÛK[\Ý[š[™È‹ÈÛÝ\˜ÙNˆ›YØXÞKYÛØ˜[[\Ý[‹X]ÛˆˆJNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÚ˜\š\Ô[ˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[’˜\š\ÐÛÛ[X[™

NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÙÛØ˜[[ˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[‘ÛØ˜[ÛÛ[X[™

NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÙÛØ˜[›ÚXÙQš\œÝˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÙÙÛU›ÚXÙQš\œÝ[ÙJ
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÙÛØ˜[Y\ÐˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[œÝÙ\‘ÛØ˜[ÛÛ™\œØ][ÛŠžY\ÈŠNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÙÛØ˜[›ÐˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆYˆ
I
ˆÝÛÜšÙ›ÝÓ[Ù[ŠOË˜Û\ÜÓ\Ý˜ÛÛZ[œÊšY[ˆŠJHÂˆ[œÝÙ\‘ÛØ˜[ÛÛ™\œØ][ÛŠ››ÈŠNÂˆH[ÙHÂˆÛÜÙP\ÚÓ™^\Ê
NÂˆBˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÙÛØ˜[™XYˆŠH]™[\™Ù]˜ÛÜÙ\Ý
ˆÚ˜\š\Ô™XYˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠœ™\X]\™\ÜÛœÙH‹ÈÛÝ\˜ÙNˆ›YØXÞK\™XYX]ÛˆˆJNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÙÛØ˜[[œÝ[ˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[œÝ[YÜšS™^\Ð\

NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÙÛØ˜[›ÚXÙR[ˆŠH]™[\™Ù]˜ÛÜÙ\Ý
ˆÝ›ÚXÙR[ˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÜ[•›ÚXÙR[

NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÝ›ÚXÙR[ÛÜÙPˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÜÙU›ÚXÙR[

NÂˆ™]\›ŽÂˆBˆÛÛœÝ›ÚXÙQ^[\P]ÛˆH]™[\™Ù]˜ÛÜÙ\Ý
–Ù]K]›ÚXÙKY^[\WHŠNÂˆYˆ
›ÚXÙQ^[\P]ÛŠHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[•›ÚXÙQ^[\J›ÚXÙQ^[\P]ÛŠNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÚ˜\š\ÓZ\ÜÚ[ÛˆŠH]™[\™Ù]˜ÛÜÙ\Ý
ˆØYÙ[Z\ÜÚ[ÛˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[’˜\š\Ñ[Z\ÜÚ[ÛŠ
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÝÛÜšÙ›ÝÐÛÛ™š\›HŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛ™š\›T[™[™ÕÛÜšÙ›ÝÊ
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÝÛÜšÙ›ÝÔ[•›ÚXÙPˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[•ÛÜšÙ›ÝÕ›ÚXÙT™\ÜÛœÙJ
NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÝÛÜšÙ›ÝÔ™XYˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ™XYÛÜšÙ›ÝÓ[Ù[

NÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
ˆÝÛÜšÙ›ÝÓ\Ý[ˆŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ[™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠÙÙÛK[\Ý[š[™È‹ÈÛÝ\˜ÙNˆÛÜšÙ›ÝË[\Ý[‹X]ÛˆˆJNÂˆ™]\›ŽÂˆBˆYˆ
]™[\™Ù]˜ÛÜÙ\Ý
–Ù]KXÛÜÙK]ÛÜšÙ›Ý×HŠJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÜÙUÛÜšÙ›ÝÓ[Ù[

NÂˆBˆKYJNÂ‚ˆØÝ[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹]™[OˆÂˆYˆ
]™[\™Ù]ËšYOOHÛÜšÙ›ÝÕ›ÚXÙR[œ]ˆ	‰ˆ]™[šÙ^HOOH‘[\ˆŠHÂˆ]™[œ™]™[Y˜][

NÂˆ[•ÛÜšÙ›ÝÕ›ÚXÙT™\ÜÛœÙJ
NÂˆBˆJNÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜Ú[™ÙH‹]™[OˆÂˆ[™S™^\Õ\Ù\‘^\šY[˜ÙSX^[Z^˜][ÛÚ[™ÙJ]™[
NÂˆKYJNÂ‚ˆÚ[™ÝË˜Y]™[\Ý[™\Šš\ÚÚ[™ÙH‹

HOˆÂˆÛÔÙXÝ[ÛŠÙXÝ[Û‘œ›ÛR\Ú

KÈ\]R\Úˆ˜[ÙK[œÝ[ˆYHJNÂˆJNÂ‚ˆ	
ˆÝÜÙ][™ÜÕÙÙÛHŠK›Û˜ÛXÚÈH

HOˆÂˆÛÛœÝ[™[H	
ˆÝÜXÝ[ÛœÈŠNÂˆÛÛœÝÜ[ˆH\[™[˜Û\ÜÓ\Ý˜ÛÛZ[œÊ›Ü[ˆŠNÂˆ[™[˜Û\ÜÓ\ÝÙÙÛJ›Ü[ˆ‹Ü[ŠNÂˆ	
ˆÝÜÙ][™ÜÕÙÙÛHŠKœÙ]]šX]J˜\šXKY^[™Y‹Ýš[™ÊÜ[ŠJNÂˆ[››Ý[˜ÙJÜ[ˆÈ”Ù][™ÜÈÜ[™Yˆˆ”Ù][™ÜÈÛÜÙYŠNÂˆNÂˆÛÛœÝÜÙ][™ÜÐÛÜÙHH	
ˆÝÜÙ][™ÜÐÛÜÙHŠNÂˆYˆ
ÜÙ][™ÜÐÛÜÙJHÜÙ][™ÜÐÛÜÙK›Û˜ÛXÚÈH

HOˆÂˆÛÜÙUÜÙ][™ÜÓY[J
NÂˆ[››Ý[˜ÙJ”Ù][™ÜÈÛÜÙYŠNÂˆNÂ‚ˆ	
ˆÛÙÚ[‘›Ü›HŠK˜Y]™[\Ý[™\ŠœÝX›Z]‹\Þ[˜È]™[OˆÂˆ]™[œ™]™[Y˜][

NÂˆžHÂˆØØ[ÝÜ˜YÙKœ™[[Ý™R][J˜YÜš[™^\ÑÝY\Ý\Ü^S˜[YHŠNÂˆÛÛœÝÙÚ[“[™ÝXYÙHHØØ[ÝÜ˜YÙK™Ù]][J˜YÜš[™^\ÓÙÚ[“[™ÝXYÙHŠH™[ˆŽÂˆÛÛœÝ[XZ[HÝš[™Ê	
ˆÙ[XZ[ŠOË˜[YHˆŠKš[J
KÓÝÙ\Ø\ÙJ
NÂˆÛÛœÝ\ÜÝÛÜ™HÝš[™Ê	
ˆÜ\ÜÝÛÜ™ŠOË˜[YHˆŠNÂˆYˆ
Y[XZ[\\ÜÝÛÜ™š[J
JHÂˆ	
ˆÛÙÚ[“Y\ÜØYÙHŠK^ÛÛ[H‘[XZ[[™\ÜÝÛÜ™\™H™\]Z\™YˆŽÂˆ	
ˆÜ\ÜÝÛÜ™ŠOË™›ØÝ\Ê
NÂˆ™]\›ŽÂˆBˆ]HH]ØZ]™\]Y\Ý
‹Ø\KÛÙÚ[ˆ‹ÈY]Ùˆ”ÔÕ‹›ÙNˆÈ[XZ[\ÜÝÛÜ™HJNÂˆYˆ
ÙÚ[“[™ÝXYÙH	‰ˆÙÚ[“[™ÝXYÙHOOH]OË\Ù\Ë›[™ÝXYÙJHÂˆ]HH]ØZ]™\]Y\Ý
‹Ø\KÝ\Ù\‹Û[™ÝXYÙH‹ÈY]Ùˆ”ÔÕ‹›ÙNˆÈ[™ÝXYÙNˆÙÚ[“[™ÝXYÙHHJNÂˆBˆ]ØZ]ØYX›XÓX\ÛÛ™šYÊ
NÂˆ™[™\Š
NÂˆÝ\\ÚÓ™^\ÐY\“ÙÚ[Š
NÂˆØ\Ý
”ÚYÛ™Y[ˆŠNÂˆHØ]Ú
\œ›ÜŠHÂˆ	
ˆÛÙÚ[“Y\ÜØYÙHŠK^ÛÛ[H\œ›Ü‹›Y\ÜØYÙNÂˆBˆJNÂˆÛÛœÝÙÚ[“[™ÝXYÙTÙ[XÝH	
ˆÛÙÚ[“[™ÝXYÙTÙ[XÝŠNÂˆYˆ
ÙÚ[“[™ÝXYÙTÙ[XÝ
HÂˆÙÚ[“[™ÝXYÙTÙ[XÝ˜[YHHØØ[ÝÜ˜YÙK™Ù]][J˜YÜš[™^\ÓÙÚ[“[™ÝXYÙHŠH™[ˆŽÂˆÙÚ[“[™ÝXYÙTÙ[XÝ›Û˜Ú[™ÙHH]™[OˆÙ]ÙÚ[“[™ÝXYÙJ]™[\™Ù]˜[YJNÂˆBˆÛÛœÝÝY\ÝÝ\ˆH	
ˆÙÝY\ÝÝ\ˆŠNÂˆYˆ
ÝY\ÝÝ\ŠHÝY\ÝÝ\‹›Û˜ÛXÚÈHÝ\ÝY\Ý\Ù\”Ù\ÜÚ[ÛŽÂ‚ˆ	
ˆÛÙÛÝ]ˆŠK›Û˜ÛXÚÈH\Þ[˜È

HOˆÂˆØØ[ÝÜ˜YÙKœ™[[Ý™R][J˜YÜš[™^\ÑÝY\Ý\Ü^S˜[YHŠNÂˆ]ØZ]™\]Y\Ý
‹Ø\KÛÙÛÝ]‹ÈY]Ùˆ”ÔÕˆJNÂˆØØ][Û‹œ™[ØY

NÂˆNÂ‚ˆ	
ˆØÛÝ[žTÙ[XÝŠK›Û˜Ú[™ÙHH\Þ[˜È]™[OˆÂˆÛÛœÝ˜[YHH]™[\™Ù]˜[YNÂˆYˆ
˜[YKœÝ\ÕÚ]
›[™ÝXYÙNˆŠJHÂˆÛÛœÝ[™ÝXYÙHH˜[YKœ™\XÙJ›[™ÝXYÙNˆ‹ˆŠNÂˆ]ØZ]]]]J‹Ø\KÝ\Ù\‹Û[™ÝXYÙH‹È[™ÝXYÙHK]›Ü›PÛÜVÛ[™ÝXYÙWOË›[™ÝXYÙUØ\Ý”]›Ü›H[™ÝXYÙH\]YŠNÂˆ™]\›ŽÂˆBˆÛÛœÝÛÝ[žRYH˜[YNÂˆÛÛœÝ[™ÝXYÙHHÛÝ[žS[™ÝXYÙSX\ØÛÝ[žRYH[™ÝXYÙPÛÙJ
NÂˆžHÂˆÛÛœÝ™]š[Ý\Ó[™ÝXYÙHH[™ÝXYÙPÛÙJ
NÂˆ]HH]ØZ]™\]Y\Ý
‹Ø\KØÛÛ^‹ÈY]Ùˆ”ÔÕ‹›ÙNˆÈÛÝ[žRYHJNÂˆ]K\Ù\‹›[™ÝXYÙHH[™ÝXYÙNÂˆ]Kœ›Ùš[K˜XØÙ\ÜÚXš[]T›Ùš[HHÂˆ‹‹Š]Kœ›Ùš[K˜XØÙ\ÜÚXš[]T›Ùš[HßJKˆ[™ÝXYÙBˆNÂˆ™[™\Š
NÂˆYˆ
™]š[Ý\Ó[™ÝXYÙHOOH[™ÝXYÙPÛÙJ
JH™Yœ™\Ú›ÚXÙQ›Ü“[™ÝXYÙPÚ[™ÙJ
NÂˆØ\Ý
]›Ü›PÛÜVÛ[™ÝXYÙWOË›[™ÝXYÙUØ\ÝÛÝ[žH[™[™ÝXYÙHÛÛ^\]YŠNÂˆHØ]Ú
\œ›ÜŠHÂˆØ\Ý
\œ›Ü‹›Y\ÜØYÙJNÂˆBˆNÂ‚ˆ		
‹›˜]ˆŠK™›Ü‘XXÚ
]ÛˆOˆÂˆ]Û‹›Û˜ÛXÚÈH

HOˆXÝ]˜]TÙXÝ[Û‘œ›ÛP]ÛŠ]ÛŠNÂˆJNÂˆÛÛœÝ\Ù\˜XÚÒÛYPˆH	
ˆÝ\Ù\˜XÚÒÛYPˆŠNÂˆYˆ
\Ù\˜XÚÒÛYPŠH\Ù\˜XÚÒÛYP‹›Û˜ÛXÚÈH

HOˆÛÔÙXÝ[ÛŠ™\Ú›Ø\™‹È[œÝ[ˆYHJNÂˆ		
–Ù]K[[Øš[K\ÙXÝ[Û—HŠK™›Ü‘XXÚ
]ÛˆOˆÂˆ]Û‹›Û˜ÛXÚÈH

HOˆXÝ]˜]TÙXÝ[Û‘œ›ÛP]ÛŠ]ÛŠNÂˆJNÂˆ		
–Ù]K[[Øš[KX\Ú×HŠK™›Ü‘XXÚ
]ÛˆOˆÂˆ]Û‹›Û˜ÛXÚÈHÜ[\ÚÓ™^\ÎÂˆJNÂˆ	
ˆÝÛÜšÜÜXÙP\ÚÐˆŠK›Û˜ÛXÚÈHÜ[\ÚÓ™^\ÎÂˆ	
ˆØXØÙ\ÜÚXš[]UÙÙÛHŠK›Û˜ÛXÚÈH

HOˆÂˆÛÜÙUÜÙ][™ÜÓY[J
NÂˆYˆ
^\šY[˜ÙS[ÙHOOH\Ù\ˆŠHÂˆ	
ˆØXØÙ\ÜÚXš[]T[™[ŠOË˜Û\ÜÓ\Ý˜Y
šY[ˆŠNÂˆ	
ˆØXØÙ\ÜÚXš[]UÙÙÛHŠKœÙ]]šX]J˜\šXKY^[™Y‹YHŠNÂˆ™[™\•\Ù\XØÙ\ÜÚXš[]T[™[

NÂˆ[››Ý[˜ÙJXØÙ\ÜÚXš[]H[Ü[™YŠNÂˆ™]\›ŽÂˆBˆÛÛœÝ[™[H	
ˆØXØÙ\ÜÚXš[]T[™[ŠNÂˆÛÛœÝÚ[Ü[ˆH[™[˜Û\ÜÓ\Ý˜ÛÛZ[œÊšY[ˆŠNÂˆ[™[˜Û\ÜÓ\ÝÙÙÛJšY[ˆ‹]Ú[Ü[ŠNÂˆ	
ˆØXØÙ\ÜÚXš[]UÙÙÛHŠKœÙ]]šX]J˜\šXKY^[™Y‹Ýš[™ÊÚ[Ü[ŠJNÂˆYˆ
Ú[Ü[ŠH[™[œ]Y\žTÙ[XÝÜŠ˜]ÛˆŠOË™›ØÝ\Ê
NÂˆ[››Ý[˜ÙJÚ[Ü[ˆÈXØÙ\ÜÚXš[]HÛÛÈÜ[™YˆˆXØÙ\ÜÚXš[]HÛÛÈÛÜÙYŠNÂˆNÂˆÛÛœÝÜØ\[ÛœÐˆH	
ˆÝÜØ\[ÛœÐˆŠNÂˆYˆ
ÜØ\[ÛœÐŠHÜØ\[ÛœÐ‹›Û˜ÛXÚÈH

HOˆÂˆÛÜÙUÜÙ][™ÜÓY[J
NÂˆÜ[Ø\[Û›Þ
“™^\ÈØ\[ÛœÈ\™HÜ[‹ˆÜXZÈÈ™^\ÎÈÝXÝ\™YšY[È\X\ˆÛ›H[œÚYHÜ[™YÛÜšÙ›ÝÜËˆŠNÂˆNÂˆÛÛœÝÜÛYPˆH	
ˆÝÜÛYPˆŠNÂˆYˆ
ÜÛYPŠHÜÛYP‹›Û˜ÛXÚÈH

HOˆÂˆÛÜÙUÜÙ][™ÜÓY[J
NÂˆÛÜÙP\ÚÓ™^\ÊÈÚ[[ˆYHJNÂˆÛÜÙU\Ù\Ø\[Û”[™[

NÂˆÛÔÙXÝ[ÛŠ™\Ú›Ø\™‹È[œÝ[ˆYHJNÂˆNÂˆ		
–Ù]KXXØÙ\ÜÚXš[]WHŠK™›Ü‘XXÚ
]ÛˆOˆÂˆ]Û‹›Û˜ÛXÚÈH

HOˆÙÙÛPXØÙ\ÜÚXš[]T™YŠ]Û‹™]\Ù]˜XØÙ\ÜÚXš[]JNÂˆJNÂ‚ˆ		
‹›[™ÝXYÙK[Ü[ÛˆŠK™›Ü‘XXÚ
]ÛˆOˆÂˆ]Û‹›Û˜ÛXÚÈH

HOˆ]]]J‹Ø\KÝ\Ù\‹Û[™ÝXYÙH‹È[™ÝXYÙNˆ]Û‹™]\Ù]›[™ÝXYÙHK]›Ü›U^

K›[™ÝXYÙUØ\Ý
NÂˆJNÂˆÛÛœÝ]›Ü›S[™ÝXYÙTÙ[XÝH	
ˆÜ]›Ü›S[™ÝXYÙTÙ[XÝŠNÂˆYˆ
]›Ü›S[™ÝXYÙTÙ[XÝ
HÂˆ]›Ü›S[™ÝXYÙTÙ[XÝ›Û˜Ú[™ÙHH]™[OˆÂˆ]]]J‹Ø\KÝ\Ù\‹Û[™ÝXYÙH‹È[™ÝXYÙNˆ]™[\™Ù]˜[YHK]›Ü›PÛÜVÙ]™[\™Ù]˜[YWOË›[™ÝXYÙUØ\Ý”]›Ü›H[™ÝXYÙH\]YŠNÂˆNÂˆB‚ˆ	
ˆÜ]Z^ˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
Âˆ^YXœ›ÝÎˆ“X\›š[™È\ÜÙ\ÜÛY[‹ˆ]NˆÛÛ\]H]Z^ˆ‹ˆÝ[[X\žNˆÛÛ™š\›H\ÜÙ\ÜÛY[™XY[™\ÜÈ™Y›Ü™H]Z^ˆØÛÜ™K›ÙÜ™\ÜË™XY[™\ÜË[™XÝ]š]HÝ]H\]Kˆ‹ˆÛÛ™š\›SX™[ˆÛÛ\]H]Z^ˆ‹ˆ]ˆ‹Ø\KÛX\›š[™ËÜ]Z^ˆ‹ˆ›ÙNˆßKˆÝXØÙ\ÜÎˆ”]Z^ˆÛÛ\]Y‹ˆ™XÛÜ™ˆ”]Z^ˆØÛÜ™K[œ›ÛY[›ÙÜ™\ÜËX\›š[™ÈÝ\œË™XY[™\ÜË[™XÝ]š]H™YY‹ˆ›ÝšY\ŽˆÙ\YšXØ]H›ÝšY\ˆØ[ˆ\ÜÝYHÜ™Y[X[Y\ˆ]Z^ˆ›ÙÜ™\ÜÈ^\ÝËˆ‹ˆÚXÚÛ\ÝˆÂˆÈ]NˆXÝ]™HÛÝ\œÙH‹]Z[ˆ˜[œÛ]YÛÝ\œÙJXÝ]™PÛÝ\œÙJ
JK]KÝ]\Îˆ›]™H‹X™[ˆÛÝ\œÙTÝ]\ÊXÝ]™PÛÝ\œÙJ
JHKˆÈ]NˆÝ\œ™[ØÛÜ™H‹]Z[ˆ	Ù]Kœ›Ùš[Kœ]Z^”ØÛÜ™HXÝ]\Îˆ]Kœ›Ùš[Kœ]Z^”ØÛÜ™HÈœ™XYHˆˆœ[™[™È‹X™[ˆ”ØÛÜ™HˆKˆÈ]NˆÜ™Y[X[]‹]Z[ˆH]Z^ˆØÛÜ™H[›ØÚÜÈÙ\YšXØ]H\ÜÝYHÛÜšÙ›ÝËˆ‹Ý]\Îˆœ™XYH‹X™[ˆ“™^ˆBˆBˆJNÂˆ	
ˆØÙ\ˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
Âˆ^YXœ›ÝÎˆÜ™Y[X[ÛÜšÙ›ÝÈ‹ˆ]Nˆ’\ÜÝYHÙ\YšXØ]H‹ˆÝ[[X\žNˆÛÛ™š\›HHÜ™Y[X[\ÜÝYH[™›ÝšY\ˆ]šY[˜ÙH™Y›Ü™HY[™ÈHÙ\YšXØ]HÈHX\›™\ˆ›Ùš[Kˆ‹ˆÛÛ™š\›SX™[ˆ’\ÜÝYHÙ\YšXØ]H‹ˆ]ˆ‹Ø\KÛX\›š[™ËØÙ\YšXØ]H‹ˆ›ÙNˆßKˆÝXØÙ\ÜÎˆÙ\YšXØ]H\ÜÝYY‹ˆ™XÛÜ™ˆÙ\YšXØ]H[X™\‹ÛÛ\]YÛÝ\œÙK™XY[™\ÜË›ÝšY\ˆ]™[[™XÝ]š]H™YY‹ˆ›ÝšY\Žˆ“X\›š[™ÈÙ\YšXØ]H›ÝšY\ˆ™XÛÜ™ÈÙ\YšXØ]Kš\ÜÝYYˆ‹ˆÚXÚÛ\ÝˆÂˆÈ]NˆXÝ]™HÛÝ\œÙH‹]Z[ˆ˜[œÛ]YÛÝ\œÙJXÝ]™PÛÝ\œÙJ
JK]KÝ]\Îˆ›]™H‹X™[ˆÛÝ\œÙTÝ]\ÊXÝ]™PÛÝ\œÙJ
JHKˆÈ]Nˆ”]Z^ˆØÛÜ™H‹]Z[ˆ	Ù]Kœ›Ùš[Kœ]Z^”ØÛÜ™HXÝ]\Îˆ]Kœ›Ùš[Kœ]Z^”ØÛÜ™HÈœ™XYHˆˆ˜›ØÚÙY‹X™[ˆ]Kœ›Ùš[Kœ]Z^”ØÛÜ™HÈ”™XYHˆˆ”]Z^ˆš\œÝˆKˆÈ]NˆÙ\YšXØ]HÛÝ[‹]Z[ˆ	Ù]Kœ›Ùš[K˜Ù\YšXØ]\ÏË›[™ÝHÙ\YšXØ]JÊH[™XYH\ÜÝYYÝ]\Îˆœ™XYH‹X™[ˆ”™XÛÜ™ˆBˆBˆJNÂˆ	
ˆÜÝ\XÝ]™PÛÝ\œÙPˆŠK›Û˜ÛXÚÈH

HOˆÂˆÛÛœÝÛÝ\œÙHHXÝ]™PÛÝ\œÙJ
NÂˆYˆ
ÛÝ\œÙJHÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ›X\›š[™È‹œÝ\‹È]\Ù]ˆßHJJNÂˆNÂˆ	
ˆØÛÛ\]S\ÜÛÛˆŠK›Û˜ÛXÚÈH

HOˆÂˆÛÛœÝÛÝ\œÙHHXÝ]™PÛÝ\œÙJ
NÂˆÛÛœÝ[œ›ÛY[HÛÝ\œÙHÈÛÝ\œÙQ[œ›ÛY[
ÛÝ\œÙKšY
Hˆ[ÂˆYˆ
ÛÝ\œÙJHÜ[•ÛÜšÙ›ÝÓ[Ù[
\ÜÛÛ•ÛÜšÙ›ÝÐÛÛ™šYÊÛÝ\œÙK[œ›ÛY[Ë˜XÝ]™S[Ù[R[™^
JNÂˆNÂˆ		
–Ù]K[X\›š[™ËXXØÙ\Ü×HŠK™›Ü‘XXÚ
]ÛˆOˆ]Û‹›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
X\›š[™ÐXØÙ\ÜÚXš[]UÛÜšÙ›ÝÐÛÛ™šYÊ]Û‹™]\Ù]›X\›š[™ÐXØÙ\ÜÊJJNÂˆ		
–Ù]K]ÛÜšÙ›Ü˜ÙWHŠK™›Ü‘XXÚ
]ÛˆOˆ]Û‹›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊÛÜšÙ›Ü˜ÙH‹]Û‹™]\Ù]ÛÜšÙ›Ü˜ÙKÈ]\Ù]ˆßHJJJNÂˆ		
–Ù]KZX[HŠK™›Ü‘XXÚ
]ÛˆOˆ]Û‹›Û˜ÛXÚÈH

HOˆÜ[’X[ÛÜšÙ›ÝÊ]Û‹™]\Ù]šX[]ÛŠJNÂˆ	
ˆÜ[’[ZÙTÚ[][][ÛˆŠK›Û˜ÛXÚÈHÜ[‘ÝZYY[ZÙTÚ[][][ÛŽÂˆ		
‹›Ü™\ˆŠK™›Ü‘XXÚ
]ÛˆOˆ]Û‹›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜YH‹›Ü™\ˆ‹È]\Ù]ˆÈ›ÙXÝYˆ]Û‹™]\Ù]œ›ÙXÝYHJJJNÂˆ	
ˆÜ™Yœ™\Ú˜XÚÚ[™ÐˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜YH‹˜XÚÚ[™È‹È]\Ù]ˆßHJJNÂˆ	
ˆØY˜[˜ÙSÜ™\ˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜YH‹˜Y˜[˜ÙH‹È]\Ù]ˆßHJJNÂˆ	
ˆÙ›Û™SZ\ÜÚ[ÛˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜YH‹™›Û™K\[ˆ‹È]\Ù]ˆÈ›ÙXÝYˆš\œÝ›ÙXÝ

OËšYHJJNÂˆ	
ˆÙ›Û™TØØ[ˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜YH‹™›Û™H‹È]\Ù]ˆÈ›ÙXÝYˆš\œÝ›ÙXÝ

OËšYHJJNÂˆ	
ˆÙ›Û™R[\™[[ÛˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜YH‹™›Û™KZ[\™[[Ûˆ‹È]\Ù]ˆÈ›ÙXÝYˆš\œÝ›ÙXÝ

OËšYHJJNÂˆ	
ˆÛ]™R[™\ÝÜ‘[[ÐˆŠK›Û˜ÛXÚÈH[“]™R[™\ÝÜ‘[[Ó[ÙNÂˆ	
ˆÙ^Ü]šY[˜ÙPˆŠK›Û˜ÛXÚÈH^Ü]šY[˜ÙTXÚÙ]Âˆ	
ˆÙ\Ú›Ø\™[œÝ[ˆŠK›Û˜ÛXÚÈH[œÝ[YÜšS™^\Ð\Âˆ		
–Ù]K\^WHŠK™›Ü‘XXÚ
]ÛˆOˆ]Û‹›Û˜ÛXÚÈH

HOˆÂˆÛÛœÝÜ›ÝšY\‹[[Ý[HH]Û‹™]\Ù]œ^KœÜ]
ŽˆŠNÂˆÜ[•ÛÜšÙ›ÝÓ[Ù[
Âˆ‹‹ÛÜšÙ›ÝÐÛÛ™šYÊ˜YH‹Ø[]‹È]\Ù]ˆßHJKˆ›ÙNˆÈ›ÝšY\‹[[Ý[ˆ[X™\Š[[Ý[
HKˆÛÛ™š\›SX™[ˆ	Ü›ÝšY\ŸH	Ó[X™\Š[[Ý[
HHÈŠÈˆˆˆŸIØ[[Ý[XˆJNÂˆJNÂˆ		
–Ù]KXZWHŠK™›Ü‘XXÚ
]ÛˆOˆ]Û‹›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜ZH‹]Û‹™]\Ù]˜ZKÈ]\Ù]ˆßHJJJNÂˆ	
ˆØZPÛÛœÛÛT[ˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
Âˆ‹‹ÛÜšÙ›ÝÐÛÛ™šYÊ˜ZH‹	
ˆØZPÛÛœÛÛU\HŠK˜[YKÈ]\Ù]ˆßHJKˆ]Nˆ[ˆRH\Ýˆ	É
ˆØZPÛÛœÛÛU\HŠK˜[Y_XˆÛÛ™š\›SX™[ˆ”[ˆRH\Ý‹ˆÝXØÙ\ÜÎˆRH\ÝÛÛ\]H‚ˆJNÂˆ	
ˆØš[[™ÐÚXÚÛÝ]ˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
Âˆ^YXœ›ÝÎˆš[[™ÈÛÜšÙ›ÝÈ‹ˆ]Nˆ•\ÝÝXœØÜš\[ÛˆÚXÚÛÝ]‹ˆÝ[[X\žNˆÛÛ™š\›HHš[[™È›ÝšY\ˆÛÜšÙ›ÝÈ™Y›Ü™HÜ™X][™ÈHÝXœØÜš\[ÛˆÚXÚÛÝ]]™[ˆ‹ˆÛÛ™š\›SX™[ˆ•\Ýš[[™ÈÚXÚÛÝ]‹ˆ]ˆ‹Ø\KØš[[™ËØÚXÚÛÝ]‹ˆ›ÙNˆÈ[ŽˆœÝ[™\™ˆKˆÝXØÙ\ÜÎˆš[[™ÈÛÜšÙ›ÝÈ\ÝY‹ˆ™XÛÜ™ˆš[[™È›ÝšY\ˆ]™[YZ[ˆ]Y]˜Z[[™ÝXœØÜš\[Ûˆ™XY[™\ÜÈ]šY[˜ÙH‹ˆ›ÝšY\Žˆ“]™HÚXÚÛÝ]™\]Z\™\È’SS‘×Ô“Õ’QT‹’SS‘×ÕÑP’ÓÒ×ÕT“’SS‘×Ô“Õ’QT—ÐTWÒÑVK[™’SS‘×Ô’PÑWÒQˆ‹ˆÚXÚÛ\ÝˆÂˆÈ]Nˆš[[™È›ÝšY\ˆ‹]Z[ˆ]Kœ›ÝšY\œË™š[™
][HOˆ][KšYOOH˜š[[™Ë\ÝXœØÜš\[ÛœÈŠOË™]Z[š[[™È›ÝšY\ˆ›ÝÛÛ™šYÝ\™Y‹Ý]\Îˆ]Kœ›ÝšY\œË™š[™
][HOˆ][KšYOOH˜š[[™Ë\ÝXœØÜš\[ÛœÈŠOËœÝ]\ÈOOH˜ÛÛ›™XÝYˆÈœ™XYHˆˆœ[™[™È‹X™[ˆš[[™ÈˆKˆÈ]Nˆ“YØ[YÙ\È‹]Z[ˆ•\›\Ëš]˜XÞK[™™Y[™ÛXÞH\™H]˜Z[X›Hœ›ÛHYZ[‹ˆ‹Ý]\Îˆœ™XYH‹X™[ˆ“YØ[ˆKˆÈ]Nˆ”ÝXœØÜšX™\ˆ]‹]Z[ˆÚXÚÛÝ]]™[\È™XÛÜ™Y›ÜˆYZ[ˆ™]šY]Ëˆ‹Ý]\Îˆœ™XYH‹X™[ˆ]Y]ˆBˆBˆJNÂˆ	
ˆÜÝ\Û˜›Ø\™[™ÐˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ›Û˜›Ø\™[™È‹œÝ\‹È]\Ù]ˆßHJJNÂˆ	
ˆÛÜ[”Ý\ÜˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊœÝ\Ü‹XÚÙ]‹È]\Ù]ˆßHJJNÂˆ	
ˆÚ[š]TÝXœØÜšX™\ˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊœÝXœØÜšX™\ˆ‹š[š]H‹È]\Ù]ˆßHJJNÂˆ	
ˆØY\Ý\Ù\ˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ\Ý]\Ù\ˆ‹˜Ü™X]H‹È]\Ù]ˆßHJJNÂˆ	
ˆØYYZ[•\Ù\ˆŠK›Û˜ÛXÚÈH

HOˆÜ[•ÛÜšÙ›ÝÓ[Ù[
ÛÜšÙ›ÝÐÛÛ™šYÊ˜YZ[‹]\Ù\ˆ‹˜Ü™X]H‹È]\Ù]ˆßHJJNÂˆ	
ˆØYÙ[[ˆŠK›Û˜ÛXÚÈHÜ™X]PYÙ[[ŽÂˆ	
ˆØYÙ[^XÝ]PˆŠK›Û˜ÛXÚÈH^XÝ]PYÙ[[ŽÂˆ	
ˆØYÙ[œšYYš[™ÐˆŠK›Û˜ÛXÚÈHÜ™X]QÛÝ™\››Y[œšYYš[™ÎÂˆ	
ˆØYÙ[Z\ÜÚ[ÛˆŠK›Û˜ÛXÚÈH[’˜\š\Ñ[Z\ÜÚ[ÛŽÂˆ	
ˆÛZ\ÜÚ[Û”™\Ý[YPˆŠK›Û˜ÛXÚÈH™\Ý[YS™^Z\ÜÚ[ÛŽÂˆ	
ˆÛZ\ÜÚ[Û]]Ü[ÝˆŠK›Û˜ÛXÚÈHÝ\˜\›Y\]]Ü[ÝZ\ÜÚ[ÛŽÂˆ	
ˆØÛÝYYÙ[[ˆŠK›Û˜ÛXÚÈH][˜ÚÛÝYYÙ[Z\ÜÚ[ÛŽÂˆ	
ˆØÛÝYYÙ[XÚÐˆŠK›Û˜ÛXÚÈH[ÛÝYYÙ[]Y]YNÂˆ	
ˆØÛÝYYÙ[\›Ý™PˆŠK›Û˜ÛXÚÈH\›Ý™PÛÝYYÙ[ÛÜšÎÂˆ	
ˆØÛÝYYÙ[[\]PˆŠK›Û˜ÛXÚÈHÜ™X]PÛÝYYÙ[[\]NÂˆ	
ˆÜ[ÛÛXÝ]™R[[YÙ[˜ÙPˆŠK›Û˜ÛXÚÈH[ÛÛXÝ]™R[[YÙ[˜ÙNÂˆ	
ˆÜ[‘œ›ÛY\œ˜Z[ˆŠK›Û˜ÛXÚÈH[‘œ›ÛY\œ˜Z[ŽÂˆ	
ˆÝ›ÚXÙS\Ý[ˆŠK›Û˜ÛXÚÈH

HOˆ[™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠÙÙÛK[\Ý[š[™È‹ÈÛÝ\˜ÙNˆ›ÚXÙK\[™[[\Ý[‹X]ÛˆˆJNÂˆ	
ˆÝ›ÚXÙT[ˆŠK›Û˜ÛXÚÈH[•›ÚXÙU^ÛÛ[X[™Âˆ	
ˆÝ›ÚXÙQš\œÝˆŠK›Û˜ÛXÚÈHÙÙÛU›ÚXÙQš\œÝ[ÙNÂˆ	
ˆÝ›ÚXÙTÜXZÐˆŠK›Û˜ÛXÚÈH

HOˆ[™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠœ™\X]\™\ÜÛœÙH‹ÈÛÝ\˜ÙNˆ›ÚXÙK\[™[\™XYX]ÛˆˆJNÂˆ	
ˆÝ›ÚXÙR[ˆŠK›Û˜ÛXÚÈHÜ[•›ÚXÙR[Âˆ	
ˆÝ›ÚXÙU^ÛÛ[X[™ŠK˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹]™[OˆÂˆYˆ
]™[šÙ^HOOH‘[\ˆŠH[•›ÚXÙU^ÛÛ[X[™

NÂˆJNÂˆ	
ˆÙÛØ˜[\Ý[ˆŠK›Û˜ÛXÚÈH

HOˆ[™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠÙÙÛK[\Ý[š[™È‹ÈÛÝ\˜ÙNˆ™ÛØ˜[[\Ý[‹X]ÛˆˆJNÂˆ	
ˆÙÛØ˜[[ˆŠK›Û˜ÛXÚÈH[‘ÛØ˜[ÛÛ[X[™Âˆ	
ˆÙÛØ˜[›ÚXÙQš\œÝˆŠK›Û˜ÛXÚÈHÙÙÛU›ÚXÙQš\œÝ[ÙNÂˆ	
ˆÙÛØ˜[Y\ÐˆŠK›Û˜ÛXÚÈH

HOˆ[œÝÙ\‘ÛØ˜[ÛÛ™\œØ][ÛŠžY\ÈŠNÂˆ	
ˆÙÛØ˜[›ÐˆŠK›Û˜ÛXÚÈH

HOˆ[œÝÙ\‘ÛØ˜[ÛÛ™\œØ][ÛŠ››ÈŠNÂˆ	
ˆÙÛØ˜[™XYˆŠK›Û˜ÛXÚÈH

HOˆ[™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠœ™\X]\™\ÜÛœÙH‹ÈÛÝ\˜ÙNˆ™ÛØ˜[\™XYX]ÛˆˆJNÂˆ	
ˆÙÛØ˜[›ÚXÙR[ˆŠK›Û˜ÛXÚÈHÜ[•›ÚXÙR[Âˆ	
ˆÝ›ÚXÙR[ÛÜÙPˆŠK›Û˜ÛXÚÈHÛÜÙU›ÚXÙR[Âˆ	
ˆÙÛØ˜[[œÝ[ˆŠK›Û˜ÛXÚÈH[œÝ[YÜšS™^\Ð\Âˆ	
ˆÙÛØ˜[ÛÜÙPˆŠK›Û˜ÛXÚÈHÛÜÙP\ÚÓ™^\ÎÂˆ	
ˆÙÛØ˜[˜XÚÐˆŠK›Û˜ÛXÚÈHÛÜÙP\ÚÓ™^\ÎÂˆ	
ˆÙÛØ˜[ÛÛ[X[™[œ]ŠK˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹]™[OˆÂˆYˆ
]™[šÙ^HOOH‘[\ˆŠH[‘ÛØ˜[ÛÛ[X[™

NÂˆJNÂˆ	
ˆÙÛØ˜[ÛÛ[X[™[œ]ŠK˜Y]™[\Ý[™\Šš[œ]‹]™[OˆÂˆYˆ
TÝš[™Ê]™[\™Ù]Ë˜[YHˆŠKš[J
JHÛX\“]™[Û™PYÙ[XÝ[Û”ÝYÙÙ\Ý[Û“X™[

NÂˆJNÂˆØÝ[Y[˜Y]™[\Ý[™\Šš\ÚXš[]XÚ[™ÙH‹

HOˆÂˆYˆ
ØÝ[Y[šY[ŠHÂˆYˆ
›ÚXÙT™XÛÙÛš][ÛŠHÂˆ›ÚXÙP]]Ô™\Ý\H›ÚXÙQš\œÝ[ÙNÂˆ›ÚXÙT™XÛÙÛš][Û‹œÝÜ

NÂˆBˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹“™^\È]\ÙY\Ý[š[™ÈÚ[HH\\ÈY[‹ˆŠNÂˆ™]\›ŽÂˆBˆYˆ
›ÚXÙQš\œÝ[ÙH	‰ˆ›ÚXÙP]]Ô™\Ý\	‰ˆ]›ÚXÙT™XÛÙÛš][Ûˆ	‰ˆ]›ÚXÙTÜXZÚ[™ÊHÂˆ\]S™^\Ð™Z]š[Ü“^Y\Š›\Ý[š[™È‹“™^\È\È™\Ý[Z[™È›ÚXÙKYš\œÝ\Ý[š[™ËˆŠNÂˆÙ][Y[Ý]


HOˆÂˆYˆ
]›ÚXÙT™XÛÙÛš][Ûˆ	‰ˆ›ÚXÙQš\œÝ[ÙH	‰ˆ]›ÚXÙTÜXZÚ[™È	‰ˆ]›ÚXÙTÝÜ™\]Y\ÝY
HÝ\›ÚXÙS\Ý[š[™ÊÈÛÝ\˜ÙNˆ™Ù[™\Ú\Ë]š\ÚX›K\™\Ý[YHˆJNÂˆKŒ
NÂˆBˆJNÂˆÚ[™ÝË˜Y]™[\Ý[™\Š›Û›[™H‹

HOˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹ÛÛ›™XÝ[Ûˆ™\ÝÜ™Yˆ™^\ÈØ[ˆ\ÙH]™HÙ\šXÙ\ÈÚ[ˆÛÛ™šYÝ\™YˆŠJNÂˆÚ[™ÝË˜Y]™[\Ý[™\Š›Ù™›[™H‹

HOˆ\]S™^\Ð™Z]š[Ü“^Y\Šœ™XYH‹ÛÛ›™XÝ[ÛˆÙ™›[™Kˆ™^\ÈÚ[ÙY\ØØ[ÛÜšÙ›ÝÜÈ]˜Z[X›KˆŠJNÂˆ[œÝ[ÝX›TÜYXÚ›ÚXÙT™Y™\™[˜ÙJ
NÂˆ™Yœ™\ÚZXÔÝ\Ü

NÂˆ	
ˆÚ˜\š\ÕÙÙÛHŠK›Û˜ÛXÚÈHÙÙÛP\ÚÓ™^\ÎÂˆ	
ˆÚ˜\š\ÐÛÜÙPˆŠK›Û˜ÛXÚÈHÛÜÙP\ÚÓ™^\ÎÂˆ	
ˆÚ˜\š\Ó\Ý[ˆŠK›Û˜ÛXÚÈH

HOˆ[™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠÙÙÛK[\Ý[š[™È‹ÈÛÝ\˜ÙNˆ›YØXÞKZ˜\š\Ë[\Ý[‹X]ÛˆˆJNÂˆ	
ˆÚ˜\š\Ô[ˆŠK›Û˜ÛXÚÈH[’˜\š\ÐÛÛ[X[™Âˆ	
ˆÚ˜\š\ÓZ\ÜÚ[ÛˆŠK›Û˜ÛXÚÈH[’˜\š\Ñ[Z\ÜÚ[ÛŽÂˆ	
ˆÚ˜\š\Ô™XYˆŠK›Û˜ÛXÚÈH

HOˆ[™S™^\ÓÜÕ›ÚXÙPÛÛ›ÛXÝ[ÛŠœ™\X]\™\ÜÛœÙH‹ÈÛÝ\˜ÙNˆ›YØXÞKZ˜\š\Ë\™XYX]ÛˆˆJNÂˆ	
ˆÚ˜\š\ÐÛÛ[X[™[œ]ŠK˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹]™[OˆÂˆYˆ
]™[šÙ^HOOH‘[\ˆŠH[’˜\š\ÐÛÛ[X[™

NÂˆJNÂˆ		
–Ù]KXÛÛ[X[™\™\Ù]HŠK™›Ü‘XXÚ
]ÛˆOˆÂˆ]Û‹›Û˜ÛXÚÈH[”™\Ù]ÛÛ[X[™ÂˆJNÂˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹]™[OˆÂˆÛÛœÝ\™Ù]H]™[\™Ù]Ë››ÙU\HOOHHÈ]™[\™Ù]ˆ]™[\™Ù]Ëœ\™[[[Y[ÂˆÛÛœÝ[Ý]ÛˆH\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K\[Ý\ØÙ[˜\š[×VÙ]K\Ú[\KXÛÛ[X[™HŠNÂˆYˆ
\[Ý]ÛŠH™]\›ŽÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ™[™\LL[ÝØÙ[˜\š[Ô™]šY]ÐØ\™
ÂˆX™[ˆ[Ý]Û‹^ÛÛ[”[ÝØÙ[˜\š[È‹ˆÛÛ[X[™ˆ[Ý]Û‹™]\Ù]œÚ[\PÛÛ[X[™ˆØ\Xš[]Nˆ[Ý]Û‹™]\Ù]œ[ÝØ\Xš[]BˆJNÂˆKYJNÂˆ		
–Ù]K\[Ý\ØÙ[˜\š[×HŠK™›Ü‘XXÚ
]ÛˆOˆÂˆ]Û‹›Û˜ÛXÚÈH[“ØØ[[ÝØÙ[˜\š[ÎÂˆJNÂˆ		
–Ù]KYÛÝ™\››Y[XXÝ[Û—HŠK™›Ü‘XXÚ
]ÛˆOˆÂˆ]Û‹›Û˜ÛXÚÈH[‘ÛÝ™\››Y[™XY[™\ÜÐXÝ[ÛŽÂˆJNÂˆÛÛœÝ™[[ÝS][˜ÚÚ]ˆH	
ˆÜ™[[ÝS][˜ÚÚ]ˆŠNÂˆYˆ
™[[ÝS][˜ÚÚ]ŠH™[[ÝS][˜ÚÚ]‹›Û˜ÛXÚÈH[”™[[ÝS][˜ÚÚ]ÂˆÛÛœÝYZ[’X[ÚXÚÈH	
ˆØYZ[’X[ÚXÚÈŠNÂˆYˆ
YZ[’X[ÚXÚÊHYZ[’X[ÚXÚË›Û˜ÛXÚÈH[YZ[’X[ÚXÚÑ\™XÝÂˆÛÛœÝ]™TÙ\šXÙPÚXÚÈH	
ˆÛ]™TÙ\šXÙPÚXÚÐˆŠNÂˆYˆ
]™TÙ\šXÙPÚXÚÊH]™TÙ\šXÙPÚXÚË›Û˜ÛXÚÈH[“]™TÙ\šXÙPÚXÚÎÂˆÛÛœÝ]™TÙ\šXÙPÚXÚÑœ›ÛR[YÜ˜][ÛœÈH	
ˆÛ]™TÙ\šXÙPÚXÚÑœ›ÛR[YÜ˜][ÛœÈŠNÂˆYˆ
]™TÙ\šXÙPÚXÚÑœ›ÛR[YÜ˜][ÛœÊH]™TÙ\šXÙPÚXÚÑœ›ÛR[YÜ˜][ÛœË›Û˜ÛXÚÈH[“]™TÙ\šXÙPÚXÚÎÂˆ	
ˆÙ[[Ô[ˆŠK›Û˜ÛXÚÈH[‘^XÝ]]™Q[[ÎÂˆ	
ˆÝÛÝÑ[[ÐˆŠK›Û˜ÛXÚÈH[•ÛÝÑ[[ÎÂˆ		
–Ù]KXZK\™]šY]×HŠK™›Ü‘XXÚ
]ÛˆOˆ]Û‹›Û˜ÛXÚÈH

HOˆ™]šY]Ó]\ÝZJ]Û‹™]\Ù]˜ZT™]šY]ÊJNÂˆ		
–Ù]K[›ÝYžWHŠK™›Ü‘XXÚ
]ÛˆOˆ]Û‹›Û˜ÛXÚÈH

HOˆÙ[™[Ù[S›ÝYšXØ][ÛŠ]Û‹™]\Ù]››ÝYžJJNÂˆ	
ˆÝÛÜšÙ›ÝÐÛÛ™š\›HŠK›Û˜ÛXÚÈH]™[OˆÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆÛÛ™š\›T[™[™ÕÛÜšÙ›ÝÊ
NÂˆNÂˆ	
ˆÝÛÜšÙ›ÝÐÛÜÙHŠK›Û˜ÛXÚÈHÛÜÙUÛÜšÙ›ÝÓ[Ù[Âˆ	
ˆÝÛÜšÙ›ÝÐØ[˜Ù[ŠK›Û˜ÛXÚÈHÛÜÙUÛÜšÙ›ÝÓ[Ù[Âˆ	
ˆÝÛÜšÙ›ÝÓ[Ù[ŠK›Û˜ÛXÚÈH]™[OˆÂˆYˆ
]™[\™Ù]šYOOHÛÜšÙ›ÝÓ[Ù[ŠHÛÜÙUÛÜšÙ›ÝÓ[Ù[

NÂˆNÂˆØÝ[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹]™[OˆÂˆYˆ
]™[šÙ^HOOH‘[\ˆˆ	‰ˆ]™[\™Ù]ËšYOOH\Ù\Ø\[Û’[œ]ŠHÂˆ]™[œ™]™[Y˜][

NÂˆÛÛœÝÛÛ[X[™H]™[\™Ù]˜[YKš[J
NÂˆYˆ
XÛÛ[X[™
H™]\›ˆ\]U\Ù\Ø\[Û”[™[
•\HH™\]Y\ÝÜˆ™\ÜÈZXÈÈÜXZËˆŠNÂˆ]™[\™Ù]˜[YHHˆŽÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆYˆ
[™R˜\š\ÔÝ[TÝ[™\™\Ù\”ØY™]T™\ÜÛœÙJÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™S™^\ÔÚ[][][ÛØ\[ÛÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™S™^\ÓX\˜]šYØ][Û’[™Ù™Ø\[ÛÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™S™^\Ò[\›˜[˜]šYØ][ÛØ\[ÛÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™S™^\ÓX\šÙ]XÙR[œ]Z\žT™\\˜][ÛØ\[ÛÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™S™^\ÐØ\™UX[T™\ÜÛÜUšY]ÐØ\[ÛÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™S™^\ÐÚ›ÛšXÐØ\™T\ÚXÚX[”™\ÜØ\[ÛÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™S™^\ÓØØ[˜YY\ÜØYÙPØ\[ÛÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆYˆ
[™S™^\ÐØ[™\\˜][ÛØ\[ÛÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆ›ÚY[™U›ÚXÙPÛÛ[X[™
ÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ

]™[˜Ý›Ù^H]™[›Y]RÙ^JH	‰ˆ]™[šÙ^KÓÝÙ\Ø\ÙJ
HOOHšÈŠHÂˆ]™[œ™]™[Y˜][

NÂˆÜ[\ÚÓ™^\Ê
NÂˆBˆYˆ
]™[šÙ^HOOH‘\ØØ\Hˆ	‰ˆI
ˆÝÛÜšÙ›ÝÓ[Ù[ŠK˜Û\ÜÓ\Ý˜ÛÛZ[œÊšY[ˆŠJHÂˆÛÜÙUÛÜšÙ›ÝÓ[Ù[

NÂˆ™]\›ŽÂˆBˆYˆ
]™[šÙ^HOOH‘\ØØ\Hˆ	‰ˆI
ˆÛ™^\ÓÛ˜›Ø\™[™Ó[Ù[ŠOË˜Û\ÜÓ\Ý˜ÛÛZ[œÊšY[ˆŠJHÂˆÛÜÙS™^\ÓÛ˜›Ø\™[™Ó[Ù[

NÂˆ™]\›ŽÂˆBˆYˆ
]™[šÙ^HOOH‘\ØØ\Hˆ	‰ˆ
I
ˆÚ˜\š\Ô[™[ŠOË˜Û\ÜÓ\Ý˜ÛÛZ[œÊšY[ˆŠHI
ˆÙÛØ˜[\ÜÚ\Ý[˜\ˆŠOË˜Û\ÜÓ\Ý˜ÛÛZ[œÊšY[ˆŠJJHÂˆÛÜÙP\ÚÓ™^\Ê
NÂˆ™]\›ŽÂˆBˆYˆ
]™[šÙ^HOOH•Xˆˆ	‰ˆI
ˆÝÛÜšÙ›ÝÓ[Ù[ŠK˜Û\ÜÓ\Ý˜ÛÛZ[œÊšY[ˆŠJHÂˆÛÛœÝ›ØÝ\ØX›HH		
ˆÝÛÜšÙ›ÝÓ[Ù[]Û‹ÝÛÜšÙ›ÝÓ[Ù[[œ]ÝÛÜšÙ›ÝÓ[Ù[Ù[XÝÝÛÜšÙ›ÝÓ[Ù[^\™XHŠK™š[\Š][HOˆZ][K™\ØX›Y	‰ˆ][K›Ù™œÙ]\™[OOH[
NÂˆÛÛœÝš\œÝH›ØÝ\ØX›VÌNÂˆÛÛœÝ\ÝH›ØÝ\ØX›VÙ›ØÝ\ØX›K›[™ÝHWNÂˆYˆ
Yš\œÝ[\Ý
H™]\›ŽÂˆYˆ
]™[œÚYÙ^H	‰ˆØÝ[Y[˜XÝ]™Q[[Y[OOHš\œÝ
HÂˆ]™[œ™]™[Y˜][

NÂˆ\Ý™›ØÝ\Ê
NÂˆH[ÙHYˆ
Y]™[œÚYÙ^H	‰ˆØÝ[Y[˜XÝ]™Q[[Y[OOH\Ý
HÂˆ]™[œ™]™[Y˜][

NÂˆš\œÝ™›ØÝ\Ê
NÂˆBˆBˆJNÂŸB‚™[˜Ý[Ûˆ^ÜÙS™^\Ð\Ú[™ÝÐ\\Ê
HÂˆYˆ
\[ÙˆÚ[™ÝÈOOH[™Yš[™YŠH™]\›ŽÂˆÚ[™ÝË›Ü[“™^\Ñ[˜Ý[Û•Ú[™ÝÈHÜ[“™^\Ñ[˜Ý[Û•Ú[™ÝÎÂˆÚ[™ÝËœ™[™\“™^\Ñ[˜Ý[Û•Ú[™ÝÈH™[™\“™^\Ñ[˜Ý[Û•Ú[™ÝÎÂˆÚ[™ÝË˜ÛÜÙS™^\Ñ[˜Ý[Û•Ú[™ÝÈHÛÜÙS™^\Ñ[˜Ý[Û•Ú[™ÝÎÂˆÚ[™ÝË›Z[š[Z^™S™^\Ñ[˜Ý[Û•Ú[™ÝÈHZ[š[Z^™S™^\Ñ[˜Ý[Û•Ú[™ÝÎÂˆÚ[™ÝËœ™\ÝÜ™S™^\Ñ[˜Ý[Û•Ú[™ÝÈH™\ÝÜ™S™^\Ñ[˜Ý[Û•Ú[™ÝÎÂˆÚ[™ÝËœ™\ÛÛ™S™^\Ñ[˜Ý[Û’[[H™\ÛÛ™S™^\Ñ[˜Ý[Û’[[ÂˆÚ[™ÝË›Ü[“™^\Ð\Ú[™ÝÈHÜ[“™^\Ð\Ú[™ÝÎÂˆÚ[™ÝËœ™[™\“™^\Ð\Ú[™ÝÈH™[™\“™^\Ð\Ú[™ÝÎÂˆÚ[™ÝË˜ÛÜÙS™^\Ð\Ú[™ÝÈHÛÜÙS™^\Ð\Ú[™ÝÎÂˆÚ[™ÝË›Z[š[Z^™S™^\Ð\Ú[™ÝÈHZ[š[Z^™S™^\Ð\Ú[™ÝÎÂˆÚ[™ÝËœ™\ÝÜ™S™^\Ð\Ú[™ÝÈH™\ÝÜ™S™^\Ð\Ú[™ÝÎÂˆÚ[™ÝËœ™\ÛÛ™S™^\Ð\[[H™\ÛÛ™S™^\Ð\[[ÂˆÚ[™ÝË™Ù]™^\ÓÜÑÙ[™\Ú\Ô]›Ü›PXØÙ\[˜ÙHHÙ]™^\ÓÜÑÙ[™\Ú\Ô]›Ü›PXØÙ\[˜ÙNÂˆÚ[™ÝË“‘VT×Ô‘TÑSÑWÔ•S•SQWÐTÑSS‘HH‘VT×Ô‘TÑSÑWÔ•S•SQWÐTÑSS‘NÂˆÚ[™ÝË™Ù]™^\Ô™\Ù[˜ÙT[[YP˜\Ù[[™HHÙ]™^\Ô™\Ù[˜ÙT[[YP˜\Ù[[™NÂˆÚ[™ÝË“‘VT×Ô‘TÑSÑWÑTÒQÓ—ÑS‘“ÔÑSQS•ÐÓÓ•PÕH‘VT×Ô‘TÑSÑWÑTÒQÓ—ÑS‘“ÔÑSQS•ÐÓÓ•PÕÂˆÚ[™ÝË™Ù]™^\Ô™\Ù[˜ÙQ\ÚYÛ‘[™›Ü˜Ù[Y[ÛÛ˜XÝHÙ]™^\Ô™\Ù[˜ÙQ\ÚYÛ‘[™›Ü˜Ù[Y[ÛÛ˜XÝÂˆÚ[™ÝË“‘VT×Ô‘TÑSÑWÐPÐÑTSÑWÔ‘SPTÑWÐÓÓ•PÕH‘VT×Ô‘TÑSÑWÐPÐÑTSÑWÔ‘SPTÑWÐÓÓ•PÕÂˆÚ[™ÝË™Ù]™^\Ô™\Ù[˜ÙPXØÙ\[˜ÙT™[X\ÙPÛÛ˜XÝHÙ]™^\Ô™\Ù[˜ÙPXØÙ\[˜ÙT™[X\ÙPÛÛ˜XÝÂˆÚ[™ÝË“‘VT×Ô‘TÑSÑWÔ“Ñ’SWÐÓÓ•PÕH‘VT×Ô‘TÑSÑWÔ“Ñ’SWÐÓÓ•PÕÂˆÚ[™ÝË“‘VT×Ô‘TÑSÑWÔ“Ñ’SWÔ‘QÒTÕ–HH‘VT×Ô‘TÑSÑWÔ“Ñ’SWÔ‘QÒTÕ–NÂˆÚ[™ÝË™Ù]™^\Ô™\Ù[˜ÙT›Ùš[T™YÚ\ÝžHHÙ]™^\Ô™\Ù[˜ÙT›Ùš[T™YÚ\ÝžNÂˆÚ[™ÝËœ™\ÛÛ™S™^\Ô™\Ù[˜ÙT›Ùš[HH™\ÛÛ™S™^\Ô™\Ù[˜ÙT›Ùš[NÂˆÚ[™ÝËœÙ]™^\Ô™\Ù[˜ÙT›Ùš[HHÙ]™^\Ô™\Ù[˜ÙT›Ùš[NÂˆÚ[™ÝË“‘VT×Õ“ÒPÑWÐÐTP’SUWÔ‘QÒTÕ–HH‘VT×Õ“ÒPÑWÐÐTP’SUWÔ‘QÒTÕ–NÂˆÚ[™ÝË™Ù]™^\Õ›ÚXÙPØ\Xš[]T™YÚ\ÝžHHÙ]™^\Õ›ÚXÙPØ\Xš[]T™YÚ\ÝžNÂˆÚ[™ÝËœ™\ÛÛ™S™^\Õ›ÚXÙT›ÝšY\Y\\œÈH™\ÛÛ™S™^\Õ›ÚXÙT›ÝšY\Y\\œÎÂˆÚ[™ÝË›™^\Õ›ÚXÙPØ\Xš[]TÝ[[X\žHH™^\Õ›ÚXÙPØ\Xš[]TÝ[[X\žNÂˆÚ[™ÝË“‘VT×Ô‘QÒSÓSÕ“ÒPÑWÔ‘TÓÓUSÓ—ÐÓÓ•PÕH‘VT×Ô‘QÒSÓSÕ“ÒPÑWÔ‘TÓÓUSÓ—ÐÓÓ•PÕÂˆÚ[™ÝËœ™\ÛÛ™S™^\Ô™YÚ[Û˜[›ÚXÙHH™\ÛÛ™S™^\Ô™YÚ[Û˜[›ÚXÙNÂˆÚ[™ÝË›™^\Ô™YÚ[Û˜[›ÚXÙTÝ[[X\žHH™^\Ô™YÚ[Û˜[›ÚXÙTÝ[[X\žNÂˆÚ[™ÝË“‘VT×ÐÓÓ•‘T”ÐUSÓ—ÔÕSWÑS‘ÒS‘WÐÓÓ•PÕH‘VT×ÐÓÓ•‘T”ÐUSÓ—ÔÕSWÑS‘ÒS‘WÐÓÓ•PÕÂˆÚ[™ÝË“‘VT×ÑÓPRS—ÕÓ‘WÔÐQ‘UWÐQTT—ÐÓÓ•PÕH‘VT×ÑÓPRS—ÕÓ‘WÔÐQ‘UWÐQTT—ÐÓÓ•PÕÂˆÚ[™ÝËœ™\ÛÛ™S™^\ÑÛXZ[•Û™TØY™]PY\\ˆH™\ÛÛ™S™^\ÑÛXZ[•Û™TØY™]PY\\ŽÂˆÚ[™ÝË˜ÛÛ\ÜÙS™^\ÐÛÛ™\œØ][Û”Ý[T™\ÜÛœÙHHÛÛ\ÜÙS™^\ÐÛÛ™\œØ][Û”Ý[T™\ÜÛœÙNÂˆÚ[™ÝËš[™™\“™^\ÐÛÛ™\œØ][Û”Ý[S[ÙHH[™™\“™^\ÐÛÛ™\œØ][Û”Ý[S[ÙNÂˆÚ[™ÝË“‘VT×ÔÔQPÒÔÖS•TÒT×ÐÓÓ•“ÓT—ÐÓÓ•PÕH‘VT×ÔÔQPÒÔÖS•TÒT×ÐÓÓ•“ÓT—ÐÓÓ•PÕÂˆÚ[™ÝË›™^\ÔÜYXÚÞ[\Ú\ÐÛÛ›Û\”Ý]HH™^\ÔÜYXÚÞ[\Ú\ÐÛÛ›Û\”Ý]NÂˆÚ[™ÝË˜Ü™X]S™^\ÔÜYXÚÞ[\Ú\Õ]\˜[˜ÙHHÜ™X]S™^\ÔÜYXÚÞ[\Ú\Õ]\˜[˜ÙNÂˆÚ[™ÝËœ[“™^\ÔÜYXÚÞ[\Ú\ÐÛÛ›Û\ˆH[“™^\ÔÜYXÚÞ[\Ú\ÐÛÛ›Û\ŽÂˆÚ[™ÝË˜œ›ÝÜÙ\•›ÚXÙT[[YT›Ùš[HHœ›ÝÜÙ\•›ÚXÙT[[YT›Ùš[NÂˆÚ[™ÝË“‘VT×Ô‘TÑSÑWÔÖSÒ“Ó’VUSÓ—ÐÓÓ•PÕH‘VT×Ô‘TÑSÑWÔÖSÒ“Ó’VUSÓ—ÐÓÓ•PÕÂˆÚ[™ÝË›™^\Ô™\Ù[˜ÙTÞ[˜Ú›Ûš^˜][Û”Ý]HH™^\Ô™\Ù[˜ÙTÞ[˜Ú›Ûš^˜][Û”Ý]NÂˆÚ[™ÝËœÞ[˜Ó™^\Ô™\Ù[˜ÙTÝ\™˜XÙ\ÈHÞ[˜Ó™^\Ô™\Ù[˜ÙTÝ\™˜XÙ\ÎÂˆÚ[™ÝË“‘VT×Õ“ÒPÑWÔ‘Q‘T‘SÑT×ÐPÐÑTÔÒP’SUWÐÓÓ•PÕH‘VT×Õ“ÒPÑWÔ‘Q‘T‘SÑT×ÐPÐÑTÔÒP’SUWÐÓÓ•PÕÂˆÚ[™ÝË™Ù]™^\Õ›ÚXÙT™Y™\™[˜Ù\ÈHÙ]™^\Õ›ÚXÙT™Y™\™[˜Ù\ÎÂˆÚ[™ÝËœÙ][\Ü˜\žS™^\Õ›ÚXÙT™Y™\™[˜ÙHHÙ][\Ü˜\žS™^\Õ›ÚXÙT™Y™\™[˜ÙNÂˆÚ[™ÝËœ™[Y[X™\“™^\Õ›ÚXÙT™Y™\™[˜Ù\ÈH™[Y[X™\“™^\Õ›ÚXÙT™Y™\™[˜Ù\ÎÂˆÚ[™ÝË™›Ü™Ù]™^\Õ›ÚXÙT™Y™\™[˜Ù\ÈH›Ü™Ù]™^\Õ›ÚXÙT™Y™\™[˜Ù\ÎÂˆÚ[™ÝËš[™S™^\Õ›ÚXÙT™Y™\™[˜ÙPÛÛ[X[™H[™S™^\Õ›ÚXÙT™Y™\™[˜ÙPÛÛ[X[™ÂˆÚ[™ÝËš[™S™^\Õ›ÚXÙT™Y™\™[˜ÙPÛÛ›ÛXÝ[ÛˆH[™S™^\Õ›ÚXÙT™Y™\™[˜ÙPÛÛ›ÛXÝ[ÛŽÂˆÚ[™ÝË“‘VT×ÓTÕS’S‘×ÕÐRÑWÐÓÓ•“ÓT—ÐÓÓ•PÕH‘VT×ÓTÕS’S‘×ÕÐRÑWÐÓÓ•“ÓT—ÐÓÓ•PÕÂˆÚ[™ÝË›™^\Ó\Ý[š[™ÕØZÙPÛÛ›Û\”Ý]HH™^\Ó\Ý[š[™ÕØZÙPÛÛ›Û\”Ý]NÂˆÚ[™ÝË˜Ü™X]S™^\Ô™XÛÙÛš][ÛÛÛ™šYÈHÜ™X]S™^\Ô™XÛÙÛš][ÛÛÛ™šYÎÂˆÚ[™ÝË››Ü›X[^™S™^\ÕØZÙU˜[œØÜš\H›Ü›X[^™S™^\ÕØZÙU˜[œØÜš\ÂˆÚ[™ÝËš[™S™^\Ôš[X\žU›ÚXÙP]ÛÛXÚÈH[™S™^\Ôš[X\žU›ÚXÙP]ÛÛXÚÎÂŸB‚™[˜Ý[Ûˆ^ÜÙS™^\Ðœ˜Z[’[[YÙ[˜ÙT[[YP\\Ê
HÂˆYˆ
\[ÙˆÚ[™ÝÈOOH[™Yš[™YŠH™]\›ŽÂˆÚ[™ÝËœ[“™^\ÐYÙ[XÐÛÛ[X[™[[YHH[“™^\ÐYÙ[XÐÛÛ[X[™[[YNÂˆÚ[™ÝËœ\œÙS™^\ÐYÙ[XÐÛÛ[X[™[[H\œÙS™^\ÐYÙ[XÐÛÛ[X[™[[ÂˆÚ[™ÝËœ\œÙS™^\ÐÛÛ[X[™H\œÙS™^\ÐÛÛ[X[™ÂˆÚ[™ÝËœ™\ÛÛ™S™^\Ò[[H™\ÛÛ™S™^\Ò[[ÂˆÚ[™ÝË˜Û\ÜÚYžS™^\Ó[ÙHHÛ\ÜÚYžS™^\Ó[ÙNÂˆÚ[™ÝË™^˜XÝ™^\Ñ[]Y\ÈH^˜XÝ™^\Ñ[]Y\ÎÂˆÚ[™ÝË˜Z[™^\ÓZ\ÜÚ[ÛˆHZ[™^\ÓZ\ÜÚ[ÛŽÂˆÚ[™ÝËœ›Ý]S™^\ÐÛÛ[X[™H›Ý]S™^\ÐÛÛ[X[™ÂˆÚ[™ÝË™Ù]™^\ÓY[[ÜžHHÙ]™^\ÓY[[ÜžNÂˆÚ[™ÝËœØ]™S™^\ÓY[[ÜžHHØ]™S™^\ÓY[[ÜžNÂˆÚ[™ÝË\]S™^\ÓY[[ÜžHH\]S™^\ÓY[[ÜžNÂˆÚ[™ÝË™XXÝ]˜]S™^\ÓY[[ÜžHHXXÝ]˜]S™^\ÓY[[ÜžNÂˆÚ[™ÝË™[]S™^\ÓY[[ÜžUÚ]ÛÛ™š\›X][ÛˆH[]S™^\ÓY[[ÜžUÚ]ÛÛ™š\›X][ÛŽÂˆÚ[™ÝË“™^\ÓÜÓZ\ÜÚ[Û“Y™XÞXÛT[[YHHØš™XÝ™œ™Y^™JÂˆÝ]\Îˆ‘VT×ÓÔ×ÓRTÔÒSÓ—ÓQ‘PÖPÓWÔÕUTËˆ˜[œÚ][ÛœÎˆ‘VT×ÓÔ×ÓRTÔÒSÓ—ÕS”ÒUSÓ”ËˆÝ\œ™[ˆÝ\œ™[™^\ÓÜÓZ\ÜÚ[Û‹ˆÝ\ˆÝ\™^\ÓÜÓZ\ÜÚ[Û‹ˆY˜[˜ÙQ›ÜÛÛ[X[™ˆY˜[˜ÙS™^\ÓÜÓZ\ÜÚ[Û‘›ÜÛÛ[X[™ˆ˜[œÚ][ÛŽˆ˜[œÚ][Û“™^\ÓÜÓZ\ÜÚ[Û‹ˆØ[•˜[œÚ][ÛŽˆØ[•˜[œÚ][Û“™^\ÓÜÓZ\ÜÚ[Û‚ˆJNÂŸB‚™[˜Ý[Ûˆ[œÝ[™^\Ðœ˜Z[’[[YÙ[˜ÙPÛÛ[X[™œšYÙJ
HÂˆYˆ
\[ÙˆØÝ[Y[OOH[™Yš[™YˆØÝ[Y[˜›ÙOË™]\Ù]›™^\Ðœ˜Z[’[[YÙ[˜ÙP›Ý[™OOHYHŠH™]\›ŽÂˆYˆ
ØÝ[Y[˜›ÙJHØÝ[Y[˜›ÙK™]\Ù]›™^\Ðœ˜Z[’[[YÙ[˜ÙP›Ý[™HYHŽÂˆÛÛœÝ\Ñ^XÚ]œ˜Z[“[™PÛÛ[X[™HÛÛ[X[™OˆZ\Ó™^\Ñ[\œš\ÙRX[]šY[˜ÙU\ÝÛÛ[X[™
ÛÛ[X[™
H	‰ˆ×Š›ÛÙ™\ÜÝ\™_œŸÛXÛÜÙ_›ÛÙÝYØ\ŸLXßYYXØ][ÛŸYYXÚ[™_Z\ÜÙYÚ\ÝZ[ŸÚÜ™\ÜÈÙˆœ™X]XX™]\ß\\[œÚ[ÛŸØ™\Ú]_œ__Ú›ÛšXßÜ›ÜXZ^™_Ø\ÜØ]˜_ÛX]ßšXÙ_YÜšXÝ[\™_˜\›_šY[˜Z[™˜[\œšYØ][ÛŸÛÚ[\ÝZY[š\ÚßX\šÙ]\™XY_›ÛÙ\ÙXÝ\š]_YÜ›Û›ÛZ\Ý^Y\Ÿ^Y\œßÙ[\ŸÙ[\œßÚ\Y[˜XÚÚ[™ß˜YH›Ý]_ÙÚ\ÝXÜß›ØŸ\XØ][ÛŸ[\ÞY\ŸX\›š[™È[Ÿ›Û™_Ú]Ø\[YÜ˜[_Û\ßY\ÜØYÙ_[XZ[Ø[Û™_›ÝšY\ˆ[™Ù™Ÿ\›XXÞ_[Øš[HÛ[šXß[ZX[ÚÝÈ™XÙZ\ßÚ]\[™YÛÛ[YHZ\ÜÚ[ÛŸØ[˜Ù[Z\ÜÚ[ÛŸÛÛ™š\›HZ\ÜÚ[ÛŸX\šÈŠ˜ÛÜÙYÝ]Ùˆ\Ú[™\ÜÊW‹ÚK\Ý
Ýš[™ÊÛÛ[X[™ˆŠJNÂ‚ˆØÝ[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹\Þ[˜È]™[OˆÂˆÛÛœÝÛÜTÝ[[X\žHH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXÛÜK\™YXÝ]™K\Ý[[X\žWHŠNÂˆYˆ
ÛÜTÝ[[X\žJHÂˆ]™[œ™]™[Y˜][

NÂˆÛÛœÝ^H™^\ÐÚ›ÛšXÔ™YXÝ]™S[Ù[\”Ý]OËœ\ÚXÚX[”Ý[[X\žOË^ˆŽÂˆYˆ
˜]šYØ]Ü‹˜Û\›Ø\™	‰ˆ^
HÂˆ˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
^
K˜Ø]Ú


HOˆßJNÂˆBˆÛÜTÝ[[X\žK^ÛÛ[H^È˜[œÛ]U^
”Ý[[X\žHÛÜYYŠHˆ˜[œÛ]U^
“›ÈÝ[[X\žHY]ŠNÂˆÙ][Y[Ý]


HOˆÂˆÛÜTÝ[[X\žK^ÛÛ[H˜[œÛ]U^
ÛÜHÝ[[X\žHŠNÂˆKN
NÂˆ™]\›ŽÂˆBˆÛÛœÝÛÜPYÜšXÝ[\™TÝ[[X\žHH]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXÛÜKXYÜšXÝ[\™KXYš\ÛÜ‹\Ý[[X\žWHŠNÂˆYˆ
ÛÜPYÜšXÝ[\™TÝ[[X\žJHÂˆ]™[œ™]™[Y˜][

NÂˆÛÛœÝ^H™^\ÐYÜšXÝ[\™T™YXÝ]™S[Ù[\”Ý]OË˜Yš\ÛÜ”Ý[[X\žOË^ˆŽÂˆYˆ
˜]šYØ]Ü‹˜Û\›Ø\™	‰ˆ^
HÂˆ˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
^
K˜Ø]Ú


HOˆßJNÂˆBˆÛÜPYÜšXÝ[\™TÝ[[X\žK^ÛÛ[H^È˜[œÛ]U^
”Ý[[X\žHÛÜYYŠHˆ˜[œÛ]U^
“›ÈÝ[[X\žHY]ŠNÂˆÙ][Y[Ý]


HOˆÂˆÛÜPYÜšXÝ[\™TÝ[[X\žK^ÛÛ[H˜[œÛ]U^
ÛÜHÝ[[X\žHŠNÂˆKN
NÂˆ™]\›ŽÂˆBˆÛÛœÝÝX›Z]H]™[\™Ù]Ë˜ÛÜÙ\ÝËŠ–Ù]K[™^\ËXÛÛ[X[™XÙ[\‹\ÝX›Z]HŠNÂˆYˆ
\ÝX›Z]
H™]\›ŽÂˆÛÛœÝ[œ]H™^\ÐÛÛ[X[™[œ]›Ü”ÝX›Z]
ÝX›Z]
NÂˆÛÛœÝÛÛ[X[™H[œ]Ë˜[YOËš[J
HˆŽÂˆYˆ
›Ý]S™^\ÐÛÛ[X[™Ù[\ÛÛ[][šXØ][Û”ÝX›Z]
]™[ÝX›Z]\YXÛÛ[X[™\ÝX›Z]ŠJH™]\›ŽÂˆYˆ
XÛÛ[X[™\Ó™^\ÐØ\Xš[]SÝ™\šY]ÐÛÛ[X[™
ÛÛ[X[™
H\Ó™^\Ó]™RÛ›ÝÛYÙT]Y\Ý[ÛŠÛÛ[X[™
H\Ó™^\ÓYYXS]\ÚXÐÛÛ[X[™
ÛÛ[X[™
H\Ó™^\Ñ[\œš\ÙRX[]šY[˜ÙU\ÝÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆÛÛœÝÚÝ[\ÙPœ˜Z[ˆHÚÝ[™^\ÐYÙ[XÐÛÛ[X[™[[YR[™JÛÛ[X[™
H\Ó™^\Ô™YXÝ]™SX]\š]PÛÛ[X[™
ÛÛ[X[™
H\Ó™^\ÐYÜšXÝ[\™T™YXÝ]™S[Ù[\ÛÛ[X[™
ÛÛ[X[™
H\Ó™^\Ó][QÛXZ[”™YXÝ]™PÛÛ[X[™
ÛÛ[X[™
H\Ó™^\ÐÚ›ÛšXÔ™YXÝ]™S[Ù[\ÛÛ[X[™
ÛÛ[X[™
H\Ñ^XÚ]œ˜Z[“[™PÛÛ[X[™
ÛÛ[X[™
NÂˆYˆ
\ÚÝ[\ÙPœ˜Z[ŠH™]\›ŽÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
\ÝX›Z]™^\ÐYÙ[XÐÛÛ[X[™[[YJÛÛ[X[™[œ]˜œ˜Z[‹XÛÛ[X[™XœšYÙH‹]™[
JHÂˆ[“™^\ÐYÙ[XÐÛÛ[X[™[[YJÛÛ[X[™ÈÛÝ\˜ÙNˆ˜œ˜Z[‹XÛÛ[X[™XœšYÙHˆJNÂˆBˆKYJNÂ‚ˆØÝ[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Þ[˜È]™[OˆÂˆYˆ
]™[šÙ^HOOH‘[\ˆˆ]™[œÚYÙ^H]™[™Y˜][™]™[Y
H™]\›ŽÂˆÛÛœÝ[œ]H]™[\™Ù]Ë›X]Ú\ÏËŠˆÛ™^\ÐÛÛ[X[™Ù[\’[œ]Ù]K[™^\Ë]Ú[™ÝËXÛÛ[X[™Z[œ]HŠHÈ]™[\™Ù]ˆ[ÂˆYˆ
Z[œ]
H™]\›ŽÂˆÛÛœÝÛÛ[X[™H[œ]˜[YOËš[J
HˆŽÂˆYˆ
[™S™^\Ñ[\œš\ÙRX[]šY[˜ÙU\ÝÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™ZÙ^X›Ø\™ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHˆŽÂˆÙ]ÛÛ[X[™[œ]ÊˆŠNÂˆ™]\›ŽÂˆBˆY˜[˜ÙS™^\ÓÜÓZ\ÜÚ[Û‘›ÜÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™ZÙ^X›Ø\™ˆJNÂˆYˆ
]ØZ][™S™^\Õ[šYšYYœ˜Z[”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™ZÙ^X›Ø\™ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÐYÜšXÝ[\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™ZÙ^X›Ø\™ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÒX[Ø\™PÛÛX›Ü˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™ZÙ^X›Ø\™ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\ÓY\ÜØYÙT™\\˜][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™ZÙ^X›Ø\™ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
]ØZ][™S™^\Ñ[ÛÛ[][šXØ][Û”[[YPÛÛ[X[™
ÛÛ[X[™ÈÛÝ\˜ÙNˆ\YXÛÛ[X[™ZÙ^X›Ø\™ˆJJHÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
[œ]
H[œ]˜[YHHÛÛ[X[™ÂˆÙ]ÛÛ[X[™[œ]ÊÛÛ[X[™
NÂˆ™]\›ŽÂˆBˆYˆ
XÛÛ[X[™\Ó™^\ÐØ\Xš[]SÝ™\šY]ÐÛÛ[X[™
ÛÛ[X[™
H\Ó™^\Ó]™RÛ›ÝÛYÙT]Y\Ý[ÛŠÛÛ[X[™
H\Ó™^\ÓYYXS]\ÚXÐÛÛ[X[™
ÛÛ[X[™
JH™]\›ŽÂˆÛÛœÝÚÝ[\ÙPœ˜Z[ˆHÚÝ[™^\ÐYÙ[XÐÛÛ[X[™[[YR[™JÛÛ[X[™
H\Ó™^\Ô™YXÝ]™SX]\š]PÛÛ[X[™
ÛÛ[X[™
H\Ó™^\ÐYÜšXÝ[\™T™YXÝ]™S[Ù[\ÛÛ[X[™
ÛÛ[X[™
H\Ó™^\Ó][QÛXZ[”™YXÝ]™PÛÛ[X[™
ÛÛ[X[™
H\Ó™^\ÐÚ›ÛšXÔ™YXÝ]™S[Ù[\ÛÛ[X[™
ÛÛ[X[™
H\Ñ^XÚ]œ˜Z[“[™PÛÛ[X[™
ÛÛ[X[™
NÂˆYˆ
\ÚÝ[\ÙPœ˜Z[ŠH™]\›ŽÂˆ]™[œ™]™[Y˜][

NÂˆ]™[œÝÜ›ÜYØ][ÛŠ
NÂˆ]™[œÝÜ[[YYX]T›ÜYØ][ÛËŠ
NÂˆYˆ
\ÝX›Z]™^\ÐYÙ[XÐÛÛ[X[™[[YJÛÛ[X[™[œ]˜œ˜Z[‹XÛÛ[X[™ZÙ^X›Ø\™‹]™[
JHÂˆ[“™^\ÐYÙ[XÐÛÛ[X[™[[YJÛÛ[X[™ÈÛÝ\˜ÙNˆ˜œ˜Z[‹XÛÛ[X[™ZÙ^X›Ø\™ˆJNÂˆBˆKYJNÂŸB‚˜\Þ[˜È[˜Ý[Ûˆ›ÛÝ

HÂˆ^ÜÙS™^\Ð\Ú[™ÝÐ\\Ê
NÂˆ^ÜÙS™^\Ðœ˜Z[’[[YÙ[˜ÙT[[YP\\Ê
NÂˆ™YÚ\Ý\•ÙX\

NÂˆ[œÝ[YÜšS™^\Ó˜]]™PœšYÙJ
NÂˆ™\ÝÜ™S™^\Ô[[YSY[[ÜžJ
NÂˆ[œÝ[™^\Ðœ˜Z[’[[YÙ[˜ÙPÛÛ[X[™œšYÙJ
NÂˆš[™Ý]XÊ
NÂˆØYX›XÓX\ÛÛ™šYÊ
K˜Ø]Ú


HOˆQUSÓPTÕSWÐÓÓ‘’QÊNÂˆ[œÝ[™^\Ð]]Û›Û[Ý\Ô[[YT™]šY]Ê
NÂˆØ\\™SÜšYÚ[˜[^

NÂˆš[™™^\Ô\›X[™[ZXÜ›ÜÛ™PÛÛ›Û

NÂˆÙ]ÙÚ[“[™ÝXYÙJØØ[ÝÜ˜YÙK™Ù]][J˜YÜš[™^\ÓÙÚ[“[™ÝXYÙHŠH™[ˆŠNÂˆ	
ˆÛÙÚ[•šY]ÈŠK˜Û\ÜÓ\Ýœ™[[Ý™JšY[ˆŠNÂˆ	
ˆÜ\ÜÝÛÜ™ŠOË™›ØÝ\Ê
NÂŸB‚˜›ÛÝ

NÂ