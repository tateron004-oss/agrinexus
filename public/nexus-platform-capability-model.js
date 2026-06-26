(function nexusPlatformCapabilityModelFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusPlatformCapabilityModel = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPlatformCapabilityModelModule() {
  const SUPPORTED_LANGUAGES = Object.freeze(["English", "Spanish", "French", "Arabic", "Portuguese", "Swahili"]);
  const capabilityNames = [
    "voice", "multilingual conversation", "source-backed answers", "real-time provider data", "agriculture support",
    "farmer services", "crop guidance", "market access", "workforce", "education", "healthcare access",
    "telehealth", "pharmacy", "mobile clinics", "transportation", "community services", "provider contact",
    "scheduling", "payments", "location", "medical records/FHIR", "emergency pathways", "memory",
    "personalization", "task planning", "orchestration", "field agent support", "admin/provider dashboard",
    "offline/low-bandwidth", "audit/compliance", "trust/fraud prevention"
  ];
  const highRisk = new Set(["real-time provider data", "telehealth", "pharmacy", "provider contact", "scheduling", "payments", "location", "medical records/FHIR", "emergency pathways"]);

  const PLATFORM_CAPABILITY_MODEL = Object.freeze(capabilityNames.map(name => {
    const riskTier = highRisk.has(name) ? (["payments", "medical records/FHIR", "emergency pathways"].includes(name) ? "restricted" : "high") : "controlled";
    const status = ["voice", "multilingual conversation", "healthcare access", "agriculture support", "workforce", "education", "task planning"].includes(name) ? "active now" : highRisk.has(name) ? "provider-required" : "source-ready";
    return Object.freeze({
      capabilityId: name.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.+|\.+$/g, ""),
      displayName: name,
      status,
      readiness: status,
      riskTier,
      executionEnabled: false,
      providerRequired: highRisk.has(name),
      sourceRequired: true,
      approvalRequired: highRisk.has(name),
      consentRequired: highRisk.has(name),
      auditRequired: true,
      supportedLanguages: SUPPORTED_LANGUAGES,
      userFacingExplanation: `Nexus can prepare ${name} support with verified sources. Live execution requires the proper connector, approval, consent when applicable, and audit logging.`
    });
  }));

  function getNexusPlatformCapabilityModel() {
    return PLATFORM_CAPABILITY_MODEL.slice();
  }

  return Object.freeze({
    PLATFORM_CAPABILITY_MODEL,
    getNexusPlatformCapabilityModel
  });
});
