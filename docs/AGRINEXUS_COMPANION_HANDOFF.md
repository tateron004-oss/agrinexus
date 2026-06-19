# AgriNexus Companion Handoff

Last updated: 2026-06-19

## Companion Constitution Summary

The AgriNexus Companion work makes Nexus behave as a warm, practical voice companion that can also operate the platform. The guiding philosophy is:

1. Conversation First.
2. Workflow Second.
3. Execution Third.

Nexus should understand the user's request before launching workflows, should defer workflows for need-based or ambiguous requests, and should require confirmation before risky or irreversible actions.

## Phases Completed

- Phase 1: Added Companion Understanding classification before existing agent routing.
- Phase 2: Added route outcome metadata and mismatch detection.
- Phase 3: Added workflow-offer behavior for conversation-first need, question, clarification, and support inputs.
- Phase 3B: Fixed informational AgriTrade and buyer-contact prompts so explanation stays conversational before buyer workflow staging.
- Phase 4: Added confirmation gates for risky or irreversible actions.
- Phase 5: Improved spoken response quality, multilingual offer wording, and buyer/seller confirmation language.
- Phase 6: Added this handoff and a regression checklist.

## Files Changed

The companion work primarily changed:

- `server.js`
- `package.json`
- `scripts/companion-understanding-smoke.js`
- `scripts/companion-route-mismatch-smoke.js`
- `scripts/companion-workflow-offer-smoke.js`
- `scripts/companion-confirmation-gate-smoke.js`
- `scripts/companion-response-quality-smoke.js`
- `scripts/voice-response-regression.js`
- `docs/AGRINEXUS_COMPANION_HANDOFF.md`
- `docs/COMPANION_REGRESSION_CHECKLIST.md`

Some files may already have unrelated local edits in this workspace. Review `git diff` before committing.

## Key Functions Added Or Modified

In `server.js`:

- `companionUnderstandingClassification()`: classifies user input into Companion Constitution intents before routing.
- `companionRouteOutcomeMetadata()`: records actual route behavior and mismatch metadata.
- `companionWorkflowOfferForCommand()`: builds conversation-first workflow offer responses.
- `companionRequiredWorkflowOfferPhrase()`: identifies need-based inputs that must defer workflows.
- `companionLocalizedWorkflowOfferResponse()`: provides deterministic localized offer wording for tested multilingual paths.
- `companionWorkflowOfferResult()`: converts eligible workflow-like outcomes into deferred companion responses.
- `isInformationalBuyerConversation()`: detects buyer/crop-selling explanation prompts.
- `informationalBuyerConversationResponse()`: answers AgriTrade buyer-contact questions conversationally first.
- `phase4RiskyActionForCommand()`: detects risky actions that require confirmation.
- `stageAgentAction()`: stores pending confirmation state and exposes confirmation metadata.
- `executePendingAgentAction()`: executes only an existing pending staged action after accepted confirmation.
- `isExplicitConfirmationCommand()` and `isVagueConfirmationCommand()`: distinguish clear confirmations from vague acknowledgements.

## Routing Behavior Before And After

Before:

- Short inputs like `Work`, `Medicine`, or crop distress could open workflows too quickly.
- Buyer/crop-selling questions could route directly to buyer-contact workflows.
- Risky commands such as sending messages, calling providers, creating orders, or running provider tests could be treated like ordinary commands.
- Some voice responses sounded like route status text instead of spoken guidance.

After:

- Need-based and ambiguous inputs defer workflow opening and ask one useful question first.
- Informational buyer and AgriTrade prompts route to `conversation.open_reasoning` before any buyer-contact workflow.
- Risky actions are staged with `confirmationRequired: true` and `executionDeferred: true`.
- Low-risk navigation commands such as `Open map`, `Show workforce dashboard`, `Open learning`, and `Open trade dashboard` remain immediate.
- Responses are shorter, warmer, and more TTS-friendly for the tested companion paths.

## Confirmation Gate Rules

Nexus requires confirmation before:

- Sending messages.
- Calling people or providers.
- Submitting applications.
- Creating orders.
- Creating or sharing medical/care/privacy records.
- Scheduling appointments.
- Sharing personal information.
- Making purchases or payments.
- Changing language settings.
- Issuing certificates.
- Completing lessons.
- Running admin or provider tests.
- Starting outbound communication.

Accepted confirmations for staged actions include:

- `Yes`
- `Confirm`
- `Do it`
- `Send it` where supported by existing confirmation handling

Vague phrases such as `okay`, `sounds good`, `maybe`, and `let's see` do not execute high-risk staged actions. If there is no pending staged action, `Yes` returns a clarification response instead of executing a random action.

Pending state is stored on `db.profile.agentPendingAction`.

## Workflow Deferral Rules

Workflow deferral applies when the Companion Understanding intent is conversation-first and the existing router would otherwise open or stage a workflow too soon.

Conversation-first intents include:

- `conversation.need`
- `conversation.clarify`
- `conversation.support`
- `conversation.question`

Examples that now defer workflow behavior:

- `Work`
- `Medicine`
- `I need medicine`
- `My crops are failing`
- `Help me sell maize`

Explicit workflow commands still route as actions when low risk or become staged confirmations when risky:

- `Open map`
- `Start health intake`
- `Show workforce dashboard`
- `Contact the buyer`
- `Send the buyer a message`

## Multilingual Behavior

The companion path has tested coverage for:

- English
- Spanish
- French
- Swahili
- Portuguese response-quality paths

The smoke tests verify that selected target language is preserved for the Phase 5 response-quality paths and that need-based multilingual inputs remain conversation-first.

Known limitation: Portuguese is handled for Phase 5 response-quality paths, but it is not yet a full profile language like English, Spanish, French, Swahili, and Arabic.

## Smoke Test Commands

Run these before changing voice, chat, router, workflow-offer, confirmation, or translation-adjacent behavior:

```powershell
npm.cmd run companion:understanding-smoke
npm.cmd run companion:route-mismatch-smoke
npm.cmd run companion:workflow-offer-smoke
npm.cmd run companion:confirmation-gate-smoke
npm.cmd run companion:response-quality-smoke
npm.cmd run voice:response-check
npm.cmd run conversation:smoke
```

## Known Risks

- Portuguese is not yet a full profile language. It is covered in Phase 5 response-quality paths only.
- Windows parallel smoke runs have occasionally produced transient temp DB file-open errors. Affected tests passed when rerun solo.
- The companion response-quality test verifies representative phrases and banned wording, not every possible prompt.
- Some broader voice/conversation routes still use older local response text outside the companion-focused paths.
- The app has many existing workflows and command aliases. Future changes should check both companion smokes and the wider voice regression.

## Future Improvements

- Promote Portuguese to a full profile language if product scope requires it.
- Expand response-quality smoke coverage for Arabic once deterministic local wording is added.
- Add more target-aware wording for customer, provider, buyer, seller, SMS, WhatsApp, and phone flows.
- Add serialized or unique temp DB handling if Windows file locks continue during parallel test runs.
- Broaden multilingual tests to cover session persistence after language changes.
- Add browser-level voice playback checks when a stable local browser test harness is available.

## What Future Developers Should Not Break

- Do not make conversation-first inputs open workflows immediately.
- Do not execute risky actions without confirmation metadata.
- Do not treat `Yes` as execution when no action is pending.
- Do not allow vague confirmations to execute high-risk pending actions.
- Do not route informational buyer/crop-selling questions directly to buyer-contact execution.
- Do not remove `companionUnderstanding` or `companionRouteOutcome` metadata from `/api/agent/command` responses.
- Do not weaken Phase 3 workflow deferral or Phase 4 confirmation gates to satisfy a single old workflow assertion.
- Do not replace warm spoken responses with route/status phrases such as `Workflow is ready`, `Command completed`, or `Module opened`.
