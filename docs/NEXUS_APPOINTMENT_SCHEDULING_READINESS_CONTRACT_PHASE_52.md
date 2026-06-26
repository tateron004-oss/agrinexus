# Nexus Appointment Scheduling Readiness Contract

Phase: 52 - Appointment Scheduling
Status: inert readiness contract and deterministic QA only
Related roadmap row: `| Phase 52 | Appointment scheduling | Schedule through provider APIs | scheduling adapter | future | high | clinic/telehealth connector | user and provider confirmation | schedule QA | schedule only when confirmed |`

## Scope Decision

Phase 52 is not enabling appointment scheduling yet. Scheduling through clinic, telehealth, pharmacy, transportation, workforce, or any other provider API is a high-risk action because it can affect care access, time-sensitive support, marketplace operations, travel, and user commitments.

This phase creates the readiness contract that must be satisfied before Nexus may schedule, reschedule, cancel, hold, confirm, or submit any appointment through a provider connector.

This phase does not activate:

- live appointment scheduling
- provider calendar writes
- clinic scheduling APIs
- telehealth scheduling APIs
- pharmacy appointment or refill scheduling
- transportation dispatch or pickup scheduling
- marketplace meeting scheduling
- emergency response scheduling
- external calendar writes
- background scheduling
- silent appointment holds
- Standard User runtime scheduling behavior
- storage or network side effects
- backend behavior changes

## Contract Artifact

The inert contract lives in:

- `public/nexus-appointment-scheduling-readiness-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

The module exposes:

- `APPOINTMENT_SCHEDULING_ACTION_TYPES`
- `APPOINTMENT_SCHEDULING_PROVIDER_TYPES`
- `APPOINTMENT_SCHEDULING_REQUIRED_PRECONDITIONS`
- `APPOINTMENT_SCHEDULING_RESTRICTED_DOMAINS`
- `APPOINTMENT_SCHEDULING_NO_EXECUTION_DEFAULTS`
- `APPOINTMENT_SCHEDULING_READINESS_CONTRACT`
- `createAppointmentSchedulingReadinessContract(...)`

## Default Readiness Posture

The default contract keeps scheduling disabled:

- `phase: "52"`
- `riskTier: "high"`
- `readinessStatus: "blocked"`
- `schedulingEnabled: false`
- `providerApiEnabled: false`
- `calendarWriteEnabled: false`
- `appointmentHoldEnabled: false`
- `appointmentConfirmEnabled: false`
- `appointmentCancelEnabled: false`
- `appointmentRescheduleEnabled: false`
- `backgroundSchedulingEnabled: false`
- `silentSchedulingEnabled: false`
- `standardUserSchedulingAllowed: false`
- `adminBypassAllowed: false`
- `executionAllowed: false`
- `liveActionEnabled: false`

Nexus may prepare a non-executing scheduling summary in a future phase, but it must not claim an appointment has been booked until a configured provider connector, explicit user approval, provider confirmation, and audit event all exist.

## Required Preconditions Before Scheduling

Before any future appointment execution can be enabled, Nexus must verify and visibly present:

- `resolvedRequester`
- `resolvedPatientOrParticipant`
- `visibleProviderDisplay`
- `visibleAppointmentType`
- `visiblePurposePreview`
- `candidateDateTime`
- `timezone`
- `locationOrVisitMode`
- `languagePreference`
- `accessibilityNeeds`
- `consentState`
- `permissionState`
- `providerAvailabilityState`
- `providerConfirmationState`
- `explicitUserApproval`
- `cancellationPath`
- `auditEvent`
- `noBackgroundScheduling`
- `noSilentScheduling`
- `noHiddenProviderWrite`

## User and Provider Confirmation

Scheduling requires both:

- user approval, because the user must understand what will be requested or booked;
- provider confirmation, because Nexus must not invent provider availability or claim a completed appointment without a real provider response.

The user-facing copy for future scheduling must distinguish between:

- preparing an appointment request;
- checking available options;
- asking a provider to confirm;
- receiving a confirmed appointment from a configured provider.

## Restricted Domain Rules

Additional restrictions apply to:

- `healthcare`
- `telehealth`
- `pharmacy`
- `transportation_dispatch`
- `emergency`
- `payments`
- `marketplace_transactions`
- `minors_family_support`
- `regulated_records`

These domains may require identity verification, consent, role-based access, provider authorization, and compliance review before any live scheduling can be enabled.

## Standard User Expectations

The Standard User build may eventually preview appointment options or prepare a scheduling checklist, but it must not:

- book an appointment;
- hold an appointment slot;
- cancel an appointment;
- reschedule an appointment;
- write to a provider calendar;
- open a provider scheduling API silently;
- submit appointment data in the background;
- claim provider confirmation without a configured connector;
- bypass explicit approval;
- bypass audit logging.

## Admin/Full Expectations

Admin/full modes still require:

- explicit user approval;
- provider availability state;
- provider confirmation state;
- audit event coverage;
- role-based permission where applicable;
- no bypass for high-risk healthcare, pharmacy, transportation, marketplace, payment, or emergency scheduling.

Admin access does not turn an unconfigured provider connector into a live scheduling system.

## Safe Future Copy

Approved posture:

- “I can prepare the appointment request, but I cannot book it until the provider connector is active and you approve.”
- “This provider’s live scheduling connection is not active yet.”
- “I can show what would be needed before scheduling.”
- “No appointment has been booked.”
- “Provider confirmation is required before this can be treated as scheduled.”

Avoid:

- “Your appointment is booked.”
- “I scheduled it.”
- “I reserved the slot.”
- “The provider confirmed.”
- “I cancelled the appointment.”
- “I rescheduled it.”

## QA Expectations

Phase 52 QA must verify:

- this readiness contract is present;
- scheduling remains disabled by default;
- required preconditions are enumerated;
- user approval and provider confirmation are required;
- restricted domains are documented;
- Standard User scheduling execution remains blocked;
- Admin/full cannot bypass confirmation, provider availability, or audit requirements;
- no app, server, route, provider, calendar, storage, network, or UI scheduling hook was added.

## Future Implementation Path

Future phases may add:

1. appointment candidate collection and validation;
2. non-executing appointment preview UI;
3. provider availability connector contracts;
4. user approval and cancellation UI;
5. provider confirmation response handling;
6. audit event persistence;
7. provider-specific scheduling adapters;
8. carefully scoped live scheduling once all gates pass.

Phase 52 itself remains a readiness boundary only.
