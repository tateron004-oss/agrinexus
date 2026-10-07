"use strict";

// The older "floor" router (server.js runAgentCommand and what it calls) matches loose keywords to demo workflows on seeded demo data (a Robusta coffee lot in the DRC, a "Field Operations Agent"
// role, a "Digital Foundations" course) and then says "Done". The user-journey sweep found a real person's QUESTION or STATEMENT creating orders ("what is the price of maize" -> "Created
// AN-ORD-AGENT-023 market review for Robusta Coffee Cooperative Lot"), staging a payment with no amount or recipient, issuing a certificate nobody studied for, enrolling people who only asked what
// courses exist, and moving a job application backwards. This file holds the pure reading of what a person actually asked for, so the router can answer the read-only and refusal cases plainly and
// run a state-changing demo tool only for an explicit, unambiguous request. Kiswahili lines were written for this change and need a fluent-speaker review.
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/[?!.,;:]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase();

const SWAHILI_WORDS = /\b(?:tuma|nitume|nitumie|nimepokea|nimeuza|nimelipa|nimemlipa|nimepata|lipa|nilipe|toa|nitoe|elfu|kwa|salio|akaunti|kazi|kozi|cheti|vyeti|mkopo|nataka|naomba|nionyeshe|onyesha|ombi|maombi|mimi|yangu|wangu|ndiyo|hapana|tafadhali|habari|fedha|malipo|mauzo|gani|ngapi|nina|sasa|hii|huu|mpigie|hifadhi|namba|mnunuzi|mahindi)\b/;
const isSwahili = text => SWAHILI_WORDS.test(clean(text));
const languageOf = (text, fallback = "en") => (isSwahili(text) ? "sw" : (fallback === "sw" && !/\b(?:the|my|what|how|send|show|give|please|jobs?|course|certificate)\b/.test(clean(text)) ? "sw" : "en"));

// ------------------------------------------------------------------ money
const MONEY_WORDS = String.raw`(?:m-?pesa|mpesa|wallet|bank|airtel(?: money)?|t-?kash|mobile money|paybill|till|pesa|salio|akaunti|account)`;
// Things people count, so that "send 50 bags to Nairobi" or "pay attention to 5 things" is not read as an amount of money.
const COUNTED = String.raw`(?:bags?|sacks?|kgs?|kilos?|kilograms?|crates?|boxes|cartons?|pieces?|tonnes?|tons?|litres?|liters?|trees|seedlings|chickens?|goats?|cows?|eggs?|people|persons|items|units|packets?|bundles?|bunches|buckets?|plots?|acres?|hectares?|days?|weeks?|months?|years?|hours?|minutes?|km|metres?|meters?|percent|%|things|reasons|examples|times)`;
const AMOUNT = String.raw`(?:(?:ksh|kes|sh|shs|ngn|usd|\$|₦)\.?\s*)?\d[\d, ]*(?:k|000)?(?!\d)(?!\s*${COUNTED}(?![a-z]))|elfu\s+\w+|laki\s+\w+|\w+\s+thousand`;
const BALANCE = [
  new RegExp(String.raw`\b(?:balance|how much (?:money )?(?:do i have|have i got|is (?:in|on) my)|what(?:'s| is) in my)\b[^.!?]{0,40}\b${MONEY_WORDS}\b|\b${MONEY_WORDS}\b[^.!?]{0,30}\b(?:balance|how much)\b|\bmy balance\b|\bcheck (?:my )?balance\b`),
  /\bsalio\b|\bnina pesa ngapi\b|\bpesa zangu ngapi\b|\bnina kiasi gani\b/
];
// "send 5000 to John on mpesa", "withdraw 10000 from my wallet", "pay Mama Njeri 2000", "make a payment", "tuma elfu mbili kwa Juma"
const SEND = [
  new RegExp(String.raw`\b(?:send|transfer|wire|remit|top ?up|deposit)\b[^.!?]{0,50}(?:${AMOUNT})[^.!?]{0,60}\b(?:to|into|via|on|through|by|using)\b`),
  new RegExp(String.raw`\b(?:send|transfer|wire|remit|pay)\b[^.!?]{0,30}\b(?:money|cash|funds|payment|airtime|mpesa|m-pesa)\b`),
  new RegExp(String.raw`\b(?:send|transfer|pay|wire|remit)\b[^.!?]{0,40}\b(?:via|on|through|by|with|using|from|into|to)\b[^.!?]{0,20}\b${MONEY_WORDS}\b`),
  new RegExp(String.raw`\b(?:withdraw|cash ?out|take out|draw)\b[^.!?]{0,40}(?:${AMOUNT}|\b${MONEY_WORDS}\b|\bmoney\b|\bcash\b)`),
  new RegExp(String.raw`\b(?:pay|paying)\b[^.!?]{0,30}(?:${AMOUNT})[^.!?]{0,40}\b(?:to|on|via|through|with|using)\b`),
  new RegExp(String.raw`\bpay\b[^.!?]{0,30}(?:${AMOUNT})\b`),
  /\b(?:make|do|process|submit|complete|initiate|start|create)\b[^.!?]{0,15}\b(?:a |the |my |this )?(?:payment|checkout|transfer|payout)\b|\bpay now\b|\bpay (?:the )?(?:seller|supplier|driver|buyer|farmer|worker|workers|staff|landlord|school)\b/,
  /\b(?:tuma|nitume|nitumie|tumia|lipa|nilipe|nimlipe|toa|nitoe|hamisha|nihamishie)\b[^.!?]{0,60}(?:\d|elfu|laki|pesa|mpesa|m-pesa)/,
  new RegExp(String.raw`\b(?:post|settle|release)\b[^.!?]{0,20}\b(?:the )?(?:payment|payout|settlement)\b`)
];
// "nimepokea elfu tano kwa mpesa kutoka kwa Otieno", "sold 1 goat 12000 cash and 3 chickens 4500 mpesa", "received 3000 on mpesa from Anna", "Anna paid me 3000"
const MONEY_IN = [
  new RegExp(String.raw`\b(?:received|got|have received|just received|was paid|have been paid|earned|collected|nimepokea|nimepata|nimelipwa|nilipokea|nilipata|nimeletewa|nimetumiwa|nimeingiziwa|ametuma|wametuma|amelipa|wamelipa|alinilipa|walinilipa|alinitumia|walinitumia)\b[^.!?]{0,50}(?:${AMOUNT}|\b${MONEY_WORDS}\b)`),
  /\b\w+\s+(?:paid|sent|gave)\s+me\b/,
  new RegExp(String.raw`\b(?:i |we )?(?:paid|have paid|sent|have sent|gave|nimemlipa|nimelipa|nimetuma|nilimlipa|nilimtumia|tumelipa)\b[^.!?]{0,40}(?:${AMOUNT})`),
  new RegExp(String.raw`\b(?:i |we )?(?:sold|nimeuza|tumeuza|niliuza|tuliuza|nimenunua|bought)\b[^.!?]{0,80}(?:\d|elfu|laki)`)
];

// -> "balance" | "send" | "record" | null
function moneyRequest(text) {
  const t = clean(text);
  if (!t || t.length > 300) return null;
  if (/\bpay(?:ing)? (?:attention|respect|heed|a visit|tribute|homage|a compliment)\b/.test(t)) return null;
  // "remind me tomorrow at 9 to pay the school fees" asks for a reminder, not for a payment to be made: the reminder toolkit answers it.
  if (/\b(?:remind me|reminder (?:to|about|for)|set (?:a|an) reminder|nikumbushe|nikumbusha|niwekee kikumbusho)\b/.test(t)) return null;
  // "tuma ujumbe kwa +254... hello" is a text message (staged behind a yes elsewhere), not a request to send money.
  if (/\btuma (?:ujumbe|sms|meseji)\b/.test(t)) return null;
  if (BALANCE.some(pattern => pattern.test(t))) return "balance";
  // A receipt or a sale is something that already happened; it is not a request to move money, even when it names mpesa or "pay" in a past tense.
  if (MONEY_IN.some(pattern => pattern.test(t)) && !/^(?:please )?(?:send|transfer|withdraw|pay|tuma)\b/.test(t)) return "record";
  if (SEND.some(pattern => pattern.test(t))) return "send";
  return null;
}

const MONEY_REPLIES = Object.freeze({
  en: {
    balance: "I can't see your M-Pesa, bank or wallet balance, so I won't guess it. Please check it in your M-Pesa or bank app. Nothing was sent or changed.",
    send: "I can't send money for you. Please use your M-Pesa or bank app to send it. I can record it for you: say \"paid John 5000\". Nothing was sent or saved.",
    record: "I couldn't save that one just now, and no money moved. Try saying it simply, like \"sold 3 chickens for 4500\" or \"received 5000 from Otieno\", and I will record it."
  },
  sw: {
    balance: "Siwezi kuona salio lako la M-Pesa, benki au pochi, kwa hiyo sitakisia. Tafadhali liangalie kwenye programu yako ya M-Pesa au benki. Hakuna kilichotumwa wala kubadilishwa.",
    send: "Siwezi kutuma pesa kwa niaba yako. Tafadhali tumia programu yako ya M-Pesa au benki kuzituma. Naweza kuiandika kumbukumbu: sema \"nimemlipa Juma 5000\". Hakuna kilichotumwa wala kuhifadhiwa.",
    record: "Sikuweza kuhifadhi hilo sasa hivi, na hakuna pesa iliyosogezwa. Jaribu kusema kwa urahisi, kama \"nimeuza kuku watatu kwa 4500\" au \"nimepokea 5000 kutoka kwa Otieno\", nami nitaandika."
  }
});

// ------------------------------------------------------------------ text messages
// "send an sms to +254... saying hello", "text John that his order is ready": Kyro does not send text messages from the older router, and a phone number in the sentence must not turn it into a phone
// call ("Do you want me to call +254... now?"). Messages to a buyer, seller or customer have their own confirmation step and are left to it.
function smsRequest(text) {
  const t = clean(text);
  if (!t || t.length > 300) return false;
  if (/\b(?:call|phone|dial|ring|whatsapp|email|mail|buyer|seller|customer|doctor|nurse|clinic|provider|reminder|remind)\b/.test(t)) return false;
  return /\b(?:send|write|compose)\b[^.!?]{0,15}\b(?:an? )?(?:sms|text message|text)\b[^.!?]{0,30}\bto\b/.test(t)
    || /^(?:please )?text (?!me\b|message\b)[a-z+0-9]/.test(t)
    || /\b(?:tuma|nitumie)\b[^.!?]{0,15}\b(?:sms|ujumbe mfupi)\b/.test(t);
}
const SMS_REPLIES = Object.freeze({
  en: "I can't send text messages for you from here, and I won't turn it into a phone call. Nothing was sent. You can send it from your phone's messages app.",
  sw: "Siwezi kutuma ujumbe mfupi kwa niaba yako kutoka hapa, na sitaubadilisha kuwa simu. Hakuna kilichotumwa. Unaweza kuutuma kupitia programu ya ujumbe ya simu yako."
});

// ------------------------------------------------------------------ certificates, courses, applications, jobs
const CERT = /\b(?:certificates?|cheti|vyeti)\b/;
// A certificate that is not a course certificate at all ("certificate of origin", "birth certificate"): the learning tools must never touch these.
const OTHER_CERT = /\b(?:origin|export|import|phyto\w*|birth|death|marriage|vaccin\w*|immuni[sz]ation|medical|health|organic|fumigation|incorporation|compliance|registration|title|insurance|gift|share|quality|inspection|good conduct|clearance|baptism|sick leave)\s+(?:certificates?|certs?)\b|\b(?:certificate|cert) of (?:origin|incorporation|compliance|good conduct|registration|quality|inspection|insurance|baptism|birth|death|marriage|clearance)\b/;
const ISSUE_VERB = /\b(?:give|issue|get|generate|print|make|create|want|need|send|download|produce|prepare|award|nipe|nipatie|toa|nitolee|nataka|naomba)\b/;
const READ_VERB = /\b(?:show|list|see|view|display|open|check|read|do i have|have i got|have i earned|how many|what|which|where|nionyeshe|onyesha|orodhesha)\b/;
const LOST_CERT = /\b(?:stolen|lost|misplaced|damaged|burnt|burned|torn|replace(?:ment)?|duplicate|reprint|replacement|copy of|copies of|imepotea|kimeibiwa|nimepoteza|imeibiwa|nakala)\b/;

// -> { kind } or null.  kinds: certificate-lost | certificate-list | certificate-issue | jobs-question
function certificateRequest(text) {
  const t = clean(text);
  if (!t || t.length > 300 || !CERT.test(t) || OTHER_CERT.test(t)) return null;
  if (LOST_CERT.test(t)) return { kind: "certificate-lost" };
  // "what jobs can I do with a form four certificate": a question about work, not a request for a certificate.
  if (/\b(?:jobs?|work|career|careers|employment|kazi|vacanc\w+)\b/.test(t) && /\b(?:what|which|can i|could i|do with|good for|qualif\w+|nini|gani|naweza)\b/.test(t) && !/\b(?:give me my|issue my|issue me|get my|generate my)\b/.test(t)) return { kind: "jobs-question" };
  if (ISSUE_VERB.test(t) && !READ_VERB.test(t.replace(/\bwhat i\b/, ""))) return { kind: "certificate-issue" };
  if (/\b(?:give me|issue me|issue my|get my|get me|generate my|print my|nipe)\b/.test(t)) return { kind: "certificate-issue" };
  return { kind: "certificate-list" };
}

// -> { kind } or null.  kinds: complete-lesson | quiz | courses-list | progress | lesson-language
function learningRequest(text) {
  const t = clean(text);
  if (!t || t.length > 300) return null;
  if (/^(?:please )?how far am i(?: in (?:my )?(?:course|courses|learning|training|lessons?|studies))?$/.test(t)) return { kind: "progress" };
  const learningWord = /\b(?:course|courses|lesson|lessons|module|modules|training|learning|class|classes|quiz|kozi|somo|masomo|mafunzo)\b/.test(t);
  if (!learningWord) return null;
  // Read-only: what exists, how far along, how many are done.
  if (/\b(?:change|switch|set|make|put|turn|translate)\b[^.!?]{0,25}\b(?:lessons?|courses?|learning|training|masomo|mafunzo)\b[^.!?]{0,25}\b(?:swahili|kiswahili|english|french|arabic|spanish|kingereza)\b/.test(t)) return { kind: "lesson-language" };
  if (/\b(?:enrol+|enroll|sign me up|register me)\b/.test(t) || /\b(?:start|begin|continue|resume|open|go on with|carry on with|proceed with|anza|endelea)\b[^.!?]{0,25}\b(?:my |the |a |an |our )?(?:course|training|lesson|learning|class|path|kozi)\b/.test(t) || /\b(?:training|learning) path\b/.test(t)) return null;
  if (/\b(?:complete|finish|mark|tick|done with|pass|skip)\b[^.!?]{0,20}\b(?:my |the |this |next )?(?:lesson|module|course step|course|training)\b|\bnext lesson\b|\bmaliza somo\b/.test(t)) return { kind: "complete-lesson" };
  if (/\b(?:take|do|start|begin|give me|complete|finish|pass|attempt|nipe)\b[^.!?]{0,15}\b(?:a |the |my |this )?(?:quiz|test|exam)\b|\bquiz me\b/.test(t) && /\bquiz\b/.test(t) || /\b(?:take|do|complete|finish|pass)\b[^.!?]{0,15}\b(?:course |lesson |learning )(?:test|exam)\b/.test(t)) return { kind: "quiz" };
  if (/\bhow far am i\b|\bhow far have i (?:gone|got|come)\b|\bmy (?:learning |course |training )?progress\b|\bhow (?:am i|is my) (?:doing|going|progress\w*)\b[^.!?]{0,20}\b(?:course|learning|training|lessons?)\b|\bhow many (?:courses?|lessons?|modules?)\b|\b(?:courses?|lessons?|modules?) (?:have i|did i|i have|i've) (?:finished|completed|done|taken)\b|\bwhat have i (?:finished|completed|learned|studied)\b|\bhow much (?:have i|did i) (?:learn|study|studied|learned|finished|completed)\b/.test(t)) return { kind: "progress" };
  if (/\b(?:what|which|show|list|any|tell me|are there|do you have|do you offer|available|catalog|catalogue|options|nionyeshe|kuna)\b[^.!?]{0,30}\b(?:courses?|trainings?|lessons?|classes|kozi)\b|\b(?:courses?|trainings?) (?:do you|are|is|available|on offer|can i)\b|\bcourse (?:catalog|catalogue|list)\b/.test(t)) return { kind: "courses-list" };
  return null;
}

// -> { kind } or null.  kinds: applications-list | application-withdraw | jobs-question | apply
function workRequest(text) {
  const t = clean(text);
  if (!t || t.length > 300) return null;
  if (/\b(?:withdraw|cancel|delete|remove|retract|take back|pull out of|ondoa|futa)\b[^.!?]{0,25}\b(?:my |the |an? )?(?:applications?|applied|ombi|maombi)\b/.test(t)) return { kind: "application-withdraw" };
  // "What jobs can I apply for in Kenya?" asks about jobs; it is not an application.
  const asksQuestion = /\b(?:what|which|where|how|who|why|when)\b|\b(?:can|could|should|may|do|does|am|is|are)\s+(?:i|we|there|you)\b|\bany\b/.test(t);
  if (!asksQuestion && /\bapply\b[^.!?]{0,60}\b(?:job|jobs|role|roles|position|post|vacancy|work|opening|workforce|at|as|for|to)\b|\bapplication for\b|\bsubmit (?:my |an |the )?(?:job )?(?:application|cv)\b|\bnituma ombi\b|\bomba kazi\b/.test(t) && !/\b(?:show|list|status|see|view|check|have i applied)\b/.test(t)) return { kind: "apply" };
  if (/\b(?:show|list|see|view|check|display|what|which|where|how many|status of|status for|how are|how is|any|nionyeshe|onyesha)\b[^.!?]{0,30}\b(?:my |the )?(?:applications?|applied|ombi|maombi)\b|\bmy applications?\b|\bhave i applied\b|\bapplication status\b|\bstatus of my application\b|\bwhere (?:is|are) my application/.test(t)) return { kind: "applications-list" };
  const jobWord = /\b(?:jobs?|vacanc(?:y|ies)|employment|openings?|kazi|ajira)\b/.test(t);
  const mutating = /\b(?:match me|match role|match my|find me (?:a |an |the )?(?:job|role|position|work)|readiness gap|verify (?:my )?profile|build (?:my )?profile)\b/.test(t);
  if (jobWord && !mutating && !/\b(?:schedule|book|prepare|mentor|shift|interview)\b/.test(t)) return { kind: "jobs-question" };
  return null;
}

const COURSE_REPLIES = Object.freeze({
  en: {
    lessonLanguage: "I can't change the language of the lessons by themselves. I can change the language I speak with you: say \"change language to Kiswahili\". Nothing was changed.",
    completeLesson: "Lessons are completed by going through them in the Learning section, so I can't mark one as done for you. Say \"continue my course\" to open your course. Nothing was changed.",
    quiz: "The quiz is taken in the Learning section after the lessons, so I can't pass it for you. Say \"continue my course\" to open your course. Nothing was changed.",
    noCourses: "I don't have any courses to show right now.",
    noProgress: "You haven't started a course yet. Say \"continue my course\" to start one.",
    certificateNotYet: "You haven't finished a course yet, so there is no certificate to give you. Say \"continue my course\" to carry on with your learning. Nothing was issued.",
    certificateNeedQuiz: "You have been through the lessons of {course}, but a quiz result is still missing, so I can't issue the certificate yet. Take the quiz in the Learning section. Nothing was issued.",
    certificateNeedLessons: "You haven't finished all the lessons of {course} yet ({done} of {total} done), so I can't issue the certificate. Say \"continue my course\" to carry on. Nothing was issued.",
    certificateLost: "I can't replace or re-issue a certificate from here. {list} For a copy of a certificate from a school, college or training centre, please ask the place that issued it. Nothing was changed.",
    certificateList: "{list}",
    jobsQuestion: "I can't tell which jobs suit your papers or age. These are the roles I can see: {roles}. Say \"match me to a role\" and I will check your readiness for them. Nothing was changed.",
    noRoles: "I don't have any roles to show right now.",
    applicationsNone: "You have no job applications on record yet.",
    withdraw: "I can't withdraw an application from here. Please contact the employer directly. {list} Nothing was changed.",
    applyWhich: "Which job do you want to apply for? The roles I can see are: {roles}. Say \"apply for\" and the role name. Nothing was submitted.",
    applyNotFound: "I can't find a role called \"{asked}\". The roles I can see are: {roles}. Nothing was submitted.",
    applyPrompt: "I can prepare your application for {role} ({country}). {practice} Do you want me to record it now? Say yes to continue or no to cancel.",
    practice: "This is a practice application: no employer has received it.",
    practiceLive: "I will send it through the connected hiring service."
  },
  sw: {
    lessonLanguage: "Siwezi kubadilisha lugha ya masomo peke yake. Naweza kubadilisha lugha ninayoongea nawe: sema \"badilisha lugha iwe Kiswahili\". Hakuna kilichobadilishwa.",
    completeLesson: "Masomo hukamilishwa kwa kuyapitia kwenye sehemu ya Kujifunza, kwa hiyo siwezi kuyaweka kama yamekamilika kwa niaba yako. Sema \"endelea na kozi yangu\" ili kufungua kozi yako. Hakuna kilichobadilishwa.",
    quiz: "Jaribio hufanywa kwenye sehemu ya Kujifunza baada ya masomo, kwa hiyo siwezi kulifaulu kwa niaba yako. Sema \"endelea na kozi yangu\" ili kufungua kozi yako. Hakuna kilichobadilishwa.",
    noCourses: "Sina kozi za kuonyesha sasa hivi.",
    noProgress: "Bado hujaanza kozi. Sema \"endelea na kozi yangu\" ili kuanza.",
    certificateNotYet: "Bado hujamaliza kozi, kwa hiyo hakuna cheti cha kukupa. Sema \"endelea na kozi yangu\" ili kuendelea kujifunza. Hakuna cheti kilichotolewa.",
    certificateNeedQuiz: "Umepitia masomo ya {course}, lakini matokeo ya jaribio bado hayapo, kwa hiyo siwezi kutoa cheti bado. Fanya jaribio kwenye sehemu ya Kujifunza. Hakuna cheti kilichotolewa.",
    certificateNeedLessons: "Bado hujamaliza masomo yote ya {course} (umemaliza {done} kati ya {total}), kwa hiyo siwezi kutoa cheti. Sema \"endelea na kozi yangu\" ili kuendelea. Hakuna cheti kilichotolewa.",
    certificateLost: "Siwezi kubadilisha wala kutoa upya cheti kutoka hapa. {list} Ili kupata nakala ya cheti kutoka shule, chuo au kituo cha mafunzo, tafadhali mwombe aliyekitoa. Hakuna kilichobadilishwa.",
    certificateList: "{list}",
    jobsQuestion: "Siwezi kusema ni kazi zipi zinazofaa vyeti au umri wako. Hizi ndizo nafasi ninazoziona: {roles}. Sema \"nilinganishe na nafasi\" nami nitaangalia utayari wako. Hakuna kilichobadilishwa.",
    noRoles: "Sina nafasi za kazi za kuonyesha sasa hivi.",
    applicationsNone: "Huna maombi ya kazi yaliyorekodiwa bado.",
    withdraw: "Siwezi kuondoa ombi kutoka hapa. Tafadhali wasiliana na mwajiri moja kwa moja. {list} Hakuna kilichobadilishwa.",
    applyWhich: "Unataka kuomba kazi gani? Nafasi ninazoziona ni: {roles}. Sema \"omba\" na jina la nafasi. Hakuna kilichowasilishwa.",
    applyNotFound: "Siwezi kupata nafasi inayoitwa \"{asked}\". Nafasi ninazoziona ni: {roles}. Hakuna kilichowasilishwa.",
    applyPrompt: "Naweza kuandaa ombi lako la {role} ({country}). {practice} Je, nirekodi sasa? Sema ndiyo kuendelea au hapana kughairi.",
    practice: "Hili ni ombi la mazoezi: hakuna mwajiri aliyelipokea.",
    practiceLive: "Nitalituma kupitia huduma ya ajira iliyounganishwa."
  }
});
const fill = (template, values = {}) => String(template).replace(/\{(\w+)\}/g, (_, key) => (values[key] === undefined ? "" : String(values[key])));

// ---------------------------------------------------------------- explicit tools
// A state-changing demo tool may run from the loose keyword router only when the person plainly asked for exactly that.
const EXPLICIT_TOOL = Object.freeze({
  "trade.market_review": /\b(?:market review|review (?:the |my |a )?(?:market|crop lot|crop order|market order)s?|(?:create|place|make|raise|open|submit|new|start)\s+(?:a |an |the |my )?(?:new )?(?:crop |buyer |market |trade )?order|(?:buyer|market|crop) orders?\b|sell my crops?|sell the crops?|sell (?:a )?crop lot)\b/,
  "trade.advance_order": /\b(?:advance|move|progress|update)\s+(?:the |my )?(?:crop |buyer |market |trade )?order\b|\blogistics handoff\b/,
  "drone.field_scan": /\b(?:drone scan|scan (?:my |the |a )?(?:field|farm|crop)s?|crop scan|field scan|run (?:a |the )?(?:drone|field|crop) scan|drone flyover)\b/,
  "drone.flight_plan": /\b(?:flight plan|drone mission|plan (?:a |the |my )?(?:drone|flight)|airspace check)\b/,
  "drone.intervention_task": /\b(?:field task|intervention task|irrigation task|pest task|field intervention|assign (?:a |the )?(?:field|intervention|irrigation|pest) task|assign (?:a )?field)\b/,
  "learning.start_or_continue": /\b(?:enrol+|enroll)\b|\b(?:start|begin|continue|resume|open|go on with|carry on with|proceed with)\b[^.!?]{0,25}\b(?:course|training|lesson|learning|class|path)\b|\b(?:training|learning) path\b|\bsign me up\b/,
  "learning.complete_lesson": /(?!x)x/,
  "learning.quiz": /(?!x)x/,
  "learning.certificate": /(?!x)x/,
  "workforce.build_profile": /\b(?:build|verify|create|update|set up|prepare)\s+(?:my\s+)?(?:candidate\s+)?profile\b|\bcandidate profile\b/,
  "workforce.match_role": /\b(?:match me|match role|match my|find me (?:a |an |the )?(?:job|role|position|work)|readiness gap|job match)\b/,
  "trade.wallet_payment": /(?!x)x/,
  "ai.copilot": /(?!x)x/
});
// -> true when the tool carries no such risk (not in the table) or the text plainly asks for it.
function toolMayRunFromLooseText(tool, text) {
  const pattern = EXPLICIT_TOOL[tool];
  if (!pattern) return true;
  return pattern.test(clean(text).replace(/\s+/g, " "));
}

// The name of the job someone wants to apply for: "apply for the telehealth assistant job" -> "telehealth assistant"; "apply for a job at cold chain" -> "cold chain"; "apply for the first one" -> "".
const FILLER = new Set(["a", "an", "the", "for", "to", "as", "at", "in", "job", "jobs", "role", "roles", "position", "positions", "post", "vacancy", "work", "opening", "workforce", "please", "my", "me", "i", "want", "would", "like", "can", "you", "and", "of", "with", "now", "that", "this", "one", "first", "second", "third", "best", "some", "any", "new", "also", "kazi", "omba", "ombi", "nafasi", "ya", "la", "kwa", "nataka", "naomba", "nipe", "help", "could", "should", "may", "do", "does", "it", "is", "are", "am", "there", "ahead", "go", "today", "tomorrow", "soon", "thanks", "thank", "kindly", "assist", "wanna", "need", "submit", "send", "application", "applications", "cv", "yes", "ok", "okay", "right", "workforce"]);
function askedRoleName(text) {
  const t = clean(text);
  const after = /\b(?:apply|applying|application|omba|ombi)\b(.*)$/.exec(t);
  const words = (after ? after[1] : t).split(" ").filter(word => word && !FILLER.has(word));
  return words.join(" ");
}
// Roles whose title or id contains every word of the asked name. roles: [{ id, title, country? }]
function matchRoles(roles, asked) {
  const words = String(asked || "").split(" ").filter(Boolean);
  if (!words.length) return [];
  return (roles || []).filter(role => {
    const hay = clean(`${role.title || ""} ${String(role.id || "").replace(/-/g, " ")}`);
    return words.every(word => hay.includes(word));
  });
}

module.exports = Object.freeze({
  clean, isSwahili, languageOf,
  moneyRequest, MONEY_REPLIES, smsRequest, SMS_REPLIES,
  certificateRequest, learningRequest, workRequest, COURSE_REPLIES, fill,
  toolMayRunFromLooseText, EXPLICIT_TOOL, askedRoleName, matchRoles
});
