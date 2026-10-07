# Signed-out routes

Every `api()` route that answers a caller **with no session**. Found by extracting all 645 method/path pairs from `api()` and requesting each one with no cookie against a fresh copy of the app (`401`/`403`/`404`/`405` answers are excluded, so this is the list that responded). "Saves?" and the caps were measured by repeating each writing route 400 to 700 times and watching which stored lists grew; the cap column says what stops the growth. Routes under `/api/nexus/runtime/` are in `PREROUTER_AUDIT.md`. Twilio and payment/Stripe webhooks (`/api/voice/phone/*`, `/api/trade/payment-callback/*` POST, `*webhook*`) answer `403` without a valid provider signature and are not listed.

## What was wrong and is fixed in this change

1. **A caller with no session was shown other people's records.** `POST /api/nexus/operations/action` and `/command` return the whole application state, and for a caller with no session the per-person filters were skipped (`moneyRecordsForViewer` and `healthRecordsForViewer` both returned the whole profile when there was no user). Reproduced: after a signed-in person saved a health intake and set a reminder, one signed-out request returned the patient's name and needs, the reminder, the activity line and the notification. Now a caller with no session sees only records that carry no personal owner mark, no "latest AI" line, and no reminders or spoken sessions.
2. **The testing store could be filled without limit by anyone, and a GET did it.** `GET /api/nexus/user-testing/e2e-harness` added 24 records, 26 audit lines and more per call (about 22 KB each, 15 MB after 700 calls, and the whole shared record is rewritten on every save); being a GET it was not counted by the anonymous-change ceiling. `predict` and `consent` were also unlimited. Every change under `/api/nexus/user-testing/` and the list of testers' notes now need a sign-in, and each list in the store keeps only its newest entries (2000 notes, 1000 of everything else). `memory`, `execute` and `verify` also answered `500` with no session; they now answer `401`.
3. **`POST /api/nexus/internet-services/search` ran a real paid web search with no session**, unlike its siblings `/api/nexus/knowledge/query` and `/api/nexus/live-knowledge/query`, which require one. Now `401`, and the same agent budget as them.

*Tests: `signed-out-routes-privacy`.*

## Notes

1. **Own limits.** Sign-in counts failed attempts only (10 per address per 5 minutes, 6 per account per 15); password reset 20 per address per 10 minutes and 5 emails an hour per address typed; a new guest account costs 20 a minute and 120 an hour per address, and at most 5000 exist (#936, #940).
2. **Where a signed-out call is saved.** All of these save into the one shared application record (`db.profile` and a few top-level lists), the same record every signed-in person's data lives in. Every list listed in the table is capped (the cap is in the table); a save rewrites the whole record, so the cap matters for speed as well as size. Measured with empty bodies: a body with real content can only make a record larger, not add more of them.
3. **`/api/nexus/operations/action|command`.** These are the pre-login "chronic care and operations" calls. Records they create belong to an anonymous identity derived from the browser's device id, so two strangers do not see each other's. They remain open because the pre-login screens use them; whether a visitor with no session should be able to start these at all is a product decision (listed as a recommendation, not changed).
4. **Rate limits on every row** are the blanket 180 per minute per address and path, plus, for a POST/PUT/PATCH/DELETE that is not a sign-in, voice, callback or webhook route, 120 a minute per address across all anonymous changes (#940). A GET is never counted by the second one, which is why a GET that writes is called out in the table.

## Routes that answer with no session

### Closed by this change

| Method | Path | Saves? | Cap / what is saved | Rate limit | Recommendation |
|---|---|---|---|---|---|
| GET | `/api/nexus/user-testing/memory` | no | was unlimited: the testing store (now limited too: 2000 notes, 1000 of the rest) | blanket 180/min per address and path | Now 401 |
| POST | `/api/nexus/user-testing/memory` | no | was unlimited: the testing store (now limited too: 2000 notes, 1000 of the rest) | blanket 180/min + anonymous-write 120/min per address | Now 401 (was a 500) |
| POST | `/api/nexus/user-testing/predict` | yes | was unlimited: the testing store (now limited too: 2000 notes, 1000 of the rest) | blanket 180/min + anonymous-write 120/min per address | Now 401 |
| POST | `/api/nexus/user-testing/execute` | no | was unlimited: the testing store (now limited too: 2000 notes, 1000 of the rest) | blanket 180/min + anonymous-write 120/min per address | Now 401 (was a 500) |
| POST | `/api/nexus/user-testing/consent` | yes | was unlimited: the testing store (now limited too: 2000 notes, 1000 of the rest) | blanket 180/min + anonymous-write 120/min per address | Now 401 |
| POST | `/api/nexus/user-testing/verify` | no | was unlimited: the testing store (now limited too: 2000 notes, 1000 of the rest) | blanket 180/min + anonymous-write 120/min per address | Now 401 (was a 500) |
| GET | `/api/nexus/user-testing/e2e-harness` | yes | was unlimited: the testing store (now limited too: 2000 notes, 1000 of the rest) | blanket 180/min per address and path | Now 401 |
| POST | `/api/nexus/internet-services/search` | no | ran a real paid web search when a key is set | blanket 180/min + anonymous-write 120/min per address | Now 401 |

### Sign-in, session and provider callbacks

| Method | Path | Saves? | Cap / what is saved | Rate limit | Recommendation |
|---|---|---|---|---|---|
| GET | `/api/music/spotify/callback` | no | n/a | blanket 180/min per address and path | Leave public |
| POST | `/api/auth/guest-session` | no | n/a | own limits (see note 1) | Leave public |
| POST | `/api/login` | no | n/a | own limits (see note 1) | Leave public |
| POST | `/api/logout` | no | n/a | own limits (see note 1) | Leave public |
| POST | `/api/auth/password-reset` | no | n/a | own limits (see note 1) | Leave public |
| POST | `/api/auth/password-reset/confirm` | no | n/a | own limits (see note 1) | Leave public |
| GET | `/api/trade/payment-callback/paystack` | no | n/a | blanket 180/min per address and path | Leave public |
| GET | `/api/trade/payment-callback/flutterwave` | no | n/a | blanket 180/min per address and path | Leave public |

### Message and call preparation (nothing is sent)

| Method | Path | Saves? | Cap / what is saved | Rate limit | Recommendation |
|---|---|---|---|---|---|
| GET | `/api/telephony/status` | no | n/a | blanket 180/min per address and path | Leave public |
| POST | `/api/telephony/prepare-call` | no | n/a | blanket 180/min + anonymous-write 120/min per address | Leave (prepares only, nothing stored or sent) |
| POST | `/api/telephony/outbound-call` | no | n/a | blanket 180/min + anonymous-write 120/min per address | Leave public |
| POST | `/api/telephony/inbound-webhook` | no | n/a | blanket 180/min + anonymous-write 120/min per address | Leave public |
| GET | `/api/communication/status` | no | n/a | blanket 180/min per address and path | Leave public |
| POST | `/api/communication/prepare-message` | no | n/a | blanket 180/min + anonymous-write 120/min per address | Leave public |
| GET | `/api/message-preparation/status` | no | n/a | blanket 180/min per address and path | Leave public |
| POST | `/api/message-preparation/prepare` | no | n/a | blanket 180/min + anonymous-write 120/min per address | Leave public |
| POST | `/api/message-preparation/attempt-send` | no | n/a | blanket 180/min + anonymous-write 120/min per address | Leave public |

### Shared pilot/operations stores (can write)

| Method | Path | Saves? | Cap / what is saved | Rate limit | Recommendation |
|---|---|---|---|---|---|
| GET | `/api/integrations` | no | n/a | blanket 180/min per address and path | Leave public |
| POST | `/api/nexus/demo-data/load` | no | n/a | blanket 180/min + anonymous-write 120/min per address | Require sign-in (admin) in production |
| POST | `/api/nexus/demo-data/reset` | no | n/a | blanket 180/min + anonymous-write 120/min per address | Require sign-in (admin) in production |
| GET | `/api/nexus/provider-readiness-report` | yes | audit log, newest 1000 kept | blanket 180/min per address and path | Make read-only; then leave |
| POST | `/api/nexus/provider/test-all` | yes | audit log, newest 1000 kept | blanket 180/min + anonymous-write 120/min per address | Require sign-in (admin) |
| POST | `/api/nexus/provider/activate` | yes | receipts 1000/500 + audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in (admin) |
| POST | `/api/nexus/provider/deactivate` | yes | receipts 1000/500 + audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in (admin) |
| GET | `/api/nexus/provider/test-receipts` | no | n/a | blanket 180/min per address and path | Leave public |
| GET | `/api/nexus/internet-services` | yes | audit log, newest 1000 kept | blanket 180/min per address and path | Make read-only; then leave |
| POST | `/api/nexus/internet-services/test` | yes | receipts 1000/500 + audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in |
| POST | `/api/nexus/internet-services/prepare` | yes | receipts 1000/500 + audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in |
| POST | `/api/nexus/operations/action` | yes | bounded: anonymous visitor keyed by device id | blanket 180/min + anonymous-write 120/min per address | Needs a decision: pre-login chronic-care continuity by device id (see note 3) |
| POST | `/api/nexus/operations/command` | yes | bounded: anonymous visitor keyed by device id | blanket 180/min + anonymous-write 120/min per address | Same as action |
| POST | `/api/nexus/provider/test` | yes | receipts 1000 + audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in (admin) |
| POST | `/api/nexus/live-execution/prepare` | yes | receipts 1000 + audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in |
| POST | `/api/nexus/live-execution/confirm` | yes | receipts 1000 + audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in |
| POST | `/api/nexus/live-execution/cancel` | yes | receipts 1000 + audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in |
| GET | `/api/nexus/deployment/profile` | no | n/a | blanket 180/min per address and path | Leave public |
| GET | `/api/nexus/health` | no | n/a | blanket 180/min per address and path | Leave public |
| POST | `/api/nexus/provider-pathways/request` | yes | requests 200 + pilot audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in |
| GET | `/api/field-agents` | no | n/a | blanket 180/min per address and path | Needs a decision: names of field agents (demo data) |
| GET | `/api/nexus/integrations` | no | n/a | blanket 180/min per address and path | Leave public |
| GET | `/api/nexus/launch-blockers` | no | 200 kept | blanket 180/min per address and path | Trim: blocker titles anyone can add |
| POST | `/api/nexus/launch-blockers` | yes | 200 kept | blanket 180/min + anonymous-write 120/min per address | Require sign-in (admin); anyone can add an item that the readiness pages then show |
| POST | `/api/nexus/profile/language` | yes | pilot audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in (shared profile) |
| POST | `/api/nexus/knowledge/classify` | yes | pilot audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in (one audit line per call) |
| POST | `/api/nexus/knowledge/save-result` | yes | saved results 200 + records 200 + pilot audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in (saves into the shared list) |
| GET | `/api/nexus/admin/operations` | no | n/a | blanket 180/min per address and path | Require sign-in (admin): shows operations/auth mode details |
| POST | `/api/nexus/privacy/export-request` | yes | requests 1000 + pilot audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in (a request with no person attached means nothing) |
| POST | `/api/nexus/privacy/delete-request` | yes | requests 1000 + pilot audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in (same) |
| GET | `/api/nexus/account` | no | n/a | blanket 180/min per address and path | Require sign-in: shows the shared pilot profile |
| GET | `/api/nexus/profile` | no | n/a | blanket 180/min per address and path | Require sign-in: shows the shared pilot profile |
| POST | `/api/nexus/profile` | yes | overwrites the ONE shared pilot profile + pilot audit 1000 | blanket 180/min + anonymous-write 120/min per address | Require sign-in: it edits the one profile every visitor is shown |
| GET | `/api/nexus/production/voice-diagnostics` | no | n/a | blanket 180/min per address and path | Leave public |
| POST | `/api/voice/elevenlabs/authorization-probe` | no | n/a | blanket + voice limits | Answers 410 Gone: remove the route |
| POST | `/api/voice/elevenlabs/session` | no | n/a | blanket + voice limits | Answers 410 Gone: remove the route |
| POST | `/api/voice/runtime/tool` | no | n/a | blanket + voice limits | Answers 410 Gone: remove the route |
| POST | `/api/voice/elevenlabs/tool` | no | n/a | blanket + voice limits | Answers 410 Gone: remove the route |
| POST | `/api/voice/realtime/session` | no | n/a | blanket + voice limits | Leave: guest sessions are limited per address (#940); needs OpenAI configuration |

### Rule engines and catalogues (compute only) (88 routes)

These take a body, compute an answer from fixed rule tables and return it. Nothing is saved (measured: the shared record did not change over 700 calls each), nothing external is called, and no other person's data is read. Rate limit: blanket 180/min per address and path, and 120/min per address across anonymous changes. Recommendation: leave public (they are the pre-login demo of the engines); they could be put behind sign-in at no cost to a signed-in user.

```
GET /api/nexus-os/deployments/agrinexus
GET /api/nexus-os/deployments/healthnexus-reference
POST /api/nexus-os/deployments/healthnexus-reference/resolve
GET /api/nexus-os/safety/health-workforce
POST /api/nexus-os/safety/health-workforce/evaluate
POST /api/nexus/global-agriculture/intelligence
POST /api/nexus/global-training-workforce/engine
POST /api/nexus/global-chronic-care-health/engine
POST /api/nexus/global-provider-access/bridge
POST /api/nexus/global-communications/engine
POST /api/nexus/global-marketplace-logistics/engine
GET /api/nexus/chronic-predictive/status
POST /api/nexus/chronic-predictive/evaluate
POST /api/nexus/chronic-predictive/summary
GET /api/nexus/chronic-predictive/scenarios
POST /api/nexus/chronic-predictive/scenarios
GET /api/nexus/chronic-predictive/checklist
POST /api/nexus/chronic-predictive/checklist
GET /api/nexus/agriculture-predictive/status
POST /api/nexus/agriculture-predictive/evaluate
POST /api/nexus/agriculture-predictive/summary
GET /api/nexus/agriculture-predictive/scenarios
POST /api/nexus/agriculture-predictive/scenarios
GET /api/nexus/agriculture-predictive/checklist
POST /api/nexus/agriculture-predictive/checklist
GET /api/nexus/marketplace-predictive/status
GET /api/nexus/mental-health/status
POST /api/nexus/mental-health/classify
POST /api/nexus/mental-health/support
POST /api/nexus/mental-health/screening/governance
POST /api/nexus/mental-health/escalation
POST /api/nexus/mental-health/safety-plan
GET /api/nexus/health-evidence/status
GET /api/nexus/health-evidence/sources
GET /api/nexus/health-evidence/registries
POST /api/nexus/health-evidence/inspect
POST /api/nexus/health-evidence/source/verify
POST /api/nexus/health-evidence/predictive-governance
POST /api/nexus/health-evidence/human-review
POST /api/nexus/health-evidence/medication-pharmacy
POST /api/nexus/health-evidence/laboratory-diagnostic
POST /api/nexus/health-evidence/consent-rights
POST /api/nexus/health-evidence/fhir-terminology
POST /api/nexus/health-evidence/youth-vulnerable-safeguards
POST /api/nexus/health-evidence/accessibility-localization
POST /api/nexus/health-evidence/communications-follow-up
POST /api/nexus/health-evidence/monitoring
POST /api/nexus/health-evidence/regulatory-assessment
POST /api/nexus/health-evidence/security-privacy-adversarial
POST /api/nexus/health-evidence/capability-status
GET /api/nexus/workforce-genesis/status
GET /api/nexus/workforce-genesis/registries
POST /api/nexus/workforce-genesis/evaluate
POST /api/nexus/workforce-genesis/capability-status
POST /api/nexus/workforce-genesis/source-verification
GET /api/nexus/africa-ag-opportunity/status
GET /api/nexus/africa-ag-opportunity/registries
POST /api/nexus/africa-ag-opportunity/evaluate
POST /api/nexus/africa-ag-opportunity/capability-status
POST /api/nexus/africa-ag-opportunity/governance
POST /api/nexus/africa-ag-opportunity/trust-registry
POST /api/nexus/africa-ag-opportunity/program-impact
POST /api/nexus/africa-ag-opportunity/completion-classification
GET /api/nexus/provider-abstraction/status
GET /api/nexus/provider-abstraction/providers
GET /api/nexus/provider-abstraction/capabilities
POST /api/nexus/provider-abstraction/select
POST /api/nexus/provider-abstraction/policy
POST /api/nexus/provider-abstraction/execute
POST /api/nexus/provider-abstraction/receipt
POST /api/nexus/provider-abstraction/capability-status
GET /api/nexus/provider-abstraction/sdk
GET /api/nexus/provider-orchestration/status
GET /api/nexus/provider-orchestration/console
GET /api/nexus/provider-orchestration/configuration-controls
GET /api/nexus/provider-orchestration/capability-matrix
GET /api/nexus/provider-orchestration/security-privacy-review
GET /api/nexus/provider-orchestration/end-to-end-readiness
POST /api/nexus/provider-orchestration/capability-report
POST /api/nexus/provider-orchestration/readiness
POST /api/nexus/provider-orchestration/queue
POST /api/nexus/provider-orchestration/execute-dry-run
POST /api/nexus/provider-orchestration/cancel
POST /api/nexus/provider-orchestration/disable-provider
POST /api/nexus/provider-orchestration/rollback-provider
POST /api/nexus/provider-orchestration/verify-outcome
POST /api/nexus/provider-orchestration/data-transfer-receipt
GET /api/nexus/provider-orchestration/sdk
```

### Status and catalogue pages (read-only) (77 routes)

These return fixed catalogues or a snapshot of which providers are configured (names only, never values). Nothing is saved and no person's data is returned. Rate limit: blanket 180/min per address and path. Recommendation: leave public, except that the pages naming which providers are configured (`/api/integrations`, `/api/readiness`, `/api/nexus/*/status`, `/api/nexus/production/voice-diagnostics`) tell a stranger what is and is not connected; trim them if that matters. The pages that echo shared pilot data are in the table above.

```
GET /api/healthz
GET /api/release
GET /api/version
GET /api/health
GET /api/readiness
GET /api/nexus/tools/status
GET /api/nexus/user-testing/status
GET /api/nexus/user-testing/providers
GET /api/nexus/user-testing/roles
GET /api/nexus/user-testing/security
GET /api/nexus/user-testing/readiness
GET /api/nexus/demo-providers/catalog
GET /api/nexus/demo-data/status
GET /api/nexus/demo-data/summary
GET /api/nexus/provider-readiness
GET /api/nexus/internet-integration-audit
GET /api/nexus/internet-integration-audit/summary
GET /api/nexus/internet-integration-audit/modes
GET /api/nexus/internet-integration-audit/gaps
GET /api/nexus/operations/status
GET /api/nexus/live-execution-status
GET /api/nexus/production/status
GET /api/nexus/readiness
GET /api/nexus/production-readiness
GET /api/nexus/storage/status
GET /api/nexus/integrations/status
GET /api/nexus/integrations/x1/status
GET /api/nexus/analytics/summary
GET /api/nexus/launch-readiness
GET /api/nexus/legal-safety-pages
GET /api/nexus/languages/status
GET /api/nexus/upload/readiness
GET /api/nexus/marketplace/payment-gates
GET /api/nexus/emergency/high-risk-gates
GET /api/nexus/ai-answer-governance
GET /api/nexus/endgame/status
GET /api/nexus/knowledge/status
GET /api/nexus/live-knowledge/status
GET /api/nexus/openai-native/status
GET /api/nexus/email/status
GET /api/nexus/communications/status
GET /api/nexus/telehealth/status
GET /api/nexus/pharmacy/status
GET /api/nexus/mobile-clinic/status
GET /api/nexus/knowledge/trusted-sources
GET /api/nexus/knowledge/source-policy
GET /api/nexus/knowledge/readiness
GET /api/nexus/institutional-evidence/status
POST /api/nexus/knowledge/prepare-review-summary
GET /api/nexus/privacy/summary
GET /api/nexus/pilot-status
GET /api/nexus/persistent-memory/status
GET /api/nexus/tools/maps/status
GET /api/nexus/tools/communications/status
GET /api/nexus/tools/providers/status
GET /api/nexus/tools/learning/status
GET /api/nexus/tools/lms/bridge/status
GET /api/nexus/tools/zoom/status
GET /api/nexus/tools/sessions/status
GET /api/nexus/tools/drones/status
GET /api/nexus/tools/drones/bridge/status
GET /api/nexus/tools/marketplace/status
GET /api/nexus/tools/payments/status
GET /api/nexus/tools/offline/status
GET /api/nexus/tools/offline/bridge/status
GET /api/nexus/tools/workflows/status
GET /api/nexus/tools/reminders/status
GET /api/engines/manifest
GET /api/native/voice-runtime
GET /api/native/voice-architecture
GET /api/production/complete-check
GET /api/production/operations-plan
GET /api/production/activation-guide
GET /api/voice/elevenlabs/status
GET /api/voice/runtime/status
GET /api/config
GET /api/voice/realtime/status
```


## Recommendations in one place (decisions for the owner; nothing below was changed)

* **Require a sign-in** for the writers marked so in the tables above (profile, launch blockers, privacy requests, provider activate/deactivate/test, live-execution prepare/confirm/cancel, internet-services test/prepare, knowledge save/classify/review, provider-pathways request, demo-data load/reset). Today a stranger can edit the one pilot profile every visitor sees, add launch blockers that the readiness pages then display, and file "delete my data" requests that belong to nobody.
* **Make the GETs that write read-only** (`provider-readiness`, `provider-readiness-report`, `internet-services`): they add an audit line per call and are not counted by the anonymous-change ceiling.
* **Trim what the readiness pages show** to a stranger (`/api/nexus/health|readiness|production-readiness|launch-readiness|launch-blockers|endgame/status` include launch-blocker titles that anyone can add).
* **Remove the dead `410 Gone` voice routes** (`/api/voice/elevenlabs/*`, `/api/voice/runtime/tool`).
* **Shared "latest AI" line.** `profile.aiActivity` is one shared line of text about the last thing anyone did (for health actions it contains the need summary). It is now hidden from a caller with no session, but every *signed-in* person still sees the last person's line. It is outside this audit's scope (and next to the personal-records work in #923) and was not changed.
* **Reminders and spoken sessions** are not owner-marked on `main`, so a signed-in person can still see another's; #923 adds the marks. Until it merges, the signed-out view hides them wholesale (see fix 1).
