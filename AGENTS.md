# Nexus Protected Foundation

## Golden production baseline

The production foundation is the intact Build 502 source restored at GitHub commit
`0e3ce5b6`. Preserve the behavior that passed production voice certification.

## Protected behavior

The following are protected and must remain working together:

- Nexus orb, animations, and visual state
- microphone visibility, ownership, permission handoff, and retry behavior
- OpenAI Realtime transport, intelligence, speech, and response lifecycle
- continuous listening, multi-turn context, barge-in, and return-to-listening
- English, Spanish, French, Swahili, Arabic, and Portuguese
- authentication and the signed-in voice entrance
- voice intent routing, visible workspace launch, population, and acknowledgement
- all certified application lanes: Agriculture, Health & Chronic Care, Telehealth,
  Mobile Clinic, Pharmacy, Learning, Workforce, Marketplace, Maps, Music/Media,
  Reminders, Offline Queue, and Live Knowledge
- healthcare consent and safety controls

## Mandatory change boundary

Do not edit, replace, regenerate, reformat, minify, delete, rename, or move any file
listed in `.github/nexus-protected-foundation.json`.

New work must be additive and isolated outside the protected files. Adapters may call
the protected interfaces without rewriting them.

Only the repository owner may unlock a protected file, and only by explicitly naming
that file and authorizing the protected-foundation baseline to be updated. A general
request to fix, improve, deploy, add a provider, or continue is not authorization.

Never update the protected manifest merely to make CI pass. When explicit owner
authorization exists, first preserve the current production commit on a recovery
branch, change only the named file, run the complete protected and production voice
certification, and update the baseline only after all gates pass.

## Required closeout

Before publishing any change:

1. Run `node scripts/nexus-protected-foundation-guard.js`.
2. Run the full protected QA/certification appropriate to the change.
3. Confirm no protected file appears in the diff.
4. Do not deploy a failing or incomplete commit.

