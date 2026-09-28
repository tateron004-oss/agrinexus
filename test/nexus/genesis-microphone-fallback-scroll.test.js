"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const appSource = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const cssSource = fs.readFileSync(path.join(__dirname, "../../public/styles.css"), "utf8");

// Confirmed live (2026-09-28): renderUserWorkspace's "orb-only home" state
// (data-nexus-true-experience-mode="home") renders inside a shell CSS pins to
// `position: fixed; inset: 0; overflow: hidden` at exactly one viewport tall.
// When the microphone is denied/unavailable, the same render also appends a
// second full section -- the typed microphone-fallback composer
// (.nexus-true-conversation, data-nexus-microphone-fallback="true") -- right
// after the orb card, inside that same fixed shell. Stacked, the two sections
// measure well past one viewport (live: ~1573px of content inside a 768px
// clipped shell with no scrollbar and no scroll-wheel response), so the one
// typed input a mic-denied user has to reach Nexus at all was completely
// unreachable by mouse or scroll -- confirmed live via a real scroll-wheel
// probe that moved scrollTop by 0 on every ancestor.
test("the standard-user home shell root carries a microphone-fallback-active flag JS can set per render", () => {
  const shellStart = appSource.indexOf('data-testid="nexus-standard-user-home"');
  assert.ok(shellStart > 0, "could not locate the Genesis home shell root template in app.js");
  const shellSnippet = appSource.slice(shellStart, shellStart + 900);
  assert.match(
    shellSnippet,
    /data-nexus-microphone-fallback-active="\$\{microphoneFallbackRequired \? "true" : "false"\}"/,
    "the home shell root must reflect microphoneFallbackRequired as a data attribute so CSS can react to it"
  );
});

test("styles.css lets the orb-only home shell scroll instead of clipping when the microphone fallback is active", () => {
  const homeRuleIndex = cssSource.indexOf(
    'body.user-mode .nexus-true-experience-root[data-nexus-true-experience-mode="home"] {'
  );
  assert.ok(homeRuleIndex > 0, "could not locate the orb-only home shell rule in styles.css");
  const homeRule = cssSource.slice(homeRuleIndex, cssSource.indexOf("}", homeRuleIndex));
  assert.match(homeRule, /overflow:\s*hidden\s*!important/, "sanity check: the base home-mode rule still clips by default");

  const overrideIndex = cssSource.indexOf(
    'body.user-mode .nexus-true-experience-root[data-nexus-true-experience-mode="home"][data-nexus-microphone-fallback-active="true"] {'
  );
  assert.ok(overrideIndex > homeRuleIndex, "must add a scroll override scoped to the microphone-fallback-active shell, after the base clipping rule so it wins");
  const overrideRule = cssSource.slice(overrideIndex, cssSource.indexOf("}", overrideIndex));
  assert.match(overrideRule, /overflow-y:\s*auto\s*!important/, "the fallback-active shell must allow scrolling instead of clipping its content");

  const mainOverrideIndex = cssSource.indexOf(
    'body.user-mode .nexus-true-experience-root[data-nexus-true-experience-mode="home"][data-nexus-microphone-fallback-active="true"] .nexus-command-main {'
  );
  assert.ok(mainOverrideIndex > overrideIndex, "the inner .nexus-command-main also clips (overflow: hidden) in the base rule and needs the same override");
  const mainOverrideRule = cssSource.slice(mainOverrideIndex, cssSource.indexOf("}", mainOverrideIndex));
  assert.match(mainOverrideRule, /overflow-y:\s*auto\s*!important/, ".nexus-command-main must also allow scrolling so the fallback composer stacked below the orb card is reachable");
});
