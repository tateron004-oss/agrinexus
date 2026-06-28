# Nexus RT10 Real Provider Adoption Runbook

RT10 defines how Nexus may adopt a real read-only source provider after the RT1 through RT9 gates. It does not activate any provider, Standard User visible feature, provider handoff, execution path, backend write, permission request, or live regulated workflow.

## Provider Adoption Sequence

1. Identify the provider lane: weather, agriculture context, news/security/conflict, job search, shipment tracking, or music/media.
2. Confirm the provider is read-only and does not require Nexus to call, message, submit, buy, pay, schedule, dispatch, diagnose, prescribe, share location, open camera, open microphone, or contact a provider.
3. Create or update provider capability metadata.
4. Define required environment flags and credential names.
5. Run missing-config QA and verify safe skipped behavior.
6. Run provider-error QA and verify normalized provider-error behavior.
7. Run one developer/QA-only live smoke test with explicit input when credentials are present.
8. Verify source result normalization.
9. Verify citation, freshness, confidence, trust tier, and caution wording.
10. Verify audit metadata and redaction.
11. Keep Standard User runtime disabled until a later explicit activation phase passes browser validation.

## Required Pre-Adoption Gates

- credential gate present
- provider capability registry entry present
- read-only source result contract satisfied
- unified live source orchestrator support present
- provider adoption harness scenario coverage present
- assistant dialogue preview remains default-off
- Standard User preview gate remains default-off
- source trust and freshness assessment present
- audit logging contract present
- browser validation plan present

## Environment and Secret Handling

Credentials must come from environment variables only. Secrets must never be committed, printed, placed in docs, copied into fixtures, exposed to browser code, or returned in audit events. Missing credentials must produce safe skipped/missing-config behavior.

## Provider-Lane Notes

Weather may use an explicit text location such as `Stockton, CA`, but must not use browser geolocation or infer/store user location.

Agriculture context may return source-backed guidance, but must not claim chemical certainty, diagnose crops from images, buy inputs, start marketplace actions, contact experts, or dispatch field agents.

News/security/conflict may return awareness-only summaries, but must not provide tactical harm guidance, political persuasion, panic-inducing claims, or emergency dispatch.

Job search may return read-only listings or preparation guidance, but must not submit applications, log into accounts, upload resumes, message employers, or book interviews.

Shipment tracking may use explicit tracking/reference text only, but must not log into accounts, expose private addresses, change delivery, route drivers, dispatch carriers, or contact providers.

Music/media may return read-only information and local-safe demo handling only, but must not stream paid media, open external services, purchase media, or control user accounts.

## Standard User Boundary

Provider adoption does not mean Standard User runtime activation. Standard User must remain unchanged until a later explicit phase enables a default-off, read-only, browser-validated path. No live provider lookup should appear in Standard User unless the required flags, citations, freshness, confidence, trust, audit, and browser validation gates are satisfied.

## Rollback and Failure Handling

If a provider returns an error, times out, produces unsafe data, lacks citations where required, has stale data, has low confidence, or violates the no-execution contract, Nexus must return a safe unavailable/provider-error state. It must not fall back into execution, provider handoff, external navigation, storage writes, permission prompts, or unsupported certainty claims.

## RT10 QA Expectations

RT10 QA verifies this runbook exists, enumerates provider adoption gates, keeps Standard User activation separate, requires environment-only secrets, preserves safe missing-config/provider-error handling, includes the RT4 provider lanes, and remains wired into local-safe QA.
