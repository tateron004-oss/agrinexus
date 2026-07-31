# Nexus capability-layer Windows physical certification

Certification completed on 2026-07-31 against capability base commit `8cca79b847811432417e0dfe4f030176d8093771`. Production was not deployed.

## Protected foundation

- Certified release: `501a1e06`
- Before physical testing: PASS, 29/29 protected Git blob hashes matched
- After physical testing and repairs: PASS, 29/29 protected Git blob hashes matched
- All repairs were confined to the unprotected capability/content-population layer and its tests.

## Physical Windows foundation evidence

- Google Chrome, visible non-headless browser session
- Windows System.Speech audible microphone calibration: PASS
- Physical microphone acquired: PASS
- Realtime connection retained across the complete conversation: PASS
- Realtime remote audio attached: PASS
- British female identity: `marin`, with the certified British-woman voice instruction present
- Single audio output owner / one `#nexus-audio`: PASS
- Continuous listening: PASS
- Physical Windows-speaker to microphone barge-in: PASS
- Guided Entry and visible voice field completion: PASS

## Open-ended conversation matrix

All 19 turns passed in one continuous session. Every successful turn had a synchronously captured populated DOM result tied to the exact routed request ID before Nexus acknowledged success.

| Turn | Visible acceptance evidence |
| --- | --- |
| Current Barbados community-solar sources | 10 live linked sources |
| “Another reputable source” follow-up | 10 live linked sources with retained context |
| Paramaribo wooden-architecture images | Source-labeled visible image and source link |
| La Paz map | Visible live map iframe and outbound map link |
| Windhoek bicycle services | 6 live OpenStreetMap/Nominatim listings |
| Cesária Évora morna | Visible playable audio and source link |
| Different Japanese city-pop follow-up | Different visible playable audio and source link |
| Stop music | Visible stopped state and no active media player |
| Greenhouse-filter reminder | Populated visible reminder fields |
| Reminder recall follow-up | Context-retaining populated reminder review |
| Kigali red-bean marketplace draft | 6 populated editable fields |
| Price/collection revision | 8 populated editable fields with retained context |
| Coastal-rice salt-damage report | Populated visible one-page report artifact |
| Marine-electrician résumé | 17 populated editable fields |
| Add shipboard experience | 20 populated editable fields with retained context |
| Peru traveler intake | 35 visible editable fields |
| Voice-fill fever/joint-pain concern | Visible field value updated through conversation |
| Migraine clinician question card | Populated visible question-card artifact |
| Impossible Mars image request | Visible truthful failed result, no fabricated success, useful recovery actions |

## Failures repaired and rerun

- Live sources: requested and parsed the Responses web-search `web_search_call.action.sources` contract, retaining citation parsing as fallback.
- Arbitrary music: added a keyless public Apple/iTunes playable-preview provider, visible audio rendering, and one bounded retry.
- Images: added bounded location-first and reordered-query retries for Wikimedia Commons without hard-coded countries or prompt phrases.
- Listings: added bounded broader Nominatim retries and a deterministic semantic contract that routes place discovery to listings while keeping known-location/route display in maps.
- Certification harness: correlated physical transcripts, request IDs, acknowledgements, and result IDs; captured visible proof synchronously; normalized accents and spoken-number transcription differences.

Each failed capability was rerun in isolation after repair, then the complete matrix was rerun until all 19 turns passed.

## Regression evidence

PASS: capability-layer unit acceptance, real-browser acceptance, Playwright browser smoke, HTTP session E2E, approved-source evidence, multi-turn context, runtime E2E, request transactions, 19 voice visual actions, Guided Entry form entry, visible maps/routes, protected experience phase one, voice foundation, browser shell, and voice visual fallback.

Primary machine-readable evidence: [`certification.json`](../output/nexus-capability-windows-physical/certification.json). Final browser capture: [`final.png`](../output/nexus-capability-windows-physical/final.png). Per-turn PNG evidence is stored in the same output directory.
