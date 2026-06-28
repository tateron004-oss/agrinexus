# Nexus Sprint D7 - Flag-Gated Staged Action Preview Browser Validation

Current base after D6: `0fbbb8c09fdf6921220f119e70778ec8d38fb415`

Sprint D7 continues the post-AO3 Sprint D train. The audit train ended at AO3, and D7 remains a browser-validation checkpoint for the controlled D6 staged action preview rather than reopening AO4, AO5, or any additional audit phase.

Sprint D7 records the Standard User browser validation for the Sprint D6 controlled staged action preview. It is documentation and QA only. No runtime behavior, route behavior, backend behavior, storage behavior, provider handoff, permissions, or execution path changed in this phase.

## Validation Objective

Prove that the Sprint D6 staged action preview remains safely default-off in the normal Standard User build while preserving the existing low-risk preview experience.

The runtime flag is:

`NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED`

The flag must be boolean `true` before the D6 staged preview can render. In the standard browser validation path, the flag was not set.

## Browser Environment

- Command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- Path: `Start as User`
- Browser surface: Codex in-app browser
- User path: Standard User / Ask Nexus

## Low-Risk Prompts Validated

The following low-risk prompts were exercised in the Standard User Ask flow:

- `Help me find agriculture training`
- `Teach me how irrigation works`
- `Show me farm jobs`
- `Browse AgriTrade`
- `I need help with crop issues`

Expected and observed:

- existing low-risk suggestion and controlled action preview behavior remained visible where appropriate;
- `#nexus-controlled-low-risk-renderer-root` existed;
- the hidden mount remained `hidden`;
- the hidden mount retained `aria-hidden="true"`;
- the hidden mount retained `data-visible-renderer-enabled="false"`;
- the hidden mount retained `data-execution-allowed="false"`;
- the hidden mount retained `data-provider-handoff="false"`;
- the hidden mount retained `data-permission-request="false"`;
- the hidden mount `innerHTML` stayed empty;
- no `data-nexus-controlled-staged-action-preview="true"` element appeared;
- no D6 staged preview controls appeared;
- no new buttons, links, forms, provider handoff, permission prompt, storage write, network call, backend write, or pending real-world action appeared.

## Excluded and High-Risk Prompts Checked

The following excluded or high-risk prompts were checked for the same no-render and no-execution boundary:

- `Nexus, call John`
- `Send a WhatsApp message`
- `Show my location`
- `Open the camera`
- `Buy seeds`
- `Schedule an appointment`
- `Emergency help`

Expected and observed:

- no D6 staged preview appeared;
- the D6 mount stayed hidden and empty;
- no staged preview controls appeared;
- no provider communication, payment, camera, location sharing, marketplace transaction, emergency dispatch, or backend write was created by the D6 preview path.

Existing app routing may still show existing safe app surfaces, such as a map surface, when a command maps to an existing safe route. D7 only validates that the D6 staged preview path does not add execution, provider, permission, or hidden staged action behavior.

## Console Result

Browser console warning/error entries during the D7 D6-boundary validation:

- `0`

## Mutation Handling

Browser validation created a local `db.json` runtime mutation. That runtime data file was restored before commit. No runtime data is included in Sprint D7.

## Deterministic QA Expectations

The D7 QA guard verifies:

- this validation document exists;
- the document names the D6 flag and Standard User path;
- the low-risk and high-risk prompt sets are recorded;
- the hidden mount default-off contract is recorded;
- no-execution, no-provider, no-permission, and no-storage expectations are recorded;
- the D6 implementation still uses the explicit flag-gated staged preview;
- the D6 hidden mount painter remains scoped to `#nexus-controlled-low-risk-renderer-root`;
- the D6 QA remains wired into the local-safe suites;
- the D7 QA is wired into `package.json` and `scripts/qa-suite.js`.

## Safety Conclusion

Sprint D7 confirms the Sprint D6 staged action preview is safe in the normal Standard User runtime with the feature flag off. The default user build remains unchanged except for already-existing low-risk preview behavior. The staged action preview remains review-only, flag-gated, no-execution, and invisible by default.
