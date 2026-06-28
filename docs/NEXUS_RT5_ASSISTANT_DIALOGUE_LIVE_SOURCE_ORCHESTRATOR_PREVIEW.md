# Nexus RT5 - Assistant Dialogue Live Source Orchestrator Preview

RT5 connects the unified RT3 live source orchestrator to an assistant dialogue preview adapter. The adapter is preview-only, read-only, and default-off behind `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED`.

This phase does not load the adapter in Standard User runtime and does not replace the existing assistant router. It creates a safe contract for future controlled preview cards.

## Preserved Metadata

- requestId
- selected provider
- provider status
- blocked reason
- risk tier
- citations
- confidence
- safety posture
- audit event
- user-facing summary
- safe follow-up options

## Allowed Follow-Ups

- Ask a follow-up question
- Compare sources
- Explain this result
- Show related agriculture guidance
- Show workforce learning options
- Refine search terms
- Review source details

## Blocked Follow-Ups

The preview adapter must not surface follow-ups such as Call provider, Message provider, Apply now, Buy now, Book appointment, Send location, Dispatch help, Submit form, Pay, or Create account.

## Safety Boundary

RT5 does not execute provider handoff, network retrieval beyond existing provider harness behavior, auto-navigation, backend writes, browser geolocation, location permission, camera, microphone, calls, messages, payments, purchases, scheduling, emergency dispatch, marketplace transactions, medical/pharmacy actions, or account creation.
