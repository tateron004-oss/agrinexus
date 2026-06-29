# N100-18 Source Trust and Citation Assistant

N100-18 adds an inert server-side source trust and citation contract. It helps Nexus prepare review-only provenance, freshness, citation, and confidence notes without fetching live data, mutating sources, publishing claims, certifying truth, overriding stale data, removing citations, or writing backend data.

## Supported Artifacts

- source trust summary
- citation review checklist
- freshness notice
- confidence explanation
- conflicting sources questions
- unsupported claim boundary

## Safety Boundary

Every artifact keeps:

- `canExecute: false`
- `executionAuthority: "none"`
- `noLiveFetchAuthorized: true`
- `noSourceMutationAuthorized: true`
- `noTruthCertificationAuthorized: true`
- `noUnsupportedClaimAuthorized: true`
- `noStaleDataOverrideAuthorized: true`
- `citationsRequiredForClaims: true`
- `noProviderHandoffAuthorized: true`
- `noBackendWritePerformed: true`
- `noStorageWritePerformed: true`

## Runtime Status

This module is not loaded by `public/app.js`, `public/index.html`, or `server.js`. It does not change Standard User runtime behavior and does not add visible UI.

## QA

`scripts/nexus-n100-18-source-trust-citation-assistant-qa.js` verifies supported source trust artifact types, blocked source-trust execution prompts, static runtime absence, no unsafe network/source mutation/backend APIs, package alias wiring, and local-safe suite inclusion.
