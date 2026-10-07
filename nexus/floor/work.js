"use strict";

// What Kyro can honestly say about jobs, training and scholarships, a CV that was asked for in a place that cannot take it, and a child who is working or wants to.
// Kyro cannot search live job listings and has no listings for the person's town. All it has is the short list of roles loaded on the platform. So the reply says exactly that,
// names those roles as "loaded on the platform, not checked with any employer", and offers the real next steps (a CV, interview practice, a local employment office).
// Nothing here applies for anything, books anything or saves anything.
//
// First draft of the Kiswahili: a fluent speaker must review every sentence.
const { clean } = require("./language.js");
const forms = require("../../public/kyro-intake-forms.js");

const normalize = text => clean(text).toLowerCase().replace(/[^\p{L}\p{N}\s'-]/gu, " ").replace(/\s+/g, " ").trim();
const WAKE = /^(?:(?:hey|hi|hello|ok(?:ay)?)[, ]+)?(?:(?:kyro|kiro|kairo|cairo|nexus|agrinexus)[, ]+)?(?:(?:please|tafadhali)[, ]+)?/;
const prepare = text => normalize(text).replace(WAKE, "").trim();

// ---- jobs ----
// Words that mean the request is about something else (an application, a CV, an interview, a certificate, pay, a scam) and is not a search for jobs. Those have their own answers.
const NOT_A_SEARCH = /\b(?:apply|applying|application|applications|applied|status|withdraw|cv|resume|r[ée]sum[ée]|interview|certificates?|courses?|salary|how much|pay|paid|rate|stage|shortlist|mentor|schedule|shift|call(?:ed)? me back|scam|fees?|fee|pin|password|abroad|overseas|send money|agent says)\b|\b(?:omba|naomba|maombi|barua|mahojiano|cheti|kozi|mshahara|lipa|nilipe|ulaya|wamefikia|yamefikia|wasifu|cv)\b/;
// A search for work: a "looking" word followed (closely) by a jobs word that is not "my job" / "his job". "work" counts only as a noun ("need work", "looking for work").
const JOB_NOUN = "(?<!\\b(?:my|our|his|her|their|your) )\\b(?:jobs?(?!\\s+(?:done|card|description))|vacanc(?:y|ies)|employment|openings?|(?<!\\bto )work(?=\\s*(?:[.,!?;]|$)|\\s+(?:near me|nearby|around|please|in [a-z]+|for (?:old|young|women|men|people|disabled|youth|students|beginners)|abroad|here)\\b))\\b";
const JOB_SEARCH_EN = new RegExp(`\\b(?:find|search(?: for)?|looking for|look for|seek(?:ing)?|need|want|get|show me|any|some|available|help me (?:to )?(?:find|get)|where (?:can|do) i (?:find|get|start looking for)|is there|are there|start looking for)\\b[^.?!]{0,30}?${JOB_NOUN}`)
const JOB_AROUND_EN = new RegExp(`${JOB_NOUN}[^.?!]{0,25}\\b(?:near me|nearby|available|hiring|open|around here)\\b`);
const JOB_SEARCH_SW = /\b(?:nitafutie|nataka|ninataka|natafuta|ninatafuta|tafuta|nisaidie(?: kupata)?|nipe|nionyeshe|onyesha|kuna|nianzie|nianze|kupata|zipo|ipo)\b[^.?!]{0,30}\b(?:kazi|ajira|vibarua|nafasi za kazi)\b|\b(?:kazi|ajira)\b[^.?!]{0,30}\b(?:nianzie|nianze|wapi|karibu nami)\b/;
const JOB_FOR_EN = /^(?:any |some |are there |what )?(?:jobs?|vacancies)\b(?: available)?(?: for\b| in\b| near\b| around\b)/;
const MAX_SEARCH_WORDS = 24;
const TRAINING = /\b(?:training|trainings|apprenticeships?|vocational|skills? training|technical (?:school|college)|polytechnic|mafunzo|ufundi|chuo cha ufundi)\b/;
// Asking to LEARN something is not a search for work ("I need training for farm jobs"): the learning side answers that.
const LEARNING_WORDS = /\b(?:training|trainings|courses?|lessons?|learn|learning|classes|class|study|teach|teaching|mafunzo|kozi|somo|masomo|kujifunza)\b/;
const NEAR_ME = /\b(?:near me|nearby|around me|close to me|in my (?:area|town|village)|karibu nami|karibu na mimi|hapa karibu)\b/;
const SCHOLARSHIP = /\b(?:scholarships?|bursar(?:y|ies)|school fees help|sponsorship for school|ufadhili wa masomo|udhamini wa masomo|msaada wa ada)\b/;

function jobRequestKind(t) {
  if (NOT_A_SEARCH.test(t)) return null;
  if (SCHOLARSHIP.test(t)) return "scholarship";
  // "training near me" / "any apprenticeship": a place to train. "find training videos" or "teach me" are not.
  if (TRAINING.test(t) && (NEAR_ME.test(t) || /\b(?:apprenticeships?|vocational|polytechnic|technical (?:school|college)|ufundi|uanagenzi)\b/.test(t)) && !/\bteach\b|\bnifundishe\b|\bvideos?\b/.test(t)) return "training";
  if (t.split(" ").length > MAX_SEARCH_WORDS) return null;
  if (LEARNING_WORDS.test(t)) return null;
  if (JOB_SEARCH_EN.test(t) || JOB_AROUND_EN.test(t) || JOB_FOR_EN.test(t) || JOB_SEARCH_SW.test(t)) return "jobs";
  return null;
}

const TEXT = {
  en: {
    jobsListed: "I can't search live job listings for your area, so I can't tell you what is open near you today. What I have in Kyro is a short list of roles loaded on the platform: {roles}. I have not checked them with any employer, so I can't say they are open or near you. What I can do now: help you make a CV, or practise an interview with you. You can also ask at a local employment office or among people you trust. Say 'make my CV' or 'practice interview' to start.",
    jobsNone: "I can't search live job listings for your area, and I don't have any job listings loaded to show you, so I won't guess. What I can do now: help you make a CV, or practise an interview with you. You can also ask at a local employment office or among people you trust. Say 'make my CV' or 'practice interview' to start.",
    training: "I don't have a list of training places or apprenticeships near you, and I can't search for them live, so I won't guess. What I can do inside Kyro is short practice lessons in reading and maths: say 'teach me letters' or 'teach me maths'. For real training, ask at a local technical or vocational training centre, your local government office, or a local employment office.",
    scholarship: "I don't have a list of scholarships or bursaries, and I can't search for them live, so I won't guess. Good places to ask are your school or the school you want to join, your local government education office, and local community organisations. Be careful of anyone who asks you to pay money first.",
    cvPointer: "I can make your CV by asking a few short questions, one at a time. Please say 'make my CV' in the Kyro app, on the main screen or with the voice button, so I can ask them and save the CV there. I have not made a CV yet.",
    cvDownload: "I can't send a file from here. When you finish the CV questions, your CV is shown on the screen with a Download button. Say 'make my CV' in the Kyro app to make one.",
    childWork: "Thank you for telling me. A child who is under the legal working age belongs in school, not at work, and a young person should never do work that is hard, dangerous or that stops them from learning. If this is about you, wanting to learn and earn is good, and there are safe ways to start: I can teach you letters and maths here, step by step. Say 'teach me letters'. If a child is being made to work, is being hurt, or is kept from school, please tell someone who can protect them: a trusted teacher, a health worker, the chief, or a children's officer or helpline in your country. If a child is in danger right now, call your local emergency number. I have not saved anything or applied for any job."
  },
  sw: {
    jobsListed: "Siwezi kutafuta orodha za kazi za moja kwa moja za eneo lako, kwa hivyo siwezi kukuambia ni nini kimefunguliwa karibu nawe leo. Nilicho nacho ndani ya Kyro ni orodha fupi ya kazi zilizopakiwa kwenye jukwaa: {roles}. Sijazihakiki na mwajiri yeyote, kwa hivyo siwezi kusema ziko wazi au ziko karibu nawe. Ninachoweza kufanya sasa: kukusaidia kutengeneza CV, au kufanya mazoezi ya mahojiano nawe. Unaweza pia kuuliza kwenye ofisi ya ajira ya eneo lako au kwa watu unaowaamini. Sema 'nataka CV' au 'mazoezi ya mahojiano' kuanza.",
    jobsNone: "Siwezi kutafuta orodha za kazi za moja kwa moja za eneo lako, na sina orodha yoyote ya kazi iliyopakiwa ya kukuonyesha, kwa hivyo sitakisia. Ninachoweza kufanya sasa: kukusaidia kutengeneza CV, au kufanya mazoezi ya mahojiano nawe. Unaweza pia kuuliza kwenye ofisi ya ajira ya eneo lako au kwa watu unaowaamini. Sema 'nataka CV' au 'mazoezi ya mahojiano' kuanza.",
    training: "Sina orodha ya vituo vya mafunzo au uanagenzi karibu nawe, na siwezi kuvitafuta moja kwa moja, kwa hivyo sitakisia. Ninachoweza kufanya ndani ya Kyro ni masomo mafupi ya mazoezi ya kusoma na hesabu: sema 'nifundishe herufi' au 'nifundishe hesabu'. Kwa mafunzo halisi, uliza kwenye chuo cha ufundi cha eneo lako, ofisi ya serikali ya mtaa wako, au ofisi ya ajira ya eneo lako.",
    scholarship: "Sina orodha ya ufadhili wa masomo, na siwezi kuutafuta moja kwa moja, kwa hivyo sitakisia. Mahali pazuri pa kuuliza ni shule yako au shule unayotaka kujiunga nayo, ofisi ya elimu ya serikali ya mtaa wako, na mashirika ya jamii ya eneo lako. Jihadhari na mtu yeyote anayekuomba ulipe pesa kwanza.",
    cvPointer: "Ninaweza kutengeneza CV yako kwa kukuuliza maswali machache mafupi, moja baada ya jingine. Tafadhali sema 'nataka CV' kwenye programu ya Kyro, kwenye skrini kuu au kwa kitufe cha sauti, ili niyaulize na kuhifadhi CV huko. Bado sijatengeneza CV.",
    cvDownload: "Siwezi kutuma faili kutoka hapa. Ukimaliza maswali ya CV, CV yako inaonyeshwa kwenye skrini ikiwa na kitufe cha Pakua. Sema 'nataka CV' kwenye programu ya Kyro kutengeneza moja.",
    childWork: "Asante kwa kuniambia. Mtoto aliye chini ya umri halali wa kufanya kazi anapaswa kuwa shuleni, si kazini, na kijana hapaswi kamwe kufanya kazi ngumu, hatari au inayomzuia kujifunza. Ikiwa hili linakuhusu, kutaka kujifunza na kupata kipato ni jambo zuri, na kuna njia salama za kuanza: ninaweza kukufundisha herufi na hesabu hapa, hatua kwa hatua. Sema 'nifundishe herufi'. Ikiwa mtoto analazimishwa kufanya kazi, anaumizwa, au anazuiwa kwenda shule, tafadhali mwambie mtu anayeweza kumlinda: mwalimu unayemwamini, mhudumu wa afya, chifu, au afisa wa watoto au simu ya msaada ya nchi yako. Ikiwa mtoto yuko hatarini sasa hivi, piga simu kwa namba ya dharura ya nchi yako. Sijahifadhi chochote wala kuomba kazi yoyote."
  }
};
const say = (lang, key, params = {}) => String(TEXT[lang][key]).replace(/\{(\w+)\}/g, (whole, name) => (params[name] === undefined ? whole : String(params[name])));

const roleList = roles => {
  const titles = (Array.isArray(roles) ? roles : []).map(role => clean(role?.title)).filter(Boolean);
  return Array.from(new Set(titles)).slice(0, 6);
};

function jobsReply(kind, lang, roles) {
  if (kind === "training") return { intent: "conversation.honest_training_answer", reply: say(lang, "training") };
  if (kind === "scholarship") return { intent: "conversation.honest_scholarship_answer", reply: say(lang, "scholarship") };
  const titles = roleList(roles);
  if (!titles.length) return { intent: "conversation.honest_job_search", reply: say(lang, "jobsNone") };
  return { intent: "conversation.honest_job_search", reply: say(lang, "jobsListed", { roles: titles.join(", ") }) };
}

// ---- a child who works or wants to ----
const AGE_WORDS = { ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15 };
// An age is said about a person ("I am 15", "my daughter is 14", "she is 13 years old", "nina miaka 15"), never about a farm or a price ("my farm is 12 acres").
const NUMBER_RE = "(\\d{1,2}|ten|eleven|twelve|thirteen|fourteen|fifteen)";
const NOT_AN_AGE = "(?!\\s*(?:acres?|ekari|hectares?|ha|kg|km|bags?|sacks?|cows?|goats?|chickens?|shillings?|bob|kes|ksh|workers?|people|hours?|days?|months?|weeks?|%))";
const AGE_PATTERNS = [
  new RegExp(`\\b(?:i am|i'm|im)\\s+${NUMBER_RE}\\b${NOT_AN_AGE}`),
  new RegExp(`\\b(?:my|our)\\s+(?:son|daughter|child|boy|girl|nephew|niece|brother|sister|kid|grandson|granddaughter|cousin)\\s+(?:is|who is|aged)\\s+${NUMBER_RE}\\b${NOT_AN_AGE}`),
  new RegExp(`\\b${NUMBER_RE}[\\s-]?(?:years?|yrs?)[\\s-]?old\\b`),
  /\bmiaka\s+(\d{1,2})\b(?!\s*(?:ya kazi|iliyopita))/
];
const ageIn = t => {
  const m = AGE_PATTERNS.map(pattern => pattern.exec(t)).find(Boolean);
  if (!m) return null;
  const raw = m[1];
  const age = /^\d+$/.test(raw) ? Number(raw) : AGE_WORDS[raw];
  return Number.isFinite(age) ? age : null;
};
const WORK_WORD = /\b(?:job|jobs|work|works|working|worked|employ(?:ed|ment)?|earn|house ?girl|house ?boy|house ?help|maid|domestic|herd(?:ing)?|hawk(?:ing)?|kazi|anafanya kazi|ninataka kazi|nataka kazi|msichana wa kazi|mfanyakazi wa nyumbani)\b/;
const CHILD_LABOUR = /\bchild labou?r\b|\bkazi za watoto\b|\bajira ya watoto\b|\bajira kwa watoto\b/;
function childWorkRequest(text) {
  const t = prepare(text);
  if (!t) return false;
  if (CHILD_LABOUR.test(t)) return true;
  if (!WORK_WORD.test(t)) return false;
  const age = ageIn(t);
  return age !== null && age >= 5 && age <= 15;
}

// ---- the entry point for everything here ----
// jobs: false leaves job, training and scholarship questions to whatever else is listening (the learning tool, which may have a live job-search source configured).
function workTurn({ text, lang, roles, jobs = true }) {
  const t = prepare(text);
  if (!t) return null;
  if (childWorkRequest(text)) return { intent: "conversation.safeguarding.child_work", reply: say(lang, "childWork") };
  if (forms.isResumeDownloadRequest(text)) return { intent: "conversation.resume_download_pointer", reply: say(lang, "cvDownload") };
  if (forms.isResumeBuildRequest(text)) return { intent: "conversation.resume_pointer", reply: say(lang, "cvPointer") };
  const kind = jobs ? jobRequestKind(t) : null;
  if (kind) return jobsReply(kind, lang, roles);
  return null;
}

// A CV asked for or a CV file asked for (said anywhere, including in the middle of another practice).
const isCvRequest = text => forms.isResumeBuildRequest(text) || forms.isResumeDownloadRequest(text);

module.exports = Object.freeze({ isCvRequest, workTurn, jobRequestKind, childWorkRequest, jobsReply, say, TEXT, ageIn });
