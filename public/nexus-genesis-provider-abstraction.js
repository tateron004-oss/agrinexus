(function nexusGenesisProviderAbstractionFactory(root, factory) {
  const runtime = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  if (root) {
    root.NexusGenesisProviderAbstraction = runtime;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusGenesisProviderAbstractionModule() {
  const SERVICE_ID = "nexus_genesis_vendor_neutral_provider_abstraction";
  const SCHEMA_VERSION = "nexus.genesis.provider-abstraction.v1";

  const HIGH_IMPACT_CAPABILITIES = Object.freeze([
    "communications.sms",
    "communications.whatsapp",
    "communications.voice_call",
    "communications.email",
    "communications.secure_message",
    "health.appointment",
    "health.referral",
    "health.telehealth",
    "health.pharmacy",
    "health.laboratory",
    "health.crisis",
    "payments.card",
    "payments.bank",
    "payments.mobile_money",
    "finance.loan",
    "finance.insurance",
    "workforce.application",
    "learning.enrollment",
    "agriculture.buyer",
    "agriculture.finance",
    "logistics.booking",
    "drone.mission"
  ]);

  const DATA_CLASSES = Object.freeze([
    "public",
    "internal",
    "personal",
    "sensitive_personal",
    "health",
    "mental_health",
    "youth",
    "employment",
    "financial",
    "payment",
    "location",
    "biometric",
    "provider_credential",
    "government_restricted"
  ]);

  const PROVIDER_STATES = Object.freeze([
    "available",
    "configured",
    "credential-blocked",
    "configuration-blocked",
    "jurisdiction-blocked",
    "compliance-blocked",
    "legal-review-required",
    "license-restricted",
    "sandbox-only",
    "production-ready",
    "degraded",
    "unavailable",
    "disabled",
    "deprecated",
    "experimental",
    "not production-authorized"
  ]);

  const CAPABILITIES = Object.freeze([
    cap("ai.reasoning.general", "General AI reasoning", "ai", ["openai", "anthropic", "google-ai", "aws-bedrock", "local-model", "local.nexus"], ["public", "internal", "personal"]),
    cap("ai.reasoning.health", "Health-safe reasoning", "ai", ["openai", "anthropic", "azure-openai", "google-ai", "local.nexus"], ["public", "health", "mental_health"], true),
    cap("ai.reasoning.workforce", "Workforce reasoning", "ai", ["openai", "anthropic", "local.nexus"], ["public", "employment", "personal"]),
    cap("ai.reasoning.agriculture", "Agriculture reasoning", "ai", ["openai", "anthropic", "local.nexus"], ["public", "personal"]),
    cap("ai.embedding", "Embeddings", "ai", ["openai", "azure-openai", "google-ai", "local-model"], ["public", "internal", "personal"]),
    cap("ai.reranking", "Search reranking", "ai", ["local-model", "openai"], ["public", "internal"]),
    cap("ai.image_generation", "Image generation", "ai", ["openai", "google-ai"], ["public", "personal"], true),
    cap("ai.document_analysis", "Document analysis", "ai", ["openai", "azure-openai", "google-ai", "local.nexus"], ["public", "personal", "health", "employment"], true),
    cap("ai.translation", "Translation", "voice_translation", ["browser-speech", "azure-speech", "google-speech", "aws-speech", "local.nexus"], ["public", "personal", "health"], true),
    cap("ai.speech_to_text", "Speech to text", "voice_translation", ["browser-speech", "azure-speech", "google-speech", "aws-speech"], ["public", "personal", "health"], true),
    cap("ai.text_to_speech", "Text to speech", "voice_translation", ["browser-speech", "azure-speech", "google-speech", "aws-speech"], ["public", "personal"]),
    cap("cloud.compute", "Compute", "cloud", ["aws", "azure", "google-cloud", "local-deployment"], ["internal"]),
    cap("cloud.object_storage", "Object storage", "cloud", ["aws", "azure", "google-cloud", "local-deployment"], ["internal", "personal"]),
    cap("cloud.database", "Database", "cloud", ["aws", "azure", "google-cloud", "local-deployment"], ["internal", "personal", "health"], true),
    cap("cloud.queue", "Queue", "cloud", ["aws", "azure", "google-cloud", "local-deployment"], ["internal"]),
    cap("cloud.scheduler", "Scheduler", "cloud", ["aws", "azure", "google-cloud", "local-deployment"], ["internal"]),
    cap("cloud.secrets", "Secrets management", "cloud", ["aws", "azure", "google-cloud", "local-deployment"], ["provider_credential"], true),
    cap("cloud.monitoring", "Monitoring", "cloud", ["aws", "azure", "google-cloud", "local-deployment"], ["internal"]),
    cap("cloud.logging", "Logging", "cloud", ["aws", "azure", "google-cloud", "local-deployment"], ["internal"]),
    cap("cloud.backup", "Backup", "cloud", ["aws", "azure", "google-cloud", "local-deployment"], ["internal", "personal", "health"], true),
    cap("communications.email", "Email sending", "communications", ["sendgrid-email", "smtp-email"], ["personal", "health", "employment"], true),
    cap("communications.sms", "SMS messaging", "communications", ["twilio-sms"], ["personal", "health", "employment"], true),
    cap("communications.whatsapp", "WhatsApp messaging", "communications", ["twilio-whatsapp"], ["personal", "health", "employment"], true),
    cap("communications.push", "Push notification", "communications", ["local-push"], ["personal"]),
    cap("communications.voice_call", "Voice calls", "communications", ["twilio-voice"], ["personal", "health"], true),
    cap("communications.video", "Video session", "communications", ["daily-video", "zoom-video"], ["personal", "health"], true),
    cap("communications.secure_message", "Secure messaging", "communications", ["provider-secure-message"], ["health", "personal"], true),
    cap("maps.geocode", "Geocoding", "maps_weather", ["google-maps", "openstreetmap", "offline-maps"], ["public", "location"], true),
    cap("maps.reverse_geocode", "Reverse geocoding", "maps_weather", ["google-maps", "openstreetmap"], ["location"], true),
    cap("maps.route", "Route planning", "maps_weather", ["google-maps", "openstreetmap", "offline-maps"], ["public", "location"], true),
    cap("maps.traffic", "Traffic", "maps_weather", ["google-maps"], ["location"], true),
    cap("maps.offline", "Offline maps", "maps_weather", ["offline-maps"], ["public", "location"]),
    cap("weather.current", "Current weather", "maps_weather", ["national-weather", "commercial-weather"], ["public", "location"]),
    cap("weather.forecast", "Forecast", "maps_weather", ["national-weather", "commercial-weather"], ["public", "location"]),
    cap("climate.historical", "Historical climate", "maps_weather", ["national-weather", "commercial-weather", "climate-agriculture-source"], ["public"]),
    cap("climate.agriculture", "Agriculture climate support", "maps_weather", ["climate-agriculture-source", "national-weather"], ["public"]),
    cap("climate.alerts", "Climate alerts", "maps_weather", ["national-weather", "commercial-weather"], ["public", "location"]),
    cap("health.fhir", "FHIR exchange", "healthcare", ["fhir-provider"], ["health"], true),
    cap("health.ehr", "EHR integration", "healthcare", ["ehr-provider"], ["health"], true),
    cap("health.telehealth", "Telehealth visit", "healthcare", ["telehealth-provider", "daily-video", "zoom-video"], ["health", "personal"], true),
    cap("health.provider_search", "Provider search", "healthcare", ["cms-npi-public", "provider-directory"], ["public"]),
    cap("health.appointment", "Appointment request", "healthcare", ["telehealth-provider", "provider-directory"], ["health", "personal"], true),
    cap("health.referral", "Referral workflow", "healthcare", ["referral-provider"], ["health", "personal"], true),
    cap("health.pharmacy", "Pharmacy workflow", "healthcare", ["pharmacy-provider"], ["health", "personal"], true),
    cap("health.laboratory", "Laboratory workflow", "healthcare", ["laboratory-provider"], ["health"], true),
    cap("health.remote_monitoring", "Remote monitoring", "healthcare", ["rpm-provider"], ["health"], true),
    cap("health.crisis", "Crisis support routing", "healthcare", ["crisis-directory"], ["mental_health", "location"], true),
    cap("workforce.job_search", "Job search", "workforce_learning", ["workforce-public", "employer-partner"], ["public", "employment"]),
    cap("workforce.application", "Job application", "workforce_learning", ["employer-partner"], ["employment", "personal"], true),
    cap("workforce.employer", "Employer partner", "workforce_learning", ["employer-partner"], ["employment", "personal"], true),
    cap("workforce.apprenticeship", "Apprenticeship", "workforce_learning", ["apprenticeship-provider"], ["employment", "personal"], true),
    cap("learning.catalog", "Learning catalog", "workforce_learning", ["training-provider", "local.nexus"], ["public"]),
    cap("learning.enrollment", "Learning enrollment", "workforce_learning", ["training-provider"], ["personal", "employment"], true),
    cap("learning.assessment", "Learning assessment", "workforce_learning", ["training-provider", "local.nexus"], ["personal", "employment"], true),
    cap("learning.certificate", "Learning certificate", "workforce_learning", ["training-provider"], ["personal", "employment"], true),
    cap("agriculture.extension", "Extension support", "agriculture_market", ["agriculture-authority", "extension-partner", "local.nexus"], ["public", "personal"]),
    cap("agriculture.crop_data", "Crop data", "agriculture_market", ["agriculture-authority", "climate-agriculture-source", "local.nexus"], ["public"]),
    cap("agriculture.pest_alert", "Pest alert", "agriculture_market", ["agriculture-authority", "extension-partner"], ["public", "location"]),
    cap("agriculture.soil", "Soil support", "agriculture_market", ["agriculture-authority", "extension-partner"], ["public", "location"]),
    cap("agriculture.irrigation", "Irrigation support", "agriculture_market", ["agriculture-authority", "extension-partner"], ["public", "location"]),
    cap("agriculture.market", "Market intelligence", "agriculture_market", ["marketplace-provider", "buyer-partner"], ["public"]),
    cap("agriculture.buyer", "Buyer connection", "agriculture_market", ["buyer-partner"], ["personal", "financial"], true),
    cap("agriculture.cooperative", "Cooperative support", "agriculture_market", ["cooperative-partner"], ["personal", "financial"], true),
    cap("agriculture.finance", "Agriculture finance", "agriculture_market", ["finance-program-provider"], ["financial", "personal"], true),
    cap("agriculture.storage", "Storage support", "agriculture_market", ["storage-provider"], ["public", "personal"]),
    cap("logistics.quote", "Logistics quote", "logistics_drone", ["logistics-provider"], ["personal", "location", "financial"], true),
    cap("logistics.booking", "Logistics booking", "logistics_drone", ["logistics-provider"], ["personal", "location", "financial"], true),
    cap("logistics.tracking", "Logistics tracking", "logistics_drone", ["logistics-provider"], ["personal", "location"], true),
    cap("logistics.route", "Logistics route", "logistics_drone", ["logistics-provider", "google-maps"], ["location"], true),
    cap("logistics.storage", "Logistics storage", "logistics_drone", ["storage-provider"], ["personal", "financial"], true),
    cap("drone.mission", "Drone mission", "logistics_drone", ["drone-provider"], ["location", "financial"], true),
    cap("drone.telemetry", "Drone telemetry", "logistics_drone", ["drone-provider"], ["location"], true),
    cap("drone.weather", "Drone weather", "logistics_drone", ["drone-provider", "national-weather"], ["public", "location"]),
    cap("drone.compliance", "Drone compliance", "logistics_drone", ["drone-provider"], ["government_restricted", "location"], true),
    cap("payments.card", "Card payment", "payments_finance", ["stripe-card"], ["payment", "financial"], true),
    cap("payments.bank", "Bank payment", "payments_finance", ["bank-payment"], ["payment", "financial"], true),
    cap("payments.mobile_money", "Mobile money", "payments_finance", ["mobile-money"], ["payment", "financial"], true),
    cap("payments.refund", "Refund", "payments_finance", ["stripe-card", "bank-payment", "mobile-money"], ["payment", "financial"], true),
    cap("payments.status", "Payment status", "payments_finance", ["stripe-card", "bank-payment", "mobile-money"], ["payment", "financial"], true),
    cap("finance.loan", "Loan application", "payments_finance", ["finance-program-provider"], ["financial", "personal"], true),
    cap("finance.grant", "Grant readiness", "payments_finance", ["finance-program-provider"], ["financial", "personal"]),
    cap("finance.insurance", "Insurance workflow", "payments_finance", ["insurance-provider"], ["financial", "personal"], true)
  ]);

  const PROVIDERS = Object.freeze([
    provider("local.nexus", "Nexus Local Runtime", "AgriNexus", "local", ["ai.reasoning.general", "ai.reasoning.health", "ai.reasoning.workforce", "ai.reasoning.agriculture", "ai.document_analysis", "ai.translation", "learning.catalog", "agriculture.extension", "agriculture.crop_data"], [], ["public", "internal", "personal", "health", "employment"], { localFallbackSupport: true, productionSupport: true, healthState: "available", liveExecutionState: "local-only" }),
    provider("openai", "OpenAI", "OpenAI", "ai", ["ai.reasoning.general", "ai.reasoning.health", "ai.reasoning.workforce", "ai.reasoning.agriculture", "ai.embedding", "ai.reranking", "ai.image_generation", "ai.document_analysis"], ["OPENAI_API_KEY"], ["public", "internal", "personal", "health", "employment"], { fallbackPriority: 20 }),
    provider("anthropic", "Anthropic", "Anthropic", "ai", ["ai.reasoning.general", "ai.reasoning.health", "ai.reasoning.workforce", "ai.reasoning.agriculture"], ["ANTHROPIC_API_KEY"], ["public", "internal", "personal", "health", "employment"], { fallbackPriority: 30 }),
    provider("azure-openai", "Azure OpenAI", "Microsoft", "ai", ["ai.reasoning.health", "ai.embedding", "ai.document_analysis"], ["AZURE_OPENAI_API_KEY", "AZURE_OPENAI_ENDPOINT"], ["public", "internal", "personal", "health"], { fallbackPriority: 25 }),
    provider("google-ai", "Google AI", "Google", "ai", ["ai.reasoning.general", "ai.reasoning.health", "ai.embedding", "ai.image_generation", "ai.document_analysis"], ["GOOGLE_AI_API_KEY"], ["public", "internal", "personal", "health"], { fallbackPriority: 35 }),
    provider("aws-bedrock", "AWS Bedrock", "Amazon Web Services", "ai", ["ai.reasoning.general"], ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"], ["public", "internal", "personal"], { fallbackPriority: 40 }),
    provider("local-model", "Local Model Adapter", "AgriNexus/local deployment", "ai", ["ai.reasoning.general", "ai.embedding", "ai.reranking"], [], ["public", "internal"], { localFallbackSupport: true, healthState: "available", liveExecutionState: "local-only" }),
    provider("aws", "AWS Cloud", "Amazon Web Services", "cloud", ["cloud.compute", "cloud.object_storage", "cloud.database", "cloud.queue", "cloud.scheduler", "cloud.secrets", "cloud.monitoring", "cloud.logging", "cloud.backup"], ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"], ["internal", "personal", "health", "provider_credential"]),
    provider("azure", "Microsoft Azure", "Microsoft", "cloud", ["cloud.compute", "cloud.object_storage", "cloud.database", "cloud.queue", "cloud.scheduler", "cloud.secrets", "cloud.monitoring", "cloud.logging", "cloud.backup"], ["AZURE_CLIENT_ID", "AZURE_TENANT_ID", "AZURE_CLIENT_SECRET"], ["internal", "personal", "health", "provider_credential"]),
    provider("google-cloud", "Google Cloud", "Google", "cloud", ["cloud.compute", "cloud.object_storage", "cloud.database", "cloud.queue", "cloud.scheduler", "cloud.secrets", "cloud.monitoring", "cloud.logging", "cloud.backup"], ["GOOGLE_APPLICATION_CREDENTIALS"], ["internal", "personal", "health", "provider_credential"]),
    provider("local-deployment", "Local/Hybrid Deployment", "AgriNexus/local deployment", "cloud", ["cloud.compute", "cloud.object_storage", "cloud.database", "cloud.queue", "cloud.scheduler", "cloud.monitoring", "cloud.logging", "cloud.backup"], [], ["internal", "personal"], { localFallbackSupport: true, healthState: "available", liveExecutionState: "local-only" }),
    provider("browser-speech", "Browser Speech", "Browser runtime", "voice_translation", ["ai.speech_to_text", "ai.text_to_speech", "ai.translation"], [], ["public", "personal"], { localFallbackSupport: true, healthState: "available", liveExecutionState: "browser-only" }),
    provider("azure-speech", "Azure Speech", "Microsoft", "voice_translation", ["ai.speech_to_text", "ai.text_to_speech", "ai.translation"], ["AZURE_SPEECH_KEY", "AZURE_SPEECH_REGION"], ["public", "personal", "health"]),
    provider("google-speech", "Google Speech", "Google", "voice_translation", ["ai.speech_to_text", "ai.text_to_speech", "ai.translation"], ["GOOGLE_SPEECH_API_KEY"], ["public", "personal", "health"]),
    provider("aws-speech", "AWS Speech", "Amazon Web Services", "voice_translation", ["ai.speech_to_text", "ai.text_to_speech"], ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"], ["public", "personal"]),
    provider("google-maps", "Google Maps", "Google", "maps_weather", ["maps.geocode", "maps.reverse_geocode", "maps.route", "maps.traffic", "logistics.route"], ["GOOGLE_MAPS_API_KEY"], ["public", "location"], { fallbackPriority: 20 }),
    provider("openstreetmap", "OpenStreetMap", "OpenStreetMap community", "maps_weather", ["maps.geocode", "maps.route"], [], ["public", "location"], { healthState: "available", liveExecutionState: "read-only" }),
    provider("offline-maps", "Offline Maps", "AgriNexus/local map cache", "maps_weather", ["maps.offline", "maps.route"], [], ["public", "location"], { localFallbackSupport: true, healthState: "available", liveExecutionState: "local-only" }),
    provider("national-weather", "National Weather Source", "Jurisdiction-specific meteorological service", "maps_weather", ["weather.current", "weather.forecast", "climate.historical", "climate.alerts", "drone.weather"], ["NEXUS_WEATHER_PROVIDER_API_KEY"], ["public", "location"], { liveExecutionState: "read-only" }),
    provider("commercial-weather", "Commercial Weather Adapter", "Configured weather provider", "maps_weather", ["weather.current", "weather.forecast", "climate.historical", "climate.alerts"], ["NEXUS_WEATHER_PROVIDER_API_KEY"], ["public", "location"], { liveExecutionState: "read-only" }),
    provider("climate-agriculture-source", "Climate Agriculture Source", "Configured climate/agriculture source", "maps_weather", ["climate.agriculture", "climate.historical", "agriculture.crop_data"], ["NEXUS_CLIMATE_PROVIDER_API_KEY"], ["public"], { liveExecutionState: "read-only" }),
    provider("twilio-sms", "Twilio SMS", "Twilio", "communications", ["communications.sms"], ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_FROM_NUMBER"], ["personal", "health", "employment"], { requiresConfirmation: true }),
    provider("twilio-whatsapp", "Twilio WhatsApp", "Twilio", "communications", ["communications.whatsapp"], ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_WHATSAPP_FROM"], ["personal", "health", "employment"], { requiresConfirmation: true }),
    provider("twilio-voice", "Twilio Voice", "Twilio", "communications", ["communications.voice_call"], ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_FROM_NUMBER"], ["personal", "health"], { requiresConfirmation: true }),
    provider("sendgrid-email", "SendGrid Email", "Twilio SendGrid", "communications", ["communications.email"], ["SENDGRID_API_KEY", "NEXUS_EMAIL_FROM"], ["personal", "health", "employment"], { requiresConfirmation: true }),
    provider("smtp-email", "SMTP Email", "Configured SMTP provider", "communications", ["communications.email"], ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "NEXUS_EMAIL_FROM"], ["personal", "health", "employment"], { requiresConfirmation: true }),
    provider("daily-video", "Daily Video", "Daily.co", "communications", ["communications.video", "health.telehealth"], ["DAILY_API_KEY"], ["personal", "health"], { requiresConfirmation: true }),
    provider("zoom-video", "Zoom Video", "Zoom", "communications", ["communications.video", "health.telehealth"], ["ZOOM_ACCOUNT_ID", "ZOOM_CLIENT_ID", "ZOOM_CLIENT_SECRET"], ["personal", "health"], { requiresConfirmation: true }),
    provider("local-push", "Local Push Notification", "Browser/local runtime", "communications", ["communications.push"], [], ["personal"], { localFallbackSupport: true, liveExecutionState: "local-only" }),
    provider("provider-secure-message", "Provider Secure Message", "Configured health provider", "healthcare", ["communications.secure_message"], ["NEXUS_SECURE_MESSAGE_ENDPOINT", "NEXUS_SECURE_MESSAGE_API_KEY"], ["health", "personal"], { requiresConfirmation: true, complianceState: "awaiting_provider_baa" }),
    provider("stripe-card", "Stripe Card Payments", "Stripe", "payments_finance", ["payments.card", "payments.refund", "payments.status"], ["STRIPE_SECRET_KEY"], ["payment", "financial"], { requiresConfirmation: true, complianceState: "sandbox_required" }),
    provider("mobile-money", "Mobile Money Adapter", "Configured mobile money provider", "payments_finance", ["payments.mobile_money", "payments.refund", "payments.status"], ["NEXUS_MOBILE_MONEY_PROVIDER_ENDPOINT", "NEXUS_MOBILE_MONEY_API_KEY"], ["payment", "financial"], { requiresConfirmation: true, complianceState: "jurisdiction_review_required" }),
    provider("bank-payment", "Bank Payment Adapter", "Configured banking provider", "payments_finance", ["payments.bank", "payments.refund", "payments.status"], ["NEXUS_BANK_PAYMENT_ENDPOINT", "NEXUS_BANK_PAYMENT_API_KEY"], ["payment", "financial"], { requiresConfirmation: true, complianceState: "financial_review_required" }),
    provider("fhir-provider", "FHIR Provider", "Configured FHIR endpoint", "healthcare", ["health.fhir"], ["FHIR_BASE_URL", "FHIR_CLIENT_ID", "FHIR_CLIENT_SECRET"], ["health"], { complianceState: "baa_required" }),
    provider("ehr-provider", "EHR Provider", "Configured EHR partner", "healthcare", ["health.ehr"], ["EHR_BASE_URL", "EHR_CLIENT_ID", "EHR_CLIENT_SECRET"], ["health"], { complianceState: "baa_required" }),
    provider("telehealth-provider", "Telehealth Provider", "Configured virtual care provider", "healthcare", ["health.telehealth", "health.appointment"], ["NEXUS_TELEHEALTH_PROVIDER_ENDPOINT", "NEXUS_TELEHEALTH_PROVIDER_API_KEY"], ["health", "personal"], { requiresConfirmation: true, complianceState: "provider_contract_required" }),
    provider("cms-npi-public", "CMS NPI Registry", "CMS NPPES", "healthcare", ["health.provider_search"], [], ["public"], { healthState: "available", liveExecutionState: "read-only" }),
    provider("provider-directory", "Provider Directory", "Configured provider directory", "healthcare", ["health.provider_search", "health.appointment"], ["NEXUS_PROVIDER_DIRECTORY_ENDPOINT", "NEXUS_PROVIDER_DIRECTORY_API_KEY"], ["public", "health", "personal"], { requiresConfirmation: true }),
    provider("referral-provider", "Referral Provider", "Configured referral partner", "healthcare", ["health.referral"], ["NEXUS_REFERRAL_PROVIDER_ENDPOINT", "NEXUS_REFERRAL_PROVIDER_API_KEY"], ["health", "personal"], { requiresConfirmation: true, complianceState: "provider_contract_required" }),
    provider("pharmacy-provider", "Pharmacy Provider", "Configured pharmacy partner", "healthcare", ["health.pharmacy"], ["NEXUS_PHARMACY_PROVIDER_ENDPOINT", "NEXUS_PHARMACY_PROVIDER_API_KEY"], ["health", "personal"], { requiresConfirmation: true, complianceState: "pharmacy_review_required" }),
    provider("laboratory-provider", "Laboratory Provider", "Configured lab partner", "healthcare", ["health.laboratory"], ["NEXUS_LAB_PROVIDER_ENDPOINT", "NEXUS_LAB_PROVIDER_API_KEY"], ["health"], { requiresConfirmation: true, complianceState: "lab_review_required" }),
    provider("rpm-provider", "RPM Provider", "Configured remote monitoring partner", "healthcare", ["health.remote_monitoring"], ["NEXUS_RPM_PROVIDER_ENDPOINT", "NEXUS_RPM_PROVIDER_API_KEY"], ["health"], { requiresConfirmation: true, complianceState: "clinical_review_required" }),
    provider("crisis-directory", "Crisis Directory", "Jurisdiction-approved crisis source", "healthcare", ["health.crisis"], ["NEXUS_CRISIS_DIRECTORY_ENDPOINT", "NEXUS_CRISIS_DIRECTORY_API_KEY"], ["mental_health", "location"], { requiresConfirmation: true, complianceState: "jurisdiction_review_required" }),
    provider("workforce-public", "Public Workforce Source", "Configured public workforce source", "workforce_learning", ["workforce.job_search"], ["NEXUS_WORKFORCE_SOURCE_ENDPOINT"], ["public", "employment"], { liveExecutionState: "read-only" }),
    provider("employer-partner", "Employer Partner", "Configured employer partner", "workforce_learning", ["workforce.job_search", "workforce.application", "workforce.employer"], ["NEXUS_EMPLOYER_PARTNER_ENDPOINT", "NEXUS_EMPLOYER_PARTNER_API_KEY"], ["employment", "personal"], { requiresConfirmation: true }),
    provider("apprenticeship-provider", "Apprenticeship Provider", "Configured apprenticeship partner", "workforce_learning", ["workforce.apprenticeship"], ["NEXUS_APPRENTICESHIP_PROVIDER_ENDPOINT", "NEXUS_APPRENTICESHIP_PROVIDER_API_KEY"], ["employment", "personal"], { requiresConfirmation: true }),
    provider("training-provider", "Training Provider", "Configured learning provider", "workforce_learning", ["learning.catalog", "learning.enrollment", "learning.assessment", "learning.certificate"], ["NEXUS_TRAINING_PROVIDER_ENDPOINT", "NEXUS_TRAINING_PROVIDER_API_KEY"], ["public", "employment", "personal"], { requiresConfirmation: true }),
    provider("agriculture-authority", "Agriculture Authority", "Configured official agriculture source", "agriculture_market", ["agriculture.extension", "agriculture.crop_data", "agriculture.pest_alert", "agriculture.soil", "agriculture.irrigation"], ["NEXUS_AGRICULTURE_AUTHORITY_ENDPOINT"], ["public", "location"], { liveExecutionState: "read-only" }),
    provider("extension-partner", "Extension Partner", "Configured agriculture extension partner", "agriculture_market", ["agriculture.extension", "agriculture.pest_alert", "agriculture.soil", "agriculture.irrigation"], ["NEXUS_EXTENSION_PARTNER_ENDPOINT", "NEXUS_EXTENSION_PARTNER_API_KEY"], ["public", "personal", "location"], { requiresConfirmation: true }),
    provider("marketplace-provider", "Marketplace Provider", "Configured marketplace source", "agriculture_market", ["agriculture.market"], ["NEXUS_MARKETPLACE_PROVIDER_ENDPOINT", "NEXUS_MARKETPLACE_PROVIDER_API_KEY"], ["public"], { liveExecutionState: "read-only" }),
    provider("buyer-partner", "Buyer Partner", "Configured buyer partner", "agriculture_market", ["agriculture.market", "agriculture.buyer"], ["NEXUS_BUYER_PARTNER_ENDPOINT", "NEXUS_BUYER_PARTNER_API_KEY"], ["personal", "financial"], { requiresConfirmation: true }),
    provider("cooperative-partner", "Cooperative Partner", "Configured cooperative partner", "agriculture_market", ["agriculture.cooperative"], ["NEXUS_COOPERATIVE_PARTNER_ENDPOINT", "NEXUS_COOPERATIVE_PARTNER_API_KEY"], ["personal", "financial"], { requiresConfirmation: true }),
    provider("finance-program-provider", "Finance Program Provider", "Configured finance/grant source", "payments_finance", ["agriculture.finance", "finance.loan", "finance.grant"], ["NEXUS_FINANCE_PROGRAM_ENDPOINT", "NEXUS_FINANCE_PROGRAM_API_KEY"], ["financial", "personal"], { requiresConfirmation: true }),
    provider("storage-provider", "Storage Provider", "Configured storage provider", "agriculture_market", ["agriculture.storage", "logistics.storage"], ["NEXUS_STORAGE_PROVIDER_ENDPOINT", "NEXUS_STORAGE_PROVIDER_API_KEY"], ["personal", "financial"], { requiresConfirmation: true }),
    provider("logistics-provider", "Logistics Provider", "Configured logistics provider", "logistics_drone", ["logistics.quote", "logistics.booking", "logistics.tracking", "logistics.route"], ["NEXUS_LOGISTICS_PROVIDER_ENDPOINT", "NEXUS_LOGISTICS_PROVIDER_API_KEY"], ["personal", "location", "financial"], { requiresConfirmation: true }),
    provider("drone-provider", "Drone Provider", "Configured drone provider", "logistics_drone", ["drone.mission", "drone.telemetry", "drone.weather", "drone.compliance"], ["NEXUS_DRONE_PROVIDER_ENDPOINT", "NEXUS_DRONE_PROVIDER_API_KEY"], ["location", "financial", "government_restricted"], { requiresConfirmation: true, complianceState: "aviation_review_required" }),
    provider("insurance-provider", "Insurance Provider", "Configured insurance partner", "payments_finance", ["finance.insurance"], ["NEXUS_INSURANCE_PROVIDER_ENDPOINT", "NEXUS_INSURANCE_PROVIDER_API_KEY"], ["financial", "personal"], { requiresConfirmation: true, complianceState: "insurance_review_required" })
  ]);

  function cap(capabilityId, name, family, providerIds, dataClasses, regulated = false) {
    return Object.freeze({ capabilityId, name, family, providerIds, dataClasses, regulated, highImpact: HIGH_IMPACT_CAPABILITIES.includes(capabilityId) });
  }

  function provider(providerId, displayName, legalOrganizationName, family, capabilities, requiredEnv, allowedDataClasses, overrides = {}) {
    return Object.freeze({
      providerId,
      displayName,
      legalOrganizationName,
      family,
      serviceCategory: family,
      capabilities,
      countries: overrides.countries || ["global"],
      regions: overrides.regions || ["global"],
      jurisdictions: overrides.jurisdictions || ["global"],
      languages: overrides.languages || ["English"],
      currencies: overrides.currencies || ["USD"],
      environments: overrides.environments || ["local", "staging", "production"],
      sandboxSupport: overrides.sandboxSupport !== false,
      productionSupport: overrides.productionSupport === true,
      authenticationType: requiredEnv.length ? "environment_secret" : "none",
      requiredEnv,
      fallbackEnv: overrides.fallbackEnv || [],
      endpoints: overrides.endpoints || ["redacted_or_runtime_configured"],
      privacyTerms: overrides.privacyTerms || "provider_terms_required_before_production",
      dataRetention: overrides.dataRetention || "provider_specific",
      dataResidency: overrides.dataResidency || "jurisdiction_review_required",
      pricingModel: overrides.pricingModel || "provider_specific",
      rateLimitModel: overrides.rateLimitModel || "provider_specific",
      uptimeTarget: overrides.uptimeTarget || "provider_specific",
      healthState: overrides.healthState || "unavailable",
      credentialState: requiredEnv.length ? "credential-required" : "not-required",
      configurationState: requiredEnv.length ? "configuration-required" : "configured",
      legalState: overrides.legalState || "contract_required_before_production",
      complianceState: overrides.complianceState || "review_required_before_sensitive_or_regulated_use",
      governanceState: overrides.governanceState || "policy_gate_required",
      liveExecutionState: overrides.liveExecutionState || "not production-authorized",
      fallbackPriority: overrides.fallbackPriority || 100,
      localFallbackSupport: overrides.localFallbackSupport === true,
      adapterVersion: overrides.adapterVersion || "provider-abstraction-v1",
      owner: overrides.owner || "Nexus platform",
      receiptSupport: overrides.receiptSupport !== false,
      requiresConfirmation: overrides.requiresConfirmation === true,
      allowedDataClasses
    });
  }

  function nonBlank(value) {
    return typeof value === "string" ? value.trim().length > 0 : Boolean(value);
  }

  function getEnv(env = {}) {
    if (env && typeof env === "object") return env;
    return {};
  }

  function credentialStatus(providerId, env = {}) {
    const providerRecord = inspectProvider(providerId, { includeTechnical: true });
    if (!providerRecord) {
      return Object.freeze({ providerId, configured: false, state: "unknown-provider", missingEnv: [] });
    }
    const runtimeEnv = getEnv(env);
    const missingEnv = providerRecord.requiredEnv.filter(name => !nonBlank(runtimeEnv[name]));
    return Object.freeze({
      providerId,
      configured: missingEnv.length === 0,
      state: missingEnv.length === 0 ? "configured" : "credential-blocked",
      missingEnv,
      requiredEnv: providerRecord.requiredEnv.slice(),
      secretValuesExposed: false
    });
  }

  function redactProvider(providerRecord, env = {}) {
    const credentials = credentialStatus(providerRecord.providerId, env);
    return Object.freeze({
      ...providerRecord,
      endpoints: ["redacted"],
      configured: credentials.configured,
      credentialState: credentials.state,
      missingEnv: credentials.missingEnv,
      requiredEnv: providerRecord.requiredEnv.slice(),
      secretValuesExposed: false
    });
  }

  function listProviderFamilies() {
    return Object.freeze([...new Set(PROVIDERS.map(item => item.family))].sort());
  }

  function listProviders(options = {}) {
    const env = options.env || {};
    return Object.freeze(PROVIDERS.map(item => options.includeTechnical ? item : redactProvider(item, env)));
  }

  function inspectProvider(providerId, options = {}) {
    const found = PROVIDERS.find(item => item.providerId === providerId);
    if (!found) return null;
    return options.includeTechnical ? found : redactProvider(found, options.env || {});
  }

  function listCapabilities() {
    return CAPABILITIES;
  }

  function discoverCapabilities(capabilityId) {
    if (!capabilityId) return listCapabilities();
    return CAPABILITIES.filter(item => item.capabilityId === capabilityId || item.family === capabilityId);
  }

  function capabilityById(capabilityId) {
    return CAPABILITIES.find(item => item.capabilityId === capabilityId) || null;
  }

  function checkReadiness(providerId, env = {}) {
    const providerRecord = inspectProvider(providerId, { includeTechnical: true });
    if (!providerRecord) {
      return Object.freeze({ providerId, ready: false, state: "unknown-provider", reasons: ["Provider is not registered."] });
    }
    const credentials = credentialStatus(providerId, env);
    const ready = credentials.configured && !["disabled", "deprecated", "unavailable"].includes(providerRecord.healthState);
    return Object.freeze({
      providerId,
      ready,
      state: ready ? "configured" : credentials.state,
      healthState: providerRecord.healthState,
      liveExecutionState: providerRecord.liveExecutionState,
      missingEnv: credentials.missingEnv,
      reasons: ready ? [] : [
        ...credentials.missingEnv.map(name => `Missing ${name}`),
        providerRecord.healthState === "unavailable" ? "Provider health is unavailable until configured/tested." : null,
        providerRecord.liveExecutionState === "not production-authorized" ? "Production execution is not authorized until policy, consent, confirmation, and outcome verification are satisfied." : null
      ].filter(Boolean)
    });
  }

  function estimateCost(request = {}) {
    const providerRecord = inspectProvider(request.providerId || "local.nexus", { includeTechnical: true });
    const units = Number(request.units || 1);
    const external = providerRecord && providerRecord.requiredEnv.length > 0;
    return Object.freeze({
      providerId: providerRecord?.providerId || "unknown",
      estimatedUnits: units,
      model: external ? "provider_specific_metered" : "local_no_provider_charge",
      estimatedCostLevel: external ? "unknown_until_provider_quote" : "none",
      currency: providerRecord?.currencies?.[0] || "USD"
    });
  }

  function checkJurisdiction(request = {}) {
    const providerRecord = inspectProvider(request.providerId || "", { includeTechnical: true });
    if (!providerRecord) return Object.freeze({ allowed: false, state: "unknown-provider", reason: "Provider is not registered." });
    const country = String(request.country || "global").toLowerCase();
    const jurisdiction = String(request.jurisdiction || country || "global").toLowerCase();
    const providerJurisdictions = (providerRecord.jurisdictions || []).map(item => String(item).toLowerCase());
    const allowed = providerJurisdictions.includes("global") || providerJurisdictions.includes(country) || providerJurisdictions.includes(jurisdiction);
    return Object.freeze({
      allowed,
      state: allowed ? "allowed" : "jurisdiction-blocked",
      country,
      jurisdiction,
      reason: allowed ? "Provider jurisdiction supports the request." : "Provider is not approved for the requested jurisdiction."
    });
  }

  function checkDataClass(request = {}) {
    const providerRecord = inspectProvider(request.providerId || "", { includeTechnical: true });
    if (!providerRecord) return Object.freeze({ allowed: false, state: "unknown-provider", reason: "Provider is not registered." });
    const dataClass = request.dataClass || "public";
    const allowed = providerRecord.allowedDataClasses.includes(dataClass);
    return Object.freeze({
      allowed,
      state: allowed ? "allowed" : "data-class-blocked",
      dataClass,
      reason: allowed ? "Provider accepts this data class." : `Provider is not approved for ${dataClass} data.`
    });
  }

  function evaluatePolicy(request = {}) {
    const capability = capabilityById(request.capabilityId);
    const providerId = request.providerId || capability?.providerIds?.[0] || "local.nexus";
    const providerRecord = inspectProvider(providerId, { includeTechnical: true });
    const dataClass = request.dataClass || "public";
    const jurisdiction = checkJurisdiction({ ...request, providerId });
    const dataPolicy = checkDataClass({ ...request, providerId, dataClass });
    const highImpact = Boolean(capability?.highImpact || HIGH_IMPACT_CAPABILITIES.includes(request.capabilityId));
    const consentOk = !highImpact || request.consentState === "granted";
    const confirmationOk = !highImpact || request.confirmationState === "confirmed";
    const productionAuthorized = providerRecord?.productionSupport === true && consentOk && confirmationOk && jurisdiction.allowed && dataPolicy.allowed;
    const reasons = [];
    if (!capability) reasons.push("Capability is not registered.");
    if (!providerRecord) reasons.push("Provider is not registered.");
    if (!jurisdiction.allowed) reasons.push(jurisdiction.reason);
    if (!dataPolicy.allowed) reasons.push(dataPolicy.reason);
    if (highImpact && !consentOk) reasons.push("Consent is required before high-impact provider use.");
    if (highImpact && !confirmationOk) reasons.push("Explicit user confirmation is required before execution.");
    if (providerRecord && providerRecord.liveExecutionState === "not production-authorized") reasons.push("Provider execution is not production-authorized.");
    return Object.freeze({
      allowed: reasons.length === 0 && productionAuthorized,
      executionAuthority: false,
      state: reasons.length ? "blocked" : "policy-ready",
      highImpact,
      providerId,
      capabilityId: request.capabilityId,
      dataClass,
      requiresConsent: highImpact,
      requiresConfirmation: highImpact || providerRecord?.requiresConfirmation === true,
      requiresOutcomeVerification: highImpact || providerRecord?.requiredEnv?.length > 0,
      productionAuthorized,
      reasons,
      noSilentExecution: true,
      noSecretExposure: true
    });
  }

  function selectProvider(request = {}) {
    const capability = capabilityById(request.capabilityId);
    if (!capability) {
      return Object.freeze({
        selectedProvider: null,
        state: "capability-not-registered",
        rejectedProviders: [],
        fallbackPlan: ["Use local safe response only.", "Do not execute external actions."],
        executionAuthority: false
      });
    }
    const env = request.env || {};
    const candidates = PROVIDERS.filter(item => item.capabilities.includes(capability.capabilityId))
      .sort((a, b) => a.fallbackPriority - b.fallbackPriority);
    const evaluated = candidates.map(candidate => {
      const readiness = checkReadiness(candidate.providerId, env);
      const policy = evaluatePolicy({ ...request, providerId: candidate.providerId, dataClass: request.dataClass || capability.dataClasses[0] || "public" });
      const score = (readiness.ready ? 100 : 0) + (candidate.localFallbackSupport ? 50 : 0) + (policy.reasons.length === 0 ? 20 : 0) - candidate.fallbackPriority;
      return Object.freeze({ provider: redactProvider(candidate, env), readiness, policy, score });
    });
    const local = evaluated.find(item => item.provider.providerId === "local.nexus" || item.provider.localFallbackSupport);
    const configured = evaluated.find(item => item.readiness.ready && item.policy.reasons.length === 0);
    const selected = configured || local || evaluated[0] || null;
    const rejectedProviders = evaluated.filter(item => !selected || item.provider.providerId !== selected.provider.providerId).map(item => ({
      providerId: item.provider.providerId,
      displayName: item.provider.displayName,
      state: item.readiness.state,
      missingEnv: item.readiness.missingEnv,
      reasons: [...item.readiness.reasons, ...item.policy.reasons]
    }));
    return Object.freeze({
      selectedProvider: selected?.provider || null,
      state: configured ? "configured-provider-selected" : selected?.provider?.localFallbackSupport ? "local-fallback-selected" : "blocked",
      capabilityId: capability.capabilityId,
      capabilityName: capability.name,
      rejectedProviders,
      fallbackPlan: [
        configured ? "Configured provider can be used only after all policy gates pass." : "Use local safe response or credential-blocked state.",
        "Never execute calls, messages, payments, provider submissions, bookings, dispatches, or regulated workflows silently.",
        "Create receipt and outcome-verification record for any approved execution."
      ],
      expectedCost: estimateCost({ capabilityId: capability.capabilityId, providerId: selected?.provider?.providerId, units: request.units || 1 }),
      executionAuthority: false,
      requiresConfirmation: capability.highImpact,
      requiresConsent: capability.highImpact,
      receiptRequired: true
    });
  }

  function createReceipt(request = {}, selection = null, outcome = {}) {
    const selected = selection?.selectedProvider || selection?.provider || inspectProvider(request.providerId || "local.nexus");
    const receiptId = `provider-abstraction-receipt-${Date.now()}-${String(request.capabilityId || "capability").replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
    return Object.freeze({
      receiptId,
      packetType: "nexus_genesis_provider_abstraction_receipt",
      schemaVersion: SCHEMA_VERSION,
      capabilityId: request.capabilityId || selection?.capabilityId || "unknown",
      providerId: selected?.providerId || "none",
      providerDisplayName: selected?.displayName || "No provider selected",
      dataClass: request.dataClass || "public",
      consentState: request.consentState || "missing",
      confirmationState: request.confirmationState || "missing",
      executionAuthority: false,
      acknowledgementIsNotOutcome: true,
      finalOutcomeVerified: outcome.finalOutcomeVerified === true,
      status: outcome.status || "prepared_or_blocked",
      outcomeSummary: outcome.summary || "No live external action was executed.",
      missingEnv: outcome.missingEnv || [],
      noSecretExposure: true,
      noSilentExecution: true,
      createdAt: new Date().toISOString()
    });
  }

  function execute(request = {}) {
    const selection = selectProvider(request);
    const providerRecord = selection.selectedProvider;
    const external = providerRecord && providerRecord.requiredEnv && providerRecord.requiredEnv.length > 0;
    const readiness = providerRecord ? checkReadiness(providerRecord.providerId, request.env || {}) : null;
    const policy = providerRecord ? evaluatePolicy({ ...request, providerId: providerRecord.providerId }) : null;
    let status = "blocked";
    let summary = "No provider was selected.";
    let missingEnv = [];
    if (providerRecord?.localFallbackSupport) {
      status = "local_fallback_completed";
      summary = "Nexus handled this with the local safe runtime. No external provider action was executed.";
    } else if (external && readiness && !readiness.ready) {
      status = "credential-blocked";
      summary = "The provider is not configured. Missing environment variable names are listed without secret values.";
      missingEnv = readiness.missingEnv || [];
    } else if (policy && policy.reasons.length) {
      status = "policy-blocked";
      summary = "The provider path is blocked until consent, confirmation, jurisdiction, compliance, and outcome-verification gates pass.";
    } else {
      status = "execution-prepared";
      summary = "The provider path is prepared but live execution remains disabled in this abstraction layer.";
    }
    const receipt = createReceipt(request, selection, { status, summary, missingEnv });
    return Object.freeze({
      ok: status === "local_fallback_completed" || status === "execution-prepared",
      status,
      packetType: "nexus_genesis_provider_abstraction_execution_packet",
      schemaVersion: SCHEMA_VERSION,
      selection,
      policy,
      missingEnv,
      receipt,
      noLiveExternalExecution: true,
      noSecretExposure: true,
      noSilentExecution: true
    });
  }

  function verifyOutcome(receipt = {}) {
    return Object.freeze({
      receiptId: receipt.receiptId || "unknown",
      verified: receipt.finalOutcomeVerified === true,
      state: receipt.finalOutcomeVerified === true ? "verified" : "not_verified",
      note: "Acknowledgement, queueing, or provider preparation is not treated as a final real-world outcome."
    });
  }

  function inferCapabilityFromCommand(command = "") {
    const text = String(command || "").toLowerCase();
    if (/aws|required|cloud|running locally|production authorized|provider.*connected|which provider|ai model/.test(text)) return "ai.reasoning.general";
    if (/send.*sms|text message|sms/.test(text)) return "communications.sms";
    if (/whatsapp/.test(text)) return "communications.whatsapp";
    if (/email/.test(text)) return "communications.email";
    if (/phone|call/.test(text)) return "communications.voice_call";
    if (/appointment|book/.test(text)) return "health.appointment";
    if (/payment|pay|card|refund/.test(text)) return "payments.card";
    if (/weather|climate/.test(text)) return "weather.forecast";
    if (/route|map|field visit/.test(text)) return "maps.route";
    if (/provider|doctor|clinic|telehealth/.test(text)) return "health.provider_search";
    if (/pharmacy|prescription|refill/.test(text)) return "health.pharmacy";
    if (/job|workforce|employer/.test(text)) return "workforce.job_search";
    if (/training|learn|enroll/.test(text)) return "learning.catalog";
    if (/buyer|marketplace|market/.test(text)) return "agriculture.market";
    if (/crop|farm|agriculture|soil|irrigation/.test(text)) return "agriculture.extension";
    return "ai.reasoning.general";
  }

  function capabilityStatus(command = "", options = {}) {
    const capabilityId = options.capabilityId || inferCapabilityFromCommand(command);
    const selection = selectProvider({
      capabilityId,
      dataClass: options.dataClass || "public",
      country: options.country || "global",
      jurisdiction: options.jurisdiction || "global",
      consentState: options.consentState || "missing",
      confirmationState: options.confirmationState || "missing",
      env: options.env || {}
    });
    const awsMandatory = false;
    return Object.freeze({
      packetType: "nexus_genesis_provider_abstraction_capability_status_packet",
      schemaVersion: SCHEMA_VERSION,
      serviceId: SERVICE_ID,
      command,
      capabilityId,
      selectedProvider: selection.selectedProvider,
      state: selection.state,
      awsRequired: awsMandatory,
      awsOptional: true,
      localFallbackAvailable: Boolean(selection.selectedProvider?.localFallbackSupport || PROVIDERS.some(item => item.localFallbackSupport && item.capabilities.includes(capabilityId))),
      externalExecutionEnabled: false,
      productionAuthorized: false,
      requiresConsent: selection.requiresConsent,
      requiresConfirmation: selection.requiresConfirmation,
      receiptRequired: true,
      rejectedProviders: selection.rejectedProviders,
      answer: buildPlainLanguageStatus(command, selection),
      noSecretExposure: true,
      noFakeProviderClaim: true
    });
  }

  function buildPlainLanguageStatus(command, selection) {
    const providerName = selection.selectedProvider?.displayName || "No provider selected";
    const blocked = selection.rejectedProviders.filter(item => item.missingEnv && item.missingEnv.length);
    const missing = [...new Set(blocked.flatMap(item => item.missingEnv || []))];
    if (/aws|required/i.test(command)) {
      return "AWS is not required. Nexus can route through local, Azure, Google Cloud, AWS, or other configured providers depending on capability, jurisdiction, data class, cost, and policy gates.";
    }
    if (/connected|provider|ai model|running locally|production authorized/i.test(command)) {
      return `${providerName} is the current safe selection for this capability. External providers remain credential-gated and policy-gated. Missing variables, when any, are shown by name only: ${missing.length ? missing.join(", ") : "none for the selected local path"}.`;
    }
    return `${providerName} can prepare or locally handle this capability. Live external execution is blocked until credentials, consent, confirmation, jurisdiction, compliance, audit receipt, and outcome verification are complete.`;
  }

  function shouldHandle(command = "") {
    return /provider|connected|aws|required|ai model|running locally|production authorized|can nexus send|can nexus book|can nexus process payment|why is this action unavailable|what is blocked|which provider/i.test(String(command || ""));
  }

  function status(env = {}) {
    const redactedProviders = listProviders({ env });
    const configuredCount = redactedProviders.filter(item => item.configured).length;
    const credentialBlockedCount = redactedProviders.filter(item => !item.configured).length;
    return Object.freeze({
      ok: true,
      serviceId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      packetType: "nexus_genesis_provider_abstraction_status_packet",
      providerCount: PROVIDERS.length,
      capabilityCount: CAPABILITIES.length,
      dataClasses: DATA_CLASSES,
      providerStates: PROVIDER_STATES,
      families: listProviderFamilies(),
      configuredCount,
      credentialBlockedCount,
      awsRequired: false,
      localFallbackAvailable: true,
      externalExecutionEnabledByDefault: false,
      noSecretExposure: true,
      noSilentExecution: true,
      productionAuthorizationRequired: true
    });
  }

  function sdk() {
    return Object.freeze({
      serviceId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      methods: ["status", "listProviders", "listCapabilities", "selectProvider", "evaluatePolicy", "execute", "createReceipt", "verifyOutcome", "capabilityStatus"],
      providerContractFields: ["providerId", "displayName", "family", "capabilities", "requiredEnv", "allowedDataClasses", "jurisdictions", "liveExecutionState", "receiptSupport"],
      requestContractFields: ["capabilityId", "dataClass", "country", "jurisdiction", "consentState", "confirmationState", "units"],
      receiptContractFields: ["receiptId", "capabilityId", "providerId", "status", "acknowledgementIsNotOutcome", "finalOutcomeVerified", "noSecretExposure"]
    });
  }

  return Object.freeze({
    SERVICE_ID,
    SCHEMA_VERSION,
    HIGH_IMPACT_CAPABILITIES,
    DATA_CLASSES,
    PROVIDER_STATES,
    CAPABILITIES,
    PROVIDERS,
    listProviderFamilies,
    listProviders,
    inspectProvider,
    listCapabilities,
    discoverCapabilities,
    checkReadiness,
    credentialStatus,
    estimateCost,
    checkJurisdiction,
    checkDataClass,
    evaluatePolicy,
    selectProvider,
    createReceipt,
    execute,
    verifyOutcome,
    capabilityStatus,
    shouldHandle,
    status,
    sdk
  });
});
