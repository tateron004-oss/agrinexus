# NEXUS-AUTONOMY-1 AUT5 Workflow Artifacts

AUT5 adds inert workflow artifact helpers for controlled multi-step Nexus workflows. Artifacts are server-side/test-only data objects in this phase and are not wired into Standard User runtime, backend routes, provider execution, permissions, storage, or UI.

## Artifact Types

- `checklist`
- `comparison_table`
- `source_summary`
- `provider_questions`
- `application_prep_checklist`
- `message_draft_text_only`
- `email_draft_text_only`
- `call_script_text_only`
- `training_plan`
- `farm_issue_observation_checklist`
- `weather_planning_note`
- `marketplace_browse_comparison`
- `shipment_status_summary`

## Artifact Contract

Each artifact includes:

- `artifactId`
- `artifactType`
- `title`
- `content`
- `sourceRefs`
- `createdFromWorkflowId`
- `safetyPosture`
- `blockedActions`
- `noExecutionAuthorized`

Artifacts also carry:

- `data-read-only="true"`
- `data-execution-authority="false"`
- `data-provider-handoff="false"`

## Safety Boundary

Draft message and email artifacts are text only. Nexus does not send them.

Call script artifacts are text only. Nexus does not place calls.

Marketplace, shipment, weather, agriculture, training, and provider question artifacts remain read-only preparation surfaces. They do not navigate, contact providers, request permissions, submit forms, purchase items, dispatch help, or write backend state.

## QA

`scripts/nexus-aut5-workflow-artifacts-qa.js` verifies all artifact types, source reference preservation, draft/call-script boundaries, plan/session artifact generation, package alias wiring, safe-suite wiring, and absence of runtime hooks or executable metadata.
