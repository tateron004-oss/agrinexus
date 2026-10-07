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
