# Nexus Global Agriculture Intelligence

Phase 2 turns the existing Agriculture Help path into a source-aware agriculture intelligence lane. It prepares structured packets for crop support, farm planning, and field visit preparation while preserving Nexus safety gates.

## What It Adds

Nexus can now prepare these packet types:

- `agriculture_support_packet`
- `crop_support_packet`
- `crop_disease_guidance_packet`
- `pest_management_guidance_packet`
- `soil_fertility_guidance_packet`
- `irrigation_planning_packet`
- `farm_planning_packet`
- `field_visit_packet`
- `agriculture_live_knowledge_packet`
- `agriculture_resource_handoff_packet`
- `agriculture_audit_event_packet`

The Standard User can ask agriculture questions from the normal Ask Nexus flow or the Agriculture Help mode panel. Nexus classifies the request, checks Live Knowledge when configured, and returns a visible agriculture packet with practical next steps.

## Supported Agriculture Questions

The lane covers:

- crop disease and pest questions
- soil, irrigation, fertilizer, climate, and yield questions
- crop calendar and input planning
- water planning and climate-smart practices
- harvest planning
- post-harvest storage guidance
- logistics/resource planning questions
- marketplace/vendor research handoff questions
- field visit preparation

## Packet Contents

Each packet includes:

- issue summary
- user goal, domain, mode, and issue category
- crop/farm context when supplied by the user
- likely causes to check
- source-backed guidance when citations are available
- honest missing-config state when retrieval credentials are absent
- local-condition uncertainty
- recommended field checks
- agronomist or extension review reminder
- agronomist/extension review questions
- next safe actions
- downstream confirmation requirement
- queue/review/audit state
- export-ready packet status

## Standard User UI

The Agriculture Help workflow exposes visible sections for Crop Support, Crop Disease, Pest Management, Soil/Fertility, Irrigation/Water, Farm Planning, Field Visit, Harvest/Post-Harvest, Logistics Handoff, and Vendor Research Handoff. Each section opens through the normal Nexus command path and prepares a packet rather than triggering a purchase, vendor contact, location share, logistics booking, or field dispatch.

## Live Knowledge Behavior

When a Live Knowledge provider is configured, Nexus can attach retrieved citations to the agriculture packet. When retrieval is disabled, missing, or fails safely, Nexus labels that state honestly and does not fabricate citations or source claims.

## Safety Boundary

Agriculture intelligence is educational, planning, and review support. It does not:

- purchase inputs
- contact vendors
- share location
- dispatch a field visit
- guarantee crop disease diagnosis
- claim local certainty without field evidence

Vendor contact, input purchase, location sharing, and field dispatch require separate confirmation-gated workflows.

## Recommended Review Path

For important crop loss, pesticide, fertilizer, disease, or field-dispatch decisions, Nexus directs the user to confirm with a local agronomist, extension officer, or trusted agriculture expert.
