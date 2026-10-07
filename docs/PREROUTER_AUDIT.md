# Pre-router audit

Audit of everything the server does to a request **before** `api()` (the main router in `server.js`) sees it, and of the two things that sit beside it (static files, the phone WebSocket). The rate-limit audit (#940) covered `api()` only.

Method: traced `http.createServer` in `server.js`, read every handler in `nexus/compat/server-runtime-adapter.js` (and the task, control, sync and business APIs it calls), and then attacked the live server with malformed requests, oversized bodies, and malformed WebSocket frames (see the tests named below).

## Request path, in order

| # | Layer | Where | Applies to |
|---|-------|-------|-----------|
| 0 | Request URL parse | `parseRequestUrl()` | every request (and the WebSocket upgrade) |
| 1 | Blanket rate limit, 180/min per address and path | `rateLimit(req)` | every request. The upgrade has its own 60/min |
| 2 | Business space chosen | `resolveRequestSpace()` | every request. Four routes read the body first (below) |
| 3 | Admin-change lock | `withSpaceChangeLock()` | `POST /api/(team\|admin\|platform)/...` |
| 4 | Authoritative runtime | `authoritativeNexusRuntime.handle()` | `/api/nexus/runtime/*` |
| 5 | Main router | `api()` | other `/api/*` |
| 5 | Export download | `serveExport()` | `/exports/*` |
| 5 | Static files | `serveStatic()` | everything else |
| - | Phone-call WebSocket | `server.on("upgrade")` | `GET /api/voice/phone/stream` (Upgrade) |

## Layer 2: which business a request belongs to

The space comes from the session cookie (`agrinexus_sid`) or the signed remember-me cookie (`agrinexus_auth`), both set by the server. Only four kinds of request have no session and name the business some other way, so they read the body first (limit 1 MB):

| Request | How the business is found | What still protects it |
|---------|---------------------------|------------------------|
| `POST /api/login`, `/api/auth/password-reset`, `/api/auth/password-reset/confirm` | the email in the body | the password or reset code |
| `POST /api/voice/phone/*` | the number dialled (`To`) or, for outbound, `From` | Twilio signature check in the route |
| `/api/trade/payment-callback/*` | the `ANPAY-n-n.<space>` reference | the provider check in the route |

A cookie for a business that no longer exists or is closed lands in the default space, where it matches nothing. A caller can *name* a business in these bodies, but that only decides which record the route then looks in; the route still has to authenticate. No cross-space read or write was found at this layer.

## Layer 4: the authoritative runtime (`/api/nexus/runtime/*`)

Everything below the first two groups needs a session (`401` otherwise, checked before the route is even matched, so a signed-out caller cannot tell which routes exist). The tenant of every query is the business's own tenant (`tenantIdFor(space)`), set from the session, never from the request.

**Open or token-protected (no session):**

| Route | Protection | Writes | Notes |
|-------|-----------|--------|-------|
| `GET status` | none | a throw-away temporary table, dropped at commit | Returns database name, Postgres version, which providers are configured and the release id. Used by CI and scripts. See decision D2 |
| `GET production-acceptance`, `POST production-acceptance/evidence`, `POST path2/*`, `GET path2/certification`, `POST production-acceptance/workspaces/:id`, `POST production-acceptance/probes/*` (17 routes) | `NEXUS_ACCEPTANCE_TOKEN` bearer, timing-safe compare, closed when the token is unset; exact release id required in the body | yes (evidence, probe records) | They act as the acceptance principal of *any* business. Blanket rate limit only |
| `POST business/webhooks/stripe` | Stripe signature, closed unless billing is enabled and the secret set | yes | Body limit 1 MB, signature verified before anything is read from it; the record is addressed by tenant + owner + record id from signed metadata |

**Signed in (checked per route):**

| Route(s) | Authorization | Notes |
|----------|---------------|-------|
| `behavior/turn`, `behavior/intake`, `behavior/confirm`, `behavior/acknowledgements`, `commands`, `tasks` (POST/GET), `tasks/:id`, `tasks/:id/execute`, `tasks/:id/transition`, `tasks/:id/steps/:s/(approve\|execute)`, `tasks/:id/progress` | task owner (or tenant `admin`) checked in the route or the engine; a foreign `conversationId` is ignored | A foreign `taskId` is `403`. A tenant admin may act on any task of *that business* |
| `behavior/conversation`, `behavior/readiness` | conversation owner or admin | |
| `documents` (list/get/delete) | owner-scoped in the query; a foreign id is reported as not found | local file names are matched against a fixed pattern |
| `artifacts` (POST) | **now**: needs `memory:write` (not a guest), size and label limits, own task only, per-person allowance | see fix 4 below |
| `artifacts/:id` | owner-scoped in the query | |
| `devices`, `devices/:id/(lifecycle\|push)`, `devices/:id` (DELETE) | `devices:write`, tenant + user scoped | |
| `schedules`, `notifications` | `reminders:write` / `notifications:write`, not granted to any role today, so always `403` | dormant |
| `privacy/deletions` | `privacy:delete`; deleting someone else needs `privacy:delete:any` | |
| `sync/push`, `sync/pull`, `sync/conflicts/:id` | `sync:write` / `sync:read` (not granted today; tenant `admin` passes) | queries owner-scoped; batch limit 100 |
| `observability`, `observability/summary`, `operations`, `audit/events`, `autonomy/pause` (GET) | `observability:read` or `admin` | tenant-wide for that business only |
| `autonomy/pause` (POST) | `admin` | |
| `business/*` (client workspace) | org permission `tasks:read` / `tasks:execute` + explicit consent, owner-scoped; checkout refused for restricted accounts | |
| `workspaces` (GET) | any signed-in user | workspace list only |
| `navigation`, `companion/emergency-location` | signed in; position never stored | |

Body size: the general reader refuses over 20 MB (see fix 1).

## Layer 5: static files and exports

* `/exports/<uuid>.<ext>`: needs a session **and** that session's user must be the recorded creator (`exportOwners` is per business). Names are matched against a fixed pattern. Fixed: an undecodable name was a `500`.
* Static files: only the `public/` folder, no listing, no dotfiles in it, nothing but code and images (`native-bridge.json` is a public contract file). Fixed: the folder test now includes the path separator and bad paths are `404`.

## Phone-call WebSocket

Authorization is a short-lived HMAC token in the first frame (bound to the user, the call and the business). Fixed: see 3.

## Defects fixed in this change (each has a regression test)

1. **A request line like `GET // HTTP/1.1`, or a `Host` header with a space in it, stopped the whole server** for everyone, with no sign-in. `new URL()` threw outside every handler, an unhandled rejection. Now `400` (or served, for a bad Host). Same for the WebSocket upgrade. *Test: `prerouter-hardening`.*
2. **A large request body was kept in memory while it arrived** (`readBody` and the pre-router body reader appended every chunk to one string and only rejected the promise after the limit; they never stopped). Anyone could send a sign-in with a body of hundreds of MB; past the engine's maximum string length the data handler threw, which also stops the server. Both readers now stop at the limit (and on a declared `Content-Length` over it), drop what they hold, and answer `413`; multi-byte characters split between network chunks are no longer corrupted; a connection that drops half way is an error instead of a request that never ends. New `server/requestBody.js`. *Tests: `request-body-limit`, `prerouter-hardening`.*
3. **Phone-call WebSocket, no sign-in needed:** a first frame that is valid JSON but not an object (`null`, `5`, `[]`) threw inside an async handler, an unhandled rejection that stopped the whole server (reproduced live). Also: messages up to the library default of 100 MiB were accepted before anything proved who was calling (now 256 KiB, `1009`), a socket that never sent its start frame stayed open for ever (now closed after 15 s, `PHONE_REALTIME_START_TIMEOUT_MS`), a second start frame could open a second paid connection (ignored), and any other failure in the handler is logged instead of escaping. *Test: `prerouter-hardening`.*
4. **`POST /api/nexus/runtime/artifacts` (store a file in the shared bucket)** had no permission check (a guest session, which anyone can start, could use it), no limit on the file (up to the 20 MB body) or its labels and metadata, no check that an attached `taskId` was the caller's, and no allowance per person. Now: `memory:write` required, 10 MB per file, labels cut, metadata at most 8 KB, own task only, 200 files and 500 MB per person (`NEXUS_ARTIFACT_*`). *Test: `runtime-artifact-upload-limits`.*
5. **Static path handling:** `/%zz` and `/%00` were `500`s (and logged as server errors); the folder check `startsWith(PUBLIC)` accepted a sibling folder whose name starts with `public` (`/..%2fpublic-old/x`), a latent file read. *Test: `prerouter-hardening`.*

## Decisions and recommendations left for the owner (nothing here was changed)

* **D1. Published demo accounts.** `ensureDefaultUsers()` creates an Admin, a Standard User and an Investor account with documented passwords in the default business on **every request**, and re-creates them if deleted. If production never changed those passwords, anyone who knows the documentation is the platform Admin. Please confirm the production passwords were changed, and consider an environment switch that stops the accounts being created in production.
* **D2. `GET /api/nexus/runtime/status` is open** and returns the database name, Postgres version, provider configuration and release id, and does a small write probe per call. CI and several scripts use it. Consider returning only `{ok}` to callers without the acceptance token.
* **D3. No per-address total.** The blanket limiter is per address *and path*, so one address can make 180 requests a minute to each of unlimited different paths (every `public/*.js` file counts as its own path). A per-address ceiling would need to allow for a clinic or office loading the 250 script files together; a number should be chosen with real usage in mind.
* **D4. AI cost on the runtime.** `behavior/turn`, `behavior/intake` and `commands` call the planner (paid model) and have only the blanket 180/min limit, unlike the `api()` agent routes (60/min per person after #940). A guest counts per address. Suggest the same `aiAgentRateLimit`.
* **D5. Tenant admin reach.** A business's `Admin` can read and confirm every task, conversation and audit event of that business (by design, per the code comments). The platform default business's `Admin` can do the same for the default business. Confirm that is the intended scope.
* **D6. Guests on the runtime.** A guest session (free, name only) may create tasks, run the planner and create business-client records (`business/clients`, no per-person count cap). Consider capping the number of client records per person.
* **D7. Security headers.** Static responses carry `nosniff`, a referrer policy and a permissions policy, but no `Content-Security-Policy`, `X-Frame-Options` (clickjacking) or HSTS. A policy needs a pass over the inline scripts, so it was not added here.
* **D8. Acceptance routes** act as the acceptance principal of any business and are protected only by one bearer token with the blanket limit. Fine while the token is long and secret; a failed-attempt limiter would be cheap to add.

See also `docs/SIGNED_OUT_ROUTES.md` for every route in `api()` that answers a caller with no session.
