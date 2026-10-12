# Jarvis audit: do all the programs work through Kyro? (12 Oct 2026)

Goal: you ask for something, by voice or by typing; the answer fills the screen while Kyro reads it out; then the orb returns. No menu, no tapping.

Two audits were run: a **code audit** (can every app and tool be reached by voice and by typing?) and a **behaviour audit** (what does the person actually get when each is asked?). The behaviour audit ran 50 requests through the voice tool route and about 30 through the typed box on a local copy of the app. It could not check anything that needs the real AI model, the real voice session or real provider keys. Those are listed at the end.

## What is already working (checked on the running app)

Clean answer screen, spoken answer, no form: weather, forecast, clinics and pharmacies (list with distance, hours, source), saved readings, provider summary, farm log and rain, notes, shopping list, board and listings, documents list, checklists (create), reminders (set and list), the emergency number, business questions (US small-business guide and the workspace summary), lessons and the practice interview, calendar, calculator, "what can you do", "what time is it", and the "open health / farm / work / learning / trade" help screens. Typed and spoken behave the same for these.

## Fixed during this audit

| Problem | Where |
|---|---|
| A note that mentions buying ("take a note: buy seeds") or a sale just posted opened the Trade form | #1015 |
| Reminders list drew an old window and was read out as "Nexus completed the governed execution…" | #1014 (merged) |
| Several tools said the internal name "Nexus" aloud ("no matching active Nexus memory record", "Nexus checked provider readiness") | #1015 |
| The offline queue read out a provider's internal sentence ("…requires explicit confirmed: true") | #1015 |
| "Hello Kyro" and "thanks" were drawn across the whole screen | #1015 |

## Gaps found, not fixed (ranked by how likely a real user hits them)

1. **Photo or file questions** (a crop-disease photo, a medicine label, a letter). The live voice session has no tool for it, the instructions do not mention it, and the typed planner has no matcher. Upload is a button.
2. **Selling, listing, telehealth intake and job applications still end in a form.** Only the résumé has a voice-guided interview. Someone who cannot type cannot finish "sell my maize" or "start a telehealth visit". The voice interview engine (`public/kyro-voice-intake.js`) exists; each form is a new definition on it.
3. **The live voice session can call only 11 tools; the instructions name others it does not have** (translation, lists, reminders, document export, business assistant, memory, visual analysis). They are reached through the catch-all tool, relying on one fallback sentence that the repo's own comments say the model has ignored before. Needs a real voice session to see which phrases fail.
4. **Checklists with items, "save as PDF", and offline queue by voice.** Their plans need several steps and the voice route defers those. The planner even tells the user to type.
5. **Symptom and medicine questions** ("I have a fever", "can I take ibuprofen with my blood pressure medicine") get a canned "I opened Health and Chronic Care…" line from the health tool instead of an answer. This is safety-sensitive, so the wording needs a clinician's review before it is changed.
6. **Delivery estimates** ("how long will delivery to Nakuru take") return the sample marketplace listings.
7. **Button-only actions with no spoken phrase:** complete lesson/quiz/certificate, workforce timesheet/payroll/mentor, health supply and referral, trade payments and settlement, map zones, accessibility toggles, "show receipts / what is blocked".
8. **Two parallel drone implementations** (the spoken request and the Trade buttons write to different stores).
9. **Wording a person should not hear:** "Provider is unavailable: live job search retrieval is disabled or not configured", "Live Knowledge is not configured yet. Kyro can prepare this research request…", "That is not switched on for this account yet" (what is "that"?).
10. **Music has no instruction text.** It works only if the model picks the catch-all tool.

## Contradictions in the voice instructions (the same request claimed by two tools)

Pictures (everyday records vs visual analysis), business (everyday records vs business assistant), email (email vs communications), documents (export vs file analysis), memory (memory vs everyday records), reminders (reminder tool vs catch-all), lists, calendar vs scheduling a doctor visit, and maps vs shipment route vs field visit.

## Open owner decisions (not mine to decide)

- "Track my shipment" reads orders shared by every account; it can show another account's order.
- "I feel hopeless" returns a generic reply on the voice tool route (clinical review pending).
- No Settings / Logout access from the orb.
- Delete "Kyro Test Workspace" (and a stray participant and a $1,000 farm-book entry) from your account.

## Not checkable without the live site

Anything that needs the real AI model (jobs near me, crop problems, prices, pictures, translation, "show my checklists" and several others return "I couldn't do that one just now" on the local stand-in), the real voice session (which tool the model picks for each phrase), real provider keys (job search, live knowledge, Spotify, texts, email), and the form windows (telehealth, drone, map, plan a field visit), which could not open in the test browser pane on any version of the code.

## Suggested order

1. Run the live voice test (clinic, open health, teach me letters then next, a note, a reminder, a checklist, "what can you do"). Send what sounds or looks off.
2. Fix instruction/tool contradictions (gap 3) once the live test shows which phrases fail.
3. Voice intake for selling and telehealth (gap 2).
4. A way to ask about a photo or file (gap 1).
5. Clinician review of the health symptom and medicine wording (gap 5).
