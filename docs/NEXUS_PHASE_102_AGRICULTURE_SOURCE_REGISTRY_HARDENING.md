# Nexus Phase 102 Agriculture Source Registry Hardening

## Baseline

Phase 101C completed at:

`caed3c1e557ed4b443be52f3a5ec7c36aa0650db`

Phase 101C wired the agriculture support response card into the normal Standard User build. The card is now visible for eligible safe agriculture prompts and remains review-only, disabled-action-only, source-labeled as general guidance, and no-execution.

## Phase 102 objective

Harden the agriculture source/freshness/confidence layer before any future live source integration.

This phase defines a deterministic source registry contract that prevents Nexus from presenting fake sources, fake local experts, fake freshness, or unsupported confidence claims.

## Scope

Phase 102 is intentionally documentation, helper, and QA only.

Allowed:

- Define source registry status values.
- Normalize source/freshness/confidence metadata.
- Return truthful general-guidance defaults when no verified source is available.
- Reject incomplete or unverifiable source records.
- Preserve Phase 101C no-execution behavior.
- Add deterministic QA around source truthfulness.

Not allowed:

- No live web/source lookup.
- No provider directory lookup.
- No fake source names.
- No fake extension worker, agronomist, cooperative, NGO, government, or local expert names.
- No provider contact.
- No calls, messages, WhatsApp, SMS, Telegram, or email.
- No appointments.
- No marketplace transactions or payments.
- No location sharing or map permission.
- No camera, photo, upload, or microphone activation.
- No medical, pharmacy, health, or emergency action.
- No backend mutation.
- No hidden staged actions.

## Registry states

The source registry helper must support these source status labels:

- `general guidance`
- `source-backed guidance`
- `unverified source unavailable`

### General guidance

Used when no verified source contract is provided.

Required disclosure:

- No verified live source is connected.
- No live source lookup was performed.
- Freshness is unavailable.
- Confidence is limited to general agriculture guidance.
- User should confirm severe, spreading, chemical, or unclear crop issues with a local agriculture extension worker, agronomist, cooperative advisor, or trusted local expert.

### Source-backed guidance

Allowed only when a source record has all required fields:

- source name
- source type
- contract ID
- freshness label
- confidence label
- verification status set to verified

The source name must be treated as metadata from a verified contract, not invented by the response layer.

### Unverified source unavailable

Used when a source-like record is provided but is incomplete, unverifiable, expired, disabled, or unsafe.

The response must not upgrade this to source-backed guidance.

## Required source record fields

A source-backed record must include:

```json
{
  "name": "Example Verified Agriculture Source",
  "sourceType": "extension|government|university|ngo|cooperative|internal-curated",
  "contractId": "verified-source-contract-id",
  "freshnessLabel": "Verified as of YYYY-MM-DD or approved freshness phrase",
  "confidenceLabel": "source-backed, limited, or high-confidence label approved by policy",
  "verificationStatus": "verified",
  "enabled": true
}
```

Records missing any required field must normalize to `unverified source unavailable`.

## Confidence rules

The helper must not produce exaggerated confidence labels.

Allowed confidence labels:

- `Limited — general agriculture guidance only`
- `Source-backed — verify against local conditions before acting`
- `Unavailable — source could not be verified`

Not allowed:

- guaranteed diagnosis
- guaranteed yield
- definitive disease identification
- definitive chemical instruction
- emergency assurance
- provider/local expert certainty without a verified source contract

## Freshness rules

Allowed freshness outputs:

- `Unavailable — no live source lookup was performed`
- a verified freshness label supplied by a verified source contract
- `Unavailable — source could not be verified`

Freshness must never be invented from current date/time.

## Local expert escalation rules

The system may recommend generic escalation paths:

- local agriculture extension worker
- agronomist
- cooperative advisor
- trusted local agriculture expert

The system must not invent a named expert, phone number, office, agency, appointment slot, provider, or location unless future verified source contracts explicitly support it.

## Runtime boundary

Phase 102 does not wire the registry into the normal Standard User runtime. It prepares the contract and deterministic QA so a later phase can safely integrate it into the Phase 101 card.

## Acceptance criteria

Phase 102 is complete when:

- The source registry helper exists.
- Deterministic QA validates general guidance, verified source-backed guidance, and unverified source handling.
- QA proves no live lookup or execution side effects were introduced.
- Phase 101C runtime safety boundaries remain intact.
- A later integration phase is clearly documented as required before runtime behavior changes.
