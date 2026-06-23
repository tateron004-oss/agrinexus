# Nexus Selected Tool ID Alignment

Status: Phase 8B audit/spec with metadata-only alignment.

Current checkpoint before implementation: `ea447c39420bc23cb7eed570e02aa055d17ec785`

## Purpose

`metadata.agentAction.selectedToolId` is a non-authoritative hint that can help future observation, QA, and display-only suggestion work line up with the static Nexus Tool Registry. It is not a router, planner, executor, workflow opener, confirmation trigger, or live adapter selector.

The Phase 8B goal is to align a small set of explicit low-risk prompts with canonical registry-style IDs while preserving existing command routing and user-visible responses.

## Current Behavior

Before Phase 8B, `agentAction` was already attached additively to backend command responses with:

- `schemaVersion: "agent-action.v1"`
- `runtimeStatus: "metadata-only"`
- `source: "existing-router"`
- safety notes that existing routers remain authoritative
- legacy compatibility metadata for `AgriNexus`, `AgriTrade`, and agriculture support

The static registry at `docs/nexus-tool-registry.v1.json` remains a static/spec-only artifact. It is not imported, read, or referenced at runtime by `server.js` or `public/app.js`.

## Low-Risk Candidate Mappings

These mappings are safe as metadata only because they point to guidance, browse, or local/demo navigation concepts. They must not execute any workflow or replace existing routers.

| Prompt family | Metadata-only `selectedToolId` |
| --- | --- |
| `help me with training`, `start training`, `show training` | `workforce.training` |
| `show job pathways`, `career pathways`, `job pathway` | `workforce.job_pathways` |
| `help me in the field`, `field support` | `workforce.field_support` |
| `help me learn`, `open learning`, `start a course`, `resume lesson` | `learning.start` |
| `open AgriTrade`, `browse marketplace`, `open marketplace` | `marketplace.agritrade` |
| `agriculture help`, `crop help`, `farmer help`, `what can you do for a farmer` | `agriculture.help` |

Broad prompts such as `what can you do`, `help`, and `guide me` intentionally remain `selectedToolId: null` because they are assistant-level guidance, not one canonical tool.

## Excluded Mappings

The following prompt families must stay `selectedToolId: null` during this phase because they are high-risk, permission-sensitive, privacy-sensitive, or not ready for canonical metadata alignment:

- health intake
- telehealth
- video/camera preview or session creation
- provider calls and outbound calls
- emergency health
- map/location permission prompts
- crop sale, order, payment, buyer quote, or buyer message actions
- job application submission
- logistics dispatch, shipment mutation, route updates, or cancellation
- outbound notifications or messages
- document sharing/exporting
- admin controls
- live integrations
- drone scan or operational field evidence actions

## Metadata-Only Boundary

Phase 8B does not:

- change command routing behavior;
- make `selectedToolId` authoritative;
- make `agentAction` authoritative;
- make the static registry runtime-authoritative;
- import or read `docs/nexus-tool-registry.v1.json` from runtime code;
- let the frontend execute, route, auto-open workflows, or confirm based on metadata;
- rename endpoint paths, workflow IDs, route IDs, storage keys, native bridge fields, package names, or QA assumptions.

Existing routers, workflow buttons, Companion confirmation gates, role checks, and frontend handlers remain authoritative.

## QA Strategy

`scripts/nexus-selected-tool-id-alignment-qa.js` verifies:

- representative low-risk prompts receive the expected canonical `selectedToolId`;
- broad assistant prompts remain null;
- high-risk and permission-sensitive prompts remain null;
- response intent/status/text remain present and unchanged as primary behavior;
- `agentAction` remains metadata-only and existing-router sourced;
- the static registry remains non-runtime;
- the frontend still only observes `agentAction` metadata;
- AgriNexus, AgriTrade, and agriculture compatibility remain present;
- confirmation-gated actions remain protected.

## Recommended Next Phase

Phase 8C can add display-only suggestion labels for one or two low-risk mappings. Even then, suggestions should remain informational until a later user-click-required phase. Runtime routing, workflow opening, and execution should continue through existing authoritative routers and confirmation gates.
