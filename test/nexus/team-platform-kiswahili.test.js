"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");

// The Team page and the Businesses page speak Kiswahili to a person whose language setting is Kiswahili, and English to everyone else (and for any word that has no Kiswahili yet).
// The words live in public/page-text.js; these tests make sure none is missing, that every word on the pages goes through it, and that the server's own messages are covered.

const root = path.resolve(__dirname, "..", "..");
const read = name => fs.readFileSync(path.join(root, name), "utf8");
const pageText = require(path.join(root, "public", "page-text.js"));
const { TEXT, tx, serverError, languageOf } = pageText;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const placeholders = value => [...String(value).matchAll(/\{(\w+)\}/g)].map(match => match[1]).sort().join(",");

test("every English key has a Kiswahili key, and the other way round, with the same blanks to fill in", () => {
  const english = Object.keys(TEXT.en);
  const swahili = Object.keys(TEXT.sw);
  assert.deepEqual(english.filter(key => !(key in TEXT.sw)), [], "keys with no Kiswahili");
  assert.deepEqual(swahili.filter(key => !(key in TEXT.en)), [], "Kiswahili keys with no English");
  assert.ok(english.length > 150);
  for (const key of english) {
    assert.ok(String(TEXT.sw[key]).trim().length > 0, `${key} is not empty`);
    assert.equal(placeholders(TEXT.sw[key]), placeholders(TEXT.en[key]), `${key} fills in the same blanks in both languages`);
    assert.equal((TEXT.sw[key].match(/\*\*/g) || []).length % 2, 0, `${key} closes its bold`);
  }
  // Only these few are the same in both (a name or an arrow); everything else is really translated.
  const same = english.filter(key => TEXT.sw[key] === TEXT.en[key]);
  assert.deepEqual(same.sort(), ["back"]);
});

test("language choice: sw and sw-KE are Kiswahili, anything else is English, a missing word falls back to English", () => {
  assert.equal(languageOf("sw"), "sw");
  assert.equal(languageOf("SW-ke"), "sw");
  for (const other of ["en", "fr", "ar", "", undefined, null, "swedish"]) assert.equal(languageOf(other), "en");
  assert.equal(tx("sw", "team.h1"), "Timu yangu");
  assert.equal(tx("en", "team.h1"), "My team");
  assert.equal(tx("fr", "team.h1"), "My team", "a language with no words yet shows English");
  assert.equal(tx("sw", "no.such.key"), "no.such.key");
  assert.equal(tx("sw", "team.switchedOff", { name: "Mary" }), "Mary amezimwa. Hawezi kuingia, na simu yake haipokelewi tena.");
  const saved = TEXT.sw["team.h1"];
  delete TEXT.sw["team.h1"];
  try { assert.equal(tx("sw", "team.h1"), "My team", "one missing word falls back to English"); } finally { TEXT.sw["team.h1"] = saved; }
});

const keysIn = source => new Set([...source.matchAll(/["'`]((?:team|platform|activity|sender|err)\.[\w.]+|back|checking|signInFirst|didNotWork|secretTitle|secretClose|linkPhone|remove|closed|newPasswordFor|resetText|passwordMade|phoneLabel|phoneLabelLong)["'`]/g)].map(match => match[1]));

test("every word on the two pages comes from the dictionary: the HTML's text equals the English entry, and the scripts only ask for keys that exist", () => {
  for (const page of ["team", "platform"]) {
    const html = read(`public/${page}.html`);
    const used = [...html.matchAll(/data-i18n(?:-placeholder|-title)?="([^"]+)"/g)].map(match => match[1]);
    assert.ok(used.length >= 10, `${page}.html marks its words`);
    for (const key of used) { assert.ok(key in TEXT.en, `${page}.html: ${key} exists in English`); assert.ok(key in TEXT.sw, `${page}.html: ${key} exists in Kiswahili`); }
    // What a person sees with no script at all (and before it runs) is the English entry, word for word.
    for (const match of html.matchAll(/<(\w+)[^>]*\sdata-i18n="([^"]+)"[^>]*>([\s\S]*?)<\/\1>/g)) {
      const shown = match[3].replace(/<strong>([\s\S]*?)<\/strong>/g, "**$1**").replace(/&amp;/g, "&").trim();
      assert.equal(shown, TEXT.en[match[2]], `${page}.html: "${match[2]}" reads the same as the English entry`);
    }
    for (const match of html.matchAll(/<(\w+)[^>]*\sdata-i18n-(placeholder|title)="([^"]+)"[^>]*>/g)) {
      const attribute = new RegExp(`\\s${match[2]}="([^"]*)"`).exec(match[0]);
      if (attribute) assert.equal(attribute[1], TEXT.en[match[3]]);
    }
    const title = /<title>([^<]*)<\/title>/.exec(html)[1];
    assert.equal(title, TEXT.en[new RegExp(`data-title-key="([^"]+)"`).exec(html)[1]], `${page}.html: the title is translated too`);
    assert.match(html, /<script src="\/page-text\.js" defer><\/script>\s*<script src="\/(team|platform)\.js" defer><\/script>/, "the dictionary loads first");

    const script = read(`public/${page}.js`);
    for (const key of keysIn(script)) { assert.ok(key in TEXT.en && key in TEXT.sw, `${page}.js: ${key} exists in both languages`); }
    // No English sentence is typed straight into the screen any more: text is built only from t(...) or from data.
    const withoutDictionaryCalls = script.replace(/\bt\("[^"]+"[^)]*\)/g, "").replace(/\bt\(`[^`]*`[^)]*\)/g, "");
    for (const forbidden of ["Switch off", "New password", "Link phone", "No businesses yet", "Nobody is on your team", "Sends as", "Close this business", "Erase this business", "Only the platform owner", "Only a business manager"]) {
      assert.ok(!withoutDictionaryCalls.includes(`"${forbidden}`), `${page}.js has no hard-coded "${forbidden}"`);
    }
  }
  // The new Activity section is on the Businesses page, hidden until the server has said yes.
  assert.match(read("public/platform.html"), /<section id="activitySection"[^>]*hidden>/);
  assert.match(read("public/platform.js"), /api\(`\/audit\?limit=100/);
});

test("switching the language changes the visible words (a page run in a small fake browser)", () => {
  const nodes = [];
  const make = (props = {}) => { const node = { dataset: {}, attrs: {}, children: [], setAttribute(name, value) { this.attrs[name] = value; }, replaceChildren(...items) { this.children = items; this.textContent = items.map(item => item.textContent).join(""); }, ...props }; nodes.push(node); return node; };
  const heading = make({ dataset: { i18n: "team.h1" }, textContent: "My team" });
  const lede = make({ dataset: { i18n: "team.lede" }, textContent: "" });
  const input = make({ dataset: { i18nPlaceholder: "team.labelExample" }, attrs: { placeholder: "e.g. Mary's mobile" } });
  const documentElement = make({ dataset: { titleKey: "team.title" } });
  const document = {
    title: "My team · Kyro Genesis | AgriNexus", documentElement,
    createTextNode: value => ({ textContent: value }), createElement: () => ({ textContent: "" }),
    querySelectorAll(selector) { return nodes.filter(node => (selector === "[data-i18n]" && node.dataset.i18n) || (selector === "[data-i18n-placeholder]" && node.dataset.i18nPlaceholder) || (selector === "[data-i18n-title]" && node.dataset.i18nTitle)); }
  };
  const context = { document, localStorage: { getItem: () => "sw" }, module: undefined };
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(read("public/page-text.js"), context);
  const api = context.KyroPageText;
  assert.equal(api.savedLanguage(), "sw", "before the server answers, the sign-in screen's language is used");
  api.applyStatic("en");
  assert.equal(heading.textContent, "My team");
  assert.match(lede.textContent, /^Add the people who work with you/);
  assert.equal(input.attrs.placeholder, "e.g. Mary's mobile");
  assert.equal(document.title, "My team · Kyro Genesis | AgriNexus");
  api.applyStatic("sw");
  assert.equal(heading.textContent, "Timu yangu");
  assert.match(lede.textContent, /^Ongeza watu wanaofanya kazi nawe/);
  assert.equal(lede.children.filter(item => item.textContent === "yako").length, 1, "the bold word stays bold");
  assert.equal(input.attrs.placeholder, "mf. Simu ya Mary");
  assert.equal(document.title, "Timu yangu · Kyro Genesis | AgriNexus");
  assert.equal(documentElement.attrs.lang, "sw");
  api.applyStatic("en");
  assert.equal(heading.textContent, "My team", "and back again");
});

test("the server's own messages for these two pages are shown in Kiswahili too, and an unknown one is left as it is", () => {
  const source = read("server.js");
  const start = source.indexOf('if (url.pathname.startsWith("/api/team/"))');
  const end = source.indexOf('if (url.pathname === "/api/admin/business-manager"');
  assert.ok(start > 0 && end > start);
  const handlers = source.slice(start, end);
  const messages = new Set();
  for (const file of [handlers, read("server/teamManagement.js"), read("server/phoneCallerRegistry.js"), read("server/businessSender.js")]) {
    for (const match of file.matchAll(/error: "((?:[^"\\]|\\.)*)"/g)) messages.add(match[1].replace(/\\"/g, '"'));
  }
  for (const key of ["That could not be saved just now. Try again in a minute."]) messages.add(key);
  // Not for people: a developer hint that no screen on these pages can trigger, and a dynamic taken-elsewhere answer passed through from the directory.
  messages.delete("Say what to set: smsFrom, whatsappFrom, emailFrom, paystackSubaccount or flutterwaveSubaccount.");
  assert.ok(messages.size > 30, `found ${messages.size} messages`);
  const untranslated = [...messages].filter(message => serverError("sw", message) === message);
  assert.deepEqual(untranslated, [], "every fixed message the two pages can show has a Kiswahili version");
  for (const message of messages) assert.equal(serverError("en", message), message, "English is shown as sent");
  // The ones with a number or a list in them.
  assert.equal(serverError("sw", "A team can have up to 50 people. Ask an Admin to raise it."), "Timu inaweza kuwa na hadi watu 50. Mwombe Msimamizi aongeze.");
  assert.equal(serverError("sw", "This list is full (200 numbers). Remove one first."), "Orodha hii imejaa (nambari 200). Ondoa moja kwanza.");
  assert.equal(serverError("sw", "That is not a valid SMS sender."), "Hiyo si mtumaji wa sms sahihi.");
  assert.equal(serverError("sw", "That is not a valid email sender."), "Hiyo si mtumaji wa barua pepe sahihi.");
  assert.match(serverError("sw", "The erase was stopped and nothing was deleted: 1 of 2 people's data could not be queued for erasure (a@x.org). The business is still closed. Try again in a minute."), /^Ufutaji umesimamishwa.*\(a@x\.org\)/);
  assert.equal(serverError("sw", "Something the server has never said"), "Something the server has never said");
  assert.equal(serverError("sw", undefined), "");
});

// ---------- a real server: the pages learn the signed-in person's language ----------
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "page-text-"));
const defaultDb = path.join(dir, "db.json");
let server;
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function call(method, pathname, body, cookie) {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json, cookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}

test("the Team and Businesses screens are served, and the server tells each page the signed-in person's language", async () => {
  fs.copyFileSync(path.join(root, "db.json"), defaultDb);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, SESSION_SECRET: "page-text-secret-for-the-test-0123456789", PORT: String(port), AGRINEXUS_DB_PATH: defaultDb, AGRINEXUS_STATE_STORE: "json",
    DATABASE_URL: "", AGRINEXUS_SPACES_PATH: path.join(dir, "spaces-directory.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: path.join(dir, "uploads") }, stdio: "ignore", windowsHide: true });
  try {
    await waitFor(`${base}/api/healthz`);
    for (const file of ["page-text.js", "team.js", "platform.js", "team.html", "platform.html", "team.css"]) assert.equal((await fetch(`${base}/${file}`)).status, 200, file);
    const owner = await call("POST", "/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    assert.equal(owner.status, 200);
    const made = await call("POST", "/api/platform/businesses", { id: "swahili-co", name: "Swahili Co", adminName: "Neema", adminEmail: "neema@swahili.example", country: "Kenya" }, owner.cookie);
    assert.equal(made.status, 200);
    const admin = await call("POST", "/api/login", { email: "neema@swahili.example", password: made.json.created.password });
    assert.equal(admin.status, 200);
    const team = await call("GET", "/api/team/users", null, admin.cookie);
    assert.equal(languageOf(team.json.manager.language), "sw", "a Kenyan business's Admin gets Kiswahili by default");
    const english = await call("GET", "/api/platform/businesses", null, owner.cookie);
    assert.equal(languageOf(english.json.viewer.language), "en");
    // A Kiswahili error reaches the person the way the page shows it.
    const refused = await call("POST", "/api/team/users", { name: "", email: "x@y.org" }, admin.cookie);
    assert.equal(refused.status, 400);
    assert.equal(serverError("sw", refused.json.error), "Andika jina la mtu.");
  } finally { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); }
});
