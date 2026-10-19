"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const Screen = require("../../public/kyro-result-screen.js");

// Asked by the owner: "can Kyro open the actual web page connected to the request? If not it should." A live answer now shows a real link for each page behind it, and "open the first source" opens one when the
// browser lets it (a browser only opens a page that is tapped) and otherwise says which button to tap.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

const citations = [
  { title: "Maize flour prices in Nairobi this week", url: "https://www.nation.africa/prices", domain: "nation.africa", publisher: "Nation Africa" },
  { title: "Retail prices", url: "https://kenyans.co.ke/maize", domain: "kenyans.co.ke", publisher: "https://kenyans.co.ke/maize" },
  { title: "duplicate", url: "https://www.nation.africa/prices", domain: "nation.africa", publisher: "Nation Africa" },
  { title: "not a web page", url: "javascript:alert(1)", domain: "", publisher: "" },
  { title: "mail", url: "mailto:a@b.co", domain: "", publisher: "" }
];

test("a live answer's citations become links: web addresses only, each once, named by publisher or address", () => {
  const links = Screen.sourceLinks({ citations });
  assert.deepEqual(JSON.parse(JSON.stringify(links.map(link => [link.label, link.url]))), [["Nation Africa", "https://www.nation.africa/prices"], ["kenyans.co.ke", "https://kenyans.co.ke/maize"]]);
  assert.deepEqual(Screen.sourceLinks({}), []);
  assert.equal(Screen.sourceLinks({ citations: Array.from({ length: 9 }, (_, i) => ({ url: `https://site${i}.example/a`, domain: `site${i}.example` })) }).length, 9);
  const model = Screen.buildModel({ ok: true, status: "source-backed", response: "The reported retail price is about 66 Kenyan shillings per kilogram in Nairobi. Sources: Nation Africa and kenyans.co.ke, checked just now.", citations }, { command: "price of maize flour", lang: "en" });
  assert.equal(model.links.length, 2);
  assert.equal(Screen.buildModel({ ok: true, response: "The reported retail price is about 66 Kenyan shillings per kilogram in Nairobi." }, { lang: "en" }).links, undefined, "no citations, no links");
});

function fakeDocument() {
  const make = tag => { const el = { tag, children: [], attrs: {}, className: "", textContent: "", style: {}, listeners: {}, appendChild(c) { el.children.push(c); return c; }, setAttribute(k, v) { el.attrs[k] = v; }, addEventListener(n, f) { el.listeners[n] = f; }, remove() {} }; Object.defineProperty(el, "href", { get: () => el.attrs.href, set: v => { el.attrs.href = v; } }); return el; };
  const body = make("body");
  return { body, head: make("head"), createElement: make, getElementById: () => ({}), querySelectorAll: () => [] };
}
const find = (node, test) => [node, ...node.children.flatMap(child => find(child, test))].filter(test);

test("the screen shows each page as a real link that opens in a new tab, and stays until it is closed", () => {
  const doc = fakeDocument();
  const model = Screen.buildModel({ ok: true, response: "The reported retail price is about 66 Kenyan shillings per kilogram in Nairobi.", citations }, { lang: "en" });
  const screen = Screen.show(doc, model, {}, "en");
  const links = find(screen, node => node.attrs["data-kyro-source-link"] === "true");
  assert.equal(links.length, 2);
  assert.equal(links[0].attrs.href, "https://www.nation.africa/prices");
  assert.equal(links[0].target, "_blank");
  assert.equal(links[0].rel, "noopener noreferrer");
  assert.match(find(links[0], node => node.className === "kyro-result-link-name")[0].textContent, /^Open Nation Africa$/);
  assert.equal(screen.attrs["data-kyro-keep"], "true", "a screen with a page to tap is not cleared by the quiet spell");
  const plain = Screen.show(fakeDocument(), Screen.buildModel({ ok: true, response: "The reported retail price is about 66 Kenyan shillings per kilogram in Nairobi." }, { lang: "en" }), {}, "en");
  assert.equal(plain.attrs["data-kyro-keep"], undefined);
  assert.equal(Screen.TEXT.sw.open, "Fungua");
});

function pageApi({ links, opens = true, screenShowing = true }) {
  const start = app.indexOf("let kyroSourceLinks = [];");
  const end = app.indexOf("function kyroHandleSpokenOpenOnce(");
  assert.ok(start > 0 && end > start, "the source-page code is in app.js");
  const said = []; const openedUrls = [];
  const context = {
    document: { querySelector: () => (screenShowing ? {} : null) }, kyroTakeOverTurn() {}, setVoiceResponse: (line) => said.push(line),
    window: { open: url => { openedUrls.push(url); return opens ? {} : null; } }
  };
  vm.runInNewContext(`${app.slice(start, end)}\nkyroSourceLinks = ${JSON.stringify(links)}; this.open = kyroOpenSourcePage;`, context);
  return { open: context.open, said, openedUrls };
}
const LINKS = [{ label: "Nation Africa", url: "https://www.nation.africa/prices" }, { label: "kenyans.co.ke", url: "https://kenyans.co.ke/maize" }];

test("'open the first source' opens the page; 'open the second page' the next; a browser that refuses is told what to tap", () => {
  const a = pageApi({ links: LINKS });
  assert.equal(a.open("Open the first source.", "en", {}), true);
  assert.equal(a.open("Open the second page", "en", {}), true);
  assert.equal(a.open("open the page", "en", {}), true);
  assert.deepEqual(a.openedUrls, ["https://www.nation.africa/prices", "https://kenyans.co.ke/maize", "https://www.nation.africa/prices"]);
  assert.equal(a.said[0], "Opening Nation Africa.");
  const blocked = pageApi({ links: LINKS, opens: false });
  assert.equal(blocked.open("Open the website", "en", {}), true);
  assert.equal(blocked.said[0], "Your browser will not let me open a page by voice. Tap Open Nation Africa on the screen.");
  assert.match(pageApi({ links: LINKS, opens: false }).said.concat(["x"])[0], /./);
  const sw = pageApi({ links: LINKS, opens: false });
  sw.open("Open the first source", "sw", {});
  assert.match(sw.said[0], /Gusa Fungua Nation Africa kwenye skrini\.$/);
});

test("with no page on the screen, or for any other sentence, nothing is opened and the request goes on to its usual route", () => {
  const none = pageApi({ links: [] });
  assert.equal(none.open("Open the first source", "en", {}), false);
  const hidden = pageApi({ links: LINKS, screenShowing: false });
  assert.equal(hidden.open("Open the first source", "en", {}), false);
  const page = pageApi({ links: LINKS });
  for (const say of ["Open the map", "Open my documents", "Open the weather card", "Open marketplace", "What is the news", "Open the page for sale"]) assert.equal(page.open(say, "en", {}), false, say);
  assert.deepEqual(page.openedUrls, []);
  assert.match(app, /if \(typeof kyroOpenSourcePage === "function" && kyroOpenSourcePage\(said, lang, options\)\) return true;/);
  assert.match(app, /kyroSourceLinks = Array\.isArray\(model\.links\) \? model\.links : \[\];/);
});

// Asked by the owner: "make sure Kyro shows the website and sources along with the assistance it provides". The button names the page and shows the website itself, and no guide answer loses a source (the longest has seven).
test("each button shows the website's address, and a guide answer shows every one of its sources", () => {
  const links = Screen.sourceLinks({ citations });
  assert.deepEqual(JSON.parse(JSON.stringify(links.map(link => link.host))), ["nation.africa/prices".split("/")[0], "kenyans.co.ke"]);
  const doc = fakeDocument();
  const screen = Screen.show(doc, Screen.buildModel({ ok: true, response: "The reported retail price is about 66 Kenyan shillings per kilogram in Nairobi.", citations }, { lang: "en" }), {}, "en");
  const hosts = find(screen, node => node.className === "kyro-result-link-host").map(node => node.textContent);
  assert.deepEqual(hosts, ["nation.africa", "kenyans.co.ke"]);
  const seven = Array.from({ length: 7 }, (_, i) => ({ name: `Official page ${i + 1}`, url: `https://site${i}.gov/page` }));
  assert.equal(Screen.sourceLinks({ guideSources: seven }).length, 7);
});
