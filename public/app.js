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
let nativeVoiceSession = JSON.parse(localStorage.getItem("agrinexusNativem«ëŒ+Š×ž®º+º$zzb¥