# Nexus Global Agriculture Intelligence

Phase 2 turns the existing Agriculture Help path into a source-aware agriculture intelligence lane. It prepares structured packets for crop support, farm planning, and field visit preparation while preserving Nexus safety gates.

## What It Adds

Nexus can now prepare these packet types:

- `agriculture_support_packet`
- `crop_support_packet`
- `farm_planning_packet`
- `field_visit_packet`

The Standard User can ask agriculture questions from the normal Ask Nexus flow or the Agriculture Help mode panel. Nexus classifies the request, checks Live Knowledge when configured, and returns a visible agriculture packet with practical next steps.

## Supported Agriculture Questions

The lane covers:

- crop disease and pest questions
- soil, irrigation, fertilizer, climate, and yield questions
- crop calendar and input planning
- water planning and climate-smart practices
- harvest planning
- field visit preparation

## Packet Contents

Each packet includes:

- issue summary
- likely causes to check
- source-backed guidance when citations are available
- local-condition uncertainty
- recommended field checks
- agronomist or extension review reminder
- next safe actions
- export-ready packet status

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
