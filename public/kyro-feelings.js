(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroFeelings = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // What a person says when they are having a hard time but are not describing an emergency: "I feel sad", "I'm so stressed", "I feel anxious all the time", "I feel lonely", "I'm overwhelmed", "I feel depressed".
  // These used to get one of three cold lines ("I'm here with you. I can listen, help you name what is happening, suggest a simple coping step ... I cannot diagnose"), a menu ("I'm not sure what you'd like me
  // to do. You can say things like: find a clinic near me ..."), or "I have not saved this as your name or in your health records". Each feeling now gets a short, warm reply that names the feeling, offers one
  // small thing to do and one gentle question, and never diagnoses or tells anyone anything.
  //
  // read(text)     -> { feeling } or null.  A first-person statement of a feeling. Not a question about it ("what is anxiety?"), not about someone else, not a business worry.
  // hopeless(text) -> true when it is hopelessness (hopeless, worthless, "everything feels pointless", "nothing matters"). That is a risk marker, not everyday low mood: it is answered with the full caring crisis
  //                   reply (the number to call, the offer to alert the circle), never with this module's replies.
  // reply(feeling, language) -> the words.   language is "en" or "sw".
  //
  // The WORDING must be reviewed by a clinician before it is relied on, and the Kiswahili (a first draft) by a fluent speaker; the crisis reply it hands over to is under the same review (nexus/companion/safety.js).

  const clean = value => String(value ?? "").replace(/[’‘`]/g, "'").replace(/\s+/g, " ").trim();
  const BE = "(?:feel(?:ing)?|felt|am|i'?m|im|been|have been|i'?ve been|ive been|get|getting)";
  const VERY = "(?:so |really |very |a bit |kind of |quite |just |extremely |totally |completely |pretty )?";

  // A question or a request for information about a feeling is not a person having it.
  const ABOUT_IT = /^(?:what|why|how|when|where|who|which|can|could|should|would|will|is|are|does|do|did|tell me|explain|define|teach|give me|show me|find|search|list|help me (?:understand|find|learn))\b|\?\s*$/i;
  const THIRD_PERSON = /\b(?:he|she|they|my (?:friend|wife|husband|mother|father|mom|mum|dad|son|daughter|brother|sister|child|children|boss|team|staff|worker|neighbou?r))\s+(?:is|are|feels?|seems?|was|has been|have been)\b/i;

  // -- hopelessness: a risk marker --
  const HOPELESS = [
    new RegExp(`\\b${BE}\\s+${VERY}(?:hopeless|worthless|useless|a burden|like a burden|like (?:a )?(?:failure|nothing))\\b`, "i"),
    /\b(?:everything|life|it all|my life|this|the future)\s+(?:feels?|is|seems?|looks?)\s+(?:so |really |completely |totally )?(?:pointless|meaningless|hopeless|futile)\b/i,
    /\bnothing (?:matters|means anything)(?: anymore| any more)?\b/i,
    /^(?:what'?s the point|why bother)(?: anymore| any more| of anything| of it all| of living)?[.!]*$/i,
    /\bno (?:reason|point) (?:to|in) (?:live|living|go on|going on|keep going|carry on)\b/i
  ];
  function hopeless(text) {
    const raw = clean(text);
    if (!raw || raw.length > 300) return false;
    return HOPELESS.some(pattern => pattern.test(raw));
  }

  // -- everyday feelings --
  const FEELINGS = [
    ["depressed", new RegExp(`\\b${BE}\\s+${VERY}depressed\\b|\\bi (?:think |believe |might |may )?(?:i )?have depression\\b|\\bi'?m (?:in )?(?:a )?(?:deep )?depression\\b`, "i")],
    ["overwhelmed", new RegExp(`\\b${BE}\\s+${VERY}(?:overwhelmed|swamped|drowning)\\b|\\bi (?:can'?t|cannot|can not) cope\\b|\\b(?:it'?s|this is|everything is|it all is) (?:all )?(?:too much|getting too much)\\b|\\bfalling apart\\b`, "i")],
    ["anxious", new RegExp(`\\b${BE}\\s+${VERY}(?:anxious|nervous|panicky|on edge|scared all the time|afraid all the time|tense)\\b|\\bi (?:have|get|keep having) (?:anxiety|panic attacks?)\\b|\\bi (?:can'?t|cannot) stop worrying\\b|\\bi keep worrying\\b|\\bi'?m (?:so |really |very )?worried(?:[.!]*$| all the time| a lot| constantly| sick)`, "i")],
    ["stressed", new RegExp(`\\b${BE}\\s+${VERY}(?:stressed(?: out)?|burn(?:t|ed)[- ]?out|under (?:a lot of |so much )?pressure|exhausted by everything)\\b|\\bi'?m burnt out\\b`, "i")],
    ["lonely", new RegExp(`\\b${BE}\\s+${VERY}(?:lonely|isolated)\\b|\\bi feel (?:so |very |really |completely )?alone\\b|\\bi have no one to talk to\\b|\\bnobody (?:talks to|visits|calls) me\\b`, "i")],
    ["sad", new RegExp(`\\b${BE}\\s+${VERY}(?:sad|unhappy|miserable|upset|tearful|heartbroken)\\b|\\bi feel like crying\\b|\\bi'?ve been crying\\b`, "i")]
  ];

  function read(text) {
    const raw = clean(text);
    if (!raw || raw.length > 200) return null;
    if (ABOUT_IT.test(raw) || THIRD_PERSON.test(raw)) return null;
    for (const [feeling, pattern] of FEELINGS) if (pattern.test(raw)) return { feeling };
    return null;
  }

  const SAFETY = {
    en: " If you ever think about hurting yourself, tell me, and call your local emergency number.",
    sw: " Ukifikiria kujidhuru wakati wowote, niambie, na piga namba ya dharura ya eneo lako."
  };

  const REPLIES = {
    en: {
      sad: "I'm sorry you're feeling sad. It's okay to feel this way, and you don't have to sort it out alone. Would you like to tell me what has been happening, or take one minute of slow breathing with me?",
      anxious: "That sounds really uncomfortable. Anxious feelings are hard, and they can ease. Let's slow down together: breathe in for four, hold for four, and out for six. Would you like to do that now, or tell me what is making you anxious?",
      stressed: "That sounds like a lot to carry. Let's take it one thing at a time. What is weighing on you most right now? If you like, we can do one minute of slow breathing first.",
      lonely: "I'm sorry you're feeling lonely. I'm here, and I'm glad to talk. Is there someone you trust you could reach today, even with a short message? Or tell me what is on your mind.",
      overwhelmed: "That's a lot all at once. Let's slow down. Take one slow breath with me, in for four and out for six. Then tell me the one thing that feels heaviest, and we'll start there.",
      depressed: `Thank you for telling me. Feeling depressed is hard to carry, and it is worth talking to a doctor, nurse or counsellor, who can really help. I can listen now and help you prepare what to say to them. What has it been like lately?`
    },
    sw: {
      sad: "Pole kwa kuhisi huzuni. Ni sawa kuhisi hivyo, na huhitaji kulibeba peke yako. Ungependa kuniambia kinachoendelea, au tufanye pumzi ya polepole kwa dakika moja pamoja?",
      anxious: "Pole, hiyo inasumbua. Wasiwasi ni mzito, na unaweza kupungua. Tupunguze kasi pamoja: vuta pumzi kwa hesabu ya nne, shikilia nne, toa kwa sita. Ungependa kufanya hivyo sasa, au uniambie kinachokusumbua?",
      stressed: "Inaonekana unabeba mengi. Tuchukue jambo moja baada ya jingine. Ni nini kinachokulemea zaidi sasa hivi? Ukipenda, tunaweza kufanya pumzi ya polepole kwa dakika moja kwanza.",
      lonely: "Pole kwa kuhisi upweke. Niko hapa, na nafurahi kuzungumza nawe. Je, kuna mtu unayemwamini unayeweza kumfikia leo, hata kwa ujumbe mfupi? Au niambie kinachokusumbua.",
      overwhelmed: "Ni mengi kwa wakati mmoja. Tupunguze kasi. Vuta pumzi polepole pamoja nami, nne ndani na sita nje. Kisha niambie jambo moja linalokulemea zaidi, na tuanze hapo.",
      depressed: "Asante kwa kuniambia. Kuhisi mfadhaiko mkubwa ni mzigo, na inafaa kuzungumza na daktari, nesi au mshauri, ambaye anaweza kusaidia kweli. Naweza kukusikiliza sasa na kukusaidia kujiandaa. Imekuwaje siku za karibuni?"
    }
  };

  function reply(feeling, language) {
    const lang = /^sw/i.test(String(language || "")) ? "sw" : "en";
    const text = (REPLIES[lang] || REPLIES.en)[feeling];
    if (!text) return "";
    // the heavier words (depressed) carry the safety line; everyone else is asked gently what is on their mind
    return feeling === "depressed" ? `${text}${SAFETY[lang]}` : text;
  }

  return Object.freeze({ read, hopeless, reply, FEELING_NAMES: Object.freeze(FEELINGS.map(([name]) => name)) });
});
