#!/usr/bin/env node
"use strict";

// The weekly check on the pages the guides cite. Every checked guide names the official pages it was read from and the date it was checked; this goes back to those pages (no model, no search provider, just a web request each)
// and reports which ones disappeared, moved or changed since the last time, so a "checked on" date is not left standing over a page that has since changed.
//
//   node scripts/check-guide-sources.js                 compare with the saved snapshot and print the report (exit 1 only when a page that used to work is now broken)
//   node scripts/check-guide-sources.js --update        compare, then save what was read as the new snapshot (do this after reading the changed pages)
//   options: --snapshot FILE  --candidate FILE (write the new snapshot there without replacing the saved one)  --report FILE  --concurrency N  --limit N  --only TEXT (just the addresses containing this)
//
// A page is: ok | changed (its text moved a long way from the saved copy) | moved (it redirects somewhere else now) | blocked (the site refuses a program, 401/403/429: it cannot be checked from here, which is not the same as broken)
// | broken (404, 410, 5xx or no answer, twice). Only "broken" fails the run, and only when it was not already broken in the saved snapshot. A page not in the snapshot yet is "new" and is just recorded.

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_SNAPSHOT = path.join(ROOT, "nexus", "knowledge", "source-snapshot.json");
const USER_AGENT = "Mozilla/5.0 (compatible; KyroSourceCheck/1.0; +https://github.com/tateron004-oss/agrinexus)";
// (a site that refuses the program above is tried once more as an ordinary browser: many government sites turn away anything that names itself a bot and answer a person; one that still refuses is "blocked")
const BROWSER_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
const GUIDES = ["us-small-business", "us-community-support", "small-business-technology", "africa-small-business", "ai-tools-for-business", "california-business", "womens-health", "chronic-conditions", "parents-guide", "child-help", "pr-events-guide", "church-guide", "athlete-guide", "money-guide", "safety-guide"];

// Every https address the guides cite, with the guides that cite it.
function collectSources(knowledgeDir = path.join(ROOT, "nexus", "knowledge")) {
  const found = new Map();
  const add = (url, guide) => { if (typeof url === "string" && /^https:\/\/[^\s]+$/.test(url)) { if (!found.has(url)) found.set(url, new Set()); found.get(url).add(guide); } };
  for (const name of GUIDES) {
    const mod = require(path.join(knowledgeDir, `${name}.js`));
    for (const source of Object.values(mod.SOURCES || {})) add(source && source.url, name);
    for (const source of Object.values(mod.WHO_SOURCES || {})) add(source && source.url, `${name}:who`);
  }
  const states = require(path.join(knowledgeDir, "state-entities.js"));
  for (const source of Object.values(states.SOURCES || {})) add(source && source.url, "state-entities");
  const walk = (value, guide) => { if (typeof value === "string") add(value, guide); else if (value && typeof value === "object") for (const inner of Object.values(value)) walk(inner, guide); };
  walk(require(path.join(knowledgeDir, "state-entities-data.js")), "state-entities");
  return [...found.entries()].map(([url, guides]) => ({ url, guides: [...guides].sort() })).sort((a, b) => a.url.localeCompare(b.url));
}

// The words of a page: scripts, styles and tags out, entities decoded, one case, one space.
function normalizeText(html) {
  return String(html || "")
    .replace(/<!--[\s\S]*?-->/g, " ").replace(/<(script|style|noscript|svg|head)\b[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;|&rsquo;|&lsquo;/g, "'").replace(/&[a-z]+;|&#\d+;/gi, " ")
    .toLowerCase().replace(/\s+/g, " ").trim();
}

// A 64-bit fingerprint of the words (three-word shingles): a small edit moves a few bits, a rewritten page moves many.
const MASK = (1n << 64n) - 1n;
function fnv64(text) { let hash = 0xcbf29ce484222325n; for (let i = 0; i < text.length; i += 1) { hash ^= BigInt(text.charCodeAt(i)); hash = (hash * 0x100000001b3n) & MASK; } return hash; }
function simhash(text) {
  const words = String(text || "").split(" ").filter(Boolean).slice(0, 60000);
  if (words.length < 3) return "0000000000000000";
  const votes = new Array(64).fill(0);
  for (let i = 0; i + 2 < words.length; i += 1) {
    const hash = fnv64(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
    for (let bit = 0; bit < 64; bit += 1) votes[bit] += (hash >> BigInt(bit)) & 1n ? 1 : -1;
  }
  let out = 0n; for (let bit = 0; bit < 64; bit += 1) if (votes[bit] > 0) out |= 1n << BigInt(bit);
  return out.toString(16).padStart(16, "0");
}
function hamming(a, b) { let x = BigInt(`0x${a}`) ^ BigInt(`0x${b}`); let n = 0; while (x) { n += Number(x & 1n); x >>= 1n; } return n; }

const CHANGED_BITS = 10; // out of 64: more than this is a page that was rewritten, not just re-dated

async function readPage(url, fetchImpl, timeoutMs, userAgent = USER_AGENT) {
  const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(url, { redirect: "follow", signal: controller.signal, headers: { "user-agent": userAgent, accept: "text/html,application/xhtml+xml,application/pdf;q=0.8,*/*;q=0.5", ...(userAgent === BROWSER_USER_AGENT ? { "accept-language": "en-US,en;q=0.9" } : {}) } });
    const type = String(response.headers && response.headers.get ? response.headers.get("content-type") || "" : "");
    let text = "";
    if (response.ok && /html|text|xml|json/i.test(type || "text/html")) text = normalizeText((await response.text()).slice(0, 2000000));
    return { status: response.status, finalUrl: String(response.url || url), type, text, bytes: text.length };
  } finally { clearTimeout(timer); }
}

// An address with the things that do not make it a different page taken off: the www, a trailing slash, a #fragment and ?query (a site that adds a session tag or a language to the address), and a default page name
// ("/Pages/default.aspx", "/index.html"), which is the same page as the folder.
function plainAddress(url) {
  return String(url || "").replace(/[#?].*$/, "").replace(/\/+$/, "").replace(/\/(?:pages\/)?(?:default\.aspx?|index\.(?:html?|php|aspx?))$/i, "").replace(/\/+$/, "").replace(/^https?:\/\/(?:www\.)?/i, "");
}

// One address: read it (twice if it fails), classify it against what the snapshot says.
async function checkOne(entry, previous, { fetchImpl, timeoutMs, now }) {
  let page = null; let error = "";
  for (let attempt = 1; attempt <= 2 && !page; attempt += 1) {
    try { const read = await readPage(entry.url, fetchImpl, timeoutMs); if (read.status >= 500 && attempt === 1) continue; page = read; } catch (e) { error = String((e && e.message) || e).slice(0, 120); }
  }
  if (page && [401, 403, 429].includes(page.status)) {
    try { const again = await readPage(entry.url, fetchImpl, timeoutMs, BROWSER_USER_AGENT); if (again.status < 400) page = again; } catch { /* still refused: it stays blocked below */ }
  }
  const base = { url: entry.url, guides: entry.guides, checkedAt: new Date(now()).toISOString() };
  if (!page) return { ...base, state: "broken", status: 0, error: error || "no answer" };
  if ([401, 403, 429].includes(page.status)) return { ...base, state: "blocked", status: page.status };
  if (page.status >= 400) return { ...base, state: "broken", status: page.status };
  const sameAddress = plainAddress(page.finalUrl) === plainAddress(entry.url);
  const fingerprint = page.text.length >= 200 ? simhash(page.text) : "";
  const result = { ...base, state: "ok", status: page.status, bytes: page.bytes, fingerprint, ...(sameAddress ? {} : { finalUrl: page.finalUrl }) };
  if (!sameAddress) result.state = "moved";
  if (previous && previous.fingerprint && fingerprint && hamming(previous.fingerprint, fingerprint) > CHANGED_BITS) result.state = result.state === "moved" ? "moved" : "changed";
  if (previous && previous.fingerprint && fingerprint) result.distance = hamming(previous.fingerprint, fingerprint);
  if (!previous) result.isNew = true;
  return result;
}

async function checkAll(entries, snapshot, { fetchImpl = (...args) => fetch(...args), concurrency = 3, timeoutMs = 45000, now = () => Date.now(), pauseMs = 120, onProgress = () => {} } = {}) {
  const results = new Array(entries.length); let next = 0;
  const worker = async () => {
    for (;;) {
      const index = next; next += 1; if (index >= entries.length) return;
      results[index] = await checkOne(entries[index], snapshot && snapshot.pages && snapshot.pages[entries[index].url], { fetchImpl, timeoutMs, now });
      onProgress(index + 1, entries.length);
      if (pauseMs) await new Promise(resolve => setTimeout(resolve, pauseMs));
    }
  };
  await Promise.all(Array.from({ length: Math.max(1, concurrency) }, worker));
  return results;
}

// What the run found, against the saved snapshot: which broken pages are NEW breakages (they worked, or were never seen, and are broken now).
function summarize(results, snapshot) {
  const was = url => snapshot && snapshot.pages && snapshot.pages[url];
  const by = state => results.filter(item => item.state === state);
  const newlyBroken = by("broken").filter(item => !was(item.url) || was(item.url).state !== "broken");
  return { total: results.length, ok: by("ok").length, changed: by("changed"), moved: by("moved"), blocked: by("blocked"), broken: by("broken"), newlyBroken, fresh: results.filter(item => item.isNew).length };
}

function renderReport(summary, { checkedOn = new Date().toISOString().slice(0, 10), snapshotDay = "" } = {}) {
  const lines = [`# Guide source check, ${checkedOn}`, "", `${summary.total} pages the guides cite were checked${snapshotDay ? ` against the snapshot of ${snapshotDay}` : " (no earlier snapshot)"}.`, "",
    `- fine: ${summary.ok}`, `- changed a long way: ${summary.changed.length}`, `- moved (redirects elsewhere): ${summary.moved.length}`, `- cannot be checked from here (the site refuses a program): ${summary.blocked.length}`, `- broken: ${summary.broken.length} (${summary.newlyBroken.length} new)`, `- not seen before: ${summary.fresh}`, ""];
  const section = (title, items, detail) => { if (!items.length) return; lines.push(`## ${title}`, ""); for (const item of items.slice(0, 80)) lines.push(`- ${item.url} (${item.guides.join(", ")})${detail ? ` ${detail(item)}` : ""}`); if (items.length > 80) lines.push(`- ...and ${items.length - 80} more`); lines.push(""); };
  section("Broken since the last check: the answer that cites it needs a look", summary.newlyBroken, item => `- ${item.status || item.error}`);
  section("Still broken", summary.broken.filter(item => !summary.newlyBroken.includes(item)), item => `- ${item.status || item.error}`);
  section("Changed a long way: read the page again and update the answer and its date if needed", summary.changed, item => `- ${item.distance} of 64 bits`);
  section("Moved: update the address", summary.moved, item => `- now ${item.finalUrl}`);
  return lines.join("\n");
}

function readSnapshot(file) { try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { return null; } }
function buildSnapshot(results, now = () => Date.now()) {
  const pages = {};
  for (const item of results) pages[item.url] = { state: item.state, status: item.status, fingerprint: item.fingerprint || "", bytes: item.bytes || 0, checkedAt: item.checkedAt, guides: item.guides };
  return { takenAt: new Date(now()).toISOString(), count: results.length, pages };
}

async function main(argv) {
  const options = { snapshot: DEFAULT_SNAPSHOT, update: false, candidate: "", report: "", concurrency: 3, limit: 0, only: "" };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]; const next = () => argv[++i];
    if (arg === "--update") options.update = true; else if (arg === "--snapshot") options.snapshot = path.resolve(next()); else if (arg === "--candidate") options.candidate = path.resolve(next());
    else if (arg === "--report") options.report = path.resolve(next()); else if (arg === "--concurrency") options.concurrency = Number(next()) || 3; else if (arg === "--limit") options.limit = Number(next()) || 0; else if (arg === "--only") options.only = String(next() || "");
  }
  let entries = collectSources();
  if (options.only) entries = entries.filter(entry => entry.url.includes(options.only));
  if (options.limit) entries = entries.slice(0, options.limit);
  const snapshot = readSnapshot(options.snapshot);
  console.error(`Checking ${entries.length} pages the guides cite...`);
  const results = await checkAll(entries, snapshot, { concurrency: options.concurrency, onProgress: (done, total) => { if (done % 50 === 0 || done === total) console.error(`  ${done}/${total}`); } });
  const summary = summarize(results, snapshot);
  const report = renderReport(summary, { snapshotDay: snapshot && snapshot.takenAt ? snapshot.takenAt.slice(0, 10) : "" });
  console.log(report);
  if (options.report) fs.writeFileSync(options.report, report);
  if (process.env.GITHUB_STEP_SUMMARY) { try { fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${report}\n`); } catch { /* the log has it */ } }
  const fresh = buildSnapshot(results);
  if (options.candidate) fs.writeFileSync(options.candidate, JSON.stringify(fresh, null, 1));
  if (options.update) { fs.writeFileSync(options.snapshot, JSON.stringify(fresh, null, 1)); console.error(`Saved the snapshot: ${options.snapshot}`); }
  return summary.newlyBroken.length ? 1 : 0;
}

module.exports = Object.freeze({ collectSources, normalizeText, simhash, hamming, readPage, checkOne, checkAll, summarize, renderReport, buildSnapshot, CHANGED_BITS, GUIDES, DEFAULT_SNAPSHOT });

if (require.main === module) main(process.argv.slice(2)).then(code => process.exit(code), error => { console.error(error); process.exit(2); });
