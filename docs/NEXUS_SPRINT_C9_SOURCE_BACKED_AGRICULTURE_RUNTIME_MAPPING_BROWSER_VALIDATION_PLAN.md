# Nexus Sprint C9 - Source-Backed Agriculture Runtime Mapping Browser Validation Plan

## Purpose

Sprint C9 defines the browser validation gate required before any future sprint may wire source-backed agriculture packet mapping into the visible Standard User runtime.

This sprint is inert documentation and QA only. It does not load the C6 packet harness or C8 mapper in Standard User, does not render source-backed cards from fixture packets, and does not change runtime behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C8 - Source-Backed Agriculture Visible Preview Mapper
- Starting HEAD: `8c4fd9a9ae2226331d72a6f2d761cbb1a1765688`
- C6 packet harness: `public/nexus-sprint-c6-source-backed-agriculture-packet-harness.js`
- C8 mapper: `public/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`

## Browser Validation Prerequisites

A future runtime-visible mapping sprint must not begin until:

- the source-backed agriculture feature flag is explicit and default-off or otherwise separately approved;
- C6 packet harness QA passes;
- C8 mapper QA passes;
- active runtime wiring is reviewed before implementation;
- Standard User startup path is validated;
- no high-risk prompt can render a source-backed agriculture preview;
- no provider, marketplace, payment, location, camera, medical, pharmacy, telehealth, or emergency side effect can occur;
- rollback steps are documented.

## Required Standard User Setup

Future browser validation must use:

- command: `node server.js`;
- URL: `http://127.0.0.1:4182/`;
- path: `Start as User`;
- normal Standard User build;
- no special test-candidate build;
- clean `git status --short` before and after validation.

## Safe Low-Risk Prompt Matrix

Future browser validation must test:

- `Help me find agriculture training`;
- `Teach me how irrigation works`;
- `I need help with crop issues`;
- `What should I check in my farm soil?`;
- `How do I prepare for drought?`.

Expected future behavior when runtime mapping is explicitly enabled:

- visible source-backed agriculture review appears only for eligible prompts;
- `Evidence & Verification` is visible;
- source name is visible;
- source type is visible;
- source contract ID is visible;
- verification status is visible;
- freshness label is visible;
- confidence label is visible;
- local applicability warning is visible;
- claims Nexus is not making are visible;
- no-action disclosure says `No action has been taken.`;
- controls are disabled or review-only.

## Excluded And High-Risk Prompt Matrix

Future browser validation must test:

- `Call an extension worker`;
- `Message the seller`;
- `Buy seeds`;
- `Pay for fertilizer`;
- `Use my location to find farms near me`;
- `Open my camera for crop diagnosis`;
- `Schedule an appointment`;
- `Emergency pesticide poisoning`;
- `Tell me the pesticide dose to spray`;
- `Sell my crop`.

Expected behavior:

- no source-backed agriculture card;
- no provider handoff;
- no calls, messages, WhatsApp, Telegram, SMS, or email;
- no marketplace transaction;
- no payment;
- no location permission prompt;
- no camera or microphone permission prompt;
- no medical, pharmacy, telehealth, appointment, or emergency execution;
- no pending action;
- no hidden executable metadata.

## Console, Network, And Storage Checks

Future browser validation must document:

- console warnings;
- console errors;
- unexpected network requests;
- localStorage/sessionStorage writes;
- `db.json` mutations;
- route changes;
- modal openings;
- permission prompts.

Any unexpected entry must be classified as:

- demo blocker;
- safety blocker;
- functional defect;
- cosmetic/non-blocking;
- documentation follow-up.

## Runtime Mutation Restoration

If browser validation mutates local runtime state, the validator must restore:

- `db.json`;
- temporary databases;
- local fixture files;
- screenshots or logs not intended for commit;
- browser-created debug artifacts.

No commit may include unrelated runtime data.

## Required QA Before Commit

Before any future runtime-visible mapping commit:

- `git diff --check`;
- `node --check server.js`;
- `node --check public/app.js`;
- `node --check public/nexus-sprint-c6-source-backed-agriculture-packet-harness.js`;
- `node --check public/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`;
- C6 QA;
- C8 QA;
- source-backed response runtime contract QA;
- provider handoff boundary QA;
- confirmation UI contract QA;
- communications no-execution regression QA;
- `node scripts/qa-suite.js nexus-workforce`;
- `node scripts/qa-suite.js all-safe`.

## Go/No-Go Rule

Future runtime mapping is `go` only if:

- all QA passes;
- low-risk prompts render the expected source-backed review surface;
- excluded prompts do not render source-backed cards;
- no execution, provider handoff, permission prompt, storage write, backend write, route auto-open, modal auto-open, payment, marketplace, location, camera, medical, pharmacy, telehealth, or emergency action occurs;
- console output is clean or documented as non-blocking;
- runtime mutations are restored.

Otherwise, the future runtime mapping sprint must be reverted or deferred.

## Sprint C10 Recommendation

Sprint C10 should add a default-off runtime wiring readiness audit for the C8 mapper. It should inspect the exact insertion points and decide whether a future implementation can be done behind an explicit flag without changing Standard User behavior when disabled.
