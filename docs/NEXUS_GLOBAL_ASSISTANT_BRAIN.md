# Nexus Global Assistant Brain

Phase 11 consolidates Nexus Standard User command handling into a visible, no-execution assistant brain plan.

## Purpose

The global assistant brain helps Nexus:

- understand the user's goal;
- classify the domain and risk tier;
- select a workflow, packet builder, and mode dispatcher;
- route to Live Knowledge only when configured and useful;
- preserve follow-up state instead of ending with dead responses;
- connect review queue, confirmation, and final execution gate expectations;
- show clear user-facing status.

## Covered Command Examples

The brain plan handles open-ended commands such as:

- "Nexus, help with diabetes intake."
- "Nexus, review my blood pressure."
- "Nexus, research crop disease guidance for maize."
- "Nexus, plan a farm visit."
- "Nexus, prepare a WhatsApp message to a provider."
- "Nexus, find workforce training resources."
- "Nexus, prepare source-backed telehealth questions."
- "Nexus, research vendor options for cold storage."
- "Nexus, prepare a mobile clinic visit packet."
- "Nexus, queue this action because the lane is inactive."

## Runtime Contract

Each brain plan includes:

- `schemaVersion: "nexus-global-assistant-brain.v1"`;
- `intentId`;
- `mode`;
- `domain`;
- `workflowId`;
- `packetType`;
- `actionClassifier`;
- `routing`;
- `followUpState`;
- `userFacingStatus`;
- `auditPosture`;
- `noExecutionAuthorized: true`;
- `localOnly: true`.

## Safety Posture

Phase 11 does not execute provider handoff, calls, messages, WhatsApp, Telegram, email, payments, purchases, pharmacy workflows, prescriptions, location sharing, camera, medical action, emergency routing, or backend writes.

High-risk actions remain preparation-only and require a future final execution gate, user confirmation, provider readiness, permission state, audit coverage, and outcome verification before any live action can be enabled.

## Live Knowledge Routing

Source-backed or research-style domains can route to the existing Live Knowledge rail when configured. If retrieval is disabled or missing credentials, Nexus must remain honest and use built-in safe guidance or preparation-only packets without fake citations.

## Follow-Up State

Every brain plan includes a `followUpState.nextPrompt` so Nexus can ask for missing details or explain the next safe step. This prevents dead-end responses while preserving review-only behavior.

## User-Facing Output

The Standard User response card displays the plan summary with workflow, packet, priority, Live Knowledge routing, confirmation posture, final gate posture, and next prompt.
