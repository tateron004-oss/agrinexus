# Nexus Live Knowledge Provider Configuration

Nexus can answer with current internet-backed information when live knowledge retrieval is explicitly enabled and a supported provider is configured. If retrieval is disabled or missing configuration, Nexus must keep using built-in guidance, show no fake citations, and explain that live source-backed retrieval is not configured.

## Supported providers

Set `NEXUS_LIVE_KNOWLEDGE_PROVIDER` to one of:

| Provider value | Required environment variables | Notes |
| --- | --- | --- |
| `tavily` | `TAVILY_API_KEY` | Uses Tavily web search and returns URL-backed citations. |
| `brave` | `BRAVE_SEARCH_API_KEY` | Uses Brave Search API and returns URL-backed citations. |
| `exa` | `EXA_API_KEY` | Uses Exa search and returns URL-backed citations. |
| `openai-web-search` | `OPENAI_WEB_SEARCH_ENABLED=true`, `OPENAI_API_KEY` | Uses OpenAI web search. Nexus still requires citable URL results before showing source-backed citations. |
| `provider-endpoint` | `NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT` | Calls a configured internal/partner endpoint that must return `results`, `items`, or `sources` with URLs. |

The legacy `WEB_SEARCH_PROVIDER` value is still accepted as a fallback provider selector, but new deployments should prefer `NEXUS_LIVE_KNOWLEDGE_PROVIDER`.

## Local `.env` setup

Do not commit `.env` or real keys. For a local Tavily setup:

```env
NEXUS_LIVE_KNOWLEDGE_ENABLED=true
NEXUS_LIVE_KNOWLEDGE_PROVIDER=tavily
TAVILY_API_KEY=replace-with-local-key
NEXUS_LIVE_KNOWLEDGE_MAX_RESULTS=5
NEXUS_LIVE_KNOWLEDGE_TIMEOUT_MS=9000
NEXUS_LIVE_KNOWLEDGE_SAFE_MODE=true
```

Use only one provider key for the first test. Keep `NEXUS_LIVE_KNOWLEDGE_SAFE_MODE=true` unless a later reviewed phase changes the retrieval policy.

## Hosting setup

In Render or another host, add the same environment variables through the host secret/environment settings. Never paste API keys into tracked files, frontend code, browser storage, docs, screenshots, or QA logs.

After setting host variables:

1. Restart or redeploy the service.
2. Open `/api/nexus/knowledge/status`.
3. Confirm `enabled: true`, `configured: true`, `testability: "ready"`, and the expected provider name.
4. Open `/api/nexus/knowledge/readiness`.
5. Confirm missing configuration lists only variable names and never secret values.

## Safety contract

- Disabled retrieval must remain useful and citation-free.
- Missing provider credentials must show an honest `missing_config` state.
- Retrieved answers may show citations only from returned source URLs.
- Nexus must not fabricate source names, URLs, freshness, providers, or citations.
- Live retrieval does not authorize provider contact, payment, pharmacy action, location sharing, emergency dispatch, calls, messages, or marketplace execution.
