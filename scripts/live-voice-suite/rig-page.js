"use strict";
// Runs INSIDE the page (the runner sends this function's source to Chrome). It stands in for a person with a microphone: the page is given a pretend microphone, each sentence is turned into real speech by the app's own
// /api/voice/speak and played into that microphone, and everything the page then does (what it heard, which tool the model called, which screen it drew, what the model said) is written to a log the runner reads.
// Nothing here may refer to anything outside the function: it is stringified and run in the page.
function installKyroVoiceRig(makeEvaluator) {
  if (window.__kyroRig) return "already installed";
  const rig = window.__kyroRig = { log: [], buffers: {}, t0: Date.now(), used: 0 };
  const log = rig.log;
  const add = (kind, value) => { let text; try { text = typeof value === "string" ? value : JSON.stringify(value); } catch { text = String(value); } log.push({ at: Date.now() - rig.t0, kind, text: String(text).slice(0, 600) }); };
  rig.add = add;
  try { Object.defineProperty(document, "visibilityState", { get: () => "visible", configurable: true }); Object.defineProperty(document, "hidden", { get: () => false, configurable: true }); document.hasFocus = () => true; } catch { /* optional */ }

  // the pretend microphone
  const ctx = rig.ctx = new AudioContext(); const dest = rig.dest = ctx.createMediaStreamDestination();
  const osc = ctx.createOscillator(); const gain = ctx.createGain(); gain.gain.value = 0; osc.connect(gain); gain.connect(dest); osc.start();
  const original = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = async constraints => { if (constraints && constraints.audio) { rig.used += 1; return dest.stream; } return original(constraints); };

  // what the page does, written down (wrapping the app's own functions)
  const SKIP = /delta|rate_limits|input_audio_buffer\.append|output_audio_buffer|response\.(?:content_part|output_item)\.|\.added$/i;
  const textOf = payload => { const p = payload || {}; const item = p.item || {}; const content = Array.isArray(item.content) ? item.content.map(part => (part && (part.transcript || part.text)) || "").join(" ") : ""; return String(p.transcript || p.text || content || (p.error && p.error.message) || p.message || p.toolName || p.name || item.name || p.status || "").trim(); };
  const wrap = (name, describe, kind) => {
    const fn = window[name]; if (typeof fn !== "function" || fn.__rigWrapped) return false;
    const wrapped = function (...args) { let line = null; try { line = describe(args); if (line !== null) add(kind, line); } catch { /* describing never breaks the page */ } return fn.apply(this, args); };
    wrapped.__rigWrapped = true; window[name] = wrapped; return true;
  };
  wrap("handleOpenAiAgentsRealtimeEvent", a => { const type = String((a[1] && a[1].type) || ""); if (SKIP.test(type) || SKIP.test(String(a[0]))) return null; return `${a[0]}${type ? " " + type : ""} ${textOf(a[1])}`; }, "event");
  wrap("routeKyroVoiceIntakeTranscript", a => `${(a[0] && a[0].transcript) || ""}\u0001${(a[0] && a[0].source) || ""}`, "heard");
  wrap("handleNexusUnifiedBrainRuntimeCommand", a => `${a[0]}\u0001${(a[1] && a[1].source) || ""}`, "typed-route");
  wrap("callNexusOpenAiRealtimeTool", a => `${(a[0] && (a[0].name || a[0])) || ""}\u0001${JSON.stringify(a[1] || (a[0] && a[0].arguments) || "").slice(0, 160)}`, "tool");
  wrap("kyroSpeakPageLine", a => String(a[0] || ""), "page-line");
  wrap("handleKyroDismissCommand", a => String(a[0] || ""), "dismiss");
  wrap("kyroShowResultScreen", a => String(a[1] || ""), "screen-call");
  // who takes a result screen down (the reason a return to the orb gives, or the code that removed it), so a screen that vanishes can be explained
  wrap("kyroReturnToOrb", a => JSON.stringify((a[0] && { reason: a[0].reason, source: a[0].source }) || {}), "return-to-orb");
  try {
    const originalRemove = Element.prototype.remove;
    Element.prototype.remove = function (...args) {
      try { if (this.getAttribute && this.getAttribute("data-kyro-result") !== null) add("screen-removed", String(new Error().stack || "").split("\n").slice(2, 5).map(line => line.trim().replace(/^at /, "").slice(0, 70)).join(" <- ")); } catch { /* describing never breaks the page */ }
      return originalRemove.apply(this, args);
    };
  } catch { /* the rig still works without it */ }
  const realFetch = window.fetch;
  if (!realFetch.__rigWrapped) {
    window.fetch = function (resource, options) {
      const promise = realFetch.apply(this, arguments);
      try {
        const url = String((resource && resource.url) || resource);
        if (/\/api\/(?:voice|nexus\/runtime)\//.test(url) && !/speak|stall|status|session/.test(url)) {
          promise.then(response => add("web", `${(options && options.method) || "GET"} ${url.replace(/^https?:\/\/[^/]+/, "").replace(/\?.*/, "")} ${response.status}`), error => add("web", `FAILED ${url} ${error && error.message}`));
        }
      } catch { /* optional */ }
      return promise;
    };
    window.fetch.__rigWrapped = true;
  }

  // speech: the sentence as real audio
  const speakOnce = async text => {
    const key = "t:" + text; if (rig.buffers[key]) return key;
    // (a sentence written in Spanish is spoken as Spanish)
    const spanish = /[¿¡ñáéíóú]/i.test(text);
    const result = await window.request("/api/voice/speak", { method: "POST", body: { correlationId: "voice-suite-" + Date.now(), text, language: spanish ? "es" : "en", locale: spanish ? "es-US" : "en-US", rate: 1, pitch: 1, forceOpenAi: true } });
    const url = result && result.voiceResult && result.voiceResult.audioDataUrl;
    if (!url) throw new Error("the speech service returned no audio");
    rig.buffers[key] = await ctx.decodeAudioData(await (await fetch(url)).arrayBuffer());
    return key;
  };
  rig.speech = async text => { let last; for (let n = 0; n < 4; n += 1) { try { return await speakOnce(text); } catch (error) { last = error; await new Promise(r => setTimeout(r, 2500)); } } throw last; };
  rig.mark = () => log.length;
  // true when nothing is being said by the model or the page and nothing is being heard
  rig.busy = () => {
    const recent = log.filter(entry => entry.at > Date.now() - rig.t0 - 1800);
    return recent.some(entry => entry.kind === "event" && /response\.created|output_audio_transcript\.delta|audio_start|speech_started/.test(entry.text) && !/->/.test(entry.text));
  };
  rig.say = async text => { const key = await rig.speech(text); const index = log.length; await ctx.resume(); const source = ctx.createBufferSource(); source.buffer = rig.buffers[key]; source.connect(dest); source.start(); return { index, seconds: source.buffer.duration }; };
  // waits until the model has stopped talking (so the next sentence is not spoken over it)
  rig.settle = async (maxMs = 25000) => {
    const start = Date.now(); let lastCount = -1; let still = 0;
    while (Date.now() - start < maxMs) {
      const relevant = log.filter(e => e.kind === "page-line" || (e.kind === "event" && /response\.created|output_audio\.done|audio_start|audio_stopped|output_audio_transcript\.done/.test(e.text))).length;
      if (relevant === lastCount) { still += 1; if (still >= 4) break; } else { still = 0; lastCount = relevant; }
      await new Promise(r => setTimeout(r, 700));
    }
    return Date.now() - start;
  };

  // what is on the screen
  const visible = node => { const box = node.getBoundingClientRect(); return box.width > 0 && box.height > 0; };
  const topKind = () => {
    let node = document.elementFromPoint(innerWidth / 2, innerHeight / 2);
    while (node && node !== document.body) {
      if (node.getAttribute && node.getAttribute("data-kyro-result")) return "kyro-screen:" + node.getAttribute("data-kyro-result");
      if (node.hasAttribute && node.hasAttribute("data-nexus-visual-shell")) return "legacy-card";
      if (node.id === "kyroVoiceIntakePanel") return "intake-panel";
      if (node.id === "nexus-workspace") return "workspace-card";
      if (node.hasAttribute && node.hasAttribute("data-kyro-media-player")) return "music-player";
      node = node.parentElement;
    }
    return "orb";
  };
  rig.screens = () => [...document.querySelectorAll("[data-kyro-result]")].filter(visible).map(node => ({
    kind: node.getAttribute("data-kyro-result"), app: node.getAttribute("data-kyro-app") || "", keep: node.hasAttribute("data-kyro-keep"),
    text: node.innerText.replace(/\s+/g, " ").trim().slice(0, 1500),
    buttons: [...node.querySelectorAll("button,a,label[data-kyro-upload-button]")].map(b => b.innerText.trim()).filter(Boolean).slice(0, 40),
    fields: [...node.querySelectorAll("input,textarea,select")].map(n => n.name || n.type || "").slice(0, 20),
    images: node.querySelectorAll("img").length, frames: node.querySelectorAll("iframe,video").length,
    links: node.querySelectorAll("[data-kyro-listing-links] a").length, hasDownload: [...node.querySelectorAll("button,a")].some(b => /download/i.test(b.innerText))
  }));
  rig.player = () => {
    try {
      const controller = window.KyroMediaPlayerController; const state = controller && controller.getState ? controller.getState() : null;
      return { active: Boolean(state && state.active), state: state ? state.state : "", title: state ? String(state.title || "").slice(0, 80) : "", status: state ? String(state.status || "").slice(0, 120) : "", frames: document.querySelectorAll("iframe[src*=youtube]").length, bar: Boolean(document.querySelector("[data-kyro-media-player]:not([hidden])")) };
    } catch { return { active: false, state: "", title: "", status: "", frames: 0, bar: false }; }
  };
  rig.intake = () => { const panel = document.querySelector("#kyroVoiceIntakePanel"); return panel && visible(panel) ? panel.innerText.replace(/\s+/g, " ").trim().slice(0, 500) : ""; };

  // everything the runner needs to judge one sentence, since `index`
  rig.state = index => {
    const slice = log.slice(index);
    const of = kind => slice.filter(e => e.kind === kind).map(e => e.text);
    const heard = [...new Set(of("heard").map(t => t.split("\u0001")[0]).filter(t => t && t !== "null"))];
    const events = of("event");
    const modelSaid = events.filter(t => /output_audio_transcript\.done/.test(t)).map(t => t.replace(/^.*transport_event response\.output_audio_transcript\.done\s*/, "").trim()).filter(Boolean);
    return {
      heard, tools: of("tool").map(t => t.split("\u0001")[0]), typed: of("typed-route").map(t => t.split("\u0001")[0]), pageLines: of("page-line"), modelSaid, dismissed: of("dismiss").length > 0,
      timeline: slice.filter(e => ["typed-route", "screen-call", "return-to-orb", "screen-removed", "page-line", "heard"].includes(e.kind) || (e.kind === "event" && /output_audio_transcript\.done|response\.created|response\.done/.test(e.text)))
        .map(e => `${e.at}ms ${e.kind} ${String(e.text).replace(/\s+/g, " ").slice(0, 46)}`),
      web: of("web"), screenCalls: of("screen-call"), returns: of("return-to-orb"), removals: of("screen-removed"), screens: rig.screens(), top: topKind(), intake: rig.intake(), player: rig.player(),
      section: typeof currentSectionId === "function" ? currentSectionId() : "", voiceActive: typeof realtimeVoiceActive === "function" ? realtimeVoiceActive() : false,
      responding: events.filter(t => /response\.created/.test(t)).length > events.filter(t => /response\.done/.test(t)).length, now: Date.now() - rig.t0
    };
  };

  // taps and typing, as a person would
  const matcher = (label, flags = "i") => new RegExp(label, flags);
  rig.tap = (label, nth = 0) => {
    const screen = [...document.querySelectorAll("[data-kyro-result]")].filter(visible).pop() || document.body;
    const re = matcher(label); const nodes = [...screen.querySelectorAll("button,a,label,[role=button]")].filter(n => re.test(n.innerText.trim()));
    const node = nodes[nth]; if (!node) return { tapped: false, available: [...screen.querySelectorAll("button,a")].map(n => n.innerText.trim()).filter(Boolean).slice(0, 20) };
    node.click(); return { tapped: true, label: node.innerText.trim().slice(0, 60) };
  };
  rig.type = (selector, value, nth = 0) => {
    const screen = [...document.querySelectorAll("[data-kyro-result]")].filter(visible).pop() || document;
    const node = [...screen.querySelectorAll(selector)][nth]; if (!node) return false;
    node.focus();
    const proto = node.tagName === "TEXTAREA" ? HTMLTextAreaElement.prototype : node.tagName === "SELECT" ? HTMLSelectElement.prototype : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, "value").set.call(node, value);
    node.dispatchEvent(new Event("input", { bubbles: true })); node.dispatchEvent(new Event("change", { bubbles: true })); return true;
  };
  // a small picture or PDF handed to the file chooser on the screen
  rig.chooseFile = async (kind = "image") => {
    const input = [...document.querySelectorAll("[data-kyro-result] input[type=file]")].pop(); if (!input) return false;
    const canvas = document.createElement("canvas"); canvas.width = 300; canvas.height = 160; const g = canvas.getContext("2d");
    g.fillStyle = "#fff"; g.fillRect(0, 0, 300, 160); g.fillStyle = "#000"; g.font = "bold 30px sans-serif"; g.fillText("MAIZE PRICE 50 KES", 10, 80);
    const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
    const transfer = new DataTransfer(); transfer.items.add(new File([blob], kind + ".png", { type: "image/png" })); input.files = transfer.files; input.dispatchEvent(new Event("change", { bubbles: true })); return true;
  };
  rig.typedCommand = text => { window.handleNexusUnifiedBrainRuntimeCommand(text, { source: "typed" }); return true; };
  rig.clear = () => { document.querySelectorAll("[data-kyro-result]").forEach(node => node.remove()); try { window.KyroMediaPlayerController && window.KyroMediaPlayerController.stop && window.KyroMediaPlayerController.stop({ announce: false }); } catch { /* optional */ } return true; };

  // starts the live voice session the way a person does: tap the microphone (sometimes twice: the page wants a microphone it has already been given)
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  rig.startVoice = async () => {
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      const button = document.getElementById("nexusPermanentMicrophoneBtn"); if (button) button.click();
      for (let i = 0; i < 40; i += 1) { await sleep(750); if (typeof realtimeVoiceActive === "function" && realtimeVoiceActive()) { await sleep(2500); return true; } }
    }
    return false;
  };

  // judging and running cases, here in the page (so the same code runs from a script that drives Chrome and from a person's own signed-in browser)
  const { evaluate } = makeEvaluator();
  rig.evaluate = evaluate;
  rig.until = async (mark, expect, timeoutMs) => {
    const start = Date.now(); let state = null; let outcome = null;
    while (Date.now() - start < timeoutMs) {
      state = rig.state(mark); outcome = evaluate(expect, state, { requireVoiceActive: true });
      if (outcome.pass) { await sleep(3500); state = rig.state(mark); return { state, outcome: evaluate(expect, state, { requireVoiceActive: true }) }; }
      await sleep(900);
    }
    return { state, outcome };
  };
  rig.cleanup = async lastState => {
    // a form still open is ended the way a person ends it (its own voice command), so the session's normal answering is restored
    if (lastState && lastState.intake) { try { await rig.say("Cancel."); await sleep(7000); } catch { /* cleared below */ } }
    rig.clear();
  };
  rig.runSteps = async (startMark, steps, defaultTimeout) => {
    let mark = startMark; let last = null; const failures = []; const warnings = [];
    for (const step of steps || []) {
      if (step.tap !== undefined) { const result = rig.tap(step.tap, step.nth || 0); if (!result.tapped) { failures.push(`could not tap "${step.tap}" (buttons: ${(result.available || []).join(" | ")})`); break; } await sleep(1500); }
      else if (step.type) { if (!rig.type(step.type.selector, step.type.value, step.type.nth || 0)) { failures.push(`no field for ${step.type.selector}`); break; } }
      else if (step.choose) { if (!(await rig.chooseFile(step.choose))) { failures.push("no file chooser on the screen"); break; } mark = rig.mark(); }
      else if (step.say) { await rig.settle(20000); mark = (await rig.say(step.say)).index; }
      else if (step.wait) await sleep(step.wait);
      if (step.expect) {
        const { state, outcome } = await rig.until(mark, step.expect, step.timeoutMs || defaultTimeout);
        last = state; failures.push(...(outcome ? outcome.failures : ["no state"])); warnings.push(...(outcome ? outcome.warnings : []));
        if (outcome && !outcome.pass) break;
      }
    }
    return { failures, warnings, state: last };
  };
  // what the page did, kept with a failed case so the cause can be read from the report
  rig.detail = state => (state ? { heard: state.heard, modelSaid: state.modelSaid.map(line => line.slice(0, 140)), tools: state.tools, typed: state.typed, pageLines: state.pageLines.map(line => line.slice(0, 100)), top: state.top, section: state.section, web: state.web.slice(-6), screenCalls: (state.screenCalls || []).map(line => line.slice(0, 80)), dismissed: state.dismissed, returns: state.returns, removals: state.removals, timeline: state.timeline } : null);
  rig.runCase = async entry => {
    const started = Date.now(); const timeout = entry.timeoutMs || 30000;
    try {
      let mark;
      if (entry.typed) { mark = rig.mark(); rig.typedCommand(entry.typed); } else { await rig.settle(25000); mark = (await rig.say(entry.say)).index; }
      const first = await rig.until(mark, entry.expect || {}, timeout);
      let failures = [...(first.outcome ? first.outcome.failures : ["no state"])]; let warnings = [...(first.outcome ? first.outcome.warnings : [])]; let last = first.state;
      if (!failures.length && entry.then) { const rest = await rig.runSteps(mark, entry.then, timeout); failures = rest.failures; warnings = warnings.concat(rest.warnings); last = rest.state || last; }
      await rig.cleanup(last);
      return { id: entry.id, area: entry.area, say: entry.say || entry.typed, status: failures.length ? "fail" : "pass", failures, warnings, ms: Date.now() - started, heard: (first.state && first.state.heard) || [], detail: failures.length ? rig.detail(last || first.state) : undefined };
    } catch (error) {
      try { await rig.cleanup(null); } catch { /* the next case starts clean anyway */ }
      return { id: entry.id, area: entry.area, say: entry.say || entry.typed, status: "error", failures: [String((error && error.message) || error)], warnings: [], ms: Date.now() - started, heard: [] };
    }
  };
  // runs the cases one after another without being waited for: read rig.results (and rig.running) to follow it
  rig.results = []; rig.running = false; rig.finished = false;
  rig.runCases = entries => {
    rig.results = []; rig.running = true; rig.finished = false; rig.stop = false;
    (async () => {
      for (const entry of entries) {
        if (rig.stop) break;
        const result = await rig.runCase(entry); rig.results.push(result);
        if (typeof realtimeVoiceActive === "function" && !realtimeVoiceActive()) { result.reconnected = await rig.startVoice(); if (!result.reconnected) break; }
      }
      rig.running = false; rig.finished = true;
    })().catch(error => { rig.running = false; rig.finished = true; rig.crash = String((error && error.message) || error); });
    return entries.length;
  };
  return "installed";
}

// The one string that installs the rig in a page (the runner sends it to Chrome; a person can also paste it in their own browser's console).
function buildInstallScript({ compact = false } = {}) {
  const { makeEvaluator } = require("./expect.js");
  const source = `(${installKyroVoiceRig.toString()})(${makeEvaluator.toString()})`;
  // compact: whole-line comments and indentation taken out, for pasting (nothing else is changed)
  return compact ? source.split("\n").filter(line => !/^\s*\/\//.test(line)).map(line => line.replace(/^\s+/, "")).join("\n") : source;
}

module.exports = { installKyroVoiceRig, buildInstallScript };
