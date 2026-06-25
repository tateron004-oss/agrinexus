# Nexus Controlled Low-Risk Text-Only Renderer Phase 14A

## A. Phase Purpose

Phase 14A adds a dormant, text-only controlled low-risk renderer prototype for Nexus Workforce AI. The renderer is implemented as an isolated public helper module and is not loaded by the Standard User runtime in this phase.

The purpose is to prove the minimum renderer contract before any visible Standard User activation:

- strict default-off feature flag behavior;
- text-only rendering;
- safe low-risk category allowlist;
- explicit high-risk exclusion;
- no interactive controls;
- no execution authority.

## B. Flag Source and Default-Off Behavior

The renderer uses the explicit local config field:

```js
enableControlledLowRiskRendererVisibleUi
```

The flag is strict boolean only. The renderer enables only when:

```js
config && config.enableControlledLowRiskRendererVisibleUi === true
```

All other values are treated as off, including missing config, `false`, `"true"`, `1`, `"1"`, `"yes"`, `"on"`, `null`, `undefined`, objects, arrays, query strings, hash values, cookies, `localStorage`, `sessionStorage`, prompts, roles, admin mode, or debug state.

In Phase 14A the helper is QA-callable only. `public/index.html`, `public/app.js`, and `server.js` do not load or invoke the renderer, so the Standard User build remains unchanged with the flag off.

## C. Runtime Renderer Boundary

The renderer must never:

- execute actions;
- navigate;
- dispatch events;
- open providers;
- stage confirmations;
- request permissions;
- activate camera or location;
- make network calls;
- write storage;
- create calls, messages, payments, appointments, health actions, marketplace transactions, or emergency actions.

It is a renderer only, not an agent executor.

## D. Mount Preflight

The renderer may only render into the existing hidden mount:

```html
nexus-controlled-low-risk-renderer-root
```

Preflight requires:

- exactly one mount;
- `hidden`;
- `aria-hidden="true"`;
- `data-visible-renderer-enabled="false"`;
- `data-execution-allowed="false"`;
- `data-provider-handoff="false"`;
- `data-permission-request="false"`;
- `data-navigation-allowed="false"`;
- no existing text;
- no existing child nodes;
- no interactive descendants.

If any preflight condition fails, the renderer renders nothing.

## E. Text-Only Rendering Contract

The only allowed model fields are:

- `category`;
- `title`;
- `summary`;
- `previewLines`;
- `safetyLabel`.

The renderer uses DOM text APIs such as `textContent` and creates only inert text containers such as `section`, `h3`, `p`, `ul`, and `li`.

It must not use raw HTML or render buttons, links, forms, inputs, event handlers, provider payloads, permission payloads, confirmation payloads, navigation payloads, storage payloads, scripts, styles, iframes, fetch requests, or executable action payloads.

## F. Low-Risk Allowlist

Allowed low-risk categories:

- `agriculture_training`;
- `irrigation_learning`;
- `farm_jobs_workforce_discovery`;
- `agritrade_marketplace_preview`;
- `crop_issue_education_help`.

Historical notes and typo guard:

- Some Phase 14A planning text mentioned `agritade_marketplace_preview`.
- The canonical spelling is `agritrade_marketplace_preview`.
- QA must reject the misspelled `agritade_marketplace_preview` category.

## G. High-Risk Blocklist

The renderer must render nothing for high-risk or execution-adjacent categories, including:

- calls;
- messages;
- provider handoff;
- camera;
- location;
- health;
- telehealth;
- emergency;
- payments;
- marketplace buy/sell;
- account/profile;
- identity;
- appointments;
- permissions;
- confirmations;
- navigation.

## H. QA and Browser Validation Expectations

Phase 14A QA must verify:

- strict flag behavior;
- safe model rendering only when explicitly enabled in an isolated QA context;
- unsafe model rejection;
- forbidden field rejection;
- hidden mount preflight;
- no runtime loading by `index.html`, `app.js`, or `server.js`;
- no unsafe DOM APIs;
- no buttons, links, handlers, provider hooks, permissions, navigation, storage, fetch, or execution paths.

Browser validation remains flag-off Standard User validation. It should confirm no visible renderer appears during normal demo prompts and no behavior changes occur.

## I. Acceptance Criteria

Phase 14A is acceptable only if:

- the helper remains dormant in Standard User runtime;
- the hidden mount remains empty by default;
- flag-off behavior is unchanged;
- flag-on behavior is testable only through isolated QA;
- all renderer output is text-only and inert;
- high-risk prompts render nothing;
- existing Phase 13 default-off and preflight protections continue to pass;
- `qa-suite.js nexus-workforce` and `qa-suite.js all-safe` pass.
