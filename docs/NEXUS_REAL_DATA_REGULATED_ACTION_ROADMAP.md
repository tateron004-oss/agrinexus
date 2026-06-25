# Nexus Real Prototype Foundation: Real Data And Regulated Action Roadmap

Phase: 17 - Nexus Real Prototype Foundation Sprint
Status: prototype foundation, source registry, permission gates, audit contracts, and regulated-action readiness

## Purpose

Nexus Workforce AI must clearly distinguish data that can be safely shown as general guidance from data and actions that require contracts, permissions, compliance review, confirmation, and audit logging.

Phase 17 converts Nexus from meeting-ready presentation posture into the real prototype foundation for source-backed answers, provider-ready workflows, permission-gated actions, and audit-controlled future execution.

Phase 17 does not implement live regulated actions. It does not add live provider lookup, provider contact, telehealth execution, pharmacy refill submission, mobile clinic dispatch, ride booking, location sharing, payment processing, FHIR record access, medical record sharing, or emergency dispatch. Those capabilities are not blocked forever; they require verified sources, provider integrations, consent, approval gates, and audit controls before they can be enabled.

Phase 17 adds the architecture contract for future real-data and regulated-action work:

- public source-backed data;
- partner-provided operational data;
- live API integrations;
- regulated patient/medical data;
- approved high-risk actions.

The source registry is `public/nexus-real-data-source-registry.js`. It is metadata-only and must remain unimported by `public/index.html`, `public/app.js`, and `server.js` until a future reviewed phase explicitly wires it through policy, permission, confirmation, and audit controls.

## Prototype Foundation Language

New Phase 17 work should frame Nexus as:

- a real prototype;
- source-ready;
- provider-ready;
- permission-gated;
- audit-controlled;
- multilingual;
- voice-operated;
- health-access capable;
- agriculture/workforce capable;
- not connected yet to live regulated systems unless explicitly configured.

Preferred user-facing language:

- "requires a verified source";
- "requires a provider integration";
- "requires your approval";
- "requires consent and audit logging";
- "I can prepare the next step";
- "I cannot execute that action until the required connection is active";
- "not connected yet".

Avoid new Phase 17 language that describes Nexus as a toy, fake, or merely simulated system. Historical docs may retain older meeting and local-safety wording where they describe previous phases.

## Source And Action Classes

### 1. Public Source-Backed Data

Examples:

- public provider directory data;
- public transportation resources;
- public emergency numbers or public health service pages.

Allowed future use:

- show source attribution;
- show last verified date;
- warn when stale;
- route user to review-only guidance.

Not allowed without later approval:

- provider contact;
- appointment booking;
- ride booking;
- emergency dispatch;
- payment;
- sharing user data with a third party.

### 2. Partner-Provided Operational Data

Examples:

- partner provider roster;
- telehealth provider availability;
- mobile clinic schedules;
- pharmacy support desk data;
- transportation partner resources.

Requirements:

- partner data-use agreement;
- owner and source metadata;
- freshness fields;
- role and permission model;
- explicit confirmation before any handoff or action;
- audit events for source use and blocked execution.

### 3. Live API Integrations

Examples:

- future live transit;
- future provider availability;
- future browser location capture;
- future payment quote;
- future partner status feed.

Requirements:

- approved API adapter;
- network/error fallback;
- stale-data behavior;
- user-facing source and freshness;
- no raw prompt to adapter execution;
- no hidden background polling unless approved.

### 4. Regulated Patient/Medical Data

Examples:

- prescriptions;
- refill status;
- medical records;
- FHIR resources;
- telehealth handoff context;
- provider clinical data.

Requirements:

- identity confirmation;
- patient authorization;
- provider authorization where required;
- HIPAA/medical privacy review where applicable;
- minimum necessary data;
- redaction and retention policy;
- audit events before access, display, sharing, or handoff.

### 5. Approved High-Risk Actions

Examples:

- provider contact;
- phone/WhatsApp/Telegram/SMS/email handoff;
- payments;
- marketplace buy/sell/checkout;
- location sharing;
- emergency handoff;
- regulated refill submission.

Requirements:

- intent classification;
- risk classification;
- source resolution;
- missing input resolution;
- permission gate;
- confirmation gate;
- approved provider adapter;
- audit before execution;
- clear result/failure/cancel state.

## Required Registry Fields

Every source/action category in Phase 17 uses the following fields:

- `id`
- `label`
- `dataOwner`
- `sourceType`
- `publicPartnerRegulatedStatus`
- `prototypeReadiness`
- `integrationMethod`
- `dataFreshness`
- `permissionRequirements`
- `complianceRequirements`
- `actionRiskLevel`
- `liveActionEnabled`
- `userApprovalRequired`
- `approvalGates`
- `auditRequirements`
- `futureImplementationPhase`

`liveActionEnabled` must remain `false` for every Phase 17 entry.

`prototypeReadiness` must clearly distinguish whether the category is `available-now`, `source-ready`, `partner-required`, `compliance-required`, or `future-execution`.

## Source Registry Matrix

| Category | Data owner | Source type | Public/partner/regulated status | Integration method | Permission requirements | Compliance requirements | Action risk level | Live action enabled | User approval required | Audit requirements | Future phase |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Provider directory data | Public health directories, provider networks, approved partners | `public_source_backed` | `public_partner` | Public-directory ingestion plus partner feed | Public view none; partner details require provider approval | Attribution, license/terms, partner agreement | `controlled` | `false` | `true` before contact/scheduling | source used, result shown, stale warning, contact blocked | 17B |
| Telehealth provider data | Telehealth provider or contracted partner | `partner_operational` | `partner_regulated` | Partner API or secure operational feed | User consent, provider authorization, role access | Medical privacy review, data processing agreement, minimum necessary disclosure | `high` | `false` | `true` | intent, risk, permission, confirmation, blocked/opened handoff | 17C |
| Pharmacy data and prescription/refill workflows | Pharmacy, prescribing provider, payer, patient-authorized source | `regulated_patient_medical` | `regulated` | Pharmacy API, FHIR medication resources, or review packet | Identity, patient consent, pharmacy/provider authorization, refill confirmation | Medical privacy, pharmacy regulation, prescribing boundary | `restricted` | `false` | `true` | access requested, identity required, consent required, refill blocked, handoff confirmation | 17D |
| Mobile clinic schedules | Clinic operator, health partner, NGO, public outreach program | `partner_operational` | `partner` | Partner schedule feed or public schedule import | Public view none; location and dispatch require consent/operator authorization | Partner terms, health access boundary, no dispatch claim | `high` | `false` | `true` | schedule source, location permission, dispatch blocked, request confirmation | 17E |
| Transportation resources | Public transit, community transport partner, care partner, user resource | `public_source_backed` | `public_partner` | Public route import, partner feed, manual directory | General view none; location and booking require permission/confirmation | Attribution, partner terms, accessibility disclaimer | `controlled` | `false` | `true` | resource shown, location permission, booking blocked | 17F |
| Location sharing | User/browser device; optional approved map/partner service | `live_api_integration` | `regulated` | Browser geolocation and future approved adapter | Browser permission, purpose-specific consent, external sharing confirmation | Privacy notice, minimum precision, no background tracking | `sensitive` | `false` | `true` | permission shown, denied/granted, sharing blocked | 17G |
| Payments | Payment processor, marketplace partner, payer, payee, sponsor | `approved_high_risk_action` | `approved_high_risk` | Future credential-gated payment provider adapter | Identity, payment authorization, role approval, final confirmation | PCI/payment provider compliance, fraud review, receipt retention | `restricted` | `false` | `true` | payment intent, quote, confirmation, blocked/provider-opened, receipt | 17H |
| Medical records/FHIR | Patient, provider organization, health system, FHIR server | `regulated_patient_medical` | `regulated` | SMART-on-FHIR/OAuth or approved export | Identity, patient authorization, provider authorization, scoped consent | HIPAA/privacy, FHIR security, OAuth minimization, retention, redaction | `restricted` | `false` | `true` | record access, scope authorized, redacted view, sharing blocked | 17I |
| Provider contact | User, provider directory owner, care partner, communication provider | `approved_high_risk_action` | `approved_high_risk` | Confirmed handoff through approved communication adapter | Contact resolution, explicit confirmation, provider selection, role authorization | Communication consent, privacy boundary, redacted logs | `high` | `false` | `true` | contact resolution, confirmation, accepted/rejected, handoff blocked/opened | 17J |
| Emergency dispatch | Local emergency services, public safety source, user, emergency partner | `approved_high_risk_action` | `approved_high_risk` | Future emergency handoff after legal/operational review | Explicit confirmation, location permission if sharing, regional approval | Emergency services legal review, medical safety review, regional disclosure | `restricted` | `false` | `true` | emergency intent, local-services guidance, dispatch blocked, location permission | 17K |

## Data Freshness Contract

Every real data source must expose freshness metadata before it is used for user-facing decisions:

```json
{
  "freshnessField": "lastVerifiedAt",
  "expectedUpdateCadence": "daily-to-weekly",
  "staleAfter": "30 days",
  "displayRequirement": "Show last verified date before relying on directory details."
}
```

Future runtime behavior must:

- show source name;
- show freshness timestamp;
- warn when stale;
- avoid presenting stale data as live;
- avoid contacting, booking, dispatching, paying, sharing, or sending from stale data.

## Permission And Approval Gates

Future regulated actions must flow through:

```text
Intent -> Source lookup -> Risk policy -> Permission gate -> Confirmation gate -> Approved adapter -> Audit log
```

No raw prompt may call an adapter directly.

User approval is required for:

- provider contact;
- telehealth handoff;
- pharmacy/refill workflow;
- mobile clinic request or dispatch handoff;
- transportation booking/contact;
- location sharing;
- payment;
- FHIR/medical record access or sharing;
- emergency handoff.

## Audit Requirements

At minimum, future implementations must log:

- source used;
- source freshness shown;
- stale warning shown;
- permission requested/granted/denied;
- confirmation shown/accepted/rejected/cancelled;
- blocked action reason;
- provider handoff shown/opened/failed;
- regulated-data access requested;
- redaction applied;
- result status.

Audit logging must not itself trigger execution.

## Phase 17 Implementation Roadmap

- 17A: Real Data and Regulated Action Roadmap and metadata registry.
- 17B: Provider directory source registry and freshness QA.
- 17C: Telehealth provider data readiness and handoff contract.
- 17D: Pharmacy and prescription/refill boundary.
- 17E: Mobile clinic schedule source boundary.
- 17F: Transportation resource integration boundary.
- 17G: Location sharing permission and freshness boundary.
- 17H: Payment provider architecture and no-execution QA.
- 17I: FHIR/medical records readiness and redaction model.
- 17J: Provider contact execution gates.
- 17K: Emergency dispatch boundary review.

## Current Safety Conclusion

Phase 17A does not enable live regulated actions. It defines the contract Nexus must satisfy before future real data, regulated data, or high-risk action phases can be considered.
