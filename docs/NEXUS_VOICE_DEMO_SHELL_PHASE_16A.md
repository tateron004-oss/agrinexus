# Nexus Voice Demo Shell Phase 16A

## Purpose

Phase 16A adds a meeting-safe, browser-native voice shell for the Standard User demo. The goal is to make Nexus feel conversational, similar to a Jarvis/Siri/Alexa-style assistant, while preserving the current controlled-action safety posture.

This phase is not a full autonomous voice agent. It is a push-to-talk demo shell for one command at a time.

## What Was Added

- A visible Standard User control labeled `Talk to Nexus`.
- A voice status line with states such as `Voice ready`, `Listening...`, `Processing...`, and `Speaking...`.
- A small transcript/status preview for the most recent voice interaction.
- A standalone browser module: `public/nexus-voice-demo-shell.js`.
- A narrow frontend bridge in `public/app.js` that returns safe demo responses and may navigate only to safe low-risk sections.
- Static QA: `scripts/nexus-voice-demo-shell-phase-16a-qa.js`.
- Package alias: `qa:nexus-voice-demo-shell-phase-16a`.

## What Was Not Added

- No backend voice service.
- No OpenAI, Google, Microsoft, Amazon, or other third-party voice API.
- No always-on wake word.
- No continuous/background listening.
- No automatic call, message, provider handoff, camera, location, payment, marketplace transaction, account, health, telehealth, or emergency execution.
- No Phase 14 renderer activation.
- No new persistent storage for voice transcripts.

## Browser-Native Speech Approach

The shell uses only browser-native APIs:

- `window.SpeechRecognition || window.webkitSpeechRecognition`
- `window.speechSynthesis`
- `SpeechSynthesisUtterance`

Speech recognition starts only after the user clicks `Talk to Nexus`. It listens for one command, routes the transcript through the demo-safe bridge, speaks a response if speech synthesis is available, and then returns to ready state.

## Push-To-Talk Safety Model

The shell is explicitly user initiated. There is no background listener and no wake-word loop. It uses:

- `continuous = false`
- `interimResults = false`
- one click per command
- high-risk prompt detection before routing

High-risk prompts are blocked from execution and receive a spoken safety response.

## Supported Demo Prompts

Recommended low-risk meeting prompts:

- `Nexus, good morning.`
- `Nexus, help me find agriculture training.`
- `Nexus, teach me how irrigation works.`
- `Nexus, show me farm jobs.`
- `Nexus, browse AgriTrade.`
- `Nexus, I need help with crop issues.`

These prompts return safe preview-style responses. Where appropriate, Nexus may open a safe app section such as Learning, Workforce, or Trade. It does not execute workflows or high-impact actions.

## High-Risk Spoken Refusal / Permission Model

High-risk prompts such as these remain guarded:

- `Nexus, call John.`
- `Nexus, send a WhatsApp message.`
- `Nexus, show my location.`
- `Nexus, open the camera.`
- `Nexus, buy seeds.`
- `Nexus, schedule an appointment.`
- `Nexus, I have an emergency.`

Nexus responds that it can prepare or explain the request, but it will not execute calls, messages, location, camera, payments, health, emergency, provider, marketplace, or account actions from voice. Existing confirmation/provider flows remain the only path for controlled actions.

## Health Access Voice Demo Layer

Phase 16A also includes a demo-safe Health Access Voice Demo Layer for telehealth, pharmacy, mobile clinic, rural health, transportation-to-care, community health, provider-contact preparation, appointment preparation, and care navigation conversations.

This is still not healthcare execution. Nexus can speak safe guidance, explain what information may be needed, prepare review-only next steps, and explain that provider permission and integration would be required. Nexus does not schedule appointments, submit refills, contact providers, send medical information, request location, dispatch clinics, diagnose symptoms, access records, or complete healthcare actions.

### Telehealth Demo Behavior

For a prompt such as `Nexus, I need telehealth`, Nexus should say:

> Nexus can help with telehealth access. I can guide you through the information usually needed for a visit and prepare a safe next-step review. I have not scheduled an appointment or contacted a provider.

Nexus may open safe health-access context, but it does not start a live provider room, place a call, send a message, or create a healthcare visit automatically.

### Nexus Spoken Introduction

The Standard User voice dock includes an optional `Introduce Nexus` control. It is user-initiated and does not auto-play on page load.

When selected, Nexus may speak or display:

> Hello, I am Nexus, your voice-operated access assistant. I can help guide you through telehealth, pharmacy support, mobile clinic access, transportation-to-care, workforce resources, and agriculture services. How can I help you today?

If browser speech synthesis is unsupported, the same introduction remains available as visible text. This introduction does not start listening, does not request microphone permission, and does not store the spoken introduction as a user transcript.

The introduction does not claim that Nexus has called, messaged, scheduled, refilled, dispatched, shared location, processed payment, sent medical information, connected to a live provider, or completed any action.

Meeting use: click `Introduce Nexus` first, let Nexus speak or display the introduction, then click `Talk to Nexus` for the live prompt flow.

### Pharmacy Demo Behavior

For prompts such as `Nexus, I need pharmacy support` or `Nexus, I need help getting my medication`, Nexus should say:

> I can help you review pharmacy access steps, refill questions, or transportation needs. I have not submitted a refill, and I cannot request, change, or submit medication orders in this demo.

This supports refill preparation guidance only. It does not request, change, submit, or send medication orders.

### Mobile Clinic Demo Behavior

For a prompt such as `Nexus, help me find a mobile clinic`, Nexus should say:

> I can help you review mobile clinic and rural health access options. In this demo, I can prepare next steps, but I will not request your location, contact a clinic, or dispatch services.

No location permission, clinic contact, dispatch, or provider handoff occurs.

### Transportation-To-Care Demo Behavior

For a prompt such as `Nexus, I need a doctor but I do not have transportation`, Nexus should say:

> I can help you think through care access and transportation options. I have not shared your location, contacted anyone, scheduled an appointment, or scheduled a ride.

Nexus may explain preparation steps, but it does not schedule rides, share location, or contact care teams.

### Rural Health / Community Care Demo Behavior

For rural health or community care prompts, Nexus can explain safe options to prepare for care access, such as what information to gather, which support channel to review, and why a connected provider would be needed for real handoff.

No real healthcare action is executed in Phase 16A.

### High-Risk Healthcare Boundaries

These prompts stay guarded:

- `Nexus, call my doctor.`
- `Nexus, refill my prescription.`
- `Nexus, send my medical information.`
- `Nexus, schedule my appointment.`
- `Nexus, tell the pharmacy to refill my medication.`
- `Nexus, send my location to the clinic.`
- `Nexus, diagnose my symptoms.`
- `Nexus, dispatch a mobile clinic.`

Safe response:

> For safety, I cannot complete that healthcare action automatically. I can help you review what would be needed before anything is shared, scheduled, sent, submitted, or contacted.

### Emergency Handling

Emergency prompts such as `Nexus, this is an emergency`, `Nexus, I am having chest pain`, `Nexus, I cannot breathe`, or `Nexus, I need an ambulance` must not trigger triage, diagnosis, provider dispatch, or emergency execution.

Safe response:

> If this may be an emergency, call local emergency services now. I cannot dispatch emergency help in this demo.

### What Was Not Implemented

- No diagnosis or medical advice engine.
- No appointment scheduling.
- No prescription or refill execution.
- No provider, pharmacy, clinic, or emergency contact.
- No location permission.
- No medical-record access or sharing.
- No HIPAA-sensitive integration.
- No healthcare backend/API/provider integration.
- No storage of health information beyond existing typed/chat behavior.

### Healthcare Meeting Demo Script

1. `Nexus, good morning.`
2. `Nexus, I need telehealth.`
3. `Nexus, help me find a mobile clinic.`
4. `Nexus, I need pharmacy support.`
5. `Nexus, I need help getting my medication.`
6. `Nexus, I need a doctor but I do not have transportation.`
7. `Nexus, can you help me access care?`
8. `Nexus, help me prepare for a telehealth visit.`
9. `Nexus, call my doctor.`
10. `Nexus, refill my prescription.`
11. `Nexus, send my medical information.`
12. `Nexus, schedule my appointment.`
13. `Nexus, send my location to the clinic.`
14. `Nexus, this is an emergency.`

Expected posture:

- Health access prompts: helpful, spoken, safe navigation guidance.
- Provider/medical execution prompts: permission/provider/compliance boundary.
- Emergency prompts: advise the user to call local emergency services; no dispatch claim.
- No real healthcare action is executed.

## Browser Support Caveats

Browser support varies:

- Chrome/Edge on localhost commonly support speech recognition.
- Some browsers do not expose `SpeechRecognition`.
- Some browsers block microphone access until the user grants permission.
- Some browsers may support recognition but not speech synthesis.

The typed Ask Nexus path remains available when voice recognition or speech synthesis is unsupported.

## Tomorrow Meeting Demo Script

Opening line:

"What you're seeing today is not a chatbot alone. Nexus is being developed as a voice-operated access layer for communities that need help reaching services. The goal is for a person to speak naturally about telehealth, pharmacy, mobile clinics, transportation, workforce, or agriculture and have Nexus understand the need, guide them safely, and prepare the next step."

Safety line:

"This demo is intentionally safety-controlled. Nexus does not call providers, send medical information, refill prescriptions, schedule appointments, share location, or dispatch services automatically. Those actions require permission, provider integration, audit trails, and compliance controls. Today we are showing the front-door experience: voice, understanding, safe guidance, and action-readiness."

Live demo flow:

1. "Nexus, good morning."
2. "Nexus, I need telehealth."
3. "Nexus, help me find a mobile clinic."
4. "Nexus, I need pharmacy support."
5. "Nexus, I need a doctor but I do not have transportation."
6. "Nexus, call my doctor."
7. "Nexus, this is an emergency."

Expected behavior:

- Greeting introduces Nexus as a voice-operated access assistant.
- Telehealth gives safe preparation guidance.
- Mobile clinic gives safe access guidance without location request or dispatch.
- Pharmacy gives safe guidance without refill submission or prescription changes.
- Transportation-to-care gives safe planning guidance without location sharing or ride scheduling.
- Doctor call request gives permission/provider boundary.
- Emergency prompt tells user to call local emergency services and does not dispatch.

Fallback line if browser voice recognition fails:

"Browser speech recognition support varies. I can type the same command and Nexus will run the same safety-controlled flow."

Closing line:

"Today Nexus is voice-capable and safety-controlled. The next step is connecting approved provider workflows behind permission gates - telehealth scheduling, pharmacy coordination, mobile clinic routing, transportation support, and audit logging. The important part is that Nexus already demonstrates the user experience: people can ask naturally, Nexus understands the access need, responds out loud, and stops before anything sensitive happens."

## Manual Demo Script

1. Start the app with `node server.js`.
2. Open `http://127.0.0.1:4182/`.
3. Choose `Start as User`.
4. Click `Talk to Nexus`.
5. Say: `Nexus, good morning.`
6. Click `Talk to Nexus` again.
7. Say: `Nexus, help me find agriculture training.`
8. Repeat with:
   - `Nexus, teach me how irrigation works.`
   - `Nexus, show me farm jobs.`
   - `Nexus, browse AgriTrade.`
   - `Nexus, I need help with crop issues.`
9. Demonstrate a guarded request:
   - `Nexus, call John.`
   - `Nexus, send a WhatsApp message.`
   - `Nexus, show my location.`

Presenter framing:

> Nexus can hear a command and speak back, but it is intentionally controlled. It previews and explains low-risk work, and it refuses to execute sensitive actions until the right permission, provider, and confirmation architecture exists.

## QA Commands Run

Phase 16A validation expects:

```bat
git diff --check
node --check server.js
node --check public/app.js
node --check public/nexus-voice-demo-shell.js
node --check scripts/qa-suite.js
node --check scripts/nexus-voice-demo-shell-phase-16a-qa.js
node scripts/nexus-voice-demo-shell-phase-16a-qa.js
npm.cmd run qa:nexus-voice-demo-shell-phase-16a
node scripts/nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract-qa.js
node scripts/nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit-qa.js
node scripts/nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa.js
node scripts/qa-suite.js all-safe
node scripts/qa-suite.js nexus-workforce
```

## Safety Confirmation

Phase 16A does not enable autonomous high-risk execution. It does not place calls, send messages, open providers, request camera/location permissions, submit payments, buy/sell marketplace items, schedule appointments, dispatch emergency support, or create accounts.

The shell is a demo-safe voice layer only.
