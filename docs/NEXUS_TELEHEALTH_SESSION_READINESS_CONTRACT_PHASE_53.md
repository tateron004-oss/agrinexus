# Nexus Telehealth Session Readiness Contract

Phase: 53 - Telehealth Session Workflow
Status: inert readiness contract and deterministic QA only
Related roadmap row: `| Phase 53 | Telehealth session workflow | Open approved telehealth session | session connector | future | high | telehealth provider | camera/mic consent | telehealth execution QA | live room only if configured |`

## Scope Decision

Phase 53 does not open live telehealth rooms. A live session requires a configured telehealth provider connector, verified session metadata, camera and microphone consent, user approval, provider/session availability, and audit coverage.

This phase creates the readiness contract that must be satisfied before Nexus may create, join, launch, reconnect, or hand off to any live telehealth session.

This phase does not activate:

- live telehealth sessions
- video room creation
- camera activation
- microphone activation
- provider session APIs
- external telehealth links
- waiting-room entry
- provider connection claims
- medical diagnosis
- emergency dispatch
- background media capture
- Standard User runtime telehealth execution behavior
- storage or network side effects
- backend behavior changes

## Contract Artifact

The inert contract lives in:

- `public/nexus-telehealth-session-readiness-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

## Default Readiness Posture

The default contract keeps telehealth execution disabled:

- `phase: "53"`
- `riskTier: "high"`
- `readinessStatus: "blocked"`
- `liveRoomEnabled: false`
- `sessionCreationEnabled: false`
- `sessionJoinEnabled: false`
- `cameraActivationAllowed: false`
- `microphoneActivationAllowed: false`
- `providerApiEnabled: false`
- `externalLinkOpenAllowed: false`
- `standardUserTelehealthExecutionAllowed: false`
- `executionAllowed: false`
- `liveActionEnabled: false`

Nexus may continue to provide safe health-access guidance and existing local camera preview handoff patterns, but it must not claim a live provider session exists unless a configured connector returns that state.

## Required Preconditions Before Live Session

Before any future live telehealth session can be enabled, Nexus must verify and visibly present:

- `resolvedRequester`
- `resolvedPatient`
- `visibleProviderDisplay`
- `visibleSessionPurpose`
- `providerAvailabilityState`
- `sessionAvailabilityState`
- `appointmentOrEncounterReference`
- `cameraConsent`
- `microphoneConsent`
- `privacyConsent`
- `languagePreference`
- `accessibilityNeeds`
- `identityOrRoleState`
- `explicitUserApproval`
- `providerConfirmationState`
- `cancellationPath`
- `auditEvent`
- `noBackgroundMediaCapture`
- `noSilentRoomJoin`
- `noHiddenProviderConnection`

## Camera and Microphone Consent

Camera and microphone access must remain explicit, user-initiated, and browser/native permission-gated. A future telehealth session workflow must distinguish:

- previewing what is needed;
- requesting permission;
- opening a local camera preview;
- joining a configured telehealth provider session;
- connecting to a live provider.

Local preview is not a live telehealth provider session.

## Restricted Domain Rules

Additional restrictions apply to:

- `healthcare`
- `telehealth`
- `emergency`
- `minors_family_support`
- `regulated_records`
- `pharmacy`
- `payments`
- `transportation_dispatch`

These domains may require identity verification, consent, role-based access, provider authorization, and compliance review before live session execution can be enabled.

## Standard User Expectations

The Standard User build may guide the user toward health access or explain telehealth requirements, but it must not:

- create a live telehealth room;
- join a live telehealth room;
- activate camera or microphone silently;
- open external telehealth provider links silently;
- claim a provider is connected;
- claim diagnosis or treatment;
- trigger emergency dispatch;
- bypass explicit approval;
- bypass audit logging.

## Safe Future Copy

Approved posture:

- “I can prepare the telehealth session requirements, but I cannot open a live session until the provider connector is active and you approve.”
- “Camera and microphone access require your permission.”
- “No live provider session has been opened.”
- “Provider confirmation is required before this can be treated as an approved telehealth session.”

Avoid:

- “You are connected to a provider.”
- “I opened the live telehealth room.”
- “Your camera is on.”
- “Your microphone is on.”
- “A clinician is reviewing this now.”
- “I diagnosed the condition.”

## QA Expectations

Phase 53 QA must verify:

- this readiness contract is present;
- telehealth session execution remains disabled by default;
- required preconditions are enumerated;
- camera and microphone consent are required;
- provider/session availability and confirmation are required;
- Standard User live session execution remains blocked;
- no app, server, route, provider, media, network, storage, or external-link hook was added.

Phase 53 itself remains a readiness boundary only.
