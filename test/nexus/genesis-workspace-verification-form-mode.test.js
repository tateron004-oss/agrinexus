"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");

function extractFunction(name) {
  let start = appSource.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in app.js`);
  if (appSource.slice(Math.max(0, start - 6), start) === "async ") start -= 6;
  const parenStart = appSource.indexOf("(", start);
  let parenDepth = 0;
  let parenEnd = parenStart;
  for (; parenEnd < appSource.length; parenEnd += 1) {
    if (appSource[parenEnd] === "(") parenDepth += 1;
    else if (appSource[parenEnd] === ")") { parenDepth -= 1; if (parenDepth === 0) break; }
  }
  const bodyStart = appSource.indexOf("{", parenEnd);
  let depth = 0; let i = bodyStart;
  for (; i < appSource.length; i += 1) {
    if (appSource[i] === "{") depth += 1;
    else if (appSource[i] === "}") { depth -= 1; if (depth === 0) break; }
  }
  return appSource.slice(start, i + 1);
}

// Minimal, purpose-built DOM/environment stub -- just enough for
// dispatchGenesisWorkspaceActionVerified to run and prove the real
// field-verification logic, not a full jsdom dependency (matches this
// suite's existing convention for the rare app.js DOM tests).
function makeField(value) {
  return { value, textContent: value, getClientRects: () => [{}], closest: () => null };
}

function loadDispatch({ landingFieldValues = {} } = {}) {
  const workspaceElement = makeField("");
  const registry = {};
  for (const [name, value] of Object.entries(landingFieldValues)) {
    registry[`[data-nexus-landing-field="${name}"]`] = makeField(value);
  }
  const fakeDocument = {
    body: { dataset: {}, classList: { contains: () => true } },
    querySelector(selector) {
      if (selector === '#nexus-workspace[data-nexus-workspace="true"]') return workspaceElement;
      if (registry[selector]) return registry[selector];
      return null;
    }
  };
  const context = {
    document: fakeDocument,
    window: {
      setTimeout: (fn, ms) => setTimeout(fn, ms),
      dispatchEvent: () => {},
      nexusRealtimeConnected: true
    },
    setTimeout,
    Promise,
    console,
    location: { hash: "" },
    CustomEvent: function CustomEvent(type, init) { this.type = type; this.detail = init?.detail; },
    dispatchGenesisWorkspaceAction: () => true,
    realtimeVoiceSession: { active: true, connectionState: "connected", sdkController: {} },
    normalizeRealtimeMicrophoneProof: () => ({ hasLiveTrack: true }),
    nexusPermanentMicrophoneStream: null,
    realtimeVoiceActive: () => true,
    nexusGenesisVoiceDebugLog: () => {},
    dispatchNexusPath1CertificationReceipt: () => {}
  };
  vm.createContext(context);
  vm.runInContext(`${extractFunction("dispatchGenesisWorkspaceActionVerified")}\nthis.run = dispatchGenesisWorkspaceActionVerified;`, context);
  context.document.body.dataset.genesisWorkspace = "marketplace";
  return context.run;
}

// Found live: findPopulatedField()'s selector list never included
// data-nexus-landing-field -- the attribute the currently-active DEFAULT
// (non-guided) Form-mode intake window actually renders for every workflow
// field (renderNexusLandingField, the same renderer implicated in the
// earlier nexusFormDataForWorkflow bug). A voice command that opened a
// workspace and genuinely populated its default-mode fields correctly still
// failed verification here, which throws and is caught by the generic catch
// in dispatchRealtimeToolCall -- so Kyro told the user "I could not reach
// the Nexus tool layer right now" even though the action had genuinely
// already succeeded on screen.
test("workspace verification succeeds when the expected field was populated via the default Form-mode input (data-nexus-landing-field)", async () => {
  const run = loadDispatch({ landingFieldValues: { product: "maize" } });
  const action = { type: "genesis.workspace.open", requestId: "req1", workspace: "marketplace", payload: { product: "maize" } };
  const ack = await run(action, {});
  assert.equal(ack.verified, true, "verification must succeed once the field is found via the real default-form attribute");
  // The vm sandbox's Array is a different realm's constructor than the host
  // realm's Array, so JSON-round-tripping normalizes it for comparison.
  assert.deepEqual(JSON.parse(JSON.stringify(ack.populatedFields)), ["product"]);
});

test("workspace verification still succeeds via the guided-interview attribute, unaffected by the fix", async () => {
  const workspaceElement = makeField("");
  const fakeDocument = {
    body: { dataset: {}, classList: { contains: () => true } },
    querySelector(selector) {
      if (selector === '#nexus-workspace[data-nexus-workspace="true"]') return workspaceElement;
      if (selector === '[data-nexus-guided-answer="product"]') return makeField("maize");
      return null;
    }
  };
  const context = {
    document: fakeDocument,
    window: { setTimeout: (fn, ms) => setTimeout(fn, ms), dispatchEvent: () => {}, nexusRealtimeConnected: true },
    setTimeout, Promise, console, location: { hash: "" },
    CustomEvent: function CustomEvent(type, init) { this.type = type; this.detail = init?.detail; },
    dispatchGenesisWorkspaceAction: () => true,
    realtimeVoiceSession: { active: true, connectionState: "connected", sdkController: {} },
    normalizeRealtimeMicrophoneProof: () => ({ hasLiveTrack: true }),
    nexusPermanentMicrophoneStream: null,
    realtimeVoiceActive: () => true,
    nexusGenesisVoiceDebugLog: () => {},
    dispatchNexusPath1CertificationReceipt: () => {}
  };
  vm.createContext(context);
  vm.runInContext(`${extractFunction("dispatchGenesisWorkspaceActionVerified")}\nthis.run = dispatchGenesisWorkspaceActionVerified;`, context);
  context.document.body.dataset.genesisWorkspace = "marketplace";
  const action = { type: "genesis.workspace.open", requestId: "req2", workspace: "marketplace", payload: { product: "maize" } };
  const ack = await context.run(action, {});
  assert.equal(ack.verified, true);
});
