const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

function hasAll(haystack, values, message) {
  values.forEach(value => assert(haystack.includes(value), `${message}: missing ${value}`));
}

hasAll(app, [
  "function renderUserWorkspace",
  "user-language-panel",
  "[\"en\", \"English\"]",
  "[\"fr\", \"French\"]",
  "[\"sw\", \"Kiswahili\"]",
  "[\"ar\", \"Arabic\"]",
  "[\"es\", \"Spanish\"]",
  "[\"pt\", \"Portuguese\"]",
  "[data-user-language]",
  "function renderUserSimpleActiveSection",
  "simpleUserSections",
  "insertAdjacentHTML(\"afterbegin\"",
  ":scope > .user-simple-module",
  "user-module-status",
  "data-user-voice-action",
  "data-close-user-language",
  "user-module-close",
  "userModeTranslationPack",
  "Object.entries(userModeTranslationPack)",
  "function nexusMemoryProfile",
  "function nexusIntentSignals",
  "function nexusIntelligenceRouterDecision",
  "function executeNexusIntelligenceRoute",
  "await handleNexusIntelligenceRouter(command)",
  "learning-support",
  "function nexusStrategicReasoningModel",
  "function enhanceNexusDecisionWithStrategy",
  "agrinexusStrategicReasoning",
  "nextBestAction",
  "function speechRateForLanguage",
  "function nexusUtilityAssistantResponse",
  "function nexusUtilityAssistantResponseV2",
  "async function runUtilityAgentCommand",
  "Ask Nexus daily utility assistant",
  "timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone",
  "function localTimeAnswer",
  "function appointmentAnswer",
  "function shipmentEtaAnswer",
  "function weatherAssistantAnswer",
  "function cropTimingAssistantAnswer",
  "function routeDelayAssistantAnswer",
  "function buyerMessageAssistantAnswer",
  "function fieldAlertAssistantAnswer",
  "function healthSafetyAssistantAnswer",
  "function nextStepAssistantAnswer",
  "what time is it",
  "track my shipment",
  "what time is my",
  "field alert",
  "buyer message",
  "what should i do next",
  "function speechSafetyRisk",
  "function applySpeechSafetyToDecision",
  "agrinexusSpeechSafety",
  "rate: speechRateForLanguage()",
  "function normalizeImperfectSpeech",
  "function normalizeMultilingualBehaviorCommand",
  "pt: \"pt-BR\"",
  "Ola ${name}. Como posso ajudar?",
  "mudar|mude|trocar|troque",
  "colheita",
  "Nexus, change language to Portuguese",
  "function adaptiveCommandUnderstanding",
  "agrinexusAdaptiveUnderstanding",
  "nexusAdaptiveUnderstandingSummary",
  "function nexusContextMemoryModel",
  "function nexusNextBestQuestion",
  "agrinexusContextMemory",
  "function nexusContextMemorySummary",
  "function nexusAdvisorProfile",
  "function nexusDecisionScoringModel",
  "function nexusPredictiveAdvisorModel",
  "function nexusLiveKnowledgeFeedReadiness",
  "agrinexusPredictiveAdvisor",
  "agrinexusLiveKnowledgeFeeds",
  "function nexusBehaviorMode",
  "function updateNexusBehaviorLayer",
  "function contextualVoiceSuggestions",
  "function nexusDeepMemorySignals",
  "function nexusAutopilotQueue",
  "function providerActionDepthStatus",
  "function nexusProactiveAlerts",
  "function mobilePermissionRecoveryGuide",
  "function interruptNexusSpeech",
  "voiceDemoQuietMode",
  "function disableNexusVoiceForDemo",
  "function enableNexusVoiceForDemo",
  "function isNexusVoiceOffCommand",
  "function isNexusVoiceOnCommand",
  "Demo quiet mode is on",
  "allowVoiceFirst: false",
  "stop talking for demo",
  "mute nexus",
  "title: \"Learn\"",
  "title: \"Find Work\"",
  "title: \"Health\"",
  "title: \"Trade\"",
  "title: \"Map\"",
  "title: \"AI Help\"",
  "pendingGrandmaAction",
  "function renderGrandmaConfirmation",
  "function simpleUserCommandWorkflow",
  "function renderUserProcessScreen",
  "function userProcessScreenHtml",
  "function activateSectionFromButton",
  "activateSectionFromButton(button)",
  "openDefaultAction: false",
  "event.target.closest(\"[data-section], [data-mobile-section]\")",
  "function openMappedUserWorkflow",
  "eventOrButton?.target?.closest",
  "eventOrButton?.currentTarget?.matches",
  "data-inline-workflow-confirm",
  "data-inline-workflow-cancel",
  "data-agent-pending-confirm",
  "agent-pending-confirm-card",
  "pendingWorkflow = config",
  "return renderUserProcessScreen(sectionId, config, mapped, label)",
  "closeAskNexus({ silent: true })",
  "row(\"How this works\"",
  "workflowStepHtml",
  "workflow-timeline-step",
  "function workflowOperatingScreenHtml",
  "function renderWorkflowLiveMap",
  "workflowLiveMapCanvas",
  "function learningUserCopy",
  "function workforceUserCopy",
  "function tradeUserCopy",
  "function healthUserCopy",
  "function workflowRealUseCoach",
  "function workflowRealUseCoachHtml",
  "function userServicePhotoHtml",
  "user-service-photo",
  "Plain meaning",
  "Ask this first",
  "Watch out",
  "Say next",
  "data.providerCandidates?.groups",
  "Rural African Farmer Provider Pipeline",
  "Rural Farmer Real Engine Pipeline",
  "African Country Coverage",
  "African Country Coverage Desk",
  "data.providerCandidates?.countryCoverage",
  "farmerFocus.successDefinition",
  "Legal/compliance",
  "Create legal and compliance packet",
  "workflow === \"provider-candidate\"",
  "/api/providers/candidates/shortlist",
  "function courseSelectOptions",
  "function productSelectOptions",
  "function routeSelectOptions",
  "closeAskNexus({ silent: true })",
  "const userSection = workflow === \"ai\" ? \"agent\" : workflow === \"map\" ? \"map\" : workflow",
  "experienceMode === \"user\" && simpleUserSections[userSection]",
  "lower.includes(\"help me\")",
  "action: \"orchestrate\"",
  "openDefaultAction: false",
  "function learningCertificateWorkflowConfig",
  "function openLearningCaptionSupport",
  "Captions are open. Speak now and Nexus will write the words here",
  "renderUserProcessScreen(userSection, config",
  "$(\"#workflowConfirm\").onclick",
  "Nexus is completing this workflow now.",
  "remoteLaunchKitBtn",
  "function runRemoteLaunchKit",
  "function openCaptionBox",
  "/api/pilot/remote-launch-kit",
  "Remote Rural Farmer Launch Kit",
  "await handleVoiceCommand(button.dataset.simpleCommand)",
  "data-grandma-confirm=\"yes\"",
  "data-grandma-confirm=\"no\"",
  "closeAskNexus({ silent: true })",
  "openAskNexus();",
  "await handleVoiceCommand(action.command);"
], "App-mode workflow behavior");

hasAll(styles, [
  "body.user-mode #dashboard > :not(#userWorkspace)",
  "body.user-mode .simple-home",
  "display: none !important",
  "body.user-mode #countrySelect",
  "body.user-mode .section.active:not(#dashboard) > :not(.user-simple-module)",
  "body.user-mode .user-module-preview",
  "body.user-mode .user-scene-visual",
  "body.user-mode .user-module-preview .shipment-map-card",
  "body.user-mode .user-real-map-card",
  "body.user-mode .user-real-map",
  "body.user-mode .user-simple-module",
  "min-height: calc(100vh - 162px)",
  "max-height: calc(100vh - 88px)",
  "body.user-mode .user-language-panel",
  "body.user-mode #countrySelect",
  "body.user-mode #platformLanguageSelect",
  "body:not(.user-mode) #topCaptionsBtn",
  "body:not(.user-mode) #topHomeBtn",
  "body.user-mode .user-language-header",
  "body.user-mode .user-language-buttons button",
  "body.user-mode .user-fast-actions",
  "body.user-mode .user-fast-action",
  "body.user-mode .user-preview-actions",
  ".user-visual-icon",
  "body.user-mode .user-voice-dock",
  "body.user-mode .user-caption-panel",
  "body.admin-mode .user-caption-panel",
  "body.investor-mode .user-caption-panel",
  ".user-caption-text",
  "body.user-mode .user-voice-dock #nexusBehaviorStatus",
  "body.user-mode .user-module-status",
  "body.user-mode .user-module-back",
  "body.user-mode .user-module-close",
  "body.user-mode #globalVoiceGuide",
  "body.user-mode .global-assistant",
  "max-height: calc(100vh - 24px)",
  "Final assistant containment pass",
  ".global-assistant:not(.hidden)",
  ".jarvis-panel:not(.hidden)",
  ".modal:not(.hidden)",
  "min-height: calc(100dvh - 16px)",
  "position: fixed",
  "z-index: 220",
  "body.user-mode .global-assistant .field-label",
  "body.user-mode .assistant-close",
  "white-space: nowrap",
  "body.user-mode .global-assistant-status",
  "overflow-wrap: break-word",
  "word-break: normal",
  "body.user-mode .grandma-workflow .workflow-fields",
  "body.user-mode .grandma-workflow .task-list",
  "body.user-mode .grandma-workflow .modal-actions button",
  "body.user-mode .user-inline-workflow",
  "body.user-mode .user-process-screen",
  "body.user-mode .user-process-actions",
  "body.user-mode #workforce .user-process-actions .primary",
  "body.user-mode .user-service-photo",
  "body.user-mode .user-service-photo-card",
  ".workflow-real-use-coach",
  ".workflow-real-use-grid",
  ".workflow-operating-screen",
  ".workflow-operating-body",
  ".workflow-live-map",
  ".workflow-timeline-step",
  ".user-inline-coach",
  "body.user-mode .toast"
], "App-mode containment styles");

hasAll(styles, [
  "service-learning",
  "service-workforce",
  "service-health",
  "service-trade",
  "service-map",
  "service-agent"
], "Color-coded app service buttons");

hasAll(app, [
  "label: \"Talk to Nexus\"",
  "section: \"ask\"",
  "label: \"Learn\"",
  "section: \"learning\"",
  "label: \"Find Work\"",
  "section: \"workforce\"",
  "label: \"Get Health Help\"",
  "section: \"health\"",
  "label: \"Sell Crops\"",
  "section: \"trade\"",
  "label: \"Map\"",
  "section: \"map\"",
  "label: \"AI Help\"",
  "section: \"agent\"",
  "photo:"
], "Visible app home services");

hasAll(app, [
  "lower.includes(\"show me jobs\")",
  "lower.includes(\"track my route\")",
  "lower.includes(\"check health risk\")",
  "lower.includes(\"nearest health facility\")",
  "lower.includes(\"explain the map\")",
  "lower.includes(\"help me understand the platform\")",
  "lower.includes(\"read the current response\")",
  "function isUniversalLanguageCommand",
  "function changeLanguageByVoice",
  "pendingAgentClarification = null;\n    await changeLanguageByVoice(command);",
  "function isGlobalStopCommand",
  "function clearConversationHold",
  "function isFreshActionDuringClarification",
  "Nexus heard a new request and cleared the old choice",
  "function guideAmbiguousUserWithoutChoice",
  "function nexusIntroductionResponse",
  "function nexusIntroLanguageNote",
  "Full app language modes are",
  "Say switch to",
  "Nexus learned the user's name",
  "How can I help you?",
  "meu nome e",
  "oruko mi ni",
  "sunana",
  "kombo na ngai",
  "function nexusCommonPhraseResponse",
  "I will slow down and keep answers shorter",
  "We will keep it simple",
  "function shouldAskRepeatForUnclearVoiceCommand",
  "function askUserToRepeatMisheardPhrase",
  "Please repeat it slowly",
  "I will repeat what I heard before doing anything",
  "function isSimpleCourseStartCommand",
  "function handleSimpleCourseStartCommand",
  "Tell me what you want next",
  "You do not need perfect words",
  "I hear you",
  "We can do this together",
  "you are not stuck",
  "Just tell me what you need",
  "You can keep talking",
  "Talk to me naturally",
  "function advisorBrainSignals",
  "function handleAdvisorBrainCommand",
  "function advisorCropCalendarAdvice",
  "learnerSupport",
  "workforceSupport",
  "mapSupport",
  "adminSupport",
  "integrationSupport",
  "investorSupport",
  "function rankedLogisticsRoutes",
  "function advisorLogisticsRecommendation",
  "function advisorCropConditionRecommendation",
  "Best current route",
  "Advisor recommendation",
  "Photo or video note",
  "Emergency escalation",
  "function moduleUseExplanation",
  "function userRealMapHtml",
  "function renderUserRealMap",
  "userMapCanvas",
  "function userHealthRegionalMapHtml",
  "function renderUserHealthMap",
  "userHealthMapCanvas",
  "function surroundingMapBounds",
  "function fitMapToSurroundingRegion",
  "L.control.scale",
  "workflowLeafletMap.remove",
  "OpenStreetMap",
  "function userDisplayName",
  "roleLike.has(name.toLowerCase())"
], "Voice behavior routes");

assert(!app.includes('{ label: "Me", section: "profile"'), "Standard User home should not expose profile clutter");
assert(!app.includes("Welcome back, ${data.user.role}"), "Ask Nexus should not welcome people by role label");
assert(!styles.includes("body.user-mode .user-mobile-dock button.active,\nbody.user-mode .user-mobile-dock button[data-mobile-ask] {\n  display:"), "Mobile dock should stay hidden in app mode");
assert(html.includes("addTestUserBtn"), "Admin should have a User-only test login button");
assert(app.includes('workflow === "test-user"'), "User-only test login needs workflow wiring");
assert(app.includes("This account cannot access Admin or Investor mode"), "User-only login flow should clearly exclude Admin and Investor");
assert(html.includes("addAdminUserBtn"), "Admin should have an Admin test login button");
assert(app.includes('workflow === "admin-user"'), "Admin test login needs workflow wiring");
assert(app.includes("Standard Users and Investors cannot run this workflow"), "Admin login flow should clearly exclude Standard Users and Investors");
assert(html.includes("userVoiceDock"), "User app shell needs a compact always-available voice dock");
assert(html.includes("globalBackBtn"), "Ask Nexus needs a clear Back to app close control");
assert(html.includes("nexusBehaviorStatus"), "User voice dock needs an assistant state indicator");
assert(html.includes('data-user-voice-action="listen"'), "User voice dock needs a speak action");
assert(html.includes('data-user-voice-action="type"'), "User voice dock needs a type action");
assert(html.includes('data-user-voice-action="read"'), "User voice dock needs a read action");
assert(!html.includes('data-user-voice-action="stop"'), "User voice dock should stay voice-first without a visible stop button");
assert(!html.includes('data-caption-action="stop"'), "Caption box should not expose a visible stop button");
assert(app.includes("activeVoiceRequestController.abort"), "Voice stop must abort pending OpenAI voice requests");
assert(app.includes("function postStopRedirectCommand"), "Voice stop must support redirecting to the next prompt");
assert(app.includes("voiceStopTranslations"), "Voice stop controls must translate in every supported language");
assert(app.includes("detente") && app.includes("arrete") && app.includes("simama") && app.includes("\u0627\u0648\u0642\u0641"), "Voice stop parser must understand multilingual stop phrases");
assert(app.includes("fuzzyWakeStop") && app.includes("texas") && app.includes("nexis"), "Voice stop parser must catch common Nexus mishears like Texas stop");
assert(app.includes("function resetNexusForNextPrompt"), "Voice stop must reset Nexus so the next question can be asked immediately");
assert(app.includes("Stopped. Ask me the next question or tell me where to go next."), "Voice stop recovery must tell users they can ask the next prompt");
assert(styles.includes("pointer-events: none") && styles.includes(".user-caption-actions") && styles.includes("pointer-events: auto"), "Caption panel must not block workflow action clicks");
assert(styles.includes("width: min(300px, calc(100vw - 24px))") && styles.includes("max-height: 138px"), "Caption panel must default to a small bubble");
assert(styles.includes(".user-caption-panel.expanded") && styles.includes("display: none") && styles.includes("display: grid"), "Caption input controls must appear only in expanded caption mode");
assert(html.includes("nexus-behavior-190"), "Index must force browsers to load Nexus behavior CSS");
assert(html.includes("nexus-behavior-190"), "Index must force browsers to load Nexus behavior JS");
assert(app.includes("shipmentPreviewMapCanvas") && app.includes("renderShipmentPreviewMap"), "Shipment preview maps must use real Leaflet canvases");
assert(app.includes("healthHotspotMapCanvas") && app.includes("renderHealthHotspotPreviewMap"), "Health hotspot maps must use real Leaflet canvases");
assert(app.includes("function shipmentTrackingState") && app.includes("function drawShipmentRoute"), "Shipment maps must render operational tracking state, not decorative routes");
assert(app.includes("shipment-tracker-strip") && app.includes("shipment-progress-bar"), "Shipment workflow needs visible tracking metrics and progress");
assert(styles.includes(".shipment-tracker-marker") && styles.includes(".shipment-progress-bar"), "Shipment tracker needs professional marker and progress styling");
assert(app.includes("World_Imagery/MapServer/tile"), "Maps must include real satellite imagery, not cartoon-style drawings");
assert(app.includes("World_Street_Map") && app.includes("Operational map") && app.includes("Street map"), "Maps must default to a real operational street layer with fallback choices");
assert(app.includes("function createGlobalGridLayer") && app.includes("Latitude/longitude grid"), "Maps must expose a latitude/longitude grid overlay");
assert(app.includes("function addGlobalMapControl") && app.includes("function globalMapBounds"), "Maps must include a global zoom control");
assert(app.includes("function addLiveMapStatusControl") && app.includes("real tile(s) loaded"), "Maps must expose in-app live tile loading status");
assert(app.includes('pane: "countryLabels"') && app.includes('"Country names and borders"'), "Maps must show country boundaries and labels above the base tiles");
assert(styles.includes(".map-grid-label") && styles.includes(".global-map-control") && styles.includes(".live-map-status-control"), "Real map grid, global controls, and live tile status need visible professional styling");
assert(app.includes("/api/trade/tracking") && app.includes("Refresh live tracking") && app.includes("Live GPS provider"), "Trade shipment workflows must expose live logistics/GPS tracking refresh");
assert(html.includes("Buyer/Seller Shipping Desk"), "Trade needs a buyer/seller shipping desk");
assert(html.includes('data-action="logistics-quote"') && html.includes('data-action="shipping-booking"') && html.includes('data-action="buyer-pickup"') && html.includes('data-action="seller-delivery"') && html.includes('data-action="delivery-confirm"') && html.includes('data-action="settlement"'), "Trade logistics buttons must be visible");
assert(app.includes("/api/trade/logistics") && app.includes("Buyer-seller shipping workflow complete") && app.includes("Price my shipment") && app.includes("ship my crop"), "Trade logistics workflows must call the backend with user-facing copy");
assert(server.includes("tradeLogisticsRecords") && server.includes("logistics.${type}") && server.includes("settlement-prepared"), "Backend must record buyer/seller logistics and settlement evidence");
assert(html.includes("AgriNexus Transaction Fees") && app.includes("platformTransactionFees") && app.includes("AgriNexus transaction fee"), "Trade settlement must expose AgriNexus transaction-fee revenue");
assert(server.includes("function createPlatformTransactionFee") && server.includes("platform.transaction_fee_captured") && server.includes("sellerNetAmount"), "Backend must capture platform fee and seller net payout at settlement");
assert(app.includes("function transactionReceiptCatalog") && app.includes("function downloadTransactionReceipt") && app.includes("data-download-receipt"), "All transaction ledgers must support downloadable receipts");
assert(app.includes("AGRINEXUS TRANSACTION RECEIPT") && app.includes("Seller net payout") && app.includes("AgriNexus fee"), "Receipt files must include transaction, platform fee, and net payout details");
assert(html.includes("Buyer Checkout") && html.includes('data-action="payment-checkout"'), "Trade needs a buyer checkout workflow button");
assert(app.includes("/api/trade/payment-checkout") && app.includes("paymentCheckoutRecords") && app.includes("Paystack") && app.includes("Flutterwave"), "Frontend must expose Paystack/Flutterwave buyer checkout records");
assert(server.includes("function initializeTradePaymentCheckout") && server.includes("api.paystack.co/transaction/initialize") && server.includes("api.flutterwave.com/v3/payments") && server.includes("PAYSTACK_SUBACCOUNT_CODE"), "Backend must initialize Paystack and Flutterwave checkout with split-fee setup");
assert(server.includes("public-weather-openmeteo") && server.includes("public-who-outbreaks") && server.includes("public-osm-geocoding") && server.includes("public-osm-services"), "Backend must expose public weather, outbreak, geocoding, and service-search providers");
assert(server.includes("function publicProviderProbePack") && server.includes("/api/providers/public-intelligence-check"), "Backend must provide a public intelligence provider check endpoint");
assert(html.includes('data-action="public-intelligence"') && app.includes("/api/providers/public-intelligence-check"), "Integrations UI must expose a public intelligence provider workflow");
assert(app.includes("World_Boundaries_and_Places/MapServer/tile"), "Satellite maps must show country names and borders");
assert(app.includes("startAskNexusAfterLogin") && app.includes("Welcome ${userFirstName()}"), "Ask Nexus should wake into voice-first mode after login");
assert(html.includes("Rural Health Access Network"), "Health module needs the rural health access network workspace");
assert(html.includes("guestName") && html.includes("guestStartBtn") && app.includes("function startGuestUserSession"), "Login must support name-first User entry for people without credentials");
assert(app.includes("agrinexusGuestDisplayName") && app.includes('translateText("Hello")') && app.includes('translateText("Nexus is opening your workspace.")'), "Guest User mode must greet the person by name before entering the workspace");
assert(html.includes("loginLanguageSelect") && app.includes("function setLoginLanguage") && app.includes("agrinexusLoginLanguage"), "Login screen must support language selection before sign-in");
assert(app.includes('request("/api/user/language"') && app.includes("loginLanguage !== data?.user?.language"), "Selected login language must carry into signed-in User/Admin/Investor sessions");
assert(app.includes("loginPersonalizationTranslations") && app.includes("Nexus will greet you by name and keep the app simple."), "Personal greeting/login text must be covered by multilingual translations");
assert(html.includes('data-health="symptom-guide"') && html.includes('data-health="nearest-clinic"') && html.includes('data-health="mobile-clinic"') && html.includes('data-health="pharmacy"') && html.includes('data-health="handoff"'), "Rural health access buttons must be visible");
assert(html.includes("Mobile Clinic Supply Network"), "Health module needs the mobile clinic supply network workspace");
assert(html.includes('data-health="supply-request"') && html.includes('data-health="supply-match"') && html.includes('data-health="supply-dispatch"') && html.includes('data-health="supply-delivery"'), "Mobile clinic supply workflow buttons must be visible");
assert(html.includes("Mobile Clinic Revenue Desk"), "Health module needs the mobile clinic revenue/payment workspace");
assert(html.includes('data-health="clinic-service-menu"') && html.includes('data-health="clinic-payment-request"') && html.includes('data-health="clinic-receipt"') && html.includes('data-health="clinic-payout"'), "Mobile clinic revenue workflow buttons must be visible");
assert(app.includes("/api/health/rural-network") && app.includes("renderRuralHealthAccessMap"), "Rural health workflows must call the backend and render a real map");
assert(app.includes("/api/health/mobile-clinic-revenue") && server.includes("mobileClinicRevenueRecords") && server.includes("mobile_clinic.payment_requested"), "Mobile clinic revenue workflows must call the backend and record billing evidence");
assert(app.includes("medical-supply") && app.includes("Mobile Clinic Supply Network"), "Mobile clinic supplies must appear in UI and map routing");
assert(app.includes("function drawRuralHealthNetwork") && app.includes("addRuralHealthMapLegend"), "Rural health workflows must render a visible clinic, pharmacy, mobile clinic, and supply route network");
assert(styles.includes(".rural-map-legend") && styles.includes(".legend-supply"), "Rural health maps need a readable legend for clinics, pharmacies, mobile clinics, and supply routes");
assert(server.includes("safeSymptomGuidance") && server.includes("notDiagnosis: true") && server.includes("ruralHealthNetworkCatalog"), "Backend rural health network must be non-diagnostic and backed by a catalog");
assert(server.includes("mobileClinicSupplyRequests") && server.includes("medicalSupplyFlags") && server.includes("rural_health.supply_dispatch_started"), "Backend mobile clinic supply network must create supply requests, compliance flags, and dispatch evidence");
assert(html.includes("topSettingsClose"), "Settings menu needs an explicit close control");
assert(app.includes("voiceShouldResumeAfterUiAction"), "User button actions must preserve active voice listening");
assert(app.includes("resumeVoiceAfterUiAction(shouldResumeVoice"), "User button actions must restore voice after guided workflows");
assert(app.includes("VOICE_RESTART_DELAY_MS = 320"), "Voice listening should restart quickly after Nexus speaks");
assert(app.includes("VOICE_UI_RESUME_DELAYS_MS = [180, 650, 1500, 3200, 5200]"), "User actions should restore mic listening quickly");
assert(app.includes("Heard: ${command}"), "Voice acknowledgement should stay short and responsive");
assert(app.includes("function nexusWakeGreeting") && app.includes("How can I help you?"), "Nexus must greet the signed-in user by name before taking commands");
assert(app.includes('experienceMode === "user" && !options.forceHandoff'), "Standard User voice responses must not automatically append the same handoff ending");
assert(app.includes("function stageNexusSpokenCommand") && app.includes("I am doing it now."), "Nexus must repeat a clear heard command and move into the action without a long confirmation prompt");
assert(app.includes("Nexus opened the requested workflow and is waiting for the next command."), "Voice workflows must open actions and wait for the next command instead of forcing another confirmation");
assert(app.includes("function executePendingNexusSpokenCommand") && app.includes("source: \"nexus-confirmation\""), "Confirmed Nexus commands must execute through the main voice handler");
assert(app.includes("agrinexusAutonomousLearningLog") && app.includes("command-confirmed"), "Nexus must record autonomous learning evidence for confirmed commands");
assert(app.includes("if (!id) return \"dashboard\";"), "Language changes must survive an empty hash without querying '#'");
assert(app.includes("document.getElementById(id)?.classList.contains(\"section\")"), "Section hash lookup must avoid invalid CSS selectors during language switching");
assert(app.includes("I want to sell maize"), "Nexus behavior layer should support natural trade requests without button hunting");
assert(app.includes("I need a doctor"), "Nexus behavior layer should support natural telehealth requests without button hunting");
assert(app.includes("function allModeVoiceCommandCatalog"), "Nexus needs an explicit all-mode voice command contract");
assert(app.includes("These commands are available in User, Admin, and Investor mode"), "Nexus must explain command support across all three modes");
assert(app.includes("what commands work in all modes"), "Voice help should expose an all-three-modes command phrase");
assert(app.includes("User, Admin, or Investor mode"), "Voice help response must say Nexus works in all three modes");
assert(app.includes("function migrantFriendlyVoiceIntent"), "Voice layer needs migrant-friendly imperfect English intent routing");
assert(app.includes("function simpleUserDirectVoiceIntent"), "User voice mode needs short direct routing before advisor/demo explanations");
assert(app.includes("spokenCommand"), "Voice readback must preserve the user's original spoken phrase before internal routing rewrites");
assert(app.includes("Is this for health, work, learning, crops, or the map?"), "Vague User help requests should ask one short clarifying question instead of guessing");
assert(app.includes("Health is open. I will guide you one step at a time."), "User health voice command should open Health with a short response");
assert(app.includes("Pharmacy help is open. I will help find medicine support and keep provider review attached."), "User medicine voice command should open pharmacy support before provider/intake routing");
assert(app.includes("Clinic search is open. I will help find the closest clinic option and show it on the map."), "User clinic-near-me voice command should open nearest clinic/map support before provider routing");
assert(app.includes("Trade is open. I will help find or contact the buyer."), "User crop-sale voice command should open Trade with a short response");
assert(app.includes("name's|my names|name is|name's|names"), "Name capture should accept natural name phrases");
assert(app.includes("doctor help"), "Voice help needs migrant-friendly health phrasing");
assert(app.includes("job please"), "Voice help needs migrant-friendly workforce phrasing");
assert(app.includes("where my product"), "Voice help needs migrant-friendly product tracking phrasing");
assert(app.includes("track transaction location"), "Voice help needs transaction and location tracking phrasing");
assert(app.includes("buy product"), "Voice help needs product buying phrasing");
assert(app.includes("i sick"), "Voice aliases need imperfect-English telehealth support");
assert(app.includes("crop buyer"), "Voice aliases need imperfect-English trade support");
assert(app.includes("I opened the map to track your product, transaction, sale route, and delivery location."), "Migrant-friendly trade tracking must open map route support");
assert(app.includes("function dynamicVoiceToolRegistry"), "Nexus needs a dynamic voice tool registry for unlimited-menu behavior");
assert(app.includes("function bestDynamicVoiceTool"), "Nexus needs dynamic tool scoring for natural commands");
assert(app.includes("await runDynamicVoiceTool(command)"), "Voice handler must try registered workflow tools before generic AI fallback");
assert(app.includes("I can also discover"), "Voice help should explain dynamic workflow discovery");
assert(app.includes("function voiceMissionTemplates"), "Advanced voice needs multi-step mission templates");
assert(app.includes("function isVoiceMissionRequest"), "Advanced voice needs clear mission detection");
assert(app.includes("opening the first step now"), "Mission requests should begin the first workflow without extra choice friction");
assert(app.includes("\\b(help|assist|walk me through|guide|start|run|i need|i want|please)\\b"), "Mission detection should accept natural help and want phrases");
assert(app.includes("\\b(help|assist|guide).*\\b(sell|selling)\\b"), "Crop-sale mission should catch help sell my crop phrasing");
assert(app.includes("function fillWorkflowFieldByVoice"), "Advanced voice needs form filling by speech");
assert(app.includes("function voiceWorkflowStatus"), "Advanced voice needs workflow status readout");
assert(app.includes("function voiceErrorRecovery"), "Advanced voice needs recovery when actions fail");
assert(app.includes("function modeSpecificVoicePersona"), "Advanced voice needs mode-specific persona behavior");
assert(app.includes("function recordVoiceEvent"), "Advanced voice needs real-time progress event stream");
assert(app.includes("start multi-step missions"), "Voice help must explain advanced voice capabilities");
assert(app.includes("Admin Operator"), "Nexus behavior layer should adapt for Admin mode");
assert(app.includes("Investor Presenter"), "Nexus behavior layer should adapt for Investor mode");
assert(app.includes("visibilitychange"), "Nexus behavior layer should recover voice-first listening after app visibility changes");
assert(app.includes("Nexus is resuming voice-first listening"), "Nexus behavior layer should explain listening recovery");
assert(app.includes("providerActionDepthStatus"), "Nexus behavior layer should summarize real provider action depth");
assert(app.includes("mobilePermissionRecoveryGuide"), "Nexus behavior layer should guide mobile permission recovery");
assert(server.includes("function collectiveIntelligenceEngine"), "Backend needs a collective intelligence engine");
assert(server.includes("/api/intelligence/collective-evolution"), "Backend needs a collective self-evolution endpoint");
assert(server.includes("agent.collective_intelligence_evolution"), "Collective intelligence needs provider/audit evidence");
assert(server.includes("collectiveEvolutionProposals"), "Collective intelligence needs a governed evolution backlog");
assert(html.includes("runCollectiveIntelligenceBtn"), "Agent Center needs a collective brain button");
assert(html.includes("Self-Evolution Proposals"), "Agent Center needs visible self-evolution proposals");
assert(html.includes("Admin approval required"), "Self-evolution UI must show governance approval language");
assert(app.includes("function runCollectiveIntelligence"), "Frontend needs a collective intelligence runner");
assert(app.includes("data.collectiveIntelligence"), "Frontend needs to render collective intelligence state");
assert(app.includes("/api/intelligence/collective-evolution"), "Frontend must call the collective evolution endpoint");
assert(app.includes("collective intelligence|collective brain|self evolve"), "Voice layer must recognize collective intelligence commands");
assert(server.includes("function frontierNexusBrainModel"), "Backend needs the highest-level Frontier Nexus Brain model");
assert(server.includes("/api/intelligence/frontier-brain"), "Backend needs a Frontier Nexus Brain endpoint");
assert(server.includes("agent.frontier_nexus_brain"), "Frontier brain needs provider/audit evidence");
assert(server.includes("frontierBrainRuns"), "Frontier brain needs persistent run history");
assert(html.includes("runFrontierBrainBtn"), "Agent Center needs an activate highest level button");
assert(html.includes("Frontier Nexus Brain"), "Agent Center needs visible Frontier Nexus Brain UI");
assert(app.includes("function runFrontierBrain"), "Frontend needs a Frontier Nexus Brain runner");
assert(app.includes("data.frontierBrain"), "Frontend needs to render Frontier Nexus Brain state");
assert(app.includes("/api/intelligence/frontier-brain"), "Frontend must call the Frontier Nexus Brain endpoint");
assert(app.includes("highest level|frontier brain|frontier nexus"), "Voice layer must recognize highest-level Frontier brain commands");

console.log("App behavior audit passed");
console.log("Checked: app-mode language picker, service buttons, section containment, workflow confirmations, voice routes, overflow wrapping, and advanced-panel hiding.");
