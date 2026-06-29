# Nexus N100-10 Communications Assistant

Sprint N100-10 adds a communication drafting assistant contract. It is server-side/test-only in this phase and is not loaded into the Standard User runtime.

## Supported Drafts

- provider questions
- job inquiry draft
- training inquiry draft
- message draft
- email draft
- call script
- professional rewrite
- copyable draft

Drafts are prepared for user review and are copyable/editable by the user. Nexus does not send, call, contact providers, upload files, submit forms, or auto-follow-up.

## Blocked Communication Actions

- send email
- send SMS/message
- send WhatsApp
- make phone call
- contact provider
- attach/upload resume
- submit form
- auto-follow-up

If a user asks Nexus to send or call directly, N100-10 returns a blocked no-send response and can suggest preparing text instead.

## Safety Boundary

Every communication draft includes `canExecute: false`, `executionAuthority: "none"`, `sendSupported: false`, `callSupported: false`, `providerContactSupported: false`, audit metadata, and blocked action metadata.

This phase adds no visible UI, no provider handoff, no email service, no SMS/WhatsApp/Telegram service, no calls, no backend writes, no external navigation, and no file upload behavior. Future sending or draft-provider integration requires explicit permission, confirmation, audit, and provider readiness gates.
