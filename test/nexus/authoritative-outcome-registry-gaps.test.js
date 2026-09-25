"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appJsPath = path.join(__dirname, "..", "..", "public", "app.js");
const source = fs.readFileSync(appJsPath, "utf8");

function extractFunction(name) {
  let start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in app.js`);
  // Include a preceding "async " so an async function stays async -- without
  // this, the extracted text runs synchronously and a thrown error escapes
  // as a sync exception instead of a rejected promise, unlike the real code.
  if (source.slice(Math.max(0, start - 6), start) === "async ") start -= 6;
  const parenStart = source.indexOf("(", start);
  let parenDepth = 0;
  let parenEnd = parenStart;
  for (; parenEnd < source.length; parenEnd += 1) {
    if (source[parenEnd] === "(") parenDepth += 1;
    else if (source[parenEnd] === ")") {
      parenDepth -= 1;
      if (parenDepth === 0) break;
    }
  }
  const bodyStart = source.indexOf("{", parenEnd);
  let depth = 0;
  let i = bodyStart;
  for (; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}") {
      depth -= 1;
      if (depth === 0) break;
    }
  }
  return source.slice(start, i + 1);
}

// A minimal DOM stub -- just enough for renderNexusAuthoritativeData/
// renderNexusAuthoritativeChecklist to run and let a test inspect the real
// text they produced. No existing test in this suite needed a DOM stub
// before (app.js's DOM code is normally left untested here), so this is
// deliberately small rather than pulling in a full jsdom dependency.
function makeFakeElement(tag) {
  const element = {
    tagName: tag,
    dataset: {},
    children: [],
    textContent: "",
    append(...nodes) { this.children.push(...nodes); },
    prepend(...nodes) { this.children.unshift(...nodes); },
    remove() { this.removed = true; },
    setAttribute() {},
    getClientRects() { return [{}]; },
    querySelector(sel) { return findByAttr(this, sel); }
  };
  return element;
}

function findByAttr(root, selector) {
  const match = selector.match(/\[data-([a-z-]+)="true"\]/);
  if (!match) return null;
  const key = match[1].replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const walk = node => {
    if (!node) return null;
    if (node.dataset && node.dataset[key] === "true") return node;
    for (const child of node.children || []) {
      const found = walk(child);
      if (found) return found;
    }
    return null;
  };
  return walk(root);
}

function loadRenderer(names) {
  const host = makeFakeElement("section");
  host.dataset.nexusWorkspace = "true";
  const fakeDocument = {
    querySelector(sel) {
      if (sel.includes("nexus-workspace")) return host;
      return findByAttr(host, sel);
    },
    createElement: tag => makeFakeElement(tag)
  };
  const body = names.map(extractFunction).join("\n");
  const context = { document: fakeDocument, window: {}, console };
  vm.createContext(context);
  vm.runInContext(`${body}\nglobalThis.__exports = { ${names.join(", ")} };`, context);
  return { fns: context.__exports, host };
}

test("presentationKinds registers checklist and video-gallery -- both had working renderers that were simply unreachable", () => {
  const registryLine = source.split("\n").find(line => line.includes('const presentationKinds = ['));
  assert.ok(registryLine, "could not find the presentationKinds registry line");
  assert.match(registryLine, /"checklist"/, "checklist must be registered or NexusAuthoritativeOutcomeRenderer throws for every real list");
  assert.match(registryLine, /"video-gallery"/, "video-gallery must be registered or NexusAuthoritativeOutcomeRenderer throws for every real video");
});

test("describeNexusAuthoritativeArrayItem shows real item text instead of the default object toString", () => {
  const { fns } = loadRenderer(["describeNexusAuthoritativeArrayItem"]);
  assert.equal(fns.describeNexusAuthoritativeArrayItem({ text: "Feed the goats", done: false }), "Feed the goats");
  assert.equal(fns.describeNexusAuthoritativeArrayItem({ title: "Farm Chores" }), "Farm Chores");
  assert.equal(fns.describeNexusAuthoritativeArrayItem({ name: "Grace" }), "Grace");
  assert.equal(fns.describeNexusAuthoritativeArrayItem("plain string"), "plain string");
  assert.doesNotMatch(fns.describeNexusAuthoritativeArrayItem({ text: "Feed the goats" }), /\[object Object\]/);
});

test("a real created checklist renders its real title and real item text, not an id/count or [object Object]", async () => {
  const { fns, host } = loadRenderer(["describeNexusAuthoritativeArrayItem", "renderNexusAuthoritativeData", "renderNexusAuthoritativeChecklist"]);
  const outcome = {
    response: "Checklist created.",
    data: {
      listId: "rec_123",
      title: "Farm Chores",
      items: [{ text: "Feed the goats", done: false }, { text: "Water crops", done: true }],
      itemCount: 2,
      persisted: true
    }
  };
  const surface = await fns.renderNexusAuthoritativeChecklist(outcome);
  assert.ok(surface, "the checklist renderer must return a real surface, not throw");
  const rendered = JSON.stringify(surface);
  assert.match(rendered, /Farm Chores/);
  assert.match(rendered, /Feed the goats/);
  assert.match(rendered, /Water crops/);
  assert.doesNotMatch(rendered, /\[object Object\]/);
});

test("a real plural list-read result renders every list's real title and items", async () => {
  const { fns } = loadRenderer(["describeNexusAuthoritativeArrayItem", "renderNexusAuthoritativeData", "renderNexusAuthoritativeChecklist"]);
  const outcome = {
    response: "Here are your lists.",
    data: {
      found: true,
      lists: [
        { listId: "rec_1", title: "Farm Chores", items: [{ text: "Feed the goats", done: false }] },
        { listId: "rec_2", title: "Market Trip", items: [{ text: "Buy seed", done: false }] }
      ]
    }
  };
  const surface = await fns.renderNexusAuthoritativeChecklist(outcome);
  const rendered = JSON.stringify(surface);
  assert.match(rendered, /Farm Chores/);
  assert.match(rendered, /Market Trip/);
  assert.match(rendered, /Feed the goats/);
  assert.match(rendered, /Buy seed/);
});

test("renderNexusAuthoritativeChecklist throws (rather than silently rendering nothing) when there is genuinely no list to show", async () => {
  const { fns } = loadRenderer(["describeNexusAuthoritativeArrayItem", "renderNexusAuthoritativeData", "renderNexusAuthoritativeChecklist"]);
  await assert.rejects(() => fns.renderNexusAuthoritativeChecklist({ response: "No list found.", data: { found: false, lists: [] } }));
});
