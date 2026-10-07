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
  // Found live (first real voice test of the résumé intake): people don't say bare command words.
  // Asked to "repeat", the speech recognizer heard "I'm sorry, can you repeat that, please?" and "I
  // said I didn't hear you. Could you repeat that, please?", and "Kyro, stop for a minute" came back as
  // "Chatroom, stop for a minute." -- none matched the original bare-word patterns, so every one was
  // saved as an ANSWER (a skills entry, an education entry, a languages entry). The patterns below
  // therefore accept the natural phrasings people really use, and a wake word the recognizer
  // commonly mishears. They stay safe for real answers two ways: every pattern is anchored to the
  // whole utterance or requires an explicit "repeat/say ... that/again"-style object (so "repeat
  // customers" or "bus stop attendant" are still answers), and the natural-language tier only
  // applies to short utterances.
  const WAKE_NAMES = "kyro|kiro|kairo|cairo|cyro|kyra|kira|chiro|kayro|chatroom|nexus";
  const WAKE_PREFIX = new RegExp(`^(?:hey[, ]+)?(?:${WAKE_NAMES})[, ]+`);
  const CONTROL_PATTERNS = {
    cancel: /^(please )?(cancel|quit|exit|never ?mind|forget (it|this|that)|i don'?t want (this|it|to)|i want to (stop|quit))( (this|it|that|the (resume|r[ée]sum[ée]|form)))?( please)?$/i,
    repeat: /^(repeat|say (that|it) again|what( was that| did you say)?|pardon|sorry|i didn'?t (hear|understand|get) (that|you))\??$/i,
    // "none" in the many ways people say it ("I have none", "n/a", "no experience", "I do not have any"): an optional question is skipped, never saved as the answer "I have none".
    skip: /^(skip|pass|next|none|nothing|no|nope|nil|n\/?a|not now|no thanks|no thank you|not any|i have (none|nothing|not got any)|i (do not|don'?t) have (one|any|it|anything)|i have no (experience|school|training|education|email|phone|skills?|languages?)|no (experience|school|training|education|email|phone|skills?|languages?)|(i )?(don'?t know|no idea|not sure))$/i,
    back: /^(go back|back|previous|undo|that'?s wrong|wrong|change (that|the last( one)?))$/i,
    yes: /^(yes|yeah|yep|yup|sure|correct|that'?s right|that'?s correct|okay|ok)$/i,
    no: /^(no|nope|not quite|that'?s not right|that'?s not correct)$/i
  };
  // "Pause" keeps everything said so far (unlike cancel). A bare "stop" is a pause, not a cancel: a
  // person who says "stop" over Kyro's voice means "stop talking / wait", and throwing away ten
  // minutes of answers for that would be far worse than waiting. Saying "cancel" cancels for good.
  const PAUSE_PATTERN = /^(?:ok(?:ay)?[, ]+)?(?:please[, ]+)?(?:stop(?: (?:it|this|that|talking))?|(?:hold|hang) on(?: (?:a |one |just a )?(?:minute|moment|second|sec))?|wait(?: (?:a |one |just a )?(?:minute|moment|second|sec))?|pause|stop for (?:a |one |just a )?(?:minute|moment|second|sec)|give me (?:a |one |just a )?(?:minute|moment|second|sec)|(?:just )?(?:a |one )(?:minute|moment|second|sec)|i need (?:a |one )?(?:minute|moment|second|sec|break))(?: please)?$/i;
  // Natural ways to ask Kyro to say the question again -- only ever tested against short utterances.
  const REPEAT_NATURAL = [
    /\b(?:can|could|would|will|please)\b[^.?!]{0,25}\b(?:repeat|say|ask)\b[^.?!]{0,25}\b(?:that|it|this|again|question|me)\b/,
    /\b(?:repeat|say)\s+(?:that|it|this|the question|the last (?:one|part)|again)\b/,
    /\bwhat (?:was|is) (?:the|that) question\b/,
    /\bwhat did you (?:just )?say\b/,
    /\bwhat (?:was|were) you saying\b/,
    /\b(?:i )?(?:didn'?t|did not|couldn'?t|could not|can'?t|cannot|don'?t|do not) (?:hear|catch|understand|get) (?:you|that|it|what|the question)\b/,
    /\b(?:i )?(?:don'?t|do not) understand\b/,
    /^(?:i'?m )?sorry[, ]*(?:what|pardon)?$/,
    /^come again\b/
  ];
  const MAX_NATURAL_CONTROL_WORDS = 14;
  const MAX_DIRECTED_WORDS = 30;
  // Ends a repeatable field's "anything else?" loop. Natural phrasing, not just "that's all".
  const DONE_COLLECTING = /^(?:(?:no|nope|okay|ok|yes)[, ]+)?(?:(?:that'?s|that is|it'?s|it is) (?:all|it|everything|enough|about it)|(?:i'?m|i am) (?:done|finished|good)|(?:nothing|no) (?:else|more)|(?:all )?(?:done|finished)|nope|no more|that'?ll do|that will do)(?: for now)?(?:[, ]+(?:thank you|thanks|please))?$/i;
  // A "switch" needs an explicit wake word + a clearly new request, or "new request" verbatim --
  // deliberately narrow, so a hesitant or rambling answer is never mistaken for topic-switching.
  const SWITCH_PATTERN = new RegExp(`^(?:hey[, ]+)?(?:${WAKE_NAMES})[, ]+(open|show|play|find|call|what|where|tell|start|go to|take me to)\\b|^new request\\b`, "i");
  // Said TO Kyro rather than answering it ("you're doing it again", "I'm telling you to stop"). Never
  // an answer to a form field. Pausing hands the conversation back to Kyro's normal replies so the
  // person gets a real response instead of silence while their frustration piles up as "answers".
  const DIRECTED_AT_KYRO = /^(?:(?:ok(?:ay)?|well|so|no|hey)[, ]+)*(?:you'?re|you are|you keep|you did|you just|you said|you didn'?t|why (?:are|did|do|can'?t) you|are you|did you|do you)\b|\b(?:i'?m|i am) (?:not asking|telling you|trying to tell)\b|\b(?:telling|told) you to\b|\b(?:you|please|just) stop\b|\bstop (?:asking|doing|saying|talking|interrupting)\b/i;
  // "Let's start over" -- wipes the answers and begins again. Anchored to a leading command shape so a
  // real answer that merely contains "start ... again" is not mistaken for it.
  const RESTART_PATTERN = /^(?:(?:ok(?:ay)?|well|so|please|no|yes)[, ]+)*(?:(?:can|could) (?:we|you|i)|let'?s|i (?:want|need|would like) to|we (?:should|need to)|why don'?t we)?\s*(?:start|begin)\b[^.?!]{0,40}\b(?:over|again|from scratch|from the (?:top|start|beginning))\b|^(?:(?:ok(?:ay)?|well|so|please)[, ]+)*(?:restart|start over|begin again)\b/i;
  const CHANGE_PATTERN = /^change (my |the )?(.+)$/i;

  // --- Kiswahili --------------------------------------------------------------------------------
  // The same control words in Kiswahili. Found by the user-journey sweep: "ruka" (skip) was saved as a skill, "ndiyo" (yes) as education, "ndio ni hayo tu"
  // (that's all) as work experience and "jina langu ni Juma Otieno" as the full name "Jina langu ni Juma Otieno". A bare "acha" (stop) PAUSES, like a bare "stop"
  // does in English: answers are kept and the person is told how to carry on ("endelea") or cancel ("ghairi"). First draft: a fluent speaker must review every word.
  const SW_CONTROL = {
    cancel: /^(?:tafadhali )?(?:ghairi|acha kabisa|sitaki tena|sitaki kuendelea|niache|usiendelee|achana na hii)(?: (?:hii|hili|yote|cv|wasifu))?(?: tafadhali)?$/,
    repeat: /^(?:tafadhali )?(?:rudia|rudia tena|rudia swali|sema tena|sema hivyo tena|nirudie|naomba (?:urudie|kurudia)|unaweza kurudia|samahani|sikusikia|sikuelewa|sijaelewa|sijakusikia)(?: tafadhali)?$/,
    skip: /^(?:tafadhali )?(?:ruka|pita|ruka hiyo|ruka swali|pita swali|rukia|nipitishe|hapana|la|hakuna|sina(?: (?:chochote|kitu|uzoefu(?: wowote)?|elimu|ujuzi|lugha|simu|barua pepe|cheti))?|sijui|sijawahi|sijasoma|hapana asante|la asante)$/,
    back: /^(?:rudi|rudi nyuma|nyuma|rudi kwa (?:swali )?lililopita|si sahihi|sio sahihi|siyo sahihi|makosa|badilisha (?:hilo|hiyo|la mwisho))$/,
    yes: /^(?:ndiyo|ndio|sawa|sawa sawa|sawa kabisa|naam|ni sahihi|ni kweli|kweli|hakika|poa|ndiyo sawa|ndio sawa|ndiyo ni sahihi)$/,
    no: /^(?:hapana|la|siyo|sio|si sahihi|sio sahihi|siyo sahihi|bado)$/
  };
  const SW_PAUSE = /^(?:tafadhali )?(?:subiri|ngoja|simama|sitisha|acha|nyamaza|dakika moja|subiri kidogo|ngoja kidogo|acha kwanza|acha kidogo|nipe (?:dakika|muda)(?: moja)?|nahitaji (?:dakika|muda|mapumziko))(?: tafadhali)?$/;
  const SW_REPEAT_NATURAL = /\b(?:sikuelewa|sijaelewa|sikusikia|sijasikia|rudia|sema tena|unasema nini|ulisema nini|swali ni nini)\b/;
  const SW_DONE_COLLECTING = /^(?:(?:ndiyo|ndio|sawa|hapana|la)[, ]+)?(?:(?:ndiyo|ndio|ni) )?(?:hayo tu|hiyo tu|ni hayo|ni hiyo|hakuna zaidi|hakuna kingine|hakuna nyingine|hakuna tena|basi|tosha|imetosha|nimemaliza|nimeshamaliza|ndiyo basi|ndio basi|ndiyo hiyo|ndio hiyo)(?: (?:kwa sasa|asante))?(?:[, ]+(?:asante|tafadhali))?$/;
  const SW_SWITCH = new RegExp(`^(?:hey[, ]+|hujambo[, ]+|habari[, ]+|mambo[, ]+)?(?:${WAKE_NAMES})[, ]+(?:fungua|onyesha|cheza|tafuta|piga|nini|wapi|niambie|anza|nenda|nifungulie|nionyeshe|nitafutie|niwekee)\\b|^ombi jipya\\b`, "i");
  const SW_RESTART = /^(?:(?:sawa|tafadhali|ok)[, ]+)*(?:(?:tuanze|anza|nataka kuanza|naomba tuanze)\s+(?:upya|tena|kutoka mwanzo|kuanzia mwanzo)\b|anza upya\b|tuanze upya\b)/;
  const SW_CHANGE = /^(?:badilisha|rekebisha|nataka kubadilisha|ninataka kubadilisha)\s+(?:(?:langu|lako|yangu|zangu|wangu|la|ya)\s+)?(.+)$/;
  // Words that mean the speaker is using Kiswahili. Only distinctive ones count: "na" and "sana" also turn up in names and English chatter.
  const SW_MARKERS = /\b(?:ndiyo|ndio|hapana|sawa|asante|tafadhali|naitwa|ninaitwa|jina|langu|yangu|wangu|zangu|nataka|ninataka|nipe|ruka|rudia|rudi|ghairi|naishi|ninaishi|ujuzi|elimu|kazi|sina|hakuna|habari|nimefanya|nimesoma|nililima|ninaweza|naweza|najua|ninajua|kusoma|kuandika|hayo|wasifu|mimi|katika|shule|kidato|miaka|nimemaliza|endelea|subiri|ngoja|acha)\b/g;
  const SW_STRONG = /\b(?:ndiyo|ndio|hapana|asante|tafadhali|naitwa|ninaitwa|jina langu|ruka|rudia|ghairi|naishi|ninaishi|ujuzi|elimu|sina|hakuna|habari|nimefanya|nimesoma|nililima|ninaweza|naweza|najua|ninajua|hayo tu|wasifu|nimemaliza|endelea|subiri|ngoja|nataka|ninataka|yangu|wangu|zangu|nipe)\b/;
  const EN_MARKERS = /\b(?:i|my|the|and|is|am|have|has|yes|no|skip|please|name|work|school|stop|cancel|back|repeat|that's|all|live|can|good|at)\b/g;
  // Which language a sentence is in: "sw", "en", or null when it cannot tell (a name, a single word). Switching AWAY from Kiswahili needs a clear English
  // sentence (strict), so a Swahili speaker who says the English word "skip" is not answered in English.
  function detectLanguage(text, { strict = false } = {}) {
    const norm = normalizeText(text);
    if (!norm) return null;
    if (SW_STRONG.test(norm)) return "sw";
    const sw = (norm.match(SW_MARKERS) || []).length;
    const en = (norm.match(EN_MARKERS) || []).length;
    if (sw >= 2 && sw > en) return "sw";
    if (sw === 0 && en >= (strict ? 2 : 1)) return "en";
    return null;
  }
  function isBareYes(text) {
    const stripped = normalizeText(text).replace(WAKE_PREFIX, "");
    return CONTROL_PATTERNS.yes.test(stripped) || SW_CONTROL.yes.test(stripped);
  }

  // Everything the engine itself says, in both languages. {x} is filled in from the caller. The English text is what the original tests pin: keep it identical.
  const MSG = {
    en: {
      gotIt: "Got it.", sorryRetry: "I didn't quite get that. {q}", orSkip: " Or say 'skip'.", moreDefault: "Anything else? Or say that's all.",
      confirmTail: "Shall I make it now? Say yes, or tell me which part to change.", updated: "Updated.", notSure: "I'm not sure which part you mean. {summary} Say yes, or name the part to change.",
      whichPart: "Which part should I change?", startOver: "Okay, let's start over. {q}", needThis: "I need this one to continue. {q}", removed: "Okay, removed that. {q}",
      firstQuestion: "This is the first question. {q}", redo: "Let's redo that. {q}", talk: "Okay, I stopped. Your answers are saved. Tell me what is wrong, or say continue to go on, or cancel to stop.",
      hold: "Okay, I will wait. Say continue when you are ready, or say cancel to stop.", keepGoing: "Let's keep going. {q}", oneMoment: "One moment.", failed: "That didn't work. Let's try again.",
      failedYes: "That didn't work. Say yes to try again.", done: "All done.", here: "Here is what I have.", noAnswers: "I don't have any answers yet.",
      yesFollow: "Okay. {q}", yesMore: "Okay, tell me. {q}"
    },
    sw: {
      gotIt: "Sawa.", sorryRetry: "Samahani, sikuelewa vizuri. {q}", orSkip: " Au sema 'ruka'.", moreDefault: "Kuna kingine? Au sema ndio hayo tu.",
      confirmTail: "Nikitengeneze sasa? Sema ndiyo, au niambie sehemu ya kubadilisha.", updated: "Nimebadilisha.", notSure: "Sijui unamaanisha sehemu gani. {summary} Sema ndiyo, au taja sehemu ya kubadilisha.",
      whichPart: "Nibadilishe sehemu gani?", startOver: "Sawa, tuanze upya. {q}", needThis: "Ninahitaji jibu la swali hili ili kuendelea. {q}", removed: "Sawa, nimeondoa hicho. {q}",
      firstQuestion: "Hili ndilo swali la kwanza. {q}", redo: "Tuirudie hiyo. {q}", talk: "Sawa, nimesimama. Majibu yako yamehifadhiwa. Niambie kuna tatizo gani, au sema endelea kuendelea, au ghairi kuacha.",
      hold: "Sawa, nitasubiri. Sema endelea ukiwa tayari, au sema ghairi kuacha.", keepGoing: "Tuendelee. {q}", oneMoment: "Subiri kidogo.", failed: "Haikufaulu. Tujaribu tena.",
      failedYes: "Haikufaulu. Sema ndiyo kujaribu tena.", done: "Imekamilika.", here: "Hivi ndivyo nilivyoandika.", noAnswers: "Bado sina majibu yoyote.",
      yesFollow: "Sawa. {q}", yesMore: "Sawa, niambie. {q}"
    }
  };
  function fill(template, params) { return String(template).replace(/\{(\w+)\}/g, (whole, name) => (params && params[name] !== undefined ? params[name] : whole)).replace(/\s+$/g, ""); }

  function wordCount(text) { return String(text || "").split(/\s+/).filter(Boolean).length; }

  function isDoneCollecting(text) {
    const norm = normalizeText(text).replace(WAKE_PREFIX, "");
    return DONE_COLLECTING.test(norm) || SW_DONE_COLLECTING.test(norm);
  }

  function classifyControl(text, { inConfirm = false } = {}) {
    const raw = String(text || "").trim();
    const norm = normalizeText(raw);
    if (!norm) return null;
    // A recognizer-friendly wake word at the front never changes WHAT the person asked for.
    const stripped = norm.replace(WAKE_PREFIX, "");
    const words = wordCount(stripped);
    if (inConfirm) {
      if (CONTROL_PATTERNS.yes.test(stripped) || SW_CONTROL.yes.test(stripped)) return "yes";
      if (CHANGE_PATTERN.test(stripped) || SW_CHANGE.test(stripped)) return "change";
      if (CONTROL_PATTERNS.no.test(stripped) || SW_CONTROL.no.test(stripped)) return "no";
    }
    if (CONTROL_PATTERNS.cancel.test(stripped) || SW_CONTROL.cancel.test(stripped)) return "cancel";
    if (PAUSE_PATTERN.test(stripped) || SW_PAUSE.test(stripped)) return "pause";
    if (CONTROL_PATTERNS.repeat.test(stripped) || SW_CONTROL.repeat.test(stripped)) return "repeat";
    if (words <= MAX_NATURAL_CONTROL_WORDS && (REPEAT_NATURAL.some(pattern => pattern.test(stripped)) || SW_REPEAT_NATURAL.test(stripped))) return "repeat";
    if (SWITCH_PATTERN.test(norm) || SW_SWITCH.test(norm)) return "switch";
    // A short QUESTION put to Kyro ("do you understand?", "what do you mean?") is never an answer to
    // a form field -- re-ask rather than saving it.
    if (words <= MAX_NATURAL_CONTROL_WORDS && /\?\s*$/.test(raw)
      && (/\b(?:you|your|kyro)\b/.test(stripped) || /^(?:what|why|how|who|where|when|which|huh|pardon|sorry)\b/.test(stripped))) return "repeat";
    if (CONTROL_PATTERNS.back.test(stripped) || SW_CONTROL.back.test(stripped)) return "back";
    if (CONTROL_PATTERNS.skip.test(stripped) || SW_CONTROL.skip.test(stripped)) return "skip";
    if (words <= MAX_DIRECTED_WORDS) {
      if (RESTART_PATTERN.test(stripped) || SW_RESTART.test(stripped)) return "restart";
      if (DIRECTED_AT_KYRO.test(stripped)) return "pause-talk";
    }
    return null;
  }

  // --- default per-field-kind normalizers ----------------------------------------------------
  const SPOKEN_DIGITS = {
    zero: "0", oh: "0", o: "0", one: "1", two: "2", three: "3", four: "4", five: "5",
    six: "6", seven: "7", eight: "8", nine: "9",
    // Kiswahili digits ("sifuri"/"sufuri" is zero, "mbili" is two, ...).
    sifuri: "0", sufuri: "0", moja: "1", mbili: "2", tatu: "3", nne: "4", tano: "5", sita: "6", saba: "7", nane: "8", tisa: "9"
  };

  // "Jina langu ni Juma Otieno" / "Naitwa Juma" / "Mimi ni Juma": the name is what follows. "...na ninaishi Mombasa" (and I live in Mombasa) is not part of it.
  const NAME_LEAD = /^\s*(?:my (?:full |first |last )?name is|my name'?s|the name is|i am|i'm|it's|its|this is|call me|name[:\s]+|jina langu(?: kamili)?(?: ni)?|jina la kwanza(?: ni)?|jina ni|naitwa|ninaitwa|mimi ni|mimi naitwa|mimi ninaitwa|jina)(?:\s+|$)/i;
  const NAME_TAIL = /\s+(?:(?:and|na)\s+)?(?:i (?:live|stay|am|work|come)|ninaishi|naishi|ninatoka|natoka|nina|ninafanya|nafanya|nakaa|ninakaa)\b.*$/i;
  const SW_CHATTER = /\b(?:ndiyo|ndio|hapana|asante|tafadhali|habari|jambo|hujambo|karibu|sawa|anza|ruka|rudia|ghairi|naam)\b/i;
  function normalizeName(raw) {
    let value = String(raw || "")
      .replace(NAME_LEAD, "")
      .replace(NAME_TAIL, "")
      .replace(/\s+(?:please|tafadhali)\s*$/i, "")
      .replace(/[.!]+$/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (value.length < 2 || value.length > 60) return { ok: false, reason: "length" };
    if (/\d/.test(value)) return { ok: false, reason: "digits" };
    // Found live: "Perfect, let's begin" was accepted as a person's name. Real names are a few words
    // of letters; chatter is longer or full of ordinary conversation words.
    if (value.split(" ").length > 5) return { ok: false, reason: "not-a-name" };
    if (/[?!,;:]/.test(value) || /\b(?:let'?s|begin|start|perfect|okay|ok|ready|stop|please|thanks|thank|hello|yes|no|kyro|kairo)\b/i.test(value) || SW_CHATTER.test(value)) return { ok: false, reason: "not-a-name" };
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
      // "my email is ..." / "barua pepe yangu ni ..." / "imeili yangu ni ...": the address is what follows.
      .replace(/^\s*(?:my (?:email|e-mail)(?: address)?(?: is)?|the (?:email|e-mail)(?: address)?(?: is)?|it is|it's|its|barua pepe(?: yangu)?(?: ni)?|imeili(?: yangu)?(?: ni)?|anwani(?: yangu)?(?: ni)?|email(?: yangu)?(?: ni)?)\s+/, "")
      .replace(/\s+at\s+/g, "@")
      .replace(/\s+(?:dot|nukta)\s+/g, ".")
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
  // A lead-in like "my skills are" / "ujuzi wangu ni" is not part of the list; "ninaweza kupika na kulima" is "kupika na kulima".
  const LIST_LEAD = /^\s*(?:my (?:skills|languages) (?:are|is)|i (?:can|know how to|am good at|speak)|i know|ujuzi wangu ni|ujuzi wangu|stadi zangu ni|ninaweza kufanya|ninaweza|naweza|ninajua kufanya|ninajua|najua|ninafanya|nafanya|nina ujuzi wa|nazungumza|ninazungumza|lugha zangu ni|ninaongea|naongea|mimi ni mzuri katika)\s+/i;
  function normalizeList(raw) {
    const value = String(raw || "").replace(LIST_LEAD, "").replace(/\s+/g, " ").trim();
    if (!value) return { ok: false, reason: "empty" };
    return { ok: true, value };
  }

  // A town or village: "naishi Mombasa" / "I live in Kisumu" is "Mombasa" / "Kisumu".
  const PLACE_LEAD = /^\s*(?:i (?:live|stay|am living|am staying) (?:in|at|near)|i(?:'m| am) from|i come from|my (?:town|village) is|(?:ninaishi|naishi|nakaa|ninakaa|ninatoka|natoka|ninatokea|natokea)(?:\s+(?:katika|kwa|huko|pale|mjini|kijiji cha|mji wa|eneo la))*|kijiji cha|mji wa)\s+/i;
  function normalizePlace(raw) {
    const value = String(raw || "").replace(PLACE_LEAD, "").replace(/[.!]+$/g, "").replace(/\s+/g, " ").trim();
    if (!value) return { ok: false, reason: "empty" };
    return { ok: true, value };
  }

  function normalizeSentences(raw) {
    // A sentence starts with a capital letter ("nilifanya kazi ya ushonaji" -> "Nilifanya kazi ya ushonaji"); nothing else is changed.
    const value = String(raw || "").replace(/\s+/g, " ").trim().replace(/^\p{Ll}/u, letter => letter.toUpperCase());
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
    place: normalizePlace,
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

  function defaultReadback(fields, values, lang = "en") {
    const parts = fields
      .filter(field => values[field.key] !== undefined && values[field.key] !== "")
      .map(field => {
        const value = values[field.key];
        const text = Array.isArray(value) ? value.join(", ") : String(value);
        const label = lang === "sw" && field.sw && field.sw.label ? field.sw.label : field.label;
        return `${label}: ${text}.`;
      });
    return parts.length ? `${MSG[lang].here} ${parts.join(" ")}` : MSG[lang].noAnswers;
  }

  // --- the engine -----------------------------------------------------------------------------
  // Language: the engine speaks the language the person speaks. It starts in options.language (the app's language, "en" or "sw") or in the language of the
  // request that began the intake, and follows the person if they change language part-way. A form supplies its Kiswahili wording in `sw` objects (on the
  // definition and on each field); anything it does not translate is said in English rather than left blank.
  function create(definition, options = {}) {
    if (!definition || !Array.isArray(definition.fields) || !definition.fields.length) {
      throw new Error("KyroVoiceIntake.create requires a definition with a non-empty fields array");
    }
    const now = typeof options.now === "function" ? options.now : Date.now;
    const idleTimeoutMs = Number.isFinite(options.idleTimeoutMs) ? options.idleTimeoutMs : DEFAULT_IDLE_TIMEOUT_MS;
    const fields = definition.fields;
    const intakeId = options.intakeId || `${definition.id || "intake"}-${now()}-${Math.random().toString(36).slice(2, 8)}`;

    let lang = String(options.language || "").toLowerCase().startsWith("sw") ? "sw" : "en";
    if (options.seedUtterance && options.seedUtterance.text) {
      const seedLang = detectLanguage(options.seedUtterance.text, { strict: false });
      if (seedLang) lang = seedLang;
    }
    const say = (key, params) => fill(MSG[lang][key], params);
    const textOf = (holder, prop) => {
      if (!holder) return "";
      if (lang === "sw" && holder.sw && typeof holder.sw[prop] === "string" && holder.sw[prop]) return holder.sw[prop];
      return typeof holder[prop] === "string" ? holder[prop] : "";
    };
    const questionOf = field => textOf(field, "question");
    const moreOf = field => (lang === "sw" && field.sw && field.sw.moreQuestion) || (field.repeatable && field.repeatable.moreQuestion) || MSG[lang].moreDefault;
    const readbackNow = () => (typeof definition.readback === "function" ? definition.readback(values, lang) : defaultReadback(fields, values, lang));
    const confirmLine = prefix => `${prefix ? `${prefix} ` : ""}${readbackNow()} ${MSG[lang].confirmTail}`;

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
    let validateMisses = 0;
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

    // What the person has said so far, in form order and WITH each field's label, including
    // entries still being collected for a repeatable field. Lets the panel show "Skills: ..." instead
    // of a bare list of values, so a misheard or misplaced answer is obvious at a glance.
    function answeredList() {
      const list = [];
      for (const field of fields) {
        let value = values[field.key];
        if (value === undefined && repeatBuffer[field.key] && repeatBuffer[field.key].length) value = repeatBuffer[field.key];
        if (value === undefined || value === "" || (Array.isArray(value) && !value.length)) continue;
        list.push({ key: field.key, label: textOf(field, "label") || field.label, value: Array.isArray(value) ? value.slice() : value });
      }
      return list;
    }

    function snap() {
      const field = currentField();
      return {
        intakeId,
        formId: definition.id,
        title: textOf(definition, "title") || definition.title || "",
        language: lang,
        phase,
        index,
        total: fields.length,
        currentField: field ? { key: field.key, label: textOf(field, "label") || field.label, question: questionOf(field), required: !!field.required, hint: textOf(field, "hint") || field.hint || "" } : null,
        values: { ...values },
        answers: answeredList(),
        skipped: Array.from(skipped)
      };
    }

    function decision(action, line, extra = {}) {
      return { consumed: true, action, say: line || "", language: lang, field: currentField(), values: { ...values }, snapshot: snap(), ...extra };
    }

    function askCurrent(prefix) {
      phase = "asking";
      const field = currentField();
      const line = `${prefix ? `${prefix} ` : ""}${questionOf(field)}`;
      return decision("ask", line);
    }

    function reaskCurrent(message) {
      phase = "asking";
      return decision("reask", message);
    }

    function finishCollecting() {
      const err = typeof definition.validate === "function" ? definition.validate(values, { lang, misses: validateMisses }) : null;
      if (err && err.fieldKey) {
        validateMisses += 1;
        const errIndex = fields.findIndex(field => field.key === err.fieldKey);
        index = errIndex >= 0 ? errIndex : 0;
        skipped.delete(currentField().key);
        // Asked for the same thing three times: stop asking. Everything said so far is kept and "continue" picks it up again, so nobody is stuck in a loop.
        if (err.pause) {
          enterPaused("later");
          return decision("paused", err.message);
        }
        return reaskCurrent(err.message);
      }
      validateMisses = 0;
      if (definition.confirmBeforeSubmit) {
        phase = "confirming";
        return decision("confirm", confirmLine(""));
      }
      phase = "submitting";
      return decision("submit", say("oneMoment"));
    }

    function advanceFromField() {
      index = nextUnskippedIndex(index + 1);
      if (index >= fields.length) return finishCollecting();
      return askCurrent(say("gotIt"));
    }

    function storeAnswerAndAdvance(field, value) {
      history.push({ key: field.key, prevValue: values[field.key] });
      values[field.key] = value;
      attempts[field.key] = 0;
      if (returnToConfirm) {
        returnToConfirm = false;
        phase = "confirming";
        return decision("confirm", confirmLine(say("updated")));
      }
      return advanceFromField();
    }

    function handleFieldAnswer(field, rawText) {
      const result = normalizeAnswer(field, rawText);
      if (!result.ok) {
        attempts[field.key] = (attempts[field.key] || 0) + 1;
        const canOfferSkip = !field.required && attempts[field.key] >= MAX_ATTEMPTS_BEFORE_SKIP_OFFER;
        const base = textOf(field, "retryPrompt") || say("sorryRetry", { q: questionOf(field) });
        return reaskCurrent(canOfferSkip ? `${base}${MSG[lang].orSkip}` : base);
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
        return decision("ask", moreOf(field));
      }
      return storeAnswerAndAdvance(field, result.value);
    }

    function handleMoreAnswer(field, rawText) {
      const control = classifyControl(rawText, { inConfirm: false });
      if (control === "repeat") return doRepeat();
      if (control === "back") return doBack();
      const isDone = control === "skip" || isDoneCollecting(rawText);
      if (isDone) {
        const arr = repeatBuffer[field.key] || [];
        values[field.key] = arr.slice();
        delete repeatBuffer[field.key];
        return advanceFromField();
      }
      if (isBareYes(rawText)) return decision("reask", say("yesMore", { q: moreOf(field) }));
      const result = normalizeAnswer(field, rawText);
      if (!result.ok) {
        return decision("reask", say("sorryRetry", { q: moreOf(field) }));
      }
      const arr = repeatBuffer[field.key] || (repeatBuffer[field.key] = []);
      arr.push(result.value);
      const max = field.repeatable.max || Infinity;
      if (arr.length >= max) {
        values[field.key] = arr.slice();
        delete repeatBuffer[field.key];
        return advanceFromField();
      }
      return decision("ask", moreOf(field));
    }

    function handleConfirmAnswer(rawText) {
      const control = classifyControl(rawText, { inConfirm: true });
      if (control === "yes") {
        phase = "submitting";
        return decision("submit", say("oneMoment"));
      }
      if (control === "repeat") return doRepeat();
      if (control === "back") return doBack();
      if (control === "change") {
        const norm = normalizeText(rawText);
        const swMatch = SW_CHANGE.exec(norm);
        const match = CHANGE_PATTERN.exec(norm);
        const target = match ? match[2] : (swMatch ? swMatch[1] : "");
        const field = fields.find(f => f.key.toLowerCase() === target || String(f.label).toLowerCase() === target
          || (f.aliases || []).some(alias => alias.toLowerCase() === target || target.includes(alias.toLowerCase())));
        if (!field) {
          return decision("confirm", say("notSure", { summary: readbackNow() }));
        }
        index = fields.indexOf(field);
        skipped.delete(field.key);
        returnToConfirm = true;
        return askCurrent();
      }
      if (control === "no") {
        return decision("confirm", say("whichPart"));
      }
      return decision("confirm", confirmLine(""));
    }

    // Wipes every answer and goes back to the first question ("let's start over").
    function doRestart() {
      for (const key of Object.keys(values)) delete values[key];
      for (const key of Object.keys(attempts)) delete attempts[key];
      for (const key of Object.keys(repeatBuffer)) delete repeatBuffer[key];
      skipped.clear();
      history.length = 0;
      returnToConfirm = false;
      pausedFromPhase = null;
      validateMisses = 0;
      index = nextUnskippedIndex(0);
      phase = "asking";
      return decision("ask", say("startOver", { q: questionOf(currentField()) }));
    }

    function doCancel() {
      phase = "cancelled";
      return decision("cancelled", "");
    }

    function doRepeat() {
      if (phase === "confirming") {
        return decision("confirm", confirmLine(""));
      }
      if (phase === "more") {
        return decision("ask", moreOf(currentField()));
      }
      const field = currentField();
      return decision("ask", field ? questionOf(field) : "");
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
        return reaskCurrent(say("needThis", { q: questionOf(field) }));
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
          return decision("ask", say("removed", { q: lang === "sw" && field.sw && field.sw.moreQuestion ? field.sw.moreQuestion : ((field.repeatable && field.repeatable.moreQuestion) || (lang === "sw" ? "Kuna kingine?" : "Anything else?")) }));
        }
        phase = "asking";
        return decision("ask", questionOf(field));
      }
      if (phase === "confirming") {
        index = prevUnskippedIndex(fields.length - 1);
        skipped.delete(currentField().key);
        phase = "asking";
        return decision("ask", say("redo", { q: questionOf(currentField()) }));
      }
      if (index <= 0) {
        phase = "asking";
        return decision("ask", say("firstQuestion", { q: questionOf(currentField()) }));
      }
      index = prevUnskippedIndex(index - 1);
      skipped.delete(currentField().key);
      phase = "asking";
      return decision("ask", say("redo", { q: questionOf(currentField()) }));
    }

    function handleUtterance(text, meta = {}) {
      touch();
      if (phase === "submitting") return decision("busy", "");
      if (phase === "done" || phase === "cancelled") return { consumed: false, action: "ignored", say: "", snapshot: snap() };
      // A paused intake never records anything as an answer: the caller decides whether this is a
      // request to continue/cancel (see routeKyroVoiceIntakeTranscript) or an unrelated command.
      if (phase === "paused") return { consumed: false, action: "ignored", say: "", snapshot: snap() };
      if (isDuplicate(meta.utteranceId, text)) return decision("duplicate", "");
      const trimmed = String(text || "").trim();
      if (!trimmed) return decision("duplicate", "");
      recordUtterance(meta.utteranceId, text);
      const spoken = detectLanguage(trimmed, { strict: true });
      if (spoken) lang = spoken;

      // "switch" (wake-word new request) and "cancel" must be honored in every phase, including
      // while confirming or while collecting a repeatable field's extra answers -- otherwise a
      // user who says "stop"/"never mind" or issues a new wake-word command mid-confirmation or
      // mid-"anything else?" gets that utterance silently swallowed (confirming) or, worse,
      // recorded as literal answer text (more), instead of actually cancelling or being routed to
      // normal command handling.
      const control = classifyControl(trimmed, { inConfirm: phase === "confirming" });
      if (control === "switch") {
        enterPaused("switch");
        return { consumed: false, action: "paused", say: "", language: lang, field: currentField(), values: { ...values }, snapshot: snap() };
      }
      if (control === "cancel") return doCancel();
      if (control === "restart") return doRestart();
      if (control === "pause-talk") {
        enterPaused("talk");
        return decision("paused", textOf(definition, "talkLine") || MSG[lang].talk);
      }
      // "Hold on" / "wait" / "stop for a minute" / a bare "stop": keep every answer, close nothing for
      // good, and tell the person how to carry on or cancel. Consumed (not passed on as a new
      // command), unlike a wake-word switch.
      if (control === "pause") {
        enterPaused("hold");
        return decision("paused", textOf(definition, "pausedLine") || MSG[lang].hold);
      }

      if (phase === "confirming") return handleConfirmAnswer(trimmed);
      if (phase === "more") return handleMoreAnswer(currentField(), trimmed);

      if (control === "repeat") return doRepeat();
      if (control === "back") return doBack();
      if (control === "skip") return doSkip();
      // A bare "yes" / "ndiyo" to a question that wants a real answer ("Did you go to school? Tell me what") is not the answer.
      if (isBareYes(trimmed)) return reaskCurrent(say("yesFollow", { q: questionOf(currentField()) }));

      return handleFieldAnswer(currentField(), trimmed);
    }

    function start() {
      touch();
      index = nextUnskippedIndex(0);
      phase = "asking";
      const field = currentField();
      const introText = textOf(definition, "intro");
      const intro = introText ? `${introText} ` : "";
      return decision("ask", `${intro}${questionOf(field)}`);
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
          return decision("confirm", confirmLine(say("keepGoing", { q: "" })));
        }
        if (phase === "more") {
          const field = currentField();
          return decision("ask", say("keepGoing", { q: moreOf(field) }));
        }
        const field = currentField();
        return decision("ask", field ? say("keepGoing", { q: questionOf(field) }) : "");
      },
      markSubmitting: () => { touch(); phase = "submitting"; return decision("busy", ""); },
      submitFailed: (opts = {}) => {
        touch();
        if (opts.fieldKey) {
          const errIndex = fields.findIndex(f => f.key === opts.fieldKey);
          if (errIndex >= 0) { index = errIndex; skipped.delete(currentField().key); return reaskCurrent(opts.message || say("failed")); }
        }
        phase = "confirming";
        return decision("confirm", opts.message || say("failedYes"));
      },
      markDone: (line) => { touch(); phase = "done"; return decision("done", line || say("done")); },
      snapshot: snap,
      isExpired,
      get phase() { return phase; },
      get pauseReason() { return pauseReason; },
      get language() { return lang; }
    });
  }

  return Object.freeze({ create, classifyControl, isDoneCollecting, detectLanguage, normalizers: NORMALIZERS, normalizeText });
});
