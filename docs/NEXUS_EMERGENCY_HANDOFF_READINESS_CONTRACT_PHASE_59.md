# Nexus Emergency Handoff Readiness Contract

Phase: 59 - Emergency handoff workflow
Status: inert readiness contract and deterministic QA only
Related roadmap row: `| Phase 59 | Emergency handoff workflow | Prepare approved emergency handoff | emergency connector | future | restricted | emergency partner | legal/regional approval | emergency QA | no unsupported dispatch |`

## Scope Decision

Phase 59 does not dispatch emergency services, contact emergency responders, call an ambulance, open an emergency provider channel, share location, activate camera or microphone, contact family members, create transport, submit medical details, or claim that help is on the way.

This phase creates the readiness contract that must be satisfied before Nexus may support any future approved emergency handoff workflow.

This phase does not activate:

- live emergency dispatch
- emergency partner APIs
- ambulance or responder contact
- family or caregiver contact
- emergency location sharing
- emergency transport dispatch
- emergency medical record sharing
- telehealth escalation execution
- camera or microphone activation
- emergency payment or insurance action
- Standard User runtime emergency execution behavior
- storage or network side effects
- backend behavior changes

## Contract Artifact

The inert contract lives in:

- `public/nexus-emergency-handoff-readiness-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

## Default Readiness Posture

The default contract keeps emergency execution disabled:

- `phase: "59"`
- `riskTier: "restricted"`
- `readinessStatus: "blocked"`
- `emergencyDispatchEnabled: false`
- `emergencyPartnerApiEnabled: false`
- `responderContactEnabled: false`
- `caregiverContactEnabled: false`
- `locationSharingEnabled: false`
- `transportDispatchEnabled: false`
- `medicalRecordSharingEnabled: false`
- `telehealthEscalationEnabled: false`
- `cameraOrMicrophoneEnabled: false`
- `standardUserEmergencyExecutionAllowed: false`
- `executionAllowed: false`
- `liveActionEnabled: false`

Nexus may provide safety guidance and organize information, but it must not claim emergency services were dispatched unless a future approved connector, region policy, consent/permission model, provider confirmation, and audit path exist.

## Required Preconditions Before Emergency Handoff

Before any future emergency handoff can be enabled, Nexus must verify and visibly present:

- `recognizedEmergencyRegion`
- `approvedEmergencyPartner`
- `legalRegionalApproval`
- `verifiedUserIdentityWhenRequired`
- `visibleEmergencyType`
- `visibleActionType`
- `visibleRecipientOrAgency`
- `visibleLocationSource`
- `locationPermissionState`
- `medicalDataSharingScope`
- `consentOrLegalBasis`
- `providerAvailabilityState`
- `responderConfirmationRequirement`
- `auditEvent`
- `explicitFinalUserApprovalWhenSafe`
- `immediateDangerFallback`
- `cancellationPathWhenApplicable`
- `noSilentDispatch`
- `noHiddenLocationSharing`
- `noUnsupportedResponderContact`

## Immediate Danger Boundary

For immediate danger, Nexus should direct the user to local emergency services and avoid delaying urgent care. The platform must not present itself as a substitute for emergency responders, clinical triage, or legal emergency dispatch infrastructure.

## Restricted Domain Rules

Additional restrictions apply to:

- `emergency`
- `emergency_dispatch`
- `healthcare`
- `telehealth`
- `location`
- `transportation_dispatch`
- `medical_records`
- `provider_contact`
- `caregiver_contact`
- `payments`
- `minors_family_support`

## Standard User Expectations

The Standard User build may provide emergency safety language and organize information, but it must not:

- dispatch emergency services;
- call responders or providers;
- open a hidden emergency channel;
- share location;
- activate camera or microphone;
- submit medical records;
- schedule transport;
- process payment;
- claim help is on the way;
- bypass region legality, permission, provider confirmation, or audit logging.

## Safe Future Copy

Approved posture:

- "If anyone is in immediate danger, contact local emergency services now."
- "I can help organize information, but I cannot dispatch emergency help until an approved regional emergency connector is active."
- "No emergency service has been contacted or dispatched by Nexus."

Avoid:

- "I dispatched emergency help."
- "An ambulance is on the way."
- "I called emergency services."
- "I shared your location with responders."
- "I contacted your emergency contact."

## QA Expectations

Phase 59 QA must verify:

- this readiness contract is present;
- emergency dispatch remains disabled by default;
- legal/regional approval, approved emergency partner, location permission, consent/legal basis, provider/responder confirmation, fallback, cancellation, and audit requirements are enumerated;
- restricted domains are documented;
- Standard User emergency execution remains blocked;
- no app, server, route, emergency provider, call, message, location, camera, microphone, storage, network, or external-link hook was added.

Phase 59 itself remains a readiness boundary only.
