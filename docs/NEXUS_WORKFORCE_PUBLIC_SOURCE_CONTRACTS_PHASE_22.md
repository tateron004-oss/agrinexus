# Nexus Workforce Public Source Contracts Phase 22

Phase: 22 - Workforce public sources
Roadmap row: "Model training/job public sources"
Status: metadata-only workforce source contracts, no applications, referrals, employer contact, profile sharing, or live job feed

## Purpose

Phase 22 defines the public-source contract Nexus needs before it can provide source-backed workforce, job-readiness, education, and training access guidance. Nexus should help workers and underserved communities understand available pathways without claiming live job availability, applying for jobs, contacting employers, submitting profiles, issuing credentials, or enrolling users automatically.

This phase does not fetch job feeds, apply for jobs, contact employers, submit referrals, share profiles, issue certificates, schedule interviews, process payments, or activate provider integrations.

## Workforce Source Contract Module

The inert source contract module is:

- `public/nexus-workforce-public-source-contracts.js`

It defines public-source contracts for:

- public workforce program directories;
- public training and course catalogs;
- public job board source metadata;
- apprenticeship and certification sources;
- career pathway and skills framework sources;
- employer public opportunity pages;
- youth/women/community workforce program sources;
- agriculture workforce training sources.

Each source contract must include:

- `sourceId`;
- `domain`;
- `displayName`;
- `sourceOwnerType`;
- `workforceSourceCategory`;
- `supportedWorkerQuestions`;
- `expectedDataFields`;
- `verificationRequirements`;
- `freshnessRequirements`;
- `eligibilityDisclosureRequirements`;
- `languageLocalizationRequirements`;
- `allowedResponseStates`;
- `forbiddenClaims`;
- `permissionRequirements`;
- `auditRequirements`;
- disabled runtime/action flags.

## Answer Posture

Nexus may provide:

- `general_guidance` for broad career or training questions;
- `source_backed_guidance` when a verified public source is configured and freshness is disclosed;
- `prepared_action_preview` for non-executing next steps such as gathering documents or reviewing eligibility;
- `unavailable_source_fallback` when a public workforce source is missing, stale, or unverified.

Nexus must clearly distinguish:

- general workforce guidance;
- source-backed program information;
- live application or employer interaction, which is not enabled by this phase.

## Workforce Safety Boundaries

Nexus must not:

- claim a job is currently open without source freshness;
- apply for a job;
- contact an employer;
- submit a profile, resume, certificate, or application;
- schedule an interview;
- promise hiring, placement, immigration, legal, or financial outcomes;
- issue a credential or certificate;
- request payment for training or employment;
- share personal information without explicit approval.

## Permission And Audit Rules

Viewing public workforce information requires no permission when no personal data is used.

Future workforce actions require:

- explicit user approval before applications, referrals, employer contact, interview scheduling, or profile sharing;
- consent before sharing personal information;
- role-based approval for staff/admin actions;
- audit logging of source used, freshness shown, eligibility boundary, action preview, and blocked or approved next step.

## QA Expectations

QA must verify:

- every required workforce source category exists;
- all application, referral, employer contact, profile sharing, interview scheduling, credential issuing, payment, and execution flags remain disabled;
- each source includes verification, freshness, eligibility disclosure, language, permission, and audit requirements;
- source-backed states include `source_backed_guidance`, `prepared_action_preview`, and `unavailable_source_fallback`;
- Standard User runtime files do not import or load the workforce source contract module.

## Future Work

Later phases may connect verified public workforce directories or partner training/job feeds. Any application, referral, employer contact, profile sharing, credential, scheduling, or payment behavior must remain permission-gated and audit-controlled until explicitly approved.
