# Nexus Genesis Predictive Workforce Runtime

## Purpose

The Predictive Workforce runtime makes workforce and career intelligence a first-class Nexus Genesis capability. It helps Standard Users understand job fit, missing skills, training pathways, barriers, source trust, employer verification, and next safe steps.

## Runtime Capability

Canonical capability ID:

`predictive_workforce_career_intelligence`

Implemented locally:

- career discovery
- skills inventory
- job-readiness assessment
- explainable job matching
- skills-gap analysis
- credential analysis
- training pathway recommendation
- resume and application preparation support
- interview preparation support
- barrier detection
- support-service navigation
- application tracking packet support
- employer trust registry
- workforce source registry
- workforce source verification packets
- prediction receipts
- professional-review queue packet support
- privacy, consent, correction, export, deletion, and sharing boundaries

## Source Registry

The runtime includes canonical workforce source classes for:

- O*NET / U.S. Department of Labor
- CareerOneStop
- Apprenticeship.gov
- Bureau of Labor Statistics Occupational Outlook Handbook
- state workforce agencies or labor ministries
- official licensing boards
- official employer career pages
- verified training providers
- recognized labor-market research
- professional career-counseling resources
- public job boards

Public job boards remain lower-trust sources. Nexus does not claim a job is open or employer-confirmed unless source freshness and employer verification support that claim.

The source-verification runtime returns `genesis_workforce_source_verification_packet` records. It checks local source records, employer trust records, listing-currentness state, and scam-risk signals before Nexus answers questions such as "Is this job still open?", "Is this employer verified?", or "Show the source."

Current fixture listings remain `verification_pending`, `training_provider_unverified`, or `third_party_source` unless current employer/source evidence is present. Nexus must not claim a job is open, a recruiter is legitimate, an employer is trusted, or a pay range is verified without that evidence.

## Employer Trust

Employer trust records separate:

- official domain
- official careers URL
- employer verification state
- recruiter verification requirement
- application method
- communication readiness
- warning states
- trust receipt requirement

Nexus does not label an employer trusted merely because a public job board lists it.

## Predictive Models

The model registry currently includes deterministic advisory engines:

- workforce readiness rule engine
- explainable job fit ranker
- barrier and completion detector
- de-identified workforce program intelligence

These models do not make hiring, rejection, promotion, termination, eligibility, licensing, benefits, or accommodation decisions. Employer-facing use requires human review.

## Fairness and Privacy

The runtime excludes protected or sensitive attributes from job-fit scoring, including race, disability, medical history, mental-health records, protected age, unrelated criminal history, and unrelated social-service use.

Health and mental-health data remain isolated from employer workflows. Employer sharing defaults to off and requires user consent.

## API

- `GET /api/nexus/workforce-genesis/status`
- `GET /api/nexus/workforce-genesis/registries`
- `POST /api/nexus/workforce-genesis/evaluate`
- `POST /api/nexus/workforce-genesis/capability-status`
- `POST /api/nexus/workforce-genesis/source-verification`
- `POST /api/nexus/workforce-genesis/feedback`

The feedback endpoint queues local professional-review metadata. It does not contact employers, submit applications, schedule interviews, or share health data.

## Standard User Commands

Supported examples:

- "Nexus, help me find a job."
- "What jobs am I qualified for?"
- "What am I missing?"
- "Find apprenticeships."
- "Help me prepare for an interview."
- "I do not have transportation."
- "Delete my employment data."
- "Show workforce capability status and production limitations."

## Execution Boundaries

Disabled by default:

- application submission
- employer contact
- interview scheduling
- training enrollment
- transportation dispatch
- resume sharing
- profile sharing
- payment
- hiring decision authority
- rejection decision authority

Nexus may prepare local packets, receipts, explanations, and professional-review queue items. Nexus must not claim application submission, employer contact, interview scheduling, placement, or hiring outcomes unless a configured provider confirms the action through a future consented execution path.

## Production Limitations

This runtime is implemented locally and not production-authorized for employer-facing execution. Live job feeds, employer APIs, training provider APIs, application submission, interview scheduling, referrals, and transportation requests remain credential-, consent-, confirmation-, legal-, fairness-, and audit-gated.
