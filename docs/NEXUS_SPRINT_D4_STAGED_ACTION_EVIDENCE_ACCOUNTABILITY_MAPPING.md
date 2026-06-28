# Nexus Sprint D4 - Staged Action Evidence Accountability Mapping

## Purpose

Sprint D4 defines how review-only staged actions must carry evidence and accountability metadata before any future visible staged action preview can be considered.

Current base after D3: `1046d43b45c0a419b2fd0d872752539a7e1c298f`.

Sprint D4 continues the post-AO3 Sprint D train. The audit train ended at AO3, and D4 remains an inert evidence/accountability mapping phase rather than reopening AO4, AO5, or any additional audit phase.

This phase remains inert. It does not render staged actions in Standard User runtime, does not create pending actions, does not call providers, does not write backend state, and does not execute anything.

## Evidence Accountability Requirements

Every staged action must include:

- an `evidenceRequirement`;
- a `sourcePacketRequirement`;
- `safeUseNotes`;
- `limitations`;
- blocked execution channels;
- `reviewOnly: true`;
- `requiresUserApproval: true`;
- `executionAuthority: false`.

## Source-Backed Actions

Source-backed staged actions require source packet references before visible preview. The source packet must identify:

- source owner;
- source type;
- reviewed date or freshness model;
- confidence or verification status;
- limitations;
- what the source does not prove.

D4 does not create live lookups or external source fetching. It only requires that source-backed staged actions name the need for a source packet before user-facing claims.

## Not-Source-Backed Actions

Not-source-backed staged actions must disclose limitations clearly. They may be used for safety boundaries, blocked high-risk request review notes, or planning explanations.

A not-source-backed action must not pretend to have verified source support. It must say that it is a safety boundary note, limitation note, or review-only explanation.

## No-Execution Guarantees

Sprint D4 preserves:

- execution false;
- provider handoff false;
- no pending actions;
- no backend writes;
- no storage writes;
- no network or live lookup;
- no calls;
- no messages;
- no payments;
- no location sharing;
- no camera or media activation;
- no marketplace transaction;
- no medical, pharmacy, or emergency execution.

## Mapping Module

Module: `public/nexus-staged-action-evidence-mapping.js`

The module provides:

- `buildStagedActionEvidenceAccountability(action)`;
- `validateStagedActionEvidenceAccountability(action)`.

The module is deterministic and local. It imports only the inert Sprint D2 staged action contract. It does not touch DOM, events, fetch, storage, providers, navigation, permissions, backend state, or runtime Standard User surfaces.

## Accountability Statuses

The mapping returns:

- `sourceBacked`
- `hasEvidenceRequirement`
- `hasSourcePacketRequirement`
- `hasLimitations`
- `hasSafeUseNotes`
- `executionAuthority`
- `providerHandoffAllowed`
- `pendingActionAllowed`
- `backendWriteAllowed`
- `isReviewOnlySafe`
- `readyForVisibleReview`

`readyForVisibleReview` may be true only when the staged action is safe under D2, has evidence fields, has limitations, has safe-use notes, has no execution authority, has no provider handoff, has no pending action, and has no backend write.

## Fixture Expectations

The D3 fixtures must satisfy D4:

- agriculture training review action: source-backed requirement present;
- irrigation learning review action: source-backed requirement present;
- farm jobs review action: source-backed requirement present;
- AgriTrade browse review action: source-backed requirement present;
- blocked call request review note: not-source-backed limitation disclosed;
- blocked payment request review note: not-source-backed limitation disclosed.

## Runtime Boundary

D4 does not wire evidence mapping into `public/app.js`, `public/index.html`, or `server.js`. Future runtime-visible work must pass a separate default-off flag and browser validation phase.

## QA Guard

QA script: `scripts/nexus-sprint-d4-staged-action-evidence-accountability-mapping-qa.js`

The QA guard validates:

- document and module existence;
- every fixture has evidence, source packet, safe use, and limitation fields;
- source-backed fixtures require source packet references;
- not-source-backed fixtures disclose limitations and safety boundary wording;
- every fixture maps to execution false, provider handoff false, no pending actions, no backend writes;
- mapping module does not contain DOM, event, network, storage, navigation, provider, permission, or execution APIs;
- package alias and safe-suite wiring exist.

## Conclusion

Sprint D4 establishes the accountability layer needed before staged action previews can become visible. The lane remains review-only and non-executing.
