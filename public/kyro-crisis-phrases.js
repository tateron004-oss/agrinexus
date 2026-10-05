(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroCrisisPhrases = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // ONE list of what people say when they may harm themselves or someone else, or are being hurt. It is shared by every place that listens: the companion safety
  // reader (nexus/companion/safety.js), the mental-health classifier that guards typed chat, the phone and the voice paths (public/nexus-mental-health-behavioral-wellness.js).
  // Before this the two readers each had their own shorter list and disagreed, and the phone paths only had the shorter one.
  //
  // The rule kept from the companion reader: a false trigger costs one calm, caring reply; a missed real one does not. So this leans toward catching. It never
  // decides an alert on its own: these phrases only ever produce the caring reply and the OFFER to alert the circle.
  //
  // The WORDING of the replies that follow must be reviewed by a clinician and by a veterans', youth or crisis organisation before it is relied on; this file is only what is
  // recognised. The Swahili forms also need a fluent speaker.

  // Texting and slang spellings, brought to plain words before anything is matched ("i wanna die", "i want 2 die", "kms", "unalive myself").
  function normalize(text) {
    return String(text ?? "")
      .toLowerCase()
      .replace(/[’‘`]/g, "'")
      .replace(/\bwanna\b|\bwana\b|\bwan to\b/g, "want to")
      .replace(/\bgonna\b/g, "going to")
      .replace(/\bkms\b/g, "kill myself")
      .replace(/\bunalive\b/g, "kill")
      .replace(/\bdont\b|\bdnt\b/g, "don't")
      .replace(/\bcant\b/g, "can't")
      .replace(/\bwont\b/g, "won't")
      .replace(/\bim\b/g, "i'm")
      // common typing slips in an emergency
      .replace(/\bcan'?t breath\b/g, "can't breathe")
      .replace(/\bheart atack\b|\bhart attack\b/g, "heart attack")
      .replace(/\bswalowed\b|\bswollowed\b/g, "swallowed")
      .replace(/\bi (?:have )?faln\b/g, "i have fallen")
      .replace(/\bi fel\b/g, "i fell")
      .replace(/\bi wan to\b/g, "i want to")
      .replace(/\bkill my ?self\b/g, "kill myself")
      .replace(/\bwant 2\b/g, "want to")
      .replace(/\s+/g, " ")
      .trim();
  }

  const SELF_HARM = [
    // saying it outright, or planning, deciding, feeling like it
    /\b(?:want(?:ed|s)?|wish|need|plan(?:ning|ned)?|decid(?:ed|ing)|ready|about|going|trying|thinking (?:of|about)|think about|thought about|feel like|keep thinking (?:of|about)) (?:to |of )?(?:kill(?:ing)? myself|end(?:ing)? it all|end(?:ing)? it|end(?:ing)? (?:my|my own) life|take? my own life|tak(?:e|ing) my own life|hang(?:ing)? myself|shoot(?:ing)? myself|stab(?:bing)? myself|hurt(?:ing)? myself|harm(?:ing)? myself|cut(?:ting)? myself|overdos(?:e|ing)|poison(?:ing)? myself|drown(?:ing)? myself|burn(?:ing)? myself|disappear(?:ing)?|jump(?:ing)? (?:off|from))\b/,
    // dying: not "going to die" (a fear, or a figure of speech), but wanting, planning or thinking about it
    /\b(?:want(?:ed|s)?|wish|need|plan(?:ning|ned)?|decid(?:ed|ing)|ready|trying) (?:to )?(?:die|be dead)\b(?! (?:laughing|of laughter|of embarrassment|from laughing|of shame|of boredom|of hunger|of thirst|of curiosity))/,
    /\b(?:thinking (?:of|about)|think about|thought about|keep thinking (?:of|about)) (?:dying|death|suicide)\b/,
    /\bkill(?:ing)? myself\b/,
    /\b(?:hang|shoot|stab|drown|slit) (?:myself|my wrists|my throat)\b|\bcut (?:my wrists|my throat)\b|\bcut myself(?! (?:a|an|some|the|off|another|more|one|loose|free)\b)/,
    /\bwish i (?:had )?never been born\b/,
    /\bblow my brains out\b/,
    /\b(?:take|took|taking) my own life\b/,
    // the quieter ways of saying it
    /\bwish i (?:was|were|had been) (?:dead|never born|gone)\b/,
    /\bwish i (?:did not|didn't|would not|wouldn't|could not|couldn't) (?:wake up|exist|be here|come back)\b/,
    /\bwish i (?:had )?(?:died|never (?:woke|wake) up|had not come back|hadn't come back)\b/,
    /\bshould have died\b/,
    /\bnever wake up\b|\bsleep forever\b/,
    /\b(?:rather|better off) (?:be )?dead\b/,
    /\bbetter off without me\b/,
    /\bworld (?:is|would be) better without me\b/,
    /\b(?:nobody|no one) would (?:miss|care|notice) (?:me|if i)\b/,
    /\b(?:burden (?:to|on) (?:everyone|everybody|my family|them|others))\b/,
    /\beveryone would be better off\b/,
    /\b(?:tired|sick|done|finished|weary) (?:of|with) (?:living|life|everything|this life|being alive)\b/,
    /\bdon't care if i (?:live|die)\b/,
    /\bi'm ready to die\b|\bi am ready to die\b/,
    /\bjust want the pain to stop\b/,
    /\bi (?:don't|do not) (?:want|wish) to (?:live|be alive|be here|exist|go on|wake up)\b/,
    /\bno (?:reason|point) (?:in |to )?(?:living|live|going on|being here|being alive)\b/,
    /\bcan't (?:go on|take (?:it|this) anymore|do this anymore)\b/,
    /\bwhat'?s the point of (?:living|going on|life)\b/,
    /\bi hate my life\b/,
    // plans and goodbyes
    /\b(?:written|wrote|left|leaving) (?:a )?(?:suicide )?note\b|\bsuicide note\b/,
    /\bgiving away (?:my )?(?:things|stuff|belongings|possessions)\b/,
    /\bthis is my last (?:message|goodbye|text)\b/,
    /\bgoodbye (?:everyone|forever|cruel world)\b|\bsaying goodbye (?:to everyone|forever|for the last time)\b/,
    /\b(?:won't|will not) be (?:around|here) (?:much )?longer\b/,
    /\btonight is the night\b|\bend(?:ing)? it tonight\b/,
    /\b(?:going to|will) end it\b/,
    /\bmade up my mind\b[^.!?]{0,30}\b(?:end|die|tonight)\b/,
    // a weapon or the means, in the same breath as thinking about using it
    /\b(?:gun|pistol|rifle|weapon|firearm|knife|rope|noose|razor|blade|pills|tablets|poison|pesticide)\b[^.!?]{0,70}\b(?:think(?:ing)? (?:about|of) (?:it|using it|ending)|use it on myself|end it|end my life|on myself|kill me)\b/,
    /\b(?:put|pointed|placed|held|hold|holding) (?:my |a |the )?(?:\w+ ){0,2}(?:gun|pistol|rifle|weapon|knife|barrel)\b[^.!?]{0,40}\b(?:in my mouth|to my head|at myself|against my)\b/,
    /\bkeep (?:looking at|thinking about) my (?:gun|pistol|rifle|weapon|knife|rope)\b/,
    // too many tablets, said with the swallowing or a big number
    /\b(?:swallowed|downed) (?:all|every|\d{2,3}) (?:of )?(?:my |the )?(?:pills|tablets|panadol|paracetamol|medicine|medication|capsules)\b/,
    /\btook \d{2,3} (?:pills|tablets|panadol|paracetamol|capsules)\b/,
    /\b(?:want|going|plan(?:ning)?|thinking) to (?:take|swallow) (?:all|every) (?:of )?(?:my |the )?(?:pills|tablets|medicine|medication)\b/,
    // Swahili
    /\bnimechoka na maisha\b/,
    /\b(?:ni )?(?:bora|afadhali|heri) (?:nife|ningekufa|kufa)\b/,
    /\bnatamani (?:kufa|ningekufa|nisingeamka|ningekuwa nimekufa)\b/,
    /\b(?:napenda|nataka|ninataka|ningependa) (?:kufa|kujiua|kujidhuru|kujitoa uhai)\b/,
    /\bsina (?:sababu|sababu ya|sababu za) (?:ya )?kuishi\b/,
    /\bmaisha (?:yangu )?hayana (?:maana|thamani)\b/,
    /\b(?:nafikiria|ninafikiria|nimeamua) (?:kujiua|kujidhuru)\b/,
    /\bnina (?:bunduki|kisu|sumu)\b[^.!?]{0,60}\b(?:kuitumia|kujiua|kujidhuru|nafikiria)\b/
  ];

  // Said about a person near the speaker, not about themselves: a different reply (step away, call someone), never the same as for self-harm.
  const HARM_OTHERS = [
    /\b(?:want(?:ed)? to|going to|gonna|feel like|feels like|might|planning to|thinking (?:of|about)|tempted to|will) (?:kill|hurt|hit|beat|stab|shoot|strangle|attack|harm)(?:ing)? (?:my |the |our )?(?:wife|husband|son|daughter|child|children|kids|baby|mother|father|mum|mom|dad|brother|sister|boss|neighbou?r|boyfriend|girlfriend|teacher|him|her|them|someone|somebody|people|family|everyone)\b/,
    /\bfeel like (?:hitting|beating|hurting|killing|attacking) (?:my |the |our )?(?:wife|husband|son|daughter|child|children|kids|baby|mother|father|mum|mom|dad|brother|sister|him|her|them|someone|somebody)\b/,
    /\bi might hurt (?:my |the |our )?(?:family|wife|husband|son|daughter|children|kids|someone|somebody|people)\b/
  ];

  // Being hurt or threatened, said by the person it is happening to (a child, a teenager, a woman at home).
  const ABUSE = [
    /\bmy (?:teacher|stepfather|step-father|stepdad|uncle|dad|father|brother|cousin|boyfriend|pastor|coach|neighbou?r|boss|husband) (?:touch(?:ed|es|ing)|rap(?:ed|es)|beat(?:s|ing)?|hit(?:s|ting)?|abus(?:ed|es|ing)|molest(?:ed|s|ing)|forces|forced) (?:me|my)\b/,
    /\bi (?:was|am being|got|have been) (?:raped|molested|abused|sexually assaulted|beaten)\b/,
    /\bi (?:feel|am) unsafe (?:at home|here|with him|with her)\b/,
    /\b(?:threaten(?:s|ing|ed)?) to (?:share|post|leak|send) my (?:nudes?|photos?|pictures?|videos?)\b/,
    /\bsent (?:a )?nudes?\b[^.!?]{0,50}\b(?:threat|blackmail)/,
    /\bblackmail(?:ing|ed)? me\b/
  ];

  // Sentences that LOOK like an emergency to the circle-alert rules but are not ("I cannot get up in the morning", "my friend was not breathing when we found him in the war",
  // "I can't breathe when I hear fireworks", "I am in danger of losing my house"). Used to stop a real push alert going to a family for an ordinary or past thing.
  const NOT_AN_EMERGENCY = [
    /\b(?:can'?t|cannot|can not) get up (?:in the mornings?|early|before (?:noon|midday)|since)\b/,
    /\b(?:can'?t|cannot|can not|am unable to|am not able to) get up in the mornings?\b/,
    /\b(?:was|were|had been|had) not breathing\b[^.!?]{0,60}\b(?:when|years? ago|in the war|back then|long ago|that day|during)\b/,
    /\bcan'?t breathe (?:when|whenever|if|because of)\b/,
    /\bin danger of (?:losing|failing|missing|being late|going)\b/,
    // a fall that is over ("I fell last week and my knee still hurts", "tell my daughter I fell yesterday and I am fine")
    /\bi (?:fell|slipped|tripped|have fallen|fallen)\b[^.!?]{0,50}\b(?:yesterday|last (?:week|month|night|year|time)|days? ago|weeks? ago|months? ago)\b/,
    /\bi (?:fell|slipped|tripped|have fallen)\b[^.!?]{0,40}\b(?:and )?(?:i'm|i am) (?:fine|ok|okay|safe|alright|all right)\b/,
    /\bi (?:fell|tripped|slipped) (?:behind|asleep|in love)\b/
  ];

  // Medical warning signs a person with diabetes, high blood pressure or heart trouble may say in plain words (faint, blacked out, face drooping, slurred speech, one side weak, sudden
  // sight loss, shaking and sweating, a very low sugar). They get the calm urgent reply with the number to call and the offer to alert the circle, never the normal-flow reply.
  const MEDICAL_URGENT = [
    /\bi(?:'m| am)? (?:have |just |nearly |almost )?(?:fainted|fainting)\b|\bi (?:feel|am feeling|felt) faint\b|\bi (?:passed|blacked) out\b|\bi (?:am |was )?(?:about to|going to) (?:faint|pass out|black out)\b/,
    /\b(?:my )?(?:speech|words) (?:is|are|was|were) (?:slurred|mixed up|confused)\b|\bslurred speech\b/,
    /\b(?:my )?face (?:is |feels |has gone |went )?(?:numb|drooping|droops|twisted)\b/,
    /\bone side of my (?:body|face)\b[^.!?]{0,30}\b(?:weak|numb|heavy|paralys[ez]d|dead)\b|\b(?:my )?(?:left|right) (?:arm|leg|side)\b[^.!?]{0,20}\b(?:weak|numb|won't move|can't move)\b/,
    /\b(?:sudden(?:ly)? (?:lost|loss of|can't see|cannot see|went blind)|i (?:suddenly )?can'?t see (?:anything|out of)|lost my (?:sight|vision))\b/,
    /\b(?:sweating|sweaty) and (?:shaking|shaky|trembling|confused)\b|\b(?:shaking|shaky|trembling) and (?:sweating|sweaty|confused)\b/,
    /\bmy (?:blood )?sugar is (?:very )?low\b|\bi think my sugar is low\b|\bsugar (?:crash|drop)(?:ped)?\b/,
    /\bseizure|\bconvulsing\b/
  ];

  // Scams aimed at people who are alone or elderly, and a PIN or password said out loud to be saved: Kyro answers with a plain "never share it", and never stores one.
  const SCAM = [
    /\b(?:asking|asks|asked|wants?|wanting|wanted|demand(?:s|ed|ing)?|needs?) (?:for )?(?:my|your|the) (?:pin|password|passcode|otp|cvv|card number|secret code)\b/,
    /\bsomeone (?:called|rang|phoned|texted|messaged)\b[^.!?]{0,50}\b(?:pin|password|otp|asked (?:me )?(?:for|to send) (?:some )?money|asked me to (?:send|pay|deposit)|(?:send|pay|deposit) (?:some )?money)\b/,
    /\b(?:i|you) (?:won|have won|am the winner of|was selected|were selected)\b[^.!?]{0,50}\b(?:prize|lottery|promotion|shillings|money|\d{4,})\b/,
    /\b(?:send|pay|deposit)\b[^.!?]{0,30}\b(?:to claim|to receive|to get my|to win|to unlock)\b/,
    /\b(?:safaricom|airtel|bank|mpesa|m-pesa|kra|nhif|police|government)\b[^.!?]{0,40}\b(?:asked|asking|wants?|says?|said)\b[^.!?]{0,40}\b(?:pin|password|send|deposit|pay)\b/,
    /\b(?:should i|can i|do i) (?:give|tell|send|share) (?:him |her |them |the \w+ )?(?:my|the) (?:pin|password|otp)\b/,
    /\bgive (?:him|her|them) my (?:pin|password)\b/
  ];
  const SECRET = /\b(?:pin|passcode|password|cvv|cvc|otp|secret code|card number|account number)\b[^.!?]{0,25}\b(?:is|are|was|:|=)\s*[a-z0-9]*\d/;

  // A weapon or the means is named alongside the thought: the reply adds a plain line about putting distance between the person and it.
  const MEANS = /\b(?:gun|pistol|rifle|weapon|firearm|knife|rope|noose|razor|blade|pills|tablets|poison|pesticide|bunduki|kisu|sumu)\b/;

  const any = (patterns, text) => patterns.some(pattern => pattern.test(text));
  // "my brother said he wants to die" is about someone else (answered by normal handling, not as the speaker's own crisis): a match is skipped when the words just before it
  // name another person as the one who feels it. A first-person match anywhere else in the same message still counts.
  const OTHER_PERSON_BEFORE = /\b(?:he|she|they|him|her|who|friend|brother|sister|mother|father|mum|mom|dad|son|daughter|husband|wife|neighbou?r|uncle|aunt|cousin|colleague|patient|client|student)\s+(?:\w+\s+)?$/;
  const ownMatch = (patterns, plain) => patterns.some(pattern => {
    const all = new RegExp(pattern.source, "g");
    for (let found = all.exec(plain); found; found = all.exec(plain)) {
      if (!OTHER_PERSON_BEFORE.test(plain.slice(Math.max(0, found.index - 25), found.index))) return true;
      if (found[0] === "") all.lastIndex++;
    }
    return false;
  });
  const selfHarm = text => { const plain = normalize(text); return plain.length > 0 && plain.length <= 500 && ownMatch(SELF_HARM, plain); };
  const harmOthers = text => { const plain = normalize(text); return plain.length > 0 && plain.length <= 500 && any(HARM_OTHERS, plain); };
  const abuse = text => { const plain = normalize(text); return plain.length > 0 && plain.length <= 500 && any(ABUSE, plain); };
  const notAnEmergency = text => any(NOT_AN_EMERGENCY, normalize(text));
  const scam = text => { const plain = normalize(text); return plain.length > 0 && plain.length <= 500 && any(SCAM, plain); };
  // "remember that my mpesa pin is 4821": a secret asked to be saved (the words to save it AND a number after pin/password).
  const storesSecret = text => { const plain = normalize(text); return /\b(?:remember|note|write|save|store|put|keep|add|record|jot)\b/.test(plain) && SECRET.test(plain); };
  const medicalUrgent = text => { const plain = normalize(text); return plain.length > 0 && plain.length <= 500 && any(MEDICAL_URGENT, plain); };
  const mentionsMeans = text => MEANS.test(normalize(text));
  // "I took all my pills": most often an ordinary report of taking medicine, so it is not a crisis phrase, but it is worth a calm check-in unless it is plainly about today's dose.
  const mightBeOverdose = text => {
    const plain = normalize(text);
    return /\bi (?:have |'ve )?(?:just )?(?:took|taken) all (?:of )?(?:my|the) (?:pills|tablets|medicine|medication)\b/.test(plain)
      && !/\b(?:today|this morning|tonight|this evening|already|as prescribed|on time|for the day|at \d|doctor|clinic)\b/.test(plain);
  };

  return Object.freeze({ normalize, selfHarm, harmOthers, abuse, scam, storesSecret, medicalUrgent, notAnEmergency, mentionsMeans, mightBeOverdose, SELF_HARM, HARM_OTHERS, ABUSE, MEDICAL_URGENT, NOT_AN_EMERGENCY });
});
