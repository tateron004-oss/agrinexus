// Kyro media commands: understands "play ...", "play radio ...", "watch ...", "open YouTube and play ...", "pause", "next", "volume up" and the
// Kiswahili forms ("cheza ...", "weka redio ...", "angalia video ya ...", "sitisha", "wimbo unaofuata", "ongeza sauti"), typed or spoken.
//
// One pure file shared by the phone (loaded from index.html) and the server (required by the planner and the realtime workspace action), so
// both sides agree on what is a media command. It never starts anything itself; it only classifies a sentence.
//
// parse(text) -> null | one of
//   { type: 'play', kind: 'music'|'radio'|'video', query, handoff: boolean, lang: 'en'|'sw', allowEmpty: boolean }
//   { type: 'control', control: 'pause'|'resume'|'stop'|'next'|'previous'|'volume-up'|'volume-down'|'mute'|'unmute', explicit: boolean, lang }
//   { type: 'preference', key: 'audioOnly'|'playIn', value, lang }
// `explicit` is true when the sentence itself names music/radio/video/volume ("pause the music"); a bare "pause" or "next" is only meant for
// the player when something is already playing, so callers act on non-explicit controls only while a player is active.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroMediaCommands = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const NOUN = "music|song|songs|track|tracks|radio|station|video|videos|playback|playing|audio|stream|sound|volume";
  const MEDIA_NOUN = new RegExp("\\b(?:" + NOUN + ")\\b", "i");

  function clean(text) {
    let value = String(text == null ? "" : text).replace(/\s+/g, " ").trim();
    value = value.replace(/^(?:(?:hey|ok|okay|hi)\s+)?(?:kyro|nexus)\b[\s,:;!-]*/i, "");
    value = value.replace(/^(?:(?:please|tafadhali|kindly)[\s,]+)+/i, "");
    value = value.replace(/^(?:can|could|would|will) you\s+(?:please\s+)?/i, "");
    value = value.replace(/^(?:i want you to|i would like you to|i'd like you to|i need you to|naomba|tafadhali)\s+/i, "");
    value = value.replace(/[.!?¡¿]+$/g, "").trim();
    value = value.replace(/[\s,]+(?:please|tafadhali|for me|now|sasa|thanks|asante)$/i, "").trim();
    return value;
  }

  function strip(value) {
    return String(value || "").replace(/^["'“”‘’\s]+|["'“”‘’\s]+$/g, "").replace(/\s+/g, " ").trim();
  }

  // ---- controls ----------------------------------------------------------------------------------------------------------------------------------

  const CONTROLS = [
    // English
    ["pause", /^(?:pause|hold on|hold it)(?:\s+(?:the |this |that |my )?(music|song|track|radio|video|playback|audio|stream|it))?$/i, 1],
    ["resume", /^(?:resume|continue|unpause|keep playing|carry on|play again|play it again)(?:\s+(?:the |this |that |my )?(music|song|track|radio|video|playback|audio|stream|playing))?$/i, 1],
    ["resume", /^(?:play|cheza)$/i, 0],
    ["stop", /^(?:stop|end|turn off|switch off|shut off|kill|cancel|close)(?:\s+playing)?\s+(?:the |this |that |my )?(music|songs?|radio|video|playback|audio|stream|playing)$/i, 1],
    ["stop", /^stop playing(?:\s+(?:the |this |that )?(music|songs?|radio|video))?$/i, 1],
    ["next", /^(?:play\s+)?(?:the\s+)?(?:next|skip)(?:\s+(?:the |this )?(song|track|one|station|video|music))?$/i, 1],
    ["next", /^(?:another|a different)\s+(song|track|one|station)$/i, 1],
    ["next", /^(?:play something else|change the (?:song|station|track)|different (?:song|station))$/i, 1],
    ["previous", /^(?:play\s+)?(?:the\s+)?(?:previous|last|prior)(?:\s+(song|track|one|station|video))?$/i, 1],
    ["volume-up", /^(?:(?:turn|put|pump|crank|bring)(?:\s+(?:it|the (music|volume|sound|radio)))?\s+up|(volume|sound)\s+up|louder|(?:make it|a bit|a little)\s+louder|(?:increase|raise|up|boost)(?:\s+the)?\s+(volume|sound)|more volume)$/i, 1],
    ["volume-down", /^(?:(?:turn|put|bring)(?:\s+(?:it|the (music|volume|sound|radio)))?\s+down|(volume|sound)\s+down|quieter|softer|(?:make it|a bit|a little)\s+(?:quieter|softer)|(?:decrease|reduce|lower|down)(?:\s+the)?\s+(volume|sound)|less volume)$/i, 1],
    ["unmute", /^unmute(?:\s+(?:the |my )?(music|sound|radio|video|volume))?$/i, 1],
    ["mute", /^mute(?:\s+(?:the |my )?(music|sound|radio|video|volume))?$/i, 1],
    // Kiswahili
    ["pause", /^(?:sitisha|simamisha kwa muda|pumzisha)(?:\s+(muziki|wimbo|redio|video))?$/i, 1],
    ["resume", /^(?:endelea|endeleza)(?:\s+(?:na\s+)?(muziki|wimbo|redio|video))?$/i, 1],
    ["stop", /^(?:simamisha|zima|komesha|funga|acha(?:\s+kucheza)?)\s+(muziki|wimbo|nyimbo|redio|video)$/i, 1],
    ["next", /^(?:(?:cheza\s+)?wimbo\s+(?:unaofuata|ufuatao|mwingine)|ruka\s+wimbo|(?:redio|stesheni)\s+nyingine|inayofuata)$/i, 1],
    ["previous", /^(?:(?:cheza\s+)?wimbo\s+(?:uliopita|uliotangulia)|ile ya kabla)$/i, 1],
    ["volume-up", /^(?:ongeza|pandisha|kuza)\s+sauti(?:\s+(?:ya\s+)?(muziki|redio|wimbo|video))?$/i, 1],
    ["volume-down", /^(?:punguza|shusha)\s+sauti(?:\s+(?:ya\s+)?(muziki|redio|wimbo|video))?$/i, 1],
    ["unmute", /^(?:rudisha sauti|washa sauti)$/i, 1],
    ["mute", /^nyamazisha(?:\s+(muziki|redio|wimbo|video))?$/i, 1]
  ];
  const SWAHILI_CONTROL = /^(?:cheza$|sitisha|simamisha|pumzisha|endelea|endeleza|zima|komesha|funga|acha|cheza\s+wimbo|wimbo|ruka|redio|stesheni|inayofuata|ile|ongeza|pandisha|kuza|punguza|shusha|rudisha|washa|nyamazisha)\b/i;
  const ALWAYS_EXPLICIT = new Set(["volume-up", "volume-down", "mute", "unmute"]);

  function parseControl(text) {
    for (const [control, pattern] of CONTROLS) {
      const match = pattern.exec(text);
      if (!match) continue;
      const named = match.slice(1).some(group => group && /music|song|track|radio|station|video|playback|audio|stream|sound|volume|muziki|wimbo|nyimbo|redio/i.test(group));
      const explicit = named || /\b(?:music|songs?|radio|video|volume|sound|muziki|wimbo|nyimbo|redio|sauti)\b/i.test(text) ||
        (/^(?:wimbo|(?:redio|stesheni)\s+nyingine|inayofuata|ile ya kabla)/i.test(text));
      const lang = SWAHILI_CONTROL.test(text) ? "sw" : "en";
      return { type: "control", control, explicit: explicit || (ALWAYS_EXPLICIT.has(control) && /volume|sound|sauti|music|radio|redio/i.test(text)), lang };
    }
    return null;
  }

  // ---- preferences -------------------------------------------------------------------------------------------------------------------------------

  function parsePreference(text) {
    let match = /^(?:turn |switch )?(?:(on|off) )?(?:audio[- ]only|data saver|save data|low data)(?: mode)?(?: (on|off))?$/i.exec(text);
    if (match) return { type: "preference", key: "audioOnly", value: (match[1] || match[2] || "on").toLowerCase() !== "off", lang: "en" };
    if (/^(?:sauti pekee|sauti tu|punguza data)$/i.test(text)) return { type: "preference", key: "audioOnly", value: true, lang: "sw" };
    if (/^(?:video tena|rudisha video)$/i.test(text)) return { type: "preference", key: "audioOnly", value: false, lang: "sw" };
    match = /^(?:play|put on|open) music (?:in|on|with) (kyro|youtube) (?:from now on|always|by default)$/i.exec(text);
    if (match) return { type: "preference", key: "playIn", value: match[1].toLowerCase(), lang: "en" };
    match = /^(?:cheza|weka) muziki (?:kwenye|katika|ndani ya) (kyro|youtube) (?:daima|kila mara|kuanzia sasa)$/i.exec(text);
    if (match) return { type: "preference", key: "playIn", value: match[1].toLowerCase(), lang: "sw" };
    return null;
  }

  // ---- play ----------------------------------------------------------------------------------------------------------------------------------------

  // "play it safe", "play a game", "play back my message": not music.
  const NOT_MEDIA = /^(?:it safe|safe|defen[cs]e|dumb|along|fair|around|with\b|a game|games?|the game|back\b|tricks?|down|up\b|out\b|hooky|ball|politics|the fool|a role|the role|with fire|my message|the message|messages?|the voicemail|voicemail|the recording|a recording|my recording|recordings?|the call|chess|football|soccer|cards|ludo|draughts|the audio message|the voice note|my voice note|the voice message)/i;
  const NOT_MEDIA_SW = /^(?:mchezo|mpira|kadi|ludo|draughts|mchezo wa|na\b|kwa\b)/i;

  function stripMusicWords(value) {
    let query = strip(value);
    query = query.replace(/^(?:me\s+)?(?:some|any|a|an|the|my)\s+/i, "");
    query = query.replace(/^(?:music|songs?|tracks?|tunes?|something)\b\s*(?:by|from|of|for|like)?\s*/i, "");
    query = query.replace(/^(?:the\s+)?(?:song|track|tune|artist|album)\s+/i, "");
    return strip(query);
  }

  function stripSwahiliMusicWords(value) {
    let query = strip(value);
    query = query.replace(/^(?:wimbo|nyimbo|muziki)\s*(?:wa kina|wa|za kina|za|ya|la)?\s*/i, "");
    return strip(query);
  }

  const VIDEO_LEAD = /^(?:(?:a|an|the|some)\s+)?(?:video|videos|clip|clips|film|movie|tutorial)s?\s*(?:of|about|on|for|showing|from)?\s*/i;
  const VIDEO_LEAD_SW = /^(?:ya kuhusu|kuhusu|juu ya|ya|za|wa|la)\s+/i;

  function playResult(kind, query, handoff, lang, extra) {
    return { type: "play", kind, query: strip(query), handoff: handoff === true, lang, allowEmpty: kind !== "video", ...(extra || {}) };
  }

  function parsePlay(input, handoff) {
    let text = input;
    let match;

    // --- Swahili
    if ((match = /^(?:weka|cheza|sikiliza|washa|fungua)\s+redio(?:\s+(.*))?$/i.exec(text))) {
      const rest = strip((match[1] || "").replace(/^(?:ya|za|kituo cha|ya kituo cha|iitwayo|inayoitwa|la)\s+/i, ""));
      return playResult("radio", rest, handoff, "sw");
    }
    if ((match = /^(?:angalia|tazama|nionyeshe|nionyesheni|onyesha|cheza|weka)\s+video(?:\s+(.*))?$/i.exec(text))) {
      const rest = strip((match[1] || "").replace(VIDEO_LEAD_SW, ""));
      if (rest) return playResult("video", rest, handoff, "sw");
    }
    if ((match = /^(?:cheza|nichezee|niwekee|weka|sikiliza|nataka kusikia|nataka kusikiliza|ninataka kusikia)\s*(.*)$/i.exec(text))) {
      const verb = /^[a-z ]+?(?=\s|$)/i.exec(text)[0].toLowerCase();
      const rest = strip(match[1]);
      const needsNoun = /^(weka|sikiliza|niwekee)$/.test(verb);
      const hasNoun = /^(?:muziki|wimbo|nyimbo)\b/i.test(rest);
      if (!NOT_MEDIA_SW.test(rest) && (!needsNoun || hasNoun) && (rest || verb === "cheza" || verb === "nichezee")) {
        if (!rest && verb === "cheza") return null; // bare "cheza" is "resume", handled as a control
        return playResult("music", stripSwahiliMusicWords(rest), handoff, "sw");
      }
    }

    // --- English: radio
    if ((match = /^(?:play|put on|turn on|tune (?:in )?to|switch to|listen to|open|start)\s+(?:the\s+)?radio(?:\s+station)?(?:\s+(.*))?$/i.exec(text))) {
      const rest = strip((match[1] || "").replace(/^(?:called|named|station|for|on|:)\s+/i, ""));
      return playResult("radio", rest, handoff, "en");
    }
    if ((match = /^(?:play|put on|listen to|tune (?:in )?to|switch to)\s+(.+?)\s+(radio|fm)(?:\s+station)?$/i.exec(text))) {
      return playResult("radio", `${strip(match[1])} ${match[2]}`, handoff, "en");
    }

    // --- English: video
    if ((match = /^(?:watch|view)\s+(.+)$/i.exec(text))) {
      const rest = strip(match[1]);
      if (!/^(?:out|over|for|the clock|my back|your step)\b/i.test(rest)) {
        return playResult("video", strip(rest.replace(VIDEO_LEAD, "")) || rest, handoff, "en");
      }
    }
    if ((match = /^(i want to (?:watch|see)|i would like to watch|let me (?:watch|see)|show me|play|find me|get me|open)\s+(?:a |an |the |some )?(videos?|clips?|films?|movies?|tutorials?)\s*(?:of|about|on|for|showing|from)?\s*(.*)$/i.exec(text))) {
      // "show me videos of ..." (plural, with show/find/get/open) keeps its existing meaning: a gallery to choose from, not an instant play.
      const plural = /s$/i.test(match[2]);
      const rest = strip(match[3]);
      if (rest && !(plural && /^(?:show me|find me|get me|open)$/i.test(match[1]))) return playResult("video", rest, handoff, "en");
    }

    // --- English: music
    if ((match = /^(?:play|put on|queue(?: up)?|listen to|i want to (?:hear|listen to)|i would like to (?:hear|listen to)|i feel like (?:hearing|listening to)|let me (?:hear|listen to))\s*(.*)$/i.exec(text))) {
      const rest = strip(match[1]);
      if (!rest) return null; // bare "play" is "resume", a control
      if (NOT_MEDIA.test(rest)) return null;
      return playResult("music", stripMusicWords(rest), handoff, "en");
    }
    return null;
  }

  function parse(raw) {
    let text = clean(raw);
    if (!text || text.length > 300) return null;

    const earlyPreference = parsePreference(text);
    if (earlyPreference) return earlyPreference;

    // "open YouTube and play ..." / "play ... on YouTube": hand the request to the YouTube app or site instead of the in-app player.
    let handoff = false;
    let match = /^(?:open|launch|go to|fungua|anzisha|nenda)\s+(?:the\s+)?(?:you\s?tube|youtube)(?:\s+app)?(?:\s*(?:and|then|na|,)\s*(.*))?$/i.exec(text);
    if (match) {
      handoff = true;
      text = strip(match[1] || "");
      if (!text) return { type: "play", kind: "music", query: "", handoff: true, lang: /^(?:fungua|anzisha|nenda)/i.test(clean(raw)) ? "sw" : "en", allowEmpty: true, openOnly: true };
    }
    match = /^(.*?)\s+(?:on|in|through|using|via|kwenye|katika|kupitia|ndani ya)\s+(?:the\s+)?(?:you\s?tube|youtube)(?:\s+(?:app|music))?$/i.exec(text);
    if (match && match[1]) { handoff = true; text = strip(match[1]); }

    const preference = parsePreference(text);
    if (preference) return preference;
    const control = handoff ? null : parseControl(text);
    if (control) return control;
    const play = parsePlay(text, handoff);
    if (play) {
      // "play music on YouTube" with no song: open YouTube rather than guess.
      return play;
    }
    return null;
  }

  // A sentence that is certainly about media (used by routers that must not hijack other "play"/"stop" sentences).
  function isMediaCommand(text, { playerActive = false } = {}) {
    const parsed = parse(text);
    if (!parsed) return false;
    if (parsed.type === "control") return parsed.explicit || playerActive;
    return true;
  }

  return Object.freeze({ parse, isMediaCommand, clean, MEDIA_NOUN });
});
