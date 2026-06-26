# Nexus Provider And Clinic Public Directory Contracts Phase 21

Phase: 21 - Provider/clinic public sources
Roadmap row: "Model clinic/provider public directories"
Status: metadata-only public directory contracts, no provider contact, no scheduling, no regulated health execution

## Purpose

Nexus must eventually help people find healthcare access points, clinics, hospitals, telehealth entry points, pharmacies, mobile clinics, and community health resources. Phase 21 defines the safe public-directory contract for those answers without activating provider contact, scheduling, telehealth rooms, medical advice, medical record access, prescription/refill workflows, location sharing, emergency dispatch, or any regulated healthcare action.

## Directory Contract Module

The inert contract module is:

- `public/nexus-provider-clinic-public-directory-contracts.js`

It defines public directory contracts for:

- clinics;
- hospitals;
- telehealth access points;
- mobile clinic operators;
- pharmacy directory entries;
- public health offices;
- community health worker programs;
- transportation-to-care access points.

Each entry must include:

- `directoryId`;
- `domain`;
- `displayName`;
- `sourceOwnerType`;
- `directoryCategory`;
- `expectedDirectoryFields`;
- `verificationRequirements`;
- `freshnessRequirements`;
- `providerAvailabilityRules`;
- `contactBoundaryRules`;
- `privacyRequirements`;
- `permissionRequirements`;
- `auditRequirements`;
- `allowedResponseStates`;
- `forbiddenClaims`;
- disabled runtime/action flags.

## Response Posture

Provider and clinic directory responses may use:

- `provider_directory_result`;
- `source_backed_guidance`;
- `unavailable_source_fallback`;
- `permission_required` only to explain a boundary, not to execute.

Nexus must disclose whether the result is:

- public directory information;
- saved local directory context;
- partner-sourced information;
- stale or unverified information;
- not connected yet.

## Healthcare Boundary

Nexus must not:

- claim a provider is live or available unless source data supports it;
- contact a provider silently;
- schedule an appointment;
- open a telehealth room;
- request camera or microphone permission;
- share patient details;
- access medical records;
- submit prescription or refill requests;
- dispatch emergency help;
- present directory data as diagnosis, treatment, or medical advice.

## Contact And Scheduling Boundary

Directory display is not contact or scheduling.

Any future contact, call, message, scheduling, referral, pharmacy handoff, mobile clinic request, or telehealth handoff requires:

- a verified connector;
- explicit user approval;
- consent when health or private data is involved;
- provider confirmation where applicable;
- audit logging;
- a no-action-taken fallback when unavailable.

## QA Expectations

QA must verify:

- every required provider/clinic public directory category exists;
- all provider contact, scheduling, telehealth, health-data, pharmacy execution, emergency dispatch, location sharing, and payment flags remain disabled;
- each contract includes verification, freshness, availability, contact boundary, privacy, permission, and audit requirements;
- forbidden claims prevent live availability, provider contact, scheduling, medical advice, medical records access, prescription/refill action, and emergency dispatch;
- Standard User runtime files do not import or load the directory contract module.

## Future Work

Later provider/clinic phases may connect verified public directories or partner feeds. Those phases must preserve the difference between displaying directory information and executing provider contact, scheduling, telehealth, pharmacy, medical record, or emergency workflows.
