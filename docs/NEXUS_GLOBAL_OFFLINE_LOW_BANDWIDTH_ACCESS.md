# Nexus Global Offline, Low-Bandwidth, and Africa-First Access Layer

Nexus now includes a visible global offline and low-bandwidth access layer inside the Standard User command center. The layer supports rural, mobile-first, low-connectivity workflows while keeping live provider execution and source-backed claims honest.

This is a real platform capability for resilience. It does not claim that offline mode can contact providers, refresh live citations, dispatch services, process payments, share location, or execute regulated workflows.

## Runtime Behavior

The access layer reports:

- online or offline browser state
- cached shell and safe built-in guidance posture
- offline-eligible or queued packet count
- stale-data warning
- low-bandwidth and Africa-first access notes
- local-only queue behavior
- restore behavior when connectivity returns

## Packet Types

The access layer uses:

- `offline_access_packet`
- `low_bandwidth_guidance_packet`
- `stale_data_warning_packet`

These packets are local review artifacts. They do not authorize provider access, dispatch, live source retrieval, payments, messaging, location sharing, telehealth launch, pharmacy/refill execution, marketplace purchase, or emergency routing.

## UI Actions

The Standard User command center can:

- show the offline queue
- prepare a low-bandwidth packet
- show a stale-data warning

The low-bandwidth packet is summary-first and review-only. It can help users organize next steps for agriculture, health access, learning, workforce, marketplace, maps, communications, and provider preparation when connectivity is poor.

## Stale Data And Source Honesty

Previously retrieved or cached guidance must not be presented as current. Nexus must refresh with a configured source before making source-backed currency claims. If Live Knowledge is disabled, unconfigured, offline, or unavailable, Nexus should say that fresh citations are unavailable and avoid fabricated sources.

## Queue And Restore Policy

While offline or low-bandwidth:

- external actions stay local and review-only
- queued work remains visible
- retry requires explicit user action
- restored connectivity does not authorize automatic submission
- provider, vendor, payment, communications, telehealth, pharmacy, emergency, and location workflows still require credentials, consent, confirmation, audit, and outcome recording

## Africa-First Access Design

The layer is designed for:

- small-phone layouts
- text-first summaries
- low-bandwidth user guidance
- multilingual-ready labels
- community health worker and field-agent support
- agriculture, health access, workforce, learning, marketplace, maps, and communications continuity

## Safety Boundaries

Nexus must not use offline or low-bandwidth mode to:

- claim live provider access
- claim fresh source-backed information when offline
- auto-sync queued items
- send messages or calls
- launch telehealth or pharmacy workflows
- dispatch mobile clinics, transport, field visits, logistics, drones, or emergency help
- process marketplace purchases or payments
- request or share location
- expose secrets or hidden metadata
