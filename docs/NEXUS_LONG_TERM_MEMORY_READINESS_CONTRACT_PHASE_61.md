# Nexus Long-Term Memory Readiness Contract

Phase: 61 - Long-term memory
Status: inert readiness contract and deterministic QA only
Related roadmap row: `| Phase 61 | Long-term memory | Add consented durable memory | memory store | future | high | memory backend | consent/reset/audit | memory QA | memory non-authoritative |`

## Scope Decision

Phase 61 does not add a durable memory backend, persistent user profile memory, cross-session memory store, memory sync, memory export, memory import, account memory, provider memory, health memory, payment memory, location memory, or marketplace memory execution behavior.

This phase creates the readiness contract that must be satisfied before Nexus may support future consented durable long-term memory.

This phase does not activate:

- durable memory storage
- memory backend APIs
- cross-device memory sync
- account-linked memory
- provider-shared memory
- health or medical memory storage
- payment or account memory storage
- precise location memory storage
- contact memory storage
- marketplace buyer or seller memory storage
- automatic personalization from memory
- action authorization from memory
- Standard User runtime durable memory behavior
- storage or network side effects
- backend behavior changes

Existing session and local context features remain governed by their previous non-authoritative safety posture. Phase 61 adds no new authority to those features.

## Contract Artifact

The inert contract lives in:

- `public/nexus-long-term-memory-readiness-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

## Default Readiness Posture

The default contract keeps durable long-term memory disabled:

- `phase: "61"`
- `riskTier: "high"`
- `readinessStatus: "blocked"`
- `durableMemoryEnabled: false`
- `memoryBackendEnabled: false`
- `crossSessionMemoryEnabled: false`
- `accountLinkedMemoryEnabled: false`
- `providerSharedMemoryEnabled: false`
- `sensitiveMemoryEnabled: false`
- `automaticPersonalizationEnabled: false`
- `memoryCanAuthorizeActions: false`
- `memoryCanUnlockPermissions: false`
- `standardUserDurableMemoryAllowed: false`
- `executionAllowed: false`
- `liveActionEnabled: false`

Nexus may use approved session context for convenience, but memory must never become proof of consent, permission, identity, provider authorization, or execution approval.

## Required Preconditions Before Durable Memory

Before any future durable memory can be enabled, Nexus must verify and visibly present:

- `explicitMemoryConsent`
- `visibleMemoryPurpose`
- `visibleMemoryCategories`
- `sensitiveCategoryExclusions`
- `retentionPolicy`
- `expiryPolicy`
- `redactionPolicy`
- `resetControl`
- `deleteControl`
- `exportControlWhenApplicable`
- `auditEvent`
- `permissionState`
- `consentRevocationPath`
- `nonAuthoritativeMemoryRule`
- `noActionAuthorizationFromMemory`
- `noPermissionUnlockFromMemory`
- `noSilentSensitiveStorage`
- `noHiddenCrossDeviceSync`
- `noProviderSharingWithoutApproval`

## Non-Authority Boundary

Long-term memory may eventually help Nexus remember preferences or safe context. It must not authorize calls, messages, payments, prescriptions, medical record access, provider contact, location sharing, camera or microphone use, marketplace transactions, emergency dispatch, identity verification, or account changes.

## Restricted Domain Rules

Additional restrictions apply to:

- `identity`
- `healthcare`
- `medical_records`
- `pharmacy`
- `payments`
- `location`
- `communications`
- `provider_contact`
- `marketplace_transactions`
- `emergency`
- `minors_family_support`

## Standard User Expectations

The Standard User build may explain memory readiness requirements, but it must not:

- create durable memory;
- sync memory across devices;
- store sensitive health, location, contact, payment, account, or marketplace details;
- share memory with providers;
- use memory as consent;
- use memory as identity proof;
- use memory to unlock permissions;
- use memory to execute or approve actions;
- hide reset, delete, or revocation controls;
- bypass audit logging.

## Safe Future Copy

Approved posture:

- "Long-term memory requires your explicit consent, clear categories, reset controls, and audit logging."
- "Memory can help with context, but it cannot authorize actions or unlock permissions."
- "No durable memory has been created by this contract."

Avoid:

- "I remembered this forever."
- "I can use memory as your consent."
- "Because I remember you, I can complete that action."
- "I shared your memory with the provider."
- "I saved your health or payment details."

## QA Expectations

Phase 61 QA must verify:

- this readiness contract is present;
- durable memory, backend APIs, sync, sensitive memory, provider sharing, automatic personalization, and memory authority remain disabled by default;
- consent, purpose, categories, exclusions, retention, expiry, redaction, reset/delete/export, revocation, non-authority, and audit requirements are enumerated;
- restricted domains are documented;
- Standard User durable memory remains blocked;
- no app, server, route, memory backend, storage, network, provider, permission, or execution hook was added.

Phase 61 itself remains a readiness boundary only.
