# Nexus Sprint C2 Evidence Accountability Standard

## Purpose

Sprint C2 adds a professional evidence accountability layer to the Standard User preview runtime. Nexus now shows an `Evidence & Verification` section inside the existing preview-only plan card so users can see what is source-backed, what is inferred by Nexus, and what remains unverified or unavailable.

This sprint does not enable live connectors, provider execution, storage writes, backend writes, browser permissions, or external handoffs.

## Files Changed

- `public/index.html`
- `public/app.js`
- `public/nexus-mode-evidence-requirements.js`
- `public/nexus-professional-evidence-packet.js`
- `docs/NEXUS_SPRINT_C2_EVIDENCE_ACCOUNTABILITY_STANDARD.md`
- `scripts/nexus-sprint-c2-evidence-accountability-standard-qa.js`
- `package.json`
- `scripts/qa-suite.js`

## Runtime Behavior Added

- Loads the inert mode evidence requirements helper before `app.js`.
- Loads the inert professional evidence packet helper before `app.js`.
- Adds a visible `Evidence & Verification` section to the existing `Nexus Plan Preview`.
- Shows mode, source status, freshness, confidence, verified sources if any, source-supported claims, Nexus inferences, limits, and claims Nexus is not making.
- Keeps all preview controls non-executing.

## Professional Evidence Standard

Every preview must distinguish between:

1. Source-supported claims.
2. Nexus inferences.
3. Unsupported or unavailable information.
4. Mode-specific limitations.
5. Claims Nexus is not making.
6. No-execution boundaries.

When no verified source exists, Nexus must say so clearly. It must not invent source names, citations, freshness, confidence, provider availability, local expert review, clinical review, marketplace transaction status, location status, or completed actions.

The default status for unconnected previews is not source-backed.

## Mode Requirements

The evidence requirements helper defines mode-specific requirements for agriculture support, health and telehealth access, logistics and transportation, marketplace and AgriTrade, workforce resources, learning and training, maps and location, and general Nexus guidance.

These requirements are visible accountability guidance only. They do not grant permission, execute actions, or unlock providers.

## Safety Boundaries Preserved

Sprint C2 does not enable:

- provider contact
- phone calls
- messages, WhatsApp, SMS, Telegram, or email sends
- appointment scheduling
- marketplace purchase or sale
- payment
- location sharing
- camera, photo, upload, microphone, or media capture
- medical diagnosis, pharmacy action, refill, prescription, or clinical execution
- emergency dispatch
- live source lookup
- backend mutation
- storage mutation
- hidden staged action
- background execution
- silent side effects

Every evidence packet keeps execution fields false and includes `No action has been taken.`

No provider contact is started by Sprint C2.

No live source lookup is performed by Sprint C2.

## Agriculture Accountability

Agriculture previews remain source-aware but default to general guidance unless a verified agriculture source contract is provided. The preview must tell users that local crop, soil, weather, pest, and chemical conditions matter.

Chemical, pesticide, herbicide, fungicide, insecticide, and fertilizer decisions still require product labels, local regulation, PPE, and qualified local guidance.

## Health And Telehealth Accountability

Health and telehealth prompts require verified provider integration, consent, and audit controls before future live action. The preview must not claim diagnosis, scheduling, provider contact, prescription, refill, medical record access, or emergency dispatch.

## Marketplace Accountability

Marketplace and AgriTrade previews remain browse/review only. Nexus must not claim buying, selling, checkout, payment, delivery, buyer contact, seller contact, or transaction execution.

## QA Coverage

The Sprint C2 QA guard verifies:

- helper files exist and export the required APIs
- mode evidence requirements exist for all required modes
- professional evidence packets remain inert
- unverified or missing sources do not become source-backed
- verified source contracts are the only source-backed path
- `public/app.js` renders `Evidence & Verification`
- no forbidden execution, storage, backend, network, permission, provider, payment, medical, location, camera, marketplace, or emergency behavior is introduced by the new helpers
- package alias exists
- `nexus-workforce` and `all-safe` include the Sprint C2 QA

## Browser Validation Expectation

In Standard User, prompts across agriculture, telehealth, logistics, marketplace, workforce, learning, maps, and risky/high-impact categories should show truthful evidence status and limitations when a preview card appears.

No hidden metadata should become visible. No action should execute automatically.

## Next Sprint Recommendation

The next sprint should harden the first source-backed agriculture activation lane by defining how verified public agriculture source records are selected and displayed without enabling provider contact, payments, marketplace transactions, location sharing, health actions, or emergency execution.
