"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");

function extractFunction(name) {
  const start = appSource.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in app.js`);
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

// Minimal, purpose-built DOM stub -- just enough to prove nexusFormDataForWorkflow
// actually collects the real fields the default "Form mode" intake window renders
// (data-nexus-landing-field), not a full jsdom dependency.
function matchesSimpleSelector(field, selector) {
  const attrMatch = selector.match(/^\[data-([a-z-]+)\]$/);
  if (attrMatch) {
    const key = attrMatch[1].replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return Object.prototype.hasOwnProperty.call(field.dataset, key);
  }
  const checkedMatch = selector.match(/^\[data-([a-z-]+)\]:checked$/);
  if (checkedMatch) {
    const key = checkedMatch[1].replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return Object.prototype.hasOwnProperty.call(field.dataset, key) && field.checked === true;
  }
  return false;
}

function makeField({ tag = "input", data = {}, name = "", value = "", type = "text", checked = false, children = [] } = {}) {
  const dataset = {};
  for (const [key, val] of Object.entries(data)) {
    const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    dataset[camel] = val;
  }
  return {
    tagName: tag.toUpperCase(),
    dataset,
    name,
    value,
    type,
    checked,
    children,
    querySelectorAll(selector) {
      return this.children.filter(child => matchesSimpleSelector(child, selector));
    }
  };
}

function makeWorkspace(fields) {
  return {
    querySelectorAll(selector) {
      return fields.filter(field => matchesSimpleSelector(field, selector));
    }
  };
}

function loadFormDataForWorkflow(fields) {
  const workspace = makeWorkspace(fields);
  const fakeDocument = { querySelector: sel => (sel === "#nexus-workspace" ? workspace : null) };
  const context = { document: fakeDocument, window: {}, console };
  vm.createContext(context);
  vm.runInContext(
    `const $ = selector => document.querySelector(selector);\n${extractFunction("nexusFormDataForWorkflow")}\nthis.run = nexusFormDataForWorkflow;`,
    context
  );
  return context.run;
}

// Found live: the default (non-guided) "Form mode" intake window -- shown by
// default for EVERY Nexus workflow (mobile-clinic, pharmacy, agriculture,
// marketplace, logistics, communications, etc.) unless the user explicitly
// clicks "Guided mode" -- renders its fields via renderNexusLandingField,
// which tags every input/select/textarea/checkbox with data-nexus-landing-
// field. nexusFormDataForWorkflow (the function "Prepare packet"/"Queue if
// inactive"/"Review confirmation" all call to read what the user typed) only
// ever queried data-nexus-mode-field -- an entirely different attribute used
// only by the guided-interview's single current-question input. Anything
// typed into the default form was silently discarded: the resulting packet's
// userEnteredData ended up {} with no client-side validation to catch it.
test("nexusFormDataForWorkflow collects real values from the default Form-mode fields (data-nexus-landing-field), not just guided-mode fields", () => {
  const run = loadFormDataForWorkflow([
    makeField({ tag: "input", data: { "nexus-landing-field": "purpose" }, name: "purpose", value: "Vitals check for a diabetic patient" }),
    makeField({ tag: "textarea", data: { "nexus-landing-field": "details" }, name: "details", value: "Blood pressure 150/95, needs follow-up" }),
    makeField({ tag: "select", data: { "nexus-landing-field": "consent" }, name: "consent", value: "Approved later" })
  ]);
  const values = run("mobile-clinic");
  assert.equal(values.purpose, "Vitals check for a diabetic patient", "text typed into the default form must reach the packet, not be silently discarded");
  assert.equal(values.details, "Blood pressure 150/95, needs follow-up");
  assert.equal(values.consent, "Approved later");
});

test("nexusFormDataForWorkflow still collects guided-mode's own data-nexus-mode-field input, unaffected by the fix", () => {
  const run = loadFormDataForWorkflow([
    makeField({ tag: "input", data: { "nexus-mode-field": "symptom" }, name: "symptom", value: "fever" })
  ]);
  const values = run("mobile-clinic");
  assert.equal(values.symptom, "fever");
});

test("nexusFormDataForWorkflow collects a checked single checkbox and a checkbox group from the default form", () => {
  const checkboxGroup = makeField({
    tag: "fieldset",
    data: { "nexus-landing-field": "supports" },
    children: [
      makeField({ tag: "input", data: { "nexus-landing-checkbox": "supports" }, type: "checkbox", value: "audio description", checked: true }),
      makeField({ tag: "input", data: { "nexus-landing-checkbox": "supports" }, type: "checkbox", value: "captions", checked: false })
    ]
  });
  const run = loadFormDataForWorkflow([
    makeField({ tag: "input", data: { "nexus-landing-field": "consent" }, name: "consent", type: "checkbox", value: "on", checked: true }),
    checkboxGroup
  ]);
  const values = run("mobile-clinic");
  assert.equal(values.consent, "on");
  assert.equal(values.supports, "audio description");
});
