# Nexus Sprint LIVE3 - Mock/Fixture Source Provider Harness

## Purpose

LIVE3 adds a deterministic fixture-only harness for the LIVE2 source result contract. It proves Nexus can validate source-backed answer packets for weather, news/security, shipment tracking, agriculture context, music/media readiness, job search, job application preparation, stale/conflicting/error states, and source-unavailable fallback responses.

This phase does not add live provider calls, runtime wiring, backend writes, browser storage, Standard User UI changes, or real-world execution.

## Files

- `fixtures/nexus/live-source-results.json`
- `scripts/nexus-sprint-live3-mock-source-provider-harness.js`
- `scripts/nexus-sprint-live3-mock-source-provider-harness-qa.js`

## Fixture Cases

The fixture set includes:

1. Nairobi weather result
2. Kinshasa weather result
3. eastern DRC conflict/security result
4. Sudan current events result
5. shipment in transit result
6. shipment delivered result
7. shipment provider not configured
8. agriculture weather/market context result
9. R&B music provider not connected
10. stale source result
11. conflicting source result
12. provider rate limited
13. provider error
14. unsupported request type
15. Kenya farm job result
16. Ghana solar/electrical technician job result
17. stale job posting
18. unverified employer job posting
19. job application preparation blocked from submission
20. general question answered from source-unavailable fallback

## Harness Rules

The harness must:

- read only fixture data
- validate the LIVE2 source result shape
- validate `readOnly: true`
- validate `noExecutionRequired: true`
- validate `executionAuthority: false`
- validate timestamps, freshness, confidence, evidence, limitations, and source status
- validate provider unavailable, provider error, stale, conflicting, unsupported, and rate-limited states
- validate job source result fields when request type is job-related
- validate `applicationActionAllowed: false`
- validate `applicationSubmissionAuthority: false`
- produce deterministic console output

## Safety Boundary

LIVE3 does not mutate files, use network calls, write `db.json`, write browser storage, touch DOM APIs, open provider links, trigger geolocation, activate camera, send calls/messages, process payments, book appointments, submit job applications, contact employers, upload resumes, dispatch emergency help, or create pending real-world actions.

## LIVE4 Readiness

LIVE4 can use this fixture posture to build a deterministic assistant dialogue engine contract. The dialogue engine must remain side-effect-free and must not execute assistant requests.
