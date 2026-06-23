# Nexus Low-Risk Suggestion Display Plan

Status: Phase 8C audit/spec only.

Current checkpoint before implementation: `4fd503afec409e7b312ee56b74908e18a870b05b`

## Purpose

This plan defines how Nexus Workforce AI can later show low-risk suggestions from `metadata.agentAction.selectedToolId` without making metadata authoritative. Suggestions must help users notice available workflows, but they must never execute actions, auto-open screens, stage pending actions, confirm actions, or replace existing routers.

Nexus remains a Level 4 controlled agentic assistant. Existing routers, workflow buttons, role checks, and confirmation gates remain authoritative.

## Eligible Selected Tool IDs

Only these low-risk IDs are eligible for future display suggestions:

| `selectedToolId` | Suggested label | Minimum behavior |
| --- | --- | --- |
| `workforce.training` | `Open Training` | User-click-required |
| `workforce.job_pathways` | `View Job Pathways` | User-click-required |
| `workforce.field_support` | `View Field Support` | User-click-required |
| `learning.start` | `Open Learning` | User-click-required |
| `marketplace.agritrade` | `Browse AgriTrade` | User-click-required |
| `agriculture.help` | `Get Agriculture Help` | User-click-required or display-only |

Broad assistant prompts such as `what can you do`, `help`, and `guide me` should not show a tool suggestion unless a later phase defines a separate assistant/help tool.

## Explicitly Excluded Suggestions

Do not show actionable suggestion buttons for:

- health intake
- telehealth, video, or camera
- provider calls or outbound calls
- emergency health
- map or location permission
- sell crop, order, payment, or message actions
- job application submission
- logistics dispatch, cancellation, or mutation
- outbound notifications or messages
- document sharing or exporting
- admin controls
- voice provider activation
- live integrations
- drone scans or operational field evidence

Excluded prompts should keep `selectedToolId: null` or be ignored by suggestion UI.

## Safe UI Behavior Rules

Future suggestions must follow these rules:

- A suggestion appears only after an assistant response.
- A suggestion is optional and phrased as `You can...`.
- The user must click before anything happens.
- Existing workflow/button handlers remain authoritative after a user click.
- Metadata never opens workflows directly.
- Metadata never executes actions.
- Metadata never stages pending actions.
- Metadata never confirms actions.
- Metadata never bypasses routers, permissions, role checks, or confirmation gates.
- A suggestion disappears or updates on the next prompt.
- No suggestion appears for high-risk, null, ambiguous, privacy-sensitive, permission-sensitive, or unsupported `selectedToolId` values.
- No suggestion claims completion.

## Unsafe Wording

Prohibited wording:

- `I opened...`
- `I submitted...`
- `I contacted...`
- `I dispatched...`
- `I diagnosed...`
- `I used your location...`
- `Payment processed...`
- `Application submitted...`

Allowed wording:

- `You can open Training.`
- `View Job Pathways.`
- `Browse AgriTrade.`
- `I can guide you through this workflow.`
- `I'll ask before any high-impact action.`

## Implementation Phases

Phase 8C: Audit/spec only.

- Document eligible IDs, excluded workflows, safe UI rules, and QA expectations.
- Add static QA to protect the non-authoritative boundary.
- No visible UI changes.

Phase 8D: Hidden/display-off suggestion builder helper.

- Add a frontend helper that can build suggestion objects from the allowed low-risk IDs.
- Keep the helper disabled or internal-only.
- Do not render visible suggestions yet.
- Do not call workflow openers from the helper.

Phase 8E: Debug-only suggestion observation QA.

- Verify the helper produces safe suggestion objects for low-risk IDs.
- Verify high-risk/null IDs produce no suggestion.
- Verify no workflow opener, route mutation, confirmation, or staging is called from metadata.

Phase 8F: Visible Level 1 display-only labels.

- Show non-clickable labels for one or two low-risk IDs.
- Labels are informational only.
- Labels must not claim completion.

Phase 8G: Level 2 user-click-required suggestions.

- Add user-click-required suggestions for a small low-risk set such as Training or Learning.
- User click calls the existing authoritative button/workflow handler.
- No metadata-only path may open a workflow by itself.

Phase 8H: Manual browser validation and demo readiness checkpoint.

- Validate Standard User typed/global prompts.
- Validate suggestion reset on next prompt.
- Validate high-risk prompts do not show suggestions.
- Validate telehealth, calls, music, learning, maps, and Admin/full Health behavior remain unchanged.

## QA Strategy

Static QA should verify:

- this plan exists;
- eligible low-risk IDs are documented;
- high-risk exclusions are documented;
- user-click-required behavior is documented;
- auto-open, execution, staging, and confirmation from metadata are prohibited;
- static registry remains non-runtime;
- frontend currently observes `agentAction` metadata only;
- frontend does not execute, route, open workflows, stage, confirm, or trigger modals from metadata;
- `AgriNexus`, `AgriTrade`, and agriculture compatibility remain documented.

Future runtime QA should verify:

- low-risk suggestions are optional and user-click-required;
- suggestions disappear or update on the next prompt;
- unsafe wording is absent;
- high-risk/null selectedToolId values show no actionable suggestions;
- existing routers and confirmation gates remain authoritative.

## Demo Implications

For demos, low-risk suggestions can eventually make Nexus feel more helpful without implying autonomy. The safe demo line is:

`Nexus can suggest a safe next place to go, but you choose it. It will ask before high-impact actions.`

Do not present suggestions as proof that Nexus has executed, submitted, contacted, dispatched, diagnosed, paid, used location, or connected to live services.
