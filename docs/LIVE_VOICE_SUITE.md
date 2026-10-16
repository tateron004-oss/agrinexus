# Live voice test

A test that talks to Kyro the way a person does and checks what happens. It uses a real Chrome, a pretend microphone, real speech
(made by the app's own `/api/voice/speak`) played into the real voice session, and then reads what the page did: what it heard, which
tool the voice model called, which screen it drew, what the model said aloud, and whether the player is playing.

It exists because typed checks never proved voice. The first full owner test of the sheet failed 70 of 75 items by voice while every
typed check passed: the voice model refused things the page could open, spoken requests never reached the page, and screens stacked up.
Every case here pins one of those things.

## Running it

Against the live site, with a **test account** (never a real person's):

```
set KYRO_TEST_EMAIL=...        (PowerShell: $env:KYRO_TEST_EMAIL="...")
set KYRO_TEST_PASSWORD=...
npm run qa:voice-live
npm run qa:voice-live -- --writes          # also the cases that save a document, note, reminder, checklist
npm run qa:voice-live -- --area documents,lists
npm run qa:voice-live -- --only docs-open,hello
npm run qa:voice-live -- --risky           # also the emergency words (they may offer to alert the person's trusted circle)
npm run qa:voice-live -- --show            # a visible Chrome window
npm run qa:voice-live -- --url https://some-other-site
```

Exit code 0 means every case passed, 1 that a case failed, 2 that sign-in or the voice session could not be started.
A JSON report is written next to the console output (`--out file.json` to choose where).

### Without a password: in your own signed-in browser

Open the site, sign in as usual, open the browser console, and paste the output of

```
node scripts/live-voice-suite/print-bundle.js --area documents,lists
```

Then follow the run with `__kyroRig.results.map(r => r.status + ' ' + r.id + ' ' + r.failures.join('; '))`.
(Chrome may ask you to type "allow pasting" first.) The same rig and cases run; only the sign-in differs.

## What a case says

`scripts/live-voice-suite/cases/*.js`. A case is `{ id, area, say, expect, then? }`:

- `say`: the sentence spoken. `typed`: a sentence sent through the typed route instead.
- `expect`: what must be true (the fields are listed at the top of `expect.js`): the kind of screen, words on it, buttons, whether it stays until closed, pictures, a Download button, a form on screen, the orb back, the player state, what was said aloud.
- `then`: steps after that: `{ tap: "label" }`, `{ type: { selector, value } }`, `{ choose: "image" }` (hands a small picture to the file chooser), `{ say: "..." }`, `{ expect: {...} }`.
- `writes: true`: saves something on the account (only with `--writes`). `risky: true`: emergency words (only with `--risky`). `needs: "sound"`: needs sound to be allowed to start.

By default a case also fails if the voice **says it cannot open or see** something while the page did open it. That is exactly the failure the
owner heard ("I can't open documents from here"). What the speech-to-text wrote is only ever a warning: mishearing is not the page's fault.

## What it cannot do

It replaces the microphone, not the person: it cannot test a real microphone, a phone, the phone's own file picker, how speech sounds, the Download
button actually saving a file, or Kiswahili wording. Those stay with a person.

## Files

- `run.js` starts Chrome, signs in, installs the rig, starts the voice and runs the cases; `chrome.js` and `cdp.js` are the launcher and a tiny DevTools client (no dependency; Node 22+).
- `rig-page.js` runs inside the page; `expect.js` judges (pure, unit-tested in `test/nexus/live-voice-suite.test.js`); `print-bundle.js` prints the console version.

## Reading how real spoken requests go (not only the test run)

Each browser adds up, per voice session, how many spoken requests it heard and how many had a problem (the voice began to refuse, the page could not answer, the session stalled, the voice was slow to connect), and sends only those counts now and then. The owner reads them, per day, at `GET /api/admin/voice/usage-summary?days=14` (`smoothPercent` = requests with no problem counted). The reasons for the problems are in `GET /api/admin/voice/stall-summary`. Counts only: no speech, names or ids. A browser that closed before reporting is missing, so treat it as a trend, not a total.
