# Nexus Source-Backed Response Runtime Contract Audit

Phase 18A documents the runtime answer posture Nexus must use before real provider, data, or regulated action connectors are activated. Nexus is being built as a full multilingual access platform for farmers and underserved communities, so answers must be useful, source-aware, permission-aware, and honest about what is connected now versus what requires a verified source, provider integration, consent, approval, and audit logging.

This phase is documentation and deterministic QA only. It does not enable external execution, provider calls, payments, medical record access, pharmacy execution, transportation dispatch, emergency dispatch, marketplace buying or selling, or any weakened safety gate.

## Audit Summary

Reviewed areas:

- `docs/NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md`
- `public/nexus-source-backed-answer-contract.js`
- `public/nexus-provider-source-universe.js`
- `public/nexus-platform-capability-model.js`
- `public/nexus-platform-action-planner.js`
- `public/nexus-provider-onboarding-model.js`
- Phase 17 safe response layer in `public/app.js` and `server.js`
- Existing confirmation, provider handoff, audit, contact/call, low-risk suggestion, policy, planner, and no-execution QA guards

Current runtime posture:

- Nexus can provide general guidance, prototype foundation explanations, source-readiness explanations, and safe next-step preparation.
- Source-backed answer contracts already default live data and dangerous action flags to false.
- Platform action plans default `executionAllowed` to false.
- Provider/source registry and onboarding contracts are additive and disabled by default.
- Phase 17 safe responses explain that real-time provider and source integrations require verified connectors, consent, user approval, and audit logging.

Gaps to close before real-world access answers can be activated:

- Runtime responses need explicit state names so QA can distinguish general guidance from source-backed guidance, provider directory results, prepared action previews, permission gates, privacy gates, emergency guidance, blocked/unsupported responses, and unavailable-source fallback.
- Every answer must disclose whether it is general information, saved/local directory context, verified source-backed information, or provider-backed information.
- Answers must not imply provider availability, local eligibility, live scheduling, live payments, prescription processing, location sharing, medical record access, emergency dispatch, or marketplace execution unless a connector supports it and the required permission, consent, approval, provider confirmation, and audit controls are active.
- Audit expectations must be stated even where runtime audit logging is not yet fully implemented.

## Runtime Response States

### `general_guidance`

Allowed when:

- The user asks for broad educational, navigational, or explanatory help.
- No local, live, partner, or regulated source is being claimed.
- The answer is clearly framed as general information or safe preparation.

Forbidden when:

- The user asks for verified local provider availability, current prices, live schedules, payments, prescription/refill actions, medical record access, emergency response, or any source-dependent fact.
- The response would be safety-critical medical, legal, financial, or emergency guidance.

User should see:

- Plain-language guidance.
- A disclosure that the answer is general and not verified local guidance.
- A safe next step such as "I can help prepare the information you need."

Must disclose:

- "This is general information."
- "A verified source is required before I can confirm local availability or current status."

Required source/provider metadata:

- Source type: `none` or `general`.
- Source status: `not_connected_yet` or `not_required_for_general_guidance`.
- Freshness: not applicable.

Permission required:

- None, unless the answer asks for personal information.

Audit event:

- `response.general_guidance_shown` with intent, language, source status, risk tier, and no-execution flag.

QA must validate:

- General guidance is not presented as verified source-backed guidance.
- No provider availability, location, payment, record, prescription, emergency, or marketplace action is claimed.

### `source_backed_guidance`

Allowed when:

- Nexus has a named public, partner, or approved source with ownership, status, and freshness metadata.
- The source supports the specific question and the response is not executing an external action.

Forbidden when:

- No source owner, source status, or freshness metadata exists.
- The answer would imply a regulated action is complete.
- The source is stale and the response does not disclose that limitation.

User should see:

- Guidance tied to a named source or source class.
- Source owner or source type.
- Freshness or stale/unavailable status.
- Limitations and next step.

Must disclose:

- Whether the source is public, partner-provided, regulated, saved local directory, or live connector data.
- Whether the source is current, stale, unverified, or not connected yet.

Required source/provider metadata:

- Source owner.
- Source type.
- Source status.
- Last verified or last updated when available.
- Confidence/limitations.

Permission required:

- None for public/general source display.
- Consent before personal or regulated data is used.

Audit event:

- `response.source_backed_guidance_shown` with source owner, source type, freshness, limitations, and no-execution flag.

QA must validate:

- Source-backed answers include source metadata and do not silently become provider handoffs.

### `provider_directory_result`

Allowed when:

- Nexus has a provider directory entry or verified partner/source record.
- The response is limited to display, review, or next-step preparation.
- Provider status and contact boundary are clear.

Forbidden when:

- Nexus would imply the provider is live, available now, accepting the user, or contacted without supporting source data.
- Nexus would call, message, schedule, share user data, or open a provider handoff automatically.

User should see:

- Provider/source name.
- Service type.
- Location/coverage when sourced.
- Directory status and freshness.
- Clear statement that no provider has been contacted.

Must disclose:

- "This is a directory/source result."
- "Provider contact or scheduling requires your approval and an active provider connector."

Required source/provider metadata:

- Provider/source name.
- Provider/source type.
- Directory/source owner.
- Freshness and verification status.
- Connector status.

Permission required:

- User approval before contact, scheduling, sharing details, or opening a provider handoff.
- Consent and provider confirmation for regulated healthcare actions.

Audit event:

- `response.provider_directory_result_shown` with provider type, source owner, freshness, connector status, and no-contact flag.

QA must validate:

- Directory results do not claim live availability without verified provider data.
- No provider is silently contacted.

### `prepared_action_preview`

Allowed when:

- Nexus can safely prepare a next step without execution.
- The preview is low-risk or clearly staged for later review.
- The response does not imply the action is complete.

Forbidden when:

- The preview includes executable payloads for calls, messages, payment, location, camera, marketplace transaction, records, prescriptions, emergency dispatch, or provider contact.
- The UI auto-opens workflows or provider surfaces without user action.

User should see:

- What Nexus can prepare.
- What is missing.
- What permission/connector is required.
- Non-executing language such as "I can prepare the next step."

Must disclose:

- "No action has been taken."
- "Execution requires approval and the required connector."

Required source/provider metadata:

- Action type.
- Risk tier.
- Source/connector readiness.
- Missing requirements.

Permission required:

- None to preview low-risk education/navigation.
- User click confirmation before staging medium-risk workflows.
- Explicit confirmation, consent, and audit before high-risk future execution.

Audit event:

- `response.prepared_action_preview_shown` with action type, risk tier, requirements, and no-execution flag.

QA must validate:

- Preview does not trigger provider handoff, permission prompt, payment, dispatch, call, message, marketplace execution, camera, location, health action, or account action.

### `permission_required`

Allowed when:

- The user asks for an action that may be possible only after explicit permission or confirmation.
- Nexus can explain the permission boundary without activating it.

Forbidden when:

- The response requests sensitive permission before explaining why.
- The response treats vague words such as "okay" as approval for high-risk execution.

User should see:

- The specific permission required.
- Why it is required.
- What will and will not happen.
- A clear cancel/not-now path.

Must disclose:

- "I need your approval before I can continue."
- "This does not run until you confirm."

Required source/provider metadata:

- Permission type.
- Action type.
- Provider/connector status.
- Audit requirement.

Permission required:

- Explicit user approval.
- Stronger identity/role/provider authorization for regulated or high-risk actions.

Audit event:

- `response.permission_required_shown` and later `permission.accepted`, `permission.rejected`, or `permission.cancelled`.

QA must validate:

- Permission-required responses do not execute from first utterance and do not accept vague confirmation for high-risk actions.

### `privacy_gate_required`

Allowed when:

- The request touches medical records, health details, contact details, location, account/profile information, payment data, identity, emergency contacts, or marketplace buyer/seller private data.
- Nexus must explain privacy, consent, and minimum necessary data before continuing.

Forbidden when:

- Nexus exposes private details in the response.
- Nexus asks for or uses regulated/private data without consent.

User should see:

- A privacy/consent boundary.
- A minimum-necessary explanation.
- What data would be needed and why.
- A no-action-taken statement.

Must disclose:

- "This requires consent and audit logging."
- "I cannot access or share private data unless the required connection and consent are active."

Required source/provider metadata:

- Data class.
- Consent status.
- Connector status.
- Compliance requirement.

Permission required:

- Explicit consent.
- Identity or role verification where required.
- Provider authorization for regulated health data when applicable.

Audit event:

- `response.privacy_gate_required_shown` with data class, consent status, action type, and no-access flag.

QA must validate:

- No medical records, contacts, location, payment/account, or health details are silently accessed or displayed.

### `emergency_escalation_guidance`

Allowed when:

- The user indicates immediate danger, medical emergency, violence, unsafe condition, or urgent risk.
- Nexus can guide the user to local emergency services without dispatching.

Forbidden when:

- Nexus claims it dispatched emergency services, contacted a provider, opened location sharing, or notified anyone.
- Nexus delays urgent guidance behind nonessential questions.

User should see:

- Direct guidance to contact local emergency services now.
- A statement that Nexus cannot dispatch emergency help unless a verified emergency connector is active and approved.
- Safe supportive next steps only after the urgent guidance.

Must disclose:

- "If anyone is in immediate danger, contact local emergency services now."
- "Nexus has not dispatched emergency help."

Required source/provider metadata:

- Emergency connector status.
- Jurisdiction/source when available.
- If unavailable, source status: `not_connected_yet`.

Permission required:

- Future emergency connector execution would require user approval where possible, provider/public safety confirmation, audit logging, and jurisdictional compliance.

Audit event:

- `response.emergency_escalation_guidance_shown` with no-dispatch flag and emergency connector status.

QA must validate:

- Emergency prompts never simulate dispatch.
- Location, contact, provider, or emergency service actions do not auto-execute.

### `blocked_or_unsupported`

Allowed when:

- The request asks Nexus to perform an unsupported, unsafe, unavailable, or forbidden action.
- A required connector, source, approval, consent, role, provider confirmation, or compliance gate is missing.

Forbidden when:

- Nexus silently falls back to a different action that could mislead the user.
- Nexus says "done" or implies partial execution.

User should see:

- A clear reason the request cannot be executed.
- A safer alternative.
- What would be required in the future.

Must disclose:

- "I cannot execute that action until the required connection is active."
- "No action has been taken."

Required source/provider metadata:

- Missing connector/source/permission.
- Risk tier.
- Unsupported action category.

Permission required:

- None to block.
- Future action may require approval, consent, provider confirmation, and audit.

Audit event:

- `response.blocked_or_unsupported_shown` with reason, risk tier, and blocked action.

QA must validate:

- Unsupported actions remain disabled by default and do not route into execution.

### `unavailable_source_fallback`

Allowed when:

- The user asks for source-backed or provider-backed information but the source is missing, stale, offline, unverified, or not connected yet.
- Nexus can still offer general guidance or preparation without pretending to have the missing data.

Forbidden when:

- Nexus invents source facts.
- Nexus presents general advice as verified local guidance.
- Nexus implies real-time availability without a live connector.

User should see:

- The source is unavailable or not connected yet.
- What Nexus can still help prepare.
- What source or provider connection is required.

Must disclose:

- "I do not have a verified source for that yet."
- "I can give general guidance or prepare what to check next."

Required source/provider metadata:

- Requested source category.
- Source status.
- Connector status.
- Freshness limitation.

Permission required:

- None for fallback guidance.
- Approval/consent if the fallback requests personal data.

Audit event:

- `response.unavailable_source_fallback_shown` with requested source category, source status, and fallback path.

QA must validate:

- Missing sources produce fallback language, not fabricated facts or external actions.

## Service Domain Requirements

Each service domain must use the response states above and must not jump directly from raw intent to execution.

| Service domain | Default allowed response | Source/provider requirement | Permission/consent/audit posture |
| --- | --- | --- | --- |
| agriculture support | `general_guidance`, `source_backed_guidance`, `prepared_action_preview` | agriculture extension, crop/pest authority, weather, soil, irrigation, cooperative, or partner source | audit source use; consent before sharing farmer data |
| healthcare access | `general_guidance`, `provider_directory_result`, `privacy_gate_required`, `permission_required` | clinic, hospital, telehealth, mobile clinic, public health, or partner source | consent, approval, provider confirmation where applicable, audit |
| pharmacy support | `general_guidance`, `provider_directory_result`, `privacy_gate_required`, `permission_required` | pharmacy directory, prescription/eRx partner, regulated source | consent, pharmacist/provider approval for regulated actions, audit |
| mobile clinics | `provider_directory_result`, `unavailable_source_fallback`, `permission_required` | mobile clinic schedule connector or public/partner schedule source | approval before booking/routing; audit |
| transportation | `source_backed_guidance`, `provider_directory_result`, `permission_required` | transportation provider, route source, eligibility source | approval before booking/sharing location; audit |
| workforce/jobs | `general_guidance`, `source_backed_guidance`, `prepared_action_preview` | workforce program, training provider, certification provider, employer/job feed | approval before applying or contacting employer; audit |
| education/training | `general_guidance`, `source_backed_guidance`, `prepared_action_preview` | course/content provider, training catalog, localization source | low-risk review by default; audit source use |
| marketplace/AgriTrade | `general_guidance`, `source_backed_guidance`, `prepared_action_preview`, `permission_required` | AgriTrade partner, buyer/seller, market price, logistics source | approval before buy/sell/message/payment; audit |
| payments | `blocked_or_unsupported`, `permission_required`, `privacy_gate_required` | approved payment processor connector | explicit approval, compliance, audit; execution disabled by default |
| medical records | `privacy_gate_required`, `blocked_or_unsupported`, `unavailable_source_fallback` | FHIR/EHR connector and regulated provider source | identity, consent, provider authorization, minimum necessary data, audit |
| emergency pathways | `emergency_escalation_guidance`, `blocked_or_unsupported` | emergency/public safety connector and jurisdiction rules | no simulated dispatch; future execution requires approval where possible, provider/public safety confirmation, audit |
| community resources | `general_guidance`, `source_backed_guidance`, `provider_directory_result` | NGO/community service/government agency source | consent before sharing personal data; audit |

## Safety Principles

Nexus must follow these safety principles in every runtime answer:

- Do not claim a source exists if it does not.
- Do not imply provider availability unless source/provider data supports it.
- Do not present general advice as verified local guidance.
- Do not silently escalate to a provider.
- Do not silently contact anyone.
- Do not silently access location.
- Do not silently access records.
- Do not silently initiate payment.
- Do not silently initiate marketplace transactions.
- Do not simulate emergency dispatch.
- Do not make final medical, legal, financial, or safety-critical decisions.
- Always distinguish "I can guide you" from "I can connect you".
- Always distinguish "general information" from "verified provider-backed information".

## Runtime Disclosure Rules

Every source-aware answer should include these layers where applicable:

- Source status: none, general, saved local directory, public source, partner source, regulated source, live connector, stale source, or not connected yet.
- Freshness: last updated, last verified, stale-after rule, or "requires verified source".
- Provider status: not contacted, directory-only, provider-ready, partner-required, compliance-required, or future execution.
- Action status: no action taken, prepared only, permission required, consent required, blocked, or unavailable fallback.
- Audit status: what would be recorded now and what must be recorded before future execution.

## Permission And Audit Rules

Minimum runtime rules:

- General guidance may be shown without permission.
- Public source-backed guidance may be shown without permission if it does not include personal data.
- Partner or regulated data requires source verification and compliance review before live claims.
- Provider contact, scheduling, messaging, calls, location sharing, payments, prescription/refill actions, marketplace transactions, medical record access, and emergency dispatch require explicit user approval before any future execution.
- Health, medical record, prescription, identity, location, payment, emergency, and private contact workflows require consent and audit logging.
- Provider confirmation is required where provider-side action or regulated care workflow is involved.
- Vague confirmations must not authorize high-risk actions.
- Audit logging must not itself trigger execution.

## Kenya Music Browser Observation

Known non-blocking observation from prior Standard User browser automation:

- Kenya music caption overwrite was observed during browser automation.
- No external music service or unsafe action triggered.
- No console warn/error was observed.
- Static/source/QA behavior remained safe.
- Recommendation: future UI/content integrity validation should verify that entertainment captions are not overwritten unexpectedly, but this is not a blocker for source-backed response contract work.

## Future Work

Recommended next phases:

- Add runtime response-state metadata to safe answers without changing execution behavior.
- Add source-status display helpers for user-facing answers.
- Add unavailable-source fallback copy tests for each service domain.
- Add provider-directory source labeling tests before live connector activation.
- Add audit-event schema mapping for every response state.
- Add manual browser validation that verifies "general guidance" versus "verified provider-backed information" language stays visible.
