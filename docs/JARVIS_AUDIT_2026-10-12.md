# Jarvis audit: do all the programs work through Kyro? (12 Oct 2026)

Goal: you ask for something, by voice or by typing; the answer fills the screen while Kyro reads it out; then the orb returns. No menu, no tapping.

Two audits were run: a **code audit** (can every app and tool be reached by voice and by typing?) and a **behaviour audit** (what does the person actually get when each is asked?). The behaviour audit ran 50 requests through the voice tool route and about 30 through the typed box on a local copy of the app. It could not check anything that needs the real AI model, the real voice session or real provider keys. Those are listed at the end.

## What was already working (checked on the running app)

Clean answer screen, spoken answer, no form: weather, forecast, clinics and pharmacies (list with distance, hours, source), saved readings, provider summary, farm log and rain, notes, shopping list, board and listings, documents list, reminders (set and list), the emergency number, business questions (US small-business guide and the workspace summary), lessons and the practice interview, calendar, calculator, "what can you do", "what time is it", and the "open health / farm / work / learning / trade" help screens. Typed and spoken behave the same for these.

## Status of every gap

| # | Gap | Status | Where |
|---|---|---|---|
| 1 | Photo or file questions ("what is wrong with this plant", "read this letter") | **Fixed, camera untested.** Kyro opens the camera, counts down, takes the picture, the real vision model describes it (never diagnoses), Kyro adds who to show it to. With no camera: choose a photo. | #1019 |
| 2 | Selling ended in a form or in nonsense | **Fixed.** Voice and typed interview: asks only what is missing, reads it back, posts to the board after a yes. | #1019 |
| 2 | Telehealth ended in a long form | **Fixed, needs clinician review.** Voice and typed interview saves an intake case for provider review; stops and says what to do if an answer describes an emergency; the server checks again. | #1019 |
| 2 | Job applications | **Already worked by voice.** A named role: "I can prepare your application… Do you want me to record it now?". A general one asks what job and where. | (checked, no change) |
| 3 | Instructions name tools the voice session does not have | **Fixed in the server.** The catch-all tool hands a checklist, PDF export, the offline queue, receipts, a translation, a flyer or invoice, and a service check to the tool that does them. | #1016 |
| 4 | Checklists, "save as PDF", offline queue by voice | **Fixed** (same hand-off). | #1016 |
| 5 | Symptom and medicine questions got "I opened Health and Chronic Care…" | **Fixed, needs clinician review.** Says what Kyro cannot do, who to ask, which danger signs mean emergency help, and what it can do. English and Kiswahili. | #1017 |
| 6 | Delivery estimates returned sample listings | **Fixed.** Honest answer; offers what Kyro can do. | #1016 |
| 7 | Button-only: accessibility toggles | **Fixed.** "Make the text bigger", "turn on high contrast", "stop the animations", "screen reader mode on". | #1018 |
| 7 | Button-only: assign mentor, start shift, build profile, give me a quiz | **Fixed** (more ways to say them). | #1018 |
| 7 | Button-only: payroll approval, timesheets, performance reviews, trade payment and settlement, health supply and dispatch controls | **Not done: needs your decision.** They are role-gated and move or approve money, so a spoken version needs an explicit-confirmation design you approve first. | — |
| 7 | Button-only: map zones, risk layers, disruptions; "show what is blocked" | **Not done.** Low use by the target users; no spoken phrase yet. | — |
| 8 | Two drone implementations (spoken request vs Trade buttons) | **Not done.** Spoken requests save to one store, the Trade buttons to another; merging them is a data-model change. | — |
| 9 | Technical wording ("Provider is unavailable…", "Live Knowledge is not configured yet…", "That is not switched on…") | **Fixed.** | #1017 |
| 10 | Music had no instruction text | **Fixed.** | #1017 |
| — | Kyro said the internal name "Nexus" aloud; read out a provider's internal confirmation sentence | **Fixed.** | #1015 (merged), #1019 (the two safety replies) |
| — | A note that mentions buying, or a sale just posted, opened the Trade form | **Fixed.** | #1015 (merged) |
| — | Reminders and plain notes drew an old window; the reminders list was read out as a status line | **Fixed.** | #1014 (merged) |
| — | "Track my shipment" read the latest order of anybody | **Partly fixed.** It now hides orders marked as another account's; a new order is marked with its owner. Existing orders carry no owner, so they stay visible to everyone until a data migration marks them. | #1016 |

## Contradictions in the voice instructions (the same request claimed by two tools)

Resolved in the server rather than by hoping the model picks right: pictures, business, documents, lists, reminders and receipts reach the right tool through the catch-all hand-off (#1016). Email vs communications, memory vs everyday records, and maps vs shipment route vs field visit are left as they were (the planner and the older route answer them); each is a candidate for the live test to confirm.

## Open owner decisions (not mine to decide)

- Existing orders carry no owner; making them private needs a data migration (see above).
- "I feel hopeless" returns a generic reply on the voice tool route (clinical review pending).
- No Settings / Logout access from the orb.
- Delete "Kyro Test Workspace" (and a stray participant and a $1,000 farm-book entry) from your account.
- Uploads are switched off on the server by default, so the photo step reports "File uploads are not enabled on this server yet" until they are switched on.
- Payroll, timesheets, performance reviews, trade payments and health supply controls by voice (see the table).
- Clinical review of the health symptom and medicine wording (#1017), the telehealth emergency wording and danger-sign list (#1019), and the practice-lesson and crisis replies.

## Not checkable without the live site

Anything that needs the real AI model (jobs near me, crop-problem questions beyond the fixed guidance, prices, translation, "show my checklists" and several others return "I couldn't do that one just now" on the local stand-in), the real voice session (which tool the model picks for each phrase), real provider keys (job search, live knowledge, Spotify, texts, email, the vision model), the real camera, and the form windows (map, plan a field visit), which could not open in the test browser pane on any version of the code.

## After the live test

1. Say each of these on the live site and send what sounds or looks off: "find a clinic near me", "open health", "teach me letters" then "next", "I want to sell 50 bags of maize", "I need telehealth", "what is wrong with this plant" (with the camera), "create a checklist called Market Day with items seeds, sacks, scale", "export my notes as a PDF", "make the text bigger", "I have a fever".
2. Decide the open items above, starting with uploads and the payroll and payment controls.
