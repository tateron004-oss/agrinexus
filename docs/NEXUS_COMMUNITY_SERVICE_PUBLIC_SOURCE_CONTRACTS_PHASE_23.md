# Nexus Community-Service Public Source Contracts Phase 23

Phase: 23 - Community-service public sources
Roadmap row: "Model NGO/government resource sources"
Status: metadata-only community directory contracts, no referrals, no contact, no external submission

## Purpose

Nexus must help underserved families and rural communities find community resources without pretending to submit referrals, contact agencies, determine eligibility, or share personal information. Phase 23 defines inert public-source contracts for community-service and government-resource directories.

This phase does not fetch external resource directories, contact NGOs, contact government agencies, submit forms, verify eligibility, share user data, create accounts, schedule services, process payments, or execute referrals.

## Community Source Contract Module

The inert source contract module is:

- `public/nexus-community-service-public-source-contracts.js`

It defines public-source contracts for:

- NGO and community service directories;
- government service agency directories;
- food, shelter, and household support resources;
- maternal, child, and family support resources;
- disability and accessibility support resources;
- legal aid and civil-support resource directories;
- rural connectivity and digital access resources;
- language and translation support resources.

Each source contract must include:

- `sourceId`;
- `domain`;
- `displayName`;
- `sourceOwnerType`;
- `communitySourceCategory`;
- `supportedCommunityQuestions`;
- `expectedDataFields`;
- `verificationRequirements`;
- `freshnessRequirements`;
- `eligibilityDisclosureRequirements`;
- `privacyRequirements`;
- `languageLocalizationRequirements`;
- `allowedResponseStates`;
- `forbiddenClaims`;
- `permissionRequirements`;
- `auditRequirements`;
- disabled runtime/action flags.

## Response Posture

Nexus may provide:

- `general_guidance` for broad community-resource navigation;
- `source_backed_guidance` when a verified public source is configured and freshness is disclosed;
- `provider_directory_result` for directory-style resource display;
- `prepared_action_preview` for non-executing next-step preparation;
- `unavailable_source_fallback` when a source is missing, stale, or unverified.

## Community Service Safety Boundaries

Nexus must not:

- claim eligibility is approved;
- submit referrals;
- contact an agency, NGO, provider, or caseworker;
- share personal, household, health, identity, financial, immigration, or location details;
- create an account or application;
- schedule an appointment;
- process payment;
- imply emergency dispatch;
- promise benefits, legal outcomes, housing, food assistance, medical care, immigration outcomes, or financial support.

## Permission And Audit Rules

Viewing public community-resource information requires no permission when no personal data is used.

Future community-service actions require:

- explicit user approval before referral, contact, account creation, appointment request, or information sharing;
- consent before sharing personal, household, health, identity, financial, immigration, or location details;
- provider/agency confirmation where a partner workflow is involved;
- audit logging of source used, freshness shown, eligibility boundary, privacy boundary, and blocked or approved next step.

## QA Expectations

QA must verify:

- every required community-service source category exists;
- all referral, agency contact, profile sharing, eligibility approval, account creation, appointment scheduling, payment, location sharing, and execution flags remain disabled;
- each source includes verification, freshness, eligibility, privacy, language, permission, and audit requirements;
- source-backed states include `source_backed_guidance`, `provider_directory_result`, `prepared_action_preview`, and `unavailable_source_fallback`;
- Standard User runtime files do not import or load the community-service source contract module.

## Future Work

Later phases may connect public resource directories or partner community-service feeds. Any referral, agency contact, account/application creation, appointment request, location sharing, or personal-data sharing must remain permission-gated and audit-controlled until explicitly approved.
