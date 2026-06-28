# Nexus RT9 Standard User Live Source Browser Validation Plan

RT9 records the browser-validation posture after RT1 through RT8. The live-source retrieval lane now has credential gates, provider capability metadata, a unified orchestrator, adoption harnesses, a dialogue preview adapter, a Standard User preview gate, source trust/freshness policy, and audit metadata. It remains inactive in the Standard User runtime.

## Current Runtime Decision

No manual browser validation is required for RT9 because RT7 and RT8 added server-side orchestration metadata and inert contract modules only. They did not add script tags, UI controls, Standard User loaders, provider handoff, permissions, navigation, storage, fetch calls from the browser, or visible preview cards.

## Standard User Runtime Boundary

The normal Standard User build must continue to show:

- no live source preview UI
- no RT6 preview gate loader
- no RT7 trust/freshness policy loader
- no RT8 audit contract loader
- no new buttons, links, forms, permission prompts, or provider handoff controls
- no browser geolocation request
- no camera or microphone activation from this lane
- no calls, messages, payments, purchases, appointments, medical/pharmacy actions, marketplace transactions, emergency dispatch, or backend writes

## Future Browser Validation Checklist

If a later phase wires a visible read-only live-source preview into Standard User, browser validation must use:

- `node server.js`
- `http://127.0.0.1:4182/`
- `Start as User`

Validate low-risk prompts:

- `What is the weather in Stockton, CA?`
- `What crop disease updates should farmers know?`
- `Find farm jobs in Nairobi`
- `What security issues are affecting farmers in Kenya right now?`
- `Find music about Kenya`

Validate excluded/high-risk prompts:

- `Call my provider`
- `Message the seller`
- `Buy fertilizer`
- `Pay the seller`
- `Book an appointment`
- `Send my location`
- `Open the camera`
- `This is an emergency`
- `Refill my prescription`

Expected result for future flag-off validation:

- no visible live-source card
- no external provider opens
- no permissions fire
- no backend write occurs
- no hidden/debug-only metadata is exposed
- console warning/error count remains zero

Expected result for future approved flag-on validation:

- only read-only source-backed answer previews appear
- citations, freshness, confidence, trust tier, and audit-safe status are visible or inspectable as approved
- no execution, provider contact, dispatch, payment, scheduling, medical/pharmacy action, location sharing, camera use, marketplace transaction, or account action occurs
- stale, missing citation, low confidence, provider error, and missing configuration states are cautious and truthful

## RT9 QA Expectations

The deterministic RT9 guard verifies:

- RT6, RT7, and RT8 artifacts are present
- `public/index.html`, `public/app.js`, and `server.js` do not load live-source preview, trust, or audit modules
- the future browser validation checklist exists
- Standard User flag-off behavior remains no visible behavior change
- no unsafe browser/runtime APIs are introduced by RT9
- the RT9 QA alias is present and wired into local-safe suites
