"use strict";

// Someone asking a person for a PIN, a password or a one-time code; a recruiter or "agent" asking for money before a job, a loan, a visa or a prize; an ID or passport copy going to a stranger. Found by the
// user-journey sweep: the older "floor" router read "recruiter wants my ID and mpesa PIN" as a payment ("shall I post payment?") and "pay 5000 to get a job abroad" as "verify your profile", and a
// bare "yes" then moved money or promoted a job application. These are answered with a short plain warning (English or Kiswahili, whichever the person used) and nothing is staged or sent.
// Reached from contentGuardReply (nexus/brain/content-guard.js), so the planner, the phone line and the older command route all give the same answer.
// Wording: the Kiswahili lines were written for this change and need a fluent-speaker review.
const crisisPhrases = require("../../public/kyro-crisis-phrases.js");
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim().toLowerCase();

const SWAHILI_WORDS = /\b(?:nimepokea|nimeuza|nimelipa|nimetuma|tuma|nitume|nitumie|lipa|nilipe|kwa|kazi|mkopo|zawadi|elfu|nenosiri|anataka|ananiomba|wananiomba|wanataka|ameniambia|aliniambia|kitambulisho|mwajiri|nipate|ili|nipe|usiku|tafadhali|naomba|nataka)\b/;

const SECRET = String.raw`(?:pin|password|passcode|otp|one[- ]time (?:code|password|pin)|cvv|secret code|verification code|mpesa pin|m-pesa pin|atm pin)`;
const SECRET_SW = String.raw`(?:pin|nenosiri|neno la siri|otp|msimbo(?: wa siri| wa mara moja)?|namba ya siri)`;
const ASKER = String.raw`(?:wants?|wanting|wanted|asks?|asking|asked|needs?|needed|demands?|demanded|demanding|requires?|required|requested|requesting|insists?|says? i (?:must|should|have to) (?:give|send|share))`;
const JOBISH = String.raw`(?:job|work|employment|placement|position|visa|interview|loan|prize|scholarship|contract|ticket|permit|deal|vacancy)`;

const CREDENTIAL = [
  // "recruiter wants my ID and mpesa PIN", "the man asked for my password", "my boss needs my OTP"
  new RegExp(String.raw`\b${ASKER}\b[^.!?]{0,50}\b${SECRET}\b`),
  new RegExp(String.raw`\b(?:give|send|tell|share|text|whatsapp|read out|read)\b[^.!?]{0,25}\b(?:my|the)\b[^.!?]{0,15}\b${SECRET}\b[^.!?]{0,30}\b(?:to|with)\b[^.!?]{0,30}\b(?:recruiter|employer|agent|stranger|someone|caller|man|woman|person|him|her|them|boss|officer|bank|safaricom|company)\b`),
  new RegExp(String.raw`\b(?:should i|can i|do i|must i|am i supposed to|do you think i should)\b[^.!?]{0,20}\b(?:give|send|tell|share|text|read)\b[^.!?]{0,30}\b${SECRET}\b`)
];
const CREDENTIAL_SW = [
  new RegExp(String.raw`\b(?:anataka|wanataka|ananiomba|wananiomba|ameomba|wameomba|aliomba|walinitaka|alitaka|ananitaka|ananiambia|anadai|wanadai|anahitaji|wanahitaji)\b[^.!?]{0,50}\b${SECRET_SW}\b`),
  new RegExp(String.raw`\b(?:nimpe|nimtumie|nimwambie|nimpatie|niwape|niwatumie|nitume|nimsomee)\b[^.!?]{0,30}\b${SECRET_SW}\b`)
];

const FEE = [
  // "pay 5000 to get a job abroad", "send 2000 so I can get the visa"
  new RegExp(String.raw`\b(?:pay|paying|send|sending|deposit|depositing|transfer|give|giving|wire)\b[^.!?]{0,40}\b(?:to|so (?:that )?i (?:can )?|in order to|before i|before they|before getting|before i get|for me to|if i want)\b[^.!?]{0,15}\b(?:get|secure|receive|be given|apply|book|be hired|win|claim|unlock|start|obtain|processed?)\b[^.!?]{0,30}\b${JOBISH}\b`),
  new RegExp(String.raw`\b(?:pay|paying|send|sending|deposit|depositing)\b[^.!?]{0,40}\b(?:for|as)\b[^.!?]{0,10}\b(?:a |the |my )?(?:job|placement|visa|interview|work permit|vacancy|employment|loan)\b[^.!?]{0,20}\b(?:abroad|overseas|guarantee|guaranteed|offer|first|upfront|up front|fee)\b`),
  // "the agency says I must pay a fee first", "recruiter wants 5000 registration"
  new RegExp(String.raw`\b(?:recruiter|recruitment|employer|agency|agent|company|manager|hr|man|woman|person|someone|they|he|she|sacco|officer)\b[^.!?]{0,40}\b(?:wants?|asks?|asking|asked|needs?|demands?|says?|said|charges?|charging|requires?)\b[^.!?]{0,40}\b(?:pay|send|deposit|fee|money|payment|registration|processing|deposit|ksh|kes|shillings|\d{3,})\b[^.!?]{0,60}\b(?:${JOBISH}|abroad|overseas|first|before|upfront|up front)\b`),
  new RegExp(String.raw`\b(?:registration|processing|placement|recruitment|application|interview|visa|training|medical|admin|administration|documentation)\s+fees?\b[^.!?]{0,60}\b${JOBISH}\b|\b${JOBISH}\b[^.!?]{0,60}\b(?:registration|processing|placement|recruitment|application|interview|visa|training|medical|admin|administration|documentation)\s+fees?\b`),
  new RegExp(String.raw`\b(?:pay|send|deposit)\b[^.!?]{0,30}\b(?:to|before)\b[^.!?]{0,15}\b(?:get|secure|receive|start)\b[^.!?]{0,15}\b(?:a |the )?${JOBISH}\b[^.!?]{0,20}\b(?:abroad|overseas|in (?:dubai|qatar|saudi|canada|uk|usa|germany|europe|the gulf))\b`),
  new RegExp(String.raw`\b(?:pay|send|deposit)\b[^.!?]{0,30}\b(?:to|for)\b[^.!?]{0,15}\b(?:a |the )?${JOBISH}\b[^.!?]{0,10}\b(?:abroad|overseas)\b`)
];
const FEE_SW = [
  new RegExp(String.raw`\b(?:lipa|nilipe|tuma|nitume|nitumie|weka|niweke|toa|nitoe)\b[^.!?]{0,40}\b(?:ili|kupata|nipate|nipewe|kupewa|niajiriwe)\b[^.!?]{0,30}\b(?:kazi|mkopo|zawadi|visa|ajira|nafasi|tiketi|kibali)\b`),
  new RegExp(String.raw`\b(?:mwajiri|wakala|kampuni|ajenti|mtu|wanataka|anataka|wanadai|anadai|wanaomba|anaomba|ananitaka|wananitaka|wananiomba|ananiomba)\b[^.!?]{0,50}\b(?:ada|pesa|malipo|kulipa|nilipe|nitume|nitumie|\d{3,}|elfu)\b[^.!?]{0,60}\b(?:kazi|ajira|nje ya nchi|ughaibuni|visa|mkopo|kwanza|mapema)\b`),
  new RegExp(String.raw`\bada ya (?:usajili|kuajiriwa|kazi|visa|mahojiano|kusindika)\b`)
];

const ID_ITEM = String.raw`(?:id|id card|national id|id number|passport|passport copy|copy of my id|photo of my id|picture of my id|kra pin|identity card|selfie|bank statement|certificates?)`;
const STRANGER = String.raw`(?:recruiter|recruitment|employer|agent|agency|stranger|someone|man|woman|person|online|whatsapp|telegram|facebook|instagram|unknown number|company)`;
const IDENTITY = [
  new RegExp(String.raw`\b${STRANGER}\b[^.!?]{0,30}\b${ASKER}\b[^.!?]{0,40}\b(?:my|a|the)\b[^.!?]{0,12}\b${ID_ITEM}\b`),
  new RegExp(String.raw`\b(?:send|share|give|email|whatsapp|text|post|upload|forward)\b[^.!?]{0,30}\b(?:my|a|the)\b[^.!?]{0,15}\b${ID_ITEM}\b[^.!?]{0,40}\b(?:to|with)\b[^.!?]{0,30}\b${STRANGER}\b`),
  new RegExp(String.raw`\b(?:should i|can i|do i|is it safe to|is it ok to|is it okay to)\b[^.!?]{0,20}\b(?:send|share|give|email|whatsapp)\b[^.!?]{0,30}\b(?:my )?${ID_ITEM}\b[^.!?]{0,40}\b${STRANGER}\b`)
];
const IDENTITY_SW = [
  new RegExp(String.raw`\b(?:mwajiri|wakala|ajenti|mtu|mgeni|kampuni)\b[^.!?]{0,40}\b(?:anataka|wanataka|ananiomba|wananiomba|ameomba|anadai)\b[^.!?]{0,30}\b(?:kitambulisho|pasipoti|picha ya kitambulisho|nakala ya kitambulisho)\b`),
  new RegExp(String.raw`\b(?:nimtumie|nimtumie|nimpe|niwatumie|nimtumie|nitume)\b[^.!?]{0,30}\b(?:kitambulisho|pasipoti)\b[^.!?]{0,30}\b(?:mwajiri|wakala|ajenti|mtu|mgeni)\b`)
];

const REPLIES = Object.freeze({
  en: {
    credential: "Please be careful: this sounds like a scam. Never share your PIN, password or one-time code with anyone, including a recruiter, your bank or Safaricom. They never ask for it, and I will never ask for it either. A real employer does not ask you to pay to get a job, a loan or a prize, so do not send money or your ID to someone you have not checked. I have not sent or saved anything. If someone is pressing you, stop replying and tell someone you trust. You can report it to the police or to the platform where you saw it.",
    fee: "Please be careful: this sounds like a scam. A real employer or agency does not ask you to pay money to get a job, a visa, a loan or a prize, and the money you send is usually not returned. Do not send money, your ID or your PIN, password or one-time code. I have not sent or saved anything. Before you do anything, check the company with someone you trust, and report it to the police or to the platform where you saw it.",
    identity: "Please be careful with your ID. Only send a copy of your ID or passport to an employer you have checked is real, never to a stranger or an unknown number, and never together with money or your PIN. A real employer does not ask you to pay to get a job. Never share your PIN, password or one-time code. I have not sent or saved anything. If it feels wrong, stop replying and tell someone you trust, or report it to the police."
  },
  sw: {
    credential: "Tafadhali kuwa mwangalifu: hii inaonekana kama utapeli. Usimpe mtu yeyote PIN yako, nenosiri lako wala msimbo wa mara moja, hata akiwa mwajiri, benki au Safaricom. Hawaombi kamwe, na mimi pia sitaomba. Mwajiri wa kweli hakuombi pesa ili ukupe kazi, mkopo au zawadi, kwa hiyo usitume pesa wala kitambulisho chako kwa mtu ambaye hujamthibitisha. Sijatuma wala kuhifadhi chochote. Kama mtu anakulazimisha, acha kujibu na umwambie mtu unayemwamini. Unaweza kuripoti kwa polisi au kwenye jukwaa ulipoona hilo.",
    fee: "Tafadhali kuwa mwangalifu: hii inaonekana kama utapeli. Mwajiri au wakala wa kweli hakuombi pesa ili upate kazi, visa, mkopo au zawadi, na pesa unazotuma mara nyingi hazirudishwi. Usitume pesa, kitambulisho chako, wala PIN, nenosiri au msimbo wa mara moja. Sijatuma wala kuhifadhi chochote. Kabla ya kufanya lolote, mthibitishe huyo mwajiri na mtu unayemwamini, na uripoti kwa polisi au kwenye jukwaa ulipoona hilo.",
    identity: "Tafadhali kuwa mwangalifu na kitambulisho chako. Tuma nakala ya kitambulisho au pasipoti kwa mwajiri uliyemthibitisha tu, usimtumie mgeni wala namba usiyoijua, na usikitume pamoja na pesa au PIN yako. Mwajiri wa kweli hakuombi pesa ili upate kazi. Usishiriki PIN, nenosiri wala msimbo wa mara moja. Sijatuma wala kuhifadhi chochote. Kama inaonekana si sawa, acha kujibu na umwambie mtu unayemwamini, au uripoti kwa polisi."
  },
  ha: {
      credential: "Don Allah ka yi hankali: wannan yana kama da zamba. Kada ka taɓa ba kowa PIN ɗinka, kalmar sirri ko lambar sau ɗaya, har da mai ɗaukar ma'aikata, bankinka ko Safaricom. Ba sa taɓa neman ta, ni ma ba zan taɓa nemanta ba. Mai ɗaukar aiki na gaskiya ba ya neman ka biya kuɗi don samun aiki, bashi ko kyauta, don haka kada ka aika kuɗi ko katin shaidarka ga wanda ba ka bincika ba. Ban aika ko ajiye komai ba. Idan wani yana matsa maka, ka daina ba shi amsa, ka faɗa wa wanda ka amince da shi. Za ka iya kai rahoto ga 'yan sanda ko ga dandalin da ka gan shi.",
      fee: "Don Allah ka yi hankali: wannan yana kama da zamba. Mai ɗaukar aiki ko hukuma na gaskiya ba ya neman ka biya kuɗi don samun aiki, biza, bashi ko kyauta, kuma kuɗin da ka aika yawanci ba a dawo da shi. Kada ka aika kuɗi, katin shaidarka ko PIN ɗinka, kalmar sirri ko lambar sau ɗaya. Ban aika ko ajiye komai ba. Kafin ka yi komai, ka bincika kamfanin tare da wanda ka amince da shi, ka kuma kai rahoto ga 'yan sanda ko ga dandalin da ka gan shi.",
      identity: "Don Allah ka kula da katin shaidarka. Ka aika kwafin katin shaidarka ko fasfo kawai ga mai ɗaukar aiki da ka tabbatar na gaskiya ne, kada ka taɓa aikawa ga baƙo ko lambar da ba ka sani ba, kuma kada ka taɓa aikawa tare da kuɗi ko PIN ɗinka. Mai ɗaukar aiki na gaskiya ba ya neman ka biya don samun aiki. Kada ka taɓa ba kowa PIN ɗinka, kalmar sirri ko lambar sau ɗaya. Ban aika ko ajiye komai ba. Idan ka ji ba daidai ba ne, ka daina ba da amsa ka faɗa wa wanda ka amince da shi, ko ka kai rahoto ga 'yan sanda."
    },
  am: {
      credential: "እባክዎ ይጠንቀቁ፤ ይህ ማጭበርበር ይመስላል። የእርስዎን PIN፣ የይለፍ ቃል ወይም የአንድ ጊዜ ኮድ ለማንም አያጋሩ፤ ቀጣሪ፣ ባንክዎ ወይም Safaricom ቢሆንም። እነሱ በፍጹም አይጠይቁም፤ እኔም በፍጹም አልጠይቅም። እውነተኛ ቀጣሪ ሥራ፣ ብድር ወይም ሽልማት ለማግኘት ገንዘብ እንዲከፍሉ አይጠይቅም፤ ስለዚህ ላላረጋገጡት ሰው ገንዘብ ወይም መታወቂያዎን አይላኩ። እኔ ምንም ነገር አልላክሁም፣ አላስቀመጥኩምም። አንድ ሰው ቢያስገድድዎ፣ መመለስ ያቁሙ እና ለሚያምኑት ሰው ይንገሩ። ለፖሊስ ወይም ባዩበት መድረክ ሪፖርት ማድረግ ይችላሉ።",
      fee: "እባክዎ ይጠንቀቁ፤ ይህ ማጭበርበር ይመስላል። እውነተኛ ቀጣሪ ወይም ኤጀንሲ ሥራ፣ ቪዛ፣ ብድር ወይም ሽልማት ለማግኘት ገንዘብ እንዲከፍሉ አይጠይቅም፤ የላኩት ገንዘብም ብዙ ጊዜ አይመለስም። ገንዘብ፣ መታወቂያዎን ወይም PIN፣ የይለፍ ቃል ወይም የአንድ ጊዜ ኮድ አይላኩ። እኔ ምንም ነገር አልላክሁም፣ አላስቀመጥኩምም። ምንም ከማድረግዎ በፊት ድርጅቱን ከሚያምኑት ሰው ጋር ያረጋግጡ፣ እና ለፖሊስ ወይም ባዩበት መድረክ ሪፖርት ያድርጉ።",
      identity: "እባክዎ በመታወቂያዎ ይጠንቀቁ። የመታወቂያዎን ወይም የፓስፖርትዎን ቅጂ እውነተኛ መሆኑን ላረጋገጡት ቀጣሪ ብቻ ይላኩ፤ ለማያውቁት ሰው ወይም ቁጥር በፍጹም አይላኩ፤ ከገንዘብ ወይም ከPIN ጋርም በፍጹም አይላኩ። እውነተኛ ቀጣሪ ሥራ ለማግኘት ገንዘብ እንዲከፍሉ አይጠይቅም። የእርስዎን PIN፣ የይለፍ ቃል ወይም የአንድ ጊዜ ኮድ በፍጹም አያጋሩ። እኔ ምንም ነገር አልላክሁም፣ አላስቀመጥኩምም። ትክክል ካልመሰለዎት፣ መመለስ ያቁሙ እና ለሚያምኑት ሰው ይንገሩ፣ ወይም ለፖሊስ ሪፖርት ያድርጉ።"
    },
  yo: {
      credential: "Ẹ jọ̀wọ́ ẹ ṣọ́ra: èyí dàbí jìbìtì. Ẹ má ṣe fi PIN yín, ọ̀rọ̀ aṣínà tàbí kóòdù ẹ̀ẹ̀kan hàn ẹnikẹ́ni, títí kan ẹni tó ń gba òṣìṣẹ́, báǹkì yín tàbí Safaricom. Wọn kì í béèrè fún un rárá, èmi náà kò ní béèrè fún un láé. Agbanisíṣẹ́ tòótọ́ kì í ní kí ẹ sanwó láti rí iṣẹ́, owó-yá tàbí ẹ̀bùn, nítorí náà ẹ má ṣe fi owó tàbí káàdì ìdánimọ̀ yín ránṣẹ́ sí ẹni tí ẹ kò tíì ṣàyẹ̀wò. Èmi kò fi nǹkan kan ránṣẹ́, bẹ́ẹ̀ ni n kò fi nǹkan pamọ́. Bí ẹnìkan bá ń fúngun mọ́ yín, ẹ dákẹ́ ìdáhùn kí ẹ sì sọ fún ẹni tí ẹ gbẹ́kẹ̀lé. Ẹ lè fi ẹjọ́ sùn sí ọlọ́pàá tàbí sí ibi tí ẹ ti rí i.",
      fee: "Ẹ jọ̀wọ́ ẹ ṣọ́ra: èyí dàbí jìbìtì. Agbanisíṣẹ́ tàbí àjọ tòótọ́ kì í ní kí ẹ sanwó láti rí iṣẹ́, físà, owó-yá tàbí ẹ̀bùn, owó tí ẹ bá sì fi ránṣẹ́ kì í sábà padà. Ẹ má ṣe fi owó, káàdì ìdánimọ̀ yín tàbí PIN, ọ̀rọ̀ aṣínà tàbí kóòdù ẹ̀ẹ̀kan ránṣẹ́. Èmi kò fi nǹkan kan ránṣẹ́, bẹ́ẹ̀ ni n kò fi nǹkan pamọ́. Kí ẹ tó ṣe ohunkóhun, ẹ ṣàyẹ̀wò ilé iṣẹ́ náà pẹ̀lú ẹni tí ẹ gbẹ́kẹ̀lé, kí ẹ sì fi ẹjọ́ sùn sí ọlọ́pàá tàbí sí ibi tí ẹ ti rí i.",
      identity: "Ẹ jọ̀wọ́ ẹ ṣọ́ra pẹ̀lú káàdì ìdánimọ̀ yín. Ẹ fi ẹ̀dà káàdì ìdánimọ̀ tàbí ìwé ìrìnnà yín ránṣẹ́ sí agbanisíṣẹ́ tí ẹ ti mọ̀ dájú pé ó jẹ́ tòótọ́ nìkan; ẹ má ṣe fi ránṣẹ́ sí àjèjì tàbí nọ́mbà tí ẹ kò mọ̀ rárá, ẹ má sì ṣe fi ránṣẹ́ pẹ̀lú owó tàbí PIN yín láé. Agbanisíṣẹ́ tòótọ́ kì í ní kí ẹ sanwó láti rí iṣẹ́. Ẹ má ṣe fi PIN, ọ̀rọ̀ aṣínà tàbí kóòdù ẹ̀ẹ̀kan yín hàn ẹnikẹ́ni. Èmi kò fi nǹkan kan ránṣẹ́, bẹ́ẹ̀ ni n kò fi nǹkan pamọ́. Bí kò bá dà bí ẹni pé ó tọ́, ẹ dákẹ́ ìdáhùn kí ẹ sì sọ fún ẹni tí ẹ gbẹ́kẹ̀lé, tàbí kí ẹ fi ẹjọ́ sùn sí ọlọ́pàá."
    },
  ig: {
      credential: "Biko kpachara anya: nke a dị ka aghụghọ. Egosila onye ọ bụla PIN gị, okwuntughe gị ma ọ bụ koodu otu ugboro, gụnyere onye na-achọ ndị ọrụ, ụlọ akụ gị ma ọ bụ Safaricom. Ha anaghị arịọ ya, mụ onwe m agaghị arịọ ya. Ezigbo onye were ọrụ anaghị arịọ gị ka ị kwụọ ụgwọ iji nweta ọrụ, mbinye ego ma ọ bụ onyinye, ya mere ezitela ego ma ọ bụ akwụkwọ njirimara gị nye onye ị na-enyochabeghị. Ezighị m ma ọ bụ chekwaa ihe ọ bụla. Ọ bụrụ na mmadụ na-amanye gị, kwụsị ịza ya ma gwa onye ị tụkwasịrị obi. Ị nwere ike ịkọ ya ndị uwe ojii ma ọ bụ ebe ị hụrụ ya.",
      fee: "Biko kpachara anya: nke a dị ka aghụghọ. Ezigbo onye were ọrụ ma ọ bụ ụlọ ọrụ anaghị arịọ gị ka ị kwụọ ego iji nweta ọrụ, visa, mbinye ego ma ọ bụ onyinye, a naghịkwa eweghachi ego ị zitere. Ezitela ego, akwụkwọ njirimara gị ma ọ bụ PIN, okwuntughe ma ọ bụ koodu otu ugboro. Ezighị m ma ọ bụ chekwaa ihe ọ bụla. Tupu ị mee ihe ọ bụla, lelee ụlọ ọrụ ahụ na onye ị tụkwasịrị obi, ma kọọ ya ndị uwe ojii ma ọ bụ ebe ị hụrụ ya.",
      identity: "Biko kpachara anya na akwụkwọ njirimara gị. Zipu mbipụta akwụkwọ njirimara gị ma ọ bụ paspọtụ naanị nye onye were ọrụ ị nyochara na ọ bụ eziokwu, ọ bụghị nye onye ọbịa ma ọ bụ nọmba ị na-amaghị, ọ bụghịkwa ya na ego ma ọ bụ PIN gị. Ezigbo onye were ọrụ anaghị arịọ gị ka ị kwụọ ụgwọ iji nweta ọrụ. Egosila onye ọ bụla PIN gị, okwuntughe ma ọ bụ koodu otu ugboro. Ezighị m ma ọ bụ chekwaa ihe ọ bụla. Ọ bụrụ na ọ dịghị gị mma, kwụsị ịza ya ma gwa onye ị tụkwasịrị obi, ma ọ bụ kọọ ya ndị uwe ojii."
    }
});

const isSwahili = text => SWAHILI_WORDS.test(clean(text));

// -> { kind: "scam-credential" | "scam-fee" | "scam-identity", reply } or null
function scamGuardReply(text) {
  const t = clean(text);
  if (!t || t.length > 500) return null;
  // The plain cases the safety rules already know ("someone called asking for my PIN", "I won a prize, send money to claim it") keep their existing wording (nexus/companion/safety.js "safety.scam").
  if (crisisPhrases.scam(text)) return null;
  const lang = isSwahili(t) ? "sw" : "en";
  const replies = REPLIES[lang];
  // Plain "how do I change my pin" or "I forgot my password" are ordinary questions and match none of these.
  if (CREDENTIAL.some(pattern => pattern.test(t)) || CREDENTIAL_SW.some(pattern => pattern.test(t))) return { kind: "scam-credential", reply: replies.credential, language: lang };
  if (FEE.some(pattern => pattern.test(t)) || FEE_SW.some(pattern => pattern.test(t))) return { kind: "scam-fee", reply: replies.fee, language: lang };
  if (IDENTITY.some(pattern => pattern.test(t)) || IDENTITY_SW.some(pattern => pattern.test(t))) return { kind: "scam-identity", reply: replies.identity, language: lang };
  return null;
}

module.exports = Object.freeze({ scamGuardReply, REPLIES, isSwahili });
