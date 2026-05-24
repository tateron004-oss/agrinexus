# Workforce Completion Status

The workforce phase is complete at the foundation level.

## Completed

- Database schema for workforce roles, candidate profiles, and job applications.
- Workforce repository.
- Workforce service.
- Workforce routes.
- Permission enforcement.
- Readiness-gated applications.
- Profile build workflow.
- Interview scheduling workflow.
- Mentor assignment workflow.
- Shift scheduling workflow.
- Earnings estimate workflow.
- Audit events.
- Calendar adapter contract.
- Notification adapter contract.
- HRIS adapter contract.
- Shift scheduler adapter contract.
- Sandbox adapters for all provider categories.
- Webhook production adapter.
- Provider-mode environment configuration.
- Shift policy with readiness gate, route capacity, timezone, and shift windows.
- Route smoke coverage.

## Production Routes

- `GET /workforce/profile`
- `GET /workforce/roles`
- `POST /workforce/profile/build`
- `POST /workforce/interviews`
- `POST /workforce/shifts`
- `POST /workforce/mentors`
- `POST /workforce/earnings-estimate`
- `POST /workforce/applications`

## Frontend Integration Contract

The visible UI should call these endpoints once the foundation router is mounted in the app server:

| UI action | Endpoint |
| --- | --- |
| Load workforce tab | `GET /workforce/profile`, `GET /workforce/roles` |
| Build profile | `POST /workforce/profile/build` |
| Schedule interview | `POST /workforce/interviews` |
| Assign mentor | `POST /workforce/mentors` |
| Start/schedule shift | `POST /workforce/shifts` |
| Estimate earnings | `POST /workforce/earnings-estimate` |
| Apply to role | `POST /workforce/applications` |

## Sandbox Integrations

The current foundation uses sandbox adapters:

- `sandbox-calendar`
- `sandbox-notifications`
- `sandbox-hris`
- `sandbox-shift-scheduler`

These prove the workflow shape without requiring provider credentials.

## Remaining Real-World Blockers

These cannot be honestly completed without user/provider setup:

- `DATABASE_URL` for a real PostgreSQL database.
- `pg` package installed in the app runtime.
- Calendar provider credentials, such as Google Calendar or Outlook Calendar, or a webhook URL.
- Notification provider credentials, such as Twilio, SendGrid, Slack, Teams, email SMTP, or a webhook URL.
- HRIS provider credentials, such as Workday, BambooHR, Greenhouse, Lever, custom HR system, or a webhook URL.
- Final operator-approved shift rules: regions, time zones, capacity, labor rules, and assignment policies.

Once those are provided, the sandbox adapters can be replaced with provider adapters without changing the workforce route contract.

## Environment Variables

```text
WORKFORCE_CALENDAR_PROVIDER=sandbox|webhook|google-calendar|outlook-calendar
WORKFORCE_NOTIFICATION_PROVIDER=sandbox|webhook
WORKFORCE_HRIS_PROVIDER=sandbox|webhook
WORKFORCE_SHIFT_PROVIDER=sandbox|webhook
WORKFORCE_CALENDAR_WEBHOOK_URL=
WORKFORCE_NOTIFICATION_WEBHOOK_URL=
WORKFORCE_HRIS_WEBHOOK_URL=
WORKFORCE_SHIFT_WEBHOOK_URL=
WORKFORCE_PROVIDER_API_KEY=
```
