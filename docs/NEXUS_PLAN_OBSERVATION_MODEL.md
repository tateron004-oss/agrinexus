# Nexus Plan Observation Model

Phase: 11F3

## Purpose

Plan observation metadata lets Nexus expose the emerging agentic planning pipeline for QA and developer inspection without granting planning any runtime authority.

This phase is about observability, not autonomy. Nexus may describe what it classified, which tool metadata matched, what policy decision applied, what plan was generated, which gates exist, and why execution is not allowed. Nexus must not act on the plan.

## Relationship To The Intent Classifier

The intent classifier remains the first metadata layer. It identifies the prompt domain, risk, action type, selected tool, entities, and normalized text. Plan observation consumes the intent classification but does not replace typed command routing, voice routing, workflow routing, or existing confirmation gates.

## Relationship To The Tool Registry

The runtime tool registry remains metadata-only. The planner may reference matched registry metadata such as tool ID, domain, risk, permissions, confirmation requirements, and execution status. Registry metadata is still not runtime-authoritative.

## Relationship To The Policy Engine

The policy engine decides whether a request is low-risk preview/navigation, permission-gated, confirmation-gated, blocked, unsupported, or needs clarification. Plan observation consumes the `policyDecision` and preserves the existing policy boundary:

- `policyDecision.canExecute` remains `false`.
- Policy metadata does not route, stage, confirm, or execute.
- Existing routers and gates remain authoritative.

## Relationship To The Planner

The planner creates a structured `nexusPlan` from the intent classification, matched tool metadata, and policy decision.

Every observed plan includes:

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

`nexusPlan.canExecute` must always be `false`.

Every plan step must include:

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

## Metadata Attachment

Plan observation metadata is attached where agent-action and policy observation metadata already exist:

- backend response metadata: `metadata.nexusPlan`
- backend response metadata: `metadata.plannerObservation`
- agent action metadata: `metadata.agentAction.nexusPlan`
- agent action metadata: `metadata.agentAction.plannerObservation`
- frontend observation log: `latestObservedAgentActionMetadata.nexusPlan`
- frontend observation log: `latestObservedAgentActionMetadata.plannerObservation`

The metadata is additive and read-only. Existing response fields remain unchanged.

## Planner Observation Envelope

The observation envelope uses:

```js
plannerObservation: {
  schemaVersion: "planner-observation.v1",
  observationOnly: true,
  routerAuthority: "existing-routers",
  executionAuthority: "none",
  plannerSource: "nexus-planner",
  validationStatus: "valid",
  planValidation: { ok: true, errors: [] },
  canExecute: false,
  safetyBoundary: "Planner metadata is not execution, routing, permission, staging, or confirmation authority."
}
```

## Not Execution Authority

Plan observation metadata must not:

- execute tools
- stage pending actions
- create pending actions
- open workflows
- route pages
- trigger modals
- accept confirmations
- request camera, location, contacts, phone, payment, account, or provider permissions
- open call, message, payment, marketplace, telehealth, map, camera, or native bridges
- mutate `db.json`
- mutate localStorage
- replace existing routers

Existing routers, workflow buttons, permissions, confirmations, and provider boundaries remain authoritative.

## QA Inspection

QA may inspect:

- the full intent -> tool -> policy -> plan pipeline
- whether low-risk prompts produce informational or preview-only plans
- whether location, camera, and telehealth prompts remain permission-gated
- whether call/contact prompts remain clarification, permission, or confirmation guarded
- whether marketplace payment prompts remain controlled and non-executing
- whether unknown prompts produce clarification or unsupported plans
- whether `canExecute` remains false at plan and step level
- whether the frontend observes metadata without rendering raw plan data to normal users

## Normal User Visibility

Normal users should not see raw `nexusPlan` or `plannerObservation` metadata. They should only see the same safe Nexus responses, suggestion labels, preview cards, confirmation prototypes, and routed sections that existing UI already allowed before Phase 11F3.

Existing debug/QA pathways may inspect the metadata.

## Preparation For Future Session Memory

Plan observation prepares future work on:

1. session memory
2. pending task state
3. plan review UI
4. explicit confirmation payloads
5. audit logging
6. permission adapters
7. provider adapters
8. role-based authorization
9. cancel/undo semantics

Future phases must still add explicit safety and audit gates before any plan can become executable.

## Current Limitations

- No autonomous execution exists.
- No planner-driven routing exists.
- No planner-driven confirmation UI exists.
- No planner-driven permission request exists.
- No pending actions are created from plans.
- No provider adapters are called.
- Contact resolution and provider handoff remain guarded future phases.
- Planner metadata is advisory and observation-only.
