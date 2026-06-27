# Nexus Sprint D5 - Controlled Staged Actions Flag-Off Runtime Regression

## Purpose

Sprint D5 defines and guards the default-off runtime boundary for controlled staged actions.

The controlling flag is:

`NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED`

The flag defaults to false. Sprint D5 does not wire staged actions into Standard User runtime and does not create visible UI. It only records the default-off contract and adds deterministic QA to prevent accidental activation.

## Flag Contract

Module: `public/nexus-controlled-staged-actions-flag.js`

The module provides:

- `CONTROLLED_STAGED_ACTIONS_FLAG_NAME`;
- `isControlledStagedActionsEnabled(options)`;
- `describeControlledStagedActionsFlag(options)`.

The resolver returns `true` only when an explicit test-safe input sets:

`NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED: true`

All missing, false, string, numeric, null, undefined, object, or environment-like values resolve to false.

## Standard User Default

Standard User runtime must remain unchanged:

- no staged action card appears by default;
- no staged action preview appears by default;
- no staged action metadata becomes visible by default;
- no hidden debug metadata is exposed;
- no prompt can enable the flag;
- no localStorage, sessionStorage, query parameter, backend response, server config, or voice command enables the flag;
- `public/app.js` does not import or call the D5 flag module;
- `public/index.html` does not load the D5 flag module;
- `server.js` does not inject or serve activation state beyond normal static-file availability.

## No-Execution Guarantees

D5 does not activate:

- provider handoff;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email;
- payments;
- marketplace transactions;
- location sharing;
- camera, microphone, image, or media capture;
- medical, pharmacy, telehealth, or emergency execution;
- backend writes;
- pending real-world actions;
- storage writes;
- live lookup;
- external navigation.

## Regression Boundary

Any future Sprint D runtime-visible phase must prove:

- default flag-off behavior is unchanged;
- flag-on behavior is explicit, local/test-safe, and low-risk only;
- browser validation passes;
- no execution channel is activated;
- rollback is immediate by returning the flag to false.

## QA Guard

QA script: `scripts/nexus-sprint-d5-controlled-staged-actions-flag-off-runtime-regression-qa.js`

The QA guard verifies:

- D5 doc and flag module exist;
- flag name is `NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED`;
- flag defaults false;
- only boolean `true` enables the flag;
- Standard User app/index/server do not import or invoke the flag module;
- no staged action runtime activation string appears in app/index/server;
- module source contains no DOM, event, network, storage, navigation, provider, permission, backend write, or execution APIs;
- D1-D4 safety chain remains present;
- package alias and safe-suite wiring exist.

## Conclusion

Sprint D5 preserves Standard User runtime safety by making controlled staged action activation impossible by default. The lane may continue to D6 only behind an explicit, guarded, browser-validated, default-off preview path.
