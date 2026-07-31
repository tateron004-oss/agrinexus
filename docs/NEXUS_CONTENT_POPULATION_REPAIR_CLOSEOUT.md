# Nexus open capability and content-population repair

## Protection boundary

- Certified release: `501a1e06`
- Protection commit: `aaeb4d7b`
- Protected manifest: `.github/nexus-protected-foundation.json`
- Protected files changed: none
- Foundation guard: 29/29 protected Git blob hashes match
- Production deployment: not performed

The protected authentication, microphone, Realtime, voice identity, transcript, transaction, and workspace foundations remain intact. This repair begins at the existing workspace-open event and adds an unprotected conversational goal, provider, artifact, rendering, and verified-acknowledgement layer.

## Superseded design

The first content-population patch used browser regular expressions to choose named actions and separate hard-coded renderers for lessons, pharmacy cards, marketplace forms, reminders, queues, clinic listings, and music. It could pass the original prompt list without being a general assistant. That design has been removed.

The browser source no longer contains `planContentAction`, prompt-specific marketplace/music extraction, or canned pharmacist/lesson content. Example prompts are test inputs only.

## Open capability architecture

1. Every routed command or otherwise-unhandled final transcript enters the same `/api/visual/content` endpoint.
2. A server-side OpenAI Responses API resolver receives the current command, requested and active workspace, recent conversation, previous visible artifact, and current visible field values.
3. The resolver returns a strict typed goal contract: capability, operation, workspace, live-provider need, query/location, editable artifact, and a prospective acknowledgement.
4. Live capabilities are populated after goal resolution:
   - music: current-query YouTube provider, with no artist, genre, culture, language, or country allowlist;
   - images: live Wikimedia Commons search with source and license links;
   - maps and geographic listings: OpenStreetMap/Nominatim and the existing map provider;
   - weather: existing Open-Meteo provider;
   - reputable-source search: existing approved-evidence service and receipts;
   - forms, résumés, intake documents, reports, question cards, marketplace drafts, reminders, and queues: schema-driven editable artifacts.
5. One generic browser renderer displays fields, sections, lists, sources, images, maps, media, documents, drafts, and provider recovery states.
6. Visible field values and artifacts are persisted and returned to the resolver, allowing follow-ups such as “change it,” “add my experience,” “another source,” and “something different.”
7. A success acknowledgement is emitted only after the returned result ID and any required media frame are present after the settle interval. Provider failures render visibly but emit `outcomeVerified=false` with the real limitation and next actions.

The resolver defaults to `gpt-5.6-sol`, can be overridden with `NEXUS_CONTENT_MODEL`, uses low reasoning effort, does not store Responses API data, and keeps provider credentials server-side.

## Generalization acceptance

The automated suite intentionally avoids the original Kenya/maize/pharmacist/Swahili prompt set. It verifies:

| Capability | Unseen request and follow-up evidence |
|---|---|
| Résumé | Warehouse-coordinator résumé followed by cooperative-bookkeeping experience insertion |
| Intake | Ghana travel intake followed by a conversational fever update to the visible concern field |
| Music | Horn-led Ethiopian jazz, then 1980s Japanese city pop, then contextual stop |
| Reputable sources | Current Sahel soil-restoration sources followed by “another reputable angle” |
| Images | Source-labeled Accra street-art image result |
| Map | Visible OpenStreetMap frame for Mwanza, Tanzania |
| Marketplace | Eighteen-sack red-bean draft followed by a conversational price revision |
| Listings | Seed suppliers near Huye, Rwanda, with the resolved query passed to Nominatim |
| Provider limitation | Cabo Verdean morna provider failure renders the credential limitation and useful alternatives without claiming playback |
| Resolver contract | Strict JSON Schema Responses API request includes previous artifact, visible fields, and recent conversation |

Browser result: 13 verified novel/contextual successes and one truthful provider failure. Every success has `visible=true`, `populated=true`, and `outcomeVerified=true`; the failure has `visible=true`, `populated=false`, and `outcomeVerified=false`.

## Evidence

Current generalized browser captures are under `output/nexus-content-population-repair/`:

- `01-resume-contextual-revision.png`
- `02-music-any-culture-followup.png`
- `03-live-sources-contextual-alternative.png`
- `04-voice-style-visible-field-update.png`
- `05-live-images-unseen-topic.png`
- `06-live-map-new-country.png`
- `07-marketplace-natural-revision.png`
- `browser-evidence.json` (request context, DOM evidence, acknowledgements, and stages)

The earlier controlled production reproduction remains under `output/nexus-content-population-repair/production-before/`. It documents the pre-repair generic-shell failures. Production has not been redeployed, so no production-after claim is made.

The physical microphone prompt runner now uses different documents, cultures, countries, data, and contextual follow-ups rather than replaying the original examples.

## Validation

```text
node scripts/nexus-protected-foundation-guard.js
node rebuild/tests/nexus-content-population-extension.test.js
node rebuild/tests/nexus-content-population-browser.test.js
node rebuild/tests/nexus-browser-playwright-smoke.js
node rebuild/tests/nexus-multiturn-context.test.js
node rebuild/tests/nexus-runtime-e2e.test.js
node rebuild/tests/nexus-request-transaction.test.js
node rebuild/tests/nexus-complete-voice-visual-actions.test.js
node rebuild/tests/nexus-voice-form-entry.test.js
node rebuild/tests/nexus-visible-map-route.test.js
node rebuild/tests/nexus-protected-experience-phase-one.test.js
```

All listed commands pass. The repair is prepared for owner review only.
