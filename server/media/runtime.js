"use strict";

// The process-wide media runtime: one quota counter, one cache and one health record shared by every route and tool that resolves media.

const path = require("node:path");
const util = require("./util.js");
const { createMediaState } = require("./state.js");
const { createTtlCache } = require("./cache.js");
const { resolveMedia, PROVIDERS } = require("./resolver.js");
const radioBrowser = require("./providers/radio-browser.js");
const youtube = require("./providers/youtube.js");

function stateFilePath(env) {
  if (env.AGRINEXUS_MEDIA_STATE_PATH) return env.AGRINEXUS_MEDIA_STATE_PATH;
  // Only saved where the operator has given the app a data folder (Render: AGRINEXUS_DATA_DIR); otherwise the counter lives in memory, which keeps tests
  // and local runs from sharing a quota file. Google's own quotaExceeded answer corrects a counter that restarted.
  const dir = env.AGRINEXUS_DATA_DIR || (env.AGRINEXUS_DB_PATH ? path.dirname(env.AGRINEXUS_DB_PATH) : "");
  return dir ? path.join(dir, "kyro-media-state.json") : "";
}

function createMediaRuntime({ env = process.env, fetch, now, filePath } = {}) {
  const state = createMediaState({ filePath: filePath === undefined ? stateFilePath(env) : filePath, now, env });
  const cache = createTtlCache({ now });
  const ctx = util.createContext({ env, fetch, now, state, cache });
  const playedToday = new Map(); // "station" -> day, so one station counts one click per day from this server (their etiquette)
  return {
    ctx,
    state,
    cache,
    resolve: request => resolveMedia(request, ctx),
    async reportPlayed({ provider, id }) {
      if (provider !== radioBrowser.id) return { counted: false, reason: "only radio stations are counted" };
      const day = new Date(ctx.now()).toISOString().slice(0, 10);
      const key = String(id || "");
      if (playedToday.get(key) === day) return { counted: false, reason: "already counted today" };
      const counted = await radioBrowser.reportPlayed(ctx, key);
      if (counted) {
        if (playedToday.size > 500) playedToday.clear();
        playedToday.set(key, day);
      }
      return { counted };
    },
    // Admin view: which providers are configured, how they have been doing since this process started, and the YouTube quota. No secrets.
    report() {
      const health = state.health();
      return {
        generatedAt: new Date(ctx.now()).toISOString(),
        note: "Health counters are for this server process since it last started. Nothing here is a listening history: no queries, users or titles are kept.",
        flagsRequired: "none -- the keyless providers (radio-browser, Audius, Internet Archive, Wikimedia Commons, Apple previews) need no NEXUS_* flag; YouTube needs only YOUTUBE_API_KEY.",
        youtube: { configured: youtube.isConfigured(ctx).configured, quota: state.quota() },
        recentResolves: state.recentResolves(),
        providers: Object.values(PROVIDERS).map(provider => {
          const config = provider.isConfigured(ctx);
          const record = health[provider.id] || { ok: 0, failed: 0, lastOkAt: null, lastErrorAt: null, lastError: null, lastLatencyMs: null };
          return {
            id: provider.id, name: provider.name, configured: config.configured,
            requires: config.configured ? [] : config.requires,
            status: !config.configured ? "needs-configuration" : record.ok === 0 && record.failed === 0 ? "not-used-yet" : record.failed > 0 && record.ok === 0 ? "failing" : "working",
            ...record
          };
        })
      };
    },
    // Cheap live checks of the keyless services (no YouTube quota is spent).
    async probe() {
      const out = [];
      const timed = async (id, fn) => {
        const started = Date.now();
        try { const detail = await fn(); state.recordOk(id, Date.now() - started); out.push({ id, ok: true, ms: Date.now() - started, detail }); }
        catch (error) { state.recordError(id, error?.code || "probe-failed", Date.now() - started); out.push({ id, ok: false, ms: Date.now() - started, error: String(error?.code || error?.message || "failed").slice(0, 80) }); }
      };
      await timed(radioBrowser.id, async () => `${(await radioBrowser.discoverServers(ctx)).length} servers`);
      await timed("audius", async () => `${(await require("./providers/audius.js").discoverHosts(ctx)).length} hosts`);
      return out;
    }
  };
}

let shared = null;
function getMediaRuntime() {
  if (!shared) shared = createMediaRuntime({ env: process.env });
  return shared;
}
function setMediaRuntimeForTests(runtime) { shared = runtime; }

module.exports = Object.freeze({ createMediaRuntime, getMediaRuntime, setMediaRuntimeForTests, stateFilePath });
