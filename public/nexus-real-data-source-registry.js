(function nexusRealDataSourceRegistryFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusRealDataSourceRegistry = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusRealDataSourceRegistryModule() {
  // Phase 17A: metadata-only source/action contracts. This registry must not enable live actions.
  const SOURCE_TYPES = Object.freeze([
    "public_source_backed",
    "partner_operational",
    "live_api_integration",
    "regulated_patient_medical",
    "approved_high_risk_action"
  ]);

  const STATUS_TYPES = Object.freeze([
    "public",
    "partner",
    "regulated",
    "public_partner",
    "partner_regulated",
    "approved_high_risk"
  ]);

  const RISK_LEVELS = Object.freeze(["low", "controlled", "sensitive", "high", "restricted"]);

  const REAL_DATA_SOURCE_REGISTRY = Object.freeze([
    {
      id: "provider.directory",
      label: "Provider directory data",
      dataOwner: "Public health directories, licensed provider networks, or approved Nexus partners",
      sourceType: "public_source_backed",
      publicPartnerRegulatedStatus: "public_partner",
      integrationMethod: "Future public-directory ingestion plus partner directory feed; no live lookup in Phase 17.",
      dataFreshness: {
        expectedUpdateCadence: "daily-to-weekly",
        freshnessField: "lastVerifiedAt",
        staleAfter: "30 days",
        displayRequirement: "Show last verified date before relying on directory details."
      },
      permissionRequirements: ["none for public directory viewing", "provider approval for partner-only directory details"],
      complianceRequirements: ["source attribution", "license/terms review", "partner data-use agreement before private provider data"],
      actionRiskLevel: "controlled",
      liveActionEnabled: false,
      userApprovalRequired: true,
      approvalGates: ["review provider details", "confirm before contact or scheduling"],
      auditRequirements: ["source-used", "directory-result-shown", "stale-data-warning", "provider-contact-blocked-until-confirmed"],
      futureImplementationPhase: "17B-provider-directory-source-registry",
      notes: ["Directory display is not provider contact, scheduling, or referral execution."]
    },
    {
      id: "telehealth.provider",
      label: "Telehealth provider data",
      dataOwner: "Telehealth provider organization or contracted care partner",
      sourceType: "partner_operational",
      publicPartnerRegulatedStatus: "partner_regulated",
      integrationMethod: "Future partner API or secure operational feed for provider availability and handoff metadata.",
      dataFreshness: {
        expectedUpdateCadence: "near-real-time only after partner contract",
        freshnessField: "availabilityUpdatedAt",
        staleAfter: "15 minutes for availability, 24 hours for static profile",
        displayRequirement: "Show availability freshness and handoff boundary."
      },
      permissionRequirements: ["user consent", "provider authorization", "role-based access"],
      complianceRequirements: ["HIPAA/medical privacy review where applicable", "business associate or data processing agreement", "minimum necessary disclosure"],
      actionRiskLevel: "high",
      liveActionEnabled: false,
      userApprovalRequired: true,
      approvalGates: ["confirm patient intent", "confirm provider handoff", "confirm what information is shared"],
      auditRequirements: ["intent-detected", "risk-classified", "permission-shown", "confirmation-accepted-or-rejected", "provider-handoff-blocked-or-opened"],
      futureImplementationPhase: "17C-telehealth-provider-data-and-handoff",
      notes: ["No live provider room, WebRTC session, provider contact, or medical data sharing is enabled by this registry."]
    },
    {
      id: "pharmacy.prescription_refill",
      label: "Pharmacy data and prescription/refill workflows",
      dataOwner: "Licensed pharmacy, prescribing provider, payer, or patient-authorized record source",
      sourceType: "regulated_patient_medical",
      publicPartnerRegulatedStatus: "regulated",
      integrationMethod: "Future pharmacy partner API, FHIR MedicationRequest/MedicationStatement where authorized, or manual review packet.",
      dataFreshness: {
        expectedUpdateCadence: "per authorized pharmacy/provider source",
        freshnessField: "medicationDataVerifiedAt",
        staleAfter: "source-specific; never assume current without timestamp",
        displayRequirement: "Show medication data source and verification timestamp before any refill guidance."
      },
      permissionRequirements: ["identity confirmation", "patient consent", "pharmacy/provider authorization", "explicit refill confirmation"],
      complianceRequirements: ["HIPAA/medical privacy review", "pharmacy regulation review", "prescribing boundary", "minimum necessary disclosure"],
      actionRiskLevel: "restricted",
      liveActionEnabled: false,
      userApprovalRequired: true,
      approvalGates: ["verify identity", "review medication details", "confirm no prescribing claim", "confirm before pharmacy handoff"],
      auditRequirements: ["regulated-data-access-requested", "identity-required", "consent-required", "refill-action-blocked", "pharmacy-handoff-confirmation"],
      futureImplementationPhase: "17D-pharmacy-and-prescription-boundary",
      notes: ["Nexus must not prescribe, change medication, submit refill requests, or contact a pharmacy until a regulated workflow is approved."]
    },
    {
      id: "mobile_clinic.schedule",
      label: "Mobile clinic schedules",
      dataOwner: "Mobile clinic operator, health system partner, NGO partner, or public outreach program",
      sourceType: "partner_operational",
      publicPartnerRegulatedStatus: "partner",
      integrationMethod: "Future partner schedule feed or approved public outreach schedule import.",
      dataFreshness: {
        expectedUpdateCadence: "daily or event-driven",
        freshnessField: "scheduleUpdatedAt",
        staleAfter: "24 hours for operational routing",
        displayRequirement: "Show schedule update time and partner source."
      },
      permissionRequirements: ["none for public schedule viewing", "user consent for location-based matching", "operator authorization for dispatch or appointment requests"],
      complianceRequirements: ["partner data-use terms", "health access boundary", "no emergency dispatch claim"],
      actionRiskLevel: "high",
      liveActionEnabled: false,
      userApprovalRequired: true,
      approvalGates: ["review schedule", "confirm location sharing if needed", "confirm before request or dispatch handoff"],
      auditRequirements: ["schedule-source-used", "location-permission-required", "dispatch-blocked", "request-confirmation-required"],
      futureImplementationPhase: "17E-mobile-clinic-schedules",
      notes: ["Viewing a schedule is separate from requesting a visit, dispatching a clinic, or sharing location."]
    },
    {
      id: "transportation.resources",
      label: "Transportation resources",
      dataOwner: "Public transit source, community transport partner, care partner, or user-provided resource",
      sourceType: "public_source_backed",
      publicPartnerRegulatedStatus: "public_partner",
      integrationMethod: "Future public route import, partner transport feed, or manual resource directory.",
      dataFreshness: {
        expectedUpdateCadence: "daily-to-weekly; real-time only after approved API",
        freshnessField: "transportResourceUpdatedAt",
        staleAfter: "7 days for static resources, minutes for future live transit",
        displayRequirement: "Show source and whether route is live or static."
      },
      permissionRequirements: ["none for general resource viewing", "location permission for nearby matching", "user confirmation before booking or contact"],
      complianceRequirements: ["source attribution", "partner terms", "accessibility and safety disclaimer"],
      actionRiskLevel: "controlled",
      liveActionEnabled: false,
      userApprovalRequired: true,
      approvalGates: ["review route/resource", "confirm location sharing", "confirm before contact or booking"],
      auditRequirements: ["transport-resource-shown", "location-permission-required", "booking-blocked-until-confirmed"],
      futureImplementationPhase: "17F-transportation-resource-integration",
      notes: ["No ride is scheduled, booked, paid, or contacted from this registry."]
    },
    {
      id: "location.sharing",
      label: "Location sharing",
      dataOwner: "User/browser device; optional approved map or partner service after consent",
      sourceType: "live_api_integration",
      publicPartnerRegulatedStatus: "regulated",
      integrationMethod: "Browser geolocation permission and future approved map/provider adapter only after explicit consent.",
      dataFreshness: {
        expectedUpdateCadence: "per user request only",
        freshnessField: "locationCapturedAt",
        staleAfter: "immediate context; do not reuse without consent",
        displayRequirement: "Show that precise location requires browser permission and user approval."
      },
      permissionRequirements: ["browser location permission", "purpose-specific user consent", "confirmation before sharing externally"],
      complianceRequirements: ["privacy notice", "minimum precision", "no background tracking", "no reuse without consent"],
      actionRiskLevel: "sensitive",
      liveActionEnabled: false,
      userApprovalRequired: true,
      approvalGates: ["request browser permission", "show purpose", "confirm external sharing separately"],
      auditRequirements: ["location-permission-shown", "location-denied-or-granted", "external-location-sharing-blocked-until-confirmed"],
      futureImplementationPhase: "17G-location-sharing-boundary",
      notes: ["Registry metadata must not request or store location."]
    },
    {
      id: "payments.transaction",
      label: "Payments",
      dataOwner: "Payment processor, marketplace partner, payer, payee, or sponsor",
      sourceType: "approved_high_risk_action",
      publicPartnerRegulatedStatus: "approved_high_risk",
      integrationMethod: "Future credential-gated payment provider adapter; no browser-side payment execution in Phase 17.",
      dataFreshness: {
        expectedUpdateCadence: "real-time only through approved payment provider",
        freshnessField: "paymentQuoteCreatedAt",
        staleAfter: "provider-defined; quote must expire",
        displayRequirement: "Show amount, payee, fees, expiration, and provider before confirmation."
      },
      permissionRequirements: ["identity confirmation", "payment authorization", "role-based approval for organization funds", "explicit final confirmation"],
      complianceRequirements: ["PCI/payment processor compliance", "fraud review", "marketplace terms", "receipt/audit retention"],
      actionRiskLevel: "restricted",
      liveActionEnabled: false,
      userApprovalRequired: true,
      approvalGates: ["review quote", "verify identity or role", "confirm amount/payee", "provider redirect or server-side adapter only"],
      auditRequirements: ["payment-intent-detected", "quote-shown", "confirmation-required", "payment-blocked-or-provider-opened", "receipt-required-if-executed"],
      futureImplementationPhase: "17H-payment-provider-architecture",
      notes: ["No payment, checkout, payout, buy, sell, or transfer behavior is enabled."]
    },
    {
      id: "medical_records.fhir",
      label: "Medical records/FHIR",
      dataOwner: "Patient, provider organization, health system, or authorized FHIR server",
      sourceType: "regulated_patient_medical",
      publicPartnerRegulatedStatus: "regulated",
      integrationMethod: "Future SMART-on-FHIR/OAuth or approved provider export after identity and consent.",
      dataFreshness: {
        expectedUpdateCadence: "source-specific",
        freshnessField: "recordRetrievedAt",
        staleAfter: "do not assume current; show retrieval timestamp",
        displayRequirement: "Show source, scope, retrieval time, and redaction boundary."
      },
      permissionRequirements: ["identity confirmation", "patient authorization", "provider authorization", "scope-specific consent"],
      complianceRequirements: ["HIPAA/medical privacy review", "FHIR security review", "OAuth scope minimization", "data retention policy", "redaction policy"],
      actionRiskLevel: "restricted",
      liveActionEnabled: false,
      userApprovalRequired: true,
      approvalGates: ["authenticate", "authorize scope", "review data requested", "confirm before sharing externally"],
      auditRequirements: ["record-access-requested", "scope-authorized", "redacted-record-viewed", "sharing-blocked-until-confirmed"],
      futureImplementationPhase: "17I-fhir-medical-records-readiness",
      notes: ["No medical record is fetched, stored, translated, or shared by this registry."]
    },
    {
      id: "provider.contact",
      label: "Provider contact",
      dataOwner: "User, provider directory owner, care partner, or communication provider",
      sourceType: "approved_high_risk_action",
      publicPartnerRegulatedStatus: "approved_high_risk",
      integrationMethod: "Future confirmed communication provider handoff through native phone, browser tel, WhatsApp, Telegram, SMS, email, or partner API.",
      dataFreshness: {
        expectedUpdateCadence: "per contact source",
        freshnessField: "contactVerifiedAt",
        staleAfter: "30 days for static contact; immediate confirmation for live handoff",
        displayRequirement: "Show contact source, verification date, provider, and exact action before confirmation."
      },
      permissionRequirements: ["contact resolution", "explicit confirmation", "provider selection", "role-based authorization where needed"],
      complianceRequirements: ["communication consent", "health privacy boundary", "redaction of phone/email in logs", "provider terms"],
      actionRiskLevel: "high",
      liveActionEnabled: false,
      userApprovalRequired: true,
      approvalGates: ["resolve contact", "show target/provider", "block vague confirmation", "confirm before handoff"],
      auditRequirements: ["contact-resolution", "confirmation-shown", "confirmation-accepted-or-rejected", "provider-handoff-blocked-or-opened"],
      futureImplementationPhase: "17J-provider-contact-execution-gates",
      notes: ["Raw intent must never call, message, email, or open a provider."]
    },
    {
      id: "emergency.dispatch",
      label: "Emergency dispatch",
      dataOwner: "Local emergency services, public safety source, user, or approved emergency partner",
      sourceType: "approved_high_risk_action",
      publicPartnerRegulatedStatus: "approved_high_risk",
      integrationMethod: "Future emergency guidance and handoff planning only after legal, operational, and regional emergency-service review.",
      dataFreshness: {
        expectedUpdateCadence: "jurisdiction-specific",
        freshnessField: "emergencyResourceVerifiedAt",
        staleAfter: "source-specific; show emergency number/source date",
        displayRequirement: "Always lead with local emergency services guidance; do not claim dispatch."
      },
      permissionRequirements: ["explicit user confirmation for any future handoff", "location permission if user chooses to share", "regional/legal approval"],
      complianceRequirements: ["emergency services legal review", "medical safety review", "regional availability disclosure", "audit retention"],
      actionRiskLevel: "restricted",
      liveActionEnabled: false,
      userApprovalRequired: true,
      approvalGates: ["show call-local-emergency guidance", "confirm no automatic dispatch", "require location permission before sharing", "approved adapter only in future"],
      auditRequirements: ["emergency-intent-detected", "local-services-guidance-shown", "dispatch-blocked", "permission-required-before-sharing-location"],
      futureImplementationPhase: "17K-emergency-dispatch-boundary-review",
      notes: ["Nexus must not dispatch ambulances, emergency services, clinics, or responders in Phase 17."]
    }
  ]);

  function getRealDataSourceRegistry() {
    return REAL_DATA_SOURCE_REGISTRY.slice();
  }

  return Object.freeze({
    SOURCE_TYPES,
    STATUS_TYPES,
    RISK_LEVELS,
    REAL_DATA_SOURCE_REGISTRY,
    getRealDataSourceRegistry
  });
});
