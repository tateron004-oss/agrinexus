# Nexus Controlled Low-Risk Text-Only Renderer Phase 14B Load Boundary QA

## Purpose

Phase 14B proves that the Phase 14A controlled low-risk text-only renderer exists in the repository but remains unloaded, unreachable, and inactive in the Standard User runtime.

This is a safety-boundary phase. It does not activate the renderer and does not introduce user-facing renderer behavior.

## Current Boundary

The renderer module exists at:

```text
public/nexus-controlled-low-risk-text-only-renderer.js
```

It remains separate from the active Standard User runtime:

- The renderer is not loaded by `public/index.html`.
- The renderer is not imported or referenced by `public/app.js`.
- The renderer is not injected by `server.js`.
- `public/index.html` does not include a script tag for it.
- `public/app.js` does not import, require, dynamically import, reference, or invoke it.
- `server.js` does not inject it, route it specially, or expose a config path that activates it.
- Standard static-file availability does not count as runtime activation.

## Standard User Startup Contract

Standard User startup must not reference or enable:

- `enableControlledLowRiskRendererVisibleUi`;
- `renderControlledLowRiskTextModel`;
- `isControlledLowRiskRendererVisibleUiEnabled`;
- `getControlledLowRiskRendererMount`;
- `runControlledLowRiskRendererPreflight`;
- `clearControlledLowRiskRendererMount`;
- `NexusControlledLowRiskTextOnlyRenderer`.

The hidden mount point remains present as a passive placeholder only.

## Hidden Mount Contract

`public/index.html` must contain exactly one hidden mount:

```html
id="nexus-controlled-low-risk-renderer-root"
```

The mount must remain:

- hidden by default;
- `aria-hidden="true"`;
- empty by default;
- `data-visible-renderer-enabled="false"`;
- `data-execution-allowed="false"`;
- `data-provider-handoff="false"`;
- `data-permission-request="false"`;
- `data-navigation-allowed="false"`.

No Standard User startup code may populate or unhide this mount in Phase 14B.

## Forbidden Runtime Wiring

Phase 14B forbids:

- script tags;
- static imports;
- CommonJS `require`;
- dynamic `import()`;
- event handlers;
- buttons;
- links;
- forms;
- routing;
- provider handoff;
- permission prompts;
- confirmation prompts;
- storage;
- fetch/network calls;
- navigation;
- execution.

The renderer must not be connected to calls, messages, camera, location, health, telehealth, emergency, marketplace transactions, payments, accounts, identity, appointments, or provider handoff.

Phase 14B expected runtime result:

- no visible renderer UI;
- no provider handoff;
- no permission prompts;
- no execution.

## Prompt Boundary

Low-risk prompts should continue to use the existing Standard User preview/review behavior. They must not show Phase 14A renderer UI while the renderer remains unloaded:

- Help me find agriculture training
- Teach me how irrigation works
- Show me farm jobs
- Browse AgriTrade
- I need help with crop issues

Excluded and high-risk prompts must also show no Phase 14A renderer UI:

- Nexus, call John
- Send a WhatsApp message
- Show my location
- Open the camera
- Buy seeds
- Schedule an appointment
- Emergency help

## QA Guard

The static guard for this phase is:

```text
scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js
```

The package alias is:

```text
npm.cmd run qa:nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary
```

The guard checks:

- the renderer file exists;
- the renderer remains separate and dormant;
- Standard User files do not load or invoke it;
- the hidden mount remains exactly once and default-off;
- no unsafe controls or execution wiring are introduced;
- Phase 14A QA remains callable.

## Acceptance Criteria

Phase 14B is acceptable only if:

- all static load-boundary checks pass;
- Phase 14A QA still passes;
- `qa-suite.js all-safe` still passes;
- browser validation shows no visible renderer UI with normal Standard User startup;
- the browser console has no new warning or error entries from the dormant renderer;
- only documentation and QA/package/suite files are changed.
