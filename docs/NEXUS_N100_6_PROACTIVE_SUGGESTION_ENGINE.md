# Nexus N100-6 Proactive Suggestion Engine

Sprint N100-6 adds controlled proactive suggestions without background autonomy. The engine is server-side and QA-only in this phase. It is not wired into Standard User runtime, browser UI, notifications, provider handoff, storage, routing, or live connectors.

## Allowed Contexts

Nexus may prepare suggestions only after a user-visible context exists:

- after a user result, suggest next step
- after a workflow step, suggest safe continuation
- after provider failure, suggest retry/refine
- after stale data, suggest refreshing
- after saved plan, suggest reminder/export if supported
- after crop guidance, suggest observation checklist
- after job search, suggest application prep checklist

## Suggestion Output

Every suggestion includes:

- `suggestionId`
- `reason`
- `safeActionType`
- `requiresConfirmation`
- `blockedActions`
- `noExecutionAuthorized`

Every suggestion remains user-controlled:

- `userInitiatedContextRequired: true`
- `backgroundGenerated: false`
- `notificationAllowed: false`
- `canExecute: false`
- `executionAuthority: "none"`

## Not Allowed

Not allowed:

- background monitoring
- unsolicited notifications
- automatic provider calls
- automatic external actions
- hidden provider contact
- location polling
- emergency escalation

This means there is no background autonomy, no hidden provider contact, no location polling, and no emergency escalation in N100-6.

## Runtime Boundary

N100-6 is not imported by:

- `public/index.html`
- `public/app.js`
- `server.js`

There is no Standard User behavior change in this phase.

## QA Coverage

Focused QA verifies:

- suggestion module, doc, and QA file exist
- allowed contexts produce safe suggestions
- unsupported background contexts produce no suggestions
- provider failure suggests retry/refine only
- stale data suggests refresh/verify only
- crop guidance suggests observation checklist only
- job search suggests application-prep checklist only
- every suggestion requires confirmation
- every suggestion blocks real-world and background autonomy actions
- no fetch, timer, notification, geolocation, camera, navigation, storage, provider handoff, or execution API is introduced

Package alias:

```bash
npm run qa:nexus-n100-6-proactive-suggestion-engine
```

The QA is wired into the local-safe Nexus Workforce suite.
