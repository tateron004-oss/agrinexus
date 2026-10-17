// Which questions are about help for veterans, older adults, young people or nonprofits, and which United States programme a question names. The same words decide in two places:
//   * the server's checked guide (nexus/knowledge/us-community-support.js) picks the topic and gives the answer with its official sources;
//   * the page (public/app.js) uses it to answer a spoken question of this kind through that guide, because the voice model sometimes answered such a question from memory, with no phone number
//     (found by the live voice test: "What is the Veterans Crisis Line?" was answered with no number at all).
// topic(text) -> a topic id or null (only a QUESTION or request for help; a record, reminder or draft is not taken).  isCommunityUs(text) -> the words themselves name a US programme.
// usTimeZone(zone) -> the device's time zone is in the United States.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroCommunityTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|any|give me (?:info|information|advice)|find (?:me|a|an|the|my|resources|help|info|information|support|some|out)|show me|look(?:ing)? for|search for)\b)/i;
  const RECORD_OR_DRAFT = /^(?:please\s+)?(?:sold|bought|log|record|add|save|remind|set|create|draft|write|make|mark|list|delete|forget|call|text|send|play|open|start|translate|export|convert)\b/i;

  const VET = String.raw`veterans?|vets?|service ?members?|military`;
  // Most specific first. Each pattern is tried in order; the broad overview for a group comes last.
  const MATCHERS = [
    ["vet-crisis", new RegExp(String.raw`\bveterans?['’]?s? crisis line\b|\bvcl\b|\b(?:${VET})\b.{0,60}\b(?:crisis|suicid\w*|need(?:s)? (?:to )?(?:talk|someone)|in crisis)\b|\b(?:crisis|suicid\w*)\b.{0,60}\b(?:${VET})\b`, "i")],
    ["vet-homeless", new RegExp(String.raw`\bhomeless\b.{0,40}\b(?:${VET})\b|\b(?:${VET})\b.{0,60}\b(?:homeless|housing assistance|no (?:place|where) to (?:live|stay)|shelter)\b`, "i")],
    ["vet-center", new RegExp(String.raw`\bvet centers?\b|\b(?:ptsd|readjustment|counsel(?:l)?ing)\b.{0,40}\b(?:${VET})\b|\b(?:${VET})\b.{0,60}\b(?:ptsd|readjust\w*|counsel(?:l)?ing|talk to (?:someone|a counselor))\b`, "i")],
    ["vet-gi-bill", new RegExp(String.raw`\bgi bill\b|\b(?:${VET})\b.{0,50}\b(?:school|college|education|tuition|degree|study)\b|\b(?:school|college|education|tuition)\b.{0,40}\b(?:${VET})\b`, "i")],
    ["vet-home-loan", new RegExp(String.raw`\bva (?:home )?loans?\b|\b(?:${VET})\b.{0,60}\b(?:home loans?|mortgage|buy(?:ing)? a (?:house|home))\b|certificate of eligibility`, "i")],
    ["vet-free-help", new RegExp(String.raw`\bvsos?\b|\bveterans? service (?:officers?|organizations?)\b|\baccredited (?:representatives?|attorneys?|claims agents?)\b|\bhelp\b.{0,15}\b(?:with|filing|file)\b.{0,12}\bclaims?\b`, "i")],
    ["vet-disability", new RegExp(String.raw`\bva disability\b|\b(?:${VET})\b.{0,60}\b(?:disability|compensation|service[- ]connected|claims?)\b|\bdisability\b.{0,30}\b(?:${VET})\b|\bfile a (?:va )?claim\b`, "i")],
    ["vet-health", new RegExp(String.raw`\bva health ?care\b|\b(?:${VET})\b.{0,60}\b(?:health ?care|medical care|see a doctor|hospital|prescriptions?)\b|\bhealth ?care\b.{0,30}\b(?:${VET})\b`, "i")],
    ["vet-business", new RegExp(String.raw`\bveteran[- ]owned\b|\b(?:${VET})\b.{0,60}\b(?:start|open|run|grow|expand)\w* (?:a |my |an )?(?:small )?business\b|\bvbocs?\b|\bveterans? business\b`, "i")],
    ["vet-jobs", new RegExp(String.raw`\b(?:${VET})\b.{0,60}\b(?:jobs?|employment|careers?|resume|apprentice\w*|transition(?:ing)?)\b|\b(?:jobs?|employment|careers?|transition assistance)\b.{0,40}\b(?:${VET})\b|\buserra\b|\btransition assistance program\b`, "i")],
    ["vet-overview", new RegExp(String.raw`\bwhat (?:help|support|benefits?|resources?|services?|programs?) (?:is|are) (?:there|available)(?: for)? (?:${VET})\b|\b(?:${VET})\b.{0,40}\b(?:benefits?|help|support|resources?|services?|programs?)\b|\b(?:benefits?|help|support|resources?|services?|programs?)\b.{0,40}\b(?:${VET})\b|\bva (?:phone|number|contact|hotline)\b|\bmyva411\b`, "i")],

    ["sr-fraud", /\b(?:elder|senior|older)\b.{0,40}\b(?:fraud|scam\w*|swindle\w*)\b|\b(?:fraud|scam\w*)\b.{0,40}\b(?:elder|senior|older|grandparent|grandmother|grandfather|(?:my )?(?:mom|dad|mother|father))\b|\b(?:grandparent|grandmother|grandfather|(?:my )?(?:mom|dad|mother|father))\b.{0,40}\b(?:scam\w*|defraud\w*|swindle\w*)\b|\belder fraud\b|\bi(?:'m| am| was| got)\b.{0,20}\bscammed\b|\breport (?:a )?(?:scam|fraud)\b|\breportfraud\b/i],
    ["sr-abuse", /\b(?:elder|senior|older (?:adult|person|relative)|grandparent|(?:my )?(?:mom|dad|mother|father|grandmother|grandfather|aunt|uncle))\b.{0,60}\b(?:abus\w*|neglect\w*|exploit\w*|mistreat\w*|being hurt)\b|\badult protective services\b|\baps\b.{0,20}\b(?:report|call|number)\b/i],
    ["sr-extra-help", /\bextra help\b|\b(?:help|assistance) (?:paying|with) (?:for )?(?:my |the )?(?:medicare )?(?:prescriptions?|drugs?|medications?|medicines?)\b|\bpart d\b.{0,30}\b(?:cost|help|afford|premium)\w*/i],
    ["sr-medicare", /\bmedicare\b|\bship\b(?! ?ping)|\bhealth insurance counsel(?:l)?ing\b/i],
    ["sr-social-security", /\bsocial security\b|\bssa\b|\bssi\b|\bretirement benefits?\b/i],
    ["sr-benefits", /\bbenefitscheckup\b|\bbenefits? (?:i|we|my (?:mom|dad|parents?)) (?:may|might|can) qualify\b|\b(?:senior|older|elderly|retire\w*)\b.{0,40}\b(?:benefits?|snap|food stamps|liheap|assistance programs?|help (?:paying|with) (?:for )?(?:food|utilities|heating|bills|groceries))\b/i],
    ["sr-eldercare", /\beldercare\b|\barea agency on aging\b|\bmeals on wheels\b|\bhome[- ]delivered meals\b|\bfamily caregiver\b|\b(?:senior|older adult|elderly|aging parent)s?\b.{0,40}\b(?:services?|resources?|support|programs?|care)\b|\b(?:services?|resources?|support|programs?|care|help)\b.{0,30}\b(?:for|to) (?:my )?(?:elderly|seniors?|older (?:adults?|people|person)|aging (?:parents?|mom|dad))\b/i],

    ["yt-abuse", /\bchild abuse\b|\bchild ?help\b|\b(?:someone|my (?:dad|mom|stepdad|stepmom|parent|uncle|teacher|coach)) (?:is|are|has been) (?:hurting|hitting|abusing) me\b|\breport (?:child )?abuse\b/i],
    ["yt-runaway", /\brun(?:ning)? away\b|\brunaway\b|\bkicked out of (?:my )?(?:home|house)\b|\bno (?:place|where) to (?:stay|live)\b.{0,40}\b(?:teen|youth|young|minor|i(?:'m| am) (?:1[3-9]|2[0-4]))\b/i],
    ["yt-lgbtq", /\btrevor project\b|\blgbtq\+?\b.{0,40}\b(?:youth|teens?|young|support|crisis|help)\b|\b(?:youth|teens?|young)\b.{0,40}\blgbtq/i],
    ["yt-trafficking", /\bhuman trafficking\b|\btrafficking hotline\b|\bbeing trafficked\b/i],
    ["yt-aid-scams", /\bfafsa\b|\bfederal student aid\b|\bstudent ?aid\b.{0,30}\b(?:scam|fee|free)\b|\b(?:scholarship|financial aid)s?\b.{0,40}\b(?:scam\w*|fee|fees|legit|fake|processing)\b|\b(?:scam\w*|fake)\b.{0,30}\b(?:scholarship|financial aid)s?\b/i],
    ["yt-job-corps", /\bjob corps\b|\b(?:free|no[- ]cost) (?:career |job )?training\b.{0,60}\b(?:young|youth|teens?|1[6-9]|2[0-4])\b|\b(?:young|youth|teens?)\b.{0,60}\b(?:career training|trade school|learn a trade|finish high school)\b/i],
    ["yt-work-rules", /\bchild labor\b|\bworking papers\b|\bhow (?:many )?hours\b.{0,40}\b(?:14|15|16|17|teen\w*|minors?|young)\b.{0,40}\b(?:work|job)\b|\b(?:can|may|could) (?:a |an |my )?(?:1[4-7]|teen\w*|minor)[- ]?(?:years?[- ]old|year[- ]old)? ?(?:kid |child |son |daughter )?(?:work|get a job|have a job)\b|\bhow old (?:do (?:you|i) (?:have|need) to be|must (?:you|i) be) to (?:work|get a job)\b|\bat (?:14|15|16|17),? (?:can|could|may) i\b.{0,30}\bwork\b/i],
    ["yt-crisis", /\bcrisis text line\b|\b(?:teen|teenager|teens|youth|student|kid)s?\b.{0,60}\b(?:need(?:s)? (?:to )?(?:talk|someone)|someone to talk|in crisis|struggling|bullied|being bullied)\b|\bbeing bullied\b|\bi(?:'m| am) (?:being )?bullied\b/i],

    ["np-exemption-fees", /\bform 1023\b|\b1023-?ez\b|\b(?:501\s?\(?c\)?\s?\(?3\)?|tax[- ]exempt)\b.{0,50}\b(?:fees?|cost|how much|form|apply|application|forms)\b|\b(?:fees?|cost|how much)\b.{0,40}\b(?:501\s?\(?c\)?\s?\(?3\)?|tax[- ]exempt status|nonprofit status)\b/i],
    ["np-annual-filing", /\bform 990\b|\b990-?(?:ez|n|pf)\b|\be-?postcard\b|\bannual (?:return|filing|report)\b.{0,40}\b(?:non-?profit|charity|exempt|501)\w*|\b(?:non-?profit|charity|exempt organization)\b.{0,40}\b(?:annual return|annual filing|file (?:a |an |my )?(?:tax )?return|lose (?:its|our|my) (?:tax[- ])?exempt)\b|\bautomatic revocation\b/i],
    ["np-donor-receipts", /\bdonor (?:receipts?|acknowledg\w*|thank[- ]?you letters?)\b|\b(?:receipt|acknowledg\w*|thank)\w*\b.{0,30}\b(?:donors?|donations?|gifts?|contributions?)\b|\b(?:donors?|donations?|gifts?|contributions?)\b.{0,30}\b(?:receipts?|acknowledg\w*|thank[- ]?you)\b|\bpublication 1771\b|\bcontemporaneous written acknowledg\w*\b|\bdeduct\w*\b.{0,30}\b(?:donation|gift|contribution)s?\b.{0,20}\b(?:\$?250|receipt|letter)\b/i],
    ["np-state-registration", /\bcharitable solicitation\b|\bregister (?:my |our |the )?(?:non-?profit|charity|organization)\b.{0,40}\b(?:fundrais\w*|solicit\w*|donations?)\b|\b(?:fundrais\w*|solicit\w*)\b.{0,40}\b(?:state )?(?:registration|register|license|licen[cs]e|permit)\b|\bnasco\b|\bstate charity (?:office|officials?|regulators?)\b/i],
    ["np-federal-grants", /\bsam\.gov\b.{0,60}\bgrants?\b|\bgrants?\b.{0,60}\b(?:sam\.gov|sam registration|unique entity|uei)\b|\bunique entity id(?:entifier)?\b|\buei\b|\bregister (?:my |our |the )?(?:non-?profit|organization)\b.{0,40}\bgrants?\.gov\b/i],
    ["np-check-charity", /\b(?:is|check|verify|look up|search)\b.{0,40}\b(?:charity|non-?profit|organization)\b.{0,40}\b(?:real|legit(?:imate)?|tax[- ]exempt|501\s?\(?c\)?\s?\(?3\)?|registered|deductible)\b|\btax exempt organization search\b|\bteos\b|\bis (?:this|that|the) charity (?:real|legit(?:imate)?)\b/i],
    ["np-governance", /\bconflict of interest\b.{0,40}\b(?:policy|board|non-?profit|charity)\b|\b(?:non-?profit|charity)\b.{0,40}\b(?:board of directors|board members?|governance|bylaws)\b|\b(?:board of directors|governance|bylaws)\b.{0,40}\b(?:non-?profit|charity|501)\b|\bindependent board\b/i],
    ["np-state-association", /\bstate association of nonprofits\b|\bnational council of nonprofits\b|\bnon-?profit (?:association|network)\b.{0,30}\b(?:my|our|in) state\b|\bfind (?:my |a )?(?:state )?nonprofit association\b/i],
    // everyday help for anyone (after every group's own questions, so "food help for veterans" still reaches the veterans' answer)
    ["cs-food", /\bfood (?:pantr(?:y|ies)|banks?|stamps?|assistance|help|insecurity)\b|\bsnap (?:benefits?|application|card|office|eligib\w+|program)\b|\b(?:apply|applying|qualify|qualifying) for snap\b|\bhunger hotline\b|\b(?:need|find|get|where (?:can|do) i (?:get|find)) (?:some )?(?:free )?(?:food|groceries|a meal|meals)\b|\b(?:help|assistance) (?:buying|paying for|with) (?:food|groceries)\b|\b(?:can'?t|cannot|unable to) (?:afford|buy) (?:food|groceries)\b|\bi(?:'m| am) hungry\b/i],
    ["cs-energy", /\bliheap\b|\b(?:help|assistance|programs?) (?:with |paying |to pay |for )*(?:my |the |our )?(?:electric|electricity|energy|heating|heat|gas|utility|utilities|cooling|power) (?:bills?|costs?)\b|\b(?:electric|electricity|energy|heating|utility|utilities|power|gas) bills?\b.{0,50}\b(?:help|assist\w*|afford|behind|can'?t pay|cannot pay)\b|\b(?:behind on|can'?t pay|cannot pay|unable to pay|struggling to pay) (?:my |the )?(?:electric|energy|heating|utility|utilities|power|gas) bills?\b|\b(?:power|electricity|gas|heat) (?:was |got |is )?(?:shut|cut|turned) off\b|\butility shut-?offs?\b/i],
    ["cs-medicaid", /\bmedicaid\b|\bchip\b(?=.{0,30}\b(?:health|insurance|kids|children|coverage)\b)|\bchildren'?s health insurance program\b|\b(?:low[- ]income|free|cheap|affordable) health (?:insurance|coverage)\b|\bhealth insurance for (?:my )?(?:kids|children|family|low)\b|\bhealthcare\.gov\b/i],
    ["cs-free-tax", /\bvita\b|\btce\b|\bvolunteer income tax assistance\b|\btax counseling for the elderly\b|\baarp tax[- ]aide\b|\bfree tax (?:help|prep(?:aration)?|filing|return|returns|preparation)\b|\b(?:where|who) can (?:i|we) (?:get|find) (?:free )?(?:help|someone)(?: with| to do| doing)? (?:my |our )?taxes\b/i],
    ["cs-vital-records", /\b(?:birth|death|marriage) certificates?\b|\bdivorce (?:certificates?|decrees?|records?)\b|\bvital records?\b|\bcopy of (?:my |a |the )?(?:birth|marriage|death) (?:certificate|record)\b/i],
  ];

  function communityTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (RECORD_OR_DRAFT.test(value) || !ASKS.test(value)) return null;
    for (const [topic, pattern] of MATCHERS) if (pattern.test(value)) return topic;
    return null;
  }

  // Words that name a United States programme: they make the US answer right even on a device whose time zone is elsewhere.
  const COMMUNITY_US_WORDS = /\b(?:va\.gov|va (?:benefits?|health ?care|loans?|disability|claims?)|veterans? crisis line|vet centers?|gi bill|myva411|medicare|medicaid|social security|ssa|ssi|988|eldercare locator|shiphelp|benefitscheckup|fafsa|federal student aid|job corps|youthrules|childhelp|crisis text line|trevor project|runaway safeline|irs|501\s?\(?c\)?\s?\(?3\)?|form 99\d|form 1023|sam\.gov|grants\.gov|nasco|vbocs?|userra|liheap|snap benefits?|food stamps|hunger hotline|vita|tce|healthcare\.gov)\b/i;
  function isCommunityUs(text) { return COMMUNITY_US_WORDS.test(String(text || "")); }


  const US_TIME_ZONES = /^(?:America\/(?:New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Boise|Juneau|Sitka|Nome|Adak|Metlakatla|Yakutat|Menominee|North_Dakota\/.+|Indiana\/.+|Kentucky\/.+)|Pacific\/Honolulu|US\/.+)$/;
  function usTimeZone(zone) { return US_TIME_ZONES.test(String(zone || "")); }

  return { topic: communityTopic, isCommunityUs, usTimeZone };
});
