# Nexus RT7 - Source Trust, Citation Quality, and Freshness Policy

RT7 adds a deterministic source trust, citation quality, and freshness policy for live-source retrieval. The policy is applied by the inert unified live source orchestrator and remains unavailable to Standard User runtime unless a future gated preview activation imports it.

## Policy Requirements

- source type classification
- retrievedAt required
- freshness window per provider/domain
- citation required where provider supports it
- confidence rules
- stale result warning
- missing citation warning
- source trust tier
- provider error handling
- safe user-facing summary when confidence is low

## Freshness Examples

- weather: very recent, measured in minutes
- news/security/conflict: freshness and credibility are critical
- job search: freshness matters, but no application execution is allowed
- agriculture context: source quality and safety notes matter
- shipment tracking: explicit tracking/reference text is required
- music/media: source attribution required where applicable

## Safety Boundary

The policy cannot execute actions, contact providers, request location, use browser geolocation, write backend state, create pending actions, navigate, call, message, buy, pay, schedule, dispatch, or activate medical/pharmacy behavior.
