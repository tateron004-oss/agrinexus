# Nexus Planner Model

Phase: 11F2

## Purpose

The Nexus planner creates structured, non-executing plans from user input, intent classification, tool metadata, and policy decisions. It helps Nexus describe what it would do, what information it needs, which gates apply, and what the next safe step is.

The planner is advisory only. It does not execute tools, create pending actions, stage actions, route UI, trigger permissions, trigger confirmations, open providers, open camera/location, process payments, call people, message people, or replace existing routers.

## Relationship To Existing Layers

The planner sits after the existing Phase 11 layers:

```text
Input
  -> Intent classifier
  -> Tool registry metadata
  -> Policy engine
  -> Planner
  -> Future response composer / future pending action manager
```

- `public/nexus-intent-classifier.js` identifies domain, risk, action type, selected tool, and entities.
- `public/nexus-tool-registry.js` provides runtime-readable metadata-only tool descriptions.
- `public/nexus-policy-engine.js` returns advisory safety decisions.
- `public/nexus-planner.js` turns those inputs into step-by-step plan metadata.

Existing routers remain authoritative.

## NexusPlan Schema

Every plan contains:

- `planId`
- `sourceText`
- `intentId`
- `toolId`
- `domain`
- `risk`
- `policyStatus`
- `summary`
- `steps`
- `requiredInputs`
- `permissionGates`
- `confirmationGates`
- `blockedActions`
- `safeAlternatives`
- `nextSafeStep`
- `canExecute`
- `executionMode`
- `plannerSource`
- `createdAt`
- `notes`

`canExecute` must always be `false` in Phase 11F2.

`executionMode` must be `plan_only`.

## NexusPlanStep Schema

Every step contains:

- `stepId`
- `order`
- `label`
- `description`
- `intentId`
- `toolId`
- `risk`
- `status`
- `requiresPermission`
- `requiresConfirmation`
- `canExecute`
- `blockedReason`
- `userVisible`
- `notes`

Every step must have `canExecute: false`.

## Planning Statuses

Valid statuses are:

- `informational`
- `preview_only`
- `needs_clarification`
- `permission_required`
- `confirmation_required`
- `blocked`
- `not_implemented`
- `future_pending_action`
- `complete_without_execution`

## Safety Model

The planner must not:

- call backend routes
- mutate app state
- create pending actions
- stage actions
- confirm actions
- request permissions
- open workflows
- route sections
- open modals
- open camera or geolocation APIs
- open provider bridges
- open external app URLs
- call or message contacts
- process payments
- submit applications
- diagnose medical conditions
- dispatch emergency services

The planner may:

- describe safe steps
- identify missing inputs
- identify permission gates
- identify confirmation gates
- identify blocked or not-implemented actions
- produce QA-inspectable metadata

## Why Execution Remains False

Planning is not permission. Planning is not confirmation. Planning is not execution.

`canExecute` remains false because future phases still need:

- plan observation metadata
- session memory
- pending task state
- explicit confirmation UI
- audit logging
- permission adapters
- provider adapters
- role-based authorization
- rollback/cancel behavior

## Current Limitations

- The planner is not attached to normal user-facing UI.
- The planner is not attached to response composition.
- The planner does not create pending actions.
- The planner does not execute provider adapters.
- The planner does not override existing routers.

## Future Preparation

Phase 11F3 can attach plans to observation-only metadata in the same style as policy observation. Phase 11G can introduce session memory and pending task state. Later Phase 13 work can introduce permissioned execution adapters only after confirmation, audit, and provider boundaries are complete.
