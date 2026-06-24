# Nexus Policy Observation Model

## Purpose

Phase 11E adds observation-only policy decision metadata to the Nexus agent pipeline. The goal is to let backend and frontend QA inspect how Nexus classifies a prompt, maps it to tool metadata, and evaluates policy boundaries without granting the policy layer runtime authority.

This phase is about observability, not autonomy.

## Relationship To The Intent Classifier

The intent classifier remains the first metadata layer. It identifies the prompt domain, risk, action type, selectedToolId when low-risk, and missing or sensitive context. Policy observation consumes that classification as input. It does not replace typed command routing, voice routing, workflow routing, or existing confirmation gates.

## Relationship To The Tool Registry

The tool registry remains metadata-only. Policy decisions may reference matched tool metadata, including domain, risk, actionType, permission requirements, confirmation requirements, and executionStatus. Registry metadata is still not runtime-authoritative.

## Relationship To The Policy Engine

The policy engine produces a structured `policyDecision` with fields such as:

- `decisionId`
- `intentId`
- `toolId`
- `domain`
- `risk`
- `actionType`
- `status`
- `allowed`
- `requiresPermission`
- `permissionType`
- `requiresConfirmation`
- `confirmationType`
- `blocked`
- `blockReason`
- `clarificationRequired`
- `clarificationPrompt`
- `previewOnly`
- `canRoute`
- `canExecute`
- `executionStatus`
- `nextSafeStep`
- `policySource`
- `notes`

In Phase 11E, `canExecute` must always remain `false`.

## Metadata Attachment

Policy decisions are attached where agent-action metadata is already attached:

- backend response metadata: `metadata.policyDecision`
- agent action metadata: `metadata.agentAction.policyDecision`
- frontend observation log: `latestObservedAgentActionMetadata.policyDecision`

The metadata is hidden from normal user-facing UI. Existing debug/QA surfaces may inspect it.

## Not Execution Authority

Policy observation metadata is not execution authority.

Policy observation metadata must not:

- execute tools
- stage pending actions
- open workflows
- route pages
- trigger modals
- request camera, location, contacts, phone, payment, account, or provider permissions
- open call, message, payment, marketplace, telehealth, map, camera, or native bridges
- bypass existing confirmation gates

Existing routers, permissions, confirmations, and provider boundaries remain authoritative.

## QA Inspection

QA may inspect whether:

- low-risk prompts produce `allow_preview` or `allow_route`
- location and camera prompts produce `require_permission`
- contact/call and marketplace payment prompts remain guarded
- unknown prompts produce `clarify` or `unsupported`
- `canExecute` remains false
- no policy metadata creates visible UI or execution behavior

## Normal User Visibility

Normal users should not see raw policy metadata. They should only see the same safe Nexus responses, suggestion labels, preview cards, confirmation prototypes, and routed sections that existing UI already allowed before Phase 11E.

## Preparation For Future Planning

This metadata prepares the future planning skeleton by providing a consistent observation contract:

1. classify intent
2. match tool metadata
3. evaluate policy
4. inspect next safe step
5. keep execution disabled until later phases add explicit staging, confirmation, audit logging, and provider adapters

## Current Limitations

- No autonomous execution exists.
- No policy-driven routing exists.
- No policy-driven confirmation UI exists.
- No provider adapters are called.
- Contact resolution and provider handoff remain future implementation phases.
- Policy decisions are advisory metadata only.
