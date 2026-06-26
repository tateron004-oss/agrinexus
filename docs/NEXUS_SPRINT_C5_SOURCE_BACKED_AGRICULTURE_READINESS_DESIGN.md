# Nexus Sprint C5 Source-Backed Agriculture Readiness Design

## Current Checkpoint

- Starting HEAD: `1029510fa240b520effffe39099df7d7c030dce7`
- Prior sprint: Sprint C4 source-backed agriculture Standard User browser validation
- Sprint C5 status: readiness design only

Sprint C5 defines the source-backed agriculture readiness design for the first narrow activation lane. It does not activate runtime source lookup, live connectors, provider contact, payments, marketplace transactions, location sharing, camera/image capture, medical/pharmacy/emergency behavior, backend writes, storage writes, or pending agent actions.

## Purpose

The purpose of Sprint C5 is to define exactly what must exist before Nexus may show a source-backed agriculture response card in the normal Standard User build.

The first acceptable source-backed lane remains:

- agriculture support only
- review-only response cards
- verified public agriculture source contracts
- visible `Evidence & Verification`
- clear source status, freshness, confidence, limitations, and no-action disclosure
- no execution authority

## Readiness Decision

Sprint C5 does not mark source-backed agriculture cards as active.

Readiness outcome:

- readiness design: complete when this document and QA pass
- Standard User source-backed runtime activation: not enabled
- live source lookup: not enabled
- provider/action execution: not enabled
- Sprint C6 recommendation: implement a deterministic fixture-only source-backed agriculture packet harness, still not connected to live lookup

## Verified Public Agriculture Source Contract

Every source-backed agriculture record must include all of these fields before it can be used as evidence:

| Field | Requirement |
| --- | --- |
| `sourceId` | Stable source identifier scoped to agriculture support |
| `sourceName` | Human-readable source name |
| `sourceOwner` | Government, university, NGO, cooperative, public research body, or verified partner owner |
| `sourceOwnerType` | One of the approved owner categories |
| `sourceType` | Extension, government, university, NGO, cooperative, public advisory, regulatory safety reference, or verified partner advisory |
| `contractId` | Stable verified source contract ID |
| `verificationStatus` | Must be `verified` |
| `enabled` | Must be `true` for source-backed display |
| `lastVerifiedAt` | Verification timestamp or date label |
| `sourceUpdatedAt` | Source freshness timestamp or date label |
| `freshnessLabel` | Human-readable freshness label |
| `confidenceLabel` | Must be bounded and never claim certainty |
| `supportedRegions` | Regions where the source may be relevant |
| `supportedLanguages` | Languages available or planned for display |
| `supportedPromptFamilies` | Low-risk agriculture prompt families covered by the source |
| `sourceSupportedClaims` | Narrow claims directly supported by the source |
| `limitations` | Limits, local applicability warnings, and escalation guidance |
| `forbiddenClaims` | Claims Nexus must not make from this source |
| `auditRequirements` | Events required for future source display and unsafe-action blocking |

If any required field is missing or invalid, Nexus must fall back to not-source-backed general guidance.

## Acceptable Source Categories

Only these public or verified source categories may support the first source-backed agriculture lane:

- government agriculture extension services
- university extension programs
- public agricultural research institutes
- recognized agricultural NGOs
- cooperative advisory bodies
- public crop, pest, disease, irrigation, soil, drought, and weather advisories
- public regulatory safety references for pesticide, herbicide, fungicide, insecticide, fertilizer, and chemical handling
- partner-provided agriculture advisory data after source verification and contract review

## Disallowed Source Categories

The following must not be treated as primary source-backed agriculture evidence:

- random blogs
- ads
- sponsored marketplace listings
- marketplace sellers
- buyer or seller claims
- unverified social media posts
- unverified forum content
- anonymous advice
- scraped content without owner or contract metadata
- AI-generated text without a cited verified source
- product marketing claims without regulatory or extension support
- chemical dosage advice without label, regulatory, and qualified local review

## Low-Risk Eligible Prompt Families

Only low-risk agriculture support prompts may use the future source-backed card path:

- crop symptom observation such as yellow leaves, spots, pest signs, poor growth, and crop stress
- irrigation learning and water-management education
- drought preparedness and climate resilience guidance
- soil, compost, mulch, planting, and field-care education
- safe first-check prompts for pests, disease, nutrition, and water stress
- agriculture training and farmer education prompts
- source, freshness, and confidence explanation prompts

These prompts remain guidance-only. Nexus may explain possibilities and safe first checks, but it must not diagnose, prescribe, apply chemicals, contact providers, or start transactions.

## Excluded Prompt Families

The future source-backed agriculture lane must not render for:

- chemical dosage, mixture, restricted product, application-rate, or spray instruction requests
- pesticide, herbicide, fungicide, insecticide, fertilizer, or chemical action instructions
- livestock medical, human medical, pharmacy, prescription, telehealth, or emergency prompts
- requests to call, message, email, WhatsApp, SMS, Telegram, or contact a person or provider
- requests to buy, sell, list, pay, order, quote, checkout, ship, deliver, or complete marketplace transactions
- requests to use precise location, share GPS, find nearby services, or open maps with permission behavior
- requests to use camera, upload images, scan fields, diagnose from photos, or activate microphone/media capture
- appointment booking, scheduling, account creation, identity verification, or record-changing prompts
- emergency routing, emergency dispatch, ambulance, poisoning, unconsciousness, not-breathing, or acute-danger prompts
- backend write, storage write, pending action, provider handoff, or automation requests

Excluded prompts must route to the existing blocked, permission-required, clarification-gated, or safe-fallback paths.

## Source-Backed Display Contract

Every future source-backed agriculture card must show:

- `Evidence & Verification`
- source status: `source-backed`
- source owner or source name
- source type
- source contract ID
- verification status
- source updated date or freshness label
- confidence label
- source-supported claims
- Nexus inferences
- limitations
- local applicability warning
- local expert escalation guidance
- claims Nexus is not making
- no-action disclosure

When a source is unavailable, the card must clearly say:

- source status: `not-source-backed`
- no verified source connected
- no live source lookup was performed
- no source-supported claims are asserted
- general guidance only

## Confidence Label Boundary

Allowed confidence labels must be bounded.

Allowed examples:

- `Source-backed - verify against local conditions before acting`
- `Limited - general Nexus guidance only`
- `Unavailable - source could not be verified`

Disallowed confidence language:

- guarantee
- guaranteed
- definitive
- certain
- diagnosis
- yield guarantee
- chemical instruction
- expert review completed
- local authority approved if no contract exists

## Local Applicability Boundary

Agriculture guidance must always disclose that local conditions matter.

Local applicability warning must cover:

- local crop variety
- soil condition
- rainfall and irrigation state
- pest and disease pressure
- local regulation
- product labels and PPE for any chemical context
- local expert review for severe, spreading, chemical, or unclear cases

## No-Execution Authority

The source-backed agriculture readiness design requires all future source-backed card models to keep:

- `executionAllowed: false`
- `sideEffectsAllowed: false`
- `providerHandoffAllowed: false`
- `permissionRequestAllowed: false`
- `backendWriteAllowed: false`
- `storageWriteAllowed: false`
- `networkAllowed: false` unless a later live-source-read sprint explicitly enables read-only lookup
- `hiddenStagedActionAllowed: false`
- `pendingActionCreationAllowed: false`
- `marketplaceTransactionAllowed: false`
- `paymentAllowed: false`
- `locationRequestAllowed: false`
- `cameraRequestAllowed: false`
- `medicalActionAllowed: false`
- `pharmacyActionAllowed: false`
- `emergencyDispatchAllowed: false`

No pending agent actions may be created by source-backed agriculture review.

## Provider, Communications, And Marketplace Boundary

Source-backed agriculture guidance must not contact or hand off to:

- extension workers
- agronomists
- cooperatives
- sellers
- buyers
- clinics
- pharmacies
- transport providers
- emergency services
- phone, WhatsApp, Telegram, SMS, email, or other communications providers

AgriTrade remains browse/review only. Source-backed agriculture cards must not start buy, sell, quote, checkout, order, payment, delivery, shipment scheduling, buyer contact, or seller contact flows.

## Location, Camera, Medical, Pharmacy, And Emergency Boundary

Source-backed agriculture cards must not request or use:

- GPS
- browser location permission
- location sharing
- camera
- photo upload
- image capture
- media scanning
- microphone activation
- medical diagnosis
- prescriptions
- refills
- pharmacy actions
- medical records
- emergency dispatch

Human safety, poisoning, breathing, unconsciousness, severe injury, or emergency language must continue through existing safety boundaries.

## Activation Checklist

Before a future sprint may enable source-backed agriculture cards in Standard User runtime, all of these must be true:

1. Verified agriculture source contract fixture exists.
2. Source contract includes all required source fields.
3. Source validator rejects missing, unverified, unsafe, or incomplete records.
4. Source-backed card display includes Evidence & Verification.
5. Source-backed card display includes source-supported claims and Nexus inferences separately.
6. Source-backed card display includes no-action disclosure.
7. Source-backed card display includes local applicability limits.
8. Excluded prompts cannot render a source-backed agriculture card.
9. No provider handoff, communications, marketplace transaction, payment, location, camera, medical, pharmacy, emergency, backend write, storage write, or pending action is possible.
10. Standard User browser validation passes.
11. `nexus-workforce` and `all-safe` QA pass.
12. `db.json` and runtime mutations are restored before commit.

## Rollback Strategy

If future source-backed agriculture activation creates unsafe behavior or confusing claims:

1. Disable the source-backed agriculture feature flag or source path.
2. Fall back to Sprint C2 general evidence mode.
3. Preserve visible no-action and not-source-backed disclosures.
4. Remove newly introduced source-specific render path from Standard User runtime.
5. Restore `db.json` and any runtime data mutation.
6. Rerun Sprint C2, Sprint C3, Sprint C4, Sprint C5, source-backed, low-risk renderer, provider handoff, confirmation, no-execution, `nexus-workforce`, and `all-safe` QA.

## Sprint C6 Recommendation

Sprint C6 should add a deterministic fixture-only source-backed agriculture packet harness. It should not perform live lookup. It should not change Standard User runtime behavior unless a separate browser validation sprint approves it.

Sprint C6 should prove:

- a complete verified source fixture can produce source-backed evidence metadata
- incomplete or unsafe fixtures fall back to not-source-backed general guidance
- excluded prompt fixtures never become eligible
- no execution authority is granted
- no runtime side effects are introduced
