# Nexus Global Live Knowledge Layer

## Purpose

Nexus Global Live Knowledge is the production shared research layer for the whole AgriNexus/Nexus platform. It lets Nexus research, summarize, cite, educate, and prepare decision support across global modes while keeping regulated or real-world final actions behind review, confirmation, credential, consent, and audit gates.

This layer is not demo-only and is not a readiness placeholder. It is the runtime research surface used by Standard User mode panels, Ask Nexus, and the Activation Center resource lane.

## Supported Providers

Provider priority:

1. Tavily using `TAVILY_API_KEY`
2. Brave Search using `BRAVE_SEARCH_API_KEY`
3. Exa using `EXA_API_KEY`
4. Generic fallback using `NEXUS_LIVE_KNOWLEDGE_API_KEY`

Selector:

- `NEXUS_LIVE_KNOWLEDGE_PROVIDER=auto`
- `NEXUS_LIVE_KNOWLEDGE_PROVIDER=tavily`
- `NEXUS_LIVE_KNOWLEDGE_PROVIDER=brave`
- `NEXUS_LIVE_KNOWLEDGE_PROVIDER=exa`

The default is `auto`.

## API Surface

`GET /api/nexus/live-knowledge/status`

Returns enabled/configured state, selected provider, active provider, missing environment variable names, supported providers, safe domains, citation capability, testability, and timestamp. Secret values are never returned.

`POST /api/nexus/live-knowledge/query`

Accepts `query`, `domain`, `mode`, `locale`, `maxResults`, and optional `safetyContext`.

Returns status, provider, domain, mode, query, summary, citations, source list, safety notes, recommended next steps, review requirement, downstream confirmation requirement, and timestamp.

## Packet Type

`live_knowledge_research_packet`

Each packet includes:

- query
- domain
- mode
- provider
- cited summary
- citations
- source list
- safety class
- safety notes
- recommended next action
- review requirement
- downstream confirmation requirement
- timestamp

## Global Mode Coverage

Live Knowledge is connected to:

- Agriculture
- Crop support
- Farm planning
- Field visits
- Logistics/resource planning
- Maps/route/resource guidance
- Training and literacy
- Workforce development
- Employer partner support
- Chronic disease education
- Diabetes support
- Hypertension support
- Obesity support
- RPM support
- RTM support
- Community Health Worker support
- Telehealth preparation
- Pharmacy education
- Mobile clinic/resource access
- Marketplace/vendor research
- Communications preparation
- General Ask Nexus research

## Runtime Entry Points

Live Knowledge is exposed through:

- Ask Nexus routing when research intent is detected
- Standard User Live Knowledge rail
- Mode panel “Ask with sources” controls
- Activation Center resource assistant lane
- `NEXUS_AGENT_RUNTIME.liveKnowledgeStatus`
- `NEXUS_AGENT_RUNTIME.liveKnowledgeQuery`
- `NEXUS_AGENT_RUNTIME.buildLiveKnowledgePacket`

Granular workflows still route before broad knowledge routing. Diabetes, hypertension, obesity, RPM, RTM, and Community Health Worker commands remain workflow-specific first; Live Knowledge can support those workflows with cited education after the route is selected.

## Safety Boundaries

Live Knowledge can research and prepare. It does not execute high-risk actions.

Health boundaries:

- No diagnosis
- No prescribing
- No medication changes
- Licensed review is required for clinical decisions
- Emergency warning symptoms should direct users to urgent or emergency care

Communications boundaries:

- No message sending without confirmation
- No calls without confirmation
- Email, SMS, WhatsApp, phone, and Telegram research can prepare context only until the communications lane confirms provider credentials and final approval

Marketplace and vendor boundaries:

- No purchases
- No payment processing
- No vendor contact without confirmation

Telehealth and pharmacy boundaries:

- No telehealth launch without credentials and confirmation
- No pharmacy refill submission
- No medication request, refill request, or provider submission without the required provider rules and confirmation

Location and logistics boundaries:

- No location sharing without confirmation
- No dispatch or transport booking from research results

## Credential-Blocked and Provider-Error Behavior

When provider credentials are missing, Nexus returns credential-blocked or disabled status with missing environment variable names only. It does not fabricate citations.

When a configured provider fails, Nexus returns provider-error status and a safe summary that explains the provider failed without fabricating source-backed claims.

## Browser Validation Summary

The Standard User dashboard shows the Live Knowledge rail, selected provider, supported providers, missing credentials, citation capability, safe domains, and answer cards. Representative research prompts across agriculture, chronic disease, workforce, marketplace, telehealth, pharmacy, logistics, and communications produce visible research cards and keep all final actions gated.

## QA Coverage

Primary guards:

- `scripts/nexus-live-knowledge-all-modes-qa.js`
- `scripts/nexus-global-live-knowledge-qa.js`

The QA verifies provider priority, environment names, selector values, endpoints, no-secret output, credential-blocked state, provider-error state, citation/source fields, packet type, UI presence, Activation Center presence, mode coverage, health education boundaries, marketplace no-purchase behavior, communications no-send behavior, telehealth no-launch behavior, and pharmacy no-refill behavior.

