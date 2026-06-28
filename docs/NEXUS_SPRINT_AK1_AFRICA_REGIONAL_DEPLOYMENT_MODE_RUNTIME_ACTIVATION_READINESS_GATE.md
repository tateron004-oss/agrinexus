# Nexus Sprint AK1 - Africa Regional Deployment Mode Runtime Activation Readiness Gate

Current base: `c87431a289170b4c6d90675d1ee733b60eb3d944`

Sprint AK1 defines the minimum conditions before Africa Regional Deployment Mode may move from an inert readiness contract into any runtime-visible, country-kit, regional configuration, language pack, partner connector, or jurisdiction-aware behavior. This phase is documentation and deterministic QA only. It does not add Africa Regional Deployment Mode runtime, regional country kit runtime, jurisdiction routing, local language runtime, provider execution, regulated action execution, Standard User runtime behavior, storage writes, backend writes, network calls, permission prompts, route changes, or execution behavior.

## Relationship To Prior Lanes

Sprint AK1 follows:

- Sprint AJ5 - Offline Low-Bandwidth Mode Lane Closeout;
- Phase 89 - Africa Regional Deployment Mode Readiness Contract.

Africa Regional Deployment Mode readiness is not country launch approval, jurisdiction authority, regional partner authority, language translation authority, provider authority, health authority, pharmacy authority, payment authority, marketplace authority, transportation authority, emergency authority, location authority, identity authority, user consent, product owner approval, audit approval, or execution authority.

## Runtime Activation Preconditions

Africa Regional Deployment Mode runtime must remain blocked until all of these are true:

- product owner approval for an Africa Regional Deployment Mode runtime change;
- verified public source, partner source, or regulated source for each country kit;
- explicit source attribution for regional guidance, provider availability, clinic availability, agriculture support, workforce support, transportation support, community service support, or language support;
- visible freshness label for every regional source-backed answer;
- visible confidence label for every regional source-backed answer;
- jurisdiction audit for each country or region before local policy wording appears;
- partner verification for every provider, clinic, pharmacy, transportation, workforce, agriculture, or community service listing;
- language review for translated or local-language copy;
- user consent boundary for any future regional preference, location, identity, health, profile, contact, or saved context;
- role and permission check where regional mode touches provider, health, pharmacy, marketplace, transportation, identity, account/profile, or regulated workflows;
- explicit user approval for high-risk actions;
- visible cancellation path;
- audit decision record before any regional handoff or country-kit activation;
- safe fallback path when regional sources, partner connections, or local language coverage are unavailable;
- no unsupported live claim;
- no completed action claim;
- no claim that regional data is current unless freshness is verified;
- no silent regionalization;
- no silent country inference;
- no provider, clinic, pharmacy, payment, transportation, emergency, location, contact, or regulated handoff without approval and QA;
- regression suite coverage;
- browser validation plan for any future visible/regional runtime behavior;
- deterministic QA coverage.

## Runtime Absence Requirements

Sprint AK1 must not load or activate:

- `public/nexus-africa-regional-deployment-mode-readiness-contract.js`;
- `NexusAfricaRegionalDeploymentModeReadinessContract`;
- `AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT`;
- `africa-regional-deployment-mode.readiness.phase_89`;
- Africa Regional Deployment Mode runtime helpers;
- country kit helpers;
- regional routing helpers;
- jurisdiction audit runtime helpers;
- local language runtime helpers;
- partner connector runtime helpers;
- provider directory runtime helpers;
- clinic directory runtime helpers;
- pharmacy directory runtime helpers;
- transportation directory runtime helpers;
- emergency directory runtime helpers;
- regional source sync helpers;
- regional preference persistence helpers.

## Blocked Runtime Behavior

Sprint AK1 must not introduce:

- active Africa Regional Deployment Mode runtime;
- regional country kit runtime;
- jurisdiction routing runtime;
- local language runtime;
- region-specific provider connector runtime;
- region-specific clinic connector runtime;
- region-specific telehealth connector runtime;
- region-specific pharmacy connector runtime;
- region-specific transportation connector runtime;
- region-specific emergency connector runtime;
- region-specific marketplace connector runtime;
- region-specific workforce connector runtime;
- region-specific agriculture connector runtime;
- regional provider execution;
- regional call execution;
- regional message execution;
- regional WhatsApp, Telegram, SMS, or email execution;
- regional payment execution;
- regional marketplace transaction execution;
- regional transportation dispatch;
- regional emergency dispatch;
- regional location sharing;
- regional identity, account, or profile mutation;
- regional medical advice;
- regional diagnosis claims;
- regional prescription instructions;
- unsupported local provider claims;
- unsupported country coverage claims;
- unsupported live data claims;
- completed action claims;
- typed route mutation;
- voice route mutation;
- policy bypass from regional metadata;
- confirmation bypass from regional metadata;
- permission bypass from regional metadata;
- role bypass from regional metadata;
- jurisdiction bypass;
- language review bypass;
- partner verification bypass;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- Cache API writes;
- fetch or network calls;
- provider handoff;
- native bridge dispatch;
- external navigation;
- real pending action creation;
- execution authority.

## Standard User Boundary

The Standard User build may continue to explain existing source-backed agriculture support, learning, workforce, health access, pharmacy support, telehealth camera handoff, map permission, AgriTrade marketplace review, and provider access boundaries through existing app behavior, but Sprint AK1 must not add Africa Regional Deployment Mode UI, country-kit UI, regional routing, voice route changes, typed route changes, local-language routing changes, provider handoff, permission prompts, storage writes, backend writes, or network writes.

## Required Contract Invariants

The Phase 89 readiness contract must remain:

- `readinessStatus: "blocked"`;
- `riskTier: "high"`;
- `acceptanceTarget: "country kit ready"`;
- `liveConnectorEnabled: false`;
- `providerExecutionEnabled: false`;
- `regulatedActionEnabled: false`;
- `silentActionAllowed: false`;
- `backgroundExecutionAllowed: false`;
- `standardUserRuntimeMutationAllowed: false`;
- `storageSideEffectAllowed: false`;
- `networkSideEffectAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

The factory must force unsafe override attempts back to no-execution values.

## Restricted Domains

Africa Regional Deployment Mode must preserve restricted boundaries around:

- healthcare;
- medical_records;
- pharmacy;
- payments;
- location;
- communications;
- provider_contact;
- marketplace_transactions;
- emergency;
- transportation_dispatch;
- identity;
- account_profile;
- role_authorization;
- regulated_execution.

## Safe Copy Boundary

Allowed posture:

- "I can prepare regional guidance when verified country sources are available."
- "Africa Regional Deployment Mode is not connected yet."
- "This requires verified regional sources, jurisdiction review, partner approval, and audit logging."
- "This country kit requires source attribution and freshness labels before it can be shown as current."
- "I cannot contact providers, dispatch services, process payments, or claim local coverage yet."
- "No action has been taken."

Blocked posture:

- "I activated this country kit."
- "I connected to local providers."
- "I verified this clinic is available right now."
- "I contacted the provider."
- "I scheduled the appointment."
- "I requested the refill."
- "I processed the payment."
- "I shared your location."
- "I dispatched transportation."
- "I dispatched emergency help."
- "This local data is current."
- "I completed the regional action."

## Browser Validation Implication

Sprint AK1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Africa Regional Deployment Mode artifacts, renders regional UI, changes typed routing, changes voice routing, changes local-language behavior, changes provider/health/pharmacy/location/payment/marketplace/transportation/emergency behavior, changes permission prompts, writes storage, calls backend endpoints, or changes Standard User visible behavior must run browser validation.

## Rollback Strategy

If a future sprint accidentally turns Sprint AK artifacts into runtime authority:

1. Revert runtime wiring first.
2. Restore the Phase 89 readiness contract to blocked/no-execution defaults.
3. Remove regional routing, country-kit UI, provider handoff, permission prompts, backend writes, storage writes, and execution hooks.
4. Restore every Africa Regional Deployment Mode live connector, provider execution, regulated action, storage, network, Standard User mutation, and execution field to `false`.
5. Re-run Phase 89 Africa Regional Deployment Mode readiness QA.

## Next Safe Sprint Recommendation

Sprint AK2 - Africa Regional Deployment Mode Feature Flag Contract.
