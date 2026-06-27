# Nexus Sprint C41 - Source-Backed Agriculture Preview Flag-Off Regression Guard

## Purpose

Sprint C41 adds a deterministic flag-off regression guard for the controlled source-backed agriculture preview lane. It defines an inert default-false flag contract and proves that the Standard User runtime remains unchanged while the flag is off.

This sprint does not render source-backed agriculture preview cards, does not load the C41 flag contract into Standard User runtime, and does not activate visible behavior.

## Current Checkpoint

- Current HEAD: `6372c83c2c72f0b42290f410f8f30022c08f98d9`
- Previous sprint: Sprint C40 - Flag-Gated Source-Backed Agriculture Runtime Activation Plan
- C40 plan: `docs/NEXUS_SPRINT_C40_FLAG_GATED_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_PLAN.md`

## Flag Contract

The canonical flag is:

- `NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED`

The inert contract module is:

- `public/nexus-sprint-c41-source-backed-agriculture-preview-flag.js`

The resolver is:

- `resolveSourceBackedAgriculturePreviewFlag(input)`

The resolver defaults to disabled for missing, undefined, null, false, string, number, array, malformed object, and any value other than explicit boolean `true`.

## Default-Off Behavior

Default behavior must remain:

- `enabled: false`;
- `disabled: true`;
- `activationSource: default_false`;
- no visible preview;
- no runtime import;
- no Standard User UI change;
- no Evidence & Verification block;
- no source packet consumption by runtime UI;
- no event handlers, buttons, links, forms, fetch calls, storage writes, backend calls, pending actions, or navigation.

## Explicit True Behavior

The contract can report `enabled: true` only when passed an explicit in-memory/config object containing:

- `NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED: true`

This explicit true result is not wired to Standard User runtime in Sprint C41. It exists only so Sprint C42 can implement a controlled flag-on lane against a deterministic contract.

## Permanent No-Execution Fields

The resolver must always keep these fields false:

- `executionAllowed`
- `providerHandoffAllowed`
- `callsAllowed`
- `messagesAllowed`
- `paymentsAllowed`
- `marketplaceTransactionAllowed`
- `locationAllowed`
- `cameraAllowed`
- `medicalWorkflowAllowed`
- `pharmacyWorkflowAllowed`
- `emergencyWorkflowAllowed`
- `backendWriteAllowed`
- `pendingActionAllowed`
- `liveLookupAllowed`
- `networkAllowed`
- `storageWriteAllowed`
- `externalNavigationAllowed`

## Runtime Absence Requirements

Sprint C41 requires:

- `public/index.html` must not load `nexus-sprint-c41-source-backed-agriculture-preview-flag.js`;
- `public/app.js` must not import or reference `nexus-sprint-c41-source-backed-agriculture-preview-flag.js`;
- `server.js` must not special-case or inject `nexus-sprint-c41-source-backed-agriculture-preview-flag.js`;
- Standard User startup must not reference `NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED`;
- low-risk agriculture prompts must not produce a new visible source-backed preview while the flag is off;
- excluded/high-risk prompts must remain guarded by existing behavior.

## Sprint C41 QA Expectations

The C41 QA guard verifies:

- the C41 document exists;
- the C41 flag module exists;
- the flag name is canonical;
- the flag resolver defaults disabled;
- malformed values remain disabled;
- explicit boolean true is the only enablement input;
- permanent no-execution fields remain false;
- the module has no unsafe side-effect APIs;
- Standard User runtime files do not load or reference the C41 module or flag;
- package alias and safe-suite wiring are present.

## Browser Validation

No browser validation is required for Sprint C41 because no runtime-visible behavior changes. Browser validation becomes required in Sprint C42 if the flag-on implementation changes visible Standard User behavior.

## Sprint C42 Readiness Recommendation

Sprint C42 may implement the first controlled flag-on agriculture preview lane using this C41 flag contract. The implementation must keep flag-off behavior green, render only eligible low-risk source-backed agriculture previews when enabled, show Evidence & Verification, and remain review-only with no execution, provider handoff, live lookup, network calls, backend writes, storage side effects, or pending actions.

## Final C41 Conclusion

The source-backed agriculture preview flag is now defined as a default-disabled inert contract. Standard User runtime remains unchanged while the flag is off, and Sprint C42 has a deterministic contract for controlled flag-on implementation.
