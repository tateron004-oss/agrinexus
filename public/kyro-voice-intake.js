(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroVoiceIntake = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // A reusable, voice-first "ask one question at a time, write the answer down" engine for any
  // multi-field form or intake. Built for a tech-limited, often-can't-type audience: every form
  // using this engine gets voice-driven filling for free, by supplying a field list and a submit
  // callback -- no new UI or voice plumbing per form. This file is pure state/logic: no DOM, no
  // network, no knowledge of any specific form (résumé or otherwise). See public/kyro-intake-forms.js
  // for the actual form definitions, and app.js for the Realtime wiring that drives this engine.
  //
  // A caller creates one engine instance per active intake (KyroVoiceIntake.create(definition)),
  // feeds it transcripts/typed answers via handleUtterance(), and receives a Decision back
  // describing what happened and what should be said/shown next. The engine never performs a side
  // effect itself (no speaking, no rendering, no saving) -- that's entirely the caller's job.

  const DEFAULT_IDLE_TIMEOUT_MS = 10 * 60 * 1000;
  const DUPLICATE_TEXT_WINDOW_MS = 4000;
  const MAX_SEEN_UTTERANCES = 30;
  const MAX_ATTEMPTS_BEFORE_SKIP_OFFER = 2;

  function normalizeText(value) {
    return String(value || "").toLowerCase().replace(/[.,!?;:]+$/g, "").replace(/\s+/g, " ").trim();
  }

  // --- control-phrase classifier -------------------------------------------------------------
  // Every pattern here is fully anchored (^...$), so a real, long answer like "I worked as a bus
  // stop attendant for two years" can never be mistaken for a bare command -- only an utterance
  // that IS (almost) nothing but the control phrase itself matches.
  const CONTROL_PATTERNS = {
    cancel: /^(please )?(cancel|stop|quit|exit|never ?mind|forget (it|this|that)|i don'?t want (this|it|to))( (this|it|that|the (resume|r[ée]sum[ée]|form)))?( please)?$/i,
    repeat: /^(repeat|say (that|it) again|what( was that| did you say)?|pardon|sorry|i didn'?t (hear|understand|get) (that|you))\??$/i,
    skip: /^(skip|pass|next|none|nothing|no|not now|i don'?t have (one|any|it))$/i,
    back: /^(go back|back|previous|undo|that'?s wrong|wrong|change (that|the last( one)?))$/i,
    yes: /^(yes|yeah|yep|yup|sure|correct|that'?s right|that'?s correct|okay|ok)$/i,
    no: /^(no|nope|not quite|that'?s not right|that'?s not correct)$/i
  };
  // A "switch" needs an explicit wake word + a clearly new request, or "new request" verbatim --
  // deliberately narrow, so a hesitant or rambling answer is never mistaken for topic-switching.
  const SWITCH_PATTERN = /^(kyro|nexus)[, ]+(open|show|play|find|call|what|where|tell|start|go to|take me to)\b|^new request\b/i;
  const CHANGE_PATTERN = /^change (my |the )?(.+)$/i;

  function classifyControl(text, { inConfirm = false } = {}) {
    const norm = normalizeText(text);
    if (!norm) return null;
    if (SWITCH_PATTERN.test(norm)) return "switch";
    if (inConfirm) {
      if (CONTROL_PATTERNS.yes.test(norm)) return "yes";
      if (CHANGE_PATTERN.test(norm)) return "change";
      if (CONTROL_PATTERNS.no.test(norm)) return "no";
    }
    if (CONTROL_PATTERNS.cancel.test(norm)) return "cancel";
    if (CONTROL_PATTERNS.repeat.test(norm)) return "repeat";
    if (CONTROL_PATTERNS.back.test(norm)) return "back";
    if (CONTROL_PATTERNS.skip.test(norm)) return "skip";
    return null;
  }

  // --- default per-field-kind normalizers ----------------------------------------------------
  const SPOKEN_DIGITS = {
    zero: "0", oh: "0", o: "0", one: "1", two: "2", three: "3", four: "4", five: "5",
    six: "6", seven: "7", eight: "8", nine: "9"
  };

  function normalizeName(raw) {
    let value = String(raw || "")
      .replace(/^\s*(my name is|i am|i'm|it's|its|this is|call me|name[:\s]+)\s*/i, "")
      .replace(/\s+please\s*$/i, "")
      .replace(/[.!]+$/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (value.length < 2 || value.length > 60) return { ok: false, reason: "length" };
    if (/\d/.test(value)) return { ok: false, reason: "digits" };
    return { ok: true, value };
  }

  function normalizePhone(raw) {
    const text = String(raw || "").toLowerCase();
    let digits = "";
    const words = text.split(/[\s,.-]+/).filter(Boolean);
    let repeatNext = 1;
    for (const word of words) {
      if (word === "double") { repeatNext = 2; continue; }
      if (word === "triple") { repeatNext = 3; continue; }
      if (word === "plus") { digits += "+"; repeatNext = 1; continue; }
      let mapped = null;
      if (/^\d$/.test(word)) mapped = word;
      else if (SPOKEN_DIGITS[word]) mapped = SPOKEN_DIGITS[word];
      else if (/^\+?\d+$/.test(word)) { digits += word; repeatNext = 1; continue; }
      if (mapped) { digits += mapped.repeat(repeatNext); repeatNext = 1; }
    }
    const digitCount = (digits.match(/\d/g) || []).length;
    if (digitCount < 7 || digitCount > 15) return { ok: false, reason: "length" };
    return { ok: true, value: digits };
  }

  function normalizeEmail(raw) {
    let value = String(raw || "")
      .toLowerCase()
      .replace(/\s+at\s+/g, "@")
      .replace(/\s+dot\s+/g, ".")
      .replace(/\s+underscore\s+/g, "_")
      .replace(/\s+dash\s+/g, "-")
      .replace(/\s+/g, "")
      .trim();
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(value)) return { ok: false, reason: "format" };
    return { ok: true, value };
  }

  // Deliberately does NOT split a list into items -- that stays solely in the one place each form
  // actually understands how to split correctly (e.g. nexus/resume/build.js's items()), so a
  // comma/"and" splitting bug only ever needs fixing in one place, not duplicated here too.
  function normalizeList(raw) {
    const value = String(raw || "").replace(/\s+/g, " ").trim();
    if (!value) return { ok: false, reason: "empty" };
    return { ok: true, value };
  }

  function normalizeSentences(raw) {
    const value = String(raw || "").replace(/\s+/g, " ").trim();
    if (!value) return { ok: false, reason: "empty" };
    return { ok: true, value };
  }

  function normalizePlainText(raw) {
    const value = String(raw || "").replace(/\s+/g, " ").trim();
    if (!value) return { ok: false, reason: "empty" };
    return { ok: true, value };
  }

  const NORMALIZERS = Object.freeze({
    name: normalizeName,
    phone: normalizePhone,
    email: normalizeEmail,
    list: normalizeList,
    sentences: normalizeSentences,
    text: normalizePlainText
  });

  function normalizeAnswer(field, raw) {
    const fn = typeof field.normalize === "function" ? field.normalize : (NORMALIZERS[field.kind] || NORMALIZERS.text);
    try {
      return fn(raw);
    } catch {
      return { ok: false, reason: "error" };
    }
  }

  function defaultReadback(fields, values) {
    const parts = fields
      .filter(field => values[field.key] !== undefined && values[field.key] !== "")
      .map(field => {
        const value = values[field.key];
        const text = Array.isArray(value) ? value.join(", ") : String(value);
        return `${field.label}: ${text}.`;
      });
    return parts.length ? `Here is what I have. ${parts.join(" ")}` : "I don't have any answers yet.";
  }

  // --- the engine -----------------------------------------------------------------------------
  function create(definition, options = {}) {
    if (!definition || !Array.isArray(definition.fields) || !definition.fields.length) {
      throw new Error("KyroVoiceIntake.create requires a definition with a non-empty fields array");
    }
    const now = typeof options.now === "function" ? options.now : Date.now;
    const idleTimeoutMs = Number.isFinite(options.idleTimeoutMs) ? options.idleTimeoutMs : DEFAULT_IDLE_TIMEOUT_MS;
    const fields = definition.fields;
    const intakeId = options.intakeId || `${definition.id || "intake"}-${now()}-${Math.random().toString(36).slice(2, 8)}`;

    let phase = "asking";
    let index = 0;
    const values = {};
    const skipped = new Set();
    const attempts = {};
    const history = [];
    const seenUtteranceIds = [];
    let lastUtterance = null;
    const repeatBuffer = {};
    let returnToConfirm = false;
    let startedAt = now();
    let updatedAt = startedAt;
    let pauseReason = null;
    let pausedFromPhase = null;

    function touch() { updatedAt = now(); }

    // Remembers which phase we were in (asking/more/confirming) before pausing, so resume() can
    // put the user back where they actually were instead of always falling back to the plain
    // field question -- without this, pausing mid-"anything else?" collection or mid-confirmation
    // and then resuming would silently drop back to re-asking the base question, out of step with
    // what the engine would actually do next with the user's reply.
    function enterPaused(reason) {
      if (phase !== "paused") pausedFromPhase = phase;
      phase = "paused";
      pauseReason = reason || "paused";
    }

    function recordUtterance(utteranceId, text) {
      if (utteranceId) {
        seenUtteranceIds.push(utteranceId);
        if (seenUtteranceIds.length > MAX_SEEN_UTTERANCES) seenUtteranceIds.shift();
      }
      lastUtterance = { norm: normalizeText(text), at: now() };
    }

    if (options.seedUtterance && options.seedUtterance.text) {
      recordUtterance(options.seedUtterance.id || "", options.seedUtterance.text);
    }

    function isDuplicate(utteranceId, text) {
      if (utteranceId && seenUtteranceIds.includes(utteranceId)) return true;
      if (!utteranceId && lastUtterance) {
        const norm = normalizeText(text);
        if (norm && norm === lastUtterance.norm && (now() - lastUtterance.at) < DUPLICATE_TEXT_WINDOW_MS) return true;
      }
      return false;
    }

    function currentField() { return fields[index] || null; }

    function nextUnskippedIndex(from) {
      let i = from;
      while (i < fields.length && skipped.has(fields[i].key)) i += 1;
      return i;
    }

    function prevUnskippedIndex(from) {
      let i = from;
      while (i > 0 && skipped.has(fields[i].key)) i -= 1;
      return i;
    }

    function snap() {
      const field = currentField();
      return {
        intakeId,
        formId: definition.id,
        title: definition.title || "",
        phase,
        index,
        total: fields.length,
        currentField: field ? { key: field.key, label: field.label, question: field.question, required: !!field.required, hint: field.hint || "" } : null,
        values: { ...values },
        skipped: Array.from(skipped)
      };
    }

    function decision(action, say, extra = {}) {
      return { consumed: true, action, say: say || "", field: currentField(), values: { ...values }, snapshot: snap(), ...extra };
    }

    function askCurrent(prefix) {
      phase = "asking";
      const field = currentField();
      const line = `${prefix ? `${prefix} ` : ""}${field.question}`;
      return decision("ask", line);
    }

    function reaskCurrent(message) {
      phase = "asking";
      return decision("reask", message);
    }

    function finishCollecting() {
      const err = typeof definition.validate === "function" ? definition.validate(values) : null;
      if (err && err.fieldKey) {
        const errIndex = fields.findIndex(field => field.key === err.fieldKey);
        index = errIndex >= 0 ? errIndex : 0;
        skipped.delete(currentField().key);
        return reaskCurrent(err.message);
      }
      if (definition.confirmBeforeSubmit) {
        phase = "confirming";
        const summary = typeof definition.readback === "function" ? definition.readback(values) : defaultReadback(fields, values);
        return decision("confirm", `${summary} Shall I make it now? Say yes, or tell me which part to change.`);
      }
      phase = "submitting";
      return decision("submit", "One moment.");
    }

    function advanceFromField() {
      index = nextUnskippedIndex(index + 1);
      if (index >= fields.length) return finishCollecting();
      return askCurrent("Got it.");
    }

    function storeAnswerAndAdvance(field, value) {
      history.push({ key: field.key, prevValue: values[field.key] });
      values[field.key] = value;
      attempts[field.key] = 0;
      if (returnToConfirm) {
        returnToConfirm = false;
        phase = "confirming";
        const summary = typeof definition.readback === "function" ? definition.readback(values) : defaultReadback(fields, values);
        return decision("confirm", `Updated. ${summary} Shall I make it now? Say yes, or tell me which part to change.`);
      }
      return advanceFromField();
    }

    function handleFieldAnswer(field, rawText) {
      const result = normalizeAnswer(field, rawText);
      if (!result.ok) {
        attempts[field.key] = (attempts[field.key] || 0) + 1;
        const canOfferSkip = !field.required && attempts[field.key] >= MAX_ATTEMPTS_BEFORE_SKIP_OFFER;
        const base = field.retryPrompt || `I didn't quite get that. ${field.question}`;
        return reaskCurrent(canOfferSkip ? `${base} Or say 'skip'.` : base);
      }
      if (field.repeatable) {
        const arr = repeatBuffer[field.key] || (repeatBuffer[field.key] = []);
        arr.push(result.value);
        phase = "more";
        const max = field.repeatable.max || Infinity;
        if (arr.length >= max) {
          values[field.key] = arr.slice();
          delete repeatBuffer[field.key];
          return advanceFromField();
        }
        return decision("ask", field.repeatable.moreQuestion || "Anything else? Or say that's all.");
      }
      return storeAnswerAndAdvance(field, result.value);
    }

    function handleMoreAnswer(field, rawText) {
      const control = classifyControl(rawText, { inConfirm: false });
      if (control === "repeat") return doRepeat();
      if (control === "back") return doBack();
      const norm = normalizeText(rawText);
      const isDone = control === "skip" || /^(that'?s all|that is all|nothing else|no more|done|finished)$/i.test(norm);
      if (isDone) {
        const arr = repeatBuffer[field.key] || [];
        values[field.key] = arr.slice();
        delete repeatBuffer[field.key];
        return advanceFromField();
      }
      const result = normalizeAnswer(field, rawText);
      if (!result.ok) {
        return decision("reask", `I didn't quite get that. ${field.repeatable.moreQuestion || "Anything else? Or say that's all."}`);
      }
      const arr = repeatBuffer[field.key] || (repeatBuffer[field.key] = []);
      arr.push(result.value);
      const max = field.repeatable.max || Infinity;
      if (arr.length >= max) {
        values[field.key] = arr.slice();
        delete repeatBuffer[field.key];
        return advanceFromField();
      }
      return decision("ask", field.repeatable.moreQuestion || "Anything else? Or say that's all.");
    }

    function handleConfirmAnswer(rawText) {
      const control = classifyControl(rawText, { inConfirm: true });
      if (control === "yes") {
        phase = "submitting";
        return decision("submit", "One moment.");
      }
      if (control === "repeat") return doRepeat();
      if (control === "back") return doBack();
      if (control === "change") {
        const match = CHANGE_PATTERN.exec(normalizeText(rawText));
        const target = match ? match[2] : "";
        const field = fields.find(f => f.key.toLowerCase() === target || f.label.toLowerCase() === target
          || (f.aliases || []).some(alias => alias.toLowerCase() === target || target.includes(alias.toLowerCase())));
        if (!field) {
          const summary = typeof definition.readback === "function" ? definition.readback(values) : defaultReadback(fields, values);
          return decision("confirm", `I'm not sure which part you mean. ${summary} Say yes, or name the part to change.`);
        }
        index = fields.indexOf(field);
        skipped.delete(field.key);
        returnToConfirm = true;
        return askCurrent();
      }
      if (control === "no") {
        return decision("confirm", "Which part should I change?");
      }
      const summary = typeof definition.readback === "function" ? definition.readback(values) : defaultReadback(fields, values);
      return decision("confirm", `${summary} Shall I make it now? Say yes, or tell me which part to change.`);
    }

    function doCancel() {
      phase = "cancelled";
      return decision("cancelled", "");
    }

    function doRepeat() {
      if (phase === "confirming") {
        const summary = typeof definition.readback === "function" ? definition.readback(values) : defaultReadback(fields, values);
        return decision("confirm", `${summary} Shall I make it now? Say yes, or tell me which part to change.`);
      }
      if (phase === "more") {
        return decision("ask", currentField().repeatable.moreQuestion || "Anything else? Or say that's all.");
      }
      const field = currentField();
      return decision("ask", field ? field.question : "");
    }

    function doSkip() {
      if (phase === "more") {
        const field = currentField();
        const arr = repeatBuffer[field.key] || [];
        values[field.key] = arr.slice();
        delete repeatBuffer[field.key];
        return advanceFromField();
      }
      const field = currentField();
      if (!field) return decision("ask", "");
      if (field.required) {
        return reaskCurrent(`I need this one to continue. ${field.question}`);
      }
      skipped.add(field.key);
      return advanceFromField();
    }

    function doBack() {
      if (phase === "more") {
        const field = currentField();
        const arr = repeatBuffer[field.key] || [];
        if (arr.length) {
          arr.pop();
          return decision("ask", `Okay, removed that. ${field.repeatable.moreQuestion || "Anything else?"}`);
        }
        phase = "asking";
        return decision("ask", field.question);
      }
      if (phase === "confirming") {
        index = prevUnskippedIndex(fields.length - 1);
        skipped.delete(currentField().key);
        phase = "asking";
        return decision("ask", `Let's redo that. ${currentField().question}`);
      }
      if (index <= 0) {
        phase = "asking";
        return decision("ask", `This is the first question. ${currentField().question}`);
      }
      index = prevUnskippedIndex(index - 1);
      skipped.delete(currentField().key);
      phase = "asking";
      return decision("ask", `Let's redo that. ${currentField().question}`);
    }

    function handleUtterance(text, meta = {}) {
      touch();
      if (phase === "submitting") return decision("busy", "");
      if (phase === "done" || phase === "cancelled") return { consumed: false, action: "ignored", say: "", snapshot: snap() };
      if (isDuplicate(meta.utteranceId, text)) return decision("duplicate", "");
      const trimmed = String(text || "").trim();
      if (!trimmed) return decision("duplicate", "");
      recordUtterance(meta.utteranceId, text);

      // "switch" (wake-word new request) and "cancel" must be honored in every phase, including
      // while confirming or while collecting a repeatable field's extra answers -- otherwise a
      // user who says "stop"/"never mind" or issues a new wake-word command mid-confirmation or
      // mid-"anything else?" gets that utterance silently swallowed (confirming) or, worse,
      // recorded as literal answer text (more), instead of actually cancelling or being routed to
      // normal command handling.
      const control = classifyControl(trimmed, { inConfirm: phase === "confirming" });
      if (control === "switch") {
        enterPaused("switch");
        return { consumed: false, action: "paused", say: "", field: currentField(), values: { ...values }, snapshot: snap() };
      }
      if (control === "cancel") return doCancel();

      if (phase === "confirming") return handleConfirmAnswer(trimmed);
      if (phase === "more") return handleMoreAnswer(currentField(), trimmed);

      if (control === "repeat") return doRepeat();
      if (control === "back") return doBack();
      if (control === "skip") return doSkip();

      return handleFieldAnswer(currentField(), trimmed);
    }

    function start() {
      touch();
      index = nextUnskippedIndex(0);
      phase = "asking";
      const field = currentField();
      const intro = definition.intro ? `${definition.intro} ` : "";
      return decision("ask", `${intro}${field.question}`);
    }

    function isExpired(atTime) {
      const t = typeof atTime === "number" ? atTime : now();
      return (t - updatedAt) > idleTimeoutMs;
    }

    return Object.freeze({
      id: intakeId,
      formId: definition.id,
      start,
      handleUtterance,
      repeat: () => { touch(); return doRepeat(); },
      skip: () => { touch(); return doSkip(); },
      back: () => { touch(); return doBack(); },
      cancel: () => { touch(); return doCancel(); },
      confirm: () => { touch(); return handleConfirmAnswer("yes"); },
      pause: (reason) => { touch(); enterPaused(reason); return decision("paused", ""); },
      resume: () => {
        touch();
        if (phase !== "paused") return decision("ask", "");
        phase = pausedFromPhase || "asking";
        pausedFromPhase = null;
        if (phase === "confirming") {
          const summary = typeof definition.readback === "function" ? definition.readback(values) : defaultReadback(fields, values);
          return decision("confirm", `Let's keep going. ${summary} Shall I make it now? Say yes, or tell me which part to change.`);
        }
        if (phase === "more") {
          const field = currentField();
          return decision("ask", `Let's keep going. ${field.repeatable.moreQuestion || "Anything else? Or say that's all."}`);
        }
        const field = currentField();
        return decision("ask", field ? `Let's keep going. ${field.question}` : "");
      },
      markSubmitting: () => { touch(); phase = "submitting"; return decision("busy", ""); },
      submitFailed: (opts = {}) => {
        touch();
        if (opts.fieldKey) {
          const errIndex = fields.findIndex(f => f.key === opts.fieldKey);
          if (errIndex >= 0) { index = errIndex; skipped.delete(currentField().key); return reaskCurrent(opts.message || "That didn't work. Let's try again."); }
        }
        phase = "confirming";
        return decision("confirm", opts.message || "That didn't work. Say yes to try again.");
      },
      markDone: (say) => { touch(); phase = "done"; return decision("done", say || "All done."); },
      snapshot: snap,
      isExpired,
      get phase() { return phase; },
      get pauseReason() { return pauseReason; }
    });
  }

  return Object.freeze({ create, classifyControl, normalizers: NORMALIZERS, normalizeText });
});
