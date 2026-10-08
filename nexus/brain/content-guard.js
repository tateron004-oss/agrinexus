"use strict";

// Requests a young person (or anyone) may make that Kyro should not simply carry out: finding sexual or explicit material, betting tips and "sure odds", and tricks to hack, fake or scam. Found by the
// persona audits: all of these went straight to the AI model, which could send them to a web search. They are answered here, plainly and without lecturing, with something Kyro CAN do instead.
// The fixed rules only catch plain requests; the AI prompts carry the same rule (nexus/brain/crisis-rule.js) for everything else. Wording should be reviewed by a youth organisation.
const { investmentGuardReply } = require("./investment-guard.js");
const { scamGuardReply } = require("./scam-guard.js");
// The same guards for someone who asks in Kiswahili: the same kinds, recognised in Kiswahili, answered in Kiswahili (content-guard-sw.js). The English wording and recognition below are unchanged.
const swahili = require("./content-guard-sw.js");
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim().toLowerCase();

// ---- explicit material ----
const EXPLICIT_TERM = /\b(?:porn(?:ography|o)?|xxx|nudes?|naked (?:pictures?|photos?|pics?|videos?|girls?|women|men|boys|ladies)|sex (?:videos?|tapes?|pictures?|pics?|chat|sites?)|erotic(?:a)?|hentai|onlyfans|sexting|strip ?tease|adult (?:videos?|sites?|content)|explicit (?:videos?|pictures?|photos?|pics?|content|material|images?|sites?|websites?|movies?|clips?))\b/;
const EXPLICIT_REQUEST = /\b(?:show|find|send|get|give|download|watch|see|search(?: for)?|looking for|link(?:s)? to|sites? for|websites? for|where (?:can|do|could) (?:i|we) (?:watch|find|see|get|download)|i want|i need|let me see|can i (?:see|get|have))\b/;
// A question ABOUT it (is it harmful, my child watches it, how do I stop) is a different thing and is answered normally.
const EXPLICIT_QUESTION_ABOUT = /\b(?:addict(?:ed|ion)?|harm(?:ful)?|bad for|dangerous|effects? of|why (?:is|are|do)|should i|ashamed|quit|stop (?:watching|looking)|my (?:son|daughter|child|children|brother|sister|husband|wife|boyfriend|girlfriend|student|pupil)|block(?:ing)?|parental|filter|report|abuse|blackmail|leaked|shared my)\b/;

// ---- betting ----
const BETTING_TERM = /\b(?:sportpesa|sport pesa|betika|odibets|mozzart(?:bet)?|1xbet|betway|bet365|aviator|jackpot|casino|slots?|roulette|gambl(?:e|ing|er)|sports? betting|betting|bookmakers?|bookies?|(?:betting|sure|best|fixed|today'?s|match) odds|punt(?:ing)?)\b|\bbets?\s+on\b|\bplace (?:a )?bets?\b|\bbet (?:and|to) win\b/;
const BETTING_TIPS = /\b(?:tips?|predict(?:ion|ions)?|predict|sure|guaranteed|fixed|fix(?:es)?|win(?:ning)?|strateg(?:y|ies)|tricks?|hacks?|cheats?|formula|best|how (?:do|can|to|should) (?:i|you)|which (?:team|game|match|odds)|odds (?:for|on)|who will win|systems?)\b/;
const GAMBLING_PROBLEM = /\b(?:addict(?:ed|ion)?|can'?t stop|cannot stop|stop (?:betting|gambling)|quit (?:betting|gambling)|lost (?:all|everything|my (?:money|salary|fees|rent))|in debt|debt|problem|borrowed|loan(?:s)? to bet|hooked)\b/;

// ---- hacking, faking, scams ----
const FRAUD_REQUEST = /\b(?:hack(?:ing)?|crack(?:ing)?|steal(?:ing)?|clone|cloning|bypass|reverse)\b[^.!?]{0,40}\b(?:m-?pesa|airtel money|t-?kash|bank|account|sim|phone|wi-?fi|password|pin|facebook|instagram|whatsapp|tiktok|someone'?s|(?:friend|teacher|ex|girlfriend|boyfriend|neighbou?r|boss)'?s?)\b|\bfake (?:m-?pesa|receipts?|messages?|sms|transactions?|payments?|certificates?|results|ids?|passports?|documents?)\b|\bforge(?:d)?\b|\bfree (?:data|bundles?|airtime)\b[^.!?]{0,30}\b(?:hack|trick|cheat|code|generator)\b|\bswap(?:ping)? sim\b|\bsim swap\b|\bflash (?:m-?pesa|money|usdt|btc)\b|\bcredit card generator\b/;
const SCHEME = /\bdouble (?:my|your|the) money\b|\b(?:send|pay|deposit)\s+(?:ksh\.?\s*)?\d[\d,]*\s*(?:and|to)\s+(?:get|receive|win)\s+(?:ksh\.?\s*)?\d[\d,]*\b|\bget rich quick\b|\bmoney flipping\b|\b(?:easy|fast|quick) money (?:online|trick|scheme)\b|\bpyramid scheme\b|\bearn \d[\d,]*\s*(?:a|per|every)\s*day (?:from|with|doing)\b|\bforex (?:signals?|trading) (?:earn|make|guaranteed)\b/;

const REPLIES = Object.freeze({
  explicit: "I can't find or show sexual or explicit pictures or videos. If you have questions about your body, growing up, relationships or staying safe, I can answer those plainly. And if anyone has sent you pictures, is pressuring you or is threatening to share something, tell an adult you trust: you have not done anything wrong, and I can help you work out what to say.",
  betting: "I can't give betting tips, odds or \"sure\" predictions: nobody can know how a match or a game will end, and most people who bet lose more than they win. Betting is also only for adults, usually 18 and over. If you are trying to earn or grow a little money, I can help you plan a small saving, a budget, or a small business idea instead.",
  gamblingProblem: "Thank you for telling me. Losing money to betting happens to many people and it is not something to be ashamed of, and you don't have to sort it out alone. Please talk to someone you trust, like a family member, a friend, a pastor, a teacher or a counsellor. If you want, I can help you write down what you owe and make a simple plan, and I can set a reminder to help you stay away from the betting sites.",
  fraud: "I can't help with hacking, faking payments or documents, or tricking people: it hurts real people and it can get you into serious trouble. If you are trying to get airtime, money or a result you need, tell me what you need and I will help you find an honest way.",
  scheme: "Be careful: anything that says it will double your money, or asks you to send money first to get more back, is almost always a scam, and the money you send is not returned. Never send money to get money, and never share your PIN or password. If someone is pressing you, stop replying and tell someone you trust. If you want to earn, I can help you with a small business plan, a skill to learn, or jobs to look for."
});

// -> { kind, reply } (a Kiswahili reply also carries language: "sw") or null
function contentGuardReply(text) {
  const found = englishContentGuardReply(text);
  // A request in Kiswahili that the English wording also recognises ("sportpesa tips za leo") is answered in Kiswahili; one only the Kiswahili wording recognises ("je, ninunue bitcoin?") is found here.
  if (found) return !found.language && swahili.isSwahili(text) ? swahili.inSwahili(found) : found;
  return swahili.swahiliGuardReply(text);
}

function englishContentGuardReply(text) {
  const t = clean(text);
  if (!t || t.length > 400) return null;
  if (EXPLICIT_TERM.test(t) && EXPLICIT_REQUEST.test(t) && !EXPLICIT_QUESTION_ABOUT.test(t)) return { kind: "explicit", reply: REPLIES.explicit };
  if (BETTING_TERM.test(t)) {
    if (GAMBLING_PROBLEM.test(t)) return { kind: "gambling-problem", reply: REPLIES.gamblingProblem };
    if (BETTING_TIPS.test(t)) return { kind: "betting", reply: REPLIES.betting };
  }
  if (FRAUD_REQUEST.test(t)) return { kind: "fraud", reply: REPLIES.fraud };
  if (SCHEME.test(t)) return { kind: "scheme", reply: REPLIES.scheme };
  // Someone asking for a PIN, password or one-time code, a fee to get a job, a loan or a prize, or an ID copy going to a stranger (see scam-guard.js).
  const scam = scamGuardReply(text);
  if (scam) return scam;
  // Never says what to buy, sell or trade, predicts a price, picks an exchange, or promises a return (see investment-guard.js).
  return investmentGuardReply(text);
}

module.exports = Object.freeze({ contentGuardReply, REPLIES });
