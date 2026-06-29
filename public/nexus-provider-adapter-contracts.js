(function initNexusProviderAdapterContracts(globalScope) {
  "use strict";

  const PROVIDER_ADAPTER_CONTRACT_VERSION = "nexus-provider-adapter-contracts.v1";

  const PROVIDER_ADAPTER_CONTRACTS = Object.freeze([
    {
      id: "communications.phone-call",
      providerName: "Phone / Call Provider",
      providerType: "communications",
      actionLane: "phone-call",
      configured: false,
      connected: false,
      supportsSimulation: true,
      requiresConfirmation: true,
      requiresPermission: true,
      unavailableReason: "No approved phone provider is configured for live calls.",
      executionEnabled: false,
      externalActionAllowed: false,
      secretRequired: true,
      secretExposed: false
    },
    {
      id: "communications.whatsapp-message",
      providerName: "WhatsApp / Message Provider",
      providerType: "communications",
      actionLane: "whatsapp-message",
      configured: false,
      connected: false,
      supportsSimulation: true,
      requiresConfirmation: true,
      requiresPermission: true,
      unavailableReason: "No approved WhatsApp provider is configured for live messages.",
      executionEnabled: false,
      externalActionAllowed: false,
      secretRequired: true,
      secretExposed: false
    },
    {
      id: "communications.sms-email",
      providerName: "SMS / Email Provider",
      providerType: "communications",
      actionLane: "sms-email",
      configured: false,
      connected: false,
      supportsSimulation: true,
      requiresConfirmation: true,
      requiresPermission: true,
      unavailableReason: "No approved SMS or email provider is configured for live delivery.",
      executionEnabled: false,
      externalActionAllowed: false,
      secretRequired: true,
      secretExposed: false
    },
    {
      id: "maps.navigation",
      providerName: "Maps / Navigation Provider",
      providerType: "maps",
      actionLane: "maps-navigation",
      configured: false,
      connected: false,
      supportsSimulation: true,
      requiresConfirmation: true,
      requiresPermission: true,
      unavailableReason: "Navigation remains preview-only until map, location, consent, and route approval gates are active.",
      executionEnabled: false,
      externalActionAllowed: false,
      secretRequired: false,
      secretExposed: false
    },
    {
      id: "marketplace.payment",
      providerName: "Marketplace / Payment Provider",
      providerType: "transaction",
      actionLane: "marketplace-payment",
      configured: false,
      connected: false,
      supportsSimulation: false,
      requiresConfirmation: true,
      requiresPermission: true,
      unavailableReason: "Payment and marketplace execution are disabled until approved payment and transaction gates are active.",
      executionEnabled: false,
      externalActionAllowed: false,
      secretRequired: true,
      secretExposed: false
    },
    {
      id: "health.telehealth-rpm-rtm",
      providerName: "Telehealth / RPM / RTM Provider",
      providerType: "health",
      actionLane: "telehealth-rpm-rtm",
      configured: false,
      connected: false,
      supportsSimulation: true,
      requiresConfirmation: true,
      requiresPermission: true,
      unavailableReason: "Telehealth, RPM, and RTM provider execution require consent, provider readiness, and audit gates.",
      executionEnabled: false,
      externalActionAllowed: false,
      secretRequired: true,
      secretExposed: false
    },
    {
      id: "care-team.report-delivery",
      providerName: "Care-Team Report Delivery Provider",
      providerType: "care-team",
      actionLane: "care-team-report-delivery",
      configured: false,
      connected: false,
      supportsSimulation: true,
      requiresConfirmation: true,
      requiresPermission: true,
      unavailableReason: "Care-team report delivery is unavailable until recipient, consent, provider, and audit gates are active.",
      executionEnabled: false,
      externalActionAllowed: false,
      secretRequired: true,
      secretExposed: false
    }
  ]);

  function cloneProviderAdapterContract(contract) {
    return Object.freeze({ ...contract });
  }

  function getNexusProviderAdapterContracts() {
    return PROVIDER_ADAPTER_CONTRACTS.map(cloneProviderAdapterContract);
  }

  function getNexusProviderAdapterStatusById(id = "") {
    const normalizedId = String(id || "").trim().toLowerCase();
    const contract = PROVIDER_ADAPTER_CONTRACTS.find(item => item.id === normalizedId);
    return contract ? cloneProviderAdapterContract(contract) : null;
  }

  function createNexusProviderAdapterReadinessSnapshot() {
    const adapters = getNexusProviderAdapterContracts();
    return Object.freeze({
      schemaVersion: PROVIDER_ADAPTER_CONTRACT_VERSION,
      generatedAt: new Date(0).toISOString(),
      executionAuthority: false,
      rawAdapterCallsAllowed: false,
      providerHandoffAllowed: false,
      externalActionAllowed: false,
      secretsExposed: false,
      adapters
    });
  }

  const api = Object.freeze({
    PROVIDER_ADAPTER_CONTRACT_VERSION,
    PROVIDER_ADAPTER_CONTRACTS,
    getNexusProviderAdapterContracts,
    getNexusProviderAdapterStatusById,
    createNexusProviderAdapterReadinessSnapshot
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalScope) {
    globalScope.NexusProviderAdapterContracts = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : undefined);
