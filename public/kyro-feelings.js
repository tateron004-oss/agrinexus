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
    sw: " Ukifikiria kujidhuru wakati wowote, niambie, na piga namba ya dharura ya eneo lako.",
    ha: " Idan ka taɓa tunanin cutar da kanka, ka faɗa mini, ka kuma kira lambar gaggawa ta yankinku.",
    am: " ራስዎን ለመጉዳት ካሰቡ፣ ይንገሩኝ፣ እና የአካባቢዎን የአደጋ ጊዜ ቁጥር ይደውሉ።",
    yo: " Bí o bá ń ronú láti ṣe ara rẹ léṣe, sọ fún mi, kí o sì pe nọ́mbà pàjáwìrì ní agbègbè rẹ.",
    ig: " Ọ bụrụ na ị na-eche iwe onwe gị merụọ ahụ, gwa m, ma kpọọ nọmba mberede mpaghara gị."
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
    },
    ha: {
      sad: "Na yi baƙin ciki da kake jin baƙin ciki. Ba laifi ba ne ka ji haka, kuma ba sai ka warware shi kai kaɗai ba. Kana so ka faɗa min abin da ke faruwa, ko mu ɗauki minti ɗaya muna jan numfashi a hankali tare?",
      anxious: "Wannan kamar ba shi da daɗi ko kaɗan. Jin fargaba yana da wahala, kuma zai iya sauƙi. Mu rage gudu tare: ja numfashi har ƙirga huɗu, riƙe har huɗu, sannan fitar da shi har shida. Kana so mu yi haka yanzu, ko ka faɗa min abin da ke sa ka fargaba?",
      stressed: "Wannan kamar nauyi ne mai yawa. Mu ɗauki abu ɗaya bayan ɗaya. Me ya fi damunka yanzu? Idan kana so, za mu iya fara yin minti ɗaya na jan numfashi a hankali.",
      lonely: "Na yi baƙin ciki da kake jin kaɗaici. Ina nan, kuma ina farin cikin yin magana. Akwai wanda ka amince da shi da za ka iya tuntuɓa yau, ko da gajeren saƙo ne? Ko faɗa min abin da ke zuciyarka.",
      overwhelmed: "Wannan abu ne mai yawa a lokaci ɗaya. Mu rage gudu. Ja numfashi ɗaya a hankali tare da ni, shiga har huɗu, fita har shida. Sannan faɗa min abu ɗaya da ya fi nauyi, mu fara daga can.",
      depressed: `Na gode da ka faɗa min. Jin damuwa mai zurfi yana da wahalar ɗauka, kuma ya dace ka yi magana da likita, nas ko mai ba da shawara, wanda zai iya taimakawa sosai. Zan iya saurara yanzu kuma in taimaka maka ka shirya abin da za ka faɗa musu. Yaya abubuwa suke a kwanan nan?`
    },
    am: {
      sad: "በማዘንህ አዝናለሁ። እንዲህ መሰማት ችግር የለውም፣ እና ብቻህን መፍታት የለብህም። እየሆነ ያለውን ልትነግረኝ ትፈልጋለህ ወይስ ከእኔ ጋር ለአንድ ደቂቃ ቀስ ብለህ መተንፈስ?",
      anxious: "ያ በጣም የማይመች ይመስላል። የጭንቀት ስሜት ከባድ ነው፣ ግን ሊቀል ይችላል። አብረን ቀስ እንበል፦ እስከ አራት ቆጥረህ ተንፍስ፣ እስከ አራት ያዝ፣ እስከ ስድስት አውጣ። አሁን ይህን ማድረግ ትፈልጋለህ ወይስ ምን እንደሚያስጨንቅህ ትነግረኛለህ?",
      stressed: "ያ ብዙ ሸክም ይመስላል። አንድ በአንድ እንውሰደው። አሁን በጣም የሚከብድህ ምንድን ነው? ከፈለግህ መጀመሪያ ለአንድ ደቂቃ ቀስ ብለን መተንፈስ እንችላለን።",
      lonely: "ብቸኝነት ስለተሰማህ አዝናለሁ። እዚህ ነኝ፣ ማውራትም ደስ ይለኛል። ዛሬ በአጭር መልእክትም ቢሆን ልታገኘው የምትችለው የምታምነው ሰው አለ? ወይም በአእምሮህ ያለውን ንገረኝ።",
      overwhelmed: "ያ በአንድ ጊዜ ብዙ ነው። ቀስ እንበል። ከእኔ ጋር አንድ ቀስ ያለ ትንፋሽ ውሰድ፣ እስከ አራት አስገባ እስከ ስድስት አውጣ። ከዚያ በጣም የከበደህን አንድ ነገር ንገረኝ፣ ከዚያ እንጀምራለን።",
      depressed: `ስለነገርከኝ አመሰግናለሁ። የድባቴ ስሜት ለመሸከም ከባድ ነው፣ እና በእውነት ሊረዳህ ከሚችል ሐኪም፣ ነርስ ወይም አማካሪ ጋር መነጋገር ተገቢ ነው። አሁን ላዳምጥህ እና ምን እንደምትላቸው እንድታዘጋጅ ልረዳህ እችላለሁ። በቅርቡ ሁኔታው እንዴት ነበር?`
    },
    yo: {
      sad: "Ó dùn mí pé inú rẹ bàjẹ́. Kò burú láti ní irú ìmọ̀lára yìí, o kò sì ní láti yanjú rẹ̀ nìkan. Ṣé o fẹ́ sọ ohun tó ń ṣẹlẹ̀ fún mi, tàbí ká jọ mí kanlẹ̀ díẹ̀díẹ̀ fún ìṣẹ́jú kan?",
      anxious: "Ìyẹn dà bí ohun tí kò rọrùn rárá. Ìmọ̀lára àníyàn le, ṣùgbọ́n ó lè rọlẹ̀. Jẹ́ ká jọ fà sẹ́yìn: mí sínú títí di mẹ́rin, dì í mú títí di mẹ́rin, kí o sì mí jáde títí di mẹ́fà. Ṣé o fẹ́ ṣe bẹ́ẹ̀ báyìí, tàbí sọ ohun tó ń dà ọ́ láàmú fún mi?",
      stressed: "Ìyẹn dà bí ẹrù tó pọ̀. Jẹ́ ká mú un ní ọ̀kan lẹ́ẹ̀kan. Kí ló ń wọ̀ ọ́ lọ́rùn jù báyìí? Bí o bá fẹ́, a lè kọ́kọ́ mí kanlẹ̀ díẹ̀díẹ̀ fún ìṣẹ́jú kan.",
      lonely: "Ó dùn mí pé o ń dá wà. Mo wà níbí, inú mi sì dùn láti bá ọ sọ̀rọ̀. Ṣé ẹnìkan wà tí o gbẹ́kẹ̀lé tí o lè kàn sí lónìí, kódà pẹ̀lú ọ̀rọ̀ kúkúrú? Tàbí sọ ohun tó wà lọ́kàn rẹ fún mi.",
      overwhelmed: "Ìyẹn pọ̀ lẹ́ẹ̀kan náà. Jẹ́ ká fà sẹ́yìn. Mí kanlẹ̀ díẹ̀díẹ̀ lẹ́ẹ̀kan pẹ̀lú mi, sínú títí di mẹ́rin, jáde títí di mẹ́fà. Lẹ́yìn náà sọ ohun kan tó wúwo jù fún mi, a ó sì bẹ̀rẹ̀ láti ibẹ̀.",
      depressed: `O ṣé tí o sọ fún mi. Ìrẹ̀wẹ̀sì ọkàn ṣòro láti gbé, ó sì yẹ kí o bá dókítà, nọ́ọ̀sì tàbí olùdámọ̀ràn sọ̀rọ̀, tí ó lè ràn ọ́ lọ́wọ́ gan-an. Mo lè gbọ́ ọ báyìí kí n sì ràn ọ́ lọ́wọ́ láti múra ohun tí o máa sọ fún wọn. Báwo ló ṣe rí láìpẹ́ yìí?`
    },
    ig: {
      sad: "Ọ dị m nwute na obi adịghị gị mma. Ọ dị mma inwe mmetụta a, ị chọghịkwa idozi ya naanị gị. Ị ga-achọ ịgwa m ihe na-eme, ma ọ bụ ka anyị kuo ume nwayọọ nwayọọ ọnụ otu nkeji?",
      anxious: "Nke ahụ dị ka ihe na-adịghị mma ma ọlị. Mmetụta nchegbu siri ike, ma ọ nwere ike ịdị nwayọọ. Ka anyị jiri nwayọọ ọnụ: kuo ume ruo anọ, jide ya ruo anọ, ma kupụ ya ruo isii. Ị chọrọ ime nke ahụ ugbu a, ma ọ bụ gwa m ihe na-echegbu gị?",
      stressed: "Nke ahụ dị ka ibu dị arọ. Ka anyị were otu ihe n'otu oge. Gịnị kacha na-anyị gị arọ ugbu a? Ọ bụrụ na ị chọrọ, anyị nwere ike ibu ụzọ kuo ume nwayọọ otu nkeji.",
      lonely: "Ọ dị m nwute na ịnọ naanị gị na-ewute gị. Anọ m ebe a, obi dịkwa m ụtọ ikwu okwu. Ọ nwere onye ị tụkwasịrị obi ị nwere ike ịkpọtụrụ taa, ọbụlagodi obere ozi? Ma ọ bụ gwa m ihe dị gị n'obi.",
      overwhelmed: "Nke ahụ bụ ọtụtụ ihe n'otu oge. Ka anyị jiri nwayọọ. Kuo otu ume nwayọọ na m, banye ruo anọ, pụta ruo isii. Mgbe ahụ gwa m otu ihe kacha dị arọ, anyị ga-amalite ebe ahụ.",
      depressed: `Daalụ maka ịgwa m. Ịda mbà n'obi siri ike ibu, ọ dịkwa mma ịgwa dọkịta, nọọsụ ma ọ bụ onye ndụmọdụ okwu, onye nwere ike inye aka n'ezie. Enwere m ike ige gị ntị ugbu a ma nyere gị aka ịkwadebe ihe ị ga-agwa ha. Kedu ka ọ dị n'oge na-adịbeghị anya?`
    }
  };

  function reply(feeling, language) {
    const lang = ((code) => (["sw", "ha", "am", "yo", "ig"].includes(code) ? code : "en"))(String(language || "").trim().toLowerCase().split(/[-_]/)[0]);
    const text = (REPLIES[lang] || REPLIES.en)[feeling];
    if (!text) return "";
    // the heavier words (depressed) carry the safety line; everyone else is asked gently what is on their mind
    return feeling === "depressed" ? `${text}${SAFETY[lang]}` : text;
  }

  return Object.freeze({ read, hopeless, reply, FEELING_NAMES: Object.freeze(FEELINGS.map(([name]) => name)) });
});
