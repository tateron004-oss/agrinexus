# AI Completion Status

The AI phase is complete at the foundation level and production-ready for an OpenAI API key.

## Completed

- AI run repository.
- AI service workflows.
- AI routes.
- Permission enforcement.
- OpenAI Responses API provider wrapper.
- Offline AI fallback when `OPENAI_API_KEY` is not set.
- Command center workflow.
- Price guidance workflow.
- Route risk workflow.
- Care-plan workflow.
- AI run audit history.
- Audit events.
- Route smoke coverage.

## Production Routes

- `POST /ai/command-center`
- `POST /ai/price-guidance`
- `POST /ai/route-risk`
- `POST /ai/care-plan`
- `GET /ai/runs`

## Provider Environment Variables

```text
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.4-mini
```

## Files

```text
foundation/src/modules/ai/repository.js
foundation/src/modules/ai/integrations.js
foundation/src/modules/ai/service.js
foundation/src/modules/ai/routes.js
foundation/scripts/ai-routes-smoke.js
```

## Remaining Real-World Blockers

These require user/provider setup:

- Real `OPENAI_API_KEY`.
- Final model choice for cost, latency, and reasoning quality.
- Production prompt review for clinical, workforce, trade, and route-risk workflows.
- Usage monitoring and spend controls.

The code path is now ready for those provider credentials.
