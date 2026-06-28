# Nexus Sprint LIVE4 - Assistant Dialogue Engine Contract

## Purpose

LIVE4 adds a deterministic, side-effect-free contract for assistant-style dialogue. It lets Nexus classify open user questions, recognize follow-ups, ask clarifying questions, and build safe preview responses without executing any action.

This phase does not wire the dialogue engine into the Standard User runtime, does not touch DOM APIs, does not use network calls, and does not create provider dispatch or pending real-world actions.

## Files

- `public/nexus-assistant-dialogue-engine-contract.js`
- `fixtures/nexus/assistant-dialogue-chains.json`
- `scripts/nexus-sprint-live4-assistant-dialogue-engine-contract-qa.js`

## Contract Helpers

The module provides:

- `classifyAssistantDialogueIntent(input, context)`
- `resolveAssistantFollowUp(input, context)`
- `requiresAssistantClarification(classification)`
- `buildAssistantClarificationQuestion(classification)`
- `buildAssistantDialoguePreview(input, context)`
- `isSafeAssistantDialoguePreview(preview)`

## Supported Intent Categories

- general question answering
- weather
- current events/news
- conflict/security awareness
- shipment tracking
- job search
- job application preparation
- resume/cover-letter preparation
- agriculture market/weather context
- music/media
- provider/status lookup
- agriculture help
- contact/provider identity
- calls/messaging intent
- appointment/service request intent
- marketplace request
- payment/mobile money intent
- location/dispatch intent
- camera/image intent
- emergency intent
- medical/pharmacy intent
- general assistant conversation
- clarification required
- unsupported request

## Short-Term Context

The contract may use safe short-term context fields:

- `lastTopic`
- `lastIntentType`
- `lastLocation`
- `lastCountry`
- `lastTimeframe`
- `lastProvider`
- `lastJobSearchRole`
- `lastJobSearchLocation`
- `lastJobResultReference`
- `lastTrackingNumberPresence`
- `lastRecipientReference`
- `lastLanguagePreference`
- `lastSimplicityLevel`
- `contextConfidence`
- `contextExpires`

Sensitive values, such as full tracking numbers or private contact identifiers, must not be exposed in previews.

## Required Preview Shape

Assistant dialogue previews must include:

- `dialoguePreviewId`
- `intentType`
- `spokenSummary`
- `detailedAnswerAvailable`
- `displayDetails`
- `evidenceSummary`
- `clarificationQuestion`
- `safetyNotice`
- `nextSafeOptions`
- `sourceRequirement`
- `sourceStatus`
- `freshnessStatus`
- `confidenceLevel`
- `limitationNotes`
- `requestedLanguage`
- `responseLanguage`
- `translationRequired`
- `simplicityLevel`
- `lowLiteracyMode`
- `readAloudMode`
- `riskCautionRequired`
- `blockedExecutionChannels`
- `noExecutionRequired`
- `executionAuthority`

Every safe preview must preserve:

- `noExecutionRequired: true`
- `executionAuthority: false`

## Clarification Behavior

Nexus must ask concise clarification questions when required information is missing:

- Weather without location: "Which city or country should I check?"
- Conflict/security without region: "Which area should I check?"
- Shipment without tracking number: "What tracking number should I check?"
- Job search without role/location: "What kind of job and which city or country should I search?"
- Job application without selected job/resume details: "Which job should I help you prepare for?"
- Music without provider: "Which music provider should I use?"
- Contact ambiguity: "Which person do you mean?"
- Appointment without provider/time: "Which provider and time window should I prepare?"
- Payment without payee/amount: "Who is the payee and what amount? I will not send money."
- Medical/emergency: "I can give safety information, but I cannot diagnose, prescribe, or dispatch emergency help."

## Fixture Dialogue Chains

The fixture set covers:

- weather chain
- conflict/security chain
- shipment chain
- job search chain
- job application preparation chain
- music chain
- contact/message chain
- simplification/language chain
- blocked execution chain
- ambiguous/clarification chain
- general question chain

## No-Execution Boundary

The dialogue engine must never mutate DOM, add event listeners, fetch/network, write storage, create backend writes, create provider dispatch, make calls, send messages, process payments, book appointments, use location/camera, create pending real-world actions, or execute assistant dialogue requests.

LIVE5 can build weather provider readiness on top of this no-execution dialogue posture.
