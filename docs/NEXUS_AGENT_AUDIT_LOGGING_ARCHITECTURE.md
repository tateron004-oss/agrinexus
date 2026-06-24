# Nexus Agent Audit Logging Architecture

Phase: 10E agent audit logging architecture
Current checkpoint: `00a1883 Add confirmation UI contract QA guard`
Status: planning and safety architecture only

## Purpose

This document defines how Nexus should record agent events before future controlled execution is implemented. It is intentionally a planning artifact. It does not add runtime audit logging, provider execution, direct calling, direct messaging, browser `tel:` launch, WhatsApp launch, Telegram launch, Twilio execution, SMS send, email send, telehealth execution, camera access, location access, marketplace transaction, payment behavior, account behavior, identity behavior, emergency dispatch, or hidden metadata exposure.

The target lifecycle remains:

```text
Understand -> Classify Risk -> Preview -> Stage -> Confirm -> Execute -> Log
```

The audit layer should eventually make each stage observable, accountable, and privacy-safe without making Nexus more autonomous than the current confirmation and provider boundaries allow.

## 1. Repo Audit

### Inspected Files And References

- `server.js`
- `public/app.js`
- `docs/NEXUS_CONTACT_CALL_PERMISSION_ARCHITECTURE.md`
- `docs/NEXUS_COMMUNICATION_PROVIDER_HANDOFF_PLAN.md`
- `docs/NEXUS_UNIFIED_CONFIRMATION_UI_ARCHITECTURE.md`
- `scripts/nexus-contact-call-permission-qa.js`
- `scripts/nexus-contact-resolution-qa.js`
- `scripts/nexus-provider-handoff-boundary-qa.js`
- `scripts/nexus-confirmation-ui-contract-qa.js`
- existing call, confirmation, controlled-action, telehealth, and app QA scripts

### Current Audit-Like Behavior

The current repo already has several audit-adjacent mechanisms:

- `profile.integrationEvents` records provider/workflow evidence events.
- `addActivity(profile, message)` records user-visible activity summaries.
- `agentPendingAction` stores a currently staged action awaiting confirmation.
- Confirmed outbound calls create provider audit-style evidence in `integrationEvents`.
- Health, telehealth, trade, map, learning, workforce, and provider workflows often add integration evidence after local actions.
- Controlled-action metadata includes `auditPolicy: "observeOnly"` for low-risk preview/readiness objects.
- Public projection includes privacy-aware redaction for some health/provider records.
- Phone handling includes redacted phone display through `redactPhoneNumber(...)`.
- Native call handoff requires confirmed metadata before Android or iOS receives a launch payload.

These mechanisms are useful, but they are not yet a unified agent audit log. They mix user activity, integration evidence, workflow status, provider readiness, and local demo records. Phase 10E defines the future dedicated audit model without changing those runtime behaviors.

### What Should Not Change Yet

Do not change:

- Standard User demo flow;
- low-risk preview behavior;
- controlled-action preview/confirmation/navigation behavior;
- call confirmation gate;
- provider handoff boundaries;
- native bridge safety contract;
- telehealth/video/camera routes;
- marketplace/payment behavior;
- health/emergency behavior;
- account/identity behavior;
- map/location permission behavior;
- music controls;
- learning routing;
- `integrationEvents` semantics;
- `agentPendingAction` semantics.

Do not add:

- provider execution;
- automatic provider opening;
- new runtime audit writes;
- new database migration;
- new visible audit panel;
- full contact lists in logs;
- raw health/payment/location/identity data in logs.

## 2. Audit Logging Principles

1. Audit logging must not itself trigger execution.
2. High-risk actions must be auditable before execution.
3. Audit entries must be created for staged, confirmed, cancelled, failed, blocked, provider-opened, provider-fallback, and unsupported actions.
4. Low-risk preview events may be sampled or summarized, but must not expose hidden metadata in visible user logs.
5. Logs must support debugging and accountability without exposing private user information.
6. Logs must store only the minimum necessary data for the event.
7. Phone numbers must be redacted unless a provider adapter requires a server-only normalized value.
8. Health details, identity details, payment details, emergency contacts, marketplace parties, and precise location must be minimized or summarized.
9. Audit logs must distinguish "shown", "staged", "confirmed", "opened", "sent", "failed", and "cancelled".
10. Rendering a preview, confirmation, or handoff card must not produce an "executed" event.
11. Cancelled actions are cancelled, not failed and not executed.
12. Provider handoff means the provider UI or link was made available/opened, not that the provider completed the real-world action.
13. Audit logs must be role-aware in projection and export.
14. Production retention should be explicit and shorter for sensitive details.

## 3. Event Categories

Recommended event types:

- `intent-detected`
- `risk-classified`
- `preview-shown`
- `action-staged`
- `needs-input`
- `needs-choice`
- `confirmation-shown`
- `confirmation-accepted`
- `confirmation-rejected`
- `action-cancelled`
- `provider-opened`
- `provider-fallback-shown`
- `provider-failed`
- `provider-unsupported`
- `execution-blocked`
- `credential-missing`
- `permission-denied`
- `expired-pending-action`

Additional useful event types:

- `provider-link-rendered`
- `provider-link-clicked`
- `native-bridge-dispatched`
- `native-bridge-rejected`
- `message-draft-created`
- `message-send-confirmed`
- `workflow-record-created`
- `workflow-record-redacted`
- `audit-export-created`

## 4. Risk-Tier Logging Model

### Tier 1: Low-Risk Navigation And Education

Examples:

- show training options;
- explain irrigation;
- show farm jobs;
- browse AgriTrade guidance;
- show agriculture help.

Logging expectation:

- log only summarized preview/readiness events when useful;
- preserve `riskTier: "low"` or `riskTier: "info"`;
- do not store hidden raw metadata in user-facing logs;
- do not log full prompt if it contains sensitive personal details;
- do not create execution events.

Example:

```js
{
  eventType: "preview-shown",
  riskTier: "low",
  actionType: "workforce.training",
  resultStatus: "preview-only",
  redactedPayload: {
    summary: "Training options preview shown."
  }
}
```

### Tier 2: Medium-Risk Workflow Staging

Examples:

- job application packet preparation;
- marketplace buyer/seller message draft;
- SMS/email draft;
- appointment preparation;
- workflow record review before save.

Logging expectation:

- log `action-staged`;
- log missing inputs or draft creation;
- log `confirmation-shown`;
- log `action-cancelled` or `confirmation-accepted`;
- do not log raw message content in broad admin views;
- use draft id or redacted summary instead of full payload where possible.

### Tier 3: High-Risk Execution Or Provider Handoff

Examples:

- outbound call;
- WhatsApp/Telegram/native phone handoff;
- SMS/email send;
- payment attempt;
- marketplace buy/sell;
- health-sensitive action;
- camera/location permission;
- telehealth video handoff;
- emergency support;
- identity/account action.

Logging expectation:

- audit required before execution;
- log `intent-detected`, `risk-classified`, and `action-staged`;
- log `confirmation-shown`;
- log `confirmation-accepted` or `confirmation-rejected`;
- log `provider-opened`, `provider-fallback-shown`, `provider-failed`, or `provider-unsupported`;
- log `execution-blocked` for disallowed or unsafe actions;
- redact all sensitive details by default;
- restrict export and admin visibility.

## 5. Data Minimization And Redaction

### Phone Numbers

Rules:

- user-facing and admin summary logs should use redacted numbers, such as `+155*****0101`;
- provider adapters may receive normalized numbers only after confirmation and only server-side where required;
- native bridge payloads may include a sanitized `tel:` URL only after confirmation;
- raw phone numbers should not be stored in broad audit summaries.

### Email Addresses

Rules:

- redact local part where possible, such as `m***@example.com`;
- store full recipient only in provider-send records if required and access-controlled;
- do not log message bodies in generic audit streams.

### Names

Rules:

- names may be display summaries when necessary for user context;
- duplicate contact choices should avoid unnecessary private details;
- emergency contact names should be minimized.

### Health-Related Context

Rules:

- do not store symptom narratives in broad logs;
- store health action type and redacted encounter/patient reference;
- keep diagnosis/procedure/medication details out of generic audit streams;
- keep role-aware public projections redacted.

### Location

Rules:

- avoid precise coordinates in generic audit logs;
- use city, region, route label, or coarse area;
- store precise location only in permission-gated feature records where necessary;
- mark location permission denied separately from feature failure.

### Payment / Account Information

Rules:

- never store card, wallet secret, bank, token, or identity verification values in agent logs;
- log only blocked/future-only/payment-prepared status unless payment execution is separately approved;
- record provider status without sensitive payment payload.

### Emergency Contacts

Rules:

- never auto-contact or dispatch;
- log emergency support warnings as guidance, not dispatch;
- minimize contact names and numbers;
- preserve "no dispatch occurred" status.

### Marketplace Buyer / Seller Info

Rules:

- use role and redacted contact summary;
- avoid raw buyer/seller phone/email in generic logs;
- do not log payment terms as executed unless a confirmed payment provider flow exists;
- distinguish buyer message draft from message sent.

## 6. Future Audit Event Schema

```js
{
  auditId: "audit_123",
  eventType: "action-staged",
  actionId: "pending_comm_123",
  intentId: "intent_123",
  userId: "user_123",
  sessionId: "session_123",
  role: "user",
  sourceSurface: "ask-nexus",
  riskTier: "high",
  actionType: "communication.call",
  targetSummary: {
    targetType: "person",
    displayName: "Maria",
    redactedIdentifier: "+155*****0101"
  },
  provider: {
    providerId: "whatsapp",
    providerLabel: "WhatsApp",
    providerMode: "handoff"
  },
  confirmationState: {
    required: true,
    shown: true,
    accepted: false,
    rejected: false,
    cancelled: false,
    allowedConfirmations: ["yes", "confirm", "do it"],
    blockedConfirmations: ["okay", "sure"]
  },
  permissionState: {
    requiredPermissions: [],
    grantedPermissions: [],
    deniedPermissions: []
  },
  resultStatus: "needs-confirmation",
  redactedPayload: {
    summary: "WhatsApp handoff staged for a saved contact.",
    dataShared: ["redacted phone number", "provider id"],
    consequence: "Provider handoff may be shown after confirmation."
  },
  createdAt: "2026-06-24T00:00:00.000Z",
  expiresAt: "2026-06-24T00:10:00.000Z",
  retentionClass: "high-risk-communication"
}
```

### Required Fields

- `auditId`
- `eventType`
- `actionId`
- `intentId`
- `userId` or `sessionId`
- `role`
- `sourceSurface`
- `riskTier`
- `actionType`
- `targetSummary`
- `provider` when relevant
- `confirmationState`
- `permissionState`
- `resultStatus`
- `redactedPayload`
- `createdAt`
- `expiresAt` or `retentionClass`

### Event State Rules

- `confirmation-accepted` must reference an existing staged action.
- `provider-opened` must reference an accepted confirmation.
- `provider-failed` must not imply execution.
- `action-cancelled` must not be converted into `provider-failed`.
- `execution-blocked` must include the safety reason.
- `credential-missing` must not expose missing secret values beyond configuration names.

## 7. Storage Model

### Local-Safe Development Logging

Recommended:

- keep future local audit events in a bounded `profile.agentAuditEvents` or dedicated local-safe store;
- cap the list size;
- redact before persistence;
- avoid logging full prompt text for sensitive prompts;
- preserve compatibility with existing `integrationEvents` and `activity` without replacing them.

### `db.json` / Local Demo Mode

Recommended:

- store only redacted event summaries;
- mark local/demo provenance;
- keep retention capped;
- keep high-risk events visible only to roles that already can see related workflow context;
- never persist secrets or full provider credentials.

### Production Database Table

Recommended table concept:

```text
agent_audit_events
- id
- tenant_id
- user_id
- session_id
- role
- event_type
- risk_tier
- action_type
- target_summary_json
- provider_json
- confirmation_state_json
- permission_state_json
- result_status
- redacted_payload_json
- retention_class
- created_at
- expires_at
```

Sensitive fields should be encrypted or omitted where possible. Access should be role- and tenant-scoped.

### Privacy-Safe Retention

Recommended retention classes:

- `low-risk-preview`: short, optional, aggregate-friendly;
- `medium-risk-workflow`: moderate retention for support/debug;
- `high-risk-communication`: longer retention, strict access;
- `health-sensitive`: strict access, shortest necessary retention;
- `payment-or-identity`: strict retention rules and compliance review;
- `emergency-support`: strict review and redaction.

### Audit Export

Future admin/debug export should:

- export redacted summaries by default;
- require admin role and explicit export confirmation;
- include export audit event;
- exclude secrets, full payment data, full health details, and precise location unless separately authorized.

### User-Facing Activity History

User-facing history should be a projection, not raw audit:

- show what Nexus did or did not do;
- show cancelled/blocked status clearly;
- hide internal classifier metadata;
- redact contact and provider details;
- avoid health, identity, payment, and precise location detail.

## 8. UI Relationship

### Preview Cards

Preview cards may emit `preview-shown` in future phases, but only as preview-only events. They must not emit execution, provider, permission, or confirmation-accepted events.

### Staging Cards

Staging cards should emit `action-staged`, `needs-input`, or `needs-choice`. They should not emit provider-opened or execution events.

### Confirmation Modals

Confirmation modals should emit:

- `confirmation-shown`;
- `confirmation-accepted`;
- `confirmation-rejected`;
- `action-cancelled`;
- `expired-pending-action`.

They must include target, consequence, and data-shared summaries in their audit references.

### Provider Handoff Cards

Provider handoff cards should emit:

- `provider-link-rendered`;
- `provider-opened` only after a user click or native bridge accepted dispatch;
- `provider-fallback-shown`;
- `provider-failed`;
- `provider-unsupported`.

Rendering a handoff card is not itself a provider-opened event.

### Cancellation

Cancellation should emit `action-cancelled` with a clear no-action-taken status. It should not be treated as a provider failure.

### Error / Fallback Notices

Fallback notices should emit:

- `provider-fallback-shown`;
- `provider-unsupported`;
- `credential-missing`;
- `permission-denied`;
- `execution-blocked`.

### Future User Activity History

Activity history should be built from redacted audit projections, not raw audit events.

## 9. Provider / Action Examples

### Call Maria On WhatsApp

```text
intent-detected
-> risk-classified: high
-> action-staged: WhatsApp handoff, redacted phone
-> confirmation-shown
-> confirmation-accepted
-> provider-link-rendered
-> provider-opened or provider-fallback-shown
```

Notes:

- WhatsApp direct voice-call limitation remains visible.
- No message is sent.
- No provider opens from the first utterance.

### Call John With Duplicate Contacts

```text
intent-detected
-> risk-classified: high
-> needs-choice
```

Notes:

- no guessed contact;
- no pending executable provider action;
- choices use minimal labels.

### Call My Doctor With Missing Number

```text
intent-detected
-> risk-classified: high
-> needs-input
```

Notes:

- asks for phone number with country code;
- logs missing number state;
- no provider opens.

### Open Phone Dialer After Confirmation

```text
action-staged
-> confirmation-shown
-> confirmation-accepted
-> provider-link-rendered
-> native-bridge-dispatched
-> provider-opened or provider-failed
```

Notes:

- Android uses `ACTION_DIAL`;
- iOS validates `tel:`;
- user still presses the final call button in the phone app.

### Send SMS Draft

```text
intent-detected
-> risk-classified: high
-> message-draft-created
-> confirmation-shown for recipient and content
-> confirmation-accepted
-> provider-opened or provider-failed
```

Notes:

- no first-turn send;
- message content should be summarized or separately protected.

### Email Draft

```text
intent-detected
-> risk-classified: high
-> message-draft-created
-> confirmation-shown
-> confirmation-accepted
-> provider-opened or provider-failed
```

Notes:

- recipient and content confirmation are separate where practical;
- generic audit stores redacted recipient and summary only.

### Marketplace Buyer Message

```text
intent-detected
-> risk-classified: medium or high
-> message-draft-created
-> confirmation-shown
-> action-cancelled or confirmation-accepted
```

Notes:

- no buy/sell/payment execution;
- buyer/seller details are minimized.

### Payment Blocked

```text
intent-detected
-> risk-classified: high
-> execution-blocked
```

Notes:

- no payment provider opens;
- no charge, transfer, checkout, or payout.

### Camera / Location Permission Blocked

```text
intent-detected
-> risk-classified: high
-> permission-denied or execution-blocked
```

Notes:

- no permission prompt from preview;
- precise location is not stored in generic logs.

### Telehealth Video Handoff

```text
intent-detected
-> risk-classified: high
-> preview-shown or action-staged
-> confirmation-shown where record creation is involved
-> provider-fallback-shown or local-handoff-demo record
```

Notes:

- no real telehealth room;
- no WebRTC provider execution;
- no medical diagnosis;
- local camera preview remains handoff-only demo.

## 10. QA Strategy

### Recommended Future QA Scripts

- `scripts/nexus-audit-log-architecture-qa.js`
- `scripts/nexus-audit-redaction-contract-qa.js`
- `scripts/nexus-high-risk-audit-required-qa.js`
- `scripts/nexus-provider-audit-event-qa.js`
- `scripts/nexus-cancelled-action-audit-qa.js`

### Required Expectations

- High-risk actions require audit before execution.
- Provider handoff requires an audit event.
- Blocked execution creates a blocked/fallback audit event.
- Logs use redacted phone numbers.
- Logs do not store full payment details.
- Logs do not store full health details.
- Logs do not store identity secrets.
- Logs do not store precise location data in generic audit streams.
- Audit logging does not trigger execution.
- Cancelled actions are logged as cancelled, not failed or executed.
- Provider-opened means a provider UI/handoff was opened, not that the real-world action completed.
- Rendering preview or confirmation UI does not produce execution events.

### Existing QA To Keep Running

- `node scripts/nexus-contact-call-permission-qa.js`
- `node scripts/nexus-contact-resolution-qa.js`
- `node scripts/nexus-provider-handoff-boundary-qa.js`
- `node scripts/nexus-confirmation-ui-contract-qa.js`
- `node scripts/confirmed-call-handoff-qa.js`
- `node scripts/native-call-bridge-dispatch-qa.js`
- `node scripts/companion-confirmation-gate-smoke.js`
- `node scripts/qa-suite.js all-safe`

## 11. Recommended Future Phases

### Phase 10E1: Static Audit Architecture QA

Create `scripts/nexus-audit-log-architecture-qa.js` to verify this document exists and protects event types, schema fields, redaction rules, storage model, and no-execution boundaries.

### Phase 10E2: Redaction Contract QA

Create `scripts/nexus-audit-redaction-contract-qa.js` to guard phone, email, health, identity, payment, location, emergency, and marketplace redaction expectations.

### Phase 10E3: High-Risk Audit Required QA

Add QA proving high-risk categories cannot advance to provider execution without an audit-required contract.

### Phase 10E4: Provider Audit Event QA

Add QA for provider-link-rendered, provider-opened, provider-fallback, provider-failed, and provider-unsupported state transitions.

### Phase 10E5: Runtime Audit Prototype

Only after static QA and redaction contracts are complete, add a local-safe runtime prototype that records redacted audit entries for non-executing preview/staging flows.

## Final Position

Nexus already produces useful activity and integration evidence, but future controlled execution needs a dedicated agent audit model. That model should be redacted, role-aware, lifecycle-based, and explicit about what happened versus what did not happen. Audit logging should make Nexus safer and more accountable; it must never become a hidden execution path.
