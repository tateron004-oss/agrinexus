# Nexus Communications Provider Availability Fallback Contract

Phase: 51D - Communications Provider Availability Fallback Contract
Status: inert documentation and deterministic QA only
Related roadmap row: `| Phase 51 | Communications send after approval | Enable messages/calls through providers | comm adapter | future | high | WhatsApp/SMS/email/native provider | explicit approval/audit | comm QA | no first-turn sending |`

## Scope Decision

Phase 51D defines how Nexus should reason about communications provider availability before any future call, message, WhatsApp, Telegram, SMS, email, native-phone, or browser-phone execution. It does not open providers or execute communications.

This phase does not activate:

- live communication providers
- phone-provider execution
- WhatsApp, Telegram, SMS, email, native phone, or browser phone opening
- provider APIs
- credential checks against live services
- storage or network side effects
- backend behavior changes
- Standard User communication execution

## Relationship To Prior Safe Phases

Phase 50A keeps the communications provider execution readiness gate blocked.

Phase 51A defines a non-executing prepared action preview.

Phase 51B defines raw prompt no-execution regression boundaries.

Phase 51C defines approval and audit handoff requirements.

Phase 51D defines provider availability states and safe fallback outcomes.

## Provider Availability States

Nexus must represent communications provider availability using explicit states:

- `not_configured`
- `configured_not_verified`
- `verified_not_enabled`
- `enabled_for_preview_only`
- `enabled_pending_final_approval`
- `unavailable_region`
- `unsupported_language`
- `missing_credentials`
- `provider_outage`
- `blocked_by_domain_restriction`
- `blocked_by_policy`

No state in Phase 51D permits execution.

## Required Availability Fields

Any future provider availability object must include:

- `providerId`
- `providerDisplay`
- `providerType`
- `availabilityState`
- `regionSupport`
- `languageSupport`
- `credentialState`
- `policyState`
- `domainRestrictionState`
- `fallbackMessage`
- `userVisibleNextStep`
- `executionEnabled: false`
- `providerOpenAllowed: false`
- `backgroundExecutionAllowed: false`

## Safe Fallback Outcomes

When a provider is unavailable, Nexus may:

- explain what connection is missing;
- ask the user to choose another safe channel;
- offer a prepared non-executing review summary;
- tell the user a verified provider integration is required;
- preserve the cancellation path;
- log a future blocked/fallback audit event once audit runtime exists.

Nexus must not:

- open an arbitrary URL;
- infer an unsupported provider;
- open WhatsApp or Telegram silently;
- open phone/SMS/email silently;
- contact a provider;
- continue in the background;
- claim a call or message was sent;
- claim a provider is live when it is not configured and verified.

## Restricted Domain Fallbacks

Additional fallback caution applies to:

- healthcare
- pharmacy
- emergency
- payments
- marketplace transactions
- transportation dispatch
- minors/family support

For those domains, unavailable providers must produce a safe fallback explanation and must not produce external handoff, dispatch, payment, transaction, refill, scheduling, medical-record, or emergency-action claims.

## QA Expectations

The deterministic QA lives in:

- `scripts/nexus-communications-provider-availability-fallback-contract-qa.js`

The package alias is:

- `qa:nexus-communications-provider-availability-fallback-contract`

The QA verifies:

- Phase 50A remains blocked;
- Phase 51A remains non-executing;
- Phase 51B no-execution regression remains present;
- Phase 51C approval/audit handoff remains documented;
- provider availability states are enumerated;
- required availability fields are present;
- safe fallback outcomes are present;
- restricted domain fallbacks are documented;
- no provider opening, network, storage, native bridge, permission, navigation, call, message, or execution behavior is introduced.

## Future Phase 51 Progression

Phase 51E should document Standard User validation expectations for the complete safe Phase 51 chain.

Live communications execution remains disabled until a future approved implementation satisfies readiness, approval, audit, provider availability, consent, and domain restrictions.
