# Nexus Standard User Demo Runbook

## Purpose

This runbook is for presenting the current standard user meeting/demo build of AgriNexus/Nexus. It is not a production certification, HIPAA/compliance statement, marketplace execution approval, payments approval, or autonomous-agent release note.

Use it to show that Nexus can guide a standard user through training, job readiness, AgriTrade browsing, crop support, map/location permission boundaries, contact/call safety, and health/video handoff clarity while keeping high-impact actions controlled.

## Build Checkpoint

- Local commit: `2eba7f0 Add audit log architecture QA guard`
- Remote commit: `2eba7f0be3e13e8d6af22307ecc8a89d5d6fd1e9`
- Standard command: `node server.js`
- Standard URL: `http://127.0.0.1:4182/`
- Standard user entry path: `Start as User`
- Reported web build from Phase 10E2: `nexus-behavior-304`
- Phase 10E2 recommendation: ready for standard user demo testing

## Demo Positioning

Nexus is the assistant layer inside AgriNexus. In this demo, it behaves as a controlled, permissioned, agriculture-focused assistant that can guide, preview, route, and ask for permission before sensitive actions.

The product direction is toward a Siri/Jarvis/Alexa-like agentic assistant for rural workforce, agriculture, marketplace, health access, and field operations. The current build is intentionally bounded: it previews options, opens safe sections, and shows permission or confirmation boundaries instead of freely executing calls, payments, provider handoffs, camera access, or location capture.

That safety posture is part of the product, not a limitation to hide. The meeting goal is to show intelligence with control.

## Presenter Opening Script

Here is the way I would frame it:

> Today I am going to show AgriNexus with Nexus as the assistant layer. The important thing to notice is that Nexus is not just a chatbot sitting beside an app. It understands what the user is trying to do, opens the right area, previews safe next steps, and keeps high-impact actions behind permissions and confirmations.
>
> This is the path toward a Jarvis-style assistant for agriculture, workforce, marketplace, maps, and rural support. But we are being deliberate: Nexus can guide and prepare actions, but it does not silently call people, take payments, activate camera or location, or submit anything without permission. That is the foundation for a trustworthy agentic platform.

## Pre-Demo Checklist

1. Confirm the working tree is clean:
   ```powershell
   git status --short
   ```
2. Confirm the expected commit:
   ```powershell
   git log -1 --oneline
   ```
   Expected: `2eba7f0 Add audit log architecture QA guard`
3. Start the app:
   ```powershell
   node server.js
   ```
4. Open:
   `http://127.0.0.1:4182/`
5. Use the normal path:
   `Start as User`
6. Avoid stale tabs. If anything looks odd, refresh the browser and start again as User.
7. If demonstrating permission behavior, confirm camera/location permissions are not already pre-granted in the browser.
8. During the browse-only AgriTrade segment, do not click payment or transaction controls such as `Buyer Pay` unless explicitly demonstrating confirmation gates.
9. Keep the browser console available if you want to verify no warnings/errors appear during the demo.

## Main Demo Flow

### 1. Agriculture Training

Presenter action: type the prompt into the Nexus user input.

Prompt:
```text
Help me find agriculture training
```

Expected app behavior:
- Opens or routes toward Learning.
- Shows a Training preview or guided learning support.
- Does not auto-enroll, submit, or issue a certificate.
- May show a guided learning modal with a main action button, but nothing is submitted until the presenter intentionally acts.

What to say:

> Nexus understands this as a training need. It moves the user toward learning resources and previews the next step without automatically enrolling them or issuing any credential. This is the first controlled-agent pattern: understand, guide, preview, then wait.

Capability demonstrated:
- Learning/training guidance
- Agriculture as a supported domain
- Low-risk preview behavior

Safety/control behavior demonstrated:
- No automatic enrollment
- No credential or record submission without explicit user action

### 2. Irrigation Learning

Presenter action: refresh or return to the standard user home if needed, then type:

```text
Teach me how irrigation works
```

Expected app behavior:
- Shows learning guidance or a Learning preview.
- Does not open paid services.
- Does not create a record or force a lesson submission.

What to say:

> This shows Nexus as a practical tutor. The user can ask naturally, and the assistant can turn that into a learning path. It stays informational and controlled.

Capability demonstrated:
- Topic-based learning guidance
- Natural language education support

Safety/control behavior demonstrated:
- Preview-only learning support
- No hidden execution

### 3. Farm Jobs

Presenter action: type:

```text
Show me farm jobs
```

Expected app behavior:
- Routes toward Workforce/job resources.
- Shows Jobs or workforce guidance.
- Does not apply to a job.
- Does not submit a profile or contact an employer.

What to say:

> Nexus can connect agriculture work to workforce readiness. It can help a user find job pathways and understand next steps, but it does not apply for them or send their information without a confirmation flow.

Capability demonstrated:
- Workforce and job-readiness support
- Agriculture-to-workforce bridge

Safety/control behavior demonstrated:
- No automatic job application
- No profile sharing

### 4. AgriTrade Marketplace

Presenter action: type:

```text
Browse AgriTrade
```

Expected app behavior:
- Opens or routes toward AgriTrade/marketplace.
- Shows Marketplace preview or browse-oriented guidance.
- Does not automatically buy, sell, pay, message, or contact a buyer/seller.
- Existing visible controls such as `Contact Buyer` or `Buyer Pay` may be present, but do not click them during the browse-only segment.

What to say:

> AgriTrade remains a marketplace module. The demo here is browse and review, not transaction execution. Nexus can help orient the user, but buying, selling, payment, and contacting people must stay behind permission and confirmation gates.

Capability demonstrated:
- Marketplace discovery
- Agriculture trade retained inside the broader Nexus experience

Safety/control behavior demonstrated:
- No automatic marketplace transaction
- No automatic buyer/seller contact
- No payment execution

### 5. Crop Issues

Presenter action: type:

```text
I need help with crop issues
```

Expected app behavior:
- Shows Agriculture Help or field-support guidance.
- Provides safe informational support.
- Does not activate camera, drone, location, provider, or paid service automatically.

What to say:

> This is where Nexus becomes field support. A farmer can ask in plain language, and Nexus can start narrowing the issue. It is guidance first, not an uncontrolled action.

Capability demonstrated:
- Crop/agriculture guidance
- Field-support positioning

Safety/control behavior demonstrated:
- No camera or location activation
- No provider handoff
- No automatic workflow execution

### 6. Map / Location Permission

Presenter action: type:

```text
Nexus, use my location
```

Expected app behavior:
- Opens or routes toward Map support.
- Explains that browser permission is required.
- Does not capture location unless the browser permission flow is explicitly granted.

What to say:

> Location is useful, but it is sensitive. Nexus can explain why location would help and move the user to map support, but the browser permission boundary still controls whether location is shared.

Capability demonstrated:
- Map/location support
- Route/facility/location readiness

Safety/control behavior demonstrated:
- Permissioned location access
- No silent location capture

### 7. Contact / Call Permission

Presenter action: type:

```text
Call John
```

Expected app behavior:
- Safe behavior only.
- No provider opens.
- No native bridge dispatch.
- No phone call starts.
- In Phase 10E2, this prompt returned a generic clarification rather than polished contact-resolution UX.

Presenter action, optional follow-up:

```text
Call the provider
```

Expected app behavior:
- Stays guarded in health/provider guidance.
- No call or provider handoff opens automatically.
- May ask for context or next safe details.

What to say:

> This is important. Calling someone is a high-impact outbound action. Nexus should understand the intent, but it should not place a call on the first utterance. Future phases will improve contact lookup and resolution, but the permission boundary is already the right posture.

Capability demonstrated:
- Communication intent awareness
- Contact/call safety foundation

Safety/control behavior demonstrated:
- No first-turn call execution
- No provider handoff without confirmation

### 8. Health / Provider / Camera Workflow

Presenter action: type:

```text
open video for provider to show injury
```

Expected app behavior:
- Opens Health/local camera-preview workflow.
- Shows clear handoff-only, local-demo framing.
- Shows camera controls such as `Open camera`.
- Does not activate camera automatically.
- Does not start a real telehealth visit.
- Does not connect to a live provider room.

What to say:

> This is one of the clearest examples of controlled behavior. Nexus understands the user wants to show a visible concern, opens the right health workflow, and explains the local camera preview. But it does not start a real clinical visit, does not claim diagnosis, and does not activate the camera without permission.

Capability demonstrated:
- Health access support
- Local camera-preview workflow
- Provider handoff preparation

Safety/control behavior demonstrated:
- No live provider claim
- No automatic camera activation
- No diagnosis
- Permission and confirmation boundaries remain intact

## Suggested Presenter Narration By Segment

### Learning / Training

> Nexus can turn a plain request into a training path. The user does not need to know where the learning module is. They can just say what they need, and Nexus previews the safest next step.

### Jobs / Workforce

> The workforce layer helps connect people to job pathways, readiness, and support. The assistant can guide a user toward opportunity, but it does not submit applications or share personal information without permission.

### Marketplace / AgriTrade

> AgriTrade is still part of the platform. Agriculture and marketplace functionality are retained, but now they sit inside a broader workforce and rural support system. Nexus can guide marketplace browsing while keeping transactions controlled.

### Crop / Agriculture Help

> This shows the agriculture intelligence layer. Nexus can help a farmer describe a field problem and get guided support, while still avoiding uncontrolled camera, drone, provider, or paid-service execution.

### Map / Location Permission

> Maps become much more valuable with location, but location is private. Nexus is designed to ask and guide, not take. That permission boundary matters for trust.

### Contact / Call Permission

> A future version should be able to say, "I found John. Do you want me to call using phone or WhatsApp?" But it should never jump straight from "Call John" to placing a call. We are building the safe foundation first.

### Health / Provider / Camera Workflow

> Health support is intentionally conservative. Nexus can guide intake and camera-preview workflows, but it does not diagnose, does not activate the camera without permission, and does not pretend a live provider is connected.

## Known Caveats From Phase 10E2

- `Call John` is safe but returns generic clarification rather than polished contact-resolution UX.
- AgriTrade browse route visibly includes existing controls such as `Contact Buyer` and `Buyer Pay`; do not click those during the browse-only demo unless explicitly demonstrating confirmation gates.
- Browser validation temporarily wrote demo state to `db.json` during QA, but it was restored and git status was clean.
- One transient Windows crash occurred in `companion-response-quality-smoke.js`; direct rerun passed, and the full `all-safe` rerun passed all 28 checks.

## What Not To Demo Yet

Do not present these as live capabilities:

- Autonomous calling
- Real provider handoff
- Real emergency dispatch
- Real payment, buyer, or seller execution
- Real account changes
- Real location capture without permission
- Real camera activation without permission
- Production audit logging runtime
- Full unrestricted autonomous execution

Current audit logging work is architecture and QA guard coverage, not a production runtime audit-log system.

## Recovery Plan

### If the browser gets stuck

Refresh the page, then use `Start as User` again. If a modal remains open, close it or refresh before continuing.

### If app state looks stale

Open a fresh tab at `http://127.0.0.1:4182/`, use `Start as User`, and restart from the current demo segment.

### If the server stops

Return to the terminal and run:

```powershell
node server.js
```

Then reopen:

```text
http://127.0.0.1:4182/
```

### If a prompt gives an unexpected response

Do not improvise into risky actions. Say:

> Let me reset the user path and show that again from a clean state.

Then refresh, start as User, and rerun the prompt. If the same issue repeats, move to the next safe segment.

### If camera or location permissions were previously granted

Use browser site settings to reset permissions for `127.0.0.1:4182`, or state clearly:

> This browser has already granted permission, but the product design still relies on browser permission controls.

### If a stakeholder asks whether Nexus is fully autonomous today

Use this answer:

> Not yet, and intentionally so. Nexus is already moving toward agentic behavior: it can understand, preview, route, and prepare actions. But calls, payments, camera, location, medical, provider, account, and marketplace execution must remain permissioned and auditable before we expand autonomy.

## Closing Script

> What you saw today is not just a set of screens. It is the foundation of a controlled assistant for agriculture, workforce, marketplace, maps, and health access. Nexus can already understand natural requests, guide the user, and route them to the right place while keeping sensitive actions behind permission boundaries.
>
> The next step is to expand the agentic layer: better contact resolution, provider handoff planning, unified confirmations, audit logging, and eventually controlled execution. The important point is that we are building autonomy with trust, not around it.

## Final Demo Readiness Summary

- Standard user demo path: ready for standard user demo testing.
- Recommended command: `node server.js`.
- Recommended URL: `http://127.0.0.1:4182/`.
- Entry path: `Start as User`.
- Low-risk guidance, learning, jobs, marketplace browse, crop help, map permission, call guard, and health/video handoff paths were validated in Phase 10E2.
- Caveat: keep AgriTrade transaction controls browse-only unless explicitly demonstrating confirmation gates.
- Caveat: `Call John` is safe but not yet polished contact-resolution UX.
- Production-readiness claim: do not make one from this demo. This is a meeting/demo readiness runbook.
