# Real-runtime verification

Every earlier check of the everyday repairs (bookkeeping, planner-saved health readings, the reminder delivery store, contacts, lists, notes, memory, repeating reminders) used in-memory fakes or a server with its JSON state file. Neither can run the authoritative runtime (`nexus/runtime/create-runtime.js`), which needs PostgreSQL and a model. This page records the first run of the whole app against a **real PostgreSQL parser and real tables**, with the authoritative runtime and planner active, and what it found.

Run on commit `bc3298f2` (main at the time) plus the fixes in this change. Nobody was involved, nothing touched production, no OpenAI key or Twilio account was used, and no demo account was used (two dedicated ordinary test accounts per run, made the way `test/nexus/production-user-audit.test.js` makes them).

## How to run it again

```
cd scripts/dev/real-runtime
npm install        # PGlite only; not part of the product, not installed by the root package
node run.mjs       # boots everything, runs everything, prints a summary, stops everything (a few minutes)
```

`run.mjs` runs, in order: `verify.mjs` (38 journeys, each ending in a look at the stored rows), `safety.mjs` (the audit's 22 safety phrases on three routes), `audit.mjs` (`node scripts/production-user-audit.js --base http://127.0.0.1:<port> --mode full --layers ABC --with-staging`), and `probes.mjs` (the production-acceptance probes plus the identity part of `scripts/nexus-preproduction-black-box.js`, started with `RR_COMMIT` set the way the deploy workflow sets `RENDER_GIT_COMMIT`). Output goes to `RR_OUT` (default: a folder under the system temp directory): `app.log`, `stub.log`, `verify-result.json`, `safety-result.json`, `audit/`.

What `harness.mjs` sets up:

| Piece | How |
|---|---|
| PostgreSQL | PGlite 0.5.8 (a real PostgreSQL build, in memory) behind a TCP socket. All 23 repository migrations apply unchanged, **including the vector extension** (`@electric-sql/pglite-pgvector`), so nothing had to be stubbed or skipped. |
| The server | The real `server.js`: `AGRINEXUS_STATE_STORE=postgres`, `DATABASE_URL` pointing at the socket, `DATABASE_SSL=false`, `NEXUS_DISABLE_LOCAL_ENV_FILES=true`, rate limits raised. The authoritative runtime is active and the planner is built. |
| Tool catalog | `NEXUS_TOOL_PROVIDERS_JSON` = `canonicalToolProviders(...)` from `scripts/nexus-render-release-controller.js`, exactly what the deploy workflow's "Install production-equivalent provider contract" step installs. Without it the planner has no tools at all. |
| Workspace cut-over | One `authoritative` row per registered workspace in `nexus_workspace_migrations` (in production the activation pipeline writes these). Without them every tool step answers 503 "has not passed authoritative cutover". |
| The model | `OPENAI_API_KEY` is set to a dummy value and `stub-openai.cjs` (a Node `--require` preload, so `server.js` and `nexus/` are untouched, no production code path was added) answers every request to `api.openai.com` locally. See "The stand-in model". |
| Acceptance | `NEXUS_ACCEPTANCE_TOKEN=candidate-only-token`, like the CI candidate. |

## What was found and fixed

Seven real problems. Each has a regression test that needs no database or internet.

| # | What a person would have seen | Root cause | Fix | Test |
|---|---|---|---|---|
| 1 | **Account 2 could read account 1's last spoken sentence** in its own `/api/state` (`agentMemory.activeGuidedMission.goal`, `lastAutonomousBrainAppliedTo.command`, ...). The audit's C34 ("a reminder is not visible to account 2") FAILed. | The older agent keeps one "what we are in the middle of" context in the shared profile and clears the previous speaker's context when someone else talks (`switchAgentContextTo`). The route that asks the AI model first (`runNexusOpenAiNativeAgentCommand`, the first thing `/api/agent/command` and the phone line do whenever a model is configured) recorded the new speaker as "the last to speak" without clearing it, so the second person was shown the first person's context as their own. Invisible without a configured model. | `switchAgentContextTo(db, user)` at the top of that function. | `test/nexus/native-agent-context-switch.test.js` |
| 2 | **"Delete my last reading" then "yes" answered "I could not finish that, because your saved readings could not be updated just now" and deleted nothing**, for every reading saved by the planner (and every other stored record). | `RecordRepository.remove` wrote `jsonb_build_object('deletedBy', $3)` with the parameter untyped. PostgreSQL cannot infer the type of a parameter that is only handed to a function taking `"any"` (error 42P18). The fake databases never parse SQL, and the caller swallowed the error. | `$3::text`. | `test/nexus/record-repository-typed-parameters.test.js` (also scans `nexus/` and `foundation/` for the same shape) |
| 3 | **Shopping lists, notes, bookkeeping ("sold 3 sacks of maize 4500", "John owes me 800", chama, stock, summary), contacts and the farm log did not work through the voice tool `nexus_general_conversation`** (the door the production audit uses, and the browser's fallback): "Got it. I couldn't do that one just now, and nothing was saved", or "I couldn't save that one just now, and no money moved". The audit reported them SKIP only because a local server has no planner; on the live site the same answers are a FAIL. | The planner bridge added in #855 (`deterministicVoiceAnswer`) sits in `dispatchNexusRealtimeTool`, which only the umbrella tool `nexus_capability_router` reaches, and that tool is offered to ElevenLabs agents, not to the OpenAI Realtime session. The native tool path (`executeNexusOpenAiNativeTool`) never asked the planner. | The catch-all conversation tool asks the bridge too, after the crisis / secret-refusal / health-readings checks and before the older pipeline. Anything the planner cannot answer by itself (or any failure, or more than the bridge's few seconds) carries on exactly as before. | `test/nexus/voice-planner-bridge.test.js` (order of the steps) and journeys J01-J11, J17 below |
| 4 | **"Delete my last reading" on the spoken planner path deleted the person's last farm log entry** ("Removed your last entry: 12 mm of rain") and left the blood pressure reading in place. | In spoken (`deterministicOnly`) mode the health-readings conversation is skipped ("the older route sees both kinds together") but the farm log's `delete my last reading` pattern still matched. Reached today only by the umbrella tool; fix 3 would have made it reachable from the catch-all too. | Spoken health-readings requests are deferred to their own route before any toolkit sees them (not the generic "that was wrong", not a bare "delete my last entry"). | `test/nexus/voice-planner-bridge.test.js` |
| 5 | **A fact said aloud ("I grow maize in Kisumu", "my name is Amina") was not saved as a fact** on the spoken path; "remember that I grow maize" became a note, and "what do you remember about me" then said "I do not have any saved notes about you". | The memory row names the conversation, which has a foreign key to `nexus_conversations`, and the spoken path creates the conversation row only after it has an answer. The insert was refused and the error swallowed. | Spoken path saves the fact without a conversation link. | `test/nexus/voice-planner-bridge.test.js` |
| 6 | The typed route (the app's main door) left **"What is the emergency number in Kenya?" to the model**; the older command route and the voice tool already answer it deterministically (999 or 112, never 911). | `emergencyNumberAnswer` was wired into the older pipeline only. | The planner answers it first, from the person's country, on every route. | `test/nexus/voice-planner-bridge.test.js` |
| 7 | The owner-run audit reported **a correct sale and a correct debt as FAIL** ("income today is 0, expected 4500", "'who owes me' does not list John 800"). | The audit read only `You earned 4,500` and `John 800`; Kyro now labels the currency once (`You earned KSh 4,500`, `John KSh 800`). Two `^s*Recorded` patterns also lacked their backslash. | The two readers accept an optional short currency label. | `test/nexus/production-user-audit.test.js` |

## Results

Counts are PASS / WARN-or-N/A / FAIL / SKIP.

| Check | main (same harness) | With these fixes |
|---|---|---|
| 38 journeys with stored-row checks (`verify.mjs`) | 19 / 0 / 19 / 0 | **38 / 0 / 0 / 0** |
| Production user audit, layers A B C, `--with-staging` (71 checks) | 59 / 5 / 0 / 5 (69 checks) | **67 / 4 / 0 / 0** |
| Audit's 22 safety phrases x 3 routes (66 checks) | 65 / 0 / 1 / 0 (typed route, emergency number) | **66 / 0 / 0 / 0** |
| Acceptance probes (13) + black-box identity | not run on main (nothing in it touches the changed code) | 12 / 2 / 0 / 0 (the 2 are N/A here, see below) |

With a stand-in model that only answers in words, main also **failed C34** (fix 1). That run is not in the table because it is a different stand-in.

The 4 audit WARNs are about the machine, not the product: A05 `mandatory gaps: 21 (providers not configured)`, A06 `no VAPID public key`, A12 `only 0/52 large text files are compressed` (no proxy in front), A15 `absent: strict-transport-security` (no TLS here). The A02 release SHA is stamped because `run.mjs` sets `RR_COMMIT`.

### The journeys (`verify.mjs`), with what the tables held afterwards

Voice tool = `POST /api/voice/realtime/tool` with `nexus_general_conversation`. Planner = `POST /api/nexus/runtime/behavior/turn` (+ `/confirm` and `/acknowledgements`, the way the app uses them). Account A and account B are two Standard Users. Currency shown is KSh because the test accounts are in Kenya.

| Id | Journey | Result | Evidence in Postgres (or the reply) |
|---|---|---|---|
| J01a | "add milk, eggs and bread to my shopping list" (voice tool) | PASS | 3 `nexus_memory_items` rows, `purpose=personal_items`, `list=shopping` |
| J01b | "remove milk ...", "what is on my shopping list" | PASS | milk row has `deleted_at`; reply "1, eggs; 2, bread" |
| J02 | "make a note: ... buy seed on friday", "show my notes" | PASS | one `personal_items` row, `kind=note` |
| J03a | "remember that I grow maize", "what do you remember about me" | PASS | `purpose=task_planning` row `{kind: crops, value: maize}` |
| J03b | "remember that my PIN is 4821" (voice tool and planner) | PASS | refused ("I won't save a PIN..."); no row gained, the digits appear in no row of the account |
| J04 | "sold 3 sacks of maize 4500" | PASS | `farm_records` / `money` row `{type: income, item: maize, qty: 3, unit: sack, amount: 4500, currency: KSh}` |
| J05 | "nimeuza mahindi elfu nne" | PASS | row `{income, maize, amount: 4000}`; reply in Kiswahili |
| J06a | "John owes me 800", "who owes me", "what did I earn today" | PASS | row `{party: John, amount: 800, debt: true, unpaid: true}`; income unchanged (KSh 8,500 before and after) |
| J06b | "John paid 500" | PASS | debt row amount 300, new income row `part payment from John` 500; "You earned KSh 9,000 today (3 entries)" |
| J06c | "sold 1 bag of beans 100", "undo" | PASS | money rows 5 -> 4, the beans row gone, nothing else |
| J07 | "nimeuza sukari kilo mbili 400" | PASS | row `{income, sugar, qty: 2, unit: kg, amount: 400}` |
| J08 | "I have 20 bags of flour", "how much flour do I have" | PASS | `stock` row `{name: flour, qty: 20, unit: bag}` |
| J09 | "I borrowed 5000 from Mama Njeri" | PASS | row `{loan: true, type: expense, category: loan, owing: 5000}`; "It is not income" |
| J10 | "chama contribution 500", "chama balance" | PASS | row `{type: saving, category: chama, amount: 500}` |
| J11 | "monthly summary" | PASS | income, costs, profit, "Owed to you: John KSh 300", "Loans you owe: KSh 5,000", chama, in one reply |
| J12a | "my blood pressure is one forty three over eighty seven" -> asked -> "yes" -> "show my blood pressure readings" | PASS | asked "Shall I save it?"; saved after "yes"; the older path keeps it in the legacy state document (`nexus_records` has 0 rows for the person) |
| J12b | "delete my last reading" -> asked -> "yes" | PASS | "Done. I deleted your blood pressure reading 143 over 87"; then "I don't have any saved blood pressure readings" |
| J13a | planner: "my blood pressure is 151 over 97" -> consent -> "yes" | PASS | `nexus_records` row `record_type=health_observation`, `workspace_id=health-records`, `data.systolic=151, diastolic=97`, `state=active` |
| J13b | voice tool: "show my blood pressure readings" | PASS | shows the planner-saved 151 over 97 (both stores read together) |
| J13c | voice tool: "delete my last reading" -> "yes" | PASS | row now `state=deleted, data={}`, `provenance.deletedBy` set (fix 2) |
| J13d | planner: save 152/98, "delete my last reading" -> "yes" | PASS | row `state=deleted` (fix 2) |
| J13e | "my blood sugar is 8,5" -> "yes" | PASS | "8.5 mmol/L" |
| J14a | "remind me in 20 minutes to ..." | PASS | `nexus_notifications` row `scheduled_at` = now + 20.00 min (UTC), `state=queued`, label "in 20 minutes, at 9:24 am today" (Africa/Nairobi) |
| J14b | "remind me tomorrow at 9am to ..." | PASS | `scheduled_at` = tomorrow `06:00:00Z` = 09:00 in Africa/Nairobi |
| J14c | "change my reminder to ... to 5pm" | PASS | row moved to `14:00:00Z` the same day |
| J14d | "cancel my reminder to ..." (x2) | PASS | all rows `state=cancelled`, none queued |
| J15a | "remind me every day at 8am and 8pm to ..." | PASS | 2 `nexus_schedules` rows `job_type=reminder.repeat`, `timeOfDay` 08:00 and 20:00, `days=daily`, `timezone=Africa/Nairobi`, `state=active` |
| J15b | "stop repeating reminder 1" (x2) | PASS | both rows `state=cancelled` |
| J16 | planner: "remind me in 30 minutes to ..." (the `reminders.schedule` tool) | PASS | `nexus_notifications` row at now + 30 min, `state=queued` |
| J17a | "save John 0712345678" | PASS | `purpose=contacts` row `{name: John, phone: +254712345678}` |
| J17b | "text John I am late", "call +254712345678", each answered "no", on the voice tool and the planner | PASS | all four only STAGED ("Say yes to send it"), "no" cancels; the stand-in logged **0** requests to any host other than the model between the first and last of these |
| J18a | account B asks 11 read-backs (list, notes, memory, reminders, repeat rules, owed, income, stock, summary, contacts, readings) on both routes | PASS | none contains any of A's words |
| J18b | B: "text John I am late" | PASS | "I don't have a number for John" |
| J18c | B: "cancel my reminder to <A's reminder>" (voice tool; planner then "yes") | PASS | "I could not find a reminder like that"; A's row still `queued` |
| J18d | B: "stop repeating reminder 1", "undo", "delete my last reading" | PASS | A's money rows 7 -> 7, A's repeat rules untouched |
| J18e | B's `/api/state` | PASS | none of A's words in it (fix 1) |
| J18f | B's own rows | PASS | B wrote 0 memory rows; A's 7 money rows intact |

### Safety phrases (`safety.mjs`)

All 22 phrases of the audit (English and Kiswahili: baby with fever not feeding, baby with no fever playing, pregnant with 160/110, child fitting, chest pain, pesticide, self-harm, the emergency number in Kenya, a recruiter asking for an ID and M-Pesa PIN, "should I buy bitcoin", burnt beans, a small cough) on the voice tool, `/api/agent/command` and the planner route, judged with the audit's own `judgeSafety`: **66 of 66**. The baby with no fever and the other controls do not alarm on any route; the baby that is not feeding, pregnancy 160/110, self-harm, the scam and the investment phrases do what they should on all three. Clinical wording and thresholds were not touched.

### Acceptance probes and the deploy gate

- `POST /api/nexus/runtime/production-acceptance/probes/<name>` with `NEXUS_ACCEPTANCE_TOKEN=candidate-only-token`: task-engine, semantic-memory, consent-audit, offline-sync, identity, observability, consolidated-brain, realtime-voice, documents-lifecycle, healthcare-controls, predictive-model all **pass** against the real tables. `object-storage` answers 503 (no S3 here) and `fault-isolation` 503 (it reaches the tool provider over the internet and breaks a real database connection on purpose): both are marked N/A, not passed.
- The identity part of `scripts/nexus-preproduction-black-box.js` (health, release, version and runtime endpoints, the page, the service worker and `app.js` all carrying the exact commit, three clean passes in a row) **passes**. Playwright and Chromium are not installed, so `probes.mjs` replaces the `playwright` module with a stub for that one step and requires the only failure to be the stub's.
- `scripts/nexus-run-production-evidence-probes.js` itself fires 17 requests at once; it can be run as it is through the harness's one-request-at-a-time front door (port + 2000) and ends with the same two N/A components, which it counts as failures.

## What the stand-in model is, and what it cannot prove

`stub-openai.cjs` answers, deterministically:

- the planner's structured plan request with "no steps, clarification: `STUBMODEL: I cannot plan that.`", except `remind me ...` (not "every"), which gets the plan a model would give (`reminders.schedule` with the person's words), so that tool and the delivery store behind it run;
- the planner's tool-less answer with `STUBMODEL-REPLY`;
- the older route's AI agent request with a model that calls the tool the server itself suggested (`toolHint`) and then repeats that tool's own `response`;
- everything else (translation and so on) with HTTP 503, like an unreachable provider.

So the **deterministic front doors run exactly as in production**, and any reply containing `STUBMODEL` marks a request that reached the model. It cannot prove: what a real model plans for open-ended requests (reading or updating a list by name, creating a document, "what is the weather" phrasing, knowledge questions), which native tool a real Realtime model picks for a spoken sentence (see "Open questions"), the wording of model-written answers, or how the system behaves when the model is slow or wrong. A weather question typed by hand did reach Open-Meteo from the server (read-only); the scripted journeys need no internet.

## What PGlite cannot prove

- **One session.** PGlite is a single session shared by every pooled connection. Overlapping transactions from overlapping requests interfere, and pglite-socket cannot interleave two connections' messages (the driver then dies with "Received unexpected parseComplete message from backend"). `pg-serialize.cjs` therefore sends every query one at a time, process-wide, for this harness only. Real concurrency, lock waits, advisory-lock contention, deadlocks and the compare-and-swap races the code guards against are **not** exercised.
- **Row-level security.** The migrations enable RLS on `nexus_records` and others; PGlite connects as the owner, so RLS is not enforced. Isolation above is the application's, not the database's.
- **No worker, no push.** `server.js` does not run the background worker. Reminders are proven to be stored with the right time in the right table; that a sweep claims them and a push arrives is not.
- **No object storage, no VAPID, no providers.** Exports, uploads and S3 (`object-storage` probe), the VAPID key, and every provider-backed tool are unconfigured.
- **Time.** The server and the database share one clock here.

No difference between PGlite and PostgreSQL explains any of the seven fixes: each was reproduced from a PostgreSQL parse error, a foreign key, or plain application code.

## Open questions for the owner (found, not changed)

1. **Which tool does the orb actually call? (answered by reading the page and running the real server; the model's own choice still needs a phone.)** The page does not route spoken transcripts to the planner: it only opens workspaces from them (`executeGenesisWorkspaceFromFinalTranscript`), and the browser's voice session registers only ten tools (`public/nexus-openai-realtime-agent.js`), none of which saves a note, list, sale, debt, farm log entry or contact. Calling each of the ten with those requests on the real server saved nothing (marketplace sample listings, weather for a place called "John", "Agriculture Help opened"). Fixed in this change: the orb now registers `nexus_everyday_records` (the catch-all conversation tool under a name the browser can expose, because a QA rule keeps plain conversation out of the browser's function tools), the voice instructions send those requests to it and say never to claim a save the tool did not report, and the farm and workflow tools also try the planner first. Still needs a real phone: whether the live model chooses `nexus_everyday_records` for those sentences.
2. **Provider outage took the whole older command route down: FIXED (follow-up change).** Reproduced with the new harness switch (`<RR_OUT>/model-outage` file or `STUB_MODEL_FAIL=1`, then `node outage.mjs`): 11 of 12 test sentences, including "add milk to my shopping list", notes, sales, debts, the farm log, contacts, reminders, a blood-pressure reading and "hello", answered `openai_native.provider_blocked` (only a chest-pain sentence, caught before the model, was answered). Now, when the provider fails before any tool has run, `answerWithoutModelWhileModelIsDown` (server.js) passes the request through the catch-all tool's own no-model doors only (crisis and secret checks, health readings, the planner's no-model answers, and the reminder door of the older pipeline) and a request none of them can answer, such as "tell me a story about a farmer", still says `provider_blocked`. The content guard and care-safety checks that run before the model are unchanged. The phone line shares the fix. Also fixed: if the model's closing wording call failed after a tool had already run, the turn said "provider blocked" although the tool had done its work; it now gives the tool's own answer. Test: `test/nexus/command-route-provider-outage.test.js`. Not changed: the provider-blocked wording itself names "OpenAI-native Nexus intelligence ... provider-unavailable", which is jargon for a farmer (the phone line already softens it). The 20-second per-call timeout still applies, so a provider that hangs (rather than errors) makes each turn wait before the fallback runs.
3. **Native `nexus_automation_reminder` asks for confirmation, the catch-all and typed planner create at once: NOT CHANGED, it is deliberate.** Reproduced (`node reminder-paths.mjs`): the native tool answers `confirmation-required` and stores nothing; the catch-all tool and the typed planner say "Done / Okay. I will remind you ..." and store a push reminder; cancel asks first on every path. The evidence that the gate is on purpose: `test/nexus/voice-reminders-and-greeting.test.js` ("the tool creates a push reminder only after confirmation ... the confirmation gate for unconfirmed creation is unchanged"), `archive/qa-scripts/nexus-openai-native-tool-parity-qa.js` (asserts `confirmation-required`, then `local-reminder-created` with a receipt after `confirmed: true`), and the tool is classified `confirmation-gated-automation` in its definition. `reminders.schedule` itself is not `confirmationRequired` in `nexus/tools/canonical-provider-definitions.js`. **Owner decision:** keep the gate (a spoken sentence may be misheard, and the model asks "shall I set it?") or make a clear self-reminder (a task and a time) create at once on the native tool too, as the other two paths do. If the second, it is a small change in `nexusOpenAiNativeCreateLocalReminder`/the reminder branch plus updating that one test and the archived script; cancel stays gated. The unconfirmed answer ("... in Nexus memory ... No notification ... has been scheduled") also does not mention that a confirmed reminder is a real push, which may confuse.
4. **Language mix-up: FIXED (follow-up change).** Reproduced on the real server: a Kiswahili account typing "my baby has a fever and is not feeding", "I am pregnant my blood pressure is 160 over 110", "my child is fitting and his eyes rolled back", "I have chest pain and I am sweating" or "my child drank pesticide" with `language: "en"` to `/api/agent/command` got the Kiswahili care answer ("Mtoto mwenye dalili hizi anahitaji mhudumu wa afya ..."). Cause: `careSafetyReply` handed the safety reader only the account language, and the reader (`nexus/companion/safety.js`) treated "no Kiswahili word found" as "use that language"; the same shortcut was in `swahiliCrisisReply` and `secretNotSavedReply`. New single rule, `nexus/i18n/reply-language.js`: the words typed win; the request's language, then the account language, only decide when the words do not. Applied to the older command route, the voice tool and the typed planner route (all three now agree, with or without a `language` field, in both directions; `node language-mix.mjs` shows 0 safety mismatches). Kiswahili wording is untouched. An older test pinned the opposite (`test/nexus/swahili.test.js`: "an English one in a Swahili app is answered in Swahili too"); it was changed to the new rule, which is a decision the owner should confirm. Tests: `test/nexus/reply-language-words-win.test.js`. Still open, not safety: the plain "I couldn't do that one just now" reply to a Kiswahili sentence the system cannot handle ("Nimeungua maharage") comes out in English on the voice tool and command route even for a Kiswahili account with `language: "sw"`.

## The phrase sweep (`phrases.mjs`): every phrase of "What you can say"

The orb bookkeeping gap (the browser voice session registered ten tools and none saved anything everyday) was found only by calling the real tools. `phrases.mjs` does that for **every phrase of section 14 of the capabilities list**, English and Kiswahili (the list is in `phrase-list.mjs`: 233 phrases, each with what a correct answer looks like), on the three routes a person can reach it by:

| Route | Call |
|---|---|
| orb | `POST /api/voice/realtime/tool` with the tool the voice instructions send that kind of sentence to (`nexus_everyday_records` for everyday saving; `nexus_weather`, `nexus_health_preparation`, `nexus_workforce_learning`, `nexus_communications`, `nexus_agriculture`, `nexus_marketplace_logistics`, `nexus_live_knowledge`, `nexus_maps_route`). Where a model could reasonably pick a nearer tool (health worker and farm phrases), the phrase is also sent through that tool (`:via-...`). Music and playback controls have no orb tool at all (the browser registers ten), so they are listed as NOORB, not judged. |
| typed | `POST /api/nexus/runtime/behavior/turn` (carrying the conversation id like the app does), with `/confirm` and `/acknowledgements` for a yes |
| cmd | `POST /api/agent/command` with `conversational: true` |

Three dedicated test accounts per route (a Standard User, an Admin test account for the staff-only phrases, and one shared second account that only reads back). For each phrase and route it records the reply, what changed in the database (`nexus_memory_items` by purpose and collection, in-place edits too, `nexus_notifications`, `nexus_schedules`, `nexus_records`, `nexus_documents`, the legacy state document) and any swallowed SQL error in `app.log`, then judges it: **PASS** (right answer, stored correctly), **HONEST** (a clear "I can't / nothing saved", or a question for the missing detail), **WRONG** (irrelevant answer, wrong thing stored, wrong language, "done" with no row), **CRASH** (HTTP 5xx or a swallowed SQL error). Two more labels keep the table honest: **MODEL** (only a real AI model can answer; the stand-in model replied) and **PROVIDER** (needs a tool provider that cannot be reached from this harness). Multi-step phrases get their yes (or "skip" for the guided forms) as a follow-up. Finally the second account asks 20 read-backs on each route and must see nothing of the first account's data.

```
cd scripts/dev/real-runtime
npm install
node harness.mjs &          # or any RR_PORT / RR_OUT of your own
node phrases.mjs            # about 45 minutes; --route orb,typed,cmd  --only <regex on phrase id>  --group <regex>
# or: RR_PHRASES=1 node run.mjs
```

It prints the table, the not-PASS lines and writes `phrases-result.json` (plus `phrases-partial-<route>.json` after each route) to `RR_OUT`. The orb limit of 90 tool calls a minute per person is respected (the script waits), the exit code is 1 if anything is WRONG or CRASH.

### What the first run found, and what was fixed

First run on `54697f9e` (main at the time), the last run on the commit that carries the fixes below (orb 264 results with 20 NOORB, typed 235, cmd 235):

| | before | after |
|---|---|---|
| orb PASS / HONEST / WRONG / CRASH | 157 / 40 / 19 / 0 | 187 / 53 / 4 / 0 |
| typed PASS / HONEST / MODEL / WRONG / CRASH | 141 / 15 / 54 / 19 / 7 | 163 / 11 / 54 / 4 / 1 (+2 PROVIDER) |
| cmd PASS / HONEST / WRONG / CRASH | 134 / 65 / 37 / 0 | 153 / 70 / 12 / 0 |

(The plus-254 contact fix and the typed "9 am" fix were added after that last full run and were checked by a targeted re-run: "Save Otieno's number as plus 254 712 345 678" now saves on all three routes.) (The "before" columns were judged with an earlier, cruder version of the judge, so some of the change is the judge learning; every row below was checked by hand.) No swallowed SQL error appeared in any run, and the second account saw none of the first account's data on any route.

Found and fixed (tests in `test/nexus/phrase-sweep-fixes.test.js`):

| Phrase | Route | What the person got | Cause | Fix |
|---|---|---|---|---|
| any Kiswahili phrase answered by the older route ("Nikumbushe baada ya nusu saa kuangalia jiko") | orb, cmd | "Got it." in front and "You can ask me to contact the buyer, check the field ..." behind a Kiswahili answer | `humanizeAgentResult` adds both, in English, to every reply | skipped for Kiswahili |
| "Hali ya hewa Kisumu ikoje?" | orb weather tool | "Which location's weather would you like?" in English | only English lead-ins ("in", "for") were looked for | Kiswahili place read |
| "Play Burna Boy Last Last" | typed | first aid for a burn | "burna" starts like "burn", "boy" reads as a child | a request to play is never a sign |
| "Visit Mary: temperature 38.5, cough" | cmd, orb health tool | "Which city or country should I check for weather?" / recorded as the speaker's own reading | the word temperature alone | a body temperature and a patient note are not weather or a reading (also in the tool hint the model is given) |
| "Antenatal visit Mary: blood pressure fine, baby moving" | orb, cmd | the emergency script | "blood" next to "baby" | "blood pressure/sugar/test" are not bleeding |
| the same phrase, which the pregnancy reply itself suggests | typed, orb | not recognised | the visit reader knew only "visit" | antenatal, postnatal, home and clinic visit |
| "She has heavy bleeding" | orb health tool, cmd | "I opened Health and Chronic Care" / "couldn't do that" | not in the older urgent reader | added (never for an animal) |
| "My child is fitting", "She has heavy bleeding" | orb health and farm tools | "I opened Health and Chronic Care" | those tools never asked the danger-sign readers | they do now |
| "I have chest pain", "She has heavy bleeding" | typed | HTTP 503, no words | the answer is a tool-provider call and the provider was down | the urgent words that need no provider are said instead |
| "I ran 5 km in 30 minutes", "I slept 7 hours", "I drank 2 litres of water", "My goal is 4 workouts a week", "Undo my last workout" | orb (health tool, where the voice instructions send them) | "I opened Health and Chronic Care", nothing logged | the typed route logs all of them in the wellness log; the health tool knew only "log a 30 minute run" | handed to the planner |
| "I took my metformin", "Referral letter ...", other health-worker phrases | orb health tool | the same generic sentence | nothing in the tool understood them | the planner is asked before that generic sentence |
| "Post for sale: 500 kg maize at 40 per kg" | orb marketplace tool | "nexus-marketplace-bridge marketplace.listing requires explicit confirmed: true before controlled testing can run" | the provider's own sentence was passed on | "Say yes to do it, or no to cancel" |
| "Weka tangazo: ninauza kilo 500 za mahindi ..." | orb marketplace tool | eight sample listings | only English verbs create a listing | Kiswahili verbs |
| "Text John I am late", "Call Mama" with texting switched off | orb communications tool | "twilio sms.send is disabled. Enable NEXUS_SMS_ENABLED=true for controlled testing." | the provider's own sentence | "Sending texts is not switched on for this account yet, so nothing was sent or changed." |
| "Cheza muziki kwenye YouTube kuanzia sasa" | typed | HTTP 502 | "sasa" (from "kuanzia sasa") was cut as politeness, so the preference was read as a song title | kept |
| "Remind me tomorrow at 9 to pay the school fees", then "9 am" | typed | the answer never finished the reminder | no state for the question | the answer is joined to the reminder it answers |
| "Save Otieno's number as plus 254 712 345 678", "Connect me to plus 254 ..." | orb | asked for the name again | "plus 254" (how Kyro itself reads a number back) was understood by no reader | "plus" before a country code is the + sign |
| "Pause the music", "Volume up", "Next song", "Stop the music", "Mute", "Resume", "Sitisha", "Endelea", "Wimbo unaofuata", "Ongeza sauti" | cmd (and the phone line) | "Resume": "Let us take one manageable step ..."; "Endelea": "Done. Prepared gap review ..." (a false done); "Next song"/"Volume up": "I couldn't do that one just now"; "Stop the music": "Spotify is not connected" | the route had no media-control handling | a control that names music or volume returns the same media.control instruction the typed route returns and "I've sent ... to your music player. I can't see from here whether anything is playing."; a bare "resume"/"endelea" asks what to resume, a bare "pause"/"next" says nothing is playing from here (`nexus/media/command-route-controls.js`; test `test/nexus/media-controls-older-command-route.test.js`). Kiswahili lines are draft wording |
| "Add a donor named Grace Otieno", "Create an invoice for Grace Otieno", "Mark invoice INV-1001 as paid", "Who are my donors?", "What grants are we tracking?" with no business workspace | typed | asked "I prepared the request and need your confirmation ..." and after the yes answered with an HTTP 422 "You do not have a business or nonprofit workspace yet" | the check only ran in the executor, after the confirmation | the planner checks the person's workspaces first (no model) and answers up front; changes offer to start one, reads say how to begin (test `test/nexus/business-no-workspace-before-confirmation.test.js`) |

Found and not fixed:

- **Kiswahili sentences that need a fluent speaker**: the planner's "Saved Otieno: +254712345678 ..." (all routes), "I heard: match me to a role ..." (orb, cmd), "I can save this to your own health records ..." (typed), the new "not switched on" sentence is English only, the typed workspace placeholder "Nexus completed the governed execution and is rendering the verified result." (shown for every workspace answer; the real words are in `render.data`).
- **A bare "Yes", "No", "Cancel", "Acha", "Ndiyo" with nothing waiting** is answered "Got it. I couldn't do that one just now, and nothing was saved. Try saying it another way, or name a module and action, like 'AgriTrade prepare buyer update'" (orb, cmd): honest, but a better sentence ("nothing is waiting for a yes") needs wording in both languages.
- **(Media controls on the older route: fixed, see the table above.) The older command route and music**: "Resume" answers "Let us take one manageable step ...", "Endelea" answers "Done. Prepared gap review for Field Operations Agent." (a false "done"), "Watch drip irrigation on YouTube" opens Agriculture Help, "Play music in YouTube from now on" answers "Live Knowledge is not configured yet". The typed route plays and controls music through the media tool; the older route and the phone line have no media controls at all. Product decision.
- **"Find a clinic near Kisumu" / "Find a pharmacy near me"** (orb health tool, cmd): "I opened Health and Chronic Care ..." and a pharmacy list from Stockton and Sacramento (a starter catalogue, not Kenyan places). Data decision.
- **(Fixed, see the table above.) Typed "Add a donor ..." / "Create an invoice ..." for an account with no business workspace** asks "I prepared the request and need your confirmation before the next governed action." and only after the yes says there is no workspace (HTTP 422). The workspace question should come first.
- **Typed "What reminders do I have?"** speaks only "You have 2 reminders."; the list is in the workspace card (`render.data.reminders`), not in the words.
- **Older route (`cmd`) results that depend on the model**: with the stand-in model the older route repeats the tool the server suggests, so "Text John", "Call Mama", "Save Amina's email", "Report: the borehole ..." show what the suggested tool says, not what a real model would choose. Not judged further. The older route's reminder confirmation ("I can prepare that reminder locally, but I need your explicit confirmation") is the known inconsistency already open.
- **"Play radio Citizen"** (typed) resolves to "The People's Radio - A Star Citizen Community Radio Station" from the live radio directory (the sweep reached the internet for this, read-only). A curated list of Kenyan stations would fix it; not done.
- **Not checked here**: anything that needs a real model (54 typed MODEL results: open-ended planning, weather phrasing, jobs, lessons, health-worker questions the planner does not answer by itself), a run with a real Twilio account, which tool a live Realtime model really picks for each sentence, and the audio.

## Still only verifiable on staging with real services

Real OpenAI behaviour (open-ended planning, tool choice in the Realtime session, answer quality, latency and error handling); the worker claiming `nexus_notifications` and `nexus_schedules` rows and a real push arriving on a real device with VAPID keys; real Twilio send and call (every journey above stops at "Say yes"; the confirmed path was never exercised); S3 object storage and the two N/A probes; Chromium parts of the black box; PostgreSQL concurrency, RLS and failover; TLS, compression and the security-header WARNs; the Realtime voice session itself.
