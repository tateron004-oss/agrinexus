# Nexus Multilingual Intelligence Readiness Contract - Phase 70

Phase: 70
Roadmap item: Multilingual intelligence
Purpose: Improve locale-aware intelligence through future localization partners while preserving safe six-language baseline behavior.

## Scope

This phase adds an inert readiness contract only. It does not change active language routing, translation behavior, voice behavior, provider selection, regulated actions, or backend behavior.

## Supported baseline languages

- English
- Spanish
- French
- Arabic
- Portuguese
- Swahili

## Safety posture

Multilingual intelligence may make Nexus easier to use, but language support is not clinical interpretation, provider authorization, or execution authority.

Safe copy:

> I can respond in supported languages, but this does not replace a certified medical interpreter or authorize any provider action.

## Inactive boundaries

The following remain inactive in Phase 70:

- live translation provider execution
- automatic language switching without user signal
- clinical interpretation claim
- medical translation certification claim
- provider execution from language switch
- call or message execution from language switch
- payment execution from language switch
- medical record translation execution
- prescription or refill translation execution
- emergency dispatch translation execution
- location or camera activation from language switch
- Standard User runtime language engine replacement
- storage or network side effects
- backend behavior changes

## Required preconditions before future activation

- supportedLanguageList
- localeDetectionBoundary
- userSelectedLanguage
- translationReviewPath
- clinicalInterpretationBoundary
- sourceTracePreservedAcrossLanguage
- freshnessLabelPreservedAcrossLanguage
- confidenceLabelPreservedAcrossLanguage
- fallbackTextPath
- humanLanguageSupportEscalationCopy
- auditDecisionRecordForRegulatedLanguageUse
- noMedicalInterpretationClaim
- noProviderExecutionFromLanguageSwitch
- regressionSuiteCoverage

## Restricted domains

Future multilingual intelligence must not infer execution authority in:

- healthcare
- medical_records
- pharmacy
- payments
- location
- communications
- provider_contact
- marketplace_transactions
- emergency
- transportation_dispatch
- identity
- account_profile
- role_authorization

## QA expectation

The Phase 70 QA guard verifies the contract, supported baseline languages, documentation, package alias, safe-suite wiring, forced no-execution defaults, and absence of runtime hooks in `public/index.html`, `public/app.js`, and `server.js`.
