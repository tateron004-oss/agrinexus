# API Contract Draft

This is the target contract for replacing the prototype API.

## Auth

- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/session/refresh`
- `GET /auth/me`
- `GET /auth/users`
- `GET /auth/roles`
- `POST /auth/roles/assign`

## Core

- `GET /countries`
- `GET /countries/:id`
- `GET /countries/:id/metrics`
- `GET /facilities?countryId=...`
- `GET /profile/unified`
- `GET /audit-events`

## Learning

- `GET /learning/courses`
- `POST /learning/enrollments`
- `POST /learning/quizzes/complete`
- `POST /learning/certificates`
- `GET /learning/profile`

## Workforce

- `GET /workforce/profile`
- `POST /workforce/profile/build`
- `GET /workforce/roles`
- `POST /workforce/applications`
- `POST /workforce/interviews`
- `POST /workforce/shifts`

## Health

- `GET /health/intakes`
- `POST /health/intakes`
- `POST /health/intakes/:id/escalate`
- `POST /health/safety-review`
- `POST /health/care-plan`

## Trade and Wallet

- `GET /trade/products`
- `POST /trade/orders`
- `POST /trade/orders/:id/advance`
- `GET /wallet`
- `POST /wallet/transactions`

## AI

- `POST /ai/command-center`
- `POST /ai/price-guidance`
- `POST /ai/route-risk`
- `POST /ai/care-plan`
- `GET /ai/runs`

## Maps

- `GET /maps/layers/facilities`
- `GET /maps/layers/routes`
- `GET /maps/layers/risk`
- `GET /maps/geojson`

## System

- `GET /system/health`
- `GET /system/providers`
- `GET /system/modules`

## Admin

- `GET /admin/audit-events`
- `GET /admin/ai-runs`
