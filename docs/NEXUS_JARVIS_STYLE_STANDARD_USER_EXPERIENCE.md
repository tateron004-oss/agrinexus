# Nexus Jarvis-Style Standard User Experience

## Purpose

Phase 11J polishes the Standard User assistant experience so Nexus feels more confident, proactive, and controlled during the meeting demo. The goal is not full autonomy. The goal is a clearer assistant posture: Nexus can understand the request, explain the safest next step, show low-risk previews, and state when a real-world action has not happened.

## What Changed

- Low-risk controlled preview summaries now sound more like Nexus is planning with the user.
- Training, learning, jobs, field support, AgriTrade, and agriculture-help previews now describe the safe next step in clearer language.
- Explicit high-risk demo prompts now receive a polished safety briefing instead of falling into generic routing or unclear fallback copy.
- The high-risk safety briefing is text-only and suggestion-only. It does not open workflows, stage actions, request permissions, call providers, or execute anything.

## What Intentionally Did Not Change

- No backend contracts changed.
- No provider execution was added.
- No call, message, payment, marketplace transaction, account, camera, location, health, emergency, native bridge, or telehealth execution behavior was added.
- No session memory UI, storage, persistence, or authority was added.
- Existing confirmation gates, pending-action gates, policy guards, planner guards, and provider handoff boundaries remain authoritative.

## Demo Prompt Behavior

Low-risk prompts continue to show controlled previews and review-only guidance:

- `Nexus, help me find agriculture training`
- `Nexus, teach me how irrigation works`
- `Nexus, show me farm jobs`
- `Nexus, browse AgriTrade`
- `Nexus, I need help with crop issues`

High-risk prompts now receive a clear controlled-agent explanation:

- `Nexus, call someone`: Nexus says a call needs contact resolution, provider choice, and explicit confirmation.
- `Nexus, send a message`: Nexus says no message will be sent automatically.
- `Nexus, use my camera`: Nexus says camera access requires the user-controlled preview path and browser permission.
- `Nexus, find my location`: Nexus says precise location requires browser permission and consent.
- `Nexus, buy this item`: Nexus says marketplace actions remain browse/review only and no purchase/payment happened.
- `Nexus, I have an emergency`: Nexus leads with local emergency-services guidance and states Nexus cannot dispatch help.

Every high-risk response includes the boundary that no real-world action has been taken.

## High-Risk Safety Boundaries

Nexus must not automatically perform:

- calls or messages
- payments or checkout
- marketplace buy/sell transactions
- account creation or identity verification
- camera or precise location activation
- medical diagnosis or emergency dispatch
- provider handoff or native bridge dispatch

These remain blocked, permission-gated, confirmation-gated, or future-phase work.

## Controlled, Not Fully Autonomous

Nexus is presented as an intelligent assistant layer, not an unrestricted agent. In the Standard User build, it can:

- recognize likely intent
- show safe low-risk previews
- guide the user to the right app area
- explain why high-risk actions need confirmation
- keep the user moving with concise next-step suggestions

It cannot independently execute real-world actions.

## Presentation Script For Ron

"This is Nexus, the assistant layer inside Nexus Workforce AI and AgriNexus. It is designed to feel like a practical Jarvis-style guide, but with safety built in from the start. For low-risk requests, Nexus can preview the next best step and guide me to training, jobs, AgriTrade, field support, or learning. For anything that touches people, money, health, camera, location, or emergency response, Nexus slows down and explains the boundary. It does not call, pay, dispatch, diagnose, or activate permissions from a single prompt. That is the right posture before we move into deeper autonomy."

## QA Coverage

The Phase 11J QA guard verifies:

- Jarvis-style helper and high-risk demo copy exist.
- High-risk responses say no real-world action has been taken.
- The helper does not call routing, provider, native bridge, fetch, storage, camera, location, marketplace, health, emergency, or confirmation-bypass APIs.
- Low-risk preview summaries keep controlled guidance wording.
- Existing preview-only, confirmation, pending-action, planner, policy, session-memory, and native handoff boundaries remain present.
