#!/usr/bin/env node
"use strict";

// Read-only live check of the music/video providers, for the owner (from your own machine or a Render shell):
//
//   node scripts/check-media-providers-live.js            human-readable PASS/FAIL per provider
//   node scripts/check-media-providers-live.js --json     the same as JSON
//   node scripts/check-media-providers-live.js --require-youtube    exit 1 unless YouTube also works
//
// It resolves a few sample requests (a Kenyan radio station, a Nigerian one, a song, a video topic) against the REAL providers using the same code
// the app uses. It plays nothing, downloads nothing and writes nothing. No key is ever printed. A YouTube search is made only if YOUTUBE_API_KEY is set
// (one search = 100 of the 10,000 daily units), and at most two are made.
//
// Exit code: 0 when radio and at least one other free source work (and YouTube too with --require-youtube); 1 otherwise.

const { createMediaRuntime } = require("../server/media/runtime.js");

const args = new Set(process.argv.slice(2));
const asJson = args.has("--json");
const requireYoutube = args.has("--require-youtube");

const SAMPLES = [
  { label: "Kenyan radio (popular local station)", request: { query: "", kind: "radio", country: "Kenya" }, expect: ["radio-browser"] },
  { label: "Kenyan radio by name (Citizen)", request: { query: "Citizen", kind: "radio", country: "Kenya" }, expect: ["radio-browser"] },
  { label: "Nigerian radio (popular local station)", request: { query: "", kind: "radio", country: "Nigeria" }, expect: ["radio-browser"] },
  { label: "A song (Burna Boy - Last Last)", request: { query: "Burna Boy Last Last", kind: "music", country: "Nigeria" }, expect: ["audius", "youtube", "jamendo", "internet-archive", "apple-itunes-preview"] },
  { label: "A Public-domain/Creative Commons song (Internet Archive)", request: { query: "folk music", kind: "music", onlyProviders: ["internet-archive"], includePreview: false }, expect: ["internet-archive"] },
  { label: "A video topic (how to plant maize)", request: { query: "how to plant maize", kind: "video", country: "Kenya" }, expect: ["youtube", "internet-archive", "wikimedia-commons"] }
];

async function main() {
  const runtime = createMediaRuntime({ env: process.env, filePath: "" });
  const results = [];
  for (const sample of SAMPLES) {
    const started = Date.now();
    let outcome;
    try { outcome = await runtime.resolve(sample.request); } catch (error) { outcome = { ok: false, candidates: [], tried: [], reason: String(error.message || error) }; }
    results.push({ label: sample.label, ms: Date.now() - started, ok: outcome.ok, tried: outcome.tried, first: outcome.candidates[0] || null, reason: outcome.reason || "" });
  }

  const providers = {};
  for (const result of results) {
    for (const item of result.tried) {
      const entry = providers[item.provider] || (providers[item.provider] = { name: item.name, ok: 0, empty: 0, error: 0, skipped: 0, ms: [], reasons: new Set() });
      if (item.status === "ok") entry.ok += 1; else if (item.status === "empty") entry.empty += 1; else if (item.status === "error" || item.status === "quota") entry.error += 1; else entry.skipped += 1;
      if (item.status !== "skipped" && item.status !== "not-needed") entry.ms.push(item.ms);
      if (item.reason && item.status !== "not-needed") entry.reasons.add(item.reason);
    }
  }
  const report = runtime.report();
  const youtubeConfigured = report.youtube.configured;
  const missing = [];
  if (!youtubeConfigured) missing.push("YOUTUBE_API_KEY (optional: exact YouTube videos for songs and 'watch ...'; radio, Audius and Internet Archive work without it)");
  if (!process.env.JAMENDO_CLIENT_ID) missing.push("JAMENDO_CLIENT_ID (optional: more Creative Commons music; free tier is non-commercial)");

  const verdict = id => {
    const entry = providers[id];
    if (!entry) return "NOT TRIED";
    if (entry.ok > 0) return "PASS";
    if (entry.error > 0) return "FAIL";
    if (entry.skipped > 0 && entry.empty === 0) return "NOT CONFIGURED";
    return "NO MATCH";
  };
  const radioOk = verdict("radio-browser") === "PASS";
  const otherFree = ["audius", "internet-archive", "apple-itunes-preview", "wikimedia-commons"].some(id => verdict(id) === "PASS");
  const youtubeOk = verdict("youtube") === "PASS";
  const success = radioOk && otherFree && (!requireYoutube || youtubeOk);

  if (asJson) {
    console.log(JSON.stringify({ success, youtube: report.youtube, providers: Object.fromEntries(Object.entries(providers).map(([id, entry]) => [id, { verdict: verdict(id), ok: entry.ok, error: entry.error, empty: entry.empty, skipped: entry.skipped, avgMs: entry.ms.length ? Math.round(entry.ms.reduce((a, b) => a + b, 0) / entry.ms.length) : null, reasons: [...entry.reasons] }])), samples: results.map(result => ({ label: result.label, ok: result.ok, ms: result.ms, playing: result.first ? { provider: result.first.provider, title: result.first.title, live: result.first.live, isPreview: result.first.isPreview } : null, reason: result.reason })), stillMissing: missing }, null, 2));
  } else {
    console.log("Kyro music and video providers -- live check (read-only)\n");
    for (const result of results) {
      const first = result.first;
      console.log(`${result.ok ? "PASS" : "FAIL"}  ${result.label}  (${result.ms} ms)`);
      console.log(first ? `        -> ${first.providerName}: ${first.title}${first.artist ? ` - ${first.artist}` : ""}${first.live ? " [LIVE]" : ""}${first.isPreview ? " [30-second preview only]" : ""}` : `        -> ${result.reason}`);
    }
    console.log("\nPer provider:");
    for (const [id, entry] of Object.entries(providers)) {
      const avg = entry.ms.length ? `${Math.round(entry.ms.reduce((a, b) => a + b, 0) / entry.ms.length)} ms avg` : "not called";
      console.log(`  ${verdict(id).padEnd(15)} ${id.padEnd(22)} ok=${entry.ok} empty=${entry.empty} error=${entry.error} skipped=${entry.skipped}  ${avg}${entry.reasons.size ? `  (${[...entry.reasons].slice(0, 2).join("; ")})` : ""}`);
    }
    const quota = report.youtube.quota;
    console.log(`\nYouTube: ${youtubeConfigured ? "key present" : "no key"}; quota today: used ${quota.used} of ${quota.limit}, remaining ${quota.remaining}${quota.exhausted ? " (EXHAUSTED)" : ""}`);
    console.log(missing.length ? `\nStill missing (all optional):\n  - ${missing.join("\n  - ")}` : "\nNothing is missing.");
    console.log("No NEXUS_* flag is needed for any of these providers.");
    console.log(`\nResult: ${success ? "PASS" : "FAIL"}${requireYoutube && !youtubeOk ? " (YouTube required but not working)" : ""}`);
  }
  process.exitCode = success ? 0 : 1;
}

main().catch(error => { console.error("check failed:", error.message); process.exitCode = 1; });
