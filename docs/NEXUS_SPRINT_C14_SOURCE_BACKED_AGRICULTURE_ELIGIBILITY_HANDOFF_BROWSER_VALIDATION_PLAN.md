# Nexus Sprint C14 - Source-Backed Agriculture Eligibility Handoff Browser Validation Plan

## Purpose

Sprint C14 defines the browser validation gate for any future sprint that bridges C13 eligibility handoff output into a visible Standard User source-backed agriculture surface.

This sprint is inert documentation and QA only. It does not wire C13 into Standard User runtime, does not load C13 in `public/index.html`, does not import C13 in `public/app.js`, does not render a visible card, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C13 - Source-Backed Agriculture Eligibility Handoff Contract
- Starting HEAD: `a45e76a22d3df1f13c793f856457314c926dc626`
- C13 module: `public/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- C13 contract: `docs/NEXUS_SPRINT_C13_SOURCE_BACKED_AGRICULTURE_ELIGIBILITY_HANDOFF_CONTRACT.md`

## Future Bridge Preconditions

A future C13-to-visible-surface bridge must not begin until:

- C6 packet harness QA passes;
- C8 mapper QA passes;
- C12 flag resolver QA passes;
- C13 eligibility handoff QA passes;
- the future feature flag is explicit, boolean-only, and default-off;
- Standard User flag-off behavior is validated as unchanged;
- visible surface rendering is separately approved;
- no high-risk or unsupported prompt can render a source-backed agriculture card;
- no provider, marketplace, payment, location, camera, medical, pharmacy, telehealth, appointment, call, message, or emergency side effect can occur;
- rollback steps and runtime mutation restoration are documented.

## Required Browser Setup

Future browser validation must use:

- command: `node server.js`;
- URL: `http://127.0.0.1:4182/`;
- path: `Start as User`;
- normal Standard User build;
- no special test-candidate build;
- clean `git status --short` before and after validation.

## Flag-Off Browser Expectations

With the future feature flag off:

- no C13 script loaded;
- no C8 mapper loaded;
- no C13 output visible;
- no source-backed agriculture card created by C13;
- no hidden executable metadata;
- no new buttons, links, forms, route changes, modals, permission prompts, network requests, storage writes, backend writes, or pending actions;
- existing low-risk agriculture behavior remains unchanged.

## Flag-On Eligible Prompt Matrix

If a future sprint explicitly enables the bridge after approval, these currently source-backed fixture prompts should be validated:

- `Help me find agriculture training`;
- `Teach me how irrigation works`;
- `I need help with crop issues`;
- `What should I check in my farm soil?`.

Expected future visible behavior:

- source-backed agriculture review appears only after eligibility passes;
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
- controls are disabled, inert, or review-only.

## Unsupported Safe Prompt Matrix

These safe prompts remain ineligible until a verified C6 source-backed packet family exists:

- `How do I prepare for drought?`.

Expected behavior:

- no C13 source-backed card;
- no claim that drought guidance is currently source-backed by C6;
- safe fallback or existing agriculture guidance may appear only through existing runtime behavior;
- no execution or permission prompt.

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

- no C13 source-backed card;
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
- fixture files;
- screenshots or logs not intended for commit;
- browser-created debug artifacts.

No commit may include unrelated runtime data.

## Required QA Before Future Runtime Commit

Before any future C13-to-visible-surface runtime commit:

- `git diff --check`;
- `node --check server.js`;
- `node --check public/app.js`;
- C6 QA;
- C8 QA;
- C12 QA;
- C13 QA;
- source-backed response runtime contract QA;
- provider handoff boundary QA;
- confirmation UI contract QA;
- communications no-execution regression QA;
- `node scripts/qa-suite.js nexus-workforce`;
- `node scripts/qa-suite.js all-safe`.

## Go/No-Go Rule

Future C13-to-visible-surface bridging is `go` only if:

- all QA passes;
- flag-off Standard User behavior remains unchanged;
- eligible prompts render only the expected source-backed review surface when explicitly enabled;
- unsupported prompts remain ineligible;
- excluded prompts do not render source-backed cards;
- no execution, provider handoff, permission prompt, storage write, backend write, route auto-open, modal auto-open, payment, marketplace, location, camera, medical, pharmacy, telehealth, call, message, appointment, or emergency action occurs;
- console output is clean or documented as non-blocking;
- runtime mutations are restored.

Otherwise, the runtime bridge must be reverted or deferred.

## Sprint C15 Recommendation

Sprint C15 should add a fixture-only visible-surface readiness contract for the C13 output shape, without rendering DOM in Standard User runtime.
