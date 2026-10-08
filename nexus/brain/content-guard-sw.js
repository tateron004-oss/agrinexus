"use strict";

// The content guards (nexus/brain/content-guard.js, investment-guard.js) in Kiswahili. Found by a user audit: "should I buy bitcoin" was answered, but "je, ninunue bitcoin?", "nunue hisa gani",
// "naweza kupata faida kubwa haraka?" or "nikuze pesa mara mbili" got no guard wording at all, so the same request depended on the language it was asked in. The meaning is the same as the English:
// Kyro never says what to buy, sell or trade, gives no betting tips, does not help hack or fake, shows no sexual material, and warns about "double your money" offers.
//
// This file only RECOGNISES the Kiswahili wording and holds the Kiswahili replies; content-guard.js decides when to use them. The English wording and the English recognition are not changed.
// When in doubt a plain "should I buy / which / will it go up" question about a named coin, share or exchange is answered with the guard, as in English; explaining questions are not.
// NEEDS A FLUENT KISWAHILI SPEAKER (and, for the investment wording, a licensed financial educator) before it is relied on.
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim().toLowerCase();

// ---- which language to answer in ----
// Words that are plainly Kiswahili; the weak ones ("ya", "za", "wa", "kwa") are also English-looking short words, so they only count together with others.
const STRONG = /\b(?:je|nipe|nipatie|nataka|naweza|ninunue|nunue|niuze|nawekeza|niwekeze|ninawekeza|pesa|kwenye|gani|ipi|upi|zipi|faida|haraka|kubeti|kubashiri|kamari|nionyeshe|nitafutie|hisa|sarafu|uwekezaji|kuwekeza|ushauri|vidokezo|kudukua|nidukue|ghushi|kughushi|nighushi|feki|bandia|ngono|uchi|ponografia|nikuze|nizidishe|mkeka|mikeka|leo|mechi|nitumie|nitengeneze|tengeneza|tafadhali|asante|mimi|yangu|zangu|wangu|kutajirika|tajiri|mara mbili|maradufu|niambie|nisaidie|nikope|mkopo|nimepoteza|siwezi|kuacha|ushindi|kushinda|atashinda|itapanda|itashuka)\b/g;
const WEAK = /\b(?:ya|za|wa|kwa|ni|na|au|hii|hizi|huu|hiyo|hizo|kuwa|kila)\b/g;
const isSwahili = text => { const t = clean(text); return (t.match(STRONG) || []).length + ((t.match(WEAK) || []).length ? 1 : 0) >= 2; };

// ---- things that are bought, sold or traded ----
const ASSET = /\b(?:bitcoin|btc|ethereum|ether|eth|crypto(?:currency|currencies|s)?|kripto|altcoins?|dogecoin|doge|shiba|solana|xrp|usdt|tether|usdc|stablecoins?|nfts?|binance|coinbase|bybit|kucoin|luno|yellow card|forex|fx|trading|hisa|soko la hisa|dhamana|hatifungani|sarafu(?: za| ya| pepe)?(?: kidijitali| dijitali| kripto| mtandaoni)?|fedha (?:za )?(?:kidijitali|dijitali|pepe|mtandaoni)|mfuko wa (?:uwekezaji|pamoja)|mifuko ya uwekezaji|biashara ya (?:forex|hisa|sarafu|kubashiri bei))\b/;
// Farm produce, a farm, a shop or a house are not assets in this sense ("hisa ya mahindi" is a stock of maize), and the share of a harvest is not a share to buy.
const FARM_OR_HOME = /\b(?:shamba|mashamba|mifugo|ng'?ombe|mbuzi|kuku|kondoo|nguruwe|duka|mbegu|mbolea|tanki|kisima|trekta|pampu|mashine|nyumba|ardhi|kiwanja|shule|kilimo|mahindi|maharag(?:e|we)|nyanya|mazao|maziwa|mavuno|chakula|dawa za mifugo|jenga|kujenga)\b/;
const NOT_AN_ASSET_USE = /\bhisa (?:ya|za|yako|yangu|zangu|zetu) (?:mahindi|maharag(?:e|we)|chakula|mbolea|mbegu|dawa|duka|bidhaa|mifugo|ng'?ombe|mbuzi|kuku|mavuno|shamba|maziwa)\b|\b(?:gawana|shiriki|kugawana) (?:mavuno|chakula|hisa ya mavuno)\b/;

// "should I buy / sell / invest ...?" The subjunctive forms ("ninunue", "niuze", "niwekeze") already ask "should I"; the plain present forms only count as a question.
const SHOULD_I = /\b(?:je,? )?(?:n?i?nunue|nizinunue|niziuze|nizishike|niuze|niwekeze|nishikilie|nibadilishe|nifanye biashara|nibadili|nitumie pesa zangu|niweke (?:pesa|akiba|fedha)(?: zangu)?)\b|\b(?:naweza|nitaweza|nipaswa|ninapaswa|nifanyeje)\s+(?:kununua|kuuza|kuwekeza|kufanya biashara|kuweka pesa)\b|\b(?:unashauri|unanishauri|ungeshauri|unapendekeza)\s+(?:nini|ninunue|niuze|niwekeze|nifanye)\b|\b(?:ni|ingekuwa|je ni)\s+(?:vizuri|sahihi|busara|salama|vema|bora|wazo zuri)\s+(?:kununua|kuwekeza|kuuza|kuweka pesa)\b/;
const PRESENT_ASKING = /\b(?:nawekeza|ninawekeza|nauza|ninauza|nanunua|ninanunua|nafanya biashara|ninafanya biashara)\b/;
const QUESTION_SIGNS = /\?|\bje\b|\b(?:gani|ipi|upi|zipi|nzuri|bora|salama|sawa|vizuri|busara|vema|hatari)\b/;
const WHICH_ONE = /\b(?:gani|ipi|upi|zipi)\b/;
const BUY_WORDS = /\b(?:nunue|ninunue|nunua|kununua|wekeza|niwekeze|kuwekeza|uwekezaji|niuze|kuuza|bora|nzuri|salama|faida|inalipa)\b/;
const OPEN_INVEST = /\b(?:niwekeze|nawekeza|ninawekeza|nianze kuwekeza|nitawekeza|nianzie kuwekeza|niweke pesa zangu)\s+(?:wapi|nini|kwenye nini|ndani ya nini|kipi)\b|\bushauri wa (?:kuwekeza|uwekezaji|kununua hisa|kununua sarafu|kufanya biashara ya (?:hisa|forex|sarafu))\b|\bnishauri (?:niwekeze|ninunue|niuze|nifanye biashara)\b|\buwekezaji (?:gani|upi|bora|salama|mzuri|unaolipa)\b|\b(?:wapi|nini|kipi|biashara gani)\s+(?:bora|nzuri|salama)?\s*(?:cha|pa|ya|kwa)?\s*(?:kuwekeza|uwekezaji)\b/;
const PRICE_VERB = /\b(?:itapanda|itashuka|itaanguka|itapaa|itaongezeka|itapungua|itarudi|itafikia|itakuwa|inapanda|inashuka|itazidi|itaongezeka thamani|itapoteza)\b/;
const PRICE_THING = /\b(?:bitcoin|btc|ethereum|eth|crypto|kripto|sarafu(?: za| ya| pepe)?(?: kidijitali| dijitali| kripto)?|dogecoin|doge|solana|xrp|usdt|forex|hisa|shilingi|dola|naira|euro|yuan)\b/;
const PRICE_FORECAST = /\b(?:utabiri|makadirio|ubashiri)\b[^.!?]{0,20}\bbei\b/;

// ---- quick riches, promised returns, borrowing to invest ----
const QUICK = /\b(?:faida kubwa|pesa nyingi|mapato makubwa|utajiri|faida|pesa)\b[^.!?]{0,25}\bharaka\b|\bharaka\b[^.!?]{0,25}\b(?:faida kubwa|pesa nyingi|utajiri|kutajirika|kuwa tajiri)\b|\b(?:kutajirika|kuwa tajiri|nitajirike|kuwa milionea|kuwa milionari)\b[^.!?]{0,25}\b(?:haraka|mara moja|kwa muda mfupi|usiku mmoja)\b|\bpesa za haraka\b|\bnjia ya (?:haraka|mkato) (?:ya )?(?:kupata|kutengeneza) (?:pesa|faida)\b|\bkupata pesa (?:kwa )?haraka\b|\bkutengeneza pesa (?:kwa )?haraka\b/;
const RICH_WITH_ASSET = /\b(?:kutajirika|kuwa tajiri|nitajirike|milionea|milionari|pesa nyingi|faida kubwa|mapato ya kila siku|mapato makubwa|uhuru wa kifedha)\b/;
const PROMISED_RETURN = /\b(?:faida|riba|mapato|marejesho)\b[^.!?]{0,30}\b(?:ya uhakika|iliyohakikishwa|bila hatari|bila hasara|isiyo na hatari)\b|\b(?:uhakika|bila hatari|hakuna hatari|isiyo na hatari)\b[^.!?]{0,20}\b(?:faida|riba|mapato)\b|\b(?:\d{1,3}\s?%|asilimia \d{1,3})\s*(?:kwa|kila|ya)\s*(?:siku|wiki|mwezi)\b[^.!?]{0,40}\b(?:faida|riba|weka|wekeza|amana|mapato)\b|\b(?:faida|riba|mapato)\b[^.!?]{0,40}\b(?:\d{1,3}\s?%|asilimia \d{1,3})\s*(?:kwa|kila)\s*(?:siku|wiki|mwezi)\b/;
const BORROW = /\b(?:nikope|nikopa|nichukue mkopo|kuchukua mkopo|kukopa|nikopeshwe|unikopeshe|mkopo|niuze (?:shamba|ardhi|kiwanja|ng'?ombe|mbuzi|nyumba|gari|pikipiki|trekta))\b[^.!?]{0,50}\b(?:(?:ili|halafu|kisha|na|ndipo)\b[^.!?]{0,30}\b)?(?:niwekeze|nifanye biashara|ninunue|kuwekeza|kununua|nianze kufanya biashara|nianze kuwekeza|nianze biashara ya)\b/;

// ---- betting ----
const BETTING_TERM = /\b(?:kubeti|kubet|kubetia|nibeti|beti|kamari|kucheza kamari|mkeka|mikeka|sportpesa|sport pesa|betika|odibets|mozzart|1xbet|betway|bet365|aviator|jackpot|kasino|casino|bookmaker|odds|sure odds|(?:ubashiri|utabiri|kubashiri) (?:wa |za )?(?:mechi|mpira|kandanda|michezo|ligi)|kubashiri (?:matokeo|mechi))\b/;
const BETTING_TIPS = /\b(?:vidokezo|ushauri|tips?|utabiri|ubashiri|uhakika|hakika|nani atashinda|atashinda|mbinu|njia (?:ya|za) kushinda|jinsi ya kushinda|namna ya kushinda|siri ya kushinda|nipe|nipatie|nitajie|nitumie|leo|usiku wa leo|kushinda|ushindi|hakika ya kushinda|bora)\b/;
const GAMBLING_PROBLEM = /\b(?:nimepoteza|nimeishiwa|nimepoteza pesa)\b[^.!?]{0,50}\b(?:kubeti|kamari|kubashiri|sportpesa|betika|beti)\b|\bsiwezi kuacha (?:kubeti|kamari|kucheza kamari)\b|\bnimezoea (?:kubeti|kamari)\b|\b(?:uraibu|ulevi) wa (?:kubeti|kamari)\b|\bnimekuwa mraibu wa (?:kubeti|kamari)\b|\bnataka kuacha (?:kubeti|kamari|kucheza kamari)\b|\bdeni la (?:kubeti|kamari)\b|\bnimekopa\b[^.!?]{0,30}\b(?:kubeti|kamari)\b|\bnimepoteza (?:kila kitu|mshahara|pesa zote|pesa zangu zote)\b[^.!?]{0,30}\b(?:kubeti|kamari|beti)\b/;

// ---- hacking, faking, scams ----
const FRAUD_REQUEST = /\b(?:kudukua|nidukue|dukua|nidukulie|kuhack|nihack|kuiba|niibe|nibadilishe laini ya)\b[^.!?]{0,40}\b(?:m-?pesa|mpesa|airtel money|t-?kash|benki|akaunti|simu|laini|wi-?fi|nenosiri|neno la siri|pin|facebook|instagram|whatsapp|tiktok|rafiki|mwalimu|mpenzi|jirani|bosi|mke|mume|mtu)\b|\b(?:kughushi|nighushi|ghushi|nitengeneze|nitengenezee|tengeneza|fanya|andika|toa|unda|chapisha|nitumie|nipe)\b[^.!?]{0,30}\b(?:risiti|ujumbe|sms|ujumbe wa|cheti|vyeti|kitambulisho|pasipoti|hati|malipo|muamala|miamala|matokeo|stakabadhi)\b[^.!?]{0,15}\b(?:feki|bandia|ghushi|za uongo|ya uongo|wa uongo|zisizo za kweli|isiyo ya kweli)\b|\b(?:kughushi|nighushi|ghushi)\b[^.!?]{0,30}\b(?:risiti|ujumbe|cheti|vyeti|kitambulisho|pasipoti|hati|malipo|muamala|matokeo|stakabadhi|saini)\b|\b(?:risiti|ujumbe|sms|muamala|miamala|malipo)\b[^.!?]{0,6}\b(?:feki|bandia)\b[^.!?]{0,25}\b(?:m-?pesa|mpesa|airtel money|t-?kash|benki)\b|\b(?:m-?pesa|mpesa|airtel money|t-?kash)\b[^.!?]{0,15}\b(?:feki|bandia)\b|\b(?:bundle|bando|data|muda wa maongezi|airtime)\b[^.!?]{0,20}\b(?:bure)\b[^.!?]{0,30}\b(?:kudukua|hack|mbinu|kodi|jenereta)\b|\bsim swap\b|\bkubadilisha laini ya mtu\b/;

// ---- doubling money ----
const DOUBLE_VERB = /\b(?:nikuze|nikuza|nizidishe|kuzidisha|kukuza|kuongeza|kuzalisha|naweza|nitaweza|je|njia|jinsi|namna|inawezekana|nifanyeje|nifanye|nataka|tuma|weka|toa)\b/;
const DOUBLE_MONEY = /\bpesa\b[^.!?]{0,30}\b(?:mara mbili|maradufu|mara dufu|mara tatu|mara kumi|mara 2|mara 3|mara 10)\b|\b(?:mara mbili|maradufu)\b[^.!?]{0,15}\bya pesa\b|\bdouble pesa\b|\bkuongeza pesa mara\b|\bpesa (?:zangu )?kuwa mara\b/;
const SEND_TO_GET = /\b(?:tuma|weka|lipa|toa|nitumie)\b[^.!?]{0,25}\b(?:upate|utapata|upokee|utapokea|nipate|nipokee|ulipwe|upewe)\b[^.!?]{0,25}\b(?:\d|elfu|mara|zaidi)/;
const PYRAMID = /\bmpango wa piramidi\b|\bmchezo wa piramidi\b|\bupatu wa pesa\b|\bpiramidi ya pesa\b|\bpesa za mtandaoni haraka\b/;

// ---- sexual material ----
const EXPLICIT_TERM = /\b(?:ngono|ponografia|porn(?:o|ography)?|xxx|picha za uchi|video za uchi|video za ngono|picha za ngono|filamu za ngono|filamu za uchi|wasichana walio uchi|wanawake walio uchi|onlyfans|sexting|vitu vya watu wazima)\b/;
const EXPLICIT_REQUEST = /\b(?:nionyeshe|nionyeshee|onyesha|onyeshe|nitafutie|tafuta|nipe|nipatie|nitumie|nataka kuona|ningependa kuona|nataka kutazama|nitazame|pakua|download|wapi naweza (?:kuona|kutazama|kupata|kupakua)|link za|tovuti za|nionyesha)\b/;
const EXPLICIT_ABOUT = /\b(?:mtoto wangu|mwanangu|binti yangu|mwanafunzi|wanafunzi|madhara|athari|ulevi wa|uraibu wa|kuacha kutazama|jinsi ya kumzuia|kuzuia|kumzuia|ripoti|nimetumiwa|alinitumia|ananitishia|kuvujisha|kusambaza picha zangu|ametuma|wameniibia picha|nimeibiwa picha|ni mbaya|ni hatari|kwa nini|napaswa)\b/;

const REPLIES = Object.freeze({
  explicit: "Siwezi kutafuta wala kuonyesha picha au video za ngono au za uchi. Ukiwa na maswali kuhusu mwili wako, kukua, mahusiano au kujilinda, naweza kukujibu kwa uwazi. Na ikiwa mtu amekutumia picha, anakulazimisha au anatishia kushiriki kitu chako, mwambie mtu mzima unayemwamini: hujafanya kosa lolote, na naweza kukusaidia kupanga cha kusema.",
  betting: "Siwezi kutoa vidokezo vya kubeti, odds wala utabiri wa \"uhakika\": hakuna anayeweza kujua mechi au mchezo utaisha vipi, na watu wengi wanaobeti hupoteza zaidi ya wanachoshinda. Kubeti pia ni kwa watu wazima tu, kwa kawaida miaka 18 na zaidi. Ukitaka kupata au kukuza pesa kidogo, naweza kukusaidia kupanga akiba ndogo, bajeti au wazo dogo la biashara badala yake.",
  gamblingProblem: "Asante kwa kuniambia. Kupoteza pesa kwa kubeti kunawapata watu wengi na si jambo la kuonea aibu, na huhitaji kulitatua peke yako. Tafadhali zungumza na mtu unayemwamini, kama mwanafamilia, rafiki, mchungaji, mwalimu au mshauri. Ukipenda, naweza kukusaidia kuandika deni ulilo nalo na kupanga mpango rahisi, na naweza kuweka kikumbusho cha kukusaidia kukaa mbali na tovuti za kubeti.",
  fraud: "Siwezi kusaidia kudukua, kughushi malipo au hati, wala kuwadanganya watu: huwadhuru watu halisi na inaweza kukuingiza kwenye matatizo makubwa. Ikiwa unajaribu kupata muda wa maongezi, pesa au matokeo unayohitaji, niambie unachohitaji nami nitakusaidia kupata njia ya uaminifu.",
  scheme: "Kuwa mwangalifu: chochote kinachosema kitaongeza pesa zako mara mbili, au kinachokuomba utume pesa kwanza ili upate zaidi, mara nyingi ni utapeli, na pesa unazotuma hazirudishwi. Usitume pesa ili upate pesa, na usishiriki PIN wala nenosiri lako kamwe. Ikiwa mtu anakulazimisha, acha kujibu na umwambie mtu unayemwamini. Ukitaka kupata kipato, naweza kukusaidia na mpango mdogo wa biashara, ujuzi wa kujifunza, au kazi za kutafuta.",
  investment: "Siwezi kukushauri ununue, uuze au ufanyie biashara nini, wala ni sarafu, hisa au mfuko upi utapanda, wala ni soko au programu ipi utumie. Hakuna anayeweza kuahidi matokeo kwa uaminifu: bei hupanda na kushuka, na watu wengi hupoteza pesa, hasa kwenye sarafu za kidijitali na biashara ya hisa. Mimi si mshauri wa fedha mwenye leseni. Ninachoweza ni kukueleza jinsi mambo haya yanavyofanya kazi na hatari zake, kukusaidia kuangalia kama kampuni ina leseni nchini kwako, au kukusaidia kuweka lengo la akiba na bajeti. Ukifikiria kuwekeza, tumia tu pesa ambazo unaweza kumudu kuzipoteza, usitumie pesa za mkopo kamwe, na uzungumze kwanza na mshauri mwenye leseni.",
  getRich: "Hakuna mpango unaohakikisha kutajirika, na yeyote anayeahidi hivyo mara nyingi anauza kitu. Watu wengi wanaojaribu kupata pesa haraka kwa biashara ya hisa au sarafu za kidijitali hupoteza pesa. Naweza kukusaidia kuweka lengo la akiba na bajeti inayofaa maisha yako, au kukueleza jinsi uwekezaji na pesa za kidijitali zinavyofanya kazi na hatari zake.",
  borrowToInvest: "Tafadhali usikope pesa, usichukue mkopo, wala usiuze ardhi au wanyama ili uwekeze au ufanye biashara ya hisa. Bei zinaweza kushuka, ukapoteza kila kitu na bado ukadaiwa deni. Mimi si mshauri wa fedha mwenye leseni, lakini naweza kukueleza hatari, kukusaidia kuhesabu mkopo unagharimu kiasi gani kweli, au kukusaidia kupanga akiba badala yake. Ukifikiria hili, zungumza kwanza na mshauri mwenye leseni na mtu unayemwamini.",
  returnPromise: "Kuwa mwangalifu: hakuna anayeweza kuhakikisha faida, na ofa ya faida ya uhakika au kubwa sana, kama asilimia kila siku, wiki au mwezi, mara nyingi ni utapeli, na pesa unazoweka kwa kawaida hazirudishwi. Usitume pesa ili upate pesa, na usishiriki PIN, nenosiri wala funguo zako kamwe. Siwezi kuthibitisha kama ofa ni ya kweli. Uliza kama kampuni ina leseni nchini kwako, na umwambie mtu unayemwamini kabla ya kufanya lolote."
});

// English kind -> the Kiswahili reply of the same meaning.
const REPLY_FOR_KIND = Object.freeze({ "explicit": "explicit", "betting": "betting", "gambling-problem": "gamblingProblem", "fraud": "fraud", "scheme": "scheme", "investment-advice": "investment", "get-rich": "getRich", "borrow-to-invest": "borrowToInvest", "return-promise": "returnPromise" });
const inSwahili = guard => (guard && REPLY_FOR_KIND[guard.kind] ? { kind: guard.kind, reply: REPLIES[REPLY_FOR_KIND[guard.kind]], language: "sw" } : guard);

// -> { kind, reply, language: "sw" } or null. Same kinds as the English guards.
function swahiliGuardReply(text) {
  const t = clean(text);
  if (!t || t.length > 400) return null;
  const hit = (kind, reply) => ({ kind, reply: REPLIES[reply], language: "sw" });
  if (EXPLICIT_TERM.test(t) && EXPLICIT_REQUEST.test(t) && !EXPLICIT_ABOUT.test(t)) return hit("explicit", "explicit");
  if (BETTING_TERM.test(t)) {
    if (GAMBLING_PROBLEM.test(t)) return hit("gambling-problem", "gamblingProblem");
    if (BETTING_TIPS.test(t)) return hit("betting", "betting");
  } else if (GAMBLING_PROBLEM.test(t)) return hit("gambling-problem", "gamblingProblem");
  if (FRAUD_REQUEST.test(t)) return hit("fraud", "fraud");
  if ((DOUBLE_MONEY.test(t) && DOUBLE_VERB.test(t)) || SEND_TO_GET.test(t) || PYRAMID.test(t)) return hit("scheme", "scheme");
  const assetTalk = ASSET.test(t) && !NOT_AN_ASSET_USE.test(t);
  if (PROMISED_RETURN.test(t)) return hit("return-promise", "returnPromise");
  if (BORROW.test(t) && assetTalk) return hit("borrow-to-invest", "borrowToInvest");
  if (QUICK.test(t) && !(FARM_OR_HOME.test(t) && !assetTalk)) return hit("get-rich", "getRich");
  if (assetTalk && RICH_WITH_ASSET.test(t)) return hit("get-rich", "getRich");
  if (assetTalk && PRICE_THING.test(t) && PRICE_VERB.test(t) && QUESTION_SIGNS.test(t)) return hit("investment-advice", "investment");
  if (assetTalk && PRICE_FORECAST.test(t)) return hit("investment-advice", "investment");
  if (assetTalk && (SHOULD_I.test(t) || (PRESENT_ASKING.test(t) && QUESTION_SIGNS.test(t)) || (WHICH_ONE.test(t) && BUY_WORDS.test(t)))) return hit("investment-advice", "investment");
  if (OPEN_INVEST.test(t) && !(FARM_OR_HOME.test(t) && !assetTalk)) return hit("investment-advice", "investment");
  return null;
}

module.exports = Object.freeze({ swahiliGuardReply, inSwahili, isSwahili, REPLIES });
