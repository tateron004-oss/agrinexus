"use strict";

// ONE front door for what a person says or types to Kyro.
//
// Almost every reader behind it (lists, notes, calendar, farm log, names, contacts, reminders...) is a fully anchored, verb-first English pattern, so
// the same request fails the moment a person says it the way people really talk:
//   "Kyro add milk to my shopping list"        (wake word)         "um, add milk to my list"        (filler)
//   "could you maybe put milk on my list"      (polite wrapper)    "naomba uniwekee maziwa ..."     (Kiswahili wrapper)
//   "abeg put fix the gate for my to-do list"  (Nigerian Pidgin)   "add milk to my list, thank you" (trailing thanks)
//   "add add milk"                             (stutter)           "I​ have​ chest​ pain"   (zero-width characters)
//   a rambling lead-in, or a 5,000-character message with the request somewhere inside it.
//
// normaliseSpoken() cleans all of that BEFORE a reader sees it and keeps the original, because some places must store what the person actually said and the
// safety readers must always be able to see everything (a danger phrase is never lost to stripping: they run on the original AND the cleaned text).
//
//   normaliseSpoken(text, { language }) -> { text, clean, original, stripped: [labels], changed, danger, language }
//     original  what was passed in, untouched
//     clean     unicode hygiene only: NFC, ASCII digits, no zero-width/control characters, single spaces, plain quotes. Safe for safety readers.
//     text      clean + wake words, fillers, politeness, trailing thanks/laughs/punctuation, stutters and rambling removed. For the request readers.
//     stripped  what was removed ("wake-word", "filler", "polite", "trailing-thanks", "stutter", "invisible-characters", "long-input"...)
//     danger    true when the text contains a health-emergency or self-harm phrase (so callers never shorten or drop it)
//
// It is deliberately conservative: it only removes things that are plainly not part of the request, never anything that could be an item, a name or a message
// ("add Thank You cards" keeps "Thank You cards"; "my name is Kyro" keeps "Kyro"; "12 mm" keeps "mm"), and it is idempotent.

const MAX_PLANNER_INPUT = 240; // the planner's readers ignore anything longer than ~260 characters

// ---- unicode hygiene ----

// Zero-width, bidi-control, soft-hyphen and similar invisible characters. (They split words for matchers: "chest​ pain" with a zero-width space missed a safety check.)
const INVISIBLE_CHARS = "\\u200B-\\u200F\\u202A-\\u202E\\u2060-\\u206F\\uFEFF\\u00AD\\u034F\\u061C\\u180B-\\u180E\\uFFF9-\\uFFFB";
const INVISIBLE = new RegExp(`[${INVISIBLE_CHARS}]`, "g");
const HAS_INVISIBLE = new RegExp(`[${INVISIBLE_CHARS}]`);
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g;
// The zero code point of each Unicode decimal-digit block, so fullwidth and Arabic-Indic digits become 0-9.
const DIGIT_ZEROS = [0x0660, 0x06F0, 0x07C0, 0x0966, 0x09E6, 0x0A66, 0x0AE6, 0x0B66, 0x0BE6, 0x0C66, 0x0CE6, 0x0D66, 0x0E50, 0x0ED0, 0x0F20, 0x1040, 0x1090, 0x17E0, 0x1810, 0xFF10];
function toAsciiDigits(value) {
  return String(value ?? "").replace(/[٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙０-９]/g, ch => {
    const code = ch.charCodeAt(0);
    const zero = DIGIT_ZEROS.filter(base => code >= base && code <= base + 9).pop();
    return String(code - zero);
  });
}
// Fullwidth letters and punctuation (ＡＢＣ, ，．) are written like ASCII; the rest of NFKC (ligatures, superscripts, ...) is left alone.
const fullwidthToAscii = value => value.replace(/[！-～]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)).replace(/　/g, " ");

function cleanText(value) {
  let t = String(value ?? "");
  try { t = t.normalize("NFC"); } catch { /* keep as is */ }
  t = fullwidthToAscii(toAsciiDigits(t))
    .replace(INVISIBLE, "")
    .replace(CONTROL, " ")
    .replace(/[‘’‛ʼ`´]/g, "'")
    .replace(/[“”„‟]/g, '"')
    .replace(/[–—]/g, " - ")
    .replace(/…/g, "...")
    .replace(/\s+/g, " ")
    .trim();
  try { t = t.normalize("NFC"); } catch { /* keep as is */ }
  return t;
}

// ---- words ----

// A health emergency or a person in danger. Such a phrase is never dropped by shortening, and callers use this to run safety readers on every version of the text.
const DANGER = /\b(?:chest pain|chest is paining|pain in (?:my |the )?chest|heart attack|can'?t breathe|cannot breathe|can not breathe|trouble breathing|difficulty breathing|short of breath|not breathing|stopped breathing|unconscious|unresponsive|collapsed|convuls\w*|seizure\w*|fits|fitting|epilep\w*|bleeding (?:heavily|a lot|badly|a lot|won'?t stop)|heavy bleeding|bleeding too much|choking|overdos\w*|poison\w*|snake ?bite|snake bit|suicid\w*|kill myself|killing myself|end my life|ending my life|want to die|wanna die|hurt myself|harm myself|kujiua|kujidhuru|nataka kufa|maumivu ya kifua|kifua kinauma|siwezi kupumua|kifafa|anatetemeka|amepoteza fahamu|damu nyingi|chest dey pain|i don die|abeg help)\b/i;
const hasDanger = text => DANGER.test(cleanText(text));

const WAKE = "(?:kyro|kairo|kiro|nexus|agri ?nexus|agri-nexus|agrinexus|jarvis|genesis)";
const INTERJECTION = "(?:hey|hi|hello|ok|okay|yo|oi|sasa|mambo|eeh|ee|ehh|oya|haya|sawa|listen|look)";

// Imperative request verbs (English, Kiswahili, Pidgin) -- what the first word of a request usually is.
const OPENER_VERBS = new Set(("add put write note jot remind remember call phone ring dial text sms message tell send save store show read list remove delete clear erase make create start set cancel mark tick record log schedule book " +
  "give open play find search check take get bring buy order pay track forget stop turn count help let arrange plan prepare translate calculate convert weigh enter register log note save update change rename move copy " +
  "weka ongeza andika nikumbushe kumbusha ondoa futa soma nisomee onyesha nionyeshe tuma mpigie piga hifadhi tengeneza angalia nipe nipatie tafuta fungua cheza " +
  "comot dey wetin").split(" "));
const QUESTION_WORDS = new Set("what whats what's how who whom when where which why is are do does did can could will would should has have am".split(" "));
const looksLikeRequest = rest => {
  const t = cleanText(rest).toLowerCase();
  const first = (/^[\p{L}'-]+/u.exec(t) || [""])[0];
  if (!first) return false;
  if (OPENER_VERBS.has(first) || QUESTION_WORDS.has(first)) return true;
  // statements the farm log and records readers take: "I sold ...", "it rained ...", "my name is ...", "I have chest pain"
  return /^(?:i|i've|i'm|im|we|my|it|nimeuza|nimenunua|nimetumia|nimevuna|nimepanda|mvua|jina langu|ninahitaji|nina|nahisi|nataka)\b/.test(t);
};
// Words a request cannot end on: if one of these would be last, the "trailing" thing is really part of the request.
const END_GUARD = new Set(("a an the my your his her their our its this that these those to for of on in at with from by about and or but is am are was were be been called named name me him them us you it " +
  "saying says say tell that if as than then into onto over under between like some any each every no not").split(" "));
const MESSAGE_VERBS = new Set("text sms message whatsapp tell say send email e-mail write note remember ask inform notify".split(" "));

// ---- leading rules ----
// Each rule: re (anchored at start), label, test(rest) -> bool (the rule only applies when what remains passes), as (replacement words put in front of what remains).
const LEAD = [];
const lead = (re, label, test = rest => rest.split(" ").length >= 1, as = "") => LEAD.push({ re: new RegExp(`^${re}`, "iu"), label, test, as });
const hasRest = rest => rest.split(" ").filter(Boolean).length >= 1;
// "Hello Nexus, this is Ron" is a greeting with an introduction, which the greeting readers want whole
let ACTIVE = { wakeBeforeQuestions: true };
const firstWordOf = rest => (/^[\p{L}'-]+/u.exec(String(rest).toLowerCase()) || [""])[0];
const notIntroduction = rest => hasTwo(rest) && !/^(?:this is|it is|it's|its|i am|i'm|im|mimi ni)\b/i.test(rest) && (ACTIVE.wakeBeforeQuestions !== false || !QUESTION_WORDS.has(firstWordOf(rest)));
const hasTwo = rest => rest.split(" ").filter(Boolean).length >= 2;

// wake words, with or without a greeting before them
lead(`(?:${INTERJECTION}[ ,.!:-]+)?${WAKE}(?![\\w'-])[ ,.!:-]*`, "wake-word", notIntroduction);
lead(`${WAKE}(?![\\w'-])[ ,.!:-]*`, "wake-word", notIntroduction);
// a greeting or "ok so" in front of an actual request
lead(`(?:${INTERJECTION})[ ,.!:-]+`, "greeting", looksLikeRequest);
lead(`(?:ok(?:ay)?|alright|all right|right|well|basi|haya|eh|ah|oh)[ ,]+(?:so |then |now )?`, "discourse", looksLikeRequest);
// politeness
lead(`(?:please|pls|plz|kindly|tafadhali|tafadhalini|abeg|biko|jare|sha)(?:[ ,]+(?:please|pls|plz|kindly|tafadhali|abeg))*[ ,.]+`, "polite", hasRest);
lead(`naomba(?:[ ,]+tafadhali)?[ ,]+`, "polite", looksLikeRequest);
lead(`abeg(?: o)?(?: make (?:you|una))?[ ,]+`, "polite", hasRest);
// Kiswahili "please do X for me" forms, read into the plain command the readers know
const SW_FORMS = [["weke|wekee|wekea", "weka"], ["ongeze|ongezee|ongezea", "ongeza"], ["andike|andikie", "andika"], ["tumie|tumia", "tuma"], ["kumbushe", "nikumbushe"], ["someshe|somee|soma", "nisomee"], ["ondoe|ondolee", "ondoa"], ["fute|futie", "futa"], ["onyeshe", "onyesha"], ["hifadhie|hifadhi", "hifadhi"]];
for (const [forms, plain] of SW_FORMS) {
  lead(`(?:naomba[ ,]+(?:tafadhali[ ,]+)?)?(?:tafadhali[ ,]+)?(?:unaweza (?:kuni)?|u)?ni(?:${forms})(?![\\p{L}])[ ,]*`, "polite-sw", hasRest, `${plain} `);
}
lead(`(?:naomba[ ,]+)?(?:tafadhali[ ,]+)?(?:unaweza|naomba)[ ,]+(?:kuni|ku)?(?=(?:weka|ongeza|andika|tuma|ondoa|futa|soma|onyesha|kumbusha)\\b)`, "polite-sw", hasRest);
lead(`(?:tafadhali[ ,]+)?nisaidie[ ,]+(?:ku)?(?=(?:weka|ongeza|andika|tuma|ondoa|futa|soma|onyesha|kumbusha)\\b)`, "polite-sw", hasRest);
// English wrappers. They only apply when a real request follows ("can you swim" is left alone).
const MODALS = "(?:could|can|would|will|may|might)";
const ADV = "(?:[ ,]+(?:please|kindly|maybe|just|possibly|perhaps|quickly|simply|actually|now|also))*";
lead(`${MODALS} (?:you|u|ya)${ADV}[ ,]+`, "polite", rest => looksLikeRequest(rest) && !/^help(?! me\b)/i.test(rest));
lead(`${MODALS} (?:i|we) (?:please )?(?:ask|get|have|request) (?:you|u) (?:to |for )?`, "polite", looksLikeRequest);
lead(`(?:i(?:'d| would| will) (?:like|love|want|appreciate)|i (?:want|need|wish|ask|require)|i'?d (?:like|love)) (?:you|u|it if you could|it if you can)(?: to)? `, "polite", looksLikeRequest);
lead(`(?:i was wondering|i wonder|i am wondering|i'?m wondering|i just wondered) (?:if |whether )?(?:you )?(?:could|can|would|might)${ADV}[ ,]*`, "polite", looksLikeRequest);
lead(`(?:would|do) you mind(?: to)? `, "polite", looksLikeRequest);
lead(`is it possible (?:for you )?to `, "polite", looksLikeRequest);
lead(`(?:go ahead and|just|quickly|simply|also|actually|maybe|kindly) `, "polite", looksLikeRequest);
lead(`(?:help me|assist me)(?: to)? `, "polite", rest => looksLikeRequest(rest) && !/^(?:with|find|understand)\b/i.test(rest));
lead(`(?:can|could|may|should|shall) i (?:please |just )?(?:tell|say|let) (?:you|u)(?: know)?(?: that)? `, "polite", rest => /^(?:i|we|my|it)\b/i.test(rest));
lead(`(?:can|could|may|should|shall) i (?:please |just )?(?:log|record|register|enter|note|add|save|put down)(?: down)?(?: that)? `, "polite", rest => /^(?:i|we|my|it|the rain|rain)\b/i.test(rest));
lead(`(?:please )?(?:log|record|register|enter|put down|save)(?: down)? (?:the fact )?that `, "log-verb", rest => /^(?:i|we|my|it (?:rained|rain)|rain)\b/i.test(rest));
lead(`(?:let me know|i (?:want|would like|'d like|need) to know|do you know)(?: that)? `, "polite", rest => /^(?:what|how|who|when|where|which|if|whether)\b/i.test(rest));
lead(`(?:i (?:want|wanna|need|would like|'d like) to ask(?: you)?(?: to)? |can i ask(?: you)?(?: to)? )`, "polite", looksLikeRequest);
lead(`(?:tell me|let me know) `, "polite", rest => /^(?:what|how much|how many|how|who|when|where|which)\b/i.test(rest));

// ---- trailing rules ----
const THANKS = "(?:thank you|thankyou|thank u|thanks|thx|thnx|ty|asante|ahsante|asanteni|shukrani|nashukuru|dalu|daalu|ese|o se|e se)(?: (?:so much|very much|a lot|a million|sana|sanaa|kwa kila kitu|for (?:your|the|that) help))*";
const LAUGH = "(?:(?:ha){2,}h?|(?:he){2,}h?|(?:ah){2,}|lol+|lmao|rofl|:\\)+|:d|;\\)|xd|haha+|hehe+|hihi+)";
const SOFTENER = "(?:please|pls|plz|tafadhali|abeg|biko|ok|okay|alright|sawa|sawa sawa|right|yeah|yep|then|ya|eh|hehe|jare|sha|o|oh|na)";
const VOCATIVE = `(?:${WAKE}|bro|bruh|boss|buddy|dude|mate|sir|madam|mzee|bwana|oga|sis|my friend|friend|rafiki|mdogo|dear)`;
const TRAILING = [
  [new RegExp(`(?:^|[\\s,.;:!-]+)${LAUGH}[\\s.!?]*$`, "i"), "trailing-laugh", false],
  [new RegExp(`(?:^|[\\s,.;:!-]+)${THANKS}[\\s.!?]*$`, "i"), "trailing-thanks", true],
  [new RegExp(`[\\s,.;:!-]+(?:and )?${SOFTENER}(?:[\\s,]+${SOFTENER})*[\\s.!?]*$`, "i"), "trailing-polite", true],
  [new RegExp(`[\\s,.;:!-]+${VOCATIVE}[\\s.!?]*$`, "i"), "trailing-name-called", true]
];
// fillers that trail or lead
const FILLER_WORD = /(?:^|\s)(?:um+|uh+|uhm+|uhh+|umm+|ehm+|hmm+|mmm+|erm+)(?=[\s,.!?;:]|$)/gi;
const FILLER_ER = /(?:^|\s)(?:er|erm)(?=[\s,.!?;:]|$)/g; // lowercase only: "ER" is the emergency room
const FILLER_PHRASES = [/(?:^|,\s*)(?:you know|i mean|like|kind of|sort of|basically|literally|yaani|unajua|sijui kwanini|actually),\s+/gi, /,?\s+(?:you know|i mean|yaani|unajua),?\s*$/i, /\s+(?:you know)\s+(?=(?:add|put|write|note|remind|call|text|send|save|show|read|remove|delete|what|how|who|when|where)\b)/gi];

// ---- discourse markers: "...and anyway please add milk" ----
const STRONG_MARKER = /\b(?:so anyway|but anyway|and anyway|anyways?|by the way|btw|ok(?:ay)? so anyway|anyway so|so yeah anyway)\b[ ,.:!-]*/gi;
const SOFT_MARKER = /\b(?:oh and|oh also|one more thing|another thing|ok(?:ay)? so|so yeah|but yeah|yeah so|and then|so basically|anyhow|enyewe|hata hivyo|kwa hiyo|haya basi|basi)\b[ ,.:!-]*/gi;

// ---- Nigerian Pidgin, a handful of safe fixes (always specific phrases, never a bare word that Swahili or a name also uses) ----
const PAST = { sell: "sold", spend: "spent", harvest: "harvested", plant: "planted", buy: "bought", pay: "paid", collect: "collected", get: "got", finish: "finished", take: "took", pack: "packed", sow: "sowed", weed: "weeded", water: "watered", feed: "fed", milk: "milked", slaughter: "slaughtered" };
const PIDGIN = [
  [/\bi don (sell|spend|harvest|plant|buy|pay|collect|get|finish|take|pack|sow|weed|water|feed|milk|slaughter)\b/gi, (m, verb) => `I ${PAST[verb.toLowerCase()]}`],
  [/\bcomot\b/gi, () => "remove"],
  [/\bwetin dey (?:inside |on |in |for )?(?=my\b)/gi, () => "what is on "],
  [/\bwetin be\b/gi, () => "what is"],
  [/\bmy name na\b/gi, () => "my name is"],
  [/\b(put|add) (.+?) for (my|the) (shopping|grocery|groceries|to-?do|todo|task)\b/gi, (m, verb, item, det, list) => `${verb} ${item} to ${det} ${list}`],
  [/\b(write down|note down|jot down|note) say\b/gi, (m, verb) => `${verb} that`],
  [/\b(text|sms|message|whatsapp|tell) ([\p{L}'.-]+(?: [\p{L}'.-]+)?) say (?=\S)/giu, (m, verb, name) => `${verb} ${name} saying `],
  [/\bafter (\d+|[a-z-]+) (minutes?|mins?|hours?|hrs?)\b make i\b/gi, (m, n, unit) => `in ${n} ${unit} to`],
  [/\bmake i (?=take|call|go|pay|buy|drink|check|water|feed|plant|send|text)/gi, () => "to "]
];

function collapseStutters(t, log) {
  let out = t;
  const PROTECT = new Set(["bye", "tuk", "pole", "kidogo", "haraka", "polepole", "chini", "juu", "sawa", "pili", "mama", "baba", "dada", "kaka", "nyama", "ndio"]);
  // the same word several times in a row ("add add milk", "20 20 minutes", "blah blah blah ...")
  out = out.replace(/(^|[^\p{L}\p{N}'])([\p{L}\p{N}'][\p{L}\p{N}'-]*)(?:[\s,]+\2(?![\p{L}\p{N}'-]))+/giu, (whole, pre, word) => (PROTECT.has(word.toLowerCase()) && whole.trim().split(/[\s,]+/).length === 2 ? whole : `${pre}${word}`));
  // the same two words twice ("add milk add milk", "weka maziwa weka maziwa")
  out = out.replace(/(^|[^\p{L}\p{N}'])([\p{L}\p{N}'][\p{L}\p{N}'-]* [\p{L}\p{N}'][\p{L}\p{N}'-]*)(?:\s+\2(?![\p{L}\p{N}'-]))+/giu, (whole, pre, pair) => `${pre}${pair}`);
  // a letter held for a long time ("aaaaaaaaaa")
  out = out.replace(/([\p{L}])\1{5,}/gu, "$1$1$1");
  if (out !== t) log.push("stutter");
  return out;
}

function stripFillers(t, log) {
  let out = t;
  const before = out;
  out = out.replace(FILLER_WORD, " ").replace(FILLER_ER, " ");
  for (const re of FILLER_PHRASES) out = out.replace(re, (whole, ...rest) => (/^,/.test(whole) || /^\s/.test(whole) ? " " : ""));
  out = out.replace(/\s+/g, " ").replace(/^[\s,;:-]+/, "").replace(/\s+([,.!?])/g, "$1").trim();
  if (out !== before) log.push("filler");
  return out || t;
}

function stripLeading(t, log) {
  let out = t;
  for (let pass = 0; pass < 8; pass += 1) {
    let applied = false;
    for (const rule of LEAD) {
      const m = rule.re.exec(out);
      if (!m || !m[0].trim()) continue;
      const rest = out.slice(m[0].length).replace(/^[\s,.:;!-]+/, "");
      if (!rest || !rule.test(rest)) continue;
      out = `${rule.as}${rest}`.trim();
      log.push(rule.label);
      applied = true;
      break;
    }
    if (!applied) break;
  }
  return out;
}

const firstWord = t => (/^[\p{L}'-]+/u.exec(cleanText(t).toLowerCase()) || [""])[0];
const lastWord = t => (/([\p{L}\p{N}'-]+)[^\p{L}\p{N}]*$/u.exec(cleanText(t).toLowerCase()) || [])[1] || "";

function stripTrailing(t, log, extra = {}) {
  let out = t;
  for (let pass = 0; pass < 8; pass += 1) {
    let applied = false;
    // trailing punctuation: full stops, commas and exclamation marks are never part of a request; a question mark is kept for questions
    const punct = /[\s.,;:!]+$/.exec(out);
    if (punct && out.length > punct[0].length) { out = out.slice(0, out.length - punct[0].length); applied = true; }
    if (/\?+$/.test(out) && OPENER_VERBS.has(firstWord(out)) && !QUESTION_WORDS.has(firstWord(out))) { out = out.replace(/\?+$/, ""); applied = true; log.push("trailing-punctuation"); }
    out = out.replace(/\s*[\p{Extended_Pictographic}️]+\s*$/u, m => { applied = true; return ""; });
    for (const [re, label, guarded] of TRAILING) {
      const m = re.exec(out);
      if (!m) continue;
      const rest = out.slice(0, m.index).replace(/[\s,;:-]+$/, "");
      if (!rest) continue;
      const tokens = rest.split(" ").filter(Boolean);
      const separated = /[,.;:!-]/.test(m[0].charAt(0)) || /^\s*[,.;:!-]/.test(m[0]);
      // what remains must still be a whole request: at least two words (one when a comma/stop set the thanks apart), not ending on a word that needs another after it,
      // and for a message ("text mama thank you") the words after the recipient are the MESSAGE unless they were set apart.
      if (tokens.length < (separated ? 1 : 2)) continue;
      if (guarded && END_GUARD.has(lastWord(rest)) && !separated) continue;
      if (END_GUARD.has(lastWord(rest)) && /^(?:trailing-polite|trailing-name-called|trailing-thanks)$/.test(label) && !separated) continue;
      if (MESSAGE_VERBS.has(firstWord(rest)) && !separated && tokens.length <= 3) continue;
      if (label === "trailing-laugh" && MESSAGE_VERBS.has(firstWord(rest)) && !separated) continue;
      // "my name is Kyro" / "call me Nexus" / "add Thank You cards": a name or an item at the end of the sentence is not a vocative
      if (label === "trailing-name-called" && (/\b(?:name is|name's|call me|called|named|am|i'm|im|from|for|with|to|about|and)\s*$/i.test(rest) || END_GUARD.has(lastWord(rest)))) continue;
      if (label === "trailing-name-called" && !separated && tokens.length < 3 && !OPENER_VERBS.has(firstWord(rest))) continue;
      out = rest;
      log.push(label);
      applied = true;
      break;
    }
    if (!applied) break;
  }
  return out;
}

function pidginFixes(t, log) {
  let out = t;
  for (const [re, fn] of PIDGIN) out = out.replace(re, fn);
  if (out !== t) log.push("pidgin");
  return out;
}

// "....... and anyway please add milk to my shopping list" -> "please add milk to my shopping list"
function afterMarkers(t, log) {
  let out = t;
  const lastAfter = re => {
    let cut = -1; let m;
    re.lastIndex = 0;
    while ((m = re.exec(out))) { cut = m.index + m[0].length; if (m[0].length === 0) re.lastIndex += 1; }
    return cut;
  };
  let cut = lastAfter(STRONG_MARKER);
  if (cut > 0) {
    const rest = out.slice(cut).trim();
    if (rest.split(" ").filter(Boolean).length >= 2) { log.push("lead-in"); return rest; }
  }
  // a weaker marker only after a real lead-in (at least a clause long) and only when a request follows
  cut = lastAfter(SOFT_MARKER);
  if (cut > 0) {
    const before = out.slice(0, cut).split(" ").filter(Boolean).length;
    const rest = out.slice(cut).trim();
    if (before >= 7 && looksLikeRequest(rest) && rest.split(" ").filter(Boolean).length >= 3) { log.push("lead-in"); return rest; }
  }
  return out;
}

// Over the planner's limit: keep the sentence that holds the request (and any sentence that holds a danger phrase), not the first 260 characters.
function shorten(t, log) {
  if (t.length <= MAX_PLANNER_INPUT) return t;
  const segments = t.split(/(?<=[.!?;\n])\s+|\s+(?=(?:and then|but anyway|anyway|also|then|so|okay|ok)\b)/i).map(s => s.trim()).filter(Boolean);
  const stripSeg = s => { const l = []; return stripTrailing(stripLeading(stripFillers(s, l), l), l); };
  const cleaned = segments.map(stripSeg);
  const dangerous = cleaned.filter(s => DANGER.test(s));
  let request = null;
  for (let i = cleaned.length - 1; i >= 0; i -= 1) { if (looksLikeRequest(cleaned[i]) && !DANGER.test(cleaned[i]) && cleaned[i].length <= MAX_PLANNER_INPUT) { request = cleaned[i]; break; } }
  let picked = [...dangerous.slice(-2), ...(request ? [request] : [])];
  if (!picked.length) picked = [cleaned[cleaned.length - 1] || t];
  let joined = [...new Set(picked)].join(". ");
  if (joined.length > MAX_PLANNER_INPUT) {
    // keep the end: the request is almost always said last
    joined = joined.slice(joined.length - MAX_PLANNER_INPUT);
    joined = joined.replace(/^\S*\s/, "");
  }
  log.push("long-input");
  return joined;
}

// "text John saying I am late" / "send an sms to +254712345678: running late": everything after the delimiter is the person's MESSAGE and is passed through as said.
const MESSAGE_HEAD = /\b(?:text|sms|whats ?app|message|e-?mail|tell|send(?: an?| the)?(?: (?:text|sms|message|whats ?app|e-?mail))?|write to|tuma ujumbe|mtumie|nitumie|mwambie|niambie)\b/i;
const MESSAGE_DELIMITER = /^(.{2,90}?)(\s+(?:saying|says|and say|to say|and tell (?:him|her|them)|with the message|that says|kwamba|akisema|ukisema|na umwambie)\b[:,]?\s+|\s*:\s+)(.+)$/i;
function splitMessage(t) {
  const m = MESSAGE_DELIMITER.exec(t);
  if (!m || !MESSAGE_HEAD.test(m[1]) || !m[3].trim()) return null;
  return { head: m[1], delimiter: m[2].trim().replace(/^[:,]\s*/, ":"), body: m[3].trim() };
}

// The ways speech recognition mishears the words of a request (never the words of a name, an item or a message). Each is a specific, unambiguous slip.
const ASR_FIXES = [
  [/^ad\s+(?!for\b|of\b|hoc\b)(?=\S)/i, "add "],
  [/\btoo\s+(?=(?:my|the|your|our|a|an)\s)/gi, "to "],
  [/\btoo\s+(?=(?:take|call|buy|pay|get|do|go|send|check|feed|water|plant|harvest|visit|meet|pick|bring|see)\b)/gi, "to "],
  [/\bshop(?:ing|pin|in)\b/gi, "shopping"],
  [/\bcalend[ae]r\b/gi, m => (/^calendar$/i.test(m) ? m : /^[A-Z]/.test(m) ? "Calendar" : "calendar")],
  [/\bto?mm?or+ow\b/gi, "tomorrow"],
  [/^wat\s+(?=is|are|was|do|did)/i, "what "],
  [/\bwether\b/gi, "weather"],
  [/\bremainders?\b/gi, "reminders"],
  [/\bcancle\b/gi, "cancel"],
  [/\bre[sz]ume+\b/gi, "resume"],
  [/\bright\s+down\b(?=\s+(?:that|the|my|a|an|this)\b)/gi, "write down"],
  [/\bdis\s+(?=week|month|year)/gi, "this "]
];
function asrFixes(t, log) {
  let out = t;
  for (const [re, to] of ASR_FIXES) out = out.replace(re, to);
  if (out !== t) log.push("asr-fix");
  return out;
}

function runPipeline(input, log, { allowShorten = true } = {}) {
  let t = input;
  t = asrFixes(t, log);
  t = collapseStutters(t, log);
  t = stripFillers(t, log);
  t = afterMarkers(t, log);
  t = pidginFixes(t, log);
  t = stripLeading(t, log);
  t = stripTrailing(t, log);
  t = stripLeading(t, log);
  if (allowShorten) t = shorten(t, log);
  return t;
}

// options: language; wakeBeforeQuestions (default true): "Hey Nexus, are you with me today?" -> "are you with me today?". The older voice path reads "Hey Nexus" itself
// in greetings and presence checks, so it asks for false: a wake word is then only dropped in front of a command.
function normaliseSpoken(text, { language = "en", wakeBeforeQuestions = true } = {}) {
  const before = ACTIVE;
  ACTIVE = { wakeBeforeQuestions };
  try { return normaliseOnce(text, language); } finally { ACTIVE = before; }
}

function normaliseOnce(text, language) {
  const original = String(text ?? "");
  const stripped = [];
  const clean = cleanText(original);
  if (clean !== original.replace(/\s+/g, " ").trim()) stripped.push("unicode-clean");
  if (HAS_INVISIBLE.test(original)) stripped.push("invisible-characters");
  const danger = DANGER.test(clean);
  if (!clean) return { text: "", clean: "", original, stripped, changed: false, danger: false, language };

  let t;
  const message = splitMessage(clean);
  if (message) {
    // the words around the message are tidied; the message itself is left exactly as said (only a closing full stop goes)
    const head = runPipeline(message.head, stripped, { allowShorten: false });
    const sep = message.delimiter === ":" ? ": " : ` ${message.delimiter} `;
    t = `${head}${sep}${message.body.replace(/[.!\s]+$/, "") || message.body}`;
  } else t = runPipeline(clean, stripped);
  t = cleanText(t);
  // a result that would be empty or lose every word falls back to the cleaned text
  if (!/[\p{L}\p{N}]/u.test(t)) t = clean;
  return { text: t, clean, original, stripped: [...new Set(stripped)], changed: t !== clean, danger, language };
}

module.exports = Object.freeze({ normaliseSpoken, cleanText, toAsciiDigits, hasDanger, looksLikeRequest, MAX_PLANNER_INPUT });
