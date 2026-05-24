# Health Completion Status

The health phase is complete at the foundation level and production-ready for provider credentials.

## Completed

- Health database schema.
- Patient intake repository.
- Health service workflows.
- Health routes.
- Permission enforcement.
- Patient intake creation.
- Representative escalation.
- Safety review.
- Map inspector.
- Care-plan generation.
- AI run persistence contract.
- Audit events.
- Sandbox telehealth adapter.
- Sandbox notification adapter.
- Sandbox EHR adapter.
- Sandbox health AI adapter.
- Webhook production adapter.
- Provider-mode environment configuration.
- Care and safety policy rules.
- File-backed care policy configuration.
- FHIR-style intake, encounter, observation, service request, and care-plan payload mapping.
- Provider payloads for EHR/webhook integrations.
- Route smoke coverage.
- Provider config smoke coverage.
- Care policy smoke coverage.
- FHIR/provider payload smoke coverage.

## Production Routes

- `GET /health/intakes`
- `POST /health/intakes`
- `POST /health/intakes/:id/escalate`
- `POST /health/safety-review`
- `POST /health/map-inspector`
- `POST /health/care-plan`

## Provider Environment Variables

```text
HEALTH_TELEHEALTH_PROVIDER=sandbox|webhook
HEALTH_NOTIFICATION_PROVIDER=sandbox|webhook
HEALTH_EHR_PROVIDER=sandbox|webhook
HEALTH_AI_PROVIDER=sandbox|webhook
HEALTH_TELEHEALTH_WEBHOOK_URL=
HEALTH_NOTIFICATION_WEBHOOK_URL=
HEALTH_EHR_WEBHOOK_URL=
HEALTH_AI_WEBHOOK_URL=
HEALTH_PROVIDER_API_KEY=
```

## Care Policy

The policy layer currently defines:

- escalation risk levels
- heat escalation threshold
- queue statuses that should trigger escalation
- minimum safety-review data quality
- required care-plan inputs

File:

```text
foundation/config/health-policy.json
foundation/src/modules/health/care-policy.js
```

## Provider Payload Mapping

Health intakes and care plans are mapped into provider-ready payloads with a FHIR-style bundle containing patient, encounter, risk observation, service request, and care-plan resources.

File:

```text
foundation/src/modules/health/fhir-mapper.js
```

Smoke coverage:

```text
npm run foundation:health-policy-smoke
npm run foundation:health-fhir-smoke
```

## Remaining Real-World Blockers

These require user/provider setup:

- Real telehealth provider account or webhook.
- Real SMS/email/voice notification provider account or webhook.
- Real EHR/FHIR provider account or webhook.
- Final clinical/operational care-plan policies approved by the operator.
- Compliance review for health data handling.

The code path is now ready for those provider credentials.
