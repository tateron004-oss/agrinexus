# Nexus RT2 - Live Provider Capability Registry

## Purpose

RT2 creates a central, static registry for live/read-only source provider capabilities. The registry is inert and is not loaded by Standard User runtime.

## Registered Providers

- weather
- agriculture-context
- news-security
- shipment-tracking
- job-search
- music-media

## Registry Contract

Each provider entry includes provider identity, domain, risk tier, default enabled state, required flags, required secrets by name only, optional config, live/mock/fixture support, allowed intents, blocked actions, explicit user input requirements, source citation requirements, confidence requirements, audit category, and provider status.

## Safety Defaults

All providers default off. Each provider forbids execution, provider contact, backend writes, browser geolocation, location permission, and real-world action behavior.

The registry may name environment variables, but must never contain secret values.

## Runtime Boundary

RT2 does not activate Standard User runtime behavior, provider calls, network calls, provider handoff, execution, location permission, browser geolocation, backend writes, calls, messages, payments, scheduling, medical/pharmacy behavior, emergency behavior, or marketplace transactions.

